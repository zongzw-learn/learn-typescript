/**
 * 装饰器使用@expression这种形式，expression求值后必须为一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入。
 */

 /**
  * 装饰器组合
  * 
  * 当多个装饰器应用在一个声明上时会进行如下步骤的操作：

    由上至下依次对装饰器表达式求值。
    求值的结果会被当作函数，由下至上依次调用。


  * @f @g x 
  * 
  * or 
  * 
  * @f
  * @g
  * x
  */

 function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
        console.log(target, propertyKey, descriptor);
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
        console.log(target)
        console.log(propertyKey);
        console.log(descriptor);
    }
}

class Ccc {
    @f()
    @g()
    method() {}
}



// "experimentalDecorators": true
