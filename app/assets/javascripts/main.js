
/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
 
$(document).ready(function(){

	var bodyEl = document.body,
		content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;
		
    var link = document.getElementById("menu-link");
	function init() {
		initEvents();
		}

function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( link ) {
			link.addEventListener( 'click', toggleMenu );
		}
		
		if (closebtn) {
			closebtn.addEventListener('click', toggleMenu);
		}

		// close the menu element if the target itÂ´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
	}


	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
		}
		isOpen = !isOpen;
	}
	
	function hideMenu(){
		document.getElementsByClassName("menu-wrap")[0].style.visibility = "hidden";
	}
	
	function showMenu(){
		document.getElementsByClassName("menu-wrap")[0].style.visibility = "visible";
	}

	init();

}); 



