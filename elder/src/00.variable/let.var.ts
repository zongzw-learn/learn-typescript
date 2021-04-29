
/**
 * 
 * var 和 let 的区别：
 * 
 * var定义的变量可以在定义块之前访问它；而let定义的变量只作用于定义块内部。 
 * var定义的变量可以再次通过var重复定义，而let不能。
 * 
 * 
 */
export function loopiVar() {
    for (var i = 0; i < 10; i++) {
        // capture the current state of 'i'
        // by invoking a function with its current value
        (function (i) {
            setTimeout(function () { console.log(i); }, 100 * i);
        })(i);
    }
}

export function loopiLet() {
    // 此处，如果 单独定义 i如下，则会导致i的作用于发生变化。 两者的运行结果不同。
    // let i: number; 

    // 以下写法类似于 i的作用于较小，每次都重新定义获取新的值。

    for (let i = 0; i < 10; i++) {
        setTimeout(function () { console.log(i); }, 100 * i);
    }
}


export function main() {
    console.log("loopiVar:");
    loopiVar();

    console.log("loopiLet:");
    loopiLet();
}
