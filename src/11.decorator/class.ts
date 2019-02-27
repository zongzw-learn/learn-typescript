@sealed
class Greeterr {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

/**
 * 
 * 类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。 
 * 类装饰器不能用在声明文件中( .d.ts)，也不能用在任何外部上下文中（比如declare的类）。
 * 类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
 */
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}