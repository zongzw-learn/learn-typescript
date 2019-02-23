namespace a {
    // 关于private 和 protected 的兼容性问题。
    // 虽然Animal 和 Employee 都有类似的结构，但是因为他们的private变量的存在变得不兼容。
    class Animal {
        private name: string;
        constructor(theName: string) { this.name = theName; }
    }

    class Rhino extends Animal {
        constructor() { super("Rhino"); }
    }

    class Employee {
        private name: string;
        constructor(theName: string) { this.name = theName; }
    }

    let animal = new Animal("Goat");
    let rhino = new Rhino();
    let employee = new Employee("Bob");

    animal = rhino;
    // Type 'Employee' is not assignable to type 'Animal'.
    // Types have separate declarations of a private property 'name'
    //animal = employee; // Error: Animal and Employee are not compatible
}
