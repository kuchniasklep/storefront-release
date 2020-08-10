'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');

const Comment = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.separator = false;
    }
    render() {
        return (index.h("div", null, index.h("article", { class: "uk-comment uk-padding" }, index.h("header", { class: "uk-comment-header uk-grid-medium uk-flex-middle", "uk-grid": true }, index.h("div", { class: "uk-width-auto" }, index.h("span", { "uk-icon": "icon: user; ratio: 2;" })), index.h("div", { class: "uk-width-expand" }, index.h("span", { class: "uk-comment-title uk-margin-remove uk-h4" }, this.author), index.h("div", { class: "uk-comment-meta uk-margin-remove-top" }, this.when))), index.h("div", { class: "uk-comment-body" }, index.h("p", null, index.h("slot", null)))), this.separator ? index.h("hr", { class: "uk-margin-remove" }) : null));
    }
};

exports.ks_comment = Comment;
