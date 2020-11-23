System.register(["./p-781af923.system.js","./p-3cff6db8.system.js","./p-a3575af8.system.js"],(function(t){"use strict";var r,o,e,i,a;return{setters:[function(t){r=t.r;o=t.c;e=t.h;i=t.g},function(){},function(t){a=t.s}],execute:function(){var n='ks-product-price{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:10px 0 20px 0}ks-product-price .price{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;padding-bottom:5px;font-family:var(--product-price-font);font-weight:700;margin-right:20px}ks-product-price .price .previous{display:inline-block;color:var(--color-dark);font-size:var(--product-price-size);line-height:var(--product-price-size);position:relative;margin-bottom:5px}ks-product-price .price .previous::after{background-color:var(--color-dark);content:"";height:0.1em;left:-3px;right:-3px;position:absolute;top:46%}ks-product-price .price .current{color:var(--color-secondary);font-size:var(--product-price-size-emphasis);line-height:var(--product-price-size)}ks-product-price>button{position:relative;overflow:hidden;-webkit-box-flex:1;-ms-flex:1;flex:1;border-style:none;outline-style:none;border-radius:50px;background-color:var(--color-secondary);color:var(--text-color-secondary);font-family:var(--product-price-font);font-size:var(--product-price-size);font-weight:700;-webkit-transition:var(--transition-background-color),\n                var(--transition-color);transition:var(--transition-background-color),\n                var(--transition-color)}ks-product-price button:disabled{background-color:var(--color-faded) !important;color:var(--text-color-faded)}ks-product-price button:hover{background-color:var(--color-secondary-hover)}ks-product-price button:active{background-color:var(--color-secondary-active)}@media only screen and (max-width: 1200px){ks-product-price button{font-family:var(--product-price-font);font-size:var(--product-price-size-small)}}@media only screen and (max-width: 560px){ks-product-price{-ms-flex-wrap:wrap;flex-wrap:wrap}ks-product-price .price{display:block;width:100%;margin-bottom:20px;margin-right:0px;text-align:center}}ks-product-price .fav{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;padding:15px 15px;margin-left:8px;line-height:0px}ks-product-price .fav ks-icon{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);-webkit-transition:-webkit-transform 0.1s ease;transition:-webkit-transform 0.1s ease;transition:transform 0.1s ease;transition:transform 0.1s ease, -webkit-transform 0.1s ease}ks-product-price .fav:hover ks-icon{-webkit-transform:rotate(72deg);-ms-transform:rotate(72deg);transform:rotate(72deg)}ks-product-price button.loading{color:transparent}ks-product-price button ks-loader{opacity:0;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-product-price button.loading ks-loader{opacity:1}ks-product-price button.fav.completed{color:transparent;background-color:var(--color-secondary) !important}ks-product-price button.fav ks-icon.completed{position:absolute;top:50%;left:50%;opacity:0;color:white;-webkit-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%);-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity);-webkit-transition-delay:0.3s;transition-delay:0.3s}ks-product-price button.fav.completed ks-icon.completed{opacity:1}';var s=t("ks_product_price",function(){function t(t){r(this,t);this.addToCart=o(this,"addToCart",7);this.addToFavourites=o(this,"addToFavourites",7);this.cartAnimation=false;this.favouritesAnimation=false}t.prototype.addToCartHandler=function(){if(a.get("availability")>0&&!a.get("cartLoading"))this.addToCart.emit()};t.prototype.addToFavouritesHandler=function(){if(!a.get("favouritesLoading")&&!a.get("favouritesCompleted")){this.addToFavourites.emit()}};t.prototype.render=function(){var t=this;var r=a.get("previousPrice").replace(".",",");var o=a.get("currentPrice").replace(".",",")+" zł";var i=a.get("availability")>0;if(a.get("cartLoading"))this.cartAnimation=true;else setTimeout((function(){t.cartAnimation=false}),300);if(a.get("favouritesLoading"))this.favouritesAnimation=true;else setTimeout((function(){t.favouritesAnimation=false}),300);var n=["fav",a.get("favouritesCompleted")?"completed":null,a.get("favouritesLoading")?"loading":null];return[e("div",{class:"price"},r?e("div",{class:"previous"},r):null,e("div",{class:"current"},o)),i?e("ks-product-count",null):null,e("button",{disabled:!i,onClick:function(){return t.addToCartHandler()},class:a.get("cartLoading")?"loading":""},i?"DO KOSZYKA":"NIEDOSTĘPNY",e("ks-loader",{oversized:true,running:this.cartAnimation})),e("button",{onClick:function(){return t.addToFavouritesHandler()},class:n.join(" ")},e("ks-icon",{name:"star"}),e("ks-loader",{running:this.favouritesAnimation}),e("ks-icon",{class:"completed",name:"check"}))]};Object.defineProperty(t.prototype,"root",{get:function(){return i(this)},enumerable:false,configurable:true});return t}());s.style=n}}}));