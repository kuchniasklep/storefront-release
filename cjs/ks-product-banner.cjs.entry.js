'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');

const ProductPrice = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: "uk-tile uk-padding-remove uk-flex uk-flex-center uk-margin-bottom", style: { backgroundColor: this.color } }, index.h("ks-image", { alt: this.alt, src: this.image, width: this.width, height: this.height })));
    }
};

exports.ks_product_banner = ProductPrice;
