/* 
변수와 자료형(Date Type)
   기본타입과 객체로 이루어져 있다고 생각하자

[기본타입(Primitive Type)]  ≒ 유사객체 ; 기본타입이지만 객체처럼 메소드 호출 가능
- undefined
- number (실수와 정수 구분 X)
- string
- boolean

[객체] ; 기본타입이 아닌 타입들은 모두 객체라고 부른다.
- object
- function

*/

// u;    // 에러  ; 표현식으로 인식
var u;   // 변수 선언하는 구문
10;      // 에러X ; 값으로 인식

var u = undefined;    // var u; 동일  -> 선언과 정의 구분이 없다.
var i = 10;           // i = 10; 동일
var s = "Hello World";
var b = true;

console.log(u + " : " + typeof(u));
console.log(i + " : " + typeof(i));
console.log(s + " : " + typeof(s));
console.log(b + " : " + typeof(b));

console.log(s.toUpperCase());
