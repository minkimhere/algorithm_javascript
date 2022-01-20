// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

let phone_number = "01033334444";
// let phone_number = "027778888";

solution(phone_number);

function solution(phone_number) {  
  let star = '*'
  let frontnum = ''
  for (let i = 0; i < phone_number.length-4; i++) {
    frontnum += star;
  }
   return  phone_number.replace(phone_number.substr(0, phone_number.length-4), frontnum)
}


 
// 맨 뒷자리 4개만 **** 로 잘못함
// function solution(phone_number) {  
//   return phone_number.slice(0, phone_number.length -4) + '****'
// }


// slice 실험
// function solution(phone_number) {  
//   console.log(phone_number.slice(-4))
// }

