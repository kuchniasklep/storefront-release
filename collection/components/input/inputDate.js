import { Component, h, Prop, Element, State, Method } from '@stencil/core';
import flatpickr from 'flatpickr';
export class InputDate {
  constructor() {
    this.valid = true;
    this.validMessage = "";
  }
  render() {
    const valid = this.valid ? "" : "uk-form-danger";
    const validText = this.valid ? "" : "uk-text-danger";
    return (h("div", { class: "uk-margin" },
      this.label ?
        h("label", { class: "uk-form-label " + validText, style: { marginBottom: "3px", display: "block" } }, this.label)
        : null,
      h("input", { class: "uk-input " + valid, name: this.name, type: "text", placeholder: this.placeholder, onChange: () => this.Validate() }),
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
  componentDidLoad() {
    const dateElement = this.root.querySelector("input");
    flatpickr(dateElement, {
      minDate: "today"
    });
  }
  static get is() { return "ks-input-date"; }
  static get originalStyleUrls() { return {
    "$": ["flatpickr.css"]
  }; }
  static get styleUrls() { return {
    "$": ["flatpickr.css"]
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
