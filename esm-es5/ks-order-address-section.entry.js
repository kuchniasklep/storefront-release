import{r as registerInstance,h,g as getElement}from"./index-22b73bd9.js";var OrderAddressSection=function(){function e(e){registerInstance(this,e);this.hideOnMobile=false;this.mobile=false}e.prototype.resizeHandler=function(){this.mobile=window.innerWidth<959?true:false};e.prototype.componentDidLoad=function(){this.root.style.display="block";this.resizeHandler()};e.prototype.render=function(){var e=h("span",{class:"uk-text-bold ks-text-decorated",style:{fontSize:"22px",textTransform:"uppercase"}},this.heading);if(this.mobile&&this.hideOnMobile)return h("ul",{"uk-accordion":true},h("li",null,h("a",{class:"uk-accordion-title",href:"#"},e),h("div",{class:"uk-accordion-content"},h("slot",null),h("ks-order-button",{mobile:true,wide:true,href:this.link},h("span",null,"Edytuj dane")))));return[h("ks-order-heading",{heading:this.heading,link:this.link}),h("slot",null)]};Object.defineProperty(e.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();export{OrderAddressSection as ks_order_address_section};