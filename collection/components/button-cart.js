import { Component, h, Prop, State, Element, Method } from '@stencil/core';
import { AddToCart } from './functions';
export class ButtonCart {
  constructor() {
    this.count = "1";
    this.traits = "";
    this.expand = false;
    this.padding = false;
    this.icon = false;
    this.disabled = false;
    this.product = false;
    this.loading = false;
  }
  componentDidLoad() {
    this.root.style.display = "block";
    if (this.expand)
      this.root.style.flex = "1";
  }
  ClickHandler(count) {
    const productCount = count || this.count;
    if (!this.disabled && !this.loading) {
      this.loading = true;
      AddToCart(this.productId, productCount, this.traits, this.product ? "0" : "1", this.name, (s) => this.ResultHandler(s));
    }
  }
  ResultHandler(state) {
    this.loading = true;
    if (state) {
      const navbar = document.querySelector("ks-navbar");
      navbar.IncrementCart(this.count);
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }
    else
      this.loading = false;
  }
  async AddToCart(count) {
    this.ClickHandler(count);
  }
  async SetCount(count) {
    this.count = count;
  }
  render() {
    const padding = { padding: "5px" };
    return (h("button", { class: "uk-button uk-button-danger uk-position-relative uk-width-expand " + (this.padding ? "uk-padding-small@s" : ""), style: this.padding ? padding : null, disabled: this.disabled, "aria-label": "Do koszyka", onClick: () => this.ClickHandler() }, this.loading ?
      h("div", { "uk-spinner": "ratio: 0.6" }) :
      this.icon ?
        h("span", { "uk-icon": "icon: cart" }) :
        h("span", null, "DO KOSZYKA")));
  }
  static get is() { return "ks-button-cart"; }
  static get properties() { return {
    "productId": {
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
      "attribute": "product-id",
      "reflect": true
    },
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
      "reflect": true
    },
    "count": {
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
      "attribute": "count",
      "reflect": true,
      "defaultValue": "\"1\""
    },
    "traits": {
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
      "attribute": "traits",
      "reflect": true,
      "defaultValue": "\"\""
    },
    "expand": {
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
      "attribute": "expand",
      "reflect": false,
      "defaultValue": "false"
    },
    "padding": {
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
      "attribute": "padding",
      "reflect": false,
      "defaultValue": "false"
    },
    "icon": {
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
      "attribute": "icon",
      "reflect": false,
      "defaultValue": "false"
    },
    "disabled": {
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
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "product": {
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
      "attribute": "product",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "loading": {}
  }; }
  static get methods() { return {
    "AddToCart": {
      "complexType": {
        "signature": "(count?: string) => Promise<void>",
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
    },
    "SetCount": {
      "complexType": {
        "signature": "(count?: string) => Promise<void>",
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
