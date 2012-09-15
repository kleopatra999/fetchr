fetchr
======

A jQuery plugin for pre-fetching pages and adding/removing them from the DOM.  Focused on improving single-page apps, and apps that have a lot of AJAX interactions.

# Steps

1) Add "data-prefetch" to any link that you wish to pre-fetch.  

<a href="login.html" data-prefetch>Login</a>

2) Subscribe to "fetched" event, and do what you wish after the user clicks a link.  You can slide the page in, replace the <body> with it, or do whatever you want!

$.subscribe('fetched', function(event, response){
   $(document.body).replaceWith(response);
});

# Benefits

- Load pages up front, so users don't have to wait after clicking.  This is useful for links that are most likely to be clicked.
- Improve perceived loading time.

