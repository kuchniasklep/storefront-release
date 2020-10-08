'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-18d28dc7.js');
require('./state-tunnel-786a62ce.js');
const navbarData = require('./navbar-data-43917c65.js');

const NavbarCategories = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(navbarData.Tunnel.Consumer, null, ({ categories }) => (index.h("nav", { class: "uk-section uk-padding-remove uk-light", style: { backgroundColor: '#00426e', maxHeight: "32px" } }, index.h("ul", { class: "uk-subnav uk-visible@m uk-margin-remove uk-text-small", style: { padding: '5px 0' } }, categories.map(category => index.h("li", null, index.h("a", { href: category.url }, category.name, category.children ? index.h("span", { "uk-icon": "icon:  triangle-down" }) : null), category.children ?
      index.h("div", { "uk-dropdown": "offset: 5" }, index.h("ul", { class: "uk-nav uk-dropdown-nav" }, category.children.map(child => index.h("li", null, index.h("a", { href: child.url }, child.name)))))
      : null)))))));
  }
};

exports.ks_navbar_categories = NavbarCategories;
