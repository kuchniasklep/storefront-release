import{r as t}from"./index-aa615a50.js";import{t as e,r}from"./store-49d14f1e.js";import"./index-6936e5a4.js";class n{constructor(){this.ttq=new Promise((t=>{var e=setInterval((()=>{void 0!==ttq&&(t(ttq),clearInterval(e))}),100)}))}pageview(){this.ttq.then((t=>{t.track("Browse")}))}product(t,e,r,n){this.ttq.then((c=>{c.track("ViewContent",{content_type:"product",content_id:t,content_name:e,currency:n,price:r,quantity:1,value:r})}))}addToCart(t,e,r,n,c){this.ttq.then((o=>{o.track("AddToCart",{content_type:"product",content_id:t,content_name:e,currency:c,price:r,quantity:n,value:r*n})}))}order_checkout(t,e,r){this.ttq.then((n=>{n.track("StartCheckout",{contents:this.transformProducts(t),currency:r,value:e})}))}order_form(t,e,r){this.ttq.then((n=>{n.track("AddBilling",{contents:this.transformProducts(t),value:e,currency:r})}))}order_placed(t,e,r){this.ttq.then((n=>{n.track("Checkout",{contents:this.transformProducts(t),value:e,currency:r})}))}search(t){}transformProducts(t){return t.map((t=>({content_id:t.id,content_type:"product",content_name:t.name,quantity:t.quantity,price:t.price})))}}class c{constructor(t){const e=t.split(", ");this.pixel=new Promise((t=>{var r,n,c,o,s,a;r=window,n=document,c="script",r.fbq||(o=r.fbq=function(){o.callMethod?o.callMethod.apply(o,arguments):o.queue.push(arguments)},r._fbq||(r._fbq=o),o.push=o,o.loaded=!0,o.version="2.0",o.queue=[],(s=n.createElement(c)).async=!0,s.src="https://connect.facebook.net/en_US/fbevents.js",(a=n.getElementsByTagName(c)[0]).parentNode.insertBefore(s,a)),e.forEach((t=>{fbq("init",t)})),t(fbq)}))}pageview(){this.pixel.then((t=>{t("track","PageView")}))}product(t,e,r,n){this.pixel.then((c=>{c("track","ViewContent",{content_type:"product",content_name:e,value:r,currency:n,content_ids:[t]})}))}addToCart(t,e,r,n,c){this.pixel.then((o=>{o("track","AddToCart",{content_type:"product",content_name:e,value:r,currency:c,contents:[{id:t,quantity:n}]})}))}order_checkout(t,e,r){this.pixel.then((n=>{n("track","InitiateCheckout",{contents:this.transformProducts(t),value:e,currency:r})}))}order_form(t,e,r){}order_placed(t,e,r){this.pixel.then((n=>{n("track","Purchase",{contents:this.transformProducts(t),content_type:"product",value:e,currency:r})}))}search(t){this.pixel.then((e=>{e("track","Search",{search_string:t})}))}transformProducts(t){return t.map((t=>({id:t.id,quantity:t.quantity})))}}const o=class{constructor(e){t(this,e)}componentWillLoad(){e.get("loaded").then((()=>{this.tiktok&&this.appendTracker(new n),this.facebook&&this.appendTracker(new c(this.facebook)),r()}))}appendTracker(t){e.set("trackers",[...e.get("trackers"),t])}};export{o as ks_tracker}