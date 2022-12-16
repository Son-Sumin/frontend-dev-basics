var jQuery = function(param) {
	if(typeof(param) === 'function') { // type 확인은 이렇게! string으로 나옴
		window.addEventListener("load", param);
		return;
	}
	
	var elements;  // undefined -> null -> false
	
	if(typeof(param) === 'string') {
		elements = document.querySelectorAll(param);
	}
	return new _jQuery(elements || []);  // false면 []
}

var _jQuery = function(elements) {
	this.length = elements.length;
	for(var i = 0; i < this.length; i++) {
		this[i] = elements[i];
	}
}

_jQuery.prototype.click = function(handler) {
	// console.log(!!!!!!);
	for(var i = 0; i < this.length; i++) {
		this[i].addEventListener('click', handler);
	}
	return this;
}

_jQuery.prototype.css = function(name, value) {
	for(var i = 0; i < this.length; i++) {
		this[i].style[name] = value;
	}
	return this;
}

_jQuery.prototype.get = function(index) {
	return this[index];
}

_jQuery.prototype.jquery = 'jquery.simple.0.0.1';

var $ = jQuery;