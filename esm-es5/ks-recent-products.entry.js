import{r as registerInstance,h,g as getElement}from"./index-46fe532f.js";var RecentProducts=function(){function t(t){registerInstance(this,t);this.mobile=false}t.prototype.limitItemCount=function(){var t=this.mobile?window.innerWidth-20:this.containter.offsetWidth-20;var e=this.items[0].offsetWidth;var i=Math.floor(t/e);for(var o=0;o<this.items.length;o++){var n=this.items[o];if(o<i)n.style.display="block";else n.style.display="none"}};t.prototype.mobileLayout=function(){if(window.innerWidth<=960)this.mobile=true;else this.mobile=false};t.prototype.componentWillLoad=function(){this.mobileLayout()};t.prototype.componentDidLoad=function(){this.root.style.display="block";this.containter=this.root.querySelector("#ks-recent-products-items");this.items=this.containter.querySelectorAll("ks-recent-card");this.limitItemCount()};t.prototype.handleResize=function(){this.mobileLayout();this.limitItemCount()};t.prototype.render=function(){return h("div",{class:"uk-flex uk-flex-between uk-flex-middle "+(this.mobile?"uk-flex-column":"")},h("div",{class:"uk-flex uk-flex-middle ks-text-decorated",style:{fontSize:"20px",color:"white",padding:"5px 20px"}},"OSTATNIO PRZEGLĄDANE"),h("div",{id:"ks-recent-products-items",class:"uk-overflow-hidden uk-width-1-1 uk-flex-1 uk-flex "+(this.mobile?"uk-flex-center":"uk-flex-right")},h("slot",null)))};Object.defineProperty(t.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();export{RecentProducts as ks_recent_products};