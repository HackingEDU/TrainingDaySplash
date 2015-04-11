var v = document.getElementById('promo_video');

<!-- Preset volume -->
v.volume = 0.5;

<!-- Play, Pause -->
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
