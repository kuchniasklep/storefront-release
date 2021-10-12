import { createStore } from "@stencil/store";
export let resolve;
export const tracker = createStore({
  loaded: loadtracker(),
  resolved: new Promise(r => resolve = r),
  trackers: []
});
export function eachTracker(callable) {
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
