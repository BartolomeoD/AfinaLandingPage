import FullPage from 'fullpage.js';

var $ = require("jquery");

$(document).ready(function (e) {
    $('#full-page-wrapper').fullpage({
        menu: '#scroll-nav',
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
        onLeave: function (anchorLink, index) {
            $('#scroll-nav .slide-name').fadeOut(300);
        },
        afterLoad: function (anchorLink, index) {
            console.log(1);
            var name = $('#' + anchorLink + '-menu-title').attr('data-rus-name');
            console.log(2);
            $('#scroll-nav .slide-name').html(name);
            $('#scroll-nav .slide-name').fadeIn(300);
            console.log(3);
        }
    });

});
