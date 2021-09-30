'use strict';

const index = require('./index-08350893.js');

exports.resolve = void 0;
const tracker = index.createStore({
  loaded: loadtracker(),
  resolved: new Promise(r => exports.resolve = r),
  trackers: []
});
function eachTracker(callable) {
  tracker.get("resolved").then(() => {
    tracker.get("trackers").forEach(item => {
      callable(item);
    });
  });
}
function loadtracker() {
  return new Promise(resolve => {
    window.addEventListener("load", function () {
      resolve();
    });
  });
}

exports.eachTracker = eachTracker;
exports.tracker = tracker;
