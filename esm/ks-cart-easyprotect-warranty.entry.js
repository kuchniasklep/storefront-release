import { r as registerInstance, c as createEvent, h, g as getElement } from './index-2d9093e5.js';
import './index-324bcb5b.js';
import { s as store } from './cart-store-348ec227.js';

const cartEasyprotectWarrantyCss = "ks-cart-easyprotect-warranty{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;background-color:#f2f2f2;margin-bottom:10px}ks-cart-easyprotect-warranty .name{position:relative;margin:8px 15px;max-height:50px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;font-family:var(--font-emphasis)}ks-cart-easyprotect-warranty .name:after{content:\"\";position:absolute;top:30px;right:0;width:30%;height:20px;background:-webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), color-stop(90%, rgb(242, 242, 242)));background:linear-gradient(to right, rgba(255, 255, 255, 0), rgb(242, 242, 242) 90%)}ks-cart-easyprotect-warranty .control{display:-webkit-box;display:-ms-flexbox;display:flex}ks-cart-easyprotect-warranty .info{min-width:135px;font-family:var(--font-emphasis);font-weight:700;background-color:var(--easyprotect-color)}ks-cart-easyprotect-warranty .price{height:40px;min-width:80px;line-height:40px;text-align:center;background-color:#64419c !important;color:#ffffff}ks-cart-easyprotect-warranty .select{position:relative}ks-cart-easyprotect-warranty .select ks-icon{position:absolute;top:8px;right:5px;color:white}ks-cart-easyprotect-warranty ks-input-select div{margin-bottom:0 !important;margin-right:3px}ks-cart-easyprotect-warranty ks-input-select select{background-image:none !important;border:none !important;padding-right:30px !important;margin:0 !important;background-color:transparent !important;color:white !important}ks-cart-easyprotect-warranty .close{-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;min-width:40px;border-style:none;outline-style:none;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;background-color:var(--easyprotect-color);color:#ffffff;border-left:#64419c 1px solid}ks-cart-easyprotect-warranty .close ks-icon{line-height:unset !important}ks-cart-easyprotect-warranty .close:hover{background-color:var(--easyprotect-color-hover)}ks-cart-easyprotect-warranty .close:active{background-color:var(--easyprotect-color-active)}@media (min-width: 860px){ks-cart-easyprotect-warranty[insured] .info{display:-webkit-box;display:-ms-flexbox;display:flex;min-width:200px}}@media (max-width: 420px){ks-cart-easyprotect-warranty{display:inline-block}ks-cart-easyprotect-warranty .info{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%}ks-cart-easyprotect-warranty .select{width:100%}ks-cart-easyprotect-warranty .name{margin:12px 15px}ks-cart-easyprotect-warranty .price{width:50%}}";

const CartEasyprotectWarranty = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.easyprotectWarrantyChanged = createEvent(this, "easyprotectWarrantyChanged", 7);
    this.easyprotectWarrantyRemoved = createEvent(this, "easyprotectWarrantyRemoved", 7);
  }
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
      h("div", { class: "control" }, h("div", { class: "info" }, h("div", { class: "select" }, h("ks-input-select", { onChange: () => this.change() }, entries.map(([months, _]) => h("option", { value: months, selected: this.active == months }, this.months(parseInt(months))))), h("ks-icon", { name: "chevron-down" })), h("div", { class: "price" }, options[this.active], " z\u0142")), this.insured ?
        h("button", { class: "close", onClick: () => this.remove() }, h("ks-icon", { name: "x" }))
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
  get root() { return getElement(this); }
};
CartEasyprotectWarranty.style = cartEasyprotectWarrantyCss;

export { CartEasyprotectWarranty as ks_cart_easyprotect_warranty };
