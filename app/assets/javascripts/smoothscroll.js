// https://en.wikipedia.org/wiki/Immediately-invoked_function_expression
// https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(document).ready(function(){
       var $root = $('html, body');
        $('.scroll').click( function(e) {
             var target = this.hash;
             var $target = $(target);
             if($target.length > 0){
                 //e.preventDefault();
                 $("html,body").animate({
                     'scrollTop': $target.offset().top
                 }, 1000, 'swing', function(){
                     window.location.hash = target;
                 });
             }
        });
 });