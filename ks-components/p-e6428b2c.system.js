System.register(["./p-781af923.system.js"],(function(e){"use strict";var t,n;return{setters:[function(e){t=e.e;n=e.f}],execute:function(){var r=function(e,t,n){var r=e.get(t);if(!r){e.set(t,[n])}else if(!r.includes(n)){r.push(n)}};var i=function(e,t){var n;return function(){var r=[];for(var i=0;i<arguments.length;i++){r[i]=arguments[i]}if(n){clearTimeout(n)}n=setTimeout((function(){n=0;e.apply(void 0,r)}),t)}};var o=function(e){return!("isConnected"in e)||e.isConnected};var a=i((function(e){for(var t=0,n=e.keys();t<n.length;t++){var r=n[t];e.set(r,e.get(r).filter(o))}}),2e3);var u=function(e){var i=e.on;var o=new Map;if(typeof t==="function"){i("dispose",(function(){o.clear()}));i("get",(function(e){var n=t();if(n){r(o,e,n)}}));i("set",(function(e){var t=o.get(e);if(t){o.set(e,t.filter(n))}a(o)}));i("reset",(function(){o.forEach((function(e){return e.forEach(n)}));a(o)}))}};var f=function(e,t){if(t===void 0){t=function(e,t){return e!==t}}var n=new Map(Object.entries(e!==null&&e!==void 0?e:{}));var r={dispose:[],get:[],set:[],reset:[]};var i=function(){n=new Map(Object.entries(e!==null&&e!==void 0?e:{}));r.reset.forEach((function(e){return e()}))};var o=function(){r.dispose.forEach((function(e){return e()}));i()};var a=function(e){r.get.forEach((function(t){return t(e)}));return n.get(e)};var u=function(e,i){var o=n.get(e);if(t(i,o,e)){n.set(e,i);r.set.forEach((function(t){return t(e,i,o)}))}};var f=typeof Proxy==="undefined"?{}:new Proxy(e,{get:function(e,t){return a(t)},ownKeys:function(e){return Array.from(n.keys())},getOwnPropertyDescriptor:function(){return{enumerable:true,configurable:true}},has:function(e,t){return n.has(t)},set:function(e,t,n){u(t,n);return true}});var c=function(e,t){r[e].push(t);return function(){s(r[e],t)}};var v=function(t,n){var r=c("set",(function(e,r){if(e===t){n(r)}}));var i=c("reset",(function(){return n(e[t])}));return function(){r();i()}};var g=function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}return e.forEach((function(e){if(e.set){c("set",e.set)}if(e.get){c("get",e.get)}if(e.reset){c("reset",e.reset)}}))};return{state:f,get:a,set:u,on:c,onChange:v,use:g,dispose:o,reset:i}};var s=function(e,t){var n=e.indexOf(t);if(n>=0){e[n]=e[e.length-1];e.length--}};var c=function(e,t){var n=f(e,t);u(n);return n};var v=e("s",c({id:"",name:"",breadcrumbs:[],brand:"",brandLink:"",description:"",attributes:[],previousPrice:"",currentPrice:"",shippingPrice:"",shippingTime:"",shippingMessage:"",availability:0,count:1,cartLoading:false,favouritesLoading:false,favouritesCompleted:false,images:[],traitIDs:"",traits:[],catalog:"",model:"",ean:"",negotiate:false,externalPoints:false,reviews:{}}))}}}));