import { Component, h } from '@stencil/core';
export class FooterLinks {
  render() {
    return [
      h("slot", { name: "heading" }),
      h("ul", null,
        h("slot", null))
    ];
  }
  static get is() { return "ks-footer-links"; }
  static get originalStyleUrls() { return {
    "$": ["footer-links.css"]
  }; }
  static get styleUrls() { return {
    "$": ["footer-links.css"]
  }; }
}
