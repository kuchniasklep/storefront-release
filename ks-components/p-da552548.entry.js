import{r,h as e,g as s}from"./p-f66c687e.js";import"./p-83f217d4.js";import{T as t}from"./p-b95de978.js";const a=class{constructor(e){r(this,e)}render(){return[this.dealGroups.map(r=>e("ks-cart-deal-group",{key:r.name,name:r.name,deals:r.deals})),this.deals.map(r=>e("ks-cart-deal",{key:r.id,ikey:r.id,name:r.name,link:r.link,img:r.img,price:r.price}))]}get root(){return s(this)}};t.injectProps(a,["deals","dealGroups"]);export{a as ks_cart_deal_container}