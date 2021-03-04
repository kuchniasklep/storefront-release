import { Component, h, Prop } from '@stencil/core';
export class NotFound {
  constructor() {
    this.link = "/";
    this.linkName = "Strona Główna";
    this.status = "404";
  }
  render() {
    return [
      h("div", { class: "status" }, this.status),
      h("div", { class: "content" },
        h("slot", null)),
      h("ks-button", { round: true, link: this.link, name: this.linkName })
    ];
  }
  static get is() { return "ks-notfound"; }
  static get originalStyleUrls() { return {
    "$": ["notfound.css"]
  }; }
  static get styleUrls() { return {
    "$": ["notfound.css"]
  }; }
  static get properties() { return {
    "link": {
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
      "attribute": "link",
      "reflect": false,
      "defaultValue": "\"/\""
    },
    "linkName": {
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
      "attribute": "link-name",
      "reflect": false,
      "defaultValue": "\"Strona G\u0142\u00F3wna\""
    },
    "status": {
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
      "attribute": "status",
      "reflect": false,
      "defaultValue": "\"404\""
    }
  }; }
}
