import { Component, h, Element, State } from '@stencil/core';
import { store, easyprotectChange } from '../cart-store';
export class CartEasyprotectDialog {
  constructor() {
    this.active = [];
    this.step = 0;
  }
  componentWillLoad() {
    const update = () => {
      this.updateEligible();
    };
    update();
    store.onChange("easyprotect", update);
    store.onChange("insured", update);
  }
  componentDidLoad() {
    this.overlay = this.root.querySelector("ks-overlay");
  }
  updateEligible() {
    const insured = Object.keys(store.get("insured"));
    const available = Object.keys(store.get("easyprotect"));
    this.eligible = available
      .filter(id => !insured.includes(id) && store.get('products')[id] !== undefined)
      .map(id => store.get('products')[id]);
  }
  updateStep() {
    if (this.eligible.length == 1) {
      this.active = [this.eligible[0].id];
      this.step = 2;
    }
  }
  render() {
    const enabled = this.eligible.length > 0;
    const products = this.eligible.length > 1 && this.step < 1 ? "" : "hidden";
    const productsHide = this.step == 1 ? "hide" : "";
    const warranty = this.eligible.length == 1 || this.step >= 2 ? "" : "hidden";
    const warrantyHide = this.step == 1 ? "hide" : "";
    return [
      h("ks-button", { tall: true, name: "Dodaj gwarancj\u0119", onClick: () => this.show(), class: enabled ? null : "hidden" }),
      h("ks-overlay", null,
        h("div", { class: `content ${products} ${productsHide}` }, this.products()),
        h("div", { class: `content ${warranty} ${warrantyHide}` }, this.warranty()))
    ];
  }
  products() {
    return h("div", { class: "products" },
      h("slot", { name: "products" }),
      h("div", { class: "items" }, this.eligible.map(item => h("ks-cart-easyprotect-product", { image: item.img, name: item.name, warranty: item.warranty, onClick: () => this.toggle(item.id), active: this.active.includes(item.id) }))),
      h("ks-button", { tall: true, name: "Przejd\u017A dalej", onClick: () => this.addProducts(), disabled: this.active.length <= 0 }),
      h("div", { class: "close", onClick: () => this.hide() },
        h("ks-icon", { name: "x", size: 1.2 })));
  }
  warranty() {
    const chosen = Object.keys(store.get("easyprotect"))
      .filter(id => this.active.includes(id));
    return [
      h("div", { class: "warranty" },
        h("slot", { name: "warranty" }),
        h("div", { class: "items" }, chosen.map(id => h("ks-cart-easyprotect-warranty", { "product-id": id }))),
        h("ks-button", { tall: true, name: "Dodaj gwarancj\u0119", onClick: () => this.addWarranty(), disabled: this.active.length <= 0 }),
        h("div", { class: "close", onClick: () => this.hide() },
          h("ks-icon", { name: "x", size: 1.2 })),
        this.eligible.length > 1 ?
          h("div", { class: "back", onClick: () => this.back() },
            h("ks-icon", { name: "chevron-left", size: 1.2 }))
          : null),
      this.step == 3 ?
        h("div", { class: "loading" },
          h("ks-loader", { large: true, dark: true }))
        : null
    ];
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
    this.updateStep();
    this.overlay.show();
  }
  hide() {
    this.overlay.hide();
    setTimeout(() => {
      this.step = 0;
    }, 300);
  }
  addProducts() {
    this.step = 1;
    setTimeout(() => {
      this.step = 2;
    }, 200);
  }
  back() {
    this.step = 1;
    setTimeout(() => {
      this.step = 0;
    }, 200);
  }
  async addWarranty() {
    this.step = 3;
    this.overlay.close = false;
    let warranties = {};
    const items = this.root.querySelectorAll(".warranty .items ks-cart-easyprotect-warranty");
    items.forEach(item => {
      warranties[item.getAttribute("product-id")] = item.getAttribute("active");
    });
    let fetchcomplete = false;
    let timeoutcomplete = false;
    setTimeout(() => {
      timeoutcomplete = true;
      if (fetchcomplete)
        this.end();
    }, 500);
    easyprotectChange(warranties).then(() => {
      fetchcomplete = true;
      if (timeoutcomplete)
        this.end();
    });
  }
  end() {
    this.overlay.hide();
    setTimeout(() => {
      this.overlay.close = true;
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
  static get elementRef() { return "root"; }
}
