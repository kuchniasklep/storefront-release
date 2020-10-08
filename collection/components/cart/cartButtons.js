import { Component, h, Prop, State, Watch, Element } from '@stencil/core';
import Tunnel from './cartData';
export class CartButtons {
  constructor() {
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
    return (h("button", { class: "confirm uk-button uk-button-danger ks-text-decorated", onClick: () => this.clickHandler() }, this.loadingDelayed && this.loading ?
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
    },
    "loading": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "loading",
      "reflect": false,
      "defaultValue": "0"
    }
  }; }
  static get states() { return {
    "loadingDelayed": {}
  }; }
  static get elementRef() { return "root"; }
  static get watchers() { return [{
      "propName": "loading",
      "methodName": "LoadingWatcher"
    }]; }
}
Tunnel.injectProps(CartButtons, ['loading']);
