/**
 * Operators
 * 
 * 연산자
 */

/**
 * 산술 연산자
 * 
 * 1) + : 더하기
 * 2) - : 빼기
 * 3) * : 곱하기
 * 4) / : 나누기
 * 5) % : 나머지
 */
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 % 3);

console.log('-------------------');

console.log(10 * (10 + 10));

/**
 * 증가와 감소 연산자
 */
let number = 1;

number++;
console.log(number);

number--;
console.log(number);

/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);

result = number++;
console.log(result, number);

result = number--;
console.log(result, number);

result = ++number;
console.log(result, number);

result = --number;
console.log(result, number);
// 앞에 두는 경우는 거의 없어야한다.


/**
 * 숫자 타입이 아닌 타입에 + , - 연산자를 사용하면
 * 숫자 타입으로 변환된다.
 */
let sample = '10';

console.log(+sample);
console.log(typeof +sample);
console.log(-sample);
console.log(typeof -sample);

sample = true;
console.log(+sample);
console.log(typeof +sample);

sample = false;
console.log(+sample);
console.log(typeof +sample);

sample = '안유진';
console.log(+sample);
// NaN - Not a Number
console.log('-------------------');

/**
 * 할당 연산자 (Assignment Operators)
 */
number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);
console.log('-------------------');

/**
 * 비교 연산자 (Comparison Operators)
 * 
 * 1) 값의 비교
 * 2) 타입의 비교 
 */
console.log(5 == 5);
console.log(5 == '5');
console.log(0 == '');
console.log(true == 1);
console.log(false == 0);
console.log(true == '1');

console.log(5 === 5);
console.log(5 === '5');
console.log(0 === '');
console.log(true === 1);
console.log(false === 0);
console.log(true === '1');
//무조건 3개를 쓰는게 좋다.

console.log(5 != 5);
console.log(5 != '5');
console.log(0 != '');
console.log(true != 1);
console.log(false != 0);
console.log(true != '1');
//!은 반대를 의미한다.

console.log(5 !== 5);
console.log(5 !== '5');
console.log(0 !== '');
console.log(true !== 1);
console.log(false !== 0);
console.log(true !== '1');
console.log('-------------------');

/**
 * 대소 관계 비교 연산자 (Relational Operators)
 */
console.log(100 > 1);
console.log(100 < 1);
console.log(100 >= 1);
console.log(100 <= 1);
console.log('-------------------');

/**
 * 삼항 조건 연산자 (Ternary Operator)
 */
console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');
//참일때 : 거짓일때
console.log('-------------------');

/**
 * 논리 연산자 (Logical Operators)
 * 
 * 1) &&
 * 2) ||
 */

// && 조건은 모두 참일때 참이다.
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// || 조건은 하나만 참이어도 참이다.
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log('-------------------');

console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 < 1 && 20 < 2);

console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 < 2);
console.log('-------------------');

/**
 * 단축 평가 (Short-circuit Evaluation)
 * 
 * &&를 사용했을때 좌측이 true면 우측 값 반환
 * &&를 사용했을때 좌측이 false면 좌측 값 반환
 * ||를 사용했을때 좌측이 true면 좌측 값 반환
 * ||를 사용했을때 좌측이 false면 우측 값 반환
 */
console.log(true || '아이브');
console.log(false || '아이브');
console.log(true && '아이브');
console.log(false && '아이브');

console.log(true && true && '아이브');
console.log(true && false && '아이브');
console.log('-------------------');

/**
 * 지수 연산자 (Exponentiation Operator)
 * 
 * 거듭제곱
 */
console.log(2 ** 3);
// 2의 3승
console.log(10 ** 3);
// 10의 3승
console.log('-------------------');

/**
 * null 연산자 (Nullish Coalescing Operator)
 */
let name;
console.log(name);

name = name ?? '김대섭';
console.log(name);

name = name ?? '안유진';
console.log(name);
//null이 아니기 때문에 저장되지 않는다.

let name2;
name2 ??= '김대섭';
console.log(name2);
