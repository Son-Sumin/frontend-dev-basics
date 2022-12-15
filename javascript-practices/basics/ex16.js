/*
함수 : function 타입의 객체
*/

// 함수를 생성하는 방법1: 함수 리터럴
console.log("== 함수를 생성하는 방법1 ============================");
function f1(a,b) {
    return a + b;
}
console.log(typeof(f1), f1 instanceof Function, f1(10, 20));

// 함수를 생성하는 방법2: 함수 리터럴(추천)
console.log("== 함수를 생성하는 방법2 ============================");
var f2 = function(a,b) {
    return a + b;
}
console.log(typeof(f2), f2 instanceof Function, f2(10, 20));

// 함수를 생성하는 방법3: new 연산자(객체 생성 연산자)와 함께 Function 내장 객체(생성자 함수)를 사용하는 방법
console.log("== 함수를 생성하는 방법3 ============================");
var f3 = new Function("a", "b", "return a + b;");
console.log(typeof(f3), f3 instanceof Function, f3(10, 20));

// 함수를 생성하는 방법4: 익명(anonymous) 함수: callback
// 예시1
setTimeout(function() {
    console.log("time out!");
}, 1000);


// 예시2
var f4 = function(p) {
    p();
}

// var myf = function() {
//     console.log("!!!!");
// }
// f4(myf);

f4(function() {
    console.log("!!!!");
    });


// 예시3: 한 번만(즉시) 실행하는 함수  -> 메모리 절약 가능
// 같은 코드들
10;
{};
[10, 20, 30];
(function() {
    console.log("11!!!!!"); 
});  // (~) 없으면 function f() {}를 지원하기에 에러 발생

(function() {
    console.log("22!!!!!"); 
})(); // 마지막 ()로 인해 실행됨

// 예시4
console.log("== 익명(anonymous) 함수의 또 다른 예시4 ============================");
var s = (function(a, b) {
    var m = 10;
    return a/m + b/m;
})(10, 20);
console.log(s);

// ex16.js 끝날 때까지 아래 내용이 메모리 차지
// var m = 10;
// var s = 10/m + 20/m;
// console.log(s);

// 비동기로 인해 예시1 맨마직막 실행됨

// ========================================================================================
// ========================================================================================


// 가변 파라미터

// 1. 자바스트립트의 함수의 파라미터는 기본적으로 가변 파라미터를 지원
//    파라미터는 고정되어 있지 않다.
//    에러가 나지 않음
var f4 = function(a, b, c) {
    console.log(a, b, c);
}
f4(10, 20, 30, 40, 50, 60);


// 2. 예시
// arguments는 function의 내장 객체
// foreach는 Array.prototype.* 이다.
// arguments는 foreach 사용 불가
console.log("======가변 파라미터 함수 sum()==================");
var sum = function() {
    var s = 0;

    console.log(arguments instanceof Array, arguments instanceof Object, arguments.length);

    // for (let i = 0; i < arguments.length; i++) {
    //     s += arguments[i];
    // }

    // // Error
    // // arguments의 __proto__는 Object.prototype에 chain 되어 있기 때문에 오류!
    // // arguments.forEach(function(e) {
    // //    s += e;
    // // });

    // arguments는 배열X + 요즘 스타일 forEach 적용
    Array.prototype.forEach.call(arguments, function(e) {
        s += e;
    })

    return s;
}

// console.log(sum(1));
// console.log(sum(1,2));
// console.log(sum(1,2,3,4));
// console.log(sum(1,2,3,4,5,6));

