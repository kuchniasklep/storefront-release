import { Component, h } from '@stencil/core';
import { store } from "./navbar-store";
export class NavbarCategories {
  render() {
    return h("nav", null,
      " ",
      store.get("categories").map(category => {
        let expanded = false;
        if (category.children)
          for (let x = 0; x < category.children.length; x++) {
            const c = category.children[x];
            if (c.children) {
              expanded = true;
              break;
            }
          }
        if (expanded)
          return h("ks-category-view", { category: category });
        else
          return h("ks-category-simple", { category: category });
      }),
      " ");
  }
  static get is() { return "ks-navbar-categories"; }
  static get originalStyleUrls() { return {
    "$": ["navbar-categories.css"]
  }; }
  static get styleUrls() { return {
    "$": ["navbar-categories.css"]
  }; }
}
