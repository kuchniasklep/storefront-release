import{r,h as e,g as s}from"./p-f66c687e.js";import{T as a}from"./p-7acb8f32.js";const t=class{constructor(e){r(this,e)}render(){return[this.dealGroups.map(r=>e("ks-cart-deal-group",{key:r.name,name:r.name,deals:r.deals})),this.deals.map(r=>e("ks-cart-deal",{key:r.id,ikey:r.id,name:r.name,link:r.link,img:r.img,price:r.price}))]}get root(){return s(this)}};a.injectProps(t,["deals","dealGroups"]);export{t as ks_cart_deal_container}