import { r as registerInstance, h, g as getElement } from './index-74ff0cef.js';

const productTabsCss = "ks-product-tabs{display:block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0;background:var(--card-background);color:var(--card-text-color);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}ks-product-tabs nav{background-color:#f6f6f6;border-bottom:1px solid #e8e8e8}@media only screen and (max-width: 960px){ks-product-tabs nav{display:none}}ks-product-tabs button{position:relative;padding:20px 40px;margin:0;font-family:inherit;font-size:18px;color:#252525;background-color:#f6f6f6;-webkit-transition:background-color 0.3s ease, color 0.3s ease;transition:background-color 0.3s ease, color 0.3s ease;border:none;outline:none;border-right:1px solid #e8e8e8}ks-product-tabs button.active{color:#252525 !important;background-color:#FFFFFF}ks-product-tabs button:hover{color:#808080}ks-product-tabs>.content{padding:30px}@media only screen and (max-width: 520px){ks-product-tabs>.content{padding:30px 20px}}";

const ProductTabs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.names = "";
    this.active = 0;
  }
  render() {
    return [
      h("nav", null, " ", this.names.split(", ").map((value, index) => h("button", { class: index == this.active ? "active" : "", onClick: () => this.click(index) }, value)), " "),
      h("div", { class: "content" }, h("slot", null))
    ];
  }
  click(index) {
    this.active = index;
    Array.from(this.root.querySelector(".content").children).forEach((element, i) => {
      const target = element;
      target.main = i == index;
      target.open = i == index;
    });
  }
  get root() { return getElement(this); }
};
ProductTabs.style = productTabsCss;

export { ProductTabs as ks_product_tabs };
