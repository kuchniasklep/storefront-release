'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-601dda3f.js');
const tracker = require('./tracker-75afa313.js');
require('./index-6a08c494.js');

let TrackerProduct = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.eventId = "";
    this.currency = "PLN";
  }
  componentWillLoad() {
    tracker.eachTracker(item => item === null || item === void 0 ? void 0 : item.product(this.eventId, this.productId, this.name, this.price, this.currency));
  }
};

exports.ks_tracker_product = TrackerProduct;
