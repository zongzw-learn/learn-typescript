/**
 * 直接实现带有new构造器的接口时会因为类型检查而报错。
 * 需要区分 类静态部分和实例部分，分别定义interface。
 */ 

// interface ClockConstructor {
//     new (hour: number, minute: number);
// }

// **** Class 'Clock' incorrectly implements interface 'ClockConstructor'.
// ****   Type 'Clock' provides no match for the signature 'new (hour: number, minute: number): any'.

// class Clock implements ClockConstructor {
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }

// 解决方案如下：
// 类静态部分与实例部分的区别

// 静态部分（类部分）
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    // 传入的是构造实例用的静态接口。
    // 看来构造函数constructor可以使用new 来触发。 
    return new ctor(hour, minute);  
}

// 实例部分
interface ClockInterface {
    tick(): void;
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
digital.tick();
analog.tick();
