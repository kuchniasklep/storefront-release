import { r as registerInstance, h } from './index-20a680bb.js';

const FilterCheckbox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.active = false;
    }
    render() {
        return [
            h("label", null, h("input", { class: "uk-checkbox", name: this.name + "[" + this.filterId + "]", type: "checkbox", checked: this.active }), " ", h("slot", null)),
            h("br", null)
        ];
    }
};

export { FilterCheckbox as ks_filter_checkbox };
