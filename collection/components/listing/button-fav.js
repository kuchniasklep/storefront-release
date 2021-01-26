import { Component, h, Prop, State, Element } from '@stencil/core';
import { AddToFavourites, RemoveFromFavourites } from '../functions';
export class ButtonFav {
  constructor() {
    this.subtract = false;
    this.expand = false;
    this.padding = false;
    this.loading = false;
    this.success = false;
  }
  ClickHandler() {
    if (!this.loading && !this.success) {
      this.loading = true;
      setTimeout(() => {
        this.ResultHandler();
      }, 1000);
      if (this.subtract)
        RemoveFromFavourites(this.productId, () => this.ResultHandler());
      else
        AddToFavourites(this.productId, () => this.ResultHandler());
    }
  }
  ResultHandler() {
    this.loading = true;
    this.success = true;
    const navbar = document.querySelector("ks-navbar");
    if (this.subtract)
      navbar.DecrementHeart();
    else
      navbar.IncrementHeart();
  }
  render() {
    return (h("button", { "aria-label": "Do koszyka", onClick: () => this.ClickHandler() },
      this.loading ?
        h("ks-loader", null) : h("ks-icon", { name: this.subtract ? "x" : "star" }),
      this.success ?
        h("div", { class: "success" },
          h("ks-icon", { name: "check" }))
        : null));
  }
  static get is() { return "ks-button-fav"; }
  static get originalStyleUrls() { return {
    "$": ["button-fav.css"]
  }; }
  static get styleUrls() { return {
    "$": ["button-fav.css"]
  }; }
  static get properties() { return {
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
      "reflect": true
    },
    "subtract": {
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
      "attribute": "subtract",
      "reflect": false,
      "defaultValue": "false"
    },
    "expand": {
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
      "attribute": "expand",
      "reflect": true,
      "defaultValue": "false"
    },
    "padding": {
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
      "attribute": "padding",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "loading": {},
    "success": {}
  }; }
  static get elementRef() { return "root"; }
}
