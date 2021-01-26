'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');
const cartData = require('./cartData-abc6c385.js');

const cartButtonsCss = "ks-cart-buttons{display:block}ks-cart-buttons>.confirm{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%;font-size:28px;font-weight:700;padding:20px}";

const CartButtons = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.href = "";
    this.loading = 0;
    this.loadingDelayed = false;
  }
  LoadingWatcher() {
    if (this.loading) {
      this.loadingTimeout = setTimeout(() => {
        this.loadingDelayed = true;
      }, 500);
    }
    else {
      clearTimeout(this.loadingTimeout);
      this.loadingDelayed = false;
    }
  }
  componentDidLoad() {
    this.LoadingWatcher();
  }
  async clickHandler() {
    if (!this.loading) {
      const shippingSelect = document.querySelector("ks-cart-select-shipping");
      const paymentSelect = document.querySelector("ks-cart-select-payment");
      const shippingValid = await shippingSelect.Validate();
      const paymentValid = await paymentSelect.Validate();
      if (shippingValid && paymentValid)
        window.location.href = this.href;
      else {
        const inputTop = shippingSelect.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
        if ('scrollBehavior' in document.documentElement.style)
          window.scroll({ top: inputTop - 100, behavior: "smooth" });
        else
          window.scroll(0, inputTop - 100);
      }
    }
  }
  render() {
    return (index.h("button", { class: "confirm uk-button uk-button-danger ks-text-decorated", onClick: () => this.clickHandler() }, this.loadingDelayed && this.loading ?
      index.h("div", { class: "uk-animation-fade", "uk-spinner": true }) :
      index.h("span", null, "DO KASY")));
  }
  get root() { return index.getElement(this); }
  static get watchers() { return {
    "loading": ["LoadingWatcher"]
  }; }
};
cartData.Tunnel.injectProps(CartButtons, ['loading']);
CartButtons.style = cartButtonsCss;

exports.ks_cart_buttons = CartButtons;
