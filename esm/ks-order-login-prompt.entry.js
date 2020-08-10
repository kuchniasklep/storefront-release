import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';

const OrderLoginPrompt = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.message = "";
    }
    async componentDidLoad() {
        const element = document.querySelector("#ks-order-login-prompt");
        UIkit.modal(element).show();
    }
    ToCart() {
        window.location.href = 'koszyk.html';
    }
    ToConfirmation() {
        window.location.href = 'zamowienie-potwierdzenie.html';
    }
    render() {
        return (h("div", { id: "ks-order-login-prompt", class: "uk-modal-full", "uk-modal": true }, h("div", { class: "uk-modal-dialog" }, h("div", { class: "uk-background-cover uk-flex uk-flex-between uk-flex-column", "uk-height-viewport": true }, h("div", { class: "uk-padding-small uk-flex-auto uk-flex uk-flex-center uk-flex-middle uk-flex-column" }, h("div", { class: "uk-text-center" }, h("span", { class: "ks-text-decorated uk-h1 uk-text-bold" }, "Zosta\u0142e\u015B pomy\u015Blnie zalogowany"), h("br", null), h("p", null, this.message)), h("div", { class: "uk-margin-top" }, h("button", { onClick: () => this.ToCart(), class: "uk-button uk-button-secondary", style: { padding: "5px 15px" } }, "Wr\u00F3\u0107 do koszyka"), h("button", { onClick: () => this.ToConfirmation(), class: "uk-button uk-button-danger", style: { padding: "5px 15px" } }, "Do potwierdzenia")))))));
    }
    get root() { return getElement(this); }
};

export { OrderLoginPrompt as ks_order_login_prompt };
