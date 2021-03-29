import { Component, h, Prop, State, Element } from '@stencil/core';
import { store } from './cart-store';
export class CartButtons {
  constructor() {
    this.href = "";
    this.loadingDelayed = false;
  }
  LoadingWatcher(loading) {
    if (loading) {
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
    this.LoadingWatcher(store.get("loading"));
    store.onChange("loading", (loading) => this.LoadingWatcher(loading));
  }
  async clickHandler() {
    if (!store.get("loading")) {
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
    return (h("button", { class: "confirm uk-button uk-button-danger ks-text-decorated", onClick: () => this.clickHandler() }, this.loadingDelayed && store.get("loading") ?
      h("div", { class: "uk-animation-fade", "uk-spinner": true }) :
      h("span", null, "DO KASY")));
  }
  static get is() { return "ks-cart-buttons"; }
  static get originalStyleUrls() { return {
    "$": ["cartButtons.css"]
  }; }
  static get styleUrls() { return {
    "$": ["cartButtons.css"]
  }; }
  static get properties() { return {
    "href": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "href",
      "reflect": false,
      "defaultValue": "\"\""
    }
  }; }
  static get states() { return {
    "loadingDelayed": {}
  }; }
  static get elementRef() { return "root"; }
}
