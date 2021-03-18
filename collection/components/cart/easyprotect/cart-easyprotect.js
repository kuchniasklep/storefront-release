import { Component, h, Prop, Element, Listen } from '@stencil/core';
import { store } from '../cart-store';
export class CartEasyprotect {
  warrantyAdded(event) {
    console.log(event.detail);
  }
  warrantyChanged(event) {
    console.log(event.detail);
  }
  warrantyRemoved(event) {
    console.log(event.detail);
  }
  render() {
    const insured = Object.entries(store.get("insured"));
    return [
      h("div", { class: "top" },
        h("div", { class: "content" },
          h("slot", null)),
        h("ks-img2", { src: this.image, width: this.width, height: this.height })),
      h("div", { class: "insured" }, insured.map(([id, months]) => h("ks-cart-easyprotect-warranty", { insured: true, "product-id": id, active: months }))),
      h("slot", { name: "bottom" })
    ];
  }
  insuredItem(id, [months, price]) {
    const name = store.get("products")[id].name;
    //const options = store.get("easyprotect")[id];
    return h("div", { class: "item" },
      h("div", { class: "name" },
        " ",
        name,
        " "),
      h("div", { class: "option" },
        " ",
        months,
        " miesi\u0119cy ",
        price,
        " z\u0142"),
      h("ks-icon", { name: "x" }));
  }
  static get is() { return "ks-cart-easyprotect"; }
  static get originalStyleUrls() { return {
    "$": ["cart-easyprotect.css"]
  }; }
  static get styleUrls() { return {
    "$": ["cart-easyprotect.css"]
  }; }
  static get properties() { return {
    "image": {
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
      "attribute": "image",
      "reflect": false
    },
    "width": {
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
      "attribute": "width",
      "reflect": false
    },
    "height": {
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
      "attribute": "height",
      "reflect": false
    }
  }; }
  static get elementRef() { return "root"; }
  static get listeners() { return [{
      "name": "easyprotectWarrantyAdded",
      "method": "warrantyAdded",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "easyprotectWarrantyChanged",
      "method": "warrantyChanged",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "easyprotectWarrantyRemoved",
      "method": "warrantyRemoved",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
