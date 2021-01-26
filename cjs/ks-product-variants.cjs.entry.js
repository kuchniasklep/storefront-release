'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');

const productVariantsCss = "ks-product-variants{display:block}ks-product-variants .content{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;max-width:100%;max-width:calc(100% + 18px);width:200%;margin:-9px}ks-product-variants ks-product-variant{padding:9px;-webkit-box-sizing:border-box;box-sizing:border-box}ks-product-variants .more{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-top:15px !important}ks-product-variants .more button{display:inline-block;outline:none;border:none;cursor:pointer;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:white;padding:3px 30px;min-height:46px;min-width:84px;border-radius:50px;-webkit-box-shadow:0px 2px 6px rgba(0, 0, 0, 0.18);box-shadow:0px 2px 6px rgba(0, 0, 0, 0.18);-webkit-transition:box-shadow 0.2s ease;-webkit-transition:-webkit-box-shadow 0.2s ease;transition:-webkit-box-shadow 0.2s ease;transition:box-shadow 0.2s ease;transition:box-shadow 0.2s ease, -webkit-box-shadow 0.2s ease}ks-product-variants .more button:hover{-webkit-box-shadow:0px 2px 12px rgba(0, 0, 0, 0.18);box-shadow:0px 2px 12px rgba(0, 0, 0, 0.18)}";

const ProductVariants = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.more = false;
    this.toggle = true;
    this.variantCount = 0;
  }
  componentDidLoad() {
    this.flex = this.root.querySelector(".content");
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
    return [
      index.h("style", { innerHTML: `
				ks-product-variants ks-product-variant {
					width: ${this.width}%;
				}

				ks-product-variants .ks-variant-max-flex-height{
					max-height: ${this.maxHeight}px;
				}
			` }),
      index.h("div", { class: "content" }, index.h("slot", null)),
      this.more ?
        index.h("div", { class: "more" }, index.h("button", { onClick: () => this.toggle = !this.toggle }, this.toggle ?
          index.h("ks-icon", { name: "chevron-down" }) :
          index.h("ks-icon", { name: "chevron-up" })))
        : null
    ];
  }
  get root() { return index.getElement(this); }
  static get watchers() { return {
    "toggle": ["ToggleWatcher"]
  }; }
};
ProductVariants.style = productVariantsCss;

exports.ks_product_variants = ProductVariants;
