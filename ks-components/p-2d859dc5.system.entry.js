System.register(["./p-781af923.system.js","./p-e6428b2c.system.js"],(function(i){"use strict";var s,e,n;return{setters:[function(i){s=i.r;e=i.h},function(i){n=i.s}],execute:function(){var p="ks-product-shipping{display:block;margin-bottom:20px;font-family:var(--product-shipping-font);font-size:var(--product-shipping-size);color:var(--product-shipping-color)}ks-product-shipping .time{display:inline-block;color:var(--color-secondary);font-weight:700}ks-product-shipping .price{display:inline-block;font-weight:700}ks-product-shipping .message{background-color:var(--color-secondary);font-family:var(--product-shipping-message-font);font-size:var(--product-shipping-message-size);color:var(--text-color-secondary);text-align:center;margin:20px 0px 5px -2px;padding:10px 20px;border-radius:15px}@media only screen and (max-width: 1200px){ks-product-shipping .message{font-size:var(--product-shipping-message-size-small)}}@media only screen and (max-width: 960px){ks-product-shipping .shipping{text-align:center;font-size:var(--product-shipping-size-small)}ks-product-shipping .message{margin-bottom:20px}}ks-product-shipping .time-animation{-webkit-animation:blink 1.5s ease-in-out infinite;animation:blink 1.5s ease-in-out infinite}";var r=i("ks_product_shipping",function(){function i(i){s(this,i)}i.prototype.render=function(){var i=n.get("shippingTime");var s=parseFloat(n.get("shippingPrice"))==0;var p=i.search("godzin")!=-1||i.search("dni")!=-1;var r=i.search("24 godziny")!=-1;var t=p?"wysyłka w":"";if(t&&s)t="darmowa "+t;t=t.charAt(0).toUpperCase()+t.slice(1);var a=r?"":" time-animation";var o=s?"":n.get("shippingPrice").replace(".",",")+" zł";if(s&&!p)o="darmowa wysyłka";var c=s?"":"od";return[e("div",{class:"shipping"},e("span",{class:"time"+a}," ",t," ",i," "),"  ",e("span",{class:"price"},c," ",o," ")),n.get("shippingMessage")?e("div",{class:"message"},n.get("shippingMessage")):null]};return i}());r.style=p}}}));