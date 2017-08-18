$(document).ready( function() {
    var video = document.getElementById('vid');
    video.addEventListener('onload',function(){
      video.play();
    },false);
});