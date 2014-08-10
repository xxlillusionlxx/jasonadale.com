$(function () {
	
	/* 
		Animate opening words, then fade in rest of layout.
		Sequence: div #one fades in, then orange bottom border fades in, and so on

		Heavy JQuery usuage in this file
	*/
	$('.arrow').hide();

	$('#one').css('visibility', 'visible');
	$('#first').addClass('animated fadeInLeft');
	
	$('#first').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		$('#one').css('border-right-style', 'solid');
		$('#one').css('border-right-color', '#7a7a8a');

		$('#two').css('visibility', 'visible');
		$('#second').addClass('animated fadeInUp');
	});
	
	$('#second').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		$('#two').css('border-right-style', 'solid');;
		$('#two').css('border-right-color', '#7a7a8a');
		
		$('#three').css('visibility', 'visible');
		$('#third').addClass('animated fadeInRight');
	});

	$('#three').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		$('#vert').addClass('stuff');	
	});

	$('#vert').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		$('#name').css('visibility', 'visible');
		$('#jumbo').css('visibility', 'visible');
		$('.arrow').show();

		$('.arrow').addClass('animated fadeInDown');
		$('#name').addClass('animated bounceInDown');
		$('#jumbo').addClass('animated fadeInUp');
	});

});