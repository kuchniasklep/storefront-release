import{r as t,h as s,g as e}from"./p-f748ea6f.js";const o=class{constructor(s){t(this,s),this.mobile=!1,this.wide=!1}componentDidLoad(){this.root.style.display="block"}render(){return[s("a",{href:this.href,class:"uk-button uk-button-default "+(this.mobile?"uk-hidden@m ":"")+(this.wide?"uk-width-1-1 ":""),style:{padding:"0 20px"}},s("slot",null))]}get root(){return e(this)}},r=class{constructor(s){t(this,s)}componentDidLoad(){this.root.style.display="block"}render(){return[s("div",{style:{marginBottom:"20px"},class:"uk-flex uk-flex-middle uk-flex-between"},s("div",{class:"uk-text-bold ks-text-decorated",style:{fontSize:"22px",textTransform:"uppercase"}},this.heading),s("a",{href:this.link,class:"uk-link-text"},s("span",{"uk-icon":"file-edit"})))]}get root(){return e(this)}};export{o as ks_order_button,r as ks_order_heading}