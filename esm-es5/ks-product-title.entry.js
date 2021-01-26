import{r as registerInstance,h}from"./index-74ff0cef.js";import"./index-b4f14e2e.js";import{s as store}from"./product-store-44debc87.js";var productTitleCss='ks-product-title{display:block}ks-product-title h1{font-family:var(--product-title-font);font-size:var(--product-title-size);color:var(--product-title-color);font-weight:700;margin:0 0 5px 0}ks-product-title h1>a{text-decoration:none !important;color:var(--product-title-brand-color) !important;opacity:1;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-product-title h1>a:hover{opacity:0.7}ks-product-title h1>a:active{opacity:0.5}ks-product-title>.breadcrumbs{margin-bottom:5px}ks-product-title>.breadcrumbs>a{font-family:var(--product-breadcrumb-font);font-size:var(--product-breadcrumb-size);color:var(--product-breadcrumb-color);text-decoration:none}ks-product-title>.breadcrumbs>a:not(:last-child):after{content:"/";color:var(--product-breadcrumb-color);margin:0 15px}ks-product-title>.breadcrumbs>a:focus{color:var(--product-breadcrumb-color)}ks-product-title>.breadcrumbs>a:hover{color:var(--product-breadcrumb-color-hover)}ks-product-title>.breadcrumbs>a:active{color:var(--product-breadcrumb-color-active)}@media only screen and (max-width: 960px){ks-product-title{text-align:center}}@media only screen and (max-width: 1100px){ks-product-title>.breadcrumbs+*{font-size:var(--product-title-size-small)}}@media only screen and (max-width: 460px){ks-product-title>.breadcrumbs{margin-bottom:10px}ks-product-title>.breadcrumbs>a{font-size:14px}ks-product-title>.breadcrumbs>a:not(:last-child):after{margin:0 10px}}';var ProductTitle=function(){function t(t){registerInstance(this,t)}t.prototype.render=function(){var t=this;var r=function(){var r=store.get("name");var e=store.get("brand").length;var o=store.get("brandLink");var a=t.brandIndex();if(a!==-1){var c=r.substr(0,a);var i=r.substr(a,e);var n=r.substr(a+e);return h("h1",null,c,h("a",{href:o},i),n)}return h("h1",null,r)};return[h("div",{class:"breadcrumbs"},store.get("breadcrumbs").map((function(t){return h("a",{href:t.link},t.name)}))),r()]};t.prototype.brandIndex=function(){return store.get("name").toLowerCase().indexOf(store.get("brand").toLowerCase())};return t}();ProductTitle.style=productTitleCss;export{ProductTitle as ks_product_title};