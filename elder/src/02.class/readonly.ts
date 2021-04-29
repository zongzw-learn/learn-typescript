// readonly
// readonly的成员变量只能在构造函数里初始化。
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
// [ts] Cannot assign to 'name' because it is a read-only property.
//dad.name = "Man with the 3-piece suit"; // error! name is readonly.
