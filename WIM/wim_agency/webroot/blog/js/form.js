// Прокрутка страницы вниз
function scrollBottom() {
	$('html, body').animate({scrollTop:$(document).height()}, 2000);
    return false;
}

function setBorder(elements, color) {

	if (!(elements instanceof Array)) {
		var elements = [elements];
	}

	for (var i in elements) {
		if (color == 'none') {
			elements[i].css('border', 'none');
		} else {
			elements[i].css({"border-color": color, 
	         "border-width":"2px", 
	         "border-style":"solid"}).show('show');
		}
	}
}
// Проверяем, правильно ли заполнена форма
function validateFields() {

	// ToDo - брать все поля из формы с помощью функции
	var inputElementsToValidate = [
		$('input[name=company]'),
		$('input[name=fio]'),
		$('input[name=phone]'),
		$('input[name=site]'),
		$('input[name=phone]'),
		$('input[name=email]')
	];	


	var errorColor = "rgb(255, 95, 95)";
	

	// Возвращаем форму к исходному состоянию
	setBorder(inputElementsToValidate, 'none');
	$("#messages").hide();
	$("#messages").css('color', errorColor); // По умолчанию выводятся сообщения об ошибках

	// Осуществляем проверки
	var someEmpty = false;
	for (var i in inputElementsToValidate) {
		if (inputElementsToValidate[i].val().length < 1) {
			setBorder(inputElementsToValidate[i], errorColor);
			someEmpty = true;
		}
	}

	if (someEmpty) {
		$("#messages").text("Пожалуйста, заполните все обязательные поля").fadeIn("slow");
		return false;
	}

	// Валидация мыла
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
	var email = $('input[name=email]').val();
	if(!re.test(email)) {
		$("#messages").text("Проверьте, пожалуйста, правильность e-mail").fadeIn('slow');
		setBorder($('input[name=email]'), errorColor);	
		return false;
	}

	re = /[^0-9]/;
	var phone = $('input[name=phone]');
	if(re.test(phone.val())) {
		$("#messages").text("Проверьте, пожалуйста, правильность телефона (допускаются только цифры)").fadeIn('slow');
		setBorder(phone, errorColor);	
		return false;
	}

	var respose = sendAjax();
}

function sendAjax() {

        $.ajax({
            url: "/service/wim/send.php",
        
        type: "POST",
        data: {
                company: $('input[name=company]').val(),
                fio: $('input[name=fio]').val(),
                phone: $('input[name=phone]').val(),
                site: $('input[name=site]').val(),
                email: $('input[name=email]').val(),
        },
        dataType: "JSON",
        success: function (jsonStr) {
            
            
            if (JSON.parse(jsonStr) == null) {
                // ToDo - отправка ошибки на почту администратора
                alert('Данные не могут быть отправлены');
                return false;
            }

    var hideDuration = 800;

    // Делаем форму прозрачной
    $("#orderForm").animate({
           opacity: '0'
        }, { duration: hideDuration, queue: false });

    // Делаем заголовки прозрачными
    $("#formHeader").animate({
           opacity: '0'
    }, { duration: hideDuration, queue: false });

    // Скрываем форму
    $("#orderForm").delay(hideDuration).hide(1000);

    $("#formHeader").delay(hideDuration).hide(1000);


    $("#orderSentResponse").delay(2*hideDuration).show(1000);
    return true;
        },
        error: function(){
            // ToDo - отправка ошибки на почту администратора
            alert('Данные не могут быть отправлены');
        }
    });

    $("#submitButton").val("Отправка...");
}
