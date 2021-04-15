import { Component, h, Prop } from '@stencil/core';
export class FooterButton {
  constructor() {
    this.width = 120;
    this.height = 50;
  }
  render() {
    return (h("a", { href: this.href, rel: "nofollow" },
      h("ks-img2", { vertical: true, src: this.image, observerMargin: "500px", width: this.width, height: this.height })));
  }
  static get is() { return "ks-footer-button"; }
  static get originalStyleUrls() { return {
    "$": ["footer-button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["footer-button.css"]
  }; }
  static get properties() { return {
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
      "reflect": false
    },
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
      "reflect": false
    },
    "width": {
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
      "attribute": "width",
      "reflect": false,
      "defaultValue": "120"
    },
    "height": {
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
      "attribute": "height",
      "reflect": false,
      "defaultValue": "50"
    }
  }; }
}
