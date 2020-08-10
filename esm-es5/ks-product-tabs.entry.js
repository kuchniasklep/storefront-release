import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
var ProductTabs = /** @class */ (function () {
    function ProductTabs(hostRef) {
        registerInstance(this, hostRef);
        this.mobile = false;
        this.active = 0;
        this.nameList = new Array();
    }
    ProductTabs.prototype.ResizeHandler = function () {
        if (this.mobile == false && window.innerWidth < 960)
            this.mobile = true;
        if (this.mobile == true && window.innerWidth >= 960)
            this.mobile = false;
    };
    ProductTabs.prototype.componentWillLoad = function () {
        this.ResizeHandler();
    };
    ProductTabs.prototype.render = function () {
        var _this = this;
        return [
            h("style", { innerHTML: "\n                ks-product-tabs button {\n                    position: relative;\n                    padding: 20px 40px;\n\n                    font-family: inherit;\n                    font-size: 18px;\n\n                    color: #252525;\n                    background-color: #f6f6f6;\n                    transition: background-color 0.3s ease, color 0.3s ease;\n                    \n                    border: none;\n                    outline: none;\n\n                    border-right: 1px solid #e8e8e8;\n                }\n\n                ks-product-tabs button:hover {\n                    color: #808080;\n                }\n\n                ks-product-tabs button.uk-active {\n                    color: #252525 !important;\n                    background-color: #FFFFFF;\n                }\n            " }),
            h("ks-card", null, this.mobile ? null : [
                h("nav", { style: { backgroundColor: "#f6f6f6" }, "uk-switcher": "toggle: > *" }, this.nameList.map(function (value, index) {
                    return h("button", { class: "uk-margin-remove" + (index == _this.active ? " uk-active" : ""), onClick: function () { _this.active = index; } }, value);
                })),
                h("hr", { class: "uk-margin-remove" })
            ], h("div", { class: this.mobile ? "uk-padding" : "uk-padding uk-switcher", "uk-accordion": this.mobile ? "animation: false; multiple: true; targets: > ks-product-tab > div" : null, "uk-margin": true }, h("slot", null)))
        ];
    };
    ProductTabs.prototype.componentDidLoad = function () {
        var _this = this;
        var interval = setInterval(function () {
            var components = _this.root.querySelectorAll("ks-product-tab");
            if (components.length > 0) {
                var nameList = new Array();
                for (var i = 0; i < components.length; i++) {
                    var name = components[i].getAttribute("name");
                    nameList.push(name);
                }
                _this.nameList = nameList;
                clearInterval(interval);
            }
        }, 200);
    };
    Object.defineProperty(ProductTabs.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return ProductTabs;
}());
export { ProductTabs as ks_product_tabs };
