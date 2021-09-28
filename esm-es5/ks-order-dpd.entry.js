var __awaiter=this&&this.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function a(e){try{c(i.next(e))}catch(t){o(t)}}function s(e){try{c(i["throw"](e))}catch(t){o(t)}}function c(e){e.done?n(e.value):r(e.value).then(a,s)}c((i=i.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return c([e,t])}}function c(a){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(o=a[0]&2?r["return"]:a[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;if(r=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;r=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=t.call(e,n)}catch(s){a=[6,s];r=0}finally{i=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};import{r as registerInstance,h,g as getElement}from"./index-f323e182.js";var orderDPDCss="ks-order-dpd .content{background-color:#e8e8e8;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%}ks-order-dpd>ks-button{max-width:300px;margin:15px auto 0 auto}ks-order-dpd .topBar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#dc0032}ks-order-dpd .missing{color:#dc0032}ks-order-dpd .topBar ks-img2{height:40px}";var OrderDPD=function(){function e(e){registerInstance(this,e);this.api="";this.button="";this.pointMessage="";this.missingMessage="";this.description="";this.code="";this.initialized=false;this.valid=true}e.prototype.componentDidLoad=function(){this.overlay=this.root.querySelector("ks-overlay")};e.prototype.show=function(e){e.preventDefault();this.overlay.show();this.initialized=true};e.prototype.hide=function(e){e===null||e===void 0?void 0:e.preventDefault();this.overlay.hide()};e.prototype.Validate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.valid=this.code!="";return[2]}))}))};e.prototype.IsValid=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2,this.valid]}))}))};e.prototype.select=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n;return __generator(this,(function(i){this.code=e;this.Validate();this.hide(null);t=new FormData;t.append("rodzaj","wysylka_dpdpickup");t.append("koszyk","0");t.append("value",e);t.append("punktodbioru",e);n=new Headers;n.append("pragma","no-cache");n.append("cache-control","no-cache");fetch(this.api,{method:"POST",headers:n,body:t,credentials:"same-origin"});return[2]}))}))};e.prototype.render=function(){var e=this;return[this.code?h("p",null,this.pointMessage,": ",this.code):null,this.valid===false?h("p",{class:"missing"},this.missingMessage):null,h("ks-button",{round:true,icon:"map-pin",onClick:function(t){return e.show(t)},name:this.button}),h("input",{type:"hidden",name:"lokalizacjaRuch",value:this.code}),h("input",{type:"hidden",name:"ShippingDestinationCode",value:this.code}),h("ks-overlay",null,h("div",{class:"content"},h("div",{class:"topBar"},h("ks-img2",{src:"res/cart/dpd.svg",vertical:true,height:100,width:300}),h("ks-button",{icon:"x",onClick:function(t){return e.hide(t)}})),this.initialized?[h("script",{id:"dpd-widget",type:"text/javascript",innerHTML:"\n                            function pointSelected(pointID){\n                                document.querySelector('ks-order-dpd').select(pointID);\n                            }\n                        "}),h("script",{type:"text/javascript",src:"//pudofinder.dpd.com.pl/source/dpd_widget.js?key=a9b08eb6c1b218b975529f9cea0e1364"})]:null))]};Object.defineProperty(e.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();OrderDPD.style=orderDPDCss;export{OrderDPD as ks_order_dpd};