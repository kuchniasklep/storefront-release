'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');

const InfoBanner = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    disable() {
        const id = "ks-info-banner-" + this.name.replace(" ", "");
        sessionStorage.setItem(id, "true");
    }
    render() {
        const id = "ks-info-banner-" + this.name.replace(" ", "");
        let disabled = sessionStorage.getItem(id);
        if (disabled == null)
            return (index.h("div", { id: id, class: "uk-position-relative", style: { backgroundColor: this.color } }, index.h("a", { href: this.link, "aria-label": this.name }, index.h("div", { class: "uk-flex uk-flex-center" }, index.h("ks-image", { width: "600", height: "100", src: this.image, alt: this.name }))), index.h("button", { type: "button", "aria-label": "Schowaj banner", onClick: () => this.disable(), class: "uk-light uk-position-small uk-position-top-right", "uk-close": true, "uk-toggle": "target: #" + id })));
        else
            return;
    }
};

exports.ks_info_banner = InfoBanner;
