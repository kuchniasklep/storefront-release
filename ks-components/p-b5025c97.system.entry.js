System.register(["./p-526368ae.system.js"],(function(e){"use strict";var t,n;return{setters:[function(e){t=e.r;n=e.h}],execute:function(){var i=e("ks_info_banner",function(){function e(e){t(this,e)}e.prototype.disable=function(){var e="ks-info-banner-"+this.name.replace(" ","");sessionStorage.setItem(e,"true")};e.prototype.render=function(){var e=this;var t="ks-info-banner-"+this.name.replace(" ","");var i=sessionStorage.getItem(t);if(i==null)return n("div",{id:t,class:"uk-position-relative",style:{backgroundColor:this.color}},n("a",{href:this.link,"aria-label":this.name},n("div",{class:"uk-flex uk-flex-center"},n("ks-image",{width:"600",height:"100",src:this.image,alt:this.name}))),n("button",{type:"button","aria-label":"Schowaj banner",onClick:function(){return e.disable()},class:"uk-light uk-position-small uk-position-top-right","uk-close":true,"uk-toggle":"target: #"+t}));else return};return e}())}}}));