import { r as registerInstance, h, g as getElement } from './index-2d9093e5.js';

const promotionalPopupCss = "ks-promotional-popup{display:block}ks-promotional-popup .content{width:100%}ks-promotional-popup .info{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;height:100%;width:100%;max-width:720px;padding:20px;-webkit-box-sizing:border-box;box-sizing:border-box}ks-promotional-popup .info ks-img2{max-height:500px}ks-promotional-popup .texture{position:absolute;top:0;bottom:0;left:0;right:0}";

const PromotionalPopup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.color = "#FFFFFF";
    this.textureOpacity = "1.0";
    this.textureSize = "200";
    this.displayOnLoad = false;
  }
  componentDidLoad() {
    this.dialog = this.root.querySelector("ks-dialog");
    const cookieName = this.name + "Popup";
    if (this.displayOnLoad && document.cookie.search(`${cookieName}=tak`) == -1) {
      setTimeout(() => {
        this.Show();
      }, 4000);
    }
  }
  async Show() {
    this.dialog.show();
  }
  SetCookie() {
    const cookieName = this.name + "Popup";
    var expiration = "";
    var expirationDate = new Date();
    expirationDate.setMonth(expirationDate.getMonth() + 1);
    expiration = "expires=" + expirationDate.toUTCString() + "; ";
    document.cookie = `${cookieName}=tak; ` + expiration + "path=/";
  }
  render() {
    const bgstyle = {
      backgroundColor: this.color
    };
    const texturestyle = {
      backgroundImage: `url("${this.texture}")`,
      backgroundSize: `${this.textureSize}px ${this.textureSize}px`,
      opacity: this.textureOpacity
    };
    return [
      h("ks-dialog", { smallmobile: true, dark: true, nopadding: true, onClosed: () => this.SetCookie() }, h("div", { class: "info", style: bgstyle }, h("div", { class: "texture", style: texturestyle }), h("ks-img2", { src: this.image })))
    ];
  }
  get root() { return getElement(this); }
};
PromotionalPopup.style = promotionalPopupCss;

export { PromotionalPopup as ks_promotional_popup };
