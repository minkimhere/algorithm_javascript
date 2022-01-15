// let absolute = [4, -7, 12];
// let signs = Math.sign(absolute);

// function solution(absolutes, signs) {
//     var answer = 123456789;
//     return answer;
// }

// let absolute = [4, -7, 12];
// let sign = 0;
// for (let num in absolute){
//     sign = Math.sign(absolute[num]);
//     console.log([sign]);
// }

// for (i = 0; i< absolute.length; i++){
//   console.log(absolute[i]);

// }

// 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.


// function solution(absolutes, signs) {
//     var answer = 123456789;
//     return answer;
// }

// let absolute = [4, -7, 12];
// let sign = 0;
// let positive = 0;
// for (let num in absolute){
//     sign = Math.sign(absolute[num]);
//     // console.log([sign]);

//     if(sign === -1){
//       absolute[num] *= -1; 
//       console.log(absolute)
//     }
// }

// 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

// 잘못이해해서 음수로 받아도 무조건 양수로 합치게 함...
// let absolutes = [4, -7, 12];
// let signs = [true, false, true];
// let signbool = 0;


// solution(absolutes, signs);

// function solution(absolutes, signs) {
//   let answer = 0;

//   for (let num in absolutes){
//     // console.log(absolutes[num]);

//     signbool = Math.sign(absolutes[num]);
//     // console.log(signbool);
//     if(signbool === -1) {
//       absolutes[num] *= -1; 
//     }
//     // console.log(absolutes[num]);
//     answer += absolutes[num];
//   }
//   // console.log(answer);
//   return answer;
// }


//다시 하기
let absolutes = [4, 7, 12];
let signs = [true, false, true];

solution(absolutes, signs);

function solution(absolutes, signs) {
  let answer = 0;

  for (let num in signs){

    if (signs[num] === false) {
      absolutes[num] *= -1;
    }
    answer += absolutes[num];

  }
  console.log(answer);
}
