/*
string primiticve type과 String 객체 함수 (String.prototype.*)
*/

// 배열처럼 접근 가능
var str1 = "Hello World";
for(let i = 0; i < str1.length; i ++) {
    console.log(str1[i]);
}

// 문자열 합치기
var str2 = "hello";
var str3 = "world";
var str4 = str2 + " : " + str3;
console.log(str4);

// 캐스팅
var str5 = 5 + "5";
console.log(str5);

var str6 = "Boolean : " + true;
console.log(str6);

// 객체 함수
var str7 = "string1 string2 string3";

var index = str7.indexOf("string2");  // 8번짹부터 string2 시작됨 , 0부터 카운팅
console.log(index);

var index = str7.indexOf("string4");  // 못 찾으면 -1
console.log(index);

var str8 = str7.substring(10, 13);  // index 10부터 13 미만
console.log(str8);

var a = str7.split(" ");
console.log(a);

var str9 = "abcdef"
var a = str9.split(":");  // 짤라낼게 없으면 본인 -> split 값은 배열임을 알 수 있음
console.log(a);


