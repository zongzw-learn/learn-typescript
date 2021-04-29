/**
 * 泛型的兼容性写法。
 */
namespace b {
    let identity = function<T>(x: T): T {
        // ...
        return x;
    }
    
    let reverse = function<U>(y: U): U {
        // ...
        return y;
    }
    
    identity = reverse;  // Okay because (x: any)=>any matches (y: any)=>any
}