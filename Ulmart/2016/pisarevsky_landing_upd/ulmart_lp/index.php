<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>ЮЛМАРТ ПИСКАРЁВСКИЙ ОТКРЫЛСЯ</title>
  <meta name="description" content="">

  <link href="css/style.css" media="screen, projection" rel="stylesheet" type="text/css" />
  
  <script type="text/javascript" src="js/jquery-1.12.0.min.js"></script>
  <script type="text/javascript" src="js/modernizr-2.8.3.custom.js"></script>
  <script type="text/javascript" src="js/jquery.validate.js"></script>
    <script src="https://yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
    <script src="https://yastatic.net/share2/share.js" async="async"></script>
    <script type="text/javascript" src="js/jquery.main.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.js"> </script>

    


    <!--
    <meta property="og:image" content="https://dl.dropboxusercontent.com/u/75139086/1WORK/emarsys/Ulmart/pisarevsky_landing/images/sharing-img.jpg" />
    <meta property="og:title" content="" />
    <meta property="og:description" content="" />
    -->
</head>
<body>
  <div class="wrapper">
      <header id="header">
          <div class="box-wrapper">
              <strong class="logo"><a href="http://www.ulmart.ru/" target="_blank"><img src="images/logo.png" alt=""></a></strong>
              <h1>ЮЛМАРТ ПИСКАРЁВСКИЙ ОТКРЫЛСЯ</h1>
          </div>
      </header><!-- #header -->
      <section class="prormo-box">
          <div class="box-wrapper">
              <h2>Помоги собрать друзей и получи подарок!</h2>
              <div class="present-box">
                  <img class="decor01" src="images/img-decor-01.png" alt="">
                  <ul>
                      <li>
                          <h3>КУПОНЫ <br>НА СКИДКУ</h3>
                      </li>
                      <li>
                          <h3>СЕРТИФИКАТ <br>НА <strong>5 000</strong> РУБЛЕЙ</h3>
                          <span>на покупки в Юлмарте</span>
                      </li>
                  </ul>
                  <img class="decor02" src="images/img-decor-02.png" alt="">
              </div><!-- .present-box -->
              <div class="box-holder">
                  <div class="decor-blue-box">
                      <p>Укажи свой e-mail для получения информации о подарке*.</p>
                      <img class="decor03" src="images/img-decor-03.png" alt="">
                  </div>
              </div><!-- .box-holder -->
              <form id="email-form" action="<?php echo $_SERVER['PHP_SELF'];?>" name="flashsale" >
                  <fieldset>
                      <div class="form-row">
                          <input class="text-input" name="email" required="required" type="text" placeholder="Ввести e-mail здесь..." >
                          <input id="pool-item5-text" class="pink-btn" type="submit" value="Отправить">
                      </div>
                      <div class="form-row">
                          <input type="checkbox" checked id="rules-agree">
                          <label for="pool-item1" id="pool-item1-label" class="text-small" >Я согласен с Правилами акции и с получением <br>рекламно-информационных рассылок с сайта ulmart.ru</label>
                      </div>
                  </fieldset>
              </form><!-- #email-form -->
              <div class="box-holder">
                  <div class="decor-blue-box">
                      <p>Сделай репост в любой соцсети, <br>где тебе удобно.</p>
                      <img class="decor03" src="images/img-decor-03.png" alt="">
                  </div>
              </div><!-- .box-holder -->
              <div class="social-box-holder">
                  <div id="my-share" class="ya-share2" data-services="vkontakte,facebook,odnoklassniki,moimir,gplus,twitter" data-image="https://dl.dropboxusercontent.com/u/75139086/1WORK/email_work/ivi/email72_tvod/index.html"></div>
                  <ul class="social-network-list">
                      <li>
                          <a href="http://instagram.com/iloveulmart?utm_source=instagram" target="_blank" class="ico-social ico-inst">&nbsp;</a>
                      </li>
                      <li>
                          <a href="http://www.youtube.com/user/ulmartofficial?utm_source=youtube" target="_blank" class="ico-social ico-yt">&nbsp;</a>
                      </li>
                      <li>
                          <a href="https://ru.foursquare.com/ulmart_ru?utm_source=foursquare" target="_blank" class="ico-social ico-f">&nbsp;</a>
                      </li>
                  </ul>
              </div><!-- .social-box-holder -->
              <a class="wide-btn pink-btn" href="http://www.ulmart.ru/">
                  <strong>ГОТОВО!</strong>
                  <br>вернуться к выбору покупок!
              </a>
          </div>
      </section><!-- .promo-box -->
      <footer id="footer">
          <div class="box-wrapper">
              <span class="text-small">*Право на получение подарка в рамках акции не возникает в случае, если указанный e-mail адрес был ранее отписан от получения рекламно-информационных рассылок с сайта ulmart.ru</span>
          </div>
      </footer><!-- #footer -->
      <div class="popup-box">
          <div class="popup">
              <a href="#" class="btn-close" title="Закрыть">Х</a>
              <div class="popup-holder">
                  <div class="blue-box-small">
                      <p>СПАСИБО! <img src="images/ico-smile.png" height="19" width="19" alt=":)"></p>
                  </div>
                  <div class="decor-blue-box">
                      <p>Вам на почту <br>направлено информационное
                          <br>письмо с условиями акции.</p>
                      <img class="decor03" src="images/img-decor-03.png" alt="">
                  </div>
                  <span class="text-small">Доставлено</span>
                  <span class="divider">&nbsp;</span>
                  <span class="text-small">*Для участия в акции необходимо <br>быть подписанным на рассылку Юлмарта.</span>
              </div>
          </div><!-- .popup -->
      </div><!-- .popup-box -->
  </div>
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