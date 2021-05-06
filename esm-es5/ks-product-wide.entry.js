import{r as registerInstance,h,g as getElement}from"./index-4f41a852.js";var ProductWide=function(){function t(t){registerInstance(this,t);this.unavailable=false;this.cartLoading=false;this.mobile=false}t.prototype.componentDidLoad=function(){this.root.style.display="block"};t.prototype.CartHandler=function(t){if(!t)this.cartLoading=false};t.prototype.resizeHandler=function(){if(window.innerWidth<=700)this.mobile=true;else this.mobile=false};t.prototype.componentWillLoad=function(){this.resizeHandler()};t.prototype.render=function(){var t;if(this.currentPrice)t=this.currentPrice.replace(".",",")+" zł";var e;if(this.previousPrice)e=this.previousPrice.replace(".",",")+" zł";return h("ks-flex",{between:true,middle:true,column:this.mobile?true:false,style:this.mobile?{display:"block",marginBottom:"20px"}:{display:"block"}},h("a",{href:this.link},h("ks-image",{src:this.img,width:"200",height:"200",contain:true,alt:"zdjęcie produktu"})),h("a",{href:this.link,class:"uk-flex-1 uk-padding-small uk-link-reset "+(this.mobile?"uk-text-center":"")},h("span",{class:"uk-h3 uk-margin-small-bottom"},this.name),h("br",null),this.unavailable?h("span",{class:"uk-h5 uk-text-normal uk-text-danger"},"Produkt niedostępny"):null,h("div",{class:"uk-margin-small-top"},h("span",{class:"uk-h4 uk-text-bold uk-text-normal uk-text-danger"},t),this.previousPrice?h("span",{class:"uk-h4 uk-text-muted uk-margin-left"},h("s",null,e)):null),h("p",{class:"uk-text-small uk-visible@m"},h("slot",null))),h("div",{class:"uk-flex "+(this.mobile?"uk-width-1-1":"uk-flex-column")},h("ks-button-fav",{subtract:true,padding:true,expand:true,"product-id":this.productId}),this.unavailable?h("ks-button-cart",{icon:true,padding:true,expand:true,disabled:true}):h("ks-button-cart",{icon:true,padding:true,expand:true,"product-id":this.productId,name:this.name})))};Object.defineProperty(t.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();export{ProductWide as ks_product_wide};