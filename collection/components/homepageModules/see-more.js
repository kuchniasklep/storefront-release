import { Component, h, Prop } from '@stencil/core';
export class SeeMore {
  constructor() {
    this.href = "";
    this.text = "";
  }
  render() {
    return (h("div", { class: "uk-flex uk-flex-center uk-margin-top" },
      h("a", { href: this.href, class: "uk-button uk-button-default uk-margin-auto", style: {
          backgroundColor: "white",
          padding: "3px 30px",
          border: "none",
          borderRadius: "50px",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.18)"
        } }, this.text)));
  }
  static get is() { return "ks-see-more"; }
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
