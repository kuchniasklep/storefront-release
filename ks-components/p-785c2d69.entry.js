import{r as t,h as a}from"./p-cb802b7f.js";const e=class{constructor(a){t(this,a),this.mobile=0,this.height=0,this.width=0,this.menuWidth=0,this.initialized=!0}resizeHandler(){this.mobile=window.innerWidth<=1200?window.innerWidth<=960?window.innerWidth<=640?3:2:1:0,this.mapDimensions()}componentWillLoad(){this.resizeHandler()}mapDimensions(){0==this.mobile?(this.height=250,this.width=Math.floor(.6*document.documentElement.clientWidth)-1):3==this.mobile?(this.height=document.documentElement.clientHeight-440,this.width=document.documentElement.clientWidth):(this.height=document.documentElement.clientHeight-420,this.width=document.documentElement.clientWidth)}Toggle(){this.initialized=!0,this.mapDimensions()}render(){return[this.initialized?a("div",{class:"map"},a("iframe",{frameborder:"0",height:this.height,width:this.width,src:"https://maps.google.pl/maps?ie=UTF8&q=Pozna%C5%84ska+23%2C+58-500+Jelenia+G%C3%B3ra&gl=PL&hl=pl&t=m&iwloc=A&output=embed"})):null,a("div",{class:"info ks-text-decorated"},a("div",{class:"address",innerHTML:this.contact}),a("div",{class:"buttons"},a("div",{class:"margin"},a("a",{href:"tel:"+this.phone,class:"uk-button"},this.phone),a("br",null),a("a",{href:"mailto:"+this.email,class:"uk-button"},this.email))))]}};e.style="ks-navbar-contact-panel{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;overflow:hidden;width:100%;background-color:var(--ks-color-primary-dark);color:white;-webkit-box-shadow:0 6px 6px rgba(0, 0, 0, 0.2);box-shadow:0 6px 6px rgba(0, 0, 0, 0.2)}ks-navbar-contact-panel .map{-webkit-box-flex:0;-ms-flex:none;flex:none;background-color:#eeeeee}ks-navbar-contact-panel .info{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-ms-flex:1;flex:1;padding:20px;font-size:16px;text-align:center}ks-navbar-contact-panel .address,ks-navbar-contact-panel .buttons{width:100%}ks-navbar-contact-panel .buttons a{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;margin:2px;padding:3px;font-size:18px;color:#ffffff;background-color:transparent;border:1px solid #ffffff;border-radius:500px}@media only screen and (max-width: 639px){ks-navbar-contact-panel .address{font-size:14px}ks-navbar-contact-panel .buttons a{font-size:14px}}@media only screen and (min-width: 640px){ks-navbar-contact-panel .margin{margin-right:10%}ks-navbar-contact-panel .address{width:calc(100% * 1 / 3.001)}ks-navbar-contact-panel .buttons{width:calc(100% * 2 / 3.001)}}@media only screen and (min-width: 1200px){ks-navbar-contact-panel .info>*{width:50%}}@media only screen and (max-width: 1200px){ks-navbar-contact-panel{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}ks-navbar-contact-panel{height:calc(100vh - 72px)}}";export{e as ks_navbar_contact_panel}