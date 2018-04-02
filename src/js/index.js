import FullPage from 'fullpage.js';

var $ = require("jquery");

$(document).ready(function (e) {
    $('#slide1 .anchor').click(function (e) {
        console.log($(this).attr('data-item'));
        console.log($($(this).attr('data-item')));
        $($(this).attr('data-item')).click();
        $.fn.fullpage.moveTo(3);
    });
    $('#full-page-wrapper').fullpage({
        menu: '#scroll-nav',
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage'],
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
    $('.fp-next').html("<i class='icon-right'></i>")
    $("#slide3 .parent-list .item").click(function (e) {
        $("#slide3 .parent-list .item").removeClass('active');
        $("#slide3 .child-list").removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-item');
        $("#"+selector).addClass('active');
    })

    $('.footer .bottom-button').click(function () {
        $.fn.fullpage.moveSectionDown();
    })
});
