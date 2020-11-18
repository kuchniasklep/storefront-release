import{r as registerInstance,h,g as getElement}from"./index-22b73bd9.js";var topBannerCss="ks-top-banner{display:block;position:relative;height:40px;padding-right:90px;font-family:var(--font-emphasis);font-size:16px;line-height:16px;font-weight:700;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;background-color:var(--color-yellow);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-top-banner:hover{background-color:var(--color-yellow-hover)}ks-top-banner:active{background-color:var(--color-yellow-active)}ks-top-banner a{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;color:inherit !important;text-decoration:none !important}ks-top-banner a>ks-img{width:auto}ks-top-banner .close{position:absolute;top:5px;right:5px;border-style:none;outline-style:none;border-radius:100%;padding:3px;background-color:transparent;opacity:1.0;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-top-banner .close:hover{opacity:0.6}ks-top-banner .close:active{opacity:0.4}@media only screen and (max-width: 959px){ks-top-banner{font-size:14px;line-height:14px;padding-right:20px}}@media only screen and (max-width: 480px){ks-top-banner a>span{max-width:150px;margin:0}ks-top-banner{font-size:13px;line-height:13px}}";var TopBanner=function(){function e(e){registerInstance(this,e)}e.prototype.id=function(){return"ks-top-banner-"+this.name.replace(" ","")};e.prototype.disable=function(){sessionStorage.setItem(this.id(),"true");this.root.hidden=true};e.prototype.componentWillLoad=function(){if(sessionStorage.getItem(this.id())!=null)this.root.hidden=true};e.prototype.render=function(){var e=this;return[h("a",{href:this.shipping},h("slot",null)),h("button",{class:"close",onClick:function(){return e.disable()}},h("ks-icon",{name:"x"}))]};Object.defineProperty(e.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();TopBanner.style=topBannerCss;export{TopBanner as ks_top_banner};