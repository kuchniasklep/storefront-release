import{r as registerInstance}from"./index-a14dfead.js";import{e as eachTracker}from"./tracker-dce0f039.js";import"./index-c53317e0.js";var TrackerPageView=function(){function e(e){registerInstance(this,e);this.eventId=""}e.prototype.componentWillLoad=function(){var e=this;eachTracker((function(r){return r===null||r===void 0?void 0:r.pageview(e.eventId)}))};return e}();export{TrackerPageView as ks_tracker_pageview};