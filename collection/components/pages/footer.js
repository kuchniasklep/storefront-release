import { Component, h } from '@stencil/core';
import { common } from "../../global/data/common";
export class PageFooter {
  render() {
    return h("ks-footer", { "software-link": common.get('softwareLink'), phone: common.get('phone'), email: common.get('email'), time: common.get('workingHours'), company: common.get('company'), address: common.get('address') },
      common.get('social').map(social => h("ks-footer-button", { slot: "social", width: 64, height: 64, href: social.link, image: social.image })),
      common.get('reviewers').map(reviewer => h("ks-footer-button", { slot: "social", width: 64, height: 64, href: reviewer.link, image: reviewer.image })),
      common.get('footerLinks').map(section => h("ks-footer-links", null,
        h("span", { slot: "heading" }, section.name),
        section.items.map(item => h("li", null,
          h("a", { href: item.link }, item.name))))));
  }
  static get is() { return "ks-page-footer"; }
}
