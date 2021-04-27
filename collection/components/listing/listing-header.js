import { Component, h, Element } from '@stencil/core';
export class ListingHeader {
  constructor() {
    this.secondSection = false;
  }
  componentWillLoad() {
    if (this.root.querySelector("*[slot=description], *[slot=categories]"))
      this.secondSection = true;
  }
  render() {
    return [
      h("slot", { name: "title" }),
      h("slot", { name: "breadcrumbs" }),
      this.secondSection ? h("hr", null) : null,
      h("slot", { name: "description" }),
      h("slot", { name: "categories" })
    ];
  }
  static get is() { return "ks-listing-header"; }
  static get originalStyleUrls() { return {
    "$": ["listing-header.css"]
  }; }
  static get styleUrls() { return {
    "$": ["listing-header.css"]
  }; }
  static get elementRef() { return "root"; }
}
