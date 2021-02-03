'use strict';

require('./index-7c91bddc.js');
require('./functions-80797821.js');
require('./index-f00963f7.js');
require('./product-store-ab3df40f.js');
const ksProductInfo_entry = require('./ks-product-info-b63d7ff2.js');

const workerName = 'product-info.worker';
const workerMsgId = 'stencil.product-info.worker';
const workerPath = /*@__PURE__*/(typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __dirname + '/product-info.worker-1299ba3a.js').href : new URL('product-info.worker-1299ba3a.js', document.currentScript && document.currentScript.src || document.baseURI).href);
const blob = new Blob(['importScripts("' + workerPath + '")'], { type: 'text/javascript' });
const url = URL.createObjectURL(blob);
const worker = /*@__PURE__*/ksProductInfo_entry.createWorker(url, workerName, workerMsgId);
URL.revokeObjectURL(url);

exports.worker = worker;
exports.workerMsgId = workerMsgId;
exports.workerName = workerName;
exports.workerPath = workerPath;
