(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const ht=(e,t)=>e===t,X=Symbol("solid-proxy"),Ee=Symbol("solid-track"),ue={equals:ht};let Qe=tt;const G=1,fe=2,Ve={owned:null,cleanups:null,context:null,owner:null};var _=null;let $e=null,yt=null,$=null,j=null,F=null,be=0;function Ce(e,t){const n=$,i=_,r=e.length===0,o=t===void 0?i:t,l=r?Ve:{owned:null,cleanups:null,context:o?o.context:null,owner:o},s=r?e:()=>e(()=>I(()=>oe(l)));_=l,$=null;try{return J(s,!0)}finally{$=n,_=i}}function U(e,t){t=t?Object.assign({},ue,t):ue;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=r=>(typeof r=="function"&&(r=r(n.value)),et(n,r));return[Ze.bind(n),i]}function mt(e,t,n){const i=we(e,t,!0,G);ee(i)}function M(e,t,n){const i=we(e,t,!1,G);ee(i)}function vt(e,t,n){Qe=Tt;const i=we(e,t,!1,G);i.user=!0,F?F.push(i):ee(i)}function N(e,t,n){n=n?Object.assign({},ue,n):ue;const i=we(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,ee(i),Ze.bind(i)}function D(e){return J(e,!1)}function I(e){if($===null)return e();const t=$;$=null;try{return e()}finally{$=t}}function bt(e){vt(()=>I(e))}function ze(e){return _===null||(_.cleanups===null?_.cleanups=[e]:_.cleanups.push(e)),e}function ke(){return $}function wt(e){const t=$,n=_;return Promise.resolve().then(()=>{$=t,_=n;let i;return J(e,!1),$=_=null,i?i.done:void 0})}const[xt,ri]=U(!1);function $t(){return[xt,wt]}function Ze(){if(this.sources&&this.state)if(this.state===G)ee(this);else{const e=j;j=null,J(()=>pe(this),!1),j=e}if($){const e=this.observers?this.observers.length:0;$.sources?($.sources.push(this),$.sourceSlots.push(e)):($.sources=[this],$.sourceSlots=[e]),this.observers?(this.observers.push($),this.observerSlots.push($.sources.length-1)):(this.observers=[$],this.observerSlots=[$.sources.length-1])}return this.value}function et(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&J(()=>{for(let r=0;r<e.observers.length;r+=1){const o=e.observers[r],l=$e&&$e.running;l&&$e.disposed.has(o),(l?!o.tState:!o.state)&&(o.pure?j.push(o):F.push(o),o.observers&&nt(o)),l||(o.state=G)}if(j.length>1e6)throw j=[],new Error},!1)),t}function ee(e){if(!e.fn)return;oe(e);const t=be;At(e,e.value,t)}function At(e,t,n){let i;const r=_,o=$;$=_=e;try{i=e.fn(t)}catch(l){return e.pure&&(e.state=G,e.owned&&e.owned.forEach(oe),e.owned=null),e.updatedAt=n+1,it(l)}finally{$=o,_=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?et(e,i):e.value=i,e.updatedAt=n)}function we(e,t,n,i=G,r){const o={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:_,context:_?_.context:null,pure:n};return _===null||_!==Ve&&(_.owned?_.owned.push(o):_.owned=[o]),o}function de(e){if(e.state===0)return;if(e.state===fe)return pe(e);if(e.suspense&&I(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<be);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===G)ee(e);else if(e.state===fe){const i=j;j=null,J(()=>pe(e,t[0]),!1),j=i}}function J(e,t){if(j)return e();let n=!1;t||(j=[]),F?n=!0:F=[],be++;try{const i=e();return St(n),i}catch(i){n||(F=null),j=null,it(i)}}function St(e){if(j&&(tt(j),j=null),e)return;const t=F;F=null,t.length&&J(()=>Qe(t),!1)}function tt(e){for(let t=0;t<e.length;t++)de(e[t])}function Tt(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:de(i)}for(t=0;t<n;t++)de(e[t])}function pe(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];if(i.sources){const r=i.state;r===G?i!==t&&(!i.updatedAt||i.updatedAt<be)&&de(i):r===fe&&pe(i,t)}}}function nt(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=fe,n.pure?j.push(n):F.push(n),n.observers&&nt(n))}}function oe(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const o=r.pop(),l=n.observerSlots.pop();i<r.length&&(o.sourceSlots[l]=i,r[i]=o,n.observerSlots[i]=l)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)oe(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)oe(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function _t(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function it(e,t=_){throw _t(e)}const Be=Symbol("fallback");function Ie(e){for(let t=0;t<e.length;t++)e[t]()}function Et(e,t,n={}){let i=[],r=[],o=[],l=[],s=0,c;return ze(()=>Ie(o)),()=>{const u=e()||[],g=u.length;return u[Ee],I(()=>{if(g===0)return s!==0&&(Ie(o),o=[],i=[],r=[],s=0,l=[]),n.fallback&&(i=[Be],r[0]=Ce(k=>(o[0]=k,n.fallback())),s=1),r;for(i[0]===Be&&(o[0](),o=[],i=[],r=[],s=0),c=0;c<g;c++)c<i.length&&i[c]!==u[c]?l[c](()=>u[c]):c>=i.length&&(r[c]=Ce(w));for(;c<i.length;c++)o[c]();return s=l.length=o.length=g,i=u.slice(0),r=r.slice(0,s)});function w(k){o[c]=k;const[B,x]=U(u[c]);return l[c]=x,t(B,c)}}}function f(e,t){return I(()=>e(t||{}))}function Ae(e){const t="fallback"in e&&{fallback:()=>e.fallback};return N(Et(()=>e.each,e.children,t||void 0))}function Ct(e,t,n){let i=n.length,r=t.length,o=i,l=0,s=0,c=t[r-1].nextSibling,u=null;for(;l<r||s<o;){if(t[l]===n[s]){l++,s++;continue}for(;t[r-1]===n[o-1];)r--,o--;if(r===l){const g=o<i?s?n[s-1].nextSibling:n[o-s]:c;for(;s<o;)e.insertBefore(n[s++],g)}else if(o===s)for(;l<r;)(!u||!u.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[s]===t[r-1]){const g=t[--r].nextSibling;e.insertBefore(n[s++],t[l++].nextSibling),e.insertBefore(n[--o],g),t[r]=n[o]}else{if(!u){u=new Map;let w=s;for(;w<o;)u.set(n[w],w++)}const g=u.get(t[l]);if(g!=null)if(s<g&&g<o){let w=l,k=1,B;for(;++w<r&&w<o&&!((B=u.get(t[w]))==null||B!==g+k);)k++;if(k>g-s){const x=t[l];for(;s<g;)e.insertBefore(n[s++],x)}else e.replaceChild(n[s++],t[l++])}else l++;else t[l++].remove()}}}const Re="_$DX_DELEGATE";function kt(e,t,n,i={}){let r;return Ce(o=>{r=o,t===document?e():T(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{r(),t.textContent=""}}function S(e,t,n){let i;const r=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},o=t?()=>I(()=>document.importNode(i||(i=r()),!0)):()=>(i||(i=r())).cloneNode(!0);return o.cloneNode=o,o}function xe(e,t=window.document){const n=t[Re]||(t[Re]=new Set);for(let i=0,r=e.length;i<r;i++){const o=e[i];n.has(o)||(n.add(o),t.addEventListener(o,Ot))}}function C(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Pt(e,t){t==null?e.removeAttribute("class"):e.className=t}function Pe(e,t,n,i){Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n}function Lt(e,t,n={}){const i=Object.keys(t||{}),r=Object.keys(n);let o,l;for(o=0,l=r.length;o<l;o++){const s=r[o];!s||s==="undefined"||t[s]||(qe(e,s,!1),delete n[s])}for(o=0,l=i.length;o<l;o++){const s=i[o],c=!!t[s];!s||s==="undefined"||n[s]===c||!c||(qe(e,s,!0),n[s]=c)}return n}function le(e,t,n){return I(()=>e(t,n))}function T(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return ge(e,t,i,n);M(r=>ge(e,t(),r,n),i)}function qe(e,t,n){const i=t.trim().split(/\s+/);for(let r=0,o=i.length;r<o;r++)e.classList.toggle(i[r],n)}function Ot(e){let t=e.target;const n=`$$${e.type}`,i=e.target,r=e.currentTarget,o=c=>Object.defineProperty(e,"target",{configurable:!0,value:c}),l=()=>{const c=t[n];if(c&&!t.disabled){const u=t[`${n}Data`];if(u!==void 0?c.call(t,u,e):c.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&o(t.host),!0},s=()=>{for(;l()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const c=e.composedPath();o(c[0]);for(let u=0;u<c.length-2&&(t=c[u],!!l());u++){if(t._$host){t=t._$host,s();break}if(t.parentNode===r)break}}else s();o(i)}function ge(e,t,n,i,r){for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=i!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(o==="number"&&(t=t.toString(),t===n))return n;if(l){let s=n[0];s&&s.nodeType===3?s.data!==t&&(s.data=t):s=document.createTextNode(t),n=Y(e,n,i,s)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean")n=Y(e,n,i);else{if(o==="function")return M(()=>{let s=t();for(;typeof s=="function";)s=s();n=ge(e,s,n,i)}),()=>n;if(Array.isArray(t)){const s=[],c=n&&Array.isArray(n);if(Le(s,t,n,r))return M(()=>n=ge(e,s,n,i,!0)),()=>n;if(s.length===0){if(n=Y(e,n,i),l)return n}else c?n.length===0?Fe(e,s,i):Ct(e,n,s):(n&&Y(e),Fe(e,s));n=s}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=Y(e,n,i,t);Y(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Le(e,t,n,i){let r=!1;for(let o=0,l=t.length;o<l;o++){let s=t[o],c=n&&n[e.length],u;if(!(s==null||s===!0||s===!1))if((u=typeof s)=="object"&&s.nodeType)e.push(s);else if(Array.isArray(s))r=Le(e,s,c)||r;else if(u==="function")if(i){for(;typeof s=="function";)s=s();r=Le(e,Array.isArray(s)?s:[s],Array.isArray(c)?c:[c])||r}else e.push(s),r=!0;else{const g=String(s);c&&c.nodeType===3&&c.data===g?e.push(c):e.push(document.createTextNode(g))}}return r}function Fe(e,t,n=null){for(let i=0,r=t.length;i<r;i++)e.insertBefore(t[i],n)}function Y(e,t,n,i){if(n===void 0)return e.textContent="";const r=i||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const s=t[l];if(r!==s){const c=s.parentNode===e;!o&&!l?c?e.replaceChild(r,s):e.insertBefore(r,n):c&&s.remove()}else o=!0}}else e.insertBefore(r,n);return[r]}const he=Symbol("store-raw"),Q=Symbol("store-node"),q=Symbol("store-has"),rt=Symbol("store-self");function ot(e){let t=e[X];if(!t&&(Object.defineProperty(e,X,{value:t=new Proxy(e,Mt)}),!Array.isArray(e))){const n=Object.keys(e),i=Object.getOwnPropertyDescriptors(e);for(let r=0,o=n.length;r<o;r++){const l=n[r];i[l].get&&Object.defineProperty(e,l,{enumerable:i[l].enumerable,get:i[l].get.bind(t)})}}return t}function V(e){let t;return e!=null&&typeof e=="object"&&(e[X]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function z(e,t=new Set){let n,i,r,o;if(n=e!=null&&e[he])return n;if(!V(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let l=0,s=e.length;l<s;l++)r=e[l],(i=z(r,t))!==r&&(e[l]=i)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const l=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let c=0,u=l.length;c<u;c++)o=l[c],!s[o].get&&(r=e[o],(i=z(r,t))!==r&&(e[o]=i))}return e}function ye(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function se(e,t,n){if(e[t])return e[t];const[i,r]=U(n,{equals:!1,internal:!0});return i.$=r,e[t]=i}function jt(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===X||t===Q||(delete n.value,delete n.writable,n.get=()=>e[X][t]),n}function st(e){ke()&&se(ye(e,Q),rt)()}function Nt(e){return st(e),Reflect.ownKeys(e)}const Mt={get(e,t,n){if(t===he)return e;if(t===X)return n;if(t===Ee)return st(e),n;const i=ye(e,Q),r=i[t];let o=r?r():e[t];if(t===Q||t===q||t==="__proto__")return o;if(!r){const l=Object.getOwnPropertyDescriptor(e,t);ke()&&(typeof o!="function"||e.hasOwnProperty(t))&&!(l&&l.get)&&(o=se(i,t,o)())}return V(o)?ot(o):o},has(e,t){return t===he||t===X||t===Ee||t===Q||t===q||t==="__proto__"?!0:(ke()&&se(ye(e,q),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:Nt,getOwnPropertyDescriptor:jt};function Z(e,t,n,i=!1){if(!i&&e[t]===n)return;const r=e[t],o=e.length;n===void 0?(delete e[t],e[q]&&e[q][t]&&r!==void 0&&e[q][t].$()):(e[t]=n,e[q]&&e[q][t]&&r===void 0&&e[q][t].$());let l=ye(e,Q),s;if((s=se(l,t,r))&&s.$(()=>n),Array.isArray(e)&&e.length!==o){for(let c=e.length;c<o;c++)(s=l[c])&&s.$();(s=se(l,"length",o))&&s.$(e.length)}(s=l[rt])&&s.$()}function lt(e,t){const n=Object.keys(t);for(let i=0;i<n.length;i+=1){const r=n[i];Z(e,r,t[r])}}function Dt(e,t){if(typeof t=="function"&&(t=t(e)),t=z(t),Array.isArray(t)){if(e===t)return;let n=0,i=t.length;for(;n<i;n++){const r=t[n];e[n]!==r&&Z(e,n,r)}Z(e,"length",i)}else lt(e,t)}function ne(e,t,n=[]){let i,r=e;if(t.length>1){i=t.shift();const l=typeof i,s=Array.isArray(e);if(Array.isArray(i)){for(let c=0;c<i.length;c++)ne(e,[i[c]].concat(t),n);return}else if(s&&l==="function"){for(let c=0;c<e.length;c++)i(e[c],c)&&ne(e,[c].concat(t),n);return}else if(s&&l==="object"){const{from:c=0,to:u=e.length-1,by:g=1}=i;for(let w=c;w<=u;w+=g)ne(e,[w].concat(t),n);return}else if(t.length>1){ne(e[i],t,[i].concat(n));return}r=e[i],n=[i].concat(n)}let o=t[0];typeof o=="function"&&(o=o(r,n),o===r)||i===void 0&&o==null||(o=z(o),i===void 0||V(r)&&V(o)&&!Array.isArray(o)?lt(r,o):Z(e,i,o))}function ct(...[e,t]){const n=z(e||{}),i=Array.isArray(n),r=ot(n);function o(...l){D(()=>{i&&l.length===1?Dt(n,l[0]):ne(n,l)})}return[r,o]}const me=new WeakMap,at={get(e,t){if(t===he)return e;const n=e[t];let i;return V(n)?me.get(n)||(me.set(n,i=new Proxy(n,at)),i):n},set(e,t,n){return Z(e,t,z(n)),!0},deleteProperty(e,t){return Z(e,t,void 0,!0),!0}};function Se(e){return t=>{if(V(t)){let n;(n=me.get(t))||me.set(t,n=new Proxy(t,at)),e(n)}return t}}const Ge=e=>e.length===0?null:e[e.length-1],Bt=(e,t)=>{let n=0,i=e.length;for(let r=0;r<i;r++)t(e[r])&&n++;return n},Oe=e=>new Promise(t=>setTimeout(t,e)),It=()=>({adversary:"level1",machineStarts:!1}),je=()=>[{type:"E",position:9,owner:0},{type:"L",position:10,owner:0},{type:"G",position:11,owner:0},{type:"C",position:7,owner:0},{type:"E",position:2,owner:1},{type:"L",position:1,owner:1},{type:"G",position:0,owner:1},{type:"C",position:4,owner:1}],Rt=()=>({pieces:je(),turn:0,outcome:null,played:[],config:It(),isThinking:!1,dialogOpened:!1,tutorialStep:null}),ut={C:[[0,1]],H:[[0,1],[1,0],[0,-1],[-1,0],[1,1],[-1,1]],G:[[0,1],[1,0],[0,-1],[-1,0]],E:[[1,1],[-1,1],[1,-1],[-1,-1]],L:[[0,1],[1,0],[0,-1],[-1,0],[1,1],[-1,1],[1,-1],[-1,-1]]};function ft(e,t){const n=new Array(12);n.fill(0);for(const s of e)s.position!==null&&(n[s.position]=s.owner+1);if(t.position===null){const s=[];for(let c=0;c<12;c++)n[c]||s.push(c);return s}const i=[],r=t.position%3,o=t.position/3|0,l=ut[t.type];for(const s of l){const[c,u]=t.owner?[s[0],s[1]]:[-s[0],-s[1]],g=r+c,w=o+u;if(g>=0&&g<3&&w>=0&&w<4){let k=3*w+g;n[k]!==t.owner+1&&i.push(k)}}return i}const qt=(e,t)=>e.owner===t.owner&&e.position===t.position&&e.type===t.type,Ft=(e,t)=>{for(let n=0;n<8;n++)if(!qt(e[n],t[n]))return!1;return!0},Gt=(e,t)=>Bt(t,n=>Ft(e,n.pieces))>=2,Ht=(e,t)=>{const n=e[t?5:1].position;return n===null?!1:(t&&n>8||!t&&n<3)&&e.every(i=>i.owner===t||!ft(e,i).includes(n))};function Ut(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var He=1/0,dt=9007199254740991,Kt=17976931348623157e292,Ue=NaN,Wt="[object Function]",Xt="[object GeneratorFunction]",Jt="[object Symbol]",Yt=/^\s+|\s+$/g,Qt=/^[-+]0x[0-9a-f]+$/i,Vt=/^0b[01]+$/i,zt=/^0o[0-7]+$/i,Zt=/^(?:0|[1-9]\d*)$/,en=parseInt,tn=Object.prototype,pt=tn.toString,nn=Math.ceil,rn=Math.max;function on(e,t,n,i){for(var r=-1,o=rn(nn((t-e)/(n||1)),0),l=Array(o);o--;)l[++r]=e,e+=n;return l}function sn(e){return function(t,n,i){return i&&typeof i!="number"&&cn(t,n,i)&&(n=i=void 0),t=Te(t),n===void 0?(n=t,t=0):n=Te(n),i=i===void 0?t<n?1:-1:Te(i),on(t,n,i)}}function ln(e,t){return t=t??dt,!!t&&(typeof e=="number"||Zt.test(e))&&e>-1&&e%1==0&&e<t}function cn(e,t,n){if(!ve(n))return!1;var i=typeof t;return(i=="number"?un(n)&&ln(t,n.length):i=="string"&&t in n)?an(n[t],e):!1}function an(e,t){return e===t||e!==e&&t!==t}function un(e){return e!=null&&dn(e.length)&&!fn(e)}function fn(e){var t=ve(e)?pt.call(e):"";return t==Wt||t==Xt}function dn(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=dt}function ve(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function pn(e){return!!e&&typeof e=="object"}function gn(e){return typeof e=="symbol"||pn(e)&&pt.call(e)==Jt}function Te(e){if(!e)return e===0?e:0;if(e=hn(e),e===He||e===-He){var t=e<0?-1:1;return t*Kt}return e===e?e:0}function hn(e){if(typeof e=="number")return e;if(gn(e))return Ue;if(ve(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ve(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Yt,"");var n=Vt.test(e);return n||zt.test(e)?en(e.slice(2),n?2:8):Qt.test(e)?Ue:+e}var yn=sn(),mn=yn;const vn=Ut(mn);var bn=S('<svg><line stroke=red stroke-width=50 class="pointer-events-none animate-lion-arrow"marker-end=url(#arrowhead)></svg>',!1,!0),wn=S('<div class="w-[42rem] z-20"><svg viewBox="0 0 1600 1680"class="select-none touch-none"><defs><marker id=arrowhead markerWidth=6 markerHeight=4 refX=3 refY=2 orient=auto><polygon points="0 0, 4 2, 0 4"fill=red></polygon></marker></defs><symbol id=twice viewBox="0 0 40 40"><rect x=0 y=0 width=40 height=40 fill=red></rect><text x=20 y=30 fill=white font-size=30px font-weight=bold text-anchor=middle>2</text></symbol><image x=200 y=-500 width=1200 height=2580 href=./board4.webp preserveAspectRatio=xMidYMid>'),xn=S('<svg><symbol viewBox="0 0 50 50"><rect x=0.5 y=0.5 width=49 height=49 rx=5 ry=5 stroke=black stroke-width=1></rect><image x=6 y=6 width=38 height=38></svg>',!1,!0),$n=S("<svg><circle r=2 stroke=black fill=red></svg>",!1,!0),An=S('<svg><line x1=320 x2=1310 stroke=red stroke-width=5 stroke-dasharray="41.25 41.25"stroke-dashoffset=20.625></svg>',!1,!0),Sn=S('<svg><line y1=200 y2=1500 stroke=red stroke-width=5 stroke-dasharray="40.625 40.625"stroke-dashoffset=20.3125></svg>',!1,!0),Tn=S("<svg><rect width=310 height=305 stroke-width=20></svg>",!1,!0),_n=S('<svg><use x=-130 y=-130 width=260 height=260 filter="drop-shadow(16px 16px 16px gray)"></svg>',!1,!0),Ke=S("<svg><use href=#twice width=50 height=50></svg>",!1,!0),En=S("<svg><use x=-130 y=-130 width=260 height=260 class=pointer-events-none></svg>",!1,!0);const ce=320,ae=200,ie=330,re=325,Cn={L:"#fbc0bf",G:"#d6b3d5",E:"#d6b3d5",C:"#f0f4a3",H:"#f0f4a3"},Ne={C:0,E:1,G:2,L:3,H:4},kn=e=>{const t=e.position;let n,i,r;t===null?(n=e.owner?1500:100,i=e.owner?200+200*Ne[e.type]:1570-200*Ne[e.type],r=.7):(n=ce+ie/2+ie*(t%3),i=ae+re/2+re*(t/3|0),r=1);const o=e.owner?"180deg":"0";return`translate(${n}px, ${i}px) rotate(${o}) scale(${r})`},Pn=(e,t)=>{const n=100*e.x,i=100*e.y,r=t.owner?"180deg":"0";return`translate(${n}%, ${i}%) rotate(${r})`},Ln=e=>{const t=N(()=>{const n=e.pieces[e.from],i=470+330*(e.to%3),r=350+325*(e.to/3|0);return n.position===null?{x1:"100",y1:1570-200*Ne[n.type],x2:i,y2:r}:{x1:470+330*(n.position%3),y1:350+325*(n.position/3|0),x2:i,y2:r}});return(()=>{var n=bn();return M(i=>{var r=t().x1,o=t().x2,l=t().y1,s=t().y2;return r!==i.e&&C(n,"x1",i.e=r),o!==i.t&&C(n,"x2",i.t=o),l!==i.a&&C(n,"y1",i.a=l),s!==i.o&&C(n,"y2",i.o=s),i},{e:void 0,t:void 0,a:void 0,o:void 0}),n})()},We=e=>{let t;const[n,i]=U(null),[r,o]=U(null),[l,s]=U(null),c=N(()=>n()!==null?ft(e.pieces,e.pieces[n()]):[]),u=b=>e.lastMove&&e.lastMove.includes(b);function g(b){const{left:m,top:te,width:a,height:d}=t.getBoundingClientRect();return{x:(b.clientX-m)/a,y:(b.clientY-te)/d}}const w=(b,m)=>e.pieces[b].owner===m&&e.pieces[b+4].owner===m&&e.pieces[b].position===null&&e.pieces[b+4].position===null&&n()!==b&&n()!==b+4,k=(b,m)=>{!e.canPlay||e.pieces[b].owner!==e.turn||(m.currentTarget&&m.currentTarget.releasePointerCapture(m.pointerId),D(()=>{i(b),o(b),s(g(m))}))},B=b=>{s(g(b))},x=b=>{D(()=>{s(null);const m=n();m!==null&&(i(null),e.play(m,b))}),setTimeout(()=>o(null),500)},P=()=>{D(()=>{s(null),i(null)})};return(()=>{var b=wn(),m=b.firstChild,te=m.firstChild,a=te.nextSibling,d=a.nextSibling;m.$$pointerup=P,m.addEventListener("pointerleave",P),m.addEventListener("pointercancel",P),m.$$pointermove=B;var A=t;return typeof A=="function"?le(A,m):t=m,T(m,()=>["L","G","E","C","H"].map(y=>(()=>{var h=xn(),p=h.firstChild,E=p.nextSibling;return C(h,"id",`piece-${y}`),C(E,"href",`./piece-${y}.webp`),T(h,()=>ut[y].map(([L,O])=>(()=>{var H=$n();return C(H,"cx",25+20*L),C(H,"cy",25-20*O),H})()),null),M(()=>C(p,"fill",Cn[y])),h})()),d),T(m,()=>[0,1,2,3,4].map(y=>(()=>{var h=An();return C(h,"y1",ae+y*re),C(h,"y2",ae+y*re),h})()),null),T(m,()=>[0,1,2,3].map(y=>(()=>{var h=Sn();return C(h,"x1",ce+y*ie),C(h,"x2",ce+y*ie),h})()),null),T(m,f(Ae,{get each(){return vn(0,12)},children:y=>(()=>{var h=Tn();return h.$$pointerup=x,h.$$pointerupData=y(),M(p=>{var E=ce+10+ie*(y()%3),L=ae+10+re*(y()/3|0),O=c().includes(y())?"lightgreen":"transparent",H=!c().includes(y()),De=u(y())?"rgba(0, 255, 0, 0.3)":"transparent";return E!==p.e&&C(h,"x",p.e=E),L!==p.t&&C(h,"y",p.t=L),O!==p.a&&C(h,"stroke",p.a=O),H!==p.o&&h.classList.toggle("pointer-events-none",p.o=H),De!==p.i&&C(h,"fill",p.i=De),p},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),h})()}),null),T(m,f(Ae,{get each(){return e.pieces},children:(y,h)=>(()=>{var p=_n();return p.$$pointerdown=k,p.$$pointerdownData=h,M(E=>{var L=kn(y()),O=`#piece-${y().type}`,H={"pointer-events-none":n()!==null,"transition-transform duration-1000":r()!==h,"opacity-0":h===n()&&l()!==null};return L!==E.e&&((E.e=L)!=null?p.style.setProperty("transform",L):p.style.removeProperty("transform")),O!==E.t&&C(p,"href",E.t=O),E.a=Lt(p,H,E.a),E},{e:void 0,t:void 0,a:void 0}),p})()}),null),T(m,f(Ae,{each:[3,0,2],children:(y,h)=>[(()=>{var p=Ke();return`translate(140px, ${1610-200*h}px)`!=null?p.style.setProperty("transform",`translate(140px, ${1610-200*h}px)`):p.style.removeProperty("transform"),M(()=>p.classList.toggle("opacity-0",!w(y(),0))),p})(),(()=>{var p=Ke();return`translate(1540px, ${240+200*h}px)`!=null?p.style.setProperty("transform",`translate(1540px, ${240+200*h}px)`):p.style.removeProperty("transform"),M(()=>p.classList.toggle("opacity-0",!w(y(),1))),p})()]}),null),T(m,(()=>{var y=N(()=>!!(l()&&n()!==null));return()=>y()&&(()=>{var h=En();return M(p=>{var E=Pn(l(),e.pieces[n()]),L=`#piece-${e.pieces[n()].type}`;return E!==p.e&&((p.e=E)!=null?h.style.setProperty("transform",E):h.style.removeProperty("transform")),L!==p.t&&C(h,"href",p.t=L),p},{e:void 0,t:void 0}),h})()})(),null),T(m,(()=>{var y=N(()=>!!(e.wantedMove&&n()===null));return()=>y()&&f(Ln,{get from(){return e.wantedMove[0]},get to(){return e.wantedMove[1]},get pieces(){return e.pieces}})})(),null),b})()};xe(["pointermove","pointerup","pointerdown"]);var On=()=>{},Xe=(e,t)=>t();function jn(e,t){const n=I(e),i=n?[n]:[],{onEnter:r=Xe,onExit:o=Xe}=t,[l,s]=U(t.appear?[]:i),[c]=$t();let u,g=!1;function w(x,P){if(!x)return P&&P();g=!0,o(x,()=>{D(()=>{g=!1,s(b=>b.filter(m=>m!==x)),P&&P()})})}function k(x){const P=u;if(!P)return x&&x();u=void 0,s(b=>[P,...b]),r(P,x??On)}const B=t.mode==="out-in"?x=>g||w(x,k):t.mode==="in-out"?x=>k(()=>w(x)):x=>{w(x),k()};return mt(x=>{const P=e();return I(c)?(c(),x):(P!==x&&(u=P,D(()=>I(()=>B(x)))),P)},t.appear?void 0:n),l}var Je=e=>e instanceof Element;function Me(e,t){if(t(e))return e;if(typeof e=="function"&&!e.length)return Me(e(),t);if(Array.isArray(e))for(const n of e){const i=Me(n,t);if(i)return i}return null}function Nn(e,t=Je,n=Je){const i=N(e);return N(()=>Me(i(),t))}function Mn(e){return N(()=>{const t=e.name||"s";return{enterActive:(e.enterActiveClass||t+"-enter-active").split(" "),enter:(e.enterClass||t+"-enter").split(" "),enterTo:(e.enterToClass||t+"-enter-to").split(" "),exitActive:(e.exitActiveClass||t+"-exit-active").split(" "),exit:(e.exitClass||t+"-exit").split(" "),exitTo:(e.exitToClass||t+"-exit-to").split(" "),move:(e.moveClass||t+"-move").split(" ")}})}function gt(e){requestAnimationFrame(()=>requestAnimationFrame(e))}function Dn(e,t,n,i){const{onBeforeEnter:r,onEnter:o,onAfterEnter:l}=t;r?.(n),n.classList.add(...e.enter),n.classList.add(...e.enterActive),queueMicrotask(()=>{if(!n.parentNode)return i?.();o?.(n,()=>s())}),gt(()=>{n.classList.remove(...e.enter),n.classList.add(...e.enterTo),(!o||o.length<2)&&(n.addEventListener("transitionend",s),n.addEventListener("animationend",s))});function s(c){(!c||c.target===n)&&(i?.(),n.removeEventListener("transitionend",s),n.removeEventListener("animationend",s),n.classList.remove(...e.enterActive),n.classList.remove(...e.enterTo),l?.(n))}}function Bn(e,t,n,i){const{onBeforeExit:r,onExit:o,onAfterExit:l}=t;if(!n.parentNode)return i?.();r?.(n),n.classList.add(...e.exit),n.classList.add(...e.exitActive),o?.(n,()=>s()),gt(()=>{n.classList.remove(...e.exit),n.classList.add(...e.exitTo),(!o||o.length<2)&&(n.addEventListener("transitionend",s),n.addEventListener("animationend",s))});function s(c){(!c||c.target===n)&&(i?.(),n.removeEventListener("transitionend",s),n.removeEventListener("animationend",s),n.classList.remove(...e.exitActive),n.classList.remove(...e.exitTo),l?.(n))}}var In={inout:"in-out",outin:"out-in"},Rn=e=>{const t=Mn(e);return jn(Nn(()=>e.children),{mode:In[e.mode],appear:e.appear,onEnter(n,i){Dn(t(),e,n,i)},onExit(n,i){Bn(t(),e,n,i)}})},qn=S('<span class="text-green-500 font-bold">');const v=e=>(()=>{var t=qn();return T(t,()=>e.children),t})();var Fn=S('<span class="text-red-500 font-bold">');const R=e=>(()=>{var t=Fn();return T(t,()=>e.children),t})(),K={type:"read"},W=[{text:["Bienvenue dans le ",f(v,{children:"tutoriel"}),"!"],action:K},{text:[f(v,{children:"Catch the lion"})," est un jeu à deux joueurs sur un plateau 4x3. Le but est de capturer le ",f(R,{children:"lion"})," adverse."],action:K},{text:["Chaque joueur possède 4 pièces: un ",f(v,{children:"lion"}),", une ",f(v,{children:"girafe"}),", un ",f(v,{children:"éléphant"})," et un ",f(v,{children:"poussin"}),". L'",f(v,{children:"orientation"})," d'une pièce indique à quel joueur elle appartient."],action:K},{text:"Chaque pièce peut se déplacer d'une case dans une des directions indiquées sur la pièce si la case d'arrivée est vide ou si il y a une pièce adverse dessus.",action:K},{text:["Une pièce peut ",f(v,{children:"capturer"})," une pièce adverse en se déplaçant dessus. Essaie de capturer mon ",f(R,{children:"poussin"})," avec ton ",f(v,{children:"poussin"})," en utilisant un ",f(v,{children:"Glisser-déposer"}),"."],action:{type:"playerAction",from:3,to:4}},{text:["Bravo, le poussin adverse fait partie maintenant de ta ",f(v,{children:"réserve"}),". A partir du tour suivant tu pourras le placer sur n'importe quelle case vide."],action:K},{text:"C'est maintenant à moi de jouer",action:{type:"machineAction",from:4,to:4}},{text:["J'ai capturé ton ",f(v,{children:"poussin"})," avec mon ",f(R,{children:"éléphant"}),". Essaie maintenant déplacer le ",f(v,{children:"poussin"})," de ta réserve vers la case indiquée."],action:{type:"playerAction",from:7,to:7}},{text:"Bravo! C'est maintenant à moi de jouer.",action:{type:"machineAction",from:4,to:6}},{text:["Je déplace à nouveau mon ",f(R,{children:"éléphant"}),". Ton ",f(v,{children:"lion"})," est menacé. Capture mon ",f(R,{children:"éléphant"})," avec ton ",f(v,{children:"lion"})," pour parer la menace"],action:{type:"playerAction",from:1,to:6}},{text:"Bravo! Tu as paré la menace! C'est maintenant à moi de jouer.",action:{type:"machineAction",from:6,to:3}},{text:["Je déplace ma ",f(R,{children:"girafe"})," menaçant ton ",f(v,{children:"lion"}),". Tu ne peux pas la capturer car ton lion se ferait capturer au coup suivant. Tu dois donc fuir. Déplace ton ",f(v,{children:"lion"})," vers la case indiquée."],action:{type:"playerAction",from:1,to:10}},{text:"Bravo! C'est maintenant à moi de jouer.",action:{type:"machineAction",from:3,to:6}},{text:["J'ai utilisé le ",f(v,{children:"poussin"})," de ma réserve. Ton ",f(v,{children:"éléphant"})," est bloqué, il va se faire prendre par mon ",f(R,{children:"poussin"}),". Tu ne peux rien faire contre ça. Déplace ta ",f(v,{children:"girafé"})," à la case indiquée."],action:{type:"playerAction",from:2,to:8}},{text:"Bravo! C'est maintenant à moi de jouer.",action:{type:"machineAction",from:3,to:9}},{text:["Mon ",f(R,{children:"poussin"})," est arrivé sur la dernière rangée, il est promu en ",f(R,{children:"poule"}),". Cette poule est très dangereuse vu ses mouvements autorisés. Dépèche-toi de la capturer."],action:{type:"playerAction",from:1,to:9}},{text:["Une fois une ",f(v,{children:"poule"})," capturée, elle redevient un ",f(v,{children:"poussin"}),". Tu ne peux pas directement promouvoir un poussin de la réserve en poule."],action:K},{text:["Bravo! Tu as complété le tutoriel! Tu peux commencer à jouer en cliquant sur ",f(v,{children:"Nouvelle partie"}),"."],action:K}];var Gn=S("<div>"),Hn=S('<div class="tooltip -right-5">'),Un=S('<div class="absolute -right-2 flex gap-32"><button class=tutorial-button>Précédent</button><button class=tutorial-button>Suivant');const _e=[[["Bienvenue sur l'appli ",f(v,{children:"Catch the lion"}),"."],3e3],[[f(v,{children:"Catch the lion"})," connu en japonais sous le nom ",f(v,{children:"Dobutsu Shogi"})," est une variante pour enfants du Shogi."],5e3],[["Le jeu a été entièrement résolu par ordinateur. Il existe ",f(v,{children:"1 567 925 964"})," configurations possibles."],5e3],[["Si les deux joueurs jouent de manière optimale, la victoire est assurée pour le ",f(v,{children:"second"})," joueur."],5e3],[["Pour apprendre les règles, tu peux clicker sur ",f(v,{children:"Tutoriel"}),"."],3e3]],Kn=e=>{const[t,n]=U("");let i=!1;bt(async()=>{let l=0;for(;;){const s=_e[l][1];if(n(_e[l][0]),await Oe(s),n(null),l=(l+1)%_e.length,i)break;await Oe(1500)}}),ze(()=>{i=!0});const r=N(()=>e.tutorialStep!==null?W[e.tutorialStep].text:e.outcome!==null?e.outcome===2?["Oh, cette configuration de pièces a été répétée 3 fois. C'est un ",f(v,{children:"match nul"})]:e.adversary==="human"?`Bravo! Le joueur ${e.outcome+1} a gagné!`:e.outcome===0?["Zut! J'ai perdu! Tu peux changer de difficulté en cliquant sur ",f(v,{children:"Nouvelle partie"})]:["Oh oui! J'ai gagné! Tu peux changer de difficulté en cliquant sur ",f(v,{children:"Nouvelle partie"})]:t()),o=N(()=>e.isThinking?"bg-thinking":e.outcome===2?"bg-surprised":e.outcome!==null&&e.outcome===0&&e.adversary!=="human"?"bg-crying":e.outcome!==null&&(e.outcome===1||e.adversary==="human")?"bg-happy":"bg-speaking");return(()=>{var l=Gn();return T(l,f(Rn,{onEnter:(s,c)=>{s.animate([{opacity:0},{opacity:1}],{duration:500}).finished.then(c)},onExit:(s,c)=>{s.animate([{opacity:1},{opacity:0}],{duration:500}).finished.then(c)},get children(){return N(()=>!!r())()&&(()=>{var s=Hn();return T(s,r),s})()}}),null),T(l,(()=>{var s=N(()=>e.tutorialStep!==null);return()=>s()&&(()=>{var c=Un(),u=c.firstChild,g=u.nextSibling;return Pe(u,"click",e.tutorialPred),Pe(g,"click",e.tutorialNext),c})()})(),null),M(()=>Pt(l,`z-20 relative w-[15rem] h-[25rem] bg-contain bg-no-repeat ${o()}`)),l})()};xe(["click"]);var Wn=S("<div class=dialog-title>Nouvelle partie"),Xn=S('<div class="dialog-body grid grid-cols-20/80 gap-8"><div class="text-bold text-lg">Adversaire</div><div class="flex gap-4 text-lg"></div><div class="text-bold text-lg">Qui commence</div><div class="flex gap-4 text-lg">'),Jn=S("<div class=dialog-buttons><button class=btn>Annuler</button><button class=btn>OK"),Ye=S("<button class=togglebtn>");const Yn=[["human","Humain"],["level1","Débutant"],["level2","Moyen"],["level3","Difficile"]],Qn=e=>{const[t,n]=ct({...e.config});return[Wn(),(()=>{var i=Xn(),r=i.firstChild,o=r.nextSibling,l=o.nextSibling,s=l.nextSibling;return T(o,()=>Yn.map(([c,u])=>(()=>{var g=Ye();return g.$$click=w=>n("adversary",c),T(g,u),M(()=>g.classList.toggle("toggledbtn",c===t.adversary)),g})())),T(s,()=>[!1,!0].map(c=>(()=>{var u=Ye();return u.$$click=g=>n("machineStarts",c),T(u,c?"Machine":"Humain"),M(()=>u.classList.toggle("toggledbtn",c===t.machineStarts)),u})())),i})(),(()=>{var i=Jn(),r=i.firstChild,o=r.nextSibling;return Pe(r,"click",e.closeDialog),o.$$click=e.newGame,o.$$clickData=t,i})()]};xe(["click"]);function Vn(e){return new Worker(""+new URL("worker-Cq1KnX3e.js",import.meta.url).href,{name:e?.name})}var zn=S("<audio src=./move.webm preload=auto>"),Zn=S("<audio src=./capture.webm preload=auto>"),ei=S('<div class="relative w-screen min-h-screen bg-main bg-cover bg-no-repeat flex flew-row items-center justify-around portrait:flex-col"><div class="absolute bg-white w-full h-full opacity-30 z-10 pointer-events-none"></div><div class="flex flex-col bg-board b-cover p-6 border-2 border-black rounded-xl gap-4 z-20"><div class=text-4xl>Catch the lion</div><button class=btn>Nouvelle partie</button><button class=btn>Annuler</button><button class=btn>Tutoriel</button><button class=btn>Information'),ti=S("<dialog class=dialog>");const ni=()=>{let e,t,n;const[i,r]=ct(Rt()),o=()=>{if(i.tutorialStep===null)return null;const a=W[i.tutorialStep].action;return a.type==="playerAction"?[a.from,a.to]:null},l=new Vn;function s(a){return new Promise(d=>{l.onmessage=function(A){d(A.data)},l.postMessage(a)})}const c=(a,d)=>{const{owner:A,type:y,position:h}=i.pieces[a],p=i.pieces[a].position;D(()=>{const E=i.pieces.map(O=>({...O}));r("played",i.played.length,{pieces:E,move:[p,d]});let L=i.pieces.findIndex(O=>O.position===d);L>=0?(n.play(),r("pieces",L,{position:null,owner:A}),r("pieces",L,"type",O=>O==="H"?"C":O),i.pieces[L].type==="L"&&r("outcome",A)):t.play(),r("pieces",a,"position",d),y==="C"&&h!==null&&(A&&d>8||!A&&d<3)&&r("pieces",a,"type","H"),Ht(i.pieces,i.turn)&&r("outcome",i.turn),Gt(i.pieces,i.played)&&r("outcome",2),r("turn",O=>O===0?1:0)})},u=async()=>{const a={pieces:i.pieces.map(y=>({...y})),turn:i.turn,adversary:i.config.adversary},[[d,A]]=await Promise.all([s(a),Oe(1500)]);D(()=>{r("isThinking",!1),c(d,A)})},g=async(a,d)=>{if(i.config.adversary==="human")c(a,d);else{if(D(()=>{c(a,d),i.outcome===null&&r("isThinking",!0)}),i.outcome!==null)return;await u()}},w=()=>{i.isThinking||r(Se(a=>{if(a.played.length>1){const A=a.played.pop().pieces;a.pieces=A,a.turn=a.turn===0?1:0,a.outcome=null}const d=a.played.length%2===0;if(a.config.adversary!=="human"&&d===a.config.machineStarts){const A=a.played.pop().pieces;a.pieces=A,a.turn=a.turn===0?1:0}}))},k=()=>{r("dialogOpened",!0),e.showModal()},B=()=>{e.close(),r("dialogOpened",!1)},x=a=>{r(Se(d=>{d.config={...a},d.pieces=je(),d.played=[],d.outcome=null,d.turn=d.config.machineStarts?1:0,d.isThinking=d.config.machineStarts,d.dialogOpened=!1,d.tutorialStep=null})),e.close(),i.config.machineStarts&&u()},P=()=>{r(Se(a=>{a.pieces=je(),a.played=[],a.outcome=null,a.turn=0,a.isThinking=!1,a.dialogOpened=!1,a.tutorialStep=0}))},b=()=>{r("tutorialStep",a=>Math.max(0,a-1))},m=()=>{if(i.tutorialStep===null)return;const a=W[i.tutorialStep].action;a.type!=="playerAction"&&D(()=>{a.type==="machineAction"&&c(a.from,a.to),r("tutorialStep",d=>Math.min(W.length-1,d+1))})},te=(a,d)=>{if(console.log(a,d),i.tutorialStep===null)return;const A=W[i.tutorialStep].action;A.type!=="playerAction"||a!==A.from||d!==A.to||D(()=>{c(a,d),r("tutorialStep",y=>Math.min(W.length-1,y+1))})};return[(()=>{var a=zn(),d=t;return typeof d=="function"?le(d,a):t=a,a})(),(()=>{var a=Zn(),d=n;return typeof d=="function"?le(d,a):n=a,a})(),(()=>{var a=ei(),d=a.firstChild,A=d.nextSibling,y=A.firstChild,h=y.nextSibling,p=h.nextSibling,E=p.nextSibling;return h.$$click=k,p.$$click=w,E.$$click=P,T(a,(()=>{var L=N(()=>i.tutorialStep===null);return()=>L()?f(We,{get pieces(){return i.pieces},get turn(){return i.turn},get lastMove(){return Ge(i.played)?.move??null},get canPlay(){return!i.isThinking&&i.outcome===null},wantedMove:null,play:g}):f(We,{get pieces(){return i.pieces},get turn(){return i.turn},get lastMove(){return Ge(i.played)?.move??null},get canPlay(){return W[i.tutorialStep].action.type==="playerAction"},get wantedMove(){return o()},play:te})})(),null),T(a,f(Kn,{get outcome(){return i.outcome},get isThinking(){return i.isThinking},get adversary(){return i.config.adversary},get tutorialStep(){return i.tutorialStep},tutorialNext:m,tutorialPred:b}),null),a})(),(()=>{var a=ti(),d=e;return typeof d=="function"?le(d,a):e=a,T(a,(()=>{var A=N(()=>!!i.dialogOpened);return()=>A()&&f(Qn,{get config(){return i.config},closeDialog:B,newGame:x})})()),a})()]};xe(["click"]);const ii=document.getElementById("root");kt(()=>f(ni,{}),ii);
