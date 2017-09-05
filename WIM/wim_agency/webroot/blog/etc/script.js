$(document).ready(function() {

    
    if(location.search.indexOf('el=pres') != -1) {
        scrollToElement( '#pre-sale', 2000, 0);
    }
    
    // Костыль - кеш вКонтакте не обновляется, ссылка старая
    if(location.hash.indexOf('#carousel_pres') != -1) {
        scrollToElement( '#pre-sale', 2000, 0);
    }
    
    // Показываем кликабельные регионы только на последнем слайде презы
    $('#pre-sale').bind('slid.bs.carousel', function (e) {
        
        

         var data = $('#pre-sale .carousel-inner .active img').attr('data-id');
         
         var $elem = $('#pre-sale_wrapper .map_on_img');
         if (data == 'slide_contacts') {
             $elem.show();
         } else {
             $elem.hide();
         }

     });
    
    // @todo - переделать на html
    $('#agreement_checkbox').prop('checked', true);
    
    


        $('#agreement_checkbox').click(function(){
            var data_id = $(this).attr('data-id');

            // @todo - переделать на события
            if (data_id == 'checked') {
                $(this).attr('data-id', 'unchecked');
                $('#agreement_checkbox').css('background', "url('/images/footer/checkbox.png')");
                $('#agreement_checkbox').css('background', "url('/images/footer/checkbox.png')");
                $('#subscribe_button').prop('disabled', true);
            } else {
                $(this).attr('data-id', 'checked');
                $('#agreement_checkbox').css('background', "url('/images/footer/checkbox_checked.png')");
                $('#subscribe_button').prop('disabled', false);
            }
        });

    
    // Определяем окружение
    if (location.host.indexOf('.ru') != -1) {
        is_frontal = true;
    } else {
        is_frontal = false;
    }
    

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
    
    var pos = $('.logo').offset().top;
    $('nav').followTo(pos);
    
    $('.go_to_form_button').click(function(e){
        e.preventDefault();
        scrollToElement( '.order_form', 2000, 0, $('#nav_order_button'));
        
    });
    
    $('.anchor_href').click(function(e){
        e.preventDefault();
        
        var id = $(this).attr('href');
        
        var $to_hide = null;
        if (id == '#our_contacts') {
            $to_hide = $('#nav_order_button');
        }
        
        scrollToElement(id, 1000, 5, $to_hide);
    });
    
    // Hide mobile nav after click
    $(document).on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
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
         console.error(data);
         $('.carousel_text_item').hide();
         $(data).show();
     });
     
     // Вылезало jquery ui
   $.mobile.loadingMessage = false;
   
   

   
   $('#agreement_button').click(function(){
        $(this).attr('data-id', 'checked');
        $('#agreement_checkbox').css('background', "url('/images/footer/checkbox_checked.png')");
        $('#subscribe_button').prop('disabled', false);
   });
   
   // @todo - вынести в отдельный класс-валидатор
   $('#subscribe_button').click(function(){
       $('#subscribe_message').hide();
       
        if (!$('#agreement_checkbox').prop('checked')) {
           $('#subscribe_message').text('Не приняты условия политики конфиденциальности');
           $('#subscribe_message').show();
            return false;
        }
       
       $('#subscribe_email').css('border', '1px solid #ccc');
       var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       
       var email = $('#subscribe_email').val();

       if (!re.test(email) || email.length < 1) {
           $('#subscribe_message').text('Введен некорректный email');
           $('#subscribe_message').show();
           $('#subscribe_email').css('border', '1px solid red');
           return false;
       }
       

       
       subscribe(email);      
   });
});

function subscribe(email) {

        var prefix = null;
    if (is_frontal) {
        prefix =  '';
    } else {
        prefix =  '';
    }
        
        $.ajax({
        url: prefix + "/service/wim/subscribe.php",
        type: "POST",
        data: {
                email: email
        },
        dataType: "JSON",
        success: function (jsonStr) {
            console.error(jsonStr);
            
            
            if (jsonStr == null) {
                // ToDo - отправка ошибки на почту администратора
                alert('Данные не могут быть отправлены');
                return false;
            }
          

            var hideDuration = 800;
            


            // Скрываем форму
            $("#form_subscribe").hide();
            $('#subscribe_email').val('');
            

            $("#form_subscribe_feedback").delay(2*hideDuration).show();

            return true;

        },
        error: function(){
            // ToDo - отправка ошибки на почту администратора
            alert('Данные не могут быть отправлены');
        }

    });
}



$(window).load(function(){
    $('.ui-loader').hide();

});

var windw = this;
$.fn.followTo = function ( pos ) {
    var $this = this,
        $window = $(windw);


    $window.scroll(function(e){


        if ($window.scrollTop() > pos ) {
            $this.css({
                display: 'block',                
            });
        } else {
            $this.css({
                display: 'none',   
            });
        }
    });
};