// variables for selectors
var scrolledPhone = $('#scrolled-phone');
var topSection = $('#top-section');
var descTop = $("#desc-top");
var sliderSection = $("#slider-section");
var gear360Section = $("#gear-360-section");
var gearVr = $("#gear-vr-section");
var musicSection = $("#music-section");
var chargerSection = $("#charger-section");
var animLine = $('.anim-line');
var animTel = $('.anim-tel');
var smartClock = $('#smart-clock');
var gear360 = $('#gear-360');
var swiperContainer = $('.swiper-container');
var headphones = $('#headphones');
var chargerFinal = $('.charger-final');

var topSectionPhone =  $('#top-section-phone');
var darkLineBoxPhone =  $('#dark-line-box-phone');
var sliderPhone =  $('#slider-phone');
var gear360Phone =  $('#gear-360-phone');
var phoneView02 =  $('#phone-view02');
var phoneView03 =  $('#phone-view03');
var gearPhone =  $('#gear-vr-phone');
var musicPhone =  $('#music-phone');

// variables for section height
var topSecH = topSection.outerHeight();
var descTopH = descTop.outerHeight();
var sliderSecH = sliderSection.outerHeight();
var gear360H = gear360Section.outerHeight();
var gearVrH = gearVr.outerHeight();
var musSecH = musicSection.outerHeight();
var chargerSecH = chargerSection.outerHeight();

// init controller
var controller = new ScrollMagic.Controller(
    {globalSceneOptions: {triggerHook: "onLeave"}}
);

// build scenes
var topSecProgress;
var descTopProgress;
var sliderSectionProgress;
var gear360Progress;
var gearVrProgress;
var musicSectionProgress;

new ScrollMagic.Scene({triggerElement: "#top-section", duration: topSecH})
    .setClassToggle("#top-section", "active")
    //.addIndicators()
    .on("progress", function (e) {
        topSecProgress = e.progress.toFixed(3);
    })
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#desc-top", duration: descTopH})
    .setClassToggle("#desc-top", "active")
    //.addIndicators()
    .on("progress", function (e) {
        descTopProgress = e.progress.toFixed(3);
    })
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#slider-section", duration: sliderSecH})
    .setClassToggle("#slider-section", "active")
    //.addIndicators()
    .on("progress", function (e) {
        sliderSectionProgress = e.progress.toFixed(3);
    })
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#gear-360-section", duration: gear360H})
    .setClassToggle("#gear-360-section", "active")
    //.addIndicators()
    .on("progress", function (e) {
        gear360Progress = e.progress.toFixed(3);
    })
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#gear-vr-section", duration: gearVrH})
    .setClassToggle("#gear-vr-section", "active")
    //.addIndicators()
    .on("progress", function (e) {
        gearVrProgress = e.progress.toFixed(3);
    })
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#music-section", duration: musSecH})
    .setClassToggle("#music-section", "active")
    //.addIndicators()
    .on("progress", function (e) {
        musicSectionProgress = e.progress.toFixed(3);
    })
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#charger-section", duration: chargerSecH})
    .setClassToggle("#charger-section", "active")
    //.addIndicators()
    .addTo(controller);

$(document).ready(function() {
    // script for sticky nav
    var nav = $('#header');
    function stickyElement() {
        if ($(window).scrollTop() > 0) {
            nav.addClass("fixed");
        }
        else {
            nav.removeClass("fixed");
        }
    }
    stickyElement();

    // function for change section class and detecting progress for every section
    function classChange() {
        var scTopDist = $(window).scrollTop();
        if ( scTopDist == 0)  {
            topSectionPhone.removeClass().addClass('default');
        }
        else if( (topSecProgress > 0.1) && (topSecProgress < 0.3) && (topSection.hasClass('active')) ) {
            topSectionPhone.removeClass().addClass('anim1');
        }
        else if( (topSecProgress > 0.3) && (topSecProgress < 0.55) && (topSection.hasClass('active')) ) {
            topSectionPhone.removeClass().addClass('anim2');
        }
        else if( (topSecProgress > 0.55) && (topSection.hasClass('active')) ) {
            topSectionPhone.removeClass().addClass('anim2-2');
        }
        else if(descTop.hasClass("active")) {
            animLine.addClass('anim-line-active');
            animTel.removeClass('left-m').addClass('anim-tel-active');
            darkLineBoxPhone.removeClass().addClass('anim3');
        }
        if( (descTopProgress > 0.15) && (descTopProgress < 0.6) && (descTop.hasClass('active')) ) {
            animTel.addClass('left-m');
            //smartClock.removeClass('smart-clock-active');
        }
        if( (descTopProgress > 0.6) && (descTop.hasClass('active')) ) {
            animLine.removeClass('anim-line-active');
            animTel.removeClass('anim-tel-active').removeClass('left-m');
           // scrolledPhone.removeClass().addClass('anim4');
            darkLineBoxPhone.removeClass();
            //smartClock.removeClass().addClass('smart-clock-active');
            swiperContainer.removeClass('visible-swiper');
            sliderPhone.removeClass();
            smartClock.removeClass();
        }
        else  if( !(descTop.hasClass('active')) ) {
            darkLineBoxPhone.removeClass();
            animLine.removeClass('anim-line-active');
            animTel.removeClass('anim-tel-active').removeClass('left-m');
        }
        if(sliderSection.hasClass("active")) {
            smartClock.addClass('smart-clock-pos1');
            sliderPhone.addClass('anim5');
        }
        if( (sliderSectionProgress > 0.1) && (sliderSectionProgress < 0.55) && (sliderSection.hasClass('active')) ) {
            swiperContainer.addClass('visible-swiper');
            //smartClock.removeClass();
        }
        if( (sliderSectionProgress > 0.55) && (sliderSectionProgress < 0.75) && (sliderSection.hasClass('active')) ) {
            swiperContainer.removeClass('visible-swiper');
            sliderPhone.removeClass('anim6');
            smartClock.removeClass().addClass('smart-clock-pos1');
        }
        if( (sliderSectionProgress > 0.75) && (sliderSection.hasClass('active')) ) {
            sliderPhone.removeClass().addClass('anim6');
            smartClock.removeClass('smart-clock-pos1').addClass('smart-clock-pos2');
            gear360.removeClass();
            gear360Phone.removeClass();
        }
        if( (sliderSectionProgress > 0.75) && (sliderSection.hasClass('active')) ) {
            gear360Phone.addClass('anim7');
            gear360.removeClass().addClass('gear-360-pos1');
        }
        if(gear360Section.hasClass("active")) {
            gear360.removeClass().addClass('gear-360-pos2');
            gear360Phone.removeClass().addClass('anim8');
            phoneView02.removeClass();
        }
        if( (gear360Progress > 0.4) && (gear360Progress < 0.6) && (gear360Section.hasClass('active')) ) {
            gear360Phone.removeClass().addClass('anim9');
            gear360.removeClass().addClass('gear-360-pos3');
            phoneView02.removeClass().addClass('visible');
            phoneView03.removeClass();
        }
        if( (gear360Progress > 0.6) && (gear360Section.hasClass('active')) ) {
            gear360Phone.removeClass().addClass('anim9');
            gear360.removeClass().addClass('gear-360-pos3');
            phoneView02.removeClass();
            phoneView03.addClass('visible');
            gearPhone.removeClass();
        }
        /*if( (gear360Progress > 0.35) && ((gear360Progress < 0.5)) && (gear360Section.hasClass('active')) ) {
            scrolledPhone.removeClass().addClass('anim10');
            gear360.removeClass().addClass('gear-360-pos4');
        }
        if( (gear360Progress > 0.5) && ((gear360Progress < 0.75)) && (gear360Section.hasClass('active')) ) {
            scrolledPhone.removeClass().addClass('anim11');
            gear360.removeClass().addClass('gear-360-pos5');
        }
        if( (gear360Progress > 0.75) && (gear360Section.hasClass('active')) ) {
            scrolledPhone.removeClass().addClass('anim12');
            gear360.removeClass().addClass('gear-360-pos5');
        }*/
        if(gearVr.hasClass("active")) {
            gearPhone.removeClass().addClass('anim13');
        }
        if( (gearVrProgress > 0.15) && (gearVrProgress < 0.21) && (gearVr.hasClass("active")) ) {
            gearPhone.removeClass().addClass('anim14');
        }
        if( (gearVrProgress > 0.21) && (gearVr.hasClass("active")) ) {
            gearPhone.removeClass().addClass('anim15');
            headphones.removeClass();
        }
        if(musicSection.hasClass("active")) {
            headphones.removeClass().addClass('headphones-pos1');
            musicPhone.removeClass();
        }
        if( (musicSectionProgress > 0.1) && (musicSectionProgress < 0.2) && (musicSection.hasClass("active")) ) {
            musicPhone.removeClass().addClass('anim17');
            headphones.removeClass().addClass('headphones-pos2');
        }
        if( (musicSectionProgress > 0.2) && (musicSectionProgress < 0.35) && (musicSection.hasClass("active")) ) {
            musicPhone.removeClass().addClass('anim18');
            headphones.removeClass().addClass('headphones-pos2');
        }
        if( (musicSectionProgress > 0.35) && (musicSection.hasClass("active")) ) {
            scrolledPhone.removeClass().addClass('anim19');
            chargerFinal.removeClass('charger-final-active');
        }
        if(chargerSection.hasClass("active")) {
            scrolledPhone.removeClass().addClass('anim20');
            chargerFinal.addClass('charger-final-active');
        }
    }
    classChange();
    $(window).on('scroll', function() {
        stickyElement();
        classChange();
    });

    // slider init
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoHeight: true, //enable auto height
    });
});