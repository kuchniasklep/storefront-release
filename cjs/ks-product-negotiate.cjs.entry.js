'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-18d28dc7.js');

const productNegotiateCss = "ks-product-negotiate{display:block}ks-product-negotiate .content{background-color:var(--card-background);-webkit-box-shadow:var(--big-shadow);box-shadow:var(--big-shadow);color:var(--card-text-color);position:relative;max-width:720px;padding:30px}ks-product-negotiate ks-overlay .content{-webkit-animation:0.4s vertical-swipe-out 1;animation:0.4s vertical-swipe-out 1}ks-product-negotiate ks-overlay.active .content{-webkit-animation:0.4s vertical-swipe-in 1;animation:0.4s vertical-swipe-in 1}ks-product-negotiate .close{position:absolute;top:20px;right:20px;border-style:none;outline-style:none;background-color:transparent;z-index:200;-webkit-animation:fade-in 0.3s 1;animation:fade-in 0.3s 1}";

const ProductNegotiate = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.loading = false;
    this.success = false;
    this.failure = false;
  }
  closeHandler() {
    this.overlay.hide();
    if (this.success || this.failure) {
      setTimeout(() => {
        this.success = false;
        this.failure = false;
      }, 400);
    }
  }
  async requestHandler(event) {
    event.preventDefault();
    this.loading = true;
    const target = event.target;
    const data = new FormData(target);
    data.append("productUrl", document.location.href);
    data.append("productPrice", this.price);
    data.append("productOldPrice", this.oldPrice);
    data.append("productName", this.name);
    await fetch(this.api, { body: data, method: "post" })
      .then(async (response) => {
      const result = await response.text();
      if (result == "success")
        this.success = true;
      else
        this.failure = true;
    });
    setTimeout(() => {
      this.loading = false;
    }, 300);
  }
  componentDidRender() {
    this.overlay = this.root.querySelector("ks-overlay");
    const button = this.root.parentElement.querySelector("ks-product-negotiate > *:first-child");
    button.addEventListener("click", () => {
      this.overlay.show();
    });
  }
  render() {
    const closeVisibility = !this.loading;
    return [
      index.h("slot", null),
      index.h("ks-overlay", null, index.h("div", { class: "content" }, closeVisibility ?
        index.h("button", { class: "close", onClick: () => this.closeHandler() }, index.h("ks-icon", { name: "x", size: 1.3 }))
        : null, index.h("form", { onSubmit: e => this.requestHandler(e) }, index.h("fieldset", { class: "uk-fieldset" }, index.h("div", { style: { textAlign: "center" } }, index.h("legend", { class: "uk-legend uk-text-bold" }, this.heading), index.h("p", null, this.paragraph)), index.h("div", { class: "uk-margin" }, index.h("div", { class: "uk-inline uk-width-1-1" }, index.h("span", { class: "uk-form-icon", "uk-icon": "icon: user" }), index.h("input", { name: "name", class: "uk-input", type: "text", placeholder: "Imi\u0119 i nazwisko", required: true }))), index.h("div", { class: "uk-margin" }, index.h("div", { class: "uk-inline uk-width-1-1" }, index.h("span", { class: "uk-form-icon", "uk-icon": "icon: mail" }), index.h("input", { name: "email", class: "uk-input", type: "email", placeholder: "E-mail", required: true }))), index.h("div", { class: "uk-margin" }, index.h("div", { class: "uk-inline uk-width-1-1" }, index.h("span", { class: "uk-form-icon", "uk-icon": "icon: link" }), index.h("input", { name: "url", class: "uk-input", type: "url", placeholder: "Link do konkurencyjnej oferty", required: true }))), index.h("div", { class: "uk-margin" }, index.h("textarea", { name: "comment", class: "uk-textarea", rows: 4, placeholder: "Komentarz", style: { resize: "none" } })), index.h("div", { class: "uk-margin" }, index.h("label", null, index.h("input", { name: "zgoda", type: "checkbox", class: "uk-checkbox uk-margin-small-right", required: true }), "Wyra\u017Cam zgod\u0119 na przetwarzanie przez Sprzedawc\u0119 moich danych osobowych zawartych w formularzu w celu udzielenia odpowiedzi na zadane poprzez formularz pytania.")), index.h("input", { type: "submit", class: "uk-button uk-button-secondary uk-width-1-1", value: "WY\u015ALIJ ZAPYTANIE" }))), this.loading ?
        index.h("div", { class: "uk-overlay uk-overlay-default uk-position-cover" }, index.h("div", { class: "uk-position-center" }, index.h("div", { "uk-spinner": "ratio: 3" })))
        : null, this.success ?
        index.h("div", { class: "uk-overlay uk-overlay-default uk-position-cover uk-animation-fade uk-animation-fast", style: { backgroundColor: "white" } }, index.h("div", { class: "uk-position-center uk-text-center", style: { maxWidth: "800px", width: "80%" } }, index.h("span", { "uk-icon": "icon: check; ratio: 4", class: "uk-animation-slide-top-small" }), index.h("p", { class: "uk-h1 ks-text-decorated uk-animation-slide-top-small" }, "PROPOZYCJA WYS\u0141ANA"), index.h("p", { class: "ks-text-decorated uk-animation-slide-top-small" }, "Postaramy si\u0119 odpowiedzie\u0107 jak najszybciej. Je\u017Celi nie odpowiemy w ci\u0105gu 2 dni roboczych prosimy o kontakt telefoniczny.")))
        : null, this.failure ?
        index.h("div", { class: "uk-overlay uk-overlay-default uk-position-cover uk-animation-fade uk-animation-fast", style: { backgroundColor: "white" } }, index.h("div", { class: "uk-position-center uk-text-center" }, index.h("span", { "uk-icon": "icon: ban; ratio: 4", class: "uk-animation-slide-top-small" }), index.h("p", { class: "uk-h1 ks-text-decorated uk-animation-slide-top-small" }, "B\u0141\u0104D WYSY\u0141ANIA PROPOZYCJI")))
        : null))
    ];
  }
  get root() { return index.getElement(this); }
};
ProductNegotiate.style = productNegotiateCss;

exports.ks_product_negotiate = ProductNegotiate;
