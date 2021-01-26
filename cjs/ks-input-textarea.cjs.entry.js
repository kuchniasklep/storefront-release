'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');

const inputTextareaCss = "ks-input-textarea{display:block;margin-bottom:15px}ks-input-textarea label{display:block;margin-bottom:3px;color:#000000;font-size:14px}ks-input-textarea[invalid] label{color:var(--color-secondary-darker)}ks-input-textarea textarea{vertical-align:top;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;width:100%;padding:4px 10px;border:1px solid #e5e5e5;border-radius:0;background:#f4f4f4;color:#373737;font:inherit}ks-input-textarea textarea:focus{outline:none;background-color:#f4f4f4;color:#373737;border-color:#222222}ks-input-textarea[invalid] textarea{border-color:var(--color-secondary-darker);color:var(--color-secondary-darker)}ks-input-textarea[invalid] p{margin-top:5px;color:var(--color-secondary-darker)}ks-input-textarea[noresize] textarea{resize:none}";

const InputTextarea = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.invalid = false;
    this.invalidMessage = "";
  }
  render() {
    return [
      this.label ?
        index.h("label", null, this.label)
        : null,
      index.h("textarea", { rows: this.rows, name: this.name, placeholder: this.placeholder, onChange: () => this.Validate() }),
      this.invalid ?
        index.h("p", null, this.invalidMessage)
        : null
    ];
  }
  async IsValid() {
    return !this.invalid;
  }
  async Validate() {
    const input = this.root.querySelector("textarea");
    let valid = true;
    let message = "";
    if (input.value.length < this.min) {
      valid = false;
      message += ` Pole wymaga minimum ${this.min} znaków.`;
    }
    if (input.value.length > this.max) {
      valid = false;
      message += ` Pole nie może przekroczyć ${this.max} znaków.`;
    }
    if (this.required && input.value.length == 0) {
      valid = false;
      message = "Pole wymagane.";
    }
    this.invalid = !valid;
    this.invalidMessage = message;
    return Promise.resolve();
  }
  get root() { return index.getElement(this); }
};
InputTextarea.style = inputTextareaCss;

exports.ks_input_textarea = InputTextarea;
