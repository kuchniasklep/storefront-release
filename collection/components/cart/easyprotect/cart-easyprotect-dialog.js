import { Component, h, Element, State, Event } from '@stencil/core';
import { store } from '../cart-store';
export class CartEasyprotectDialog {
  constructor() {
    this.active = [];
    this.step = 0;
  }
  componentWillLoad() {
    this.updateEligible();
    store.onChange("easyprotect", () => this.updateEligible());
    store.onChange("insured", () => this.updateEligible());
  }
  updateEligible() {
    const insured = Object.keys(store.get("insured"));
    const available = Object.keys(store.get("easyprotect"));
    this.eligible = available
      .filter(x => !insured.includes(x))
      .map(id => store.get('products')[id]);
    if (this.eligible.length == 1) {
      this.active = [this.eligible[0].id];
      this.step = 2;
    }
  }
  render() {
    if (this.eligible.length <= 0)
      return;
    const products = this.eligible.length > 1 && this.step <= 1 ? "" : "hidden";
    const productsHide = this.step == 1 ? "hide" : "";
    const warranty = this.eligible.length == 1 || this.step == 2 ? "" : "hidden";
    return [
      h("ks-button", { tall: true, name: "Dodaj gwarancj\u0119", onClick: () => this.show() }),
      h("ks-overlay", null,
        h("div", { class: `content ${products} ${productsHide}` }, this.products()),
        h("div", { class: `content ${warranty}` }, this.warranty()))
    ];
  }
  products() {
    return h("div", { class: "products" },
      h("slot", { name: "products" }),
      h("div", { class: "items" }, this.eligible.map(item => h("ks-cart-easyprotect-product", { image: item.img, name: item.name, onClick: () => this.toggle(item.id), active: this.active.includes(item.id) }))),
      h("ks-button", { tall: true, name: "Przejd\u017A dalej", onClick: () => this.addProducts(), disabled: this.active.length <= 0 }));
  }
  warranty() {
    const chosen = Object.keys(store.get("easyprotect"))
      .filter(id => this.active.includes(id));
    return h("div", { class: "warranty" },
      h("slot", { name: "warranty" }),
      h("div", { class: "items" }, chosen.map(id => h("ks-cart-easyprotect-warranty", { "product-id": id }))),
      h("ks-button", { tall: true, name: "Dodaj gwarancj\u0119", onClick: () => this.addWarranty(), disabled: this.active.length <= 0 }));
  }
  toggle(id) {
    const index = this.active.findIndex(x => x == id);
    if (index !== -1)
      this.active.splice(index, 1);
    else
      this.active.push(id);
    this.active = [...this.active];
  }
  show() {
    this.updateEligible();
    const dialog = this.root.querySelector("ks-overlay");
    dialog.show();
  }
  addProducts() {
    this.step = 1;
    setTimeout(() => {
      this.step = 2;
    }, 300);
  }
  addWarranty() {
    const dialog = this.root.querySelector("ks-overlay");
    dialog.hide();
    let warranties = {};
    const items = this.root.querySelectorAll(".warranty .items ks-cart-easyprotect-warranty");
    items.forEach(item => {
      warranties[item.getAttribute("product-id")] = item.getAttribute("active");
    });
    this.easyprotectWarrantyChanged.emit(warranties);
    setTimeout(() => {
      this.step = 0;
      this.active = [];
    }, 300);
  }
  static get is() { return "ks-cart-easyprotect-dialog"; }
  static get originalStyleUrls() { return {
    "$": ["cart-easyprotect-dialog.css"]
  }; }
  static get styleUrls() { return {
    "$": ["cart-easyprotect-dialog.css"]
  }; }
  static get states() { return {
    "eligible": {},
    "active": {},
    "step": {}
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
    }]; }
  static get elementRef() { return "root"; }
}
