var liSelected = null;
var onTabClicked = function(){
		//console.log('clicked' + this.innerText); this 확인 후
		
		var divTabBox = document.getElementsByClassName("tab-box")[0];
		var ul = divTabBox.childNodes[1];
		lis = ul.getElementsByClassName("selected");
		
		(lis.length == 1) && (lis[0].className = "");
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