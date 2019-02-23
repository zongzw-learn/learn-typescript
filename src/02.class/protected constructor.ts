namespace b {
    // 如果构造函数被标记为protected，则代表这个类不能在这个类外被实例化，但是可以在类里（子类里）被实例化。
    class Person {
        protected name: string;
        protected constructor(theName: string) { this.name = theName; }
    }

    // Employee can extend Person
    class Employee extends Person {
        private department: string;

        constructor(name: string, department: string) {
            super(name);
            this.department = department;
        }

        public getElevatorPitch() {
            return `Hello, my name is ${this.name} and I work in ${this.department}.`;
        }
    }

    let howard = new Employee("Howard", "Sales");
    //[ts] Constructor of class 'Person' is protected and only accessible within the class declaration.
    //let john = new Person("John"); // Error: The 'Person' constructor is protected
}