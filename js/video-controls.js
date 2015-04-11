var v = document.getElementById('promo_video');

v.volume = 0.5;

v.addEventListener('click',function(){
    if (v.paused == false) {
        v.pause();
        v.firstChild.nodeValue = 'Play';
    }
    else {
        v.play();
        v.firstChild.nodeValue = 'Pause';
    }
});
