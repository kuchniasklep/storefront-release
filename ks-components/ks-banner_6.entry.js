import{r as t,h as e,H as i,g as a}from"./index-1e6d4cbd.js";import{w as n}from"./deferredpromise-0f64146f.js";import{b as s,g as o,n as r,S as p}from"./core-class-f05bf7c2.js";import{P as l}from"./pagination-ca8adc5c.js";const c=class{constructor(e){t(this,e)}render(){return e(i,{class:"swiper-slide",style:{backgroundColor:this.color}},e("a",{href:this.link},e("canvas",{width:this.width,height:this.height}),e("ks-img",{vertical:!0,sync:this.sync,src:this.image,alt:this.name,width:this.width,height:this.height})))}};function d(){return(d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t}).apply(this,arguments)}c.style="ks-banner{display:block;width:100%;max-height:550px;height:100%}ks-banner.swiper-slide{height:auto}ks-banner>a{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;max-height:550px}ks-product-images a{position:relative}ks-product-images a canvas{max-width:100%;max-height:550px}ks-banner a ks-img{position:absolute;top:0;left:0;width:100%;max-height:550px;margin:auto}";var m={run:function(){var t=this,e=t.slides.eq(t.activeIndex),i=t.params.autoplay.delay;e.attr("data-swiper-autoplay")&&(i=e.attr("data-swiper-autoplay")||t.params.autoplay.delay),clearTimeout(t.autoplay.timeout),t.autoplay.timeout=r((function(){var e;t.params.autoplay.reverseDirection?t.params.loop?(t.loopFix(),e=t.slidePrev(t.params.speed,!0,!0),t.emit("autoplay")):t.isBeginning?t.params.autoplay.stopOnLastSlide?t.autoplay.stop():(e=t.slideTo(t.slides.length-1,t.params.speed,!0,!0),t.emit("autoplay")):(e=t.slidePrev(t.params.speed,!0,!0),t.emit("autoplay")):t.params.loop?(t.loopFix(),e=t.slideNext(t.params.speed,!0,!0),t.emit("autoplay")):t.isEnd?t.params.autoplay.stopOnLastSlide?t.autoplay.stop():(e=t.slideTo(0,t.params.speed,!0,!0),t.emit("autoplay")):(e=t.slideNext(t.params.speed,!0,!0),t.emit("autoplay")),(t.params.cssMode&&t.autoplay.running||!1===e)&&t.autoplay.run()}),i)},start:function(){var t=this;return void 0===t.autoplay.timeout&&!t.autoplay.running&&(t.autoplay.running=!0,t.emit("autoplayStart"),t.autoplay.run(),!0)},stop:function(){var t=this;return!!t.autoplay.running&&void 0!==t.autoplay.timeout&&(t.autoplay.timeout&&(clearTimeout(t.autoplay.timeout),t.autoplay.timeout=void 0),t.autoplay.running=!1,t.emit("autoplayStop"),!0)},pause:function(t){var e=this;e.autoplay.running&&(e.autoplay.paused||(e.autoplay.timeout&&clearTimeout(e.autoplay.timeout),e.autoplay.paused=!0,0!==t&&e.params.autoplay.waitForTransition?(e.$wrapperEl[0].addEventListener("transitionend",e.autoplay.onTransitionEnd),e.$wrapperEl[0].addEventListener("webkitTransitionEnd",e.autoplay.onTransitionEnd)):(e.autoplay.paused=!1,e.autoplay.run())))},onVisibilityChange:function(){var t=this,e=o();"hidden"===e.visibilityState&&t.autoplay.running&&t.autoplay.pause(),"visible"===e.visibilityState&&t.autoplay.paused&&(t.autoplay.run(),t.autoplay.paused=!1)},onTransitionEnd:function(t){var e=this;e&&!e.destroyed&&e.$wrapperEl&&t.target===e.$wrapperEl[0]&&(e.$wrapperEl[0].removeEventListener("transitionend",e.autoplay.onTransitionEnd),e.$wrapperEl[0].removeEventListener("webkitTransitionEnd",e.autoplay.onTransitionEnd),e.autoplay.paused=!1,e.autoplay.running?e.autoplay.run():e.autoplay.stop())}};p.use([l,{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create:function(){s(this,{autoplay:d({},m,{running:!1,paused:!1})})},on:{init:function(t){t.params.autoplay.enabled&&(t.autoplay.start(),o().addEventListener("visibilitychange",t.autoplay.onVisibilityChange))},beforeTransitionStart:function(t,e,i){t.autoplay.running&&(i||!t.params.autoplay.disableOnInteraction?t.autoplay.pause(e):t.autoplay.stop())},sliderFirstMove:function(t){t.autoplay.running&&(t.params.autoplay.disableOnInteraction?t.autoplay.stop():t.autoplay.pause())},touchEnd:function(t){t.params.cssMode&&t.autoplay.paused&&!t.params.autoplay.disableOnInteraction&&t.autoplay.run()},destroy:function(t){t.autoplay.running&&t.autoplay.stop(),o().removeEventListener("visibilitychange",t.autoplay.onVisibilityChange)}}}]);const h=class{constructor(e){t(this,e),this.delay=0,this.autoplay=5e3,this.window=!1,this.rendered=!1,this.loaded=!1}componentDidLoad(){n.promise.then((()=>this.initialize()))}initialize(){setTimeout((()=>{this.carousel=new p("ks-banner-container .swiper-container",{observer:!0,observeParents:!0,centeredSlides:!0,slidesPerView:"auto",preventInteractionOnTransition:!0,grabCursor:!0,autoplay:{delay:this.autoplay},pagination:{el:".swiper-pagination",clickable:!0}}),this.loaded=!0}),this.delay)}render(){return e(i,null,e("div",{class:"swiper-container"},e("div",{class:"swiper-wrapper"},e("slot",null))),e("div",{class:"pagination"},e("svg",{height:"36",width:"36"},e("polygon",{points:"0,0 36,0 36,36"})),e("div",{class:"swiper-pagination"}),e("svg",{height:"36",width:"36"},e("polygon",{points:"0,0 36,0 0,36"}))))}get root(){return a(this)}};h.style="ks-banner-container{display:block;position:relative}ks-banner-container .swiper-wrapper{max-height:550px;height:100%}ks-banner-container a{position:relative}ks-banner-container .pagination{position:absolute;left:0;right:0;bottom:-35px;height:35px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;opacity:0;-webkit-transition:opacity 0.5s ease;transition:opacity 0.5s ease}ks-banner-container[loaded] .pagination{opacity:1}ks-banner-container .swiper-pagination{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;padding:10px;background-color:#dcdcdc}ks-banner-container .swiper-pagination-bullet{background-color:rgba(29, 29, 29, 0);border:rgb(133, 133, 133) 1px solid;height:10px;width:10px;margin:0 5px;opacity:1;-webkit-transition:background-color 0.3s ease,\n                border 0.3s ease;transition:background-color 0.3s ease,\n                border 0.3s ease}ks-banner-container .swiper-pagination-bullet:hover{background-color:rgba(29, 29, 29, 0.192)}ks-banner-container .swiper-pagination-bullet-active{background-color:rgb(29, 29, 29) !important;border:rgba(133, 133, 133, 0) 1px solid;opacity:1}ks-banner-container .pagination svg{fill:#dcdcdc}@media (max-width: 638px){ks-banner-container .pagination{display:none}}";const x=class{constructor(e){t(this,e),this.color="#0f0f0f"}render(){return e("a",{href:this.link,style:{backgroundColor:this.color}},e("ks-img",{src:this.image,alt:this.alt,width:this.width,height:this.height,target:"ks-featured"}),e("div",{class:"icon"},e("ks-icon",{name:"link",size:1.1})))}};x.style="ks-featured{display:block;position:relative}ks-featured a{display:block}ks-featured .icon{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100px;height:100px;border-radius:50px;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);color:white;background-color:rgba(0, 0, 0, 0.596);opacity:0;-webkit-transition:opacity 0.3s ease,\n                -webkit-transform 0.1s ease-out;transition:opacity 0.3s ease,\n                -webkit-transform 0.1s ease-out;transition:opacity 0.3s ease,\n                transform 0.1s ease-out;transition:opacity 0.3s ease,\n                transform 0.1s ease-out,\n                -webkit-transform 0.1s ease-out}ks-featured:hover .icon{opacity:1}ks-featured:active .icon{opacity:1;-webkit-transform:translate(-50%, -50%) scale(0.95);-ms-transform:translate(-50%, -50%) scale(0.95);transform:translate(-50%, -50%) scale(0.95)}";const b=class{constructor(e){t(this,e)}render(){return[e("div",{class:"left"}," ",e("slot",{name:"left"})," "),e("div",{class:"right"}," ",e("slot",{name:"right"})," ")]}};b.style="ks-featured-container{display:-webkit-box;display:-ms-flexbox;display:flex;max-width:1200px;width:100%;margin:auto;min-height:10px}ks-featured-container>.left{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-right:5px}ks-featured-container>.right{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-left:5px}ks-featured-container>div>*:not(:last-child){margin-bottom:10px}@media (max-width: 840px){ks-featured-container{display:block}ks-featured-container>div:first-child>*{margin-bottom:10px}}";const u=class{constructor(e){t(this,e),this.expanded=!1}render(){return[e("div",{class:"main"},e("slot",{name:"mainHeading"}),e("slot",{name:"mainContent"})),e("div",{class:"more"},e("div",null,e("slot",{name:"firstHeading"}),e("slot",{name:"firstContent"})),e("div",null,e("slot",{name:"secondHeading"}),e("slot",{name:"secondContent"})),e("div",null,e("slot",{name:"thirdHeading"}),e("slot",{name:"thirdContent"}))),e("ks-button",{border:!0,round:!0,name:this.expanded?"Zwiń":"Rozwiń",onClick:()=>this.expanded=!this.expanded})]}};u.style="ks-homepage-info{display:block;padding:60px 20px 30px 20px;background-image:linear-gradient(19deg, \n        rgb(226, 226, 226) 0%, \n        rgb(245, 245, 245) 100%\n    )}ks-homepage-info .main{max-width:800px;margin:0px auto 30px auto;text-align:center}ks-homepage-info .more{max-width:1200px;margin:auto;display:-webkit-box;display:-ms-flexbox;display:flex;text-align:justify}ks-homepage-info .more>div{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;margin:0px 20px}ks-homepage-info h1,h2{font-family:Lato, sans-serif !important;font-weight:700 !important;text-align:center}ks-homepage-info h1{text-transform:uppercase}ks-homepage-info h2{font-size:1.2rem;line-height:1.4}ks-homepage-info p{font-size:0.875rem;line-height:1.5}ks-homepage-info ks-button{display:none;margin:10px auto;max-width:400px}@media (max-width: 1000px){ks-homepage-info .more{display:block;max-width:600px;text-align:center}}@media (max-width: 800px){ks-homepage-info ks-button{display:block}ks-homepage-info .more{display:none}ks-homepage-info[expanded] .more{display:block}}@media (max-width: 639px){ks-homepage-info{padding:50px 20px 40px 20px}}@media (max-width: 400px){ks-homepage-info{padding:40px 20px 40px 20px}}";const g=class{constructor(i){t(this,i),this.active=0,this.Button=({index:t,name:i})=>e("ks-button",{round:!0,name:i,border:this.active!=t,transitionless:this.active==t,onClick:()=>this.active=t})}render(){return[e("div",{class:"buttons"},e(this.Button,{index:0,name:"Promocje"}),e(this.Button,{index:1,name:"Popularne"}),e(this.Button,{index:2,name:"Nowości"})),e("div",{class:"content"},e("slot",null))]}};g.style="ks-homepage-products{display:block;margin-top:20px}ks-homepage-products .buttons{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:20px}ks-homepage-products .buttons>*{max-width:200px;margin:0px 2px}ks-homepage-products .buttons>*>*{border:none !important}ks-homepage-products .content{position:relative;margin:20px auto 30px auto}ks-homepage-products .content>*{position:relative;top:0px;left:0px;right:0px;-webkit-animation:homepage-products-swipe-in 0.6s;animation:homepage-products-swipe-in 0.6s;z-index:2;opacity:1}ks-homepage-products:not([active='0']) .content>*:nth-child(1),ks-homepage-products:not([active='1']) .content>*:nth-child(2),ks-homepage-products:not([active='2']) .content>*:nth-child(3){-webkit-animation:fade-out 0.3s;animation:fade-out 0.3s;opacity:0;top:15px;z-index:1;position:absolute}@media (max-width: 640px){ks-homepage-products .buttons>*{max-width:150px}ks-homepage-products .buttons>*>*{font-size:14px;padding:10px 15px}}@-webkit-keyframes homepage-products-swipe-in{0%{-webkit-transform:translateY(-15px);transform:translateY(-15px);opacity:0}50%{-webkit-transform:translateY(-15px);transform:translateY(-15px);opacity:0}100%{-webkit-transform:translateY(0px);transform:translateY(0px);opacity:1}}@keyframes homepage-products-swipe-in{0%{-webkit-transform:translateY(-15px);transform:translateY(-15px);opacity:0}50%{-webkit-transform:translateY(-15px);transform:translateY(-15px);opacity:0}100%{-webkit-transform:translateY(0px);transform:translateY(0px);opacity:1}}";export{c as ks_banner,h as ks_banner_container,x as ks_featured,b as ks_featured_container,u as ks_homepage_info,g as ks_homepage_products}