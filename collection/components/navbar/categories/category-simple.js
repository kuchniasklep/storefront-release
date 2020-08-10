import { Component, h, Prop, State, Element, Listen } from '@stencil/core';
import Tunnel from '../navbar-data';
export class NavbarCategorySimple {
    constructor() {
        this.hidden = true;
        this.hiddenO = true;
    }
    MouseOverHandler() {
        clearTimeout(this.timeout);
        this.hidden = false;
        this.hiddenO = false;
    }
    MouseOutHandler() {
        this.hiddenO = true;
        this.timeout = setTimeout(() => {
            this.hidden = true;
        }, 200);
    }
    render() {
        return (h(Tunnel.Consumer, null, ({ categories }) => {
            const category = categories[this.category];
            return (h("div", { class: "ks-category-simple", style: {
                    backgroundColor: category.backgroundColor ? category.backgroundColor : "",
                    outlineColor: category.backgroundColor ? category.backgroundColor : ""
                } },
                h("a", { href: category.url, class: "uk-text-small", style: {
                        color: category.color ? category.color : "",
                        marginLeft: this.category == 0 ? "0" :
                            category.children ? "15px" : ""
                    } },
                    category.name,
                    category.children ? h("span", { "uk-icon": "triangle-down" }) : null),
                category.children ?
                    h("div", { style: {
                            visibility: this.hidden ? "hidden" : "visible",
                            opacity: this.hiddenO ? "0.0" : "1.0"
                        } },
                        h("div", null, category.children.map((child) => h("a", { href: child.url }, child.name))))
                    : null));
        }));
    }
    static get is() { return "ks-category-simple"; }
    static get originalStyleUrls() { return {
        "$": ["category-simple.css"]
    }; }
    static get styleUrls() { return {
        "$": ["category-simple.css"]
    }; }
    static get properties() { return {
        "category": {
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
            "attribute": "category",
            "reflect": false
        }
    }; }
    static get states() { return {
        "hidden": {},
        "hiddenO": {}
    }; }
    static get elementRef() { return "root"; }
    static get listeners() { return [{
            "name": "mouseover",
            "method": "MouseOverHandler",
            "target": undefined,
            "capture": false,
            "passive": true
        }, {
            "name": "mouseout",
            "method": "MouseOutHandler",
            "target": undefined,
            "capture": false,
            "passive": true
        }]; }
}
