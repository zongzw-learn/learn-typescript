
/**
 * 各种类型混合的接口。
 */
interface Counter {
    (start: number): string; // 匿名函数
    interval: number; // 变量
    internal: number;
    reset(): void; // 函数
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { 
        console.log(this) // this here refers to Object [global]
        this.internal = 23;
    };
    counter.interval = 123;
    counter.reset = function () { };
    //counter.internal = 23; // 如果 internal 没有赋值，最终的log 就不会打印出来。
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 6.0;

console.log(c);