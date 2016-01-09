$(document).ready(function() {
	var count = 1;
	setInterval(function() {
		if (count == 8) {
			count = 0;
		}
		count += 1;
		$('.intro').css({
			'background-image': 'url(img/backgrounds/' + count + '.jpg)'
		});
	}, 2000);

	$('.plan-container').mouseenter(function() {
		$(this).find('.over').addClass('hidden');
		$(this).find('.under').removeClass('hidden');
	});

	$('.plan-container').mouseleave(function() {
		$(this).find('.under').addClass('hidden');
		$(this).find('.over').removeClass('hidden');
	});

	

});