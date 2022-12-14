/*
URL 다루기
*/

var url = "http://www.mysite.com/user?name=둘리&no=10&email=kickscar@gmail.com";
// @ . / 등 특수문자는 \ 후 값 넣어야 함

// location.href = url;  // 브라우저 객체 location
                         // 브라우저에서 화면 바꾸고 싶을 때 사용

// 1. escape : URL 전부를 encoding, 사용(X), deprecated
var url2 = escape(url);
console.log(url2);

// 2. encodeURI : URL 중 파라미터만 encoding 하기 때문에 URL 전체를 encoding 해야하는 경우, 사용(O)
var url3 = encodeURI(url);
console.log(url3);

// 3. encodeURIComponent : 값만 Encoding 해야하는 경우, 사용(O)
// 잘못 사용한 경우
var url4 = encodeURIComponent(url);
console.log(url4);

// 4. 
// 만들어야할 URL
// http://www.mysite.com/user?name=둘리&no=10&email=kickscar@gmail.com
var url = "http://www.mysite.com/user";
var formData = {
    no: 10,
    name: "둘리",
    email: "kickscar@gmail.com"
};

var toQueryString = function(o) {
    var qs = [];
    for(prop in o) {
        console.log(prop);
        console.log(prop + "=" + o[prop]);
        console.log(prop + "=" + encodeURIComponent(o[prop]));
        qs.push(prop + "=" + encodeURIComponent(o[prop]));
    }
    return qs.join("&");
}

// 사용 예시1
var url5 = url + "?" + toQueryString(formData);
console.log(url5);

// // 사용 예시2: jquery
// jQuery.ajax({
//     url: "",
//     type: "post",
//     date: toQueryString(formData)
// });