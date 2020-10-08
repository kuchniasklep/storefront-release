import { r as registerInstance, h, g as getElement } from './index-22b73bd9.js';

const CartHeading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.center = false;
  }
  componentDidLoad() {
    this.root.style.display = "block";
    this.root.style.marginBottom = "20px";
    if (this.center)
      this.root.style.textAlign = "center";
  }
  render() {
    return [
      h("span", { class: "uk-text-bold ks-text-decorated", style: { fontSize: "22px", textTransform: "uppercase" } }, h("slot", null))
    ];
  }
  get root() { return getElement(this); }
};

export { CartHeading as ks_cart_heading };
