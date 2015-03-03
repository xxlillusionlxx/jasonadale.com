$(document).ready(function () {
	$(window).scroll(function(event) {
		var y = $(this).scrollTop();
		if(y >= 400) {
			$('#jumboEdit').addClass('animated wiggle');
			$('.codeSnippet').addClass('animated wiggle');
		}
	});
});