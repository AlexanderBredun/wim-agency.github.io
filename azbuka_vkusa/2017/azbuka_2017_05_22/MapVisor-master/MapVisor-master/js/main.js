$(document).ready(function () {
    $(function() {
        jcf.replace('select');
    });
    jcf.setOptions('Select', {
        wrapNativeOnMobile: false,
        wrapNative: false,
        maxVisibleItems: 5
    });

    // hide/show arrow up
    $(window).scroll(function() {
        var windowTop = $(window).scrollTop();
        var contentTop = $('main.content').offset().top + 120;
        if (windowTop > contentTop) {
            $('.arrow-up').fadeIn(300);
        }
        else {
            $('.arrow-up').fadeOut(300);
        }
    });
    // animation scroll for window after click on arrow up
    $('.arrow-up').click(function () {
        console.log('df');
        $("html, body").animate({
            scrollTop: 0 }, 700);
        return false;
    });
});