var __awaiter=this&&this.__awaiter||function(e,n,t,o){function r(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,a){function i(e){try{c(o.next(e))}catch(n){a(n)}}function u(e){try{c(o["throw"](e))}catch(n){a(n)}}function c(e){e.done?t(e.value):r(e.value).then(i,u)}c((o=o.apply(e,n||[])).next())}))};var __generator=this&&this.__generator||function(e,n){var t={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},o,r,a,i;return i={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function u(e){return function(n){return c([e,n])}}function c(i){if(o)throw new TypeError("Generator is already executing.");while(t)try{if(o=1,r&&(a=i[0]&2?r["return"]:i[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;if(r=0,a)i=[i[0]&2,a.value];switch(i[0]){case 0:case 1:a=i;break;case 4:t.label++;return{value:i[1],done:false};case 5:t.label++;r=i[1];i=[0];continue;case 7:i=t.ops.pop();t.trys.pop();continue;default:if(!(a=t.trys,a=a.length>0&&a[a.length-1])&&(i[0]===6||i[0]===2)){t=0;continue}if(i[0]===3&&(!a||i[1]>a[0]&&i[1]<a[3])){t.label=i[1];break}if(i[0]===6&&t.label<a[1]){t.label=a[1];a=i;break}if(a&&t.label<a[2]){t.label=a[2];t.ops.push(i);break}if(a[2])t.ops.pop();t.trys.pop();continue}i=n.call(e,t)}catch(u){i=[6,u];r=0}finally{o=a=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};System.register([],(function(e){"use strict";return{execute:function(){e({A:t,O:a,R:o,a:r});function n(e,n){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(o){t=new Headers;t.append("pragma","no-cache");t.append("cache-control","no-cache");return[2,fetch(e,{method:"POST",body:n,headers:t,credentials:"same-origin"}).then((function(e){if(!e.ok)throw{name:e.status,message:e.statusText};return e}))]}))}))}function t(e,t){var o=document.querySelector("ks-navbar");var r=document.querySelector("ks-error-popup");var a=new FormData;a.append("id",e);n("inne/do_schowka.php?tok="+ksFavouritesToken,a).then((function(){if(t)t();o.IncrementHeart()})).catch((function(e){r.show(e);if(t)t()}))}function o(e,n){$.post("inne/do_schowka.php?tok="+ksFavouritesRemoveToken,{id:e,akcja:"usun"},(function(){window.location.reload();if(n)n()}))}function r(e){$.post("inne/schowek_usun.php?tok="+ksFavouritesRemoveAllToken,{},(function(){window.location.reload();if(e)e()}))}function a(e,n){var t=document.querySelector("ks-product-suggestions");t.show(e,n)}}}}));