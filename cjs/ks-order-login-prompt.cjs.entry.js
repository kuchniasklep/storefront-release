'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-18d28dc7.js');

const OrderLoginPrompt = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.message = "";
  }
  async componentDidLoad() {
    const element = document.querySelector("#ks-order-login-prompt");
    UIkit.modal(element).show();
  }
  ToCart() {
    window.location.href = 'koszyk.html';
  }
  ToConfirmation() {
    window.location.href = 'zamowienie-potwierdzenie.html';
  }
  render() {
    return (index.h("div", { id: "ks-order-login-prompt", class: "uk-modal-full", "uk-modal": true }, index.h("div", { class: "uk-modal-dialog" }, index.h("div", { class: "uk-background-cover uk-flex uk-flex-between uk-flex-column", "uk-height-viewport": true }, index.h("div", { class: "uk-padding-small uk-flex-auto uk-flex uk-flex-center uk-flex-middle uk-flex-column" }, index.h("div", { class: "uk-text-center" }, index.h("span", { class: "ks-text-decorated uk-h1 uk-text-bold" }, "Zosta\u0142e\u015B pomy\u015Blnie zalogowany"), index.h("br", null), index.h("p", null, this.message)), index.h("div", { class: "uk-margin-top" }, index.h("button", { onClick: () => this.ToCart(), class: "uk-button uk-button-secondary", style: { padding: "5px 15px" } }, "Wr\u00F3\u0107 do koszyka"), index.h("button", { onClick: () => this.ToConfirmation(), class: "uk-button uk-button-danger", style: { padding: "5px 15px" } }, "Do potwierdzenia")))))));
  }
  get root() { return index.getElement(this); }
};

exports.ks_order_login_prompt = OrderLoginPrompt;
