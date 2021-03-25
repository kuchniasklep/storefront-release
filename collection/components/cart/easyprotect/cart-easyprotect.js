import { Component, h, Prop, Element, Host, State } from '@stencil/core';
import { store } from '../cart-store';
export class CartEasyprotect {
  componentWillLoad() {
    const update = () => {
      this.insured = Object.entries(store.get("insured"));
      this.enabled = Object.keys(store.get("easyprotect")).length > 0;
    };
    store.onChange("insured", update);
    store.onChange("easyprotect", update);
    update();
  }
  render() {
    return h(Host, { class: !this.enabled ? "hidden" : "" },
      h("div", { class: "top" },
        h("div", { class: "content" },
          h("slot", null)),
        h("ks-img2", { src: this.image, width: this.width, height: this.height })),
      h("div", { class: "insured" }, this.insured.map(([id, months]) => h("ks-cart-easyprotect-warranty", { insured: true, "product-id": id, active: months }))),
      h("slot", { name: "bottom" }));
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
  static get states() { return {
    "insured": {},
    "enabled": {}
  }; }
  static get elementRef() { return "root"; }
}
