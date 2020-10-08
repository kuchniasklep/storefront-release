import { Component, h, Prop, Method } from '@stencil/core';
export class InputSelect {
  constructor() {
    this.lightUp = false;
  }
  render() {
    const lightUp = this.lightUp ? {
      borderColor: "#1488ff",
      backgroundColor: "#d5e6ff",
      color: "#004454"
    } : {};
    return (h("div", { class: "uk-margin" },
      this.label ?
        h("label", { class: "uk-form-label" + (this.error ? " uk-text-danger" : ""), style: { marginBottom: "3px", display: "block" } }, this.label)
        : null,
      h("select", { class: "uk-select" + (this.error ? " uk-form-danger" : ""), style: lightUp, name: this.name, onChange: () => this.Validate() },
        h("slot", null))));
  }
  async IsValid() {
    return true;
  }
  async Validate() {
    this.lightUp = false;
    return Promise.resolve();
  }
  static get is() { return "ks-input-select"; }
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
    "label": {
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
      "attribute": "label",
      "reflect": false
    },
    "error": {
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
      "attribute": "error",
      "reflect": false
    },
    "lightUp": {
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
      "attribute": "light-up",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get methods() { return {
    "IsValid": {
      "complexType": {
        "signature": "() => Promise<boolean>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<boolean>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "Validate": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
}
