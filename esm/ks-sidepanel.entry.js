import { r as registerInstance, h, g as getElement } from './index-2d9093e5.js';
import { S as Swiper } from './core-class-f05bf7c2.js';
import { P as Pagination } from './pagination-ca8adc5c.js';
import { T as Thumbs } from './thumbs-06204fe0.js';

const sidepanelCss = "ks-sidepanel{display:block;position:absolute}ks-sidepanel .content{position:absolute;z-index:100000;top:0;right:0;bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:320px;height:100%;padding:15px 30px;overflow-y:auto;color:black;background:#ffffff}ks-sidepanel[left] .content{left:0}ks-sidepanel .content .close{position:absolute;top:15px;right:25px;padding:5px;color:#252525;-webkit-transition:color .1s ease-in-out;transition:color .1s ease-in-out;cursor:pointer;border:none;outline:none;background-color:transparent}@media only screen and (max-width: 640px){ks-sidepanel .content{width:300px;padding:20px}ks-sidepanel .content .close{right:15px}}ks-sidepanel .content{-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);-webkit-transition:-webkit-transform 0.3s ease;transition:-webkit-transform 0.3s ease;transition:transform 0.3s ease;transition:transform 0.3s ease, -webkit-transform 0.3s ease}ks-sidepanel[left] .content{-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%)}ks-sidepanel .visible{-webkit-transform:translateX(0%) !important;-ms-transform:translateX(0%) !important;transform:translateX(0%) !important}ks-sidepanel .hidden{-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%)}ks-sidepanel[left] .hidden{-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%)}";

Swiper.use([Pagination, Thumbs]);
const SidePanel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.name = "";
    this.message = "";
    this.stack = "";
    this.visible = "";
  }
  componentDidRender() {
    this.overlay = this.root.querySelector("ks-overlay");
  }
  async show() {
    this.overlay.show();
    setTimeout(() => {
      this.visible = "visible";
    }, 10);
  }
  async hide() {
    this.visible = "hidden";
    this.overlay.hide();
  }
  onClosed() {
    this.visible = "hidden";
  }
  render() {
    return h("ks-overlay", { dark: true }, h("nav", { class: `content ${this.visible}` }, h("button", { class: "close", onClick: () => this.hide() }, h("ks-icon", { name: "x" })), h("slot", null)));
  }
  get root() { return getElement(this); }
};
SidePanel.style = sidepanelCss;

export { SidePanel as ks_sidepanel };
