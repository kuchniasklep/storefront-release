'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');

const Pagination = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.base = "";
        this.pattern = "";
        this.space = 6;
        this.edges = true;
    }
    handleResize() {
        if (window.innerWidth > 960) {
            this.space = 6;
            this.edges = true;
        }
        else {
            this.space = 4;
            this.edges = false;
        }
    }
    componentWillLoad() {
        this.handleResize();
    }
    render() {
        if (!this.count || !this.current || this.count < 2)
            return;
        const inactive = "uk-button uk-button-default";
        const active = "uk-button uk-button-secondary";
        const style = { width: "42px", height: "42px", backgroundColor: "white" };
        const styleActive = { width: "42px", height: "42px", cursor: "auto" };
        const styleSeparator = { width: "15px" };
        let pages = new Array();
        pages.push(this.current);
        let space = this.space;
        let left = this.current;
        let right = this.current;
        while (space > 0) {
            let leftFinished = false;
            let rightFinished = false;
            if (left - 1 > 0) {
                pages.push(left - 1);
                left--;
                space--;
            }
            else
                leftFinished = true;
            if (right + 1 <= this.count) {
                pages.push(right + 1);
                right++;
                space--;
            }
            else
                rightFinished = true;
            if (leftFinished && rightFinished)
                break;
        }
        pages.sort((a, b) => a - b);
        return (index.h("div", { class: "uk-flex uk-flex-center uk-flex-middle uk-padding-small uk-margin-remove" }, this.current > 1 ?
            index.h("a", { href: this.link(this.current - 1), class: inactive, style: style }, index.h("span", { "uk-icon": "chevron-left" }))
            : null, pages.map(page => {
            if (page == this.current) {
                return index.h("a", { class: active, style: styleActive }, page);
            }
            if (page == pages[0] && this.edges) {
                let ret = [index.h("a", { href: this.link(1), class: inactive, style: style }, "1")];
                if (page != 1)
                    ret.push(index.h("div", { style: styleSeparator }));
                return ret;
            }
            if (page == pages[pages.length - 1] && this.edges) {
                let ret = new Array();
                if (page != this.count)
                    ret.push(index.h("div", { style: styleSeparator }));
                ret.push(index.h("a", { href: this.link(this.count), class: inactive, style: style }, this.count));
                return ret;
            }
            return index.h("a", { href: this.link(page), class: inactive, style: style }, page);
        }), this.current < this.count ?
            index.h("a", { href: this.link(this.current + 1), "aria-label": this.current + 1, class: inactive, style: style }, index.h("span", { "uk-icon": "icon: chevron-right;" }))
            : null));
    }
    link(index) {
        return this.base + this.pattern + index.toString();
    }
};

exports.ks_pagination = Pagination;
