let ramyeon = {ottogi: 'jinramyeon', nongshim: 'neoguri'};
let jjajang = ['jinjjajang', 'jjapageti', 'jjawang'];
let str = '나는 문자열';

console.log(`\n<----------for in---------------->`)

console.log("---for in------object")
let test1 = ''
for (key in ramyeon) {
  console.log(`key : ${key}`)
  test1 += ramyeon[key] + ' '
}
console.log(`value sum : ${test1}`)
console.log('key, value 값 사용 가능')

console.log("\n---for in------array")
let test2 = ''
for (index in jjajang) {
  test2 += jjajang[index] + ' '
  console.log(`index : ${index}`)
}
  console.log(`element sum : ${test2}`)
  console.log('index, ellement 사용가능')

console.log(`\n<----------for of---------------->`)
console.log(`iterable한 것만 사용가능`)

console.log("\n---for of------object")
// let test3 = ''
// for (key of ramyeon) {
//   console.log(`key : ${key}`)
//   test3 += ramyeon[key] + ' ';
// }
// console.log(test3);
console.log('alert! this is not iterable.')
console.log('for of 에서 object 못 쓴다.')

console.log("\n---for of------array")
let test4 = ''
for (elle of jjajang) {
  console.log(`ellement : ${elle}`)
  test4 += elle + ' '
}
  console.log(`element sum : ${test4}`)
  console.log('for of 에서 ellement 사용가능')

  console.log("\n---for of------string")
  let test5 = '';
  for (value of str) {
    console.log(`str value : ${value}`)
    test5 += value + ' '
  }
  console.log(`value sum : ${test5}`)
  console.log(`string vaule 사용가능`)