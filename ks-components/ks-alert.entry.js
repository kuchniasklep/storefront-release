import{r as t,h as e,g as s}from"./index-1e6d4cbd.js";const l=class{constructor(e){t(this,e),this.message=""}componentWillLoad(){this.hashCode=this.GenerateHash(this.message)}GenerateHash(t){var e=0,s=t.length;if(0===t.length)return e;for(let l=0;l<s;l++)e=(e<<5)-e+t.charCodeAt(l),e&=e;return e}async componentDidLoad(){const t=document.querySelector("#ks-alert-"+this.hashCode);UIkit.modal(t).show()}Close(){const t=document.querySelector("#ks-alert-"+this.hashCode);UIkit.modal(t).hide().then((()=>{this.root.remove(),t.remove()}))}render(){return e("div",{id:"ks-alert-"+this.hashCode,class:"uk-modal-full","uk-modal":"stack: true"},e("div",{class:"uk-modal-dialog"},e("div",{class:"uk-background-cover uk-flex uk-flex-between uk-flex-column","uk-height-viewport":!0},e("div",{class:"uk-padding-small uk-flex-auto uk-flex uk-flex-center uk-flex-middle uk-flex-column",style:{maxWidth:"1300px",margin:"auto"}},e("p",{class:"uk-text-center ks-text-decorated uk-h1",innerHTML:this.message}),e("div",{class:"uk-margin-top"},e("button",{onClick:()=>this.Close(),class:"uk-button uk-button-secondary",style:{padding:"5px 40px"}},"OK"))))))}get root(){return s(this)}};export{l as ks_alert}