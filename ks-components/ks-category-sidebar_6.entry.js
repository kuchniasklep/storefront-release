import{r as s,h as t,H as i,g as e}from"./index-3d6d5594.js";import{S as o}from"./core-class-3f174cf3.js";import{P as r}from"./pagination-e5b04709.js";import{T as a}from"./thumbs-ca1d86c7.js";import{c as n}from"./common-792b954d.js";import"./index-84467a45.js";const p=class{constructor(t){s(this,t),this.open=!1,this.keepSiblingsOpen=!1,this.hideWithChildren=!1}click(){"children"in this.category&&(this.open=!this.open,this.keepSiblingsOpen||Array.from(this.root.parentElement.children).forEach((s=>{s!=this.root&&"hide"in s&&s.hide()})),this.open&&this.hideWithChildren&&Array.from(this.root.parentElement.children).forEach((s=>{s!=this.root&&"hide"in s&&s.hide()})))}async hide(){this.open=!1}render(){return t(i,null,t("div",{class:"name",onClick:()=>this.click()},t("span",null,this.category.name),"children"in this.category?t("ks-icon",{name:this.open?"minus":"plus"}):null),"children"in this.category?t("div",{class:"children"},this.category.children.map((s=>"children"in s?t("ks-category-sidebar",{category:s}):t("a",{href:s.url},s.name))),t("a",{href:this.category.url,class:"seeall"},"Zobacz wszystko")):null)}get root(){return e(this)}};p.style="ks-category-sidebar>.name{position:relative;cursor:pointer;padding:7px 0px 5px 0px}ks-category-sidebar>.name>ks-icon{position:absolute;top:6px;right:0px}ks-category-sidebar>.children{overflow:hidden;padding:0px 0px 0px 10px;font-size:16px;-webkit-transition:opacity 0.5s ease;transition:opacity 0.5s ease}ks-category-sidebar>.children>a{padding:4px 0px}ks-category-sidebar:not([open])>.children{max-height:0px !important;opacity:0}ks-category-sidebar[open]>.children{padding:5px 0px 8px 10px;opacity:1}ks-category-sidebar .seeall{color:#bbbbbb  !important}",o.use([r,a]);const l=class{constructor(t){s(this,t),this.name="",this.message="",this.stack="",this.visible=""}componentDidRender(){this.overlay=this.root.querySelector("ks-overlay")}async show(s){this.name=s.name,this.message=s.message,this.stack=void 0===s.stack?"":s.stack,this.overlay.show(),this.visible="visible"}async hide(){this.visible="hidden",this.overlay.hide()}render(){let s=`${this.name}: ${this.message}`,i="",e=this.stack;const o=parseInt(this.name);isNaN(o)?i="Wystąpił błąd aplikacji. ":(o>=400&&o<500&&(i="Wystąpił błąd aplikacji. "),o>=500&&(i="Wystąpił błąd serwera. "),e+=s),i+="Jeżeli problem się powtarza prosimy o kontakt mailowy lub telefoniczny oraz podanie informacji w poniższej ramce.";const r=`User-agent: ${navigator.userAgent}`;return t("ks-overlay",{dark:!0},t("div",{class:`content ${this.visible}`},t("div",{class:"bar"},t("div",{class:"title"},s),t("div",{class:"close",onClick:()=>this.hide()},t("ks-icon",{name:"x",size:1.2}))),t("div",{class:"message"},i),t("div",{class:"data"},r,t("span",{class:"stack"},e))))}get root(){return e(this)}};l.style="ks-error-popup{display:block}ks-error-popup .content{max-width:800px;width:100%;background-color:var(--card-background);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}ks-error-popup .bar{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:var(--color-secondary)}ks-error-popup .title{-ms-flex:1;flex:1;padding:10px 20px;font-size:20px;font-weight:700;font-family:var(--font-emphasis)}ks-error-popup .close{padding:10px;background-color:var(--color-secondary);opacity:1;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-error-popup .close:hover{opacity:0.6}ks-error-popup .message{padding:30px 30px;color:var(--card-text-color);text-align:center;font-size:18px}ks-error-popup .data{text-align:center;border-top:1px solid #e2e2e2;padding:20px;color:var(--card-text-color);background-color:#f2f2f2;font-size:14px}ks-error-popup .data .stack{display:block;margin-top:10px}ks-error-popup .content.visible{-webkit-animation:0.4s vertical-swipe-in 1;animation:0.4s vertical-swipe-in 1}ks-error-popup .content.hidden{-webkit-animation:0.4s vertical-swipe-out 1;animation:0.4s vertical-swipe-out 1}",o.use([r,a]);const c=class{constructor(t){s(this,t),this.name="",this.message="",this.link="",this.linkname="",this.visible=""}componentDidRender(){this.overlay=this.root.querySelector("ks-overlay")}async show(s,t,i="",e=""){this.name=s,this.message=t,this.linkname=i,this.link=e,this.overlay.show(),this.visible="visible"}async hide(){this.visible="hidden",this.overlay.hide()}render(){return t("ks-dialog",null,t("div",{class:"title"},this.name),t("div",{class:"message",innerHTML:this.message}),this.linkname&&this.link?t("ks-button",{secondary:!0,round:!0,link:this.link,name:this.linkname}):null)}get root(){return e(this)}};c.style="ks-message-popup{display:block}ks-message-popup .title{margin-top:10px;text-align:center;font-size:20px;font-weight:700;font-family:var(--font-emphasis)}ks-message-popup .message{padding:15px 30px;color:var(--card-text-color);text-align:center;font-size:18px}ks-message-popup ks-button{margin-bottom:10px}";const d=class{constructor(t){s(this,t)}render(){return t("ks-footer",{"software-link":n.get("softwareLink"),phone:n.get("phone"),email:n.get("email"),time:n.get("workingHours"),company:n.get("company"),address:n.get("address")},n.get("social").map((s=>t("ks-footer-button",{slot:"social",width:64,height:64,href:s.link,image:s.image}))),n.get("reviewers").map((s=>t("ks-footer-button",{slot:"social",width:64,height:64,href:s.link,image:s.image}))),n.get("footerLinks").map((s=>t("ks-footer-links",null,t("span",{slot:"heading"},s.name),s.items.map((s=>t("li",null,t("a",{href:s.link},s.name))))))))}},h=class{constructor(t){s(this,t)}render(){return t(i,null,t("ks-navbar",null),t("ks-newsletter-popup",{api:n.get("newsletterApi"),"login-link":n.get("loginLink"),"register-link":n.get("registerLink")}),t("ks-product-suggestions",{api:n.get("suggestionApi")}),t("ks-error-popup",null),t("ks-message-popup",null),t("ks-cookie-popup",{message:n.get("cookieMessage"),button:n.get("cookieButton"),delay:n.get("cookieDelay")}))}};o.use([r,a]);const k=class{constructor(t){s(this,t),this.name="",this.message="",this.stack="",this.visible=""}componentDidRender(){this.overlay=this.root.querySelector("ks-overlay")}async show(){this.overlay.show(),setTimeout((()=>{this.visible="visible"}),10)}async hide(){this.visible="hidden",this.overlay.hide()}onClosed(){this.visible="hidden"}render(){return t("ks-overlay",{dark:!0},t("nav",{class:`content ${this.visible}`},t("button",{class:"close",onClick:()=>this.hide()},t("ks-icon",{name:"x"})),t("slot",null)))}get root(){return e(this)}};k.style="ks-sidepanel{display:block;position:absolute}ks-sidepanel .content{position:absolute;z-index:100000;top:0;right:0;bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:320px;height:100%;padding:15px 30px;overflow-y:auto;color:black;background:#ffffff}ks-sidepanel[left] .content{left:0}ks-sidepanel .content .close{position:absolute;top:15px;right:25px;padding:5px;color:#252525;-webkit-transition:color .1s ease-in-out;transition:color .1s ease-in-out;cursor:pointer;border:none;outline:none;background-color:transparent}@media only screen and (max-width: 640px){ks-sidepanel .content{width:300px;padding:20px}ks-sidepanel .content .close{right:15px}}ks-sidepanel .content{-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);transition:-webkit-transform 0.3s ease;-webkit-transition:-webkit-transform 0.3s ease;transition:transform 0.3s ease;transition:transform 0.3s ease, -webkit-transform 0.3s ease}ks-sidepanel[left] .content{-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%)}ks-sidepanel .visible{-webkit-transform:translateX(0%) !important;-ms-transform:translateX(0%) !important;transform:translateX(0%) !important}ks-sidepanel .hidden{-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%)}ks-sidepanel[left] .hidden{-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%)}";export{p as ks_category_sidebar,l as ks_error_popup,c as ks_message_popup,d as ks_page_footer,h as ks_page_header,k as ks_sidepanel}