import { Component, h, Prop, Element, Listen, State } from '@stencil/core';
export class RecentProducts {
    constructor() {
        this.mobile = false;
    }
    limitItemCount() {
        const containerWidth = this.mobile ? window.innerWidth - 20 : this.containter.offsetWidth - 20;
        const itemWidth = this.items[0].offsetWidth;
        const count = Math.floor(containerWidth / itemWidth);
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            if (i < count)
                item.style.display = "block";
            else
                item.style.display = "none";
        }
    }
    mobileLayout() {
        if (window.innerWidth <= 960)
            this.mobile = true;
        else
            this.mobile = false;
    }
    componentWillLoad() {
        this.mobileLayout();
    }
    componentDidLoad() {
        this.root.style.display = "block";
        this.containter = this.root.querySelector("#ks-recent-products-items");
        this.items = this.containter.querySelectorAll("ks-recent-card");
        this.limitItemCount();
    }
    handleResize() {
        this.mobileLayout();
        this.limitItemCount();
    }
    render() {
        return (h("div", { class: "uk-flex uk-flex-between uk-flex-middle " + (this.mobile ? "uk-flex-column" : "") },
            h("div", { class: "uk-flex uk-flex-middle ks-text-decorated", style: { fontSize: "20px", color: "white", padding: "5px 20px" } }, "OSTATNIO PRZEGL\u0104DANE"),
            h("div", { id: "ks-recent-products-items", class: "uk-overflow-hidden uk-width-1-1 uk-flex-1 uk-flex " + (this.mobile ? "uk-flex-center" : "uk-flex-right") },
                h("slot", null))));
    }
    static get is() { return "ks-recent-products"; }
    static get properties() { return {
        "image": {
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
            "attribute": "image",
            "reflect": false
        }
    }; }
    static get states() { return {
        "mobile": {}
    }; }
    static get elementRef() { return "root"; }
    static get listeners() { return [{
            "name": "resize",
            "method": "handleResize",
            "target": "window",
            "capture": false,
            "passive": true
        }]; }
}
