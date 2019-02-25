/**
 * typescript中的类型兼容性判断是基于子类型的。 
 */
interface Named {
    name: string;
}

let y = {name: 'andrew', age: 23};

// 这里在赋值时会检查x所需要的属性在y中是否具备。如果具备就赋值成功。 
let x: Named = y;

