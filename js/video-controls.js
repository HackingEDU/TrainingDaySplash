var video = document.getElementById('video_iframe');
var ratio = 560 / 310;
video.style.width = window.innerWidth;
video.style.height = (window.innerWidth/ratio).toString() + 'px';

window.addEventListener('resize', function(event) {
	var width = window.innerWidth;
	video.style.height = (width/ratio).toString() + 'px';
	//console.log(width/video.offsetHeight);
});
