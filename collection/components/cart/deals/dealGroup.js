import { Component, h, Prop, Event, State } from '@stencil/core';
import Tunnel from '../cartData';
export class CartDealGroup {
    constructor() {
        this.loading = false;
    }
    onAdd() {
        if (!this.loading) {
            this.add.emit();
            this.loading = true;
        }
    }
    componentWillLoad() {
        this.currentDeal = this.deals[0];
    }
    change(target) {
        const select = target;
        this.currentDeal = this.deals[select.selectedIndex];
    }
    Add() {
        this.loading = true;
        this.AddDeal(this.currentDeal.id).then(() => {
            this.loading = false;
        });
    }
    render() {
        return [
            h("a", { href: this.currentDeal.link },
                h("div", { class: "image" },
                    h("div", { class: "circle center" },
                        h("ks-img", { src: this.currentDeal.img, alt: this.name, vertical: true, center: true })),
                    h("svg", { class: "fx fx1 center", width: "250", height: "250" },
                        h("circle", { cx: "125", cy: "125", r: "80", fill: "transparent", stroke: "white", "stroke-width": "3", "stroke-dasharray": "50, 32" })),
                    h("svg", { class: "fx fx2 center", width: "250", height: "250" },
                        h("circle", { cx: "125", cy: "125", r: "88", fill: "transparent", stroke: "white", "stroke-width": "3", "stroke-dasharray": "50,59" })),
                    h("svg", { class: "fx fx3 center", width: "250", height: "250" },
                        h("circle", { cx: "125", cy: "125", r: "96", fill: "transparent", stroke: "white", "stroke-width": "3", "stroke-dasharray": "30,30" })),
                    h("svg", { class: "fx fx4 center", width: "250", height: "250" },
                        h("circle", { cx: "125", cy: "125", r: "106", fill: "transparent", stroke: "white", "stroke-width": "3", "stroke-dasharray": "70,60" })))),
            h("div", { class: "text ks-text-decorated" },
                h("div", { class: "top" },
                    h("a", { href: this.currentDeal.link }, this.name),
                    h("select", { class: "ks-text-decorated", onChange: event => this.change(event.target) }, this.deals.map(deal => h("option", null, deal.name)))),
                h("div", { class: "bottom" },
                    this.currentDeal.price,
                    h("button", { class: "ks-text-decorated small", onClick: () => this.Add() }, this.loading ? h("div", { "uk-spinner": "ratio: 0.8" }) : h("span", null, "DODAJ DO KOSZYKA")))),
            h("button", { class: "ks-text-decorated large", onClick: () => this.Add() }, this.loading ? h("div", { "uk-spinner": "ratio: 0.8" }) : h("span", null, "DODAJ DO KOSZYKA"))
        ];
    }
    static get is() { return "ks-cart-deal-group"; }
    static get originalStyleUrls() { return {
        "$": ["dealGroup.css"]
    }; }
    static get styleUrls() { return {
        "$": ["dealGroup.css"]
    }; }
    static get properties() { return {
        "ikey": {
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
            "attribute": "ikey",
            "reflect": true
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
        "deals": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "CartDataDeal[]",
                "resolved": "CartDataDeal[]",
                "references": {
                    "CartDataDeal": {
                        "location": "import",
                        "path": "../cartData"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "AddDeal": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(id: string) => Promise<void>",
                "resolved": "(id: string) => Promise<void>",
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        }
    }; }
    static get states() { return {
        "currentDeal": {},
        "loading": {}
    }; }
    static get events() { return [{
            "method": "add",
            "name": "add",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
Tunnel.injectProps(CartDealGroup, ['AddDeal']);
