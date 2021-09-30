var __awaiter=this&&this.__awaiter||function(t,r,e,n){function o(t){return t instanceof e?t:new e((function(r){r(t)}))}return new(e||(e=Promise))((function(e,a){function i(t){try{c(n.next(t))}catch(r){a(r)}}function s(t){try{c(n["throw"](t))}catch(r){a(r)}}function c(t){t.done?e(t.value):o(t.value).then(i,s)}c((n=n.apply(t,r||[])).next())}))};var __generator=this&&this.__generator||function(t,r){var e={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,o,a,i;return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(t){return function(r){return c([t,r])}}function c(i){if(n)throw new TypeError("Generator is already executing.");while(e)try{if(n=1,o&&(a=i[0]&2?o["return"]:i[0]?o["throw"]||((a=o["return"])&&a.call(o),0):o.next)&&!(a=a.call(o,i[1])).done)return a;if(o=0,a)i=[i[0]&2,a.value];switch(i[0]){case 0:case 1:a=i;break;case 4:e.label++;return{value:i[1],done:false};case 5:e.label++;o=i[1];i=[0];continue;case 7:i=e.ops.pop();e.trys.pop();continue;default:if(!(a=e.trys,a=a.length>0&&a[a.length-1])&&(i[0]===6||i[0]===2)){e=0;continue}if(i[0]===3&&(!a||i[1]>a[0]&&i[1]<a[3])){e.label=i[1];break}if(i[0]===6&&e.label<a[1]){e.label=a[1];a=i;break}if(a&&e.label<a[2]){e.label=a[2];e.ops.push(i);break}if(a[2])e.ops.pop();e.trys.pop();continue}i=r.call(t,e)}catch(s){i=[6,s];o=0}finally{n=a=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};import{r as registerInstance,h,g as getElement}from"./index-5edb5049.js";import{O as OpenSuggestions,R as RemoveFromFavourites,A as AddToFavourites}from"./functions-d67550e3.js";import{e as eachTracker}from"./store-a33839ba.js";import"./index-4223a160.js";var buttonCartCss="ks-button-cart{display:block;height:100%}ks-button-cart[expand]{-ms-flex:1;flex:1}ks-button-cart[padding] button{padding:5px;min-height:50px}@media (min-width: 700px){ks-button-cart[padding] button{padding:10px;min-height:60px}}ks-button-cart button{position:relative;display:block;width:100%;height:100%;min-height:42px;min-width:44px;padding:1px 10px;font-size:.875rem;line-height:40px;text-align:center;text-decoration:none;text-transform:none;font-family:var(--font-regular);outline:none;border:none;border-radius:0px;color:white;background-color:var(--product-card-primary);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-button-cart button:hover{background-color:var(--product-card-primary-hover)}ks-button-cart button:active{background-color:var(--product-card-primary-active)}ks-button-cart[disabled] button{background-color:var(--product-card-disabled-color) !important;color:var(--product-card-disabled-text) !important}";var ButtonCart=function(){function t(t){registerInstance(this,t);this.count="1";this.traits="";this.expand=false;this.padding=false;this.icon=false;this.product=false;this.loading=false}t.prototype.ClickHandler=function(t){if(!this.disabled&&!this.loading){this.cart(t||this.count)}};t.prototype.fetch=function(t,r){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(n){e=new Headers;e.append("pragma","no-cache");e.append("cache-control","no-cache");return[2,fetch(t,{method:"POST",body:r,headers:e,credentials:"same-origin"}).then((function(t){if(!t.ok)throw{name:t.status,message:t.statusText};return t}))]}))}))};t.prototype.cart=function(t){return __awaiter(this,void 0,void 0,(function(){var r,e,n,o;var a=this;return __generator(this,(function(i){switch(i.label){case 0:this.loading=true;r=document.querySelector("ks-error-popup");e=document.querySelector("ks-message-popup");n=document.querySelector("ks-navbar");o=new FormData;o.append("id",this.productId);o.append("ilosc",t);o.append("nazwa",this.name);o.append("value",this.price.toString());o.append("cechy",this.traits);o.append("akcja","dodaj");o.append("miejsce","1");return[4,this.fetch("api/cart/product_add.php?tok="+ksCartToken,o).then((function(t){return __awaiter(a,void 0,void 0,(function(){return __generator(this,(function(r){return[2,t.json()]}))}))})).then((function(r){return __awaiter(a,void 0,void 0,(function(){var o=this;return __generator(this,(function(a){if(!r.status){if(r.productLink)e.show("Wymagany wybór cechy",r.message,"Przejdź do produktu",this.url);else e.show("Błąd dodawania produktu",r.message);return[2]}n.IncrementCart(t);OpenSuggestions(this.productId,this.name);if(r.event)eachTracker((function(t){return t===null||t===void 0?void 0:t.addToCart(r.event,o.productId,o.name,o.price,1,"PLN")}));return[2]}))}))})).catch((function(t){r.show(t)}))];case 1:i.sent();this.loading=false;return[2]}}))}))};t.prototype.AddToCart=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(r){this.ClickHandler(t);return[2]}))}))};t.prototype.SetCount=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(r){this.count=t;return[2]}))}))};t.prototype.render=function(){var t=this;return h("button",{"aria-label":"Do koszyka",disabled:this.disabled,onClick:function(){return t.ClickHandler()}},this.loading?h("ks-loader",{large:true}):this.icon?h("ks-icon",{name:"shopping-bag",size:.9}):h("span",null,"DO KOSZYKA"))};Object.defineProperty(t.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();ButtonCart.style=buttonCartCss;var buttonFavCss="ks-button-fav{display:block;height:100%}ks-button-fav[expand]{-ms-flex:1;flex:1}ks-button-fav[padding] button{padding:5px;min-height:50px}@media (min-width: 700px){ks-button-fav[padding] button{min-height:60px;padding:10px}}ks-button-fav button{position:relative;display:block;width:100%;height:100%;min-height:42px;min-width:44px;padding:1px 10px;font-size:.875rem;line-height:40px;text-align:center;text-decoration:none;text-transform:none;outline:none;border:none;border-radius:0px;color:white;background-color:var(--product-card-secondary);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-button-fav button:hover{background-color:var(--product-card-secondary-hover)}ks-button-fav button:active{background-color:var(--product-card-secondary-active)}ks-button-fav .success{display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:var(--product-card-secondary);-webkit-animation:fade-in 0.2s 1;animation:fade-in 0.2s 1}";var ButtonFav=function(){function t(t){registerInstance(this,t);this.subtract=false;this.expand=false;this.padding=false;this.loading=false;this.success=false}t.prototype.ClickHandler=function(){var t=this;if(!this.loading&&!this.success){this.loading=true;if(this.subtract)RemoveFromFavourites(this.productId,(function(){return t.ResultHandler()}));else AddToFavourites(this.productId,(function(){return t.ResultHandler()}))}};t.prototype.ResultHandler=function(){this.loading=true;this.success=true;var t=document.querySelector("ks-navbar");if(this.subtract)t.DecrementHeart()};t.prototype.render=function(){var t=this;return h("button",{"aria-label":"Do koszyka",onClick:function(){return t.ClickHandler()}},this.loading?h("ks-loader",null):h("ks-icon",{name:this.subtract?"x":"star"}),this.success?h("div",{class:"success"},h("ks-icon",{name:"check"})):null)};Object.defineProperty(t.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();ButtonFav.style=buttonFavCss;var productCardCss="ks-product-card{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:100%;text-align:center;background:var(--card-background);color:var(--card-text-color);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}@media (min-width: 360px){ks-product-card{width:calc(50% - 15px)}}@media (min-width: 640px){ks-product-card{width:228px}}ks-product-card .top{display:block;padding:15px;min-height:200px;color:inherit !important;text-decoration:none !important;font-size:14px}ks-product-card ks-img{height:auto;margin-bottom:10px}ks-product-card .price>*{display:block;font-family:var(--font-emphasis)}ks-product-card .price .previous{color:#888888;font-size:15px}ks-product-card .price .current{color:var(--color-secondary);font-weight:bold;font-size:17px}ks-product-card .bottom{display:-ms-flexbox;display:flex;margin-top:10px}ks-product-card .bottom .unavailable,ks-product-card .bottom .link{display:block;width:100%;padding:10px 10px;font-size:.875rem;text-align:center;text-decoration:none;text-transform:none;color:white;background-color:var(--color-secondary);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-product-card .bottom .unavailable{color:#252525;background-color:#f1f1f1}ks-product-card .bottom .link:hover{background-color:var(--color-secondary-hover)}ks-product-card .bottom .link:active{background-color:var(--color-secondary-active)}ks-product-card[unavailable] .top,ks-product-card[unavailable] .price{opacity:0.6}ks-product-card[unavailable] .price .current{color:#252525}@media (max-width: 420px){ks-product-card .top{font-size:13px;padding:8px}ks-product-card .price{line-height:18px}}";var ProductCard=function(){function t(t){registerInstance(this,t);this.unavailable=false;this.linkOnly=false}t.prototype.render=function(){var t=this.currentPrice?this.currentPrice.replace(".",",")+" zł":"";var r=this.previousPrice?this.previousPrice.replace(".",",")+" zł":"";return[h("a",{href:this.link,"aria-label":this.name,class:"top"},h("ks-img",{fill:true,src:this.img,width:280,height:280,alt:this.name}),h("span",null,this.name)),h("div",{class:"price"},this.previousPrice?h("s",{class:"previous"},r):null,h("span",{class:"current"},t)),h("div",{class:"bottom"},this.unavailable?h("a",{href:this.link,class:"unavailable"},"NIEDOSTĘPNY"):this.linkOnly?h("a",{href:this.link,class:"link"},"ZOBACZ WIĘCEJ"):[h("ks-button-fav",{"product-id":this.productId}),h("ks-button-cart",{expand:true,"product-id":this.productId,name:this.name,price:parseFloat(this.currentPrice),url:this.link})])]};return t}();ProductCard.style=productCardCss;var productContainerCss="ks-product-container{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-pack:center;justify-content:center;-ms-flex-align:stretch;align-items:stretch;margin-left:-15px;margin-top:-15px;padding:0 10px}ks-product-container>*{margin-left:15px;margin-top:15px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width: 360px) and (max-width: 640px){ks-product-container>*{width:50%}}@media (min-width: 640px){ks-product-container>*{width:228px}}";var Container=function(){function t(t){registerInstance(this,t)}t.prototype.render=function(){return h("slot",null)};return t}();Container.style=productContainerCss;export{ButtonCart as ks_button_cart,ButtonFav as ks_button_fav,ProductCard as ks_product_card,Container as ks_product_container};