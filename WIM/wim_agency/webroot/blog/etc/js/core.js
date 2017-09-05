function scrollToElement(el, ms, margin, $hide_element) {
    var speed = (ms) ? ms : 600;
    var margin = (margin) ? margin : 0;
    
    $('html,body').animate({
        scrollTop: $(el).offset().top - margin
    }, speed, function(){
        if ($hide_element) {
            $hide_element.hide();
        }
    });
}


