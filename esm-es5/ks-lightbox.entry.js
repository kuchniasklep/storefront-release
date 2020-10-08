var __awaiter=this&&this.__awaiter||function(e,t,i,r){function o(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,n){function s(e){try{l(r.next(e))}catch(t){n(t)}}function a(e){try{l(r["throw"](e))}catch(t){n(t)}}function l(e){e.done?i(e.value):o(e.value).then(s,a)}l((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var i={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},r,o,n,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(e){return function(t){return l([e,t])}}function l(s){if(r)throw new TypeError("Generator is already executing.");while(i)try{if(r=1,o&&(n=s[0]&2?o["return"]:s[0]?o["throw"]||((n=o["return"])&&n.call(o),0):o.next)&&!(n=n.call(o,s[1])).done)return n;if(o=0,n)s=[s[0]&2,n.value];switch(s[0]){case 0:case 1:n=s;break;case 4:i.label++;return{value:s[1],done:false};case 5:i.label++;o=s[1];s=[0];continue;case 7:s=i.ops.pop();i.trys.pop();continue;default:if(!(n=i.trys,n=n.length>0&&n[n.length-1])&&(s[0]===6||s[0]===2)){i=0;continue}if(s[0]===3&&(!n||s[1]>n[0]&&s[1]<n[3])){i.label=s[1];break}if(s[0]===6&&i.label<n[1]){i.label=n[1];n=s;break}if(n&&i.label<n[2]){i.label=n[2];i.ops.push(s);break}if(n[2])i.ops.pop();i.trys.pop();continue}s=t.call(e,i)}catch(a){s=[6,a];o=0}finally{r=n=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};import{r as registerInstance,h,g as getElement}from"./index-22b73bd9.js";import{S as Swiper,T as Thumbs}from"./thumbs-5d6990a9.js";import{P as Pagination}from"./pagination-443e2188.js";var lightboxCss="ks-lightbox{display:block}ks-lightbox .content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;padding:10px;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ks-lightbox .close{position:absolute;top:15px;right:15px;-webkit-backdrop-filter:var(--lightbox-element-filter);backdrop-filter:var(--lightbox-element-filter);background-color:var(--lightbox-element-color);border-radius:100%;padding:5px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000000;-webkit-transition:var(--transition-background-color),\n                -webkit-transform 0.1s ease;transition:var(--transition-background-color),\n                -webkit-transform 0.1s ease;transition:var(--transition-background-color),\n                transform 0.1s ease;transition:var(--transition-background-color),\n                transform 0.1s ease,\n                -webkit-transform 0.1s ease}ks-lightbox .close:hover{background-color:var(--lightbox-element-color-hover);-webkit-transform:scale(1.05, 1.05);-ms-transform:scale(1.05, 1.05);transform:scale(1.05, 1.05)}ks-lightbox .close:active{background-color:var(--lightbox-element-color-active);-webkit-transform:scale(0.95, 0.95);-ms-transform:scale(0.95, 0.95);transform:scale(0.95, 0.95)}ks-lightbox .lightbox-full{width:100%;-webkit-box-flex:1;-ms-flex:1;flex:1}ks-lightbox .lightbox-thumb{margin-top:10px;width:100%}ks-lightbox .lightbox-thumb .swiper-slide{height:70px;width:70px;overflow:hidden;opacity:0.6;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-lightbox .lightbox-thumb .swiper-slide:hover{opacity:0.8}ks-lightbox .lightbox-thumb .swiper-slide-thumb-active{opacity:1 !important}ks-lightbox .swiper-pagination{display:none}ks-lightbox .swiper-pagination{bottom:0px !important;padding:5px;-webkit-backdrop-filter:var(--lightbox-element-filter);backdrop-filter:var(--lightbox-element-filter);background-color:var(--lightbox-element-color)}ks-lightbox .swiper-pagination-bullet{background-color:#ffffff}ks-lightbox .swiper-pagination-bullet-active{background-color:#ffffff}@media only screen and (max-width: 720px){ks-lightbox .content{padding:0}ks-lightbox .swiper-pagination{display:block}ks-lightbox .lightbox-thumb{display:none !important}ks-lightbox .lightbox-full .swiper-slide ks-img img{border-radius:0px}}";Swiper.use([Pagination,Thumbs]);var Lightbox=function(){function e(e){registerInstance(this,e)}e.prototype.componentDidRender=function(){this.overlay=this.root.querySelector("ks-overlay")};e.prototype.show=function(e){if(e===void 0){e=0}return __awaiter(this,void 0,void 0,(function(){var t=this;return __generator(this,(function(i){this.overlay.show().then((function(){var i;if(t.carousel==undefined){t.thumbs=new Swiper(".lightbox-thumb",{observer:true,observeParents:true,grabCursor:true,slidesPerView:"auto",centerInsufficientSlides:true,watchSlidesVisibility:true,watchSlidesProgress:true,spaceBetween:10,resistanceRatio:.7});t.carousel=new Swiper(".lightbox-full",{observer:true,observeParents:true,centeredSlides:true,slidesPerView:"auto",spaceBetween:20,preventInteractionOnTransition:true,thumbs:{swiper:t.thumbs},pagination:{el:".swiper-pagination"}})}(i=t.carousel)===null||i===void 0?void 0:i.slideTo(e,0,false)}));return[2]}))}))};e.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.overlay.hide();return[2]}))}))};e.prototype.render=function(){var e=this;return h("ks-overlay",{dark:true},h("div",{class:"content"},h("div",{class:"swiper-container lightbox-full"},h("div",{class:"swiper-wrapper"},this.data.map((function(e){return h("div",{class:"swiper-slide"},h("ks-img",{contained:true,center:true,target:".lightbox-full",src:e.full.url,width:e.full.width,height:e.full.height}))}))),h("div",{class:"swiper-pagination"})),h("div",{class:"swiper-container lightbox-thumb"},h("div",{class:"swiper-wrapper"},this.data.map((function(e){return h("div",{class:"swiper-slide"},h("ks-img",{contained:true,center:true,src:e.thumb.url,width:e.thumb.width,height:e.thumb.height}))}))))),h("div",{class:"close",onClick:function(){return e.overlay.hide()}},h("ks-icon",{name:"x",size:1.2})))};Object.defineProperty(e.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();Lightbox.style=lightboxCss;export{Lightbox as ks_lightbox};