import{r as o,h as t,g as e}from"./p-cb802b7f.js";const s=class{constructor(t){o(this,t),this.message=""}async Show(){const o=document.querySelector("#ks-order-form-modal");UIkit.modal(o).show()}async Hide(){const o=document.querySelector("#ks-order-form-modal");UIkit.modal(o).hide()}render(){return t("div",{id:"ks-order-form-modal",class:"uk-modal-full","uk-modal":!0},t("div",{class:"uk-modal-dialog"},t("div",{class:"uk-background-cover uk-flex uk-flex-between uk-flex-column","uk-height-viewport":!0},t("div",{class:"uk-padding-small uk-flex-auto uk-flex uk-flex-center uk-flex-middle uk-flex-column"},t("div",{class:"uk-text-center"},t("p",{class:"ks-text-decorated uk-h1 uk-text-bold"},this.message),t("button",{onClick:()=>this.Hide(),class:"uk-button uk-button-danger uk-margin-small-top",style:{padding:"5px 20px",fontSize:"16px"}},"WRÓĆ"))))))}get root(){return e(this)}};export{s as ks_order_form_modal}