import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
var ProductTab = /** @class */ (function () {
    function ProductTab(hostRef) {
        registerInstance(this, hostRef);
        this.mobile = false;
    }
    ProductTab.prototype.ResizeHandler = function () {
        if (window.innerWidth < 960)
            this.mobile = true;
        else
            this.mobile = false;
    };
    ProductTab.prototype.componentWillLoad = function () {
        this.ResizeHandler();
        this.ImageReplacer();
    };
    ProductTab.prototype.render = function () {
        var isOpen = this.open ? " uk-open" : null;
        if (this.mobile)
            return (h("div", { class: "uk-margin-small-top " + isOpen }, h("a", { class: "uk-accordion-title uk-h3", href: "#" }, this.name), h("div", { class: "uk-accordion-content uk-margin-bottom" }, h("slot", null))));
        else
            return h("slot", null);
    };
    ProductTab.prototype.ImageReplacer = function () {
        var images = this.root.querySelectorAll("img");
        for (var i = 0; i < images.length; i++) {
            var image = images[i];
            var ksImage = document.createElement("ks-image");
            var width = image.style.width.replace("px", "");
            if (width.includes("%")) {
                if (width == "100%")
                    width = "1200";
                else
                    width = null;
            }
            if (image.style.maxWidth)
                width = image.style.maxWidth.replace("px", "");
            var margin = image.style.margin;
            ksImage.setAttribute("src", image.getAttribute("data-src"));
            ksImage.setAttribute("alt", image.getAttribute("alt"));
            if (width)
                ksImage.setAttribute("width", width);
            ksImage.style.display = "inline-block";
            ksImage.style.margin = margin;
            if (margin.includes("auto")) {
                ksImage.style.textAlign = "center";
                ksImage.style.display = "block";
            }
            image.parentNode.replaceChild(ksImage, image);
        }
    };
    Object.defineProperty(ProductTab.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return ProductTab;
}());
export { ProductTab as ks_product_tab };
