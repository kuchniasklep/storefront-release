import{r as t,h as e,g as s}from"./index-b12dd603.js";const i=class{constructor(e){t(this,e),this.mobile=!1}limitItemCount(){const t=this.mobile?window.innerWidth-20:this.containter.offsetWidth-20,e=Math.floor(t/this.items[0].offsetWidth);for(let s=0;s<this.items.length;s++){this.items[s].style.display=s<e?"block":"none"}}mobileLayout(){this.mobile=window.innerWidth<=960}componentWillLoad(){this.mobileLayout()}componentDidLoad(){this.root.style.display="block",this.containter=this.root.querySelector("#ks-recent-products-items"),this.items=this.containter.querySelectorAll("ks-recent-card"),this.limitItemCount()}handleResize(){this.mobileLayout(),this.limitItemCount()}render(){return e("div",{class:"uk-flex uk-flex-between uk-flex-middle "+(this.mobile?"uk-flex-column":"")},e("div",{class:"uk-flex uk-flex-middle ks-text-decorated",style:{fontSize:"20px",color:"white",padding:"5px 20px"}},"OSTATNIO PRZEGLĄDANE"),e("div",{id:"ks-recent-products-items",class:"uk-overflow-hidden uk-width-1-1 uk-flex-1 uk-flex "+(this.mobile?"uk-flex-center":"uk-flex-right")},e("slot",null)))}get root(){return s(this)}};export{i as ks_recent_products}