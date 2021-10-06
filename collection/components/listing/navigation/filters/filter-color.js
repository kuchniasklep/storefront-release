import { Component, h, Prop } from '@stencil/core';
import { ColorList } from './colors';
export class FilterColor {
  constructor() {
    this.active = false;
    this.size = 20;
    this.metal = [
      h("defs", null,
        h("linearGradient", { id: "Linear1", x1: "0", y1: "0", x2: "1", y2: "0", gradientUnits: "userSpaceOnUse", gradientTransform: "matrix(8,8,-8,8,13,13)" },
          h("stop", { offset: "0", style: { stopColor: "white", stopOpacity: "0.4" } }),
          h("stop", { offset: "1", style: { stopColor: "white", stopOpacity: "0" } }))),
      h("g", { transform: "matrix(1.25,0,0,1.25,-6,-36)" },
        h("g", { transform: "matrix(1,0,0,1,0,24)" },
          h("path", { d: "M21,21L5,21L21,5L21,21Z", style: { fill: "url(#Linear1)" } })))
    ];
    this.wood = [
      h("g", { transform: "matrix(0.6,0,0,0.6,-0,-0)" },
        h("circle", { cx: "28.634", cy: "28.483", r: "6.483", style: { fill: "none", stroke: "black", strokeOpacity: "0.20", strokeWidth: "3px" } }),
        h("g", { transform: "matrix(2.30024,0,0,2.30024,-37.2311,-37.0348)" },
          h("circle", { cx: "28.634", cy: "28.483", r: "6.483", style: { fill: "none", stroke: "black", strokeOpacity: "0.20", strokeWidth: "1.3px" } })),
        h("g", { transform: "matrix(3.70926,0,0,3.70926,-77.5769,-77.168)" },
          h("circle", { cx: "28.634", cy: "28.483", r: "6.483", style: { fill: "none", stroke: "black", strokeOpacity: "0.20", strokeWidth: "0.94px" } })),
        h("g", { transform: "matrix(5.16472,0,0,5.16472,-119.253,-118.624)" },
          h("circle", { cx: "28.634", cy: "28.483", r: "6.483", style: { fill: "none", stroke: "black", strokeOpacity: "0.20", strokeWidth: "0.77px" } })))
    ];
    this.multicolor = [
      h("rect", { width: this.size / 2, height: this.size / 2, style: { fill: "#fe4a49" }, transform: "translate(0 0)" }),
      h("rect", { width: this.size / 2, height: this.size / 2, style: { fill: "#2ab7ca" }, transform: "translate(" + this.size / 2 + " 0)" }),
      h("rect", { width: this.size / 2, height: this.size / 2, style: { fill: "#fed766" }, transform: "translate(0 " + this.size / 2 + ")" }),
      h("rect", { width: this.size / 2, height: this.size / 2, style: { fill: "#e6e6ea" }, transform: "translate(" + this.size / 2 + " " + this.size / 2 + ")" })
    ];
  }
  componentWillLoad() {
    let found = ColorList.filter(c => c.name.includes(this.color));
    if (found.length > 0) {
      this.hex = found[0].color;
      this.material = found[0].material;
    }
  }
  change(e) {
    this.active = e.target.checked;
  }
  render() {
    return h("label", null,
      h("svg", { width: this.size, height: this.size },
        h("rect", { width: this.size, height: this.size, style: { fill: this.hex } }),
        this.material == "metal" ? this.metal : null,
        this.material == "wood" ? this.wood : null,
        this.material == "multicolor" ? this.multicolor : null),
      h("input", { name: this.name, value: this.active ? this.value : "", type: "checkbox", checked: this.active, onChange: e => this.change(e) }),
      h("span", { class: "checkmark" }),
      this.color);
  }
  static get is() { return "ks-filter-color"; }
  static get originalStyleUrls() { return {
    "$": ["filter-color.css"]
  }; }
  static get styleUrls() { return {
    "$": ["filter-color.css"]
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
      "reflect": false
    },
    "value": {
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
      "attribute": "value",
      "reflect": false
    },
    "color": {
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
      "attribute": "color",
      "reflect": false
    },
    "active": {
      "type": "boolean",
      "mutable": true,
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
      "attribute": "active",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
