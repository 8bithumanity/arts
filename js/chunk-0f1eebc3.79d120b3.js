(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f1eebc3"],{"0457":function(t,e,c){"use strict";c("51c4")},"51c4":function(t,e,c){},"54cf":function(t,e,c){"use strict";c("5fe2")},"5fe2":function(t,e,c){},"94eb":function(t,e,c){"use strict";c("d8a8")},b789:function(t,e,c){"use strict";c.r(e);var s=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"cart-page"},[c("h1",[t._v("Cart ")]),c("div",{staticClass:"cart"},[c("CartTable"),c("CartSidebar")],1)])},r=[],a=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"table-wrapper"},[c("vs-table",{attrs:{striped:"",data:t.cart},scopedSlots:t._u([{key:"thead",fn:function(){return[c("vs-tr",[t.cart.length?c("vs-th",[c("vs-checkbox",{attrs:{indeterminate:t.selected.length===t.cart.length},on:{change:function(e){t.selected=t.$vs.checkAll(t.selected,t.cart)}},model:{value:t.is_all_checked,callback:function(e){t.is_all_checked=e},expression:"is_all_checked"}})],1):t._e(),t.selected.length?[c("vs-th",[c("vs-button",{attrs:{flat:"",size:"small"},on:{click:t.removeSelected}},[t._v("Remove")])],1),c("vs-th"),c("vs-th")]:[c("vs-th",[t._v("Title")]),c("vs-th",[t._v("Description")]),c("vs-th",[t._v("Price")])]],2)]},proxy:!0},{key:"tbody",fn:function(){return t._l(t.cart,(function(e,s){return c("vs-tr",{key:s,attrs:{data:e,"is-selected":!!t.selected.find((function(t){return t.id===e.id}))}},[c("vs-td",{attrs:{checkbox:""}},[c("vs-checkbox",{attrs:{val:e},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),c("vs-td",[t._v(t._s(e.name))]),c("vs-td",[t._v(t._s(e.teaser))]),c("vs-td",[t._v(t._s(t._f("price")(e.price)))])],1)}))},proxy:!0}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)},i=[],n={name:"CartTable",computed:{cart(){return this.$store.getters["cart/cart"]}},data(){return{is_all_checked:!1,selected:[]}},methods:{removeSelected(){for(let t of this.selected)this.selected=this.selected.filter(e=>e.id!==t.id),this.$store.commit("cart/remove_product_from_cart",t.id)}}},o=n,l=(c("94eb"),c("2877")),u=Object(l["a"])(o,a,i,!1,null,"885afcd8",null),d=u.exports,h=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("SidebarWrapper",[c("h4",{staticClass:"m-b-10"},[t._v("Total")]),c("div",{staticClass:"total m-b-15"},[t._v(t._s(t._f("price")(t.total)))]),c("div",{staticClass:"flex gap-10"},[c("vs-button",{attrs:{loading:t.checking_out},on:{click:function(e){return t.checkout()}}},[t._v("Checkout")]),c("vs-button",{attrs:{transparent:""},on:{click:function(e){return t.clear()}}},[t._v("Clear")])],1)])},v=[],f={name:"CartSidebar",computed:{total(){return this.$store.getters["cart/total"]}},data(){return{checking_out:!1}},methods:{async checkout(){this.checking_out=!0,await new Promise(t=>setTimeout(t,1e3)),this.checking_out=!1,this.$store.dispatch("cart/clear"),this.$router.push("/"),this.$vs.notification({color:"success",position:"top-right",title:"Thanks for your purchase!",text:"We've sent your courses on your email 🥸"})},clear(){this.$store.dispatch("cart/clear"),this.$router.push("/"),this.$vs.notification({color:"warning",position:"top-right",title:"Cart has been emptied"})}}},_=f,p=(c("0457"),Object(l["a"])(_,h,v,!1,null,"1f51f8d7",null)),b=p.exports,m={name:"Cart",components:{CartTable:d,CartSidebar:b}},k=m,g=(c("54cf"),Object(l["a"])(k,s,r,!1,null,"75e257b0",null));e["default"]=g.exports},d8a8:function(t,e,c){}}]);
//# sourceMappingURL=chunk-0f1eebc3.79d120b3.js.map