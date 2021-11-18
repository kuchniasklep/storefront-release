import { c as createStore } from './index-c53317e0.js';

let resolve;
const tracker = createStore({
  loaded: loadtracker(),
  resolved: new Promise(r => resolve = r),
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

export { eachTracker as e, resolve as r, tracker as t };