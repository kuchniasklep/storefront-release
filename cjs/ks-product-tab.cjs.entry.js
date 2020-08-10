'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');

const ProductTab = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.mobile = false;
    }
    ResizeHandler() {
        if (window.innerWidth < 960)
            this.mobile = true;
        else
            this.mobile = false;
    }
    componentWillLoad() {
        this.ResizeHandler();
        this.ImageReplacer();
    }
    render() {
        const isOpen = this.open ? " uk-open" : null;
        if (this.mobile)
            return (index.h("div", { class: "uk-margin-small-top " + isOpen }, index.h("a", { class: "uk-accordion-title uk-h3", href: "#" }, this.name), index.h("div", { class: "uk-accordion-content uk-margin-bottom" }, index.h("slot", null))));
        else
            return index.h("slot", null);
    }
    ImageReplacer() {
        const images = this.root.querySelectorAll("img");
        for (let i = 0; i < images.length; i++) {
            const image = images[i];
            const ksImage = document.createElement("ks-image");
            let width = image.style.width.replace("px", "");
            if (width.includes("%")) {
                if (width == "100%")
                    width = "1200";
                else
                    width = null;
            }
            if (image.style.maxWidth)
                width = image.style.maxWidth.replace("px", "");
            const margin = image.style.margin;
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
    }
    get root() { return index.getElement(this); }
};

exports.ks_product_tab = ProductTab;
