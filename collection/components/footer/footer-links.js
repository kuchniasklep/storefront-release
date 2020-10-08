import { Component, h, Prop } from '@stencil/core';
export class FooterLinks {
  render() {
    return [
      h("h4", null, this.heading),
      h("ul", null,
        h("slot", null))
    ];
  }
  static get is() { return "ks-footer-links"; }
  static get originalStyleUrls() { return {
    "$": ["footer-links.css"]
  }; }
  static get styleUrls() { return {
    "$": ["footer-links.css"]
  }; }
  static get properties() { return {
    "heading": {
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
      "attribute": "heading",
      "reflect": false
    }
  }; }
}
