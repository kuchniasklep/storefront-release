System.register(["./p-781af923.system.js"],(function(t){"use strict";var e,n,o;return{setters:[function(t){e=t.r;n=t.h;o=t.g}],execute:function(){var r=t("ks_filter_sidebar",function(){function t(t){e(this,t)}t.prototype.componentDidLoad=function(){var t=this.root.querySelector("#filter-overlay");t.addEventListener("pointerdown",(function(e){var n=t.querySelector("div");if(t.classList.contains("uk-open")&&e.clientX>n.offsetWidth){UIkit.offcanvas(t).hide()}}))};t.prototype.render=function(){return[n("button",{class:"uk-button uk-button-danger uk-width-1-1",type:"button","uk-toggle":"target: #filter-overlay"},"FILTRUJ"),n("div",{id:"filter-overlay","uk-offcanvas":"overlay: true; bg-close: false;",style:{zIndex:"2147483648"}},n("div",{class:"uk-offcanvas-bar uk-padding-small"},n("div",{class:"uk-flex uk-flex-between uk-flex-top"},n("span",{style:{marginTop:"5px"},class:"uk-text-uppercase"},"Filtrowanie"),n("button",{class:"uk-offcanvas-close",type:"button","uk-close":true}),n("hr",null)),n("br",null),n("form",{method:"POST",action:this.baseUrl},n("slot",null),n("a",{href:this.baseUrl,class:"uk-button uk-button-secondary uk-width-1-1 uk-margin-top"},"WYCZYŚĆ FILTRY"),n("input",{type:"submit",class:"uk-button uk-button-danger uk-width-1-1 uk-margin-small-top",value:"ZOBACZ FILTRY"}))))]};Object.defineProperty(t.prototype,"root",{get:function(){return o(this)},enumerable:false,configurable:true});return t}())}}}));