System.register(["./p-781af923.system.js"],(function(t){"use strict";var n,e,s;return{setters:[function(t){n=t.r;e=t.h;s=t.g}],execute:function(){var o="ks-product-comments{display:block}";var i=t("ks_product_comments",function(){function t(t){n(this,t);this.link="";this.message="";this.hiddenComments=false}t.prototype.render=function(){return e("ks-card",null,e("div",{class:"uk-flex uk-flex-middle uk-padding uk-margin-remove"},e("span",{"uk-icon":"icon: comments; ratio: 2.5;",style:{marginRight:"30px",minWidth:"40px"}}),e("p",null,this.message)),e("hr",{class:"uk-margin-remove"}),e("slot",null),e("div",{class:"ks-comments",hidden:true},e("slot",{name:"hidden"})),this.hiddenComments?e("button",{class:"uk-button uk-button-secondary uk-width-expand","uk-toggle":"target: .ks-comments"},e("span",{class:"ks-comments","uk-icon":"icon: chevron-down; ratio: 1.5;"}),e("span",{class:"ks-comments","uk-icon":"icon: chevron-up; ratio: 1.5;",hidden:true})):null,this.link?e("a",{class:"uk-button uk-button-danger uk-width-expand",style:{padding:"5px 0 6px 0"},href:this.link,rel:"nofollow","aria-label":"Napisz recenzję"},e("span",{"uk-icon":"icon: plus-circle; ratio: 1.5;"})):null)};t.prototype.componentDidLoad=function(){var t=this.root.querySelector("div[slot='hidden']");if(t!=null&&t.children.length!=0)this.hiddenComments=true};Object.defineProperty(t.prototype,"root",{get:function(){return s(this)},enumerable:false,configurable:true});return t}());i.style=o}}}));