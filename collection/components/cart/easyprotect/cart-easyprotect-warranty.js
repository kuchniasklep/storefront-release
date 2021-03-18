import { Component, h, Prop, Element, Event } from '@stencil/core';
import { store } from '../cart-store';
export class CartEasyprotectWarranty {
  componentWillLoad() {
    if (!this.active)
      this.active = Object.keys(store.get("easyprotect")[this.productId])[0];
  }
  componentWillUpdate() {
    this.root.querySelector("select").value = this.active;
  }
  render() {
    const name = store.get("products")[this.productId].name;
    const options = store.get("easyprotect")[this.productId];
    const entries = Object.entries(options);
    return [
      h("div", { class: "name" }, name),
      h("div", { class: "control" },
        h("div", { class: "info" },
          h("div", { class: "select" },
            h("ks-input-select", { onChange: () => this.change() }, entries.map(([months, _]) => h("option", { value: months, selected: this.active == months }, this.months(parseInt(months))))),
            h("ks-icon", { name: "chevron-down" })),
          h("div", { class: "price" },
            options[this.active],
            " z\u0142")),
        this.insured ?
          h("button", { class: "close", onClick: () => this.remove() },
            h("ks-icon", { name: "x" }))
          : null),
    ];
  }
  change() {
    this.active = this.root.querySelector("select").value;
    store.set("insured", Object.assign(Object.assign({}, store.get("insured")), { [this.productId]: this.active }));
    if (this.insured)
      this.easyprotectWarrantyChanged.emit({ [this.productId]: this.active });
  }
  remove() {
    this.easyprotectWarrantyRemoved.emit(this.productId);
  }
  months(x) {
    const digit = parseInt(`${x}`[`${x}`.length - 1]);
    let month = "miesięcy";
    if (x == 0)
      month = "miesiąc";
    else if (x >= 5 && x <= 21)
      month = "miesięcy";
    else if (x > 21 && digit >= 2 && digit <= 4)
      month = "miesiące";
    return `${x} ${month}`;
  }
  static get is() { return "ks-cart-easyprotect-warranty"; }
  static get originalStyleUrls() { return {
    "$": ["cart-easyprotect-warranty.css"]
  }; }
  static get styleUrls() { return {
    "$": ["cart-easyprotect-warranty.css"]
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
    "insured": {
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
      "attribute": "insured",
      "reflect": true
    },
    "active": {
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
      "attribute": "active",
      "reflect": true
    }
  }; }
  static get events() { return [{
      "method": "easyprotectWarrantyChanged",
      "name": "easyprotectWarrantyChanged",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "easyprotectInsured",
        "resolved": "{ [index: string]: string; }",
        "references": {
          "easyprotectInsured": {
            "location": "import",
            "path": "../cart-data"
          }
        }
      }
    }, {
      "method": "easyprotectWarrantyRemoved",
      "name": "easyprotectWarrantyRemoved",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
  static get elementRef() { return "root"; }
}
