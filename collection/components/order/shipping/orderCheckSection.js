import { Component, h, Element, Prop, State, Listen } from '@stencil/core';
export class OrderCheckSection {
    constructor() {
        this.active = false;
        this.mobile = false;
    }
    ChangeHandler() {
        const input = this.root.querySelector(`div > label > input`);
        this.active = input.checked;
        const inputs = this.root.querySelectorAll("ks-input-text");
        inputs.forEach(input => {
            input.message = "";
        });
    }
    resizeHandler() {
        this.mobile = window.innerWidth < 959 ? true : false;
    }
    componentDidLoad() {
        this.root.style.display = "block";
        this.resizeHandler();
        this.ChangeHandler();
    }
    render() {
        return (h("div", null,
            h("label", { class: "uk-display-block uk-margin" },
                h("input", { type: "checkbox", class: "uk-checkbox", style: { transform: "scale(1.4) translateX(2px)", marginBottom: "3px" }, onChange: () => this.ChangeHandler() }),
                h("span", { class: "uk-margin-left ks-text-decorated uk-text-bold", style: { fontSize: "22px" } }, this.label)),
            h("br", null),
            this.active ? null :
                h("input", { type: "hidden", name: this.name, value: "1" }),
            h("div", { class: "uk-inline uk-width-1-1", hidden: !this.active && this.mobile },
                h("slot", null),
                this.active ? null :
                    h("div", { class: "uk-overlay uk-overlay-default uk-position-cover", style: { opacity: "0.8" } }))));
    }
    static get is() { return "ks-order-check-section"; }
    static get properties() { return {
        "label": {
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
            "attribute": "label",
            "reflect": false
        },
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
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "mobile": {}
    }; }
    static get elementRef() { return "root"; }
    static get listeners() { return [{
            "name": "resize",
            "method": "resizeHandler",
            "target": "window",
            "capture": false,
            "passive": true
        }]; }
}
