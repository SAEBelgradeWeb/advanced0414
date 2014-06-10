(function(){
	$(document).ready(function(){

		/*$('.poseban').on('click',function(){
			alert('kliknuli ste na stranicu');
		});*/

		/*$('li').on('click',function(){


			$('p').slideDown(3000 , function() {
				alert('izvrsila se funkcija');
			});
		});*/

		
		//event handler: otvaranje forme za logovanje
		$('#prikaz_forme').on('click', function(){

			$('.forma').slideDown(1000);

			//event handler: usli u polje
			$('.forma input').on('focus', function(){
				var moj_element = $(this);
				moj_element.css('background-color', 'white');
			});

			//event handler: izasli iz polja
			$('.forma input').on('blur', function(){
				var moj_element = $(this);
				var sadrzaj = moj_element.val();
				if (sadrzaj == '') {
					moj_element.css('background-color','red');
					//dodavanje atributa elementu
					moj_element.attr('placeholder', 'Molim vas popunite ovo polje, obavezno je');
				} else {
					moj_element.css('background-color','green');
				}
			});
		});

		//event handler: korisnik hoce da se uloguje
		$('input[name="submit"]').on('click', function(kurs){

			kurs.preventDefault();
			$('.forma').slideUp(1000, function(){
				alert('logovacemo korisnika iako nije uneo podatke, bez validacije');
				$('.forma > form').submit();
			});
		});

		//event handler: prikaz galerije
		$('#prikaz_galerije').on('click', function(){
			$('.galerija').fadeIn(1500);
		})

		$('.sidebar img').on('mouseenter', function(){
			var slika = $(this);
			var putanja = slika.attr('src');
			$('.large').attr('src', putanja);
			$('.large').fadeIn(500);
		});

		$('.sidebar img').on('mouseout', function(){
			$('.large').attr('src', '');
			$('.large').fadeOut(500);
		});


	});
})();
