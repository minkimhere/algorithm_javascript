// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// let s = " a234 4 ";
// // let s = "1.234";

// solution(s);

// function solution(s) {
//   console.log(s.replace(/(\s*)/g, ""))
  // console.log(isNaN(s.trim()))
  // return ((s.length === 4 || s.length === 6) && (isNaN(s) === false) ? true : false)
// }

let s = "a234"	
// let s = "1234"

solution(s);

function solution(s) {
   return (s == parseInt(s)) && (s.length === 4 || s.length === 6) ? true : false
}