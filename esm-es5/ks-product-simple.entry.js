import{r as registerInstance,h,g as getElement}from"./index-2d9093e5.js";var ProductSimple=function(){function t(t){registerInstance(this,t)}t.prototype.componentDidLoad=function(){this.root.style.display="block"};t.prototype.render=function(){var t;if(this.currentPrice)t=this.currentPrice.replace(".",",")+" zł";var e;if(this.previousPrice)e=this.previousPrice.replace(".",",")+" zł";return h("div",null,h("div",{class:"uk-text-xsmall uk-text-center uk-link-reset uk-position-relative uk-margin-small-bottom"},h("a",{href:this.link},h("div",{class:"uk-margin-small-bottom"},h("ks-image",{src:this.img,width:"280",height:"280",contain:true,alt:"zdjęcie produktu"})),this.name)),h("div",{class:"uk-text-xsmall uk-text-center uk-position-relative",style:{pointerEvents:"none"}},this.previousPrice?[h("span",{class:"uk-text-muted"},h("s",null,e)),h("br",null)]:null,h("span",{class:"uk-text-bold uk-text-normal uk-text-danger"},t)))};Object.defineProperty(t.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();export{ProductSimple as ks_product_simple};