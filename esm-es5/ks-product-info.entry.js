import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
import './index-2db7bf78.js';
import { T as Tunnel } from './product-data-ada29c2b.js';
var ProductInfo = /** @class */ (function () {
    function ProductInfo(hostRef) {
        registerInstance(this, hostRef);
        this.shippingTimeApi = "";
    }
    ProductInfo.prototype.watchHandler = function (newValue, oldValue) {
        if (typeof this.data !== "undefined" && typeof newValue !== "undefined" && typeof oldValue !== "undefined") {
            if (oldValue.currentPrice != newValue.currentPrice)
                this.data.currentPrice = this.data.currentPrice.replace(".", ",") + " zł";
            if (oldValue.previousPrice != newValue.previousPrice)
                this.data.previousPrice = this.data.previousPrice.replace(".", ",") + " zł";
        }
    };
    ProductInfo.prototype.updateData = function (data) {
        this.data = Object.assign(Object.assign({}, this.data), data);
    };
    ProductInfo.prototype.updateImage = function (data) {
        this.data.images[0] = data;
        this.handleResize();
    };
    ProductInfo.prototype.updateShippingTime = function (id, count) {
        var _this = this;
        if (this.shippingTimeApi != "") {
            var headers = new Headers();
            headers.append('pragma', 'no-cache');
            headers.append('cache-control', 'no-cache');
            var body = new FormData();
            body.append("id", id);
            body.append("count", count.toString());
            fetch(this.shippingTimeApi, {
                method: 'POST',
                body: body,
                headers: headers,
                credentials: "same-origin"
            })
                .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
            })
                .then(function (json) {
                _this.data = Object.assign(Object.assign({}, _this.data), { shippingTime: json.shippingTime });
            })
                .catch(function () { });
        }
    };
    ProductInfo.prototype.componentWillLoad = function () {
        var _this = this;
        var dataElement = document.getElementById(this.dataId);
        this.data = JSON.parse(dataElement.innerHTML);
        this.data.update = function (data) { return _this.updateData(data); };
        this.data.updateImage = function (data) { return _this.updateImage(data); };
        this.data.updateShippingTime = function (id, count) { return _this.updateShippingTime(id, count); };
    };
    ProductInfo.prototype.handleResize = function () {
        if (window.innerWidth > 960)
            this.mobile = false;
        else
            this.mobile = true;
    };
    ProductInfo.prototype.componentDidLoad = function () {
        this.handleResize();
    };
    ProductInfo.prototype.render = function () {
        return (h(Tunnel.Provider, { state: this.data }, h("ks-product-schema", null), h("ks-card", { padding: true }, h("div", { class: "uk-child-width-1-2@m uk-grid-collapse", "uk-grid": true }, this.mobile ?
            h("ks-product-title", null)
            : null, h("ks-product-images", null), h("div", null, !this.mobile ?
            h("ks-product-title", null)
            : null, h("ks-product-price", null), h("slot", { name: "below-price" }), h("ks-product-trait", null), h("slot", null), h("ks-product-buttons", null), h("ks-product-codes", null))))));
    };
    Object.defineProperty(ProductInfo.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductInfo, "watchers", {
        get: function () {
            return {
                "data": ["watchHandler"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return ProductInfo;
}());
export { ProductInfo as ks_product_info };
