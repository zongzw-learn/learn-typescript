/**
 * 定义类类型: 接口定义了类的公共部分。
 */

interface ClockImpInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

// 定义类ClockImp 来实现这个接口(类的公共部分)。
class ClockImp implements ClockImpInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(hour: number, minute: number) {
        return this;
    }
}
