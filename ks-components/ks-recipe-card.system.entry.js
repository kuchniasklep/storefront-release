System.register(["./index-fe43986b.system.js"],(function(e){"use strict";var i,r,t;return{setters:[function(e){i=e.r;r=e.h;t=e.g}],execute:function(){var o="ks-recipe-card{display:block;background-color:#ffffff;-webkit-box-shadow:0 2px 8px rgba(0,0,0,0.15);box-shadow:0 2px 8px rgba(0,0,0,0.15)}ks-recipe-card>a{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative}ks-recipe-card .views{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;top:8px;right:12px;color:transparent;-webkit-transition:color 0.3s ease;transition:color 0.3s ease}ks-recipe-card .views ks-icon{margin-right:3px}ks-recipe-card .info{padding:15px;font-family:var(--font-regular);font-size:14px;text-align:center;text-decoration:none !important;color:#707070;-webkit-transition:color 0.3s ease;transition:color 0.3s ease}ks-recipe-card h3{font-family:var(--font-emphasis);font-size:20px;color:#252525;-webkit-transition:color 0.3s ease;transition:color 0.3s ease;margin-bottom:5px}ks-recipe-card .dot{margin:0 8px}ks-recipe-card a:hover{text-decoration:none}ks-recipe-card>a:hover .info{color:var(--color-secondary)}ks-recipe-card>a:hover h3{color:var(--color-secondary)}ks-recipe-card>a:hover .views{color:#ffffff}@media screen and (min-width: 960px) and (max-width: 1199px){ks-recipe-card[hide-on-odd]{display:none !important}}";var s=e("ks_recipe_card",function(){function e(e){i(this,e);this.hideOnOdd=false}e.prototype.render=function(){return r("a",{href:this.link},r("ks-img",{src:this.image,alt:this.heading,center:true}),r("div",{class:"info"},r("h3",null,this.heading),r("div",null,r("span",null,this.cuisine),r("span",{class:"dot"},"•"),r("span",null,this.category))),r("div",{class:"views"},r("ks-icon",{name:"search",size:.75})," ",this.views))};Object.defineProperty(e.prototype,"root",{get:function(){return t(this)},enumerable:false,configurable:true});return e}());s.style=o}}}));