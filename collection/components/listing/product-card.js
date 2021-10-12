import { Component, h, Prop, State } from '@stencil/core';
import { addToCart } from '../../global/functions/addToCart';
import { addToFavourites, removeFromFavourites } from '../../global/functions/favourites';
import { common } from '../../global/data/common';
export class ProductCard {
  constructor() {
    this.unavailable = false;
    this.linkOnly = false;
    this.cartLoading = false;
    this.favLoading = false;
    this.favSuccess = false;
  }
  cart() {
    this.cartLoading = true;
    addToCart(this.productId, 1, this.name, this.currentPrice)
      .then(() => this.cartLoading = false);
  }
  favourites() {
    if (this.favLoading)
      return;
    this.favLoading = true;
    if (this.favSuccess) {
      this.favSuccess = false;
      removeFromFavourites(this.productId).then(() => {
        this.favLoading = false;
      });
    }
    else {
      addToFavourites(this.productId).then(() => {
        this.favSuccess = true;
        setTimeout(() => this.favLoading = false, 200);
      });
    }
  }
  render() {
    const currentPrice = this.currentPrice ? this.currentPrice.toFixed(2) + " zł" : "";
    const previousPrice = this.previousPrice ? this.previousPrice.toFixed(2) + " zł" : "";
    const translations = common.get('translations');
    return [
      h("a", { href: this.link, "aria-label": this.name, class: "top" },
        h("ks-img", { fill: true, src: this.img, width: 280, height: 280, alt: this.name }),
        h("span", null, this.name)),
      h("div", { class: "price" },
        this.previousPrice ?
          h("s", { class: "previous" }, previousPrice)
          : null,
        h("span", { class: "current" }, currentPrice)),
      h("div", { class: "bottom" }, this.unavailable ? h("a", { href: this.link, class: "unavailable" }, translations.unavailable)
        : this.linkOnly ? h("a", { href: this.link, class: "link" }, translations.seeMore)
          : [
            h("button", { class: "fav", onClick: () => this.favourites() },
              this.favLoading ? h("ks-loader", null) : h("ks-icon", { name: "star" }),
              this.favSuccess ?
                h("div", { class: "success" },
                  h("ks-icon", { name: "check" }))
                : null),
            h("button", { class: "cart", onClick: () => this.cart() }, this.cartLoading ?
              h("ks-loader", { large: true }) :
              h("span", null, translations.addToCart))
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
      "type": "number",
      "mutable": false,
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
      "attribute": "current-price",
      "reflect": false
    },
    "previousPrice": {
      "type": "number",
      "mutable": false,
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
    }
  }; }
  static get states() { return {
    "cartLoading": {},
    "favLoading": {},
    "favSuccess": {}
  }; }
}
