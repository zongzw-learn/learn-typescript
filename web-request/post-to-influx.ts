// const request = require('request')

// request('http://foxfox.mychinabluemix.net', function (error, response, body) {
//   console.log(response.statusCode);
//   console.log(response)
// });

// import * as request from "request-promise-native";

// const baseUrl = 'http://foxfox.mychinabluemix.net';
// const queryString = ''//'?num=100&min=1&max=100&col=5&base=10&format=html&rnd=new';
// var options = {
//   uri: baseUrl + queryString,
// };

// request.get(options).then((r) => {
//   console.log(r)
// })

// import * as WebRequest from 'web-request';

// WebRequest.get('http://foxfox.mychinabluemix.net').then((r) => {
//   console.log(r);
// })

// let url = 'http://localhost:8086/write?db=mydb';

// WebRequest.post(url, undefined, 'cpu_load_short,host=server01,region=us-west value=0.64').then(
//   (r) => { console.log(r.statusCode) },
// )


function f(a: number[]) {
  let i, j: number;
  i = 0; 
  j = a.length - 1;

  while(i<j) {
    let m = i + (j - i)/2;
    if (a[m]> a[i]) {
      i = m + 1;
    }
    else {
      j = m;
    }
  }

  console.log(a[j]);
  // return a[j];
}

// let a = [7, 8, 9, 1, 2, 3, 4,5, 6]
// let a = [1, 2, 3, 4,5, 6]
let a = [1]
f(a)