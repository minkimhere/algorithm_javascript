// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.


let n = 12345;

solution(n);

function solution(n) {
    let str = n + '';
    let arr = str.split('');
    // arr = arr.map(n => parseInt(n));
    arr = arr.map(Number);
    arr = arr.reverse();
    return arr;
}