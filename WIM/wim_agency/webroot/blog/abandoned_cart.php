<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <?
        /*
 
// Адаптивка

Этап 2:
    Хедеры
    Поведение инпутов для мелких планшетов
Этап 3:
    
    
   Отложить:
         * Впихивать константы там, где это возможно
         * Разобраться с //require_once ('defineServerSettings.php');
         * 
         * Адаптивная таблица
         * вертикальные отступы между элементами (использовать стандартные)
         * отступы главного wrapper

*/
        
            // ToDo - сделать точку входа
            //require_once ('defineServerSettings.php');
            
            DEFINE('IMAGES_BRAND_FOLDER', 'images/brand/'); // Для всех одинаково
            DEFINE('IMAGES_ARTICLE_FOLDER', 'images/Abandoned_cart/Calculator/');
           
        ?>
        
        <title> Превращайте брошенные корзины в дополнительные ПРОДАЖИ! </title>
        <link href="vendor/reset.css" rel="stylesheet">
              
        <!-- Bootstrap -->
        <link href="assets/css/bootstrap/styles.css" rel="stylesheet">
        
        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->  
    </head>
    <body>
        <header class="header-full page_header" 
                style="background-image: url('<?=IMAGES_ARTICLE_FOLDER?>Header_image.png');">
            <div class='container-fluid active
                        col-md-offset-1
                        col-xs-offset-1
                        col-md-10
                        col-xs-15 
                 '>
            <div class="row">
                <div class="

                     ">

                    <div class="
                        b-header__logo  
                         ">
                        <a href="/">
                            <img id="header_logo" src= "<?=IMAGES_BRAND_FOLDER?>Header_logo_dark.png" alt="Whatifmailing logo" 
                            class=""
                                 />
                        </a>  
                    </div>
                    <div class="site-slogan">
                        Профессиональный email-маркетинг2
                    </div>
                </div>
            </div>
                <div>
                    <div class='row header__question'>
                        <div class="
                         ">
                            <h2>
                                Сколько вам принесет рассылка </br> «брошенная корзина»?
                            </h2>                    
                        </div>
                    </div>
                    <div class='row header__link link-to-calc'>
                        <div class="
                         ">
                            <a class='h4'>
                                <a id="scroll_to_calc" class = "text-underline semibold" href="#calculator">РАССЧИТАТЬ ПРИБЫЛЬ</a> 
                            </a>
                        </div>
                    </div>
                    
                    <div class='row header__link link-to-article'>
                        <div class="
                         ">
                            <a class='h4'>
                                <a class ="text-underline semibold " href="abandoned_cart_article">ПОДРОБНЕЕ ПРО БРОШЕННУЮ КОРЗИНУ</a>
                            </a>
                        </div>
                    </div>
            </div>
            </div>
        </header>
        
        <section>
            <div  class="container-fluid col-md-14 col-md-offset-1 text-center b-content
                 ">
                <header class="content-header">
                <div>
                    <div class='row header__question'>
                        <div class="
                         ">
                            <h2>
                                Сколько вам принесет рассылка «брошенная корзина»?
                            </h2>                    
                        </div>
                    </div>
                    <div class='row header__link link-to-calc'>
                        <div class="
                         ">
                            <a class='h4'>
                                <a id="scroll_to_calc" class = "text-underline semibold" href="#calculator">РАССЧИТАТЬ ПРИБЫЛЬ</a> 
                            </a>
                        </div>
                    </div>
                    
                    <div class='row header__link link-to-article'>
                        <div class="
                         ">
                            <a class='h4'>
                                <a class ="text-underline semibold " href="abandoned_cart_article">ПОДРОБНЕЕ ПРО БРОШЕННУЮ КОРЗИНУ</a>
                            </a>
                        </div>
                    </div>
                </div>
                    
                    <div class="row">
                        <div id="calculator" class="col-md-16 color-darker">
                            Для того, чтобы в цифрах понять выгоду внедрения «брошенная корзина», 
                            вам достаточно ввести 3 показателя своего бизнеса.
                        </div>
                    </div>
                </header>    
                <article>
                    <div class="row top-padding-sm indicators background-div_light-gray">
                        <div class="col-md-4 indicator-input">
                            <header>
                                <div class="row semibold ">
                                    Заказов в день
                                </div>
                            </header>
                            <div class="row">
                                <input type="input" class="form-control indicator bold" id="orders_per_day" placeholder="1430">
                            </div>
                        </div>
                        <div class=" col-md-offset-2 col-md-4 indicator-input">
                            <header>
                                <div class="row semibold">
                                    Средний чек заказа
                                </div>
                            </header>
                            <div class="row semibold ">
                                <input type="input" class="form-control indicator bold" id="avg_bill" placeholder="3400Р">
                            </div>
                        </div>
                        <div class=" col-md-offset-2 col-lg-offset-2 col-md-4 indicator-input">
                            <header>
                                <div class="row semibold">
                                    % брошенных корзин
                                </div>
                            </header>
                            <div class="row">
                                <input type="input" class="form-control indicator bold" id="ab_cart_percentage" placeholder="45%">
                            </div>
                        </div>
                    </div>
                    <div class="row top-padding-sm">
                        <div>
                            <!-- Хардкод -->
                            <div class="panel panel-default">
                            <div class="table-responsive">
                            <table class="table">
                                <thead>
                                  <tr>
                                    <th>% возвращенных заказов</th>
                                    <th>возврат руб/ год</th>
                                    <th>возврат руб/ месяц</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td id="returned_orders_1" class="semibold">15%</td>
                                    <td id="return_year_1"></td>
                                    <td id="return_month_1"></td>
                                  </tr>
                                  <tr>
                                    <td id="returned_orders_2" class="semibold marked-after" data-required="before">25%</td>
                                    <td id="return_year_2"></td>
                                    <td id="return_month_2"></td>
                                  </tr>
                                  <tr>
                                    <td id="returned_orders_3" class="semibold">35%</td>
                                    <td id="return_year_3"></td>
                                    <td id="return_month_3"></td>
                                  </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                            </div>
                    </div>
                    
                    <div class="row top-padding-xs">
                        <div class="text-center  font-size-larger">
                            <h4 class="semibold marked-before"> Средний результат возврата брошенных корзин - 25%.</h4>
                            <input class="btn btn-xlarge btn-default btn_goto-lead-form top-margin-xs bottom-margin-xs" type="button" value="Внедрить">
                            <a class='h3 text-center font-size-base clearfix text-underline semibold' href="abandoned_cart_article">
                                ПОДРОБНЕЕ ПРО БРОШЕННУЮ КОРЗИНУ
                            </a>
                        </div>


                    </div>
                </article>
        </div>        
        </section>
        
        <? include_once('view/layouts/Lead_form.php')?>
        <? include_once('view/layouts/Footer.php')?>
        
        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="vendor/jQuery/jquery-1.11.2.min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
        <script src="js/core.js"></script>
        <script src="js/functions.js"></script>
        <script src="js/cart_calculator.js"></script>
                
    </body>
    
</html>