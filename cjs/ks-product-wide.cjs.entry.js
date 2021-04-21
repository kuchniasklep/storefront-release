'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1e55d229.js');

const ProductWide = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.unavailable = false;
    this.cartLoading = false;
    this.mobile = false;
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  CartHandler(success) {
    if (!success)
      this.cartLoading = false;
  }
  resizeHandler() {
    if (window.innerWidth <= 700)
      this.mobile = true;
    else
      this.mobile = false;
  }
  componentWillLoad() {
    this.resizeHandler();
  }
  render() {
    let currentPrice;
    if (this.currentPrice)
      currentPrice = this.currentPrice.replace(".", ",") + " zł";
    let previousPrice;
    if (this.previousPrice)
      previousPrice = this.previousPrice.replace(".", ",") + " zł";
    return (index.h("ks-flex", { between: true, middle: true, column: this.mobile ? true : false, style: this.mobile ? { display: "block", marginBottom: "20px" } : { display: "block" } }, index.h("a", { href: this.link }, index.h("ks-image", { src: this.img, width: "200", height: "200", contain: true, alt: "zdj\u0119cie produktu" })), index.h("a", { href: this.link, class: "uk-flex-1 uk-padding-small uk-link-reset " + (this.mobile ? "uk-text-center" : "") }, index.h("span", { class: "uk-h3 uk-margin-small-bottom" }, this.name), index.h("br", null), this.unavailable ? index.h("span", { class: "uk-h5 uk-text-normal uk-text-danger" }, "Produkt niedost\u0119pny") : null, index.h("div", { class: "uk-margin-small-top" }, index.h("span", { class: "uk-h4 uk-text-bold uk-text-normal uk-text-danger" }, currentPrice), this.previousPrice ? index.h("span", { class: "uk-h4 uk-text-muted uk-margin-left" }, index.h("s", null, previousPrice)) : null), index.h("p", { class: "uk-text-small uk-visible@m" }, index.h("slot", null))), index.h("div", { class: "uk-flex " + (this.mobile ? "uk-width-1-1" : "uk-flex-column") }, index.h("ks-button-fav", { subtract: true, padding: true, expand: true, "product-id": this.productId }), this.unavailable ?
      index.h("ks-button-cart", { icon: true, padding: true, expand: true, disabled: true }) :
      index.h("ks-button-cart", { icon: true, padding: true, expand: true, "product-id": this.productId, name: this.name }))));
  }
  get root() { return index.getElement(this); }
};

exports.ks_product_wide = ProductWide;
