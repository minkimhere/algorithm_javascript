// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// let s = "pPoooyY"
// solution(s);

// function solution(s){
//     let answer = true;

//     let char = [];
//     char = s.split('');
//     let pCount = 0;
//     let yCount = 0;

//     for (let i = 0; i < char.length; i++){
//       switch (char[i]){
//         case 'p':
//         pCount += 1;
//         break;

//         case 'P':
//         pCount += 1;
//         break;

//         case 'y':
//         yCount += 1 ;
//         break;
        
//         case 'Y':
//         yCount+=1 ;
//         break;
//       }
//     }
    
//     if (pCount === yCount) {
//       return answer;
//     }else if (pCount !== yCount) {
//       return !answer;
//     }else if (pCount === 0 && pCount ===0) {
//       return !answer;
//     }

//     return answer;
// }



// let s = "pPoooyY"
// let ss = "pPoooY"
// solution(ss);



// function solution(s) {
//   return s.match(/p/ig).length == s.match(/y/ig).length;
// }


let s = "pPoooyY"
let ss = "pPoooY"
solution(ss);


function solution(s) {
 console.log(s.toUpperCase().split("P"))
 console.log(s.toUpperCase().split("Y"))
  return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}



