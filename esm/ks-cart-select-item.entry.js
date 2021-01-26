import { r as registerInstance, h, g as getElement } from './index-74ff0cef.js';

const cartSelectItemCss = "ks-cart-select-item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:50px;cursor:pointer;z-index:10;position:relative;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}ks-cart-select-item .logo{background-color:#252525;height:100%;width:150px;padding:5px;border-top:1px solid rgba(0, 0, 0, 0.1);-webkit-box-sizing:border-box;box-sizing:border-box}@media only screen and (max-width: 720px){ks-cart-select-item .logo{display:none}}ks-cart-select-item .name{-webkit-box-flex:1;-ms-flex:1;flex:1;padding:0 20px;font-size:16px}ks-cart-select-item .price{padding:0 20px;font-size:16px}@media only screen and (max-width: 420px){ks-cart-select-item .name{padding:0 5px 0 20px;font-size:14px}ks-cart-select-item .price{padding:0 10px 0 5px;font-size:14px}}";

const CartSelectItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.logo = "";
    this.name = "";
    this.price = "";
    this.color = "";
  }
  render() {
    return [
      this.logo ?
        h("div", { class: "logo", style: { backgroundColor: this.color } }, h("ks-img", { vertical: true, center: true, src: this.logo, target: "ks-cart-select-shipping, ks-cart-select-payment" })) : null,
      h("div", { class: "name" }, this.name),
      (this.price != "" && this.price != "0") ?
        h("div", { class: "price" }, this.price.replace(".", ",") + " ZŁ")
        : null
    ];
  }
  get root() { return getElement(this); }
};
CartSelectItem.style = cartSelectItemCss;

export { CartSelectItem as ks_cart_select_item };
