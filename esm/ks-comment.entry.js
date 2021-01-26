import { r as registerInstance, h } from './index-74ff0cef.js';

const commentCss = "ks-comment{display:block}ks-comment article{padding:30px}@media (min-width: 1200px){ks-comment article{padding:30px 40px}}ks-comment header{display:-webkit-box;display:-ms-flexbox;display:flex}ks-comment header>div{width:100%}ks-comment header .title{margin:0}ks-comment header .info{font-size:.875rem;line-height:1.4;color:#707070}ks-comment ks-icon{margin-right:20px}ks-comment p{margin-bottom:0px}";

const Comment = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("article", null, h("header", null, h("ks-icon", { name: "user", size: 2 }), h("div", null, h("h3", { class: "title" }, this.author), h("div", { class: "info" }, this.when))), h("slot", null));
  }
};
Comment.style = commentCss;

export { Comment as ks_comment };
