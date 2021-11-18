import{c as getRenderingRef,f as forceUpdate}from"./index-7a533c43.js";var appendToMap=function(e,n,r){var t=e.get(n);if(!t){e.set(n,[r])}else if(!t.includes(r)){t.push(r)}};var debounce=function(e,n){var r;return function(){var t=[];for(var o=0;o<arguments.length;o++){t[o]=arguments[o]}if(r){clearTimeout(r)}r=setTimeout((function(){r=0;e.apply(void 0,t)}),n)}};var isConnected=function(e){return!("isConnected"in e)||e.isConnected};var cleanupElements=debounce((function(e){for(var n=0,r=e.keys();n<r.length;n++){var t=r[n];e.set(t,e.get(t).filter(isConnected))}}),2e3);var stencilSubscription=function(){if(typeof getRenderingRef!=="function"){return{}}var e=new Map;return{dispose:function(){return e.clear()},get:function(n){var r=getRenderingRef();if(r){appendToMap(e,n,r)}},set:function(n){var r=e.get(n);if(r){e.set(n,r.filter(forceUpdate))}cleanupElements(e)},reset:function(){e.forEach((function(e){return e.forEach(forceUpdate)}));cleanupElements(e)}}};var createObservableMap=function(e,n){if(n===void 0){n=function(e,n){return e!==n}}var r=new Map(Object.entries(e!==null&&e!==void 0?e:{}));var t={dispose:[],get:[],set:[],reset:[]};var o=function(){r=new Map(Object.entries(e!==null&&e!==void 0?e:{}));t.reset.forEach((function(e){return e()}))};var u=function(){t.dispose.forEach((function(e){return e()}));o()};var i=function(e){t.get.forEach((function(n){return n(e)}));return r.get(e)};var f=function(e,o){var u=r.get(e);if(n(o,u,e)){r.set(e,o);t.set.forEach((function(n){return n(e,o,u)}))}};var a=typeof Proxy==="undefined"?{}:new Proxy(e,{get:function(e,n){return i(n)},ownKeys:function(e){return Array.from(r.keys())},getOwnPropertyDescriptor:function(){return{enumerable:true,configurable:true}},has:function(e,n){return r.has(n)},set:function(e,n,r){f(n,r);return true}});var c=function(e,n){t[e].push(n);return function(){removeFromArray(t[e],n)}};var s=function(n,r){var t=c("set",(function(e,t){if(e===n){r(t)}}));var o=c("reset",(function(){return r(e[n])}));return function(){t();o()}};var v=function(){var e=[];for(var n=0;n<arguments.length;n++){e[n]=arguments[n]}var r=e.reduce((function(e,n){if(n.set){e.push(c("set",n.set))}if(n.get){e.push(c("get",n.get))}if(n.reset){e.push(c("reset",n.reset))}if(n.dispose){e.push(c("dispose",n.dispose))}return e}),[]);return function(){return r.forEach((function(e){return e()}))}};var p=function(e){var n=r.get(e);t.set.forEach((function(r){return r(e,n,n)}))};return{state:a,get:i,set:f,on:c,onChange:s,use:v,dispose:u,reset:o,forceUpdate:p}};var removeFromArray=function(e,n){var r=e.indexOf(n);if(r>=0){e[r]=e[e.length-1];e.length--}};var createStore=function(e,n){var r=createObservableMap(e,n);r.use(stencilSubscription());return r};export{createStore as c};