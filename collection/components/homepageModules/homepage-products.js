import { Component, h, Prop } from '@stencil/core';
export class ProductContainer {
  constructor() {
    this.active = 0;
    this.Button = ({ index, name }) => h("ks-button", { round: true, name: name, border: this.active != index, transitionless: this.active == index, onClick: () => this.active = index });
  }
  render() {
    return [
      h("div", { class: "buttons" },
        h(this.Button, { index: 0, name: "Promocje" }),
        h(this.Button, { index: 1, name: "Popularne" }),
        h(this.Button, { index: 2, name: "Nowo\u015Bci" })),
      h("div", { class: "content" },
        h("slot", null))
    ];
  }
  static get is() { return "ks-homepage-products"; }
  static get originalStyleUrls() { return {
    "$": ["homepage-products.css"]
  }; }
  static get styleUrls() { return {
    "$": ["homepage-products.css"]
  }; }
  static get properties() { return {
    "active": {
      "type": "number",
      "mutable": true,
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
      "attribute": "active",
      "reflect": true,
      "defaultValue": "0"
    }
  }; }
}
