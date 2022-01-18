// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// solution(3, 5);


// function solution(a, b) {
//     let num = [];
//     let sum = 0;

//     for (let i = a; i <= b; i++) {
//       num.push(i);
//     }

//     if(b > a || b === a){
//       for (let i = 0; i <= (b - a); i++) {
//       sum += num[i];
//       }
//     }

//     return sum;
// }

solution(5, 3);


function solution(a, b) {
    let num = [];
    let sum = 0;

    if (b > a | b === a ){
      for (let i = a; i <= b; i++) {
      num.push(i);
      }
    } else if(a > b) {
      for (let i = a; i >= b; i--) {
      num.push(i);
      }
    }

    if(b > a || b === a){
      for (let i = 0; i <= (b - a); i++) {
      sum += num[i];
      }
    } else if (a > b) {
      for (let i = 0; i <= (a - b); i++) {
      sum += num[i];
      }
    }
    
    return sum;
}
