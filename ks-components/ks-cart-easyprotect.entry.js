import{r as t,h as e,g as s}from"./index-1e6d4cbd.js";import"./index-ca02180c.js";import{s as a}from"./cart-store-6b088993.js";const i=class{constructor(e){t(this,e)}render(){const t=Object.entries(a.get("insured"));return[e("div",{class:"top"},e("div",{class:"content"},e("slot",null)),e("ks-img2",{src:this.image,width:this.width,height:this.height})),e("div",{class:"insured"},t.map((([t,s])=>e("ks-cart-easyprotect-warranty",{insured:!0,"product-id":t,active:s})))),e("slot",{name:"bottom"})]}get root(){return s(this)}};i.style="ks-cart-easyprotect{display:block;padding:30px}ks-cart-easyprotect .top{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;width:100%;position:relative}ks-cart-easyprotect .top .content{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}ks-cart-easyprotect .top .content h2{font-size:22px;text-transform:uppercase;font-family:var(--font-emphasis);font-weight:700}ks-cart-easyprotect .top ks-img2{max-width:120px;width:100%;margin-left:10px}ks-cart-easyprotect .insured{margin-top:10px}ks-cart-easyprotect .insured .item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:10px;font-family:var(--font-emphasis);background-color:#f2f2f2;padding:5px 10px}ks-cart-easyprotect .insured .item .name{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;padding:5px;background-color:#f2f2f2;font-size:16px}ks-cart-easyprotect .insured .item .option{margin:0 10px;font-size:17px;font-weight:700}ks-cart-easyprotect .addproducts .content{padding:20px 20px 0 20px}@media (max-width: 960px){ks-cart-easyprotect{padding:15px}}@media (max-width: 640px){ks-cart-easyprotect .top ks-img2{position:absolute;top:-5px;right:0;max-width:40px;max-height:40px}ks-cart-easyprotect .top .content{font-size:15px}}";export{i as ks_cart_easyprotect}