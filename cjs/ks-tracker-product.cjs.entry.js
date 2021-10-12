'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-0dd0274e.js');
const tracker = require('./tracker-dc1bc991.js');
require('./index-afac6374.js');

const TrackerProduct = class {
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
