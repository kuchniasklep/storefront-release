import{r as registerInstance,g as getElement}from"./index-74ff0cef.js";var ContextConsumer=function(){function e(e){registerInstance(this,e);this.context={};this.renderer=function(){return null}}e.prototype.connectedCallback=function(){if(this.subscribe!=null){this.unsubscribe=this.subscribe(this.el,"context")}};e.prototype.disconnectedCallback=function(){if(this.unsubscribe!=null){this.unsubscribe()}};e.prototype.render=function(){return this.renderer(Object.assign({},this.context))};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();export{ContextConsumer as context_consumer};