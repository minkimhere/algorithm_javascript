// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

let s = "try hello world";

solution(s);

function solution(s) {
  let answer = '';
  let arr = s.split(' ');

  for(let i = 0; i < arr.length; i++){
    let newarr = arr[i].split('');
    newarr.push(' ');
    
    let prac = newarr.reduce((acc, cur, index, arr) => {
      if (index % 2 === 0){
        cur = cur.toUpperCase();
      } else {
        cur = cur.toLowerCase();
      }
      answer += (cur);
    }, 0);
  };

  answer = answer.slice(0, -1);
  return "" + answer + "";
}


// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.


// let s = "try hello world";

// solution(s);


// function solution(s) {
//   let arr = s.split('');
//   let sum;

//   arr.map(arr => {
//     for (let num in arr) {
//     }
//   });

//   // console.log(arr)
  
// }


// arr.map(callback(currentValue[, index[, array]])[, thisArg])

// [10, 20, 30].forEach((value, index, array)=>{
//     console.log(`${index} : ${value}`); // 0 : 10, 1 : 20, 2: 30 출력
// })
