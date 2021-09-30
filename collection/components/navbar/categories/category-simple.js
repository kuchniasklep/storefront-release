import { Component, h, Prop, State, Element, Listen, Host } from '@stencil/core';
export class NavbarCategorySimple {
  constructor() {
    this.hidden = true;
    this.hiddenO = true;
  }
  MouseOverHandler() {
    clearTimeout(this.timeout);
    this.delaytimeout = setTimeout(() => {
      this.hidden = false;
      this.hiddenO = false;
    }, 200);
  }
  MouseOutHandler() {
    clearTimeout(this.delaytimeout);
    this.delaytimeout = setTimeout(() => {
      this.hiddenO = true;
      this.timeout = setTimeout(() => {
        this.hidden = true;
      }, 200);
    }, 200);
  }
  render() {
    const childrenstyle = {
      visibility: this.hidden ? "hidden" : "visible",
      opacity: this.hiddenO ? "0.0" : "1.0"
    };
    return h(Host, null,
      h("a", { href: this.category.url }, this.category.name),
      'children' in this.category ? [
        h("ks-icon", { name: "chevron-down", size: 0.8 }),
        h("div", { style: childrenstyle }, this.category.children.map(child => h("a", { href: child.url }, child.name)))
      ] : null);
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
    "hiddenO": {}
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
