import { Component, h, Prop, Element } from '@stencil/core';
export class InfoMessage {
    constructor() {
        this.disabled = false;
        this.animating = false;
        this.id = "";
    }
    componentWillLoad() {
        this.id = "ks-info-message-" + this.name.replace(" ", "");
        if (sessionStorage.getItem(this.id) == "true")
            this.disabled = true;
    }
    disable() {
        sessionStorage.setItem(this.id, "true");
        this.animating = true;
        setTimeout(() => {
            this.disabled = true;
        }, 300);
    }
    render() {
        return [
            h("div", { class: "content" },
                h("slot", null)),
            h("div", { class: "close" },
                h("ks-icon", { name: "x", onClick: () => this.disable() }))
        ];
    }
    static get is() { return "ks-info-message"; }
    static get originalStyleUrls() { return {
        "$": ["info-message.css"]
    }; }
    static get styleUrls() { return {
        "$": ["info-message.css"]
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
        "disabled": {
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
            "attribute": "disabled",
            "reflect": true,
            "defaultValue": "false"
        },
        "animating": {
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
            "attribute": "animating",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get elementRef() { return "root"; }
}
