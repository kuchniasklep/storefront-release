import { Component, h, Prop } from '@stencil/core';
export class RecipeNutrition {
  render() {
    return [
      h("div", null, this.type),
      h("div", null, this.value)
    ];
  }
  static get is() { return "ks-recipe-nutrition"; }
  static get originalStyleUrls() { return {
    "$": ["recipe-nutrition.css"]
  }; }
  static get styleUrls() { return {
    "$": ["recipe-nutrition.css"]
  }; }
  static get properties() { return {
    "type": {
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
      "attribute": "type",
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
    }
  }; }
}
