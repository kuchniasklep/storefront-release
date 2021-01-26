import{r as t,h as e,g as i}from"./p-f748ea6f.js";import{S as o}from"./p-d8362db6.js";const s=class{constructor(e){t(this,e),this.loading=!0,this.products=new Array}componentDidRender(){this.overlay=this.root.querySelector("ks-overlay")}async show(t,e){this.showCarousel(),this.loading=!0,this.name=e,this.products=[],this.overlay.show(),setTimeout((async()=>{const e=new Headers;e.append("pragma","no-cache"),e.append("cache-control","no-cache");let i=new FormData;i.append("id",t),await fetch(this.api,{method:"POST",body:i,headers:e,credentials:"same-origin"}).then((t=>t.json())).then((t=>{this.products=t,this.loading=!1}))}),1500)}hide(){this.overlay.hide()}toCart(){window.location.href="koszyk.html"}showCarousel(){null==this.carousel&&(this.carousel=new o(".product-suggestions",{observer:!0,observeParents:!0,slidesPerView:"auto",centeredSlides:!0,spaceBetween:10,initialSlide:1,preventInteractionOnTransition:!0}),console.log(this.carousel))}render(){return e("ks-overlay",null,e("div",{class:"content"},e("div",{class:"top"},e("div",{class:"heading"},"Dodano do koszyka"),e("div",{class:"name"},this.name),e("div",{class:"buttons"},e("ks-button",{tall:!0,secondary:!0,name:"Przejdź do koszyka",onClick:()=>this.toCart()}),e("ks-button",{tall:!0,name:"Przeglądaj dalej",onClick:()=>this.hide()}))),e("div",{class:"bottom"},this.loading?e("ks-loader",{dark:!0,large:!0}):null,e("div",{class:"swiper-container product-suggestions",style:{display:this.loading?"none":"block"}},e("div",{class:"swiper-wrapper"},this.products.map((t=>e("div",{class:"swiper-slide"},e("ks-product-card",{"link-only":!0,name:t.name,img:t.image,link:t.link,currentPrice:t.currentPrice,previousPrice:"0.00"!=t.previousPrice?t.previousPrice:null})))))),e("div",{class:"fade-left"}),e("div",{class:"fade-right"}))))}get root(){return i(this)}};s.style="ks-product-suggestions{display:block}ks-product-suggestions .content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;background-color:white;text-align:center}ks-product-suggestions .content>.top{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;padding:60px 20px;max-height:400px}ks-product-suggestions .content>.top>.heading{font-family:var(--font-emphasis);font-size:20px;font-weight:700}ks-product-suggestions .content>.top>.name{font-family:var(--font-emphasis);font-size:18px}ks-product-suggestions .content>.top>.buttons{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-top:20px;max-width:600px;width:100%}ks-product-suggestions .content>.top>.buttons>*{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;margin:5px}ks-product-suggestions .content>.bottom{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;padding:10px 0px;height:100%;background-color:#f2f2f2}ks-product-suggestions .content>.bottom>.fade-left,ks-product-suggestions .content>.bottom>.fade-right{position:absolute;top:0;height:100%;width:50px;z-index:1}ks-product-suggestions .content>.bottom>.fade-left{background-image:-webkit-gradient(linear, left top, right top, from(#f2f2f2), to(rgba(242, 242, 242, 0)));background-image:linear-gradient(to right, #f2f2f2, rgba(242, 242, 242, 0));left:0}ks-product-suggestions .content>.bottom>.fade-right{background-image:-webkit-gradient(linear, right top, left top, from(#f2f2f2), to(rgba(242, 242, 242, 0)));background-image:linear-gradient(to left, #f2f2f2, rgba(242, 242, 242, 0));right:0}ks-product-suggestions .swiper-container{width:100%;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto}ks-product-suggestions .swiper-slide{height:100%;width:auto;max-width:230px;overflow:hidden;-webkit-animation:fade-in 0.8s ease 1;animation:fade-in 0.8s ease 1}ks-product-suggestions .swiper-slide>*{width:230px}@media (max-width: 560px){ks-product-suggestions .content>.top{padding:20px 10px}ks-product-suggestions .content>.top>.buttons{width:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;margin-top:10px}}@media (max-width: 370px){ks-product-suggestions .content>.top>.buttons>*>button{padding-top:12px;padding-bottom:12px}ks-product-suggestions .content>.top>.heading{font-size:18px}ks-product-suggestions .content>.top>.name{font-family:var(--font-regular);font-size:14px}ks-product-suggestions .swiper-slide>*{width:200px}}";export{s as ks_product_suggestions}