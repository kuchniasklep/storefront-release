import{r as t,h as o,g as s}from"./p-f748ea6f.js";const n=class{constructor(o){t(this,o)}componentWillLoad(){this.ImageReplacer()}render(){return[o("button",{class:"accordion",onClick:()=>this.onOpen()},this.name,o("ks-icon",{name:this.open?"minus":"plus"})),o("div",{class:"tab-content"},o("slot",null))]}onOpen(){if(this.open=!this.open,this.open){const t=Array.from(this.root.parentElement.children),o=t.indexOf(this.root);t.forEach((t=>t.removeAttribute("main"))),this.main=!0,this.root.closest("ks-product-tabs").active=o}}ImageReplacer(){const t=this.root.querySelectorAll("img");for(let o=0;o<t.length;o++){const s=t[o],n=document.createElement("ks-img");n.setAttribute("src",s.getAttribute("data-src")),n.setAttribute("alt",s.getAttribute("alt"));let a=s.style.height.replace("px",""),e=s.style.width.replace("px","");e.includes("%")&&(e="100%"==e?"1200":null),s.style.maxWidth&&(e=s.style.maxWidth.replace("px","")),a&&n.setAttribute("height",a),e&&(n.setAttribute("width",e),n.style.maxWidth=s.style.width),n.style.display="inline-block";const r=s.style.margin;r&&(n.style.padding=r),r.includes("auto")&&(n.style.textAlign="center",n.style.display="block"),s.parentNode.replaceChild(n,s)}}get root(){return s(this)}};n.style="ks-product-tab{display:block}@media only screen and (min-width: 960px){ks-product-tab .accordion{display:none}}ks-product-tab>button{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;background-color:transparent;color:#151515;width:100%;border:none;outline:none;padding:10px 0px 20px 0px;margin:0;-webkit-transition:color 0.3s ease;transition:color 0.3s ease}ks-product-tab>button:hover{color:#606060}ks-product-tab:not([open])>button>ks-icon{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:-webkit-transform 0.3s ease;transition:-webkit-transform 0.3s ease;transition:transform 0.3s ease;transition:transform 0.3s ease, -webkit-transform 0.3s ease}ks-product-tab:not([open])>button:hover>ks-icon{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}ks-product-tab>.tab-content{display:none}@media only screen and (min-width: 960px){ks-product-tab[main]>.tab-content{display:block}}@media only screen and (max-width: 960px){ks-product-tab[open]>.tab-content{display:block}}";export{n as ks_product_tab}