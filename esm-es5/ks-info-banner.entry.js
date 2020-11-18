import{r as registerInstance,h,H as Host}from"./index-22b73bd9.js";var infoBannerCss="ks-info-banner{display:block;position:relative;max-height:100px;height:100%}ks-info-banner{display:block}ks-info-banner a{display:-webkit-box;display:-ms-flexbox;display:flex;max-height:100px;height:100%}ks-info-banner ks-img{height:auto}ks-info-banner button{position:absolute;top:10px;right:10px;border-style:none;outline-style:none;background-color:transparent;color:white;opacity:1;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-info-banner button:hover{opacity:0.7}ks-info-banner button:active{opacity:0.5}";var InfoBanner=function(){function n(n){registerInstance(this,n);this.disabled=false}n.prototype.disable=function(){var n="ks-info-banner-"+this.name.replace(" ","");sessionStorage.setItem(n,"true");this.disabled=true};n.prototype.componentWillLoad=function(){var n="ks-info-banner-"+this.name.replace(" ","");if(sessionStorage.getItem(n))this.disabled=true};n.prototype.render=function(){var n=this;if(!this.disabled)return h(Host,{style:{backgroundColor:this.color}},h("a",{href:this.link,"aria-label":this.name},h("ks-img",{sync:true,contained:true,center:true,width:this.width,height:this.height,src:this.image,alt:this.name})),h("button",{type:"button","aria-label":"Schowaj banner",onClick:function(){return n.disable()}},h("ks-icon",{name:"x",size:1.2})));else return};return n}();InfoBanner.style=infoBannerCss;export{InfoBanner as ks_info_banner};