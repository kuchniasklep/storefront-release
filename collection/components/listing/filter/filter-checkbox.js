import { Component, h, Prop } from '@stencil/core';
export class FilterCheckbox {
  constructor() {
    this.active = false;
  }
  render() {
    return [
      h("label", null,
        h("input", { class: "uk-checkbox", name: this.name + "[" + this.filterId + "]", type: "checkbox", checked: this.active }),
        " ",
        h("slot", null)),
      h("br", null)
    ];
  }
  static get is() { return "ks-filter-checkbox"; }
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
    "filterId": {
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
      "attribute": "filter-id",
      "reflect": false
    },
    "active": {
      "type": "boolean",
      "mutable": false,
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
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
