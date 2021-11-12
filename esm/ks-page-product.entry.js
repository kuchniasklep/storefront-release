import { r as registerInstance, h, H as Host } from './index-a14dfead.js';
import { c as common } from './common-cf003c43.js';
import { p as product } from './product-22d38c43.js';
import { c as commonDynamic } from './commonDynamic-4e28152d.js';
import './index-c53317e0.js';

const productCss = "ks-page-product>h3{text-align:center;margin-top:15px}ks-page-product>ks-product-container{margin-bottom:15px}";

const PageProduct = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    const commonDataElement = document.getElementById(this.commonData);
    const productDataElement = document.getElementById(this.productData);
    const commonData = JSON.parse(commonDataElement.innerHTML);
    const productData = JSON.parse(productDataElement.innerHTML);
    Object.keys(commonData).map(key => {
      common.set(key, commonData[key]);
    });
    Object.keys(productData).map(key => {
      product.set(key, productData[key]);
    });
    {
      const commonDynamicDataElement = document.getElementById(this.commonDynamicData);
      const commonDynamicData = JSON.parse(commonDynamicDataElement.innerHTML);
      Object.keys(commonDynamicData).map(key => {
        commonDynamic.set(key, commonDynamicData[key]);
      });
    }
  }
  render() {
    const infoBanner = product.get("infoBanner");
    const points = product.get("points");
    const installments = product.get('installments');
    const tags = product.get('tags');
    const variants = product.get('variants');
    const tabs = product.get('tabs');
    const youtube = product.get('youtube');
    const comments = product.get('comments');
    const similar = product.get('similar');
    const accessories = product.get('accessories');
    const model = product.get('model') || product.get('catalog');
    const ean = product.get('ean');
    return h(Host, null, h("ks-page-header", null), infoBanner ?
      h("ks-info-banner", { image: infoBanner.image, width: infoBanner.width, height: infoBanner.height, color: infoBanner.color, name: infoBanner.name })
      : null, h("ks-container", null, h("ks-product-notify", null), h("ks-product-info", null, h("ks-product-title", { "brand-link": true, slot: "top" }), h("ks-product-images", { slot: "left" }), h("ks-product-price", null), h("ks-product-traits", null), h("ks-product-purchase", null), h("ks-product-shipping", null), product.get('warranty') ?
      h("ks-product-attribute", { style: { marginTop: "15px" }, icon: "tool", href: product.get('warrantyLink') }, product.get('warranty'))
      : null, points ?
      h("ks-product-tooltip", { message: points.message }, h("ks-product-attribute", { icon: "gift" }, points.shortMessage))
      : null, model || ean ?
      h("ks-product-attribute", { style: { marginTop: "15px" }, icon: "file", faded: true }, h("span", { style: { marginRight: "15px" } }, model ? h("span", { style: { marginRight: "7px" } }, "Model: ", model, " ") : null, ean ? h("span", null, "EAN: ", ean) : null))
      : null, h("div", { class: "buttons" }, h("ks-product-negotiate", null, h("ks-product-button", null, product.get('negotiate').heading)), (installments.payuId && installments.payuKey) || installments.caParameters ?
      h("ks-product-installments", { name: installments.button }, installments.payuId && installments.payuKey ?
        h("ks-product-calculator-payu", { price: product.get("currentPrice"), "pos-id": installments.payuId, "api-key": installments.payuKey }, h("ks-product-button", { icon: installments.payuIcon }))
        : null, installments.caParameters ?
        h("ks-product-calculator-ca", { price: product.get("currentPrice"), parameters: installments.caParameters }, h("ks-product-button", { icon: installments.caIcon }))
        : null)
      : null), h("ks-product-brand", { slot: "brand" }))), (tags === null || tags === void 0 ? void 0 : tags.length) > 0 || (variants === null || variants === void 0 ? void 0 : variants.length) > 0 ?
      h("ks-container", { padding: true }, (tags === null || tags === void 0 ? void 0 : tags.length) > 0 && !((variants === null || variants === void 0 ? void 0 : variants.length) > 0) ?
        h("ks-product-tags", null, tags.map(tag => h("a", { href: tag.link }, tag.name)))
        : null, (variants === null || variants === void 0 ? void 0 : variants.length) > 0 ?
        h("ks-product-variants", null, variants.map(variant => h("ks-product-variant", { link: variant.link, image: variant.image, active: variant.active, unavailable: variant.unavailable })))
        : null)
      : null, (tabs === null || tabs === void 0 ? void 0 : tabs.length) > 0 ?
      h("ks-container", null, h("ks-product-tabs", { names: tabs.map(tab => tab.name).join(", ") }, tabs.map((tab, index) => h("ks-product-tab", { name: tab.name, open: index == 0, main: index == 0, content: tab.content }))))
      : null, (tags === null || tags === void 0 ? void 0 : tags.length) > 0 && (variants === null || variants === void 0 ? void 0 : variants.length) > 0 ?
      h("ks-container", { padding: true }, h("ks-product-tags", null, tags.map(tag => h("a", { href: tag.link }, tag.name))))
      : null, youtube || comments ?
      h("ks-container", null, youtube.map(id => h("ks-product-youtube", { "video-id": id })), comments ? h("ks-product-comments", null) : null)
      : null, (similar === null || similar === void 0 ? void 0 : similar.length) > 0 ? [
      h("h3", null, product.get('similarHeading')),
      h("ks-product-container", null, similar.map(card => h("ks-product-card", { "product-id": 0, name: card.name, img: card.image, "current-price": card.currentPrice, "previous-price": card.previousPrice })))
    ]
      : null, (accessories === null || accessories === void 0 ? void 0 : accessories.length) > 0 ? [
      h("h3", null, product.get('accessoriesHeading')),
      h("ks-product-container", null, accessories.map(card => h("ks-product-card", { "product-id": 0, name: card.name, img: card.image, "current-price": card.currentPrice, "previous-price": card.previousPrice })))
    ]
      : null, h("ks-page-footer", null));
  }
};
PageProduct.style = productCss;

export { PageProduct as ks_page_product };
