import{r as e,h as o,g as i}from"./index-09939813.js";const r=class{constructor(o){e(this,o),this.hideOnOdd=!1}render(){return o("a",{href:this.link},o("ks-img2",{horizontal:!0,src:this.image,width:this.width,height:this.height,alt:this.heading}),o("div",{class:"info"},o("h3",null,this.heading),o("div",null,o("a",{href:this.cuisineLink},this.cuisine),o("span",{class:"dot"},"•"),o("a",{href:this.categoryLink},this.category))))}get root(){return i(this)}};r.style="ks-recipe-card{display:block;background-color:#ffffff;-webkit-box-shadow:0 2px 8px rgba(0,0,0,0.15);box-shadow:0 2px 8px rgba(0,0,0,0.15)}ks-recipe-card>a{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-direction:column;flex-direction:column;position:relative;max-width:100%}ks-recipe-card a{color:inherit}ks-recipe-card .info{padding:15px;font-family:var(--font-regular);font-size:14px;text-align:center;text-decoration:none !important;color:#707070;-webkit-transition:color 0.3s ease, opacity 0.3s ease;transition:color 0.3s ease, opacity 0.3s ease}ks-recipe-card h3{font-family:var(--font-emphasis);font-size:20px;color:#252525;-webkit-transition:color 0.3s ease;transition:color 0.3s ease;margin-bottom:5px}ks-recipe-card .dot{margin:0 8px}ks-recipe-card a:hover{text-decoration:none}ks-recipe-card>a:hover .info{color:var(--color-secondary)}ks-recipe-card>a:hover h3{color:var(--color-secondary)}ks-recipe-card .info a:hover{opacity:0.6}@media screen and (min-width: 960px) and (max-width: 1199px){ks-recipe-card[hide-on-odd]{display:none !important}}";export{r as ks_recipe_card}