// // _____Reduce method______

// // 1 reduce method structure **
// // 1.1 how work reduce method **
// // 2 filter,map method replace by reduce method **
// // 3 time complexity (op)
// // 4 implementation of reduce method and work with filter,map method **
// // 5 install axios **
// // 6 get jsonPlaceholder api by axios **
// // 6.1 after get api it will have to do filter(id,userId,title) and work with only first 5 api **
// // 7 convert api into object and work with  filtering mapping by reduce method.(we can not convert to object from array by using map) **
// // 8 create a names array and grouping by first latter **

// //8 create a names array and grouping by first latter
// const names = [
//   "asraful",
//   "anisul",
//   "afif",
//   "efran",
//   "ezaz",
//   "md.khairul",
//   "md.bahar",
//   "md.hasan",
//   "rayhan",
//   "yesir",
//   "yakob",
// ];

// const rdc = names.reduce((acc, cur, i) => {
//   const upr = cur[0].toUpperCase();

//   if (upr in acc) {
//     acc[upr].push(cur);
//   } else {
//     acc[upr] = [cur];
//   }
//   return acc;
// }, {});

// Object.keys(rdc).forEach((key) => {
//  console.log('____' + key +'____');
//  rdc[key].forEach(item => console.log(item ))
// })

// // result 1
// // obj = {
// // A: ["asraful", "anisul", "afif"],
// // E: ["efran", "ezaz"],
// // M: ["md.khairul", "md.bahar", "md.hasan"],
// //  R: ["rayhan"],
// // Y: ["yesir", "yakob"],
// // };

// //7 convert api into object after filtering mapping by reduce method.(we can not convert to object from array by using map)
// const axios = require("axios").default;
// // run only on terminal (require("axios").default)
// const url = "https://jsonplaceholder.typicode.com/posts";

// async function myPost() {
//   let { data } = await axios.get(url);
//   let result = data.slice(0,5).reduce((acc, cur) => {
//     acc[cur.id] = {
//       userId: cur.userId,
//       id: cur.id,
//       title: cur.title,
//     };
//     return acc;
//   }, {});
//   return result;
// }

// myPost()
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e));

// //6.1 after get api it will filter and map(id,userId,title) work with only first 5 api
// const axios = require("axios").default;
// const url = "https://jsonplaceholder.typicode.com/posts";

// async function myPost() {
//   let { data } = await axios.get(url);

//   const result = data.filter((value, index) => {
//     return index < 5;
//   });
//   const mp = result.map((v, i) => {
//     return {
//       userId: v.userId,
//       id: v.id,
//       title: v.title,
//     };
//   });
//   return mp;
// }

// myPost()
//   .then((r) => console.log(r))
//   .catch((e) => console.log(e));

// //4 implementation of reduce method and work with filter,map method
// const arr = [4,5,false,10,null,30];
// let init =[];
// function myReduce(arr,cb,init) {
//    let func = init;
//   for(let i =0; i < arr.length; i++){
//    func += cb(init,arr[i],i,arr)
//   }
//  return func
// }

// let cb = (acc,cur,ind,arr) => {
//   if (cur == arr[0]) acc = "[";
//   if (typeof cur == "number") {
//     acc += cur + (ind == arr.length - 1 ? "" : ",");
//   }

//   if (ind == arr.length - 1) acc += "]";

//   return acc;
// }

// console.log(myReduce(arr,cb,init));

// //2 filtering,mapping by reduce method
// const arr = [1, 2, 3, "asp", null, undefined, 4];

// const rdc = arr.reduce((acc, cur, ind) => {
//   if (acc == "") acc += "[";
//   if (typeof cur == "number") {
//     acc += cur + (ind == arr.length - 1 ? "" : ",");
//   }

//   if (ind == arr.length - 1) acc += "]";

//   return acc;
// }, "");

// console.log(rdc);

// //1.1 how work reduce method
// const arr = [1,2,3,'asp',true,undefined,4];

// const rdc = arr.reduce((acc,cur,ind,ar) => {
//       acc += cur
//    return acc
// },'')

// console.log(rdc)

// //1 reduce method structure
// const arr = [1,2,3,'asp',true,undefined,4];

//const rdc = arr.reduce((acc,cur,ind,ar) => {

//    return acc
// },'')
