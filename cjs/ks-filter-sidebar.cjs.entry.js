'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');

const FilterSidebar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentDidLoad() {
        const overlay = this.root.querySelector("#filter-overlay");
        overlay.addEventListener("pointerdown", function (event) {
            const bar = overlay.querySelector("div");
            if (overlay.classList.contains("uk-open") && event.clientX > bar.offsetWidth) {
                UIkit.offcanvas(overlay).hide();
            }
        });
    }
    render() {
        return [
            index.h("button", { class: "uk-button uk-button-danger uk-width-1-1", type: "button", "uk-toggle": "target: #filter-overlay" }, "FILTRUJ"),
            index.h("div", { id: "filter-overlay", "uk-offcanvas": "overlay: true; bg-close: false;", style: { zIndex: "2147483648" } }, index.h("div", { class: "uk-offcanvas-bar uk-padding-small" }, index.h("div", { class: "uk-flex uk-flex-between uk-flex-top" }, index.h("span", { style: { marginTop: "5px" }, class: "uk-text-uppercase" }, "Filtrowanie"), index.h("button", { class: "uk-offcanvas-close", type: "button", "uk-close": true }), index.h("hr", null)), index.h("br", null), index.h("form", { method: "POST", action: this.baseUrl }, index.h("slot", null), index.h("a", { href: this.baseUrl, class: "uk-button uk-button-secondary uk-width-1-1 uk-margin-top" }, "WYCZY\u015A\u0106 FILTRY"), index.h("input", { type: "submit", class: "uk-button uk-button-danger uk-width-1-1 uk-margin-small-top", value: "ZOBACZ FILTRY" }))))
        ];
    }
    get root() { return index.getElement(this); }
};

exports.ks_filter_sidebar = FilterSidebar;
