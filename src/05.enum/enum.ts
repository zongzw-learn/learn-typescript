/**
 * 各种枚举，个人感觉前两个还是比较有用的，其他暂时不考虑。 
 * 外部枚举暂时也用不到。 
 */
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

enum FileAccess {
    // constant members
    None,
    Read    = 1 << 1,
    Write   = 1 << 2,
    ReadWrite  = Read | Write,
    // computed member
    G = "123".length
}

// enum Enum {
//     A
// }

// 访问方法：
// let enumA = Enum.A;
// let nameOfA = Enum[Enum.A]; // "A"

// 常数枚举的成员在使用的地方被内联进来。 
// 因为常数枚举不可能有计算成员，这里需要注意。
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [
    Directions.Up, 
    Directions.Down, 
    Directions.Left, 
    Directions.Right
]



// 在正常的枚举里，没有初始化方法的成员被当成常数成员。 
// 对于非常数的外部枚举而言，没有初始化方法时被当做需要经过计算的。
// 外部枚举。
// error TS2432: In an enum with multiple declarations, 
// only one declaration can omit an initializer 
// for its first enum element.
// enum Enum {
//     A
// }
// declare enum Enum{
//     B,
//     C = 2  
// };
// {
//     A = 1,
//     B,
//     C = 2
// }

//console.log(Enum.A);