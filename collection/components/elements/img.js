import { Component, h, Prop, State, Watch, Element, Event } from '@stencil/core';
import { window_load } from '../deferredpromise';
export class Img {
  constructor() {
    this.sync = false;
    this.vertical = false;
    this.contained = false;
    this.fill = false;
    this.left = false;
    this.right = false;
    this.center = false;
    this.limit = false;
    this.loaded = false;
  }
  loadHandler(e) {
    if (e.target instanceof HTMLElement && !e.target.getAttribute("src").includes('data:image')) {
      this.loaded = true;
      this.lazyLoaded.emit();
    }
  }
  srcListener() {
    const image = this.root.querySelector("img");
    image.removeAttribute("src");
    image.setAttribute("src", this.src);
    setTimeout(() => {
      if (!image.complete) {
        this.loaded = false;
      }
    }, 200);
  }
  componentDidLoad() {
    if (!this.sync)
      window_load.promise.then(() => this.initializeObserver());
  }
  initializeObserver() {
    this.image = this.root.querySelector('img');
    const target = this.target ? this.root.closest(this.target) : this.root;
    const onIntersection = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          if (this.observer) {
            this.observer.disconnect();
          }
          if (this.image.getAttribute('data-src')) {
            this.image.setAttribute('src', this.image.getAttribute('data-src'));
            this.image.removeAttribute('data-src');
          }
        }
      }
    };
    if (this.image) {
      this.observer = new IntersectionObserver(onIntersection, {
        rootMargin: this.observerMargin
      });
      this.observer.observe(target);
    }
    this.SetAlignment();
  }
  SetAlignment() {
    const float = this.center ? "center" :
      this.right ? "right" :
        this.left ? "left" : "";
    if (float != "")
      this.root.classList.add(float);
  }
  render() {
    const responsive = this.contained ? "contained" :
      this.vertical ? "vertical" : "horizontal";
    const loading = this.loaded ? "" : "loading";
    const classes = [responsive].join(" ");
    const max = this.limit ? { maxWidth: `${this.width}px` } : null;
    if (this.sync)
      return (h("img", { class: classes, src: this.src, alt: this.alt, width: this.width, height: this.height, style: max }));
    if (this.fill)
      return [
        h("canvas", { width: this.width, height: this.height }),
        (!this.loaded ? h("ks-loader", { dark: true }) : null),
        h("img", { class: classes + " " + loading, alt: this.alt, onLoad: (e) => this.loadHandler(e), "data-src": this.src, width: this.width, height: this.height })
      ];
    return [
      (!this.loaded ? h("ks-loader", { dark: true }) : null),
      !this.loaded ? h("canvas", { width: this.width, height: this.height, style: max }) : null,
      h("img", { class: classes + " " + loading, alt: this.alt, onLoad: (e) => this.loadHandler(e), "data-src": this.src, width: this.width, height: this.height, style: max })
    ];
  }
  static get is() { return "ks-img"; }
  static get originalStyleUrls() { return {
    "$": ["img.css"]
  }; }
  static get styleUrls() { return {
    "$": ["img.css"]
  }; }
  static get properties() { return {
    "src": {
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
      "attribute": "src",
      "reflect": true
    },
    "alt": {
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
      "attribute": "alt",
      "reflect": false
    },
    "target": {
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
      "attribute": "target",
      "reflect": false
    },
    "observerMargin": {
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
      "attribute": "observer-margin",
      "reflect": false
    },
    "sync": {
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
      "attribute": "sync",
      "reflect": false,
      "defaultValue": "false"
    },
    "vertical": {
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
      "attribute": "vertical",
      "reflect": false,
      "defaultValue": "false"
    },
    "contained": {
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
      "attribute": "contained",
      "reflect": false,
      "defaultValue": "false"
    },
    "fill": {
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
      "attribute": "fill",
      "reflect": true,
      "defaultValue": "false"
    },
    "left": {
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
      "attribute": "left",
      "reflect": false,
      "defaultValue": "false"
    },
    "right": {
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
      "attribute": "right",
      "reflect": false,
      "defaultValue": "false"
    },
    "center": {
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
      "attribute": "center",
      "reflect": false,
      "defaultValue": "false"
    },
    "width": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "width",
      "reflect": false
    },
    "height": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "height",
      "reflect": false
    },
    "limit": {
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
      "attribute": "limit",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "loaded": {}
  }; }
  static get events() { return [{
      "method": "lazyLoaded",
      "name": "lazyLoaded",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "root"; }
  static get watchers() { return [{
      "propName": "src",
      "methodName": "srcListener"
    }]; }
}
