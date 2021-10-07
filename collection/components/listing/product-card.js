import { Component, h, Prop } from '@stencil/core';
import { addToCart } from '../../global/functions';
export class ProductCard {
  constructor() {
    this.unavailable = false;
    this.linkOnly = false;
    this.uniqueId = "";
  }
  cart() {
    addToCart(this.productId, 1, this.name, this.currentPrice, "", "123");
  }
  render() {
    const currentPrice = this.currentPrice ? this.currentPrice.replace(".", ",") + " zł" : "";
    const previousPrice = this.previousPrice ? this.previousPrice.replace(".", ",") + " zł" : "";
    return [
      h("a", { href: this.link, "aria-label": this.name, class: "top" },
        h("ks-img", { fill: true, src: this.img, width: 280, height: 280, alt: this.name }),
        h("span", null, this.name)),
      h("div", { class: "price" },
        this.previousPrice ?
          h("s", { class: "previous" }, previousPrice)
          : null,
        h("span", { class: "current" }, currentPrice)),
      h("div", { class: "bottom" }, this.unavailable ? h("a", { href: this.link, class: "unavailable" }, "NIEDOST\u0118PNY")
        : this.linkOnly ? h("a", { href: this.link, class: "link" }, "ZOBACZ WI\u0118CEJ")
          : [
            h("ks-button-fav", { "product-id": this.productId }),
            h("button", { class: "cart", onClick: () => this.cart() }, "DO KOSZYKA")
          ])
    ];
  }
  static get is() { return "ks-product-card"; }
  static get originalStyleUrls() { return {
    "$": ["product-card.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-card.css"]
  }; }
  static get properties() { return {
    "unavailable": {
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
      "attribute": "unavailable",
      "reflect": false,
      "defaultValue": "false"
    },
    "linkOnly": {
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
      "attribute": "link-only",
      "reflect": false,
      "defaultValue": "false"
    },
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
    },
    "productId": {
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
      "attribute": "product-id",
      "reflect": false
    },
    "uniqueId": {
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
      "attribute": "unique-id",
      "reflect": false,
      "defaultValue": "\"\""
    }
  }; }
}
