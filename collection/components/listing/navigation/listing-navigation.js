import { Component, h } from '@stencil/core';
export class ListingNavigation {
  render() { return h("slot", null); }
  static get is() { return "ks-listing-navigation"; }
  static get originalStyleUrls() { return {
    "$": ["listing-navigation.css"]
  }; }
  static get styleUrls() { return {
    "$": ["listing-navigation.css"]
  }; }
}
