import { Component, h, Element, Prop, State, Listen } from '@stencil/core';
import noUiSlider from 'nouislider';
export class FilterSlider {
    constructor() {
        this.snap = false;
        this.step = 0;
        this.handleActive = false;
    }
    swipeLeftHandler(event) {
        event.stopPropagation();
    }
    clickHandler(event) {
        event.stopPropagation();
    }
    componentDidLoad() {
        const slider = this.el.firstElementChild;
        if (this.ids)
            this.idArray = this.ids.split(", ");
        this.valueArray = this.values.replace(",", ".").split("; ");
        const rangeMap = this.convertValuesToRangeMap(this.valueArray);
        noUiSlider.create(slider, {
            start: [rangeMap["min"], rangeMap["max"]],
            snap: this.snap,
            step: this.step,
            tooltips: true,
            connect: true,
            range: rangeMap,
            format: {
                to: function (value) {
                    return value;
                },
                from: function (value) {
                    return value;
                }
            }
        });
        const sliderInstance = slider;
        if (this.ids) {
            sliderInstance.noUiSlider.on("set", () => {
                const range = sliderInstance.noUiSlider.get();
                const from = this.valueArray.findIndex(value => parseFloat(value) == parseFloat(range[0]));
                const to = this.valueArray.findIndex(value => parseFloat(value) == parseFloat(range[1]));
                this.fromId = this.idArray[from];
                this.toId = this.idArray[to];
            });
        }
        const fromIndex = this.idArray.findIndex(id => parseInt(id) == this.from);
        const toIndex = this.idArray.findIndex(id => parseInt(id) == this.to);
        const from = this.from ? parseFloat(this.valueArray[fromIndex]) : null;
        const to = this.to ? parseFloat(this.valueArray[toIndex]) : null;
        sliderInstance.noUiSlider.set([from, to]);
    }
    convertValuesToRangeMap(values) {
        let rangeMap = {};
        let step = 100 / (values.length - 1);
        let length = values.length;
        for (let i = 0; i < length; i++) {
            const value = parseFloat(values[i]);
            if (i == 0)
                rangeMap["min"] = value;
            else if (i == length - 1)
                rangeMap["max"] = value;
            else
                rangeMap[(step * i).toString() + "%"] = value;
        }
        return rangeMap;
    }
    render() {
        const disabled = !this.fromId || !this.toId;
        return [
            h("div", null),
            h("input", { type: "hidden", name: this.name, value: this.fromId + "," + this.toId, disabled: disabled })
        ];
    }
    static get is() { return "ks-filter-slider"; }
    static get originalStyleUrls() { return {
        "$": ["nouislider.css"]
    }; }
    static get styleUrls() { return {
        "$": ["nouislider.css"]
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
        "ids": {
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
            "attribute": "ids",
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
        "from": {
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
            "attribute": "from",
            "reflect": false
        },
        "to": {
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
            "attribute": "to",
            "reflect": false
        }
    }; }
    static get states() { return {
        "fromId": {},
        "toId": {}
    }; }
    static get elementRef() { return "el"; }
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
