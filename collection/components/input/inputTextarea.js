import { Component, h, Prop, Element, State, Method } from '@stencil/core';
export class InputTextarea {
  constructor() {
    this.invalid = false;
    this.invalidMessage = "";
  }
  render() {
    return [
      this.label ?
        h("label", null, this.label)
        : null,
      h("textarea", { rows: this.rows, name: this.name, placeholder: this.placeholder, onChange: () => this.Validate() }),
      this.invalid ?
        h("p", null, this.invalidMessage)
        : null
    ];
  }
  async IsValid() {
    return !this.invalid;
  }
  async Validate() {
    const input = this.root.querySelector("textarea");
    let valid = true;
    let message = "";
    if (input.value.length < this.min) {
      valid = false;
      message += ` Pole wymaga minimum ${this.min} znaków.`;
    }
    if (input.value.length > this.max) {
      valid = false;
      message += ` Pole nie może przekroczyć ${this.max} znaków.`;
    }
    if (this.required && input.value.length == 0) {
      valid = false;
      message = "Pole wymagane.";
    }
    this.invalid = !valid;
    this.invalidMessage = message;
    return Promise.resolve();
  }
  static get is() { return "ks-input-textarea"; }
  static get originalStyleUrls() { return {
    "$": ["inputTextarea.css"]
  }; }
  static get styleUrls() { return {
    "$": ["inputTextarea.css"]
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
    "placeholder": {
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
      "attribute": "placeholder",
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
    "rows": {
      "type": "number",
      "mutable": false,
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
      "attribute": "rows",
      "reflect": false
    },
    "min": {
      "type": "number",
      "mutable": false,
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
      "attribute": "min",
      "reflect": false
    },
    "max": {
      "type": "number",
      "mutable": false,
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
      "attribute": "max",
      "reflect": false
    },
    "required": {
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
      "attribute": "required",
      "reflect": false
    },
    "noresize": {
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
      "attribute": "noresize",
      "reflect": true
    },
    "invalid": {
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
      "attribute": "invalid",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "invalidMessage": {}
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
  static get elementRef() { return "root"; }
}
