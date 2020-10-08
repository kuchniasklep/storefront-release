import { Component, h, Prop, Host } from '@stencil/core';
import { store } from "../product-store";
export class ProductInfo {
  constructor() {
    this.count = "";
    this.value = "";
    this.message = "";
    this.internal = false;
    this.external = false;
  }
  render() {
    const hide = store.get("externalPoints") && this.internal ||
      !store.get("externalPoints") && this.external ?
      "hide" : "";
    const message = this.message
      .replace("{count}", this.count)
      .replace("{value}", this.value);
    return h(Host, { class: hide },
      h("div", { class: "count" }, this.count),
      h("div", { class: "message" }, message));
  }
  static get is() { return "ks-product-info-points"; }
  static get originalStyleUrls() { return {
    "$": ["product-info-points.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-info-points.css"]
  }; }
  static get properties() { return {
    "count": {
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
      "attribute": "count",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "value": {
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
      "attribute": "value",
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
    "internal": {
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
      "attribute": "internal",
      "reflect": true,
      "defaultValue": "false"
    },
    "external": {
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
      "attribute": "external",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
}
