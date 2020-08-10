import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';

const OrderAddressField = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        this.root.style.display = "block";
    }
    render() {
        return [
            h("span", { innerHTML: this.name }),
            h("div", { class: "uk-padding-small uk-margin-bottom", style: { backgroundColor: "#f2f2f2" } }, h("slot", null))
        ];
    }
    get root() { return getElement(this); }
};

export { OrderAddressField as ks_order_address_field };
