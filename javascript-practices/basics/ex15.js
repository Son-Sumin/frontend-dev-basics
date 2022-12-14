/*
Date 객체 함수(Date.prototype.*)
*/

// 현재 시간
var now = new Date();
console.log(now);

// 특정 날짜 세팅
// 2022년 12월 14일
var d1 = new Date(2022, 11, 14);   // month -1
console.log(d1);

// 특정 날짜 및 시간 세팅
// 2022년 12월 14일 22:22:22
var d2 = new Date(2022, 11, 14, 22, 22, 22);   // month -1 = 11
console.log(d2);

// 객체 함수
console.log(
    "년: " + now.getFullYear() + "\n" +
    "월: " + (now.getMonth() +1) + "\n" +
    "일: " + now.getDate() + "\n" +
    "시: " + now.getHours() + "\n" + 
    "분: " + now.getMinutes() + "\n" + 
    "초: " + now.getSeconds() + "\n" + 
    "밀리세크: " + now.getMilliseconds() + "\n"
);

// 원하는 날짜 세팅
d2.setFullYear(2024);
console.log(d2);

d2.setMonth(7);      // month -1 = 7
console.log(d2);
