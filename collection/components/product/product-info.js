import { Component, h, Prop, State, Watch, Listen, Element } from '@stencil/core';
import Tunnel from './product-data';
export class ProductInfo {
    constructor() {
        this.shippingTimeApi = "";
    }
    watchHandler(newValue, oldValue) {
        if (typeof this.data !== "undefined" && typeof newValue !== "undefined" && typeof oldValue !== "undefined") {
            if (oldValue.currentPrice != newValue.currentPrice)
                this.data.currentPrice = this.data.currentPrice.replace(".", ",") + " zł";
            if (oldValue.previousPrice != newValue.previousPrice)
                this.data.previousPrice = this.data.previousPrice.replace(".", ",") + " zł";
        }
    }
    updateData(data) {
        this.data = Object.assign(Object.assign({}, this.data), data);
    }
    updateImage(data) {
        this.data.images[0] = data;
        this.handleResize();
    }
    updateShippingTime(id, count) {
        if (this.shippingTimeApi != "") {
            const headers = new Headers();
            headers.append('pragma', 'no-cache');
            headers.append('cache-control', 'no-cache');
            let body = new FormData();
            body.append("id", id);
            body.append("count", count.toString());
            fetch(this.shippingTimeApi, {
                method: 'POST',
                body: body,
                headers: headers,
                credentials: "same-origin"
            })
                .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
                .then(json => {
                this.data = Object.assign(Object.assign({}, this.data), { shippingTime: json.shippingTime });
            })
                .catch(() => { });
        }
    }
    componentWillLoad() {
        const dataElement = document.getElementById(this.dataId);
        this.data = JSON.parse(dataElement.innerHTML);
        this.data.update = (data) => this.updateData(data);
        this.data.updateImage = (data) => this.updateImage(data);
        this.data.updateShippingTime = (id, count) => this.updateShippingTime(id, count);
    }
    handleResize() {
        if (window.innerWidth > 960)
            this.mobile = false;
        else
            this.mobile = true;
    }
    componentDidLoad() {
        this.handleResize();
    }
    render() {
        return (h(Tunnel.Provider, { state: this.data },
            h("ks-product-schema", null),
            h("ks-card", { padding: true },
                h("div", { class: "uk-child-width-1-2@m uk-grid-collapse", "uk-grid": true },
                    this.mobile ?
                        h("ks-product-title", null)
                        : null,
                    h("ks-product-images", null),
                    h("div", null,
                        !this.mobile ?
                            h("ks-product-title", null)
                            : null,
                        h("ks-product-price", null),
                        h("slot", { name: "below-price" }),
                        h("ks-product-trait", null),
                        h("slot", null),
                        h("ks-product-buttons", null),
                        h("ks-product-codes", null))))));
    }
    static get is() { return "ks-product-info"; }
    static get properties() { return {
        "dataId": {
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
            "attribute": "data-id",
            "reflect": false
        },
        "traitId": {
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
            "attribute": "trait-id",
            "reflect": false
        },
        "shippingTimeApi": {
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
            "attribute": "shipping-time-api",
            "reflect": false,
            "defaultValue": "\"\""
        }
    }; }
    static get states() { return {
        "data": {},
        "mobile": {}
    }; }
    static get elementRef() { return "root"; }
    static get watchers() { return [{
            "propName": "data",
            "methodName": "watchHandler"
        }]; }
    static get listeners() { return [{
            "name": "resize",
            "method": "handleResize",
            "target": "window",
            "capture": false,
            "passive": true
        }]; }
}
