'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');

const OrderToggleSection = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.value = "left";
  }
  ChangeHandler() {
    const input = this.root.querySelector(`ks-order-toggle input[name='${this.name}']:checked`);
    this.value = input.value == this.lValue ? "left" : "right";
  }
  componentDidLoad() {
    this.root.style.display = "block";
    this.ChangeHandler();
  }
  render() {
    return (index.h("div", null, index.h("div", { class: "uk-child-width-1-2 uk-flex" }, index.h("ks-order-toggle", { active: this.value == "left", text: this.left, name: this.name, value: this.lValue, onClick: () => this.ChangeHandler() }), index.h("ks-order-toggle", { active: this.value == "right", text: this.right, name: this.name, value: this.rValue, onClick: () => this.ChangeHandler() })), index.h("br", null), index.h("div", { hidden: this.value != "left" }, index.h("slot", { name: "left" })), index.h("div", { hidden: this.value != "right" }, index.h("slot", { name: "right" }))));
  }
  get root() { return index.getElement(this); }
};

exports.ks_order_toggle_section = OrderToggleSection;
