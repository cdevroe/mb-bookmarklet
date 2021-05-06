javascript: (function (){
    "use strict";
    var w = window,
        d = document,
        s = w.getSelection().toString(),
        u = '';
        if ( s.length > 0 ) { // There is a selection
            u = 'https://micro.blog/post?bookmarklet=true&text=>%20' + encodeURIComponent(s) + encodeURIComponent('&#13;&#13;') + 'Source:%20[' + encodeURIComponent(d.title) + '](' + encodeURIComponent(w.location.href) + ')';
        } else {
            u = 'https://micro.blog/post?bookmarklet=true&text=[' + encodeURIComponent(d.title) + '](' + encodeURIComponent(w.location.href) + ')';
        }
    w.open(u, 'Post to Micro.blog', 'location=0,links=0,scrollbars=0,toolbar=0,width=594,height=615');
})();