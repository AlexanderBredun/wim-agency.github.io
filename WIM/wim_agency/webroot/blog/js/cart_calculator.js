/* Считаем прибыль, полученную от брошенных корзин */
$(document).ready(function(){
   
    
   var type = window.location.search.replace('?','');
   
   var scroll_to_calc_margin = 50;
   
   if (type) {
       setTimeout(function(){
           scrollToElement('#' + type, 1000, scroll_to_calc_margin);
       }, 1000);
   }
    
     
   $('.indicator').on('keyup',function(){
           calculatePossibleIncome();
   });
   
    $('#scroll_to_calc').click(function(e){
       e.preventDefault();
       
       scrollToElement( $(this).attr('href'), 1000, scroll_to_calc_margin);
   });
   
   
   calculatePossibleIncome();
   

    function calculatePossibleIncome() {
        var return_amount = calculateAbandonedCartIncome();
        
        for (var i = 1; i<=3; i++) {
            var returned_orders = $('#returned_orders_' + i).text().replace('%', '') / 100;
            
            var return_year =  Math.round(return_amount * returned_orders * 365);
            var return_month = Math.round(return_amount * returned_orders * 30);
                    
            $('#return_year_' + i).text(formatAsRoundCurrency(return_year));
            $('#return_month_' + i).text(formatAsRoundCurrency(return_month));
        }
    }
    

    function calculateAbandonedCartIncome() {
        var $orders_per_day = $('#orders_per_day');
        var orders_per_day = $orders_per_day.val() ? $orders_per_day.val() : $orders_per_day.attr('placeholder');

        var $avg_bill = $('#avg_bill');
        var avg_bill = $avg_bill.val() ? $avg_bill.val() : $avg_bill.attr('placeholder');
        avg_bill = avg_bill.replace('Р', '');

        var $ab_cart_percentage = $('#ab_cart_percentage');
        var ab_cart_percentage = $ab_cart_percentage.val() ? $ab_cart_percentage.val() : $ab_cart_percentage.attr('placeholder');
        ab_cart_percentage = ab_cart_percentage.replace('%', '');

        return orders_per_day * avg_bill * ab_cart_percentage / 100;
    }
    
});



