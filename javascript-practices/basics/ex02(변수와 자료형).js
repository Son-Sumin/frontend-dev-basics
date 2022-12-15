/* ★★★
<< 변수와 자료형(Date Type) >>
   기본타입과 객체로 이루어져 있다고 생각하자

[기본타입(Primitive Type)] ≒ 유사객체 ; 기본타입이지만 객체처럼 메소드 호출 가능
        ; 기본타입 변수가 메소드 호출 시 내부적으로 잠깐 객체화, 출력 후 기본타입 변수로
- undefined (아예 대입X)
- number (실수와 정수 구분 X)
- string
- boolean

[객체] ; 기본타입이 아닌 타입들은 모두 객체라고 부른다.
- object
java script에 클래스는 없음, 클래스를 생성해주는 문법이 있음
    1. new 생성자함수() 사용해서 생성
        Number()   => object 타입 객체
        String()   => object 타입 객체
        Boolean()  => object 타입 객체
        Object()   => object 타입 객체
        Array()    => object 타입 객체
        Date()     => object 타입 객체
        RegExp()   => object 타입 객체
        Function() => function 타입 객체!!!!!!!!!!!!!

    2. {} 객체 리터럴, JavaScript Object Notation(JSON)   => new Object()
        var obj = {first: "o", second: "b", third: "j"};
        console.log(obj.first);
    
    3. [] 배열 리터럴   => new Array()
        var arrayArray = [1,2,3];
        console.log(arrayArray[0]);

    4. null (객체 없음, 'null' 대입)


- function
    1. function f() {......}
    2. var f =  function() {......}   추천!!!
    3. var f = new Function("변수1", "변수2", ..., "리턴")
*/

/*
student1 = student2

student1 = new Object();
student.name = "둘리";
student.grade = 1;

student2 = {
    name: "둘리",
    grade: 1
} */

/*
자바스트립트 객체를 분류하는 또 다른 방법
1. 내장 객체 : 
   - JavaScript Engine 내부에 미리 내장되어 있는 객체
   - Number, Boolean, Date, RegExp, Array, Object, ... : 생성자 함수
   - parseInt, setTimeout, setInterval, ... : 일반 함수
   
2. 호스트 객체 : 
   - JavaScript Engine이 embedded 되어 있는 환경에 있는 객체
   - Browser가 호스트인 경우: screen(크기 등 화면 자체 조작), location*(주소창), navigator*(브라우저 정보,), DOM***(화면 구성하는 contents), XmlHttpRequeest***, ...
   - Node가 호스트인 경우: http, os, fs(file io), path(파일 정보; 저장할 공간, 처리 방법 등)), process, ...
   
3. 사용자 객체
   - 자바스크립트 엔진이 실행되면서 생성되는 객체들
*/

console.log("=====기본타입(undefined, number, string, boolean)=====");

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


console.log("=====객체타입(object)=======================");

var i2 = new Number(10);
var s2 = new String("Hello World");
var b2 = new Boolean(true);
var o = new Object();
var a = new Array();
var d = new Date();
var o2 = {};
var a2 = [];
var n = null;

console.log(i2 + " : " + typeof(i2) + " : " + (i2 instanceof(Number)));
console.log(s2 + " : " + typeof(s2) + " : " + (s2 instanceof(String)));
console.log(b2 + " : " + typeof(b2) + " : " + (b2 instanceof(Boolean)));
console.log(o  + " : " + typeof(o)  + " : " + (o instanceof(Object)));
console.log(a  + " : " + typeof(a)  + " : " + (a instanceof(Array)));
console.log(d  + " : " + typeof(d)  + " : " + (d instanceof(Date)));
console.log(o2 + " : " + typeof(o2) + " : " + (o2 instanceof(Object)));
console.log(a2 + " : " + typeof(a2) + " : " + (a2 instanceof(Array)));
console.log(n  + " : " + typeof(n)  + " : " + (n instanceof(Object)));

// instanceof() ; 생성자 함수 타입 판별


console.log("=====객체타입(function)=====================");

function f1(a, b) {
    return a + b;
}

var f2 = function(a, b) {
    return a + b;
}

var f3 = new Function("a", "b", "return a+b;");

console.log(f1(10, 20), f2(1,2), f3(100, 200));

console.log("f1 : " + typeof(f1) + " : " + (f1 instanceof(Function)));
console.log("f2 : " + typeof(f2) + " : " + (f2 instanceof(Function)));
console.log("f3 : " + typeof(f3) + " : " + (f3 instanceof(Function)));


console.log("=====원시 타입도 메소드 호출이 가능하다.=====================");
// 원시타입에 메소드가 호출될 때
// 임시 Wrapper 객체가 만들어져서 메소드 호출이 일어난 뒤 사라진다. : 유사객체

console.log(b.valueOf());   // new Boolean(b).valueOf()
console.log(b2.valueOf());  // b2; 원래 객체