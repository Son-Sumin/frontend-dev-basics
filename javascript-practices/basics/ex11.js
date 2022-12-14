/*
Array 객체 함수: Array.prototype.*
*/

var colors = ['black', 'white', 'yellow'];
var fruits = ['apple', 'mango', 'banana'];

// concat
console.log("========concat==========");
var a1 = fruits.concat(colors);
console.log(a1);

// pop, push: stack 지원 함수
console.log("========stack 지원==========");
var color = colors.pop();
console.log(color, colors);

colors.push('red');
console.log(colors);

// join ; String을 만듦
console.log("========join==========");
var str = fruits. join(":");
console.log(str)

// reverse
console.log("========reverse==========");
console.log(fruits);
fruits.reverse();
console.log(fruits);

// shift ; 맨 앞 요소 튕겨나감
console.log("========shift==========");
var numbers1 = [1000, 3000, 2000, 5000, 4000, 8000];
var number = numbers1.shift();
console.log(number, numbers1);

// slice
console.log("========slice==========");
var numbers2 = numbers1.slice(1, 3);  // index 1이상 3미만
console.log(numbers1, numbers2);

// splice : 1. index에서 count개를 삭제하고, 삭제된 요소를 배열에 담아 반환
console.log("======== 1. splice(index, count)==========");
console.log(fruits);
var fruits2 = fruits.splice(0,2);  // index 0에서부터 2개를 삭제 
console.log(fruits2, fruits);

// splice : 2. index에서 count개를 삭제하고 replace(요소)로 대체한 후, 삭제된 요소를 배열에 담아 반환
console.log("======== 2. splice(index, count, replace)==========");
var a1 = [0,1,2,3,4];
var a2 = a1.splice(1,3,10);  // index 1부터 3개 [1,2,3]
var a3 = a1.splice(0,1,['a', 'b']); 
console.log(a3, a2, a1);

// splice : 3. removeAt() 처럼 작동 (실제로 Array.prototype.* 에 removeAt() 없음)
console.log("======== 3. splice - removeAt() 처럼 작동==========");
var a1 = [0,1,2,3,4];
a1.splice(2,1);         // a1.removeAt(2)  ->  ex12.js 확인
console.log(a1);

// splice : 4. insertAt() 처럼 작동
console.log("======== 4. splice - insertAt() 처럼 작동==========");
var a1 = [0,1,2,3,4];
a1.splice(1,0,10);      // a1.insertAt(1, 10)  ->  ex12.js 확인
console.log(a1);
