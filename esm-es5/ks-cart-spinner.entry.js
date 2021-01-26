var __awaiter=this&&this.__awaiter||function(t,n,e,i){function r(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,a){function o(t){try{s(i.next(t))}catch(n){a(n)}}function u(t){try{s(i["throw"](t))}catch(n){a(n)}}function s(t){t.done?e(t.value):r(t.value).then(o,u)}s((i=i.apply(t,n||[])).next())}))};var __generator=this&&this.__generator||function(t,n){var e={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},i,r,a,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(t){return function(n){return s([t,n])}}function s(o){if(i)throw new TypeError("Generator is already executing.");while(e)try{if(i=1,r&&(a=o[0]&2?r["return"]:o[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;if(r=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:e.label++;return{value:o[1],done:false};case 5:e.label++;r=o[1];o=[0];continue;case 7:o=e.ops.pop();e.trys.pop();continue;default:if(!(a=e.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){e=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){e.label=o[1];break}if(o[0]===6&&e.label<a[1]){e.label=a[1];a=o;break}if(a&&e.label<a[2]){e.label=a[2];e.ops.push(o);break}if(a[2])e.ops.pop();e.trys.pop();continue}o=n.call(t,e)}catch(u){o=[6,u];r=0}finally{i=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};import{r as registerInstance,c as createEvent,h}from"./index-74ff0cef.js";var cartSpinnerCss="ks-cart-spinner{display:inline-block;text-align:center}ks-cart-spinner input{width:50px !important;margin:0 !important;font-size:14px !important;text-align:center !important}";var CartSpinner=function(){function t(t){registerInstance(this,t);this.changed=createEvent(this,"changed",7);this.initialValue=1;this.value=1}t.prototype.componentWillLoad=function(){this.value=this.initialValue};t.prototype.Increment=function(){var t=this.value;if(typeof this.max==="undefined"||this.value<this.max){this.value+=1;this.onChangedHandler(this.value,t)}};t.prototype.Decrement=function(){var t=this.value;if(this.value>1){this.value-=1;this.onChangedHandler(this.value,t)}};t.prototype.Change=function(t){var n=this.value;var e=t.target;var i=parseInt(e.value);if(!isNaN(i)&&i>0&&(typeof this.max==="undefined"||i<=this.max))this.value=i;else if(i>this.max){this.value=this.max;e.value=this.max.toString()}else{this.value=1;e.value="1"}this.onChangedHandler(this.value,n)};t.prototype.onChangedHandler=function(t,n){this.changed.emit({current:t,last:n})};t.prototype.SetAmount=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(n){this.value=t;return[2]}))}))};t.prototype.render=function(){var t=this;return this.max==1?h("div",null,"1 szt."):h("div",null,h("button",{class:"uk-button uk-button-muted",onClick:function(){return t.Decrement()}},"-"),h("input",{type:"text",maxlength:"3",value:this.value,name:this.name,onChange:function(n){return t.Change(n)},class:"uk-input"}),h("button",{class:"uk-button uk-button-muted",onClick:function(){return t.Increment()}},"+"))};return t}();CartSpinner.style=cartSpinnerCss;export{CartSpinner as ks_cart_spinner};