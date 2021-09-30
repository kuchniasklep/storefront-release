'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d2dd4d1b.js');
const store = require('./store-6d62b819.js');
require('./index-08350893.js');

const TrackerPageView = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.eventId = "";
  }
  componentWillLoad() {
    store.eachTracker(item => item === null || item === void 0 ? void 0 : item.pageview(this.eventId));
  }
};

exports.ks_tracker_pageview = TrackerPageView;
