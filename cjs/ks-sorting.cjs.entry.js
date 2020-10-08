'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-18d28dc7.js');

const Sorting = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", null, index.h("form", { action: this.post, method: "post", style: { margin: "0" } }, index.h("input", { type: "hidden", name: "sortowanie", value: "0" })), index.h("button", { class: "uk-button uk-button-danger uk-width-1-1", type: "button" }, "SORTUJ"), index.h("div", { "uk-dropdown": true, id: "test" }, index.h("ul", { class: "uk-nav uk-dropdown-nav" }, index.h("li", null, index.h("a", { onClick: () => this.Sort(1) }, "Polecane ", index.h("span", { class: "uk-float-right", "uk-icon": "icon: check" }))), index.h("li", null, index.h("a", { onClick: () => this.Sort(2) }, "Popularne ", index.h("span", { class: "uk-float-right", "uk-icon": "icon: users" }))), index.h("li", null, index.h("a", { onClick: () => this.Sort(3) }, "Najnowsze ", index.h("span", { class: "uk-float-right", "uk-icon": "icon: future" }))), index.h("hr", null), index.h("li", null, index.h("a", { onClick: () => this.Sort(4) }, "Najta\u0144sze ", index.h("span", { class: "uk-float-right", "uk-icon": "icon: minus-circle" }))), index.h("li", null, index.h("a", { onClick: () => this.Sort(5) }, "Najdro\u017Csze ", index.h("span", { class: "uk-float-right", "uk-icon": "icon: plus-circle" })))))));
  }
  componentDidLoad() {
    this.dropdown = this.root.querySelector("div[uk-dropdown]");
    this.form = this.root.querySelector("form");
    this.input = this.form.querySelector("input");
  }
  Sort(value) {
    this.input.value = value.toString();
    this.form.submit();
  }
  get root() { return index.getElement(this); }
};

exports.ks_sorting = Sorting;
