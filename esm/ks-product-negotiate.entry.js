import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';

const ProductNegotiate = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.loading = false;
        this.success = false;
        this.failure = false;
    }
    closeHandler() {
        if (this.success || this.failure) {
            this.loading = false;
            this.success = false;
            this.failure = false;
        }
    }
    requestHandler(event) {
        event.preventDefault();
        this.loading = true;
        const target = event.target;
        const data = new FormData(target);
        data.append("productUrl", document.location.href);
        data.append("productPrice", this.price);
        data.append("productOldPrice", this.oldPrice);
        data.append("productName", this.name);
        fetch(this.api, { body: data, method: "post" })
            .then(async (response) => {
            const result = await response.text();
            if (result == "success")
                this.success = true;
            else
                this.failure = true;
        });
    }
    render() {
        const closeVisibility = !this.loading || this.success || this.failure;
        return [
            h("a", { id: "ks-negotiate-content", href: "#ks-negotiate-modal", "uk-toggle": true }, h("slot", null)),
            h("div", { id: "ks-negotiate-modal", class: "uk-flex-top", "uk-modal": "bg-close: false; esc-close; false;" }, h("div", { class: "uk-modal-dialog uk-modal-body uk-margin-auto-vertical" }, closeVisibility ?
                h("button", { class: "uk-modal-close-default", type: "button", "uk-close": true, onClick: () => this.closeHandler() })
                : null, h("form", { onSubmit: e => this.requestHandler(e) }, h("fieldset", { class: "uk-fieldset" }, h("div", { style: { textAlign: "center" } }, h("legend", { class: "uk-legend uk-text-bold" }, this.heading), h("p", null, this.paragraph)), h("div", { class: "uk-margin" }, h("div", { class: "uk-inline uk-width-1-1" }, h("span", { class: "uk-form-icon", "uk-icon": "icon: user" }), h("input", { name: "name", class: "uk-input", type: "text", placeholder: "Imi\u0119 i nazwisko", required: true }))), h("div", { class: "uk-margin" }, h("div", { class: "uk-inline uk-width-1-1" }, h("span", { class: "uk-form-icon", "uk-icon": "icon: mail" }), h("input", { name: "email", class: "uk-input", type: "email", placeholder: "E-mail", required: true }))), h("div", { class: "uk-margin" }, h("div", { class: "uk-inline uk-width-1-1" }, h("span", { class: "uk-form-icon", "uk-icon": "icon: link" }), h("input", { name: "url", class: "uk-input", type: "url", placeholder: "Link do konkurencyjnej oferty", required: true }))), h("div", { class: "uk-margin" }, h("textarea", { name: "comment", class: "uk-textarea", rows: 4, placeholder: "Komentarz", style: { resize: "none" } })), h("div", { class: "uk-margin" }, h("label", null, h("input", { name: "zgoda", type: "checkbox", class: "uk-checkbox uk-margin-small-right", required: true }), "Wyra\u017Cam zgod\u0119 na przetwarzanie przez Sprzedawc\u0119 moich danych osobowych zawartych w formularzu w celu udzielenia odpowiedzi na zadane poprzez formularz pytania.")), h("input", { type: "submit", class: "uk-button uk-button-secondary uk-width-1-1", value: "WY\u015ALIJ ZAPYTANIE" }))), this.loading ?
                h("div", { class: "uk-overlay uk-overlay-default uk-position-cover" }, h("div", { class: "uk-position-center" }, h("div", { "uk-spinner": "ratio: 3" })))
                : null, this.success ?
                h("div", { class: "uk-overlay uk-overlay-default uk-position-cover uk-animation-fade uk-animation-fast", style: { backgroundColor: "white" } }, h("div", { class: "uk-position-center uk-text-center", style: { maxWidth: "800px", width: "80%" } }, h("span", { "uk-icon": "icon: check; ratio: 4", class: "uk-animation-slide-top-small" }), h("p", { class: "uk-h1 ks-text-decorated uk-animation-slide-top-small" }, "PROPOZYCJA WYS\u0141ANA"), h("p", { class: "ks-text-decorated uk-animation-slide-top-small" }, "Postaramy si\u0119 odpowiedzie\u0107 jak najszybciej. Je\u017Celi nie odpowiemy w ci\u0105gu 2 dni roboczych prosimy o kontakt telefoniczny.")))
                : null, this.failure ?
                h("div", { class: "uk-overlay uk-overlay-default uk-position-cover uk-animation-fade uk-animation-fast", style: { backgroundColor: "white" } }, h("div", { class: "uk-position-center uk-text-center" }, h("span", { "uk-icon": "icon: ban; ratio: 4", class: "uk-animation-slide-top-small" }), h("p", { class: "uk-h1 ks-text-decorated uk-animation-slide-top-small" }, "B\u0141\u0104D WYSY\u0141ANIA PROPOZYCJI")))
                : null))
        ];
    }
    get root() { return getElement(this); }
};

export { ProductNegotiate as ks_product_negotiate };
