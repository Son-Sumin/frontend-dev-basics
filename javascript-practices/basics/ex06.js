/*
<< 구문(Statement) >>

1. 구문은 실행 단위
2. 구문의 구성 요소
   표현식: 값, 연산자, 변수, 함수 호출
   주석
   키워드
3. 구문의 예
    - 주석구문
    - if(1-1) {...}
    - if ~ else
    - for, while, do~while, for~in
    - switch
4. 세미콜론 ;
    - 표현식을 표현식문으로 만들어서 표현식을 실행하게 한다.
        ex) i = 10;  -> powershell 입력 시 10 출력 
5. 개행
    5-1. 세미콜론 역할
    5-2. 스페이스 역할 (token 분리하는 역할)
*/

i = 10; j = 20; k = 30;

// 개행의 역할: 세미콜론 역할
s = "hello world"
console.log(s)

// 개행의 역할: token 분리하는 역할
a
=
1
+
2
console.log(a)
o = {
}
if(i ==10) {
}
// 실행해도 에러 발생 X

cons
ole.log('hello')