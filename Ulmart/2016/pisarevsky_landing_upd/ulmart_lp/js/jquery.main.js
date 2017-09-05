$(document).ready(function() {
    $( "#email-form" ).validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        messages:{
            email:{
                required: "Введите ваш e-mail",
                email: "Введён некорректный e-mail"
            }
        },submitHandler: function() {
            $('.popup-box').show();
        }
       /* success: function(){
            $('.popup-box').show();
        }*/
    });

    $(".popup-box").click(function(e) {
        if ($(e.target).closest(".popup").length==0)  $(".popup-box").css("display","none");
    });
    $(".btn-close").click(function() {
        $(".popup-box").css("display","none");
        return false;
    });

    /*Ya.share2('my-share', {
            content: {
                //url: 'https://yandex.com',
                //title: 'Yandex',
                //description: 'Its all about Yandex',
                image: 'https://dl.dropboxusercontent.com/u/75139086/1WORK/emarsys/Ulmart/pisarevsky_landing/images/sharing-img.jpg'
    }
    });*/
});