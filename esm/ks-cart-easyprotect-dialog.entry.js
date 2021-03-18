import { r as registerInstance, c as createEvent, h, g as getElement } from './index-2d9093e5.js';
import './index-324bcb5b.js';
import { s as store } from './cart-store-348ec227.js';

const cartEasyprotectDialogCss = "ks-cart-easyprotect-dialog{display:block}ks-cart-easyprotect-dialog .content{background-color:var(--card-background);-webkit-box-shadow:var(--big-shadow);box-shadow:var(--big-shadow);color:var(--card-text-color);position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:720px;width:100%}ks-cart-easyprotect-dialog .content h2{font-size:24px;font-weight:700;text-align:center;margin-top:30px}ks-cart-easyprotect-dialog .content p{text-align:center;margin:10px 10px 20px 10px}ks-cart-easyprotect-dialog .content>.products .items{padding:10px 20px;max-height:320px;overflow-y:auto}ks-cart-easyprotect-dialog .content>.warranty .items{padding:0 20px 0 20px;max-height:270px;overflow-y:auto}ks-cart-easyprotect-dialog .content.hidden{display:none}ks-cart-easyprotect-dialog .content.hide{opacity:0;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-cart-easyprotect-dialog ks-button{z-index:20;position:relative;margin-top:20px;-webkit-box-shadow:0 2px 20px rgba(255, 255, 255, 0.3);box-shadow:0 2px 20px rgba(255, 255, 255, 0.3);border-top:#8057c1 1px solid}ks-cart-easyprotect-dialog ks-button[disabled]{border-top:#bebebe 1px solid}ks-cart-easyprotect-dialog ks-button button{background-color:var(--easyprotect-color);border-color:var(--easyprotect-color)}ks-cart-easyprotect-dialog ks-button button:hover{background-color:var(--easyprotect-color-hover) !important;border-color:var(--easyprotect-color-hover) !important}ks-cart-easyprotect-dialog ks-button button:active{background-color:var(--easyprotect-color-active) !important;border-color:var(--easyprotect-color-active) !important}ks-cart-easyprotect-dialog ks-button[disabled] button{background-color:#e2e2e2 !important;border-color:#e2e2e2 !important;color:#3d3d3d !important;cursor:auto}ks-cart-easyprotect-dialog ks-overlay .content{-webkit-animation:0.4s vertical-swipe-out 1;animation:0.4s vertical-swipe-out 1}ks-cart-easyprotect-dialog ks-overlay.active .content{-webkit-animation:0.4s vertical-swipe-in 1;animation:0.4s vertical-swipe-in 1}@media (max-width: 720px){ks-cart-easyprotect-dialog .content{height:100%}ks-cart-easyprotect-dialog .content>.products,ks-cart-easyprotect-dialog .content>.warranty{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;max-height:100%;padding:0}ks-cart-easyprotect-dialog .content>.products>.items,ks-cart-easyprotect-dialog .content>.warranty>.items{padding:0 10px 0 10px;max-height:none}ks-cart-easyprotect-dialog ks-button{margin-top:auto}ks-cart-easyprotect-dialog .content p{margin:5px 10px 15px 10px}}@media (max-width: 420px){ks-cart-easyprotect-dialog .content h2{font-size:22px;margin:20px 10px 10px 10px}ks-cart-easyprotect-dialog .content p{font-size:15px}}";

const CartEasyprotectDialog = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.easyprotectWarrantyChanged = createEvent(this, "easyprotectWarrantyChanged", 7);
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
      h("ks-overlay", null, h("div", { class: `content ${products} ${productsHide}` }, this.products()), h("div", { class: `content ${warranty}` }, this.warranty()))
    ];
  }
  products() {
    return h("div", { class: "products" }, h("slot", { name: "products" }), h("div", { class: "items" }, this.eligible.map(item => h("ks-cart-easyprotect-product", { image: item.img, name: item.name, onClick: () => this.toggle(item.id), active: this.active.includes(item.id) }))), h("ks-button", { tall: true, name: "Przejd\u017A dalej", onClick: () => this.addProducts(), disabled: this.active.length <= 0 }));
  }
  warranty() {
    const chosen = Object.keys(store.get("easyprotect"))
      .filter(id => this.active.includes(id));
    return h("div", { class: "warranty" }, h("slot", { name: "warranty" }), h("div", { class: "items" }, chosen.map(id => h("ks-cart-easyprotect-warranty", { "product-id": id }))), h("ks-button", { tall: true, name: "Dodaj gwarancj\u0119", onClick: () => this.addWarranty(), disabled: this.active.length <= 0 }));
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
  get root() { return getElement(this); }
};
CartEasyprotectDialog.style = cartEasyprotectDialogCss;

export { CartEasyprotectDialog as ks_cart_easyprotect_dialog };
