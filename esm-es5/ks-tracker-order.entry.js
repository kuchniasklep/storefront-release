import{r as registerInstance}from"./index-f323e182.js";import{e as eachTracker}from"./store-06ef0521.js";import"./index-6478ec90.js";var TrackerOrder=function(){function r(r){registerInstance(this,r);this.checkout=false;this.form=false;this.placed=false;this.currency="PLN"}r.prototype.componentWillLoad=function(){var r=this;var e=typeof this.products=="string"?JSON.parse(this.products):this.products;eachTracker((function(o){if(r.checkout)o===null||o===void 0?void 0:o.order_checkout(e,r.value,r.currency);else if(r.form)o===null||o===void 0?void 0:o.order_form(e,r.value,r.currency);else if(r.placed)o===null||o===void 0?void 0:o.order_placed(e,r.value,r.currency)}))};return r}();export{TrackerOrder as ks_tracker_order};