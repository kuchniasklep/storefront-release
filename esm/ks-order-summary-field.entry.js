import { r as registerInstance, h, g as getElement } from './index-74ff0cef.js';

const OrderSummaryField = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dark = false;
    this.large = false;
    this.single = false;
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  render() {
    const bgColor = this.dark ? "#252525" : "#f2f2f2";
    const color = this.dark ? "white" : "inherit";
    const font = this.large ? "20px" : "inherit";
    if (this.single)
      return (h("div", { class: "uk-padding-small " + (this.large ? "ks-text-decorated" : ""), style: { backgroundColor: bgColor, color: color, fontSize: font } }, h("slot", null)));
    return (h("div", { class: "uk-padding-small uk-flex uk-flex-wrap uk-child-width-1-1 uk-child-width-auto@m uk-flex-between " + (this.large ? "ks-text-decorated" : ""), style: { backgroundColor: bgColor, color: color, fontSize: font } }, h("div", { class: "uk-text-center uk-text-left@m", style: { minWidth: "150px" } }, h("slot", { name: "left" })), h("div", { class: "uk-text-center uk-text-right@m" }, h("slot", { name: "right" }))));
  }
  get root() { return getElement(this); }
};

export { OrderSummaryField as ks_order_summary_field };
