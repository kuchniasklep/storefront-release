import { Component, h, Host, Prop } from '@stencil/core';
export class Loader {
  constructor() {
    this.running = true;
  }
  render() {
    return h(Host, null);
  }
  static get is() { return "ks-loader"; }
  static get originalStyleUrls() { return {
    "$": ["loader.css"]
  }; }
  static get styleUrls() { return {
    "$": ["loader.css"]
  }; }
  static get properties() { return {
    "running": {
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
      "attribute": "running",
      "reflect": true,
      "defaultValue": "true"
    },
    "large": {
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
      "attribute": "large",
      "reflect": true
    },
    "oversized": {
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
      "attribute": "oversized",
      "reflect": true
    },
    "dark": {
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
      "attribute": "dark",
      "reflect": true
    }
  }; }
}
