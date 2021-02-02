import{r as i,h as t}from"./index-4dbd872e.js";const n=class{constructor(t){i(this,t),this.editLink="",this.homeQuantity="",this.externalQuantity="",this.availability="",this.overwrite=!1,this.distributors=!1,this.expanded=!1}expand(){this.expanded=!this.expanded,console.log("EXPAND")}render(){return[t("div",{class:"bar"},t("div",null,t("ks-icon",{name:"home"})," ",this.homeQuantity),""!=this.externalQuantity?t("div",null,t("ks-icon",{name:"truck"})," ",this.externalQuantity):null,""!=this.availability?t("div",null,t("ks-icon",{class:"hide-mobile",name:"x-octagon"})," ",this.availability):null,this.overwrite?t("div",null,t("ks-icon",{class:"hide-mobile",name:"alert-octagon"})," Nadpisany"):null,t("div",{class:"links"},t("a",{class:"button",href:this.editLink},t("ks-icon",{name:"edit"})),this.distributors?t("button",{class:"button",onClick:()=>this.expand()},t("ks-icon",{name:this.expanded?"chevron-up":"chevron-down"})):null)),this.distributors?t("div",{class:"distributors",hidden:!this.expanded},t("tr",null,t("th",null,"Dystrybutor"),t("th",null,"Czas wysyłki"),t("th",null,"Stan zewnętrzny"),t("th",null,"Tryb niedostępności"),t("th",null,"Komunikaty")),t("slot",null)):null]}};n.style="ks-product-admin{display:block;margin-bottom:10px}ks-product-admin .bar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#181818;color:white}ks-product-admin .bar>div:not(.links){padding:17px}ks-product-admin .bar>.links{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-flex:1;-ms-flex:1;flex:1}ks-product-admin .bar>.links .button{display:block;padding:17px;color:white;background-color:#252525;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;border-style:none;outline-style:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ks-product-admin .bar>.links .button:hover{color:white;background-color:#353535}ks-product-admin .bar>.links .button:active{color:white;background-color:#454545}ks-product-admin .bar>.links .button:nth-child(2n){background-color:#303030}ks-product-admin .bar>.links .button:nth-child(2n):hover{background-color:#404040}ks-product-admin .bar>.links .button:nth-child(2n):active{background-color:#505050}ks-product-admin .distributors{display:table;background-color:#000000;color:#ffffff;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}ks-product-admin .distributors[hidden]{display:none !important;visibility:hidden !important}ks-product-admin .distributors th{font-weight:700;font-size:15.5px !important;font-family:var(--font-emphasis);border-bottom:2px solid #181818;border-right:2px solid #181818}ks-product-admin .distributors td{font-weight:500;font-size:14px;border-right:2px solid #181818}ks-product-admin .distributors th,ks-product-admin .distributors td{text-align:center;padding:8px 20px}ks-product-admin .distributors th:first-child,ks-product-admin .distributors td:first-child{text-align:left}ks-product-admin .distributors *:last-child td{padding:8px 20px 14px 20px}@media only screen and (max-width: 640px) and (min-width: 340px){ks-product-admin .bar{font-size:14px}ks-product-admin .bar>div:not(.links){padding:17px 10px}}@media only screen and (max-width: 420px){ks-product-admin .bar{font-size:12px}ks-product-admin .bar>div:not(.links){padding:17px 8px}ks-product-admin .bar .hide-mobile{display:none !important}}@media only screen and (max-width: 960px){ks-product-admin .bar>.links button{display:none !important}ks-product-admin .distributors{display:none !important;visibility:hidden !important}}";export{n as ks_product_admin}