"use strict";(self["webpackChunkvue3_juben"]=self["webpackChunkvue3_juben"]||[]).push([[443],{967:function(e,t,n){n.r(t),n.d(t,{default:function(){return yn}});var r=n(252),o=n(577),s=n(963);const i=e=>((0,r.dD)("data-v-28ebfd6c"),e=e(),(0,r.Cn)(),e),a={class:"login"},c={class:"form"},l={class:"choose"},u={class:"form1"},d={class:"username"},f=i((()=>(0,r._)("span",{class:"left"},[(0,r._)("span",{style:{color:"red"}},"*"),(0,r.Uk)(" 账号")],-1))),p={class:"password"},h=i((()=>(0,r._)("span",{class:"left"},[(0,r._)("span",{style:{color:"red"}},"*"),(0,r.Uk)(" 密码")],-1))),m=i((()=>(0,r._)("div",{class:"login2"},"微信扫码登录",-1))),y=i((()=>(0,r._)("div",{class:"register"},"没有账号？点此去注册>>",-1))),g={class:"form2"},w={class:"username"},b=i((()=>(0,r._)("span",{class:"left"},[(0,r._)("span",{style:{color:"red"}},"*"),(0,r.Uk)(" 手机号")],-1))),E={class:"phone"},v=i((()=>(0,r._)("span",{class:"area"},"+86",-1))),O={class:"password"},S=i((()=>(0,r._)("span",{class:"left"},[(0,r._)("span",{style:{color:"red"}},"*"),(0,r.Uk)(" 验证码")],-1))),R={class:"codes"},A=["disabled"],_=i((()=>(0,r._)("div",{class:"login1"},"验证码登录",-1))),T=i((()=>(0,r._)("div",{class:"register"},"没有账号？点此去注册>>",-1)));function j(e,t,n,i,j,C){return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("div",c,[(0,r._)("div",l,[(0,r._)("div",{class:(0,o.C_)(0==i.indexflag?"chose":""),onClick:t[0]||(t[0]=e=>i.choose(0))}," 账号登录 ",2),(0,r._)("div",{class:(0,o.C_)(1==i.indexflag?"chose":""),onClick:t[1]||(t[1]=e=>i.choose(1))}," 验证码登录 ",2)]),(0,r.wy)((0,r._)("div",u,[(0,r._)("div",d,[f,(0,r.wy)((0,r._)("input",{type:"text",class:"usernames",placeholder:"请输入您的账号","onUpdate:modelValue":t[2]||(t[2]=e=>i.username=e)},null,512),[[s.nr,i.username]])]),(0,r._)("div",{class:"usershows",style:(0,o.j5)({opacity:i.usershow})},"请输入账号",4),(0,r._)("div",p,[h,(0,r.wy)((0,r._)("input",{type:"password",class:"passwords",placeholder:"请输入您的密码","onUpdate:modelValue":t[3]||(t[3]=e=>i.password=e)},null,512),[[s.nr,i.password]])]),(0,r._)("div",{class:"passshows",style:(0,o.j5)({opacity:i.passshow})},"请输入密码",4),(0,r._)("div",{class:"login1",onClick:t[4]||(t[4]=(...e)=>i.login&&i.login(...e))},"账号登录"),m,y],512),[[s.F8,0==i.indexflag]]),(0,r.wy)((0,r._)("div",g,[(0,r._)("div",w,[b,(0,r._)("div",E,[v,(0,r.wy)((0,r._)("input",{type:"text",class:"usernames",placeholder:"请输入您的手机号","onUpdate:modelValue":t[5]||(t[5]=e=>i.phone=e)},null,512),[[s.nr,i.phone]])])]),(0,r._)("div",{class:"usershows",style:(0,o.j5)({opacity:i.phoneshow})}," 请输入手机号 ",4),(0,r._)("div",O,[S,(0,r._)("div",R,[(0,r.wy)((0,r._)("input",{type:"password",class:"passwords",placeholder:"请输入验证码","onUpdate:modelValue":t[6]||(t[6]=e=>i.code=e)},null,512),[[s.nr,i.code]]),(0,r._)("button",{ref:"coder",disabled:i.disabled,type:"button",class:(0,o.C_)(i.disabled?"codess":"active"),onClick:t[7]||(t[7]=(...e)=>i.codelogin&&i.codelogin(...e))}," 获取验证码 ",10,A)])]),(0,r._)("div",{class:"passshows",style:(0,o.j5)({opacity:i.codeshow})},"请输入验证码",4),_,T],512),[[s.F8,1==i.indexflag]])])])}function C(e,t){return function(){return e.apply(t,arguments)}}const{toString:x}=Object.prototype,{getPrototypeOf:N}=Object,P=(e=>t=>{const n=x.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),U=e=>(e=e.toLowerCase(),t=>P(t)===e),F=e=>t=>typeof t===e,{isArray:L}=Array,B=F("undefined");function D(e){return null!==e&&!B(e)&&null!==e.constructor&&!B(e.constructor)&&z(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const k=U("ArrayBuffer");function H(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&k(e.buffer),t}const I=F("string"),z=F("function"),q=F("number"),M=e=>null!==e&&"object"===typeof e,J=e=>!0===e||!1===e,V=e=>{if("object"!==P(e))return!1;const t=N(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},W=U("Date"),K=U("File"),G=U("Blob"),$=U("FileList"),X=e=>M(e)&&z(e.pipe),Y=e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||z(e.append)&&("formdata"===(t=P(e))||"object"===t&&z(e.toString)&&"[object FormData]"===e.toString()))},Q=U("URLSearchParams"),Z=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ee(e,t,{allOwnKeys:n=!1}={}){if(null===e||"undefined"===typeof e)return;let r,o;if("object"!==typeof e&&(e=[e]),L(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function te(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;while(o-- >0)if(r=n[o],t===r.toLowerCase())return r;return null}const ne=(()=>"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global)(),re=e=>!B(e)&&e!==ne;function oe(){const{caseless:e}=re(this)&&this||{},t={},n=(n,r)=>{const o=e&&te(t,r)||r;V(t[o])&&V(n)?t[o]=oe(t[o],n):V(n)?t[o]=oe({},n):L(n)?t[o]=n.slice():t[o]=n};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&ee(arguments[r],n);return t}const se=(e,t,n,{allOwnKeys:r}={})=>(ee(t,((t,r)=>{n&&z(t)?e[r]=C(t,n):e[r]=t}),{allOwnKeys:r}),e),ie=e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),ae=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},ce=(e,t,n,r)=>{let o,s,i;const a={};if(t=t||{},null==e)return t;do{o=Object.getOwnPropertyNames(e),s=o.length;while(s-- >0)i=o[s],r&&!r(i,e,t)||a[i]||(t[i]=e[i],a[i]=!0);e=!1!==n&&N(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},le=(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},ue=e=>{if(!e)return null;if(L(e))return e;let t=e.length;if(!q(t))return null;const n=new Array(t);while(t-- >0)n[t]=e[t];return n},de=(e=>t=>e&&t instanceof e)("undefined"!==typeof Uint8Array&&N(Uint8Array)),fe=(e,t)=>{const n=e&&e[Symbol.iterator],r=n.call(e);let o;while((o=r.next())&&!o.done){const n=o.value;t.call(e,n[0],n[1])}},pe=(e,t)=>{let n;const r=[];while(null!==(n=e.exec(t)))r.push(n);return r},he=U("HTMLFormElement"),me=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),ye=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),ge=U("RegExp"),we=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ee(n,((n,o)=>{!1!==t(n,o,e)&&(r[o]=n)})),Object.defineProperties(e,r)},be=e=>{we(e,((t,n)=>{if(z(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];z(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},Ee=(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return L(e)?r(e):r(String(e).split(t)),n},ve=()=>{},Oe=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Se="abcdefghijklmnopqrstuvwxyz",Re="0123456789",Ae={DIGIT:Re,ALPHA:Se,ALPHA_DIGIT:Se+Se.toUpperCase()+Re},_e=(e=16,t=Ae.ALPHA_DIGIT)=>{let n="";const{length:r}=t;while(e--)n+=t[Math.random()*r|0];return n};function Te(e){return!!(e&&z(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])}const je=e=>{const t=new Array(10),n=(e,r)=>{if(M(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=L(e)?[]:{};return ee(e,((e,t)=>{const s=n(e,r+1);!B(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},Ce=U("AsyncFunction"),xe=e=>e&&(M(e)||z(e))&&z(e.then)&&z(e.catch);var Ne={isArray:L,isArrayBuffer:k,isBuffer:D,isFormData:Y,isArrayBufferView:H,isString:I,isNumber:q,isBoolean:J,isObject:M,isPlainObject:V,isUndefined:B,isDate:W,isFile:K,isBlob:G,isRegExp:ge,isFunction:z,isStream:X,isURLSearchParams:Q,isTypedArray:de,isFileList:$,forEach:ee,merge:oe,extend:se,trim:Z,stripBOM:ie,inherits:ae,toFlatObject:ce,kindOf:P,kindOfTest:U,endsWith:le,toArray:ue,forEachEntry:fe,matchAll:pe,isHTMLForm:he,hasOwnProperty:ye,hasOwnProp:ye,reduceDescriptors:we,freezeMethods:be,toObjectSet:Ee,toCamelCase:me,noop:ve,toFiniteNumber:Oe,findKey:te,global:ne,isContextDefined:re,ALPHABET:Ae,generateString:_e,isSpecCompliantForm:Te,toJSONObject:je,isAsyncFn:Ce,isThenable:xe};function Pe(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}Ne.inherits(Pe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Ne.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ue=Pe.prototype,Fe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{Fe[e]={value:e}})),Object.defineProperties(Pe,Fe),Object.defineProperty(Ue,"isAxiosError",{value:!0}),Pe.from=(e,t,n,r,o,s)=>{const i=Object.create(Ue);return Ne.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),Pe.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};var Le=Pe,Be=null;function De(e){return Ne.isPlainObject(e)||Ne.isArray(e)}function ke(e){return Ne.endsWith(e,"[]")?e.slice(0,-2):e}function He(e,t,n){return e?e.concat(t).map((function(e,t){return e=ke(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}function Ie(e){return Ne.isArray(e)&&!e.some(De)}const ze=Ne.toFlatObject(Ne,{},null,(function(e){return/^is[A-Z]/.test(e)}));function qe(e,t,n){if(!Ne.isObject(e))throw new TypeError("target must be an object");t=t||new(Be||FormData),n=Ne.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!Ne.isUndefined(t[e])}));const r=n.metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,a=n.Blob||"undefined"!==typeof Blob&&Blob,c=a&&Ne.isSpecCompliantForm(t);if(!Ne.isFunction(o))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(Ne.isDate(e))return e.toISOString();if(!c&&Ne.isBlob(e))throw new Le("Blob is not supported. Use a Buffer instead.");return Ne.isArrayBuffer(e)||Ne.isTypedArray(e)?c&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,n,o){let a=e;if(e&&!o&&"object"===typeof e)if(Ne.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(Ne.isArray(e)&&Ie(e)||(Ne.isFileList(e)||Ne.endsWith(n,"[]"))&&(a=Ne.toArray(e)))return n=ke(n),a.forEach((function(e,r){!Ne.isUndefined(e)&&null!==e&&t.append(!0===i?He([n],r,s):null===i?n:n+"[]",l(e))})),!1;return!!De(e)||(t.append(He(o,n,s),l(e)),!1)}const d=[],f=Object.assign(ze,{defaultVisitor:u,convertValue:l,isVisitable:De});function p(e,n){if(!Ne.isUndefined(e)){if(-1!==d.indexOf(e))throw Error("Circular reference detected in "+n.join("."));d.push(e),Ne.forEach(e,(function(e,r){const s=!(Ne.isUndefined(e)||null===e)&&o.call(t,e,Ne.isString(r)?r.trim():r,n,f);!0===s&&p(e,n?n.concat(r):[r])})),d.pop()}}if(!Ne.isObject(e))throw new TypeError("data must be an object");return p(e),t}var Me=qe;function Je(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Ve(e,t){this._pairs=[],e&&Me(e,this,t)}const We=Ve.prototype;We.append=function(e,t){this._pairs.push([e,t])},We.toString=function(e){const t=e?function(t){return e.call(this,t,Je)}:Je;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var Ke=Ve;function Ge(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function $e(e,t,n){if(!t)return e;const r=n&&n.encode||Ge,o=n&&n.serialize;let s;if(s=o?o(t,n):Ne.isURLSearchParams(t)?t.toString():new Ke(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}class Xe{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Ne.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}var Ye=Xe,Qe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ze="undefined"!==typeof URLSearchParams?URLSearchParams:Ke,et="undefined"!==typeof FormData?FormData:null,tt="undefined"!==typeof Blob?Blob:null;const nt=(()=>{let e;return("undefined"===typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!==typeof window&&"undefined"!==typeof document)})(),rt=(()=>"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts)();var ot={isBrowser:!0,classes:{URLSearchParams:Ze,FormData:et,Blob:tt},isStandardBrowserEnv:nt,isStandardBrowserWebWorkerEnv:rt,protocols:["http","https","file","blob","url","data"]};function st(e,t){return Me(e,new ot.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return ot.isNode&&Ne.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}function it(e){return Ne.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}function at(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function ct(e){function t(e,n,r,o){let s=e[o++];const i=Number.isFinite(+s),a=o>=e.length;if(s=!s&&Ne.isArray(r)?r.length:s,a)return Ne.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i;r[s]&&Ne.isObject(r[s])||(r[s]=[]);const c=t(e,n,r[s],o);return c&&Ne.isArray(r[s])&&(r[s]=at(r[s])),!i}if(Ne.isFormData(e)&&Ne.isFunction(e.entries)){const n={};return Ne.forEachEntry(e,((e,r)=>{t(it(e),r,n,0)})),n}return null}var lt=ct;const ut={"Content-Type":void 0};function dt(e,t,n){if(Ne.isString(e))try{return(t||JSON.parse)(e),Ne.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}const ft={transitional:Qe,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=Ne.isObject(e);o&&Ne.isHTMLForm(e)&&(e=new FormData(e));const s=Ne.isFormData(e);if(s)return r&&r?JSON.stringify(lt(e)):e;if(Ne.isArrayBuffer(e)||Ne.isBuffer(e)||Ne.isStream(e)||Ne.isFile(e)||Ne.isBlob(e))return e;if(Ne.isArrayBufferView(e))return e.buffer;if(Ne.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return st(e,this.formSerializer).toString();if((i=Ne.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Me(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),dt(e)):e}],transformResponse:[function(e){const t=this.transitional||ft.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&Ne.isString(e)&&(n&&!this.responseType||r)){const n=t&&t.silentJSONParsing,s=!n&&r;try{return JSON.parse(e)}catch(o){if(s){if("SyntaxError"===o.name)throw Le.from(o,Le.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ot.classes.FormData,Blob:ot.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Ne.forEach(["delete","get","head"],(function(e){ft.headers[e]={}})),Ne.forEach(["post","put","patch"],(function(e){ft.headers[e]=Ne.merge(ut)}));var pt=ft;const ht=Ne.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var mt=e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&ht[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t};const yt=Symbol("internals");function gt(e){return e&&String(e).trim().toLowerCase()}function wt(e){return!1===e||null==e?e:Ne.isArray(e)?e.map(wt):String(e)}function bt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;while(r=n.exec(e))t[r[1]]=r[2];return t}const Et=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function vt(e,t,n,r,o){return Ne.isFunction(r)?r.call(this,t,n):(o&&(t=n),Ne.isString(t)?Ne.isString(r)?-1!==t.indexOf(r):Ne.isRegExp(r)?r.test(t):void 0:void 0)}function Ot(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}function St(e,t){const n=Ne.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}class Rt{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=gt(t);if(!o)throw new Error("header name must be a non-empty string");const s=Ne.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=wt(e))}const s=(e,t)=>Ne.forEach(e,((e,n)=>o(e,n,t)));return Ne.isPlainObject(e)||e instanceof this.constructor?s(e,t):Ne.isString(e)&&(e=e.trim())&&!Et(e)?s(mt(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=gt(e),e){const n=Ne.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return bt(e);if(Ne.isFunction(t))return t.call(this,e,n);if(Ne.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=gt(e),e){const n=Ne.findKey(this,e);return!(!n||void 0===this[n]||t&&!vt(this,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=gt(e),e){const o=Ne.findKey(n,e);!o||t&&!vt(n,n[o],o,t)||(delete n[o],r=!0)}}return Ne.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;while(n--){const o=t[n];e&&!vt(this,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return Ne.forEach(this,((r,o)=>{const s=Ne.findKey(n,o);if(s)return t[s]=wt(r),void delete t[o];const i=e?Ot(o):String(o).trim();i!==o&&delete t[o],t[i]=wt(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return Ne.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&Ne.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=this[yt]=this[yt]={accessors:{}},n=t.accessors,r=this.prototype;function o(e){const t=gt(e);n[t]||(St(r,e),n[t]=!0)}return Ne.isArray(e)?e.forEach(o):o(e),this}}Rt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),Ne.freezeMethods(Rt.prototype),Ne.freezeMethods(Rt);var At=Rt;function _t(e,t){const n=this||pt,r=t||n,o=At.from(r.headers);let s=r.data;return Ne.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function Tt(e){return!(!e||!e.__CANCEL__)}function jt(e,t,n){Le.call(this,null==e?"canceled":e,Le.ERR_CANCELED,t,n),this.name="CanceledError"}Ne.inherits(jt,Le,{__CANCEL__:!0});var Ct=jt;function xt(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new Le("Request failed with status code "+n.status,[Le.ERR_BAD_REQUEST,Le.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var Nt=ot.isStandardBrowserEnv?function(){return{write:function(e,t,n,r,o,s){const i=[];i.push(e+"="+encodeURIComponent(t)),Ne.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),Ne.isString(r)&&i.push("path="+r),Ne.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Pt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Ut(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ft(e,t){return e&&!Pt(t)?Ut(e,t):t}var Lt=ot.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=Ne.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return function(){return!0}}();function Bt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Dt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=r[i];o||(o=c),n[s]=a,r[s]=c;let u=i,d=0;while(u!==s)d+=n[u++],u%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const f=l&&c-l;return f?Math.round(1e3*d/f):void 0}}var kt=Dt;function Ht(e,t){let n=0;const r=kt(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,a=s-n,c=r(a),l=s<=i;n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&l?(i-s)/c:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const It="undefined"!==typeof XMLHttpRequest;var zt=It&&function(e){return new Promise((function(t,n){let r=e.data;const o=At.from(e.headers).normalize(),s=e.responseType;let i;function a(){e.cancelToken&&e.cancelToken.unsubscribe(i),e.signal&&e.signal.removeEventListener("abort",i)}Ne.isFormData(r)&&(ot.isStandardBrowserEnv||ot.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const l=Ft(e.baseURL,e.url);function u(){if(!c)return;const r=At.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),o=s&&"text"!==s&&"json"!==s?c.response:c.responseText,i={data:o,status:c.status,statusText:c.statusText,headers:r,config:e,request:c};xt((function(e){t(e),a()}),(function(e){n(e),a()}),i),c=null}if(c.open(e.method.toUpperCase(),$e(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=u:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(u)},c.onabort=function(){c&&(n(new Le("Request aborted",Le.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new Le("Network Error",Le.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||Qe;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new Le(t,r.clarifyTimeoutError?Le.ETIMEDOUT:Le.ECONNABORTED,e,c)),c=null},ot.isStandardBrowserEnv){const t=(e.withCredentials||Lt(l))&&e.xsrfCookieName&&Nt.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in c&&Ne.forEach(o.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),Ne.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&"json"!==s&&(c.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&c.addEventListener("progress",Ht(e.onDownloadProgress,!0)),"function"===typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",Ht(e.onUploadProgress)),(e.cancelToken||e.signal)&&(i=t=>{c&&(n(!t||t.type?new Ct(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(i),e.signal&&(e.signal.aborted?i():e.signal.addEventListener("abort",i)));const d=Bt(l);d&&-1===ot.protocols.indexOf(d)?n(new Le("Unsupported protocol "+d+":",Le.ERR_BAD_REQUEST,e)):c.send(r||null)}))};const qt={http:Be,xhr:zt};Ne.forEach(qt,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));var Mt={getAdapter:e=>{e=Ne.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t;o++)if(n=e[o],r=Ne.isString(n)?qt[n.toLowerCase()]:n)break;if(!r){if(!1===r)throw new Le(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(Ne.hasOwnProp(qt,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!Ne.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:qt};function Jt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ct(null,e)}function Vt(e){Jt(e),e.headers=At.from(e.headers),e.data=_t.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);const t=Mt.getAdapter(e.adapter||pt.adapter);return t(e).then((function(t){return Jt(e),t.data=_t.call(e,e.transformResponse,t),t.headers=At.from(t.headers),t}),(function(t){return Tt(t)||(Jt(e),t&&t.response&&(t.response.data=_t.call(e,e.transformResponse,t.response),t.response.headers=At.from(t.response.headers))),Promise.reject(t)}))}const Wt=e=>e instanceof At?e.toJSON():e;function Kt(e,t){t=t||{};const n={};function r(e,t,n){return Ne.isPlainObject(e)&&Ne.isPlainObject(t)?Ne.merge.call({caseless:n},e,t):Ne.isPlainObject(t)?Ne.merge({},t):Ne.isArray(t)?t.slice():t}function o(e,t,n){return Ne.isUndefined(t)?Ne.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!Ne.isUndefined(t))return r(void 0,t)}function i(e,t){return Ne.isUndefined(t)?Ne.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(Wt(e),Wt(t),!0)};return Ne.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);Ne.isUndefined(i)&&s!==a||(n[r]=i)})),n}const Gt="1.4.0",$t={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{$t[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Xt={};function Yt(e,t,n){if("object"!==typeof e)throw new Le("options must be an object",Le.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;while(o-- >0){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new Le("option "+s+" must be "+n,Le.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new Le("Unknown option "+s,Le.ERR_BAD_OPTION)}}$t.transitional=function(e,t,n){function r(e,t){return"[Axios v"+Gt+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,s)=>{if(!1===e)throw new Le(r(o," has been removed"+(t?" in "+t:"")),Le.ERR_DEPRECATED);return t&&!Xt[o]&&(Xt[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}};var Qt={assertOptions:Yt,validators:$t};const Zt=Qt.validators;class en{constructor(e){this.defaults=e,this.interceptors={request:new Ye,response:new Ye}}request(e,t){"string"===typeof e?(t=t||{},t.url=e):t=e||{},t=Kt(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;let s;void 0!==n&&Qt.assertOptions(n,{silentJSONParsing:Zt.transitional(Zt.boolean),forcedJSONParsing:Zt.transitional(Zt.boolean),clarifyTimeoutError:Zt.transitional(Zt.boolean)},!1),null!=r&&(Ne.isFunction(r)?t.paramsSerializer={serialize:r}:Qt.assertOptions(r,{encode:Zt.function,serialize:Zt.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=o&&Ne.merge(o.common,o[t.method]),s&&Ne.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=At.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,d=0;if(!a){const e=[Vt.bind(this),void 0];e.unshift.apply(e,i),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);while(d<u)l=l.then(e[d++],e[d++]);return l}u=i.length;let f=t;d=0;while(d<u){const e=i[d++],t=i[d++];try{f=e(f)}catch(p){t.call(this,p);break}}try{l=Vt.call(this,f)}catch(p){return Promise.reject(p)}d=0,u=c.length;while(d<u)l=l.then(c[d++],c[d++]);return l}getUri(e){e=Kt(this.defaults,e);const t=Ft(e.baseURL,e.url);return $e(t,e.params,e.paramsSerializer)}}Ne.forEach(["delete","get","head","options"],(function(e){en.prototype[e]=function(t,n){return this.request(Kt(n||{},{method:e,url:t,data:(n||{}).data}))}})),Ne.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Kt(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}en.prototype[e]=t(),en.prototype[e+"Form"]=t(!0)}));var tn=en;class nn{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;while(t-- >0)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new Ct(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;const t=new nn((function(t){e=t}));return{token:t,cancel:e}}}var rn=nn;function on(e){return function(t){return e.apply(null,t)}}function sn(e){return Ne.isObject(e)&&!0===e.isAxiosError}const an={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(an).forEach((([e,t])=>{an[t]=e}));var cn=an;function ln(e){const t=new tn(e),n=C(tn.prototype.request,t);return Ne.extend(n,tn.prototype,t,{allOwnKeys:!0}),Ne.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return ln(Kt(e,t))},n}const un=ln(pt);un.Axios=tn,un.CanceledError=Ct,un.CancelToken=rn,un.isCancel=Tt,un.VERSION=Gt,un.toFormData=Me,un.AxiosError=Le,un.Cancel=un.CanceledError,un.all=function(e){return Promise.all(e)},un.spread=on,un.isAxiosError=sn,un.mergeConfig=Kt,un.AxiosHeaders=At,un.formToJSON=e=>lt(Ne.isHTMLForm(e)?new FormData(e):e),un.HttpStatusCode=cn,un.default=un;var dn=un,fn=n(262),pn={setup(){let e=(0,fn.iH)(0),t=(0,fn.iH)(""),n=(0,fn.iH)(""),o=(0,fn.iH)(""),s=(0,fn.iH)(""),i=(0,fn.iH)("0"),a=(0,fn.iH)("0"),c=(0,fn.iH)("0"),l=(0,fn.iH)("0"),u=(0,fn.iH)(!0),d=(0,fn.iH)(null),f=(0,fn.iH)(59),p=null;function h(t){console.log(t),e.value=t}function m(){dn.post("https://znzz.tech/login/",{username:t.value,password:s.value}).then((e=>{1e3==e.data.code?(localStorage.setItem("token",e.data.skey),window.location.href="http://www.jczpin.com/#/userdash"):alert("用户未注册或者账号密码错误")}))}(0,r.bv)((()=>{})),(0,r.Jd)((()=>{clearInterval(p)})),(0,r.YP)(t,(e=>{console.log(e),i.value=""!==e?"0":"1"})),(0,r.YP)(s,(e=>{console.log(e),a.value=""!==e?"0":"1"})),(0,r.YP)(n,(e=>{""!==e?(c.value="0",11==e.length?(u.value=!1,console.log(u)):u.value=!0):(c.value="1",u.value=!0)})),(0,r.YP)(o,(e=>{console.log(e),l.value=""!==e?"0":"1"}));const y=()=>{dn.post("https://znzz.tech/login_mobile/",{mobile:n.value,type:"1"}).then((e=>{p=setInterval((()=>{0==f.value?(clearInterval(p),d.value.innerHTML="获取验证码"):(f.value--,d.value.innerHTML=f.value+"s后重新获取",u.value=!0)}),100)}))};return{indexflag:e,choose:h,username:t,password:s,login:m,usershow:i,passshow:a,phone:n,phoneshow:c,code:o,codeshow:l,disabled:u,codelogin:y,coder:d,timer:p}}},hn=n(744);const mn=(0,hn.Z)(pn,[["render",j],["__scopeId","data-v-28ebfd6c"]]);var yn=mn}}]);
//# sourceMappingURL=about.270e2383.js.map