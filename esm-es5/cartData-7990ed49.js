var __spreadArrays=this&&this.__spreadArrays||function(){for(var r=0,e=0,n=arguments.length;e<n;e++)r+=arguments[e].length;for(var t=Array(r),a=0,e=0;e<n;e++)for(var c=arguments[e],o=0,i=c.length;o<i;o++,a++)t[a]=c[o];return t};import{h}from"./index-74ff0cef.js";var createProviderConsumer=function(r,e){var n=new Map;var t=r;var a=function(r,e){if(Array.isArray(r)){__spreadArrays(r).forEach((function(r){e[r]=t[r]}))}else{e[r]=Object.assign({},t)}};var c=function(r,e){if(!n.has(r)){n.set(r,e);a(e,r)}return function(){if(n.has(r)){n.delete(r)}}};var o=function(r,e){var c=r.state;t=c;n.forEach(a);return e};var i=function(r,n){return e(c,n[0])};var s=function(r,e){var t=r.prototype;var a=t.connectedCallback;var o=t.disconnectedCallback;t.connectedCallback=function(){c(this,e);if(a){return a.call(this)}};t.disconnectedCallback=function(){n.delete(this);if(o){o.call(this)}}};return{Provider:o,Consumer:i,injectProps:s}};var Tunnel=createProviderConsumer({},(function(r,e){return h("context-consumer",{subscribe:r,renderer:e})}));export{Tunnel as T};