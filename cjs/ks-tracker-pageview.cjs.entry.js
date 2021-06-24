'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7d3fd69d.js');
const store = require('./store-c010abe7.js');
require('./index-b0bdcebf.js');

const TrackerPageView = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentWillLoad() {
    store.eachTracker(item => item === null || item === void 0 ? void 0 : item.pageview());
  }
};

exports.ks_tracker_pageview = TrackerPageView;
