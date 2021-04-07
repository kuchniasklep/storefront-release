import { Component, h } from '@stencil/core';
export class NavbarCategories {
  render() {
    return h("nav", null,
      h("slot", null));
  }
  static get is() { return "ks-navbar-categories"; }
  static get originalStyleUrls() { return {
    "$": ["navbar-categories.css"]
  }; }
  static get styleUrls() { return {
    "$": ["navbar-categories.css"]
  }; }
}
