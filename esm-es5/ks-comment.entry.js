import { r as registerInstance, h } from './index-20a680bb.js';
var Comment = /** @class */ (function () {
    function Comment(hostRef) {
        registerInstance(this, hostRef);
        this.separator = false;
    }
    Comment.prototype.render = function () {
        return (h("div", null, h("article", { class: "uk-comment uk-padding" }, h("header", { class: "uk-comment-header uk-grid-medium uk-flex-middle", "uk-grid": true }, h("div", { class: "uk-width-auto" }, h("span", { "uk-icon": "icon: user; ratio: 2;" })), h("div", { class: "uk-width-expand" }, h("span", { class: "uk-comment-title uk-margin-remove uk-h4" }, this.author), h("div", { class: "uk-comment-meta uk-margin-remove-top" }, this.when))), h("div", { class: "uk-comment-body" }, h("p", null, h("slot", null)))), this.separator ? h("hr", { class: "uk-margin-remove" }) : null));
    };
    return Comment;
}());
export { Comment as ks_comment };
