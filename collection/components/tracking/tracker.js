import { Component, Prop } from '@stencil/core';
import { tracker, resolve } from './store';
import { TikTokTracker } from './trackers/tiktok';
import { FacebookTracker } from './trackers/facebook';
export class Tracker {
  componentWillLoad() {
    tracker.get("loaded").then(() => {
      if (this.tiktok)
        this.appendTracker(new TikTokTracker());
      if (this.facebook)
        this.appendTracker(new FacebookTracker(this.facebook));
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
    },
    "facebook": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "facebook",
      "reflect": false
    }
  }; }
}
