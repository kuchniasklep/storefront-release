System.register(["./p-7597974d.system.js"],(function(e){"use strict";var t,r,o;return{setters:[function(e){t=e.r;r=e.h;o=e.g}],execute:function(){var i="ks-product-youtube{display:block;position:relative;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:56.25%;background-color:black}ks-product-youtube iframe{position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%}";var n=e("ks_product_youtube",function(){function e(e){t(this,e);this.videoId="";this.active=false}e.prototype.componentDidRender=function(){var e=this;this.observer=new IntersectionObserver((function(t){for(var r=0,o=t;r<o.length;r++){var i=o[r];if(i.isIntersecting){e.active=true;if(e.observer)e.observer.disconnect()}}}),{rootMargin:"500px"});this.observer.observe(this.root)};e.prototype.render=function(){return this.active?r("iframe",{width:"1280",height:"720",src:"https://www.youtube.com/embed/"+this.videoId,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:true}):null};Object.defineProperty(e.prototype,"root",{get:function(){return o(this)},enumerable:false,configurable:true});return e}());n.style=i}}}));