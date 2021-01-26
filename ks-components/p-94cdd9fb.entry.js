import{r as t,h as s}from"./p-f748ea6f.js";import{T as i}from"./p-dbb486d9.js";const h=class{constructor(s){t(this,s),this.api="",this.data={},this.productRemove="",this.productCount="",this.addDeal="",this.countryChange="",this.shippingChange="",this.paymentChange="",this.discountCode="",this.discountPoints="",this.discountRemove="",this.RemoveProduct=async t=>{const s=this.data.products[t].id,i=await this.ProductLoadingWrapper((async()=>this.FetchData(this.productRemove,[{key:"id",value:s}])));i&&(0==i.products.length?document.location.reload():this.ShowMessageFromData(i,(async t=>{this.Update(t),"discount"in t==0&&this.RemoveDiscount()})));const h=document.querySelector(`ks-cart-product[ikey="${s}"]`);h&&h.ResetLoading()},this.lastProductCountCall=new Array,this.ProductCount=async(t,s,i)=>{this.lastProductCountCall[t]?this.lastProductCountCall[t]=()=>this.ProductCountCall(t,s,i):(this.lastProductCountCall[t]=()=>{},this.ProductCountCall(t,s,i).then((()=>{this.lastProductCountCall[t]&&(this.lastProductCountCall[t](),this.lastProductCountCall[t]=void 0)})))},this.ProductCountCall=async(t,s,i)=>{const h=this.data.products[t].id,a=await this.ProductLoadingWrapper((async()=>this.FetchData(this.productCount,[{key:"id",value:h},{key:"ilosc",value:s.toString()}])));a?this.ShowMessageFromData(a,(async s=>{"error"in s?(this.Message(s.error.message),await this.Update(this.GetDataWithCorrectedProductAmounts(t,s.error.amount,s.error.maxAmount))):await this.Update(s),"discount"in s==0&&this.RemoveDiscount()})):(this.data=this.GetDataWithCorrectedProductAmounts(t,i),this.SetAmount(i,`ks-cart-product[ikey="${h}"] ks-cart-spinner`))},this.AddDeal=async t=>{const s=await this.ProductLoadingWrapper((async()=>this.FetchData(this.addDeal,[{key:"id",value:t}])));s&&("error"in s?this.Message(s.error.message):this.Update(s))},this.CountryChange=async t=>{this.StartLoading("ks-cart-select-shipping"),this.StartLoading("ks-cart-select-payment"),this.Update(await this.FetchData(this.countryChange,[{key:"data",value:t}])),this.ResetLoading("ks-cart-select-shipping"),this.ResetLoading("ks-cart-select-payment")},this.ShippingChange=async t=>{this.StartLoading("ks-cart-select-payment"),this.Update(await this.FetchData(this.shippingChange,[{key:"data",value:t.toString()}])),this.ResetLoading("ks-cart-select-payment")},this.PaymentChange=async t=>{this.Update(await this.FetchData(this.paymentChange,[{key:"data",value:t.toString()}]))},this.DiscountRemove=async()=>{await this.Update(await this.FetchData(this.discountRemove)),this.RemoveDiscount()},this.DiscountCodeAdd=async t=>{const s=await this.FetchData(this.discountCode,[{key:"data",value:t}]);this.ShowMessageFromData(s,(t=>{this.Update(t)})),this.ResetLoading("ks-cart-discount-code")},this.DiscountPointsAdd=async t=>{const s=await this.FetchData(this.discountPoints,[{key:"data",value:t.toString()}]);this.ScrollToElement("ks-cart-discount-container ks-cart-heading"),this.Update(s),this.ResetLoading("ks-cart-discount-points")}}async componentWillLoad(){const t=await this.FetchData(this.api);this.Update(t),this.data.RemoveProduct=this.RemoveProduct,this.data.ProductCount=this.ProductCount,this.data.AddDeal=this.AddDeal,this.data.CountryChange=this.CountryChange,this.data.ShippingChange=this.ShippingChange,this.data.PaymentChange=this.PaymentChange,this.data.DiscountRemove=this.DiscountRemove,this.data.DiscountCodeAdd=this.DiscountCodeAdd,this.data.DiscountPointsAdd=this.DiscountPointsAdd,this.data.loading=0,this.data.loadingProducts=0}GetDataWithCorrectedProductAmounts(t,s,i){const h=this.data;return h.products[t].amount=s,i&&(h.products[t].maxAmount=i),h}GetDataWithoutProducts(t){const s=t;return delete s.products,s}SetAmount(t,s){const i=document.querySelector(s);i&&"SetAmount"in i&&i.SetAmount(t)}StartLoading(t){const s=document.querySelector(t);s&&"StartLoading"in s&&s.StartLoading()}ResetLoading(t){const s=document.querySelector(t);s&&"ResetLoading"in s&&s.ResetLoading()}ScrollToElement(t){const s=document.querySelectorAll(t);let i=0;2==s.length&&(i=s[1].getBoundingClientRect().top-s[0].getBoundingClientRect().top),i&&window.scrollBy(0,-i)}RemoveDiscount(){const t=this.data;delete t.discount,this.data=t}ShowMessageFromData(t,s){"message"in t?(this.Message(t.message),delete t.message,setTimeout((()=>{s(t)}),200)):s(t)}async ProductLoadingWrapper(t){this.Update({loadingProducts:this.data.loadingProducts+1});const s=await t();return this.Update({loadingProducts:this.data.loadingProducts-1}),s}async FetchData(t,s){const i=new Headers;i.append("pragma","no-cache"),i.append("cache-control","no-cache");let h=null;return s&&s.length>0&&(h=new FormData,s.forEach((t=>{h.append(t.key,t.value)}))),this.Update({loading:this.data.loading+1}),fetch(t,{method:"POST",body:h,headers:i,credentials:"same-origin"}).then((t=>{if(t.ok)return this.Update({loading:this.data.loading-1}),t.json()})).catch((t=>{t&&(this.Update({loading:this.data.loading-1}),this.Message("Błąd sieciowy. Sprawdź połączenie z internetem."))}))}async Update(t){this.data=Object.assign(Object.assign({},this.data),t)}async Message(t){if(!document.querySelector(`ks-alert[message="${t}"]`)){const s=document.createElement("ks-alert");s.setAttribute("message",t),document.body.appendChild(s)}}render(){return s(i.Provider,{state:this.data},s("slot",null))}};export{h as ks_cart}