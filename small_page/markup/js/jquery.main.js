$(document).ready(function(){	
	$("form").each(function(){
		$(this).validate({
			rules:{
			    telephone:{
					number: true,
			        //required: true,
			        minlength: 5,
			    },
			    email:{
					email:true,
			       // required: true,
			        minlength: 5,
			    },
			},
			messages:{
				telephone:{
					number: "Введён некорректный телефон",
					// required: "Это поле обязательно для заполнения",
					minlength: "Телефон должен быть минимум 5 символов",
				},
				email:{
					email: "Введён некорректный email",
					// required: "Это поле обязательно для заполнения",
					minlength: "email должен быть минимум 5 символов",
				},
			}
		});
	});
	
	function hidePopup() {$('a.hide-popup-link').click();}
	/*
$(window).click(function() {
		hidePopup();
	})
*/
	$("form .submit").click(function() {
		var valTelephone = $(this).closest('form').find("input[name='telephone']").val();
		var valEmail = $(this).closest('form').find("input[name='email']").val();
		if ((valTelephone == "") && (valEmail == "")) {
		alert('Заполните пожалуйста либо поле "Телефон" либо "Email"');
		return false;
	  }
	});
});

function changeFooterBg() {
	if ($('.text').is('.error')) {
		$('#footer').css('background-color','#dde1e5');
	}
	else  {
		$('#footer').css('background-color','#edeff1');
	}
}

$('#footer form input').blur(function() {
	changeFooterBg();
});

/*
$('#footer form .text').blur(function() {
	if ($(this).hasClass('error')) {
		$('#footer').css('background-color','#dde1e5');
	}
	else if ($(this).hasClass('valid')) {
		$('#footer').css('background-color','#edeff1');
	}
});
*/




//jQuery.noConflict();
jQuery(function(){
	initPopups();
});

// popups function
function initPopups() {
	var _zIndex = 1000;
	var _fadeSpeed = 350;
	var _faderOpacity = 0.25;
	var _faderBackground = '#6d7c80';
	var _faderId = 'lightbox-overlay';
	var _closeLink = 'a.close-link, a.ok-close, a.cancel';
	var _fader;
	var _lightbox = null;
	var _ajaxClass = 'ajax-load';
	var _openers = jQuery('a.open-popup');
	var _page = jQuery(document);
	var _minWidth = parseInt(jQuery('body').css('minWidth'));
	var _scroll = false;

	// init popup fader
	_fader = jQuery('#'+_faderId);
	if(!_fader.length) {
		_fader = jQuery('<div />');
		_fader.attr('id',_faderId);
		jQuery('body').append(_fader);
	}
	_fader.css({
		opacity:_faderOpacity,
		backgroundColor:_faderBackground,
		position:'absolute',
		overflow:'hidden',
		display:'none',
		top:0,
		left:0,
		zIndex:_zIndex
	});

	// IE6 iframe fix
	if(jQuery.browser.msie && jQuery.browser.version < 7) {
		if(!_fader.children().length) {
			var _frame = jQuery('<iframe src="javascript:false" frameborder="0" scrolling="no" />');
			_frame.css({
				opacity:0,
				width:'100%',
				height:'100%'
			});
			var _frameOverlay = jQuery('<div>');
			_frameOverlay.css({
				top:0,
				left:0,
				zIndex:1,
				opacity:0,
				background:'#000',
				position:'absolute',
				width:'100%',
				height:'100%'
			});
			_fader.empty().append(_frame).append(_frameOverlay);
		}
	}

	// lightbox positioning function
	function positionLightbox() {
		if(_lightbox) {
			var _windowHeight = jQuery(window).height();
			var _windowWidth = jQuery(window).width();
			var _lightboxWidth = _lightbox.outerWidth();
			var _lightboxHeight = _lightbox.outerHeight();
			var _pageHeight = _page.height();

			if (_windowWidth < _minWidth) _fader.css('width',_minWidth);
				else _fader.css('width','100%');
			if (_windowHeight < _pageHeight) _fader.css('height',_pageHeight);
				else _fader.css('height',_windowHeight);

			_lightbox.css({
				position:'absolute',
				zIndex:(_zIndex+1)
			});

			// vertical position
			if (_windowHeight > _lightboxHeight) {
				if (jQuery.browser.msie && jQuery.browser.version < 7) {
					_lightbox.css({
						position:'absolute',
						top: parseInt(jQuery(window).scrollTop()) + (_windowHeight - _lightboxHeight) / 2
					});
				} else {
					_lightbox.css({
						position:'fixed',
						top: (_windowHeight - _lightboxHeight) / 2
					});
					if(_windowWidth < _minWidth) {
						_lightbox.css({
							position:'absolute'
						});
					}
				}
			} else {
				var _faderHeight = _fader.height();
				if(_faderHeight < _lightboxHeight) _fader.css('height',_lightboxHeight);
				if (!_scroll) {
					if (_faderHeight - _lightboxHeight > parseInt(jQuery(window).scrollTop())) {
						_faderHeight = parseInt(jQuery(window).scrollTop())
						_scroll = _faderHeight;
					} else {
						_scroll = _faderHeight - _lightboxHeight;
					}
				}
				_lightbox.css({
					position:'absolute',
					top: _scroll
				});
			}

			// horizontal position
			if (_fader.width() > _lightbox.outerWidth()) _lightbox.css({left:(_fader.width() - _lightbox.outerWidth()) / 2});
			else _lightbox.css({left: 0});
		}
	}

	// show/hide lightbox
	function toggleState(_state) {
		if(!_lightbox) return;
		if(_state) {
			_fader.fadeIn(_fadeSpeed,function(){
				_lightbox.fadeIn(_fadeSpeed);
			});
			_scroll = false;
			positionLightbox();
		} else {
			_lightbox.fadeOut(_fadeSpeed,function(){
				_fader.fadeOut(_fadeSpeed);
				_scroll = false;
			});
		}
	}

	// popup actions
	function initPopupActions(_obj) {
		if(!_obj.get(0).jsInit) {
			_obj.get(0).jsInit = true;
			// close link
			_obj.find(_closeLink).click(function(){
				_lightbox = _obj;
				toggleState(false);
				return false;
			});
		}
	}

	// lightbox openers
	_openers.each(function(){
		var _opener = jQuery(this);
		var _target = _opener.attr('href');

		// popup load type - ajax or static
		if(_opener.hasClass(_ajaxClass)) {
			_opener.click(function(){
				// ajax load
				if(jQuery('div[rel*="'+_target+'"]').length == 0) {
					jQuery.ajax({
						url: _target,
						type: "POST",
						dataType: "html",
						success: function(msg){
							// append loaded popup
							_lightbox = jQuery(msg);
							_lightbox.find('img').load(positionLightbox)
							_lightbox.attr('rel',_target).hide().css({
								position:'absolute',
								zIndex:(_zIndex+1),
								top: -9999,
								left: -9999
							});
							jQuery('body').append(_lightbox);

							// init js for lightbox
							initPopupActions(_lightbox);

							// show lightbox
							toggleState(true);
						},
						error: function(msg){
							alert('AJAX error!');
							return false;
						}
					});
				} else {
					_lightbox = jQuery('div[rel*="'+_target+'"]');
					toggleState(true);
				}
				return false;
			});
		} else {
			if(jQuery(_target).length) {
				// init actions for popup
				var _popup = jQuery(_target);
				initPopupActions(_popup);
					// open popup
					_opener.click(function(){
					if(_lightbox) {
						_lightbox.fadeOut(_fadeSpeed,function(){
							_lightbox = _popup.hide();
							toggleState(true);
						})
					} else {
						_lightbox = _popup.hide();
						toggleState(true);
					}
					return false;
				});
			}
		}
	});

	// event handlers
	var isTouchDevice = (function(){
		try {
			document.createEvent("TouchEvent");
			return true;
		} catch (e) {
			return false;
		}
	}());
	jQuery(window).resize(positionLightbox);
	if(!isTouchDevice) {
		jQuery(window).scroll(positionLightbox);
	}
	jQuery(document).keydown(function (e) {
		if (!e) evt = window.event;
		if (e.keyCode == 27) {
			toggleState(false);
		}
	})
	_fader.click(function(){
		if(!_fader.is(':animated')) toggleState(false);
		return false;
	})
}

// mobile browsers detect
browserPlatform = {
	platforms: [
		{ uaString:['symbian','midp'], cssFile:'symbian.css' }, // Symbian phones
		{ uaString:['opera','mobi'], cssFile:'opera.css' }, // Opera Mobile
		{ uaString:['msie','ppc'], cssFile:'ieppc.css' }, // IE Mobile <6
		{ uaString:'iemobile', cssFile:'iemobile.css' }, // IE Mobile 6+
		{ uaString:'webos', cssFile:'webos.css' }, // Palm WebOS
		{ uaString:'Android', cssFile:'android.css' }, // Android
		{ uaString:['BlackBerry','/6.0','mobi'], cssFile:'blackberry6.css' },	// Blackberry 6
		{ uaString:['BlackBerry','/7.0','mobi'], cssFile:'blackberry7.css' },	// Blackberry 7+
		{ uaString:'ipad', cssFile:'ipad.css' }, // iPad
		{ uaString:['safari','mobi'], cssFile:'safari.css' } // iPhone and other webkit browsers
	],
	options: {
		cssPath:'css/',
		mobileCSS:'allmobile.css'
	},
	init:function(){
		this.checkMobile();
		this.parsePlatforms();
		return this;
	},
	checkMobile: function() {
		if(this.uaMatch('mobi') || this.uaMatch('midp') || this.uaMatch('ppc') || this.uaMatch('webos')) {
			this.attachStyles({cssFile:this.options.mobileCSS});
		}
	},
	parsePlatforms: function() {
		for(var i = 0; i < this.platforms.length; i++) {
			if(typeof this.platforms[i].uaString === 'string') {
				if(this.uaMatch(this.platforms[i].uaString)) {
					this.attachStyles(this.platforms[i]);
					break;
				}
			} else {
				for(var j = 0, allMatch = true; j < this.platforms[i].uaString.length; j++) {
					if(!this.uaMatch(this.platforms[i].uaString[j])) {
						allMatch = false;
					}
				}
				if(allMatch) {
					this.attachStyles(this.platforms[i]);
					break;
				}
			}
		}
	},
	attachStyles: function(platform) {
		var head = document.getElementsByTagName('head')[0], fragment;
		var cssText = '<link rel="stylesheet" href="' + this.options.cssPath + platform.cssFile + '" type="text/css"/>';
		var miscText = platform.miscHead;
		if(platform.cssFile) {
			if(document.body) {
				fragment = document.createElement('div');
				fragment.innerHTML = cssText;
				head.appendChild(fragment.childNodes[0]);
			} else {
				document.write(cssText);
			}
		}
		if(platform.miscHead) {
			if(document.body) {
				fragment = document.createElement('div');
				fragment.innerHTML = miscText;
				head.appendChild(fragment.childNodes[0]);
			} else {
				document.write(miscText);
			}
		}
	},
	uaMatch:function(str) {
		if(!this.ua) {
			this.ua = navigator.userAgent.toLowerCase();
		}
		return this.ua.indexOf(str.toLowerCase()) != -1;
	}
}.init();