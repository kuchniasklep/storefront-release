import{r as e,h as t,g as s}from"./p-cb802b7f.js";const i=class{constructor(t){e(this,t)}componentDidLoad(){this.root.style.display="block"}render(){const e={backgroundColor:this.color,color:"white",height:"50px"};return t("div",{class:"uk-height-1-1 uk-flex uk-flex-column"},this.price?t("div",{class:"uk-flex uk-flex-middle uk-flex-between",style:e},t("div",{class:"uk-flex-auto"},t("ks-image",{src:this.logo,alt:this.name,width:"130",height:"40"})),t("div",{class:"ks-text-decorated uk-text-right",style:{fontSize:"20px",padding:"5px 10px"}},this.price)):t("div",{class:"uk-flex uk-flex-middle uk-flex-center",style:e},t("ks-image",{src:this.logo,alt:this.name,width:"140",height:"40"})),t("div",{class:"uk-flex-1 uk-flex uk-flex-middle",style:{backgroundColor:"#eeeeee",msFlex:"1 0 auto",padding:"8px",fontSize:"16px",borderTop:"1px solid rgba(0, 0, 0, 0.1)",transition:"background-color 0.1s ease-in, color 0.1s ease-in"}},t("div",{class:"uk-width-1-1 uk-padding-small uk-text-center"},t("slot",null))))}get root(){return s(this)}};export{i as ks_cart_tile}