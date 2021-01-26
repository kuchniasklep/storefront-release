import { Component, h, Prop } from '@stencil/core';
export class DescriptionTextImage {
  constructor() {
    this.align = "top";
    this.size = "medium";
  }
  render() {
    return [
      h("div", { class: "text" },
        h("slot", null)),
      h("div", { class: "image" },
        h("ks-img", { src: this.image }))
    ];
  }
  static get is() { return "ks-description-text-image"; }
  static get originalStyleUrls() { return {
    "$": ["description-text-image.css"]
  }; }
  static get styleUrls() { return {
    "$": ["description-text-image.css"]
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
    "align": {
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
      "attribute": "align",
      "reflect": true,
      "defaultValue": "\"top\""
    },
    "size": {
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
      "attribute": "size",
      "reflect": true,
      "defaultValue": "\"medium\""
    }
  }; }
}
