$(document).ready(function() {

    // @todo - переделать на html
    $('#agreement_checkbox').prop('checked', true);
    
    
    $('#agreement_button').click(function(){
        $(this).attr('data-id', 'checked');
        $('#agreement_checkbox').css('background', "url('/images/footer/checkbox_checked.png')");
        $('#subscribe_button').prop('disabled', false);
    });
    
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
        $.ajax({
            url: "/service/wim/subscribe.php",
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
            
            // Новый сайт
            // Делаем форму прозрачной
            $("#form_subscribe").animate({
                   opacity: '0'
                }, { duration: hideDuration, queue: false });
                
           
            // Скрываем форму
            $("#form_subscribe").delay(hideDuration).hide();
            

            $("#form_subscribe_feedback").delay(2*hideDuration).show();
            return true;

        },
        error: function(){
            // ToDo - отправка ошибки на почту администратора
            alert('Данные не могут быть отправлены');
        }

    });
}