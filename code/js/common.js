$(document).ready(function() {
	$('#slides').slides({
		preload: true,
		generateNextPrev: true,
		generatePagination:false
	});
	$( "#tabs" ).tabs();

	if ($.browser.msie && $.browser.version < 9) {
		$('.articles-list_top .block_article:nth-child(even)').addClass('block_article_even');
		$('.articles-list_bottom .block_article:nth-child(odd)').addClass('block_article_odd');
	}

	$('input, textarea').placeholder();

	$('.ico_collapsed').click(function(){
		$(this).parents('.comment-single').next().slideToggle(500);
		$(this).toggleClass('ico_expanded');
	});

	$('.jqtransform').jqTransform();

  


});

