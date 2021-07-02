import { Component, Prop, h } from '@stencil/core';
export class Alert {
  constructor() {
    this.red = false;
    this.icon = "";
  }
  render() {
    if (this.icon)
      return [
        h("div", { class: "icon" },
          h("ks-icon", { name: this.icon })),
        h("div", { class: "content" },
          h("slot", null))
      ];
    return h("slot", null);
  }
  static get is() { return "ks-notification"; }
  static get originalStyleUrls() { return {
    "$": ["notification.css"]
  }; }
  static get styleUrls() { return {
    "$": ["notification.css"]
  }; }
  static get properties() { return {
    "red": {
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
      "attribute": "red",
      "reflect": true,
      "defaultValue": "false"
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
      "reflect": true,
      "defaultValue": "\"\""
    }
  }; }
}
