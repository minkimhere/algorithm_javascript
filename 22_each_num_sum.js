// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.


// let n = 123;
// let n = 987;

// solution(n);

// function solution(n)
// {
//   let arr = (n + '').split('');
//   let num = arr.map(arr => parseInt(arr));
//   let result = num.reduce((acc, cur, index) => acc += cur);
//   return result;
// }

// reduce( (accumulator, currentValue, currentIndex) => {return 결과} , 초기값)



let n = 123;
// let n = 987;

solution(n);

function solution(n){
    // 문자 풀이
    // return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)

    // 숫자풀이
    var sum = 0;

    do {
        sum += n%10;
        n = Math.floor(n/10);
    } while(n > 0);

    return sum;
}
