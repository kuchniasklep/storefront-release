import{r as registerInstance,h}from"./index-5edb5049.js";var notfoundCss="ks-notfound{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:50px 30px 70px 30px;min-height:25vw;text-align:center}ks-notfound .status{color:black;font-size:128px;line-height:128px;font-family:var(--font-emphasis);font-weight:700;margin-right:20px}ks-notfound .content{max-width:800px;margin:15px 0}ks-notfound .content h1{font-size:1.275rem;font-family:var(--font-emphasis);font-weight:700}ks-notfound .content h1{font-size:1.275rem}@media (max-width: 640px){ks-notfound{padding:30px 15px 50px 15px}ks-notfound .status{font-size:100px;line-height:100px}}@media (max-width: 460px){ks-notfound .status{font-size:72px;line-height:72px}}";var NotFound=function(){function t(t){registerInstance(this,t);this.link="/";this.linkName="Strona Główna";this.status="404"}t.prototype.render=function(){return[h("div",{class:"status"},this.status),h("div",{class:"content"},h("slot",null)),h("ks-button",{round:true,nofollow:true,link:this.link,name:this.linkName})]};return t}();NotFound.style=notfoundCss;export{NotFound as ks_notfound};