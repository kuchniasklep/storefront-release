import { Component } from '@stencil/core';
import { eachTracker } from './store';
export class TrackerPageView {
  componentWillLoad() {
    eachTracker(item => item === null || item === void 0 ? void 0 : item.pageview());
  }
  static get is() { return "ks-tracker-pageview"; }
}
