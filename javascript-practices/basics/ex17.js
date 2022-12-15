/*
Exercies about
Function.prototype.apply
Function.prototype.call
Function.prototype.bind
*/

var myObject = {
    v: "kickscar",
    f: function(){
        console.log(this.v);
    },
    f1: function(param1, param2){
        console.log(param1 + " " + this.v + " " + (param2 ? param2 : ""));  
    }
}// undefined은 false로 취급, param2 맞으면 +param2, 아니면 +""

var yourObject = {
    v: "dooly"
}

// this를 yourObject로 binding하여 호출, 파라미터 못 넘김
// 파라미터 넣으면 에러 발생
// dooly
myObject.f.apply(yourObject);

// this는 yourObject로 binding하고 호출 X, 호출할 때까지 기다림, 함수 만들 때 같이 넣어서 만들기
// 출력 X
myObject.f.bind(yourObject);

// this를 yourObject로 binding하여 호출, 파라미터 넘김
// hello dooly
// hello dooly again
myObject.f1.call(yourObject, "hello");
myObject.f1.call(yourObject, "hello", "again");



var f2 = function() {
    console.log(this.v);
}.bind(yourObject);

f2();  // dooly