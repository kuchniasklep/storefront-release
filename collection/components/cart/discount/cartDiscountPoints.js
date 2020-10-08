import { Component, h, Prop, Event, State, Method } from '@stencil/core';
export class CartDiscountPoints {
  constructor() {
    this.placeholder = "";
    this.message = "";
    this.points = 1;
    this.orderPoints = 1;
    this.loading = false;
  }
  onDiscountSubmitHandler(event) {
    event.preventDefault();
    if (!this.loading) {
      const form = event.target;
      const input = form.querySelector('input[name="pointCount"]');
      const value = input.value;
      if (value) {
        const valueNumber = parseInt(value.toString());
        if (valueNumber != NaN) {
          this.loading = true;
          this.discountSubmit.emit(valueNumber);
        }
      }
    }
  }
  async ResetLoading() {
    this.loading = false;
  }
  render() {
    return [
      h("form", { onSubmit: (e) => this.onDiscountSubmitHandler(e), novalidate: true },
        h("ks-input-number", { emphasis: true, center: true, placeholder: this.placeholder, min: 1, max: this.points, step: 10, name: "pointCount" }),
        h("button", { type: "submit", class: "uk-button uk-button-secondary" }, this.loading ? h("div", { "uk-spinner": true }) : h("span", null, "Aktywuj"))),
      h("div", { class: "messsage" },
        h("div", { class: "points ks-text-decorated" },
          h("div", { class: "top" }, this.points),
          h("div", { class: "bottom" },
            h("span", null,
              "+",
              this.orderPoints))),
        h("div", { class: "bottom" }, this.message))
    ];
  }
  static get is() { return "ks-cart-discount-points"; }
  static get originalStyleUrls() { return {
    "$": ["cartDiscountPoints.css"]
  }; }
  static get styleUrls() { return {
    "$": ["cartDiscountPoints.css"]
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
    "message": {
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
      "attribute": "message",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "points": {
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
      "attribute": "points",
      "reflect": false,
      "defaultValue": "1"
    },
    "orderPoints": {
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
      "attribute": "order-points",
      "reflect": false,
      "defaultValue": "1"
    }
  }; }
  static get states() { return {
    "loading": {}
  }; }
  static get events() { return [{
      "method": "discountSubmit",
      "name": "discountSubmit",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
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
