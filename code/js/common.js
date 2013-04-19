$(document).ready(function() {

    $('.mask').mask("8(***)***-**-**");

    var aColumnizer = [];
    $('.portfolio__item a').attr('rel', 'media-gallery').fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        prevEffect: 'none',
        nextEffect: 'none',
        padding: 0,
        margin: 0,
        autoResize: false,
        fitToView: false,
        closeBtn: false,
        arrows: true,
        scrolling: 'no',
        helpers: {
            overlay: {
                locked: false
            }
        },
        afterLoad: function(current) {
            $(".portfolio .portfolio__item").removeClass("active");
            var aHref = current.href.split("#");
            $("." + aHref[1] + "_link").addClass("active");
        },
        beforeLoad: function() {
            $('.menu__item_portfolio').addClass('menu__item_active');
        },
        afterClose: function() {
            $(".portfolio .portfolio__item").removeClass("active");
            $('.menu__item_portfolio').removeClass('menu__item_active');
        }

    });

    $('.show-hint-popup').fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        prevEffect: 'none',
        nextEffect: 'none',
        padding: 0,
        margin: 0,
        autoResize: false,
        fitToView: false,
        closeBtn: false,
        arrows: true,
        scrolling: 'no',
      
        afterLoad: function(current, next) {

            if ($.inArray($($(current)[0].content).attr("id"), aColumnizer) < 0) {
                setTimeout(function() {
                    $("#" + $($(current)[0].content).attr("id")).parent().find(".hints-list").columnize({columns: 4});
                    aColumnizer[aColumnizer.length] = $($(current)[0].content).attr("id");
                }, 10);
            }
        },
        helpers: {
            overlay: {
                locked: false
            }
        }
    });

    $("#popup-character .hints-list__item li").on("click", function() {
        $(this).toggleClass('active-hint');
        var aListedWords = $("#characterlist").val().split(",");
        for (k in aListedWords) {
            if ($.trim(aListedWords[k]) != "") {
                aListedWords[k] = $.trim(aListedWords[k]);
            } else {
                aListedWords.splice(k, 1);
            }
        }
        var iWordKey = $.inArray($(this).text(), aListedWords);
        if (iWordKey >= 0) {
            aListedWords.splice(iWordKey, 1);
        } else {
            aListedWords[aListedWords.length] = $(this).text();
        }
        $("#characterlist").val(aListedWords.join(", "));
    });

    $("#popup-wish .hints-list__item li").on("click", function() {  
        $(this).toggleClass('active-hint');
         
        var aListedWords = $("#wishlist").val().split(",");
        for (k in aListedWords) {
            if ($.trim(aListedWords[k]) != "") {
                aListedWords[k] = $.trim(aListedWords[k]);
            } else {
                aListedWords.splice(k, 1);
            }
        }
        var iWordKey = $.inArray($(this).text(), aListedWords);
        if (iWordKey >= 0) {
            aListedWords.splice(iWordKey, 1);
        } else {
            aListedWords[aListedWords.length] = $(this).text();
        }
        $("#wishlist").val(aListedWords.join(", "));
        
    });
    
   


    $(".fancyclose").on("click", function() {
        $.fancybox.close();
    });


    $('input, textarea').placeholder();

    $('.form').jqTransform();






});

