import { r as registerInstance, h, g as getElement } from './index-22b73bd9.js';

const InputNumber = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valid = true;
    this.validMessage = "";
    this.InputHandler = (event) => {
      if (event.inputType != "insertText") {
        const input = this.root.querySelector("input");
        this.ClampInput(input);
      }
      event.stopImmediatePropagation();
    };
    this.ChangeHandler = (event) => {
      this.Validate();
      event.stopImmediatePropagation();
    };
  }
  render() {
    const valid = this.valid ? "" : "uk-form-danger";
    const validText = this.valid ? "" : "uk-text-danger";
    const center = this.center ? " uk-text-center" : "";
    const emphasis = this.emphasis ? { borderColor: "black", backgroundColor: "white" } : null;
    return (h("div", { class: "uk-margin" }, this.label ?
      h("label", { class: "uk-form-label " + validText, style: { marginBottom: "3px", display: "block" } }, this.label)
      : null, h("input", { class: "uk-input " + valid + center, style: emphasis, name: this.name, type: "number", step: this.step, placeholder: this.placeholder, onInput: this.InputHandler, onChange: this.ChangeHandler, onBlur: this.ChangeHandler }), !this.valid ?
      h("p", { class: "uk-text-danger", style: { marginTop: "5px" } }, this.validMessage)
      : null));
  }
  async IsValid() {
    return this.valid;
  }
  async Validate() {
    const input = this.root.querySelector("input");
    let valid = true;
    let message = "";
    this.ClampInput(input);
    if (this.required) {
      if (input.value.length == 0) {
        valid = false;
        message = "Pole wymagane.";
      }
    }
    this.valid = valid;
    this.validMessage = message;
    return Promise.resolve();
  }
  ClampInput(input) {
    if (parseInt(input.value) > this.max) {
      input.value = this.max.toString();
    }
    if (parseInt(input.value) < this.min) {
      input.value = this.min.toString();
    }
  }
  get root() { return getElement(this); }
};

export { InputNumber as ks_input_number };
