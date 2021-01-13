import { Component, h, Prop, State, Element, Method, Listen } from '@stencil/core';
export class NewsletterPopup {
  constructor() {
    this.loggedIn = false;
    this.agreement = "Wyrażam zgodę na przetwarzanie danych osobowych do celów marketingowych, w celu zbadania opinii o sklepie oraz na otrzymywanie informacji handlowych na wskazany przeze mnie adres e-mail.";
    this.mobile = false;
    this.loading = false;
    this.success = false;
    this.failure = false;
    this.message = "";
  }
  resizeHandler() {
    if (window.innerWidth <= 700)
      this.mobile = true;
    else
      this.mobile = false;
  }
  requestHandler(event) {
    event.preventDefault();
    this.loading = true;
    const target = event.target;
    const data = new FormData(target);
    data.append("zgoda_newsletter_marketing", "1");
    data.append("zgoda_newsletter_info_handlowa", "1");
    data.append("popup", "1");
    fetch(this.api + "?tok=" + ksNewsletterToken, { body: data, method: "post" })
      .then(async (response) => {
      const result = await response.text();
      if (result.search("SUCCESS") != -1)
        this.success = true;
      else
        this.failure = true;
      this.message = result.replace("SUCCESS", "");
    });
  }
  async Show() {
    if (this.success || this.failure) {
      this.loading = false;
      this.success = false;
      this.failure = false;
    }
    const element = document.querySelector("#ksNewsletterModal");
    UIkit.modal(element).show();
  }
  SetCookie() {
    var expiration = "";
    var expirationDate = new Date();
    expirationDate.setMonth(expirationDate.getMonth() + 1);
    expiration = "expires=" + expirationDate.toUTCString() + "; ";
    document.cookie = "newsletterPopup=tak; " + expiration + "path=/";
  }
  componentDidLoad() {
    this.resizeHandler();
    if (document.cookie.search("newsletterPopup=tak") == -1) {
      setTimeout(() => {
        this.Show();
      }, 4000);
    }
  }
  render() {
    const closeVisibility = !this.loading || this.success || this.failure;
    return [
      h("div", { id: "ksNewsletterModal", class: this.mobile ? "uk-modal-full" : "uk-modal-container", "uk-modal": "bg-close: false; esc-close; false;" },
        h("div", { class: "uk-modal-dialog uk-margin-auto-vertical uk-flex uk-flex-column", style: this.mobile ? { height: "100%" } : { width: "720px" } },
          closeVisibility ?
            h("button", { class: "uk-modal-close-default", type: "button", onClick: () => this.SetCookie(), "uk-close": true })
            : null,
          h("div", { class: "uk-flex-1", style: { padding: "60px 60px 40px 60px", fill: "#252525" } },
            h("svg", { class: "uk-visible@s", viewBox: "0 0 303 15", style: { width: "100%", marginBottom: "20px" } },
              h("text", { x: "0", y: "12" }, "Zapisz si\u0119 do naszego Newslettera i zyskaj")),
            h("svg", { class: "ks-text-decorated", viewBox: "0 0 98 15", style: { width: "100%" } },
              h("text", { x: "0", y: "12" }, "KUPON 10Z\u0141")),
            h("p", { class: "uk-text-center", style: { marginTop: "20px" } }, "Aby otrzyma\u0107 kupon rabatowy musisz posiada\u0107 konto w naszym sklepie. Minimalna warto\u015B\u0107 zam\u00F3wienia wynosi: 100,00 z\u0142")),
          !this.loggedIn ?
            h("div", { class: "uk-child-width-1-1 uk-child-width-1-2@s" },
              h("a", { href: this.loginLink, class: "uk-button uk-button-secondary", style: { padding: "8px 20px" } }, "ZALOGUJ SI\u0118"),
              h("a", { href: this.registerLink, class: "uk-button uk-button-secondary", style: { padding: "8px 20px" } }, "NOWE KONTO"))
            :
              h("form", { onSubmit: e => this.requestHandler(e) },
                h("label", { class: "uk-flex uk-flex-middle uk-text-small", style: { padding: "10px 15px" } },
                  h("input", { class: "uk-checkbox", type: "checkbox", required: true, name: "zgoda", style: { padding: "15px 15px", marginRight: "10px" } }),
                  h("p", null, this.agreement)),
                h("div", { class: "uk-flex uk-text-center" },
                  h("input", { class: "uk-input uk-width-expand", style: { height: "52px" }, type: "email", name: "email", required: true, placeholder: "Adres email", value: this.email ? this.email : null }),
                  h("input", { class: "uk-button uk-button-secondary uk-width-auto", style: { padding: "5px 50px" }, type: "submit", value: "ZAPISZ SI\u0118" }))),
          this.loading ?
            h("div", { class: "uk-overlay uk-overlay-default uk-position-cover" },
              h("div", { class: "uk-position-center" },
                h("div", { "uk-spinner": "ratio: 3" })))
            : null,
          this.success ?
            h("div", { class: "uk-overlay uk-overlay-default uk-position-cover uk-animation-fade uk-animation-fast", style: { backgroundColor: "white" } },
              h("div", { class: "uk-position-center uk-text-center uk-padding-small" },
                h("span", { "uk-icon": "icon: check; ratio: 4", class: "uk-animation-slide-top-small" }),
                h("p", { class: "ks-text-decorated uk-animation-slide-top-small", innerHTML: this.message })))
            : null,
          this.failure ?
            h("div", { class: "uk-overlay uk-overlay-default uk-position-cover uk-animation-fade uk-animation-fast", style: { backgroundColor: "white" } },
              h("div", { class: "uk-position-center uk-text-center uk-padding-small" },
                h("span", { "uk-icon": "icon: ban; ratio: 4", class: "uk-animation-slide-top-small" }),
                h("p", { class: "uk-h1 ks-text-decorated uk-animation-slide-top-small", innerHTML: this.message })))
            : null))
    ];
  }
  static get is() { return "ks-newsletter-popup"; }
  static get properties() { return {
    "api": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "api",
      "reflect": false
    },
    "loginLink": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "login-link",
      "reflect": false
    },
    "registerLink": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "register-link",
      "reflect": false
    },
    "loggedIn": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "logged-in",
      "reflect": false,
      "defaultValue": "false"
    },
    "email": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "email",
      "reflect": false
    },
    "agreement": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "agreement",
      "reflect": false,
      "defaultValue": "\"Wyra\u017Cam zgod\u0119 na przetwarzanie danych osobowych do cel\u00F3w marketingowych, w celu zbadania opinii o sklepie oraz na otrzymywanie informacji handlowych na wskazany przeze mnie adres e-mail.\""
    }
  }; }
  static get states() { return {
    "mobile": {},
    "loading": {},
    "success": {},
    "failure": {},
    "message": {}
  }; }
  static get methods() { return {
    "Show": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "root"; }
  static get listeners() { return [{
      "name": "resize",
      "method": "resizeHandler",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
