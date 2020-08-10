'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');

const OrderLogin = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.api = "";
        this.action = "";
        this.passwordMessage = "";
        this.passwordRecovery = "";
    }
    componentDidLoad() {
        this.root.style.display = "block";
    }
    render() {
        return [
            index.h("div", { class: "uk-padding", style: { backgroundColor: "#f2f2f5" } }, index.h("div", { class: "uk-text-center", style: { maxWidth: "500px", margin: "auto" } }, index.h("p", { class: "ks-text-decorated uk-text-bold", style: { fontSize: "28px" } }, "POSIADASZ KONTO?"), index.h("form", { onSubmit: (event) => this.Submit(event) }, index.h("slot", null), index.h("button", { type: "submit", class: "uk-button uk-button-secondary ks-text-decorated uk-text-bold uk-width-1-1 uk-margin-bottom", style: { fontSize: "20px", padding: "6px" } }, "ZALOGUJ SI\u0118")), index.h("a", { href: this.passwordRecovery }, "Nie pami\u0119tam has\u0142a")))
        ];
    }
    async Submit(event) {
        event.preventDefault();
        const form = this.root.querySelector("form");
        const email = form.querySelector("ks-input-dynamic");
        const pass = form.querySelector("ks-input-text[password]");
        await email.Validate();
        await pass.Validate();
        if (await email.IsValid() && await pass.IsValid()) {
            var headers = new Headers();
            headers.append('pragma', 'no-cache');
            headers.append('cache-control', 'no-cache');
            const formData = new FormData(form);
            const response = await fetch(this.api, {
                body: formData,
                method: 'POST',
                headers: headers,
                credentials: "same-origin"
            }).then(response => response.text());
            if (response == "false")
                pass.message = this.passwordMessage;
            else if (response == "true") {
                this.LoginPrompt(formData);
            }
        }
    }
    async LoginPrompt(data) {
        var headers = new Headers();
        headers.append('pragma', 'no-cache');
        headers.append('cache-control', 'no-cache');
        const formData = new FormData();
        formData.set("data", `email=${encodeURIComponent(data.get("email").toString())}&haslo=${encodeURIComponent(data.get("haslo").toString())}`);
        const response = await fetch(this.action, {
            body: formData,
            method: 'POST',
            headers: headers,
            credentials: "same-origin"
        }).then(response => response.text());
        const prompt = document.createElement("ks-order-login-prompt");
        if (response.search("koszyk.html") != -1) {
            prompt.setAttribute("message", "Do koszyka zostały dodane wcześniej zapisane produkty.");
        }
        document.body.appendChild(prompt);
    }
    get root() { return index.getElement(this); }
};

exports.ks_order_login = OrderLogin;
