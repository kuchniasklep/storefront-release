import { Component, h, Prop, Element } from '@stencil/core';
export class ProductTabs {
  constructor() {
    this.names = "";
    this.active = 0;
  }
  render() {
    return [
      h("nav", null,
        " ",
        this.names.split(", ").map((value, index) => h("button", { class: index == this.active ? "active" : "", onClick: () => this.click(index) }, value)),
        " "),
      h("div", { class: "content" },
        h("slot", null))
    ];
  }
  click(index) {
    this.active = index;
    Array.from(this.root.querySelector(".content").children).forEach((element, i) => {
      const target = element;
      target.main = i == index;
      target.open = i == index;
    });
  }
  static get is() { return "ks-product-tabs"; }
  static get originalStyleUrls() { return {
    "$": ["product-tabs.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-tabs.css"]
  }; }
  static get properties() { return {
    "names": {
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
      "attribute": "names",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "active": {
      "type": "number",
      "mutable": true,
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
      "attribute": "active",
      "reflect": true,
      "defaultValue": "0"
    }
  }; }
  static get elementRef() { return "root"; }
}
