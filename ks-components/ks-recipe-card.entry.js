import{r as e,h as i,g as o}from"./index-1e6d4cbd.js";const r=class{constructor(i){e(this,i),this.hideOnOdd=!1}render(){return i("a",{href:this.link},i("ks-img",{src:this.image,alt:this.heading,center:!0}),i("div",{class:"info"},i("h3",null,this.heading),i("div",null,i("span",null,this.cuisine),i("span",{class:"dot"},"•"),i("span",null,this.category))),i("div",{class:"views"},i("ks-icon",{name:"search",size:.75})," ",this.views))}get root(){return o(this)}};r.style="ks-recipe-card{display:block;background-color:#ffffff;-webkit-box-shadow:0 2px 8px rgba(0,0,0,0.15);box-shadow:0 2px 8px rgba(0,0,0,0.15)}ks-recipe-card>a{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative}ks-recipe-card .views{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;top:8px;right:12px;color:transparent;-webkit-transition:color 0.3s ease;transition:color 0.3s ease}ks-recipe-card .views ks-icon{margin-right:3px}ks-recipe-card .info{padding:15px;font-family:var(--font-regular);font-size:14px;text-align:center;text-decoration:none !important;color:#707070;-webkit-transition:color 0.3s ease;transition:color 0.3s ease}ks-recipe-card h3{font-family:var(--font-emphasis);font-size:20px;color:#252525;-webkit-transition:color 0.3s ease;transition:color 0.3s ease;margin-bottom:5px}ks-recipe-card .dot{margin:0 8px}ks-recipe-card a:hover{text-decoration:none}ks-recipe-card>a:hover .info{color:var(--color-secondary)}ks-recipe-card>a:hover h3{color:var(--color-secondary)}ks-recipe-card>a:hover .views{color:#ffffff}@media screen and (min-width: 960px) and (max-width: 1199px){ks-recipe-card[hide-on-odd]{display:none !important}}";export{r as ks_recipe_card}