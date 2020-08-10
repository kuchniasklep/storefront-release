import { Component, h, Prop, Element } from '@stencil/core';
import feather from 'feather-icons';
export class Icon {
    constructor() {
        this.name = "alert-octagon";
        this.size = 1;
    }
    componentWillLoad() {
        const icon = feather.icons[this.name];
        this.svg = icon.contents;
        this.attrs = icon.attrs;
        this.root.style.lineHeight = `${this.attrs.width * this.size}px`;
    }
    componentWillUpdate() {
        this.componentWillLoad();
    }
    componentDidLoad() {
        this.root.querySelector("svg").innerHTML = this.svg;
    }
    componentDidUpdate() {
        this.componentDidLoad();
    }
    render() {
        let stroke = "";
        if (this.size >= 1.3 && this.size < 2)
            stroke = "medium";
        else if (this.size >= 2)
            stroke = "thin";
        return (h("svg", { xmlns: this.attrs.xmlns, viewBox: this.attrs.viewBox, width: this.attrs.width * this.size, height: this.attrs.height * this.size, class: stroke }));
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
            "reflect": false,
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
