'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-0dd0274e.js');

const Alert = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.message = "";
  }
  componentWillLoad() {
    this.hashCode = this.GenerateHash(this.message);
  }
  GenerateHash(str) {
    var hash = 0, len = str.length;
    if (str.length === 0) {
      return hash;
    }
    for (let i = 0; i < len; i++) {
      let charC = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + charC;
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
  }
  async componentDidLoad() {
    const element = document.querySelector(`#ks-alert-${this.hashCode}`);
    UIkit.modal(element).show();
  }
  Close() {
    const element = document.querySelector(`#ks-alert-${this.hashCode}`);
    UIkit.modal(element).hide().then(() => {
      this.root.remove();
      element.remove();
    });
  }
  render() {
    return (index.h("div", { id: `ks-alert-${this.hashCode}`, class: "uk-modal-full", "uk-modal": "stack: true" }, index.h("div", { class: "uk-modal-dialog" }, index.h("div", { class: "uk-background-cover uk-flex uk-flex-between uk-flex-column", "uk-height-viewport": true }, index.h("div", { class: "uk-padding-small uk-flex-auto uk-flex uk-flex-center uk-flex-middle uk-flex-column", style: { maxWidth: "1300px", margin: "auto" } }, index.h("p", { class: "uk-text-center ks-text-decorated uk-h1", innerHTML: this.message }), index.h("div", { class: "uk-margin-top" }, index.h("button", { onClick: () => this.Close(), class: "uk-button uk-button-secondary", style: { padding: "5px 40px" } }, "OK")))))));
  }
  get root() { return index.getElement(this); }
};

exports.ks_alert = Alert;
