System.register(["./p-526368ae.system.js"],(function(t){"use strict";var e,r,i;return{setters:[function(t){e=t.r;r=t.h;i=t.g}],execute:function(){var o=t("ks_order_progress",function(){function t(t){e(this,t);this.mobile=false}t.prototype.componentDidLoad=function(){this.root.style.display="block";this.root.style.width="100%"};t.prototype.resizeHandler=function(){this.mobile=window.innerWidth<800?true:false};t.prototype.componentWillLoad=function(){this.resizeHandler()};t.prototype.StepStyle=function(t){var e={padding:this.mobile?"20px":"30px",backgroundColor:"#252525",color:"white",borderLeft:"1px solid #404040"};var r=Object.assign(Object.assign({},e),{backgroundColor:"#404040",borderLeft:"1px solid #404040"});if(this.mobile)return e;if(t==this.current)return r;else return e};t.prototype.render=function(){return[r("div",{class:"uk-text-center uk-flex uk-flex-evenly ks-text-decorated "+(this.mobile?"uk-child-width-1-1":"uk-child-width-1-3"),style:{fontSize:"16px",backgroundColor:"#252525"}},!this.mobile||this.current==0?r("div",{style:this.StepStyle(0)},r("span",{"uk-icon":"icon: cart; ratio: 1.2",style:{marginRight:"5px",transform:"translateY(-3px)"}})," Koszyk"):null,!this.mobile||this.current==1?r("div",{style:this.StepStyle(1)},r("span",{"uk-icon":"icon: user; ratio: 1.2",style:{marginRight:"5px",transform:"translateY(-2px)"}})," Dane do wysłki"):null,!this.mobile||this.current==2?r("div",{style:this.StepStyle(2)},r("span",{"uk-icon":"icon: check; ratio: 1.2",style:{marginRight:"5px",transform:"translateY(-1px)"}})," Potwierdzenie"):null)]};Object.defineProperty(t.prototype,"root",{get:function(){return i(this)},enumerable:true,configurable:true});return t}())}}}));