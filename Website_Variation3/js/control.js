$(function () {
	
	/* 
		Animate opening words.
		Sequence: div #one fades in, then orange bottom border fades in, and so on
	*/
		
	$('#one').css('visibility', 'visible');
	$('#first').addClass('animated fadeInLeft');
	
	$('#first').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		$('#one').css('border-bottom-style', 'solid');
		$('#one').css('border-bottom-color', 'orange');
		
		$('#two').css('visibility', 'visible');
		$('#second').addClass('animated fadeInUp');
	});
	
	$('#second').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		$('#two').css('border-bottom-style', 'solid');
		$('#two').css('border-bottom-color', 'orange');
		
		$('#three').css('visibility', 'visible');
		$('#third').addClass('animated fadeInRight');
	});
	
	$('#third').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		$('#three').css('border-bottom-style', 'solid');
		$('#three').css('border-bottom-color', 'orange');
	});

	$('#three').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		$('#vert').addClass('stuff');	
	});

	$('#vert').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		$('#name').css('visibility', 'visible');

		$('#jumbo').css('visibility', 'visible');
		$('#jumbo2').css('visibility', 'visible');
		
		$('#projectImgs').css('visibility', 'visible');
		
		$('#name').addClass('animated bounceInDown');
		
		$('#projectImgs').addClass('animated fadeInUp');
		
		$('#jumbo').addClass('animated fadeInUp');
		$('#jumbo2').addClass('animated fadeInUp');
	});

});