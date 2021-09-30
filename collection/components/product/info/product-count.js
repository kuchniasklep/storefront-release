import { Component, h, Element, Event } from '@stencil/core';
import { product } from "../../../global/data/product";
export class ProductCount {
  componentDidLoad() {
    this.input = this.root.querySelector("input");
  }
  CountChangeHandler() {
    this.countChange.emit(parseInt(this.input.value));
  }
  ClampLength() {
    if (this.input.value.length > 3)
      this.input.value = this.input.value.substr(0, 3);
  }
  ClampValue() {
    if (parseInt(this.input.value) > product.get("availability")) {
      this.input.value = product.get("availability").toString();
    }
    if (parseInt(this.input.value) < 1) {
      this.input.value = "1";
    }
  }
  Increment() {
    const value = parseInt(this.input.value) + 1;
    if (value <= product.get("availability")) {
      this.input.value = value.toString();
      this.CountChangeHandler();
    }
  }
  Decrement() {
    const value = parseInt(this.input.value) - 1;
    if (value >= 1) {
      this.input.value = value.toString();
      this.CountChangeHandler();
    }
  }
  Target(e, func) {
    func(e.target);
  }
  render() {
    return [
      h("input", { type: "number", min: 1, max: product.get("availability"), value: 1, "aria-label": "Ilo\u015B\u0107", onInput: () => this.ClampLength(), onChange: () => { this.ClampValue(); this.CountChangeHandler(); } }),
      h("div", { class: "spinner" },
        h("button", { onClick: () => this.Increment() }, "+"),
        h("button", { onClick: () => this.Decrement() }, "-"))
    ];
  }
  static get is() { return "ks-product-count"; }
  static get originalStyleUrls() { return {
    "$": ["product-count.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-count.css"]
  }; }
  static get events() { return [{
      "method": "countChange",
      "name": "countChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      }
    }]; }
  static get elementRef() { return "root"; }
}
