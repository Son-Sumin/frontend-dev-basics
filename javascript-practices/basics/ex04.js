/*
<< 변수의 Scope >>

1. 자바스크립트는 어휘(코드)에서 변수의 범위를 알 수 있다.(정적 스코프, Lexical Scope)
2. 자바 스크립트는 전역범위가 있다. (자바는 아님)
3. ES6 이전 (<=ES5) -> 전역범위 또는 함수범위
   - 자바와 같은 블록({}) 스코프를 지원하지 않았다. -> 전역범위 가짐
   - 함수 범위를 지원한다.
   - 함수 블록 안에서 변수 앞에 var 키워드를 사용하면 함수 범위를 가진다.
4. ES6 이후 (ES6~ES13) -> 전역범위 또는 블록범위(함수, if문, for문 등)
   - 자바와 같은 블록 스코프를 지원한다.
   - let 키워드를 붙혀서 블록 범위를 가지게 한다.
   - const 키워드는 블록 범위에 있는 상수에 적용한다.
        = const는 값이 변하지 않는 상수(한 번 할당 후 변경 불가) -> 재할당 필요시 let 선언하여 사용

5. 결론
   const/let 만 사용하고 둘 중에 하나만 반드시 붙히자!!! -> 안 붙이면 전역변수 됨(hoisting)

*/

var i = 10;      // 전역범위
var f = function() {
    var i = 20;  // 블록범위
    j = 100;     // 전역범위 (var 없으니까)

    console.log(i);
    i = j - i;
    console.log(i);
}

f();   // f를 호출해야 f 내 코드가 실행됨
console.log(i);
console.log(j);

console.log("=== var키워드는 함수 블록에서만 변수 범위를 만든다.(if문 등 적용X)=========");
if(90 + 10 === 100) {
    var k = 20;
}
console.log(k);


{
    let x = 1000;
    const PI = 3.15;

    x = 100;
    // PI = 0;   // assigne error

}

// console.log(x);   // not defined error
// console.log(PI);  // not defined error
