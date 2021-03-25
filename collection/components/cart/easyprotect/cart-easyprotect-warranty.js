import { Component, h, Prop, Element } from '@stencil/core';
import { store, easyprotectChange, easyprotectRemove } from '../cart-store';
export class CartEasyprotectWarranty {
  componentWillLoad() {
    if (this.productId) {
      if (!this.active)
        this.active = Object.keys(store.get("easyprotect")[this.productId])[0];
      this.update();
      store.onChange("easyprotect", () => this.update());
    }
  }
  componentWillUpdate() {
    if (this.productId) {
      this.root.querySelector("select").value = this.active;
      this.update();
    }
  }
  update() {
    if (store.get("easyprotect")[this.productId] === undefined)
      return;
    this.name = store.get("products")[this.productId].name;
    this.options = store.get("easyprotect")[this.productId];
    this.entries = Object.entries(this.options);
    this.price = this.options[this.active];
  }
  render() {
    return [
      h("div", { class: "name", innerHTML: this.name.replace("<br>", " "), title: this.name.replace("<br>", " ").replace(/(<([^>]+)>)/gi, "") }),
      h("div", { class: "control" },
        h("div", { class: "info" },
          h("div", { class: "select" }, this.productId ? [
            h("ks-input-select", { onChange: () => this.change() }, this.entries.map(([months, _]) => h("option", { value: months, selected: this.active == months }, this.months(parseInt(months))))),
            h("ks-icon", { name: "chevron-down" })
          ] :
            this.months(this.time)),
          h("div", { class: "price" },
            this.price,
            " z\u0142")),
        this.productId && this.insured ?
          h("button", { class: "close", onClick: () => this.remove() },
            h("ks-icon", { name: "x" }))
          : null),
    ];
  }
  change() {
    this.active = this.root.querySelector("select").value;
    if (this.insured)
      easyprotectChange({ [this.productId]: this.active });
  }
  remove() {
    easyprotectRemove(this.productId);
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
    },
    "name": {
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
      "attribute": "name",
      "reflect": false
    },
    "time": {
      "type": "number",
      "mutable": true,
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
      "attribute": "time",
      "reflect": false
    },
    "price": {
      "type": "number",
      "mutable": true,
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
      "reflect": false
    }
  }; }
  static get elementRef() { return "root"; }
}
