import { Component, h, Prop } from '@stencil/core';
export class Flex {
    constructor() {
        this.center = false;
        this.between = false;
        this.around = false;
        this.middle = false;
        this.gutter = false;
        this.column = false;
        this.reverse = false;
        this.height = false;
        this.small = false;
    }
    render() {
        const justify = this.center ? "uk-flex-center" :
            this.between ? "uk-flex-between" :
                this.around ? "uk-flex-around" : "uk-flex";
        const alignment = this.middle ? "uk-flex-middle" : "";
        const gutter = this.gutter ? "uk-grid-small" : "uk-grid-collapse";
        const size = this.small ? "uk-child-width-1-2@xs uk-child-width-small@s" : "";
        const direction = this.column ?
            (this.reverse ? "uk-flex-column-reverse" : "uk-flex-column")
            : (this.reverse ? "uk-flex-row-reverse" : "");
        const height = this.height ? "uk-height-1-1" : "";
        const match = this.match ? "uk-grid-match" : "";
        return (h("div", { class: [justify, alignment, gutter, size, direction, height, match].join(" "), "uk-grid": true },
            h("slot", null)));
    }
    static get is() { return "ks-flex"; }
    static get properties() { return {
        "center": {
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
            "attribute": "center",
            "reflect": false,
            "defaultValue": "false"
        },
        "between": {
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
            "attribute": "between",
            "reflect": false,
            "defaultValue": "false"
        },
        "around": {
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
            "attribute": "around",
            "reflect": false,
            "defaultValue": "false"
        },
        "middle": {
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
            "attribute": "middle",
            "reflect": false,
            "defaultValue": "false"
        },
        "gutter": {
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
            "attribute": "gutter",
            "reflect": false,
            "defaultValue": "false"
        },
        "column": {
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
            "attribute": "column",
            "reflect": false,
            "defaultValue": "false"
        },
        "reverse": {
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
            "attribute": "reverse",
            "reflect": false,
            "defaultValue": "false"
        },
        "height": {
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
            "attribute": "height",
            "reflect": false,
            "defaultValue": "false"
        },
        "small": {
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
            "attribute": "small",
            "reflect": false,
            "defaultValue": "false"
        },
        "match": {
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
            "attribute": "match",
            "reflect": false
        }
    }; }
}
