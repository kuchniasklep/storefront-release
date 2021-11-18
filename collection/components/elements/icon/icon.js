import { Component, h, Prop, Element, Host } from '@stencil/core';
import feather from 'feather-icons';
export class Icon {
  constructor() {
    this.name = "alert-octagon";
    this.size = 1;
  }
  componentWillLoad() {
    this.componentWillUpdate();
  }
  componentWillUpdate() {
    const icon = feather.icons[this.name];
    this.svg = icon.contents;
    this.attrs = icon.attrs;
    this.root.style.lineHeight = `${this.attrs.width * this.size}px`;
  }
  render() {
    if (!this.attrs)
      return;
    let stroke = "";
    if (this.size >= 1.3 && this.size < 2)
      stroke = "medium";
    else if (this.size >= 2)
      stroke = "thin";
    const width = this.attrs.width * this.size;
    const height = this.attrs.height * this.size;
    var svg = document.createElement('svg');
    svg.setAttribute("xmlns", this.attrs.xmlns);
    svg.setAttribute("width", `${width}`);
    svg.setAttribute("height", `${height}`);
    svg.setAttribute("viewBox", `0 0 ${this.attrs.width} ${this.attrs.height}`);
    svg.setAttribute("class", stroke);
    svg.innerHTML = this.svg;
    return h(Host, { innerHTML: svg.outerHTML });
  }
  static get is() { return "ks-icon"; }
  static get originalStyleUrls() { return {
    "$": ["icon.css"]
  }; }
  static get styleUrls() { return {
    "$": ["icon.css"]
  }; }
  static get properties() { return {
    "name": {
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
      "attribute": "name",
      "reflect": true,
      "defaultValue": "\"alert-octagon\""
    },
    "size": {
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
      "attribute": "size",
      "reflect": false,
      "defaultValue": "1"
    }
  }; }
  static get elementRef() { return "root"; }
}
