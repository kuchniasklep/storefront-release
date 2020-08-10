'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');

const OrderForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.loading = false;
    }
    render() {
        return (index.h("form", { action: this.action, method: this.method, onSubmit: (event) => this.Submit(event) }, index.h("slot", null), index.h("div", { class: "uk-position-relative" }, index.h("button", { type: "submit", formnovalidate: true, class: "uk-button uk-button-danger uk-width-1-1 uk-width-expand@m ks-text-decorated", style: { fontSize: "28px", fontWeight: "700", padding: "20px" } }, "ZAMAWIAM I P\u0141AC\u0118"), this.loading ?
            index.h("div", { class: "uk-overlay uk-light uk-padding-remove uk-position-cover uk-animation-fade", style: { animationDuration: "0.3s", backgroundColor: "#e21334" } }, index.h("div", { "uk-spinner": "ratio: 1.5", class: "uk-position-center" }))
            : null), index.h("ks-order-form-modal", null)));
    }
    async Submit(event) {
        event.preventDefault();
        const form = this.root.querySelector("form");
        const inputs = form.querySelectorAll("ks-input-dynamic, ks-order-document-select, ks-input-text, ks-input-textarea, ks-input-check, ks-order-inpost, ks-order-pocztapunkt");
        let highestPosition = Number.MAX_VALUE;
        let valid = true;
        for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i];
            if (input.closest("ks-input-dynamic *") != null)
                continue;
            await input.Validate();
            if (!await input.IsValid()) {
                const inputTop = input.getBoundingClientRect().top
                    - document.body.getBoundingClientRect().top;
                if (inputTop < highestPosition)
                    highestPosition = inputTop;
                valid = false;
            }
        }
        if (valid) {
            this.loading = true;
            form.submit();
        }
        else {
            try {
                window.scroll({ top: highestPosition - 100, behavior: "smooth" });
            }
            catch (error) {
                window.scroll(0, highestPosition - 100);
            }
        }
    }
    ShowPrompt(message) {
        const prompt = this.root.querySelector("ks-order-form-modal");
        prompt.setAttribute("message", message);
        prompt.Show();
    }
    get root() { return index.getElement(this); }
};

exports.ks_order_confirmation_form = OrderForm;
