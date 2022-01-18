// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// let numbers = [1,2,3,4,6,7,8,0];
// solution(numbers);

// 5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다.

// function solution(numbers) {
//   // console.log(Math.min(...numbers));
//   // console.log(Math.max(...numbers));

//   let fullnum = [];

//   for (i = Math.min(...numbers); i < Math.max(...numbers); i++) {
//     fullnum.push(i);
//   }
//   // console.log(fullnum)

//   const newArr = fullnum.map(myFunction)

//   function myFunction(numbers) {
//     return numbers;
//   }

//   console.log(newArr)
// }

let numbers = [1,2,3,4,6,7,8,0];
solution(numbers);

function solution(numbers) {
    let numsum = 0;
    let fullnumsum = 0;

    for(let i = 0; i <=9; i++){
      fullnumsum += i;
    }
    console.log(fullnumsum);

    for (let i = 0; i < numbers.length; i++) {
      numsum += numbers[i];
    }
    console.log(numsum);

    return fullnumsum - numsum;
    console.log(fullnumsum);
}


// const ages = [3, 10, 18, 20];

// ages.findIndex(checkAge);

// function checkAge(age) {
//   return age > 18;
// }
