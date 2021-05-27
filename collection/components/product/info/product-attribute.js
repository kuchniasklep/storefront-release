import { Component, h, Prop } from '@stencil/core';
export class ProductAttribute {
  constructor() {
    this.href = "";
    this.icon = "";
    this.size = 1.0;
    this.danger = false;
    this.emphasis = false;
    this.faded = false;
  }
  render() {
    const content = [
      h("ks-icon", { name: this.icon, size: this.size }),
      h("slot", null)
    ];
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
    "icon": {
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
      "attribute": "icon",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "size": {
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
      "attribute": "size",
      "reflect": false,
      "defaultValue": "1.0"
    },
    "danger": {
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
      "attribute": "danger",
      "reflect": true,
      "defaultValue": "false"
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
    },
    "faded": {
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
      "attribute": "faded",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
}
