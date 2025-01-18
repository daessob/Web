/**
 * Hoisting
 */
console.log('Hello');
console.log('World');
console.log('-------------------');

console.log(name);
var name = '김대섭';
console.log(name);
// 밑과 같은 코드로 해석된다.

var name
console.log(name);
name = '김대섭';
console.log(name);
console.log('-------------------');

/**
 * Hoisting은 무엇인가?
 * 
 * 모든 변수 선언문이 해당 스코프의 최상단으로 끌어올려지는 것을 말한다.
 * let과 const도 hoisting이 발생함.
 * hoisting이 발생하지 않았으면 not defined 에러가 발생했어야 한다.
 * 하지만 let과 const는 initializtion이란 단계에서 에러가 발생한다.
 */

console.log(Yujin);
let Yujin = '안유진';

