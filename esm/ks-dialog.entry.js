import { r as registerInstance, c as createEvent, h, g as getElement } from './index-46fe532f.js';

const dialogCss = "ks-dialog{display:block}ks-dialog .content{background-color:var(--card-background);-webkit-box-shadow:var(--big-shadow);box-shadow:var(--big-shadow);color:var(--card-text-color);position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:720px;padding:30px;line-height:24px}ks-dialog[nopadding] .content{padding:0px !important}@media (max-width: 720px){ks-dialog .content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;padding:20px}}@media (max-width: 420px){ks-dialog .content{font-size:13px;line-height:18px;padding:15px}}ks-dialog ks-overlay .content{-webkit-animation:0.4s vertical-swipe-out 1;animation:0.4s vertical-swipe-out 1}ks-dialog ks-overlay.active .content{-webkit-animation:0.4s vertical-swipe-in 1;animation:0.4s vertical-swipe-in 1}ks-dialog .close{position:absolute;top:20px;right:20px;border-style:none;outline-style:none;background-color:transparent;z-index:200;-webkit-animation:fade-in 0.3s 1;animation:fade-in 0.3s 1}ks-dialog .overlay{position:absolute;top:0;bottom:0;left:0;right:0;z-index:100;padding:30px;background-color:rgba(255,255,255, 0.8);-webkit-animation:fade-in 0.3s 1;animation:fade-in 0.3s 1}ks-dialog .opaque{background-color:#ffffff}ks-dialog .overlay>div{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%);-webkit-box-sizing:border-box;box-sizing:border-box;max-width:800px;width:80%;text-align:center}ks-dialog .overlay>div>*{-webkit-animation:vertical-swipe-in-short 0.5s;animation:vertical-swipe-in-short 0.5s}ks-dialog .overlay .header{font-family:var(--font-emphasis);font-size:20px;font-weight:700}";

const dialog = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closed = createEvent(this, "closed", 7);
    this.close = true;
    this.loading = false;
    this.success = false;
    this.failure = false;
    this.heading = "";
    this.message = "";
  }
  componentDidRender() {
    this.overlay = this.root.querySelector("ks-overlay");
  }
  async show() {
    this.overlay.show();
  }
  async hide() {
    this.overlay.hide();
  }
  async showLoading() {
    this.loading = true;
    this.close = false;
  }
  async showSuccess(heading, message) {
    this.success = true;
    this.heading = heading;
    this.message = message;
    setTimeout(() => {
      this.loading = false;
      this.close = true;
    }, 300);
  }
  async showFailure(heading, message) {
    this.failure = true;
    this.heading = heading;
    this.message = message;
    setTimeout(() => {
      this.loading = false;
      this.close = true;
    }, 300);
  }
  closeHandler() {
    if (this.success || this.failure) {
      setTimeout(() => {
        this.success = false;
        this.failure = false;
      }, 400);
    }
  }
  render() {
    return h("ks-overlay", { close: this.close, onClosed: () => this.closeHandler() }, h("div", { class: "content" }, this.close ?
      h("button", { class: "close", onClick: () => this.hide() }, h("ks-icon", { name: "x", size: 1.3 }))
      : null, h("slot", null), this.loading ?
      h("div", { class: "overlay" }, h("ks-loader", { large: true, dark: true }))
      : null, this.success || this.failure ?
      h("div", { class: "overlay opaque" }, h("div", null, h("ks-icon", { name: this.success ? "check" : "alert-triangle", size: 4 }), h("p", { class: "header" }, this.heading), h("p", null, this.message)))
      : null));
  }
  get root() { return getElement(this); }
};
dialog.style = dialogCss;

export { dialog as ks_dialog };
