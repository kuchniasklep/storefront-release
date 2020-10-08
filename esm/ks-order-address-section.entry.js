import { r as registerInstance, h, g as getElement } from './index-22b73bd9.js';

const OrderAddressSection = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.hideOnMobile = false;
    this.mobile = false;
  }
  resizeHandler() {
    this.mobile = window.innerWidth < 959 ? true : false;
  }
  componentDidLoad() {
    this.root.style.display = "block";
    this.resizeHandler();
  }
  render() {
    const heading = h("span", { class: "uk-text-bold ks-text-decorated", style: { fontSize: "22px", textTransform: "uppercase" } }, this.heading);
    if (this.mobile && this.hideOnMobile)
      return (h("ul", { "uk-accordion": true }, h("li", null, h("a", { class: "uk-accordion-title", href: "#" }, heading), h("div", { class: "uk-accordion-content" }, h("slot", null), h("ks-order-button", { mobile: true, wide: true, href: this.link }, h("span", null, "Edytuj dane"))))));
    return [
      h("ks-order-heading", { heading: this.heading, link: this.link }),
      h("slot", null)
    ];
  }
  get root() { return getElement(this); }
};

export { OrderAddressSection as ks_order_address_section };
