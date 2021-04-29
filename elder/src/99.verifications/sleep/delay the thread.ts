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
