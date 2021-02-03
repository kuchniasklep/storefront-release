'use strict';

require('./index-7c91bddc.js');
require('./functions-80797821.js');
const ksComment_ksProductAttribute_ksProductButton_ksProductCalculatorCa_ksProductCalculatorPayu_ksProductComments_ksProductCount_ksProductImages_ksProductInfo_ksProductInfoPoints_ksProductNegotiate_ksProductPoints_ksProductPrice_ksProductShipping_ksProductSuggestions_ksProductTab_ksProductTabs_ksProductTitle_ksProductTraits_ksProductVariant_ksProductVariants_ksProductYoutube_entry = require('./ks-comment.ks-product-attribute.ks-product-button.ks-product-calculator-ca.ks-product-calculator-payu.ks-product-comments.ks-product-count.ks-product-images.ks-product-info.ks-product-info-points.ks-product-negotiate.ks-product-points.ks-product-price.ks-product-shipping.ks-product-suggestions.ks-product-tab.ks-product-tabs.ks-product-title.ks-product-traits.ks-product-variant.ks-product-variants.ks-product-youtube-be4e5462.js');
require('./validate-ba4942bb.js');
require('./thumbs-f1578b12.js');

const workerName = 'product-info.worker';
const workerMsgId = 'stencil.product-info.worker';
const workerPath = /*@__PURE__*/(typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __dirname + '/product-info.worker-1299ba3a.js').href : new URL('product-info.worker-1299ba3a.js', document.currentScript && document.currentScript.src || document.baseURI).href);
const blob = new Blob(['importScripts("' + workerPath + '")'], { type: 'text/javascript' });
const url = URL.createObjectURL(blob);
const worker = /*@__PURE__*/ksComment_ksProductAttribute_ksProductButton_ksProductCalculatorCa_ksProductCalculatorPayu_ksProductComments_ksProductCount_ksProductImages_ksProductInfo_ksProductInfoPoints_ksProductNegotiate_ksProductPoints_ksProductPrice_ksProductShipping_ksProductSuggestions_ksProductTab_ksProductTabs_ksProductTitle_ksProductTraits_ksProductVariant_ksProductVariants_ksProductYoutube_entry.createWorker(url, workerName, workerMsgId);
URL.revokeObjectURL(url);

exports.worker = worker;
exports.workerMsgId = workerMsgId;
exports.workerName = workerName;
exports.workerPath = workerPath;
