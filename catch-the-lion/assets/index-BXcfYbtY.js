(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const je=(e,t)=>e===t,O=Symbol("solid-proxy"),ee=Symbol("solid-track"),H={equals:je};let Ie=$e;const E=1,U=2,we={owned:null,cleanups:null,context:null,owner:null};var b=null;let J=null,ke=null,p=null,m=null,C=null,z=0;function te(e,t){const n=p,i=b,o=e.length===0,r=t===void 0?i:t,l=o?we:{owned:null,cleanups:null,context:r?r.context:null,owner:r},s=o?e:()=>e(()=>x(()=>R(l)));b=l,p=null;try{return P(s,!0)}finally{p=n,b=i}}function I(e,t){t=t?Object.assign({},H,t):H;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=o=>(typeof o=="function"&&(o=o(n.value)),Ae(n,o));return[ve.bind(n),i]}function Be(e,t,n){const i=se(e,t,!0,E);q(i)}function L(e,t,n){const i=se(e,t,!1,E);q(i)}function A(e,t,n){n=n?Object.assign({},H,n):H;const i=se(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,q(i),ve.bind(i)}function k(e){return P(e,!1)}function x(e){if(p===null)return e();const t=p;p=null;try{return e()}finally{p=t}}function De(e){return b===null||(b.cleanups===null?b.cleanups=[e]:b.cleanups.push(e)),e}function ne(){return p}function Fe(e){const t=p,n=b;return Promise.resolve().then(()=>{p=t,b=n;let i;return P(e,!1),p=b=null,i?i.done:void 0})}const[Re,sn]=I(!1);function Me(){return[Re,Fe]}function ve(){if(this.sources&&this.state)if(this.state===E)q(this);else{const e=m;m=null,P(()=>K(this),!1),m=e}if(p){const e=this.observers?this.observers.length:0;p.sources?(p.sources.push(this),p.sourceSlots.push(e)):(p.sources=[this],p.sourceSlots=[e]),this.observers?(this.observers.push(p),this.observerSlots.push(p.sources.length-1)):(this.observers=[p],this.observerSlots=[p.sources.length-1])}return this.value}function Ae(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&P(()=>{for(let o=0;o<e.observers.length;o+=1){const r=e.observers[o],l=J&&J.running;l&&J.disposed.has(r),(l?!r.tState:!r.state)&&(r.pure?m.push(r):C.push(r),r.observers&&Ee(r)),l||(r.state=E)}if(m.length>1e6)throw m=[],new Error},!1)),t}function q(e){if(!e.fn)return;R(e);const t=z;Ge(e,e.value,t)}function Ge(e,t,n){let i;const o=b,r=p;p=b=e;try{i=e.fn(t)}catch(l){return e.pure&&(e.state=E,e.owned&&e.owned.forEach(R),e.owned=null),e.updatedAt=n+1,Te(l)}finally{p=r,b=o}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Ae(e,i):e.value=i,e.updatedAt=n)}function se(e,t,n,i=E,o){const r={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:b,context:b?b.context:null,pure:n};return b===null||b!==we&&(b.owned?b.owned.push(r):b.owned=[r]),r}function xe(e){if(e.state===0)return;if(e.state===U)return K(e);if(e.suspense&&x(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<z);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===E)q(e);else if(e.state===U){const i=m;m=null,P(()=>K(e,t[0]),!1),m=i}}function P(e,t){if(m)return e();let n=!1;t||(m=[]),C?n=!0:C=[],z++;try{const i=e();return qe(n),i}catch(i){n||(C=null),m=null,Te(i)}}function qe(e){if(m&&($e(m),m=null),e)return;const t=C;C=null,t.length&&P(()=>Ie(t),!1)}function $e(e){for(let t=0;t<e.length;t++)xe(e[t])}function K(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];if(i.sources){const o=i.state;o===E?i!==t&&(!i.updatedAt||i.updatedAt<z)&&xe(i):o===U&&K(i,t)}}}function Ee(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=U,n.pure?m.push(n):C.push(n),n.observers&&Ee(n))}}function R(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const r=o.pop(),l=n.observerSlots.pop();i<o.length&&(r.sourceSlots[l]=i,o[i]=r,n.observerSlots[i]=l)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)R(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)R(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function He(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Te(e,t=b){throw He(e)}const ce=Symbol("fallback");function fe(e){for(let t=0;t<e.length;t++)e[t]()}function Ue(e,t,n={}){let i=[],o=[],r=[],l=[],s=0,c;return De(()=>fe(r)),()=>{const a=e()||[],u=a.length;return a[ee],x(()=>{if(u===0)return s!==0&&(fe(r),r=[],i=[],o=[],s=0,l=[]),n.fallback&&(i=[ce],o[0]=te(g=>(r[0]=g,n.fallback())),s=1),o;for(i[0]===ce&&(r[0](),r=[],i=[],o=[],s=0),c=0;c<u;c++)c<i.length&&i[c]!==a[c]?l[c](()=>a[c]):c>=i.length&&(o[c]=te(d));for(;c<i.length;c++)r[c]();return s=l.length=r.length=u,i=a.slice(0),o=o.slice(0,s)});function d(g){r[c]=g;const[y,f]=I(a[c]);return l[c]=f,t(y,c)}}}function B(e,t){return x(()=>e(t||{}))}function ue(e){const t="fallback"in e&&{fallback:()=>e.fallback};return A(Ue(()=>e.each,e.children,t||void 0))}function Ke(e,t,n){let i=n.length,o=t.length,r=i,l=0,s=0,c=t[o-1].nextSibling,a=null;for(;l<o||s<r;){if(t[l]===n[s]){l++,s++;continue}for(;t[o-1]===n[r-1];)o--,r--;if(o===l){const u=r<i?s?n[s-1].nextSibling:n[r-s]:c;for(;s<r;)e.insertBefore(n[s++],u)}else if(r===s)for(;l<o;)(!a||!a.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[r-1]&&n[s]===t[o-1]){const u=t[--o].nextSibling;e.insertBefore(n[s++],t[l++].nextSibling),e.insertBefore(n[--r],u),t[o]=n[r]}else{if(!a){a=new Map;let d=s;for(;d<r;)a.set(n[d],d++)}const u=a.get(t[l]);if(u!=null)if(s<u&&u<r){let d=l,g=1,y;for(;++d<o&&d<r&&!((y=a.get(t[d]))==null||y!==u+g);)g++;if(g>u-s){const f=t[l];for(;s<u;)e.insertBefore(n[s++],f)}else e.replaceChild(n[s++],t[l++])}else l++;else t[l++].remove()}}}const ae="_$DX_DELEGATE";function Xe(e,t,n,i={}){let o;return te(r=>{o=r,t===document?e():$(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{o(),t.textContent=""}}function T(e,t,n){let i;const o=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},r=t?()=>x(()=>document.importNode(i||(i=o()),!0)):()=>(i||(i=o())).cloneNode(!0);return r.cloneNode=r,r}function We(e,t=window.document){const n=t[ae]||(t[ae]=new Set);for(let i=0,o=e.length;i<o;i++){const r=e[i];n.has(r)||(n.add(r),t.addEventListener(r,Qe))}}function N(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Ye(e,t){t==null?e.removeAttribute("class"):e.className=t}function Ve(e,t,n){return x(()=>e(t,n))}function $(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return X(e,t,i,n);L(o=>X(e,t(),o,n),i)}function Qe(e){let t=e.target;const n=`$$${e.type}`,i=e.target,o=e.currentTarget,r=c=>Object.defineProperty(e,"target",{configurable:!0,value:c}),l=()=>{const c=t[n];if(c&&!t.disabled){const a=t[`${n}Data`];if(a!==void 0?c.call(t,a,e):c.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&r(t.host),!0},s=()=>{for(;l()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const c=e.composedPath();r(c[0]);for(let a=0;a<c.length-2&&(t=c[a],!!l());a++){if(t._$host){t=t._$host,s();break}if(t.parentNode===o)break}}else s();r(i)}function X(e,t,n,i,o){for(;typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,l=i!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,r==="string"||r==="number"){if(r==="number"&&(t=t.toString(),t===n))return n;if(l){let s=n[0];s&&s.nodeType===3?s.data!==t&&(s.data=t):s=document.createTextNode(t),n=_(e,n,i,s)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||r==="boolean")n=_(e,n,i);else{if(r==="function")return L(()=>{let s=t();for(;typeof s=="function";)s=s();n=X(e,s,n,i)}),()=>n;if(Array.isArray(t)){const s=[],c=n&&Array.isArray(n);if(ie(s,t,n,o))return L(()=>n=X(e,s,n,i,!0)),()=>n;if(s.length===0){if(n=_(e,n,i),l)return n}else c?n.length===0?de(e,s,i):Ke(e,n,s):(n&&_(e),de(e,s));n=s}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=_(e,n,i,t);_(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ie(e,t,n,i){let o=!1;for(let r=0,l=t.length;r<l;r++){let s=t[r],c=n&&n[e.length],a;if(!(s==null||s===!0||s===!1))if((a=typeof s)=="object"&&s.nodeType)e.push(s);else if(Array.isArray(s))o=ie(e,s,c)||o;else if(a==="function")if(i){for(;typeof s=="function";)s=s();o=ie(e,Array.isArray(s)?s:[s],Array.isArray(c)?c:[c])||o}else e.push(s),o=!0;else{const u=String(s);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return o}function de(e,t,n=null){for(let i=0,o=t.length;i<o;i++)e.insertBefore(t[i],n)}function _(e,t,n,i){if(n===void 0)return e.textContent="";const o=i||document.createTextNode("");if(t.length){let r=!1;for(let l=t.length-1;l>=0;l--){const s=t[l];if(o!==s){const c=s.parentNode===e;!r&&!l?c?e.replaceChild(o,s):e.insertBefore(o,n):c&&s.remove()}else r=!0}}else e.insertBefore(o,n);return[o]}const re=Symbol("store-raw"),j=Symbol("store-node"),v=Symbol("store-has"),Se=Symbol("store-self");function Ce(e){let t=e[O];if(!t&&(Object.defineProperty(e,O,{value:t=new Proxy(e,Ze)}),!Array.isArray(e))){const n=Object.keys(e),i=Object.getOwnPropertyDescriptors(e);for(let o=0,r=n.length;o<r;o++){const l=n[o];i[l].get&&Object.defineProperty(e,l,{enumerable:i[l].enumerable,get:i[l].get.bind(t)})}}return t}function W(e){let t;return e!=null&&typeof e=="object"&&(e[O]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function M(e,t=new Set){let n,i,o,r;if(n=e!=null&&e[re])return n;if(!W(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let l=0,s=e.length;l<s;l++)o=e[l],(i=M(o,t))!==o&&(e[l]=i)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const l=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let c=0,a=l.length;c<a;c++)r=l[c],!s[r].get&&(o=e[r],(i=M(o,t))!==o&&(e[r]=i))}return e}function Y(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function G(e,t,n){if(e[t])return e[t];const[i,o]=I(n,{equals:!1,internal:!0});return i.$=o,e[t]=i}function ze(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===O||t===j||(delete n.value,delete n.writable,n.get=()=>e[O][t]),n}function Le(e){ne()&&G(Y(e,j),Se)()}function Je(e){return Le(e),Reflect.ownKeys(e)}const Ze={get(e,t,n){if(t===re)return e;if(t===O)return n;if(t===ee)return Le(e),n;const i=Y(e,j),o=i[t];let r=o?o():e[t];if(t===j||t===v||t==="__proto__")return r;if(!o){const l=Object.getOwnPropertyDescriptor(e,t);ne()&&(typeof r!="function"||e.hasOwnProperty(t))&&!(l&&l.get)&&(r=G(i,t,r)())}return W(r)?Ce(r):r},has(e,t){return t===re||t===O||t===ee||t===j||t===v||t==="__proto__"?!0:(ne()&&G(Y(e,v),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:Je,getOwnPropertyDescriptor:ze};function V(e,t,n,i=!1){if(!i&&e[t]===n)return;const o=e[t],r=e.length;n===void 0?(delete e[t],e[v]&&e[v][t]&&o!==void 0&&e[v][t].$()):(e[t]=n,e[v]&&e[v][t]&&o===void 0&&e[v][t].$());let l=Y(e,j),s;if((s=G(l,t,o))&&s.$(()=>n),Array.isArray(e)&&e.length!==r){for(let c=e.length;c<r;c++)(s=l[c])&&s.$();(s=G(l,"length",r))&&s.$(e.length)}(s=l[Se])&&s.$()}function Oe(e,t){const n=Object.keys(t);for(let i=0;i<n.length;i+=1){const o=n[i];V(e,o,t[o])}}function et(e,t){if(typeof t=="function"&&(t=t(e)),t=M(t),Array.isArray(t)){if(e===t)return;let n=0,i=t.length;for(;n<i;n++){const o=t[n];e[n]!==o&&V(e,n,o)}V(e,"length",i)}else Oe(e,t)}function F(e,t,n=[]){let i,o=e;if(t.length>1){i=t.shift();const l=typeof i,s=Array.isArray(e);if(Array.isArray(i)){for(let c=0;c<i.length;c++)F(e,[i[c]].concat(t),n);return}else if(s&&l==="function"){for(let c=0;c<e.length;c++)i(e[c],c)&&F(e,[c].concat(t),n);return}else if(s&&l==="object"){const{from:c=0,to:a=e.length-1,by:u=1}=i;for(let d=c;d<=a;d+=u)F(e,[d].concat(t),n);return}else if(t.length>1){F(e[i],t,[i].concat(n));return}o=e[i],n=[i].concat(n)}let r=t[0];typeof r=="function"&&(r=r(o,n),r===o)||i===void 0&&r==null||(r=M(r),i===void 0||W(o)&&W(r)&&!Array.isArray(r)?Oe(o,r):V(e,i,r))}function tt(...[e,t]){const n=M(e||{}),i=Array.isArray(n),o=Ce(n);function r(...l){k(()=>{i&&l.length===1?et(n,l[0]):F(n,l)})}return[o,r]}const nt=()=>[{type:"E",position:9,owner:0},{type:"L",position:10,owner:0},{type:"G",position:11,owner:0},{type:"C",position:7,owner:0},{type:"E",position:2,owner:1},{type:"L",position:1,owner:1},{type:"G",position:0,owner:1},{type:"C",position:4,owner:1}],it=()=>({pieces:nt(),turn:0,outcome:null}),rt={C:[[0,1]],H:[[0,1],[1,0],[0,-1],[-1,0],[1,1],[-1,1]],G:[[0,1],[1,0],[0,-1],[-1,0]],E:[[1,1],[-1,1],[1,-1],[-1,-1]],L:[[0,1],[1,0],[0,-1],[-1,0],[1,1],[-1,1],[1,-1],[-1,-1]]};function ot(e,t){const n=new Array(12);n.fill(0);for(const s of e)s.position!==null&&(n[s.position]=s.owner+1);if(t.position===null){const s=[];for(let c=0;c<12;c++)n[c]||s.push(c);return s}const i=[],o=t.position%3,r=t.position/3|0,l=rt[t.type];for(const s of l){const[c,a]=t.owner?[s[0],s[1]]:[-s[0],-s[1]],u=o+c,d=r+a;if(u>=0&&u<3&&d>=0&&d<4){let g=3*d+u;n[g]!==t.owner+1&&i.push(g)}}return i}function st(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var he=1/0,Pe=9007199254740991,lt=17976931348623157e292,ge=NaN,ct="[object Function]",ft="[object GeneratorFunction]",ut="[object Symbol]",at=/^\s+|\s+$/g,dt=/^[-+]0x[0-9a-f]+$/i,ht=/^0b[01]+$/i,gt=/^0o[0-7]+$/i,pt=/^(?:0|[1-9]\d*)$/,yt=parseInt,bt=Object.prototype,Ne=bt.toString,mt=Math.ceil,wt=Math.max;function vt(e,t,n,i){for(var o=-1,r=wt(mt((t-e)/(n||1)),0),l=Array(r);r--;)l[++o]=e,e+=n;return l}function At(e){return function(t,n,i){return i&&typeof i!="number"&&$t(t,n,i)&&(n=i=void 0),t=Z(t),n===void 0?(n=t,t=0):n=Z(n),i=i===void 0?t<n?1:-1:Z(i),vt(t,n,i)}}function xt(e,t){return t=t??Pe,!!t&&(typeof e=="number"||pt.test(e))&&e>-1&&e%1==0&&e<t}function $t(e,t,n){if(!Q(n))return!1;var i=typeof t;return(i=="number"?Tt(n)&&xt(t,n.length):i=="string"&&t in n)?Et(n[t],e):!1}function Et(e,t){return e===t||e!==e&&t!==t}function Tt(e){return e!=null&&Ct(e.length)&&!St(e)}function St(e){var t=Q(e)?Ne.call(e):"";return t==ct||t==ft}function Ct(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Pe}function Q(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Lt(e){return!!e&&typeof e=="object"}function Ot(e){return typeof e=="symbol"||Lt(e)&&Ne.call(e)==ut}function Z(e){if(!e)return e===0?e:0;if(e=Pt(e),e===he||e===-he){var t=e<0?-1:1;return t*lt}return e===e?e:0}function Pt(e){if(typeof e=="number")return e;if(Ot(e))return ge;if(Q(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Q(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(at,"");var n=ht.test(e);return n||gt.test(e)?yt(e.slice(2),n?2:8):dt.test(e)?ge:+e}var Nt=At(),_t=Nt;const jt=st(_t);var It=T('<div class="w-[42rem] z-20"><svg viewBox="0 0 1600 1680"class=select-none><image x=200 y=0 width=1200 height=1680 href=./board.webp>'),kt=T("<svg><rect width=298 height=298 stroke-width=20 fill=transparent></svg>",!1,!0),Bt=T('<svg><image x=-140 y=-140 width=280 height=280 class="transition-transform duration-1000"></svg>',!1,!0),Dt=T("<svg><image x=-140 y=-140 width=280 height=280 class=pointer-events-none></svg>",!1,!0);function Ft(e){const t=e.currentTarget,{left:n,top:i,width:o,height:r}=t.getBoundingClientRect();return{x:(e.clientX-n)/o,y:(e.clientY-i)/r}}const Rt=[350,670,1e3,1320],Mt=[480,800,1120],pe={L:"./lion.webp",G:"./giraffe.webp",E:"./elephant.webp",C:"./chick.webp",H:"./chicken.webp"},ye={C:0,E:1,G:2,L:3,H:4},Gt=e=>{const t=e.position;let n,i,o;t===null?(n=e.owner?1500:100,i=e.owner?200+200*ye[e.type]:1570-200*ye[e.type],o=.7):(n=Mt[t%3],i=Rt[t/3|0],o=1);const r=e.owner?"180deg":"0";return`translate(${n}px, ${i}px) rotate(${r}) scale(${o})`},qt=(e,t)=>{const n=100*e.x,i=100*e.y,o=t.owner?"180deg":"0";return`translate(${n}%, ${i}%) rotate(${o})`},Ht=e=>{const[t,n]=I(null),[i,o]=I(null),r=A(()=>t()!==null?ot(e.pieces,e.pieces[t()]):[]),l=(u,d)=>{e.outcome!==null||e.pieces[u].owner!==e.turn||(d.currentTarget&&d.currentTarget.releasePointerCapture(d.pointerId),n(u))},s=u=>{o(Ft(u))},c=u=>{k(()=>{o(null);const d=t();d!==null&&(n(null),e.play(d,u))})},a=u=>{k(()=>{o(null),n(null)})};return(()=>{var u=It(),d=u.firstChild;return d.firstChild,d.$$pointerup=a,d.addEventListener("pointerleave",a),d.addEventListener("pointercancel",a),d.$$pointermove=s,$(d,B(ue,{get each(){return jt(0,12)},children:g=>(()=>{var y=kt();return y.$$pointerup=c,y.$$pointerupData=g(),L(f=>{var h=320+330*(g()%3),w=200+325*(g()/3|0),S=r().includes(g())?"lightgreen":"transparent",D=!r().includes(g());return h!==f.e&&N(y,"x",f.e=h),w!==f.t&&N(y,"y",f.t=w),S!==f.a&&N(y,"stroke",f.a=S),D!==f.o&&y.classList.toggle("pointer-events-none",f.o=D),f},{e:void 0,t:void 0,a:void 0,o:void 0}),y})()}),null),$(d,B(ue,{get each(){return e.pieces},children:(g,y)=>(()=>{var f=Bt();return f.$$pointerdown=l,f.$$pointerdownData=y,L(h=>{var w=Gt(g()),S=pe[g().type],D=t()!==null,le=y===t()?0:100;return w!==h.e&&((h.e=w)!=null?f.style.setProperty("transform",w):f.style.removeProperty("transform")),S!==h.t&&N(f,"href",h.t=S),D!==h.a&&f.classList.toggle("pointer-events-none",h.a=D),le!==h.o&&N(f,"opacity",h.o=le),h},{e:void 0,t:void 0,a:void 0,o:void 0}),f})()}),null),$(d,(()=>{var g=A(()=>!!(i()&&t()!==null));return()=>g()&&(()=>{var y=Dt();return L(f=>{var h=qt(i(),e.pieces[t()]),w=pe[e.pieces[t()].type];return h!==f.e&&((f.e=h)!=null?y.style.setProperty("transform",h):y.style.removeProperty("transform")),w!==f.t&&N(y,"href",f.t=w),f},{e:void 0,t:void 0}),y})()})(),null),u})()};We(["pointermove","pointerup","pointerdown"]);var Ut=()=>{},be=(e,t)=>t();function Kt(e,t){const n=x(e),i=n?[n]:[],{onEnter:o=be,onExit:r=be}=t,[l,s]=I(t.appear?[]:i),[c]=Me();let a,u=!1;function d(f,h){if(!f)return h&&h();u=!0,r(f,()=>{k(()=>{u=!1,s(w=>w.filter(S=>S!==f)),h&&h()})})}function g(f){const h=a;if(!h)return f&&f();a=void 0,s(w=>[h,...w]),o(h,f??Ut)}const y=t.mode==="out-in"?f=>u||d(f,g):t.mode==="in-out"?f=>g(()=>d(f)):f=>{d(f),g()};return Be(f=>{const h=e();return x(c)?(c(),f):(h!==f&&(a=h,k(()=>x(()=>y(f)))),h)},t.appear?void 0:n),l}var me=e=>e instanceof Element;function oe(e,t){if(t(e))return e;if(typeof e=="function"&&!e.length)return oe(e(),t);if(Array.isArray(e))for(const n of e){const i=oe(n,t);if(i)return i}return null}function Xt(e,t=me,n=me){const i=A(e);return A(()=>oe(i(),t))}function Wt(e){return A(()=>{const t=e.name||"s";return{enterActive:(e.enterActiveClass||t+"-enter-active").split(" "),enter:(e.enterClass||t+"-enter").split(" "),enterTo:(e.enterToClass||t+"-enter-to").split(" "),exitActive:(e.exitActiveClass||t+"-exit-active").split(" "),exit:(e.exitClass||t+"-exit").split(" "),exitTo:(e.exitToClass||t+"-exit-to").split(" "),move:(e.moveClass||t+"-move").split(" ")}})}function _e(e){requestAnimationFrame(()=>requestAnimationFrame(e))}function Yt(e,t,n,i){const{onBeforeEnter:o,onEnter:r,onAfterEnter:l}=t;o?.(n),n.classList.add(...e.enter),n.classList.add(...e.enterActive),queueMicrotask(()=>{if(!n.parentNode)return i?.();r?.(n,()=>s())}),_e(()=>{n.classList.remove(...e.enter),n.classList.add(...e.enterTo),(!r||r.length<2)&&(n.addEventListener("transitionend",s),n.addEventListener("animationend",s))});function s(c){(!c||c.target===n)&&(i?.(),n.removeEventListener("transitionend",s),n.removeEventListener("animationend",s),n.classList.remove(...e.enterActive),n.classList.remove(...e.enterTo),l?.(n))}}function Vt(e,t,n,i){const{onBeforeExit:o,onExit:r,onAfterExit:l}=t;if(!n.parentNode)return i?.();o?.(n),n.classList.add(...e.exit),n.classList.add(...e.exitActive),r?.(n,()=>s()),_e(()=>{n.classList.remove(...e.exit),n.classList.add(...e.exitTo),(!r||r.length<2)&&(n.addEventListener("transitionend",s),n.addEventListener("animationend",s))});function s(c){(!c||c.target===n)&&(i?.(),n.removeEventListener("transitionend",s),n.removeEventListener("animationend",s),n.classList.remove(...e.exitActive),n.classList.remove(...e.exitTo),l?.(n))}}var Qt={inout:"in-out",outin:"out-in"},zt=e=>{const t=Wt(e);return Kt(Xt(()=>e.children),{mode:Qt[e.mode],appear:e.appear,onEnter(n,i){Yt(t(),e,n,i)},onExit(n,i){Vt(t(),e,n,i)}})},Jt=T("<div>"),Zt=T("<div class=tooltip>");const en=e=>{const t=A(()=>e.outcome!==null?`Bravo! Le joueur ${e.outcome+1} a gagné!`:"Bienvenue sur l'appli"),n=A(()=>e.outcome!==null?"bg-happy":"bg-speaking");return(()=>{var i=Jt();return $(i,B(zt,{onEnter:(o,r)=>{o.animate([{opacity:0},{opacity:1}],{duration:500}).finished.then(r)},onExit:(o,r)=>{o.animate([{opacity:1},{opacity:0}],{duration:500}).finished.then(r)},get children(){return A(()=>!!t())()&&(()=>{var o=Zt();return $(o,t),o})()}})),L(()=>Ye(i,`relative w-[15rem] h-[25rem] bg-contain bg-no-repeat ${n()}`)),i})()};var tn=T('<div class="relative w-screen min-h-screen bg-main bg-contain flex flew-row items-center justify-around portrait:flex-col"><div class="absolute bg-white w-full h-full opacity-30 z-10 pointer-events-none"></div><div class="flex flex-col bg-board b-cover p-6 border-2 border-black rounded-xl gap-4 z-20"><div class=text-4xl>Catch the lion</div><button class=btn>Nouvelle partie</button><button class=btn>Annuler</button><button class=btn>Information'),nn=T("<dialog class=dialog>");const rn=()=>{let e;const[t,n]=tt(it()),i=(r,l)=>{const s=t.pieces[r].owner,c=t.pieces[r].type;k(()=>{let a=t.pieces.findIndex(u=>u.position===l);a>=0&&(n("pieces",a,{position:null,owner:s}),n("pieces",a,"type",u=>u==="H"?"C":u),t.pieces[a].type==="L"&&n("outcome",s)),n("pieces",r,"position",l),c==="C"&&(s&&l>8||!s&&l<3)&&n("pieces",r,"type","H"),n("turn",u=>u===0?1:0)})},o=(r,l)=>{i(r,l)};return[(()=>{var r=tn(),l=r.firstChild;return l.nextSibling,$(r,B(Ht,{get pieces(){return t.pieces},get turn(){return t.turn},get outcome(){return t.outcome},play:o}),null),$(r,B(en,{get outcome(){return t.outcome}}),null),r})(),(()=>{var r=nn(),l=e;return typeof l=="function"?Ve(l,r):e=r,r})()]},on=document.getElementById("root");Xe(()=>B(rn,{}),on);
