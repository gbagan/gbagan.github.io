(() => {
  // output/Data.Functor/foreign.js
  var arrayMap = function(f) {
    return function(arr) {
      var l = arr.length;
      var result = new Array(l);
      for (var i = 0; i < l; i++) {
        result[i] = f(arr[i]);
      }
      return result;
    };
  };

  // output/Control.Semigroupoid/index.js
  var semigroupoidFn = {
    compose: function(f) {
      return function(g2) {
        return function(x5) {
          return f(g2(x5));
        };
      };
    }
  };
  var compose = function(dict) {
    return dict.compose;
  };
  var composeFlipped = function(dictSemigroupoid) {
    var compose1 = compose(dictSemigroupoid);
    return function(f) {
      return function(g2) {
        return compose1(g2)(f);
      };
    };
  };

  // output/Control.Category/index.js
  var identity = function(dict) {
    return dict.identity;
  };
  var categoryFn = {
    identity: function(x5) {
      return x5;
    },
    Semigroupoid0: function() {
      return semigroupoidFn;
    }
  };

  // output/Data.Boolean/index.js
  var otherwise = true;

  // output/Data.Function/index.js
  var flip = function(f) {
    return function(b) {
      return function(a) {
        return f(a)(b);
      };
    };
  };
  var $$const = function(a) {
    return function(v) {
      return a;
    };
  };
  var apply = function(f) {
    return function(x5) {
      return f(x5);
    };
  };

  // output/Data.Unit/foreign.js
  var unit = void 0;

  // output/Type.Proxy/index.js
  var $$Proxy = /* @__PURE__ */ function() {
    function $$Proxy2() {
    }
    ;
    $$Proxy2.value = new $$Proxy2();
    return $$Proxy2;
  }();

  // output/Data.Functor/index.js
  var map = function(dict) {
    return dict.map;
  };
  var mapFlipped = function(dictFunctor) {
    var map17 = map(dictFunctor);
    return function(fa) {
      return function(f) {
        return map17(f)(fa);
      };
    };
  };
  var $$void = function(dictFunctor) {
    return map(dictFunctor)($$const(unit));
  };
  var functorFn = {
    map: /* @__PURE__ */ compose(semigroupoidFn)
  };
  var functorArray = {
    map: arrayMap
  };

  // output/Data.Semigroup/foreign.js
  var concatArray = function(xs) {
    return function(ys) {
      if (xs.length === 0)
        return ys;
      if (ys.length === 0)
        return xs;
      return xs.concat(ys);
    };
  };

  // output/Data.Symbol/index.js
  var reflectSymbol = function(dict) {
    return dict.reflectSymbol;
  };

  // output/Record.Unsafe/foreign.js
  var unsafeGet = function(label4) {
    return function(rec) {
      return rec[label4];
    };
  };
  var unsafeSet = function(label4) {
    return function(value13) {
      return function(rec) {
        var copy = {};
        for (var key in rec) {
          if ({}.hasOwnProperty.call(rec, key)) {
            copy[key] = rec[key];
          }
        }
        copy[label4] = value13;
        return copy;
      };
    };
  };

  // output/Data.Semigroup/index.js
  var semigroupArray = {
    append: concatArray
  };
  var append = function(dict) {
    return dict.append;
  };

  // output/Control.Apply/foreign.js
  var arrayApply = function(fs) {
    return function(xs) {
      var l = fs.length;
      var k = xs.length;
      var result = new Array(l * k);
      var n = 0;
      for (var i = 0; i < l; i++) {
        var f = fs[i];
        for (var j = 0; j < k; j++) {
          result[n++] = f(xs[j]);
        }
      }
      return result;
    };
  };

  // output/Control.Apply/index.js
  var identity2 = /* @__PURE__ */ identity(categoryFn);
  var applyArray = {
    apply: arrayApply,
    Functor0: function() {
      return functorArray;
    }
  };
  var apply2 = function(dict) {
    return dict.apply;
  };
  var applySecond = function(dictApply) {
    var apply1 = apply2(dictApply);
    var map17 = map(dictApply.Functor0());
    return function(a) {
      return function(b) {
        return apply1(map17($$const(identity2))(a))(b);
      };
    };
  };

  // output/Control.Applicative/index.js
  var pure = function(dict) {
    return dict.pure;
  };
  var unless = function(dictApplicative) {
    var pure13 = pure(dictApplicative);
    return function(v) {
      return function(v1) {
        if (!v) {
          return v1;
        }
        ;
        if (v) {
          return pure13(unit);
        }
        ;
        throw new Error("Failed pattern match at Control.Applicative (line 68, column 1 - line 68, column 65): " + [v.constructor.name, v1.constructor.name]);
      };
    };
  };
  var when = function(dictApplicative) {
    var pure13 = pure(dictApplicative);
    return function(v) {
      return function(v1) {
        if (v) {
          return v1;
        }
        ;
        if (!v) {
          return pure13(unit);
        }
        ;
        throw new Error("Failed pattern match at Control.Applicative (line 63, column 1 - line 63, column 63): " + [v.constructor.name, v1.constructor.name]);
      };
    };
  };
  var liftA1 = function(dictApplicative) {
    var apply5 = apply2(dictApplicative.Apply0());
    var pure13 = pure(dictApplicative);
    return function(f) {
      return function(a) {
        return apply5(pure13(f))(a);
      };
    };
  };

  // output/Data.Bounded/foreign.js
  var topInt = 2147483647;
  var bottomInt = -2147483648;
  var topChar = String.fromCharCode(65535);
  var bottomChar = String.fromCharCode(0);
  var topNumber = Number.POSITIVE_INFINITY;
  var bottomNumber = Number.NEGATIVE_INFINITY;

  // output/Data.Ord/foreign.js
  var unsafeCompareImpl = function(lt) {
    return function(eq6) {
      return function(gt) {
        return function(x5) {
          return function(y5) {
            return x5 < y5 ? lt : x5 === y5 ? eq6 : gt;
          };
        };
      };
    };
  };
  var ordIntImpl = unsafeCompareImpl;
  var ordNumberImpl = unsafeCompareImpl;
  var ordCharImpl = unsafeCompareImpl;

  // output/Data.Eq/foreign.js
  var refEq = function(r1) {
    return function(r22) {
      return r1 === r22;
    };
  };
  var eqBooleanImpl = refEq;
  var eqIntImpl = refEq;
  var eqNumberImpl = refEq;
  var eqCharImpl = refEq;
  var eqArrayImpl = function(f) {
    return function(xs) {
      return function(ys) {
        if (xs.length !== ys.length)
          return false;
        for (var i = 0; i < xs.length; i++) {
          if (!f(xs[i])(ys[i]))
            return false;
        }
        return true;
      };
    };
  };

  // output/Data.Eq/index.js
  var eqNumber = {
    eq: eqNumberImpl
  };
  var eqInt = {
    eq: eqIntImpl
  };
  var eqChar = {
    eq: eqCharImpl
  };
  var eqBoolean = {
    eq: eqBooleanImpl
  };
  var eq = function(dict) {
    return dict.eq;
  };
  var eq2 = /* @__PURE__ */ eq(eqBoolean);
  var eqArray = function(dictEq) {
    return {
      eq: eqArrayImpl(eq(dictEq))
    };
  };
  var notEq = function(dictEq) {
    var eq32 = eq(dictEq);
    return function(x5) {
      return function(y5) {
        return eq2(eq32(x5)(y5))(false);
      };
    };
  };

  // output/Data.Ordering/index.js
  var LT = /* @__PURE__ */ function() {
    function LT2() {
    }
    ;
    LT2.value = new LT2();
    return LT2;
  }();
  var GT = /* @__PURE__ */ function() {
    function GT2() {
    }
    ;
    GT2.value = new GT2();
    return GT2;
  }();
  var EQ = /* @__PURE__ */ function() {
    function EQ2() {
    }
    ;
    EQ2.value = new EQ2();
    return EQ2;
  }();
  var eqOrdering = {
    eq: function(v) {
      return function(v1) {
        if (v instanceof LT && v1 instanceof LT) {
          return true;
        }
        ;
        if (v instanceof GT && v1 instanceof GT) {
          return true;
        }
        ;
        if (v instanceof EQ && v1 instanceof EQ) {
          return true;
        }
        ;
        return false;
      };
    }
  };

  // output/Data.Ring/foreign.js
  var intSub = function(x5) {
    return function(y5) {
      return x5 - y5 | 0;
    };
  };

  // output/Data.Semiring/foreign.js
  var intAdd = function(x5) {
    return function(y5) {
      return x5 + y5 | 0;
    };
  };
  var intMul = function(x5) {
    return function(y5) {
      return x5 * y5 | 0;
    };
  };
  var numAdd = function(n1) {
    return function(n2) {
      return n1 + n2;
    };
  };
  var numMul = function(n1) {
    return function(n2) {
      return n1 * n2;
    };
  };

  // output/Data.Semiring/index.js
  var zero = function(dict) {
    return dict.zero;
  };
  var semiringNumber = {
    add: numAdd,
    zero: 0,
    mul: numMul,
    one: 1
  };
  var semiringInt = {
    add: intAdd,
    zero: 0,
    mul: intMul,
    one: 1
  };
  var add = function(dict) {
    return dict.add;
  };

  // output/Data.Ring/index.js
  var sub = function(dict) {
    return dict.sub;
  };
  var ringInt = {
    sub: intSub,
    Semiring0: function() {
      return semiringInt;
    }
  };
  var negate = function(dictRing) {
    var sub1 = sub(dictRing);
    var zero2 = zero(dictRing.Semiring0());
    return function(a) {
      return sub1(zero2)(a);
    };
  };

  // output/Data.Ord/index.js
  var ordNumber = /* @__PURE__ */ function() {
    return {
      compare: ordNumberImpl(LT.value)(EQ.value)(GT.value),
      Eq0: function() {
        return eqNumber;
      }
    };
  }();
  var ordInt = /* @__PURE__ */ function() {
    return {
      compare: ordIntImpl(LT.value)(EQ.value)(GT.value),
      Eq0: function() {
        return eqInt;
      }
    };
  }();
  var ordChar = /* @__PURE__ */ function() {
    return {
      compare: ordCharImpl(LT.value)(EQ.value)(GT.value),
      Eq0: function() {
        return eqChar;
      }
    };
  }();
  var compare = function(dict) {
    return dict.compare;
  };
  var comparing = function(dictOrd) {
    var compare3 = compare(dictOrd);
    return function(f) {
      return function(x5) {
        return function(y5) {
          return compare3(f(x5))(f(y5));
        };
      };
    };
  };
  var max = function(dictOrd) {
    var compare3 = compare(dictOrd);
    return function(x5) {
      return function(y5) {
        var v = compare3(x5)(y5);
        if (v instanceof LT) {
          return y5;
        }
        ;
        if (v instanceof EQ) {
          return x5;
        }
        ;
        if (v instanceof GT) {
          return x5;
        }
        ;
        throw new Error("Failed pattern match at Data.Ord (line 181, column 3 - line 184, column 12): " + [v.constructor.name]);
      };
    };
  };
  var min = function(dictOrd) {
    var compare3 = compare(dictOrd);
    return function(x5) {
      return function(y5) {
        var v = compare3(x5)(y5);
        if (v instanceof LT) {
          return x5;
        }
        ;
        if (v instanceof EQ) {
          return x5;
        }
        ;
        if (v instanceof GT) {
          return y5;
        }
        ;
        throw new Error("Failed pattern match at Data.Ord (line 172, column 3 - line 175, column 12): " + [v.constructor.name]);
      };
    };
  };

  // output/Data.Bounded/index.js
  var top = function(dict) {
    return dict.top;
  };
  var boundedInt = {
    top: topInt,
    bottom: bottomInt,
    Ord0: function() {
      return ordInt;
    }
  };
  var boundedChar = {
    top: topChar,
    bottom: bottomChar,
    Ord0: function() {
      return ordChar;
    }
  };
  var bottom = function(dict) {
    return dict.bottom;
  };

  // output/Data.Show/foreign.js
  var showIntImpl = function(n) {
    return n.toString();
  };
  var showNumberImpl = function(n) {
    var str = n.toString();
    return isNaN(str + ".0") ? str : str + ".0";
  };

  // output/Data.Show/index.js
  var showNumber = {
    show: showNumberImpl
  };
  var showInt = {
    show: showIntImpl
  };
  var show = function(dict) {
    return dict.show;
  };

  // output/Data.Maybe/index.js
  var identity3 = /* @__PURE__ */ identity(categoryFn);
  var Nothing = /* @__PURE__ */ function() {
    function Nothing2() {
    }
    ;
    Nothing2.value = new Nothing2();
    return Nothing2;
  }();
  var Just = /* @__PURE__ */ function() {
    function Just2(value0) {
      this.value0 = value0;
    }
    ;
    Just2.create = function(value0) {
      return new Just2(value0);
    };
    return Just2;
  }();
  var maybe = function(v) {
    return function(v1) {
      return function(v2) {
        if (v2 instanceof Nothing) {
          return v;
        }
        ;
        if (v2 instanceof Just) {
          return v1(v2.value0);
        }
        ;
        throw new Error("Failed pattern match at Data.Maybe (line 237, column 1 - line 237, column 51): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
      };
    };
  };
  var isJust = /* @__PURE__ */ maybe(false)(/* @__PURE__ */ $$const(true));
  var functorMaybe = {
    map: function(v) {
      return function(v1) {
        if (v1 instanceof Just) {
          return new Just(v(v1.value0));
        }
        ;
        return Nothing.value;
      };
    }
  };
  var map2 = /* @__PURE__ */ map(functorMaybe);
  var fromMaybe = function(a) {
    return maybe(a)(identity3);
  };
  var eqMaybe = function(dictEq) {
    var eq6 = eq(dictEq);
    return {
      eq: function(x5) {
        return function(y5) {
          if (x5 instanceof Nothing && y5 instanceof Nothing) {
            return true;
          }
          ;
          if (x5 instanceof Just && y5 instanceof Just) {
            return eq6(x5.value0)(y5.value0);
          }
          ;
          return false;
        };
      }
    };
  };
  var ordMaybe = function(dictOrd) {
    var compare2 = compare(dictOrd);
    var eqMaybe1 = eqMaybe(dictOrd.Eq0());
    return {
      compare: function(x5) {
        return function(y5) {
          if (x5 instanceof Nothing && y5 instanceof Nothing) {
            return EQ.value;
          }
          ;
          if (x5 instanceof Nothing) {
            return LT.value;
          }
          ;
          if (y5 instanceof Nothing) {
            return GT.value;
          }
          ;
          if (x5 instanceof Just && y5 instanceof Just) {
            return compare2(x5.value0)(y5.value0);
          }
          ;
          throw new Error("Failed pattern match at Data.Maybe (line 0, column 0 - line 0, column 0): " + [x5.constructor.name, y5.constructor.name]);
        };
      },
      Eq0: function() {
        return eqMaybe1;
      }
    };
  };
  var applyMaybe = {
    apply: function(v) {
      return function(v1) {
        if (v instanceof Just) {
          return map2(v.value0)(v1);
        }
        ;
        if (v instanceof Nothing) {
          return Nothing.value;
        }
        ;
        throw new Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): " + [v.constructor.name, v1.constructor.name]);
      };
    },
    Functor0: function() {
      return functorMaybe;
    }
  };
  var bindMaybe = {
    bind: function(v) {
      return function(v1) {
        if (v instanceof Just) {
          return v1(v.value0);
        }
        ;
        if (v instanceof Nothing) {
          return Nothing.value;
        }
        ;
        throw new Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): " + [v.constructor.name, v1.constructor.name]);
      };
    },
    Apply0: function() {
      return applyMaybe;
    }
  };
  var applicativeMaybe = /* @__PURE__ */ function() {
    return {
      pure: Just.create,
      Apply0: function() {
        return applyMaybe;
      }
    };
  }();

  // output/Control.Bind/foreign.js
  var arrayBind = function(arr) {
    return function(f) {
      var result = [];
      for (var i = 0, l = arr.length; i < l; i++) {
        Array.prototype.push.apply(result, f(arr[i]));
      }
      return result;
    };
  };

  // output/Control.Bind/index.js
  var discard = function(dict) {
    return dict.discard;
  };
  var bindArray = {
    bind: arrayBind,
    Apply0: function() {
      return applyArray;
    }
  };
  var bind = function(dict) {
    return dict.bind;
  };
  var bindFlipped = function(dictBind) {
    return flip(bind(dictBind));
  };
  var composeKleisliFlipped = function(dictBind) {
    var bindFlipped1 = bindFlipped(dictBind);
    return function(f) {
      return function(g2) {
        return function(a) {
          return bindFlipped1(f)(g2(a));
        };
      };
    };
  };
  var discardUnit = {
    discard: function(dictBind) {
      return bind(dictBind);
    }
  };

  // output/Data.Array/foreign.js
  var range = function(start2) {
    return function(end) {
      var step4 = start2 > end ? -1 : 1;
      var result = new Array(step4 * (end - start2) + 1);
      var i = start2, n = 0;
      while (i !== end) {
        result[n++] = i;
        i += step4;
      }
      result[n] = i;
      return result;
    };
  };
  var replicateFill = function(count) {
    return function(value13) {
      if (count < 1) {
        return [];
      }
      var result = new Array(count);
      return result.fill(value13);
    };
  };
  var replicatePolyfill = function(count) {
    return function(value13) {
      var result = [];
      var n = 0;
      for (var i = 0; i < count; i++) {
        result[n++] = value13;
      }
      return result;
    };
  };
  var replicate = typeof Array.prototype.fill === "function" ? replicateFill : replicatePolyfill;
  var fromFoldableImpl = function() {
    function Cons3(head4, tail2) {
      this.head = head4;
      this.tail = tail2;
    }
    var emptyList = {};
    function curryCons(head4) {
      return function(tail2) {
        return new Cons3(head4, tail2);
      };
    }
    function listToArray(list) {
      var result = [];
      var count = 0;
      var xs = list;
      while (xs !== emptyList) {
        result[count++] = xs.head;
        xs = xs.tail;
      }
      return result;
    }
    return function(foldr4) {
      return function(xs) {
        return listToArray(foldr4(curryCons)(emptyList)(xs));
      };
    };
  }();
  var length = function(xs) {
    return xs.length;
  };
  var indexImpl = function(just) {
    return function(nothing) {
      return function(xs) {
        return function(i) {
          return i < 0 || i >= xs.length ? nothing : just(xs[i]);
        };
      };
    };
  };
  var findIndexImpl = function(just) {
    return function(nothing) {
      return function(f) {
        return function(xs) {
          for (var i = 0, l = xs.length; i < l; i++) {
            if (f(xs[i]))
              return just(i);
          }
          return nothing;
        };
      };
    };
  };
  var _deleteAt = function(just) {
    return function(nothing) {
      return function(i) {
        return function(l) {
          if (i < 0 || i >= l.length)
            return nothing;
          var l1 = l.slice();
          l1.splice(i, 1);
          return just(l1);
        };
      };
    };
  };
  var _updateAt = function(just) {
    return function(nothing) {
      return function(i) {
        return function(a) {
          return function(l) {
            if (i < 0 || i >= l.length)
              return nothing;
            var l1 = l.slice();
            l1[i] = a;
            return just(l1);
          };
        };
      };
    };
  };
  var filter = function(f) {
    return function(xs) {
      return xs.filter(f);
    };
  };
  var sortByImpl = function() {
    function mergeFromTo(compare2, fromOrdering, xs1, xs2, from2, to2) {
      var mid;
      var i;
      var j;
      var k;
      var x5;
      var y5;
      var c;
      mid = from2 + (to2 - from2 >> 1);
      if (mid - from2 > 1)
        mergeFromTo(compare2, fromOrdering, xs2, xs1, from2, mid);
      if (to2 - mid > 1)
        mergeFromTo(compare2, fromOrdering, xs2, xs1, mid, to2);
      i = from2;
      j = mid;
      k = from2;
      while (i < mid && j < to2) {
        x5 = xs2[i];
        y5 = xs2[j];
        c = fromOrdering(compare2(x5)(y5));
        if (c > 0) {
          xs1[k++] = y5;
          ++j;
        } else {
          xs1[k++] = x5;
          ++i;
        }
      }
      while (i < mid) {
        xs1[k++] = xs2[i++];
      }
      while (j < to2) {
        xs1[k++] = xs2[j++];
      }
    }
    return function(compare2) {
      return function(fromOrdering) {
        return function(xs) {
          var out;
          if (xs.length < 2)
            return xs;
          out = xs.slice(0);
          mergeFromTo(compare2, fromOrdering, out, xs.slice(0), 0, xs.length);
          return out;
        };
      };
    };
  }();
  var slice = function(s) {
    return function(e) {
      return function(l) {
        return l.slice(s, e);
      };
    };
  };
  var zipWith = function(f) {
    return function(xs) {
      return function(ys) {
        var l = xs.length < ys.length ? xs.length : ys.length;
        var result = new Array(l);
        for (var i = 0; i < l; i++) {
          result[i] = f(xs[i])(ys[i]);
        }
        return result;
      };
    };
  };

  // output/Control.Monad/index.js
  var ap = function(dictMonad) {
    var bind9 = bind(dictMonad.Bind1());
    var pure9 = pure(dictMonad.Applicative0());
    return function(f) {
      return function(a) {
        return bind9(f)(function(f$prime) {
          return bind9(a)(function(a$prime) {
            return pure9(f$prime(a$prime));
          });
        });
      };
    };
  };

  // output/Data.Either/index.js
  var Left = /* @__PURE__ */ function() {
    function Left2(value0) {
      this.value0 = value0;
    }
    ;
    Left2.create = function(value0) {
      return new Left2(value0);
    };
    return Left2;
  }();
  var Right = /* @__PURE__ */ function() {
    function Right2(value0) {
      this.value0 = value0;
    }
    ;
    Right2.create = function(value0) {
      return new Right2(value0);
    };
    return Right2;
  }();
  var note = function(a) {
    return maybe(new Left(a))(Right.create);
  };
  var functorEither = {
    map: function(f) {
      return function(m) {
        if (m instanceof Left) {
          return new Left(m.value0);
        }
        ;
        if (m instanceof Right) {
          return new Right(f(m.value0));
        }
        ;
        throw new Error("Failed pattern match at Data.Either (line 0, column 0 - line 0, column 0): " + [m.constructor.name]);
      };
    }
  };
  var map3 = /* @__PURE__ */ map(functorEither);
  var either = function(v) {
    return function(v1) {
      return function(v2) {
        if (v2 instanceof Left) {
          return v(v2.value0);
        }
        ;
        if (v2 instanceof Right) {
          return v1(v2.value0);
        }
        ;
        throw new Error("Failed pattern match at Data.Either (line 208, column 1 - line 208, column 64): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
      };
    };
  };
  var applyEither = {
    apply: function(v) {
      return function(v1) {
        if (v instanceof Left) {
          return new Left(v.value0);
        }
        ;
        if (v instanceof Right) {
          return map3(v.value0)(v1);
        }
        ;
        throw new Error("Failed pattern match at Data.Either (line 70, column 1 - line 72, column 30): " + [v.constructor.name, v1.constructor.name]);
      };
    },
    Functor0: function() {
      return functorEither;
    }
  };
  var bindEither = {
    bind: /* @__PURE__ */ either(function(e) {
      return function(v) {
        return new Left(e);
      };
    })(function(a) {
      return function(f) {
        return f(a);
      };
    }),
    Apply0: function() {
      return applyEither;
    }
  };
  var applicativeEither = /* @__PURE__ */ function() {
    return {
      pure: Right.create,
      Apply0: function() {
        return applyEither;
      }
    };
  }();

  // output/Data.Monoid/index.js
  var mempty = function(dict) {
    return dict.mempty;
  };

  // output/Effect/foreign.js
  var pureE = function(a) {
    return function() {
      return a;
    };
  };
  var bindE = function(a) {
    return function(f) {
      return function() {
        return f(a())();
      };
    };
  };

  // output/Effect/index.js
  var $runtime_lazy = function(name16, moduleName, init4) {
    var state3 = 0;
    var val;
    return function(lineNumber) {
      if (state3 === 2)
        return val;
      if (state3 === 1)
        throw new ReferenceError(name16 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state3 = 1;
      val = init4();
      state3 = 2;
      return val;
    };
  };
  var monadEffect = {
    Applicative0: function() {
      return applicativeEffect;
    },
    Bind1: function() {
      return bindEffect;
    }
  };
  var bindEffect = {
    bind: bindE,
    Apply0: function() {
      return $lazy_applyEffect(0);
    }
  };
  var applicativeEffect = {
    pure: pureE,
    Apply0: function() {
      return $lazy_applyEffect(0);
    }
  };
  var $lazy_functorEffect = /* @__PURE__ */ $runtime_lazy("functorEffect", "Effect", function() {
    return {
      map: liftA1(applicativeEffect)
    };
  });
  var $lazy_applyEffect = /* @__PURE__ */ $runtime_lazy("applyEffect", "Effect", function() {
    return {
      apply: ap(monadEffect),
      Functor0: function() {
        return $lazy_functorEffect(0);
      }
    };
  });
  var functorEffect = /* @__PURE__ */ $lazy_functorEffect(20);

  // output/Effect.Ref/foreign.js
  var _new = function(val) {
    return function() {
      return { value: val };
    };
  };
  var read = function(ref) {
    return function() {
      return ref.value;
    };
  };
  var modifyImpl = function(f) {
    return function(ref) {
      return function() {
        var t = f(ref.value);
        ref.value = t.state;
        return t.value;
      };
    };
  };
  var write = function(val) {
    return function(ref) {
      return function() {
        ref.value = val;
      };
    };
  };

  // output/Effect.Ref/index.js
  var $$void2 = /* @__PURE__ */ $$void(functorEffect);
  var $$new = _new;
  var modify$prime = modifyImpl;
  var modify = function(f) {
    return modify$prime(function(s) {
      var s$prime = f(s);
      return {
        state: s$prime,
        value: s$prime
      };
    });
  };
  var modify_ = function(f) {
    return function(s) {
      return $$void2(modify(f)(s));
    };
  };

  // output/Control.Monad.Rec.Class/index.js
  var Loop = /* @__PURE__ */ function() {
    function Loop2(value0) {
      this.value0 = value0;
    }
    ;
    Loop2.create = function(value0) {
      return new Loop2(value0);
    };
    return Loop2;
  }();
  var Done = /* @__PURE__ */ function() {
    function Done2(value0) {
      this.value0 = value0;
    }
    ;
    Done2.create = function(value0) {
      return new Done2(value0);
    };
    return Done2;
  }();
  var tailRecM = function(dict) {
    return dict.tailRecM;
  };

  // output/Control.Monad.ST.Internal/foreign.js
  var map_ = function(f) {
    return function(a) {
      return function() {
        return f(a());
      };
    };
  };
  var pure_ = function(a) {
    return function() {
      return a;
    };
  };
  var bind_ = function(a) {
    return function(f) {
      return function() {
        return f(a())();
      };
    };
  };

  // output/Control.Monad.ST.Internal/index.js
  var $runtime_lazy2 = function(name16, moduleName, init4) {
    var state3 = 0;
    var val;
    return function(lineNumber) {
      if (state3 === 2)
        return val;
      if (state3 === 1)
        throw new ReferenceError(name16 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state3 = 1;
      val = init4();
      state3 = 2;
      return val;
    };
  };
  var functorST = {
    map: map_
  };
  var monadST = {
    Applicative0: function() {
      return applicativeST;
    },
    Bind1: function() {
      return bindST;
    }
  };
  var bindST = {
    bind: bind_,
    Apply0: function() {
      return $lazy_applyST(0);
    }
  };
  var applicativeST = {
    pure: pure_,
    Apply0: function() {
      return $lazy_applyST(0);
    }
  };
  var $lazy_applyST = /* @__PURE__ */ $runtime_lazy2("applyST", "Control.Monad.ST.Internal", function() {
    return {
      apply: ap(monadST),
      Functor0: function() {
        return functorST;
      }
    };
  });

  // output/Data.Array.ST/foreign.js
  var peekImpl = function(just) {
    return function(nothing) {
      return function(i) {
        return function(xs) {
          return function() {
            return i >= 0 && i < xs.length ? just(xs[i]) : nothing;
          };
        };
      };
    };
  };
  var poke = function(i) {
    return function(a) {
      return function(xs) {
        return function() {
          var ret = i >= 0 && i < xs.length;
          if (ret)
            xs[i] = a;
          return ret;
        };
      };
    };
  };
  var pushAll = function(as) {
    return function(xs) {
      return function() {
        return xs.push.apply(xs, as);
      };
    };
  };
  var unsafeFreeze = function(xs) {
    return function() {
      return xs;
    };
  };
  function copyImpl(xs) {
    return function() {
      return xs.slice();
    };
  }
  var thaw = copyImpl;
  var sortByImpl2 = function() {
    function mergeFromTo(compare2, fromOrdering, xs1, xs2, from2, to2) {
      var mid;
      var i;
      var j;
      var k;
      var x5;
      var y5;
      var c;
      mid = from2 + (to2 - from2 >> 1);
      if (mid - from2 > 1)
        mergeFromTo(compare2, fromOrdering, xs2, xs1, from2, mid);
      if (to2 - mid > 1)
        mergeFromTo(compare2, fromOrdering, xs2, xs1, mid, to2);
      i = from2;
      j = mid;
      k = from2;
      while (i < mid && j < to2) {
        x5 = xs2[i];
        y5 = xs2[j];
        c = fromOrdering(compare2(x5)(y5));
        if (c > 0) {
          xs1[k++] = y5;
          ++j;
        } else {
          xs1[k++] = x5;
          ++i;
        }
      }
      while (i < mid) {
        xs1[k++] = xs2[i++];
      }
      while (j < to2) {
        xs1[k++] = xs2[j++];
      }
    }
    return function(compare2) {
      return function(fromOrdering) {
        return function(xs) {
          return function() {
            if (xs.length < 2)
              return xs;
            mergeFromTo(compare2, fromOrdering, xs, xs.slice(0), 0, xs.length);
            return xs;
          };
        };
      };
    };
  }();

  // output/Data.Array.ST/index.js
  var withArray = function(f) {
    return function(xs) {
      return function __do() {
        var result = thaw(xs)();
        f(result)();
        return unsafeFreeze(result)();
      };
    };
  };
  var push = function(a) {
    return pushAll([a]);
  };
  var peek = /* @__PURE__ */ function() {
    return peekImpl(Just.create)(Nothing.value);
  }();
  var modify2 = function(i) {
    return function(f) {
      return function(xs) {
        return function __do() {
          var entry = peek(i)(xs)();
          if (entry instanceof Just) {
            return poke(i)(f(entry.value0))(xs)();
          }
          ;
          if (entry instanceof Nothing) {
            return false;
          }
          ;
          throw new Error("Failed pattern match at Data.Array.ST (line 197, column 3 - line 199, column 26): " + [entry.constructor.name]);
        };
      };
    };
  };

  // output/Data.Foldable/foreign.js
  var foldrArray = function(f) {
    return function(init4) {
      return function(xs) {
        var acc = init4;
        var len = xs.length;
        for (var i = len - 1; i >= 0; i--) {
          acc = f(xs[i])(acc);
        }
        return acc;
      };
    };
  };
  var foldlArray = function(f) {
    return function(init4) {
      return function(xs) {
        var acc = init4;
        var len = xs.length;
        for (var i = 0; i < len; i++) {
          acc = f(acc)(xs[i]);
        }
        return acc;
      };
    };
  };

  // output/Data.Tuple/index.js
  var Tuple = /* @__PURE__ */ function() {
    function Tuple2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Tuple2.create = function(value0) {
      return function(value1) {
        return new Tuple2(value0, value1);
      };
    };
    return Tuple2;
  }();
  var functorTuple = {
    map: function(f) {
      return function(m) {
        return new Tuple(m.value0, f(m.value1));
      };
    }
  };

  // output/Data.Bifunctor/index.js
  var identity4 = /* @__PURE__ */ identity(categoryFn);
  var bimap = function(dict) {
    return dict.bimap;
  };
  var lmap = function(dictBifunctor) {
    var bimap1 = bimap(dictBifunctor);
    return function(f) {
      return bimap1(f)(identity4);
    };
  };
  var bifunctorTuple = {
    bimap: function(f) {
      return function(g2) {
        return function(v) {
          return new Tuple(f(v.value0), g2(v.value1));
        };
      };
    }
  };
  var bifunctorEither = {
    bimap: function(v) {
      return function(v1) {
        return function(v2) {
          if (v2 instanceof Left) {
            return new Left(v(v2.value0));
          }
          ;
          if (v2 instanceof Right) {
            return new Right(v1(v2.value0));
          }
          ;
          throw new Error("Failed pattern match at Data.Bifunctor (line 32, column 1 - line 34, column 36): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
        };
      };
    }
  };

  // output/Unsafe.Coerce/foreign.js
  var unsafeCoerce2 = function(x5) {
    return x5;
  };

  // output/Data.Foldable/index.js
  var eq12 = /* @__PURE__ */ eq(eqOrdering);
  var foldr = function(dict) {
    return dict.foldr;
  };
  var traverse_ = function(dictApplicative) {
    var applySecond2 = applySecond(dictApplicative.Apply0());
    var pure9 = pure(dictApplicative);
    return function(dictFoldable) {
      var foldr22 = foldr(dictFoldable);
      return function(f) {
        return foldr22(function($454) {
          return applySecond2(f($454));
        })(pure9(unit));
      };
    };
  };
  var for_ = function(dictApplicative) {
    var traverse_1 = traverse_(dictApplicative);
    return function(dictFoldable) {
      return flip(traverse_1(dictFoldable));
    };
  };
  var foldl = function(dict) {
    return dict.foldl;
  };
  var maximumBy = function(dictFoldable) {
    var foldl22 = foldl(dictFoldable);
    return function(cmp) {
      var max$prime = function(v) {
        return function(v1) {
          if (v instanceof Nothing) {
            return new Just(v1);
          }
          ;
          if (v instanceof Just) {
            return new Just(function() {
              var $303 = eq12(cmp(v.value0)(v1))(GT.value);
              if ($303) {
                return v.value0;
              }
              ;
              return v1;
            }());
          }
          ;
          throw new Error("Failed pattern match at Data.Foldable (line 441, column 3 - line 441, column 27): " + [v.constructor.name, v1.constructor.name]);
        };
      };
      return foldl22(max$prime)(Nothing.value);
    };
  };
  var maximum = function(dictOrd) {
    var compare2 = compare(dictOrd);
    return function(dictFoldable) {
      return maximumBy(dictFoldable)(compare2);
    };
  };
  var minimumBy = function(dictFoldable) {
    var foldl22 = foldl(dictFoldable);
    return function(cmp) {
      var min$prime = function(v) {
        return function(v1) {
          if (v instanceof Nothing) {
            return new Just(v1);
          }
          ;
          if (v instanceof Just) {
            return new Just(function() {
              var $307 = eq12(cmp(v.value0)(v1))(LT.value);
              if ($307) {
                return v.value0;
              }
              ;
              return v1;
            }());
          }
          ;
          throw new Error("Failed pattern match at Data.Foldable (line 454, column 3 - line 454, column 27): " + [v.constructor.name, v1.constructor.name]);
        };
      };
      return foldl22(min$prime)(Nothing.value);
    };
  };
  var minimum = function(dictOrd) {
    var compare2 = compare(dictOrd);
    return function(dictFoldable) {
      return minimumBy(dictFoldable)(compare2);
    };
  };
  var foldableMaybe = {
    foldr: function(v) {
      return function(v1) {
        return function(v2) {
          if (v2 instanceof Nothing) {
            return v1;
          }
          ;
          if (v2 instanceof Just) {
            return v(v2.value0)(v1);
          }
          ;
          throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
        };
      };
    },
    foldl: function(v) {
      return function(v1) {
        return function(v2) {
          if (v2 instanceof Nothing) {
            return v1;
          }
          ;
          if (v2 instanceof Just) {
            return v(v1)(v2.value0);
          }
          ;
          throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
        };
      };
    },
    foldMap: function(dictMonoid) {
      var mempty2 = mempty(dictMonoid);
      return function(v) {
        return function(v1) {
          if (v1 instanceof Nothing) {
            return mempty2;
          }
          ;
          if (v1 instanceof Just) {
            return v(v1.value0);
          }
          ;
          throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): " + [v.constructor.name, v1.constructor.name]);
        };
      };
    }
  };
  var foldMapDefaultR = function(dictFoldable) {
    var foldr22 = foldr(dictFoldable);
    return function(dictMonoid) {
      var append7 = append(dictMonoid.Semigroup0());
      var mempty2 = mempty(dictMonoid);
      return function(f) {
        return foldr22(function(x5) {
          return function(acc) {
            return append7(f(x5))(acc);
          };
        })(mempty2);
      };
    };
  };
  var foldableArray = {
    foldr: foldrArray,
    foldl: foldlArray,
    foldMap: function(dictMonoid) {
      return foldMapDefaultR(foldableArray)(dictMonoid);
    }
  };

  // output/Data.FunctorWithIndex/foreign.js
  var mapWithIndexArray = function(f) {
    return function(xs) {
      var l = xs.length;
      var result = Array(l);
      for (var i = 0; i < l; i++) {
        result[i] = f(i)(xs[i]);
      }
      return result;
    };
  };

  // output/Data.FunctorWithIndex/index.js
  var mapWithIndex = function(dict) {
    return dict.mapWithIndex;
  };
  var functorWithIndexArray = {
    mapWithIndex: mapWithIndexArray,
    Functor0: function() {
      return functorArray;
    }
  };

  // output/Data.Traversable/foreign.js
  var traverseArrayImpl = function() {
    function array1(a) {
      return [a];
    }
    function array2(a) {
      return function(b) {
        return [a, b];
      };
    }
    function array3(a) {
      return function(b) {
        return function(c) {
          return [a, b, c];
        };
      };
    }
    function concat2(xs) {
      return function(ys) {
        return xs.concat(ys);
      };
    }
    return function(apply5) {
      return function(map17) {
        return function(pure9) {
          return function(f) {
            return function(array) {
              function go2(bot, top3) {
                switch (top3 - bot) {
                  case 0:
                    return pure9([]);
                  case 1:
                    return map17(array1)(f(array[bot]));
                  case 2:
                    return apply5(map17(array2)(f(array[bot])))(f(array[bot + 1]));
                  case 3:
                    return apply5(apply5(map17(array3)(f(array[bot])))(f(array[bot + 1])))(f(array[bot + 2]));
                  default:
                    var pivot = bot + Math.floor((top3 - bot) / 4) * 2;
                    return apply5(map17(concat2)(go2(bot, pivot)))(go2(pivot, top3));
                }
              }
              return go2(0, array.length);
            };
          };
        };
      };
    };
  }();

  // output/Data.Traversable/index.js
  var identity5 = /* @__PURE__ */ identity(categoryFn);
  var traverse = function(dict) {
    return dict.traverse;
  };
  var sequenceDefault = function(dictTraversable) {
    var traverse2 = traverse(dictTraversable);
    return function(dictApplicative) {
      return traverse2(dictApplicative)(identity5);
    };
  };
  var traversableArray = {
    traverse: function(dictApplicative) {
      var Apply0 = dictApplicative.Apply0();
      return traverseArrayImpl(apply2(Apply0))(map(Apply0.Functor0()))(pure(dictApplicative));
    },
    sequence: function(dictApplicative) {
      return sequenceDefault(traversableArray)(dictApplicative);
    },
    Functor0: function() {
      return functorArray;
    },
    Foldable1: function() {
      return foldableArray;
    }
  };
  var sequence = function(dict) {
    return dict.sequence;
  };

  // output/Data.Array/index.js
  var traverse_2 = /* @__PURE__ */ traverse_(applicativeST);
  var append2 = /* @__PURE__ */ append(semigroupArray);
  var updateAtIndices = function(dictFoldable) {
    var traverse_1 = traverse_2(dictFoldable);
    return function(us) {
      return function(xs) {
        return withArray(function(res) {
          return traverse_1(function(v) {
            return poke(v.value0)(v.value1)(res);
          })(us);
        })(xs)();
      };
    };
  };
  var updateAt = /* @__PURE__ */ function() {
    return _updateAt(Just.create)(Nothing.value);
  }();
  var take = function(n) {
    return function(xs) {
      var $149 = n < 1;
      if ($149) {
        return [];
      }
      ;
      return slice(0)(n)(xs);
    };
  };
  var sortBy = function(comp) {
    return sortByImpl(comp)(function(v) {
      if (v instanceof GT) {
        return 1;
      }
      ;
      if (v instanceof EQ) {
        return 0;
      }
      ;
      if (v instanceof LT) {
        return -1 | 0;
      }
      ;
      throw new Error("Failed pattern match at Data.Array (line 870, column 31 - line 873, column 11): " + [v.constructor.name]);
    });
  };
  var sortWith = function(dictOrd) {
    var comparing2 = comparing(dictOrd);
    return function(f) {
      return sortBy(comparing2(f));
    };
  };
  var sort = function(dictOrd) {
    var compare2 = compare(dictOrd);
    return function(xs) {
      return sortBy(compare2)(xs);
    };
  };
  var snoc = function(xs) {
    return function(x5) {
      return withArray(push(x5))(xs)();
    };
  };
  var singleton2 = function(a) {
    return [a];
  };
  var modifyAtIndices = function(dictFoldable) {
    var traverse_1 = traverse_2(dictFoldable);
    return function(is2) {
      return function(f) {
        return function(xs) {
          return withArray(function(res) {
            return traverse_1(function(i) {
              return modify2(i)(f)(res);
            })(is2);
          })(xs)();
        };
      };
    };
  };
  var mapWithIndex2 = /* @__PURE__ */ mapWithIndex(functorWithIndexArray);
  var index = /* @__PURE__ */ function() {
    return indexImpl(Just.create)(Nothing.value);
  }();
  var foldr2 = /* @__PURE__ */ foldr(foldableArray);
  var foldl2 = /* @__PURE__ */ foldl(foldableArray);
  var findIndex = /* @__PURE__ */ function() {
    return findIndexImpl(Just.create)(Nothing.value);
  }();
  var elemIndex = function(dictEq) {
    var eq22 = eq(dictEq);
    return function(x5) {
      return findIndex(function(v) {
        return eq22(v)(x5);
      });
    };
  };
  var elem2 = function(dictEq) {
    var elemIndex1 = elemIndex(dictEq);
    return function(a) {
      return function(arr) {
        return isJust(elemIndex1(a)(arr));
      };
    };
  };
  var deleteAt = /* @__PURE__ */ function() {
    return _deleteAt(Just.create)(Nothing.value);
  }();
  var cons = function(x5) {
    return function(xs) {
      return append2([x5])(xs);
    };
  };
  var concatMap = /* @__PURE__ */ flip(/* @__PURE__ */ bind(bindArray));
  var mapMaybe = function(f) {
    return concatMap(function() {
      var $191 = maybe([])(singleton2);
      return function($192) {
        return $191(f($192));
      };
    }());
  };
  var catMaybes = /* @__PURE__ */ mapMaybe(/* @__PURE__ */ identity(categoryFn));

  // output/Data.Enum/foreign.js
  function toCharCode(c) {
    return c.charCodeAt(0);
  }
  function fromCharCode(c) {
    return String.fromCharCode(c);
  }

  // output/Data.Enum/index.js
  var bottom1 = /* @__PURE__ */ bottom(boundedChar);
  var top1 = /* @__PURE__ */ top(boundedChar);
  var toEnum = function(dict) {
    return dict.toEnum;
  };
  var fromEnum = function(dict) {
    return dict.fromEnum;
  };
  var defaultSucc = function(toEnum$prime) {
    return function(fromEnum$prime) {
      return function(a) {
        return toEnum$prime(fromEnum$prime(a) + 1 | 0);
      };
    };
  };
  var defaultPred = function(toEnum$prime) {
    return function(fromEnum$prime) {
      return function(a) {
        return toEnum$prime(fromEnum$prime(a) - 1 | 0);
      };
    };
  };
  var charToEnum = function(v) {
    if (v >= toCharCode(bottom1) && v <= toCharCode(top1)) {
      return new Just(fromCharCode(v));
    }
    ;
    return Nothing.value;
  };
  var enumChar = {
    succ: /* @__PURE__ */ defaultSucc(charToEnum)(toCharCode),
    pred: /* @__PURE__ */ defaultPred(charToEnum)(toCharCode),
    Ord0: function() {
      return ordChar;
    }
  };
  var boundedEnumChar = /* @__PURE__ */ function() {
    return {
      cardinality: toCharCode(top1) - toCharCode(bottom1) | 0,
      toEnum: charToEnum,
      fromEnum: toCharCode,
      Bounded0: function() {
        return boundedChar;
      },
      Enum1: function() {
        return enumChar;
      }
    };
  }();

  // output/Data.Char/index.js
  var toCharCode2 = /* @__PURE__ */ fromEnum(boundedEnumChar);
  var fromCharCode2 = /* @__PURE__ */ toEnum(boundedEnumChar);

  // output/Data.Profunctor/index.js
  var profunctorFn = {
    dimap: function(a2b) {
      return function(c2d) {
        return function(b2c) {
          return function($18) {
            return c2d(b2c(a2b($18)));
          };
        };
      };
    }
  };
  var dimap = function(dict) {
    return dict.dimap;
  };

  // output/Data.Profunctor.Choice/index.js
  var right = function(dict) {
    return dict.right;
  };
  var choiceFn = {
    left: function(v) {
      return function(v1) {
        if (v1 instanceof Left) {
          return new Left(v(v1.value0));
        }
        ;
        if (v1 instanceof Right) {
          return new Right(v1.value0);
        }
        ;
        throw new Error("Failed pattern match at Data.Profunctor.Choice (line 32, column 1 - line 35, column 16): " + [v.constructor.name, v1.constructor.name]);
      };
    },
    right: /* @__PURE__ */ map(functorEither),
    Profunctor0: function() {
      return profunctorFn;
    }
  };

  // output/Data.Profunctor.Strong/index.js
  var identity6 = /* @__PURE__ */ identity(categoryFn);
  var strongFn = {
    first: function(a2b) {
      return function(v) {
        return new Tuple(a2b(v.value0), v.value1);
      };
    },
    second: /* @__PURE__ */ map(functorTuple),
    Profunctor0: function() {
      return profunctorFn;
    }
  };
  var second = function(dict) {
    return dict.second;
  };
  var first = function(dict) {
    return dict.first;
  };
  var splitStrong = function(dictCategory) {
    var composeFlipped2 = composeFlipped(dictCategory.Semigroupoid0());
    return function(dictStrong) {
      var first1 = first(dictStrong);
      var second1 = second(dictStrong);
      return function(l) {
        return function(r3) {
          return composeFlipped2(first1(l))(second1(r3));
        };
      };
    };
  };
  var fanout = function(dictCategory) {
    var identity1 = identity(dictCategory);
    var composeFlipped2 = composeFlipped(dictCategory.Semigroupoid0());
    var splitStrong1 = splitStrong(dictCategory);
    return function(dictStrong) {
      var dimap2 = dimap(dictStrong.Profunctor0());
      var splitStrong2 = splitStrong1(dictStrong);
      return function(l) {
        return function(r3) {
          var split2 = dimap2(identity6)(function(a) {
            return new Tuple(a, a);
          })(identity1);
          return composeFlipped2(split2)(splitStrong2(l)(r3));
        };
      };
    };
  };

  // output/Data.Lens.AffineTraversal/index.js
  var identity7 = /* @__PURE__ */ identity(categoryFn);
  var fanout2 = /* @__PURE__ */ fanout(categoryFn)(strongFn);
  var affineTraversal$prime = function(to2) {
    return function(dictStrong) {
      var second2 = second(dictStrong);
      return function(dictChoice) {
        var dimap2 = dimap(dictChoice.Profunctor0());
        var right2 = right(dictChoice);
        return function(pab) {
          return dimap2(to2)(function(v) {
            return either(identity7)(v.value0)(v.value1);
          })(second2(right2(pab)));
        };
      };
    };
  };
  var affineTraversal = function(set3) {
    return function(pre) {
      return function(dictStrong) {
        return function(dictChoice) {
          return affineTraversal$prime(fanout2(set3)(pre))(dictStrong)(dictChoice);
        };
      };
    };
  };

  // output/Data.Function.Uncurried/foreign.js
  var runFn4 = function(fn) {
    return function(a) {
      return function(b) {
        return function(c) {
          return function(d) {
            return fn(a, b, c, d);
          };
        };
      };
    };
  };

  // output/Record/index.js
  var insert = function(dictIsSymbol) {
    var reflectSymbol2 = reflectSymbol(dictIsSymbol);
    return function() {
      return function() {
        return function(l) {
          return function(a) {
            return function(r3) {
              return unsafeSet(reflectSymbol2(l))(a)(r3);
            };
          };
        };
      };
    };
  };
  var get = function(dictIsSymbol) {
    var reflectSymbol2 = reflectSymbol(dictIsSymbol);
    return function() {
      return function(l) {
        return function(r3) {
          return unsafeGet(reflectSymbol2(l))(r3);
        };
      };
    };
  };

  // output/Data.String.CodeUnits/foreign.js
  var fromCharArray = function(a) {
    return a.join("");
  };
  var toCharArray = function(s) {
    return s.split("");
  };
  var singleton3 = function(c) {
    return c;
  };

  // output/GraphParams.Coloring/foreign.js
  var colorWithFirstAvailable = (graph, colors, u) => {
    const adjColors = new Set(graph[u].map((v) => colors[v]));
    let availableColor = 0;
    while (adjColors.has(availableColor)) {
      availableColor++;
    }
    colors[u] = availableColor;
    return availableColor;
  };
  var customColoring = (graph) => (ordering) => {
    const colors = new Array(ordering.length);
    colors.fill(-1);
    for (const vertex of ordering) {
      colorWithFirstAvailable(graph, colors, vertex);
    }
    return ordering.map((v) => ({ vertex: v, color: colors[v] }));
  };
  var dsaturStep = (graph, colors) => {
    let bestCandidate = null;
    for (let u = 0; u < graph.length; u++) {
      if (colors[u] !== -1)
        continue;
      degree = graph[u].length;
      saturation = new Set(graph[u].map((w) => colors[w])).size;
      if (bestCandidate === null || bestCandidate.saturation < saturation || bestCandidate.saturation === saturation && bestCandidate.degree < degree) {
        bestCandidate = { vertex: u, saturation, degree };
      }
    }
    return bestCandidate.vertex;
  };
  var dsatur = (graph) => {
    const colors = new Array(graph.length);
    const result = [];
    colors.fill(-1);
    for (let i = 0; i < graph.length; i++) {
      const v = dsaturStep(graph, colors);
      const c = colorWithFirstAvailable(graph, colors, v);
      result.push({ vertex: v, color: c });
    }
    return result;
  };
  var indSetColoringImpl = (graph) => (order) => {
    const result = [];
    let color = 0;
    const colored = new Array(graph.length);
    colored.fill(false);
    while (result.length < graph.length) {
      const adjArray = new Array(graph.length);
      adjArray.fill(false);
      for (const v of order) {
        if (colored[v] || adjArray[v])
          continue;
        result.push({ vertex: v, color });
        colored[v] = true;
        for (const u of graph[v])
          adjArray[u] = true;
      }
      color++;
    }
    return result;
  };

  // output/Control.Monad.State.Class/index.js
  var state = function(dict) {
    return dict.state;
  };
  var modify_2 = function(dictMonadState) {
    var state1 = state(dictMonadState);
    return function(f) {
      return state1(function(s) {
        return new Tuple(unit, f(s));
      });
    };
  };
  var get2 = function(dictMonadState) {
    return state(dictMonadState)(function(s) {
      return new Tuple(s, s);
    });
  };

  // output/Effect.Class/index.js
  var liftEffect = function(dict) {
    return dict.liftEffect;
  };

  // output/Data.Array.NonEmpty.Internal/foreign.js
  var traverse1Impl = function() {
    function Cont(fn) {
      this.fn = fn;
    }
    var emptyList = {};
    var ConsCell = function(head4, tail2) {
      this.head = head4;
      this.tail = tail2;
    };
    function finalCell(head4) {
      return new ConsCell(head4, emptyList);
    }
    function consList(x5) {
      return function(xs) {
        return new ConsCell(x5, xs);
      };
    }
    function listToArray(list) {
      var arr = [];
      var xs = list;
      while (xs !== emptyList) {
        arr.push(xs.head);
        xs = xs.tail;
      }
      return arr;
    }
    return function(apply5) {
      return function(map17) {
        return function(f) {
          var buildFrom = function(x5, ys) {
            return apply5(map17(consList)(f(x5)))(ys);
          };
          var go2 = function(acc, currentLen, xs) {
            if (currentLen === 0) {
              return acc;
            } else {
              var last3 = xs[currentLen - 1];
              return new Cont(function() {
                var built = go2(buildFrom(last3, acc), currentLen - 1, xs);
                return built;
              });
            }
          };
          return function(array) {
            var acc = map17(finalCell)(f(array[array.length - 1]));
            var result = go2(acc, array.length - 1, array);
            while (result instanceof Cont) {
              result = result.fn();
            }
            return map17(listToArray)(result);
          };
        };
      };
    };
  }();

  // output/Data.FoldableWithIndex/index.js
  var foldr8 = /* @__PURE__ */ foldr(foldableArray);
  var mapWithIndex3 = /* @__PURE__ */ mapWithIndex(functorWithIndexArray);
  var foldl8 = /* @__PURE__ */ foldl(foldableArray);
  var foldrWithIndex = function(dict) {
    return dict.foldrWithIndex;
  };
  var foldMapWithIndexDefaultR = function(dictFoldableWithIndex) {
    var foldrWithIndex1 = foldrWithIndex(dictFoldableWithIndex);
    return function(dictMonoid) {
      var append7 = append(dictMonoid.Semigroup0());
      var mempty2 = mempty(dictMonoid);
      return function(f) {
        return foldrWithIndex1(function(i) {
          return function(x5) {
            return function(acc) {
              return append7(f(i)(x5))(acc);
            };
          };
        })(mempty2);
      };
    };
  };
  var foldableWithIndexArray = {
    foldrWithIndex: function(f) {
      return function(z) {
        var $291 = foldr8(function(v) {
          return function(y5) {
            return f(v.value0)(v.value1)(y5);
          };
        })(z);
        var $292 = mapWithIndex3(Tuple.create);
        return function($293) {
          return $291($292($293));
        };
      };
    },
    foldlWithIndex: function(f) {
      return function(z) {
        var $294 = foldl8(function(y5) {
          return function(v) {
            return f(v.value0)(y5)(v.value1);
          };
        })(z);
        var $295 = mapWithIndex3(Tuple.create);
        return function($296) {
          return $294($295($296));
        };
      };
    },
    foldMapWithIndex: function(dictMonoid) {
      return foldMapWithIndexDefaultR(foldableWithIndexArray)(dictMonoid);
    },
    Foldable0: function() {
      return foldableArray;
    }
  };

  // output/Data.TraversableWithIndex/index.js
  var traverseWithIndexDefault = function(dictTraversableWithIndex) {
    var sequence2 = sequence(dictTraversableWithIndex.Traversable2());
    var mapWithIndex4 = mapWithIndex(dictTraversableWithIndex.FunctorWithIndex0());
    return function(dictApplicative) {
      var sequence12 = sequence2(dictApplicative);
      return function(f) {
        var $174 = mapWithIndex4(f);
        return function($175) {
          return sequence12($174($175));
        };
      };
    };
  };
  var traverseWithIndex = function(dict) {
    return dict.traverseWithIndex;
  };
  var traversableWithIndexArray = {
    traverseWithIndex: function(dictApplicative) {
      return traverseWithIndexDefault(traversableWithIndexArray)(dictApplicative);
    },
    FunctorWithIndex0: function() {
      return functorWithIndexArray;
    },
    FoldableWithIndex1: function() {
      return foldableWithIndexArray;
    },
    Traversable2: function() {
      return traversableArray;
    }
  };

  // output/Data.Int/foreign.js
  var fromNumberImpl = function(just) {
    return function(nothing) {
      return function(n) {
        return (n | 0) === n ? just(n) : nothing;
      };
    };
  };
  var toNumber = function(n) {
    return n;
  };

  // output/Data.Number/foreign.js
  var isFiniteImpl = isFinite;
  var cos = Math.cos;
  var floor = Math.floor;
  var sin = Math.sin;
  var sqrt = Math.sqrt;

  // output/Data.Number/index.js
  var pi = 3.141592653589793;

  // output/Data.Int/index.js
  var top2 = /* @__PURE__ */ top(boundedInt);
  var bottom2 = /* @__PURE__ */ bottom(boundedInt);
  var fromNumber = /* @__PURE__ */ function() {
    return fromNumberImpl(Just.create)(Nothing.value);
  }();
  var unsafeClamp = function(x5) {
    if (!isFiniteImpl(x5)) {
      return 0;
    }
    ;
    if (x5 >= toNumber(top2)) {
      return top2;
    }
    ;
    if (x5 <= toNumber(bottom2)) {
      return bottom2;
    }
    ;
    if (otherwise) {
      return fromMaybe(0)(fromNumber(x5));
    }
    ;
    throw new Error("Failed pattern match at Data.Int (line 72, column 1 - line 72, column 29): " + [x5.constructor.name]);
  };
  var floor2 = function($39) {
    return unsafeClamp(floor($39));
  };

  // output/Data.List.Types/index.js
  var Nil = /* @__PURE__ */ function() {
    function Nil3() {
    }
    ;
    Nil3.value = new Nil3();
    return Nil3;
  }();
  var Cons = /* @__PURE__ */ function() {
    function Cons3(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Cons3.create = function(value0) {
      return function(value1) {
        return new Cons3(value0, value1);
      };
    };
    return Cons3;
  }();

  // output/Data.List/index.js
  var reverse2 = /* @__PURE__ */ function() {
    var go2 = function($copy_v) {
      return function($copy_v1) {
        var $tco_var_v = $copy_v;
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v, v1) {
          if (v1 instanceof Nil) {
            $tco_done = true;
            return v;
          }
          ;
          if (v1 instanceof Cons) {
            $tco_var_v = new Cons(v1.value0, v);
            $copy_v1 = v1.value1;
            return;
          }
          ;
          throw new Error("Failed pattern match at Data.List (line 368, column 3 - line 368, column 19): " + [v.constructor.name, v1.constructor.name]);
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($tco_var_v, $copy_v1);
        }
        ;
        return $tco_result;
      };
    };
    return go2(Nil.value);
  }();

  // output/Data.Lens.Setter/index.js
  var over = function(l) {
    return l;
  };
  var set2 = function(l) {
    return function(b) {
      return over(l)($$const(b));
    };
  };

  // output/Partial.Unsafe/foreign.js
  var _unsafePartial = function(f) {
    return f();
  };

  // output/Partial/foreign.js
  var _crashWith = function(msg) {
    throw new Error(msg);
  };

  // output/Partial/index.js
  var crashWith = function() {
    return _crashWith;
  };

  // output/Partial.Unsafe/index.js
  var crashWith2 = /* @__PURE__ */ crashWith();
  var unsafePartial = _unsafePartial;
  var unsafeCrashWith = function(msg) {
    return unsafePartial(function() {
      return crashWith2(msg);
    });
  };

  // output/Data.Map.Internal/index.js
  var Leaf = /* @__PURE__ */ function() {
    function Leaf2() {
    }
    ;
    Leaf2.value = new Leaf2();
    return Leaf2;
  }();
  var Two = /* @__PURE__ */ function() {
    function Two2(value0, value1, value22, value32) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
    }
    ;
    Two2.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return function(value32) {
            return new Two2(value0, value1, value22, value32);
          };
        };
      };
    };
    return Two2;
  }();
  var Three = /* @__PURE__ */ function() {
    function Three2(value0, value1, value22, value32, value42, value52, value62) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
      this.value4 = value42;
      this.value5 = value52;
      this.value6 = value62;
    }
    ;
    Three2.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return function(value32) {
            return function(value42) {
              return function(value52) {
                return function(value62) {
                  return new Three2(value0, value1, value22, value32, value42, value52, value62);
                };
              };
            };
          };
        };
      };
    };
    return Three2;
  }();
  var TwoLeft = /* @__PURE__ */ function() {
    function TwoLeft2(value0, value1, value22) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
    }
    ;
    TwoLeft2.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return new TwoLeft2(value0, value1, value22);
        };
      };
    };
    return TwoLeft2;
  }();
  var TwoRight = /* @__PURE__ */ function() {
    function TwoRight2(value0, value1, value22) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
    }
    ;
    TwoRight2.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return new TwoRight2(value0, value1, value22);
        };
      };
    };
    return TwoRight2;
  }();
  var ThreeLeft = /* @__PURE__ */ function() {
    function ThreeLeft2(value0, value1, value22, value32, value42, value52) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
      this.value4 = value42;
      this.value5 = value52;
    }
    ;
    ThreeLeft2.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return function(value32) {
            return function(value42) {
              return function(value52) {
                return new ThreeLeft2(value0, value1, value22, value32, value42, value52);
              };
            };
          };
        };
      };
    };
    return ThreeLeft2;
  }();
  var ThreeMiddle = /* @__PURE__ */ function() {
    function ThreeMiddle2(value0, value1, value22, value32, value42, value52) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
      this.value4 = value42;
      this.value5 = value52;
    }
    ;
    ThreeMiddle2.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return function(value32) {
            return function(value42) {
              return function(value52) {
                return new ThreeMiddle2(value0, value1, value22, value32, value42, value52);
              };
            };
          };
        };
      };
    };
    return ThreeMiddle2;
  }();
  var ThreeRight = /* @__PURE__ */ function() {
    function ThreeRight2(value0, value1, value22, value32, value42, value52) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
      this.value4 = value42;
      this.value5 = value52;
    }
    ;
    ThreeRight2.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return function(value32) {
            return function(value42) {
              return function(value52) {
                return new ThreeRight2(value0, value1, value22, value32, value42, value52);
              };
            };
          };
        };
      };
    };
    return ThreeRight2;
  }();
  var KickUp = /* @__PURE__ */ function() {
    function KickUp2(value0, value1, value22, value32) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
    }
    ;
    KickUp2.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return function(value32) {
            return new KickUp2(value0, value1, value22, value32);
          };
        };
      };
    };
    return KickUp2;
  }();
  var lookup = function(dictOrd) {
    var compare2 = compare(dictOrd);
    return function(k) {
      var go2 = function($copy_v) {
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v) {
          if (v instanceof Leaf) {
            $tco_done = true;
            return Nothing.value;
          }
          ;
          if (v instanceof Two) {
            var v2 = compare2(k)(v.value1);
            if (v2 instanceof EQ) {
              $tco_done = true;
              return new Just(v.value2);
            }
            ;
            if (v2 instanceof LT) {
              $copy_v = v.value0;
              return;
            }
            ;
            $copy_v = v.value3;
            return;
          }
          ;
          if (v instanceof Three) {
            var v3 = compare2(k)(v.value1);
            if (v3 instanceof EQ) {
              $tco_done = true;
              return new Just(v.value2);
            }
            ;
            var v4 = compare2(k)(v.value4);
            if (v4 instanceof EQ) {
              $tco_done = true;
              return new Just(v.value5);
            }
            ;
            if (v3 instanceof LT) {
              $copy_v = v.value0;
              return;
            }
            ;
            if (v4 instanceof GT) {
              $copy_v = v.value6;
              return;
            }
            ;
            $copy_v = v.value3;
            return;
          }
          ;
          throw new Error("Failed pattern match at Data.Map.Internal (line 241, column 5 - line 241, column 22): " + [v.constructor.name]);
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($copy_v);
        }
        ;
        return $tco_result;
      };
      return go2;
    };
  };
  var fromZipper = function($copy_dictOrd) {
    return function($copy_v) {
      return function($copy_v1) {
        var $tco_var_dictOrd = $copy_dictOrd;
        var $tco_var_v = $copy_v;
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(dictOrd, v, v1) {
          if (v instanceof Nil) {
            $tco_done = true;
            return v1;
          }
          ;
          if (v instanceof Cons) {
            if (v.value0 instanceof TwoLeft) {
              $tco_var_dictOrd = dictOrd;
              $tco_var_v = v.value1;
              $copy_v1 = new Two(v1, v.value0.value0, v.value0.value1, v.value0.value2);
              return;
            }
            ;
            if (v.value0 instanceof TwoRight) {
              $tco_var_dictOrd = dictOrd;
              $tco_var_v = v.value1;
              $copy_v1 = new Two(v.value0.value0, v.value0.value1, v.value0.value2, v1);
              return;
            }
            ;
            if (v.value0 instanceof ThreeLeft) {
              $tco_var_dictOrd = dictOrd;
              $tco_var_v = v.value1;
              $copy_v1 = new Three(v1, v.value0.value0, v.value0.value1, v.value0.value2, v.value0.value3, v.value0.value4, v.value0.value5);
              return;
            }
            ;
            if (v.value0 instanceof ThreeMiddle) {
              $tco_var_dictOrd = dictOrd;
              $tco_var_v = v.value1;
              $copy_v1 = new Three(v.value0.value0, v.value0.value1, v.value0.value2, v1, v.value0.value3, v.value0.value4, v.value0.value5);
              return;
            }
            ;
            if (v.value0 instanceof ThreeRight) {
              $tco_var_dictOrd = dictOrd;
              $tco_var_v = v.value1;
              $copy_v1 = new Three(v.value0.value0, v.value0.value1, v.value0.value2, v.value0.value3, v.value0.value4, v.value0.value5, v1);
              return;
            }
            ;
            throw new Error("Failed pattern match at Data.Map.Internal (line 462, column 3 - line 467, column 88): " + [v.value0.constructor.name]);
          }
          ;
          throw new Error("Failed pattern match at Data.Map.Internal (line 459, column 1 - line 459, column 80): " + [v.constructor.name, v1.constructor.name]);
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($tco_var_dictOrd, $tco_var_v, $copy_v1);
        }
        ;
        return $tco_result;
      };
    };
  };
  var insert3 = function(dictOrd) {
    var fromZipper1 = fromZipper(dictOrd);
    var compare2 = compare(dictOrd);
    return function(k) {
      return function(v) {
        var up = function($copy_v1) {
          return function($copy_v2) {
            var $tco_var_v1 = $copy_v1;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(v1, v2) {
              if (v1 instanceof Nil) {
                $tco_done = true;
                return new Two(v2.value0, v2.value1, v2.value2, v2.value3);
              }
              ;
              if (v1 instanceof Cons) {
                if (v1.value0 instanceof TwoLeft) {
                  $tco_done = true;
                  return fromZipper1(v1.value1)(new Three(v2.value0, v2.value1, v2.value2, v2.value3, v1.value0.value0, v1.value0.value1, v1.value0.value2));
                }
                ;
                if (v1.value0 instanceof TwoRight) {
                  $tco_done = true;
                  return fromZipper1(v1.value1)(new Three(v1.value0.value0, v1.value0.value1, v1.value0.value2, v2.value0, v2.value1, v2.value2, v2.value3));
                }
                ;
                if (v1.value0 instanceof ThreeLeft) {
                  $tco_var_v1 = v1.value1;
                  $copy_v2 = new KickUp(new Two(v2.value0, v2.value1, v2.value2, v2.value3), v1.value0.value0, v1.value0.value1, new Two(v1.value0.value2, v1.value0.value3, v1.value0.value4, v1.value0.value5));
                  return;
                }
                ;
                if (v1.value0 instanceof ThreeMiddle) {
                  $tco_var_v1 = v1.value1;
                  $copy_v2 = new KickUp(new Two(v1.value0.value0, v1.value0.value1, v1.value0.value2, v2.value0), v2.value1, v2.value2, new Two(v2.value3, v1.value0.value3, v1.value0.value4, v1.value0.value5));
                  return;
                }
                ;
                if (v1.value0 instanceof ThreeRight) {
                  $tco_var_v1 = v1.value1;
                  $copy_v2 = new KickUp(new Two(v1.value0.value0, v1.value0.value1, v1.value0.value2, v1.value0.value3), v1.value0.value4, v1.value0.value5, new Two(v2.value0, v2.value1, v2.value2, v2.value3));
                  return;
                }
                ;
                throw new Error("Failed pattern match at Data.Map.Internal (line 498, column 5 - line 503, column 108): " + [v1.value0.constructor.name, v2.constructor.name]);
              }
              ;
              throw new Error("Failed pattern match at Data.Map.Internal (line 495, column 3 - line 495, column 56): " + [v1.constructor.name, v2.constructor.name]);
            }
            ;
            while (!$tco_done) {
              $tco_result = $tco_loop($tco_var_v1, $copy_v2);
            }
            ;
            return $tco_result;
          };
        };
        var down = function($copy_v1) {
          return function($copy_v2) {
            var $tco_var_v1 = $copy_v1;
            var $tco_done1 = false;
            var $tco_result;
            function $tco_loop(v1, v2) {
              if (v2 instanceof Leaf) {
                $tco_done1 = true;
                return up(v1)(new KickUp(Leaf.value, k, v, Leaf.value));
              }
              ;
              if (v2 instanceof Two) {
                var v3 = compare2(k)(v2.value1);
                if (v3 instanceof EQ) {
                  $tco_done1 = true;
                  return fromZipper1(v1)(new Two(v2.value0, k, v, v2.value3));
                }
                ;
                if (v3 instanceof LT) {
                  $tco_var_v1 = new Cons(new TwoLeft(v2.value1, v2.value2, v2.value3), v1);
                  $copy_v2 = v2.value0;
                  return;
                }
                ;
                $tco_var_v1 = new Cons(new TwoRight(v2.value0, v2.value1, v2.value2), v1);
                $copy_v2 = v2.value3;
                return;
              }
              ;
              if (v2 instanceof Three) {
                var v3 = compare2(k)(v2.value1);
                if (v3 instanceof EQ) {
                  $tco_done1 = true;
                  return fromZipper1(v1)(new Three(v2.value0, k, v, v2.value3, v2.value4, v2.value5, v2.value6));
                }
                ;
                var v4 = compare2(k)(v2.value4);
                if (v4 instanceof EQ) {
                  $tco_done1 = true;
                  return fromZipper1(v1)(new Three(v2.value0, v2.value1, v2.value2, v2.value3, k, v, v2.value6));
                }
                ;
                if (v3 instanceof LT) {
                  $tco_var_v1 = new Cons(new ThreeLeft(v2.value1, v2.value2, v2.value3, v2.value4, v2.value5, v2.value6), v1);
                  $copy_v2 = v2.value0;
                  return;
                }
                ;
                if (v3 instanceof GT && v4 instanceof LT) {
                  $tco_var_v1 = new Cons(new ThreeMiddle(v2.value0, v2.value1, v2.value2, v2.value4, v2.value5, v2.value6), v1);
                  $copy_v2 = v2.value3;
                  return;
                }
                ;
                $tco_var_v1 = new Cons(new ThreeRight(v2.value0, v2.value1, v2.value2, v2.value3, v2.value4, v2.value5), v1);
                $copy_v2 = v2.value6;
                return;
              }
              ;
              throw new Error("Failed pattern match at Data.Map.Internal (line 478, column 3 - line 478, column 55): " + [v1.constructor.name, v2.constructor.name]);
            }
            ;
            while (!$tco_done1) {
              $tco_result = $tco_loop($tco_var_v1, $copy_v2);
            }
            ;
            return $tco_result;
          };
        };
        return down(Nil.value);
      };
    };
  };
  var empty2 = /* @__PURE__ */ function() {
    return Leaf.value;
  }();

  // output/Foreign.Object/foreign.js
  function _copyST(m) {
    return function() {
      var r3 = {};
      for (var k in m) {
        if (hasOwnProperty.call(m, k)) {
          r3[k] = m[k];
        }
      }
      return r3;
    };
  }
  var empty3 = {};
  function runST(f) {
    return f();
  }
  function _lookup(no, yes, k, m) {
    return k in m ? yes(m[k]) : no;
  }
  function toArrayWithKey(f) {
    return function(m) {
      var r3 = [];
      for (var k in m) {
        if (hasOwnProperty.call(m, k)) {
          r3.push(f(k)(m[k]));
        }
      }
      return r3;
    };
  }
  var keys2 = Object.keys || toArrayWithKey(function(k) {
    return function() {
      return k;
    };
  });

  // output/Foreign.Object.ST/foreign.js
  function poke2(k) {
    return function(v) {
      return function(m) {
        return function() {
          m[k] = v;
          return m;
        };
      };
    };
  }

  // output/Foreign.Object/index.js
  var thawST = _copyST;
  var mutate = function(f) {
    return function(m) {
      return runST(function __do() {
        var s = thawST(m)();
        f(s)();
        return s;
      });
    };
  };
  var lookup2 = /* @__PURE__ */ function() {
    return runFn4(_lookup)(Nothing.value)(Just.create);
  }();
  var insert4 = function(k) {
    return function(v) {
      return mutate(poke2(k)(v));
    };
  };

  // output/Effect.Aff/foreign.js
  var Aff = function() {
    var EMPTY = {};
    var PURE = "Pure";
    var THROW = "Throw";
    var CATCH = "Catch";
    var SYNC = "Sync";
    var ASYNC = "Async";
    var BIND = "Bind";
    var BRACKET = "Bracket";
    var FORK = "Fork";
    var SEQ = "Sequential";
    var MAP = "Map";
    var APPLY = "Apply";
    var ALT = "Alt";
    var CONS = "Cons";
    var RESUME = "Resume";
    var RELEASE = "Release";
    var FINALIZER = "Finalizer";
    var FINALIZED = "Finalized";
    var FORKED = "Forked";
    var FIBER = "Fiber";
    var THUNK = "Thunk";
    function Aff2(tag, _13, _23, _3) {
      this.tag = tag;
      this._1 = _13;
      this._2 = _23;
      this._3 = _3;
    }
    function AffCtr(tag) {
      var fn = function(_13, _23, _3) {
        return new Aff2(tag, _13, _23, _3);
      };
      fn.tag = tag;
      return fn;
    }
    function nonCanceler(error2) {
      return new Aff2(PURE, void 0);
    }
    function runEff(eff) {
      try {
        eff();
      } catch (error2) {
        setTimeout(function() {
          throw error2;
        }, 0);
      }
    }
    function runSync(left2, right2, eff) {
      try {
        return right2(eff());
      } catch (error2) {
        return left2(error2);
      }
    }
    function runAsync(left2, eff, k) {
      try {
        return eff(k)();
      } catch (error2) {
        k(left2(error2))();
        return nonCanceler;
      }
    }
    var Scheduler = function() {
      var limit = 1024;
      var size5 = 0;
      var ix2 = 0;
      var queue = new Array(limit);
      var draining = false;
      function drain() {
        var thunk;
        draining = true;
        while (size5 !== 0) {
          size5--;
          thunk = queue[ix2];
          queue[ix2] = void 0;
          ix2 = (ix2 + 1) % limit;
          thunk();
        }
        draining = false;
      }
      return {
        isDraining: function() {
          return draining;
        },
        enqueue: function(cb) {
          var i, tmp;
          if (size5 === limit) {
            tmp = draining;
            drain();
            draining = tmp;
          }
          queue[(ix2 + size5) % limit] = cb;
          size5++;
          if (!draining) {
            drain();
          }
        }
      };
    }();
    function Supervisor(util) {
      var fibers = {};
      var fiberId = 0;
      var count = 0;
      return {
        register: function(fiber) {
          var fid = fiberId++;
          fiber.onComplete({
            rethrow: true,
            handler: function(result) {
              return function() {
                count--;
                delete fibers[fid];
              };
            }
          })();
          fibers[fid] = fiber;
          count++;
        },
        isEmpty: function() {
          return count === 0;
        },
        killAll: function(killError, cb) {
          return function() {
            if (count === 0) {
              return cb();
            }
            var killCount = 0;
            var kills = {};
            function kill(fid) {
              kills[fid] = fibers[fid].kill(killError, function(result) {
                return function() {
                  delete kills[fid];
                  killCount--;
                  if (util.isLeft(result) && util.fromLeft(result)) {
                    setTimeout(function() {
                      throw util.fromLeft(result);
                    }, 0);
                  }
                  if (killCount === 0) {
                    cb();
                  }
                };
              })();
            }
            for (var k in fibers) {
              if (fibers.hasOwnProperty(k)) {
                killCount++;
                kill(k);
              }
            }
            fibers = {};
            fiberId = 0;
            count = 0;
            return function(error2) {
              return new Aff2(SYNC, function() {
                for (var k2 in kills) {
                  if (kills.hasOwnProperty(k2)) {
                    kills[k2]();
                  }
                }
              });
            };
          };
        }
      };
    }
    var SUSPENDED = 0;
    var CONTINUE = 1;
    var STEP_BIND = 2;
    var STEP_RESULT = 3;
    var PENDING = 4;
    var RETURN = 5;
    var COMPLETED = 6;
    function Fiber(util, supervisor, aff) {
      var runTick = 0;
      var status = SUSPENDED;
      var step4 = aff;
      var fail = null;
      var interrupt = null;
      var bhead = null;
      var btail = null;
      var attempts = null;
      var bracketCount = 0;
      var joinId = 0;
      var joins = null;
      var rethrow = true;
      function run3(localRunTick) {
        var tmp, result, attempt;
        while (true) {
          tmp = null;
          result = null;
          attempt = null;
          switch (status) {
            case STEP_BIND:
              status = CONTINUE;
              try {
                step4 = bhead(step4);
                if (btail === null) {
                  bhead = null;
                } else {
                  bhead = btail._1;
                  btail = btail._2;
                }
              } catch (e) {
                status = RETURN;
                fail = util.left(e);
                step4 = null;
              }
              break;
            case STEP_RESULT:
              if (util.isLeft(step4)) {
                status = RETURN;
                fail = step4;
                step4 = null;
              } else if (bhead === null) {
                status = RETURN;
              } else {
                status = STEP_BIND;
                step4 = util.fromRight(step4);
              }
              break;
            case CONTINUE:
              switch (step4.tag) {
                case BIND:
                  if (bhead) {
                    btail = new Aff2(CONS, bhead, btail);
                  }
                  bhead = step4._2;
                  status = CONTINUE;
                  step4 = step4._1;
                  break;
                case PURE:
                  if (bhead === null) {
                    status = RETURN;
                    step4 = util.right(step4._1);
                  } else {
                    status = STEP_BIND;
                    step4 = step4._1;
                  }
                  break;
                case SYNC:
                  status = STEP_RESULT;
                  step4 = runSync(util.left, util.right, step4._1);
                  break;
                case ASYNC:
                  status = PENDING;
                  step4 = runAsync(util.left, step4._1, function(result2) {
                    return function() {
                      if (runTick !== localRunTick) {
                        return;
                      }
                      runTick++;
                      Scheduler.enqueue(function() {
                        if (runTick !== localRunTick + 1) {
                          return;
                        }
                        status = STEP_RESULT;
                        step4 = result2;
                        run3(runTick);
                      });
                    };
                  });
                  return;
                case THROW:
                  status = RETURN;
                  fail = util.left(step4._1);
                  step4 = null;
                  break;
                case CATCH:
                  if (bhead === null) {
                    attempts = new Aff2(CONS, step4, attempts, interrupt);
                  } else {
                    attempts = new Aff2(CONS, step4, new Aff2(CONS, new Aff2(RESUME, bhead, btail), attempts, interrupt), interrupt);
                  }
                  bhead = null;
                  btail = null;
                  status = CONTINUE;
                  step4 = step4._1;
                  break;
                case BRACKET:
                  bracketCount++;
                  if (bhead === null) {
                    attempts = new Aff2(CONS, step4, attempts, interrupt);
                  } else {
                    attempts = new Aff2(CONS, step4, new Aff2(CONS, new Aff2(RESUME, bhead, btail), attempts, interrupt), interrupt);
                  }
                  bhead = null;
                  btail = null;
                  status = CONTINUE;
                  step4 = step4._1;
                  break;
                case FORK:
                  status = STEP_RESULT;
                  tmp = Fiber(util, supervisor, step4._2);
                  if (supervisor) {
                    supervisor.register(tmp);
                  }
                  if (step4._1) {
                    tmp.run();
                  }
                  step4 = util.right(tmp);
                  break;
                case SEQ:
                  status = CONTINUE;
                  step4 = sequential2(util, supervisor, step4._1);
                  break;
              }
              break;
            case RETURN:
              bhead = null;
              btail = null;
              if (attempts === null) {
                status = COMPLETED;
                step4 = interrupt || fail || step4;
              } else {
                tmp = attempts._3;
                attempt = attempts._1;
                attempts = attempts._2;
                switch (attempt.tag) {
                  case CATCH:
                    if (interrupt && interrupt !== tmp && bracketCount === 0) {
                      status = RETURN;
                    } else if (fail) {
                      status = CONTINUE;
                      step4 = attempt._2(util.fromLeft(fail));
                      fail = null;
                    }
                    break;
                  case RESUME:
                    if (interrupt && interrupt !== tmp && bracketCount === 0 || fail) {
                      status = RETURN;
                    } else {
                      bhead = attempt._1;
                      btail = attempt._2;
                      status = STEP_BIND;
                      step4 = util.fromRight(step4);
                    }
                    break;
                  case BRACKET:
                    bracketCount--;
                    if (fail === null) {
                      result = util.fromRight(step4);
                      attempts = new Aff2(CONS, new Aff2(RELEASE, attempt._2, result), attempts, tmp);
                      if (interrupt === tmp || bracketCount > 0) {
                        status = CONTINUE;
                        step4 = attempt._3(result);
                      }
                    }
                    break;
                  case RELEASE:
                    attempts = new Aff2(CONS, new Aff2(FINALIZED, step4, fail), attempts, interrupt);
                    status = CONTINUE;
                    if (interrupt && interrupt !== tmp && bracketCount === 0) {
                      step4 = attempt._1.killed(util.fromLeft(interrupt))(attempt._2);
                    } else if (fail) {
                      step4 = attempt._1.failed(util.fromLeft(fail))(attempt._2);
                    } else {
                      step4 = attempt._1.completed(util.fromRight(step4))(attempt._2);
                    }
                    fail = null;
                    bracketCount++;
                    break;
                  case FINALIZER:
                    bracketCount++;
                    attempts = new Aff2(CONS, new Aff2(FINALIZED, step4, fail), attempts, interrupt);
                    status = CONTINUE;
                    step4 = attempt._1;
                    break;
                  case FINALIZED:
                    bracketCount--;
                    status = RETURN;
                    step4 = attempt._1;
                    fail = attempt._2;
                    break;
                }
              }
              break;
            case COMPLETED:
              for (var k in joins) {
                if (joins.hasOwnProperty(k)) {
                  rethrow = rethrow && joins[k].rethrow;
                  runEff(joins[k].handler(step4));
                }
              }
              joins = null;
              if (interrupt && fail) {
                setTimeout(function() {
                  throw util.fromLeft(fail);
                }, 0);
              } else if (util.isLeft(step4) && rethrow) {
                setTimeout(function() {
                  if (rethrow) {
                    throw util.fromLeft(step4);
                  }
                }, 0);
              }
              return;
            case SUSPENDED:
              status = CONTINUE;
              break;
            case PENDING:
              return;
          }
        }
      }
      function onComplete(join3) {
        return function() {
          if (status === COMPLETED) {
            rethrow = rethrow && join3.rethrow;
            join3.handler(step4)();
            return function() {
            };
          }
          var jid = joinId++;
          joins = joins || {};
          joins[jid] = join3;
          return function() {
            if (joins !== null) {
              delete joins[jid];
            }
          };
        };
      }
      function kill(error2, cb) {
        return function() {
          if (status === COMPLETED) {
            cb(util.right(void 0))();
            return function() {
            };
          }
          var canceler = onComplete({
            rethrow: false,
            handler: function() {
              return cb(util.right(void 0));
            }
          })();
          switch (status) {
            case SUSPENDED:
              interrupt = util.left(error2);
              status = COMPLETED;
              step4 = interrupt;
              run3(runTick);
              break;
            case PENDING:
              if (interrupt === null) {
                interrupt = util.left(error2);
              }
              if (bracketCount === 0) {
                if (status === PENDING) {
                  attempts = new Aff2(CONS, new Aff2(FINALIZER, step4(error2)), attempts, interrupt);
                }
                status = RETURN;
                step4 = null;
                fail = null;
                run3(++runTick);
              }
              break;
            default:
              if (interrupt === null) {
                interrupt = util.left(error2);
              }
              if (bracketCount === 0) {
                status = RETURN;
                step4 = null;
                fail = null;
              }
          }
          return canceler;
        };
      }
      function join2(cb) {
        return function() {
          var canceler = onComplete({
            rethrow: false,
            handler: cb
          })();
          if (status === SUSPENDED) {
            run3(runTick);
          }
          return canceler;
        };
      }
      return {
        kill,
        join: join2,
        onComplete,
        isSuspended: function() {
          return status === SUSPENDED;
        },
        run: function() {
          if (status === SUSPENDED) {
            if (!Scheduler.isDraining()) {
              Scheduler.enqueue(function() {
                run3(runTick);
              });
            } else {
              run3(runTick);
            }
          }
        }
      };
    }
    function runPar(util, supervisor, par, cb) {
      var fiberId = 0;
      var fibers = {};
      var killId = 0;
      var kills = {};
      var early = new Error("[ParAff] Early exit");
      var interrupt = null;
      var root = EMPTY;
      function kill(error2, par2, cb2) {
        var step4 = par2;
        var head4 = null;
        var tail2 = null;
        var count = 0;
        var kills2 = {};
        var tmp, kid;
        loop:
          while (true) {
            tmp = null;
            switch (step4.tag) {
              case FORKED:
                if (step4._3 === EMPTY) {
                  tmp = fibers[step4._1];
                  kills2[count++] = tmp.kill(error2, function(result) {
                    return function() {
                      count--;
                      if (count === 0) {
                        cb2(result)();
                      }
                    };
                  });
                }
                if (head4 === null) {
                  break loop;
                }
                step4 = head4._2;
                if (tail2 === null) {
                  head4 = null;
                } else {
                  head4 = tail2._1;
                  tail2 = tail2._2;
                }
                break;
              case MAP:
                step4 = step4._2;
                break;
              case APPLY:
              case ALT:
                if (head4) {
                  tail2 = new Aff2(CONS, head4, tail2);
                }
                head4 = step4;
                step4 = step4._1;
                break;
            }
          }
        if (count === 0) {
          cb2(util.right(void 0))();
        } else {
          kid = 0;
          tmp = count;
          for (; kid < tmp; kid++) {
            kills2[kid] = kills2[kid]();
          }
        }
        return kills2;
      }
      function join2(result, head4, tail2) {
        var fail, step4, lhs, rhs, tmp, kid;
        if (util.isLeft(result)) {
          fail = result;
          step4 = null;
        } else {
          step4 = result;
          fail = null;
        }
        loop:
          while (true) {
            lhs = null;
            rhs = null;
            tmp = null;
            kid = null;
            if (interrupt !== null) {
              return;
            }
            if (head4 === null) {
              cb(fail || step4)();
              return;
            }
            if (head4._3 !== EMPTY) {
              return;
            }
            switch (head4.tag) {
              case MAP:
                if (fail === null) {
                  head4._3 = util.right(head4._1(util.fromRight(step4)));
                  step4 = head4._3;
                } else {
                  head4._3 = fail;
                }
                break;
              case APPLY:
                lhs = head4._1._3;
                rhs = head4._2._3;
                if (fail) {
                  head4._3 = fail;
                  tmp = true;
                  kid = killId++;
                  kills[kid] = kill(early, fail === lhs ? head4._2 : head4._1, function() {
                    return function() {
                      delete kills[kid];
                      if (tmp) {
                        tmp = false;
                      } else if (tail2 === null) {
                        join2(fail, null, null);
                      } else {
                        join2(fail, tail2._1, tail2._2);
                      }
                    };
                  });
                  if (tmp) {
                    tmp = false;
                    return;
                  }
                } else if (lhs === EMPTY || rhs === EMPTY) {
                  return;
                } else {
                  step4 = util.right(util.fromRight(lhs)(util.fromRight(rhs)));
                  head4._3 = step4;
                }
                break;
              case ALT:
                lhs = head4._1._3;
                rhs = head4._2._3;
                if (lhs === EMPTY && util.isLeft(rhs) || rhs === EMPTY && util.isLeft(lhs)) {
                  return;
                }
                if (lhs !== EMPTY && util.isLeft(lhs) && rhs !== EMPTY && util.isLeft(rhs)) {
                  fail = step4 === lhs ? rhs : lhs;
                  step4 = null;
                  head4._3 = fail;
                } else {
                  head4._3 = step4;
                  tmp = true;
                  kid = killId++;
                  kills[kid] = kill(early, step4 === lhs ? head4._2 : head4._1, function() {
                    return function() {
                      delete kills[kid];
                      if (tmp) {
                        tmp = false;
                      } else if (tail2 === null) {
                        join2(step4, null, null);
                      } else {
                        join2(step4, tail2._1, tail2._2);
                      }
                    };
                  });
                  if (tmp) {
                    tmp = false;
                    return;
                  }
                }
                break;
            }
            if (tail2 === null) {
              head4 = null;
            } else {
              head4 = tail2._1;
              tail2 = tail2._2;
            }
          }
      }
      function resolve(fiber) {
        return function(result) {
          return function() {
            delete fibers[fiber._1];
            fiber._3 = result;
            join2(result, fiber._2._1, fiber._2._2);
          };
        };
      }
      function run3() {
        var status = CONTINUE;
        var step4 = par;
        var head4 = null;
        var tail2 = null;
        var tmp, fid;
        loop:
          while (true) {
            tmp = null;
            fid = null;
            switch (status) {
              case CONTINUE:
                switch (step4.tag) {
                  case MAP:
                    if (head4) {
                      tail2 = new Aff2(CONS, head4, tail2);
                    }
                    head4 = new Aff2(MAP, step4._1, EMPTY, EMPTY);
                    step4 = step4._2;
                    break;
                  case APPLY:
                    if (head4) {
                      tail2 = new Aff2(CONS, head4, tail2);
                    }
                    head4 = new Aff2(APPLY, EMPTY, step4._2, EMPTY);
                    step4 = step4._1;
                    break;
                  case ALT:
                    if (head4) {
                      tail2 = new Aff2(CONS, head4, tail2);
                    }
                    head4 = new Aff2(ALT, EMPTY, step4._2, EMPTY);
                    step4 = step4._1;
                    break;
                  default:
                    fid = fiberId++;
                    status = RETURN;
                    tmp = step4;
                    step4 = new Aff2(FORKED, fid, new Aff2(CONS, head4, tail2), EMPTY);
                    tmp = Fiber(util, supervisor, tmp);
                    tmp.onComplete({
                      rethrow: false,
                      handler: resolve(step4)
                    })();
                    fibers[fid] = tmp;
                    if (supervisor) {
                      supervisor.register(tmp);
                    }
                }
                break;
              case RETURN:
                if (head4 === null) {
                  break loop;
                }
                if (head4._1 === EMPTY) {
                  head4._1 = step4;
                  status = CONTINUE;
                  step4 = head4._2;
                  head4._2 = EMPTY;
                } else {
                  head4._2 = step4;
                  step4 = head4;
                  if (tail2 === null) {
                    head4 = null;
                  } else {
                    head4 = tail2._1;
                    tail2 = tail2._2;
                  }
                }
            }
          }
        root = step4;
        for (fid = 0; fid < fiberId; fid++) {
          fibers[fid].run();
        }
      }
      function cancel(error2, cb2) {
        interrupt = util.left(error2);
        var innerKills;
        for (var kid in kills) {
          if (kills.hasOwnProperty(kid)) {
            innerKills = kills[kid];
            for (kid in innerKills) {
              if (innerKills.hasOwnProperty(kid)) {
                innerKills[kid]();
              }
            }
          }
        }
        kills = null;
        var newKills = kill(error2, root, cb2);
        return function(killError) {
          return new Aff2(ASYNC, function(killCb) {
            return function() {
              for (var kid2 in newKills) {
                if (newKills.hasOwnProperty(kid2)) {
                  newKills[kid2]();
                }
              }
              return nonCanceler;
            };
          });
        };
      }
      run3();
      return function(killError) {
        return new Aff2(ASYNC, function(killCb) {
          return function() {
            return cancel(killError, killCb);
          };
        });
      };
    }
    function sequential2(util, supervisor, par) {
      return new Aff2(ASYNC, function(cb) {
        return function() {
          return runPar(util, supervisor, par, cb);
        };
      });
    }
    Aff2.EMPTY = EMPTY;
    Aff2.Pure = AffCtr(PURE);
    Aff2.Throw = AffCtr(THROW);
    Aff2.Catch = AffCtr(CATCH);
    Aff2.Sync = AffCtr(SYNC);
    Aff2.Async = AffCtr(ASYNC);
    Aff2.Bind = AffCtr(BIND);
    Aff2.Bracket = AffCtr(BRACKET);
    Aff2.Fork = AffCtr(FORK);
    Aff2.Seq = AffCtr(SEQ);
    Aff2.ParMap = AffCtr(MAP);
    Aff2.ParApply = AffCtr(APPLY);
    Aff2.ParAlt = AffCtr(ALT);
    Aff2.Fiber = Fiber;
    Aff2.Supervisor = Supervisor;
    Aff2.Scheduler = Scheduler;
    Aff2.nonCanceler = nonCanceler;
    return Aff2;
  }();
  var _pure = Aff.Pure;
  var _throwError = Aff.Throw;
  function _map(f) {
    return function(aff) {
      if (aff.tag === Aff.Pure.tag) {
        return Aff.Pure(f(aff._1));
      } else {
        return Aff.Bind(aff, function(value13) {
          return Aff.Pure(f(value13));
        });
      }
    };
  }
  function _bind(aff) {
    return function(k) {
      return Aff.Bind(aff, k);
    };
  }
  var _liftEffect = Aff.Sync;
  var makeAff = Aff.Async;
  function _makeFiber(util, aff) {
    return function() {
      return Aff.Fiber(util, null, aff);
    };
  }
  var _delay = function() {
    function setDelay(n, k) {
      if (n === 0 && typeof setImmediate !== "undefined") {
        return setImmediate(k);
      } else {
        return setTimeout(k, n);
      }
    }
    function clearDelay(n, t) {
      if (n === 0 && typeof clearImmediate !== "undefined") {
        return clearImmediate(t);
      } else {
        return clearTimeout(t);
      }
    }
    return function(right2, ms) {
      return Aff.Async(function(cb) {
        return function() {
          var timer = setDelay(ms, cb(right2()));
          return function() {
            return Aff.Sync(function() {
              return right2(clearDelay(ms, timer));
            });
          };
        };
      });
    };
  }();
  var _sequential = Aff.Seq;

  // output/Effect.Aff/index.js
  var $runtime_lazy3 = function(name16, moduleName, init4) {
    var state3 = 0;
    var val;
    return function(lineNumber) {
      if (state3 === 2)
        return val;
      if (state3 === 1)
        throw new ReferenceError(name16 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state3 = 1;
      val = init4();
      state3 = 2;
      return val;
    };
  };
  var $$void3 = /* @__PURE__ */ $$void(functorEffect);
  var functorAff = {
    map: _map
  };
  var ffiUtil = /* @__PURE__ */ function() {
    var unsafeFromRight = function(v) {
      if (v instanceof Right) {
        return v.value0;
      }
      ;
      if (v instanceof Left) {
        return unsafeCrashWith("unsafeFromRight: Left");
      }
      ;
      throw new Error("Failed pattern match at Effect.Aff (line 412, column 21 - line 414, column 54): " + [v.constructor.name]);
    };
    var unsafeFromLeft = function(v) {
      if (v instanceof Left) {
        return v.value0;
      }
      ;
      if (v instanceof Right) {
        return unsafeCrashWith("unsafeFromLeft: Right");
      }
      ;
      throw new Error("Failed pattern match at Effect.Aff (line 407, column 20 - line 409, column 55): " + [v.constructor.name]);
    };
    var isLeft = function(v) {
      if (v instanceof Left) {
        return true;
      }
      ;
      if (v instanceof Right) {
        return false;
      }
      ;
      throw new Error("Failed pattern match at Effect.Aff (line 402, column 12 - line 404, column 21): " + [v.constructor.name]);
    };
    return {
      isLeft,
      fromLeft: unsafeFromLeft,
      fromRight: unsafeFromRight,
      left: Left.create,
      right: Right.create
    };
  }();
  var makeFiber = function(aff) {
    return _makeFiber(ffiUtil, aff);
  };
  var launchAff = function(aff) {
    return function __do() {
      var fiber = makeFiber(aff)();
      fiber.run();
      return fiber;
    };
  };
  var launchAff_ = function($74) {
    return $$void3(launchAff($74));
  };
  var monadAff = {
    Applicative0: function() {
      return applicativeAff;
    },
    Bind1: function() {
      return bindAff;
    }
  };
  var bindAff = {
    bind: _bind,
    Apply0: function() {
      return $lazy_applyAff(0);
    }
  };
  var applicativeAff = {
    pure: _pure,
    Apply0: function() {
      return $lazy_applyAff(0);
    }
  };
  var $lazy_applyAff = /* @__PURE__ */ $runtime_lazy3("applyAff", "Effect.Aff", function() {
    return {
      apply: ap(monadAff),
      Functor0: function() {
        return functorAff;
      }
    };
  });
  var pure2 = /* @__PURE__ */ pure(applicativeAff);
  var bind1 = /* @__PURE__ */ bind(bindAff);
  var monadEffectAff = {
    liftEffect: _liftEffect,
    Monad0: function() {
      return monadAff;
    }
  };
  var monadRecAff = {
    tailRecM: function(k) {
      var go2 = function(a) {
        return bind1(k(a))(function(res) {
          if (res instanceof Done) {
            return pure2(res.value0);
          }
          ;
          if (res instanceof Loop) {
            return go2(res.value0);
          }
          ;
          throw new Error("Failed pattern match at Effect.Aff (line 104, column 7 - line 106, column 23): " + [res.constructor.name]);
        });
      };
      return go2;
    },
    Monad0: function() {
      return monadAff;
    }
  };

  // output/Effect.Aff.Class/index.js
  var monadAffAff = {
    liftAff: /* @__PURE__ */ identity(categoryFn),
    MonadEffect0: function() {
      return monadEffectAff;
    }
  };
  var liftAff = function(dict) {
    return dict.liftAff;
  };

  // output/Relude/index.js
  var range3 = function(n) {
    return function(m) {
      var $1 = n > m;
      if ($1) {
        return [];
      }
      ;
      return range(n)(m);
    };
  };

  // output/GraphParams.Coloring/index.js
  var sortWith2 = /* @__PURE__ */ sortWith(/* @__PURE__ */ ordMaybe(ordInt));
  var map4 = /* @__PURE__ */ map(functorMaybe);
  var map1 = /* @__PURE__ */ map(functorFn);
  var negate2 = /* @__PURE__ */ negate(ringInt);
  var indSetColoring = function(v) {
    if (v.length === 0) {
      return [];
    }
    ;
    var ordering = sortWith2(function(u) {
      return map4(map1(negate2)(length))(index(v)(u));
    })(range3(0)(length(v) - 1 | 0));
    return indSetColoringImpl(v)(ordering);
  };
  var decreasingDegreeColoring = function(v) {
    if (v.length === 0) {
      return [];
    }
    ;
    var ordering = sortWith2(function(u) {
      return map4(map1(negate2)(length))(index(v)(u));
    })(range3(0)(length(v) - 1 | 0));
    return customColoring(v)(ordering);
  };
  var alphabeticalColoring = function(v) {
    if (v.length === 0) {
      return [];
    }
    ;
    return customColoring(v)(range3(0)(length(v) - 1 | 0));
  };

  // output/Data.Argonaut.Core/foreign.js
  function id(x5) {
    return x5;
  }
  function stringify(j) {
    return JSON.stringify(j);
  }
  function _caseJson(isNull2, isBool, isNum, isStr, isArr, isObj, j) {
    if (j == null)
      return isNull2();
    else if (typeof j === "boolean")
      return isBool(j);
    else if (typeof j === "number")
      return isNum(j);
    else if (typeof j === "string")
      return isStr(j);
    else if (Object.prototype.toString.call(j) === "[object Array]")
      return isArr(j);
    else
      return isObj(j);
  }

  // output/Data.Argonaut.Core/index.js
  var verbJsonType = function(def) {
    return function(f) {
      return function(g2) {
        return g2(def)(f);
      };
    };
  };
  var toJsonType = /* @__PURE__ */ function() {
    return verbJsonType(Nothing.value)(Just.create);
  }();
  var caseJsonObject = function(d) {
    return function(f) {
      return function(j) {
        return _caseJson($$const(d), $$const(d), $$const(d), $$const(d), $$const(d), f, j);
      };
    };
  };
  var toObject = /* @__PURE__ */ toJsonType(caseJsonObject);
  var caseJsonNumber = function(d) {
    return function(f) {
      return function(j) {
        return _caseJson($$const(d), $$const(d), f, $$const(d), $$const(d), $$const(d), j);
      };
    };
  };
  var caseJsonArray = function(d) {
    return function(f) {
      return function(j) {
        return _caseJson($$const(d), $$const(d), $$const(d), $$const(d), f, $$const(d), j);
      };
    };
  };
  var toArray = /* @__PURE__ */ toJsonType(caseJsonArray);

  // output/Data.Argonaut.Decode.Error/index.js
  var TypeMismatch = /* @__PURE__ */ function() {
    function TypeMismatch2(value0) {
      this.value0 = value0;
    }
    ;
    TypeMismatch2.create = function(value0) {
      return new TypeMismatch2(value0);
    };
    return TypeMismatch2;
  }();
  var AtIndex = /* @__PURE__ */ function() {
    function AtIndex2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    AtIndex2.create = function(value0) {
      return function(value1) {
        return new AtIndex2(value0, value1);
      };
    };
    return AtIndex2;
  }();
  var AtKey = /* @__PURE__ */ function() {
    function AtKey2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    AtKey2.create = function(value0) {
      return function(value1) {
        return new AtKey2(value0, value1);
      };
    };
    return AtKey2;
  }();
  var Named = /* @__PURE__ */ function() {
    function Named2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Named2.create = function(value0) {
      return function(value1) {
        return new Named2(value0, value1);
      };
    };
    return Named2;
  }();
  var MissingValue = /* @__PURE__ */ function() {
    function MissingValue2() {
    }
    ;
    MissingValue2.value = new MissingValue2();
    return MissingValue2;
  }();

  // output/Data.String.CodePoints/foreign.js
  var hasArrayFrom = typeof Array.from === "function";
  var hasStringIterator = typeof Symbol !== "undefined" && Symbol != null && typeof Symbol.iterator !== "undefined" && typeof String.prototype[Symbol.iterator] === "function";
  var hasFromCodePoint = typeof String.prototype.fromCodePoint === "function";
  var hasCodePointAt = typeof String.prototype.codePointAt === "function";

  // output/Data.Argonaut.Decode.Decoders/index.js
  var map5 = /* @__PURE__ */ map(functorEither);
  var lmap2 = /* @__PURE__ */ lmap(bifunctorEither);
  var composeKleisliFlipped2 = /* @__PURE__ */ composeKleisliFlipped(bindEither);
  var bind2 = /* @__PURE__ */ bind(bindEither);
  var traverseWithIndex2 = /* @__PURE__ */ traverseWithIndex(traversableWithIndexArray)(applicativeEither);
  var apply3 = /* @__PURE__ */ apply2(applyEither);
  var decodeNumber = /* @__PURE__ */ function() {
    return caseJsonNumber(new Left(new TypeMismatch("Number")))(Right.create);
  }();
  var decodeJArray = /* @__PURE__ */ function() {
    var $52 = note(new TypeMismatch("Array"));
    return function($53) {
      return $52(toArray($53));
    };
  }();
  var decodeInt = /* @__PURE__ */ composeKleisliFlipped2(/* @__PURE__ */ function() {
    var $84 = note(new TypeMismatch("Integer"));
    return function($85) {
      return $84(fromNumber($85));
    };
  }())(decodeNumber);
  var decodeArray = function(decoder) {
    return composeKleisliFlipped2(function() {
      var $89 = lmap2(Named.create("Array"));
      var $90 = traverseWithIndex2(function(i) {
        var $92 = lmap2(AtIndex.create(i));
        return function($93) {
          return $92(decoder($93));
        };
      });
      return function($91) {
        return $89($90($91));
      };
    }())(decodeJArray);
  };
  var decodeTuple = function(decoderA) {
    return function(decoderB) {
      return function(json) {
        var f = function(v) {
          if (v.length === 2) {
            return apply3(map5(Tuple.create)(decoderA(v[0])))(decoderB(v[1]));
          }
          ;
          return new Left(new TypeMismatch("Tuple"));
        };
        return bind2(decodeArray(Right.create)(json))(f);
      };
    };
  };

  // output/Data.Argonaut.Decode.Class/index.js
  var bind3 = /* @__PURE__ */ bind(bindEither);
  var lmap3 = /* @__PURE__ */ lmap(bifunctorEither);
  var map6 = /* @__PURE__ */ map(functorMaybe);
  var gDecodeJsonNil = {
    gDecodeJson: function(v) {
      return function(v1) {
        return new Right({});
      };
    }
  };
  var gDecodeJson = function(dict) {
    return dict.gDecodeJson;
  };
  var decodeRecord = function(dictGDecodeJson) {
    var gDecodeJson1 = gDecodeJson(dictGDecodeJson);
    return function() {
      return {
        decodeJson: function(json) {
          var v = toObject(json);
          if (v instanceof Just) {
            return gDecodeJson1(v.value0)($$Proxy.value);
          }
          ;
          if (v instanceof Nothing) {
            return new Left(new TypeMismatch("Object"));
          }
          ;
          throw new Error("Failed pattern match at Data.Argonaut.Decode.Class (line 103, column 5 - line 105, column 46): " + [v.constructor.name]);
        }
      };
    };
  };
  var decodeJsonNumber = {
    decodeJson: decodeNumber
  };
  var decodeJsonInt = {
    decodeJson: decodeInt
  };
  var decodeJsonField = function(dict) {
    return dict.decodeJsonField;
  };
  var gDecodeJsonCons = function(dictDecodeJsonField) {
    var decodeJsonField1 = decodeJsonField(dictDecodeJsonField);
    return function(dictGDecodeJson) {
      var gDecodeJson1 = gDecodeJson(dictGDecodeJson);
      return function(dictIsSymbol) {
        var reflectSymbol2 = reflectSymbol(dictIsSymbol);
        var insert7 = insert(dictIsSymbol)()();
        return function() {
          return function() {
            return {
              gDecodeJson: function(object) {
                return function(v) {
                  var fieldName = reflectSymbol2($$Proxy.value);
                  var fieldValue = lookup2(fieldName)(object);
                  var v1 = decodeJsonField1(fieldValue);
                  if (v1 instanceof Just) {
                    return bind3(lmap3(AtKey.create(fieldName))(v1.value0))(function(val) {
                      return bind3(gDecodeJson1(object)($$Proxy.value))(function(rest) {
                        return new Right(insert7($$Proxy.value)(val)(rest));
                      });
                    });
                  }
                  ;
                  if (v1 instanceof Nothing) {
                    return new Left(new AtKey(fieldName, MissingValue.value));
                  }
                  ;
                  throw new Error("Failed pattern match at Data.Argonaut.Decode.Class (line 127, column 5 - line 134, column 44): " + [v1.constructor.name]);
                };
              }
            };
          };
        };
      };
    };
  };
  var decodeJson = function(dict) {
    return dict.decodeJson;
  };
  var decodeJsonTuple = function(dictDecodeJson) {
    var decodeJson12 = decodeJson(dictDecodeJson);
    return function(dictDecodeJson1) {
      return {
        decodeJson: decodeTuple(decodeJson12)(decodeJson(dictDecodeJson1))
      };
    };
  };
  var decodeFieldId = function(dictDecodeJson) {
    var decodeJson12 = decodeJson(dictDecodeJson);
    return {
      decodeJsonField: function(j) {
        return map6(decodeJson12)(j);
      }
    };
  };
  var decodeArray2 = function(dictDecodeJson) {
    return {
      decodeJson: decodeArray(decodeJson(dictDecodeJson))
    };
  };

  // output/Data.Argonaut.Encode.Encoders/index.js
  var map7 = /* @__PURE__ */ map(functorArray);
  var encodeTuple = function(encoderA) {
    return function(encoderB) {
      return function(v) {
        return id([encoderA(v.value0), encoderB(v.value1)]);
      };
    };
  };
  var encodeNumber = id;
  var encodeInt = function($53) {
    return id(toNumber($53));
  };
  var encodeArray = function(encoder) {
    var $58 = map7(encoder);
    return function($59) {
      return id($58($59));
    };
  };

  // output/Data.Argonaut.Encode.Class/index.js
  var gEncodeJsonNil = {
    gEncodeJson: function(v) {
      return function(v1) {
        return empty3;
      };
    }
  };
  var gEncodeJson = function(dict) {
    return dict.gEncodeJson;
  };
  var encodeRecord = function(dictGEncodeJson) {
    var gEncodeJson1 = gEncodeJson(dictGEncodeJson);
    return function() {
      return {
        encodeJson: function(rec) {
          return id(gEncodeJson1(rec)($$Proxy.value));
        }
      };
    };
  };
  var encodeJsonJNumber = {
    encodeJson: encodeNumber
  };
  var encodeJsonInt = {
    encodeJson: encodeInt
  };
  var encodeJson = function(dict) {
    return dict.encodeJson;
  };
  var encodeJsonArray = function(dictEncodeJson) {
    return {
      encodeJson: encodeArray(encodeJson(dictEncodeJson))
    };
  };
  var encodeJsonTuple = function(dictEncodeJson) {
    var encodeJson12 = encodeJson(dictEncodeJson);
    return function(dictEncodeJson1) {
      return {
        encodeJson: encodeTuple(encodeJson12)(encodeJson(dictEncodeJson1))
      };
    };
  };
  var gEncodeJsonCons = function(dictEncodeJson) {
    var encodeJson12 = encodeJson(dictEncodeJson);
    return function(dictGEncodeJson) {
      var gEncodeJson1 = gEncodeJson(dictGEncodeJson);
      return function(dictIsSymbol) {
        var reflectSymbol2 = reflectSymbol(dictIsSymbol);
        var get4 = get(dictIsSymbol)();
        return function() {
          return {
            gEncodeJson: function(row) {
              return function(v) {
                return insert4(reflectSymbol2($$Proxy.value))(encodeJson12(get4($$Proxy.value)(row)))(gEncodeJson1(row)($$Proxy.value));
              };
            }
          };
        };
      };
    };
  };

  // output/Web.DOM.Element/foreign.js
  var getProp = function(name16) {
    return function(doctype) {
      return doctype[name16];
    };
  };
  var _namespaceURI = getProp("namespaceURI");
  var _prefix = getProp("prefix");
  var localName = getProp("localName");
  var tagName = getProp("tagName");
  function getBoundingClientRect(el) {
    return function() {
      var rect2 = el.getBoundingClientRect();
      return {
        top: rect2.top,
        right: rect2.right,
        bottom: rect2.bottom,
        left: rect2.left,
        width: rect2.width,
        height: rect2.height,
        x: rect2.x,
        y: rect2.y
      };
    };
  }

  // output/Data.Nullable/foreign.js
  function nullable(a, r3, f) {
    return a == null ? r3 : f(a);
  }

  // output/Data.Nullable/index.js
  var toMaybe = function(n) {
    return nullable(n, Nothing.value, Just.create);
  };

  // output/Web.DOM.ParentNode/foreign.js
  var getEffProp = function(name16) {
    return function(node) {
      return function() {
        return node[name16];
      };
    };
  };
  var children = getEffProp("children");
  var _firstElementChild = getEffProp("firstElementChild");
  var _lastElementChild = getEffProp("lastElementChild");
  var childElementCount = getEffProp("childElementCount");
  function _querySelector(selector) {
    return function(node) {
      return function() {
        return node.querySelector(selector);
      };
    };
  }

  // output/Web.DOM.ParentNode/index.js
  var map8 = /* @__PURE__ */ map(functorEffect);
  var querySelector = function(qs) {
    var $2 = map8(toMaybe);
    var $3 = _querySelector(qs);
    return function($4) {
      return $2($3($4));
    };
  };

  // output/Web.Internal.FFI/foreign.js
  function _unsafeReadProtoTagged(nothing, just, name16, value13) {
    if (typeof window !== "undefined") {
      var ty = window[name16];
      if (ty != null && value13 instanceof ty) {
        return just(value13);
      }
    }
    var obj = value13;
    while (obj != null) {
      var proto = Object.getPrototypeOf(obj);
      var constructorName = proto.constructor.name;
      if (constructorName === name16) {
        return just(value13);
      } else if (constructorName === "Object") {
        return nothing;
      }
      obj = proto;
    }
    return nothing;
  }

  // output/Web.Internal.FFI/index.js
  var unsafeReadProtoTagged = function(name16) {
    return function(value13) {
      return _unsafeReadProtoTagged(Nothing.value, Just.create, name16, value13);
    };
  };

  // output/Web.DOM.Element/index.js
  var toNode = unsafeCoerce2;
  var fromEventTarget = /* @__PURE__ */ unsafeReadProtoTagged("Element");

  // output/Web.Event.Event/foreign.js
  function _currentTarget(e) {
    return e.currentTarget;
  }
  function type_(e) {
    return e.type;
  }
  function stopPropagation(e) {
    return function() {
      return e.stopPropagation();
    };
  }

  // output/Web.Event.Event/index.js
  var currentTarget = function($5) {
    return toMaybe(_currentTarget($5));
  };

  // output/Web.HTML/foreign.js
  var windowImpl = function() {
    return window;
  };

  // output/Web.HTML.HTMLDocument/index.js
  var toParentNode = unsafeCoerce2;
  var toDocument = unsafeCoerce2;

  // output/Web.HTML.Window/foreign.js
  function document2(window2) {
    return function() {
      return window2.document;
    };
  }
  function localStorage(window2) {
    return function() {
      return window2.localStorage;
    };
  }

  // output/Web.Storage.Storage/foreign.js
  function _getItem(key) {
    return function(storage) {
      return function() {
        return storage.getItem(key);
      };
    };
  }
  function setItem(key) {
    return function(value13) {
      return function(storage) {
        return function() {
          storage.setItem(key, value13);
        };
      };
    };
  }

  // output/Web.Storage.Storage/index.js
  var map9 = /* @__PURE__ */ map(functorEffect);
  var getItem = function(s) {
    var $5 = map9(toMaybe);
    var $6 = _getItem(s);
    return function($7) {
      return $5($6($7));
    };
  };

  // output/Web.UIEvent.MouseEvent/foreign.js
  function clientX(e) {
    return e.clientX;
  }
  function clientY(e) {
    return e.clientY;
  }

  // output/Web.UIEvent.MouseEvent/index.js
  var toEvent = unsafeCoerce2;

  // output/GraphParams.Util/index.js
  var bind4 = /* @__PURE__ */ bind(bindEffect);
  var mapFlipped2 = /* @__PURE__ */ mapFlipped(functorArray);
  var bind12 = /* @__PURE__ */ bind(bindMaybe);
  var pure3 = /* @__PURE__ */ pure(applicativeEffect);
  var storagePut = function(dictMonadAff) {
    var liftEffect4 = liftEffect(dictMonadAff.MonadEffect0());
    return function(name16) {
      return function(value13) {
        return liftEffect4(bind4(bind4(windowImpl)(localStorage))(setItem(name16)(value13)));
      };
    };
  };
  var storageGet = function(dictMonadAff) {
    var liftEffect4 = liftEffect(dictMonadAff.MonadEffect0());
    return function(name16) {
      return liftEffect4(bind4(bind4(windowImpl)(localStorage))(getItem(name16)));
    };
  };
  var repeat = function(v) {
    return function(v1) {
      if (v === 0) {
        return [];
      }
      ;
      return mapFlipped2(range3(0)(v - 1 | 0))(v1);
    };
  };
  var pseudoRandom = function(n) {
    var m = 100 * sin(toNumber(n + 1 | 0));
    return m - floor(m);
  };
  var pointerDecoder = function(ev) {
    var v = bind12(currentTarget(toEvent(ev)))(fromEventTarget);
    if (v instanceof Just) {
      return function __do() {
        var v1 = getBoundingClientRect(v.value0)();
        return new Just({
          x: (toNumber(clientX(ev)) - v1.left) / v1.width,
          y: (toNumber(clientY(ev)) - v1.top) / v1.height
        });
      };
    }
    ;
    return pure3(Nothing.value);
  };
  var map22 = function(t1) {
    return function(t2) {
      return function(fn) {
        return zipWith(apply)(mapWithIndex2(fn)(t1))(t2);
      };
    };
  };

  // output/GraphParams.Graph/index.js
  var encodeJson2 = /* @__PURE__ */ encodeJson(/* @__PURE__ */ encodeJsonTuple(encodeJsonInt)(encodeJsonInt));
  var bind5 = /* @__PURE__ */ bind(bindEither);
  var decodeJson2 = /* @__PURE__ */ decodeJson(/* @__PURE__ */ decodeJsonTuple(decodeJsonInt)(decodeJsonInt));
  var pure4 = /* @__PURE__ */ pure(applicativeEither);
  var modifyAtIndices2 = /* @__PURE__ */ modifyAtIndices(foldableArray);
  var mapFlipped3 = /* @__PURE__ */ mapFlipped(functorArray);
  var updateAtIndices2 = /* @__PURE__ */ updateAtIndices(foldableArray);
  var bind13 = /* @__PURE__ */ bind(bindMaybe);
  var pure1 = /* @__PURE__ */ pure(applicativeMaybe);
  var Edge = /* @__PURE__ */ function() {
    function Edge2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Edge2.create = function(value0) {
      return function(value1) {
        return new Edge2(value0, value1);
      };
    };
    return Edge2;
  }();
  var eqEdge = {
    eq: function(v) {
      return function(v1) {
        return v.value0 === v1.value0 && v.value1 === v1.value1 || v.value0 === v1.value1 && v1.value0 === v.value1;
      };
    }
  };
  var notEq1 = /* @__PURE__ */ notEq(eqEdge);
  var elem3 = /* @__PURE__ */ elem2(eqEdge);
  var encodeJsonEdge = {
    encodeJson: function(v) {
      return encodeJson2(new Tuple(v.value0, v.value1));
    }
  };
  var decodeJsonEdge = {
    decodeJson: function(json) {
      return bind5(decodeJson2(json))(function(v) {
        return pure4(new Edge(v.value0, v.value1));
      });
    }
  };
  var toAdjGraph = function(g2) {
    return foldr2(function(v) {
      var $86 = modifyAtIndices2([v.value0])(function(v2) {
        return snoc(v2)(v.value1);
      });
      var $87 = modifyAtIndices2([v.value1])(function(v2) {
        return snoc(v2)(v.value0);
      });
      return function($88) {
        return $86($87($88));
      };
    })(mapFlipped3(g2.layout)($$const([])))(g2.edges);
  };
  var removeVertex = function(i) {
    return function(graph) {
      return {
        layout: fromMaybe(graph.layout)(deleteAt(i)(graph.layout)),
        edges: mapMaybe(function(v1) {
          var $63 = v1.value0 === i || v1.value1 === i;
          if ($63) {
            return Nothing.value;
          }
          ;
          return new Just(new Edge(function() {
            var $64 = v1.value0 > i;
            if ($64) {
              return v1.value0 - 1 | 0;
            }
            ;
            return v1.value0;
          }(), function() {
            var $65 = v1.value1 > i;
            if ($65) {
              return v1.value1 - 1 | 0;
            }
            ;
            return v1.value1;
          }()));
        })(graph.edges)
      };
    };
  };
  var removeEdge = function(u) {
    return function(v) {
      return function(graph) {
        return {
          layout: graph.layout,
          edges: filter(function(v2) {
            return notEq1(v2)(new Edge(u, v));
          })(graph.edges)
        };
      };
    };
  };
  var moveVertex = function(i) {
    return function(pos) {
      return function(graph) {
        return {
          edges: graph.edges,
          layout: updateAtIndices2([new Tuple(i, pos)])(graph.layout)
        };
      };
    };
  };
  var getCoords = function(graph) {
    return function(u) {
      return index(graph.layout)(u);
    };
  };
  var getCoordsOfEdge = function(graph) {
    return function(v) {
      return bind13(getCoords(graph)(v.value0))(function(v2) {
        return bind13(getCoords(graph)(v.value1))(function(v3) {
          return pure1({
            x1: v2.x,
            x2: v3.x,
            y1: v2.y,
            y2: v3.y
          });
        });
      });
    };
  };
  var bigGraph = {
    layout: /* @__PURE__ */ repeat(100)(function(i) {
      return {
        x: pseudoRandom(i * 2 | 0),
        y: pseudoRandom((i * 2 | 0) + 1 | 0)
      };
    }),
    edges: /* @__PURE__ */ filter(function(v) {
      return v.value0 !== v.value1;
    })(/* @__PURE__ */ repeat(1e3)(function(i) {
      return new Edge(floor2(100 * pseudoRandom(i * 2 | 0)), floor2(100 * pseudoRandom((i * 2 | 0) + 1 | 0)));
    }))
  };
  var addVertex = function(pos) {
    return function(graph) {
      return {
        edges: graph.edges,
        layout: snoc(graph.layout)(pos)
      };
    };
  };
  var addEdge = function(u) {
    return function(v) {
      return function(graph) {
        return {
          layout: graph.layout,
          edges: function() {
            var $85 = u === v || elem3(new Edge(u, v))(graph.edges);
            if ($85) {
              return graph.edges;
            }
            ;
            return snoc(graph.edges)(new Edge(u, v));
          }()
        };
      };
    };
  };

  // output/GraphParams.Model/index.js
  var map10 = /* @__PURE__ */ map(functorArray);
  var bind6 = /* @__PURE__ */ bind(bindMaybe);
  var pure5 = /* @__PURE__ */ pure(applicativeMaybe);
  var updateAtIndices3 = /* @__PURE__ */ updateAtIndices(foldableArray);
  var eq3 = /* @__PURE__ */ eq(/* @__PURE__ */ eqArray(eqInt));
  var sort2 = /* @__PURE__ */ sort(ordInt);
  var MoveMode = /* @__PURE__ */ function() {
    function MoveMode2() {
    }
    ;
    MoveMode2.value = new MoveMode2();
    return MoveMode2;
  }();
  var VertexMode = /* @__PURE__ */ function() {
    function VertexMode2() {
    }
    ;
    VertexMode2.value = new VertexMode2();
    return VertexMode2;
  }();
  var AddEMode = /* @__PURE__ */ function() {
    function AddEMode2() {
    }
    ;
    AddEMode2.value = new AddEMode2();
    return AddEMode2;
  }();
  var DeleteMode = /* @__PURE__ */ function() {
    function DeleteMode2() {
    }
    ;
    DeleteMode2.value = new DeleteMode2();
    return DeleteMode2;
  }();
  var NoDialog = /* @__PURE__ */ function() {
    function NoDialog2() {
    }
    ;
    NoDialog2.value = new NoDialog2();
    return NoDialog2;
  }();
  var ExportDialog = /* @__PURE__ */ function() {
    function ExportDialog2(value0) {
      this.value0 = value0;
    }
    ;
    ExportDialog2.create = function(value0) {
      return new ExportDialog2(value0);
    };
    return ExportDialog2;
  }();
  var ImportDialog = /* @__PURE__ */ function() {
    function ImportDialog2(value0) {
      this.value0 = value0;
    }
    ;
    ImportDialog2.create = function(value0) {
      return new ImportDialog2(value0);
    };
    return ImportDialog2;
  }();
  var Alphabetical = /* @__PURE__ */ function() {
    function Alphabetical2() {
    }
    ;
    Alphabetical2.value = new Alphabetical2();
    return Alphabetical2;
  }();
  var DecreasingDegree = /* @__PURE__ */ function() {
    function DecreasingDegree2() {
    }
    ;
    DecreasingDegree2.value = new DecreasingDegree2();
    return DecreasingDegree2;
  }();
  var IndependentSet = /* @__PURE__ */ function() {
    function IndependentSet2() {
    }
    ;
    IndependentSet2.value = new IndependentSet2();
    return IndependentSet2;
  }();
  var DSatur = /* @__PURE__ */ function() {
    function DSatur2() {
    }
    ;
    DSatur2.value = new DSatur2();
    return DSatur2;
  }();
  var CustomAlgorithm = /* @__PURE__ */ function() {
    function CustomAlgorithm2(value0) {
      this.value0 = value0;
    }
    ;
    CustomAlgorithm2.create = function(value0) {
      return new CustomAlgorithm2(value0);
    };
    return CustomAlgorithm2;
  }();
  var eqEditMode = {
    eq: function(x5) {
      return function(y5) {
        if (x5 instanceof MoveMode && y5 instanceof MoveMode) {
          return true;
        }
        ;
        if (x5 instanceof VertexMode && y5 instanceof VertexMode) {
          return true;
        }
        ;
        if (x5 instanceof AddEMode && y5 instanceof AddEMode) {
          return true;
        }
        ;
        if (x5 instanceof DeleteMode && y5 instanceof DeleteMode) {
          return true;
        }
        ;
        return false;
      };
    }
  };
  var stringToOrdering = function(text7) {
    return new Just(map10(function(c) {
      return toCharCode2(c) - toCharCode2("A") | 0;
    })(toCharArray(text7)));
  };
  var selectedGraph = function(v) {
    return fromMaybe({
      layout: [],
      edges: []
    })(index(v.graphs)(v.selectedGraphIdx));
  };
  var partialOrdering = function(v) {
    var graph = selectedGraph(v);
    return fromMaybe([])(bind6(index(v.results)(v.selectedResultIndex))(function(v1) {
      return pure5(take(v.currentStep)(map10(function(v2) {
        return v2.vertex;
      })(v1.coloring)));
    }));
  };
  var partialColoring = function(v) {
    var graph = selectedGraph(v);
    var emptyColoring = replicate(length(graph.layout))(-1 | 0);
    return fromMaybe(emptyColoring)(bind6(index(v.results)(v.selectedResultIndex))(function(v1) {
      var pcoloring = map10(function(v2) {
        return new Tuple(v2.vertex, v2.color);
      })(take(v.currentStep)(v1.coloring));
      return pure5(updateAtIndices3(pcoloring)(emptyColoring));
    }));
  };
  var orderingToString = /* @__PURE__ */ function() {
    var $64 = map10(function(n) {
      return fromCharCode2(n + toCharCode2("A") | 0);
    });
    return function($65) {
      return fromCharArray(catMaybes($64($65)));
    };
  }();
  var nbVertices = function(model) {
    return length(selectedGraph(model).layout);
  };
  var labelToString = /* @__PURE__ */ function() {
    var $66 = fromMaybe("A");
    return function($67) {
      return singleton3($66(function(n) {
        return fromCharCode2(n + toCharCode2("A") | 0);
      }($67)));
    };
  }();
  var isAnOrdering = function(v) {
    return function(v1) {
      if (v1.length === 0) {
        return true;
      }
      ;
      return eq3(sort2(v1))(range3(0)(v - 1 | 0));
    };
  };
  var runColoring = function(graph) {
    return function(algo) {
      var adjGraph = toAdjGraph(graph);
      if (algo instanceof Alphabetical) {
        return new Just(alphabeticalColoring(adjGraph));
      }
      ;
      if (algo instanceof DecreasingDegree) {
        return new Just(decreasingDegreeColoring(adjGraph));
      }
      ;
      if (algo instanceof DSatur) {
        return new Just(dsatur(adjGraph));
      }
      ;
      if (algo instanceof IndependentSet) {
        return new Just(indSetColoring(adjGraph));
      }
      ;
      if (algo instanceof CustomAlgorithm) {
        var $56 = isAnOrdering(length(adjGraph))(algo.value0);
        if ($56) {
          return new Just(customColoring(adjGraph)(algo.value0));
        }
        ;
        return Nothing.value;
      }
      ;
      throw new Error("Failed pattern match at GraphParams.Model (line 122, column 3 - line 131, column 16): " + [algo.constructor.name]);
    };
  };
  var init3 = /* @__PURE__ */ function() {
    return {
      selectedAlgorithm: Alphabetical.value,
      results: [],
      currentStep: 0,
      selectedResultIndex: 0,
      graphs: replicate(4)({
        layout: [],
        edges: []
      }),
      selectedGraphIdx: 0,
      editmode: MoveMode.value,
      selectedVertex: Nothing.value,
      currentPosition: Nothing.value,
      dialog: NoDialog.value
    };
  }();
  var algoToString = function(v) {
    if (v instanceof Alphabetical) {
      return "Alphab\xE9tique";
    }
    ;
    if (v instanceof DecreasingDegree) {
      return "Degr\xE9 d\xE9croissant";
    }
    ;
    if (v instanceof IndependentSet) {
      return "Stables";
    }
    ;
    if (v instanceof DSatur) {
      return "DSatur";
    }
    ;
    if (v instanceof CustomAlgorithm) {
      return orderingToString(v.value0);
    }
    ;
    throw new Error("Failed pattern match at GraphParams.Model (line 38, column 1 - line 38, column 34): " + [v.constructor.name]);
  };
  var _selectedGraph = function(dictStrong) {
    return function(dictChoice) {
      var set3 = function(v) {
        return function(b) {
          return {
            selectedAlgorithm: v.selectedAlgorithm,
            results: v.results,
            currentStep: v.currentStep,
            selectedResultIndex: v.selectedResultIndex,
            selectedGraphIdx: v.selectedGraphIdx,
            editmode: v.editmode,
            selectedVertex: v.selectedVertex,
            currentPosition: v.currentPosition,
            dialog: v.dialog,
            graphs: fromMaybe(v.graphs)(updateAt(v.selectedGraphIdx)(b)(v.graphs))
          };
        };
      };
      var pre = function(model) {
        return maybe(new Left(model))(Right.create)(index(model.graphs)(model.selectedGraphIdx));
      };
      return affineTraversal(set3)(pre)(dictStrong)(dictChoice);
    };
  };

  // output/GraphParams.Msg/index.js
  var AddVertex = /* @__PURE__ */ function() {
    function AddVertex2(value0) {
      this.value0 = value0;
    }
    ;
    AddVertex2.create = function(value0) {
      return new AddVertex2(value0);
    };
    return AddVertex2;
  }();
  var SelectVertex = /* @__PURE__ */ function() {
    function SelectVertex2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    SelectVertex2.create = function(value0) {
      return function(value1) {
        return new SelectVertex2(value0, value1);
      };
    };
    return SelectVertex2;
  }();
  var PointerUp = /* @__PURE__ */ function() {
    function PointerUp2(value0) {
      this.value0 = value0;
    }
    ;
    PointerUp2.create = function(value0) {
      return new PointerUp2(value0);
    };
    return PointerUp2;
  }();
  var GraphMove = /* @__PURE__ */ function() {
    function GraphMove2(value0) {
      this.value0 = value0;
    }
    ;
    GraphMove2.create = function(value0) {
      return new GraphMove2(value0);
    };
    return GraphMove2;
  }();
  var DeleteVertex = /* @__PURE__ */ function() {
    function DeleteVertex2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    DeleteVertex2.create = function(value0) {
      return function(value1) {
        return new DeleteVertex2(value0, value1);
      };
    };
    return DeleteVertex2;
  }();
  var DeleteEdge = /* @__PURE__ */ function() {
    function DeleteEdge2(value0) {
      this.value0 = value0;
    }
    ;
    DeleteEdge2.create = function(value0) {
      return new DeleteEdge2(value0);
    };
    return DeleteEdge2;
  }();
  var DropOrLeave = /* @__PURE__ */ function() {
    function DropOrLeave2() {
    }
    ;
    DropOrLeave2.value = new DropOrLeave2();
    return DropOrLeave2;
  }();
  var SetEditMode = /* @__PURE__ */ function() {
    function SetEditMode2(value0) {
      this.value0 = value0;
    }
    ;
    SetEditMode2.create = function(value0) {
      return new SetEditMode2(value0);
    };
    return SetEditMode2;
  }();
  var ClearGraph = /* @__PURE__ */ function() {
    function ClearGraph2() {
    }
    ;
    ClearGraph2.value = new ClearGraph2();
    return ClearGraph2;
  }();
  var AdjustGraph = /* @__PURE__ */ function() {
    function AdjustGraph2() {
    }
    ;
    AdjustGraph2.value = new AdjustGraph2();
    return AdjustGraph2;
  }();
  var GenBigGraph = /* @__PURE__ */ function() {
    function GenBigGraph2() {
    }
    ;
    GenBigGraph2.value = new GenBigGraph2();
    return GenBigGraph2;
  }();
  var SetGraph = /* @__PURE__ */ function() {
    function SetGraph2(value0) {
      this.value0 = value0;
    }
    ;
    SetGraph2.create = function(value0) {
      return new SetGraph2(value0);
    };
    return SetGraph2;
  }();
  var SetAlgo = /* @__PURE__ */ function() {
    function SetAlgo2(value0) {
      this.value0 = value0;
    }
    ;
    SetAlgo2.create = function(value0) {
      return new SetAlgo2(value0);
    };
    return SetAlgo2;
  }();
  var CustomAlgoTextChange = /* @__PURE__ */ function() {
    function CustomAlgoTextChange2(value0) {
      this.value0 = value0;
    }
    ;
    CustomAlgoTextChange2.create = function(value0) {
      return new CustomAlgoTextChange2(value0);
    };
    return CustomAlgoTextChange2;
  }();
  var SetResultIndex = /* @__PURE__ */ function() {
    function SetResultIndex2(value0) {
      this.value0 = value0;
    }
    ;
    SetResultIndex2.create = function(value0) {
      return new SetResultIndex2(value0);
    };
    return SetResultIndex2;
  }();
  var Save = /* @__PURE__ */ function() {
    function Save2() {
    }
    ;
    Save2.value = new Save2();
    return Save2;
  }();
  var Load = /* @__PURE__ */ function() {
    function Load2() {
    }
    ;
    Load2.value = new Load2();
    return Load2;
  }();
  var OpenImportDialog = /* @__PURE__ */ function() {
    function OpenImportDialog2() {
    }
    ;
    OpenImportDialog2.value = new OpenImportDialog2();
    return OpenImportDialog2;
  }();
  var Export = /* @__PURE__ */ function() {
    function Export2() {
    }
    ;
    Export2.value = new Export2();
    return Export2;
  }();
  var ChangeImportText = /* @__PURE__ */ function() {
    function ChangeImportText2(value0) {
      this.value0 = value0;
    }
    ;
    ChangeImportText2.create = function(value0) {
      return new ChangeImportText2(value0);
    };
    return ChangeImportText2;
  }();
  var ImportAndClose = /* @__PURE__ */ function() {
    function ImportAndClose2() {
    }
    ;
    ImportAndClose2.value = new ImportAndClose2();
    return ImportAndClose2;
  }();
  var CloseDialog = /* @__PURE__ */ function() {
    function CloseDialog2() {
    }
    ;
    CloseDialog2.value = new CloseDialog2();
    return CloseDialog2;
  }();
  var Compute = /* @__PURE__ */ function() {
    function Compute2() {
    }
    ;
    Compute2.value = new Compute2();
    return Compute2;
  }();
  var PreviousStep = /* @__PURE__ */ function() {
    function PreviousStep2() {
    }
    ;
    PreviousStep2.value = new PreviousStep2();
    return PreviousStep2;
  }();
  var NextStep = /* @__PURE__ */ function() {
    function NextStep2() {
    }
    ;
    NextStep2.value = new NextStep2();
    return NextStep2;
  }();
  var FinishColoring = /* @__PURE__ */ function() {
    function FinishColoring2() {
    }
    ;
    FinishColoring2.value = new FinishColoring2();
    return FinishColoring2;
  }();

  // output/Data.Argonaut.Parser/foreign.js
  function _jsonParser(fail, succ, s) {
    try {
      return succ(JSON.parse(s));
    } catch (e) {
      return fail(e.message);
    }
  }

  // output/Data.Argonaut.Parser/index.js
  var jsonParser = function(j) {
    return _jsonParser(Left.create, Right.create, j);
  };

  // output/GraphParams.Layout/index.js
  var minimum2 = /* @__PURE__ */ minimum(ordNumber)(foldableArray);
  var map11 = /* @__PURE__ */ map(functorArray);
  var maximum2 = /* @__PURE__ */ maximum(ordNumber)(foldableArray);
  var mapFlipped4 = /* @__PURE__ */ mapFlipped(functorArray);
  var add2 = /* @__PURE__ */ add(semiringNumber);
  var elem4 = /* @__PURE__ */ elem2(eqEdge);
  var append3 = /* @__PURE__ */ append(semigroupArray);
  var normalize = function(layout) {
    var ymin = fromMaybe(0)(minimum2(map11(function(v) {
      return v.y;
    })(layout)));
    var ymax = fromMaybe(0)(maximum2(map11(function(v) {
      return v.y;
    })(layout)));
    var xmin = fromMaybe(0)(minimum2(map11(function(v) {
      return v.x;
    })(layout)));
    var xmax = fromMaybe(0)(maximum2(map11(function(v) {
      return v.x;
    })(layout)));
    return mapFlipped4(layout)(function(v) {
      return {
        x: 0.05 + (v.x - xmin) * 0.9 / (xmax - xmin),
        y: 0.05 + (v.y - ymin) * 0.9 / (ymax - ymin)
      };
    });
  };
  var initialRadius = 10;
  var initialAngle = /* @__PURE__ */ function() {
    return pi * (3 - sqrt(5));
  }();
  var initLayout = function(v) {
    if (v === 0) {
      return [];
    }
    ;
    return mapFlipped4(range3(0)(v - 1 | 0))(function(i) {
      var radius = initialRadius * sqrt(0.5 + toNumber(i));
      var angle = toNumber(i) * initialAngle;
      return {
        x: radius * cos(angle),
        y: radius * sin(angle)
      };
    });
  };
  var force2 = function(alpha) {
    return function(beta) {
      return function(edges) {
        return function(layout) {
          return mapWithIndex2(function(i) {
            return function(v) {
              var springForces = mapWithIndex2(function(j) {
                return function(v1) {
                  var $33 = !elem4(new Edge(i, j))(edges);
                  if ($33) {
                    return {
                      x: 0,
                      y: 0
                    };
                  }
                  ;
                  var dist = sqrt((v.x - v1.x) * (v.x - v1.x) + (v.y - v1.y) * (v.y - v1.y));
                  var f = beta * (1 - dist);
                  return {
                    x: f * (v.x - v1.x) / dist,
                    y: f * (v.y - v1.y) / dist
                  };
                };
              })(layout);
              var repulsiveForces = mapWithIndex2(function(j) {
                return function(v1) {
                  var $37 = i === j;
                  if ($37) {
                    return {
                      x: 0,
                      y: 0
                    };
                  }
                  ;
                  var dist2 = (v.x - v1.x) * (v.x - v1.x) + (v.y - v1.y) * (v.y - v1.y);
                  var f = alpha / dist2;
                  var dist = sqrt(dist2);
                  return {
                    x: f * (v.x - v1.x) / dist,
                    y: f * (v.y - v1.y) / dist
                  };
                };
              })(layout);
              var forces = append3(repulsiveForces)(springForces);
              return {
                x: v.x + foldl2(add2)(0)(map11(function(v1) {
                  return v1.x;
                })(forces)),
                y: v.y + foldl2(add2)(0)(map11(function(v1) {
                  return v1.y;
                })(forces))
              };
            };
          })(layout);
        };
      };
    };
  };
  var step3 = /* @__PURE__ */ force2(0.05)(0.1);
  var computeLayout = function(n) {
    return function(edges) {
      return normalize(foldl2(function(lay) {
        return function(v) {
          return step3(edges)(lay);
        };
      })(initLayout(n))(range3(1)(300)));
    };
  };

  // output/Data.CatQueue/index.js
  var CatQueue = /* @__PURE__ */ function() {
    function CatQueue2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    CatQueue2.create = function(value0) {
      return function(value1) {
        return new CatQueue2(value0, value1);
      };
    };
    return CatQueue2;
  }();
  var uncons3 = function($copy_v) {
    var $tco_done = false;
    var $tco_result;
    function $tco_loop(v) {
      if (v.value0 instanceof Nil && v.value1 instanceof Nil) {
        $tco_done = true;
        return Nothing.value;
      }
      ;
      if (v.value0 instanceof Nil) {
        $copy_v = new CatQueue(reverse2(v.value1), Nil.value);
        return;
      }
      ;
      if (v.value0 instanceof Cons) {
        $tco_done = true;
        return new Just(new Tuple(v.value0.value0, new CatQueue(v.value0.value1, v.value1)));
      }
      ;
      throw new Error("Failed pattern match at Data.CatQueue (line 82, column 1 - line 82, column 63): " + [v.constructor.name]);
    }
    ;
    while (!$tco_done) {
      $tco_result = $tco_loop($copy_v);
    }
    ;
    return $tco_result;
  };
  var snoc3 = function(v) {
    return function(a) {
      return new CatQueue(v.value0, new Cons(a, v.value1));
    };
  };
  var $$null2 = function(v) {
    if (v.value0 instanceof Nil && v.value1 instanceof Nil) {
      return true;
    }
    ;
    return false;
  };
  var empty4 = /* @__PURE__ */ function() {
    return new CatQueue(Nil.value, Nil.value);
  }();

  // output/Data.CatList/index.js
  var CatNil = /* @__PURE__ */ function() {
    function CatNil2() {
    }
    ;
    CatNil2.value = new CatNil2();
    return CatNil2;
  }();
  var CatCons = /* @__PURE__ */ function() {
    function CatCons2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    CatCons2.create = function(value0) {
      return function(value1) {
        return new CatCons2(value0, value1);
      };
    };
    return CatCons2;
  }();
  var link = function(v) {
    return function(v1) {
      if (v instanceof CatNil) {
        return v1;
      }
      ;
      if (v1 instanceof CatNil) {
        return v;
      }
      ;
      if (v instanceof CatCons) {
        return new CatCons(v.value0, snoc3(v.value1)(v1));
      }
      ;
      throw new Error("Failed pattern match at Data.CatList (line 108, column 1 - line 108, column 54): " + [v.constructor.name, v1.constructor.name]);
    };
  };
  var foldr3 = function(k) {
    return function(b) {
      return function(q) {
        var foldl3 = function($copy_v) {
          return function($copy_v1) {
            return function($copy_v2) {
              var $tco_var_v = $copy_v;
              var $tco_var_v1 = $copy_v1;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(v, v1, v2) {
                if (v2 instanceof Nil) {
                  $tco_done = true;
                  return v1;
                }
                ;
                if (v2 instanceof Cons) {
                  $tco_var_v = v;
                  $tco_var_v1 = v(v1)(v2.value0);
                  $copy_v2 = v2.value1;
                  return;
                }
                ;
                throw new Error("Failed pattern match at Data.CatList (line 124, column 3 - line 124, column 59): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
              }
              ;
              while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_v, $tco_var_v1, $copy_v2);
              }
              ;
              return $tco_result;
            };
          };
        };
        var go2 = function($copy_xs) {
          return function($copy_ys) {
            var $tco_var_xs = $copy_xs;
            var $tco_done1 = false;
            var $tco_result;
            function $tco_loop(xs, ys) {
              var v = uncons3(xs);
              if (v instanceof Nothing) {
                $tco_done1 = true;
                return foldl3(function(x5) {
                  return function(i) {
                    return i(x5);
                  };
                })(b)(ys);
              }
              ;
              if (v instanceof Just) {
                $tco_var_xs = v.value0.value1;
                $copy_ys = new Cons(k(v.value0.value0), ys);
                return;
              }
              ;
              throw new Error("Failed pattern match at Data.CatList (line 120, column 14 - line 122, column 67): " + [v.constructor.name]);
            }
            ;
            while (!$tco_done1) {
              $tco_result = $tco_loop($tco_var_xs, $copy_ys);
            }
            ;
            return $tco_result;
          };
        };
        return go2(q)(Nil.value);
      };
    };
  };
  var uncons4 = function(v) {
    if (v instanceof CatNil) {
      return Nothing.value;
    }
    ;
    if (v instanceof CatCons) {
      return new Just(new Tuple(v.value0, function() {
        var $66 = $$null2(v.value1);
        if ($66) {
          return CatNil.value;
        }
        ;
        return foldr3(link)(CatNil.value)(v.value1);
      }()));
    }
    ;
    throw new Error("Failed pattern match at Data.CatList (line 99, column 1 - line 99, column 61): " + [v.constructor.name]);
  };
  var empty5 = /* @__PURE__ */ function() {
    return CatNil.value;
  }();
  var append4 = link;
  var semigroupCatList = {
    append: append4
  };
  var snoc4 = function(cat) {
    return function(a) {
      return append4(cat)(new CatCons(a, empty4));
    };
  };

  // output/Control.Monad.Free/index.js
  var $runtime_lazy4 = function(name16, moduleName, init4) {
    var state3 = 0;
    var val;
    return function(lineNumber) {
      if (state3 === 2)
        return val;
      if (state3 === 1)
        throw new ReferenceError(name16 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state3 = 1;
      val = init4();
      state3 = 2;
      return val;
    };
  };
  var append5 = /* @__PURE__ */ append(semigroupCatList);
  var Free = /* @__PURE__ */ function() {
    function Free2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Free2.create = function(value0) {
      return function(value1) {
        return new Free2(value0, value1);
      };
    };
    return Free2;
  }();
  var Return = /* @__PURE__ */ function() {
    function Return2(value0) {
      this.value0 = value0;
    }
    ;
    Return2.create = function(value0) {
      return new Return2(value0);
    };
    return Return2;
  }();
  var Bind = /* @__PURE__ */ function() {
    function Bind2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Bind2.create = function(value0) {
      return function(value1) {
        return new Bind2(value0, value1);
      };
    };
    return Bind2;
  }();
  var toView = function($copy_v) {
    var $tco_done = false;
    var $tco_result;
    function $tco_loop(v) {
      var runExpF = function(v22) {
        return v22;
      };
      var concatF = function(v22) {
        return function(r3) {
          return new Free(v22.value0, append5(v22.value1)(r3));
        };
      };
      if (v.value0 instanceof Return) {
        var v2 = uncons4(v.value1);
        if (v2 instanceof Nothing) {
          $tco_done = true;
          return new Return(v.value0.value0);
        }
        ;
        if (v2 instanceof Just) {
          $copy_v = concatF(runExpF(v2.value0.value0)(v.value0.value0))(v2.value0.value1);
          return;
        }
        ;
        throw new Error("Failed pattern match at Control.Monad.Free (line 227, column 7 - line 231, column 64): " + [v2.constructor.name]);
      }
      ;
      if (v.value0 instanceof Bind) {
        $tco_done = true;
        return new Bind(v.value0.value0, function(a) {
          return concatF(v.value0.value1(a))(v.value1);
        });
      }
      ;
      throw new Error("Failed pattern match at Control.Monad.Free (line 225, column 3 - line 233, column 56): " + [v.value0.constructor.name]);
    }
    ;
    while (!$tco_done) {
      $tco_result = $tco_loop($copy_v);
    }
    ;
    return $tco_result;
  };
  var runFreeM = function(dictFunctor) {
    var map17 = map(dictFunctor);
    return function(dictMonadRec) {
      var Monad0 = dictMonadRec.Monad0();
      var map24 = map(Monad0.Bind1().Apply0().Functor0());
      var pure13 = pure(Monad0.Applicative0());
      var tailRecM3 = tailRecM(dictMonadRec);
      return function(k) {
        var go2 = function(f) {
          var v = toView(f);
          if (v instanceof Return) {
            return map24(Done.create)(pure13(v.value0));
          }
          ;
          if (v instanceof Bind) {
            return map24(Loop.create)(k(map17(v.value1)(v.value0)));
          }
          ;
          throw new Error("Failed pattern match at Control.Monad.Free (line 194, column 10 - line 196, column 37): " + [v.constructor.name]);
        };
        return tailRecM3(go2);
      };
    };
  };
  var fromView = function(f) {
    return new Free(f, empty5);
  };
  var freeMonad = {
    Applicative0: function() {
      return freeApplicative;
    },
    Bind1: function() {
      return freeBind;
    }
  };
  var freeFunctor = {
    map: function(k) {
      return function(f) {
        return bindFlipped(freeBind)(function() {
          var $189 = pure(freeApplicative);
          return function($190) {
            return $189(k($190));
          };
        }())(f);
      };
    }
  };
  var freeBind = {
    bind: function(v) {
      return function(k) {
        return new Free(v.value0, snoc4(v.value1)(k));
      };
    },
    Apply0: function() {
      return $lazy_freeApply(0);
    }
  };
  var freeApplicative = {
    pure: function($191) {
      return fromView(Return.create($191));
    },
    Apply0: function() {
      return $lazy_freeApply(0);
    }
  };
  var $lazy_freeApply = /* @__PURE__ */ $runtime_lazy4("freeApply", "Control.Monad.Free", function() {
    return {
      apply: ap(freeMonad),
      Functor0: function() {
        return freeFunctor;
      }
    };
  });
  var pure6 = /* @__PURE__ */ pure(freeApplicative);
  var liftF = function(f) {
    return fromView(new Bind(f, function($192) {
      return pure6($192);
    }));
  };

  // output/Unsafe.Reference/foreign.js
  function reallyUnsafeRefEq(a) {
    return function(b) {
      return a === b;
    };
  }

  // output/Unsafe.Reference/index.js
  var unsafeRefEq = reallyUnsafeRefEq;

  // output/Pha.Update.Internal/index.js
  var lmap4 = /* @__PURE__ */ lmap(bifunctorTuple);
  var State = /* @__PURE__ */ function() {
    function State2(value0) {
      this.value0 = value0;
    }
    ;
    State2.create = function(value0) {
      return new State2(value0);
    };
    return State2;
  }();
  var Lift = /* @__PURE__ */ function() {
    function Lift2(value0) {
      this.value0 = value0;
    }
    ;
    Lift2.create = function(value0) {
      return new Lift2(value0);
    };
    return Lift2;
  }();
  var Subscribe = /* @__PURE__ */ function() {
    function Subscribe2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Subscribe2.create = function(value0) {
      return function(value1) {
        return new Subscribe2(value0, value1);
      };
    };
    return Subscribe2;
  }();
  var Unsubscribe = /* @__PURE__ */ function() {
    function Unsubscribe2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Unsubscribe2.create = function(value0) {
      return function(value1) {
        return new Unsubscribe2(value0, value1);
      };
    };
    return Unsubscribe2;
  }();
  var Update = function(x5) {
    return x5;
  };
  var ordSubscriptionId = ordInt;
  var monadUpdate = freeMonad;
  var monadStateUpdate = {
    state: function($79) {
      return Update(liftF(State.create($79)));
    },
    Monad0: function() {
      return monadUpdate;
    }
  };
  var monadEffectUpdate = function(dictMonadEffect) {
    return {
      liftEffect: function() {
        var $80 = liftEffect(dictMonadEffect);
        return function($81) {
          return Update(liftF(Lift.create($80($81))));
        };
      }(),
      Monad0: function() {
        return monadUpdate;
      }
    };
  };
  var monadAffUpdate = function(dictMonadAff) {
    var monadEffectUpdate1 = monadEffectUpdate(dictMonadAff.MonadEffect0());
    return {
      liftAff: function() {
        var $82 = liftAff(dictMonadAff);
        return function($83) {
          return Update(liftF(Lift.create($82($83))));
        };
      }(),
      MonadEffect0: function() {
        return monadEffectUpdate1;
      }
    };
  };
  var functorUpdateF = function(dictFunctor) {
    var map17 = map(dictFunctor);
    return {
      map: function(v) {
        return function(v1) {
          if (v1 instanceof State) {
            return new State(function() {
              var $84 = lmap4(v);
              return function($85) {
                return $84(v1.value0($85));
              };
            }());
          }
          ;
          if (v1 instanceof Lift) {
            return new Lift(map17(v)(v1.value0));
          }
          ;
          if (v1 instanceof Subscribe) {
            return new Subscribe(v1.value0, function($86) {
              return v(v1.value1($86));
            });
          }
          ;
          if (v1 instanceof Unsubscribe) {
            return new Unsubscribe(v1.value0, v(v1.value1));
          }
          ;
          throw new Error("Failed pattern match at Pha.Update.Internal (line 31, column 1 - line 35, column 50): " + [v.constructor.name, v1.constructor.name]);
        };
      }
    };
  };
  var bindUpdate = freeBind;
  var applicativeUpdate = freeApplicative;

  // output/Web.PointerEvent.PointerEvent/index.js
  var toMouseEvent = unsafeCoerce2;
  var toEvent2 = unsafeCoerce2;

  // output/GraphParams.Update/index.js
  var bind7 = /* @__PURE__ */ bind(bindUpdate);
  var liftEffect2 = /* @__PURE__ */ liftEffect(/* @__PURE__ */ monadEffectUpdate(monadEffectAff));
  var pure7 = /* @__PURE__ */ pure(applicativeUpdate);
  var modify_3 = /* @__PURE__ */ modify_2(monadStateUpdate);
  var eq4 = /* @__PURE__ */ eq(eqEditMode);
  var _selectedGraph2 = /* @__PURE__ */ _selectedGraph(strongFn)(choiceFn);
  var discard2 = /* @__PURE__ */ discard(discardUnit)(bindUpdate);
  var elem5 = /* @__PURE__ */ elem2(eqEditMode);
  var get3 = /* @__PURE__ */ get2(monadStateUpdate);
  var when2 = /* @__PURE__ */ when(applicativeUpdate);
  var monadAffUpdate2 = /* @__PURE__ */ monadAffUpdate(monadAffAff);
  var storagePut2 = /* @__PURE__ */ storagePut(monadAffUpdate2);
  var gEncodeJsonCons2 = /* @__PURE__ */ gEncodeJsonCons(encodeJsonJNumber);
  var yIsSymbol = {
    reflectSymbol: function() {
      return "y";
    }
  };
  var xIsSymbol = {
    reflectSymbol: function() {
      return "x";
    }
  };
  var layoutIsSymbol = {
    reflectSymbol: function() {
      return "layout";
    }
  };
  var edgesIsSymbol = {
    reflectSymbol: function() {
      return "edges";
    }
  };
  var encodeRecord2 = /* @__PURE__ */ encodeRecord(/* @__PURE__ */ gEncodeJsonCons(/* @__PURE__ */ encodeJsonArray(encodeJsonEdge))(/* @__PURE__ */ gEncodeJsonCons(/* @__PURE__ */ encodeJsonArray(/* @__PURE__ */ encodeRecord(/* @__PURE__ */ gEncodeJsonCons2(/* @__PURE__ */ gEncodeJsonCons2(gEncodeJsonNil)(yIsSymbol)())(xIsSymbol)())()))(gEncodeJsonNil)(layoutIsSymbol)())(edgesIsSymbol)())();
  var encodeJson3 = /* @__PURE__ */ encodeJson(/* @__PURE__ */ encodeJsonArray(encodeRecord2));
  var storageGet2 = /* @__PURE__ */ storageGet(monadAffUpdate2);
  var gDecodeJsonCons2 = /* @__PURE__ */ gDecodeJsonCons(/* @__PURE__ */ decodeFieldId(decodeJsonNumber));
  var decodeRecord2 = /* @__PURE__ */ decodeRecord(/* @__PURE__ */ gDecodeJsonCons(/* @__PURE__ */ decodeFieldId(/* @__PURE__ */ decodeArray2(decodeJsonEdge)))(/* @__PURE__ */ gDecodeJsonCons(/* @__PURE__ */ decodeFieldId(/* @__PURE__ */ decodeArray2(/* @__PURE__ */ decodeRecord(/* @__PURE__ */ gDecodeJsonCons2(/* @__PURE__ */ gDecodeJsonCons2(gDecodeJsonNil)(yIsSymbol)()())(xIsSymbol)()())())))(gDecodeJsonNil)(layoutIsSymbol)()())(edgesIsSymbol)()())();
  var decodeJson3 = /* @__PURE__ */ decodeJson(/* @__PURE__ */ decodeArray2(decodeRecord2));
  var decodeJson1 = /* @__PURE__ */ decodeJson(decodeRecord2);
  var encodeJson1 = /* @__PURE__ */ encodeJson(encodeRecord2);
  var max6 = /* @__PURE__ */ max(ordInt);
  var min5 = /* @__PURE__ */ min(ordInt);
  var cleanResults = function(v) {
    return {
      selectedAlgorithm: v.selectedAlgorithm,
      graphs: v.graphs,
      selectedGraphIdx: v.selectedGraphIdx,
      editmode: v.editmode,
      selectedVertex: v.selectedVertex,
      currentPosition: v.currentPosition,
      dialog: v.dialog,
      results: [],
      selectedResultIndex: 0,
      currentStep: 0
    };
  };
  var update3 = function(v) {
    if (v instanceof AddVertex) {
      return bind7(liftEffect2(pointerDecoder(v.value0)))(function(pos) {
        if (pos instanceof Nothing) {
          return pure7(unit);
        }
        ;
        if (pos instanceof Just) {
          return modify_3(function(model) {
            var $113 = eq4(model.editmode)(VertexMode.value);
            if ($113) {
              return cleanResults(over(_selectedGraph2)(addVertex(pos.value0))(model));
            }
            ;
            return model;
          });
        }
        ;
        throw new Error("Failed pattern match at GraphParams.Update (line 27, column 3 - line 34, column 16): " + [pos.constructor.name]);
      });
    }
    ;
    if (v instanceof SelectVertex) {
      return discard2(liftEffect2(stopPropagation(toEvent2(v.value1))))(function() {
        return modify_3(function(model) {
          var $116 = elem5(model.editmode)([AddEMode.value, MoveMode.value]);
          if ($116) {
            var $117 = {};
            for (var $118 in model) {
              if ({}.hasOwnProperty.call(model, $118)) {
                $117[$118] = model[$118];
              }
              ;
            }
            ;
            $117.selectedVertex = new Just(v.value0);
            return $117;
          }
          ;
          return model;
        });
      });
    }
    ;
    if (v instanceof GraphMove) {
      return bind7(liftEffect2(pointerDecoder(toMouseEvent(v.value0))))(function(pos) {
        return modify_3(function(model) {
          if (pos instanceof Just && (model.editmode instanceof MoveMode && model.selectedVertex instanceof Just)) {
            return cleanResults(over(_selectedGraph2)(moveVertex(model.selectedVertex.value0)(pos.value0))(model));
          }
          ;
          if (pos instanceof Just && model.editmode instanceof AddEMode) {
            return {
              currentStep: model.currentStep,
              dialog: model.dialog,
              editmode: model.editmode,
              graphs: model.graphs,
              results: model.results,
              selectedAlgorithm: model.selectedAlgorithm,
              selectedGraphIdx: model.selectedGraphIdx,
              selectedResultIndex: model.selectedResultIndex,
              selectedVertex: model.selectedVertex,
              currentPosition: new Just(pos.value0)
            };
          }
          ;
          return model;
        });
      });
    }
    ;
    if (v instanceof DropOrLeave) {
      return modify_3(function(model) {
        var $129 = eq4(model.editmode)(AddEMode.value);
        if ($129) {
          var $130 = {};
          for (var $131 in model) {
            if ({}.hasOwnProperty.call(model, $131)) {
              $130[$131] = model[$131];
            }
            ;
          }
          ;
          $130.selectedVertex = Nothing.value;
          return $130;
        }
        ;
        return model;
      });
    }
    ;
    if (v instanceof PointerUp) {
      return modify_3(function(model) {
        if (model.editmode instanceof MoveMode) {
          return {
            editmode: model.editmode,
            currentStep: model.currentStep,
            dialog: model.dialog,
            graphs: model.graphs,
            results: model.results,
            selectedAlgorithm: model.selectedAlgorithm,
            selectedGraphIdx: model.selectedGraphIdx,
            selectedResultIndex: model.selectedResultIndex,
            selectedVertex: Nothing.value,
            currentPosition: Nothing.value
          };
        }
        ;
        if (model.editmode instanceof AddEMode && model.selectedVertex instanceof Just) {
          return cleanResults(function() {
            var v1 = over(_selectedGraph2)(addEdge(v.value0)(model.selectedVertex.value0))(model);
            return {
              selectedAlgorithm: v1.selectedAlgorithm,
              results: v1.results,
              currentStep: v1.currentStep,
              selectedResultIndex: v1.selectedResultIndex,
              graphs: v1.graphs,
              selectedGraphIdx: v1.selectedGraphIdx,
              editmode: v1.editmode,
              currentPosition: v1.currentPosition,
              dialog: v1.dialog,
              selectedVertex: Nothing.value
            };
          }());
        }
        ;
        return model;
      });
    }
    ;
    if (v instanceof DeleteVertex) {
      return bind7(get3)(function(st) {
        return discard2(when2(eq4(st.editmode)(MoveMode.value))(liftEffect2(stopPropagation(toEvent(v.value1)))))(function() {
          return modify_3(function(model) {
            var $137 = eq4(model.editmode)(DeleteMode.value);
            if ($137) {
              return cleanResults(over(_selectedGraph2)(removeVertex(v.value0))(model));
            }
            ;
            return model;
          });
        });
      });
    }
    ;
    if (v instanceof DeleteEdge) {
      return modify_3(function(model) {
        var $140 = eq4(model.editmode)(DeleteMode.value);
        if ($140) {
          return cleanResults(over(_selectedGraph2)(removeEdge(v.value0.value0)(v.value0.value1))(model));
        }
        ;
        return model;
      });
    }
    ;
    if (v instanceof ClearGraph) {
      return modify_3(function(model) {
        return cleanResults(set2(_selectedGraph2)({
          layout: [],
          edges: []
        })(model));
      });
    }
    ;
    if (v instanceof GenBigGraph) {
      return modify_3(function(model) {
        return cleanResults(set2(_selectedGraph2)(bigGraph)(model));
      });
    }
    ;
    if (v instanceof SetEditMode) {
      return modify_3(function(v1) {
        var $144 = {};
        for (var $145 in v1) {
          if ({}.hasOwnProperty.call(v1, $145)) {
            $144[$145] = v1[$145];
          }
          ;
        }
        ;
        $144.editmode = v.value0;
        return $144;
      });
    }
    ;
    if (v instanceof AdjustGraph) {
      return modify_3(function(model) {
        return over(_selectedGraph2)(function(graph) {
          return {
            edges: graph.edges,
            layout: computeLayout(length(graph.layout))(graph.edges)
          };
        })(model);
      });
    }
    ;
    if (v instanceof SetGraph) {
      return modify_3(function(model) {
        return cleanResults({
          currentPosition: model.currentPosition,
          currentStep: model.currentStep,
          dialog: model.dialog,
          editmode: model.editmode,
          graphs: model.graphs,
          results: model.results,
          selectedAlgorithm: model.selectedAlgorithm,
          selectedResultIndex: model.selectedResultIndex,
          selectedVertex: model.selectedVertex,
          selectedGraphIdx: function() {
            if (v.value0 === "1") {
              return 0;
            }
            ;
            if (v.value0 === "2") {
              return 1;
            }
            ;
            if (v.value0 === "3") {
              return 2;
            }
            ;
            if (v.value0 === "4") {
              return 3;
            }
            ;
            return 0;
          }()
        });
      });
    }
    ;
    if (v instanceof SetAlgo) {
      return modify_3(function(model) {
        return {
          currentPosition: model.currentPosition,
          dialog: model.dialog,
          editmode: model.editmode,
          graphs: model.graphs,
          results: model.results,
          selectedGraphIdx: model.selectedGraphIdx,
          selectedResultIndex: model.selectedResultIndex,
          selectedVertex: model.selectedVertex,
          currentStep: 0,
          selectedAlgorithm: function() {
            if (v.value0 === "alpha") {
              return Alphabetical.value;
            }
            ;
            if (v.value0 === "decdegree") {
              return DecreasingDegree.value;
            }
            ;
            if (v.value0 === "indset") {
              return IndependentSet.value;
            }
            ;
            if (v.value0 === "dsatur") {
              return DSatur.value;
            }
            ;
            if (v.value0 === "custom") {
              return new CustomAlgorithm(range3(0)(nbVertices(model) - 1 | 0));
            }
            ;
            return Alphabetical.value;
          }()
        };
      });
    }
    ;
    if (v instanceof CustomAlgoTextChange) {
      return modify_3(function(model) {
        var v1 = stringToOrdering(v.value0);
        if (v1 instanceof Nothing) {
          return model;
        }
        ;
        if (v1 instanceof Just) {
          var $153 = {};
          for (var $154 in model) {
            if ({}.hasOwnProperty.call(model, $154)) {
              $153[$154] = model[$154];
            }
            ;
          }
          ;
          $153.selectedAlgorithm = new CustomAlgorithm(v1.value0);
          return $153;
        }
        ;
        throw new Error("Failed pattern match at GraphParams.Update (line 125, column 5 - line 127, column 67): " + [v1.constructor.name]);
      });
    }
    ;
    if (v instanceof SetResultIndex) {
      return modify_3(function(v1) {
        var $158 = {};
        for (var $159 in v1) {
          if ({}.hasOwnProperty.call(v1, $159)) {
            $158[$159] = v1[$159];
          }
          ;
        }
        ;
        $158.selectedResultIndex = v.value0;
        $158.currentStep = 0;
        return $158;
      });
    }
    ;
    if (v instanceof Save) {
      return bind7(get3)(function(model) {
        return storagePut2("coloring-graph")(stringify(encodeJson3(model.graphs)));
      });
    }
    ;
    if (v instanceof Load) {
      return bind7(storageGet2("coloring-graphs"))(function(mtext) {
        if (mtext instanceof Nothing) {
          return pure7(unit);
        }
        ;
        if (mtext instanceof Just) {
          var v1 = jsonParser(mtext.value0);
          if (v1 instanceof Left) {
            return pure7(unit);
          }
          ;
          if (v1 instanceof Right) {
            var v2 = decodeJson3(v1.value0);
            if (v2 instanceof Left) {
              return pure7(unit);
            }
            ;
            if (v2 instanceof Right) {
              return modify_3(function(v3) {
                var $167 = {};
                for (var $168 in v3) {
                  if ({}.hasOwnProperty.call(v3, $168)) {
                    $167[$168] = v3[$168];
                  }
                  ;
                }
                ;
                $167.graphs = v2.value0;
                return $167;
              });
            }
            ;
            throw new Error("Failed pattern match at GraphParams.Update (line 143, column 11 - line 145, column 57): " + [v2.constructor.name]);
          }
          ;
          throw new Error("Failed pattern match at GraphParams.Update (line 140, column 7 - line 145, column 57): " + [v1.constructor.name]);
        }
        ;
        throw new Error("Failed pattern match at GraphParams.Update (line 137, column 3 - line 145, column 57): " + [mtext.constructor.name]);
      });
    }
    ;
    if (v instanceof OpenImportDialog) {
      return modify_3(function(model) {
        var $173 = {};
        for (var $174 in model) {
          if ({}.hasOwnProperty.call(model, $174)) {
            $173[$174] = model[$174];
          }
          ;
        }
        ;
        $173.dialog = new ImportDialog("");
        return $173;
      });
    }
    ;
    if (v instanceof ChangeImportText) {
      return modify_3(function(model) {
        var $176 = {};
        for (var $177 in model) {
          if ({}.hasOwnProperty.call(model, $177)) {
            $176[$177] = model[$177];
          }
          ;
        }
        ;
        $176.dialog = new ImportDialog(v.value0);
        return $176;
      });
    }
    ;
    if (v instanceof ImportAndClose) {
      return modify_3(function(model) {
        if (model.dialog instanceof ImportDialog) {
          var v1 = jsonParser(model.dialog.value0);
          if (v1 instanceof Left) {
            return {
              currentPosition: model.currentPosition,
              currentStep: model.currentStep,
              editmode: model.editmode,
              graphs: model.graphs,
              results: model.results,
              selectedAlgorithm: model.selectedAlgorithm,
              selectedGraphIdx: model.selectedGraphIdx,
              selectedResultIndex: model.selectedResultIndex,
              selectedVertex: model.selectedVertex,
              dialog: NoDialog.value
            };
          }
          ;
          if (v1 instanceof Right) {
            var v2 = decodeJson1(v1.value0);
            if (v2 instanceof Left) {
              return {
                currentPosition: model.currentPosition,
                currentStep: model.currentStep,
                editmode: model.editmode,
                graphs: model.graphs,
                results: model.results,
                selectedAlgorithm: model.selectedAlgorithm,
                selectedGraphIdx: model.selectedGraphIdx,
                selectedResultIndex: model.selectedResultIndex,
                selectedVertex: model.selectedVertex,
                dialog: NoDialog.value
              };
            }
            ;
            if (v2 instanceof Right) {
              return cleanResults(function() {
                var v3 = set2(_selectedGraph2)(v2.value0)(model);
                return {
                  selectedAlgorithm: v3.selectedAlgorithm,
                  results: v3.results,
                  currentStep: v3.currentStep,
                  selectedResultIndex: v3.selectedResultIndex,
                  graphs: v3.graphs,
                  selectedGraphIdx: v3.selectedGraphIdx,
                  editmode: v3.editmode,
                  selectedVertex: v3.selectedVertex,
                  currentPosition: v3.currentPosition,
                  dialog: NoDialog.value
                };
              }());
            }
            ;
            throw new Error("Failed pattern match at GraphParams.Update (line 157, column 11 - line 159, column 97): " + [v2.constructor.name]);
          }
          ;
          throw new Error("Failed pattern match at GraphParams.Update (line 154, column 7 - line 159, column 97): " + [v1.constructor.name]);
        }
        ;
        return model;
      });
    }
    ;
    if (v instanceof Export) {
      return modify_3(function(model) {
        return {
          currentPosition: model.currentPosition,
          currentStep: model.currentStep,
          editmode: model.editmode,
          graphs: model.graphs,
          results: model.results,
          selectedAlgorithm: model.selectedAlgorithm,
          selectedGraphIdx: model.selectedGraphIdx,
          selectedResultIndex: model.selectedResultIndex,
          selectedVertex: model.selectedVertex,
          dialog: new ExportDialog(stringify(encodeJson1(selectedGraph(model))))
        };
      });
    }
    ;
    if (v instanceof CloseDialog) {
      return modify_3(function(v1) {
        var $188 = {};
        for (var $189 in v1) {
          if ({}.hasOwnProperty.call(v1, $189)) {
            $188[$189] = v1[$189];
          }
          ;
        }
        ;
        $188.dialog = NoDialog.value;
        return $188;
      });
    }
    ;
    if (v instanceof Compute) {
      return modify_3(function(v1) {
        var graph = selectedGraph(v1);
        var v2 = runColoring(graph)(v1.selectedAlgorithm);
        if (v2 instanceof Nothing) {
          return v1;
        }
        ;
        if (v2 instanceof Just) {
          var algorithm = {
            algorithm: v1.selectedAlgorithm,
            coloring: v2.value0,
            number: Nothing.value
          };
          return {
            currentPosition: v1.currentPosition,
            currentStep: v1.currentStep,
            dialog: v1.dialog,
            editmode: v1.editmode,
            graphs: v1.graphs,
            selectedAlgorithm: v1.selectedAlgorithm,
            selectedGraphIdx: v1.selectedGraphIdx,
            selectedResultIndex: v1.selectedResultIndex,
            selectedVertex: v1.selectedVertex,
            results: take(5)(cons(algorithm)(v1.results))
          };
        }
        ;
        throw new Error("Failed pattern match at GraphParams.Update (line 171, column 7 - line 177, column 64): " + [v2.constructor.name]);
      });
    }
    ;
    if (v instanceof PreviousStep) {
      return modify_3(function(model) {
        var $196 = {};
        for (var $197 in model) {
          if ({}.hasOwnProperty.call(model, $197)) {
            $196[$197] = model[$197];
          }
          ;
        }
        ;
        $196.currentStep = max6(0)(model.currentStep - 1 | 0);
        return $196;
      });
    }
    ;
    if (v instanceof NextStep) {
      return modify_3(function(model) {
        return {
          currentPosition: model.currentPosition,
          dialog: model.dialog,
          editmode: model.editmode,
          graphs: model.graphs,
          results: model.results,
          selectedAlgorithm: model.selectedAlgorithm,
          selectedGraphIdx: model.selectedGraphIdx,
          selectedResultIndex: model.selectedResultIndex,
          selectedVertex: model.selectedVertex,
          currentStep: min5(nbVertices(model))(model.currentStep + 1 | 0)
        };
      });
    }
    ;
    if (v instanceof FinishColoring) {
      return modify_3(function(model) {
        return {
          currentPosition: model.currentPosition,
          dialog: model.dialog,
          editmode: model.editmode,
          graphs: model.graphs,
          results: model.results,
          selectedAlgorithm: model.selectedAlgorithm,
          selectedGraphIdx: model.selectedGraphIdx,
          selectedResultIndex: model.selectedResultIndex,
          selectedVertex: model.selectedVertex,
          currentStep: nbVertices(model)
        };
      });
    }
    ;
    throw new Error("Failed pattern match at GraphParams.Update (line 24, column 1 - line 24, column 41): " + [v.constructor.name]);
  };

  // output/Pha.Html.Core/foreign.js
  var _h = (tag, ps, children2, keyed = false) => {
    const style = [];
    const props = {};
    const attrs = {};
    const events = {};
    const vdom = { tag, children: children2, props, attrs, events, node: null, keyed };
    const n = ps.length;
    for (let i = 0; i < n; i++) {
      const [t, k, v] = ps[i];
      if (t === 0)
        props[k] = v;
      else if (t === 1)
        attrs[k] = v;
      else if (t === 2)
        events[k] = v;
      else if (t === 3)
        attrs.class = attrs.class ? attrs.class + " " + k : k;
      else if (t === 4)
        style.push(k + ":" + v);
    }
    const style_ = style.join(";");
    if (style_)
      attrs.style = style_;
    return vdom;
  };
  var elemImpl = (tag, ps, children2) => _h(tag, ps, children2.map((html) => ({ key: null, html })));
  var createTextVNode = (text7) => ({
    tag: text7,
    children: [],
    type: 3
  });
  var propImpl = (k, v) => [0, k, v];
  var attrImpl = (k, v) => [1, k, v];
  var unsafeOnWithEffectImpl = (k, v) => [2, k, v];
  var class_ = (cls) => [3, cls];
  var noProp = [-1];
  var text5 = createTextVNode;

  // output/Pha.Html.Core/index.js
  var unsafeOnWithEffect = function(name16) {
    return function(handler) {
      return unsafeOnWithEffectImpl(name16, handler);
    };
  };
  var prop2 = function(key) {
    return function(val) {
      return propImpl(key, val);
    };
  };
  var empty6 = /* @__PURE__ */ text5("");
  var fromMaybe2 = /* @__PURE__ */ fromMaybe(empty6);
  var maybe2 = /* @__PURE__ */ flip(/* @__PURE__ */ maybe(empty6));
  var when3 = function(cond) {
    return function(vdom) {
      if (cond) {
        return vdom(unit);
      }
      ;
      return empty6;
    };
  };
  var elem6 = function(name16) {
    return function(attrs) {
      return function(children2) {
        return elemImpl(name16, attrs, children2);
      };
    };
  };
  var class$prime = function(c) {
    return function(b) {
      if (b) {
        return class_(c);
      }
      ;
      return noProp;
    };
  };
  var attr = function(key) {
    return function(val) {
      return attrImpl(key, val);
    };
  };

  // output/Pha.Html.Elements/index.js
  var ul = /* @__PURE__ */ elem6("ul");
  var textarea = function(attrs) {
    return elem6("textarea")(attrs)([]);
  };
  var span4 = /* @__PURE__ */ elem6("span");
  var select3 = /* @__PURE__ */ elem6("select");
  var option = /* @__PURE__ */ elem6("option");
  var li = /* @__PURE__ */ elem6("li");
  var input = function(attrs) {
    return elem6("input")(attrs)([]);
  };
  var div2 = /* @__PURE__ */ elem6("div");
  var button2 = /* @__PURE__ */ elem6("button");

  // output/Pha.Html.Events/foreign.js
  var valueImpl = (el, nothing, just) => typeof el.value === "string" ? just(el.value) : nothing;

  // output/Pha.Html.Events/index.js
  var pure8 = /* @__PURE__ */ pure(applicativeEffect);
  var map12 = /* @__PURE__ */ map(functorEffect);
  var map23 = /* @__PURE__ */ map(functorMaybe);
  var pointerCoerce = unsafeCoerce2;
  var on2 = unsafeOnWithEffect;
  var onPointerDown = function(handler) {
    return on2("pointerdown")(function($14) {
      return pure8(Just.create(handler(pointerCoerce($14))));
    });
  };
  var onPointerLeave = function(handler) {
    return on2("pointerleave")(function($18) {
      return pure8(Just.create(handler(pointerCoerce($18))));
    });
  };
  var onPointerMove = function(handler) {
    return on2("pointermove")(function($20) {
      return pure8(Just.create(handler(pointerCoerce($20))));
    });
  };
  var onPointerUp = function(handler) {
    return on2("pointerup")(function($26) {
      return pure8(Just.create(handler(pointerCoerce($26))));
    });
  };
  var onValueChange = function(f) {
    var fn = function(ev) {
      var v = currentTarget(ev);
      if (v instanceof Just) {
        return map12(map23(f))(function() {
          return valueImpl(v.value0, Nothing.value, Just.create);
        });
      }
      ;
      if (v instanceof Nothing) {
        return pure8(Nothing.value);
      }
      ;
      throw new Error("Failed pattern match at Pha.Html.Events (line 135, column 5 - line 137, column 29): " + [v.constructor.name]);
    };
    return on2("change")(fn);
  };
  var mouseCoerce = unsafeCoerce2;
  var onClick = function(handler) {
    return on2("click")(function($29) {
      return pure8(Just.create(handler(mouseCoerce($29))));
    });
  };

  // output/GraphParams.UI/index.js
  var append6 = /* @__PURE__ */ append(semigroupArray);
  var textareaClass = "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500";
  var textInputClass = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5";
  var selectClass = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5";
  var cardClass = "p-6 bg-white border border-gray-200 rounded-lg shadow";
  var card = function(title2) {
    return function(body) {
      return div2([class_(cardClass)])(append6([div2([class_("text-xl mb-2")])([text5(title2)])])(body));
    };
  };
  var baseButtonClass = "px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700";
  var buttonClass = /* @__PURE__ */ function() {
    return baseButtonClass + " rounded";
  }();
  var button3 = function(v) {
    return button2(append6([class_(buttonClass), onClick(function(v1) {
      return v.onClick;
    })])(v.attrs))([text5(v.name)]);
  };
  var dialog = function(title2) {
    return function(body) {
      return function(buttons2) {
        return div2([class_("absolute w-full h-full flex items-center justify-center bg-transp-grey inset-0 z-50")])([div2([class_("bg-white text-black rounded block border-2")])([div2([class_("p-4 min-h-8 border-b-2")])([div2([class_("text-4xl font-medium inline-block")])([text5(title2)])]), div2([class_("p-6 border-b-2")])(body), div2([class_("p-4 text-right")])(mapWithIndex2(function(i) {
          return function(v) {
            return button2([class_(buttonClass + function() {
              var $15 = i === 0;
              if ($15) {
                return "";
              }
              ;
              return " ml-4";
            }()), onClick(function(v1) {
              return v.onClick;
            })])([text5(v.name)]);
          };
        })(buttons2))])]);
      };
    };
  };
  var buttonGroup = function(buttons2) {
    var len = length(buttons2);
    return div2([])(mapWithIndex2(function(i) {
      return function(v) {
        var suffix = function() {
          var $19 = i === 0;
          if ($19) {
            return " rounded-l";
          }
          ;
          var $20 = i === (len - 1 | 0);
          if ($20) {
            return " rounded-r";
          }
          ;
          return "";
        }();
        return button2(append6([class_(baseButtonClass + suffix), onClick(function(v1) {
          return v.onClick;
        })])(v.attrs))([text5(v.name)]);
      };
    })(buttons2));
  };

  // output/Pha.Html.Attributes/index.js
  var show2 = /* @__PURE__ */ show(showInt);
  var value12 = /* @__PURE__ */ prop2("value");
  var type_18 = /* @__PURE__ */ attr("type");
  var selected2 = function(b) {
    return prop2("selected")(b);
  };
  var rows4 = /* @__PURE__ */ function() {
    var $4 = attr("rows");
    return function($5) {
      return $4(show2($5));
    };
  }();
  var readonly = function(b) {
    return prop2("selected")(b);
  };
  var name15 = /* @__PURE__ */ attr("name");
  var cols2 = /* @__PURE__ */ function() {
    var $16 = attr("cols");
    return function($17) {
      return $16(show2($17));
    };
  }();

  // output/Pha.Svg/index.js
  var text6 = /* @__PURE__ */ elem6("text");
  var svg = /* @__PURE__ */ elem6("svg");
  var rect = function(props) {
    return elem6("rect")(props)([]);
  };
  var line = function(props) {
    return elem6("line")(props)([]);
  };
  var g = /* @__PURE__ */ elem6("g");
  var circle = function(props) {
    return elem6("circle")(props)([]);
  };

  // output/Pha.Svg.Attributes/index.js
  var show3 = /* @__PURE__ */ show(showNumber);
  var isLengthNumber = {
    toString: show3
  };
  var isLengthInt = {
    toString: /* @__PURE__ */ show(showInt)
  };
  var viewBox = function(a) {
    return function(b) {
      return function(c) {
        return function(d2) {
          return attr("viewBox")(show3(a) + (" " + (show3(b) + (" " + (show3(c) + (" " + show3(d2)))))));
        };
      };
    };
  };
  var toString3 = function(dict) {
    return dict.toString;
  };
  var width9 = function(dictIsLength) {
    var toString1 = toString3(dictIsLength);
    return function(i) {
      return attr("width")(toString1(i));
    };
  };
  var x = function(dictIsLength) {
    var $41 = attr("x");
    var $42 = toString3(dictIsLength);
    return function($43) {
      return $41($42($43));
    };
  };
  var x1 = function(dictIsLength) {
    var $44 = attr("x1");
    var $45 = toString3(dictIsLength);
    return function($46) {
      return $44($45($46));
    };
  };
  var x2 = function(dictIsLength) {
    var $47 = attr("x2");
    var $48 = toString3(dictIsLength);
    return function($49) {
      return $47($48($49));
    };
  };
  var y = function(dictIsLength) {
    var $50 = attr("y");
    var $51 = toString3(dictIsLength);
    return function($52) {
      return $50($51($52));
    };
  };
  var y1 = function(dictIsLength) {
    var $53 = attr("y1");
    var $54 = toString3(dictIsLength);
    return function($55) {
      return $53($54($55));
    };
  };
  var y2 = function(dictIsLength) {
    var $56 = attr("y2");
    var $57 = toString3(dictIsLength);
    return function($58) {
      return $56($57($58));
    };
  };
  var strokeWidth = /* @__PURE__ */ function() {
    var $59 = attr("stroke-width");
    return function($60) {
      return $59(show3($60));
    };
  }();
  var r = function(dictIsLength) {
    var $69 = attr("r");
    var $70 = toString3(dictIsLength);
    return function($71) {
      return $69($70($71));
    };
  };
  var height9 = function(dictIsLength) {
    var toString1 = toString3(dictIsLength);
    return function(i) {
      return attr("height")(toString1(i));
    };
  };
  var cy = function(dictIsLength) {
    var $85 = attr("cy");
    var $86 = toString3(dictIsLength);
    return function($87) {
      return $85($86($87));
    };
  };
  var cx = function(dictIsLength) {
    var $88 = attr("cx");
    var $89 = toString3(dictIsLength);
    return function($90) {
      return $88($89($90));
    };
  };

  // output/GraphParams.GraphView/index.js
  var x12 = /* @__PURE__ */ x1(isLengthNumber);
  var y12 = /* @__PURE__ */ y1(isLengthNumber);
  var x22 = /* @__PURE__ */ x2(isLengthNumber);
  var y22 = /* @__PURE__ */ y2(isLengthNumber);
  var mapFlipped5 = /* @__PURE__ */ mapFlipped(functorArray);
  var eq5 = /* @__PURE__ */ eq(eqEditMode);
  var cx2 = /* @__PURE__ */ cx(isLengthNumber);
  var cy2 = /* @__PURE__ */ cy(isLengthNumber);
  var r2 = /* @__PURE__ */ r(isLengthInt);
  var show4 = /* @__PURE__ */ show(showInt);
  var x3 = /* @__PURE__ */ x(isLengthNumber);
  var y3 = /* @__PURE__ */ y(isLengthNumber);
  var apply4 = /* @__PURE__ */ apply2(applyMaybe);
  var map13 = /* @__PURE__ */ map(functorMaybe);
  var currentLine = function(p1) {
    return function(p2) {
      return line([x12(100 * p1.x), y12(100 * p1.y), x22(100 * p2.x), y22(100 * p2.y), class_("graphparams-graphview-edge pointer-events-none")]);
    };
  };
  var graphView = function(v) {
    var n = nbVertices(v);
    var v1 = selectedGraph(v);
    var vertexColor = partialColoring(v);
    return div2([])([div2([class_("graphparams-graphview-board")])([svg([class_("block"), viewBox(0)(0)(100)(100), onClick(AddVertex.create), onPointerUp(function(v2) {
      return DropOrLeave.value;
    }), onPointerLeave(function(v2) {
      return DropOrLeave.value;
    }), onPointerMove(GraphMove.create)])([g([])(mapFlipped5(v1.edges)(function(edge) {
      return maybe2(getCoordsOfEdge(v1)(edge))(function(v2) {
        return line([x12(100 * v2.x1), y12(100 * v2.y1), x22(100 * v2.x2), y22(100 * v2.y2), class_("graphparams-graphview-edge"), class$prime("deletemode")(eq5(v.editmode)(DeleteMode.value)), onClick(function(v3) {
          return new DeleteEdge(edge);
        })]);
      });
    })), g([])(map22(v1.layout)(vertexColor)(function(i) {
      return function(v2) {
        return function(color) {
          return circle([cx2(100 * v2.x), cy2(100 * v2.y), r2(function() {
            var $38 = n <= 26;
            if ($38) {
              return 4;
            }
            ;
            return 2;
          }()), strokeWidth(0.5), class_("graphparams-graphview-vertex color" + show4(color)), class$prime("deletemode")(eq5(v.editmode)(DeleteMode.value)), onClick(DeleteVertex.create(i)), onPointerDown(SelectVertex.create(i)), onPointerUp(function(v3) {
            return new PointerUp(i);
          })]);
        };
      };
    })), when3(n <= 26)(function(v2) {
      return g([])(mapWithIndex2(function(idx) {
        return function(v3) {
          return text6([class_("pointer-events-none graphview-text"), x3(100 * v3.x - 2), y3(100 * v3.y + 2)])([text5(labelToString(idx))]);
        };
      })(v1.layout));
    }), when3(eq5(v.editmode)(AddEMode.value))(function(v2) {
      return fromMaybe2(function() {
        if (v.selectedVertex instanceof Just) {
          return apply4(map13(currentLine)(v.currentPosition))(getCoords(v1)(v.selectedVertex.value0));
        }
        ;
        return Nothing.value;
      }());
    })])]), buttonGroup([{
      name: "D\xE9placer",
      onClick: new SetEditMode(MoveMode.value),
      attrs: [selected2(eq5(v.editmode)(MoveMode.value))]
    }, {
      name: "Ajouter sommet",
      onClick: new SetEditMode(VertexMode.value),
      attrs: [selected2(eq5(v.editmode)(VertexMode.value))]
    }, {
      name: "Ajouter ar\xEAte",
      onClick: new SetEditMode(AddEMode.value),
      attrs: [selected2(eq5(v.editmode)(AddEMode.value))]
    }, {
      name: "Retirer",
      onClick: new SetEditMode(DeleteMode.value),
      attrs: [selected2(eq5(v.editmode)(DeleteMode.value))]
    }, {
      name: "Tout effacer",
      onClick: ClearGraph.value,
      attrs: []
    }, {
      name: "Ajuster",
      onClick: AdjustGraph.value,
      attrs: []
    }, {
      name: "Gros graphe",
      onClick: GenBigGraph.value,
      attrs: []
    }])]);
  };

  // output/GraphParams.View/index.js
  var mapFlipped6 = /* @__PURE__ */ mapFlipped(functorArray);
  var x4 = /* @__PURE__ */ x(isLengthInt);
  var y4 = /* @__PURE__ */ y(isLengthInt);
  var width10 = /* @__PURE__ */ width9(isLengthInt);
  var height10 = /* @__PURE__ */ height9(isLengthInt);
  var show5 = /* @__PURE__ */ show(showInt);
  var append1 = /* @__PURE__ */ append(semigroupArray);
  var importDialog = function(text7) {
    var buttons2 = [{
      name: "Annuler",
      onClick: CloseDialog.value
    }, {
      name: "OK",
      onClick: ImportAndClose.value
    }];
    var body = textarea([class_(textareaClass), cols2(150), rows4(30), value12(text7), onValueChange(ChangeImportText.create)]);
    return dialog("Importer les graphes")([body])(buttons2);
  };
  var exportDialog = function(text7) {
    var buttons2 = [{
      name: "OK",
      onClick: CloseDialog.value
    }];
    var body = textarea([class_(textareaClass), cols2(150), rows4(30), value12(text7), readonly(true)]);
    return dialog("Exporter les graphes")([body])(buttons2);
  };
  var view2 = function(v) {
    return div2([class_("flex flex-row justify-around")])([card("Graphe")([graphView(v)]), card("Ordre des couleurs")([div2([class_("w-16")])([svg([viewBox(0)(0)(10)(100)])(mapFlipped6(range3(0)(9))(function(i) {
      return rect([x4(0), y4(i * 10 | 0), width10(10), height10(10), class_("color" + show5(i))]);
    }))])]), div2([class_("flex flex-col")])([span4([class_("mb-2 mt-4 text-2xl font-bold")])([text5("Graphe")]), select3([class_(selectClass), value12("1"), onValueChange(SetGraph.create)])([option([value12("1")])([text5("Graphe 1")]), option([value12("2")])([text5("Graphe 2")]), option([value12("3")])([text5("Graphe 3")]), option([value12("4")])([text5("Graphe 4")])]), buttonGroup([{
      onClick: Save.value,
      name: "Sauvegarder",
      attrs: []
    }, {
      onClick: OpenImportDialog.value,
      name: "Importer",
      attrs: []
    }, {
      onClick: Export.value,
      name: "Exporter",
      attrs: []
    }]), span4([class_("mb-2 mt-4 text-2xl font-bold")])([text5("Algorithme")]), select3([class_(selectClass), name15("dsatur"), onValueChange(SetAlgo.create)])([option([value12("alpha")])([text5("Alphabetique")]), option([value12("decdegree")])([text5("Degr\xE9 d\xE9croissant")]), option([value12("indset")])([text5("Stables")]), option([value12("dsatur")])([text5("DSatur")]), option([value12("custom")])([text5("Personnalis\xE9")])]), function() {
      if (v.selectedAlgorithm instanceof CustomAlgorithm) {
        return input([class_(textInputClass), type_18("text"), value12(orderingToString(v.selectedAlgorithm.value0)), onValueChange(CustomAlgoTextChange.create)]);
      }
      ;
      return empty6;
    }(), button3({
      onClick: Compute.value,
      name: "Calculer",
      attrs: []
    }), span4([class_("mb-2 mt-4 text-2xl font-bold")])([text5("R\xE9sultats")]), ul([class_("ml-4 list-disc")])(append1(mapWithIndex2(function(idx) {
      return function(v1) {
        return li([class$prime("text-blue-600")(v.selectedResultIndex === idx), onClick(function(v2) {
          return new SetResultIndex(idx);
        })])([text5(algoToString(v1.algorithm) + function() {
          if (v1.number instanceof Nothing) {
            return "";
          }
          ;
          if (v1.number instanceof Just) {
            return " (" + (show5(v1.number.value0) + " couleurs)");
          }
          ;
          throw new Error("Failed pattern match at GraphParams.View (line 88, column 21 - line 90, column 77): " + [v1.number.constructor.name]);
        }())]);
      };
    })(v.results))(repeat(5 - length(v.results) | 0)(function(v1) {
      return li([])([]);
    }))), buttonGroup([{
      onClick: PreviousStep.value,
      name: "Etape pr\xE9c\xE9dente",
      attrs: []
    }, {
      onClick: NextStep.value,
      name: "Etape suivante",
      attrs: []
    }, {
      onClick: FinishColoring.value,
      name: "Termine la coloration",
      attrs: []
    }]), span4([class_("text-xl")])([text5(orderingToString(partialOrdering(v)))])]), function() {
      if (v.dialog instanceof NoDialog) {
        return empty6;
      }
      ;
      if (v.dialog instanceof ExportDialog) {
        return exportDialog(v.dialog.value0);
      }
      ;
      if (v.dialog instanceof ImportDialog) {
        return importDialog(v.dialog.value0);
      }
      ;
      throw new Error("Failed pattern match at GraphParams.View (line 100, column 7 - line 103, column 46): " + [v.dialog.constructor.name]);
    }()]);
  };

  // output/Pha.App.Internal/foreign.js
  var TEXT_NODE = 3;
  var compose2 = (f, g2) => f && g2 ? (x5) => f(g2(x5)) : f || g2;
  var patchProperty = (node, key, newValue) => {
    node[key] = newValue;
  };
  var patchAttribute = (node, key, newValue) => {
    if (newValue == null || key === "class" && !newValue) {
      node.removeAttribute(key);
    } else {
      node.setAttribute(key, newValue);
    }
  };
  var patchEvent = (node, key, oldValue, newValue, listener, mapf) => {
    if (!node.actions)
      node.actions = {};
    node.actions[key] = mapf && newValue ? mapf(newValue) : newValue;
    if (!newValue) {
      node.removeEventListener(key, listener);
    } else if (!oldValue) {
      node.addEventListener(key, listener);
    }
  };
  var createNode = (vnode, listener, isSvg, mapf) => {
    const node = vnode.type === TEXT_NODE ? document.createTextNode(vnode.tag) : (isSvg = isSvg || vnode.tag === "svg") ? document.createElementNS("http://www.w3.org/2000/svg", vnode.tag) : document.createElement(vnode.tag);
    const props = vnode.props;
    const attrs = vnode.attrs;
    const events = vnode.events;
    const mapf2 = compose2(mapf, vnode.mapf);
    for (let k in props) {
      patchProperty(node, k, props[k]);
    }
    for (let k in attrs) {
      patchAttribute(node, k, attrs[k]);
    }
    for (let k in events) {
      patchEvent(node, k, null, events[k], listener, mapf2);
    }
    for (let i = 0, len = vnode.children.length; i < len; i++) {
      node.appendChild(
        createNode(
          getVNode(vnode.children[i]).html,
          listener,
          isSvg,
          mapf2
        )
      );
    }
    vnode.node = node;
    return node;
  };
  var patch = (parent2, node, oldVNode, newVNode, listener, isSvg, mapf) => {
    if (oldVNode === newVNode)
      return;
    if (oldVNode != null && oldVNode.type === TEXT_NODE && newVNode.type === TEXT_NODE) {
      if (oldVNode.tag !== newVNode.tag)
        node.nodeValue = newVNode.tag;
    } else if (oldVNode == null || oldVNode.tag !== newVNode.tag) {
      node = parent2.insertBefore(
        createNode(newVNode, listener, isSvg, mapf),
        node
      );
      if (oldVNode) {
        oldVNode.node.remove();
      }
    } else {
      const oldProps = oldVNode.props;
      const newProps = newVNode.props;
      for (let i in { ...oldProps, ...newProps }) {
        if (oldProps[i] !== newProps[i]) {
          patchProperty(node, i, newProps[i]);
        }
      }
      const oldAttrs = oldVNode.attrs;
      const newAttrs = newVNode.attrs;
      for (let i in { ...oldAttrs, ...newAttrs }) {
        if (oldAttrs[i] !== newAttrs[i]) {
          patchAttribute(node, i, newAttrs[i]);
        }
      }
      const oldEvents = oldVNode.events;
      const newEvents = newVNode.events;
      for (let i in { ...oldEvents, ...newEvents }) {
        if (oldEvents[i] !== newEvents[i]) {
          patchEvent(node, i, oldEvents[i], newEvents[i], listener, mapf);
        }
      }
      const oldVKids = oldVNode.children;
      const newVKids = newVNode.children;
      let oldTail = oldVKids.length - 1;
      let newTail = newVKids.length - 1;
      mapf = compose2(mapf, newVNode.mapf);
      isSvg = isSvg || newVNode.tag === "svg";
      if (!newVNode.keyed) {
        for (let i = 0; i <= oldTail && i <= newTail; i++) {
          const oldVNode2 = oldVKids[i].html;
          const newVNode2 = getVNode(newVKids[i], oldVNode2).html;
          patch(node, oldVNode2.node, oldVNode2, newVNode2, listener, isSvg, mapf);
        }
        for (let i = oldTail + 1; i <= newTail; i++) {
          const newVNode2 = getVNode(newVKids[i], oldVNode).html;
          node.appendChild(
            createNode(newVNode2, listener, isSvg, mapf)
          );
        }
        for (let i = newTail + 1; i <= oldTail; i++) {
          oldVKids[i].html.node.remove();
        }
      } else {
        let oldHead = 0;
        let newHead = 0;
        while (newHead <= newTail && oldHead <= oldTail) {
          const { key: oldKey, html: oldVNode2 } = oldVKids[oldHead];
          if (oldKey !== newVKids[newHead].key)
            break;
          const newKNode = getVNode(newVKids[newHead], oldVNode2);
          patch(node, oldVNode2.node, oldVNode2, newKNode.html, listener, isSvg, mapf);
          newHead++;
          oldHead++;
        }
        while (newHead <= newTail && oldHead <= oldTail) {
          const { key: oldKey, html: oldVNode2 } = oldVKids[oldTail];
          if (oldKey !== newVKids[newTail].key)
            break;
          const newKNode = getVNode(newVKids[newTail], oldVNode2);
          patch(node, oldVNode2.node, oldVNode2, newKNode.html, listener, isSvg, mapf);
          newTail--;
          oldTail--;
        }
        if (oldHead > oldTail) {
          while (newHead <= newTail) {
            const newVNode2 = getVNode(newVKids[newHead]).html;
            node.insertBefore(
              createNode(newVNode2, listener, isSvg, mapf),
              oldVKids[oldHead] && oldVKids[oldHead].html.node
            );
            newHead++;
          }
        } else if (newHead > newTail) {
          while (oldHead <= oldTail) {
            oldVKids[oldHead].html.node.remove();
            oldHead++;
          }
        } else {
          const keyed = {};
          const newKeyed = {};
          for (let i = oldHead; i <= oldTail; i++) {
            keyed[oldVKids[i].key] = oldVKids[i].html;
          }
          while (newHead <= newTail) {
            const { key: oldKey, html: oldVKid } = oldVKids[oldHead] || { key: null, html: null };
            const { key: newKey, html: newVKid } = getVNode(newVKids[newHead], oldVKid);
            if (newKeyed[oldKey] || oldVKids[oldHead + 1] && newKey === oldVKids[oldHead + 1].key) {
              oldHead++;
              continue;
            }
            if (oldKey === newKey) {
              patch(node, oldVKid.node, oldVKid, newVKid, listener, isSvg, mapf);
              newKeyed[newKey] = true;
              oldHead++;
            } else {
              const vkid = keyed[newKey];
              if (vkid != null) {
                patch(
                  node,
                  node.insertBefore(vkid.node, oldVKid.node),
                  vkid,
                  newVKids[newHead].html,
                  listener,
                  isSvg,
                  mapf
                );
                newKeyed[newKey] = true;
              } else {
                patch(node, oldVKid && oldVKid.node, null, newVKids[newHead].html, listener, isSvg, mapf);
              }
            }
            newHead++;
          }
          for (let i in keyed) {
            if (!newKeyed[i]) {
              keyed[i].node.remove();
            }
          }
        }
      }
    }
    newVNode.node = node;
    return node;
  };
  var propsChanged = (a, b) => {
    for (let i = 0; i < a.length; i++)
      if (a[i] !== b[i])
        return true;
    return false;
  };
  var getVNode = (newVNode, oldVNode) => {
    if (typeof newVNode.html.type === "function") {
      if (!oldVNode || oldVNode.memo == null || propsChanged(oldVNode.memo, newVNode.html.memo)) {
        oldVNode = copyVNode(newVNode.html.type(...newVNode.html.memo));
        oldVNode.memo = newVNode.html.memo;
      }
      newVNode.html = oldVNode;
    }
    return newVNode;
  };
  var copyVNode = (vnode) => ({
    ...vnode,
    children: vnode.children && vnode.children.map(({ key, html }) => ({ key, html: copyVNode(html) }))
  });
  var getAction = (target5, type) => target5.actions[type];
  var unsafePatch = patch;
  var unsafeLinkNode = (node) => (vdom) => {
    vdom.node = node;
    return vdom;
  };

  // output/Web.DOM.Document/foreign.js
  var getEffProp2 = function(name16) {
    return function(doc) {
      return function() {
        return doc[name16];
      };
    };
  };
  var url = getEffProp2("URL");
  var documentURI = getEffProp2("documentURI");
  var origin2 = getEffProp2("origin");
  var compatMode = getEffProp2("compatMode");
  var characterSet = getEffProp2("characterSet");
  var contentType = getEffProp2("contentType");
  var _documentElement2 = getEffProp2("documentElement");
  function createTextNode(data) {
    return function(doc) {
      return function() {
        return doc.createTextNode(data);
      };
    };
  }

  // output/Web.DOM.Node/foreign.js
  var getEffProp3 = function(name16) {
    return function(node) {
      return function() {
        return node[name16];
      };
    };
  };
  var baseURI = getEffProp3("baseURI");
  var _ownerDocument = getEffProp3("ownerDocument");
  var _parentNode = getEffProp3("parentNode");
  var _parentElement = getEffProp3("parentElement");
  var childNodes = getEffProp3("childNodes");
  var _firstChild = getEffProp3("firstChild");
  var _lastChild = getEffProp3("lastChild");
  var _previousSibling = getEffProp3("previousSibling");
  var _nextSibling = getEffProp3("nextSibling");
  var _nodeValue = getEffProp3("nodeValue");
  var textContent = getEffProp3("textContent");
  function appendChild(node) {
    return function(parent2) {
      return function() {
        parent2.appendChild(node);
      };
    };
  }

  // output/Web.DOM.Node/index.js
  var map14 = /* @__PURE__ */ map(functorEffect);
  var parentNode = /* @__PURE__ */ function() {
    var $6 = map14(toMaybe);
    return function($7) {
      return $6(_parentNode($7));
    };
  }();

  // output/Web.DOM.Text/index.js
  var toNode2 = unsafeCoerce2;

  // output/Pha.App/index.js
  var bind8 = /* @__PURE__ */ bind(bindEffect);
  var discard3 = /* @__PURE__ */ discard(discardUnit);
  var for_2 = /* @__PURE__ */ for_(applicativeEffect)(foldableMaybe);
  var unless2 = /* @__PURE__ */ unless(applicativeEffect);
  var bind14 = /* @__PURE__ */ bind(bindAff);
  var liftEffect3 = /* @__PURE__ */ liftEffect(monadEffectAff);
  var discard22 = /* @__PURE__ */ discard3(bindAff);
  var pure12 = /* @__PURE__ */ pure(applicativeAff);
  var insert6 = /* @__PURE__ */ insert3(ordSubscriptionId);
  var for_1 = /* @__PURE__ */ for_(applicativeAff)(foldableMaybe);
  var lookup3 = /* @__PURE__ */ lookup(ordSubscriptionId);
  var runFreeM2 = /* @__PURE__ */ runFreeM(/* @__PURE__ */ functorUpdateF(functorAff))(monadRecAff);
  var mapFlipped7 = /* @__PURE__ */ mapFlipped(functorEffect);
  var map15 = /* @__PURE__ */ map(functorEffect);
  var map16 = /* @__PURE__ */ map(functorMaybe);
  var getState = function(v) {
    return read(v.state);
  };
  var getFreshId = function(v) {
    return function __do() {
      var id3 = read(v.freshId)();
      write(id3 + 1 | 0)(v.freshId)();
      return id3;
    };
  };
  var dispatch = function(v) {
    return v.update(v);
  };
  var dispatchEvent = function(iapp) {
    return function(ev) {
      return function(handler) {
        return function __do() {
          var msg$prime = handler(ev)();
          return for_2(msg$prime)(dispatch(iapp))();
        };
      };
    };
  };
  var render = function(v) {
    return function(newVDom) {
      var listener = function(e) {
        var v1 = type_(e);
        return for_2(currentTarget(e))(function(target5) {
          return function __do() {
            var fn = getAction(target5, v1);
            return dispatchEvent(v)(e)(fn)();
          };
        })();
      };
      return function __do() {
        var oldVDom = read(v.vdom)();
        var node1 = read(v.node)();
        var pnode = parentNode(node1)();
        return for_2(pnode)(function(pnode$prime) {
          var vdom2 = copyVNode(newVDom);
          return function __do2() {
            var node2 = unsafePatch(pnode$prime, node1, oldVDom, vdom2, listener);
            write(node2)(v.node)();
            return write(vdom2)(v.vdom)();
          };
        })();
      };
    };
  };
  var setState = function(v) {
    return function(newState) {
      return function __do() {
        var oldState = read(v.state)();
        return unless2(unsafeRefEq(oldState)(newState))(function __do2() {
          write(newState)(v.state)();
          return render(v)(v.view(newState))();
        })();
      };
    };
  };
  var interpret = function(update4) {
    return function(v) {
      return function(v1) {
        var go2 = function(v2) {
          if (v2 instanceof State) {
            return bind14(liftEffect3(getState(v)))(function(st) {
              var v3 = v2.value0(st);
              return discard22(liftEffect3(setState(v)(v3.value1)))(function() {
                return pure12(v3.value0);
              });
            });
          }
          ;
          if (v2 instanceof Lift) {
            return v2.value0;
          }
          ;
          if (v2 instanceof Subscribe) {
            return bind14(liftEffect3(v2.value0(function(msg) {
              return launchAff_(interpret(update4)(v)(update4(msg)));
            })))(function(canceler) {
              return bind14(liftEffect3(getFreshId(v)))(function(id3) {
                return discard22(liftEffect3(modify_(insert6(id3)(canceler))(v.subscriptions)))(function() {
                  return pure12(v2.value1(id3));
                });
              });
            });
          }
          ;
          if (v2 instanceof Unsubscribe) {
            return bind14(liftEffect3(read(v.subscriptions)))(function(subs) {
              return discard22(for_1(lookup3(v2.value0)(subs))(liftEffect3))(function() {
                return pure12(v2.value1);
              });
            });
          }
          ;
          throw new Error("Failed pattern match at Pha.App (line 115, column 3 - line 119, column 11): " + [v2.constructor.name]);
        };
        return runFreeM2(go2)(v1);
      };
    };
  };
  var app$prime = function(v) {
    return function __do() {
      var parentNode2 = mapFlipped7(bind8(windowImpl)(document2))(toParentNode)();
      var selected3 = map15(map16(toNode))(querySelector(v.selector)(parentNode2))();
      return for_2(selected3)(function(node_) {
        return function __do2() {
          var state3 = $$new(v.init.model)();
          var emptyNode = mapFlipped7(bind8(mapFlipped7(bind8(windowImpl)(document2))(toDocument))(createTextNode("")))(toNode2)();
          appendChild(emptyNode)(node_)();
          var node = $$new(emptyNode)();
          var vdom = $$new(unsafeLinkNode(emptyNode)(text5("")))();
          var subscriptions = $$new(empty2)();
          var freshId = $$new(0)();
          var iapp = {
            view: v.view,
            update: v.update,
            state: state3,
            node,
            vdom,
            subscriptions,
            freshId
          };
          render(iapp)(v.view(v.init.model))();
          return for_2(v.init.msg)(dispatch(iapp))();
        };
      })();
    };
  };
  var app = function(v) {
    var update$prime = function(iapp) {
      return function(msg) {
        return launchAff_(interpret(v.update)(iapp)(v.update(msg)));
      };
    };
    return app$prime({
      init: v.init,
      view: v.view,
      selector: v.selector,
      update: update$prime
    });
  };

  // output/Main/index.js
  var main = /* @__PURE__ */ function() {
    return app({
      init: {
        model: init3,
        msg: new Just(Load.value)
      },
      update: update3,
      view: view2,
      selector: "#root"
    });
  }();

  // <stdin>
  main();
})();
