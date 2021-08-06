import { Component, h } from '@stencil/core';
export class Breadcrumbs {
  render() {
    return h("slot", null);
  }
  static get is() { return "ks-breadcrumbs"; }
  static get originalStyleUrls() { return {
    "$": ["breadcrumbs.css"]
  }; }
  static get styleUrls() { return {
    "$": ["breadcrumbs.css"]
  }; }
}
