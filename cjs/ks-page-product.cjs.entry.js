'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-0dd0274e.js');
const common = require('./common-5efb1936.js');
const product = require('./product-f27c8db5.js');
const commonDynamic = require('./commonDynamic-a356749f.js');
require('./index-afac6374.js');

const productCss = "ks-page-product>h3{text-align:center;margin-top:15px}ks-page-product>ks-product-container{margin-bottom:15px}";

const PageProduct = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentWillLoad() {
    const commonDataElement = document.getElementById(this.commonData);
    const productDataElement = document.getElementById(this.productData);
    const commonData = JSON.parse(commonDataElement.innerHTML);
    const productData = JSON.parse(productDataElement.innerHTML);
    Object.keys(commonData).map(key => {
      common.common.set(key, commonData[key]);
    });
    Object.keys(productData).map(key => {
      product.product.set(key, productData[key]);
    });
    {
      const commonDynamicDataElement = document.getElementById(this.commonDynamicData);
      const commonDynamicData = JSON.parse(commonDynamicDataElement.innerHTML);
      Object.keys(commonDynamicData).map(key => {
        commonDynamic.commonDynamic.set(key, commonDynamicData[key]);
      });
    }
  }
  render() {
    const infoBanner = product.product.get("infoBanner");
    const points = product.product.get("points");
    const installments = product.product.get('installments');
    const tags = product.product.get('tags');
    const variants = product.product.get('variants');
    const tabs = product.product.get('tabs');
    const youtube = product.product.get('youtube');
    const comments = product.product.get('comments');
    const similar = product.product.get('similar');
    const accessories = product.product.get('accessories');
    const model = product.product.get('model') || product.product.get('catalog');
    const ean = product.product.get('ean');
    return index.h(index.Host, null, index.h("ks-page-header", null), infoBanner ?
      index.h("ks-info-banner", { image: infoBanner.image, width: infoBanner.width, height: infoBanner.height, color: infoBanner.color, name: infoBanner.name })
      : null, index.h("ks-container", null, index.h("ks-product-notify", null), index.h("ks-product-info", null, index.h("ks-product-title", { "brand-link": true, slot: "top" }), index.h("ks-product-images", { slot: "left" }), index.h("ks-product-price", null), index.h("ks-product-traits", null), index.h("ks-product-purchase", null), index.h("ks-product-shipping", null), product.product.get('warranty') ?
      index.h("ks-product-attribute", { style: { marginTop: "15px" }, icon: "tool", href: product.product.get('warrantyLink') }, product.product.get('warranty'))
      : null, points ?
      index.h("ks-product-tooltip", { message: points.message }, index.h("ks-product-attribute", { icon: "gift" }, points.shortMessage))
      : null, model || ean ?
      index.h("ks-product-attribute", { style: { marginTop: "15px" }, icon: "file", faded: true }, index.h("span", { style: { marginRight: "15px" } }, model ? index.h("span", { style: { marginRight: "7px" } }, "Model: ", model, " ") : null, ean ? index.h("span", null, "EAN: ", ean) : null))
      : null, index.h("div", { class: "buttons" }, index.h("ks-product-negotiate", null, index.h("ks-product-button", null, product.product.get('negotiate').heading)), (installments.payuId && installments.payuKey) || installments.caParameters ?
      index.h("ks-product-installments", { name: installments.button }, installments.payuId && installments.payuKey ?
        index.h("ks-product-calculator-payu", { price: product.product.get("currentPrice"), "pos-id": installments.payuId, "api-key": installments.payuKey }, index.h("ks-product-button", { icon: installments.payuIcon }))
        : null, installments.caParameters ?
        index.h("ks-product-calculator-ca", { price: product.product.get("currentPrice"), parameters: installments.caParameters }, index.h("ks-product-button", { icon: installments.caIcon }))
        : null)
      : null), index.h("ks-product-brand", { slot: "brand" }))), tags || variants ?
      index.h("ks-container", { padding: true }, tags ?
        index.h("ks-product-tags", null, tags.map(tag => index.h("a", { href: tag.link }, tag.name)))
        : null, variants ?
        index.h("ks-product-variants", null, variants.map(variant => index.h("ks-product-variant", { link: variant.link, image: variant.image, active: variant.active, unavailable: variant.unavailable })))
        : null)
      : null, tabs ?
      index.h("ks-container", null, index.h("ks-product-tabs", { names: tabs.map(tab => tab.name).join(", ") }, tabs.map((tab, index$1) => index.h("ks-product-tab", { name: tab.name, open: index$1 == 0, main: index$1 == 0, innerHTML: tab.content }))))
      : null, youtube || comments ?
      index.h("ks-container", null, youtube.map(id => index.h("ks-product-youtube", { "video-id": id })), comments ?
        index.h("ks-product-comments", { link: comments.addLink, message: comments.addMessage }, comments.entries.map((comment, index$1) => index.h("ks-comment", { author: comment.author, when: comment.when, innerHTML: comment.content, slot: index$1 > (comments.hideAfter - 1) ? "hidden" : null })))
        : null)
      : null, similar ? [
      index.h("h3", null, product.product.get('similarHeading')),
      index.h("ks-product-container", null, similar.map(card => index.h("ks-product-card", { "product-id": 0, name: card.name, img: card.image, "current-price": card.currentPrice, "previous-price": card.previousPrice })))
    ]
      : null, accessories ? [
      index.h("h3", null, product.product.get('accessoriesHeading')),
      index.h("ks-product-container", null, accessories.map(card => index.h("ks-product-card", { "product-id": 0, name: card.name, img: card.image, "current-price": card.currentPrice, "previous-price": card.previousPrice })))
    ]
      : null, index.h("ks-page-footer", null));
  }
};
PageProduct.style = productCss;

exports.ks_page_product = PageProduct;
