$(document).ready(function() {
    $('#en-lang').click(function() {
        $('.main-ru').css('display', 'none');
        $('.main-en').css('display', 'flex');
    });
    $('#ru-lang').click(function() {
        $('.main-ru').css('display', 'flex');
        $('.main-en').css('display', 'none');
    });
});