import { r as registerInstance, h, g as getElement } from './index-22b73bd9.js';

const OrderInpost = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.search = "Wrocław, Polska";
    this.api = "";
    this.description = "";
    this.address = "";
    this.code = "";
    this.initialized = false;
    this.valid = true;
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  Show(event) {
    event.preventDefault();
    const element = document.querySelector("#ks-order-inpost");
    UIkit.modal(element).show();
    if (!this.initialized) {
      window.easyPackAsyncInit = () => {
        easyPack.init({
          defaultLocale: 'pl',
          mapType: 'osm',
          searchType: 'osm',
          points: {
            types: ['parcel_locker'],
            functions: ['parcel_collect']
          },
          map: {
            initialTypes: ['parcel_locker']
          }
        });
        this.widget = easyPack.mapWidget("easypack-map", (point) => {
          this.address = point.name + ", " + point.address["line1"] + ", " + point.address["line2"];
          this.code = point.name;
          this.description = point.address["line1"] + ", " + point.address["line2"] + "<br />" + point.name;
          const value = point.address["line1"] + ", " + point.address["line2"] + "  (" + point.name + ")";
          const punktodbioru = point.name;
          let formData = new FormData();
          formData.append("rodzaj", "wysylka_inpost");
          formData.append("koszyk", "1");
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
          this.Hide();
        });
        this.widget.searchPlace(this.search);
      };
      this.initialized = !this.initialized;
    }
  }
  Hide() {
    const element = document.querySelector("#ks-order-inpost");
    UIkit.modal(element).hide();
  }
  async Validate() {
    this.valid = this.address != "";
  }
  async IsValid() {
    return this.valid;
  }
  render() {
    return [
      h("link", { rel: "stylesheet", href: "https://geowidget.easypack24.net/css/easypack.css" }),
      h("script", { async: true, src: "https://geowidget.easypack24.net/js/sdk-for-javascript.js" }),
      h("style", { innerHTML: "\n                @keyframes ks-fade {\n                    from {opacity: 1.0;}\n                    to {opacity: 0.4;}\n                }\n\n                #easypack-map #listvillages {\n                    left: 0 !important;\n                    right: 0 !important;\n                    top: initial !important;\n                }\n\n                #easypack-map .input-group {\n                    padding: 0 !important;\n                    width: calc(100% - 60px) !important;\n                    height: 60px !important;\n                }\n\n                #easypack-map input {\n                    height: 60px;\n                }\n                #easypack-map button {\n                    height: 60px;\n                }\n            " }),
      h("p", { innerHTML: this.description }),
      h("button", { class: "uk-button uk-width-1-1 uk-margin-top " + (this.valid ? "uk-button-secondary" : "uk-button-danger"), style: { animation: this.valid ? "" : "ks-fade 0.5s cubic-bezier(.86,.01,.67,1) infinite alternate" }, onClick: (e) => this.Show(e) }, "Wybierz punkt dostawy"),
      h("input", { type: "hidden", name: "lokalizacjaRuch", value: this.address }),
      h("input", { type: "hidden", name: "ShippingDestinationCode", value: this.code }),
      h("div", { id: "ks-order-inpost", class: "uk-modal-full", "uk-modal": true }, h("div", { class: "uk-modal-dialog" }, h("div", { class: "uk-background-cover uk-flex uk-flex-between uk-flex-column", "uk-height-viewport": true }, h("div", { id: "easypack-map", style: { height: "100vh", width: "100vw" } }), h("button", { class: "uk-button uk-button-secondary uk-position-top-right", style: { width: "60px", height: "60px" }, onClick: () => this.Hide() }, h("span", { "uk-icon": "close" })))))
    ];
  }
  get root() { return getElement(this); }
};

export { OrderInpost as ks_order_inpost };
