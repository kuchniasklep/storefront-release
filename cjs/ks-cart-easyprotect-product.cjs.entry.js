'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d2dd4d1b.js');

const cartEasyprotectProductCss = "ks-cart-easyprotect-product{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}ks-cart-easyprotect-product .image{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;max-width:80px;max-height:80px;margin-right:10px}ks-cart-easyprotect-product .info{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%;border-radius:10px;padding:10px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:5px 0;min-height:68px;font-family:var(--font-emphasis);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#f2f2f2;-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-cart-easyprotect-product:hover .info{background-color:#e2e2e2}ks-cart-easyprotect-product[active] .info{color:white;background-color:#4e2e82}ks-cart-easyprotect-product .info .warranty{font-weight:700}@media (max-width: 420px){ks-cart-easyprotect-product{font-size:15px}ks-cart-easyprotect-product .image{max-width:50px;max-height:50px;margin:0 5px}ks-cart-easyprotect-product .info{padding:8px 10px 8px 15px}ks-cart-easyprotect-product .info .warranty{font-size:14px}}";

const CartEasyprotectProduct = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.warranty = "";
    this.active = false;
  }
  render() {
    return [
      index.h("div", { class: "image" }, index.h("ks-img2", { src: this.image, width: 200, height: 200 })),
      index.h("div", { class: "info" }, index.h("div", { class: "name", innerHTML: this.name }), this.warranty ?
        index.h("div", { class: "warranty" }, this.warranty)
        : null)
    ];
  }
};
CartEasyprotectProduct.style = cartEasyprotectProductCss;

exports.ks_cart_easyprotect_product = CartEasyprotectProduct;
