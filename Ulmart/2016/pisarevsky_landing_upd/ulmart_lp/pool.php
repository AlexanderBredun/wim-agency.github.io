
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
/*
         ╔╦╗  ╦  ╔═╗  ╦ ╦  ╦
         ║║║  ║  ║    ╠═╣  ║
         ╩ ╩  ╩  ╚═╝  ╩ ╩  ╩
         ╔═╗╦ ╦╔╗ ╔═╗╦═╗╦╔╗ ╔═╗  ╔╦╗╔═╗╔═╗╦
         ╚═╗║ ║╠╩╗║  ╠╦╝║╠╩╗║╣    ║ ║ ║║ ║║
         ╚═╝╚═╝╚═╝╚═╝╩╚═╩╚═╝╚═╝   ╩ ╚═╝╚═╝╩═╝
         */
        var params = {};

        if (location.search) {
            var parts = location.search.substring(1).split('&');

            for (var i = 0; i < parts.length; i++) {
                var nv = parts[i].split('=');
                if (!nv[0]) continue;
                params[nv[0]] = nv[1] || true;
            }
        }
        var now = new Date();

        em = params.em;


      //  current_date =  now.format("yyyy-m-d");
        secret = params.secret;

        function getCookie(name) {
            var matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        }

//
//        document.cookie = "em=" + btoa(decodeURIComponent(em)) ;
//
//        document.cookie = "secret=" + btoa(params.secret);
//

        function unsub(){

            window.location = 'pool_uni.html'


        }


        function redirect(){

            top.location = 'ready_subscribe_uni.html';
        }

//        if (params.again_with_us = "true") {
//
//
//            redirect();
//        }
        if (params.news && params.business && params.discount && params.labels && params.personal && params.sindbad == "on") {

            redirect();

        }

//        if (params.again_with_us = 'true'){
//            redirect();
//        }

    </script>
</head>
<body>
<!--[if lt IE 7]><p class=chromeframe>Ваш браузер <em>устарел!</em> <a href="http://browsehappy.com/">Обновите ваш браузер</a> or <a href="http://www.google.com/chromeframe/?redirect=true">установить Google Chrome Frame</a>.</p><![endif]-->
<div class="wrapper">
    <header id="header">
        <h1 class="logo"><a href="http://www.ulmart.ru/">ULMART.RU</a></h1>
    </header><!-- .header-->
    <div class="content-section">
        <h2>Готово!</h2>
        <p id="subscr_type">
           Вы отписались от рассылки:
</p> <br>
          <p> Мы будем по вам скучать :(</p>

        <p>Помогите нам сделать рассылки более полезными: расскажите, почему вы отписываетесь.</p>
        <form action="answer_thanks.php" onsubmit="pool_submit();">
            <fieldset>
                <div class="row">
                    <input type="checkbox" id="pool-item1">
                    <label for="pool-item1" id="pool-item1-label">Рассылки Юлмарта приходят слишком часто.</label>
                </div>
                <div class="row">
                    <input type="checkbox" id="pool-item2">
                    <label for="pool-item2" id="pool-item2-label">Информация часто повторяется и со временем надоедает.</label>
                </div>
                <div class="row">
                    <input type="checkbox" id="pool-item3">
                    <label for="pool-item3" id="pool-item3-label">Я получаю слишком много рассылок, мне приходится отписываться от чего-то.</label>
                </div>
                <div class="row">
                    <input type="checkbox" id="pool-item4">
                    <label for="pool-item4" id="pool-item4-label">Я подписался для того, чтобы стать участником специальной акции.</label>
                </div>
                <div class="row">
                    <input type="checkbox" id="pool-item5">
                    <label for="pool-item5" id="pool-item5-label">Другое</label>
                    <input type="text" class="top-negative-margin" id="pool-item5-text">
                </div>
                <div class="row">
                    <input class="red-btn" type="submit" value="Отправить ответ">
                    <a class="btn"  onclick="pool_submit()" href="again_with_us.php">Подписаться снова</a>
                </div>
            </fieldset>
        </form>
    </div><!-- .form-section -->
</div><!-- .wrapper -->


<script>
    unsub_reason ="";
    function pool_submit(){
        if ($("#pool-item1").is(":checked") == true){
            unsub_reason+= decodeURIComponent($("#pool-item1-label").text() + "|")

        }
        if ($("#pool-item2").is(":checked") == true) {
            unsub_reason+=decodeURIComponent($("#pool-item2-label").text() + "|")

        }
        if ($("#pool-item3").is(":checked") == true) {
            unsub_reason+=  decodeURIComponent($("#pool-item3-label").text() + "|")

        }
        if ($("#pool-item4").is(":checked") == true) {
            unsub_reason+= decodeURIComponent($("#pool-item4-label").text() + "|")

        }
        if ($("#pool-item5").is(":checked") == true) {
            unsub_reason+= decodeURIComponent($("#pool-item5-text").val() + "|")

        }

        document.cookie = "unsub_reason=" + unsub_reason;
    }


</script>

<?php
require "EMSAPI.class.php";
$em = base64_decode($_COOKIE['em']);
$data = array("keyId" => "3", "3" => $em);
if (isset($_GET['news'])){

    $data["21334"]="true";

}
else {

    $data["21334"]="false";
    echo "<script>$('#subscr_type').append('<p><strong>Юлмарт</strong> &mdash; новости, акции и скидки</p>');</script>";
}
if (isset($_GET['business'])){

    $data["21335"]="true";

}
else {

    $data["21335"]="false";
    echo "<script>$('#subscr_type').append('<p><strong>Юлмарт Business</strong> &mdash; товары для бизнеса</p>');</script>";
}
if (isset($_GET['discount'])){

    $data["21336"]="true";

}
else {

    $data["21336"]="false";
    echo "<script>$('#subscr_type').append('<p><strong>Юлмарт Discount</strong> &mdash; уценённые товары</p>');</script>";
}
if (isset($_GET['personal'])){

    $data["21337"]="true";

}
else {

    $data["21337"]="false";
    echo "<script>$('#subscr_type').append('<p><strong>Ваши персональные предложения</strong></p>');</script>";
}
if (isset($_GET['sindbad'])){

    $data["21338"]="true";

}
else {

    $data["21338"]="false";
    echo "<script>$('#subscr_type').append('<p><strong>Sindbad.Ulmart</strong> &mdash; авиабилеты и путешествия</p>');</script>";
}
if (isset($_GET['labels'])){

    $data["21339"]="true";

}
else {

    $data["21339"]="false";
    echo "<script>$('#subscr_type').append('<p> <strong>TheLabels</strong> &mdash; аутлет одежды</p>');</script>";
}if (isset($_GET['wishni'])){

    $data["26257"]="true";

}
else {

    $data["26257"]="false";
    echo "<script>$('#subscr_type').append('<p><strong>Wishni</strong> &mdash; Индивидуальные купоны, закрытые распродажи, конкурсы, информация о программе скидок</p>');</script>";
}if (isset($_GET['slivy'])){

    $data["26210"]="true";

}
else {

    $data["26210"]="false";
    echo "<script>$('#subscr_type').append('<p><strong>Slivy</strong> &mdash; стоковое пространство</p>');</script>";
}
//print_r($data);


$ems_api = new EMSAPI();
//echo count($data);
$v = $ems_api->query("contact",$data,"PUT");

echo "<script>function change_ending(){
re = /<p>/g;
mn = document.getElementById('subscr_type').innerHTML;
if (mn.match(re).length>1){
var greplace = /рассылки/;
document.getElementById('subscr_type').innerHTML =  mn.replace(greplace,\"расcылок\");

}


};

change_ending();

</script>;";
//echo "<pre>";
//print_r($v);
//echo "</pre>";
?>
</body>
</html>