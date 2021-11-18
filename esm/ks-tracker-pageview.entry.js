import { r as registerInstance } from './index-7a533c43.js';
import { e as eachTracker } from './tracker-aaf72a89.js';
import './index-07d7bd8b.js';

let TrackerPageView = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.eventId = "";
  }
  componentWillLoad() {
    eachTracker(item => item === null || item === void 0 ? void 0 : item.pageview(this.eventId));
  }
};

export { TrackerPageView as ks_tracker_pageview };
