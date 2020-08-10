import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
var ProductVariants = /** @class */ (function () {
    function ProductVariants(hostRef) {
        registerInstance(this, hostRef);
        this.more = false;
        this.toggle = true;
        this.variantCount = 0;
    }
    ProductVariants.prototype.componentDidLoad = function () {
        this.flex = this.root.querySelector("div.uk-flex-wrap");
        this.variantCount = this.root.querySelectorAll("ks-product-variant").length;
        this.ResizeHandler();
        this.ToggleWatcher(this.toggle);
    };
    ProductVariants.prototype.ToggleWatcher = function (toggle) {
        if (toggle)
            this.flex.classList.add("ks-variant-max-flex-height");
        else
            this.flex.classList.remove("ks-variant-max-flex-height");
    };
    ProductVariants.prototype.ResizeHandler = function () {
        var fullWidth = (window.innerWidth <= 1218 ? window.innerWidth : 1218) - 15;
        var count = Math.round(fullWidth / 120);
        this.width = 100 / count;
        this.maxHeight = fullWidth * (this.width / 100);
        if (window.innerWidth < 640) {
            this.maxHeight *= 2;
            this.more = this.variantCount > count * 2 ? true : false;
        }
        else
            this.more = this.variantCount > count ? true : false;
    };
    ProductVariants.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "uk-margin-top" }, h("style", { innerHTML: "\n\t\t\t\t\tks-product-variants div.uk-flex-wrap {\n\t\t\t\t\t\tmax-width: calc(100% + 18px);\n\t\t\t\t\t\twidth: 200%;\n\t\t\t\t\t\tmargin: -9px;\n\t\t\t\t\t}\n\n\t\t\t\t\tks-product-variants ks-product-variant {\n\t\t\t\t\t\twidth: " + this.width + "%;\n\t\t\t\t\t\tpadding: 9px;\n\t\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\t}\n\n\t\t\t\t\tks-product-variants .ks-variant-max-flex-height{\n\t\t\t\t\t\tmax-height: " + this.maxHeight + "px;\n\t\t\t\t\t}\n\t\t\t\t" }), h("div", { class: "uk-flex uk-flex-wrap uk-width-1-1 uk-overflow-hidden" }, h("slot", null)), this.more ?
            h("div", { class: "uk-flex uk-flex-center uk-margin-top" }, h("button", { class: "uk-button uk-button-default", style: { backgroundColor: "white", padding: "3px 30px", border: "none", borderRadius: "50px", boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.18)" }, onClick: function () { return _this.toggle = !_this.toggle; } }, this.toggle ?
                h("span", { "uk-icon": "chevron-down" }) :
                h("span", { "uk-icon": "chevron-up" })))
            : null));
    };
    Object.defineProperty(ProductVariants.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductVariants, "watchers", {
        get: function () {
            return {
                "toggle": ["ToggleWatcher"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return ProductVariants;
}());
export { ProductVariants as ks_product_variants };
