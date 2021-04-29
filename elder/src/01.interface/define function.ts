/**
 * 定义函数
 */
interface SearchFunc {
    (source: string, subString: string): boolean;
}

// full definition
let mySearch1:SearchFunc = function(source: string, subString: string): boolean {
    return false;
}

// definition with no type
let mySearch2:SearchFunc = function(source, subString): boolean {
    return true;
}

// definition with no type, different variable name.
let mySearch3:SearchFunc = function(src, sub): boolean {
    return false;
}