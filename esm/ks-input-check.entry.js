import { r as registerInstance, h, g as getElement } from './index-22b73bd9.js';

const InputCheck = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valid = true;
    this.validMessage = "";
  }
  render() {
    const type = this.radio ? "radio" :
      this.checkbox ? "checkbox" :
        "checkbox";
    const valid = this.valid ? "" : "uk-form-danger";
    return (h("div", { class: "uk-margin" }, h("label", { class: valid }, h("input", { class: "uk-margin-small-right uk-" + type, name: this.name, type: type, checked: this.currentCheck, value: this.value, onChange: (event) => {
        this.currentCheck = event.target.checked;
        this.Validate();
      } }), h("span", { innerHTML: this.label })), !this.valid ?
      h("p", { class: "uk-text-danger uk-text-bold", style: { marginTop: "10px" } }, this.validMessage)
      : null));
  }
  componentWillLoad() {
    this.currentCheck = this.checked;
  }
  async IsValid() {
    return this.valid;
  }
  async Validate() {
    const input = this.root.querySelector("input");
    let valid = true;
    let message = "";
    if (this.required && !input.checked) {
      valid = false;
      message = "Pole wymagane.";
    }
    this.valid = valid;
    this.validMessage = message;
    return Promise.resolve();
  }
  get root() { return getElement(this); }
};

export { InputCheck as ks_input_check };
