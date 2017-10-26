$(document).on('turbolinks:load', function(){
    $(".top").click(function(){
    	 $(this).next().toggle();
    });
    $(".bottom").click(function( event ) {
       event.stopPropagation();
    });
});