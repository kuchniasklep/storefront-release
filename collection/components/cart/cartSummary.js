import { Component, h, Prop, Element } from '@stencil/core';
export class CartSummary {
  constructor() {
    this.emphasis = false;
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  render() {
    const price = this.price.replace(".", ",") + " zł";
    const leaderOptions = "media: 500; fill: .";
    if (this.large) {
      const largeStyle = {
        fontSize: "24px",
        fontWeight: "700",
        color: this.emphasis ? "#e21334" : ""
      };
      return (h("div", { class: "uk-grid-small uk-flex-bottom uk-margin-small-bottom", style: { fontSize: "18px" }, "uk-grid": true },
        h("div", { class: "uk-width-expand", "uk-leader": leaderOptions },
          h("span", { class: "ks-text-decorated", style: largeStyle }, this.text)),
        h("div", { class: "ks-text-decorated", style: largeStyle }, price)));
    }
    else {
      const normalStyle = {
        fontWeight: this.emphasis ? "700" : "",
        color: this.emphasis ? "#e21334" : ""
      };
      return (h("div", { class: "uk-grid-small uk-flex-bottom uk-margin-small-bottom", style: { fontSize: "18px" }, "uk-grid": true },
        h("div", { class: "uk-width-expand", "uk-leader": leaderOptions, style: normalStyle }, this.text),
        h("div", { style: normalStyle }, price)));
    }
  }
  static get is() { return "ks-cart-summary"; }
  static get properties() { return {
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
      "reflect": true
    },
    "price": {
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
      "attribute": "price",
      "reflect": false
    },
    "large": {
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
      "attribute": "large",
      "reflect": false
    },
    "emphasis": {
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
      "attribute": "emphasis",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "root"; }
}
