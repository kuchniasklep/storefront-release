import { r as registerInstance, h } from './index-74ff0cef.js';
import './index-b4f14e2e.js';
import { s as store } from './product-store-44debc87.js';

const productTitleCss = "ks-product-title{display:block}ks-product-title h1{font-family:var(--product-title-font);font-size:var(--product-title-size);color:var(--product-title-color);font-weight:700;margin:0 0 5px 0}ks-product-title h1>a{text-decoration:none !important;color:var(--product-title-brand-color) !important;opacity:1;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-product-title h1>a:hover{opacity:0.7}ks-product-title h1>a:active{opacity:0.5}ks-product-title>.breadcrumbs{margin-bottom:5px}ks-product-title>.breadcrumbs>a{font-family:var(--product-breadcrumb-font);font-size:var(--product-breadcrumb-size);color:var(--product-breadcrumb-color);text-decoration:none}ks-product-title>.breadcrumbs>a:not(:last-child):after{content:\"/\";color:var(--product-breadcrumb-color);margin:0 15px}ks-product-title>.breadcrumbs>a:focus{color:var(--product-breadcrumb-color)}ks-product-title>.breadcrumbs>a:hover{color:var(--product-breadcrumb-color-hover)}ks-product-title>.breadcrumbs>a:active{color:var(--product-breadcrumb-color-active)}@media only screen and (max-width: 960px){ks-product-title{text-align:center}}@media only screen and (max-width: 1100px){ks-product-title>.breadcrumbs+*{font-size:var(--product-title-size-small)}}@media only screen and (max-width: 460px){ks-product-title>.breadcrumbs{margin-bottom:10px}ks-product-title>.breadcrumbs>a{font-size:14px}ks-product-title>.breadcrumbs>a:not(:last-child):after{margin:0 10px}}";

const ProductTitle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const title = () => {
      const name = store.get("name");
      const brandLength = store.get("brand").length;
      const brandLink = store.get("brandLink");
      const index = this.brandIndex();
      if (index !== -1) {
        const prefix = name.substr(0, index);
        const brand = name.substr(index, brandLength);
        const suffix = name.substr(index + brandLength);
        return h("h1", null, prefix, h("a", { href: brandLink }, brand), suffix);
      }
      return h("h1", null, name);
    };
    return [
      h("div", { class: "breadcrumbs" }, store.get("breadcrumbs").map(item => h("a", { href: item.link }, item.name))),
      title()
    ];
  }
  brandIndex() {
    return store.get("name").toLowerCase().indexOf(store.get("brand").toLowerCase());
  }
};
ProductTitle.style = productTitleCss;

export { ProductTitle as ks_product_title };
