import{r,h as s,g as e}from"./p-cb802b7f.js";import"./p-83f217d4.js";import{T as t}from"./p-6b9944c3.js";const a=class{constructor(s){r(this,s)}render(){return[this.dealGroups.map(r=>s("ks-cart-deal-group",{key:r.name,name:r.name,deals:r.deals})),this.deals.map(r=>s("ks-cart-deal",{key:r.id,ikey:r.id,name:r.name,link:r.link,img:r.img,price:r.price}))]}get root(){return e(this)}};t.injectProps(a,["deals","dealGroups"]);export{a as ks_cart_deal_container}