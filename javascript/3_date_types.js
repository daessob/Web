/** 
 * 데이터 타입
 * 
 * 여섯개의 Primitive 타입과 한 개의 Object 타입이 있다.
 * 
 * 1) Number - 숫자
 * 2) String - 문자열
 * 3) Boolean - 불리언
 * 4) Undefined - 정의되지 않음
 * 5) Null - 비어있음
 * 6) Symbol - 유일한 값
 * 
 * 7) Object - 객체
 *  - Array
 *  - Function
 *  - object
*/
// 숫자자
const age = 27;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log('-------------------');

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);
console.log('-------------------');

// 문자열
const kimDaeSeop = '김대섭';
console.log(typeof kimDaeSeop);

const ive = "'아이브' 안유진";
console.log(ive);
/**
 * Template Literals - 템플릿 리터럴
 *  밑의 코드는 불편하기 때문에 템플릿 리터럴(백틱 ``)을 사용한다. 
 * 
 * 1) newlines - \n
 * 2) tab - \t
 * 3) 백슬래시를 스트링으로 출력하고 싶다면 \\를 사용한다.
 */
const iveYuJin = `아이브 \n안유진`;
console.log(iveYuJin);
const iveWonYoung = `아이브 \t원영`;
console.log(iveWonYoung);
const backSlash = `아이브 \\김대섭`;
console.log(backSlash);

const iveWonYoung2 =`아이브 ' " /
장원영`;
console.log(iveWonYoung2);

const groupName = '아이브';
console.log(groupName + ' 안유진');
console.log(`${groupName} 안유진`);
console.log('-------------------');

// 불리언
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);
console.log('-------------------');

// undefiend - 정의되지 않음
// 직접 할당하지 않으면 undefined가 된다.
// 직접 undefined를 할당하는 것은 좋은 습관이 아니다.
let noInit;
console.log(noInit);
console.log(typeof noInit);
console.log('-------------------');

// null - 비어있음
// undefined와 마찬가지로 값이 없음을 나타낸다.
// js에서는 개발자가 명시적으로 없는 값을 나타내기 위해 사용한다.
let init = null;
console.log(init);
console.log(typeof init);

// Symbol 
// 유일한 값을 나타낸다.
// 다른 값들과 다르게 호출해서 사용한다.
const test1 = '1';
const test2 = '1';

console.log(test1 === test2);

const Symbol1 = Symbol('1');
const Symbol2 = Symbol('1');

console.log(Symbol1 === Symbol2);
console.log('-------------------');

// Object
// Map이랑 매우 유사하다.
// key:value 형태로 저장한다.
const dictionary = {
    red: '빨강',
    orange: '주황',
    yellow: '노랑',
};
console.log(dictionary);
console.log(dictionary.red);
console.log(dictionary['red']);

console.log(typeof dictionary);
console.log('-------------------');

// Array
// 값을 리스트로 나열 할 수 있다.
const iveMembersArray = [
    '유진', 
    '원영', 
    '가을',
    '레이',
    '리즈',
    '이서',
];
console.log(iveMembersArray);

//배열에는 인덱스(index)가 있다.
// 인덱스는 0부터 시작한다.
console.log(iveMembersArray[0]);
console.log(iveMembersArray[5]);

iveMembersArray[0] = '김대섭';
console.log(iveMembersArray[0]);
console.log(typeof iveMembersArray);
console.log('-------------------');

// 자바스크립트는 dynamic typing이다.
// 변수의 타입을 미리 선언하지 않고 값에 의해 타입을 "추론"한다.