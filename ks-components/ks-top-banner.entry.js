import{r as n,h as t,g as o}from"./index-09939813.js";const e=class{constructor(t){n(this,t)}id(){return"ks-top-banner-"+this.name.replace(" ","")}disable(){sessionStorage.setItem(this.id(),"true"),this.root.hidden=!0}componentWillLoad(){null!=sessionStorage.getItem(this.id())&&(this.root.hidden=!0)}render(){return[t("a",{href:this.shipping},t("slot",null)),t("button",{class:"close",onClick:()=>this.disable()},t("ks-icon",{name:"x"}))]}get root(){return o(this)}};e.style="ks-top-banner{display:block;position:relative;height:40px;padding-right:90px;font-family:var(--font-emphasis);font-size:16px;line-height:16px;font-weight:700;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;background-color:var(--color-yellow);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-top-banner:hover{background-color:var(--color-yellow-hover)}ks-top-banner:active{background-color:var(--color-yellow-active)}ks-top-banner a{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:100%;color:inherit !important;text-decoration:none !important}ks-top-banner a>ks-img{width:auto}ks-top-banner .close{position:absolute;top:5px;right:5px;border-style:none;outline-style:none;border-radius:100%;padding:3px;background-color:transparent;opacity:1.0;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-top-banner .close:hover{opacity:0.6}ks-top-banner .close:active{opacity:0.4}@media only screen and (max-width: 959px){ks-top-banner{font-size:14px;line-height:14px;padding-right:20px}}@media only screen and (max-width: 480px){ks-top-banner a>span{max-width:150px;margin:0}ks-top-banner{font-size:13px;line-height:13px}}";export{e as ks_top_banner}