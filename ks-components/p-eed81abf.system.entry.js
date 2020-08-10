var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function u(t){try{o(r.next(t))}catch(e){a(e)}}function s(t){try{o(r["throw"](t))}catch(e){a(e)}}function o(t){t.done?n(t.value):i(t.value).then(u,s)}o((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,u;return u={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function s(t){return function(e){return o([t,e])}}function o(u){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(a=u[0]&2?i["return"]:u[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,u[1])).done)return a;if(i=0,a)u=[u[0]&2,a.value];switch(u[0]){case 0:case 1:a=u;break;case 4:n.label++;return{value:u[1],done:false};case 5:n.label++;i=u[1];u=[0];continue;case 7:u=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!a||u[1]>a[0]&&u[1]<a[3])){n.label=u[1];break}if(u[0]===6&&n.label<a[1]){n.label=a[1];a=u;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(u);break}if(a[2])n.ops.pop();n.trys.pop();continue}u=e.call(t,n)}catch(s){u=[6,s];i=0}finally{r=a=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};System.register(["./p-526368ae.system.js","./p-e847e88b.system.js","./p-8c1a3522.system.js"],(function(t){"use strict";var e,n,r,i;return{setters:[function(t){e=t.r;n=t.h;r=t.g},function(){},function(t){i=t.T}],execute:function(){var a=t("ks_product_buttons",function(){function t(t){e(this,t);this.value="1"}t.prototype.render=function(){return[n("div",{class:"uk-grid-small uk-margin-small-top","uk-grid":true},this.buttons.available?this.CartButtons(this.buttons.id,this.traitIDs,this.name,this.availability.toString()):this.UnavailableButtons(this.buttons.contact)),n("div",{class:"uk-margin-small-top uk-margin-bottom"},n("ks-flex",{gutter:true},this.InstallmentButtons(this.currentPrice)))]};t.prototype.CartButtons=function(t,e,r,i){var a=this;return[n("div",{class:"uk-width-expand"},n("ks-button-cart",{product:true,productId:t,name:r,traits:e,count:this.value})),n("div",{class:"uk-width-1-4 uk-width-1-5@s"},n("ks-button-fav",{expand:true,"product-id":t})),i?n("form",{class:"uk-width-1-1 uk-width-1-5@s",onSubmit:function(t){return a.Submit(t)}},n("input",{class:"uk-input uk-text-center",type:"number",min:"1",max:i,value:this.value,"aria-label":"Ilość",onChange:function(){return a.CountChange(i)}})):null]};t.prototype.Submit=function(t){t.preventDefault();var e=this.root.querySelector("ks-button-cart");e.AddToCart(this.value)};t.prototype.CountChange=function(t){var e=this.root.querySelector("input");var n=parseInt(e.value);if(n>parseInt(t)){this.value=t}else if(n<1)this.value="1";else{this.value=n.toString()}e.value=this.value;var r=this.root.querySelector("ks-button-cart");r.SetCount(this.value);this.updateShippingTime(this.buttons.id,parseInt(this.value))};t.prototype.UnavailableButtons=function(t){return n("div",{class:"uk-width-expand"},t?n("a",{href:t,rel:"nofollow",class:"uk-button-danger uk-button uk-width-expand"},"NIEDOSTĘPNY, WYŚLIJ ZAPYTANIE"):n("button",{class:"uk-button-danger uk-button uk-width-1-1",disabled:true},"NIEDOSTĘPNY"))};t.prototype.InstallmentButtons=function(t){var e=parseInt(t);var r=false;var i=false;if(e>=500&&e<=2e4)i=true;if(e>=300&&e<=2e4)r=true;return[i?n("div",{class:"uk-flex-1"},n("button",{id:"ks-product-creditagricole",class:"uk-button uk-button-secondary uk-width-expand"},"RATY CA"),n("ks-product-creditagricole",{price:t,button:"ks-product-creditagricole"})):null,r?n("div",{class:"uk-flex-1"},n("button",{id:"ks-product-payu",class:"uk-button uk-button-secondary uk-width-expand"},"RATY PAYU"),n("ks-product-payu",{price:t,button:"ks-product-payu"})):null]};Object.defineProperty(t.prototype,"root",{get:function(){return r(this)},enumerable:true,configurable:true});return t}());i.injectProps(a,["buttons","traitIDs","name","availability","currentPrice","updateShippingTime"]);var u=t("ks_product_codes",function(){function t(t){e(this,t)}t.prototype.render=function(){return n(i.Consumer,null,(function(t){return n("div",{class:"uk-margin-bottom uk-flex uk-flex-center uk-flex-wrap"},t.catalog?n("span",{class:"uk-label"}," ",n("b",null,"ID:")," ",t.catalog," "):null,t.model?n("span",{class:"uk-label"}," ",n("b",null,"Model:")," ",t.model," "):null,t.ean?n("span",{class:"uk-label"}," ",n("b",null,"EAN:")," ",t.ean," "):null,t.brand&&t.brandLink?n("a",{href:t.brandLink},n("span",{class:"uk-label"}," ",n("b",null,"Producent:")," ",t.brand," ")):null,t.warranty?t.warrantyLink?n("a",{href:t.warrantyLink},n("span",{class:"uk-label uk-label-danger"}," ",t.warranty," ")):n("span",{class:"uk-label uk-label-danger"}," ",t.warranty," "):null)}))};return t}());var s=t("ks_product_images",function(){function t(t){e(this,t)}t.prototype.render=function(){var t=0;return n(i.Consumer,null,(function(e){var r=e.images;return n("div",{"uk-slideshow":"max-height: 500; ratio: 1:1; animation: slide"},n("div",{class:"uk-position-relative"},n("ul",{class:"uk-slideshow-items","uk-lightbox":true},r.map((function(t){return n("li",null,n("a",{href:t.full,"aria-label":"Podgląd zdjęcia"},n("ks-img",{vertical:true,center:true,src:t.preview,alt:"Zdjęcie produktu"})))})))),n("div",{class:"uk-position-small"},n("ul",{class:"uk-thumbnav uk-flex-center"},r.map((function(e){return n("li",{"uk-slideshow-item":t++},n("a",{href:"#","aria-label":"miniaturka zdjęcia"},n("ks-image",{src:e.thumb,alt:"Miniaturka zdjęcia",width:"50",height:"50"})))})))))}))};return t}());var o=t("ks_product_price",function(){function t(t){e(this,t)}t.prototype.render=function(){return n(i.Consumer,null,(function(t){var e=t.previousPrice.replace(".",",")+" zł";var r=t.currentPrice.replace(".",",")+" zł";var i=t.shippingPrice.replace(".",",")+" zł";return n("div",{class:"uk-margin-small-bottom"},n("hr",null),n("div",{class:"uk-flex uk-flex-wrap uk-flex-center uk-flex-between@s uk-flex-middle uk-text-center","uk-grid":true},n("div",{class:"uk-text-left@s"},t.previousPrice?n("h4",{style:{margin:"0"}},n("s",null,n("b",null,e))):null,n("h3",{style:{color:"rgb(255, 27, 57)",margin:"0"}},n("b",null,r))),n("div",{class:"uk-visible@s"},"Koszt wysyłki:",n("h4",{style:{margin:"0"}},n("b",null,i))),n("div",{class:"uk-visible@s"},"Czas wysyłki:",n("h4",{style:{margin:"0"}},n("b",null,t.shippingTime)))),n("div",{class:"uk-hidden@s uk-text-center uk-margin-top"},n("div",null,"Koszt wysyłki: ",n("b",null,i)),n("div",null,"Czas wysyłki: ",n("b",null,t.shippingTime))),n("hr",null))}))};return t}());var l=t("ks_product_schema",function(){function t(t){e(this,t)}t.prototype.render=function(){var t=this;return n(i.Consumer,null,(function(e){return n("script",{type:"application/ld+json"},t.generateData(e))}))};t.prototype.generateData=function(t){var e=t.images.map((function(t){return"https://kuchniasklep.pl"+t.preview}));var n=new Date;n.setDate(n.getDate()+4*30);var r=n.toISOString().indexOf("T");var i=n.toISOString().substr(0,r);var a={"@context":"https://schema.org/","@type":"Product",name:t.name,description:t.description,image:e,brand:{"@type":"Thing",name:t.brand},sku:t.catalog,mpn:t.model,gtin13:t.ean,aggregateRating:t.reviews.count?{"@type":"AggregateRating",ratingValue:t.reviews.score,reviewCount:t.reviews.count}:"",review:t.reviews.review.length>0?{"@type":"Review",reviewRating:{"@type":"Rating",ratingValue:t.reviews.review[0].overallScore,bestRating:t.reviews.review[0].bestScore},author:{"@type":"Person",name:t.reviews.review[0].name}}:"",offers:{"@type":"Offer",url:window.location.href,priceCurrency:"PLN",price:t.currentPrice,priceValidUntil:i,itemCondition:"https://schema.org/NewCondition",availability:t.availability>0?"InStock":"OutOfStock"}};return JSON.stringify(a)};return t}());var c=t("ks_product_title",function(){function t(t){e(this,t)}t.prototype.render=function(){return n(i.Consumer,null,(function(t){var e=t.name,r=t.breadcrumbs;return n("div",{class:"uk-text-center uk-text-left@m uk-margin-bottom"},n("h1",{style:{marginBottom:"5px"}},n("b",null,e)),n("ks-breadcrumbs",{center:true,mobile:true},r.map((function(t){return n("li",null,n("a",{href:t.link},t.name))}))))}))};return t}());var p=t("ks_product_trait",function(){function t(t){e(this,t)}t.prototype.selectedTraits=function(t){var e=this.root.querySelectorAll("select");for(var n=0;n<e.length;n++){var r=e[n];var i=r.selectedIndex;t.traits[n].selected=t.traits[n].items[i].id}var a="";for(var n=0;n<t.traits.length;n++){var u=t.traits[n];a+="x"+u.id+"-"+u.selected}return a};t.prototype.selectTrait=function(t){return __awaiter(this,void 0,void 0,(function(){var e,n,r,i;return __generator(this,(function(a){switch(a.label){case 0:e=t.buttons.id;n=this.selectedTraits(t);return[4,this.fetchTraits("inne/produkt.php",ksTraitsToken,e,n)];case 1:r=a.sent();return[4,this.fetchTraits("inne/produkt_cecha_zdjecie.php",ksTraitImageToken,e,n)];case 2:i=a.sent();t.update({currentPrice:r.cena,previousPrice:r.cenapoprzednia,ean:r.ean,catalog:r.nrkat,traitIDs:n});t.updateImage({full:i.duze,preview:i.duze,thumb:i.male});return[2]}}))}))};t.prototype.fetchTraits=function(t,e,n,r){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(i){return[2,new Promise((function(i){$.post(t+"?tok="+e,{id:"555_"+n,cechy:r},(function(t){i(t)}),"json")}))]}))}))};t.prototype.render=function(){var t=this;return n(i.Consumer,null,(function(e){e.update({traitIDs:t.selectedTraits(e)});return e.traits.map((function(r){return n("div",{class:"uk-margin-bottom"},n("ks-flex",null,n("div",{class:"uk-width-auto uk-flex uk-flex-center uk-flex-middle uk-padding-remove uk-margin-right"},r.name),n("div",{class:"uk-width-expand"},n("select",{"aria-label":r.name,class:"uk-select",onChange:function(){return t.selectTrait(e)}},r.items.map((function(t){return n("option",null,t.name)}))))))}))}))};Object.defineProperty(t.prototype,"root",{get:function(){return r(this)},enumerable:true,configurable:true});return t}())}}}));