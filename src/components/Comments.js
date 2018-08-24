import React from 'react';

export const Comments = () => {

    var disqus_config = function () {
        this.page.url = "http://salty-spire-79634.herokuapp.com/notes";  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = "nugoo-portfolio-disqus"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };

    (function() {  // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        
        s.src = 'https://nugoo-portfolio.disqus.com/embed.js';
        
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
    return (
        <div className="content-container">
        <div id="disqus_thread"></div>
        </div>);
}