/*
배열(Array)
*/

// 배열 생성1: 내장객체(생성자 함수)를 사용하는 방법
console.log("======내장객체(생성자 함수)=======");
var a1 = new Array();
console.log(typeof(a1), a1 instanceof Array, a1.length);

// 생성 함수의 파라미터가 하나인 경우: 파라미터는 배열의 크기이다.
var a2 = new Array(10);
console.log(typeof(a2), a2 instanceof Array, a2.length);

// 배열의 크기 지정은 별 의미가 없다: 동적으로 배열은 늘어난다.
a2[0] = 0;
a2[5] = 5;
a2[10] = 10;  
// 위 var a2 = new Array(10); 에 의해 0~9까지 있지만, 에러X a2[10] = 10;하면 알아서 늘려줌
console.log(a2, a2.length);
// 배열 요소를 값이나 객체를 대입하지 않으면 undefined, 에러X
console.log(a2[1], a2[6]);

// 생성 함수의 파라미터가 2개 이상인 경우: 초기값 지정
// 생성 함수의 파라미터가 1개인 경우도 초기값 지정 가능, 나머지를 undefined으로 두면 됨
var a3 = new Array(0,2,4,6,8);
console.log(a3);



// 배열 생성2: 리터럴 사용
console.log("======리터럴=======");
var a4 = [];
console.log(typeof(a4), a4 instanceof Array, a4.length);

// 배열 요소의 타입은 동일하지 않아도 된다.
var a5 = [10, "JavaScript", true, undefined, {
    name: "둘리",
    age: 10
}, function() {
    console.log("Hello World");
}];  //  블럭 만나면 개행!!

// 순회
// var i는 함수스콥 관련된 것, const는 불가 i가 가변적(증가)이므로
for(let i = 0; i < a5.length; i++) {
    console.log(a5[i]);
}

a5[5]();



// Array vs. Object
// Object; Object.prototype.* 만 가능
// Array; Object.prototype.* + Array.prototype.* 사용 가능
// 대표적인 Array.prototype만 해당하는 메소드 Array.length
console.log("======Array vs. Object======");
a6 = [];
a6[0] = 0;
a6['1'] = 1;
a6.name = "둘리";
a6["age"] = 10;
console.log(a6['0'], a6[1], a6['name'], a6.age, "length:" + a6.length);
// length는 index로 int만 취급     -> a6.length = 2
// string'1'은 형전환하여 int1 인식 -> length의 attribute(내부 자체 설정)

for(prop in a6) {
    console.log(typeof(prop));
    console.log(prop, a6[prop]);
}


o6 = {};
o6[0] = 0;
o6['1'] = 1;
o6.name = "둘리";
o6["age"] = 10;
console.log(o6['0'], o6[1], o6['name'], o6.age, "length:" + o6.length);
// length는 Object.prototype.*에 포함되지 않음  -> o6.length = undefined

for(prop in o6) {
    console.log(typeof(prop));
    console.log(prop, o6[prop]);
}
