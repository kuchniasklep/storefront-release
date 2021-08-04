import { Component, h, Prop, State, Listen } from '@stencil/core';
export class Pagination {
  constructor() {
    this.base = "";
    this.pattern = "";
    this.space = 6;
    this.edges = true;
  }
  handleResize() {
    if (window.innerWidth > 960) {
      this.space = 6;
      this.edges = true;
    }
    else {
      this.space = 4;
      this.edges = false;
    }
  }
  componentWillLoad() {
    this.handleResize();
  }
  render() {
    if (!this.count || !this.current || this.count < 2)
      return;
    let pages = new Array();
    pages.push(this.current);
    let space = this.space;
    let left = this.current;
    let right = this.current;
    while (space > 0) {
      let leftFinished = false;
      let rightFinished = false;
      if (left - 1 > 0) {
        pages.push(left - 1);
        left--;
        space--;
      }
      else
        leftFinished = true;
      if (right + 1 <= this.count) {
        pages.push(right + 1);
        right++;
        space--;
      }
      else
        rightFinished = true;
      if (leftFinished && rightFinished)
        break;
    }
    pages.sort((a, b) => a - b);
    return [
      this.current > 1 ?
        h("a", { href: this.link(this.current - 1) },
          h("ks-icon", { name: "chevron-left", size: 0.9 }))
        : null,
      pages.map(page => {
        if (page == this.current)
          return h("a", { class: "active" }, page.toString());
        if (page == pages[0] && this.edges) {
          const ret = h("a", { href: this.link(1) }, "1");
          return page == 1 ? ret : [ret, h("div", { class: "separator" })];
        }
        if (page == pages[pages.length - 1] && this.edges) {
          const ret = h("a", { href: this.link(this.count) }, this.count);
          return page == this.count ? ret : [h("div", { class: "separator" }), ret];
        }
        return h("a", { href: this.link(page) }, page.toString());
      }),
      this.current < this.count ?
        h("a", { href: this.link(this.current + 1) },
          h("ks-icon", { name: "chevron-right", size: 0.9 }))
        : null
    ];
  }
  link(index) {
    if (index == 1)
      return this.base;
    return this.base + this.pattern + index.toString();
  }
  static get is() { return "ks-pagination"; }
  static get originalStyleUrls() { return {
    "$": ["pagination.css"]
  }; }
  static get styleUrls() { return {
    "$": ["pagination.css"]
  }; }
  static get properties() { return {
    "count": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "count",
      "reflect": true
    },
    "current": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "current",
      "reflect": false
    },
    "base": {
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
      "attribute": "base",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "pattern": {
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
      "attribute": "pattern",
      "reflect": false,
      "defaultValue": "\"\""
    }
  }; }
  static get states() { return {
    "space": {},
    "edges": {}
  }; }
  static get listeners() { return [{
      "name": "resize",
      "method": "handleResize",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
