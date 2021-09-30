import { Component, h, Host } from '@stencil/core';
import { common } from "../../global/data/common";
export class PageHeader {
  render() {
    return h(Host, null,
      h("ks-navbar", null),
      h("ks-newsletter-popup", { api: common.get('newsletterApi'), "login-link": common.get('loginLink'), "register-link": common.get('registerLink') }),
      h("ks-product-suggestions", { api: common.get('suggestionApi') }),
      h("ks-error-popup", null),
      h("ks-message-popup", null),
      h("ks-cookie-popup", { message: common.get('cookieMessage'), button: common.get('cookieButton'), delay: common.get('cookieDelay') }));
  }
  static get is() { return "ks-page-header"; }
}
