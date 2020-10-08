import { Component, h, Prop } from '@stencil/core';
export class ProductAttribute {
  constructor() {
    this.href = "";
    this.name = "";
    this.image = "";
    this.emphasis = false;
  }
  render() {
    const name = this.name != "" ? h("span", { class: "name" },
      this.name,
      ":") : null;
    const image = this.image != "" ? h("div", { class: "image" },
      h("ks-img", { vertical: true, sync: true, src: this.image })) : null;
    const content = [name, h("slot", null), image];
    if (this.href != "")
      return h("a", { href: this.href }, content);
    return content;
  }
  static get is() { return "ks-product-attribute"; }
  static get originalStyleUrls() { return {
    "$": ["product-attribute.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-attribute.css"]
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
    "name": {
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
      "attribute": "name",
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
      "reflect": true,
      "defaultValue": "\"\""
    },
    "emphasis": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "emphasis",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
}
