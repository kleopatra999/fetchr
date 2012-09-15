/* jQuery Tiny Pub/Sub - v0.7 - 10/27/2011
 * http://benalman.com/
 * Copyright (c) 2011 "Cowboy" Ben Alman; Licensed MIT, GPL */
(function(a){var b=a({});a.subscribe=function(){b.on.apply(b,arguments)},a.unsubscribe=function(){b.off.apply(b,arguments)},a.publish=function(){b.trigger.apply(b,arguments)}})(jQuery);


/* Fetchr */
$(function() {

	var paths = {},
		results = {};
	
	function createDeferred(opts){
		var dfd = $.Deferred();
		
		$.ajax({
			url : opts.path,
			dataType : 'html',
			success : function(response){
				dfd.resolve(response);
			}
		});
		
		return dfd;
	}
	
	$('a[data-prefetch]').each(function(i, elem){
		var path = $(elem).attr('href');
		
		// If no path found, exit.
		if (!path) return;
		
		// If duplicate, exit.
		if (paths[path]){
			return;
		} else {
			paths[path] = path;
		}
		
		// Create deferred.
		var dfd = createDeferred({
			path : path
		});
				
		// Try to resolve deferred, and...
		$.when(dfd).then(function(result){
			var section = $(result).first();
			section.attr('data-path', path);
			section.css('display', 'none');
			
			// Insert html into DOM
			$('body').prepend(section);
			
			// Save path and corresponding HTML
			results[path] = section.get(0);	
		});
	});
	
	$('a').on('click', function(e){		
		var path = $(e.currentTarget).attr('href');
		
		// If that path is already cached...
		if (results[path]){
			// Publish 'fetched' and pass along fetched page.
			$.publish('fetched', results[path]);
			
			// Cancel default link action.
			return false;
		}
	});
	
});

/**
 *	Users subscribe to 'fetched' event.
 *	A DOM element is passed back.
 *	It's up to them what they want to do w/ the fetched page... Slide it in, etc.
 */
$.subscribe('fetched', function(event, response){
	console.log(response);
});