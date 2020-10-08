import { Component, h, Prop, Element, Method, Watch } from '@stencil/core';
export class InputText {
  constructor() {
    this.sameAs = "";
    this.regex = "";
    this.regexMessage = "";
    this.novalidate = false;
    this.message = "";
  }
  render() {
    const isValid = this.message == "";
    const type = this.email ? "email" :
      this.password ? "password" :
        "text";
    const valid = isValid ? "" : "uk-form-danger";
    const validText = isValid ? "" : "uk-text-danger";
    const center = this.center ? " uk-text-center" : "";
    const size = this.large ? " uk-form-large" : "";
    const emphasis = this.emphasis ? { borderColor: isValid ? "black" : "#e21334", backgroundColor: "white" } : null;
    return (h("div", { class: "uk-margin" },
      this.label ?
        h("label", { class: "uk-form-label " + validText, style: { marginBottom: "3px", display: "block" } }, this.label)
        : null,
      h("input", { class: "uk-input " + valid + center + size, style: emphasis, name: this.name, type: type, placeholder: this.placeholder, value: this.value, onChange: () => this.Change() }),
      this.message != "" ?
        h("p", { class: "uk-text-danger", style: { marginTop: "5px" } }, this.message)
        : null));
  }
  Change() {
    this.value = this.root.querySelector("input").value;
    if (!this.novalidate)
      this.Validate();
  }
  MessageWatcher() {
    this.render();
  }
  async IsValid() {
    return this.message == "" ? true : false;
  }
  async Validate() {
    const input = this.root.querySelector("input");
    let message = "";
    if (this.email) {
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regex.test(input.value.toLowerCase()))
        message = "Nieprawidłowy adres e-mail.";
    }
    if (this.digits) {
      const regex = /^([0-9])*$/;
      if (!regex.test(input.value))
        message = "W polu dozwolone są tylko liczby.";
    }
    if (this.price) {
      input.value = input.value.replace(",", ".");
      if (!isNaN(parseFloat(input.value)))
        input.value = parseFloat(input.value).toFixed(2);
      const regex = /^([0-9])*([.][0-9]{1,2})?$/;
      if (!regex.test(input.value))
        message = "W polu dozwolone są tylko ceny bez waluty.";
    }
    if (this.sameAs) {
      const other = this.root.closest("form").querySelector(`input[name='${this.sameAs}']`);
      if (input.value != other.value)
        message += `Podane ${this.password ? "hasła" : "pola"} nie są takie same.`;
    }
    if (this.regex != "" && this.regexMessage != "") {
      const regex = new RegExp(this.regex, "i");
      if (!regex.test(input.value))
        message += this.regexMessage;
    }
    if (input.value.length < this.min)
      message += ` Pole wymaga minimum ${this.min} znaków.`;
    if (input.value.length > this.max)
      message += ` Pole nie może przekroczyć ${this.max} znaków.`;
    if (this.required && input.value.length == 0)
      message = "Pole wymagane.";
    this.message = message;
    return Promise.resolve();
  }
  static get is() { return "ks-input-text"; }
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
    "value": {
      "type": "string",
      "mutable": true,
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
    "digits": {
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
      "attribute": "digits",
      "reflect": false
    },
    "price": {
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
      "attribute": "price",
      "reflect": false
    },
    "email": {
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
      "attribute": "email",
      "reflect": false
    },
    "password": {
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
      "attribute": "password",
      "reflect": false
    },
    "sameAs": {
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
      "attribute": "same-as",
      "reflect": false,
      "defaultValue": "\"\""
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
    "regex": {
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
      "attribute": "regex",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "regexMessage": {
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
      "attribute": "regex-message",
      "reflect": false,
      "defaultValue": "\"\""
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
    "novalidate": {
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
      "attribute": "novalidate",
      "reflect": true,
      "defaultValue": "false"
    },
    "message": {
      "type": "string",
      "mutable": true,
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
      "attribute": "message",
      "reflect": true,
      "defaultValue": "\"\""
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
          },
          "HTMLInputElement": {
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
  static get watchers() { return [{
      "propName": "message",
      "methodName": "MessageWatcher"
    }]; }
}
