import { r as registerInstance, c as createEvent, h, g as getElement } from './index-74ff0cef.js';
import './index-b4f14e2e.js';
import { s as store } from './product-store-44debc87.js';

const productTraitsCss = "ks-product-traits{display:block;font-family:var(--font-regular);font-size:16px;line-height:16px;margin-left:-2px}ks-product-traits:not(:empty){margin-top:20px;margin-bottom:10px}ks-product-traits .trait{display:-webkit-box;display:-ms-flexbox;display:flex;overflow:hidden;border-radius:15px}ks-product-traits .select{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}ks-product-traits label{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:15px 20px 15px 18px;background-color:var(--color-secondary);color:var(--text-color-dark)}ks-product-traits select{-webkit-box-flex:1;-ms-flex:1;flex:1;padding:0px 20px;border-radius:15px 0px 0px 15px;outline-style:none;background-color:#f3f3f3;border:solid 1px #cacaca;font-family:var(--font-regular);font-size:16px;line-height:16px;-moz-appearance:none;-webkit-appearance:none;appearance:none;-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-product-traits select::-ms-expand{display:none}ks-product-traits ks-icon{position:absolute;top:12px;right:10px}ks-product-traits .select:hover{background-color:#e2e2e2}ks-product-traits .select:active{background-color:#d3d3d3}ks-product-traits select option{background-color:white !important}@media only screen and (max-width: 1200px){ks-product-traits,ks-product-traits select{font-size:14px;line-height:14px}}";

const ProductCount = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.traitChange = createEvent(this, "traitChange", 7);
  }
  traitChangeHandler() {
    const selects = this.root.querySelectorAll(".trait select");
    const data = store.get("traits").map((trait, index) => {
      const select = selects[index];
      return [trait, trait.items[select.selectedIndex]];
    });
    this.traitChange.emit(data);
  }
  componentDidRender() {
    if (store.get("traits").length > 0)
      this.traitChangeHandler();
  }
  render() {
    return store.get("traits").map((trait) => h("div", { class: "trait" }, h("div", { class: "select" }, h("select", { onChange: () => this.traitChangeHandler() }, trait.items.map(item => h("option", { value: item.id }, item.name))), h("ks-icon", { name: "chevron-down" })), h("label", null, trait.name)));
  }
  get root() { return getElement(this); }
};
ProductCount.style = productTraitsCss;

export { ProductCount as ks_product_traits };
