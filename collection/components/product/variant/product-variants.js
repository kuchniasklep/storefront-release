import { Component, h, State, Element, Watch, Listen } from '@stencil/core';
export class ProductVariants {
  constructor() {
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
    const count = Math.round(fullWidth / 119);
    this.width = 100 / count;
    this.maxHeight = fullWidth * (this.width / 100);
    this.containerHeight = this.maxHeight;
    if (window.innerWidth <= 640) {
      this.containerHeight *= 2;
      this.more = this.variantCount > count * 2 ? true : false;
    }
    else
      this.more = this.variantCount > count ? true : false;
    this.render();
  }
  render() {
    return [
      h("style", { innerHTML: `
				ks-product-variants ks-product-variant {
					width: ${this.width}%;
					height: ${this.maxHeight}px;
				}

				ks-product-variants .ks-variant-max-flex-height{
					max-height: ${this.containerHeight}px;
				}
			` }),
      h("div", { class: "content" },
        h("slot", null)),
      this.more ?
        h("div", { class: "more" },
          h("button", { onClick: () => this.toggle = !this.toggle }, this.toggle ?
            h("ks-icon", { name: "chevron-down" }) :
            h("ks-icon", { name: "chevron-up" })))
        : null
    ];
  }
  static get is() { return "ks-product-variants"; }
  static get originalStyleUrls() { return {
    "$": ["product-variants.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-variants.css"]
  }; }
  static get states() { return {
    "more": {},
    "toggle": {},
    "width": {},
    "maxHeight": {},
    "containerHeight": {}
  }; }
  static get elementRef() { return "root"; }
  static get watchers() { return [{
      "propName": "toggle",
      "methodName": "ToggleWatcher"
    }]; }
  static get listeners() { return [{
      "name": "resize",
      "method": "ResizeHandler",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
