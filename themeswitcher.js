/* jQuery UI ThemeSwitcher widget
 * Rewritten from jQuery ThemeSwitcher Demo that used to be found at (http://jqueryui.com/docs/Theming/ThemeSwitcher)
 * Rewrite by John R. D'Orazio <priest@johnromanodorazio.com>
---------------------------------------------------------------------*/

(function($, undefined) {
	$.themeswitcher = { "version":"2.0.62" };
	Object.freeze($.themeswitcher);

	$.fn.themeswitcher = function(settings){
		
		return this.each(function(){
			
			//USER DEFINEABLE OPTIONS
			const options = jQuery.extend({
				loadTheme: null,
				initialText: 'Switch Theme',
				buttonPreText: 'Theme: ',
				closeOnSelect: true,
				cookieName: 'jquery-ui-theme',
				jqueryUiVersion: ($.ui && $.ui.version ? $.ui.version : '1.13.2'),
				onOpen: function(){},
				onClose: function(){},
				onSelect: function(){}
			}, settings);

			const availableUiVersions = ["1.13.2", "1.13.1", "1.13.0", "1.12.1", "1.12.0", "1.11.4", "1.11.3", "1.11.2", "1.11.1", "1.11.0", "1.10.4", "1.10.3", "1.10.2", "1.10.1", "1.10.0", "1.9.2", "1.9.1", "1.9.0", "1.8.24", "1.8.23", "1.8.22", "1.8.21", "1.8.20", "1.8.19", "1.8.18", "1.8.17", "1.8.16", "1.8.15", "1.8.14", "1.8.13", "1.8.12", "1.8.11", "1.8.10", "1.8.9", "1.8.8", "1.8.7", "1.8.6", "1.8.5", "1.8.4", "1.8.2", "1.8.1", "1.8.0", "1.7.3", "1.7.2", "1.7.1", "1.7.0", "1.6.0", "1.5.3", "1.5.2"];
			if(false === availableUiVersions.includes(options.jqueryUiVersion)){
				options.jqueryUiVersion = availableUiVersions[0];
			}

			const themeLookupTable = {
				"base": {
					themeName: "Base",
					thumbFile: "theme_30_smoothness.png"
				},
				"black-tie": {
					themeName: "Black Tie",
					thumbFile: "theme_30_black_tie.png"
				},
				"blitzer": {
					themeName: "Blitzer",
					thumbFile: "theme_30_blitzer.png"
				},
				"cupertino": {
					themeName: "Cupertino",
					thumbFile: "theme_30_cupertino.png"
				},
				"dark-hive": {
					themeName: "Dark Hive",
					thumbFile: "theme_30_dark_hive.png"
				},
				"dot-luv": {
					themeName: "Dot Luv",
					thumbFile: "theme_30_dot_luv.png"
				},
				"eggplant": {
					themeName: "Eggplant",
					thumbFile: "theme_30_eggplant.png"
				},
				"excite-bike": {
					themeName: "Excite Bike",
					thumbFile: "theme_30_excite_bike.png"
				},
				"flick": {
					themeName: "Flick",
					thumbFile: "theme_30_flick.png"
				},
				"hot-sneaks": {
					themeName: "Hot Sneaks",
					thumbFile: "theme_30_hot_sneaks.png"
				},
				"humanity": {
					themeName: "Humanity",
					thumbFile: "theme_30_humanity.png"
				},
				"le-frog": {
					themeName: "Le Frog",
					thumbFile: "theme_30_le_frog.png"
				},
				"mint-choc": {
					themeName: "Mint Choc",
					thumbFile: "theme_30_mint_choco.png"
				},
				"overcast": {
					themeName: "Overcast",
					thumbFile: "theme_30_overcast.png"
				},
				"pepper-grinder": {
					themeName: "Pepper Grinder",
					thumbFile: "theme_30_pepper_grinder.png"
				},
				"redmond": {
					themeName: "Redmond",
					thumbFile: "theme_30_windoze.png"
				},
				"smoothness": {
					themeName: "Smoothness",
					thumbFile: "theme_30_smoothness.png"
				},
				"south-street": {
					themeName: "South Street",
					thumbFile: "theme_30_south_street.png"
				},
				"start": {
					themeName: "Start",
					thumbFile: "theme_30_start_menu.png"
				},
				"sunny": {
					themeName: "Sunny",
					thumbFile: "theme_30_sunny.png"
				},
				"swanky-purse": {
					themeName: "Swanky Purse",
					thumbFile: "theme_30_swanky_purse.png"
				},
				"trontastic": {
					themeName: "Trontastic",
					thumbFile: "theme_30_trontastic.png"
				},
				"ui-darkness": {
					themeName: "UI Darkness",
					thumbFile: "theme_30_ui_dark.png"
				},
				"ui-lightness": {
					themeName: "UI Lightness",
					thumbFile: "theme_30_ui_light.png"
				},
				"vader": {
					themeName: "Vader",
					thumbFile: "theme_30_black_matte.png"
				}
			}

			const themes = Object.keys(themeLookupTable);
			const getThemeUrl = (theme) => `//ajax.googleapis.com/ajax/libs/jqueryui/${options.jqueryUiVersion}/themes/${theme}/jquery-ui.css`;
			const getThumbUrl = (theme) => `//static.jquery.com/ui/themeroller/images/themeGallery/${themeLookupTable[theme].thumbFile}`;

			//MARKUP
			const getThemeMarkup = (idx) => {
				let theme		= themes[idx];
				let themeName		= themeLookupTable[theme].themeName;
				let url			= getThemeUrl(theme);
				let thumb		= getThumbUrl(theme);
				let liOpenTag		= `<li><a href="${url}">`;
				let imgTag		= `<img src="${thumb}" alt="${themeName}" title="${themeName}" />`;
				let span		= `<span class="themeName">${themeName}</span>`
				let liCloseTag		= `</a></li>`;
				let html		= `${liOpenTag}${imgTag}${span}${liCloseTag}`;
				console.log(html);
				return html;
			}
			const buttonMarkup = `<a href="#" class="jquery-ui-themeswitcher-trigger" style="min-width: 250px;" title="${options.initialText}">${options.initialText}</a>`;
			let $button = $(buttonMarkup).button({
				icon: "ui-icon-caret-1-s",
				iconPosition: "end"
			}),
			ul_string_start = '<div class="jquery-ui-themeswitcher"><div class="themeGallery"><ul>',
			ul_string_end = '</ul></div></div>',
			ul_string_contents = '';

			//automatically build ul contents using themeLookupTable
			for(let i = 0; i < themes.length; i++) {
				ul_string_contents += getThemeMarkup(i);
			}

			let ul_string		= `${ul_string_start}${ul_string_contents}${ul_string_end}`,
			    $switcherpane	= $(ul_string).find('div.themeGallery');

			//button events
			$button.on('click', () => {
				if($switcherpane.is(':visible')){
					$button.button("option", "icon", "ui-icon-caret-1-s");
					$button.removeClass("ui-corner-top").addClass("ui-corner-all");
					$switcherpane.spHide();
				}
				else{ 
					$button.button("option", "icon", "ui-icon-caret-1-n");
					$button.removeClass("ui-corner-all").addClass("ui-corner-top");
					$switcherpane.spShow(); 
				}
				return false;
			});

			//show/hide panel
			$.fn.spShow = function() {
				$(this).css({
					top: $button.offset().top + $button.outerHeight(), 
					left: $button.offset().left, 
					width: $button.outerWidth() - Math.ceil( (window.innerWidth - $(window).width()) / 2 ) + 2 //this last 2 is to account for border-width, I think. seem to work...
				}).slideDown(50); 
				options.onOpen(); 
			}

			$.fn.spHide = function() {
				$(this).slideUp(50, function(){ options.onClose(); });
			}


			/* Theme Loading
			---------------------------------------------------------------------*/
			$switcherpane.find('a').on('click', function() {
				updateCSS( $(this).attr('href') );
				let themeName = $(this).find('span').text();
				$button.button('option', 'label', options.buttonPreText + themeName);
				if(typeof Cookies !== 'undefined'){ Cookies.set(options.cookieName, themeName); }
				options.onSelect();
				if(options.closeOnSelect && $switcherpane.is(':visible')) {
					$switcherpane.spHide(); 
					$button.button("option", "icon", "ui-icon-caret-1-s");
					$button.removeClass("ui-corner-top").addClass("ui-corner-all");
				}
				return false;
			});

			//function to append a new theme stylesheet with the new style changes
			const updateCSS = (locStr) => {
				let $cssLink = $(`<link href="${locStr}" type="text/css" rel="stylesheet" class="ui-theme" />`);
				$cssLink.appendTo('head');

				//try never to have more than 1 stylesheet loaded at a time
				if( $("link.ui-theme").size() > 1){
					$("link.ui-theme").filter(":first").remove();
				}
			};

			/* Inline CSS 
			---------------------------------------------------------------------*/
			//pane css
			$switcherpane.css({
				position: 'absolute',
				fontFamily: 'Trebuchet MS, Verdana, sans-serif',
				display: 'inline-block',
				fontSize: '12px',
				background: '#000',
				color: '#fff',
				padding: '8px 3px 3px 3px',
				border: '1px solid #ccc',
				borderRadius: '0px 0px 6px 6px',
				borderTop: 0,
				zIndex: 999999,
				width: $button.outerWidth()
			})
			.find('ul').css({
				listStyle: 'none',
				margin: '0',
				padding: '0',
				overflow: 'auto',
				overflowX: 'hidden', // NEW
				height: '300px'
			}).end()
			.find('li').hover(
				function(){ 
					$(this).css({
						'borderColor':'#555',
						'background': 'linear-gradient(to bottom, #848484 0%,#1e1f21 80%,#1e1f21 80%)',
						'cursor': 'pointer'
					}); 
				},
				function(){ 
					$(this).css({
						'borderColor':'#111',
						'background': '#000',
						'cursor': 'auto'
					}); 
				}
			).css({
				padding: '2px',
				margin: '1px',
				border: '1px solid #111',
				borderRadius: '4px',
				display: 'block'
			}).end()
			.find('a').css({
				color: '#aaa',
				textDecoration: 'none',
				display: 'block',
				lineHeight: '2.2em'
			}).end()
			.find('img').css({
				display: 'inline-block',
				border: '1px solid #333',
				margin: '0 6px',
				lineHeight: 'normal',
				verticalAlign: 'middle'
			}).end()
			.find('.themeName').css({
				display: 'inline-block',
				fontSize: '2em',
				fontWeight: 'bold',
				margin: '0px 9px',
				lineHeight: 'normal',
				verticalAlign: 'middle'
			}).end();

			$button.appendTo(this);
			$switcherpane.appendTo('body');
			$switcherpane.hide();
			
			let themeName = '',
			    $themeLink;
			if( typeof Cookies !== 'undefined' ) {
				if( Cookies.get(options.cookieName) || options.loadTheme ) {
					themeName = Cookies.get(options.cookieName) || options.loadTheme;
					$themeLink = $switcherpane.find(`a:contains(${themeName})`);
					updateCSS( $themeLink.attr('href') );
					$button.button('option', 'label', options.buttonPreText + themeName );
					Cookies.set(options.cookieName, themeName);
				}
			} else {
				if( options.loadTheme ) {
					themeName = options.loadTheme;
					$themeLink = $switcherpane.find(`a:contains(${themeName})`);
					updateCSS( $themeLink.attr('href') );
					$button.button('option', 'label', options.buttonPreText + themeName );
				}
			}
		});
	}

	return this;

})(jQuery);
