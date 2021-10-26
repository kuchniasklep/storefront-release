import { Component, h, Prop, Event, State } from '@stencil/core';
import { store } from '../cart-store';
export class CartDealGroup {
  componentWillLoad() {
    this.currentDeal = this.deals[0];
  }
  change(target) {
    const select = target;
    this.currentDeal = this.deals[select.selectedIndex];
  }
  Add() {
    this.addDeal.emit(this.currentDeal.id);
  }
  render() {
    return [
      h("a", { href: this.currentDeal.link },
        h("div", { class: "image" },
          h("div", { class: "circle center" },
            h("ks-img", { src: this.currentDeal.img, alt: this.name, vertical: true, center: true })),
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
          h("a", { href: this.currentDeal.link }, this.name),
          h("div", { class: "variants" },
            h("label", null, "Wybierz kolor:"),
            h("select", { class: "ks-text-decorated", onChange: event => this.change(event.target) }, this.deals.map(deal => h("option", null, deal.name))))),
        h("div", { class: "bottom" },
          this.currentDeal.price,
          h("button", { class: "ks-text-decorated small", onClick: () => this.Add() }, store.get('loadingDeals') ? h("div", { "uk-spinner": "ratio: 0.8" }) : h("span", null, "DODAJ DO KOSZYKA")))),
      h("button", { class: "ks-text-decorated large", onClick: () => this.Add() }, store.get('loadingDeals') ? h("div", { "uk-spinner": "ratio: 0.8" }) : h("span", null, "DODAJ DO KOSZYKA"))
    ];
  }
  static get is() { return "ks-cart-deal-group"; }
  static get originalStyleUrls() { return {
    "$": ["dealGroup.css"]
  }; }
  static get styleUrls() { return {
    "$": ["dealGroup.css"]
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
    "deals": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "deal[]",
        "resolved": "deal[]",
        "references": {
          "deal": {
            "location": "import",
            "path": "../cart-data"
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
    "currentDeal": {}
  }; }
  static get events() { return [{
      "method": "addDeal",
      "name": "addDeal",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
}
