System.register(["./p-781af923.system.js","./p-283d1f9c.system.js","./p-e6428b2c.system.js"],(function(t){"use strict";var e,i,r,s,n,o;return{setters:[function(t){e=t.r;i=t.h;r=t.g},function(t){s=t.S;n=t.T},function(t){o=t.s}],execute:function(){var a='ks-product-images{display:block;margin-right:30px}ks-product-images .swiper-slide{position:relative}ks-product-images .swiper-slide canvas{max-width:100%;max-height:500px}ks-product-images .preview ks-img{position:absolute;top:0;width:100%;max-height:500px;margin:auto}ks-product-images .thumb{margin-top:20px;position:relative}ks-product-images .thumb::after{content:"";position:absolute;top:0;bottom:0;right:0;left:-30px;background:-webkit-gradient(linear, left top, right top, from(rgba(255,255,255,0)), color-stop(85%, rgba(255,255,255,0)), to(rgba(255,255,255,1)));background:linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 85%, rgba(255,255,255,1) 100%);z-index:2;pointer-events:none}ks-product-images .thumb .swiper-slide{width:70px;height:70px;opacity:0.4;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-product-images .thumb .swiper-slide-thumb-active{opacity:1}@media only screen and (max-width: 959px){ks-product-images{margin-right:0px;margin-top:30px}ks-product-images .thumb{margin-bottom:20px}}';s.use([n]);var u=t("ks_product_images",function(){function t(t){e(this,t)}t.prototype.componentDidRender=function(){this.lightbox=this.root.querySelector("ks-lightbox");this.thumbs=new s(".thumb",{observer:true,observeParents:true,grabCursor:true,slidesPerView:"auto",preventInteractionOnTransition:true,centerInsufficientSlides:true,watchSlidesVisibility:true,watchSlidesProgress:true,spaceBetween:3});this.carousel=new s(".preview",{observer:true,observeParents:true,spaceBetween:30,grabCursor:true,autoHeight:true,thumbs:{swiper:this.thumbs}})};t.prototype.render=function(){var t=this;return[i("div",{class:"swiper-container preview"},i("div",{class:"swiper-wrapper"},o.get("images").map((function(e,r){return i("div",{class:"swiper-slide"},i("canvas",{width:e.preview.width,height:e.preview.height}),i("ks-img",{contained:true,center:true,src:e.preview.url,width:e.preview.width,height:e.preview.height,onClick:function(){return t.lightbox.show(r)}}))})))),o.get("images").length>1?i("div",{class:"swiper-container thumb"},i("div",{class:"swiper-wrapper"},o.get("images").map((function(t){return i("div",{class:"swiper-slide"},i("ks-img",{contained:true,center:true,src:t.thumb.url,width:t.thumb.width,height:t.thumb.height}))})))):null,i("ks-lightbox",{data:o.get("images")})]};Object.defineProperty(t.prototype,"root",{get:function(){return r(this)},enumerable:false,configurable:true});return t}());u.style=a}}}));