namespace a {
    let x: (a: number) => 0;
    let y: (a: number, b: number) => 0;

    // Error: 函数的兼容性比较和变量不同。
    // 变量兼容性是检查目标变量的属性在源中是否存在。 
    // 函数兼容性是检查源函数和目标函数的参数列表是否兼容。 
    // x = y;

    y = x;


    /**
     * forEach 函数实际是接受3个参数的函数，但当被赋予一个参数的函数时是OK的。 
     */
    let items = [1, 2, 3];

    // Don't force these extra arguments
    items.forEach((item, index, array) => console.log(item));

    // Should be OK!
    items.forEach((item) => console.log(item));


    /**
     * 对于相同参数，不同返回值的函数兼容性。 
     * 实际上检查的是变量兼容性。 
     */
    let i = () => ({ name: 'Alice' });
    let j = () => ({ name: 'Alice', location: 'Seattle' });

    i = j; // OK
    //j = i; // Error because x() lacks a location property
}