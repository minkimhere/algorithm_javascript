// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.


// let arr = [1,2,3,4];
// let arr = [5,5];

// solution(arr);

// function solution(arr) {
//   let sum = 0;
//   let avr = 0;
//     for (let index in arr){
//       sum += arr[index];
//       avr = sum/arr.length;
//     }
//   return avr;
// }



let arr = [1,2,3,4];
// let arr = [5,5];

solution(arr);

function solution(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0) /arr.length;
}