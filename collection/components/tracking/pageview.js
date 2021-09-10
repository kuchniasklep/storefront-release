import { Component, Prop } from '@stencil/core';
import { eachTracker } from './store';
export class TrackerPageView {
  constructor() {
    this.eventId = "";
  }
  componentWillLoad() {
    eachTracker(item => item === null || item === void 0 ? void 0 : item.pageview(this.eventId));
  }
  static get is() { return "ks-tracker-pageview"; }
  static get properties() { return {
    "eventId": {
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
      "attribute": "event-id",
      "reflect": false,
      "defaultValue": "\"\""
    }
  }; }
}
