import { Component, h, Prop, State, Element } from '@stencil/core';
import { AddToFavourites, RemoveFromFavourites } from './functions';
export class ButtonFav {
  constructor() {
    this.subtract = false;
    this.expand = false;
    this.padding = false;
    this.loading = false;
    this.success = false;
  }
  componentDidLoad() {
    this.root.style.display = "block";
    if (this.expand)
      this.root.style.flex = "1";
  }
  ClickHandler() {
    if (!this.loading && !this.success) {
      this.loading = true;
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
    const padding = { padding: "5px" };
    return (h("button", { class: "uk-button uk-button-danger uk-button-danger-darker uk-position-relative uk-width-expand " + (this.padding ? "uk-padding-small@s" : ""), style: this.padding ? padding : null, "aria-label": "Do koszyka", onClick: () => { this.ClickHandler(); } },
      this.loading ?
        h("div", { "uk-spinner": "ratio: 0.6" }) :
        h("span", { "uk-icon": this.subtract ? "trash" : "heart" }),
      this.success ?
        h("div", { class: "ks-success-check uk-position-cover uk-animation-fade", style: { backgroundColor: "#c10e2c" } },
          h("span", { "uk-icon": "check", class: "uk-position-center" }))
        : null));
  }
  static get is() { return "ks-button-fav"; }
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
      "reflect": false,
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
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "loading": {},
    "success": {}
  }; }
  static get elementRef() { return "root"; }
}
