'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');
require('./index-c953c5aa.js');
const productData = require('./product-data-06c46721.js');

const ProductInfo = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(productData.Tunnel.Provider, { state: this.data }, index.h("ks-product-schema", null), index.h("ks-card", { padding: true }, index.h("div", { class: "uk-child-width-1-2@m uk-grid-collapse", "uk-grid": true }, this.mobile ?
            index.h("ks-product-title", null)
            : null, index.h("ks-product-images", null), index.h("div", null, !this.mobile ?
            index.h("ks-product-title", null)
            : null, index.h("ks-product-price", null), index.h("slot", { name: "below-price" }), index.h("ks-product-trait", null), index.h("slot", null), index.h("ks-product-buttons", null), index.h("ks-product-codes", null))))));
    }
    get root() { return index.getElement(this); }
    static get watchers() { return {
        "data": ["watchHandler"]
    }; }
};

exports.ks_product_info = ProductInfo;
