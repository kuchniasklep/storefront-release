'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-18d28dc7.js');
require('./index-7cc854df.js');
const productStore = require('./product-store-525142bc.js');

const productTitleCss = "ks-product-title{display:block}ks-product-title h1{font-family:var(--product-title-font);font-size:var(--product-title-size);color:var(--product-title-color);font-weight:700;margin:0 0 5px 0}ks-product-title h1>a{text-decoration:none !important;color:var(--product-title-brand-color) !important;opacity:1;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-product-title h1>a:hover{opacity:0.7}ks-product-title h1>a:active{opacity:0.5}ks-product-title>.breadcrumbs{margin-bottom:5px}ks-product-title>.breadcrumbs>a{font-family:var(--product-breadcrumb-font);font-size:var(--product-breadcrumb-size);color:var(--product-breadcrumb-color);text-decoration:none}ks-product-title>.breadcrumbs>a:not(:last-child):after{content:\"/\";color:var(--product-breadcrumb-color);margin:0 15px}ks-product-title>.breadcrumbs>a:focus{color:var(--product-breadcrumb-color)}ks-product-title>.breadcrumbs>a:hover{color:var(--product-breadcrumb-color-hover)}ks-product-title>.breadcrumbs>a:active{color:var(--product-breadcrumb-color-active)}@media only screen and (max-width: 960px){ks-product-title{text-align:center}}@media only screen and (max-width: 1100px){ks-product-title>.breadcrumbs+*{font-size:var(--product-title-size-small)}}@media only screen and (max-width: 460px){ks-product-title>.breadcrumbs{margin-bottom:10px}ks-product-title>.breadcrumbs>a{font-size:14px}ks-product-title>.breadcrumbs>a:not(:last-child):after{margin:0 10px}}";

const ProductTitle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const title = () => {
      const name = productStore.store.get("name");
      const brandLength = productStore.store.get("brand").length;
      const brandLink = productStore.store.get("brandLink");
      const index$1 = this.brandIndex();
      if (index$1 !== -1) {
        const prefix = name.substr(0, index$1);
        const brand = name.substr(index$1, brandLength);
        const suffix = name.substr(index$1 + brandLength);
        return index.h("h1", null, prefix, index.h("a", { href: brandLink }, brand), suffix);
      }
      return index.h("h1", null, name);
    };
    return [
      index.h("div", { class: "breadcrumbs" }, productStore.store.get("breadcrumbs").map(item => index.h("a", { href: item.link }, item.name))),
      title()
    ];
  }
  brandIndex() {
    return productStore.store.get("name").toLowerCase().indexOf(productStore.store.get("brand").toLowerCase());
  }
};
ProductTitle.style = productTitleCss;

exports.ks_product_title = ProductTitle;
