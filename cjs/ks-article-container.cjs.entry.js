'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-aaabf9e8.js');

const articleContainerCss = "ks-article-container{display:block;max-width:1200px;margin:auto;width:100%;min-height:10px}ks-article-container>div{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:-5px}ks-article-container>div>*{width:calc(25% - 10px);margin:5px;-webkit-box-sizing:border-box;box-sizing:border-box}@media screen and (max-width: 639px){ks-article-container>div>*{width:100%}}@media screen and (min-width: 640px) and (max-width: 959px){ks-article-container>div>*{width:calc(50% - 10px)}}@media screen and (min-width: 960px) and (max-width: 1199px){ks-article-container>div>*{width:calc(33.3333333333% - 10px)}}";

const ArticleContainer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return index.h("div", null, index.h("slot", null));
  }
};
ArticleContainer.style = articleContainerCss;

exports.ks_article_container = ArticleContainer;
