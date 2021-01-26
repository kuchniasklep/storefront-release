import { Component, h, Prop, State, Element } from '@stencil/core';
export class ProductTab {
  constructor() {
    this.link = "";
    this.message = "";
    this.hasMore = false;
    this.expand = false;
  }
  render() {
    return [
      h("div", { class: "message" },
        h("ks-icon", { name: "mail", size: 2.5 }),
        h("p", null, this.message)),
      h("slot", null),
      this.hasMore ?
        h("div", { class: "more", hidden: !this.expand },
          h("slot", { name: "hidden" }))
        : null,
      h("button", { onClick: () => this.expand = !this.expand, class: "expand" },
        h("ks-icon", { name: this.expand ? "chevron-up" : "chevron-down", size: 1.5 })),
      this.link ?
        h("a", { href: this.link, rel: "nofollow", class: "add", "aria-label": "Napisz recenzj\u0119" },
          h("ks-icon", { name: "plus-circle", size: 1.5 }))
        : null
    ];
  }
  static get is() { return "ks-product-comments"; }
  static get originalStyleUrls() { return {
    "$": ["product-comments.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-comments.css"]
  }; }
  static get properties() { return {
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
      "reflect": false,
      "defaultValue": "\"\""
    },
    "message": {
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
      "attribute": "message",
      "reflect": false,
      "defaultValue": "\"\""
    }
  }; }
  static get states() { return {
    "hasMore": {},
    "expand": {}
  }; }
  static get elementRef() { return "root"; }
}
