import styled, { createGlobalStyle } from 'styled-components';

(function(d) {
  var config = {
      kitId: 'kmg5ybz',
      scriptTimeout: 3000,
      async: true,
    },
    h = d.documentElement,
    t = setTimeout(function() {
      h.className = h.className.replace(/\bwf-loading\b/g, '') + ' wf-inactive';
    }, config.scriptTimeout),
    tk = d.createElement('script'),
    f = false,
    s = d.getElementsByTagName('script')[0],
    a;
  h.className += ' wf-loading';
  tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
  tk.async = true;
  tk.onload = tk.onreadystatechange = function() {
    a = this.readyState;
    if (f || (a && a != 'complete' && a != 'loaded')) return;
    f = true;
    clearTimeout(t);
    try {
      Typekit.load(config);
    } catch (e) {}
  };
  s.parentNode.insertBefore(tk, s);
})(document);

const GlobalStyles = createGlobalStyle`
body{
    padding: 0;
  margin: 0;
  font-family: 'DINosaur';
  color: #efefef;


  h1{
      text-align: center;
      font-family: Domus Titling;
      font-size: 30px;
    font-weight: lighter;
  }

  h2{
      font-size: 24px;
      font-weight: lighter;
  }


}
button{
    padding: 0;
    margin: 0;
    border: none;
    background: transparent;
}



`;

export default GlobalStyles;
