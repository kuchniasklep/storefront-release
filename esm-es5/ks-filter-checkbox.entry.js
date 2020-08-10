import { r as registerInstance, h } from './index-20a680bb.js';
var FilterCheckbox = /** @class */ (function () {
    function FilterCheckbox(hostRef) {
        registerInstance(this, hostRef);
        this.active = false;
    }
    FilterCheckbox.prototype.render = function () {
        return [
            h("label", null, h("input", { class: "uk-checkbox", name: this.name + "[" + this.filterId + "]", type: "checkbox", checked: this.active }), " ", h("slot", null)),
            h("br", null)
        ];
    };
    return FilterCheckbox;
}());
export { FilterCheckbox as ks_filter_checkbox };
