import { r as registerInstance, h, g as getElement } from './index-22b73bd9.js';
import { T as Tunnel } from './cartData-871fd2cb.js';

const cartSelectCss = ".ks-cart-select{display:block;position:relative;height:50px}.ks-cart-select .animation{-webkit-animation:start 1.0s ease;animation:start 1.0s ease}@-webkit-keyframes start{from{opacity:0}to{opacity:1}}@keyframes start{from{opacity:0}to{opacity:1}}.ks-cart-select>.center{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:50px}.ks-cart-select .select{display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#f8f8f8;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;outline:1px solid #d2d2d2;outline-offset:-1px}.ks-cart-select .select:hover{background-color:#f2f2f2}.ks-cart-select[error] .select{background-color:#ffc5c5;color:#ff0000;outline-color:#ff0000}.ks-cart-select[error] .select:hover{background-color:#ff8a8a}.ks-cart-select .selectSlot{-webkit-box-flex:1;-ms-flex:1;flex:1}.ks-cart-select .selectIcon{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:10;width:50px;height:50px;background-color:#252525;color:white;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}.ks-cart-select .select:hover .selectIcon{background-color:#353535}.ks-cart-select .items{position:absolute;top:50px;left:0;width:100%;z-index:20;background-color:#f8f8f8;-webkit-box-shadow:0px 3px 20px -5px rgba(0, 0, 0, 0.349);box-shadow:0px 3px 20px -5px rgba(0, 0, 0, 0.349)}.ks-cart-select .items .ks-cart-select-item:hover{background-color:#f0f0f0}@media only screen and (max-width: 420px){.ks-cart-select .select .ks-cart-select-item .price{display:none}}";

const CartSelectShipping = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.name = "";
    this.valid = false;
    this.error = false;
    this.active = -1;
    this.toggled = false;
    this.loading = false;
  }
  async StartLoading() {
    this.loading = true;
  }
  async ResetLoading() {
    this.loading = false;
  }
  async Validate() {
    if (!this.valid) {
      this.error = true;
      return false;
    }
    this.error = false;
    return true;
  }
  OutsideClickHandler(event) {
    const target = event.target;
    if (this.toggled && !target.closest(`.ks-cart-select[name="${this.name}"]`))
      this.toggled = false;
  }
  componentDidLoad() {
    this.root.classList.add("ks-cart-select");
  }
  ActiveItemWatcher() {
    if (this.valid)
      this.active = this.activeShipping;
  }
  ActivateItem(id) {
    if (id != this.activeShipping)
      this.ShippingChange(id);
    this.toggled = false;
    this.active = id;
    this.valid = true;
    this.error = false;
  }
  render() {
    if (this.loading)
      return (h("div", { class: "center" }, h("nav", { "uk-spinner": true })));
    const activeItem = this.shipping.find((value) => {
      return value.id == this.active;
    });
    return [
      h("div", { class: "select animation", onClick: () => {
          if (!this.loading)
            this.toggled = !this.toggled;
        } }, h("div", { class: "selectSlot" }, this.active == -1 ?
        h("ks-cart-select-item", { name: "Wybierz metod\u0119 wysy\u0142ki" }) :
        h("ks-cart-select-item", { logo: activeItem.logo, name: activeItem.name, price: activeItem.price })), h("div", { class: "selectIcon" }, h("span", { "uk-icon": "icon: triangle-down; ratio: 1.3" }))),
      h("div", { class: "items", hidden: !this.toggled }, this.shipping.map((item) => h("ks-cart-select-item", { key: item.id, logo: item.logo, name: item.name, price: item.price, color: item.color, onClick: () => this.ActivateItem(item.id) })))
    ];
  }
  get root() { return getElement(this); }
  static get watchers() { return {
    "activeShipping": ["ActiveItemWatcher"]
  }; }
};
Tunnel.injectProps(CartSelectShipping, ['shipping', 'ShippingChange', 'activeShipping']);
CartSelectShipping.style = cartSelectCss;

export { CartSelectShipping as ks_cart_select_shipping };
