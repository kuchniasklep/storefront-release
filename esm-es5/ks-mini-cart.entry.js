import{r as registerInstance,h,g as getElement}from"./index-f323e182.js";var miniCartCss="ks-mini-cart{display:block;position:-webkit-sticky;position:sticky;top:0;float:right;width:400px;padding:5px 20px;color:#151515}ks-mini-cart .arrow{position:relative;left:300px;width:0;height:0;border-left:15px solid transparent;border-right:15px solid transparent;border-bottom:15px solid #ffffff}ks-mini-cart .content{padding:30px;background-color:#ffffff;-webkit-box-shadow:0 4px 4px 0px rgba(0, 0, 0, 0.281);box-shadow:0 4px 4px 0px rgba(0, 0, 0, 0.281)}";var MiniCart=function(){function t(t){registerInstance(this,t)}t.prototype.componentDidLoad=function(){this.PageHeight()};t.prototype.PageHeight=function(){var t=document.querySelector("ks-navbar-panel .panel");if(t){t.style.height=document.documentElement.offsetHeight-this.root.offsetHeight+"px";console.log(t.style.height)}};t.prototype.resizeHandler=function(){this.PageHeight()};t.prototype.render=function(){return[h("div",{class:"arrow"}),h("div",{class:"content"},"Test")]};Object.defineProperty(t.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();MiniCart.style=miniCartCss;export{MiniCart as ks_mini_cart};