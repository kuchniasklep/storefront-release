import{c as e}from"./index-689756ca.js";let o;const r=e({loaded:new Promise((e=>{window.addEventListener("load",(function(){e()}))})),resolved:new Promise((e=>o=e)),trackers:[]});function s(e){r.get("resolved").then((()=>{r.get("trackers").forEach((o=>{e(o)}))}))}export{s as e,o as r,r as t}