$(document).ready(function(){

/*	var divko = $('#divko');

	divko.on('click', function(){
		$(this).addClass('zavrti');
	});
	divko.on('mouseout', function(){
		$(this).removeClass('zavrti');
	})*/

	$('#divko').on('click', function(){
		$(this).addClass('zavrti');
	}).on('mouseout', function(){
		$(this).removeClass('zavrti');
	});



/*
	$('.divko3').animate({
		'background-color': 'blue',
		'border-radius' : "40px",
		'left': '500px'

		}, 1000, 'swing',function(){
			alert('gotovo');
		} );*/

	$('.divko3').animate({
		'border-radius' : "40px",
		'left': '500px'
	}, {
		duration: 1000,
		queue: true,
		step: function(){
		

		}
	}).animate({
		'border-radius' : "100px",
		'top': '500px'
	}, {
		duration: 1000,
	});

});












