import { Component, h, Prop } from '@stencil/core';
export class DescriptionImage {
  render() {
    return h("ks-img", { src: this.image });
  }
  static get is() { return "ks-description-image"; }
  static get originalStyleUrls() { return {
    "$": ["description-image.css"]
  }; }
  static get styleUrls() { return {
    "$": ["description-image.css"]
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
    }
  }; }
}
