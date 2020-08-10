'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');

const CartHeading = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.center = false;
    }
    componentDidLoad() {
        this.root.style.display = "block";
        this.root.style.marginBottom = "20px";
        if (this.center)
            this.root.style.textAlign = "center";
    }
    render() {
        return [
            index.h("span", { class: "uk-text-bold ks-text-decorated", style: { fontSize: "22px", textTransform: "uppercase" } }, index.h("slot", null))
        ];
    }
    get root() { return index.getElement(this); }
};

exports.ks_cart_heading = CartHeading;
