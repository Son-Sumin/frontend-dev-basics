/*
Array 확장 (prototype 기반의 확장)
List 함수 사용하기
*/

// TypeError: a.remove is not a function
// var a = [1,2,4];
// a.remove(2); 
Array.prototype.remove = function(index) {
    this.splice(index, 1);
}


Array.prototype.insert = function(index, value) {
    if(value instanceof Array) {
        // for(let i = 0; i < value.length; i++) {
        //     this.splice(index+i, 0, value[i]);
        // }
        console.log("this: " + this);  // this: 1,2,4  ; string으로 풀려서 출력

        // 오류!!
        // 콜백함수 안의 this는 어휘 상의 this와 일치하지 않는다.
            // forEach는 call-back 함수 넣어주기
        // value.forEach(function(e){
        //     console.log("this: " + this);    -> this: [object global]
        //     this.splice(index++, 0, e);
        // });

        
        // 해결방법1 ; foreach문 사용할때 쓰기 [변수 생성]
        // var _this = this;
        // value.forEach(function(e){
        //     _this.splice(index++, 0, e);
        // });


        // 해결방법2 ; foreach문 사용할때 쓰기 [.bind()는 Function.prototype.*]
        // Function.prototype.bind() 함수 사용
        // 함수 실행 불록 안의 this를 세팅할 수 있다.
        // 위에서 local this로 인해 오류였지만, bind(this)는 insert이기에 this.splice는 insert로 세팅
        value.forEach(function(e){
            this.splice(index++, 0, e);
        }.bind(this) );

    } else {
        this.splice(index, 0, value);
    }
}

// List 함수 사용하기
var a = [1,2,4];
console.log(a);  // [1,2,4]

a.insert(2, 3)
console.log(a);  // [1,2,3,4]

a.remove(2); 
console.log(a);  // [1,2,4]

a.insert(2, ['a', 'b', 'c'])
console.log(a);  // [ 1, 2, [ 'a', 'b', 'c' ], 4 ]
// [ 1, 2, 'a', 'b', 'c', 4 ] 출력하기 위해
// 1. Array.prototype.insert에 if문 추가
// 2. 해결방법1 ; foreach문 사용 [변수 생성]
// 3. 해결방법2 ; foreach문 사용 [.bind(): Function.prototype.*]