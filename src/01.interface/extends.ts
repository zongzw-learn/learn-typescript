
// 接口也可以extends类。

class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control {
    select() { }
}
class TextBox extends Control {
    select() { }
}
class Image1 {
    select() { }
}
class Location1 {
    select() { }
}

// 接口可以继承类，在继承类时只会继承类的成员和函数定义，而不包含实现。
// 继承的成员包含私有private和保护protected成员。
// 继承了类的接口只能被该类或类的子类所实现： 
// 如果没有 extends Control，会报错：
// Class 'PopBox' incorrectly implements interface 'SelectableControl'.
//  Property 'state' is missing in type 'PopBox' but required in type 'SelectableControl'.
class PopBox extends Control implements SelectableControl{ 
    select(): void {

    }
}
