'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');

const OrderLoginPrompt = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.message = "";
  }
  async Show() {
    const element = document.querySelector("#ks-order-form-modal");
    UIkit.modal(element).show();
  }
  async Hide() {
    const element = document.querySelector("#ks-order-form-modal");
    UIkit.modal(element).hide();
  }
  render() {
    return (index.h("div", { id: "ks-order-form-modal", class: "uk-modal-full", "uk-modal": true }, index.h("div", { class: "uk-modal-dialog" }, index.h("div", { class: "uk-background-cover uk-flex uk-flex-between uk-flex-column", "uk-height-viewport": true }, index.h("div", { class: "uk-padding-small uk-flex-auto uk-flex uk-flex-center uk-flex-middle uk-flex-column" }, index.h("div", { class: "uk-text-center" }, index.h("p", { class: "ks-text-decorated uk-h1 uk-text-bold" }, this.message), index.h("button", { onClick: () => this.Hide(), class: "uk-button uk-button-danger uk-margin-small-top", style: { padding: "5px 20px", fontSize: "16px" } }, "WR\u00D3\u0106")))))));
  }
  get root() { return index.getElement(this); }
};

exports.ks_order_form_modal = OrderLoginPrompt;
