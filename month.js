// 성륜이는 오늘 항해99를 시작했다. 성격이 급한 성륜이는 항해 1일 차부터 언제 수료를 하게될 지 궁금하다.
// 항해 1일 차 날짜를 입력하면 98일 이후 항해를 수료하게 되는 날짜를 계산해주는 알고리즘을 만들어보자.

let month = 6;
let day = 22;
solution(month, day)

function solution(month, day){
  console.log(`오늘 날짜: ${month}월 ${day}일`)

	let remain_day = 98;

  let monthly_day = [31,28,31,30,31,30,31,31,30,31,30,31]

  let cur_month_day = monthly_day[month-1];
  // console.log(cur_month_day);

  // let sumday = day + remain_day;
  // console.log(sumday)

  let month_count = 0;

  let sumday = 0;

//0 < 98
 
    for(let i = month-1; i < monthly_day.length && sumday < remain_day; i++) {
        sumday += monthly_day[i]
        // console.log(sumday)
        month_count += 1;
        // console.log(month_count)
      }
  
  let x = sumday - remain_day;
  let y = month_count-1;

  console.log(y+month, x);

  
}