import{r as t,h as s,g as e}from"./p-f66c687e.js";const i=class{constructor(s){t(this,s)}componentDidLoad(){this.root.style.display="block"}render(){let t,e;return this.currentPrice&&(t=this.currentPrice.replace(".",",")+" zł"),this.previousPrice&&(e=this.previousPrice.replace(".",",")+" zł"),s("div",null,s("div",{class:"uk-text-xsmall uk-text-center uk-link-reset uk-position-relative uk-margin-small-bottom"},s("a",{href:this.link},s("div",{class:"uk-margin-small-bottom"},s("ks-image",{src:this.img,width:"280",height:"280",contain:!0,alt:"zdjęcie produktu"})),this.name)),s("div",{class:"uk-text-xsmall uk-text-center uk-position-relative",style:{pointerEvents:"none"}},this.previousPrice?[s("span",{class:"uk-text-muted"},s("s",null,e)),s("br",null)]:null,s("span",{class:"uk-text-bold uk-text-normal uk-text-danger"},t)))}get root(){return e(this)}};export{i as ks_product_simple}