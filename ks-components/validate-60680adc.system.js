var __awaiter=this&&this.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,u){function o(e){try{f(r.next(e))}catch(t){u(t)}}function a(e){try{f(r["throw"](e))}catch(t){u(t)}}function f(e){e.done?n(e.value):i(e.value).then(o,a)}f((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(u[0]&1)throw u[1];return u[1]},trys:[],ops:[]},r,i,u,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(e){return function(t){return f([e,t])}}function f(o){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(u=o[0]&2?i["return"]:o[0]?i["throw"]||((u=i["return"])&&u.call(i),0):i.next)&&!(u=u.call(i,o[1])).done)return u;if(i=0,u)o=[o[0]&2,u.value];switch(o[0]){case 0:case 1:u=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;i=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(u=n.trys,u=u.length>0&&u[u.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!u||o[1]>u[0]&&o[1]<u[3])){n.label=o[1];break}if(o[0]===6&&n.label<u[1]){n.label=u[1];u=o;break}if(u&&n.label<u[2]){n.label=u[2];n.ops.push(o);break}if(u[2])n.ops.pop();n.trys.pop();continue}o=t.call(e,n)}catch(a){o=[6,a];i=0}finally{r=u=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./index-fe43986b.system.js"],(function(e){"use strict";var t,n;return{setters:[function(e){t=e.e;n=e.f}],execute:function(){e("V",l);var r=function(e,t,n){var r=e.get(t);if(!r){e.set(t,[n])}else if(!r.includes(n)){r.push(n)}};var i=function(e,t){var n;return function(){var r=[];for(var i=0;i<arguments.length;i++){r[i]=arguments[i]}if(n){clearTimeout(n)}n=setTimeout((function(){n=0;e.apply(void 0,r)}),t)}};var u=function(e){return!("isConnected"in e)||e.isConnected};var o=i((function(e){for(var t=0,n=e.keys();t<n.length;t++){var r=n[t];e.set(r,e.get(r).filter(u))}}),2e3);var a=function(e){var i=e.on;var u=new Map;if(typeof t==="function"){i("dispose",(function(){u.clear()}));i("get",(function(e){var n=t();if(n){r(u,e,n)}}));i("set",(function(e){var t=u.get(e);if(t){u.set(e,t.filter(n))}o(u)}));i("reset",(function(){u.forEach((function(e){return e.forEach(n)}));o(u)}))}};var f=function(e,t){if(t===void 0){t=function(e,t){return e!==t}}var n=new Map(Object.entries(e!==null&&e!==void 0?e:{}));var r={dispose:[],get:[],set:[],reset:[]};var i=function(){n=new Map(Object.entries(e!==null&&e!==void 0?e:{}));r.reset.forEach((function(e){return e()}))};var u=function(){r.dispose.forEach((function(e){return e()}));i()};var o=function(e){r.get.forEach((function(t){return t(e)}));return n.get(e)};var a=function(e,i){var u=n.get(e);if(t(i,u,e)){n.set(e,i);r.set.forEach((function(t){return t(e,i,u)}))}};var f=typeof Proxy==="undefined"?{}:new Proxy(e,{get:function(e,t){return o(t)},ownKeys:function(e){return Array.from(n.keys())},getOwnPropertyDescriptor:function(){return{enumerable:true,configurable:true}},has:function(e,t){return n.has(t)},set:function(e,t,n){a(t,n);return true}});var s=function(e,t){r[e].push(t);return function(){c(r[e],t)}};var l=function(t,n){var r=s("set",(function(e,r){if(e===t){n(r)}}));var i=s("reset",(function(){return n(e[t])}));return function(){r();i()}};var v=function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}return e.forEach((function(e){if(e.set){s("set",e.set)}if(e.get){s("get",e.get)}if(e.reset){s("reset",e.reset)}}))};return{state:f,get:o,set:a,on:s,onChange:l,use:v,dispose:u,reset:i}};var c=function(e,t){var n=e.indexOf(t);if(n>=0){e[n]=e[e.length-1];e.length--}};var s=e("c",(function(e,t){var n=f(e,t);a(n);return n}));function l(e){return __awaiter(this,void 0,void 0,(function(){var t,n,r,i;return __generator(this,(function(u){switch(u.label){case 0:t=e.querySelectorAll("ks-input-text, ks-input-textarea, ks-input-check, ks-input-number, ks-input-date, ks-input-select");n=true;r=0;u.label=1;case 1:if(!(r<t.length))return[3,5];i=t[r];return[4,i.Validate()];case 2:u.sent();return[4,i.IsValid()];case 3:if(u.sent()==false){n=false}u.label=4;case 4:r++;return[3,1];case 5:return[2,n]}}))}))}}}}));