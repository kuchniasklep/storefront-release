'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');

const InputSelectDynamic = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.apiData = "";
    this.lightUp = false;
    this.data = new Array();
    this.loading = false;
    this.message = "";
  }
  async FetchData() {
    var headers = new Headers();
    headers.append('pragma', 'no-cache');
    headers.append('cache-control', 'no-cache');
    this.loading = true;
    this.message = "";
    await fetch(this.api + this.apiData, {
      method: 'GET',
      headers: headers,
      credentials: "same-origin"
    })
      .then(response => {
      if (!response.ok)
        throw response.status;
      return response.json();
    })
      .then(data => {
      this.data = data;
    })
      .catch(error => {
      let message = error;
      if (Number.isInteger(error))
        message = `Błąd połączenia - ${error}`;
      else if (!navigator.onLine)
        message = "Brak połączenia z internetem. ";
      this.message = message;
    });
    this.loading = false;
  }
  async Validate() {
    this.lightUp = false;
  }
  async IsValid() {
    return !this.loading && this.message == "";
  }
  componentWillLoad() {
    this.FetchData();
  }
  Decode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }
  render() {
    return (index.h("div", { class: "uk-position-relative" }, index.h("ks-input-select", { name: this.name, label: this.label, error: this.message != "", "light-up": this.lightUp }, this.data.map((item) => index.h("option", { selected: this.selectedId == item.value ? true : false, value: item.value }, this.Decode(item.name)))), this.loading ?
      index.h("div", { class: "uk-position-absolute uk-animation-fade", style: { top: "20px", left: "0px", width: "100%", height: "50px", backgroundColor: "rgba(255, 255, 255, 0.7)" } }, index.h("div", { "uk-spinner": true, class: "uk-position-center" }))
      : null, this.message != "" ?
      index.h("div", { class: "uk-position-absolute", style: { top: "20px", left: "0px", width: "100%", height: "50px", backgroundColor: "rgba(255, 255, 255)" } }, index.h("p", { class: "uk-position-center uk-text-danger" }, this.message, " ", index.h("a", { onClick: () => this.FetchData() }, "Od\u015Bwie\u017C")))
      : null));
  }
  static get watchers() { return {
    "apiData": ["FetchData"]
  }; }
};

exports.ks_input_select_dynamic = InputSelectDynamic;
