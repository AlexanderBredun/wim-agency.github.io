


<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Ulmart newsletter subscription</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <link href="css/style.css" media="screen, projection" rel="stylesheet" type="text/css" />
    <script   src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.js"> </script>

    <script>
        function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);


        }


        function checkbox_check() {


            var x = document.forms["flashsale"]["email"].value;
            var y = $("#pool-item5-text").val();
            var w = validateEmail(y);


            if (w == false) {

                alert("Email неверно заполнен");
                return false

            }


                if (x == null || x == "") {
                    alert("Вы должны указать верный Email адрес");
                    top.location = 'http://senshi.webfactional.com/ulmart/flash_sale/flash_sale.php' ;

                    return false
                } else if ($("#pool-item1").is(":checked") == false) {


                    alert("Вы должны согласиться с условиями акции для продолжения")
//                    top.location = 'http://senshi.webfactional.com/ulmart/flash_sale/flash_sale.php';
                    return false
                }


            return true


        }
    </script>

        </head>
        <body>
        <!--[if lt IE 7]><p class=chromeframe>Ваш браузер <em>устарел!</em> <a href="http://browsehappy.com/">Обновите ваш браузер</a> or <a href="http://www.google.com/chromeframe/?redirect=true">установить Google Chrome Frame</a>.</p><![endif]-->
            <div class="wrapper">
        <header id="header">
        <h1 class="logo"><a href="http://www.ulmart.ru/">ULMART.RU</a></h1>
        </header><!-- .header-->
        <div class="content-section">


        <p> Учавствуйте в нашей акции !  </p>
        <form action="<?php echo $_SERVER['PHP_SELF'];?>" name="flashsale" onsubmit="return checkbox_check()">
        <fieldset>


            <div class="row">

                <label for="pool-item5" id="pool-item5-label">Введите Email</label>
                <input type="text" class="top-negative-margin" id="pool-item5-text" name="email">
            </div>
        <div class="row">
        <input type="checkbox" id="pool-item1">
        <label for="pool-item1" id="pool-item1-label"> Я согласен получать рассылку по данной и другим акциям</label>
        </div>

        <div class="row">
        <input class="red-btn" type="submit" value="Подтвердить участие">

        </div>
        </fieldset>
        </form>
        </div><!-- .form-section -->
        </div><!-- .wrapper -->


<?php

require 'EMSAPI.class.php';
if (isset($_GET['email'])){


    $ems_api = new EMSAPI();

    $em = $_GET['email'];
    $method = 'PUT';
    $data = array("3" => $em,"30316" => "true","31" => "1");
//echo $unsub_reason;
    $response = $ems_api->query("contact/?create_if_not_exists=1",$data,$method);
    echo "<script>document.getElementsByClassName('content-section')[0].innerHTML = '<p>Вы успешно подписались на акцию</p>';</script>";
	$file = 'log.log';
	$log_line = date('Y-m-d h:m:s').",".$em;
	file_put_contents($file, $log_line, FILE_APPEND | LOCK_EX);
	
	$new_json = array("key_id" => "3","external_id" => $em, "data" =>"");
	
	$response = $ems_api->query("event/4168/trigger",$new_json,"POST");


	


} ?>

</body>

</html>




