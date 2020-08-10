'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');

const InputSelect = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.lightUp = false;
    }
    render() {
        const lightUp = this.lightUp ? {
            borderColor: "#1488ff",
            backgroundColor: "#d5e6ff",
            color: "#004454"
        } : {};
        return (index.h("div", { class: "uk-margin" }, this.label ?
            index.h("label", { class: "uk-form-label" + (this.error ? " uk-text-danger" : ""), style: { marginBottom: "3px", display: "block" } }, this.label)
            : null, index.h("select", { class: "uk-select" + (this.error ? " uk-form-danger" : ""), style: lightUp, name: this.name, onChange: () => this.Validate() }, index.h("slot", null))));
    }
    async IsValid() {
        return true;
    }
    async Validate() {
        this.lightUp = false;
        return Promise.resolve();
    }
};

exports.ks_input_select = InputSelect;
