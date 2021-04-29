
// async function funcNormal(): Promise<string> {
//     return Promise.resolve("normal");
// }

// funcNormal().then(
//     s => console.log(s),
// );

async function funcExcp(): Promise<string> {
    throw new Error("error message here.");
}

funcExcp().then(
    s => console.log("normal"),
    r => console.log('exception.'),
);


// function findmin() {
//     // let a = [0, 1, 2, 3, 4, 5];
//     let a = [124, 150, 178, 14, 19, 80];

//     let l = 0; 
//     let r = a.length - 1;
//     console.log(r)
//     let m = l + (r-l)/2; 

//     while(l < r) {
//         m = l + (r-l)/2;
//         console.log(m)
//         if(a[m] > a[l]) {
//             l = m + 1;
//         }
//         else {
//             r = m;
//         }
//     }

//     console.log(a[l]);
//     // return a[l];
// }

// findmin();