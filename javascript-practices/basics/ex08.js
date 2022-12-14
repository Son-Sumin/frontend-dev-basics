/*
자바스크립트 객체 III : 확장
*/

var o = {
    name: "둘리",
    age: 10
}

var f = function() {
    console.log("Hello World");
}


console.log("===확장============");

o.another = {
    name: "마이콜",
    age: 20,
    print: function() {
        console.log(this.name + " : " + this.age);
    }
}
console.log("111" + o);
o.another.print();
console.log("222" + o);

f.another = {
    name: "마이콜",
    age: 20
}
console.log("함수 확장 : " + f);


console.log("===기본타입[primitive type]은 확장되지 않는다.=======");
var i1 = 10;
var i2 = new Number(10);

console.log(i1 + " : " + i2 + " : " + (i1 + i2));

i2.another = {
    name: '마이콜',
    age: 30
}
console.log(i2);

                           // 에러는 발생하지 않지만, undefined
i1.another = {}            // 유사객체로 실행: new Number(i1).another = {}
console.log(i1.another);   // 유사객체로 실행: new Number(i1).another
