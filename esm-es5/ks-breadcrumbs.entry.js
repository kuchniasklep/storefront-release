import{r as registerInstance,h}from"./index-4f41a852.js";var breadcrumbsCss="ks-breadcrumbs{display:block}";var Breadcrumbs=function(){function e(e){registerInstance(this,e);this.center=false;this.mobile=false}e.prototype.render=function(){var e=this.center?this.mobile?"uk-flex-center uk-flex-left@m":"uk-flex-center":"";return h("ul",{class:"uk-breadcrumb uk-margin-remove "+e},h("slot",null))};return e}();Breadcrumbs.style=breadcrumbsCss;export{Breadcrumbs as ks_breadcrumbs};