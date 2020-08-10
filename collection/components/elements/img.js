import { Component, h, Prop, State, Method, Watch, Element } from '@stencil/core';
export class Img {
    constructor() {
        this.sync = false;
        this.vertical = false;
        this.left = false;
        this.right = false;
        this.center = false;
        this.loaded = false;
        this.loadAnimated = false;
    }
    async loadHandler(e) {
        if (e.target instanceof HTMLElement && !e.target.getAttribute("src").includes('data:image'))
            this.loaded = true;
    }
    componentDidUpdate() {
        if (this.loaded && !this.loadAnimated) {
            setTimeout(() => {
                this.loadAnimated = true;
            }, 1000);
        }
    }
    srcListener() {
        const image = this.root.querySelector("img");
        image.removeAttribute("src");
        image.setAttribute("src", this.src);
        setTimeout(() => {
            if (!image.complete) {
                this.loaded = false;
                this.loadAnimated = false;
            }
        }, 200);
    }
    componentDidLoad() {
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
            this.observer = new IntersectionObserver(onIntersection);
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
        const responsive = this.vertical ? "vertical" : "horizontal";
        const loading = this.loadAnimated ? "" : "loading";
        const classes = [responsive].join(" ");
        if (this.sync)
            return (h("img", { class: classes, src: this.src, alt: this.alt }));
        return [
            (!this.loadAnimated ? [
                h("div", { class: "ks-spinner uk-position-center" })
            ] : null),
            h("img", { class: classes + " " + loading, onLoad: (e) => this.loadHandler(e), "data-src": this.src, alt: this.alt })
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
            "reflect": false
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
        }
    }; }
    static get states() { return {
        "loaded": {},
        "loadAnimated": {}
    }; }
    static get methods() { return {
        "loadHandler": {
            "complexType": {
                "signature": "(e: Event) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "Event": {
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
    static get watchers() { return [{
            "propName": "src",
            "methodName": "srcListener"
        }]; }
}
