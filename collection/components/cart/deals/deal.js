import { Component, h, Prop, State } from '@stencil/core';
import Tunnel from '../cartData';
export class CartDeal {
  constructor() {
    this.loading = false;
  }
  Add() {
    this.loading = true;
    this.AddDeal(this.ikey).then(() => {
      this.loading = false;
    });
  }
  render() {
    return [
      h("a", { href: this.link },
        h("div", { class: "image" },
          h("div", { class: "circle center" },
            h("ks-img", { src: this.img, alt: this.name, vertical: true, center: true })),
          h("svg", { class: "fx fx1 center", width: "250", height: "250" },
            h("circle", { cx: "125", cy: "125", r: "80", fill: "transparent", stroke: "white", "stroke-width": "3", "stroke-dasharray": "50, 32" })),
          h("svg", { class: "fx fx2 center", width: "250", height: "250" },
            h("circle", { cx: "125", cy: "125", r: "88", fill: "transparent", stroke: "white", "stroke-width": "3", "stroke-dasharray": "50,59" })),
          h("svg", { class: "fx fx3 center", width: "250", height: "250" },
            h("circle", { cx: "125", cy: "125", r: "96", fill: "transparent", stroke: "white", "stroke-width": "3", "stroke-dasharray": "30,30" })),
          h("svg", { class: "fx fx4 center", width: "250", height: "250" },
            h("circle", { cx: "125", cy: "125", r: "106", fill: "transparent", stroke: "white", "stroke-width": "3", "stroke-dasharray": "70,60" })))),
      h("div", { class: "text ks-text-decorated" },
        h("div", { class: "top" },
          h("a", { href: this.link }, this.name)),
        h("div", { class: "bottom" },
          this.price,
          h("button", { class: "ks-text-decorated small", onClick: () => this.Add() }, this.loading ? h("div", { "uk-spinner": "ratio: 0.8" }) : h("span", null, "DODAJ DO KOSZYKA")))),
      h("button", { class: "ks-text-decorated large", onClick: () => this.Add() }, this.loading ? h("div", { "uk-spinner": "ratio: 0.8" }) : h("span", null, "DODAJ DO KOSZYKA"))
    ];
  }
  static get is() { return "ks-cart-deal"; }
  static get originalStyleUrls() { return {
    "$": ["deal.css"]
  }; }
  static get styleUrls() { return {
    "$": ["deal.css"]
  }; }
  static get properties() { return {
    "ikey": {
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
      "attribute": "ikey",
      "reflect": true
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
    "AddDeal": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(id: string) => Promise<void>",
        "resolved": "(id: string) => Promise<void>",
        "references": {
          "Promise": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
  static get states() { return {
    "loading": {}
  }; }
}
Tunnel.injectProps(CartDeal, ['AddDeal']);
