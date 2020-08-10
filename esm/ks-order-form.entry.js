import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';

const OrderForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.loading = false;
    }
    render() {
        return (h("form", { action: this.action, method: this.method, enctype: "application/x-www-form-urlencoded", onSubmit: (event) => this.Submit(event) }, h("slot", null), h("div", { class: "uk-position-relative uk-margin-medium-top" }, h("button", { type: "submit", formnovalidate: true, class: "uk-button uk-button-danger uk-width-1-1 ks-text-decorated", style: { padding: "20px", fontSize: "28px", fontWeight: "700" } }, h("span", null, "KONTYNUUJ")), this.loading ?
            h("div", { class: "uk-overlay uk-light uk-padding-remove uk-position-cover uk-animation-fade", style: { animationDuration: "0.3s", backgroundColor: "#e21334" } }, h("div", { "uk-spinner": "ratio: 1.5", class: "uk-position-center" }))
            : null), h("ks-order-form-modal", null)));
    }
    async Submit(event) {
        event.preventDefault();
        const form = this.root.querySelector("form");
        const inputs = form.querySelectorAll("ks-input-dynamic, ks-input-select-dynamic, ks-input-select, ks-input-text, ks-input-check");
        let highestPosition = Number.MAX_VALUE;
        let valid = true;
        for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i];
            if (input.closest("ks-input-dynamic *") != null)
                continue;
            if (input.closest("ks-order-check-section:not([active])") != null)
                continue;
            if (input.closest("ks-order-enable-section:not([active])") != null)
                continue;
            if (input.closest("*[hidden]") != null)
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
            const stringArray = new Array();
            for (let i = 0; i < form.elements.length; i++) {
                const element = form.elements[i];
                if (element.nodeName === "INPUT" &&
                    element.type != "submit" &&
                    element.name != "") {
                    if ((element.type == "checkbox" || element.type == "radio") && !element.checked)
                        continue;
                    stringArray.push(`${element.name}=${encodeURIComponent(element.value.toString())}`);
                }
                else if (element.nodeName === "SELECT" && element.name != "") {
                    stringArray.push(`${element.name}=${encodeURIComponent(element.value.toString())}`);
                }
            }
            const formData = new FormData();
            formData.append("data", stringArray.join("&"));
            this.loading = true;
            var headers = new Headers();
            headers.append('pragma', 'no-cache');
            headers.append('cache-control', 'no-cache');
            await fetch(this.action, {
                body: formData,
                method: 'POST',
                headers: headers,
                credentials: "same-origin"
            })
                .then(response => {
                if (!response.ok)
                    throw response.status;
                else {
                    window.location.href = this.destination;
                }
            })
                .catch(error => {
                let message = error;
                console.log(error);
                if (!navigator.onLine)
                    message = "Brak połączenia z internetem.";
                else if (Number.isInteger(error))
                    message = `Błąd połączenia - ${error}`;
                this.ShowPrompt(message);
            });
            this.loading = false;
        }
        else {
            if ('scrollBehavior' in document.documentElement.style)
                window.scroll({ top: highestPosition - 100, behavior: "smooth" });
            else
                window.scroll(0, highestPosition - 100);
        }
    }
    ShowPrompt(message) {
        const prompt = this.root.querySelector("ks-order-form-modal");
        prompt.setAttribute("message", message);
        prompt.Show();
    }
    get root() { return getElement(this); }
};

export { OrderForm as ks_order_form };
