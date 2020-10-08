'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-18d28dc7.js');

const cartSpinnerCss = "ks-cart-spinner{display:inline-block;text-align:center}ks-cart-spinner input{width:50px !important;margin:0 !important;font-size:14px !important;text-align:center !important}";

const CartSpinner = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.changed = index.createEvent(this, "changed", 7);
    this.initialValue = 1;
    this.value = 1;
  }
  componentWillLoad() {
    this.value = this.initialValue;
  }
  Increment() {
    const last = this.value;
    if (typeof this.max === "undefined" || this.value < this.max) {
      this.value += 1;
      this.onChangedHandler(this.value, last);
    }
  }
  Decrement() {
    const last = this.value;
    if (this.value > 1) {
      this.value -= 1;
      this.onChangedHandler(this.value, last);
    }
  }
  Change(e) {
    const last = this.value;
    const input = e.target;
    const parsed = parseInt(input.value);
    if (!isNaN(parsed) && parsed > 0 && (typeof this.max === "undefined" || parsed <= this.max))
      this.value = parsed;
    else if (parsed > this.max) {
      this.value = this.max;
      input.value = this.max.toString();
    }
    else {
      this.value = 1;
      input.value = "1";
    }
    this.onChangedHandler(this.value, last);
  }
  onChangedHandler(current, last) {
    this.changed.emit({ current, last });
  }
  async SetAmount(amount) {
    this.value = amount;
  }
  render() {
    return (this.max == 1 ?
      index.h("div", null, "1 szt.") :
      index.h("div", null, index.h("button", { class: "uk-button uk-button-muted", onClick: () => this.Decrement() }, "-"), index.h("input", { type: "text", maxlength: "3", value: this.value, name: this.name, onChange: (e) => this.Change(e), class: "uk-input" }), index.h("button", { class: "uk-button uk-button-muted", onClick: () => this.Increment() }, "+")));
  }
};
CartSpinner.style = cartSpinnerCss;

exports.ks_cart_spinner = CartSpinner;
