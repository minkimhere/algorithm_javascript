// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// let n = 121;
let n = 3;

solution(n);

// function solution(n) {
//   let sqroot = Math.sqrt(n);
//   if(sqroot % 1 === 0){
//     return (sqroot + 1)*(sqroot + 1);
//   }else {
//     return -1;
//   }

//   return Math.sqrt(n)%1 === 0 ? (sqroot+1)**2 : -1
// }


//위 코드랑 똑같지만 줄여서 제출하고 싶어서 줄였다.
function solution(n) {
  return Math.sqrt(n)%1 === 0 ? (Math.sqrt(n)+1)**2 : -1;
}

