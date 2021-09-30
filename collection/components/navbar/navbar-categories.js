import { Component, h } from '@stencil/core';
import { common } from "../../global/data/common";
export class NavbarCategories {
  render() {
    return common.get('categories').map(category => this.isDeep(category) ?
      h("ks-category-view", { category: category }) :
      h("ks-category-simple", { category: category }));
  }
  isDeep(category) {
    return category.children.reduce((previous, current) => previous || 'children' in current, false);
  }
  static get is() { return "ks-navbar-categories"; }
  static get originalStyleUrls() { return {
    "$": ["navbar-categories.css"]
  }; }
  static get styleUrls() { return {
    "$": ["navbar-categories.css"]
  }; }
}
