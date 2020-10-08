import { r as registerInstance, h, g as getElement } from './index-22b73bd9.js';

const productCommentsCss = "ks-product-comments{display:block}";

const ProductTab = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.link = "";
    this.message = "";
    this.hiddenComments = false;
  }
  render() {
    return (h("ks-card", null, h("div", { class: "uk-flex uk-flex-middle uk-padding uk-margin-remove" }, h("span", { "uk-icon": "icon: comments; ratio: 2.5;", style: { marginRight: "30px", minWidth: "40px" } }), h("p", null, this.message)), h("hr", { class: "uk-margin-remove" }), h("slot", null), h("div", { class: "ks-comments", hidden: true }, h("slot", { name: "hidden" })), this.hiddenComments ?
      h("button", { class: "uk-button uk-button-secondary uk-width-expand", "uk-toggle": "target: .ks-comments" }, h("span", { class: "ks-comments", "uk-icon": "icon: chevron-down; ratio: 1.5;" }), h("span", { class: "ks-comments", "uk-icon": "icon: chevron-up; ratio: 1.5;", hidden: true }))
      : null, this.link ?
      h("a", { class: "uk-button uk-button-danger uk-width-expand", style: { padding: "5px 0 6px 0" }, href: this.link, rel: "nofollow", "aria-label": "Napisz recenzj\u0119" }, h("span", { "uk-icon": "icon: plus-circle; ratio: 1.5;" }))
      : null));
  }
  componentDidLoad() {
    const hiddenSlot = this.root.querySelector("div[slot='hidden']");
    if (hiddenSlot != null && hiddenSlot.children.length != 0)
      this.hiddenComments = true;
  }
  get root() { return getElement(this); }
};
ProductTab.style = productCommentsCss;

export { ProductTab as ks_product_comments };
