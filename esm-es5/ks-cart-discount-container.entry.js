import{r as registerInstance,h,g as getElement}from"./index-74ff0cef.js";import{T as Tunnel}from"./cartData-7990ed49.js";var cartDiscountContainerCss="ks-cart-discount-container{display:block;min-height:123px}ks-cart-discount-container>.flex{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}ks-cart-discount-container>.flex>*{width:calc(50% - 4px)}@media only screen and (max-width: 1100px){ks-cart-discount-container>.flex{display:block}ks-cart-discount-container>.flex>*{width:100%;margin-bottom:30px}}";var CartDiscountContainer=function(){function t(t){registerInstance(this,t);this.codeBanner="";this.codePlaceholder="";this.pointsPlaceholder="";this.pointsMessage="";this.loginMessage="";this.infoMessage="";this.noPointsHeading="";this.noPointsMessage="";this.thresholdHeading="";this.thresholdMessage="";this.loginUrl="";this.loggedIn=false;this.disablePoints=false;this.pointsForOrder=0;this.productValue=0;this.points={threshold:0,available:0,value:0}}t.prototype.render=function(){var t=this;if(this.discount){return h("nav",{class:"uk-animation-fade"},h("ks-cart-heading",null,this.discount.heading),h("ks-cart-discount-ticket",{name:this.discount.name,value:this.discount.value,onRemove:function(){return t.DiscountRemove()}}))}var s=this.pointsMessage.replace("{available}",this.points.available.toString()).replace("{value}",this.points.value.toFixed(2)).replace("{points}",this.pointsForOrder.toFixed(0));var i=this.loginMessage.replace("{points}",this.pointsForOrder.toFixed(0));var e=this.noPointsMessage.replace("{points}",this.pointsForOrder.toFixed(0));var n=this.thresholdMessage.replace("{threshold}",this.points.threshold.toFixed(2)).replace("{points}",this.pointsForOrder.toFixed(0));return[h("div",{class:"uk-animation-fade "+(!this.disablePoints?"flex":"")},h("div",null,h("ks-cart-heading",null,"KOD RABATOWY"),h("ks-cart-discount-code",{placeholder:this.codePlaceholder,image:this.codeBanner,onDiscountSubmit:function(s){return t.DiscountCodeAdd(s.detail)}})),!this.disablePoints?h("div",null,h("ks-cart-heading",null,"PUNKTY"),this.loggedIn?this.points.available>0?this.productValue>=this.points.threshold||this.points.threshold==0?h("ks-cart-discount-points",{placeholder:this.pointsPlaceholder,message:s,points:this.points.available,orderPoints:this.pointsForOrder,onDiscountSubmit:function(s){return t.DiscountPointsAdd(s.detail)}}):h("ks-cart-discount-points-message",{heading:this.thresholdHeading,message:n,points:this.pointsForOrder}):h("ks-cart-discount-points-message",{heading:this.noPointsHeading,message:e,points:this.pointsForOrder}):h("ks-cart-discount-points-login",{message:i,points:this.pointsForOrder,"login-url":this.loginUrl})):null),this.infoMessage!=""?h("ks-cart-discount-message",null,h("span",null,this.infoMessage)):null]};Object.defineProperty(t.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();Tunnel.injectProps(CartDiscountContainer,["productValue","points","pointsForOrder","discount","DiscountRemove","DiscountCodeAdd","DiscountPointsAdd"]);CartDiscountContainer.style=cartDiscountContainerCss;export{CartDiscountContainer as ks_cart_discount_container};