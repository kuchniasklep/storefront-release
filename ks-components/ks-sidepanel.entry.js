import{r as s,h as t,g as a}from"./index-1e6d4cbd.js";import{S as r}from"./core-class-f05bf7c2.js";import{P as e}from"./pagination-ca8adc5c.js";import{T as n}from"./thumbs-06204fe0.js";r.use([e,n]);const i=class{constructor(t){s(this,t),this.name="",this.message="",this.stack="",this.visible=""}componentDidRender(){this.overlay=this.root.querySelector("ks-overlay")}async show(){this.overlay.show(),this.visible="visible"}async hide(){this.visible="hidden",this.overlay.hide()}render(){return t("ks-overlay",null,t("div",{class:"content "+this.visible},t("slot",null)))}get root(){return a(this)}};i.style="ks-sidepanel{display:block}ks-sidepanel .content{position:absolute;z-index:100000;width:100%;height:100%;top:0px;left:0px;-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);transition:transform 0.2s ease, -ms-transform 0.2 ease}ks-sidepanel .content.visible{-webkit-transform:translateX(0%);-ms-transform:translateX(0%);transform:translateX(0%)}ks-sidepanel .content.hidden{-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%)}";export{i as ks_sidepanel}