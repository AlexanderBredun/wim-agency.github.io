/* Общие для WIM функции и события */

$(document).ready(function() {
    
   var lead_form_id = '#formHeader';

   $('.btn_goto-lead-form').click(function() {
       scrollToElement(lead_form_id, 1000);
   });
   
    var min_top = $('.banner_right').css('top');
    var pos = $('#formHeader').offset().top - $('#side_banner_1').outerHeight();

    $('#side_banner_1').followTo(pos, min_top);
});