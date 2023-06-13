// exports.add = function (a, b) {
//   return a + b;
// };

// // module.exports = add;

// function add(a, b) {
//   return a + b;
// }

// 모듈을 내보내는 방법과 받는 방법
// cosnt add = require("./js파일")

// 1. 모듈을 호출했을 때 add 키 값에는 add함수가 들어가는 방법이다.
// module.exports = {add: add}
// console.log(add.add(a,b))
// const {add} = require("./js파일") 구조분해할당으로 객체의 값만 받아온다.
// console.log(add(10,30)) 받는방법 2번

// 2. 모듈 그 자체를 바로 add 함수를 할당한다.
// module.exports = add; 주는방법
// console.log(add(a,b)) 받는방법 1번

// // 3. 모듈을 호출했을 때 add키 값에는 {a,b}{return a + b;} 익명함수가 할당되는 방법이다.
// exports.add = function (a, b) {
//   return a + b;
// };

// 화살표함수로 내보내기
// 모듈을 호출했을 때, add 키 값에는 add 변수 함수가 가지고 있는 값이 할당된다.
// const add = (a,b) => {
//   return a + b
// }
// exports.add = add;
