import { Component, h, Prop } from '@stencil/core';
export class SeeMore {
  constructor() {
    this.href = "";
    this.text = "";
  }
  render() {
    return h("a", { href: this.href }, this.text);
  }
  static get is() { return "ks-see-more"; }
  static get originalStyleUrls() { return {
    "$": ["see-more.css"]
  }; }
  static get styleUrls() { return {
    "$": ["see-more.css"]
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
    "text": {
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
      "attribute": "text",
      "reflect": false,
      "defaultValue": "\"\""
    }
  }; }
}
