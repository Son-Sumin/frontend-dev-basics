/*
전역 객체(Global object)
*/

// ./ch06/soucrce/main/webapp/ex01.html 참고

// Environments -> Variable Object 가능
global.n = "둘리";
console.log(global.n, n);

// Environments <- Variable Object 불가
var email = "kickscar@gmail.com";
console.log(global.email, email);

