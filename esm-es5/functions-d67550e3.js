var __awaiter=this&&this.__awaiter||function(e,t,n,o){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function i(e){try{c(o.next(e))}catch(t){a(t)}}function u(e){try{c(o["throw"](e))}catch(t){a(t)}}function c(e){e.done?n(e.value):r(e.value).then(i,u)}c((o=o.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},o,r,a,i;return i={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function u(e){return function(t){return c([e,t])}}function c(i){if(o)throw new TypeError("Generator is already executing.");while(n)try{if(o=1,r&&(a=i[0]&2?r["return"]:i[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;if(r=0,a)i=[i[0]&2,a.value];switch(i[0]){case 0:case 1:a=i;break;case 4:n.label++;return{value:i[1],done:false};case 5:n.label++;r=i[1];i=[0];continue;case 7:i=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(i[0]===6||i[0]===2)){n=0;continue}if(i[0]===3&&(!a||i[1]>a[0]&&i[1]<a[3])){n.label=i[1];break}if(i[0]===6&&n.label<a[1]){n.label=a[1];a=i;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(i);break}if(a[2])n.ops.pop();n.trys.pop();continue}i=t.call(e,n)}catch(u){i=[6,u];r=0}finally{o=a=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};function cartfetch(e,t){return __awaiter(this,void 0,void 0,(function(){var n;return __generator(this,(function(o){n=new Headers;n.append("pragma","no-cache");n.append("cache-control","no-cache");return[2,fetch(e,{method:"POST",body:t,headers:n,credentials:"same-origin"}).then((function(e){if(!e.ok)throw{name:e.status,message:e.statusText};return e}))]}))}))}function AddToFavourites(e,t){var n=document.querySelector("ks-navbar");var o=document.querySelector("ks-error-popup");var r=new FormData;r.append("id",e);cartfetch("inne/do_schowka.php?tok="+ksFavouritesToken,r).then((function(){if(t)t();n.IncrementHeart()})).catch((function(e){o.show(e);if(t)t()}))}function RemoveFromFavourites(e,t){$.post("inne/do_schowka.php?tok="+ksFavouritesRemoveToken,{id:e,akcja:"usun"},(function(){window.location.reload();if(t)t()}))}function RemoveAllFavourites(e){$.post("inne/schowek_usun.php?tok="+ksFavouritesRemoveAllToken,{},(function(){window.location.reload();if(e)e()}))}function OpenSuggestions(e,t){var n=document.querySelector("ks-product-suggestions");n.show(e,t)}export{AddToFavourites as A,OpenSuggestions as O,RemoveFromFavourites as R,RemoveAllFavourites as a};