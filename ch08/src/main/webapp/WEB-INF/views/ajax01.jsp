<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="${pageContext.request.contextPath }/assets/js/jquery/jquery-3.6.0.js"></script>
<script>
// console.log($().jquery);
/* ajax(Asynchronous JavaScript and XML)
 비동기적으로 JS와 Xml을 이용함
 Json으로 데이터를 전송하기에 Xml 잘 사용 안함
 
 JS 코드를 통헤 서버와 통신하기 위해 XMLHttpRequest(XHR) 객체 사용
 XHR은 웹브라우저가 계속 서버와 통신할 수 있도록 도와줌
 XHR은 document.addEventListener와 비슷한 역할 수행함(event 기반으로 실행됨)
 */
$(function(){
	$("#btn-getdata").click(function(){
		$.ajax({  // 
			url: "${pageContext.request.contextPath }/api/01", // get방식으로 할 때 뒤에 ? 또는 $.param(formData)
			async: true,   // 비동기할거임
			type: "get",   // GET / POST
			dataType: "json",
			success: function(response){
				// console.log(response.name + " : " + response.age);
				var htmls = "";
				htmls += ("<h1>" + response.name + "</h1>")
				htmls += ("<h2>" + response.age  + "</h2>")
				$("#data").html(htmls);
			},
			error: function(xhr, status, error){  // xhr: XmlHttpRequest
				console.error(status, error);
			}
		});
	});
});

</script>
</head>
<body>
	<h1>Ajax Test01</h1>
	
	<button id="btn-getdata">데이터 가져오기</button>
	<div id="data">
	</div>
</body>
</html>