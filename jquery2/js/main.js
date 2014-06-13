$(document).ready(function(){
	var sirina = $(window).width();

	$('.crni').on('click', function(){
		$(this).animate({
			left: (sirina - 100) + "px"
		}, {
			duration: 1000,
			queue: false
		}).animate({
			top: '700px'
		}, {
			duration: 2000,
	
		});
	});
});