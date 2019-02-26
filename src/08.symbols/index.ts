let sym1 = Symbol();
let sym2 = Symbol("key");

let sym3 = Symbol("key");

sym2 === sym3; // false;

let obj = {
    sym1: 'value',
    [sym2]: 'ohter'
}

console.log(obj.sym1);
obj.ad = 'a'; // 这里的ad是个symbol
console.log(obj.ad);


/**
 * 这是个什么用法。 
 */
const getClassNameSymbol = Symbol();
class C {
    [getClassNameSymbol](){
       return "C";
    }
}

let ccc = new C();
let className = ccc[getClassNameSymbol](); // "C"


//let sss: string[] = String.prototype.split("");
let sss = new String("hello world").split(' ');
// Symbol.split

// A regular expression method that splits a string at the indices that match the regular expression. Called by the String.prototype.split method.
// Symbol.toPrimitive

console.log(sss);