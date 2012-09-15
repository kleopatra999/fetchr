# fetchr
   
   A jQuery plugin that will prefetch pages and improve performance of single-page apps and apps that depend heavily on AJAX.

## Steps

1) Add "data-prefetch" to any link that you wish to pre-fetch.  

```html
<a href="login.html" data-prefetch>Login</a>

2) Subscribe to "fetched" event, and do what you wish after the user clicks a link.  You can slide the page in, replace the <body> with it, or do whatever you want!

```js
$.subscribe('fetched', function(event, response){
   $(document.body).replaceWith(response);
});

## Benefits

- Load pages up front, so users don't have to wait after clicking.  This is useful for links that are most likely to be clicked.
- Improve perceived loading time.

## License

  MIT