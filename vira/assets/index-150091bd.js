var Pa=Object.defineProperty;var Ra=(e,t,r)=>t in e?Pa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var pr=(e,t,r)=>(Ra(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();function Ba(e,t){return e.includes(t)}function xe(e){return!!e}function Na(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const Ha={capitalizeFirstLetter:!1};function Ia(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Oa(e,t){return t.capitalizeFirstLetter?Ia(e):e}function ja(e,t=Ha){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const i=o[1];return i?i.toUpperCase():""});return Oa(n,t)}var Fe;(function(e){e.Upper="upper",e.Lower="lower"})(Fe||(Fe={}));function za(e){return e.toLowerCase()!==e.toUpperCase()}function En(e,t,r){if(!e&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<e.length;n++){const o=e[n]||"";if(!za(o)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(t===Fe.Upper&&o!==o.toUpperCase())return!1;if(t===Fe.Lower&&o!==o.toLowerCase())return!1}return!0}function Da(e){return e.split("").reduce((r,n,o,i)=>{const a=o>0&&i[o-1]||"",s=o<i.length-1&&i[o+1]||"",l=En(a,Fe.Lower,{blockNoCaseCharacters:!0})||En(s,Fe.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function Va(e,t){return e.split(t)}var Cn;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Cn||(Cn={}));const Ua=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function G(e,t){return e?Ua.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function Uo(e,t){return e&&t.every(r=>G(e,r))}function Fo(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>qe(r).trim()).join(`
`))}function qe(e){return e?e instanceof Error?e.message:G(e,"message")?String(e.message):String(e):""}function Wo(e){return e instanceof Error?e:new Error(qe(e))}function Fa(e,t){const r=Wo(e);return r.message=`${t}: ${r.message}`,r}function Wa(e){try{const t=e.callback();return t instanceof Promise?t.catch(r=>e.catchCallback?e.catchCallback(r):e.fallbackValue):t}catch(t){return e.catchCallback?e.catchCallback(t):e.fallbackValue}}function Rr(e){return Array.isArray(e)?"array":typeof e}function j(e,t){return Rr(e)===t}function ae(e){return!!e&&typeof e=="object"}function U(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Yo(e,t,r=!1,n={}){const o=U(e),i=new Set(U(t));if(!r){const a=o.filter(s=>!i.has(s));if(a.length)throw new Error(`Test object has extra keys: ${a.join(", ")}`)}i.forEach(a=>{if(!G(e,a))throw new Error(`test object does not have key "${String(a)}" from expected shape.`);function s(d){throw new Error(`test object value at key "${String(a)}" did not match expected shape: ${d}`)}const l=e[a],c=t[a];n[a]||qo(l,c,s,r,n[a]??{})})}function qo(e,t,r,n,o){var s;const i=typeof e,a=typeof t;i!==a&&r(`type "${i}" did not match expected type "${a}"`);try{G(t,"constructor")&&(!G(e,"constructor")||e.constructor!==t.constructor)&&r(`constructor "${(s=e==null?void 0:e.constructor)==null?void 0:s.name}" did not match expected constructor "${t.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(t)?(Array.isArray(e)||r("expected an array"),e.forEach((l,c)=>{if(t.map(u=>{try{qo(l,u,r,n,o);return}catch(f){return new Error(`entry at index "${c}" did not match expected shape: ${qe(f)}`)}}).filter(xe).length===t.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${t.join(", ")}"`)})):ae(t)&&Yo(e,t,n,o)}function Sn({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const Mn="Failed to compare objects using JSON.stringify";function Tn(e,t,r){return Sn({source:e,errorHandler(n){if(r)return"";throw n}})===Sn({source:t,errorHandler(n){if(r)return"";throw n}})}function pe(e,t,r={}){try{return e===t?!0:ae(e)&&ae(t)?Tn(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>pe(e[o],t[o])):!1:Tn(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=Wo(n);throw o.message.startsWith(Mn)||(o.message=`${Mn}: ${o.message}`),o}}function Ya(e){return U(e).filter(t=>isNaN(Number(t)))}function qa(e){return Ya(e).map(r=>e[r])}function Ga(e,t){return qa(t).includes(e)}function Xa(e,t){return U(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function Za(e,t){return Xa(e,r=>!t.includes(r))}function Ja(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function fe(e,t){let r=!1;const n=U(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(r=!0),{...o,[i]:a}},{});return r?new Promise(async(o,i)=>{try{await Promise.all(U(n).map(async a=>{const s=await n[a];n[a]=s})),o(n)}catch(a){i(a)}}):n}function _n(e,t){try{return Go(e,t),!0}catch{return!1}}function Go(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function Zr(){let e,t,r=!1;const n=new Promise((o,i)=>{e=a=>(r=!0,o(a)),t=a=>{r=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Zr.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Br(e){const t=Zr();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}const Ka=globalThis.crypto;function Xo(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return Ka.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}function Qa({value:e,prefix:t}){return e.startsWith(t)?e.substring(t.length):e}function es(e){const t=Object.entries(e).map(([r,n])=>{if(n!=null)return`${r}=${String(n)}`}).filter(xe);return t.length?`?${t.join("&")}`:""}function ts(e){return Qa({value:e,prefix:"?"}).split("&").map(n=>{const[o,...i]=Va(n,"="),a=i.join("");if(!(!a&&!o))return[o,a]}).filter(xe)}function rs(e,t){const r=j(e,"string")?new URL(e):e,n=ts(r.search),o=Object.fromEntries(n);return t&&Yo(o,t),o}const ns="px";function Zo(e){return os({value:e,suffix:ns})}function os({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}const mr="://";function is(...e){const t=e.join("/"),[r,n=""]=t.includes(mr)?t.split(mr):["",t];let o=!1,i=!1;const a=n.replace(/\/{2,}/g,"/").split("/").map(s=>((s.includes("?")||o)&&(o=!0),s)).reduce((s,l,c,d)=>{if(i)return s;const u=d[c+1];let f=l;const h=!l.includes("?")&&(u==null?void 0:u.startsWith("?"));if(u!=null&&u.startsWith("?")||h){i=!0;let g=!1;const w=d.slice(h?c+2:c+1).reduce((k,y)=>(y.includes("#")&&(g=!0),g?k.concat(y):[k,y].join("&")),"");f=[l,u,w].join("")}return s.concat(f)},[]);return[r,r?mr:"",a.join("/")].join("")}function as(e,t){return G(e,"entryType")&&e.entryType===t}var I;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(I||(I={}));function Ie(e,t){return e.controlType===t}var C;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(C||(C={}));const Jo=Symbol("any-type"),ss={[C.Checkbox]:!1,[C.Color]:"",[C.Dropdown]:"",[C.Hidden]:Jo,[C.Number]:0,[C.Text]:""};function ls(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const i=ss[o.controlType];i!==Jo&&(typeof i!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof i} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function Jr(e,t){const r=Vt(e.title);return e.parent?[...Jr(e.parent,!1),Vt(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function Vt(e){return Na(e).toLowerCase().replaceAll(/\s/g,"-")}function cs({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function Ee(e){const t={...e,entryType:I.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:I.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(xe)};r.add(n.title),t.elementExamples[Vt(o.title)]=o}}),t}var ie;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(ie||(ie={}));async function Nr(e=1){const t=Zr();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}async function us(e){return ds(e,1)}async function ds(e,t){return new Promise(r=>{new IntersectionObserver((o,i)=>{Go(o,1),i.disconnect(),r(o[0].intersectionRatio>=t)}).observe(e)})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=globalThis,Kr=Nt.ShadowRoot&&(Nt.ShadyCSS===void 0||Nt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qr=Symbol(),Ln=new WeakMap;let Ko=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Qr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Kr&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Ln.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Ln.set(r,t))}return t}toString(){return this.cssText}};const H=e=>new Ko(typeof e=="string"?e:e+"",void 0,Qr),Ht=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new Ko(r,e,Qr)},fs=(e,t)=>{if(Kr)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),o=Nt.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)}},An=Kr?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return H(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:hs,defineProperty:ps,getOwnPropertyDescriptor:ms,getOwnPropertyNames:gs,getOwnPropertySymbols:bs,getPrototypeOf:ws}=Object,me=globalThis,Pn=me.trustedTypes,vs=Pn?Pn.emptyScript:"",gr=me.reactiveElementPolyfillSupport,ot=(e,t)=>e,Ut={toAttribute(e,t){switch(t){case Boolean:e=e?vs:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},en=(e,t)=>!hs(e,t),Rn={attribute:!0,type:String,converter:Ut,reflect:!1,hasChanged:en};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),me.litPropertyMetadata??(me.litPropertyMetadata=new WeakMap);let Ve=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Rn){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,r);o!==void 0&&ps(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){const{get:o,set:i}=ms(this.prototype,t)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return o==null?void 0:o.call(this)},set(a){const s=o==null?void 0:o.call(this);i.call(this,a),this.requestUpdate(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Rn}static _$Ei(){if(this.hasOwnProperty(ot("elementProperties")))return;const t=ws(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ot("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ot("properties"))){const r=this.properties,n=[...gs(r),...bs(r)];for(const o of n)this.createProperty(o,r[o])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,o]of r)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const o=this._$Eu(r,n);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(An(o))}else t!==void 0&&r.push(An(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$E_)==null||r.delete(t)}_$ES(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return fs(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r){var i;const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){const a=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:Ut).toAttribute(r,n.type);this._$Em=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(t,r){var i;const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const a=n.getPropertyOptions(o),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)==null?void 0:i.fromAttribute)!==void 0?a.converter:Ut;this._$Em=o,this[o]=s.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(t,r,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??en)(this[t],r))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,r,n){this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$Em!==t&&(this._$ET??(this._$ET=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,a]of o)a.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.C(i,this[i],a)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(n=this._$E_)==null||n.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(r)):this._$Ej()}catch(o){throw t=!1,this._$Ej(),o}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$E_)==null||r.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$ET&&(this._$ET=this._$ET.forEach(r=>this._$EO(r,this[r]))),this._$Ej()}updated(t){}firstUpdated(t){}};Ve.elementStyles=[],Ve.shadowRootOptions={mode:"open"},Ve[ot("elementProperties")]=new Map,Ve[ot("finalized")]=new Map,gr==null||gr({ReactiveElement:Ve}),(me.reactiveElementVersions??(me.reactiveElementVersions=[])).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it=globalThis,Ft=it.trustedTypes,Bn=Ft?Ft.createPolicy("lit-html",{createHTML:e=>e}):void 0,tn="$lit$",de=`lit$${(Math.random()+"").slice(9)}$`,rn="?"+de,ys=`<${rn}>`,Pe=document,lt=()=>Pe.createComment(""),ct=e=>e===null||typeof e!="object"&&typeof e!="function",Qo=Array.isArray,ei=e=>Qo(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",br=`[ 	
\f\r]`,Qe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Nn=/-->/g,Hn=/>/g,Ce=RegExp(`>|${br}(?:([^\\s"'>=/]+)(${br}*=${br}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),In=/'/g,On=/"/g,ti=/^(?:script|style|textarea|title)$/i,$s=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ks=$s(1),ne=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),jn=new WeakMap,Le=Pe.createTreeWalker(Pe,129);function ri(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Bn!==void 0?Bn.createHTML(t):t}const ni=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":"",a=Qe;for(let s=0;s<r;s++){const l=e[s];let c,d,u=-1,f=0;for(;f<l.length&&(a.lastIndex=f,d=a.exec(l),d!==null);)f=a.lastIndex,a===Qe?d[1]==="!--"?a=Nn:d[1]!==void 0?a=Hn:d[2]!==void 0?(ti.test(d[2])&&(o=RegExp("</"+d[2],"g")),a=Ce):d[3]!==void 0&&(a=Ce):a===Ce?d[0]===">"?(a=o??Qe,u=-1):d[1]===void 0?u=-2:(u=a.lastIndex-d[2].length,c=d[1],a=d[3]===void 0?Ce:d[3]==='"'?On:In):a===On||a===In?a=Ce:a===Nn||a===Hn?a=Qe:(a=Ce,o=void 0);const h=a===Ce&&e[s+1].startsWith("/>")?" ":"";i+=a===Qe?l+ys:u>=0?(n.push(c),l.slice(0,u)+tn+l.slice(u)+de+h):l+de+(u===-2?s:h)}return[ri(e,i+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class ut{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,a=0;const s=t.length-1,l=this.parts,[c,d]=ni(t,r);if(this.el=ut.createElement(c,n),Le.currentNode=this.el.content,r===2){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(o=Le.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes())for(const u of o.getAttributeNames())if(u.endsWith(tn)){const f=d[a++],h=o.getAttribute(u).split(de),g=/([.?@])?(.*)/.exec(f);l.push({type:1,index:i,name:g[2],strings:h,ctor:g[1]==="."?ii:g[1]==="?"?ai:g[1]==="@"?si:yt}),o.removeAttribute(u)}else u.startsWith(de)&&(l.push({type:6,index:i}),o.removeAttribute(u));if(ti.test(o.tagName)){const u=o.textContent.split(de),f=u.length-1;if(f>0){o.textContent=Ft?Ft.emptyScript:"";for(let h=0;h<f;h++)o.append(u[h],lt()),Le.nextNode(),l.push({type:2,index:++i});o.append(u[f],lt())}}}else if(o.nodeType===8)if(o.data===rn)l.push({type:2,index:i});else{let u=-1;for(;(u=o.data.indexOf(de,u+1))!==-1;)l.push({type:7,index:i}),u+=de.length-1}i++}}static createElement(t,r){const n=Pe.createElement("template");return n.innerHTML=t,n}}function Re(e,t,r=e,n){var a,s;if(t===ne)return t;let o=n!==void 0?(a=r._$Co)==null?void 0:a[n]:r._$Cl;const i=ct(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((s=o==null?void 0:o._$AO)==null||s.call(o,!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=o:r._$Cl=o),o!==void 0&&(t=Re(e,o._$AS(e,t.values),o,n)),t}class oi{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??Pe).importNode(r,!0);Le.currentNode=o;let i=Le.nextNode(),a=0,s=0,l=n[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new Ge(i,i.nextSibling,this,t):l.type===1?c=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(c=new li(i,this,t)),this._$AV.push(c),l=n[++s]}a!==(l==null?void 0:l.index)&&(i=Le.nextNode(),a++)}return Le.currentNode=Pe,o}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class Ge{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,n,o){this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Re(this,t,r),ct(t)?t===R||t==null||t===""?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==ne&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ei(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==R&&ct(this._$AH)?this._$AA.nextSibling.data=t:this.$(Pe.createTextNode(t)),this._$AH=t}g(t){var i;const{values:r,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=ut.createElement(ri(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(r);else{const a=new oi(o,this),s=a.u(this.options);a.p(r),this.$(s),this._$AH=a}}_$AC(t){let r=jn.get(t.strings);return r===void 0&&jn.set(t.strings,r=new ut(t)),r}T(t){Qo(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new Ge(this.k(lt()),this.k(lt()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class yt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,o,i){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=R}_$AI(t,r=this,n,o){const i=this.strings;let a=!1;if(i===void 0)t=Re(this,t,r,0),a=!ct(t)||t!==this._$AH&&t!==ne,a&&(this._$AH=t);else{const s=t;let l,c;for(t=i[0],l=0;l<i.length-1;l++)c=Re(this,s[n+l],r,l),c===ne&&(c=this._$AH[l]),a||(a=!ct(c)||c!==this._$AH[l]),c===R?t=R:t!==R&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}a&&!o&&this.O(t)}O(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ii extends yt{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===R?void 0:t}}class ai extends yt{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==R)}}class si extends yt{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){if((t=Re(this,t,r,0)??R)===ne)return;const n=this._$AH,o=t===R&&n!==R||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==R&&(n===R||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class li{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Re(this,t)}}const xs={j:tn,P:de,A:rn,C:1,M:ni,L:oi,R:ei,V:Re,D:Ge,I:yt,H:ai,N:si,U:ii,B:li},wr=it.litHtmlPolyfillSupport;wr==null||wr(ut,Ge),(it.litHtmlVersions??(it.litHtmlVersions=[])).push("3.1.1");const Es=(e,t,r)=>{const n=(r==null?void 0:r.renderBefore)??t;let o=n._$litPart$;if(o===void 0){const i=(r==null?void 0:r.renderBefore)??null;n._$litPart$=o=new Ge(t.insertBefore(lt(),i),i,void 0,r??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let at=class extends Ve{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Es(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return ne}};var Vo;at._$litElement$=!0,at.finalized=!0,(Vo=globalThis.litElementHydrateSupport)==null||Vo.call(globalThis,{LitElement:at});const vr=globalThis.litElementPolyfillSupport;vr==null||vr({LitElement:at});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.3");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{D:Cs}=xs,zn=()=>document.createComment(""),et=(e,t,r)=>{var i;const n=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(r===void 0){const a=n.insertBefore(zn(),o),s=n.insertBefore(zn(),o);r=new Cs(a,s,e,e.options)}else{const a=r._$AB.nextSibling,s=r._$AM,l=s!==e;if(l){let c;(i=r._$AQ)==null||i.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==s._$AU&&r._$AP(c)}if(a!==o||l){let c=r._$AA;for(;c!==a;){const d=c.nextSibling;n.insertBefore(c,o),c=d}}}return r},Se=(e,t,r=e)=>(e._$AI(t,r),e),Ss={},Ms=(e,t=Ss)=>e._$AH=t,Ts=e=>e._$AH,yr=e=>{var n;(n=e._$AP)==null||n.call(e,!1,!0);let t=e._$AA;const r=e._$AB.nextSibling;for(;t!==r;){const o=t.nextSibling;t.remove(),t=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const or={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Xe=e=>(...t)=>({_$litDirective$:e,values:t});class Be{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _s={attribute:!0,type:String,converter:Ut,reflect:!1,hasChanged:en},Ls=(e=_s,t,r)=>{const{kind:n,metadata:o}=r;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(r.name,e),n==="accessor"){const{name:a}=r;return{set(s){const l=t.get.call(this);t.set.call(this,s),this.requestUpdate(a,l,e)},init(s){return s!==void 0&&this.C(a,void 0,e),s}}}if(n==="setter"){const{name:a}=r;return function(s){const l=this[a];t.call(this,s),this.requestUpdate(a,l,e)}}throw Error("Unsupported decorator location: "+n)};function As(e){return(t,r)=>typeof r=="object"?Ls(e,t,r):((n,o,i)=>{const a=o.hasOwnProperty(i);return o.constructor.createProperty(i,a?{...n,wrapped:!0}:n),a?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,r)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ci=Xe(class extends Be{constructor(e){var t;if(super(e),e.type!==or.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,o;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((n=this.st)!=null&&n.has(i))&&this.it.add(i);return this.render(t)}const r=e.element.classList;for(const i of this.it)i in t||(r.remove(i),this.it.delete(i));for(const i in t){const a=!!t[i];a===this.it.has(i)||(o=this.st)!=null&&o.has(i)||(a?(r.add(i),this.it.add(i)):(r.remove(i),this.it.delete(i)))}return ne}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Hr extends Be{constructor(t){if(super(t),this.et=R,t.type!==or.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===R||t==null)return this.vt=void 0,this.et=t;if(t===ne)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;const r=[t];return r.raw=r,this.vt={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Hr.directiveName="unsafeHTML",Hr.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Dn extends Hr{}Dn.directiveName="unsafeSVG",Dn.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ps(e,t,r){return e?t(e):r==null?void 0:r(e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vn=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},Rs=Xe(class extends Be{constructor(e){if(super(e),e.type!==or.CHILD)throw Error("repeat() can only be used in text expressions")}ht(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],i=[];let a=0;for(const s of e)o[a]=n?n(s,a):a,i[a]=r(s,a),a++;return{values:i,keys:o}}render(e,t,r){return this.ht(e,t,r).values}update(e,[t,r,n]){const o=Ts(e),{values:i,keys:a}=this.ht(t,r,n);if(!Array.isArray(o))return this.dt=a,i;const s=this.dt??(this.dt=[]),l=[];let c,d,u=0,f=o.length-1,h=0,g=i.length-1;for(;u<=f&&h<=g;)if(o[u]===null)u++;else if(o[f]===null)f--;else if(s[u]===a[h])l[h]=Se(o[u],i[h]),u++,h++;else if(s[f]===a[g])l[g]=Se(o[f],i[g]),f--,g--;else if(s[u]===a[g])l[g]=Se(o[u],i[g]),et(e,l[g+1],o[u]),u++,g--;else if(s[f]===a[h])l[h]=Se(o[f],i[h]),et(e,o[u],o[f]),f--,h++;else if(c===void 0&&(c=Vn(a,h,g),d=Vn(s,u,f)),c.has(s[u]))if(c.has(s[f])){const w=d.get(a[h]),k=w!==void 0?o[w]:null;if(k===null){const y=et(e,o[u]);Se(y,i[h]),l[h]=y}else l[h]=Se(k,i[h]),et(e,o[u],k),o[w]=null;h++}else yr(o[f]),f--;else yr(o[u]),u++;for(;h<=g;){const w=et(e,l[g+1]);Se(w,i[h]),l[h++]=w}for(;u<=f;){const w=o[u++];w!==null&&yr(w)}return this.dt=a,Ms(e,l),ne}}),Bs=Rs;class ui extends at{}function Ne(e){if(ae(e))return fe(e,(r,n)=>{if(!j(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Da(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const i=n,a=r.startsWith("--")?H(r):r.startsWith("-")?Ht`-${H(r)}`:Ht`--${H(r)}`;return{name:a,value:Ht`var(${a}, ${H(i)})`,default:String(i)}});throw new Error(`Invalid setup input for '${Ne.name}' function.`)}function Ns({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}function Hs(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(s=>!!s.index).length;if(n||o)return[...e];const i=e.map(s=>[s]);return i.length||(i[0]=[]),r.forEach(s=>{s>=0&&s<e.length&&(i[s]=[])}),t.forEach(s=>{const l=i[s.index];l&&l.splice(0,0,...s.values)}),i.flat()}function It(e){return G(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function nn(e){return G(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function di(e){return e.map(t=>It(t)?t.definition:t).filter(t=>nn(t))}const fi=new WeakMap;function Is(e,t){var o;const r=di(t);return(o=hi(fi,[e,...r]).value)==null?void 0:o.template}function Os(e,t,r){const n=di(t);return mi(fi,[e,...n],r)}function hi(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=pi(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?hi(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function pi(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function mi(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:i,reason:a}=pi(e,t,n);if(!i)return{result:!1,reason:a};const s=o??{nested:void 0,template:void 0};if(o||e.set(i,s),n===t.length-1)return s.template=r,{result:!0,reason:"set value at end of keys array"};const l=s.nested??new WeakMap;return s.nested||(s.nested=l),mi(l,t,r,n+1)}const js=new WeakMap;function gi(e,t,r){const n=Is(e,t),o=n??r();if(!n){const s=Os(e,t,o);if(s.result)js.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const i=o.valuesTransform(t),a=Hs(t,i.valueInsertions,i.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function bi(e,t,r,n){const o=[],i=[],a=[],s=[];return e.forEach((c,d)=>{const u=o.length-1,f=o[u],h=d-1,g=t[h];n&&n(c);let w,k=[];if(typeof f=="string"&&(w=r(f,c,g),w)){o[u]=f+w.replacement,a.push(h);const M=w.getExtraValues;k=M?M(g):[],k.length&&M?(o[u]+=" ",k.forEach((P,A)=>{A&&o.push(" ")}),s.push(P=>{const A=P[h],z=M(A);return{index:h,values:z}}),o.push(c)):o[u]+=c}w||o.push(c);const y=e.raw[d];w?(i[u]=i[u]+w.replacement+y,k.length&&k.forEach(()=>{i.push("")})):i.push(y)}),{templateStrings:Object.assign([],o,{raw:i}),valuesTransform(c){const d=s.map(u=>u(c)).flat();return{valueIndexDeletions:a,valueInsertions:d}}}}function zs(...[e,t,r]){if(nn(r))return{replacement:r.tagName,getExtraValues:void 0}}function Ds(e,t){return bi(e,t,zs)}function m(e,...t){const r=gi(e,t,()=>Ds(e,t));return Ht(r.strings,...r.values)}const Vs={ignoreUnsetInputs:!0,allowPolymorphicState:!1};function wi(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof ui?!0:wi(r)}function vi(e,t){const r=e.instanceState;U(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&U(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),Us(e)}function Us(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function Un(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class Fs extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:""})}}function on(){return e=>{var t;return t=class extends Fs{constructor(r){super(e,r),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:e})}},Object.defineProperty(t,"type",{enumerable:!0,configurable:!0,writable:!0,value:e}),t}}function he(){return on()}function Ws(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new Error(`Expected event key of type string but got type "${typeof r}" for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const o=on()([e,n].join("-"));return r[n]=o,r},{}):{}}const Ys="_elementVirStateSetup";function qs(e){return ae(e)?Ys in e:!1}function Gs(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return Rr(e)===Rr(t)&&r}const yi=Symbol("and"),$i=Symbol("or"),ki=Symbol("exact"),xi=Symbol("enum"),an=Symbol("unknown"),Ei="__vir__shape__definition__key__do__not__use__in__actual__objects";function Ci(e){return G(e,Ei)}const Si="__vir__shape__specifier__key__do__not__use__in__actual__objects",Xs=[yi,$i,ki,xi,an];function Zs(){return Js([],an)}function ir(e){return $t(e,$i)}function sn(e){return $t(e,yi)}function ln(e){return $t(e,ki)}function cn(e){return $t(e,xi)}function un(e){return $t(e,an)}function $t(e,t){const r=ar(e);return!!r&&r.specifierType===t}function Js(e,t){return{[Si]:!0,specifierType:t,parts:e}}function Ot(e,t){const r=ar(t);if(r){if(sn(r))return r.parts.every(n=>Ot(e,n));if(ir(r))return r.parts.some(n=>Ot(e,n));if(ln(r))return ae(e)?Ot(e,r.parts[0]):e===r.parts[0];if(cn(r))return Object.values(r.parts[0]).some(n=>n===e);if(un(r))return!0}return Gs(e,t)}function ar(e){if(ae(e)&&G(e,Si)){if(!G(e,"parts")||!j(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!G(e,"specifierType")||!Ba(Xs,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function Ir(e,t=!1){return jt(e)}function jt(e){const t=ar(e);if(t){if(ir(t)||ln(t))return jt(t.parts[0]);if(sn(t))return t.parts.reduce((r,n)=>Object.assign(r,jt(n)),{});if(cn(t))return Object.values(t.parts[0])[0];if(un(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return Ci(e)?Ir(e.shape):e instanceof RegExp?e:j(e,"array")?e.map(jt):ae(e)?fe(e,(r,n)=>Ir(n)):e}function Ks(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,defaultValue:Ir(e),[Ei]:!0}}class te extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function Qs(e,t,r={}){try{return el(e,t,r),!0}catch{return!1}}function el(e,t,r={}){Te(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function Mi(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function Te(e,t,r,n){if(un(t))return!0;if(Ci(t))return Te(e,t.shape,r,n);const o=Mi(r);if(ar(e))throw new te(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!Ot(e,t))throw new te(`Subject does not match shape definition at key ${o}`);if(j(t,"function"))return j(e,"function");if(ae(e)){const a=e,s=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(c=>[c,!1]));let l=!1;if(ir(t))l=t.parts.some(c=>{try{const d=Te(e,c,r,{...n});return Object.assign(s,d),!0}catch(d){if(d instanceof te)return!1;throw d}});else if(sn(t))l=t.parts.every(c=>{try{const d=Te(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(s,d),!0}catch(d){if(d instanceof te)return!1;throw d}});else if(ln(t)){const c=Te(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(s,c),l=!0}else{if(cn(t))throw new te(`Cannot compare an enum specifier to an object at ${o}`);if(j(t,"array")&&j(a,"array"))l=a.every((c,d)=>{const u=t.some(f=>{try{return Te(c,f,[...r,d],n),!0}catch(h){if(h instanceof te)return!1;throw h}});return s[d]=u,u});else{const c=tl({keys:r,options:n,shape:t,subject:e});Object.assign(s,c),l=!0}}if(!l){const d=`Failed on key(s): ${Object.keys(s).filter(u=>!s[u]).join(",")}`;throw new te(d)}return n.ignoreExtraKeys||Object.entries(s).forEach(([c,d])=>{if(!d)throw new te(`subject as extra key '${c}' in ${o}.`)}),s}else if(n.exactValues)return e===t;return!0}function tl({keys:e,options:t,shape:r,subject:n}){const o=Mi(e),i={};if(ae(r)){const a=new Set(U(n)),s=new Set(U(r));t.ignoreExtraKeys||a.forEach(l=>{if(!s.has(l))throw new te(`Subject has extra key '${String(l)}' in ${o}`)}),s.forEach(l=>{var f;const c=r[l],d=ir(c)?c.parts.includes(void 0):!1,u=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!a.has(l)&&!d&&!u)throw new te(`Subject missing key '${String(l)}' in ${o}`)}),a.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!s.has(l))return;const d=r[l];Te(c,d,[...e,l],t),i[l]=!0})}else throw new te(`shape definition at ${o} was not an object.`);return i}const rl=Ks({addListener(){return()=>!1},removeListener(){return!1},destroy(){},value:Zs()});function $r(e){return Qs(e,rl,{allowExtraKeys:!0})}function Ti(e,t){t in e||As()(e,t)}function nl(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function Fn(e,t){const r=e;function n(a){t?nl(a,e,e.tagName):Ti(e,a)}function o(a,s){return n(s),r[s]}return new Proxy({},{get:o,set(a,s,l){const c=qs(l)?l._elementVirStateSetup():l;n(s);const d=r[s];function u(g){a[s]=g,r[s]=g}const f=e.observablePropertyListenerMap[s];if(d!==c&&$r(d)&&(f!=null&&f.length)&&d.removeListener(f),$r(c))if(f)c.addListener(f);else{let g=function(){e.requestUpdate()};var h=g;e.observablePropertyListenerMap[s]=g,c.addListener(g)}else $r(d)&&(e.observablePropertyListenerMap[s]=void 0);return u(c),!0},ownKeys(a){return Reflect.ownKeys(a)},getOwnPropertyDescriptor(a,s){if(s in a)return{get value(){return o(a,s)},configurable:!0,enumerable:!0}},has(a,s){return Reflect.has(a,s)}})}function ol(e){return e?fe(e,t=>t):{}}function il({hostClassNames:e,cssVars:t}){return{hostClasses:fe(e,(r,n)=>({name:H(n),selector:H(`:host(.${n})`)})),cssVars:t}}function al({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&U(t).forEach(i=>{const a=t[i],s=r[i];typeof a=="function"&&(a({state:n,inputs:o})?e.classList.add(s):e.classList.remove(s))})}function sl({element:e,eventsMap:t,cssVars:r,slotNamesMap:n}){function o(a){U(a).forEach(s=>{const l=a[s];e.instanceState[s]=l})}return{cssVars:r,slotNames:n,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:o}}function ll(e){return e?e.reduce((r,n)=>(r[n]=n,r),{}):{}}var cl=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function sr(e){var t;const r=e;if(!j(r,"object"))throw new Error("Cannot define element with non-object init: ${init}");if(!j(r.tagName,"string"))throw new Error("Missing valid tagName (expected a string).");if(!r.renderCallback||typeof r.renderCallback=="string")throw new Error(`Failed to define element '${r.tagName}': renderCallback is not a function`);const n={...Vs,...r.options},o=Ws(r.tagName,r.events),i=ol(r.hostClasses);r.hostClasses&&Un(r.tagName,r.hostClasses),r.cssVars&&Un(r.tagName,r.cssVars);const a=r.cssVars?Ne(r.cssVars):{},s=ll(r.slotNames),l=typeof r.styles=="function"?r.styles(il({hostClassNames:i,cssVars:a})):r.styles||m``,c=r.renderCallback;function d(...[f]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:u,inputs:f}}const u=(t=class extends ui{createRenderParams(){return sl({element:this,eventsMap:o,cssVars:a,slotNamesMap:s})}get instanceType(){throw new Error(`"instanceType" was called on ${r.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${r.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${r.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{wi(this)&&!this._haveInputsBeenSet&&!n.ignoreUnsetInputs&&console.warn(this,`${r.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${sr.name}' to define ${r.tagName}.`),this._hasRendered=!0;const f=this.createRenderParams();if(!this._initCalled&&r.initCallback&&(this._initCalled=!0,r.initCallback(f)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const h=c(f);if(h instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return al({host:f.host,hostClassesInit:r.hostClasses,hostClassNames:i,state:f.state,inputs:f.inputs}),this._lastRenderedProps={inputs:{...f.inputs},state:{...f.state}},h}catch(f){const h=Fa(f,`Failed to render ${r.tagName}`);return this._lastRenderError=h,qe(h)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&r.initCallback){this._initCalled=!0;const f=this.createRenderParams();if(r.initCallback(f)instanceof Promise)throw new Error(`initCallback in '${r.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),r.cleanupCallback){const f=this.createRenderParams();if(r.cleanupCallback(f)instanceof Promise)throw new Error(`cleanupCallback in '${r.tagName}' cannot be asynchronous`)}this._initCalled=!1}assignInputs(f){vi(this,f)}constructor(){super(),Object.defineProperty(this,"_lastRenderError",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_internalRenderCount",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_initCalled",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_hasRendered",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_lastRenderedProps",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_haveInputsBeenSet",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"definition",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"observablePropertyListenerMap",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"instanceInputs",{enumerable:!0,configurable:!0,writable:!0,value:Fn(this,!1)}),Object.defineProperty(this,"instanceState",{enumerable:!0,configurable:!0,writable:!0,value:Fn(this,!n.allowPolymorphicState)});const f=r.stateInitStatic||{};U(f).forEach(h=>{Ti(this,h),this.instanceState[h]=f[h]}),this.definition=u}},cl(t,"anonymousClass"),Object.defineProperty(t,"elementOptions",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(t,"tagName",{enumerable:!0,configurable:!0,writable:!0,value:r.tagName}),Object.defineProperty(t,"styles",{enumerable:!0,configurable:!0,writable:!0,value:l}),Object.defineProperty(t,"assign",{enumerable:!0,configurable:!0,writable:!0,value:d}),Object.defineProperty(t,"isStrictInstance",{enumerable:!0,configurable:!0,writable:!0,value:()=>!1}),Object.defineProperty(t,"events",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(t,"renderCallback",{enumerable:!0,configurable:!0,writable:!0,value:c}),Object.defineProperty(t,"hostClasses",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(t,"cssVars",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(t,"init",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(t,"slotNames",{enumerable:!0,configurable:!0,writable:!0,value:s}),Object.defineProperty(t,"stateInitStatic",{enumerable:!0,configurable:!0,writable:!0,value:r.stateInitStatic}),t);return Object.defineProperties(u,{name:{value:ja(r.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:f=>f instanceof u,writable:!1}}),window.customElements.get(r.tagName)?console.warn(`Tried to define custom element '${r.tagName}' but it is already defined.`):window.customElements.define(r.tagName,u),u}function _i(){return e=>{const t=e;if(!j(t,"object"))throw new Error("Cannot define element with non-object init: ${init}");return sr({...t,options:{ignoreUnsetInputs:!1,...t.options}})}}function Li(e,t){return dt(e,t),e.element}function ul(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function dt(e,t){const r=ul(e),n=r?`: in ${r}`:"";if(e.type!==or.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function L(e,t){return dl(e,t)}const dl=Xe(class extends Be{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastListenerMetaData",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=Li(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),ne}}),Wn="onDomCreated",Yn=Xe(class extends Be{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),dt(e,Wn)}update(e,[t]){dt(e,Wn);const r=e.element;return r!==this.element&&(requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),kr="onResize",Ai=Xe(class extends Be{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"resizeObserver",{enumerable:!0,configurable:!0,writable:!0,value:new ResizeObserver(t=>this.fireCallback(t))}),Object.defineProperty(this,"callback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),dt(e,kr)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${kr} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){dt(e,kr),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function J(e,t,r){return Ps(e,()=>t,()=>r)}function Pi(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),_i()(r(n))),defineElementNoInputs:n=>(t(n),sr(r(n)))}}function fl(e,t){return t?qn(e,t):qn(void 0,e)}const qn=Xe(class extends Be{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=Li(e,"assign")}render(e,t){return vi(this.element,t),ne}});function hl(...[e,t,r]){const n=It(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),i=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),a=o||i,s=nn(n);if(a&&!s)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);if(!a||!s)return;if(o&&!n.elementOptions.ignoreUnsetInputs&&!It(r))throw new Error(`Missing inputs for '${n.tagName}'`);return{replacement:n.tagName,getExtraValues(c){const d=It(c)?c.inputs:void 0;return[o&&d?fl(d):void 0].filter(xe)}}}function pl(e){}function ml(e){return bi(e.strings,e.values,hl,pl)}function p(e,...t){const r=ks(e,...t),n=gi(e,t,()=>ml(r));return{...r,strings:n.strings,values:n.values}}const gl={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},bl=Object.keys(gl),wl=["a","animate","animateMotion","animateTransform","audio","canvas","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","iframe","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","unknown","use","video","view"];[...bl,...wl];function rt(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}const vl={[I.ElementExample]:()=>[],[I.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...ls(e.controls,e.title)].filter(xe),[I.Root]:()=>[]},Wt="_isBookTreeNode",Ri=new Map;function yl(e){return Ri.get(e)}function $l(e,t){Ja(Ri,e,()=>t)}function Ue(e,t){return!!(Bi(e)&&e.entry.entryType===t)}function Bi(e){return!!(Uo(e,[Wt,"entry"])&&e[Wt])}function kl(){return{[Wt]:!0,entry:{entryType:I.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function xl({entries:e,debug:t}){const r=yl(e);if(r)return r;const n=kl();e.forEach(a=>dn({tree:n,newEntry:a,debug:t,manuallyAdded:!0}));const o=Ni(n),i={tree:n,flattenedNodes:o};return $l(e,i),t&&console.info("element-book tree:",n),i}function El(e,t,r){if(!t.parent)return e;const n=Or(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),dn({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Or(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${Jr(t,!1)}`);return o}function dn({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=vl[t.entryType](t);t.errors.push(...o);const i=El(e,t,r),a=Vt(t.title),s=i.children[a];if(s){if(n){if(s.manuallyAdded){s.entry.errors.push(new Error(`Cannot create duplicate '${a}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}s.manuallyAdded=!0}return}const l={[Wt]:!0,children:{},urlBreadcrumb:a,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,a],entry:t,manuallyAdded:n};i.children[a]=l,as(t,I.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>dn({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function Or(e,t){const r=Bi(e)?e.fullUrlBreadcrumbs.slice(0,-1):Jr(e,!1);return r.length?r.reduce((o,i)=>{if(o)return o.children[i]},t):void 0}function Ni(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Ni(o));return[e,...r].flat()}function fn(e,t){return hn(e,["",...t],void 0)}function hn(e,t,r){const n=t.slice(1),o=n[0];!o&&r&&(e.controls=r);const i=e.children[o||""],a=i&&hn(i,n,r);return{...e.controls,...a}}function Cl(e,t,r){const n={...e};return hn(n,["",...t],r),n}function Hi(e,t){const r=(t==null?void 0:t.controls)||(Ue(e,I.Page)?fe(e.entry.controls,(o,i)=>i.initValue):{});return{children:fe(e.children,(o,i)=>{var a;return Hi(i,(a=t==null?void 0:t.children)==null?void 0:a[i.urlBreadcrumb])}),controls:r}}function Sl({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),i=e.toLowerCase();e:for(let a=0,s=0;a<n;a++){const l=i.charCodeAt(a);for(;s<r;)if(o.charCodeAt(s++)===l)continue e;return!1}return!0}const Ml=Xo(32);function zt(e){return e.join(Ml)}function Ii(e){if(!e.length)return[];const t=zt(e),r=Ii(e.slice(0,-1));return[t,...r]}const Tl=["error","errors"];function _l(e){return Tl.includes(e)}function Ll({flattenedNodes:e,searchQuery:t}){const r={};function n(o){Object.values(o.children).map(a=>(n(a),zt(a.fullUrlBreadcrumbs))).forEach(a=>r[a]=!0)}return e.forEach(o=>{const i=o.entry.errors.length&&_l(t),a=zt(o.fullUrlBreadcrumbs);if(Sl({searchIn:[o.entry.title,...o.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||i||r[a]){const l=Ii(o.fullUrlBreadcrumbs);n(o),l.forEach(c=>r[c]=!0)}else r[a]=!1}),e.filter(o=>{const i=zt(o.fullUrlBreadcrumbs),a=r[i];if(!j(a,"boolean"))throw new Error(`Failed to find '${o.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}var V;(function(e){e.Search="search",e.Book="book"})(V||(V={}));function jr(e){return e[0]===V.Book?"":e[1]?decodeURIComponent(e[1]):""}const We={hash:void 0,paths:[V.Book],search:void 0},Al=0;function Oi(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Al)}class lr extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class Gn extends lr{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const ft="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Pl=globalThis.history.pushState;function Xn(...e){const t=Pl.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(ft)),t}const Rl=globalThis.history.replaceState;function Zn(...e){const t=Rl.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(ft)),t}function Bl(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===Xn)throw new Gn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Zn)throw new Gn("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Xn,globalThis.history.replaceState=Zn,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(ft))})}}function Nl(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(a=>!!a),o=globalThis.location.search?rs(globalThis.location.toString()):void 0,i=globalThis.location.hash||void 0;return{paths:n,search:o,hash:i}}function ji(e){return e.replace(/(?:^\/|\/+$)/g,"")}function zi({routeBase:e,windowPath:t}){if(!e)return"";const r=ji(e);if(Di({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?zi({routeBase:n,windowPath:t}):""}function Di({routeBase:e,windowPath:t}){const r=ji(e);return r?t.startsWith(`/${r}`):!1}class Hl extends lr{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function Vi(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const Jn=6;function Kn(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>Jn)throw new Hl(`Route sanitization depth has exceed the max of ${Jn} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(Vi(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class xr extends lr{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function Il(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new xr(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new xr(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new xr(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function Ol(e,t,r=!1){const n=Ui(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function Ui(e,t){var s;const r=Di({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?es(e.search):"",o=(s=e.hash)!=null&&s.startsWith("#")?"":"#",i=e.hash?`${o}${e.hash}`:"";return`/${[r,...e.paths].filter(xe).join("/")}${n}${i}`}function jl(e={}){Il(e),Bl();const t=e.routeBase?zi({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>Kn(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(i){const a={hash:void 0,search:void 0,...i};return e.routeSanitizer?e.routeSanitizer(a):a},setRoutes(i,a=!1,s=!1){const l=o.getCurrentRawRoutes(),c={...l,...i},d=o.sanitizeFullRoute(c);if(!(!s&&Vi(l,d)))return Ol(d,t,a)},createRoutesUrl(i){return Ui(i,t)},getCurrentRawRoutes(){return Nl(t)},removeAllRouteListeners(){o.listeners.forEach(i=>o.removeRouteListener(i))},addRouteListener(i,a){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new lr(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(a),r||(globalThis.addEventListener(ft,n),r=!0),i&&Kn(o,a),a},hasRouteListener(i){return o.listeners.has(i)},removeRouteListener(i){const a=o.listeners.delete(i);return o.listeners.size||(globalThis.removeEventListener(ft,n),r=!1),a},sanitizationDepth:0};return o}function zl(e){return jl({routeBase:e,routeSanitizer(t){return{paths:Dl(t.paths),hash:void 0,search:void 0}}})}function Dl(e){const t=e[0];if(Ga(t,V)){if(t===V.Book)return[V.Book,...e.slice(1)];if(t===V.Search)return e[1]?[t,e[1]]:[V.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return We.paths}const x=Ne({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Vl={nav:{hover:{background:x["element-book-nav-hover-background-color"],foreground:x["element-book-nav-hover-foreground-color"]},active:{background:x["element-book-nav-active-background-color"],foreground:x["element-book-nav-active-foreground-color"]},selected:{background:x["element-book-nav-selected-background-color"],foreground:x["element-book-nav-selected-foreground-color"]}},accent:{icon:x["element-book-accent-icon-color"]},page:{background:x["element-book-page-background-color"],backgroundFaint1:x["element-book-page-background-faint-level-1-color"],backgroundFaint2:x["element-book-page-background-faint-level-2-color"],foreground:x["element-book-page-foreground-color"],foregroundFaint1:x["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:x["element-book-page-foreground-faint-level-2-color"]}};function Ul(e,t){Fi(e,t,Vl)}function zr(e){return G(e,"_$cssResult$")}function Qn(e){return Uo(e,["name","value","default"])&&j(e.default,"string")&&zr(e.name)&&zr(e.value)}function Fi(e,t,r){Object.entries(t).forEach(([n,o])=>{const i=r[n];if(!i)throw new Error(`no nestedCssVar at key '${n}'`);if(zr(o)){if(!Qn(i))throw new Error(`got a CSS result at '${n}' but no CSS var`);Ns({forCssVar:i,onElement:e,toValue:String(o)})}else{if(Qn(i))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Fi(e,o,i)}})}function B(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(a=>[a]));let n=t[0].length,o=t[0].map((a,s)=>t.map(l=>l[s])),i=e.map(a=>o.map(s=>{let l=0;if(!Array.isArray(a)){for(let c of s)l+=a*c;return l}for(let c=0;c<a.length;c++)l+=a[c]*(s[c]||0);return l}));return r===1&&(i=i[0]),n===1?i.map(a=>a[0]):i}function kt(e){return ge(e)==="string"}function ge(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Yt(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function Wi(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(i,a)=>{/%$/.test(a)?(a=new Number(a.slice(0,-1)/100),a.type="<percentage>"):/deg$/.test(a)?(a=new Number(+a.slice(0,-3)),a.type="<angle>",a.unit="deg"):r.test(a)&&(a=new Number(a),a.type="<number>"),i.startsWith("/")&&(a=a instanceof Number?a:new Number(a),a.alpha=!0),o.push(a)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function Yi(e){return e[e.length-1]}function qt(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function qi(e,t,r){return(r-e)/(t-e)}function pn(e,t,r){return qt(t[0],t[1],qi(e[0],e[1],r))}function Gi(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var Fl=Object.freeze({__proto__:null,interpolate:qt,interpolateInv:qi,isString:kt,last:Yi,mapRange:pn,multiplyMatrices:B,parseCoordGrammar:Gi,parseFunction:Wi,toPrecision:Yt,type:ge});class Wl{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const we=new Wl;var se={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const re={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Dr(e){return Array.isArray(e)?e:re[e]}function Gt(e,t,r,n={}){if(e=Dr(e),t=Dr(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(we.run("chromatic-adaptation-start",o),o.M||(o.W1===re.D65&&o.W2===re.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===re.D50&&o.W2===re.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),we.run("chromatic-adaptation-end",o),o.M)return B(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const Yl=75e-6,Y=class Y{constructor(t){var o,i,a;this.id=t.id,this.name=t.name,this.base=t.base?Y.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let s in r)"name"in r[s]||(r[s].name=s);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Dr(n),this.formats=t.formats??{};for(let s in this.formats){let l=this.formats[s];l.type||(l.type="function"),l.name||(l.name=s)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(i=this.formats)!=null&&i.color&&!((a=this.formats)!=null&&a.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:ql(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),we.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Yl}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,i)=>{let a=n[i];if(a.type!=="angle"&&a.range){if(Number.isNaN(o))return!0;let[s,l]=a.range;return(s===void 0||o>=s-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=eo(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=eo(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=Y.get(t),this.equals(t))return r;r=r.map(s=>Number.isNaN(s)?0:s);let n=this.path,o=t.path,i,a;for(let s=0;s<n.length&&n[s].equals(o[s]);s++)i=n[s],a=s;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let s=n.length-1;s>a;s--)r=n[s].toBase(r);for(let s=a+1;s<o.length;s++)r=o[s].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=Y.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(Y.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof Y)return t;if(ge(t)==="string"){let o=Y.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return Y.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=ge(t),o,i;if(n==="string"?t.includes(".")?[o,i]=t.split("."):[o,i]=[,t]:Array.isArray(t)?[o,i]=t:(o=t.space,i=t.coordId),o=Y.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=ge(i),n==="number"||n==="string"&&i>=0){let c=Object.entries(o.coords)[i];if(c)return{space:o,id:c[0],index:i,...c[1]}}o=Y.get(o);let a=i.toLowerCase(),s=0;for(let c in o.coords){let d=o.coords[c];if(c.toLowerCase()===a||((l=d.name)==null?void 0:l.toLowerCase())===a)return{space:o,id:c,index:s,...d};s++}throw new TypeError(`No "${i}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};pr(Y,"registry",{}),pr(Y,"DEFAULT_FORMAT",{type:"functions",name:"color"});let b=Y;function ql(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function eo(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Gi(e.coords);let r=Object.entries(t).map(([n,o],i)=>{let a=e.coordGrammar[i][0],s=o.range||o.refRange,l=a.range,c="";return a=="<percentage>"?(l=[0,100],c="%"):a=="<angle>"&&(c="deg"),{fromRange:s,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((i,a)=>{let{fromRange:s,toRange:l,suffix:c}=r[a];return s&&l&&(i=pn(s,l,i)),i=Yt(i,o),c&&(i+=c),i})}return e}var K=new b({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class F extends b{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=K),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=B(t.toXYZ_M,r);return this.white!==this.base.white&&(n=Gt(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=Gt(this.base.white,this.white,r),B(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function Xi(e,{meta:t}={}){var n,o,i,a,s;let r={str:(n=String(e))==null?void 0:n.trim()};if(we.run("parse-start",r),r.color)return r.color;if(r.parsed=Wi(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),d=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let f of b.all){let h=f.getFormat("color");if(h&&(c===h.id||(o=h.ids)!=null&&o.includes(c))){const g=Object.keys(f.coords).map((w,k)=>r.parsed.args[k]||0);return t&&(t.formatId="color"),{spaceId:f.id,coords:g,alpha:d}}}let u="";if(c in b.registry){let f=(s=(a=(i=b.registry[c].formats)==null?void 0:i.functions)==null?void 0:a.color)==null?void 0:s.id;f&&(u=`Did you mean color(${f})?`)}throw new TypeError(`Cannot parse color(${c}). `+(u||"Missing a plugin?"))}else for(let c of b.all){let d=c.getFormat(l);if(d&&d.type==="function"){let u=1;(d.lastAlpha||Yi(r.parsed.args).alpha)&&(u=r.parsed.args.pop());let f=r.parsed.args,h;return d.coordGrammar&&(h=Object.entries(c.coords).map(([g,w],k)=>{var oe;let y=d.coordGrammar[k],M=(oe=f[k])==null?void 0:oe.type,P=y.find(W=>W==M);if(!P){let W=w.name||g;throw new TypeError(`${M} not allowed for ${W} in ${l}()`)}let A=P.range;M==="<percentage>"&&(A||(A=[0,1]));let z=w.range||w.refRange;return A&&z&&(f[k]=pn(A,z,f[k])),P})),t&&Object.assign(t,{formatId:d.name,types:h}),{spaceId:c.id,coords:f,alpha:u}}}}else for(let l of b.all)for(let c in l.formats){let d=l.formats[c];if(d.type!=="custom"||d.test&&!d.test(r.str))continue;let u=d.parse(r.str);if(u)return u.alpha??(u.alpha=1),t&&(t.formatId=c),u}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function E(e){if(!e)throw new TypeError("Empty color reference");kt(e)&&(e=Xi(e));let t=e.space||e.spaceId;return t instanceof b||(e.space=b.get(t)),e.alpha===void 0&&(e.alpha=1),e}function xt(e,t){return t=b.get(t),t.from(e)}function Q(e,t){let{space:r,index:n}=b.resolveCoord(t,e.space);return xt(e,r)[n]}function Zi(e,t,r){return t=b.get(t),e.coords=t.to(e.space,r),e}function ve(e,t,r){if(e=E(e),arguments.length===2&&ge(arguments[1])==="object"){let n=arguments[1];for(let o in n)ve(e,o,n[o])}else{typeof r=="function"&&(r=r(Q(e,t)));let{space:n,index:o}=b.resolveCoord(t,e.space),i=xt(e,n);i[o]=r,Zi(e,n,i)}return e}var mn=new b({id:"xyz-d50",name:"XYZ D50",white:"D50",base:K,fromBase:e=>Gt(K.white,"D50",e),toBase:e=>Gt("D50",K.white,e),formats:{color:{}}});const Gl=216/24389,to=24/116,St=24389/27;let Er=re.D50;var q=new b({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Er,base:mn,fromBase(e){let r=e.map((n,o)=>n/Er[o]).map(n=>n>Gl?Math.cbrt(n):(St*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>to?Math.pow(t[0],3):(116*t[0]-16)/St,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/St,t[2]>to?Math.pow(t[2],3):(116*t[2]-16)/St].map((n,o)=>n*Er[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function cr(e){return(e%360+360)%360}function Xl(e,t){if(e==="raw")return t;let[r,n]=t.map(cr),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var ht=new b({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:q,fromBase(e){let[t,r,n]=e,o;const i=.02;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),cr(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const ro=25**7,Xt=Math.PI,no=180/Xt,Oe=Xt/180;function Vr(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[i,a,s]=q.from(e),l=ht.from(q,[i,a,s])[1],[c,d,u]=q.from(t),f=ht.from(q,[c,d,u])[1];l<0&&(l=0),f<0&&(f=0);let g=((l+f)/2)**7,w=.5*(1-Math.sqrt(g/(g+ro))),k=(1+w)*a,y=(1+w)*d,M=Math.sqrt(k**2+s**2),P=Math.sqrt(y**2+u**2),A=k===0&&s===0?0:Math.atan2(s,k),z=y===0&&u===0?0:Math.atan2(u,y);A<0&&(A+=2*Xt),z<0&&(z+=2*Xt),A*=no,z*=no;let oe=c-i,W=P-M,T=z-A,O=A+z,fr=Math.abs(T),Je;M*P===0?Je=0:fr<=180?Je=T:T>180?Je=T-360:T<-180?Je=T+360:console.log("the unthinkable has happened");let vn=2*Math.sqrt(P*M)*Math.sin(Je*Oe/2),Ma=(i+c)/2,hr=(M+P)/2,yn=Math.pow(hr,7),ce;M*P===0?ce=O:fr<=180?ce=O/2:O<360?ce=(O+360)/2:ce=(O-360)/2;let $n=(Ma-50)**2,Ta=1+.015*$n/Math.sqrt(20+$n),kn=1+.045*hr,Ke=1;Ke-=.17*Math.cos((ce-30)*Oe),Ke+=.24*Math.cos(2*ce*Oe),Ke+=.32*Math.cos((3*ce+6)*Oe),Ke-=.2*Math.cos((4*ce-63)*Oe);let xn=1+.015*hr*Ke,_a=30*Math.exp(-1*((ce-275)/25)**2),La=2*Math.sqrt(yn/(yn+ro)),Aa=-1*Math.sin(2*_a*Oe)*La,Ct=(oe/(r*Ta))**2;return Ct+=(W/(n*kn))**2,Ct+=(vn/(o*xn))**2,Ct+=Aa*(W/(n*kn))*(vn/(o*xn)),Math.sqrt(Ct)}const Zl=75e-6;function st(e,t=e.space,{epsilon:r=Zl}={}){e=E(e),t=b.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function pt(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function ye(e,{method:t=se.gamut_mapping,space:r=e.space}={}){if(kt(arguments[1])&&(r=arguments[1]),r=b.get(r),st(e,r,{epsilon:0}))return E(e);let n=Z(e,r);if(t!=="clip"&&!st(e,r)){let o=ye(pt(n),{method:"clip",space:r});if(Vr(e,o)>2){let i=b.resolveCoord(t),a=i.space,s=i.id,l=Z(n,a),d=(i.range||i.refRange)[0],u=.01,f=d,h=Q(l,s);for(;h-f>u;){let g=pt(l);g=ye(g,{space:r,method:"clip"}),Vr(l,g)-2<u?f=Q(l,s):h=Q(l,s),ve(l,s,(f+h)/2)}n=Z(l,r)}else n=o}if(t==="clip"||!st(n,r,{epsilon:0})){let o=Object.values(r.coords).map(i=>i.range||[]);n.coords=n.coords.map((i,a)=>{let[s,l]=o[a];return s!==void 0&&(i=Math.max(s,i)),l!==void 0&&(i=Math.min(i,l)),i})}return r!==e.space&&(n=Z(n,e.space)),e.coords=n.coords,e}ye.returns="color";function Z(e,t,{inGamut:r}={}){e=E(e),t=b.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=ye(o)),o}Z.returns="color";function Zt(e,{precision:t=se.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let i;e=E(e);let a=r;r=e.space.getFormat(r)??e.space.getFormat("default")??b.DEFAULT_FORMAT,n||(n=r.toGamut);let s=e.coords;if(s=s.map(c=>c||0),n&&!st(e)&&(s=ye(pt(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)i=r.serialize(s,e.alpha,o);else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?s=r.serializeCoords(s,t):t!==null&&(s=s.map(h=>Yt(h,t)));let d=[...s];if(c==="color"){let h=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;d.unshift(h)}let u=e.alpha;t!==null&&(u=Yt(u,t));let f=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${u}`:"";i=`${c}(${d.join(r.commas?", ":" ")}${f})`}return i}const Jl=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Kl=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var ur=new F({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Jl,fromXYZ_M:Kl,formats:{color:{}}});const Mt=1.09929682680944,oo=.018053968510807;var Ji=new F({id:"rec2020",name:"REC.2020",base:ur,toBase(e){return e.map(function(t){return t<oo*4.5?t/4.5:Math.pow((t+Mt-1)/Mt,1/.45)})},fromBase(e){return e.map(function(t){return t>=oo?Mt*Math.pow(t,.45)-(Mt-1):4.5*t})},formats:{color:{}}});const Ql=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],ec=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Ki=new F({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Ql,fromXYZ_M:ec});const tc=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],rc=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Qi=new F({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:tc,fromXYZ_M:rc,formats:{color:{}}}),io={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let ao=Array(3).fill("<percentage> | <number>[0, 255]"),so=Array(3).fill("<number>[0, 255]");var mt=new F({id:"srgb",name:"sRGB",base:Qi,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:ao},rgb_number:{name:"rgb",commas:!0,coords:so,noAlpha:!0},color:{},rgba:{coords:ao,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:so},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(i=>Math.round(i*255));let n=r&&e.every(i=>i%17===0);return"#"+e.map(i=>n?(i/17).toString(16):i.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=io.black,t.alpha=0):t.coords=io[e],t.coords)return t}}}}),ea=new F({id:"p3",name:"P3",base:Ki,fromBase:mt.fromBase,toBase:mt.toBase,formats:{color:{id:"display-p3"}}});se.display_space=mt;if(typeof CSS<"u"&&CSS.supports)for(let e of[q,Ji,ea]){let t=e.getMinCoords(),n=Zt({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){se.display_space=e;break}}function nc(e,{space:t=se.display_space,...r}={}){let n=Zt(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!se.display_space)n=new String(n),n.color=e;else{let o=Z(e,t);n=new String(Zt(o,r)),n.color=o}return n}function ta(e,t,r="lab"){r=b.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((i,a,s)=>{let l=o[s];return isNaN(a)||isNaN(l)?i:i+(l-a)**2},0))}function oc(e,t){return e=E(e),t=E(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function $e(e){return Q(e,[K,"y"])}function ra(e,t){ve(e,[K,"y"],t)}function ic(e){Object.defineProperty(e.prototype,"luminance",{get(){return $e(this)},set(t){ra(this,t)}})}var ac=Object.freeze({__proto__:null,getLuminance:$e,register:ic,setLuminance:ra});function sc(e,t){e=E(e),t=E(t);let r=Math.max($e(e),0),n=Math.max($e(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const lc=.56,cc=.57,uc=.62,dc=.65,lo=.022,fc=1.414,hc=.1,pc=5e-4,mc=1.14,co=.027,gc=1.14;function uo(e){return e>=lo?e:e+(lo-e)**fc}function je(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function bc(e,t){t=E(t),e=E(e);let r,n,o,i,a,s;t=Z(t,"srgb"),[i,a,s]=t.coords;let l=je(i)*.2126729+je(a)*.7151522+je(s)*.072175;e=Z(e,"srgb"),[i,a,s]=e.coords;let c=je(i)*.2126729+je(a)*.7151522+je(s)*.072175,d=uo(l),u=uo(c),f=u>d;return Math.abs(u-d)<pc?n=0:f?(r=u**lc-d**cc,n=r*mc):(r=u**dc-d**uc,n=r*gc),Math.abs(n)<hc?o=0:n>0?o=n-co:o=n+co,o*100}function wc(e,t){e=E(e),t=E(t);let r=Math.max($e(e),0),n=Math.max($e(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const vc=5e4;function yc(e,t){e=E(e),t=E(t);let r=Math.max($e(e),0),n=Math.max($e(t),0);return n>r&&([r,n]=[n,r]),n===0?vc:(r-n)/n}function $c(e,t){e=E(e),t=E(t);let r=Q(e,[q,"l"]),n=Q(t,[q,"l"]);return Math.abs(r-n)}const kc=216/24389,fo=24/116,Tt=24389/27;let Cr=re.D65;var Ur=new b({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Cr,base:K,fromBase(e){let r=e.map((n,o)=>n/Cr[o]).map(n=>n>kc?Math.cbrt(n):(Tt*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>fo?Math.pow(t[0],3):(116*t[0]-16)/Tt,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Tt,t[2]>fo?Math.pow(t[2],3):(116*t[2]-16)/Tt].map((n,o)=>n*Cr[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const Sr=Math.pow(5,.5)*.5+.5;function xc(e,t){e=E(e),t=E(t);let r=Q(e,[Ur,"l"]),n=Q(t,[Ur,"l"]),o=Math.abs(Math.pow(r,Sr)-Math.pow(n,Sr)),i=Math.pow(o,1/Sr)*Math.SQRT2-40;return i<7.5?0:i}var Dt=Object.freeze({__proto__:null,contrastAPCA:bc,contrastDeltaPhi:xc,contrastLstar:$c,contrastMichelson:wc,contrastWCAG21:sc,contrastWeber:yc});function Ec(e,t,r={}){kt(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let i=Object.keys(Dt).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}e=E(e),t=E(t);for(let i in Dt)if("contrast"+n.toLowerCase()===i.toLowerCase())return Dt[i](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function na(e){let[t,r,n]=xt(e,K),o=t+15*r+3*n;return[4*t/o,9*r/o]}function oa(e){let[t,r,n]=xt(e,K),o=t+r+n;return[t/o,r/o]}function Cc(e){Object.defineProperty(e.prototype,"uv",{get(){return na(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return oa(this)}})}var Sc=Object.freeze({__proto__:null,register:Cc,uv:na,xy:oa});function Mc(e,t){return ta(e,t,"lab")}const Tc=Math.PI,ho=Tc/180;function _c(e,t,{l:r=2,c:n=1}={}){let[o,i,a]=q.from(e),[,s,l]=ht.from(q,[o,i,a]),[c,d,u]=q.from(t),f=ht.from(q,[c,d,u])[1];s<0&&(s=0),f<0&&(f=0);let h=o-c,g=s-f,w=i-d,k=a-u,y=w**2+k**2-g**2,M=.511;o>=16&&(M=.040975*o/(1+.01765*o));let P=.0638*s/(1+.0131*s)+.638,A;Number.isNaN(l)&&(l=0),l>=164&&l<=345?A=.56+Math.abs(.2*Math.cos((l+168)*ho)):A=.36+Math.abs(.4*Math.cos((l+35)*ho));let z=Math.pow(s,4),oe=Math.sqrt(z/(z+1900)),W=P*(oe*A+1-oe),T=(h/(r*M))**2;return T+=(g/(n*P))**2,T+=y/W**2,Math.sqrt(T)}const po=203;var gn=new b({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:K,fromBase(e){return e.map(t=>Math.max(t*po,0))},toBase(e){return e.map(t=>Math.max(t/po,0))}});const _t=1.15,Lt=.66,mo=2610/2**14,Lc=2**14/2610,go=3424/2**12,bo=2413/2**7,wo=2392/2**7,Ac=1.7*2523/2**5,vo=2**5/(1.7*2523),At=-.56,Mr=16295499532821565e-27,Pc=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Rc=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Bc=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Nc=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var ia=new b({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:gn,fromBase(e){let[t,r,n]=e,o=_t*t-(_t-1)*n,i=Lt*r-(Lt-1)*t,s=B(Pc,[o,i,n]).map(function(f){let h=go+bo*(f/1e4)**mo,g=1+wo*(f/1e4)**mo;return(h/g)**Ac}),[l,c,d]=B(Bc,s);return[(1+At)*l/(1+At*l)-Mr,c,d]},toBase(e){let[t,r,n]=e,o=(t+Mr)/(1+At-At*(t+Mr)),a=B(Nc,[o,r,n]).map(function(f){let h=go-f**vo,g=wo*f**vo-bo;return 1e4*(h/g)**Lc}),[s,l,c]=B(Rc,a),d=(s+(_t-1)*c)/_t,u=(l+(Lt-1)*d)/Lt;return[d,u,c]},formats:{color:{}}}),Fr=new b({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:ia,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),cr(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function Hc(e,t){let[r,n,o]=Fr.from(e),[i,a,s]=Fr.from(t),l=r-i,c=n-a;Number.isNaN(o)&&Number.isNaN(s)?(o=0,s=0):Number.isNaN(o)?o=s:Number.isNaN(s)&&(s=o);let d=o-s,u=2*Math.sqrt(n*a)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(l**2+c**2+u**2)}const aa=3424/4096,sa=2413/128,la=2392/128,yo=2610/16384,Ic=2523/32,Oc=16384/2610,$o=32/2523,jc=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],zc=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Dc=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],Vc=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Wr=new b({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:gn,fromBase(e){let t=B(jc,e);return Uc(t)},toBase(e){let t=Fc(e);return B(Vc,t)},formats:{color:{}}});function Uc(e){let t=e.map(function(r){let n=aa+sa*(r/1e4)**yo,o=1+la*(r/1e4)**yo;return(n/o)**Ic});return B(zc,t)}function Fc(e){return B(Dc,e).map(function(n){let o=Math.max(n**$o-aa,0),i=sa-la*n**$o;return 1e4*(o/i)**Oc})}function Wc(e,t){let[r,n,o]=Wr.from(e),[i,a,s]=Wr.from(t);return 720*Math.sqrt((r-i)**2+.25*(n-a)**2+(o-s)**2)}const Yc=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],qc=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],Gc=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],Xc=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var Jt=new b({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:K,fromBase(e){let r=B(Yc,e).map(n=>Math.cbrt(n));return B(Gc,r)},toBase(e){let r=B(Xc,e).map(n=>n**3);return B(qc,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Zc(e,t){let[r,n,o]=Jt.from(e),[i,a,s]=Jt.from(t),l=r-i,c=n-a,d=o-s;return Math.sqrt(l**2+c**2+d**2)}var Kt={deltaE76:Mc,deltaECMC:_c,deltaE2000:Vr,deltaEJz:Hc,deltaEITP:Wc,deltaEOK:Zc};function nt(e,t,r={}){kt(r)&&(r={method:r});let{method:n=se.deltaE,...o}=r;e=E(e),t=E(t);for(let i in Kt)if("deltae"+n.toLowerCase()===i.toLowerCase())return Kt[i](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function Jc(e,t=.25){let n=[b.get("oklch","lch"),"l"];return ve(e,n,o=>o*(1+t))}function Kc(e,t=.25){let n=[b.get("oklch","lch"),"l"];return ve(e,n,o=>o*(1-t))}var Qc=Object.freeze({__proto__:null,darken:Kc,lighten:Jc});function ca(e,t,r=.5,n={}){[e,t]=[E(e),E(t)],ge(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:i,premultiplied:a}=n;return Et(e,t,{space:o,outputSpace:i,premultiplied:a})(r)}function ua(e,t,r={}){let n;bn(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:i,steps:a=2,maxSteps:s=1e3,...l}=r;n||([e,t]=[E(e),E(t)],n=Et(e,t,l));let c=nt(e,t),d=o>0?Math.max(a,Math.ceil(c/o)+1):a,u=[];if(s!==void 0&&(d=Math.min(d,s)),d===1)u=[{p:.5,color:n(.5)}];else{let f=1/(d-1);u=Array.from({length:d},(h,g)=>{let w=g*f;return{p:w,color:n(w)}})}if(o>0){let f=u.reduce((h,g,w)=>{if(w===0)return 0;let k=nt(g.color,u[w-1].color,i);return Math.max(h,k)},0);for(;f>o;){f=0;for(let h=1;h<u.length&&u.length<s;h++){let g=u[h-1],w=u[h],k=(w.p+g.p)/2,y=n(k);f=Math.max(f,nt(y,g.color),nt(y,w.color)),u.splice(h,0,{p:k,color:n(k)}),h++}}}return u=u.map(f=>f.color),u}function Et(e,t,r={}){if(bn(e)){let[l,c]=[e,t];return Et(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:i,premultiplied:a}=r;e=E(e),t=E(t),e=pt(e),t=pt(t);let s={colors:[e,t],options:r};if(n?n=b.get(n):n=b.registry[se.interpolationSpace]||e.space,o=o?b.get(o):n,e=Z(e,n),t=Z(t,n),e=ye(e),t=ye(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[d,u]=[Q(e,c),Q(t,c)];[d,u]=Xl(l,[d,u]),ve(e,c,d),ve(t,c,u)}return a&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=i?i(l):l;let c=e.coords.map((f,h)=>{let g=t.coords[h];return qt(f,g,l)}),d=qt(e.alpha,t.alpha,l),u={space:n,coords:c,alpha:d};return a&&(u.coords=u.coords.map(f=>f/d)),o!==n&&(u=Z(u,o)),u},{rangeArgs:s})}function bn(e){return ge(e)==="function"&&!!e.rangeArgs}se.interpolationSpace="lab";function eu(e){e.defineFunction("mix",ca,{returns:"color"}),e.defineFunction("range",Et,{returns:"function<color>"}),e.defineFunction("steps",ua,{returns:"array<color>"})}var tu=Object.freeze({__proto__:null,isRange:bn,mix:ca,range:Et,register:eu,steps:ua}),da=new b({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:mt,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,i]=e,[a,s,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(s=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:a=(o-i)/c+(o<i?6:0);break;case o:a=(i-n)/c+2;break;case i:a=(n-o)/c+4}a=a*60}return[a,s*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(i){let a=(i+t/30)%12,s=r*Math.min(n,1-n);return n-s*Math.max(-1,Math.min(a-3,9-a,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),fa=new b({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:da,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),ru=new b({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:fa,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let s=r/o;return[t,0,s*100]}let i=1-n,a=i===0?0:1-r/i;return[t,a*100,i*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const nu=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],ou=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var ha=new F({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:nu,fromXYZ_M:ou}),iu=new F({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:ha,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const au=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],su=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var pa=new F({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:mn,toXYZ_M:au,fromXYZ_M:su});const lu=1/512,cu=16/512;var uu=new F({id:"prophoto",name:"ProPhoto",base:pa,toBase(e){return e.map(t=>t<cu?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=lu?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),du=new b({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Jt,fromBase(e){let[t,r,n]=e,o;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),cr(o)]},toBase(e){let[t,r,n]=e,o,i;return isNaN(n)?(o=0,i=0):(o=r*Math.cos(n*Math.PI/180),i=r*Math.sin(n*Math.PI/180)),[t,o,i]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const ko=203,xo=2610/2**14,fu=2**14/2610,hu=2523/2**5,Eo=2**5/2523,Co=3424/2**12,So=2413/2**7,Mo=2392/2**7;var pu=new F({id:"rec2100pq",name:"REC.2100-PQ",base:ur,toBase(e){return e.map(function(t){return(Math.max(t**Eo-Co,0)/(So-Mo*t**Eo))**fu*1e4/ko})},fromBase(e){return e.map(function(t){let r=Math.max(t*ko/1e4,0),n=Co+So*r**xo,o=1+Mo*r**xo;return(n/o)**hu})},formats:{color:{id:"rec2100-pq"}}});const To=.17883277,_o=.28466892,Lo=.55991073,Tr=3.7743;var mu=new F({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:ur,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Tr:(Math.exp((t-Lo)/To)+_o)/12*Tr})},fromBase(e){return e.map(function(t){return t/=Tr,t<=1/12?Math.sqrt(3*t):To*Math.log(12*t-_o)+Lo})},formats:{color:{id:"rec2100-hlg"}}});const ma={};we.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=ga(e.W1,e.W2,e.options.method))});we.add("chromatic-adaptation-end",e=>{e.M||(e.M=ga(e.W1,e.W2,e.options.method))});function dr({id:e,toCone_M:t,fromCone_M:r}){ma[e]=arguments[0]}function ga(e,t,r="Bradford"){let n=ma[r],[o,i,a]=B(n.toCone_M,e),[s,l,c]=B(n.toCone_M,t),d=[[s/o,0,0],[0,l/i,0],[0,0,c/a]],u=B(d,n.toCone_M);return B(n.fromCone_M,u)}dr({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});dr({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});dr({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});dr({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(re,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});re.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const gu=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],bu=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var ba=new F({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:re.ACES,toXYZ_M:gu,fromXYZ_M:bu,formats:{color:{}}});const Pt=2**-16,_r=-.35828683,Rt=(Math.log2(65504)+9.72)/17.52;var wu=new F({id:"acescc",name:"ACEScc",coords:{r:{range:[_r,Rt],name:"Red"},g:{range:[_r,Rt],name:"Green"},b:{range:[_r,Rt],name:"Blue"}},referred:"scene",base:ba,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-Pt)*2:r<Rt?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Pt)+9.72)/17.52:t<Pt?(Math.log2(Pt+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Ao=Object.freeze({__proto__:null,A98RGB:iu,A98RGB_Linear:ha,ACEScc:wu,ACEScg:ba,HSL:da,HSV:fa,HWB:ru,ICTCP:Wr,JzCzHz:Fr,Jzazbz:ia,LCH:ht,Lab:q,Lab_D65:Ur,OKLCH:du,OKLab:Jt,P3:ea,P3_Linear:Ki,ProPhoto:uu,ProPhoto_Linear:pa,REC_2020:Ji,REC_2020_Linear:ur,REC_2100_HLG:mu,REC_2100_PQ:pu,XYZ_ABS_D65:gn,XYZ_D50:mn,XYZ_D65:K,sRGB:mt,sRGB_Linear:Qi});let S=class D{constructor(...t){let r;t.length===1&&(r=E(t[0]));let n,o,i;r?(n=r.space||r.spaceId,o=r.coords,i=r.alpha):[n,o,i]=t,Object.defineProperty(this,"space",{value:b.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=i<1?i:1;for(let a=0;a<this.coords.length;a++)this.coords[a]==="NaN"&&(this.coords[a]=NaN);for(let a in this.space.coords)Object.defineProperty(this,a,{get:()=>this.get(a),set:s=>this.set(a,s)})}get spaceId(){return this.space.id}clone(){return new D(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=nc(this,...t);return r.color=new D(r.color),r}static get(t,...r){return t instanceof D?t:new D(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:i}=n,a=function(...s){let l=r(...s);if(i==="color")l=D.get(l);else if(i==="function<color>"){let c=l;l=function(...d){let u=c(...d);return D.get(u)},Object.assign(l,c)}else i==="array<color>"&&(l=l.map(c=>D.get(c)));return l};t in D||(D[t]=a),o&&(D.prototype[t]=function(...s){return a(this,...s)})}static defineFunctions(t){for(let r in t)D.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(D);else for(let r in t)D.defineFunction(r,t[r])}};S.defineFunctions({get:Q,getAll:xt,set:ve,setAll:Zi,to:Z,equals:oc,inGamut:st,toGamut:ye,distance:ta,toString:Zt});Object.assign(S,{util:Fl,hooks:we,WHITES:re,Space:b,spaces:b.registry,parse:Xi,defaults:se});for(let e of Object.keys(Ao))b.register(Ao[e]);for(let e in b.registry)Yr(e,b.registry[e]);we.add("colorspace-init-end",e=>{var t;Yr(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Yr(r,e)})});function Yr(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty(S.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,i)=>{try{return b.resolveCoord([t,i]),!0}catch{}return Reflect.has(o,i)},get:(o,i,a)=>{if(i&&typeof i!="symbol"&&!(i in o)){let{index:s}=b.resolveCoord([t,i]);if(s>=0)return o[s]}return Reflect.get(o,i,a)},set:(o,i,a,s)=>{if(i&&typeof i!="symbol"&&!(i in o)||i>=0){let{index:l}=b.resolveCoord([t,i]);if(l>=0)return o[l]=a,this.setAll(e,o),!0}return Reflect.set(o,i,a,s)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}S.extend(Kt);S.extend({deltaE:nt});Object.assign(S,{deltaEMethods:Kt});S.extend(Qc);S.extend({contrast:Ec});S.extend(Sc);S.extend(ac);S.extend(tu);S.extend(Dt);function wa(e){return fe(e,(t,r)=>r instanceof S?H(r.toString({format:"hex"})):wa(r))}const vu="dodgerblue";function qr(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function Lr({background:e,foreground:t}){return{background:e??new S(qr(t)),foreground:t??new S(qr(e))}}var Qt;(function(e){e.Dark="dark",e.Light="light"})(Qt||(Qt={}));function yu(e){return e==="black"?"white":"black"}const $u={black:{foregroundFaint1:new S("#ccc"),foregroundFaint2:new S("#eee")},white:{foregroundFaint1:new S("#ccc"),foregroundFaint2:new S("#eee")}},ku={black:{backgroundFaint1:new S("#666"),backgroundFaint2:new S("#444")},white:{backgroundFaint1:new S("#ccc"),backgroundFaint2:new S("#fafafa")}};function Po({themeColor:e=vu,themeStyle:t=Qt.Light}={}){const r=new S(e),n=new S(t===Qt.Dark?"black":"white"),o=qr(n),i=new S(o),a={nav:{hover:Lr({background:r.clone().set({"hsl.l":93})}),active:Lr({background:r.clone().set({"hsl.l":90})}),selected:Lr({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...ku[yu(o)],foreground:i,...$u[o]}};return wa(a)}const er=on()("element-book-change-route"),Ro="vira-",{defineElement:Ze,defineElementNoInputs:Xu}=Pi({assertInputs:e=>{if(!e.tagName.startsWith(Ro))throw new Error(`Tag name should start with '${Ro}' but got '${e.tagName}'`)}}),xu=S;function Eu(e){try{if(!e)throw new Error("invalid empty color");return new xu(e)}catch{const r=String(e),n=r.toLowerCase().match(/\[\s*object\s+object\s*\]/)?Wa({callback:()=>JSON.stringify(e),fallbackValue:r}):r;throw new Error(`Invalid color: ${n}`)}}const va=m`
    pointer-events: none;
    opacity: 0.3;
`,be=Ne({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),gt=Ne({"vira-form-input-border-radius":"8px"}),tr=Ne({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":m`calc(${gt["vira-form-input-border-radius"].value} + 4px)`});function ya({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=H(Zo(n+r+t));return m`
        ${H(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${tr["vira-focus-outline-color"].value};
            border-radius: ${tr["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const Cu=m`
    padding: 0;
    margin: 0;
`,_e=m`
    ${Cu};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Gr=m`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,$=Ze()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>m`
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

        ${e["vira-icon-fit-container"].selector} svg 
            height: 100%;
            width: 100%;
        }
    `,renderCallback({inputs:e}){return e.icon?e.icon.svgTemplate:""}});var rr;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(rr||(rr={}));const N=Ze()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===rr.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>m`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Gr};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${tr["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${va};
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
            border-radius: ${gt["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${be["vira-interaction-animation-duration"].value},
                background-color
                    ${be["vira-interaction-animation-duration"].value},
                border-color ${be["vira-interaction-animation-duration"].value};
        }

        ${ya({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${$} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?p`
                  <${$.assign({icon:e.icon})}></${$}>
              `:"",r=e.text?p`
                  <span class="text-template">${e.text}</span>
              `:"";return p`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var bt;(function(e){e.Header="header"})(bt||(bt={}));const Me=Ze()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>m`
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
            transition: height ${be["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:he()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const i=o.expanded?m`
                  height: ${e.contentHeight}px;
              `:m`
                  height: 0;
              `;return p`
            <button
                class="header-wrapper"
                ${L("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${bt.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${i} disabled="disabled">
                <div
                    ${Ai(({contentRect:a})=>{t({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),v=Ne({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function le({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function Su(e,t){const r=U(t).map(n=>{const o=t[n],i=Eu(o);return`${v[n].name}: ${i.toString()};`}).join(" ");return le({name:e.name,svgTemplate:p`
            <div style=${r}>${e.svgTemplate}</div>
        `})}const $a=le({name:"CloseX24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),ka=le({name:"Element16Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Ae=le({name:"Element24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),xa=le({name:"Loader24Icon",svgTemplate:p`
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
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Mu=m`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${be["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,wt=le({name:"LoaderAnimated24Icon",svgTemplate:p`
        <style>
            ${Mu}
        </style>
        ${xa.svgTemplate}
    `}),wn=le({name:"Options24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke="${v["vira-icon-stroke-color"].value}"
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),nr=le({name:"StatusFailure24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Tu=le({name:"StatusInProgress24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${v["vira-icon-stroke-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width="calc(${v["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${v["vira-icon-stroke-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width="calc(${v["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${v["vira-icon-stroke-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width="calc(${v["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),_u=le({name:"StatusSuccess24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${v["vira-icon-fill-color"].value}
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${v["vira-icon-stroke-color"].value}
                stroke-width=${v["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Lu={CloseX24Icon:$a,Element16Icon:ka,Element24Icon:Ae,Loader24Icon:xa,LoaderAnimated24Icon:wt,Options24Icon:wn,StatusFailure24Icon:nr,StatusInProgress24Icon:Tu,StatusSuccess24Icon:_u};var Ye;(function(e){e.Loading="loading",e.Error="error"})(Ye||(Ye={}));const ze=Ze()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},events:{imageLoad:he(),imageError:he()},styles:({hostClasses:e})=>m`
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
                  <slot class="status-wrapper" name=${Ye.Error}>
                      <${$.assign({icon:nr})} class="error"></${$}>
                  </slot>
              `:t.loadedUrls[i]?void 0:p`
                    <slot class="status-wrapper" name=${Ye.Loading}>
                        <${$.assign({icon:wt})}></${$}>
                    </slot>
                `;return p`
            ${J(!!a,a)}
            <img
                class=${ci({hidden:!!a})}
                ${L("load",async()=>{e._debugLoadDelay&&await Br(e._debugLoadDelay.milliseconds),r({loadedUrls:{...t.loadedUrls,[i]:!0}}),n(new o.imageLoad)})}
                ${L("error",async s=>{e._debugLoadDelay&&await Br(e._debugLoadDelay.milliseconds),r({erroredUrls:{...t.erroredUrls,[i]:!0}}),n(new o.imageError(s.error))})}
                src=${i}
            />
        `}});function Xr({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>Xr({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Ea({value:e,allowed:t,blocked:r}){const n=t?Xr({input:e,matcher:t}):!0,o=r?Xr({input:e,matcher:r}):!1;return n&&!o}function Ca(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(Ea({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function Au({inputs:e,filteredValue:t,event:r,inputBlockedCallback:n,newValueCallback:o}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const i=rt(r,HTMLInputElement),a=r.data,s=t;let l=i.value??"";if(a)if(a.length===1)Ea({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=s,n(a));else{const{filtered:c,blocked:d}=Ca({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,n(d)}i.value!==l&&(i.value=l),s!==l&&o(l)}const _=Ze()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:he(),inputBlocked:he()},styles:({hostClasses:e,cssVars:t})=>m`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${tr["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${va};
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
                ${Gr};
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
                border-radius: ${gt["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${be["vira-interaction-animation-duration"].value};
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
                border-radius: ${gt["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${ya({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

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
                ${Gr};
            }

            .close-x-button {
                ${_e};
                color: ${t["vira-input-clear-button-color"].value};
                cursor: pointer;
                display: flex;
                transition: ${be["vira-interaction-animation-duration"].value};
            }

            .close-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .close-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:i}=Ca({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?p`
                  <${$.assign({icon:e.icon})} class="left-side-icon"></${$}>
              `:"",s=e.fitText?m`
                  width: ${r.forcedInputWidth}px;
              `:"";return p`
            <label>
                ${a}
                ${J(!!e.fitText,p`
                        <span
                            class="size-span"
                            ${Ai(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
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
                    ${L("input",l=>{Au({inputs:e,filteredValue:i,event:l,inputBlockedCallback(c){t(new o.inputBlocked(c))},newValueCallback(c){t(new o.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${J(!!(e.showClearButton&&e.value),p`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${L("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${$.assign({icon:$a})}></${$}>
                        </button>
                    `)}
                ${J(!!e.suffix,p`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}}),tt=Ze()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>m`
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
    `,events:{routeChange:he()},renderCallback({inputs:e,dispatch:t,events:r}){var o,i;function n(a){e.route&&Oi(a)&&(a.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return p`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const a=e.link?e.link.url:(i=e.route)==null?void 0:i.router.createRoutesUrl(e.route.route);return p`
                <a href=${a} rel="noopener noreferrer" ${L("click",n)}>
                    <slot></slot>
                </a>
            `}}}),{defineElement:ee,defineElementNoInputs:Zu}=Pi(),X=ee()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>m`
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
                ${L("click",i=>{(!e.router||Oi(i))&&(i.preventDefault(),window.scrollTo(0,0),t(new er(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function Pu(e,t){return e.entry.entryType===I.Root?!1:!!(e.entry.entryType===I.Page||pe(t,e.fullUrlBreadcrumbs.slice(0,-1))||pe(t==null?void 0:t.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1)))}const ue=ee()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>m`
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

        ${$} {
            display: inline-flex;
            color: ${x["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!Pu(r,e.selectedPath))return;const n=m`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return p`
                <li style=${n}>
                    <${X.assign({router:e.router,route:{paths:[V.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${ci({"title-row":!0,selected:e.selectedPath?pe(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${J(Ue(r,I.ElementExample),p`
                                    <${$.assign({icon:ka})}></${$}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${X}>
                </li>
            `});return p`
            <${X.assign({route:We,router:e.router})}>
                <slot name=${ie.NavHeader}>Book</slot>
            </${X}>
            <ul>
                ${t}
            </ul>
        `}});async function Ru(e){await Nr(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await us(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const ke=ee()({tagName:"book-error",styles:m`
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
    `,renderCallback({inputs:e}){return(j(e.message,"array")?e.message:[e.message]).map(r=>p`
                <p>${r}</p>
            `)}}),vt=ee()({tagName:"book-page-controls",events:{controlValueChange:he()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>m`
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

        ${$}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],i)=>{if(o.controlType===C.Hidden)return"";const a=Bu(e.currentValues[n],o,s=>{const l=j(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:s}}))});return p`
                    <div class="control-wrapper">
                        ${J(i===0,p`
                                <${$.assign({icon:wn})}
                                    class="options-icon"
                                ></${$}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${a}
                        </label>
                    </div>
                `}):""}});function Bu(e,t,r){return Ie(t,C.Hidden)?"":Ie(t,C.Checkbox)?p`
            <input
                type="checkbox"
                .value=${e}
                ${L("input",n=>{const o=rt(n,HTMLInputElement);r(o.checked)})}
            />
        `:Ie(t,C.Color)?p`
            <input
                type="color"
                .value=${e}
                ${L("input",n=>{const o=rt(n,HTMLInputElement);r(o.value)})}
            />
        `:Ie(t,C.Text)?p`
            <${_.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${L(_.events.valueChange,n=>{r(n.detail)})}
            ></${_}>
        `:Ie(t,C.Number)?p`
            <input
                type="number"
                .value=${e}
                ${L("input",n=>{const o=rt(n,HTMLInputElement);r(o.value)})}
            />
        `:Ie(t,C.Dropdown)?p`
            <select
                .value=${e}
                ${L("input",n=>{const o=rt(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>p`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:p`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Bo=ee()({tagName:"book-breadcrumbs",styles:m`
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
                <${X.assign({route:{hash:void 0,search:void 0,paths:[V.Book,...a]},router:e.router})}>
                    ${r}
                </${X}>
                ${s}
            `}):p`
                &nbsp;
            `}}),Ar=ee()({tagName:"book-breadcrumbs-bar",styles:m`
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
            ${J(!!e.currentSearch,p`
                    &nbsp;
                `,p`
                    <${Bo.assign({currentRoute:e.currentRoute,router:e.router})}></${Bo}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${L("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await Br(200),n.value===o&&(n.value?t(new er({paths:[V.Search,encodeURIComponent(n.value)]})):t(new er(We)))})}
            />
        `}}),No=ee()({tagName:"book-entry-description",styles:m`
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
            `)}}),Ho=ee()({tagName:"book-page-wrapper",styles:m`
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
              `,r=[V.Book,...e.pageNode.fullUrlBreadcrumbs],n=Fo(e.pageNode.entry.errors);return n&&console.error(n),p`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${X.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${X}>
                    ${n?p`
                              <${ke.assign({message:n.message})}></${ke}>
                          `:p`
                              <${No.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${No}>
                              <${vt.assign({config:e.pageNode.entry.controls,currentValues:fn(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${vt}>
                          `}
                </div>
            </div>
        `}}),Bt=ee()({tagName:"book-element-example-controls",styles:m`
        :host {
            display: flex;
            color: ${x["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[V.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return p`
            <${X.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${X}>
        `}}),Io=Symbol("unset-internal-state"),Oo=ee()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:Io},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw Fo(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===Io&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return p`
                ${J(!!t.elementExampleNode.entry.styles,p`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),p`
                <${ke.assign({message:`${t.elementExampleNode.entry.title} failed: ${qe(n)}`})}></${ke}>
            `}},options:{allowPolymorphicState:!0}}),jo=ee()({tagName:"book-element-example-wrapper",styles:m`
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

        ${Bt} {
            color: ${x["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Bt} {
            color: ${x["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return p`
            <div class="individual-example-wrapper">
                <${Bt.assign(Za(e,["currentPageControls"]))}></${Bt}>
                <${Oo.assign(e)}></${Oo}>
            </div>
        `}});function Sa(e,t,r,n){const o=Or(r,n),i=[];if(o){const a=Sa(e,t,o,n);a&&i.push(a)}if(Ue(r,I.Page)&&!e.includes(r)){const a=fn(t,r.fullUrlBreadcrumbs);i.push({config:r.entry.controls,current:a,breadcrumbs:fe(a,()=>r.fullUrlBreadcrumbs)})}return i.reduce((a,s)=>({config:{...a.config,...s.config},current:{...a.current,...s.current},breadcrumbs:{...a.breadcrumbs,...s.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function Nu({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:o,originalTree:i}){if(!e.length&&n)return[p`
                No results
            `];const a=_n(e,1)?Sa(e,o,e[0],i):void 0,s=a&&Object.values(a.config).length&&_n(e,1)?p`
                  <${vt.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${vt}>
              `:"",l=Bs(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,d)=>{if(Ue(c,I.Page))return p`
                    <${Ho.assign({isTopLevel:t,pageNode:c,controls:o,router:r})}
                        class="block-entry"
                    ></${Ho}>
                `;if(Ue(c,I.ElementExample)){const u=fn(o,c.fullUrlBreadcrumbs.slice(0,-1));return p`
                    <${jo.assign({elementExampleNode:c,currentPageControls:u,router:r})}
                        class="inline-entry"
                    ></${jo}>
                `}else return Ue(c,I.Root)?"":p`
                    <${ke.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${ke}>
                `});return[s,l].flat()}const De=ee()({tagName:"book-entry-display",styles:m`
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

        ${Ar} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${be["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:he()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:e,dispatch:t,events:r,state:n,updateState:o})=>{const i=jr(e.currentRoute.paths),a=Nu({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!i,controls:e.controls,originalTree:e.originalTree});return p`
            <${Ar.assign({currentSearch:i,currentRoute:e.currentRoute,router:e.router})}></${Ar}>

            ${J(e.showLoading,p`
                    <div
                        ${Yn(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${$.assign({icon:wt})}></${$}>
                    </div>
                    ${J(!!n.lastElement,p`
                            ${n.lastElement}
                            <slot name=${ie.Footer}></slot>
                        `)}
                `,p`
                    <div
                        ${Yn(s=>{o({lastElement:s})})}
                        class="all-book-entries-wrapper"
                    >
                        ${a}
                    </div>
                    <slot name=${ie.Footer}></slot>
                `)}
        `}});function Hu(e,t,r){const n=zo(e,t);if(n.length)return n;r(We);const o=zo(e,We.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function zo(e,t){return e.filter(r=>cs({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Pr=_i()({tagName:"element-book-app",events:{pathUpdate:he()},stateInitStatic:{currentRoute:We,router:void 0,loading:!0,colors:{config:void 0,theme:Po(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:m`
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

        ${De} {
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
    `,initCallback({host:e,state:t}){setTimeout(()=>{Do(e,jr(t.currentRoute.paths),t.currentRoute)},500)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:i})=>{var d,u,f,h,g,w,k;t._debug&&console.info("rendering element-book app");function a(y){return{...e.currentRoute,...y}}function s(y){const M=a(y);return!pe(e.currentRoute,M)}function l(y){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,y].filter(xe).join(" - "))}function c(y){if(!s(y))return;const M=a(y);e.router?e.router.setRoutes(M):n({currentRoute:{...e.currentRoute,...M}}),t.elementBookRoutePaths&&!pe(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new i.pathUpdate(M.paths??[]))}try{if(t.elementBookRoutePaths&&!pe(t.elementBookRoutePaths,e.currentRoute.paths)&&c({paths:t.elementBookRoutePaths}),(d=t.internalRouterConfig)!=null&&d.useInternalRouter&&!e.router){const T=zl(t.internalRouterConfig.basePath);n({router:T}),T.addRouteListener(!0,O=>{n({currentRoute:O})})}else!((u=t.internalRouterConfig)!=null&&u.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const y={themeColor:t.themeColor};if(!pe(y,(f=e.colors)==null?void 0:f.config)){const T=Po(y);n({colors:{config:y,theme:T}}),Ul(r,T)}const M=t._debug??!1,P=xl({entries:t.entries,debug:M});(!e.treeBasedControls||e.treeBasedControls.entries!==t.entries||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:t.entries,lastGlobalInputs:t.globalValues??{},controls:Hi(P.tree,{children:(g=(h=e.treeBasedControls)==null?void 0:h.controls)==null?void 0:g.children,controls:t.globalValues})}}));const A=jr(e.currentRoute.paths),oe=(A?Ll({flattenedNodes:P.flattenedNodes,searchQuery:A}):void 0)??Hu(P.flattenedNodes,e.currentRoute.paths,c);l((w=oe[0])==null?void 0:w.entry.title);const W=(k=e.treeBasedControls)==null?void 0:k.controls;return W?(t._debug&&console.info({currentControls:W}),p`
                <div
                    class="root"
                    ${L(er,async T=>{const O=T.detail;if(!s(O))return;if(n({loading:!0}),c(O),!(r.shadowRoot.querySelector(ue.tagName)instanceof ue))throw new Error(`Failed to find child '${ue.tagName}'`);Do(r,A,e.currentRoute)})}
                    ${L(vt.events.controlValueChange,T=>{if(!e.treeBasedControls)return;const O=Cl(W,T.detail.fullUrlBreadcrumbs,T.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:O}})})}
                >
                    <${ue.assign({flattenedNodes:P.flattenedNodes,router:e.router,selectedPath:A?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${ie.NavHeader}
                            slot=${ie.NavHeader}
                        ></slot>
                    </${ue}>
                    <${De.assign({controls:W,currentNodes:oe,currentRoute:e.currentRoute,debug:M,originalTree:P.tree,router:e.router,showLoading:e.loading})}
                        ${L(De.events.loadingRender,async T=>{await Nr();const O=r.shadowRoot.querySelector(De.tagName);O?O.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${De.tagName}' for scrolling.`),await Nr(),n({loading:!T.detail})})}
                    >
                        <slot
                            name=${ie.Footer}
                            slot=${ie.Footer}
                        ></slot>
                    </${De}>
                </div>
            `):p`
                    <${ke.assign({message:"Failed to generate page controls."})}></${ke}>
                `}catch(y){return console.error(y),p`
                <p class="error">${qe(y)}</p>
            `}}});async function Do(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(ue.tagName);if(!(n instanceof ue))throw new Error(`Failed to find child '${ue.tagName}'`);await Ru(n)}const He=Ee({title:"Elements",parent:void 0}),Iu=Ee({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:C.Color,initValue:""},"Fill Color":{controlType:C.Color,initValue:""},"Stroke Width":{controlType:C.Number,initValue:1}},elementExamplesCallback({defineExample:e}){Object.values(Lu).forEach(t=>{e({title:t.name,styles:m`
                    :host(:hover) ${$} {
                        background-color: #f2f2f2;
                    }

                    ${$} {
                        padding: 8px;
                        border-radius: ${gt["vira-form-input-border-radius"].value};
                    }
                `,renderCallback({controls:r}){const n=m`
                        ${v["vira-icon-fill-color"].name}: ${H(r["Fill Color"]||"inherit")};
                        ${v["vira-icon-stroke-color"].name}: ${H(r["Stroke Color"]||"inherit")};
                        ${v["vira-icon-stroke-width"].name}: ${H(Zo(r["Stroke Width"])||"inherit")};
                    `;return p`
                        <${$.assign({icon:t})} style=${n}></${$}>
                    `}})})}}),Ou=Ee({parent:He,title:N.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:C.Color,initValue:N.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:C.Color,initValue:N.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:C.Color,initValue:N.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:C.Color,initValue:N.cssVars["vira-button-primary-active-color"].default}},elementExamplesCallback({defineExample:e}){function t({title:r,styles:n,inputs:o}){const i=n??m``;e({title:r,styles:i,renderCallback({controls:a}){const s=m`
                        ${N.cssVars["vira-button-primary-color"].name}: ${H(a["Primary color"]||"inherit")};
                        ${N.cssVars["vira-button-secondary-color"].name}: ${H(a["Secondary color"]||"inherit")};
                        ${N.cssVars["vira-button-primary-hover-color"].name}: ${H(a["Hover color"]||"inherit")};
                        ${N.cssVars["vira-button-primary-active-color"].name}: ${H(a["Active color"]||"inherit")};
                    `;return p`
                        <${N.assign({text:"hello",...o})}
                            style=${s}
                        ></${N}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:wn}}),t({title:"outline",inputs:{buttonStyle:rr.Outline}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:m`
                ${N} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:m`
                ${N} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:m`
                :host {
                    ${N.cssVars["vira-button-primary-color"].name}: pink;
                    ${N.cssVars["vira-button-secondary-color"].name}: purple;
                    ${N.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${N.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,renderCallback(){return p`
                    <${N.assign({text:"hello"})}></${N}>
                `}})}}),ju=Ee({title:Me.tagName,parent:He,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],elementExamplesCallback({defineExample:e}){e({title:"stacked examples",styles:m`
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
                                    slot=${bt.Header}
                                >
                                    Section ${o}
                                </div>
                                <p>Variable contents</p>
                                <button
                                    ${L("click",()=>{const i=[...r.showMoreStates];i[o]=!i[o],t({showMoreStates:i})})}
                                >
                                    show more
                                </button>
                                ${J(!!r.showMoreStates[o],p`
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
                                    slot=${bt.Header}
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
                                ${J(!!r.showMoreStates[o],p`
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
                        `)}})}}),zu=Ee({title:$.tagName,parent:He,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],elementExamplesCallback({defineExample:e}){e({title:"basic",renderCallback(){return p`
                    <${$.assign({icon:Ae})}></${$}>
                `}}),e({title:"using createColoredIcon",renderCallback(){return p`
                    <${$.assign({icon:Su(Ae,{"vira-icon-stroke-color":"red"})})}></${$}>
                `}})}}),Du=Ee({title:ze.tagName,parent:He,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],elementExamplesCallback({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:m`
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
                        <${$.assign({icon:wt,fitContainer:!0})}
                            style=${m`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${$}>
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
                        <${$.assign({icon:nr,fitContainer:!0})}
                            style=${m`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${$}>
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
                        <${$.assign({icon:wt,fitContainer:!0})}
                            style=${m`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${$}>
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
                        <${$.assign({icon:nr,fitContainer:!0})}
                            style=${m`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${$}>
                    </div>
                `}].forEach(r=>{e({title:r.title,styles:m`
                    ${ze} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${r.styles||m``}
                    }

                    ${r.allowReload?m`
                              ${ze} {
                                  cursor: pointer;
                              }

                              ${ze}:hover {
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
                        <${ze.assign({...r.inputs,imageUrl:n.imageUrl})}
                            ${L("click",()=>{r.allowReload&&o({imageUrl:`${r.inputs.imageUrl}?di=${Xo()}`})})}
                        >
                            ${r.loadingSlot?p`
                                      <div
                                          class="slot-wrapper"
                                          slot=${Ye.Loading}
                                      >
                                          ${r.loadingSlot}
                                      </div>
                                  `:""}${r.errorSlot?p`
                                      <div class="slot-wrapper" slot=${Ye.Error}>
                                          ${r.errorSlot}
                                      </div>
                                  `:""}
                        </${ze}>
                    `}})})}}),Vu=Ee({title:_.tagName,parent:He,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:C.Color,initValue:_.cssVars["vira-input-text-color"].default},"Placeholder color":{controlType:C.Color,initValue:_.cssVars["vira-input-placeholder-color"].default},"Border color":{controlType:C.Color,initValue:_.cssVars["vira-input-border-color"].default},"Focus color":{controlType:C.Color,initValue:_.cssVars["vira-input-focus-border-color"].default},"Selection color":{controlType:C.Color,initValue:_.cssVars["vira-input-text-selection-color"].default}},elementExamplesCallback({defineExample:e}){function t({styles:r,title:n,inputs:o}){e({title:n,styles:m`
                    ${r||m``}
                `,stateInitStatic:{value:o.value},renderCallback({state:i,updateState:a,controls:s}){const l={[String(_.cssVars["vira-input-text-color"].name)]:s["Text color"],[String(_.cssVars["vira-input-placeholder-color"].name)]:s["Placeholder color"],[String(_.cssVars["vira-input-border-color"].name)]:s["Border color"],[String(_.cssVars["vira-input-focus-border-color"].name)]:s["Focus color"],[String(_.cssVars["vira-input-text-selection-color"].name)]:s["Selection color"]},c=fe(l,(u,f)=>f||"inherit"),d=Object.entries(c).map(([u,f])=>[u,f].join(": ")+";").join(`
`);return p`
                        <${_.assign({...o,value:i.value})}
                            style=${d}
                            ${L(_.events.valueChange,u=>{a({value:u.detail})})}
                        ></${_}>
                    `}})}t({title:"basic",inputs:{value:"default value"}}),t({title:"with icon",inputs:{value:"",icon:Ae}}),t({title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}}),t({title:"with suffix",inputs:{value:"42",suffix:"px"}}),t({title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}}),t({title:"disabled",inputs:{value:"disabled",disabled:!0}}),t({title:"numbers only",inputs:{value:"",allowedInputs:/\d/}}),t({title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}}),t({title:"custom width",styles:m`
                ${_} {
                    width: 120px;
                }
            `,inputs:{value:"",placeholder:"width",icon:Ae}}),t({title:"taller height",styles:m`
                ${_} {
                    height: 48px;
                }
            `,inputs:{value:"",placeholder:"taller",icon:Ae}}),t({title:"shorter height",styles:m`
                ${_} {
                    height: 26px;
                }
            `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:Ae}}),t({title:"max width",styles:m`
                ${_} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42"}}),t({title:"fit text",styles:m`
                ${_} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42",fitText:!0}})}}),Uu=Ee({title:tt.tagName,parent:He,descriptionParagraphs:["Handles hyperlinks securely or route changes without harming right click functionality."],controls:{"CSS Color":{controlType:C.Color,initValue:""},"Hover color":{controlType:C.Color,initValue:""}},elementExamplesCallback({defineExample:e}){function t({title:r,inputs:n}){e({title:r,renderCallback({controls:o}){const i=m`
                        ${tt.cssVars["vira-link-hover-color"].name}: ${H(o["Hover color"]||"inherit")};
                        color: ${H(o["CSS Color"]||"inherit")};
                    `;return p`
                        <${tt.assign(n)}
                            style=${i}
                            ${L(tt.events.routeChange,a=>{console.info(a)})}
                        >
                            My Link
                        </${tt}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRoutesUrl(){return window.location.href}}}}})}}),Fu=[He,Iu,Ou,ju,zu,Du,Vu,Uu];sr({tagName:"vira-book-app",styles:m`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${Pr} {
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
            <${Pr.assign({internalRouterConfig:{basePath:is("element-vir","vira"),useInternalRouter:!0},entries:Fu,themeColor:"#33ccff"})}>
                <h1 slot=${ie.NavHeader}>Vira</h1>
            </${Pr}>
        `}});
