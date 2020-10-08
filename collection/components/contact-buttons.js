import { Component, h, Prop } from '@stencil/core';
export class ContactButtons {
  render() {
    return [
      h("a", { href: "tel:" + this.phone, class: "uk-button uk-button-default uk-border-pill", style: { margin: "2px" } }, this.phone),
      h("a", { href: "mailto:" + this.email, class: "uk-button uk-button-default uk-border-pill", style: { margin: "2px" } }, this.email)
    ];
  }
  static get is() { return "ks-contact-buttons"; }
  static get properties() { return {
    "phone": {
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
      "attribute": "phone",
      "reflect": false
    },
    "email": {
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
      "attribute": "email",
      "reflect": false
    }
  }; }
}
