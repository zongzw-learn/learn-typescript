
/**
 *
 * 采用 “解构”的方式显示变量赋值。
 * */

export function main() {
    let [first, ...rest] = [1, 2, 3, 4];
    console.log(first); // outputs 1
    console.log(rest); // outputs [ 2, 3, 4 ]
}
