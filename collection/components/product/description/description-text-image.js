import { Component, h, Prop } from '@stencil/core';
export class DescriptionTextImage {
  constructor() {
    this.align = "top";
    this.size = "medium";
  }
  render() {
    let gridclass = "uk-margin-medium uk-flex uk-flex-center uk-flex-warp";
    switch (this.align) {
      case "top": {
        gridclass += " uk-flex-top";
        break;
      }
      case "middle": {
        gridclass += " uk-flex-middle";
        break;
      }
      case "bottom": {
        gridclass += " uk-flex-bottom";
        break;
      }
    }
    let sizeclass = "";
    switch (this.size) {
      case "small": {
        sizeclass = "uk-width-small@xs uk-width-1-4@m";
        break;
      }
      case "medium": {
        sizeclass = "uk-width-medium@xs uk-width-1-3@m";
        break;
      }
      case "large": {
        sizeclass = "uk-width-1-2@m";
        break;
      }
    }
    return (h("div", { class: gridclass, "uk-grid": true },
      h("div", { class: "uk-width-1-1 uk-flex-1@s uk-text-left" },
        h("slot", null)),
      h("div", { class: sizeclass },
        h("ks-image", { src: this.image }))));
  }
  static get is() { return "ks-description-text-image"; }
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
      "reflect": false,
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
      "reflect": false,
      "defaultValue": "\"medium\""
    }
  }; }
}
