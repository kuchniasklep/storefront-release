import { r as registerInstance, h } from './index-20a680bb.js';
var Pagination = /** @class */ (function () {
    function Pagination(hostRef) {
        registerInstance(this, hostRef);
        this.base = "";
        this.pattern = "";
        this.space = 6;
        this.edges = true;
    }
    Pagination.prototype.handleResize = function () {
        if (window.innerWidth > 960) {
            this.space = 6;
            this.edges = true;
        }
        else {
            this.space = 4;
            this.edges = false;
        }
    };
    Pagination.prototype.componentWillLoad = function () {
        this.handleResize();
    };
    Pagination.prototype.render = function () {
        var _this = this;
        if (!this.count || !this.current || this.count < 2)
            return;
        var inactive = "uk-button uk-button-default";
        var active = "uk-button uk-button-secondary";
        var style = { width: "42px", height: "42px", backgroundColor: "white" };
        var styleActive = { width: "42px", height: "42px", cursor: "auto" };
        var styleSeparator = { width: "15px" };
        var pages = new Array();
        pages.push(this.current);
        var space = this.space;
        var left = this.current;
        var right = this.current;
        while (space > 0) {
            var leftFinished = false;
            var rightFinished = false;
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
        pages.sort(function (a, b) { return a - b; });
        return (h("div", { class: "uk-flex uk-flex-center uk-flex-middle uk-padding-small uk-margin-remove" }, this.current > 1 ?
            h("a", { href: this.link(this.current - 1), class: inactive, style: style }, h("span", { "uk-icon": "chevron-left" }))
            : null, pages.map(function (page) {
            if (page == _this.current) {
                return h("a", { class: active, style: styleActive }, page);
            }
            if (page == pages[0] && _this.edges) {
                var ret = [h("a", { href: _this.link(1), class: inactive, style: style }, "1")];
                if (page != 1)
                    ret.push(h("div", { style: styleSeparator }));
                return ret;
            }
            if (page == pages[pages.length - 1] && _this.edges) {
                var ret = new Array();
                if (page != _this.count)
                    ret.push(h("div", { style: styleSeparator }));
                ret.push(h("a", { href: _this.link(_this.count), class: inactive, style: style }, _this.count));
                return ret;
            }
            return h("a", { href: _this.link(page), class: inactive, style: style }, page);
        }), this.current < this.count ?
            h("a", { href: this.link(this.current + 1), "aria-label": this.current + 1, class: inactive, style: style }, h("span", { "uk-icon": "icon: chevron-right;" }))
            : null));
    };
    Pagination.prototype.link = function (index) {
        return this.base + this.pattern + index.toString();
    };
    return Pagination;
}());
export { Pagination as ks_pagination };
