import { Component, h, Prop, State, Element, Listen, Host } from '@stencil/core';
export class NavbarCategoryView {
  constructor() {
    this.hidden = true;
    this.hiddenO = true;
    this.active = 0;
    this.count = 0;
  }
  MouseOverHandler() {
    clearTimeout(this.timeout);
    clearTimeout(this.delaytimeout);
    this.delaytimeout = setTimeout(() => {
      this.hidden = false;
      this.hiddenO = false;
      this.NavbarColor(false);
    }, 200);
  }
  MouseOutHandler() {
    clearTimeout(this.delaytimeout);
    this.delaytimeout = setTimeout(() => {
      this.hiddenO = true;
      this.timeout = setTimeout(() => {
        this.hidden = true;
      }, 200);
      this.NavbarColor(true);
    }, 200);
  }
  NavbarColor(state) {
    const bar = document.querySelector("ks-navbar-categories");
    if (!bar)
      return;
    bar.style.backgroundColor = state ? "var(--navbar-category-color)" : "var(--navbar-color)";
    bar.style.borderTop = state ? "1px solid transparent" : "1px solid var(--navbar-category-color)";
    bar.style.borderBottom = bar.style.borderTop;
  }
  componentWillLoad() {
    this.count = this.category.children.length;
  }
  render() {
    const childrenstyle = {
      opacity: this.hiddenO ? "0.0" : "1.0",
      height: (this.count * 40) + "px"
    };
    return h(Host, null,
      h("a", { href: this.category.url }, this.category.name),
      h("ks-icon", { name: "chevron-down", size: 0.8 }),
      h("div", { class: "children", style: childrenstyle, hidden: this.hidden },
        h("div", { class: "buttons" }, this.category.children.map((child, index) => h("a", { href: child.url, class: 'children' in child && index == this.active ? "active" : null, onMouseOver: () => 'children' in child ? this.active = index : null },
          child.name,
          'children' in child ? null :
            h("ks-icon", { name: "link", size: 0.65 })))),
        h("div", { class: "content" }, this.category.children.map((child, index) => 'children' in child ?
          h("div", { hidden: index != this.active }, child.children.map(sub => h("a", { href: sub.url }, sub.name)))
          : null)),
        h("div", { class: "graphic" }, this.category.children.map((category, index) => "image" in category ?
          h("ks-img2", { vertical: true, src: category.image.url, width: category.image.width, height: category.image.height, target: "ks-category-view > .children > .graphic", style: { display: (this.active == index) ? "block" : "none" } })
          : null))));
  }
  static get is() { return "ks-category-view"; }
  static get originalStyleUrls() { return {
    "$": ["category-view.css"]
  }; }
  static get styleUrls() { return {
    "$": ["category-view.css"]
  }; }
  static get properties() { return {
    "category": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Category",
        "resolved": "Category",
        "references": {
          "Category": {
            "location": "import",
            "path": "../../../global/data/common"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
  static get states() { return {
    "hidden": {},
    "hiddenO": {},
    "active": {}
  }; }
  static get elementRef() { return "root"; }
  static get listeners() { return [{
      "name": "mouseenter",
      "method": "MouseOverHandler",
      "target": undefined,
      "capture": false,
      "passive": true
    }, {
      "name": "mouseleave",
      "method": "MouseOutHandler",
      "target": undefined,
      "capture": false,
      "passive": true
    }]; }
}
