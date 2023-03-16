!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function r(e){return e&&e.__esModule?e.default:e}var n={},i={},a=t.parcelRequire810f;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequire810f=a),a.register("iE7OH",(function(t,r){var n,i;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)a[t[r]]=e[t[r]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("bpxeT",(function(e,t){"use strict";function r(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,i)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var o=e.apply(t,n);function s(e){r(o,i,a,s,u,"next",e)}function u(e){r(o,i,a,s,u,"throw",e)}s(void 0)}))}}})),a.register("2TvXO",(function(e,t){var r=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var i=t&&t.prototype instanceof g?t:g,a=Object.create(i.prototype),o=new S(n||[]);return a._invoke=function(e,t,r){var n=f;return function(i,a){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw a;return A()}for(r.method=i,r.arg=a;;){var o=r.delegate;if(o){var s=I(o,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=l(e,t,r);if("normal"===u.type){if(n=r.done?p:d,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(e,r,o),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",v={};function g(){}function m(){}function y(){}var b={};u(b,a,(function(){return this}));var k=Object.getPrototypeOf,w=k&&k(k(R([])));w&&w!==r&&n.call(w,a)&&(b=w);var _=y.prototype=g.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(i,a,o,s){var u=l(e[i],e,a);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,o,s)}),(function(e){r("throw",e,o,s)})):t.resolve(f).then((function(e){c.value=e,o(c)}),(function(e){return r("throw",e,o,s)}))}s(u.arg)}var i;this._invoke=function(e,n){function a(){return new t((function(t,i){r(e,n,t,i)}))}return i=i?i.then(a,a):a()}}function I(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,I(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(n,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function R(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}return{next:A}}function A(){return{value:t,done:!0}}return m.prototype=y,u(_,"constructor",y),u(y,"constructor",m),m.displayName=u(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,s,"GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},E(x.prototype),u(x.prototype,o,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new x(c(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},E(_),u(_,s,"Generator"),u(_,a,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=R,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:R(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=r}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),a.register("dIxxU",(function(t,r){e(t.exports,"default",(function(){return a("ke5Oc").default}));var n=a("ke5Oc");n.default.Axios,n.default.AxiosError,n.default.CanceledError,n.default.isCancel,n.default.CancelToken,n.default.VERSION,n.default.all,n.default.Cancel,n.default.isAxiosError,n.default.spread,n.default.toFormData,n.default.AxiosHeaders,n.default.HttpStatusCode,n.default.formToJSON,n.default.mergeConfig})),a.register("ke5Oc",(function(t,r){e(t.exports,"default",(function(){return w}));var n=a("c4C4W"),i=a("lGmLA"),o=a("9jbh3"),s=a("knWMA"),u=a("c74ni"),c=a("gipWz"),l=a("dW1zJ"),f=a("77MZz"),d=a("lXDKh"),h=a("kLR29"),p=a("12Kat"),v=a("5TB86"),g=a("9BdDr"),m=a("kv87N"),y=a("gHHim"),b=a("5siR6");var k=function e(t){var r=new(0,o.default)(t),a=(0,i.default)(o.default.prototype.request,r);return n.default.extend(a,o.default.prototype,r,{allOwnKeys:!0}),n.default.extend(a,r,null,{allOwnKeys:!0}),a.create=function(r){return e((0,s.default)(t,r))},a}(u.default);k.Axios=o.default,k.CanceledError=l.default,k.CancelToken=f.default,k.isCancel=d.default,k.VERSION=h.VERSION,k.toFormData=p.default,k.AxiosError=v.default,k.Cancel=k.CanceledError,k.all=function(e){return Promise.all(e)},k.spread=g.default,k.isAxiosError=m.default,k.mergeConfig=s.default,k.AxiosHeaders=y.default,k.formToJSON=function(e){return(0,c.default)(n.default.isHTMLForm(e)?new FormData(e):e)},k.HttpStatusCode=b.default,k.default=k;var w=k})),a.register("c4C4W",(function(n,i){e(n.exports,"default",(function(){return H}));var o,s=a("l5bVx"),u=a("lGmLA"),c=Object.prototype.toString,l=Object.getPrototypeOf,f=(o=Object.create(null),function(e){var t=c.call(e);return o[t]||(o[t]=t.slice(8,-1).toLowerCase())}),d=function(e){return e=e.toLowerCase(),function(t){return f(t)===e}},h=function(e){return function(t){return(void 0===t?"undefined":r(s)(t))===e}},p=Array.isArray,v=h("undefined");var g=d("ArrayBuffer");var m=h("string"),y=h("function"),b=h("number"),k=function(e){return null!==e&&"object"==typeof e},w=function(e){if("object"!==f(e))return!1;var t=l(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},_=d("Date"),E=d("File"),x=d("Blob"),I=d("FileList"),T=d("URLSearchParams");function O(e,t){var r,n,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=i.allOwnKeys,o=void 0!==a&&a;if(null!=e)if("object"!=typeof e&&(e=[e]),p(e))for(r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else{var s,u=o?Object.getOwnPropertyNames(e):Object.keys(e),c=u.length;for(r=0;r<c;r++)s=u[r],t.call(null,e[s],s,e)}}function S(e,t){t=t.toLowerCase();for(var r,n=Object.keys(e),i=n.length;i-- >0;)if(t===(r=n[i]).toLowerCase())return r;return null}var R="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,A=function(e){return!v(e)&&e!==R};var C,N,L=(C="undefined"!=typeof Uint8Array&&l(Uint8Array),function(e){return C&&e instanceof C}),P=d("HTMLFormElement"),D=(N=Object.prototype.hasOwnProperty,function(e,t){return N.call(e,t)}),U=d("RegExp"),M=function(e,t){var r=Object.getOwnPropertyDescriptors(e),n={};O(r,(function(r,i){!1!==t(r,i,e)&&(n[i]=r)})),Object.defineProperties(e,n)},B="abcdefghijklmnopqrstuvwxyz",j="0123456789",F={DIGIT:j,ALPHA:B,ALPHA_DIGIT:B+B.toUpperCase()+j};var H={isArray:p,isArrayBuffer:g,isBuffer:function(e){return null!==e&&!v(e)&&null!==e.constructor&&!v(e.constructor)&&y(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||c.call(e)===t||y(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&g(e.buffer)},isString:m,isNumber:b,isBoolean:function(e){return!0===e||!1===e},isObject:k,isPlainObject:w,isUndefined:v,isDate:_,isFile:E,isBlob:x,isRegExp:U,isFunction:y,isStream:function(e){return k(e)&&y(e.pipe)},isURLSearchParams:T,isTypedArray:L,isFileList:I,forEach:O,merge:function e(){for(var t=(A(this)&&this||{}).caseless,r={},n=function(n,i){var a=t&&S(r,i)||i;w(r[a])&&w(n)?r[a]=e(r[a],n):w(n)?r[a]=e({},n):p(n)?r[a]=n.slice():r[a]=n},i=0,a=arguments.length;i<a;i++)arguments[i]&&O(arguments[i],n);return r},extend:function(e,t,r){var n=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).allOwnKeys;return O(t,(function(t,n){r&&y(t)?e[n]=(0,u.default)(t,r):e[n]=t}),{allOwnKeys:n}),e},trim:function(e){return e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,r,n){e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:function(e,t,r,n){var i,a,o,s={};if(t=t||{},null==e)return t;do{for(a=(i=Object.getOwnPropertyNames(e)).length;a-- >0;)o=i[a],n&&!n(o,e,t)||s[o]||(t[o]=e[o],s[o]=!0);e=!1!==r&&l(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:f,kindOfTest:d,endsWith:function(e,t,r){e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;var n=e.indexOf(t,r);return-1!==n&&n===r},toArray:function(e){if(!e)return null;if(p(e))return e;var t=e.length;if(!b(t))return null;for(var r=new Array(t);t-- >0;)r[t]=e[t];return r},forEachEntry:function(e,t){for(var r,n=(e&&e[Symbol.iterator]).call(e);(r=n.next())&&!r.done;){var i=r.value;t.call(e,i[0],i[1])}},matchAll:function(e,t){for(var r,n=[];null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:P,hasOwnProperty:D,hasOwnProp:D,reduceDescriptors:M,freezeMethods:function(e){M(e,(function(t,r){if(y(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;var n=e[r];y(n)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=function(){throw Error("Can not rewrite read-only method '"+r+"'")}))}))},toObjectSet:function(e,t){var r={},n=function(e){e.forEach((function(e){r[e]=!0}))};return p(e)?n(e):n(String(e).split(t)),r},toCamelCase:function(e){return e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,r){return t.toUpperCase()+r}))},noop:function(){},toFiniteNumber:function(e,t){return e=+e,Number.isFinite(e)?e:t},findKey:S,global:R,isContextDefined:A,ALPHABET:F,generateString:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:F.ALPHA_DIGIT,r="",n=t.length;e--;)r+=t[Math.random()*n|0];return r},isSpecCompliantForm:function(e){return!!(e&&y(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:function(e){var t=new Array(10),r=function(e,n){if(k(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;var i=p(e)?[]:{};return O(e,(function(e,t){var a=r(e,n+1);!v(a)&&(i[t]=a)})),t[n]=void 0,i}}return e};return r(e,0)}}})),a.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),a.register("lGmLA",(function(t,r){function n(e,t){return function(){return e.apply(t,arguments)}}e(t.exports,"default",(function(){return n}))})),a.register("9jbh3",(function(t,n){e(t.exports,"default",(function(){return m}));var i=a("8MBJY"),o=a("a2hTj"),s=a("c4C4W"),u=a("6d5Pb"),c=a("JRZh2"),l=a("k04r0"),f=a("knWMA"),d=a("gYMA1"),h=a("9SeBc"),p=a("gHHim"),v=h.default.validators,g=function(){function e(t){r(i)(this,e),this.defaults=t,this.interceptors={request:new(0,c.default),response:new(0,c.default)}}return r(o)(e,[{key:"request",value:function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{};var r,n=(t=(0,f.default)(this.defaults,t)).transitional,i=t.paramsSerializer,a=t.headers;void 0!==n&&h.default.assertOptions(n,{silentJSONParsing:v.transitional(v.boolean),forcedJSONParsing:v.transitional(v.boolean),clarifyTimeoutError:v.transitional(v.boolean)},!1),void 0!==i&&h.default.assertOptions(i,{encode:v.function,serialize:v.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),(r=a&&s.default.merge(a.common,a[t.method]))&&s.default.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete a[e]})),t.headers=p.default.concat(r,a);var o=[],u=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(u=u&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));var c,d=[];this.interceptors.response.forEach((function(e){d.push(e.fulfilled,e.rejected)}));var g,m=0;if(!u){var y=[l.default.bind(this),void 0];for(y.unshift.apply(y,o),y.push.apply(y,d),g=y.length,c=Promise.resolve(t);m<g;)c=c.then(y[m++],y[m++]);return c}g=o.length;var b=t;for(m=0;m<g;){var k=o[m++],w=o[m++];try{b=k(b)}catch(e){w.call(this,e);break}}try{c=l.default.call(this,b)}catch(e){return Promise.reject(e)}for(m=0,g=d.length;m<g;)c=c.then(d[m++],d[m++]);return c}},{key:"getUri",value:function(e){e=(0,f.default)(this.defaults,e);var t=(0,d.default)(e.baseURL,e.url);return(0,u.default)(t,e.params,e.paramsSerializer)}}]),e}();s.default.forEach(["delete","get","head","options"],(function(e){g.prototype[e]=function(t,r){return this.request((0,f.default)(r||{},{method:e,url:t,data:(r||{}).data}))}})),s.default.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,i){return this.request((0,f.default)(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}g.prototype[e]=t(),g.prototype[e+"Form"]=t(!0)}));var m=g})),a.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),a.register("a2hTj",(function(e,t){"use strict";function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e}})),a.register("6d5Pb",(function(t,r){e(t.exports,"default",(function(){return s}));var n=a("c4C4W"),i=a("8zJup");function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function s(e,t,r){if(!t)return e;var a,s=r&&r.encode||o,u=r&&r.serialize;if(a=u?u(t,r):n.default.isURLSearchParams(t)?t.toString():new(0,i.default)(t,r).toString(s)){var c=e.indexOf("#");-1!==c&&(e=e.slice(0,c)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}})),a.register("8zJup",(function(t,r){e(t.exports,"default",(function(){return u}));var n=a("12Kat");function i(e){var t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function o(e,t){this._pairs=[],e&&(0,n.default)(e,this,t)}var s=o.prototype;s.append=function(e,t){this._pairs.push([e,t])},s.toString=function(e){var t=e?function(t){return e.call(this,t,i)}:i;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var u=o})),a.register("12Kat",(function(t,r){e(t.exports,"default",(function(){return d}));var n=a("c4C4W"),i=a("5TB86"),o=a("beknR"),s=a("3aNd6").Buffer;function u(e){return n.default.isPlainObject(e)||n.default.isArray(e)}function c(e){return n.default.endsWith(e,"[]")?e.slice(0,-2):e}function l(e,t,r){return e?e.concat(t).map((function(e,t){return e=c(e),!r&&t?"["+e+"]":e})).join(r?".":""):t}var f=n.default.toFlatObject(n.default,{},null,(function(e){return/^is[A-Z]/.test(e)}));var d=function(e,t,r){if(!n.default.isObject(e))throw new TypeError("target must be an object");t=t||new(o.default||FormData);var a=(r=n.default.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!n.default.isUndefined(t[e])}))).metaTokens,d=r.visitor||m,h=r.dots,p=r.indexes,v=(r.Blob||"undefined"!=typeof Blob&&Blob)&&n.default.isSpecCompliantForm(t);if(!n.default.isFunction(d))throw new TypeError("visitor must be a function");function g(e){if(null===e)return"";if(n.default.isDate(e))return e.toISOString();if(!v&&n.default.isBlob(e))throw new(0,i.default)("Blob is not supported. Use a Buffer instead.");return n.default.isArrayBuffer(e)||n.default.isTypedArray(e)?v&&"function"==typeof Blob?new Blob([e]):s.from(e):e}function m(e,r,i){var o=e;if(e&&!i&&"object"==typeof e)if(n.default.endsWith(r,"{}"))r=a?r:r.slice(0,-2),e=JSON.stringify(e);else if(n.default.isArray(e)&&function(e){return n.default.isArray(e)&&!e.some(u)}(e)||(n.default.isFileList(e)||n.default.endsWith(r,"[]"))&&(o=n.default.toArray(e)))return r=c(r),o.forEach((function(e,i){!n.default.isUndefined(e)&&null!==e&&t.append(!0===p?l([r],i,h):null===p?r:r+"[]",g(e))})),!1;return!!u(e)||(t.append(l(i,r,h),g(e)),!1)}var y=[],b=Object.assign(f,{defaultVisitor:m,convertValue:g,isVisitable:u});if(!n.default.isObject(e))throw new TypeError("data must be an object");return function e(r,i){if(!n.default.isUndefined(r)){if(-1!==y.indexOf(r))throw Error("Circular reference detected in "+i.join("."));y.push(r),n.default.forEach(r,(function(r,a){!0===(!(n.default.isUndefined(r)||null===r)&&d.call(t,r,n.default.isString(a)?a.trim():a,i,b))&&e(r,i?i.concat(a):[a])})),y.pop()}}(e),t}})),a.register("5TB86",(function(t,r){e(t.exports,"default",(function(){return u}));var n=a("c4C4W");function i(e,t,r,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}n.default.inherits(i,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:n.default.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var o=i.prototype,s={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((function(e){s[e]={value:e}})),Object.defineProperties(i,s),Object.defineProperty(o,"isAxiosError",{value:!0}),i.from=function(e,t,r,a,s,u){var c=Object.create(o);return n.default.toFlatObject(e,c,(function(e){return e!==Error.prototype}),(function(e){return"isAxiosError"!==e})),i.call(c,e.message,t,r,a,s),c.cause=e,c.name=e.name,u&&Object.assign(c,u),c};var u=i})),a.register("beknR",(function(t,r){e(t.exports,"default",(function(){return n}));var n=null})),a.register("3aNd6",(function(t,n){e(t.exports,"Buffer",(function(){return i}),(function(e){return i=e})),e(t.exports,"INSPECT_MAX_BYTES",(function(){return o}),(function(e){return o=e}));var i,o,s=a("ds8z5"),u=a("8MBJY"),c=a("a2hTj"),l=a("eYQtU"),f=a("l5bVx"),d=a("2MbLg"),h=a("5d11t"),p=a("7rddL"),v="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;i=y,o=50;var g=2147483647;function m(e){if(e>g)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,y.prototype),t}function y(e,t,r){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return w(e)}return b(e,t,r)}function b(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!y.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var r=0|I(e,t),n=m(r),i=n.write(e,t);i!==r&&(n=n.slice(0,i));return n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(ae(e,Uint8Array)){var t=new Uint8Array(e);return E(t.buffer,t.byteOffset,t.byteLength)}return _(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+(void 0===e?"undefined":r(f)(e)));if(ae(e,ArrayBuffer)||e&&ae(e.buffer,ArrayBuffer))return E(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(ae(e,SharedArrayBuffer)||e&&ae(e.buffer,SharedArrayBuffer)))return E(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');var i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return y.from(i,t,n);var a=function(e){if(y.isBuffer(e)){var t=0|x(e.length),r=m(t);return 0===r.length||e.copy(r,0,0,t),r}if(void 0!==e.length)return"number"!=typeof e.length||oe(e.length)?m(0):_(e);if("Buffer"===e.type&&Array.isArray(e.data))return _(e.data)}(e);if(a)return a;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return y.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+(void 0===e?"undefined":r(f)(e)))}function k(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function w(e){return k(e),m(e<0?0:0|x(e))}function _(e){for(var t=e.length<0?0:0|x(e.length),r=m(t),n=0;n<t;n+=1)r[n]=255&e[n];return r}function E(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');var n;return n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),Object.setPrototypeOf(n,y.prototype),n}function x(e){if(e>=g)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+g.toString(16)+" bytes");return 0|e}function I(e,t){if(y.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||ae(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+(void 0===e?"undefined":r(f)(e)));var n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;for(var a=!1;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return re(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return ne(e).length;default:if(a)return i?-1:re(e).length;t=(""+t).toLowerCase(),a=!0}}function T(e,t,r){var n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return F(this,t,r);case"utf8":case"utf-8":return U(this,t,r);case"ascii":return B(this,t,r);case"latin1":case"binary":return j(this,t,r);case"base64":return D(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return H(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function O(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function S(e,t,r,n,i){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),oe(r=+r)&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return-1;r=e.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof t&&(t=y.from(t,n)),y.isBuffer(t))return 0===t.length?-1:R(e,t,r,n,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):R(e,[t],r,n,i);throw new TypeError("val must be string, number or Buffer")}function R(e,t,r,n,i){var a,o=1,s=e.length,u=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;o=2,s/=2,u/=2,r/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){var l=-1;for(a=r;a<s;a++)if(c(e,a)===c(t,-1===l?0:a-l)){if(-1===l&&(l=a),a-l+1===u)return l*o}else-1!==l&&(a-=a-l),l=-1}else for(r+u>s&&(r=s-u),a=r;a>=0;a--){for(var f=!0,d=0;d<u;d++)if(c(e,a+d)!==c(t,d)){f=!1;break}if(f)return a}return-1}function A(e,t,r,n){r=Number(r)||0;var i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;var a,o=t.length;for(n>o/2&&(n=o/2),a=0;a<n;++a){var s=parseInt(t.substr(2*a,2),16);if(oe(s))return a;e[r+a]=s}return a}function C(e,t,r,n){return ie(re(t,e.length-r),e,r,n)}function N(e,t,r,n){return ie(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function L(e,t,r,n){return ie(ne(t),e,r,n)}function P(e,t,r,n){return ie(function(e,t){for(var r,n,i,a=[],o=0;o<e.length&&!((t-=2)<0);++o)n=(r=e.charCodeAt(o))>>8,i=r%256,a.push(i),a.push(n);return a}(t,e.length-r),e,r,n)}function D(e,t,r){return 0===t&&r===e.length?h.fromByteArray(e):h.fromByteArray(e.slice(t,r))}function U(e,t,r){r=Math.min(e.length,r);for(var n=[],i=t;i<r;){var a=e[i],o=null,s=a>239?4:a>223?3:a>191?2:1;if(i+s<=r){var u=void 0,c=void 0,l=void 0,f=void 0;switch(s){case 1:a<128&&(o=a);break;case 2:128==(192&(u=e[i+1]))&&(f=(31&a)<<6|63&u)>127&&(o=f);break;case 3:u=e[i+1],c=e[i+2],128==(192&u)&&128==(192&c)&&(f=(15&a)<<12|(63&u)<<6|63&c)>2047&&(f<55296||f>57343)&&(o=f);break;case 4:u=e[i+1],c=e[i+2],l=e[i+3],128==(192&u)&&128==(192&c)&&128==(192&l)&&(f=(15&a)<<18|(63&u)<<12|(63&c)<<6|63&l)>65535&&f<1114112&&(o=f)}}null===o?(o=65533,s=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=s}return function(e){var t=e.length;if(t<=M)return String.fromCharCode.apply(String,e);var r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=M));return r}(n)}y.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),y.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(y.prototype,"parent",{enumerable:!0,get:function(){if(y.isBuffer(this))return this.buffer}}),Object.defineProperty(y.prototype,"offset",{enumerable:!0,get:function(){if(y.isBuffer(this))return this.byteOffset}}),y.poolSize=8192,y.from=function(e,t,r){return b(e,t,r)},Object.setPrototypeOf(y.prototype,Uint8Array.prototype),Object.setPrototypeOf(y,Uint8Array),y.alloc=function(e,t,r){return function(e,t,r){return k(e),e<=0?m(e):void 0!==t?"string"==typeof r?m(e).fill(t,r):m(e).fill(t):m(e)}(e,t,r)},y.allocUnsafe=function(e){return w(e)},y.allocUnsafeSlow=function(e){return w(e)},y.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==y.prototype},y.compare=function(e,t){if(ae(e,Uint8Array)&&(e=y.from(e,e.offset,e.byteLength)),ae(t,Uint8Array)&&(t=y.from(t,t.offset,t.byteLength)),!y.isBuffer(e)||!y.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,n=t.length,i=0,a=Math.min(r,n);i<a;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},y.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},y.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return y.alloc(0);var r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var n=y.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){var a=e[r];if(ae(a,Uint8Array))i+a.length>n.length?(y.isBuffer(a)||(a=y.from(a)),a.copy(n,i)):Uint8Array.prototype.set.call(n,a,i);else{if(!y.isBuffer(a))throw new TypeError('"list" argument must be an Array of Buffers');a.copy(n,i)}i+=a.length}return n},y.byteLength=I,y.prototype._isBuffer=!0,y.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)O(this,t,t+1);return this},y.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)O(this,t,t+3),O(this,t+1,t+2);return this},y.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)O(this,t,t+7),O(this,t+1,t+6),O(this,t+2,t+5),O(this,t+3,t+4);return this},y.prototype.toString=function(){var e=this.length;return 0===e?"":0===arguments.length?U(this,0,e):T.apply(this,arguments)},y.prototype.toLocaleString=y.prototype.toString,y.prototype.equals=function(e){if(!y.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===y.compare(this,e)},y.prototype.inspect=function(){var e="",t=o;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},v&&(y.prototype[v]=y.prototype.inspect),y.prototype.compare=function(e,t,n,i,a){if(ae(e,Uint8Array)&&(e=y.from(e,e.offset,e.byteLength)),!y.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+(void 0===e?"undefined":r(f)(e)));if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===a&&(a=this.length),t<0||n>e.length||i<0||a>this.length)throw new RangeError("out of range index");if(i>=a&&t>=n)return 0;if(i>=a)return-1;if(t>=n)return 1;if(this===e)return 0;for(var o=(a>>>=0)-(i>>>=0),s=(n>>>=0)-(t>>>=0),u=Math.min(o,s),c=this.slice(i,a),l=e.slice(t,n),d=0;d<u;++d)if(c[d]!==l[d]){o=c[d],s=l[d];break}return o<s?-1:s<o?1:0},y.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},y.prototype.indexOf=function(e,t,r){return S(this,e,t,r,!0)},y.prototype.lastIndexOf=function(e,t,r){return S(this,e,t,r,!1)},y.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-t;if((void 0===r||r>i)&&(r=i),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var a=!1;;)switch(n){case"hex":return A(this,e,t,r);case"utf8":case"utf-8":return C(this,e,t,r);case"ascii":case"latin1":case"binary":return N(this,e,t,r);case"base64":return L(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,e,t,r);default:if(a)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),a=!0}},y.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var M=4096;function B(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}function j(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}function F(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var i="",a=t;a<r;++a)i+=se[e[a]];return i}function H(e,t,r){for(var n=e.slice(t,r),i="",a=0;a<n.length-1;a+=2)i+=String.fromCharCode(n[a]+256*n[a+1]);return i}function V(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function W(e,t,r,n,i,a){if(!y.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<a)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function z(e,t,r,n,i){$(t,n,i,e,r,7);var a=Number(t&BigInt(4294967295));e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a;var o=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,r}function q(e,t,r,n,i){$(t,n,i,e,r,7);var a=Number(t&BigInt(4294967295));e[r+7]=a,a>>=8,e[r+6]=a,a>>=8,e[r+5]=a,a>>=8,e[r+4]=a;var o=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=o,o>>=8,e[r+2]=o,o>>=8,e[r+1]=o,o>>=8,e[r]=o,r+8}function J(e,t,r,n,i,a){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function K(e,t,r,n,i){return t=+t,r>>>=0,i||J(e,0,r,4),p.write(e,t,r,n,23,4),r+4}function G(e,t,r,n,i){return t=+t,r>>>=0,i||J(e,0,r,8),p.write(e,t,r,n,52,8),r+8}y.prototype.slice=function(e,t){var r=this.length;(e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,y.prototype),n},y.prototype.readUintLE=y.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||V(e,t,this.length);for(var n=this[e],i=1,a=0;++a<t&&(i*=256);)n+=this[e+a]*i;return n},y.prototype.readUintBE=y.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||V(e,t,this.length);for(var n=this[e+--t],i=1;t>0&&(i*=256);)n+=this[e+--t]*i;return n},y.prototype.readUint8=y.prototype.readUInt8=function(e,t){return e>>>=0,t||V(e,1,this.length),this[e]},y.prototype.readUint16LE=y.prototype.readUInt16LE=function(e,t){return e>>>=0,t||V(e,2,this.length),this[e]|this[e+1]<<8},y.prototype.readUint16BE=y.prototype.readUInt16BE=function(e,t){return e>>>=0,t||V(e,2,this.length),this[e]<<8|this[e+1]},y.prototype.readUint32LE=y.prototype.readUInt32LE=function(e,t){return e>>>=0,t||V(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},y.prototype.readUint32BE=y.prototype.readUInt32BE=function(e,t){return e>>>=0,t||V(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},y.prototype.readBigUInt64LE=ue((function(e){Q(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=t+256*this[++e]+65536*this[++e]+this[++e]*Math.pow(2,24),i=this[++e]+256*this[++e]+65536*this[++e]+r*Math.pow(2,24);return BigInt(n)+(BigInt(i)<<BigInt(32))})),y.prototype.readBigUInt64BE=ue((function(e){Q(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=t*Math.pow(2,24)+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*Math.pow(2,24)+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)})),y.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||V(e,t,this.length);for(var n=this[e],i=1,a=0;++a<t&&(i*=256);)n+=this[e+a]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},y.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||V(e,t,this.length);for(var n=t,i=1,a=this[e+--n];n>0&&(i*=256);)a+=this[e+--n]*i;return a>=(i*=128)&&(a-=Math.pow(2,8*t)),a},y.prototype.readInt8=function(e,t){return e>>>=0,t||V(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},y.prototype.readInt16LE=function(e,t){e>>>=0,t||V(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},y.prototype.readInt16BE=function(e,t){e>>>=0,t||V(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},y.prototype.readInt32LE=function(e,t){return e>>>=0,t||V(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},y.prototype.readInt32BE=function(e,t){return e>>>=0,t||V(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},y.prototype.readBigInt64LE=ue((function(e){Q(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*Math.pow(2,24))})),y.prototype.readBigInt64BE=ue((function(e){Q(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*Math.pow(2,24)+65536*this[++e]+256*this[++e]+r)})),y.prototype.readFloatLE=function(e,t){return e>>>=0,t||V(e,4,this.length),p.read(this,e,!0,23,4)},y.prototype.readFloatBE=function(e,t){return e>>>=0,t||V(e,4,this.length),p.read(this,e,!1,23,4)},y.prototype.readDoubleLE=function(e,t){return e>>>=0,t||V(e,8,this.length),p.read(this,e,!0,52,8)},y.prototype.readDoubleBE=function(e,t){return e>>>=0,t||V(e,8,this.length),p.read(this,e,!1,52,8)},y.prototype.writeUintLE=y.prototype.writeUIntLE=function(e,t,r,n){(e=+e,t>>>=0,r>>>=0,n)||W(this,e,t,r,Math.pow(2,8*r)-1,0);var i=1,a=0;for(this[t]=255&e;++a<r&&(i*=256);)this[t+a]=e/i&255;return t+r},y.prototype.writeUintBE=y.prototype.writeUIntBE=function(e,t,r,n){(e=+e,t>>>=0,r>>>=0,n)||W(this,e,t,r,Math.pow(2,8*r)-1,0);var i=r-1,a=1;for(this[t+i]=255&e;--i>=0&&(a*=256);)this[t+i]=e/a&255;return t+r},y.prototype.writeUint8=y.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||W(this,e,t,1,255,0),this[t]=255&e,t+1},y.prototype.writeUint16LE=y.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||W(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},y.prototype.writeUint16BE=y.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||W(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},y.prototype.writeUint32LE=y.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||W(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},y.prototype.writeUint32BE=y.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||W(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},y.prototype.writeBigUInt64LE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return z(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),y.prototype.writeBigUInt64BE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return q(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),y.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);W(this,e,t,r,i-1,-i)}var a=0,o=1,s=0;for(this[t]=255&e;++a<r&&(o*=256);)e<0&&0===s&&0!==this[t+a-1]&&(s=1),this[t+a]=(e/o>>0)-s&255;return t+r},y.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);W(this,e,t,r,i-1,-i)}var a=r-1,o=1,s=0;for(this[t+a]=255&e;--a>=0&&(o*=256);)e<0&&0===s&&0!==this[t+a+1]&&(s=1),this[t+a]=(e/o>>0)-s&255;return t+r},y.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||W(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},y.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||W(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},y.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||W(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},y.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||W(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},y.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||W(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},y.prototype.writeBigInt64LE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return z(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),y.prototype.writeBigInt64BE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return q(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),y.prototype.writeFloatLE=function(e,t,r){return K(this,e,t,!0,r)},y.prototype.writeFloatBE=function(e,t,r){return K(this,e,t,!1,r)},y.prototype.writeDoubleLE=function(e,t,r){return G(this,e,t,!0,r)},y.prototype.writeDoubleBE=function(e,t,r){return G(this,e,t,!1,r)},y.prototype.copy=function(e,t,r,n){if(!y.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},y.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!y.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===e.length){var i=e.charCodeAt(0);("utf8"===n&&i<128||"latin1"===n)&&(e=i)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;var a;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(a=t;a<r;++a)this[a]=e;else{var o=y.isBuffer(e)?e:y.from(e,n),s=o.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<r-t;++a)this[a+t]=o[a%s]}return this};var X={};function Y(e,t,n){X[e]=function(n){r(l)(a,n);var i=r(d)(a);function a(){var n;return r(u)(this,a),n=i.call(this),Object.defineProperty(r(s)(n),"message",{value:t.apply(r(s)(n),arguments),writable:!0,configurable:!0}),n.name="".concat(n.name," [").concat(e,"]"),n.stack,delete n.name,n}return r(c)(a,[{key:"code",get:function(){return e},set:function(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}},{key:"toString",value:function(){return"".concat(this.name," [").concat(e,"]: ").concat(this.message)}}]),a}(n)}function Z(e){for(var t="",r=e.length,n="-"===e[0]?1:0;r>=n+4;r-=3)t="_".concat(e.slice(r-3,r)).concat(t);return"".concat(e.slice(0,r)).concat(t)}function $(e,t,n,i,a,o){if(e>n||e<t){var s,u="bigint"===(void 0===t?"undefined":r(f)(t))?"n":"";throw s=o>3?0===t||t===BigInt(0)?">= 0".concat(u," and < 2").concat(u," ** ").concat(8*(o+1)).concat(u):">= -(2".concat(u," ** ").concat(8*(o+1)-1).concat(u,") and < 2 ** ")+"".concat(8*(o+1)-1).concat(u):">= ".concat(t).concat(u," and <= ").concat(n).concat(u),new X.ERR_OUT_OF_RANGE("value",s,e)}!function(e,t,r){Q(t,"offset"),void 0!==e[t]&&void 0!==e[t+r]||ee(t,e.length-(r+1))}(i,a,o)}function Q(e,t){if("number"!=typeof e)throw new X.ERR_INVALID_ARG_TYPE(t,"number",e)}function ee(e,t,r){if(Math.floor(e)!==e)throw Q(e,r),new X.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new X.ERR_BUFFER_OUT_OF_BOUNDS;throw new X.ERR_OUT_OF_RANGE(r||"offset",">= ".concat(r?1:0," and <= ").concat(t),e)}Y("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?"".concat(e," is outside of buffer bounds"):"Attempt to access memory outside buffer bounds"}),RangeError),Y("ERR_INVALID_ARG_TYPE",(function(e,t){return'The "'.concat(e,'" argument must be of type number. Received type ').concat(void 0===t?"undefined":r(f)(t))}),TypeError),Y("ERR_OUT_OF_RANGE",(function(e,t,n){var i='The value of "'.concat(e,'" is out of range.'),a=n;return Number.isInteger(n)&&Math.abs(n)>Math.pow(2,32)?a=Z(String(n)):"bigint"===(void 0===n?"undefined":r(f)(n))&&(a=String(n),(n>Math.pow(BigInt(2),BigInt(32))||n<-Math.pow(BigInt(2),BigInt(32)))&&(a=Z(a)),a+="n"),i+=" It must be ".concat(t,". Received ").concat(a)}),RangeError);var te=/[^+/0-9A-Za-z-_]/g;function re(e,t){var r;t=t||1/0;for(var n=e.length,i=null,a=[],o=0;o<n;++o){if((r=e.charCodeAt(o))>55295&&r<57344){if(!i){if(r>56319){(t-=3)>-1&&a.push(239,191,189);continue}if(o+1===n){(t-=3)>-1&&a.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&a.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(t-=3)>-1&&a.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;a.push(r)}else if(r<2048){if((t-=2)<0)break;a.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;a.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;a.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return a}function ne(e){return h.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(te,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function ie(e,t,r,n){var i;for(i=0;i<n&&!(i+r>=t.length||i>=e.length);++i)t[i+r]=e[i];return i}function ae(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function oe(e){return e!=e}var se=function(){for(var e="0123456789abcdef",t=new Array(256),r=0;r<16;++r)for(var n=16*r,i=0;i<16;++i)t[n+i]=e[r]+e[i];return t}();function ue(e){return"undefined"==typeof BigInt?ce:e}function ce(){throw new Error("BigInt not supported")}})),a.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),a.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n.default(e,t)};var r,n=(r=a("gD1JV"))&&r.__esModule?r:{default:r}})),a.register("gD1JV",(function(e,t){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return r(e,t)}})),a.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=r.default();return function(){var r,a=n.default(e);if(t){var o=n.default(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return i.default(this,r)}};var r=o(a("aTHs7")),n=o(a("fVNic")),i=o(a("jmhxu"));function o(e){return e&&e.__esModule?e:{default:e}}})),a.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),a.register("fVNic",(function(e,t){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return r(e)}})),a.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==n.default(t)&&"function"!=typeof t?r.default(e):t};var r=i(a("ds8z5")),n=i(a("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),a.register("5d11t",(function(t,r){var n,i;e(t.exports,"toByteArray",(function(){return n}),(function(e){return n=e})),e(t.exports,"fromByteArray",(function(){return i}),(function(e){return i=e})),n=function(e){var t,r,n=f(e),i=n[0],a=n[1],u=new s(function(e,t,r){return 3*(t+r)/4-r}(0,i,a)),c=0,l=a>0?i-4:i;for(r=0;r<l;r+=4)t=o[e.charCodeAt(r)]<<18|o[e.charCodeAt(r+1)]<<12|o[e.charCodeAt(r+2)]<<6|o[e.charCodeAt(r+3)],u[c++]=t>>16&255,u[c++]=t>>8&255,u[c++]=255&t;2===a&&(t=o[e.charCodeAt(r)]<<2|o[e.charCodeAt(r+1)]>>4,u[c++]=255&t);1===a&&(t=o[e.charCodeAt(r)]<<10|o[e.charCodeAt(r+1)]<<4|o[e.charCodeAt(r+2)]>>2,u[c++]=t>>8&255,u[c++]=255&t);return u},i=function(e){for(var t,r=e.length,n=r%3,i=[],o=16383,s=0,u=r-n;s<u;s+=o)i.push(d(e,s,s+o>u?u:s+o));1===n?(t=e[r-1],i.push(a[t>>2]+a[t<<4&63]+"==")):2===n&&(t=(e[r-2]<<8)+e[r-1],i.push(a[t>>10]+a[t>>4&63]+a[t<<2&63]+"="));return i.join("")};for(var a=[],o=[],s="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,l=u.length;c<l;++c)a[c]=u[c],o[u.charCodeAt(c)]=c;function f(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function d(e,t,r){for(var n,i,o=[],s=t;s<r;s+=3)n=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),o.push(a[(i=n)>>18&63]+a[i>>12&63]+a[i>>6&63]+a[63&i]);return o.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63})),a.register("7rddL",(function(t,r){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var n,i;e(t.exports,"read",(function(){return n}),(function(e){return n=e})),e(t.exports,"write",(function(){return i}),(function(e){return i=e})),n=function(e,t,r,n,i){var a,o,s=8*i-n-1,u=(1<<s)-1,c=u>>1,l=-7,f=r?i-1:0,d=r?-1:1,h=e[t+f];for(f+=d,a=h&(1<<-l)-1,h>>=-l,l+=s;l>0;a=256*a+e[t+f],f+=d,l-=8);for(o=a&(1<<-l)-1,a>>=-l,l+=n;l>0;o=256*o+e[t+f],f+=d,l-=8);if(0===a)a=1-c;else{if(a===u)return o?NaN:1/0*(h?-1:1);o+=Math.pow(2,n),a-=c}return(h?-1:1)*o*Math.pow(2,a-n)},i=function(e,t,r,n,i,a){var o,s,u,c=8*a-i-1,l=(1<<c)-1,f=l>>1,d=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,h=n?0:a-1,p=n?1:-1,v=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,o=l):(o=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-o))<1&&(o--,u*=2),(t+=o+f>=1?d/u:d*Math.pow(2,1-f))*u>=2&&(o++,u/=2),o+f>=l?(s=0,o=l):o+f>=1?(s=(t*u-1)*Math.pow(2,i),o+=f):(s=t*Math.pow(2,f-1)*Math.pow(2,i),o=0));i>=8;e[r+h]=255&s,h+=p,s/=256,i-=8);for(o=o<<i|s,c+=i;c>0;e[r+h]=255&o,h+=p,o/=256,c-=8);e[r+h-p]|=128*v}})),a.register("JRZh2",(function(t,n){e(t.exports,"default",(function(){return u}));var i=a("8MBJY"),o=a("a2hTj"),s=a("c4C4W"),u=function(){function e(){r(i)(this,e),this.handlers=[]}return r(o)(e,[{key:"use",value:function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(e){this.handlers[e]&&(this.handlers[e]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(e){s.default.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}]),e}()})),a.register("k04r0",(function(t,r){e(t.exports,"default",(function(){return f}));var n=a("jrAxF"),i=a("lXDKh"),o=a("c74ni"),s=a("dW1zJ"),u=a("gHHim"),c=a("fA43c");function l(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new(0,s.default)(null,e)}function f(e){return l(e),e.headers=u.default.from(e.headers),e.data=n.default.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),c.default.getAdapter(e.adapter||o.default.adapter)(e).then((function(t){return l(e),t.data=n.default.call(e,e.transformResponse,t),t.headers=u.default.from(t.headers),t}),(function(t){return(0,i.default)(t)||(l(e),t&&t.response&&(t.response.data=n.default.call(e,e.transformResponse,t.response),t.response.headers=u.default.from(t.response.headers))),Promise.reject(t)}))}})),a.register("jrAxF",(function(t,r){e(t.exports,"default",(function(){return s}));var n=a("c4C4W"),i=a("c74ni"),o=a("gHHim");function s(e,t){var r=this||i.default,a=t||r,s=o.default.from(a.headers),u=a.data;return n.default.forEach(e,(function(e){u=e.call(r,u,s.normalize(),t?t.status:void 0)})),s.normalize(),u}})),a.register("c74ni",(function(t,r){e(t.exports,"default",(function(){return h}));var n=a("c4C4W"),i=a("5TB86"),o=a("gWbUy"),s=a("12Kat"),u=a("4ue3z"),c=a("d0XKg"),l=a("gipWz"),f={"Content-Type":void 0};var d={transitional:o.default,adapter:["xhr","http"],transformRequest:[function(e,t){var r,i=t.getContentType()||"",a=i.indexOf("application/json")>-1,o=n.default.isObject(e);if(o&&n.default.isHTMLForm(e)&&(e=new FormData(e)),n.default.isFormData(e))return a&&a?JSON.stringify((0,l.default)(e)):e;if(n.default.isArrayBuffer(e)||n.default.isBuffer(e)||n.default.isStream(e)||n.default.isFile(e)||n.default.isBlob(e))return e;if(n.default.isArrayBufferView(e))return e.buffer;if(n.default.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();if(o){if(i.indexOf("application/x-www-form-urlencoded")>-1)return(0,u.default)(e,this.formSerializer).toString();if((r=n.default.isFileList(e))||i.indexOf("multipart/form-data")>-1){var c=this.env&&this.env.FormData;return(0,s.default)(r?{"files[]":e}:e,c&&new c,this.formSerializer)}}return o||a?(t.setContentType("application/json",!1),function(e,t,r){if(n.default.isString(e))try{return(t||JSON.parse)(e),n.default.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||d.transitional,r=t&&t.forcedJSONParsing,a="json"===this.responseType;if(e&&n.default.isString(e)&&(r&&!this.responseType||a)){var o=!(t&&t.silentJSONParsing)&&a;try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw i.default.from(e,i.default.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:c.default.classes.FormData,Blob:c.default.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.default.forEach(["delete","get","head"],(function(e){d.headers[e]={}})),n.default.forEach(["post","put","patch"],(function(e){d.headers[e]=n.default.merge(f)}));var h=d})),a.register("gWbUy",(function(t,r){e(t.exports,"default",(function(){return n}));var n={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),a.register("4ue3z",(function(t,r){e(t.exports,"default",(function(){return s}));var n=a("c4C4W"),i=a("12Kat"),o=a("d0XKg");function s(e,t){return(0,i.default)(e,new o.default.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,i){return o.default.isNode&&n.default.isBuffer(e)?(this.append(t,e.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}})),a.register("d0XKg",(function(t,r){e(t.exports,"default",(function(){return l}));var n,i=a("i5Hs4"),o=a("aIGDF"),s=a("3ZFaa"),u=("undefined"==typeof navigator||"ReactNative"!==(n=navigator.product)&&"NativeScript"!==n&&"NS"!==n)&&"undefined"!=typeof window&&"undefined"!=typeof document,c="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,l={isBrowser:!0,classes:{URLSearchParams:i.default,FormData:o.default,Blob:s.default},isStandardBrowserEnv:u,isStandardBrowserWebWorkerEnv:c,protocols:["http","https","file","blob","url","data"]}})),a.register("i5Hs4",(function(t,r){e(t.exports,"default",(function(){return i}));var n=a("8zJup"),i="undefined"!=typeof URLSearchParams?URLSearchParams:n.default})),a.register("aIGDF",(function(t,r){e(t.exports,"default",(function(){return n}));var n="undefined"!=typeof FormData?FormData:null})),a.register("3ZFaa",(function(t,r){e(t.exports,"default",(function(){return n}));var n="undefined"!=typeof Blob?Blob:null})),a.register("gipWz",(function(t,r){e(t.exports,"default",(function(){return i}));var n=a("c4C4W");var i=function(e){function t(e,r,i,a){var o=e[a++],s=Number.isFinite(+o),u=a>=e.length;return o=!o&&n.default.isArray(i)?i.length:o,u?(n.default.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!s):(i[o]&&n.default.isObject(i[o])||(i[o]=[]),t(e,r,i[o],a)&&n.default.isArray(i[o])&&(i[o]=function(e){var t,r,n={},i=Object.keys(e),a=i.length;for(t=0;t<a;t++)n[r=i[t]]=e[r];return n}(i[o])),!s)}if(n.default.isFormData(e)&&n.default.isFunction(e.entries)){var r={};return n.default.forEachEntry(e,(function(e,i){t(function(e){return n.default.matchAll(/\w+|\[(\w*)]/g,e).map((function(e){return"[]"===e[0]?"":e[1]||e[0]}))}(e),i,r,0)})),r}return null}})),a.register("gHHim",(function(t,n){e(t.exports,"default",(function(){return y}));var i=a("8MBJY"),o=a("a2hTj"),s=a("1t1Wn"),u=a("8nrFW"),c=a("c4C4W"),l=a("1nUSP"),f=Symbol("internals");function d(e){return e&&String(e).trim().toLowerCase()}function h(e){return!1===e||null==e?e:c.default.isArray(e)?e.map(h):String(e)}function p(e,t,r,n,i){return c.default.isFunction(n)?n.call(this,t,r):(i&&(t=r),c.default.isString(t)?c.default.isString(n)?-1!==t.indexOf(n):c.default.isRegExp(n)?n.test(t):void 0:void 0)}var v=Symbol.iterator,g=Symbol.toStringTag,m=function(){function e(t){r(i)(this,e),t&&this.set(t)}return r(o)(e,[{key:"set",value:function(e,t,r){var n=this;function i(e,t,r){var i=d(t);if(!i)throw new Error("header name must be a non-empty string");var a=c.default.findKey(n,i);(!a||void 0===n[a]||!0===r||void 0===r&&!1!==n[a])&&(n[a||t]=h(e))}var a=function(e,t){return c.default.forEach(e,(function(e,r){return i(e,r,t)}))};return c.default.isPlainObject(e)||e instanceof this.constructor?a(e,t):c.default.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z]+$/.test(e.trim())?a((0,l.default)(e),t):null!=e&&i(t,e,r),this}},{key:"get",value:function(e,t){if(e=d(e)){var r=c.default.findKey(this,e);if(r){var n=this[r];if(!t)return n;if(!0===t)return function(e){for(var t,r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;t=n.exec(e);)r[t[1]]=t[2];return r}(n);if(c.default.isFunction(t))return t.call(this,n,r);if(c.default.isRegExp(t))return t.exec(n);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(e,t){if(e=d(e)){var r=c.default.findKey(this,e);return!(!r||void 0===this[r]||t&&!p(0,this[r],r,t))}return!1}},{key:"delete",value:function(e,t){var r=this,n=!1;function i(e){if(e=d(e)){var i=c.default.findKey(r,e);!i||t&&!p(0,r[i],i,t)||(delete r[i],n=!0)}}return c.default.isArray(e)?e.forEach(i):i(e),n}},{key:"clear",value:function(e){for(var t=Object.keys(this),r=t.length,n=!1;r--;){var i=t[r];e&&!p(0,this[i],i,e,!0)||(delete this[i],n=!0)}return n}},{key:"normalize",value:function(e){var t=this,r={};return c.default.forEach(this,(function(n,i){var a=c.default.findKey(r,i);if(a)return t[a]=h(n),void delete t[i];var o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(function(e,t,r){return t.toUpperCase()+r}))}(i):String(i).trim();o!==i&&delete t[i],t[o]=h(n),r[o]=!0})),this}},{key:"concat",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i;return(i=this.constructor).concat.apply(i,[this].concat(r(u)(t)))}},{key:"toJSON",value:function(e){var t=Object.create(null);return c.default.forEach(this,(function(r,n){null!=r&&!1!==r&&(t[n]=e&&c.default.isArray(r)?r.join(", "):r)})),t}},{key:v,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map((function(e){var t=r(s)(e,2);return t[0]+": "+t[1]})).join("\n")}},{key:g,get:function(){return"AxiosHeaders"}}],[{key:"from",value:function(e){return e instanceof this?e:new this(e)}},{key:"concat",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=new this(e);return r.forEach((function(e){return i.set(e)})),i}},{key:"accessor",value:function(e){var t=(this[f]=this[f]={accessors:{}}).accessors,r=this.prototype;function n(e){var n=d(e);t[n]||(!function(e,t){var r=c.default.toCamelCase(" "+t);["get","set","has"].forEach((function(n){Object.defineProperty(e,n+r,{value:function(e,r,i){return this[n].call(this,t,e,r,i)},configurable:!0})}))}(r,e),t[n]=!0)}return c.default.isArray(e)?e.forEach(n):n(e),this}}]),e}();m.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),c.default.freezeMethods(m.prototype),c.default.freezeMethods(m);var y=m})),a.register("1t1Wn",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return r.default(e)||n.default(e,t)||o.default(e,t)||i.default()};var r=s(a("8slrw")),n=s(a("7AJDX")),i=s(a("ifqQW")),o=s(a("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),a.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),a.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return r.default(e)||n.default(e)||o.default(e)||i.default()};var r=s(a("kMC0W")),n=s(a("7AJDX")),i=s(a("8CtQK")),o=s(a("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("1nUSP",(function(t,r){e(t.exports,"default",(function(){return i}));var n=a("c4C4W").default.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),i=function(e){var t,r,i,a={};return e&&e.split("\n").forEach((function(e){i=e.indexOf(":"),t=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!t||a[t]&&n[t]||("set-cookie"===t?a[t]?a[t].push(r):a[t]=[r]:a[t]=a[t]?a[t]+", "+r:r)})),a}})),a.register("lXDKh",(function(t,r){function n(e){return!(!e||!e.__CANCEL__)}e(t.exports,"default",(function(){return n}))})),a.register("dW1zJ",(function(t,r){e(t.exports,"default",(function(){return o}));var n=a("5TB86");function i(e,t,r){n.default.call(this,null==e?"canceled":e,n.default.ERR_CANCELED,t,r),this.name="CanceledError"}a("c4C4W").default.inherits(i,n.default,{__CANCEL__:!0});var o=i})),a.register("fA43c",(function(t,r){e(t.exports,"default",(function(){return c}));var n=a("c4C4W"),i=a("beknR"),o=a("btSY7"),s=a("5TB86"),u={http:i.default,xhr:o.default};n.default.forEach(u,(function(e,t){if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var c={getAdapter:function(e){for(var t,r,i=(e=n.default.isArray(e)?e:[e]).length,a=0;a<i&&(t=e[a],!(r=n.default.isString(t)?u[t.toLowerCase()]:t));a++);if(!r){if(!1===r)throw new(0,s.default)("Adapter ".concat(t," is not supported by the environment"),"ERR_NOT_SUPPORT");throw new Error(n.default.hasOwnProp(u,t)?"Adapter '".concat(t,"' is not available in the build"):"Unknown adapter '".concat(t,"'"))}if(!n.default.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:u}})),a.register("btSY7",(function(t,r){e(t.exports,"default",(function(){return y}));var n=a("c4C4W"),i=a("j97bH"),o=a("jFG8L"),s=a("6d5Pb"),u=a("gYMA1"),c=a("9jFfm"),l=a("gWbUy"),f=a("5TB86"),d=a("dW1zJ"),h=a("4ULKu"),p=a("d0XKg"),v=a("gHHim"),g=a("dSDGE");function m(e,t){var r=0,n=(0,g.default)(50,250);return function(i){var a=i.loaded,o=i.lengthComputable?i.total:void 0,s=a-r,u=n(s);r=a;var c={loaded:a,total:o,progress:o?a/o:void 0,bytes:s,rate:u||void 0,estimated:u&&o&&a<=o?(o-a)/u:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}var y="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,r){var a,g=e.data,y=v.default.from(e.headers).normalize(),b=e.responseType;function k(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}n.default.isFormData(g)&&(p.default.isStandardBrowserEnv||p.default.isStandardBrowserWebWorkerEnv)&&y.setContentType(!1);var w=new XMLHttpRequest;if(e.auth){var _=e.auth.username||"",E=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";y.set("Authorization","Basic "+btoa(_+":"+E))}var x=(0,u.default)(e.baseURL,e.url);function I(){if(w){var n=v.default.from("getAllResponseHeaders"in w&&w.getAllResponseHeaders()),a={data:b&&"text"!==b&&"json"!==b?w.response:w.responseText,status:w.status,statusText:w.statusText,headers:n,config:e,request:w};(0,i.default)((function(e){t(e),k()}),(function(e){r(e),k()}),a),w=null}}if(w.open(e.method.toUpperCase(),(0,s.default)(x,e.params,e.paramsSerializer),!0),w.timeout=e.timeout,"onloadend"in w?w.onloadend=I:w.onreadystatechange=function(){w&&4===w.readyState&&(0!==w.status||w.responseURL&&0===w.responseURL.indexOf("file:"))&&setTimeout(I)},w.onabort=function(){w&&(r(new(0,f.default)("Request aborted",f.default.ECONNABORTED,e,w)),w=null)},w.onerror=function(){r(new(0,f.default)("Network Error",f.default.ERR_NETWORK,e,w)),w=null},w.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||l.default;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(new(0,f.default)(t,n.clarifyTimeoutError?f.default.ETIMEDOUT:f.default.ECONNABORTED,e,w)),w=null},p.default.isStandardBrowserEnv){var T=(e.withCredentials||(0,c.default)(x))&&e.xsrfCookieName&&o.default.read(e.xsrfCookieName);T&&y.set(e.xsrfHeaderName,T)}void 0===g&&y.setContentType(null),"setRequestHeader"in w&&n.default.forEach(y.toJSON(),(function(e,t){w.setRequestHeader(t,e)})),n.default.isUndefined(e.withCredentials)||(w.withCredentials=!!e.withCredentials),b&&"json"!==b&&(w.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&w.addEventListener("progress",m(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&w.upload&&w.upload.addEventListener("progress",m(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=function(t){w&&(r(!t||t.type?new(0,d.default)(null,e,w):t),w.abort(),w=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));var O=(0,h.default)(x);O&&-1===p.default.protocols.indexOf(O)?r(new(0,f.default)("Unsupported protocol "+O+":",f.default.ERR_BAD_REQUEST,e)):w.send(g||null)}))}})),a.register("j97bH",(function(t,r){e(t.exports,"default",(function(){return i}));var n=a("5TB86");function i(e,t,r){var i=r.config.validateStatus;r.status&&i&&!i(r.status)?t(new(0,n.default)("Request failed with status code "+r.status,[n.default.ERR_BAD_REQUEST,n.default.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}})),a.register("jFG8L",(function(t,r){e(t.exports,"default",(function(){return i}));var n=a("c4C4W"),i=a("d0XKg").default.isStandardBrowserEnv?{write:function(e,t,r,i,a,o){var s=[];s.push(e+"="+encodeURIComponent(t)),n.default.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.default.isString(i)&&s.push("path="+i),n.default.isString(a)&&s.push("domain="+a),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),a.register("gYMA1",(function(t,r){e(t.exports,"default",(function(){return o}));var n=a("7xjuH"),i=a("ftRZn");function o(e,t){return e&&!(0,n.default)(t)?(0,i.default)(e,t):t}})),a.register("7xjuH",(function(t,r){function n(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}e(t.exports,"default",(function(){return n}))})),a.register("ftRZn",(function(t,r){function n(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}e(t.exports,"default",(function(){return n}))})),a.register("9jFfm",(function(t,r){e(t.exports,"default",(function(){return i}));var n=a("c4C4W"),i=a("d0XKg").default.isStandardBrowserEnv?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function i(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=i(window.location.href),function(t){var r=n.default.isString(t)?i(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}})),a.register("4ULKu",(function(t,r){function n(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}e(t.exports,"default",(function(){return n}))})),a.register("dSDGE",(function(t,r){e(t.exports,"default",(function(){return n}));var n=function(e,t){e=e||10;var r,n=new Array(e),i=new Array(e),a=0,o=0;return t=void 0!==t?t:1e3,function(s){var u=Date.now(),c=i[o];r||(r=u),n[a]=s,i[a]=u;for(var l=o,f=0;l!==a;)f+=n[l++],l%=e;if((a=(a+1)%e)===o&&(o=(o+1)%e),!(u-r<t)){var d=c&&u-c;return d?Math.round(1e3*f/d):void 0}}}})),a.register("knWMA",(function(t,r){e(t.exports,"default",(function(){return s}));var n=a("c4C4W"),i=a("gHHim"),o=function(e){return e instanceof i.default?e.toJSON():e};function s(e,t){t=t||{};var r={};function i(e,t,r){return n.default.isPlainObject(e)&&n.default.isPlainObject(t)?n.default.merge.call({caseless:r},e,t):n.default.isPlainObject(t)?n.default.merge({},t):n.default.isArray(t)?t.slice():t}function a(e,t,r){return n.default.isUndefined(t)?n.default.isUndefined(e)?void 0:i(void 0,e,r):i(e,t,r)}function s(e,t){if(!n.default.isUndefined(t))return i(void 0,t)}function u(e,t){return n.default.isUndefined(t)?n.default.isUndefined(e)?void 0:i(void 0,e):i(void 0,t)}function c(r,n,a){return a in t?i(r,n):a in e?i(void 0,r):void 0}var l={url:s,method:s,data:s,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:c,headers:function(e,t){return a(o(e),o(t),!0)}};return n.default.forEach(Object.keys(e).concat(Object.keys(t)),(function(i){var o=l[i]||a,s=o(e[i],t[i],i);n.default.isUndefined(s)&&o!==c||(r[i]=s)})),r}})),a.register("9SeBc",(function(t,n){e(t.exports,"default",(function(){return l}));var i=a("l5bVx"),o=a("kLR29"),s=a("5TB86"),u={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){u[e]=function(n){return(void 0===n?"undefined":r(i)(n))===e||"a"+(t<1?"n ":" ")+e}}));var c={};u.transitional=function(e,t,r){function n(e,t){return"[Axios v"+o.VERSION+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,i,a){if(!1===e)throw new(0,s.default)(n(i," has been removed"+(t?" in "+t:"")),s.default.ERR_DEPRECATED);return t&&!c[i]&&(c[i]=!0,console.warn(n(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,i,a)}};var l={assertOptions:function(e,t,r){if("object"!=typeof e)throw new(0,s.default)("options must be an object",s.default.ERR_BAD_OPTION_VALUE);for(var n=Object.keys(e),i=n.length;i-- >0;){var a=n[i],o=t[a];if(o){var u=e[a],c=void 0===u||o(u,a,e);if(!0!==c)throw new(0,s.default)("option "+a+" must be "+c,s.default.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new(0,s.default)("Unknown option "+a,s.default.ERR_BAD_OPTION)}},validators:u}})),a.register("kLR29",(function(t,r){e(t.exports,"VERSION",(function(){return n}));var n="1.3.4"})),a.register("77MZz",(function(t,n){e(t.exports,"default",(function(){return u}));var i=a("8MBJY"),o=a("a2hTj"),s=a("dW1zJ"),u=function(){function e(t){if(r(i)(this,e),"function"!=typeof t)throw new TypeError("executor must be a function.");var n;this.promise=new Promise((function(e){n=e}));var a=this;this.promise.then((function(e){if(a._listeners){for(var t=a._listeners.length;t-- >0;)a._listeners[t](e);a._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){a.subscribe(e),t=e})).then(e);return r.cancel=function(){a.unsubscribe(t)},r},t((function(e,t,r){a.reason||(a.reason=new(0,s.default)(e,t,r),n(a.reason))}))}return r(o)(e,[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}},{key:"unsubscribe",value:function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}}}],[{key:"source",value:function(){var t;return{token:new e((function(e){t=e})),cancel:t}}}]),e}()})),a.register("9BdDr",(function(t,r){function n(e){return function(t){return e.apply(null,t)}}e(t.exports,"default",(function(){return n}))})),a.register("kv87N",(function(t,r){e(t.exports,"default",(function(){return i}));var n=a("c4C4W");function i(e){return n.default.isObject(e)&&!0===e.isAxiosError}})),a.register("5siR6",(function(t,n){e(t.exports,"default",(function(){return s}));var i=a("1t1Wn"),o={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(o).forEach((function(e){var t=r(i)(e,2),n=t[0],a=t[1];o[a]=n}));var s=o})),a.register("5RN7g",(function(t,r){e(t.exports,"default",(function(){return n}));var n="https://www.thecocktaildb.com/api/json/v1/1/"})),a.register("aNJCr",(function(t,r){var n;e(t.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var i={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),i[e]=t),t}})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}})),a.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){return o.apply(null,arguments)};var r,n=(r=a("gD1JV"))&&r.__esModule?r:{default:r};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,r){return(o=i()?Reflect.construct:function(e,t,r){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return r&&n.default(a,r.prototype),a}).apply(null,arguments)}})),a.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),a.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=n.default(e)););return e};var r,n=(r=a("fVNic"))&&r.__esModule?r:{default:r}})),a.register("fqZse",(function(t,n){e(t.exports,"default",(function(){return c}));var i=a("8MBJY"),o=a("a2hTj"),s=JSON.parse(localStorage.getItem("favorite-cocktails")),u=JSON.parse(localStorage.getItem("favorite-ingredients")),c=function(){"use strict";function e(){r(i)(this,e),this.cocktails=s||[],this.ingredients=u||[]}return r(o)(e,[{key:"addCocktail",value:function(e){this.cocktails.push(e),localStorage.setItem("favorite-cocktails",JSON.stringify(this.cocktails))}},{key:"addIngredient",value:function(e){this.ingredients.push(e),localStorage.setItem("favorite-ingredients",JSON.stringify(this.ingredients))}},{key:"removeCocktail",value:function(e){var t=this.cocktails.indexOf(e);this.cocktails.splice(t,1),localStorage.setItem("favorite-cocktails",JSON.stringify(this.cocktails))}},{key:"removeIngredient",value:function(e){var t=this.ingredients.indexOf(e);this.ingredients.splice(t,1),localStorage.setItem("favorite-ingredients",JSON.stringify(this.ingredients))}}]),e}()})),a("iE7OH").register(JSON.parse('{"EVgbq":"cocktails.e40a64f1.js","410VS":"icons.5e4a2d51.svg","gdgcn":"error-img.b8683dc8.png"}'));var o=a("bpxeT"),s=a("2TvXO");a("dIxxU");var u,c=a("ke5Oc"),l=a("5RN7g");u=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("410VS");var f=document.querySelector(".gallery .container");function d(e){var t=JSON.parse(localStorage.getItem("favorite-cocktails")),r=document.querySelector(".gallery__list"),n=document.querySelector(".gallery__title"),i=document.querySelector(".error-img");n.innerHTML="\n    Cocktails\n  ",i&&i.remove();var a=e.map((function(e){return t&&t.includes(e.idDrink)?'\n              <li class="gallery__item">\n              <div class="coctails__card">\n                <div class="img_wrapper">\n                  <img class="coctail__image" src="'.concat(e.strDrinkThumb,'" alt="').concat(e.strCategory,'"/>\n                </div>\n                <div class="coctails__info">\n                  <h3 class="coctails__title">').concat(e.strDrink,'</h3>\n                  <div class="coctails__btn">\n                    <button class="primary-load-more" data-type="open-learn-more" data-id="').concat(e.idDrink,'" type="button">Learn more</button>\n                    <button class="secondary-add-favorites" data-id="').concat(e.idDrink,'" data-favorite="cocktail" type="button">\n                      Remove\n                      <svg class="empty__heart" width="21" height="19">\n                          <use href="').concat(u,'#icon-full-heart"></use>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </li>\n            '):'\n              <li class="gallery__item">\n              <div class="coctails__card">\n                <div class="img_wrapper">\n                  <img class="coctail__image" src="'.concat(e.strDrinkThumb,'" alt="').concat(e.strCategory,'"/>\n                </div>\n                <div class="coctails__info">\n                  <h3 class="coctails__title">').concat(e.strDrink,'</h3>\n                  <div class="coctails__btn">\n                    <button class="primary-load-more" data-type="open-learn-more" data-id="').concat(e.idDrink,'" type="button">Learn more</button>\n                    <button class="secondary-add-favorites" data-id="').concat(e.idDrink,'" data-favorite="cocktail" type="button">\n                      Add to\n                      <svg class="empty__heart" width="21" height="19">\n                        <use href="').concat(u,'#icon-empty-heart"></use>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </li>\n            ')})).join("");r.innerHTML+=a}f&&(f.innerHTML+='\n    <ul class="gallery__list"></ul>\n  ');var h;h=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("gdgcn");document.querySelector(".gallery .container");var p=document.querySelector(".gallery__list"),v='<img\nclass="error-img"\nsrc="'.concat(h,'"\nalt="error-img"\nwidth="345"\n/>\n');function g(){var e=document.querySelector(".gallery__title");p.replaceChildren(),e.innerHTML="\n    Sorry, we didn't find any cocktail for you\n    ",p.innerHTML='<li class="error_item">'.concat(v,"</li>")}var m=a("8nrFW"),y={};function b(e){var t=1,n=[];return e.forEach((function(e){n.push(e),window.screen.width<767&&3===n.length&&(y[t]=r(m)(n),t+=1,n=[]),window.screen.width>=768&&window.screen.width<1280&&6===n.length&&(y[t]=r(m)(n),t+=1,n=[]),window.screen.width>=1280&&9===n.length&&(y[t]=r(m)(n),t+=1,n=[])})),n.length>0&&(y[t]=r(m)(n)),y}o=a("bpxeT"),s=a("2TvXO");a("dIxxU");c=a("ke5Oc"),l=a("5RN7g");function k(e){return w.apply(this,arguments)}function w(){return(w=r(o)(r(s).mark((function e(t){var n;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.default.get("".concat(l.default).concat(t));case 3:return n=e.sent,e.abrupt("return",n.data.drinks);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var _=document.querySelector(".pagination"),E=document.querySelector(".gallery__list"),x="coctail-data-state",I=1;function T(e){var t=JSON.parse(sessionStorage.getItem(x)),r=document.querySelector(".active");e.target.classList.contains("numbers")&&(r.classList.remove("active"),e.target.classList.add("active"),I=+e.target.textContent,E.innerHTML="",d(t[I])),e.target.classList.contains("next")&&(r.classList.remove("active"),r.nextElementSibling.classList.add("active"),I+=1,E.innerHTML="",d(t[I])),e.target.classList.contains("previous")&&(r.classList.remove("active"),r.previousElementSibling.classList.add("active"),I-=1,E.innerHTML="",d(t[I]))}function O(){return window.screen.width<767?3:window.screen.width>=768&&window.screen.width<1280?6:window.screen.width>1280?9:void 0}if(_&&_.addEventListener("click",T),E)for(var S=1;S<=O();S++)k("random.php").then(d);function R(e){document.querySelector(".numbers-container").insertAdjacentHTML("beforeend",' \n  <button class="numbers" type="button">'.concat(e,"</button>"))}var A=document.querySelector(".header__search"),C=document.querySelector(".header__search.tablet"),N=document.querySelector(".header__search.mobile-form"),L=(document.querySelector(".header__input"),document.querySelector(".numbers-container"));function P(e){return D.apply(this,arguments)}function D(){return(D=r(o)(r(s).mark((function e(t){var n,i,a;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(l.default,"search.php?s=").concat(t),e.prev=1,e.next=4,c.default.get("".concat(n));case 4:return i=e.sent.data,e.abrupt("return",i);case 8:return e.prev=8,e.t0=e.catch(1),a=e.t0.response.status,e.abrupt("return",a);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function U(e){return M.apply(this,arguments)}function M(){return(M=r(o)(r(s).mark((function e(t){var n,i,a,o,u;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),E.innerHTML="",L.innerHTML="",sessionStorage.removeItem(x),e.next=6,P(t.target[0].value.trim());case 6:if(null!==(n=e.sent.drinks)){e.next=12;break}return _.style.display="none",g(),t.target[0].value="",e.abrupt("return");case 12:if(t.target[0].value="",i=b(n),sessionStorage.setItem(x,JSON.stringify(i)),sessionStorage.getItem(x)){for(a=JSON.parse(sessionStorage.getItem(x)),o=Object.keys(a),u=1;u<=o.length;u++)R(u);_.style.display="flex",L.firstElementChild.classList.add("active")}n.length<=O()&&(_.style.display="none"),d(i[I]);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}A.addEventListener("submit",U),C&&C.addEventListener("submit",U),N&&N.addEventListener("submit",U),_&&(_.style.display="none",_.addEventListener("click",T));var B,j,F,H;document.querySelector(".favorite-cocktails__list"),document.querySelector(".favorite-ingredients__list"),document.querySelector(".favorite-button__remove");B=document.querySelector(".js-menu-container"),j=document.querySelector(".js-open-menu"),F=document.querySelector(".js-close-menu"),H=function(){var e="true"===j.getAttribute("aria-expanded")||!1;j.setAttribute("aria-expanded",!e),B.classList.toggle("is-open")},j.addEventListener("click",H),F.addEventListener("click",H),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(B.classList.remove("is-open"),j.setAttribute("aria-expanded",!1))}));o=a("bpxeT"),s=a("2TvXO"),o=a("bpxeT");var V=a("8MBJY"),W=a("a2hTj"),z=a("hKHmD"),q=(m=a("8nrFW"),s=a("2TvXO"),o=a("bpxeT"),V=a("8MBJY"),W=a("a2hTj"),a("1t1Wn")),J=(m=a("8nrFW"),s=a("2TvXO"),a("ds8z5")),K=(V=a("8MBJY"),W=a("a2hTj"),a("eYQtU")),G=(q=a("1t1Wn"),m=a("8nrFW"),{});Object.defineProperty(G,"__esModule",{value:!0}),G.default=function(e){return ee(e)};var X=Q(a("ge8co")),Y=Q(a("cZGw3")),Z=Q(a("fVNic")),$=Q(a("gD1JV"));function Q(e){return e&&e.__esModule?e:{default:e}}function ee(e){var t="function"==typeof Map?new Map:void 0;return ee=function(e){if(null===e||!Y.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return X.default(e,arguments,Z.default(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),$.default(r,e)},ee(e)}var te,re,ne,ie=a("2MbLg"),ae=te={};function oe(){throw new Error("setTimeout has not been defined")}function se(){throw new Error("clearTimeout has not been defined")}function ue(e){if(re===setTimeout)return setTimeout(e,0);if((re===oe||!re)&&setTimeout)return re=setTimeout,setTimeout(e,0);try{return re(e,0)}catch(t){try{return re.call(null,e,0)}catch(t){return re.call(this,e,0)}}}!function(){try{re="function"==typeof setTimeout?setTimeout:oe}catch(e){re=oe}try{ne="function"==typeof clearTimeout?clearTimeout:se}catch(e){ne=se}}();var ce,le=[],fe=!1,de=-1;function he(){fe&&ce&&(fe=!1,ce.length?le=ce.concat(le):de=-1,le.length&&pe())}function pe(){if(!fe){var e=ue(he);fe=!0;for(var t=le.length;t;){for(ce=le,le=[];++de<t;)ce&&ce[de].run();de=-1,t=le.length}ce=null,fe=!1,function(e){if(ne===clearTimeout)return clearTimeout(e);if((ne===se||!ne)&&clearTimeout)return ne=clearTimeout,clearTimeout(e);try{ne(e)}catch(t){try{return ne.call(null,e)}catch(t){return ne.call(this,e)}}}(e)}}function ve(e,t){this.fun=e,this.array=t}function ge(){}ae.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];le.push(new ve(e,t)),1!==le.length||fe||ue(pe)},ve.prototype.run=function(){this.fun.apply(null,this.array)},ae.title="browser",ae.browser=!0,ae.env={},ae.argv=[],ae.version="",ae.versions={},ae.on=ge,ae.addListener=ge,ae.once=ge,ae.off=ge,ae.removeListener=ge,ae.removeAllListeners=ge,ae.emit=ge,ae.prependListener=ge,ae.prependOnceListener=ge,ae.listeners=function(e){return[]},ae.binding=function(e){throw new Error("process.binding is not supported")},ae.cwd=function(){return"/"},ae.chdir=function(e){throw new Error("process.chdir is not supported")},ae.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var me=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):55296==(64512&i)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},ye={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,f=(3&a)<<4|s>>4,d=(15&s)<<2|c>>6,h=63&c;u||(h=64,o||(d=64)),n.push(r[l],r[f],r[d],r[h])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(me(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],r=0,n=0;r<e.length;){var i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(o>>10)),t[n++]=String.fromCharCode(56320+(1023&o))}else{var s=e[r++],u=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],i=0;i<e.length;){var a=r[e.charAt(i++)],o=i<e.length?r[e.charAt(i)]:0,s=++i<e.length?r[e.charAt(i)]:64,u=++i<e.length?r[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw new be;var c=a<<2|o>>4;if(n.push(c),64!==s){var l=o<<4&240|s>>2;if(n.push(l),64!==u){var f=s<<6&192|u;n.push(f)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},be=function(e){"use strict";r(K)(n,e);var t=r(ie)(n);function n(){var e;return r(V)(this,n),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).name="DecodeBase64StringError",e}return n}(r(G)(Error)),ke=function(e){return function(e){var t=me(e);return ye.encodeByteArray(t,!0)}(e).replace(/\./g,"")},we=function(e){try{return ye.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _e=function(){
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},Ee=function(){try{return _e()||function(){if(void 0!==te&&void 0!==te.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&we(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},xe=function(e){var t,r;return null===(r=null===(t=Ee())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},Ie=function(e){var t=xe(e);if(t){var r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw new Error("Invalid host ".concat(t," with no separate hostname and port!"));var n=parseInt(t.substring(r+1),10);return"["===t[0]?[t.substring(1,r-1),n]:[t.substring(0,r),n]}},Te=function(){var e;return null===(e=Ee())||void 0===e?void 0:e.config},Oe=function(e){var t;return null===(t=Ee())||void 0===t?void 0:t["_".concat(e)]},Se=function(){"use strict";function e(){var t=this;r(V)(this,e),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,r){t.resolve=e,t.reject=r}))}return r(W)(e,[{key:"wrapCallback",value:function(e){var t=this;return function(r,n){r?t.reject(r):t.resolve(n),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(r):e(r,n))}}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Re(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var r=t||"demo-project",n=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=Object.assign({iss:"https://securetoken.google.com/".concat(r),aud:r,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[ke(JSON.stringify({alg:"none",type:"JWT"})),ke(JSON.stringify(a)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Ce(){try{return"object"==typeof indexedDB}catch(e){return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ne=function(e){"use strict";r(K)(n,e);var t=r(ie)(n);function n(e,i,a){var o;return r(V)(this,n),(o=t.call(this,i)).code=e,o.customData=a,o.name="FirebaseError",Object.setPrototypeOf(r(J)(o),n.prototype),Error.captureStackTrace&&Error.captureStackTrace(r(J)(o),Le.prototype.create),o}return n}(r(G)(Error)),Le=function(){"use strict";function e(t,n,i){r(V)(this,e),this.service=t,this.serviceName=n,this.errors=i}return r(W)(e,[{key:"create",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=r[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?Pe(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new Ne(a,u,i);return c}}]),e}();function Pe(e,t){return e.replace(De,(function(e,r){var n=t[r];return null!=n?String(n):"<".concat(r,"?>")}))}var De=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Me(e,t){if(e===t)return!0;var r=Object.keys(e),n=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!n.includes(c))return!1;var l=e[c],f=t[c];if(Be(l)&&Be(f)){if(!Me(l,f))return!1}else if(l!==f)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var d=!0,h=!1,p=void 0;try{for(var v,g=n[Symbol.iterator]();!(d=(v=g.next()).done);d=!0){var m=v.value;if(!r.includes(m))return!1}}catch(e){h=!0,p=e}finally{try{d||null==g.return||g.return()}finally{if(h)throw p}}return!0}function Be(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function je(e){var t=[],n=!0,i=!1,a=void 0;try{for(var o,s=function(e,n){var i=r(q)(n.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){t.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(e)[Symbol.iterator]();!(n=(o=u.next()).done);n=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(i)throw a}}return t.length?"&"+t.join("&"):""}function Fe(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var n=r(q)(e.split("="),2),i=n[0],a=n[1];t[decodeURIComponent(i)]=decodeURIComponent(a)}})),t}function He(e){var t=e.indexOf("?");if(!t)return"";var r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve=function(){"use strict";function e(t,n){var i=this;r(V)(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then((function(){t(i)})).catch((function(e){i.error(e)}))}return r(W)(e,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,r){var n,i=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");void 0===(n=function(e,t){if("object"!=typeof e||null===e)return!1;var r=!0,n=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r}).next&&(n.next=We),void 0===n.error&&(n.error=We),void 0===n.complete&&(n.complete=We);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?n.error(i.finalError):n.complete()}catch(e){}})),this.observers.push(n),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var r=this;this.task.then((function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),e}();function We(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ze(e){return e&&e._delegate?e._delegate:e}var qe=function(){"use strict";function e(t,n,i){r(V)(this,e),this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return r(W)(e,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),e}(),Je="[DEFAULT]",Ke=function(){"use strict";function e(t,n){r(V)(this,e),this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return r(W)(e,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var r=new Se;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{var n=this.getOrInitializeService({instanceIdentifier:t});n&&r.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:Je})}catch(e){}var t=!0,n=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var s=r(q)(a.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var f=this.getOrInitializeService({instanceIdentifier:l});c.resolve(f)}catch(e){}}}catch(e){n=!0,i=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=this;return r(o)(r(s).mark((function t(){var n;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Array.from(e.instances.values()),t.next=3,Promise.all(r(m)(n.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(r(m)(n.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return t.stop()}}),t)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.options,n=void 0===t?{}:t,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:n}),o=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var f=r(q)(c.value,2),d=f[0],h=f[1],p=this.normalizeInstanceIdentifier(d);i===p&&h.resolve(a)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return a}},{key:"onInit",value:function(e,t){var r,n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);var a=this.instances.get(n);return a&&e(a,n),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var r=this.onInitCallbacks.get(t);if(r){var n=!0,i=!1,a=void 0;try{for(var o,s=r[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,r=e.instanceIdentifier,n=e.options,i=void 0===n?{}:n,a=this.instances.get(r);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=r,t===Je?void 0:t),options:i}),this.instances.set(r,a),this.instancesOptions.set(r,i),this.invokeOnInitCallbacks(a,r),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,r,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je;return this.component?this.component.multipleInstances?e:Je:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge,Xe,Ye=function(){"use strict";function e(t){r(V)(this,e),this.name=t,this.providers=new Map}return r(W)(e,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Ke(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),e}(),Ze=(V=a("8MBJY"),W=a("a2hTj"),z=a("hKHmD"),m=a("8nrFW"),[]);(Xe=Ge||(Ge={}))[Xe.DEBUG=0]="DEBUG",Xe[Xe.VERBOSE=1]="VERBOSE",Xe[Xe.INFO=2]="INFO",Xe[Xe.WARN=3]="WARN",Xe[Xe.ERROR=4]="ERROR",Xe[Xe.SILENT=5]="SILENT";var $e,Qe={debug:Ge.DEBUG,verbose:Ge.VERBOSE,info:Ge.INFO,warn:Ge.WARN,error:Ge.ERROR,silent:Ge.SILENT},et=Ge.INFO,tt=($e={},r(z)($e,Ge.DEBUG,"log"),r(z)($e,Ge.VERBOSE,"log"),r(z)($e,Ge.INFO,"info"),r(z)($e,Ge.WARN,"warn"),r(z)($e,Ge.ERROR,"error"),$e),rt=function(e,t){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];var o;if(!(t<e.logLevel)){var s=(new Date).toISOString(),u=tt[t];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(t,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(e.name,":")].concat(r(m)(i)))}},nt=function(){"use strict";function e(t){r(V)(this,e),this.name=t,this._logLevel=et,this._logHandler=rt,this._userLogHandler=null,Ze.push(this)}return r(W)(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in Ge))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?Qe[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ge.DEBUG].concat(r(m)(t))),this._logHandler.apply(this,[this,Ge.DEBUG].concat(r(m)(t)))}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ge.VERBOSE].concat(r(m)(t))),this._logHandler.apply(this,[this,Ge.VERBOSE].concat(r(m)(t)))}},{key:"info",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ge.INFO].concat(r(m)(t))),this._logHandler.apply(this,[this,Ge.INFO].concat(r(m)(t)))}},{key:"warn",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ge.WARN].concat(r(m)(t))),this._logHandler.apply(this,[this,Ge.WARN].concat(r(m)(t)))}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ge.ERROR].concat(r(m)(t))),this._logHandler.apply(this,[this,Ge.ERROR].concat(r(m)(t)))}}]),e}();o=a("bpxeT");var it={};Object.defineProperty(it,"__esModule",{value:!0}),it.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){ot.default(e,t,r[t])}))}return e};var at,ot=(at=a("hKHmD"))&&at.__esModule?at:{default:at};var st,ut;m=a("8nrFW"),s=a("2TvXO"),m=a("8nrFW");var ct=new WeakMap,lt=new WeakMap,ft=new WeakMap,dt=new WeakMap,ht=new WeakMap;var pt={get:function(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return lt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ft.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return mt(e[t])},set:function(e,t,r){return e[t]=r,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function vt(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ut||(ut=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e.apply(yt(this),r),mt(ct.get(this))}:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return mt(e.apply(yt(this),r))}:function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];var o,s=(o=e).call.apply(o,[yt(this),t].concat(r(m)(i)));return ft.set(s,t.sort?t.sort():[t]),mt(s)}}function gt(e){return"function"==typeof e?vt(e):(e instanceof IDBTransaction&&function(e){if(!lt.has(e)){var t=new Promise((function(t,r){var n=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),n()},a=function(){r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));lt.set(e,t)}}(e),t=e,(st||(st=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,pt):e);var t}function mt(e){if(e instanceof IDBRequest)return t=e,(r=new Promise((function(e,r){var n=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(mt(t.result)),n()},a=function(){r(t.error),n()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&ct.set(e,t)})).catch((function(){})),ht.set(r,t),r;var t,r;if(dt.has(e))return dt.get(e);var n=gt(e);return n!==e&&(dt.set(e,n),ht.set(n,e)),n}var yt=function(e){return ht.get(e)};function bt(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.blocked,i=r.upgrade,a=r.blocking,o=r.terminated,s=indexedDB.open(e,t),u=mt(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(mt(s.result),e.oldVersion,e.newVersion,mt(s.transaction))})),n&&s.addEventListener("blocked",(function(){return n()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var kt=["get","getKey","getAll","getAllKeys","count"],wt=["put","add","delete","clear"],_t=new Map;function Et(e,t){if(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t){if(_t.get(t))return _t.get(t);var n=t.replace(/FromIndex$/,""),i=t!==n,a=wt.includes(n);if(n in(i?IDBIndex:IDBObjectStore).prototype&&(a||kt.includes(n))){var u,c=(u=r(o)(r(s).mark((function e(t){var o,u,c,l,f,d,h=arguments;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o=h.length,u=new Array(o>1?o-1:0),c=1;c<o;c++)u[c-1]=h[c];return f=this.transaction(t,a?"readwrite":"readonly"),d=f.store,i&&(d=d.index(u.shift())),e.next=7,Promise.all([(l=d)[n].apply(l,r(m)(u)),a&&f.done]);case 7:return e.abrupt("return",e.sent[0]);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return u.apply(this,arguments)});return _t.set(t,c),c}}}pt=function(e){return r(it)({},e,{get:function(t,r,n){return Et(t,r)||e.get(t,r,n)},has:function(t,r){return!!Et(t,r)||e.has(t,r)}})}(pt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var xt=function(){"use strict";function e(t){r(V)(this,e),this.container=t}return r(W)(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}();var It,Tt,Ot="@firebase/app",St="0.9.4",Rt=new nt("@firebase/app"),At="[DEFAULT]",Ct=(It={},r(z)(It,Ot,"fire-core"),r(z)(It,"@firebase/app-compat","fire-core-compat"),r(z)(It,"@firebase/analytics","fire-analytics"),r(z)(It,"@firebase/analytics-compat","fire-analytics-compat"),r(z)(It,"@firebase/app-check","fire-app-check"),r(z)(It,"@firebase/app-check-compat","fire-app-check-compat"),r(z)(It,"@firebase/auth","fire-auth"),r(z)(It,"@firebase/auth-compat","fire-auth-compat"),r(z)(It,"@firebase/database","fire-rtdb"),r(z)(It,"@firebase/database-compat","fire-rtdb-compat"),r(z)(It,"@firebase/functions","fire-fn"),r(z)(It,"@firebase/functions-compat","fire-fn-compat"),r(z)(It,"@firebase/installations","fire-iid"),r(z)(It,"@firebase/installations-compat","fire-iid-compat"),r(z)(It,"@firebase/messaging","fire-fcm"),r(z)(It,"@firebase/messaging-compat","fire-fcm-compat"),r(z)(It,"@firebase/performance","fire-perf"),r(z)(It,"@firebase/performance-compat","fire-perf-compat"),r(z)(It,"@firebase/remote-config","fire-rc"),r(z)(It,"@firebase/remote-config-compat","fire-rc-compat"),r(z)(It,"@firebase/storage","fire-gcs"),r(z)(It,"@firebase/storage-compat","fire-gcs-compat"),r(z)(It,"@firebase/firestore","fire-fst"),r(z)(It,"@firebase/firestore-compat","fire-fst-compat"),r(z)(It,"fire-js","fire-js"),r(z)(It,"firebase","fire-js-all"),It),Nt=new Map,Lt=new Map;function Pt(e,t){try{e.container.addComponent(t)}catch(r){Rt.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),r)}}function Dt(e){var t=e.name;if(Lt.has(t))return Rt.debug("There were multiple attempts to register component ".concat(t,".")),!1;Lt.set(t,e);var r=!0,n=!1,i=void 0;try{for(var a,o=Nt.values()[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){Pt(a.value,e)}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}return!0}function Ut(e,t){var r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Mt=(Tt={},r(z)(Tt,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),r(z)(Tt,"bad-app-name","Illegal App name: '{$appName}"),r(z)(Tt,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),r(z)(Tt,"app-deleted","Firebase App named '{$appName}' already deleted"),r(z)(Tt,"no-options","Need to provide options, when not being deployed to hosting via source."),r(z)(Tt,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),r(z)(Tt,"invalid-log-argument","First argument to `onLog` must be null or a function."),r(z)(Tt,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),r(z)(Tt,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),r(z)(Tt,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),r(z)(Tt,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),Tt),Bt=new Le("app","Firebase",Mt),jt=function(){"use strict";function e(t,n,i){var a=this;r(V)(this,e),this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new qe("app",(function(){return a}),"PUBLIC"))}return r(W)(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw Bt.create("app-deleted",{appName:this._name})}}]),e}(),Ft="9.17.2";function Ht(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e;if("object"!=typeof t){var n=t;t={name:n}}var i=Object.assign({name:At,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw Bt.create("bad-app-name",{appName:String(a)});if(r||(r=Te()),!r)throw Bt.create("no-options");var o=Nt.get(a);if(o){if(Me(r,o.options)&&Me(i,o.config))return o;throw Bt.create("duplicate-app",{appName:a})}var s=new Ye(a),u=!0,c=!1,l=void 0;try{for(var f,d=Lt.values()[Symbol.iterator]();!(u=(f=d.next()).done);u=!0){var h=f.value;s.addComponent(h)}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}var p=new jt(r,i,s);return Nt.set(a,p),p}function Vt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:At,t=Nt.get(e);if(!t&&e===At)return Ht();if(!t)throw Bt.create("no-app",{appName:e});return t}function Wt(e,t,r){var n,i=null!==(n=Ct[e])&&void 0!==n?n:e;r&&(i+="-".concat(r));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void Rt.warn(s.join(" "))}Dt(new qe("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var zt="firebase-heartbeat-store",qt=null;function Jt(){return qt||(qt=bt("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(zt)}}).catch((function(e){throw Bt.create("idb-open",{originalErrorMessage:e.message})}))),qt}function Kt(e){return Gt.apply(this,arguments)}function Gt(){return(Gt=r(o)(r(s).mark((function e(t){var n,i;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Jt();case 3:return n=e.sent,e.abrupt("return",n.transaction(zt).objectStore(zt).get(Zt(t)));case 7:e.prev=7,e.t0=e.catch(0),e.t0 instanceof Ne?Rt.warn(e.t0.message):(i=Bt.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),Rt.warn(i.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function Xt(e,t){return Yt.apply(this,arguments)}function Yt(){return(Yt=r(o)(r(s).mark((function e(t,n){var i,a,o,u;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Jt();case 3:return i=e.sent,a=i.transaction(zt,"readwrite"),o=a.objectStore(zt),e.next=8,o.put(n,Zt(t));case 8:return e.abrupt("return",a.done);case 11:e.prev=11,e.t0=e.catch(0),e.t0 instanceof Ne?Rt.warn(e.t0.message):(u=Bt.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),Rt.warn(u.message));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function Zt(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $t=function(){"use strict";function e(t){var n=this;r(V)(this,e),this.container=t,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new rr(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return n._heartbeatsCache=e,e}))}return r(W)(e,[{key:"triggerHeartbeat",value:function(){var e=this;return r(o)(r(s).mark((function t(){var n,i,a;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.container.getProvider("platform-logger").getImmediate(),i=n.getPlatformInfoString(),a=Qt(),null!==e._heartbeatsCache){t.next=7;break}return t.next=6,e._heartbeatsCachePromise;case 6:e._heartbeatsCache=t.sent;case 7:if(e._heartbeatsCache.lastSentHeartbeatDate!==a&&!e._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){t.next=11;break}return t.abrupt("return");case 11:e._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),t.abrupt("return",e._storage.overwrite(e._heartbeatsCache));case 14:case"end":return t.stop()}}),t)})))()}},{key:"getHeartbeatsHeader",value:function(){var e=this;return r(o)(r(s).mark((function t(){var n,i,a,o,u;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e._heartbeatsCache){t.next=3;break}return t.next=3,e._heartbeatsCachePromise;case 3:if(null!==e._heartbeatsCache&&0!==e._heartbeatsCache.heartbeats.length){t.next=5;break}return t.abrupt("return","");case 5:if(n=Qt(),i=er(e._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,u=ke(JSON.stringify({version:2,heartbeats:a})),e._heartbeatsCache.lastSentHeartbeatDate=n,!(o.length>0)){t.next=15;break}return e._heartbeatsCache.heartbeats=o,t.next=13,e._storage.overwrite(e._heartbeatsCache);case 13:t.next=16;break;case 15:e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache);case 16:return t.abrupt("return",u);case 17:case"end":return t.stop()}}),t)})))()}}]),e}();function Qt(){return(new Date).toISOString().substring(0,10)}function er(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,r=[],n=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=r.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),nr(r)>t)return o.dates.pop(),"break"}else if(r.push({agent:a.agent,dates:[a.date]}),nr(r)>t)return r.pop(),"break";n=n.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:r,unsentEntries:n}}var tr,rr=function(){"use strict";function e(t){r(V)(this,e),this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return r(W)(e,[{key:"runIndexedDBEnvironmentCheck",value:function(){return r(o)(r(s).mark((function e(){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Ce()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",new Promise((function(e,t){try{var r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=function(){i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=function(){r=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),e)})))()}},{key:"read",value:function(){var e=this;return r(o)(r(s).mark((function t(){var n;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._canUseIndexedDBPromise;case 2:if(t.sent){t.next=7;break}return t.abrupt("return",{heartbeats:[]});case 7:return t.next=9,Kt(e.app);case 9:return n=t.sent,t.abrupt("return",n||{heartbeats:[]});case 11:case"end":return t.stop()}}),t)})))()}},{key:"overwrite",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i,a;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,t._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,t.read();case 10:return a=r.sent,r.abrupt("return",Xt(t.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e.heartbeats}));case 12:case"end":return r.stop()}}),n)})))()}},{key:"add",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i,a;return r(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,t._canUseIndexedDBPromise;case 3:if(n.sent){n.next=8;break}return n.abrupt("return");case 8:return n.next=10,t.read();case 10:return a=n.sent,n.abrupt("return",Xt(t.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:r(m)(a.heartbeats).concat(r(m)(e.heartbeats))}));case 12:case"end":return n.stop()}}),n)})))()}}]),e}();function nr(e){return ke(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tr="",Dt(new qe("platform-logger",(function(e){return new xt(e)}),"PRIVATE")),Dt(new qe("heartbeat",(function(e){return new $t(e)}),"PRIVATE")),Wt(Ot,St,tr),Wt(Ot,St,"esm2017"),Wt("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Wt("firebase","9.17.2","app");J=a("ds8z5"),o=a("bpxeT"),V=a("8MBJY"),W=a("a2hTj"),z=a("hKHmD");var ir={};Object.defineProperty(ir,"__esModule",{value:!0}),ir.default=function(e,t,r){return or(e,t,r)};var ar=function(e){return e&&e.__esModule?e:{default:e}}(a("2mz0K"));function or(e,t,r){return(or="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=ar.default(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r||e):i.value}})(e,t,r)}var sr=a("fVNic");K=a("eYQtU"),q=a("1t1Wn"),m=a("8nrFW"),ie=a("2MbLg"),s=a("2TvXO");function ur(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}Object.create;Object.create;function cr(){return r(z)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var lr=cr,fr=new Le("auth","Firebase",cr()),dr=new nt("@firebase/auth");function hr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var a;dr.logLevel<=Ge.ERROR&&(a=dr).error.apply(a,["Auth (".concat(Ft,"): ").concat(e)].concat(r(m)(n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];throw yr.apply(void 0,[e].concat(r(m)(n)))}function vr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return yr.apply(void 0,[e].concat(r(m)(n)))}function gr(e,t,n){var i=Object.assign(Object.assign({},lr()),r(z)({},t,n));return new Le("auth","Firebase",i).create(t,{appName:e.name})}function mr(e,t,r){if(!(t instanceof r))throw r.name!==t.constructor.name&&pr(e,"argument-error"),gr(e,"argument-error","Type of ".concat(t.constructor.name," does not match expected instance.")+"Did you pass a reference from a different Auth SDK?")}function yr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var a;if("string"!=typeof e){var o,s=n[0],u=r(m)(n.slice(1));return u[0]&&(u[0].appName=e.name),(o=e._errorFactory).create.apply(o,[s].concat(r(m)(u)))}return(a=fr).create.apply(a,[e].concat(r(m)(n)))}function br(e,t){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];if(!e)throw yr.apply(void 0,[t].concat(r(m)(i)))}function kr(e){var t="INTERNAL ASSERTION FAILED: "+e;throw hr(t),new Error(t)}function wr(e,t){e||kr(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _r=new Map;function Er(e){wr(e instanceof Function,"Expected a class definition");var t=_r.get(e);return t?(wr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,_r.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(e,t){var r=Ut(e,"auth");if(r.isInitialized()){var n=r.getImmediate();if(Me(r.getOptions(),null!=t?t:{}))return n;pr(n,"already-initialized")}return r.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ir(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Tr(){return"http:"===Or()||"https:"===Or()}function Or(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!Tr()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Rr=function(){"use strict";function e(t,n){r(V)(this,e),this.shortDelay=t,this.longDelay=n,wr(n>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())||"object"==typeof navigator&&"ReactNative"===navigator.product}return r(W)(e,[{key:"get",value:function(){return Sr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(e,t){wr(e.emulator,"Emulator should always be set here");var r=e.emulator.url;return t?"".concat(r).concat(t.startsWith("/")?t.slice(1):t):r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cr,Nr=function(){"use strict";function e(){r(V)(this,e)}return r(W)(e,null,[{key:"initialize",value:function(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void kr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void kr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void kr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),e}(),Lr=(Cr={},r(z)(Cr,"CREDENTIAL_MISMATCH","custom-token-mismatch"),r(z)(Cr,"MISSING_CUSTOM_TOKEN","internal-error"),r(z)(Cr,"INVALID_IDENTIFIER","invalid-email"),r(z)(Cr,"MISSING_CONTINUE_URI","internal-error"),r(z)(Cr,"INVALID_PASSWORD","wrong-password"),r(z)(Cr,"MISSING_PASSWORD","internal-error"),r(z)(Cr,"EMAIL_EXISTS","email-already-in-use"),r(z)(Cr,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),r(z)(Cr,"INVALID_IDP_RESPONSE","invalid-credential"),r(z)(Cr,"INVALID_PENDING_TOKEN","invalid-credential"),r(z)(Cr,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),r(z)(Cr,"MISSING_REQ_TYPE","internal-error"),r(z)(Cr,"EMAIL_NOT_FOUND","user-not-found"),r(z)(Cr,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),r(z)(Cr,"EXPIRED_OOB_CODE","expired-action-code"),r(z)(Cr,"INVALID_OOB_CODE","invalid-action-code"),r(z)(Cr,"MISSING_OOB_CODE","internal-error"),r(z)(Cr,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),r(z)(Cr,"INVALID_ID_TOKEN","invalid-user-token"),r(z)(Cr,"TOKEN_EXPIRED","user-token-expired"),r(z)(Cr,"USER_NOT_FOUND","user-token-expired"),r(z)(Cr,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),r(z)(Cr,"INVALID_CODE","invalid-verification-code"),r(z)(Cr,"INVALID_SESSION_INFO","invalid-verification-id"),r(z)(Cr,"INVALID_TEMPORARY_PROOF","invalid-credential"),r(z)(Cr,"MISSING_SESSION_INFO","missing-verification-id"),r(z)(Cr,"SESSION_EXPIRED","code-expired"),r(z)(Cr,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),r(z)(Cr,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),r(z)(Cr,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),r(z)(Cr,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),r(z)(Cr,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),r(z)(Cr,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),r(z)(Cr,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),r(z)(Cr,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),r(z)(Cr,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),r(z)(Cr,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),r(z)(Cr,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),Cr),Pr=new Rr(3e4,6e4);function Dr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function Ur(e,t,r,n){return Mr.apply(this,arguments)}function Mr(){return Mr=r(o)(r(s).mark((function e(t,n,i,a){var u,c=arguments;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=c.length>4&&void 0!==c[4]?c[4]:{},e.abrupt("return",Br(t,u,r(o)(r(s).mark((function e(){var o,u,c,l;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},u={},a&&("GET"===n?u=a:o={body:JSON.stringify(a)}),c=je(Object.assign({key:t.config.apiKey},u)).slice(1),e.next=6,t._getAdditionalHeaders();case 6:return(l=e.sent)["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),e.abrupt("return",Nr.fetch()(Vr(t,t.config.apiHost,i,c),Object.assign({method:n,headers:l,referrerPolicy:"no-referrer"},o)));case 10:case"end":return e.stop()}}),e)})))));case 2:case"end":return e.stop()}}),e)}))),Mr.apply(this,arguments)}function Br(e,t,r){return jr.apply(this,arguments)}function jr(){return(jr=r(o)(r(s).mark((function e(t,n,i){var a,o,u,c,l,f,d,h,p;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t._canInitEmulator=!1,a=Object.assign(Object.assign({},Lr),n),e.prev=2,o=new Wr(t),e.next=6,Promise.race([i(),o.promise]);case 6:return u=e.sent,o.clearNetworkTimeout(),e.next=10,u.json();case 10:if(!("needConfirmation"in(c=e.sent))){e.next=13;break}throw zr(t,"account-exists-with-different-credential",c);case 13:if(!u.ok||"errorMessage"in c){e.next=17;break}return e.abrupt("return",c);case 17:if(l=u.ok?c.errorMessage:c.error.message,f=r(q)(l.split(" : "),2),d=f[0],h=f[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==d){e.next=23;break}throw zr(t,"credential-already-in-use",c);case 23:if("EMAIL_EXISTS"!==d){e.next=27;break}throw zr(t,"email-already-in-use",c);case 27:if("USER_DISABLED"!==d){e.next=29;break}throw zr(t,"user-disabled",c);case 29:if(p=a[d]||d.toLowerCase().replace(/[_\s]+/g,"-"),!h){e.next=34;break}throw gr(t,p,h);case 34:pr(t,p);case 35:e.next=42;break;case 37:if(e.prev=37,e.t0=e.catch(2),!(e.t0 instanceof Ne)){e.next=41;break}throw e.t0;case 41:pr(t,"internal-error",{message:String(e.t0)});case 42:case"end":return e.stop()}}),e,null,[[2,37]])})))).apply(this,arguments)}function Fr(e,t,r,n){return Hr.apply(this,arguments)}function Hr(){return Hr=r(o)(r(s).mark((function e(t,n,i,a){var o,u,c=arguments;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=c.length>4&&void 0!==c[4]?c[4]:{},e.next=3,Ur(t,n,i,a,o);case 3:return"mfaPendingCredential"in(u=e.sent)&&pr(t,"multi-factor-auth-required",{_serverResponse:u}),e.abrupt("return",u);case 6:case"end":return e.stop()}}),e)}))),Hr.apply(this,arguments)}function Vr(e,t,r,n){var i="".concat(t).concat(r,"?").concat(n);return e.config.emulator?Ar(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var Wr=function(){"use strict";function e(t){var n=this;r(V)(this,e),this.auth=t,this.timer=null,this.promise=new Promise((function(e,t){var r=n;n.timer=setTimeout((function(){return t(vr(r.auth,"network-request-failed"))}),Pr.get())}))}return r(W)(e,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),e}();function zr(e,t,r){var n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);var i=vr(e,t,n);return i.customData._tokenResponse=r,i}function qr(e,t){return Jr.apply(this,arguments)}function Jr(){return(Jr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(s).mark((function e(t,n){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ur(t,"POST","/v1/accounts:delete",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Kr(e,t){return Gr.apply(this,arguments)}function Gr(){return(Gr=r(o)(r(s).mark((function e(t,n){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ur(t,"POST","/v1/accounts:lookup",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(){return Yr=r(o)(r(s).mark((function e(t){var n,i,a,o,u,c,l=arguments;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]&&l[1],i=ze(t),e.next=4,i.getIdToken(n);case 4:return a=e.sent,br((o=$r(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),u="object"==typeof o.firebase?o.firebase:void 0,c=null==u?void 0:u.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:Xr(Zr(o.auth_time)),issuedAtTime:Xr(Zr(o.iat)),expirationTime:Xr(Zr(o.exp)),signInProvider:c||null,signInSecondFactor:(null==u?void 0:u.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),e)}))),Yr.apply(this,arguments)}function Zr(e){return 1e3*Number(e)}function $r(e){var t=r(q)(e.split("."),3),n=t[0],i=t[1],a=t[2];if(void 0===n||void 0===i||void 0===a)return hr("JWT malformed, contained fewer than 3 sections"),null;try{var o=we(i);return o?JSON.parse(o):(hr("Failed to decode base64 JWT payload"),null)}catch(e){return hr("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function Qr(e,t){return en.apply(this,arguments)}function en(){return en=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(s).mark((function e(t,n){var i=arguments;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",n);case 3:return e.prev=3,e.next=6,n;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof Ne&&tn(e.t0))){e.next=15;break}if(t.auth.currentUser!==t){e.next=15;break}return e.next=15,t.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[3,9]])}))),en.apply(this,arguments)}function tn(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rn=function(){"use strict";function e(t){r(V)(this,e),this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return r(W)(e,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var r=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),r}this.errorBackoff=3e4;var n=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,n)}},{key:"schedule",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var t=this.getInterval(e),n=this;this.timerId=setTimeout(r(o)(r(s).mark((function e(){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.iteration();case 2:case"end":return e.stop()}}),e)}))),t)}}},{key:"iteration",value:function(){var e=this;return r(o)(r(s).mark((function t(){return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.user.getIdToken(!0);case 3:t.next=9;break;case 5:return t.prev=5,t.t0=t.catch(0),"auth/network-request-failed"===(null===t.t0||void 0===t.t0?void 0:t.t0.code)&&e.schedule(!0),t.abrupt("return");case 9:e.schedule();case 10:case"end":return t.stop()}}),t,null,[[0,5]])})))()}}]),e}(),nn=function(){"use strict";function e(t,n){r(V)(this,e),this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}return r(W)(e,[{key:"_initializeTime",value:function(){this.lastSignInTime=Xr(this.lastLoginAt),this.creationTime=Xr(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(e){return on.apply(this,arguments)}function on(){return(on=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(s).mark((function e(t){var n,i,a,o,u,c,l,f,d,h,p;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.auth,e.next=4,t.getIdToken();case 4:return a=e.sent,e.next=7,Qr(t,Kr(i,{idToken:a}));case 7:br(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),u=o.users[0],t._notifyReloadListener(u),c=(null===(n=u.providerUserInfo)||void 0===n?void 0:n.length)?cn(u.providerUserInfo):[],l=un(t.providerData,c),f=t.isAnonymous,d=!(t.email&&u.passwordHash||(null==l?void 0:l.length)),h=!!f&&d,p={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:l,metadata:new nn(u.createdAt,u.lastLoginAt),isAnonymous:h},Object.assign(t,p);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function sn(){return(sn=r(o)(r(s).mark((function e(t){var n;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=ze(t),e.next=3,an(n);case 3:return e.next=5,n.auth._persistUserIfCurrent(n);case 5:n.auth._notifyListenersIfCurrent(n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function un(e,t){var n=e.filter((function(e){return!t.some((function(t){return t.providerId===e.providerId}))}));return r(m)(n).concat(r(m)(t))}function cn(e){return e.map((function(e){var t=e.providerId,r=ur(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}))}function ln(e,t){return fn.apply(this,arguments)}function fn(){return(fn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(s).mark((function e(t,n){var i;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Br(t,{},r(o)(r(s).mark((function e(){var i,a,o,u,c,l;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=je({grant_type:"refresh_token",refresh_token:n}).slice(1),a=t.config,o=a.tokenApiHost,u=a.apiKey,c=Vr(t,o,"/v1/token","key=".concat(u)),e.next=5,t._getAdditionalHeaders();case 5:return(l=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",Nr.fetch()(c,{method:"POST",headers:l,body:i}));case 8:case"end":return e.stop()}}),e)}))));case 2:return i=e.sent,e.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dn=function(){"use strict";function e(){r(V)(this,e),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return r(W)(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){br(e.idToken,"internal-error"),br(void 0!==e.idToken,"internal-error"),br(void 0!==e.refreshToken,"internal-error");var t,r,n="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,br(r=$r(t),"internal-error"),br(void 0!==r.exp,"internal-error"),br(void 0!==r.iat,"internal-error"),Number(r.exp)-Number(r.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}},{key:"getToken",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return r(o)(r(s).mark((function i(){return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(br(!n.accessToken||n.refreshToken,e,"user-token-expired"),t||!n.accessToken||n.isExpired){r.next=3;break}return r.abrupt("return",n.accessToken);case 3:if(!n.refreshToken){r.next=7;break}return r.next=6,n.refresh(e,n.refreshToken);case 6:return r.abrupt("return",n.accessToken);case 7:return r.abrupt("return",null);case 8:case"end":return r.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(e,t){var n=this;return r(o)(r(s).mark((function i(){var a,o,u,c;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,ln(e,t);case 2:a=r.sent,o=a.accessToken,u=a.refreshToken,c=a.expiresIn,n.updateTokensAndExpiration(o,u,Number(c));case 7:case"end":return r.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new e,this.toJSON())}},{key:"_performRefresh",value:function(){return kr("not implemented")}}],[{key:"fromJSON",value:function(t,r){var n=r.refreshToken,i=r.accessToken,a=r.expirationTime,o=new e;return n&&(br("string"==typeof n,"internal-error",{appName:t}),o.refreshToken=n),i&&(br("string"==typeof i,"internal-error",{appName:t}),o.accessToken=i),a&&(br("number"==typeof a,"internal-error",{appName:t}),o.expirationTime=a),o}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(e,t){br("string"==typeof e||void 0===e,"internal-error",{appName:t})}var pn=function(){"use strict";function e(t){r(V)(this,e);var n=t.uid,i=t.auth,a=t.stsTokenManager,o=ur(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?r(m)(o.providerData):[],this.metadata=new nn(o.createdAt||void 0,o.lastLoginAt||void 0)}return r(W)(e,[{key:"getIdToken",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Qr(t,t.stsTokenManager.getToken(t.auth,e));case 2:if(br(i=r.sent,t.auth,"internal-error"),t.accessToken===i){r.next=9;break}return t.accessToken=i,r.next=8,t.auth._persistUserIfCurrent(t);case 8:t.auth._notifyListenersIfCurrent(t);case 9:return r.abrupt("return",i);case 10:case"end":return r.stop()}}),n)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return Yr.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return sn.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(br(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(t){return new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){br(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return r(o)(r(s).mark((function i(){var a;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=!1,e.idToken&&e.idToken!==n.stsTokenManager.accessToken&&(n.stsTokenManager.updateFromServerResponse(e),a=!0),!t){r.next=5;break}return r.next=5,an(n);case 5:return r.next=7,n.auth._persistUserIfCurrent(n);case 7:a&&n.auth._notifyListenersIfCurrent(n);case 8:case"end":return r.stop()}}),i)})))()}},{key:"delete",value:function(){var e=this;return r(o)(r(s).mark((function t(){var n;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getIdToken();case 2:return n=t.sent,t.next=5,Qr(e,qr(e.auth,{idToken:n}));case 5:return e.stsTokenManager.clearRefreshToken(),t.abrupt("return",e.auth.signOut());case 7:case"end":return t.stop()}}),t)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(t,r){var n,i,a,o,s,u,c,l,f=null!==(n=r.displayName)&&void 0!==n?n:void 0,d=null!==(i=r.email)&&void 0!==i?i:void 0,h=null!==(a=r.phoneNumber)&&void 0!==a?a:void 0,p=null!==(o=r.photoURL)&&void 0!==o?o:void 0,v=null!==(s=r.tenantId)&&void 0!==s?s:void 0,g=null!==(u=r._redirectEventId)&&void 0!==u?u:void 0,m=null!==(c=r.createdAt)&&void 0!==c?c:void 0,y=null!==(l=r.lastLoginAt)&&void 0!==l?l:void 0,b=r.uid,k=r.emailVerified,w=r.isAnonymous,_=r.providerData,E=r.stsTokenManager;br(b&&E,t,"internal-error");var x=dn.fromJSON(this.name,E);br("string"==typeof b,t,"internal-error"),hn(f,t.name),hn(d,t.name),br("boolean"==typeof k,t,"internal-error"),br("boolean"==typeof w,t,"internal-error"),hn(h,t.name),hn(p,t.name),hn(v,t.name),hn(g,t.name),hn(m,t.name),hn(y,t.name);var I=new e({uid:b,auth:t,email:d,emailVerified:k,displayName:f,isAnonymous:w,photoURL:p,phoneNumber:h,tenantId:v,stsTokenManager:x,createdAt:m,lastLoginAt:y});return _&&Array.isArray(_)&&(I.providerData=_.map((function(e){return Object.assign({},e)}))),g&&(I._redirectEventId=g),I}},{key:"_fromIdTokenResponse",value:function(t,n){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r(o)(r(s).mark((function a(){var o,u;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(o=new dn).updateFromServerResponse(n),u=new e({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:i}),r.next=5,an(u);case 5:return r.abrupt("return",u);case 6:case"end":return r.stop()}}),a)})))()}}]),e}(),vn=function(){"use strict";function e(){r(V)(this,e),this.type="NONE",this.storage={}}return r(W)(e,[{key:"_isAvailable",value:function(){return r(o)(r(s).mark((function e(){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})))()}},{key:"_set",value:function(e,t){var n=this;return r(o)(r(s).mark((function i(){return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n.storage[e]=t;case 1:case"end":return r.stop()}}),i)})))()}},{key:"_get",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=t.storage[e],r.abrupt("return",void 0===i?null:i);case 2:case"end":return r.stop()}}),n)})))()}},{key:"_remove",value:function(e){var t=this;return r(o)(r(s).mark((function n(){return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:delete t.storage[e];case 1:case"end":return r.stop()}}),n)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vn.type="NONE";var gn=vn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(e,t,r){return"firebase:".concat(e,":").concat(t,":").concat(r)}var yn=function(){"use strict";function e(t,n,i){r(V)(this,e),this.persistence=t,this.auth=n,this.userKey=i;var a=this.auth,o=a.config,s=a.name;this.fullUserKey=mn(this.userKey,o.apiKey,s),this.fullPersistenceKey=mn("persistence",o.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return r(W)(e,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var e=this;return r(o)(r(s).mark((function t(){var n;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.persistence._get(e.fullUserKey);case 2:return n=t.sent,t.abrupt("return",n?pn._fromJSON(e.auth,n):null);case 4:case"end":return t.stop()}}),t)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.persistence!==e){r.next=2;break}return r.abrupt("return");case 2:return r.next=4,t.getCurrentUser();case 4:return i=r.sent,r.next=7,t.removeCurrentUser();case 7:if(t.persistence=e,!i){r.next=10;break}return r.abrupt("return",t.setCurrentUser(i));case 10:case"end":return r.stop()}}),n)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return r(o)(r(s).mark((function a(){var u,c,l,f,d,h,p,v,g,m,y,b,k;return r(s).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.length){a.next=2;break}return a.abrupt("return",new e(Er(gn),t,i));case 2:return a.next=4,Promise.all(n.map(function(){var e=r(o)(r(s).mark((function e(t){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",t);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:u=a.sent.filter((function(e){return e})),c=u[0]||Er(gn),l=mn(i,t.config.apiKey,t.name),f=null,d=!0,h=!1,p=void 0,a.prev=9,v=n[Symbol.iterator]();case 11:if(d=(g=v.next()).done){a.next=29;break}return m=g.value,a.prev=13,a.next=16,m._get(l);case 16:if(!(y=a.sent)){a.next=22;break}return b=pn._fromJSON(t,y),m!==c&&(f=b),c=m,a.abrupt("break",29);case 22:a.next=26;break;case 24:a.prev=24,a.t0=a.catch(13);case 26:d=!0,a.next=11;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a.catch(9),h=!0,p=a.t1;case 35:a.prev=35,a.prev=36,d||null==v.return||v.return();case 38:if(a.prev=38,!h){a.next=41;break}throw p;case 41:return a.finish(38);case 42:return a.finish(35);case 43:if(k=u.filter((function(e){return e._shouldAllowMigration})),c._shouldAllowMigration&&k.length){a.next=46;break}return a.abrupt("return",new e(c,t,i));case 46:if(c=k[0],!f){a.next=50;break}return a.next=50,c._set(l,f.toJSON());case 50:return a.next=52,Promise.all(n.map(function(){var e=r(o)(r(s).mark((function e(t){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t===c){e.next=8;break}return e.prev=1,e.next=4,t._remove(l);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()));case 52:return a.abrupt("return",new e(c,t,i));case 53:case"end":return a.stop()}}),a,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(En(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(kn(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(In(t))return"Blackberry";if(Tn(t))return"Webos";if(wn(t))return"Safari";if((t.includes("chrome/")||_n(t))&&!t.includes("edge/"))return"Chrome";if(xn(t))return"Android";var r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==r?void 0:r.length)?r[1]:"Other"}function kn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae();return/firefox\//i.test(e)}function wn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function _n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae();return/crios\//i.test(e)}function En(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae();return/iemobile/i.test(e)}function xn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae();return/android/i.test(e)}function In(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae();return/blackberry/i.test(e)}function Tn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae();return/webos/i.test(e)}function On(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Sn(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae();return On(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Rn(){return((e=Ae()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function An(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae();return On(e)||xn(e)||Tn(e)||In(e)||/windows phone/i.test(e)||En(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Cn(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=bn(Ae());break;case"Worker":t="".concat(bn(Ae()),"-").concat(e);break;default:t=e}var n=r.length?r.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(Ft,"/").concat(n)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nn=function(){"use strict";function e(t){r(V)(this,e),this.auth=t,this.queue=[]}return r(W)(e,[{key:"pushCallback",value:function(e,t){var r=this,n=function(t){return new Promise((function(r,n){try{r(e(t))}catch(e){n(e)}}))};n.onAbort=t,this.queue.push(n);var i=this.queue.length-1;return function(){r.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i,a,o,u,c,l,f,d,h,p,v,g,m;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.auth.currentUser!==e){r.next=2;break}return r.abrupt("return");case 2:i=[],r.prev=3,a=!0,o=!1,u=void 0,r.prev=5,c=t.queue[Symbol.iterator]();case 7:if(a=(l=c.next()).done){r.next=15;break}return f=l.value,r.next=11,f(e);case 11:f.onAbort&&i.push(f.onAbort);case 12:a=!0,r.next=7;break;case 15:r.next=21;break;case 17:r.prev=17,r.t0=r.catch(5),o=!0,u=r.t0;case 21:r.prev=21,r.prev=22,a||null==c.return||c.return();case 24:if(r.prev=24,!o){r.next=27;break}throw u;case 27:return r.finish(24);case 28:return r.finish(21);case 29:r.next=52;break;case 31:for(r.prev=31,r.t1=r.catch(3),i.reverse(),d=!0,h=!1,p=void 0,r.prev=35,v=i[Symbol.iterator]();!(d=(g=v.next()).done);d=!0){m=g.value;try{m()}catch(e){}}r.next=43;break;case 39:r.prev=39,r.t2=r.catch(35),h=!0,p=r.t2;case 43:r.prev=43,r.prev=44,d||null==v.return||v.return();case 46:if(r.prev=46,!h){r.next=49;break}throw p;case 49:return r.finish(46);case 50:return r.finish(43);case 51:throw t.auth._errorFactory.create("login-blocked",{originalMessage:null===r.t1||void 0===r.t1?void 0:r.t1.message});case 52:case"end":return r.stop()}}),n,null,[[3,31],[5,17,21,29],[22,,24,28],[35,39,43,51],[44,,46,50]])})))()}}]),e}(),Ln=function(){"use strict";function e(t,n,i){r(V)(this,e),this.app=t,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dn(this),this.idTokenSubscription=new Dn(this),this.beforeStateQueue=new Nn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fr,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}return r(W)(e,[{key:"_initializeWithPersistence",value:function(e,t){t&&(this._popupRedirectResolver=Er(t));var n=this;return this._initializationPromise=this.queue(r(o)(r(s).mark((function i(){var a,o;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._deleted){r.next=3;break}return r.abrupt("return");case 3:return r.next=5,yn.create(n,e);case 5:if(n.persistenceManager=r.sent,!n._deleted){r.next=8;break}return r.abrupt("return");case 8:if(!(null===(a=n._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){r.next=16;break}return r.prev=9,r.next=12,n._popupRedirectResolver._initialize(n);case 12:r.next=16;break;case 14:r.prev=14,r.t0=r.catch(9);case 16:return r.next=18,n.initializeCurrentUser(t);case 18:if(n.lastNotifiedUid=(null===(o=n.currentUser)||void 0===o?void 0:o.uid)||null,!n._deleted){r.next=21;break}return r.abrupt("return");case 21:n._isInitialized=!0;case 22:case"end":return r.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var e=this;return r(o)(r(s).mark((function t(){var n;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._deleted){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.assertedPersistence.getCurrentUser();case 4:if(n=t.sent,e.currentUser||n){t.next=7;break}return t.abrupt("return");case 7:if(!e.currentUser||!n||e.currentUser.uid!==n.uid){t.next=12;break}return e._currentUser._assign(n),t.next=11,e.currentUser.getIdToken();case 11:return t.abrupt("return");case 12:return t.next=14,e._updateCurrentUser(n,!0);case 14:case"end":return t.stop()}}),t)})))()}},{key:"initializeCurrentUser",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i,a,o,u,c,l,f;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,t.assertedPersistence.getCurrentUser();case 3:if(a=r.sent,o=a,u=!1,!e||!t.config.authDomain){r.next=15;break}return r.next=9,t.getOrInitRedirectPersistenceManager();case 9:return c=null===(i=t.redirectUser)||void 0===i?void 0:i._redirectEventId,l=null==o?void 0:o._redirectEventId,r.next=13,t.tryRedirectSignIn(e);case 13:f=r.sent,c&&c!==l||!(null==f?void 0:f.user)||(o=f.user,u=!0);case 15:if(o){r.next=17;break}return r.abrupt("return",t.directlySetCurrentUser(null));case 17:if(o._redirectEventId){r.next=33;break}if(!u){r.next=28;break}return r.prev=19,r.next=22,t.beforeStateQueue.runMiddleware(o);case 22:r.next=28;break;case 24:r.prev=24,r.t0=r.catch(19),o=a,t._popupRedirectResolver._overrideRedirectResult(t,(function(){return Promise.reject(r.t0)}));case 28:if(!o){r.next=32;break}return r.abrupt("return",t.reloadAndSetCurrentUserOrClear(o));case 32:return r.abrupt("return",t.directlySetCurrentUser(null));case 33:return br(t._popupRedirectResolver,t,"argument-error"),r.next=36,t.getOrInitRedirectPersistenceManager();case 36:if(!t.redirectUser||t.redirectUser._redirectEventId!==o._redirectEventId){r.next=38;break}return r.abrupt("return",t.directlySetCurrentUser(o));case 38:return r.abrupt("return",t.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return r.stop()}}),n,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=null,r.prev=1,r.next=4,t._popupRedirectResolver._completeRedirectFn(t,e,!0);case 4:i=r.sent,r.next=11;break;case 7:return r.prev=7,r.t0=r.catch(1),r.next=11,t._setRedirectUser(null);case 11:return r.abrupt("return",i);case 12:case"end":return r.stop()}}),n,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(e){var t=this;return r(o)(r(s).mark((function n(){return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,an(e);case 3:r.next=9;break;case 5:if(r.prev=5,r.t0=r.catch(0),"auth/network-request-failed"===(null===r.t0||void 0===r.t0?void 0:r.t0.code)){r.next=9;break}return r.abrupt("return",t.directlySetCurrentUser(null));case 9:return r.abrupt("return",t.directlySetCurrentUser(e));case 10:case"end":return r.stop()}}),n,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var e=this;return r(o)(r(s).mark((function t(){return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e._deleted=!0;case 1:case"end":return t.stop()}}),t)})))()}},{key:"updateCurrentUser",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(i=e?ze(e):null)&&br(i.auth.config.apiKey===t.config.apiKey,t,"invalid-user-token"),r.abrupt("return",t._updateCurrentUser(i&&i._clone(t)));case 3:case"end":return r.stop()}}),n)})))()}},{key:"_updateCurrentUser",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return r(o)(r(s).mark((function i(){return r(s).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!n._deleted){i.next=2;break}return i.abrupt("return");case 2:if(e&&br(n.tenantId===e.tenantId,n,"tenant-id-mismatch"),t){i.next=6;break}return i.next=6,n.beforeStateQueue.runMiddleware(e);case 6:return i.abrupt("return",n.queue(r(o)(r(s).mark((function t(){return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.directlySetCurrentUser(e);case 2:n.notifyAuthListeners();case 3:case"end":return t.stop()}}),t)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var e=this;return r(o)(r(s).mark((function t(){return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.beforeStateQueue.runMiddleware(null);case 2:if(!e.redirectPersistenceManager&&!e._popupRedirectResolver){t.next=5;break}return t.next=5,e._setRedirectUser(null);case 5:return t.abrupt("return",e._updateCurrentUser(null,!0));case 6:case"end":return t.stop()}}),t)})))()}},{key:"setPersistence",value:function(e){var t=this;return this.queue(r(o)(r(s).mark((function n(){return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.assertedPersistence.setPersistence(Er(e));case 2:case"end":return r.stop()}}),n)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new Le("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(e,t){var n=this;return r(o)(r(s).mark((function i(){var a;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.getOrInitRedirectPersistenceManager(t);case 2:return a=r.sent,r.abrupt("return",null===e?a.removeCurrentUser():a.setCurrentUser(e));case 4:case"end":return r.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.redirectPersistenceManager){r.next=9;break}return br(i=e&&Er(e)||t._popupRedirectResolver,t,"argument-error"),r.next=5,yn.create(t,[Er(i._redirectPersistence)],"redirectUser");case 5:return t.redirectPersistenceManager=r.sent,r.next=8,t.redirectPersistenceManager.getCurrentUser();case 8:t.redirectUser=r.sent;case 9:return r.abrupt("return",t.redirectPersistenceManager);case 10:case"end":return r.stop()}}),n)})))()}},{key:"_redirectUserForId",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i,a;return r(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t._isInitialized){n.next=4;break}return n.next=4,t.queue(r(o)(r(s).mark((function e(){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));case 4:if((null===(i=t._currentUser)||void 0===i?void 0:i._redirectEventId)!==e){n.next=6;break}return n.abrupt("return",t._currentUser);case 6:if((null===(a=t.redirectUser)||void 0===a?void 0:a._redirectEventId)!==e){n.next=8;break}return n.abrupt("return",t.redirectUser);case 8:return n.abrupt("return",null);case 9:case"end":return n.stop()}}),n)})))()}},{key:"_persistUserIfCurrent",value:function(e){var t=this;return r(o)(r(s).mark((function n(){return r(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e!==t.currentUser){n.next=2;break}return n.abrupt("return",t.queue(r(o)(r(s).mark((function n(){return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",t.directlySetCurrentUser(e));case 1:case"end":return r.stop()}}),n)})))));case 2:case"end":return n.stop()}}),n)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,r,n){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return br(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,r,n):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(e){var t=this;return r(o)(r(s).mark((function n(){return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.currentUser&&t.currentUser!==e&&t._currentUser._stopProactiveRefresh(),e&&t.isProactiveRefreshEnabled&&e._startProactiveRefresh(),t.currentUser=e,!e){r.next=8;break}return r.next=6,t.assertedPersistence.setCurrentUser(e);case 6:r.next=10;break;case 8:return r.next=10,t.assertedPersistence.removeCurrentUser();case 10:case"end":return r.stop()}}),n)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return br(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cn(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var e=this;return r(o)(r(s).mark((function t(){var n,i,a;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=r(z)({},"X-Client-Version",e.clientVersion),e.app.options.appId&&(i["X-Firebase-gmpid"]=e.app.options.appId),t.next=5,null===(n=e.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===n?void 0:n.getHeartbeatsHeader();case 5:return(a=t.sent)&&(i["X-Firebase-Client"]=a),t.abrupt("return",i);case 8:case"end":return t.stop()}}),t)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(e){return ze(e)}var Dn=function(){"use strict";function e(t){var n,i,a=this;r(V)(this,e),this.auth=t,this.observer=null,this.addObserver=(i=new Ve((function(e){return a.observer=e}),n)).subscribe.bind(i)}return r(W)(e,[{key:"next",get:function(){return br(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),e}();function Un(e,t,n){var i=Pn(e);br(i._canInitEmulator,i,"emulator-config-failed"),br(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");var a=!!(null==n?void 0:n.disableWarnings),o=Mn(t),s=function(e){var t=Mn(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};var i=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){var o=a[1];return{host:o,port:Bn(i.substr(o.length+1))}}var s=r(q)(i.split(":"),2);return{host:s[0],port:Bn(s[1])}}(t),u=s.host,c=s.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(o,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Mn(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Bn(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var jn=function(){"use strict";function e(t,n){r(V)(this,e),this.providerId=t,this.signInMethod=n}return r(W)(e,[{key:"toJSON",value:function(){return kr("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return kr("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return kr("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return kr("not implemented")}}]),e}();function Fn(e,t){return Hn.apply(this,arguments)}function Hn(){return(Hn=r(o)(r(s).mark((function e(t,n){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ur(t,"POST","/v1/accounts:update",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Vn(e,t){return Wn.apply(this,arguments)}function Wn(){return(Wn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(s).mark((function e(t,n){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Fr(t,"POST","/v1/accounts:signInWithPassword",Dr(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function zn(e,t){return qn.apply(this,arguments)}function qn(){return(qn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(s).mark((function e(t,n){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Fr(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Jn(e,t){return Kn.apply(this,arguments)}function Kn(){return(Kn=r(o)(r(s).mark((function e(t,n){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Fr(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gn=function(e){"use strict";r(K)(n,e);var t=r(ie)(n);function n(e,i,a){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r(V)(this,n),(o=t.call(this,"password",a))._email=e,o._password=i,o._tenantId=s,o}return r(W)(n,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(e){var t=this;return r(o)(r(s).mark((function n(){return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.t0=t.signInMethod,r.next="password"===r.t0?3:"emailLink"===r.t0?4:5;break;case 3:return r.abrupt("return",Vn(e,{returnSecureToken:!0,email:t._email,password:t._password}));case 4:return r.abrupt("return",zn(e,{email:t._email,oobCode:t._password}));case 5:pr(e,"internal-error");case 6:case"end":return r.stop()}}),n)})))()}},{key:"_linkToIdToken",value:function(e,t){var n=this;return r(o)(r(s).mark((function i(){return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.t0=n.signInMethod,r.next="password"===r.t0?3:"emailLink"===r.t0?4:5;break;case 3:return r.abrupt("return",Fn(e,{idToken:t,returnSecureToken:!0,email:n._email,password:n._password}));case 4:return r.abrupt("return",Jn(e,{idToken:t,email:n._email,oobCode:n._password}));case 5:pr(e,"internal-error");case 6:case"end":return r.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new n(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new n(e,t,"emailLink",r)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),n}(jn);function Xn(e,t){return Yn.apply(this,arguments)}function Yn(){return(Yn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(s).mark((function e(t,n){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Fr(t,"POST","/v1/accounts:signInWithIdp",Dr(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zn=function(e){"use strict";r(K)(n,e);var t=r(ie)(n);function n(){var e;return r(V)(this,n),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,e}return r(W)(n,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return Xn(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var r=this.buildRequest();return r.idToken=t,Xn(e,r)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,Xn(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=je(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):pr("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,r=t.providerId,i=t.signInMethod,a=ur(t,["providerId","signInMethod"]);if(!r||!i)return null;var o=new n(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),n}(jn);function $n(e,t){return Qn.apply(this,arguments)}function Qn(){return(Qn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(s).mark((function e(t,n){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ur(t,"POST","/v1/accounts:sendVerificationCode",Dr(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ei(){return(ei=r(o)(r(s).mark((function e(t,n){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Fr(t,"POST","/v1/accounts:signInWithPhoneNumber",Dr(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ti(){return(ti=r(o)(r(s).mark((function e(t,n){var i;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Fr(t,"POST","/v1/accounts:signInWithPhoneNumber",Dr(t,n));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw zr(t,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ri=r(z)({},"USER_NOT_FOUND","user-not-found");function ni(){return(ni=r(o)(r(s).mark((function e(t,n){var i;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},n),{operation:"REAUTH"}),e.abrupt("return",Fr(t,"POST","/v1/accounts:signInWithPhoneNumber",Dr(t,i),ri));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ii=function(e){"use strict";r(K)(n,e);var t=r(ie)(n);function n(e){var i;return r(V)(this,n),(i=t.call(this,"phone","phone")).params=e,i}return r(W)(n,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return ei.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return ti.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return ni.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,r=e.phoneNumber,n=e.verificationId,i=e.verificationCode;return t&&r?{temporaryProof:t,phoneNumber:r}:{sessionInfo:n,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new n({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new n({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,r=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return r||t||i||a?new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:a}):null}}]),n}(jn);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ai=function(){"use strict";function e(t){var n,i,a,o,s,u;r(V)(this,e);var c=Fe(He(t)),l=null!==(n=c.apiKey)&&void 0!==n?n:null,f=null!==(i=c.oobCode)&&void 0!==i?i:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=c.mode)&&void 0!==a?a:null);br(l&&f&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=f,this.continueUrl=null!==(o=c.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(s=c.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(u=c.tenantId)&&void 0!==u?u:null}return r(W)(e,null,[{key:"parseLink",value:function(t){var r=function(e){var t=Fe(He(e)).link,r=t?Fe(He(t)).deep_link_id:null,n=Fe(He(e)).deep_link_id;return(n?Fe(He(n)).link:null)||n||r||t||e}(t);try{return new e(r)}catch(e){return null}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var oi=function(){"use strict";function e(){r(V)(this,e),this.providerId=e.PROVIDER_ID}return r(W)(e,null,[{key:"credential",value:function(e,t){return Gn._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var r=ai.parseLink(t);return br(r,"argument-error"),Gn._fromEmailAndCode(e,r.code,r.tenantId)}}]),e}();oi.PROVIDER_ID="password",oi.EMAIL_PASSWORD_SIGN_IN_METHOD="password",oi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var si=function(){"use strict";function e(t){r(V)(this,e),this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}return r(W)(e,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),e}(),ui=function(e){"use strict";r(K)(n,e);var t=r(ie)(n);function n(){var e;return r(V)(this,n),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],e}return r(W)(n,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return r(m)(this.scopes)}}]),n}(si),ci=function(e){"use strict";r(K)(n,e);var t=r(ie)(n);function n(){return r(V)(this,n),t.call(this,"facebook.com")}return r(W)(n,null,[{key:"credential",value:function(e){return Zn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(ui);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ci.FACEBOOK_SIGN_IN_METHOD="facebook.com",ci.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var li=function(e){"use strict";r(K)(n,e);var t=r(ie)(n);function n(){var e;return r(V)(this,n),(e=t.call(this,"google.com")).addScope("profile"),e}return r(W)(n,null,[{key:"credential",value:function(e,t){return Zn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthIdToken,i=t.oauthAccessToken;if(!r&&!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(ui);li.GOOGLE_SIGN_IN_METHOD="google.com",li.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fi=function(e){"use strict";r(K)(n,e);var t=r(ie)(n);function n(){return r(V)(this,n),t.call(this,"github.com")}return r(W)(n,null,[{key:"credential",value:function(e){return Zn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(ui);fi.GITHUB_SIGN_IN_METHOD="github.com",fi.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var di=function(e){"use strict";r(K)(n,e);var t=r(ie)(n);function n(){return r(V)(this,n),t.call(this,"twitter.com")}return r(W)(n,null,[{key:"credential",value:function(e,t){return Zn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthAccessToken,i=t.oauthTokenSecret;if(!r||!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(ui);di.TWITTER_SIGN_IN_METHOD="twitter.com",di.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var hi=function(){"use strict";function e(t){r(V)(this,e),this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}return r(W)(e,null,[{key:"_fromIdTokenResponse",value:function(t,n,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return r(o)(r(s).mark((function o(){var u,c,l;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,pn._fromIdTokenResponse(t,i,a);case 2:return u=r.sent,c=pi(i),l=new e({user:u,providerId:c,_tokenResponse:i,operationType:n}),r.abrupt("return",l);case 6:case"end":return r.stop()}}),o)})))()}},{key:"_forOperation",value:function(t,n,i){return r(o)(r(s).mark((function a(){var o;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t._updateTokensIfNecessary(i,!0);case 2:return o=pi(i),r.abrupt("return",new e({user:t,providerId:o,_tokenResponse:i,operationType:n}));case 4:case"end":return r.stop()}}),a)})))()}}]),e}();function pi(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var vi=function(e){"use strict";r(K)(n,e);var t=r(ie)(n);function n(e,i,a,o){var s,u;return r(V)(this,n),(s=t.call(this,i.code,i.message)).operationType=a,s.user=o,Object.setPrototypeOf(r(J)(s),n.prototype),s.customData={appName:e.name,tenantId:null!==(u=e.tenantId)&&void 0!==u?u:void 0,_serverResponse:i.customData._serverResponse,operationType:a},s}return r(W)(n,null,[{key:"_fromErrorAndOperation",value:function(e,t,r,i){return new n(e,t,r,i)}}]),n}(Ne);function gi(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch((function(r){if("auth/multi-factor-auth-required"===r.code)throw vi._fromErrorAndOperation(e,r,t,n);throw r}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(e,t){return yi.apply(this,arguments)}function yi(){return yi=r(o)(r(s).mark((function e(t,n){var i,a,o=arguments;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=Qr,e.t1=t,e.t2=n,e.t3=t.auth,e.next=7,t.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",hi._forOperation(t,"link",a));case 14:case"end":return e.stop()}}),e)}))),yi.apply(this,arguments)}function bi(e,t){return ki.apply(this,arguments)}function ki(){return ki=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(s).mark((function e(t,n){var i,a,o,u,c,l,f=arguments;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f.length>2&&void 0!==f[2]&&f[2],a=t.auth,o="reauthenticate",e.prev=3,e.next=6,Qr(t,gi(a,o,n,t),i);case 6:return br((u=e.sent).idToken,a,"internal-error"),br(c=$r(u.idToken),a,"internal-error"),l=c.sub,br(t.uid===l,a,"user-mismatch"),e.abrupt("return",hi._forOperation(t,o,u));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&pr(a,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),e,null,[[3,15]])}))),ki.apply(this,arguments)}function wi(e,t){return _i.apply(this,arguments)}function _i(){return _i=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(s).mark((function e(t,n){var i,a,o,u,c=arguments;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a="signIn",e.next=4,gi(t,a,n);case 4:return o=e.sent,e.next=7,hi._fromIdTokenResponse(t,a,o);case 7:if(u=e.sent,i){e.next=11;break}return e.next=11,t._updateCurrentUser(u.user);case 11:return e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)}))),_i.apply(this,arguments)}function Ei(e,t,r,n){return ze(e).onIdTokenChanged(t,r,n)}function xi(e,t,r){return ze(e).beforeAuthStateChanged(t,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ii(e,t){return Ur(e,"POST","/v2/accounts/mfaEnrollment:start",Dr(e,t))}new WeakMap;var Ti="__sak",Oi=function(){"use strict";function e(t,n){r(V)(this,e),this.storageRetriever=t,this.type=n}return r(W)(e,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Ti,"1"),this.storage.removeItem(Ti),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Si=function(e){"use strict";r(K)(n,e);var t=r(ie)(n);function n(){var e,i;return r(V)(this,n),(e=t.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(t,r){return e.onStorageEvent(t,r)},e.listeners={},e.localCache={},e.pollTimer=null,e.safariLocalStorageNotSynced=(wn(i=Ae())||On(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),e.fallbackToPolling=An(),e._shouldAllowMigration=!0,e}return r(W)(n,[{key:"forAllChangedKeys",value:function(e){var t=!0,r=!1,n=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){r=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;if(e.key){var n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}var a=function(){var e=r.storage.getItem(n);(t||r.localCache[n]!==e)&&r.notifyListeners(n,e)},o=this.storage.getItem(n);Rn()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,r){s.notifyListeners(e,r)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,a=void 0;if(r)try{for(var o,s=Array.from(r)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,r,n){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(e,t){var i=this,a=this;return r(o)(r(s).mark((function o(){return r(s).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,r(ir)(r(sr)(n.prototype),"_set",i).call(a,e,t);case 2:a.localCache[e]=JSON.stringify(t);case 3:case"end":return o.stop()}}),o)})))()}},{key:"_get",value:function(e){var t=this,i=this;return r(o)(r(s).mark((function a(){var o;return r(s).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r(ir)(r(sr)(n.prototype),"_get",t).call(i,e);case 2:return o=a.sent,i.localCache[e]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(e){var t=this,i=this;return r(o)(r(s).mark((function a(){return r(s).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r(ir)(r(sr)(n.prototype),"_remove",t).call(i,e);case 2:delete i.localCache[e];case 3:case"end":return a.stop()}}),a)})))()}}]),n}(Oi);Si.type="LOCAL";var Ri=Si,Ai=function(e){"use strict";r(K)(n,e);var t=r(ie)(n);function n(){return r(V)(this,n),t.call(this,(function(){return window.sessionStorage}),"SESSION")}return r(W)(n,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),n}(Oi);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ai.type="SESSION";var Ci=Ai;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(e){return Promise.all(e.map((t=r(o)(r(s).mark((function e(t){var n;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t;case 3:return n=e.sent,e.abrupt("return",{fulfilled:!0,value:n});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),function(e){return t.apply(this,arguments)})));var t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Li=function(){"use strict";function e(t){r(V)(this,e),this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return r(W)(e,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i,a,u,c,l,f,d,h;return r(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=(i=e).data,u=a.eventId,c=a.eventType,l=a.data,null==(f=t.handlersMap[c])?void 0:f.size){n.next=5;break}return n.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:u,eventType:c}),d=Array.from(f).map(function(){var e=r(o)(r(s).mark((function e(t){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t(i.origin,l));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n.next=9,Ni(d);case 9:h=n.sent,i.ports[0].postMessage({status:"done",eventId:u,eventType:c,response:h});case 11:case"end":return n.stop()}}),n)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(t){var r=this.receivers.find((function(e){return e.isListeningto(t)}));if(r)return r;var n=new e(t);return this.receivers.push(n),n}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pi(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r="",n=0;n<t;n++)r+=Math.floor(10*Math.random());return e+r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Li.receivers=[];var Di=function(){"use strict";function e(t){r(V)(this,e),this.target=t,this.handlers=new Set}return r(W)(e,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return r(o)(r(s).mark((function a(){var o,u,c;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){r.next=3;break}throw new Error("connection_unavailable");case 3:return r.abrupt("return",new Promise((function(r,a){var s=Pi("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),n);c={messageChannel:o,onMessage:function(e){var t=e;if(t.data.eventId===s)switch(t.data.status){case"ack":clearTimeout(l),u=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(u),r(t.data.response);break;default:clearTimeout(l),clearTimeout(u),a(new Error("invalid_response"))}}},i.handlers.add(c),o.port1.addEventListener("message",c.onMessage),i.target.postMessage({eventType:e,eventId:s,data:t},[o.port2])})).finally((function(){c&&i.removeMessageHandler(c)})));case 6:case"end":return r.stop()}}),a)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mi(){return void 0!==Ui().WorkerGlobalScope&&"function"==typeof Ui().importScripts}function Bi(){return ji.apply(this,arguments)}function ji(){return(ji=r(o)(r(s).mark((function e(){var t;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return t=e.sent,e.abrupt("return",t.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Fi="firebaseLocalStorageDb",Hi="firebaseLocalStorage",Vi="fbase_key",Wi=function(){"use strict";function e(t){r(V)(this,e),this.request=t}return r(W)(e,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,r){var n=e;e.request.addEventListener("success",(function(){t(n.request.result)})),e.request.addEventListener("error",(function(){r(n.request.error)}))}))}}]),e}();function zi(e,t){return e.transaction([Hi],t?"readwrite":"readonly").objectStore(Hi)}function qi(){var e=indexedDB.deleteDatabase(Fi);return new Wi(e).toPromise()}function Ji(){var e=indexedDB.open(Fi,1);return new Promise((function(t,n){e.addEventListener("error",(function(){n(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(Hi,{keyPath:Vi})}catch(e){n(e)}})),e.addEventListener("success",r(o)(r(s).mark((function n(){var i;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if((i=e.result).objectStoreNames.contains(Hi)){r.next=12;break}return i.close(),r.next=5,qi();case 5:return r.t0=t,r.next=8,Ji();case 8:r.t1=r.sent,(0,r.t0)(r.t1),r.next=13;break;case 12:t(i);case 13:case"end":return r.stop()}}),n)}))))}))}function Ki(e,t,r){return Gi.apply(this,arguments)}function Gi(){return(Gi=r(o)(r(s).mark((function e(t,n,i){var a,o;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=zi(t,!0).put((a={},r(z)(a,Vi,n),r(z)(a,"value",i),a)),e.abrupt("return",new Wi(o).toPromise());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Xi(e,t){return Yi.apply(this,arguments)}function Yi(){return(Yi=r(o)(r(s).mark((function e(t,n){var i,a;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=zi(t,!1).get(n),e.next=3,new Wi(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Zi(e,t){var r=zi(e,!0).delete(t);return new Wi(r).toPromise()}var $i=function(){"use strict";function e(){r(V)(this,e),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return r(W)(e,[{key:"_openDb",value:function(){var e=this;return r(o)(r(s).mark((function t(){return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.db){t.next=2;break}return t.abrupt("return",e.db);case 2:return t.next=4,Ji();case 4:return e.db=t.sent,t.abrupt("return",e.db);case 6:case"end":return t.stop()}}),t)})))()}},{key:"_withRetries",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i,a;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:i=0;case 1:return r.prev=2,r.next=5,t._openDb();case 5:return a=r.sent,r.next=8,e(a);case 8:return r.abrupt("return",r.sent);case 11:if(r.prev=11,r.t0=r.catch(2),!(i++>3)){r.next=15;break}throw r.t0;case 15:t.db&&(t.db.close(),t.db=void 0);case 16:r.next=1;break;case 18:case"end":return r.stop()}}),n,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var e=this;return r(o)(r(s).mark((function t(){return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Mi()?e.initializeReceiver():e.initializeSender());case 1:case"end":return t.stop()}}),t)})))()}},{key:"initializeReceiver",value:function(){var e=this;return r(o)(r(s).mark((function t(){return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.receiver=Li._getInstance(Mi()?self:null),e.receiver._subscribe("keyChanged",function(){var t=r(o)(r(s).mark((function t(n,i){var a;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._poll();case 2:return a=t.sent,t.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()),e.receiver._subscribe("ping",function(){var e=r(o)(r(s).mark((function e(t,n){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}());case 3:case"end":return t.stop()}}),t)})))()}},{key:"initializeSender",value:function(){var e=this;return r(o)(r(s).mark((function t(){var n,i,a;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Bi();case 3:if(e.activeServiceWorker=t.sent,e.activeServiceWorker){t.next=6;break}return t.abrupt("return");case 6:return e.sender=new Di(e.activeServiceWorker),t.next=9,e.sender._send("ping",{},800);case 9:if(a=t.sent){t.next=12;break}return t.abrupt("return");case 12:(null===(n=a[0])||void 0===n?void 0:n.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(e.serviceWorkerReceiverAvailable=!0);case 13:case"end":return t.stop()}}),t)})))()}},{key:"notifyServiceWorker",value:function(e){var t=this;return r(o)(r(s).mark((function n(){return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.sender&&t.activeServiceWorker&&(n=void 0,((null===(n=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===n?void 0:n.controller)||null)===t.activeServiceWorker)){r.next=2;break}return r.abrupt("return");case 2:return r.prev=2,r.next=5,t.sender._send("keyChanged",{key:e},t.serviceWorkerReceiverAvailable?800:50);case 5:r.next=9;break;case 7:r.prev=7,r.t0=r.catch(2);case 9:case"end":return r.stop()}var n}),n,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return r(o)(r(s).mark((function e(){var t;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Ji();case 5:return t=e.sent,e.next=8,Ki(t,Ti,"1");case 8:return e.next=10,Zi(t,Ti);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(e){var t=this;return r(o)(r(s).mark((function n(){return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.pendingWrites++,r.prev=1,r.next=4,e();case 4:return r.prev=4,t.pendingWrites--,r.finish(4);case 7:case"end":return r.stop()}}),n,null,[[1,,4,7]])})))()}},{key:"_set",value:function(e,t){var n=this;return r(o)(r(s).mark((function i(){return r(s).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",n._withPendingWrite(r(o)(r(s).mark((function i(){return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n._withRetries((function(r){return Ki(r,e,t)}));case 2:return n.localCache[e]=t,r.abrupt("return",n.notifyServiceWorker(e));case 4:case"end":return r.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t._withRetries((function(t){return Xi(t,e)}));case 2:return i=r.sent,t.localCache[e]=i,r.abrupt("return",i);case 5:case"end":return r.stop()}}),n)})))()}},{key:"_remove",value:function(e){var t=this;return r(o)(r(s).mark((function n(){return r(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t._withPendingWrite(r(o)(r(s).mark((function n(){return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t._withRetries((function(t){return Zi(t,e)}));case 2:return delete t.localCache[e],r.abrupt("return",t.notifyServiceWorker(e));case 4:case"end":return r.stop()}}),n)})))));case 1:case"end":return n.stop()}}),n)})))()}},{key:"_poll",value:function(){var e=this;return r(o)(r(s).mark((function t(){var n,i,a,o,u,c,l,f,d,h,p,v,g,m,y,b,k;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._withRetries((function(e){var t=zi(e,!1).getAll();return new Wi(t).toPromise()}));case 2:if(n=t.sent){t.next=5;break}return t.abrupt("return",[]);case 5:if(0===e.pendingWrites){t.next=7;break}return t.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,u=!1,c=void 0,t.prev=10,l=n[Symbol.iterator]();!(o=(f=l.next()).done);o=!0)d=f.value,h=d.fbase_key,p=d.value,a.add(h),JSON.stringify(e.localCache[h])!==JSON.stringify(p)&&(e.notifyListeners(h,p),i.push(h));t.next=18;break;case 14:t.prev=14,t.t0=t.catch(10),u=!0,c=t.t0;case 18:t.prev=18,t.prev=19,o||null==l.return||l.return();case 21:if(t.prev=21,!u){t.next=24;break}throw c;case 24:return t.finish(21);case 25:return t.finish(18);case 26:for(v=!0,g=!1,m=void 0,t.prev=27,y=Object.keys(e.localCache)[Symbol.iterator]();!(v=(b=y.next()).done);v=!0)k=b.value,e.localCache[k]&&!a.has(k)&&(e.notifyListeners(k,null),i.push(k));t.next=35;break;case 31:t.prev=31,t.t1=t.catch(27),g=!0,m=t.t1;case 35:t.prev=35,t.prev=36,v||null==y.return||y.return();case 38:if(t.prev=38,!g){t.next=41;break}throw m;case 41:return t.finish(38);case 42:return t.finish(35);case 43:return t.abrupt("return",i);case 44:case"end":return t.stop()}}),t,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,a=void 0;if(r)try{for(var o,s=Array.from(r)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var e=this;this.pollTimer=setInterval(r(o)(r(s).mark((function t(){return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._poll());case 1:case"end":return t.stop()}}),t)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),e}();$i.type="LOCAL";var Qi=$i;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(e,t){return Ur(e,"POST","/v2/accounts/mfaSignIn:start",Dr(e,t))}function ta(e){return new Promise((function(t,r){var n,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=vr("internal-error");t.customData=e,r(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(a)}))}function ra(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ra("rcb"),new Rr(3e4,6e4);var na="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(e,t,r){return aa.apply(this,arguments)}function aa(){return(aa=r(o)(r(s).mark((function e(t,n,i){var a,o,u,c,l,f,d,h;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,br("string"==typeof o,t,"argument-error"),br(i.type===na,t,"argument-error"),!("session"in(u="string"==typeof n?{phoneNumber:n}:n))){e.next=28;break}if(c=u.session,!("phoneNumber"in u)){e.next=19;break}return br("enroll"===c.type,t,"internal-error"),e.next=15,Ii(t,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:u.phoneNumber,recaptchaToken:o}});case 15:return l=e.sent,e.abrupt("return",l.phoneSessionInfo.sessionInfo);case 19:return br("signin"===c.type,t,"internal-error"),br(f=(null===(a=u.multiFactorHint)||void 0===a?void 0:a.uid)||u.multiFactorUid,t,"missing-multi-factor-info"),e.next=24,ea(t,{mfaPendingCredential:c.credential,mfaEnrollmentId:f,phoneSignInInfo:{recaptchaToken:o}});case 24:return d=e.sent,e.abrupt("return",d.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,$n(t,{phoneNumber:u.phoneNumber,recaptchaToken:o});case 30:return h=e.sent.sessionInfo,e.abrupt("return",h);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),e,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var oa=function(){"use strict";function e(t){r(V)(this,e),this.providerId=e.PROVIDER_ID,this.auth=Pn(t)}return r(W)(e,[{key:"verifyPhoneNumber",value:function(e,t){return ia(this.auth,e,ze(t))}}],[{key:"credential",value:function(e,t){return ii._fromVerification(e,t)}},{key:"credentialFromResult",value:function(t){var r=t;return e.credentialFromTaggedObject(r)}},{key:"credentialFromError",value:function(t){return e.credentialFromTaggedObject(t.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.phoneNumber,n=t.temporaryProof;return r&&n?ii._fromTokenResponse(r,n):null}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sa(e,t){return t?Er(t):(br(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oa.PROVIDER_ID="phone",oa.PHONE_SIGN_IN_METHOD="phone";var ua=function(e){"use strict";r(K)(n,e);var t=r(ie)(n);function n(e){var i;return r(V)(this,n),(i=t.call(this,"custom","custom")).params=e,i}return r(W)(n,[{key:"_getIdTokenResponse",value:function(e){return Xn(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return Xn(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return Xn(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),n}(jn);function ca(e){return wi(e.auth,new ua(e),e.bypassAuthState)}function la(e){var t=e.auth,r=e.user;return br(r,t,"internal-error"),bi(r,new ua(e),e.bypassAuthState)}function fa(e){return da.apply(this,arguments)}function da(){return(da=r(o)(r(s).mark((function e(t){var n,i;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.auth,br(i=t.user,n,"internal-error"),e.abrupt("return",mi(i,new ua(t),t.bypassAuthState));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ha=function(){"use strict";function e(t,n,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];r(V)(this,e),this.auth=t,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}return r(W)(e,[{key:"execute",value:function(){var e,t=this;return new Promise((e=r(o)(r(s).mark((function e(n,i){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.pendingPromise={resolve:n,reject:i},e.prev=1,e.next=4,t.resolver._initialize(t.auth);case 4:return t.eventManager=e.sent,e.next=7,t.onExecution();case 7:t.eventManager.registerConsumer(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.reject(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),function(t,r){return e.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i,a,o,u,c,l,f;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=e.urlResponse,a=e.sessionId,o=e.postBody,u=e.tenantId,c=e.error,l=e.type,!c){r.next=4;break}return t.reject(c),r.abrupt("return");case 4:return f={auth:t.auth,requestUri:i,sessionId:a,tenantId:u||void 0,postBody:o||void 0,user:t.user,bypassAuthState:t.bypassAuthState},r.prev=5,r.t0=t,r.next=9,t.getIdpTask(l)(f);case 9:r.t1=r.sent,r.t0.resolve.call(r.t0,r.t1),r.next=16;break;case 13:r.prev=13,r.t2=r.catch(5),t.reject(r.t2);case 16:case"end":return r.stop()}}),n,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ca;case"linkViaPopup":case"linkViaRedirect":return fa;case"reauthViaPopup":case"reauthViaRedirect":return la;default:pr(this.auth,"internal-error")}}},{key:"resolve",value:function(e){wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),e}(),pa=new Rr(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(e,t,r){return ga.apply(this,arguments)}function ga(){return(ga=r(o)(r(s).mark((function e(t,n,i){var a,o,u;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Pn(t),mr(t,n,si),o=sa(a,i),u=new ma(a,"signInViaPopup",n,o),e.abrupt("return",u.executeNotNull());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ma=function(e){"use strict";r(K)(n,e);var t=r(ie)(n);function n(e,i,a,o,s){var u;return r(V)(this,n),(u=t.call(this,e,i,o,s)).provider=a,u.authWindow=null,u.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=r(J)(u),u}return r(W)(n,[{key:"executeNotNull",value:function(){var e=this;return r(o)(r(s).mark((function t(){var n;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.execute();case 2:return br(n=t.sent,e.auth,"internal-error"),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))()}},{key:"onExecution",value:function(){var e=this;return r(o)(r(s).mark((function t(){var n;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return wr(1===e.filter.length,"Popup operations only handle one event"),n=Pi(),t.next=4,e.resolver._openPopup(e.auth,e.provider,e.filter[0],n);case 4:e.authWindow=t.sent,e.authWindow.associatedEvent=n,e.resolver._originValidation(e.auth).catch((function(t){e.reject(t)})),e.resolver._isIframeWebStorageSupported(e.auth,(function(t){t||e.reject(vr(e.auth,"web-storage-unsupported"))})),e.pollUserCancellation();case 9:case"end":return t.stop()}}),t)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(vr(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var r,n;if(null===(n=null===(r=e.authWindow)||void 0===r?void 0:r.window)||void 0===n?void 0:n.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(vr(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,pa.get())};t()}}]),n}(ha);ma.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ya=new Map,ba=function(e){"use strict";r(K)(n,e);var t=r(ie)(n);function n(e,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r(V)(this,n),(a=t.call(this,e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return r(W)(n,[{key:"execute",value:function(){var e=this,t=this;return r(o)(r(s).mark((function i(){var a,o;return r(s).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=ya.get(t.auth._key())){i.next=21;break}return i.prev=2,i.next=5,ka(t.resolver,t.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,r(ir)(r(sr)(n.prototype),"execute",e).call(t);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:ya.set(t.auth._key(),a);case 21:return t.bypassAuthState||ya.set(t.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(e){var t=this,i=this,a=function(){return r(ir)(r(sr)(n.prototype),"onAuthEvent",t)};return r(o)(r(s).mark((function t(){var n;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("signInViaRedirect"!==e.type){t.next=4;break}return t.abrupt("return",a().call(i,e));case 4:if("unknown"!==e.type){t.next=7;break}return i.resolve(null),t.abrupt("return");case 7:if(!e.eventId){t.next=17;break}return t.next=10,i.auth._redirectUserForId(e.eventId);case 10:if(!(n=t.sent)){t.next=16;break}return i.user=n,t.abrupt("return",a().call(i,e));case 16:i.resolve(null);case 17:case"end":return t.stop()}}),t)})))()}},{key:"onExecution",value:function(){return r(o)(r(s).mark((function e(){return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},{key:"cleanUp",value:function(){}}]),n}(ha);function ka(e,t){return wa.apply(this,arguments)}function wa(){return(wa=r(o)(r(s).mark((function e(t,n){var i,a,o;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=xa(n),a=Ea(t),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _a(e,t){ya.set(e._key(),t)}function Ea(e){return Er(e._redirectPersistence)}function xa(e){return mn("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(e,t){return Ta.apply(this,arguments)}function Ta(){return Ta=r(o)(r(s).mark((function e(t,n){var i,a,o,u,c,l=arguments;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=Pn(t),o=sa(a,n),u=new ba(a,o,i),e.next=6,u.execute();case 6:if(!(c=e.sent)||i){e.next=13;break}return delete c.user._redirectEventId,e.next=11,a._persistUserIfCurrent(c.user);case 11:return e.next=13,a._setRedirectUser(null,n);case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),e)}))),Ta.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Oa=function(){"use strict";function e(t){r(V)(this,e),this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return r(W)(e,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var r=!1;return this.consumers.forEach((function(n){t.isEventForConsumer(e,n)&&(r=!0,t.sendToConsumer(e,n),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ra(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}},{key:"sendToConsumer",value:function(e,t){var r;if(e.error&&!Ra(e)){var n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(vr(this.auth,n))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sa(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(Sa(e)),this.lastProcessedEventTime=Date.now()}}]),e}();function Sa(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function Ra(e){var t=e.type,r=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==r?void 0:r.code)}function Aa(e){return Ca.apply(this,arguments)}function Ca(){return Ca=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r(o)(r(s).mark((function e(t){var n,i=arguments;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",Ur(t,"GET","/v1/projects",n));case 2:case"end":return e.stop()}}),e)}))),Ca.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Na=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,La=/^https?/;function Pa(){return(Pa=r(o)(r(s).mark((function e(t){var n,i,a,o,u,c,l;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Aa(t);case 4:n=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,u=n[Symbol.iterator]();case 8:if(i=(c=u.next()).done){e.next=20;break}if(l=c.value,e.prev=10,!Da(l)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==u.return||u.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:pr(t,"unauthorized-domain");case 35:case"end":return e.stop()}}),e,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function Da(e){var t=Ir(),r=new URL(t),n=r.protocol,i=r.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&a.hostname===i}if(!La.test(n))return!1;if(Na.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ua=new Rr(3e4,6e4);function Ma(){var e=Ui().___jsl,t=!0,n=!1,i=void 0;if(null==e?void 0:e.H)try{for(var a,o=Object.keys(e.H)[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var s=a.value;if(e.H[s].r=e.H[s].r||[],e.H[s].L=e.H[s].L||[],e.H[s].r=r(m)(e.H[s].L),e.CP)for(var u=0;u<e.CP.length;u++)e.CP[u]=null}}catch(e){n=!0,i=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw i}}}var Ba=null;function ja(e){return Ba=Ba||function(e){return new Promise((function(t,r){var n,i,a;function o(){Ma(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){Ma(),r(vr(e,"network-request-failed"))},timeout:Ua.get()})}if(null===(i=null===(n=Ui().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=Ui().gapi)||void 0===a?void 0:a.load)){var s=ra("iframefcb");return Ui()[s]=function(){gapi.load?o():r(vr(e,"network-request-failed"))},ta("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return r(e)}))}o()}})).catch((function(e){throw Ba=null,e}))}(e),Ba}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fa=new Rr(5e3,15e3),Ha={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Va=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wa(e){var t=e.config;br(t.authDomain,e,"auth-domain-config-required");var r=t.emulator?Ar(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),n={apiKey:t.apiKey,appName:e.name,v:Ft},i=Va.get(e.config.apiHost);i&&(n.eid=i);var a=e._getFrameworks();return a.length&&(n.fw=a.join(",")),"".concat(r,"?").concat(je(n).slice(1))}function za(e){return qa.apply(this,arguments)}function qa(){return qa=r(o)(r(s).mark((function e(t){var n,i;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ja(t);case 2:return n=e.sent,br(i=Ui().gapi,t,"internal-error"),e.abrupt("return",n.open({where:document.body,url:Wa(t),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ha,dontclear:!0},(function(e){return new Promise((n=r(o)(r(s).mark((function n(i,a){var o,u,c;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=function(){Ui().clearTimeout(u),i(e)},r.next=3,e.restyle({setHideOnLeave:!1});case 3:o=vr(t,"network-request-failed"),u=Ui().setTimeout((function(){a(o)}),Fa.get()),e.ping(c).then(c,(function(){a(o)}));case 7:case"end":return r.stop()}}),n)}))),function(e,t){return n.apply(this,arguments)}));var n})));case 6:case"end":return e.stop()}}),e)}))),qa.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ja={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ka="_blank",Ga="http://localhost",Xa=function(){"use strict";function e(t){r(V)(this,e),this.window=t,this.associatedEvent=null}return r(W)(e,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),e}();function Ya(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},Ja),{width:i.toString(),height:a.toString(),top:o,left:s}),l=Ae().toLowerCase();n&&(u=_n(l)?Ka:n),kn(l)&&(t=t||Ga,c.scrollbars="yes");var f=Object.entries(c).reduce((function(e,t){var n=r(q)(t,2),i=n[0],a=n[1];return"".concat(e).concat(i,"=").concat(a,",")}),"");if(Sn(l)&&"_self"!==u)return Za(t||"",u),new Xa(null);var d=window.open(t||"",u,f);br(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Xa(d)}function Za(e,t){var r=document.createElement("a");r.href=e,r.target=t;var n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $a="__/auth/handler",Qa="emulator/auth/handler";function eo(e,t,n,i,a,o){br(e.config.authDomain,e,"auth-domain-config-required"),br(e.config.apiKey,e,"invalid-api-key");var s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:Ft,eventId:a};if(t instanceof si){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Ue(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var f,d=Object.entries(o||{})[Symbol.iterator]();!(u=(f=d.next()).done);u=!0){var h=r(q)(f.value,2),p=h[0],v=h[1];s[p]=v}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}}if(t instanceof ui){var g=t.getScopes().filter((function(e){return""!==e}));g.length>0&&(s.scopes=g.join(","))}e.tenantId&&(s.tid=e.tenantId);var m,y,b=s,k=!0,w=!1,_=void 0;try{for(var E,x=Object.keys(b)[Symbol.iterator]();!(k=(E=x.next()).done);k=!0){var I=E.value;void 0===b[I]&&delete b[I]}}catch(e){w=!0,_=e}finally{try{k||null==x.return||x.return()}finally{if(w)throw _}}return"".concat((m=e,y=m.config,y.emulator?Ar(y,Qa):"https://".concat(y.authDomain,"/").concat($a)),"?").concat(je(b).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var to="webStorageSupport",ro=function(){"use strict";function e(){r(V)(this,e),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ci,this._completeRedirectFn=Ia,this._overrideRedirectResult=_a}return r(W)(e,[{key:"_openPopup",value:function(e,t,n,i){var a=this;return r(o)(r(s).mark((function o(){var u,c;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return wr(null===(u=a.eventManagers[e._key()])||void 0===u?void 0:u.manager,"_initialize() not called before _openPopup()"),c=eo(e,t,n,Ir(),i),r.abrupt("return",Ya(e,c,Pi()));case 4:case"end":return r.stop()}}),o)})))()}},{key:"_openRedirect",value:function(e,t,n,i){var a=this;return r(o)(r(s).mark((function o(){return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a._originValidation(e);case 2:return o=eo(e,t,n,Ir(),i),Ui().location.href=o,r.abrupt("return",new Promise((function(){})));case 4:case"end":return r.stop()}var o}),o)})))()}},{key:"_initialize",value:function(e){var t=this,r=e._key();if(this.eventManagers[r]){var n=this.eventManagers[r],i=n.manager,a=n.promise;return i?Promise.resolve(i):(wr(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[r]={promise:o},o.catch((function(){delete t.eventManagers[r]})),o}},{key:"initAndGetManager",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i,a;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,za(e);case 2:return i=r.sent,a=new Oa(e),i.register("authEvent",(function(t){return br(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:a.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),t.eventManagers[e._key()]={manager:a},t.iframes[e._key()]=i,r.abrupt("return",a);case 8:case"end":return r.stop()}}),n)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(to,{type:to},(function(r){var n,i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n.webStorageSupport;void 0!==i&&t(!!i),pr(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return Pa.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return An()||wn()||On()}}]),e}(),no=ro,io=function(e){"use strict";r(K)(n,e);var t=r(ie)(n);function n(e){var i;return r(V)(this,n),(i=t.call(this,"phone")).credential=e,i}return r(W)(n,[{key:"_finalizeEnroll",value:function(e,t,r){return function(e,t){return Ur(e,"POST","/v2/accounts/mfaEnrollment:finalize",Dr(e,t))}(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return Ur(e,"POST","/v2/accounts/mfaSignIn:finalize",Dr(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new n(e)}}]),n}(function(){"use strict";function e(t){r(V)(this,e),this.factorId=t}return r(W)(e,[{key:"_process",value:function(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return kr("unexpected MultiFactorSessionType")}}}]),e}());(function(){"use strict";function e(){r(V)(this,e)}return r(W)(e,null,[{key:"assertion",value:function(e){return io._fromCredential(e)}}]),e}()).FACTOR_ID="phone";var ao="@firebase/auth",oo="0.21.4",so=function(){"use strict";function e(t){r(V)(this,e),this.auth=t,this.internalListeners=new Map}return r(W)(e,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(e){var t=this;return r(o)(r(s).mark((function n(){var i;return r(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.assertAuthConfigured(),r.next=3,t.auth._initializationPromise;case 3:if(t.auth.currentUser){r.next=5;break}return r.abrupt("return",null);case 5:return r.next=7,t.auth.currentUser.getIdToken(e);case 7:return i=r.sent,r.abrupt("return",{accessToken:i});case 9:case"end":return r.stop()}}),n)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){br(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var uo,co=Oe("authIdTokenMaxAge")||300,lo=null,fo=function(e){return t=r(o)(r(s).mark((function t(n){var i,a,o;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=n,!t.t0){t.next=5;break}return t.next=4,n.getIdTokenResult();case 4:t.t0=t.sent;case 5:if(i=t.t0,!((a=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&a>co)){t.next=9;break}return t.abrupt("return");case 9:if(o=null==i?void 0:i.token,lo!==o){t.next=12;break}return t.abrupt("return");case 12:return lo=o,t.next=15,fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:"Bearer ".concat(o)}:{}});case 15:case"end":return t.stop()}}),t)}))),function(e){return t.apply(this,arguments)};var t};uo="Browser",Dt(new qe("auth",(function(e,t){var r=t.options,n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=n.options,o=a.apiKey,s=a.authDomain;return function(e,t){br(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),br(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var n={apiKey:o,authDomain:s,clientPlatform:uo,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cn(uo)},i=new Ln(e,t,n);return function(e,t){var r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(Er);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(i,r),i}(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,r){e.getProvider("auth-internal").initialize()}))),Dt(new qe("auth-internal",(function(e){var t=Pn(e.getProvider("auth").getImmediate());return new so(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(ao,oo,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(uo)),Wt(ao,oo,"esm2017");J=a("ds8z5"),o=a("bpxeT"),V=a("8MBJY"),W=a("a2hTj"),K=a("eYQtU"),q=a("1t1Wn"),m=a("8nrFW"),ie=a("2MbLg"),s=a("2TvXO");var ho,po,vo="firebasestorage.googleapis.com",go=function(e){"use strict";r(K)(n,e);var t=r(ie)(n);function n(e,i){var a,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return r(V)(this,n),(a=t.call(this,mo(e),"Firebase Storage: ".concat(i," (").concat(mo(e),")"))).status_=o,a.customData={serverResponse:null},a._baseMessage=a.message,Object.setPrototypeOf(r(J)(a),n.prototype),a}return r(W)(n,[{key:"status",get:function(){return this.status_},set:function(e){this.status_=e}},{key:"_codeEquals",value:function(e){return mo(e)===this.code}},{key:"serverResponse",get:function(){return this.customData.serverResponse},set:function(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message="".concat(this._baseMessage,"\n").concat(this.customData.serverResponse):this.message=this._baseMessage}}]),n}(Ne);function mo(e){return"storage/"+e}function yo(){return new go(ho.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function bo(){return new go(ho.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ko(){return new go(ho.CANCELED,"User canceled the upload/download.")}function wo(e){return new go(ho.INVALID_ARGUMENT,e)}function _o(){return new go(ho.APP_DELETED,"The Firebase app was deleted.")}(po=ho||(ho={})).UNKNOWN="unknown",po.OBJECT_NOT_FOUND="object-not-found",po.BUCKET_NOT_FOUND="bucket-not-found",po.PROJECT_NOT_FOUND="project-not-found",po.QUOTA_EXCEEDED="quota-exceeded",po.UNAUTHENTICATED="unauthenticated",po.UNAUTHORIZED="unauthorized",po.UNAUTHORIZED_APP="unauthorized-app",po.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",po.INVALID_CHECKSUM="invalid-checksum",po.CANCELED="canceled",po.INVALID_EVENT_NAME="invalid-event-name",po.INVALID_URL="invalid-url",po.INVALID_DEFAULT_BUCKET="invalid-default-bucket",po.NO_DEFAULT_BUCKET="no-default-bucket",po.CANNOT_SLICE_BLOB="cannot-slice-blob",po.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",po.NO_DOWNLOAD_URL="no-download-url",po.INVALID_ARGUMENT="invalid-argument",po.INVALID_ARGUMENT_COUNT="invalid-argument-count",po.APP_DELETED="app-deleted",po.INVALID_ROOT_OPERATION="invalid-root-operation",po.INVALID_FORMAT="invalid-format",po.INTERNAL_ERROR="internal-error",po.UNSUPPORTED_ENVIRONMENT="unsupported-environment";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Eo,xo,Io=function(){"use strict";function e(t,n){r(V)(this,e),this.bucket=t,this.path_=n}return r(W)(e,[{key:"path",get:function(){return this.path_}},{key:"isRoot",get:function(){return 0===this.path.length}},{key:"fullServerUrl",value:function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}},{key:"bucketOnlyServerUrl",value:function(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}}],[{key:"makeFromBucketSpec",value:function(t,r){var n,i;try{n=e.makeFromUrl(t,r)}catch(r){return new e(t,"")}if(""===n.path)return n;throw i=t,new go(ho.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+i+"'.")}},{key:"makeFromUrl",value:function(t,r){var n=null,i="([A-Za-z0-9.\\-_]+)";var a=new RegExp("^gs://"+i+"(/(.*))?$","i");function o(e){e.path_=decodeURIComponent(e.path)}for(var s=r.replace(/[.]/g,"\\."),u=[{regex:a,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp("^https?://".concat(s,"/").concat("v[A-Za-z0-9_]+","/b/").concat(i,"/o").concat("(/([^?#]*).*)?$"),"i"),indices:{bucket:1,path:3},postModify:o},{regex:new RegExp("^https?://".concat(r===vo?"(?:storage.googleapis.com|storage.cloud.google.com)":r,"/").concat(i,"/").concat("([^?#]*)"),"i"),indices:{bucket:1,path:2},postModify:o}],c=0;c<u.length;c++){var l=u[c],f=l.regex.exec(t);if(f){var d=f[l.indices.bucket],h=f[l.indices.path];h||(h=""),n=new e(d,h),l.postModify(n);break}}if(null==n)throw function(e){return new go(ho.INVALID_URL,"Invalid URL '"+e+"'.")}(t);return n}}]),e}(),To=function(){"use strict";function e(t){r(V)(this,e),this.promise_=Promise.reject(t)}return r(W)(e,[{key:"getPromise",value:function(){return this.promise_}},{key:"cancel",value:function(){}}]),e}();function Oo(e,t,r,n){if(n<t)throw wo("Invalid value for '".concat(e,"'. Expected ").concat(t," or greater."));if(n>r)throw wo("Invalid value for '".concat(e,"'. Expected ").concat(r," or less."))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(e){var t=encodeURIComponent,r="?";for(var n in e)if(e.hasOwnProperty(n)){r=r+(t(n)+"="+t(e[n]))+"&"}return r=r.slice(0,-1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ro(e,t){var r=e>=500&&e<600,n=-1!==[408,429].indexOf(e),i=-1!==t.indexOf(e);return r||n||i}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(xo=Eo||(Eo={}))[xo.NO_ERROR=0]="NO_ERROR",xo[xo.NETWORK_ERROR=1]="NETWORK_ERROR",xo[xo.ABORT=2]="ABORT";var Ao=function(){"use strict";function e(t,n,i,a,o,s,u,c,l,f,d){var h=!(arguments.length>11&&void 0!==arguments[11])||arguments[11],p=this;r(V)(this,e),this.url_=t,this.method_=n,this.headers_=i,this.body_=a,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=u,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=f,this.connectionFactory_=d,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((function(e,t){p.resolve_=e,p.reject_=t,p.start_()}))}return r(W)(e,[{key:"start_",value:function(){var e=this,t=function(t,r){var n=e.resolve_,i=e.reject_,a=r.connection;if(r.wasSuccessCode)try{var o=e.callback_(a,a.getResponse());void 0!==o?n(o):n()}catch(e){i(e)}else if(null!==a){var s=yo();s.serverResponse=a.getErrorText(),e.errorCallback_?i(e.errorCallback_(a,s)):i(s)}else if(r.canceled){i(e.appDelete_?_o():ko())}else{i(bo())}};this.canceled_?t(0,new Co(!1,null,!0)):this.backoffId_=
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t,n){var i=1,a=null,o=null,s=!1,u=0;function c(){return 2===u}var l=!1;function f(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];l||(l=!0,t.apply(null,r))}function d(t){a=setTimeout((function(){a=null,e(p,c())}),t)}function h(){o&&clearTimeout(o)}function p(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];if(l)h();else{var o,p,v;if(e)return h(),void(o=f).call.apply(o,[null,e].concat(r(m)(n)));if(c()||s)return h(),void(p=f).call.apply(p,[null,e].concat(r(m)(n)));i<64&&(i*=2),1===u?(u=2,v=0):v=1e3*(i+Math.random()),d(v)}}var v=!1;function g(e){v||(v=!0,h(),l||(null!==a?(e||(u=2),clearTimeout(a),d(0)):e||(u=1)))}return d(0),o=setTimeout((function(){s=!0,g(!0)}),n),g}((function(t,r){var n=e;if(r)t(!1,new Co(!1,null,!0));else{var i=e.connectionFactory_();e.pendingConnection_=i;var a=function(e){var t=e.loaded,r=e.lengthComputable?e.total:-1;null!==n.progressCallback_&&n.progressCallback_(t,r)};null!==e.progressCallback_&&i.addUploadProgressListener(a),i.send(e.url_,e.method_,e.body_,e.headers_).then((function(){null!==n.progressCallback_&&i.removeUploadProgressListener(a),n.pendingConnection_=null;var e=i.getErrorCode()===Eo.NO_ERROR,r=i.getStatus();if(!e||Ro(r,n.additionalRetryCodes_)&&n.retry){var o=i.getErrorCode()===Eo.ABORT;t(!1,new Co(!1,null,o))}else{var s=-1!==n.successCodes_.indexOf(r);t(!0,new Co(s,i))}}))}}),t,this.timeout_)}},{key:"getPromise",value:function(){return this.promise_}},{key:"cancel",value:function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}]),e}(),Co=function e(t,n,i){"use strict";r(V)(this,e),this.wasSuccessCode=t,this.connection=n,this.canceled=!!i};function No(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}function Lo(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}function Po(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Do(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function Uo(e,t,r,n,i,a){var o=!(arguments.length>6&&void 0!==arguments[6])||arguments[6],s=So(e.urlParams),u=e.url+s,c=Object.assign({},e.headers);return Po(c,t),No(c,r),Lo(c,a),Do(c,n),new Ao(u,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(e){var t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Bo=function(){"use strict";function e(t,n){r(V)(this,e),this._service=t,this._location=n instanceof Io?n:Io.makeFromUrl(n,t.host)}return r(W)(e,[{key:"toString",value:function(){return"gs://"+this._location.bucket+"/"+this._location.path}},{key:"_newRef",value:function(t,r){return new e(t,r)}},{key:"root",get:function(){var e=new Io(this._location.bucket,"");return this._newRef(this._service,e)}},{key:"bucket",get:function(){return this._location.bucket}},{key:"fullPath",get:function(){return this._location.path}},{key:"name",get:function(){return Mo(this._location.path)}},{key:"storage",get:function(){return this._service}},{key:"parent",get:function(){var t=
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){if(0===e.length)return null;var t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===t)return null;var r=new Io(this._location.bucket,t);return new e(this._service,r)}},{key:"_throwIfRoot",value:function(e){if(""===this._location.path)throw t=e,new go(ho.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");var t}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(e,t){var r=function(e,t){var r=t.split("/").filter((function(e){return e.length>0})).join("/");return 0===e.length?r:e+"/"+r}(e._location.path,t),n=new Io(e._location.bucket,r);return new Bo(e.storage,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(e,t){if(e instanceof zo){var r=e;if(null==r._bucket)throw new go(ho.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the 'storageBucket' property when initializing the app?");var n=new Bo(r,r._bucket);return null!=t?Fo(n,t):n}return void 0!==t?jo(e,t):e}function Ho(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof zo)return new Bo(e,t);throw wo("To use ref(service, url), the first argument must be a Storage instance.")}return Fo(e,t)}function Vo(e,t){var r=null==t?void 0:t.storageBucket;return null==r?null:Io.makeFromBucketSpec(r,e)}function Wo(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};e.host="".concat(t,":").concat(r),e._protocol="http";var i=n.mockUserToken;i&&(e._overrideAuthToken="string"==typeof i?i:Re(i,e.app.options.projectId))}var zo=function(){"use strict";function e(t,n,i,a,o){r(V)(this,e),this.app=t,this._authProvider=n,this._appCheckProvider=i,this._url=a,this._firebaseVersion=o,this._bucket=null,this._host=vo,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=a?Io.makeFromBucketSpec(a,this._host):Vo(this._host,this.app.options)}return r(W)(e,[{key:"host",get:function(){return this._host},set:function(e){this._host=e,null!=this._url?this._bucket=Io.makeFromBucketSpec(this._url,e):this._bucket=Vo(e,this.app.options)}},{key:"maxUploadRetryTime",get:function(){return this._maxUploadRetryTime},set:function(e){Oo("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}},{key:"maxOperationRetryTime",get:function(){return this._maxOperationRetryTime},set:function(e){Oo("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}},{key:"_getAuthToken",value:function(){var e=this;return r(o)(r(s).mark((function t(){var n,i;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._overrideAuthToken){t.next=2;break}return t.abrupt("return",e._overrideAuthToken);case 2:if(!(n=e._authProvider.getImmediate({optional:!0}))){t.next=9;break}return t.next=6,n.getToken();case 6:if(null===(i=t.sent)){t.next=9;break}return t.abrupt("return",i.accessToken);case 9:return t.abrupt("return",null);case 10:case"end":return t.stop()}}),t)})))()}},{key:"_getAppCheckToken",value:function(){var e=this;return r(o)(r(s).mark((function t(){var n,i;return r(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n=e._appCheckProvider.getImmediate({optional:!0}))){t.next=6;break}return t.next=4,n.getToken();case 4:return i=t.sent,t.abrupt("return",i.token);case 6:return t.abrupt("return",null);case 7:case"end":return t.stop()}}),t)})))()}},{key:"_delete",value:function(){return this._deleted||(this._deleted=!0,this._requests.forEach((function(e){return e.cancel()})),this._requests.clear()),Promise.resolve()}},{key:"_makeStorageReference",value:function(e){return new Bo(this,e)}},{key:"_makeRequest",value:function(e,t,r,n){var i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];if(this._deleted)return new To(_o());var a=this,o=Uo(e,this._appId,r,n,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then((function(){return a._requests.delete(o)}),(function(){return a._requests.delete(o)})),o}},{key:"makeRequestWithTokens",value:function(e,t){var n=this;return r(o)(r(s).mark((function i(){var a,o,u;return r(s).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.t0=r(q),i.next=3,Promise.all([n._getAuthToken(),n._getAppCheckToken()]);case 3:return i.t1=i.sent,a=(0,i.t0)(i.t1,2),o=a[0],u=a[1],i.abrupt("return",n._makeRequest(e,t,o,u).getPromise());case 8:case"end":return i.stop()}}),i)})))()}}]),e}(),qo="@firebase/storage",Jo="0.11.2",Ko="storage";function Go(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};Wo(e,t,r,n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(e,t){var r=t.instanceIdentifier,n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return new zo(n,i,a,r,Ft)}Dt(new qe(Ko,Xo,"PUBLIC").setMultipleInstances(!0)),Wt(qo,Jo,""),Wt(qo,Jo,"esm2017");var Yo,Zo=document.querySelector(".header__profile-btn"),$o=(document.querySelector("#F"),Ht({apiKey:"AIzaSyBEyxsja9Xmbt99yqe3GAmeQbiTjDFO9Ss",authDomain:"itd-js.firebaseapp.com",projectId:"itd-js",storageBucket:"itd-js.appspot.com",messagingSenderId:"506310313975",appId:"1:506310313975:web:c42844fb885d711c6710f2"})),Qo=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Vt(),t=Ut(e,"auth");if(t.isInitialized())return t.getImmediate();var r=xr(e,{popupRedirectResolver:no,persistence:[Qi,Ri,Ci]}),n=Oe("authTokenSyncURL");if(n){var i=fo(n);xi(r,i,(function(){return i(r.currentUser)})),Ei(r,(function(e){return i(e)}))}var a=xe("auth");return a&&Un(r,"http://".concat(a)),r}($o),es=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Vt(),t=arguments.length>1?arguments[1]:void 0,n=Ut(e=ze(e),Ko),i=n.getImmediate({identifier:t}),a=Ie("storage");return a&&Go.apply(void 0,[i].concat(r(m)(a))),i}($o);Yo="cocktails",Ho(ze(es),Yo);function ts(){return(ts=r(o)(r(s).mark((function e(){var t,n;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new li,e.prev=1,e.next=4,va(Qo,t);case 4:n=e.sent,console.log(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}Zo.addEventListener("click",(function(){return ts.apply(this,arguments)}));o=a("bpxeT"),s=a("2TvXO");var rs={body:document.querySelector("body"),backdrop:document.querySelector(".backdrop"),gallery:document.querySelector(".gallery"),modalRecipeEl:document.querySelector("[data-modal-recipe]"),modalRecipeCloseBtn:document.querySelector("[data-modal-recipe-close]"),modalRecipeRenderEl:document.querySelector(".modal-recipe__render-container"),modalIngredientEl:document.querySelector("[data-modal-ingredient]"),modalIngredientCloseBtn:document.querySelector("[data-modal-ingredient-close]"),modalIngredientRenderEl:document.querySelector(".modal-ingredient__render-container")};l=a("5RN7g");a("dIxxU");c=a("ke5Oc");var ns=rs.body;function is(){ns.classList.add("modal-open")}var as=rs.modalRecipeRenderEl,os=rs.modalIngredientRenderEl;function ss(e){var t=e.idDrink,r=e.strDrink,n=e.strInstructions,i=e.strDrinkThumb,a='<div class="modal-recipe__top-wrap">\n  <div class="modal-recipe__title-ingred-wrap">\n  <h2 class="modal-recipe__title">'.concat(r,'</h2>\n\n      <div class="modal-recipe__ingredients-wrap">\n        <h3 class="modal-recipe__ingredients-title">INGREDIENTS</h3>\n        <p class="modal-recipe__ingredients-sub-title">Per cocktail</p>\n        <ul class="modal-recipe__ingredients-list">').concat(function(e){for(var t="",r=1;r<15;r+=1){var n=e["strIngredient".concat(r)],i=e["strMeasure".concat(r)]||"";if(!n)break;t+='<li class="modal-recipe__ingredient"><a class="modal-recipe__ingredient-link" data-type=\'open-ingredient\' data-name="'.concat(n,'"><span class="modal-recipe__ingredient-measure">').concat(i," </span>").concat(n,"</a></li>")}return t}(e),'\n        </ul>\n      </div></div>\n\n       <div class="modal-recipe__img-thumb">\n        <img\n        class="modal-recipe__img"\n        src=').concat(i,'\n        alt="').concat(r,' photo"\n        />\n      </div>\n    </div>\n     <div class="modal-recipe__instructions-wrap">\n      <h3 class="modal-recipe__instructions-title">INSTRUCTIONS</h3>\n      <p class="modal-recipe__instructions-text">\n        ').concat(n,'\n      </p>\n    </div>\n    <button class="modal-recipe__btn" type="button" data-id="').concat(t,'" data-favorite="cocktail">\n      Add to favorite\n    </button>');as.insertAdjacentHTML("beforeend",a)}function us(e){var t=e.idIngredient,r=e.strIngredient,n=e.strDescription,i=e.strType,a=e.strAlcohol,o=e.strABV,s=n?n.slice(1,n.length):"-",u=a||"None",c=o||"-",l='<div class="modal-ingredient__img-thumb">\n      <img\n        class="modal-ingredient__img"\n        src="https://thecocktaildb.com/images/ingredients/'.concat(r,'-Small.png"  alt="').concat(r,' photo"\n      /></div>\n  <div class="modal-ingredient__title-wrap"><h2 class="modal-ingredient__title">').concat(r,'</h2>\n    <p class="modal-ingredient__sub-title">').concat(i,'</p></div>\n    <p class="modal-ingredient__text">\n      <span class="modal-ingredient__text--first">').concat(r,"</span> ").concat(s,'\n    </p>\n    <ul class="modal-ingredient__list">\n      <li class="modal-ingredient__item">Type: ').concat(i,'</li>\n      <li class="modal-ingredient__item">Alcohol: ').concat(u,'</li>\n      <li class="modal-ingredient__item">Alcohol by volume: ').concat(c,'</li>\n    </ul>\n    <button class="modal-ingredient__btn" type="button" data-id="').concat(t,'" data-favorite="ingredient">\n      Add to favorite\n    </button>');os.insertAdjacentHTML("beforeend",l)}function cs(e){e.replaceChildren()}var ls=rs.modalIngredientEl,fs=rs.modalRecipeEl,ds=rs.modalIngredientRenderEl,hs=rs.modalRecipeRenderEl;function ps(e){e.classList.remove("is-hidden")}function vs(e){e.classList.add("is-hidden")}function gs(e){e.preventDefault(),"Escape"===e.code&&(ls.classList.contains("is-hidden")?(ys(fs),document.removeEventListener("keydown",gs)):ys(ls))}function ms(e){e.currentTarget.classList.contains("modal-recipe__close")&&ys(fs),e.currentTarget.classList.contains("modal-ingredient__close")&&ys(ls)}function ys(e){if(e===ls)return vs(e),void cs(ds);e.removeEventListener("click",bs),cs(hs),vs(e),ns.classList.remove("modal-open"),document.removeEventListener("keydown",gs)}function bs(e){e.target.classList.contains("backdrop-recipe")&&ys(fs),e.target.classList.contains("backdrop-ingredient")&&ys(ls)}o=a("bpxeT"),s=a("2TvXO");a("dIxxU");c=a("ke5Oc"),l=a("5RN7g");var ks=rs.modalIngredientEl,ws=rs.modalIngredientCloseBtn;function _s(e){return Es.apply(this,arguments)}function Es(){return(Es=r(o)(r(s).mark((function e(t){var n,i;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("open-ingredient"===t.target.dataset.type){e.next=2;break}return e.abrupt("return");case 2:return ps(ks),ws.addEventListener("click",ms),ks.addEventListener("click",bs),n=t.target.dataset.name.replace(" ","_"),e.next=8,xs(n);case 8:i=e.sent.ingredients,us(i[0]);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function xs(e){return Is.apply(this,arguments)}function Is(){return(Is=r(o)(r(s).mark((function e(t){var n,i,a;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(l.default,"search.php?i=").concat(t),e.prev=1,e.next=4,c.default.get("".concat(n));case 4:return i=e.sent.data,e.abrupt("return",i);case 8:return e.prev=8,e.t0=e.catch(1),a=e.t0.response,console.log("error",a),e.abrupt("return",a);case 13:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}var Ts=rs.gallery,Os=rs.modalRecipeEl,Ss=rs.modalRecipeCloseBtn;function Rs(){return(Rs=r(o)(r(s).mark((function e(t){var n,i;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("open-learn-more"===t.target.dataset.type){e.next=2;break}return e.abrupt("return");case 2:return ps(Os),is(),document.addEventListener("keydown",gs),Os.addEventListener("click",bs),Ss.addEventListener("click",ms),n=t.target.dataset.id,e.next=10,As(n);case 10:i=e.sent.drinks,ss(i[0]),document.querySelector(".modal-recipe__ingredients-list").addEventListener("click",_s);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function As(e){return Cs.apply(this,arguments)}function Cs(){return(Cs=r(o)(r(s).mark((function e(t){var n,i,a;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(l.default,"lookup.php?i=").concat(t),e.prev=1,e.next=4,c.default.get("".concat(n));case 4:return i=e.sent.data,e.abrupt("return",i);case 8:return e.prev=8,e.t0=e.catch(1),a=e.t0.response,console.log("fetchDrinkByID -> response:",a),e.abrupt("return",a);case 13:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}Ts&&Ts.addEventListener("click",(function(e){return Rs.apply(this,arguments)}));o=a("bpxeT"),s=a("2TvXO");a("dIxxU");c=a("ke5Oc"),l=a("5RN7g");var Ns=document.querySelector(".mob-alphabet-list"),Ls=document.querySelector(".alphabet-list"),Ps=document.querySelector(".numbers-container");function Ds(e){return Us.apply(this,arguments)}function Us(){return(Us=r(o)(r(s).mark((function e(t){var n;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.default.get("".concat(l.default,"search.php?f=").concat(t));case 3:return n=e.sent.data,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function Ms(e){return Bs.apply(this,arguments)}function Bs(){return(Bs=r(o)(r(s).mark((function e(t){var n,i,a,o,u,c;return r(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),E.innerHTML="",Ps.innerHTML="",sessionStorage.removeItem(x),n=t.target.textContent,e.next=7,Ds(n);case 7:if(null!==(i=e.sent.drinks)){e.next=12;break}return _.style.display="none",g(),e.abrupt("return");case 12:if(a=b(i),sessionStorage.setItem(x,JSON.stringify(a)),sessionStorage.getItem(x)){for(o=JSON.parse(sessionStorage.getItem(x)),u=Object.keys(o),c=1;c<=u.length;c++)R(c);_.style.display="flex",Ps.firstElementChild.classList.add("active")}i.length<=O()&&(_.style.display="none"),d(a[I]);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(_&&(_.style.display="none",_.addEventListener("click",T)),Ls)&&document.querySelectorAll(".alphabet-list-item").forEach((function(e){e.addEventListener("click",Ms)}));Ns&&document.querySelectorAll(".mob-alphabet-list-item").forEach((function(e){e.addEventListener("click",Ms)}));var js=new(0,a("fqZse").default),Fs=document.querySelector(".gallery");Fs&&Fs.addEventListener("click",(function(e){var t=e.target;if("cocktail"===t.dataset.favorite){var r=e.target.dataset.id;if(js.cocktails.includes(r))return t.innerHTML='\n        Add to\n        <svg class="empty__heart" width="21" height="19">\n            <use href="'.concat(u,'#icon-empty-heart"></use>\n        </svg>\n    '),void js.removeCocktail(r);!function(e){e.innerHTML='\n        Remove\n        <svg class="empty__heart" width="21" height="19">\n            <use href="'.concat(u,'#icon-full-heart"></use>\n        </svg>\n    ')}(t),js.addCocktail(r)}}));V=a("8MBJY"),W=a("a2hTj"),z=a("hKHmD");var Hs=document.querySelectorAll(".dark-mode-toggle"),Vs=document.body,Ws=new(function(){"use strict";function e(){var t=this;r(V)(this,e),r(z)(this,"darkTheme","dark-theme"),r(z)(this,"toggleTheme",(function(){var e=t.isDarkThemeOn();Vs.classList.toggle(t.darkTheme,!e),Hs.forEach((function(t){return t.checked=!e})),t.getTheme()?t.removeTheme():t.setTheme()})),r(z)(this,"setThemeOn",(function(e){Vs.classList.toggle(e),Hs.forEach((function(t){return t.checked=Boolean(e)}))})),Hs.forEach((function(e){return e.addEventListener("click",t.toggleTheme)}))}return r(W)(e,[{key:"setTheme",value:function(){localStorage.setItem(this.darkTheme,this.darkTheme)}},{key:"removeTheme",value:function(){localStorage.removeItem(this.darkTheme)}},{key:"getTheme",value:function(){return localStorage.getItem(this.darkTheme)}},{key:"isDarkThemeOn",value:function(){return Vs.classList.contains(this.darkTheme)}}]),e}());window.addEventListener("DOMContentLoaded",(function(){Ws.getTheme()&&Ws.setThemeOn(Ws.darkTheme)}));var zs=document.querySelector(".search-alphabet-input"),qs=document.querySelector(".hero-modal-search"),Js=document.querySelector(".input-icon"),Ks=(document.querySelectorAll(".mob-alphabet-list-item"),document.querySelector(".input-letter"));function Gs(e){qs.style.display="none",Ks.textContent=e.target.textContent,zs.classList.toggle("ass")}document.querySelector(".mob-alphabet-list")&&document.querySelectorAll(".mob-alphabet-list-item").forEach((function(e){e.addEventListener("click",Gs)}));zs.addEventListener("click",(function(){qs.style.display="block",zs.style.backgroundColor="#fd5103",zs.style.color="#FCFCFC",Js.style.fill="#FCFCFC",zs.classList.contains("ass")&&(qs.style.display="none"),zs.classList.toggle("ass"),window.addEventListener("click",(function e(t){t.target.closest(".hero-modal-search")||t.target.closest(".search-alphabet-input")||(qs.style.display="none",zs.style.backgroundColor="",zs.style.color="",Js.style.fill="",zs.classList.toggle("ass"),window.removeEventListener("click",e))}))}))}();
//# sourceMappingURL=cocktails.e40a64f1.js.map
