'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-18d28dc7.js');

const OrderPocztapunkt = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.search = "Wrocław, Polska";
    this.api = "";
    this.description = "";
    this.address = "";
    this.code = "";
    this.valid = true;
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  async Show(event) {
    event.preventDefault();
    PPWidgetApp.toggleMap({
      callback: (c) => this.Callback(c),
      payOnPickup: false,
      address: this.search
    });
  }
  Callback(callback) {
    var value = callback['name'] + ' - ' + callback['city'] + ' - ' + callback['street'];
    var punktodbioru = callback['pni'];
    this.address = callback['name'] + ' - ' + callback['city'] + ' - ' + callback['street'];
    this.search = callback['city'];
    this.code = callback['pni'];
    this.description = callback['description'];
    this.description = this.description.replace(/#/gi, '<br />');
    let formData = new FormData();
    formData.append("value", value);
    formData.append("punktodbioru", punktodbioru);
    var headers = new Headers();
    headers.append('pragma', 'no-cache');
    headers.append('cache-control', 'no-cache');
    fetch(this.api, {
      method: 'POST',
      headers: headers,
      body: formData,
      credentials: "same-origin"
    });
    this.Validate();
  }
  async Validate() {
    this.valid = this.address != "";
  }
  async IsValid() {
    return this.valid;
  }
  render() {
    return [
      index.h("style", { innerHTML: "\n                #overlay {\n                    position: fixed !important;\n                    display: flex !important;\n                    width: 100%;\n                    height: 100vh;\n                    justify-content: center;\n                    align-items: center;\n\n                    top: 0 !important;\n                }\n\n                @keyframes ks-fade {\n                    from {opacity: 1.0;}\n                    to {opacity: 0.4;}\n                }\n            " }),
      index.h("p", { innerHTML: this.address }),
      index.h("button", { class: "uk-button uk-width-1-1 uk-margin-top " + (this.valid ? "uk-button-secondary" : "uk-button-danger"), style: { animation: this.valid ? "" : "ks-fade 0.5s cubic-bezier(.86,.01,.67,1) infinite alternate" }, onClick: (e) => this.Show(e) }, "Wybierz punkt dostawy"),
      index.h("input", { type: "hidden", name: "lokalizacjaRuch", value: this.address }),
      index.h("input", { type: "hidden", name: "ShippingDestinationCode", value: this.code }),
      index.h("input", { type: "hidden", name: "OpisPunktuOdbioru", value: this.description })
    ];
  }
  get root() { return index.getElement(this); }
};

exports.ks_order_pocztapunkt = OrderPocztapunkt;
