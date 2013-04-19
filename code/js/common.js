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
	},
	 afterLoad: function(current) {

	},
	beforeLoad : function() {
	    $('.menu__item_portfolio').addClass('menu__item_active');
	},
	 afterClose : function() {
	   $('.menu__item_portfolio').removeClass('menu__item_active');
	}

    });

    $('.show-hint-popup').fancybox({
        openEffect : 'none',
        closeEffect : 'none',
        prevEffect : 'none',
        nextEffect : 'none',
        padding:0,
        margin:0,
        autoResize:false,
        fitToView:false,
        closeBtn:false,
        arrows : false,
        scrolling:'no',
        afterLoad: function( current, next ) {
            console.log( $( "#" + $( $( current )[0].content ).attr( "id" ) ).parent().find( ".fields-list" ) );
            $( "#" + $( $( current )[0].content ).attr( "id" ) ).parent().find( ".fields-list" ).columnize( { columns: 4 } );
        },
        helpers: {
            overlay : {
            locked     : false
            }
        }
    });





	$('input, textarea').placeholder();

	$('.form').jqTransform();






});

