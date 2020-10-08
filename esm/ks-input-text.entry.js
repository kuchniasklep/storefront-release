import { r as registerInstance, h, g as getElement } from './index-22b73bd9.js';

const InputText = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.sameAs = "";
    this.regex = "";
    this.regexMessage = "";
    this.novalidate = false;
    this.message = "";
  }
  render() {
    const isValid = this.message == "";
    const type = this.email ? "email" :
      this.password ? "password" :
        "text";
    const valid = isValid ? "" : "uk-form-danger";
    const validText = isValid ? "" : "uk-text-danger";
    const center = this.center ? " uk-text-center" : "";
    const size = this.large ? " uk-form-large" : "";
    const emphasis = this.emphasis ? { borderColor: isValid ? "black" : "#e21334", backgroundColor: "white" } : null;
    return (h("div", { class: "uk-margin" }, this.label ?
      h("label", { class: "uk-form-label " + validText, style: { marginBottom: "3px", display: "block" } }, this.label)
      : null, h("input", { class: "uk-input " + valid + center + size, style: emphasis, name: this.name, type: type, placeholder: this.placeholder, value: this.value, onChange: () => this.Change() }), this.message != "" ?
      h("p", { class: "uk-text-danger", style: { marginTop: "5px" } }, this.message)
      : null));
  }
  Change() {
    this.value = this.root.querySelector("input").value;
    if (!this.novalidate)
      this.Validate();
  }
  MessageWatcher() {
    this.render();
  }
  async IsValid() {
    return this.message == "" ? true : false;
  }
  async Validate() {
    const input = this.root.querySelector("input");
    let message = "";
    if (this.email) {
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regex.test(input.value.toLowerCase()))
        message = "Nieprawidłowy adres e-mail.";
    }
    if (this.digits) {
      const regex = /^([0-9])*$/;
      if (!regex.test(input.value))
        message = "W polu dozwolone są tylko liczby.";
    }
    if (this.price) {
      input.value = input.value.replace(",", ".");
      if (!isNaN(parseFloat(input.value)))
        input.value = parseFloat(input.value).toFixed(2);
      const regex = /^([0-9])*([.][0-9]{1,2})?$/;
      if (!regex.test(input.value))
        message = "W polu dozwolone są tylko ceny bez waluty.";
    }
    if (this.sameAs) {
      const other = this.root.closest("form").querySelector(`input[name='${this.sameAs}']`);
      if (input.value != other.value)
        message += `Podane ${this.password ? "hasła" : "pola"} nie są takie same.`;
    }
    if (this.regex != "" && this.regexMessage != "") {
      const regex = new RegExp(this.regex, "i");
      if (!regex.test(input.value))
        message += this.regexMessage;
    }
    if (input.value.length < this.min)
      message += ` Pole wymaga minimum ${this.min} znaków.`;
    if (input.value.length > this.max)
      message += ` Pole nie może przekroczyć ${this.max} znaków.`;
    if (this.required && input.value.length == 0)
      message = "Pole wymagane.";
    this.message = message;
    return Promise.resolve();
  }
  get root() { return getElement(this); }
  static get watchers() { return {
    "message": ["MessageWatcher"]
  }; }
};

export { InputText as ks_input_text };
