import{r as registerInstance,h}from"./index-74ff0cef.js";import"./index-b4f14e2e.js";import{s as store}from"./product-store-44debc87.js";var productShippingCss="ks-product-shipping{display:block;margin-bottom:20px;font-family:var(--product-shipping-font);font-size:var(--product-shipping-size);color:var(--product-shipping-color)}ks-product-shipping .time{display:inline-block;color:var(--color-secondary);font-weight:700}ks-product-shipping .price{display:inline-block;font-weight:700;font-size:var(--product-shipping-size-small)}ks-product-shipping .separator{margin:0px 6px;-webkit-transform:scale(0.9, 0.9);-ms-transform:scale(0.9, 0.9);transform:scale(0.9, 0.9)}ks-product-shipping .message{background-color:var(--color-secondary);font-family:var(--product-shipping-message-font);font-size:var(--product-shipping-message-size);color:var(--text-color-secondary);text-align:center;margin:20px 0px 5px -2px;padding:10px 20px;border-radius:15px}@media only screen and (max-width: 1200px){ks-product-shipping .message{font-size:var(--product-shipping-message-size-small)}}@media only screen and (max-width: 960px){ks-product-shipping{margin-top:20px}ks-product-shipping .shipping{text-align:center;font-size:var(--product-shipping-size)}ks-product-shipping .message{margin-bottom:20px}ks-product-shipping .time{display:block;font-size:var(--product-shipping-size)}ks-product-shipping .price{display:block}ks-product-shipping .separator{display:none}}ks-product-shipping .time-animation{-webkit-animation:blink 1.5s ease-in-out infinite;animation:blink 1.5s ease-in-out infinite}";var ProductShipping=function(){function i(i){registerInstance(this,i)}i.prototype.render=function(){var i=store.get("shippingTime");var s=parseFloat(store.get("shippingPrice"))==0;var p=i.search("godzin")!=-1||i.search("dni")!=-1;var r=i.search("24 godziny")!=-1;var e=p?"Wysyłka w":"";var n=r?"":" time-animation";var o=s?"Darmowa dostawa":store.get("shippingPrice").replace(".",",")+" zł";var t=s?"":"Dostawa od";return[h("div",{class:"shipping"},h("span",{class:"time"+n}," ",e," ",i," "),h("span",{class:"separator"}," • "),h("span",{class:"price"},t," ",o)),store.get("shippingMessage")?h("div",{class:"message"},store.get("shippingMessage")):null]};return i}();ProductShipping.style=productShippingCss;export{ProductShipping as ks_product_shipping};