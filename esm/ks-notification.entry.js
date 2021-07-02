import { r as registerInstance, h } from './index-f323e182.js';

const notificationCss = "ks-notification{display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#252525;color:white}ks-notification>.content{width:100%;padding:15px 20px;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}ks-notification>.icon{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px;min-width:50px;background:rgba(0, 0, 0, 0.1)}ks-notification p{margin:0 !important}ks-notification[red]{background-color:var(--color-secondary)}@media (max-width: 420px){ks-notification{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}ks-notification>.content{padding:10px 12px}}";

const Alert = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.red = false;
    this.icon = "";
  }
  render() {
    if (this.icon)
      return [
        h("div", { class: "icon" }, h("ks-icon", { name: this.icon })),
        h("div", { class: "content" }, h("slot", null))
      ];
    return h("slot", null);
  }
};
Alert.style = notificationCss;

export { Alert as ks_notification };
