var onTabClicked = function(){

		
		var divTabBox = document.getElementsByClassName("tab-box")[0];
		var ul = divTabBox.childNodes[1];
		lis = ul.getElementsByClassName("selected");
		
		(lis.length == 1) && (lis[0].className = "");
		
		//console.log('clicked' + this.innerText); this 확인 후 if문 실행
		/*
		if(lis.length == 1) {
			lis[0].className = "";
		} 
		*/

		this.className = "selected";
	}
	
window.addEventListener('load', function() {
		var divTabBox = document.getElementsByClassName("tab-box")[0];
		// console.log(divTabBox);
		var ul = divTabBox.childNodes[1];
		//console.log(ul);
		var lis = ul.getElementsByTagName('li');
		//console.log(lis);
		
		Array.prototype.forEach.call(lis, function(li){
			li.addEventListener('click', onTabClicked);
			
		});
		
});

/*
var ul = divTabBox.childNodes[1] 이유
tabbox02.html 보면
<ul><li><li><li><li><li><ul>

각 tag 사이에 text가 없어도 사이에 TextNode 존재함
<ul>.TextNode.<li>.TextNode.<li>.TextNode.<li>.TextNode.<li>.TextNode.<li>.TextNode.<ul>

그래서 위와 같은 경우 <li>에 적용하기 위해 childNodes[index]의 index는 1,3,5,7,9가 해당됨

 */