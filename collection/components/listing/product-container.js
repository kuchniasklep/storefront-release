import { Component, h } from '@stencil/core';
export class Container {
  render() {
    return h("slot", null);
  }
  static get is() { return "ks-product-container"; }
  static get originalStyleUrls() { return {
    "$": ["product-container.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-container.css"]
  }; }
}
