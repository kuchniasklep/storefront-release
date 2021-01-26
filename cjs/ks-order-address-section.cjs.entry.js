'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');

const OrderAddressSection = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    const heading = index.h("span", { class: "uk-text-bold ks-text-decorated", style: { fontSize: "22px", textTransform: "uppercase" } }, this.heading);
    if (this.mobile && this.hideOnMobile)
      return (index.h("ul", { "uk-accordion": true }, index.h("li", null, index.h("a", { class: "uk-accordion-title", href: "#" }, heading), index.h("div", { class: "uk-accordion-content" }, index.h("slot", null), index.h("ks-order-button", { mobile: true, wide: true, href: this.link }, index.h("span", null, "Edytuj dane"))))));
    return [
      index.h("ks-order-heading", { heading: this.heading, link: this.link }),
      index.h("slot", null)
    ];
  }
  get root() { return index.getElement(this); }
};

exports.ks_order_address_section = OrderAddressSection;
