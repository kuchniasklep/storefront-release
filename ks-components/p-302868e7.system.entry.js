System.register(["./p-7597974d.system.js"],(function(t){"use strict";var e,n;return{setters:[function(t){e=t.r;n=t.h}],execute:function(){var r=t("ks_order_country_select",function(){function t(t){e(this,t);this.lightUp=false}t.prototype.Change=function(t){if(this.connectTo){var e=document.querySelector('ks-input-select-dynamic[name="'+this.connectTo+'"]');var n=t.target;e.setAttribute("api-data",n.value);e.setAttribute("light-up","false")}};t.prototype.render=function(){var t=this;return n("ks-input-select",{name:this.name,label:this.label,onChange:function(e){return t.Change(e)},"light-up":this.lightUp},n("slot",null))};return t}())}}}));