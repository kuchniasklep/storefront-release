import{r as registerInstance,h,g as getElement}from"./index-22b73bd9.js";var ProductYoutube=function(){function e(e){registerInstance(this,e);this.videoId="";this.active=false}e.prototype.componentDidLoad=function(){var e=this;var t=function(t){for(var r=0,o=t;r<o.length;r++){var n=o[r];if(n.isIntersecting){if(e.observer){e.observer.disconnect()}e.active=true}}};addEventListener("load",(function(){e.observer=new IntersectionObserver(t,{rootMargin:"500px"});e.observer.observe(e.root)}))};e.prototype.render=function(){return this.active?h("iframe",{src:"https://www.youtube-nocookie.com/embed/"+this.videoId+"?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1",width:"1280",height:"720",frameborder:"0",allowFullScreen:true,"uk-responsive":true}):null};Object.defineProperty(e.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();export{ProductYoutube as ks_product_youtube};