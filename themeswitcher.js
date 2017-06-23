/* jQuery plugin themeswitcher
---------------------------------------------------------------------*/
(function($, undefined) {
	$.themeswitcher = { "version":"2.0.1" };
	Object.freeze($.themeswitcher);

	$.fn.themeswitcher = function(settings){
		//USER DEFINEABLE OPTIONS
		var options = jQuery.extend({
			loadTheme: null,
			initialText: 'Switch Theme',
			width: 150,
			height: 200,
			buttonPreText: 'Theme: ',
			closeOnSelect: true,
			buttonHeight: 14,
			cookieName: 'jquery-ui-theme',
			onOpen: function(){},
			onClose: function(){},
			onSelect: function(){}
		}, settings);
		
		//MARKUP
		var button = $('<a href="#" class="jquery-ui-themeswitcher-trigger"><span class="jquery-ui-themeswitcher-icon"></span><span class="jquery-ui-themeswitcher-title">'+ options.initialText +'</span></a>'),
		    ui_themes = [
			{"themeName":"Base",
			"url":"//ajax.googleapis.com/ajax/libs/jqueryui/1/themes/base/jquery-ui.css",
			"thumb":"//static.jquery.com/ui/themeroller/images/themeGallery/theme_30_smoothness.png"},
			{"themeName":"Black Tie",
			"url":"//ajax.googleapis.com/ajax/libs/jqueryui/1/themes/black-tie/jquery-ui.css",
			"thumb":"//static.jquery.com/ui/themeroller/images/themeGallery/theme_30_black_tie.png"},
			{"themeName":"Blitzer",
			"url":"//ajax.googleapis.com/ajax/libs/jqueryui/1/themes/blitzer/jquery-ui.css",
			"thumb":"//static.jquery.com/ui/themeroller/images/themeGallery/theme_30_blitzer.png"},
			{"themeName":"Cupertino",
			"url":"//ajax.googleapis.com/ajax/libs/jqueryui/1/themes/cupertino/jquery-ui.css",
			"thumb":"//static.jquery.com/ui/themeroller/images/themeGallery/theme_30_cupertino.png"},
			{"themeName":"Dark Hive",
			"url":"//ajax.googleapis.com/ajax/libs/jqueryui/1/themes/dark-hive/jquery-ui.css",
			"thumb":"//static.jquery.com/ui/themeroller/images/themeGallery/theme_30_dark_hive.png"},
			{"themeName":"Dot Luv",
			"url":"//ajax.googleapis.com/ajax/libs/jqueryui/1/themes/dot-luv/jquery-ui.css",
			"thumb":"//static.jquery.com/ui/themeroller/images/themeGallery/theme_30_dot_luv.png"},
			{"themeName":"Eggplant",
			"url":"//ajax.googleapis.com/ajax/libs/jqueryui/1/themes/eggplant/jquery-ui.css",
			"thumb":"//static.jquery.com/ui/themeroller/images/themeGallery/theme_30_eggplant.png"},
			{"themeName":"Excite Bike",
			"url":"//ajax.googleapis.com/ajax/libs/jqueryui/1/themes/excite-bike/jquery-ui.css",
			"thumb":"//static.jquery.com/ui/themeroller/images/themeGallery/theme_30_excite_bike.png"},
			{"themeName":"Flick",
			"url":"//ajax.googleapis.com/ajax/libs/jqueryui/1/themes/flick/jquery-ui.css",
			"thumb":"//static.jquery.com/ui/themeroller/images/themeGallery/theme_30_flick.png"},
			{"themeName":"Hot Sneaks",
			"url":"//ajax.googleapis.com/ajax/libs/jqueryui/1/themes/hot-sneaks/jquery-ui.css",
			"thumb":"//static.jquery.com/ui/themeroller/images/themeGallery/theme_30_hot_sneaks.png"},
			{"themeName":"Humanity",
			"url":"//ajax.googleapis.com/ajax/libs/jqueryui/1/themes/humanity/jquery-ui.css",
			"thumb":"//static.jquery.com/ui/themeroller/images/themeGallery/theme_30_humanity.png"},
			{"themeName":"Le Frog",
			"url":"//ajax.googleapis.com/ajax/libs/jqueryui/1/themes/le-frog/jquery-ui.css",
			"thumb":"//static.jquery.com/ui/themeroller/images/themeGallery/theme_30_le_frog.png"},
			{"themeName":"Mint Choc",
			"url":"//ajax.googleapis.com/ajax/libs/jqueryui/1/themes/mint-choc/jquery-ui.css",
			"thumb":"//static.jquery.com/ui/themeroller/images/themeGallery/theme_30_mint_choco.png"},
			{"themeName":"Overcast",
			"url":"//ajax.googleapis.com/ajax/libs/jqueryui/1/themes/overcast/jquery-ui.css",
			"thumb":"//static.jquery.com/ui/themeroller/images/themeGallery/theme_30_overcast.png"},
			{"themeName":"Pepper Grinder",
			"url":"//ajax.googleapis.com/ajax/libs/jqueryui/1/themes/pepper-grinder/jquery-ui.css",
			"thumb":"//static.jquery.com/ui/themeroller/images/themeGallery/theme_30_pepper_grinder.png"},
			{"themeName":"Redmond",
			"url":"//ajax.googleapis.com/ajax/libs/jqueryui/1/themes/redmond/jquery-ui.css",
			"thumb":"//static.jquery.com/ui/themeroller/images/themeGallery/theme_30_windoze.png"},
			{"themeName":"Smoothness",
			"url":"//ajax.googleapis.com/ajax/libs/jqueryui/1/themes/smoothness/jquery-ui.css",
			"thumb":"//static.jquery.com/ui/themeroller/images/themeGallery/theme_30_smoothness.png"},
			{"themeName":"South Street",
			"url":"//ajax.googleapis.com/ajax/libs/jqueryui/1/themes/south-street/jquery-ui.css",
			"thumb":"//static.jquery.com/ui/themeroller/images/themeGallery/theme_30_south_street.png"},
			{"themeName":"Start",
			"url":"//ajax.googleapis.com/ajax/libs/jqueryui/1/themes/start/jquery-ui.css",
			"thumb":"//static.jquery.com/ui/themeroller/images/themeGallery/theme_30_start_menu.png"},
			{"themeName":"Sunny",
			"url":"//ajax.googleapis.com/ajax/libs/jqueryui/1/themes/sunny/jquery-ui.css",
			"thumb":"//static.jquery.com/ui/themeroller/images/themeGallery/theme_30_sunny.png"},
			{"themeName":"Swanky Purse",
			"url":"//ajax.googleapis.com/ajax/libs/jqueryui/1/themes/swanky-purse/jquery-ui.css",
			"thumb":"//static.jquery.com/ui/themeroller/images/themeGallery/theme_30_swanky_purse.png"},
			{"themeName":"Trontastic",
			"url":"//ajax.googleapis.com/ajax/libs/jqueryui/1/themes/trontastic/jquery-ui.css",
			"thumb":"//static.jquery.com/ui/themeroller/images/themeGallery/theme_30_trontastic.png"},
			{"themeName":"UI Darkness",
			"url":"//ajax.googleapis.com/ajax/libs/jqueryui/1/themes/ui-darkness/jquery-ui.css",
			"thumb":"//static.jquery.com/ui/themeroller/images/themeGallery/theme_30_ui_dark.png"},
			{"themeName":"UI Lightness",
			"url":"//ajax.googleapis.com/ajax/libs/jqueryui/1/themes/ui-lightness/jquery-ui.css",
			"thumb":"//static.jquery.com/ui/themeroller/images/themeGallery/theme_30_ui_light.png"},
			{"themeName":"Vader",
			"url":"//ajax.googleapis.com/ajax/libs/jqueryui/1/themes/vader/jquery-ui.css",
			"thumb":"//static.jquery.com/ui/themeroller/images/themeGallery/theme_30_black_matte.png"}
		],
		    ul_string = '<div class="jquery-ui-themeswitcher"><div class="themeGallery"><ul>';
		
			for(var i=0;i<ui_themes.length;i++){
				ul_string += '<li><a href="'+ui_themes[i].url+'">';
				ul_string += '<img src="'+ui_themes[i].thumb+'" alt="'+ui_themes[i].themeName+'" title="'+ui_themes[i].themeName+'" />';
				ul_string += '<span class="themeName">'+ui_themes[i].themeName+'</span></a></li>';  
			}
			ul_string += '</ul></div></div>';
		
		var switcherpane = $(ul_string).find('div.themeGallery');

		//button events
		button.click(
			function(){
				if(switcherpane.is(':visible')){ switcherpane.spHide(); }
				else{ switcherpane.spShow(); }
						return false;
			}
		);

		//menu events (mouseout didn't work...)
		switcherpane.hover(
			function(){},
			function(){ if(switcherpane.is(':visible')){$(this).spHide();} }
		);

		//show/hide panel functions
		$.fn.spShow = function(){ $(this).css({top: button.offset().top + options.buttonHeight + 6, left: button.offset().left}).slideDown(50); button.css(button_active); options.onOpen(); }
		$.fn.spHide = function(){ $(this).slideUp(50, function(){options.onClose();}); button.css(button_default); }


		/* Theme Loading
		---------------------------------------------------------------------*/
		switcherpane.find('a').click(function(){
			updateCSS( $(this).attr('href') );
			var themeName = $(this).find('span').text();
			button.find('.jquery-ui-themeswitcher-title').text( options.buttonPreText + themeName );
			$.cookie(options.cookieName, themeName);
			options.onSelect();
			if(options.closeOnSelect && switcherpane.is(':visible')){ switcherpane.spHide(); }
			return false;
		});

		//function to append a new theme stylesheet with the new style changes
		var updateCSS = function(locStr){
			var cssLink = $('<link href="'+locStr+'" type="text/css" rel="Stylesheet" class="ui-theme" />');
			$("head").append(cssLink);


			if( $("link.ui-theme").size() > 3){
				$("link.ui-theme:first").remove();
			}	
		};	

		/* Inline CSS 
		---------------------------------------------------------------------*/
		var button_default = {
			fontFamily: 'Trebuchet MS, Verdana, sans-serif',
			fontSize: '11px',
			color: '#666',
			background: '#eee url(themes/glorioso/images/themeswitcher/buttonbg.png) 50% 50% repeat-x',
			border: '1px solid #ccc',
			'-moz-border-radius': '6px',
			'-webkit-border-radius': '6px',
			textDecoration: 'none',
			padding: '3px 3px 3px 8px',
			width: options.width - 11,//minus must match left and right padding 
			display: 'block',
			height: options.buttonHeight,
			outline: '0'
		},
		    button_hover = {
			'borderColor':'#bbb',
			'background': '#f0f0f0',
			cursor: 'pointer',
			color: '#444'
		},
		    button_active = {
			color: '#aaa',
			background: '#000',
			border: '1px solid #ccc',
			borderBottom: 0,
			'-moz-border-radius-bottomleft': 0,
			'-webkit-border-bottom-left-radius': 0,
			'-moz-border-radius-bottomright': 0,
			'-webkit-border-bottom-right-radius': 0,
			outline: '0'
		};

		//button css
		button.css(button_default)
		.hover(
			function(){ 
				$(this).css(button_hover); 
			},
			function(){ 
			 if( !switcherpane.is(':animated') && switcherpane.is(':hidden') ){	$(this).css(button_default);  }
			}	
		)
		.find('.jquery-ui-themeswitcher-icon').css({
			float: 'right',
			width: '16px',
			height: '16px',
			background: 'url(themes/glorioso/images/themeswitcher/icon_color_arrow.gif) 50% 50% no-repeat'
		});	
		//pane css
		switcherpane.css({
			position: 'absolute',
			float: 'left',
			fontFamily: 'Trebuchet MS, Verdana, sans-serif',
			fontSize: '12px',
			background: '#000',
			color: '#fff',
			padding: '8px 3px 3px',
			border: '1px solid #ccc',
			'-moz-border-radius-bottomleft': '6px',
			'-webkit-border-bottom-left-radius': '6px',
			'-moz-border-radius-bottomright': '6px',
			'-webkit-border-bottom-right-radius': '6px',
			borderTop: 0,
			zIndex: 999999,
			width: options.width-6//minus must match left and right padding
		})
		.find('ul').css({
			listStyle: 'none',
			margin: '0',
			padding: '0',
			overflow: 'auto',
			overflowX: 'hidden', // NEW
			height: options.height
		}).end()
		.find('li').hover(
			function(){ 
				$(this).css({
					'borderColor':'#555',
					'background': 'url(themes/glorioso/images/themeswitcher/menuhoverbg.png) 50% 50% repeat-x',
					cursor: 'pointer'
				}); 
			},
			function(){ 
				$(this).css({
					'borderColor':'#111',
					'background': '#000',
					cursor: 'auto'
				}); 
			}
		).css({
			width: options.width - 30,
			height: '',
			padding: '2px',
			margin: '1px',
			border: '1px solid #111',
			'-moz-border-radius': '4px',
			clear: 'left',
			float: 'left'
		}).end()
		.find('a').css({
			color: '#aaa',
			textDecoration: 'none',
			float: 'left',
			width: '100%',
			outline: '0'
		}).end()
		.find('img').css({
			float: 'left',
			border: '1px solid #333',
			margin: '0 2px'
		}).end()
		.find('.themeName').css({
			float: 'left',
			margin: '3px 0'
		}).end();

		$(this).append(button);
		$('body').append(switcherpane);
		switcherpane.hide();
		if( $.cookie(options.cookieName) || options.loadTheme ){
			var themeName = $.cookie(options.cookieName) || options.loadTheme;
			mylink = switcherpane.find('a:contains('+ themeName +')');
			updateCSS( $(mylink).attr('href') );
			button.find('.jquery-ui-themeswitcher-title').text( options.buttonPreText + themeName );
			$.cookie(options.cookieName, themeName);
		}
	};
	return this;
	
})(jQuery);
