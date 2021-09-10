import { Component, h, Prop, State, Element, Method } from '@stencil/core';
import { OpenSuggestions } from "../functions";
import { eachTracker } from '../tracking/store';
export class ButtonCart {
  constructor() {
    this.count = "1";
    this.traits = "";
    this.expand = false;
    this.padding = false;
    this.icon = false;
    this.product = false;
    this.loading = false;
  }
  ClickHandler(count) {
    if (!this.disabled && !this.loading) {
      this.cart(count || this.count);
    }
  }
  async fetch(url, body) {
    const headers = new Headers();
    headers.append('pragma', 'no-cache');
    headers.append('cache-control', 'no-cache');
    return fetch(url, {
      method: 'POST',
      body: body,
      headers: headers,
      credentials: "same-origin"
    })
      .then(response => {
      if (!response.ok)
        throw { name: response.status, message: response.statusText };
      return response;
    });
  }
  async cart(count) {
    this.loading = true;
    const errorpopup = document.querySelector('ks-error-popup');
    const messagepopup = document.querySelector('ks-message-popup');
    const navbar = document.querySelector('ks-navbar');
    let body = new FormData();
    body.append("id", this.productId);
    body.append("ilosc", count);
    body.append("nazwa", this.name);
    body.append("value", this.price.toString());
    body.append("cechy", this.traits);
    body.append("akcja", 'dodaj');
    body.append("miejsce", '1');
    // Replace link string with state during prerendering rework
    await this.fetch("api/cart/product_add.php?tok=" + ksCartToken, body)
      .then(async (data) => data.json())
      .then(async (body) => {
      if (!body.status) {
        if (body.productLink)
          messagepopup.show("Wymagany wybór cechy", body.message, "Przejdź do produktu", this.url);
        else
          messagepopup.show("Błąd dodawania produktu", body.message);
        return;
      }
      navbar.IncrementCart(count);
      OpenSuggestions(this.productId, this.name);
      eachTracker(item => item === null || item === void 0 ? void 0 : item.addToCart("test", this.productId, this.name, this.price, 1, "PLN"));
    })
      .catch(error => {
      errorpopup.show(error);
    });
    this.loading = false;
  }
  ;
  async AddToCart(count) {
    this.ClickHandler(count);
  }
  async SetCount(count) {
    this.count = count;
  }
  render() {
    return h("button", { "aria-label": "Do koszyka", disabled: this.disabled, onClick: () => this.ClickHandler() }, this.loading ?
      h("ks-loader", { large: true })
      : this.icon ?
        h("ks-icon", { name: "shopping-bag", size: 0.9 }) :
        h("span", null, "DO KOSZYKA"));
  }
  static get is() { return "ks-button-cart"; }
  static get originalStyleUrls() { return {
    "$": ["button-cart.css"]
  }; }
  static get styleUrls() { return {
    "$": ["button-cart.css"]
  }; }
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
    "url": {
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
      "attribute": "url",
      "reflect": true
    },
    "price": {
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
      "attribute": "price",
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
      "reflect": true,
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
      "reflect": true,
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
      "reflect": true
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
