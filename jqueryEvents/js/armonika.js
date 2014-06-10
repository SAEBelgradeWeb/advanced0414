$(document).ready(function(){
	$('dt').on('click', function(){
		$(this).siblings('dd').slideUp();
		$(this).next('dd').slideDown();

//		window.location.href  = "http://www.google.com";
	});

});

