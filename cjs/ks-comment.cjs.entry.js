'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');

const commentCss = "ks-comment{display:block}ks-comment article{padding:30px}@media (min-width: 1200px){ks-comment article{padding:30px 40px}}ks-comment header{display:-webkit-box;display:-ms-flexbox;display:flex}ks-comment header>div{width:100%}ks-comment header .title{margin:0}ks-comment header .info{font-size:.875rem;line-height:1.4;color:#707070}ks-comment ks-icon{margin-right:20px}ks-comment p{margin-bottom:0px}";

const Comment = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return index.h("article", null, index.h("header", null, index.h("ks-icon", { name: "user", size: 2 }), index.h("div", null, index.h("h3", { class: "title" }, this.author), index.h("div", { class: "info" }, this.when))), index.h("slot", null));
  }
};
Comment.style = commentCss;

exports.ks_comment = Comment;
