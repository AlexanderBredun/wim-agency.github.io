$(document).ready(function(){
	function initLightbox() {
		jQuery('a[rel*="lightbox"], a.lightbox').fancybox({
			padding: 10,
			cyclic: false,
			overlayShow: true,
			overlayOpacity: 0.5,
			overlayColor: '#000',
			titlePosition: 'inside'
		});
	};
			
	
	
	function scrollingTo(id){
		$('html,body').animate({scrollTop: ($(id).offset().top - 70)},  1400, 'easeOutBack');
	}
	
	$('a[rel="slideto"]').live('click', function() {
		var target = $(this).attr('href');
		scrollingTo(target);
		return false
	});
	$('.arrow-up').hide();
	$(window).scroll(function () {
		 if ($(this).scrollTop() > 450) {
		 $('.arrow-up').fadeIn();
		 } else {
		 $('.arrow-up').fadeOut();
		 }
	 });
	 $('.arrow-up, .logo a').click(function () {
		 $("html, body").animate({
		 scrollTop: 0 }, 700);
		 return false;
	 });
	
});