import { Component, h, Prop, Element, State, Method } from '@stencil/core';
export class InputCheck {
  constructor() {
    this.nomessage = false;
    this.invalid = false;
    this.invalidMessage = "";
  }
  render() {
    const type = this.radio ? "radio" :
      this.checkbox ? "checkbox" :
        "checkbox";
    return [
      h("label", null,
        h("input", { name: this.name, type: type, checked: this.currentCheck, value: this.value, onChange: (event) => {
            this.currentCheck = event.target.checked;
            this.Validate();
          } }),
        h("span", { innerHTML: this.label })),
      this.invalid && this.required && !this.nomessage ?
        h("p", null, this.invalidMessage)
        : null
    ];
  }
  componentWillLoad() {
    this.currentCheck = this.checked;
  }
  async IsValid() {
    return !this.invalid;
  }
  async Validate() {
    const input = this.root.querySelector("input");
    let valid = true;
    let message = "";
    if (this.required && !input.checked) {
      valid = false;
      message = "Pole wymagane.";
    }
    this.invalid = !valid;
    this.invalidMessage = message;
    return Promise.resolve();
  }
  static get is() { return "ks-input-check"; }
  static get originalStyleUrls() { return {
    "$": ["inputCheck.css"]
  }; }
  static get styleUrls() { return {
    "$": ["inputCheck.css"]
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
    "large": {
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
      "attribute": "large",
      "reflect": true
    },
    "radio": {
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
      "attribute": "radio",
      "reflect": false
    },
    "checkbox": {
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
      "attribute": "checkbox",
      "reflect": false
    },
    "checked": {
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
      "attribute": "checked",
      "reflect": false
    },
    "nomessage": {
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
      "attribute": "nomessage",
      "reflect": false,
      "defaultValue": "false"
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
