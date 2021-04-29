let list = [4, 5, 6];

for (let i in list) {
    console.log(i); // "0", "1", "2",
}

for (let i of list) {
    console.log(i); // "4", "5", "6"
}

let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for (let pet in pets) {
    console.log(pet); // "species"
}

//Type 'Set<string>' is not an array type or a string type. Use compiler option '--downlevelIteration' to allow iterating of iterators.
// for (let pet of pets) {
//     console.log(pet); // "Cat", "Dog", "Hamster"
// }

/**
 * 
目标为 ES5 和 ES3
当生成目标为ES5或ES3，迭代器只允许在Array类型上使用。 在非数组值上使用 for..of语句会得到一个错误，就算这些非数组值已经实现了Symbol.iterator属性。
 */