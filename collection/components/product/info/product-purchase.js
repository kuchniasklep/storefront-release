import { Component, h, State, Element, Event, Prop } from '@stencil/core';
import { store } from "../product-store";
export class ProductPurchase {
  constructor() {
    this.cartText = "Do koszyka";
    this.availabilityText = "Powiadom o dostępności";
    this.favouritesIcon = "star";
    this.cartAnimation = false;
    this.favouritesAnimation = false;
  }
  CartHandler() {
    if (store.get("availability") > 0) {
      if (!store.get("cartLoading"))
        this.addToCart.emit();
    }
    else
      document.querySelector("ks-product-notify").show();
  }
  FavouritesHandler() {
    if (!store.get("favouritesLoading") && !store.get("favouritesCompleted")) {
      this.addToFavourites.emit();
    }
  }
  render() {
    const available = store.get("availability") > 0;
    if (store.get("cartLoading"))
      this.cartAnimation = true;
    else
      setTimeout(() => {
        this.cartAnimation = false;
      }, 300);
    if (store.get("favouritesLoading"))
      this.favouritesAnimation = true;
    else
      setTimeout(() => {
        this.favouritesAnimation = false;
      }, 300);
    const favClass = [
      "fav",
      store.get("favouritesCompleted") ? "completed" : null,
      store.get("favouritesLoading") ? "loading" : null
    ];
    return [
      h("button", { onClick: () => this.CartHandler(), class: "cart" + (store.get("cartLoading") ? " loading" : "") + (available ? "" : " disabled") },
        available ? this.cartText : this.availabilityText,
        h("ks-loader", { oversized: true, running: this.cartAnimation })),
      available ? h("ks-product-count", null) : null,
      h("button", { onClick: () => this.FavouritesHandler(), class: favClass.join(" ") },
        h("ks-icon", { name: this.favouritesIcon }),
        h("ks-loader", { running: this.favouritesAnimation }),
        h("ks-icon", { class: "completed", name: "check" }))
    ];
  }
  static get is() { return "ks-product-purchase"; }
  static get originalStyleUrls() { return {
    "$": ["product-purchase.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-purchase.css"]
  }; }
  static get properties() { return {
    "cartText": {
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
      "attribute": "cart-text",
      "reflect": false,
      "defaultValue": "\"Do koszyka\""
    },
    "availabilityText": {
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
      "attribute": "availability-text",
      "reflect": false,
      "defaultValue": "\"Powiadom o dost\u0119pno\u015Bci\""
    },
    "favouritesIcon": {
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
      "attribute": "favourites-icon",
      "reflect": false,
      "defaultValue": "\"star\""
    }
  }; }
  static get states() { return {
    "cartAnimation": {},
    "favouritesAnimation": {}
  }; }
  static get events() { return [{
      "method": "addToCart",
      "name": "addToCart",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "addToFavourites",
      "name": "addToFavourites",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "root"; }
}
