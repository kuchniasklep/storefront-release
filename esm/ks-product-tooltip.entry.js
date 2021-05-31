import { r as registerInstance, h } from './index-4f41a852.js';

const productTooltipCss = "ks-product-tooltip{display:block;position:relative}ks-product-tooltip .message,ks-product-tooltip .arrow{-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none;position:absolute;z-index:2;opacity:0;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-product-tooltip .message{background-color:#252525;color:#ffffff;padding:17px 20px;margin-top:5px;border-radius:20px;font-size:15px;-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}ks-product-tooltip .arrow{bottom:-10px;left:80px;-webkit-transform:translateX(-5px);-ms-transform:translateX(-5px);transform:translateX(-5px);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #252525}ks-product-tooltip[active] .message,ks-product-tooltip[active] .arrow{opacity:1}";

const ProductButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.active = false;
  }
  onMouseover() {
    this.active = true;
  }
  onMouseout() {
    this.active = false;
  }
  render() {
    return [
      h("slot", null),
      h("div", { class: "arrow" }),
      h("div", { class: "message" }, this.message)
    ];
  }
};
ProductButton.style = productTooltipCss;

export { ProductButton as ks_product_tooltip };
