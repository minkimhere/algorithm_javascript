// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.

// solution("abcdefg")

// function solution(s) {

//   let num = s.length;
//   let quotient = parseInt(num/2);
//   console.log(s[quotient]);
// }


// let input = prompt('문자를 입력하세요.');
s2("abcdefgh");

function s2(s){
  let num = s.length;
  let oddeven = parseInt(num % 2)
  let quotient = parseInt(num/2);
  let answer = 0;

  if (oddeven == 0) {
    answer = s[quotient-1] + s[quotient];
  } else {
    answer = s[quotient];
  }

  console.log(answer)
  
}



