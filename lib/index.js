!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VUI=e():t.VUI=e()}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){"use strict";function o(t,e,n,o,r,i,u,a){var s,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),u?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},c._ssrRegister=s):r&&(s=a?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),s)if(c.functional){c._injectStyles=s;var f=c.render;c.render=function(t,e){return s.call(e),f(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,s):[s]}return{exports:t,options:c}}n.d(e,"a",(function(){return o}))},function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)};o._withStripped=!0;var r={name:"VButton",props:{color:{type:String,default:"#333"},size:{type:String,default:"normal"},onClick:{type:Function,default:t=>{}}}},i=n(0),u=Object(i.a)(r,o,[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"VButton"},[t._v("我是VButton组件!")])])}],!1,null,"1873303e",null);u.options.__file="packages/components/VButton/src/VButton.vue";var a=u.exports;a.install=t=>{t.component(a.name,a)};e.default=a},function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)};o._withStripped=!0;var r={name:"VInput",data:()=>({}),created(){},mounted(){}},i=n(0),u=Object(i.a)(r,o,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("input",{attrs:{type:"text",value:"v-input"}})])}],!1,null,null,null);u.options.__file="packages/components/VInput/src/VInput.vue";var a=u.exports;a.install=function(t){t.component(a.name,a)};e.default=a},function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(2);const i=[o.default,r.default],u=function(t){u.instaned||(u.instaned=!0,i.forEach((e=>t.use(e))))};"undefined"!=typeof window&&window.Vue&&u(window.Vue),e.default={install:u,...i}}])}));