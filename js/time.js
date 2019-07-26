
window.onload = function () {
$.get(
	"http://api.openweathermap.org/data/2.5/weather", {
		"id": 625144,
		"appid": "c64da12794490031263d6cb34bb4abf1"
	},
	function (data) {
		var temp = Math.round(data.main.temp - 273) + '&degC' + '<img style="" src = "https://openweathermap.org/img/w/' + data.weather[0].icon + '.png">';
		document.getElementById('weather').innerHTML = temp;
		// console.log(data)

	}
)

function clock() {
	var d = new Date();
	var month_num = d.getMonth()
	var day = d.getDate();
	var hours = d.getHours();
	var minutes = d.getMinutes();
	var seconds = d.getSeconds();

	month = new Array("января", "февраля", "марта", "апреля", "мая", "июня",
		"июля", "августа", "сентября", "октября", "ноября", "декабря");

	if (day <= 9) day = "0" + day;
	if (hours <= 9) hours = "0" + hours;
	if (minutes <= 9) minutes = "0" + minutes;
	if (seconds <= 9) seconds = "0" + seconds;

	time = hours + ":" + minutes + ":" + seconds;
	date = day + " " + month[month_num] + " " + d.getFullYear();

	document.getElementById('doc_time').innerHTML = time;
	setTimeout('clock()', 1000);
	document.getElementById('doc_date').innerHTML = date;
	setTimeout('clock()', 1000);
}




clock()
	
}
