'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');

const OrderCountrySelect = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.lightUp = false;
    }
    Change(e) {
        if (this.connectTo) {
            const connect = document.querySelector(`ks-input-select-dynamic[name="${this.connectTo}"]`);
            const select = e.target;
            connect.setAttribute("api-data", select.value);
            connect.setAttribute("light-up", "false");
        }
    }
    render() {
        return (index.h("ks-input-select", { name: this.name, label: this.label, onChange: (e) => this.Change(e), "light-up": this.lightUp }, index.h("slot", null)));
    }
};

exports.ks_order_country_select = OrderCountrySelect;
