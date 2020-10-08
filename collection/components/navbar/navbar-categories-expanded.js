import { Component, h } from '@stencil/core';
import Tunnel from './navbar-data';
export class NavbarCategoriesExpanded {
  render() {
    return (h(Tunnel.Consumer, null, ({ categories }) => (h("nav", { class: "uk-visible@m", style: {
        backgroundColor: '#00426e',
        transition: "background-color 0.2s ease",
        height: "32px",
        borderTop: "1px solid transparent",
        borderBottom: "1px solid transparent",
        position: "relative",
        padding: "0 15px"
      } }, categories.map((category, index) => {
      let subcategoriesWithChildren = false;
      if (category.children)
        for (let x = 0; x < category.children.length; x++) {
          const c = category.children[x];
          if (c.children) {
            subcategoriesWithChildren = true;
            break;
          }
        }
      if (subcategoriesWithChildren)
        return (h("ks-category-view", { count: category.children ? category.children.length : 0, category: index }));
      else
        return (h("ks-category-simple", { category: index }));
    })))));
  }
  static get is() { return "ks-navbar-categories-expanded"; }
}
