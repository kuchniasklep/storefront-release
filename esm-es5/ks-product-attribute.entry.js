import{r as registerInstance,h}from"./index-22b73bd9.js";var productAttributeCss='ks-product-attribute{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:50px;margin:0px 2px 5px 2px;background-color:var(--color-dark);color:var(--text-color-dark);font-family:var(--product-attribute-font);font-size:var(--product-attribute-size);line-height:var(--product-attribute-size)}ks-product-attribute[emphasis]{background-color:var(--color-secondary);color:var(--text-color-secondary)}ks-product-attribute a{color:var(--text-color-dark) !important;text-decoration:none !important;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0;padding:0}ks-product-attribute .name{font-weight:700;margin-right:6px}ks-product-attribute[image=""]{padding:10px 20px}ks-product-attribute:not([image=""]){padding:2px 20px}ks-product-attribute .image{display:inline-block;overflow:hidden;height:28px;margin-left:10px;margin-right:-18px;border-radius:20px}';var ProductAttribute=function(){function t(t){registerInstance(this,t);this.href="";this.name="";this.image="";this.emphasis=false}t.prototype.render=function(){var t=this.name!=""?h("span",{class:"name"},this.name,":"):null;var r=this.image!=""?h("div",{class:"image"},h("ks-img",{vertical:true,sync:true,src:this.image})):null;var e=[t,h("slot",null),r];if(this.href!="")return h("a",{href:this.href},e);return e};return t}();ProductAttribute.style=productAttributeCss;export{ProductAttribute as ks_product_attribute};