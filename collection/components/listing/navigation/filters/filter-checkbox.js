import { Component, h, Prop } from '@stencil/core';
export class FilterCheckbox {
  constructor() {
    this.active = false;
  }
  change(e) {
    this.active = e.target.checked;
  }
  render() {
    return [
      h("label", null,
        h("input", { name: this.name, value: this.active ? this.value : "", type: "checkbox", checked: this.active, onChange: e => this.change(e) }),
        h("span", { class: "checkmark" }),
        this.text)
    ];
  }
  static get is() { return "ks-filter-checkbox"; }
  static get originalStyleUrls() { return {
    "$": ["filter-checkbox.css"]
  }; }
  static get styleUrls() { return {
    "$": ["filter-checkbox.css"]
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
    "value": {
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
      "attribute": "value",
      "reflect": false
    },
    "text": {
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
      "attribute": "text",
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
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
