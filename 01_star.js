// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);
    
// });

// test();

// function test('53', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);

//     console.log(n, a);
// });

//별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

test();

function test() {
  const n = ['5', '3'];
  const a = Number(n[0]), b = Number(n[1]);
  console.log(a,b);

  for (let j = 0; j < b; j ++){
    let star = ''
    for(let i = 0; i < a; i++){
      star += '*'
      console.log(star)
    }
  
  }
}
