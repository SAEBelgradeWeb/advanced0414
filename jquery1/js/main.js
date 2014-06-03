$(document).ready(function(){
	//$('li').filter('.poseban').addClass('green');
	$('.poseban').parent('ul').parent('li').siblings('li').addClass('green')
				.end().end().end().addClass('tusmo');


});

//kretanje kroz DOM
//children(), find(), parent(), parents(), closest(), next(), prev(), eq(), siblings(), filter(), end(), first(), last()

//"chaining" je mogucnost da redjamo jquery metode jedan za drugi 



//ready() metod 
$(document).ready(function(){
	
});


//anonimna samopozivajuca funckija
(function(){

})();





$(document).ready(function(){
	//$('.srednji').siblings('li').first().addClass('crvena').siblings('li').last().addClass('crvena');
	$('.srednji').parent('ul').children('li').eq(0).addClass('crvena').end().eq(4).addClass('crvena');
});

















