import{r as t,h as i,g as o}from"./p-f66c687e.js";import"./p-d10b37cf.js";import{s as n}from"./p-eaab01b0.js";const s=class{constructor(i){t(this,i),this.dataId="",this.shippingApi="",this.traitApi="",this.cartApi="",this.cartCountApi="",this.favouritesApi="",this.suggestionApi=""}connectedCallback(){const t=document.getElementById(this.dataId),i=JSON.parse(t.innerHTML);Object.keys(i).map(t=>{n.set(t,i[t])}),n.get("negotiate")&&n.get("shippingMessage")&&n.set("externalPoints",!0)}componentDidLoad(){this.navbar=document.querySelector("ks-navbar"),this.errorPopup=document.querySelector("ks-error-popup")}async CountChange(t){n.set("count",t.detail);let i=new FormData;i.append("id",n.get("id")),i.append("count",t.detail.toString()),n.set("cartLoading",!0),await this.fetch(this.shippingApi,i).then(t=>t.json()).then(t=>{n.set("shippingTime",t.shippingTime),n.set("shippingMessage",t.shippingMessage),n.get("negotiate")&&n.get("shippingMessage")&&n.set("externalPoints",!0)}).catch(t=>this.errorPopup.show(t)),n.set("cartLoading",!1)}async TraitChange(t){n.set("cartLoading",!0);const i=t.detail.reduce((t,i)=>t+"x"+i[0].id+"-"+i[1].id,"");let o=new FormData;o.append("id",n.get("id")),o.append("traits",i),await this.fetch(this.traitApi,o).then(t=>t.json()).then(t=>{if(null!=t.currentPrice&&n.set("currentPrice",t.currentPrice),null!=t.previousPrice&&n.set("previousPrice",t.previousPrice),null!=t.ean&&n.set("ean",t.ean),null!=t.catalog&&n.set("catalog",t.catalog),n.set("traitIDs",i),null!=t.image){const i=n.get("images");i[0].full=t.image.full,i[0].preview=t.image.preview,i[0].thumb=t.image.thumb,n.set("images",i)}}).catch(t=>this.errorPopup.show(t)),n.set("cartLoading",!1)}async AddToCart(){n.set("cartLoading",!0);const t=n.get("id"),i=n.get("count").toString(),o=n.get("traitIDs"),s=n.get("name");let r=new FormData;r.append("id",t),r.append("ilosc",i),r.append("cechy",o),r.append("akcja","dodaj"),await this.fetch(this.cartCountApi,r).then(async()=>{let n=new FormData;n.append("id",t),n.append("ilosc",i),n.append("cechy",o),n.append("komentarz",""),n.append("komentarz",""),n.append("txt",""),n.append("wroc",""),n.append("miejsce","0"),await this.fetch(this.cartApi,n).then(()=>{this.navbar.IncrementCart(i),function(t,i,o){const n=document.createElement("ks-product-suggestions");n.setAttribute("product-id",i),n.setAttribute("name",o),n.setAttribute("api",t),document.body.appendChild(n)}(this.suggestionApi,t,s)}).catch(t=>this.errorPopup.show(t))}).catch(t=>this.errorPopup.show(t)),n.set("cartLoading",!1)}async AddToFavourites(){n.set("favouritesLoading",!0);let t=new FormData;t.append("id",n.get("id")),await this.fetch(this.favouritesApi,t).then(()=>this.navbar.IncrementHeart()).catch(t=>this.errorPopup.show(t)),n.set("favouritesCompleted",!0),n.set("favouritesLoading",!1)}async fetch(t,i){const o=new Headers;return o.append("pragma","no-cache"),o.append("cache-control","no-cache"),fetch(t,{method:"POST",body:i,headers:o,credentials:"same-origin"}).then(t=>{if(!t.ok)throw{name:t.status,message:t.statusText};return t})}render(){return[i("div",{class:"top"},i("slot",{name:"top"})),i("div",{class:"left"},i("slot",{name:"left"})),i("div",{class:"bottom"},i("slot",null),i("div",{class:"installments"},i("slot",{name:"inst"})),i("div",{class:"attributes"},i("slot",{name:"attr"})))]}get root(){return o(this)}};s.style="ks-product-info{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;width:100%;background:var(--card-background);color:var(--card-text-color);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow);padding:40px 30px;min-height:420px}ks-product-info>*{margin:0px auto;width:100%;max-width:700px}ks-product-info .left{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@media only screen and (min-width: 960px){ks-product-info{display:-ms-grid;display:grid;-ms-grid-columns:48% 52%;grid-template-columns:48% 52%;-ms-grid-rows:auto 1fr;grid-template-rows:auto 1fr}ks-product-info>*:nth-child(1){-ms-grid-row:1;-ms-grid-column:1}ks-product-info>*:nth-child(2){-ms-grid-row:1;-ms-grid-column:2}ks-product-info>*:nth-child(3){-ms-grid-row:2;-ms-grid-column:1}ks-product-info>*:nth-child(4){-ms-grid-row:2;-ms-grid-column:2}ks-product-info>.top{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1}ks-product-info>.left{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1 / 3}ks-product-info>.bottom{-ms-grid-column:2;grid-column:2;-ms-grid-row:2;grid-row:2}}@media only screen and (min-width: 1200px){ks-product-info{padding:40px 30px}}@media only screen and (max-width: 460px){ks-product-info{padding:20px 10px}}ks-product-info ks-product-button[large]{max-width:700px;margin:auto}ks-product-info .installments{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-bottom:10px;margin-left:auto;margin-right:auto;max-width:700px}ks-product-info .installments>*:not(:last-child){margin-right:5px}ks-product-info .installments>*:first-child{width:45%}ks-product-info .installments>*:last-child{width:55%}@media only screen and (max-width: 640px){ks-product-info .installments{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap}ks-product-info .installments>*{width:100% !important;margin-right:0}}ks-product-info .attributes{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@media only screen and (max-width: 640px){ks-product-info .attributes{margin-top:20px}}";export{s as ks_product_info}