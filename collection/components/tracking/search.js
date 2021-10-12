import { Component, Prop } from '@stencil/core';
import { eachTracker } from '../../global/data/tracker';
export class TrackerProduct {
  constructor() {
    this.eventId = "";
  }
  componentWillLoad() {
    eachTracker(item => item === null || item === void 0 ? void 0 : item.search(this.eventId, this.query));
  }
  static get is() { return "ks-tracker-search"; }
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
    },
    "query": {
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
      "attribute": "query",
      "reflect": false
    }
  }; }
}
