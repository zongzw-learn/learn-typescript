/**
 * 属性装饰器声明在一个属性声明之前（紧靠着属性声明）。 
 * 属性装饰器不能用在声明文件中（.d.ts），或者任何外部上下文（比如 declare的类）里。
 * 属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
 *     对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
 *     成员的名字。
 */


class Greeter4 {
    @format("Hello, %s")
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        let formatString = getFormat(this, "greeting");
        return formatString.replace("%s", this.greeting);
    }
}

/**
 * 这个实现过程不明白，上边的使用方法是清楚的。 
 */
import "reflect-metadata";

const formatMetadataKey = Symbol("format");

function format(formatString: string) {
    return Reflect.metadata(formatMetadataKey, formatString);
}

function getFormat(target: any, propertyKey: string) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}
/**关于元数据：
 * TypeScript编译器可以通过@Reflect.metadata装饰器注入设计阶段的类型信息。 
 */

// class Line {
//     private _p0: Point;
//     private _p1: Point;

//     @validate
//     @Reflect.metadata("design:type", Point)
//     set p0(value: Point) { this._p0 = value; }
//     get p0() { return this._p0; }

//     @validate
//     @Reflect.metadata("design:type", Point)
//     set p1(value: Point) { this._p1 = value; }
//     get p1() { return this._p1; }
// }

