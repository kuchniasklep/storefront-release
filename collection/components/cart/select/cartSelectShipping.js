import { Component, h, Listen, Element, Prop, State, Method, Event } from '@stencil/core';
import { store } from '../cart-store';
export class CartSelectShipping {
  constructor() {
    this.name = "";
    this.valid = false;
    this.error = false;
    this.active = -1;
    this.toggled = false;
    this.loading = false;
  }
  async StartLoading() {
    this.loading = true;
  }
  async ResetLoading() {
    this.loading = false;
  }
  async Validate() {
    if (!this.valid) {
      this.error = true;
      return false;
    }
    this.error = false;
    return true;
  }
  OutsideClickHandler(event) {
    const target = event.target;
    if (this.toggled && !target.closest(`.ks-cart-select[name="${this.name}"]`))
      this.toggled = false;
  }
  componentDidLoad() {
    this.root.classList.add("ks-cart-select");
  }
  ActivateItem(id) {
    if (id != store.get("activeShipping"))
      this.shippingChange.emit(id);
    this.toggled = false;
    this.active = id;
    this.valid = true;
    this.error = false;
  }
  render() {
    if (this.valid)
      this.active = store.get("activeShipping");
    if (this.loading)
      return (h("div", { class: "center" },
        h("nav", { "uk-spinner": true })));
    const activeItem = store.get("shipping").find((value) => {
      return value.id == this.active;
    });
    return [
      h("div", { class: "select animation", onClick: () => { if (!this.loading)
          this.toggled = !this.toggled; } },
        h("div", { class: "selectSlot" }, this.active == -1 ?
          h("ks-cart-select-item", { name: "Wybierz metod\u0119 wysy\u0142ki" }) :
          h("ks-cart-select-item", { logo: activeItem.logo, name: activeItem.name, price: activeItem.price })),
        h("div", { class: "selectIcon" },
          h("span", { "uk-icon": "icon: triangle-down; ratio: 1.3" }))),
      h("div", { class: "items", hidden: !this.toggled }, store.get("shipping").map((item) => h("ks-cart-select-item", { key: item.id, logo: item.logo, name: item.name, price: item.price, color: item.color, onClick: () => this.ActivateItem(item.id) })))
    ];
  }
  static get is() { return "ks-cart-select-shipping"; }
  static get originalStyleUrls() { return {
    "$": ["cartSelect.css"]
  }; }
  static get styleUrls() { return {
    "$": ["cartSelect.css"]
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
      "reflect": true,
      "defaultValue": "\"\""
    },
    "valid": {
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
      "attribute": "valid",
      "reflect": true,
      "defaultValue": "false"
    },
    "error": {
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
      "attribute": "error",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "active": {},
    "toggled": {},
    "loading": {}
  }; }
  static get events() { return [{
      "method": "shippingChange",
      "name": "shippingChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "StartLoading": {
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
    "ResetLoading": {
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
    "Validate": {
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
  static get listeners() { return [{
      "name": "click",
      "method": "OutsideClickHandler",
      "target": "document",
      "capture": false,
      "passive": false
    }]; }
}
