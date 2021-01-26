import { r as registerInstance, h, g as getElement } from './index-74ff0cef.js';

const OrderGuest = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  render() {
    return [
      h("div", { class: "uk-padding" }, h("div", { class: "uk-text-center", style: { maxWidth: "500px", margin: "auto" } }, h("p", { class: "ks-text-decorated uk-text-bold", style: { fontSize: "28px" } }, "ZAM\u00D3W BEZ LOGOWANIA"), h("slot", null)))
    ];
  }
  get root() { return getElement(this); }
};

export { OrderGuest as ks_order_guest };
