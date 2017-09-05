function scrollToElement(el, ms, margin) {
    var speed = (ms) ? ms : 600;
    var margin = (margin) ? margin : 0;
    
    $('html,body').animate({
        scrollTop: $(el).offset().top - margin
    }, speed);
}

function formatAsRoundCurrency(number) {
    number = number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ');
    number = number.replace('.00', '') + ' руб.';
    return number;
}


var windw = this;
$.fn.followTo = function ( pos, min_top ) {
    var $this = this,
        $window = $(windw);


    $window.scroll(function(e){


        if ($window.scrollTop() > pos ) {
            $this.css({
                position: 'absolute',
                top: pos
            });
        } else {
            $this.css({
                position: 'fixed',
                top: min_top
            });
        }
    });
};