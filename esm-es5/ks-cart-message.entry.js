import{r as registerInstance,h,H as Host}from"./index-74ff0cef.js";var cartMessageCss="ks-cart-message{display:block;text-align:center;color:white;background-color:var(--color-secondary);overflow:hidden;opacity:0.0;max-height:0px;height:auto;-webkit-transition:opacity 0.5s ease, max-height 0.5s ease;transition:opacity 0.5s ease, max-height 0.5s ease}ks-cart-message.show{opacity:1.0;max-height:100px}ks-cart-message.hide{opacity:0.0;max-height:0px}ks-cart-message>p{margin:10px}";var CartMessage=function(){function e(e){registerInstance(this,e);this.message="";this.visibility="hide";this.messageDelay=""}e.prototype.componentWillLoad=function(){this.watchHandler(this.message)};e.prototype.watchHandler=function(e){var s=this;if(e==""){this.visibility="hide";setTimeout((function(){s.messageDelay=""}),500)}else{this.visibility="show";this.messageDelay=this.message}};e.prototype.render=function(){return h(Host,{class:this.visibility},h("p",null,this.messageDelay))};Object.defineProperty(e,"watchers",{get:function(){return{message:["watchHandler"]}},enumerable:false,configurable:true});return e}();CartMessage.style=cartMessageCss;export{CartMessage as ks_cart_message};