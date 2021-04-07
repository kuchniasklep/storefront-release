import { Component, h, Prop, State, Element, Listen, Host } from '@stencil/core';
export class NavbarCategorySimple {
  constructor() {
    this.hidden = true;
    this.hiddenO = true;
    this.haschildren = false;
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
  componentWillLoad() {
    this.haschildren = !!this.root.querySelector('a[slot=child]');
  }
  render() {
    const childrenstyle = {
      visibility: this.hidden ? "hidden" : "visible",
      opacity: this.hiddenO ? "0.0" : "1.0"
    };
    return h(Host, null,
      h("slot", null),
      this.haschildren ? h("ks-icon", { name: "chevron-down", size: 0.8 }) : null,
      this.haschildren ?
        h("div", { style: childrenstyle },
          h("slot", { name: "child" }))
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
    },
    "haschildren": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "haschildren",
      "reflect": true,
      "defaultValue": "false"
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
