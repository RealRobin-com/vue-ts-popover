!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):"object"==typeof exports?exports["vue-ts-popover"]=t(require("vue")):e["vue-ts-popover"]=t(e.vue)}(window,function(n){return i={},r.m=o=[function(e,t,n){var o=n(3);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(6).default)("24dd245c",o,!0,{})},function(e,t){e.exports=n},function(e,t,n){"use strict";var o=n(0);n.n(o).a},function(e,t,n){(e.exports=n(4)(!1)).push([e.i,".vue-popover{display:block;position:absolute;background:#fff;box-shadow:0px 4px 20px 0px rgba(52,73,94,0.2);padding:5px;border-radius:5px;z-index:998}.vue-popover:before{display:block;position:absolute;width:0;height:0;content:''}.vue-popover.dropdown-position-bottom:before{border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #fff;top:-6px;left:calc(50% - 6px);filter:drop-shadow(0px -2px 2px rgba(52,73,94,0.1))}.vue-popover.dropdown-position-top:before{border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid #fff;bottom:-6px;left:calc(50% - 6px);filter:drop-shadow(0px 2px 2px rgba(52,73,94,0.1))}.vue-popover.dropdown-position-left:before{border-top:6px solid transparent;border-bottom:6px solid transparent;border-left:6px solid #fff;right:-6px;top:calc(50% - 6px);filter:drop-shadow(2px 0px 2px rgba(52,73,94,0.1))}.vue-popover.dropdown-position-right:before{border-top:6px solid transparent;border-bottom:6px solid transparent;border-right:6px solid #fff;left:-6px;top:calc(50% - 6px);filter:drop-shadow(-2px 0px 2px rgba(52,73,94,0.1))}\n",""])},function(e,t,n){"use strict";e.exports=function(n){var s=[];return s.toString=function(){return this.map(function(e){var t=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(o),i=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[n].concat(i).concat([r]).join("\n")}return[n].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},s.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var r=this[o][0];null!=r&&(n[r]=!0)}for(o=0;o<e.length;o++){var i=e[o];null!=i[0]&&n[i[0]]||(t&&!i[2]?i[2]=t:t&&(i[2]="("+i[2]+") and ("+t+")"),s.push(i))}},s}},function(e,t,n){"use strict";n.r(t);var o=n(1),r=new(n.n(o).a);function y(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function s(t,e){var n,o=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,n)),o}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g={left:[-1,0],right:[1,0],top:[0,1],bottom:[0,-1]},u={name:"Popover",props:{name:{type:String,required:!0},delay:{type:Number,default:0},transition:{type:String},width:{type:Number,default:181},pointer:{type:Boolean,default:!0},event:{type:String,default:"click"},anchor:{type:Number,default:.5,validator:function(e){return 0<=e&&e<=1}}},data:function(){return{visible:!1,zIndex:1,positionClass:"",fixedParents:[],position:{left:0,top:0}}},mounted:function(){r.$on(this.showEventName,this.showEventListener),r.$on(this.hideEventName,this.hideEventListener)},beforeDestroy:function(){r.$off(this.showEventName,this.showEventListener),r.$off(this.hideEventName,this.hideEventListener)},computed:{showEventName:function(){return"show:".concat(this.event)},hideEventName:function(){return"hide:".concat(this.event)},className:function(){return["vue-popover",this.pointer&&this.positionClass]},style:function(){var e=this.width,t=this.zIndex,n=0<this.fixedParents.length,o=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach(function(e){a(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({width:"".concat(e,"px"),zIndex:t},this.position);return n&&(o.position="fixed"),o}},methods:{showEventListener:function(t){var e,n,o=this;this.visible?r.$emit(this.hideEventName):(e=t.name,n=t.position,e===this.name&&(this.timeout=setTimeout(function(){o.positionClass="dropdown-position-".concat(n),o.visible=!0,o.$nextTick(function(){o.$emit("show",t),o.$nextTick(function(){var e=o.getDropdownPosition(t);o.position={left:"".concat(e.left,"px"),top:"".concat(e.top,"px")}})})},Math.max(this.delay,0))))},hideEventListener:function(e){this.timeout&&clearTimeout(this.timeout),this.visible&&(this.visible=!1,this.$emit("hide",e))},getDropdownPosition:function(e){var t,n=e.target,o=e.position,r=g[o],i=this.$refs.dropdown,s=n.getBoundingClientRect(),a=i.getBoundingClientRect();this.fixedParents=(t=[],function(e,t){for(var n=e;t&&n.parentNode&&"BODY"!==n.parentNode.tagName;)t(n),n=n.parentNode}(n,function(e){"fixed"===window.getComputedStyle(e).position&&t.push(e)}),t);var u=e.zIndex?e.zIndex:function(e){return(0<arguments.length&&void 0!==e?e:[]).reduce(function(e,t){var n=parseInt(getComputedStyle(t)["z-index"])||1;return Math.max(e,n)},1)}([n].concat(y(this.fixedParents)))+1;this.zIndex=u;var p,c,d=s.left,l=s.top;0===this.fixedParents.length&&(p=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,c=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,d=s.left+c,l=s.top+p);var f=.5*(a.height+s.height),v=d-.5*(a.width-s.width),h=l+s.height-f,m=.5*r[0]*(a.width+s.width),b=r[1]*f;return this.pointer&&(m+=6*r[0],b+=6*r[1]),{left:Math.round(v+m),top:Math.round(h-b)}}}};n(2);function p(e,t,n,o,r,i,s,a){var u,p,c,d="function"==typeof e?e.options:e;return t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),o&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},d._ssrRegister=u):r&&(u=a?function(){r.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:r),u&&(d.functional?(d._injectStyles=u,p=d.render,d.render=function(e,t){return u.call(t),p(e,t)}):(c=d.beforeCreate,d.beforeCreate=c?[].concat(c,u):[u])),{exports:e,options:d}}var c=p(u,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:e.transition}},[e.visible?n("div",{ref:"dropdown",class:e.className,style:e.style,attrs:{"data-popover":this.name},on:{click:function(e){e.stopPropagation()}}},[e._t("default")],2):e._e()])},[],!1,null,null,null).exports,d=p({name:"Tooltip",props:{event:{type:String,default:"hover"},pointer:{type:Boolean,default:!1},width:{type:Number,default:160}},data:function(){return{value:""}}},function(){var t=this,e=t.$createElement;return(t._self._c||e)("popover",{attrs:{name:"tooltip",pointer:t.pointer,width:t.width,event:t.event},on:{show:function(e){t.value=e.value}}},[t._v("\n  "+t._s(t.value)+"\n")])},[],!1,null,null,null).exports;function l(t,e){var n,o=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,n)),o}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach(function(e){v(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e){var t,n=e.arg,o=void 0===n?"":n,r=e.modifiers,i=void 0===r?{}:r,s=e.value,a=void 0===s?{}:s,u=Object.keys(i);return{name:"object"===h(a)&&a.name?a.name:o,position:(t=u,(Array.isArray(t)&&0<t.length?t[0]:null)||a.position||"bottom"),value:a}}function b(n,o){function e(e){r.$emit("show:click",f(f({},o),{},{target:n,srcEvent:e})),document.addEventListener("click",function e(t){r.$emit("hide:click",f(f({},o),{},{target:n,srcEvent:t})),document.removeEventListener("click",e)}),e.stopPropagation()}n.addEventListener("click",e),n.$popoverRemoveClickHandlers=function(){n.removeEventListener("click",e)}}function x(t,n){function e(e){r.$emit("show:hover",f(f({},n),{},{target:t,srcEvent:e}))}function o(e){r.$emit("hide:hover",f(f({},n),{},{target:t,srcEvent:e}))}t.addEventListener("mouseenter",e),t.addEventListener("mouseleave",o),t.$popoverRemoveHoverHandlers=function(){t.removeEventListener("mouseenter",e),t.removeEventListener("mouseleave",o)}}t.default={install:function(e,t){var n=1<arguments.length&&void 0!==t?t:{};document.addEventListener("resize",function(e){r.$emit("hide",{srcEvent:e})}),e.component("Popover",c),e.directive("popover",{bind:function(e,t){var n=m(t);b(e,n),x(e,n)},unbind:function(e){e.$popoverRemoveHoverHandlers(),e.$popoverRemoveClickHandlers()}}),n.tooltip&&e.component("Tooltip",d)}}},function(e,t,n){"use strict";function u(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],s=i[0],a={id:e+":"+r,css:i[1],media:i[2],sourceMap:i[3]};o[s]?o[s].parts.push(a):n.push(o[s]={id:s,parts:[a]})}return n}n.r(t),n.d(t,"default",function(){return v});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var p={},r=o&&(document.head||document.getElementsByTagName("head")[0]),i=null,s=0,c=!1,a=function(){},d=null,l="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(s,e,t,n){c=t,d=n||{};var a=u(s,e);return h(a),function(e){for(var t=[],n=0;n<a.length;n++){var o=a[n];(r=p[o.id]).refs--,t.push(r)}e?h(a=u(s,e)):a=[];for(var r,n=0;n<t.length;n++){if(0===(r=t[n]).refs){for(var i=0;i<r.parts.length;i++)r.parts[i]();delete p[r.id]}}}}function h(e){for(var t=0;t<e.length;t++){var n=e[t],o=p[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(b(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var i=[],r=0;r<n.parts.length;r++)i.push(b(n.parts[r]));p[n.id]={id:n.id,refs:1,parts:i}}}}function m(){var e=document.createElement("style");return e.type="text/css",r.appendChild(e),e}function b(t){var e,n,o,r=document.querySelector("style["+l+'~="'+t.id+'"]');if(r){if(c)return a;r.parentNode.removeChild(r)}return o=f?(e=s++,r=i=i||m(),n=x.bind(null,r,e,!1),x.bind(null,r,e,!0)):(r=m(),n=function(e,t){var n=t.css,o=t.media,r=t.sourceMap;o&&e.setAttribute("media",o);d.ssrId&&e.setAttribute(l,t.id);r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),function(){r.parentNode.removeChild(r)}),n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}var y,g=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function x(e,t,n,o){var r,i,s=n?"":o.css;e.styleSheet?e.styleSheet.cssText=g(t,s):(r=document.createTextNode(s),(i=e.childNodes)[t]&&e.removeChild(i[t]),i.length?e.insertBefore(r,i[t]):e.appendChild(r))}}],r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=5);function r(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}var o,i});
//# sourceMappingURL=index.js.map