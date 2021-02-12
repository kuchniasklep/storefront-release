import{r as i,c as t,h as s,g as h}from"./index-7821af79.js";import{w as e}from"./deferredpromise-0f64146f.js";const a=class{constructor(s){i(this,s),this.lazyLoaded=t(this,"lazyLoaded",7),this.sync=!1,this.loaded=!1}loadHandler(i){i.target instanceof HTMLElement&&!i.target.getAttribute("src").includes("data:image")&&(this.loaded=!0,this.lazyLoaded.emit())}srcListener(){const i=this.root.querySelector("img");i.removeAttribute("src"),i.setAttribute("src",this.src),setTimeout((()=>{i.complete||(this.loaded=!1)}),200)}componentDidLoad(){this.sync||e.promise.then((()=>this.initializeObserver()))}initializeObserver(){this.image=this.root.querySelector("img");const i=this.target?this.root.closest(this.target):this.root.parentElement;this.image&&(this.observer=new IntersectionObserver((i=>{for(const t of i)t.isIntersecting&&(this.observer&&this.observer.disconnect(),this.image.getAttribute("data-src")&&(this.image.setAttribute("src",this.image.getAttribute("data-src")),this.image.removeAttribute("data-src")))}),{rootMargin:this.observerMargin}),this.observer.observe(i))}render(){const i=this.loaded?"":"loading";return this.sync?s("img",{src:this.src,alt:this.alt,width:this.width,height:this.height}):[this.loaded?null:s("ks-loader",{dark:!0}),this.loaded?null:s("canvas",{width:this.width,height:this.height}),s("img",{class:i,alt:this.alt,onLoad:i=>this.loadHandler(i),"data-src":this.src,width:this.width,height:this.height})]}get root(){return h(this)}static get watchers(){return{src:["srcListener"]}}};a.style='ks-img2{display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;max-height:inherit;max-width:inherit;height:100%}ks-img2 img{display:inline-block;width:auto;height:auto;max-width:100%;max-height:100%;opacity:1;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-img2[src*=".svg"] img{display:inline-block;height:100%;width:100%;max-width:inherit;max-height:inherit;overflow:visible;opacity:1;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-img2 img.loading{opacity:0}';export{a as ks_img2}