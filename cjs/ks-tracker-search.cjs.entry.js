'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d2dd4d1b.js');
const store = require('./store-6d62b819.js');
require('./index-08350893.js');

const TrackerProduct = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.eventId = "";
  }
  componentWillLoad() {
    store.eachTracker(item => item === null || item === void 0 ? void 0 : item.search(this.eventId, this.query));
  }
};

exports.ks_tracker_search = TrackerProduct;
