/**
 * "带有调用签名的对象字面量"
 */

function identity<T>(arg: T): T {
    return arg;
}

// 直接的写法：调用参数 + 返回值
let my1: <T>(arg: T) => T = identity;
// 带有调用签名的对象字面量
let my2: {<T>(arg: T): T} = identity;

// 将签名字面量定义成了接口。
interface GenericFunc {
    <T>(arg: T): T;
}
let my3: GenericFunc = identity;

// 带有泛型的接口定义方式：可以在接口的成员中就能知道这个参数的类型了。
interface GenericFuncT<T> {
    <T>(arg: T): T;
}
let my4: GenericFuncT<number> = identity;
