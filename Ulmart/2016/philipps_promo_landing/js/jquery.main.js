$(document).ready(function() {
    var tab = $(".tab-list li");
    var wrapper = $(".wrapper");
    var linkRacing = $(".link-racing");
    var linkXtreme = $(".link-xtreme");
    var actionRacingLink = $(".action-racing-link");
    var actionXtremeLink = $(".action-xtreme-link");
    tab.mouseover(function(){
            if (!$(this).hasClass('active-tab')) {
                tab.removeClass('active-tab');
                $(this).addClass('active-tab');
            }
        }
    );
    linkXtreme.click(function() {
        if (wrapper.hasClass('xtreme-wrapper')) return false;
        else {
            actionXtremeLink.text('перейти в каталог');
            actionRacingLink.text('узнать больше');
            $(this).hide();
            linkRacing.show();
            wrapper.addClass('xtreme-wrapper');
            return false;
        }
    });
    linkRacing.click(function() {
        if (!wrapper.hasClass('xtreme-wrapper')) return false;
        else {
            actionRacingLink.text('перейти в каталог');
            actionXtremeLink.text('узнать больше');
            $(this).hide();
            linkXtreme.show();
            wrapper.removeClass('xtreme-wrapper');
            return false;
        }
    });
});
