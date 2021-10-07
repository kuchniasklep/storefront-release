'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-0dd0274e.js');
const store = require('./store-2513a9ba.js');
require('./index-afac6374.js');

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
