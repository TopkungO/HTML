let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

/* forEach*/

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
//------------------
// arr.forEach((item, index) => {
//   console.log(item, index);
// });

/*map */

// for (let i = 0; i < arr.length; i++) {
//arr[i] = arr[i] + 1;
// }
//   console.log(arr[i]);
//------------------
// let newArr = arr.map((item) => item + 1);
// console.log(newArr);

/*reduce  บวกค่าได้ตั้งแต่ต้นอาเรค์*/
//sum=0;
// for (let i = 0; i < arr.length; i++) {
//   sum+=arr[i]
// }
//console.log(sum);
//------------------
// let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(sum);

//Evevy เช็คเงื่อนไขในอาเรค์
// let allGreater = true;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] <= 0) {
//     allGreater = false;
//     break;
//   }
// }
// console.log(allGreater);
//------------------
// let allGreater = arr.every((item) => item > 0);
// console.log(allGreater);

//some
// let hasGreater =arr.some((item)=> item>0)
// console.log(hasGreater);

//filter loopแล้วเช็ตว่าผ่านเงื่อนไขไหม แล้วเก็บเข้าไปในตัวแปรใหม่
// let greaterArr = arr.filter((item) => item > 0);
// console.log(greaterArr);

//find
// let greaterThan = arr.find((item) => item > 0);
// console.log(greaterThan);
