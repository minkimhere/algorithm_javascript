// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

let n3 = 3;
let n4 = 4;

solution(n3);

function solution(n) {
  let watermelon = '수박';
  let str = watermelon.repeat(n/2 + 1);

  let answer = str.slice(0, n)
  return answer;
}