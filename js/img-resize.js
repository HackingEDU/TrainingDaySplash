var paypalMap = document.getElementById('paypal_map');
var ratio = 4484 / 3300;
paypalMap.style.width = $(window).innerWidth() - 100;
paypalMap.style.height = (($(window).innerWidth()-100)/ratio).toString() + 'px';
paypalMap.style.display = 'block';

window.addEventListener('resize', function(event) {
	var width = $(window).innerWidth() - 100;
	paypalMap.style.height = (width/ratio).toString() + 'px';
});