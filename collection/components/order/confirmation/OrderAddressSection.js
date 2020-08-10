import { Component, h, Element, Prop, State, Listen } from '@stencil/core';
export class OrderAddressSection {
    constructor() {
        this.hideOnMobile = false;
        this.mobile = false;
    }
    resizeHandler() {
        this.mobile = window.innerWidth < 959 ? true : false;
    }
    componentDidLoad() {
        this.root.style.display = "block";
        this.resizeHandler();
    }
    render() {
        const heading = h("span", { class: "uk-text-bold ks-text-decorated", style: { fontSize: "22px", textTransform: "uppercase" } }, this.heading);
        if (this.mobile && this.hideOnMobile)
            return (h("ul", { "uk-accordion": true },
                h("li", null,
                    h("a", { class: "uk-accordion-title", href: "#" }, heading),
                    h("div", { class: "uk-accordion-content" },
                        h("slot", null),
                        h("ks-order-button", { mobile: true, wide: true, href: this.link },
                            h("span", null, "Edytuj dane"))))));
        return [
            h("ks-order-heading", { heading: this.heading, link: this.link }),
            h("slot", null)
        ];
    }
    static get is() { return "ks-order-address-section"; }
    static get properties() { return {
        "heading": {
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
            "attribute": "heading",
            "reflect": false
        },
        "link": {
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
            "attribute": "link",
            "reflect": false
        },
        "hideOnMobile": {
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
            "attribute": "hide-on-mobile",
            "reflect": false,
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
