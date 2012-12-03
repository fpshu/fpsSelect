// fpsSelect jQuery plugin v1.1 http://wiki.fps2.hu/index.php/CustomSelect
(function( $ ){
	$.fn.fpsSelect = function( options ) {
		
		// default settings
		var options = $.extend({
			selectWidth: 150,
			selectHeight: 20,
			containerClass: '',
			designClass: '',
			dev: false
		}, options);
		
		return this.each(function() {
			
			var base = $(this); // select
			var base_id = base.attr('id'); // az elem id-je
			
			if( !base_id ) alert('Az fpsSelect plugin csak akkor működik, ha a <select>-nek van id attribútuma!');
			
			// wrapper classok létrehozása
			base.wrap('<div class="' + base_id + '_container fpsContainer ' + options.containerClass + '" />');
			base.parent().prepend('<div class="' + base_id + ' fpsSelect ' + options.designClass + '" />');
			
			var base_div = $('.' + base_id); // az elem id-jével azonos class-ú div
			
			//base.hide();
			base
				.css({
					position: 'absolute',
					top: 0,
					left: 0,
					padding: 0,
					margin: 0,
					border: 0,
					width: options.selectWidth,
					height: options.selectHeight,
					opacity: 0,
					cursor: 'pointer'
				})
				.hover(function() {
					base_div.addClass('hover');
				}, function() {
					base_div.removeClass('hover');
				})
				.focus(function() {
					base_div.addClass('hover');
				})
				.focusout(function() {
					base_div.removeClass('hover');
				});
			
			// a hasonló class-ú div-be beírni az adatokat
			refresh();
			base.change(function() { refresh(); });
			
			// egyéb CSS módosítások
			$('.fpsContainer')
				.css({
					position: 'relative',
					width: options.selectWidth,
					height: options.selectHeight
				});
			
			if( options.dev ) {
				base.css({
					background: 'red',
					opacity: 0.5
				});
			}
			
			function refresh() {
				var selected_text = base.children('option[selected=selected]').html();
				base_div.children('.customSelect_text').remove();
				base_div.prepend('<span class="customSelect_text">' + selected_text + '</span>');
				if( options.dev ) console.log( selected_text )
			}
			
		});
		
	};
})( jQuery );