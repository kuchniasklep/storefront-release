'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');

const DescriptionImage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: "uk-flex uk-flex-center" }, index.h("ks-image", { src: this.image })));
    }
};

exports.ks_description_image = DescriptionImage;
