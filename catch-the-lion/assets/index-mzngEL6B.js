(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const Ve=(e,t)=>e===t,M=Symbol("solid-proxy"),fe=Symbol("solid-track"),V={equals:Ve};let _e=Ie;const N=1,Y=2,ke={owned:null,cleanups:null,context:null,owner:null};var b=null;let se=null,Ye=null,y=null,$=null,L=null,re=0;function ae(e,t){const n=y,i=b,r=e.length===0,o=t===void 0?i:t,l=r?ke:{owned:null,cleanups:null,context:o?o.context:null,owner:o},s=r?e:()=>e(()=>P(()=>X(l)));b=l,y=null;try{return B(s,!0)}finally{y=n,b=i}}function j(e,t){t=t?Object.assign({},V,t):V;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=r=>(typeof r=="function"&&(r=r(n.value)),De(n,r));return[je.bind(n),i]}function Je(e,t,n){const i=oe(e,t,!0,N);q(i)}function _(e,t,n){const i=oe(e,t,!1,N);q(i)}function ze(e,t,n){_e=ot;const i=oe(e,t,!1,N);i.user=!0,L?L.push(i):q(i)}function E(e,t,n){n=n?Object.assign({},V,n):V;const i=oe(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,q(i),je.bind(i)}function k(e){return B(e,!1)}function P(e){if(y===null)return e();const t=y;y=null;try{return e()}finally{y=t}}function Ze(e){ze(()=>P(e))}function Ne(e){return b===null||(b.cleanups===null?b.cleanups=[e]:b.cleanups.push(e)),e}function de(){return y}function et(e){const t=y,n=b;return Promise.resolve().then(()=>{y=t,b=n;let i;return B(e,!1),y=b=null,i?i.done:void 0})}const[tt,Dn]=j(!1);function nt(){return[tt,et]}function je(){if(this.sources&&this.state)if(this.state===N)q(this);else{const e=$;$=null,B(()=>z(this),!1),$=e}if(y){const e=this.observers?this.observers.length:0;y.sources?(y.sources.push(this),y.sourceSlots.push(e)):(y.sources=[this],y.sourceSlots=[e]),this.observers?(this.observers.push(y),this.observerSlots.push(y.sources.length-1)):(this.observers=[y],this.observerSlots=[y.sources.length-1])}return this.value}function De(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&B(()=>{for(let r=0;r<e.observers.length;r+=1){const o=e.observers[r],l=se&&se.running;l&&se.disposed.has(o),(l?!o.tState:!o.state)&&(o.pure?$.push(o):L.push(o),o.observers&&Me(o)),l||(o.state=N)}if($.length>1e6)throw $=[],new Error},!1)),t}function q(e){if(!e.fn)return;X(e);const t=re;it(e,e.value,t)}function it(e,t,n){let i;const r=b,o=y;y=b=e;try{i=e.fn(t)}catch(l){return e.pure&&(e.state=N,e.owned&&e.owned.forEach(X),e.owned=null),e.updatedAt=n+1,Be(l)}finally{y=o,b=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?De(e,i):e.value=i,e.updatedAt=n)}function oe(e,t,n,i=N,r){const o={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:b,context:b?b.context:null,pure:n};return b===null||b!==ke&&(b.owned?b.owned.push(o):b.owned=[o]),o}function J(e){if(e.state===0)return;if(e.state===Y)return z(e);if(e.suspense&&P(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<re);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===N)q(e);else if(e.state===Y){const i=$;$=null,B(()=>z(e,t[0]),!1),$=i}}function B(e,t){if($)return e();let n=!1;t||($=[]),L?n=!0:L=[],re++;try{const i=e();return rt(n),i}catch(i){n||(L=null),$=null,Be(i)}}function rt(e){if($&&(Ie($),$=null),e)return;const t=L;L=null,t.length&&B(()=>_e(t),!1)}function Ie(e){for(let t=0;t<e.length;t++)J(e[t])}function ot(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:J(i)}for(t=0;t<n;t++)J(e[t])}function z(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];if(i.sources){const r=i.state;r===N?i!==t&&(!i.updatedAt||i.updatedAt<re)&&J(i):r===Y&&z(i,t)}}}function Me(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=Y,n.pure?$.push(n):L.push(n),n.observers&&Me(n))}}function X(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const o=r.pop(),l=n.observerSlots.pop();i<r.length&&(o.sourceSlots[l]=i,r[i]=o,n.observerSlots[i]=l)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)X(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)X(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function st(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Be(e,t=b){throw st(e)}const me=Symbol("fallback");function be(e){for(let t=0;t<e.length;t++)e[t]()}function lt(e,t,n={}){let i=[],r=[],o=[],l=[],s=0,c;return Ne(()=>be(o)),()=>{const a=e()||[],g=a.length;return a[fe],P(()=>{if(g===0)return s!==0&&(be(o),o=[],i=[],r=[],s=0,l=[]),n.fallback&&(i=[me],r[0]=ae(v=>(o[0]=v,n.fallback())),s=1),r;for(i[0]===me&&(o[0](),o=[],i=[],r=[],s=0),c=0;c<g;c++)c<i.length&&i[c]!==a[c]?l[c](()=>a[c]):c>=i.length&&(r[c]=ae(p));for(;c<i.length;c++)o[c]();return s=l.length=o.length=g,i=a.slice(0),r=r.slice(0,s)});function p(v){o[c]=v;const[m,u]=j(a[c]);return l[c]=u,t(m,c)}}}function I(e,t){return P(()=>e(t||{}))}function ve(e){const t="fallback"in e&&{fallback:()=>e.fallback};return E(lt(()=>e.each,e.children,t||void 0))}function ct(e,t,n){let i=n.length,r=t.length,o=i,l=0,s=0,c=t[r-1].nextSibling,a=null;for(;l<r||s<o;){if(t[l]===n[s]){l++,s++;continue}for(;t[r-1]===n[o-1];)r--,o--;if(r===l){const g=o<i?s?n[s-1].nextSibling:n[o-s]:c;for(;s<o;)e.insertBefore(n[s++],g)}else if(o===s)for(;l<r;)(!a||!a.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[s]===t[r-1]){const g=t[--r].nextSibling;e.insertBefore(n[s++],t[l++].nextSibling),e.insertBefore(n[--o],g),t[r]=n[o]}else{if(!a){a=new Map;let p=s;for(;p<o;)a.set(n[p],p++)}const g=a.get(t[l]);if(g!=null)if(s<g&&g<o){let p=l,v=1,m;for(;++p<r&&p<o&&!((m=a.get(t[p]))==null||m!==g+v);)v++;if(v>g-s){const u=t[l];for(;s<g;)e.insertBefore(n[s++],u)}else e.replaceChild(n[s++],t[l++])}else l++;else t[l++].remove()}}}const we="_$DX_DELEGATE";function ut(e,t,n,i={}){let r;return ae(o=>{r=o,t===document?e():S(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{r(),t.textContent=""}}function A(e,t,n){let i;const r=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},o=t?()=>P(()=>document.importNode(i||(i=r()),!0)):()=>(i||(i=r())).cloneNode(!0);return o.cloneNode=o,o}function ye(e,t=window.document){const n=t[we]||(t[we]=new Set);for(let i=0,r=e.length;i<r;i++){const o=e[i];n.has(o)||(n.add(o),t.addEventListener(o,gt))}}function F(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function ft(e,t){t==null?e.removeAttribute("class"):e.className=t}function at(e,t,n,i){Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n}function dt(e,t,n={}){const i=Object.keys(t||{}),r=Object.keys(n);let o,l;for(o=0,l=r.length;o<l;o++){const s=r[o];!s||s==="undefined"||t[s]||($e(e,s,!1),delete n[s])}for(o=0,l=i.length;o<l;o++){const s=i[o],c=!!t[s];!s||s==="undefined"||n[s]===c||!c||($e(e,s,!0),n[s]=c)}return n}function le(e,t,n){return P(()=>e(t,n))}function S(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return Z(e,t,i,n);_(r=>Z(e,t(),r,n),i)}function $e(e,t,n){const i=t.trim().split(/\s+/);for(let r=0,o=i.length;r<o;r++)e.classList.toggle(i[r],n)}function gt(e){let t=e.target;const n=`$$${e.type}`,i=e.target,r=e.currentTarget,o=c=>Object.defineProperty(e,"target",{configurable:!0,value:c}),l=()=>{const c=t[n];if(c&&!t.disabled){const a=t[`${n}Data`];if(a!==void 0?c.call(t,a,e):c.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&o(t.host),!0},s=()=>{for(;l()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const c=e.composedPath();o(c[0]);for(let a=0;a<c.length-2&&(t=c[a],!!l());a++){if(t._$host){t=t._$host,s();break}if(t.parentNode===r)break}}else s();o(i)}function Z(e,t,n,i,r){for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=i!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(o==="number"&&(t=t.toString(),t===n))return n;if(l){let s=n[0];s&&s.nodeType===3?s.data!==t&&(s.data=t):s=document.createTextNode(t),n=R(e,n,i,s)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean")n=R(e,n,i);else{if(o==="function")return _(()=>{let s=t();for(;typeof s=="function";)s=s();n=Z(e,s,n,i)}),()=>n;if(Array.isArray(t)){const s=[],c=n&&Array.isArray(n);if(ge(s,t,n,r))return _(()=>n=Z(e,s,n,i,!0)),()=>n;if(s.length===0){if(n=R(e,n,i),l)return n}else c?n.length===0?Ae(e,s,i):ct(e,n,s):(n&&R(e),Ae(e,s));n=s}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=R(e,n,i,t);R(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ge(e,t,n,i){let r=!1;for(let o=0,l=t.length;o<l;o++){let s=t[o],c=n&&n[e.length],a;if(!(s==null||s===!0||s===!1))if((a=typeof s)=="object"&&s.nodeType)e.push(s);else if(Array.isArray(s))r=ge(e,s,c)||r;else if(a==="function")if(i){for(;typeof s=="function";)s=s();r=ge(e,Array.isArray(s)?s:[s],Array.isArray(c)?c:[c])||r}else e.push(s),r=!0;else{const g=String(s);c&&c.nodeType===3&&c.data===g?e.push(c):e.push(document.createTextNode(g))}}return r}function Ae(e,t,n=null){for(let i=0,r=t.length;i<r;i++)e.insertBefore(t[i],n)}function R(e,t,n,i){if(n===void 0)return e.textContent="";const r=i||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const s=t[l];if(r!==s){const c=s.parentNode===e;!o&&!l?c?e.replaceChild(r,s):e.insertBefore(r,n):c&&s.remove()}else o=!0}}else e.insertBefore(r,n);return[r]}const ee=Symbol("store-raw"),G=Symbol("store-node"),O=Symbol("store-has"),Fe=Symbol("store-self");function Re(e){let t=e[M];if(!t&&(Object.defineProperty(e,M,{value:t=new Proxy(e,yt)}),!Array.isArray(e))){const n=Object.keys(e),i=Object.getOwnPropertyDescriptors(e);for(let r=0,o=n.length;r<o;r++){const l=n[r];i[l].get&&Object.defineProperty(e,l,{enumerable:i[l].enumerable,get:i[l].get.bind(t)})}}return t}function H(e){let t;return e!=null&&typeof e=="object"&&(e[M]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function U(e,t=new Set){let n,i,r,o;if(n=e!=null&&e[ee])return n;if(!H(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let l=0,s=e.length;l<s;l++)r=e[l],(i=U(r,t))!==r&&(e[l]=i)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const l=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let c=0,a=l.length;c<a;c++)o=l[c],!s[o].get&&(r=e[o],(i=U(r,t))!==r&&(e[o]=i))}return e}function te(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function Q(e,t,n){if(e[t])return e[t];const[i,r]=j(n,{equals:!1,internal:!0});return i.$=r,e[t]=i}function ht(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===M||t===G||(delete n.value,delete n.writable,n.get=()=>e[M][t]),n}function Ge(e){de()&&Q(te(e,G),Fe)()}function pt(e){return Ge(e),Reflect.ownKeys(e)}const yt={get(e,t,n){if(t===ee)return e;if(t===M)return n;if(t===fe)return Ge(e),n;const i=te(e,G),r=i[t];let o=r?r():e[t];if(t===G||t===O||t==="__proto__")return o;if(!r){const l=Object.getOwnPropertyDescriptor(e,t);de()&&(typeof o!="function"||e.hasOwnProperty(t))&&!(l&&l.get)&&(o=Q(i,t,o)())}return H(o)?Re(o):o},has(e,t){return t===ee||t===M||t===fe||t===G||t===O||t==="__proto__"?!0:(de()&&Q(te(e,O),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:pt,getOwnPropertyDescriptor:ht};function K(e,t,n,i=!1){if(!i&&e[t]===n)return;const r=e[t],o=e.length;n===void 0?(delete e[t],e[O]&&e[O][t]&&r!==void 0&&e[O][t].$()):(e[t]=n,e[O]&&e[O][t]&&r===void 0&&e[O][t].$());let l=te(e,G),s;if((s=Q(l,t,r))&&s.$(()=>n),Array.isArray(e)&&e.length!==o){for(let c=e.length;c<o;c++)(s=l[c])&&s.$();(s=Q(l,"length",o))&&s.$(e.length)}(s=l[Fe])&&s.$()}function He(e,t){const n=Object.keys(t);for(let i=0;i<n.length;i+=1){const r=n[i];K(e,r,t[r])}}function mt(e,t){if(typeof t=="function"&&(t=t(e)),t=U(t),Array.isArray(t)){if(e===t)return;let n=0,i=t.length;for(;n<i;n++){const r=t[n];e[n]!==r&&K(e,n,r)}K(e,"length",i)}else He(e,t)}function W(e,t,n=[]){let i,r=e;if(t.length>1){i=t.shift();const l=typeof i,s=Array.isArray(e);if(Array.isArray(i)){for(let c=0;c<i.length;c++)W(e,[i[c]].concat(t),n);return}else if(s&&l==="function"){for(let c=0;c<e.length;c++)i(e[c],c)&&W(e,[c].concat(t),n);return}else if(s&&l==="object"){const{from:c=0,to:a=e.length-1,by:g=1}=i;for(let p=c;p<=a;p+=g)W(e,[p].concat(t),n);return}else if(t.length>1){W(e[i],t,[i].concat(n));return}r=e[i],n=[i].concat(n)}let o=t[0];typeof o=="function"&&(o=o(r,n),o===r)||i===void 0&&o==null||(o=U(o),i===void 0||H(r)&&H(o)&&!Array.isArray(o)?He(r,o):K(e,i,o))}function Ue(...[e,t]){const n=U(e||{}),i=Array.isArray(n),r=Re(n);function o(...l){k(()=>{i&&l.length===1?mt(n,l[0]):W(n,l)})}return[r,o]}const ne=new WeakMap,Ke={get(e,t){if(t===ee)return e;const n=e[t];let i;return H(n)?ne.get(n)||(ne.set(n,i=new Proxy(n,Ke)),i):n},set(e,t,n){return K(e,t,U(n)),!0},deleteProperty(e,t){return K(e,t,void 0,!0),!0}};function xe(e){return t=>{if(H(t)){let n;(n=ne.get(t))||ne.set(t,n=new Proxy(t,Ke)),e(n)}return t}}const bt=e=>e.length===0?null:e[e.length-1],vt=(e,t)=>{console.log(e);let n=0,i=e.length;for(let r=0;r<i;r++)t(e[r])&&n++;return n},he=e=>new Promise(t=>setTimeout(t,e)),wt=()=>({adversary:"level1",machineStarts:!1}),qe=()=>[{type:"E",position:9,owner:0},{type:"L",position:10,owner:0},{type:"G",position:11,owner:0},{type:"C",position:7,owner:0},{type:"E",position:2,owner:1},{type:"L",position:1,owner:1},{type:"G",position:0,owner:1},{type:"C",position:4,owner:1}],$t=()=>({pieces:qe(),turn:0,outcome:null,played:[],config:wt(),isThinking:!1,dialogOpened:!1}),At={C:[[0,1]],H:[[0,1],[1,0],[0,-1],[-1,0],[1,1],[-1,1]],G:[[0,1],[1,0],[0,-1],[-1,0]],E:[[1,1],[-1,1],[1,-1],[-1,-1]],L:[[0,1],[1,0],[0,-1],[-1,0],[1,1],[-1,1],[1,-1],[-1,-1]]};function xt(e,t){const n=new Array(12);n.fill(0);for(const s of e)s.position!==null&&(n[s.position]=s.owner+1);if(t.position===null){const s=[];for(let c=0;c<12;c++)n[c]||s.push(c);return s}const i=[],r=t.position%3,o=t.position/3|0,l=At[t.type];for(const s of l){const[c,a]=t.owner?[s[0],s[1]]:[-s[0],-s[1]],g=r+c,p=o+a;if(g>=0&&g<3&&p>=0&&p<4){let v=3*p+g;n[v]!==t.owner+1&&i.push(v)}}return i}const St=(e,t)=>e.owner===t.owner&&e.position===t.position&&e.type===t.type,Tt=(e,t)=>{for(let n=0;n<8;n++)if(!St(e[n],t[n]))return!1;return!0},Et=(e,t)=>vt(t,n=>Tt(e,n.pieces))>=2;function Pt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Se=1/0,We=9007199254740991,Ct=17976931348623157e292,Te=NaN,Ot="[object Function]",Lt="[object GeneratorFunction]",_t="[object Symbol]",kt=/^\s+|\s+$/g,Nt=/^[-+]0x[0-9a-f]+$/i,jt=/^0b[01]+$/i,Dt=/^0o[0-7]+$/i,It=/^(?:0|[1-9]\d*)$/,Mt=parseInt,Bt=Object.prototype,Xe=Bt.toString,Ft=Math.ceil,Rt=Math.max;function Gt(e,t,n,i){for(var r=-1,o=Rt(Ft((t-e)/(n||1)),0),l=Array(o);o--;)l[++r]=e,e+=n;return l}function Ht(e){return function(t,n,i){return i&&typeof i!="number"&&Kt(t,n,i)&&(n=i=void 0),t=ce(t),n===void 0?(n=t,t=0):n=ce(n),i=i===void 0?t<n?1:-1:ce(i),Gt(t,n,i)}}function Ut(e,t){return t=t??We,!!t&&(typeof e=="number"||It.test(e))&&e>-1&&e%1==0&&e<t}function Kt(e,t,n){if(!ie(n))return!1;var i=typeof t;return(i=="number"?Wt(n)&&Ut(t,n.length):i=="string"&&t in n)?qt(n[t],e):!1}function qt(e,t){return e===t||e!==e&&t!==t}function Wt(e){return e!=null&&Qt(e.length)&&!Xt(e)}function Xt(e){var t=ie(e)?Xe.call(e):"";return t==Ot||t==Lt}function Qt(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=We}function ie(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Vt(e){return!!e&&typeof e=="object"}function Yt(e){return typeof e=="symbol"||Vt(e)&&Xe.call(e)==_t}function ce(e){if(!e)return e===0?e:0;if(e=Jt(e),e===Se||e===-Se){var t=e<0?-1:1;return t*Ct}return e===e?e:0}function Jt(e){if(typeof e=="number")return e;if(Yt(e))return Te;if(ie(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ie(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(kt,"");var n=jt.test(e);return n||Dt.test(e)?Mt(e.slice(2),n?2:8):Nt.test(e)?Te:+e}var zt=Ht(),Zt=zt;const en=Pt(Zt);var tn=A('<div class="w-[42rem] z-20"><svg viewBox="0 0 1600 1680"class=select-none><image x=200 y=0 width=1200 height=1680 href=./board.webp>'),nn=A("<svg><rect width=298 height=298 stroke-width=20></svg>",!1,!0),rn=A("<svg><image x=-140 y=-140 width=280 height=280></svg>",!1,!0),on=A("<svg><image x=-140 y=-140 width=280 height=280 class=pointer-events-none></svg>",!1,!0);function sn(e){const t=e.currentTarget,{left:n,top:i,width:r,height:o}=t.getBoundingClientRect();return{x:(e.clientX-n)/r,y:(e.clientY-i)/o}}const ln=[350,670,1e3,1320],cn=[480,800,1120],Ee={L:"./lion.webp",G:"./giraffe.webp",E:"./elephant.webp",C:"./chick.webp",H:"./chicken.webp"},Pe={C:0,E:1,G:2,L:3,H:4},un=e=>{const t=e.position;let n,i,r;t===null?(n=e.owner?1500:100,i=e.owner?200+200*Pe[e.type]:1570-200*Pe[e.type],r=.7):(n=cn[t%3],i=ln[t/3|0],r=1);const o=e.owner?"180deg":"0";return`translate(${n}px, ${i}px) rotate(${o}) scale(${r})`},fn=(e,t)=>{const n=100*e.x,i=100*e.y,r=t.owner?"180deg":"0";return`translate(${n}%, ${i}%) rotate(${r})`},an=e=>{const[t,n]=j(null),[i,r]=j(null),[o,l]=j(null),s=E(()=>t()!==null?xt(e.pieces,e.pieces[t()]):[]),c=m=>e.lastMove&&e.lastMove.includes(m),a=(m,u)=>{!e.canPlay||e.pieces[m].owner!==e.turn||(u.currentTarget&&u.currentTarget.releasePointerCapture(u.pointerId),k(()=>{n(m),r(m)}),setTimeout(()=>r(null),500))},g=m=>{l(sn(m))},p=m=>{k(()=>{l(null);const u=t();u!==null&&(n(null),e.play(u,m))})},v=m=>{k(()=>{l(null),n(null)})};return(()=>{var m=tn(),u=m.firstChild;return u.firstChild,u.$$pointerup=v,u.addEventListener("pointerleave",v),u.addEventListener("pointercancel",v),u.$$pointermove=g,S(u,I(ve,{get each(){return en(0,12)},children:f=>(()=>{var d=nn();return d.$$pointerup=p,d.$$pointerupData=f(),_(h=>{var w=320+330*(f()%3),x=200+325*(f()/3|0),D=s().includes(f())?"lightgreen":"transparent",C=!s().includes(f()),T=c(f())?"rgba(0, 255, 0, 0.3)":"transparent";return w!==h.e&&F(d,"x",h.e=w),x!==h.t&&F(d,"y",h.t=x),D!==h.a&&F(d,"stroke",h.a=D),C!==h.o&&d.classList.toggle("pointer-events-none",h.o=C),T!==h.i&&F(d,"fill",h.i=T),h},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),d})()}),null),S(u,I(ve,{get each(){return e.pieces},children:(f,d)=>(()=>{var h=rn();return h.$$pointerdown=a,h.$$pointerdownData=d,_(w=>{var x=un(f()),D=Ee[f().type],C={"pointer-events-none":t()!==null,"transition-transform duration-1000":i()!==d,"opacity-0":d===t()};return x!==w.e&&((w.e=x)!=null?h.style.setProperty("transform",x):h.style.removeProperty("transform")),D!==w.t&&F(h,"href",w.t=D),w.a=dt(h,C,w.a),w},{e:void 0,t:void 0,a:void 0}),h})()}),null),S(u,(()=>{var f=E(()=>!!(o()&&t()!==null));return()=>f()&&(()=>{var d=on();return _(h=>{var w=fn(o(),e.pieces[t()]),x=Ee[e.pieces[t()].type];return w!==h.e&&((h.e=w)!=null?d.style.setProperty("transform",w):d.style.removeProperty("transform")),x!==h.t&&F(d,"href",h.t=x),h},{e:void 0,t:void 0}),d})()})(),null),m})()};ye(["pointermove","pointerup","pointerdown"]);var dn=()=>{},Ce=(e,t)=>t();function gn(e,t){const n=P(e),i=n?[n]:[],{onEnter:r=Ce,onExit:o=Ce}=t,[l,s]=j(t.appear?[]:i),[c]=nt();let a,g=!1;function p(u,f){if(!u)return f&&f();g=!0,o(u,()=>{k(()=>{g=!1,s(d=>d.filter(h=>h!==u)),f&&f()})})}function v(u){const f=a;if(!f)return u&&u();a=void 0,s(d=>[f,...d]),r(f,u??dn)}const m=t.mode==="out-in"?u=>g||p(u,v):t.mode==="in-out"?u=>v(()=>p(u)):u=>{p(u),v()};return Je(u=>{const f=e();return P(c)?(c(),u):(f!==u&&(a=f,k(()=>P(()=>m(u)))),f)},t.appear?void 0:n),l}var Oe=e=>e instanceof Element;function pe(e,t){if(t(e))return e;if(typeof e=="function"&&!e.length)return pe(e(),t);if(Array.isArray(e))for(const n of e){const i=pe(n,t);if(i)return i}return null}function hn(e,t=Oe,n=Oe){const i=E(e);return E(()=>pe(i(),t))}function pn(e){return E(()=>{const t=e.name||"s";return{enterActive:(e.enterActiveClass||t+"-enter-active").split(" "),enter:(e.enterClass||t+"-enter").split(" "),enterTo:(e.enterToClass||t+"-enter-to").split(" "),exitActive:(e.exitActiveClass||t+"-exit-active").split(" "),exit:(e.exitClass||t+"-exit").split(" "),exitTo:(e.exitToClass||t+"-exit-to").split(" "),move:(e.moveClass||t+"-move").split(" ")}})}function Qe(e){requestAnimationFrame(()=>requestAnimationFrame(e))}function yn(e,t,n,i){const{onBeforeEnter:r,onEnter:o,onAfterEnter:l}=t;r?.(n),n.classList.add(...e.enter),n.classList.add(...e.enterActive),queueMicrotask(()=>{if(!n.parentNode)return i?.();o?.(n,()=>s())}),Qe(()=>{n.classList.remove(...e.enter),n.classList.add(...e.enterTo),(!o||o.length<2)&&(n.addEventListener("transitionend",s),n.addEventListener("animationend",s))});function s(c){(!c||c.target===n)&&(i?.(),n.removeEventListener("transitionend",s),n.removeEventListener("animationend",s),n.classList.remove(...e.enterActive),n.classList.remove(...e.enterTo),l?.(n))}}function mn(e,t,n,i){const{onBeforeExit:r,onExit:o,onAfterExit:l}=t;if(!n.parentNode)return i?.();r?.(n),n.classList.add(...e.exit),n.classList.add(...e.exitActive),o?.(n,()=>s()),Qe(()=>{n.classList.remove(...e.exit),n.classList.add(...e.exitTo),(!o||o.length<2)&&(n.addEventListener("transitionend",s),n.addEventListener("animationend",s))});function s(c){(!c||c.target===n)&&(i?.(),n.removeEventListener("transitionend",s),n.removeEventListener("animationend",s),n.classList.remove(...e.exitActive),n.classList.remove(...e.exitTo),l?.(n))}}var bn={inout:"in-out",outin:"out-in"},vn=e=>{const t=pn(e);return gn(hn(()=>e.children),{mode:bn[e.mode],appear:e.appear,onEnter(n,i){yn(t(),e,n,i)},onExit(n,i){mn(t(),e,n,i)}})},wn=A("<div>"),$n=A("<div class=tooltip>");const ue=[["Bienvenue sur l'appli Catch the lion",3e3],['"Catch the lion" connu en japonais sous le nom "Dobutsu Shogi" est une variante pour enfants du Shogi.',5e3],["Le jeu a été entièrement résolu par ordinateur. Il existe 1 567 925 964 configurations possibles.",5e3],["Si les deux joueurs jouent de manière optimale, la victoire est assurée pour le second joueur.",5e3],["Pour apprendre les règles, tu peux clicker sur Tutoriel",3e3]],An=e=>{const[t,n]=j("");let i=!1;Ze(async()=>{let l=0;for(;;){const s=ue[l][1];if(n(ue[l][0]),await he(s),n(null),l=(l+1)%ue.length,i)break;await he(1500)}}),Ne(()=>{i=!0});const r=E(()=>e.outcome!==null?e.outcome===2?"Oh, cette configuration de pièces a été répétée 3 fois. C'est un match nul!":e.adversary==="human"?`Bravo! Le joueur ${e.outcome+1} a gagné!`:e.outcome===0?"Zut! J'ai perdu! Tu peux changer de difficulté en clickant sur nouvelle partie!":"Oh oui! J'ai gagné! Tu peux changer de difficulté en clickant sur nouvelle partie!":t()),o=E(()=>e.isThinking?"bg-thinking":e.outcome===2?"bg-surprised":e.outcome!==null&&e.outcome===0&&e.adversary!=="human"?"bg-crying":e.outcome!==null&&(e.outcome===1||e.adversary==="human")?"bg-happy":"bg-speaking");return(()=>{var l=wn();return S(l,I(vn,{onEnter:(s,c)=>{s.animate([{opacity:0},{opacity:1}],{duration:500}).finished.then(c)},onExit:(s,c)=>{s.animate([{opacity:1},{opacity:0}],{duration:500}).finished.then(c)},get children(){return E(()=>!!r())()&&(()=>{var s=$n();return S(s,r),s})()}})),_(()=>ft(l,`z-20 relative w-[15rem] h-[25rem] bg-contain bg-no-repeat ${o()}`)),l})()};var xn=A("<div class=dialog-title>Nouvelle partie"),Sn=A('<div class="dialog-body grid grid-cols-20/80 gap-8"><div class="text-bold text-lg">Adversaire</div><div class="flex gap-4 text-lg"></div><div class="text-bold text-lg">Qui commence</div><div class="flex gap-4 text-lg">'),Tn=A("<div class=dialog-buttons><button class=btn>Annuler</button><button class=btn>OK"),Le=A("<button class=togglebtn>");const En=[["human","Humain"],["level1","Débutant"],["level2","Moyen"],["level3","Difficile"]],Pn=e=>{const[t,n]=Ue({...e.config});return[xn(),(()=>{var i=Sn(),r=i.firstChild,o=r.nextSibling,l=o.nextSibling,s=l.nextSibling;return S(o,()=>En.map(([c,a])=>(()=>{var g=Le();return g.$$click=p=>n("adversary",c),S(g,a),_(()=>g.classList.toggle("toggledbtn",c===t.adversary)),g})())),S(s,()=>[!1,!0].map(c=>(()=>{var a=Le();return a.$$click=g=>n("machineStarts",c),S(a,c?"Machine":"Humain"),_(()=>a.classList.toggle("toggledbtn",c===t.machineStarts)),a})())),i})(),(()=>{var i=Tn(),r=i.firstChild,o=r.nextSibling;return at(r,"click",e.closeDialog),o.$$click=e.newGame,o.$$clickData=t,i})()]};ye(["click"]);function Cn(e){return new Worker(""+new URL("worker-BQ4GB_pv.js",import.meta.url).href,{name:e?.name})}var On=A("<audio src=./move.webm preload=auto>"),Ln=A("<audio src=./capture.webm preload=auto>"),_n=A('<div class="relative w-screen min-h-screen bg-main bg-cover bg-no-repeat flex flew-row items-center justify-around portrait:flex-col"><div class="absolute bg-white w-full h-full opacity-30 z-10 pointer-events-none"></div><div class="flex flex-col bg-board b-cover p-6 border-2 border-black rounded-xl gap-4 z-20"><div class=text-4xl>Catch the lion</div><button class=btn>Nouvelle partie</button><button class=btn>Annuler</button><button class=btn>Tutoriel</button><button class=btn>Information'),kn=A("<dialog class=dialog>");const Nn=()=>{let e,t,n;const[i,r]=Ue($t()),o=new Cn;function l(u){return new Promise(f=>{o.onmessage=function(d){f(d.data)},o.postMessage(u)})}const s=(u,f)=>{const{owner:d,type:h,position:w}=i.pieces[u],x=i.pieces[u].position;k(()=>{const D=i.pieces.map(T=>({...T}));r("played",i.played.length,{pieces:D,move:[x,f]});let C=i.pieces.findIndex(T=>T.position===f);C>=0?(n.play(),r("pieces",C,{position:null,owner:d}),r("pieces",C,"type",T=>T==="H"?"C":T),i.pieces[C].type==="L"&&r("outcome",d)):t.play(),r("pieces",u,"position",f),h==="C"&&w!==null&&(d&&f>8||!d&&f<3)&&r("pieces",u,"type","H"),r("turn",T=>T===0?1:0),Et(i.pieces,i.played)&&r("outcome",2)})},c=async()=>{const u={pieces:i.pieces.map(h=>({...h})),turn:i.turn,adversary:i.config.adversary},[[f,d]]=await Promise.all([l(u),he(1500)]);k(()=>{r("isThinking",!1),s(f,d)})},a=async(u,f)=>{if(i.config.adversary==="human")s(u,f);else{if(k(()=>{s(u,f),i.outcome===null&&r("isThinking",!0)}),i.outcome!==null)return;await c()}},g=()=>{i.isThinking||r(xe(u=>{if(u.played.length>1){const d=u.played.pop().pieces;u.pieces=d,u.turn=u.turn===0?1:0,u.outcome=null}const f=u.played.length%2===0;if(u.config.adversary!=="human"&&f===u.config.machineStarts){const d=u.played.pop().pieces;u.pieces=d,u.turn=u.turn===0?1:0}}))},p=()=>{r("dialogOpened",!0),e.showModal()},v=()=>{e.close(),r("dialogOpened",!1)},m=u=>{r(xe(f=>{f.config={...u},f.pieces=qe(),f.played=[],f.outcome=null,f.turn=f.config.machineStarts?1:0,f.isThinking=f.config.machineStarts,f.dialogOpened=!1})),e.close(),i.config.machineStarts&&c()};return[(()=>{var u=On(),f=t;return typeof f=="function"?le(f,u):t=u,u})(),(()=>{var u=Ln(),f=n;return typeof f=="function"?le(f,u):n=u,u})(),(()=>{var u=_n(),f=u.firstChild,d=f.nextSibling,h=d.firstChild,w=h.nextSibling,x=w.nextSibling;return w.$$click=p,x.$$click=g,S(u,I(an,{get pieces(){return i.pieces},get turn(){return i.turn},get lastMove(){return bt(i.played)?.move??null},get canPlay(){return!i.isThinking&&i.outcome===null},play:a}),null),S(u,I(An,{get outcome(){return i.outcome},get isThinking(){return i.isThinking},get adversary(){return i.config.adversary}}),null),u})(),(()=>{var u=kn(),f=e;return typeof f=="function"?le(f,u):e=u,S(u,(()=>{var d=E(()=>!!i.dialogOpened);return()=>d()&&I(Pn,{get config(){return i.config},closeDialog:v,newGame:m})})()),u})()]};ye(["click"]);const jn=document.getElementById("root");ut(()=>I(Nn,{}),jn);