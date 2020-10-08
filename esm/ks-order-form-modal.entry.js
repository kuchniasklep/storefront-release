import { r as registerInstance, h, g as getElement } from './index-22b73bd9.js';

const OrderLoginPrompt = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h("div", { id: "ks-order-form-modal", class: "uk-modal-full", "uk-modal": true }, h("div", { class: "uk-modal-dialog" }, h("div", { class: "uk-background-cover uk-flex uk-flex-between uk-flex-column", "uk-height-viewport": true }, h("div", { class: "uk-padding-small uk-flex-auto uk-flex uk-flex-center uk-flex-middle uk-flex-column" }, h("div", { class: "uk-text-center" }, h("p", { class: "ks-text-decorated uk-h1 uk-text-bold" }, this.message), h("button", { onClick: () => this.Hide(), class: "uk-button uk-button-danger uk-margin-small-top", style: { padding: "5px 20px", fontSize: "16px" } }, "WR\u00D3\u0106")))))));
  }
  get root() { return getElement(this); }
};

export { OrderLoginPrompt as ks_order_form_modal };
