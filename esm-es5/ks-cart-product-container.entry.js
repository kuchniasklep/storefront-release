import{r as registerInstance,h,g as getElement}from"./index-22b73bd9.js";import"./state-tunnel-04c0b67a.js";import{T as Tunnel}from"./cartData-c83db97f.js";var CartProductContainer=function(){function t(t){registerInstance(this,t)}t.prototype.render=function(){var t=this;return[h("ks-cart-product-heading",{removable:true}),this.products.map((function(r,e){return h("ks-cart-product",{removable:true,key:r.id,ikey:r.id,name:r.name,link:r.link,img:r.img,price:r.price,amount:r.amount,"max-amount":r.maxAmount,"shipping-time":r.shippingTime,onRemove:function(){return t.RemoveProduct(e)},onCount:function(r){return t.ProductCount(e,r.detail.current,r.detail.last)}})})),h("ks-cart-product-price",{amount:this.productAmount,price:this.productValue,loading:this.loadingProducts,"shipping-time":this.totalShippingTime})]};Object.defineProperty(t.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();Tunnel.injectProps(CartProductContainer,["productValue","productAmount","products","loadingProducts","totalShippingTime","RemoveProduct","ProductCount"]);export{CartProductContainer as ks_cart_product_container};