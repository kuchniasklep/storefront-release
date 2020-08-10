import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';

const OrderSeparator = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dark = false;
    }
    componentDidLoad() {
        this.root.style.display = "block";
    }
    render() {
        const bgColor = this.dark ? "#404040" : "#dadada";
        return (h("hr", { class: "uk-margin-remove", style: { borderColor: bgColor } }));
    }
    get root() { return getElement(this); }
};

export { OrderSeparator as ks_order_separator };
