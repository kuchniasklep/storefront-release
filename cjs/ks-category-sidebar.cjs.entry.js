'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7d3fd69d.js');

const categorySidebarCss = "ks-category-sidebar>.name{position:relative;cursor:pointer;padding:7px 0px 5px 0px}ks-category-sidebar>.name>ks-icon{position:absolute;top:6px;right:0px}ks-category-sidebar>.children{overflow:hidden;padding:0px 0px 0px 10px;font-size:16px;-webkit-transition:opacity 0.5s ease;transition:opacity 0.5s ease}ks-category-sidebar>.children>a{padding:4px 0px}ks-category-sidebar:not([open])>.children{max-height:0px !important;opacity:0}ks-category-sidebar[open]>.children{padding:5px 0px 8px 10px;opacity:1}ks-category-sidebar .seeall{color:#bbbbbb  !important}";

const NavbarCategorySidebar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.open = false;
    this.keepSiblingsOpen = false;
    this.hideWithChildren = false;
    this.haschildren = false;
  }
  componentWillLoad() {
    this.haschildren = !!this.root.querySelector('*');
  }
  componentDidLoad() {
    this.children = this.root.querySelector(".children").children;
  }
  click() {
    if (this.haschildren) {
      this.open = !this.open;
      if (!this.keepSiblingsOpen) {
        Array.from(this.root.parentElement.children).forEach((element) => {
          if (element != this.root && "hide" in element)
            element.hide();
        });
      }
      if (this.open && this.hideWithChildren) {
        Array.from(this.children).forEach((element) => {
          if (element != this.root && "hide" in element)
            element.hide();
        });
      }
    }
  }
  async hide() {
    if (this.haschildren) {
      this.open = false;
    }
  }
  render() {
    return index.h(index.Host, null, index.h("div", { class: "name", onClick: () => this.click() }, index.h("span", null, this.name), this.haschildren ? index.h("ks-icon", { name: this.open ? "minus" : "plus" }) : null), this.haschildren ?
      index.h("div", { class: "children" }, index.h("slot", null))
      : null);
  }
  get root() { return index.getElement(this); }
};
NavbarCategorySidebar.style = categorySidebarCss;

exports.ks_category_sidebar = NavbarCategorySidebar;
