import { r as registerInstance } from './index-a14dfead.js';
import { e as eachTracker } from './tracker-dce0f039.js';
import './index-c53317e0.js';

const TrackerPageView = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.eventId = "";
  }
  componentWillLoad() {
    eachTracker(item => item === null || item === void 0 ? void 0 : item.pageview(this.eventId));
  }
};

export { TrackerPageView as ks_tracker_pageview };
