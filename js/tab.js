var tab;
var tabContent;

window.onload = function () {
	tabContent = document.getElementsByClassName('catalog__block-window');
	tab = document.getElementsByClassName('button-left tab');
	hideTabsContent(1);
	console.log(tab)
}

function hideTabsContent(a) {
	for (var i = a; i < tabContent.length; i++) {
		tabContent[i].classList.remove('show');
		tabContent[i].classList.add('hide');

	}
}

document.getElementById('tabs').onclick = function (event) {
	var target = event.target;
	if (target.className == 'button-left tab') {
		for (var i = 0; i < tab.length; i++) {
			if (target == tab[i]) {
				showTabsContent(i);
				break;
			}
		}
	}
}

function showTabsContent(b) {
	if (tabContent[b].classList.contains('hide')) {
		hideTabsContent(0);

		tabContent[b].classList.remove('hide');
		tabContent[b].classList.add('show');
	}
}
