'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c2b39b63.js');

const seeMoreCss = "ks-see-more{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:15px 0}ks-see-more a{display:block;padding:5px 30px;border:none;border-radius:50px;background-color:white;color:#151515 !important;-webkit-box-shadow:0px 2px 6px rgba(0, 0, 0, 0.18);box-shadow:0px 2px 6px rgba(0, 0, 0, 0.18);font-size:.875rem;line-height:40px;text-align:center;text-decoration:none !important;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:box-shadow 0.2s ease,\n                -webkit-transform 0.2s ease;transition:box-shadow 0.2s ease,\n                -webkit-transform 0.2s ease;-webkit-transition:-webkit-box-shadow 0.2s ease,\n                -webkit-transform 0.2s ease;transition:-webkit-box-shadow 0.2s ease,\n                -webkit-transform 0.2s ease;transition:box-shadow 0.2s ease,\n                transform 0.2s ease;transition:box-shadow 0.2s ease,\n                transform 0.2s ease,\n                -webkit-box-shadow 0.2s ease,\n                -webkit-transform 0.2s ease;transition:box-shadow 0.2s ease,\n                transform 0.2s ease,\n                -webkit-transform 0.2s ease}ks-see-more a:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);-webkit-box-shadow:0px 2px 12px rgba(0, 0, 0, 0.18);box-shadow:0px 2px 12px rgba(0, 0, 0, 0.18)}ks-see-more a:active{-webkit-transform:scale(1.02);-ms-transform:scale(1.02);transform:scale(1.02);-webkit-box-shadow:0px 2px 8px rgba(0, 0, 0, 0.18);box-shadow:0px 2px 8px rgba(0, 0, 0, 0.18)}";

const SeeMore = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.href = "";
    this.text = "";
  }
  render() {
    return index.h("a", { href: this.href }, this.text);
  }
};
SeeMore.style = seeMoreCss;

exports.ks_see_more = SeeMore;
