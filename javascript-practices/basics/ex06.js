/*
자바스크립트 객체 I : object 타입

1. 자바스크립트 객체는 object타입과 function타입이 있다.
2. 보통, function 타입 객체는 '함수'라 부른다.
3. 따라서 자바스크립트에서 우리가 흔히 객체라고 부르는 것은 object타입의 객체라고 볼 수 있다.
*/

// 생성방법1
// 생성자 함수를 사용하는 방법
// Object, Number, String, RedExp, Array - 내장객체(내장 생성자 함수)
var o1 = new Object();
o1.name = "둘리";
o1.age = 10;
o1.another = new Object();
o1.another.name = "마이콜";
o1.another.age = 30;

console.log(o1);


// 사용자 생성자 함수
var MyObject = function(name) {
    this.name = name;
}

var o2 = new MyObject("손수제비");
console.log(o2);


// 생성방법2
// {} 리터럴을 사용하는 방법
var o3 = {};
var o3 = new Object();
o3.name = "둘리";
o3.age = 10;
o3.another = new Object();
o3.another.name = "마이콜";
o3.another.age = 30;

console.log(o3);


// 생성방법3
// JavaScript Object Notation (JSON)
var o4 = {
    name: "둘리",
    age: 10,
    another: {
        name: "마이콜",
        age: 30
    }
};

console.log(o4);


// XmlHttpRequest 객체를 사용하여
// 통신(AJAX) 에서 데이터 교환 포맷으로 JSON을 사용한다. (property에도 "" 붙여야함)
var response = '{"name": "둘리", "email": "dooly@gmail.com"}';
var o = JSON.parse(response);
console.log(o);

var html = "<li>" + o.name + " : " + o.email + "<li>";
console.log(html);
