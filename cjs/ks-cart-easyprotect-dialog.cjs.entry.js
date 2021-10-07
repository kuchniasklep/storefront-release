'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-0dd0274e.js');
const cartStore = require('./cart-store-fdf984af.js');
require('./index-afac6374.js');

const cartEasyprotectDialogCss = "ks-cart-easyprotect-dialog{display:block}ks-cart-easyprotect-dialog .hidden{display:none}ks-cart-easyprotect-dialog .content{background-color:var(--card-background);-webkit-box-shadow:var(--big-shadow);box-shadow:var(--big-shadow);color:var(--card-text-color);position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:720px;width:100%}ks-cart-easyprotect-dialog .content h2{font-size:24px;font-weight:700;text-align:center;margin-top:30px}ks-cart-easyprotect-dialog .content p{text-align:center;margin:10px 10px 20px 10px}ks-cart-easyprotect-dialog .content>.products .items{padding:10px 20px;max-height:320px;overflow-y:auto}ks-cart-easyprotect-dialog .content>.warranty .items{padding:0 20px 0 20px;max-height:270px;overflow-y:auto}ks-cart-easyprotect-dialog .content.hidden{display:none}ks-cart-easyprotect-dialog .content.hide{opacity:0;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-cart-easyprotect-dialog ks-button{z-index:20;position:relative;margin-top:20px;-webkit-box-shadow:0 2px 20px rgba(255, 255, 255, 0.3);box-shadow:0 2px 20px rgba(255, 255, 255, 0.3);border-top:#8057c1 1px solid}ks-cart-easyprotect-dialog ks-button[disabled]{border-top:#bebebe 1px solid}ks-cart-easyprotect-dialog ks-button button{background-color:var(--easyprotect-color);border-color:var(--easyprotect-color)}ks-cart-easyprotect-dialog ks-button button:hover{background-color:var(--easyprotect-color-hover) !important;border-color:var(--easyprotect-color-hover) !important}ks-cart-easyprotect-dialog ks-button button:active{background-color:var(--easyprotect-color-active) !important;border-color:var(--easyprotect-color-active) !important}ks-cart-easyprotect-dialog ks-button[disabled] button{background-color:#e2e2e2 !important;border-color:#e2e2e2 !important;color:#3d3d3d !important;cursor:auto}ks-cart-easyprotect-dialog ks-overlay .content{-webkit-animation:0.4s vertical-swipe-out 1;animation:0.4s vertical-swipe-out 1}ks-cart-easyprotect-dialog ks-overlay.active .content{-webkit-animation:0.4s vertical-swipe-in 1;animation:0.4s vertical-swipe-in 1}@media (max-width: 720px){ks-cart-easyprotect-dialog .content{height:100%}ks-cart-easyprotect-dialog .content>.products,ks-cart-easyprotect-dialog .content>.warranty{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;max-height:100%;padding:0}ks-cart-easyprotect-dialog .content>.products>.items,ks-cart-easyprotect-dialog .content>.warranty>.items{padding:0 10px 0 10px;max-height:none}ks-cart-easyprotect-dialog ks-button{margin-top:auto}ks-cart-easyprotect-dialog .content p{margin:5px 10px 15px 10px}}@media (max-width: 420px){ks-cart-easyprotect-dialog .content h2{font-size:20px;margin:20px 10px 10px 10px}ks-cart-easyprotect-dialog .content p{font-size:15px}}ks-cart-easyprotect-dialog .content .close,ks-cart-easyprotect-dialog .content .back{position:absolute;top:20px;z-index:20;border-radius:50px;padding:10px;-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-cart-easyprotect-dialog .content .close:hover,ks-cart-easyprotect-dialog .content .back:hover{background-color:#f2f2f2}ks-cart-easyprotect-dialog .content .close:active,ks-cart-easyprotect-dialog .content .back:active{background-color:#dbdbdb}ks-cart-easyprotect-dialog .content .close{right:20px}ks-cart-easyprotect-dialog .content .back{left:20px}@media (max-width: 420px){ks-cart-easyprotect-dialog .content .close,ks-cart-easyprotect-dialog .content .back{padding:3px;top:17px}ks-cart-easyprotect-dialog .content .close{right:8px}ks-cart-easyprotect-dialog .content .back{left:8px}}ks-cart-easyprotect-dialog .content .loading{position:absolute;top:0;bottom:0;left:0;right:0;z-index:100;background-color:white;-webkit-animation:fade-in 0.3s ease;animation:fade-in 0.3s ease}";

const CartEasyprotectDialog = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.active = [];
    this.step = 0;
  }
  componentWillLoad() {
    const update = () => {
      this.updateEligible();
    };
    update();
    cartStore.store.onChange("easyprotect", update);
    cartStore.store.onChange("insured", update);
  }
  componentDidLoad() {
    this.overlay = this.root.querySelector("ks-overlay");
  }
  updateEligible() {
    const insured = Object.keys(cartStore.store.get("insured"));
    const available = Object.keys(cartStore.store.get("easyprotect"));
    this.eligible = available
      .filter(id => !insured.includes(id) && cartStore.store.get('products')[id] !== undefined)
      .map(id => cartStore.store.get('products')[id]);
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
      index.h("ks-button", { tall: true, name: "Dodaj gwarancj\u0119", onClick: () => this.show(), class: enabled ? null : "hidden" }),
      index.h("ks-overlay", null, index.h("div", { class: `content ${products} ${productsHide}` }, this.products()), index.h("div", { class: `content ${warranty} ${warrantyHide}` }, this.warranty()))
    ];
  }
  products() {
    return index.h("div", { class: "products" }, index.h("slot", { name: "products" }), index.h("div", { class: "items" }, this.eligible.map(item => index.h("ks-cart-easyprotect-product", { image: item.img, name: item.name, warranty: item.warranty, onClick: () => this.toggle(item.id), active: this.active.includes(item.id) }))), index.h("ks-button", { tall: true, name: "Przejd\u017A dalej", onClick: () => this.addProducts(), disabled: this.active.length <= 0 }), index.h("div", { class: "close", onClick: () => this.hide() }, index.h("ks-icon", { name: "x", size: 1.2 })));
  }
  warranty() {
    const chosen = Object.keys(cartStore.store.get("easyprotect"))
      .filter(id => this.active.includes(id));
    return [
      index.h("div", { class: "warranty" }, index.h("slot", { name: "warranty" }), index.h("div", { class: "items" }, chosen.map(id => index.h("ks-cart-easyprotect-warranty", { "product-id": id }))), index.h("ks-button", { tall: true, name: "Dodaj gwarancj\u0119", onClick: () => this.addWarranty(), disabled: this.active.length <= 0 }), index.h("div", { class: "close", onClick: () => this.hide() }, index.h("ks-icon", { name: "x", size: 1.2 })), this.eligible.length > 1 ?
        index.h("div", { class: "back", onClick: () => this.back() }, index.h("ks-icon", { name: "chevron-left", size: 1.2 }))
        : null),
      this.step == 3 ?
        index.h("div", { class: "loading" }, index.h("ks-loader", { large: true, dark: true }))
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
    cartStore.easyprotectChange(warranties).then(() => {
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
  get root() { return index.getElement(this); }
};
CartEasyprotectDialog.style = cartEasyprotectDialogCss;

exports.ks_cart_easyprotect_dialog = CartEasyprotectDialog;
