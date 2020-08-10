'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');

const About = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("ks-card", null, index.h("div", { class: "uk-padding uk-flex uk-flex-middle" }, index.h("div", { class: "uk-flex uk-flex-center uk-flex-middle uk-flex-wrap uk-width-1-1 uk-width-2-5@s uk-width-large@m" }, index.h("a", { href: this.firstLink }, index.h("ks-image", { src: this.firstImage, width: "200", height: "90", alt: "opineo", style: { maxWidth: '200px' }, "uk-toggle": "cls: uk-width-1-2; mode: media; media: (max-width: 640px)" })), index.h("a", { href: this.secondLink }, index.h("ks-image", { src: this.secondImage, width: "200", height: "90", alt: "ceneo", style: { maxWidth: '200px' }, "uk-toggle": "cls: uk-width-1-2; mode: media; media: (max-width: 640px)" })), index.h("a", { href: this.thirdLink }, index.h("ks-image", { src: this.thirdImage, width: "200", height: "90", alt: "allegro", style: { maxWidth: '200px' }, "uk-toggle": "cls: uk-width-1-2; mode: media; media: (max-width: 640px)" }))), index.h("div", { class: "uk-width-expand uk-margin-left uk-visible@s uk-text-justify" }, index.h("slot", null)))));
    }
};

exports.ks_about = About;
