import { Component, h, Element, Prop, Listen } from '@stencil/core';
import noUiSlider from 'nouislider';
export class FilterSlider {
  constructor() {
    this.snap = false;
    this.step = 0;
    this.steps = "";
    this.handleActive = false;
  }
  swipeLeftHandler(event) {
    event.stopPropagation();
  }
  clickHandler(event) {
    event.stopPropagation();
  }
  componentDidLoad() {
    const slider = this.root.firstElementChild;
    const steps = this.steps.split(", ").map(value => parseInt(value));
    const range = this.range(this.values.split(", ").map(value => parseFloat(value)), steps);
    const step = steps[0] ? steps[0] : this.step;
    const asint = this.step || this.steps;
    noUiSlider.create(slider, {
      start: [range["min"], range["max"]],
      snap: this.snap,
      step: step,
      tooltips: true,
      connect: true,
      range: range,
      format: {
        to: function (value) {
          return asint ? Math.round(value) : value;
        },
        from: function (value) {
          return asint ? Math.round(value) : value;
        }
      }
    });
    const sliderInstance = slider;
    sliderInstance.noUiSlider.on("set", () => {
      const range = sliderInstance.noUiSlider.get();
      this.from = parseFloat(range[0]);
      this.to = parseFloat(range[1]);
    });
    sliderInstance.noUiSlider.set([this.from, this.to]);
  }
  range(values, steps) {
    return values.reduce((o, value, index) => {
      const step = steps[index] ? [steps[index]] : [];
      if (index == 0)
        o["min"] = [value];
      else if (index == values.length - 1)
        o["max"] = [value];
      else
        o[(index / (values.length - 1)) * 100 + "%"] = [value, ...step];
      return o;
    }, {});
  }
  render() {
    const disabled = !this.from || !this.to;
    return [
      h("div", null),
      h("input", { type: "hidden", name: this.name, value: this.from + "," + this.to, disabled: disabled })
    ];
  }
  static get is() { return "ks-filter-slider"; }
  static get originalStyleUrls() { return {
    "$": ["filter-slider.css"]
  }; }
  static get styleUrls() { return {
    "$": ["filter-slider.css"]
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
    "values": {
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
      "attribute": "values",
      "reflect": false
    },
    "snap": {
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
      "attribute": "snap",
      "reflect": false,
      "defaultValue": "false"
    },
    "step": {
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
      "attribute": "step",
      "reflect": false,
      "defaultValue": "0"
    },
    "steps": {
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
      "attribute": "steps",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "from": {
      "type": "number",
      "mutable": true,
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
      "attribute": "from",
      "reflect": false
    },
    "to": {
      "type": "number",
      "mutable": true,
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
      "attribute": "to",
      "reflect": false
    }
  }; }
  static get elementRef() { return "root"; }
  static get listeners() { return [{
      "name": "swipeLeft",
      "method": "swipeLeftHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "click",
      "method": "clickHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
