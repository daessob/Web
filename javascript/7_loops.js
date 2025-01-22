/**
 * Loops
 * 
 * 1) for
 * 2) while
 */
for (let i = 0 /*기준이 되는 변수*/; i < 10 ; i++) {
    console.log(i);
}

console.log('-------------------');

for(let i = 10; i > 0; i--) {
    console.log(i);
}

for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        console.log(i, j);
    }
}


// 문제 *을 이용해서 6*6의 정사각형을 출력해라
let square = '';

for(let i = 0; i < 6; i++) {
    for(let j = 0; j < 6; j++) {
        square += '*';
    }
    square += '\n';
}
console.log(square);


/**
 * for...in 인덱스 출력
 */
const person = {
    name: '홍길동',
    age: 25,
    address: '서울'
}

for (let key in person) {
    console.log(key, person[key]);
}

const array = [10, 20, 30, 40, 50];

for (let key in array) {
    console.log(key);
    console.log(`${key} : ${array[key]}`);
}

/**
 * for...of 값이 출력
 */
for(let value of array) {
    console.log(value);
}

/**
 * while
 */
let number = 0;

while(number < 10) {
    number++;
}

/**
 * do...while 사용하지 않는다
*/
number = 0;

do {
    number++;
}while(number < 10);

console.log(number);

// do while은 먼저 실행되고 조건을 확인한다.
// while은 조건을 확인하고 실행한다.

console.log('-------------------');

/**
 * break
 */
for(let i = 0; i < 10; i++) {
    if(i === 5) { //5일때 for문을 종료 시킨다.
        break;
    }
    console.log(i);
}
console.log('-------------------');
number = 0;
while(number < 10) {
    if (number === 5) {
        break;
    }
    number++;
    console.log(number);
}

/**
 * continue
 */
for(let i = 0; i < 10; i++) {
    if(i === 5) {
        continue; //조건이 맞으면 스킵을 한다.
    }
    console.log(i);
}

number = 0;
while(number < 10) {
    number++;
    if(number === 5) {
        continue;
    }
    console.log(number);
}