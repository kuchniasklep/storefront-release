import { Component, h, Prop, State, Element, Listen, Host } from '@stencil/core';
export class NavbarCategorySimple {
  constructor() {
    this.hidden = true;
    this.hiddenO = true;
  }
  MouseOverHandler() {
    clearTimeout(this.timeout);
    this.hidden = false;
    this.hiddenO = false;
  }
  MouseOutHandler() {
    this.hiddenO = true;
    this.timeout = setTimeout(() => {
      this.hidden = true;
    }, 200);
  }
  render() {
    const haschildren = this.category.children && this.category.children.length;
    const divstyle = {
      backgroundColor: this.category.backgroundColor || "",
      outlineColor: this.category.backgroundColor || ""
    };
    const linkstyle = {
      color: this.category.color || "",
      marginLeft: this.category == 0 ? "0" :
        haschildren ? "15px" : ""
    };
    const childrenstyle = {
      visibility: this.hidden ? "hidden" : "visible",
      opacity: this.hiddenO ? "0.0" : "1.0"
    };
    return h(Host, { style: divstyle },
      h("a", { href: this.category.url, style: linkstyle },
        this.category.name,
        " ",
        haschildren ? h("ks-icon", { name: "chevron-down", size: 0.8 }) : null),
      haschildren ?
        h("div", { style: childrenstyle }, this.category.children.map((child) => h("a", { href: child.url }, child.name)))
        : null);
  }
  static get is() { return "ks-category-simple"; }
  static get originalStyleUrls() { return {
    "$": ["category-simple.css"]
  }; }
  static get styleUrls() { return {
    "$": ["category-simple.css"]
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
    "hiddenO": {}
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
