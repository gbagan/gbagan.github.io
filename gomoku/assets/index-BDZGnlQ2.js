(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();const et=(e,t)=>e===t,j=Symbol("solid-proxy"),Z=Symbol("solid-track"),z={equals:et};let Ie=Re;const N=1,ee=2,Me={owned:null,cleanups:null,context:null,owner:null};var x=null;let de=null,tt=null,b=null,k=null,P=null,fe=0;function R(e,t){const n=b,r=x,s=e.length===0,l=t===void 0?r:t,c=s?Me:{owned:null,cleanups:null,context:l?l.context:null,owner:l},i=s?e:()=>e(()=>T(()=>X(c)));x=c,b=null;try{return M(i,!0)}finally{b=n,x=r}}function I(e,t){t=t?Object.assign({},z,t):z;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.value)),Be(n,s));return[Fe.bind(n),r]}function nt(e,t,n){const r=ae(e,t,!0,N);K(r)}function p(e,t,n){const r=ae(e,t,!1,N);K(r)}function rt(e,t,n){Ie=ft;const r=ae(e,t,!1,N);r.user=!0,P?P.push(r):K(r)}function A(e,t,n){n=n?Object.assign({},z,n):z;const r=ae(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,K(r),Fe.bind(r)}function ye(e){return M(e,!1)}function T(e){if(b===null)return e();const t=b;b=null;try{return e()}finally{b=t}}function it(e){rt(()=>T(e))}function De(e){return x===null||(x.cleanups===null?x.cleanups=[e]:x.cleanups.push(e)),e}function ve(){return b}function lt(e){const t=b,n=x;return Promise.resolve().then(()=>{b=t,x=n;let r;return M(e,!1),b=x=null,r?r.done:void 0})}const[ot,Fn]=I(!1);function st(){return[ot,lt]}function Fe(){if(this.sources&&this.state)if(this.state===N)K(this);else{const e=k;k=null,M(()=>ne(this),!1),k=e}if(b){const e=this.observers?this.observers.length:0;b.sources?(b.sources.push(this),b.sourceSlots.push(e)):(b.sources=[this],b.sourceSlots=[e]),this.observers?(this.observers.push(b),this.observerSlots.push(b.sources.length-1)):(this.observers=[b],this.observerSlots=[b.sources.length-1])}return this.value}function Be(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&M(()=>{for(let s=0;s<e.observers.length;s+=1){const l=e.observers[s],c=de&&de.running;c&&de.disposed.has(l),(c?!l.tState:!l.state)&&(l.pure?k.push(l):P.push(l),l.observers&&Ge(l)),c||(l.state=N)}if(k.length>1e6)throw k=[],new Error},!1)),t}function K(e){if(!e.fn)return;X(e);const t=fe;ct(e,e.value,t)}function ct(e,t,n){let r;const s=x,l=b;b=x=e;try{r=e.fn(t)}catch(c){return e.pure&&(e.state=N,e.owned&&e.owned.forEach(X),e.owned=null),e.updatedAt=n+1,qe(c)}finally{b=l,x=s}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Be(e,r):e.value=r,e.updatedAt=n)}function ae(e,t,n,r=N,s){const l={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:x,context:x?x.context:null,pure:n};return x===null||x!==Me&&(x.owned?x.owned.push(l):x.owned=[l]),l}function te(e){if(e.state===0)return;if(e.state===ee)return ne(e);if(e.suspense&&T(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<fe);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===N)K(e);else if(e.state===ee){const r=k;k=null,M(()=>ne(e,t[0]),!1),k=r}}function M(e,t){if(k)return e();let n=!1;t||(k=[]),P?n=!0:P=[],fe++;try{const r=e();return ut(n),r}catch(r){n||(P=null),k=null,qe(r)}}function ut(e){if(k&&(Re(k),k=null),e)return;const t=P;P=null,t.length&&M(()=>Ie(t),!1)}function Re(e){for(let t=0;t<e.length;t++)te(e[t])}function ft(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:te(r)}for(t=0;t<n;t++)te(e[t])}function ne(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const s=r.state;s===N?r!==t&&(!r.updatedAt||r.updatedAt<fe)&&te(r):s===ee&&ne(r,t)}}}function Ge(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=ee,n.pure?k.push(n):P.push(n),n.observers&&Ge(n))}}function X(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const l=s.pop(),c=n.observerSlots.pop();r<s.length&&(l.sourceSlots[c]=r,s[r]=l,n.observerSlots[r]=c)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)X(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)X(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function at(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function qe(e,t=x){throw at(e)}const me=Symbol("fallback");function re(e){for(let t=0;t<e.length;t++)e[t]()}function dt(e,t,n={}){let r=[],s=[],l=[],c=0,i=t.length>1?[]:null;return De(()=>re(l)),()=>{let o=e()||[],a=o.length,u,f;return o[Z],T(()=>{let h,d,y,_,D,E,S,L,F;if(a===0)c!==0&&(re(l),l=[],r=[],s=[],c=0,i&&(i=[])),n.fallback&&(r=[me],s[0]=R(ze=>(l[0]=ze,n.fallback())),c=1);else if(c===0){for(s=new Array(a),f=0;f<a;f++)r[f]=o[f],s[f]=R(g);c=a}else{for(y=new Array(a),_=new Array(a),i&&(D=new Array(a)),E=0,S=Math.min(c,a);E<S&&r[E]===o[E];E++);for(S=c-1,L=a-1;S>=E&&L>=E&&r[S]===o[L];S--,L--)y[L]=s[S],_[L]=l[S],i&&(D[L]=i[S]);for(h=new Map,d=new Array(L+1),f=L;f>=E;f--)F=o[f],u=h.get(F),d[f]=u===void 0?-1:u,h.set(F,f);for(u=E;u<=S;u++)F=r[u],f=h.get(F),f!==void 0&&f!==-1?(y[f]=s[u],_[f]=l[u],i&&(D[f]=i[u]),f=d[f],h.set(F,f)):l[u]();for(f=E;f<a;f++)f in y?(s[f]=y[f],l[f]=_[f],i&&(i[f]=D[f],i[f](f))):s[f]=R(g);s=s.slice(0,c=a),r=o.slice(0)}return s});function g(h){if(l[f]=h,i){const[d,y]=I(f);return i[f]=y,t(o[f],d)}return t(o[f])}}}function gt(e,t,n={}){let r=[],s=[],l=[],c=[],i=0,o;return De(()=>re(l)),()=>{const a=e()||[],u=a.length;return a[Z],T(()=>{if(u===0)return i!==0&&(re(l),l=[],r=[],s=[],i=0,c=[]),n.fallback&&(r=[me],s[0]=R(g=>(l[0]=g,n.fallback())),i=1),s;for(r[0]===me&&(l[0](),l=[],r=[],s=[],i=0),o=0;o<u;o++)o<r.length&&r[o]!==a[o]?c[o](()=>a[o]):o>=r.length&&(s[o]=R(f));for(;o<r.length;o++)l[o]();return i=c.length=l.length=u,r=a.slice(0),s=s.slice(0,i)});function f(g){l[o]=g;const[h,d]=I(a[o]);return c[o]=d,t(h,o)}}}function w(e,t){return T(()=>e(t||{}))}const ht=e=>`Stale read from <${e}>.`;function J(e){const t="fallback"in e&&{fallback:()=>e.fallback};return A(dt(()=>e.each,e.children,t||void 0))}function yt(e){const t="fallback"in e&&{fallback:()=>e.fallback};return A(gt(()=>e.each,e.children,t||void 0))}function pe(e){const t=e.keyed,n=A(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return A(()=>{const r=n();if(r){const s=e.children;return typeof s=="function"&&s.length>0?T(()=>s(t?r:()=>{if(!T(n))throw ht("Show");return e.when})):s}return e.fallback},void 0,void 0)}function vt(e,t,n){let r=n.length,s=t.length,l=r,c=0,i=0,o=t[s-1].nextSibling,a=null;for(;c<s||i<l;){if(t[c]===n[i]){c++,i++;continue}for(;t[s-1]===n[l-1];)s--,l--;if(s===c){const u=l<r?i?n[i-1].nextSibling:n[l-i]:o;for(;i<l;)e.insertBefore(n[i++],u)}else if(l===i)for(;c<s;)(!a||!a.has(t[c]))&&t[c].remove(),c++;else if(t[c]===n[l-1]&&n[i]===t[s-1]){const u=t[--s].nextSibling;e.insertBefore(n[i++],t[c++].nextSibling),e.insertBefore(n[--l],u),t[s]=n[l]}else{if(!a){a=new Map;let f=i;for(;f<l;)a.set(n[f],f++)}const u=a.get(t[c]);if(u!=null)if(i<u&&u<l){let f=c,g=1,h;for(;++f<s&&f<l&&!((h=a.get(t[f]))==null||h!==u+g);)g++;if(g>u-i){const d=t[c];for(;i<u;)e.insertBefore(n[i++],d)}else e.replaceChild(n[i++],t[c++])}else c++;else t[c++].remove()}}}const Ae="_$DX_DELEGATE";function mt(e,t,n,r={}){let s;return R(l=>{s=l,t===document?e():m(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function $(e,t,n){let r;const s=()=>{const c=document.createElement("template");return c.innerHTML=e,n?c.content.firstChild.firstChild:c.content.firstChild},l=t?()=>T(()=>document.importNode(r||(r=s()),!0)):()=>(r||(r=s())).cloneNode(!0);return l.cloneNode=l,l}function xe(e,t=window.document){const n=t[Ae]||(t[Ae]=new Set);for(let r=0,s=e.length;r<s;r++){const l=e[r];n.has(l)||(n.add(l),t.addEventListener(l,$t))}}function v(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function bt(e,t){t==null?e.removeAttribute("class"):e.className=t}function wt(e,t,n,r){Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n}function ke(e,t,n){return T(()=>e(t,n))}function m(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return ie(e,t,r,n);p(s=>ie(e,t(),s,n),r)}function $t(e){let t=e.target;const n=`$$${e.type}`,r=e.target,s=e.currentTarget,l=o=>Object.defineProperty(e,"target",{configurable:!0,value:o}),c=()=>{const o=t[n];if(o&&!t.disabled){const a=t[`${n}Data`];if(a!==void 0?o.call(t,a,e):o.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&l(t.host),!0},i=()=>{for(;c()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const o=e.composedPath();l(o[0]);for(let a=0;a<o.length-2&&(t=o[a],!!c());a++){if(t._$host){t=t._$host,i();break}if(t.parentNode===s)break}}else i();l(r)}function ie(e,t,n,r,s){for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,c=r!==void 0;if(e=c&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(l==="number"&&(t=t.toString(),t===n))return n;if(c){let i=n[0];i&&i.nodeType===3?i.data!==t&&(i.data=t):i=document.createTextNode(t),n=B(e,n,r,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean")n=B(e,n,r);else{if(l==="function")return p(()=>{let i=t();for(;typeof i=="function";)i=i();n=ie(e,i,n,r)}),()=>n;if(Array.isArray(t)){const i=[],o=n&&Array.isArray(n);if(be(i,t,n,s))return p(()=>n=ie(e,i,n,r,!0)),()=>n;if(i.length===0){if(n=B(e,n,r),c)return n}else o?n.length===0?Te(e,i,r):vt(e,n,i):(n&&B(e),Te(e,i));n=i}else if(t.nodeType){if(Array.isArray(n)){if(c)return n=B(e,n,r,t);B(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function be(e,t,n,r){let s=!1;for(let l=0,c=t.length;l<c;l++){let i=t[l],o=n&&n[e.length],a;if(!(i==null||i===!0||i===!1))if((a=typeof i)=="object"&&i.nodeType)e.push(i);else if(Array.isArray(i))s=be(e,i,o)||s;else if(a==="function")if(r){for(;typeof i=="function";)i=i();s=be(e,Array.isArray(i)?i:[i],Array.isArray(o)?o:[o])||s}else e.push(i),s=!0;else{const u=String(i);o&&o.nodeType===3&&o.data===u?e.push(o):e.push(document.createTextNode(u))}}return s}function Te(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function B(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let l=!1;for(let c=t.length-1;c>=0;c--){const i=t[c];if(s!==i){const o=i.parentNode===e;!l&&!c?o?e.replaceChild(s,i):e.insertBefore(s,n):o&&i.remove()}else l=!0}}else e.insertBefore(s,n);return[s]}const le=Symbol("store-raw"),G=Symbol("store-node"),C=Symbol("store-has"),Ue=Symbol("store-self");function He(e){let t=e[j];if(!t&&(Object.defineProperty(e,j,{value:t=new Proxy(e,At)}),!Array.isArray(e))){const n=Object.keys(e),r=Object.getOwnPropertyDescriptors(e);for(let s=0,l=n.length;s<l;s++){const c=n[s];r[c].get&&Object.defineProperty(e,c,{enumerable:r[c].enumerable,get:r[c].get.bind(t)})}}return t}function q(e){let t;return e!=null&&typeof e=="object"&&(e[j]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function U(e,t=new Set){let n,r,s,l;if(n=e!=null&&e[le])return n;if(!q(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let c=0,i=e.length;c<i;c++)s=e[c],(r=U(s,t))!==s&&(e[c]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const c=Object.keys(e),i=Object.getOwnPropertyDescriptors(e);for(let o=0,a=c.length;o<a;o++)l=c[o],!i[l].get&&(s=e[l],(r=U(s,t))!==s&&(e[l]=r))}return e}function oe(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function Y(e,t,n){if(e[t])return e[t];const[r,s]=I(n,{equals:!1,internal:!0});return r.$=s,e[t]=r}function xt(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===j||t===G||(delete n.value,delete n.writable,n.get=()=>e[j][t]),n}function Ke(e){ve()&&Y(oe(e,G),Ue)()}function pt(e){return Ke(e),Reflect.ownKeys(e)}const At={get(e,t,n){if(t===le)return e;if(t===j)return n;if(t===Z)return Ke(e),n;const r=oe(e,G),s=r[t];let l=s?s():e[t];if(t===G||t===C||t==="__proto__")return l;if(!s){const c=Object.getOwnPropertyDescriptor(e,t);ve()&&(typeof l!="function"||e.hasOwnProperty(t))&&!(c&&c.get)&&(l=Y(r,t,l)())}return q(l)?He(l):l},has(e,t){return t===le||t===j||t===Z||t===G||t===C||t==="__proto__"?!0:(ve()&&Y(oe(e,C),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:pt,getOwnPropertyDescriptor:xt};function H(e,t,n,r=!1){if(!r&&e[t]===n)return;const s=e[t],l=e.length;n===void 0?(delete e[t],e[C]&&e[C][t]&&s!==void 0&&e[C][t].$()):(e[t]=n,e[C]&&e[C][t]&&s===void 0&&e[C][t].$());let c=oe(e,G),i;if((i=Y(c,t,s))&&i.$(()=>n),Array.isArray(e)&&e.length!==l){for(let o=e.length;o<l;o++)(i=c[o])&&i.$();(i=Y(c,"length",l))&&i.$(e.length)}(i=c[Ue])&&i.$()}function We(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r+=1){const s=n[r];H(e,s,t[s])}}function kt(e,t){if(typeof t=="function"&&(t=t(e)),t=U(t),Array.isArray(t)){if(e===t)return;let n=0,r=t.length;for(;n<r;n++){const s=t[n];e[n]!==s&&H(e,n,s)}H(e,"length",r)}else We(e,t)}function W(e,t,n=[]){let r,s=e;if(t.length>1){r=t.shift();const c=typeof r,i=Array.isArray(e);if(Array.isArray(r)){for(let o=0;o<r.length;o++)W(e,[r[o]].concat(t),n);return}else if(i&&c==="function"){for(let o=0;o<e.length;o++)r(e[o],o)&&W(e,[o].concat(t),n);return}else if(i&&c==="object"){const{from:o=0,to:a=e.length-1,by:u=1}=r;for(let f=o;f<=a;f+=u)W(e,[f].concat(t),n);return}else if(t.length>1){W(e[r],t,[r].concat(n));return}s=e[r],n=[r].concat(n)}let l=t[0];typeof l=="function"&&(l=l(s,n),l===s)||r===void 0&&l==null||(l=U(l),r===void 0||q(s)&&q(l)&&!Array.isArray(l)?We(s,l):H(e,r,l))}function Xe(...[e,t]){const n=U(e||{}),r=Array.isArray(n),s=He(n);function l(...c){ye(()=>{r&&c.length===1?kt(n,c[0]):W(n,c)})}return[s,l]}const se=new WeakMap,Ye={get(e,t){if(t===le)return e;const n=e[t];let r;return q(n)?se.get(n)||(se.set(n,r=new Proxy(n,Ye)),r):n},set(e,t,n){return H(e,t,U(n)),!0},deleteProperty(e,t){return H(e,t,void 0,!0),!0}};function V(e){return t=>{if(q(t)){let n;(n=se.get(t))||se.set(t,n=new Proxy(t,Ye)),e(n)}return t}}function Tt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _e=1/0,Je=9007199254740991,_t=17976931348623157e292,Ee=NaN,Et="[object Function]",St="[object GeneratorFunction]",Ot="[object Symbol]",Lt=/^\s+|\s+$/g,Ct=/^[-+]0x[0-9a-f]+$/i,Pt=/^0b[01]+$/i,Nt=/^0o[0-7]+$/i,jt=/^(?:0|[1-9]\d*)$/,It=parseInt,Mt=Object.prototype,Ve=Mt.toString,Dt=Math.ceil,Ft=Math.max;function Bt(e,t,n,r){for(var s=-1,l=Ft(Dt((t-e)/(n||1)),0),c=Array(l);l--;)c[++s]=e,e+=n;return c}function Rt(e){return function(t,n,r){return r&&typeof r!="number"&&qt(t,n,r)&&(n=r=void 0),t=ge(t),n===void 0?(n=t,t=0):n=ge(n),r=r===void 0?t<n?1:-1:ge(r),Bt(t,n,r)}}function Gt(e,t){return t=t??Je,!!t&&(typeof e=="number"||jt.test(e))&&e>-1&&e%1==0&&e<t}function qt(e,t,n){if(!ce(n))return!1;var r=typeof t;return(r=="number"?Ht(n)&&Gt(t,n.length):r=="string"&&t in n)?Ut(n[t],e):!1}function Ut(e,t){return e===t||e!==e&&t!==t}function Ht(e){return e!=null&&Wt(e.length)&&!Kt(e)}function Kt(e){var t=ce(e)?Ve.call(e):"";return t==Et||t==St}function Wt(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Je}function ce(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Xt(e){return!!e&&typeof e=="object"}function Yt(e){return typeof e=="symbol"||Xt(e)&&Ve.call(e)==Ot}function ge(e){if(!e)return e===0?e:0;if(e=Jt(e),e===_e||e===-_e){var t=e<0?-1:1;return t*_t}return e===e?e:0}function Jt(e){if(typeof e=="number")return e;if(Yt(e))return Ee;if(ce(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ce(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Lt,"");var n=Pt.test(e);return n||Nt.test(e)?It(e.slice(2),n?2:8):Ct.test(e)?Ee:+e}var Vt=Rt(),Qt=Vt;const ue=Tt(Qt);var Zt=()=>{},Se=(e,t)=>t();function zt(e,t){const n=T(e),r=n?[n]:[],{onEnter:s=Se,onExit:l=Se}=t,[c,i]=I(t.appear?[]:r),[o]=st();let a,u=!1;function f(d,y){if(!d)return y&&y();u=!0,l(d,()=>{ye(()=>{u=!1,i(_=>_.filter(D=>D!==d)),y&&y()})})}function g(d){const y=a;if(!y)return d&&d();a=void 0,i(_=>[y,..._]),s(y,d??Zt)}const h=t.mode==="out-in"?d=>u||f(d,g):t.mode==="in-out"?d=>g(()=>f(d)):d=>{f(d),g()};return nt(d=>{const y=e();return T(o)?(o(),d):(y!==d&&(a=y,ye(()=>T(()=>h(d)))),y)},t.appear?void 0:n),c}var Oe=e=>e instanceof Element;function we(e,t){if(t(e))return e;if(typeof e=="function"&&!e.length)return we(e(),t);if(Array.isArray(e))for(const n of e){const r=we(n,t);if(r)return r}return null}function en(e,t=Oe,n=Oe){const r=A(e);return A(()=>we(r(),t))}function tn(e){return A(()=>{const t=e.name||"s";return{enterActive:(e.enterActiveClass||t+"-enter-active").split(" "),enter:(e.enterClass||t+"-enter").split(" "),enterTo:(e.enterToClass||t+"-enter-to").split(" "),exitActive:(e.exitActiveClass||t+"-exit-active").split(" "),exit:(e.exitClass||t+"-exit").split(" "),exitTo:(e.exitToClass||t+"-exit-to").split(" "),move:(e.moveClass||t+"-move").split(" ")}})}function Qe(e){requestAnimationFrame(()=>requestAnimationFrame(e))}function nn(e,t,n,r){const{onBeforeEnter:s,onEnter:l,onAfterEnter:c}=t;s?.(n),n.classList.add(...e.enter),n.classList.add(...e.enterActive),queueMicrotask(()=>{if(!n.parentNode)return r?.();l?.(n,()=>i())}),Qe(()=>{n.classList.remove(...e.enter),n.classList.add(...e.enterTo),(!l||l.length<2)&&(n.addEventListener("transitionend",i),n.addEventListener("animationend",i))});function i(o){(!o||o.target===n)&&(r?.(),n.removeEventListener("transitionend",i),n.removeEventListener("animationend",i),n.classList.remove(...e.enterActive),n.classList.remove(...e.enterTo),c?.(n))}}function rn(e,t,n,r){const{onBeforeExit:s,onExit:l,onAfterExit:c}=t;if(!n.parentNode)return r?.();s?.(n),n.classList.add(...e.exit),n.classList.add(...e.exitActive),l?.(n,()=>i()),Qe(()=>{n.classList.remove(...e.exit),n.classList.add(...e.exitTo),(!l||l.length<2)&&(n.addEventListener("transitionend",i),n.addEventListener("animationend",i))});function i(o){(!o||o.target===n)&&(r?.(),n.removeEventListener("transitionend",i),n.removeEventListener("animationend",i),n.classList.remove(...e.exitActive),n.classList.remove(...e.exitTo),c?.(n))}}var ln={inout:"in-out",outin:"out-in"},Ze=e=>{const t=tn(e);return zt(en(()=>e.children),{mode:ln[e.mode],appear:e.appear,onEnter(n,r){nn(t(),e,n,r)},onExit(n,r){rn(t(),e,n,r)}})},on=$('<svg><circle r=20 opacity=0.7 class="pointer-events-none animate-peg"></svg>',!1,!0),sn=$('<div class="bg-wood border-4 border-black rounded-3xl relative z-20"><svg class=select-none><defs><radialGradient id=black-gradient cx=30% cy=25% r=100% fx=30% fy=25%><stop offset=0% style="stop-color:rgb(109, 109, 109);stop-opacity:1"></stop><stop offset=100% style="stop-color:rgb(4, 4, 4);stop-opacity:1"></stop></radialGradient><radialGradient id=white-gradient cx=30% cy=25% r=100% fx=30% fy=25%><stop offset=0% style="stop-color:rgb(238, 238, 238);stop-opacity:1"></stop><stop offset=100% style="stop-color:rgb(187, 187, 187);stop-opacity:1">'),cn=$("<svg><line x1=0 stroke=black stroke-width=1></svg>",!1,!0),un=$("<svg><text x=-50 class=boardtext></svg>",!1,!0),Le=$("<svg><text class=boardtext></svg>",!1,!0),fn=$("<svg><line y1=0 stroke=black stroke-width=1></svg>",!1,!0),an=$("<svg><text y=-50 class=boardtext></svg>",!1,!0),dn=$("<svg><circle r=5 fill=black></svg>",!1,!0),gn=$('<svg><g><rect x=-25 y=-25 width=50 height=50 class="transition-opacity duration-1000"></svg>',!1,!0),hn=$("<svg><circle cx=0 cy=0 r=20></svg>",!1,!0),yn=$('<svg><circle r=20 fill=red filter="drop-shadow(0px 0px 5px red)"class="pointer-events-none animate-threat"></svg>',!1,!0),vn=$("<svg><circle r=10 stroke-width=3 fill=transparent class=pointer-events-none></svg>",!1,!0),mn=$("<svg><line stroke=red stroke-width=8 stroke-linecap=round class=pointer-events-none></svg>",!1,!0);const Ce="ABCDEFGHIJKLMNOPQRSTUVWXYZ",bn=e=>{const[t,n]=I(null),r=A(()=>{const l=.06*(140+50*(e.width-1)),c=.06*(140+50*(e.height-1)),i=Math.max(l,c);return i>50?[l*42/i,c*42/i]:[l,c]}),s=()=>{const l=e.width/2|0,c=e.height/2|0,i=l/2|0,o=c/2|0;return[[l,c],[l-i,c-o],[l+i,c-o],[l-i,c+o],[l+i,c+o]]};return(()=>{var l=sn(),c=l.firstChild;return c.firstChild,m(c,w(J,{get each(){return ue(0,e.height)},children:i=>[(()=>{var o=cn();return v(o,"y1",50*i),v(o,"y2",50*i),p(()=>v(o,"x2",50*(e.width-1))),o})(),(()=>{var o=un();return v(o,"y",50*i),m(o,()=>e.height-i),o})(),(()=>{var o=Le();return v(o,"y",50*i),m(o,()=>e.height-i),p(()=>v(o,"x",50*(e.width-1)+50)),o})()]}),null),m(c,w(J,{get each(){return ue(0,e.width)},children:i=>[(()=>{var o=fn();return v(o,"x1",50*i),v(o,"x2",50*i),p(()=>v(o,"y2",50*(e.height-1))),o})(),(()=>{var o=an();return v(o,"x",50*i),m(o,()=>Ce[i]),o})(),(()=>{var o=Le();return v(o,"x",50*i),m(o,()=>Ce[i]),p(()=>v(o,"y",50*(e.height-1)+50)),o})()]}),null),m(c,w(J,{get each(){return s()},children:([i,o])=>(()=>{var a=dn();return v(a,"cx",50*i),v(a,"cy",50*o),a})()}),null),m(c,w(yt,{get each(){return e.board},children:(i,o)=>(()=>{var a=gn(),u=a.firstChild;return u.addEventListener("pointerleave",f=>n(null,f)),u.addEventListener("pointerenter",f=>n(o,f)),u.$$click=e.play,u.$$clickData=o,m(a,w(Ze,{onExit:(f,g)=>{f.animate([{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-50px)"}],{duration:600}).finished.then(g)},get children(){return A(()=>i()!==0)()&&(()=>{var f=hn();return p(()=>v(f,"fill",i()===1?"url(#black-gradient)":"url(#white-gradient)")),f})()}}),null),p(f=>{var g=`translate(${50*(o%e.width)} ${50*(o/e.width|0)})`,h=i()>0||!e.scores?0:.5,d=e.scores?`rgb(255,${256*(1-e.scores[o])},0)`:"transparent";return g!==f.e&&v(a,"transform",f.e=g),h!==f.t&&((f.t=h)!=null?u.style.setProperty("opacity",h):u.style.removeProperty("opacity")),d!==f.a&&v(u,"fill",f.a=d),f},{e:void 0,t:void 0,a:void 0}),a})()}),null),m(c,w(pe,{get when(){return A(()=>!!(e.canPlay&&t()!==null))()&&e.board[t()]===0},get children(){var i=on();return p(o=>{var a=50*(t()%e.width),u=50*(t()/e.width|0),f=e.turn===1?"url(#black-gradient)":"url(#white-gradient)";return a!==o.e&&v(i,"cx",o.e=a),u!==o.t&&v(i,"cy",o.t=u),f!==o.a&&v(i,"fill",o.a=f),o},{e:void 0,t:void 0,a:void 0}),i}}),null),m(c,w(pe,{get when(){return!e.outcome&&e.canPlay},get children(){return w(J,{get each(){return e.threats},children:i=>(()=>{var o=yn();return p(a=>{var u=50*(i%e.width),f=50*(i/e.width|0);return u!==a.e&&v(o,"cx",a.e=u),f!==a.t&&v(o,"cy",a.t=f),a},{e:void 0,t:void 0}),o})()})}}),null),m(c,(()=>{var i=A(()=>e.lastMove!==null);return()=>i()&&(()=>{var o=vn();return p(a=>{var u=50*(e.lastMove%e.width),f=50*(e.lastMove/e.width|0),g=e.turn===1?"black":"white";return u!==a.e&&v(o,"cx",a.e=u),f!==a.t&&v(o,"cy",a.t=f),g!==a.a&&v(o,"stroke",a.a=g),a},{e:void 0,t:void 0,a:void 0}),o})()})(),null),m(c,(()=>{var i=A(()=>!!(e.outcome&&e.outcome.color!==0));return()=>i()&&(()=>{var o=mn();return p(a=>{var u=50*(e.outcome.alignment[0]%e.width),f=50*(e.outcome.alignment[1]%e.width),g=50*(e.outcome.alignment[0]/e.width|0),h=50*(e.outcome.alignment[1]/e.width|0);return u!==a.e&&v(o,"x1",a.e=u),f!==a.t&&v(o,"x2",a.t=f),g!==a.a&&v(o,"y1",a.a=g),h!==a.o&&v(o,"y2",a.o=h),a},{e:void 0,t:void 0,a:void 0,o:void 0}),o})()})(),null),p(i=>{var o=`${r()[0]}rem`,a=`${r()[1]}rem`,u=`-70 -70 ${140+50*(e.width-1)} ${140+50*(e.height-1)}`;return o!==i.e&&((i.e=o)!=null?l.style.setProperty("width",o):l.style.removeProperty("width")),a!==i.t&&((i.t=a)!=null?l.style.setProperty("height",a):l.style.removeProperty("height")),u!==i.a&&v(c,"viewBox",i.a=u),i},{e:void 0,t:void 0,a:void 0}),l})()};xe(["click"]);const wn=e=>e.length===0?null:e[e.length-1],$e=e=>new Promise(t=>setTimeout(t,e));function Pe(e,t,n,r,s){let l=0;for(let c=0;c<t;c++)for(let i=0;i<=e-r;i++){let o=0,a=!1;for(let u=0;u<r;u++){const f=e*c+i+u;n[f]===s?o++:n[f]===3-s&&(a=!0)}a||(l+=1/4**(r-o))}for(let c=0;c<=t-r;c++)for(let i=0;i<e;i++){let o=0,a=!1;for(let u=0;u<r;u++){const f=e*(c+u)+i;n[f]===s?o++:n[f]===3-s&&(a=!0)}a||(l+=1/4**(r-o))}for(let c=0;c<=t-r;c++)for(let i=0;i<=e-r;i++){let o=0,a=!1;for(let u=0;u<r;u++){const f=e*(c+u)+i+u;n[f]===s?o++:n[f]===3-s&&(a=!0)}a||(l+=1/4**(r-o))}for(let c=0;c<=t-r;c++)for(let i=r-1;i<e;i++){let o=0,a=!1;for(let u=0;u<r;u++){const f=e*(c+u)+i-u;n[f]===s?o++:n[f]===3-s&&(a=!0)}a||(l+=1/4**(r-o))}return l}function $n(e,t,n,r,s){console.log(s);const l=n.length,c=new Array(l);c.fill(-1/0);for(let a=0;a<l;a++)n[a]===0&&(n[a]=s,c[a]=1.5*Pe(e,t,n,r,s),n[a]=3-s,c[a]+=Pe(e,t,n,r,3-s),n[a]=0);let i=Math.min(...c.filter(a=>a!==-1/0)),o=Math.max(...c);return c.map(a=>a==-1/0?-1/0:i===o?0:(a-i)/(o-i))}function xn(e){const t=e.length,n=Math.max(...e),r=[];for(let s=0;s<t;s++)e[s]===n&&r.push(s);return r[Math.random()*r.length|0]}const Ne=()=>({width:15,height:15,adversary:"level1",alignment:5}),pn=()=>{const e=Ne(),t=new Array(e.width*e.height);return t.fill(0),{board:t,turn:1,played:[],scores:null,config:Ne(),outcome:null,isThinking:!1,dialogOpened:!1}};function je(e,t,n,r,s,l){function c(a,u,f,g){let h=0;for(;a>=0&&a<e&&u>=0&&u<t&&n[u*e+a]===s;)h++,a+=f,u+=g;return[h,a-f+e*(u-g)]}let i=l%e,o=l/e|0;for(const[a,u]of[[0,1],[1,0],[1,1],[1,-1]]){const[f,g]=c(i+a,o+u,a,u),[h,d]=c(i-a,o-u,-a,-u);if(f+h>=r-1)return{color:s,alignment:[g,d]}}return null}function An(e,t,n,r,s){const l=[];for(let c=0;c<t;c++)for(let i=0;i<=e-r;i++){const o=[];let a=!1;for(let u=0;u<r;u++){const f=e*c+i+u;n[f]===3-s?a=!0:n[f]===0&&o.push(f)}!a&&o.length===1&&!l.includes(o[0])&&l.push(o[0])}for(let c=0;c<=t-r;c++)for(let i=0;i<e;i++){const o=[];let a=!1;for(let u=0;u<r;u++){const f=e*(c+u)+i;n[f]===3-s?a=!0:n[f]===0&&o.push(f)}!a&&o.length===1&&!l.includes(o[0])&&l.push(o[0])}for(let c=0;c<=t-r;c++)for(let i=0;i<=e-r;i++){const o=[];let a=!1;for(let u=0;u<r;u++){const f=e*(c+u)+i+u;n[f]===3-s?a=!0:n[f]===0&&o.push(f)}!a&&o.length===1&&!l.includes(o[0])&&l.push(o[0])}for(let c=0;c<=t-r;c++)for(let i=r-1;i<e;i++){const o=[];let a=!1;for(let u=0;u<r;u++){const f=e*(c+u)+i-u;n[f]===3-s?a=!0:n[f]===0&&o.push(f)}!a&&o.length===1&&!l.includes(o[0])&&l.push(o[0])}return l}var kn=$("<div class=dialog-title>Nouvelle partie"),Tn=$('<div class="dialog-body grid grid-cols-20/80 gap-8"><div class="text-bold text-lg">Adversaire</div><div class="flex gap-4 text-lg"></div><div class="text-bold text-lg">Alignement</div><div class="flex gap-4"></div><div class="text-bold text-lg">Hauteur</div><div class="grid grid-cols-6 gap-4"></div><div class="text-bold text-lg">Largeur</div><div class="grid grid-cols-6 gap-4">'),_n=$("<div class=dialog-buttons><button class=btn>Annuler</button><button class=btn>OK"),Q=$("<button class=togglebtn>");const En=[["human","Humain"],["level1","Débutant"]],Sn=e=>{const[t,n]=Xe({...e.config});return[kn(),(()=>{var r=Tn(),s=r.firstChild,l=s.nextSibling,c=l.nextSibling,i=c.nextSibling,o=i.nextSibling,a=o.nextSibling,u=a.nextSibling,f=u.nextSibling;return m(l,()=>En.map(([g,h])=>(()=>{var d=Q();return d.$$click=y=>n("adversary",g),m(d,h),p(()=>d.classList.toggle("toggledbtn",g===t.adversary)),d})())),m(i,()=>[3,4,5,6,7,8].map(g=>(()=>{var h=Q();return h.$$click=d=>n("alignment",g),m(h,g),p(()=>h.classList.toggle("toggledbtn",g===t.alignment)),h})())),m(a,()=>ue(3,21).map(g=>(()=>{var h=Q();return h.$$click=d=>n("height",g),m(h,g),p(()=>h.classList.toggle("toggledbtn",g===t.height)),h})())),m(f,()=>ue(3,21).map(g=>(()=>{var h=Q();return h.$$click=d=>n("width",g),m(h,g),p(()=>h.classList.toggle("toggledbtn",g===t.width)),h})())),r})(),(()=>{var r=_n(),s=r.firstChild,l=s.nextSibling;return wt(s,"click",e.closeDialog),l.$$click=e.newGame,l.$$clickData=t,r})()]};xe(["click"]);var On=$('<span class="text-blue-500 font-bold">'),Ln=$("<div>"),Cn=$("<div class=tooltip>");const O=e=>(()=>{var t=On();return m(t,()=>e.children),t})(),he=[[["Bienvenue sur l'appli ",w(O,{children:"Gomoku"})],4e3],[[w(O,{children:"Gomoku"})," connu aussi sous le nom de Darpion est un jeu positionnel japonais d'origine chinoise."],5e3],[["Il existe de nombreuses variantes: Libre, ",w(O,{children:"Renju"}),", ",w(O,{children:"Caro"}),", ",w(O,{children:"Omok"}),", ",w(O,{children:"Ninuki-renju"})],5e3]],Pn=e=>{const[t,n]=I(""),r=A(()=>e.outcome!==null?e.outcome.color===0?'Match nul! Tu peux changer le niveau de difficulté en clickant sur "Nouvelle partie".':e.adversary==="human"?["Le joueur ",A(()=>e.outcome.color===1?"noir":"blanc")," a gagné la partie. Tu peux jouer contre l'IA en clickant sur ",w(O,{children:"Nouvelle partie"}),"."]:e.outcome.color===1?["Zut! J'ai perdu! Tu peux changer de difficulté en clickant sur ",w(O,{children:"Nouvelle partie"}),"!"]:["Oh oui! J'ai gagné! Tu peux changer de difficulté en clickant sur ",w(O,{children:"Nouvelle partie"}),"!`"]:e.multipleThreats?["Le joueur ",A(()=>e.turn===1?"blanc":"noir")," a réussi une ",w(O,{children:"menace multiple"}),". Il peut gagner la partie quoique réponde l'adversaire."]:t()),s=A(()=>e.isThinking?"bg-thinking":e.outcome?.color===1&&e.adversary!=="human"?"bg-crying":e.outcome?.color===2||e.outcome?.color===1&&e.adversary==="human"?"bg-happy":e.multipleThreats||e.outcome?.color===0?"bg-surprised":"bg-speaking");return it(async()=>{let l=0;for(;;){const c=he[l][1];n(he[l][0]),await $e(c),n(null),l=(l+1)%he.length,await $e(2e3)}}),(()=>{var l=Ln();return m(l,w(Ze,{onEnter:(c,i)=>{c.animate([{opacity:0},{opacity:1}],{duration:500}).finished.then(i)},onExit:(c,i)=>{c.animate([{opacity:1},{opacity:0}],{duration:500}).finished.then(i)},get children(){return A(()=>!!r())()&&(()=>{var c=Cn();return m(c,r),c})()}})),p(()=>bt(l,`relative w-[15rem] h-[25rem] bg-contain bg-no-repeat z-20 ${s()}`)),l})()};var Nn=$("<audio src=./move.webm preload=auto>"),jn=$('<div class="relative w-screen min-h-screen z-20 bg-main bg-cover flex flew-row items-center justify-around portrait:flex-col"><div class="absolute bg-white w-full h-full opacity-30 z-10 pointer-events-none"></div><div class="flex flex-col bg-wood p-6 border-2 border-black rounded-xl gap-4"><div class=text-4xl>Gomoku</div><button class=btn>Nouvelle partie</button><button class=btn>Annuler</button><button class=btn>Information'),In=$("<dialog class=dialog>");const Mn=()=>{let e,t;const[n,r]=Xe(pn()),s=A(()=>An(n.config.width,n.config.height,n.board,n.config.alignment,3-n.turn)),l=async u=>{const f=n.config.width,g=n.config.height;let h;n.isThinking||n.outcome||n.board[u]!==0||(t.play(),r(V(d=>{d.board[u]=d.turn,d.played.push(u);let y=je(f,g,d.board,d.config.alignment,d.turn,u);if(y){d.outcome=y,d.turn=3-d.turn;return}if(d.played.length===d.config.width*d.config.height){d.outcome={color:0,alignment:[0,0]},d.turn=3-d.turn;return}d.turn=3-d.turn,d.config.adversary!=="human"&&(d.isThinking=!0,h=$n(d.config.width,d.config.height,[...d.board],d.config.alignment,d.turn),d.scores=h)})),!n.outcome&&n.config.adversary!=="human"&&(await $e(1500),r(V(d=>{let y=xn(h);t.play(),d.board[y]=d.turn,d.played.push(y),d.scores=null;let _=je(f,g,d.board,d.config.alignment,d.turn,y);_?d.outcome=_:d.played.length===d.config.width*d.config.height&&(d.outcome={color:0,alignment:[0,0]}),d.turn=3-d.turn,d.isThinking=!1}))))},c=()=>{n.isThinking||r(V(u=>{if(u.played.length){const f=u.played.pop();u.board[f]=0,u.turn=3-u.turn,u.outcome=null}if(u.played.length%2===1&&u.config.adversary!=="human"){const f=u.played.pop();u.board[f]=0,u.turn=3-u.turn}}))},i=()=>{r("dialogOpened",!0),e.showModal()},o=()=>{e.close(),r("dialogOpened",!1)},a=u=>{r(V(f=>{f.config={...u},f.board=new Array(u.width*u.height),f.board.fill(0),f.played=[],f.outcome=null,f.turn=1,f.isThinking=!1,f.dialogOpened=!1})),e.close()};return[(()=>{var u=Nn(),f=t;return typeof f=="function"?ke(f,u):t=u,u})(),(()=>{var u=jn(),f=u.firstChild,g=f.nextSibling,h=g.firstChild,d=h.nextSibling,y=d.nextSibling;return d.$$click=i,y.$$click=c,m(u,w(bn,{get board(){return n.board},get width(){return n.config.width},get height(){return n.config.height},get lastMove(){return wn(n.played)},get turn(){return n.turn},get scores(){return n.scores},get outcome(){return n.outcome},get threats(){return s()},get canPlay(){return!n.isThinking&&!n.outcome},play:l}),null),m(u,w(Pn,{get multipleThreats(){return s().length>=2},get outcome(){return n.outcome},get turn(){return n.turn},get isThinking(){return n.isThinking},get adversary(){return n.config.adversary}}),null),u})(),(()=>{var u=In();u.addEventListener("close",o),u.addEventListener("cancel",o);var f=e;return typeof f=="function"?ke(f,u):e=u,m(u,(()=>{var g=A(()=>!!n.dialogOpened);return()=>g()&&w(Sn,{get config(){return n.config},closeDialog:o,newGame:a})})()),u})()]};xe(["click"]);const Dn=document.getElementById("root");mt(()=>w(Mn,{}),Dn);