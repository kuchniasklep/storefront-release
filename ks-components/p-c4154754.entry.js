import{r as s,h as t}from"./p-f748ea6f.js";const r=class{constructor(t){s(this,t),this.lightUp=!1}render(){const s=this.lightUp?{borderColor:"#1488ff",backgroundColor:"#d5e6ff",color:"#004454"}:{};return t("div",{class:"uk-margin"},this.label?t("label",{class:"uk-form-label"+(this.error?" uk-text-danger":""),style:{marginBottom:"3px",display:"block"}},this.label):null,t("select",{class:"uk-select"+(this.error?" uk-form-danger":""),style:s,name:this.name,onChange:()=>this.Validate()},t("slot",null)))}async IsValid(){return!0}async Validate(){return this.lightUp=!1,Promise.resolve()}};export{r as ks_input_select}