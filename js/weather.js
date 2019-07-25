$.get(
	"http://api.openweathermap.org/data/2.5/weather",
	{
		"id": 625144,
		"appid": "c64da12794490031263d6cb34bb4abf1"
	},
		function (data) {
		var temp = Math.round(data.main.temp - 273) + '&degC' + '<img style="" src = "https://openweathermap.org/img/w/' + data.weather[0].icon + '.png">';
		document.getElementById('weather').innerHTML = temp;

			
		}
)
// window.onload = function () {
// 	function (temperature)
// }
