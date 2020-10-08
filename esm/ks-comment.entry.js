import { r as registerInstance, h } from './index-22b73bd9.js';

const Comment = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.separator = false;
  }
  render() {
    return (h("div", null, h("article", { class: "uk-comment uk-padding" }, h("header", { class: "uk-comment-header uk-grid-medium uk-flex-middle", "uk-grid": true }, h("div", { class: "uk-width-auto" }, h("span", { "uk-icon": "icon: user; ratio: 2;" })), h("div", { class: "uk-width-expand" }, h("span", { class: "uk-comment-title uk-margin-remove uk-h4" }, this.author), h("div", { class: "uk-comment-meta uk-margin-remove-top" }, this.when))), h("div", { class: "uk-comment-body" }, h("p", null, h("slot", null)))), this.separator ? h("hr", { class: "uk-margin-remove" }) : null));
  }
};

export { Comment as ks_comment };
