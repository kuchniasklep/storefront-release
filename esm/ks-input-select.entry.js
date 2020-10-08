import { r as registerInstance, h } from './index-22b73bd9.js';

const InputSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.lightUp = false;
  }
  render() {
    const lightUp = this.lightUp ? {
      borderColor: "#1488ff",
      backgroundColor: "#d5e6ff",
      color: "#004454"
    } : {};
    return (h("div", { class: "uk-margin" }, this.label ?
      h("label", { class: "uk-form-label" + (this.error ? " uk-text-danger" : ""), style: { marginBottom: "3px", display: "block" } }, this.label)
      : null, h("select", { class: "uk-select" + (this.error ? " uk-form-danger" : ""), style: lightUp, name: this.name, onChange: () => this.Validate() }, h("slot", null))));
  }
  async IsValid() {
    return true;
  }
  async Validate() {
    this.lightUp = false;
    return Promise.resolve();
  }
};

export { InputSelect as ks_input_select };
