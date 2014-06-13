$(document).ready(function(){
	var h = $(window).height();
	var w = $(window).width();

	setInterval(function(){
		var l = Math.round((Math.random()*w)-1);

		$('<div>', {
			class: 'kap',
			style: 'left: ' + l + 'px'
		}).appendTo('.container');

		$('.kap').animate({
			top: h + 'px' 
		}, {
			duration: 500,
			complete: function(){
				$(this).remove();
			}
		});
	}, 1);



});