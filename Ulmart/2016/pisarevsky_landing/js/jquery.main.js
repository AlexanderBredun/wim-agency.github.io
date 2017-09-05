$(document).ready(function() {
    $( "#email-form" ).validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            agree: {
                required: true
            }
        },
        messages:{
            email:{
                required: "Введите ваш e-mail",
                email: "Введён некорректный e-mail"
            },
            agree:{
                required: "Согласитесь с правилами акции"
            }
        },submitHandler: function() {
            $('.popup-box').show( );

        }
    });

    $(".popup-box").click(function(e) {
        if ($(e.target).closest(".popup").length==0)  $(".popup-box").css("display","none");
    });
    $(".btn-close").click(function() {
        $(".popup-box").css("display","none");
        return false;
    });

   $('#email-form').submit(function (e) {
        var form = this;
        e.preventDefault();
       if (!$('#email-form input').hasClass('error')) {
           setTimeout(function () {
               form.submit();
           }, 5000);
       }
    });
});
