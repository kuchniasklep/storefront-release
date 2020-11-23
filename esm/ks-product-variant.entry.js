import { r as registerInstance, h } from './index-22b73bd9.js';

const productVariantCss = "ks-product-variant{display:block}ks-product-variant a{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;background-color:white;-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow);padding:7px}ks-product-variant[active] a{border:2px solid #222}ks-product-variant ks-img{opacity:1;-webkit-transition:opacity 0.2s ease;transition:opacity 0.2s ease}ks-product-variant[unavailable] ks-img{opacity:0.2}ks-product-variant:not([unavailable]) a:hover ks-img{opacity:0.8}ks-product-variant[unavailable] a:hover ks-img{opacity:0.15}";

const ProductVariant = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("a", { href: this.link, "aria-label": this.name }, h("ks-img", { center: true, contained: true, src: this.image, width: 90, height: 90, alt: this.name })));
  }
};
ProductVariant.style = productVariantCss;

export { ProductVariant as ks_product_variant };
