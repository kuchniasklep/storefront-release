import { r as registerInstance, h, g as getElement } from './index-f323e182.js';

const ProductSimple = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  render() {
    let currentPrice;
    if (this.currentPrice)
      currentPrice = this.currentPrice.replace(".", ",") + " zł";
    let previousPrice;
    if (this.previousPrice)
      previousPrice = this.previousPrice.replace(".", ",") + " zł";
    return (h("div", null, h("div", { class: "uk-text-xsmall uk-text-center uk-link-reset uk-position-relative uk-margin-small-bottom" }, h("a", { href: this.link }, h("div", { class: "uk-margin-small-bottom" }, h("ks-image", { src: this.img, width: "280", height: "280", contain: true, alt: "zdj\u0119cie produktu" })), this.name)), h("div", { class: "uk-text-xsmall uk-text-center uk-position-relative", style: { pointerEvents: "none" } }, this.previousPrice ? [
      h("span", { class: "uk-text-muted" }, h("s", null, previousPrice)), h("br", null)
    ] : null, h("span", { class: "uk-text-bold uk-text-normal uk-text-danger" }, currentPrice))));
  }
  get root() { return getElement(this); }
};

export { ProductSimple as ks_product_simple };
