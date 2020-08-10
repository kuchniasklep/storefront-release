import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
var ProductYoutube = /** @class */ (function () {
    function ProductYoutube(hostRef) {
        registerInstance(this, hostRef);
        this.videoId = "";
        this.active = false;
    }
    ProductYoutube.prototype.componentDidLoad = function () {
        var _this = this;
        var onIntersection = function (entries) {
            for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                var entry = entries_1[_i];
                if (entry.isIntersecting) {
                    if (_this.observer) {
                        _this.observer.disconnect();
                    }
                    _this.active = true;
                }
            }
        };
        addEventListener("load", function () {
            _this.observer = new IntersectionObserver(onIntersection, {
                rootMargin: "500px"
            });
            _this.observer.observe(_this.root);
        });
    };
    ProductYoutube.prototype.render = function () {
        return (this.active ?
            h("iframe", { src: "https://www.youtube-nocookie.com/embed/" + this.videoId + "?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1", width: "1280", height: "720", frameborder: "0", allowFullScreen: true, "uk-responsive": true })
            : null);
    };
    Object.defineProperty(ProductYoutube.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return ProductYoutube;
}());
export { ProductYoutube as ks_product_youtube };
