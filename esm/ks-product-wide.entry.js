import { r as registerInstance, h, g as getElement } from './index-2d9093e5.js';

const ProductWide = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h("ks-flex", { between: true, middle: true, column: this.mobile ? true : false, style: this.mobile ? { display: "block", marginBottom: "20px" } : { display: "block" } }, h("a", { href: this.link }, h("ks-image", { src: this.img, width: "200", height: "200", contain: true, alt: "zdj\u0119cie produktu" })), h("a", { href: this.link, class: "uk-flex-1 uk-padding-small uk-link-reset " + (this.mobile ? "uk-text-center" : "") }, h("span", { class: "uk-h3 uk-margin-small-bottom" }, this.name), h("br", null), h("div", { class: "uk-margin-small-top" }, h("span", { class: "uk-h4 uk-text-bold uk-text-normal uk-text-danger" }, currentPrice), this.previousPrice ? h("span", { class: "uk-h4 uk-text-muted uk-margin-left" }, h("s", null, previousPrice)) : null), h("p", { class: "uk-text-small uk-visible@m" }, h("slot", null))), h("div", { class: "uk-flex " + (this.mobile ? "uk-width-1-1" : "uk-flex-column") }, h("ks-button-fav", { subtract: true, padding: true, expand: true, "product-id": this.productId }), this.unavailable ?
      h("ks-button-cart", { icon: true, padding: true, expand: true, disabled: true }) :
      h("ks-button-cart", { icon: true, padding: true, expand: true, "product-id": this.productId, name: this.name }))));
  }
  get root() { return getElement(this); }
};

export { ProductWide as ks_product_wide };
