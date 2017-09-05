

<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Ulmart newsletter subscription</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <link href="css/style.css" media="screen, projection" rel="stylesheet" type="text/css" />
</head>
<body>
<!--[if lt IE 7]><p class=chromeframe>Ваш браузер <em>устарел!</em> <a href="http://browsehappy.com/">Обновите ваш браузер</a> or <a href="http://www.google.com/chromeframe/?redirect=true">установить Google Chrome Frame</a>.</p><![endif]-->
<div class="wrapper">
    <header id="header">
        <h1 class="logo"><a href="http://www.ulmart.ru/">ULMART.RU</a></h1>
    </header><!-- .header-->
    <div class="content-section">
        <h2>Спасибо за ваш ответ!</h2>
        <a href="#" class="red-btn">Перейти на сайт</a>
    </div><!-- .form-section -->
</div><!-- .wrapper -->
<script>

    function redirect(){

        window.location = 'http://ulmart.ru';
    }

    setTimeout(redirect(),2500);
</script>
</body>
</html>

<?php
require 'EMSAPI.class.php';
$ems_api = new EMSAPI();
$em = base64_decode($_COOKIE['em']);
$unsub_reason = $_COOKIE['unsub_reason'];
$method = 'PUT';
$data = array("3" => $em,"21345" => $unsub_reason);
//echo $unsub_reason;
$response = $ems_api->query("contact",$data,$method);



//setcookie ("unsub_reason", "");

?>