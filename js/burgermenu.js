$(document).ready(function () {
    $('.burger').on('click', function () {
        $('.burger').toggleClass('active');
        $('nav li').toggleClass('open');
        $('header h1').toggle();
    })
});