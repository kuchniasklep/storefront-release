import { Component, h, Prop, State, Element } from '@stencil/core';
export class ProductYoutube {
    constructor() {
        this.videoId = "";
        this.active = false;
    }
    componentDidLoad() {
        const onIntersection = (entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    if (this.observer) {
                        this.observer.disconnect();
                    }
                    this.active = true;
                }
            }
        };
        addEventListener("load", () => {
            this.observer = new IntersectionObserver(onIntersection, {
                rootMargin: "500px"
            });
            this.observer.observe(this.root);
        });
    }
    render() {
        return (this.active ?
            h("iframe", { src: "https://www.youtube-nocookie.com/embed/" + this.videoId + "?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1", width: "1280", height: "720", frameborder: "0", allowFullScreen: true, "uk-responsive": true })
            : null);
    }
    static get is() { return "ks-product-youtube"; }
    static get properties() { return {
        "videoId": {
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
            "attribute": "video-id",
            "reflect": false,
            "defaultValue": "\"\""
        }
    }; }
    static get states() { return {
        "active": {}
    }; }
    static get elementRef() { return "root"; }
}
