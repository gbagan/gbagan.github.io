(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();const dt=!1,gt=(e,t)=>e===t,G=Symbol("solid-proxy"),re=Symbol("solid-track"),le={equals:gt};let Ke=Xe;const R=1,se=2,Ue={owned:null,cleanups:null,context:null,owner:null};var S=null;let be=null,ht=null,k=null,O=null,D=null,he=0;function U(e,t){const n=k,r=S,o=e.length===0,l=t===void 0?r:t,u=o?Ue:{owned:null,cleanups:null,context:l?l.context:null,owner:l},i=o?e:()=>e(()=>P(()=>Q(u)));S=u,k=null;try{return F(i,!0)}finally{k=n,S=r}}function q(e,t){t=t?Object.assign({},le,t):le;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=o=>(typeof o=="function"&&(o=o(n.value)),Ve(n,o));return[We.bind(n),r]}function mt(e,t,n){const r=me(e,t,!0,R);Y(r)}function E(e,t,n){const r=me(e,t,!1,R);Y(r)}function yt(e,t,n){Ke=_t;const r=me(e,t,!1,R);r.user=!0,D?D.push(r):Y(r)}function C(e,t,n){n=n?Object.assign({},le,n):le;const r=me(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,Y(r),We.bind(r)}function we(e){return F(e,!1)}function P(e){if(k===null)return e();const t=k;k=null;try{return e()}finally{k=t}}function vt(e){yt(()=>P(e))}function He(e){return S===null||(S.cleanups===null?S.cleanups=[e]:S.cleanups.push(e)),e}function pe(){return k}function bt(e){const t=k,n=S;return Promise.resolve().then(()=>{k=t,S=n;let r;return F(e,!1),k=S=null,r?r.done:void 0})}const[$t,jn]=q(!1);function xt(){return[$t,bt]}function We(){if(this.sources&&this.state)if(this.state===R)Y(this);else{const e=O;O=null,F(()=>ue(this),!1),O=e}if(k){const e=this.observers?this.observers.length:0;k.sources?(k.sources.push(this),k.sourceSlots.push(e)):(k.sources=[this],k.sourceSlots=[e]),this.observers?(this.observers.push(k),this.observerSlots.push(k.sources.length-1)):(this.observers=[k],this.observerSlots=[k.sources.length-1])}return this.value}function Ve(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&F(()=>{for(let o=0;o<e.observers.length;o+=1){const l=e.observers[o],u=be&&be.running;u&&be.disposed.has(l),(u?!l.tState:!l.state)&&(l.pure?O.push(l):D.push(l),l.observers&&Ye(l)),u||(l.state=R)}if(O.length>1e6)throw O=[],new Error},!1)),t}function Y(e){if(!e.fn)return;Q(e);const t=he;wt(e,e.value,t)}function wt(e,t,n){let r;const o=S,l=k;k=S=e;try{r=e.fn(t)}catch(u){return e.pure&&(e.state=R,e.owned&&e.owned.forEach(Q),e.owned=null),e.updatedAt=n+1,ze(u)}finally{k=l,S=o}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Ve(e,r):e.value=r,e.updatedAt=n)}function me(e,t,n,r=R,o){const l={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:S,context:S?S.context:null,pure:n};return S===null||S!==Ue&&(S.owned?S.owned.push(l):S.owned=[l]),l}function oe(e){if(e.state===0)return;if(e.state===se)return ue(e);if(e.suspense&&P(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<he);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===R)Y(e);else if(e.state===se){const r=O;O=null,F(()=>ue(e,t[0]),!1),O=r}}function F(e,t){if(O)return e();let n=!1;t||(O=[]),D?n=!0:D=[],he++;try{const r=e();return pt(n),r}catch(r){n||(D=null),O=null,ze(r)}}function pt(e){if(O&&(Xe(O),O=null),e)return;const t=D;D=null,t.length&&F(()=>Ke(t),!1)}function Xe(e){for(let t=0;t<e.length;t++)oe(e[t])}function _t(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:oe(r)}for(t=0;t<n;t++)oe(e[t])}function ue(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const o=r.state;o===R?r!==t&&(!r.updatedAt||r.updatedAt<he)&&oe(r):o===se&&ue(r,t)}}}function Ye(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=se,n.pure?O.push(n):D.push(n),n.observers&&Ye(n))}}function Q(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const l=o.pop(),u=n.observerSlots.pop();r<o.length&&(l.sourceSlots[u]=r,o[r]=l,n.observerSlots[r]=u)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)Q(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)Q(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function At(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ze(e,t=S){throw At(e)}const _e=Symbol("fallback");function ce(e){for(let t=0;t<e.length;t++)e[t]()}function kt(e,t,n={}){let r=[],o=[],l=[],u=0,i=t.length>1?[]:null;return He(()=>ce(l)),()=>{let s=e()||[],c=s.length,a,f;return s[re],P(()=>{let m,y,x,g,v,_,L,N,B;if(c===0)u!==0&&(ce(l),l=[],r=[],o=[],u=0,i&&(i=[])),n.fallback&&(r=[_e],o[0]=U(ye=>(l[0]=ye,n.fallback())),u=1);else if(u===0){for(o=new Array(c),f=0;f<c;f++)r[f]=s[f],o[f]=U(d);u=c}else{for(x=new Array(c),g=new Array(c),i&&(v=new Array(c)),_=0,L=Math.min(u,c);_<L&&r[_]===s[_];_++);for(L=u-1,N=c-1;L>=_&&N>=_&&r[L]===s[N];L--,N--)x[N]=o[L],g[N]=l[L],i&&(v[N]=i[L]);for(m=new Map,y=new Array(N+1),f=N;f>=_;f--)B=s[f],a=m.get(B),y[f]=a===void 0?-1:a,m.set(B,f);for(a=_;a<=L;a++)B=r[a],f=m.get(B),f!==void 0&&f!==-1?(x[f]=o[a],g[f]=l[a],i&&(v[f]=i[a]),f=y[f],m.set(B,f)):l[a]();for(f=_;f<c;f++)f in x?(o[f]=x[f],l[f]=g[f],i&&(i[f]=v[f],i[f](f))):o[f]=U(d);o=o.slice(0,u=c),r=s.slice(0)}return o});function d(m){if(l[f]=m,i){const[y,x]=q(f);return i[f]=x,t(s[f],y)}return t(s[f])}}}function St(e,t,n={}){let r=[],o=[],l=[],u=[],i=0,s;return He(()=>ce(l)),()=>{const c=e()||[],a=c.length;return c[re],P(()=>{if(a===0)return i!==0&&(ce(l),l=[],r=[],o=[],i=0,u=[]),n.fallback&&(r=[_e],o[0]=U(d=>(l[0]=d,n.fallback())),i=1),o;for(r[0]===_e&&(l[0](),l=[],r=[],o=[],i=0),s=0;s<a;s++)s<r.length&&r[s]!==c[s]?u[s](()=>c[s]):s>=r.length&&(o[s]=U(f));for(;s<r.length;s++)l[s]();return i=u.length=l.length=a,r=c.slice(0),o=o.slice(0,i)});function f(d){l[s]=d;const[m,y]=q(c[s]);return u[s]=y,t(m,s)}}}function A(e,t){return P(()=>e(t||{}))}const Tt=e=>`Stale read from <${e}>.`;function z(e){const t="fallback"in e&&{fallback:()=>e.fallback};return C(kt(()=>e.each,e.children,t||void 0))}function Et(e){const t="fallback"in e&&{fallback:()=>e.fallback};return C(St(()=>e.each,e.children,t||void 0))}function Le(e){const t=e.keyed,n=C(()=>e.when,void 0,void 0),r=t?n:C(n,void 0,{equals:(o,l)=>!o==!l});return C(()=>{const o=r();if(o){const l=e.children;return typeof l=="function"&&l.length>0?P(()=>l(t?o:()=>{if(!P(r))throw Tt("Show");return n()})):l}return e.fallback},void 0,void 0)}function Ct(e,t,n){let r=n.length,o=t.length,l=r,u=0,i=0,s=t[o-1].nextSibling,c=null;for(;u<o||i<l;){if(t[u]===n[i]){u++,i++;continue}for(;t[o-1]===n[l-1];)o--,l--;if(o===u){const a=l<r?i?n[i-1].nextSibling:n[l-i]:s;for(;i<l;)e.insertBefore(n[i++],a)}else if(l===i)for(;u<o;)(!c||!c.has(t[u]))&&t[u].remove(),u++;else if(t[u]===n[l-1]&&n[i]===t[o-1]){const a=t[--o].nextSibling;e.insertBefore(n[i++],t[u++].nextSibling),e.insertBefore(n[--l],a),t[o]=n[l]}else{if(!c){c=new Map;let f=i;for(;f<l;)c.set(n[f],f++)}const a=c.get(t[u]);if(a!=null)if(i<a&&a<l){let f=u,d=1,m;for(;++f<o&&f<l&&!((m=c.get(t[f]))==null||m!==a+d);)d++;if(d>a-i){const y=t[u];for(;i<a;)e.insertBefore(n[i++],y)}else e.replaceChild(n[i++],t[u++])}else u++;else t[u++].remove()}}}const Oe="_$DX_DELEGATE";function Lt(e,t,n,r={}){let o;return U(l=>{o=l,t===document?e():$(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{o(),t.textContent=""}}function p(e,t,n,r){let o;const l=()=>{const i=document.createElement("template");return i.innerHTML=e,n?i.content.firstChild.firstChild:i.content.firstChild},u=t?()=>P(()=>document.importNode(o||(o=l()),!0)):()=>(o||(o=l())).cloneNode(!0);return u.cloneNode=u,u}function ee(e,t=window.document){const n=t[Oe]||(t[Oe]=new Set);for(let r=0,o=e.length;r<o;r++){const l=e[r];n.has(l)||(n.add(l),t.addEventListener(l,Pt))}}function w(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Ot(e,t){t==null?e.removeAttribute("class"):e.className=t}function Te(e,t,n,r){Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n}function Pe(e,t,n){return P(()=>e(t,n))}function $(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return fe(e,t,r,n);E(o=>fe(e,t(),o,n),r)}function Pt(e){let t=e.target;const n=`$$${e.type}`,r=e.target,o=e.currentTarget,l=s=>Object.defineProperty(e,"target",{configurable:!0,value:s}),u=()=>{const s=t[n];if(s&&!t.disabled){const c=t[`${n}Data`];if(c!==void 0?s.call(t,c,e):s.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&l(t.host),!0},i=()=>{for(;u()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const s=e.composedPath();l(s[0]);for(let c=0;c<s.length-2&&(t=s[c],!!u());c++){if(t._$host){t=t._$host,i();break}if(t.parentNode===o)break}}else i();l(r)}function fe(e,t,n,r,o){for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,u=r!==void 0;if(e=u&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(l==="number"&&(t=t.toString(),t===n))return n;if(u){let i=n[0];i&&i.nodeType===3?i.data!==t&&(i.data=t):i=document.createTextNode(t),n=K(e,n,r,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean")n=K(e,n,r);else{if(l==="function")return E(()=>{let i=t();for(;typeof i=="function";)i=i();n=fe(e,i,n,r)}),()=>n;if(Array.isArray(t)){const i=[],s=n&&Array.isArray(n);if(Ae(i,t,n,o))return E(()=>n=fe(e,i,n,r,!0)),()=>n;if(i.length===0){if(n=K(e,n,r),u)return n}else s?n.length===0?je(e,i,r):Ct(e,n,i):(n&&K(e),je(e,i));n=i}else if(t.nodeType){if(Array.isArray(n)){if(u)return n=K(e,n,r,t);K(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Ae(e,t,n,r){let o=!1;for(let l=0,u=t.length;l<u;l++){let i=t[l],s=n&&n[e.length],c;if(!(i==null||i===!0||i===!1))if((c=typeof i)=="object"&&i.nodeType)e.push(i);else if(Array.isArray(i))o=Ae(e,i,s)||o;else if(c==="function")if(r){for(;typeof i=="function";)i=i();o=Ae(e,Array.isArray(i)?i:[i],Array.isArray(s)?s:[s])||o}else e.push(i),o=!0;else{const a=String(i);s&&s.nodeType===3&&s.data===a?e.push(s):e.push(document.createTextNode(a))}}return o}function je(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function K(e,t,n,r){if(n===void 0)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let l=!1;for(let u=t.length-1;u>=0;u--){const i=t[u];if(o!==i){const s=i.parentNode===e;!l&&!u?s?e.replaceChild(o,i):e.insertBefore(o,n):s&&i.remove()}else l=!0}}else e.insertBefore(o,n);return[o]}const ae=Symbol("store-raw"),H=Symbol("store-node"),M=Symbol("store-has"),Je=Symbol("store-self");function Qe(e){let t=e[G];if(!t&&(Object.defineProperty(e,G,{value:t=new Proxy(e,It)}),!Array.isArray(e))){const n=Object.keys(e),r=Object.getOwnPropertyDescriptors(e);for(let o=0,l=n.length;o<l;o++){const u=n[o];r[u].get&&Object.defineProperty(e,u,{enumerable:r[u].enumerable,get:r[u].get.bind(t)})}}return t}function W(e){let t;return e!=null&&typeof e=="object"&&(e[G]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function V(e,t=new Set){let n,r,o,l;if(n=e!=null&&e[ae])return n;if(!W(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let u=0,i=e.length;u<i;u++)o=e[u],(r=V(o,t))!==o&&(e[u]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const u=Object.keys(e),i=Object.getOwnPropertyDescriptors(e);for(let s=0,c=u.length;s<c;s++)l=u[s],!i[l].get&&(o=e[l],(r=V(o,t))!==o&&(e[l]=r))}return e}function de(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function Z(e,t,n){if(e[t])return e[t];const[r,o]=q(n,{equals:!1,internal:!0});return r.$=o,e[t]=r}function jt(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===G||t===H||(delete n.value,delete n.writable,n.get=()=>e[G][t]),n}function Ze(e){pe()&&Z(de(e,H),Je)()}function Nt(e){return Ze(e),Reflect.ownKeys(e)}const It={get(e,t,n){if(t===ae)return e;if(t===G)return n;if(t===re)return Ze(e),n;const r=de(e,H),o=r[t];let l=o?o():e[t];if(t===H||t===M||t==="__proto__")return l;if(!o){const u=Object.getOwnPropertyDescriptor(e,t);pe()&&(typeof l!="function"||e.hasOwnProperty(t))&&!(u&&u.get)&&(l=Z(r,t,l)())}return W(l)?Qe(l):l},has(e,t){return t===ae||t===G||t===re||t===H||t===M||t==="__proto__"?!0:(pe()&&Z(de(e,M),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:Nt,getOwnPropertyDescriptor:jt};function X(e,t,n,r=!1){if(!r&&e[t]===n)return;const o=e[t],l=e.length;n===void 0?(delete e[t],e[M]&&e[M][t]&&o!==void 0&&e[M][t].$()):(e[t]=n,e[M]&&e[M][t]&&o===void 0&&e[M][t].$());let u=de(e,H),i;if((i=Z(u,t,o))&&i.$(()=>n),Array.isArray(e)&&e.length!==l){for(let s=e.length;s<l;s++)(i=u[s])&&i.$();(i=Z(u,"length",l))&&i.$(e.length)}(i=u[Je])&&i.$()}function et(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r+=1){const o=n[r];X(e,o,t[o])}}function Mt(e,t){if(typeof t=="function"&&(t=t(e)),t=V(t),Array.isArray(t)){if(e===t)return;let n=0,r=t.length;for(;n<r;n++){const o=t[n];e[n]!==o&&X(e,n,o)}X(e,"length",r)}else et(e,t)}function J(e,t,n=[]){let r,o=e;if(t.length>1){r=t.shift();const u=typeof r,i=Array.isArray(e);if(Array.isArray(r)){for(let s=0;s<r.length;s++)J(e,[r[s]].concat(t),n);return}else if(i&&u==="function"){for(let s=0;s<e.length;s++)r(e[s],s)&&J(e,[s].concat(t),n);return}else if(i&&u==="object"){const{from:s=0,to:c=e.length-1,by:a=1}=r;for(let f=s;f<=c;f+=a)J(e,[f].concat(t),n);return}else if(t.length>1){J(e[r],t,[r].concat(n));return}o=e[r],n=[r].concat(n)}let l=t[0];typeof l=="function"&&(l=l(o,n),l===o)||r===void 0&&l==null||(l=V(l),r===void 0||W(o)&&W(l)&&!Array.isArray(l)?et(o,l):X(e,r,l))}function tt(...[e,t]){const n=V(e||{}),r=Array.isArray(n),o=Qe(n);function l(...u){we(()=>{r&&u.length===1?Mt(n,u[0]):J(n,u)})}return[o,l]}const ge=new WeakMap,nt={get(e,t){if(t===ae)return e;const n=e[t];let r;return W(n)?ge.get(n)||(ge.set(n,r=new Proxy(n,nt)),r):n},set(e,t,n){return X(e,t,V(n)),!0},deleteProperty(e,t){return X(e,t,void 0,!0),!0}};function ne(e){return t=>{if(W(t)){let n;(n=ge.get(t))||ge.set(t,n=new Proxy(t,nt)),e(n)}return t}}const Dt=e=>e.length===0?null:e[e.length-1],ke=e=>new Promise(t=>setTimeout(t,e));function Ne(e,t,n,r,o){let l=0;for(let u=0;u<t;u++)for(let i=0;i<=e-r;i++){let s=0,c=!1;for(let a=0;a<r;a++){const f=e*u+i+a;n[f]===o?s++:n[f]===3-o&&(c=!0)}c||(l+=1/4**(r-s))}for(let u=0;u<=t-r;u++)for(let i=0;i<e;i++){let s=0,c=!1;for(let a=0;a<r;a++){const f=e*(u+a)+i;n[f]===o?s++:n[f]===3-o&&(c=!0)}c||(l+=1/4**(r-s))}for(let u=0;u<=t-r;u++)for(let i=0;i<=e-r;i++){let s=0,c=!1;for(let a=0;a<r;a++){const f=e*(u+a)+i+a;n[f]===o?s++:n[f]===3-o&&(c=!0)}c||(l+=1/4**(r-s))}for(let u=0;u<=t-r;u++)for(let i=r-1;i<e;i++){let s=0,c=!1;for(let a=0;a<r;a++){const f=e*(u+a)+i-a;n[f]===o?s++:n[f]===3-o&&(c=!0)}c||(l+=1/4**(r-s))}return l}function Rt(e,t,n,r,o){const l=n.length,u=new Array(l);u.fill(-1/0);for(let c=0;c<l;c++)n[c]===0&&(n[c]=o,u[c]=1.5*Ne(e,t,n,r,o),n[c]=3-o,u[c]+=Ne(e,t,n,r,3-o),n[c]=0);const i=Math.min(...u.filter(c=>c!==-1/0)),s=Math.max(...u);return u.map(c=>c===-1/0?-1/0:i===s?0:(c-i)/(s-i))}function Bt(e){const t=e.length,n=Math.max(...e),r=[];for(let o=0;o<t;o++)e[o]===n&&r.push(o);return r[Math.random()*r.length|0]}function Ie(){return{width:15,height:15,adversary:"level1",alignment:5}}function Gt(){const e=Ie(),t=new Array(e.width*e.height);return t.fill(0),{board:t,turn:1,played:[],scores:null,config:Ie(),outcome:null,isThinking:!1,dialog:null}}function Me(e,t,n,r,o,l){function u(c,a,f,d){let m=0;for(;c>=0&&c<e&&a>=0&&a<t&&n[a*e+c]===o;)m++,c+=f,a+=d;return[m,c-f+e*(a-d)]}let i=l%e,s=l/e|0;for(const[c,a]of[[0,1],[1,0],[1,1],[1,-1]]){const[f,d]=u(i+c,s+a,c,a),[m,y]=u(i-c,s-a,-c,-a);if(f+m>=r-1)return{color:o,alignment:[d,y]}}return null}function qt(e,t,n,r,o){const l=[];for(let u=0;u<t;u++)for(let i=0;i<=e-r;i++){const s=[];let c=!1;for(let a=0;a<r;a++){const f=e*u+i+a;n[f]===3-o?c=!0:n[f]===0&&s.push(f)}!c&&s.length===1&&!l.includes(s[0])&&l.push(s[0])}for(let u=0;u<=t-r;u++)for(let i=0;i<e;i++){const s=[];let c=!1;for(let a=0;a<r;a++){const f=e*(u+a)+i;n[f]===3-o?c=!0:n[f]===0&&s.push(f)}!c&&s.length===1&&!l.includes(s[0])&&l.push(s[0])}for(let u=0;u<=t-r;u++)for(let i=0;i<=e-r;i++){const s=[];let c=!1;for(let a=0;a<r;a++){const f=e*(u+a)+i+a;n[f]===3-o?c=!0:n[f]===0&&s.push(f)}!c&&s.length===1&&!l.includes(s[0])&&l.push(s[0])}for(let u=0;u<=t-r;u++)for(let i=r-1;i<e;i++){const s=[];let c=!1;for(let a=0;a<r;a++){const f=e*(u+a)+i-a;n[f]===3-o?c=!0:n[f]===0&&s.push(f)}!c&&s.length===1&&!l.includes(s[0])&&l.push(s[0])}return l}function Ft(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $e,De;function Kt(){if(De)return $e;De=1;var e=1/0,t=9007199254740991,n=17976931348623157e292,r=NaN,o="[object Function]",l="[object GeneratorFunction]",u="[object Symbol]",i=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=/^(?:0|[1-9]\d*)$/,d=parseInt,m=Object.prototype,y=m.toString,x=Math.ceil,g=Math.max;function v(h,b,T,j){for(var at=-1,Ee=g(x((b-h)/(T||1)),0),Ce=Array(Ee);Ee--;)Ce[++at]=h,h+=T;return Ce}function _(h){return function(b,T,j){return j&&typeof j!="number"&&N(b,T,j)&&(T=j=void 0),b=ve(b),T===void 0?(T=b,b=0):T=ve(T),j=j===void 0?b<T?1:-1:ve(j),v(b,T,j)}}function L(h,b){return b=b??t,!!b&&(typeof h=="number"||f.test(h))&&h>-1&&h%1==0&&h<b}function N(h,b,T){if(!te(T))return!1;var j=typeof b;return(j=="number"?ye(T)&&L(b,T.length):j=="string"&&b in T)?B(T[b],h):!1}function B(h,b){return h===b||h!==h&&b!==b}function ye(h){return h!=null&&st(h.length)&&!lt(h)}function lt(h){var b=te(h)?y.call(h):"";return b==o||b==l}function st(h){return typeof h=="number"&&h>-1&&h%1==0&&h<=t}function te(h){var b=typeof h;return!!h&&(b=="object"||b=="function")}function ot(h){return!!h&&typeof h=="object"}function ut(h){return typeof h=="symbol"||ot(h)&&y.call(h)==u}function ve(h){if(!h)return h===0?h:0;if(h=ct(h),h===e||h===-1/0){var b=h<0?-1:1;return b*n}return h===h?h:0}function ct(h){if(typeof h=="number")return h;if(ut(h))return r;if(te(h)){var b=typeof h.valueOf=="function"?h.valueOf():h;h=te(b)?b+"":b}if(typeof h!="string")return h===0?h:+h;h=h.replace(i,"");var T=c.test(h);return T||a.test(h)?d(h.slice(2),T?2:8):s.test(h)?r:+h}var ft=_();return $e=ft,$e}var Ut=Kt();const Re=Ft(Ut),Ht=()=>{},Be=(e,t)=>t();function Wt(e,t){const n=P(e),r=n?[n]:[],{onEnter:o=Be,onExit:l=Be}=t,[u,i]=q(t.appear?[]:r),[s]=xt();let c,a=!1;function f(y,x){if(!y)return x&&x();a=!0,l(y,()=>{we(()=>{a=!1,i(g=>g.filter(v=>v!==y)),x&&x()})})}function d(y){const x=c;if(!x)return y&&y();c=void 0,i(g=>[x,...g]),o(x,y??Ht)}const m=t.mode==="out-in"?y=>a||f(y,d):t.mode==="in-out"?y=>d(()=>f(y)):y=>{f(y),d()};return mt(y=>{const x=e();return P(s)?(s(),y):(x!==y&&(c=x,we(()=>P(()=>m(y)))),x)},t.appear?void 0:n),u}const Ge=e=>e instanceof Element;function Se(e,t){if(t(e))return e;if(typeof e=="function"&&!e.length)return Se(e(),t);if(Array.isArray(e))for(const n of e){const r=Se(n,t);if(r)return r}return null}function Vt(e,t=Ge,n=Ge){const r=C(e);return C(()=>Se(r(),t))}function Xt(e){return C(()=>{const t=e.name||"s";return{enterActive:(e.enterActiveClass||t+"-enter-active").split(" "),enter:(e.enterClass||t+"-enter").split(" "),enterTo:(e.enterToClass||t+"-enter-to").split(" "),exitActive:(e.exitActiveClass||t+"-exit-active").split(" "),exit:(e.exitClass||t+"-exit").split(" "),exitTo:(e.exitToClass||t+"-exit-to").split(" "),move:(e.moveClass||t+"-move").split(" ")}})}function it(e){requestAnimationFrame(()=>requestAnimationFrame(e))}function Yt(e,t,n,r){const{onBeforeEnter:o,onEnter:l,onAfterEnter:u}=t;o?.(n),n.classList.add(...e.enter),n.classList.add(...e.enterActive),queueMicrotask(()=>{if(!n.parentNode)return r?.();l?.(n,()=>i())}),it(()=>{n.classList.remove(...e.enter),n.classList.add(...e.enterTo),(!l||l.length<2)&&(n.addEventListener("transitionend",i),n.addEventListener("animationend",i))});function i(s){(!s||s.target===n)&&(r?.(),n.removeEventListener("transitionend",i),n.removeEventListener("animationend",i),n.classList.remove(...e.enterActive),n.classList.remove(...e.enterTo),u?.(n))}}function zt(e,t,n,r){const{onBeforeExit:o,onExit:l,onAfterExit:u}=t;if(!n.parentNode)return r?.();o?.(n),n.classList.add(...e.exit),n.classList.add(...e.exitActive),l?.(n,()=>i()),it(()=>{n.classList.remove(...e.exit),n.classList.add(...e.exitTo),(!l||l.length<2)&&(n.addEventListener("transitionend",i),n.addEventListener("animationend",i))});function i(s){(!s||s.target===n)&&(r?.(),n.removeEventListener("transitionend",i),n.removeEventListener("animationend",i),n.classList.remove(...e.exitActive),n.classList.remove(...e.exitTo),u?.(n))}}const Jt={inout:"in-out",outin:"out-in"},rt=e=>{const t=Xt(e);return Wt(Vt(()=>e.children),{mode:Jt[e.mode],appear:e.appear,onEnter(n,r){Yt(t(),e,n,r)},onExit(n,r){zt(t(),e,n,r)}})};var Qt=p('<svg><circle r=20 opacity=0.7 class="pointer-events-none animate-peg"></svg>',!1,!0),Zt=p('<div class="bg-wood border-4 border-black rounded-3xl relative z-20"><svg class=select-none><defs><radialGradient id=black-gradient cx=30% cy=25% r=100% fx=30% fy=25%><stop offset=0% style="stop-color:rgb(109, 109, 109);stop-opacity:1"></stop><stop offset=100% style="stop-color:rgb(4, 4, 4);stop-opacity:1"></stop></radialGradient><radialGradient id=white-gradient cx=30% cy=25% r=100% fx=30% fy=25%><stop offset=0% style="stop-color:rgb(238, 238, 238);stop-opacity:1"></stop><stop offset=100% style="stop-color:rgb(187, 187, 187);stop-opacity:1">'),en=p("<svg><line x1=0 stroke=black stroke-width=1></svg>",!1,!0),tn=p("<svg><text class=boardtext x=-50></svg>",!1,!0),qe=p("<svg><text class=boardtext></svg>",!1,!0),nn=p("<svg><line y1=0 stroke=black stroke-width=1></svg>",!1,!0),rn=p("<svg><text class=boardtext y=-50></svg>",!1,!0),ln=p("<svg><circle r=5 fill=black></svg>",!1,!0),sn=p('<svg><g><rect x=-25 y=-25 width=50 height=50 class="transition-opacity duration-1000"></svg>',!1,!0),on=p("<svg><circle cx=0 cy=0 r=20></svg>",!1,!0),un=p('<svg><circle r=20 fill=red filter="drop-shadow(0px 0px 5px red)"class="pointer-events-none animate-threat"></svg>',!1,!0),cn=p("<svg><circle r=10 stroke-width=3 fill=transparent class=pointer-events-none></svg>",!1,!0),fn=p("<svg><line stroke=red stroke-width=8 stroke-linecap=round class=pointer-events-none></svg>",!1,!0);const Fe="ABCDEFGHIJKLMNOPQRSTUVWXYZ",an=e=>{const[t,n]=q(null),r=C(()=>{const l=.1*(140+50*(e.width-1)),u=.1*(140+50*(e.height-1)),i=Math.max(l,u);return i>85?[l*85/i,u*85/i]:[l,u]}),o=()=>{const l=e.width/2|0,u=e.height/2|0,i=l/2|0,s=u/2|0;return[[l,u],[l-i,u-s],[l+i,u-s],[l-i,u+s],[l+i,u+s]]};return(()=>{var l=Zt(),u=l.firstChild;return u.firstChild,$(u,A(z,{get each(){return Re(0,e.height)},children:i=>[(()=>{var s=en();return w(s,"y1",50*i),w(s,"y2",50*i),E(()=>w(s,"x2",50*(e.width-1))),s})(),(()=>{var s=tn();return w(s,"y",50*i),$(s,()=>e.height-i),s})(),(()=>{var s=qe();return w(s,"y",50*i),$(s,()=>e.height-i),E(()=>w(s,"x",50*(e.width-1)+50)),s})()]}),null),$(u,A(z,{get each(){return Re(0,e.width)},children:i=>[(()=>{var s=nn();return w(s,"x1",50*i),w(s,"x2",50*i),E(()=>w(s,"y2",50*(e.height-1))),s})(),(()=>{var s=rn();return w(s,"x",50*i),$(s,()=>Fe[i]),s})(),(()=>{var s=qe();return w(s,"x",50*i),$(s,()=>Fe[i]),E(()=>w(s,"y",50*(e.height-1)+50)),s})()]}),null),$(u,A(z,{get each(){return o()},children:([i,s])=>(()=>{var c=ln();return w(c,"cx",50*i),w(c,"cy",50*s),c})()}),null),$(u,A(Et,{get each(){return e.board},children:(i,s)=>(()=>{var c=sn(),a=c.firstChild;return a.addEventListener("pointerleave",f=>n(null,f)),a.addEventListener("pointerenter",f=>n(s,f)),a.$$click=e.play,a.$$clickData=s,$(c,A(rt,{onExit:(f,d)=>f.animate([{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-50px)"}],{duration:600}).finished.then(d),get children(){return C(()=>i()!==0)()&&(()=>{var f=on();return E(()=>w(f,"fill",i()===1?"url(#black-gradient)":"url(#white-gradient)")),f})()}}),null),E(f=>{var d=`translate(${50*(s%e.width)} ${50*(s/e.width|0)})`,m=i()>0||!e.scores?0:.5,y=e.scores?`rgb(255,${256*(1-e.scores[s])},0)`:"transparent";return d!==f.e&&w(c,"transform",f.e=d),m!==f.t&&((f.t=m)!=null?a.style.setProperty("opacity",m):a.style.removeProperty("opacity")),y!==f.a&&w(a,"fill",f.a=y),f},{e:void 0,t:void 0,a:void 0}),c})()}),null),$(u,A(Le,{get when(){return C(()=>!!(e.canPlay&&t()!==null))()&&e.board[t()]===0},get children(){var i=Qt();return E(s=>{var c=50*(t()%e.width),a=50*(t()/e.width|0),f=e.turn===1?"url(#black-gradient)":"url(#white-gradient)";return c!==s.e&&w(i,"cx",s.e=c),a!==s.t&&w(i,"cy",s.t=a),f!==s.a&&w(i,"fill",s.a=f),s},{e:void 0,t:void 0,a:void 0}),i}}),null),$(u,A(Le,{get when(){return!e.outcome&&e.canPlay},get children(){return A(z,{get each(){return e.threats},children:i=>(()=>{var s=un();return E(c=>{var a=50*(i%e.width),f=50*(i/e.width|0);return a!==c.e&&w(s,"cx",c.e=a),f!==c.t&&w(s,"cy",c.t=f),c},{e:void 0,t:void 0}),s})()})}}),null),$(u,(()=>{var i=C(()=>e.lastMove!==null);return()=>i()&&(()=>{var s=cn();return E(c=>{var a=50*(e.lastMove%e.width),f=50*(e.lastMove/e.width|0),d=e.turn===1?"black":"white";return a!==c.e&&w(s,"cx",c.e=a),f!==c.t&&w(s,"cy",c.t=f),d!==c.a&&w(s,"stroke",c.a=d),c},{e:void 0,t:void 0,a:void 0}),s})()})(),null),$(u,(()=>{var i=C(()=>!!(e.outcome&&e.outcome.color!==0));return()=>i()&&(()=>{var s=fn();return E(c=>{var a=50*(e.outcome.alignment[0]%e.width),f=50*(e.outcome.alignment[1]%e.width),d=50*(e.outcome.alignment[0]/e.width|0),m=50*(e.outcome.alignment[1]/e.width|0);return a!==c.e&&w(s,"x1",c.e=a),f!==c.t&&w(s,"x2",c.t=f),d!==c.a&&w(s,"y1",c.a=d),m!==c.o&&w(s,"y2",c.o=m),c},{e:void 0,t:void 0,a:void 0,o:void 0}),s})()})(),null),E(i=>{var s=`${r()[0]}vmin`,c=`${r()[1]}vmin`,a=`-70 -70 ${140+50*(e.width-1)} ${140+50*(e.height-1)}`;return s!==i.e&&((i.e=s)!=null?l.style.setProperty("width",s):l.style.removeProperty("width")),c!==i.t&&((i.t=c)!=null?l.style.setProperty("height",c):l.style.removeProperty("height")),a!==i.a&&w(u,"viewBox",i.a=a),i},{e:void 0,t:void 0,a:void 0}),l})()};ee(["click"]);var dn=p("<div class=dialog-title>Nouvelle partie"),gn=p('<div class="dialog-body grid grid-cols-20/80 gap-8"><div class="text-bold text-lg">Adversaire</div><div class="flex gap-4"></div><div class="text-bold text-lg">Alignement</div><div class="flex gap-4"></div><div class="text-bold text-lg">Hauteur</div><div class="grid grid-cols-6 gap-4"></div><div class="text-bold text-lg">Largeur</div><div class="grid grid-cols-6 gap-4">'),hn=p("<div class=dialog-buttons><button class=btn>Annuler</button><button class=btn>OK"),ie=p("<button class=togglebtn> ");const mn=[["human","Humain"],["level1","Débutant"]],yn=e=>{const[t,n]=tt({...e.config}),r=i=>n("adversary",i),o=i=>n("alignment",i),l=i=>n("height",i),u=i=>n("width",i);return[dn(),(()=>{var i=gn(),s=i.firstChild,c=s.nextSibling,a=c.nextSibling,f=a.nextSibling,d=f.nextSibling,m=d.nextSibling,y=m.nextSibling,x=y.nextSibling;return $(c,()=>mn.map(([g,v])=>(()=>{var _=ie();return _.firstChild,_.$$click=r,_.$$clickData=g,$(_,v,null),E(()=>_.classList.toggle("toggledbtn",g===t.adversary)),_})())),$(f,()=>[3,4,5,6,7,8].map(g=>(()=>{var v=ie();return v.firstChild,v.$$click=o,v.$$clickData=g,$(v,g,null),E(()=>v.classList.toggle("toggledbtn",g===t.alignment)),v})())),$(m,()=>[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(g=>(()=>{var v=ie();return v.firstChild,v.$$click=l,v.$$clickData=g,$(v,g,null),E(()=>v.classList.toggle("toggledbtn",g===t.height)),v})())),$(x,()=>[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(g=>(()=>{var v=ie();return v.firstChild,v.$$click=u,v.$$clickData=g,$(v,g,null),E(()=>v.classList.toggle("toggledbtn",g===t.width)),v})())),i})(),(()=>{var i=hn(),s=i.firstChild,c=s.nextSibling;return Te(s,"click",e.closeDialog),c.$$click=e.newGame,c.$$clickData=t,i})()]};ee(["click"]);var vn=p('<span class="text-blue-500 font-bold">');const I=e=>(()=>{var t=vn();return $(t,()=>e.children),t})();var bn=p("<div>"),$n=p("<div class=tooltip>");const xe=[[["Bienvenue sur l'appli ",["Gomoku"],"."],3e3],[[["Gomoku"]," connu aussi sous le nom de Darpion est un jeu positionnel japonais d'origine chinoise."],5e3],[["Il existe de nombreuses variantes: Libre, ",["Renju"],", ",["Caro"],", ",["Omok"],", ",["Ninuki-renju"],"."],5e3],[["Lorsque tu joues contre l'IA, la couleur d'une case indique la ",["menace"]," d'un coup. Plus il tend vers le ",["rouge"],", plus le coup est intéressant pour l'IA"],7e3]],xn=e=>{const[t,n]=q(null),r=C(()=>e.outcome!==null?e.outcome.color===0?["Match nul! Tu peux changer le niveau de difficulté en cliquant sur ",["Nouvelle partie"],"."]:e.adversary==="human"?[`Le joueur ${e.outcome.color===1?"noir":"blanc"} a gagné la partie. ",
            "Tu peux jouer contre l'IA en cliquant sur `,["Nouvelle partie"],"."]:e.outcome.color===1?["Zut! J'ai perdu! Tu peux changer de difficulté en cliquant sur ",["Nouvelle partie"],"!"]:["Oh oui! J'ai gagné! Tu peux changer de difficulté en cliquant sur ",["Nouvelle partie"],"!"]:e.multipleThreats?[`Le joueur ${e.turn===1?"blanc":"noir"} a réussi une `,["menace multiple"],". Il peut gagner la partie quoique réponde l'adversaire."]:t()),o=C(()=>e.isThinking?"bg-thinking":e.outcome?.color===1&&e.adversary!=="human"?"bg-crying":e.outcome?.color===2||e.outcome?.color===1&&e.adversary==="human"?"bg-happy":e.multipleThreats||e.outcome?.color===0?"bg-surprised":"bg-speaking");return vt(async()=>{let l=0;for(;;){const u=xe[l][1];n(xe[l][0]),await ke(u),n(null),l=(l+1)%xe.length,await ke(1500)}}),(()=>{var l=bn();return $(l,A(rt,{onEnter:(u,i)=>u.animate([{opacity:0},{opacity:1}],{duration:500}).finished.then(i),onExit:(u,i)=>u.animate([{opacity:1},{opacity:0}],{duration:500}).finished.then(i),get children(){return[" ",C(()=>C(()=>!!r())()&&(()=>{var u=$n();return $(u,A(z,{get each(){return r()},children:i=>typeof i=="string"?i:A(I,{get children(){return i[0]}})})),u})())]}})),E(()=>Ot(l,`relative w-[15rem] h-[25rem] bg-contain bg-no-repeat z-20 ${o()}`)),l})()};var wn=p("<div class=dialog-title>Règles de Gomoku"),pn=p("<div class=dialog-body><ul><li class=list-disc>Gomoku est un jeu à deux joueurs: <!> et </li><li class=list-disc>A tour de rôle, un des joueurs place un pion de sa couleur sur une case vide du plateau.</li><li class=list-disc>Le but du jeu est d&#39;<!> un certain nombre de pions de sa couleur, <!>, <!> ou en <!>.<br>Par défaut, ce nombre est <!> mais tu peux le paramétrer entre 3 et 8</li><li class=list-disc>Par défaut, la taille de la grille est 15x15 mais tu peux également la paramétrer."),_n=p("<div class=dialog-buttons><button class=btn>OK");const An=e=>[wn(),(()=>{var t=pn(),n=t.firstChild,r=n.firstChild,o=r.firstChild,l=o.nextSibling;l.nextSibling;var u=r.nextSibling,i=u.nextSibling,s=i.firstChild,c=s.nextSibling,a=c.nextSibling,f=a.nextSibling,d=f.nextSibling,m=d.nextSibling,y=m.nextSibling,x=y.nextSibling,g=x.nextSibling,v=g.nextSibling,_=v.nextSibling,L=_.nextSibling;return L.nextSibling,$(r,A(I,{children:"Noir"}),l),$(r,A(I,{children:"Blanc"}),null),$(i,A(I,{children:"aligner"}),c),$(i,A(I,{children:"horizontalement"}),f),$(i,A(I,{children:"verticalement"}),m),$(i,A(I,{children:"diagonal"}),x),$(i,A(I,{children:"5"}),L),t})(),(()=>{var t=_n(),n=t.firstChild;return Te(n,"click",e.closeDialog),t})()];ee(["click"]);var kn=p("<div class=dialog-title>Règles de Gomoku"),Sn=p("<div class=dialog-body><ul><li class=list-disc>L&#39;application <!> a été écrite par Guillaume Bagan.</li><li class=list-disc>Le code source est sous licence MIT.</li><li class=list-disc>Les différentes images ont été générées par Dall-E.</li><li class=list-disc>Les différents sons proviennent de la plate-forme Lichess.</li><li class=list-disc>L&#39;application a été écrite dans le langage Civet en utilisant les librairies Solid et Tailwind."),Tn=p("<div class=dialog-buttons><button class=btn>OK");const En=e=>[kn(),(()=>{var t=Sn(),n=t.firstChild,r=n.firstChild,o=r.firstChild,l=o.nextSibling;return l.nextSibling,$(r,A(I,{children:"Gomoku"}),l),t})(),(()=>{var t=Tn(),n=t.firstChild;return Te(n,"click",e.closeDialog),t})()];ee(["click"]);var Cn=p("<audio src=./move.webm preload=auto>"),Ln=p('<div class="relative w-screen min-h-screen z-20 bg-main bg-cover flex flew-row items-center justify-around portrait:flex-col"><div class="absolute bg-white w-full h-full opacity-30 z-10 pointer-events-none"></div><div class="z-20 flex flex-col bg-wood p-6 border-2 border-black rounded-xl gap-4"><div class=text-4xl>Gomoku</div><button class=btn>Nouvelle partie</button><button class=btn>Annuler</button><button class=btn>Règles</button><button class=btn>Crédits'),On=p("<dialog class=dialog>");const Pn=()=>{let e,t;const[n,r]=tt(Gt()),o=C(()=>qt(n.config.width,n.config.height,n.board,n.config.alignment,3-n.turn)),l=async d=>{const m=n.config.width,y=n.config.height;let x;if(!(n.isThinking||n.outcome||n.board[d]!==0)&&(t.play(),r(ne(g=>{g.board[d]=g.turn,g.played.push(d);let v=Me(m,y,g.board,g.config.alignment,g.turn,d);if(v){g.outcome=v,g.turn=3-g.turn;return}if(g.played.length===g.config.width*g.config.height){g.outcome={color:0,alignment:[0,0]},g.turn=3-g.turn;return}if(g.turn=3-g.turn,g.config.adversary!=="human")return g.isThinking=!0,x=Rt(g.config.width,g.config.height,[...g.board],g.config.alignment,g.turn),g.scores=x})),!n.outcome&&n.config.adversary!=="human"))return await ke(1500),r(ne(g=>{let v=Bt(x);t.play(),g.board[v]=g.turn,g.played.push(v),g.scores=null;const _=Me(m,y,g.board,g.config.alignment,g.turn,v);return _?g.outcome=_:g.played.length===g.config.width*g.config.height&&(g.outcome={color:0,alignment:[0,0]}),g.turn=3-g.turn,g.isThinking=!1}))},u=()=>{if(!n.isThinking)return r(ne(d=>{if(d.played.length){const m=d.played.pop();d.board[m]=0,d.turn=3-d.turn,d.outcome=null}if(d.played.length%2===1&&d.config.adversary!=="human"){const m=d.played.pop();return d.board[m]=0,d.turn=3-d.turn}}))},i=()=>(r("dialog","newgame"),e.showModal()),s=()=>(r("dialog","rules"),e.showModal()),c=()=>(r("dialog","credits"),e.showModal()),a=()=>(e.close(),r("dialog",null)),f=d=>(r(ne(m=>(m.config={...d},m.board=new Array(d.width*d.height),m.board.fill(0),m.played=[],m.outcome=null,m.turn=1,m.isThinking=!1,m.dialog=null))),e.close());return[(()=>{var d=Cn(),m=t;return typeof m=="function"?Pe(m,d):t=d,d})(),(()=>{var d=Ln(),m=d.firstChild,y=m.nextSibling,x=y.firstChild,g=x.nextSibling,v=g.nextSibling,_=v.nextSibling,L=_.nextSibling;return g.$$click=i,v.$$click=u,_.$$click=s,L.$$click=c,$(d,A(an,{get board(){return n.board},get width(){return n.config.width},get height(){return n.config.height},get lastMove(){return Dt(n.played)},get turn(){return n.turn},get scores(){return n.scores},get outcome(){return n.outcome},get threats(){return o()},get canPlay(){return!n.isThinking&&!n.outcome},play:l}),null),$(d,A(xn,{get multipleThreats(){return o().length>=2},get outcome(){return n.outcome},get turn(){return n.turn},get isThinking(){return n.isThinking},get adversary(){return n.config.adversary}}),null),d})(),(()=>{var d=On();d.addEventListener("close",a),d.addEventListener("cancel",a);var m=e;return typeof m=="function"?Pe(m,d):e=d,$(d,()=>{let y;return y=n.dialog,y==="newgame"?A(yn,{get config(){return n.config},closeDialog:a,newGame:f}):y==="rules"?A(An,{closeDialog:a}):y==="credits"?A(En,{closeDialog:a}):null}),d})()]};ee(["click"]);Lt(()=>A(Pn,{}),document.getElementById("root"));
