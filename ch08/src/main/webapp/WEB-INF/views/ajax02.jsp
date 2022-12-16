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
$(function(){
	// 폼에서 객체로 받기
	var formData = {
			name:"맹구",
			email:"menggu@gmail.com",
			password:"1234",
			gender:"male"
	}
	
	$("#btn-getdata").click(function(){
		$.ajax({
			url: "${pageContext.request.contextPath }/api/02",
			async: true,   // 비동기할거임
			type: "post",   // GET / POST
			dataType: "json",
			contentType: "application/x-www-form-urlencoded",  // 일반 폼에서 받는 방식
			data: $.param(formData),  // similar to toString()
			success: function(response){
				// console.log(response.name + " : " + response.age);
				var htmls = "";
				htmls += ("<h1>" + response.name + "</h1>")
				htmls += ("<h2>" + response.email + "</h2>")
				htmls += ("<h2>" + response.password + "</h2>")
				htmls += ("<h2>" + response.gender + "</h2>")
				$("#data").html(htmls);
			},
			error: function(xhr, status, error){
				console.error(status, error);
			}
		});
	});
});

</script>
</head>
<body>
	<h1>Ajax Test02</h1>
	
	<button id="btn-getdata">데이터 보내기</button>
	<div id="data">
	</div>
</body>
</html>