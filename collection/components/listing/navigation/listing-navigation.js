import { Component, h, Prop } from '@stencil/core';
export class ListingNavigation {
  render() { return h("slot", null); }
  static get is() { return "ks-listing-navigation"; }
  static get originalStyleUrls() { return {
    "$": ["listing-navigation.css"]
  }; }
  static get styleUrls() { return {
    "$": ["listing-navigation.css"]
  }; }
  static get properties() { return {
    "products": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "products",
      "reflect": true
    }
  }; }
}
