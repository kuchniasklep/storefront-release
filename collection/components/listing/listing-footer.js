import { Component, h } from '@stencil/core';
export class ListingFooter {
  render() {
    return [
      h("slot", null),
      h("slot", { name: "tags" })
    ];
  }
  static get is() { return "ks-listing-footer"; }
  static get originalStyleUrls() { return {
    "$": ["listing-footer.css"]
  }; }
  static get styleUrls() { return {
    "$": ["listing-footer.css"]
  }; }
}
