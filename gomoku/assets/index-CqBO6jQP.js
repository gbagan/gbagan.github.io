(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const Ze=(e,t)=>e===t,j=Symbol("solid-proxy"),J=Symbol("solid-track"),Z={equals:Ze};let je=Fe;const C=1,z=2,Ne={owned:null,cleanups:null,context:null,owner:null};var w=null;let ae=null,ze=null,b=null,k=null,L=null,ue=0;function B(e,t){const n=b,i=w,s=e.length===0,o=t===void 0?i:t,c=s?Ne:{owned:null,cleanups:null,context:o?o.context:null,owner:o},r=s?e:()=>e(()=>T(()=>W(c)));w=c,b=null;try{return I(r,!0)}finally{b=n,w=i}}function N(e,t){t=t?Object.assign({},Z,t):Z;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=s=>(typeof s=="function"&&(s=s(n.value)),De(n,s));return[Me.bind(n),i]}function et(e,t,n){const i=fe(e,t,!0,C);H(i)}function $(e,t,n){const i=fe(e,t,!1,C);H(i)}function tt(e,t,n){je=ct;const i=fe(e,t,!1,C);i.user=!0,L?L.push(i):H(i)}function A(e,t,n){n=n?Object.assign({},Z,n):Z;const i=fe(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,H(i),Me.bind(i)}function he(e){return I(e,!1)}function T(e){if(b===null)return e();const t=b;b=null;try{return e()}finally{b=t}}function nt(e){tt(()=>T(e))}function Ie(e){return w===null||(w.cleanups===null?w.cleanups=[e]:w.cleanups.push(e)),e}function ye(){return b}function it(e){const t=b,n=w;return Promise.resolve().then(()=>{b=t,w=n;let i;return I(e,!1),b=w=null,i?i.done:void 0})}const[rt,In]=N(!1);function ot(){return[rt,it]}function Me(){if(this.sources&&this.state)if(this.state===C)H(this);else{const e=k;k=null,I(()=>te(this),!1),k=e}if(b){const e=this.observers?this.observers.length:0;b.sources?(b.sources.push(this),b.sourceSlots.push(e)):(b.sources=[this],b.sourceSlots=[e]),this.observers?(this.observers.push(b),this.observerSlots.push(b.sources.length-1)):(this.observers=[b],this.observerSlots=[b.sources.length-1])}return this.value}function De(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&I(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s],c=ae&&ae.running;c&&ae.disposed.has(o),(c?!o.tState:!o.state)&&(o.pure?k.push(o):L.push(o),o.observers&&Be(o)),c||(o.state=C)}if(k.length>1e6)throw k=[],new Error},!1)),t}function H(e){if(!e.fn)return;W(e);const t=ue;lt(e,e.value,t)}function lt(e,t,n){let i;const s=w,o=b;b=w=e;try{i=e.fn(t)}catch(c){return e.pure&&(e.state=C,e.owned&&e.owned.forEach(W),e.owned=null),e.updatedAt=n+1,Re(c)}finally{b=o,w=s}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?De(e,i):e.value=i,e.updatedAt=n)}function fe(e,t,n,i=C,s){const o={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:w,context:w?w.context:null,pure:n};return w===null||w!==Ne&&(w.owned?w.owned.push(o):w.owned=[o]),o}function ee(e){if(e.state===0)return;if(e.state===z)return te(e);if(e.suspense&&T(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ue);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===C)H(e);else if(e.state===z){const i=k;k=null,I(()=>te(e,t[0]),!1),k=i}}function I(e,t){if(k)return e();let n=!1;t||(k=[]),L?n=!0:L=[],ue++;try{const i=e();return st(n),i}catch(i){n||(L=null),k=null,Re(i)}}function st(e){if(k&&(Fe(k),k=null),e)return;const t=L;L=null,t.length&&I(()=>je(t),!1)}function Fe(e){for(let t=0;t<e.length;t++)ee(e[t])}function ct(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:ee(i)}for(t=0;t<n;t++)ee(e[t])}function te(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];if(i.sources){const s=i.state;s===C?i!==t&&(!i.updatedAt||i.updatedAt<ue)&&ee(i):s===z&&te(i,t)}}}function Be(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=z,n.pure?k.push(n):L.push(n),n.observers&&Be(n))}}function W(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),c=n.observerSlots.pop();i<s.length&&(o.sourceSlots[c]=i,s[i]=o,n.observerSlots[i]=c)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)W(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)W(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function ut(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Re(e,t=w){throw ut(e)}const me=Symbol("fallback");function ne(e){for(let t=0;t<e.length;t++)e[t]()}function ft(e,t,n={}){let i=[],s=[],o=[],c=0,r=t.length>1?[]:null;return Ie(()=>ne(o)),()=>{let l=e()||[],u=l.length,f,a;return l[J],T(()=>{let d,h,v,P,M,E,S,_,D;if(u===0)c!==0&&(ne(o),o=[],i=[],s=[],c=0,r&&(r=[])),n.fallback&&(i=[me],s[0]=B(Je=>(o[0]=Je,n.fallback())),c=1);else if(c===0){for(s=new Array(u),a=0;a<u;a++)i[a]=l[a],s[a]=B(g);c=u}else{for(v=new Array(u),P=new Array(u),r&&(M=new Array(u)),E=0,S=Math.min(c,u);E<S&&i[E]===l[E];E++);for(S=c-1,_=u-1;S>=E&&_>=E&&i[S]===l[_];S--,_--)v[_]=s[S],P[_]=o[S],r&&(M[_]=r[S]);for(d=new Map,h=new Array(_+1),a=_;a>=E;a--)D=l[a],f=d.get(D),h[a]=f===void 0?-1:f,d.set(D,a);for(f=E;f<=S;f++)D=i[f],a=d.get(D),a!==void 0&&a!==-1?(v[a]=s[f],P[a]=o[f],r&&(M[a]=r[f]),a=h[a],d.set(D,a)):o[f]();for(a=E;a<u;a++)a in v?(s[a]=v[a],o[a]=P[a],r&&(r[a]=M[a],r[a](a))):s[a]=B(g);s=s.slice(0,c=u),i=l.slice(0)}return s});function g(d){if(o[a]=d,r){const[h,v]=N(a);return r[a]=v,t(l[a],h)}return t(l[a])}}}function at(e,t,n={}){let i=[],s=[],o=[],c=[],r=0,l;return Ie(()=>ne(o)),()=>{const u=e()||[],f=u.length;return u[J],T(()=>{if(f===0)return r!==0&&(ne(o),o=[],i=[],s=[],r=0,c=[]),n.fallback&&(i=[me],s[0]=B(g=>(o[0]=g,n.fallback())),r=1),s;for(i[0]===me&&(o[0](),o=[],i=[],s=[],r=0),l=0;l<f;l++)l<i.length&&i[l]!==u[l]?c[l](()=>u[l]):l>=i.length&&(s[l]=B(a));for(;l<i.length;l++)o[l]();return r=c.length=o.length=f,i=u.slice(0),s=s.slice(0,r)});function a(g){o[l]=g;const[d,h]=N(u[l]);return c[l]=h,t(d,l)}}}function p(e,t){return T(()=>e(t||{}))}const dt=e=>`Stale read from <${e}>.`;function Y(e){const t="fallback"in e&&{fallback:()=>e.fallback};return A(ft(()=>e.each,e.children,t||void 0))}function gt(e){const t="fallback"in e&&{fallback:()=>e.fallback};return A(at(()=>e.each,e.children,t||void 0))}function $e(e){const t=e.keyed,n=A(()=>e.when,void 0,{equals:(i,s)=>t?i===s:!i==!s});return A(()=>{const i=n();if(i){const s=e.children;return typeof s=="function"&&s.length>0?T(()=>s(t?i:()=>{if(!T(n))throw dt("Show");return e.when})):s}return e.fallback},void 0,void 0)}function ht(e,t,n){let i=n.length,s=t.length,o=i,c=0,r=0,l=t[s-1].nextSibling,u=null;for(;c<s||r<o;){if(t[c]===n[r]){c++,r++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===c){const f=o<i?r?n[r-1].nextSibling:n[o-r]:l;for(;r<o;)e.insertBefore(n[r++],f)}else if(o===r)for(;c<s;)(!u||!u.has(t[c]))&&t[c].remove(),c++;else if(t[c]===n[o-1]&&n[r]===t[s-1]){const f=t[--s].nextSibling;e.insertBefore(n[r++],t[c++].nextSibling),e.insertBefore(n[--o],f),t[s]=n[o]}else{if(!u){u=new Map;let a=r;for(;a<o;)u.set(n[a],a++)}const f=u.get(t[c]);if(f!=null)if(r<f&&f<o){let a=c,g=1,d;for(;++a<s&&a<o&&!((d=u.get(t[a]))==null||d!==f+g);)g++;if(g>f-r){const h=t[c];for(;r<f;)e.insertBefore(n[r++],h)}else e.replaceChild(n[r++],t[c++])}else c++;else t[c++].remove()}}}const Ae="_$DX_DELEGATE";function yt(e,t,n,i={}){let s;return B(o=>{s=o,t===document?e():m(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{s(),t.textContent=""}}function x(e,t,n){let i;const s=()=>{const c=document.createElement("template");return c.innerHTML=e,n?c.content.firstChild.firstChild:c.content.firstChild},o=t?()=>T(()=>document.importNode(i||(i=s()),!0)):()=>(i||(i=s())).cloneNode(!0);return o.cloneNode=o,o}function xe(e,t=window.document){const n=t[Ae]||(t[Ae]=new Set);for(let i=0,s=e.length;i<s;i++){const o=e[i];n.has(o)||(n.add(o),t.addEventListener(o,wt))}}function y(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function mt(e,t){t==null?e.removeAttribute("class"):e.className=t}function vt(e,t,n,i){Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n}function bt(e,t,n){return T(()=>e(t,n))}function m(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return ie(e,t,i,n);$(s=>ie(e,t(),s,n),i)}function wt(e){let t=e.target;const n=`$$${e.type}`,i=e.target,s=e.currentTarget,o=l=>Object.defineProperty(e,"target",{configurable:!0,value:l}),c=()=>{const l=t[n];if(l&&!t.disabled){const u=t[`${n}Data`];if(u!==void 0?l.call(t,u,e):l.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&o(t.host),!0},r=()=>{for(;c()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const l=e.composedPath();o(l[0]);for(let u=0;u<l.length-2&&(t=l[u],!!c());u++){if(t._$host){t=t._$host,r();break}if(t.parentNode===s)break}}else r();o(i)}function ie(e,t,n,i,s){for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,c=i!==void 0;if(e=c&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(o==="number"&&(t=t.toString(),t===n))return n;if(c){let r=n[0];r&&r.nodeType===3?r.data!==t&&(r.data=t):r=document.createTextNode(t),n=F(e,n,i,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean")n=F(e,n,i);else{if(o==="function")return $(()=>{let r=t();for(;typeof r=="function";)r=r();n=ie(e,r,n,i)}),()=>n;if(Array.isArray(t)){const r=[],l=n&&Array.isArray(n);if(ve(r,t,n,s))return $(()=>n=ie(e,r,n,i,!0)),()=>n;if(r.length===0){if(n=F(e,n,i),c)return n}else l?n.length===0?ke(e,r,i):ht(e,n,r):(n&&F(e),ke(e,r));n=r}else if(t.nodeType){if(Array.isArray(n)){if(c)return n=F(e,n,i,t);F(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ve(e,t,n,i){let s=!1;for(let o=0,c=t.length;o<c;o++){let r=t[o],l=n&&n[e.length],u;if(!(r==null||r===!0||r===!1))if((u=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))s=ve(e,r,l)||s;else if(u==="function")if(i){for(;typeof r=="function";)r=r();s=ve(e,Array.isArray(r)?r:[r],Array.isArray(l)?l:[l])||s}else e.push(r),s=!0;else{const f=String(r);l&&l.nodeType===3&&l.data===f?e.push(l):e.push(document.createTextNode(f))}}return s}function ke(e,t,n=null){for(let i=0,s=t.length;i<s;i++)e.insertBefore(t[i],n)}function F(e,t,n,i){if(n===void 0)return e.textContent="";const s=i||document.createTextNode("");if(t.length){let o=!1;for(let c=t.length-1;c>=0;c--){const r=t[c];if(s!==r){const l=r.parentNode===e;!o&&!c?l?e.replaceChild(s,r):e.insertBefore(s,n):l&&r.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}const re=Symbol("store-raw"),R=Symbol("store-node"),O=Symbol("store-has"),Ge=Symbol("store-self");function qe(e){let t=e[j];if(!t&&(Object.defineProperty(e,j,{value:t=new Proxy(e,At)}),!Array.isArray(e))){const n=Object.keys(e),i=Object.getOwnPropertyDescriptors(e);for(let s=0,o=n.length;s<o;s++){const c=n[s];i[c].get&&Object.defineProperty(e,c,{enumerable:i[c].enumerable,get:i[c].get.bind(t)})}}return t}function G(e){let t;return e!=null&&typeof e=="object"&&(e[j]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function q(e,t=new Set){let n,i,s,o;if(n=e!=null&&e[re])return n;if(!G(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let c=0,r=e.length;c<r;c++)s=e[c],(i=q(s,t))!==s&&(e[c]=i)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const c=Object.keys(e),r=Object.getOwnPropertyDescriptors(e);for(let l=0,u=c.length;l<u;l++)o=c[l],!r[o].get&&(s=e[o],(i=q(s,t))!==s&&(e[o]=i))}return e}function oe(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function X(e,t,n){if(e[t])return e[t];const[i,s]=N(n,{equals:!1,internal:!0});return i.$=s,e[t]=i}function xt(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===j||t===R||(delete n.value,delete n.writable,n.get=()=>e[j][t]),n}function Ue(e){ye()&&X(oe(e,R),Ge)()}function $t(e){return Ue(e),Reflect.ownKeys(e)}const At={get(e,t,n){if(t===re)return e;if(t===j)return n;if(t===J)return Ue(e),n;const i=oe(e,R),s=i[t];let o=s?s():e[t];if(t===R||t===O||t==="__proto__")return o;if(!s){const c=Object.getOwnPropertyDescriptor(e,t);ye()&&(typeof o!="function"||e.hasOwnProperty(t))&&!(c&&c.get)&&(o=X(i,t,o)())}return G(o)?qe(o):o},has(e,t){return t===re||t===j||t===J||t===R||t===O||t==="__proto__"?!0:(ye()&&X(oe(e,O),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:$t,getOwnPropertyDescriptor:xt};function U(e,t,n,i=!1){if(!i&&e[t]===n)return;const s=e[t],o=e.length;n===void 0?(delete e[t],e[O]&&e[O][t]&&s!==void 0&&e[O][t].$()):(e[t]=n,e[O]&&e[O][t]&&s===void 0&&e[O][t].$());let c=oe(e,R),r;if((r=X(c,t,s))&&r.$(()=>n),Array.isArray(e)&&e.length!==o){for(let l=e.length;l<o;l++)(r=c[l])&&r.$();(r=X(c,"length",o))&&r.$(e.length)}(r=c[Ge])&&r.$()}function He(e,t){const n=Object.keys(t);for(let i=0;i<n.length;i+=1){const s=n[i];U(e,s,t[s])}}function kt(e,t){if(typeof t=="function"&&(t=t(e)),t=q(t),Array.isArray(t)){if(e===t)return;let n=0,i=t.length;for(;n<i;n++){const s=t[n];e[n]!==s&&U(e,n,s)}U(e,"length",i)}else He(e,t)}function K(e,t,n=[]){let i,s=e;if(t.length>1){i=t.shift();const c=typeof i,r=Array.isArray(e);if(Array.isArray(i)){for(let l=0;l<i.length;l++)K(e,[i[l]].concat(t),n);return}else if(r&&c==="function"){for(let l=0;l<e.length;l++)i(e[l],l)&&K(e,[l].concat(t),n);return}else if(r&&c==="object"){const{from:l=0,to:u=e.length-1,by:f=1}=i;for(let a=l;a<=u;a+=f)K(e,[a].concat(t),n);return}else if(t.length>1){K(e[i],t,[i].concat(n));return}s=e[i],n=[i].concat(n)}let o=t[0];typeof o=="function"&&(o=o(s,n),o===s)||i===void 0&&o==null||(o=q(o),i===void 0||G(s)&&G(o)&&!Array.isArray(o)?He(s,o):U(e,i,o))}function Ke(...[e,t]){const n=q(e||{}),i=Array.isArray(n),s=qe(n);function o(...c){he(()=>{i&&c.length===1?kt(n,c[0]):K(n,c)})}return[s,o]}const le=new WeakMap,We={get(e,t){if(t===re)return e;const n=e[t];let i;return G(n)?le.get(n)||(le.set(n,i=new Proxy(n,We)),i):n},set(e,t,n){return U(e,t,q(n)),!0},deleteProperty(e,t){return U(e,t,void 0,!0),!0}};function V(e){return t=>{if(G(t)){let n;(n=le.get(t))||le.set(t,n=new Proxy(t,We)),e(n)}return t}}function pt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pe=1/0,Xe=9007199254740991,Tt=17976931348623157e292,Te=NaN,Et="[object Function]",St="[object GeneratorFunction]",_t="[object Symbol]",Ot=/^\s+|\s+$/g,Lt=/^[-+]0x[0-9a-f]+$/i,Ct=/^0b[01]+$/i,Pt=/^0o[0-7]+$/i,jt=/^(?:0|[1-9]\d*)$/,Nt=parseInt,It=Object.prototype,Ye=It.toString,Mt=Math.ceil,Dt=Math.max;function Ft(e,t,n,i){for(var s=-1,o=Dt(Mt((t-e)/(n||1)),0),c=Array(o);o--;)c[++s]=e,e+=n;return c}function Bt(e){return function(t,n,i){return i&&typeof i!="number"&&Gt(t,n,i)&&(n=i=void 0),t=de(t),n===void 0?(n=t,t=0):n=de(n),i=i===void 0?t<n?1:-1:de(i),Ft(t,n,i)}}function Rt(e,t){return t=t??Xe,!!t&&(typeof e=="number"||jt.test(e))&&e>-1&&e%1==0&&e<t}function Gt(e,t,n){if(!se(n))return!1;var i=typeof t;return(i=="number"?Ut(n)&&Rt(t,n.length):i=="string"&&t in n)?qt(n[t],e):!1}function qt(e,t){return e===t||e!==e&&t!==t}function Ut(e){return e!=null&&Kt(e.length)&&!Ht(e)}function Ht(e){var t=se(e)?Ye.call(e):"";return t==Et||t==St}function Kt(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Xe}function se(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Wt(e){return!!e&&typeof e=="object"}function Xt(e){return typeof e=="symbol"||Wt(e)&&Ye.call(e)==_t}function de(e){if(!e)return e===0?e:0;if(e=Yt(e),e===pe||e===-pe){var t=e<0?-1:1;return t*Tt}return e===e?e:0}function Yt(e){if(typeof e=="number")return e;if(Xt(e))return Te;if(se(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=se(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Ot,"");var n=Ct.test(e);return n||Pt.test(e)?Nt(e.slice(2),n?2:8):Lt.test(e)?Te:+e}var Vt=Bt(),Qt=Vt;const ce=pt(Qt);var Jt=()=>{},Ee=(e,t)=>t();function Zt(e,t){const n=T(e),i=n?[n]:[],{onEnter:s=Ee,onExit:o=Ee}=t,[c,r]=N(t.appear?[]:i),[l]=ot();let u,f=!1;function a(h,v){if(!h)return v&&v();f=!0,o(h,()=>{he(()=>{f=!1,r(P=>P.filter(M=>M!==h)),v&&v()})})}function g(h){const v=u;if(!v)return h&&h();u=void 0,r(P=>[v,...P]),s(v,h??Jt)}const d=t.mode==="out-in"?h=>f||a(h,g):t.mode==="in-out"?h=>g(()=>a(h)):h=>{a(h),g()};return et(h=>{const v=e();return T(l)?(l(),h):(v!==h&&(u=v,he(()=>T(()=>d(h)))),v)},t.appear?void 0:n),c}var Se=e=>e instanceof Element;function be(e,t){if(t(e))return e;if(typeof e=="function"&&!e.length)return be(e(),t);if(Array.isArray(e))for(const n of e){const i=be(n,t);if(i)return i}return null}function zt(e,t=Se,n=Se){const i=A(e);return A(()=>be(i(),t))}function en(e){return A(()=>{const t=e.name||"s";return{enterActive:(e.enterActiveClass||t+"-enter-active").split(" "),enter:(e.enterClass||t+"-enter").split(" "),enterTo:(e.enterToClass||t+"-enter-to").split(" "),exitActive:(e.exitActiveClass||t+"-exit-active").split(" "),exit:(e.exitClass||t+"-exit").split(" "),exitTo:(e.exitToClass||t+"-exit-to").split(" "),move:(e.moveClass||t+"-move").split(" ")}})}function Ve(e){requestAnimationFrame(()=>requestAnimationFrame(e))}function tn(e,t,n,i){const{onBeforeEnter:s,onEnter:o,onAfterEnter:c}=t;s?.(n),n.classList.add(...e.enter),n.classList.add(...e.enterActive),queueMicrotask(()=>{if(!n.parentNode)return i?.();o?.(n,()=>r())}),Ve(()=>{n.classList.remove(...e.enter),n.classList.add(...e.enterTo),(!o||o.length<2)&&(n.addEventListener("transitionend",r),n.addEventListener("animationend",r))});function r(l){(!l||l.target===n)&&(i?.(),n.removeEventListener("transitionend",r),n.removeEventListener("animationend",r),n.classList.remove(...e.enterActive),n.classList.remove(...e.enterTo),c?.(n))}}function nn(e,t,n,i){const{onBeforeExit:s,onExit:o,onAfterExit:c}=t;if(!n.parentNode)return i?.();s?.(n),n.classList.add(...e.exit),n.classList.add(...e.exitActive),o?.(n,()=>r()),Ve(()=>{n.classList.remove(...e.exit),n.classList.add(...e.exitTo),(!o||o.length<2)&&(n.addEventListener("transitionend",r),n.addEventListener("animationend",r))});function r(l){(!l||l.target===n)&&(i?.(),n.removeEventListener("transitionend",r),n.removeEventListener("animationend",r),n.classList.remove(...e.exitActive),n.classList.remove(...e.exitTo),c?.(n))}}var rn={inout:"in-out",outin:"out-in"},Qe=e=>{const t=en(e);return Zt(zt(()=>e.children),{mode:rn[e.mode],appear:e.appear,onEnter(n,i){tn(t(),e,n,i)},onExit(n,i){nn(t(),e,n,i)}})},on=x('<svg><circle r=20 opacity=0.7 class="pointer-events-none animate-peg"></svg>',!1,!0),ln=x('<div class="bg-wood border-4 border-black rounded-3xl relative"><svg class=select-none><defs><radialGradient id=black-gradient cx=30% cy=25% r=100% fx=30% fy=25%><stop offset=0% style="stop-color:rgb(109, 109, 109);stop-opacity:1"></stop><stop offset=100% style="stop-color:rgb(4, 4, 4);stop-opacity:1"></stop></radialGradient><radialGradient id=white-gradient cx=30% cy=25% r=100% fx=30% fy=25%><stop offset=0% style="stop-color:rgb(238, 238, 238);stop-opacity:1"></stop><stop offset=100% style="stop-color:rgb(187, 187, 187);stop-opacity:1">'),sn=x("<svg><line x1=0 stroke=black stroke-width=1></svg>",!1,!0),cn=x("<svg><text x=-50 class=boardtext></svg>",!1,!0),_e=x("<svg><text class=boardtext></svg>",!1,!0),un=x("<svg><line y1=0 stroke=black stroke-width=1></svg>",!1,!0),fn=x("<svg><text y=-50 class=boardtext></svg>",!1,!0),an=x("<svg><circle r=5 fill=black></svg>",!1,!0),dn=x('<svg><g><rect x=-25 y=-25 width=50 height=50 class="transition-opacity duration-1000"></svg>',!1,!0),gn=x("<svg><circle cx=0 cy=0 r=20></svg>",!1,!0),hn=x('<svg><circle r=20 fill=red filter="drop-shadow(0px 0px 5px red)"class="pointer-events-none animate-threat"></svg>',!1,!0),yn=x("<svg><circle r=10 stroke-width=3 fill=transparent class=pointer-events-none></svg>",!1,!0),mn=x("<svg><line stroke=red stroke-width=8 stroke-linecap=round class=pointer-events-none></svg>",!1,!0);const Oe="ABCDEFGHIJKLMNOPQRSTUVWXYZ",vn=e=>{const[t,n]=N(null),i=A(()=>{const o=.06*(140+50*(e.width-1)),c=.06*(140+50*(e.height-1)),r=Math.max(o,c);return r>50?[o*42/r,c*42/r]:[o,c]}),s=()=>{const o=e.width/2|0,c=e.height/2|0,r=o/2|0,l=c/2|0;return[[o,c],[o-r,c-l],[o+r,c-l],[o-r,c+l],[o+r,c+l]]};return(()=>{var o=ln(),c=o.firstChild;return c.firstChild,m(c,p(Y,{get each(){return ce(0,e.height)},children:r=>[(()=>{var l=sn();return y(l,"y1",50*r),y(l,"y2",50*r),$(()=>y(l,"x2",50*(e.width-1))),l})(),(()=>{var l=cn();return y(l,"y",50*r),m(l,()=>e.height-r),l})(),(()=>{var l=_e();return y(l,"y",50*r),m(l,()=>e.height-r),$(()=>y(l,"x",50*(e.width-1)+50)),l})()]}),null),m(c,p(Y,{get each(){return ce(0,e.width)},children:r=>[(()=>{var l=un();return y(l,"x1",50*r),y(l,"x2",50*r),$(()=>y(l,"y2",50*(e.height-1))),l})(),(()=>{var l=fn();return y(l,"x",50*r),m(l,()=>Oe[r]),l})(),(()=>{var l=_e();return y(l,"x",50*r),m(l,()=>Oe[r]),$(()=>y(l,"y",50*(e.height-1)+50)),l})()]}),null),m(c,p(Y,{get each(){return s()},children:([r,l])=>(()=>{var u=an();return y(u,"cx",50*r),y(u,"cy",50*l),u})()}),null),m(c,p(gt,{get each(){return e.board},children:(r,l)=>(()=>{var u=dn(),f=u.firstChild;return f.addEventListener("pointerleave",a=>n(null,a)),f.addEventListener("pointerenter",a=>n(l,a)),f.$$click=e.play,f.$$clickData=l,m(u,p(Qe,{onExit:(a,g)=>{a.animate([{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-50px)"}],{duration:600}).finished.then(g)},get children(){return A(()=>r()!==0)()&&(()=>{var a=gn();return $(()=>y(a,"fill",r()===1?"url(#black-gradient)":"url(#white-gradient)")),a})()}}),null),$(a=>{var g=`translate(${50*(l%e.width)} ${50*(l/e.width|0)})`,d=r()>0||!e.scores?0:.5,h=e.scores?`rgb(255,${256*(1-e.scores[l])},0)`:"transparent";return g!==a.e&&y(u,"transform",a.e=g),d!==a.t&&((a.t=d)!=null?f.style.setProperty("opacity",d):f.style.removeProperty("opacity")),h!==a.a&&y(f,"fill",a.a=h),a},{e:void 0,t:void 0,a:void 0}),u})()}),null),m(c,p($e,{get when(){return A(()=>!!(e.canPlay&&t()!==null))()&&e.board[t()]===0},get children(){var r=on();return $(l=>{var u=50*(t()%e.width),f=50*(t()/e.width|0),a=e.turn===1?"url(#black-gradient)":"url(#white-gradient)";return u!==l.e&&y(r,"cx",l.e=u),f!==l.t&&y(r,"cy",l.t=f),a!==l.a&&y(r,"fill",l.a=a),l},{e:void 0,t:void 0,a:void 0}),r}}),null),m(c,p($e,{get when(){return!e.outcome&&e.canPlay},get children(){return p(Y,{get each(){return e.threats},children:r=>(()=>{var l=hn();return $(u=>{var f=50*(r%e.width),a=50*(r/e.width|0);return f!==u.e&&y(l,"cx",u.e=f),a!==u.t&&y(l,"cy",u.t=a),u},{e:void 0,t:void 0}),l})()})}}),null),m(c,(()=>{var r=A(()=>e.lastMove!==null);return()=>r()&&(()=>{var l=yn();return $(u=>{var f=50*(e.lastMove%e.width),a=50*(e.lastMove/e.width|0),g=e.turn===1?"black":"white";return f!==u.e&&y(l,"cx",u.e=f),a!==u.t&&y(l,"cy",u.t=a),g!==u.a&&y(l,"stroke",u.a=g),u},{e:void 0,t:void 0,a:void 0}),l})()})(),null),m(c,(()=>{var r=A(()=>!!(e.outcome&&e.outcome.color!==0));return()=>r()&&(()=>{var l=mn();return $(u=>{var f=50*(e.outcome.alignment[0]%e.width),a=50*(e.outcome.alignment[1]%e.width),g=50*(e.outcome.alignment[0]/e.width|0),d=50*(e.outcome.alignment[1]/e.width|0);return f!==u.e&&y(l,"x1",u.e=f),a!==u.t&&y(l,"x2",u.t=a),g!==u.a&&y(l,"y1",u.a=g),d!==u.o&&y(l,"y2",u.o=d),u},{e:void 0,t:void 0,a:void 0,o:void 0}),l})()})(),null),$(r=>{var l=`${i()[0]}rem`,u=`${i()[1]}rem`,f=`-70 -70 ${140+50*(e.width-1)} ${140+50*(e.height-1)}`;return l!==r.e&&((r.e=l)!=null?o.style.setProperty("width",l):o.style.removeProperty("width")),u!==r.t&&((r.t=u)!=null?o.style.setProperty("height",u):o.style.removeProperty("height")),f!==r.a&&y(c,"viewBox",r.a=f),r},{e:void 0,t:void 0,a:void 0}),o})()};xe(["click"]);const bn=e=>e.length===0?null:e[e.length-1],we=e=>new Promise(t=>setTimeout(t,e));function Le(e,t,n,i,s){let o=0;for(let c=0;c<t;c++)for(let r=0;r<=e-i;r++){let l=0,u=!1;for(let f=0;f<i;f++){const a=e*c+r+f;n[a]===s?l++:n[a]===3-s&&(u=!0)}u||(o+=1/4**(i-l))}for(let c=0;c<=t-i;c++)for(let r=0;r<e;r++){let l=0,u=!1;for(let f=0;f<i;f++){const a=e*(c+f)+r;n[a]===s?l++:n[a]===3-s&&(u=!0)}u||(o+=1/4**(i-l))}for(let c=0;c<=t-i;c++)for(let r=0;r<=e-i;r++){let l=0,u=!1;for(let f=0;f<i;f++){const a=e*(c+f)+r+f;n[a]===s?l++:n[a]===3-s&&(u=!0)}u||(o+=1/4**(i-l))}for(let c=0;c<=t-i;c++)for(let r=i-1;r<e;r++){let l=0,u=!1;for(let f=0;f<i;f++){const a=e*(c+f)+r-f;n[a]===s?l++:n[a]===3-s&&(u=!0)}u||(o+=1/4**(i-l))}return o}function wn(e,t,n,i,s){console.log(s);const o=n.length,c=new Array(o);c.fill(-1/0);for(let u=0;u<o;u++)n[u]===0&&(n[u]=s,c[u]=1.5*Le(e,t,n,i,s),n[u]=3-s,c[u]+=Le(e,t,n,i,3-s),n[u]=0);let r=Math.min(...c.filter(u=>u!==-1/0)),l=Math.max(...c);return c.map(u=>u==-1/0?-1/0:r===l?1:(u-r)/(l-r))}function xn(e){const t=e.length,n=Math.max(...e),i=[];for(let s=0;s<t;s++)e[s]===n&&i.push(s);return i[Math.random()*i.length|0]}const Ce=()=>({width:15,height:15,adversary:"level1",alignment:5}),$n=()=>{const e=Ce(),t=new Array(e.width*e.height);return t.fill(0),{board:t,turn:1,played:[],scores:null,config:Ce(),outcome:null,isThinking:!1,dialogOpened:!1}};function Pe(e,t,n,i,s,o){function c(u,f,a,g){let d=0;for(;u>=0&&u<e&&f>=0&&f<t&&n[f*e+u]===s;)d++,u+=a,f+=g;return[d,u-a+e*(f-g)]}let r=o%e,l=o/e|0;for(const[u,f]of[[0,1],[1,0],[1,1],[1,-1]]){const[a,g]=c(r+u,l+f,u,f),[d,h]=c(r-u,l-f,-u,-f);if(a+d>=i-1)return{color:s,alignment:[g,h]}}return null}function An(e,t,n,i,s){const o=[];for(let c=0;c<t;c++)for(let r=0;r<=e-i;r++){const l=[];let u=!1;for(let f=0;f<i;f++){const a=e*c+r+f;n[a]===3-s?u=!0:n[a]===0&&l.push(a)}!u&&l.length===1&&!o.includes(l[0])&&o.push(l[0])}for(let c=0;c<=t-i;c++)for(let r=0;r<e;r++){const l=[];let u=!1;for(let f=0;f<i;f++){const a=e*(c+f)+r;n[a]===3-s?u=!0:n[a]===0&&l.push(a)}!u&&l.length===1&&!o.includes(l[0])&&o.push(l[0])}for(let c=0;c<=t-i;c++)for(let r=0;r<=e-i;r++){const l=[];let u=!1;for(let f=0;f<i;f++){const a=e*(c+f)+r+f;n[a]===3-s?u=!0:n[a]===0&&l.push(a)}!u&&l.length===1&&!o.includes(l[0])&&o.push(l[0])}for(let c=0;c<=t-i;c++)for(let r=i-1;r<e;r++){const l=[];let u=!1;for(let f=0;f<i;f++){const a=e*(c+f)+r-f;n[a]===3-s?u=!0:n[a]===0&&l.push(a)}!u&&l.length===1&&!o.includes(l[0])&&o.push(l[0])}return o}var kn=x("<div class=dialog-title>Nouvelle partie"),pn=x('<div class="dialog-body grid grid-cols-20/80 gap-8"><div class="text-bold text-lg">Adversaire</div><div class="flex gap-4 text-lg"></div><div class="text-bold text-lg">Alignement</div><div class="flex gap-4"></div><div class="text-bold text-lg">Hauteur</div><div class="grid grid-cols-6 gap-4"></div><div class="text-bold text-lg">Largeur</div><div class="grid grid-cols-6 gap-4">'),Tn=x("<div class=dialog-buttons><button class=btn>Annuler</button><button class=btn>OK"),Q=x("<button class=togglebtn>");const En=[["human","Humain"],["level1","Débutant"]],Sn=e=>{const[t,n]=Ke({...e.config});return[kn(),(()=>{var i=pn(),s=i.firstChild,o=s.nextSibling,c=o.nextSibling,r=c.nextSibling,l=r.nextSibling,u=l.nextSibling,f=u.nextSibling,a=f.nextSibling;return m(o,()=>En.map(([g,d])=>(()=>{var h=Q();return h.$$click=v=>n("adversary",g),m(h,d),$(()=>h.classList.toggle("toggledbtn",g===t.adversary)),h})())),m(r,()=>[3,4,5,6,7,8].map(g=>(()=>{var d=Q();return d.$$click=h=>n("alignment",g),m(d,g),$(()=>d.classList.toggle("toggledbtn",g===t.alignment)),d})())),m(u,()=>ce(3,21).map(g=>(()=>{var d=Q();return d.$$click=h=>n("height",g),m(d,g),$(()=>d.classList.toggle("toggledbtn",g===t.height)),d})())),m(a,()=>ce(3,21).map(g=>(()=>{var d=Q();return d.$$click=h=>n("width",g),m(d,g),$(()=>d.classList.toggle("toggledbtn",g===t.width)),d})())),i})(),(()=>{var i=Tn(),s=i.firstChild,o=s.nextSibling;return vt(s,"click",e.closeDialog),o.$$click=e.newGame,o.$$clickData=t,i})()]};xe(["click"]);var _n=x("<div>"),On=x("<div class=tooltip>");const ge=[["Bienvenue sur l'appli Gomoku",4e3],["Gomoku connu aussi sous le nom de Darpion est un jeu positionnel japonais d'origine chinoise.",5e3],["Il existe de nombreuses variantes: Libre, Renju, Caro, Omok, Ninuki-renju",5e3]],Ln=e=>{const[t,n]=N(""),i=A(()=>e.outcome!==null&&e.outcome.color===0?'Match nul! Tu peux changer le niveau de difficulté en clickant sur "Nouvelle partie".':e.outcome!==null?`Le joueur ${e.outcome.color===1?"noir":"blanc"} a gagné la partie. Tu peux changer le niveau de difficulté en clickant sur "Nouvelle partie".`:e.multipleThreats?`Le joueur ${e.turn===1?"blanc":"noir"} a réussi une menace multiple. Il peut gagner la partie quoique réponde l'adversaire.`:t()),s=A(()=>e.isThinking?"bg-thinking":e.outcome!==null&&e.outcome.color===1&&e.adversary!=="human"?"bg-crying":e.outcome!==null&&(e.outcome.color===2||e.adversary==="human")?"bg-happy":e.multipleThreats?"bg-surprised":"bg-speaking");return nt(async()=>{let o=0;for(;;){const c=ge[o][1];n(ge[o][0]),await we(c),n(null),o=(o+1)%ge.length,await we(2e3)}}),(()=>{var o=_n();return m(o,p(Qe,{onEnter:(c,r)=>{c.animate([{opacity:0},{opacity:1}],{duration:500}).finished.then(r)},onExit:(c,r)=>{c.animate([{opacity:1},{opacity:0}],{duration:500}).finished.then(r)},get children(){return A(()=>!!i())()&&(()=>{var c=On();return m(c,i),c})()}})),$(()=>mt(o,`relative w-[15rem] h-[25rem] bg-contain bg-no-repeat ${s()}`)),o})()};var Cn=x('<div class="w-screen min-h-screen bg-main bg-cover flex flew-row items-center justify-around portrait:flex-col"><div class="flex flex-col bg-wood p-6 border-2 border-black rounded-xl gap-4"><div class=text-4xl>Gomoku</div><button class=btn>Nouvelle partie</button><button class=btn>Annuler</button><button class=btn>Information'),Pn=x("<dialog class=dialog>");const jn=()=>{let e;const[t,n]=Ke($n()),i=A(()=>An(t.config.width,t.config.height,t.board,t.config.alignment,3-t.turn)),s=async u=>{const f=t.config.width,a=t.config.height;let g;t.isThinking||t.outcome||t.board[u]!==0||(n(V(d=>{d.board[u]=d.turn,d.played.push(u);let h=Pe(f,a,d.board,d.config.alignment,d.turn,u);if(h){d.outcome=h,d.turn=3-d.turn;return}if(d.played.length===d.config.width*d.config.height){d.outcome={color:0,alignment:[0,0]},d.turn=3-d.turn;return}d.turn=3-d.turn,d.config.adversary!=="human"&&(d.isThinking=!0,g=wn(d.config.width,d.config.height,[...d.board],d.config.alignment,d.turn),d.scores=g)})),!t.outcome&&t.config.adversary!=="human"&&(await we(1500),n(V(d=>{let h=xn(g);d.board[h]=d.turn,d.played.push(h),d.scores=null;let v=Pe(f,a,d.board,d.config.alignment,d.turn,h);v?d.outcome=v:d.played.length===d.config.width*d.config.height&&(d.outcome={color:0,alignment:[0,0]}),d.turn=3-d.turn,d.isThinking=!1}))))},o=()=>{t.isThinking||n(V(u=>{if(u.played.length){const f=u.played.pop();u.board[f]=0,u.turn=3-u.turn,u.outcome=null}if(u.played.length%2===1&&u.config.adversary!=="human"){const f=u.played.pop();u.board[f]=0,u.turn=3-u.turn}}))},c=()=>{n("dialogOpened",!0),e.showModal()},r=()=>{e.close(),n("dialogOpened",!1)},l=u=>{n(V(f=>{f.config={...u},f.board=new Array(u.width*u.height),f.board.fill(0),f.played=[],f.outcome=null,f.turn=1,f.isThinking=!1,f.dialogOpened=!1})),e.close()};return[(()=>{var u=Cn(),f=u.firstChild,a=f.firstChild,g=a.nextSibling,d=g.nextSibling;return g.$$click=c,d.$$click=o,m(u,p(vn,{get board(){return t.board},get width(){return t.config.width},get height(){return t.config.height},get lastMove(){return bn(t.played)},get turn(){return t.turn},get scores(){return t.scores},get outcome(){return t.outcome},get threats(){return i()},get canPlay(){return!t.isThinking&&!t.outcome},play:s}),null),m(u,p(Ln,{get multipleThreats(){return i().length>=2},get outcome(){return t.outcome},get turn(){return t.turn},get isThinking(){return t.isThinking},get adversary(){return t.config.adversary}}),null),u})(),(()=>{var u=Pn();u.addEventListener("close",r),u.addEventListener("cancel",r);var f=e;return typeof f=="function"?bt(f,u):e=u,m(u,(()=>{var a=A(()=>!!t.dialogOpened);return()=>a()&&p(Sn,{get config(){return t.config},closeDialog:r,newGame:l})})()),u})()]};xe(["click"]);const Nn=document.getElementById("root");yt(()=>p(jn,{}),Nn);
