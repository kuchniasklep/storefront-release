import { r as registerInstance, h } from './index-22b73bd9.js';

const productContainerCss = "ks-product-container{display:block}ks-product-container>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;margin-left:-15px;margin-top:-15px}ks-product-container>div>*{padding-left:15px;margin-top:15px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width: 360px) and (max-width: 640px){ks-product-container>div>*{width:50%}}@media (min-width: 640px){ks-product-container>div>*{width:230px}}";

const Container = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("div", null, h("slot", null));
  }
};
Container.style = productContainerCss;

export { Container as ks_product_container };
