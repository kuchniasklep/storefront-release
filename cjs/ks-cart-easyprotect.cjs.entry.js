'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-601dda3f.js');
const cartStore = require('./cart-store-bc8fd611.js');
require('./index-6a08c494.js');

const cartEasyprotectCss = "ks-cart-easyprotect{display:block;padding:30px}ks-cart-easyprotect.hidden{display:none}ks-cart-easyprotect .top{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;width:100%;position:relative}ks-cart-easyprotect .top .content{-ms-flex:1 1 auto;flex:1 1 auto}ks-cart-easyprotect .top .content h2{font-size:22px;text-transform:uppercase;font-family:var(--font-emphasis);font-weight:700}ks-cart-easyprotect .top ks-img2{max-width:120px;width:100%;margin-left:10px}ks-cart-easyprotect .insured{margin-top:10px}ks-cart-easyprotect .insured .item{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-top:10px;font-family:var(--font-emphasis);background-color:#f2f2f2;padding:5px 10px}ks-cart-easyprotect .insured .item .name{-ms-flex:1 1 auto;flex:1 1 auto;padding:5px;background-color:#f2f2f2;font-size:16px}ks-cart-easyprotect .insured .item .option{margin:0 10px;font-size:17px;font-weight:700}ks-cart-easyprotect .addproducts .content{padding:20px 20px 0 20px}@media (max-width: 960px){ks-cart-easyprotect{padding:15px}}@media (max-width: 640px){ks-cart-easyprotect .top ks-img2{position:absolute;top:-5px;right:0;max-width:40px;max-height:40px}ks-cart-easyprotect .top .content{font-size:15px}}";

let CartEasyprotect = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentWillLoad() {
    const update = () => {
      this.insured = Object.entries(cartStore.store.get("insured"));
      this.enabled = Object.keys(cartStore.store.get("easyprotect")).length > 0;
    };
    cartStore.store.onChange("insured", update);
    cartStore.store.onChange("easyprotect", update);
    update();
  }
  render() {
    return index.h(index.Host, { class: !this.enabled ? "hidden" : "" }, index.h("div", { class: "top" }, index.h("div", { class: "content" }, index.h("slot", null)), index.h("ks-img2", { src: this.image, width: this.width, height: this.height })), index.h("div", { class: "insured" }, this.insured.map(([id, months]) => index.h("ks-cart-easyprotect-warranty", { insured: true, "product-id": id, active: months }))), index.h("slot", { name: "bottom" }));
  }
  get root() { return index.getElement(this); }
};
CartEasyprotect.style = cartEasyprotectCss;

exports.ks_cart_easyprotect = CartEasyprotect;
