!function(e){var t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"Collection",(function(){return ye})),r.d(n,"List",(function(){return Oe})),r.d(n,"Observer",(function(){return ve}));var s=function(e){return!Array.isArray(e)&&"object"==typeof e&&e},i=function(e){return typeof e};function a(e,...t){globalThis.WebQitInternalsRegistry||(globalThis.WebQitInternalsRegistry=new Map);var r,n,s=globalThis.WebQitInternalsRegistry.get(e);if(!s){if(s=new Map,!1===t[0])return s;globalThis.WebQitInternalsRegistry.set(e,s)}for(;r=t.shift();)if((n=s)&&!(s=s.get(r))){if(s=new Map,!1===t[0])return s;n.set(r,s)}return s}var o=function(e){return Array.isArray(e)},l=function(e){return"function"==typeof e},u=function(e){return null===e||""===e},c=function(e){return arguments.length&&(void 0===e||void 0===e)},h=function(e){return Array.isArray(e)||"object"==typeof e&&e||l(e)},f=function(e){return l(e)||e&&"[object function]"==={}.toString.call(e)},p=function(e){return e instanceof Number||"number"==typeof e},g=function(e){return p(e)||!0!==e&&!1!==e&&null!==e&&""!==e&&!isNaN(1*e)},d=function(e){return e instanceof String||"string"==typeof e&&null!==e},m=function(e,t=1){var r=0;e.forEach(e=>{r++});var n=e.slice(e.length-r,t);return arguments.length>1?n:n[0]},b=function(e,t=1){return arguments.length>1?m(e.slice().reverse(),t).reverse():m(e.slice().reverse())},v=function(e,...t){return t.forEach(t=>{e.indexOf(t)<0&&e.push(t)}),e},y=function(e,t){var r=[];return function(e,t){t=(t=t||Object.prototype)&&!o(t)?[t]:t;var r=[];for(e=e;e&&(!t||t.indexOf(e)<0)&&"default"!==e.name;)r.push(e),e=e?Object.getPrototypeOf(e):null;return r}(e,t).forEach(e=>{v(r,...Object.getOwnPropertyNames(e))}),r};function w(e,t,r=!1,n=!1,i=!1){var a=0,l=e.shift();if((g(l)||!0===l||!1===l)&&(a=l,l=e.shift()),!e.length)throw new Error("_merge() requires two or more array/objects.");return e.forEach((e,u)=>{(h(e)||f(e))&&(r?y(e):Object.getOwnPropertyNames(e)).forEach(c=>{if(t(c,l,e,u)){var h=l[c],f=e[c];if((o(h)&&o(f)||s(h)&&s(f))&&(!0===a||a>0))l[c]=o(h)&&o(f)?[]:{},w([g(a)?a-1:a,l[c],h,f],t,r,n,i);else if(o(l)&&o(e))n?l[c]=f:l.push(f);else try{i?Object.defineProperty(l,c,Object.getOwnPropertyDescriptor(e,c)):l[c]=e[c]}catch(e){}}})}),l}var O=function(e,t){var r=void 0;return h(e)&&Object.keys(e).forEach((n,s)=>{!1!==r&&(r=t(g(n)?parseFloat(n):n,e[n],s))}),r};new Map;var j=function(...e){return w(e,(e,t,r)=>!0,!1,!1,!1)};function P(e,t,r=null,n=!1){return t.length>e.length?-1:("number"==typeof r?n?e.slice(0,r+1+(r<0?e.length:0)):e.slice(r):e).reduce((e,r,s)=>{var[i,a,o]=e;if(!n&&i>-1)return[i,a,o];var l=o+1,u=r===t[l]?0===l?[s,0]:[a,l]:[-1,-1];return u[1]===t.length-1&&(u[1]=-1,u[0]>-1)?[u[0]].concat(u):[i].concat(u)},[-1,-1,-1])[0]+(n||"number"!=typeof r?0:r>-1?r:e.length-r)}function _(e,t,r=null,n=!1){var s=P(e,t,r,n);return-1===s?[]:e.slice(s+t.length)}var S=function(e,t,r=!1,n=!1,s=!1){if(-1===e.indexOf(t))return r?[]:void 0;var i=!0===r?e.length-1:!1===r?1:r,a=s?e.lastIndexOf(t)+1:e.indexOf(t)+1,o=c(t)?[]:e.slice(a,a+i);return n&&o.length<i&&o.length<e.length&&(f(n)&&!n(i-o.length)||(o=o.concat(e.slice(0,i-o.length)))),r?o:o[0]},E=function(e,t,r=!1,n=!1,s=!1){if(-1===e.indexOf(t))return r?[]:void 0;var i=!0===r?e.length-1:!1===r?1:r,a=(e=e.slice().reverse(),s?e.lastIndexOf(t)+1:e.indexOf(t)+1),o=c(t)?[]:e.slice(a,a+i);return n&&o.length<i&&o.length<e.length&&(f(n)&&!n(i-o.length)||(o=o.concat(e.slice(0,i-o.length)))),r?o:o[0]},x=function(e,t,r,n=!1,s=!1,i=!1){var a=i?e.lastIndexOf(t):e.indexOf(t),o=i?e.lastIndexOf(r):e.indexOf(r);if(n){var l=o>a?a+e.length-o:a-o;return E(e,t,l,e=>f(s)?s(e,"preceeding"):s,i)}l=o<a?e.length-a-1+o+1:o-a;return S(e,t,l,e=>f(s)?s(e,"following"):s,i)},F=function(e,t=!0){return o(e)?e:!t&&s(e)?[e]:!1!==e&&0!==e&&function(e){return u(e)||c(e)||!1===e||0===e||h(e)&&!Object.keys(e).length}(e)?[]:function(e){return!d(e)&&!c(e.length)}(e)?Array.prototype.slice.call(e):s(e)?Object.values(e):[e]},T=function(e,t,r=null){return o(t)?e.filter(e=>r?t.filter(t=>r(e,t)).length:-1===t.indexOf(e)):[]};function D(e,t,r=null){return r||!1!==r&&e.dotSafe&&t.dotSafe?e.join(".")===t.join("."):e.length===t.length&&e.reduce((e,r,n)=>e&&r===t[n],!0)}var k=function(e,t,r=null){return o(t)?e.filter(e=>r?t.filter(t=>r(e,t)).length:-1!==t.indexOf(e)):[]};var I=function(e,t=!1){var r=[];if(e.length)if(e.length%2){var n=Math.round(e.length/2)-1;r=e.slice(n,n+1)}else{n=e.length/2-1;r=e.slice(n,n+2)}return t?r:r[0]},V=function(e,t=1){for(var r=[],n=null;r.length<t&&(n=e[Math.floor(Math.random()*e.length)])&&-1===r.indexOf(n);)r.push(n);return arguments.length>1?r:r[0]};function M(e,t,r=null){return r||!1!==r&&e.dotSafe&&t.dotSafe?(e.join(".")+".").startsWith(t.join(".")+"."):t.reduce((t,r,n)=>t&&r===e[n],!0)}function z(e){return(W(e)?e:F(e).length?[e]:[]).reduce((e,t)=>e.concat([F(t)]),[]).map(e=>A.resolve(e))}class A extends Array{static resolve(e){return e.every(e=>!(e+"").includes("."))?(new A).concat(e):e}get dotSafe(){return!0}}function W(e){return F(e).reduce((e,t)=>e||o(t),!1)}function C(e){return e.filter(e=>e||0===e).length!==e.length}class R{constructor(e){this.target=e,this.fireables=[],this.currentlyFiring=[]}add(e){return this.fireables.push(e),e}remove(e){this.fireables=this.fireables.filter(t=>t!==e)}removeMatches(e){this.match(e).forEach(e=>{this.fireables=this.fireables.filter(t=>t!==e)})}match(e){return this.fireables.filter(t=>{var r=z(t.filter),n=F((t.params||{}).tags),s=z(e.filter),i=F((e.params||{}).tags);return(!e.originalHandler||t.handler===e.originalHandler)&&(!s.length||D(s,r))&&(!i.length||i.length===n.length&&k(n,i).length===i.length)})}static getFirebase(e,t=!0,r=null){var n=this;if(r&&this._namespaces&&this._namespaces.has(r)&&(n=this._namespaces.get(r)),!h(e))throw new Error('Subject must be of type object; "'+i(e)+'" given!');return!a(e,"firebases").has(n)&&t&&a(e,"firebases").set(n,new n(e)),a(e,"firebases").get(n)}static namespace(e,t=null){if(this._namespaces||(this._namespaces=new Map),1===arguments.length)return this._namespaces.get(e);if(!(t.prototype instanceof this))throw new Error(`The implementation of the namespace ${this.name}.${e} must be a subclass of ${this.name}.`);this._namespaces.set(e,t)}}class U{constructor(e,t){this.target=e,this.handler=t.handler,this.filter=t.filter,this.params=t.params}disconnect(){this.disconnected=!0}}class B extends U{fire(e,t,r){return this.disconnected||this.filter&&!k(F(this.filter),[e.type]).length?t(...Array.prototype.slice.call(arguments,2)):this.handler(e,r,t)}}var q=function(e,t=[],r=!0){var n=0;return g(arguments[0])&&h(arguments[1])&&(n=arguments[0],e=arguments[1],t=arguments[2]||[]),w([n,{},e],(e,r,n)=>f(t)?t(e):!o(t)||!t.length||t.indexOf(e)>-1,!1,!1,r)};class Q{constructor(e,t){if(this.target=e,!t.type)throw new Error("Action type must be given in definition!");O(t,(e,t)=>{Object.defineProperty(this,e,{value:t,enumerable:!0})}),Object.seal(this)}}class H extends R{add(e){return super.add(new B(this.target,e))}fire(e,t=null){if(e instanceof Q||(e=new Q(this.target,e)),this.currentlyFiring.filter(t=>t.type===e.type&&t.name===e.name).length)return t?t():void 0;this.currentlyFiring.push(e);const r=(n,...s)=>{var i=this.fireables[n];return i?i.fire(e,(...e)=>r(n+1,...e),...s):t?t(...s):s[0]};var n=r(0);return this.currentlyFiring.pop(),n}}var N=function(e){return a(e,!1).get(e)||e},G=function(e,t,r={},n={}){if(!t||!h(t))throw new Error("Target must be of type object!");t=N(t);var s,i=function(n){return arguments.length?n:Reflect[e](t,...Object.values(r))};return(s=H.getFirebase(t,!1,n.namespace))?s.fire({type:e,...r},i)||[]:i()},L=function(e,t,r,n={}){return G("apply",e,{thisArgument:t,argumentsList:r},n)},K=function(e,t,r=null,n={}){return G("construct",e,arguments.length>2?{argumentsList:t,newTarget:r}:{argumentsList:t},n)};class ${constructor(e,t=!1){this._={},this._.target=e,this._.cancellable=t,this._.propagationStopped=!1,this._.defaultPrevented=!1,this._.promisesInstance=null,this._.promises=[]}get target(){return this._.target}get cancellable(){return this._.cancellable}stopPropagation(){this._.propagationStopped=!0}get propagationStopped(){return this._.propagationStopped}preventDefault(){this._.defaultPrevented=!0}get defaultPrevented(){return this._.defaultPrevented}waitUntil(e){e instanceof Promise&&(this._.promises.push(e),this._.promisesInstance=null)}get promises(){return!this._.promisesInstance&&this._.promises.length&&(this._.promisesInstance=Promise.all(this._.promises)),this._.promisesInstance}respondWith(e){var t,r=s(e)&&!c(e.propagationStopped)&&!c(e.defaultPrevented);!1===e||r&&e.propagationStopped?this.stopPropagation():!1===e||r&&e.defaultPrevented?this.preventDefault():(e instanceof Promise&&(t=e)||r&&(t=e.promises))&&this.waitUntil(t)}}class J extends U{constructor(e,t){if(super(e,t),this.filters2D=z(this.filter),this.filtersIsOriginally2D=W(this.filter),this.filtersIsDynamic=this.filters2D.filter(e=>C(F(e))).length>0,this.filtersIsDynamic&&this.filters2D.length>1)throw new Error('Only one "Dynamic Filter" must be observed at a time! "'+this.filters2D.map(e=>"["+e.join(", ")+"]").join(", ")+'" have been bound together.')}fire(e){if(this.disconnected||this.params.type&&(t=e=>this.params.type===e.type,!e.reduce((e,r,n)=>e||t(r,n),!1)))return;var t;const r=e=>!["set","def"].includes(e.type)||!this.params.diff||(f(this.params.diff)?this.params.diff(e.value,e.oldValue):e.value!==e.oldValue);var n=new $(this.target);if(this.filters2D.length){var i=e.filter(e=>this.filters2D.filter((t,n)=>{var s=t.slice();return this.filtersIsDynamic&&e.path.forEach((e,t)=>{s[t]=s[t]||0===s[t]?s[t]:e}),(!this.filtersIsDynamic||!C(s))&&r(e)&&(!this.params.subtree&&D(s,e.path)||this.params.suptree&&M(s,e.path)&&(!g(this.params.suptree)||_(s,e.path).length<=this.params.suptree)||this.params.subtree&&e.path.length>=s.length&&M(e.path,s)&&(!g(this.params.subtree)||_(e.path,s).length<=this.params.subtree))}).length);if(i.length)if(this.filtersIsOriginally2D||this.params.subtree){var a=i;s(this.filter)&&(a={...this.filter},i.forEach((e,t)=>{a[e.name]=e})),n.respondWith(this.handler(a,n))}else i.forEach((e,t)=>{n.respondWith(this.handler(e,n))})}else(this.params.subtree||e.filter(e=>D(e.path,[e.name])).length===e.length)&&e.filter(e=>r(e)).length&&n.respondWith(this.handler(e,n));return n}}class X{constructor(e,t){if(this.target=e,t.originalSubject||(this.originalSubject=e),!("type"in t))throw new Error("Mutation type must be given in definition!");if(!("name"in t))throw new Error("Property name must be given in definition!");O(t,(e,t)=>{"path"===e&&(t=A.resolve(t)),Object.defineProperty(this,e,{value:t,enumerable:!0})}),this.path||Object.defineProperty(this,"path",{value:A.resolve([t.name]),enumerable:!0}),Object.seal(this)}}class Y extends R{constructor(e){super(e),this.buffers=[]}add(e){return super.add(new J(this.target,e))}fire(e,t){var r=new $(this.target,t);return e=F(e,!1).map(e=>e instanceof X?e:new X(this.target,e)),this.buffers.length?(b(this.buffers)(e),r):(this.currentlyFiring.filter(t=>e.filter(e=>t.type===e.type&&t.name===e.name).length).length,this.fireables.forEach(n=>{if(r.propagationStopped&&t)return r;r.respondWith(n.fire(e))}),r)}}var Z=function(e,t,r=null,n={}){if(!(e=r||e)||!h(e))throw new Error("Target must be of type object!");e=N(e);var s=F(t),i=s.map(t=>{var i,o=function(n){return arguments.length?n:a(e,"accessorizedProps").has(t)&&a(e,"accessorizedProps").get(t).touch(!0)?a(e,"accessorizedProps").get(t).get():r?Reflect.get(e,t,r):Reflect.get(e,t)};return(i=H.getFirebase(e,!0,n.namespace))?i.fire({type:"get",name:t,related:s,receiver:r},o):o()});return o(t)?i:i[0]},ee=function(e,t,r=null,n={}){if(!(e=N(e))||!h(e))throw new Error('Observable subjects must be of type object; "'+i(e)+'" given!');if(f(t)&&(n=arguments.length>2?r:{},r=t,t=null),!f(r))throw new Error('Handler must be a function; "'+i(r)+'" given!');var s,a=Y.getFirebase(e,!0,n.namespace),o={filter:t,handler:r,params:n};if((o.filter||"*"===o.params.subtree||o.params.subtree&&se(e))&&ne(e,o.filter,o.params.subtree,n.namespace),o.params.unique&&(s=a.match({filter:t,params:n})).length){if("replace"!==o.params.unique)return s[0];a.remove(s[0])}return a.add(o)},te=function(e,t,r,n=null,i={}){var a;if(e!==r&&(ee(r,(r,n)=>{if(a=Y.getFirebase(e,!1,i.namespace)){var s=r.map(r=>{var n=r;do{if(n.target===e)return}while(n=n.src);var s={};return O(r,(e,t)=>{"target"!==e&&"name"!==e&&"path"!==e&&"src"!==e&&(s[e]=t)}),s.name=t,s.path=[t].concat(r.path),s.originalSubject=r.originalSubject,s.src=r,new X(e,s)}).filter(e=>e);if(s.length)return a.fire(s,n.cancellable)}},{subtree:!0,...i,unique:!0,tags:[re,t,e]}),s(n)&&(a=Y.getFirebase(e,!1,i.namespace)))){var o=j({name:t,type:"set",value:r,related:[t]},n);let e=a.fire(o,i.cancellable);if(i.eventTypeReturn)return e}};const re={};function ne(e,t=null,r=!1,n=null){if(!e||!h(e))throw new Error("Target must be of type object!");var s=Y.getFirebase(e,!0,n);if(s&&!s.build){s.build=r;var i=z(t),a=!i.length||i.filter(e=>!e[0]&&0!==e[0]).length?Object.keys(e):i.map(e=>e[0]),o=i.length?i.map(e=>e.slice(1)).filter(e=>e.length):null;s.subBuild=o&&o.length?o:null,a.forEach(t=>{var i=Z(e,t,null,{namespace:n});try{h(i)&&(te(e,t,i,null,params),(s.subBuild&&se(i)||(_isFunction(r)?r(i):r&&se(i)))&&ne(i,s.subBuild,r,n))}catch(e){}})}}const se=e=>(e instanceof Object||e instanceof Array||e instanceof Function)&&("undefined"==typeof window||e!==window);var ie=function(e,t,r=null,n={}){if(!(e=N(e))||!h(e))throw new Error('Observable subjects must be of type object; "'+i(e)+'" given!');if(f(t)&&(n=arguments.length>2?r:{},r=t,t=null),r&&!f(r))throw new Error('Handler must be a function; "'+i(r)+'" given!');var s;if(s=Y.getFirebase(e,!1,n.namespace))return s.removeMatches({filter:t,originalHandler:r,params:n})},ae=function(e,t,r,n=null,i={}){var a;if(ie(r,null,null,{...i,tags:[re,t,e]}),s(n)&&(a=Y.getFirebase(e,!1,i.namespace))){var o=j({name:t,type:"del",oldValue:r,related:[t]},n);a.fire(o,i.cancellable)}},oe=function(e,t,r={}){return G("has",e,{name:t},r)},le=function(e,t,r,n={}){t=r.receiver||t;var i=r.keysOrPayload,l=r.value;if(!t||!h(t))throw new Error("Target must be of type object!");s(i)&&(n=l||{},l=null),t=N(t);var u=H.getFirebase(t,!1,n.namespace),c=Y.getFirebase(t,!1,n.namespace);const f=(s,i,o,l)=>{var f,p="set";e&&(p="defineProperty",i=(f=i||{}).value);var g,d=!1;oe(t,s,n)&&(d=!0,g=Z(t,s,r.receiver,n));var m={name:s,type:p,value:i,receiver:r.receiver,related:o,detail:l,isUpdate:d,oldValue:g},b=function(e){if(arguments.length&&(f?f=e:i=e),f){if(a(t,"accessorizedProps",!1).has(s)&&!a(t,"accessorizedProps").get(s).restore())return!1;Object.defineProperty(t,s,f)}else if(a(t,"accessorizedProps",!1).has(s))return a(t,"accessorizedProps").get(s).set(i);return t[s]=i,!0};if(u){var v=f?{type:"defineProperty",name:s,descriptor:f,receiver:r.receiver,related:o,detail:l,isUpdate:d,oldValue:g}:{type:"set",name:s,value:i,receiver:r.receiver,related:o,detail:l,isUpdate:d,oldValue:g};m.success=u.fire(v,b)}else m.success=b();return m.success&&m.value!==m.oldValue&&(h(m.oldValue)&&ae(t,s,m.oldValue,null,n),h(m.value)&&(te(t,s,m.value,null,n),c&&(c.subBuild||c.build&&se(m.value))&&ne(m.value,c.subBuild,c.build,n.namespace))),m};var g,m=[];o(i)||(d(i)||p(i))&&(g=F(i))?m=g.map(e=>f(e,l,g,n.detail)):s(i)&&(g=Object.keys(i))&&(m=g.map(e=>f(e,i[e],g,n.detail)));var b,v=m.filter(e=>!1!==e.success);return c?(b=c.fire(v,n.cancellable)).successCount=v.length:n.eventTypeReturn&&(b=new $(t)),n.eventTypeReturn?b:v.length>0},ue=function(e,t,r=null,n={}){return le(!0,e,{keysOrPayload:t,value:r},n)},ce=function(e,t,r={}){if(!e||!h(e))throw new Error("Target must be of type object!");e=N(e);var n,s,i=F(t),o=i.map(t=>{var n;oe(e,t,r)&&(n=Z(e,t,null,r));var s,o={name:t,type:"deleteProperty",related:i,detail:r.detail,oldValue:n},l=function(r){return arguments.length?r:!(a(e,"accessorizedProps",!1).has(t)&&!a(e,"accessorizedProps").get(t).restore())&&(delete e[t],!0)};return(s=H.getFirebase(e,!1,r.namespace))?o.success=s.fire({type:"deleteProperty",name:t,oldValue:n,related:i},l):o.success=l(),o.success&&h(o.oldValue)&&ae(e,t,o.oldValue,null,r),o}).filter(e=>!1!==e.success);return(n=Y.getFirebase(e,!1,r.namespace))?(s=n.fire(o,r.cancellable)).successCount=o.length:r.eventTypeReturn&&(s=new $(e)),r.eventTypeReturn?s:o.length>0},he=function(e,t,r={}){return G("getOwnPropertyDescriptor",e,{name:t},r)},fe=function(e,t={}){return G("getPrototypeOf",e,{},t)},pe=function(e,t={}){return G("isExtensible",e,{},t)},ge=function(e,t={}){return G("ownKeys",e,{},t)},de=function(e,t={}){return G("preventExtensions",e,{},t)},me=function(e,t,r=null,n=null,s={}){return le(!1,e,arguments.length>3?{keysOrPayload:t,value:r,receiver:n}:{keysOrPayload:t,value:r},s)},be=function(e,t,r={}){return G("setPrototypeOf",e,{prototype:t},r)},ve={apply:L,construct:K,defineProperty:ue,deleteProperty:ce,get:Z,getOwnPropertyDescriptor:he,getPrototypeOf:fe,has:oe,isExtensible:pe,ownKeys:ge,preventExtensions:de,set:me,setPrototypeOf:be,accessorize:function(e,t=[],r={}){r=s(t)?t:r;var n=(1===arguments.length?Object.keys(e):F(t)).map(t=>{if(a(e,"accessorizedProps").has(t)&&a(e,"accessorizedProps").get(t).touch(!0))return!1;const n=()=>{for(var r,n=e;!r&&(n=Object.getPrototypeOf(n));)r=Object.getOwnPropertyDescriptor(n,t);return r};var s,i,o=Object.getOwnPropertyDescriptor(e,t);o||(s={writable:!0,enumerable:!(t in e),configurable:!1!==r.configurable});var l={...o||s};"value"in l&&delete l.value,"writable"in l&&delete l.writable,l.get=()=>{if(u.ongoingGets.length)return u.get();u.ongoingGets.push(1);var n=Z(e,t,null,r);return u.ongoingGets.pop(),n},l.set=n=>{if(u.ongoingSets.length)return u.set(n);u.ongoingSets.push(1);var s=me(e,t,n,null,r);return u.ongoingSets.pop(),s};var u={ongoingGets:[],ongoingSets:[],get:function(){var t=o;return t||(t=i?s:n()||s),t.get?t.get.call(e):t.value},set:function(t){var r=o;return r||(i?r=s:(r=n())?"value"in r&&(r=s,i=!0):(r=s,i=!0)),r.set||r.get?!!r.set&&r.set.call(e,t):(r.value=t,!0)},restore:function(){try{return this.intact()&&(o||i?Object.defineProperty(e,t,o||s):delete e[t],a(e,"accessorizedProps").delete(t)),!0}catch(e){}return!1},intact:function(){return(Object.getOwnPropertyDescriptor(e,t)||{}).get===l.get},touch:function(e=!1){return this.intact()||!!e&&!this.restore()}};try{return Object.defineProperty(e,t,l),a(e,"accessorizedProps").set(t,u),!0}catch(e){}return!1});return o(t)?n:n[0]},unaccessorize:function(e,t=[],r={}){r=s(t)?t:r;var n=(1===arguments.length?Object.keys(e):F(t)).map(t=>!a(e,"accessorizedProps",!1).has(t)||a(e,"accessorizedProps").get(t).restore());return o(t)?n:n[0]},proxy:function(e,t={}){if(!h(e))throw new Error('Object must be of type target; "'+i(e)+'" given!');var r=new Proxy(e,{apply:(e,r,n)=>L(e,r,n,t),construct:(e,r,n=null)=>K(e,r,n,t),defineProperty:(e,r,n)=>ue(e,r,n,t),deleteProperty:(e,r)=>ce(e,r,t),get:(e,n,s=null)=>{var i=Z(e,n,s,t);return!1!==t.proxyAutoBinding&&f(i)&&!function(e){return l(e)&&/^class\s?/.test(Function.prototype.toString.call(e))}(i)?i.bind(r):i},getOwnPropertyDescriptor:(e,r)=>he(e,r,t),getPrototypeOf:e=>fe(e,t),has:(e,r)=>oe(e,r,t),isExtensible:e=>pe(e,t),ownKeys:e=>ge(e,t),preventExtensions:e=>de(e,t),set:(e,r,n,s=null)=>me(e,r,n,s,t),setPrototypeOf:(e,r)=>be(e,r,t)});return a(r).set(r,e),r},unproxy:N,observe:ee,unobserve:ie,intercept:function(e,t,r={}){if(e=N(e),!h(e))throw new Error('Object must be of type target; "'+i(handler)+'" given!');var n={},a=!0;s(t)||(f(t)?t={[null]:t}:f(r)&&(t={[t]:r},r=arguments.length>3?arguments[3]:{}),a=!1);var o=H.getFirebase(e,!0,r.namespace);return Object.keys(t).forEach(e=>{if(!f(t[e]))throw new Error("Callback"+(null===e?"":" for "+e)+' must be a function; "'+i(t[e])+'" given!');var s,l={filter:e,handler:t[e],params:r};if(l.params.unique&&(s=o.match(l)).length){if("replace"!==l.params.unique)return s[0];o.remove(s[0])}a?n[e]=o.add(l):n=o.add(l)}),n},unintercept:function(e,t=null,r={}){if(!(e=N(e))||!h(e))throw new Error('Object must be of type target; "'+i(e)+'" given!');var n=H.getFirebase(e,!1,r.namespace);_isObject(t)||(f(t)?t={[null]:t}:f(r)&&(t={[t]:r},r=arguments.length>3?arguments[3]:{}),isOriginallyObj=!1),(n=H.getFirebase(e,!1,r.namespace))&&Object.keys(t).forEach(e=>{if(!f(t[e]))throw new Error("Callback"+(null===e?"":" for "+e)+' must be a function; "'+i(t[e])+'" given!');var s={filter:e,originalHandler:t[e],params:r};return n.removeMatches(s)})},closure:function(e,...t){var r=t.map(e=>{if(e=N(e),!h(e))throw new Error("Target must be of type object!");return{target:e,subjectCopy:o(e)?e.slice(0):q(e)}}),n=e(...t);const s=()=>{r.map(e=>{var t,r,n=Object.keys(e.subjectCopy),s=Object.keys(e.target),i=[],a=(t=n.concat(s),t.filter((e,t,r)=>r.indexOf(e)===t)).map(t=>{if(e.subjectCopy[t]!==e.target[t]){i.push(t);var r={name:t,related:i,buffered:!0};return s.includes(t)?(r.type="set",r.value=e.target[t],n.includes(t)&&(r.isUpdate=!0)):r.type="del",n.includes(t)&&(r.oldValue=e.subjectCopy[t]),h(e.subjectCopy[t])&&ae(e.target,t,e.subjectCopy[t]),h(e.target[t])&&te(e.target,t,e.target[t]),r}}).filter(e=>e);if(a.length&&(r=Y.getFirebase(e.target,!1)))return r.fire(a)})};return n instanceof Promise?n.then(s):s(),n},build:ne,link:te,unlink:ae,Observers:Y,Interceptors:H};class ye{constructor(e=[],t={}){if(!o(e))throw new Error('"items" must be an array.');if(!s(t))throw new Error('"params" must be an object.');if(t.itemStates&&!o(t.itemStates))throw new Error('"params.itemStates" must be an array.');ve.set(this,"items",[]),ve.set(this,"state",{}),ve.set(this,"now",{}),ve.set(this,"prev",{}),this.params=t;const r=(e,t)=>{if(!this.params.itemStates||this.params.itemStates.includes(e)){if(!this.state[e]){var r=new we;Object.defineProperty(r,"_source",{value:this.items,enumerable:!1}),ve.set(this.state,e,r)}this.state[e].includes(t)||(this._beforeSetState&&this._beforeSetState(e,t),ve.proxy(this.state[e]).push(t),ve.set(this.now,e,t),this._afterSetState&&this._afterSetState(e,t))}},n=(e,t)=>{if((this.state[e]||[]).includes(t)){this._beforeUnsetState&&this._beforeUnsetState(e,t);var r=this.state[e].indexOf(t);ve.proxy(this.state[e]).splice(r,1),ve.set(this.prev,e,t),this._afterUnsetState&&this._afterUnsetState(e,t)}};ve.intercept(this.items,["set","deleteProperty"],(e,t,i)=>{if("length"===e.name)return i();if("set"===e.type){if(!g(e.name))throw new Error("Named items cannot be set on a collection.");if(!s(e.value))throw new Error("Only items of type object are allowed in a collection.");var a=[],o=[];Object.keys(e.value).forEach(t=>{this.params.boolishStateTest&&!e.value[t]||a.push(t)}),e.isUpdate&&(o=T(Object.keys(e.oldValue),a)),"clear_last"!==this.params.onBadState&&o.forEach(t=>{n(t,e.name)}),a.forEach(t=>{r(t,e.name)}),"clear_last"===this.params.onBadState&&o.forEach(t=>{n(t,e.name)}),ve.intercept(e.value,["set","deleteProperty"],(t,s,i)=>{var a=this.params.boolishStateTest?t.value:"set"===t.type,o=this.params.boolishStateTest?!t.value:"deleteProperty"===t.type;return a?r(t.name,e.name):o&&n(t.name,e.name),i()},{unique:"replace",tags:[this,"state-change-interception"]}),e.isUpdate&&(this.items.includes(e.oldValue)||ve.unintercept(e.oldValue,["set","deleteProperty"],null,{tags:[this,"state-change-interception"]}))}else"deleteProperty"===e.type&&(ve.unintercept(e.oldValue,["set","deleteProperty"],null,{tags:[this,"state-change-interception"]}),Object.keys(e.oldValue||{}).forEach(t=>{n(t,e.name)}));return i()}),this.push(...e)}proxy(){return ve.proxy(this.items)}push(...e){ve.proxy(this.items).push(...e)}unshift(...e){ve.proxy(this.items).unshift(...e)}remove(...e){e.reduce((t,r,n)=>{var s=this.indexOf(r);if(-1===s)return t;if(t.length){if(parseInt(b(t))+1===s)return t.concat(s)}else if(n<e.length-1)return[s];return ve.proxy(this.items).splice(t[0],t.length),[]},[])}first(){return m(this.items)}last(){return b(this.items)}rand(){return V(this.items)}mid(...e){return I(this.items,...e)}preceding(...e){return E(this.items,...e)}following(...e){return S(this.items,...e)}between(...e){return x(this.items,...e)}}class we extends Array{first(){return this._source[m(this)]}last(){return this._source[b(this)]}rand(){return this._source[V(this)]}min(){return this._source[(e=this,(e=e.slice()).reduce((e,t)=>Math.min(e,t),e.shift()))];var e}max(){return this._source[(e=this,(e=e.slice()).reduce((e,t)=>Math.max(e,t),e.shift()))];var e}mid(...e){var t=I(this,...e);return o(t)?t.map(e=>this._source[e]):this._source[t]}preceding(...e){var t=E(this,...e);return o(t)?t.map(e=>this._source[e]):this._source[t]}following(...e){var t=S(this,...e);return o(t)?t.map(e=>this._source[e]):this._source[t]}between(...e){var t=x(this,...e);return o(t)?t.map(e=>this._source[e]):this._source[t]}intersect(...e){return k(this,...e).map(e=>this._source[e])}difference(...e){return T(this,...e).map(e=>this._source[e])}}class Oe extends ye{static createTree(e,t=null,r={}){return new this(e.map(e=>(t&&o(e[t])&&(e[t]=this.createTree(e[t],t,r)),e)),r)}_beforeSetState(e,t){if((this.params.multiplicity||{})[e]&&this.state[e].length>=this.params.multiplicity[e]){var r=this.items[this.state[e][0]];this.params.boolishStateTest?ve.set(r,e,!1):ve.del(r,e)}}}window.WebQit=window.WebQit||{},window.WebQit.ObsvCollection=n}]);
//# sourceMappingURL=main.js.map