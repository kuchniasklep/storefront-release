import{r as registerInstance}from"./index-a14dfead.js";import{e as eachTracker}from"./tracker-dce0f039.js";import"./index-c53317e0.js";var TrackerProduct=function(){function r(r){registerInstance(this,r);this.eventId=""}r.prototype.componentWillLoad=function(){var r=this;eachTracker((function(e){return e===null||e===void 0?void 0:e.search(r.eventId,r.query)}))};return r}();export{TrackerProduct as ks_tracker_search};