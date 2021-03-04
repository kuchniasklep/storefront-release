'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c2b39b63.js');

const CartTile = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  render() {
    const mutedColor = "#eeeeee";
    const titleStyle = {
      backgroundColor: this.color,
      color: "white",
      height: "50px"
    };
    const priceStyle = {
      fontSize: "20px",
      padding: "5px 10px"
    };
    const infoStyle = {
      backgroundColor: mutedColor,
      msFlex: "1 0 auto",
      padding: "8px",
      fontSize: "16px",
      borderTop: "1px solid rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.1s ease-in, color 0.1s ease-in"
    };
    return (index.h("div", { class: "uk-height-1-1 uk-flex uk-flex-column" }, this.price ?
      index.h("div", { class: "uk-flex uk-flex-middle uk-flex-between", style: titleStyle }, index.h("div", { class: "uk-flex-auto" }, index.h("ks-image", { src: this.logo, alt: this.name, width: "130", height: "40" })), index.h("div", { class: "ks-text-decorated uk-text-right", style: priceStyle }, this.price))
      :
        index.h("div", { class: "uk-flex uk-flex-middle uk-flex-center", style: titleStyle }, index.h("ks-image", { src: this.logo, alt: this.name, width: "140", height: "40" })), index.h("div", { class: "uk-flex-1 uk-flex uk-flex-middle", style: infoStyle }, index.h("div", { class: "uk-width-1-1 uk-padding-small uk-text-center" }, index.h("slot", null)))));
  }
  get root() { return index.getElement(this); }
};

const OrderAddressField = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  render() {
    return [
      index.h("span", { innerHTML: this.name }),
      index.h("div", { class: "uk-padding-small uk-margin-bottom", style: { backgroundColor: "#f2f2f2" } }, index.h("slot", null))
    ];
  }
  get root() { return index.getElement(this); }
};

const OrderAddressSection = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.hideOnMobile = false;
    this.mobile = false;
  }
  resizeHandler() {
    this.mobile = window.innerWidth < 959 ? true : false;
  }
  componentDidLoad() {
    this.root.style.display = "block";
    this.resizeHandler();
  }
  render() {
    const heading = index.h("span", { class: "uk-text-bold ks-text-decorated", style: { fontSize: "22px", textTransform: "uppercase" } }, this.heading);
    if (this.mobile && this.hideOnMobile)
      return (index.h("ul", { "uk-accordion": true }, index.h("li", null, index.h("a", { class: "uk-accordion-title", href: "#" }, heading), index.h("div", { class: "uk-accordion-content" }, index.h("slot", null), index.h("ks-order-button", { mobile: true, wide: true, href: this.link }, index.h("span", null, "Edytuj dane"))))));
    return [
      index.h("ks-order-heading", { heading: this.heading, link: this.link }),
      index.h("slot", null)
    ];
  }
  get root() { return index.getElement(this); }
};

const OrderButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mobile = false;
    this.wide = false;
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  render() {
    return [
      index.h("a", { href: this.href, class: "uk-button uk-button-default " +
          (this.mobile ? "uk-hidden@m " : "") +
          (this.wide ? "uk-width-1-1 " : ""), style: { padding: "0 20px" } }, index.h("slot", null))
    ];
  }
  get root() { return index.getElement(this); }
};

const OrderButtonPair = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mobile = false;
    this.linkLeft = "";
    this.linkRight = "";
    this.split = 50;
  }
  resizeHandler() {
    this.mobile = window.innerWidth < 640;
  }
  componentDidLoad() {
    this.root.style.display = "block";
    this.resizeHandler();
  }
  render() {
    const split = this.mobile ? "100%" : this.split - 1 + "%";
    return (index.h("div", { class: "ks-text-decorated uk-text-bold uk-flex uk-flex-wrap uk-margin-top" }, index.h("a", { href: this.linkLeft, class: `uk-display-block uk-button uk-button-default ${this.mobile ? "uk-margin-small-bottom" : "uk-margin-right"}`, style: { fontSize: "18px", width: split } }, index.h("slot", { name: "left" })), index.h("a", { href: this.linkRight, class: "uk-display-block uk-button uk-button-default uk-width-expand", style: { fontSize: "18px" } }, index.h("slot", { name: "right" }))));
  }
  get root() { return index.getElement(this); }
};

const OrderCheckSection = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.active = false;
    this.mobile = false;
  }
  ChangeHandler() {
    const input = this.root.querySelector(`div > label > input`);
    this.active = input.checked;
    const inputs = this.root.querySelectorAll("ks-input-text");
    inputs.forEach(input => {
      input.message = "";
    });
  }
  resizeHandler() {
    this.mobile = window.innerWidth < 959 ? true : false;
  }
  componentDidLoad() {
    this.root.style.display = "block";
    this.resizeHandler();
    this.ChangeHandler();
  }
  render() {
    return (index.h("div", null, index.h("label", { class: "uk-display-block uk-margin" }, index.h("input", { type: "checkbox", class: "uk-checkbox", style: { transform: "scale(1.4) translateX(2px)", marginBottom: "3px" }, onChange: () => this.ChangeHandler() }), index.h("span", { class: "uk-margin-left ks-text-decorated uk-text-bold", style: { fontSize: "22px" } }, this.label)), index.h("br", null), this.active ? null :
      index.h("input", { type: "hidden", name: this.name, value: "1" }), index.h("div", { class: "uk-inline uk-width-1-1", hidden: !this.active && this.mobile }, index.h("slot", null), this.active ? null :
      index.h("div", { class: "uk-overlay uk-overlay-default uk-position-cover", style: { opacity: "0.8" } }))));
  }
  get root() { return index.getElement(this); }
};

const OrderForm = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.loading = false;
  }
  render() {
    return (index.h("form", { action: this.action, method: this.method, onSubmit: (event) => this.Submit(event) }, index.h("slot", null), index.h("div", { class: "uk-position-relative" }, index.h("button", { type: "submit", formnovalidate: true, class: "uk-button uk-button-danger uk-width-1-1 uk-width-expand@m ks-text-decorated", style: { fontSize: "28px", fontWeight: "700", padding: "20px" } }, "ZAMAWIAM I P\u0141AC\u0118"), this.loading ?
      index.h("div", { class: "uk-overlay uk-light uk-padding-remove uk-position-cover uk-animation-fade", style: { animationDuration: "0.3s", backgroundColor: "#e21334" } }, index.h("div", { "uk-spinner": "ratio: 1.5", class: "uk-position-center" }))
      : null), index.h("ks-order-form-modal", null)));
  }
  async Submit(event) {
    event.preventDefault();
    const form = this.root.querySelector("form");
    const inputs = form.querySelectorAll("ks-input-dynamic, ks-order-document-select, ks-input-text, ks-input-textarea, ks-input-check, ks-order-inpost, ks-order-pocztapunkt");
    let highestPosition = Number.MAX_VALUE;
    let valid = true;
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      if (input.closest("ks-input-dynamic *") != null)
        continue;
      await input.Validate();
      if (!await input.IsValid()) {
        const inputTop = input.getBoundingClientRect().top
          - document.body.getBoundingClientRect().top;
        if (inputTop < highestPosition)
          highestPosition = inputTop;
        valid = false;
      }
    }
    if (valid) {
      this.loading = true;
      form.submit();
    }
    else {
      try {
        window.scroll({ top: highestPosition - 100, behavior: "smooth" });
      }
      catch (error) {
        window.scroll(0, highestPosition - 100);
      }
    }
  }
  ShowPrompt(message) {
    const prompt = this.root.querySelector("ks-order-form-modal");
    prompt.setAttribute("message", message);
    prompt.Show();
  }
  get root() { return index.getElement(this); }
};

const OrderCountrySelect = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.lightUp = false;
  }
  Change(e) {
    if (this.connectTo) {
      const connect = document.querySelector(`ks-input-select-dynamic[name="${this.connectTo}"]`);
      const select = e.target;
      connect.setAttribute("api-data", select.value);
      connect.setAttribute("light-up", "false");
    }
  }
  render() {
    return (index.h("ks-input-select", { name: this.name, label: this.label, onChange: (e) => this.Change(e), "light-up": this.lightUp }, index.h("slot", null)));
  }
};

const OrderDocumentSelect = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentDidLoad() {
    this.root.style.display = "block";
    const radios = this.root.querySelectorAll(`input[name=${this.name}]`);
    radios.forEach((radio) => {
      radio.addEventListener("change", (e) => {
        const target = e.target;
        const form = new FormData();
        form.append("value", target.value);
        var headers = new Headers();
        headers.append('pragma', 'no-cache');
        headers.append('cache-control', 'no-cache');
        this.loading = true;
        fetch(this.api, {
          method: 'POST',
          headers: headers,
          body: form,
          credentials: "same-origin"
        })
          .then(() => this.loading = false);
      });
    });
  }
  async Validate() { }
  async IsValid() {
    return !this.loading;
  }
  render() {
    return [
      index.h("span", null, "Wybierz dokument sprzeda\u017Cy:"),
      index.h("div", { class: "uk-position-relative uk-margin-small-top" }, index.h("div", { class: "uk-child-width-1-2 uk-flex" }, index.h("ks-order-toggle", { active: true, text: "PARAGON", name: this.name, value: "0" }), index.h("ks-order-toggle", { text: "FAKTURA", name: this.name, value: "1" })), this.loading ?
        index.h("div", { class: "uk-overlay uk-overlay-default uk-padding-remove uk-position-cover uk-animation-fade", style: { animationDuration: "0.3s", animationDelay: "0.5s" } }, index.h("div", { "uk-spinner": true, class: "uk-position-center" }))
        : null)
    ];
  }
  get root() { return index.getElement(this); }
};

const OrderEnableection = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.active = false;
  }
  ChangeHandler() {
    const input = this.root.querySelector(`div > label > input`);
    this.active = input.checked;
  }
  componentDidLoad() {
    this.root.style.display = "block";
    this.ChangeHandler();
  }
  render() {
    return (index.h("div", null, index.h("label", { class: "uk-display-block uk-margin" }, index.h("input", { type: "checkbox", class: "uk-checkbox", name: this.name, value: this.value, onChange: () => this.ChangeHandler() }), index.h("span", null, " ", this.heading)), index.h("div", { class: "inputs", hidden: !this.active }, index.h("slot", null))));
  }
  get root() { return index.getElement(this); }
};

const OrderForm$1 = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.loading = false;
  }
  render() {
    return (index.h("form", { action: this.action, method: this.method, enctype: "application/x-www-form-urlencoded", onSubmit: (event) => this.Submit(event) }, index.h("slot", null), index.h("div", { class: "uk-position-relative uk-margin-medium-top" }, index.h("button", { type: "submit", formnovalidate: true, class: "uk-button uk-button-danger uk-width-1-1 ks-text-decorated", style: { padding: "20px", fontSize: "28px", fontWeight: "700" } }, index.h("span", null, "KONTYNUUJ")), this.loading ?
      index.h("div", { class: "uk-overlay uk-light uk-padding-remove uk-position-cover uk-animation-fade", style: { animationDuration: "0.3s", backgroundColor: "#e21334" } }, index.h("div", { "uk-spinner": "ratio: 1.5", class: "uk-position-center" }))
      : null), index.h("ks-order-form-modal", null)));
  }
  async Submit(event) {
    event.preventDefault();
    const form = this.root.querySelector("form");
    const inputs = form.querySelectorAll("ks-input-dynamic, ks-input-select-dynamic, ks-input-select, ks-input-text, ks-input-check");
    let highestPosition = Number.MAX_VALUE;
    let valid = true;
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      if (input.closest("ks-input-dynamic *") != null)
        continue;
      if (input.closest("ks-order-check-section:not([active])") != null)
        continue;
      if (input.closest("ks-order-enable-section:not([active])") != null)
        continue;
      if (input.closest("*[hidden]") != null)
        continue;
      await input.Validate();
      if (!await input.IsValid()) {
        const inputTop = input.getBoundingClientRect().top
          - document.body.getBoundingClientRect().top;
        if (inputTop < highestPosition)
          highestPosition = inputTop;
        valid = false;
      }
    }
    if (valid) {
      const stringArray = new Array();
      for (let i = 0; i < form.elements.length; i++) {
        const element = form.elements[i];
        if (element.nodeName === "INPUT" &&
          element.type != "submit" &&
          element.name != "") {
          if ((element.type == "checkbox" || element.type == "radio") && !element.checked)
            continue;
          stringArray.push(`${element.name}=${encodeURIComponent(element.value.toString())}`);
        }
        else if (element.nodeName === "SELECT" && element.name != "") {
          stringArray.push(`${element.name}=${encodeURIComponent(element.value.toString())}`);
        }
      }
      const formData = new FormData();
      formData.append("data", stringArray.join("&"));
      this.loading = true;
      var headers = new Headers();
      headers.append('pragma', 'no-cache');
      headers.append('cache-control', 'no-cache');
      await fetch(this.action, {
        body: formData,
        method: 'POST',
        headers: headers,
        credentials: "same-origin"
      })
        .then(response => {
        if (!response.ok)
          throw response.status;
        else {
          window.location.href = this.destination;
        }
      })
        .catch(error => {
        let message = error;
        console.log(error);
        if (!navigator.onLine)
          message = "Brak połączenia z internetem.";
        else if (Number.isInteger(error))
          message = `Błąd połączenia - ${error}`;
        this.ShowPrompt(message);
      });
      this.loading = false;
    }
    else {
      if ('scrollBehavior' in document.documentElement.style)
        window.scroll({ top: highestPosition - 100, behavior: "smooth" });
      else
        window.scroll(0, highestPosition - 100);
    }
  }
  ShowPrompt(message) {
    const prompt = this.root.querySelector("ks-order-form-modal");
    prompt.setAttribute("message", message);
    prompt.Show();
  }
  get root() { return index.getElement(this); }
};

const OrderLoginPrompt = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.message = "";
  }
  async Show() {
    const element = document.querySelector("#ks-order-form-modal");
    UIkit.modal(element).show();
  }
  async Hide() {
    const element = document.querySelector("#ks-order-form-modal");
    UIkit.modal(element).hide();
  }
  render() {
    return (index.h("div", { id: "ks-order-form-modal", class: "uk-modal-full", "uk-modal": true }, index.h("div", { class: "uk-modal-dialog" }, index.h("div", { class: "uk-background-cover uk-flex uk-flex-between uk-flex-column", "uk-height-viewport": true }, index.h("div", { class: "uk-padding-small uk-flex-auto uk-flex uk-flex-center uk-flex-middle uk-flex-column" }, index.h("div", { class: "uk-text-center" }, index.h("p", { class: "ks-text-decorated uk-h1 uk-text-bold" }, this.message), index.h("button", { onClick: () => this.Hide(), class: "uk-button uk-button-danger uk-margin-small-top", style: { padding: "5px 20px", fontSize: "16px" } }, "WR\u00D3\u0106")))))));
  }
  get root() { return index.getElement(this); }
};

const OrderGuest = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  render() {
    return [
      index.h("div", { class: "uk-padding" }, index.h("div", { class: "uk-text-center", style: { maxWidth: "500px", margin: "auto" } }, index.h("p", { class: "ks-text-decorated uk-text-bold", style: { fontSize: "28px" } }, "ZAM\u00D3W BEZ LOGOWANIA"), index.h("slot", null)))
    ];
  }
  get root() { return index.getElement(this); }
};

const OrderHeading = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  render() {
    return [
      index.h("div", { style: { marginBottom: "20px" }, class: "uk-flex uk-flex-middle uk-flex-between" }, index.h("div", { class: "uk-text-bold ks-text-decorated", style: { fontSize: "22px", textTransform: "uppercase" } }, this.heading), index.h("a", { href: this.link, class: "uk-link-text" }, index.h("span", { "uk-icon": "file-edit" })))
    ];
  }
  get root() { return index.getElement(this); }
};

const OrderInpost = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
          formData.append("koszyk", "0");
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
      index.h("link", { rel: "stylesheet", href: "https://geowidget.easypack24.net/css/easypack.css" }),
      index.h("script", { async: true, src: "https://geowidget.easypack24.net/js/sdk-for-javascript.js" }),
      index.h("style", { innerHTML: "\n                @keyframes ks-fade {\n                    from {opacity: 1.0;}\n                    to {opacity: 0.4;}\n                }\n\n                #easypack-map #listvillages {\n                    left: 0 !important;\n                    right: 0 !important;\n                    top: initial !important;\n                }\n\n                #easypack-map .input-group {\n                    padding: 0 !important;\n                    width: calc(100% - 60px) !important;\n                    height: 60px !important;\n                }\n\n                #easypack-map input {\n                    height: 60px;\n                }\n                #easypack-map button {\n                    height: 60px;\n                }\n            " }),
      index.h("p", { innerHTML: this.description }),
      index.h("button", { class: "uk-button uk-width-1-1 uk-margin-top " + (this.valid ? "uk-button-secondary" : "uk-button-danger"), style: { animation: this.valid ? "" : "ks-fade 0.5s cubic-bezier(.86,.01,.67,1) infinite alternate" }, onClick: (e) => this.Show(e) }, "Wybierz punkt dostawy"),
      index.h("input", { type: "hidden", name: "lokalizacjaRuch", value: this.address }),
      index.h("input", { type: "hidden", name: "ShippingDestinationCode", value: this.code }),
      index.h("div", { id: "ks-order-inpost", class: "uk-modal-full", "uk-modal": true }, index.h("div", { class: "uk-modal-dialog" }, index.h("div", { class: "uk-background-cover uk-flex uk-flex-between uk-flex-column", "uk-height-viewport": true }, index.h("div", { id: "easypack-map", style: { height: "100vh", width: "100vw" } }), index.h("button", { class: "uk-button uk-button-secondary uk-position-top-right", style: { width: "60px", height: "60px" }, onClick: () => this.Hide() }, index.h("span", { "uk-icon": "close" })))))
    ];
  }
  get root() { return index.getElement(this); }
};

const OrderLogin = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.api = "";
    this.action = "";
    this.passwordMessage = "";
    this.passwordRecovery = "";
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  render() {
    return [
      index.h("div", { class: "uk-padding", style: { backgroundColor: "#f2f2f5" } }, index.h("div", { class: "uk-text-center", style: { maxWidth: "500px", margin: "auto" } }, index.h("p", { class: "ks-text-decorated uk-text-bold", style: { fontSize: "28px" } }, "POSIADASZ KONTO?"), index.h("form", { onSubmit: (event) => this.Submit(event) }, index.h("slot", null), index.h("button", { type: "submit", class: "uk-button uk-button-secondary ks-text-decorated uk-text-bold uk-width-1-1 uk-margin-bottom", style: { fontSize: "20px", padding: "6px" } }, "ZALOGUJ SI\u0118")), index.h("a", { href: this.passwordRecovery }, "Nie pami\u0119tam has\u0142a")))
    ];
  }
  async Submit(event) {
    event.preventDefault();
    const form = this.root.querySelector("form");
    const email = form.querySelector("ks-input-dynamic, ks-input-text[email]");
    const pass = form.querySelector("ks-input-text[password]");
    await email.Validate();
    await pass.Validate();
    if (await email.IsValid() && await pass.IsValid()) {
      var headers = new Headers();
      headers.append('pragma', 'no-cache');
      headers.append('cache-control', 'no-cache');
      const formData = new FormData(form);
      const response = await fetch(this.api, {
        body: formData,
        method: 'POST',
        headers: headers,
        credentials: "same-origin"
      }).then(response => response.text());
      if (response == "false")
        pass.message = this.passwordMessage;
      else if (response == "true") {
        this.LoginPrompt(formData);
      }
    }
  }
  async LoginPrompt(data) {
    var headers = new Headers();
    headers.append('pragma', 'no-cache');
    headers.append('cache-control', 'no-cache');
    const formData = new FormData();
    formData.set("data", `email=${encodeURIComponent(data.get("email").toString())}&haslo=${encodeURIComponent(data.get("haslo").toString())}`);
    const response = await fetch(this.action, {
      body: formData,
      method: 'POST',
      headers: headers,
      credentials: "same-origin"
    }).then(response => response.text());
    const prompt = document.createElement("ks-order-login-prompt");
    if (response.search("koszyk.html") != -1) {
      prompt.setAttribute("message", "Do koszyka zostały dodane wcześniej zapisane produkty.");
    }
    document.body.appendChild(prompt);
  }
  get root() { return index.getElement(this); }
};

const OrderLoginPrompt$1 = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.message = "";
  }
  async componentDidLoad() {
    const element = document.querySelector("#ks-order-login-prompt");
    UIkit.modal(element).show();
  }
  ToCart() {
    window.location.href = 'koszyk.html';
  }
  ToConfirmation() {
    window.location.href = 'zamowienie-potwierdzenie.html';
  }
  render() {
    return (index.h("div", { id: "ks-order-login-prompt", class: "uk-modal-full", "uk-modal": true }, index.h("div", { class: "uk-modal-dialog" }, index.h("div", { class: "uk-background-cover uk-flex uk-flex-between uk-flex-column", "uk-height-viewport": true }, index.h("div", { class: "uk-padding-small uk-flex-auto uk-flex uk-flex-center uk-flex-middle uk-flex-column" }, index.h("div", { class: "uk-text-center" }, index.h("span", { class: "ks-text-decorated uk-h1 uk-text-bold" }, "Zosta\u0142e\u015B pomy\u015Blnie zalogowany"), index.h("br", null), index.h("p", null, this.message)), index.h("div", { class: "uk-margin-top" }, index.h("button", { onClick: () => this.ToCart(), class: "uk-button uk-button-secondary", style: { padding: "5px 15px" } }, "Wr\u00F3\u0107 do koszyka"), index.h("button", { onClick: () => this.ToConfirmation(), class: "uk-button uk-button-danger", style: { padding: "5px 15px" } }, "Do potwierdzenia")))))));
  }
  get root() { return index.getElement(this); }
};

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

const OrderProgress = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mobile = false;
  }
  componentDidLoad() {
    this.root.style.display = "block";
    this.root.style.width = "100%";
  }
  resizeHandler() {
    this.mobile = window.innerWidth < 800 ? true : false;
  }
  componentWillLoad() {
    this.resizeHandler();
  }
  StepStyle(step) {
    const tile = {
      padding: this.mobile ? "20px" : "30px",
      backgroundColor: "#252525",
      color: "white",
      borderLeft: "1px solid #404040"
    };
    const active = Object.assign(Object.assign({}, tile), { backgroundColor: "#404040", borderLeft: "1px solid #404040" });
    if (this.mobile)
      return tile;
    if (step == this.current)
      return active;
    else
      return tile;
  }
  render() {
    return [
      index.h("div", { class: "uk-text-center uk-flex uk-flex-evenly ks-text-decorated " + (this.mobile ? "uk-child-width-1-1" : "uk-child-width-1-3"), style: { fontSize: "16px", backgroundColor: "#252525" } }, !this.mobile || this.current == 0 ?
        index.h("div", { style: this.StepStyle(0) }, index.h("span", { "uk-icon": "icon: cart; ratio: 1.2", style: { marginRight: "5px", transform: "translateY(-3px)" } }), " Koszyk")
        : null, !this.mobile || this.current == 1 ?
        index.h("div", { style: this.StepStyle(1) }, index.h("span", { "uk-icon": "icon: user; ratio: 1.2", style: { marginRight: "5px", transform: "translateY(-2px)" } }), " Dane do wys\u0142ki")
        : null, !this.mobile || this.current == 2 ?
        index.h("div", { style: this.StepStyle(2) }, index.h("span", { "uk-icon": "icon: check; ratio: 1.2", style: { marginRight: "5px", transform: "translateY(-1px)" } }), " Potwierdzenie")
        : null)
    ];
  }
  get root() { return index.getElement(this); }
};

const OrderSeparator = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.dark = false;
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  render() {
    const bgColor = this.dark ? "#404040" : "#dadada";
    return (index.h("hr", { class: "uk-margin-remove", style: { borderColor: bgColor } }));
  }
  get root() { return index.getElement(this); }
};

const OrderSummaryContainer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.heading = "";
    this.returnHeading = "";
    this.returnLink = "";
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  render() {
    return [
      index.h("div", { class: "uk-padding-small uk-padding@s uk-margin-bottom" }, index.h("div", { class: "uk-text-center uk-text-bold ks-text-decorated uk-margin-medium-bottom uk-margin-top", style: { fontSize: "26px" } }, this.heading), index.h("div", { style: { maxWidth: "700px", margin: "auto" }, "uk-margin": true }, index.h("slot", null))),
      index.h("a", { href: this.returnLink, class: "uk-button uk-button-secondary uk-width-1-1 uk-width-expand@m ks-text-decorated", style: { fontSize: "24px", fontWeight: "700", padding: "20px" } }, this.returnHeading)
    ];
  }
  get root() { return index.getElement(this); }
};

const OrderSummaryField = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.dark = false;
    this.large = false;
    this.single = false;
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  render() {
    const bgColor = this.dark ? "#252525" : "#f2f2f2";
    const color = this.dark ? "white" : "inherit";
    const font = this.large ? "20px" : "inherit";
    if (this.single)
      return (index.h("div", { class: "uk-padding-small " + (this.large ? "ks-text-decorated" : ""), style: { backgroundColor: bgColor, color: color, fontSize: font } }, index.h("slot", null)));
    return (index.h("div", { class: "uk-padding-small uk-flex uk-flex-wrap uk-child-width-1-1 uk-child-width-auto@m uk-flex-between " + (this.large ? "ks-text-decorated" : ""), style: { backgroundColor: bgColor, color: color, fontSize: font } }, index.h("div", { class: "uk-text-center uk-text-left@m", style: { minWidth: "150px" } }, index.h("slot", { name: "left" })), index.h("div", { class: "uk-text-center uk-text-right@m" }, index.h("slot", { name: "right" }))));
  }
  get root() { return index.getElement(this); }
};

const OrderPayU = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.unique = "";
    this.text = "";
    this.image = "";
    this.color = "";
    this.hover = "";
    this.active = "";
  }
  componentWillLoad() {
    this.unique = Math.random().toString(36).replace('0.', '');
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  render() {
    return (index.h("div", { class: "uk-flex uk-flex-center" }, index.h("style", { innerHTML: `
                    .ks-order-summary-payment-${this.unique} {
                        background-color: ${this.color};
                        color: white;
                    }
                    .ks-order-summary-payment-${this.unique}:hover {
                        background-color: ${this.hover};
                    }
                    .ks-order-summary-payment-${this.unique}:active {
                        background-color: ${this.active};
                    }
                ` }), index.h("button", { type: "submit", class: `uk-button uk-button-pill uk-flex uk-flex-middle uk-flex-center ks-text-decorated ks-order-summary-payment-${this.unique}`, style: { fontSize: "20px", padding: "5px 20px 5px 20px" } }, index.h("div", null, this.text), index.h("ks-image", { src: this.image, width: "150", height: "50", class: "uk-visible@s" }))));
  }
  get root() { return index.getElement(this); }
};

const OrderChoice = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  CheckHandler() {
    const inputs = document.querySelectorAll(`input[name=${this.name}]`);
    const thisInput = this.root.querySelector("input");
    inputs.forEach((input) => {
      if (input == thisInput)
        this.active = thisInput.checked;
      else {
        const parent = input.parentElement.parentElement;
        parent.active = input.checked;
      }
    });
  }
  componentDidLoad() {
    this.root.style.display = "inline-block";
  }
  render() {
    const style = {
      fontSize: "18px",
      padding: "8px",
      backgroundColor: this.active ? "#252525" : "#F2F2F2",
      color: this.active ? "white" : "black",
      transition: "background-color ease 0.15s, color ease 0.15s"
    };
    return (index.h("label", null, index.h("input", { hidden: true, type: "radio", name: this.name, value: this.value, checked: this.active, onChange: () => this.CheckHandler() }), index.h("div", { class: "ks-text-decorated uk-text-bold uk-width-1-1 uk-text-center", style: style }, this.text)));
  }
  get root() { return index.getElement(this); }
};

const OrderToggleSection = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.value = "left";
  }
  ChangeHandler() {
    const input = this.root.querySelector(`ks-order-toggle input[name='${this.name}']:checked`);
    this.value = input.value == this.lValue ? "left" : "right";
  }
  componentDidLoad() {
    this.root.style.display = "block";
    this.ChangeHandler();
  }
  render() {
    return (index.h("div", null, index.h("div", { class: "uk-child-width-1-2 uk-flex" }, index.h("ks-order-toggle", { active: this.value == "left", text: this.left, name: this.name, value: this.lValue, onClick: () => this.ChangeHandler() }), index.h("ks-order-toggle", { active: this.value == "right", text: this.right, name: this.name, value: this.rValue, onClick: () => this.ChangeHandler() })), index.h("br", null), index.h("div", { hidden: this.value != "left" }, index.h("slot", { name: "left" })), index.h("div", { hidden: this.value != "right" }, index.h("slot", { name: "right" }))));
  }
  get root() { return index.getElement(this); }
};

const radioTileCss = "ks-radio-tile .hover:hover{background-color:#b2b2b2 !important}";

const RadioTile = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mobile = false;
  }
  CheckHandler() {
    const inputs = document.querySelectorAll(`input[name=${this.name}]`);
    const thisInput = this.root.querySelector("input");
    inputs.forEach((input) => {
      if (input == thisInput)
        this.active = thisInput.checked;
      else {
        const parent = input.parentElement.parentElement;
        parent.active = input.checked;
      }
    });
  }
  componentDidLoad() {
    this.root.style.display = "block";
    this.root.style.width = "100%";
    this.resizeHandler();
    this.MobileWatcher(this.mobile);
  }
  resizeHandler() {
    if (window.innerWidth <= 620)
      this.mobile = true;
    else
      this.mobile = false;
  }
  MobileWatcher(mobile) {
    this.root.style.maxWidth = mobile ? "100%" : "260px";
  }
  render() {
    const mutedColor = "#eeeeee";
    const titleStyle = {
      backgroundColor: this.active ? this.color : "#a7a7a7",
      transition: "background-color 0.3s ease",
      color: "white",
      height: "50px"
    };
    const priceStyle = {
      fontSize: "20px",
      padding: "5px 10px"
    };
    const infoStyle = {
      backgroundColor: mutedColor,
      padding: "8px",
      fontSize: "16px",
      borderTop: "1px solid rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.1s ease-in, color 0.1s ease-in"
    };
    return (index.h("label", null, index.h("input", { hidden: true, type: "radio", name: this.name, value: this.value, onChange: () => this.CheckHandler() }), index.h("div", null, this.price ?
      index.h("div", { class: "uk-flex uk-flex-middle uk-flex-between" + (this.active ? "" : " hover"), style: titleStyle }, index.h("div", { class: "uk-flex-auto" }, index.h("ks-image", { src: this.logo, alt: this.service, width: "130", height: "40" })), index.h("div", { class: "ks-text-decorated uk-text-right", style: priceStyle }, this.price))
      :
        index.h("div", { class: "uk-flex uk-flex-middle uk-flex-center", style: titleStyle }, index.h("ks-image", { src: this.logo, alt: this.service, width: "140", height: "40" })), index.h("div", { class: `uk-flex uk-flex-middle ${this.time ? "uk-flex-between" : "uk-flex-center"}`, style: infoStyle, hidden: this.mobile && !this.active }, index.h("div", null, this.service), index.h("div", { class: "uk-text-right" }, this.time)))));
  }
  get root() { return index.getElement(this); }
  static get watchers() { return {
    "mobile": ["MobileWatcher"]
  }; }
};
RadioTile.style = radioTileCss;

exports.ks_cart_tile = CartTile;
exports.ks_order_address_field = OrderAddressField;
exports.ks_order_address_section = OrderAddressSection;
exports.ks_order_button = OrderButton;
exports.ks_order_button_pair = OrderButtonPair;
exports.ks_order_check_section = OrderCheckSection;
exports.ks_order_confirmation_form = OrderForm;
exports.ks_order_country_select = OrderCountrySelect;
exports.ks_order_document_select = OrderDocumentSelect;
exports.ks_order_enable_section = OrderEnableection;
exports.ks_order_form = OrderForm$1;
exports.ks_order_form_modal = OrderLoginPrompt;
exports.ks_order_guest = OrderGuest;
exports.ks_order_heading = OrderHeading;
exports.ks_order_inpost = OrderInpost;
exports.ks_order_login = OrderLogin;
exports.ks_order_login_prompt = OrderLoginPrompt$1;
exports.ks_order_pocztapunkt = OrderPocztapunkt;
exports.ks_order_progress = OrderProgress;
exports.ks_order_separator = OrderSeparator;
exports.ks_order_summary_container = OrderSummaryContainer;
exports.ks_order_summary_field = OrderSummaryField;
exports.ks_order_summary_payment = OrderPayU;
exports.ks_order_toggle = OrderChoice;
exports.ks_order_toggle_section = OrderToggleSection;
exports.ks_radio_tile = RadioTile;
