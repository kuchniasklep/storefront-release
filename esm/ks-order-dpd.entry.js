import { r as registerInstance, h, g as getElement } from './index-f323e182.js';

const orderDPDCss = "ks-order-dpd .content{background-color:#e8e8e8;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%}ks-order-dpd>ks-button{max-width:300px;margin:15px auto 0 auto}ks-order-dpd .topBar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#dc0032}ks-order-dpd .missing{color:#dc0032}ks-order-dpd .topBar ks-img2{height:40px}";

const OrderDPD = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.api = "";
    this.button = "";
    this.pointMessage = "";
    this.missingMessage = "";
    this.description = "";
    this.code = "";
    this.initialized = false;
    this.valid = true;
  }
  componentDidLoad() {
    this.overlay = this.root.querySelector("ks-overlay");
  }
  show(event) {
    event.preventDefault();
    this.overlay.show();
    this.initialized = true;
  }
  hide(event) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    this.overlay.hide();
  }
  async Validate() {
    this.valid = this.code != "";
  }
  async IsValid() {
    return this.valid;
  }
  async select(point) {
    this.code = point;
    this.Validate();
    this.hide(null);
    let formData = new FormData();
    formData.append("rodzaj", "wysylka_dpdpickup");
    formData.append("koszyk", "0");
    formData.append("value", point);
    formData.append("punktodbioru", point);
    var headers = new Headers();
    headers.append('pragma', 'no-cache');
    headers.append('cache-control', 'no-cache');
    fetch(this.api, {
      method: 'POST',
      headers: headers,
      body: formData,
      credentials: "same-origin"
    });
  }
  render() {
    return [
      this.code ? h("p", null, this.pointMessage, ": ", this.code) : null,
      this.valid === false ? h("p", { class: "missing" }, this.missingMessage) : null,
      h("ks-button", { round: true, icon: "map-pin", onClick: (e) => this.show(e), name: this.button }),
      h("input", { type: "hidden", name: "lokalizacjaRuch", value: this.code }),
      h("input", { type: "hidden", name: "ShippingDestinationCode", value: this.code }),
      h("ks-overlay", null, h("div", { class: "content" }, h("div", { class: "topBar" }, h("ks-img2", { src: "res/cart/dpd.svg", vertical: true, height: 100, width: 300 }), h("ks-button", { icon: "x", onClick: (e) => this.hide(e) })), this.initialized ? [
        h("script", { id: "dpd-widget", type: "text/javascript", innerHTML: "\n                            function pointSelected(pointID){\n                                document.querySelector('ks-order-dpd').select(pointID);\n                            }\n                        " }),
        h("script", { type: "text/javascript", src: "//pudofinder.dpd.com.pl/source/dpd_widget.js?key=a9b08eb6c1b218b975529f9cea0e1364" })
      ] : null))
    ];
  }
  get root() { return getElement(this); }
};
OrderDPD.style = orderDPDCss;

export { OrderDPD as ks_order_dpd };
