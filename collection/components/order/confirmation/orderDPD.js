import { Component, h, Prop, Element, State, Method } from '@stencil/core';
export class OrderDPD {
  constructor() {
    this.api = "";
    this.button = "";
    this.pointMessage = "";
    this.missingMessage = "";
    this.description = "";
    this.code = "";
    this.initialized = false;
    this.valid = true;
  }
  componentDidLoad() {
    this.overlay = this.root.querySelector("ks-overlay");
  }
  show(event) {
    event.preventDefault();
    this.overlay.show();
    this.initialized = true;
  }
  hide(event) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    this.overlay.hide();
  }
  async Validate() {
    this.valid = this.code != "";
  }
  async IsValid() {
    return this.valid;
  }
  async select(point) {
    this.code = point;
    this.Validate();
    this.hide(null);
    let formData = new FormData();
    formData.append("rodzaj", "wysylka_dpdpickup");
    formData.append("koszyk", "0");
    formData.append("value", point);
    formData.append("punktodbioru", point);
    var headers = new Headers();
    headers.append('pragma', 'no-cache');
    headers.append('cache-control', 'no-cache');
    fetch(this.api, {
      method: 'POST',
      headers: headers,
      body: formData,
      credentials: "same-origin"
    });
  }
  render() {
    return [
      this.code ? h("p", null,
        this.pointMessage,
        ": ",
        this.code) : null,
      this.valid === false ? h("p", { class: "missing" }, this.missingMessage) : null,
      h("ks-button", { round: true, icon: "map-pin", onClick: (e) => this.show(e), name: this.button }),
      h("input", { type: "hidden", name: "lokalizacjaRuch", value: this.code }),
      h("input", { type: "hidden", name: "ShippingDestinationCode", value: this.code }),
      h("ks-overlay", null,
        h("div", { class: "content" },
          h("div", { class: "topBar" },
            h("ks-img2", { src: "res/cart/dpd.svg", vertical: true, height: 100, width: 300 }),
            h("ks-button", { icon: "x", onClick: (e) => this.hide(e) })),
          this.initialized ? [
            h("script", { id: "dpd-widget", type: "text/javascript", innerHTML: "\n                            function pointSelected(pointID){\n                                document.querySelector('ks-order-dpd').select(pointID);\n                            }\n                        " }),
            h("script", { type: "text/javascript", src: "//pudofinder.dpd.com.pl/source/dpd_widget.js?key=a9b08eb6c1b218b975529f9cea0e1364" })
          ] : null))
    ];
  }
  static get is() { return "ks-order-dpd"; }
  static get originalStyleUrls() { return {
    "$": ["orderDPD.css"]
  }; }
  static get styleUrls() { return {
    "$": ["orderDPD.css"]
  }; }
  static get properties() { return {
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
    },
    "button": {
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
      "attribute": "button",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "pointMessage": {
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
      "attribute": "point-message",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "missingMessage": {
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
      "attribute": "missing-message",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "description": {
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
      "attribute": "description",
      "reflect": false,
      "defaultValue": "\"\""
    }
  }; }
  static get states() { return {
    "code": {},
    "initialized": {},
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
    },
    "select": {
      "complexType": {
        "signature": "(point: string) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
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
