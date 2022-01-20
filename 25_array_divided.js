// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.


// let arr = [5, 9, 7, 10]	;
// let divisor = 5;

let arr = [3,2,6];
let divisor = 10;

// 입출력 예#1
// arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 따라서 [5, 10]을 리턴합니다.

// 3, 2, 6은 10으로 나누어 떨어지지 않습니다. 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.

solution (arr, divisor);

function solution(arr, divisor) {
    let answer = [];

    for (let index in arr) {
     if(arr[index] % divisor === 0) {
       answer.push(arr[index]);
     } 
    }

    if(answer.length === 0){
      return [-1];
    }

    return answer.sort((a,b) => a-b);
}