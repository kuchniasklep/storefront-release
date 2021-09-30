import { r as registerInstance } from './index-5edb5049.js';
import { e as eachTracker } from './store-a33839ba.js';
import './index-4223a160.js';

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
