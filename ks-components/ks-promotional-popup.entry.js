import{r as o,h as t,g as i}from"./index-09939813.js";const s=class{constructor(t){o(this,t),this.color="#FFFFFF",this.textureOpacity="1.0",this.textureSize="200",this.displayOnLoad=!1}componentDidLoad(){this.dialog=this.root.querySelector("ks-dialog"),this.displayOnLoad&&-1==document.cookie.search(this.name+"Popup"+"=tak")&&setTimeout((()=>{this.Show()}),4e3)}async Show(){this.dialog.show()}SetCookie(){const o=this.name+"Popup";var t,i=new Date;i.setMonth(i.getMonth()+1),t="expires="+i.toUTCString()+"; ",document.cookie=`${o}=tak; `+t+"path=/"}render(){return[t("ks-dialog",{smallmobile:!0,dark:!0,nopadding:!0,onClosed:()=>this.SetCookie()},t("a",{href:this.href,class:"info",style:{backgroundColor:this.color}},t("div",{class:"texture",style:{backgroundImage:`url("${this.texture}")`,backgroundSize:`${this.textureSize}px ${this.textureSize}px`,opacity:this.textureOpacity}}),t("ks-img2",{src:this.image})))]}get root(){return i(this)}};s.style="ks-promotional-popup{display:block}ks-promotional-popup .content{width:100%}ks-promotional-popup .info{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;position:relative;height:100%;width:100%;max-width:720px;padding:20px;-webkit-box-sizing:border-box;box-sizing:border-box}ks-promotional-popup .info ks-img2{max-height:500px}ks-promotional-popup .texture{position:absolute;top:0;bottom:0;left:0;right:0}";export{s as ks_promotional_popup}