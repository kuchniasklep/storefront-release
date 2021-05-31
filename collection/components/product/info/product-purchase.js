import { Component, h, State, Element, Event } from '@stencil/core';
import { store } from "../product-store";
export class ProductPurchase {
  constructor() {
    this.cartAnimation = false;
    this.favouritesAnimation = false;
  }
  addToCartHandler() {
    if (store.get("availability") > 0 && !store.get("cartLoading"))
      this.addToCart.emit();
  }
  addToFavouritesHandler() {
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
      h("button", { disabled: !available, onClick: () => this.addToCartHandler(), class: "cart " + (store.get("cartLoading") ? "loading" : "") },
        available ? "DO KOSZYKA" : "NIEDOSTĘPNY",
        h("ks-loader", { oversized: true, running: this.cartAnimation })),
      available ? h("ks-product-count", null) : null,
      h("button", { onClick: () => this.addToFavouritesHandler(), class: favClass.join(" ") },
        h("ks-icon", { name: "star" }),
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
