// 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

let n = 118372;

solution(n)

function solution(n) {
    let arr = (n + '').split('')
    let reverse = arr.sort().reverse().join('')*1;
    return reverse;
}




//다른 사람 코드 이해하는데 시간이 너무 오래걸려 다음 문제 풀러감
// let n = 118372;

// solution(n)

// function solution(n) {
//     //숫자가 분명히 더 빠름
//     var nums =[];

//     // do{
//     //   console.log(n)
//     // }while(n>0)
   
//     do{
//         // console.log(n)
//         // console.log(Math.floor(n)%10);
//         nums.push(n%10);
//         // n = Math.floor(n/10);
//         // console.log(n)
//          console.log(Math.floor(n)%10);
        

        
//     } while(n>0)

//     // return nums.sort((a,b)=>b-a).join('')*1;
//     //문자는 느림
//     // return (n+"").split('').sort((a,b)=>b-a).join('')*1;
// }

