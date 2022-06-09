(()=>{var oe=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,re=Symbol(),Le=new Map,He=class{constructor(t,e){if(this._$cssResult$=!0,e!==re)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=Le.get(this.cssText);return oe&&t===void 0&&(Le.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}},ie=t=>new He(typeof t=="string"?t:t+"",re),C=(t,...e)=>{let o=t.length===1?t[0]:e.reduce((r,i,s)=>r+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new He(o,re)},ir=(t,e)=>{oe?t.adoptedStyleSheets=e.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet):e.forEach(o=>{let r=document.createElement("style"),i=window.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=o.cssText,t.appendChild(r)})},Pe=oe?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let o="";for(let r of e.cssRules)o+=r.cssText;return ie(o)})(t):t,Zt,ze=window.trustedTypes,sr=ze?ze.emptyScript:"",De=window.reactiveElementPolyfillSupport,ee={toAttribute(t,e){switch(e){case Boolean:t=t?sr:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=t!==null;break;case Number:o=t===null?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch{o=null}}return o}},Ue=(t,e)=>e!==t&&(e==e||t==t),Jt={attribute:!0,type:String,converter:ee,reflect:!1,hasChanged:Ue},ct=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,o)=>{let r=this._$Eh(o,e);r!==void 0&&(this._$Eu.set(r,o),t.push(r))}),t}static createProperty(t,e=Jt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let o=typeof t=="symbol"?Symbol():"__"+t,r=this.getPropertyDescriptor(t,o,e);r!==void 0&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(r){let i=this[t];this[e]=r,this.requestUpdate(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Jt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){let e=this.properties,o=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let r of o)this.createProperty(r,e[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let o=new Set(t.flat(1/0).reverse());for(let r of o)e.unshift(Pe(r))}else t!==void 0&&e.push(Pe(t));return e}static _$Eh(t,e){let o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,o;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ir(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostConnected)===null||o===void 0?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostDisconnected)===null||o===void 0?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ES(t,e,o=Jt){var r,i;let s=this.constructor._$Eh(t,o);if(s!==void 0&&o.reflect===!0){let l=((i=(r=o.converter)===null||r===void 0?void 0:r.toAttribute)!==null&&i!==void 0?i:ee.toAttribute)(e,o.type);this._$Ei=t,l==null?this.removeAttribute(s):this.setAttribute(s,l),this._$Ei=null}}_$AK(t,e){var o,r,i;let s=this.constructor,l=s._$Eu.get(t);if(l!==void 0&&this._$Ei!==l){let n=s.getPropertyOptions(l),c=n.converter,d=(i=(r=(o=c)===null||o===void 0?void 0:o.fromAttribute)!==null&&r!==void 0?r:typeof c=="function"?c:null)!==null&&i!==void 0?i:ee.fromAttribute;this._$Ei=l,this[l]=d(e,n.type),this._$Ei=null}}requestUpdate(t,e,o){let r=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||Ue)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$Ei!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((r,i)=>this[i]=r),this._$Et=void 0);let e=!1,o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(t=this._$Eg)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostUpdate)===null||i===void 0?void 0:i.call(r)}),this.update(o)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(o=>{var r;return(r=o.hostUpdated)===null||r===void 0?void 0:r.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,o)=>this._$ES(o,this[o],e)),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}};ct.finalized=!0,ct.elementProperties=new Map,ct.elementStyles=[],ct.shadowRootOptions={mode:"open"},De?.({ReactiveElement:ct}),((Zt=globalThis.reactiveElementVersions)!==null&&Zt!==void 0?Zt:globalThis.reactiveElementVersions=[]).push("1.3.2");var Gt,dt=globalThis.trustedTypes,Oe=dt?dt.createPolicy("lit-html",{createHTML:t=>t}):void 0,W=`lit$${(Math.random()+"").slice(9)}$`,se="?"+W,lr=`<${se}>`,pt=document,wt=(t="")=>pt.createComment(t),xt=t=>t===null||typeof t!="object"&&typeof t!="function",je=Array.isArray,qe=t=>{var e;return je(t)||typeof((e=t)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},_t=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ie=/-->/g,Me=/>/g,rt=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Re=/'/g,Be=/"/g,We=/^(?:script|style|textarea|title)$/i,Ke=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),x=Ke(1),Ye=Ke(2),R=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),Ve=new WeakMap,nr=(t,e,o)=>{var r,i;let s=(r=o?.renderBefore)!==null&&r!==void 0?r:e,l=s._$litPart$;if(l===void 0){let n=(i=o?.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=l=new $t(e.insertBefore(wt(),n),n,void 0,o??{})}return l._$AI(t),l},ut=pt.createTreeWalker(pt,129,null,!1),Xe=(t,e)=>{let o=t.length-1,r=[],i,s=e===2?"<svg>":"",l=_t;for(let c=0;c<o;c++){let d=t[c],h,p,m=-1,g=0;for(;g<d.length&&(l.lastIndex=g,p=l.exec(d),p!==null);)g=l.lastIndex,l===_t?p[1]==="!--"?l=Ie:p[1]!==void 0?l=Me:p[2]!==void 0?(We.test(p[2])&&(i=RegExp("</"+p[2],"g")),l=rt):p[3]!==void 0&&(l=rt):l===rt?p[0]===">"?(l=i??_t,m=-1):p[1]===void 0?m=-2:(m=l.lastIndex-p[2].length,h=p[1],l=p[3]===void 0?rt:p[3]==='"'?Be:Re):l===Be||l===Re?l=rt:l===Ie||l===Me?l=_t:(l=rt,i=void 0);let f=l===rt&&t[c+1].startsWith("/>")?" ":"";s+=l===_t?d+lr:m>=0?(r.push(h),d.slice(0,m)+"$lit$"+d.slice(m)+W+f):d+W+(m===-2?(r.push(void 0),c):f)}let n=s+(t[o]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Oe!==void 0?Oe.createHTML(n):n,r]},It=class{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let i=0,s=0,l=t.length-1,n=this.parts,[c,d]=Xe(t,e);if(this.el=It.createElement(c,o),ut.currentNode=this.el.content,e===2){let h=this.el.content,p=h.firstChild;p.remove(),h.append(...p.childNodes)}for(;(r=ut.nextNode())!==null&&n.length<l;){if(r.nodeType===1){if(r.hasAttributes()){let h=[];for(let p of r.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(W)){let m=d[s++];if(h.push(p),m!==void 0){let g=r.getAttribute(m.toLowerCase()+"$lit$").split(W),f=/([.?@])?(.*)/.exec(m);n.push({type:1,index:i,name:f[2],strings:g,ctor:f[1]==="."?Je:f[1]==="?"?Ge:f[1]==="@"?Qe:kt})}else n.push({type:6,index:i})}for(let p of h)r.removeAttribute(p)}if(We.test(r.tagName)){let h=r.textContent.split(W),p=h.length-1;if(p>0){r.textContent=dt?dt.emptyScript:"";for(let m=0;m<p;m++)r.append(h[m],wt()),ut.nextNode(),n.push({type:2,index:++i});r.append(h[p],wt())}}}else if(r.nodeType===8)if(r.data===se)n.push({type:2,index:i});else{let h=-1;for(;(h=r.data.indexOf(W,h+1))!==-1;)n.push({type:7,index:i}),h+=W.length-1}i++}}static createElement(t,e){let o=pt.createElement("template");return o.innerHTML=t,o}};function it(t,e,o=t,r){var i,s,l,n;if(e===R)return e;let c=r!==void 0?(i=o._$Cl)===null||i===void 0?void 0:i[r]:o._$Cu,d=xt(e)?void 0:e._$litDirective$;return c?.constructor!==d&&((s=c?._$AO)===null||s===void 0||s.call(c,!1),d===void 0?c=void 0:(c=new d(t),c._$AT(t,o,r)),r!==void 0?((l=(n=o)._$Cl)!==null&&l!==void 0?l:n._$Cl=[])[r]=c:o._$Cu=c),c!==void 0&&(e=it(t,c._$AS(t,e.values),c,r)),e}var Ze=class{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;let{el:{content:o},parts:r}=this._$AD,i=((e=t?.creationScope)!==null&&e!==void 0?e:pt).importNode(o,!0);ut.currentNode=i;let s=ut.nextNode(),l=0,n=0,c=r[0];for(;c!==void 0;){if(l===c.index){let d;c.type===2?d=new $t(s,s.nextSibling,this,t):c.type===1?d=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(d=new to(s,this,t)),this.v.push(d),c=r[++n]}l!==c?.index&&(s=ut.nextNode(),l++)}return i}m(t){let e=0;for(let o of this.v)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}},$t=class{constructor(t,e,o,r){var i;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cg=(i=r?.isConnected)===null||i===void 0||i}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=it(this,t,e),xt(t)?t===A||t==null||t===""?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==R&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):qe(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==A&&xt(this._$AH)?this._$AA.nextSibling.data=t:this.k(pt.createTextNode(t)),this._$AH=t}T(t){var e;let{values:o,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=It.createElement(r.h,this.options)),r);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===i)this._$AH.m(o);else{let s=new Ze(i,this),l=s.p(this.options);s.m(o),this.k(l),this._$AH=s}}_$AC(t){let e=Ve.get(t.strings);return e===void 0&&Ve.set(t.strings,e=new It(t)),e}S(t){je(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,o,r=0;for(let i of t)r===e.length?e.push(o=new $t(this.M(wt()),this.M(wt()),this,this.options)):o=e[r],o._$AI(i),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,e);t&&t!==this._$AB;){let r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},kt=class{constructor(t,e,o,r,i){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,r){let i=this.strings,s=!1;if(i===void 0)t=it(this,t,e,0),s=!xt(t)||t!==this._$AH&&t!==R,s&&(this._$AH=t);else{let l=t,n,c;for(t=i[0],n=0;n<i.length-1;n++)c=it(this,l[o+n],e,n),c===R&&(c=this._$AH[n]),s||(s=!xt(c)||c!==this._$AH[n]),c===A?t=A:t!==A&&(t+=(c??"")+i[n+1]),this._$AH[n]=c}s&&!r&&this.C(t)}C(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Je=class extends kt{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===A?void 0:t}},ar=dt?dt.emptyScript:"",Ge=class extends kt{constructor(){super(...arguments),this.type=4}C(t){t&&t!==A?this.element.setAttribute(this.name,ar):this.element.removeAttribute(this.name)}},Qe=class extends kt{constructor(t,e,o,r,i){super(t,e,o,r,i),this.type=5}_$AI(t,e=this){var o;if((t=(o=it(this,t,e,0))!==null&&o!==void 0?o:A)===R)return;let r=this._$AH,i=t===A&&r!==A||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==A&&(r===A||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;typeof this._$AH=="function"?this._$AH.call((o=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}},to=class{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){it(this,t)}},eo={L:"$lit$",P:W,V:se,I:1,N:Xe,R:Ze,j:qe,D:it,H:$t,F:kt,O:Ge,W:Qe,B:Je,Z:to},Ne=window.litHtmlPolyfillSupport;Ne?.(It,$t),((Gt=globalThis.litHtmlVersions)!==null&&Gt!==void 0?Gt:globalThis.litHtmlVersions=[]).push("2.2.4");var Qt,te,k=class extends ct{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;let o=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=o.firstChild),o}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=nr(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return R}};k.finalized=!0,k._$litElement$=!0,(Qt=globalThis.litElementHydrateSupport)===null||Qt===void 0||Qt.call(globalThis,{LitElement:k});var Fe=globalThis.litElementPolyfillSupport;Fe?.({LitElement:k});((te=globalThis.litElementVersions)!==null&&te!==void 0?te:globalThis.litElementVersions=[]).push("3.2.0");var Ct=(()=>{let t=document.createElement("style"),e;try{document.head.appendChild(t),t.sheet.insertRule(":focus-visible { color: inherit }"),e=!0}catch{e=!1}finally{t.remove()}return e})(),st=ie(Ct?":focus-visible":":focus");var E=C`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;var oo=C`
  ${E}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button${st} {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label ::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text${st}:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    display: flex;
    align-items: center;
  }

  .button--caret .button__caret svg {
    width: 1em;
    height: 1em;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%) translateX(50%);
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    transform: translateY(-50%) translateX(-50%);
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-left: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.sl-button-group__button:not(.sl-button-group__button--focus, .sl-button-group__button--first, [variant='default']):not(:hover, :active, :focus))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`;var io=Object.defineProperty,cr=Object.defineProperties,ur=Object.getOwnPropertyDescriptor,dr=Object.getOwnPropertyDescriptors;var Mt=Object.getOwnPropertySymbols;var so=Object.prototype.hasOwnProperty,lo=Object.prototype.propertyIsEnumerable,ro=(t,e,o)=>e in t?io(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,$=(t,e)=>{for(var o in e||(e={}))so.call(e,o)&&ro(t,o,e[o]);if(Mt)for(var o of Mt(e))lo.call(e,o)&&ro(t,o,e[o]);return t},B=(t,e)=>cr(t,dr(e)),Rt=(t,e)=>{var o={};for(var r in t)so.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&Mt)for(var r of Mt(t))e.indexOf(r)<0&&lo.call(t,r)&&(o[r]=t[r]);return o};var a=(t,e,o,r)=>{for(var i=r>1?void 0:r?ur(e,o):e,s=t.length-1,l;s>=0;s--)(l=t[s])&&(i=(r?l(e,o,i):l(i))||i);return r&&i&&io(e,o,i),i};var pr=class extends Event{constructor(t){super("formdata"),this.formData=t}},hr=class extends FormData{constructor(t){var e=(...o)=>{super(...o)};t?(e(t),this.form=t,t.dispatchEvent(new pr(this))):e()}append(t,e){if(!this.form)return super.append(t,e);let o=this.form.elements[t];if(o||(o=document.createElement("input"),o.type="hidden",o.name=t,this.form.appendChild(o)),this.has(t)){let r=this.getAll(t),i=r.indexOf(o.value);i!==-1&&r.splice(i,1),r.push(e),this.set(t,r)}else super.append(t,e);o.value=e}};function mr(){let t=document.createElement("form"),e=!1;return document.body.append(t),t.addEventListener("submit",o=>{new FormData(o.target),o.preventDefault()}),t.addEventListener("formdata",()=>e=!0),t.dispatchEvent(new Event("submit",{cancelable:!0})),t.remove(),e}function no(){!window.FormData||mr()||(window.FormData=hr,window.addEventListener("submit",t=>{t.defaultPrevented||new FormData(t.target)}))}document.readyState==="complete"?no():window.addEventListener("DOMContentLoaded",()=>no());var At=new WeakMap,ht=class{constructor(t,e){(this.host=t).addController(this),this.options=$({form:o=>o.closest("form"),name:o=>o.name,value:o=>o.value,disabled:o=>o.disabled,reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0},e),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&(this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),At.has(this.form)||(At.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()))}hostDisconnected(){this.form&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),At.has(this.form)&&(this.form.reportValidity=At.get(this.form),At.delete(this.form)),this.form=void 0)}handleFormData(t){let e=this.options.disabled(this.host),o=this.options.name(this.host),r=this.options.value(this.host);!e&&typeof o=="string"&&typeof r<"u"&&(Array.isArray(r)?r.forEach(i=>{t.formData.append(o,i.toString())}):t.formData.append(o,r.toString()))}handleFormSubmit(t){let e=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&!e&&!o(this.host)&&(t.preventDefault(),t.stopImmediatePropagation())}reportFormValidity(){if(this.form&&!this.form.noValidate){let t=this.form.querySelectorAll("*");for(let e of t)if(typeof e.reportValidity=="function"&&!e.reportValidity())return!1}return!0}submit(t){if(this.form){let e=document.createElement("button");e.type="submit",e.style.position="absolute",e.style.width="0",e.style.height="0",e.style.clipPath="inset(50%)",e.style.overflow="hidden",e.style.whiteSpace="nowrap",t&&["formaction","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&e.setAttribute(o,t.getAttribute(o))}),this.form.append(e),e.click(),e.remove()}}};var le=new Set,fr=new MutationObserver(co),ne=new Map,ao=document.documentElement.dir||"ltr",mt=document.documentElement.lang||navigator.language,St;fr.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function br(...t){t.map(e=>{let o=e.$code.toLowerCase();ne.set(o,e),St||(St=e)}),co()}function gr(t,e,...o){let r=t.toLowerCase().slice(0,2),i=t.length>2?t.toLowerCase():"",s=ne.get(i),l=ne.get(r),n;if(s&&s[e])n=s[e];else if(l&&l[e])n=l[e];else if(St&&St[e])n=St[e];else return console.error(`No translation found for: ${e}`),e;return typeof n=="function"?n(...o):n}function vr(t,e,o){return e=new Date(e),new Intl.DateTimeFormat(t,o).format(e)}function yr(t,e,o){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(t,o).format(e)}function _r(t,e,o,r){return new Intl.RelativeTimeFormat(t,r).format(e,o)}function co(){ao=document.documentElement.dir||"ltr",mt=document.documentElement.lang||navigator.language,[...le.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}var J=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){le.add(this.host)}hostDisconnected(){le.delete(this.host)}dir(){return`${this.host.dir||ao}`.toLowerCase()}lang(){return`${this.host.lang||mt}`.toLowerCase()}term(t,...e){return gr(this.host.lang||mt,t,...e)}date(t,e){return vr(this.host.lang||mt,t,e)}number(t,e){return yr(this.host.lang||mt,t,e)}relativeTime(t,e,o){return _r(this.host.lang||mt,t,e,o)}},wr={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};br(wr);var po=Symbol.for(""),xr=t=>{var e,o;if(((e=t)===null||e===void 0?void 0:e.r)===po)return(o=t)===null||o===void 0?void 0:o._$litStatic$},ft=(t,...e)=>({_$litStatic$:e.reduce((o,r,i)=>o+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+t[i+1],t[0]),r:po}),uo=new Map,ho=t=>(e,...o)=>{let r=o.length,i,s,l=[],n=[],c,d=0,h=!1;for(;d<r;){for(c=e[d];d<r&&(s=o[d],(i=xr(s))!==void 0);)c+=i+e[++d],h=!0;n.push(s),l.push(c),d++}if(d===r&&l.push(e[r]),h){let p=l.join("$$lit$$");(e=uo.get(p))===void 0&&(l.raw=l,uo.set(p,e=l)),o=n}return t(e,...o)},bt=ho(x),$i=ho(Ye);var G=class{constructor(t,...e){this.slotNames=[],(this.host=t).addController(this),this.slotNames=e,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){let e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(t){let e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()}};function Bt(t){if(!t)return"";let e=t.assignedNodes({flatten:!0}),o="";return[...e].forEach(r=>{r.nodeType===Node.TEXT_NODE&&(o+=r.textContent)}),o}var H={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},lt=t=>(...e)=>({_$litDirective$:t,values:e}),gt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var I=lt(class extends gt{constructor(t){var e;if(super(t),t.type!==H.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var o,r;if(this.et===void 0){this.et=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(let s in e)e[s]&&!(!((o=this.st)===null||o===void 0)&&o.has(s))&&this.et.add(s);return this.render(e)}let i=t.element.classList;this.et.forEach(s=>{s in e||(i.remove(s),this.et.delete(s))});for(let s in e){let l=!!e[s];l===this.et.has(s)||((r=this.st)===null||r===void 0?void 0:r.has(s))||(l?(i.add(s),this.et.add(s)):(i.remove(s),this.et.delete(s)))}return R}});function v(t,e,o){let r=new CustomEvent(e,$({bubbles:!0,cancelable:!1,composed:!0,detail:{}},o));return t.dispatchEvent(r),r}function ae(t,e){return new Promise(o=>{function r(i){i.target===t&&(t.removeEventListener(e,r),o())}t.addEventListener(e,r)})}var b=t=>t??A;var T=t=>e=>typeof e=="function"?((o,r)=>(window.customElements.define(o,r),r))(t,e):((o,r)=>{let{kind:i,elements:s}=r;return{kind:i,elements:s,finisher(l){window.customElements.define(o,l)}}})(t,e),$r=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?B($({},e),{finisher(o){o.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function u(t){return(e,o)=>o!==void 0?((r,i,s)=>{i.constructor.createProperty(s,r)})(t,e,o):$r(t,e)}function V(t){return u(B($({},t),{state:!0}))}var kr=({finisher:t,descriptor:e})=>(o,r)=>{var i;if(r===void 0){let s=(i=o.originalKey)!==null&&i!==void 0?i:o.key,l=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(o.key)}:B($({},o),{key:s});return t!=null&&(l.finisher=function(n){t(n,s)}),l}{let s=o.constructor;e!==void 0&&Object.defineProperty(o,r,e(r)),t?.(s,r)}};function z(t,e){return kr({descriptor:o=>{let r={get(){var i,s;return(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(t))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){let i=typeof o=="symbol"?Symbol():"__"+o;r.get=function(){var s,l;return this[i]===void 0&&(this[i]=(l=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&l!==void 0?l:null),this[i]}}return r}})}var ce,Bi=((ce=window.HTMLSlotElement)===null||ce===void 0?void 0:ce.prototype.assignedElements)!=null?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter(o=>o.nodeType===Node.ELEMENT_NODE);var S=class extends k{constructor(){super(...arguments),this.formSubmitController=new ht(this,{form:t=>{if(t.hasAttribute("form")){let e=t.getRootNode(),o=t.getAttribute("form");return e.getElementById(o)}return t.closest("form")}}),this.hasSlotController=new G(this,"[default]","prefix","suffix"),this.localize=new J(this),this.hasFocus=!1,this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button"}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,v(this,"sl-blur")}handleFocus(){this.hasFocus=!0,v(this,"sl-focus")}handleClick(t){if(this.disabled||this.loading){t.preventDefault(),t.stopPropagation();return}this.type==="submit"&&this.formSubmitController.submit(this)}render(){let t=!!this.href,e=t?ft`a`:ft`button`;return bt`
      <${e}
        part="base"
        class=${I({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${b(t?void 0:this.disabled)}
        type=${b(t?void 0:this.type)}
        name=${b(t?void 0:this.name)}
        value=${b(t?void 0:this.value)}
        href=${b(t?this.href:void 0)}
        target=${b(t?this.target:void 0)}
        download=${b(t?this.download:void 0)}
        rel=${b(t&&this.target?"noreferrer noopener":void 0)}
        role=${b(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <span part="prefix" class="button__prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label" class="button__label">
          <slot></slot>
        </span>
        <span part="suffix" class="button__suffix">
          <slot name="suffix"></slot>
        </span>
        ${this.caret?bt`
                <span part="caret" class="button__caret">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              `:""}
        ${this.loading?bt`<sl-spinner></sl-spinner>`:""}
      </${e}>
    `}};S.styles=oo;a([z(".button")],S.prototype,"button",2);a([V()],S.prototype,"hasFocus",2);a([u({reflect:!0})],S.prototype,"variant",2);a([u({reflect:!0})],S.prototype,"size",2);a([u({type:Boolean,reflect:!0})],S.prototype,"caret",2);a([u({type:Boolean,reflect:!0})],S.prototype,"disabled",2);a([u({type:Boolean,reflect:!0})],S.prototype,"loading",2);a([u({type:Boolean,reflect:!0})],S.prototype,"outline",2);a([u({type:Boolean,reflect:!0})],S.prototype,"pill",2);a([u({type:Boolean,reflect:!0})],S.prototype,"circle",2);a([u()],S.prototype,"type",2);a([u()],S.prototype,"name",2);a([u()],S.prototype,"value",2);a([u()],S.prototype,"href",2);a([u()],S.prototype,"target",2);a([u()],S.prototype,"download",2);a([u()],S.prototype,"form",2);a([u({attribute:"formaction"})],S.prototype,"formAction",2);a([u({attribute:"formmethod"})],S.prototype,"formMethod",2);a([u({attribute:"formnovalidate",type:Boolean})],S.prototype,"formNoValidate",2);a([u({attribute:"formtarget"})],S.prototype,"formTarget",2);S=a([T("sl-button")],S);var mo=C`
  ${E}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
    mix-blend-mode: multiply;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`;var ue=class extends k{render(){return x`
      <svg part="base" class="spinner" role="status">
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};ue.styles=mo;ue=a([T("sl-spinner")],ue);var fo=C`
  ${E}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image ::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card__body {
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`;var Vt=class extends k{constructor(){super(...arguments),this.hasSlotController=new G(this,"footer","header","image")}render(){return x`
      <div
        part="base"
        class=${I({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <div part="image" class="card__image">
          <slot name="image"></slot>
        </div>

        <div part="header" class="card__header">
          <slot name="header"></slot>
        </div>

        <div part="body" class="card__body">
          <slot></slot>
        </div>

        <div part="footer" class="card__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `}};Vt.styles=fo;Vt=a([T("sl-card")],Vt);var Nt=C`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control_label {
    font-size: var(--sl-input-label-font-size-large);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
  }

  .form-control--has-help-text .form-control__help-text ::slotted(*) {
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }
`;var bo=C`
  ${E}
  ${Nt}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    padding-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    padding-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    padding-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    padding-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    padding-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    padding-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }
`;var{H:el}=eo,Cr=t=>t.strings===void 0,Ar={},Sr=(t,e=Ar)=>t._$AH=e,go=lt(class extends gt{constructor(t){if(super(t),t.type!==H.PROPERTY&&t.type!==H.ATTRIBUTE&&t.type!==H.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Cr(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===R||e===A)return e;let o=t.element,r=t.name;if(t.type===H.PROPERTY){if(e===o[r])return R}else if(t.type===H.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(r))return R}else if(t.type===H.ATTRIBUTE&&o.getAttribute(r)===e+"")return R;return Sr(t),e}});function O(t,e){let o=$({waitUntilFirstUpdate:!1},e);return(r,i)=>{let{update:s}=r;if(t in r){let l=t;r.update=function(n){if(n.has(l)){let c=n.get(l),d=this[l];c!==d&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[i](c,d)}s.call(this,n)}}}}var y=class extends k{constructor(){super(...arguments),this.formSubmitController=new ht(this),this.hasSlotController=new G(this,"help-text","label"),this.localize=new J(this),this.hasFocus=!1,this.isPasswordVisible=!1,this.type="text",this.size="medium",this.value="",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.togglePassword=!1,this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1}get valueAsDate(){var t,e;return(e=(t=this.input)==null?void 0:t.valueAsDate)!=null?e:null}set valueAsDate(t){this.input.valueAsDate=t,this.value=this.input.value}get valueAsNumber(){var t,e;return(e=(t=this.input)==null?void 0:t.valueAsNumber)!=null?e:parseFloat(this.value)}set valueAsNumber(t){this.input.valueAsNumber=t,this.value=this.input.value}firstUpdated(){this.invalid=!this.input.checkValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,r="preserve"){this.input.setRangeText(t,e,o,r),this.value!==this.input.value&&(this.value=this.input.value,v(this,"sl-input"),v(this,"sl-change"))}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,v(this,"sl-blur")}handleChange(){this.value=this.input.value,v(this,"sl-change")}handleClearClick(t){this.value="",v(this,"sl-clear"),v(this,"sl-input"),v(this,"sl-change"),this.input.focus(),t.stopPropagation()}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,v(this,"sl-focus")}handleInput(){this.value=this.input.value,v(this,"sl-input")}handleInvalid(){this.invalid=!0}handleKeyDown(t){let e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{t.defaultPrevented||this.formSubmitController.submit()})}handlePasswordToggle(){this.isPasswordVisible=!this.isPasswordVisible}handleValueChange(){this.invalid=!this.input.checkValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,r=this.helpText?!0:!!e,i=this.clearable&&!this.disabled&&!this.readonly&&this.value.length>0;return x`
      <div
        part="form-control"
        class=${I({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${I({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--invalid":this.invalid})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.isPasswordVisible?"text":this.type}
              name=${b(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${b(this.placeholder)}
              minlength=${b(this.minlength)}
              maxlength=${b(this.maxlength)}
              min=${b(this.min)}
              max=${b(this.max)}
              step=${b(this.step)}
              .value=${go(this.value)}
              autocapitalize=${b(this.autocapitalize)}
              autocomplete=${b(this.autocomplete)}
              autocorrect=${b(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${b(this.spellcheck)}
              pattern=${b(this.pattern)}
              enterkeyhint=${b(this.enterkeyhint)}
              inputmode=${b(this.inputmode)}
              aria-describedby="help-text"
              aria-invalid=${this.invalid?"true":"false"}
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${i?x`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.togglePassword&&!this.disabled?x`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.isPasswordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.isPasswordVisible?x`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:x`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};y.styles=bo;a([z(".input__control")],y.prototype,"input",2);a([V()],y.prototype,"hasFocus",2);a([V()],y.prototype,"isPasswordVisible",2);a([u({reflect:!0})],y.prototype,"type",2);a([u({reflect:!0})],y.prototype,"size",2);a([u()],y.prototype,"name",2);a([u()],y.prototype,"value",2);a([u({type:Boolean,reflect:!0})],y.prototype,"filled",2);a([u({type:Boolean,reflect:!0})],y.prototype,"pill",2);a([u()],y.prototype,"label",2);a([u({attribute:"help-text"})],y.prototype,"helpText",2);a([u({type:Boolean})],y.prototype,"clearable",2);a([u({attribute:"toggle-password",type:Boolean})],y.prototype,"togglePassword",2);a([u()],y.prototype,"placeholder",2);a([u({type:Boolean,reflect:!0})],y.prototype,"disabled",2);a([u({type:Boolean,reflect:!0})],y.prototype,"readonly",2);a([u({type:Number})],y.prototype,"minlength",2);a([u({type:Number})],y.prototype,"maxlength",2);a([u()],y.prototype,"min",2);a([u()],y.prototype,"max",2);a([u({type:Number})],y.prototype,"step",2);a([u()],y.prototype,"pattern",2);a([u({type:Boolean,reflect:!0})],y.prototype,"required",2);a([u({type:Boolean,reflect:!0})],y.prototype,"invalid",2);a([u()],y.prototype,"autocapitalize",2);a([u()],y.prototype,"autocorrect",2);a([u()],y.prototype,"autocomplete",2);a([u({type:Boolean})],y.prototype,"autofocus",2);a([u()],y.prototype,"enterkeyhint",2);a([u({type:Boolean})],y.prototype,"spellcheck",2);a([u()],y.prototype,"inputmode",2);a([O("disabled",{waitUntilFirstUpdate:!0})],y.prototype,"handleDisabledChange",1);a([O("value",{waitUntilFirstUpdate:!0})],y.prototype,"handleValueChange",1);y=a([T("sl-input")],y);var de="";function Et(t){de=t}function pe(){if(!de){let t=[...document.getElementsByTagName("script")],e=t.find(o=>o.hasAttribute("data-shoelace"));if(e)Et(e.getAttribute("data-shoelace"));else{let o=t.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src)),r="";o&&(r=o.getAttribute("src")),Et(r.split("/").slice(0,-1).join("/"))}}return de.replace(/\/$/,"")}var Er={name:"default",resolver:t=>`${pe()}/assets/icons/${t}.svg`},vo=Er;var yo={"check-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,x:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Tr={name:"system",resolver:t=>t in yo?`data:image/svg+xml,${encodeURIComponent(yo[t])}`:""},_o=Tr;var Lr=[vo,_o],he=[];function wo(t){he.push(t)}function xo(t){he=he.filter(e=>e!==t)}function me(t){return Lr.find(e=>e.name===t)}var fe=new Map;function $o(t,e="cors"){if(fe.has(t))return fe.get(t);let o=fetch(t,{mode:e}).then(async r=>({ok:r.ok,status:r.status,html:await r.text()}));return fe.set(t,o),o}var be=new Map;async function ko(t){if(be.has(t))return be.get(t);let e=await $o(t),o={ok:e.ok,status:e.status,svg:null};if(e.ok){let r=document.createElement("div");r.innerHTML=e.html;let i=r.firstElementChild;o.svg=i?.tagName.toLowerCase()==="svg"?i.outerHTML:""}return be.set(t,o),o}var Co=C`
  ${E}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    contain: strict;
    box-sizing: content-box !important;
  }

  .icon,
  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;var Ft=class extends gt{constructor(t){if(super(t),this.it=A,t.type!==H.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===A||t==null)return this.ft=void 0,this.it=t;if(t===R)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;let e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}};Ft.directiveName="unsafeHTML",Ft.resultType=1;var Ul=lt(Ft),ve=class extends Ft{};ve.directiveName="unsafeSVG",ve.resultType=2;var Pr=lt(ve),ge,K=class extends k{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){super.connectedCallback(),wo(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),xo(this)}getUrl(){let t=me(this.library);return this.name&&t?t.resolver(this.name):this.src}redraw(){this.setIcon()}async setIcon(){var t;let e=me(this.library),o=this.getUrl();if(ge||(ge=new DOMParser),o)try{let r=await ko(o);if(o!==this.getUrl())return;if(r.ok){let s=ge.parseFromString(r.svg,"text/html").body.querySelector("svg");s!==null?((t=e?.mutator)==null||t.call(e,s),this.svg=s.outerHTML,v(this,"sl-load")):(this.svg="",v(this,"sl-error"))}else this.svg="",v(this,"sl-error")}catch{v(this,"sl-error")}else this.svg.length>0&&(this.svg="")}handleChange(){this.setIcon()}render(){let t=typeof this.label=="string"&&this.label.length>0;return x` <div
      part="base"
      class="icon"
      role=${b(t?"img":void 0)}
      aria-label=${b(t?this.label:void 0)}
      aria-hidden=${b(t?void 0:"true")}
    >
      ${Pr(this.svg)}
    </div>`}};K.styles=Co;a([V()],K.prototype,"svg",2);a([u({reflect:!0})],K.prototype,"name",2);a([u()],K.prototype,"src",2);a([u()],K.prototype,"label",2);a([u({reflect:!0})],K.prototype,"library",2);a([O("name"),O("src"),O("library")],K.prototype,"setIcon",1);K=a([T("sl-icon")],K);var Ao=C`
  ${E}

  :host {
    display: block;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    color: var(--sl-color-neutral-400);
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix ::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix ::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:focus) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'])) .menu-item,
  :host(${st}:not(.sl-focus-invisible):not([aria-disabled='true'])) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }
`;var U=class extends k{constructor(){super(...arguments),this.checked=!1,this.value="",this.disabled=!1}firstUpdated(){this.setAttribute("role","menuitem")}getTextLabel(){return Bt(this.defaultSlot)}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleDefaultSlotChange(){let t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,v(this,"sl-label-change"))}render(){return x`
      <div
        part="base"
        class=${I({"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":!1})}
      >
        <span class="menu-item__check">
          <sl-icon name="check-lg" library="system" aria-hidden="true"></sl-icon>
        </span>

        <span part="prefix" class="menu-item__prefix">
          <slot name="prefix"></slot>
        </span>

        <span part="label" class="menu-item__label">
          <slot @slotchange=${this.handleDefaultSlotChange}></slot>
        </span>

        <span part="suffix" class="menu-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span class="menu-item__chevron">
          <sl-icon name="chevron-right" library="system" aria-hidden="true"></sl-icon>
        </span>
      </div>
    `}};U.styles=Ao;a([z("slot:not([name])")],U.prototype,"defaultSlot",2);a([z(".menu-item")],U.prototype,"menuItem",2);a([u({type:Boolean,reflect:!0})],U.prototype,"checked",2);a([u()],U.prototype,"value",2);a([u({type:Boolean,reflect:!0})],U.prototype,"disabled",2);a([O("checked")],U.prototype,"handleCheckedChange",1);a([O("disabled")],U.prototype,"handleDisabledChange",1);U=a([T("sl-menu-item")],U);var So=C`
  ${E}
  ${Nt}

  :host {
    display: block;
  }

  .select {
    display: block;
  }

  .select__control {
    display: inline-flex;
    align-items: center;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .select__menu {
    max-height: 50vh;
    overflow: auto;
  }

  /* Standard selects */
  .select--standard .select__control {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    color: var(--sl-input-color);
  }

  .select--standard:not(.select--disabled) .select__control:hover {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
    color: var(--sl-input-color-hover);
  }

  .select--standard.select--focused:not(.select--disabled) .select__control {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
    outline: none;
  }

  .select--standard.select--disabled .select__control {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  /* Filled selects */
  .select--filled .select__control {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__control {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--focused:not(.select--disabled) .select__control {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .select--filled.select--disabled .select__control {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--disabled .select__tags,
  .select--disabled .select__clear {
    pointer-events: none;
  }

  .select__prefix {
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__label {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    user-select: none;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .select__label::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .select__clear {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    width: 1.25em;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__suffix {
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__icon {
    flex: 0 0 auto;
    display: inline-flex;
    transition: var(--sl-transition-medium) transform ease;
  }

  .select--open .select__icon {
    transform: rotate(-180deg);
  }

  /* Placeholder */
  .select--placeholder-visible .select__label {
    color: var(--sl-input-placeholder-color);
  }

  .select--disabled.select--placeholder-visible .select__label {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Tags */
  .select__tags {
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: left;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  /* Hidden input (for form control validation to show) */
  .select__hidden-select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }

  /*
   * Size modifiers
   */

  /* Small */
  .select--small .select__control {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
  }

  .select--small .select__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__label {
    margin: 0 var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small .select__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small .select__icon {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small .select__tags {
    padding-bottom: 2px;
  }

  .select--small .select__tags sl-tag {
    padding-top: 2px;
  }

  .select--small .select__tags sl-tag:not(:last-of-type) {
    margin-inline-end: var(--sl-spacing-2x-small);
  }

  .select--small.select--has-tags .select__label {
    margin-inline-start: 0;
  }

  /* Medium */
  .select--medium .select__control {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
  }

  .select--medium .select__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__label {
    margin: 0 var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium .select__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium .select__icon {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium .select__tags {
    padding-bottom: 3px;
  }

  .select--medium .select__tags sl-tag {
    padding-top: 3px;
  }

  .select--medium .select__tags sl-tag:not(:last-of-type) {
    margin-inline-end: var(--sl-spacing-2x-small);
  }

  .select--medium.select--has-tags .select__label {
    margin-inline-start: 0;
  }

  /* Large */
  .select--large .select__control {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
  }

  .select--large .select__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__label {
    margin: 0 var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large .select__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large .select__icon {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large .select__tags {
    padding-bottom: 4px;
  }
  .select--large .select__tags sl-tag {
    padding-top: 4px;
  }

  .select--large .select__tags sl-tag:not(:last-of-type) {
    margin-inline-end: var(--sl-spacing-2x-small);
  }

  .select--large.select--has-tags .select__label {
    margin-inline-start: 0;
  }

  /*
   * Pill modifier
   */
  .select--pill.select--small .select__control {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__control {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__control {
    border-radius: var(--sl-input-height-large);
  }
`;var w=class extends k{constructor(){super(...arguments),this.formSubmitController=new ht(this),this.hasSlotController=new G(this,"help-text","label"),this.localize=new J(this),this.menuItems=[],this.hasFocus=!1,this.isOpen=!1,this.displayLabel="",this.displayTags=[],this.multiple=!1,this.maxTagsVisible=3,this.disabled=!1,this.name="",this.placeholder="",this.size="medium",this.hoist=!1,this.value="",this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.required=!1,this.clearable=!1,this.invalid=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.resizeMenu()),this.updateComplete.then(()=>{this.resizeObserver.observe(this),this.syncItemsFromValue()})}firstUpdated(){this.invalid=!this.input.checkValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.invalid=!this.input.checkValidity()}getValueAsArray(){return this.multiple&&this.value===""?[]:Array.isArray(this.value)?this.value:[this.value]}focus(t){this.control.focus(t)}blur(){this.control.blur()}handleBlur(){this.isOpen||(this.hasFocus=!1,v(this,"sl-blur"))}handleClearClick(t){t.stopPropagation(),this.value=this.multiple?[]:"",v(this,"sl-clear"),this.syncItemsFromValue()}handleDisabledChange(){this.disabled&&this.isOpen&&this.dropdown.hide(),this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus||(this.hasFocus=!0,v(this,"sl-focus"))}handleKeyDown(t){let e=t.target,o=this.menuItems[0],r=this.menuItems[this.menuItems.length-1];if(e.tagName.toLowerCase()!=="sl-tag"){if(t.key==="Tab"){this.isOpen&&this.dropdown.hide();return}if(["ArrowDown","ArrowUp"].includes(t.key)){if(t.preventDefault(),this.isOpen||this.dropdown.show(),t.key==="ArrowDown"){this.menu.setCurrentItem(o),o.focus();return}if(t.key==="ArrowUp"){this.menu.setCurrentItem(r),r.focus();return}}t.ctrlKey||t.metaKey||!this.isOpen&&t.key.length===1&&(t.stopPropagation(),t.preventDefault(),this.dropdown.show(),this.menu.typeToSelect(t))}}handleLabelClick(){this.focus()}handleMenuSelect(t){let e=t.detail.item;this.multiple?this.value=this.value.includes(e.value)?this.value.filter(o=>o!==e.value):[...this.value,e.value]:this.value=e.value,this.syncItemsFromValue()}handleMenuShow(){this.resizeMenu(),this.isOpen=!0}handleMenuHide(){this.isOpen=!1,this.control.focus()}handleMenuItemLabelChange(){if(!this.multiple){let t=this.menuItems.find(e=>e.value===this.value);this.displayLabel=t?t.getTextLabel():""}}handleMultipleChange(){var t;let e=this.getValueAsArray();this.value=this.multiple?e:(t=e[0])!=null?t:"",this.syncItemsFromValue()}async handleMenuSlotChange(){this.menuItems=[...this.querySelectorAll("sl-menu-item")];let t=[];this.menuItems.forEach(e=>{t.includes(e.value)&&console.error(`Duplicate value found in <sl-select> menu item: '${e.value}'`,e),t.push(e.value)}),await Promise.all(this.menuItems.map(e=>e.render)),this.syncItemsFromValue()}handleTagInteraction(t){t.composedPath().find(r=>r instanceof HTMLElement?r.classList.contains("tag__remove"):!1)&&t.stopPropagation()}async handleValueChange(){this.syncItemsFromValue(),await this.updateComplete,this.invalid=!this.input.checkValidity(),v(this,"sl-change")}resizeMenu(){this.menu.style.width=`${this.control.clientWidth}px`,this.dropdown.reposition()}syncItemsFromValue(){let t=this.getValueAsArray();if(this.menuItems.forEach(e=>e.checked=t.includes(e.value)),this.multiple){let e=this.menuItems.filter(o=>t.includes(o.value));if(this.displayLabel=e.length>0?e[0].getTextLabel():"",this.displayTags=e.map(o=>x`
          <sl-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button
            "
            variant="neutral"
            size=${this.size}
            ?pill=${this.pill}
            removable
            @click=${this.handleTagInteraction}
            @keydown=${this.handleTagInteraction}
            @sl-remove=${r=>{r.stopPropagation(),this.disabled||(o.checked=!1,this.syncValueFromItems())}}
          >
            ${o.getTextLabel()}
          </sl-tag>
        `),this.maxTagsVisible>0&&this.displayTags.length>this.maxTagsVisible){let o=this.displayTags.length;this.displayLabel="",this.displayTags=this.displayTags.slice(0,this.maxTagsVisible),this.displayTags.push(x`
          <sl-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button
            "
            variant="neutral"
            size=${this.size}
          >
            +${o-this.maxTagsVisible}
          </sl-tag>
        `)}}else{let e=this.menuItems.find(o=>o.value===t[0]);this.displayLabel=e?e.getTextLabel():"",this.displayTags=[]}}syncValueFromItems(){let e=this.menuItems.filter(o=>o.checked).map(o=>o.value);this.multiple?this.value=this.value.filter(o=>e.includes(o)):this.value=e.length>0?e[0]:""}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.multiple?this.value.length>0:this.value!=="",r=this.label?!0:!!t,i=this.helpText?!0:!!e,s=this.clearable&&!this.disabled&&o;return x`
      <div
        part="form-control"
        class=${I({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-dropdown
            part="base"
            .hoist=${this.hoist}
            .placement=${this.placement}
            .stayOpenOnSelect=${this.multiple}
            .containingElement=${this}
            ?disabled=${this.disabled}
            class=${I({select:!0,"select--open":this.isOpen,"select--empty":!this.value,"select--focused":this.hasFocus,"select--clearable":this.clearable,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--standard":!this.filled,"select--filled":this.filled,"select--has-tags":this.multiple&&this.displayTags.length>0,"select--placeholder-visible":this.displayLabel==="","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large","select--pill":this.pill,"select--invalid":this.invalid})}
            @sl-show=${this.handleMenuShow}
            @sl-hide=${this.handleMenuHide}
          >
            <div
              part="control"
              slot="trigger"
              id="input"
              class="select__control"
              role="combobox"
              aria-describedby="help-text"
              aria-haspopup="true"
              aria-disabled=${this.disabled?"true":"false"}
              aria-expanded=${this.isOpen?"true":"false"}
              aria-controls="menu"
              tabindex=${this.disabled?"-1":"0"}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            >
              <span part="prefix" class="select__prefix">
                <slot name="prefix"></slot>
              </span>

              <div part="display-label" class="select__label">
                ${this.displayTags.length>0?x` <span part="tags" class="select__tags"> ${this.displayTags} </span> `:this.displayLabel.length>0?this.displayLabel:this.placeholder}
              </div>

              ${s?x`
                    <button
                      part="clear-button"
                      class="select__clear"
                      @click=${this.handleClearClick}
                      aria-label=${this.localize.term("clearEntry")}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <span part="suffix" class="select__suffix">
                <slot name="suffix"></slot>
              </span>

              <span part="icon" class="select__icon" aria-hidden="true">
                <sl-icon name="chevron-down" library="system"></sl-icon>
              </span>

              <!-- The hidden input tricks the browser's built-in validation so it works as expected. We use an input
              instead of a select because, otherwise, iOS will show a list of options during validation. The focus
              handler is used to move focus to the primary control when it's marked invalid.  -->
              <input
                class="select__hidden-select"
                aria-hidden="true"
                ?required=${this.required}
                .value=${o?"1":""}
                tabindex="-1"
                @focus=${()=>this.control.focus()}
              />
            </div>

            <sl-menu part="menu" id="menu" class="select__menu" @sl-select=${this.handleMenuSelect}>
              <slot @slotchange=${this.handleMenuSlotChange} @sl-label-change=${this.handleMenuItemLabelChange}></slot>
            </sl-menu>
          </sl-dropdown>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};w.styles=So;a([z(".select")],w.prototype,"dropdown",2);a([z(".select__control")],w.prototype,"control",2);a([z(".select__hidden-select")],w.prototype,"input",2);a([z(".select__menu")],w.prototype,"menu",2);a([V()],w.prototype,"hasFocus",2);a([V()],w.prototype,"isOpen",2);a([V()],w.prototype,"displayLabel",2);a([V()],w.prototype,"displayTags",2);a([u({type:Boolean,reflect:!0})],w.prototype,"multiple",2);a([u({attribute:"max-tags-visible",type:Number})],w.prototype,"maxTagsVisible",2);a([u({type:Boolean,reflect:!0})],w.prototype,"disabled",2);a([u()],w.prototype,"name",2);a([u()],w.prototype,"placeholder",2);a([u()],w.prototype,"size",2);a([u({type:Boolean})],w.prototype,"hoist",2);a([u()],w.prototype,"value",2);a([u({type:Boolean,reflect:!0})],w.prototype,"filled",2);a([u({type:Boolean,reflect:!0})],w.prototype,"pill",2);a([u()],w.prototype,"label",2);a([u()],w.prototype,"placement",2);a([u({attribute:"help-text"})],w.prototype,"helpText",2);a([u({type:Boolean,reflect:!0})],w.prototype,"required",2);a([u({type:Boolean})],w.prototype,"clearable",2);a([u({type:Boolean,reflect:!0})],w.prototype,"invalid",2);a([O("disabled",{waitUntilFirstUpdate:!0})],w.prototype,"handleDisabledChange",1);a([O("multiple")],w.prototype,"handleMultipleChange",1);a([O("value",{waitUntilFirstUpdate:!0})],w.prototype,"handleValueChange",1);w=a([T("sl-select")],w);var Eo=C`
  ${E}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    cursor: default;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--small .tag__remove {
    margin-inline-start: var(--sl-spacing-2x-small);
    margin-right: calc(-1 * var(--sl-spacing-3x-small));
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    font-size: 1.4em;
    margin-inline-start: var(--sl-spacing-2x-small);
    margin-inline-end: calc(-1 * var(--sl-spacing-x-small));
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`;var nt=class extends k{constructor(){super(...arguments),this.localize=new J(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){v(this,"sl-remove")}render(){return x`
      <span
        part="base"
        class=${I({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <span part="content" class="tag__content">
          <slot></slot>
        </span>

        ${this.removable?x`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
              ></sl-icon-button>
            `:""}
      </span>
    `}};nt.styles=Eo;a([u({reflect:!0})],nt.prototype,"variant",2);a([u({reflect:!0})],nt.prototype,"size",2);a([u({type:Boolean,reflect:!0})],nt.prototype,"pill",2);a([u({type:Boolean})],nt.prototype,"removable",2);nt=a([T("sl-tag")],nt);var To=C`
  ${E}

  :host {
    display: block;
  }

  .menu {
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    background: var(--sl-panel-background-color);
    padding: var(--sl-spacing-x-small) 0;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`;var Tt=class extends k{constructor(){super(...arguments),this.typeToSelectString=""}firstUpdated(){this.setAttribute("role","menu")}getAllItems(t={includeDisabled:!0}){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.getAttribute("role")!=="menuitem"||!t.includeDisabled&&e.disabled))}getCurrentItem(){return this.getAllItems({includeDisabled:!1}).find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){let e=this.getAllItems({includeDisabled:!1}),o=t.disabled?e[0]:t;e.forEach(r=>{r.setAttribute("tabindex",r===o?"0":"-1")})}typeToSelect(t){var e;let o=this.getAllItems({includeDisabled:!1});clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?t.metaKey||t.ctrlKey?this.typeToSelectString="":this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase(),Ct||o.forEach(r=>r.classList.remove("sl-focus-invisible"));for(let r of o){let i=(e=r.shadowRoot)==null?void 0:e.querySelector("slot:not([name])");if(Bt(i).toLowerCase().trim().startsWith(this.typeToSelectString)){this.setCurrentItem(r),r.focus();break}}}handleClick(t){let o=t.target.closest("sl-menu-item");o?.disabled===!1&&v(this,"sl-select",{detail:{item:o}})}handleKeyUp(){Ct||this.getAllItems().forEach(e=>{e.classList.remove("sl-focus-invisible")})}handleKeyDown(t){if(t.key==="Enter"){let e=this.getCurrentItem();t.preventDefault(),e?.click()}if(t.key===" "&&t.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(t.key)){let e=this.getAllItems({includeDisabled:!1}),o=this.getCurrentItem(),r=o?e.indexOf(o):0;if(e.length>0){t.preventDefault(),t.key==="ArrowDown"?r++:t.key==="ArrowUp"?r--:t.key==="Home"?r=0:t.key==="End"&&(r=e.length-1),r<0&&(r=e.length-1),r>e.length-1&&(r=0),this.setCurrentItem(e[r]),e[r].focus();return}}this.typeToSelect(t)}handleMouseDown(t){let e=t.target;e.getAttribute("role")==="menuitem"&&(this.setCurrentItem(e),Ct||e.classList.add("sl-focus-invisible"))}handleSlotChange(){let t=this.getAllItems({includeDisabled:!1});t.length>0&&this.setCurrentItem(t[0])}render(){return x`
      <div
        part="base"
        class="menu"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @keyup=${this.handleKeyUp}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Tt.styles=To;a([z(".menu")],Tt.prototype,"menu",2);a([z("slot")],Tt.prototype,"defaultSlot",2);Tt=a([T("sl-menu")],Tt);function vt(t){return t.split("-")[0]}function Wt(t){return t.split("-")[1]}function Kt(t){return["top","bottom"].includes(vt(t))?"x":"y"}function Bo(t){return t==="y"?"height":"width"}function Lo(t,e,o){let{reference:r,floating:i}=t,s=r.x+r.width/2-i.width/2,l=r.y+r.height/2-i.height/2,n=Kt(e),c=Bo(n),d=r[c]/2-i[c]/2,h=n==="x",p;switch(vt(e)){case"top":p={x:s,y:r.y-i.height};break;case"bottom":p={x:s,y:r.y+r.height};break;case"right":p={x:r.x+r.width,y:l};break;case"left":p={x:r.x-i.width,y:l};break;default:p={x:r.x,y:r.y}}switch(Wt(e)){case"start":p[n]-=d*(o&&h?-1:1);break;case"end":p[n]+=d*(o&&h?-1:1)}return p}var zr=async(t,e,o)=>{let{placement:r="bottom",strategy:i="absolute",middleware:s=[],platform:l}=o,n=await(l.isRTL==null?void 0:l.isRTL(e)),c=await l.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:h}=Lo(c,r,n),p=r,m={};for(let g=0;g<s.length;g++){let{name:f,fn:_}=s[g],{x:L,y:P,data:F,reset:D}=await _({x:d,y:h,initialPlacement:r,placement:p,strategy:i,middlewareData:m,rects:c,platform:l,elements:{reference:t,floating:e}});d=L??d,h=P??h,m=B($({},m),{[f]:$($({},m[f]),F)}),D&&(typeof D=="object"&&(D.placement&&(p=D.placement),D.rects&&(c=D.rects===!0?await l.getElementRects({reference:t,floating:e,strategy:i}):D.rects),{x:d,y:h}=Lo(c,p,n)),g=-1)}return{x:d,y:h,placement:p,strategy:i,middlewareData:m}};function Dr(t){return typeof t!="number"?function(e){return $({top:0,right:0,bottom:0,left:0},e)}(t):{top:t,right:t,bottom:t,left:t}}function Ht(t){return B($({},t),{top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height})}async function _e(t,e){var o;e===void 0&&(e={});let{x:r,y:i,platform:s,rects:l,elements:n,strategy:c}=t,{boundary:d="clippingAncestors",rootBoundary:h="viewport",elementContext:p="floating",altBoundary:m=!1,padding:g=0}=e,f=Dr(g),_=n[m?p==="floating"?"reference":"floating":p],L=Ht(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(_)))==null||o?_:_.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(n.floating)),boundary:d,rootBoundary:h,strategy:c})),P=Ht(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:p==="floating"?B($({},l.floating),{x:r,y:i}):l.reference,offsetParent:await(s.getOffsetParent==null?void 0:s.getOffsetParent(n.floating)),strategy:c}):l[p]);return{top:L.top-P.top+f.top,bottom:P.bottom-L.bottom+f.bottom,left:L.left-P.left+f.left,right:P.right-L.right+f.right}}var Or=Math.min,at=Math.max;function Po(t,e,o){return at(t,Or(e,o))}var Ir={left:"right",right:"left",bottom:"top",top:"bottom"};function Ut(t){return t.replace(/left|right|bottom|top/g,e=>Ir[e])}function Mr(t,e,o){o===void 0&&(o=!1);let r=Wt(t),i=Kt(t),s=Bo(i),l=i==="x"?r===(o?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(l=Ut(l)),{main:l,cross:Ut(l)}}var Rr={start:"end",end:"start"};function zo(t){return t.replace(/start|end/g,e=>Rr[e])}var Br=["top","right","bottom","left"],Ua=Br.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]),Vo=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o;let{placement:r,middlewareData:i,rects:s,initialPlacement:l,platform:n,elements:c}=e,d=t,{mainAxis:h=!0,crossAxis:p=!0,fallbackPlacements:m,fallbackStrategy:g="bestFit",flipAlignment:f=!0}=d,_=Rt(d,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","flipAlignment"]),L=vt(r),P=m||(L===l||!f?[Ut(l)]:function(q){let ot=Ut(q);return[zo(q),ot,zo(ot)]}(l)),F=[l,...P],D=await _e(e,_),et=[],zt=((o=i.flip)==null?void 0:o.overflows)||[];if(h&&et.push(D[L]),p){let{main:q,cross:ot}=Mr(r,s,await(n.isRTL==null?void 0:n.isRTL(c.floating)));et.push(D[q],D[ot])}if(zt=[...zt,{placement:r,overflows:et}],!et.every(q=>q<=0)){var Ae,Se;let q=((Ae=(Se=i.flip)==null?void 0:Se.index)!=null?Ae:0)+1,ot=F[q];if(ot)return{data:{index:q,overflows:zt},reset:{placement:ot}};let Dt="bottom";switch(g){case"bestFit":{var Ee;let Te=(Ee=zt.map(Ot=>[Ot,Ot.overflows.filter(yt=>yt>0).reduce((yt,rr)=>yt+rr,0)]).sort((Ot,yt)=>Ot[1]-yt[1])[0])==null?void 0:Ee[0].placement;Te&&(Dt=Te);break}case"initialPlacement":Dt=l}if(r!==Dt)return{reset:{placement:Dt}}}return{}}}},No=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){let{x:o,y:r}=e,i=await async function(s,l){let{placement:n,platform:c,elements:d}=s,h=await(c.isRTL==null?void 0:c.isRTL(d.floating)),p=vt(n),m=Wt(n),g=Kt(n)==="x",f=["left","top"].includes(p)?-1:1,_=h&&g?-1:1,L=typeof l=="function"?l(s):l,{mainAxis:P,crossAxis:F,alignmentAxis:D}=typeof L=="number"?{mainAxis:L,crossAxis:0,alignmentAxis:null}:$({mainAxis:0,crossAxis:0,alignmentAxis:null},L);return m&&typeof D=="number"&&(F=m==="end"?-1*D:D),g?{x:F*_,y:P*f}:{x:P*f,y:F*_}}(e,t);return{x:o+i.x,y:r+i.y,data:i}}}};function Vr(t){return t==="x"?"y":"x"}var Fo=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:o,y:r,placement:i}=e,s=t,{mainAxis:l=!0,crossAxis:n=!1,limiter:c={fn:P=>{let{x:F,y:D}=P;return{x:F,y:D}}}}=s,d=Rt(s,["mainAxis","crossAxis","limiter"]),h={x:o,y:r},p=await _e(e,d),m=Kt(vt(i)),g=Vr(m),f=h[m],_=h[g];if(l){let P=m==="y"?"bottom":"right";f=Po(f+p[m==="y"?"top":"left"],f,f-p[P])}if(n){let P=g==="y"?"bottom":"right";_=Po(_+p[g==="y"?"top":"left"],_,_-p[P])}let L=c.fn(B($({},e),{[m]:f,[g]:_}));return B($({},L),{data:{x:L.x-o,y:L.y-r}})}}},Ho=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){let{placement:o,rects:r,platform:i,elements:s}=e,l=t,{apply:n}=l,c=Rt(l,["apply"]),d=await _e(e,c),h=vt(o),p=Wt(o),m,g;h==="top"||h==="bottom"?(m=h,g=p===(await(i.isRTL==null?void 0:i.isRTL(s.floating))?"start":"end")?"left":"right"):(g=h,m=p==="end"?"top":"bottom");let f=at(d.left,0),_=at(d.right,0),L=at(d.top,0),P=at(d.bottom,0),F={availableHeight:r.floating.height-(["left","right"].includes(o)?2*(L!==0||P!==0?L+P:at(d.top,d.bottom)):d[m]),availableWidth:r.floating.width-(["top","bottom"].includes(o)?2*(f!==0||_!==0?f+_:at(d.left,d.right)):d[g])},D=await i.getDimensions(s.floating);n?.($($({},e),F));let et=await i.getDimensions(s.floating);return D.width!==et.width||D.height!==et.height?{reset:{rects:!0}}:{}}}};function Uo(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function Z(t){if(t==null)return window;if(!Uo(t)){let e=t.ownerDocument;return e&&e.defaultView||window}return t}function Pt(t){return Z(t).getComputedStyle(t)}function Y(t){return Uo(t)?"":t?(t.nodeName||"").toLowerCase():""}function jo(){let t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(e=>e.brand+"/"+e.version).join(" "):navigator.userAgent}function j(t){return t instanceof Z(t).HTMLElement}function tt(t){return t instanceof Z(t).Element}function we(t){return typeof ShadowRoot>"u"?!1:t instanceof Z(t).ShadowRoot||t instanceof ShadowRoot}function Yt(t){let{overflow:e,overflowX:o,overflowY:r}=Pt(t);return/auto|scroll|overlay|hidden/.test(e+r+o)}function Nr(t){return["table","td","th"].includes(Y(t))}function Do(t){let e=/firefox/i.test(jo()),o=Pt(t);return o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].includes(o.willChange)||e&&o.willChange==="filter"||e&&!!o.filter&&o.filter!=="none"}function qo(){return!/^((?!chrome|android).)*safari/i.test(jo())}var Oo=Math.min,Lt=Math.max,jt=Math.round;function X(t,e,o){var r,i,s,l;e===void 0&&(e=!1),o===void 0&&(o=!1);let n=t.getBoundingClientRect(),c=1,d=1;e&&j(t)&&(c=t.offsetWidth>0&&jt(n.width)/t.offsetWidth||1,d=t.offsetHeight>0&&jt(n.height)/t.offsetHeight||1);let h=tt(t)?Z(t):window,p=!qo()&&o,m=(n.left+(p&&(r=(i=h.visualViewport)==null?void 0:i.offsetLeft)!=null?r:0))/c,g=(n.top+(p&&(s=(l=h.visualViewport)==null?void 0:l.offsetTop)!=null?s:0))/d,f=n.width/c,_=n.height/d;return{width:f,height:_,top:g,right:m+f,bottom:g+_,left:m,x:m,y:g}}function Q(t){return(e=t,(e instanceof Z(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function Xt(t){return tt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Wo(t){return X(Q(t)).left+Xt(t).scrollLeft}function Fr(t,e,o){let r=j(e),i=Q(e),s=X(t,r&&function(c){let d=X(c);return jt(d.width)!==c.offsetWidth||jt(d.height)!==c.offsetHeight}(e),o==="fixed"),l={scrollLeft:0,scrollTop:0},n={x:0,y:0};if(r||!r&&o!=="fixed")if((Y(e)!=="body"||Yt(i))&&(l=Xt(e)),j(e)){let c=X(e,!0);n.x=c.x+e.clientLeft,n.y=c.y+e.clientTop}else i&&(n.x=Wo(i));return{x:s.left+l.scrollLeft-n.x,y:s.top+l.scrollTop-n.y,width:s.width,height:s.height}}function Ko(t){return Y(t)==="html"?t:t.assignedSlot||t.parentNode||(we(t)?t.host:null)||Q(t)}function Io(t){return j(t)&&getComputedStyle(t).position!=="fixed"?t.offsetParent:null}function ye(t){let e=Z(t),o=Io(t);for(;o&&Nr(o)&&getComputedStyle(o).position==="static";)o=Io(o);return o&&(Y(o)==="html"||Y(o)==="body"&&getComputedStyle(o).position==="static"&&!Do(o))?e:o||function(r){let i=Ko(r);for(we(i)&&(i=i.host);j(i)&&!["html","body"].includes(Y(i));){if(Do(i))return i;i=i.parentNode}return null}(t)||e}function Mo(t){if(j(t))return{width:t.offsetWidth,height:t.offsetHeight};let e=X(t);return{width:e.width,height:e.height}}function Yo(t){let e=Ko(t);return["html","body","#document"].includes(Y(e))?t.ownerDocument.body:j(e)&&Yt(e)?e:Yo(e)}function qt(t,e){var o;e===void 0&&(e=[]);let r=Yo(t),i=r===((o=t.ownerDocument)==null?void 0:o.body),s=Z(r),l=i?[s].concat(s.visualViewport||[],Yt(r)?r:[]):r,n=e.concat(l);return i?n:n.concat(qt(l))}function Ro(t,e,o){return e==="viewport"?Ht(function(r,i){let s=Z(r),l=Q(r),n=s.visualViewport,c=l.clientWidth,d=l.clientHeight,h=0,p=0;if(n){c=n.width,d=n.height;let m=qo();(m||!m&&i==="fixed")&&(h=n.offsetLeft,p=n.offsetTop)}return{width:c,height:d,x:h,y:p}}(t,o)):tt(e)?function(r,i){let s=X(r,!1,i==="fixed"),l=s.top+r.clientTop,n=s.left+r.clientLeft;return{top:l,left:n,x:n,y:l,right:n+r.clientWidth,bottom:l+r.clientHeight,width:r.clientWidth,height:r.clientHeight}}(e,o):Ht(function(r){var i;let s=Q(r),l=Xt(r),n=(i=r.ownerDocument)==null?void 0:i.body,c=Lt(s.scrollWidth,s.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),d=Lt(s.scrollHeight,s.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),h=-l.scrollLeft+Wo(r),p=-l.scrollTop;return Pt(n||s).direction==="rtl"&&(h+=Lt(s.clientWidth,n?n.clientWidth:0)-c),{width:c,height:d,x:h,y:p}}(Q(t)))}function Hr(t){let e=qt(t),o=["absolute","fixed"].includes(Pt(t).position)&&j(t)?ye(t):t;return tt(o)?e.filter(r=>tt(r)&&function(i,s){let l=s.getRootNode==null?void 0:s.getRootNode();if(i.contains(s))return!0;if(l&&we(l)){let n=s;do{if(n&&i===n)return!0;n=n.parentNode||n.host}while(n)}return!1}(r,o)&&Y(r)!=="body"):[]}var Ur={getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:r,strategy:i}=t,s=[...o==="clippingAncestors"?Hr(e):[].concat(o),r],l=s[0],n=s.reduce((c,d)=>{let h=Ro(e,d,i);return c.top=Lt(h.top,c.top),c.right=Oo(h.right,c.right),c.bottom=Oo(h.bottom,c.bottom),c.left=Lt(h.left,c.left),c},Ro(e,l,i));return{width:n.right-n.left,height:n.bottom-n.top,x:n.left,y:n.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:o,strategy:r}=t,i=j(o),s=Q(o);if(o===s)return e;let l={scrollLeft:0,scrollTop:0},n={x:0,y:0};if((i||!i&&r!=="fixed")&&((Y(o)!=="body"||Yt(s))&&(l=Xt(o)),j(o))){let c=X(o,!0);n.x=c.x+o.clientLeft,n.y=c.y+o.clientTop}return B($({},e),{x:e.x-l.scrollLeft+n.x,y:e.y-l.scrollTop+n.y})},isElement:tt,getDimensions:Mo,getOffsetParent:ye,getDocumentElement:Q,getElementRects:t=>{let{reference:e,floating:o,strategy:r}=t;return{reference:Fr(e,ye(o),r),floating:B($({},Mo(o)),{x:0,y:0})}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>Pt(t).direction==="rtl"};function Xo(t,e,o,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:l=!0,animationFrame:n=!1}=r,c=i&&!n,d=s&&!n,h=c||d?[...tt(t)?qt(t):[],...qt(e)]:[];h.forEach(f=>{c&&f.addEventListener("scroll",o,{passive:!0}),d&&f.addEventListener("resize",o)});let p,m=null;l&&(m=new ResizeObserver(o),tt(t)&&!n&&m.observe(t),m.observe(e));let g=n?X(t):null;return n&&function f(){let _=X(t);!g||_.x===g.x&&_.y===g.y&&_.width===g.width&&_.height===g.height||o(),g=_,p=requestAnimationFrame(f)}(),l||o(),()=>{var f;h.forEach(_=>{c&&_.removeEventListener("scroll",o),d&&_.removeEventListener("resize",o)}),(f=m)==null||f.disconnect(),m=null,n&&cancelAnimationFrame(p)}}var Zo=(t,e,o)=>zr(t,e,$({platform:Ur},o));var Jo=C`
  ${E}

  :host {
    display: inline-block;
  }

  .dropdown {
    position: relative;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__positioner {
    position: absolute;
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    box-shadow: var(--sl-shadow-large);
    overflow: auto;
    overscroll-behavior: none;
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    pointer-events: all;
  }

  .dropdown__positioner[data-placement^='top'] .dropdown__panel {
    transform-origin: bottom;
  }

  .dropdown__positioner[data-placement^='bottom'] .dropdown__panel {
    transform-origin: top;
  }

  .dropdown__positioner[data-placement^='left'] .dropdown__panel {
    transform-origin: right;
  }

  .dropdown__positioner[data-placement^='right'] .dropdown__panel {
    transform-origin: left;
  }
`;function Go(t){let e=t.tagName.toLowerCase();return t.getAttribute("tabindex")==="-1"||t.hasAttribute("disabled")||t.hasAttribute("aria-disabled")&&t.getAttribute("aria-disabled")!=="false"||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||t.offsetParent===null||window.getComputedStyle(t).visibility==="hidden"?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(e)}function Qo(t){var e,o;let r=[];function i(n){n instanceof HTMLElement&&(r.push(n),n.shadowRoot!==null&&n.shadowRoot.mode==="open"&&i(n.shadowRoot)),[...n.querySelectorAll("*")].forEach(c=>i(c))}i(t);let s=(e=r.find(n=>Go(n)))!=null?e:null,l=(o=r.reverse().find(n=>Go(n)))!=null?o:null;return{start:s,end:l}}function jr(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}function tr(t,e,o="vertical",r="smooth"){let i=jr(t,e),s=i.top+e.scrollTop,l=i.left+e.scrollLeft,n=e.scrollLeft,c=e.scrollLeft+e.offsetWidth,d=e.scrollTop,h=e.scrollTop+e.offsetHeight;(o==="horizontal"||o==="both")&&(l<n?e.scrollTo({left:l,behavior:r}):l+t.clientWidth>c&&e.scrollTo({left:l-e.offsetWidth+t.clientWidth,behavior:r})),(o==="vertical"||o==="both")&&(s<d?e.scrollTo({top:s,behavior:r}):s+t.clientHeight>h&&e.scrollTo({top:s-e.offsetHeight+t.clientHeight,behavior:r}))}function xe(t,e,o){return new Promise(r=>{if(o?.duration===1/0)throw new Error("Promise-based animations must be finite.");let i=t.animate(e,B($({},o),{duration:qr()?0:o.duration}));i.addEventListener("cancel",r,{once:!0}),i.addEventListener("finish",r,{once:!0})})}function qr(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function $e(t){return Promise.all(t.getAnimations().map(e=>new Promise(o=>{let r=requestAnimationFrame(o);e.addEventListener("cancel",()=>r,{once:!0}),e.addEventListener("finish",()=>r,{once:!0}),e.cancel()})))}var er=new Map,Wr=new WeakMap;function Kr(t){return t??{keyframes:[],options:{duration:0}}}function ke(t,e){er.set(t,Kr(e))}function Ce(t,e){let o=Wr.get(t);if(o?.[e])return o[e];let r=er.get(e);return r||{keyframes:[],options:{duration:0}}}var M=class extends k{constructor(){super(...arguments),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleMenuItemActivate=this.handleMenuItemActivate.bind(this),this.handlePanelSelect=this.handlePanelSelect.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.containingElement||(this.containingElement=this)}async firstUpdated(){this.panel.hidden=!this.open,this.open&&(await this.updateComplete,this.addOpenListeners(),this.startPositioner())}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide(),this.stopPositioner()}focusOnTrigger(){let e=this.trigger.querySelector("slot").assignedElements({flatten:!0})[0];typeof e?.focus=="function"&&e.focus()}getMenu(){return this.panel.querySelector("slot").assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleDocumentKeyDown(t){var e;if(t.key==="Escape"){this.hide(),this.focusOnTrigger();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var o,r,i;let s=((o=this.containingElement)==null?void 0:o.getRootNode())instanceof ShadowRoot?(i=(r=document.activeElement)==null?void 0:r.shadowRoot)==null?void 0:i.activeElement:document.activeElement;(!this.containingElement||s?.closest(this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}}handleDocumentMouseDown(t){let e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()}handleMenuItemActivate(t){let e=t.target;tr(e,this.panel)}handlePanelSelect(t){let e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}handlePopoverOptionsChange(){this.updatePositioner()}handleTriggerClick(){this.open?this.hide():this.show()}handleTriggerKeyDown(t){if(t.key==="Escape"){this.focusOnTrigger(),this.hide();return}if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}let e=this.getMenu();if(e){let o=e.defaultSlot.assignedElements({flatten:!0}),r=o[0],i=o[o.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||this.show(),o.length>0&&requestAnimationFrame(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(r),r.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(i),i.focus())}));let s=["Tab","Shift","Meta","Ctrl","Alt"];this.open&&!s.includes(t.key)&&e.typeToSelect(t)}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){let o=this.trigger.querySelector("slot").assignedElements({flatten:!0}).find(i=>Qo(i).start),r;if(o){switch(o.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":r=o.button;break;default:r=o}r.setAttribute("aria-haspopup","true"),r.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,ae(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,ae(this,"sl-after-hide")}reposition(){this.updatePositioner()}addOpenListeners(){this.panel.addEventListener("sl-activate",this.handleMenuItemActivate),this.panel.addEventListener("sl-select",this.handlePanelSelect),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel.removeEventListener("sl-activate",this.handleMenuItemActivate),this.panel.removeEventListener("sl-select",this.handlePanelSelect),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){v(this,"sl-show"),this.addOpenListeners(),await $e(this),this.startPositioner(),this.panel.hidden=!1;let{keyframes:t,options:e}=Ce(this,"dropdown.show");await xe(this.panel,t,e),v(this,"sl-after-show")}else{v(this,"sl-hide"),this.removeOpenListeners(),await $e(this);let{keyframes:t,options:e}=Ce(this,"dropdown.hide");await xe(this.panel,t,e),this.panel.hidden=!0,this.stopPositioner(),v(this,"sl-after-hide")}}startPositioner(){this.stopPositioner(),this.updatePositioner(),this.positionerCleanup=Xo(this.trigger,this.positioner,this.updatePositioner.bind(this))}updatePositioner(){!this.open||!this.trigger||!this.positioner||Zo(this.trigger,this.positioner,{placement:this.placement,middleware:[No({mainAxis:this.distance,crossAxis:this.skidding}),Vo(),Fo(),Ho({apply:({availableWidth:t,availableHeight:e})=>{Object.assign(this.panel.style,{maxWidth:`${t}px`,maxHeight:`${e}px`})}})],strategy:this.hoist?"fixed":"absolute"}).then(({x:t,y:e,placement:o})=>{this.positioner.setAttribute("data-placement",o),Object.assign(this.positioner.style,{position:this.hoist?"fixed":"absolute",left:`${t}px`,top:`${e}px`})})}stopPositioner(){this.positionerCleanup&&(this.positionerCleanup(),this.positionerCleanup=void 0,this.positioner.removeAttribute("data-placement"))}render(){return x`
      <div
        part="base"
        id="dropdown"
        class=${I({dropdown:!0,"dropdown--open":this.open})}
      >
        <span
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        >
          <slot name="trigger" @slotchange=${this.handleTriggerSlotChange}></slot>
        </span>

        <!-- Position the panel with a wrapper since the popover makes use of translate. This let's us add animations
        on the panel without interfering with the position. -->
        <div class="dropdown__positioner">
          <div
            part="panel"
            class="dropdown__panel"
            aria-hidden=${this.open?"false":"true"}
            aria-labelledby="dropdown"
          >
            <slot></slot>
          </div>
        </div>
      </div>
    `}};M.styles=Jo;a([z(".dropdown__trigger")],M.prototype,"trigger",2);a([z(".dropdown__panel")],M.prototype,"panel",2);a([z(".dropdown__positioner")],M.prototype,"positioner",2);a([u({type:Boolean,reflect:!0})],M.prototype,"open",2);a([u({reflect:!0})],M.prototype,"placement",2);a([u({type:Boolean,reflect:!0})],M.prototype,"disabled",2);a([u({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],M.prototype,"stayOpenOnSelect",2);a([u({attribute:!1})],M.prototype,"containingElement",2);a([u({type:Number})],M.prototype,"distance",2);a([u({type:Number})],M.prototype,"skidding",2);a([u({type:Boolean})],M.prototype,"hoist",2);a([O("distance"),O("hoist"),O("placement"),O("skidding")],M.prototype,"handlePopoverOptionsChange",1);a([O("open",{waitUntilFirstUpdate:!0})],M.prototype,"handleOpenChange",1);M=a([T("sl-dropdown")],M);ke("dropdown.show",{keyframes:[{opacity:0,transform:"scale(0.9)"},{opacity:1,transform:"scale(1)"}],options:{duration:100,easing:"ease"}});ke("dropdown.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.9)"}],options:{duration:100,easing:"ease"}});var or=C`
  ${E}

  :host {
    display: inline-block;
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button${st} {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;var N=class extends k{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,v(this,"sl-blur")}handleFocus(){this.hasFocus=!0,v(this,"sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}render(){let t=!!this.href,e=t?ft`a`:ft`button`;return bt`
      <${e}
        part="base"
        class=${I({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${b(t?void 0:this.disabled)}
        type=${b(t?void 0:"button")}
        href=${b(t?this.href:void 0)}
        target=${b(t?this.target:void 0)}
        download=${b(t?this.download:void 0)}
        rel=${b(t&&this.target?"noreferrer noopener":void 0)}
        role=${b(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${b(this.name)}
          library=${b(this.library)}
          src=${b(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};N.styles=or;a([V()],N.prototype,"hasFocus",2);a([z(".icon-button")],N.prototype,"button",2);a([u()],N.prototype,"name",2);a([u()],N.prototype,"library",2);a([u()],N.prototype,"src",2);a([u()],N.prototype,"href",2);a([u()],N.prototype,"target",2);a([u()],N.prototype,"download",2);a([u()],N.prototype,"label",2);a([u({type:Boolean,reflect:!0})],N.prototype,"disabled",2);N=a([T("sl-icon-button")],N);Et(".");})();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
