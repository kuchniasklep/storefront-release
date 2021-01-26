import { r as registerInstance, h, g as getElement } from './index-74ff0cef.js';

const Form = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("form", { action: this.action, method: this.method, enctype: "multipart/form-data", onSubmit: (event) => this.Submit(event) }, h("slot", null), h("input", { class: "uk-button uk-button-danger uk-width-1-1 uk-margin-medium-top", style: { padding: "8px 40px" }, type: "submit", value: "Wy\u015Blij Formularz", formnovalidate: true })));
  }
  async Submit(event) {
    event.preventDefault();
    const form = this.root.querySelector("form");
    const inputs = form.querySelectorAll("ks-input-text, ks-input-textarea, ks-input-check, ks-input-number, ks-input-date, ks-input-select");
    let valid = true;
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      await input.Validate();
      const isValid = await input.IsValid();
      if (!isValid) {
        valid = false;
      }
    }
    if (valid)
      form.submit();
  }
  get root() { return getElement(this); }
};

export { Form as ks_form };
