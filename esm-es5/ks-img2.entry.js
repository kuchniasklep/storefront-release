import{r as registerInstance,c as createEvent,h,g as getElement}from"./index-46fe532f.js";import{w as window_load}from"./deferredpromise-0f64146f.js";var img2Css='ks-img2{display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;max-height:inherit;max-width:inherit;height:100%}ks-img2 img{display:inline-block;width:auto;height:auto;max-width:100%;max-height:100%;opacity:1;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-img2[src*=".svg"] img{display:inline-block;height:100%;width:100%;max-width:inherit;max-height:inherit;overflow:visible;opacity:1;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-img2 img.loading{opacity:0}';var Img2=function(){function t(t){registerInstance(this,t);this.lazyLoaded=createEvent(this,"lazyLoaded",7);this.sync=false;this.loaded=false}t.prototype.loadHandler=function(t){if(t.target instanceof HTMLElement&&!t.target.getAttribute("src").includes("data:image")){this.loaded=true;this.lazyLoaded.emit()}};t.prototype.srcListener=function(){var t=this;var e=this.root.querySelector("img");e.removeAttribute("src");e.setAttribute("src",this.src);setTimeout((function(){if(!e.complete){t.loaded=false}}),200)};t.prototype.componentDidLoad=function(){var t=this;if(!this.sync)window_load.promise.then((function(){return t.initializeObserver()}))};t.prototype.initializeObserver=function(){var t=this;this.image=this.root.querySelector("img");var e=this.target?this.root.closest(this.target):this.root.parentElement;var i=function(e){for(var i=0,r=e;i<r.length;i++){var s=r[i];if(s.isIntersecting){if(t.observer){t.observer.disconnect()}if(t.image.getAttribute("data-src")){t.image.setAttribute("src",t.image.getAttribute("data-src"));t.image.removeAttribute("data-src")}}}};if(this.image){this.observer=new IntersectionObserver(i,{rootMargin:this.observerMargin});this.observer.observe(e)}};t.prototype.render=function(){var t=this;var e=this.loaded?"":"loading";if(this.sync)return h("img",{src:this.src,alt:this.alt,width:this.width,height:this.height});return[!this.loaded?h("ks-loader",{dark:true}):null,!this.loaded?h("canvas",{width:this.width,height:this.height}):null,h("img",{class:e,alt:this.alt,onLoad:function(e){return t.loadHandler(e)},"data-src":this.src,width:this.width,height:this.height})]};Object.defineProperty(t.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{src:["srcListener"]}},enumerable:false,configurable:true});return t}();Img2.style=img2Css;export{Img2 as ks_img2};