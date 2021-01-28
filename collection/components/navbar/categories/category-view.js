import { Component, h, Prop, State, Element, Listen, Host } from '@stencil/core';
export class NavbarCategoryView {
  constructor() {
    this.hidden = true;
    this.hiddenO = true;
    this.active = 0;
  }
  componentWillLoad() {
    this.count = this.category.children ? this.category.children.length : 0;
  }
  MouseOverHandler() {
    clearTimeout(this.timeout);
    this.hidden = false;
    this.hiddenO = false;
    this.NavbarColor(false);
  }
  MouseOutHandler() {
    this.hiddenO = true;
    this.timeout = setTimeout(() => {
      this.hidden = true;
    }, 200);
    this.NavbarColor(true);
  }
  NavbarColor(state) {
    const bar = document.querySelector("ks-navbar-categories > nav");
    if (!bar || this.count == 0)
      return;
    bar.style.backgroundColor = state ? "var(--navbar-category-color)" : "var(--navbar-color)";
    bar.style.borderTop = state ? "1px solid transparent" : "1px solid var(--navbar-category-color)";
    bar.style.borderBottom = bar.style.borderTop;
  }
  CalculateHeight() {
    return Math.max(40 * 6, (this.count * 40));
  }
  SetActive(index, children) {
    if (children)
      this.active = index;
  }
  render() {
    const haschildren = this.category.children && this.category.children.length;
    const divstyle = {
      backgroundColor: this.category.backgroundColor || "",
      outlineColor: this.category.backgroundColor || ""
    };
    const linkstyle = {
      color: this.category.color || "",
      marginLeft: this.category == 0 ? "0" : ""
    };
    const childrenstyle = {
      opacity: this.hiddenO ? "0.0" : "1.0"
    };
    return h(Host, { style: divstyle },
      h("a", { href: this.category.url, style: linkstyle },
        this.category.name,
        haschildren ? h("ks-icon", { name: "chevron-down", size: 0.8 }) : null),
      haschildren ?
        h("div", { class: "children", style: childrenstyle, hidden: this.hidden },
          h("div", { class: "buttons" }, this.category.children.map((child, index) => h("a", { href: child.url, class: this.active == index && child.children ? "active" : "", onMouseOver: () => this.SetActive(index, !!child.children) },
            child.name,
            " ",
            !child.children ? h("ks-icon", { name: "link", size: 0.65 }) : null))),
          h("div", { class: "content", style: { maxHeight: this.CalculateHeight() + "px" } }, this.category.children.map((child, index) => h("div", { hidden: this.active != index || this.hidden }, child.children ? child.children.map((item) => h("a", { href: item.url }, item.name)) : null))),
          h("div", { class: "graphic", style: { maxHeight: this.CalculateHeight() + "px" } }, this.category.children.map((child, index) => child.image ?
            h("ks-img", { vertical: true, right: true, target: "ks-category-view > .children", src: child.image, style: { display: (this.active == index) ? "flex" : "none" } })
            : null)))
        : null);
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
        "original": "CategoryData",
        "resolved": "CategoryData",
        "references": {
          "CategoryData": {
            "location": "import",
            "path": "../navbar-data"
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
      "name": "mouseover",
      "method": "MouseOverHandler",
      "target": undefined,
      "capture": false,
      "passive": true
    }, {
      "name": "mouseout",
      "method": "MouseOutHandler",
      "target": undefined,
      "capture": false,
      "passive": true
    }]; }
}
