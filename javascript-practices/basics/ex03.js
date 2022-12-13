/* null과 undefined */

var myVar1 = undefined;   // 명시적으로 undefined 대입
var myVar2;               // 암시적으로 undefined 대입
var myVar3 = null;

console.log(myVar1 + " : " + myVar2 + " : " + myVar3);
// console.log(myVar4);      // Occured not defined error
// var myVar4;  // 변수 선언하는 선언문
                // 윗 줄보다 먼저 쓰면 error 발생 안 함

// undefined와 null의 등치(equal) 비교
console.log(myVar1 == myVar3);   // 값 비교
console.log(myVar1 === myVar3);  // 값 비교 + 타입비교


console.log("==========[ == : equality ]==============");

// == : equality, 값의 동치성, 내부적으로 형변환 일어날 수도 있음
console.log('4' == 4);
console.log(false == 0);   // 0:F  1:T
console.log('abc' == new String('abc'));

console.log(true + 10);                    // 11
console.log('abc' + new String('abc'));    // abcabc 
console.log(1 + '11');                     // 111 -> 1이 스트링으로 형변환    // 사용하지 말 것
console.log('11' + 1);                     // 111


console.log("==========[ === : identity ]==============");


// === : identity
// 1. 타입의 동일성
// 2. 타입이 같은 경우
//  2-1. (primitive type): 값의 동일성
//  2-2. (object type): 객체의 동일성

console.log('4' === 4);                        // String 4  VS Number 4
console.log(true === 1);                       // Boolean true(1)  VS  Number 1
console.log('abc' === new String('abc'));      // 기본타입 String의 값 abc VS abc 값을 갖는 어떤 String 객체
console.log(4 === 2);                          // 값의 동일성 위배
console.log(new Number(10) === new Number(10));
  // 이름을 부여 안 했을 뿐 10이라는 동일 값을 가지는 다른 객체임 - 객체의 동일성
