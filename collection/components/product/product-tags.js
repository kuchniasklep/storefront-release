import { Component, h, Prop, Element } from '@stencil/core';
export class ProductTags {
  constructor() {
    this.expanded = false;
  }
  componentDidLoad() {
    const count = this.root.querySelectorAll('a').length;
    if (count > 6)
      this.expandable = 3;
    else if (count > 4)
      this.expandable = 2;
    else if (count > 3)
      this.expandable = 1;
  }
  render() {
    return [
      h("div", null,
        h("slot", null)),
      h("ks-button", { transparent: true, narrower: true, round: true, icon: this.expanded ? "minus" : "plus", onClick: () => this.expanded = !this.expanded })
    ];
  }
  static get is() { return "ks-product-tags"; }
  static get originalStyleUrls() { return {
    "$": ["product-tags.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-tags.css"]
  }; }
  static get properties() { return {
    "expanded": {
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
      "attribute": "expanded",
      "reflect": true,
      "defaultValue": "false"
    },
    "expandable": {
      "type": "number",
      "mutable": true,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "expandable",
      "reflect": true
    }
  }; }
  static get elementRef() { return "root"; }
}
