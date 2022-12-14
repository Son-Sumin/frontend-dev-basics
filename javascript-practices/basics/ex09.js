/*
자바스크립트 객체 IV : prototype 기반의 상속과 오버라이딩: 자바스크립트 객체 지향 프로그래밍
            - prototype과 constructor는 서로 referencing 한다.
            - new XX() -> constructor <-> prototype <-> prototype  ...
            - 모든 객체의 맨 마지막 속성으로 __proto__ 생성됨
               __proto__ 은 prototype이라는 객체를 가짐
               prototype chain을 통해 reference 지속 발생
            - another은 특정 객체 내에서만 사용 가능 / prototype chain을 통해 여러 객체 referencing
*/

var MyObject = function(name, age) {
    this.name = name;
    this.age = age;
}

MyObject.prototype.school = 'bitacademy';
MyObject.prototype.course = 'Web Dev & AI';
MyObject.prototype.info = function() {
    console.log(this.name + " : " + this.age + " : " + this.school + " : " + this.course);
}   // this : 본 함수 호출

// MyObject 객체 생성 1
var o1 = new MyObject("michole", 30);
o1.info();

// MyObject 객체 생성 2
var o2 = new MyObject("둘리", 10);
o2.info = function() {
    console.log("비밀!");
}
o2.info();