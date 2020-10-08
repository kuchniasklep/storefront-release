'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-18d28dc7.js');

const productVariantsCss = "ks-product-variants{display:block}";

const ProductVariants = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.more = false;
    this.toggle = true;
    this.variantCount = 0;
  }
  componentDidLoad() {
    this.flex = this.root.querySelector("div.uk-flex-wrap");
    this.variantCount = this.root.querySelectorAll("ks-product-variant").length;
    this.ResizeHandler();
    this.ToggleWatcher(this.toggle);
  }
  ToggleWatcher(toggle) {
    if (toggle)
      this.flex.classList.add("ks-variant-max-flex-height");
    else
      this.flex.classList.remove("ks-variant-max-flex-height");
  }
  ResizeHandler() {
    const fullWidth = (window.innerWidth <= 1218 ? window.innerWidth : 1218) - 15;
    const count = Math.round(fullWidth / 120);
    this.width = 100 / count;
    this.maxHeight = fullWidth * (this.width / 100);
    if (window.innerWidth < 640) {
      this.maxHeight *= 2;
      this.more = this.variantCount > count * 2 ? true : false;
    }
    else
      this.more = this.variantCount > count ? true : false;
  }
  render() {
    return (index.h("div", null, index.h("style", { innerHTML: `
					ks-product-variants div.uk-flex-wrap {
						max-width: calc(100% + 18px);
						width: 200%;
						margin: -9px;
					}

					ks-product-variants ks-product-variant {
						width: ${this.width}%;
						padding: 9px;
						box-sizing: border-box;
					}

					ks-product-variants .ks-variant-max-flex-height{
						max-height: ${this.maxHeight}px;
					}
				` }), index.h("div", { class: "uk-flex uk-flex-wrap uk-width-1-1 uk-overflow-hidden" }, index.h("slot", null)), this.more ?
      index.h("div", { class: "uk-flex uk-flex-center uk-margin-top" }, index.h("button", { class: "uk-button uk-button-default", style: { backgroundColor: "white", padding: "3px 30px", border: "none", borderRadius: "50px", boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.18)" }, onClick: () => this.toggle = !this.toggle }, this.toggle ?
        index.h("span", { "uk-icon": "chevron-down" }) :
        index.h("span", { "uk-icon": "chevron-up" })))
      : null));
  }
  get root() { return index.getElement(this); }
  static get watchers() { return {
    "toggle": ["ToggleWatcher"]
  }; }
};
ProductVariants.style = productVariantsCss;

exports.ks_product_variants = ProductVariants;
