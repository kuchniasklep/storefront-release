import { Component, h, Prop, State, Element, Listen } from '@stencil/core';
import Tunnel from '../navbar-data';
export class NavbarCategoryView {
    constructor() {
        this.hidden = true;
        this.hiddenO = true;
        this.active = 0;
    }
    MouseOverHandler() {
        clearTimeout(this.timeout);
        this.hidden = false;
        this.hiddenO = false;
        this.NavbarColor(false);
    }
    MouseOutHandler() {
        this.hiddenO = true;
        this.timeout = setTimeout(() => {
            this.hidden = true;
        }, 200);
        this.NavbarColor(true);
    }
    NavbarColor(state) {
        const bar = document.querySelector("ks-navbar-categories-expanded > * > nav");
        if (!bar || this.count == 0)
            return;
        bar.style.backgroundColor = state ? "#00426e" : "rgb(1, 91, 151)";
        bar.style.borderTop = state ? "1px solid transparent" : "1px solid rgb(0, 74, 123)";
        bar.style.borderBottom = bar.style.borderTop;
    }
    CalculateHeight() {
        return Math.max(40 * 6, (this.count * 40));
    }
    SetActive(index, children) {
        if (children)
            this.active = index;
    }
    render() {
        return (h(Tunnel.Consumer, null, ({ categories }) => {
            const category = categories[this.category];
            return (h("div", { class: "ks-category-view", style: {
                    backgroundColor: category.backgroundColor ? category.backgroundColor : "",
                    outlineColor: category.backgroundColor ? category.backgroundColor : ""
                } },
                h("a", { href: category.url, class: "uk-text-small", style: {
                        color: category.color ? category.color : "",
                        marginLeft: this.category == 0 ? "0" : ""
                    } },
                    category.name,
                    category.children ? h("span", { "uk-icon": "triangle-down" }) : null),
                category.children ?
                    h("div", { class: "uk-width-1-1", style: {
                            display: this.hidden ? "none" : "block",
                            opacity: this.hiddenO ? "0.0" : "1.0"
                        } },
                        h("div", { class: "uk-flex" },
                            h("div", { class: "ks-buttons uk-width-small" }, category.children.map((child, index) => h("a", { href: child.url, class: this.active == index && child.children ? "uk-active" : "", onMouseOver: () => this.SetActive(index, !!child.children) },
                                child.name,
                                !child.children ? h("span", { "uk-icon": "link", class: "uk-float-right" }) : null))),
                            h("div", { class: "ks-content uk-width-expand", style: { maxHeight: this.CalculateHeight() + "px" } }, category.children.map((child, index) => h("div", { style: { display: this.active == index && !this.hidden ? "flex" : "none" }, class: "uk-flex uk-flex-column uk-flex-wrap uk-flex-wrap-top uk-flex-top uk-height-1-1 uk-child-width-small" }, child.children ? child.children.map((item) => h("a", { href: item.url }, item.name)) : null))),
                            h("div", { class: "ks-graphic uk-width-expand", style: { maxHeight: this.CalculateHeight() + "px" } }, category.children.map((child, index) => child.image ?
                                h("ks-img", { vertical: true, right: true, target: ".ks-category-view > div", src: child.image, style: { display: (this.active == index) ? "flex" : "none" } })
                                : null))))
                    : null));
        }));
    }
    static get is() { return "ks-category-view"; }
    static get originalStyleUrls() { return {
        "$": ["category-view.css"]
    }; }
    static get styleUrls() { return {
        "$": ["category-view.css"]
    }; }
    static get properties() { return {
        "count": {
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
            "attribute": "count",
            "reflect": false
        },
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
        "hiddenO": {},
        "active": {}
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
