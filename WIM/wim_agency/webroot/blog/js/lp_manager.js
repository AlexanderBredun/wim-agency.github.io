function Lp_manager() {
    this.init_welcome_events();
    
    this.init_layout_event_handlers();
    this.init_content_event_handlers();    
}

Lp_manager.prototype = {
    
    init_welcome_events : function() {
        // Если лайкнул на фейсбуке, крутим на презу.
        // С hash в урле не работал
        if(location.search.indexOf('el=pres') != -1) {
            scrollToElement( '#pre-sale', 2000, 0);
        }
    },
    
    // Инициализация событий, относящихся к header, footer,
    // которые планируется использовать на других страницах
    init_layout_event_handlers : function() {
        // Навигация появляется только после прокрутки до логотипа
        $('nav').followTo($('.logo').offset().top);
        
        // Плавно переходим к якорю
        // @todo - в ядро, сделать универсальной
        $('.anchor_href').click(function(e){
            e.preventDefault();

            var id = $(this).attr('href');

            var $to_hide = null;
            if (id == '#our_contacts') {
                $to_hide = $('#nav_order_button');
            }

            scrollToElement(id, 1000, 5, $to_hide);
        });
        
        // Доработка bootstrap nav
        // @todo - в ядро
        $(document).on('click','.navbar-collapse.in',function(e) {
            if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
                $(this).collapse('hide');
            }
        });
        
        // Типовой переход к форме заказа
        // @todo - сделать на якорях
        $('.go_to_form_button').click(function(e){
            e.preventDefault();
            scrollToElement( '.order_form', 2000, 0, $('#nav_order_button'));
        });
        
    },
    
    init_content_event_handlers: function() {
        // Показываем кликабельные регионы только на последнем слайде презы
        $('#pre-sale').bind('slid.bs.carousel', function (e) {
             var data = $('#pre-sale .carousel-inner .active img').attr('data-id');

             var $elem = $('#pre-sale_wrapper .map_on_img');
             if (data == 'slide_contacts') { $elem.show(); }
             else { $elem.hide(); }

        });
        
        // Скрываем кнопку "оставить заявку" навигации мобильника,
        // если она появляется вместе с основной кнопкой
        $(window).scroll(function(){
            var scroll_pos = $(windw).scrollTop();

            if (scroll_pos < $('#about_us').offset().top) {
                $('#nav_order_button').hide();
            } else if (scroll_pos > $('#our_contacts').offset().top) {
                $('#nav_order_button').hide();
            }
            else {
                $('#nav_order_button').show();
            } 
        });
        

        // Add slide changing on swipe
       $(".carousel").swiperight(function(e) { 
           e.preventDefault();
          var id = $(this).attr('id');
          $('#' + id).carousel('prev');  
        });  
       $(".carousel").swipeleft(function(e) { 
           e.preventDefault();
          var id = $(this).attr('id');
          $('#' + id).carousel('next');    
       });


        // Change text on swipe
        $('#carousel_ipad').bind('slid.bs.carousel', function (e) {
            var data = $('#carousel_ipad .carousel-inner .active').attr('data-id');
            $('.carousel_text_item').hide();
            $(data).show();
         });
    },
        
}

