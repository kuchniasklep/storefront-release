import { r as registerInstance, h, g as getElement } from './index-4f41a852.js';

const productTagsCss = "ks-product-tags{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}ks-product-tags div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap}ks-product-tags a{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:5px 15px;margin:2px;border-radius:20px;font-size:14px;font-family:var(--font-emphsis);text-align:center;background-color:#252525;color:white}ks-product-tags ks-button{display:none;margin-top:8px}@media (max-width: 1200px){ks-product-tags a{width:calc(33.33% - 8px);margin:4px}ks-product-tags:not([expanded]) a:nth-child(n+7){display:none}ks-product-tags[expandable='3'] ks-button{display:initial}}@media (max-width: 800px){ks-product-tags a{width:calc(50% - 8px);margin:4px}ks-product-tags:not([expanded]) a:nth-child(n+5){display:none}ks-product-tags[expandable='2'] ks-button,ks-product-tags[expandable='3'] ks-button{display:initial}}@media (max-width: 460px){ks-product-tags a{width:100%}ks-product-tags:not([expanded]) a:nth-child(n+4){display:none}ks-product-tags[expandable] ks-button{display:initial}}";

const ProductTags = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.expanded = false;
  }
  componentDidLoad() {
    const count = this.root.querySelectorAll('a').length;
    if (count > 6)
      this.expandable = 3;
    else if (count > 4)
      this.expandable = 2;
    else if (count > 3)
      this.expandable = 1;
  }
  render() {
    return [
      h("div", null, h("slot", null)),
      h("ks-button", { transparent: true, narrower: true, round: true, icon: this.expanded ? "minus" : "plus", onClick: () => this.expanded = !this.expanded })
    ];
  }
  get root() { return getElement(this); }
};
ProductTags.style = productTagsCss;

export { ProductTags as ks_product_tags };
