import{r as t,h as i,g as o}from"./index-b12dd603.js";import{A as r,R as a,a as n}from"./functions-33a63d52.js";const s=class{constructor(i){t(this,i),this.count="1",this.traits="",this.expand=!1,this.padding=!1,this.icon=!1,this.disabled=!1,this.product=!1,this.loading=!1}ClickHandler(t){const i=t||this.count;this.disabled||this.loading||(this.loading=!0,r(this.productId,i,this.traits,this.product?"0":"1",this.name,(t=>this.ResultHandler(t))))}ResultHandler(t){this.loading=!0,t?(document.querySelector("ks-navbar").IncrementCart(this.count),setTimeout((()=>this.loading=!1),1e3)):this.loading=!1}async AddToCart(t){this.ClickHandler(t)}async SetCount(t){this.count=t}render(){return i("button",{"aria-label":"Do koszyka",disabled:this.disabled,onClick:()=>this.ClickHandler()},this.loading?i("ks-loader",{large:!0}):this.icon?i("ks-icon",{name:"shopping-bag",size:.9}):i("span",null,"DO KOSZYKA"))}get root(){return o(this)}};s.style="ks-button-cart{display:block;height:100%}ks-button-cart[expand]{-webkit-box-flex:1;-ms-flex:1;flex:1}ks-button-cart[padding] button{padding:5px;min-height:50px}@media (min-width: 700px){ks-button-cart[padding] button{padding:10px;min-height:60px}}ks-button-cart button{position:relative;display:block;width:100%;height:100%;min-height:42px;min-width:44px;padding:1px 10px;font-size:.875rem;line-height:40px;text-align:center;text-decoration:none;text-transform:none;font-family:var(--font-regular);outline:none;border:none;border-radius:0px;color:white;background-color:var(--product-card-primary);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-button-cart button:hover{background-color:var(--product-card-primary-hover)}ks-button-cart button:active{background-color:var(--product-card-primary-active)}";const e=class{constructor(i){t(this,i),this.subtract=!1,this.expand=!1,this.padding=!1,this.loading=!1,this.success=!1}ClickHandler(){this.loading||this.success||(this.loading=!0,setTimeout((()=>{this.ResultHandler()}),1e3),this.subtract?a(this.productId,(()=>this.ResultHandler())):n(this.productId,(()=>this.ResultHandler())))}ResultHandler(){this.loading=!0,this.success=!0;const t=document.querySelector("ks-navbar");this.subtract?t.DecrementHeart():t.IncrementHeart()}render(){return i("button",{"aria-label":"Do koszyka",onClick:()=>this.ClickHandler()},this.loading?i("ks-loader",null):i("ks-icon",{name:this.subtract?"x":"star"}),this.success?i("div",{class:"success"},i("ks-icon",{name:"check"})):null)}get root(){return o(this)}};e.style="ks-button-fav{display:block;height:100%}ks-button-fav[expand]{-webkit-box-flex:1;-ms-flex:1;flex:1}ks-button-fav[padding] button{padding:5px;min-height:50px}@media (min-width: 700px){ks-button-fav[padding] button{min-height:60px;padding:10px}}ks-button-fav button{position:relative;display:block;width:100%;height:100%;min-height:42px;min-width:44px;padding:1px 10px;font-size:.875rem;line-height:40px;text-align:center;text-decoration:none;text-transform:none;outline:none;border:none;border-radius:0px;color:white;background-color:var(--product-card-secondary);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-button-fav button:hover{background-color:var(--product-card-secondary-hover)}ks-button-fav button:active{background-color:var(--product-card-secondary-active)}ks-button-fav .success{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background-color:var(--product-card-secondary);-webkit-animation:fade-in 0.2s 1;animation:fade-in 0.2s 1}";const c=class{constructor(i){t(this,i),this.unavailable=!1,this.linkOnly=!1}render(){const t=this.currentPrice?this.currentPrice.replace(".",",")+" zł":"",o=this.previousPrice?this.previousPrice.replace(".",",")+" zł":"";return[i("a",{href:this.link,"aria-label":this.name,class:"top"},i("ks-img",{fill:!0,src:this.img,width:280,height:280,alt:"zdjęcie produktu"}),this.name),i("div",{class:"price"},this.previousPrice?i("s",{class:"previous"},o):null,i("span",{class:"current"},t)),i("div",{class:"bottom"},this.unavailable?i("a",{href:this.link,class:"unavailable"},"NIEDOSTĘPNY"):this.linkOnly?i("a",{href:this.link,class:"link"},"ZOBACZ WIĘCEJ"):[i("ks-button-fav",{"product-id":this.productId}),i("ks-button-cart",{expand:!0,"product-id":this.productId,name:this.name})])]}};c.style="ks-product-card{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;text-align:center;background:var(--card-background);color:var(--card-text-color);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}@media (min-width: 360px){ks-product-card{width:calc(50% - 15px)}}@media (min-width: 640px){ks-product-card{width:230px}}ks-product-card .top{display:block;padding:15px;min-height:200px;color:inherit !important;text-decoration:none !important;font-size:14px}ks-product-card ks-img{height:auto;margin-bottom:10px}ks-product-card .price>*{display:block}ks-product-card .price .previous{color:#707070;font-size:14px}ks-product-card .price .current{color:var(--color-secondary);font-weight:bold;font-size:16px}ks-product-card .bottom{display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:10px}ks-product-card .bottom .unavailable,ks-product-card .bottom .link{display:block;width:100%;padding:10px 10px;font-size:.875rem;text-align:center;text-decoration:none;text-transform:none;color:white;background-color:var(--color-secondary);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-product-card .bottom .link:hover{background-color:var(--color-secondary-hover)}ks-product-card .bottom .link:active{background-color:var(--color-secondary-active)}ks-product-card[unavailable] .top,ks-product-card[unavailable] .price{opacity:0.6}@media (max-width: 420px){ks-product-card .top{font-size:13px;padding:8px}ks-product-card .price{line-height:18px}}";const d=class{constructor(i){t(this,i)}render(){return i("slot",null)}};d.style="ks-product-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;margin-left:-15px;margin-top:-15px}ks-product-container>*{margin-left:15px;margin-top:15px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width: 360px) and (max-width: 640px){ks-product-container>*{width:50%}}@media (min-width: 640px){ks-product-container>*{width:230px}}";export{s as ks_button_cart,e as ks_button_fav,c as ks_product_card,d as ks_product_container}