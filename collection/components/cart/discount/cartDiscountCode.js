import { Component, h, Prop, Event, State, Method } from '@stencil/core';
export class CartDiscountCode {
  constructor() {
    this.placeholder = "";
    this.image = "";
    this.loading = false;
  }
  discountCodeAddHandler(event) {
    event.preventDefault();
    if (!this.loading) {
      const form = event.target;
      const input = form.querySelector('input[name="discountCode"]');
      const value = input.value;
      if (value) {
        const valueString = value.toString();
        if (valueString != "") {
          this.loading = true;
          this.discountCodeAdd.emit(valueString);
        }
      }
    }
  }
  async ResetLoading() {
    this.loading = false;
  }
  render() {
    return [
      h("form", { onSubmit: (e) => this.discountCodeAddHandler(e) },
        h("ks-input-text", { emphasis: true, center: true, placeholder: this.placeholder, name: "discountCode" }),
        h("button", { type: "submit", class: "uk-button uk-button-secondary" }, this.loading ? h("div", { "uk-spinner": true }) : h("span", null, "Aktywuj"))),
      h("a", { class: "messsage", onClick: () => {
          const popup = document.querySelector('ks-newsletter-popup');
          if (popup)
            popup.Show();
        } },
        h("ks-img", { vertical: true, center: true, src: this.image }))
    ];
  }
  static get is() { return "ks-cart-discount-code"; }
  static get originalStyleUrls() { return {
    "$": ["cartDiscountCode.css"]
  }; }
  static get styleUrls() { return {
    "$": ["cartDiscountCode.css"]
  }; }
  static get properties() { return {
    "placeholder": {
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
      "attribute": "placeholder",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "image": {
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
      "attribute": "image",
      "reflect": false,
      "defaultValue": "\"\""
    }
  }; }
  static get states() { return {
    "loading": {}
  }; }
  static get events() { return [{
      "method": "discountCodeAdd",
      "name": "discountCodeAdd",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "ResetLoading": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
}
