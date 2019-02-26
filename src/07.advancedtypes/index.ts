import { Z_FINISH } from "zlib";

/**
 * 类的&和|，正好和变量的&|相反。
 * & 叫做价差类型，会将所有的类的属性 集合起来。 
 */

function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class Person {
    constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log() {
        console.log("logging here.")
    }
}
var jim = extend(new Person("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();


/**
 * 如果是|, 则叫做联合类型。会将所有类型的公共属性留下来。 
 */
interface BirdBehavior {
    fly(): void;
    layEggs(): void;
}

interface FishBehavior {
    swim(): void;
    layEggs(): void;
}

class Bird implements BirdBehavior {
    fly(): void { };
    layEggs(): void { };
}

class Fish implements FishBehavior {
    swim(): void { }
    layEggs(): void { };
}

function getSmallPet(): Fish | Bird {
    if (Math.random() < 0.5) return new Fish();
    else return new Bird();
}

let pet = getSmallPet();
pet.layEggs(); // okay
//Property 'swim' does not exist on type 'Bird | Fish'.
//Property 'swim' does not exist on type 'Bird'.
//pet.swim();    // errors

/**
 * 通过强制转换的方式 确定对象行为。
 */
if ((<Fish>pet).swim) {
    (<Fish>pet).swim();
}
else {
    (<Bird>pet).fly();
}

/**
 * 采用类型断言。
 */
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}
// 'swim' 和 'fly' 调用都没有问题了
if (isFish(pet)) pet.swim();
else pet.fly();


/**
 * typeof instanceof
 */
if(pet instanceof Fish) pet.swim();
else pet.fly();

/**
 * typeof 比较的对象只能是"number"，"string"，"boolean"或"symbol"
 */


 /**
  * 类型别名
  */

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
type Container<T> = { value: T };
// 在属性中引用自己。
type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}


type LinkedList<T> = T & { next: LinkedList<T> };

// 不能出现在声明的右侧？？为什吗上边这个可以: 实际上可以出现在右侧，但是不能够circularly declared
//TS2456: Type alias 'Yikes' circularly references itself.
type Yikes = Array<Yikes>; // error

// interface Person {
//     name: string;
// }

// var people: LinkedList<Person>;
// var s = people.name;
// var s = people.next.name;
// var s = people.next.next.name;
// var s = people.next.next.next.name;

/**
 * 接口和类型别名。
 */
type Alias = { num: number }
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;


/**
 * 给字符字面量限定固定值。
 */
type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === "ease-in") {
            // ...
        }
        else if (easing === "ease-out") {
        }
        else if (easing === "ease-in-out") {
        }
        else {
            // error! should not pass null or undefined.
        }
    }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
//button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here

/**
 * 字符字面量实现重载。
 */
function createElement(tagName: "img"): HTMLImageElement;
function createElement(tagName: "input"): HTMLInputElement;
// ... more overloads ...
function createElement(tagName: string): Element {
    // ... code goes here ...
    return null;
}

/**
 * 可辨识联合 -- 实际都是字符字面量的应用。
 */
interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}

type Shape = Square | Rectangle | Circle;
// function area(s: Shape) {
//     switch (s.kind) {
//         case "square": return s.size * s.size;
//         case "rectangle": return s.height * s.width;
//         case "circle": return Math.PI * s.radius ** 2;
//     }
// }

/**
 * 如果switch中缺少一个类型，编译器会提示错误。
 * --strictNullChecks 会 在定义area处提示 // error: returns number | undefined
 */
// type Shape = Square | Rectangle | Circle | Triangle;
// function area(s: Shape) {
//     switch (s.kind) {
//         case "square": return s.size * s.size;
//         case "rectangle": return s.height * s.width;
//         case "circle": return Math.PI * s.radius ** 2;
//     }
//     // should error here - we didn't handle case "triangle"
// }

/**
 * 或者使用 default。never类型，还有个类型叫never类型。
 * 
 */
function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
}
function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
        default: return assertNever(s); // error here if there are missing cases
    }
}

/**
 * 多台的this，this 指向的是当前类型，这点很好用。 
 */

class BasicCalculator {
    public constructor(protected value: number = 0) { }
    public currentValue(): number {
        return this.value;
    }
    public add(operand: number): this {
        this.value += operand;
        return this;
    }
    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }
    // ... other operations go here ...
}

let v = new BasicCalculator(2)
    .multiply(5)
    .add(1)
    .currentValue();

class ScientificCalculator extends BasicCalculator {
    public constructor(value = 0) {
        super(value);
    }
    public sin() {
        this.value = Math.sin(this.value);
        return this;
    }
    // ... other operations go here ...
}

v = new ScientificCalculator(2)
        .multiply(5)
        .sin()
        .add(1)
        .currentValue();