(function(){"use strict";var yn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ke(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var tt={exports:{}};tt.exports,function(s,_){var T=200,g="Expected a function",c="__lodash_hash_undefined__",x=1,u=2,y=1/0,C=9007199254740991,E="[object Arguments]",N="[object Array]",W="[object Boolean]",B="[object Date]",Z="[object Error]",nn="[object Function]",En="[object GeneratorFunction]",l="[object Map]",w="[object Number]",h="[object Object]",M="[object Promise]",P="[object RegExp]",S="[object Set]",z="[object String]",rn="[object Symbol]",K="[object WeakMap]",j="[object ArrayBuffer]",Q="[object DataView]",ot="[object Float32Array]",st="[object Float64Array]",ft="[object Int8Array]",ut="[object Int16Array]",lt="[object Int32Array]",ct="[object Uint8Array]",pt="[object Uint8ClampedArray]",dt="[object Uint16Array]",gt="[object Uint32Array]",_t=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ht=/^\w*$/,yt=/^\./,vt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,wt=/[\\^$.*+?()[\]{}|]/g,At=/\\(\\)?/g,Tt=/^\[object .+?Constructor\]$/,bt=/^(?:0|[1-9]\d*)$/,f={};f[ot]=f[st]=f[ft]=f[ut]=f[lt]=f[ct]=f[pt]=f[dt]=f[gt]=!0,f[E]=f[N]=f[j]=f[W]=f[Q]=f[B]=f[Z]=f[nn]=f[l]=f[w]=f[h]=f[P]=f[S]=f[z]=f[K]=!1;var Mn=typeof yn=="object"&&yn&&yn.Object===Object&&yn,mt=typeof self=="object"&&self&&self.Object===Object&&self,U=Mn||mt||Function("return this")(),Ln=_&&!_.nodeType&&_,Dn=Ln&&!0&&s&&!s.nodeType&&s,xt=Dn&&Dn.exports===Ln,Rn=xt&&Mn.process,Gn=function(){try{return Rn&&Rn.binding("util")}catch{}}(),Hn=Gn&&Gn.isTypedArray;function St(n,t){for(var e=-1,r=n?n.length:0;++e<r;)if(t(n[e],e,n))return!0;return!1}function Ct(n){return function(t){return t?.[n]}}function Ot(n,t){for(var e=-1,r=Array(n);++e<n;)r[e]=t(e);return r}function It(n){return function(t){return n(t)}}function Et(n,t){return n?.[t]}function wn(n){var t=!1;if(n!=null&&typeof n.toString!="function")try{t=!!(n+"")}catch{}return t}function Pt(n){var t=-1,e=Array(n.size);return n.forEach(function(r,a){e[++t]=[a,r]}),e}function Mt(n,t){return function(e){return n(t(e))}}function Lt(n){var t=-1,e=Array(n.size);return n.forEach(function(r){e[++t]=r}),e}var Dt=Array.prototype,Rt=Function.prototype,an=Object.prototype,An=U["__core-js_shared__"],Nn=function(){var n=/[^.]+$/.exec(An&&An.keys&&An.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Un=Rt.toString,L=an.hasOwnProperty,V=an.toString,Gt=RegExp("^"+Un.call(L).replace(wt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),$n=U.Symbol,Fn=U.Uint8Array,Ht=an.propertyIsEnumerable,Nt=Dt.splice,Ut=Mt(Object.keys,Object),Tn=k(U,"DataView"),tn=k(U,"Map"),bn=k(U,"Promise"),mn=k(U,"Set"),xn=k(U,"WeakMap"),en=k(Object,"create"),$t=Y(Tn),Ft=Y(tn),Bt=Y(bn),Kt=Y(mn),Xt=Y(xn),on=$n?$n.prototype:void 0,Sn=on?on.valueOf:void 0,Bn=on?on.toString:void 0;function X(n){var t=-1,e=n?n.length:0;for(this.clear();++t<e;){var r=n[t];this.set(r[0],r[1])}}function Yt(){this.__data__=en?en(null):{}}function qt(n){return this.has(n)&&delete this.__data__[n]}function Jt(n){var t=this.__data__;if(en){var e=t[n];return e===c?void 0:e}return L.call(t,n)?t[n]:void 0}function Wt(n){var t=this.__data__;return en?t[n]!==void 0:L.call(t,n)}function Zt(n,t){var e=this.__data__;return e[n]=en&&t===void 0?c:t,this}X.prototype.clear=Yt,X.prototype.delete=qt,X.prototype.get=Jt,X.prototype.has=Wt,X.prototype.set=Zt;function D(n){var t=-1,e=n?n.length:0;for(this.clear();++t<e;){var r=n[t];this.set(r[0],r[1])}}function Qt(){this.__data__=[]}function zt(n){var t=this.__data__,e=fn(t,n);if(e<0)return!1;var r=t.length-1;return e==r?t.pop():Nt.call(t,e,1),!0}function jt(n){var t=this.__data__,e=fn(t,n);return e<0?void 0:t[e][1]}function Vt(n){return fn(this.__data__,n)>-1}function kt(n,t){var e=this.__data__,r=fn(e,n);return r<0?e.push([n,t]):e[r][1]=t,this}D.prototype.clear=Qt,D.prototype.delete=zt,D.prototype.get=jt,D.prototype.has=Vt,D.prototype.set=kt;function R(n){var t=-1,e=n?n.length:0;for(this.clear();++t<e;){var r=n[t];this.set(r[0],r[1])}}function ne(){this.__data__={hash:new X,map:new(tn||D),string:new X}}function te(n){return un(this,n).delete(n)}function ee(n){return un(this,n).get(n)}function re(n){return un(this,n).has(n)}function ie(n,t){return un(this,n).set(n,t),this}R.prototype.clear=ne,R.prototype.delete=te,R.prototype.get=ee,R.prototype.has=re,R.prototype.set=ie;function sn(n){var t=-1,e=n?n.length:0;for(this.__data__=new R;++t<e;)this.add(n[t])}function ae(n){return this.__data__.set(n,c),this}function oe(n){return this.__data__.has(n)}sn.prototype.add=sn.prototype.push=ae,sn.prototype.has=oe;function G(n){this.__data__=new D(n)}function se(){this.__data__=new D}function fe(n){return this.__data__.delete(n)}function ue(n){return this.__data__.get(n)}function le(n){return this.__data__.has(n)}function ce(n,t){var e=this.__data__;if(e instanceof D){var r=e.__data__;if(!tn||r.length<T-1)return r.push([n,t]),this;e=this.__data__=new R(r)}return e.set(n,t),this}G.prototype.clear=se,G.prototype.delete=fe,G.prototype.get=ue,G.prototype.has=le,G.prototype.set=ce;function pe(n,t){var e=q(n)||jn(n)?Ot(n.length,String):[],r=e.length,a=!!r;for(var i in n)L.call(n,i)&&!(a&&(i=="length"||Wn(i,r)))&&e.push(i);return e}function fn(n,t){for(var e=n.length;e--;)if(zn(n[e][0],t))return e;return-1}function de(n,t,e){for(var r=-1,a=n.length;++r<a;){var i=n[r],o=t(i);if(o!=null&&(d===void 0?o===o&&!gn(o):e(o,d)))var d=o,p=i}return p}function Kn(n,t){t=ln(t,n)?[t]:qn(t);for(var e=0,r=t.length;n!=null&&e<r;)n=n[cn(t[e++])];return e&&e==r?n:void 0}function ge(n){return V.call(n)}function _e(n,t){return n>t}function Xn(n,t){return n!=null&&t in Object(n)}function Yn(n,t,e,r,a){return n===t?!0:n==null||t==null||!pn(n)&&!dn(t)?n!==n&&t!==t:he(n,t,Yn,e,r,a)}function he(n,t,e,r,a,i){var o=q(n),d=q(t),p=N,v=N;o||(p=$(n),p=p==E?h:p),d||(v=$(t),v=v==E?h:v);var b=p==h&&!wn(n),m=v==h&&!wn(t),A=p==v;if(A&&!b)return i||(i=new G),o||Ge(n)?Jn(n,t,e,r,a,i):Ce(n,t,p,e,r,a,i);if(!(a&u)){var O=b&&L.call(n,"__wrapped__"),I=m&&L.call(t,"__wrapped__");if(O||I){var F=O?n.value():n,H=I?t.value():t;return i||(i=new G),e(F,H,r,a,i)}}return A?(i||(i=new G),Oe(n,t,e,r,a,i)):!1}function ye(n,t,e,r){var a=e.length,i=a;if(n==null)return!i;for(n=Object(n);a--;){var o=e[a];if(o[2]?o[1]!==n[o[0]]:!(o[0]in n))return!1}for(;++a<i;){o=e[a];var d=o[0],p=n[d],v=o[1];if(o[2]){if(p===void 0&&!(d in n))return!1}else{var b=new G,m;if(!(m===void 0?Yn(v,p,r,x|u,b):m))return!1}}return!0}function ve(n){if(!pn(n)||Me(n))return!1;var t=kn(n)||wn(n)?Gt:Tt;return t.test(Y(n))}function we(n){return dn(n)&&On(n.length)&&!!f[V.call(n)]}function Ae(n){return typeof n=="function"?n:n==null?$e:typeof n=="object"?q(n)?me(n[0],n[1]):be(n):Fe(n)}function Te(n){if(!Le(n))return Ut(n);var t=[];for(var e in Object(n))L.call(n,e)&&e!="constructor"&&t.push(e);return t}function be(n){var t=Ie(n);return t.length==1&&t[0][2]?Qn(t[0][0],t[0][1]):function(e){return e===n||ye(e,n,t)}}function me(n,t){return ln(n)&&Zn(t)?Qn(cn(n),t):function(e){var r=Ne(e,n);return r===void 0&&r===t?Ue(e,n):Yn(t,r,void 0,x|u)}}function xe(n){return function(t){return Kn(t,n)}}function Se(n){if(typeof n=="string")return n;if(gn(n))return Bn?Bn.call(n):"";var t=n+"";return t=="0"&&1/n==-y?"-0":t}function qn(n){return q(n)?n:De(n)}function Jn(n,t,e,r,a,i){var o=a&u,d=n.length,p=t.length;if(d!=p&&!(o&&p>d))return!1;var v=i.get(n);if(v&&i.get(t))return v==t;var b=-1,m=!0,A=a&x?new sn:void 0;for(i.set(n,t),i.set(t,n);++b<d;){var O=n[b],I=t[b];if(r)var F=o?r(I,O,b,t,n,i):r(O,I,b,n,t,i);if(F!==void 0){if(F)continue;m=!1;break}if(A){if(!St(t,function(H,J){if(!A.has(J)&&(O===H||e(O,H,r,a,i)))return A.add(J)})){m=!1;break}}else if(!(O===I||e(O,I,r,a,i))){m=!1;break}}return i.delete(n),i.delete(t),m}function Ce(n,t,e,r,a,i,o){switch(e){case Q:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer,t=t.buffer;case j:return!(n.byteLength!=t.byteLength||!r(new Fn(n),new Fn(t)));case W:case B:case w:return zn(+n,+t);case Z:return n.name==t.name&&n.message==t.message;case P:case z:return n==t+"";case l:var d=Pt;case S:var p=i&u;if(d||(d=Lt),n.size!=t.size&&!p)return!1;var v=o.get(n);if(v)return v==t;i|=x,o.set(n,t);var b=Jn(d(n),d(t),r,a,i,o);return o.delete(n),b;case rn:if(Sn)return Sn.call(n)==Sn.call(t)}return!1}function Oe(n,t,e,r,a,i){var o=a&u,d=In(n),p=d.length,v=In(t),b=v.length;if(p!=b&&!o)return!1;for(var m=p;m--;){var A=d[m];if(!(o?A in t:L.call(t,A)))return!1}var O=i.get(n);if(O&&i.get(t))return O==t;var I=!0;i.set(n,t),i.set(t,n);for(var F=o;++m<p;){A=d[m];var H=n[A],J=t[A];if(r)var nt=o?r(J,H,A,t,n,i):r(H,J,A,n,t,i);if(!(nt===void 0?H===J||e(H,J,r,a,i):nt)){I=!1;break}F||(F=A=="constructor")}if(I&&!F){var _n=n.constructor,hn=t.constructor;_n!=hn&&"constructor"in n&&"constructor"in t&&!(typeof _n=="function"&&_n instanceof _n&&typeof hn=="function"&&hn instanceof hn)&&(I=!1)}return i.delete(n),i.delete(t),I}function un(n,t){var e=n.__data__;return Pe(t)?e[typeof t=="string"?"string":"hash"]:e.map}function Ie(n){for(var t=In(n),e=t.length;e--;){var r=t[e],a=n[r];t[e]=[r,a,Zn(a)]}return t}function k(n,t){var e=Et(n,t);return ve(e)?e:void 0}var $=ge;(Tn&&$(new Tn(new ArrayBuffer(1)))!=Q||tn&&$(new tn)!=l||bn&&$(bn.resolve())!=M||mn&&$(new mn)!=S||xn&&$(new xn)!=K)&&($=function(n){var t=V.call(n),e=t==h?n.constructor:void 0,r=e?Y(e):void 0;if(r)switch(r){case $t:return Q;case Ft:return l;case Bt:return M;case Kt:return S;case Xt:return K}return t});function Ee(n,t,e){t=ln(t,n)?[t]:qn(t);for(var r,a=-1,o=t.length;++a<o;){var i=cn(t[a]);if(!(r=n!=null&&e(n,i)))break;n=n[i]}if(r)return r;var o=n?n.length:0;return!!o&&On(o)&&Wn(i,o)&&(q(n)||jn(n))}function Wn(n,t){return t=t??C,!!t&&(typeof n=="number"||bt.test(n))&&n>-1&&n%1==0&&n<t}function ln(n,t){if(q(n))return!1;var e=typeof n;return e=="number"||e=="symbol"||e=="boolean"||n==null||gn(n)?!0:ht.test(n)||!_t.test(n)||t!=null&&n in Object(t)}function Pe(n){var t=typeof n;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?n!=="__proto__":n===null}function Me(n){return!!Nn&&Nn in n}function Le(n){var t=n&&n.constructor,e=typeof t=="function"&&t.prototype||an;return n===e}function Zn(n){return n===n&&!pn(n)}function Qn(n,t){return function(e){return e==null?!1:e[n]===t&&(t!==void 0||n in Object(e))}}var De=Cn(function(n){n=He(n);var t=[];return yt.test(n)&&t.push(""),n.replace(vt,function(e,r,a,i){t.push(a?i.replace(At,"$1"):r||e)}),t});function cn(n){if(typeof n=="string"||gn(n))return n;var t=n+"";return t=="0"&&1/n==-y?"-0":t}function Y(n){if(n!=null){try{return Un.call(n)}catch{}try{return n+""}catch{}}return""}function Cn(n,t){if(typeof n!="function"||t&&typeof t!="function")throw new TypeError(g);var e=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=e.cache;if(i.has(a))return i.get(a);var o=n.apply(this,r);return e.cache=i.set(a,o),o};return e.cache=new(Cn.Cache||R),e}Cn.Cache=R;function zn(n,t){return n===t||n!==n&&t!==t}function jn(n){return Re(n)&&L.call(n,"callee")&&(!Ht.call(n,"callee")||V.call(n)==E)}var q=Array.isArray;function Vn(n){return n!=null&&On(n.length)&&!kn(n)}function Re(n){return dn(n)&&Vn(n)}function kn(n){var t=pn(n)?V.call(n):"";return t==nn||t==En}function On(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=C}function pn(n){var t=typeof n;return!!n&&(t=="object"||t=="function")}function dn(n){return!!n&&typeof n=="object"}function gn(n){return typeof n=="symbol"||dn(n)&&V.call(n)==rn}var Ge=Hn?It(Hn):we;function He(n){return n==null?"":Se(n)}function Ne(n,t,e){var r=n==null?void 0:Kn(n,t);return r===void 0?e:r}function Ue(n,t){return n!=null&&Ee(n,t,Xn)}function In(n){return Vn(n)?pe(n):Te(n)}function $e(n){return n}function Fe(n){return ln(n)?Ct(cn(n)):xe(n)}function Be(n,t){return n&&n.length?de(n,Ae(t),_e):void 0}s.exports=Be}(tt,tt.exports);var Xe=tt.exports,Ye=Ke(Xe);function Pn(s){return s[Math.random()*s.length|0]??null}const et={C:[[0,1]],H:[[0,1],[1,0],[0,-1],[-1,0],[1,1],[-1,1]],G:[[0,1],[1,0],[0,-1],[-1,0]],E:[[1,1],[-1,1],[1,-1],[-1,-1]],L:[[0,1],[1,0],[0,-1],[-1,0],[1,1],[-1,1],[1,-1],[-1,-1]]};var rt={exports:{}};rt.exports,function(s,_){var T=200,g="Expected a function",c="__lodash_hash_undefined__",x=1,u=2,y=1/0,C=9007199254740991,E="[object Arguments]",N="[object Array]",W="[object Boolean]",B="[object Date]",Z="[object Error]",nn="[object Function]",En="[object GeneratorFunction]",l="[object Map]",w="[object Number]",h="[object Object]",M="[object Promise]",P="[object RegExp]",S="[object Set]",z="[object String]",rn="[object Symbol]",K="[object WeakMap]",j="[object ArrayBuffer]",Q="[object DataView]",ot="[object Float32Array]",st="[object Float64Array]",ft="[object Int8Array]",ut="[object Int16Array]",lt="[object Int32Array]",ct="[object Uint8Array]",pt="[object Uint8ClampedArray]",dt="[object Uint16Array]",gt="[object Uint32Array]",_t=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ht=/^\w*$/,yt=/^\./,vt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,wt=/[\\^$.*+?()[\]{}|]/g,At=/\\(\\)?/g,Tt=/^\[object .+?Constructor\]$/,bt=/^(?:0|[1-9]\d*)$/,f={};f[ot]=f[st]=f[ft]=f[ut]=f[lt]=f[ct]=f[pt]=f[dt]=f[gt]=!0,f[E]=f[N]=f[j]=f[W]=f[Q]=f[B]=f[Z]=f[nn]=f[l]=f[w]=f[h]=f[P]=f[S]=f[z]=f[K]=!1;var Mn=typeof yn=="object"&&yn&&yn.Object===Object&&yn,mt=typeof self=="object"&&self&&self.Object===Object&&self,U=Mn||mt||Function("return this")(),Ln=_&&!_.nodeType&&_,Dn=Ln&&!0&&s&&!s.nodeType&&s,xt=Dn&&Dn.exports===Ln,Rn=xt&&Mn.process,Gn=function(){try{return Rn&&Rn.binding("util")}catch{}}(),Hn=Gn&&Gn.isTypedArray;function St(n,t){for(var e=-1,r=n?n.length:0;++e<r;)if(t(n[e],e,n))return!0;return!1}function Ct(n){return function(t){return t?.[n]}}function Ot(n,t){for(var e=-1,r=Array(n);++e<n;)r[e]=t(e);return r}function It(n){return function(t){return n(t)}}function Et(n,t){return n?.[t]}function wn(n){var t=!1;if(n!=null&&typeof n.toString!="function")try{t=!!(n+"")}catch{}return t}function Pt(n){var t=-1,e=Array(n.size);return n.forEach(function(r,a){e[++t]=[a,r]}),e}function Mt(n,t){return function(e){return n(t(e))}}function Lt(n){var t=-1,e=Array(n.size);return n.forEach(function(r){e[++t]=r}),e}var Dt=Array.prototype,Rt=Function.prototype,an=Object.prototype,An=U["__core-js_shared__"],Nn=function(){var n=/[^.]+$/.exec(An&&An.keys&&An.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Un=Rt.toString,L=an.hasOwnProperty,V=an.toString,Gt=RegExp("^"+Un.call(L).replace(wt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),$n=U.Symbol,Fn=U.Uint8Array,Ht=an.propertyIsEnumerable,Nt=Dt.splice,Ut=Mt(Object.keys,Object),Tn=k(U,"DataView"),tn=k(U,"Map"),bn=k(U,"Promise"),mn=k(U,"Set"),xn=k(U,"WeakMap"),en=k(Object,"create"),$t=Y(Tn),Ft=Y(tn),Bt=Y(bn),Kt=Y(mn),Xt=Y(xn),on=$n?$n.prototype:void 0,Sn=on?on.valueOf:void 0,Bn=on?on.toString:void 0;function X(n){var t=-1,e=n?n.length:0;for(this.clear();++t<e;){var r=n[t];this.set(r[0],r[1])}}function Yt(){this.__data__=en?en(null):{}}function qt(n){return this.has(n)&&delete this.__data__[n]}function Jt(n){var t=this.__data__;if(en){var e=t[n];return e===c?void 0:e}return L.call(t,n)?t[n]:void 0}function Wt(n){var t=this.__data__;return en?t[n]!==void 0:L.call(t,n)}function Zt(n,t){var e=this.__data__;return e[n]=en&&t===void 0?c:t,this}X.prototype.clear=Yt,X.prototype.delete=qt,X.prototype.get=Jt,X.prototype.has=Wt,X.prototype.set=Zt;function D(n){var t=-1,e=n?n.length:0;for(this.clear();++t<e;){var r=n[t];this.set(r[0],r[1])}}function Qt(){this.__data__=[]}function zt(n){var t=this.__data__,e=fn(t,n);if(e<0)return!1;var r=t.length-1;return e==r?t.pop():Nt.call(t,e,1),!0}function jt(n){var t=this.__data__,e=fn(t,n);return e<0?void 0:t[e][1]}function Vt(n){return fn(this.__data__,n)>-1}function kt(n,t){var e=this.__data__,r=fn(e,n);return r<0?e.push([n,t]):e[r][1]=t,this}D.prototype.clear=Qt,D.prototype.delete=zt,D.prototype.get=jt,D.prototype.has=Vt,D.prototype.set=kt;function R(n){var t=-1,e=n?n.length:0;for(this.clear();++t<e;){var r=n[t];this.set(r[0],r[1])}}function ne(){this.__data__={hash:new X,map:new(tn||D),string:new X}}function te(n){return un(this,n).delete(n)}function ee(n){return un(this,n).get(n)}function re(n){return un(this,n).has(n)}function ie(n,t){return un(this,n).set(n,t),this}R.prototype.clear=ne,R.prototype.delete=te,R.prototype.get=ee,R.prototype.has=re,R.prototype.set=ie;function sn(n){var t=-1,e=n?n.length:0;for(this.__data__=new R;++t<e;)this.add(n[t])}function ae(n){return this.__data__.set(n,c),this}function oe(n){return this.__data__.has(n)}sn.prototype.add=sn.prototype.push=ae,sn.prototype.has=oe;function G(n){this.__data__=new D(n)}function se(){this.__data__=new D}function fe(n){return this.__data__.delete(n)}function ue(n){return this.__data__.get(n)}function le(n){return this.__data__.has(n)}function ce(n,t){var e=this.__data__;if(e instanceof D){var r=e.__data__;if(!tn||r.length<T-1)return r.push([n,t]),this;e=this.__data__=new R(r)}return e.set(n,t),this}G.prototype.clear=se,G.prototype.delete=fe,G.prototype.get=ue,G.prototype.has=le,G.prototype.set=ce;function pe(n,t){var e=q(n)||jn(n)?Ot(n.length,String):[],r=e.length,a=!!r;for(var i in n)L.call(n,i)&&!(a&&(i=="length"||Wn(i,r)))&&e.push(i);return e}function fn(n,t){for(var e=n.length;e--;)if(zn(n[e][0],t))return e;return-1}function de(n,t,e){for(var r=-1,a=n.length;++r<a;){var i=n[r],o=t(i);if(o!=null&&(d===void 0?o===o&&!gn(o):e(o,d)))var d=o,p=i}return p}function Kn(n,t){t=ln(t,n)?[t]:qn(t);for(var e=0,r=t.length;n!=null&&e<r;)n=n[cn(t[e++])];return e&&e==r?n:void 0}function ge(n){return V.call(n)}function _e(n,t){return n!=null&&t in Object(n)}function Xn(n,t,e,r,a){return n===t?!0:n==null||t==null||!pn(n)&&!dn(t)?n!==n&&t!==t:Yn(n,t,Xn,e,r,a)}function Yn(n,t,e,r,a,i){var o=q(n),d=q(t),p=N,v=N;o||(p=$(n),p=p==E?h:p),d||(v=$(t),v=v==E?h:v);var b=p==h&&!wn(n),m=v==h&&!wn(t),A=p==v;if(A&&!b)return i||(i=new G),o||Ge(n)?Jn(n,t,e,r,a,i):Ce(n,t,p,e,r,a,i);if(!(a&u)){var O=b&&L.call(n,"__wrapped__"),I=m&&L.call(t,"__wrapped__");if(O||I){var F=O?n.value():n,H=I?t.value():t;return i||(i=new G),e(F,H,r,a,i)}}return A?(i||(i=new G),Oe(n,t,e,r,a,i)):!1}function he(n,t,e,r){var a=e.length,i=a;if(n==null)return!i;for(n=Object(n);a--;){var o=e[a];if(o[2]?o[1]!==n[o[0]]:!(o[0]in n))return!1}for(;++a<i;){o=e[a];var d=o[0],p=n[d],v=o[1];if(o[2]){if(p===void 0&&!(d in n))return!1}else{var b=new G,m;if(!(m===void 0?Xn(v,p,r,x|u,b):m))return!1}}return!0}function ye(n){if(!pn(n)||Me(n))return!1;var t=kn(n)||wn(n)?Gt:Tt;return t.test(Y(n))}function ve(n){return dn(n)&&On(n.length)&&!!f[V.call(n)]}function we(n){return typeof n=="function"?n:n==null?$e:typeof n=="object"?q(n)?me(n[0],n[1]):be(n):Fe(n)}function Ae(n){if(!Le(n))return Ut(n);var t=[];for(var e in Object(n))L.call(n,e)&&e!="constructor"&&t.push(e);return t}function Te(n,t){return n<t}function be(n){var t=Ie(n);return t.length==1&&t[0][2]?Qn(t[0][0],t[0][1]):function(e){return e===n||he(e,n,t)}}function me(n,t){return ln(n)&&Zn(t)?Qn(cn(n),t):function(e){var r=Ne(e,n);return r===void 0&&r===t?Ue(e,n):Xn(t,r,void 0,x|u)}}function xe(n){return function(t){return Kn(t,n)}}function Se(n){if(typeof n=="string")return n;if(gn(n))return Bn?Bn.call(n):"";var t=n+"";return t=="0"&&1/n==-y?"-0":t}function qn(n){return q(n)?n:De(n)}function Jn(n,t,e,r,a,i){var o=a&u,d=n.length,p=t.length;if(d!=p&&!(o&&p>d))return!1;var v=i.get(n);if(v&&i.get(t))return v==t;var b=-1,m=!0,A=a&x?new sn:void 0;for(i.set(n,t),i.set(t,n);++b<d;){var O=n[b],I=t[b];if(r)var F=o?r(I,O,b,t,n,i):r(O,I,b,n,t,i);if(F!==void 0){if(F)continue;m=!1;break}if(A){if(!St(t,function(H,J){if(!A.has(J)&&(O===H||e(O,H,r,a,i)))return A.add(J)})){m=!1;break}}else if(!(O===I||e(O,I,r,a,i))){m=!1;break}}return i.delete(n),i.delete(t),m}function Ce(n,t,e,r,a,i,o){switch(e){case Q:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer,t=t.buffer;case j:return!(n.byteLength!=t.byteLength||!r(new Fn(n),new Fn(t)));case W:case B:case w:return zn(+n,+t);case Z:return n.name==t.name&&n.message==t.message;case P:case z:return n==t+"";case l:var d=Pt;case S:var p=i&u;if(d||(d=Lt),n.size!=t.size&&!p)return!1;var v=o.get(n);if(v)return v==t;i|=x,o.set(n,t);var b=Jn(d(n),d(t),r,a,i,o);return o.delete(n),b;case rn:if(Sn)return Sn.call(n)==Sn.call(t)}return!1}function Oe(n,t,e,r,a,i){var o=a&u,d=In(n),p=d.length,v=In(t),b=v.length;if(p!=b&&!o)return!1;for(var m=p;m--;){var A=d[m];if(!(o?A in t:L.call(t,A)))return!1}var O=i.get(n);if(O&&i.get(t))return O==t;var I=!0;i.set(n,t),i.set(t,n);for(var F=o;++m<p;){A=d[m];var H=n[A],J=t[A];if(r)var nt=o?r(J,H,A,t,n,i):r(H,J,A,n,t,i);if(!(nt===void 0?H===J||e(H,J,r,a,i):nt)){I=!1;break}F||(F=A=="constructor")}if(I&&!F){var _n=n.constructor,hn=t.constructor;_n!=hn&&"constructor"in n&&"constructor"in t&&!(typeof _n=="function"&&_n instanceof _n&&typeof hn=="function"&&hn instanceof hn)&&(I=!1)}return i.delete(n),i.delete(t),I}function un(n,t){var e=n.__data__;return Pe(t)?e[typeof t=="string"?"string":"hash"]:e.map}function Ie(n){for(var t=In(n),e=t.length;e--;){var r=t[e],a=n[r];t[e]=[r,a,Zn(a)]}return t}function k(n,t){var e=Et(n,t);return ye(e)?e:void 0}var $=ge;(Tn&&$(new Tn(new ArrayBuffer(1)))!=Q||tn&&$(new tn)!=l||bn&&$(bn.resolve())!=M||mn&&$(new mn)!=S||xn&&$(new xn)!=K)&&($=function(n){var t=V.call(n),e=t==h?n.constructor:void 0,r=e?Y(e):void 0;if(r)switch(r){case $t:return Q;case Ft:return l;case Bt:return M;case Kt:return S;case Xt:return K}return t});function Ee(n,t,e){t=ln(t,n)?[t]:qn(t);for(var r,a=-1,o=t.length;++a<o;){var i=cn(t[a]);if(!(r=n!=null&&e(n,i)))break;n=n[i]}if(r)return r;var o=n?n.length:0;return!!o&&On(o)&&Wn(i,o)&&(q(n)||jn(n))}function Wn(n,t){return t=t??C,!!t&&(typeof n=="number"||bt.test(n))&&n>-1&&n%1==0&&n<t}function ln(n,t){if(q(n))return!1;var e=typeof n;return e=="number"||e=="symbol"||e=="boolean"||n==null||gn(n)?!0:ht.test(n)||!_t.test(n)||t!=null&&n in Object(t)}function Pe(n){var t=typeof n;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?n!=="__proto__":n===null}function Me(n){return!!Nn&&Nn in n}function Le(n){var t=n&&n.constructor,e=typeof t=="function"&&t.prototype||an;return n===e}function Zn(n){return n===n&&!pn(n)}function Qn(n,t){return function(e){return e==null?!1:e[n]===t&&(t!==void 0||n in Object(e))}}var De=Cn(function(n){n=He(n);var t=[];return yt.test(n)&&t.push(""),n.replace(vt,function(e,r,a,i){t.push(a?i.replace(At,"$1"):r||e)}),t});function cn(n){if(typeof n=="string"||gn(n))return n;var t=n+"";return t=="0"&&1/n==-y?"-0":t}function Y(n){if(n!=null){try{return Un.call(n)}catch{}try{return n+""}catch{}}return""}function Cn(n,t){if(typeof n!="function"||t&&typeof t!="function")throw new TypeError(g);var e=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=e.cache;if(i.has(a))return i.get(a);var o=n.apply(this,r);return e.cache=i.set(a,o),o};return e.cache=new(Cn.Cache||R),e}Cn.Cache=R;function zn(n,t){return n===t||n!==n&&t!==t}function jn(n){return Re(n)&&L.call(n,"callee")&&(!Ht.call(n,"callee")||V.call(n)==E)}var q=Array.isArray;function Vn(n){return n!=null&&On(n.length)&&!kn(n)}function Re(n){return dn(n)&&Vn(n)}function kn(n){var t=pn(n)?V.call(n):"";return t==nn||t==En}function On(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=C}function pn(n){var t=typeof n;return!!n&&(t=="object"||t=="function")}function dn(n){return!!n&&typeof n=="object"}function gn(n){return typeof n=="symbol"||dn(n)&&V.call(n)==rn}var Ge=Hn?It(Hn):ve;function He(n){return n==null?"":Se(n)}function Ne(n,t,e){var r=n==null?void 0:Kn(n,t);return r===void 0?e:r}function Ue(n,t){return n!=null&&Ee(n,t,_e)}function In(n){return Vn(n)?pe(n):Ae(n)}function $e(n){return n}function Fe(n){return ln(n)?Ct(cn(n)):xe(n)}function Be(n,t){return n&&n.length?de(n,we(t),Te):void 0}s.exports=Be}(rt,rt.exports);var qe=rt.exports,it=Ke(qe);const vn={L:1e3,H:4,G:3,E:2,C:1};function Je(s,_){const T=[],g=[],c=new Array(12);c.fill(0);const x=new Array(12);x.fill(null);for(const l of s)l.position!==null&&(c[l.position]=l.owner+1,x[l.position]=l);const u=new Array(12),y=new Array(12);for(let l=0;l<12;l++)u[l]=[],y[l]=[];for(let l=0;l<8;l++){const w=s[l];if(w.owner===_)if(w.position===null)for(let h=0;h<12;h++)c[h]||g.push([l,h]);else{const h=w.position%3,M=w.position/3|0,P=et[w.type];for(const S of P){const[z,rn]=_?[S[0],S[1]]:[-S[0],-S[1]],K=h+z,j=M+rn;if(K>=0&&K<3&&j>=0&&j<4){const Q=3*j+K;u[Q].push(l),c[Q]!==w.owner+1&&((l===1||l===5)&&T.push(Q),g.push([l,Q]))}}}else if(w.position!==null){const h=w.position%3,M=w.position/3|0,P=et[w.type];for(const S of P){const[z,rn]=_?[-S[0],-S[1]]:[S[0],S[1]],K=h+z,j=M+rn;K>=0&&K<3&&j>=0&&j<4&&y[3*j+K].push(l)}}}const C=[];for(let l=0;l<12;l++){const w=x[l];if(!w||w.owner===_)continue;const h=vn[w.type];let M=u[l];if(M.length!==0)if(y[l].length===0)C.push([l,h]);else{const P=Math.min(...M.map(S=>vn[s[S].type]));h>=P&&C.push([l,h-P])}}const E=_?s[1].position:s[5].position,N=u[E];if(N.length>0)return[N[0],_?s[1].position:s[5].position];const W=_?5:1,B=s[W].position,Z=y[B];if(Z.length>0){const l=Z[0],w=s[l].position,h=u[w],M=C.find(P=>P[0]===w);if(M)return console.log("protect the lion"),[it(u[M[0]],S=>vn[s[S].type]),w];{const P=T.filter(S=>y[S].length===0);return P.length>0?(console.log("move the lion"),[W,Pn(P)]):h.length>0?(console.log("protect the lion with a unfavourable move"),[it(h,z=>vn[s[z].type]),w]):(console.log("don't protect the lion",u,y,w),Pn(g))}}if(C.length>0){const l=Ye(C,h=>h[1])[0];return[it(u[l],h=>vn[s[h].type]),l]}const nn=g.filter(([l,w])=>{const h=vn[s[l].type],M=y[w];if(M.length===0)return!0;const P=it(M,z=>vn[s[z].type]);return u[w].length===0?!1:h<=P&&M.length<=1});if(nn.length>0)return console.log("really safe"),Pn(nn);const En=g.filter(([l,w])=>l!==1&&l!==5||y[w].length===0);return En.length>0?(console.log("safe"),Pn(En)):Pn(g)}const We={L:1e3,H:7,G:5,E:3,C:1};function Ze(s,_){const T=[],g=new Array(12);g.fill(0);for(const c of s)c.position!==null&&(g[c.position]=c.owner+1);for(let c=0;c<8;c++){const x=s[c];if(x.owner===_)if(x.position===null){if(c<4||s[c-4].owner!==x.owner||s[c-4].position!==null)for(let u=0;u<12;u++)g[u]||T.push([c,u])}else{const u=x.position%3,y=x.position/3|0,C=et[x.type];for(const E of C){const[N,W]=_?[E[0],E[1]]:[-E[0],-E[1]],B=u+N,Z=y+W;if(B>=0&&B<3&&Z>=0&&Z<4){let nn=3*Z+B;g[nn]!==x.owner+1&&T.push([c,nn])}}}}return T}function Qe(s,[_,T]){const{owner:g,type:c,position:x}=s[_],u=s.map(C=>({...C}));let y=s.findIndex(C=>C.position===T);return y>=0&&(u[y].position=null,u[y].owner=g,u[y].type==="H"&&(u[y].type="C")),u[_].position=T,c==="C"&&x!==null&&(g&&T>8||!g&&T<3)&&(u[_].type="H"),u}function ze(s){let _=0;const T=new Array(12);T.fill(0);for(const g of s)_+=(g.owner?-1:1)*We[g.type],g.position!==null&&(T[g.position]=g.owner+1);for(let g=0;g<8;g++){const c=s[g];if(c.position!==null){const x=c.position%3,u=c.position/3|0,y=et[c.type];for(const C of y){const[E,N]=c.owner===1?[C[0],C[1]]:[-C[0],-C[1]],W=x+E,B=u+N;if(W>=0&&W<3&&B>=0&&B<4){let Z=3*B+W;T[Z]!==c.owner+1&&(_+=.1*(c.owner?-1:1))}}}}return _}function at(s,_,T,g,c){const x=Ze(c,_);let u,y;if(s===0)return u=ze(c),[u,y];if(c[1].position===null)return[-1e5-s,y];if(c[5].position===null)return[1e5+s,y];if(_&&c[5].position>8)return[-1e5-s,y];if(_&&c[1].position<3)return[1e5+s,y];for(let E=0;E<x.length;E++){const N=x[E];var C=Qe(c,N);if(_===0?(u=at(s-1,1,T,g,C)[0],u>T&&(T=u,y=N)):(u=at(s-1,0,T,g,C)[0],u<g&&(g=u,y=N)),T>=g)break}return _===0?[T,y]:[g,y]}onmessage=s=>{const{pieces:_,turn:T,adversary:g}=s.data,c=g==="level1"?Je(_,T):g==="level2"?at(4,T,-1/0,1/0,_)[1]:at(8,T,-1/0,1/0,_)[1];postMessage(c)}})();
