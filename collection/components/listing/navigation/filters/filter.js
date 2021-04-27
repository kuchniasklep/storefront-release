import { Component, h, Prop } from '@stencil/core';
export class Filter {
  constructor() {
    this.active = false;
  }
  render() {
    return [
      h("div", { onClick: () => this.active = !this.active },
        this.name,
        h("ks-icon", { name: this.active ? "minus" : "plus", size: 0.9 })),
      h("div", { class: "filter-content" },
        h("slot", null))
    ];
  }
  static get is() { return "ks-filter"; }
  static get originalStyleUrls() { return {
    "$": ["filter.css"]
  }; }
  static get styleUrls() { return {
    "$": ["filter.css"]
  }; }
  static get properties() { return {
    "name": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "name",
      "reflect": false
    },
    "active": {
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
      "attribute": "active",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
}
