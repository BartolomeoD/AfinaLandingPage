import FullPage from 'fullpage.js';

var $ = require("jquery");

$(document).ready(function (e) {
    $('#slide1 .anchor').click(function (e) {
        $.fn.fullpage.moveTo(3);
    });
    $(".to-slide").click(function (e) {
        e.preventDefault();
        var slide = $(this).attr("data-slide");
        $.fn.fullpage.moveTo(slide);
    })
    $('#full-page-wrapper').fullpage({
        menu: '#scroll-nav',
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage', '7thPage'],
        onLeave: function (anchorLink, index) {
            $('#scroll-nav .slide-name').fadeOut(300);
        },
        afterLoad: function (anchorLink, index) {
            var name = $('#' + anchorLink + '-menu-title').attr('data-rus-name');
            $('#scroll-nav .slide-name').html(name);
            $('#scroll-nav .slide-name').fadeIn(300);
            console.log(index);
            if (index == 1) {
                $(".bottom-button").removeClass("rotate");
            }

            if (index == 7) {
                $(".bottom-button").addClass("rotate");
            }
        }
    });

    $(".fp-tableCell").css('height', '100%');
    $('.fp-next').html("<i class='icon-right'></i>");
    $('.footer .bottom-button').click(function () {
        if ($(this).hasClass("rotate")) {
            $.fn.fullpage.moveSectionUp();
        } else {
            $.fn.fullpage.moveSectionDown();
        }
    })

    $(".call-me").click(function (e) {
        e.preventDefault();
        if ($('.menu .call-me').hasClass("active")) {
            closeWindow();
            $('.menu .call-me ').removeClass("active");
            $('.menu .call-me i').animate(
                {
                    opacity: 0
                }, 500, function (e) {
                    $('.menu .call-me i').removeClass("icon-cancel");
                    $('.menu .call-me i').addClass("icon-phone");
                    $('.menu .call-me i').animate(
                        {
                            opacity: 1
                        }, 500
                    );
                }
            )
        } else {

            $('.window-bg').css("display", "block");
            setTimeout(function (e) {
                $('.window-bg').addClass("active");
            }, 1);
            $(".window-bg .window").slideDown(1000);
            $('.menu .call-me ').addClass("active");
            $('.menu .call-me i').animate(
                {
                    opacity: 0
                }, 500, function (e) {
                    $('.menu .call-me i').removeClass("icon-phone");
                    $('.menu .call-me i').addClass("icon-cancel");
                    $('.menu .call-me i').animate(
                        {
                            opacity: 1
                        }, 500
                    );
                }
            )
        }
    });
    $(".window-bg").click(function (e) {
        console.log($('.window-bg .container').get()[0]);
        if (e.target != this && $('.window-bg .container').get()[0] != e.target) return;
        closeWindow();
    });
});

function closeWindow() {
    $(".window-bg .window").slideUp(1000);
    $('.window-bg').removeClass("active");
    setTimeout(function (e) {
        $('.window-bg').css("display", "none");
    }, 1000);
}
