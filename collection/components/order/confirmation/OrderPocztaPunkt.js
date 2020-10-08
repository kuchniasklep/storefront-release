import { Component, h, Prop, Element, State, Method } from '@stencil/core';
export class OrderPocztapunkt {
  constructor() {
    this.search = "Wrocław, Polska";
    this.api = "";
    this.description = "";
    this.address = "";
    this.code = "";
    this.valid = true;
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  async Show(event) {
    event.preventDefault();
    PPWidgetApp.toggleMap({
      callback: (c) => this.Callback(c),
      payOnPickup: false,
      address: this.search
    });
  }
  Callback(callback) {
    var value = callback['name'] + ' - ' + callback['city'] + ' - ' + callback['street'];
    var punktodbioru = callback['pni'];
    this.address = callback['name'] + ' - ' + callback['city'] + ' - ' + callback['street'];
    this.search = callback['city'];
    this.code = callback['pni'];
    this.description = callback['description'];
    this.description = this.description.replace(/#/gi, '<br />');
    let formData = new FormData();
    formData.append("value", value);
    formData.append("punktodbioru", punktodbioru);
    var headers = new Headers();
    headers.append('pragma', 'no-cache');
    headers.append('cache-control', 'no-cache');
    fetch(this.api, {
      method: 'POST',
      headers: headers,
      body: formData,
      credentials: "same-origin"
    });
    this.Validate();
  }
  async Validate() {
    this.valid = this.address != "";
  }
  async IsValid() {
    return this.valid;
  }
  render() {
    return [
      h("style", { innerHTML: "\n                #overlay {\n                    position: fixed !important;\n                    display: flex !important;\n                    width: 100%;\n                    height: 100vh;\n                    justify-content: center;\n                    align-items: center;\n\n                    top: 0 !important;\n                }\n\n                @keyframes ks-fade {\n                    from {opacity: 1.0;}\n                    to {opacity: 0.4;}\n                }\n            " }),
      h("p", { innerHTML: this.address }),
      h("button", { class: "uk-button uk-width-1-1 uk-margin-top " + (this.valid ? "uk-button-secondary" : "uk-button-danger"), style: { animation: this.valid ? "" : "ks-fade 0.5s cubic-bezier(.86,.01,.67,1) infinite alternate" }, onClick: (e) => this.Show(e) }, "Wybierz punkt dostawy"),
      h("input", { type: "hidden", name: "lokalizacjaRuch", value: this.address }),
      h("input", { type: "hidden", name: "ShippingDestinationCode", value: this.code }),
      h("input", { type: "hidden", name: "OpisPunktuOdbioru", value: this.description })
    ];
  }
  static get is() { return "ks-order-pocztapunkt"; }
  static get properties() { return {
    "search": {
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
      "attribute": "search",
      "reflect": false,
      "defaultValue": "\"Wroc\u0142aw, Polska\""
    },
    "api": {
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
      "attribute": "api",
      "reflect": false,
      "defaultValue": "\"\""
    }
  }; }
  static get states() { return {
    "description": {},
    "address": {},
    "code": {},
    "valid": {}
  }; }
  static get methods() { return {
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
    },
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
    }
  }; }
  static get elementRef() { return "root"; }
}
