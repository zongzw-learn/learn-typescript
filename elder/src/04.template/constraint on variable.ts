/**
 * 在定义泛型函数时使用extends添加约束变量约束。
 */

interface LengthWise {
    length: number;
}

function func<T extends LengthWise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

console.log(func({length: 34, other: 'a'}));
console.log(func(Array(52)));

//Argument of type '3' is not assignable to parameter of type 'LengthWise'.
//console.log(func(3));