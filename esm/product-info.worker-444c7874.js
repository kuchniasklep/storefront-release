import './index-44e0e252.js';
import './functions-33a63d52.js';
import './index-8a68e442.js';
import './product-store-589d2609.js';
import { c as createWorker } from './ks-product-info-70f98e64.js';

const workerName = 'product-info.worker';
const workerMsgId = 'stencil.product-info.worker';
const workerPath = /*@__PURE__*/new URL('product-info.worker-1299ba3a.js', import.meta.url).href;
const blob = new Blob(['importScripts("' + workerPath + '")'], { type: 'text/javascript' });
const url = URL.createObjectURL(blob);
const worker = /*@__PURE__*/createWorker(url, workerName, workerMsgId);
URL.revokeObjectURL(url);

export { worker, workerMsgId, workerName, workerPath };
