import { Component, h, State, Element } from '@stencil/core';
import { product } from '../../global/data/product';
export class ProductTab {
  constructor() {
    this.hasMore = false;
    this.expand = false;
  }
  componentWillLoad() {
    const comments = product.get('comments');
    if (comments.entries.length > comments.hideAfter)
      this.hasMore = true;
  }
  render() {
    const comments = product.get('comments');
    return [
      h("div", { class: "message" },
        h("ks-icon", { name: "mail", size: 2.5 }),
        h("p", null, comments.addMessage)),
      comments.entries.slice(0, comments.hideAfter).map(comment => h("ks-comment", { author: comment.author, when: comment.when, innerHTML: comment.content })),
      h("div", { class: "more", hidden: !this.expand }, comments.entries.slice(comments.hideAfter).map(comment => h("ks-comment", { author: comment.author, when: comment.when, innerHTML: comment.content }))),
      this.hasMore ?
        h("button", { onClick: () => this.expand = !this.expand, class: "expand" },
          h("ks-icon", { name: this.expand ? "chevron-up" : "chevron-down", size: 1.5 }))
        : null,
      comments.addLink ?
        h("a", { href: comments.addLink, rel: "nofollow", class: "add", "aria-label": "Napisz recenzj\u0119" },
          h("ks-icon", { name: "plus-circle", size: 1.5 }))
        : null
    ];
  }
  static get is() { return "ks-product-comments"; }
  static get originalStyleUrls() { return {
    "$": ["product-comments.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-comments.css"]
  }; }
  static get states() { return {
    "hasMore": {},
    "expand": {}
  }; }
  static get elementRef() { return "root"; }
}
