import { r as registerInstance, h, g as getElement } from './index-74ff0cef.js';

const OrderDocumentSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidLoad() {
    this.root.style.display = "block";
    const radios = this.root.querySelectorAll(`input[name=${this.name}]`);
    radios.forEach((radio) => {
      radio.addEventListener("change", (e) => {
        const target = e.target;
        const form = new FormData();
        form.append("value", target.value);
        var headers = new Headers();
        headers.append('pragma', 'no-cache');
        headers.append('cache-control', 'no-cache');
        this.loading = true;
        fetch(this.api, {
          method: 'POST',
          headers: headers,
          body: form,
          credentials: "same-origin"
        })
          .then(() => this.loading = false);
      });
    });
  }
  async Validate() { }
  async IsValid() {
    return !this.loading;
  }
  render() {
    return [
      h("span", null, "Wybierz dokument sprzeda\u017Cy:"),
      h("div", { class: "uk-position-relative uk-margin-small-top" }, h("div", { class: "uk-child-width-1-2 uk-flex" }, h("ks-order-toggle", { active: true, text: "PARAGON", name: this.name, value: "0" }), h("ks-order-toggle", { text: "FAKTURA", name: this.name, value: "1" })), this.loading ?
        h("div", { class: "uk-overlay uk-overlay-default uk-padding-remove uk-position-cover uk-animation-fade", style: { animationDuration: "0.3s", animationDelay: "0.5s" } }, h("div", { "uk-spinner": true, class: "uk-position-center" }))
        : null)
    ];
  }
  get root() { return getElement(this); }
};

export { OrderDocumentSelect as ks_order_document_select };
