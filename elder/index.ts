import { main } from "./src/00.variable/let.var";

/**
 * 
 * var 和 let 的区别：
 * 
 * var定义的变量可以在定义块之前访问它；而let定义的变量只作用于定义块内部。 
 * var定义的变量可以再次通过var重复定义，而let不能。
 * 
 * 
 */
// export function loopiVar() {
//     for (var i = 0; i < 10; i++) {
//         // capture the current state of 'i'
//         // by invoking a function with its current value
//         (function (i) {
//             setTimeout(function () { console.log(i); }, 100 * i);
//         })(i);
//     }
// }

// export function loopiLet() {
//     // 此处，如果 单独定义 i如下，则会导致i的作用于发生变化。 两者的运行结果不同。
//     // let i: number; 

//     // 以下写法类似于 i的作用于较小，每次都重新定义获取新的值。

//     for (let i = 0; i < 10; i++) {
//         setTimeout(function () { console.log(i); }, 100 * i);
//     }
// }

// console.log("loopiVar:");
// loopiVar();

// console.log("loopiLet:");
// loopiLet();

export async function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 将async方式声明的函数放在普通函数（非async函数）中的写法：
export function main1() {
    (async () => {
        // Do something before delay
        console.log('main1: before delay')
        await delay(3000);
        // Do something after
        console.log('main1: after delay')
    })();

}

// async函数中调用await delay
export async function main2() {
    console.log("main2: before delay");
    await delay(3000);
    console.log("main2: after delay");

}

// 循环delay，直到某种条件满足。
export async function main3() {
    let sign = 10;

    setTimeout(() => {
        sign = 0;
    }, 4000);

    for(let i = 0; i < 15; i++) {
        if (sign === 0) {
            console.log("sign got to be 0");
            break
        }

        console.log("waiting sign to be 0");
        await delay(1000); 
    }
}

main1()