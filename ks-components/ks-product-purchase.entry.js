import{r as t,e as o,h as r,g as a}from"./index-aa615a50.js";import{s as e}from"./product-store-a5177bab.js";import"./index-6936e5a4.js";const s=class{constructor(r){t(this,r),this.addToCart=o(this,"addToCart",7),this.addToFavourites=o(this,"addToFavourites",7),this.cartText="Do koszyka",this.availabilityText="Powiadom o dostępności",this.favouritesIcon="star",this.cartAnimation=!1,this.favouritesAnimation=!1}CartHandler(){e.get("availability")>0?e.get("cartLoading")||this.addToCart.emit():document.querySelector("ks-product-notify").show()}FavouritesHandler(){e.get("favouritesLoading")||e.get("favouritesCompleted")||this.addToFavourites.emit()}render(){const t=e.get("availability")>0;e.get("cartLoading")?this.cartAnimation=!0:setTimeout((()=>{this.cartAnimation=!1}),300),e.get("favouritesLoading")?this.favouritesAnimation=!0:setTimeout((()=>{this.favouritesAnimation=!1}),300);const o=["fav",e.get("favouritesCompleted")?"completed":null,e.get("favouritesLoading")?"loading":null];return[r("button",{onClick:()=>this.CartHandler(),class:"cart"+(e.get("cartLoading")?" loading":"")+(t?"":" disabled")},t?this.cartText:this.availabilityText,r("ks-loader",{oversized:!0,running:this.cartAnimation})),t?r("ks-product-count",null):null,r("button",{onClick:()=>this.FavouritesHandler(),class:o.join(" ")},r("ks-icon",{name:this.favouritesIcon}),r("ks-loader",{running:this.favouritesAnimation}),r("ks-icon",{class:"completed",name:"check"}))]}get root(){return a(this)}};s.style="ks-product-purchase{display:-webkit-box;display:-ms-flexbox;display:flex;margin:10px 0 15px 0;width:100%}ks-product-purchase>button{position:relative;overflow:hidden;border-style:none;outline-style:none;border-radius:50px;margin-right:10px;background-color:var(--color-secondary);color:var(--text-color-secondary);font-family:var(--product-price-font);font-size:18px;font-weight:700;-webkit-transition:var(--transition-background-color),\n                var(--transition-color);transition:var(--transition-background-color),\n                var(--transition-color)}ks-product-purchase button:hover{background-color:var(--color-secondary-hover)}ks-product-purchase button:active{background-color:var(--color-secondary-active)}ks-product-purchase button.disabled{background-color:#e4e4e4;color:var(--text-color-faded);font-size:17px;line-height:17px}ks-product-purchase button.disabled:hover{background-color:#cfcfcf}ks-product-purchase button.disabled:active{background-color:#bdbdbd}@media only screen and (max-width: 1200px){ks-product-purchase button{font-family:var(--product-price-font);font-size:var(--product-price-size-small);line-height:var(--product-price-size-small)}}@media only screen and (max-width: 960px){ks-product-purchase{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-top:10px;max-width:400px}ks-product-purchase>button.fav{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3;margin-right:0px}ks-product-purchase>ks-product-count{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}ks-product-purchase>button.cart{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;max-width:none}}@media only screen and (max-width: 560px){ks-product-purchase{-ms-flex-wrap:wrap;flex-wrap:wrap}}ks-product-purchase>button.cart{max-width:300px;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto}ks-product-purchase>button.fav{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;padding:13px;line-height:0px;background-color:#e4e4e4;color:var(--text-color-faded)}ks-product-purchase>button.fav ks-icon{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);-webkit-transition:-webkit-transform 0.1s ease;transition:-webkit-transform 0.1s ease;transition:transform 0.1s ease;transition:transform 0.1s ease, -webkit-transform 0.1s ease}ks-product-purchase>button.fav:hover ks-icon{-webkit-transform:rotate(72deg);-ms-transform:rotate(72deg);transform:rotate(72deg)}ks-product-purchase button.loading{color:transparent}ks-product-purchase button ks-loader{opacity:0;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-product-purchase button.loading ks-loader{opacity:1}ks-product-purchase button.fav.completed{color:transparent;background-color:var(--color-secondary) !important}ks-product-purchase button.fav ks-icon.completed{position:absolute;top:50%;left:50%;opacity:0;color:white;-webkit-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%);-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity);-webkit-transition-delay:0.3s;transition-delay:0.3s}ks-product-purchase button.fav.completed ks-icon.completed{opacity:1}";export{s as ks_product_purchase}