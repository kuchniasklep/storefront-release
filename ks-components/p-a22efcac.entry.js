import{r as t,h as i}from"./p-f66c687e.js";const r=class{constructor(i){t(this,i),this.href="",this.name="",this.image="",this.emphasis=!1}render(){const t=""!=this.name?i("span",{class:"name"},this.name,":"):null,r=""!=this.image?i("div",{class:"image"},i("ks-img",{vertical:!0,sync:!0,src:this.image})):null,e=[t,i("slot",null),r];return""!=this.href?i("a",{href:this.href},e):e}};r.style='ks-product-attribute{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:50px;margin:0px 2px 5px 2px;background-color:var(--color-dark);color:var(--text-color-dark);font-family:var(--product-attribute-font);font-size:var(--product-attribute-size);line-height:var(--product-attribute-size)}ks-product-attribute[emphasis]{background-color:var(--color-secondary);color:var(--text-color-secondary)}ks-product-attribute a{color:var(--text-color-dark) !important;text-decoration:none !important;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0;padding:0}ks-product-attribute .name{font-weight:700;margin-right:6px}ks-product-attribute[image=""]{padding:10px 20px}ks-product-attribute:not([image=""]){padding:2px 20px}ks-product-attribute .image{display:inline-block;overflow:hidden;height:28px;margin-left:10px;margin-right:-18px;border-radius:20px}';export{r as ks_product_attribute}