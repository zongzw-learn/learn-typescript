# 中文描述：
 * https://github.com/strongloop/loopback-next/issues/2447
 * 当注册两个相同前缀的API时，如果较长API注册发生在较短的前边，则会有出现后者无法访问到的问题。
 以下是这个问题的描述和解析(从以上连接中拷贝)。

# 以上链接中的解析拷贝。

In fact, this issue does not relate to "different controller" you mentioned.

Even if you put the two routes together into one controller, this issue can also be triggered if you declare/implement the longer path before the shorter path. That means:

```
# issue happens

delete /test/v1/pools/{pool_id}/members/{member_id}
delete /test/v1/pools/{id}
```

```
# NO issue happens

delete /test/v1/pools/{id}
delete /test/v1/pools/{pool_id}/members/{member_id}
```

**Why as it is?**

From `@loopback/rest/src/rest.server.ts` and `@loopback/rest/src/router/routing-table.ts`, All route specs from all controllers would be registered one by one, controllers in the alphabet order found.

In your case, the route register sequence is: (M -> P)
1 MemberController: delete /test/v1/pools/{pool_id}/members/{member_id}
2 PoolController: delete /test/v1/pools/{id}

When `const route = this.findRoute(request);` during the API access, it trigger the `search` process in `@loopback/rest/src/router/trie.ts`,

```
function search<T>(
  keys: string[],
  index: number,
  // tslint:disable-next-line:no-any
  params: {[name: string]: any},
  parent: Node<T>,
): ResolvedNode<T> | undefined {
  const key = keys[index];
  const resolved: ResolvedNode<T> = {node: parent, params};
  if (key === undefined) return resolved;

  const children = matchChildren(key, parent);
  if (children.length === 0) return undefined;
  // There might be multiple matches, such as `/users/{id}` and `/users/{userId}`
  for (const child of children) {
    const result = search(keys, index + 1, params, child.node);
    if (result) {
      Object.assign(params, child.params);
      return result;
    }
  }
  // no matches found
  return undefined;
}
```

` for (const child of children) {`: the children of `/pools/{id}` and `/pools/{pool_id}` becomes different;
Iterating `/pools/{id}` before `/pools/{pool_id}/members/{member_id}` leads no problem, but the other case will fail.

When you put the 2 routes into one controller, the routes are registered in the order of their declaration. You didn't encounter the issue because you put `delete /test/v1/pools/{id}` before the other.

**Conclusion**:

You can define our own Router to solve the problem as mentioned: https://loopback.io/doc/en/lb4/Routing-requests.html.

But this should be an issue/bug of loopback4, personally speaking.
