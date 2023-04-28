(() => {
  // output/Control.Semigroupoid/index.js
  var semigroupoidFn = {
    compose: function(f) {
      return function(g2) {
        return function(x3) {
          return f(g2(x3));
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
    identity: function(x3) {
      return x3;
    },
    Semigroupoid0: function() {
      return semigroupoidFn;
    }
  };

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
    var map13 = map(dictFunctor);
    return function(fa) {
      return function(f) {
        return map13(f)(fa);
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

  // output/Data.Symbol/index.js
  var reflectSymbol = function(dict) {
    return dict.reflectSymbol;
  };

  // output/Record.Unsafe/foreign.js
  var unsafeGet = function(label5) {
    return function(rec) {
      return rec[label5];
    };
  };
  var unsafeSet = function(label5) {
    return function(value13) {
      return function(rec) {
        var copy = {};
        for (var key in rec) {
          if ({}.hasOwnProperty.call(rec, key)) {
            copy[key] = rec[key];
          }
        }
        copy[label5] = value13;
        return copy;
      };
    };
  };

  // output/Data.Semigroup/index.js
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
    var pure1 = pure(dictApplicative);
    return function(v) {
      return function(v1) {
        if (!v) {
          return v1;
        }
        ;
        if (v) {
          return pure1(unit);
        }
        ;
        throw new Error("Failed pattern match at Control.Applicative (line 68, column 1 - line 68, column 65): " + [v.constructor.name, v1.constructor.name]);
      };
    };
  };
  var liftA1 = function(dictApplicative) {
    var apply2 = apply(dictApplicative.Apply0());
    var pure1 = pure(dictApplicative);
    return function(f) {
      return function(a) {
        return apply2(pure1(f))(a);
      };
    };
  };
  var applicativeArray = {
    pure: function(x3) {
      return [x3];
    },
    Apply0: function() {
      return applyArray;
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
        return function(x3) {
          return function(y3) {
            return x3 < y3 ? lt : x3 === y3 ? eq3 : gt;
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
  var eqIntImpl = refEq;
  var eqNumberImpl = refEq;

  // output/Data.Eq/index.js
  var eqNumber = {
    eq: eqNumberImpl
  };
  var eqInt = {
    eq: eqIntImpl
  };
  var eq = function(dict) {
    return dict.eq;
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
  var intSub = function(x3) {
    return function(y3) {
      return x3 - y3 | 0;
    };
  };

  // output/Data.Semiring/foreign.js
  var intAdd = function(x3) {
    return function(y3) {
      return x3 + y3 | 0;
    };
  };
  var intMul = function(x3) {
    return function(y3) {
      return x3 * y3 | 0;
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
  var comparing = function(dictOrd) {
    var compare3 = compare(dictOrd);
    return function(f) {
      return function(x3) {
        return function(y3) {
          return compare3(f(x3))(f(y3));
        };
      };
    };
  };
  var max = function(dictOrd) {
    var compare3 = compare(dictOrd);
    return function(x3) {
      return function(y3) {
        var v = compare3(x3)(y3);
        if (v instanceof LT) {
          return y3;
        }
        ;
        if (v instanceof EQ) {
          return x3;
        }
        ;
        if (v instanceof GT) {
          return x3;
        }
        ;
        throw new Error("Failed pattern match at Data.Ord (line 181, column 3 - line 184, column 12): " + [v.constructor.name]);
      };
    };
  };
  var min = function(dictOrd) {
    var compare3 = compare(dictOrd);
    return function(x3) {
      return function(y3) {
        var v = compare3(x3)(y3);
        if (v instanceof LT) {
          return x3;
        }
        ;
        if (v instanceof EQ) {
          return x3;
        }
        ;
        if (v instanceof GT) {
          return y3;
        }
        ;
        throw new Error("Failed pattern match at Data.Ord (line 172, column 3 - line 175, column 12): " + [v.constructor.name]);
      };
    };
  };
  var clamp = function(dictOrd) {
    var min1 = min(dictOrd);
    var max1 = max(dictOrd);
    return function(low2) {
      return function(hi) {
        return function(x3) {
          return min1(hi)(max1(low2)(x3));
        };
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
    var eq3 = eq(dictEq);
    return {
      eq: function(x3) {
        return function(y3) {
          if (x3 instanceof Nothing && y3 instanceof Nothing) {
            return true;
          }
          ;
          if (x3 instanceof Just && y3 instanceof Just) {
            return eq3(x3.value0)(y3.value0);
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
    function Aff2(tag, _1, _2, _3) {
      this.tag = tag;
      this._1 = _1;
      this._2 = _2;
      this._3 = _3;
    }
    function AffCtr(tag) {
      var fn = function(_1, _2, _3) {
        return new Aff2(tag, _1, _2, _3);
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
      var ix3 = 0;
      var queue = new Array(limit);
      var draining = false;
      function drain() {
        var thunk;
        draining = true;
        while (size5 !== 0) {
          size5--;
          thunk = queue[ix3];
          queue[ix3] = void 0;
          ix3 = (ix3 + 1) % limit;
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
          queue[(ix3 + size5) % limit] = cb;
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
        var head3 = null;
        var tail2 = null;
        var count2 = 0;
        var kills2 = {};
        var tmp, kid;
        loop:
          while (true) {
            tmp = null;
            switch (step4.tag) {
              case FORKED:
                if (step4._3 === EMPTY) {
                  tmp = fibers[step4._1];
                  kills2[count2++] = tmp.kill(error2, function(result) {
                    return function() {
                      count2--;
                      if (count2 === 0) {
                        cb2(result)();
                      }
                    };
                  });
                }
                if (head3 === null) {
                  break loop;
                }
                step4 = head3._2;
                if (tail2 === null) {
                  head3 = null;
                } else {
                  head3 = tail2._1;
                  tail2 = tail2._2;
                }
                break;
              case MAP:
                step4 = step4._2;
                break;
              case APPLY:
              case ALT:
                if (head3) {
                  tail2 = new Aff2(CONS, head3, tail2);
                }
                head3 = step4;
                step4 = step4._1;
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
      function join2(result, head3, tail2) {
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
            if (head3 === null) {
              cb(fail || step4)();
              return;
            }
            if (head3._3 !== EMPTY) {
              return;
            }
            switch (head3.tag) {
              case MAP:
                if (fail === null) {
                  head3._3 = util.right(head3._1(util.fromRight(step4)));
                  step4 = head3._3;
                } else {
                  head3._3 = fail;
                }
                break;
              case APPLY:
                lhs = head3._1._3;
                rhs = head3._2._3;
                if (fail) {
                  head3._3 = fail;
                  tmp = true;
                  kid = killId++;
                  kills[kid] = kill(early, fail === lhs ? head3._2 : head3._1, function() {
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
                  head3._3 = step4;
                }
                break;
              case ALT:
                lhs = head3._1._3;
                rhs = head3._2._3;
                if (lhs === EMPTY && util.isLeft(rhs) || rhs === EMPTY && util.isLeft(lhs)) {
                  return;
                }
                if (lhs !== EMPTY && util.isLeft(lhs) && rhs !== EMPTY && util.isLeft(rhs)) {
                  fail = step4 === lhs ? rhs : lhs;
                  step4 = null;
                  head3._3 = fail;
                } else {
                  head3._3 = step4;
                  tmp = true;
                  kid = killId++;
                  kills[kid] = kill(early, step4 === lhs ? head3._2 : head3._1, function() {
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
              head3 = null;
            } else {
              head3 = tail2._1;
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
        var head3 = null;
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
                    if (head3) {
                      tail2 = new Aff2(CONS, head3, tail2);
                    }
                    head3 = new Aff2(MAP, step4._1, EMPTY, EMPTY);
                    step4 = step4._2;
                    break;
                  case APPLY:
                    if (head3) {
                      tail2 = new Aff2(CONS, head3, tail2);
                    }
                    head3 = new Aff2(APPLY, EMPTY, step4._2, EMPTY);
                    step4 = step4._1;
                    break;
                  case ALT:
                    if (head3) {
                      tail2 = new Aff2(CONS, head3, tail2);
                    }
                    head3 = new Aff2(ALT, EMPTY, step4._2, EMPTY);
                    step4 = step4._1;
                    break;
                  default:
                    fid = fiberId++;
                    status = RETURN;
                    tmp = step4;
                    step4 = new Aff2(FORKED, fid, new Aff2(CONS, head3, tail2), EMPTY);
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
                if (head3 === null) {
                  break loop;
                }
                if (head3._1 === EMPTY) {
                  head3._1 = step4;
                  status = CONTINUE;
                  step4 = head3._2;
                  head3._2 = EMPTY;
                } else {
                  head3._2 = step4;
                  step4 = head3;
                  if (tail2 === null) {
                    head3 = null;
                  } else {
                    head3 = tail2._1;
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

  // output/Control.Monad/index.js
  var ap = function(dictMonad) {
    var bind7 = bind(dictMonad.Bind1());
    var pure8 = pure(dictMonad.Applicative0());
    return function(f) {
      return function(a) {
        return bind7(f)(function(f$prime) {
          return bind7(a)(function(a$prime) {
            return pure8(f$prime(a$prime));
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

  // output/Data.EuclideanRing/foreign.js
  var intDegree = function(x3) {
    return Math.min(Math.abs(x3), 2147483647);
  };
  var intDiv = function(x3) {
    return function(y3) {
      if (y3 === 0)
        return 0;
      return y3 > 0 ? Math.floor(x3 / y3) : -Math.floor(x3 / -y3);
    };
  };
  var intMod = function(x3) {
    return function(y3) {
      if (y3 === 0)
        return 0;
      var yy = Math.abs(y3);
      return (x3 % yy + yy) % yy;
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
  var write = function(val) {
    return function(ref) {
      return function() {
        ref.value = val;
      };
    };
  };

  // output/Effect.Ref/index.js
  var $$new = _new;

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

  // output/Unsafe.Coerce/foreign.js
  var unsafeCoerce2 = function(x3) {
    return x3;
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
  function forST(lo) {
    return function(hi) {
      return function(f) {
        return function() {
          for (var i = lo; i < hi; i++) {
            f(i)();
          }
        };
      };
    };
  }

  // output/Control.Monad.ST.Internal/index.js
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

  // output/Data.HeytingAlgebra/foreign.js
  var boolConj = function(b1) {
    return function(b2) {
      return b1 && b2;
    };
  };
  var boolDisj = function(b1) {
    return function(b2) {
      return b1 || b2;
    };
  };
  var boolNot = function(b) {
    return !b;
  };

  // output/Data.HeytingAlgebra/index.js
  var not = function(dict) {
    return dict.not;
  };
  var disj = function(dict) {
    return dict.disj;
  };
  var heytingAlgebraBoolean = {
    ff: false,
    tt: true,
    implies: function(a) {
      return function(b) {
        return disj(heytingAlgebraBoolean)(not(heytingAlgebraBoolean)(a))(b);
      };
    },
    conj: boolConj,
    disj: boolDisj,
    not: boolNot
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
  var modify_ = function(dictMonadState) {
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

  // output/Effect.Class/index.js
  var liftEffect = function(dict) {
    return dict.liftEffect;
  };

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
    var pure8 = pure(dictApplicative);
    return function(dictFoldable) {
      var foldr22 = foldr(dictFoldable);
      return function(f) {
        return foldr22(function($454) {
          return applySecond2(f($454));
        })(pure8(unit));
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
        return foldr22(function(x3) {
          return function(acc) {
            return append4(f(x3))(acc);
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
        return function(pure8) {
          return function(f) {
            return function(array) {
              function go2(bot, top3) {
                switch (top3 - bot) {
                  case 0:
                    return pure8([]);
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

  // output/Effect.Aff/index.js
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
  var $$void2 = /* @__PURE__ */ $$void(functorEffect);
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
    return $$void2(launchAff($74));
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

  // output/Neuron.Model/foreign.js
  var step = 1e-4;
  var coef = 0.7;
  var dercost = (x3, b) => b ? -coef * Math.exp(-coef * x3) : coef * Math.exp(coef * x3);
  var runStepImpl = (mask2) => ({ patterns, inputs }) => (st) => {
    const { iter, hiddenThresholds, hiddenWeights, finalThresholds, finalWeights, output } = st;
    const finalThresholds2 = [...finalThresholds];
    const finalWeights2 = finalWeights.map((x3) => [...x3]);
    const hiddenThresholds2 = [...hiddenThresholds];
    const hiddenWeights2 = hiddenWeights.map((x3) => [...x3]);
    for (let n = 0; n < 24; n++) {
      const { selected: selected2, symbol } = patterns[n];
      if (selected2) {
        const { final, hidden: hidden2 } = output[n];
        const input2 = inputs[n];
        for (let i = 0; i < 4; i++)
          finalThresholds2[i] += 10 * step * dercost(final[i], i == symbol);
        for (let i = 0; i < 4; i++)
          for (let j = 0; j < 6; j++)
            finalWeights2[i][j] -= step * dercost(final[i], symbol == i) * hidden2[j];
        for (let k = 0; k < 6; k++)
          if (hidden2[k] > 0)
            for (let j = 0; j < 4; j++)
              hiddenThresholds2[k] += step * dercost(final[j], symbol == j) * hiddenWeights[j][k];
        for (let k = 0; k < 6; k++)
          if (hidden2[k] > 0) {
            for (let i = 0; i < 6; i++)
              if (mask2[k][i])
                for (let j = 0; j < 4; j++)
                  hiddenWeights2[k][i] -= step * dercost(final[j], symbol == j) * finalWeights[j][k] * input2[i];
          }
      }
    }
    return {
      ...st,
      iter: iter + 1,
      finalThresholds: finalThresholds2,
      finalWeights: finalWeights2,
      hiddenThresholds: hiddenThresholds2,
      hiddenWeights: hiddenWeights2
    };
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
  var replicateFill = function(count2) {
    return function(value13) {
      if (count2 < 1) {
        return [];
      }
      var result = new Array(count2);
      return result.fill(value13);
    };
  };
  var replicatePolyfill = function(count2) {
    return function(value13) {
      var result = [];
      var n = 0;
      for (var i = 0; i < count2; i++) {
        result[n++] = value13;
      }
      return result;
    };
  };
  var replicate = typeof Array.prototype.fill === "function" ? replicateFill : replicatePolyfill;
  var fromFoldableImpl = function() {
    function Cons3(head3, tail2) {
      this.head = head3;
      this.tail = tail2;
    }
    var emptyList = {};
    function curryCons(head3) {
      return function(tail2) {
        return new Cons3(head3, tail2);
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
    return function(foldr3) {
      return function(xs) {
        return listToArray(foldr3(curryCons)(emptyList)(xs));
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
  var concat = function(xss) {
    if (xss.length <= 1e4) {
      return Array.prototype.concat.apply([], xss);
    }
    var result = [];
    for (var i = 0, l = xss.length; i < l; i++) {
      var xs = xss[i];
      for (var j = 0, m = xs.length; j < m; j++) {
        result.push(xs[j]);
      }
    }
    return result;
  };
  var filter = function(f) {
    return function(xs) {
      return xs.filter(f);
    };
  };
  var sortByImpl = function() {
    function mergeFromTo(compare2, fromOrdering, xs1, xs2, from2, to) {
      var mid;
      var i;
      var j;
      var k;
      var x3;
      var y3;
      var c;
      mid = from2 + (to - from2 >> 1);
      if (mid - from2 > 1)
        mergeFromTo(compare2, fromOrdering, xs2, xs1, from2, mid);
      if (to - mid > 1)
        mergeFromTo(compare2, fromOrdering, xs2, xs1, mid, to);
      i = from2;
      j = mid;
      k = from2;
      while (i < mid && j < to) {
        x3 = xs2[i];
        y3 = xs2[j];
        c = fromOrdering(compare2(x3)(y3));
        if (c > 0) {
          xs1[k++] = y3;
          ++j;
        } else {
          xs1[k++] = x3;
          ++i;
        }
      }
      while (i < mid) {
        xs1[k++] = xs2[i++];
      }
      while (j < to) {
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
  var unsafeIndexImpl = function(xs) {
    return function(n) {
      return xs[n];
    };
  };

  // output/Data.Array.ST/foreign.js
  function newSTArray() {
    return [];
  }
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
    function mergeFromTo(compare2, fromOrdering, xs1, xs2, from2, to) {
      var mid;
      var i;
      var j;
      var k;
      var x3;
      var y3;
      var c;
      mid = from2 + (to - from2 >> 1);
      if (mid - from2 > 1)
        mergeFromTo(compare2, fromOrdering, xs2, xs1, from2, mid);
      if (to - mid > 1)
        mergeFromTo(compare2, fromOrdering, xs2, xs1, mid, to);
      i = from2;
      j = mid;
      k = from2;
      while (i < mid && j < to) {
        x3 = xs2[i];
        y3 = xs2[j];
        c = fromOrdering(compare2(x3)(y3));
        if (c > 0) {
          xs1[k++] = y3;
          ++j;
        } else {
          xs1[k++] = x3;
          ++i;
        }
      }
      while (i < mid) {
        xs1[k++] = xs2[i++];
      }
      while (j < to) {
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
  var bind2 = /* @__PURE__ */ bind(bindST);
  var withArray = function(f) {
    return function(xs) {
      return function __do() {
        var result = thaw(xs)();
        f(result)();
        return unsafeFreeze(result)();
      };
    };
  };
  var run2 = function(st) {
    return bind2(st)(unsafeFreeze)();
  };
  var push = function(a) {
    return pushAll([a]);
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

  // output/Data.Array/index.js
  var $$void3 = /* @__PURE__ */ $$void(functorST);
  var updateAt = /* @__PURE__ */ function() {
    return _updateAt(Just.create)(Nothing.value);
  }();
  var unsafeIndex = function() {
    return unsafeIndexImpl;
  };
  var unsafeIndex1 = /* @__PURE__ */ unsafeIndex();
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
  var snoc = function(xs) {
    return function(x3) {
      return withArray(push(x3))(xs)();
    };
  };
  var mapWithIndex2 = /* @__PURE__ */ mapWithIndex(functorWithIndexArray);
  var intersperse = function(a) {
    return function(arr) {
      var v = length(arr);
      if (v < 2) {
        return arr;
      }
      ;
      if (otherwise) {
        return run2(function() {
          var unsafeGetElem = function(idx) {
            return unsafeIndex1(arr)(idx);
          };
          return function __do() {
            var out = newSTArray();
            push(unsafeGetElem(0))(out)();
            forST(1)(v)(function(idx) {
              return function __do2() {
                push(a)(out)();
                return $$void3(push(unsafeGetElem(idx))(out))();
              };
            })();
            return out;
          };
        }());
      }
      ;
      throw new Error("Failed pattern match at Data.Array (line 613, column 21 - line 622, column 19): " + [v.constructor.name]);
    };
  };
  var index = /* @__PURE__ */ function() {
    return indexImpl(Just.create)(Nothing.value);
  }();
  var foldl2 = /* @__PURE__ */ foldl(foldableArray);
  var findIndex = /* @__PURE__ */ function() {
    return findIndexImpl(Just.create)(Nothing.value);
  }();
  var elemIndex = function(dictEq) {
    var eq22 = eq(dictEq);
    return function(x3) {
      return findIndex(function(v) {
        return eq22(v)(x3);
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

  // output/Data.FoldableWithIndex/index.js
  var foldr8 = /* @__PURE__ */ foldr(foldableArray);
  var mapWithIndex3 = /* @__PURE__ */ mapWithIndex(functorWithIndexArray);
  var foldl8 = /* @__PURE__ */ foldl(foldableArray);
  var foldrWithIndex = function(dict) {
    return dict.foldrWithIndex;
  };
  var traverseWithIndex_ = function(dictApplicative) {
    var applySecond2 = applySecond(dictApplicative.Apply0());
    var pure8 = pure(dictApplicative);
    return function(dictFoldableWithIndex) {
      var foldrWithIndex1 = foldrWithIndex(dictFoldableWithIndex);
      return function(f) {
        return foldrWithIndex1(function(i) {
          var $289 = f(i);
          return function($290) {
            return applySecond2($289($290));
          };
        })(pure8(unit));
      };
    };
  };
  var forWithIndex_ = function(dictApplicative) {
    var traverseWithIndex_1 = traverseWithIndex_(dictApplicative);
    return function(dictFoldableWithIndex) {
      return flip(traverseWithIndex_1(dictFoldableWithIndex));
    };
  };
  var foldMapWithIndexDefaultR = function(dictFoldableWithIndex) {
    var foldrWithIndex1 = foldrWithIndex(dictFoldableWithIndex);
    return function(dictMonoid) {
      var append4 = append(dictMonoid.Semigroup0());
      var mempty2 = mempty(dictMonoid);
      return function(f) {
        return foldrWithIndex1(function(i) {
          return function(x3) {
            return function(acc) {
              return append4(f(i)(x3))(acc);
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
          return function(y3) {
            return f(v.value0)(v.value1)(y3);
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
        var $294 = foldl8(function(y3) {
          return function(v) {
            return f(v.value0)(y3)(v.value1);
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
  var fromStringAsImpl = function(just) {
    return function(nothing) {
      return function(radix) {
        var digits;
        if (radix < 11) {
          digits = "[0-" + (radix - 1).toString() + "]";
        } else if (radix === 11) {
          digits = "[0-9a]";
        } else {
          digits = "[0-9a-" + String.fromCharCode(86 + radix) + "]";
        }
        var pattern2 = new RegExp("^[\\+\\-]?" + digits + "+$", "i");
        return function(s) {
          if (pattern2.test(s)) {
            var i = parseInt(s, radix);
            return (i | 0) === i ? just(i) : nothing;
          } else {
            return nothing;
          }
        };
      };
    };
  };

  // output/Data.Number/foreign.js
  var isFiniteImpl = isFinite;
  function fromStringImpl(str, isFinite2, just, nothing) {
    var num = parseFloat(str);
    if (isFinite2(num)) {
      return just(num);
    } else {
      return nothing;
    }
  }
  var ceil = Math.ceil;
  var floor = Math.floor;

  // output/Data.Number/index.js
  var fromString = function(str) {
    return fromStringImpl(str, isFiniteImpl, Just.create, Nothing.value);
  };

  // output/Data.Int/index.js
  var top2 = /* @__PURE__ */ top(boundedInt);
  var bottom2 = /* @__PURE__ */ bottom(boundedInt);
  var fromStringAs = /* @__PURE__ */ function() {
    return fromStringAsImpl(Just.create)(Nothing.value);
  }();
  var fromString2 = /* @__PURE__ */ fromStringAs(10);
  var fromNumber = /* @__PURE__ */ function() {
    return fromNumberImpl(Just.create)(Nothing.value);
  }();
  var unsafeClamp = function(x3) {
    if (!isFiniteImpl(x3)) {
      return 0;
    }
    ;
    if (x3 >= toNumber(top2)) {
      return top2;
    }
    ;
    if (x3 <= toNumber(bottom2)) {
      return bottom2;
    }
    ;
    if (otherwise) {
      return fromMaybe(0)(fromNumber(x3));
    }
    ;
    throw new Error("Failed pattern match at Data.Int (line 72, column 1 - line 72, column 29): " + [x3.constructor.name]);
  };
  var floor2 = function($39) {
    return unsafeClamp(floor($39));
  };
  var ceil2 = function($40) {
    return unsafeClamp(ceil($40));
  };

  // output/Data.Array.NonEmpty.Internal/foreign.js
  var traverse1Impl = function() {
    function Cont(fn) {
      this.fn = fn;
    }
    var emptyList = {};
    var ConsCell = function(head3, tail2) {
      this.head = head3;
      this.tail = tail2;
    };
    function finalCell(head3) {
      return new ConsCell(head3, emptyList);
    }
    function consList(x3) {
      return function(xs) {
        return new ConsCell(x3, xs);
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
    return function(apply2) {
      return function(map9) {
        return function(f) {
          var buildFrom = function(x3, ys) {
            return apply2(map9(consList)(f(x3)))(ys);
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
      };
    };
  }();

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
  var identity5 = /* @__PURE__ */ identity(categoryFn);
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
        return function(r2) {
          return composeFlipped2(first1(l))(second1(r2));
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
        return function(r2) {
          var split = dimap2(identity5)(function(a) {
            return new Tuple(a, a);
          })(identity1);
          return composeFlipped2(split)(splitStrong2(l)(r2));
        };
      };
    };
  };

  // output/Data.Lens.AffineTraversal/index.js
  var identity6 = /* @__PURE__ */ identity(categoryFn);
  var fanout2 = /* @__PURE__ */ fanout(categoryFn)(strongFn);
  var affineTraversal$prime = function(to) {
    return function(dictStrong) {
      var second2 = second(dictStrong);
      return function(dictChoice) {
        var dimap2 = dimap(dictChoice.Profunctor0());
        var right2 = right(dictChoice);
        return function(pab) {
          return dimap2(to)(function(v) {
            return either(identity6)(v.value0)(v.value1);
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

  // output/Data.Lens.Lens/index.js
  var lens$prime = function(to) {
    return function(dictStrong) {
      var dimap2 = dimap(dictStrong.Profunctor0());
      var first2 = first(dictStrong);
      return function(pab) {
        return dimap2(to)(function(v) {
          return v.value1(v.value0);
        })(first2(pab));
      };
    };
  };
  var lens = function(get4) {
    return function(set3) {
      return function(dictStrong) {
        return lens$prime(function(s) {
          return new Tuple(get4(s), function(b) {
            return set3(s)(b);
          });
        })(dictStrong);
      };
    };
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

  // output/Foreign.Object/foreign.js
  function toArrayWithKey(f) {
    return function(m) {
      var r2 = [];
      for (var k in m) {
        if (hasOwnProperty.call(m, k)) {
          r2.push(f(k)(m[k]));
        }
      }
      return r2;
    };
  }
  var keys2 = Object.keys || toArrayWithKey(function(k) {
    return function() {
      return k;
    };
  });

  // output/Data.Lens.Index/index.js
  var ix = function(dict) {
    return dict.ix;
  };
  var indexArray = {
    ix: function(n) {
      return function(dictStrong) {
        return function(dictChoice) {
          var set3 = function(s) {
            return function(b) {
              return fromMaybe(s)(updateAt(n)(b)(s));
            };
          };
          var pre = function(s) {
            return maybe(new Left(s))(Right.create)(index(s)(n));
          };
          return affineTraversal(set3)(pre)(dictStrong)(dictChoice);
        };
      };
    }
  };

  // output/Record/index.js
  var set = function(dictIsSymbol) {
    var reflectSymbol2 = reflectSymbol(dictIsSymbol);
    return function() {
      return function() {
        return function(l) {
          return function(b) {
            return function(r2) {
              return unsafeSet(reflectSymbol2(l))(b)(r2);
            };
          };
        };
      };
    };
  };
  var get2 = function(dictIsSymbol) {
    var reflectSymbol2 = reflectSymbol(dictIsSymbol);
    return function() {
      return function(l) {
        return function(r2) {
          return unsafeGet(reflectSymbol2(l))(r2);
        };
      };
    };
  };

  // output/Data.Lens.Record/index.js
  var prop = function(dictIsSymbol) {
    var get4 = get2(dictIsSymbol)();
    var set3 = set(dictIsSymbol)()();
    return function() {
      return function() {
        return function(l) {
          return function(dictStrong) {
            return lens(get4(l))(flip(set3(l)))(dictStrong);
          };
        };
      };
    };
  };

  // output/Data.Lens.Setter/index.js
  var over2 = function(l) {
    return l;
  };
  var set2 = function(l) {
    return function(b) {
      return over2(l)($$const(b));
    };
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

  // output/Neuron.Patterns/index.js
  var mapFlipped2 = /* @__PURE__ */ mapFlipped(functorArray);
  var pattern94 = /* @__PURE__ */ mapFlipped2([0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0])(function(v) {
    return v === 1;
  });
  var pattern93 = /* @__PURE__ */ mapFlipped2([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0])(function(v) {
    return v === 1;
  });
  var pattern92 = /* @__PURE__ */ mapFlipped2([0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0])(function(v) {
    return v === 1;
  });
  var pattern91 = /* @__PURE__ */ mapFlipped2([0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0])(function(v) {
    return v === 1;
  });
  var pattern64 = /* @__PURE__ */ mapFlipped2([0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0])(function(v) {
    return v === 1;
  });
  var pattern63 = /* @__PURE__ */ mapFlipped2([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0])(function(v) {
    return v === 1;
  });
  var pattern62 = /* @__PURE__ */ mapFlipped2([0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0])(function(v) {
    return v === 1;
  });
  var pattern61 = /* @__PURE__ */ mapFlipped2([0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0])(function(v) {
    return v === 1;
  });
  var pattern34 = /* @__PURE__ */ mapFlipped2([0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0])(function(v) {
    return v === 1;
  });
  var pattern33 = /* @__PURE__ */ mapFlipped2([0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0])(function(v) {
    return v === 1;
  });
  var pattern32 = /* @__PURE__ */ mapFlipped2([0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0])(function(v) {
    return v === 1;
  });
  var pattern31 = /* @__PURE__ */ mapFlipped2([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0])(function(v) {
    return v === 1;
  });
  var pattern04 = /* @__PURE__ */ mapFlipped2([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0])(function(v) {
    return v === 1;
  });
  var pattern03 = /* @__PURE__ */ mapFlipped2([0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0])(function(v) {
    return v === 1;
  });
  var pattern02 = /* @__PURE__ */ mapFlipped2([0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0])(function(v) {
    return v === 1;
  });
  var pattern01 = /* @__PURE__ */ mapFlipped2([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0])(function(v) {
    return v === 1;
  });
  var emptyPattern = /* @__PURE__ */ replicate(54)(false);

  // output/Neuron.Util/index.js
  var unsafeIndex2 = /* @__PURE__ */ unsafeIndex();
  var map22 = function(t1) {
    return function(t2) {
      return function(fn) {
        return zipWith(fn)(t1)(t2);
      };
    };
  };
  var indexImpl2 = function(a) {
    return function(i) {
      return unsafeIndex2(a)(i);
    };
  };
  var count = function(f) {
    return foldl2(function(acc) {
      return function(x3) {
        var $2 = f(x3);
        if ($2) {
          return acc + 1 | 0;
        }
        ;
        return acc;
      };
    })(0);
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
  var uncons2 = function($copy_v) {
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
  var snoc2 = function(v) {
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
        return new CatCons(v.value0, snoc2(v.value1)(v1));
      }
      ;
      throw new Error("Failed pattern match at Data.CatList (line 108, column 1 - line 108, column 54): " + [v.constructor.name, v1.constructor.name]);
    };
  };
  var foldr2 = function(k) {
    return function(b) {
      return function(q) {
        var foldl4 = function($copy_v) {
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
              var v = uncons2(xs);
              if (v instanceof Nothing) {
                $tco_done1 = true;
                return foldl4(function(x3) {
                  return function(i) {
                    return i(x3);
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
  var uncons3 = function(v) {
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
  var empty5 = /* @__PURE__ */ function() {
    return CatNil.value;
  }();
  var append2 = link;
  var semigroupCatList = {
    append: append2
  };
  var snoc3 = function(cat) {
    return function(a) {
      return append2(cat)(new CatCons(a, empty4));
    };
  };

  // output/Control.Monad.Free/index.js
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
  var append3 = /* @__PURE__ */ append(semigroupCatList);
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
        return function(r2) {
          return new Free(v22.value0, append3(v22.value1)(r2));
        };
      };
      if (v.value0 instanceof Return) {
        var v2 = uncons3(v.value1);
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
    var map13 = map(dictFunctor);
    return function(dictMonadRec) {
      var Monad0 = dictMonadRec.Monad0();
      var map23 = map(Monad0.Bind1().Apply0().Functor0());
      var pure1 = pure(Monad0.Applicative0());
      var tailRecM3 = tailRecM(dictMonadRec);
      return function(k) {
        var go2 = function(f) {
          var v = toView(f);
          if (v instanceof Return) {
            return map23(Done.create)(pure1(v.value0));
          }
          ;
          if (v instanceof Bind) {
            return map23(Loop.create)(k(map13(v.value1)(v.value0)));
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
        return new Free(v.value0, snoc3(v.value1)(k));
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
  var pure3 = /* @__PURE__ */ pure(freeApplicative);
  var liftF = function(f) {
    return fromView(new Bind(f, function($192) {
      return pure3($192);
    }));
  };

  // output/Pha.Update/index.js
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
  var Update = function(x3) {
    return x3;
  };
  var monadUpdate = freeMonad;
  var monadStateUpdate = {
    state: function($32) {
      return Update(liftF(State.create($32)));
    },
    Monad0: function() {
      return monadUpdate;
    }
  };
  var monadEffectUpdate = function(dictMonadEffect) {
    return {
      liftEffect: function() {
        var $33 = liftEffect(dictMonadEffect);
        return function($34) {
          return Update(liftF(Lift.create($33($34))));
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
        var $35 = liftAff(dictMonadAff);
        return function($36) {
          return Update(liftF(Lift.create($35($36))));
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
              var $37 = lmap2(v);
              return function($38) {
                return $37(v1.value0($38));
              };
            }());
          }
          ;
          if (v1 instanceof Lift) {
            return new Lift(map9(v)(v1.value0));
          }
          ;
          throw new Error("Failed pattern match at Pha.Update (line 22, column 1 - line 24, column 36): " + [v.constructor.name, v1.constructor.name]);
        };
      }
    };
  };
  var bindUpdate = freeBind;
  var applicativeUpdate = freeApplicative;
  var delay2 = function(dictMonadAff) {
    var liftAff2 = liftAff(monadAffUpdate(dictMonadAff));
    return function(ms) {
      return liftAff2(delay(ms));
    };
  };

  // output/Neuron.Model/index.js
  var mapFlipped3 = /* @__PURE__ */ mapFlipped(functorArray);
  var max3 = /* @__PURE__ */ max(ordNumber);
  var sum2 = /* @__PURE__ */ sum(foldableArray)(semiringNumber);
  var mul2 = /* @__PURE__ */ mul(semiringNumber);
  var minimum2 = /* @__PURE__ */ minimum(ordNumber)(foldableArray);
  var maximum2 = /* @__PURE__ */ maximum(ordNumber)(foldableArray);
  var sortWith2 = /* @__PURE__ */ sortWith(ordNumber);
  var map3 = /* @__PURE__ */ map(functorArray);
  var foldl3 = /* @__PURE__ */ foldl(foldableArray);
  var elem3 = /* @__PURE__ */ elem2(eqInt);
  var identity7 = /* @__PURE__ */ identity(categoryFn);
  var div1 = /* @__PURE__ */ div(euclideanRingInt);
  var mod2 = /* @__PURE__ */ mod(euclideanRingInt);
  var prop2 = /* @__PURE__ */ prop({
    reflectSymbol: function() {
      return "states";
    }
  })()();
  var prop1 = /* @__PURE__ */ prop({
    reflectSymbol: function() {
      return "selected";
    }
  })()();
  var prop22 = /* @__PURE__ */ prop({
    reflectSymbol: function() {
      return "patterns";
    }
  })()();
  var prop3 = /* @__PURE__ */ prop({
    reflectSymbol: function() {
      return "hiddenWeights";
    }
  })()();
  var prop4 = /* @__PURE__ */ prop({
    reflectSymbol: function() {
      return "hiddenThresholds";
    }
  })()();
  var prop5 = /* @__PURE__ */ prop({
    reflectSymbol: function() {
      return "currentState";
    }
  })()();
  var modify_2 = /* @__PURE__ */ modify_(monadStateUpdate);
  var pure4 = /* @__PURE__ */ pure(applicativeUpdate);
  var ix2 = /* @__PURE__ */ ix(indexArray);
  var not2 = /* @__PURE__ */ not(heytingAlgebraBoolean);
  var prop6 = /* @__PURE__ */ prop({
    reflectSymbol: function() {
      return "pattern";
    }
  })()();
  var bind3 = /* @__PURE__ */ bind(bindUpdate);
  var get3 = /* @__PURE__ */ get(monadStateUpdate);
  var forWithIndex_2 = /* @__PURE__ */ forWithIndex_(applicativeUpdate)(foldableWithIndexArray);
  var discard2 = /* @__PURE__ */ discard(discardUnit)(bindUpdate);
  var delay3 = /* @__PURE__ */ delay2(monadAffAff);
  var put2 = /* @__PURE__ */ put(monadStateUpdate);
  var EditorDialog = /* @__PURE__ */ function() {
    function EditorDialog2() {
    }
    ;
    EditorDialog2.value = new EditorDialog2();
    return EditorDialog2;
  }();
  var NeuronDialog = /* @__PURE__ */ function() {
    function NeuronDialog2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    NeuronDialog2.create = function(value0) {
      return function(value1) {
        return new NeuronDialog2(value0, value1);
      };
    };
    return NeuronDialog2;
  }();
  var NoDialog = /* @__PURE__ */ function() {
    function NoDialog2() {
    }
    ;
    NoDialog2.value = new NoDialog2();
    return NoDialog2;
  }();
  var AllNeuronsDialog = /* @__PURE__ */ function() {
    function AllNeuronsDialog2() {
    }
    ;
    AllNeuronsDialog2.value = new AllNeuronsDialog2();
    return AllNeuronsDialog2;
  }();
  var SelectInput = /* @__PURE__ */ function() {
    function SelectInput2(value0) {
      this.value0 = value0;
    }
    ;
    SelectInput2.create = function(value0) {
      return new SelectInput2(value0);
    };
    return SelectInput2;
  }();
  var SelectPattern = /* @__PURE__ */ function() {
    function SelectPattern2(value0) {
      this.value0 = value0;
    }
    ;
    SelectPattern2.create = function(value0) {
      return new SelectPattern2(value0);
    };
    return SelectPattern2;
  }();
  var ChangeWeight = /* @__PURE__ */ function() {
    function ChangeWeight2(value0, value1, value22, value32) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
    }
    ;
    ChangeWeight2.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return function(value32) {
            return new ChangeWeight2(value0, value1, value22, value32);
          };
        };
      };
    };
    return ChangeWeight2;
  }();
  var ChangeThreshold = /* @__PURE__ */ function() {
    function ChangeThreshold2(value0, value1, value22) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
    }
    ;
    ChangeThreshold2.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return new ChangeThreshold2(value0, value1, value22);
        };
      };
    };
    return ChangeThreshold2;
  }();
  var OpenDialog = /* @__PURE__ */ function() {
    function OpenDialog2(value0) {
      this.value0 = value0;
    }
    ;
    OpenDialog2.create = function(value0) {
      return new OpenDialog2(value0);
    };
    return OpenDialog2;
  }();
  var TogglePattern = /* @__PURE__ */ function() {
    function TogglePattern2(value0) {
      this.value0 = value0;
    }
    ;
    TogglePattern2.create = function(value0) {
      return new TogglePattern2(value0);
    };
    return TogglePattern2;
  }();
  var ChangePixel = /* @__PURE__ */ function() {
    function ChangePixel2(value0) {
      this.value0 = value0;
    }
    ;
    ChangePixel2.create = function(value0) {
      return new ChangePixel2(value0);
    };
    return ChangePixel2;
  }();
  var ResetPattern = /* @__PURE__ */ function() {
    function ResetPattern2() {
    }
    ;
    ResetPattern2.value = new ResetPattern2();
    return ResetPattern2;
  }();
  var ToggleEditMode = /* @__PURE__ */ function() {
    function ToggleEditMode2() {
    }
    ;
    ToggleEditMode2.value = new ToggleEditMode2();
    return ToggleEditMode2;
  }();
  var RunLearning = /* @__PURE__ */ function() {
    function RunLearning2() {
    }
    ;
    RunLearning2.value = new RunLearning2();
    return RunLearning2;
  }();
  var RunSimulation = /* @__PURE__ */ function() {
    function RunSimulation2() {
    }
    ;
    RunSimulation2.value = new RunSimulation2();
    return RunSimulation2;
  }();
  var ChangeCurrentState = /* @__PURE__ */ function() {
    function ChangeCurrentState2(value0) {
      this.value0 = value0;
    }
    ;
    ChangeCurrentState2.create = function(value0) {
      return new ChangeCurrentState2(value0);
    };
    return ChangeCurrentState2;
  }();
  var Reset = /* @__PURE__ */ function() {
    function Reset2() {
    }
    ;
    Reset2.value = new Reset2();
    return Reset2;
  }();
  var updateOutput = function(inputs) {
    return function(st) {
      var output = mapFlipped3(inputs)(function(input2) {
        var hidden2 = map22(st.hiddenThresholds)(st.hiddenWeights)(function(t) {
          return function(hw) {
            return max3(0)(sum2(zipWith(mul2)(input2)(hw)) - t);
          };
        });
        var $$final = map22(st.finalThresholds)(st.finalWeights)(function(t) {
          return function(fw) {
            return sum2(zipWith(mul2)(hidden2)(fw)) - t;
          };
        });
        return {
          "final": $$final,
          hidden: hidden2
        };
      });
      return {
        hiddenThresholds: st.hiddenThresholds,
        hiddenWeights: st.hiddenWeights,
        finalThresholds: st.finalThresholds,
        finalWeights: st.finalWeights,
        output,
        iter: st.iter
      };
    };
  };
  var rulerPositions = function(patterns) {
    return function(st) {
      return function(i) {
        return function(j) {
          var values = mapFlipped3(st.output)(function(v) {
            var $111 = i === 1;
            if ($111) {
              return indexImpl2(v.hidden)(j);
            }
            ;
            return indexImpl2(v["final"])(j);
          });
          var minX = fromMaybe(0)(minimum2(values));
          var maxX = fromMaybe(0)(maximum2(values));
          var values$prime = mapFlipped3(values)(function(v) {
            return (v - minX) / (maxX - minX);
          });
          var t = sortWith2(function(v) {
            return v.value;
          })(map3(function(v) {
            return {
              symbol: v.symbol,
              value: v.value
            };
          })(filter(function(v) {
            return v.selected;
          })(map22(patterns)(values$prime)(function(v) {
            return function(value13) {
              return {
                selected: v.selected,
                symbol: v.symbol,
                value: value13
              };
            };
          }))));
          var go2 = function(v) {
            return function(v1) {
              if (v1.value - v.prev >= 0.05) {
                return {
                  prev: v1.value,
                  height: 1,
                  acc: snoc(v.acc)({
                    symbol: v1.symbol,
                    x: v1.value,
                    y: 0
                  })
                };
              }
              ;
              if (otherwise) {
                return {
                  prev: v.prev,
                  height: v.height + 1,
                  acc: snoc(v.acc)({
                    symbol: v1.symbol,
                    x: v1.value,
                    y: v.height
                  })
                };
              }
              ;
              throw new Error("Failed pattern match at Neuron.Model (line 211, column 5 - line 213, column 95): " + [v.constructor.name, v1.constructor.name]);
            };
          };
          return {
            zero: -minX / (maxX - minX),
            symbols: foldl3(go2)({
              prev: -0.1,
              height: 0,
              acc: []
            })(t).acc,
            graduation: mapFlipped3(range(floor2(minX))(ceil2(maxX)))(function(k) {
              return {
                value: k,
                x: (toNumber(k) - minX) / (maxX - minX)
              };
            })
          };
        };
      };
    };
  };
  var mask = /* @__PURE__ */ mapFlipped3([[1, 1, 1, 0, 0, 0], [1, 1, 0, 0, 0, 1], [0, 0, 1, 1, 1, 0], [0, 1, 0, 1, 0, 1], [1, 0, 0, 0, 1, 1], [0, 0, 0, 1, 1, 1]])(/* @__PURE__ */ map3(function(v) {
    return v === 1;
  }));
  var runStep = function(v) {
    return function(st) {
      return updateOutput(v.inputs)(runStepImpl(mask)(v)(st));
    };
  };
  var iterList = [0, 100, 200, 300, 400, 500, 1e3, 2e3, 3e3, 4e3, 5e3, 1e4, 2e4, 3e4, 4e4, 5e4, 6e4];
  var runLearning = function(v) {
    var go2 = function($copy_n) {
      return function($copy_acc) {
        return function($copy_st) {
          var $tco_var_n = $copy_n;
          var $tco_var_acc = $copy_acc;
          var $tco_done = false;
          var $tco_result;
          function $tco_loop(n, acc, st) {
            if (n === 6e4) {
              $tco_done = true;
              return snoc(acc)(st);
            }
            ;
            if (elem3(n)(iterList)) {
              $tco_var_n = n + 1 | 0;
              $tco_var_acc = snoc(acc)(st);
              $copy_st = runStep(v)(st);
              return;
            }
            ;
            if (otherwise) {
              $tco_var_n = n + 1 | 0;
              $tco_var_acc = acc;
              $copy_st = runStep(v)(st);
              return;
            }
            ;
            throw new Error("Failed pattern match at Neuron.Model (line 189, column 3 - line 191, column 56): " + [n.constructor.name, acc.constructor.name, st.constructor.name]);
          }
          ;
          while (!$tco_done) {
            $tco_result = $tco_loop($tco_var_n, $tco_var_acc, $copy_st);
          }
          ;
          return $tco_result;
        };
      };
    };
    return {
      patterns: v.patterns,
      inputs: v.inputs,
      states: go2(0)([])(indexImpl2(v.states)(0)),
      currentPattern: v.currentPattern,
      currentState: v.currentState,
      selectedInput: v.selectedInput,
      dialog: v.dialog,
      editMode: v.editMode
    };
  };
  var initState = /* @__PURE__ */ function() {
    return {
      hiddenThresholds: [8, 7, 18, 6, 16, 5],
      hiddenWeights: [[-1, 1, 1, 0, 0, 0], [1, 1, 0, 0, 0, -1], [0, 0, 1, 1, 1, 0], [0, 1, 0, -1, 0, 1], [1, 0, 0, 0, 1, 1], [0, 0, 0, 1, -1, 1]],
      finalThresholds: [7, 5, 6, 5],
      finalWeights: [[-1, -1, 1, -1, 1, 1], [1, 1, -1, 1, -1, 0], [-1, 1, -1, 1, 1, -1], [1, 1, 1, -1, -1, 0]],
      output: [],
      iter: 0
    };
  }();
  var initPatterns = [{
    symbol: 0,
    pattern: pattern01,
    selected: true
  }, {
    symbol: 0,
    pattern: pattern02,
    selected: true
  }, {
    symbol: 0,
    pattern: pattern03,
    selected: true
  }, {
    symbol: 0,
    pattern: pattern04,
    selected: true
  }, {
    symbol: 0,
    pattern: emptyPattern,
    selected: false
  }, {
    symbol: 0,
    pattern: emptyPattern,
    selected: false
  }, {
    symbol: 1,
    pattern: pattern31,
    selected: true
  }, {
    symbol: 1,
    pattern: pattern32,
    selected: true
  }, {
    symbol: 1,
    pattern: pattern33,
    selected: true
  }, {
    symbol: 1,
    pattern: pattern34,
    selected: true
  }, {
    symbol: 1,
    pattern: emptyPattern,
    selected: false
  }, {
    symbol: 1,
    pattern: emptyPattern,
    selected: false
  }, {
    symbol: 2,
    pattern: pattern61,
    selected: true
  }, {
    symbol: 2,
    pattern: pattern62,
    selected: true
  }, {
    symbol: 2,
    pattern: pattern63,
    selected: true
  }, {
    symbol: 2,
    pattern: pattern64,
    selected: true
  }, {
    symbol: 2,
    pattern: emptyPattern,
    selected: false
  }, {
    symbol: 2,
    pattern: emptyPattern,
    selected: false
  }, {
    symbol: 3,
    pattern: pattern91,
    selected: true
  }, {
    symbol: 3,
    pattern: pattern92,
    selected: true
  }, {
    symbol: 3,
    pattern: pattern93,
    selected: true
  }, {
    symbol: 3,
    pattern: pattern94,
    selected: true
  }, {
    symbol: 3,
    pattern: emptyPattern,
    selected: false
  }, {
    symbol: 3,
    pattern: emptyPattern,
    selected: false
  }];
  var countPixels = function(i) {
    var $178 = count(identity7);
    var $179 = mapWithIndex2(function(j) {
      return function(b) {
        var row = div1(j)(18);
        var col = div1(mod2(j)(6))(2);
        return b && function() {
          var $135 = i < 3;
          if ($135) {
            return col === i;
          }
          ;
          return row === (i - 3 | 0);
        }();
      };
    });
    return function($180) {
      return $178($179($180));
    };
  };
  var updateInput = /* @__PURE__ */ map3(function(v) {
    return mapFlipped3(range(0)(5))(function(i) {
      return toNumber(countPixels(i)(v.pattern));
    });
  });
  var simulate = function(v) {
    var inputs = updateInput(v.patterns);
    return {
      patterns: v.patterns,
      inputs,
      states: mapFlipped3(v.states)(updateOutput(inputs)),
      currentPattern: v.currentPattern,
      currentState: v.currentState,
      selectedInput: v.selectedInput,
      dialog: v.dialog,
      editMode: v.editMode
    };
  };
  var init2 = /* @__PURE__ */ function() {
    return simulate({
      patterns: initPatterns,
      inputs: [],
      states: [initState],
      currentState: 0,
      currentPattern: 0,
      selectedInput: Nothing.value,
      dialog: NoDialog.value,
      editMode: false
    });
  }();
  var _states = function(dictStrong) {
    return prop2($$Proxy.value)(dictStrong);
  };
  var _states1 = /* @__PURE__ */ _states(strongFn);
  var _selected = function(dictStrong) {
    return prop1($$Proxy.value)(dictStrong);
  };
  var _selected1 = /* @__PURE__ */ _selected(strongFn);
  var _patterns = function(dictStrong) {
    return prop22($$Proxy.value)(dictStrong);
  };
  var _patterns1 = /* @__PURE__ */ _patterns(strongFn);
  var _hiddenWeights = function(dictStrong) {
    return prop3($$Proxy.value)(dictStrong);
  };
  var _hiddenWeights1 = /* @__PURE__ */ _hiddenWeights(strongFn);
  var _hiddenThresholds = function(dictStrong) {
    return prop4($$Proxy.value)(dictStrong);
  };
  var _hiddenThresholds1 = /* @__PURE__ */ _hiddenThresholds(strongFn);
  var _finalWeights = function(dictStrong) {
    return prop3($$Proxy.value)(dictStrong);
  };
  var _finalWeights1 = /* @__PURE__ */ _finalWeights(strongFn);
  var _finalThresholds = function(dictStrong) {
    return prop4($$Proxy.value)(dictStrong);
  };
  var _finalThresholds1 = /* @__PURE__ */ _finalThresholds(strongFn);
  var _currentState = function(dictStrong) {
    return prop5($$Proxy.value)(dictStrong);
  };
  var _currentState1 = /* @__PURE__ */ _currentState(strongFn);
  var update3 = function(msg) {
    if (msg instanceof SelectInput) {
      return modify_2(function(v2) {
        var $142 = {};
        for (var $143 in v2) {
          if ({}.hasOwnProperty.call(v2, $143)) {
            $142[$143] = v2[$143];
          }
          ;
        }
        ;
        $142.selectedInput = msg.value0;
        return $142;
      });
    }
    ;
    if (msg instanceof SelectPattern) {
      return modify_2(function($181) {
        return simulate(function(v2) {
          return {
            patterns: v2.patterns,
            inputs: v2.inputs,
            states: v2.states,
            currentPattern: msg.value0,
            currentState: v2.currentState,
            selectedInput: v2.selectedInput,
            dialog: v2.dialog,
            editMode: v2.editMode
          };
        }($181));
      });
    }
    ;
    if (msg instanceof ChangeWeight) {
      var v = fromString(msg.value3);
      if (v instanceof Nothing) {
        return pure4(unit);
      }
      ;
      if (v instanceof Just) {
        return modify_2(function($182) {
          return simulate(function(model) {
            return set2(_currentState1)(0)(over2(_states1)(function(sts) {
              return [function() {
                var v1 = indexImpl2(sts)(model.currentState);
                return {
                  hiddenThresholds: v1.hiddenThresholds,
                  hiddenWeights: v1.hiddenWeights,
                  finalThresholds: v1.finalThresholds,
                  finalWeights: v1.finalWeights,
                  output: v1.output,
                  iter: 0
                };
              }()];
            })(set2(function() {
              var $183 = ix2(model.currentState)(strongFn)(choiceFn);
              var $184 = function() {
                var $148 = msg.value0 === 1;
                if ($148) {
                  return _hiddenWeights1;
                }
                ;
                return _finalWeights1;
              }();
              var $185 = ix2(msg.value1)(strongFn)(choiceFn);
              var $186 = ix2(msg.value2)(strongFn)(choiceFn);
              return function($187) {
                return _states1($183($184($185($186($187)))));
              };
            }())(v.value0)(model)));
          }($182));
        });
      }
      ;
      throw new Error("Failed pattern match at Neuron.Model (line 239, column 27 - line 246, column 29): " + [v.constructor.name]);
    }
    ;
    if (msg instanceof ChangeThreshold) {
      var v = fromString(msg.value2);
      if (v instanceof Nothing) {
        return pure4(unit);
      }
      ;
      if (v instanceof Just) {
        return modify_2(function($188) {
          return simulate(function(model) {
            return set2(_currentState1)(0)(over2(_states1)(function(sts) {
              return [function() {
                var v1 = indexImpl2(sts)(model.currentState);
                return {
                  hiddenThresholds: v1.hiddenThresholds,
                  hiddenWeights: v1.hiddenWeights,
                  finalThresholds: v1.finalThresholds,
                  finalWeights: v1.finalWeights,
                  output: v1.output,
                  iter: 0
                };
              }()];
            })(set2(function() {
              var $189 = ix2(model.currentState)(strongFn)(choiceFn);
              var $190 = function() {
                var $155 = msg.value0 === 1;
                if ($155) {
                  return _hiddenThresholds1;
                }
                ;
                return _finalThresholds1;
              }();
              var $191 = ix2(msg.value1)(strongFn)(choiceFn);
              return function($192) {
                return _states1($189($190($191($192))));
              };
            }())(v.value0)(model)));
          }($188));
        });
      }
      ;
      throw new Error("Failed pattern match at Neuron.Model (line 247, column 28 - line 254, column 29): " + [v.constructor.name]);
    }
    ;
    if (msg instanceof OpenDialog) {
      return modify_2(function(v2) {
        var $160 = {};
        for (var $161 in v2) {
          if ({}.hasOwnProperty.call(v2, $161)) {
            $160[$161] = v2[$161];
          }
          ;
        }
        ;
        $160.dialog = msg.value0;
        return $160;
      });
    }
    ;
    if (msg instanceof TogglePattern) {
      return modify_2(over2(function() {
        var $193 = ix2(msg.value0)(strongFn)(choiceFn);
        return function($194) {
          return _patterns1($193(_selected1($194)));
        };
      }())(not2));
    }
    ;
    if (msg instanceof ChangePixel) {
      return modify_2(function($195) {
        return simulate(function(model) {
          return over2(function() {
            var $196 = ix2(model.currentPattern)(strongFn)(choiceFn);
            var $197 = prop6($$Proxy.value)(strongFn);
            var $198 = ix2(msg.value0)(strongFn)(choiceFn);
            return function($199) {
              return _patterns1($196($197($198($199))));
            };
          }())(not2)(model);
        }($195));
      });
    }
    ;
    if (msg instanceof ToggleEditMode) {
      return modify_2(function(model) {
        var $166 = {};
        for (var $167 in model) {
          if ({}.hasOwnProperty.call(model, $167)) {
            $166[$167] = model[$167];
          }
          ;
        }
        ;
        $166.editMode = !model.editMode;
        return $166;
      });
    }
    ;
    if (msg instanceof ResetPattern) {
      return modify_2(function($200) {
        return simulate(function(model) {
          return set2(function() {
            var $201 = ix2(model.currentPattern)(strongFn)(choiceFn);
            return function($202) {
              return _patterns1($201($202));
            };
          }())(indexImpl2(initPatterns)(model.currentPattern))(model);
        }($200));
      });
    }
    ;
    if (msg instanceof RunLearning) {
      return modify_2(runLearning);
    }
    ;
    if (msg instanceof RunSimulation) {
      return bind3(get3)(function(model) {
        return forWithIndex_2(model.states)(function(i) {
          return function(v2) {
            return discard2(modify_2(function(v1) {
              var $169 = {};
              for (var $170 in v1) {
                if ({}.hasOwnProperty.call(v1, $170)) {
                  $169[$170] = v1[$170];
                }
                ;
              }
              ;
              $169.currentState = i;
              return $169;
            }))(function() {
              return delay3(2e3);
            });
          };
        });
      });
    }
    ;
    if (msg instanceof ChangeCurrentState) {
      var v = fromString2(msg.value0);
      if (v instanceof Nothing) {
        return pure4(unit);
      }
      ;
      if (v instanceof Just) {
        return modify_2(function(v1) {
          var $173 = {};
          for (var $174 in v1) {
            if ({}.hasOwnProperty.call(v1, $174)) {
              $173[$174] = v1[$174];
            }
            ;
          }
          ;
          $173.currentState = v.value0;
          return $173;
        });
      }
      ;
      throw new Error("Failed pattern match at Neuron.Model (line 272, column 27 - line 274, column 44): " + [v.constructor.name]);
    }
    ;
    if (msg instanceof Reset) {
      return put2(init2);
    }
    ;
    throw new Error("Failed pattern match at Neuron.Model (line 236, column 14 - line 275, column 20): " + [msg.constructor.name]);
  };

  // output/Data.Number.Format/foreign.js
  function wrap2(method2) {
    return function(d) {
      return function(num) {
        return method2.apply(num, [d]);
      };
    };
  }
  var toPrecisionNative = wrap2(Number.prototype.toPrecision);
  var toFixedNative = wrap2(Number.prototype.toFixed);
  var toExponentialNative = wrap2(Number.prototype.toExponential);

  // output/Data.Number.Format/index.js
  var clamp2 = /* @__PURE__ */ clamp(ordInt);
  var Precision = /* @__PURE__ */ function() {
    function Precision2(value0) {
      this.value0 = value0;
    }
    ;
    Precision2.create = function(value0) {
      return new Precision2(value0);
    };
    return Precision2;
  }();
  var Fixed = /* @__PURE__ */ function() {
    function Fixed2(value0) {
      this.value0 = value0;
    }
    ;
    Fixed2.create = function(value0) {
      return new Fixed2(value0);
    };
    return Fixed2;
  }();
  var Exponential = /* @__PURE__ */ function() {
    function Exponential2(value0) {
      this.value0 = value0;
    }
    ;
    Exponential2.create = function(value0) {
      return new Exponential2(value0);
    };
    return Exponential2;
  }();
  var toStringWith = function(v) {
    if (v instanceof Precision) {
      return toPrecisionNative(v.value0);
    }
    ;
    if (v instanceof Fixed) {
      return toFixedNative(v.value0);
    }
    ;
    if (v instanceof Exponential) {
      return toExponentialNative(v.value0);
    }
    ;
    throw new Error("Failed pattern match at Data.Number.Format (line 59, column 1 - line 59, column 43): " + [v.constructor.name]);
  };
  var fixed = /* @__PURE__ */ function() {
    var $9 = clamp2(0)(20);
    return function($10) {
      return Fixed.create($9($10));
    };
  }();

  // output/Pha.Html.Core/foreign.js
  var _h = (tag, ps, children2, keyed2 = false) => {
    const style2 = {};
    const props = { style: style2 };
    const vdom = { tag, children: children2, props, node: null, keyed: keyed2 };
    const n = ps.length;
    for (let i = 0; i < n; i++) {
      const [t, k, v] = ps[i];
      if (t == 1)
        props[k] = v;
      else if (t === 2)
        props.class = (props.class ? props.class + " " : "") + k;
      else if (t === 3)
        style2[k] = v;
    }
    return vdom;
  };
  var elem4 = (tag) => (ps) => (children2) => _h(tag, ps, children2.map((v) => [null, v]));
  var createTextVNode = (text6) => ({
    tag: text6,
    props: {},
    children: [],
    type: 3
  });
  var attr = (k) => (v) => [1, k, v];
  var class_ = (cls) => [2, cls];
  var noProp = [-1];
  var unsafeOnWithEffect = (k) => (v) => [1, "on" + k, v];
  var style = (k) => (v) => [3, k, v];
  var text = createTextVNode;

  // output/Web.Event.Event/foreign.js
  function _currentTarget(e) {
    return e.currentTarget;
  }
  function type_(e) {
    return e.type;
  }

  // output/Data.Nullable/foreign.js
  function nullable(a, r2, f) {
    return a == null ? r2 : f(a);
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
  var empty6 = /* @__PURE__ */ text("");
  var maybe2 = function(v) {
    return function(v1) {
      if (v instanceof Just) {
        return v1(v.value0);
      }
      ;
      if (v instanceof Nothing) {
        return empty6;
      }
      ;
      throw new Error("Failed pattern match at Pha.Html.Core (line 81, column 1 - line 81, column 52): " + [v.constructor.name, v1.constructor.name]);
    };
  };
  var when2 = function(cond) {
    return function(vdom) {
      if (cond) {
        return vdom(unit);
      }
      ;
      return empty6;
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

  // output/Pha.Html.Attributes/index.js
  var show2 = /* @__PURE__ */ show(showNumber);
  var show1 = /* @__PURE__ */ show(showInt);
  var y2 = /* @__PURE__ */ function() {
    var $4 = attr("y2");
    return function($5) {
      return $4(show2($5));
    };
  }();
  var y1 = /* @__PURE__ */ function() {
    var $6 = attr("y1");
    return function($7) {
      return $6(show2($7));
    };
  }();
  var y = /* @__PURE__ */ function() {
    var $8 = attr("y");
    return function($9) {
      return $8(show2($9));
    };
  }();
  var x2 = /* @__PURE__ */ function() {
    var $10 = attr("x2");
    return function($11) {
      return $10(show2($11));
    };
  }();
  var x1 = /* @__PURE__ */ function() {
    var $12 = attr("x1");
    return function($13) {
      return $12(show2($13));
    };
  }();
  var x = /* @__PURE__ */ function() {
    var $14 = attr("x");
    return function($15) {
      return $14(show2($15));
    };
  }();
  var width = /* @__PURE__ */ attr("width");
  var viewBox = function(a) {
    return function(b) {
      return function(c) {
        return function(d2) {
          return attr("viewBox")(show1(a) + (" " + (show1(b) + (" " + (show1(c) + (" " + show1(d2)))))));
        };
      };
    };
  };
  var value = /* @__PURE__ */ attr("value");
  var type_2 = /* @__PURE__ */ attr("type");
  var strokeWidth = /* @__PURE__ */ function() {
    var $16 = attr("stroke-width");
    return function($17) {
      return $16(show2($17));
    };
  }();
  var strokeDasharray = /* @__PURE__ */ attr("stroke-dasharray");
  var stroke = /* @__PURE__ */ attr("stroke");
  var r = /* @__PURE__ */ function() {
    var $26 = attr("r");
    return function($27) {
      return $26(show2($27));
    };
  }();
  var min3 = /* @__PURE__ */ function() {
    var $32 = attr("min");
    return function($33) {
      return $32(show1($33));
    };
  }();
  var max4 = /* @__PURE__ */ function() {
    var $36 = attr("max");
    return function($37) {
      return $36(show1($37));
    };
  }();
  var href = /* @__PURE__ */ attr("href");
  var height = /* @__PURE__ */ attr("height");
  var fill = /* @__PURE__ */ attr("fill");
  var checked = function(b) {
    return attr("checked")(b);
  };

  // output/Pha.Html.Elements/index.js
  var use = function(props) {
    return elem4("use")(props)([]);
  };
  var text_ = function(t) {
    return function(props) {
      return elem4("text")(props)([text(t)]);
    };
  };
  var svg = /* @__PURE__ */ elem4("svg");
  var span2 = /* @__PURE__ */ elem4("span");
  var rect = function(props) {
    return elem4("rect")(props)([]);
  };
  var line = function(props) {
    return elem4("line")(props)([]);
  };
  var label = /* @__PURE__ */ elem4("label");
  var input = function(attrs) {
    return elem4("input")(attrs)([]);
  };
  var g = /* @__PURE__ */ elem4("g");
  var div2 = /* @__PURE__ */ elem4("div");
  var circle = function(props) {
    return elem4("circle")(props)([]);
  };
  var button = /* @__PURE__ */ elem4("button");
  var br = /* @__PURE__ */ elem4("br")([])([]);

  // output/Web.HTML.HTMLInputElement/foreign.js
  function checked2(input2) {
    return function() {
      return input2.checked;
    };
  }
  function value2(input2) {
    return function() {
      return input2.value;
    };
  }

  // output/Web.Internal.FFI/foreign.js
  function _unsafeReadProtoTagged(nothing, just, name15, value13) {
    if (typeof window !== "undefined") {
      var ty = window[name15];
      if (ty != null && value13 instanceof ty) {
        return just(value13);
      }
    }
    var obj = value13;
    while (obj != null) {
      var proto = Object.getPrototypeOf(obj);
      var constructorName = proto.constructor.name;
      if (constructorName === name15) {
        return just(value13);
      } else if (constructorName === "Object") {
        return nothing;
      }
      obj = proto;
    }
    return nothing;
  }

  // output/Web.Internal.FFI/index.js
  var unsafeReadProtoTagged = function(name15) {
    return function(value13) {
      return _unsafeReadProtoTagged(Nothing.value, Just.create, name15, value13);
    };
  };

  // output/Web.HTML.HTMLInputElement/index.js
  var fromEventTarget = /* @__PURE__ */ unsafeReadProtoTagged("HTMLInputElement");

  // output/Pha.Html.Events/index.js
  var pure5 = /* @__PURE__ */ pure(applicativeEffect);
  var bind4 = /* @__PURE__ */ bind(bindMaybe);
  var map4 = /* @__PURE__ */ map(functorEffect);
  var map1 = /* @__PURE__ */ map(functorFn);
  var pointerCoerce = unsafeCoerce2;
  var on2 = unsafeOnWithEffect;
  var onChecked = function(f) {
    var fn = function(ev) {
      var v = bind4(currentTarget(ev))(fromEventTarget);
      if (v instanceof Nothing) {
        return pure5(Nothing.value);
      }
      ;
      if (v instanceof Just) {
        return map4(map1(Just.create)(f))(checked2(v.value0));
      }
      ;
      throw new Error("Failed pattern match at Pha.Html.Events (line 70, column 9 - line 72, column 66): " + [v.constructor.name]);
    };
    return on2("change")(fn);
  };
  var onClick = function(handler) {
    return on2("click")(function($17) {
      return pure5(Just.create(handler($17)));
    });
  };
  var onPointerEnter = function(handler) {
    return on2("pointerenter")(function($19) {
      return pure5(Just.create(handler(pointerCoerce($19))));
    });
  };
  var onPointerLeave = function(handler) {
    return on2("pointerleave")(function($20) {
      return pure5(Just.create(handler(pointerCoerce($20))));
    });
  };
  var onValueChange = function(f) {
    var fn = function(ev) {
      var v = bind4(currentTarget(ev))(fromEventTarget);
      if (v instanceof Nothing) {
        return pure5(Nothing.value);
      }
      ;
      if (v instanceof Just) {
        return map4(map1(Just.create)(f))(value2(v.value0));
      }
      ;
      throw new Error("Failed pattern match at Pha.Html.Events (line 62, column 9 - line 64, column 64): " + [v.constructor.name]);
    };
    return on2("change")(fn);
  };

  // output/Pha.Html.Util/index.js
  var show12 = /* @__PURE__ */ show(showNumber);
  var translate = function(x3) {
    return function(y3) {
      return "translate(" + (x3 + ("," + (y3 + ")")));
    };
  };
  var px = function(x3) {
    return show12(x3) + "px";
  };
  var pc = function(x3) {
    return show12(x3 * 100) + "%";
  };

  // output/Neuron.View/index.js
  var show3 = /* @__PURE__ */ show(showInt);
  var show13 = /* @__PURE__ */ show(showNumber);
  var mapFlipped4 = /* @__PURE__ */ mapFlipped(functorArray);
  var div3 = /* @__PURE__ */ div(euclideanRingInt);
  var mod3 = /* @__PURE__ */ mod(euclideanRingInt);
  var eq2 = /* @__PURE__ */ eq(/* @__PURE__ */ eqMaybe(eqInt));
  var bind5 = /* @__PURE__ */ bind(bindArray);
  var pure6 = /* @__PURE__ */ pure(applicativeArray);
  var map5 = /* @__PURE__ */ map(functorArray);
  var showNeuron = function(k) {
    return div2([class_("inline-block w-8 h-8")])([svg([class_("w-full h-full")])([use([href("#neuron-" + show3(k))])])]);
  };
  var patternColor = function(v) {
    if (v === 0) {
      return "#A3E635";
    }
    ;
    if (v === 1) {
      return "#60A5FA";
    }
    ;
    if (v === 2) {
      return "#EC4899";
    }
    ;
    return "#FACC15";
  };
  var inputNumberClass = "text-white inline-block w-48 border text-4xl rounded-lg p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500";
  var drawRulerSymbol = function(x3) {
    return function(y3) {
      return function(color) {
        return g([style("transform")(translate(px(x3 * 100))(px(25 - y3 * 5)))])([rect([x(-2.5), y(0), width("5"), height("5"), fill(patternColor(color))]), text_(show3(color * 3 | 0))([x(-1), y(4.5), attr("font-size")("0.3rem")])]);
      };
    };
  };
  var drawRuler = function(small) {
    return function(res) {
      return div2([class_("border " + function() {
        if (small) {
          return "w-[40vw]";
        }
        ;
        return "w-[75vw]";
      }())])([svg([viewBox(-10 | 0)(0)(120)(30)])([rect([x(-10), y(0), width("120"), height("40"), fill("#B0FFB0")]), rect([x(-10), y(0), width(show13(7.5 + res.zero * 100)), height("40"), fill("#FFB0B0")]), g([])(mapFlipped4(res.graduation)(function(v) {
        return line([x1(v.x * 100 - 2.5), x2(v.x * 100 - 2.5), y1(0), y1(30), strokeWidth(0.2), stroke("#808080"), strokeDasharray("0.5")]);
      })), g([])(mapFlipped4(res.symbols)(function(v) {
        return drawRulerSymbol(v.x)(v.y)(v.symbol);
      }))])]);
    };
  };
  var drawPattern = function(selectedCaptor) {
    return function(v) {
      return div2([class_("overflow-hidden relative border-4 border-slate-400 m-2 w-64 h-96"), onClick(function(v1) {
        return new OpenDialog(EditorDialog.value);
      })])(mapWithIndex2(function(i) {
        return function(b) {
          var row = div3(i)(6);
          var col = mod3(i)(6);
          var capt = eq2(new Just(div3(row)(3) + 3 | 0))(selectedCaptor) || eq2(new Just(div3(col)(2)))(selectedCaptor);
          return div2([class_("absolute pointer-events-none pattern-pixel"), class$prime("black")(b), class$prime("selected")(capt), style("width")("16.66666666%"), style("height")("11.1111111111%"), style("left")(pc(toNumber(col) / 6)), style("top")(pc(toNumber(row) / 9))])([]);
        };
      })(v.pattern));
    };
  };
  var drawOutputLine = function(i) {
    return line([y1(20 + 20 * toNumber(i)), y2(20 + 20 * toNumber(i)), x1(105), x2(120), strokeWidth(0.5), stroke("white")]);
  };
  var drawNeuron = function(i) {
    return use([href("#neuron-" + show3(i)), x(-3), y(-3), width("6"), height("6"), class_("pointer-events-none")]);
  };
  var drawMiniPattern = function(index5) {
    return function(isCurrent) {
      return function(v) {
        return div2([class_("overflow-hidden relative border-4 border-slate-400 m-2 w-24 h-36"), class_(function() {
          if (isCurrent) {
            return "border-green-500";
          }
          ;
          return "border-slate-400";
        }()), onClick(function(v1) {
          return new SelectPattern(index5);
        })])(mapWithIndex2(function(i) {
          return function(b) {
            var row = div3(i)(6);
            var color = function() {
              if (!b) {
                return "bg-white";
              }
              ;
              if (v.symbol === 0) {
                return "bg-green-400";
              }
              ;
              if (v.symbol === 1) {
                return "bg-blue-400";
              }
              ;
              if (v.symbol === 2) {
                return "bg-pink-500";
              }
              ;
              return "bg-yellow-400";
            }();
            var col = mod3(i)(6);
            return div2([class_("absolute " + color), style("width")("16.66666666%"), style("height")("11.1111111111%"), style("left")(pc(toNumber(col) / 6)), style("top")(pc(toNumber(row) / 9))])([]);
          };
        })(v.pattern));
      };
    };
  };
  var drawLine = function(layer) {
    return function(row) {
      return function(layer$prime) {
        return function(row$prime) {
          return line([y1(function() {
            var $83 = layer <= 1;
            if ($83) {
              return 10 + 15 * toNumber(row);
            }
            ;
            return 20 + 20 * toNumber(row);
          }()), y2(function() {
            var $84 = layer$prime <= 1;
            if ($84) {
              return 10 + 15 * toNumber(row$prime);
            }
            ;
            return 20 + 20 * toNumber(row$prime);
          }()), x1(function() {
            var $85 = layer === 0;
            if ($85) {
              return 15;
            }
            ;
            var $86 = layer === 1;
            if ($86) {
              return 60;
            }
            ;
            return 105;
          }()), x2(function() {
            var $87 = layer$prime === 0;
            if ($87) {
              return 15;
            }
            ;
            var $88 = layer$prime === 1;
            if ($88) {
              return 60;
            }
            ;
            return 105;
          }()), strokeWidth(0.5), stroke("white")]);
        };
      };
    };
  };
  var drawInputLine = function(i) {
    return line([y1(10 + 15 * toNumber(i)), y2(10 + 15 * toNumber(i)), x1(0), x2(15), strokeWidth(0.5), stroke("white")]);
  };
  var checkboxClass = "w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600";
  var buttonClass = "text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800";
  var neuronDialog = function(v) {
    return function(i) {
      return function(j) {
        var title2 = "Neurone " + function() {
          if (i === 1 && j === 0) {
            return "A";
          }
          ;
          if (i === 1 && j === 1) {
            return "B";
          }
          ;
          if (i === 1 && j === 2) {
            return "C";
          }
          ;
          if (i === 1 && j === 3) {
            return "D";
          }
          ;
          if (i === 1 && j === 4) {
            return "E";
          }
          ;
          if (i === 1 && j === 5) {
            return "F";
          }
          ;
          if (i === 2 && j === 0) {
            return "vert";
          }
          ;
          if (i === 2 && j === 1) {
            return "bleu";
          }
          ;
          if (i === 2 && j === 2) {
            return "rose";
          }
          ;
          return "jaune";
        }();
        var st = indexImpl2(v.states)(v.currentState);
        var threshold = function() {
          var $94 = i === 1;
          if ($94) {
            return indexImpl2(st.hiddenThresholds)(j);
          }
          ;
          return indexImpl2(st.finalThresholds)(j);
        }();
        var weights = function() {
          var $95 = i === 1;
          if ($95) {
            return indexImpl2(st.hiddenWeights)(j);
          }
          ;
          return indexImpl2(st.finalWeights)(j);
        }();
        var ruler = drawRuler(false)(rulerPositions(v.patterns)(st)(i)(j));
        var drawCalculus = div2([class_("text-4xl")])([function() {
          if (v.editMode) {
            return span2([])(intersperse(span2([class_("text-4xl mx-4")])([text("+")]))(mapWithIndex2(function(k) {
              return function(weight) {
                return span2([])([input([class_(inputNumberClass), type_2("number"), value(show13(weight)), onValueChange(ChangeWeight.create(i)(j)(k))]), showNeuron(function() {
                  var $97 = i === 2;
                  if ($97) {
                    return 6;
                  }
                  ;
                  return 0;
                }() + k | 0)]);
              };
            })(weights)));
          }
          ;
          return span2([])(concat(mapWithIndex2(function(k) {
            return function(v1) {
              return [text(function() {
                var $99 = k > 0 && v1.weight > 0;
                if ($99) {
                  return "+";
                }
                ;
                return "";
              }() + function() {
                var $100 = v1.weight === 1;
                if ($100) {
                  return "";
                }
                ;
                var $101 = v1.weight === -1;
                if ($101) {
                  return "-";
                }
                ;
                return toStringWith(fixed(3))(v1.weight);
              }()), showNeuron(function() {
                var $102 = i === 2;
                if ($102) {
                  return 6;
                }
                ;
                return 0;
              }() + v1.index | 0)];
            };
          })(filter(function(v1) {
            return v1.weight !== 0;
          })(mapWithIndex2(function(index5) {
            return function(weight) {
              return {
                index: index5,
                weight
              };
            };
          })(weights)))));
        }(), br, text("Seuil: "), function() {
          if (v.editMode) {
            return input([class_(inputNumberClass), type_2("number"), value(show13(threshold)), onValueChange(ChangeThreshold.create(i)(j))]);
          }
          ;
          return text(show13(threshold));
        }()]);
        var body = div2([class_("flex flex-col")])([drawCalculus, ruler, div2([class_("text-4xl")])([text("Nombre d'it\xE9rations: " + show3(st.iter)), when2(length(v.states) > 1)(function(v1) {
          return input([class_("h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"), type_2("range"), min3(0), max4(length(v.states) - 1 | 0), value(show3(v.currentState)), onValueChange(ChangeCurrentState.create)]);
        })])]);
        return div2([class_("absolute w-full h-full flex items-center justify-center bg-transp-grey inset-0 z-50")])([div2([class_("bg-black text-white rounded block border-2")])([div2([class_("p-4 min-h-8 border-b-2")])([div2([class_("text-4xl font-medium inline-block")])([text(title2)])]), div2([class_("p-6 border-b-2")])([body]), div2([class_("p-4 text-right")])([button([class_(buttonClass + " mr-4"), onClick(function(v1) {
          return ToggleEditMode.value;
        })])([text("Editer")]), button([class_(buttonClass + " mr-4"), onClick(function(v1) {
          return RunLearning.value;
        })])([text("Apprendre")]), button([class_(buttonClass), onClick(function(v1) {
          return new OpenDialog(NoDialog.value);
        })])([text("Ok")])])])]);
      };
    };
  };
  var showEditor = function(v) {
    var editor = maybe2(index(v.patterns)(v.currentPattern))(function(v1) {
      return div2([class_("m-2 overflow-hidden relative border-4 w-64 h-96")])(mapWithIndex2(function(i) {
        return function(b) {
          var row = div3(i)(6);
          var col = mod3(i)(6);
          return div2([class_("absolute pattern-pixel"), class$prime("black")(b), style("width")("16.66666666%"), style("height")("11.1111111111%"), style("left")(pc(toNumber(col) / 6)), style("top")(pc(toNumber(row) / 9)), onClick(function(v2) {
            return new ChangePixel(i);
          })])([]);
        };
      })(v1.pattern));
    });
    var body = div2([class_("flex flex-row items-center gap-8")])([editor, div2([class_("grid grid-cols-6 gap-2")])(mapWithIndex2(function(i) {
      return function(pattern2) {
        return div2([class_("flex flex-col items-center")])([label([class_("relative inline-flex items-center cursor-pointer")])([input([type_2("checkbox"), checked(pattern2.selected), class_("sr-only peer"), onChecked(function(v1) {
          return new TogglePattern(i);
        })]), div2([class_(checkboxClass)])([])]), drawMiniPattern(i)(i === v.currentPattern)(pattern2)]);
      };
    })(v.patterns))]);
    return div2([class_("absolute w-full h-full flex items-center justify-center bg-transp-grey inset-0 z-50")])([div2([class_("bg-black text-white rounded block border-2")])([div2([class_("p-4 min-h-8 border-b-2")])([div2([class_("text-4xl font-medium inline-block")])([text("Modifier le motif")])]), div2([class_("p-6 border-b-2")])([body]), div2([class_("p-4 text-right")])([button([class_(buttonClass + " mr-4"), onClick(function(v1) {
      return ResetPattern.value;
    })])([text("R\xE9initialiser")]), button([class_(buttonClass), onClick(function(v1) {
      return new OpenDialog(NoDialog.value);
    })])([text("Ok")])])])]);
  };
  var allNeuronsDialog = function(v) {
    var st = indexImpl2(v.states)(v.currentState);
    var body = div2([class_("flex flex-col")])([div2([class_("grid grid-cols-2 gap-8")])(mapFlipped4([0, 1, 2, 3])(function() {
      var $136 = drawRuler(true);
      var $137 = rulerPositions(v.patterns)(st)(2);
      return function($138) {
        return $136($137($138));
      };
    }())), div2([class_("h-24 mt-12 text-4xl grid grid-cols-2 gap-8")])([text("Nombre d'it\xE9rations: " + show3(st.iter)), when2(length(v.states) > 1)(function(v1) {
      return div2([])([button([class_(buttonClass), onClick(function(v2) {
        return RunSimulation.value;
      })])([text("Lancer")]), input([class_("h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"), type_2("range"), min3(0), max4(length(v.states) - 1 | 0), value(show3(v.currentState)), onValueChange(ChangeCurrentState.create)])]);
    })])]);
    return div2([class_("absolute w-full h-full flex items-center justify-center bg-transp-grey inset-0 z-50")])([div2([class_("bg-black text-white rounded block border-2")])([div2([class_("p-4 min-h-8 border-b-2")])([div2([class_("text-4xl font-medium inline-block")])([text("Neurones de sortie")])]), div2([class_("p-6 border-b-2")])([body]), div2([class_("p-4 text-right")])([button([class_(buttonClass + " mr-4"), onClick(function(v1) {
      return RunLearning.value;
    })])([text("Apprendre")]), button([class_(buttonClass), onClick(function(v1) {
      return new OpenDialog(NoDialog.value);
    })])([text("Ok")])])])]);
  };
  var view = function(v) {
    var v1 = indexImpl2(v.states)(v.currentState);
    var v2 = indexImpl2(v1.output)(v.currentPattern);
    var showNetwork = svg([viewBox(0)(0)(150)(100)])([g([])(concat(mapWithIndex2(function(i) {
      return mapWithIndex2(function(j) {
        return function(v3) {
          return when2(v3)(function(v4) {
            return drawLine(0)(j)(1)(i);
          });
        };
      });
    })(mask))), g([])(bind5(range(0)(5))(function(i) {
      return bind5(range(0)(3))(function(j) {
        return pure6(drawLine(1)(i)(2)(j));
      });
    })), g([])(map5(drawInputLine)(range(0)(5))), g([])(map5(drawOutputLine)(range(0)(3))), g([])(mapFlipped4(range(0)(5))(function(i) {
      return g([style("transform")(translate(pc(0.1))(pc(0.1 + 0.15 * toNumber(i))))])([circle([r(5), onPointerEnter(function(v3) {
        return new SelectInput(new Just(i));
      }), onPointerLeave(function(v3) {
        return new SelectInput(Nothing.value);
      }), fill("white")]), drawNeuron(i)]);
    })), g([])(mapFlipped4(range(0)(5))(function(i) {
      return g([style("transform")(translate(pc(0.4))(pc(0.1 + 0.15 * toNumber(i))))])([circle([r(5), fill("white"), onClick(function(v3) {
        return new OpenDialog(new NeuronDialog(1, i));
      })]), drawNeuron(6 + i | 0)]);
    })), g([])(mapWithIndex2(function(i) {
      return function(value13) {
        return g([style("transform")(translate(pc(0.7))(pc(0.2 + 0.2 * toNumber(i))))])([circle([r(5), fill(patternColor(i)), onClick(function(v3) {
          return new OpenDialog(new NeuronDialog(2, i));
        })]), function() {
          var $124 = value13 > 0;
          if ($124) {
            return text_("\u2713")([x(20), attr("font-size")("0.4rem"), stroke("green")]);
          }
          ;
          return text_("\u2A2F")([x(20), attr("font-size")("0.4rem"), stroke("red")]);
        }()]);
      };
    })(v2["final"]))]);
    return div2([class_("w-full min-h-full bg-black")])([div2([class_("flex flew-row")])([div2([class_("w-1/4")])([drawPattern(v.selectedInput)(indexImpl2(v.patterns)(v.currentPattern)), button([class_(buttonClass), onClick(function(v3) {
      return new OpenDialog(AllNeuronsDialog.value);
    })])([text("Afficher les r\xE9glettes")]), button([class_(buttonClass), onClick(function(v3) {
      return Reset.value;
    })])([text("R\xE9initialiser")])]), div2([class_("w-3/4 relative")])([showNetwork])]), function() {
      if (v.dialog instanceof NoDialog) {
        return empty6;
      }
      ;
      if (v.dialog instanceof EditorDialog) {
        return showEditor(v);
      }
      ;
      if (v.dialog instanceof NeuronDialog) {
        return neuronDialog(v)(v.dialog.value0)(v.dialog.value1);
      }
      ;
      if (v.dialog instanceof AllNeuronsDialog) {
        return allNeuronsDialog(v);
      }
      ;
      throw new Error("Failed pattern match at Neuron.View (line 382, column 7 - line 386, column 51): " + [v.dialog.constructor.name]);
    }()]);
  };

  // output/Pha.App.Internal/foreign.js
  var TEXT_NODE = 3;
  var merge = (a, b) => Object.assign({}, a, b);
  var compose2 = (f, g2) => f && g2 ? (x3) => f(g2(x3)) : f || g2;
  var patchProperty = (node, key, oldValue, newValue, listener, isSvg, mapf) => {
    if (key === "style") {
      for (let k in merge(oldValue, newValue)) {
        oldValue = newValue == null || newValue[k] == null ? "" : newValue[k];
        if (k[0] === "-") {
          node[key].setProperty(k, oldValue);
        } else {
          node[key][k] = oldValue;
        }
      }
    } else if (key[0] === "o" && key[1] === "n") {
      const key2 = key.slice(2);
      if (!node.actions)
        node.actions = {};
      node.actions[key2] = mapf && newValue ? mapf(newValue) : newValue;
      if (!newValue) {
        node.removeEventListener(key2, listener);
      } else if (!oldValue) {
        node.addEventListener(key2, listener);
      }
    } else if (!isSvg && key in node) {
      node[key] = newValue;
    } else if (newValue == null || newValue === false || key === "class" && !newValue) {
      node.removeAttribute(key);
    } else {
      node.setAttribute(key, newValue);
    }
  };
  var createNode = (vnode, listener, isSvg, mapf) => {
    const node = vnode.type === TEXT_NODE ? document.createTextNode(vnode.tag) : (isSvg = isSvg || vnode.tag === "svg") ? document.createElementNS("http://www.w3.org/2000/svg", vnode.tag) : document.createElement(vnode.tag);
    const props = vnode.props;
    const mapf2 = compose2(mapf, vnode.mapf);
    for (let k in props) {
      patchProperty(node, k, null, props[k], listener, isSvg, mapf2);
    }
    for (let i = 0, len = vnode.children.length; i < len; i++) {
      node.appendChild(
        createNode(
          getVNode(vnode.children[i])[1],
          listener,
          isSvg,
          mapf2
        )
      );
    }
    vnode.node = node;
    return node;
  };
  var getKey = (keyednode) => keyednode && keyednode[0];
  var patch = (parent2, node, oldVNode, newVNode, listener, isSvg, mapf) => {
    if (oldVNode === newVNode) {
    } else if (oldVNode != null && oldVNode.type === TEXT_NODE && newVNode.type === TEXT_NODE) {
      if (oldVNode.tag !== newVNode.tag)
        node.nodeValue = newVNode.tag;
    } else if (oldVNode == null || oldVNode.tag !== newVNode.tag) {
      node = parent2.insertBefore(
        createNode(newVNode, listener, isSvg, mapf),
        node
      );
      if (oldVNode && oldVNode.node) {
        parent2.removeChild(oldVNode.node);
      }
    } else {
      const oldVProps = oldVNode.props;
      const newVProps = newVNode.props;
      const oldVKids = oldVNode.children;
      const newVKids = newVNode.children;
      let oldHead = 0;
      let newHead = 0;
      let oldTail = oldVKids.length - 1;
      let newTail = newVKids.length - 1;
      mapf = compose2(mapf, newVNode.mapf);
      isSvg = isSvg || newVNode.tag === "svg";
      for (let i in merge(oldVProps, newVProps)) {
        if ((i === "value" || i === "selected" || i === "checked" ? node[i] : oldVProps[i]) !== newVProps[i]) {
          patchProperty(node, i, oldVProps[i], newVProps[i], listener, isSvg, mapf);
        }
      }
      if (!newVNode.keyed) {
        for (let i = 0; i <= oldTail && i <= newTail; i++) {
          const oldVNode2 = oldVKids[i][1];
          const newVNode2 = getVNode(newVKids[i], oldVNode2)[1];
          patch(node, oldVNode2.node, oldVNode2, newVNode2, listener, isSvg, mapf);
        }
        for (let i = oldTail + 1; i <= newTail; i++) {
          const newVNode2 = getVNode(newVKids[i], oldVNode)[1];
          node.appendChild(
            createNode(newVNode2, listener, isSvg, mapf)
          );
        }
        for (let i = newTail + 1; i <= oldTail; i++) {
          node.removeChild(oldVKids[i][1].node);
        }
      } else {
        while (newHead <= newTail && oldHead <= oldTail) {
          const [oldKey, oldVNode2] = oldVKids[oldHead];
          if (oldKey !== newVKids[newHead][0])
            break;
          const newKNode = getVNode(newVKids[newHead], oldVNode2);
          patch(node, oldVNode2.node, oldVNode2, newKNode[1], listener, isSvg, mapf);
          newHead++;
          oldHead++;
        }
        while (newHead <= newTail && oldHead <= oldTail) {
          const [oldKey, oldVNode2] = oldVKids[oldTail];
          if (oldKey !== newVKids[newTail][0])
            break;
          const newKNode = getVNode(newVKids[newTail], oldVNode2);
          patch(node, oldVNode2.node, oldVNode2, newKNode[1], listener, isSvg, mapf);
          newTail--;
          oldTail--;
        }
        if (oldHead > oldTail) {
          while (newHead <= newTail) {
            const newVNode2 = getVNode(newVKids[newHead])[1];
            node.insertBefore(
              createNode(newVNode2, listener, isSvg, mapf),
              oldVKids[oldHead] && oldVKids[oldHead][1].node
            );
            newHead++;
          }
        } else if (newHead > newTail) {
          while (oldHead <= oldTail) {
            node.removeChild(oldVKids[oldHead][1].node);
            oldHead++;
          }
        } else {
          const keyed2 = {};
          const newKeyed = {};
          for (let i = oldHead; i <= oldTail; i++) {
            keyed2[oldVKids[i][0]] = oldVKids[i][1];
          }
          while (newHead <= newTail) {
            const [oldKey, oldVKid] = oldVKids[oldHead];
            const [newKey, newVKid] = getVNode(newVKids[newHead], oldVKid);
            if (newKeyed[oldKey] || newKey === getKey(oldVKids[oldHead + 1])) {
              oldHead++;
              continue;
            }
            if (oldKey === newKey) {
              patch(node, oldVKid.node, oldVKid, newVKid, listener, isSvg, mapf);
              newKeyed[newKey] = true;
              oldHead++;
            } else {
              const vkid = keyed2[newKey];
              if (vkid != null) {
                patch(
                  node,
                  node.insertBefore(vkid.node, oldVKid.node),
                  vkid,
                  newVKids[newHead][1],
                  listener,
                  isSvg,
                  mapf
                );
                newKeyed[newKey] = true;
              } else {
                patch(node, oldVKid.node, null, newVKids[newHead][1], listener, isSvg, mapf);
              }
            }
            newHead++;
          }
          for (let i in keyed2) {
            if (!newKeyed[i]) {
              node.removeChild(keyed2[i].node);
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
  var evalMemo = (f, memo) => memo.reduce((g2, v) => g2(v), f);
  var getVNode = (newVNode, oldVNode) => {
    if (typeof newVNode[1].type === "function") {
      if (!oldVNode || oldVNode.memo == null || propsChanged(oldVNode.memo, newVNode[1].memo)) {
        oldVNode = copyVNode(evalMemo(newVNode[1].type, newVNode[1].memo));
        oldVNode.memo = newVNode[1].memo;
      }
      newVNode[1] = oldVNode;
    }
    return newVNode;
  };
  var copyVNode = (vnode) => Object.assign({}, vnode, { children: vnode.children && vnode.children.map(([k, v]) => [k, copyVNode(v)]) });
  var getAction = (target5) => (type) => () => target5.actions[type];
  var unsafePatch = (parent2) => (node) => (oldVDom) => (newVDom) => (listener) => () => patch(parent2, node, oldVDom, newVDom, (e) => listener(e)());

  // output/Unsafe.Reference/foreign.js
  function reallyUnsafeRefEq(a) {
    return function(b) {
      return a === b;
    };
  }

  // output/Unsafe.Reference/index.js
  var unsafeRefEq = reallyUnsafeRefEq;

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
  var getEffProp = function(name15) {
    return function(node) {
      return function() {
        return node[name15];
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
  var map6 = /* @__PURE__ */ map(functorEffect);
  var querySelector = function(qs) {
    var $2 = map6(toMaybe);
    var $3 = _querySelector(qs);
    return function($4) {
      return $2($3($4));
    };
  };

  // output/Web.DOM.Element/index.js
  var toNode = unsafeCoerce2;

  // output/Web.DOM.Node/foreign.js
  var getEffProp2 = function(name15) {
    return function(node) {
      return function() {
        return node[name15];
      };
    };
  };
  var baseURI = getEffProp2("baseURI");
  var _ownerDocument = getEffProp2("ownerDocument");
  var _parentNode = getEffProp2("parentNode");
  var _parentElement = getEffProp2("parentElement");
  var childNodes = getEffProp2("childNodes");
  var _firstChild = getEffProp2("firstChild");
  var _lastChild = getEffProp2("lastChild");
  var _previousSibling = getEffProp2("previousSibling");
  var _nextSibling = getEffProp2("nextSibling");
  var _nodeValue = getEffProp2("nodeValue");
  var textContent = getEffProp2("textContent");

  // output/Web.DOM.Node/index.js
  var map7 = /* @__PURE__ */ map(functorEffect);
  var parentNode = /* @__PURE__ */ function() {
    var $6 = map7(toMaybe);
    return function($7) {
      return $6(_parentNode($7));
    };
  }();

  // output/Web.HTML/foreign.js
  var windowImpl = function() {
    return window;
  };

  // output/Web.HTML.HTMLDocument/index.js
  var toParentNode = unsafeCoerce2;

  // output/Web.HTML.Window/foreign.js
  function document2(window2) {
    return function() {
      return window2.document;
    };
  }

  // output/Pha.App/index.js
  var $runtime_lazy5 = function(name15, moduleName, init3) {
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
  var bind6 = /* @__PURE__ */ bind(bindAff);
  var liftEffect2 = /* @__PURE__ */ liftEffect(monadEffectAff);
  var discard3 = /* @__PURE__ */ discard(discardUnit);
  var discard1 = /* @__PURE__ */ discard3(bindAff);
  var pure7 = /* @__PURE__ */ pure(applicativeAff);
  var bind12 = /* @__PURE__ */ bind(bindEffect);
  var unless2 = /* @__PURE__ */ unless(applicativeEffect);
  var for_2 = /* @__PURE__ */ for_(applicativeEffect);
  var for_1 = /* @__PURE__ */ for_2(foldableMaybe);
  var for_22 = /* @__PURE__ */ for_2(foldableArray);
  var mapFlipped5 = /* @__PURE__ */ mapFlipped(functorEffect);
  var map8 = /* @__PURE__ */ map(functorEffect);
  var map12 = /* @__PURE__ */ map(functorMaybe);
  var interpret = function(dictMonad) {
    var runFreeM2 = runFreeM(functorUpdateF(dictMonad.Bind1().Apply0().Functor0()))(monadRecAff);
    return function(v) {
      return function($$eval) {
        return function(v1) {
          var go2 = function(v2) {
            if (v2 instanceof State) {
              return bind6(liftEffect2(v.get))(function(st) {
                var v3 = v2.value0(st);
                return discard1(liftEffect2(v.put(v3.value1)))(function() {
                  return pure7(v3.value0);
                });
              });
            }
            ;
            if (v2 instanceof Lift) {
              return $$eval(v2.value0);
            }
            ;
            throw new Error("Failed pattern match at Pha.App (line 89, column 5 - line 93, column 15): " + [v2.constructor.name]);
          };
          return runFreeM2(go2)(v1);
        };
      };
    };
  };
  var app$prime = function(v) {
    var go2 = function(state3) {
      return function(node) {
        return function(vdom) {
          var getState = read(state3);
          var setState = function(newState) {
            return function __do() {
              var oldState = read(state3)();
              return unless2(unsafeRefEq(oldState)(newState))(function __do2() {
                write(newState)(state3)();
                return render(v.view(newState))();
              })();
            };
          };
          var render = function(newVDom) {
            return function __do() {
              var oldVDom = read(vdom)();
              var node1 = read(node)();
              var pnode = parentNode(node1)();
              return for_1(pnode)(function(pnode$prime) {
                var vdom2 = copyVNode(newVDom);
                return function __do2() {
                  var node2 = unsafePatch(pnode$prime)(node1)(oldVDom)(vdom2)(listener)();
                  write(node2)(node)();
                  return write(vdom2)(vdom)();
                };
              })();
            };
          };
          var listener = function(e) {
            var v1 = type_(e);
            return for_1(currentTarget(e))(function(target5) {
              return function __do() {
                var fn = getAction(target5)(v1)();
                return dispatchEvent(e)(fn)();
              };
            });
          };
          var dispatchEvent = function(ev) {
            return function(handler) {
              return function __do() {
                var msg = handler(ev)();
                return for_1(msg)($lazy_dispatch(75))();
              };
            };
          };
          var $lazy_dispatch = $runtime_lazy5("dispatch", "Pha.App", function() {
            return v.update({
              get: getState,
              put: function(s) {
                return setState(s);
              }
            });
          });
          var dispatch = $lazy_dispatch(68);
          return function __do() {
            render(v.view(v.init.state))();
            for_22(v.subscriptions)(function(v1) {
              return v1(dispatch);
            })();
            return for_1(v.init.action)(dispatch)();
          };
        };
      };
    };
    return function __do() {
      var parentNode2 = mapFlipped5(bind12(windowImpl)(document2))(toParentNode)();
      var selected2 = map8(map12(toNode))(querySelector(v.selector)(parentNode2))();
      return for_1(selected2)(function(node_) {
        return function __do2() {
          var state3 = $$new(v.init.state)();
          var node = $$new(node_)();
          var vdom = $$new(text(""))();
          return go2(state3)(node)(vdom)();
        };
      })();
    };
  };
  var app = function(dictMonad) {
    var interpret1 = interpret(dictMonad);
    return function(v) {
      var update$prime = function(helpers) {
        return function(msg) {
          return launchAff_(interpret1(helpers)(v["eval"])(v.update(msg)));
        };
      };
      return app$prime({
        init: v.init,
        view: v.view,
        subscriptions: v.subscriptions,
        selector: v.selector,
        update: update$prime
      });
    };
  };

  // output/Main/index.js
  var main = /* @__PURE__ */ function() {
    return app(monadAff)({
      init: {
        state: init2,
        action: Nothing.value
      },
      "eval": identity(categoryFn),
      view,
      update: update3,
      subscriptions: [],
      selector: "#root"
    });
  }();

  // <stdin>
  main();
})();
