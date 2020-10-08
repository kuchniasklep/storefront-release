import { Component, h, } from '@stencil/core';
export class Grid {
  render() {
    return h("slot", null);
  }
  static get is() { return "ks-grid"; }
  static get originalStyleUrls() { return {
    "$": ["grid.css"]
  }; }
  static get styleUrls() { return {
    "$": ["grid.css"]
  }; }
}
