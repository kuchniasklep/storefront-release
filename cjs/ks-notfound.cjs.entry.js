'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c2b39b63.js');

const notfoundCss = "ks-notfound{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:50px 30px 70px 30px;min-height:25vw;text-align:center}ks-notfound .status{color:black;font-size:128px;line-height:128px;font-family:var(--font-emphasis);font-weight:700;margin-right:20px}ks-notfound .content{max-width:800px;margin:15px 0}ks-notfound .content h1{font-size:1.275rem;font-family:var(--font-emphasis);font-weight:700}ks-notfound .content h1{font-size:1.275rem}@media (max-width: 640px){ks-notfound{padding:30px 15px 50px 15px}ks-notfound .status{font-size:100px;line-height:100px}}@media (max-width: 460px){ks-notfound .status{font-size:72px;line-height:72px}}";

const NotFound = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.link = "/";
    this.linkName = "Strona Główna";
    this.status = "404";
  }
  render() {
    return [
      index.h("div", { class: "status" }, this.status),
      index.h("div", { class: "content" }, index.h("slot", null)),
      index.h("ks-button", { round: true, link: this.link, name: this.linkName })
    ];
  }
};
NotFound.style = notfoundCss;

exports.ks_notfound = NotFound;
