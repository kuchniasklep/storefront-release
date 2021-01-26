import{r as registerInstance,h,g as getElement}from"./index-74ff0cef.js";import"./index-b4f14e2e.js";import{S as Swiper}from"./core-class-8ec5acbb.js";import{T as Thumbs}from"./thumbs-2713736d.js";import{s as store}from"./product-store-44debc87.js";var productImagesCss='ks-product-images{display:block;margin-right:30px}ks-product-images .swiper-slide{position:relative}ks-product-images .swiper-slide canvas{max-width:100%;max-height:500px}ks-product-images .preview ks-img{position:absolute;top:0;width:100%;max-height:500px;margin:auto}ks-product-images .thumb{margin-top:20px;position:relative}ks-product-images .thumb::after{content:"";position:absolute;top:0;bottom:0;right:0;left:-30px;background:-webkit-gradient(linear, left top, right top, from(rgba(255,255,255,0)), color-stop(85%, rgba(255,255,255,0)), to(rgba(255,255,255,1)));background:linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 85%, rgba(255,255,255,1) 100%);z-index:2;pointer-events:none}ks-product-images .thumb .swiper-slide{width:70px;height:70px;opacity:0.4;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-product-images .thumb .swiper-slide-thumb-active{opacity:1}@media only screen and (max-width: 959px){ks-product-images{margin-right:0px;margin-top:30px}ks-product-images .thumb{margin-bottom:0px}}@media only screen and (max-width: 460px){ks-product-images .swiper-slide canvas{max-height:300px}ks-product-images .preview ks-img{max-height:300px}}';Swiper.use([Thumbs]);var ProductImages=function(){function e(e){registerInstance(this,e)}e.prototype.componentDidRender=function(){this.lightbox=this.root.querySelector("ks-lightbox");this.thumbs=new Swiper(".thumb",{observer:true,observeParents:true,grabCursor:true,slidesPerView:"auto",preventInteractionOnTransition:true,centerInsufficientSlides:true,watchSlidesVisibility:true,watchSlidesProgress:true,spaceBetween:3});this.carousel=new Swiper(".preview",{observer:true,observeParents:true,spaceBetween:30,grabCursor:true,autoHeight:true,thumbs:{swiper:this.thumbs}})};e.prototype.render=function(){var e=this;return[h("div",{class:"swiper-container preview"},h("div",{class:"swiper-wrapper"},store.get("images").map((function(t,r){return h("div",{class:"swiper-slide"},h("canvas",{width:t.preview.width,height:t.preview.height}),h("ks-img",{contained:true,center:true,sync:r==0,src:t.preview.url,width:t.preview.width,height:t.preview.height,onClick:function(){return e.lightbox.show(r)}}))})))),store.get("images").length>1?h("div",{class:"swiper-container thumb"},h("div",{class:"swiper-wrapper"},store.get("images").map((function(e){return h("div",{class:"swiper-slide"},h("ks-img",{contained:true,center:true,src:e.thumb.url,width:e.thumb.width,height:e.thumb.height}))})))):null,h("ks-lightbox",{data:store.get("images")})]};Object.defineProperty(e.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();ProductImages.style=productImagesCss;export{ProductImages as ks_product_images};