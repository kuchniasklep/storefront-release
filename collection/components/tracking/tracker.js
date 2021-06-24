import { Component, Prop } from '@stencil/core';
import { tracker, resolve } from './store';
import { TikTokTracker } from './trackers/tiktok';
export class Tracker {
  componentWillLoad() {
    tracker.get("loaded").then(() => {
      if (this.tiktok)
        this.appendTracker(new TikTokTracker());
      resolve();
    });
  }
  appendTracker(obj) {
    tracker.set("trackers", [...tracker.get('trackers'), obj]);
  }
  static get is() { return "ks-tracker"; }
  static get properties() { return {
    "tiktok": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "tiktok",
      "reflect": false
    }
  }; }
}
