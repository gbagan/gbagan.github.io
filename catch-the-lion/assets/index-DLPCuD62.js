(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const Re=(e,t)=>e===t,k=Symbol("solid-proxy"),ne=Symbol("solid-track"),K={equals:Re};let Ge=Ce;const P=1,W=2,Ae={owned:null,cleanups:null,context:null,owner:null};var m=null;let ee=null,He=null,y=null,w=null,L=null,Z=0;function ie(e,t){const n=y,i=m,r=e.length===0,o=t===void 0?i:t,l=r?Ae:{owned:null,cleanups:null,context:o?o.context:null,owner:o},s=r?e:()=>e(()=>S(()=>H(l)));m=l,y=null;try{return N(s,!0)}finally{y=n,m=i}}function M(e,t){t=t?Object.assign({},K,t):K;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=r=>(typeof r=="function"&&(r=r(n.value)),Te(n,r));return[Ee.bind(n),i]}function qe(e,t,n){const i=le(e,t,!0,P);U(i)}function C(e,t,n){const i=le(e,t,!1,P);U(i)}function E(e,t,n){n=n?Object.assign({},K,n):K;const i=le(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,U(i),Ee.bind(i)}function O(e){return N(e,!1)}function S(e){if(y===null)return e();const t=y;y=null;try{return e()}finally{y=t}}function Ue(e){return m===null||(m.cleanups===null?m.cleanups=[e]:m.cleanups.push(e)),e}function re(){return y}function Ke(e){const t=y,n=m;return Promise.resolve().then(()=>{y=t,m=n;let i;return N(e,!1),y=m=null,i?i.done:void 0})}const[We,wn]=M(!1);function Xe(){return[We,Ke]}function Ee(){if(this.sources&&this.state)if(this.state===P)U(this);else{const e=w;w=null,N(()=>X(this),!1),w=e}if(y){const e=this.observers?this.observers.length:0;y.sources?(y.sources.push(this),y.sourceSlots.push(e)):(y.sources=[this],y.sourceSlots=[e]),this.observers?(this.observers.push(y),this.observerSlots.push(y.sources.length-1)):(this.observers=[y],this.observerSlots=[y.sources.length-1])}return this.value}function Te(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&N(()=>{for(let r=0;r<e.observers.length;r+=1){const o=e.observers[r],l=ee&&ee.running;l&&ee.disposed.has(o),(l?!o.tState:!o.state)&&(o.pure?w.push(o):L.push(o),o.observers&&Oe(o)),l||(o.state=P)}if(w.length>1e6)throw w=[],new Error},!1)),t}function U(e){if(!e.fn)return;H(e);const t=Z;Ye(e,e.value,t)}function Ye(e,t,n){let i;const r=m,o=y;y=m=e;try{i=e.fn(t)}catch(l){return e.pure&&(e.state=P,e.owned&&e.owned.forEach(H),e.owned=null),e.updatedAt=n+1,Pe(l)}finally{y=o,m=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Te(e,i):e.value=i,e.updatedAt=n)}function le(e,t,n,i=P,r){const o={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:m,context:m?m.context:null,pure:n};return m===null||m!==Ae&&(m.owned?m.owned.push(o):m.owned=[o]),o}function Se(e){if(e.state===0)return;if(e.state===W)return X(e);if(e.suspense&&S(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Z);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===P)U(e);else if(e.state===W){const i=w;w=null,N(()=>X(e,t[0]),!1),w=i}}function N(e,t){if(w)return e();let n=!1;t||(w=[]),L?n=!0:L=[],Z++;try{const i=e();return Qe(n),i}catch(i){n||(L=null),w=null,Pe(i)}}function Qe(e){if(w&&(Ce(w),w=null),e)return;const t=L;L=null,t.length&&N(()=>Ge(t),!1)}function Ce(e){for(let t=0;t<e.length;t++)Se(e[t])}function X(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];if(i.sources){const r=i.state;r===P?i!==t&&(!i.updatedAt||i.updatedAt<Z)&&Se(i):r===W&&X(i,t)}}}function Oe(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=W,n.pure?w.push(n):L.push(n),n.observers&&Oe(n))}}function H(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const o=r.pop(),l=n.observerSlots.pop();i<r.length&&(o.sourceSlots[l]=i,r[i]=o,n.observerSlots[i]=l)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)H(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)H(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Ve(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Pe(e,t=m){throw Ve(e)}const ue=Symbol("fallback");function ae(e){for(let t=0;t<e.length;t++)e[t]()}function ze(e,t,n={}){let i=[],r=[],o=[],l=[],s=0,c;return Ue(()=>ae(o)),()=>{const d=e()||[],g=d.length;return d[ne],S(()=>{if(g===0)return s!==0&&(ae(o),o=[],i=[],r=[],s=0,l=[]),n.fallback&&(i=[ue],r[0]=ie(a=>(o[0]=a,n.fallback())),s=1),r;for(i[0]===ue&&(o[0](),o=[],i=[],r=[],s=0),c=0;c<g;c++)c<i.length&&i[c]!==d[c]?l[c](()=>d[c]):c>=i.length&&(r[c]=ie(f));for(;c<i.length;c++)o[c]();return s=l.length=o.length=g,i=d.slice(0),r=r.slice(0,s)});function f(a){o[c]=a;const[p,u]=M(d[c]);return l[c]=u,t(p,c)}}}function _(e,t){return S(()=>e(t||{}))}function de(e){const t="fallback"in e&&{fallback:()=>e.fallback};return E(ze(()=>e.each,e.children,t||void 0))}function Je(e,t,n){let i=n.length,r=t.length,o=i,l=0,s=0,c=t[r-1].nextSibling,d=null;for(;l<r||s<o;){if(t[l]===n[s]){l++,s++;continue}for(;t[r-1]===n[o-1];)r--,o--;if(r===l){const g=o<i?s?n[s-1].nextSibling:n[o-s]:c;for(;s<o;)e.insertBefore(n[s++],g)}else if(o===s)for(;l<r;)(!d||!d.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[s]===t[r-1]){const g=t[--r].nextSibling;e.insertBefore(n[s++],t[l++].nextSibling),e.insertBefore(n[--o],g),t[r]=n[o]}else{if(!d){d=new Map;let f=s;for(;f<o;)d.set(n[f],f++)}const g=d.get(t[l]);if(g!=null)if(s<g&&g<o){let f=l,a=1,p;for(;++f<r&&f<o&&!((p=d.get(t[f]))==null||p!==g+a);)a++;if(a>g-s){const u=t[l];for(;s<g;)e.insertBefore(n[s++],u)}else e.replaceChild(n[s++],t[l++])}else l++;else t[l++].remove()}}}const ge="_$DX_DELEGATE";function Ze(e,t,n,i={}){let r;return ie(o=>{r=o,t===document?e():$(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{r(),t.textContent=""}}function A(e,t,n){let i;const r=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},o=t?()=>S(()=>document.importNode(i||(i=r()),!0)):()=>(i||(i=r())).cloneNode(!0);return o.cloneNode=o,o}function ce(e,t=window.document){const n=t[ge]||(t[ge]=new Set);for(let i=0,r=e.length;i<r;i++){const o=e[i];n.has(o)||(n.add(o),t.addEventListener(o,it))}}function j(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function et(e,t){t==null?e.removeAttribute("class"):e.className=t}function tt(e,t,n,i){Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n}function nt(e,t,n){return S(()=>e(t,n))}function $(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return Y(e,t,i,n);C(r=>Y(e,t(),r,n),i)}function it(e){let t=e.target;const n=`$$${e.type}`,i=e.target,r=e.currentTarget,o=c=>Object.defineProperty(e,"target",{configurable:!0,value:c}),l=()=>{const c=t[n];if(c&&!t.disabled){const d=t[`${n}Data`];if(d!==void 0?c.call(t,d,e):c.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&o(t.host),!0},s=()=>{for(;l()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const c=e.composedPath();o(c[0]);for(let d=0;d<c.length-2&&(t=c[d],!!l());d++){if(t._$host){t=t._$host,s();break}if(t.parentNode===r)break}}else s();o(i)}function Y(e,t,n,i,r){for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=i!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(o==="number"&&(t=t.toString(),t===n))return n;if(l){let s=n[0];s&&s.nodeType===3?s.data!==t&&(s.data=t):s=document.createTextNode(t),n=D(e,n,i,s)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean")n=D(e,n,i);else{if(o==="function")return C(()=>{let s=t();for(;typeof s=="function";)s=s();n=Y(e,s,n,i)}),()=>n;if(Array.isArray(t)){const s=[],c=n&&Array.isArray(n);if(oe(s,t,n,r))return C(()=>n=Y(e,s,n,i,!0)),()=>n;if(s.length===0){if(n=D(e,n,i),l)return n}else c?n.length===0?he(e,s,i):Je(e,n,s):(n&&D(e),he(e,s));n=s}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=D(e,n,i,t);D(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function oe(e,t,n,i){let r=!1;for(let o=0,l=t.length;o<l;o++){let s=t[o],c=n&&n[e.length],d;if(!(s==null||s===!0||s===!1))if((d=typeof s)=="object"&&s.nodeType)e.push(s);else if(Array.isArray(s))r=oe(e,s,c)||r;else if(d==="function")if(i){for(;typeof s=="function";)s=s();r=oe(e,Array.isArray(s)?s:[s],Array.isArray(c)?c:[c])||r}else e.push(s),r=!0;else{const g=String(s);c&&c.nodeType===3&&c.data===g?e.push(c):e.push(document.createTextNode(g))}}return r}function he(e,t,n=null){for(let i=0,r=t.length;i<r;i++)e.insertBefore(t[i],n)}function D(e,t,n,i){if(n===void 0)return e.textContent="";const r=i||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const s=t[l];if(r!==s){const c=s.parentNode===e;!o&&!l?c?e.replaceChild(r,s):e.insertBefore(r,n):c&&s.remove()}else o=!0}}else e.insertBefore(r,n);return[r]}const Q=Symbol("store-raw"),I=Symbol("store-node"),T=Symbol("store-has"),Le=Symbol("store-self");function _e(e){let t=e[k];if(!t&&(Object.defineProperty(e,k,{value:t=new Proxy(e,st)}),!Array.isArray(e))){const n=Object.keys(e),i=Object.getOwnPropertyDescriptors(e);for(let r=0,o=n.length;r<o;r++){const l=n[r];i[l].get&&Object.defineProperty(e,l,{enumerable:i[l].enumerable,get:i[l].get.bind(t)})}}return t}function B(e){let t;return e!=null&&typeof e=="object"&&(e[k]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function F(e,t=new Set){let n,i,r,o;if(n=e!=null&&e[Q])return n;if(!B(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let l=0,s=e.length;l<s;l++)r=e[l],(i=F(r,t))!==r&&(e[l]=i)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const l=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let c=0,d=l.length;c<d;c++)o=l[c],!s[o].get&&(r=e[o],(i=F(r,t))!==r&&(e[o]=i))}return e}function V(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function q(e,t,n){if(e[t])return e[t];const[i,r]=M(n,{equals:!1,internal:!0});return i.$=r,e[t]=i}function rt(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===k||t===I||(delete n.value,delete n.writable,n.get=()=>e[k][t]),n}function ke(e){re()&&q(V(e,I),Le)()}function ot(e){return ke(e),Reflect.ownKeys(e)}const st={get(e,t,n){if(t===Q)return e;if(t===k)return n;if(t===ne)return ke(e),n;const i=V(e,I),r=i[t];let o=r?r():e[t];if(t===I||t===T||t==="__proto__")return o;if(!r){const l=Object.getOwnPropertyDescriptor(e,t);re()&&(typeof o!="function"||e.hasOwnProperty(t))&&!(l&&l.get)&&(o=q(i,t,o)())}return B(o)?_e(o):o},has(e,t){return t===Q||t===k||t===ne||t===I||t===T||t==="__proto__"?!0:(re()&&q(V(e,T),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:ot,getOwnPropertyDescriptor:rt};function R(e,t,n,i=!1){if(!i&&e[t]===n)return;const r=e[t],o=e.length;n===void 0?(delete e[t],e[T]&&e[T][t]&&r!==void 0&&e[T][t].$()):(e[t]=n,e[T]&&e[T][t]&&r===void 0&&e[T][t].$());let l=V(e,I),s;if((s=q(l,t,r))&&s.$(()=>n),Array.isArray(e)&&e.length!==o){for(let c=e.length;c<o;c++)(s=l[c])&&s.$();(s=q(l,"length",o))&&s.$(e.length)}(s=l[Le])&&s.$()}function Ne(e,t){const n=Object.keys(t);for(let i=0;i<n.length;i+=1){const r=n[i];R(e,r,t[r])}}function lt(e,t){if(typeof t=="function"&&(t=t(e)),t=F(t),Array.isArray(t)){if(e===t)return;let n=0,i=t.length;for(;n<i;n++){const r=t[n];e[n]!==r&&R(e,n,r)}R(e,"length",i)}else Ne(e,t)}function G(e,t,n=[]){let i,r=e;if(t.length>1){i=t.shift();const l=typeof i,s=Array.isArray(e);if(Array.isArray(i)){for(let c=0;c<i.length;c++)G(e,[i[c]].concat(t),n);return}else if(s&&l==="function"){for(let c=0;c<e.length;c++)i(e[c],c)&&G(e,[c].concat(t),n);return}else if(s&&l==="object"){const{from:c=0,to:d=e.length-1,by:g=1}=i;for(let f=c;f<=d;f+=g)G(e,[f].concat(t),n);return}else if(t.length>1){G(e[i],t,[i].concat(n));return}r=e[i],n=[i].concat(n)}let o=t[0];typeof o=="function"&&(o=o(r,n),o===r)||i===void 0&&o==null||(o=F(o),i===void 0||B(r)&&B(o)&&!Array.isArray(o)?Ne(r,o):R(e,i,o))}function je(...[e,t]){const n=F(e||{}),i=Array.isArray(n),r=_e(n);function o(...l){O(()=>{i&&l.length===1?lt(n,l[0]):G(n,l)})}return[r,o]}const z=new WeakMap,De={get(e,t){if(t===Q)return e;const n=e[t];let i;return B(n)?z.get(n)||(z.set(n,i=new Proxy(n,De)),i):n},set(e,t,n){return R(e,t,F(n)),!0},deleteProperty(e,t){return R(e,t,void 0,!0),!0}};function pe(e){return t=>{if(B(t)){let n;(n=z.get(t))||z.set(t,n=new Proxy(t,De)),e(n)}return t}}const ct=()=>({adversary:"level1"}),Ie=()=>[{type:"E",position:9,owner:0},{type:"L",position:10,owner:0},{type:"G",position:11,owner:0},{type:"C",position:7,owner:0},{type:"E",position:2,owner:1},{type:"L",position:1,owner:1},{type:"G",position:0,owner:1},{type:"C",position:4,owner:1}],ft=()=>({pieces:Ie(),turn:0,outcome:null,played:[],config:ct(),isThinking:!1,dialogOpened:!1}),ut={C:[[0,1]],H:[[0,1],[1,0],[0,-1],[-1,0],[1,1],[-1,1]],G:[[0,1],[1,0],[0,-1],[-1,0]],E:[[1,1],[-1,1],[1,-1],[-1,-1]],L:[[0,1],[1,0],[0,-1],[-1,0],[1,1],[-1,1],[1,-1],[-1,-1]]};function at(e,t){const n=new Array(12);n.fill(0);for(const s of e)s.position!==null&&(n[s.position]=s.owner+1);if(t.position===null){const s=[];for(let c=0;c<12;c++)n[c]||s.push(c);return s}const i=[],r=t.position%3,o=t.position/3|0,l=ut[t.type];for(const s of l){const[c,d]=t.owner?[s[0],s[1]]:[-s[0],-s[1]],g=r+c,f=o+d;if(g>=0&&g<3&&f>=0&&f<4){let a=3*f+g;n[a]!==t.owner+1&&i.push(a)}}return i}function dt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ye=1/0,Me=9007199254740991,gt=17976931348623157e292,me=NaN,ht="[object Function]",pt="[object GeneratorFunction]",yt="[object Symbol]",mt=/^\s+|\s+$/g,bt=/^[-+]0x[0-9a-f]+$/i,wt=/^0b[01]+$/i,vt=/^0o[0-7]+$/i,$t=/^(?:0|[1-9]\d*)$/,xt=parseInt,At=Object.prototype,Be=At.toString,Et=Math.ceil,Tt=Math.max;function St(e,t,n,i){for(var r=-1,o=Tt(Et((t-e)/(n||1)),0),l=Array(o);o--;)l[++r]=e,e+=n;return l}function Ct(e){return function(t,n,i){return i&&typeof i!="number"&&Pt(t,n,i)&&(n=i=void 0),t=te(t),n===void 0?(n=t,t=0):n=te(n),i=i===void 0?t<n?1:-1:te(i),St(t,n,i)}}function Ot(e,t){return t=t??Me,!!t&&(typeof e=="number"||$t.test(e))&&e>-1&&e%1==0&&e<t}function Pt(e,t,n){if(!J(n))return!1;var i=typeof t;return(i=="number"?_t(n)&&Ot(t,n.length):i=="string"&&t in n)?Lt(n[t],e):!1}function Lt(e,t){return e===t||e!==e&&t!==t}function _t(e){return e!=null&&Nt(e.length)&&!kt(e)}function kt(e){var t=J(e)?Be.call(e):"";return t==ht||t==pt}function Nt(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Me}function J(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function jt(e){return!!e&&typeof e=="object"}function Dt(e){return typeof e=="symbol"||jt(e)&&Be.call(e)==yt}function te(e){if(!e)return e===0?e:0;if(e=It(e),e===ye||e===-ye){var t=e<0?-1:1;return t*gt}return e===e?e:0}function It(e){if(typeof e=="number")return e;if(Dt(e))return me;if(J(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=J(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(mt,"");var n=wt.test(e);return n||vt.test(e)?xt(e.slice(2),n?2:8):bt.test(e)?me:+e}var Mt=Ct(),Bt=Mt;const Ft=dt(Bt);var Rt=A('<div class="w-[42rem] z-20"><svg viewBox="0 0 1600 1680"class=select-none><image x=200 y=0 width=1200 height=1680 href=./board.webp>'),Gt=A("<svg><rect width=298 height=298 stroke-width=20 fill=transparent></svg>",!1,!0),Ht=A('<svg><image x=-140 y=-140 width=280 height=280 class="transition-transform duration-1000"></svg>',!1,!0),qt=A("<svg><image x=-140 y=-140 width=280 height=280 class=pointer-events-none></svg>",!1,!0);function Ut(e){const t=e.currentTarget,{left:n,top:i,width:r,height:o}=t.getBoundingClientRect();return{x:(e.clientX-n)/r,y:(e.clientY-i)/o}}const Kt=[350,670,1e3,1320],Wt=[480,800,1120],be={L:"./lion.webp",G:"./giraffe.webp",E:"./elephant.webp",C:"./chick.webp",H:"./chicken.webp"},we={C:0,E:1,G:2,L:3,H:4},Xt=e=>{const t=e.position;let n,i,r;t===null?(n=e.owner?1500:100,i=e.owner?200+200*we[e.type]:1570-200*we[e.type],r=.7):(n=Wt[t%3],i=Kt[t/3|0],r=1);const o=e.owner?"180deg":"0";return`translate(${n}px, ${i}px) rotate(${o}) scale(${r})`},Yt=(e,t)=>{const n=100*e.x,i=100*e.y,r=t.owner?"180deg":"0";return`translate(${n}%, ${i}%) rotate(${r})`},Qt=e=>{const[t,n]=M(null),[i,r]=M(null),o=E(()=>t()!==null?at(e.pieces,e.pieces[t()]):[]),l=(g,f)=>{e.outcome!==null||e.pieces[g].owner!==e.turn||(f.currentTarget&&f.currentTarget.releasePointerCapture(f.pointerId),n(g))},s=g=>{r(Ut(g))},c=g=>{O(()=>{r(null);const f=t();f!==null&&(n(null),e.play(f,g))})},d=g=>{O(()=>{r(null),n(null)})};return(()=>{var g=Rt(),f=g.firstChild;return f.firstChild,f.$$pointerup=d,f.addEventListener("pointerleave",d),f.addEventListener("pointercancel",d),f.$$pointermove=s,$(f,_(de,{get each(){return Ft(0,12)},children:a=>(()=>{var p=Gt();return p.$$pointerup=c,p.$$pointerupData=a(),C(u=>{var h=320+330*(a()%3),b=200+325*(a()/3|0),x=o().includes(a())?"lightgreen":"transparent",v=!o().includes(a());return h!==u.e&&j(p,"x",u.e=h),b!==u.t&&j(p,"y",u.t=b),x!==u.a&&j(p,"stroke",u.a=x),v!==u.o&&p.classList.toggle("pointer-events-none",u.o=v),u},{e:void 0,t:void 0,a:void 0,o:void 0}),p})()}),null),$(f,_(de,{get each(){return e.pieces},children:(a,p)=>(()=>{var u=Ht();return u.$$pointerdown=l,u.$$pointerdownData=p,C(h=>{var b=Xt(a()),x=be[a().type],v=t()!==null,fe=p===t()?0:100;return b!==h.e&&((h.e=b)!=null?u.style.setProperty("transform",b):u.style.removeProperty("transform")),x!==h.t&&j(u,"href",h.t=x),v!==h.a&&u.classList.toggle("pointer-events-none",h.a=v),fe!==h.o&&j(u,"opacity",h.o=fe),h},{e:void 0,t:void 0,a:void 0,o:void 0}),u})()}),null),$(f,(()=>{var a=E(()=>!!(i()&&t()!==null));return()=>a()&&(()=>{var p=qt();return C(u=>{var h=Yt(i(),e.pieces[t()]),b=be[e.pieces[t()].type];return h!==u.e&&((u.e=h)!=null?p.style.setProperty("transform",h):p.style.removeProperty("transform")),b!==u.t&&j(p,"href",u.t=b),u},{e:void 0,t:void 0}),p})()})(),null),g})()};ce(["pointermove","pointerup","pointerdown"]);var Vt=()=>{},ve=(e,t)=>t();function zt(e,t){const n=S(e),i=n?[n]:[],{onEnter:r=ve,onExit:o=ve}=t,[l,s]=M(t.appear?[]:i),[c]=Xe();let d,g=!1;function f(u,h){if(!u)return h&&h();g=!0,o(u,()=>{O(()=>{g=!1,s(b=>b.filter(x=>x!==u)),h&&h()})})}function a(u){const h=d;if(!h)return u&&u();d=void 0,s(b=>[h,...b]),r(h,u??Vt)}const p=t.mode==="out-in"?u=>g||f(u,a):t.mode==="in-out"?u=>a(()=>f(u)):u=>{f(u),a()};return qe(u=>{const h=e();return S(c)?(c(),u):(h!==u&&(d=h,O(()=>S(()=>p(u)))),h)},t.appear?void 0:n),l}var $e=e=>e instanceof Element;function se(e,t){if(t(e))return e;if(typeof e=="function"&&!e.length)return se(e(),t);if(Array.isArray(e))for(const n of e){const i=se(n,t);if(i)return i}return null}function Jt(e,t=$e,n=$e){const i=E(e);return E(()=>se(i(),t))}function Zt(e){return E(()=>{const t=e.name||"s";return{enterActive:(e.enterActiveClass||t+"-enter-active").split(" "),enter:(e.enterClass||t+"-enter").split(" "),enterTo:(e.enterToClass||t+"-enter-to").split(" "),exitActive:(e.exitActiveClass||t+"-exit-active").split(" "),exit:(e.exitClass||t+"-exit").split(" "),exitTo:(e.exitToClass||t+"-exit-to").split(" "),move:(e.moveClass||t+"-move").split(" ")}})}function Fe(e){requestAnimationFrame(()=>requestAnimationFrame(e))}function en(e,t,n,i){const{onBeforeEnter:r,onEnter:o,onAfterEnter:l}=t;r?.(n),n.classList.add(...e.enter),n.classList.add(...e.enterActive),queueMicrotask(()=>{if(!n.parentNode)return i?.();o?.(n,()=>s())}),Fe(()=>{n.classList.remove(...e.enter),n.classList.add(...e.enterTo),(!o||o.length<2)&&(n.addEventListener("transitionend",s),n.addEventListener("animationend",s))});function s(c){(!c||c.target===n)&&(i?.(),n.removeEventListener("transitionend",s),n.removeEventListener("animationend",s),n.classList.remove(...e.enterActive),n.classList.remove(...e.enterTo),l?.(n))}}function tn(e,t,n,i){const{onBeforeExit:r,onExit:o,onAfterExit:l}=t;if(!n.parentNode)return i?.();r?.(n),n.classList.add(...e.exit),n.classList.add(...e.exitActive),o?.(n,()=>s()),Fe(()=>{n.classList.remove(...e.exit),n.classList.add(...e.exitTo),(!o||o.length<2)&&(n.addEventListener("transitionend",s),n.addEventListener("animationend",s))});function s(c){(!c||c.target===n)&&(i?.(),n.removeEventListener("transitionend",s),n.removeEventListener("animationend",s),n.classList.remove(...e.exitActive),n.classList.remove(...e.exitTo),l?.(n))}}var nn={inout:"in-out",outin:"out-in"},rn=e=>{const t=Zt(e);return zt(Jt(()=>e.children),{mode:nn[e.mode],appear:e.appear,onEnter(n,i){en(t(),e,n,i)},onExit(n,i){tn(t(),e,n,i)}})},on=A("<div>"),sn=A("<div class=tooltip>");const ln=e=>{const t=E(()=>e.outcome!==null?`Bravo! Le joueur ${e.outcome+1} a gagné!`:"Bienvenue sur l'appli"),n=E(()=>e.outcome!==null?"bg-happy":e.isThinking?"bg-thinking":"bg-speaking");return(()=>{var i=on();return $(i,_(rn,{onEnter:(r,o)=>{r.animate([{opacity:0},{opacity:1}],{duration:500}).finished.then(o)},onExit:(r,o)=>{r.animate([{opacity:1},{opacity:0}],{duration:500}).finished.then(o)},get children(){return E(()=>!!t())()&&(()=>{var r=sn();return $(r,t),r})()}})),C(()=>et(i,`relative w-[15rem] h-[25rem] bg-contain bg-no-repeat ${n()}`)),i})()};var cn=A("<div class=dialog-title>Nouvelle partie"),fn=A('<div class="dialog-body grid grid-cols-20/80 gap-8"><div class="text-bold text-lg">Adversaire</div><div class="flex gap-4 text-lg"></div><div class="text-bold text-lg">Qui commence</div><div class="flex gap-4 text-lg">'),un=A("<div class=dialog-buttons><button class=btn>Annuler</button><button class=btn>OK"),xe=A("<button class=togglebtn>");const an=[["human","Humain"],["level1","Débutant"],["level2","Moyen"],["level3","Difficile"]],dn=e=>{const[t,n]=je({...e.config});return[cn(),(()=>{var i=fn(),r=i.firstChild,o=r.nextSibling,l=o.nextSibling,s=l.nextSibling;return $(o,()=>an.map(([c,d])=>(()=>{var g=xe();return g.$$click=f=>n("adversary",c),$(g,d),C(()=>g.classList.toggle("toggledbtn",c===t.adversary)),g})())),$(s,()=>[0,1].map(c=>(()=>{var d=xe();return $(d,c===0?"Humain":"Machine"),d})())),i})(),(()=>{var i=un(),r=i.firstChild,o=r.nextSibling;return tt(r,"click",e.closeDialog),o.$$click=e.newGame,o.$$clickData=t,i})()]};ce(["click"]);const gn=e=>new Promise(t=>setTimeout(t,e));function hn(e){return new Worker(""+new URL("worker-COHvXXvm.js",import.meta.url).href,{name:e?.name})}var pn=A('<div class="relative w-screen min-h-screen bg-main bg-cover bg-no-repeat flex flew-row items-center justify-around portrait:flex-col"><div class="absolute bg-white w-full h-full opacity-30 z-10 pointer-events-none"></div><div class="flex flex-col bg-board b-cover p-6 border-2 border-black rounded-xl gap-4 z-20"><div class=text-4xl>Catch the lion</div><button class=btn>Nouvelle partie</button><button class=btn>Annuler</button><button class=btn>Tutoriel</button><button class=btn>Information'),yn=A("<dialog class=dialog>");const mn=()=>{let e;const[t,n]=je(ft()),i=new hn;function r(f){return new Promise(a=>{i.onmessage=function(p){a(p.data)},i.postMessage(f)})}const o=(f,a)=>{const{owner:p,type:u,position:h}=t.pieces[f];O(()=>{const b=t.pieces.map(v=>({...v}));n("played",t.played.length,b);let x=t.pieces.findIndex(v=>v.position===a);x>=0&&(n("pieces",x,{position:null,owner:p}),n("pieces",x,"type",v=>v==="H"?"C":v),t.pieces[x].type==="L"&&n("outcome",p)),n("pieces",f,"position",a),u==="C"&&h!==null&&(p&&a>8||!p&&a<3)&&n("pieces",f,"type","H"),n("turn",v=>v===0?1:0)})},l=async(f,a)=>{if(t.config.adversary==="human")o(f,a);else{if(O(()=>{o(f,a),t.outcome===null&&n("isThinking",!0)}),t.outcome!==null)return;const p={pieces:t.pieces.map(b=>({...b})),turn:t.turn,adversary:t.config.adversary},[[u,h]]=await Promise.all([r(p),gn(1500)]);O(()=>{n("isThinking",!1),o(u,h)})}},s=()=>{n(pe(f=>{if(f.played.length){const a=f.played.pop();f.pieces=a,f.turn=f.turn===0?1:0,f.outcome=null}if(f.played.length%2===1&&f.config.adversary!=="human"){const a=f.played.pop();f.pieces=a,f.turn=f.turn===0?1:0}}))},c=()=>{n("dialogOpened",!0),e.showModal()},d=()=>{e.close(),n("dialogOpened",!1)},g=f=>{n(pe(a=>{a.config={...f},a.pieces=Ie(),a.played=[],a.outcome=null,a.turn=0,a.dialogOpened=!1})),e.close()};return[(()=>{var f=pn(),a=f.firstChild,p=a.nextSibling,u=p.firstChild,h=u.nextSibling,b=h.nextSibling;return h.$$click=c,b.$$click=s,$(f,_(Qt,{get pieces(){return t.pieces},get turn(){return t.turn},get outcome(){return t.outcome},play:l}),null),$(f,_(ln,{get outcome(){return t.outcome},get isThinking(){return t.isThinking}}),null),f})(),(()=>{var f=yn(),a=e;return typeof a=="function"?nt(a,f):e=f,$(f,(()=>{var p=E(()=>!!t.dialogOpened);return()=>p()&&_(dn,{get config(){return t.config},closeDialog:d,newGame:g})})()),f})()]};ce(["click"]);const bn=document.getElementById("root");Ze(()=>_(mn,{}),bn);