//error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.
// get set 使得像访问变量一样访问类成员函数。 

let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}

passcode = '1';
let emp = new Employee();
emp.fullName = "Andrew";
console.log(emp.fullName);