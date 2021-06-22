System.register(["./index-f51f045b.system.js","./deferredpromise-f70f841f.system.js","./core-class-355ca91c.system.js","./pagination-2ea19199.system.js"],(function(t){"use strict";var e,a,i,n,o,r,s,p,l,u;return{setters:[function(t){e=t.r;a=t.h;i=t.H;n=t.g},function(t){o=t.w},function(t){r=t.b;s=t.g;p=t.n;l=t.S},function(t){u=t.P}],execute:function(){var d="ks-banner{display:block;width:100%;max-height:550px;height:100%}ks-banner.swiper-slide{height:auto}ks-banner>a{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;max-height:550px}ks-product-images a{position:relative}ks-product-images a canvas{max-width:100%;max-height:550px}ks-banner a ks-img{position:absolute;top:0;left:0;width:100%;max-height:550px;margin:auto}";var c=t("ks_banner",function(){function t(t){e(this,t)}t.prototype.render=function(){return a(i,{class:"swiper-slide",style:{backgroundColor:this.color}},a("a",{href:this.link},a("canvas",{width:this.width,height:this.height}),a("ks-img",{vertical:true,sync:this.sync,src:this.image,alt:this.name,width:this.width,height:this.height})))};return t}());c.style=d;function f(){f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a){if(Object.prototype.hasOwnProperty.call(a,i)){t[i]=a[i]}}}return t};return f.apply(this,arguments)}var m={run:function t(){var e=this;var a=e.slides.eq(e.activeIndex);var i=e.params.autoplay.delay;if(a.attr("data-swiper-autoplay")){i=a.attr("data-swiper-autoplay")||e.params.autoplay.delay}clearTimeout(e.autoplay.timeout);e.autoplay.timeout=p((function(){var t;if(e.params.autoplay.reverseDirection){if(e.params.loop){e.loopFix();t=e.slidePrev(e.params.speed,true,true);e.emit("autoplay")}else if(!e.isBeginning){t=e.slidePrev(e.params.speed,true,true);e.emit("autoplay")}else if(!e.params.autoplay.stopOnLastSlide){t=e.slideTo(e.slides.length-1,e.params.speed,true,true);e.emit("autoplay")}else{e.autoplay.stop()}}else if(e.params.loop){e.loopFix();t=e.slideNext(e.params.speed,true,true);e.emit("autoplay")}else if(!e.isEnd){t=e.slideNext(e.params.speed,true,true);e.emit("autoplay")}else if(!e.params.autoplay.stopOnLastSlide){t=e.slideTo(0,e.params.speed,true,true);e.emit("autoplay")}else{e.autoplay.stop()}if(e.params.cssMode&&e.autoplay.running)e.autoplay.run();else if(t===false){e.autoplay.run()}}),i)},start:function t(){var e=this;if(typeof e.autoplay.timeout!=="undefined")return false;if(e.autoplay.running)return false;e.autoplay.running=true;e.emit("autoplayStart");e.autoplay.run();return true},stop:function t(){var e=this;if(!e.autoplay.running)return false;if(typeof e.autoplay.timeout==="undefined")return false;if(e.autoplay.timeout){clearTimeout(e.autoplay.timeout);e.autoplay.timeout=undefined}e.autoplay.running=false;e.emit("autoplayStop");return true},pause:function t(e){var a=this;if(!a.autoplay.running)return;if(a.autoplay.paused)return;if(a.autoplay.timeout)clearTimeout(a.autoplay.timeout);a.autoplay.paused=true;if(e===0||!a.params.autoplay.waitForTransition){a.autoplay.paused=false;a.autoplay.run()}else{a.$wrapperEl[0].addEventListener("transitionend",a.autoplay.onTransitionEnd);a.$wrapperEl[0].addEventListener("webkitTransitionEnd",a.autoplay.onTransitionEnd)}},onVisibilityChange:function t(){var e=this;var a=s();if(a.visibilityState==="hidden"&&e.autoplay.running){e.autoplay.pause()}if(a.visibilityState==="visible"&&e.autoplay.paused){e.autoplay.run();e.autoplay.paused=false}},onTransitionEnd:function t(e){var a=this;if(!a||a.destroyed||!a.$wrapperEl)return;if(e.target!==a.$wrapperEl[0])return;a.$wrapperEl[0].removeEventListener("transitionend",a.autoplay.onTransitionEnd);a.$wrapperEl[0].removeEventListener("webkitTransitionEnd",a.autoplay.onTransitionEnd);a.autoplay.paused=false;if(!a.autoplay.running){a.autoplay.stop()}else{a.autoplay.run()}}};var h={name:"autoplay",params:{autoplay:{enabled:false,delay:3e3,waitForTransition:true,disableOnInteraction:true,stopOnLastSlide:false,reverseDirection:false}},create:function t(){var e=this;r(e,{autoplay:f({},m,{running:false,paused:false})})},on:{init:function t(e){if(e.params.autoplay.enabled){e.autoplay.start();var a=s();a.addEventListener("visibilitychange",e.autoplay.onVisibilityChange)}},beforeTransitionStart:function t(e,a,i){if(e.autoplay.running){if(i||!e.params.autoplay.disableOnInteraction){e.autoplay.pause(a)}else{e.autoplay.stop()}}},sliderFirstMove:function t(e){if(e.autoplay.running){if(e.params.autoplay.disableOnInteraction){e.autoplay.stop()}else{e.autoplay.pause()}}},touchEnd:function t(e){if(e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction){e.autoplay.run()}},destroy:function t(e){if(e.autoplay.running){e.autoplay.stop()}var a=s();a.removeEventListener("visibilitychange",e.autoplay.onVisibilityChange)}}};var y="ks-banner-container{display:block;position:relative}ks-banner-container .swiper-wrapper{max-height:550px;height:100%}ks-banner-container a{position:relative}ks-banner-container .pagination{position:absolute;left:0;right:0;bottom:-35px;height:35px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;opacity:0;-webkit-transition:opacity 0.5s ease;transition:opacity 0.5s ease}ks-banner-container[loaded] .pagination{opacity:1}ks-banner-container .swiper-pagination{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;padding:10px;background-color:#dcdcdc}ks-banner-container .swiper-pagination-bullet{background-color:rgba(29, 29, 29, 0);border:rgb(133, 133, 133) 1px solid;height:10px;width:10px;margin:0 5px;opacity:1;-webkit-transition:background-color 0.3s ease,\n                border 0.3s ease;transition:background-color 0.3s ease,\n                border 0.3s ease}ks-banner-container .swiper-pagination-bullet:hover{background-color:rgba(29, 29, 29, 0.192)}ks-banner-container .swiper-pagination-bullet-active{background-color:rgb(29, 29, 29) !important;border:rgba(133, 133, 133, 0) 1px solid;opacity:1}ks-banner-container .pagination svg{fill:#dcdcdc}@media (max-width: 638px){ks-banner-container .pagination{display:none}}";l.use([u,h]);var g=t("ks_banner_container",function(){function t(t){e(this,t);this.delay=0;this.autoplay=5e3;this.window=false;this.rendered=false;this.loaded=false}t.prototype.componentDidLoad=function(){var t=this;o.promise.then((function(){return t.initialize()}))};t.prototype.initialize=function(){var t=this;setTimeout((function(){t.carousel=new l("ks-banner-container .swiper-container",{observer:true,observeParents:true,centeredSlides:true,slidesPerView:"auto",preventInteractionOnTransition:true,grabCursor:true,autoplay:{delay:t.autoplay},pagination:{el:".swiper-pagination",clickable:true}});t.loaded=true}),this.delay)};t.prototype.render=function(){return a(i,null,a("div",{class:"swiper-container"},a("div",{class:"swiper-wrapper"},a("slot",null))),a("div",{class:"pagination"},a("svg",{height:"36",width:"36"},a("polygon",{points:"0,0 36,0 36,36"})),a("div",{class:"swiper-pagination"}),a("svg",{height:"36",width:"36"},a("polygon",{points:"0,0 36,0 0,36"}))))};Object.defineProperty(t.prototype,"root",{get:function(){return n(this)},enumerable:false,configurable:true});return t}());g.style=y;var x="ks-featured{display:block;position:relative}ks-featured a{display:block;opacity:1;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-featured a:hover{display:block;opacity:0.97}ks-featured a:active{display:block;opacity:0.92}";var b=t("ks_featured",function(){function t(t){e(this,t);this.color="#0f0f0f"}t.prototype.render=function(){return a("a",{href:this.link,style:{backgroundColor:this.color}},a("ks-img",{src:this.image,alt:this.alt,width:this.width,height:this.height,target:"ks-featured"}))};return t}());b.style=x;var k="ks-featured-container{display:-webkit-box;display:-ms-flexbox;display:flex;max-width:1200px;width:100%;margin:auto;min-height:10px}ks-featured-container>.left{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-right:5px}ks-featured-container>.right{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-left:5px}ks-featured-container>div>*:not(:last-child){margin-bottom:10px}@media (max-width: 840px){ks-featured-container{display:block}ks-featured-container>div:first-child>*{margin-bottom:10px}}";var v=t("ks_featured_container",function(){function t(t){e(this,t)}t.prototype.render=function(){return[a("div",{class:"left"}," ",a("slot",{name:"left"})," "),a("div",{class:"right"}," ",a("slot",{name:"right"})," ")]};return t}());v.style=k;var w="ks-homepage-info{display:block;padding:60px 20px 30px 20px;background-image:linear-gradient(19deg, \n        rgb(226, 226, 226) 0%, \n        rgb(245, 245, 245) 100%\n    )}ks-homepage-info .main{max-width:800px;margin:0px auto 30px auto;text-align:center}ks-homepage-info .more{max-width:1200px;margin:auto;display:-webkit-box;display:-ms-flexbox;display:flex;text-align:justify}ks-homepage-info .more>div{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;margin:0px 20px}ks-homepage-info h1,h2{font-family:Lato, sans-serif !important;font-weight:700 !important;text-align:center}ks-homepage-info h1{text-transform:uppercase}ks-homepage-info h2{font-size:1.2rem;line-height:1.4}ks-homepage-info p{font-size:0.875rem;line-height:1.5}ks-homepage-info ks-button{display:none;margin:10px auto;max-width:400px}@media (max-width: 1000px){ks-homepage-info .more{display:block;max-width:600px;text-align:center}}@media (max-width: 800px){ks-homepage-info ks-button{display:block}ks-homepage-info .more{display:none}ks-homepage-info[expanded] .more{display:block}}@media (max-width: 639px){ks-homepage-info{padding:50px 20px 40px 20px}}@media (max-width: 400px){ks-homepage-info{padding:40px 20px 40px 20px}}";var E=t("ks_homepage_info",function(){function t(t){e(this,t);this.expanded=false}t.prototype.render=function(){var t=this;return[a("div",{class:"main"},a("slot",{name:"mainHeading"}),a("slot",{name:"mainContent"})),a("div",{class:"more"},a("div",null,a("slot",{name:"firstHeading"}),a("slot",{name:"firstContent"})),a("div",null,a("slot",{name:"secondHeading"}),a("slot",{name:"secondContent"})),a("div",null,a("slot",{name:"thirdHeading"}),a("slot",{name:"thirdContent"}))),a("ks-button",{border:true,round:true,name:this.expanded?"Zwiń":"Rozwiń",onClick:function(){return t.expanded=!t.expanded}})]};return t}());E.style=w;var T="ks-homepage-products{display:block;margin-top:20px}ks-homepage-products .buttons{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:20px}ks-homepage-products .buttons>*{max-width:200px;margin:0px 2px}ks-homepage-products .buttons>*>*{border:none !important}ks-homepage-products .content{position:relative;margin:20px auto 30px auto}ks-homepage-products .content>*{position:relative;top:0px;left:0px;right:0px;-webkit-animation:homepage-products-swipe-in 0.6s;animation:homepage-products-swipe-in 0.6s;z-index:2;opacity:1}ks-homepage-products:not([active='0']) .content>*:nth-child(1),ks-homepage-products:not([active='1']) .content>*:nth-child(2),ks-homepage-products:not([active='2']) .content>*:nth-child(3){-webkit-animation:fade-out 0.3s;animation:fade-out 0.3s;opacity:0;top:15px;z-index:1;position:absolute}@media (max-width: 640px){ks-homepage-products .buttons>*{max-width:150px}ks-homepage-products .buttons>*>*{font-size:14px;padding:10px 15px}}@-webkit-keyframes homepage-products-swipe-in{0%{-webkit-transform:translateY(-15px);transform:translateY(-15px);opacity:0}50%{-webkit-transform:translateY(-15px);transform:translateY(-15px);opacity:0}100%{-webkit-transform:translateY(0px);transform:translateY(0px);opacity:1}}@keyframes homepage-products-swipe-in{0%{-webkit-transform:translateY(-15px);transform:translateY(-15px);opacity:0}50%{-webkit-transform:translateY(-15px);transform:translateY(-15px);opacity:0}100%{-webkit-transform:translateY(0px);transform:translateY(0px);opacity:1}}";var j=t("ks_homepage_products",function(){function t(t){var i=this;e(this,t);this.active=0;this.Button=function(t){var e=t.index,n=t.name;return a("ks-button",{round:true,name:n,border:i.active!=e,transitionless:i.active==e,onClick:function(){return i.active=e}})}}t.prototype.render=function(){return[a("div",{class:"buttons"},a(this.Button,{index:0,name:"Promocje"}),a(this.Button,{index:1,name:"Popularne"}),a(this.Button,{index:2,name:"Nowości"})),a("div",{class:"content"},a("slot",null))]};return t}());j.style=T}}}));