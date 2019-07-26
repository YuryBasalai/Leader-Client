var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var catalog1 = document.getElementById('catalog1');
var catalog2 = document.getElementById('catalog2');
var menu = document.getElementById('main_catalog');

button1.onclick = function (event) {
	menu.style.cssText = 'display: none';
	catalog1.style.cssText = 'display: block';
	return;
}

button2.onclick = function (event) {
	menu.style.cssText = 'display: none';
	catalog2.style.cssText = 'display: block';
	return;
}

button3.onclick = function (event) {
	menu.style.cssText = 'display: none';
	catalog3.style.cssText = 'display: block';
	return;
}

var close = document.getElementById('button-close');

close.onclick = function (event) {
	catalog1.style.cssText = 'display: none';
	catalog2.style.cssText = 'display: none';
	catalog3.style.cssText = 'display: none';
	menu.style.cssText = 'display: block';
	return;
}
