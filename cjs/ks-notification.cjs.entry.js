'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-601dda3f.js');

const notificationCss = "ks-notification{display:-ms-flexbox;display:flex;background-color:#252525;color:white}ks-notification>.content{width:100%;padding:15px 20px;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}ks-notification>.icon{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:10px;min-width:50px;background:rgba(0, 0, 0, 0.1)}ks-notification p{margin:0 !important}ks-notification[red]{background-color:var(--color-secondary)}@media (max-width: 420px){ks-notification{-ms-flex-direction:column;flex-direction:column}ks-notification>.content{padding:10px 12px}}";

let Alert = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.red = false;
    this.icon = "";
  }
  render() {
    if (this.icon)
      return [
        index.h("div", { class: "icon" }, index.h("ks-icon", { name: this.icon })),
        index.h("div", { class: "content" }, index.h("slot", null))
      ];
    return index.h("slot", null);
  }
};
Alert.style = notificationCss;

exports.ks_notification = Alert;
