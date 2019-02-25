/**
 * 在泛型里使用类类型。
 */

// 注意这里对构造函数的类型约束（调用）形式： { new(): T }。
function create<T>(c: { new(): T }): T {
    return new c();
}


class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function findKeeper<A extends Animal, K> (
    // A extends 自 Animal 和 K
    a: {new(): A; prototype: {keeper: K}}
    // 这里使用两个约束：new()是作为Animal类型的约束； prototype 是类类型约束。
): K {
    return a.prototype.keeper;
}

// 编译报错，但还不知道为什么。。
//TypeError: Cannot read property 'nametag' of undefined
//console.log(findKeeper(Lion).nametag);  // typechecks!

// 对象是没有prototype约束的。 
// error TS2345: Argument of type 'Lion' is not assignable to parameter of type '{ new (): Animal; prototype: { keeper: {}; }; }'.
//   Property 'prototype' is missing in type 'Lion' but required in type '{ new (): Animal; prototype: { keeper: {}; }; }'.

// 43 console.log(findKeeper(l).nametag);
//                           ~
// let l = new Lion();
// console.log(findKeeper(l).nametag);