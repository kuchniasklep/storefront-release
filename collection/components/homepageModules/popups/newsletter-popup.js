import { Component, h, Prop, Element, Method } from '@stencil/core';
import ValidateInput from '../../input/validate';
export class NewsletterPopup {
  constructor() {
    this.displayOnLoad = false;
    this.loggedIn = false;
    this.agreement = "Wyrażam zgodę na przetwarzanie danych osobowych do celów marketingowych, w celu zbadania opinii o sklepie oraz na otrzymywanie informacji handlowych na wskazany przeze mnie adres e-mail.";
    this.infoMessage = "Aby otrzymać kupon rabatowy musisz posiadać konto w naszym sklepie. Minimalna wartość zamówienia wynosi: 100,00 zł";
    this.successHeading = "ZAPISANO DO NEWSLETTERA";
    this.faliureHeading = "BŁĄD ZAPISU";
  }
  componentDidLoad() {
    this.dialog = this.root.querySelector("ks-dialog");
    if (this.displayOnLoad && document.cookie.search("newsletterPopup=tak") == -1) {
      setTimeout(() => {
        this.Show();
      }, 4000);
    }
  }
  async requestHandler(event) {
    event.preventDefault();
    if (!await ValidateInput(this.root.querySelector('form')))
      return;
    this.dialog.showLoading();
    const target = event.target;
    const data = new FormData(target);
    data.append("zgoda_newsletter_marketing", "1");
    data.append("zgoda_newsletter_info_handlowa", "1");
    data.append("popup", "1");
    fetch(this.api + "?tok=" + ksNewsletterToken, { body: data, method: "post" })
      .then(async (response) => {
      const result = await response.text();
      if (result.search("SUCCESS") != -1)
        this.dialog.showSuccess(this.successHeading, result.replace("SUCCESS", ""));
      else
        this.dialog.showFailure(this.faliureHeading, result);
    })
      .catch(async (error) => {
      let message = "";
      if (!window.navigator.onLine)
        message = "Brak internetu.";
      if (error.messsage)
        message = error.messsage;
      this.dialog.showFailure(this.faliureHeading, message);
    });
  }
  async Show() {
    this.dialog.show();
  }
  SetCookie() {
    var expiration = "";
    var expirationDate = new Date();
    expirationDate.setMonth(expirationDate.getMonth() + 1);
    expiration = "expires=" + expirationDate.toUTCString() + "; ";
    document.cookie = "newsletterPopup=tak; " + expiration + "path=/";
  }
  render() {
    return [
      h("ks-dialog", { nopadding: true, onClosed: () => this.SetCookie() },
        h("form", { onSubmit: e => this.requestHandler(e) },
          h("div", { class: "info" },
            h("svg", { class: "top", viewBox: "0 0 303 15", width: 909, height: 45 },
              h("text", { x: "0", y: "12" }, "Zapisz si\u0119 do naszego Newslettera i zyskaj")),
            h("svg", { class: "heading", viewBox: "0 0 96 12", width: 960, height: 130 },
              h("text", { x: "-1", y: "12" }, "KUPON 10Z\u0141")),
            h("p", null, this.infoMessage)),
          !this.loggedIn ?
            h("div", { class: "buttons" },
              h("ks-button", { tall: true, name: "ZALOGUJ SI\u0118", link: this.loginLink }),
              h("ks-button", { tall: true, name: "NOWE KONTO", link: this.registerLink }))
            : [
              h("ks-input-check", { large: true, required: true, nomessage: true, name: "zgoda", label: this.agreement }),
              h("div", { class: "email-form" },
                h("ks-input-text", { email: true, required: true, nomessage: true, center: true, name: "email", placeholder: "Adres email", value: this.email ? this.email : null }),
                h("ks-button", { submit: true, name: "ZAPISZ SI\u0118" }))
            ]))
    ];
  }
  static get is() { return "ks-newsletter-popup"; }
  static get originalStyleUrls() { return {
    "$": ["newsletter-popup.css"]
  }; }
  static get styleUrls() { return {
    "$": ["newsletter-popup.css"]
  }; }
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
    "displayOnLoad": {
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
      "attribute": "display-on-load",
      "reflect": false,
      "defaultValue": "false"
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
    },
    "infoMessage": {
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
      "attribute": "info-message",
      "reflect": false,
      "defaultValue": "\"Aby otrzyma\u0107 kupon rabatowy musisz posiada\u0107 konto w naszym sklepie. Minimalna warto\u015B\u0107 zam\u00F3wienia wynosi: 100,00 z\u0142\""
    },
    "successHeading": {
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
      "attribute": "success-heading",
      "reflect": false,
      "defaultValue": "\"ZAPISANO DO NEWSLETTERA\""
    },
    "faliureHeading": {
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
      "attribute": "faliure-heading",
      "reflect": false,
      "defaultValue": "\"B\u0141\u0104D ZAPISU\""
    }
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
}
