import{r as i,h as e,g as t}from"./index-4dbd872e.js";import{S as o,T as s}from"./thumbs-00422a82.js";import{P as r}from"./pagination-759b5673.js";o.use([r,s]);const n=class{constructor(e){i(this,e)}componentDidRender(){this.overlay=this.root.querySelector("ks-overlay")}async show(i=0){this.overlay.show().then((()=>{var e;null==this.carousel&&(this.thumbs=new o(".lightbox-thumb",{observer:!0,observeParents:!0,grabCursor:!0,slidesPerView:"auto",centerInsufficientSlides:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,spaceBetween:10,resistanceRatio:.7}),this.carousel=new o(".lightbox-full",{observer:!0,observeParents:!0,centeredSlides:!0,slidesPerView:"auto",spaceBetween:20,preventInteractionOnTransition:!0,thumbs:{swiper:this.thumbs},pagination:{el:".swiper-pagination"}})),null===(e=this.carousel)||void 0===e||e.slideTo(i,0,!1)}))}async hide(){this.overlay.hide()}render(){return e("ks-overlay",{dark:!0},e("div",{class:"content"},e("div",{class:"swiper-container lightbox-full"},e("div",{class:"swiper-wrapper"},this.data.map((i=>e("div",{class:"swiper-slide"},e("ks-img",{contained:!0,center:!0,target:".lightbox-full",src:i.full.url,width:i.full.width,height:i.full.height}))))),e("div",{class:"swiper-pagination"})),e("div",{class:"swiper-container lightbox-thumb"},e("div",{class:"swiper-wrapper"},this.data.map((i=>e("div",{class:"swiper-slide"},e("ks-img",{contained:!0,center:!0,src:i.thumb.url,width:i.thumb.width,height:i.thumb.height}))))))),e("div",{class:"close",onClick:()=>this.overlay.hide()},e("ks-icon",{name:"x",size:1.2})))}get root(){return t(this)}};n.style="ks-lightbox{display:block}ks-lightbox .content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;padding:10px;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ks-lightbox .close{position:absolute;top:15px;right:15px;-webkit-backdrop-filter:var(--lightbox-element-filter);backdrop-filter:var(--lightbox-element-filter);background-color:var(--lightbox-element-color);border-radius:100%;padding:5px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000000;-webkit-transition:var(--transition-background-color),\n                -webkit-transform 0.1s ease;transition:var(--transition-background-color),\n                -webkit-transform 0.1s ease;transition:var(--transition-background-color),\n                transform 0.1s ease;transition:var(--transition-background-color),\n                transform 0.1s ease,\n                -webkit-transform 0.1s ease}ks-lightbox .close:hover{background-color:var(--lightbox-element-color-hover);-webkit-transform:scale(1.05, 1.05);-ms-transform:scale(1.05, 1.05);transform:scale(1.05, 1.05)}ks-lightbox .close:active{background-color:var(--lightbox-element-color-active);-webkit-transform:scale(0.95, 0.95);-ms-transform:scale(0.95, 0.95);transform:scale(0.95, 0.95)}ks-lightbox .lightbox-full{width:100%;-webkit-box-flex:1;-ms-flex:1;flex:1}ks-lightbox .lightbox-thumb{margin-top:10px;width:100%}ks-lightbox .lightbox-thumb .swiper-slide{height:70px;width:70px;overflow:hidden;opacity:0.6;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-lightbox .lightbox-thumb .swiper-slide:hover{opacity:0.8}ks-lightbox .lightbox-thumb .swiper-slide-thumb-active{opacity:1 !important}ks-lightbox .swiper-pagination{display:none}ks-lightbox .swiper-pagination{bottom:0px !important;padding:5px;-webkit-backdrop-filter:var(--lightbox-element-filter);backdrop-filter:var(--lightbox-element-filter);background-color:var(--lightbox-element-color)}ks-lightbox .swiper-pagination-bullet{background-color:#ffffff}ks-lightbox .swiper-pagination-bullet-active{background-color:#ffffff}@media only screen and (max-width: 720px){ks-lightbox .content{padding:0}ks-lightbox .swiper-pagination{display:block}ks-lightbox .lightbox-thumb{display:none !important}ks-lightbox .lightbox-full .swiper-slide ks-img img{border-radius:0px}}";export{n as ks_lightbox}