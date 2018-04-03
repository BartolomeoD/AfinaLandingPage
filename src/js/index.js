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
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage','7thPage'],
        onLeave: function (anchorLink, index) {
            $('#scroll-nav .slide-name').fadeOut(300);
        },
        afterLoad: function (anchorLink, index) {
            var name = $('#' + anchorLink + '-menu-title').attr('data-rus-name');
            $('#scroll-nav .slide-name').html(name);
            $('#scroll-nav .slide-name').fadeIn(300);
        }
    });

    $(".fp-tableCell").css('height', '100%');
    $('.fp-next').html("<i class='icon-right'></i>");
    $('.footer .bottom-button').click(function () {
        $.fn.fullpage.moveSectionDown();
    })
});
