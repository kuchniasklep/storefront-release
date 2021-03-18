import { Component, h, Prop, Element, Listen } from '@stencil/core';
import { store } from '../cart-store';
import { jsonfetch, formfetch } from '../../fetch';
export class CartEasyprotect {
  warrantyAdded(event) {
    store.set("loading", store.get("loading") + 1);
    jsonfetch(this.changeApi, event.detail)
      .then(response => response.json())
      .then(json => {
      store.set("loading", store.get("loading") - 1);
      store.set("insured", json.insured);
      console.log(store.get("insured"));
    })
      .catch(_ => store.set("loading", store.get("loading") - 1));
  }
  warrantyRemoved(event) {
    store.set("loading", store.get("loading") + 1);
    formfetch(this.removeApi, {
      "id": event.detail
    })
      .then(response => response.json())
      .then(json => {
      store.set("loading", store.get("loading") - 1);
      store.set("insured", json.insured);
      console.log(store.get("insured"));
    })
      .catch(_ => store.set("loading", store.get("loading") - 1));
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
    },
    "changeApi": {
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
      "attribute": "change-api",
      "reflect": false
    },
    "removeApi": {
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
      "attribute": "remove-api",
      "reflect": false
    }
  }; }
  static get elementRef() { return "root"; }
  static get listeners() { return [{
      "name": "easyprotectWarrantyChanged",
      "method": "warrantyAdded",
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
