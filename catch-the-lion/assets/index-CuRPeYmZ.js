(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const Ie=(e,t)=>e===t,P=Symbol("solid-proxy"),ee=Symbol("solid-track"),U={equals:Ie};let ke=xe;const E=1,K=2,me={owned:null,cleanups:null,context:null,owner:null};var b=null;let J=null,De=null,p=null,w=null,C=null,z=0;function te(e,t){const n=p,i=b,r=e.length===0,o=t===void 0?i:t,l=r?me:{owned:null,cleanups:null,context:o?o.context:null,owner:o},s=r?e:()=>e(()=>$(()=>R(l)));b=l,p=null;try{return L(s,!0)}finally{p=n,b=i}}function I(e,t){t=t?Object.assign({},U,t):U;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=r=>(typeof r=="function"&&(r=r(n.value)),Ae(n,r));return[ve.bind(n),i]}function Fe(e,t,n){const i=se(e,t,!0,E);q(i)}function O(e,t,n){const i=se(e,t,!1,E);q(i)}function A(e,t,n){n=n?Object.assign({},U,n):U;const i=se(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,q(i),ve.bind(i)}function k(e){return L(e,!1)}function $(e){if(p===null)return e();const t=p;p=null;try{return e()}finally{p=t}}function Be(e){return b===null||(b.cleanups===null?b.cleanups=[e]:b.cleanups.push(e)),e}function ne(){return p}function Re(e){const t=p,n=b;return Promise.resolve().then(()=>{p=t,b=n;let i;return L(e,!1),p=b=null,i?i.done:void 0})}const[Me,rn]=I(!1);function Ge(){return[Me,Re]}function ve(){if(this.sources&&this.state)if(this.state===E)q(this);else{const e=w;w=null,L(()=>X(this),!1),w=e}if(p){const e=this.observers?this.observers.length:0;p.sources?(p.sources.push(this),p.sourceSlots.push(e)):(p.sources=[this],p.sourceSlots=[e]),this.observers?(this.observers.push(p),this.observerSlots.push(p.sources.length-1)):(this.observers=[p],this.observerSlots=[p.sources.length-1])}return this.value}function Ae(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&L(()=>{for(let r=0;r<e.observers.length;r+=1){const o=e.observers[r],l=J&&J.running;l&&J.disposed.has(o),(l?!o.tState:!o.state)&&(o.pure?w.push(o):C.push(o),o.observers&&Ee(o)),l||(o.state=E)}if(w.length>1e6)throw w=[],new Error},!1)),t}function q(e){if(!e.fn)return;R(e);const t=z;qe(e,e.value,t)}function qe(e,t,n){let i;const r=b,o=p;p=b=e;try{i=e.fn(t)}catch(l){return e.pure&&(e.state=E,e.owned&&e.owned.forEach(R),e.owned=null),e.updatedAt=n+1,Te(l)}finally{p=o,b=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Ae(e,i):e.value=i,e.updatedAt=n)}function se(e,t,n,i=E,r){const o={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:b,context:b?b.context:null,pure:n};return b===null||b!==me&&(b.owned?b.owned.push(o):b.owned=[o]),o}function $e(e){if(e.state===0)return;if(e.state===K)return X(e);if(e.suspense&&$(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<z);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===E)q(e);else if(e.state===K){const i=w;w=null,L(()=>X(e,t[0]),!1),w=i}}function L(e,t){if(w)return e();let n=!1;t||(w=[]),C?n=!0:C=[],z++;try{const i=e();return Ue(n),i}catch(i){n||(C=null),w=null,Te(i)}}function Ue(e){if(w&&(xe(w),w=null),e)return;const t=C;C=null,t.length&&L(()=>ke(t),!1)}function xe(e){for(let t=0;t<e.length;t++)$e(e[t])}function X(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];if(i.sources){const r=i.state;r===E?i!==t&&(!i.updatedAt||i.updatedAt<z)&&$e(i):r===K&&X(i,t)}}}function Ee(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=K,n.pure?w.push(n):C.push(n),n.observers&&Ee(n))}}function R(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const o=r.pop(),l=n.observerSlots.pop();i<r.length&&(o.sourceSlots[l]=i,r[i]=o,n.observerSlots[i]=l)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)R(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)R(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Ke(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Te(e,t=b){throw Ke(e)}const ce=Symbol("fallback");function fe(e){for(let t=0;t<e.length;t++)e[t]()}function Xe(e,t,n={}){let i=[],r=[],o=[],l=[],s=0,c;return Be(()=>fe(o)),()=>{const a=e()||[],u=a.length;return a[ee],$(()=>{if(u===0)return s!==0&&(fe(o),o=[],i=[],r=[],s=0,l=[]),n.fallback&&(i=[ce],r[0]=te(g=>(o[0]=g,n.fallback())),s=1),r;for(i[0]===ce&&(o[0](),o=[],i=[],r=[],s=0),c=0;c<u;c++)c<i.length&&i[c]!==a[c]?l[c](()=>a[c]):c>=i.length&&(r[c]=te(d));for(;c<i.length;c++)o[c]();return s=l.length=o.length=u,i=a.slice(0),r=r.slice(0,s)});function d(g){o[c]=g;const[y,f]=I(a[c]);return l[c]=f,t(y,c)}}}function D(e,t){return $(()=>e(t||{}))}function ue(e){const t="fallback"in e&&{fallback:()=>e.fallback};return A(Xe(()=>e.each,e.children,t||void 0))}function He(e,t,n){let i=n.length,r=t.length,o=i,l=0,s=0,c=t[r-1].nextSibling,a=null;for(;l<r||s<o;){if(t[l]===n[s]){l++,s++;continue}for(;t[r-1]===n[o-1];)r--,o--;if(r===l){const u=o<i?s?n[s-1].nextSibling:n[o-s]:c;for(;s<o;)e.insertBefore(n[s++],u)}else if(o===s)for(;l<r;)(!a||!a.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[s]===t[r-1]){const u=t[--r].nextSibling;e.insertBefore(n[s++],t[l++].nextSibling),e.insertBefore(n[--o],u),t[r]=n[o]}else{if(!a){a=new Map;let d=s;for(;d<o;)a.set(n[d],d++)}const u=a.get(t[l]);if(u!=null)if(s<u&&u<o){let d=l,g=1,y;for(;++d<r&&d<o&&!((y=a.get(t[d]))==null||y!==u+g);)g++;if(g>u-s){const f=t[l];for(;s<u;)e.insertBefore(n[s++],f)}else e.replaceChild(n[s++],t[l++])}else l++;else t[l++].remove()}}}const ae="_$DX_DELEGATE";function We(e,t,n,i={}){let r;return te(o=>{r=o,t===document?e():x(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{r(),t.textContent=""}}function T(e,t,n){let i;const r=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},o=t?()=>$(()=>document.importNode(i||(i=r()),!0)):()=>(i||(i=r())).cloneNode(!0);return o.cloneNode=o,o}function Se(e,t=window.document){const n=t[ae]||(t[ae]=new Set);for(let i=0,r=e.length;i<r;i++){const o=e[i];n.has(o)||(n.add(o),t.addEventListener(o,Qe))}}function _(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Ye(e,t){t==null?e.removeAttribute("class"):e.className=t}function Ve(e,t,n){return $(()=>e(t,n))}function x(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return H(e,t,i,n);O(r=>H(e,t(),r,n),i)}function Qe(e){let t=e.target;const n=`$$${e.type}`,i=e.target,r=e.currentTarget,o=c=>Object.defineProperty(e,"target",{configurable:!0,value:c}),l=()=>{const c=t[n];if(c&&!t.disabled){const a=t[`${n}Data`];if(a!==void 0?c.call(t,a,e):c.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&o(t.host),!0},s=()=>{for(;l()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const c=e.composedPath();o(c[0]);for(let a=0;a<c.length-2&&(t=c[a],!!l());a++){if(t._$host){t=t._$host,s();break}if(t.parentNode===r)break}}else s();o(i)}function H(e,t,n,i,r){for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=i!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(o==="number"&&(t=t.toString(),t===n))return n;if(l){let s=n[0];s&&s.nodeType===3?s.data!==t&&(s.data=t):s=document.createTextNode(t),n=N(e,n,i,s)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean")n=N(e,n,i);else{if(o==="function")return O(()=>{let s=t();for(;typeof s=="function";)s=s();n=H(e,s,n,i)}),()=>n;if(Array.isArray(t)){const s=[],c=n&&Array.isArray(n);if(ie(s,t,n,r))return O(()=>n=H(e,s,n,i,!0)),()=>n;if(s.length===0){if(n=N(e,n,i),l)return n}else c?n.length===0?de(e,s,i):He(e,n,s):(n&&N(e),de(e,s));n=s}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=N(e,n,i,t);N(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ie(e,t,n,i){let r=!1;for(let o=0,l=t.length;o<l;o++){let s=t[o],c=n&&n[e.length],a;if(!(s==null||s===!0||s===!1))if((a=typeof s)=="object"&&s.nodeType)e.push(s);else if(Array.isArray(s))r=ie(e,s,c)||r;else if(a==="function")if(i){for(;typeof s=="function";)s=s();r=ie(e,Array.isArray(s)?s:[s],Array.isArray(c)?c:[c])||r}else e.push(s),r=!0;else{const u=String(s);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return r}function de(e,t,n=null){for(let i=0,r=t.length;i<r;i++)e.insertBefore(t[i],n)}function N(e,t,n,i){if(n===void 0)return e.textContent="";const r=i||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const s=t[l];if(r!==s){const c=s.parentNode===e;!o&&!l?c?e.replaceChild(r,s):e.insertBefore(r,n):c&&s.remove()}else o=!0}}else e.insertBefore(r,n);return[r]}const re=Symbol("store-raw"),j=Symbol("store-node"),v=Symbol("store-has"),Ce=Symbol("store-self");function Oe(e){let t=e[P];if(!t&&(Object.defineProperty(e,P,{value:t=new Proxy(e,Ze)}),!Array.isArray(e))){const n=Object.keys(e),i=Object.getOwnPropertyDescriptors(e);for(let r=0,o=n.length;r<o;r++){const l=n[r];i[l].get&&Object.defineProperty(e,l,{enumerable:i[l].enumerable,get:i[l].get.bind(t)})}}return t}function W(e){let t;return e!=null&&typeof e=="object"&&(e[P]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function M(e,t=new Set){let n,i,r,o;if(n=e!=null&&e[re])return n;if(!W(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let l=0,s=e.length;l<s;l++)r=e[l],(i=M(r,t))!==r&&(e[l]=i)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const l=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let c=0,a=l.length;c<a;c++)o=l[c],!s[o].get&&(r=e[o],(i=M(r,t))!==r&&(e[o]=i))}return e}function Y(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function G(e,t,n){if(e[t])return e[t];const[i,r]=I(n,{equals:!1,internal:!0});return i.$=r,e[t]=i}function ze(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===P||t===j||(delete n.value,delete n.writable,n.get=()=>e[P][t]),n}function Pe(e){ne()&&G(Y(e,j),Ce)()}function Je(e){return Pe(e),Reflect.ownKeys(e)}const Ze={get(e,t,n){if(t===re)return e;if(t===P)return n;if(t===ee)return Pe(e),n;const i=Y(e,j),r=i[t];let o=r?r():e[t];if(t===j||t===v||t==="__proto__")return o;if(!r){const l=Object.getOwnPropertyDescriptor(e,t);ne()&&(typeof o!="function"||e.hasOwnProperty(t))&&!(l&&l.get)&&(o=G(i,t,o)())}return W(o)?Oe(o):o},has(e,t){return t===re||t===P||t===ee||t===j||t===v||t==="__proto__"?!0:(ne()&&G(Y(e,v),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:Je,getOwnPropertyDescriptor:ze};function V(e,t,n,i=!1){if(!i&&e[t]===n)return;const r=e[t],o=e.length;n===void 0?(delete e[t],e[v]&&e[v][t]&&r!==void 0&&e[v][t].$()):(e[t]=n,e[v]&&e[v][t]&&r===void 0&&e[v][t].$());let l=Y(e,j),s;if((s=G(l,t,r))&&s.$(()=>n),Array.isArray(e)&&e.length!==o){for(let c=e.length;c<o;c++)(s=l[c])&&s.$();(s=G(l,"length",o))&&s.$(e.length)}(s=l[Ce])&&s.$()}function Le(e,t){const n=Object.keys(t);for(let i=0;i<n.length;i+=1){const r=n[i];V(e,r,t[r])}}function et(e,t){if(typeof t=="function"&&(t=t(e)),t=M(t),Array.isArray(t)){if(e===t)return;let n=0,i=t.length;for(;n<i;n++){const r=t[n];e[n]!==r&&V(e,n,r)}V(e,"length",i)}else Le(e,t)}function B(e,t,n=[]){let i,r=e;if(t.length>1){i=t.shift();const l=typeof i,s=Array.isArray(e);if(Array.isArray(i)){for(let c=0;c<i.length;c++)B(e,[i[c]].concat(t),n);return}else if(s&&l==="function"){for(let c=0;c<e.length;c++)i(e[c],c)&&B(e,[c].concat(t),n);return}else if(s&&l==="object"){const{from:c=0,to:a=e.length-1,by:u=1}=i;for(let d=c;d<=a;d+=u)B(e,[d].concat(t),n);return}else if(t.length>1){B(e[i],t,[i].concat(n));return}r=e[i],n=[i].concat(n)}let o=t[0];typeof o=="function"&&(o=o(r,n),o===r)||i===void 0&&o==null||(o=M(o),i===void 0||W(r)&&W(o)&&!Array.isArray(o)?Le(r,o):V(e,i,o))}function tt(...[e,t]){const n=M(e||{}),i=Array.isArray(n),r=Oe(n);function o(...l){k(()=>{i&&l.length===1?et(n,l[0]):B(n,l)})}return[r,o]}const nt={c:[[0,1]],C:[[0,1],[1,0],[0,-1],[-1,0],[1,1],[-1,1]],G:[[0,1],[1,0],[0,-1],[-1,0]],E:[[1,1],[-1,1],[1,-1],[-1,-1]],L:[[0,1],[1,0],[0,-1],[-1,0],[1,1],[-1,1],[1,-1],[-1,-1]]};function it(e,t){const n=new Array(12);n.fill(0);for(const s of e)s.position!==null&&(n[s.position]=s.owner+1);if(t.position===null){const s=[];for(let c=0;c<12;c++)n[c]||s.push(c);return s}const i=[],r=t.position%3,o=t.position/3|0,l=nt[t.type];for(const s of l){const[c,a]=t.owner?[s[0],s[1]]:[-s[0],-s[1]],u=r+c,d=o+a;if(u>=0&&u<3&&d>=0&&d<4){let g=3*d+u;n[g]!==t.owner+1&&i.push(g)}}return i}function rt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var he=1/0,_e=9007199254740991,ot=17976931348623157e292,ge=NaN,st="[object Function]",lt="[object GeneratorFunction]",ct="[object Symbol]",ft=/^\s+|\s+$/g,ut=/^[-+]0x[0-9a-f]+$/i,at=/^0b[01]+$/i,dt=/^0o[0-7]+$/i,ht=/^(?:0|[1-9]\d*)$/,gt=parseInt,pt=Object.prototype,Ne=pt.toString,yt=Math.ceil,bt=Math.max;function wt(e,t,n,i){for(var r=-1,o=bt(yt((t-e)/(n||1)),0),l=Array(o);o--;)l[++r]=e,e+=n;return l}function mt(e){return function(t,n,i){return i&&typeof i!="number"&&At(t,n,i)&&(n=i=void 0),t=Z(t),n===void 0?(n=t,t=0):n=Z(n),i=i===void 0?t<n?1:-1:Z(i),wt(t,n,i)}}function vt(e,t){return t=t??_e,!!t&&(typeof e=="number"||ht.test(e))&&e>-1&&e%1==0&&e<t}function At(e,t,n){if(!Q(n))return!1;var i=typeof t;return(i=="number"?xt(n)&&vt(t,n.length):i=="string"&&t in n)?$t(n[t],e):!1}function $t(e,t){return e===t||e!==e&&t!==t}function xt(e){return e!=null&&Tt(e.length)&&!Et(e)}function Et(e){var t=Q(e)?Ne.call(e):"";return t==st||t==lt}function Tt(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=_e}function Q(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function St(e){return!!e&&typeof e=="object"}function Ct(e){return typeof e=="symbol"||St(e)&&Ne.call(e)==ct}function Z(e){if(!e)return e===0?e:0;if(e=Ot(e),e===he||e===-he){var t=e<0?-1:1;return t*ot}return e===e?e:0}function Ot(e){if(typeof e=="number")return e;if(Ct(e))return ge;if(Q(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Q(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(ft,"");var n=at.test(e);return n||dt.test(e)?gt(e.slice(2),n?2:8):ut.test(e)?ge:+e}var Pt=mt(),Lt=Pt;const _t=rt(Lt);var Nt=T('<div class="w-[42rem] z-20"><svg viewBox="0 0 1600 1680"class=select-none><image x=200 y=0 width=1200 height=1680 href=../board1.webp>'),jt=T("<svg><rect width=298 height=298 stroke-width=20 fill=transparent></svg>",!1,!0),It=T('<svg><image x=-140 y=-140 width=280 height=280 class="transition-transform duration-1000"></svg>',!1,!0),kt=T("<svg><image x=-140 y=-140 width=280 height=280 class=pointer-events-none></svg>",!1,!0);function Dt(e){const t=e.currentTarget,{left:n,top:i,width:r,height:o}=t.getBoundingClientRect();return{x:(e.clientX-n)/r,y:(e.clientY-i)/o}}const Ft=[350,670,1e3,1320],Bt=[480,800,1120],pe={L:"../lion.webp",G:"../giraffe.webp",E:"../elephant.webp",c:"../chick.webp",C:"../chicken.webp"},ye={c:0,E:1,G:2,L:3,C:4},Rt=e=>{const t=e.position;let n,i,r;t===null?(n=e.owner?1500:100,i=e.owner?200+200*ye[e.type]:1570-200*ye[e.type],r=.7):(n=Bt[t%3],i=Ft[t/3|0],r=1);const o=e.owner?"180deg":"0";return`translate(${n}px, ${i}px) rotate(${o}) scale(${r})`},Mt=(e,t)=>{const n=100*e.x,i=100*e.y,r=t.owner?"180deg":"0";return`translate(${n}%, ${i}%) rotate(${r})`},Gt=e=>{const[t,n]=I(null),[i,r]=I(null),o=A(()=>t()!==null?it(e.pieces,e.pieces[t()]):[]),l=(u,d)=>{d.currentTarget&&d.currentTarget.releasePointerCapture(d.pointerId),n(u)},s=u=>{r(Dt(u))},c=u=>{k(()=>{r(null);const d=t();d!==null&&(n(null),e.play(d,u))})},a=u=>{k(()=>{r(null),n(null)})};return(()=>{var u=Nt(),d=u.firstChild;return d.firstChild,d.$$pointerup=a,d.addEventListener("pointerleave",a),d.addEventListener("pointercancel",a),d.$$pointermove=s,x(d,D(ue,{get each(){return _t(0,12)},children:g=>(()=>{var y=jt();return y.$$pointerup=c,y.$$pointerupData=g(),O(f=>{var h=320+330*(g()%3),m=200+325*(g()/3|0),S=o().includes(g())?"lightgreen":"transparent",F=!o().includes(g());return h!==f.e&&_(y,"x",f.e=h),m!==f.t&&_(y,"y",f.t=m),S!==f.a&&_(y,"stroke",f.a=S),F!==f.o&&y.classList.toggle("pointer-events-none",f.o=F),f},{e:void 0,t:void 0,a:void 0,o:void 0}),y})()}),null),x(d,D(ue,{get each(){return e.pieces},children:(g,y)=>(()=>{var f=It();return f.$$pointerdown=l,f.$$pointerdownData=y,O(h=>{var m=Rt(g()),S=pe[g().type],F=t()!==null,le=y===t()?0:100;return m!==h.e&&((h.e=m)!=null?f.style.setProperty("transform",m):f.style.removeProperty("transform")),S!==h.t&&_(f,"href",h.t=S),F!==h.a&&f.classList.toggle("pointer-events-none",h.a=F),le!==h.o&&_(f,"opacity",h.o=le),h},{e:void 0,t:void 0,a:void 0,o:void 0}),f})()}),null),x(d,(()=>{var g=A(()=>!!(i()&&t()!==null));return()=>g()&&(()=>{var y=kt();return O(f=>{var h=Mt(i(),e.pieces[t()]),m=pe[e.pieces[t()].type];return h!==f.e&&((f.e=h)!=null?y.style.setProperty("transform",h):y.style.removeProperty("transform")),m!==f.t&&_(y,"href",f.t=m),f},{e:void 0,t:void 0}),y})()})(),null),u})()};Se(["pointermove","pointerup","pointerdown"]);var qt=()=>{},be=(e,t)=>t();function Ut(e,t){const n=$(e),i=n?[n]:[],{onEnter:r=be,onExit:o=be}=t,[l,s]=I(t.appear?[]:i),[c]=Ge();let a,u=!1;function d(f,h){if(!f)return h&&h();u=!0,o(f,()=>{k(()=>{u=!1,s(m=>m.filter(S=>S!==f)),h&&h()})})}function g(f){const h=a;if(!h)return f&&f();a=void 0,s(m=>[h,...m]),r(h,f??qt)}const y=t.mode==="out-in"?f=>u||d(f,g):t.mode==="in-out"?f=>g(()=>d(f)):f=>{d(f),g()};return Fe(f=>{const h=e();return $(c)?(c(),f):(h!==f&&(a=h,k(()=>$(()=>y(f)))),h)},t.appear?void 0:n),l}var we=e=>e instanceof Element;function oe(e,t){if(t(e))return e;if(typeof e=="function"&&!e.length)return oe(e(),t);if(Array.isArray(e))for(const n of e){const i=oe(n,t);if(i)return i}return null}function Kt(e,t=we,n=we){const i=A(e);return A(()=>oe(i(),t))}function Xt(e){return A(()=>{const t=e.name||"s";return{enterActive:(e.enterActiveClass||t+"-enter-active").split(" "),enter:(e.enterClass||t+"-enter").split(" "),enterTo:(e.enterToClass||t+"-enter-to").split(" "),exitActive:(e.exitActiveClass||t+"-exit-active").split(" "),exit:(e.exitClass||t+"-exit").split(" "),exitTo:(e.exitToClass||t+"-exit-to").split(" "),move:(e.moveClass||t+"-move").split(" ")}})}function je(e){requestAnimationFrame(()=>requestAnimationFrame(e))}function Ht(e,t,n,i){const{onBeforeEnter:r,onEnter:o,onAfterEnter:l}=t;r?.(n),n.classList.add(...e.enter),n.classList.add(...e.enterActive),queueMicrotask(()=>{if(!n.parentNode)return i?.();o?.(n,()=>s())}),je(()=>{n.classList.remove(...e.enter),n.classList.add(...e.enterTo),(!o||o.length<2)&&(n.addEventListener("transitionend",s),n.addEventListener("animationend",s))});function s(c){(!c||c.target===n)&&(i?.(),n.removeEventListener("transitionend",s),n.removeEventListener("animationend",s),n.classList.remove(...e.enterActive),n.classList.remove(...e.enterTo),l?.(n))}}function Wt(e,t,n,i){const{onBeforeExit:r,onExit:o,onAfterExit:l}=t;if(!n.parentNode)return i?.();r?.(n),n.classList.add(...e.exit),n.classList.add(...e.exitActive),o?.(n,()=>s()),je(()=>{n.classList.remove(...e.exit),n.classList.add(...e.exitTo),(!o||o.length<2)&&(n.addEventListener("transitionend",s),n.addEventListener("animationend",s))});function s(c){(!c||c.target===n)&&(i?.(),n.removeEventListener("transitionend",s),n.removeEventListener("animationend",s),n.classList.remove(...e.exitActive),n.classList.remove(...e.exitTo),l?.(n))}}var Yt={inout:"in-out",outin:"out-in"},Vt=e=>{const t=Xt(e);return Ut(Kt(()=>e.children),{mode:Yt[e.mode],appear:e.appear,onEnter(n,i){Ht(t(),e,n,i)},onExit(n,i){Wt(t(),e,n,i)}})},Qt=T("<div>"),zt=T("<div class=tooltip>");const Jt=e=>{const t=A(()=>"Bienvenue sur l'appli"),n=A(()=>"bg-speaking");return(()=>{var i=Qt();return x(i,D(Vt,{onEnter:(r,o)=>{r.animate([{opacity:0},{opacity:1}],{duration:500}).finished.then(o)},onExit:(r,o)=>{r.animate([{opacity:1},{opacity:0}],{duration:500}).finished.then(o)},get children(){return A(()=>!!t())()&&(()=>{var r=zt();return x(r,t),r})()}})),O(()=>Ye(i,`relative w-[15rem] h-[25rem] bg-contain bg-no-repeat ${n()}`)),i})()};var Zt=T('<div class="relative w-screen min-h-screen bg-main bg-contains flex flew-row items-center justify-around portrait:flex-col"><div class="absolute bg-white w-full h-full opacity-30 z-10 pointer-events-none"></div><div class="flex flex-col bg-wood p-6 border-2 border-black rounded-xl gap-4 z-20"><div class=text-4xl>Catch the lion</div><button class=btn>Nouvelle partie</button><button class=btn>Annuler</button><button class=btn>Information'),en=T("<dialog class=dialog>");const tn=()=>{let e;const t=[{type:"E",position:9,owner:0},{type:"L",position:10,owner:0},{type:"G",position:11,owner:0},{type:"c",position:7,owner:0},{type:"E",position:2,owner:1},{type:"L",position:1,owner:1},{type:"G",position:0,owner:1},{type:"c",position:4,owner:1}],[n,i]=tt({pieces:t}),r=(l,s)=>{const c=n.pieces[l].owner,a=n.pieces[l].type;k(()=>{let u=n.pieces.findIndex(d=>d.position===s);u>=0&&(i("pieces",u,{position:null,owner:c}),i("pieces",u,"type",d=>d==="C"?"c":d)),i("pieces",l,"position",s),a==="c"&&(c&&s>8||!c&&s<3)&&i("pieces",l,"type","C")})},o=()=>r(3,4);return[(()=>{var l=Zt(),s=l.firstChild,c=s.nextSibling,a=c.firstChild,u=a.nextSibling;return u.$$click=o,x(l,D(Gt,{get pieces(){return n.pieces},play:r}),null),x(l,D(Jt,{}),null),l})(),(()=>{var l=en(),s=e;return typeof s=="function"?Ve(s,l):e=l,l})()]};Se(["click"]);const nn=document.getElementById("root");We(()=>D(tn,{}),nn);
