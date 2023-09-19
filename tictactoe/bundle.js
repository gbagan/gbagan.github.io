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
        return function(x4) {
          return f(g2(x4));
        };
      };
    }
  };
  var compose = function(dict) {
    return dict.compose;
  };

  // output/Control.Category/index.js
  var identity = function(dict) {
    return dict.identity;
  };
  var categoryFn = {
    identity: function(x4) {
      return x4;
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

  // output/Data.Unit/foreign.js
  var unit = void 0;

  // output/Data.Functor/index.js
  var map = function(dict) {
    return dict.map;
  };
  var mapFlipped = function(dictFunctor) {
    var map12 = map(dictFunctor);
    return function(fa) {
      return function(f) {
        return map12(f)(fa);
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
  var apply = function(dict) {
    return dict.apply;
  };
  var applySecond = function(dictApply) {
    var apply1 = apply(dictApply);
    var map9 = map(dictApply.Functor0());
    return function(a) {
      return function(b) {
        return apply1(map9($$const(identity2))(a))(b);
      };
    };
  };

  // output/Control.Applicative/index.js
  var pure = function(dict) {
    return dict.pure;
  };
  var unless = function(dictApplicative) {
    var pure12 = pure(dictApplicative);
    return function(v) {
      return function(v1) {
        if (!v) {
          return v1;
        }
        ;
        if (v) {
          return pure12(unit);
        }
        ;
        throw new Error("Failed pattern match at Control.Applicative (line 68, column 1 - line 68, column 65): " + [v.constructor.name, v1.constructor.name]);
      };
    };
  };
  var liftA1 = function(dictApplicative) {
    var apply2 = apply(dictApplicative.Apply0());
    var pure12 = pure(dictApplicative);
    return function(f) {
      return function(a) {
        return apply2(pure12(f))(a);
      };
    };
  };

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
  var discardUnit = {
    discard: function(dictBind) {
      return bind(dictBind);
    }
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
    return function(eq3) {
      return function(gt) {
        return function(x4) {
          return function(y4) {
            return x4 < y4 ? lt : x4 === y4 ? eq3 : gt;
          };
        };
      };
    };
  };
  var ordIntImpl = unsafeCompareImpl;
  var ordNumberImpl = unsafeCompareImpl;

  // output/Data.Eq/foreign.js
  var refEq = function(r1) {
    return function(r2) {
      return r1 === r2;
    };
  };
  var eqBooleanImpl = refEq;
  var eqIntImpl = refEq;
  var eqNumberImpl = refEq;

  // output/Data.Eq/index.js
  var eqNumber = {
    eq: eqNumberImpl
  };
  var eqInt = {
    eq: eqIntImpl
  };
  var eqBoolean = {
    eq: eqBooleanImpl
  };
  var eq = function(dict) {
    return dict.eq;
  };
  var eq2 = /* @__PURE__ */ eq(eqBoolean);
  var notEq = function(dictEq) {
    var eq3 = eq(dictEq);
    return function(x4) {
      return function(y4) {
        return eq2(eq3(x4)(y4))(false);
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
  var intSub = function(x4) {
    return function(y4) {
      return x4 - y4 | 0;
    };
  };

  // output/Data.Semiring/foreign.js
  var intAdd = function(x4) {
    return function(y4) {
      return x4 + y4 | 0;
    };
  };
  var intMul = function(x4) {
    return function(y4) {
      return x4 * y4 | 0;
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
  var mul = function(dict) {
    return dict.mul;
  };
  var add = function(dict) {
    return dict.add;
  };

  // output/Data.Ring/index.js
  var ringInt = {
    sub: intSub,
    Semiring0: function() {
      return semiringInt;
    }
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
  var compare = function(dict) {
    return dict.compare;
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
  var fromJust = function() {
    return function(v) {
      if (v instanceof Just) {
        return v.value0;
      }
      ;
      throw new Error("Failed pattern match at Data.Maybe (line 288, column 1 - line 288, column 46): " + [v.constructor.name]);
    };
  };
  var eqMaybe = function(dictEq) {
    var eq3 = eq(dictEq);
    return {
      eq: function(x4) {
        return function(y4) {
          if (x4 instanceof Nothing && y4 instanceof Nothing) {
            return true;
          }
          ;
          if (x4 instanceof Just && y4 instanceof Just) {
            return eq3(x4.value0)(y4.value0);
          }
          ;
          return false;
        };
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

  // output/Control.Monad/index.js
  var ap = function(dictMonad) {
    var bind6 = bind(dictMonad.Bind1());
    var pure6 = pure(dictMonad.Applicative0());
    return function(f) {
      return function(a) {
        return bind6(f)(function(f$prime) {
          return bind6(a)(function(a$prime) {
            return pure6(f$prime(a$prime));
          });
        });
      };
    };
  };

  // output/Data.EuclideanRing/foreign.js
  var intDegree = function(x4) {
    return Math.min(Math.abs(x4), 2147483647);
  };
  var intDiv = function(x4) {
    return function(y4) {
      if (y4 === 0)
        return 0;
      return y4 > 0 ? Math.floor(x4 / y4) : -Math.floor(x4 / -y4);
    };
  };
  var intMod = function(x4) {
    return function(y4) {
      if (y4 === 0)
        return 0;
      var yy = Math.abs(y4);
      return (x4 % yy + yy) % yy;
    };
  };

  // output/Data.CommutativeRing/index.js
  var commutativeRingInt = {
    Ring0: function() {
      return ringInt;
    }
  };

  // output/Data.EuclideanRing/index.js
  var mod = function(dict) {
    return dict.mod;
  };
  var euclideanRingInt = {
    degree: intDegree,
    div: intDiv,
    mod: intMod,
    CommutativeRing0: function() {
      return commutativeRingInt;
    }
  };
  var div = function(dict) {
    return dict.div;
  };

  // output/Data.Monoid/index.js
  var mempty = function(dict) {
    return dict.mempty;
  };

  // output/Effect/index.js
  var $runtime_lazy = function(name15, moduleName, init3) {
    var state3 = 0;
    var val;
    return function(lineNumber) {
      if (state3 === 2)
        return val;
      if (state3 === 1)
        throw new ReferenceError(name15 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state3 = 1;
      val = init3();
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

  // output/Control.Monad.Reader.Class/index.js
  var ask = function(dict) {
    return dict.ask;
  };

  // output/Data.Identity/index.js
  var Identity = function(x4) {
    return x4;
  };
  var functorIdentity = {
    map: function(f) {
      return function(m) {
        return f(m);
      };
    }
  };
  var applyIdentity = {
    apply: function(v) {
      return function(v1) {
        return v(v1);
      };
    },
    Functor0: function() {
      return functorIdentity;
    }
  };
  var bindIdentity = {
    bind: function(v) {
      return function(f) {
        return f(v);
      };
    },
    Apply0: function() {
      return applyIdentity;
    }
  };
  var applicativeIdentity = {
    pure: Identity,
    Apply0: function() {
      return applyIdentity;
    }
  };
  var monadIdentity = {
    Applicative0: function() {
      return applicativeIdentity;
    },
    Bind1: function() {
      return bindIdentity;
    }
  };

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
  var snd = function(v) {
    return v.value1;
  };
  var fst = function(v) {
    return v.value0;
  };

  // output/Control.Monad.State.Class/index.js
  var state = function(dict) {
    return dict.state;
  };
  var put = function(dictMonadState) {
    var state1 = state(dictMonadState);
    return function(s) {
      return state1(function(v) {
        return new Tuple(unit, s);
      });
    };
  };
  var modify_2 = function(dictMonadState) {
    var state1 = state(dictMonadState);
    return function(f) {
      return state1(function(s) {
        return new Tuple(unit, f(s));
      });
    };
  };
  var get = function(dictMonadState) {
    return state(dictMonadState)(function(s) {
      return new Tuple(s, s);
    });
  };

  // output/Control.Monad.Trans.Class/index.js
  var lift = function(dict) {
    return dict.lift;
  };

  // output/Unsafe.Coerce/foreign.js
  var unsafeCoerce2 = function(x4) {
    return x4;
  };

  // output/Safe.Coerce/index.js
  var coerce = function() {
    return unsafeCoerce2;
  };

  // output/Data.Newtype/index.js
  var coerce2 = /* @__PURE__ */ coerce();
  var unwrap = function() {
    return coerce2;
  };

  // output/Effect.Class/index.js
  var liftEffect = function(dict) {
    return dict.liftEffect;
  };

  // output/Control.Monad.Reader.Trans/index.js
  var ReaderT = function(x4) {
    return x4;
  };
  var runReaderT = function(v) {
    return v;
  };
  var monadTransReaderT = {
    lift: function(dictMonad) {
      return function($147) {
        return ReaderT($$const($147));
      };
    }
  };
  var lift3 = /* @__PURE__ */ lift(monadTransReaderT);
  var mapReaderT = function(f) {
    return function(v) {
      return function($148) {
        return f(v($148));
      };
    };
  };
  var functorReaderT = function(dictFunctor) {
    return {
      map: function() {
        var $149 = map(dictFunctor);
        return function($150) {
          return mapReaderT($149($150));
        };
      }()
    };
  };
  var applyReaderT = function(dictApply) {
    var apply2 = apply(dictApply);
    var functorReaderT1 = functorReaderT(dictApply.Functor0());
    return {
      apply: function(v) {
        return function(v1) {
          return function(r) {
            return apply2(v(r))(v1(r));
          };
        };
      },
      Functor0: function() {
        return functorReaderT1;
      }
    };
  };
  var bindReaderT = function(dictBind) {
    var bind6 = bind(dictBind);
    var applyReaderT1 = applyReaderT(dictBind.Apply0());
    return {
      bind: function(v) {
        return function(k) {
          return function(r) {
            return bind6(v(r))(function(a) {
              var v1 = k(a);
              return v1(r);
            });
          };
        };
      },
      Apply0: function() {
        return applyReaderT1;
      }
    };
  };
  var applicativeReaderT = function(dictApplicative) {
    var applyReaderT1 = applyReaderT(dictApplicative.Apply0());
    return {
      pure: function() {
        var $154 = pure(dictApplicative);
        return function($155) {
          return ReaderT($$const($154($155)));
        };
      }(),
      Apply0: function() {
        return applyReaderT1;
      }
    };
  };
  var monadReaderT = function(dictMonad) {
    var applicativeReaderT1 = applicativeReaderT(dictMonad.Applicative0());
    var bindReaderT1 = bindReaderT(dictMonad.Bind1());
    return {
      Applicative0: function() {
        return applicativeReaderT1;
      },
      Bind1: function() {
        return bindReaderT1;
      }
    };
  };
  var monadAskReaderT = function(dictMonad) {
    var monadReaderT1 = monadReaderT(dictMonad);
    return {
      ask: pure(dictMonad.Applicative0()),
      Monad0: function() {
        return monadReaderT1;
      }
    };
  };
  var monadEffectReader = function(dictMonadEffect) {
    var Monad0 = dictMonadEffect.Monad0();
    var monadReaderT1 = monadReaderT(Monad0);
    return {
      liftEffect: function() {
        var $157 = lift3(Monad0);
        var $158 = liftEffect(dictMonadEffect);
        return function($159) {
          return $157($158($159));
        };
      }(),
      Monad0: function() {
        return monadReaderT1;
      }
    };
  };

  // output/Data.Foldable/foreign.js
  var foldrArray = function(f) {
    return function(init3) {
      return function(xs) {
        var acc = init3;
        var len = xs.length;
        for (var i = len - 1; i >= 0; i--) {
          acc = f(xs[i])(acc);
        }
        return acc;
      };
    };
  };
  var foldlArray = function(f) {
    return function(init3) {
      return function(xs) {
        var acc = init3;
        var len = xs.length;
        for (var i = 0; i < len; i++) {
          acc = f(acc)(xs[i]);
        }
        return acc;
      };
    };
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

  // output/Data.Foldable/index.js
  var eq12 = /* @__PURE__ */ eq(eqOrdering);
  var foldr = function(dict) {
    return dict.foldr;
  };
  var traverse_ = function(dictApplicative) {
    var applySecond2 = applySecond(dictApplicative.Apply0());
    var pure6 = pure(dictApplicative);
    return function(dictFoldable) {
      var foldr22 = foldr(dictFoldable);
      return function(f) {
        return foldr22(function($454) {
          return applySecond2(f($454));
        })(pure6(unit));
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
  var sum = function(dictFoldable) {
    var foldl22 = foldl(dictFoldable);
    return function(dictSemiring) {
      return foldl22(add(dictSemiring))(zero(dictSemiring));
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
      var append4 = append(dictMonoid.Semigroup0());
      var mempty2 = mempty(dictMonoid);
      return function(f) {
        return foldr22(function(x4) {
          return function(acc) {
            return append4(f(x4))(acc);
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
    return function(apply2) {
      return function(map9) {
        return function(pure6) {
          return function(f) {
            return function(array) {
              function go2(bot, top3) {
                switch (top3 - bot) {
                  case 0:
                    return pure6([]);
                  case 1:
                    return map9(array1)(f(array[bot]));
                  case 2:
                    return apply2(map9(array2)(f(array[bot])))(f(array[bot + 1]));
                  case 3:
                    return apply2(apply2(map9(array3)(f(array[bot])))(f(array[bot + 1])))(f(array[bot + 2]));
                  default:
                    var pivot = bot + Math.floor((top3 - bot) / 4) * 2;
                    return apply2(map9(concat2)(go2(bot, pivot)))(go2(pivot, top3));
                }
              }
              return go2(0, array.length);
            };
          };
        };
      };
    };
  }();

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
  var reverse = /* @__PURE__ */ function() {
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
  var uncons = function($copy_v) {
    var $tco_done = false;
    var $tco_result;
    function $tco_loop(v) {
      if (v.value0 instanceof Nil && v.value1 instanceof Nil) {
        $tco_done = true;
        return Nothing.value;
      }
      ;
      if (v.value0 instanceof Nil) {
        $copy_v = new CatQueue(reverse(v.value1), Nil.value);
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
  var snoc = function(v) {
    return function(a) {
      return new CatQueue(v.value0, new Cons(a, v.value1));
    };
  };
  var $$null = function(v) {
    if (v.value0 instanceof Nil && v.value1 instanceof Nil) {
      return true;
    }
    ;
    return false;
  };
  var empty2 = /* @__PURE__ */ function() {
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
        return new CatCons(v.value0, snoc(v.value1)(v1));
      }
      ;
      throw new Error("Failed pattern match at Data.CatList (line 108, column 1 - line 108, column 54): " + [v.constructor.name, v1.constructor.name]);
    };
  };
  var foldr2 = function(k) {
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
              var v = uncons(xs);
              if (v instanceof Nothing) {
                $tco_done1 = true;
                return foldl3(function(x4) {
                  return function(i) {
                    return i(x4);
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
  var uncons2 = function(v) {
    if (v instanceof CatNil) {
      return Nothing.value;
    }
    ;
    if (v instanceof CatCons) {
      return new Just(new Tuple(v.value0, function() {
        var $66 = $$null(v.value1);
        if ($66) {
          return CatNil.value;
        }
        ;
        return foldr2(link)(CatNil.value)(v.value1);
      }()));
    }
    ;
    throw new Error("Failed pattern match at Data.CatList (line 99, column 1 - line 99, column 61): " + [v.constructor.name]);
  };
  var empty3 = /* @__PURE__ */ function() {
    return CatNil.value;
  }();
  var append2 = link;
  var semigroupCatList = {
    append: append2
  };
  var snoc2 = function(cat) {
    return function(a) {
      return append2(cat)(new CatCons(a, empty2));
    };
  };

  // output/Control.Monad.Free/index.js
  var $runtime_lazy2 = function(name15, moduleName, init3) {
    var state3 = 0;
    var val;
    return function(lineNumber) {
      if (state3 === 2)
        return val;
      if (state3 === 1)
        throw new ReferenceError(name15 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state3 = 1;
      val = init3();
      state3 = 2;
      return val;
    };
  };
  var append3 = /* @__PURE__ */ append(semigroupCatList);
  var map3 = /* @__PURE__ */ map(functorFn);
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
        return function(r) {
          return new Free(v22.value0, append3(v22.value1)(r));
        };
      };
      if (v.value0 instanceof Return) {
        var v2 = uncons2(v.value1);
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
    var map12 = map(dictFunctor);
    return function(dictMonadRec) {
      var Monad0 = dictMonadRec.Monad0();
      var map22 = map(Monad0.Bind1().Apply0().Functor0());
      var pure12 = pure(Monad0.Applicative0());
      var tailRecM3 = tailRecM(dictMonadRec);
      return function(k) {
        var go2 = function(f) {
          var v = toView(f);
          if (v instanceof Return) {
            return map22(Done.create)(pure12(v.value0));
          }
          ;
          if (v instanceof Bind) {
            return map22(Loop.create)(k(map12(v.value1)(v.value0)));
          }
          ;
          throw new Error("Failed pattern match at Control.Monad.Free (line 194, column 10 - line 196, column 37): " + [v.constructor.name]);
        };
        return tailRecM3(go2);
      };
    };
  };
  var fromView = function(f) {
    return new Free(f, empty3);
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
        return new Free(v.value0, snoc2(v.value1)(k));
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
  var $lazy_freeApply = /* @__PURE__ */ $runtime_lazy2("freeApply", "Control.Monad.Free", function() {
    return {
      apply: ap(freeMonad),
      Functor0: function() {
        return freeFunctor;
      }
    };
  });
  var bind2 = /* @__PURE__ */ bind(freeBind);
  var pure2 = /* @__PURE__ */ pure(freeApplicative);
  var liftF = function(f) {
    return fromView(new Bind(f, function($192) {
      return pure2($192);
    }));
  };
  var substFree = function(k) {
    var go2 = function(f) {
      var v = toView(f);
      if (v instanceof Return) {
        return pure2(v.value0);
      }
      ;
      if (v instanceof Bind) {
        return bind2(k(v.value0))(map3(go2)(v.value1));
      }
      ;
      throw new Error("Failed pattern match at Control.Monad.Free (line 168, column 10 - line 170, column 33): " + [v.constructor.name]);
    };
    return go2;
  };
  var hoistFree = function(k) {
    return substFree(function($193) {
      return liftF(k($193));
    });
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
  var insert = function(dictOrd) {
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
  var empty4 = /* @__PURE__ */ function() {
    return Leaf.value;
  }();

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
      var count2 = 0;
      return {
        register: function(fiber) {
          var fid = fiberId++;
          fiber.onComplete({
            rethrow: true,
            handler: function(result) {
              return function() {
                count2--;
                delete fibers[fid];
              };
            }
          })();
          fibers[fid] = fiber;
          count2++;
        },
        isEmpty: function() {
          return count2 === 0;
        },
        killAll: function(killError, cb) {
          return function() {
            if (count2 === 0) {
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
            count2 = 0;
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
      var step3 = aff;
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
                step3 = bhead(step3);
                if (btail === null) {
                  bhead = null;
                } else {
                  bhead = btail._1;
                  btail = btail._2;
                }
              } catch (e) {
                status = RETURN;
                fail = util.left(e);
                step3 = null;
              }
              break;
            case STEP_RESULT:
              if (util.isLeft(step3)) {
                status = RETURN;
                fail = step3;
                step3 = null;
              } else if (bhead === null) {
                status = RETURN;
              } else {
                status = STEP_BIND;
                step3 = util.fromRight(step3);
              }
              break;
            case CONTINUE:
              switch (step3.tag) {
                case BIND:
                  if (bhead) {
                    btail = new Aff2(CONS, bhead, btail);
                  }
                  bhead = step3._2;
                  status = CONTINUE;
                  step3 = step3._1;
                  break;
                case PURE:
                  if (bhead === null) {
                    status = RETURN;
                    step3 = util.right(step3._1);
                  } else {
                    status = STEP_BIND;
                    step3 = step3._1;
                  }
                  break;
                case SYNC:
                  status = STEP_RESULT;
                  step3 = runSync(util.left, util.right, step3._1);
                  break;
                case ASYNC:
                  status = PENDING;
                  step3 = runAsync(util.left, step3._1, function(result2) {
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
                        step3 = result2;
                        run3(runTick);
                      });
                    };
                  });
                  return;
                case THROW:
                  status = RETURN;
                  fail = util.left(step3._1);
                  step3 = null;
                  break;
                case CATCH:
                  if (bhead === null) {
                    attempts = new Aff2(CONS, step3, attempts, interrupt);
                  } else {
                    attempts = new Aff2(CONS, step3, new Aff2(CONS, new Aff2(RESUME, bhead, btail), attempts, interrupt), interrupt);
                  }
                  bhead = null;
                  btail = null;
                  status = CONTINUE;
                  step3 = step3._1;
                  break;
                case BRACKET:
                  bracketCount++;
                  if (bhead === null) {
                    attempts = new Aff2(CONS, step3, attempts, interrupt);
                  } else {
                    attempts = new Aff2(CONS, step3, new Aff2(CONS, new Aff2(RESUME, bhead, btail), attempts, interrupt), interrupt);
                  }
                  bhead = null;
                  btail = null;
                  status = CONTINUE;
                  step3 = step3._1;
                  break;
                case FORK:
                  status = STEP_RESULT;
                  tmp = Fiber(util, supervisor, step3._2);
                  if (supervisor) {
                    supervisor.register(tmp);
                  }
                  if (step3._1) {
                    tmp.run();
                  }
                  step3 = util.right(tmp);
                  break;
                case SEQ:
                  status = CONTINUE;
                  step3 = sequential2(util, supervisor, step3._1);
                  break;
              }
              break;
            case RETURN:
              bhead = null;
              btail = null;
              if (attempts === null) {
                status = COMPLETED;
                step3 = interrupt || fail || step3;
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
                      step3 = attempt._2(util.fromLeft(fail));
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
                      step3 = util.fromRight(step3);
                    }
                    break;
                  case BRACKET:
                    bracketCount--;
                    if (fail === null) {
                      result = util.fromRight(step3);
                      attempts = new Aff2(CONS, new Aff2(RELEASE, attempt._2, result), attempts, tmp);
                      if (interrupt === tmp || bracketCount > 0) {
                        status = CONTINUE;
                        step3 = attempt._3(result);
                      }
                    }
                    break;
                  case RELEASE:
                    attempts = new Aff2(CONS, new Aff2(FINALIZED, step3, fail), attempts, interrupt);
                    status = CONTINUE;
                    if (interrupt && interrupt !== tmp && bracketCount === 0) {
                      step3 = attempt._1.killed(util.fromLeft(interrupt))(attempt._2);
                    } else if (fail) {
                      step3 = attempt._1.failed(util.fromLeft(fail))(attempt._2);
                    } else {
                      step3 = attempt._1.completed(util.fromRight(step3))(attempt._2);
                    }
                    fail = null;
                    bracketCount++;
                    break;
                  case FINALIZER:
                    bracketCount++;
                    attempts = new Aff2(CONS, new Aff2(FINALIZED, step3, fail), attempts, interrupt);
                    status = CONTINUE;
                    step3 = attempt._1;
                    break;
                  case FINALIZED:
                    bracketCount--;
                    status = RETURN;
                    step3 = attempt._1;
                    fail = attempt._2;
                    break;
                }
              }
              break;
            case COMPLETED:
              for (var k in joins) {
                if (joins.hasOwnProperty(k)) {
                  rethrow = rethrow && joins[k].rethrow;
                  runEff(joins[k].handler(step3));
                }
              }
              joins = null;
              if (interrupt && fail) {
                setTimeout(function() {
                  throw util.fromLeft(fail);
                }, 0);
              } else if (util.isLeft(step3) && rethrow) {
                setTimeout(function() {
                  if (rethrow) {
                    throw util.fromLeft(step3);
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
            join3.handler(step3)();
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
              step3 = interrupt;
              run3(runTick);
              break;
            case PENDING:
              if (interrupt === null) {
                interrupt = util.left(error2);
              }
              if (bracketCount === 0) {
                if (status === PENDING) {
                  attempts = new Aff2(CONS, new Aff2(FINALIZER, step3(error2)), attempts, interrupt);
                }
                status = RETURN;
                step3 = null;
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
                step3 = null;
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
        var step3 = par2;
        var head4 = null;
        var tail2 = null;
        var count2 = 0;
        var kills2 = {};
        var tmp, kid;
        loop:
          while (true) {
            tmp = null;
            switch (step3.tag) {
              case FORKED:
                if (step3._3 === EMPTY) {
                  tmp = fibers[step3._1];
                  kills2[count2++] = tmp.kill(error2, function(result) {
                    return function() {
                      count2--;
                      if (count2 === 0) {
                        cb2(result)();
                      }
                    };
                  });
                }
                if (head4 === null) {
                  break loop;
                }
                step3 = head4._2;
                if (tail2 === null) {
                  head4 = null;
                } else {
                  head4 = tail2._1;
                  tail2 = tail2._2;
                }
                break;
              case MAP:
                step3 = step3._2;
                break;
              case APPLY:
              case ALT:
                if (head4) {
                  tail2 = new Aff2(CONS, head4, tail2);
                }
                head4 = step3;
                step3 = step3._1;
                break;
            }
          }
        if (count2 === 0) {
          cb2(util.right(void 0))();
        } else {
          kid = 0;
          tmp = count2;
          for (; kid < tmp; kid++) {
            kills2[kid] = kills2[kid]();
          }
        }
        return kills2;
      }
      function join2(result, head4, tail2) {
        var fail, step3, lhs, rhs, tmp, kid;
        if (util.isLeft(result)) {
          fail = result;
          step3 = null;
        } else {
          step3 = result;
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
              cb(fail || step3)();
              return;
            }
            if (head4._3 !== EMPTY) {
              return;
            }
            switch (head4.tag) {
              case MAP:
                if (fail === null) {
                  head4._3 = util.right(head4._1(util.fromRight(step3)));
                  step3 = head4._3;
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
                  step3 = util.right(util.fromRight(lhs)(util.fromRight(rhs)));
                  head4._3 = step3;
                }
                break;
              case ALT:
                lhs = head4._1._3;
                rhs = head4._2._3;
                if (lhs === EMPTY && util.isLeft(rhs) || rhs === EMPTY && util.isLeft(lhs)) {
                  return;
                }
                if (lhs !== EMPTY && util.isLeft(lhs) && rhs !== EMPTY && util.isLeft(rhs)) {
                  fail = step3 === lhs ? rhs : lhs;
                  step3 = null;
                  head4._3 = fail;
                } else {
                  head4._3 = step3;
                  tmp = true;
                  kid = killId++;
                  kills[kid] = kill(early, step3 === lhs ? head4._2 : head4._1, function() {
                    return function() {
                      delete kills[kid];
                      if (tmp) {
                        tmp = false;
                      } else if (tail2 === null) {
                        join2(step3, null, null);
                      } else {
                        join2(step3, tail2._1, tail2._2);
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
        var step3 = par;
        var head4 = null;
        var tail2 = null;
        var tmp, fid;
        loop:
          while (true) {
            tmp = null;
            fid = null;
            switch (status) {
              case CONTINUE:
                switch (step3.tag) {
                  case MAP:
                    if (head4) {
                      tail2 = new Aff2(CONS, head4, tail2);
                    }
                    head4 = new Aff2(MAP, step3._1, EMPTY, EMPTY);
                    step3 = step3._2;
                    break;
                  case APPLY:
                    if (head4) {
                      tail2 = new Aff2(CONS, head4, tail2);
                    }
                    head4 = new Aff2(APPLY, EMPTY, step3._2, EMPTY);
                    step3 = step3._1;
                    break;
                  case ALT:
                    if (head4) {
                      tail2 = new Aff2(CONS, head4, tail2);
                    }
                    head4 = new Aff2(ALT, EMPTY, step3._2, EMPTY);
                    step3 = step3._1;
                    break;
                  default:
                    fid = fiberId++;
                    status = RETURN;
                    tmp = step3;
                    step3 = new Aff2(FORKED, fid, new Aff2(CONS, head4, tail2), EMPTY);
                    tmp = Fiber(util, supervisor, tmp);
                    tmp.onComplete({
                      rethrow: false,
                      handler: resolve(step3)
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
                  head4._1 = step3;
                  status = CONTINUE;
                  step3 = head4._2;
                  head4._2 = EMPTY;
                } else {
                  head4._2 = step3;
                  step3 = head4;
                  if (tail2 === null) {
                    head4 = null;
                  } else {
                    head4 = tail2._1;
                    tail2 = tail2._2;
                  }
                }
            }
          }
        root = step3;
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
        return Aff.Bind(aff, function(value12) {
          return Aff.Pure(f(value12));
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
  var $runtime_lazy3 = function(name15, moduleName, init3) {
    var state3 = 0;
    var val;
    return function(lineNumber) {
      if (state3 === 2)
        return val;
      if (state3 === 1)
        throw new ReferenceError(name15 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state3 = 1;
      val = init3();
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
  var $lazy_applyST = /* @__PURE__ */ $runtime_lazy3("applyST", "Control.Monad.ST.Internal", function() {
    return {
      apply: ap(monadST),
      Functor0: function() {
        return functorST;
      }
    };
  });

  // output/Effect.Aff/index.js
  var $runtime_lazy4 = function(name15, moduleName, init3) {
    var state3 = 0;
    var val;
    return function(lineNumber) {
      if (state3 === 2)
        return val;
      if (state3 === 1)
        throw new ReferenceError(name15 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state3 = 1;
      val = init3();
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
    return function __do2() {
      var fiber = makeFiber(aff)();
      fiber.run();
      return fiber;
    };
  };
  var launchAff_ = function($74) {
    return $$void3(launchAff($74));
  };
  var delay = function(v) {
    return _delay(Right.create, v);
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
  var $lazy_applyAff = /* @__PURE__ */ $runtime_lazy4("applyAff", "Effect.Aff", function() {
    return {
      apply: ap(monadAff),
      Functor0: function() {
        return functorAff;
      }
    };
  });
  var pure22 = /* @__PURE__ */ pure(applicativeAff);
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
            return pure22(res.value0);
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

  // output/Pha.App.Internal/foreign.js
  var TEXT_NODE = 3;
  var compose2 = (f, g2) => f && g2 ? (x4) => f(g2(x4)) : f || g2;
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

  // output/Pha.Html.Core/foreign.js
  var _h = (tag, ps, children2, keyed = false) => {
    const style2 = [];
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
        style2.push(k + ":" + v);
    }
    const style_ = style2.join(";");
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
  var attrImpl = (k, v) => [1, k, v];
  var unsafeOnWithEffectImpl = (k, v) => [2, k, v];
  var class_ = (cls) => [3, cls];
  var styleImpl = (k, v) => [4, k, v];
  var text = createTextVNode;

  // output/Data.Function.Uncurried/foreign.js
  var runFn2 = function(fn) {
    return function(a) {
      return function(b) {
        return fn(a, b);
      };
    };
  };
  var runFn3 = function(fn) {
    return function(a) {
      return function(b) {
        return function(c) {
          return fn(a, b, c);
        };
      };
    };
  };
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

  // output/Web.Event.Event/foreign.js
  function _currentTarget(e) {
    return e.currentTarget;
  }
  function type_(e) {
    return e.type;
  }

  // output/Data.Nullable/foreign.js
  function nullable(a, r, f) {
    return a == null ? r : f(a);
  }

  // output/Data.Nullable/index.js
  var toMaybe = function(n) {
    return nullable(n, Nothing.value, Just.create);
  };

  // output/Web.Event.Event/index.js
  var currentTarget = function($5) {
    return toMaybe(_currentTarget($5));
  };

  // output/Pha.Html.Core/index.js
  var unsafeOnWithEffect = function(name15) {
    return function(handler) {
      return unsafeOnWithEffectImpl(name15, handler);
    };
  };
  var style = function(key) {
    return function(val) {
      return styleImpl(key, val);
    };
  };
  var empty5 = /* @__PURE__ */ text("");
  var elem2 = function(name15) {
    return function(attrs) {
      return function(children2) {
        return elemImpl(name15, attrs, children2);
      };
    };
  };
  var attr = function(key) {
    return function(val) {
      return attrImpl(key, val);
    };
  };

  // output/Control.Monad.State.Trans/index.js
  var functorStateT = function(dictFunctor) {
    var map9 = map(dictFunctor);
    return {
      map: function(f) {
        return function(v) {
          return function(s) {
            return map9(function(v1) {
              return new Tuple(f(v1.value0), v1.value1);
            })(v(s));
          };
        };
      }
    };
  };
  var monadStateT = function(dictMonad) {
    return {
      Applicative0: function() {
        return applicativeStateT(dictMonad);
      },
      Bind1: function() {
        return bindStateT(dictMonad);
      }
    };
  };
  var bindStateT = function(dictMonad) {
    var bind6 = bind(dictMonad.Bind1());
    return {
      bind: function(v) {
        return function(f) {
          return function(s) {
            return bind6(v(s))(function(v1) {
              var v3 = f(v1.value0);
              return v3(v1.value1);
            });
          };
        };
      },
      Apply0: function() {
        return applyStateT(dictMonad);
      }
    };
  };
  var applyStateT = function(dictMonad) {
    var functorStateT1 = functorStateT(dictMonad.Bind1().Apply0().Functor0());
    return {
      apply: ap(monadStateT(dictMonad)),
      Functor0: function() {
        return functorStateT1;
      }
    };
  };
  var applicativeStateT = function(dictMonad) {
    var pure6 = pure(dictMonad.Applicative0());
    return {
      pure: function(a) {
        return function(s) {
          return pure6(new Tuple(a, s));
        };
      },
      Apply0: function() {
        return applyStateT(dictMonad);
      }
    };
  };
  var monadStateStateT = function(dictMonad) {
    var pure6 = pure(dictMonad.Applicative0());
    var monadStateT1 = monadStateT(dictMonad);
    return {
      state: function(f) {
        return function($200) {
          return pure6(f($200));
        };
      },
      Monad0: function() {
        return monadStateT1;
      }
    };
  };

  // output/Effect.Aff.Class/index.js
  var lift4 = /* @__PURE__ */ lift(monadTransReaderT);
  var monadAffAff = {
    liftAff: /* @__PURE__ */ identity(categoryFn),
    MonadEffect0: function() {
      return monadEffectAff;
    }
  };
  var liftAff = function(dict) {
    return dict.liftAff;
  };
  var monadAffReader = function(dictMonadAff) {
    var MonadEffect0 = dictMonadAff.MonadEffect0();
    var monadEffectReader2 = monadEffectReader(MonadEffect0);
    return {
      liftAff: function() {
        var $79 = lift4(MonadEffect0.Monad0());
        var $80 = liftAff(dictMonadAff);
        return function($81) {
          return $79($80($81));
        };
      }(),
      MonadEffect0: function() {
        return monadEffectReader2;
      }
    };
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
  var lmap2 = /* @__PURE__ */ lmap(bifunctorTuple);
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
  var Update = function(x4) {
    return x4;
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
  var monadAskUpdate = function(dictMonadAsk) {
    return {
      ask: liftF(new Lift(ask(dictMonadAsk))),
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
    var map9 = map(dictFunctor);
    return {
      map: function(v) {
        return function(v1) {
          if (v1 instanceof State) {
            return new State(function() {
              var $84 = lmap2(v);
              return function($85) {
                return $84(v1.value0($85));
              };
            }());
          }
          ;
          if (v1 instanceof Lift) {
            return new Lift(map9(v)(v1.value0));
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
  var hoist = function(f) {
    return function(v) {
      return hoistFree(function(v1) {
        if (v1 instanceof State) {
          return new State(v1.value0);
        }
        ;
        if (v1 instanceof Lift) {
          return new Lift(f(v1.value0));
        }
        ;
        if (v1 instanceof Subscribe) {
          return new Subscribe(v1.value0, v1.value1);
        }
        ;
        if (v1 instanceof Unsubscribe) {
          return new Unsubscribe(v1.value0, v1.value1);
        }
        ;
        throw new Error("Failed pattern match at Pha.Update.Internal (line 91, column 45 - line 95, column 38): " + [v1.constructor.name]);
      })(v);
    };
  };

  // output/Web.DOM.Document/foreign.js
  var getEffProp = function(name15) {
    return function(doc) {
      return function() {
        return doc[name15];
      };
    };
  };
  var url = getEffProp("URL");
  var documentURI = getEffProp("documentURI");
  var origin = getEffProp("origin");
  var compatMode = getEffProp("compatMode");
  var characterSet = getEffProp("characterSet");
  var contentType = getEffProp("contentType");
  var _documentElement = getEffProp("documentElement");
  function createTextNode(data) {
    return function(doc) {
      return function() {
        return doc.createTextNode(data);
      };
    };
  }

  // output/Web.DOM.Element/foreign.js
  var getProp = function(name15) {
    return function(doctype) {
      return doctype[name15];
    };
  };
  var _namespaceURI = getProp("namespaceURI");
  var _prefix = getProp("prefix");
  var localName = getProp("localName");
  var tagName = getProp("tagName");

  // output/Web.DOM.ParentNode/foreign.js
  var getEffProp2 = function(name15) {
    return function(node) {
      return function() {
        return node[name15];
      };
    };
  };
  var children = getEffProp2("children");
  var _firstElementChild = getEffProp2("firstElementChild");
  var _lastElementChild = getEffProp2("lastElementChild");
  var childElementCount = getEffProp2("childElementCount");
  function _querySelector(selector) {
    return function(node) {
      return function() {
        return node.querySelector(selector);
      };
    };
  }

  // output/Web.DOM.ParentNode/index.js
  var map4 = /* @__PURE__ */ map(functorEffect);
  var querySelector = function(qs) {
    var $2 = map4(toMaybe);
    var $3 = _querySelector(qs);
    return function($4) {
      return $2($3($4));
    };
  };

  // output/Web.DOM.Element/index.js
  var toNode = unsafeCoerce2;

  // output/Web.DOM.Node/foreign.js
  var getEffProp3 = function(name15) {
    return function(node) {
      return function() {
        return node[name15];
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
  var map5 = /* @__PURE__ */ map(functorEffect);
  var parentNode = /* @__PURE__ */ function() {
    var $6 = map5(toMaybe);
    return function($7) {
      return $6(_parentNode($7));
    };
  }();

  // output/Web.DOM.Text/index.js
  var toNode2 = unsafeCoerce2;

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

  // output/Pha.App/index.js
  var bind3 = /* @__PURE__ */ bind(bindEffect);
  var discard2 = /* @__PURE__ */ discard(discardUnit);
  var for_2 = /* @__PURE__ */ for_(applicativeEffect)(foldableMaybe);
  var unless2 = /* @__PURE__ */ unless(applicativeEffect);
  var bind12 = /* @__PURE__ */ bind(bindAff);
  var liftEffect2 = /* @__PURE__ */ liftEffect(monadEffectAff);
  var discard22 = /* @__PURE__ */ discard2(bindAff);
  var pure1 = /* @__PURE__ */ pure(applicativeAff);
  var insert2 = /* @__PURE__ */ insert(ordSubscriptionId);
  var for_1 = /* @__PURE__ */ for_(applicativeAff)(foldableMaybe);
  var lookup2 = /* @__PURE__ */ lookup(ordSubscriptionId);
  var runFreeM2 = /* @__PURE__ */ runFreeM(/* @__PURE__ */ functorUpdateF(functorAff))(monadRecAff);
  var mapFlipped2 = /* @__PURE__ */ mapFlipped(functorEffect);
  var map6 = /* @__PURE__ */ map(functorEffect);
  var map1 = /* @__PURE__ */ map(functorMaybe);
  var getState = function(v) {
    return read(v.state);
  };
  var getFreshId = function(v) {
    return function __do2() {
      var id2 = read(v.freshId)();
      write(id2 + 1 | 0)(v.freshId)();
      return id2;
    };
  };
  var dispatch = function(v) {
    return v.update(v);
  };
  var dispatchEvent = function(iapp) {
    return function(ev) {
      return function(handler) {
        return function __do2() {
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
          return function __do2() {
            var fn = getAction(target5, v1);
            return dispatchEvent(v)(e)(fn)();
          };
        })();
      };
      return function __do2() {
        var oldVDom = read(v.vdom)();
        var node1 = read(v.node)();
        var pnode = parentNode(node1)();
        return for_2(pnode)(function(pnode$prime) {
          var vdom2 = copyVNode(newVDom);
          return function __do3() {
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
      return function __do2() {
        var oldState = read(v.state)();
        return unless2(unsafeRefEq(oldState)(newState))(function __do3() {
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
            return bind12(liftEffect2(getState(v)))(function(st) {
              var v3 = v2.value0(st);
              return discard22(liftEffect2(setState(v)(v3.value1)))(function() {
                return pure1(v3.value0);
              });
            });
          }
          ;
          if (v2 instanceof Lift) {
            return v2.value0;
          }
          ;
          if (v2 instanceof Subscribe) {
            return bind12(liftEffect2(v2.value0(function(msg) {
              return launchAff_(interpret(update4)(v)(update4(msg)));
            })))(function(canceler) {
              return bind12(liftEffect2(getFreshId(v)))(function(id2) {
                return discard22(liftEffect2(modify_(insert2(id2)(canceler))(v.subscriptions)))(function() {
                  return pure1(v2.value1(id2));
                });
              });
            });
          }
          ;
          if (v2 instanceof Unsubscribe) {
            return bind12(liftEffect2(read(v.subscriptions)))(function(subs) {
              return discard22(for_1(lookup2(v2.value0)(subs))(liftEffect2))(function() {
                return pure1(v2.value1);
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
    return function __do2() {
      var parentNode2 = mapFlipped2(bind3(windowImpl)(document2))(toParentNode)();
      var selected2 = map6(map1(toNode))(querySelector(v.selector)(parentNode2))();
      return for_2(selected2)(function(node_) {
        return function __do3() {
          var state3 = $$new(v.init.model)();
          var emptyNode = mapFlipped2(bind3(mapFlipped2(bind3(windowImpl)(document2))(toDocument))(createTextNode("")))(toNode2)();
          appendChild(emptyNode)(node_)();
          var node = $$new(emptyNode)();
          var vdom = $$new(unsafeLinkNode(emptyNode)(text("")))();
          var subscriptions = $$new(empty4)();
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
  var floor = Math.floor;
  var pow = function(n) {
    return function(p) {
      return Math.pow(n, p);
    };
  };
  var remainder = function(n) {
    return function(m) {
      return n % m;
    };
  };

  // output/Data.Int/index.js
  var top2 = /* @__PURE__ */ top(boundedInt);
  var bottom2 = /* @__PURE__ */ bottom(boundedInt);
  var fromNumber = /* @__PURE__ */ function() {
    return fromNumberImpl(Just.create)(Nothing.value);
  }();
  var unsafeClamp = function(x4) {
    if (!isFiniteImpl(x4)) {
      return 0;
    }
    ;
    if (x4 >= toNumber(top2)) {
      return top2;
    }
    ;
    if (x4 <= toNumber(bottom2)) {
      return bottom2;
    }
    ;
    if (otherwise) {
      return fromMaybe(0)(fromNumber(x4));
    }
    ;
    throw new Error("Failed pattern match at Data.Int (line 72, column 1 - line 72, column 29): " + [x4.constructor.name]);
  };
  var floor2 = function($39) {
    return unsafeClamp(floor($39));
  };

  // output/Effect.Random/foreign.js
  var random = Math.random;

  // output/Effect.Random/index.js
  var randomInt = function(low2) {
    return function(high2) {
      return function __do2() {
        var n = random();
        var asNumber = (toNumber(high2) - toNumber(low2) + 1) * n + toNumber(low2);
        return floor2(asNumber);
      };
    };
  };

  // output/Random.LCG/index.js
  var mod2 = /* @__PURE__ */ mod(euclideanRingInt);
  var fromJust2 = /* @__PURE__ */ fromJust();
  var unSeed = function(v) {
    return v;
  };
  var seedMin = 1;
  var lcgM = 2147483647;
  var seedMax = /* @__PURE__ */ function() {
    return lcgM - 1 | 0;
  }();
  var mkSeed = function(x4) {
    var ensureBetween = function(min5) {
      return function(max6) {
        return function(n) {
          var rangeSize = max6 - min5 | 0;
          var n$prime = mod2(n)(rangeSize);
          var $25 = n$prime < min5;
          if ($25) {
            return n$prime + max6 | 0;
          }
          ;
          return n$prime;
        };
      };
    };
    return ensureBetween(seedMin)(seedMax)(x4);
  };
  var randomSeed = /* @__PURE__ */ map(functorEffect)(mkSeed)(/* @__PURE__ */ randomInt(seedMin)(seedMax));
  var lcgC = 0;
  var lcgA = 48271;
  var lcgPerturb = function(d) {
    return function(v) {
      return fromJust2(fromNumber(remainder(toNumber(lcgA) * toNumber(v) + toNumber(d))(toNumber(lcgM))));
    };
  };
  var lcgNext = /* @__PURE__ */ lcgPerturb(lcgC);

  // output/Data.Array/foreign.js
  var rangeImpl = function(start2, end) {
    var step3 = start2 > end ? -1 : 1;
    var result = new Array(step3 * (end - start2) + 1);
    var i = start2, n = 0;
    while (i !== end) {
      result[n++] = i;
      i += step3;
    }
    result[n] = i;
    return result;
  };
  var replicateFill = function(count2, value12) {
    if (count2 < 1) {
      return [];
    }
    var result = new Array(count2);
    return result.fill(value12);
  };
  var replicatePolyfill = function(count2, value12) {
    var result = [];
    var n = 0;
    for (var i = 0; i < count2; i++) {
      result[n++] = value12;
    }
    return result;
  };
  var replicateImpl = typeof Array.prototype.fill === "function" ? replicateFill : replicatePolyfill;
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
      var count2 = 0;
      var xs = list;
      while (xs !== emptyList) {
        result[count2++] = xs.head;
        xs = xs.tail;
      }
      return result;
    }
    return function(foldr4, xs) {
      return listToArray(foldr4(curryCons)(emptyList)(xs));
    };
  }();
  var length5 = function(xs) {
    return xs.length;
  };
  var unconsImpl = function(empty7, next, xs) {
    return xs.length === 0 ? empty7({}) : next(xs[0])(xs.slice(1));
  };
  var indexImpl = function(just, nothing, xs, i) {
    return i < 0 || i >= xs.length ? nothing : just(xs[i]);
  };
  var filterImpl = function(f, xs) {
    return xs.filter(f);
  };
  var sortByImpl = function() {
    function mergeFromTo(compare2, fromOrdering, xs1, xs2, from2, to2) {
      var mid;
      var i;
      var j;
      var k;
      var x4;
      var y4;
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
        x4 = xs2[i];
        y4 = xs2[j];
        c = fromOrdering(compare2(x4)(y4));
        if (c > 0) {
          xs1[k++] = y4;
          ++j;
        } else {
          xs1[k++] = x4;
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
    return function(compare2, fromOrdering, xs) {
      var out;
      if (xs.length < 2)
        return xs;
      out = xs.slice(0);
      mergeFromTo(compare2, fromOrdering, out, xs.slice(0), 0, xs.length);
      return out;
    };
  }();
  var sliceImpl = function(s, e, l) {
    return l.slice(s, e);
  };
  var zipWithImpl = function(f, xs, ys) {
    var l = xs.length < ys.length ? xs.length : ys.length;
    var result = new Array(l);
    for (var i = 0; i < l; i++) {
      result[i] = f(xs[i])(ys[i]);
    }
    return result;
  };
  var anyImpl = function(p, xs) {
    var len = xs.length;
    for (var i = 0; i < len; i++) {
      if (p(xs[i]))
        return true;
    }
    return false;
  };
  var allImpl = function(p, xs) {
    var len = xs.length;
    for (var i = 0; i < len; i++) {
      if (!p(xs[i]))
        return false;
    }
    return true;
  };

  // output/Data.Array.ST/foreign.js
  var pokeImpl = function(i, a, xs) {
    var ret = i >= 0 && i < xs.length;
    if (ret)
      xs[i] = a;
    return ret;
  };
  var pushAllImpl = function(as, xs) {
    return xs.push.apply(xs, as);
  };
  function unsafeFreezeThawImpl(xs) {
    return xs;
  }
  var unsafeFreezeImpl = unsafeFreezeThawImpl;
  function copyImpl(xs) {
    return xs.slice();
  }
  var thawImpl = copyImpl;
  var sortByImpl2 = function() {
    function mergeFromTo(compare2, fromOrdering, xs1, xs2, from2, to2) {
      var mid;
      var i;
      var j;
      var k;
      var x4;
      var y4;
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
        x4 = xs2[i];
        y4 = xs2[j];
        c = fromOrdering(compare2(x4)(y4));
        if (c > 0) {
          xs1[k++] = y4;
          ++j;
        } else {
          xs1[k++] = x4;
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
    return function(compare2, fromOrdering, xs) {
      if (xs.length < 2)
        return xs;
      mergeFromTo(compare2, fromOrdering, xs, xs.slice(0), 0, xs.length);
      return xs;
    };
  }();

  // output/Control.Monad.ST.Uncurried/foreign.js
  var runSTFn1 = function runSTFn12(fn) {
    return function(a) {
      return function() {
        return fn(a);
      };
    };
  };
  var runSTFn2 = function runSTFn22(fn) {
    return function(a) {
      return function(b) {
        return function() {
          return fn(a, b);
        };
      };
    };
  };
  var runSTFn3 = function runSTFn32(fn) {
    return function(a) {
      return function(b) {
        return function(c) {
          return function() {
            return fn(a, b, c);
          };
        };
      };
    };
  };

  // output/Data.Array.ST/index.js
  var unsafeFreeze = /* @__PURE__ */ runSTFn1(unsafeFreezeImpl);
  var thaw = /* @__PURE__ */ runSTFn1(thawImpl);
  var withArray = function(f) {
    return function(xs) {
      return function __do2() {
        var result = thaw(xs)();
        f(result)();
        return unsafeFreeze(result)();
      };
    };
  };
  var push = function(a) {
    return runSTFn2(pushAllImpl)([a]);
  };
  var poke = /* @__PURE__ */ runSTFn3(pokeImpl);

  // output/Data.Array/index.js
  var traverse_2 = /* @__PURE__ */ traverse_(applicativeST);
  var zipWith = /* @__PURE__ */ runFn3(zipWithImpl);
  var zip = /* @__PURE__ */ function() {
    return zipWith(Tuple.create);
  }();
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
  var tail = /* @__PURE__ */ function() {
    return runFn3(unconsImpl)($$const(Nothing.value))(function(v) {
      return function(xs) {
        return new Just(xs);
      };
    });
  }();
  var snoc3 = function(xs) {
    return function(x4) {
      return withArray(push(x4))(xs)();
    };
  };
  var slice = /* @__PURE__ */ runFn3(sliceImpl);
  var take = function(n) {
    return function(xs) {
      var $152 = n < 1;
      if ($152) {
        return [];
      }
      ;
      return slice(0)(n)(xs);
    };
  };
  var replicate = /* @__PURE__ */ runFn2(replicateImpl);
  var range2 = /* @__PURE__ */ runFn2(rangeImpl);
  var mapWithIndex2 = /* @__PURE__ */ mapWithIndex(functorWithIndexArray);
  var index2 = /* @__PURE__ */ function() {
    return runFn4(indexImpl)(Just.create)(Nothing.value);
  }();
  var last = function(xs) {
    return index2(xs)(length5(xs) - 1 | 0);
  };
  var filter2 = /* @__PURE__ */ runFn2(filterImpl);
  var drop = function(n) {
    return function(xs) {
      var $173 = n < 1;
      if ($173) {
        return xs;
      }
      ;
      return slice(n)(length5(xs))(xs);
    };
  };
  var any2 = /* @__PURE__ */ runFn2(anyImpl);
  var all2 = /* @__PURE__ */ runFn2(allImpl);

  // output/Tictactoe.Config/index.js
  var Rules4 = /* @__PURE__ */ function() {
    function Rules42() {
    }
    ;
    Rules42.value = new Rules42();
    return Rules42;
  }();
  var Rules5 = /* @__PURE__ */ function() {
    function Rules52() {
    }
    ;
    Rules52.value = new Rules52();
    return Rules52;
  }();
  var rules = /* @__PURE__ */ function() {
    return Rules4.value;
  }();

  // output/Control.Monad.State/index.js
  var unwrap2 = /* @__PURE__ */ unwrap();
  var runState = function(v) {
    return function($18) {
      return unwrap2(v($18));
    };
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
    function consList(x4) {
      return function(xs) {
        return new ConsCell(x4, xs);
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
    return function(apply2, map9, f) {
      var buildFrom = function(x4, ys) {
        return apply2(map9(consList)(f(x4)))(ys);
      };
      var go2 = function(acc, currentLen, xs) {
        if (currentLen === 0) {
          return acc;
        } else {
          var last2 = xs[currentLen - 1];
          return new Cont(function() {
            var built = go2(buildFrom(last2, acc), currentLen - 1, xs);
            return built;
          });
        }
      };
      return function(array) {
        var acc = map9(finalCell)(f(array[array.length - 1]));
        var result = go2(acc, array.length - 1, array);
        while (result instanceof Cont) {
          result = result.fn();
        }
        return map9(listToArray)(result);
      };
    };
  }();

  // output/Control.Monad.Gen.Trans/index.js
  var add2 = /* @__PURE__ */ add(semiringNumber);
  var mul2 = /* @__PURE__ */ mul(semiringNumber);
  var functorGenT = function(dictFunctor) {
    return functorStateT(dictFunctor);
  };
  var applyGenT = function(dictMonad) {
    return applyStateT(dictMonad);
  };
  var applicativeGenT = function(dictMonad) {
    return applicativeStateT(dictMonad);
  };
  var runGenT$prime = function(v) {
    return v;
  };
  var runGen = function($309) {
    return runState(runGenT$prime($309));
  };
  var lcgStep = function(dictMonad) {
    var f = function(s) {
      return new Tuple(unSeed(s.newSeed), function() {
        var $297 = {};
        for (var $298 in s) {
          if ({}.hasOwnProperty.call(s, $298)) {
            $297[$298] = s[$298];
          }
          ;
        }
        ;
        $297.newSeed = lcgNext(s.newSeed);
        return $297;
      }());
    };
    return state(monadStateStateT(dictMonad))(f);
  };
  var chooseInt$prime = function(dictMonad) {
    var map22 = map(functorGenT(dictMonad.Bind1().Apply0().Functor0()));
    var lcgStep1 = lcgStep(dictMonad);
    var apply2 = apply(applyGenT(dictMonad));
    return function(a) {
      return function(b) {
        var numB = toNumber(b);
        var numA = toNumber(a);
        var clamp2 = function(x4) {
          return numA + remainder(x4)(numB - numA + 1);
        };
        var choose31BitPosNumber = map22(toNumber)(lcgStep1);
        var choose32BitPosNumber = apply2(map22(add2)(choose31BitPosNumber))(map22(mul2(2))(choose31BitPosNumber));
        return map22(function($320) {
          return floor2(clamp2($320));
        })(choose32BitPosNumber);
      };
    };
  };
  var chooseInt = function(dictMonad) {
    var chooseInt$prime1 = chooseInt$prime(dictMonad);
    return function(a) {
      return function(b) {
        var $300 = a <= b;
        if ($300) {
          return chooseInt$prime1(a)(b);
        }
        ;
        return chooseInt$prime1(b)(a);
      };
    };
  };

  // output/Tictactoe.Helpers/index.js
  var pure3 = /* @__PURE__ */ pure(/* @__PURE__ */ applicativeGenT(monadIdentity));
  var map7 = /* @__PURE__ */ map(/* @__PURE__ */ functorGenT(functorIdentity));
  var chooseInt2 = /* @__PURE__ */ chooseInt(monadIdentity);
  var randomPick = function(v) {
    if (v.length === 0) {
      return pure3(Nothing.value);
    }
    ;
    return map7(function(v1) {
      return index2(v)(v1);
    })(chooseInt2(0)(length5(v) - 1 | 0));
  };
  var pairwise = function(list) {
    return maybe([])(zip(list))(tail(list));
  };
  var count = function(f) {
    var $10 = filter2(f);
    return function($11) {
      return length5($10($11));
    };
  };

  // output/Tictactoe.Model/index.js
  var minimum2 = /* @__PURE__ */ minimum(ordNumber)(foldableArray);
  var maximum2 = /* @__PURE__ */ maximum(ordNumber)(foldableArray);
  var mapFlipped3 = /* @__PURE__ */ mapFlipped(functorArray);
  var sum2 = /* @__PURE__ */ sum(foldableArray)(semiringNumber);
  var updateAtIndices2 = /* @__PURE__ */ updateAtIndices(foldableArray);
  var map8 = /* @__PURE__ */ map(functorArray);
  var Empty2 = /* @__PURE__ */ function() {
    function Empty3() {
    }
    ;
    Empty3.value = new Empty3();
    return Empty3;
  }();
  var X = /* @__PURE__ */ function() {
    function X2() {
    }
    ;
    X2.value = new X2();
    return X2;
  }();
  var O = /* @__PURE__ */ function() {
    function O2() {
    }
    ;
    O2.value = new O2();
    return O2;
  }();
  var eqSymb = {
    eq: function(x4) {
      return function(y4) {
        if (x4 instanceof Empty2 && y4 instanceof Empty2) {
          return true;
        }
        ;
        if (x4 instanceof X && y4 instanceof X) {
          return true;
        }
        ;
        if (x4 instanceof O && y4 instanceof O) {
          return true;
        }
        ;
        return false;
      };
    }
  };
  var eq13 = /* @__PURE__ */ eq(/* @__PURE__ */ eqMaybe(eqSymb));
  var notEq2 = /* @__PURE__ */ notEq(eqSymb);
  var rows5 = [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24], [0, 5, 10, 15, 20], [1, 6, 11, 16, 21], [2, 7, 12, 17, 22], [3, 8, 13, 18, 23], [4, 9, 14, 19, 24], [0, 6, 12, 18, 24], [4, 8, 12, 16, 20]];
  var rows4 = /* @__PURE__ */ append(semigroupArray)(/* @__PURE__ */ bind(bindArray)(rows5)(function(row) {
    return [take(4)(row), drop(1)(row)];
  }))([[1, 7, 13, 19], [3, 7, 11, 15], [5, 11, 17, 23], [9, 13, 17, 21]]);
  var rows6 = /* @__PURE__ */ function() {
    if (rules instanceof Rules4) {
      return rows4;
    }
    ;
    if (rules instanceof Rules5) {
      return rows5;
    }
    ;
    throw new Error("Failed pattern match at Tictactoe.Model (line 38, column 8 - line 40, column 18): " + [rules.constructor.name]);
  }();
  var normalizeTable = function(table) {
    var table$prime = filter2(function(v) {
      return v < 100;
    })(table);
    var min5 = fromMaybe(0)(minimum2(table$prime));
    var max6 = fromMaybe(0)(maximum2(table$prime));
    return mapFlipped3(table)(function(v) {
      var $26 = v === 100;
      if ($26) {
        return -1;
      }
      ;
      var $27 = min5 === max6;
      if ($27) {
        return 1;
      }
      ;
      return (v - min5) / (max6 - min5);
    });
  };
  var init2 = /* @__PURE__ */ function() {
    return {
      grid: replicate(25)(Empty2.value),
      history: [],
      erdosTable: Nothing.value,
      locked: false,
      hasWon: Empty2.value
    };
  }();
  var hasWon = function(who) {
    return function(grid) {
      return any2(function(row) {
        return all2(function(idx) {
          return eq13(index2(grid)(idx))(new Just(who));
        })(row);
      })(rows6);
    };
  };
  var erdos = function(grid) {
    return sum2(mapFlipped3(rows6)(function(row) {
      var $28 = any2(function(i) {
        return eq13(index2(grid)(i))(new Just(X.value));
      })(row);
      if ($28) {
        return 0;
      }
      ;
      return 1 / pow(2)(toNumber(count(function(i) {
        return eq13(index2(grid)(i))(new Just(Empty2.value));
      })(row)));
    }));
  };
  var erdosTable = function(grid) {
    return mapWithIndex2(function(i) {
      return function(symb) {
        var $29 = notEq2(symb)(Empty2.value);
        if ($29) {
          return 100;
        }
        ;
        return erdos(updateAtIndices2([new Tuple(i, X.value)])(grid));
      };
    })(grid);
  };
  var bestMoves = function(table) {
    var min5 = fromMaybe(0)(minimum2(table));
    return map8(fst)(filter2(function(t) {
      return snd(t) === min5;
    })(mapWithIndex2(function(i) {
      return function(s) {
        return new Tuple(i, s);
      };
    })(table)));
  };

  // output/Pha.Update/index.js
  var delay2 = function(dictMonadAff) {
    var $4 = liftAff(monadAffUpdate(dictMonadAff));
    return function($5) {
      return $4(delay($5));
    };
  };

  // output/Tictactoe.Msg/index.js
  var Play = /* @__PURE__ */ function() {
    function Play2(value0) {
      this.value0 = value0;
    }
    ;
    Play2.create = function(value0) {
      return new Play2(value0);
    };
    return Play2;
  }();
  var Reinit = /* @__PURE__ */ function() {
    function Reinit2() {
    }
    ;
    Reinit2.value = new Reinit2();
    return Reinit2;
  }();

  // output/Tictactoe.Update/index.js
  var bind4 = /* @__PURE__ */ bind(bindUpdate);
  var ask2 = /* @__PURE__ */ ask(/* @__PURE__ */ monadAskUpdate(/* @__PURE__ */ monadAskReaderT(monadAff)));
  var liftEffect3 = /* @__PURE__ */ liftEffect(/* @__PURE__ */ monadEffectUpdate(/* @__PURE__ */ monadEffectReader(monadEffectAff)));
  var discard3 = /* @__PURE__ */ discard(discardUnit)(bindUpdate);
  var pure4 = /* @__PURE__ */ pure(applicativeUpdate);
  var get2 = /* @__PURE__ */ get(monadStateUpdate);
  var notEq3 = /* @__PURE__ */ notEq(/* @__PURE__ */ eqMaybe(eqSymb));
  var notEq1 = /* @__PURE__ */ notEq(eqSymb);
  var updateAtIndices3 = /* @__PURE__ */ updateAtIndices(foldableArray);
  var put2 = /* @__PURE__ */ put(monadStateUpdate);
  var delay3 = /* @__PURE__ */ delay2(/* @__PURE__ */ monadAffReader(monadAffAff));
  var modify_3 = /* @__PURE__ */ modify_2(monadStateUpdate);
  var evalGen = function(g2) {
    return bind4(ask2)(function(v) {
      return bind4(liftEffect3(read(v.genState)))(function(st) {
        var v1 = runGen(g2)(st);
        return discard3(liftEffect3(write(v1.value1)(v.genState)))(function() {
          return pure4(v1.value0);
        });
      });
    });
  };
  var update = function(v) {
    if (v instanceof Play) {
      return bind4(get2)(function(model) {
        var $34 = model.locked || (notEq3(index2(model.grid)(v.value0))(new Just(Empty2.value)) || notEq1(model.hasWon)(Empty2.value));
        if ($34) {
          return pure4(unit);
        }
        ;
        var grid = updateAtIndices3([new Tuple(v.value0, O.value)])(model.grid);
        var erdosT = erdosTable(grid);
        var model$prime = function() {
          var $35 = {};
          for (var $36 in model) {
            if ({}.hasOwnProperty.call(model, $36)) {
              $35[$36] = model[$36];
            }
            ;
          }
          ;
          $35.grid = grid;
          $35.erdosTable = new Just(normalizeTable(erdosT));
          $35.history = snoc3(model.history)({
            square: v.value0,
            symbol: X.value,
            erdos: erdos(grid)
          });
          return $35;
        }();
        var $38 = all2(function(s) {
          return notEq1(s)(Empty2.value);
        })(grid);
        if ($38) {
          return put2(model$prime);
        }
        ;
        var $39 = hasWon(O.value)(grid);
        if ($39) {
          return put2(function() {
            var $40 = {};
            for (var $41 in model$prime) {
              if ({}.hasOwnProperty.call(model$prime, $41)) {
                $40[$41] = model$prime[$41];
              }
              ;
            }
            ;
            $40.hasWon = O.value;
            return $40;
          }());
        }
        ;
        return discard3(put2(function() {
          var $43 = {};
          for (var $44 in model$prime) {
            if ({}.hasOwnProperty.call(model$prime, $44)) {
              $43[$44] = model$prime[$44];
            }
            ;
          }
          ;
          $43.locked = true;
          return $43;
        }()))(function() {
          return discard3(delay3(2e3))(function() {
            return bind4(evalGen(randomPick(bestMoves(erdosT))))(function(mj) {
              if (mj instanceof Nothing) {
                return pure4(unit);
              }
              ;
              if (mj instanceof Just) {
                var grid$prime = updateAtIndices3([new Tuple(mj.value0, X.value)])(grid);
                var model$prime$prime = function() {
                  var $47 = {};
                  for (var $48 in model$prime) {
                    if ({}.hasOwnProperty.call(model$prime, $48)) {
                      $47[$48] = model$prime[$48];
                    }
                    ;
                  }
                  ;
                  $47.grid = grid$prime;
                  $47.erdosTable = Nothing.value;
                  $47.locked = false;
                  $47.history = snoc3(model$prime.history)({
                    square: mj.value0,
                    symbol: O.value,
                    erdos: erdos(grid$prime)
                  });
                  return $47;
                }();
                var $50 = hasWon(X.value)(grid$prime);
                if ($50) {
                  return put2(function() {
                    var $51 = {};
                    for (var $52 in model$prime$prime) {
                      if ({}.hasOwnProperty.call(model$prime$prime, $52)) {
                        $51[$52] = model$prime$prime[$52];
                      }
                      ;
                    }
                    ;
                    $51.hasWon = X.value;
                    return $51;
                  }());
                }
                ;
                return put2(model$prime$prime);
              }
              ;
              throw new Error("Failed pattern match at Tictactoe.Update (line 45, column 7 - line 57, column 24): " + [mj.constructor.name]);
            });
          });
        });
      });
    }
    ;
    if (v instanceof Reinit) {
      return modify_3(function(model) {
        if (model.locked) {
          return model;
        }
        ;
        return init2;
      });
    }
    ;
    throw new Error("Failed pattern match at Tictactoe.Update (line 25, column 1 - line 25, column 38): " + [v.constructor.name]);
  };

  // output/Pha.Html.Elements/index.js
  var span3 = /* @__PURE__ */ elem2("span");
  var div2 = /* @__PURE__ */ elem2("div");
  var button = /* @__PURE__ */ elem2("button");

  // output/Pha.Html.Events/index.js
  var pure5 = /* @__PURE__ */ pure(applicativeEffect);
  var on2 = unsafeOnWithEffect;
  var mouseCoerce = unsafeCoerce2;
  var onClick = function(handler) {
    return on2("click")(function($29) {
      return pure5(Just.create(handler(mouseCoerce($29))));
    });
  };

  // output/Pha.Svg/index.js
  var text6 = /* @__PURE__ */ elem2("text");
  var svg = /* @__PURE__ */ elem2("svg");
  var rect = function(props) {
    return elem2("rect")(props)([]);
  };
  var line = function(props) {
    return elem2("line")(props)([]);
  };
  var g = /* @__PURE__ */ elem2("g");

  // output/Pha.Svg.Attributes/index.js
  var show2 = /* @__PURE__ */ show(showNumber);
  var isLengthNumber = {
    toString: show2
  };
  var isLengthInt = {
    toString: /* @__PURE__ */ show(showInt)
  };
  var viewBox = function(a) {
    return function(b) {
      return function(c) {
        return function(d2) {
          return attr("viewBox")(show2(a) + (" " + (show2(b) + (" " + (show2(c) + (" " + show2(d2)))))));
        };
      };
    };
  };
  var toString = function(dict) {
    return dict.toString;
  };
  var width8 = function(dictIsLength) {
    var toString1 = toString(dictIsLength);
    return function(i) {
      return attr("width")(toString1(i));
    };
  };
  var x = function(dictIsLength) {
    var $41 = attr("x");
    var $42 = toString(dictIsLength);
    return function($43) {
      return $41($42($43));
    };
  };
  var x1 = function(dictIsLength) {
    var $44 = attr("x1");
    var $45 = toString(dictIsLength);
    return function($46) {
      return $44($45($46));
    };
  };
  var x2 = function(dictIsLength) {
    var $47 = attr("x2");
    var $48 = toString(dictIsLength);
    return function($49) {
      return $47($48($49));
    };
  };
  var y = function(dictIsLength) {
    var $50 = attr("y");
    var $51 = toString(dictIsLength);
    return function($52) {
      return $50($51($52));
    };
  };
  var y1 = function(dictIsLength) {
    var $53 = attr("y1");
    var $54 = toString(dictIsLength);
    return function($55) {
      return $53($54($55));
    };
  };
  var y2 = function(dictIsLength) {
    var $56 = attr("y2");
    var $57 = toString(dictIsLength);
    return function($58) {
      return $56($57($58));
    };
  };
  var strokeWidth = /* @__PURE__ */ function() {
    var $59 = attr("stroke-width");
    return function($60) {
      return $59(show2($60));
    };
  }();
  var stroke = /* @__PURE__ */ attr("stroke");
  var height8 = function(dictIsLength) {
    var toString1 = toString(dictIsLength);
    return function(i) {
      return attr("height")(toString1(i));
    };
  };
  var fontSize = function(dictIsLength) {
    var $74 = attr("font-size");
    var $75 = toString(dictIsLength);
    return function($76) {
      return $74($75($76));
    };
  };

  // output/Foreign.Object/foreign.js
  function toArrayWithKey(f) {
    return function(m) {
      var r = [];
      for (var k in m) {
        if (hasOwnProperty.call(m, k)) {
          r.push(f(k)(m[k]));
        }
      }
      return r;
    };
  }
  var keys2 = Object.keys || toArrayWithKey(function(k) {
    return function() {
      return k;
    };
  });

  // output/Relude/index.js
  var range3 = function(n) {
    return function(m) {
      var $1 = n > m;
      if ($1) {
        return [];
      }
      ;
      return range2(n)(m);
    };
  };

  // output/Tictactoe.View/index.js
  var div3 = /* @__PURE__ */ div(euclideanRingInt);
  var bind5 = /* @__PURE__ */ bind(bindMaybe);
  var mod3 = /* @__PURE__ */ mod(euclideanRingInt);
  var show3 = /* @__PURE__ */ show(showNumber);
  var x3 = /* @__PURE__ */ x(isLengthInt);
  var y3 = /* @__PURE__ */ y(isLengthInt);
  var fontSize2 = /* @__PURE__ */ fontSize(isLengthInt);
  var x12 = /* @__PURE__ */ x1(isLengthInt);
  var x22 = /* @__PURE__ */ x2(isLengthInt);
  var y12 = /* @__PURE__ */ y1(isLengthInt);
  var y22 = /* @__PURE__ */ y2(isLengthInt);
  var mapFlipped4 = /* @__PURE__ */ mapFlipped(functorArray);
  var show1 = /* @__PURE__ */ show(showInt);
  var y32 = /* @__PURE__ */ y(isLengthNumber);
  var width9 = /* @__PURE__ */ width8(isLengthInt);
  var height9 = /* @__PURE__ */ height8(isLengthInt);
  var x11 = /* @__PURE__ */ x1(isLengthNumber);
  var x21 = /* @__PURE__ */ x2(isLengthNumber);
  var y11 = /* @__PURE__ */ y1(isLengthNumber);
  var y21 = /* @__PURE__ */ y2(isLengthNumber);
  var append1 = /* @__PURE__ */ append(semigroupArray);
  var eq22 = /* @__PURE__ */ eq(eqSymb);
  var viewGrid = function(v) {
    return div2([class_("relative shadow-md shadow-slate-200 m-4 select-none"), style("width")("300px"), style("height")("300px")])(mapWithIndex2(function(i) {
      return function(symb) {
        var row = div3(i)(5);
        var erdos2 = fromMaybe(-1)(bind5(v.erdosTable)(function(v1) {
          return index2(v1)(i);
        }));
        var col = mod3(i)(5);
        return div2([class_("absolute cursor-pointer flex items-center justify-center shadow text-4xl"), style("height")("20%"), style("width")("20%"), style("left")(show3(toNumber(col) * 20) + "%"), style("top")(show3(toNumber(row) * 20) + "%"), style("background-color")(function() {
          var $39 = erdos2 === -1;
          if ($39) {
            return "white";
          }
          ;
          return "rgb(255," + (show3(255 * erdos2) + ",0)");
        }()), onClick(function(v1) {
          return new Play(i);
        })])([function() {
          if (symb instanceof X) {
            return span3([style("color")("rgb(208,0,208)")])([text("X")]);
          }
          ;
          if (symb instanceof O) {
            return span3([style("color")("rgb(0,199,199)")])([text("O")]);
          }
          ;
          if (symb instanceof Empty2) {
            return empty5;
          }
          ;
          throw new Error("Failed pattern match at Tictactoe.View (line 47, column 11 - line 50, column 29): " + [symb.constructor.name]);
        }()]);
      };
    })(v.grid));
  };
  var viewErdos = function(history2) {
    return div2([class_("relative shadow-md shadow-slate-200 m-4 select-none"), style("width")("450px"), style("height")("320px")])([svg([viewBox(-15)(-30)(340)(235)])([text6([x3(-15 | 0), y3(-15 | 0), stroke("black"), fontSize2(12)])([text("Danger")]), line([x12(0), x22(0), y12(0), y22(200), stroke("black")]), g([])(mapFlipped4(range3(0)(10))(function(i) {
      return line([x12(-3 | 0), x22(3), y12(i * 20 | 0), y22(i * 20 | 0), stroke("black")]);
    })), g([])(mapFlipped4(range3(0)(10))(function(i) {
      return text6([x3(-15 | 0), y3(i * 20 | 0), stroke("black"), fontSize2(10)])([text(function() {
        var $43 = i === 0;
        if ($43) {
          return "1.0";
        }
        ;
        return "0." + show1(10 - i | 0);
      }())]);
    })), line([x12(0), x22(300), y12(200), y22(200), stroke("black")]), g([])(mapFlipped4(range3(0)(25))(function(i) {
      return line([y12(197), y22(203), x12(i * 10 | 0), x22(i * 10 | 0), stroke("black")]);
    })), g([])(mapWithIndex2(function(i) {
      return function(erdos2) {
        return rect([x3((10 * (i + 1 | 0) | 0) - 2 | 0), y32(198 - 300 * erdos2), width9(4), height9(4)]);
      };
    })(history2)), g([])(mapWithIndex2(function(i) {
      return function(v) {
        return line([x11(10 * toNumber(i + 1 | 0)), x21(10 * toNumber(i + 2 | 0)), y11(200 - 300 * v.value0), y21(200 - 300 * v.value1), strokeWidth(2), stroke("blue")]);
      };
    })(pairwise(history2)))])]);
  };
  var cardClass = "rounded overflow-hidden shadow-lg p-4";
  var card = function(title2) {
    return function(body) {
      return div2([class_(cardClass)])(append1([div2([class_("font-bold text-xl mb-2")])([text(title2)])])(body));
    };
  };
  var buttonClass = "py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200";
  var view2 = function(model) {
    return div2([style("height")("400px"), style("width")("850px")])([card("Tic-Tac-Toe")([div2([class_("flex flex-row")])([div2([])([viewGrid(model), button([class_(buttonClass), onClick(function(v) {
      return Reinit.value;
    })])([text("Recommencer")])]), div2([])([viewErdos(mapFlipped4(model.history)(function(v) {
      return v.erdos;
    })), function() {
      var $47 = eq22(model.hasWon)(O.value);
      if ($47) {
        return span3([])([text("Le premier joueur a gagn\xE9")]);
      }
      ;
      var $48 = eq22(model.hasWon)(X.value);
      if ($48) {
        return span3([])([text("Le second joueur a gagn\xE9")]);
      }
      ;
      var $49 = maybe(false)(function(e) {
        return e.erdos === 0;
      })(last(model.history));
      if ($49) {
        return span3([])([text("Le premier joueur ne peut plus gagner")]);
      }
      ;
      return empty5;
    }()])])])]);
  };

  // output/Tictactoe.Main/index.js
  var main = function __do() {
    var newSeed = randomSeed();
    var genState = $$new({
      newSeed,
      size: 0
    })();
    return app({
      init: {
        model: init2,
        msg: Nothing.value
      },
      view: view2,
      update: function() {
        var $2 = hoist(flip(runReaderT)({
          genState
        }));
        return function($3) {
          return $2(update($3));
        };
      }(),
      selector: "#root"
    })();
  };

  // <stdin>
  main();
})();
