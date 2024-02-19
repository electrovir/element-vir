var Xa=Object.defineProperty;var Za=(e,t,r)=>t in e?Xa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var xr=(e,t,r)=>(Za(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();const Ka=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function ie(e,t){return e?Ka.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function ii(e,t){return e&&t.every(r=>ie(e,r))}function z(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Ja(e){return z(e).map(t=>e[t])}function Qa(e,t){return e.includes(t)}function kt(e){return!!e}function es(e,{keepNewLines:t}={}){return(t?e.replace(/[\s\n]*\n+[\s\n]*/g,`
`):e.replace(/\n/g," ")).trim().replace(/\s{2,}/g," ")}const ts={capitalizeFirstLetter:!1};function rs(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function ns(e,t){return t.capitalizeFirstLetter?rs(e):e}function os(e,t=ts){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const i=o[1];return i?i.toUpperCase():""});return ns(n,t)}var Rn;(function(e){e.Upper="upper",e.Lower="lower"})(Rn||(Rn={}));var Bn;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Bn||(Bn={}));function ai(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>Be(r).trim()).join(`
`))}function is(e){return e?e.map(Be).filter(kt).join(`
`):""}function Be(e){return e?e instanceof Error?e.message:ie(e,"message")?String(e.message):String(e):""}function si(e){return e instanceof Error?e:new Error(Be(e))}function as(e,t){const r=si(e);return r.message=`${t}: ${r.message}`,r}function ss(e){try{const t=e.callback();return t instanceof Promise?t.catch(r=>e.catchCallback?e.catchCallback(r):e.fallbackValue):t}catch(t){return e.catchCallback?e.catchCallback(t):e.fallbackValue}}class ls extends Error{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AssertionError"})}}function Ft(e){return Array.isArray(e)?"array":typeof e}function B(e,t){return Ft(e)===t}function cs(e,t){if(!(B(e,"string")||B(e,"number")||B(e,"symbol")))throw new ls(t||`value is of type '${Ft(e)}' but expected a PropertyKey.`)}function Er(e){try{return cs(e),!0}catch{return!1}}function fe(e){return!!e&&typeof e=="object"}function Nn({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const Hn="Failed to compare objects using JSON.stringify";function In(e,t,r){return Nn({source:e,errorHandler(n){if(r)return"";throw n}})===Nn({source:t,errorHandler(n){if(r)return"";throw n}})}function me(e,t,r={}){try{return e===t?!0:fe(e)&&fe(t)?In(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>me(e[o],t[o])):!1:In(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=si(n);throw o.message.startsWith(Hn)||(o.message=`${Hn}: ${o.message}`),o}}function us(e){return z(e).filter(t=>isNaN(Number(t)))}function ds(e){return us(e).map(r=>e[r])}function fs(e,t){return ds(t).includes(e)}function hs(e,t){return z(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function ps(e,t){return hs(e,r=>!t.includes(r))}function ms(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function he(e,t){let r=!1;const n=z(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(z(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function Ur(e,t){try{return li(e,t),!0}catch{return!1}}function li(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function ln(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${ln.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Fr(e){const t=ln();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function gs(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}const bs=gs();function ci(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return bs.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}const ws="px";function ui(e){return ys({value:e,suffix:ws})}function ys({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}const Sr="://";function vs(...e){const t=e.join("/"),[r,n=""]=t.includes(Sr)?t.split(Sr):["",t];let o=!1,i=!1;const a=n.replace(/\/{2,}/g,"/").split("/").map(s=>((s.includes("?")||o)&&(o=!0),s)).reduce((s,l,c,f)=>{if(i)return s;const u=f[c+1];let d=l;const h=!l.includes("?")&&(u==null?void 0:u.startsWith("?"));if(u!=null&&u.startsWith("?")||h){i=!0;let g=!1;const w=f.slice(h?c+2:c+1).reduce((k,$)=>($.includes("#")&&(g=!0),g?k.concat($):[k,$].join("&")),"");d=[l,u,w].join("")}return s.concat(d)},[]);return[r,r?Sr:"",a.join("/")].join("")}function $s(e,t){return ie(e,"entryType")&&e.entryType===t}var O;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(O||(O={}));function je(e,t){return e.controlType===t}var S;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(S||(S={}));const di=Symbol("any-type"),ks={[S.Checkbox]:!1,[S.Color]:"",[S.Dropdown]:"",[S.Hidden]:di,[S.Number]:0,[S.Text]:""};function xs(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const i=ks[o.controlType];i!==di&&(typeof i!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof i} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function cn(e,t){const r=Wt(e.title);return e.parent?[...cn(e.parent,!1),Wt(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function Wt(e){return es(e).toLowerCase().replaceAll(/\s/g,"-")}function Es({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function Se(e){const t={...e,entryType:O.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:O.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(kt)};r.add(n.title),t.elementExamples[Wt(o.title)]=o}}),t}var oe;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(oe||(oe={}));async function Wr(e=1){const t=ln();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}async function Ss(e){return Cs(e,1)}async function Cs(e,t){return new Promise(r=>{new IntersectionObserver((o,i)=>{li(o,1),i.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt=globalThis,un=jt.ShadowRoot&&(jt.ShadyCSS===void 0||jt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dn=Symbol(),On=new WeakMap;let fi=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==dn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(un&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=On.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&On.set(r,t))}return t}toString(){return this.cssText}};const I=e=>new fi(typeof e=="string"?e:e+"",void 0,dn),zt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new fi(r,e,dn)},Ts=(e,t)=>{if(un)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),o=jt.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)}},jn=un?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return I(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ms,defineProperty:_s,getOwnPropertyDescriptor:Ls,getOwnPropertyNames:Ps,getOwnPropertySymbols:As,getPrototypeOf:Rs}=Object,be=globalThis,zn=be.trustedTypes,Bs=zn?zn.emptyScript:"",Cr=be.reactiveElementPolyfillSupport,at=(e,t)=>e,Yt={toAttribute(e,t){switch(t){case Boolean:e=e?Bs:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},fn=(e,t)=>!Ms(e,t),Vn={attribute:!0,type:String,converter:Yt,reflect:!1,hasChanged:fn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),be.litPropertyMetadata??(be.litPropertyMetadata=new WeakMap);let Fe=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Vn){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,r);o!==void 0&&_s(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){const{get:o,set:i}=Ls(this.prototype,t)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return o==null?void 0:o.call(this)},set(a){const s=o==null?void 0:o.call(this);i.call(this,a),this.requestUpdate(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Vn}static _$Ei(){if(this.hasOwnProperty(at("elementProperties")))return;const t=Rs(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(at("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(at("properties"))){const r=this.properties,n=[...Ps(r),...As(r)];for(const o of n)this.createProperty(o,r[o])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,o]of r)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const o=this._$Eu(r,n);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(jn(o))}else t!==void 0&&r.push(jn(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$EO)==null||r.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ts(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EC(t,r){var i;const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){const a=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:Yt).toAttribute(r,n.type);this._$Em=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(t,r){var i;const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const a=n.getPropertyOptions(o),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)==null?void 0:i.fromAttribute)!==void 0?a.converter:Yt;this._$Em=o,this[o]=s.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(t,r,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??fn)(this[t],r))return;this.P(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,r,n){this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,a]of o)a.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],a)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(r)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$EO)==null||r.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(t){}firstUpdated(t){}};Fe.elementStyles=[],Fe.shadowRootOptions={mode:"open"},Fe[at("elementProperties")]=new Map,Fe[at("finalized")]=new Map,Cr==null||Cr({ReactiveElement:Fe}),(be.reactiveElementVersions??(be.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st=globalThis,qt=st.trustedTypes,Dn=qt?qt.createPolicy("lit-html",{createHTML:e=>e}):void 0,hn="$lit$",de=`lit$${(Math.random()+"").slice(9)}$`,pn="?"+de,Ns=`<${pn}>`,Ae=document,ut=()=>Ae.createComment(""),dt=e=>e===null||typeof e!="object"&&typeof e!="function",hi=Array.isArray,pi=e=>hi(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Tr=`[ 	
\f\r]`,et=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Un=/-->/g,Fn=/>/g,Ce=RegExp(`>|${Tr}(?:([^\\s"'>=/]+)(${Tr}*=${Tr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Wn=/'/g,Yn=/"/g,mi=/^(?:script|style|textarea|title)$/i,Hs=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Is=Hs(1),re=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),qn=new WeakMap,Le=Ae.createTreeWalker(Ae,129);function gi(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Dn!==void 0?Dn.createHTML(t):t}const bi=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":"",a=et;for(let s=0;s<r;s++){const l=e[s];let c,f,u=-1,d=0;for(;d<l.length&&(a.lastIndex=d,f=a.exec(l),f!==null);)d=a.lastIndex,a===et?f[1]==="!--"?a=Un:f[1]!==void 0?a=Fn:f[2]!==void 0?(mi.test(f[2])&&(o=RegExp("</"+f[2],"g")),a=Ce):f[3]!==void 0&&(a=Ce):a===Ce?f[0]===">"?(a=o??et,u=-1):f[1]===void 0?u=-2:(u=a.lastIndex-f[2].length,c=f[1],a=f[3]===void 0?Ce:f[3]==='"'?Yn:Wn):a===Yn||a===Wn?a=Ce:a===Un||a===Fn?a=et:(a=Ce,o=void 0);const h=a===Ce&&e[s+1].startsWith("/>")?" ":"";i+=a===et?l+Ns:u>=0?(n.push(c),l.slice(0,u)+hn+l.slice(u)+de+h):l+de+(u===-2?s:h)}return[gi(e,i+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class ft{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,a=0;const s=t.length-1,l=this.parts,[c,f]=bi(t,r);if(this.el=ft.createElement(c,n),Le.currentNode=this.el.content,r===2){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(o=Le.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes())for(const u of o.getAttributeNames())if(u.endsWith(hn)){const d=f[a++],h=o.getAttribute(u).split(de),g=/([.?@])?(.*)/.exec(d);l.push({type:1,index:i,name:g[2],strings:h,ctor:g[1]==="."?yi:g[1]==="?"?vi:g[1]==="@"?$i:xt}),o.removeAttribute(u)}else u.startsWith(de)&&(l.push({type:6,index:i}),o.removeAttribute(u));if(mi.test(o.tagName)){const u=o.textContent.split(de),d=u.length-1;if(d>0){o.textContent=qt?qt.emptyScript:"";for(let h=0;h<d;h++)o.append(u[h],ut()),Le.nextNode(),l.push({type:2,index:++i});o.append(u[d],ut())}}}else if(o.nodeType===8)if(o.data===pn)l.push({type:2,index:i});else{let u=-1;for(;(u=o.data.indexOf(de,u+1))!==-1;)l.push({type:7,index:i}),u+=de.length-1}i++}}static createElement(t,r){const n=Ae.createElement("template");return n.innerHTML=t,n}}function Re(e,t,r=e,n){var a,s;if(t===re)return t;let o=n!==void 0?(a=r._$Co)==null?void 0:a[n]:r._$Cl;const i=dt(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((s=o==null?void 0:o._$AO)==null||s.call(o,!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=o:r._$Cl=o),o!==void 0&&(t=Re(e,o._$AS(e,t.values),o,n)),t}class wi{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??Ae).importNode(r,!0);Le.currentNode=o;let i=Le.nextNode(),a=0,s=0,l=n[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new Xe(i,i.nextSibling,this,t):l.type===1?c=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(c=new ki(i,this,t)),this._$AV.push(c),l=n[++s]}a!==(l==null?void 0:l.index)&&(i=Le.nextNode(),a++)}return Le.currentNode=Ae,o}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class Xe{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,n,o){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Re(this,t,r),dt(t)?t===A||t==null||t===""?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==re&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):pi(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==A&&dt(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ae.createTextNode(t)),this._$AH=t}$(t){var i;const{values:r,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=ft.createElement(gi(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(r);else{const a=new wi(o,this),s=a.u(this.options);a.p(r),this.T(s),this._$AH=a}}_$AC(t){let r=qn.get(t.strings);return r===void 0&&qn.set(t.strings,r=new ft(t)),r}k(t){hi(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new Xe(this.S(ut()),this.S(ut()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class xt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,o,i){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=A}_$AI(t,r=this,n,o){const i=this.strings;let a=!1;if(i===void 0)t=Re(this,t,r,0),a=!dt(t)||t!==this._$AH&&t!==re,a&&(this._$AH=t);else{const s=t;let l,c;for(t=i[0],l=0;l<i.length-1;l++)c=Re(this,s[n+l],r,l),c===re&&(c=this._$AH[l]),a||(a=!dt(c)||c!==this._$AH[l]),c===A?t=A:t!==A&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}a&&!o&&this.j(t)}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class yi extends xt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===A?void 0:t}}class vi extends xt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A)}}class $i extends xt{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){if((t=Re(this,t,r,0)??A)===re)return;const n=this._$AH,o=t===A&&n!==A||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==A&&(n===A||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class ki{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Re(this,t)}}const Os={P:hn,A:de,C:pn,M:1,L:bi,R:wi,D:pi,V:Re,I:Xe,H:xt,N:vi,U:$i,B:yi,F:ki},Mr=st.litHtmlPolyfillSupport;Mr==null||Mr(ft,Xe),(st.litHtmlVersions??(st.litHtmlVersions=[])).push("3.1.2");const js=(e,t,r)=>{const n=(r==null?void 0:r.renderBefore)??t;let o=n._$litPart$;if(o===void 0){const i=(r==null?void 0:r.renderBefore)??null;n._$litPart$=o=new Xe(t.insertBefore(ut(),i),i,void 0,r??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let lt=class extends Fe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=js(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return re}};var oi;lt._$litElement$=!0,lt.finalized=!0,(oi=globalThis.litElementHydrateSupport)==null||oi.call(globalThis,{LitElement:lt});const _r=globalThis.litElementPolyfillSupport;_r==null||_r({LitElement:lt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:zs}=Os,Gn=()=>document.createComment(""),tt=(e,t,r)=>{var i;const n=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(r===void 0){const a=n.insertBefore(Gn(),o),s=n.insertBefore(Gn(),o);r=new zs(a,s,e,e.options)}else{const a=r._$AB.nextSibling,s=r._$AM,l=s!==e;if(l){let c;(i=r._$AQ)==null||i.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==s._$AU&&r._$AP(c)}if(a!==o||l){let c=r._$AA;for(;c!==a;){const f=c.nextSibling;n.insertBefore(c,o),c=f}}}return r},Te=(e,t,r=e)=>(e._$AI(t,r),e),Vs={},Ds=(e,t=Vs)=>e._$AH=t,Us=e=>e._$AH,Lr=e=>{var n;(n=e._$AP)==null||n.call(e,!1,!0);let t=e._$AA;const r=e._$AB.nextSibling;for(;t!==r;){const o=t.nextSibling;t.remove(),t=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ze=e=>(...t)=>({_$litDirective$:e,values:t});class Ne{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fs={attribute:!0,type:String,converter:Yt,reflect:!1,hasChanged:fn},Ws=(e=Fs,t,r)=>{const{kind:n,metadata:o}=r;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(r.name,e),n==="accessor"){const{name:a}=r;return{set(s){const l=t.get.call(this);t.set.call(this,s),this.requestUpdate(a,l,e)},init(s){return s!==void 0&&this.P(a,void 0,e),s}}}if(n==="setter"){const{name:a}=r;return function(s){const l=this[a];t.call(this,s),this.requestUpdate(a,l,e)}}throw Error("Unsupported decorator location: "+n)};function Ys(e){return(t,r)=>typeof r=="object"?Ws(e,t,r):((n,o,i)=>{const a=o.hasOwnProperty(i);return o.constructor.createProperty(i,a?{...n,wrapped:!0}:n),a?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,r)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xi=Ze(class extends Ne{constructor(e){var t;if(super(e),e.type!==lr.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,o;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((n=this.nt)!=null&&n.has(i))&&this.st.add(i);return this.render(t)}const r=e.element.classList;for(const i of this.st)i in t||(r.remove(i),this.st.delete(i));for(const i in t){const a=!!t[i];a===this.st.has(i)||(o=this.nt)!=null&&o.has(i)||(a?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return re}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Yr extends Ne{constructor(t){if(super(t),this.it=A,t.type!==lr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===A||t==null)return this._t=void 0,this.it=t;if(t===re)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Yr.directiveName="unsafeHTML",Yr.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Xn extends Yr{}Xn.directiveName="unsafeSVG",Xn.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function qs(e,t,r){return e?t(e):r==null?void 0:r(e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zn=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},Gs=Ze(class extends Ne{constructor(e){if(super(e),e.type!==lr.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],i=[];let a=0;for(const s of e)o[a]=n?n(s,a):a,i[a]=r(s,a),a++;return{values:i,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){const o=Us(e),{values:i,keys:a}=this.dt(t,r,n);if(!Array.isArray(o))return this.ut=a,i;const s=this.ut??(this.ut=[]),l=[];let c,f,u=0,d=o.length-1,h=0,g=i.length-1;for(;u<=d&&h<=g;)if(o[u]===null)u++;else if(o[d]===null)d--;else if(s[u]===a[h])l[h]=Te(o[u],i[h]),u++,h++;else if(s[d]===a[g])l[g]=Te(o[d],i[g]),d--,g--;else if(s[u]===a[g])l[g]=Te(o[u],i[g]),tt(e,l[g+1],o[u]),u++,g--;else if(s[d]===a[h])l[h]=Te(o[d],i[h]),tt(e,o[u],o[d]),d--,h++;else if(c===void 0&&(c=Zn(a,h,g),f=Zn(s,u,d)),c.has(s[u]))if(c.has(s[d])){const w=f.get(a[h]),k=w!==void 0?o[w]:null;if(k===null){const $=tt(e,o[u]);Te($,i[h]),l[h]=$}else l[h]=Te(k,i[h]),tt(e,o[u],k),o[w]=null;h++}else Lr(o[d]),d--;else Lr(o[u]),u++;for(;h<=g;){const w=tt(e,l[g+1]);Te(w,i[h]),l[h++]=w}for(;u<=d;){const w=o[u++];w!==null&&Lr(w)}return this.ut=a,Ds(e,l),re}}),Xs=Gs;class Ei extends lt{}var Ye;(function(e){e.Upper="upper",e.Lower="lower"})(Ye||(Ye={}));function Zs(e){return e.toLowerCase()!==e.toUpperCase()}function Kn(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!Zs(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===Ye.Upper&&o!==o.toUpperCase())return!1;if(t===Ye.Lower&&o!==o.toLowerCase())return!1}return!0}function Ks(e){return e.split("").reduce((r,n,o,i)=>{const a=o>0&&i[o-1]||"",s=o<i.length-1&&i[o+1]||"",l=Kn(a,Ye.Lower,{blockNoCaseCharacters:!0})||Kn(s,Ye.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}var Jn;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Jn||(Jn={}));function Js(e){return Array.isArray(e)?"array":typeof e}function Qs(e,t){return Js(e)===t}function el(e){return!!e&&typeof e=="object"}function Qn(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function tl(e,t){let r=!1;const n=Qn(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(Qn(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function He(e){if(el(e))return tl(e,(r,n)=>{if(!Qs(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Ks(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const i=n,a=r.startsWith("--")?I(r):r.startsWith("-")?zt`-${I(r)}`:zt`--${I(r)}`;return{name:a,value:zt`var(${a}, ${I(i)})`,default:String(i)}});throw new Error(`Invalid setup input for '${He.name}' function.`)}function rl({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}function nl(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(s=>!!s.index).length;if(n||o)return[...e];const i=e.map(s=>[s]);return i.length||(i[0]=[]),r.forEach(s=>{s>=0&&s<e.length&&(i[s]=[])}),t.forEach(s=>{const l=i[s.index];l&&l.splice(0,0,...s.values)}),i.flat()}function Vt(e){return ie(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function mn(e){return ie(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function Si(e){return e.map(t=>Vt(t)?t.definition:t).filter(t=>mn(t))}const Ci=new WeakMap;function ol(e,t){var o;const r=Si(t);return(o=Ti(Ci,[e,...r]).value)==null?void 0:o.template}function il(e,t,r){const n=Si(t);return _i(Ci,[e,...n],r)}function Ti(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=Mi(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Ti(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function Mi(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function _i(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:i,reason:a}=Mi(e,t,n);if(!i)return{result:!1,reason:a};const s=o??{nested:void 0,template:void 0};if(o||e.set(i,s),n===t.length-1)return s.template=r,{result:!0,reason:"set value at end of keys array"};const l=s.nested??new WeakMap;return s.nested||(s.nested=l),_i(l,t,r,n+1)}const al=new WeakMap;function Li(e,t,r){const n=ol(e,t),o=n??r();if(!n){const s=il(e,t,o);if(s.result)al.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const i=o.valuesTransform(t),a=nl(t,i.valueInsertions,i.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function Pi(e,t,r,n){const o=[],i=[],a=[],s=[];return e.forEach((c,f)=>{const u=o.length-1,d=o[u],h=f-1,g=t[h];n&&n(c);let w,k=[];if(typeof d=="string"&&(w=r(d,c,g),w)){o[u]=d+w.replacement,a.push(h);const T=w.getExtraValues;k=T?T(g):[],k.length&&T?(o[u]+=" ",k.forEach((R,P)=>{P&&o.push(" ")}),s.push(R=>{const P=R[h],V=T(P);return{index:h,values:V}}),o.push(c)):o[u]+=c}w||o.push(c);const $=e.raw[f];w?(i[u]=i[u]+w.replacement+$,k.length&&k.forEach(()=>{i.push("")})):i.push($)}),{templateStrings:Object.assign([],o,{raw:i}),valuesTransform(c){const f=s.map(u=>u(c)).flat();return{valueIndexDeletions:a,valueInsertions:f}}}}function sl(...[e,t,r]){if(mn(r))return{replacement:r.tagName,getExtraValues:void 0}}function ll(e,t){return Pi(e,t,sl)}function m(e,...t){const r=Li(e,t,()=>ll(e,t));return zt(r.strings,...r.values)}const cl={ignoreUnsetInputs:!0,allowPolymorphicState:!1};function Ai(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof Ei?!0:Ai(r)}function Ri(e,t){const r=e.instanceState;z(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&z(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),ul(e)}function ul(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function eo(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class dl extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:""})}}function gn(){return e=>{var t;return t=class extends dl{constructor(r){super(e,r),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:e})}},Object.defineProperty(t,"type",{enumerable:!0,configurable:!0,writable:!0,value:e}),t}}function pe(){return gn()}function fl(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new Error(`Expected event key of type string but got type "${typeof r}" for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const o=gn()([e,n].join("-"));return r[n]=o,r},{}):{}}const hl="_elementVirStateSetup";function pl(e){return fe(e)?hl in e:!1}function ml(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return Ft(e)===Ft(t)&&r}const Bi="__vir__shape__definition__key__do__not__use__in__actual__objects";function Ni(e){return ie(e,Bi)}const Hi=Symbol("and"),Ii=Symbol("instance"),Oi=Symbol("enum"),ji=Symbol("exact"),bn=Symbol("indexed-keys"),zi=Symbol("or"),wn=Symbol("unknown"),gl=[Hi,Oi,ji,bn,Ii,zi,wn],Vi="__vir__shape__specifier__key__do__not__use__in__actual__objects";function bl(...e){return Di(e,bn)}function wl(e){return Di([e],wn)}function cr(e){return Ie(e,Hi)}function ur(e){return Ie(e,Ii)}function dr(e){return Ie(e,Oi)}function fr(e){return Ie(e,ji)}function hr(e){return Ie(e,bn)}function Et(e){return Ie(e,zi)}function pr(e){return Ie(e,wn)}function Ie(e,t){const r=St(e);return!!r&&r.specifierType===t}function Di(e,t){return{[Vi]:!0,specifierType:t,parts:e}}function Pe(e,t,r,n){const o=St(t);if(o){if(ur(o))return e instanceof o.parts[0];if(cr(o))return o.parts.every(i=>Pe(e,i));if(Et(o))return o.parts.some(i=>Pe(e,i));if(fr(o))return fe(e)?Pe(e,o.parts[0]):e===o.parts[0];if(dr(o))return Object.values(o.parts[0]).some(i=>i===e);if(hr(o))return fe(e)?yl(e,o,!!r)&&Ja(e).every(i=>Pe(i,o.parts[0].values)):!1;if(pr(o))return!0}return n?t===e:ml(e,t)}function yl(e,t,r){const n=t.parts[0].required,o=t.parts[0].keys;if(r)if(n){const i=yn(t);return B(i,"boolean")?i:i.every(a=>z(e).some(s=>Pe(s,a,!1,!0)))}else return!0;else return z(e).every(i=>Pe(i,o))}function yn(e){const t=e.parts[0].keys,r=St(t);if(Er(t))return[t];if(r){if(ur(r))return!1;if(cr(r))return!1;if(Et(r)){const n=r.parts.map(i=>yn(bl({...e.parts[0],keys:i})));let o;return n.forEach(i=>{B(i,"boolean")&&(i&&o==null?o=!0:o=!1)}),B(o,"boolean")?o:n.flat().filter(Er)}else if(fr(r)){const n=r.parts.filter(Er);return n.length!==r.parts.length?!1:n}else{if(dr(r))return Object.values(r.parts[0]);if(hr(r))return!1;if(pr(r))return!0}}return!1}function St(e){if(fe(e)&&ie(e,Vi)){if(!ie(e,"parts")||!B(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!ie(e,"specifierType")||!Qa(gl,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}class to extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DefaultValueConstructionError"})}}function qr(e,t=!1){return nt(e)}function nt(e){const t=St(e);if(t)if(ur(t)){const r=t.parts[0];try{return new r}catch(n){throw new to(`Failed to create default value for classShape for class '${r.name}': ${Be(n)}`)}}else{if(Et(t)||fr(t))return nt(t.parts[0]);if(cr(t))return t.parts.reduce((r,n)=>Object.assign(r,nt(n)),{});if(dr(t))return Object.values(t.parts[0])[0];if(hr(t)){const r=yn(t);return!t.parts[0].required||B(r,"boolean")?{}:Object.fromEntries(r.map(n=>[n,nt(t.parts[0].values)]))}else{if(pr(t))return t.parts[0]??{};throw new to(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}}return Ni(e)?qr(e.shape):e instanceof RegExp?e:B(e,"array")?e.map(nt):fe(e)?he(e,(r,n)=>qr(n)):e}function vl(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,get defaultValue(){return qr(e)},[Bi]:!0}}class G extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ShapeMismatchError"})}}function $l(e,t,r={}){try{return kl(e,t,r),!0}catch{return!1}}function kl(e,t,r={}){ce({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys}})}function Gr(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function ce({subject:e,shape:t,keys:r,options:n}){if(pr(t))return!0;if(Ni(t))return ce({subject:e,shape:t.shape,keys:r,options:n});const o=Gr(r);if(St(e))throw new G(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!Pe(e,t,!n.ignoreExtraKeys))throw new G(`Subject does not match shape definition at key ${o}`);if(B(t,"function"))return B(e,"function");if(ur(t))return e instanceof t.parts[0];if(fe(e)){const a=e,s=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(f=>[f,!1])),l=[];let c=!1;if(Et(t)){const f=[];c=t.parts.some(u=>{try{const d=ce({subject:e,shape:u,keys:r,options:{...n}});return Object.assign(s,d),!0}catch(d){if(d instanceof G)return f.push(d),!1;throw d}}),!c&&Ur(f,1)&&l.push(f[0])}else if(cr(t))c=t.parts.every(f=>{try{const u=ce({subject:e,shape:f,keys:r,options:{...n,ignoreExtraKeys:!0}});return Object.assign(s,u),!0}catch(u){if(u instanceof G)return l.push(u),!1;throw u}});else if(fr(t)){const f=ce({subject:e,shape:t.parts[0],keys:r,options:{...n,exactValues:!0}});Object.assign(s,f),c=!0}else{if(dr(t))throw new G(`Cannot compare an enum specifier to an object at ${o}`);if(B(t,"array")&&B(a,"array"))c=a.every((f,u)=>{const d=t.some(h=>{try{return ce({subject:f,shape:h,keys:[...r,u],options:n}),!0}catch(g){if(g instanceof G)return l.push(g),!1;throw g}});return s[u]=d,d});else if(hr(t)){const f=he(e,(u,d)=>(n.ignoreExtraKeys||ce({shape:t.parts[0].keys,subject:u,keys:[...r,u],options:n}),ce({shape:t.parts[0].values,subject:d,keys:[...r,u],options:n}),!0));Object.assign(s,f),c=!0}else{const f=xl({keys:r,options:n,shape:t,subject:e});Object.assign(s,f),c=!0}}if(l.length)throw new G(is(l));if(!c){const u=`Failed on key(s): ${Object.keys(s).filter(d=>!s[d]).map(d=>Gr([...r,d])).join(",")}`;throw new G(u)}return n.ignoreExtraKeys||Object.entries(s).forEach(([f,u])=>{if(!u)throw new G(`subject as extra key '${f}' in ${o}.`)}),s}else if(n.exactValues)return e===t;return!0}function xl({keys:e,options:t,shape:r,subject:n}){const o=Gr(e),i={};if(fe(r)){const a=new Set(z(n)),s=new Set(z(r));t.ignoreExtraKeys||a.forEach(l=>{if(!s.has(l))throw new G(`Subject has extra key '${String(l)}' in ${o}`)}),s.forEach(l=>{var d;const c=r[l],f=Et(c)?c.parts.includes(void 0):!1,u=((d=c==null?void 0:c.includes)==null?void 0:d.call(c,void 0))||c===void 0;if(!a.has(l)&&!f&&!u)throw new G(`Subject missing key '${String(l)}' in ${o}`)}),a.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!s.has(l))return;const f=r[l];ce({subject:c,shape:f,keys:[...e,l],options:t}),i[l]=!0})}else throw new G(`shape definition at ${o} was not an object.`);return i}const El=vl({addListener(){return()=>!1},removeListener(){return!1},destroy(){},value:wl()});function Pr(e){return $l(e,El,{allowExtraKeys:!0})}function Ui(e,t){t in e||Ys()(e,t)}function Sl(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function ro(e,t){const r=e;function n(a){t?Sl(a,e,e.tagName):Ui(e,a)}function o(a,s){return n(s),r[s]}return new Proxy({},{get:o,set(a,s,l){const c=pl(l)?l._elementVirStateSetup():l;n(s);const f=r[s];function u(g){a[s]=g,r[s]=g}const d=e.observablePropertyListenerMap[s];if(f!==c&&Pr(f)&&(d!=null&&d.length)&&f.removeListener(d),Pr(c))if(d)c.addListener(d);else{let g=function(){e.requestUpdate()};var h=g;e.observablePropertyListenerMap[s]=g,c.addListener(g)}else Pr(f)&&(e.observablePropertyListenerMap[s]=void 0);return u(c),!0},ownKeys(a){return Reflect.ownKeys(a)},getOwnPropertyDescriptor(a,s){if(s in a)return{get value(){return o(a,s)},configurable:!0,enumerable:!0}},has(a,s){return Reflect.has(a,s)}})}function Cl(e){return e?he(e,t=>t):{}}function Tl({hostClassNames:e,cssVars:t}){return{hostClasses:he(e,(r,n)=>({name:I(n),selector:I(`:host(.${n})`)})),cssVars:t}}function Ml({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&z(t).forEach(i=>{const a=t[i],s=r[i];typeof a=="function"&&(a({state:n,inputs:o})?e.classList.add(s):e.classList.remove(s))})}function _l({element:e,eventsMap:t,cssVars:r,slotNamesMap:n}){function o(a){z(a).forEach(s=>{const l=a[s];e.instanceState[s]=l})}return{cssVars:r,slotNames:n,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:o}}function Ll(e){return e?e.reduce((r,n)=>(r[n]=n,r),{}):{}}var Pl=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function mr(e){var t;const r=e;if(!B(r,"object"))throw new Error("Cannot define element with non-object init: ${init}");if(!B(r.tagName,"string"))throw new Error("Missing valid tagName (expected a string).");if(!r.renderCallback||typeof r.renderCallback=="string")throw new Error(`Failed to define element '${r.tagName}': renderCallback is not a function`);const n={...cl,...r.options},o=fl(r.tagName,r.events),i=Cl(r.hostClasses);r.hostClasses&&eo(r.tagName,r.hostClasses),r.cssVars&&eo(r.tagName,r.cssVars);const a=r.cssVars?He(r.cssVars):{},s=Ll(r.slotNames),l=typeof r.styles=="function"?r.styles(Tl({hostClassNames:i,cssVars:a})):r.styles||m``,c=r.renderCallback;function f(...[d]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:u,inputs:d}}const u=(t=class extends Ei{createRenderParams(){return _l({element:this,eventsMap:o,cssVars:a,slotNamesMap:s})}get instanceType(){throw new Error(`"instanceType" was called on ${r.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${r.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${r.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{Ai(this)&&!this._haveInputsBeenSet&&!n.ignoreUnsetInputs&&console.warn(this,`${r.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${mr.name}' to define ${r.tagName}.`),this._hasRendered=!0;const d=this.createRenderParams();if(!this._initCalled&&r.initCallback&&(this._initCalled=!0,r.initCallback(d)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const h=c(d);if(h instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Ml({host:d.host,hostClassesInit:r.hostClasses,hostClassNames:i,state:d.state,inputs:d.inputs}),this._lastRenderedProps={inputs:{...d.inputs},state:{...d.state}},h}catch(d){const h=as(d,`Failed to render ${r.tagName}`);return console.error(h),this._lastRenderError=h,Be(h)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&r.initCallback){this._initCalled=!0;const d=this.createRenderParams();if(r.initCallback(d)instanceof Promise)throw new Error(`initCallback in '${r.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),r.cleanupCallback){const d=this.createRenderParams();if(r.cleanupCallback(d)instanceof Promise)throw new Error(`cleanupCallback in '${r.tagName}' cannot be asynchronous`)}this._initCalled=!1}assignInputs(d){Ri(this,d)}constructor(){super(),Object.defineProperty(this,"_lastRenderError",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_internalRenderCount",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_initCalled",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_hasRendered",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_lastRenderedProps",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_haveInputsBeenSet",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"definition",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"observablePropertyListenerMap",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"instanceInputs",{enumerable:!0,configurable:!0,writable:!0,value:ro(this,!1)}),Object.defineProperty(this,"instanceState",{enumerable:!0,configurable:!0,writable:!0,value:ro(this,!n.allowPolymorphicState)});const d=r.stateInitStatic||{};z(d).forEach(h=>{Ui(this,h),this.instanceState[h]=d[h]}),this.definition=u}},Pl(t,"anonymousClass"),Object.defineProperty(t,"elementOptions",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(t,"tagName",{enumerable:!0,configurable:!0,writable:!0,value:r.tagName}),Object.defineProperty(t,"styles",{enumerable:!0,configurable:!0,writable:!0,value:l}),Object.defineProperty(t,"assign",{enumerable:!0,configurable:!0,writable:!0,value:f}),Object.defineProperty(t,"isStrictInstance",{enumerable:!0,configurable:!0,writable:!0,value:()=>!1}),Object.defineProperty(t,"events",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(t,"renderCallback",{enumerable:!0,configurable:!0,writable:!0,value:c}),Object.defineProperty(t,"hostClasses",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(t,"cssVars",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(t,"init",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(t,"slotNames",{enumerable:!0,configurable:!0,writable:!0,value:s}),Object.defineProperty(t,"stateInitStatic",{enumerable:!0,configurable:!0,writable:!0,value:r.stateInitStatic}),t);return Object.defineProperties(u,{name:{value:os(r.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:d=>d instanceof u,writable:!1}}),window.customElements.get(r.tagName)?console.warn(`Tried to define custom element '${r.tagName}' but it is already defined.`):window.customElements.define(r.tagName,u),u}function Fi(){return e=>{const t=e;if(!B(t,"object"))throw new Error("Cannot define element with non-object init: ${init}");return mr({...t,options:{ignoreUnsetInputs:!1,...t.options}})}}function Wi(e,t){return ht(e,t),e.element}function Al(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function ht(e,t){const r=Al(e),n=r?`: in ${r}`:"";if(e.type!==lr.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function L(e,t){return Rl(e,t)}const Rl=Ze(class extends Ne{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastListenerMetaData",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=Wi(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),re}}),no="onDomCreated",oo=Ze(class extends Ne{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),ht(e,no)}update(e,[t]){ht(e,no);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),Ar="onResize",Yi=Ze(class extends Ne{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"resizeObserver",{enumerable:!0,configurable:!0,writable:!0,value:new ResizeObserver(t=>this.fireCallback(t))}),Object.defineProperty(this,"callback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),ht(e,Ar)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${Ar} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){ht(e,Ar),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function K(e,t,r){return qs(e,()=>t,()=>r)}function qi(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),Fi()(r(n))),defineElementNoInputs:n=>(t(n),mr(r(n)))}}function Bl(e,t){return t?io(e,t):io(void 0,e)}const io=Ze(class extends Ne{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=Wi(e,"assign")}render(e,t){return Ri(this.element,t),re}});function Nl(...[e,t,r]){const n=Vt(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),i=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),a=o||i,s=mn(n);if(a&&!s)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);if(!a||!s)return;if(o&&!n.elementOptions.ignoreUnsetInputs&&!Vt(r))throw new Error(`Missing inputs for '${n.tagName}'`);return{replacement:n.tagName,getExtraValues(c){const f=Vt(c)?c.inputs:void 0;return[o&&f?Bl(f):void 0].filter(kt)}}}function Hl(e){}function Il(e){return Pi(e.strings,e.values,Nl,Hl)}function p(e,...t){const r=Is(e,...t),n=Li(e,t,()=>Il(r));return{...r,strings:n.strings,values:n.values}}const Ol={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},jl=Object.keys(Ol),zl=["a","animate","animateMotion","animateTransform","audio","canvas","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","iframe","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","unknown","use","video","view"];[...jl,...zl];function ot(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}const Vl={[O.ElementExample]:()=>[],[O.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...xs(e.controls,e.title)].filter(kt),[O.Root]:()=>[]},Gt="_isBookTreeNode",Gi=new Map;function Dl(e){return Gi.get(e)}function Ul(e,t){ms(Gi,e,()=>t)}function We(e,t){return!!(Xi(e)&&e.entry.entryType===t)}function Xi(e){return!!(ii(e,[Gt,"entry"])&&e[Gt])}function Fl(){return{[Gt]:!0,entry:{entryType:O.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function Wl({entries:e,debug:t}){const r=Dl(e);if(r)return r;const n=Fl();e.forEach(a=>vn({tree:n,newEntry:a,debug:t,manuallyAdded:!0}));const o=Zi(n),i={tree:n,flattenedNodes:o};return Ul(e,i),t&&console.info("element-book tree:",n),i}function Yl(e,t,r){if(!t.parent)return e;const n=Xr(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),vn({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Xr(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${cn(t,!1)}`);return o}function vn({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=Vl[t.entryType](t);t.errors.push(...o);const i=Yl(e,t,r),a=Wt(t.title),s=i.children[a];if(s){if(n){if(s.manuallyAdded){s.entry.errors.push(new Error(`Cannot create duplicate '${a}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}s.manuallyAdded=!0}return}const l={[Gt]:!0,children:{},urlBreadcrumb:a,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,a],entry:t,manuallyAdded:n};i.children[a]=l,$s(t,O.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>vn({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function Xr(e,t){const r=Xi(e)?e.fullUrlBreadcrumbs.slice(0,-1):cn(e,!1);return r.length?r.reduce((o,i)=>{if(o)return o.children[i]},t):void 0}function Zi(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Zi(o));return[e,...r].flat()}function $n(e,t){return kn(e,["",...t],void 0)}function kn(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const i=e.children[o||""],a=i&&kn(i,n,r);return{...e.controls,...a}}function ql(e,t,r){const n={...e};return kn(n,["",...t],r),n}function Ki(e,t){const r=(t==null?void 0:t.controls)||(We(e,O.Page)?he(e.entry.controls,(o,i)=>i.initValue):{});return{children:he(e.children,(o,i)=>{var a;return Ki(i,(a=t==null?void 0:t.children)==null?void 0:a[i.urlBreadcrumb])}),controls:r}}function Gl({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),i=e.toLowerCase();e:for(let a=0,s=0;a<n;a++){const l=i.charCodeAt(a);for(;s<r;)if(o.charCodeAt(s++)===l)continue e;return!1}return!0}const Xl=ci(32);function Dt(e){return e.join(Xl)}function Ji(e){if(!e.length)return[];const t=Dt(e),r=Ji(e.slice(0,-1));return[t,...r]}const Zl=["error","errors"];function Kl(e){return Zl.includes(e)}function Jl({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(a=>(n(a),Dt(a.fullUrlBreadcrumbs))).forEach(a=>r[a]=!0)}return e.forEach(o=>{const i=o.entry.errors.length&&Kl(t),a=Dt(o.fullUrlBreadcrumbs);if(Gl({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||i||r[a]){const l=Ji(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[a]=!1}),e.filter(o=>{const i=Dt(o.fullUrlBreadcrumbs),a=r[i];if(!B(a,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}var U;(function(e){e.Search="search",e.Book="book"})(U||(U={}));function Zr(e){return e[0]===U.Book?"":e[1]?decodeURIComponent(e[1]):""}const qe={hash:void 0,paths:[U.Book],search:void 0},Ql=0;function Qi(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Ql)}class gr extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class ao extends gr{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const pt="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const ec=globalThis.history.pushState;function so(...e){const t=ec.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(pt)),t}const tc=globalThis.history.replaceState;function lo(...e){const t=tc.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(pt)),t}function rc(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===so)throw new ao("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===lo)throw new ao("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=so,globalThis.history.replaceState=lo,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(pt))})}}function br(e){return!!e}var co;(function(e){e.Upper="upper",e.Lower="lower"})(co||(co={}));function nc(e,t){return e.split(t)}var uo;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(uo||(uo={}));const oc=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function Xt(e,t){return e?oc.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function ic(e){return e?e instanceof Error?e.message:Xt(e,"message")?String(e.message):String(e):""}function ac(e){return Array.isArray(e)?"array":typeof e}function sc(e,t){return ac(e)===t}function lc(e){return!!e&&typeof e=="object"}function fo(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function ea(e,t,r=!1,n={}){const o=fo(e),i=new Set(fo(t));if(!r){const a=o.filter(s=>!i.has(s));if(a.length)throw new Error(`Test object has extra keys: ${a.join(", ")}`)}i.forEach(a=>{if(!Xt(e,a))throw new Error(`test object does not have key "${String(a)}" from expected shape.`);function s(f){throw new Error(`test object value at key "${String(a)}" did not match expected shape: ${f}`)}const l=e[a],c=t[a];n[a]||ta(l,c,s,r,n[a]??{})})}function ta(e,t,r,n,o){var s;const i=typeof e,a=typeof t;i!==a&&r(`type "${i}" did not match expected type "${a}"`);try{Xt(t,"constructor")&&(!Xt(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(s=e==null?void 0:e.constructor)==null?void 0:s.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(u=>{try{ta(l,u,r,n,o);return}catch(d){return new Error(`entry at index "${c}" did not match expected shape: ${ic(d)}`)}}).filter(br).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):lc(t)&&ea(e,t,n,o)}function cc({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function uc(e){const t=Object.entries(e).map(([r,n])=>{if(n!=null)return`${r}=${String(n)}`}).filter(br);return t.length?`?${t.join("&")}`:""}function dc(e){return cc({value:e,prefix:"?"}).split("&").map(n=>{const[o,...i]=nc(n,"="),a=i.join("");if(!(!a&&!o))return[o,a]}).filter(br)}function fc(e,t){const r=sc(e,"string")?new URL(e):e,n=dc(r.search),o=Object.fromEntries(n);return t&&ea(o,t),o}function hc(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(a=>!!a),o=globalThis.location.search?fc(globalThis.location.toString()):void 0,i=globalThis.location.hash||void 0;return{paths:n,search:o,hash:i}}function ra(e){return e.replace(/(?:^\/|\/+$)/g,"")}function na({routeBase:e,windowPath:t}){if(!e)return"";const r=ra(e);if(oa({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?na({routeBase:n,windowPath:t}):""}function oa({routeBase:e,windowPath:t}){const r=ra(e);return r?t.startsWith(`/${r}`):!1}class pc extends gr{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function ia(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const ho=6;function po(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>ho)throw new pc(`Route sanitization depth has exceed the max of ${ho} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(ia(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class Rr extends gr{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function mc(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new Rr(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new Rr(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new Rr(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function gc(e,t,r=!1){const n=aa(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function aa(e,t){var s;const r=oa({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?uc(e.search):"",o=(s=e.hash)!=null&&s.startsWith("#")?"":"#",i=e.hash?`${o}${e.hash}`:"";return`/${[r,...e.paths].filter(br).join("/")}${n}${i}`}function bc(e={}){mc(e),rc();const t=e.routeBase?na({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>po(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(i){const a={hash:void 0,search:void 0,...i};return e.routeSanitizer?e.routeSanitizer(a):a},setRoutes(i,a=!1,s=!1){const l=o.getCurrentRawRoutes(),c={...l,...i},f=o.sanitizeFullRoute(c);if(!(!s&&ia(l,f)))return gc(f,t,a)},createRoutesUrl(i){return aa(i,t)},getCurrentRawRoutes(){return hc(t)},removeAllRouteListeners(){o.listeners.forEach(i=>o.removeRouteListener(i))},addRouteListener(i,a){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new gr(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(a),r||(globalThis.addEventListener(pt,n),r=!0),i&&po(o,a),a},hasRouteListener(i){return o.listeners.has(i)},removeRouteListener(i){const a=o.listeners.delete(i);return o.listeners.size||(globalThis.removeEventListener(pt,n),r=!1),a},sanitizationDepth:0};return o}function wc(e){return bc({routeBase:e,routeSanitizer(t){return{paths:yc(t.paths),hash:void 0,search:void 0}}})}function yc(e){const t=e[0];if(fs(t,U)){if(t===U.Book)return[U.Book,...e.slice(1)];if(t===U.Search)return e[1]?[t,e[1]]:[U.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return qe.paths}const x=He({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),vc={nav:{hover:{background:x["element-book-nav-hover-background-color"],foreground:x["element-book-nav-hover-foreground-color"]},active:{background:x["element-book-nav-active-background-color"],foreground:x["element-book-nav-active-foreground-color"]},selected:{background:x["element-book-nav-selected-background-color"],foreground:x["element-book-nav-selected-foreground-color"]}},accent:{icon:x["element-book-accent-icon-color"]},page:{background:x["element-book-page-background-color"],backgroundFaint1:x["element-book-page-background-faint-level-1-color"],backgroundFaint2:x["element-book-page-background-faint-level-2-color"],foreground:x["element-book-page-foreground-color"],foregroundFaint1:x["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:x["element-book-page-foreground-faint-level-2-color"]}};function $c(e,t){sa(e,t,vc)}function Kr(e){return ie(e,"_$cssResult$")}function mo(e){return ii(e,["name","value","default"])&&B(e.default,"string")&&Kr(e.name)&&Kr(e.value)}function sa(e,t,r){Object.entries(t).forEach(([n,o])=>{const i=r[n];if(!i)throw new Error(`no nestedCssVar at key '${n}'`);if(Kr(o)){if(!mo(i))throw new Error(`got a CSS result at '${n}' but no CSS var`);rl({forCssVar:i,onElement:e,toValue:String(o)})}else{if(mo(i))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);sa(e,o,i)}})}function N(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(a=>[a]));let n=t[0].length,o=t[0].map((a,s)=>t.map(l=>l[s])),i=e.map(a=>o.map(s=>{let l=0;if(!Array.isArray(a)){for(let c of s)l+=a*c;return l}for(let c=0;c<a.length;c++)l+=a[c]*(s[c]||0);return l}));return r===1&&(i=i[0]),n===1?i.map(a=>a[0]):i}function Ct(e){return we(e)==="string"}function we(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Zt(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function la(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(i,a)=>{/%$/.test(a)?(a=new Number(a.slice(0,-1)/100),a.type="<percentage>"):/deg$/.test(a)?(a=new Number(+a.slice(0,-3)),a.type="<angle>",a.unit="deg"):r.test(a)&&(a=new Number(a),a.type="<number>"),i.startsWith("/")&&(a=a instanceof Number?a:new Number(a),a.alpha=!0),o.push(a)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function ca(e){return e[e.length-1]}function Kt(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function ua(e,t,r){return(r-e)/(t-e)}function xn(e,t,r){return Kt(t[0],t[1],ua(e[0],e[1],r))}function da(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var kc=Object.freeze({__proto__:null,interpolate:Kt,interpolateInv:ua,isString:Ct,last:ca,mapRange:xn,multiplyMatrices:N,parseCoordGrammar:da,parseFunction:la,toPrecision:Zt,type:we});class xc{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const ve=new xc;var ae={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const te={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Jr(e){return Array.isArray(e)?e:te[e]}function Jt(e,t,r,n={}){if(e=Jr(e),t=Jr(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(ve.run("chromatic-adaptation-start",o),o.M||(o.W1===te.D65&&o.W2===te.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===te.D50&&o.W2===te.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),ve.run("chromatic-adaptation-end",o),o.M)return N(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Ec=75e-6,Y=class Y{constructor(t){var o,i,a;this.id=t.id,this.name=t.name,this.base=t.base?Y.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let s in r)"name"in r[s]||(r[s].name=s);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Jr(n),this.formats=t.formats??{};for(let s in this.formats){let l=this.formats[s];l.type||(l.type="function"),l.name||(l.name=s)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(i=this.formats)!=null&&i.color&&!((a=this.formats)!=null&&a.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:Sc(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),ve.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Ec}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,i)=>{let a=n[i];if(a.type!=="angle"&&a.range){if(Number.isNaN(o))return!0;let[s,l]=a.range;return(s===void 0||o>=s-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=go(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=go(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=Y.get(t),this.equals(t))return r;r=r.map(s=>Number.isNaN(s)?0:s);let n=this.path,o=t.path,i,a;for(let s=0;s<n.length&&n[s].equals(o[s]);s++)i=n[s],a=s;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let s=n.length-1;s>a;s--)r=n[s].toBase(r);for(let s=a+1;s<o.length;s++)r=o[s].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=Y.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(Y.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof Y)return t;if(we(t)==="string"){let o=Y.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return Y.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=we(t),o,i;if(n==="string"?t.includes(".")?[o,i]=t.split("."):[o,i]=[,t]:Array.isArray(t)?[o,i]=t:(o=t.space,i=t.coordId),o=Y.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=we(i),n==="number"||n==="string"&&i>=0){let c=Object.entries(o.coords)[i];if(c)return{space:o,id:c[0],index:i,...c[1]}}o=Y.get(o);let a=i.toLowerCase(),s=0;for(let c in o.coords){let f=o.coords[c];if(c.toLowerCase()===a||((l=f.name)==null?void 0:l.toLowerCase())===a)return{space:o,id:c,index:s,...f};s++}throw new TypeError(`No "${i}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};xr(Y,"registry",{}),xr(Y,"DEFAULT_FORMAT",{type:"functions",name:"color"});let b=Y;function Sc(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function go(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=da(e.coords);let r=Object.entries(t).map(([n,o],i)=>{let a=e.coordGrammar[i][0],s=o.range||o.refRange,l=a.range,c="";return a=="<percentage>"?(l=[0,100],c="%"):a=="<angle>"&&(c="deg"),{fromRange:s,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((i,a)=>{let{fromRange:s,toRange:l,suffix:c}=r[a];return s&&l&&(i=xn(s,l,i)),i=Zt(i,o),c&&(i+=c),i})}return e}var J=new b({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class F extends b{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=J),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=N(t.toXYZ_M,r);return this.white!==this.base.white&&(n=Jt(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=Jt(this.base.white,this.white,r),N(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function fa(e,{meta:t}={}){var n,o,i,a,s;let r={str:(n=String(e))==null?void 0:n.trim()};if(ve.run("parse-start",r),r.color)return r.color;if(r.parsed=la(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),f=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let d of b.all){let h=d.getFormat("color");if(h&&(c===h.id||(o=h.ids)!=null&&o.includes(c))){const g=Object.keys(d.coords).map((w,k)=>r.parsed.args[k]||0);return t&&(t.formatId="color"),{spaceId:d.id,coords:g,alpha:f}}}let u="";if(c in b.registry){let d=(s=(a=(i=b.registry[c].formats)==null?void 0:i.functions)==null?void 0:a.color)==null?void 0:s.id;d&&(u=`Did you mean color(${d})?`)}throw new TypeError(`Cannot parse color(${c}). `+(u||"Missing a plugin?"))}else for(let c of b.all){let f=c.getFormat(l);if(f&&f.type==="function"){let u=1;(f.lastAlpha||ca(r.parsed.args).alpha)&&(u=r.parsed.args.pop());let d=r.parsed.args,h;return f.coordGrammar&&(h=Object.entries(c.coords).map(([g,w],k)=>{var ne;let $=f.coordGrammar[k],T=(ne=d[k])==null?void 0:ne.type,R=$.find(W=>W==T);if(!R){let W=w.name||g;throw new TypeError(`${T} not allowed for ${W} in ${l}()`)}let P=R.range;T==="<percentage>"&&(P||(P=[0,1]));let V=w.range||w.refRange;return P&&V&&(d[k]=xn(P,V,d[k])),R})),t&&Object.assign(t,{formatId:f.name,types:h}),{spaceId:c.id,coords:d,alpha:u}}}}else for(let l of b.all)for(let c in l.formats){let f=l.formats[c];if(f.type!=="custom"||f.test&&!f.test(r.str))continue;let u=f.parse(r.str);if(u)return u.alpha??(u.alpha=1),t&&(t.formatId=c),u}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function E(e){if(!e)throw new TypeError("Empty color reference");Ct(e)&&(e=fa(e));let t=e.space||e.spaceId;return t instanceof b||(e.space=b.get(t)),e.alpha===void 0&&(e.alpha=1),e}function Tt(e,t){return t=b.get(t),t.from(e)}function Q(e,t){let{space:r,index:n}=b.resolveCoord(t,e.space);return Tt(e,r)[n]}function ha(e,t,r){return t=b.get(t),e.coords=t.to(e.space,r),e}function $e(e,t,r){if(e=E(e),arguments.length===2&&we(arguments[1])==="object"){let n=arguments[1];for(let o in n)$e(e,o,n[o])}else{typeof r=="function"&&(r=r(Q(e,t)));let{space:n,index:o}=b.resolveCoord(t,e.space),i=Tt(e,n);i[o]=r,ha(e,n,i)}return e}var En=new b({id:"xyz-d50",name:"XYZ D50",white:"D50",base:J,fromBase:e=>Jt(J.white,"D50",e),toBase:e=>Jt("D50",J.white,e),formats:{color:{}}});const Cc=216/24389,bo=24/116,Lt=24389/27;let Br=te.D50;var q=new b({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Br,base:En,fromBase(e){let r=e.map((n,o)=>n/Br[o]).map(n=>n>Cc?Math.cbrt(n):(Lt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>bo?Math.pow(t[0],3):(116*t[0]-16)/Lt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Lt,t[2]>bo?Math.pow(t[2],3):(116*t[2]-16)/Lt].map((n,o)=>n*Br[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function wr(e){return(e%360+360)%360}function Tc(e,t){if(e==="raw")return t;let[r,n]=t.map(wr),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var mt=new b({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:q,fromBase(e){let[t,r,n]=e,o;const i=.02;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),wr(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const wo=25**7,Qt=Math.PI,yo=180/Qt,ze=Qt/180;function Qr(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[i,a,s]=q.from(e),l=mt.from(q,[i,a,s])[1],[c,f,u]=q.from(t),d=mt.from(q,[c,f,u])[1];l<0&&(l=0),d<0&&(d=0);let g=((l+d)/2)**7,w=.5*(1-Math.sqrt(g/(g+wo))),k=(1+w)*a,$=(1+w)*f,T=Math.sqrt(k**2+s**2),R=Math.sqrt($**2+u**2),P=k===0&&s===0?0:Math.atan2(s,k),V=$===0&&u===0?0:Math.atan2(u,$);P<0&&(P+=2*Qt),V<0&&(V+=2*Qt),P*=yo,V*=yo;let ne=c-i,W=R-T,M=V-P,j=P+V,$r=Math.abs(M),Je;T*R===0?Je=0:$r<=180?Je=M:M>180?Je=M-360:M<-180?Je=M+360:console.log("the unthinkable has happened");let Mn=2*Math.sqrt(R*T)*Math.sin(Je*ze/2),Fa=(i+c)/2,kr=(T+R)/2,_n=Math.pow(kr,7),le;T*R===0?le=j:$r<=180?le=j/2:j<360?le=(j+360)/2:le=(j-360)/2;let Ln=(Fa-50)**2,Wa=1+.015*Ln/Math.sqrt(20+Ln),Pn=1+.045*kr,Qe=1;Qe-=.17*Math.cos((le-30)*ze),Qe+=.24*Math.cos(2*le*ze),Qe+=.32*Math.cos((3*le+6)*ze),Qe-=.2*Math.cos((4*le-63)*ze);let An=1+.015*kr*Qe,Ya=30*Math.exp(-1*((le-275)/25)**2),qa=2*Math.sqrt(_n/(_n+wo)),Ga=-1*Math.sin(2*Ya*ze)*qa,_t=(ne/(r*Wa))**2;return _t+=(W/(n*Pn))**2,_t+=(Mn/(o*An))**2,_t+=Ga*(W/(n*Pn))*(Mn/(o*An)),Math.sqrt(_t)}const Mc=75e-6;function ct(e,t=e.space,{epsilon:r=Mc}={}){e=E(e),t=b.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function gt(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function ke(e,{method:t=ae.gamut_mapping,space:r=e.space}={}){if(Ct(arguments[1])&&(r=arguments[1]),r=b.get(r),ct(e,r,{epsilon:0}))return E(e);let n=Z(e,r);if(t!=="clip"&&!ct(e,r)){let o=ke(gt(n),{method:"clip",space:r});if(Qr(e,o)>2){let i=b.resolveCoord(t),a=i.space,s=i.id,l=Z(n,a),f=(i.range||i.refRange)[0],u=.01,d=f,h=Q(l,s);for(;h-d>u;){let g=gt(l);g=ke(g,{space:r,method:"clip"}),Qr(l,g)-2<u?d=Q(l,s):h=Q(l,s),$e(l,s,(d+h)/2)}n=Z(l,r)}else n=o}if(t==="clip"||!ct(n,r,{epsilon:0})){let o=Object.values(r.coords).map(i=>i.range||[]);n.coords=n.coords.map((i,a)=>{let[s,l]=o[a];return s!==void 0&&(i=Math.max(s,i)),l!==void 0&&(i=Math.min(i,l)),i})}return r!==e.space&&(n=Z(n,e.space)),e.coords=n.coords,e}ke.returns="color";function Z(e,t,{inGamut:r}={}){e=E(e),t=b.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=ke(o)),o}Z.returns="color";function er(e,{precision:t=ae.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let i;e=E(e);let a=r;r=e.space.getFormat(r)??e.space.getFormat("default")??b.DEFAULT_FORMAT,n||(n=r.toGamut);let s=e.coords;if(s=s.map(c=>c||0),n&&!ct(e)&&(s=ke(gt(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)i=r.serialize(s,e.alpha,o);else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?s=r.serializeCoords(s,t):t!==null&&(s=s.map(h=>Zt(h,t)));let f=[...s];if(c==="color"){let h=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;f.unshift(h)}let u=e.alpha;t!==null&&(u=Zt(u,t));let d=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${u}`:"";i=`${c}(${f.join(r.commas?", ":" ")}${d})`}return i}const _c=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Lc=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var yr=new F({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:_c,fromXYZ_M:Lc,formats:{color:{}}});const Pt=1.09929682680944,vo=.018053968510807;var pa=new F({id:"rec2020",name:"REC.2020",base:yr,toBase(e){return e.map(function(t){return t<vo*4.5?t/4.5:Math.pow((t+Pt-1)/Pt,1/.45)})},fromBase(e){return e.map(function(t){return t>=vo?Pt*Math.pow(t,.45)-(Pt-1):4.5*t})},formats:{color:{}}});const Pc=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Ac=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var ma=new F({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Pc,fromXYZ_M:Ac});const Rc=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Bc=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var ga=new F({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Rc,fromXYZ_M:Bc,formats:{color:{}}}),$o={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let ko=Array(3).fill("<percentage> | <number>[0, 255]"),xo=Array(3).fill("<number>[0, 255]");var bt=new F({id:"srgb",name:"sRGB",base:ga,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:ko},rgb_number:{name:"rgb",commas:!0,coords:xo,noAlpha:!0},color:{},rgba:{coords:ko,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:xo},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(i=>Math.round(i*255));let n=r&&e.every(i=>i%17===0);return"#"+e.map(i=>n?(i/17).toString(16):i.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=$o.black,t.alpha=0):t.coords=$o[e],t.coords)return t}}}}),ba=new F({id:"p3",name:"P3",base:ma,fromBase:bt.fromBase,toBase:bt.toBase,formats:{color:{id:"display-p3"}}});ae.display_space=bt;if(typeof CSS<"u"&&CSS.supports)for(let e of[q,pa,ba]){let t=e.getMinCoords(),n=er({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){ae.display_space=e;break}}function Nc(e,{space:t=ae.display_space,...r}={}){let n=er(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!ae.display_space)n=new String(n),n.color=e;else{let o=Z(e,t);n=new String(er(o,r)),n.color=o}return n}function wa(e,t,r="lab"){r=b.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((i,a,s)=>{let l=o[s];return isNaN(a)||isNaN(l)?i:i+(l-a)**2},0))}function Hc(e,t){return e=E(e),t=E(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function xe(e){return Q(e,[J,"y"])}function ya(e,t){$e(e,[J,"y"],t)}function Ic(e){Object.defineProperty(e.prototype,"luminance",{get(){return xe(this)},set(t){ya(this,t)}})}var Oc=Object.freeze({__proto__:null,getLuminance:xe,register:Ic,setLuminance:ya});function jc(e,t){e=E(e),t=E(t);let r=Math.max(xe(e),0),n=Math.max(xe(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const zc=.56,Vc=.57,Dc=.62,Uc=.65,Eo=.022,Fc=1.414,Wc=.1,Yc=5e-4,qc=1.14,So=.027,Gc=1.14;function Co(e){return e>=Eo?e:e+(Eo-e)**Fc}function Ve(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function Xc(e,t){t=E(t),e=E(e);let r,n,o,i,a,s;t=Z(t,"srgb"),[i,a,s]=t.coords;let l=Ve(i)*.2126729+Ve(a)*.7151522+Ve(s)*.072175;e=Z(e,"srgb"),[i,a,s]=e.coords;let c=Ve(i)*.2126729+Ve(a)*.7151522+Ve(s)*.072175,f=Co(l),u=Co(c),d=u>f;return Math.abs(u-f)<Yc?n=0:d?(r=u**zc-f**Vc,n=r*qc):(r=u**Uc-f**Dc,n=r*Gc),Math.abs(n)<Wc?o=0:n>0?o=n-So:o=n+So,o*100}function Zc(e,t){e=E(e),t=E(t);let r=Math.max(xe(e),0),n=Math.max(xe(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const Kc=5e4;function Jc(e,t){e=E(e),t=E(t);let r=Math.max(xe(e),0),n=Math.max(xe(t),0);return n>r&&([r,n]=[n,r]),n===0?Kc:(r-n)/n}function Qc(e,t){e=E(e),t=E(t);let r=Q(e,[q,"l"]),n=Q(t,[q,"l"]);return Math.abs(r-n)}const eu=216/24389,To=24/116,At=24389/27;let Nr=te.D65;var en=new b({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Nr,base:J,fromBase(e){let r=e.map((n,o)=>n/Nr[o]).map(n=>n>eu?Math.cbrt(n):(At*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>To?Math.pow(t[0],3):(116*t[0]-16)/At,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/At,t[2]>To?Math.pow(t[2],3):(116*t[2]-16)/At].map((n,o)=>n*Nr[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const Hr=Math.pow(5,.5)*.5+.5;function tu(e,t){e=E(e),t=E(t);let r=Q(e,[en,"l"]),n=Q(t,[en,"l"]),o=Math.abs(Math.pow(r,Hr)-Math.pow(n,Hr)),i=Math.pow(o,1/Hr)*Math.SQRT2-40;return i<7.5?0:i}var Ut=Object.freeze({__proto__:null,contrastAPCA:Xc,contrastDeltaPhi:tu,contrastLstar:Qc,contrastMichelson:Zc,contrastWCAG21:jc,contrastWeber:Jc});function ru(e,t,r={}){Ct(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let i=Object.keys(Ut).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=E(e),t=E(t);for(let i in Ut)if("contrast"+n.toLowerCase()===i.toLowerCase())return Ut[i](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function va(e){let[t,r,n]=Tt(e,J),o=t+15*r+3*n;return[4*t/o,9*r/o]}function $a(e){let[t,r,n]=Tt(e,J),o=t+r+n;return[t/o,r/o]}function nu(e){Object.defineProperty(e.prototype,"uv",{get(){return va(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return $a(this)}})}var ou=Object.freeze({__proto__:null,register:nu,uv:va,xy:$a});function iu(e,t){return wa(e,t,"lab")}const au=Math.PI,Mo=au/180;function su(e,t,{l:r=2,c:n=1}={}){let[o,i,a]=q.from(e),[,s,l]=mt.from(q,[o,i,a]),[c,f,u]=q.from(t),d=mt.from(q,[c,f,u])[1];s<0&&(s=0),d<0&&(d=0);let h=o-c,g=s-d,w=i-f,k=a-u,$=w**2+k**2-g**2,T=.511;o>=16&&(T=.040975*o/(1+.01765*o));let R=.0638*s/(1+.0131*s)+.638,P;Number.isNaN(l)&&(l=0),l>=164&&l<=345?P=.56+Math.abs(.2*Math.cos((l+168)*Mo)):P=.36+Math.abs(.4*Math.cos((l+35)*Mo));let V=Math.pow(s,4),ne=Math.sqrt(V/(V+1900)),W=R*(ne*P+1-ne),M=(h/(r*T))**2;return M+=(g/(n*R))**2,M+=$/W**2,Math.sqrt(M)}const _o=203;var Sn=new b({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:J,fromBase(e){return e.map(t=>Math.max(t*_o,0))},toBase(e){return e.map(t=>Math.max(t/_o,0))}});const Rt=1.15,Bt=.66,Lo=2610/2**14,lu=2**14/2610,Po=3424/2**12,Ao=2413/2**7,Ro=2392/2**7,cu=1.7*2523/2**5,Bo=2**5/(1.7*2523),Nt=-.56,Ir=16295499532821565e-27,uu=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],du=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],fu=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],hu=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var ka=new b({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Sn,fromBase(e){let[t,r,n]=e,o=Rt*t-(Rt-1)*n,i=Bt*r-(Bt-1)*t,s=N(uu,[o,i,n]).map(function(d){let h=Po+Ao*(d/1e4)**Lo,g=1+Ro*(d/1e4)**Lo;return(h/g)**cu}),[l,c,f]=N(fu,s);return[(1+Nt)*l/(1+Nt*l)-Ir,c,f]},toBase(e){let[t,r,n]=e,o=(t+Ir)/(1+Nt-Nt*(t+Ir)),a=N(hu,[o,r,n]).map(function(d){let h=Po-d**Bo,g=Ro*d**Bo-Ao;return 1e4*(h/g)**lu}),[s,l,c]=N(du,a),f=(s+(Rt-1)*c)/Rt,u=(l+(Bt-1)*f)/Bt;return[f,u,c]},formats:{color:{}}}),tn=new b({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:ka,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),wr(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function pu(e,t){let[r,n,o]=tn.from(e),[i,a,s]=tn.from(t),l=r-i,c=n-a;Number.isNaN(o)&&Number.isNaN(s)?(o=0,s=0):Number.isNaN(o)?o=s:Number.isNaN(s)&&(s=o);let f=o-s,u=2*Math.sqrt(n*a)*Math.sin(f/2*(Math.PI/180));return Math.sqrt(l**2+c**2+u**2)}const xa=3424/4096,Ea=2413/128,Sa=2392/128,No=2610/16384,mu=2523/32,gu=16384/2610,Ho=32/2523,bu=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],wu=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],yu=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],vu=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var rn=new b({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Sn,fromBase(e){let t=N(bu,e);return $u(t)},toBase(e){let t=ku(e);return N(vu,t)},formats:{color:{}}});function $u(e){let t=e.map(function(r){let n=xa+Ea*(r/1e4)**No,o=1+Sa*(r/1e4)**No;return(n/o)**mu});return N(wu,t)}function ku(e){return N(yu,e).map(function(n){let o=Math.max(n**Ho-xa,0),i=Ea-Sa*n**Ho;return 1e4*(o/i)**gu})}function xu(e,t){let[r,n,o]=rn.from(e),[i,a,s]=rn.from(t);return 720*Math.sqrt((r-i)**2+.25*(n-a)**2+(o-s)**2)}const Eu=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Su=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],Cu=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],Tu=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var tr=new b({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:J,fromBase(e){let r=N(Eu,e).map(n=>Math.cbrt(n));return N(Cu,r)},toBase(e){let r=N(Tu,e).map(n=>n**3);return N(Su,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Mu(e,t){let[r,n,o]=tr.from(e),[i,a,s]=tr.from(t),l=r-i,c=n-a,f=o-s;return Math.sqrt(l**2+c**2+f**2)}var rr={deltaE76:iu,deltaECMC:su,deltaE2000:Qr,deltaEJz:pu,deltaEITP:xu,deltaEOK:Mu};function it(e,t,r={}){Ct(r)&&(r={method:r});let{method:n=ae.deltaE,...o}=r;e=E(e),t=E(t);for(let i in rr)if("deltae"+n.toLowerCase()===i.toLowerCase())return rr[i](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function _u(e,t=.25){let n=[b.get("oklch","lch"),"l"];return $e(e,n,o=>o*(1+t))}function Lu(e,t=.25){let n=[b.get("oklch","lch"),"l"];return $e(e,n,o=>o*(1-t))}var Pu=Object.freeze({__proto__:null,darken:Lu,lighten:_u});function Ca(e,t,r=.5,n={}){[e,t]=[E(e),E(t)],we(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:i,premultiplied:a}=n;return Mt(e,t,{space:o,outputSpace:i,premultiplied:a})(r)}function Ta(e,t,r={}){let n;Cn(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:i,steps:a=2,maxSteps:s=1e3,...l}=r;n||([e,t]=[E(e),E(t)],n=Mt(e,t,l));let c=it(e,t),f=o>0?Math.max(a,Math.ceil(c/o)+1):a,u=[];if(s!==void 0&&(f=Math.min(f,s)),f===1)u=[{p:.5,color:n(.5)}];else{let d=1/(f-1);u=Array.from({length:f},(h,g)=>{let w=g*d;return{p:w,color:n(w)}})}if(o>0){let d=u.reduce((h,g,w)=>{if(w===0)return 0;let k=it(g.color,u[w-1].color,i);return Math.max(h,k)},0);for(;d>o;){d=0;for(let h=1;h<u.length&&u.length<s;h++){let g=u[h-1],w=u[h],k=(w.p+g.p)/2,$=n(k);d=Math.max(d,it($,g.color),it($,w.color)),u.splice(h,0,{p:k,color:n(k)}),h++}}}return u=u.map(d=>d.color),u}function Mt(e,t,r={}){if(Cn(e)){let[l,c]=[e,t];return Mt(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:i,premultiplied:a}=r;e=E(e),t=E(t),e=gt(e),t=gt(t);let s={colors:[e,t],options:r};if(n?n=b.get(n):n=b.registry[ae.interpolationSpace]||e.space,o=o?b.get(o):n,e=Z(e,n),t=Z(t,n),e=ke(e),t=ke(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[f,u]=[Q(e,c),Q(t,c)];[f,u]=Tc(l,[f,u]),$e(e,c,f),$e(t,c,u)}return a&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=i?i(l):l;let c=e.coords.map((d,h)=>{let g=t.coords[h];return Kt(d,g,l)}),f=Kt(e.alpha,t.alpha,l),u={space:n,coords:c,alpha:f};return a&&(u.coords=u.coords.map(d=>d/f)),o!==n&&(u=Z(u,o)),u},{rangeArgs:s})}function Cn(e){return we(e)==="function"&&!!e.rangeArgs}ae.interpolationSpace="lab";function Au(e){e.defineFunction("mix",Ca,{returns:"color"}),e.defineFunction("range",Mt,{returns:"function<color>"}),e.defineFunction("steps",Ta,{returns:"array<color>"})}var Ru=Object.freeze({__proto__:null,isRange:Cn,mix:Ca,range:Mt,register:Au,steps:Ta}),Ma=new b({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:bt,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[a,s,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(s=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:a=(o-i)/c+(o<i?6:0);break;case o:a=(i-n)/c+2;break;case i:a=(n-o)/c+4}a=a*60}return[a,s*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let a=(i+t/30)%12,s=r*Math.min(n,1-n);return n-s*Math.max(-1,Math.min(a-3,9-a,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),_a=new b({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Ma,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),Bu=new b({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:_a,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let s=r/o;return[t,0,s*100]}let i=1-n,a=i===0?0:1-r/i;return[t,a*100,i*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const Nu=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],Hu=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var La=new F({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:Nu,fromXYZ_M:Hu}),Iu=new F({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:La,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const Ou=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],ju=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var Pa=new F({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:En,toXYZ_M:Ou,fromXYZ_M:ju});const zu=1/512,Vu=16/512;var Du=new F({id:"prophoto",name:"ProPhoto",base:Pa,toBase(e){return e.map(t=>t<Vu?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=zu?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),Uu=new b({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:tr,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),wr(o)]},toBase(e){let[t,r,n]=e,o,i;return isNaN(n)?(o=0,i=0):(o=r*Math.cos(n*Math.PI/180),i=r*Math.sin(n*Math.PI/180)),[t,o,i]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const Io=203,Oo=2610/2**14,Fu=2**14/2610,Wu=2523/2**5,jo=2**5/2523,zo=3424/2**12,Vo=2413/2**7,Do=2392/2**7;var Yu=new F({id:"rec2100pq",name:"REC.2100-PQ",base:yr,toBase(e){return e.map(function(t){return(Math.max(t**jo-zo,0)/(Vo-Do*t**jo))**Fu*1e4/Io})},fromBase(e){return e.map(function(t){let r=Math.max(t*Io/1e4,0),n=zo+Vo*r**Oo,o=1+Do*r**Oo;return(n/o)**Wu})},formats:{color:{id:"rec2100-pq"}}});const Uo=.17883277,Fo=.28466892,Wo=.55991073,Or=3.7743;var qu=new F({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:yr,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Or:(Math.exp((t-Wo)/Uo)+Fo)/12*Or})},fromBase(e){return e.map(function(t){return t/=Or,t<=1/12?Math.sqrt(3*t):Uo*Math.log(12*t-Fo)+Wo})},formats:{color:{id:"rec2100-hlg"}}});const Aa={};ve.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Ra(e.W1,e.W2,e.options.method))});ve.add("chromatic-adaptation-end",e=>{e.M||(e.M=Ra(e.W1,e.W2,e.options.method))});function vr({id:e,toCone_M:t,fromCone_M:r}){Aa[e]=arguments[0]}function Ra(e,t,r="Bradford"){let n=Aa[r],[o,i,a]=N(n.toCone_M,e),[s,l,c]=N(n.toCone_M,t),f=[[s/o,0,0],[0,l/i,0],[0,0,c/a]],u=N(f,n.toCone_M);return N(n.fromCone_M,u)}vr({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});vr({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});vr({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});vr({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(te,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});te.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const Gu=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],Xu=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Ba=new F({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:te.ACES,toXYZ_M:Gu,fromXYZ_M:Xu,formats:{color:{}}});const Ht=2**-16,jr=-.35828683,It=(Math.log2(65504)+9.72)/17.52;var Zu=new F({id:"acescc",name:"ACEScc",coords:{r:{range:[jr,It],name:"Red"},g:{range:[jr,It],name:"Green"},b:{range:[jr,It],name:"Blue"}},referred:"scene",base:Ba,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Ht)*2:r<It?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Ht)+9.72)/17.52:t<Ht?(Math.log2(Ht+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Yo=Object.freeze({__proto__:null,A98RGB:Iu,A98RGB_Linear:La,ACEScc:Zu,ACEScg:Ba,HSL:Ma,HSV:_a,HWB:Bu,ICTCP:rn,JzCzHz:tn,Jzazbz:ka,LCH:mt,Lab:q,Lab_D65:en,OKLCH:Uu,OKLab:tr,P3:ba,P3_Linear:ma,ProPhoto:Du,ProPhoto_Linear:Pa,REC_2020:pa,REC_2020_Linear:yr,REC_2100_HLG:qu,REC_2100_PQ:Yu,XYZ_ABS_D65:Sn,XYZ_D50:En,XYZ_D65:J,sRGB:bt,sRGB_Linear:ga});let C=class D{constructor(...t){let r;t.length===1&&(r=E(t[0]));let n,o,i;r?(n=r.space||r.spaceId,o=r.coords,i=r.alpha):[n,o,i]=t,Object.defineProperty(this,"space",{value:b.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=i<1?i:1;for(let a=0;a<this.coords.length;a++)this.coords[a]==="NaN"&&(this.coords[a]=NaN);for(let a in this.space.coords)Object.defineProperty(this,a,{get:()=>this.get(a),set:s=>this.set(a,s)})}get spaceId(){return this.space.id}clone(){return new D(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=Nc(this,...t);return r.color=new D(r.color),r}static get(t,...r){return t instanceof D?t:new D(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:i}=n,a=function(...s){let l=r(...s);if(i==="color")l=D.get(l);else if(i==="function<color>"){let c=l;l=function(...f){let u=c(...f);return D.get(u)},Object.assign(l,c)}else i==="array<color>"&&(l=l.map(c=>D.get(c)));return l};t in D||(D[t]=a),o&&(D.prototype[t]=function(...s){return a(this,...s)})}static defineFunctions(t){for(let r in t)D.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(D);else for(let r in t)D.defineFunction(r,t[r])}};C.defineFunctions({get:Q,getAll:Tt,set:$e,setAll:ha,to:Z,equals:Hc,inGamut:ct,toGamut:ke,distance:wa,toString:er});Object.assign(C,{util:kc,hooks:ve,WHITES:te,Space:b,spaces:b.registry,parse:fa,defaults:ae});for(let e of Object.keys(Yo))b.register(Yo[e]);for(let e in b.registry)nn(e,b.registry[e]);ve.add("colorspace-init-end",e=>{var t;nn(e.id,e),(t=e.aliases)==null||t.forEach(r=>{nn(r,e)})});function nn(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(C.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,i)=>{try{return b.resolveCoord([t,i]),!0}catch{}return Reflect.has(o,i)},get:(o,i,a)=>{if(i&&typeof i!="symbol"&&!(i in o)){let{index:s}=b.resolveCoord([t,i]);if(s>=0)return o[s]}return Reflect.get(o,i,a)},set:(o,i,a,s)=>{if(i&&typeof i!="symbol"&&!(i in o)||i>=0){let{index:l}=b.resolveCoord([t,i]);if(l>=0)return o[l]=a,this.setAll(e,o),!0}return Reflect.set(o,i,a,s)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}C.extend(rr);C.extend({deltaE:it});Object.assign(C,{deltaEMethods:rr});C.extend(Pu);C.extend({contrast:ru});C.extend(ou);C.extend(Oc);C.extend(Ru);C.extend(Ut);function Na(e){return he(e,(t,r)=>r instanceof C?I(r.toString({format:"hex"})):Na(r))}const Ku="dodgerblue";function on(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function zr({background:e,foreground:t}){return{background:e??new C(on(t)),foreground:t??new C(on(e))}}var nr;(function(e){e.Dark="dark",e.Light="light"})(nr||(nr={}));function Ju(e){return e==="black"?"white":"black"}const Qu={black:{foregroundFaint1:new C("#ccc"),foregroundFaint2:new C("#eee")},white:{foregroundFaint1:new C("#ccc"),foregroundFaint2:new C("#eee")}},ed={black:{backgroundFaint1:new C("#666"),backgroundFaint2:new C("#444")},white:{backgroundFaint1:new C("#ccc"),backgroundFaint2:new C("#fafafa")}};function qo({themeColor:e=Ku,themeStyle:t=nr.Light}={}){const r=new C(e),n=new C(t===nr.Dark?"black":"white"),o=on(n),i=new C(o),a={nav:{hover:zr({background:r.clone().set({"hsl.l":93})}),active:zr({background:r.clone().set({"hsl.l":90})}),selected:zr({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...ed[Ju(o)],foreground:i,...Qu[o]}};return Na(a)}const or=gn()("element-book-change-route"),Go="vira-",{defineElement:Ke,defineElementNoInputs:Cd}=qi({assertInputs:e=>{if(!e.tagName.startsWith(Go))throw new Error(`Tag name should start with '${Go}' but got '${e.tagName}'`)}}),td=C;function rd(e){try{if(!e)throw new Error("invalid empty color");return new td(e)}catch{const r=String(e),n=r.toLowerCase().match(/\[\s*object\s+object\s*\]/)?ss({callback:()=>JSON.stringify(e),fallbackValue:r}):r;throw new Error(`Invalid color: ${n}`)}}const Ha=m`
    pointer-events: none;
    opacity: 0.3;
`,ye=He({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),wt=He({"vira-form-input-border-radius":"8px"}),ir=He({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":m`calc(${wt["vira-form-input-border-radius"].value} + 4px)`});function Ia({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=I(ui(n+r+t));return m`
        ${I(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${ir["vira-focus-outline-color"].value};
            border-radius: ${ir["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const nd=m`
    padding: 0;
    margin: 0;
`,_e=m`
    ${nd};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,an=m`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,v=Ke()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>m`
        :host {
            display: inline-block;
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${e["vira-icon-fit-container"].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,renderCallback({inputs:e}){return e.icon?e.icon.svgTemplate:""}});var ar;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(ar||(ar={}));const H=Ke()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===ar.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>m`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${an};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${ir["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
        }

        :host(:hover) button,
        button:hover {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-active-color"].value};
        }

        ${e["vira-button-disabled"].selector} {
            ${Ha};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${_e};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${wt["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${ye["vira-interaction-animation-duration"].value},
                background-color
                    ${ye["vira-interaction-animation-duration"].value},
                border-color ${ye["vira-interaction-animation-duration"].value};
        }

        ${Ia({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${v} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?p`
                  <${v.assign({icon:e.icon})}></${v}>
              `:"",r=e.text?p`
                  <span class="text-template">${e.text}</span>
              `:"";return p`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var yt;(function(e){e.Header="header"})(yt||(yt={}));const Me=Ke()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>m`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${_e};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${ye["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:pe()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const i=o.expanded?m`
                  height: ${e.contentHeight}px;
              `:m`
                  height: 0;
              `;return p`
            <button
                class="header-wrapper"
                ${L("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${yt.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${i} disabled="disabled">
                <div
                    ${Yi(({contentRect:a})=>{t({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),y=He({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function se({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function Xo(e,t){const r=z(t).map(n=>{const o=t[n],i=rd(o);return`${y[n].name}: ${i.toString()};`}).join(" ");return se({name:e.name,svgTemplate:p`
            <div style=${r}>${e.svgTemplate}</div>
        `})}const Oa=se({name:"CloseX24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),ja=se({name:"Element16Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),ge=se({name:"Element24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),za=se({name:"Loader24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="loader-animated-24-icon"
        >
            <path
                d="M12 8V2M16 12h6M12 16v6M8 12H2M9.17 9.17 4.93 4.93M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),od=m`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${ye["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,vt=se({name:"LoaderAnimated24Icon",svgTemplate:p`
        <style>
            ${od}
        </style>
        ${za.svgTemplate}
    `}),Tn=se({name:"Options24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke="${y["vira-icon-stroke-color"].value}"
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),sr=se({name:"StatusFailure24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),id=se({name:"StatusInProgress24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${y["vira-icon-stroke-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width="calc(${y["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),ad=se({name:"StatusSuccess24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${y["vira-icon-fill-color"].value}
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${y["vira-icon-stroke-color"].value}
                stroke-width=${y["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),sd={CloseX24Icon:Oa,Element16Icon:ja,Element24Icon:ge,Loader24Icon:za,LoaderAnimated24Icon:vt,Options24Icon:Tn,StatusFailure24Icon:sr,StatusInProgress24Icon:id,StatusSuccess24Icon:ad};var Ge;(function(e){e.Loading="loading",e.Error="error"})(Ge||(Ge={}));const De=Ke()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},events:{imageLoad:pe(),imageError:pe()},styles:({hostClasses:e})=>m`
        :host {
            display: inline-flex;
            overflow: hidden;
            flex-direction: column;
            justify-content: center;
            position: relative;
            border-radius: inherit;
            min-height: 100px;
            min-width: 100px;
        }

        img {
            width: 100%;
            height: auto;
            flex-shrink: 0;
        }
        ${e["vira-image-height-constrained"].selector} {
            flex-direction: row;
        }

        ${e["vira-image-height-constrained"].selector} img {
            width: auto;
            height: 100%;
        }

        .status-wrapper {
            overflow: hidden;
            border-radius: inherit;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .error {
            color: red;
        }

        .hidden {
            display: none;
        }
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},renderCallback({inputs:e,state:t,updateState:r,dispatch:n,events:o}){const i=e.imageUrl,a=t.erroredUrls[i]?p`
                  <slot class="status-wrapper" name=${Ge.Error}>
                      <${v.assign({icon:sr})} class="error"></${v}>
                  </slot>
              `:t.loadedUrls[i]?void 0:p`
                    <slot class="status-wrapper" name=${Ge.Loading}>
                        <${v.assign({icon:vt})}></${v}>
                    </slot>
                `;return p`
            ${K(!!a,a)}
            <img
                class=${xi({hidden:!!a})}
                ${L("load",async()=>{e._debugLoadDelay&&await Fr(e._debugLoadDelay.milliseconds),r({loadedUrls:{...t.loadedUrls,[i]:!0}}),n(new o.imageLoad)})}
                ${L("error",async s=>{e._debugLoadDelay&&await Fr(e._debugLoadDelay.milliseconds),r({erroredUrls:{...t.erroredUrls,[i]:!0}}),n(new o.imageError(s.error))})}
                src=${i}
            />
        `}});function sn({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>sn({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Va({value:e,allowed:t,blocked:r}){const n=t?sn({input:e,matcher:t}):!0,o=r?sn({input:e,matcher:r}):!1;return n&&!o}function Da(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(Va({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function ld({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const i=ot(r,HTMLInputElement),a=r.data,s=t;let l=i.value??"";if(a)if(a.length===1)Va({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=s,n(a));else{const{filtered:c,blocked:f}=Da({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(f)}i.value!==l&&(i.value=l),s!==l&&o(l)}const _=Ke()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:pe(),inputBlocked:pe()},styles:({hostClasses:e,cssVars:t})=>m`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${ir["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Ha};
            }

            ${e["vira-input-fit-text"].selector} {
                width: unset;
            }
            ${e["vira-input-fit-text"].selector} input {
                flex-grow: 0;
            }
            ${e["vira-input-fit-text"].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${e["vira-input-fit-text"].selector} .size-span {
                ${_e};
                font-family: inherit;
                display: inline-block;
                font-size: inherit;
                line-height: inherit;
                box-sizing: border-box;
                position: absolute;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                z-index: -1;
                width: min-content;
                ${an};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${_e};
                font: inherit;
                /*
                    Leave at least a few pixels for the cursor bar when there is no text at all.
                    This also accounts for a weird Safari <input> behavior where the text moves
                    around if it's not given a tiny bit of padding.
                */
                padding-left: 2px;
                display: block;
            }

            .border-style {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: ${wt["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${ye["vira-interaction-animation-duration"].value};
            }

            label {
                ${_e};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${wt["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${Ia({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${_e};
                cursor: text;
                margin: ${t["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
            }

            ::selection {
                background: ${t["vira-input-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${t["vira-input-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${t["vira-input-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${an};
            }

            .close-x-button {
                ${_e};
                color: ${t["vira-input-clear-button-color"].value};
                cursor: pointer;
                display: flex;
                transition: ${ye["vira-interaction-animation-duration"].value};
            }

            .close-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .close-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:i}=Da({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?p`
                  <${v.assign({icon:e.icon})} class="left-side-icon"></${v}>
              `:"",s=e.fitText?m`
                  width: ${r.forcedInputWidth}px;
              `:"";return p`
            <label>
                ${a}
                ${K(!!e.fitText,p`
                        <span
                            class="size-span"
                            ${Yi(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${i||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    style=${s}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${i}
                    ${L("input",l=>{ld({inputs:e,filteredValue:i,event:l,inputBlockedCallback(c){t(new o.inputBlocked(c))},newValueCallback(c){t(new o.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${K(!!(e.showClearButton&&e.value),p`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${L("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${v.assign({icon:Oa})}></${v}>
                        </button>
                    `)}
                ${K(!!e.suffix,p`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}}),rt=Ke()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>m`
        :host {
            display: inline;
            text-decoration: underline;
        }

        a,
        a:visited,
        a:active,
        a:link,
        a:hover {
            color: inherit;
            text-decoration: inherit;
            white-space: inherit;
        }

        :host(:hover) a,
        a:hover,
        :host(:active) a,
        a:active {
            color: ${e["vira-link-hover-color"].value};
        }
    `,events:{routeChange:pe()},renderCallback({inputs:e,dispatch:t,events:r}){var o,i;function n(a){e.route&&Qi(a)&&(a.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return p`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const a=e.link?e.link.url:(i=e.route)==null?void 0:i.router.createRoutesUrl(e.route.route);return p`
                <a href=${a} rel="noopener noreferrer" ${L("click",n)}>
                    <slot></slot>
                </a>
            `}}}),{defineElement:ee,defineElementNoInputs:Td}=qi(),X=ee()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>m`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e,dispatch:t})=>{var n,o;const r=((o=e.router)==null?void 0:o.createRoutesUrl({...(n=e.router)==null?void 0:n.getCurrentRawRoutes(),...e.route}))??"#";return p`
            <a
                href=${r}
                ${L("click",i=>{(!e.router||Qi(i))&&(i.preventDefault(),window.scrollTo(0,0),t(new or(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function cd(e,t){return e.entry.entryType===O.Root?!1:!!(e.entry.entryType===O.Page||me(t,e.fullUrlBreadcrumbs.slice(0,-1))||me(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const ue=ee()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>m`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${x["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${x["element-book-nav-hover-background-color"].value};
            color: ${x["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${x["element-book-nav-active-background-color"].value};
            color: ${x["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${X.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${x["element-book-nav-selected-background-color"].value};
            color: ${x["element-book-nav-selected-foreground-color"].value};
            pointer-events: none;
        }

        .title-text {
            white-space: nowrap;
            padding: 1px 0;
            text-overflow: ellipsis;
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 16px;
        }

        ${v} {
            display: inline-flex;
            color: ${x["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!cd(r,e.selectedPath))return;const n=m`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return p`
                <li style=${n}>
                    <${X.assign({router:e.router,route:{paths:[U.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${xi({"title-row":!0,selected:e.selectedPath?me(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${K(We(r,O.ElementExample),p`
                                    <${v.assign({icon:ja})}></${v}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${X}>
                </li>
            `});return p`
            <${X.assign({route:qe,router:e.router})}>
                <slot name=${oe.NavHeader}>Book</slot>
            </${X}>
            <ul>
                ${t}
            </ul>
        `}});async function ud(e){await Wr(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await Ss(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const Ee=ee()({tagName:"book-error",styles:m`
        :host {
            display: flex;
            flex-direction: column;
            color: red;
            font-weight: bold;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,renderCallback({inputs:e}){return(B(e.message,"array")?e.message:[e.message]).map(r=>p`
                <p>${r}</p>
            `)}}),$t=ee()({tagName:"book-page-controls",events:{controlValueChange:pe()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>m`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${x["element-book-page-foreground-faint-level-1-color"].value};
        }

        ${e["book-page-controls-has-controls"].selector} {
            margin-top: 8px;
        }

        .control-wrapper {
            position: relative;
            display: flex;
            gap: 4px;
            flex-direction: column;
        }

        .error {
            font-weight: bold;
            color: red;
        }

        ${_} {
            height: 24px;
            max-width: 128px;
        }

        ${v}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],i)=>{if(o.controlType===S.Hidden)return"";const a=dd(e.currentValues[n],o,s=>{const l=B(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:s}}))});return p`
                    <div class="control-wrapper">
                        ${K(i===0,p`
                                <${v.assign({icon:Tn})}
                                    class="options-icon"
                                ></${v}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${a}
                        </label>
                    </div>
                `}):""}});function dd(e,t,r){return je(t,S.Hidden)?"":je(t,S.Checkbox)?p`
            <input
                type="checkbox"
                .value=${e}
                ${L("input",n=>{const o=ot(n,HTMLInputElement);r(o.checked)})}
            />
        `:je(t,S.Color)?p`
            <input
                type="color"
                .value=${e}
                ${L("input",n=>{const o=ot(n,HTMLInputElement);r(o.value)})}
            />
        `:je(t,S.Text)?p`
            <${_.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${L(_.events.valueChange,n=>{r(n.detail)})}
            ></${_}>
        `:je(t,S.Number)?p`
            <input
                type="number"
                .value=${e}
                ${L("input",n=>{const o=ot(n,HTMLInputElement);r(o.value)})}
            />
        `:je(t,S.Dropdown)?p`
            <select
                .value=${e}
                ${L("input",n=>{const o=ot(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>p`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:p`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Zo=ee()({tagName:"book-breadcrumbs",styles:m`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,o)=>{const i=n>=o.length-1,a=o.slice(0,n+1),s=i?"":p`
                      <span class="spacer">&gt;</span>
                  `;return p`
                <${X.assign({route:{hash:void 0,search:void 0,paths:[U.Book,...a]},router:e.router})}>
                    ${r}
                </${X}>
                ${s}
            `}):p`
                &nbsp;
            `}}),Vr=ee()({tagName:"book-breadcrumbs-bar",styles:m`
        :host {
            border-bottom: 1px solid
                ${x["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${x["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,renderCallback({inputs:e,dispatch:t}){return p`
            ${K(!!e.currentSearch,p`
                    &nbsp;
                `,p`
                    <${Zo.assign({currentRoute:e.currentRoute,router:e.router})}></${Zo}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${L("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await Fr(200),n.value===o&&(n.value?t(new or({paths:[U.Search,encodeURIComponent(n.value)]})):t(new or(qe)))})}
            />
        `}}),Ko=ee()({tagName:"book-entry-description",styles:m`
        :host {
            color: ${x["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${x["element-book-page-foreground-color"].value};
        }

        p {
            margin: 0;
            padding: 0;
        }

        p:first-child {
            margin-top: 8px;
        }
    `,renderCallback({inputs:e}){return e.descriptionParagraphs.map(t=>p`
                <p>${t}</p>
            `)}}),Jo=ee()({tagName:"book-page-wrapper",styles:m`
        :host {
            display: block;
        }

        h2,
        h3 {
            margin: 0;
            padding: 0;
            font-size: 1.5em;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .page-header .title-group {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
        }

        ${X} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?p`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:p`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[U.Book,...e.pageNode.fullUrlBreadcrumbs],n=ai(e.pageNode.entry.errors);return n&&console.error(n),p`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${X.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${X}>
                    ${n?p`
                              <${Ee.assign({message:n.message})}></${Ee}>
                          `:p`
                              <${Ko.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${Ko}>
                              <${$t.assign({config:e.pageNode.entry.controls,currentValues:$n(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${$t}>
                          `}
                </div>
            </div>
        `}}),Ot=ee()({tagName:"book-element-example-controls",styles:m`
        :host {
            display: flex;
            color: ${x["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[U.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return p`
            <${X.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${X}>
        `}}),Qo=Symbol("unset-internal-state"),ei=ee()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:Qo},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw ai(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===Qo&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return p`
                ${K(!!t.elementExampleNode.entry.styles,p`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),p`
                <${Ee.assign({message:`${t.elementExampleNode.entry.title} failed: ${Be(n)}`})}></${Ee}>
            `}},options:{allowPolymorphicState:!0}}),ti=ee()({tagName:"book-element-example-wrapper",styles:m`
        :host {
            display: inline-flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        .examples-wrapper {
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
        }

        .error {
            color: red;
            font-weight: bold;
        }

        .individual-example-wrapper {
            display: flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        ${Ot} {
            color: ${x["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Ot} {
            color: ${x["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return p`
            <div class="individual-example-wrapper">
                <${Ot.assign(ps(e,["currentPageControls"]))}></${Ot}>
                <${ei.assign(e)}></${ei}>
            </div>
        `}});function Ua(e,t,r,n){const o=Xr(r,n),i=[];if(o){const a=Ua(e,t,o,n);a&&i.push(a)}if(We(r,O.Page)&&!e.includes(r)){const a=$n(t,r.fullUrlBreadcrumbs);i.push({config:r.entry.controls,current:a,breadcrumbs:he(a,()=>r.fullUrlBreadcrumbs)})}return i.reduce((a,s)=>({config:{...a.config,...s.config},current:{...a.current,...s.current},breadcrumbs:{...a.breadcrumbs,...s.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function fd({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:i}){if(!e.length&&n)return[p`
                No results
            `];const a=Ur(e,1)?Ua(e,o,e[0],i):void 0,s=a&&Object.values(a.config).length&&Ur(e,1)?p`
                  <${$t.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${$t}>
              `:A,l=Xs(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,f)=>{if(We(c,O.Page))return p`
                    <${Jo.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${Jo}>
                `;if(We(c,O.ElementExample)){const u=$n(o,c.fullUrlBreadcrumbs.slice(0,-1));return p`
                    <${ti.assign({elementExampleNode:c,currentPageControls:u,router:r})}
                        class="inline-entry"
                    ></${ti}>
                `}else return We(c,O.Root)?A:p`
                    <${Ee.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${Ee}>
                `});return[s,l]}const Ue=ee()({tagName:"book-entry-display",styles:m`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .all-book-entries-wrapper {
            flex-grow: 1;
            padding: 32px;
        }

        .inline-entry {
            margin: 8px;
        }

        * + .block-entry {
            margin-top: 32px;
        }

        .block-entry + * {
            margin-top: 32px;
        }

        h1 {
            margin: 0;
            padding: 0;
        }

        ${Vr} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${ye["vira-interaction-animation-duration"].value} forwards;
            z-index: 100;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }

        @keyframes fade-in {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `,events:{loadingRender:pe()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const i=Zr(e.currentRoute.paths),a=fd({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!i,controls:e.controls,originalTree:e.originalTree});return p`
            <${Vr.assign({currentSearch:i,currentRoute:e.currentRoute,router:e.router})}></${Vr}>

            ${K(e.showLoading,p`
                    <div
                        ${oo(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${v.assign({icon:vt})}></${v}>
                    </div>
                    ${K(!!n.lastElement,p`
                            ${n.lastElement}
                            <slot name=${oe.Footer}></slot>
                        `)}
                `,p`
                    <div
                        ${oo(s=>{o({lastElement:s})})}
                        class="all-book-entries-wrapper"
                    >
                        ${a}
                    </div>
                    <slot name=${oe.Footer}></slot>
                `)}
        `}});function hd(e,t,r){const n=ri(e,t);if(n.length)return n;r(qe);const o=ri(e,qe.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function ri(e,t){return e.filter(r=>Es({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Dr=Fi()({tagName:"element-book-app",events:{pathUpdate:pe()},stateInitStatic:{currentRoute:qe,router:void 0,loading:!0,colors:{config:void 0,theme:qo(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:m`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${x["element-book-page-background-color"].value};
            color: ${x["element-book-page-foreground-color"].value};
        }

        .error {
            color: red;
        }

        .root {
            height: 100%;
            width: 100%;
            display: flex;
            position: relative;
        }

        ${Ue} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${ue} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,initCallback({host:e,state:t}){setTimeout(()=>{ni(e,Zr(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:i})=>{var f,u,d,h,g,w,k;t._debug&&console.info("rendering element-book app");function a($){return{...e.currentRoute,...$}}function s($){const T=a($);return!me(e.currentRoute,T)}function l($){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,$].filter(kt).join(" - "))}function c($){if(!s($))return;const T=a($);e.router?e.router.setRoutes(T):n({currentRoute:{...e.currentRoute,...T}}),t.elementBookRoutePaths&&!me(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new i.pathUpdate(T.paths??[]))}try{if(t.elementBookRoutePaths&&!me(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),(f=t.internalRouterConfig)!=null&&f.useInternalRouter&&!e.router){const M=wc(t.internalRouterConfig.basePath);n({router:M}),M.addRouteListener(!0,j=>{n({currentRoute:j})})}else!((u=t.internalRouterConfig)!=null&&u.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const $={themeColor:t.themeColor};if(!me($,(d=e.colors)==null?void 0:d.config)){const M=qo($);n({colors:{config:$,theme:M}}),$c(r,M)}const T=t._debug??!1,R=Wl({entries:t.entries,debug:T});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:Ki(R.tree,{children:(g=(h=e.treeBasedControls)==null?void 0:h.controls)==null?void 0:g.children,controls:t.globalValues})}}));const P=Zr(e.currentRoute.paths),ne=(P?Jl({flattenedNodes:R.flattenedNodes,searchQuery:P}):void 0)??hd(R.flattenedNodes,e.currentRoute.paths,c);l((w=ne[0])==null?void 0:w.entry.title);const W=(k=e.treeBasedControls)==null?void 0:k.controls;return W?(t._debug&&console.info({currentControls:W}),p`
                <div
                    class="root"
                    ${L(or,async M=>{const j=M.detail;if(!s(j))return;if(n({loading:!0}),c(j),!(r.shadowRoot.querySelector(ue.tagName)instanceof ue))throw new Error(`Failed to find child '${ue.tagName}'`);ni(r,P,e.currentRoute)})}
                    ${L($t.events.controlValueChange,M=>{if(!e.treeBasedControls)return;const j=ql(W,M.detail.fullUrlBreadcrumbs,M.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:j}})})}
                >
                    <${ue.assign({flattenedNodes:R.flattenedNodes,router:e.router,selectedPath:P?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${oe.NavHeader}
                            slot=${oe.NavHeader}
                        ></slot>
                    </${ue}>
                    <${Ue.assign({controls:W,currentNodes:ne,currentRoute:e.currentRoute,debug:T,originalTree:R.tree,router:e.router,showLoading:e.loading})}
                        ${L(Ue.events.loadingRender,async M=>{await Wr();const j=r.shadowRoot.querySelector(Ue.tagName);j?j.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Ue.tagName}' for scrolling.`),await Wr(),n({loading:!M.detail})})}
                    >
                        <slot
                            name=${oe.Footer}
                            slot=${oe.Footer}
                        ></slot>
                    </${Ue}>
                </div>
            `):p`
                    <${Ee.assign({message:"Failed to generate page controls."})}></${Ee}>
                `}catch($){return console.error($),p`
                <p class="error">${Be($)}</p>
            `}}});async function ni(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(ue.tagName);if(!(n instanceof ue))throw new Error(`Failed to find child '${ue.tagName}'`);await ud(n)}const Oe=Se({title:"Elements",parent:void 0}),pd=Se({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:S.Color,initValue:""},"Fill Color":{controlType:S.Color,initValue:""},"Stroke Width":{controlType:S.Number,initValue:1}},elementExamplesCallback({defineExample:e}){Object.values(sd).forEach(t=>{e({title:t.name,styles:m`
                    :host(:hover) ${v} {
                        background-color: #f2f2f2;
                    }

                    ${v} {
                        padding: 8px;
                        border-radius: ${wt["vira-form-input-border-radius"].value};
                    }
                `,renderCallback({controls:r}){const n=m`
                        ${y["vira-icon-fill-color"].name}: ${I(r["Fill Color"]||"inherit")};
                        ${y["vira-icon-stroke-color"].name}: ${I(r["Stroke Color"]||"inherit")};
                        ${y["vira-icon-stroke-width"].name}: ${I(ui(r["Stroke Width"])||"inherit")};
                    `;return p`
                        <${v.assign({icon:t})} style=${n}></${v}>
                    `}})})}}),md=Se({parent:Oe,title:H.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:S.Color,initValue:H.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:S.Color,initValue:H.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:S.Color,initValue:H.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:S.Color,initValue:H.cssVars["vira-button-primary-active-color"].default}},elementExamplesCallback({defineExample:e}){function t({title:r,styles:n,inputs:o}){const i=n??m``;e({title:r,styles:i,renderCallback({controls:a}){const s=m`
                        ${H.cssVars["vira-button-primary-color"].name}: ${I(a["Primary color"]||"inherit")};
                        ${H.cssVars["vira-button-secondary-color"].name}: ${I(a["Secondary color"]||"inherit")};
                        ${H.cssVars["vira-button-primary-hover-color"].name}: ${I(a["Hover color"]||"inherit")};
                        ${H.cssVars["vira-button-primary-active-color"].name}: ${I(a["Active color"]||"inherit")};
                    `;return p`
                        <${H.assign({text:"hello",...o})}
                            style=${s}
                        ></${H}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:Tn}}),t({title:"outline",inputs:{buttonStyle:ar.Outline}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:m`
                ${H} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:m`
                ${H} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:m`
                :host {
                    ${H.cssVars["vira-button-primary-color"].name}: pink;
                    ${H.cssVars["vira-button-secondary-color"].name}: purple;
                    ${H.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${H.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,renderCallback(){return p`
                    <${H.assign({text:"hello"})}></${H}>
                `}})}}),gd=Se({title:Me.tagName,parent:Oe,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],elementExamplesCallback({defineExample:e}){e({title:"stacked examples",styles:m`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>p`
                            <${Me.assign({expanded:!!r.expandedStates[o]})}
                                ${L(Me.events.expandChange,i=>{const a=[...r.expandedStates];a[o]=i.detail,t({expandedStates:a})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${yt.Header}
                                >
                                    Section ${o}
                                </div>
                                <p>Variable contents</p>
                                <button
                                    ${L("click",()=>{const i=[...r.showMoreStates];i[o]=!i[o],t({showMoreStates:i})})}
                                >
                                    show more
                                </button>
                                ${K(!!r.showMoreStates[o],p`
                                        <p>Variable contents</p>
                                        <p>Variable contents</p>
                                    `)}
                                <p>Variable contents</p>
                            </${Me}>
                        `)}}),e({title:"wider examples",styles:m`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>p`
                            <${Me.assign({expanded:!!r.expandedStates[o]})}
                                ${L(Me.events.expandChange,i=>{const a=[...r.expandedStates];a[o]=i.detail,t({expandedStates:a})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${yt.Header}
                                >
                                    Section ${o}
                                </div>
                                <p>
                                    Variable contents Variable contents Variable contents Variable
                                    contents Variable contents Variable contents
                                </p>
                                <button
                                    ${L("click",()=>{const i=[...r.showMoreStates];i[o]=!i[o],t({showMoreStates:i})})}
                                >
                                    show more
                                </button>
                                ${K(!!r.showMoreStates[o],p`
                                        <p>
                                            Variable contents Variable contents Variable contents
                                            Variable contents Variable contents Variable contents
                                        </p>
                                        <p>
                                            Variable contents Variable contents Variable contents
                                            Variable contents Variable contents Variable contents
                                        </p>
                                    `)}
                                <p>
                                    Variable contents Variable contents Variable contents Variable
                                    contents Variable contents Variable contents
                                </p>
                            </${Me}>
                        `)}})}}),bd=Se({title:v.tagName,parent:Oe,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],elementExamplesCallback({defineExample:e}){e({title:"basic",renderCallback(){return p`
                    <${v.assign({icon:ge})}></${v}>
                `}}),e({title:"using createColoredIcon",renderCallback(){return p`
                    <${v.assign({icon:Xo(ge,{"vira-icon-stroke-color":"red"})})}></${v}>
                `}}),e({title:"fit container",styles:m`
                ${v} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,renderCallback(){return p`
                    <${v.assign({icon:Xo(ge,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${v}>
                `}})}}),wd=Se({title:De.tagName,parent:Oe,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],elementExamplesCallback({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:m`
                    border-radius: 32px;
                `,loadingSlot:p`
                    <div
                        style=${m`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${v.assign({icon:vt,fitContainer:!0})}
                            style=${m`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${v}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:m`
                    border-radius: 32px;
                `,errorSlot:p`
                    <div
                        style=${m`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${v.assign({icon:sr,fitContainer:!0})}
                            style=${m`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${v}>
                    </div>
                `},{title:"disproportionate dimensions",inputs:{imageUrl:"/bolt.png"},styles:m`
                    width: 25px;
                    height: 200px;
                `},{title:"dominant height",inputs:{imageUrl:"/bolt.png",dominantDimension:"height"},styles:m`
                    width: 25px;
                    height: 200px;
                `},{title:"long loading",inputs:{imageUrl:"/bolt.png",_debugLoadDelay:{milliseconds:2e3}},styles:m`
                    border-radius: 32px;
                `,allowReload:!0,loadingSlot:p`
                    <div
                        style=${m`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${v.assign({icon:vt,fitContainer:!0})}
                            style=${m`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${v}>
                    </div>
                `,errorSlot:p`
                    <div
                        style=${m`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${v.assign({icon:sr,fitContainer:!0})}
                            style=${m`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${v}>
                    </div>
                `}].forEach(r=>{e({title:r.title,styles:m`
                    ${De} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${r.styles||m``}
                    }

                    ${r.allowReload?m`
                              ${De} {
                                  cursor: pointer;
                              }

                              ${De}:hover {
                                  border-color: #0055ff;
                              }
                          `:m``}

                    .slot-wrapper {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `,stateInitStatic:{imageUrl:r.inputs.imageUrl},renderCallback({state:n,updateState:o}){return p`
                        <${De.assign({...r.inputs,imageUrl:n.imageUrl})}
                            ${L("click",()=>{r.allowReload&&o({imageUrl:`${r.inputs.imageUrl}?di=${ci()}`})})}
                        >
                            ${r.loadingSlot?p`
                                      <div
                                          class="slot-wrapper"
                                          slot=${Ge.Loading}
                                      >
                                          ${r.loadingSlot}
                                      </div>
                                  `:""}${r.errorSlot?p`
                                      <div class="slot-wrapper" slot=${Ge.Error}>
                                          ${r.errorSlot}
                                      </div>
                                  `:""}
                        </${De}>
                    `}})})}}),yd=Se({title:_.tagName,parent:Oe,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:S.Color,initValue:_.cssVars["vira-input-text-color"].default},"Placeholder color":{controlType:S.Color,initValue:_.cssVars["vira-input-placeholder-color"].default},"Border color":{controlType:S.Color,initValue:_.cssVars["vira-input-border-color"].default},"Focus color":{controlType:S.Color,initValue:_.cssVars["vira-input-focus-border-color"].default},"Selection color":{controlType:S.Color,initValue:_.cssVars["vira-input-text-selection-color"].default}},elementExamplesCallback({defineExample:e}){function t({styles:r,title:n,inputs:o}){e({title:n,styles:m`
                    ${r||m``}
                `,stateInitStatic:{value:o.value},renderCallback({state:i,updateState:a,controls:s}){const l={[String(_.cssVars["vira-input-text-color"].name)]:s["Text color"],[String(_.cssVars["vira-input-placeholder-color"].name)]:s["Placeholder color"],[String(_.cssVars["vira-input-border-color"].name)]:s["Border color"],[String(_.cssVars["vira-input-focus-border-color"].name)]:s["Focus color"],[String(_.cssVars["vira-input-text-selection-color"].name)]:s["Selection color"]},c=he(l,(u,d)=>d||"inherit"),f=Object.entries(c).map(([u,d])=>[u,d].join(": ")+";").join(`
`);return p`
                        <${_.assign({...o,value:i.value})}
                            style=${f}
                            ${L(_.events.valueChange,u=>{a({value:u.detail})})}
                        ></${_}>
                    `}})}t({title:"basic",inputs:{value:"default value"}}),t({title:"with icon",inputs:{value:"",icon:ge}}),t({title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}}),t({title:"with suffix",inputs:{value:"42",suffix:"px"}}),t({title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}}),t({title:"disabled",inputs:{value:"disabled",disabled:!0}}),t({title:"numbers only",inputs:{value:"",allowedInputs:/\d/}}),t({title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}}),t({title:"custom width",styles:m`
                ${_} {
                    width: 120px;
                }
            `,inputs:{value:"",placeholder:"width",icon:ge}}),t({title:"taller height",styles:m`
                ${_} {
                    height: 48px;
                }
            `,inputs:{value:"",placeholder:"taller",icon:ge}}),t({title:"shorter height",styles:m`
                ${_} {
                    height: 26px;
                }
            `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:ge}}),t({title:"max width",styles:m`
                ${_} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42"}}),t({title:"fit text",styles:m`
                ${_} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42",fitText:!0}})}}),vd=Se({title:rt.tagName,parent:Oe,descriptionParagraphs:["Handles hyperlinks securely or route changes without harming right click functionality."],controls:{"CSS Color":{controlType:S.Color,initValue:""},"Hover color":{controlType:S.Color,initValue:""}},elementExamplesCallback({defineExample:e}){function t({title:r,inputs:n}){e({title:r,renderCallback({controls:o}){const i=m`
                        ${rt.cssVars["vira-link-hover-color"].name}: ${I(o["Hover color"]||"inherit")};
                        color: ${I(o["CSS Color"]||"inherit")};
                    `;return p`
                        <${rt.assign(n)}
                            style=${i}
                            ${L(rt.events.routeChange,a=>{console.info(a)})}
                        >
                            My Link
                        </${rt}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRoutesUrl(){return window.location.href}}}}})}}),$d=[Oe,pd,md,gd,bd,wd,yd,vd];mr({tagName:"vira-book-app",styles:m`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${Dr} {
            height: 100%;
            width: 100%;
        }

        h1 {
            margin: 0;
            margin-bottom: 16px;
            padding: 0;
            margin-left: 16px;
        }
    `,renderCallback(){return p`
            <${Dr.assign({internalRouterConfig:{basePath:vs("element-vir","vira"),useInternalRouter:!0},entries:$d,themeColor:"#33ccff"})}>
                <h1 slot=${oe.NavHeader}>Vira</h1>
            </${Dr}>
        `}});
