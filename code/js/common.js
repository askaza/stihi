$(document).ready(function() {

$('.portfolio__item a').attr('rel', 'media-gallery').fancybox({
	openEffect : 'none',
	closeEffect : 'none',
	prevEffect : 'none',
	nextEffect : 'none',
	padding:0,
	margin:0,
	autoResize:false,
	fitToView:false,
	closeBtn:false,
	arrows : true,
	scrolling:'no',

	helpers: {
	    overlay : {
		locked     : false
	    }
	}

    });



	$('input, textarea').placeholder();

	$('.jqtransform').jqTransform();






});

