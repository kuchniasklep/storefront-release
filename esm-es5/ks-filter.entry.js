import { r as registerInstance, h } from './index-20a680bb.js';
var Filter = /** @class */ (function () {
    function Filter(hostRef) {
        registerInstance(this, hostRef);
        this.active = false;
    }
    Filter.prototype.render = function () {
        return (h("ul", { "uk-accordion": "animation: false;" }, h("li", { class: this.active ? "uk-open" : null }, h("a", { class: "uk-accordion-title", href: "#" }, this.name), h("div", { class: "uk-accordion-content" }, h("slot", null)))));
    };
    return Filter;
}());
export { Filter as ks_filter };
