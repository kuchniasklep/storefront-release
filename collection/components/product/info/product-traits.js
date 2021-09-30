import { Component, h, Element, Event } from '@stencil/core';
import { product } from "../../../global/data/product";
export class ProductCount {
  traitChangeHandler() {
    const selects = this.root.querySelectorAll(".trait select");
    const data = product.get("traits").map((trait, index) => {
      const select = selects[index];
      return [trait, trait.items[select.selectedIndex]];
    });
    this.traitChange.emit(data);
  }
  componentDidRender() {
    if (product.get("traits").length > 0)
      this.traitChangeHandler();
  }
  render() {
    return product.get("traits").map((trait) => h("div", { class: "trait" },
      h("label", null,
        trait.name,
        ":"),
      h("div", { class: "select" },
        h("select", { onChange: () => this.traitChangeHandler() }, trait.items.map(item => h("option", { value: item.id }, item.name))),
        h("ks-icon", { name: "chevron-down" }))));
  }
  static get is() { return "ks-product-traits"; }
  static get originalStyleUrls() { return {
    "$": ["product-traits.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-traits.css"]
  }; }
  static get events() { return [{
      "method": "traitChange",
      "name": "traitChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "[TraitData, TraitDataItem][]",
        "resolved": "[TraitData, TraitDataItem][]",
        "references": {
          "TraitData": {
            "location": "import",
            "path": "../../../global/data/product"
          },
          "TraitDataItem": {
            "location": "import",
            "path": "../../../global/data/product"
          }
        }
      }
    }]; }
  static get elementRef() { return "root"; }
}
