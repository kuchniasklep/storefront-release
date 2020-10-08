import { Component, h, Element, Prop } from '@stencil/core';
export class CartProductHeading {
  componentDidLoad() {
    this.root.style.display = "block";
  }
  render() {
    return [
      h("div", { class: "uk-flex uk-flex-middle ks-text-decorated", "uk-grid": true, style: { fontSize: "18px" } },
        h("div", { class: "uk-width-expand uk-text-bold", style: { fontSize: "22px" } }, "PRODUKTY"),
        h("div", { style: { width: "100px" }, class: "uk-text-center uk-visible@m" }, "CENA"),
        h("div", { style: { width: "100px" }, class: "uk-text-center uk-visible@m" }, "ILO\u015A\u0106"),
        this.removable ?
          h("div", { style: { width: "50px" }, class: "uk-text-center" }, "USU\u0143")
          : null),
      h("hr", null)
    ];
  }
  static get is() { return "ks-cart-product-heading"; }
  static get properties() { return {
    "removable": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "removable",
      "reflect": false
    }
  }; }
  static get elementRef() { return "root"; }
}
