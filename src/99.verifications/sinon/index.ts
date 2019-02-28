
import * as sinon from 'sinon';
//import { Exception } from 'handlebars';

class A {
    constructor() {}

    func1() {
        console.log("real function.")
    }
    func2(num: number): string {
        //if (num < 10) throw new Exception("exception happens");
        
        return "OK";
    }
}

let func1Fake111 = sinon.stub(A.prototype, 'func1');
func1Fake111.callsFake(() => {
    console.log("fake function");
})

let func2Fake = sinon.stub(A.prototype, 'func2');
func2Fake.callsFake((num: number): string => {
    console.log("fake function");
    return "fake function";
})

let a = new A();
a.func1();
a.func2(3);

func2Fake.throws("sdfs");
a.func2(3);

func1Fake111.restore();
func2Fake.restore();
