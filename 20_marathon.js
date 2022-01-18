// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.


// let participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
// let completion = ["josipa", "filipa", "marina", "nikola"];

let participant = ["mislav", "stanko", "mislav", "ana"];
let completion = ["stanko", "ana", "mislav"];

// let participant = ["leo", "kiki", "eden"];
// let completion = ["eden", "kiki"];

solution(participant, completion);

function solution(participant, completion) {
  let answer;

  participant.sort();
  completion.sort();
  
  for (let i = 0; i < participant.length; i++) {
    if(participant[i] !== completion[i]){
      answer = participant[i]
      break;
    }
  }
  return answer;
}


//다른 사람 문제풀이 복붙해와봄 졸려서 안 읽힘
// function solution(participant, completion) { 
// const completeObj = {} 

// // 완주자 명단 만들기 
// completion.forEach(name => { 
  
//   // 명단에 없는 이름이면 
//   { 이름: 1 } if (!completeObj[name]) completeObj[name] = 1 
  
//   // 이미 올라간 이름이면 등장횟수++ 
//   else completeObj[name]++ }) 
  
//   // 참가자와 완주자 명단 비교 
//   return participant.find(name => { 
    
//     // 현 참가자가 완주자 명단에 있고, 값이 0이 아니면 값-- 
  
//     if (completeObj[name]) completeObj[name]-- 
//     // 명단에 없거나 값이 0이면 리턴 
//     else return name }) 
//     }