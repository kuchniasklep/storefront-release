import{r as s,h as t,g as a}from"./index-8814b56d.js";const e=class{constructor(t){s(this,t),this.hideOnOdd=!1}render(){return t("ks-card",{height:!0},t("div",{class:"uk-flex uk-flex-column uk-flex-between uk-height-1-1"},t("a",{href:this.link},t("ks-image",{src:this.image,alt:this.heading,cover:!0,width:"600",height:"300"})),t("div",{class:"uk-padding-small uk-text-small uk-flex-1"},t("h3",{class:"uk-margin-small-bottom"},t("a",{class:"uk-link-heading",href:this.link},this.heading)),t("div",{class:"uk-text-meta"},t("span",{"uk-icon":"icon: calendar"})," ",this.date,t("span",{"uk-icon":"search",class:"uk-margin-left"})," ",this.views),t("p",{class:"uk-margin-remove-bottom"},t("slot",null))),t("div",{class:"uk-card-footer uk-padding-small uk-text-center"},t("a",{class:"uk-button uk-button-text",href:this.link},"Zobacz więcej"))))}get root(){return a(this)}};e.style="ks-article-card{display:block}@media screen and (min-width: 960px) and (max-width: 1200px){ks-article-card[hide-on-odd]{display:none !important}}";export{e as ks_article_card}