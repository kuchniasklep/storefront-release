import{r as t}from"./index-aa615a50.js";import{t as e,r}from"./store-49d14f1e.js";import"./index-6936e5a4.js";class n{constructor(){this.ttq=new Promise((t=>{var e=setInterval((()=>{void 0!==ttq&&(t(ttq),clearInterval(e))}),100)}))}pageview(){this.ttq.then((t=>{t.track("Browse")}))}product(t,e,r,n){this.ttq.then((c=>{c.track("ViewContent",{content_type:"product",content_id:t,content_name:e,currency:n,price:r,quantity:1,value:r})}))}addToCart(t,e,r,n,c){this.ttq.then((o=>{o.track("AddToCart",{content_type:"product",content_id:t,content_name:e,currency:c,price:r,quantity:n,value:r*n})}))}order_checkout(t,e,r){this.ttq.then((n=>{n.track("StartCheckout",{contents:this.transformProducts(t),currency:r,value:e})}))}order_form(t,e,r){this.ttq.then((n=>{n.track("AddBilling",{contents:this.transformProducts(t),value:e,currency:r})}))}order_placed(t,e,r){this.ttq.then((n=>{n.track("Checkout",{contents:this.transformProducts(t),value:e,currency:r})}))}search(t){this.ttq.then((e=>{e.track("Search",{query:t})}))}transformProducts(t){return t.map((t=>({content_id:t.id,content_type:"product",content_name:t.name,quantity:t.quantity,price:t.price})))}}const c=class{constructor(e){t(this,e)}componentWillLoad(){e.get("loaded").then((()=>{this.tiktok&&this.appendTracker(new n),r()}))}appendTracker(t){e.set("trackers",[...e.get("trackers"),t])}};export{c as ks_tracker}