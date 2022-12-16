var tabBox = {
	_liSelected: null,
	
	_init: function(){
		//console.log(this);  // this -> document
		//$(".tab-box li").click(tabBox._onTabClicked);  // 해결1
		$(".tab-box li").click(this._onTabClicked);  // 해결2 + 아래 bind 활용
	},
	
	_onTabClicked: function(){
		//console.log($(this).text());
		if(tabBox._liSelected) {
			$(tabBox._liSelected).removeClass("selected");
		}
		$(this).addClass("selected");
		tabBox._liSelected = this;
	},
	
	init: function(){
		$(this._init.bind(this));  //callback
	}
}