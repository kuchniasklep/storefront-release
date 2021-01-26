import { r as registerInstance, h } from './index-74ff0cef.js';

const Filter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.active = false;
  }
  render() {
    return (h("ul", { "uk-accordion": "animation: false;" }, h("li", { class: this.active ? "uk-open" : null }, h("a", { class: "uk-accordion-title", href: "#" }, this.name), h("div", { class: "uk-accordion-content" }, h("slot", null)))));
  }
};

export { Filter as ks_filter };
