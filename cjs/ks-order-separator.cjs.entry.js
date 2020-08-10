'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');

const OrderSeparator = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dark = false;
    }
    componentDidLoad() {
        this.root.style.display = "block";
    }
    render() {
        const bgColor = this.dark ? "#404040" : "#dadada";
        return (index.h("hr", { class: "uk-margin-remove", style: { borderColor: bgColor } }));
    }
    get root() { return index.getElement(this); }
};

exports.ks_order_separator = OrderSeparator;
