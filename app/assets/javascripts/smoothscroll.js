$(document).ready( function() {
    // window.addEventListener('click', function(event) {
       var $root = $('html, body');
        $('.scroll').click( function(e) {
             var target = this.hash;
             var $target = $(target);
             if($target.length > 0){
                 e.preventDefault(); 
                 $("html,body").animate({
                     'scrollTop': $target.offset().top
                 }, 1000, 'swing', function(){
                     window.location.hash = target;
                 });
             }
        });
    // }, {passive: true});
 });