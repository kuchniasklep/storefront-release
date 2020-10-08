import { Component, h, Prop, Element } from '@stencil/core';
export class ProductSimple {
  componentDidLoad() {
    this.root.style.display = "block";
  }
  render() {
    let currentPrice;
    if (this.currentPrice)
      currentPrice = this.currentPrice.replace(".", ",") + " zł";
    let previousPrice;
    if (this.previousPrice)
      previousPrice = this.previousPrice.replace(".", ",") + " zł";
    return (h("div", null,
      h("div", { class: "uk-text-xsmall uk-text-center uk-link-reset uk-position-relative uk-margin-small-bottom" },
        h("a", { href: this.link },
          h("div", { class: "uk-margin-small-bottom" },
            h("ks-image", { src: this.img, width: "280", height: "280", contain: true, alt: "zdj\u0119cie produktu" })),
          this.name)),
      h("div", { class: "uk-text-xsmall uk-text-center uk-position-relative", style: { pointerEvents: "none" } },
        this.previousPrice ? [
          h("span", { class: "uk-text-muted" },
            h("s", null, previousPrice)), h("br", null)
        ] : null,
        h("span", { class: "uk-text-bold uk-text-normal uk-text-danger" }, currentPrice))));
  }
  static get is() { return "ks-product-simple"; }
  static get properties() { return {
    "name": {
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
      "attribute": "name",
      "reflect": false
    },
    "img": {
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
      "attribute": "img",
      "reflect": false
    },
    "link": {
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
      "attribute": "link",
      "reflect": false
    },
    "currentPrice": {
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
      "attribute": "current-price",
      "reflect": false
    },
    "previousPrice": {
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
      "attribute": "previous-price",
      "reflect": false
    }
  }; }
  static get elementRef() { return "root"; }
}
