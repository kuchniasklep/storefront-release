import { Component, h, Prop, Element, State, Method } from '@stencil/core';
export class InputNumber {
  constructor() {
    this.valid = true;
    this.validMessage = "";
    this.InputHandler = (event) => {
      if (event.inputType != "insertText") {
        const input = this.root.querySelector("input");
        this.ClampInput(input);
      }
      event.stopImmediatePropagation();
    };
    this.ChangeHandler = (event) => {
      this.Validate();
      event.stopImmediatePropagation();
    };
  }
  render() {
    const valid = this.valid ? "" : "uk-form-danger";
    const validText = this.valid ? "" : "uk-text-danger";
    const center = this.center ? " uk-text-center" : "";
    const emphasis = this.emphasis ? { borderColor: "black", backgroundColor: "white" } : null;
    return (h("div", { class: "uk-margin" },
      this.label ?
        h("label", { class: "uk-form-label " + validText, style: { marginBottom: "3px", display: "block" } }, this.label)
        : null,
      h("input", { class: "uk-input " + valid + center, style: emphasis, name: this.name, type: "number", step: this.step, placeholder: this.placeholder, onInput: this.InputHandler, onChange: this.ChangeHandler, onBlur: this.ChangeHandler }),
      !this.valid ?
        h("p", { class: "uk-text-danger", style: { marginTop: "5px" } }, this.validMessage)
        : null));
  }
  async IsValid() {
    return this.valid;
  }
  async Validate() {
    const input = this.root.querySelector("input");
    let valid = true;
    let message = "";
    this.ClampInput(input);
    if (this.required) {
      if (input.value.length == 0) {
        valid = false;
        message = "Pole wymagane.";
      }
    }
    this.valid = valid;
    this.validMessage = message;
    return Promise.resolve();
  }
  ClampInput(input) {
    if (parseInt(input.value) > this.max) {
      input.value = this.max.toString();
    }
    if (parseInt(input.value) < this.min) {
      input.value = this.min.toString();
    }
  }
  static get is() { return "ks-input-number"; }
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
    "center": {
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
      "attribute": "center",
      "reflect": false
    },
    "emphasis": {
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
      "attribute": "emphasis",
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
    "step": {
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
      "attribute": "step",
      "reflect": false
    },
    "value": {
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
      "attribute": "value",
      "reflect": false
    }
  }; }
  static get states() { return {
    "valid": {},
    "validMessage": {}
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
