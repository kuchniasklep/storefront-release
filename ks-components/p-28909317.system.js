var __spreadArrays=this&&this.__spreadArrays||function(){for(var r=0,n=0,t=arguments.length;n<t;n++)r+=arguments[n].length;for(var e=Array(r),a=0,n=0;n<t;n++)for(var c=arguments[n],s=0,i=c.length;s<i;s++,a++)e[a]=c[s];return e};System.register(["./p-781af923.system.js"],(function(r){"use strict";var n;return{setters:[function(r){n=r.h}],execute:function(){var t=function(r,n){var t=new Map;var e=r;var a=function(r,n){if(Array.isArray(r)){__spreadArrays(r).forEach((function(r){n[r]=e[r]}))}else{n[r]=Object.assign({},e)}};var c=function(r,n){if(!t.has(r)){t.set(r,n);a(n,r)}return function(){if(t.has(r)){t.delete(r)}}};var s=function(r,n){var c=r.state;e=c;t.forEach(a);return n};var i=function(r,t){return n(c,t[0])};var o=function(r,n){var e=r.prototype;var a=e.connectedCallback;var s=e.disconnectedCallback;e.connectedCallback=function(){c(this,n);if(a){return a.call(this)}};e.disconnectedCallback=function(){t.delete(this);if(s){s.call(this)}}};return{Provider:s,Consumer:i,injectProps:o}};var e=r("T",t({},(function(r,t){return n("context-consumer",{subscribe:r,renderer:t})})))}}}));