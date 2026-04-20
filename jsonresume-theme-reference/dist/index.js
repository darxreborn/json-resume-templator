function _c(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var fu = { exports: {} }, Yi = {}, Ns = { exports: {} }, Ve = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pu;
function Pc() {
  if (Pu) return Ve;
  Pu = 1;
  var r = Symbol.for("react.element"), a = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), N = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), R = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), O = Symbol.iterator;
  function se($) {
    return $ === null || typeof $ != "object" ? null : ($ = O && $[O] || $["@@iterator"], typeof $ == "function" ? $ : null);
  }
  var B = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, K = Object.assign, be = {};
  function Z($, U, Te) {
    this.props = $, this.context = U, this.refs = be, this.updater = Te || B;
  }
  Z.prototype.isReactComponent = {}, Z.prototype.setState = function($, U) {
    if (typeof $ != "object" && typeof $ != "function" && $ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, $, U, "setState");
  }, Z.prototype.forceUpdate = function($) {
    this.updater.enqueueForceUpdate(this, $, "forceUpdate");
  };
  function L() {
  }
  L.prototype = Z.prototype;
  function de($, U, Te) {
    this.props = $, this.context = U, this.refs = be, this.updater = Te || B;
  }
  var Pe = de.prototype = new L();
  Pe.constructor = de, K(Pe, Z.prototype), Pe.isPureReactComponent = !0;
  var ee = Array.isArray, ne = Object.prototype.hasOwnProperty, re = { current: null }, G = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ue($, U, Te) {
    var ke, me = {}, ye = null, Ie = null;
    if (U != null) for (ke in U.ref !== void 0 && (Ie = U.ref), U.key !== void 0 && (ye = "" + U.key), U) ne.call(U, ke) && !G.hasOwnProperty(ke) && (me[ke] = U[ke]);
    var Ae = arguments.length - 2;
    if (Ae === 1) me.children = Te;
    else if (1 < Ae) {
      for (var we = Array(Ae), Fe = 0; Fe < Ae; Fe++) we[Fe] = arguments[Fe + 2];
      me.children = we;
    }
    if ($ && $.defaultProps) for (ke in Ae = $.defaultProps, Ae) me[ke] === void 0 && (me[ke] = Ae[ke]);
    return { $$typeof: r, type: $, key: ye, ref: Ie, props: me, _owner: re.current };
  }
  function ge($, U) {
    return { $$typeof: r, type: $.type, key: U, ref: $.ref, props: $.props, _owner: $._owner };
  }
  function er($) {
    return typeof $ == "object" && $ !== null && $.$$typeof === r;
  }
  function Ce($) {
    var U = { "=": "=0", ":": "=2" };
    return "$" + $.replace(/[=:]/g, function(Te) {
      return U[Te];
    });
  }
  var Ue = /\/+/g;
  function Ne($, U) {
    return typeof $ == "object" && $ !== null && $.key != null ? Ce("" + $.key) : U.toString(36);
  }
  function Ke($, U, Te, ke, me) {
    var ye = typeof $;
    (ye === "undefined" || ye === "boolean") && ($ = null);
    var Ie = !1;
    if ($ === null) Ie = !0;
    else switch (ye) {
      case "string":
      case "number":
        Ie = !0;
        break;
      case "object":
        switch ($.$$typeof) {
          case r:
          case a:
            Ie = !0;
        }
    }
    if (Ie) return Ie = $, me = me(Ie), $ = ke === "" ? "." + Ne(Ie, 0) : ke, ee(me) ? (Te = "", $ != null && (Te = $.replace(Ue, "$&/") + "/"), Ke(me, U, Te, "", function(Fe) {
      return Fe;
    })) : me != null && (er(me) && (me = ge(me, Te + (!me.key || Ie && Ie.key === me.key ? "" : ("" + me.key).replace(Ue, "$&/") + "/") + $)), U.push(me)), 1;
    if (Ie = 0, ke = ke === "" ? "." : ke + ":", ee($)) for (var Ae = 0; Ae < $.length; Ae++) {
      ye = $[Ae];
      var we = ke + Ne(ye, Ae);
      Ie += Ke(ye, U, Te, we, me);
    }
    else if (we = se($), typeof we == "function") for ($ = we.call($), Ae = 0; !(ye = $.next()).done; ) ye = ye.value, we = ke + Ne(ye, Ae++), Ie += Ke(ye, U, Te, we, me);
    else if (ye === "object") throw U = String($), Error("Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys($).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead.");
    return Ie;
  }
  function tr($, U, Te) {
    if ($ == null) return $;
    var ke = [], me = 0;
    return Ke($, ke, "", "", function(ye) {
      return U.call(Te, ye, me++);
    }), ke;
  }
  function _r($) {
    if ($._status === -1) {
      var U = $._result;
      U = U(), U.then(function(Te) {
        ($._status === 0 || $._status === -1) && ($._status = 1, $._result = Te);
      }, function(Te) {
        ($._status === 0 || $._status === -1) && ($._status = 2, $._result = Te);
      }), $._status === -1 && ($._status = 0, $._result = U);
    }
    if ($._status === 1) return $._result.default;
    throw $._result;
  }
  var fe = { current: null }, fr = { transition: null }, Ge = { ReactCurrentDispatcher: fe, ReactCurrentBatchConfig: fr, ReactCurrentOwner: re };
  function br() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ve.Children = { map: tr, forEach: function($, U, Te) {
    tr($, function() {
      U.apply(this, arguments);
    }, Te);
  }, count: function($) {
    var U = 0;
    return tr($, function() {
      U++;
    }), U;
  }, toArray: function($) {
    return tr($, function(U) {
      return U;
    }) || [];
  }, only: function($) {
    if (!er($)) throw Error("React.Children.only expected to receive a single React element child.");
    return $;
  } }, Ve.Component = Z, Ve.Fragment = u, Ve.Profiler = d, Ve.PureComponent = de, Ve.StrictMode = x, Ve.Suspense = E, Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ge, Ve.act = br, Ve.cloneElement = function($, U, Te) {
    if ($ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + $ + ".");
    var ke = K({}, $.props), me = $.key, ye = $.ref, Ie = $._owner;
    if (U != null) {
      if (U.ref !== void 0 && (ye = U.ref, Ie = re.current), U.key !== void 0 && (me = "" + U.key), $.type && $.type.defaultProps) var Ae = $.type.defaultProps;
      for (we in U) ne.call(U, we) && !G.hasOwnProperty(we) && (ke[we] = U[we] === void 0 && Ae !== void 0 ? Ae[we] : U[we]);
    }
    var we = arguments.length - 2;
    if (we === 1) ke.children = Te;
    else if (1 < we) {
      Ae = Array(we);
      for (var Fe = 0; Fe < we; Fe++) Ae[Fe] = arguments[Fe + 2];
      ke.children = Ae;
    }
    return { $$typeof: r, type: $.type, key: me, ref: ye, props: ke, _owner: Ie };
  }, Ve.createContext = function($) {
    return $ = { $$typeof: N, _currentValue: $, _currentValue2: $, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, $.Provider = { $$typeof: _, _context: $ }, $.Consumer = $;
  }, Ve.createElement = ue, Ve.createFactory = function($) {
    var U = ue.bind(null, $);
    return U.type = $, U;
  }, Ve.createRef = function() {
    return { current: null };
  }, Ve.forwardRef = function($) {
    return { $$typeof: V, render: $ };
  }, Ve.isValidElement = er, Ve.lazy = function($) {
    return { $$typeof: te, _payload: { _status: -1, _result: $ }, _init: _r };
  }, Ve.memo = function($, U) {
    return { $$typeof: R, type: $, compare: U === void 0 ? null : U };
  }, Ve.startTransition = function($) {
    var U = fr.transition;
    fr.transition = {};
    try {
      $();
    } finally {
      fr.transition = U;
    }
  }, Ve.unstable_act = br, Ve.useCallback = function($, U) {
    return fe.current.useCallback($, U);
  }, Ve.useContext = function($) {
    return fe.current.useContext($);
  }, Ve.useDebugValue = function() {
  }, Ve.useDeferredValue = function($) {
    return fe.current.useDeferredValue($);
  }, Ve.useEffect = function($, U) {
    return fe.current.useEffect($, U);
  }, Ve.useId = function() {
    return fe.current.useId();
  }, Ve.useImperativeHandle = function($, U, Te) {
    return fe.current.useImperativeHandle($, U, Te);
  }, Ve.useInsertionEffect = function($, U) {
    return fe.current.useInsertionEffect($, U);
  }, Ve.useLayoutEffect = function($, U) {
    return fe.current.useLayoutEffect($, U);
  }, Ve.useMemo = function($, U) {
    return fe.current.useMemo($, U);
  }, Ve.useReducer = function($, U, Te) {
    return fe.current.useReducer($, U, Te);
  }, Ve.useRef = function($) {
    return fe.current.useRef($);
  }, Ve.useState = function($) {
    return fe.current.useState($);
  }, Ve.useSyncExternalStore = function($, U, Te) {
    return fe.current.useSyncExternalStore($, U, Te);
  }, Ve.useTransition = function() {
    return fe.current.useTransition();
  }, Ve.version = "18.3.1", Ve;
}
var Zi = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Zi.exports;
var Iu;
function Ic() {
  return Iu || (Iu = 1, function(r, a) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var u = "18.3.1", x = Symbol.for("react.element"), d = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), R = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), se = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), be = Symbol.for("react.offscreen"), Z = Symbol.iterator, L = "@@iterator";
      function de(m) {
        if (m === null || typeof m != "object")
          return null;
        var T = Z && m[Z] || m[L];
        return typeof T == "function" ? T : null;
      }
      var Pe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ee = {
        transition: null
      }, ne = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, re = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, G = {}, ue = null;
      function ge(m) {
        ue = m;
      }
      G.setExtraStackFrame = function(m) {
        ue = m;
      }, G.getCurrentStack = null, G.getStackAddendum = function() {
        var m = "";
        ue && (m += ue);
        var T = G.getCurrentStack;
        return T && (m += T() || ""), m;
      };
      var er = !1, Ce = !1, Ue = !1, Ne = !1, Ke = !1, tr = {
        ReactCurrentDispatcher: Pe,
        ReactCurrentBatchConfig: ee,
        ReactCurrentOwner: re
      };
      tr.ReactDebugCurrentFrame = G, tr.ReactCurrentActQueue = ne;
      function _r(m) {
        {
          for (var T = arguments.length, F = new Array(T > 1 ? T - 1 : 0), M = 1; M < T; M++)
            F[M - 1] = arguments[M];
          fr("warn", m, F);
        }
      }
      function fe(m) {
        {
          for (var T = arguments.length, F = new Array(T > 1 ? T - 1 : 0), M = 1; M < T; M++)
            F[M - 1] = arguments[M];
          fr("error", m, F);
        }
      }
      function fr(m, T, F) {
        {
          var M = tr.ReactDebugCurrentFrame, q = M.getStackAddendum();
          q !== "" && (T += "%s", F = F.concat([q]));
          var ve = F.map(function(ce) {
            return String(ce);
          });
          ve.unshift("Warning: " + T), Function.prototype.apply.call(console[m], console, ve);
        }
      }
      var Ge = {};
      function br(m, T) {
        {
          var F = m.constructor, M = F && (F.displayName || F.name) || "ReactClass", q = M + "." + T;
          if (Ge[q])
            return;
          fe("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", T, M), Ge[q] = !0;
        }
      }
      var $ = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(m) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(m, T, F) {
          br(m, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(m, T, F, M) {
          br(m, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(m, T, F, M) {
          br(m, "setState");
        }
      }, U = Object.assign, Te = {};
      Object.freeze(Te);
      function ke(m, T, F) {
        this.props = m, this.context = T, this.refs = Te, this.updater = F || $;
      }
      ke.prototype.isReactComponent = {}, ke.prototype.setState = function(m, T) {
        if (typeof m != "object" && typeof m != "function" && m != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, m, T, "setState");
      }, ke.prototype.forceUpdate = function(m) {
        this.updater.enqueueForceUpdate(this, m, "forceUpdate");
      };
      {
        var me = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ye = function(m, T) {
          Object.defineProperty(ke.prototype, m, {
            get: function() {
              _r("%s(...) is deprecated in plain JavaScript React classes. %s", T[0], T[1]);
            }
          });
        };
        for (var Ie in me)
          me.hasOwnProperty(Ie) && ye(Ie, me[Ie]);
      }
      function Ae() {
      }
      Ae.prototype = ke.prototype;
      function we(m, T, F) {
        this.props = m, this.context = T, this.refs = Te, this.updater = F || $;
      }
      var Fe = we.prototype = new Ae();
      Fe.constructor = we, U(Fe, ke.prototype), Fe.isPureReactComponent = !0;
      function gr() {
        var m = {
          current: null
        };
        return Object.seal(m), m;
      }
      var Mr = Array.isArray;
      function We(m) {
        return Mr(m);
      }
      function Pr(m) {
        {
          var T = typeof Symbol == "function" && Symbol.toStringTag, F = T && m[Symbol.toStringTag] || m.constructor.name || "Object";
          return F;
        }
      }
      function at(m) {
        try {
          return Lr(m), !1;
        } catch {
          return !0;
        }
      }
      function Lr(m) {
        return "" + m;
      }
      function vt(m) {
        if (at(m))
          return fe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Pr(m)), Lr(m);
      }
      function Br(m, T, F) {
        var M = m.displayName;
        if (M)
          return M;
        var q = T.displayName || T.name || "";
        return q !== "" ? F + "(" + q + ")" : F;
      }
      function Hr(m) {
        return m.displayName || "Context";
      }
      function zr(m) {
        if (m == null)
          return null;
        if (typeof m.tag == "number" && fe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
          return m.displayName || m.name || null;
        if (typeof m == "string")
          return m;
        switch (m) {
          case _:
            return "Fragment";
          case d:
            return "Portal";
          case V:
            return "Profiler";
          case N:
            return "StrictMode";
          case O:
            return "Suspense";
          case se:
            return "SuspenseList";
        }
        if (typeof m == "object")
          switch (m.$$typeof) {
            case R:
              var T = m;
              return Hr(T) + ".Consumer";
            case E:
              var F = m;
              return Hr(F._context) + ".Provider";
            case te:
              return Br(m, m.render, "ForwardRef");
            case B:
              var M = m.displayName || null;
              return M !== null ? M : zr(m.type) || "Memo";
            case K: {
              var q = m, ve = q._payload, ce = q._init;
              try {
                return zr(ce(ve));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var gt = Object.prototype.hasOwnProperty, Ar = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Sr, pr, yt;
      yt = {};
      function Rt(m) {
        if (gt.call(m, "ref")) {
          var T = Object.getOwnPropertyDescriptor(m, "ref").get;
          if (T && T.isReactWarning)
            return !1;
        }
        return m.ref !== void 0;
      }
      function $t(m) {
        if (gt.call(m, "key")) {
          var T = Object.getOwnPropertyDescriptor(m, "key").get;
          if (T && T.isReactWarning)
            return !1;
        }
        return m.key !== void 0;
      }
      function hr(m, T) {
        var F = function() {
          Sr || (Sr = !0, fe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        F.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: F,
          configurable: !0
        });
      }
      function Lt(m, T) {
        var F = function() {
          pr || (pr = !0, fe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        F.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: F,
          configurable: !0
        });
      }
      function Qt(m) {
        if (typeof m.ref == "string" && re.current && m.__self && re.current.stateNode !== m.__self) {
          var T = zr(re.current.type);
          yt[T] || (fe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T, m.ref), yt[T] = !0);
        }
      }
      var Bt = function(m, T, F, M, q, ve, ce) {
        var $e = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: x,
          // Built-in properties that belong on the element
          type: m,
          key: T,
          ref: F,
          props: ce,
          // Record the component responsible for creating this element.
          _owner: ve
        };
        return $e._store = {}, Object.defineProperty($e._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty($e, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: M
        }), Object.defineProperty($e, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: q
        }), Object.freeze && (Object.freeze($e.props), Object.freeze($e)), $e;
      };
      function Kt(m, T, F) {
        var M, q = {}, ve = null, ce = null, $e = null, De = null;
        if (T != null) {
          Rt(T) && (ce = T.ref, Qt(T)), $t(T) && (vt(T.key), ve = "" + T.key), $e = T.__self === void 0 ? null : T.__self, De = T.__source === void 0 ? null : T.__source;
          for (M in T)
            gt.call(T, M) && !Ar.hasOwnProperty(M) && (q[M] = T[M]);
        }
        var Ze = arguments.length - 2;
        if (Ze === 1)
          q.children = F;
        else if (Ze > 1) {
          for (var ar = Array(Ze), Je = 0; Je < Ze; Je++)
            ar[Je] = arguments[Je + 2];
          Object.freeze && Object.freeze(ar), q.children = ar;
        }
        if (m && m.defaultProps) {
          var rr = m.defaultProps;
          for (M in rr)
            q[M] === void 0 && (q[M] = rr[M]);
        }
        if (ve || ce) {
          var cr = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          ve && hr(q, cr), ce && Lt(q, cr);
        }
        return Bt(m, ve, ce, $e, De, re.current, q);
      }
      function Ut(m, T) {
        var F = Bt(m.type, T, m.ref, m._self, m._source, m._owner, m.props);
        return F;
      }
      function fn(m, T, F) {
        if (m == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + m + ".");
        var M, q = U({}, m.props), ve = m.key, ce = m.ref, $e = m._self, De = m._source, Ze = m._owner;
        if (T != null) {
          Rt(T) && (ce = T.ref, Ze = re.current), $t(T) && (vt(T.key), ve = "" + T.key);
          var ar;
          m.type && m.type.defaultProps && (ar = m.type.defaultProps);
          for (M in T)
            gt.call(T, M) && !Ar.hasOwnProperty(M) && (T[M] === void 0 && ar !== void 0 ? q[M] = ar[M] : q[M] = T[M]);
        }
        var Je = arguments.length - 2;
        if (Je === 1)
          q.children = F;
        else if (Je > 1) {
          for (var rr = Array(Je), cr = 0; cr < Je; cr++)
            rr[cr] = arguments[cr + 2];
          q.children = rr;
        }
        return Bt(m.type, ve, ce, $e, De, Ze, q);
      }
      function Qr(m) {
        return typeof m == "object" && m !== null && m.$$typeof === x;
      }
      var it = ".", qt = ":";
      function Nt(m) {
        var T = /[=:]/g, F = {
          "=": "=0",
          ":": "=2"
        }, M = m.replace(T, function(q) {
          return F[q];
        });
        return "$" + M;
      }
      var Tr = !1, Ir = /\/+/g;
      function Vr(m) {
        return m.replace(Ir, "$&/");
      }
      function Le(m, T) {
        return typeof m == "object" && m !== null && m.key != null ? (vt(m.key), Nt("" + m.key)) : T.toString(36);
      }
      function Ur(m, T, F, M, q) {
        var ve = typeof m;
        (ve === "undefined" || ve === "boolean") && (m = null);
        var ce = !1;
        if (m === null)
          ce = !0;
        else
          switch (ve) {
            case "string":
            case "number":
              ce = !0;
              break;
            case "object":
              switch (m.$$typeof) {
                case x:
                case d:
                  ce = !0;
              }
          }
        if (ce) {
          var $e = m, De = q($e), Ze = M === "" ? it + Le($e, 0) : M;
          if (We(De)) {
            var ar = "";
            Ze != null && (ar = Vr(Ze) + "/"), Ur(De, T, ar, "", function(ao) {
              return ao;
            });
          } else De != null && (Qr(De) && (De.key && (!$e || $e.key !== De.key) && vt(De.key), De = Ut(
            De,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            F + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (De.key && (!$e || $e.key !== De.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Vr("" + De.key) + "/"
            ) : "") + Ze
          )), T.push(De));
          return 1;
        }
        var Je, rr, cr = 0, Rr = M === "" ? it : M + qt;
        if (We(m))
          for (var yn = 0; yn < m.length; yn++)
            Je = m[yn], rr = Rr + Le(Je, yn), cr += Ur(Je, T, F, rr, q);
        else {
          var _n = de(m);
          if (typeof _n == "function") {
            var bn = m;
            _n === bn.entries && (Tr || _r("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Tr = !0);
            for (var Xr = _n.call(bn), Ln, Pn = 0; !(Ln = Xr.next()).done; )
              Je = Ln.value, rr = Rr + Le(Je, Pn++), cr += Ur(Je, T, F, rr, q);
          } else if (ve === "object") {
            var oo = String(m);
            throw new Error("Objects are not valid as a React child (found: " + (oo === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : oo) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return cr;
      }
      function st(m, T, F) {
        if (m == null)
          return m;
        var M = [], q = 0;
        return Ur(m, M, "", "", function(ve) {
          return T.call(F, ve, q++);
        }), M;
      }
      function bt(m) {
        var T = 0;
        return st(m, function() {
          T++;
        }), T;
      }
      function Kr(m, T, F) {
        st(m, function() {
          T.apply(this, arguments);
        }, F);
      }
      function _t(m) {
        return st(m, function(T) {
          return T;
        }) || [];
      }
      function qr(m) {
        if (!Qr(m))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return m;
      }
      function xr(m) {
        var T = {
          $$typeof: R,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: m,
          _currentValue2: m,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        T.Provider = {
          $$typeof: E,
          _context: T
        };
        var F = !1, M = !1, q = !1;
        {
          var ve = {
            $$typeof: R,
            _context: T
          };
          Object.defineProperties(ve, {
            Provider: {
              get: function() {
                return M || (M = !0, fe("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), T.Provider;
              },
              set: function(ce) {
                T.Provider = ce;
              }
            },
            _currentValue: {
              get: function() {
                return T._currentValue;
              },
              set: function(ce) {
                T._currentValue = ce;
              }
            },
            _currentValue2: {
              get: function() {
                return T._currentValue2;
              },
              set: function(ce) {
                T._currentValue2 = ce;
              }
            },
            _threadCount: {
              get: function() {
                return T._threadCount;
              },
              set: function(ce) {
                T._threadCount = ce;
              }
            },
            Consumer: {
              get: function() {
                return F || (F = !0, fe("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), T.Consumer;
              }
            },
            displayName: {
              get: function() {
                return T.displayName;
              },
              set: function(ce) {
                q || (_r("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ce), q = !0);
              }
            }
          }), T.Consumer = ve;
        }
        return T._currentRenderer = null, T._currentRenderer2 = null, T;
      }
      var lt = -1, xt = 0, Wt = 1, mr = 2;
      function en(m) {
        if (m._status === lt) {
          var T = m._result, F = T();
          if (F.then(function(ve) {
            if (m._status === xt || m._status === lt) {
              var ce = m;
              ce._status = Wt, ce._result = ve;
            }
          }, function(ve) {
            if (m._status === xt || m._status === lt) {
              var ce = m;
              ce._status = mr, ce._result = ve;
            }
          }), m._status === lt) {
            var M = m;
            M._status = xt, M._result = F;
          }
        }
        if (m._status === Wt) {
          var q = m._result;
          return q === void 0 && fe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, q), "default" in q || fe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, q), q.default;
        } else
          throw m._result;
      }
      function pn(m) {
        var T = {
          // We use these fields to store the result.
          _status: lt,
          _result: m
        }, F = {
          $$typeof: K,
          _payload: T,
          _init: en
        };
        {
          var M, q;
          Object.defineProperties(F, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return M;
              },
              set: function(ve) {
                fe("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), M = ve, Object.defineProperty(F, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return q;
              },
              set: function(ve) {
                fe("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), q = ve, Object.defineProperty(F, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return F;
      }
      function hn(m) {
        m != null && m.$$typeof === B ? fe("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof m != "function" ? fe("forwardRef requires a render function but was given %s.", m === null ? "null" : typeof m) : m.length !== 0 && m.length !== 2 && fe("forwardRef render functions accept exactly two parameters: props and ref. %s", m.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), m != null && (m.defaultProps != null || m.propTypes != null) && fe("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var T = {
          $$typeof: te,
          render: m
        };
        {
          var F;
          Object.defineProperty(T, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return F;
            },
            set: function(M) {
              F = M, !m.name && !m.displayName && (m.displayName = M);
            }
          });
        }
        return T;
      }
      var C;
      C = Symbol.for("react.module.reference");
      function Y(m) {
        return !!(typeof m == "string" || typeof m == "function" || m === _ || m === V || Ke || m === N || m === O || m === se || Ne || m === be || er || Ce || Ue || typeof m == "object" && m !== null && (m.$$typeof === K || m.$$typeof === B || m.$$typeof === E || m.$$typeof === R || m.$$typeof === te || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        m.$$typeof === C || m.getModuleId !== void 0));
      }
      function ae(m, T) {
        Y(m) || fe("memo: The first argument must be a component. Instead received: %s", m === null ? "null" : typeof m);
        var F = {
          $$typeof: B,
          type: m,
          compare: T === void 0 ? null : T
        };
        {
          var M;
          Object.defineProperty(F, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return M;
            },
            set: function(q) {
              M = q, !m.name && !m.displayName && (m.displayName = q);
            }
          });
        }
        return F;
      }
      function le() {
        var m = Pe.current;
        return m === null && fe(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), m;
      }
      function Re(m) {
        var T = le();
        if (m._context !== void 0) {
          var F = m._context;
          F.Consumer === m ? fe("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : F.Provider === m && fe("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return T.useContext(m);
      }
      function je(m) {
        var T = le();
        return T.useState(m);
      }
      function ze(m, T, F) {
        var M = le();
        return M.useReducer(m, T, F);
      }
      function Ee(m) {
        var T = le();
        return T.useRef(m);
      }
      function sr(m, T) {
        var F = le();
        return F.useEffect(m, T);
      }
      function He(m, T) {
        var F = le();
        return F.useInsertionEffect(m, T);
      }
      function Xe(m, T) {
        var F = le();
        return F.useLayoutEffect(m, T);
      }
      function nr(m, T) {
        var F = le();
        return F.useCallback(m, T);
      }
      function ut(m, T) {
        var F = le();
        return F.useMemo(m, T);
      }
      function et(m, T, F) {
        var M = le();
        return M.useImperativeHandle(m, T, F);
      }
      function lr(m, T) {
        {
          var F = le();
          return F.useDebugValue(m, T);
        }
      }
      function ur() {
        var m = le();
        return m.useTransition();
      }
      function rt(m) {
        var T = le();
        return T.useDeferredValue(m);
      }
      function tt() {
        var m = le();
        return m.useId();
      }
      function Ht(m, T, F) {
        var M = le();
        return M.useSyncExternalStore(m, T, F);
      }
      var wt = 0, nt, ct, Or, Pt, Vt, rn, Yr;
      function dt() {
      }
      dt.__reactDisabledLog = !0;
      function Nr() {
        {
          if (wt === 0) {
            nt = console.log, ct = console.info, Or = console.warn, Pt = console.error, Vt = console.group, rn = console.groupCollapsed, Yr = console.groupEnd;
            var m = {
              configurable: !0,
              enumerable: !0,
              value: dt,
              writable: !0
            };
            Object.defineProperties(console, {
              info: m,
              log: m,
              warn: m,
              error: m,
              group: m,
              groupCollapsed: m,
              groupEnd: m
            });
          }
          wt++;
        }
      }
      function sn() {
        {
          if (wt--, wt === 0) {
            var m = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: U({}, m, {
                value: nt
              }),
              info: U({}, m, {
                value: ct
              }),
              warn: U({}, m, {
                value: Or
              }),
              error: U({}, m, {
                value: Pt
              }),
              group: U({}, m, {
                value: Vt
              }),
              groupCollapsed: U({}, m, {
                value: rn
              }),
              groupEnd: U({}, m, {
                value: Yr
              })
            });
          }
          wt < 0 && fe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var kr = tr.ReactCurrentDispatcher, Fr;
      function s(m, T, F) {
        {
          if (Fr === void 0)
            try {
              throw Error();
            } catch (q) {
              var M = q.stack.trim().match(/\n( *(at )?)/);
              Fr = M && M[1] || "";
            }
          return `
` + Fr + m;
        }
      }
      var f = !1, b;
      {
        var S = typeof WeakMap == "function" ? WeakMap : Map;
        b = new S();
      }
      function A(m, T) {
        if (!m || f)
          return "";
        {
          var F = b.get(m);
          if (F !== void 0)
            return F;
        }
        var M;
        f = !0;
        var q = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var ve;
        ve = kr.current, kr.current = null, Nr();
        try {
          if (T) {
            var ce = function() {
              throw Error();
            };
            if (Object.defineProperty(ce.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ce, []);
              } catch (Rr) {
                M = Rr;
              }
              Reflect.construct(m, [], ce);
            } else {
              try {
                ce.call();
              } catch (Rr) {
                M = Rr;
              }
              m.call(ce.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Rr) {
              M = Rr;
            }
            m();
          }
        } catch (Rr) {
          if (Rr && M && typeof Rr.stack == "string") {
            for (var $e = Rr.stack.split(`
`), De = M.stack.split(`
`), Ze = $e.length - 1, ar = De.length - 1; Ze >= 1 && ar >= 0 && $e[Ze] !== De[ar]; )
              ar--;
            for (; Ze >= 1 && ar >= 0; Ze--, ar--)
              if ($e[Ze] !== De[ar]) {
                if (Ze !== 1 || ar !== 1)
                  do
                    if (Ze--, ar--, ar < 0 || $e[Ze] !== De[ar]) {
                      var Je = `
` + $e[Ze].replace(" at new ", " at ");
                      return m.displayName && Je.includes("<anonymous>") && (Je = Je.replace("<anonymous>", m.displayName)), typeof m == "function" && b.set(m, Je), Je;
                    }
                  while (Ze >= 1 && ar >= 0);
                break;
              }
          }
        } finally {
          f = !1, kr.current = ve, sn(), Error.prepareStackTrace = q;
        }
        var rr = m ? m.displayName || m.name : "", cr = rr ? s(rr) : "";
        return typeof m == "function" && b.set(m, cr), cr;
      }
      function P(m, T, F) {
        return A(m, !1);
      }
      function j(m) {
        var T = m.prototype;
        return !!(T && T.isReactComponent);
      }
      function J(m, T, F) {
        if (m == null)
          return "";
        if (typeof m == "function")
          return A(m, j(m));
        if (typeof m == "string")
          return s(m);
        switch (m) {
          case O:
            return s("Suspense");
          case se:
            return s("SuspenseList");
        }
        if (typeof m == "object")
          switch (m.$$typeof) {
            case te:
              return P(m.render);
            case B:
              return J(m.type, T, F);
            case K: {
              var M = m, q = M._payload, ve = M._init;
              try {
                return J(ve(q), T, F);
              } catch {
              }
            }
          }
        return "";
      }
      var pe = {}, xe = tr.ReactDebugCurrentFrame;
      function he(m) {
        if (m) {
          var T = m._owner, F = J(m.type, m._source, T ? T.type : null);
          xe.setExtraStackFrame(F);
        } else
          xe.setExtraStackFrame(null);
      }
      function Ye(m, T, F, M, q) {
        {
          var ve = Function.call.bind(gt);
          for (var ce in m)
            if (ve(m, ce)) {
              var $e = void 0;
              try {
                if (typeof m[ce] != "function") {
                  var De = Error((M || "React class") + ": " + F + " type `" + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw De.name = "Invariant Violation", De;
                }
                $e = m[ce](T, ce, M, F, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ze) {
                $e = Ze;
              }
              $e && !($e instanceof Error) && (he(q), fe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", M || "React class", F, ce, typeof $e), he(null)), $e instanceof Error && !($e.message in pe) && (pe[$e.message] = !0, he(q), fe("Failed %s type: %s", F, $e.message), he(null));
            }
        }
      }
      function Er(m) {
        if (m) {
          var T = m._owner, F = J(m.type, m._source, T ? T.type : null);
          ge(F);
        } else
          ge(null);
      }
      var Dr;
      Dr = !1;
      function jr() {
        if (re.current) {
          var m = zr(re.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
      function Yt(m) {
        if (m !== void 0) {
          var T = m.fileName.replace(/^.*[\\\/]/, ""), F = m.lineNumber;
          return `

Check your code at ` + T + ":" + F + ".";
        }
        return "";
      }
      function St(m) {
        return m != null ? Yt(m.__source) : "";
      }
      var tn = {};
      function Gt(m) {
        var T = jr();
        if (!T) {
          var F = typeof m == "string" ? m : m.displayName || m.name;
          F && (T = `

Check the top-level render call using <` + F + ">.");
        }
        return T;
      }
      function Xt(m, T) {
        if (!(!m._store || m._store.validated || m.key != null)) {
          m._store.validated = !0;
          var F = Gt(T);
          if (!tn[F]) {
            tn[F] = !0;
            var M = "";
            m && m._owner && m._owner !== re.current && (M = " It was passed a child from " + zr(m._owner.type) + "."), Er(m), fe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', F, M), Er(null);
          }
        }
      }
      function kt(m, T) {
        if (typeof m == "object") {
          if (We(m))
            for (var F = 0; F < m.length; F++) {
              var M = m[F];
              Qr(M) && Xt(M, T);
            }
          else if (Qr(m))
            m._store && (m._store.validated = !0);
          else if (m) {
            var q = de(m);
            if (typeof q == "function" && q !== m.entries)
              for (var ve = q.call(m), ce; !(ce = ve.next()).done; )
                Qr(ce.value) && Xt(ce.value, T);
          }
        }
      }
      function Zt(m) {
        {
          var T = m.type;
          if (T == null || typeof T == "string")
            return;
          var F;
          if (typeof T == "function")
            F = T.propTypes;
          else if (typeof T == "object" && (T.$$typeof === te || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          T.$$typeof === B))
            F = T.propTypes;
          else
            return;
          if (F) {
            var M = zr(T);
            Ye(F, m.props, "prop", M, m);
          } else if (T.PropTypes !== void 0 && !Dr) {
            Dr = !0;
            var q = zr(T);
            fe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", q || "Unknown");
          }
          typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && fe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ro(m) {
        {
          for (var T = Object.keys(m.props), F = 0; F < T.length; F++) {
            var M = T[F];
            if (M !== "children" && M !== "key") {
              Er(m), fe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", M), Er(null);
              break;
            }
          }
          m.ref !== null && (Er(m), fe("Invalid attribute `ref` supplied to `React.Fragment`."), Er(null));
        }
      }
      function to(m, T, F) {
        var M = Y(m);
        if (!M) {
          var q = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ve = St(T);
          ve ? q += ve : q += jr();
          var ce;
          m === null ? ce = "null" : We(m) ? ce = "array" : m !== void 0 && m.$$typeof === x ? (ce = "<" + (zr(m.type) || "Unknown") + " />", q = " Did you accidentally export a JSX literal instead of a component?") : ce = typeof m, fe("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ce, q);
        }
        var $e = Kt.apply(this, arguments);
        if ($e == null)
          return $e;
        if (M)
          for (var De = 2; De < arguments.length; De++)
            kt(arguments[De], m);
        return m === _ ? Ro($e) : Zt($e), $e;
      }
      var mn = !1;
      function Et(m) {
        var T = to.bind(null, m);
        return T.type = m, mn || (mn = !0, _r("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(T, "type", {
          enumerable: !1,
          get: function() {
            return _r("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: m
            }), m;
          }
        }), T;
      }
      function $o(m, T, F) {
        for (var M = fn.apply(this, arguments), q = 2; q < arguments.length; q++)
          kt(arguments[q], M.type);
        return Zt(M), M;
      }
      function It(m, T) {
        var F = ee.transition;
        ee.transition = {};
        var M = ee.transition;
        ee.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          m();
        } finally {
          if (ee.transition = F, F === null && M._updatedFibers) {
            var q = M._updatedFibers.size;
            q > 10 && _r("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), M._updatedFibers.clear();
          }
        }
      }
      var Rn = !1, nn = null;
      function or(m) {
        if (nn === null)
          try {
            var T = ("require" + Math.random()).slice(0, 7), F = r && r[T];
            nn = F.call(r, "timers").setImmediate;
          } catch {
            nn = function(q) {
              Rn === !1 && (Rn = !0, typeof MessageChannel > "u" && fe("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var ve = new MessageChannel();
              ve.port1.onmessage = q, ve.port2.postMessage(void 0);
            };
          }
        return nn(m);
      }
      var ot = 0, vn = !1;
      function Jt(m) {
        {
          var T = ot;
          ot++, ne.current === null && (ne.current = []);
          var F = ne.isBatchingLegacy, M;
          try {
            if (ne.isBatchingLegacy = !0, M = m(), !F && ne.didScheduleLegacyUpdate) {
              var q = ne.current;
              q !== null && (ne.didScheduleLegacyUpdate = !1, Gr(q));
            }
          } catch (rr) {
            throw ft(T), rr;
          } finally {
            ne.isBatchingLegacy = F;
          }
          if (M !== null && typeof M == "object" && typeof M.then == "function") {
            var ve = M, ce = !1, $e = {
              then: function(rr, cr) {
                ce = !0, ve.then(function(Rr) {
                  ft(T), ot === 0 ? ln(Rr, rr, cr) : rr(Rr);
                }, function(Rr) {
                  ft(T), cr(Rr);
                });
              }
            };
            return !vn && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ce || (vn = !0, fe("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), $e;
          } else {
            var De = M;
            if (ft(T), ot === 0) {
              var Ze = ne.current;
              Ze !== null && (Gr(Ze), ne.current = null);
              var ar = {
                then: function(rr, cr) {
                  ne.current === null ? (ne.current = [], ln(De, rr, cr)) : rr(De);
                }
              };
              return ar;
            } else {
              var Je = {
                then: function(rr, cr) {
                  rr(De);
                }
              };
              return Je;
            }
          }
        }
      }
      function ft(m) {
        m !== ot - 1 && fe("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ot = m;
      }
      function ln(m, T, F) {
        {
          var M = ne.current;
          if (M !== null)
            try {
              Gr(M), or(function() {
                M.length === 0 ? (ne.current = null, T(m)) : ln(m, T, F);
              });
            } catch (q) {
              F(q);
            }
          else
            T(m);
        }
      }
      var Ct = !1;
      function Gr(m) {
        if (!Ct) {
          Ct = !0;
          var T = 0;
          try {
            for (; T < m.length; T++) {
              var F = m[T];
              do
                F = F(!0);
              while (F !== null);
            }
            m.length = 0;
          } catch (M) {
            throw m = m.slice(T + 1), M;
          } finally {
            Ct = !1;
          }
        }
      }
      var Mn = to, gn = $o, no = Et, $n = {
        map: st,
        forEach: Kr,
        count: bt,
        toArray: _t,
        only: qr
      };
      a.Children = $n, a.Component = ke, a.Fragment = _, a.Profiler = V, a.PureComponent = we, a.StrictMode = N, a.Suspense = O, a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tr, a.act = Jt, a.cloneElement = gn, a.createContext = xr, a.createElement = Mn, a.createFactory = no, a.createRef = gr, a.forwardRef = hn, a.isValidElement = Qr, a.lazy = pn, a.memo = ae, a.startTransition = It, a.unstable_act = Jt, a.useCallback = nr, a.useContext = Re, a.useDebugValue = lr, a.useDeferredValue = rt, a.useEffect = sr, a.useId = tt, a.useImperativeHandle = et, a.useInsertionEffect = He, a.useLayoutEffect = Xe, a.useMemo = ut, a.useReducer = ze, a.useRef = Ee, a.useState = je, a.useSyncExternalStore = Ht, a.useTransition = ur, a.version = u, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Zi, Zi.exports)), Zi.exports;
}
var zu;
function ca() {
  return zu || (zu = 1, process.env.NODE_ENV === "production" ? Ns.exports = Pc() : Ns.exports = Ic()), Ns.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Au;
function zc() {
  if (Au) return Yi;
  Au = 1;
  var r = ca(), a = Symbol.for("react.element"), u = Symbol.for("react.fragment"), x = Object.prototype.hasOwnProperty, d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function N(V, E, R) {
    var te, O = {}, se = null, B = null;
    R !== void 0 && (se = "" + R), E.key !== void 0 && (se = "" + E.key), E.ref !== void 0 && (B = E.ref);
    for (te in E) x.call(E, te) && !_.hasOwnProperty(te) && (O[te] = E[te]);
    if (V && V.defaultProps) for (te in E = V.defaultProps, E) O[te] === void 0 && (O[te] = E[te]);
    return { $$typeof: a, type: V, key: se, ref: B, props: O, _owner: d.current };
  }
  return Yi.Fragment = u, Yi.jsx = N, Yi.jsxs = N, Yi;
}
var Gi = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Du;
function Ac() {
  return Du || (Du = 1, process.env.NODE_ENV !== "production" && function() {
    var r = ca(), a = Symbol.for("react.element"), u = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), N = Symbol.for("react.provider"), V = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), B = Symbol.for("react.offscreen"), K = Symbol.iterator, be = "@@iterator";
    function Z(C) {
      if (C === null || typeof C != "object")
        return null;
      var Y = K && C[K] || C[be];
      return typeof Y == "function" ? Y : null;
    }
    var L = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function de(C) {
      {
        for (var Y = arguments.length, ae = new Array(Y > 1 ? Y - 1 : 0), le = 1; le < Y; le++)
          ae[le - 1] = arguments[le];
        Pe("error", C, ae);
      }
    }
    function Pe(C, Y, ae) {
      {
        var le = L.ReactDebugCurrentFrame, Re = le.getStackAddendum();
        Re !== "" && (Y += "%s", ae = ae.concat([Re]));
        var je = ae.map(function(ze) {
          return String(ze);
        });
        je.unshift("Warning: " + Y), Function.prototype.apply.call(console[C], console, je);
      }
    }
    var ee = !1, ne = !1, re = !1, G = !1, ue = !1, ge;
    ge = Symbol.for("react.module.reference");
    function er(C) {
      return !!(typeof C == "string" || typeof C == "function" || C === x || C === _ || ue || C === d || C === R || C === te || G || C === B || ee || ne || re || typeof C == "object" && C !== null && (C.$$typeof === se || C.$$typeof === O || C.$$typeof === N || C.$$typeof === V || C.$$typeof === E || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      C.$$typeof === ge || C.getModuleId !== void 0));
    }
    function Ce(C, Y, ae) {
      var le = C.displayName;
      if (le)
        return le;
      var Re = Y.displayName || Y.name || "";
      return Re !== "" ? ae + "(" + Re + ")" : ae;
    }
    function Ue(C) {
      return C.displayName || "Context";
    }
    function Ne(C) {
      if (C == null)
        return null;
      if (typeof C.tag == "number" && de("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof C == "function")
        return C.displayName || C.name || null;
      if (typeof C == "string")
        return C;
      switch (C) {
        case x:
          return "Fragment";
        case u:
          return "Portal";
        case _:
          return "Profiler";
        case d:
          return "StrictMode";
        case R:
          return "Suspense";
        case te:
          return "SuspenseList";
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case V:
            var Y = C;
            return Ue(Y) + ".Consumer";
          case N:
            var ae = C;
            return Ue(ae._context) + ".Provider";
          case E:
            return Ce(C, C.render, "ForwardRef");
          case O:
            var le = C.displayName || null;
            return le !== null ? le : Ne(C.type) || "Memo";
          case se: {
            var Re = C, je = Re._payload, ze = Re._init;
            try {
              return Ne(ze(je));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ke = Object.assign, tr = 0, _r, fe, fr, Ge, br, $, U;
    function Te() {
    }
    Te.__reactDisabledLog = !0;
    function ke() {
      {
        if (tr === 0) {
          _r = console.log, fe = console.info, fr = console.warn, Ge = console.error, br = console.group, $ = console.groupCollapsed, U = console.groupEnd;
          var C = {
            configurable: !0,
            enumerable: !0,
            value: Te,
            writable: !0
          };
          Object.defineProperties(console, {
            info: C,
            log: C,
            warn: C,
            error: C,
            group: C,
            groupCollapsed: C,
            groupEnd: C
          });
        }
        tr++;
      }
    }
    function me() {
      {
        if (tr--, tr === 0) {
          var C = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ke({}, C, {
              value: _r
            }),
            info: Ke({}, C, {
              value: fe
            }),
            warn: Ke({}, C, {
              value: fr
            }),
            error: Ke({}, C, {
              value: Ge
            }),
            group: Ke({}, C, {
              value: br
            }),
            groupCollapsed: Ke({}, C, {
              value: $
            }),
            groupEnd: Ke({}, C, {
              value: U
            })
          });
        }
        tr < 0 && de("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ye = L.ReactCurrentDispatcher, Ie;
    function Ae(C, Y, ae) {
      {
        if (Ie === void 0)
          try {
            throw Error();
          } catch (Re) {
            var le = Re.stack.trim().match(/\n( *(at )?)/);
            Ie = le && le[1] || "";
          }
        return `
` + Ie + C;
      }
    }
    var we = !1, Fe;
    {
      var gr = typeof WeakMap == "function" ? WeakMap : Map;
      Fe = new gr();
    }
    function Mr(C, Y) {
      if (!C || we)
        return "";
      {
        var ae = Fe.get(C);
        if (ae !== void 0)
          return ae;
      }
      var le;
      we = !0;
      var Re = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var je;
      je = ye.current, ye.current = null, ke();
      try {
        if (Y) {
          var ze = function() {
            throw Error();
          };
          if (Object.defineProperty(ze.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ze, []);
            } catch (lr) {
              le = lr;
            }
            Reflect.construct(C, [], ze);
          } else {
            try {
              ze.call();
            } catch (lr) {
              le = lr;
            }
            C.call(ze.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (lr) {
            le = lr;
          }
          C();
        }
      } catch (lr) {
        if (lr && le && typeof lr.stack == "string") {
          for (var Ee = lr.stack.split(`
`), sr = le.stack.split(`
`), He = Ee.length - 1, Xe = sr.length - 1; He >= 1 && Xe >= 0 && Ee[He] !== sr[Xe]; )
            Xe--;
          for (; He >= 1 && Xe >= 0; He--, Xe--)
            if (Ee[He] !== sr[Xe]) {
              if (He !== 1 || Xe !== 1)
                do
                  if (He--, Xe--, Xe < 0 || Ee[He] !== sr[Xe]) {
                    var nr = `
` + Ee[He].replace(" at new ", " at ");
                    return C.displayName && nr.includes("<anonymous>") && (nr = nr.replace("<anonymous>", C.displayName)), typeof C == "function" && Fe.set(C, nr), nr;
                  }
                while (He >= 1 && Xe >= 0);
              break;
            }
        }
      } finally {
        we = !1, ye.current = je, me(), Error.prepareStackTrace = Re;
      }
      var ut = C ? C.displayName || C.name : "", et = ut ? Ae(ut) : "";
      return typeof C == "function" && Fe.set(C, et), et;
    }
    function We(C, Y, ae) {
      return Mr(C, !1);
    }
    function Pr(C) {
      var Y = C.prototype;
      return !!(Y && Y.isReactComponent);
    }
    function at(C, Y, ae) {
      if (C == null)
        return "";
      if (typeof C == "function")
        return Mr(C, Pr(C));
      if (typeof C == "string")
        return Ae(C);
      switch (C) {
        case R:
          return Ae("Suspense");
        case te:
          return Ae("SuspenseList");
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case E:
            return We(C.render);
          case O:
            return at(C.type, Y, ae);
          case se: {
            var le = C, Re = le._payload, je = le._init;
            try {
              return at(je(Re), Y, ae);
            } catch {
            }
          }
        }
      return "";
    }
    var Lr = Object.prototype.hasOwnProperty, vt = {}, Br = L.ReactDebugCurrentFrame;
    function Hr(C) {
      if (C) {
        var Y = C._owner, ae = at(C.type, C._source, Y ? Y.type : null);
        Br.setExtraStackFrame(ae);
      } else
        Br.setExtraStackFrame(null);
    }
    function zr(C, Y, ae, le, Re) {
      {
        var je = Function.call.bind(Lr);
        for (var ze in C)
          if (je(C, ze)) {
            var Ee = void 0;
            try {
              if (typeof C[ze] != "function") {
                var sr = Error((le || "React class") + ": " + ae + " type `" + ze + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof C[ze] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw sr.name = "Invariant Violation", sr;
              }
              Ee = C[ze](Y, ze, le, ae, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (He) {
              Ee = He;
            }
            Ee && !(Ee instanceof Error) && (Hr(Re), de("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", le || "React class", ae, ze, typeof Ee), Hr(null)), Ee instanceof Error && !(Ee.message in vt) && (vt[Ee.message] = !0, Hr(Re), de("Failed %s type: %s", ae, Ee.message), Hr(null));
          }
      }
    }
    var gt = Array.isArray;
    function Ar(C) {
      return gt(C);
    }
    function Sr(C) {
      {
        var Y = typeof Symbol == "function" && Symbol.toStringTag, ae = Y && C[Symbol.toStringTag] || C.constructor.name || "Object";
        return ae;
      }
    }
    function pr(C) {
      try {
        return yt(C), !1;
      } catch {
        return !0;
      }
    }
    function yt(C) {
      return "" + C;
    }
    function Rt(C) {
      if (pr(C))
        return de("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Sr(C)), yt(C);
    }
    var $t = L.ReactCurrentOwner, hr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Lt, Qt;
    function Bt(C) {
      if (Lr.call(C, "ref")) {
        var Y = Object.getOwnPropertyDescriptor(C, "ref").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return C.ref !== void 0;
    }
    function Kt(C) {
      if (Lr.call(C, "key")) {
        var Y = Object.getOwnPropertyDescriptor(C, "key").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return C.key !== void 0;
    }
    function Ut(C, Y) {
      typeof C.ref == "string" && $t.current;
    }
    function fn(C, Y) {
      {
        var ae = function() {
          Lt || (Lt = !0, de("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        ae.isReactWarning = !0, Object.defineProperty(C, "key", {
          get: ae,
          configurable: !0
        });
      }
    }
    function Qr(C, Y) {
      {
        var ae = function() {
          Qt || (Qt = !0, de("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        ae.isReactWarning = !0, Object.defineProperty(C, "ref", {
          get: ae,
          configurable: !0
        });
      }
    }
    var it = function(C, Y, ae, le, Re, je, ze) {
      var Ee = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: C,
        key: Y,
        ref: ae,
        props: ze,
        // Record the component responsible for creating this element.
        _owner: je
      };
      return Ee._store = {}, Object.defineProperty(Ee._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ee, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: le
      }), Object.defineProperty(Ee, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Re
      }), Object.freeze && (Object.freeze(Ee.props), Object.freeze(Ee)), Ee;
    };
    function qt(C, Y, ae, le, Re) {
      {
        var je, ze = {}, Ee = null, sr = null;
        ae !== void 0 && (Rt(ae), Ee = "" + ae), Kt(Y) && (Rt(Y.key), Ee = "" + Y.key), Bt(Y) && (sr = Y.ref, Ut(Y, Re));
        for (je in Y)
          Lr.call(Y, je) && !hr.hasOwnProperty(je) && (ze[je] = Y[je]);
        if (C && C.defaultProps) {
          var He = C.defaultProps;
          for (je in He)
            ze[je] === void 0 && (ze[je] = He[je]);
        }
        if (Ee || sr) {
          var Xe = typeof C == "function" ? C.displayName || C.name || "Unknown" : C;
          Ee && fn(ze, Xe), sr && Qr(ze, Xe);
        }
        return it(C, Ee, sr, Re, le, $t.current, ze);
      }
    }
    var Nt = L.ReactCurrentOwner, Tr = L.ReactDebugCurrentFrame;
    function Ir(C) {
      if (C) {
        var Y = C._owner, ae = at(C.type, C._source, Y ? Y.type : null);
        Tr.setExtraStackFrame(ae);
      } else
        Tr.setExtraStackFrame(null);
    }
    var Vr;
    Vr = !1;
    function Le(C) {
      return typeof C == "object" && C !== null && C.$$typeof === a;
    }
    function Ur() {
      {
        if (Nt.current) {
          var C = Ne(Nt.current.type);
          if (C)
            return `

Check the render method of \`` + C + "`.";
        }
        return "";
      }
    }
    function st(C) {
      return "";
    }
    var bt = {};
    function Kr(C) {
      {
        var Y = Ur();
        if (!Y) {
          var ae = typeof C == "string" ? C : C.displayName || C.name;
          ae && (Y = `

Check the top-level render call using <` + ae + ">.");
        }
        return Y;
      }
    }
    function _t(C, Y) {
      {
        if (!C._store || C._store.validated || C.key != null)
          return;
        C._store.validated = !0;
        var ae = Kr(Y);
        if (bt[ae])
          return;
        bt[ae] = !0;
        var le = "";
        C && C._owner && C._owner !== Nt.current && (le = " It was passed a child from " + Ne(C._owner.type) + "."), Ir(C), de('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ae, le), Ir(null);
      }
    }
    function qr(C, Y) {
      {
        if (typeof C != "object")
          return;
        if (Ar(C))
          for (var ae = 0; ae < C.length; ae++) {
            var le = C[ae];
            Le(le) && _t(le, Y);
          }
        else if (Le(C))
          C._store && (C._store.validated = !0);
        else if (C) {
          var Re = Z(C);
          if (typeof Re == "function" && Re !== C.entries)
            for (var je = Re.call(C), ze; !(ze = je.next()).done; )
              Le(ze.value) && _t(ze.value, Y);
        }
      }
    }
    function xr(C) {
      {
        var Y = C.type;
        if (Y == null || typeof Y == "string")
          return;
        var ae;
        if (typeof Y == "function")
          ae = Y.propTypes;
        else if (typeof Y == "object" && (Y.$$typeof === E || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Y.$$typeof === O))
          ae = Y.propTypes;
        else
          return;
        if (ae) {
          var le = Ne(Y);
          zr(ae, C.props, "prop", le, C);
        } else if (Y.PropTypes !== void 0 && !Vr) {
          Vr = !0;
          var Re = Ne(Y);
          de("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Re || "Unknown");
        }
        typeof Y.getDefaultProps == "function" && !Y.getDefaultProps.isReactClassApproved && de("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lt(C) {
      {
        for (var Y = Object.keys(C.props), ae = 0; ae < Y.length; ae++) {
          var le = Y[ae];
          if (le !== "children" && le !== "key") {
            Ir(C), de("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", le), Ir(null);
            break;
          }
        }
        C.ref !== null && (Ir(C), de("Invalid attribute `ref` supplied to `React.Fragment`."), Ir(null));
      }
    }
    var xt = {};
    function Wt(C, Y, ae, le, Re, je) {
      {
        var ze = er(C);
        if (!ze) {
          var Ee = "";
          (C === void 0 || typeof C == "object" && C !== null && Object.keys(C).length === 0) && (Ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var sr = st();
          sr ? Ee += sr : Ee += Ur();
          var He;
          C === null ? He = "null" : Ar(C) ? He = "array" : C !== void 0 && C.$$typeof === a ? (He = "<" + (Ne(C.type) || "Unknown") + " />", Ee = " Did you accidentally export a JSX literal instead of a component?") : He = typeof C, de("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", He, Ee);
        }
        var Xe = qt(C, Y, ae, Re, je);
        if (Xe == null)
          return Xe;
        if (ze) {
          var nr = Y.children;
          if (nr !== void 0)
            if (le)
              if (Ar(nr)) {
                for (var ut = 0; ut < nr.length; ut++)
                  qr(nr[ut], C);
                Object.freeze && Object.freeze(nr);
              } else
                de("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qr(nr, C);
        }
        if (Lr.call(Y, "key")) {
          var et = Ne(C), lr = Object.keys(Y).filter(function(tt) {
            return tt !== "key";
          }), ur = lr.length > 0 ? "{key: someKey, " + lr.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!xt[et + ur]) {
            var rt = lr.length > 0 ? "{" + lr.join(": ..., ") + ": ...}" : "{}";
            de(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ur, et, rt, et), xt[et + ur] = !0;
          }
        }
        return C === x ? lt(Xe) : xr(Xe), Xe;
      }
    }
    function mr(C, Y, ae) {
      return Wt(C, Y, ae, !0);
    }
    function en(C, Y, ae) {
      return Wt(C, Y, ae, !1);
    }
    var pn = en, hn = mr;
    Gi.Fragment = x, Gi.jsx = pn, Gi.jsxs = hn;
  }()), Gi;
}
process.env.NODE_ENV === "production" ? fu.exports = zc() : fu.exports = Ac();
var oe = fu.exports, ta = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ou;
function Dc() {
  if (Ou) return ta;
  Ou = 1;
  var r = ca();
  function a(s) {
    for (var f = "https://reactjs.org/docs/error-decoder.html?invariant=" + s, b = 1; b < arguments.length; b++) f += "&args[]=" + encodeURIComponent(arguments[b]);
    return "Minified React error #" + s + "; visit " + f + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var u = Object.prototype.hasOwnProperty, x = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, d = {}, _ = {};
  function N(s) {
    return u.call(_, s) ? !0 : u.call(d, s) ? !1 : x.test(s) ? _[s] = !0 : (d[s] = !0, !1);
  }
  function V(s, f, b, S, A, P, j) {
    this.acceptsBooleans = f === 2 || f === 3 || f === 4, this.attributeName = S, this.attributeNamespace = A, this.mustUseProperty = b, this.propertyName = s, this.type = f, this.sanitizeURL = P, this.removeEmptyString = j;
  }
  var E = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(s) {
    E[s] = new V(s, 0, !1, s, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(s) {
    var f = s[0];
    E[f] = new V(f, 1, !1, s[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(s) {
    E[s] = new V(s, 2, !1, s.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(s) {
    E[s] = new V(s, 2, !1, s, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(s) {
    E[s] = new V(s, 3, !1, s.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(s) {
    E[s] = new V(s, 3, !0, s, null, !1, !1);
  }), ["capture", "download"].forEach(function(s) {
    E[s] = new V(s, 4, !1, s, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(s) {
    E[s] = new V(s, 6, !1, s, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(s) {
    E[s] = new V(s, 5, !1, s.toLowerCase(), null, !1, !1);
  });
  var R = /[\-:]([a-z])/g;
  function te(s) {
    return s[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(s) {
    var f = s.replace(
      R,
      te
    );
    E[f] = new V(f, 1, !1, s, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(s) {
    var f = s.replace(R, te);
    E[f] = new V(f, 1, !1, s, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(s) {
    var f = s.replace(R, te);
    E[f] = new V(f, 1, !1, s, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(s) {
    E[s] = new V(s, 1, !1, s.toLowerCase(), null, !1, !1);
  }), E.xlinkHref = new V("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(s) {
    E[s] = new V(s, 1, !1, s.toLowerCase(), null, !0, !0);
  });
  var O = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, se = ["Webkit", "ms", "Moz", "O"];
  Object.keys(O).forEach(function(s) {
    se.forEach(function(f) {
      f = f + s.charAt(0).toUpperCase() + s.substring(1), O[f] = O[s];
    });
  });
  var B = /["'&<>]/;
  function K(s) {
    if (typeof s == "boolean" || typeof s == "number") return "" + s;
    s = "" + s;
    var f = B.exec(s);
    if (f) {
      var b = "", S, A = 0;
      for (S = f.index; S < s.length; S++) {
        switch (s.charCodeAt(S)) {
          case 34:
            f = "&quot;";
            break;
          case 38:
            f = "&amp;";
            break;
          case 39:
            f = "&#x27;";
            break;
          case 60:
            f = "&lt;";
            break;
          case 62:
            f = "&gt;";
            break;
          default:
            continue;
        }
        A !== S && (b += s.substring(A, S)), A = S + 1, b += f;
      }
      s = A !== S ? b + s.substring(A, S) : b;
    }
    return s;
  }
  var be = /([A-Z])/g, Z = /^ms-/, L = Array.isArray;
  function de(s, f) {
    return { insertionMode: s, selectedValue: f };
  }
  function Pe(s, f, b) {
    switch (f) {
      case "select":
        return de(1, b.value != null ? b.value : b.defaultValue);
      case "svg":
        return de(2, null);
      case "math":
        return de(3, null);
      case "foreignObject":
        return de(1, null);
      case "table":
        return de(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return de(5, null);
      case "colgroup":
        return de(7, null);
      case "tr":
        return de(6, null);
    }
    return 4 <= s.insertionMode || s.insertionMode === 0 ? de(1, null) : s;
  }
  var ee = /* @__PURE__ */ new Map();
  function ne(s, f, b) {
    if (typeof b != "object") throw Error(a(62));
    f = !0;
    for (var S in b) if (u.call(b, S)) {
      var A = b[S];
      if (A != null && typeof A != "boolean" && A !== "") {
        if (S.indexOf("--") === 0) {
          var P = K(S);
          A = K(("" + A).trim());
        } else {
          P = S;
          var j = ee.get(P);
          j !== void 0 || (j = K(P.replace(be, "-$1").toLowerCase().replace(Z, "-ms-")), ee.set(P, j)), P = j, A = typeof A == "number" ? A === 0 || u.call(O, S) ? "" + A : A + "px" : K(("" + A).trim());
        }
        f ? (f = !1, s.push(' style="', P, ":", A)) : s.push(";", P, ":", A);
      }
    }
    f || s.push('"');
  }
  function re(s, f, b, S) {
    switch (b) {
      case "style":
        ne(s, f, S);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < b.length) || b[0] !== "o" && b[0] !== "O" || b[1] !== "n" && b[1] !== "N") {
      if (f = E.hasOwnProperty(b) ? E[b] : null, f !== null) {
        switch (typeof S) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!f.acceptsBooleans) return;
        }
        switch (b = f.attributeName, f.type) {
          case 3:
            S && s.push(" ", b, '=""');
            break;
          case 4:
            S === !0 ? s.push(" ", b, '=""') : S !== !1 && s.push(" ", b, '="', K(S), '"');
            break;
          case 5:
            isNaN(S) || s.push(" ", b, '="', K(S), '"');
            break;
          case 6:
            !isNaN(S) && 1 <= S && s.push(" ", b, '="', K(S), '"');
            break;
          default:
            f.sanitizeURL && (S = "" + S), s.push(" ", b, '="', K(S), '"');
        }
      } else if (N(b)) {
        switch (typeof S) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (f = b.toLowerCase().slice(0, 5), f !== "data-" && f !== "aria-") return;
        }
        s.push(" ", b, '="', K(S), '"');
      }
    }
  }
  function G(s, f, b) {
    if (f != null) {
      if (b != null) throw Error(a(60));
      if (typeof f != "object" || !("__html" in f)) throw Error(a(61));
      f = f.__html, f != null && s.push("" + f);
    }
  }
  function ue(s) {
    var f = "";
    return r.Children.forEach(s, function(b) {
      b != null && (f += b);
    }), f;
  }
  function ge(s, f, b, S) {
    s.push(Ue(b));
    var A = b = null, P;
    for (P in f) if (u.call(f, P)) {
      var j = f[P];
      if (j != null) switch (P) {
        case "children":
          b = j;
          break;
        case "dangerouslySetInnerHTML":
          A = j;
          break;
        default:
          re(s, S, P, j);
      }
    }
    return s.push(">"), G(s, A, b), typeof b == "string" ? (s.push(K(b)), null) : b;
  }
  var er = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ce = /* @__PURE__ */ new Map();
  function Ue(s) {
    var f = Ce.get(s);
    if (f === void 0) {
      if (!er.test(s)) throw Error(a(65, s));
      f = "<" + s, Ce.set(s, f);
    }
    return f;
  }
  function Ne(s, f, b, S, A) {
    switch (f) {
      case "select":
        s.push(Ue("select"));
        var P = null, j = null;
        for (he in b) if (u.call(b, he)) {
          var J = b[he];
          if (J != null) switch (he) {
            case "children":
              P = J;
              break;
            case "dangerouslySetInnerHTML":
              j = J;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              re(s, S, he, J);
          }
        }
        return s.push(">"), G(s, j, P), P;
      case "option":
        j = A.selectedValue, s.push(Ue("option"));
        var pe = J = null, xe = null, he = null;
        for (P in b) if (u.call(b, P)) {
          var Ye = b[P];
          if (Ye != null) switch (P) {
            case "children":
              J = Ye;
              break;
            case "selected":
              xe = Ye;
              break;
            case "dangerouslySetInnerHTML":
              he = Ye;
              break;
            case "value":
              pe = Ye;
            default:
              re(s, S, P, Ye);
          }
        }
        if (j != null) if (b = pe !== null ? "" + pe : ue(J), L(j)) {
          for (S = 0; S < j.length; S++)
            if ("" + j[S] === b) {
              s.push(' selected=""');
              break;
            }
        } else "" + j === b && s.push(' selected=""');
        else xe && s.push(' selected=""');
        return s.push(">"), G(s, he, J), J;
      case "textarea":
        s.push(Ue("textarea")), he = j = P = null;
        for (J in b) if (u.call(b, J) && (pe = b[J], pe != null)) switch (J) {
          case "children":
            he = pe;
            break;
          case "value":
            P = pe;
            break;
          case "defaultValue":
            j = pe;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(a(91));
          default:
            re(
              s,
              S,
              J,
              pe
            );
        }
        if (P === null && j !== null && (P = j), s.push(">"), he != null) {
          if (P != null) throw Error(a(92));
          if (L(he) && 1 < he.length) throw Error(a(93));
          P = "" + he;
        }
        return typeof P == "string" && P[0] === `
` && s.push(`
`), P !== null && s.push(K("" + P)), null;
      case "input":
        s.push(Ue("input")), pe = he = J = P = null;
        for (j in b) if (u.call(b, j) && (xe = b[j], xe != null)) switch (j) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(a(399, "input"));
          case "defaultChecked":
            pe = xe;
            break;
          case "defaultValue":
            J = xe;
            break;
          case "checked":
            he = xe;
            break;
          case "value":
            P = xe;
            break;
          default:
            re(s, S, j, xe);
        }
        return he !== null ? re(s, S, "checked", he) : pe !== null && re(s, S, "checked", pe), P !== null ? re(s, S, "value", P) : J !== null && re(s, S, "value", J), s.push("/>"), null;
      case "menuitem":
        s.push(Ue("menuitem"));
        for (var Er in b) if (u.call(b, Er) && (P = b[Er], P != null)) switch (Er) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(a(400));
          default:
            re(s, S, Er, P);
        }
        return s.push(">"), null;
      case "title":
        s.push(Ue("title")), P = null;
        for (Ye in b) if (u.call(b, Ye) && (j = b[Ye], j != null)) switch (Ye) {
          case "children":
            P = j;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(a(434));
          default:
            re(s, S, Ye, j);
        }
        return s.push(">"), P;
      case "listing":
      case "pre":
        s.push(Ue(f)), j = P = null;
        for (pe in b) if (u.call(b, pe) && (J = b[pe], J != null)) switch (pe) {
          case "children":
            P = J;
            break;
          case "dangerouslySetInnerHTML":
            j = J;
            break;
          default:
            re(s, S, pe, J);
        }
        if (s.push(">"), j != null) {
          if (P != null) throw Error(a(60));
          if (typeof j != "object" || !("__html" in j)) throw Error(a(61));
          b = j.__html, b != null && (typeof b == "string" && 0 < b.length && b[0] === `
` ? s.push(`
`, b) : s.push("" + b));
        }
        return typeof P == "string" && P[0] === `
` && s.push(`
`), P;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        s.push(Ue(f));
        for (var Dr in b) if (u.call(b, Dr) && (P = b[Dr], P != null)) switch (Dr) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(a(399, f));
          default:
            re(s, S, Dr, P);
        }
        return s.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return ge(
          s,
          b,
          f,
          S
        );
      case "html":
        return A.insertionMode === 0 && s.push("<!DOCTYPE html>"), ge(s, b, f, S);
      default:
        if (f.indexOf("-") === -1 && typeof b.is != "string") return ge(s, b, f, S);
        s.push(Ue(f)), j = P = null;
        for (xe in b) if (u.call(b, xe) && (J = b[xe], J != null)) switch (xe) {
          case "children":
            P = J;
            break;
          case "dangerouslySetInnerHTML":
            j = J;
            break;
          case "style":
            ne(s, S, J);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            N(xe) && typeof J != "function" && typeof J != "symbol" && s.push(" ", xe, '="', K(J), '"');
        }
        return s.push(">"), G(s, j, P), P;
    }
  }
  function Ke(s, f, b) {
    if (s.push('<!--$?--><template id="'), b === null) throw Error(a(395));
    return s.push(b), s.push('"></template>');
  }
  function tr(s, f, b, S) {
    switch (b.insertionMode) {
      case 0:
      case 1:
        return s.push('<div hidden id="'), s.push(f.segmentPrefix), f = S.toString(16), s.push(f), s.push('">');
      case 2:
        return s.push('<svg aria-hidden="true" style="display:none" id="'), s.push(f.segmentPrefix), f = S.toString(16), s.push(f), s.push('">');
      case 3:
        return s.push('<math aria-hidden="true" style="display:none" id="'), s.push(f.segmentPrefix), f = S.toString(16), s.push(f), s.push('">');
      case 4:
        return s.push('<table hidden id="'), s.push(f.segmentPrefix), f = S.toString(16), s.push(f), s.push('">');
      case 5:
        return s.push('<table hidden><tbody id="'), s.push(f.segmentPrefix), f = S.toString(16), s.push(f), s.push('">');
      case 6:
        return s.push('<table hidden><tr id="'), s.push(f.segmentPrefix), f = S.toString(16), s.push(f), s.push('">');
      case 7:
        return s.push('<table hidden><colgroup id="'), s.push(f.segmentPrefix), f = S.toString(16), s.push(f), s.push('">');
      default:
        throw Error(a(397));
    }
  }
  function _r(s, f) {
    switch (f.insertionMode) {
      case 0:
      case 1:
        return s.push("</div>");
      case 2:
        return s.push("</svg>");
      case 3:
        return s.push("</math>");
      case 4:
        return s.push("</table>");
      case 5:
        return s.push("</tbody></table>");
      case 6:
        return s.push("</tr></table>");
      case 7:
        return s.push("</colgroup></table>");
      default:
        throw Error(a(397));
    }
  }
  var fe = /[<\u2028\u2029]/g;
  function fr(s) {
    return JSON.stringify(s).replace(fe, function(f) {
      switch (f) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  function Ge(s, f) {
    return f = f === void 0 ? "" : f, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: f + "P:", segmentPrefix: f + "S:", boundaryPrefix: f + "B:", idPrefix: f, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: s };
  }
  function br(s, f, b, S) {
    return b.generateStaticMarkup ? (s.push(K(f)), !1) : (f === "" ? s = S : (S && s.push("<!-- -->"), s.push(K(f)), s = !0), s);
  }
  var $ = Object.assign, U = Symbol.for("react.element"), Te = Symbol.for("react.portal"), ke = Symbol.for("react.fragment"), me = Symbol.for("react.strict_mode"), ye = Symbol.for("react.profiler"), Ie = Symbol.for("react.provider"), Ae = Symbol.for("react.context"), we = Symbol.for("react.forward_ref"), Fe = Symbol.for("react.suspense"), gr = Symbol.for("react.suspense_list"), Mr = Symbol.for("react.memo"), We = Symbol.for("react.lazy"), Pr = Symbol.for("react.scope"), at = Symbol.for("react.debug_trace_mode"), Lr = Symbol.for("react.legacy_hidden"), vt = Symbol.for("react.default_value"), Br = Symbol.iterator;
  function Hr(s) {
    if (s == null) return null;
    if (typeof s == "function") return s.displayName || s.name || null;
    if (typeof s == "string") return s;
    switch (s) {
      case ke:
        return "Fragment";
      case Te:
        return "Portal";
      case ye:
        return "Profiler";
      case me:
        return "StrictMode";
      case Fe:
        return "Suspense";
      case gr:
        return "SuspenseList";
    }
    if (typeof s == "object") switch (s.$$typeof) {
      case Ae:
        return (s.displayName || "Context") + ".Consumer";
      case Ie:
        return (s._context.displayName || "Context") + ".Provider";
      case we:
        var f = s.render;
        return s = s.displayName, s || (s = f.displayName || f.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
      case Mr:
        return f = s.displayName || null, f !== null ? f : Hr(s.type) || "Memo";
      case We:
        f = s._payload, s = s._init;
        try {
          return Hr(s(f));
        } catch {
        }
    }
    return null;
  }
  var zr = {};
  function gt(s, f) {
    if (s = s.contextTypes, !s) return zr;
    var b = {}, S;
    for (S in s) b[S] = f[S];
    return b;
  }
  var Ar = null;
  function Sr(s, f) {
    if (s !== f) {
      s.context._currentValue2 = s.parentValue, s = s.parent;
      var b = f.parent;
      if (s === null) {
        if (b !== null) throw Error(a(401));
      } else {
        if (b === null) throw Error(a(401));
        Sr(s, b);
      }
      f.context._currentValue2 = f.value;
    }
  }
  function pr(s) {
    s.context._currentValue2 = s.parentValue, s = s.parent, s !== null && pr(s);
  }
  function yt(s) {
    var f = s.parent;
    f !== null && yt(f), s.context._currentValue2 = s.value;
  }
  function Rt(s, f) {
    if (s.context._currentValue2 = s.parentValue, s = s.parent, s === null) throw Error(a(402));
    s.depth === f.depth ? Sr(s, f) : Rt(s, f);
  }
  function $t(s, f) {
    var b = f.parent;
    if (b === null) throw Error(a(402));
    s.depth === b.depth ? Sr(s, b) : $t(s, b), f.context._currentValue2 = f.value;
  }
  function hr(s) {
    var f = Ar;
    f !== s && (f === null ? yt(s) : s === null ? pr(f) : f.depth === s.depth ? Sr(f, s) : f.depth > s.depth ? Rt(f, s) : $t(f, s), Ar = s);
  }
  var Lt = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(s, f) {
    s = s._reactInternals, s.queue !== null && s.queue.push(f);
  }, enqueueReplaceState: function(s, f) {
    s = s._reactInternals, s.replace = !0, s.queue = [f];
  }, enqueueForceUpdate: function() {
  } };
  function Qt(s, f, b, S) {
    var A = s.state !== void 0 ? s.state : null;
    s.updater = Lt, s.props = b, s.state = A;
    var P = { queue: [], replace: !1 };
    s._reactInternals = P;
    var j = f.contextType;
    if (s.context = typeof j == "object" && j !== null ? j._currentValue2 : S, j = f.getDerivedStateFromProps, typeof j == "function" && (j = j(b, A), A = j == null ? A : $({}, A, j), s.state = A), typeof f.getDerivedStateFromProps != "function" && typeof s.getSnapshotBeforeUpdate != "function" && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function")) if (f = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), f !== s.state && Lt.enqueueReplaceState(s, s.state, null), P.queue !== null && 0 < P.queue.length) if (f = P.queue, j = P.replace, P.queue = null, P.replace = !1, j && f.length === 1) s.state = f[0];
    else {
      for (P = j ? f[0] : s.state, A = !0, j = j ? 1 : 0; j < f.length; j++) {
        var J = f[j];
        J = typeof J == "function" ? J.call(s, P, b, S) : J, J != null && (A ? (A = !1, P = $({}, P, J)) : $(P, J));
      }
      s.state = P;
    }
    else P.queue = null;
  }
  var Bt = { id: 1, overflow: "" };
  function Kt(s, f, b) {
    var S = s.id;
    s = s.overflow;
    var A = 32 - Ut(S) - 1;
    S &= ~(1 << A), b += 1;
    var P = 32 - Ut(f) + A;
    if (30 < P) {
      var j = A - A % 5;
      return P = (S & (1 << j) - 1).toString(32), S >>= j, A -= j, { id: 1 << 32 - Ut(f) + A | b << A | S, overflow: P + s };
    }
    return { id: 1 << P | b << A | S, overflow: s };
  }
  var Ut = Math.clz32 ? Math.clz32 : it, fn = Math.log, Qr = Math.LN2;
  function it(s) {
    return s >>>= 0, s === 0 ? 32 : 31 - (fn(s) / Qr | 0) | 0;
  }
  function qt(s, f) {
    return s === f && (s !== 0 || 1 / s === 1 / f) || s !== s && f !== f;
  }
  var Nt = typeof Object.is == "function" ? Object.is : qt, Tr = null, Ir = null, Vr = null, Le = null, Ur = !1, st = !1, bt = 0, Kr = null, _t = 0;
  function qr() {
    if (Tr === null) throw Error(a(321));
    return Tr;
  }
  function xr() {
    if (0 < _t) throw Error(a(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function lt() {
    return Le === null ? Vr === null ? (Ur = !1, Vr = Le = xr()) : (Ur = !0, Le = Vr) : Le.next === null ? (Ur = !1, Le = Le.next = xr()) : (Ur = !0, Le = Le.next), Le;
  }
  function xt() {
    Ir = Tr = null, st = !1, Vr = null, _t = 0, Le = Kr = null;
  }
  function Wt(s, f) {
    return typeof f == "function" ? f(s) : f;
  }
  function mr(s, f, b) {
    if (Tr = qr(), Le = lt(), Ur) {
      var S = Le.queue;
      if (f = S.dispatch, Kr !== null && (b = Kr.get(S), b !== void 0)) {
        Kr.delete(S), S = Le.memoizedState;
        do
          S = s(S, b.action), b = b.next;
        while (b !== null);
        return Le.memoizedState = S, [S, f];
      }
      return [Le.memoizedState, f];
    }
    return s = s === Wt ? typeof f == "function" ? f() : f : b !== void 0 ? b(f) : f, Le.memoizedState = s, s = Le.queue = { last: null, dispatch: null }, s = s.dispatch = pn.bind(null, Tr, s), [Le.memoizedState, s];
  }
  function en(s, f) {
    if (Tr = qr(), Le = lt(), f = f === void 0 ? null : f, Le !== null) {
      var b = Le.memoizedState;
      if (b !== null && f !== null) {
        var S = b[1];
        e: if (S === null) S = !1;
        else {
          for (var A = 0; A < S.length && A < f.length; A++) if (!Nt(f[A], S[A])) {
            S = !1;
            break e;
          }
          S = !0;
        }
        if (S) return b[0];
      }
    }
    return s = s(), Le.memoizedState = [s, f], s;
  }
  function pn(s, f, b) {
    if (25 <= _t) throw Error(a(301));
    if (s === Tr) if (st = !0, s = { action: b, next: null }, Kr === null && (Kr = /* @__PURE__ */ new Map()), b = Kr.get(f), b === void 0) Kr.set(f, s);
    else {
      for (f = b; f.next !== null; ) f = f.next;
      f.next = s;
    }
  }
  function hn() {
    throw Error(a(394));
  }
  function C() {
  }
  var Y = { readContext: function(s) {
    return s._currentValue2;
  }, useContext: function(s) {
    return qr(), s._currentValue2;
  }, useMemo: en, useReducer: mr, useRef: function(s) {
    Tr = qr(), Le = lt();
    var f = Le.memoizedState;
    return f === null ? (s = { current: s }, Le.memoizedState = s) : f;
  }, useState: function(s) {
    return mr(Wt, s);
  }, useInsertionEffect: C, useLayoutEffect: function() {
  }, useCallback: function(s, f) {
    return en(function() {
      return s;
    }, f);
  }, useImperativeHandle: C, useEffect: C, useDebugValue: C, useDeferredValue: function(s) {
    return qr(), s;
  }, useTransition: function() {
    return qr(), [
      !1,
      hn
    ];
  }, useId: function() {
    var s = Ir.treeContext, f = s.overflow;
    s = s.id, s = (s & ~(1 << 32 - Ut(s) - 1)).toString(32) + f;
    var b = ae;
    if (b === null) throw Error(a(404));
    return f = bt++, s = ":" + b.idPrefix + "R" + s, 0 < f && (s += "H" + f.toString(32)), s + ":";
  }, useMutableSource: function(s, f) {
    return qr(), f(s._source);
  }, useSyncExternalStore: function(s, f, b) {
    if (b === void 0) throw Error(a(407));
    return b();
  } }, ae = null, le = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Re(s) {
    return console.error(s), null;
  }
  function je() {
  }
  function ze(s, f, b, S, A, P, j, J, pe) {
    var xe = [], he = /* @__PURE__ */ new Set();
    return f = { destination: null, responseState: f, progressiveChunkSize: S === void 0 ? 12800 : S, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: he, pingedTasks: xe, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: A === void 0 ? Re : A, onAllReady: je, onShellReady: j === void 0 ? je : j, onShellError: je, onFatalError: je }, b = sr(f, 0, null, b, !1, !1), b.parentFlushed = !0, s = Ee(f, s, null, b, he, zr, null, Bt), xe.push(s), f;
  }
  function Ee(s, f, b, S, A, P, j, J) {
    s.allPendingTasks++, b === null ? s.pendingRootTasks++ : b.pendingTasks++;
    var pe = { node: f, ping: function() {
      var xe = s.pingedTasks;
      xe.push(pe), xe.length === 1 && Or(s);
    }, blockedBoundary: b, blockedSegment: S, abortSet: A, legacyContext: P, context: j, treeContext: J };
    return A.add(pe), pe;
  }
  function sr(s, f, b, S, A, P) {
    return { status: 0, id: -1, index: f, parentFlushed: !1, chunks: [], children: [], formatContext: S, boundary: b, lastPushedText: A, textEmbedded: P };
  }
  function He(s, f) {
    if (s = s.onError(f), s != null && typeof s != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof s + '" instead');
    return s;
  }
  function Xe(s, f) {
    var b = s.onShellError;
    b(f), b = s.onFatalError, b(f), s.destination !== null ? (s.status = 2, s.destination.destroy(f)) : (s.status = 1, s.fatalError = f);
  }
  function nr(s, f, b, S, A) {
    for (Tr = {}, Ir = f, bt = 0, s = b(S, A); st; ) st = !1, bt = 0, _t += 1, Le = null, s = b(S, A);
    return xt(), s;
  }
  function ut(s, f, b, S) {
    var A = b.render(), P = S.childContextTypes;
    if (P != null) {
      var j = f.legacyContext;
      if (typeof b.getChildContext != "function") S = j;
      else {
        b = b.getChildContext();
        for (var J in b) if (!(J in P)) throw Error(a(108, Hr(S) || "Unknown", J));
        S = $({}, j, b);
      }
      f.legacyContext = S, ur(s, f, A), f.legacyContext = j;
    } else ur(s, f, A);
  }
  function et(s, f) {
    if (s && s.defaultProps) {
      f = $({}, f), s = s.defaultProps;
      for (var b in s) f[b] === void 0 && (f[b] = s[b]);
      return f;
    }
    return f;
  }
  function lr(s, f, b, S, A) {
    if (typeof b == "function") if (b.prototype && b.prototype.isReactComponent) {
      A = gt(b, f.legacyContext);
      var P = b.contextType;
      P = new b(S, typeof P == "object" && P !== null ? P._currentValue2 : A), Qt(P, b, S, A), ut(s, f, P, b);
    } else {
      P = gt(b, f.legacyContext), A = nr(s, f, b, S, P);
      var j = bt !== 0;
      if (typeof A == "object" && A !== null && typeof A.render == "function" && A.$$typeof === void 0) Qt(A, b, S, P), ut(s, f, A, b);
      else if (j) {
        S = f.treeContext, f.treeContext = Kt(S, 1, 0);
        try {
          ur(s, f, A);
        } finally {
          f.treeContext = S;
        }
      } else ur(s, f, A);
    }
    else if (typeof b == "string") {
      switch (A = f.blockedSegment, P = Ne(A.chunks, b, S, s.responseState, A.formatContext), A.lastPushedText = !1, j = A.formatContext, A.formatContext = Pe(j, b, S), tt(s, f, P), A.formatContext = j, b) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          A.chunks.push("</", b, ">");
      }
      A.lastPushedText = !1;
    } else {
      switch (b) {
        case Lr:
        case at:
        case me:
        case ye:
        case ke:
          ur(s, f, S.children);
          return;
        case gr:
          ur(s, f, S.children);
          return;
        case Pr:
          throw Error(a(343));
        case Fe:
          e: {
            b = f.blockedBoundary, A = f.blockedSegment, P = S.fallback, S = S.children, j = /* @__PURE__ */ new Set();
            var J = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: j, errorDigest: null }, pe = sr(s, A.chunks.length, J, A.formatContext, !1, !1);
            A.children.push(pe), A.lastPushedText = !1;
            var xe = sr(s, 0, null, A.formatContext, !1, !1);
            xe.parentFlushed = !0, f.blockedBoundary = J, f.blockedSegment = xe;
            try {
              if (tt(
                s,
                f,
                S
              ), s.responseState.generateStaticMarkup || xe.lastPushedText && xe.textEmbedded && xe.chunks.push("<!-- -->"), xe.status = 1, nt(J, xe), J.pendingTasks === 0) break e;
            } catch (he) {
              xe.status = 4, J.forceClientRender = !0, J.errorDigest = He(s, he);
            } finally {
              f.blockedBoundary = b, f.blockedSegment = A;
            }
            f = Ee(s, P, b, pe, j, f.legacyContext, f.context, f.treeContext), s.pingedTasks.push(f);
          }
          return;
      }
      if (typeof b == "object" && b !== null) switch (b.$$typeof) {
        case we:
          if (S = nr(s, f, b.render, S, A), bt !== 0) {
            b = f.treeContext, f.treeContext = Kt(b, 1, 0);
            try {
              ur(s, f, S);
            } finally {
              f.treeContext = b;
            }
          } else ur(s, f, S);
          return;
        case Mr:
          b = b.type, S = et(b, S), lr(s, f, b, S, A);
          return;
        case Ie:
          if (A = S.children, b = b._context, S = S.value, P = b._currentValue2, b._currentValue2 = S, j = Ar, Ar = S = { parent: j, depth: j === null ? 0 : j.depth + 1, context: b, parentValue: P, value: S }, f.context = S, ur(s, f, A), s = Ar, s === null) throw Error(a(403));
          S = s.parentValue, s.context._currentValue2 = S === vt ? s.context._defaultValue : S, s = Ar = s.parent, f.context = s;
          return;
        case Ae:
          S = S.children, S = S(b._currentValue2), ur(s, f, S);
          return;
        case We:
          A = b._init, b = A(b._payload), S = et(b, S), lr(
            s,
            f,
            b,
            S,
            void 0
          );
          return;
      }
      throw Error(a(130, b == null ? b : typeof b, ""));
    }
  }
  function ur(s, f, b) {
    if (f.node = b, typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case U:
          lr(s, f, b.type, b.props, b.ref);
          return;
        case Te:
          throw Error(a(257));
        case We:
          var S = b._init;
          b = S(b._payload), ur(s, f, b);
          return;
      }
      if (L(b)) {
        rt(s, f, b);
        return;
      }
      if (b === null || typeof b != "object" ? S = null : (S = Br && b[Br] || b["@@iterator"], S = typeof S == "function" ? S : null), S && (S = S.call(b))) {
        if (b = S.next(), !b.done) {
          var A = [];
          do
            A.push(b.value), b = S.next();
          while (!b.done);
          rt(s, f, A);
        }
        return;
      }
      throw s = Object.prototype.toString.call(b), Error(a(31, s === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : s));
    }
    typeof b == "string" ? (S = f.blockedSegment, S.lastPushedText = br(f.blockedSegment.chunks, b, s.responseState, S.lastPushedText)) : typeof b == "number" && (S = f.blockedSegment, S.lastPushedText = br(f.blockedSegment.chunks, "" + b, s.responseState, S.lastPushedText));
  }
  function rt(s, f, b) {
    for (var S = b.length, A = 0; A < S; A++) {
      var P = f.treeContext;
      f.treeContext = Kt(P, S, A);
      try {
        tt(s, f, b[A]);
      } finally {
        f.treeContext = P;
      }
    }
  }
  function tt(s, f, b) {
    var S = f.blockedSegment.formatContext, A = f.legacyContext, P = f.context;
    try {
      return ur(s, f, b);
    } catch (pe) {
      if (xt(), typeof pe == "object" && pe !== null && typeof pe.then == "function") {
        b = pe;
        var j = f.blockedSegment, J = sr(s, j.chunks.length, null, j.formatContext, j.lastPushedText, !0);
        j.children.push(J), j.lastPushedText = !1, s = Ee(s, f.node, f.blockedBoundary, J, f.abortSet, f.legacyContext, f.context, f.treeContext).ping, b.then(s, s), f.blockedSegment.formatContext = S, f.legacyContext = A, f.context = P, hr(P);
      } else throw f.blockedSegment.formatContext = S, f.legacyContext = A, f.context = P, hr(P), pe;
    }
  }
  function Ht(s) {
    var f = s.blockedBoundary;
    s = s.blockedSegment, s.status = 3, ct(this, f, s);
  }
  function wt(s, f, b) {
    var S = s.blockedBoundary;
    s.blockedSegment.status = 3, S === null ? (f.allPendingTasks--, f.status !== 2 && (f.status = 2, f.destination !== null && f.destination.push(null))) : (S.pendingTasks--, S.forceClientRender || (S.forceClientRender = !0, s = b === void 0 ? Error(a(432)) : b, S.errorDigest = f.onError(s), S.parentFlushed && f.clientRenderedBoundaries.push(S)), S.fallbackAbortableTasks.forEach(function(A) {
      return wt(A, f, b);
    }), S.fallbackAbortableTasks.clear(), f.allPendingTasks--, f.allPendingTasks === 0 && (S = f.onAllReady, S()));
  }
  function nt(s, f) {
    if (f.chunks.length === 0 && f.children.length === 1 && f.children[0].boundary === null) {
      var b = f.children[0];
      b.id = f.id, b.parentFlushed = !0, b.status === 1 && nt(s, b);
    } else s.completedSegments.push(f);
  }
  function ct(s, f, b) {
    if (f === null) {
      if (b.parentFlushed) {
        if (s.completedRootSegment !== null) throw Error(a(389));
        s.completedRootSegment = b;
      }
      s.pendingRootTasks--, s.pendingRootTasks === 0 && (s.onShellError = je, f = s.onShellReady, f());
    } else f.pendingTasks--, f.forceClientRender || (f.pendingTasks === 0 ? (b.parentFlushed && b.status === 1 && nt(f, b), f.parentFlushed && s.completedBoundaries.push(f), f.fallbackAbortableTasks.forEach(Ht, s), f.fallbackAbortableTasks.clear()) : b.parentFlushed && b.status === 1 && (nt(f, b), f.completedSegments.length === 1 && f.parentFlushed && s.partialBoundaries.push(f)));
    s.allPendingTasks--, s.allPendingTasks === 0 && (s = s.onAllReady, s());
  }
  function Or(s) {
    if (s.status !== 2) {
      var f = Ar, b = le.current;
      le.current = Y;
      var S = ae;
      ae = s.responseState;
      try {
        var A = s.pingedTasks, P;
        for (P = 0; P < A.length; P++) {
          var j = A[P], J = s, pe = j.blockedSegment;
          if (pe.status === 0) {
            hr(j.context);
            try {
              ur(J, j, j.node), J.responseState.generateStaticMarkup || pe.lastPushedText && pe.textEmbedded && pe.chunks.push("<!-- -->"), j.abortSet.delete(j), pe.status = 1, ct(J, j.blockedBoundary, pe);
            } catch (jr) {
              if (xt(), typeof jr == "object" && jr !== null && typeof jr.then == "function") {
                var xe = j.ping;
                jr.then(xe, xe);
              } else {
                j.abortSet.delete(j), pe.status = 4;
                var he = j.blockedBoundary, Ye = jr, Er = He(J, Ye);
                if (he === null ? Xe(J, Ye) : (he.pendingTasks--, he.forceClientRender || (he.forceClientRender = !0, he.errorDigest = Er, he.parentFlushed && J.clientRenderedBoundaries.push(he))), J.allPendingTasks--, J.allPendingTasks === 0) {
                  var Dr = J.onAllReady;
                  Dr();
                }
              }
            } finally {
            }
          }
        }
        A.splice(0, P), s.destination !== null && Nr(s, s.destination);
      } catch (jr) {
        He(s, jr), Xe(s, jr);
      } finally {
        ae = S, le.current = b, b === Y && hr(f);
      }
    }
  }
  function Pt(s, f, b) {
    switch (b.parentFlushed = !0, b.status) {
      case 0:
        var S = b.id = s.nextSegmentId++;
        return b.lastPushedText = !1, b.textEmbedded = !1, s = s.responseState, f.push('<template id="'), f.push(s.placeholderPrefix), s = S.toString(16), f.push(s), f.push('"></template>');
      case 1:
        b.status = 2;
        var A = !0;
        S = b.chunks;
        var P = 0;
        b = b.children;
        for (var j = 0; j < b.length; j++) {
          for (A = b[j]; P < A.index; P++) f.push(S[P]);
          A = Vt(s, f, A);
        }
        for (; P < S.length - 1; P++) f.push(S[P]);
        return P < S.length && (A = f.push(S[P])), A;
      default:
        throw Error(a(390));
    }
  }
  function Vt(s, f, b) {
    var S = b.boundary;
    if (S === null) return Pt(s, f, b);
    if (S.parentFlushed = !0, S.forceClientRender) return s.responseState.generateStaticMarkup || (S = S.errorDigest, f.push("<!--$!-->"), f.push("<template"), S && (f.push(' data-dgst="'), S = K(S), f.push(S), f.push('"')), f.push("></template>")), Pt(s, f, b), s = s.responseState.generateStaticMarkup ? !0 : f.push("<!--/$-->"), s;
    if (0 < S.pendingTasks) {
      S.rootSegmentID = s.nextSegmentId++, 0 < S.completedSegments.length && s.partialBoundaries.push(S);
      var A = s.responseState, P = A.nextSuspenseID++;
      return A = A.boundaryPrefix + P.toString(16), S = S.id = A, Ke(f, s.responseState, S), Pt(s, f, b), f.push("<!--/$-->");
    }
    if (S.byteSize > s.progressiveChunkSize) return S.rootSegmentID = s.nextSegmentId++, s.completedBoundaries.push(S), Ke(f, s.responseState, S.id), Pt(s, f, b), f.push("<!--/$-->");
    if (s.responseState.generateStaticMarkup || f.push("<!--$-->"), b = S.completedSegments, b.length !== 1) throw Error(a(391));
    return Vt(s, f, b[0]), s = s.responseState.generateStaticMarkup ? !0 : f.push("<!--/$-->"), s;
  }
  function rn(s, f, b) {
    return tr(f, s.responseState, b.formatContext, b.id), Vt(s, f, b), _r(f, b.formatContext);
  }
  function Yr(s, f, b) {
    for (var S = b.completedSegments, A = 0; A < S.length; A++) dt(s, f, b, S[A]);
    if (S.length = 0, s = s.responseState, S = b.id, b = b.rootSegmentID, f.push(s.startInlineScript), s.sentCompleteBoundaryFunction ? f.push('$RC("') : (s.sentCompleteBoundaryFunction = !0, f.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), S === null) throw Error(a(395));
    return b = b.toString(16), f.push(S), f.push('","'), f.push(s.segmentPrefix), f.push(b), f.push('")<\/script>');
  }
  function dt(s, f, b, S) {
    if (S.status === 2) return !0;
    var A = S.id;
    if (A === -1) {
      if ((S.id = b.rootSegmentID) === -1) throw Error(a(392));
      return rn(s, f, S);
    }
    return rn(s, f, S), s = s.responseState, f.push(s.startInlineScript), s.sentCompleteSegmentFunction ? f.push('$RS("') : (s.sentCompleteSegmentFunction = !0, f.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), f.push(s.segmentPrefix), A = A.toString(16), f.push(A), f.push('","'), f.push(s.placeholderPrefix), f.push(A), f.push('")<\/script>');
  }
  function Nr(s, f) {
    try {
      var b = s.completedRootSegment;
      if (b !== null && s.pendingRootTasks === 0) {
        Vt(s, f, b), s.completedRootSegment = null;
        var S = s.responseState.bootstrapChunks;
        for (b = 0; b < S.length - 1; b++) f.push(S[b]);
        b < S.length && f.push(S[b]);
      }
      var A = s.clientRenderedBoundaries, P;
      for (P = 0; P < A.length; P++) {
        var j = A[P];
        S = f;
        var J = s.responseState, pe = j.id, xe = j.errorDigest, he = j.errorMessage, Ye = j.errorComponentStack;
        if (S.push(J.startInlineScript), J.sentClientRenderFunction ? S.push('$RX("') : (J.sentClientRenderFunction = !0, S.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), pe === null) throw Error(a(395));
        if (S.push(pe), S.push('"'), xe || he || Ye) {
          S.push(",");
          var Er = fr(xe || "");
          S.push(Er);
        }
        if (he || Ye) {
          S.push(",");
          var Dr = fr(he || "");
          S.push(Dr);
        }
        if (Ye) {
          S.push(",");
          var jr = fr(Ye);
          S.push(jr);
        }
        if (!S.push(")<\/script>")) {
          s.destination = null, P++, A.splice(0, P);
          return;
        }
      }
      A.splice(0, P);
      var Yt = s.completedBoundaries;
      for (P = 0; P < Yt.length; P++) if (!Yr(s, f, Yt[P])) {
        s.destination = null, P++, Yt.splice(0, P);
        return;
      }
      Yt.splice(0, P);
      var St = s.partialBoundaries;
      for (P = 0; P < St.length; P++) {
        var tn = St[P];
        e: {
          A = s, j = f;
          var Gt = tn.completedSegments;
          for (J = 0; J < Gt.length; J++) if (!dt(A, j, tn, Gt[J])) {
            J++, Gt.splice(0, J);
            var Xt = !1;
            break e;
          }
          Gt.splice(0, J), Xt = !0;
        }
        if (!Xt) {
          s.destination = null, P++, St.splice(0, P);
          return;
        }
      }
      St.splice(0, P);
      var kt = s.completedBoundaries;
      for (P = 0; P < kt.length; P++) if (!Yr(s, f, kt[P])) {
        s.destination = null, P++, kt.splice(0, P);
        return;
      }
      kt.splice(0, P);
    } finally {
      s.allPendingTasks === 0 && s.pingedTasks.length === 0 && s.clientRenderedBoundaries.length === 0 && s.completedBoundaries.length === 0 && f.push(null);
    }
  }
  function sn(s, f) {
    try {
      var b = s.abortableTasks;
      b.forEach(function(S) {
        return wt(S, s, f);
      }), b.clear(), s.destination !== null && Nr(s, s.destination);
    } catch (S) {
      He(s, S), Xe(s, S);
    }
  }
  function kr() {
  }
  function Fr(s, f, b, S) {
    var A = !1, P = null, j = "", J = { push: function(xe) {
      return xe !== null && (j += xe), !0;
    }, destroy: function(xe) {
      A = !0, P = xe;
    } }, pe = !1;
    if (s = ze(s, Ge(b, f ? f.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, kr, void 0, function() {
      pe = !0;
    }), Or(s), sn(s, S), s.status === 1) s.status = 2, J.destroy(s.fatalError);
    else if (s.status !== 2 && s.destination === null) {
      s.destination = J;
      try {
        Nr(s, J);
      } catch (xe) {
        He(s, xe), Xe(s, xe);
      }
    }
    if (A) throw P;
    if (!pe) throw Error(a(426));
    return j;
  }
  return ta.renderToNodeStream = function() {
    throw Error(a(207));
  }, ta.renderToStaticMarkup = function(s, f) {
    return Fr(s, f, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, ta.renderToStaticNodeStream = function() {
    throw Error(a(208));
  }, ta.renderToString = function(s, f) {
    return Fr(s, f, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, ta.version = "18.3.1", ta;
}
var Ws = {};
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fu;
function Oc() {
  if (Fu) return Ws;
  Fu = 1;
  var r = ca();
  function a(l) {
    for (var p = "https://reactjs.org/docs/error-decoder.html?invariant=" + l, g = 1; g < arguments.length; g++) p += "&args[]=" + encodeURIComponent(arguments[g]);
    return "Minified React error #" + l + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var u = null, x = 0;
  function d(l, p) {
    if (p.length !== 0) if (512 < p.length) 0 < x && (l.enqueue(new Uint8Array(u.buffer, 0, x)), u = new Uint8Array(512), x = 0), l.enqueue(p);
    else {
      var g = u.length - x;
      g < p.length && (g === 0 ? l.enqueue(u) : (u.set(p.subarray(0, g), x), l.enqueue(u), p = p.subarray(g)), u = new Uint8Array(512), x = 0), u.set(p, x), x += p.length;
    }
  }
  function _(l, p) {
    return d(l, p), !0;
  }
  function N(l) {
    u && 0 < x && (l.enqueue(new Uint8Array(u.buffer, 0, x)), u = null, x = 0);
  }
  var V = new TextEncoder();
  function E(l) {
    return V.encode(l);
  }
  function R(l) {
    return V.encode(l);
  }
  function te(l, p) {
    typeof l.error == "function" ? l.error(p) : l.close();
  }
  var O = Object.prototype.hasOwnProperty, se = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, B = {}, K = {};
  function be(l) {
    return O.call(K, l) ? !0 : O.call(B, l) ? !1 : se.test(l) ? K[l] = !0 : (B[l] = !0, !1);
  }
  function Z(l, p, g, w, D, z, W) {
    this.acceptsBooleans = p === 2 || p === 3 || p === 4, this.attributeName = w, this.attributeNamespace = D, this.mustUseProperty = g, this.propertyName = l, this.type = p, this.sanitizeURL = z, this.removeEmptyString = W;
  }
  var L = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(l) {
    L[l] = new Z(l, 0, !1, l, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(l) {
    var p = l[0];
    L[p] = new Z(p, 1, !1, l[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(l) {
    L[l] = new Z(l, 2, !1, l.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(l) {
    L[l] = new Z(l, 2, !1, l, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(l) {
    L[l] = new Z(l, 3, !1, l.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(l) {
    L[l] = new Z(l, 3, !0, l, null, !1, !1);
  }), ["capture", "download"].forEach(function(l) {
    L[l] = new Z(l, 4, !1, l, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(l) {
    L[l] = new Z(l, 6, !1, l, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(l) {
    L[l] = new Z(l, 5, !1, l.toLowerCase(), null, !1, !1);
  });
  var de = /[\-:]([a-z])/g;
  function Pe(l) {
    return l[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(l) {
    var p = l.replace(
      de,
      Pe
    );
    L[p] = new Z(p, 1, !1, l, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(l) {
    var p = l.replace(de, Pe);
    L[p] = new Z(p, 1, !1, l, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(l) {
    var p = l.replace(de, Pe);
    L[p] = new Z(p, 1, !1, l, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(l) {
    L[l] = new Z(l, 1, !1, l.toLowerCase(), null, !1, !1);
  }), L.xlinkHref = new Z("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(l) {
    L[l] = new Z(l, 1, !1, l.toLowerCase(), null, !0, !0);
  });
  var ee = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, ne = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ee).forEach(function(l) {
    ne.forEach(function(p) {
      p = p + l.charAt(0).toUpperCase() + l.substring(1), ee[p] = ee[l];
    });
  });
  var re = /["'&<>]/;
  function G(l) {
    if (typeof l == "boolean" || typeof l == "number") return "" + l;
    l = "" + l;
    var p = re.exec(l);
    if (p) {
      var g = "", w, D = 0;
      for (w = p.index; w < l.length; w++) {
        switch (l.charCodeAt(w)) {
          case 34:
            p = "&quot;";
            break;
          case 38:
            p = "&amp;";
            break;
          case 39:
            p = "&#x27;";
            break;
          case 60:
            p = "&lt;";
            break;
          case 62:
            p = "&gt;";
            break;
          default:
            continue;
        }
        D !== w && (g += l.substring(D, w)), D = w + 1, g += p;
      }
      l = D !== w ? g + l.substring(D, w) : g;
    }
    return l;
  }
  var ue = /([A-Z])/g, ge = /^ms-/, er = Array.isArray, Ce = R("<script>"), Ue = R("<\/script>"), Ne = R('<script src="'), Ke = R('<script type="module" src="'), tr = R('" async=""><\/script>'), _r = /(<\/|<)(s)(cript)/gi;
  function fe(l, p, g, w) {
    return "" + p + (g === "s" ? "\\u0073" : "\\u0053") + w;
  }
  function fr(l, p, g, w, D) {
    l = l === void 0 ? "" : l, p = p === void 0 ? Ce : R('<script nonce="' + G(p) + '">');
    var z = [];
    if (g !== void 0 && z.push(p, E(("" + g).replace(_r, fe)), Ue), w !== void 0) for (g = 0; g < w.length; g++) z.push(Ne, E(G(w[g])), tr);
    if (D !== void 0) for (w = 0; w < D.length; w++) z.push(Ke, E(G(D[w])), tr);
    return { bootstrapChunks: z, startInlineScript: p, placeholderPrefix: R(l + "P:"), segmentPrefix: R(l + "S:"), boundaryPrefix: l + "B:", idPrefix: l, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Ge(l, p) {
    return { insertionMode: l, selectedValue: p };
  }
  function br(l) {
    return Ge(l === "http://www.w3.org/2000/svg" ? 2 : l === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function $(l, p, g) {
    switch (p) {
      case "select":
        return Ge(1, g.value != null ? g.value : g.defaultValue);
      case "svg":
        return Ge(2, null);
      case "math":
        return Ge(3, null);
      case "foreignObject":
        return Ge(1, null);
      case "table":
        return Ge(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return Ge(5, null);
      case "colgroup":
        return Ge(7, null);
      case "tr":
        return Ge(6, null);
    }
    return 4 <= l.insertionMode || l.insertionMode === 0 ? Ge(1, null) : l;
  }
  var U = R("<!-- -->");
  function Te(l, p, g, w) {
    return p === "" ? w : (w && l.push(U), l.push(E(G(p))), !0);
  }
  var ke = /* @__PURE__ */ new Map(), me = R(' style="'), ye = R(":"), Ie = R(";");
  function Ae(l, p, g) {
    if (typeof g != "object") throw Error(a(62));
    p = !0;
    for (var w in g) if (O.call(g, w)) {
      var D = g[w];
      if (D != null && typeof D != "boolean" && D !== "") {
        if (w.indexOf("--") === 0) {
          var z = E(G(w));
          D = E(G(("" + D).trim()));
        } else {
          z = w;
          var W = ke.get(z);
          W !== void 0 || (W = R(G(z.replace(ue, "-$1").toLowerCase().replace(ge, "-ms-"))), ke.set(z, W)), z = W, D = typeof D == "number" ? D === 0 || O.call(ee, w) ? E("" + D) : E(D + "px") : E(G(("" + D).trim()));
        }
        p ? (p = !1, l.push(me, z, ye, D)) : l.push(Ie, z, ye, D);
      }
    }
    p || l.push(gr);
  }
  var we = R(" "), Fe = R('="'), gr = R('"'), Mr = R('=""');
  function We(l, p, g, w) {
    switch (g) {
      case "style":
        Ae(l, p, w);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < g.length) || g[0] !== "o" && g[0] !== "O" || g[1] !== "n" && g[1] !== "N") {
      if (p = L.hasOwnProperty(g) ? L[g] : null, p !== null) {
        switch (typeof w) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!p.acceptsBooleans) return;
        }
        switch (g = E(p.attributeName), p.type) {
          case 3:
            w && l.push(we, g, Mr);
            break;
          case 4:
            w === !0 ? l.push(we, g, Mr) : w !== !1 && l.push(we, g, Fe, E(G(w)), gr);
            break;
          case 5:
            isNaN(w) || l.push(we, g, Fe, E(G(w)), gr);
            break;
          case 6:
            !isNaN(w) && 1 <= w && l.push(we, g, Fe, E(G(w)), gr);
            break;
          default:
            p.sanitizeURL && (w = "" + w), l.push(we, g, Fe, E(G(w)), gr);
        }
      } else if (be(g)) {
        switch (typeof w) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (p = g.toLowerCase().slice(0, 5), p !== "data-" && p !== "aria-") return;
        }
        l.push(we, E(g), Fe, E(G(w)), gr);
      }
    }
  }
  var Pr = R(">"), at = R("/>");
  function Lr(l, p, g) {
    if (p != null) {
      if (g != null) throw Error(a(60));
      if (typeof p != "object" || !("__html" in p)) throw Error(a(61));
      p = p.__html, p != null && l.push(E("" + p));
    }
  }
  function vt(l) {
    var p = "";
    return r.Children.forEach(l, function(g) {
      g != null && (p += g);
    }), p;
  }
  var Br = R(' selected=""');
  function Hr(l, p, g, w) {
    l.push(Sr(g));
    var D = g = null, z;
    for (z in p) if (O.call(p, z)) {
      var W = p[z];
      if (W != null) switch (z) {
        case "children":
          g = W;
          break;
        case "dangerouslySetInnerHTML":
          D = W;
          break;
        default:
          We(l, w, z, W);
      }
    }
    return l.push(Pr), Lr(l, D, g), typeof g == "string" ? (l.push(E(G(g))), null) : g;
  }
  var zr = R(`
`), gt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ar = /* @__PURE__ */ new Map();
  function Sr(l) {
    var p = Ar.get(l);
    if (p === void 0) {
      if (!gt.test(l)) throw Error(a(65, l));
      p = R("<" + l), Ar.set(l, p);
    }
    return p;
  }
  var pr = R("<!DOCTYPE html>");
  function yt(l, p, g, w, D) {
    switch (p) {
      case "select":
        l.push(Sr("select"));
        var z = null, W = null;
        for (Oe in g) if (O.call(g, Oe)) {
          var Q = g[Oe];
          if (Q != null) switch (Oe) {
            case "children":
              z = Q;
              break;
            case "dangerouslySetInnerHTML":
              W = Q;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              We(l, w, Oe, Q);
          }
        }
        return l.push(Pr), Lr(l, W, z), z;
      case "option":
        W = D.selectedValue, l.push(Sr("option"));
        var Se = Q = null, Me = null, Oe = null;
        for (z in g) if (O.call(g, z)) {
          var dr = g[z];
          if (dr != null) switch (z) {
            case "children":
              Q = dr;
              break;
            case "selected":
              Me = dr;
              break;
            case "dangerouslySetInnerHTML":
              Oe = dr;
              break;
            case "value":
              Se = dr;
            default:
              We(l, w, z, dr);
          }
        }
        if (W != null) if (g = Se !== null ? "" + Se : vt(Q), er(W)) {
          for (w = 0; w < W.length; w++)
            if ("" + W[w] === g) {
              l.push(Br);
              break;
            }
        } else "" + W === g && l.push(Br);
        else Me && l.push(Br);
        return l.push(Pr), Lr(l, Oe, Q), Q;
      case "textarea":
        l.push(Sr("textarea")), Oe = W = z = null;
        for (Q in g) if (O.call(g, Q) && (Se = g[Q], Se != null)) switch (Q) {
          case "children":
            Oe = Se;
            break;
          case "value":
            z = Se;
            break;
          case "defaultValue":
            W = Se;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(a(91));
          default:
            We(l, w, Q, Se);
        }
        if (z === null && W !== null && (z = W), l.push(Pr), Oe != null) {
          if (z != null) throw Error(a(92));
          if (er(Oe) && 1 < Oe.length) throw Error(a(93));
          z = "" + Oe;
        }
        return typeof z == "string" && z[0] === `
` && l.push(zr), z !== null && l.push(E(G("" + z))), null;
      case "input":
        l.push(Sr("input")), Se = Oe = Q = z = null;
        for (W in g) if (O.call(g, W) && (Me = g[W], Me != null)) switch (W) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(a(399, "input"));
          case "defaultChecked":
            Se = Me;
            break;
          case "defaultValue":
            Q = Me;
            break;
          case "checked":
            Oe = Me;
            break;
          case "value":
            z = Me;
            break;
          default:
            We(l, w, W, Me);
        }
        return Oe !== null ? We(
          l,
          w,
          "checked",
          Oe
        ) : Se !== null && We(l, w, "checked", Se), z !== null ? We(l, w, "value", z) : Q !== null && We(l, w, "value", Q), l.push(at), null;
      case "menuitem":
        l.push(Sr("menuitem"));
        for (var pt in g) if (O.call(g, pt) && (z = g[pt], z != null)) switch (pt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(a(400));
          default:
            We(l, w, pt, z);
        }
        return l.push(Pr), null;
      case "title":
        l.push(Sr("title")), z = null;
        for (dr in g) if (O.call(g, dr) && (W = g[dr], W != null)) switch (dr) {
          case "children":
            z = W;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(a(434));
          default:
            We(l, w, dr, W);
        }
        return l.push(Pr), z;
      case "listing":
      case "pre":
        l.push(Sr(p)), W = z = null;
        for (Se in g) if (O.call(g, Se) && (Q = g[Se], Q != null)) switch (Se) {
          case "children":
            z = Q;
            break;
          case "dangerouslySetInnerHTML":
            W = Q;
            break;
          default:
            We(l, w, Se, Q);
        }
        if (l.push(Pr), W != null) {
          if (z != null) throw Error(a(60));
          if (typeof W != "object" || !("__html" in W)) throw Error(a(61));
          g = W.__html, g != null && (typeof g == "string" && 0 < g.length && g[0] === `
` ? l.push(zr, E(g)) : l.push(E("" + g)));
        }
        return typeof z == "string" && z[0] === `
` && l.push(zr), z;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        l.push(Sr(p));
        for (var zt in g) if (O.call(g, zt) && (z = g[zt], z != null)) switch (zt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(a(399, p));
          default:
            We(l, w, zt, z);
        }
        return l.push(at), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Hr(l, g, p, w);
      case "html":
        return D.insertionMode === 0 && l.push(pr), Hr(l, g, p, w);
      default:
        if (p.indexOf("-") === -1 && typeof g.is != "string") return Hr(l, g, p, w);
        l.push(Sr(p)), W = z = null;
        for (Me in g) if (O.call(g, Me) && (Q = g[Me], Q != null)) switch (Me) {
          case "children":
            z = Q;
            break;
          case "dangerouslySetInnerHTML":
            W = Q;
            break;
          case "style":
            Ae(l, w, Q);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            be(Me) && typeof Q != "function" && typeof Q != "symbol" && l.push(we, E(Me), Fe, E(G(Q)), gr);
        }
        return l.push(Pr), Lr(l, W, z), z;
    }
  }
  var Rt = R("</"), $t = R(">"), hr = R('<template id="'), Lt = R('"></template>'), Qt = R("<!--$-->"), Bt = R('<!--$?--><template id="'), Kt = R('"></template>'), Ut = R("<!--$!-->"), fn = R("<!--/$-->"), Qr = R("<template"), it = R('"'), qt = R(' data-dgst="');
  R(' data-msg="'), R(' data-stck="');
  var Nt = R("></template>");
  function Tr(l, p, g) {
    if (d(l, Bt), g === null) throw Error(a(395));
    return d(l, g), _(l, Kt);
  }
  var Ir = R('<div hidden id="'), Vr = R('">'), Le = R("</div>"), Ur = R('<svg aria-hidden="true" style="display:none" id="'), st = R('">'), bt = R("</svg>"), Kr = R('<math aria-hidden="true" style="display:none" id="'), _t = R('">'), qr = R("</math>"), xr = R('<table hidden id="'), lt = R('">'), xt = R("</table>"), Wt = R('<table hidden><tbody id="'), mr = R('">'), en = R("</tbody></table>"), pn = R('<table hidden><tr id="'), hn = R('">'), C = R("</tr></table>"), Y = R('<table hidden><colgroup id="'), ae = R('">'), le = R("</colgroup></table>");
  function Re(l, p, g, w) {
    switch (g.insertionMode) {
      case 0:
      case 1:
        return d(l, Ir), d(l, p.segmentPrefix), d(l, E(w.toString(16))), _(l, Vr);
      case 2:
        return d(l, Ur), d(l, p.segmentPrefix), d(l, E(w.toString(16))), _(l, st);
      case 3:
        return d(l, Kr), d(l, p.segmentPrefix), d(l, E(w.toString(16))), _(l, _t);
      case 4:
        return d(l, xr), d(l, p.segmentPrefix), d(l, E(w.toString(16))), _(l, lt);
      case 5:
        return d(l, Wt), d(l, p.segmentPrefix), d(l, E(w.toString(16))), _(l, mr);
      case 6:
        return d(l, pn), d(l, p.segmentPrefix), d(l, E(w.toString(16))), _(l, hn);
      case 7:
        return d(
          l,
          Y
        ), d(l, p.segmentPrefix), d(l, E(w.toString(16))), _(l, ae);
      default:
        throw Error(a(397));
    }
  }
  function je(l, p) {
    switch (p.insertionMode) {
      case 0:
      case 1:
        return _(l, Le);
      case 2:
        return _(l, bt);
      case 3:
        return _(l, qr);
      case 4:
        return _(l, xt);
      case 5:
        return _(l, en);
      case 6:
        return _(l, C);
      case 7:
        return _(l, le);
      default:
        throw Error(a(397));
    }
  }
  var ze = R('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Ee = R('$RS("'), sr = R('","'), He = R('")<\/script>'), Xe = R('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), nr = R('$RC("'), ut = R('","'), et = R('")<\/script>'), lr = R('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), ur = R('$RX("'), rt = R('"'), tt = R(")<\/script>"), Ht = R(","), wt = /[<\u2028\u2029]/g;
  function nt(l) {
    return JSON.stringify(l).replace(wt, function(p) {
      switch (p) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  var ct = Object.assign, Or = Symbol.for("react.element"), Pt = Symbol.for("react.portal"), Vt = Symbol.for("react.fragment"), rn = Symbol.for("react.strict_mode"), Yr = Symbol.for("react.profiler"), dt = Symbol.for("react.provider"), Nr = Symbol.for("react.context"), sn = Symbol.for("react.forward_ref"), kr = Symbol.for("react.suspense"), Fr = Symbol.for("react.suspense_list"), s = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), b = Symbol.for("react.scope"), S = Symbol.for("react.debug_trace_mode"), A = Symbol.for("react.legacy_hidden"), P = Symbol.for("react.default_value"), j = Symbol.iterator;
  function J(l) {
    if (l == null) return null;
    if (typeof l == "function") return l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Vt:
        return "Fragment";
      case Pt:
        return "Portal";
      case Yr:
        return "Profiler";
      case rn:
        return "StrictMode";
      case kr:
        return "Suspense";
      case Fr:
        return "SuspenseList";
    }
    if (typeof l == "object") switch (l.$$typeof) {
      case Nr:
        return (l.displayName || "Context") + ".Consumer";
      case dt:
        return (l._context.displayName || "Context") + ".Provider";
      case sn:
        var p = l.render;
        return l = l.displayName, l || (l = p.displayName || p.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
      case s:
        return p = l.displayName || null, p !== null ? p : J(l.type) || "Memo";
      case f:
        p = l._payload, l = l._init;
        try {
          return J(l(p));
        } catch {
        }
    }
    return null;
  }
  var pe = {};
  function xe(l, p) {
    if (l = l.contextTypes, !l) return pe;
    var g = {}, w;
    for (w in l) g[w] = p[w];
    return g;
  }
  var he = null;
  function Ye(l, p) {
    if (l !== p) {
      l.context._currentValue = l.parentValue, l = l.parent;
      var g = p.parent;
      if (l === null) {
        if (g !== null) throw Error(a(401));
      } else {
        if (g === null) throw Error(a(401));
        Ye(l, g);
      }
      p.context._currentValue = p.value;
    }
  }
  function Er(l) {
    l.context._currentValue = l.parentValue, l = l.parent, l !== null && Er(l);
  }
  function Dr(l) {
    var p = l.parent;
    p !== null && Dr(p), l.context._currentValue = l.value;
  }
  function jr(l, p) {
    if (l.context._currentValue = l.parentValue, l = l.parent, l === null) throw Error(a(402));
    l.depth === p.depth ? Ye(l, p) : jr(l, p);
  }
  function Yt(l, p) {
    var g = p.parent;
    if (g === null) throw Error(a(402));
    l.depth === g.depth ? Ye(l, g) : Yt(l, g), p.context._currentValue = p.value;
  }
  function St(l) {
    var p = he;
    p !== l && (p === null ? Dr(l) : l === null ? Er(p) : p.depth === l.depth ? Ye(p, l) : p.depth > l.depth ? jr(p, l) : Yt(p, l), he = l);
  }
  var tn = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(l, p) {
    l = l._reactInternals, l.queue !== null && l.queue.push(p);
  }, enqueueReplaceState: function(l, p) {
    l = l._reactInternals, l.replace = !0, l.queue = [p];
  }, enqueueForceUpdate: function() {
  } };
  function Gt(l, p, g, w) {
    var D = l.state !== void 0 ? l.state : null;
    l.updater = tn, l.props = g, l.state = D;
    var z = { queue: [], replace: !1 };
    l._reactInternals = z;
    var W = p.contextType;
    if (l.context = typeof W == "object" && W !== null ? W._currentValue : w, W = p.getDerivedStateFromProps, typeof W == "function" && (W = W(g, D), D = W == null ? D : ct({}, D, W), l.state = D), typeof p.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function")) if (p = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), p !== l.state && tn.enqueueReplaceState(l, l.state, null), z.queue !== null && 0 < z.queue.length) if (p = z.queue, W = z.replace, z.queue = null, z.replace = !1, W && p.length === 1) l.state = p[0];
    else {
      for (z = W ? p[0] : l.state, D = !0, W = W ? 1 : 0; W < p.length; W++) {
        var Q = p[W];
        Q = typeof Q == "function" ? Q.call(l, z, g, w) : Q, Q != null && (D ? (D = !1, z = ct({}, z, Q)) : ct(z, Q));
      }
      l.state = z;
    }
    else z.queue = null;
  }
  var Xt = { id: 1, overflow: "" };
  function kt(l, p, g) {
    var w = l.id;
    l = l.overflow;
    var D = 32 - Zt(w) - 1;
    w &= ~(1 << D), g += 1;
    var z = 32 - Zt(p) + D;
    if (30 < z) {
      var W = D - D % 5;
      return z = (w & (1 << W) - 1).toString(32), w >>= W, D -= W, { id: 1 << 32 - Zt(p) + D | g << D | w, overflow: z + l };
    }
    return { id: 1 << z | g << D | w, overflow: l };
  }
  var Zt = Math.clz32 ? Math.clz32 : mn, Ro = Math.log, to = Math.LN2;
  function mn(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Ro(l) / to | 0) | 0;
  }
  function Et(l, p) {
    return l === p && (l !== 0 || 1 / l === 1 / p) || l !== l && p !== p;
  }
  var $o = typeof Object.is == "function" ? Object.is : Et, It = null, Rn = null, nn = null, or = null, ot = !1, vn = !1, Jt = 0, ft = null, ln = 0;
  function Ct() {
    if (It === null) throw Error(a(321));
    return It;
  }
  function Gr() {
    if (0 < ln) throw Error(a(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Mn() {
    return or === null ? nn === null ? (ot = !1, nn = or = Gr()) : (ot = !0, or = nn) : or.next === null ? (ot = !1, or = or.next = Gr()) : (ot = !0, or = or.next), or;
  }
  function gn() {
    Rn = It = null, vn = !1, nn = null, ln = 0, or = ft = null;
  }
  function no(l, p) {
    return typeof p == "function" ? p(l) : p;
  }
  function $n(l, p, g) {
    if (It = Ct(), or = Mn(), ot) {
      var w = or.queue;
      if (p = w.dispatch, ft !== null && (g = ft.get(w), g !== void 0)) {
        ft.delete(w), w = or.memoizedState;
        do
          w = l(w, g.action), g = g.next;
        while (g !== null);
        return or.memoizedState = w, [w, p];
      }
      return [or.memoizedState, p];
    }
    return l = l === no ? typeof p == "function" ? p() : p : g !== void 0 ? g(p) : p, or.memoizedState = l, l = or.queue = { last: null, dispatch: null }, l = l.dispatch = T.bind(null, It, l), [or.memoizedState, l];
  }
  function m(l, p) {
    if (It = Ct(), or = Mn(), p = p === void 0 ? null : p, or !== null) {
      var g = or.memoizedState;
      if (g !== null && p !== null) {
        var w = g[1];
        e: if (w === null) w = !1;
        else {
          for (var D = 0; D < w.length && D < p.length; D++) if (!$o(p[D], w[D])) {
            w = !1;
            break e;
          }
          w = !0;
        }
        if (w) return g[0];
      }
    }
    return l = l(), or.memoizedState = [l, p], l;
  }
  function T(l, p, g) {
    if (25 <= ln) throw Error(a(301));
    if (l === It) if (vn = !0, l = { action: g, next: null }, ft === null && (ft = /* @__PURE__ */ new Map()), g = ft.get(p), g === void 0) ft.set(p, l);
    else {
      for (p = g; p.next !== null; ) p = p.next;
      p.next = l;
    }
  }
  function F() {
    throw Error(a(394));
  }
  function M() {
  }
  var q = { readContext: function(l) {
    return l._currentValue;
  }, useContext: function(l) {
    return Ct(), l._currentValue;
  }, useMemo: m, useReducer: $n, useRef: function(l) {
    It = Ct(), or = Mn();
    var p = or.memoizedState;
    return p === null ? (l = { current: l }, or.memoizedState = l) : p;
  }, useState: function(l) {
    return $n(no, l);
  }, useInsertionEffect: M, useLayoutEffect: function() {
  }, useCallback: function(l, p) {
    return m(function() {
      return l;
    }, p);
  }, useImperativeHandle: M, useEffect: M, useDebugValue: M, useDeferredValue: function(l) {
    return Ct(), l;
  }, useTransition: function() {
    return Ct(), [!1, F];
  }, useId: function() {
    var l = Rn.treeContext, p = l.overflow;
    l = l.id, l = (l & ~(1 << 32 - Zt(l) - 1)).toString(32) + p;
    var g = ve;
    if (g === null) throw Error(a(404));
    return p = Jt++, l = ":" + g.idPrefix + "R" + l, 0 < p && (l += "H" + p.toString(32)), l + ":";
  }, useMutableSource: function(l, p) {
    return Ct(), p(l._source);
  }, useSyncExternalStore: function(l, p, g) {
    if (g === void 0) throw Error(a(407));
    return g();
  } }, ve = null, ce = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function $e(l) {
    return console.error(l), null;
  }
  function De() {
  }
  function Ze(l, p, g, w, D, z, W, Q, Se) {
    var Me = [], Oe = /* @__PURE__ */ new Set();
    return p = { destination: null, responseState: p, progressiveChunkSize: w === void 0 ? 12800 : w, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Oe, pingedTasks: Me, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: D === void 0 ? $e : D, onAllReady: z === void 0 ? De : z, onShellReady: W === void 0 ? De : W, onShellError: Q === void 0 ? De : Q, onFatalError: Se === void 0 ? De : Se }, g = Je(p, 0, null, g, !1, !1), g.parentFlushed = !0, l = ar(p, l, null, g, Oe, pe, null, Xt), Me.push(l), p;
  }
  function ar(l, p, g, w, D, z, W, Q) {
    l.allPendingTasks++, g === null ? l.pendingRootTasks++ : g.pendingTasks++;
    var Se = { node: p, ping: function() {
      var Me = l.pingedTasks;
      Me.push(Se), Me.length === 1 && fa(l);
    }, blockedBoundary: g, blockedSegment: w, abortSet: D, legacyContext: z, context: W, treeContext: Q };
    return D.add(Se), Se;
  }
  function Je(l, p, g, w, D, z) {
    return { status: 0, id: -1, index: p, parentFlushed: !1, chunks: [], children: [], formatContext: w, boundary: g, lastPushedText: D, textEmbedded: z };
  }
  function rr(l, p) {
    if (l = l.onError(p), l != null && typeof l != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof l + '" instead');
    return l;
  }
  function cr(l, p) {
    var g = l.onShellError;
    g(p), g = l.onFatalError, g(p), l.destination !== null ? (l.status = 2, te(l.destination, p)) : (l.status = 1, l.fatalError = p);
  }
  function Rr(l, p, g, w, D) {
    for (It = {}, Rn = p, Jt = 0, l = g(w, D); vn; ) vn = !1, Jt = 0, ln += 1, or = null, l = g(w, D);
    return gn(), l;
  }
  function yn(l, p, g, w) {
    var D = g.render(), z = w.childContextTypes;
    if (z != null) {
      var W = p.legacyContext;
      if (typeof g.getChildContext != "function") w = W;
      else {
        g = g.getChildContext();
        for (var Q in g) if (!(Q in z)) throw Error(a(108, J(w) || "Unknown", Q));
        w = ct({}, W, g);
      }
      p.legacyContext = w, Xr(l, p, D), p.legacyContext = W;
    } else Xr(l, p, D);
  }
  function _n(l, p) {
    if (l && l.defaultProps) {
      p = ct({}, p), l = l.defaultProps;
      for (var g in l) p[g] === void 0 && (p[g] = l[g]);
      return p;
    }
    return p;
  }
  function bn(l, p, g, w, D) {
    if (typeof g == "function") if (g.prototype && g.prototype.isReactComponent) {
      D = xe(g, p.legacyContext);
      var z = g.contextType;
      z = new g(w, typeof z == "object" && z !== null ? z._currentValue : D), Gt(z, g, w, D), yn(l, p, z, g);
    } else {
      z = xe(g, p.legacyContext), D = Rr(l, p, g, w, z);
      var W = Jt !== 0;
      if (typeof D == "object" && D !== null && typeof D.render == "function" && D.$$typeof === void 0) Gt(D, g, w, z), yn(l, p, D, g);
      else if (W) {
        w = p.treeContext, p.treeContext = kt(w, 1, 0);
        try {
          Xr(l, p, D);
        } finally {
          p.treeContext = w;
        }
      } else Xr(l, p, D);
    }
    else if (typeof g == "string") {
      switch (D = p.blockedSegment, z = yt(D.chunks, g, w, l.responseState, D.formatContext), D.lastPushedText = !1, W = D.formatContext, D.formatContext = $(W, g, w), Pn(l, p, z), D.formatContext = W, g) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          D.chunks.push(Rt, E(g), $t);
      }
      D.lastPushedText = !1;
    } else {
      switch (g) {
        case A:
        case S:
        case rn:
        case Yr:
        case Vt:
          Xr(l, p, w.children);
          return;
        case Fr:
          Xr(l, p, w.children);
          return;
        case b:
          throw Error(a(343));
        case kr:
          e: {
            g = p.blockedBoundary, D = p.blockedSegment, z = w.fallback, w = w.children, W = /* @__PURE__ */ new Set();
            var Q = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: W, errorDigest: null }, Se = Je(l, D.chunks.length, Q, D.formatContext, !1, !1);
            D.children.push(Se), D.lastPushedText = !1;
            var Me = Je(l, 0, null, D.formatContext, !1, !1);
            Me.parentFlushed = !0, p.blockedBoundary = Q, p.blockedSegment = Me;
            try {
              if (Pn(
                l,
                p,
                w
              ), Me.lastPushedText && Me.textEmbedded && Me.chunks.push(U), Me.status = 1, io(Q, Me), Q.pendingTasks === 0) break e;
            } catch (Oe) {
              Me.status = 4, Q.forceClientRender = !0, Q.errorDigest = rr(l, Oe);
            } finally {
              p.blockedBoundary = g, p.blockedSegment = D;
            }
            p = ar(l, z, g, Se, W, p.legacyContext, p.context, p.treeContext), l.pingedTasks.push(p);
          }
          return;
      }
      if (typeof g == "object" && g !== null) switch (g.$$typeof) {
        case sn:
          if (w = Rr(l, p, g.render, w, D), Jt !== 0) {
            g = p.treeContext, p.treeContext = kt(g, 1, 0);
            try {
              Xr(l, p, w);
            } finally {
              p.treeContext = g;
            }
          } else Xr(l, p, w);
          return;
        case s:
          g = g.type, w = _n(g, w), bn(l, p, g, w, D);
          return;
        case dt:
          if (D = w.children, g = g._context, w = w.value, z = g._currentValue, g._currentValue = w, W = he, he = w = { parent: W, depth: W === null ? 0 : W.depth + 1, context: g, parentValue: z, value: w }, p.context = w, Xr(l, p, D), l = he, l === null) throw Error(a(403));
          w = l.parentValue, l.context._currentValue = w === P ? l.context._defaultValue : w, l = he = l.parent, p.context = l;
          return;
        case Nr:
          w = w.children, w = w(g._currentValue), Xr(l, p, w);
          return;
        case f:
          D = g._init, g = D(g._payload), w = _n(g, w), bn(l, p, g, w, void 0);
          return;
      }
      throw Error(a(
        130,
        g == null ? g : typeof g,
        ""
      ));
    }
  }
  function Xr(l, p, g) {
    if (p.node = g, typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Or:
          bn(l, p, g.type, g.props, g.ref);
          return;
        case Pt:
          throw Error(a(257));
        case f:
          var w = g._init;
          g = w(g._payload), Xr(l, p, g);
          return;
      }
      if (er(g)) {
        Ln(l, p, g);
        return;
      }
      if (g === null || typeof g != "object" ? w = null : (w = j && g[j] || g["@@iterator"], w = typeof w == "function" ? w : null), w && (w = w.call(g))) {
        if (g = w.next(), !g.done) {
          var D = [];
          do
            D.push(g.value), g = w.next();
          while (!g.done);
          Ln(l, p, D);
        }
        return;
      }
      throw l = Object.prototype.toString.call(g), Error(a(31, l === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : l));
    }
    typeof g == "string" ? (w = p.blockedSegment, w.lastPushedText = Te(p.blockedSegment.chunks, g, l.responseState, w.lastPushedText)) : typeof g == "number" && (w = p.blockedSegment, w.lastPushedText = Te(p.blockedSegment.chunks, "" + g, l.responseState, w.lastPushedText));
  }
  function Ln(l, p, g) {
    for (var w = g.length, D = 0; D < w; D++) {
      var z = p.treeContext;
      p.treeContext = kt(z, w, D);
      try {
        Pn(l, p, g[D]);
      } finally {
        p.treeContext = z;
      }
    }
  }
  function Pn(l, p, g) {
    var w = p.blockedSegment.formatContext, D = p.legacyContext, z = p.context;
    try {
      return Xr(l, p, g);
    } catch (Se) {
      if (gn(), typeof Se == "object" && Se !== null && typeof Se.then == "function") {
        g = Se;
        var W = p.blockedSegment, Q = Je(l, W.chunks.length, null, W.formatContext, W.lastPushedText, !0);
        W.children.push(Q), W.lastPushedText = !1, l = ar(l, p.node, p.blockedBoundary, Q, p.abortSet, p.legacyContext, p.context, p.treeContext).ping, g.then(l, l), p.blockedSegment.formatContext = w, p.legacyContext = D, p.context = z, St(z);
      } else throw p.blockedSegment.formatContext = w, p.legacyContext = D, p.context = z, St(z), Se;
    }
  }
  function oo(l) {
    var p = l.blockedBoundary;
    l = l.blockedSegment, l.status = 3, da(this, p, l);
  }
  function ao(l, p, g) {
    var w = l.blockedBoundary;
    l.blockedSegment.status = 3, w === null ? (p.allPendingTasks--, p.status !== 2 && (p.status = 2, p.destination !== null && p.destination.close())) : (w.pendingTasks--, w.forceClientRender || (w.forceClientRender = !0, l = g === void 0 ? Error(a(432)) : g, w.errorDigest = p.onError(l), w.parentFlushed && p.clientRenderedBoundaries.push(w)), w.fallbackAbortableTasks.forEach(function(D) {
      return ao(D, p, g);
    }), w.fallbackAbortableTasks.clear(), p.allPendingTasks--, p.allPendingTasks === 0 && (w = p.onAllReady, w()));
  }
  function io(l, p) {
    if (p.chunks.length === 0 && p.children.length === 1 && p.children[0].boundary === null) {
      var g = p.children[0];
      g.id = p.id, g.parentFlushed = !0, g.status === 1 && io(l, g);
    } else l.completedSegments.push(p);
  }
  function da(l, p, g) {
    if (p === null) {
      if (g.parentFlushed) {
        if (l.completedRootSegment !== null) throw Error(a(389));
        l.completedRootSegment = g;
      }
      l.pendingRootTasks--, l.pendingRootTasks === 0 && (l.onShellError = De, p = l.onShellReady, p());
    } else p.pendingTasks--, p.forceClientRender || (p.pendingTasks === 0 ? (g.parentFlushed && g.status === 1 && io(p, g), p.parentFlushed && l.completedBoundaries.push(p), p.fallbackAbortableTasks.forEach(oo, l), p.fallbackAbortableTasks.clear()) : g.parentFlushed && g.status === 1 && (io(p, g), p.completedSegments.length === 1 && p.parentFlushed && l.partialBoundaries.push(p)));
    l.allPendingTasks--, l.allPendingTasks === 0 && (l = l.onAllReady, l());
  }
  function fa(l) {
    if (l.status !== 2) {
      var p = he, g = ce.current;
      ce.current = q;
      var w = ve;
      ve = l.responseState;
      try {
        var D = l.pingedTasks, z;
        for (z = 0; z < D.length; z++) {
          var W = D[z], Q = l, Se = W.blockedSegment;
          if (Se.status === 0) {
            St(W.context);
            try {
              Xr(Q, W, W.node), Se.lastPushedText && Se.textEmbedded && Se.chunks.push(U), W.abortSet.delete(W), Se.status = 1, da(Q, W.blockedBoundary, Se);
            } catch (At) {
              if (gn(), typeof At == "object" && At !== null && typeof At.then == "function") {
                var Me = W.ping;
                At.then(Me, Me);
              } else {
                W.abortSet.delete(W), Se.status = 4;
                var Oe = W.blockedBoundary, dr = At, pt = rr(Q, dr);
                if (Oe === null ? cr(Q, dr) : (Oe.pendingTasks--, Oe.forceClientRender || (Oe.forceClientRender = !0, Oe.errorDigest = pt, Oe.parentFlushed && Q.clientRenderedBoundaries.push(Oe))), Q.allPendingTasks--, Q.allPendingTasks === 0) {
                  var zt = Q.onAllReady;
                  zt();
                }
              }
            } finally {
            }
          }
        }
        D.splice(0, z), l.destination !== null && _o(l, l.destination);
      } catch (At) {
        rr(l, At), cr(l, At);
      } finally {
        ve = w, ce.current = g, g === q && St(p);
      }
    }
  }
  function so(l, p, g) {
    switch (g.parentFlushed = !0, g.status) {
      case 0:
        var w = g.id = l.nextSegmentId++;
        return g.lastPushedText = !1, g.textEmbedded = !1, l = l.responseState, d(p, hr), d(p, l.placeholderPrefix), l = E(w.toString(16)), d(p, l), _(p, Lt);
      case 1:
        g.status = 2;
        var D = !0;
        w = g.chunks;
        var z = 0;
        g = g.children;
        for (var W = 0; W < g.length; W++) {
          for (D = g[W]; z < D.index; z++) d(p, w[z]);
          D = lo(l, p, D);
        }
        for (; z < w.length - 1; z++) d(p, w[z]);
        return z < w.length && (D = _(p, w[z])), D;
      default:
        throw Error(a(390));
    }
  }
  function lo(l, p, g) {
    var w = g.boundary;
    if (w === null) return so(l, p, g);
    if (w.parentFlushed = !0, w.forceClientRender) w = w.errorDigest, _(p, Ut), d(p, Qr), w && (d(p, qt), d(p, E(G(w))), d(p, it)), _(p, Nt), so(l, p, g);
    else if (0 < w.pendingTasks) {
      w.rootSegmentID = l.nextSegmentId++, 0 < w.completedSegments.length && l.partialBoundaries.push(w);
      var D = l.responseState, z = D.nextSuspenseID++;
      D = R(D.boundaryPrefix + z.toString(16)), w = w.id = D, Tr(p, l.responseState, w), so(l, p, g);
    } else if (w.byteSize > l.progressiveChunkSize) w.rootSegmentID = l.nextSegmentId++, l.completedBoundaries.push(w), Tr(p, l.responseState, w.id), so(l, p, g);
    else {
      if (_(p, Qt), g = w.completedSegments, g.length !== 1) throw Error(a(391));
      lo(l, p, g[0]);
    }
    return _(p, fn);
  }
  function pa(l, p, g) {
    return Re(p, l.responseState, g.formatContext, g.id), lo(l, p, g), je(p, g.formatContext);
  }
  function ha(l, p, g) {
    for (var w = g.completedSegments, D = 0; D < w.length; D++) ma(l, p, g, w[D]);
    if (w.length = 0, l = l.responseState, w = g.id, g = g.rootSegmentID, d(p, l.startInlineScript), l.sentCompleteBoundaryFunction ? d(p, nr) : (l.sentCompleteBoundaryFunction = !0, d(p, Xe)), w === null) throw Error(a(395));
    return g = E(g.toString(16)), d(p, w), d(p, ut), d(p, l.segmentPrefix), d(p, g), _(p, et);
  }
  function ma(l, p, g, w) {
    if (w.status === 2) return !0;
    var D = w.id;
    if (D === -1) {
      if ((w.id = g.rootSegmentID) === -1) throw Error(a(392));
      return pa(l, p, w);
    }
    return pa(l, p, w), l = l.responseState, d(p, l.startInlineScript), l.sentCompleteSegmentFunction ? d(p, Ee) : (l.sentCompleteSegmentFunction = !0, d(p, ze)), d(p, l.segmentPrefix), D = E(D.toString(16)), d(p, D), d(p, sr), d(p, l.placeholderPrefix), d(p, D), _(p, He);
  }
  function _o(l, p) {
    u = new Uint8Array(512), x = 0;
    try {
      var g = l.completedRootSegment;
      if (g !== null && l.pendingRootTasks === 0) {
        lo(l, p, g), l.completedRootSegment = null;
        var w = l.responseState.bootstrapChunks;
        for (g = 0; g < w.length - 1; g++) d(p, w[g]);
        g < w.length && _(p, w[g]);
      }
      var D = l.clientRenderedBoundaries, z;
      for (z = 0; z < D.length; z++) {
        var W = D[z];
        w = p;
        var Q = l.responseState, Se = W.id, Me = W.errorDigest, Oe = W.errorMessage, dr = W.errorComponentStack;
        if (d(w, Q.startInlineScript), Q.sentClientRenderFunction ? d(w, ur) : (Q.sentClientRenderFunction = !0, d(
          w,
          lr
        )), Se === null) throw Error(a(395));
        d(w, Se), d(w, rt), (Me || Oe || dr) && (d(w, Ht), d(w, E(nt(Me || "")))), (Oe || dr) && (d(w, Ht), d(w, E(nt(Oe || "")))), dr && (d(w, Ht), d(w, E(nt(dr)))), _(w, tt);
      }
      D.splice(0, z);
      var pt = l.completedBoundaries;
      for (z = 0; z < pt.length; z++) ha(l, p, pt[z]);
      pt.splice(0, z), N(p), u = new Uint8Array(512), x = 0;
      var zt = l.partialBoundaries;
      for (z = 0; z < zt.length; z++) {
        var At = zt[z];
        e: {
          D = l, W = p;
          var uo = At.completedSegments;
          for (Q = 0; Q < uo.length; Q++) if (!ma(
            D,
            W,
            At,
            uo[Q]
          )) {
            Q++, uo.splice(0, Q);
            var ga = !1;
            break e;
          }
          uo.splice(0, Q), ga = !0;
        }
        if (!ga) {
          l.destination = null, z++, zt.splice(0, z);
          return;
        }
      }
      zt.splice(0, z);
      var Bn = l.completedBoundaries;
      for (z = 0; z < Bn.length; z++) ha(l, p, Bn[z]);
      Bn.splice(0, z);
    } finally {
      N(p), l.allPendingTasks === 0 && l.pingedTasks.length === 0 && l.clientRenderedBoundaries.length === 0 && l.completedBoundaries.length === 0 && p.close();
    }
  }
  function va(l, p) {
    try {
      var g = l.abortableTasks;
      g.forEach(function(w) {
        return ao(w, l, p);
      }), g.clear(), l.destination !== null && _o(l, l.destination);
    } catch (w) {
      rr(l, w), cr(l, w);
    }
  }
  return Ws.renderToReadableStream = function(l, p) {
    return new Promise(function(g, w) {
      var D, z, W = new Promise(function(Oe, dr) {
        z = Oe, D = dr;
      }), Q = Ze(l, fr(p ? p.identifierPrefix : void 0, p ? p.nonce : void 0, p ? p.bootstrapScriptContent : void 0, p ? p.bootstrapScripts : void 0, p ? p.bootstrapModules : void 0), br(p ? p.namespaceURI : void 0), p ? p.progressiveChunkSize : void 0, p ? p.onError : void 0, z, function() {
        var Oe = new ReadableStream({ type: "bytes", pull: function(dr) {
          if (Q.status === 1) Q.status = 2, te(dr, Q.fatalError);
          else if (Q.status !== 2 && Q.destination === null) {
            Q.destination = dr;
            try {
              _o(Q, dr);
            } catch (pt) {
              rr(Q, pt), cr(Q, pt);
            }
          }
        }, cancel: function() {
          va(Q);
        } }, { highWaterMark: 0 });
        Oe.allReady = W, g(Oe);
      }, function(Oe) {
        W.catch(function() {
        }), w(Oe);
      }, D);
      if (p && p.signal) {
        var Se = p.signal, Me = function() {
          va(Q, Se.reason), Se.removeEventListener("abort", Me);
        };
        Se.addEventListener("abort", Me);
      }
      fa(Q);
    });
  }, Ws.version = "18.3.1", Ws;
}
var na = {};
/**
 * @license React
 * react-dom-server-legacy.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ju;
function Fc() {
  return ju || (ju = 1, process.env.NODE_ENV !== "production" && function() {
    var r = ca(), a = "18.3.1", u = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          n[i - 1] = arguments[i];
        _("warn", e, n);
      }
    }
    function d(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          n[i - 1] = arguments[i];
        _("error", e, n);
      }
    }
    function _(e, t, n) {
      {
        var i = u.ReactDebugCurrentFrame, c = i.getStackAddendum();
        c !== "" && (t += "%s", n = n.concat([c]));
        var h = n.map(function(y) {
          return String(y);
        });
        h.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, h);
      }
    }
    function N(e) {
      e();
    }
    function V(e) {
    }
    function E(e, t) {
      R(e, t);
    }
    function R(e, t) {
      return e.push(t);
    }
    function te(e) {
    }
    function O(e) {
      e.push(null);
    }
    function se(e) {
      return e;
    }
    function B(e) {
      return e;
    }
    function K(e, t) {
      e.destroy(t);
    }
    function be(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function Z(e) {
      try {
        return L(e), !1;
      } catch {
        return !0;
      }
    }
    function L(e) {
      return "" + e;
    }
    function de(e, t) {
      if (Z(e))
        return d("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, be(e)), L(e);
    }
    function Pe(e, t) {
      if (Z(e))
        return d("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, be(e)), L(e);
    }
    function ee(e) {
      if (Z(e))
        return d("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", be(e)), L(e);
    }
    var ne = Object.prototype.hasOwnProperty, re = 0, G = 1, ue = 2, ge = 3, er = 4, Ce = 5, Ue = 6, Ne = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ke = Ne + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", tr = new RegExp("^[" + Ne + "][" + Ke + "]*$"), _r = {}, fe = {};
    function fr(e) {
      return ne.call(fe, e) ? !0 : ne.call(_r, e) ? !1 : tr.test(e) ? (fe[e] = !0, !0) : (_r[e] = !0, d("Invalid attribute name: `%s`", e), !1);
    }
    function Ge(e, t, n, i) {
      if (n !== null && n.type === re)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (n !== null)
            return !n.acceptsBooleans;
          var c = e.toLowerCase().slice(0, 5);
          return c !== "data-" && c !== "aria-";
        }
        default:
          return !1;
      }
    }
    function br(e) {
      return U.hasOwnProperty(e) ? U[e] : null;
    }
    function $(e, t, n, i, c, h, y) {
      this.acceptsBooleans = t === ue || t === ge || t === er, this.attributeName = i, this.attributeNamespace = c, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = h, this.removeEmptyString = y;
    }
    var U = {}, Te = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Te.forEach(function(e) {
      U[e] = new $(
        e,
        re,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], n = e[1];
      U[t] = new $(
        t,
        G,
        !1,
        // mustUseProperty
        n,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      U[e] = new $(
        e,
        ue,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      U[e] = new $(
        e,
        ue,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      U[e] = new $(
        e,
        ge,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      U[e] = new $(
        e,
        ge,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      U[e] = new $(
        e,
        er,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      U[e] = new $(
        e,
        Ue,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      U[e] = new $(
        e,
        Ce,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ke = /[\-\:]([a-z])/g, me = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ke, me);
      U[t] = new $(
        t,
        G,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ke, me);
      U[t] = new $(
        t,
        G,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ke, me);
      U[t] = new $(
        t,
        G,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      U[e] = new $(
        e,
        G,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ye = "xlinkHref";
    U[ye] = new $(
      "xlinkHref",
      G,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      U[e] = new $(
        e,
        G,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Ie = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Ae(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var we = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Ie).forEach(function(e) {
      we.forEach(function(t) {
        Ie[Ae(t, e)] = Ie[e];
      });
    });
    var Fe = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function gr(e, t) {
      Fe[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || d("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || d("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Mr(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var We = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Pr = {}, at = new RegExp("^(aria)-[" + Ke + "]*$"), Lr = new RegExp("^(aria)[A-Z][" + Ke + "]*$");
    function vt(e, t) {
      {
        if (ne.call(Pr, t) && Pr[t])
          return !0;
        if (Lr.test(t)) {
          var n = "aria-" + t.slice(4).toLowerCase(), i = We.hasOwnProperty(n) ? n : null;
          if (i == null)
            return d("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Pr[t] = !0, !0;
          if (t !== i)
            return d("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Pr[t] = !0, !0;
        }
        if (at.test(t)) {
          var c = t.toLowerCase(), h = We.hasOwnProperty(c) ? c : null;
          if (h == null)
            return Pr[t] = !0, !1;
          if (t !== h)
            return d("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, h), Pr[t] = !0, !0;
        }
      }
      return !0;
    }
    function Br(e, t) {
      {
        var n = [];
        for (var i in t) {
          var c = vt(e, i);
          c || n.push(i);
        }
        var h = n.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        n.length === 1 ? d("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", h, e) : n.length > 1 && d("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", h, e);
      }
    }
    function Hr(e, t) {
      Mr(e, t) || Br(e, t);
    }
    var zr = !1;
    function gt(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !zr && (zr = !0, e === "select" && t.multiple ? d("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : d("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Ar = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Sr = function() {
    };
    {
      var pr = {}, yt = /^on./, Rt = /^on[^A-Z]/, $t = new RegExp("^(aria)-[" + Ke + "]*$"), hr = new RegExp("^(aria)[A-Z][" + Ke + "]*$");
      Sr = function(e, t, n, i) {
        if (ne.call(pr, t) && pr[t])
          return !0;
        var c = t.toLowerCase();
        if (c === "onfocusin" || c === "onfocusout")
          return d("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), pr[t] = !0, !0;
        if (i != null) {
          var h = i.registrationNameDependencies, y = i.possibleRegistrationNames;
          if (h.hasOwnProperty(t))
            return !0;
          var k = y.hasOwnProperty(c) ? y[c] : null;
          if (k != null)
            return d("Invalid event handler property `%s`. Did you mean `%s`?", t, k), pr[t] = !0, !0;
          if (yt.test(t))
            return d("Unknown event handler property `%s`. It will be ignored.", t), pr[t] = !0, !0;
        } else if (yt.test(t))
          return Rt.test(t) && d("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), pr[t] = !0, !0;
        if ($t.test(t) || hr.test(t))
          return !0;
        if (c === "innerhtml")
          return d("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), pr[t] = !0, !0;
        if (c === "aria")
          return d("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), pr[t] = !0, !0;
        if (c === "is" && n !== null && n !== void 0 && typeof n != "string")
          return d("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), pr[t] = !0, !0;
        if (typeof n == "number" && isNaN(n))
          return d("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), pr[t] = !0, !0;
        var I = br(t), H = I !== null && I.type === re;
        if (Ar.hasOwnProperty(c)) {
          var X = Ar[c];
          if (X !== t)
            return d("Invalid DOM property `%s`. Did you mean `%s`?", t, X), pr[t] = !0, !0;
        } else if (!H && t !== c)
          return d("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, c), pr[t] = !0, !0;
        return typeof n == "boolean" && Ge(t, n, I) ? (n ? d('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : d('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), pr[t] = !0, !0) : H ? !0 : Ge(t, n, I) ? (pr[t] = !0, !1) : ((n === "false" || n === "true") && I !== null && I.type === ge && (d("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), pr[t] = !0), !0);
      };
    }
    var Lt = function(e, t, n) {
      {
        var i = [];
        for (var c in t) {
          var h = Sr(e, c, t[c], n);
          h || i.push(c);
        }
        var y = i.map(function(k) {
          return "`" + k + "`";
        }).join(", ");
        i.length === 1 ? d("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", y, e) : i.length > 1 && d("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", y, e);
      }
    };
    function Qt(e, t, n) {
      Mr(e, t) || Lt(e, t, n);
    }
    var Bt = function() {
    };
    {
      var Kt = /^(?:webkit|moz|o)[A-Z]/, Ut = /^-ms-/, fn = /-(.)/g, Qr = /;\s*$/, it = {}, qt = {}, Nt = !1, Tr = !1, Ir = function(e) {
        return e.replace(fn, function(t, n) {
          return n.toUpperCase();
        });
      }, Vr = function(e) {
        it.hasOwnProperty(e) && it[e] || (it[e] = !0, d(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Ir(e.replace(Ut, "ms-"))
        ));
      }, Le = function(e) {
        it.hasOwnProperty(e) && it[e] || (it[e] = !0, d("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Ur = function(e, t) {
        qt.hasOwnProperty(t) && qt[t] || (qt[t] = !0, d(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Qr, "")));
      }, st = function(e, t) {
        Nt || (Nt = !0, d("`NaN` is an invalid value for the `%s` css style property.", e));
      }, bt = function(e, t) {
        Tr || (Tr = !0, d("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Bt = function(e, t) {
        e.indexOf("-") > -1 ? Vr(e) : Kt.test(e) ? Le(e) : Qr.test(t) && Ur(e, t), typeof t == "number" && (isNaN(t) ? st(e, t) : isFinite(t) || bt(e, t));
      };
    }
    var Kr = Bt, _t = /["'&<>]/;
    function qr(e) {
      ee(e);
      var t = "" + e, n = _t.exec(t);
      if (!n)
        return t;
      var i, c = "", h, y = 0;
      for (h = n.index; h < t.length; h++) {
        switch (t.charCodeAt(h)) {
          case 34:
            i = "&quot;";
            break;
          case 38:
            i = "&amp;";
            break;
          case 39:
            i = "&#x27;";
            break;
          case 60:
            i = "&lt;";
            break;
          case 62:
            i = "&gt;";
            break;
          default:
            continue;
        }
        y !== h && (c += t.substring(y, h)), y = h + 1, c += i;
      }
      return y !== h ? c + t.substring(y, h) : c;
    }
    function xr(e) {
      return typeof e == "boolean" || typeof e == "number" ? "" + e : qr(e);
    }
    var lt = /([A-Z])/g, xt = /^ms-/;
    function Wt(e) {
      return e.replace(lt, "-$1").toLowerCase().replace(xt, "-ms-");
    }
    var mr = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, en = !1;
    function pn(e) {
      !en && mr.test(e) && (en = !0, d("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var hn = Array.isArray;
    function C(e) {
      return hn(e);
    }
    var Y = "<script>";
    function ae(e, t, n, i, c) {
      var h = e === void 0 ? "" : e, y = Y, k = [];
      return {
        bootstrapChunks: k,
        startInlineScript: y,
        placeholderPrefix: h + "P:",
        segmentPrefix: h + "S:",
        boundaryPrefix: h + "B:",
        idPrefix: h,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var le = 0, Re = 1, je = 2, ze = 3, Ee = 4, sr = 5, He = 6, Xe = 7;
    function nr(e, t) {
      return {
        insertionMode: e,
        selectedValue: t
      };
    }
    function ut(e, t, n) {
      switch (t) {
        case "select":
          return nr(Re, n.value != null ? n.value : n.defaultValue);
        case "svg":
          return nr(je, null);
        case "math":
          return nr(ze, null);
        case "foreignObject":
          return nr(Re, null);
        case "table":
          return nr(Ee, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return nr(sr, null);
        case "colgroup":
          return nr(Xe, null);
        case "tr":
          return nr(He, null);
      }
      return e.insertionMode >= Ee || e.insertionMode === le ? nr(Re, null) : e;
    }
    var et = null;
    function lr(e) {
      var t = e.nextSuspenseID++;
      return e.boundaryPrefix + t.toString(16);
    }
    function ur(e, t, n) {
      var i = e.idPrefix, c = ":" + i + "R" + t;
      return n > 0 && (c += "H" + n.toString(32)), c + ":";
    }
    function rt(e) {
      return xr(e);
    }
    var tt = "<!-- -->";
    function Ht(e, t, n, i) {
      return t === "" ? i : (i && e.push(tt), e.push(rt(t)), !0);
    }
    function wt(e, t, n, i) {
      n && i && e.push(tt);
    }
    var nt = /* @__PURE__ */ new Map();
    function ct(e) {
      var t = nt.get(e);
      if (t !== void 0)
        return t;
      var n = xr(Wt(e));
      return nt.set(e, n), n;
    }
    var Or = ' style="', Pt = ":", Vt = ";";
    function rn(e, t, n) {
      if (typeof n != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var i = !0;
      for (var c in n)
        if (ne.call(n, c)) {
          var h = n[c];
          if (!(h == null || typeof h == "boolean" || h === "")) {
            var y = void 0, k = void 0, I = c.indexOf("--") === 0;
            I ? (y = xr(c), Pe(h, c), k = xr(("" + h).trim())) : (Kr(c, h), y = ct(c), typeof h == "number" ? h !== 0 && !ne.call(Ie, c) ? k = h + "px" : k = "" + h : (Pe(h, c), k = xr(("" + h).trim()))), i ? (i = !1, e.push(Or, y, Pt, k)) : e.push(Vt, y, Pt, k);
          }
        }
      i || e.push(Nr);
    }
    var Yr = " ", dt = '="', Nr = '"', sn = '=""';
    function kr(e, t, n, i) {
      switch (n) {
        case "style": {
          rn(e, t, i);
          return;
        }
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        // shouldIgnoreAttribute
        // We have already filtered out null/undefined and reserved words.
        !(n.length > 2 && (n[0] === "o" || n[0] === "O") && (n[1] === "n" || n[1] === "N"))
      ) {
        var c = br(n);
        if (c !== null) {
          switch (typeof i) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!c.acceptsBooleans)
                return;
          }
          var h = c.attributeName, y = h;
          switch (c.type) {
            case ge:
              i && e.push(Yr, y, sn);
              return;
            case er:
              i === !0 ? e.push(Yr, y, sn) : i === !1 || e.push(Yr, y, dt, xr(i), Nr);
              return;
            case Ce:
              isNaN(i) || e.push(Yr, y, dt, xr(i), Nr);
              break;
            case Ue:
              !isNaN(i) && i >= 1 && e.push(Yr, y, dt, xr(i), Nr);
              break;
            default:
              c.sanitizeURL && (de(i, h), i = "" + i, pn(i)), e.push(Yr, y, dt, xr(i), Nr);
          }
        } else if (fr(n)) {
          switch (typeof i) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var k = n.toLowerCase().slice(0, 5);
              if (k !== "data-" && k !== "aria-")
                return;
            }
          }
          e.push(Yr, n, dt, xr(i), Nr);
        }
      }
    }
    var Fr = ">", s = "/>";
    function f(e, t, n) {
      if (t != null) {
        if (n != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof t != "object" || !("__html" in t))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var i = t.__html;
        i != null && (ee(i), e.push("" + i));
      }
    }
    var b = !1, S = !1, A = !1, P = !1, j = !1, J = !1, pe = !1;
    function xe(e, t) {
      {
        var n = e[t];
        if (n != null) {
          var i = C(n);
          e.multiple && !i ? d("The `%s` prop supplied to <select> must be an array if `multiple` is true.", t) : !e.multiple && i && d("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", t);
        }
      }
    }
    function he(e, t, n) {
      gr("select", t), xe(t, "value"), xe(t, "defaultValue"), t.value !== void 0 && t.defaultValue !== void 0 && !A && (d("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), A = !0), e.push(Et("select"));
      var i = null, c = null;
      for (var h in t)
        if (ne.call(t, h)) {
          var y = t[h];
          if (y == null)
            continue;
          switch (h) {
            case "children":
              i = y;
              break;
            case "dangerouslySetInnerHTML":
              c = y;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              kr(e, n, h, y);
              break;
          }
        }
      return e.push(Fr), f(e, c, i), i;
    }
    function Ye(e) {
      var t = "";
      return r.Children.forEach(e, function(n) {
        n != null && (t += n, !j && typeof n != "string" && typeof n != "number" && (j = !0, d("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), t;
    }
    var Er = ' selected=""';
    function Dr(e, t, n, i) {
      var c = i.selectedValue;
      e.push(Et("option"));
      var h = null, y = null, k = null, I = null;
      for (var H in t)
        if (ne.call(t, H)) {
          var X = t[H];
          if (X == null)
            continue;
          switch (H) {
            case "children":
              h = X;
              break;
            case "selected":
              k = X, pe || (d("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), pe = !0);
              break;
            case "dangerouslySetInnerHTML":
              I = X;
              break;
            case "value":
              y = X;
            default:
              kr(e, n, H, X);
              break;
          }
        }
      if (c != null) {
        var ie;
        if (y !== null ? (de(y, "value"), ie = "" + y) : (I !== null && (J || (J = !0, d("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), ie = Ye(h)), C(c))
          for (var _e = 0; _e < c.length; _e++) {
            de(c[_e], "value");
            var qe = "" + c[_e];
            if (qe === ie) {
              e.push(Er);
              break;
            }
          }
        else
          de(c, "select.value"), "" + c === ie && e.push(Er);
      } else k && e.push(Er);
      return e.push(Fr), f(e, I, h), h;
    }
    function jr(e, t, n) {
      gr("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !S && (d("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", t.type), S = !0), t.value !== void 0 && t.defaultValue !== void 0 && !b && (d("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", t.type), b = !0), e.push(Et("input"));
      var i = null, c = null, h = null, y = null;
      for (var k in t)
        if (ne.call(t, k)) {
          var I = t[k];
          if (I == null)
            continue;
          switch (k) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              y = I;
              break;
            case "defaultValue":
              c = I;
              break;
            case "checked":
              h = I;
              break;
            case "value":
              i = I;
              break;
            default:
              kr(e, n, k, I);
              break;
          }
        }
      return h !== null ? kr(e, n, "checked", h) : y !== null && kr(e, n, "checked", y), i !== null ? kr(e, n, "value", i) : c !== null && kr(e, n, "value", c), e.push(s), null;
    }
    function Yt(e, t, n) {
      gr("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !P && (d("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), P = !0), e.push(Et("textarea"));
      var i = null, c = null, h = null;
      for (var y in t)
        if (ne.call(t, y)) {
          var k = t[y];
          if (k == null)
            continue;
          switch (y) {
            case "children":
              h = k;
              break;
            case "value":
              i = k;
              break;
            case "defaultValue":
              c = k;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              kr(e, n, y, k);
              break;
          }
        }
      if (i === null && c !== null && (i = c), e.push(Fr), h != null) {
        if (d("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), i != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (C(h)) {
          if (h.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          ee(h[0]), i = "" + h[0];
        }
        ee(h), i = "" + h;
      }
      return typeof i == "string" && i[0] === `
` && e.push(Zt), i !== null && (de(i, "value"), e.push(rt("" + i))), null;
    }
    function St(e, t, n, i) {
      e.push(Et(n));
      for (var c in t)
        if (ne.call(t, c)) {
          var h = t[c];
          if (h == null)
            continue;
          switch (c) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(n + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              kr(e, i, c, h);
              break;
          }
        }
      return e.push(s), null;
    }
    function tn(e, t, n) {
      e.push(Et("menuitem"));
      for (var i in t)
        if (ne.call(t, i)) {
          var c = t[i];
          if (c == null)
            continue;
          switch (i) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              kr(e, n, i, c);
              break;
          }
        }
      return e.push(Fr), null;
    }
    function Gt(e, t, n) {
      e.push(Et("title"));
      var i = null;
      for (var c in t)
        if (ne.call(t, c)) {
          var h = t[c];
          if (h == null)
            continue;
          switch (c) {
            case "children":
              i = h;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              kr(e, n, c, h);
              break;
          }
        }
      e.push(Fr);
      {
        var y = Array.isArray(i) && i.length < 2 ? i[0] || null : i;
        Array.isArray(i) && i.length > 1 ? d("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : y != null && y.$$typeof != null ? d("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : y != null && typeof y != "string" && typeof y != "number" && d("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return i;
    }
    function Xt(e, t, n, i) {
      e.push(Et(n));
      var c = null, h = null;
      for (var y in t)
        if (ne.call(t, y)) {
          var k = t[y];
          if (k == null)
            continue;
          switch (y) {
            case "children":
              c = k;
              break;
            case "dangerouslySetInnerHTML":
              h = k;
              break;
            default:
              kr(e, i, y, k);
              break;
          }
        }
      return e.push(Fr), f(e, h, c), typeof c == "string" ? (e.push(rt(c)), null) : c;
    }
    function kt(e, t, n, i) {
      e.push(Et(n));
      var c = null, h = null;
      for (var y in t)
        if (ne.call(t, y)) {
          var k = t[y];
          if (k == null)
            continue;
          switch (y) {
            case "children":
              c = k;
              break;
            case "dangerouslySetInnerHTML":
              h = k;
              break;
            case "style":
              rn(e, i, k);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              fr(y) && typeof k != "function" && typeof k != "symbol" && e.push(Yr, y, dt, xr(k), Nr);
              break;
          }
        }
      return e.push(Fr), f(e, h, c), c;
    }
    var Zt = `
`;
    function Ro(e, t, n, i) {
      e.push(Et(n));
      var c = null, h = null;
      for (var y in t)
        if (ne.call(t, y)) {
          var k = t[y];
          if (k == null)
            continue;
          switch (y) {
            case "children":
              c = k;
              break;
            case "dangerouslySetInnerHTML":
              h = k;
              break;
            default:
              kr(e, i, y, k);
              break;
          }
        }
      if (e.push(Fr), h != null) {
        if (c != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof h != "object" || !("__html" in h))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var I = h.__html;
        I != null && (typeof I == "string" && I.length > 0 && I[0] === `
` ? e.push(Zt, I) : (ee(I), e.push("" + I)));
      }
      return typeof c == "string" && c[0] === `
` && e.push(Zt), c;
    }
    var to = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, mn = /* @__PURE__ */ new Map();
    function Et(e) {
      var t = mn.get(e);
      if (t === void 0) {
        if (!to.test(e))
          throw new Error("Invalid tag: " + e);
        t = "<" + e, mn.set(e, t);
      }
      return t;
    }
    var $o = "<!DOCTYPE html>";
    function It(e, t, n, i, c) {
      switch (Hr(t, n), gt(t, n), Qt(t, n, null), !n.suppressContentEditableWarning && n.contentEditable && n.children != null && d("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), c.insertionMode !== je && c.insertionMode !== ze && t.indexOf("-") === -1 && typeof n.is != "string" && t.toLowerCase() !== t && d("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", t), t) {
        case "select":
          return he(e, n, i);
        case "option":
          return Dr(e, n, i, c);
        case "textarea":
          return Yt(e, n, i);
        case "input":
          return jr(e, n, i);
        case "menuitem":
          return tn(e, n, i);
        case "title":
          return Gt(e, n, i);
        case "listing":
        case "pre":
          return Ro(e, n, t, i);
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return St(e, n, t, i);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return Xt(e, n, t, i);
        case "html":
          return c.insertionMode === le && e.push($o), Xt(e, n, t, i);
        default:
          return t.indexOf("-") === -1 && typeof n.is != "string" ? Xt(e, n, t, i) : kt(e, n, t, i);
      }
    }
    var Rn = "</", nn = ">";
    function or(e, t, n) {
      switch (t) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          e.push(Rn, t, nn);
      }
    }
    function ot(e, t) {
      for (var n = t.bootstrapChunks, i = 0; i < n.length - 1; i++)
        E(e, n[i]);
      return i < n.length ? R(e, n[i]) : !0;
    }
    var vn = '<template id="', Jt = '"></template>';
    function ft(e, t, n) {
      E(e, vn), E(e, t.placeholderPrefix);
      var i = n.toString(16);
      return E(e, i), R(e, Jt);
    }
    var ln = "<!--$-->", Ct = '<!--$?--><template id="', Gr = '"></template>', Mn = "<!--$!-->", gn = "<!--/$-->", no = "<template", $n = '"', m = ' data-dgst="', T = ' data-msg="', F = ' data-stck="', M = "></template>";
    function q(e, t) {
      return R(e, ln);
    }
    function ve(e, t, n) {
      if (E(e, Ct), n === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return E(e, n), R(e, Gr);
    }
    function ce(e, t, n, i, c) {
      var h;
      return h = R(e, Mn), E(e, no), n && (E(e, m), E(e, xr(n)), E(e, $n)), i && (E(e, T), E(e, xr(i)), E(e, $n)), c && (E(e, F), E(e, xr(c)), E(e, $n)), h = R(e, M), h;
    }
    function $e(e, t) {
      return R(e, gn);
    }
    function De(e, t) {
      return R(e, gn);
    }
    function Ze(e, t) {
      return R(e, gn);
    }
    var ar = '<div hidden id="', Je = '">', rr = "</div>", cr = '<svg aria-hidden="true" style="display:none" id="', Rr = '">', yn = "</svg>", _n = '<math aria-hidden="true" style="display:none" id="', bn = '">', Xr = "</math>", Ln = '<table hidden id="', Pn = '">', oo = "</table>", ao = '<table hidden><tbody id="', io = '">', da = "</tbody></table>", fa = '<table hidden><tr id="', so = '">', lo = "</tr></table>", pa = '<table hidden><colgroup id="', ha = '">', ma = "</colgroup></table>";
    function _o(e, t, n, i) {
      switch (n.insertionMode) {
        case le:
        case Re:
          return E(e, ar), E(e, t.segmentPrefix), E(e, i.toString(16)), R(e, Je);
        case je:
          return E(e, cr), E(e, t.segmentPrefix), E(e, i.toString(16)), R(e, Rr);
        case ze:
          return E(e, _n), E(e, t.segmentPrefix), E(e, i.toString(16)), R(e, bn);
        case Ee:
          return E(e, Ln), E(e, t.segmentPrefix), E(e, i.toString(16)), R(e, Pn);
        case sr:
          return E(e, ao), E(e, t.segmentPrefix), E(e, i.toString(16)), R(e, io);
        case He:
          return E(e, fa), E(e, t.segmentPrefix), E(e, i.toString(16)), R(e, so);
        case Xe:
          return E(e, pa), E(e, t.segmentPrefix), E(e, i.toString(16)), R(e, ha);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function va(e, t) {
      switch (t.insertionMode) {
        case le:
        case Re:
          return R(e, rr);
        case je:
          return R(e, yn);
        case ze:
          return R(e, Xr);
        case Ee:
          return R(e, oo);
        case sr:
          return R(e, da);
        case He:
          return R(e, lo);
        case Xe:
          return R(e, ma);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var l = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", p = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', g = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', w = l + ';$RS("', D = '$RS("', z = '","', W = '")<\/script>';
    function Q(e, t, n) {
      E(e, t.startInlineScript), t.sentCompleteSegmentFunction ? E(e, D) : (t.sentCompleteSegmentFunction = !0, E(e, w)), E(e, t.segmentPrefix);
      var i = n.toString(16);
      return E(e, i), E(e, z), E(e, t.placeholderPrefix), E(e, i), R(e, W);
    }
    var Se = p + ';$RC("', Me = '$RC("', Oe = '","', dr = '")<\/script>';
    function pt(e, t, n, i) {
      if (E(e, t.startInlineScript), t.sentCompleteBoundaryFunction ? E(e, Me) : (t.sentCompleteBoundaryFunction = !0, E(e, Se)), n === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var c = i.toString(16);
      return E(e, n), E(e, Oe), E(e, t.segmentPrefix), E(e, c), R(e, dr);
    }
    var zt = g + ';$RX("', At = '$RX("', uo = '"', ga = ")<\/script>", Bn = ",";
    function cl(e, t, n, i, c, h) {
      if (E(e, t.startInlineScript), t.sentClientRenderFunction ? E(e, At) : (t.sentClientRenderFunction = !0, E(e, zt)), n === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return E(e, n), E(e, uo), (i || c || h) && (E(e, Bn), E(e, li(i || ""))), (c || h) && (E(e, Bn), E(e, li(c || ""))), h && (E(e, Bn), E(e, li(h))), R(e, ga);
    }
    var dl = /[<\u2028\u2029]/g;
    function li(e) {
      var t = JSON.stringify(e);
      return t.replace(dl, function(n) {
        switch (n) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    function fl(e, t) {
      var n = ae(t);
      return {
        // Keep this in sync with ReactDOMServerFormatConfig
        bootstrapChunks: n.bootstrapChunks,
        startInlineScript: n.startInlineScript,
        placeholderPrefix: n.placeholderPrefix,
        segmentPrefix: n.segmentPrefix,
        boundaryPrefix: n.boundaryPrefix,
        idPrefix: n.idPrefix,
        nextSuspenseID: n.nextSuspenseID,
        sentCompleteSegmentFunction: n.sentCompleteSegmentFunction,
        sentCompleteBoundaryFunction: n.sentCompleteBoundaryFunction,
        sentClientRenderFunction: n.sentClientRenderFunction,
        // This is an extra field for the legacy renderer
        generateStaticMarkup: e
      };
    }
    function pl() {
      return {
        insertionMode: Re,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function ts(e, t, n, i) {
      return n.generateStaticMarkup ? (e.push(xr(t)), !1) : Ht(e, t, n, i);
    }
    function ns(e, t, n, i) {
      if (!t.generateStaticMarkup)
        return wt(e, t, n, i);
    }
    function hl(e, t) {
      return t.generateStaticMarkup ? !0 : q(e);
    }
    function ml(e, t, n, i, c) {
      return t.generateStaticMarkup ? !0 : ce(e, t, n, i, c);
    }
    function vl(e, t) {
      return t.generateStaticMarkup ? !0 : $e(e);
    }
    function gl(e, t) {
      return t.generateStaticMarkup ? !0 : Ze(e);
    }
    var Tt = Object.assign, yl = Symbol.for("react.element"), os = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), Dt = Symbol.for("react.strict_mode"), as = Symbol.for("react.profiler"), ba = Symbol.for("react.provider"), xa = Symbol.for("react.context"), wa = Symbol.for("react.forward_ref"), Sa = Symbol.for("react.suspense"), Po = Symbol.for("react.suspense_list"), Io = Symbol.for("react.memo"), co = Symbol.for("react.lazy"), ui = Symbol.for("react.scope"), ci = Symbol.for("react.debug_trace_mode"), di = Symbol.for("react.legacy_hidden"), ka = Symbol.for("react.default_value"), is = Symbol.iterator, bl = "@@iterator";
    function xl(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = is && e[is] || e[bl];
      return typeof t == "function" ? t : null;
    }
    function wl(e, t, n) {
      var i = e.displayName;
      if (i)
        return i;
      var c = t.displayName || t.name || "";
      return c !== "" ? n + "(" + c + ")" : n;
    }
    function fi(e) {
      return e.displayName || "Context";
    }
    function wr(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ya:
          return "Fragment";
        case os:
          return "Portal";
        case as:
          return "Profiler";
        case Dt:
          return "StrictMode";
        case Sa:
          return "Suspense";
        case Po:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case xa:
            var t = e;
            return fi(t) + ".Consumer";
          case ba:
            var n = e;
            return fi(n._context) + ".Provider";
          case wa:
            return wl(e, e.render, "ForwardRef");
          case Io:
            var i = e.displayName || null;
            return i !== null ? i : wr(e.type) || "Memo";
          case co: {
            var c = e, h = c._payload, y = c._init;
            try {
              return wr(y(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var zo = 0, ss, pi, yr, fo, hi, mi, vi;
    function gi() {
    }
    gi.__reactDisabledLog = !0;
    function ls() {
      {
        if (zo === 0) {
          ss = console.log, pi = console.info, yr = console.warn, fo = console.error, hi = console.group, mi = console.groupCollapsed, vi = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: gi,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        zo++;
      }
    }
    function us() {
      {
        if (zo--, zo === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Tt({}, e, {
              value: ss
            }),
            info: Tt({}, e, {
              value: pi
            }),
            warn: Tt({}, e, {
              value: yr
            }),
            error: Tt({}, e, {
              value: fo
            }),
            group: Tt({}, e, {
              value: hi
            }),
            groupCollapsed: Tt({}, e, {
              value: mi
            }),
            groupEnd: Tt({}, e, {
              value: vi
            })
          });
        }
        zo < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ea = u.ReactCurrentDispatcher, Ca;
    function Ao(e, t, n) {
      {
        if (Ca === void 0)
          try {
            throw Error();
          } catch (c) {
            var i = c.stack.trim().match(/\n( *(at )?)/);
            Ca = i && i[1] || "";
          }
        return `
` + Ca + e;
      }
    }
    var yi = !1, po;
    {
      var bi = typeof WeakMap == "function" ? WeakMap : Map;
      po = new bi();
    }
    function Un(e, t) {
      if (!e || yi)
        return "";
      {
        var n = po.get(e);
        if (n !== void 0)
          return n;
      }
      var i;
      yi = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = Ea.current, Ea.current = null, ls();
      try {
        if (t) {
          var y = function() {
            throw Error();
          };
          if (Object.defineProperty(y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(y, []);
            } catch (Zr) {
              i = Zr;
            }
            Reflect.construct(e, [], y);
          } else {
            try {
              y.call();
            } catch (Zr) {
              i = Zr;
            }
            e.call(y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Zr) {
            i = Zr;
          }
          e();
        }
      } catch (Zr) {
        if (Zr && i && typeof Zr.stack == "string") {
          for (var k = Zr.stack.split(`
`), I = i.stack.split(`
`), H = k.length - 1, X = I.length - 1; H >= 1 && X >= 0 && k[H] !== I[X]; )
            X--;
          for (; H >= 1 && X >= 0; H--, X--)
            if (k[H] !== I[X]) {
              if (H !== 1 || X !== 1)
                do
                  if (H--, X--, X < 0 || k[H] !== I[X]) {
                    var ie = `
` + k[H].replace(" at new ", " at ");
                    return e.displayName && ie.includes("<anonymous>") && (ie = ie.replace("<anonymous>", e.displayName)), typeof e == "function" && po.set(e, ie), ie;
                  }
                while (H >= 1 && X >= 0);
              break;
            }
        }
      } finally {
        yi = !1, Ea.current = h, us(), Error.prepareStackTrace = c;
      }
      var _e = e ? e.displayName || e.name : "", qe = _e ? Ao(_e) : "";
      return typeof e == "function" && po.set(e, qe), qe;
    }
    function xi(e, t, n) {
      return Un(e, !0);
    }
    function Do(e, t, n) {
      return Un(e, !1);
    }
    function Sl(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Oo(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Un(e, Sl(e));
      if (typeof e == "string")
        return Ao(e);
      switch (e) {
        case Sa:
          return Ao("Suspense");
        case Po:
          return Ao("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case wa:
            return Do(e.render);
          case Io:
            return Oo(e.type, t, n);
          case co: {
            var i = e, c = i._payload, h = i._init;
            try {
              return Oo(h(c), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var cs = {}, wi = u.ReactDebugCurrentFrame;
    function Ta(e) {
      if (e) {
        var t = e._owner, n = Oo(e.type, e._source, t ? t.type : null);
        wi.setExtraStackFrame(n);
      } else
        wi.setExtraStackFrame(null);
    }
    function Ra(e, t, n, i, c) {
      {
        var h = Function.call.bind(ne);
        for (var y in e)
          if (h(e, y)) {
            var k = void 0;
            try {
              if (typeof e[y] != "function") {
                var I = Error((i || "React class") + ": " + n + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw I.name = "Invariant Violation", I;
              }
              k = e[y](t, y, i, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (H) {
              k = H;
            }
            k && !(k instanceof Error) && (Ta(c), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", n, y, typeof k), Ta(null)), k instanceof Error && !(k.message in cs) && (cs[k.message] = !0, Ta(c), d("Failed %s type: %s", n, k.message), Ta(null));
          }
      }
    }
    var $a;
    $a = {};
    var Fo = {};
    Object.freeze(Fo);
    function jo(e, t) {
      {
        var n = e.contextTypes;
        if (!n)
          return Fo;
        var i = {};
        for (var c in n)
          i[c] = t[c];
        {
          var h = wr(e) || "Unknown";
          Ra(n, i, "context", h);
        }
        return i;
      }
    }
    function ds(e, t, n, i) {
      {
        if (typeof e.getChildContext != "function") {
          {
            var c = wr(t) || "Unknown";
            $a[c] || ($a[c] = !0, d("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", c, c));
          }
          return n;
        }
        var h = e.getChildContext();
        for (var y in h)
          if (!(y in i))
            throw new Error((wr(t) || "Unknown") + '.getChildContext(): key "' + y + '" is not defined in childContextTypes.');
        {
          var k = wr(t) || "Unknown";
          Ra(i, h, "child context", k);
        }
        return Tt({}, n, h);
      }
    }
    var Nn;
    Nn = {};
    var _a = null, In = null;
    function Si(e) {
      e.context._currentValue2 = e.parentValue;
    }
    function Wn(e) {
      e.context._currentValue2 = e.value;
    }
    function Pa(e, t) {
      if (e !== t) {
        Si(e);
        var n = e.parent, i = t.parent;
        if (n === null) {
          if (i !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (i === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          Pa(n, i);
        }
        Wn(t);
      }
    }
    function zn(e) {
      Si(e);
      var t = e.parent;
      t !== null && zn(t);
    }
    function Ia(e) {
      var t = e.parent;
      t !== null && Ia(t), Wn(e);
    }
    function za(e, t) {
      Si(e);
      var n = e.parent;
      if (n === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      n.depth === t.depth ? Pa(n, t) : za(n, t);
    }
    function Mo(e, t) {
      var n = t.parent;
      if (n === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      e.depth === n.depth ? Pa(e, n) : Mo(e, n), Wn(t);
    }
    function Lo(e) {
      var t = In, n = e;
      t !== n && (t === null ? Ia(n) : n === null ? zn(t) : t.depth === n.depth ? Pa(t, n) : t.depth > n.depth ? za(t, n) : Mo(t, n), In = n);
    }
    function fs(e, t) {
      var n;
      n = e._currentValue2, e._currentValue2 = t, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== Nn && d("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = Nn;
      var i = In, c = {
        parent: i,
        depth: i === null ? 0 : i.depth + 1,
        context: e,
        parentValue: n,
        value: t
      };
      return In = c, c;
    }
    function ps(e) {
      var t = In;
      if (t === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      t.context !== e && d("The parent context is not the expected context. This is probably a bug in React.");
      {
        var n = t.parentValue;
        n === ka ? t.context._currentValue2 = t.context._defaultValue : t.context._currentValue2 = n, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== Nn && d("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = Nn;
      }
      return In = t.parent;
    }
    function hs() {
      return In;
    }
    function An(e) {
      var t = e._currentValue2;
      return t;
    }
    function ki(e) {
      return e._reactInternals;
    }
    function kl(e, t) {
      e._reactInternals = t;
    }
    var ms = {}, ho = {}, Bo, Ei, Aa, Da, Oa, mo, Uo, No, Fa;
    {
      Bo = /* @__PURE__ */ new Set(), Ei = /* @__PURE__ */ new Set(), Aa = /* @__PURE__ */ new Set(), Uo = /* @__PURE__ */ new Set(), Da = /* @__PURE__ */ new Set(), No = /* @__PURE__ */ new Set(), Fa = /* @__PURE__ */ new Set();
      var Wo = /* @__PURE__ */ new Set();
      mo = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var n = t + "_" + e;
          Wo.has(n) || (Wo.add(n), d("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, Oa = function(e, t) {
        if (t === void 0) {
          var n = wr(e) || "Component";
          Da.has(n) || (Da.add(n), d("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", n));
        }
      };
    }
    function ja(e, t) {
      {
        var n = e.constructor, i = n && wr(n) || "ReactClass", c = i + "." + t;
        if (ms[c])
          return;
        d(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, t, t, i), ms[c] = !0;
      }
    }
    var Ma = {
      isMounted: function(e) {
        return !1;
      },
      enqueueSetState: function(e, t, n) {
        var i = ki(e);
        i.queue === null ? ja(e, "setState") : (i.queue.push(t), n != null && mo(n, "setState"));
      },
      enqueueReplaceState: function(e, t, n) {
        var i = ki(e);
        i.replace = !0, i.queue = [t], n != null && mo(n, "setState");
      },
      enqueueForceUpdate: function(e, t) {
        var n = ki(e);
        n.queue === null ? ja(e, "forceUpdate") : t != null && mo(t, "setState");
      }
    };
    function Ci(e, t, n, i, c) {
      var h = n(c, i);
      Oa(t, h);
      var y = h == null ? i : Tt({}, i, h);
      return y;
    }
    function vs(e, t, n) {
      var i = Fo, c = e.contextType;
      if ("contextType" in e) {
        var h = (
          // Allow null for conditional declaration
          c === null || c !== void 0 && c.$$typeof === xa && c._context === void 0
        );
        if (!h && !Fa.has(e)) {
          Fa.add(e);
          var y = "";
          c === void 0 ? y = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof c != "object" ? y = " However, it is set to a " + typeof c + "." : c.$$typeof === ba ? y = " Did you accidentally pass the Context.Provider instead?" : c._context !== void 0 ? y = " Did you accidentally pass the Context.Consumer instead?" : y = " However, it is set to an object with keys {" + Object.keys(c).join(", ") + "}.", d("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", wr(e) || "Component", y);
        }
      }
      typeof c == "object" && c !== null ? i = An(c) : i = n;
      var k = new e(t, i);
      {
        if (typeof e.getDerivedStateFromProps == "function" && (k.state === null || k.state === void 0)) {
          var I = wr(e) || "Component";
          Bo.has(I) || (Bo.add(I), d("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", I, k.state === null ? "null" : "undefined", I));
        }
        if (typeof e.getDerivedStateFromProps == "function" || typeof k.getSnapshotBeforeUpdate == "function") {
          var H = null, X = null, ie = null;
          if (typeof k.componentWillMount == "function" && k.componentWillMount.__suppressDeprecationWarning !== !0 ? H = "componentWillMount" : typeof k.UNSAFE_componentWillMount == "function" && (H = "UNSAFE_componentWillMount"), typeof k.componentWillReceiveProps == "function" && k.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? X = "componentWillReceiveProps" : typeof k.UNSAFE_componentWillReceiveProps == "function" && (X = "UNSAFE_componentWillReceiveProps"), typeof k.componentWillUpdate == "function" && k.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ie = "componentWillUpdate" : typeof k.UNSAFE_componentWillUpdate == "function" && (ie = "UNSAFE_componentWillUpdate"), H !== null || X !== null || ie !== null) {
            var _e = wr(e) || "Component", qe = typeof e.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Aa.has(_e) || (Aa.add(_e), d(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, _e, qe, H !== null ? `
  ` + H : "", X !== null ? `
  ` + X : "", ie !== null ? `
  ` + ie : ""));
          }
        }
      }
      return k;
    }
    function gs(e, t, n) {
      {
        var i = wr(t) || "Component", c = e.render;
        c || (t.prototype && typeof t.prototype.render == "function" ? d("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", i) : d("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", i)), e.getInitialState && !e.getInitialState.isReactClassApproved && !e.state && d("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", i), e.getDefaultProps && !e.getDefaultProps.isReactClassApproved && d("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", i), e.propTypes && d("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", i), e.contextType && d("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", i), e.contextTypes && d("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", i), t.contextType && t.contextTypes && !No.has(t) && (No.add(t), d("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", i)), typeof e.componentShouldUpdate == "function" && d("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", i), t.prototype && t.prototype.isPureReactComponent && typeof e.shouldComponentUpdate < "u" && d("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", wr(t) || "A pure component"), typeof e.componentDidUnmount == "function" && d("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", i), typeof e.componentDidReceiveProps == "function" && d("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", i), typeof e.componentWillRecieveProps == "function" && d("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", i), typeof e.UNSAFE_componentWillRecieveProps == "function" && d("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", i);
        var h = e.props !== n;
        e.props !== void 0 && h && d("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", i, i), e.defaultProps && d("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", i, i), typeof e.getSnapshotBeforeUpdate == "function" && typeof e.componentDidUpdate != "function" && !Ei.has(t) && (Ei.add(t), d("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", wr(t))), typeof e.getDerivedStateFromProps == "function" && d("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", i), typeof e.getDerivedStateFromError == "function" && d("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", i), typeof t.getSnapshotBeforeUpdate == "function" && d("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", i);
        var y = e.state;
        y && (typeof y != "object" || C(y)) && d("%s.state: must be set to an object or null", i), typeof e.getChildContext == "function" && typeof t.childContextTypes != "object" && d("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", i);
      }
    }
    function ys(e, t) {
      var n = t.state;
      if (typeof t.componentWillMount == "function") {
        if (t.componentWillMount.__suppressDeprecationWarning !== !0) {
          var i = wr(e) || "Unknown";
          ho[i] || (x(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            i
          ), ho[i] = !0);
        }
        t.componentWillMount();
      }
      typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), n !== t.state && (d("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", wr(e) || "Component"), Ma.enqueueReplaceState(t, t.state, null));
    }
    function El(e, t, n, i) {
      if (e.queue !== null && e.queue.length > 0) {
        var c = e.queue, h = e.replace;
        if (e.queue = null, e.replace = !1, h && c.length === 1)
          t.state = c[0];
        else {
          for (var y = h ? c[0] : t.state, k = !0, I = h ? 1 : 0; I < c.length; I++) {
            var H = c[I], X = typeof H == "function" ? H.call(t, y, n, i) : H;
            X != null && (k ? (k = !1, y = Tt({}, y, X)) : Tt(y, X));
          }
          t.state = y;
        }
      } else
        e.queue = null;
    }
    function bs(e, t, n, i) {
      gs(e, t, n);
      var c = e.state !== void 0 ? e.state : null;
      e.updater = Ma, e.props = n, e.state = c;
      var h = {
        queue: [],
        replace: !1
      };
      kl(e, h);
      var y = t.contextType;
      if (typeof y == "object" && y !== null ? e.context = An(y) : e.context = i, e.state === n) {
        var k = wr(t) || "Component";
        Uo.has(k) || (Uo.add(k), d("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", k));
      }
      var I = t.getDerivedStateFromProps;
      typeof I == "function" && (e.state = Ci(e, t, I, c, n)), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function") && (ys(t, e), El(h, e, n, i));
    }
    var Cl = {
      id: 1,
      overflow: ""
    };
    function Tl(e) {
      var t = e.overflow, n = e.id, i = n & ~Rl(n);
      return i.toString(32) + t;
    }
    function Ti(e, t, n) {
      var i = e.id, c = e.overflow, h = Ho(i) - 1, y = i & ~(1 << h), k = n + 1, I = Ho(t) + h;
      if (I > 30) {
        var H = h - h % 5, X = (1 << H) - 1, ie = (y & X).toString(32), _e = y >> H, qe = h - H, Zr = Ho(t) + qe, Jn = k << qe, Qn = Jn | _e, En = ie + c;
        return {
          id: 1 << Zr | Qn,
          overflow: En
        };
      } else {
        var So = k << h, au = So | y, $c = c;
        return {
          id: 1 << I | au,
          overflow: $c
        };
      }
    }
    function Ho(e) {
      return 32 - $l(e);
    }
    function Rl(e) {
      return 1 << Ho(e) - 1;
    }
    var $l = Math.clz32 ? Math.clz32 : _l, Ri = Math.log, La = Math.LN2;
    function _l(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Ri(t) / La | 0) | 0;
    }
    function Pl(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Il = typeof Object.is == "function" ? Object.is : Pl, xn = null, $i = null, Ba = null, vr = null, Ot = !1, vo = !1, Hn = 0, Qe = null, Dn = 0, Ua = 25, Ft = !1, jt;
    function un() {
      if (xn === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Ft && d("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), xn;
    }
    function zl(e, t) {
      if (t === null)
        return d("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", jt), !1;
      e.length !== t.length && d(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, jt, "[" + e.join(", ") + "]", "[" + t.join(", ") + "]");
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Il(e[n], t[n]))
          return !1;
      return !0;
    }
    function on() {
      if (Dn > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function On() {
      return vr === null ? Ba === null ? (Ot = !1, Ba = vr = on()) : (Ot = !0, vr = Ba) : vr.next === null ? (Ot = !1, vr = vr.next = on()) : (Ot = !0, vr = vr.next), vr;
    }
    function Vn(e, t) {
      xn = t, $i = e, Ft = !1, Hn = 0;
    }
    function Al(e, t, n, i) {
      for (; vo; )
        vo = !1, Hn = 0, Dn += 1, vr = null, n = e(t, i);
      return Vo(), n;
    }
    function _i() {
      var e = Hn !== 0;
      return e;
    }
    function Vo() {
      Ft = !1, xn = null, $i = null, vo = !1, Ba = null, Dn = 0, Qe = null, vr = null;
    }
    function Dl(e) {
      return Ft && d("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), An(e);
    }
    function Ol(e) {
      return jt = "useContext", un(), An(e);
    }
    function Na(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Pi(e) {
      return jt = "useState", xs(
        Na,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function xs(e, t, n) {
      if (e !== Na && (jt = "useReducer"), xn = un(), vr = On(), Ot) {
        var i = vr.queue, c = i.dispatch;
        if (Qe !== null) {
          var h = Qe.get(i);
          if (h !== void 0) {
            Qe.delete(i);
            var y = vr.memoizedState, k = h;
            do {
              var I = k.action;
              Ft = !0, y = e(y, I), Ft = !1, k = k.next;
            } while (k !== null);
            return vr.memoizedState = y, [y, c];
          }
        }
        return [vr.memoizedState, c];
      } else {
        Ft = !0;
        var H;
        e === Na ? H = typeof t == "function" ? t() : t : H = n !== void 0 ? n(t) : t, Ft = !1, vr.memoizedState = H;
        var X = vr.queue = {
          last: null,
          dispatch: null
        }, ie = X.dispatch = Ss.bind(null, xn, X);
        return [vr.memoizedState, ie];
      }
    }
    function ws(e, t) {
      xn = un(), vr = On();
      var n = t === void 0 ? null : t;
      if (vr !== null) {
        var i = vr.memoizedState;
        if (i !== null && n !== null) {
          var c = i[1];
          if (zl(n, c))
            return i[0];
        }
      }
      Ft = !0;
      var h = e();
      return Ft = !1, vr.memoizedState = [h, n], h;
    }
    function Ii(e) {
      xn = un(), vr = On();
      var t = vr.memoizedState;
      if (t === null) {
        var n = {
          current: e
        };
        return Object.seal(n), vr.memoizedState = n, n;
      } else
        return t;
    }
    function Fl(e, t) {
      jt = "useLayoutEffect", d("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Ss(e, t, n) {
      if (Dn >= Ua)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (e === xn) {
        vo = !0;
        var i = {
          action: n,
          next: null
        };
        Qe === null && (Qe = /* @__PURE__ */ new Map());
        var c = Qe.get(t);
        if (c === void 0)
          Qe.set(t, i);
        else {
          for (var h = c; h.next !== null; )
            h = h.next;
          h.next = i;
        }
      }
    }
    function ks(e, t) {
      return ws(function() {
        return e;
      }, t);
    }
    function jl(e, t, n) {
      return un(), t(e._source);
    }
    function Ml(e, t, n) {
      if (n === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return n();
    }
    function Ll(e) {
      return un(), e;
    }
    function Bl() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function Ul() {
      return un(), [!1, Bl];
    }
    function Nl() {
      var e = $i, t = Tl(e.treeContext), n = zi;
      if (n === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var i = Hn++;
      return ur(n, t, i);
    }
    function Wa() {
    }
    var Es = {
      readContext: Dl,
      useContext: Ol,
      useMemo: ws,
      useReducer: xs,
      useRef: Ii,
      useState: Pi,
      useInsertionEffect: Wa,
      useLayoutEffect: Fl,
      useCallback: ks,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: Wa,
      // Effects are not run in the server environment.
      useEffect: Wa,
      // Debugging effect
      useDebugValue: Wa,
      useDeferredValue: Ll,
      useTransition: Ul,
      useId: Nl,
      // Subscriptions are not setup in a server environment.
      useMutableSource: jl,
      useSyncExternalStore: Ml
    }, zi = null;
    function Cs(e) {
      zi = e;
    }
    function Ha(e) {
      try {
        var t = "", n = e;
        do {
          switch (n.tag) {
            case 0:
              t += Ao(n.type, null, null);
              break;
            case 1:
              t += Do(n.type, null, null);
              break;
            case 2:
              t += xi(n.type, null, null);
              break;
          }
          n = n.parent;
        } while (n);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    var Va = u.ReactCurrentDispatcher, Yo = u.ReactDebugCurrentFrame, Ya = 0, go = 1, Ga = 2, Xa = 3, Za = 4, yo = 0, Ai = 1, Yn = 2, Ts = 12800;
    function Wl(e) {
      return console.error(e), null;
    }
    function bo() {
    }
    function xo(e, t, n, i, c, h, y, k, I) {
      var H = [], X = /* @__PURE__ */ new Set(), ie = {
        destination: null,
        responseState: t,
        progressiveChunkSize: i === void 0 ? Ts : i,
        status: yo,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: X,
        pingedTasks: H,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: c === void 0 ? Wl : c,
        onAllReady: bo,
        onShellReady: y === void 0 ? bo : y,
        onShellError: bo,
        onFatalError: bo
      }, _e = Ja(
        ie,
        0,
        null,
        n,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      _e.parentFlushed = !0;
      var qe = Gn(ie, e, null, _e, X, Fo, _a, Cl);
      return H.push(qe), ie;
    }
    function Hl(e, t) {
      var n = e.pingedTasks;
      n.push(t), n.length === 1 && N(function() {
        return Wi(e);
      });
    }
    function Vl(e, t) {
      return {
        id: et,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: t,
        errorDigest: null
      };
    }
    function Gn(e, t, n, i, c, h, y, k) {
      e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
      var I = {
        node: t,
        ping: function() {
          return Hl(e, I);
        },
        blockedBoundary: n,
        blockedSegment: i,
        abortSet: c,
        legacyContext: h,
        context: y,
        treeContext: k
      };
      return I.componentStack = null, c.add(I), I;
    }
    function Ja(e, t, n, i, c, h) {
      return {
        status: Ya,
        id: -1,
        // lazily assigned later
        index: t,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: i,
        boundary: n,
        lastPushedText: c,
        textEmbedded: h
      };
    }
    var wn = null;
    function Di() {
      return wn === null || wn.componentStack === null ? "" : Ha(wn.componentStack);
    }
    function Xn(e, t) {
      e.componentStack = {
        tag: 0,
        parent: e.componentStack,
        type: t
      };
    }
    function Go(e, t) {
      e.componentStack = {
        tag: 1,
        parent: e.componentStack,
        type: t
      };
    }
    function Sn(e, t) {
      e.componentStack = {
        tag: 2,
        parent: e.componentStack,
        type: t
      };
    }
    function cn(e) {
      e.componentStack === null ? d("Unexpectedly popped too many stack frames. This is a bug in React.") : e.componentStack = e.componentStack.parent;
    }
    var kn = null;
    function Qa(e, t) {
      {
        var n;
        typeof t == "string" ? n = t : t && typeof t.message == "string" ? n = t.message : n = String(t);
        var i = kn || Di();
        kn = null, e.errorMessage = n, e.errorComponentStack = i;
      }
    }
    function Xo(e, t) {
      var n = e.onError(t);
      if (n != null && typeof n != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof n + '" instead');
      return n;
    }
    function an(e, t) {
      var n = e.onShellError;
      n(t);
      var i = e.onFatalError;
      i(t), e.destination !== null ? (e.status = Yn, K(e.destination, t)) : (e.status = Ai, e.fatalError = t);
    }
    function Zo(e, t, n) {
      Xn(t, "Suspense");
      var i = t.blockedBoundary, c = t.blockedSegment, h = n.fallback, y = n.children, k = /* @__PURE__ */ new Set(), I = Vl(e, k), H = c.chunks.length, X = Ja(
        e,
        H,
        I,
        c.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      c.children.push(X), c.lastPushedText = !1;
      var ie = Ja(
        e,
        0,
        null,
        c.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      ie.parentFlushed = !0, t.blockedBoundary = I, t.blockedSegment = ie;
      try {
        if (ht(e, t, y), ns(ie.chunks, e.responseState, ie.lastPushedText, ie.textEmbedded), ie.status = go, wo(I, ie), I.pendingTasks === 0) {
          cn(t);
          return;
        }
      } catch (qe) {
        ie.status = Za, I.forceClientRender = !0, I.errorDigest = Xo(e, qe), Qa(I, qe);
      } finally {
        t.blockedBoundary = i, t.blockedSegment = c;
      }
      var _e = Gn(e, h, i, X, k, t.legacyContext, t.context, t.treeContext);
      _e.componentStack = t.componentStack, e.pingedTasks.push(_e), cn(t);
    }
    function Oi(e, t, n, i) {
      Xn(t, n);
      var c = t.blockedSegment, h = It(c.chunks, n, i, e.responseState, c.formatContext);
      c.lastPushedText = !1;
      var y = c.formatContext;
      c.formatContext = ut(y, n, i), ht(e, t, h), c.formatContext = y, or(c.chunks, n), c.lastPushedText = !1, cn(t);
    }
    function Jo(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Qo(e, t, n, i, c) {
      var h = {};
      Vn(t, h);
      var y = n(i, c);
      return Al(n, i, y, c);
    }
    function Rs(e, t, n, i, c) {
      var h = n.render();
      n.props !== c && (ji || d("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", wr(i) || "a component"), ji = !0);
      {
        var y = i.childContextTypes;
        if (y != null) {
          var k = t.legacyContext, I = ds(n, i, k, y);
          t.legacyContext = I, Mt(e, t, h), t.legacyContext = k;
          return;
        }
      }
      Mt(e, t, h);
    }
    function Yl(e, t, n, i) {
      Sn(t, n);
      var c = jo(n, t.legacyContext), h = vs(n, i, c);
      bs(h, n, i, c), Rs(e, t, h, n, i), cn(t);
    }
    var $s = {}, Ko = {}, Fi = {}, _s = {}, ji = !1, qo = {}, Mi = !1, Li = !1, Bi = !1;
    function Ps(e, t, n, i) {
      var c;
      if (c = jo(n, t.legacyContext), Go(t, n), n.prototype && typeof n.prototype.render == "function") {
        var h = wr(n) || "Unknown";
        $s[h] || (d("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", h, h), $s[h] = !0);
      }
      var y = Qo(e, t, n, i, c), k = _i();
      if (typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0) {
        var I = wr(n) || "Unknown";
        Ko[I] || (d("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", I, I, I), Ko[I] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0
      ) {
        {
          var H = wr(n) || "Unknown";
          Ko[H] || (d("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", H, H, H), Ko[H] = !0);
        }
        bs(y, n, i, c), Rs(e, t, y, n, i);
      } else if (Is(n), k) {
        var X = t.treeContext, ie = 1, _e = 0;
        t.treeContext = Ti(X, ie, _e);
        try {
          Mt(e, t, y);
        } finally {
          t.treeContext = X;
        }
      } else
        Mt(e, t, y);
      cn(t);
    }
    function Is(e) {
      {
        if (e && e.childContextTypes && d("%s(...): childContextTypes cannot be defined on a function component.", e.displayName || e.name || "Component"), e.defaultProps !== void 0) {
          var t = wr(e) || "Unknown";
          qo[t] || (d("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", t), qo[t] = !0);
        }
        if (typeof e.getDerivedStateFromProps == "function") {
          var n = wr(e) || "Unknown";
          _s[n] || (d("%s: Function components do not support getDerivedStateFromProps.", n), _s[n] = !0);
        }
        if (typeof e.contextType == "object" && e.contextType !== null) {
          var i = wr(e) || "Unknown";
          Fi[i] || (d("%s: Function components do not support contextType.", i), Fi[i] = !0);
        }
      }
    }
    function Ui(e, t) {
      if (e && e.defaultProps) {
        var n = Tt({}, t), i = e.defaultProps;
        for (var c in i)
          n[c] === void 0 && (n[c] = i[c]);
        return n;
      }
      return t;
    }
    function zs(e, t, n, i, c) {
      Go(t, n.render);
      var h = Qo(e, t, n.render, i, c), y = _i();
      if (y) {
        var k = t.treeContext, I = 1, H = 0;
        t.treeContext = Ti(k, I, H);
        try {
          Mt(e, t, h);
        } finally {
          t.treeContext = k;
        }
      } else
        Mt(e, t, h);
      cn(t);
    }
    function Gl(e, t, n, i, c) {
      var h = n.type, y = Ui(h, i);
      Ni(e, t, h, y, c);
    }
    function Xl(e, t, n, i) {
      n._context === void 0 ? n !== n.Consumer && (Bi || (Bi = !0, d("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : n = n._context;
      var c = i.children;
      typeof c != "function" && d("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var h = An(n), y = c(h);
      Mt(e, t, y);
    }
    function As(e, t, n, i) {
      var c = n._context, h = i.value, y = i.children, k;
      k = t.context, t.context = fs(c, h), Mt(e, t, y), t.context = ps(c), k !== t.context && d("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function Zl(e, t, n, i, c) {
      Xn(t, "Lazy");
      var h = n._payload, y = n._init, k = y(h), I = Ui(k, i);
      Ni(e, t, k, I, c), cn(t);
    }
    function Ni(e, t, n, i, c) {
      if (typeof n == "function")
        if (Jo(n)) {
          Yl(e, t, n, i);
          return;
        } else {
          Ps(e, t, n, i);
          return;
        }
      if (typeof n == "string") {
        Oi(e, t, n, i);
        return;
      }
      switch (n) {
        case di:
        case ci:
        case Dt:
        case as:
        case ya: {
          Mt(e, t, i.children);
          return;
        }
        case Po: {
          Xn(t, "SuspenseList"), Mt(e, t, i.children), cn(t);
          return;
        }
        case ui:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case Sa: {
          Zo(e, t, i);
          return;
        }
      }
      if (typeof n == "object" && n !== null)
        switch (n.$$typeof) {
          case wa: {
            zs(e, t, n, i, c);
            return;
          }
          case Io: {
            Gl(e, t, n, i, c);
            return;
          }
          case ba: {
            As(e, t, n, i);
            return;
          }
          case xa: {
            Xl(e, t, n, i);
            return;
          }
          case co: {
            Zl(e, t, n, i);
            return;
          }
        }
      var h = "";
      throw (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (n == null ? n : typeof n) + "." + h));
    }
    function Jl(e, t) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      e[Symbol.toStringTag] === "Generator" && (Mi || d("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Mi = !0), e.entries === t && (Li || d("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Li = !0);
    }
    function Mt(e, t, n) {
      try {
        return Ql(e, t, n);
      } catch (i) {
        throw typeof i == "object" && i !== null && typeof i.then == "function" || (kn = kn !== null ? kn : Di()), i;
      }
    }
    function Ql(e, t, n) {
      if (t.node = n, typeof n == "object" && n !== null) {
        switch (n.$$typeof) {
          case yl: {
            var i = n, c = i.type, h = i.props, y = i.ref;
            Ni(e, t, c, h, y);
            return;
          }
          case os:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case co: {
            var k = n, I = k._payload, H = k._init, X;
            try {
              X = H(I);
            } catch (So) {
              throw typeof So == "object" && So !== null && typeof So.then == "function" && Xn(t, "Lazy"), So;
            }
            Mt(e, t, X);
            return;
          }
        }
        if (C(n)) {
          Ka(e, t, n);
          return;
        }
        var ie = xl(n);
        if (ie) {
          Jl(n, ie);
          var _e = ie.call(n);
          if (_e) {
            var qe = _e.next();
            if (!qe.done) {
              var Zr = [];
              do
                Zr.push(qe.value), qe = _e.next();
              while (!qe.done);
              Ka(e, t, Zr);
              return;
            }
            return;
          }
        }
        var Jn = Object.prototype.toString.call(n);
        throw new Error("Objects are not valid as a React child (found: " + (Jn === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : Jn) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof n == "string") {
        var Qn = t.blockedSegment;
        Qn.lastPushedText = ts(t.blockedSegment.chunks, n, e.responseState, Qn.lastPushedText);
        return;
      }
      if (typeof n == "number") {
        var En = t.blockedSegment;
        En.lastPushedText = ts(t.blockedSegment.chunks, "" + n, e.responseState, En.lastPushedText);
        return;
      }
      typeof n == "function" && d("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function Ka(e, t, n) {
      for (var i = n.length, c = 0; c < i; c++) {
        var h = t.treeContext;
        t.treeContext = Ti(h, i, c);
        try {
          ht(e, t, n[c]);
        } finally {
          t.treeContext = h;
        }
      }
    }
    function Kl(e, t, n) {
      var i = t.blockedSegment, c = i.chunks.length, h = Ja(
        e,
        c,
        null,
        i.formatContext,
        // Adopt the parent segment's leading text embed
        i.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      i.children.push(h), i.lastPushedText = !1;
      var y = Gn(e, t.node, t.blockedBoundary, h, t.abortSet, t.legacyContext, t.context, t.treeContext);
      t.componentStack !== null && (y.componentStack = t.componentStack.parent);
      var k = y.ping;
      n.then(k, k);
    }
    function ht(e, t, n) {
      var i = t.blockedSegment.formatContext, c = t.legacyContext, h = t.context, y = null;
      y = t.componentStack;
      try {
        return Mt(e, t, n);
      } catch (k) {
        if (Vo(), typeof k == "object" && k !== null && typeof k.then == "function") {
          Kl(e, t, k), t.blockedSegment.formatContext = i, t.legacyContext = c, t.context = h, Lo(h), t.componentStack = y;
          return;
        } else
          throw t.blockedSegment.formatContext = i, t.legacyContext = c, t.context = h, Lo(h), t.componentStack = y, k;
      }
    }
    function ql(e, t, n, i) {
      var c = Xo(e, i);
      if (t === null ? an(e, i) : (t.pendingTasks--, t.forceClientRender || (t.forceClientRender = !0, t.errorDigest = c, Qa(t, i), t.parentFlushed && e.clientRenderedBoundaries.push(t))), e.allPendingTasks--, e.allPendingTasks === 0) {
        var h = e.onAllReady;
        h();
      }
    }
    function Ds(e) {
      var t = this, n = e.blockedBoundary, i = e.blockedSegment;
      i.status = Xa, Fs(t, n, i);
    }
    function Os(e, t, n) {
      var i = e.blockedBoundary, c = e.blockedSegment;
      if (c.status = Xa, i === null)
        t.allPendingTasks--, t.status !== Yn && (t.status = Yn, t.destination !== null && O(t.destination));
      else {
        if (i.pendingTasks--, !i.forceClientRender) {
          i.forceClientRender = !0;
          var h = n === void 0 ? new Error("The render was aborted by the server without a reason.") : n;
          i.errorDigest = t.onError(h);
          {
            var y = "The server did not finish this Suspense boundary: ";
            h && typeof h.message == "string" ? h = y + h.message : h = y + String(h);
            var k = wn;
            wn = e;
            try {
              Qa(i, h);
            } finally {
              wn = k;
            }
          }
          i.parentFlushed && t.clientRenderedBoundaries.push(i);
        }
        if (i.fallbackAbortableTasks.forEach(function(H) {
          return Os(H, t, n);
        }), i.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0) {
          var I = t.onAllReady;
          I();
        }
      }
    }
    function wo(e, t) {
      if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
        var n = t.children[0];
        n.id = t.id, n.parentFlushed = !0, n.status === go && wo(e, n);
      } else {
        var i = e.completedSegments;
        i.push(t);
      }
    }
    function Fs(e, t, n) {
      if (t === null) {
        if (n.parentFlushed) {
          if (e.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          e.completedRootSegment = n;
        }
        if (e.pendingRootTasks--, e.pendingRootTasks === 0) {
          e.onShellError = bo;
          var i = e.onShellReady;
          i();
        }
      } else if (t.pendingTasks--, !t.forceClientRender) {
        if (t.pendingTasks === 0)
          n.parentFlushed && n.status === go && wo(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(Ds, e), t.fallbackAbortableTasks.clear();
        else if (n.parentFlushed && n.status === go) {
          wo(t, n);
          var c = t.completedSegments;
          c.length === 1 && t.parentFlushed && e.partialBoundaries.push(t);
        }
      }
      if (e.allPendingTasks--, e.allPendingTasks === 0) {
        var h = e.onAllReady;
        h();
      }
    }
    function eu(e, t) {
      var n = t.blockedSegment;
      if (n.status === Ya) {
        Lo(t.context);
        var i = null;
        i = wn, wn = t;
        try {
          Mt(e, t, t.node), ns(n.chunks, e.responseState, n.lastPushedText, n.textEmbedded), t.abortSet.delete(t), n.status = go, Fs(e, t.blockedBoundary, n);
        } catch (h) {
          if (Vo(), typeof h == "object" && h !== null && typeof h.then == "function") {
            var c = t.ping;
            h.then(c, c);
          } else
            t.abortSet.delete(t), n.status = Za, ql(e, t.blockedBoundary, n, h);
        } finally {
          wn = i;
        }
      }
    }
    function Wi(e) {
      if (e.status !== Yn) {
        var t = hs(), n = Va.current;
        Va.current = Es;
        var i;
        i = Yo.getCurrentStack, Yo.getCurrentStack = Di;
        var c = zi;
        Cs(e.responseState);
        try {
          var h = e.pingedTasks, y;
          for (y = 0; y < h.length; y++) {
            var k = h[y];
            eu(e, k);
          }
          h.splice(0, y), e.destination !== null && ei(e, e.destination);
        } catch (I) {
          Xo(e, I), an(e, I);
        } finally {
          Cs(c), Va.current = n, Yo.getCurrentStack = i, n === Es && Lo(t);
        }
      }
    }
    function Zn(e, t, n) {
      switch (n.parentFlushed = !0, n.status) {
        case Ya: {
          var i = n.id = e.nextSegmentId++;
          return n.lastPushedText = !1, n.textEmbedded = !1, ft(t, e.responseState, i);
        }
        case go: {
          n.status = Ga;
          for (var c = !0, h = n.chunks, y = 0, k = n.children, I = 0; I < k.length; I++) {
            for (var H = k[I]; y < H.index; y++)
              E(t, h[y]);
            c = ea(e, t, H);
          }
          for (; y < h.length - 1; y++)
            E(t, h[y]);
          return y < h.length && (c = R(t, h[y])), c;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function ea(e, t, n) {
      var i = n.boundary;
      if (i === null)
        return Zn(e, t, n);
      if (i.parentFlushed = !0, i.forceClientRender)
        return ml(t, e.responseState, i.errorDigest, i.errorMessage, i.errorComponentStack), Zn(e, t, n), gl(t, e.responseState);
      if (i.pendingTasks > 0) {
        i.rootSegmentID = e.nextSegmentId++, i.completedSegments.length > 0 && e.partialBoundaries.push(i);
        var c = i.id = lr(e.responseState);
        return ve(t, e.responseState, c), Zn(e, t, n), De(t, e.responseState);
      } else {
        if (i.byteSize > e.progressiveChunkSize)
          return i.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(i), ve(t, e.responseState, i.id), Zn(e, t, n), De(t, e.responseState);
        hl(t, e.responseState);
        var h = i.completedSegments;
        if (h.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var y = h[0];
        return ea(e, t, y), vl(t, e.responseState);
      }
    }
    function ru(e, t, n) {
      return cl(t, e.responseState, n.id, n.errorDigest, n.errorMessage, n.errorComponentStack);
    }
    function Hi(e, t, n) {
      return _o(t, e.responseState, n.formatContext, n.id), ea(e, t, n), va(t, n.formatContext);
    }
    function ra(e, t, n) {
      for (var i = n.completedSegments, c = 0; c < i.length; c++) {
        var h = i[c];
        js(e, t, n, h);
      }
      return i.length = 0, pt(t, e.responseState, n.id, n.rootSegmentID);
    }
    function qa(e, t, n) {
      for (var i = n.completedSegments, c = 0; c < i.length; c++) {
        var h = i[c];
        if (!js(e, t, n, h))
          return c++, i.splice(0, c), !1;
      }
      return i.splice(0, c), !0;
    }
    function js(e, t, n, i) {
      if (i.status === Ga)
        return !0;
      var c = i.id;
      if (c === -1) {
        var h = i.id = n.rootSegmentID;
        if (h === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return Hi(e, t, i);
      } else
        return Hi(e, t, i), Q(t, e.responseState, c);
    }
    function ei(e, t) {
      try {
        var n = e.completedRootSegment;
        n !== null && e.pendingRootTasks === 0 && (ea(e, t, n), e.completedRootSegment = null, ot(t, e.responseState));
        var i = e.clientRenderedBoundaries, c;
        for (c = 0; c < i.length; c++) {
          var h = i[c];
          if (!ru(e, t, h)) {
            e.destination = null, c++, i.splice(0, c);
            return;
          }
        }
        i.splice(0, c);
        var y = e.completedBoundaries;
        for (c = 0; c < y.length; c++) {
          var k = y[c];
          if (!ra(e, t, k)) {
            e.destination = null, c++, y.splice(0, c);
            return;
          }
        }
        y.splice(0, c);
        var I = e.partialBoundaries;
        for (c = 0; c < I.length; c++) {
          var H = I[c];
          if (!qa(e, t, H)) {
            e.destination = null, c++, I.splice(0, c);
            return;
          }
        }
        I.splice(0, c);
        var X = e.completedBoundaries;
        for (c = 0; c < X.length; c++) {
          var ie = X[c];
          if (!ra(e, t, ie)) {
            e.destination = null, c++, X.splice(0, c);
            return;
          }
        }
        X.splice(0, c);
      } finally {
        e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && (e.abortableTasks.size !== 0 && d("There was still abortable task at the root when we closed. This is a bug in React."), O(t));
      }
    }
    function Ms(e) {
      N(function() {
        return Wi(e);
      });
    }
    function tu(e, t) {
      if (e.status === Ai) {
        e.status = Yn, K(t, e.fatalError);
        return;
      }
      if (e.status !== Yn && e.destination === null) {
        e.destination = t;
        try {
          ei(e, t);
        } catch (n) {
          Xo(e, n), an(e, n);
        }
      }
    }
    function Ls(e, t) {
      try {
        var n = e.abortableTasks;
        n.forEach(function(i) {
          return Os(i, e, t);
        }), n.clear(), e.destination !== null && ei(e, e.destination);
      } catch (i) {
        Xo(e, i), an(e, i);
      }
    }
    function Vi() {
    }
    function Bs(e, t, n, i) {
      var c = !1, h = null, y = "", k = {
        push: function(ie) {
          return ie !== null && (y += ie), !0;
        },
        destroy: function(ie) {
          c = !0, h = ie;
        }
      }, I = !1;
      function H() {
        I = !0;
      }
      var X = xo(e, fl(n, t ? t.identifierPrefix : void 0), pl(), 1 / 0, Vi, void 0, H);
      if (Ms(X), Ls(X, i), tu(X, k), c)
        throw h;
      if (!I)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return y;
    }
    function nu(e, t) {
      return Bs(e, t, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function Us(e, t) {
      return Bs(e, t, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function ou() {
      throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function o() {
      throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    na.renderToNodeStream = ou, na.renderToStaticMarkup = Us, na.renderToStaticNodeStream = o, na.renderToString = nu, na.version = a;
  }()), na;
}
var Hs = {};
/**
 * @license React
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mu;
function jc() {
  return Mu || (Mu = 1, process.env.NODE_ENV !== "production" && function() {
    var r = ca(), a = "18.3.1", u = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(o) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
          t[n - 1] = arguments[n];
        _("warn", o, t);
      }
    }
    function d(o) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
          t[n - 1] = arguments[n];
        _("error", o, t);
      }
    }
    function _(o, e, t) {
      {
        var n = u.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (e += "%s", t = t.concat([i]));
        var c = t.map(function(h) {
          return String(h);
        });
        c.unshift("Warning: " + e), Function.prototype.apply.call(console[o], console, c);
      }
    }
    function N(o) {
      o();
    }
    var V = 512, E = null, R = 0;
    function te(o) {
      E = new Uint8Array(V), R = 0;
    }
    function O(o, e) {
      if (e.length !== 0) {
        if (e.length > V) {
          R > 0 && (o.enqueue(new Uint8Array(E.buffer, 0, R)), E = new Uint8Array(V), R = 0), o.enqueue(e);
          return;
        }
        var t = e, n = E.length - R;
        n < t.length && (n === 0 ? o.enqueue(E) : (E.set(t.subarray(0, n), R), o.enqueue(E), t = t.subarray(n)), E = new Uint8Array(V), R = 0), E.set(t, R), R += t.length;
      }
    }
    function se(o, e) {
      return O(o, e), !0;
    }
    function B(o) {
      E && R > 0 && (o.enqueue(new Uint8Array(E.buffer, 0, R)), E = null, R = 0);
    }
    function K(o) {
      o.close();
    }
    var be = new TextEncoder();
    function Z(o) {
      return be.encode(o);
    }
    function L(o) {
      return be.encode(o);
    }
    function de(o, e) {
      typeof o.error == "function" ? o.error(e) : o.close();
    }
    function Pe(o) {
      {
        var e = typeof Symbol == "function" && Symbol.toStringTag, t = e && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return t;
      }
    }
    function ee(o) {
      try {
        return ne(o), !1;
      } catch {
        return !0;
      }
    }
    function ne(o) {
      return "" + o;
    }
    function re(o, e) {
      if (ee(o))
        return d("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", e, Pe(o)), ne(o);
    }
    function G(o, e) {
      if (ee(o))
        return d("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", e, Pe(o)), ne(o);
    }
    function ue(o) {
      if (ee(o))
        return d("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Pe(o)), ne(o);
    }
    var ge = Object.prototype.hasOwnProperty, er = 0, Ce = 1, Ue = 2, Ne = 3, Ke = 4, tr = 5, _r = 6, fe = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", fr = fe + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ge = new RegExp("^[" + fe + "][" + fr + "]*$"), br = {}, $ = {};
    function U(o) {
      return ge.call($, o) ? !0 : ge.call(br, o) ? !1 : Ge.test(o) ? ($[o] = !0, !0) : (br[o] = !0, d("Invalid attribute name: `%s`", o), !1);
    }
    function Te(o, e, t, n) {
      if (t !== null && t.type === er)
        return !1;
      switch (typeof e) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (t !== null)
            return !t.acceptsBooleans;
          var i = o.toLowerCase().slice(0, 5);
          return i !== "data-" && i !== "aria-";
        }
        default:
          return !1;
      }
    }
    function ke(o) {
      return ye.hasOwnProperty(o) ? ye[o] : null;
    }
    function me(o, e, t, n, i, c, h) {
      this.acceptsBooleans = e === Ue || e === Ne || e === Ke, this.attributeName = n, this.attributeNamespace = i, this.mustUseProperty = t, this.propertyName = o, this.type = e, this.sanitizeURL = c, this.removeEmptyString = h;
    }
    var ye = {}, Ie = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Ie.forEach(function(o) {
      ye[o] = new me(
        o,
        er,
        !1,
        // mustUseProperty
        o,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(o) {
      var e = o[0], t = o[1];
      ye[e] = new me(
        e,
        Ce,
        !1,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(o) {
      ye[o] = new me(
        o,
        Ue,
        !1,
        // mustUseProperty
        o.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(o) {
      ye[o] = new me(
        o,
        Ue,
        !1,
        // mustUseProperty
        o,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(o) {
      ye[o] = new me(
        o,
        Ne,
        !1,
        // mustUseProperty
        o.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(o) {
      ye[o] = new me(
        o,
        Ne,
        !0,
        // mustUseProperty
        o,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(o) {
      ye[o] = new me(
        o,
        Ke,
        !1,
        // mustUseProperty
        o,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(o) {
      ye[o] = new me(
        o,
        _r,
        !1,
        // mustUseProperty
        o,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(o) {
      ye[o] = new me(
        o,
        tr,
        !1,
        // mustUseProperty
        o.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Ae = /[\-\:]([a-z])/g, we = function(o) {
      return o[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(o) {
      var e = o.replace(Ae, we);
      ye[e] = new me(
        e,
        Ce,
        !1,
        // mustUseProperty
        o,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(o) {
      var e = o.replace(Ae, we);
      ye[e] = new me(
        e,
        Ce,
        !1,
        // mustUseProperty
        o,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(o) {
      var e = o.replace(Ae, we);
      ye[e] = new me(
        e,
        Ce,
        !1,
        // mustUseProperty
        o,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(o) {
      ye[o] = new me(
        o,
        Ce,
        !1,
        // mustUseProperty
        o.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Fe = "xlinkHref";
    ye[Fe] = new me(
      "xlinkHref",
      Ce,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(o) {
      ye[o] = new me(
        o,
        Ce,
        !1,
        // mustUseProperty
        o.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var gr = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Mr(o, e) {
      return o + e.charAt(0).toUpperCase() + e.substring(1);
    }
    var We = ["Webkit", "ms", "Moz", "O"];
    Object.keys(gr).forEach(function(o) {
      We.forEach(function(e) {
        gr[Mr(e, o)] = gr[o];
      });
    });
    var Pr = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function at(o, e) {
      Pr[e.type] || e.onChange || e.onInput || e.readOnly || e.disabled || e.value == null || d("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), e.onChange || e.readOnly || e.disabled || e.checked == null || d("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Lr(o, e) {
      if (o.indexOf("-") === -1)
        return typeof e.is == "string";
      switch (o) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var vt = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Br = {}, Hr = new RegExp("^(aria)-[" + fr + "]*$"), zr = new RegExp("^(aria)[A-Z][" + fr + "]*$");
    function gt(o, e) {
      {
        if (ge.call(Br, e) && Br[e])
          return !0;
        if (zr.test(e)) {
          var t = "aria-" + e.slice(4).toLowerCase(), n = vt.hasOwnProperty(t) ? t : null;
          if (n == null)
            return d("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", e), Br[e] = !0, !0;
          if (e !== n)
            return d("Invalid ARIA attribute `%s`. Did you mean `%s`?", e, n), Br[e] = !0, !0;
        }
        if (Hr.test(e)) {
          var i = e.toLowerCase(), c = vt.hasOwnProperty(i) ? i : null;
          if (c == null)
            return Br[e] = !0, !1;
          if (e !== c)
            return d("Unknown ARIA attribute `%s`. Did you mean `%s`?", e, c), Br[e] = !0, !0;
        }
      }
      return !0;
    }
    function Ar(o, e) {
      {
        var t = [];
        for (var n in e) {
          var i = gt(o, n);
          i || t.push(n);
        }
        var c = t.map(function(h) {
          return "`" + h + "`";
        }).join(", ");
        t.length === 1 ? d("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, o) : t.length > 1 && d("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, o);
      }
    }
    function Sr(o, e) {
      Lr(o, e) || Ar(o, e);
    }
    var pr = !1;
    function yt(o, e) {
      {
        if (o !== "input" && o !== "textarea" && o !== "select")
          return;
        e != null && e.value === null && !pr && (pr = !0, o === "select" && e.multiple ? d("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", o) : d("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", o));
      }
    }
    var Rt = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, $t = function() {
    };
    {
      var hr = {}, Lt = /^on./, Qt = /^on[^A-Z]/, Bt = new RegExp("^(aria)-[" + fr + "]*$"), Kt = new RegExp("^(aria)[A-Z][" + fr + "]*$");
      $t = function(o, e, t, n) {
        if (ge.call(hr, e) && hr[e])
          return !0;
        var i = e.toLowerCase();
        if (i === "onfocusin" || i === "onfocusout")
          return d("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), hr[e] = !0, !0;
        if (n != null) {
          var c = n.registrationNameDependencies, h = n.possibleRegistrationNames;
          if (c.hasOwnProperty(e))
            return !0;
          var y = h.hasOwnProperty(i) ? h[i] : null;
          if (y != null)
            return d("Invalid event handler property `%s`. Did you mean `%s`?", e, y), hr[e] = !0, !0;
          if (Lt.test(e))
            return d("Unknown event handler property `%s`. It will be ignored.", e), hr[e] = !0, !0;
        } else if (Lt.test(e))
          return Qt.test(e) && d("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", e), hr[e] = !0, !0;
        if (Bt.test(e) || Kt.test(e))
          return !0;
        if (i === "innerhtml")
          return d("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), hr[e] = !0, !0;
        if (i === "aria")
          return d("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), hr[e] = !0, !0;
        if (i === "is" && t !== null && t !== void 0 && typeof t != "string")
          return d("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof t), hr[e] = !0, !0;
        if (typeof t == "number" && isNaN(t))
          return d("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", e), hr[e] = !0, !0;
        var k = ke(e), I = k !== null && k.type === er;
        if (Rt.hasOwnProperty(i)) {
          var H = Rt[i];
          if (H !== e)
            return d("Invalid DOM property `%s`. Did you mean `%s`?", e, H), hr[e] = !0, !0;
        } else if (!I && e !== i)
          return d("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", e, i), hr[e] = !0, !0;
        return typeof t == "boolean" && Te(e, t, k) ? (t ? d('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', t, e, e, t, e) : d('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', t, e, e, t, e, e, e), hr[e] = !0, !0) : I ? !0 : Te(e, t, k) ? (hr[e] = !0, !1) : ((t === "false" || t === "true") && k !== null && k.type === Ne && (d("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", t, e, t === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', e, t), hr[e] = !0), !0);
      };
    }
    var Ut = function(o, e, t) {
      {
        var n = [];
        for (var i in e) {
          var c = $t(o, i, e[i], t);
          c || n.push(i);
        }
        var h = n.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        n.length === 1 ? d("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", h, o) : n.length > 1 && d("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", h, o);
      }
    };
    function fn(o, e, t) {
      Lr(o, e) || Ut(o, e, t);
    }
    var Qr = function() {
    };
    {
      var it = /^(?:webkit|moz|o)[A-Z]/, qt = /^-ms-/, Nt = /-(.)/g, Tr = /;\s*$/, Ir = {}, Vr = {}, Le = !1, Ur = !1, st = function(o) {
        return o.replace(Nt, function(e, t) {
          return t.toUpperCase();
        });
      }, bt = function(o) {
        Ir.hasOwnProperty(o) && Ir[o] || (Ir[o] = !0, d(
          "Unsupported style property %s. Did you mean %s?",
          o,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          st(o.replace(qt, "ms-"))
        ));
      }, Kr = function(o) {
        Ir.hasOwnProperty(o) && Ir[o] || (Ir[o] = !0, d("Unsupported vendor-prefixed style property %s. Did you mean %s?", o, o.charAt(0).toUpperCase() + o.slice(1)));
      }, _t = function(o, e) {
        Vr.hasOwnProperty(e) && Vr[e] || (Vr[e] = !0, d(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, o, e.replace(Tr, "")));
      }, qr = function(o, e) {
        Le || (Le = !0, d("`NaN` is an invalid value for the `%s` css style property.", o));
      }, xr = function(o, e) {
        Ur || (Ur = !0, d("`Infinity` is an invalid value for the `%s` css style property.", o));
      };
      Qr = function(o, e) {
        o.indexOf("-") > -1 ? bt(o) : it.test(o) ? Kr(o) : Tr.test(e) && _t(o, e), typeof e == "number" && (isNaN(e) ? qr(o, e) : isFinite(e) || xr(o, e));
      };
    }
    var lt = Qr, xt = /["'&<>]/;
    function Wt(o) {
      ue(o);
      var e = "" + o, t = xt.exec(e);
      if (!t)
        return e;
      var n, i = "", c, h = 0;
      for (c = t.index; c < e.length; c++) {
        switch (e.charCodeAt(c)) {
          case 34:
            n = "&quot;";
            break;
          case 38:
            n = "&amp;";
            break;
          case 39:
            n = "&#x27;";
            break;
          case 60:
            n = "&lt;";
            break;
          case 62:
            n = "&gt;";
            break;
          default:
            continue;
        }
        h !== c && (i += e.substring(h, c)), h = c + 1, i += n;
      }
      return h !== c ? i + e.substring(h, c) : i;
    }
    function mr(o) {
      return typeof o == "boolean" || typeof o == "number" ? "" + o : Wt(o);
    }
    var en = /([A-Z])/g, pn = /^ms-/;
    function hn(o) {
      return o.replace(en, "-$1").toLowerCase().replace(pn, "-ms-");
    }
    var C = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Y = !1;
    function ae(o) {
      !Y && C.test(o) && (Y = !0, d("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(o)));
    }
    var le = Array.isArray;
    function Re(o) {
      return le(o);
    }
    var je = L("<script>"), ze = L("<\/script>"), Ee = L('<script src="'), sr = L('<script type="module" src="'), He = L('" async=""><\/script>');
    function Xe(o) {
      return ue(o), ("" + o).replace(nr, ut);
    }
    var nr = /(<\/|<)(s)(cript)/gi, ut = function(o, e, t, n) {
      return "" + e + (t === "s" ? "\\u0073" : "\\u0053") + n;
    };
    function et(o, e, t, n, i) {
      var c = o === void 0 ? "" : o, h = e === void 0 ? je : L('<script nonce="' + mr(e) + '">'), y = [];
      if (t !== void 0 && y.push(h, Z(Xe(t)), ze), n !== void 0)
        for (var k = 0; k < n.length; k++)
          y.push(Ee, Z(mr(n[k])), He);
      if (i !== void 0)
        for (var I = 0; I < i.length; I++)
          y.push(sr, Z(mr(i[I])), He);
      return {
        bootstrapChunks: y,
        startInlineScript: h,
        placeholderPrefix: L(c + "P:"),
        segmentPrefix: L(c + "S:"),
        boundaryPrefix: c + "B:",
        idPrefix: c,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var lr = 0, ur = 1, rt = 2, tt = 3, Ht = 4, wt = 5, nt = 6, ct = 7;
    function Or(o, e) {
      return {
        insertionMode: o,
        selectedValue: e
      };
    }
    function Pt(o) {
      var e = o === "http://www.w3.org/2000/svg" ? rt : o === "http://www.w3.org/1998/Math/MathML" ? tt : lr;
      return Or(e, null);
    }
    function Vt(o, e, t) {
      switch (e) {
        case "select":
          return Or(ur, t.value != null ? t.value : t.defaultValue);
        case "svg":
          return Or(rt, null);
        case "math":
          return Or(tt, null);
        case "foreignObject":
          return Or(ur, null);
        case "table":
          return Or(Ht, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return Or(wt, null);
        case "colgroup":
          return Or(ct, null);
        case "tr":
          return Or(nt, null);
      }
      return o.insertionMode >= Ht || o.insertionMode === lr ? Or(ur, null) : o;
    }
    var rn = null;
    function Yr(o) {
      var e = o.nextSuspenseID++;
      return L(o.boundaryPrefix + e.toString(16));
    }
    function dt(o, e, t) {
      var n = o.idPrefix, i = ":" + n + "R" + e;
      return t > 0 && (i += "H" + t.toString(32)), i + ":";
    }
    function Nr(o) {
      return mr(o);
    }
    var sn = L("<!-- -->");
    function kr(o, e, t, n) {
      return e === "" ? n : (n && o.push(sn), o.push(Z(Nr(e))), !0);
    }
    function Fr(o, e, t, n) {
      t && n && o.push(sn);
    }
    var s = /* @__PURE__ */ new Map();
    function f(o) {
      var e = s.get(o);
      if (e !== void 0)
        return e;
      var t = L(mr(hn(o)));
      return s.set(o, t), t;
    }
    var b = L(' style="'), S = L(":"), A = L(";");
    function P(o, e, t) {
      if (typeof t != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var n = !0;
      for (var i in t)
        if (ge.call(t, i)) {
          var c = t[i];
          if (!(c == null || typeof c == "boolean" || c === "")) {
            var h = void 0, y = void 0, k = i.indexOf("--") === 0;
            k ? (h = Z(mr(i)), G(c, i), y = Z(mr(("" + c).trim()))) : (lt(i, c), h = f(i), typeof c == "number" ? c !== 0 && !ge.call(gr, i) ? y = Z(c + "px") : y = Z("" + c) : (G(c, i), y = Z(mr(("" + c).trim())))), n ? (n = !1, o.push(b, h, S, y)) : o.push(A, h, S, y);
          }
        }
      n || o.push(pe);
    }
    var j = L(" "), J = L('="'), pe = L('"'), xe = L('=""');
    function he(o, e, t, n) {
      switch (t) {
        case "style": {
          P(o, e, n);
          return;
        }
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        // shouldIgnoreAttribute
        // We have already filtered out null/undefined and reserved words.
        !(t.length > 2 && (t[0] === "o" || t[0] === "O") && (t[1] === "n" || t[1] === "N"))
      ) {
        var i = ke(t);
        if (i !== null) {
          switch (typeof n) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!i.acceptsBooleans)
                return;
          }
          var c = i.attributeName, h = Z(c);
          switch (i.type) {
            case Ne:
              n && o.push(j, h, xe);
              return;
            case Ke:
              n === !0 ? o.push(j, h, xe) : n === !1 || o.push(j, h, J, Z(mr(n)), pe);
              return;
            case tr:
              isNaN(n) || o.push(j, h, J, Z(mr(n)), pe);
              break;
            case _r:
              !isNaN(n) && n >= 1 && o.push(j, h, J, Z(mr(n)), pe);
              break;
            default:
              i.sanitizeURL && (re(n, c), n = "" + n, ae(n)), o.push(j, h, J, Z(mr(n)), pe);
          }
        } else if (U(t)) {
          switch (typeof n) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var y = t.toLowerCase().slice(0, 5);
              if (y !== "data-" && y !== "aria-")
                return;
            }
          }
          o.push(j, Z(t), J, Z(mr(n)), pe);
        }
      }
    }
    var Ye = L(">"), Er = L("/>");
    function Dr(o, e, t) {
      if (e != null) {
        if (t != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof e != "object" || !("__html" in e))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var n = e.__html;
        n != null && (ue(n), o.push(Z("" + n)));
      }
    }
    var jr = !1, Yt = !1, St = !1, tn = !1, Gt = !1, Xt = !1, kt = !1;
    function Zt(o, e) {
      {
        var t = o[e];
        if (t != null) {
          var n = Re(t);
          o.multiple && !n ? d("The `%s` prop supplied to <select> must be an array if `multiple` is true.", e) : !o.multiple && n && d("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", e);
        }
      }
    }
    function Ro(o, e, t) {
      at("select", e), Zt(e, "value"), Zt(e, "defaultValue"), e.value !== void 0 && e.defaultValue !== void 0 && !St && (d("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), St = !0), o.push(Gr("select"));
      var n = null, i = null;
      for (var c in e)
        if (ge.call(e, c)) {
          var h = e[c];
          if (h == null)
            continue;
          switch (c) {
            case "children":
              n = h;
              break;
            case "dangerouslySetInnerHTML":
              i = h;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              he(o, t, c, h);
              break;
          }
        }
      return o.push(Ye), Dr(o, i, n), n;
    }
    function to(o) {
      var e = "";
      return r.Children.forEach(o, function(t) {
        t != null && (e += t, !Gt && typeof t != "string" && typeof t != "number" && (Gt = !0, d("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), e;
    }
    var mn = L(' selected=""');
    function Et(o, e, t, n) {
      var i = n.selectedValue;
      o.push(Gr("option"));
      var c = null, h = null, y = null, k = null;
      for (var I in e)
        if (ge.call(e, I)) {
          var H = e[I];
          if (H == null)
            continue;
          switch (I) {
            case "children":
              c = H;
              break;
            case "selected":
              y = H, kt || (d("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), kt = !0);
              break;
            case "dangerouslySetInnerHTML":
              k = H;
              break;
            case "value":
              h = H;
            default:
              he(o, t, I, H);
              break;
          }
        }
      if (i != null) {
        var X;
        if (h !== null ? (re(h, "value"), X = "" + h) : (k !== null && (Xt || (Xt = !0, d("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), X = to(c)), Re(i))
          for (var ie = 0; ie < i.length; ie++) {
            re(i[ie], "value");
            var _e = "" + i[ie];
            if (_e === X) {
              o.push(mn);
              break;
            }
          }
        else
          re(i, "select.value"), "" + i === X && o.push(mn);
      } else y && o.push(mn);
      return o.push(Ye), Dr(o, k, c), c;
    }
    function $o(o, e, t) {
      at("input", e), e.checked !== void 0 && e.defaultChecked !== void 0 && !Yt && (d("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", e.type), Yt = !0), e.value !== void 0 && e.defaultValue !== void 0 && !jr && (d("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", e.type), jr = !0), o.push(Gr("input"));
      var n = null, i = null, c = null, h = null;
      for (var y in e)
        if (ge.call(e, y)) {
          var k = e[y];
          if (k == null)
            continue;
          switch (y) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              h = k;
              break;
            case "defaultValue":
              i = k;
              break;
            case "checked":
              c = k;
              break;
            case "value":
              n = k;
              break;
            default:
              he(o, t, y, k);
              break;
          }
        }
      return c !== null ? he(o, t, "checked", c) : h !== null && he(o, t, "checked", h), n !== null ? he(o, t, "value", n) : i !== null && he(o, t, "value", i), o.push(Er), null;
    }
    function It(o, e, t) {
      at("textarea", e), e.value !== void 0 && e.defaultValue !== void 0 && !tn && (d("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), tn = !0), o.push(Gr("textarea"));
      var n = null, i = null, c = null;
      for (var h in e)
        if (ge.call(e, h)) {
          var y = e[h];
          if (y == null)
            continue;
          switch (h) {
            case "children":
              c = y;
              break;
            case "value":
              n = y;
              break;
            case "defaultValue":
              i = y;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              he(o, t, h, y);
              break;
          }
        }
      if (n === null && i !== null && (n = i), o.push(Ye), c != null) {
        if (d("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), n != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (Re(c)) {
          if (c.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          ue(c[0]), n = "" + c[0];
        }
        ue(c), n = "" + c;
      }
      return typeof n == "string" && n[0] === `
` && o.push(Jt), n !== null && (re(n, "value"), o.push(Z(Nr("" + n)))), null;
    }
    function Rn(o, e, t, n) {
      o.push(Gr(t));
      for (var i in e)
        if (ge.call(e, i)) {
          var c = e[i];
          if (c == null)
            continue;
          switch (i) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(t + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              he(o, n, i, c);
              break;
          }
        }
      return o.push(Er), null;
    }
    function nn(o, e, t) {
      o.push(Gr("menuitem"));
      for (var n in e)
        if (ge.call(e, n)) {
          var i = e[n];
          if (i == null)
            continue;
          switch (n) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              he(o, t, n, i);
              break;
          }
        }
      return o.push(Ye), null;
    }
    function or(o, e, t) {
      o.push(Gr("title"));
      var n = null;
      for (var i in e)
        if (ge.call(e, i)) {
          var c = e[i];
          if (c == null)
            continue;
          switch (i) {
            case "children":
              n = c;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              he(o, t, i, c);
              break;
          }
        }
      o.push(Ye);
      {
        var h = Array.isArray(n) && n.length < 2 ? n[0] || null : n;
        Array.isArray(n) && n.length > 1 ? d("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : h != null && h.$$typeof != null ? d("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : h != null && typeof h != "string" && typeof h != "number" && d("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return n;
    }
    function ot(o, e, t, n) {
      o.push(Gr(t));
      var i = null, c = null;
      for (var h in e)
        if (ge.call(e, h)) {
          var y = e[h];
          if (y == null)
            continue;
          switch (h) {
            case "children":
              i = y;
              break;
            case "dangerouslySetInnerHTML":
              c = y;
              break;
            default:
              he(o, n, h, y);
              break;
          }
        }
      return o.push(Ye), Dr(o, c, i), typeof i == "string" ? (o.push(Z(Nr(i))), null) : i;
    }
    function vn(o, e, t, n) {
      o.push(Gr(t));
      var i = null, c = null;
      for (var h in e)
        if (ge.call(e, h)) {
          var y = e[h];
          if (y == null)
            continue;
          switch (h) {
            case "children":
              i = y;
              break;
            case "dangerouslySetInnerHTML":
              c = y;
              break;
            case "style":
              P(o, n, y);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              U(h) && typeof y != "function" && typeof y != "symbol" && o.push(j, Z(h), J, Z(mr(y)), pe);
              break;
          }
        }
      return o.push(Ye), Dr(o, c, i), i;
    }
    var Jt = L(`
`);
    function ft(o, e, t, n) {
      o.push(Gr(t));
      var i = null, c = null;
      for (var h in e)
        if (ge.call(e, h)) {
          var y = e[h];
          if (y == null)
            continue;
          switch (h) {
            case "children":
              i = y;
              break;
            case "dangerouslySetInnerHTML":
              c = y;
              break;
            default:
              he(o, n, h, y);
              break;
          }
        }
      if (o.push(Ye), c != null) {
        if (i != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof c != "object" || !("__html" in c))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var k = c.__html;
        k != null && (typeof k == "string" && k.length > 0 && k[0] === `
` ? o.push(Jt, Z(k)) : (ue(k), o.push(Z("" + k))));
      }
      return typeof i == "string" && i[0] === `
` && o.push(Jt), i;
    }
    var ln = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ct = /* @__PURE__ */ new Map();
    function Gr(o) {
      var e = Ct.get(o);
      if (e === void 0) {
        if (!ln.test(o))
          throw new Error("Invalid tag: " + o);
        e = L("<" + o), Ct.set(o, e);
      }
      return e;
    }
    var Mn = L("<!DOCTYPE html>");
    function gn(o, e, t, n, i) {
      switch (Sr(e, t), yt(e, t), fn(e, t, null), !t.suppressContentEditableWarning && t.contentEditable && t.children != null && d("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), i.insertionMode !== rt && i.insertionMode !== tt && e.indexOf("-") === -1 && typeof t.is != "string" && e.toLowerCase() !== e && d("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e) {
        case "select":
          return Ro(o, t, n);
        case "option":
          return Et(o, t, n, i);
        case "textarea":
          return It(o, t, n);
        case "input":
          return $o(o, t, n);
        case "menuitem":
          return nn(o, t, n);
        case "title":
          return or(o, t, n);
        case "listing":
        case "pre":
          return ft(o, t, e, n);
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return Rn(o, t, e, n);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return ot(o, t, e, n);
        case "html":
          return i.insertionMode === lr && o.push(Mn), ot(o, t, e, n);
        default:
          return e.indexOf("-") === -1 && typeof t.is != "string" ? ot(o, t, e, n) : vn(o, t, e, n);
      }
    }
    var no = L("</"), $n = L(">");
    function m(o, e, t) {
      switch (e) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          o.push(no, Z(e), $n);
      }
    }
    function T(o, e) {
      for (var t = e.bootstrapChunks, n = 0; n < t.length - 1; n++)
        O(o, t[n]);
      return n < t.length ? se(o, t[n]) : !0;
    }
    var F = L('<template id="'), M = L('"></template>');
    function q(o, e, t) {
      O(o, F), O(o, e.placeholderPrefix);
      var n = Z(t.toString(16));
      return O(o, n), se(o, M);
    }
    var ve = L("<!--$-->"), ce = L('<!--$?--><template id="'), $e = L('"></template>'), De = L("<!--$!-->"), Ze = L("<!--/$-->"), ar = L("<template"), Je = L('"'), rr = L(' data-dgst="'), cr = L(' data-msg="'), Rr = L(' data-stck="'), yn = L("></template>");
    function _n(o, e) {
      return se(o, ve);
    }
    function bn(o, e, t) {
      if (O(o, ce), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return O(o, t), se(o, $e);
    }
    function Xr(o, e, t, n, i) {
      var c;
      return c = se(o, De), O(o, ar), t && (O(o, rr), O(o, Z(mr(t))), O(o, Je)), n && (O(o, cr), O(o, Z(mr(n))), O(o, Je)), i && (O(o, Rr), O(o, Z(mr(i))), O(o, Je)), c = se(o, yn), c;
    }
    function Ln(o, e) {
      return se(o, Ze);
    }
    function Pn(o, e) {
      return se(o, Ze);
    }
    function oo(o, e) {
      return se(o, Ze);
    }
    var ao = L('<div hidden id="'), io = L('">'), da = L("</div>"), fa = L('<svg aria-hidden="true" style="display:none" id="'), so = L('">'), lo = L("</svg>"), pa = L('<math aria-hidden="true" style="display:none" id="'), ha = L('">'), ma = L("</math>"), _o = L('<table hidden id="'), va = L('">'), l = L("</table>"), p = L('<table hidden><tbody id="'), g = L('">'), w = L("</tbody></table>"), D = L('<table hidden><tr id="'), z = L('">'), W = L("</tr></table>"), Q = L('<table hidden><colgroup id="'), Se = L('">'), Me = L("</colgroup></table>");
    function Oe(o, e, t, n) {
      switch (t.insertionMode) {
        case lr:
        case ur:
          return O(o, ao), O(o, e.segmentPrefix), O(o, Z(n.toString(16))), se(o, io);
        case rt:
          return O(o, fa), O(o, e.segmentPrefix), O(o, Z(n.toString(16))), se(o, so);
        case tt:
          return O(o, pa), O(o, e.segmentPrefix), O(o, Z(n.toString(16))), se(o, ha);
        case Ht:
          return O(o, _o), O(o, e.segmentPrefix), O(o, Z(n.toString(16))), se(o, va);
        case wt:
          return O(o, p), O(o, e.segmentPrefix), O(o, Z(n.toString(16))), se(o, g);
        case nt:
          return O(o, D), O(o, e.segmentPrefix), O(o, Z(n.toString(16))), se(o, z);
        case ct:
          return O(o, Q), O(o, e.segmentPrefix), O(o, Z(n.toString(16))), se(o, Se);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function dr(o, e) {
      switch (e.insertionMode) {
        case lr:
        case ur:
          return se(o, da);
        case rt:
          return se(o, lo);
        case tt:
          return se(o, ma);
        case Ht:
          return se(o, l);
        case wt:
          return se(o, w);
        case nt:
          return se(o, W);
        case ct:
          return se(o, Me);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var pt = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", zt = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', At = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', uo = L(pt + ';$RS("'), ga = L('$RS("'), Bn = L('","'), cl = L('")<\/script>');
    function dl(o, e, t) {
      O(o, e.startInlineScript), e.sentCompleteSegmentFunction ? O(o, ga) : (e.sentCompleteSegmentFunction = !0, O(o, uo)), O(o, e.segmentPrefix);
      var n = Z(t.toString(16));
      return O(o, n), O(o, Bn), O(o, e.placeholderPrefix), O(o, n), se(o, cl);
    }
    var li = L(zt + ';$RC("'), fl = L('$RC("'), pl = L('","'), ts = L('")<\/script>');
    function ns(o, e, t, n) {
      if (O(o, e.startInlineScript), e.sentCompleteBoundaryFunction ? O(o, fl) : (e.sentCompleteBoundaryFunction = !0, O(o, li)), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var i = Z(n.toString(16));
      return O(o, t), O(o, pl), O(o, e.segmentPrefix), O(o, i), se(o, ts);
    }
    var hl = L(At + ';$RX("'), ml = L('$RX("'), vl = L('"'), gl = L(")<\/script>"), Tt = L(",");
    function yl(o, e, t, n, i, c) {
      if (O(o, e.startInlineScript), e.sentClientRenderFunction ? O(o, ml) : (e.sentClientRenderFunction = !0, O(o, hl)), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return O(o, t), O(o, vl), (n || i || c) && (O(o, Tt), O(o, Z(ya(n || "")))), (i || c) && (O(o, Tt), O(o, Z(ya(i || "")))), c && (O(o, Tt), O(o, Z(ya(c)))), se(o, gl);
    }
    var os = /[<\u2028\u2029]/g;
    function ya(o) {
      var e = JSON.stringify(o);
      return e.replace(os, function(t) {
        switch (t) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    var Dt = Object.assign, as = Symbol.for("react.element"), ba = Symbol.for("react.portal"), xa = Symbol.for("react.fragment"), wa = Symbol.for("react.strict_mode"), Sa = Symbol.for("react.profiler"), Po = Symbol.for("react.provider"), Io = Symbol.for("react.context"), co = Symbol.for("react.forward_ref"), ui = Symbol.for("react.suspense"), ci = Symbol.for("react.suspense_list"), di = Symbol.for("react.memo"), ka = Symbol.for("react.lazy"), is = Symbol.for("react.scope"), bl = Symbol.for("react.debug_trace_mode"), xl = Symbol.for("react.legacy_hidden"), wl = Symbol.for("react.default_value"), fi = Symbol.iterator, wr = "@@iterator";
    function zo(o) {
      if (o === null || typeof o != "object")
        return null;
      var e = fi && o[fi] || o[wr];
      return typeof e == "function" ? e : null;
    }
    function ss(o, e, t) {
      var n = o.displayName;
      if (n)
        return n;
      var i = e.displayName || e.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function pi(o) {
      return o.displayName || "Context";
    }
    function yr(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case xa:
          return "Fragment";
        case ba:
          return "Portal";
        case Sa:
          return "Profiler";
        case wa:
          return "StrictMode";
        case ui:
          return "Suspense";
        case ci:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case Io:
            var e = o;
            return pi(e) + ".Consumer";
          case Po:
            var t = o;
            return pi(t._context) + ".Provider";
          case co:
            return ss(o, o.render, "ForwardRef");
          case di:
            var n = o.displayName || null;
            return n !== null ? n : yr(o.type) || "Memo";
          case ka: {
            var i = o, c = i._payload, h = i._init;
            try {
              return yr(h(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var fo = 0, hi, mi, vi, gi, ls, us, Ea;
    function Ca() {
    }
    Ca.__reactDisabledLog = !0;
    function Ao() {
      {
        if (fo === 0) {
          hi = console.log, mi = console.info, vi = console.warn, gi = console.error, ls = console.group, us = console.groupCollapsed, Ea = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: Ca,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        fo++;
      }
    }
    function yi() {
      {
        if (fo--, fo === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Dt({}, o, {
              value: hi
            }),
            info: Dt({}, o, {
              value: mi
            }),
            warn: Dt({}, o, {
              value: vi
            }),
            error: Dt({}, o, {
              value: gi
            }),
            group: Dt({}, o, {
              value: ls
            }),
            groupCollapsed: Dt({}, o, {
              value: us
            }),
            groupEnd: Dt({}, o, {
              value: Ea
            })
          });
        }
        fo < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var po = u.ReactCurrentDispatcher, bi;
    function Un(o, e, t) {
      {
        if (bi === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            bi = n && n[1] || "";
          }
        return `
` + bi + o;
      }
    }
    var xi = !1, Do;
    {
      var Sl = typeof WeakMap == "function" ? WeakMap : Map;
      Do = new Sl();
    }
    function Oo(o, e) {
      if (!o || xi)
        return "";
      {
        var t = Do.get(o);
        if (t !== void 0)
          return t;
      }
      var n;
      xi = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = po.current, po.current = null, Ao();
      try {
        if (e) {
          var h = function() {
            throw Error();
          };
          if (Object.defineProperty(h.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(h, []);
            } catch (qe) {
              n = qe;
            }
            Reflect.construct(o, [], h);
          } else {
            try {
              h.call();
            } catch (qe) {
              n = qe;
            }
            o.call(h.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (qe) {
            n = qe;
          }
          o();
        }
      } catch (qe) {
        if (qe && n && typeof qe.stack == "string") {
          for (var y = qe.stack.split(`
`), k = n.stack.split(`
`), I = y.length - 1, H = k.length - 1; I >= 1 && H >= 0 && y[I] !== k[H]; )
            H--;
          for (; I >= 1 && H >= 0; I--, H--)
            if (y[I] !== k[H]) {
              if (I !== 1 || H !== 1)
                do
                  if (I--, H--, H < 0 || y[I] !== k[H]) {
                    var X = `
` + y[I].replace(" at new ", " at ");
                    return o.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", o.displayName)), typeof o == "function" && Do.set(o, X), X;
                  }
                while (I >= 1 && H >= 0);
              break;
            }
        }
      } finally {
        xi = !1, po.current = c, yi(), Error.prepareStackTrace = i;
      }
      var ie = o ? o.displayName || o.name : "", _e = ie ? Un(ie) : "";
      return typeof o == "function" && Do.set(o, _e), _e;
    }
    function cs(o, e, t) {
      return Oo(o, !0);
    }
    function wi(o, e, t) {
      return Oo(o, !1);
    }
    function Ta(o) {
      var e = o.prototype;
      return !!(e && e.isReactComponent);
    }
    function Ra(o, e, t) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return Oo(o, Ta(o));
      if (typeof o == "string")
        return Un(o);
      switch (o) {
        case ui:
          return Un("Suspense");
        case ci:
          return Un("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case co:
            return wi(o.render);
          case di:
            return Ra(o.type, e, t);
          case ka: {
            var n = o, i = n._payload, c = n._init;
            try {
              return Ra(c(i), e, t);
            } catch {
            }
          }
        }
      return "";
    }
    var $a = {}, Fo = u.ReactDebugCurrentFrame;
    function jo(o) {
      if (o) {
        var e = o._owner, t = Ra(o.type, o._source, e ? e.type : null);
        Fo.setExtraStackFrame(t);
      } else
        Fo.setExtraStackFrame(null);
    }
    function ds(o, e, t, n, i) {
      {
        var c = Function.call.bind(ge);
        for (var h in o)
          if (c(o, h)) {
            var y = void 0;
            try {
              if (typeof o[h] != "function") {
                var k = Error((n || "React class") + ": " + t + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw k.name = "Invariant Violation", k;
              }
              y = o[h](e, h, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (I) {
              y = I;
            }
            y && !(y instanceof Error) && (jo(i), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, h, typeof y), jo(null)), y instanceof Error && !(y.message in $a) && ($a[y.message] = !0, jo(i), d("Failed %s type: %s", t, y.message), jo(null));
          }
      }
    }
    var Nn;
    Nn = {};
    var _a = {};
    Object.freeze(_a);
    function In(o, e) {
      {
        var t = o.contextTypes;
        if (!t)
          return _a;
        var n = {};
        for (var i in t)
          n[i] = e[i];
        {
          var c = yr(o) || "Unknown";
          ds(t, n, "context", c);
        }
        return n;
      }
    }
    function Si(o, e, t, n) {
      {
        if (typeof o.getChildContext != "function") {
          {
            var i = yr(e) || "Unknown";
            Nn[i] || (Nn[i] = !0, d("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", i, i));
          }
          return t;
        }
        var c = o.getChildContext();
        for (var h in c)
          if (!(h in n))
            throw new Error((yr(e) || "Unknown") + '.getChildContext(): key "' + h + '" is not defined in childContextTypes.');
        {
          var y = yr(e) || "Unknown";
          ds(n, c, "child context", y);
        }
        return Dt({}, t, c);
      }
    }
    var Wn;
    Wn = {};
    var Pa = null, zn = null;
    function Ia(o) {
      o.context._currentValue = o.parentValue;
    }
    function za(o) {
      o.context._currentValue = o.value;
    }
    function Mo(o, e) {
      if (o !== e) {
        Ia(o);
        var t = o.parent, n = e.parent;
        if (t === null) {
          if (n !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (n === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          Mo(t, n);
        }
        za(e);
      }
    }
    function Lo(o) {
      Ia(o);
      var e = o.parent;
      e !== null && Lo(e);
    }
    function fs(o) {
      var e = o.parent;
      e !== null && fs(e), za(o);
    }
    function ps(o, e) {
      Ia(o);
      var t = o.parent;
      if (t === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      t.depth === e.depth ? Mo(t, e) : ps(t, e);
    }
    function hs(o, e) {
      var t = e.parent;
      if (t === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      o.depth === t.depth ? Mo(o, t) : hs(o, t), za(e);
    }
    function An(o) {
      var e = zn, t = o;
      e !== t && (e === null ? fs(t) : t === null ? Lo(e) : e.depth === t.depth ? Mo(e, t) : e.depth > t.depth ? ps(e, t) : hs(e, t), zn = t);
    }
    function ki(o, e) {
      var t;
      t = o._currentValue, o._currentValue = e, o._currentRenderer !== void 0 && o._currentRenderer !== null && o._currentRenderer !== Wn && d("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), o._currentRenderer = Wn;
      var n = zn, i = {
        parent: n,
        depth: n === null ? 0 : n.depth + 1,
        context: o,
        parentValue: t,
        value: e
      };
      return zn = i, i;
    }
    function kl(o) {
      var e = zn;
      if (e === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      e.context !== o && d("The parent context is not the expected context. This is probably a bug in React.");
      {
        var t = e.parentValue;
        t === wl ? e.context._currentValue = e.context._defaultValue : e.context._currentValue = t, o._currentRenderer !== void 0 && o._currentRenderer !== null && o._currentRenderer !== Wn && d("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), o._currentRenderer = Wn;
      }
      return zn = e.parent;
    }
    function ms() {
      return zn;
    }
    function ho(o) {
      var e = o._currentValue;
      return e;
    }
    function Bo(o) {
      return o._reactInternals;
    }
    function Ei(o, e) {
      o._reactInternals = e;
    }
    var Aa = {}, Da = {}, Oa, mo, Uo, No, Fa, Wo, ja, Ma, Ci;
    {
      Oa = /* @__PURE__ */ new Set(), mo = /* @__PURE__ */ new Set(), Uo = /* @__PURE__ */ new Set(), ja = /* @__PURE__ */ new Set(), No = /* @__PURE__ */ new Set(), Ma = /* @__PURE__ */ new Set(), Ci = /* @__PURE__ */ new Set();
      var vs = /* @__PURE__ */ new Set();
      Wo = function(o, e) {
        if (!(o === null || typeof o == "function")) {
          var t = e + "_" + o;
          vs.has(t) || (vs.add(t), d("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", e, o));
        }
      }, Fa = function(o, e) {
        if (e === void 0) {
          var t = yr(o) || "Component";
          No.has(t) || (No.add(t), d("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", t));
        }
      };
    }
    function gs(o, e) {
      {
        var t = o.constructor, n = t && yr(t) || "ReactClass", i = n + "." + e;
        if (Aa[i])
          return;
        d(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, e, e, n), Aa[i] = !0;
      }
    }
    var ys = {
      isMounted: function(o) {
        return !1;
      },
      enqueueSetState: function(o, e, t) {
        var n = Bo(o);
        n.queue === null ? gs(o, "setState") : (n.queue.push(e), t != null && Wo(t, "setState"));
      },
      enqueueReplaceState: function(o, e, t) {
        var n = Bo(o);
        n.replace = !0, n.queue = [e], t != null && Wo(t, "setState");
      },
      enqueueForceUpdate: function(o, e) {
        var t = Bo(o);
        t.queue === null ? gs(o, "forceUpdate") : e != null && Wo(e, "setState");
      }
    };
    function El(o, e, t, n, i) {
      var c = t(i, n);
      Fa(e, c);
      var h = c == null ? n : Dt({}, n, c);
      return h;
    }
    function bs(o, e, t) {
      var n = _a, i = o.contextType;
      if ("contextType" in o) {
        var c = (
          // Allow null for conditional declaration
          i === null || i !== void 0 && i.$$typeof === Io && i._context === void 0
        );
        if (!c && !Ci.has(o)) {
          Ci.add(o);
          var h = "";
          i === void 0 ? h = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof i != "object" ? h = " However, it is set to a " + typeof i + "." : i.$$typeof === Po ? h = " Did you accidentally pass the Context.Provider instead?" : i._context !== void 0 ? h = " Did you accidentally pass the Context.Consumer instead?" : h = " However, it is set to an object with keys {" + Object.keys(i).join(", ") + "}.", d("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", yr(o) || "Component", h);
        }
      }
      typeof i == "object" && i !== null ? n = ho(i) : n = t;
      var y = new o(e, n);
      {
        if (typeof o.getDerivedStateFromProps == "function" && (y.state === null || y.state === void 0)) {
          var k = yr(o) || "Component";
          Oa.has(k) || (Oa.add(k), d("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", k, y.state === null ? "null" : "undefined", k));
        }
        if (typeof o.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function") {
          var I = null, H = null, X = null;
          if (typeof y.componentWillMount == "function" && y.componentWillMount.__suppressDeprecationWarning !== !0 ? I = "componentWillMount" : typeof y.UNSAFE_componentWillMount == "function" && (I = "UNSAFE_componentWillMount"), typeof y.componentWillReceiveProps == "function" && y.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? H = "componentWillReceiveProps" : typeof y.UNSAFE_componentWillReceiveProps == "function" && (H = "UNSAFE_componentWillReceiveProps"), typeof y.componentWillUpdate == "function" && y.componentWillUpdate.__suppressDeprecationWarning !== !0 ? X = "componentWillUpdate" : typeof y.UNSAFE_componentWillUpdate == "function" && (X = "UNSAFE_componentWillUpdate"), I !== null || H !== null || X !== null) {
            var ie = yr(o) || "Component", _e = typeof o.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Uo.has(ie) || (Uo.add(ie), d(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ie, _e, I !== null ? `
  ` + I : "", H !== null ? `
  ` + H : "", X !== null ? `
  ` + X : ""));
          }
        }
      }
      return y;
    }
    function Cl(o, e, t) {
      {
        var n = yr(e) || "Component", i = o.render;
        i || (e.prototype && typeof e.prototype.render == "function" ? d("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", n) : d("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", n)), o.getInitialState && !o.getInitialState.isReactClassApproved && !o.state && d("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", n), o.getDefaultProps && !o.getDefaultProps.isReactClassApproved && d("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", n), o.propTypes && d("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", n), o.contextType && d("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", n), o.contextTypes && d("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", n), e.contextType && e.contextTypes && !Ma.has(e) && (Ma.add(e), d("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", n)), typeof o.componentShouldUpdate == "function" && d("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", n), e.prototype && e.prototype.isPureReactComponent && typeof o.shouldComponentUpdate < "u" && d("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", yr(e) || "A pure component"), typeof o.componentDidUnmount == "function" && d("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", n), typeof o.componentDidReceiveProps == "function" && d("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", n), typeof o.componentWillRecieveProps == "function" && d("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", n), typeof o.UNSAFE_componentWillRecieveProps == "function" && d("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", n);
        var c = o.props !== t;
        o.props !== void 0 && c && d("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", n, n), o.defaultProps && d("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", n, n), typeof o.getSnapshotBeforeUpdate == "function" && typeof o.componentDidUpdate != "function" && !mo.has(e) && (mo.add(e), d("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", yr(e))), typeof o.getDerivedStateFromProps == "function" && d("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", n), typeof o.getDerivedStateFromError == "function" && d("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", n), typeof e.getSnapshotBeforeUpdate == "function" && d("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", n);
        var h = o.state;
        h && (typeof h != "object" || Re(h)) && d("%s.state: must be set to an object or null", n), typeof o.getChildContext == "function" && typeof e.childContextTypes != "object" && d("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", n);
      }
    }
    function Tl(o, e) {
      var t = e.state;
      if (typeof e.componentWillMount == "function") {
        if (e.componentWillMount.__suppressDeprecationWarning !== !0) {
          var n = yr(o) || "Unknown";
          Da[n] || (x(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            n
          ), Da[n] = !0);
        }
        e.componentWillMount();
      }
      typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && (d("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", yr(o) || "Component"), ys.enqueueReplaceState(e, e.state, null));
    }
    function Ti(o, e, t, n) {
      if (o.queue !== null && o.queue.length > 0) {
        var i = o.queue, c = o.replace;
        if (o.queue = null, o.replace = !1, c && i.length === 1)
          e.state = i[0];
        else {
          for (var h = c ? i[0] : e.state, y = !0, k = c ? 1 : 0; k < i.length; k++) {
            var I = i[k], H = typeof I == "function" ? I.call(e, h, t, n) : I;
            H != null && (y ? (y = !1, h = Dt({}, h, H)) : Dt(h, H));
          }
          e.state = h;
        }
      } else
        o.queue = null;
    }
    function Ho(o, e, t, n) {
      Cl(o, e, t);
      var i = o.state !== void 0 ? o.state : null;
      o.updater = ys, o.props = t, o.state = i;
      var c = {
        queue: [],
        replace: !1
      };
      Ei(o, c);
      var h = e.contextType;
      if (typeof h == "object" && h !== null ? o.context = ho(h) : o.context = n, o.state === t) {
        var y = yr(e) || "Component";
        ja.has(y) || (ja.add(y), d("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", y));
      }
      var k = e.getDerivedStateFromProps;
      typeof k == "function" && (o.state = El(o, e, k, i, t)), typeof e.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (Tl(e, o), Ti(c, o, t, n));
    }
    var Rl = {
      id: 1,
      overflow: ""
    };
    function $l(o) {
      var e = o.overflow, t = o.id, n = t & ~_l(t);
      return n.toString(32) + e;
    }
    function Ri(o, e, t) {
      var n = o.id, i = o.overflow, c = La(n) - 1, h = n & ~(1 << c), y = t + 1, k = La(e) + c;
      if (k > 30) {
        var I = c - c % 5, H = (1 << I) - 1, X = (h & H).toString(32), ie = h >> I, _e = c - I, qe = La(e) + _e, Zr = y << _e, Jn = Zr | ie, Qn = X + i;
        return {
          id: 1 << qe | Jn,
          overflow: Qn
        };
      } else {
        var En = y << c, So = En | h, au = i;
        return {
          id: 1 << k | So,
          overflow: au
        };
      }
    }
    function La(o) {
      return 32 - Pl(o);
    }
    function _l(o) {
      return 1 << La(o) - 1;
    }
    var Pl = Math.clz32 ? Math.clz32 : $i, Il = Math.log, xn = Math.LN2;
    function $i(o) {
      var e = o >>> 0;
      return e === 0 ? 32 : 31 - (Il(e) / xn | 0) | 0;
    }
    function Ba(o, e) {
      return o === e && (o !== 0 || 1 / o === 1 / e) || o !== o && e !== e;
    }
    var vr = typeof Object.is == "function" ? Object.is : Ba, Ot = null, vo = null, Hn = null, Qe = null, Dn = !1, Ua = !1, Ft = 0, jt = null, un = 0, zl = 25, on = !1, On;
    function Vn() {
      if (Ot === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return on && d("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Ot;
    }
    function Al(o, e) {
      if (e === null)
        return d("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", On), !1;
      o.length !== e.length && d(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, On, "[" + o.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var t = 0; t < e.length && t < o.length; t++)
        if (!vr(o[t], e[t]))
          return !1;
      return !0;
    }
    function _i() {
      if (un > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function Vo() {
      return Qe === null ? Hn === null ? (Dn = !1, Hn = Qe = _i()) : (Dn = !0, Qe = Hn) : Qe.next === null ? (Dn = !1, Qe = Qe.next = _i()) : (Dn = !0, Qe = Qe.next), Qe;
    }
    function Dl(o, e) {
      Ot = e, vo = o, on = !1, Ft = 0;
    }
    function Ol(o, e, t, n) {
      for (; Ua; )
        Ua = !1, Ft = 0, un += 1, Qe = null, t = o(e, n);
      return Pi(), t;
    }
    function Na() {
      var o = Ft !== 0;
      return o;
    }
    function Pi() {
      on = !1, Ot = null, vo = null, Ua = !1, Hn = null, un = 0, jt = null, Qe = null;
    }
    function xs(o) {
      return on && d("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), ho(o);
    }
    function ws(o) {
      return On = "useContext", Vn(), ho(o);
    }
    function Ii(o, e) {
      return typeof e == "function" ? e(o) : e;
    }
    function Fl(o) {
      return On = "useState", Ss(
        Ii,
        // useReducer has a special case to support lazy useState initializers
        o
      );
    }
    function Ss(o, e, t) {
      if (o !== Ii && (On = "useReducer"), Ot = Vn(), Qe = Vo(), Dn) {
        var n = Qe.queue, i = n.dispatch;
        if (jt !== null) {
          var c = jt.get(n);
          if (c !== void 0) {
            jt.delete(n);
            var h = Qe.memoizedState, y = c;
            do {
              var k = y.action;
              on = !0, h = o(h, k), on = !1, y = y.next;
            } while (y !== null);
            return Qe.memoizedState = h, [h, i];
          }
        }
        return [Qe.memoizedState, i];
      } else {
        on = !0;
        var I;
        o === Ii ? I = typeof e == "function" ? e() : e : I = t !== void 0 ? t(e) : e, on = !1, Qe.memoizedState = I;
        var H = Qe.queue = {
          last: null,
          dispatch: null
        }, X = H.dispatch = Ll.bind(null, Ot, H);
        return [Qe.memoizedState, X];
      }
    }
    function ks(o, e) {
      Ot = Vn(), Qe = Vo();
      var t = e === void 0 ? null : e;
      if (Qe !== null) {
        var n = Qe.memoizedState;
        if (n !== null && t !== null) {
          var i = n[1];
          if (Al(t, i))
            return n[0];
        }
      }
      on = !0;
      var c = o();
      return on = !1, Qe.memoizedState = [c, t], c;
    }
    function jl(o) {
      Ot = Vn(), Qe = Vo();
      var e = Qe.memoizedState;
      if (e === null) {
        var t = {
          current: o
        };
        return Object.seal(t), Qe.memoizedState = t, t;
      } else
        return e;
    }
    function Ml(o, e) {
      On = "useLayoutEffect", d("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Ll(o, e, t) {
      if (un >= zl)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (o === Ot) {
        Ua = !0;
        var n = {
          action: t,
          next: null
        };
        jt === null && (jt = /* @__PURE__ */ new Map());
        var i = jt.get(e);
        if (i === void 0)
          jt.set(e, n);
        else {
          for (var c = i; c.next !== null; )
            c = c.next;
          c.next = n;
        }
      }
    }
    function Bl(o, e) {
      return ks(function() {
        return o;
      }, e);
    }
    function Ul(o, e, t) {
      return Vn(), e(o._source);
    }
    function Nl(o, e, t) {
      if (t === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return t();
    }
    function Wa(o) {
      return Vn(), o;
    }
    function Es() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function zi() {
      return Vn(), [!1, Es];
    }
    function Cs() {
      var o = vo, e = $l(o.treeContext), t = Yo;
      if (t === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var n = Ft++;
      return dt(t, e, n);
    }
    function Ha() {
    }
    var Va = {
      readContext: xs,
      useContext: ws,
      useMemo: ks,
      useReducer: Ss,
      useRef: jl,
      useState: Fl,
      useInsertionEffect: Ha,
      useLayoutEffect: Ml,
      useCallback: Bl,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: Ha,
      // Effects are not run in the server environment.
      useEffect: Ha,
      // Debugging effect
      useDebugValue: Ha,
      useDeferredValue: Wa,
      useTransition: zi,
      useId: Cs,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Ul,
      useSyncExternalStore: Nl
    }, Yo = null;
    function Ya(o) {
      Yo = o;
    }
    function go(o) {
      try {
        var e = "", t = o;
        do {
          switch (t.tag) {
            case 0:
              e += Un(t.type, null, null);
              break;
            case 1:
              e += wi(t.type, null, null);
              break;
            case 2:
              e += cs(t.type, null, null);
              break;
          }
          t = t.parent;
        } while (t);
        return e;
      } catch (n) {
        return `
Error generating stack: ` + n.message + `
` + n.stack;
      }
    }
    var Ga = u.ReactCurrentDispatcher, Xa = u.ReactDebugCurrentFrame, Za = 0, yo = 1, Ai = 2, Yn = 3, Ts = 4, Wl = 0, bo = 1, xo = 2, Hl = 12800;
    function Vl(o) {
      return console.error(o), null;
    }
    function Gn() {
    }
    function Ja(o, e, t, n, i, c, h, y, k) {
      var I = [], H = /* @__PURE__ */ new Set(), X = {
        destination: null,
        responseState: e,
        progressiveChunkSize: n === void 0 ? Hl : n,
        status: Wl,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: H,
        pingedTasks: I,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: i === void 0 ? Vl : i,
        onAllReady: c === void 0 ? Gn : c,
        onShellReady: h === void 0 ? Gn : h,
        onShellError: y === void 0 ? Gn : y,
        onFatalError: k === void 0 ? Gn : k
      }, ie = Go(
        X,
        0,
        null,
        t,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      ie.parentFlushed = !0;
      var _e = Xn(X, o, null, ie, H, _a, Pa, Rl);
      return I.push(_e), X;
    }
    function wn(o, e) {
      var t = o.pingedTasks;
      t.push(e), t.length === 1 && N(function() {
        return Hi(o);
      });
    }
    function Di(o, e) {
      return {
        id: rn,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: e,
        errorDigest: null
      };
    }
    function Xn(o, e, t, n, i, c, h, y) {
      o.allPendingTasks++, t === null ? o.pendingRootTasks++ : t.pendingTasks++;
      var k = {
        node: e,
        ping: function() {
          return wn(o, k);
        },
        blockedBoundary: t,
        blockedSegment: n,
        abortSet: i,
        legacyContext: c,
        context: h,
        treeContext: y
      };
      return k.componentStack = null, i.add(k), k;
    }
    function Go(o, e, t, n, i, c) {
      return {
        status: Za,
        id: -1,
        // lazily assigned later
        index: e,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: n,
        boundary: t,
        lastPushedText: i,
        textEmbedded: c
      };
    }
    var Sn = null;
    function cn() {
      return Sn === null || Sn.componentStack === null ? "" : go(Sn.componentStack);
    }
    function kn(o, e) {
      o.componentStack = {
        tag: 0,
        parent: o.componentStack,
        type: e
      };
    }
    function Qa(o, e) {
      o.componentStack = {
        tag: 1,
        parent: o.componentStack,
        type: e
      };
    }
    function Xo(o, e) {
      o.componentStack = {
        tag: 2,
        parent: o.componentStack,
        type: e
      };
    }
    function an(o) {
      o.componentStack === null ? d("Unexpectedly popped too many stack frames. This is a bug in React.") : o.componentStack = o.componentStack.parent;
    }
    var Zo = null;
    function Oi(o, e) {
      {
        var t;
        typeof e == "string" ? t = e : e && typeof e.message == "string" ? t = e.message : t = String(e);
        var n = Zo || cn();
        Zo = null, o.errorMessage = t, o.errorComponentStack = n;
      }
    }
    function Jo(o, e) {
      var t = o.onError(e);
      if (t != null && typeof t != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof t + '" instead');
      return t;
    }
    function Qo(o, e) {
      var t = o.onShellError;
      t(e);
      var n = o.onFatalError;
      n(e), o.destination !== null ? (o.status = xo, de(o.destination, e)) : (o.status = bo, o.fatalError = e);
    }
    function Rs(o, e, t) {
      kn(e, "Suspense");
      var n = e.blockedBoundary, i = e.blockedSegment, c = t.fallback, h = t.children, y = /* @__PURE__ */ new Set(), k = Di(o, y), I = i.chunks.length, H = Go(
        o,
        I,
        k,
        i.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      i.children.push(H), i.lastPushedText = !1;
      var X = Go(
        o,
        0,
        null,
        i.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      X.parentFlushed = !0, e.blockedBoundary = k, e.blockedSegment = X;
      try {
        if (wo(o, e, h), Fr(X.chunks, o.responseState, X.lastPushedText, X.textEmbedded), X.status = yo, Zn(k, X), k.pendingTasks === 0) {
          an(e);
          return;
        }
      } catch (_e) {
        X.status = Ts, k.forceClientRender = !0, k.errorDigest = Jo(o, _e), Oi(k, _e);
      } finally {
        e.blockedBoundary = n, e.blockedSegment = i;
      }
      var ie = Xn(o, c, n, H, y, e.legacyContext, e.context, e.treeContext);
      ie.componentStack = e.componentStack, o.pingedTasks.push(ie), an(e);
    }
    function Yl(o, e, t, n) {
      kn(e, t);
      var i = e.blockedSegment, c = gn(i.chunks, t, n, o.responseState, i.formatContext);
      i.lastPushedText = !1;
      var h = i.formatContext;
      i.formatContext = Vt(h, t, n), wo(o, e, c), i.formatContext = h, m(i.chunks, t), i.lastPushedText = !1, an(e);
    }
    function $s(o) {
      return o.prototype && o.prototype.isReactComponent;
    }
    function Ko(o, e, t, n, i) {
      var c = {};
      Dl(e, c);
      var h = t(n, i);
      return Ol(t, n, h, i);
    }
    function Fi(o, e, t, n, i) {
      var c = t.render();
      t.props !== i && (Bi || d("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", yr(n) || "a component"), Bi = !0);
      {
        var h = n.childContextTypes;
        if (h != null) {
          var y = e.legacyContext, k = Si(t, n, y, h);
          e.legacyContext = k, ht(o, e, c), e.legacyContext = y;
          return;
        }
      }
      ht(o, e, c);
    }
    function _s(o, e, t, n) {
      Xo(e, t);
      var i = In(t, e.legacyContext), c = bs(t, n, i);
      Ho(c, t, n, i), Fi(o, e, c, t, n), an(e);
    }
    var ji = {}, qo = {}, Mi = {}, Li = {}, Bi = !1, Ps = {}, Is = !1, Ui = !1, zs = !1;
    function Gl(o, e, t, n) {
      var i;
      if (i = In(t, e.legacyContext), Qa(e, t), t.prototype && typeof t.prototype.render == "function") {
        var c = yr(t) || "Unknown";
        ji[c] || (d("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", c, c), ji[c] = !0);
      }
      var h = Ko(o, e, t, n, i), y = Na();
      if (typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0) {
        var k = yr(t) || "Unknown";
        qo[k] || (d("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", k, k, k), qo[k] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0
      ) {
        {
          var I = yr(t) || "Unknown";
          qo[I] || (d("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", I, I, I), qo[I] = !0);
        }
        Ho(h, t, n, i), Fi(o, e, h, t, n);
      } else if (Xl(t), y) {
        var H = e.treeContext, X = 1, ie = 0;
        e.treeContext = Ri(H, X, ie);
        try {
          ht(o, e, h);
        } finally {
          e.treeContext = H;
        }
      } else
        ht(o, e, h);
      an(e);
    }
    function Xl(o) {
      {
        if (o && o.childContextTypes && d("%s(...): childContextTypes cannot be defined on a function component.", o.displayName || o.name || "Component"), o.defaultProps !== void 0) {
          var e = yr(o) || "Unknown";
          Ps[e] || (d("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", e), Ps[e] = !0);
        }
        if (typeof o.getDerivedStateFromProps == "function") {
          var t = yr(o) || "Unknown";
          Li[t] || (d("%s: Function components do not support getDerivedStateFromProps.", t), Li[t] = !0);
        }
        if (typeof o.contextType == "object" && o.contextType !== null) {
          var n = yr(o) || "Unknown";
          Mi[n] || (d("%s: Function components do not support contextType.", n), Mi[n] = !0);
        }
      }
    }
    function As(o, e) {
      if (o && o.defaultProps) {
        var t = Dt({}, e), n = o.defaultProps;
        for (var i in n)
          t[i] === void 0 && (t[i] = n[i]);
        return t;
      }
      return e;
    }
    function Zl(o, e, t, n, i) {
      Qa(e, t.render);
      var c = Ko(o, e, t.render, n, i), h = Na();
      if (h) {
        var y = e.treeContext, k = 1, I = 0;
        e.treeContext = Ri(y, k, I);
        try {
          ht(o, e, c);
        } finally {
          e.treeContext = y;
        }
      } else
        ht(o, e, c);
      an(e);
    }
    function Ni(o, e, t, n, i) {
      var c = t.type, h = As(c, n);
      Ka(o, e, c, h, i);
    }
    function Jl(o, e, t, n) {
      t._context === void 0 ? t !== t.Consumer && (zs || (zs = !0, d("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : t = t._context;
      var i = n.children;
      typeof i != "function" && d("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var c = ho(t), h = i(c);
      ht(o, e, h);
    }
    function Mt(o, e, t, n) {
      var i = t._context, c = n.value, h = n.children, y;
      y = e.context, e.context = ki(i, c), ht(o, e, h), e.context = kl(i), y !== e.context && d("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function Ql(o, e, t, n, i) {
      kn(e, "Lazy");
      var c = t._payload, h = t._init, y = h(c), k = As(y, n);
      Ka(o, e, y, k, i), an(e);
    }
    function Ka(o, e, t, n, i) {
      if (typeof t == "function")
        if ($s(t)) {
          _s(o, e, t, n);
          return;
        } else {
          Gl(o, e, t, n);
          return;
        }
      if (typeof t == "string") {
        Yl(o, e, t, n);
        return;
      }
      switch (t) {
        case xl:
        case bl:
        case wa:
        case Sa:
        case xa: {
          ht(o, e, n.children);
          return;
        }
        case ci: {
          kn(e, "SuspenseList"), ht(o, e, n.children), an(e);
          return;
        }
        case is:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case ui: {
          Rs(o, e, n);
          return;
        }
      }
      if (typeof t == "object" && t !== null)
        switch (t.$$typeof) {
          case co: {
            Zl(o, e, t, n, i);
            return;
          }
          case di: {
            Ni(o, e, t, n, i);
            return;
          }
          case Po: {
            Mt(o, e, t, n);
            return;
          }
          case Io: {
            Jl(o, e, t, n);
            return;
          }
          case ka: {
            Ql(o, e, t, n);
            return;
          }
        }
      var c = "";
      throw (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (t == null ? t : typeof t) + "." + c));
    }
    function Kl(o, e) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      o[Symbol.toStringTag] === "Generator" && (Is || d("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Is = !0), o.entries === e && (Ui || d("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ui = !0);
    }
    function ht(o, e, t) {
      try {
        return ql(o, e, t);
      } catch (n) {
        throw typeof n == "object" && n !== null && typeof n.then == "function" || (Zo = Zo !== null ? Zo : cn()), n;
      }
    }
    function ql(o, e, t) {
      if (e.node = t, typeof t == "object" && t !== null) {
        switch (t.$$typeof) {
          case as: {
            var n = t, i = n.type, c = n.props, h = n.ref;
            Ka(o, e, i, c, h);
            return;
          }
          case ba:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case ka: {
            var y = t, k = y._payload, I = y._init, H;
            try {
              H = I(k);
            } catch (En) {
              throw typeof En == "object" && En !== null && typeof En.then == "function" && kn(e, "Lazy"), En;
            }
            ht(o, e, H);
            return;
          }
        }
        if (Re(t)) {
          Ds(o, e, t);
          return;
        }
        var X = zo(t);
        if (X) {
          Kl(t, X);
          var ie = X.call(t);
          if (ie) {
            var _e = ie.next();
            if (!_e.done) {
              var qe = [];
              do
                qe.push(_e.value), _e = ie.next();
              while (!_e.done);
              Ds(o, e, qe);
              return;
            }
            return;
          }
        }
        var Zr = Object.prototype.toString.call(t);
        throw new Error("Objects are not valid as a React child (found: " + (Zr === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : Zr) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof t == "string") {
        var Jn = e.blockedSegment;
        Jn.lastPushedText = kr(e.blockedSegment.chunks, t, o.responseState, Jn.lastPushedText);
        return;
      }
      if (typeof t == "number") {
        var Qn = e.blockedSegment;
        Qn.lastPushedText = kr(e.blockedSegment.chunks, "" + t, o.responseState, Qn.lastPushedText);
        return;
      }
      typeof t == "function" && d("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function Ds(o, e, t) {
      for (var n = t.length, i = 0; i < n; i++) {
        var c = e.treeContext;
        e.treeContext = Ri(c, n, i);
        try {
          wo(o, e, t[i]);
        } finally {
          e.treeContext = c;
        }
      }
    }
    function Os(o, e, t) {
      var n = e.blockedSegment, i = n.chunks.length, c = Go(
        o,
        i,
        null,
        n.formatContext,
        // Adopt the parent segment's leading text embed
        n.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      n.children.push(c), n.lastPushedText = !1;
      var h = Xn(o, e.node, e.blockedBoundary, c, e.abortSet, e.legacyContext, e.context, e.treeContext);
      e.componentStack !== null && (h.componentStack = e.componentStack.parent);
      var y = h.ping;
      t.then(y, y);
    }
    function wo(o, e, t) {
      var n = e.blockedSegment.formatContext, i = e.legacyContext, c = e.context, h = null;
      h = e.componentStack;
      try {
        return ht(o, e, t);
      } catch (y) {
        if (Pi(), typeof y == "object" && y !== null && typeof y.then == "function") {
          Os(o, e, y), e.blockedSegment.formatContext = n, e.legacyContext = i, e.context = c, An(c), e.componentStack = h;
          return;
        } else
          throw e.blockedSegment.formatContext = n, e.legacyContext = i, e.context = c, An(c), e.componentStack = h, y;
      }
    }
    function Fs(o, e, t, n) {
      var i = Jo(o, n);
      if (e === null ? Qo(o, n) : (e.pendingTasks--, e.forceClientRender || (e.forceClientRender = !0, e.errorDigest = i, Oi(e, n), e.parentFlushed && o.clientRenderedBoundaries.push(e))), o.allPendingTasks--, o.allPendingTasks === 0) {
        var c = o.onAllReady;
        c();
      }
    }
    function eu(o) {
      var e = this, t = o.blockedBoundary, n = o.blockedSegment;
      n.status = Yn, ea(e, t, n);
    }
    function Wi(o, e, t) {
      var n = o.blockedBoundary, i = o.blockedSegment;
      if (i.status = Yn, n === null)
        e.allPendingTasks--, e.status !== xo && (e.status = xo, e.destination !== null && K(e.destination));
      else {
        if (n.pendingTasks--, !n.forceClientRender) {
          n.forceClientRender = !0;
          var c = t === void 0 ? new Error("The render was aborted by the server without a reason.") : t;
          n.errorDigest = e.onError(c);
          {
            var h = "The server did not finish this Suspense boundary: ";
            c && typeof c.message == "string" ? c = h + c.message : c = h + String(c);
            var y = Sn;
            Sn = o;
            try {
              Oi(n, c);
            } finally {
              Sn = y;
            }
          }
          n.parentFlushed && e.clientRenderedBoundaries.push(n);
        }
        if (n.fallbackAbortableTasks.forEach(function(I) {
          return Wi(I, e, t);
        }), n.fallbackAbortableTasks.clear(), e.allPendingTasks--, e.allPendingTasks === 0) {
          var k = e.onAllReady;
          k();
        }
      }
    }
    function Zn(o, e) {
      if (e.chunks.length === 0 && e.children.length === 1 && e.children[0].boundary === null) {
        var t = e.children[0];
        t.id = e.id, t.parentFlushed = !0, t.status === yo && Zn(o, t);
      } else {
        var n = o.completedSegments;
        n.push(e);
      }
    }
    function ea(o, e, t) {
      if (e === null) {
        if (t.parentFlushed) {
          if (o.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          o.completedRootSegment = t;
        }
        if (o.pendingRootTasks--, o.pendingRootTasks === 0) {
          o.onShellError = Gn;
          var n = o.onShellReady;
          n();
        }
      } else if (e.pendingTasks--, !e.forceClientRender) {
        if (e.pendingTasks === 0)
          t.parentFlushed && t.status === yo && Zn(e, t), e.parentFlushed && o.completedBoundaries.push(e), e.fallbackAbortableTasks.forEach(eu, o), e.fallbackAbortableTasks.clear();
        else if (t.parentFlushed && t.status === yo) {
          Zn(e, t);
          var i = e.completedSegments;
          i.length === 1 && e.parentFlushed && o.partialBoundaries.push(e);
        }
      }
      if (o.allPendingTasks--, o.allPendingTasks === 0) {
        var c = o.onAllReady;
        c();
      }
    }
    function ru(o, e) {
      var t = e.blockedSegment;
      if (t.status === Za) {
        An(e.context);
        var n = null;
        n = Sn, Sn = e;
        try {
          ht(o, e, e.node), Fr(t.chunks, o.responseState, t.lastPushedText, t.textEmbedded), e.abortSet.delete(e), t.status = yo, ea(o, e.blockedBoundary, t);
        } catch (c) {
          if (Pi(), typeof c == "object" && c !== null && typeof c.then == "function") {
            var i = e.ping;
            c.then(i, i);
          } else
            e.abortSet.delete(e), t.status = Ts, Fs(o, e.blockedBoundary, t, c);
        } finally {
          Sn = n;
        }
      }
    }
    function Hi(o) {
      if (o.status !== xo) {
        var e = ms(), t = Ga.current;
        Ga.current = Va;
        var n;
        n = Xa.getCurrentStack, Xa.getCurrentStack = cn;
        var i = Yo;
        Ya(o.responseState);
        try {
          var c = o.pingedTasks, h;
          for (h = 0; h < c.length; h++) {
            var y = c[h];
            ru(o, y);
          }
          c.splice(0, h), o.destination !== null && Vi(o, o.destination);
        } catch (k) {
          Jo(o, k), Qo(o, k);
        } finally {
          Ya(i), Ga.current = t, Xa.getCurrentStack = n, t === Va && An(e);
        }
      }
    }
    function ra(o, e, t) {
      switch (t.parentFlushed = !0, t.status) {
        case Za: {
          var n = t.id = o.nextSegmentId++;
          return t.lastPushedText = !1, t.textEmbedded = !1, q(e, o.responseState, n);
        }
        case yo: {
          t.status = Ai;
          for (var i = !0, c = t.chunks, h = 0, y = t.children, k = 0; k < y.length; k++) {
            for (var I = y[k]; h < I.index; h++)
              O(e, c[h]);
            i = qa(o, e, I);
          }
          for (; h < c.length - 1; h++)
            O(e, c[h]);
          return h < c.length && (i = se(e, c[h])), i;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function qa(o, e, t) {
      var n = t.boundary;
      if (n === null)
        return ra(o, e, t);
      if (n.parentFlushed = !0, n.forceClientRender)
        return Xr(e, o.responseState, n.errorDigest, n.errorMessage, n.errorComponentStack), ra(o, e, t), oo(e, o.responseState);
      if (n.pendingTasks > 0) {
        n.rootSegmentID = o.nextSegmentId++, n.completedSegments.length > 0 && o.partialBoundaries.push(n);
        var i = n.id = Yr(o.responseState);
        return bn(e, o.responseState, i), ra(o, e, t), Pn(e, o.responseState);
      } else {
        if (n.byteSize > o.progressiveChunkSize)
          return n.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(n), bn(e, o.responseState, n.id), ra(o, e, t), Pn(e, o.responseState);
        _n(e, o.responseState);
        var c = n.completedSegments;
        if (c.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var h = c[0];
        return qa(o, e, h), Ln(e, o.responseState);
      }
    }
    function js(o, e, t) {
      return yl(e, o.responseState, t.id, t.errorDigest, t.errorMessage, t.errorComponentStack);
    }
    function ei(o, e, t) {
      return Oe(e, o.responseState, t.formatContext, t.id), qa(o, e, t), dr(e, t.formatContext);
    }
    function Ms(o, e, t) {
      for (var n = t.completedSegments, i = 0; i < n.length; i++) {
        var c = n[i];
        Ls(o, e, t, c);
      }
      return n.length = 0, ns(e, o.responseState, t.id, t.rootSegmentID);
    }
    function tu(o, e, t) {
      for (var n = t.completedSegments, i = 0; i < n.length; i++) {
        var c = n[i];
        if (!Ls(o, e, t, c))
          return i++, n.splice(0, i), !1;
      }
      return n.splice(0, i), !0;
    }
    function Ls(o, e, t, n) {
      if (n.status === Ai)
        return !0;
      var i = n.id;
      if (i === -1) {
        var c = n.id = t.rootSegmentID;
        if (c === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return ei(o, e, n);
      } else
        return ei(o, e, n), dl(e, o.responseState, i);
    }
    function Vi(o, e) {
      te();
      try {
        var t = o.completedRootSegment;
        t !== null && o.pendingRootTasks === 0 && (qa(o, e, t), o.completedRootSegment = null, T(e, o.responseState));
        var n = o.clientRenderedBoundaries, i;
        for (i = 0; i < n.length; i++) {
          var c = n[i];
          js(o, e, c);
        }
        n.splice(0, i);
        var h = o.completedBoundaries;
        for (i = 0; i < h.length; i++) {
          var y = h[i];
          Ms(o, e, y);
        }
        h.splice(0, i), B(e), te(e);
        var k = o.partialBoundaries;
        for (i = 0; i < k.length; i++) {
          var I = k[i];
          if (!tu(o, e, I)) {
            o.destination = null, i++, k.splice(0, i);
            return;
          }
        }
        k.splice(0, i);
        var H = o.completedBoundaries;
        for (i = 0; i < H.length; i++) {
          var X = H[i];
          Ms(o, e, X);
        }
        H.splice(0, i);
      } finally {
        B(e), o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && (o.abortableTasks.size !== 0 && d("There was still abortable task at the root when we closed. This is a bug in React."), K(e));
      }
    }
    function Bs(o) {
      N(function() {
        return Hi(o);
      });
    }
    function nu(o, e) {
      if (o.status === bo) {
        o.status = xo, de(e, o.fatalError);
        return;
      }
      if (o.status !== xo && o.destination === null) {
        o.destination = e;
        try {
          Vi(o, e);
        } catch (t) {
          Jo(o, t), Qo(o, t);
        }
      }
    }
    function Us(o, e) {
      try {
        var t = o.abortableTasks;
        t.forEach(function(n) {
          return Wi(n, o, e);
        }), t.clear(), o.destination !== null && Vi(o, o.destination);
      } catch (n) {
        Jo(o, n), Qo(o, n);
      }
    }
    function ou(o, e) {
      return new Promise(function(t, n) {
        var i, c, h = new Promise(function(ie, _e) {
          c = ie, i = _e;
        });
        function y() {
          var ie = new ReadableStream(
            {
              type: "bytes",
              pull: function(_e) {
                nu(I, _e);
              },
              cancel: function(_e) {
                Us(I);
              }
            },
            // $FlowFixMe size() methods are not allowed on byte streams.
            {
              highWaterMark: 0
            }
          );
          ie.allReady = h, t(ie);
        }
        function k(ie) {
          h.catch(function() {
          }), n(ie);
        }
        var I = Ja(o, et(e ? e.identifierPrefix : void 0, e ? e.nonce : void 0, e ? e.bootstrapScriptContent : void 0, e ? e.bootstrapScripts : void 0, e ? e.bootstrapModules : void 0), Pt(e ? e.namespaceURI : void 0), e ? e.progressiveChunkSize : void 0, e ? e.onError : void 0, c, y, k, i);
        if (e && e.signal) {
          var H = e.signal, X = function() {
            Us(I, H.reason), H.removeEventListener("abort", X);
          };
          H.addEventListener("abort", X);
        }
        Bs(I);
      });
    }
    Hs.renderToReadableStream = ou, Hs.version = a;
  }()), Hs;
}
var sa, pu;
process.env.NODE_ENV === "production" ? (sa = Dc(), pu = Oc()) : (sa = Fc(), pu = jc());
sa.version;
var Mc = sa.renderToString;
sa.renderToStaticMarkup;
sa.renderToNodeStream;
sa.renderToStaticNodeStream;
pu.renderToReadableStream;
var mt = function() {
  return mt = Object.assign || function(a) {
    for (var u, x = 1, d = arguments.length; x < d; x++) {
      u = arguments[x];
      for (var _ in u) Object.prototype.hasOwnProperty.call(u, _) && (a[_] = u[_]);
    }
    return a;
  }, mt.apply(this, arguments);
};
function la(r, a, u) {
  if (u || arguments.length === 2) for (var x = 0, d = a.length, _; x < d; x++)
    (_ || !(x in a)) && (_ || (_ = Array.prototype.slice.call(a, 0, x)), _[x] = a[x]);
  return r.concat(_ || Array.prototype.slice.call(a));
}
function Lc(r) {
  var a = /* @__PURE__ */ Object.create(null);
  return function(u) {
    return a[u] === void 0 && (a[u] = r(u)), a[u];
  };
}
var Bc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Uc = /* @__PURE__ */ Lc(
  function(r) {
    return Bc.test(r) || r.charCodeAt(0) === 111 && r.charCodeAt(1) === 110 && r.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Su = ca();
const $r = /* @__PURE__ */ _c(Su);
var Nc = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Cr = "-ms-", Ki = "-moz-", ir = "-webkit-", tc = "comm", al = "rule", ku = "decl", Wc = "@import", Hc = "@namespace", nc = "@keyframes", Vc = "@layer", oc = Math.abs, Eu = String.fromCharCode, hu = Object.assign;
function Yc(r, a) {
  return Jr(r, 0) ^ 45 ? (((a << 2 ^ Jr(r, 0)) << 2 ^ Jr(r, 1)) << 2 ^ Jr(r, 2)) << 2 ^ Jr(r, 3) : 0;
}
function ac(r) {
  return r.trim();
}
function Kn(r, a) {
  return (r = a.exec(r)) ? r[0] : r;
}
function Be(r, a, u) {
  return r.replace(a, u);
}
function Zs(r, a, u) {
  return r.indexOf(a, u);
}
function Jr(r, a) {
  return r.charCodeAt(a) | 0;
}
function ua(r, a, u) {
  return r.slice(a, u);
}
function Cn(r) {
  return r.length;
}
function ic(r) {
  return r.length;
}
function Ji(r, a) {
  return a.push(r), r;
}
function Gc(r, a) {
  return r.map(a).join("");
}
function Lu(r, a) {
  return r.filter(function(u) {
    return !Kn(u, a);
  });
}
var il = 1, ti = 1, sc = 0, dn = 0, Wr = 0, si = "";
function sl(r, a, u, x, d, _, N, V) {
  return { value: r, root: a, parent: u, type: x, props: d, children: _, line: il, column: ti, length: N, return: "", siblings: V };
}
function ko(r, a) {
  return hu(sl("", null, null, "", null, null, 0, r.siblings), r, { length: -r.length }, a);
}
function ri(r) {
  for (; r.root; )
    r = ko(r.root, { children: [r] });
  Ji(r, r.siblings);
}
function Xc() {
  return Wr;
}
function Zc() {
  return Wr = dn > 0 ? Jr(si, --dn) : 0, ti--, Wr === 10 && (ti = 1, il--), Wr;
}
function Tn() {
  return Wr = dn < sc ? Jr(si, dn++) : 0, ti++, Wr === 10 && (ti = 1, il++), Wr;
}
function Co() {
  return Jr(si, dn);
}
function Js() {
  return dn;
}
function ll(r, a) {
  return ua(si, r, a);
}
function es(r) {
  switch (r) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Jc(r) {
  return il = ti = 1, sc = Cn(si = r), dn = 0, [];
}
function Qc(r) {
  return si = "", r;
}
function iu(r) {
  return ac(ll(dn - 1, mu(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function Kc(r) {
  for (; (Wr = Co()) && Wr < 33; )
    Tn();
  return es(r) > 2 || es(Wr) > 3 ? "" : " ";
}
function qc(r, a) {
  for (; --a && Tn() && !(Wr < 48 || Wr > 102 || Wr > 57 && Wr < 65 || Wr > 70 && Wr < 97); )
    ;
  return ll(r, Js() + (a < 6 && Co() == 32 && Tn() == 32));
}
function mu(r) {
  for (; Tn(); )
    switch (Wr) {
      case r:
        return dn;
      case 34:
      case 39:
        r !== 34 && r !== 39 && mu(Wr);
        break;
      case 40:
        r === 41 && mu(r);
        break;
      case 92:
        Tn();
        break;
    }
  return dn;
}
function ed(r, a) {
  for (; Tn() && r + Wr !== 57; )
    if (r + Wr === 84 && Co() === 47)
      break;
  return "/*" + ll(a, dn - 1) + "*" + Eu(r === 47 ? r : Tn());
}
function rd(r) {
  for (; !es(Co()); )
    Tn();
  return ll(r, dn);
}
function td(r) {
  return Qc(Qs("", null, null, null, [""], r = Jc(r), 0, [0], r));
}
function Qs(r, a, u, x, d, _, N, V, E) {
  for (var R = 0, te = 0, O = N, se = 0, B = 0, K = 0, be = 1, Z = 1, L = 1, de = 0, Pe = "", ee = d, ne = _, re = x, G = Pe; Z; )
    switch (K = de, de = Tn()) {
      case 40:
        if (K != 108 && Jr(G, O - 1) == 58) {
          Zs(G += Be(iu(de), "&", "&\f"), "&\f", oc(R ? V[R - 1] : 0)) != -1 && (L = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        G += iu(de);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        G += Kc(K);
        break;
      case 92:
        G += qc(Js() - 1, 7);
        continue;
      case 47:
        switch (Co()) {
          case 42:
          case 47:
            Ji(nd(ed(Tn(), Js()), a, u, E), E), (es(K || 1) == 5 || es(Co() || 1) == 5) && Cn(G) && ua(G, -1, void 0) !== " " && (G += " ");
            break;
          default:
            G += "/";
        }
        break;
      case 123 * be:
        V[R++] = Cn(G) * L;
      case 125 * be:
      case 59:
      case 0:
        switch (de) {
          case 0:
          case 125:
            Z = 0;
          case 59 + te:
            L == -1 && (G = Be(G, /\f/g, "")), B > 0 && (Cn(G) - O || be === 0 && K === 47) && Ji(B > 32 ? Uu(G + ";", x, u, O - 1, E) : Uu(Be(G, " ", "") + ";", x, u, O - 2, E), E);
            break;
          case 59:
            G += ";";
          default:
            if (Ji(re = Bu(G, a, u, R, te, d, V, Pe, ee = [], ne = [], O, _), _), de === 123)
              if (te === 0)
                Qs(G, a, re, re, ee, _, O, V, ne);
              else {
                switch (se) {
                  case 99:
                    if (Jr(G, 3) === 110) break;
                  case 108:
                    if (Jr(G, 2) === 97) break;
                  default:
                    te = 0;
                  case 100:
                  case 109:
                  case 115:
                }
                te ? Qs(r, re, re, x && Ji(Bu(r, re, re, 0, 0, d, V, Pe, d, ee = [], O, ne), ne), d, ne, O, V, x ? ee : ne) : Qs(G, re, re, re, [""], ne, 0, V, ne);
              }
        }
        R = te = B = 0, be = L = 1, Pe = G = "", O = N;
        break;
      case 58:
        O = 1 + Cn(G), B = K;
      default:
        if (be < 1) {
          if (de == 123)
            --be;
          else if (de == 125 && be++ == 0 && Zc() == 125)
            continue;
        }
        switch (G += Eu(de), de * be) {
          case 38:
            L = te > 0 ? 1 : (G += "\f", -1);
            break;
          case 44:
            V[R++] = (Cn(G) - 1) * L, L = 1;
            break;
          case 64:
            Co() === 45 && (G += iu(Tn())), se = Co(), te = O = Cn(Pe = G += rd(Js())), de++;
            break;
          case 45:
            K === 45 && Cn(G) == 2 && (be = 0);
        }
    }
  return _;
}
function Bu(r, a, u, x, d, _, N, V, E, R, te, O) {
  for (var se = d - 1, B = d === 0 ? _ : [""], K = ic(B), be = 0, Z = 0, L = 0; be < x; ++be)
    for (var de = 0, Pe = ua(r, se + 1, se = oc(Z = N[be])), ee = r; de < K; ++de)
      (ee = ac(Z > 0 ? B[de] + " " + Pe : Be(Pe, /&\f/g, B[de]))) && (E[L++] = ee);
  return sl(r, a, u, d === 0 ? al : V, E, R, te, O);
}
function nd(r, a, u, x) {
  return sl(r, a, u, tc, Eu(Xc()), ua(r, 2, -2), 0, x);
}
function Uu(r, a, u, x, d) {
  return sl(r, a, u, ku, ua(r, 0, x), ua(r, x + 1, -1), x, d);
}
function lc(r, a, u) {
  switch (Yc(r, a)) {
    case 5103:
      return ir + "print-" + r + r;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
      return ir + r + r;
    case 4855:
      return ir + r.replace("add", "source-over").replace("substract", "source-out").replace("intersect", "source-in").replace("exclude", "xor") + r;
    case 4789:
      return Ki + r + r;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ir + r + Ki + r + Cr + r + r;
    case 5936:
      switch (Jr(r, a + 11)) {
        case 114:
          return ir + r + Cr + Be(r, /[svh]\w+-[tblr]{2}/, "tb") + r;
        case 108:
          return ir + r + Cr + Be(r, /[svh]\w+-[tblr]{2}/, "tb-rl") + r;
        case 45:
          return ir + r + Cr + Be(r, /[svh]\w+-[tblr]{2}/, "lr") + r;
      }
    case 6828:
    case 4268:
    case 2903:
      return ir + r + Cr + r + r;
    case 6165:
      return ir + r + Cr + "flex-" + r + r;
    case 5187:
      return ir + r + Be(r, /(\w+).+(:[^]+)/, ir + "box-$1$2" + Cr + "flex-$1$2") + r;
    case 5443:
      return ir + r + Cr + "flex-item-" + Be(r, /flex-|-self/g, "") + (Kn(r, /flex-|baseline/) ? "" : Cr + "grid-row-" + Be(r, /flex-|-self/g, "")) + r;
    case 4675:
      return ir + r + Cr + "flex-line-pack" + Be(r, /align-content|flex-|-self/g, "") + r;
    case 5548:
      return ir + r + Cr + Be(r, "shrink", "negative") + r;
    case 5292:
      return ir + r + Cr + Be(r, "basis", "preferred-size") + r;
    case 6060:
      return ir + "box-" + Be(r, "-grow", "") + ir + r + Cr + Be(r, "grow", "positive") + r;
    case 4554:
      return ir + Be(r, /([^-])(transform)/g, "$1" + ir + "$2") + r;
    case 6187:
      return Be(Be(Be(r, /(zoom-|grab)/, ir + "$1"), /(image-set)/, ir + "$1"), r, "") + r;
    case 5495:
    case 3959:
      return Be(r, /(image-set\([^]*)/, ir + "$1$`$1");
    case 4968:
      return Be(Be(r, /(.+:)(flex-)?(.*)/, ir + "box-pack:$3" + Cr + "flex-pack:$3"), /space-between/, "justify") + ir + r + r;
    case 4200:
      if (!Kn(r, /flex-|baseline/)) return Cr + "grid-column-align" + ua(r, a) + r;
      break;
    case 2592:
    case 3360:
      return Cr + Be(r, "template-", "") + r;
    case 4384:
    case 3616:
      return u && u.some(function(x, d) {
        return a = d, Kn(x.props, /grid-\w+-end/);
      }) ? ~Zs(r + (u = u[a].value), "span", 0) ? r : Cr + Be(r, "-start", "") + r + Cr + "grid-row-span:" + (~Zs(u, "span", 0) ? Kn(u, /\d+/) : +Kn(u, /\d+/) - +Kn(r, /\d+/)) + ";" : Cr + Be(r, "-start", "") + r;
    case 4896:
    case 4128:
      return u && u.some(function(x) {
        return Kn(x.props, /grid-\w+-start/);
      }) ? r : Cr + Be(Be(r, "-end", "-span"), "span ", "") + r;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Be(r, /(.+)-inline(.+)/, ir + "$1$2") + r;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Cn(r) - 1 - a > 6)
        switch (Jr(r, a + 1)) {
          case 109:
            if (Jr(r, a + 4) !== 45)
              break;
          case 102:
            return Be(r, /(.+:)(.+)-([^]+)/, "$1" + ir + "$2-$3$1" + Ki + (Jr(r, a + 3) == 108 ? "$3" : "$2-$3")) + r;
          case 115:
            return ~Zs(r, "stretch", 0) ? lc(Be(r, "stretch", "fill-available"), a, u) + r : r;
        }
      break;
    case 5152:
    case 5920:
      return Be(r, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(x, d, _, N, V, E, R) {
        return Cr + d + ":" + _ + R + (N ? Cr + d + "-span:" + (V ? E : +E - +_) + R : "") + r;
      });
    case 4949:
      if (Jr(r, a + 6) === 121)
        return Be(r, ":", ":" + ir) + r;
      break;
    case 6444:
      switch (Jr(r, Jr(r, 14) === 45 ? 18 : 11)) {
        case 120:
          return Be(r, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ir + (Jr(r, 14) === 45 ? "inline-" : "") + "box$3$1" + ir + "$2$3$1" + Cr + "$2box$3") + r;
        case 100:
          return Be(r, ":", ":" + Cr) + r;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return Be(r, "scroll-", "scroll-snap-") + r;
  }
  return r;
}
function el(r, a) {
  for (var u = "", x = 0; x < r.length; x++)
    u += a(r[x], x, r, a) || "";
  return u;
}
function od(r, a, u, x) {
  switch (r.type) {
    case Vc:
      if (r.children.length) break;
    case Wc:
    case Hc:
    case ku:
      return r.return = r.return || r.value;
    case tc:
      return "";
    case nc:
      return r.return = r.value + "{" + el(r.children, x) + "}";
    case al:
      if (!Cn(r.value = r.props.join(","))) return "";
  }
  return Cn(u = el(r.children, x)) ? r.return = r.value + "{" + u + "}" : "";
}
function ad(r) {
  var a = ic(r);
  return function(u, x, d, _) {
    for (var N = "", V = 0; V < a; V++)
      N += r[V](u, x, d, _) || "";
    return N;
  };
}
function id(r) {
  return function(a) {
    a.root || (a = a.return) && r(a);
  };
}
function sd(r, a, u, x) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case ku:
        r.return = lc(r.value, r.length, u);
        return;
      case nc:
        return el([ko(r, { value: Be(r.value, "@", "@" + ir) })], x);
      case al:
        if (r.length)
          return Gc(u = r.props, function(d) {
            switch (Kn(d, x = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                ri(ko(r, { props: [Be(d, /:(read-\w+)/, ":" + Ki + "$1")] })), ri(ko(r, { props: [d] })), hu(r, { props: Lu(u, x) });
                break;
              case "::placeholder":
                ri(ko(r, { props: [Be(d, /:(plac\w+)/, ":" + ir + "input-$1")] })), ri(ko(r, { props: [Be(d, /:(plac\w+)/, ":" + Ki + "$1")] })), ri(ko(r, { props: [Be(d, /:(plac\w+)/, Cr + "input-$1")] })), ri(ko(r, { props: [d] })), hu(r, { props: Lu(u, x) });
                break;
            }
            return "";
          });
    }
}
var ro = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", uc = "active", rl = "data-styled-version", ni = "6.3.12", Cu = `/*!sc*/
`, qi = typeof window < "u" && typeof document < "u", ld = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), ud = {}, cd = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function dd() {
  for (var r = [], a = 0; a < arguments.length; a++) r[a] = arguments[a];
  for (var u = r[0], x = [], d = 1, _ = r.length; d < _; d += 1) x.push(r[d]);
  return x.forEach(function(N) {
    u = u.replace(/%[a-z]/, N);
  }), u;
}
function eo(r) {
  for (var a = [], u = 1; u < arguments.length; u++) a[u - 1] = arguments[u];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r, " for more information.").concat(a.length > 0 ? " Args: ".concat(a.join(", ")) : "")) : new Error(dd.apply(void 0, la([cd[r]], a, !1)).trim());
}
var fd = 1 << 30, Ks = /* @__PURE__ */ new Map(), tl = /* @__PURE__ */ new Map(), qs = 1, Qi = function(r) {
  if (Ks.has(r)) return Ks.get(r);
  for (; tl.has(qs); ) qs++;
  var a = qs++;
  if (process.env.NODE_ENV !== "production" && ((0 | a) < 0 || a > fd)) throw eo(16, "".concat(a));
  return Ks.set(r, a), tl.set(a, r), a;
}, pd = function(r, a) {
  qs = a + 1, Ks.set(r, a), tl.set(a, r);
}, Nu = /invalid hook call/i, Vs = /* @__PURE__ */ new Set(), cc = function(r, a) {
  if (process.env.NODE_ENV !== "production") {
    var u = a ? ' with the id of "'.concat(a, '"') : "", x = "The component ".concat(r).concat(u, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, d = console.error;
    try {
      var _ = !0;
      console.error = function(N) {
        for (var V = [], E = 1; E < arguments.length; E++) V[E - 1] = arguments[E];
        Nu.test(N) ? (_ = !1, Vs.delete(x)) : d.apply(void 0, la([N], V, !1));
      }, typeof $r.useState == "function" && $r.useState(null), _ && !Vs.has(x) && (console.warn(x), Vs.add(x));
    } catch (N) {
      Nu.test(N.message) && Vs.delete(x);
    } finally {
      console.error = d;
    }
  }
}, Tu = Object.freeze([]), oi = Object.freeze({});
function dc(r, a, u) {
  return u === void 0 && (u = oi), r.theme !== u.theme && r.theme || a || u.theme;
}
var vu = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "blockquote", "body", "button", "br", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "menu", "meter", "nav", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "slot", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use"]), hd = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, md = /(^-|-$)/g;
function Wu(r) {
  return r.replace(hd, "-").replace(md, "");
}
var vd = /(a)(d)/gi, Hu = function(r) {
  return String.fromCharCode(r + (r > 25 ? 39 : 97));
};
function gu(r) {
  var a, u = "";
  for (a = Math.abs(r); a > 52; a = a / 52 | 0) u = Hu(a % 52) + u;
  return (Hu(a % 52) + u).replace(vd, "$1-$2");
}
var su, Eo = function(r, a) {
  for (var u = a.length; u; ) r = 33 * r ^ a.charCodeAt(--u);
  return r;
}, fc = function(r) {
  return Eo(5381, r);
};
function pc(r) {
  return gu(fc(r) >>> 0);
}
function hc(r) {
  return process.env.NODE_ENV !== "production" && typeof r == "string" && r || r.displayName || r.name || "Component";
}
function lu(r) {
  return typeof r == "string" && (process.env.NODE_ENV === "production" || r.charAt(0) === r.charAt(0).toLowerCase());
}
var mc = typeof Symbol == "function" && Symbol.for, vc = mc ? Symbol.for("react.memo") : 60115, gd = mc ? Symbol.for("react.forward_ref") : 60112, yd = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, bd = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, gc = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, xd = ((su = {})[gd] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, su[vc] = gc, su);
function Vu(r) {
  return ("type" in (a = r) && a.type.$$typeof) === vc ? gc : "$$typeof" in r ? xd[r.$$typeof] : yd;
  var a;
}
var wd = Object.defineProperty, Sd = Object.getOwnPropertyNames, Yu = Object.getOwnPropertySymbols, kd = Object.getOwnPropertyDescriptor, Ed = Object.getPrototypeOf, Gu = Object.prototype;
function yc(r, a, u) {
  if (typeof a != "string") {
    if (Gu) {
      var x = Ed(a);
      x && x !== Gu && yc(r, x, u);
    }
    var d = Sd(a);
    Yu && (d = d.concat(Yu(a)));
    for (var _ = Vu(r), N = Vu(a), V = 0; V < d.length; ++V) {
      var E = d[V];
      if (!(E in bd || u && u[E] || N && E in N || _ && E in _)) {
        var R = kd(a, E);
        try {
          wd(r, E, R);
        } catch {
        }
      }
    }
  }
  return r;
}
function ai(r) {
  return typeof r == "function";
}
function Ru(r) {
  return typeof r == "object" && "styledComponentId" in r;
}
function ia(r, a) {
  return r && a ? "".concat(r, " ").concat(a) : r || a || "";
}
function nl(r, a) {
  return r.join(a || "");
}
function ii(r) {
  return r !== null && typeof r == "object" && r.constructor.name === Object.name && !("props" in r && r.$$typeof);
}
function yu(r, a, u) {
  if (u === void 0 && (u = !1), !u && !ii(r) && !Array.isArray(r)) return a;
  if (Array.isArray(a)) for (var x = 0; x < a.length; x++) r[x] = yu(r[x], a[x]);
  else if (ii(a)) for (var x in a) r[x] = yu(r[x], a[x]);
  return r;
}
function bc(r, a) {
  Object.defineProperty(r, "toString", { value: a });
}
var Cd = function() {
  function r(a) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = a, this._cGroup = 0, this._cIndex = 0;
  }
  return r.prototype.indexOfGroup = function(a) {
    if (a === this._cGroup) return this._cIndex;
    var u = this._cIndex;
    if (a > this._cGroup) for (var x = this._cGroup; x < a; x++) u += this.groupSizes[x];
    else for (x = this._cGroup - 1; x >= a; x--) u -= this.groupSizes[x];
    return this._cGroup = a, this._cIndex = u, u;
  }, r.prototype.insertRules = function(a, u) {
    if (a >= this.groupSizes.length) {
      for (var x = this.groupSizes, d = x.length, _ = d; a >= _; ) if ((_ <<= 1) < 0) throw eo(16, "".concat(a));
      this.groupSizes = new Uint32Array(_), this.groupSizes.set(x), this.length = _;
      for (var N = d; N < _; N++) this.groupSizes[N] = 0;
    }
    for (var V = this.indexOfGroup(a + 1), E = 0, R = (N = 0, u.length); N < R; N++) this.tag.insertRule(V, u[N]) && (this.groupSizes[a]++, V++, E++);
    E > 0 && this._cGroup > a && (this._cIndex += E);
  }, r.prototype.clearGroup = function(a) {
    if (a < this.length) {
      var u = this.groupSizes[a], x = this.indexOfGroup(a), d = x + u;
      this.groupSizes[a] = 0;
      for (var _ = x; _ < d; _++) this.tag.deleteRule(x);
      u > 0 && this._cGroup > a && (this._cIndex -= u);
    }
  }, r.prototype.getGroup = function(a) {
    var u = "";
    if (a >= this.length || this.groupSizes[a] === 0) return u;
    for (var x = this.groupSizes[a], d = this.indexOfGroup(a), _ = d + x, N = d; N < _; N++) u += this.tag.getRule(N) + Cu;
    return u;
  }, r;
}(), Td = "style[".concat(ro, "][").concat(rl, '="').concat(ni, '"]'), Rd = new RegExp("^".concat(ro, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Xu = function(r) {
  return typeof ShadowRoot < "u" && r instanceof ShadowRoot || "host" in r && r.nodeType === 11;
}, bu = function(r) {
  if (!r) return document;
  if (Xu(r)) return r;
  if ("getRootNode" in r) {
    var a = r.getRootNode();
    if (Xu(a)) return a;
  }
  return document;
}, $d = function(r, a, u) {
  for (var x, d = u.split(","), _ = 0, N = d.length; _ < N; _++) (x = d[_]) && r.registerName(a, x);
}, _d = function(r, a) {
  for (var u, x = ((u = a.textContent) !== null && u !== void 0 ? u : "").split(Cu), d = [], _ = 0, N = x.length; _ < N; _++) {
    var V = x[_].trim();
    if (V) {
      var E = V.match(Rd);
      if (E) {
        var R = 0 | parseInt(E[1], 10), te = E[2];
        R !== 0 && (pd(te, R), $d(r, te, E[3]), r.getTag().insertRules(R, d)), d.length = 0;
      } else d.push(V);
    }
  }
}, uu = function(r) {
  for (var a = bu(r.options.target).querySelectorAll(Td), u = 0, x = a.length; u < x; u++) {
    var d = a[u];
    d && d.getAttribute(ro) !== uc && (_d(r, d), d.parentNode && d.parentNode.removeChild(d));
  }
};
function xu() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var xc = function(r) {
  var a = document.head, u = r || a, x = document.createElement("style"), d = function(V) {
    var E = Array.from(V.querySelectorAll("style[".concat(ro, "]")));
    return E[E.length - 1];
  }(u), _ = d !== void 0 ? d.nextSibling : null;
  x.setAttribute(ro, uc), x.setAttribute(rl, ni);
  var N = xu();
  return N && x.setAttribute("nonce", N), u.insertBefore(x, _), x;
}, Pd = function() {
  function r(a) {
    this.element = xc(a), this.element.appendChild(document.createTextNode("")), this.sheet = function(u) {
      var x;
      if (u.sheet) return u.sheet;
      for (var d = (x = u.getRootNode().styleSheets) !== null && x !== void 0 ? x : document.styleSheets, _ = 0, N = d.length; _ < N; _++) {
        var V = d[_];
        if (V.ownerNode === u) return V;
      }
      throw eo(17);
    }(this.element), this.length = 0;
  }
  return r.prototype.insertRule = function(a, u) {
    try {
      return this.sheet.insertRule(u, a), this.length++, !0;
    } catch {
      return !1;
    }
  }, r.prototype.deleteRule = function(a) {
    this.sheet.deleteRule(a), this.length--;
  }, r.prototype.getRule = function(a) {
    var u = this.sheet.cssRules[a];
    return u && u.cssText ? u.cssText : "";
  }, r;
}(), Id = function() {
  function r(a) {
    this.element = xc(a), this.nodes = this.element.childNodes, this.length = 0;
  }
  return r.prototype.insertRule = function(a, u) {
    if (a <= this.length && a >= 0) {
      var x = document.createTextNode(u);
      return this.element.insertBefore(x, this.nodes[a] || null), this.length++, !0;
    }
    return !1;
  }, r.prototype.deleteRule = function(a) {
    this.element.removeChild(this.nodes[a]), this.length--;
  }, r.prototype.getRule = function(a) {
    return a < this.length ? this.nodes[a].textContent : "";
  }, r;
}(), zd = function() {
  function r(a) {
    this.rules = [], this.length = 0;
  }
  return r.prototype.insertRule = function(a, u) {
    return a <= this.length && (a === this.length ? this.rules.push(u) : this.rules.splice(a, 0, u), this.length++, !0);
  }, r.prototype.deleteRule = function(a) {
    this.rules.splice(a, 1), this.length--;
  }, r.prototype.getRule = function(a) {
    return a < this.length ? this.rules[a] : "";
  }, r;
}(), Zu = qi, Ad = { isServer: !qi, useCSSOMInjection: !ld }, rs = function() {
  function r(a, u, x) {
    a === void 0 && (a = oi), u === void 0 && (u = {});
    var d = this;
    this.options = mt(mt({}, Ad), a), this.gs = u, this.names = new Map(x), this.server = !!a.isServer, !this.server && qi && Zu && (Zu = !1, uu(this)), bc(this, function() {
      return function(_) {
        for (var N = _.getTag(), V = N.length, E = "", R = function(O) {
          var se = function(L) {
            return tl.get(L);
          }(O);
          if (se === void 0) return "continue";
          var B = _.names.get(se);
          if (B === void 0 || !B.size) return "continue";
          var K = N.getGroup(O);
          if (K.length === 0) return "continue";
          var be = ro + ".g" + O + '[id="' + se + '"]', Z = "";
          B.forEach(function(L) {
            L.length > 0 && (Z += L + ",");
          }), E += K + be + '{content:"' + Z + '"}' + Cu;
        }, te = 0; te < V; te++) R(te);
        return E;
      }(d);
    });
  }
  return r.registerId = function(a) {
    return Qi(a);
  }, r.prototype.rehydrate = function() {
    !this.server && qi && uu(this);
  }, r.prototype.reconstructWithOptions = function(a, u) {
    u === void 0 && (u = !0);
    var x = new r(mt(mt({}, this.options), a), this.gs, u && this.names || void 0);
    return !this.server && qi && a.target !== this.options.target && bu(this.options.target) !== bu(a.target) && uu(x), x;
  }, r.prototype.allocateGSInstance = function(a) {
    return this.gs[a] = (this.gs[a] || 0) + 1;
  }, r.prototype.getTag = function() {
    return this.tag || (this.tag = (a = function(u) {
      var x = u.useCSSOMInjection, d = u.target;
      return u.isServer ? new zd(d) : x ? new Pd(d) : new Id(d);
    }(this.options), new Cd(a)));
    var a;
  }, r.prototype.hasNameForId = function(a, u) {
    var x, d;
    return (d = (x = this.names.get(a)) === null || x === void 0 ? void 0 : x.has(u)) !== null && d !== void 0 && d;
  }, r.prototype.registerName = function(a, u) {
    Qi(a);
    var x = this.names.get(a);
    x ? x.add(u) : this.names.set(a, /* @__PURE__ */ new Set([u]));
  }, r.prototype.insertRules = function(a, u, x) {
    this.registerName(a, u), this.getTag().insertRules(Qi(a), x);
  }, r.prototype.clearNames = function(a) {
    this.names.has(a) && this.names.get(a).clear();
  }, r.prototype.clearRules = function(a) {
    this.getTag().clearGroup(Qi(a)), this.clearNames(a);
  }, r.prototype.clearTag = function() {
    this.tag = void 0;
  }, r;
}();
function Dd(r, a) {
  return a == null || typeof a == "boolean" || a === "" ? "" : typeof a != "number" || a === 0 || r in Nc || r.startsWith("--") ? String(a).trim() : "".concat(a, "px");
}
var Od = function(r) {
  return r >= "A" && r <= "Z";
};
function Ju(r) {
  for (var a = "", u = 0; u < r.length; u++) {
    var x = r[u];
    if (u === 1 && x === "-" && r[0] === "-") return r;
    Od(x) ? a += "-" + x.toLowerCase() : a += x;
  }
  return a.startsWith("ms-") ? "-" + a : a;
}
var Fd = Symbol.for("sc-keyframes");
function Qu(r) {
  return typeof r == "object" && r !== null && Fd in r;
}
var wc = function(r) {
  return r == null || r === !1 || r === "";
}, Sc = function(r) {
  var a = [];
  for (var u in r) {
    var x = r[u];
    r.hasOwnProperty(u) && !wc(x) && (Array.isArray(x) && x.isCss || ai(x) ? a.push("".concat(Ju(u), ":"), x, ";") : ii(x) ? a.push.apply(a, la(la(["".concat(u, " {")], Sc(x), !1), ["}"], !1)) : a.push("".concat(Ju(u), ": ").concat(Dd(u, x), ";")));
  }
  return a;
};
function To(r, a, u, x, d) {
  if (d === void 0 && (d = []), typeof r == "string") return r && d.push(r), d;
  if (wc(r)) return d;
  if (Ru(r)) return d.push(".".concat(r.styledComponentId)), d;
  if (ai(r)) {
    if (!ai(N = r) || N.prototype && N.prototype.isReactComponent || !a) return d.push(r), d;
    var _ = r(a);
    return process.env.NODE_ENV === "production" || typeof _ != "object" || Array.isArray(_) || Qu(_) || ii(_) || _ === null || console.error("".concat(hc(r), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), To(_, a, u, x, d);
  }
  var N;
  if (Qu(r)) return u ? (r.inject(u, x), d.push(r.getName(x))) : d.push(r), d;
  if (ii(r)) {
    for (var V = Sc(r), E = 0; E < V.length; E++) d.push(V[E]);
    return d;
  }
  if (!Array.isArray(r)) return d.push(r.toString()), d;
  for (E = 0; E < r.length; E++) To(r[E], a, u, x, d);
  return d;
}
function kc(r) {
  for (var a = 0; a < r.length; a += 1) {
    var u = r[a];
    if (ai(u) && !Ru(u)) return !1;
  }
  return !0;
}
var jd = fc(ni), Md = function() {
  function r(a, u, x) {
    this.rules = a, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (x === void 0 || x.isStatic) && kc(a), this.componentId = u, this.baseHash = Eo(jd, u), this.baseStyle = x, rs.registerId(u);
  }
  return r.prototype.generateAndInjectStyles = function(a, u, x) {
    var d = this.baseStyle ? this.baseStyle.generateAndInjectStyles(a, u, x).className : "";
    if (this.isStatic && !x.hash) if (this.staticRulesId && u.hasNameForId(this.componentId, this.staticRulesId)) d = ia(d, this.staticRulesId);
    else {
      var _ = nl(To(this.rules, a, u, x)), N = gu(Eo(this.baseHash, _) >>> 0);
      if (!u.hasNameForId(this.componentId, N)) {
        var V = x(_, ".".concat(N), void 0, this.componentId);
        u.insertRules(this.componentId, N, V);
      }
      d = ia(d, N), this.staticRulesId = N;
    }
    else {
      for (var E = Eo(this.baseHash, x.hash), R = "", te = 0; te < this.rules.length; te++) {
        var O = this.rules[te];
        if (typeof O == "string") R += O, process.env.NODE_ENV !== "production" && (E = Eo(E, O));
        else if (O) {
          var se = nl(To(O, a, u, x));
          E = Eo(Eo(E, String(te)), se), R += se;
        }
      }
      if (R) {
        var B = gu(E >>> 0);
        if (!u.hasNameForId(this.componentId, B)) {
          var K = x(R, ".".concat(B), void 0, this.componentId);
          u.insertRules(this.componentId, B, K);
        }
        d = ia(d, B);
      }
    }
    return { className: d, css: typeof window > "u" ? u.getTag().getGroup(Qi(this.componentId)) : "" };
  }, r;
}(), Ld = /&/g, qn = 47, aa = 42;
function Ku(r) {
  if (r.indexOf("}") === -1) return !1;
  for (var a = r.length, u = 0, x = 0, d = !1, _ = 0; _ < a; _++) {
    var N = r.charCodeAt(_);
    if (x !== 0 || d || N !== qn || r.charCodeAt(_ + 1) !== aa) if (d) N === aa && r.charCodeAt(_ + 1) === qn && (d = !1, _++);
    else if (N !== 34 && N !== 39 || _ !== 0 && r.charCodeAt(_ - 1) === 92) {
      if (x === 0) {
        if (N === 123) u++;
        else if (N === 125 && --u < 0) return !0;
      }
    } else x === 0 ? x = N : x === N && (x = 0);
    else d = !0, _++;
  }
  return u !== 0 || x !== 0;
}
function Ec(r, a) {
  return r.map(function(u) {
    return u.type === "rule" && (u.value = "".concat(a, " ").concat(u.value), u.value = u.value.replaceAll(",", ",".concat(a, " ")), u.props = u.props.map(function(x) {
      return "".concat(a, " ").concat(x);
    })), Array.isArray(u.children) && u.type !== "@keyframes" && (u.children = Ec(u.children, a)), u;
  });
}
function Cc(r) {
  var a, u, x, d = r === void 0 ? oi : r, _ = d.options, N = _ === void 0 ? oi : _, V = d.plugins, E = V === void 0 ? Tu : V, R = function(K, be, Z) {
    return Z.startsWith(u) && Z.endsWith(u) && Z.replaceAll(u, "").length > 0 ? ".".concat(a) : K;
  }, te = E.slice();
  te.push(function(K) {
    K.type === al && K.value.includes("&") && (x || (x = new RegExp("\\".concat(u, "\\b"), "g")), K.props[0] = K.props[0].replace(Ld, u).replace(x, R));
  }), N.prefix && te.push(sd), te.push(od);
  var O = [], se = ad(te.concat(id(function(K) {
    return O.push(K);
  }))), B = function(K, be, Z, L) {
    be === void 0 && (be = ""), Z === void 0 && (Z = ""), L === void 0 && (L = "&"), a = L, u = be, x = void 0;
    var de = function(ee) {
      if (!Ku(ee)) return ee;
      for (var ne = ee.length, re = "", G = 0, ue = 0, ge = 0, er = !1, Ce = 0; Ce < ne; Ce++) {
        var Ue = ee.charCodeAt(Ce);
        if (ge !== 0 || er || Ue !== qn || ee.charCodeAt(Ce + 1) !== aa) if (er) Ue === aa && ee.charCodeAt(Ce + 1) === qn && (er = !1, Ce++);
        else if (Ue !== 34 && Ue !== 39 || Ce !== 0 && ee.charCodeAt(Ce - 1) === 92) {
          if (ge === 0) if (Ue === 123) ue++;
          else if (Ue === 125) {
            if (--ue < 0) {
              for (var Ne = Ce + 1; Ne < ne; ) {
                var Ke = ee.charCodeAt(Ne);
                if (Ke === 59 || Ke === 10) break;
                Ne++;
              }
              Ne < ne && ee.charCodeAt(Ne) === 59 && Ne++, ue = 0, Ce = Ne - 1, G = Ne;
              continue;
            }
            ue === 0 && (re += ee.substring(G, Ce + 1), G = Ce + 1);
          } else Ue === 59 && ue === 0 && (re += ee.substring(G, Ce + 1), G = Ce + 1);
        } else ge === 0 ? ge = Ue : ge === Ue && (ge = 0);
        else er = !0, Ce++;
      }
      if (G < ne) {
        var tr = ee.substring(G);
        Ku(tr) || (re += tr);
      }
      return re;
    }(function(ee) {
      if (ee.indexOf("//") === -1) return ee;
      for (var ne = ee.length, re = [], G = 0, ue = 0, ge = 0, er = 0; ue < ne; ) {
        var Ce = ee.charCodeAt(ue);
        if (Ce !== 34 && Ce !== 39 || ue !== 0 && ee.charCodeAt(ue - 1) === 92) if (ge === 0) if (Ce === qn && ue + 1 < ne && ee.charCodeAt(ue + 1) === aa) {
          for (ue += 2; ue + 1 < ne && (ee.charCodeAt(ue) !== aa || ee.charCodeAt(ue + 1) !== qn); ) ue++;
          ue += 2;
        } else if (Ce === 40 && ue >= 3 && (32 | ee.charCodeAt(ue - 1)) == 108 && (32 | ee.charCodeAt(ue - 2)) == 114 && (32 | ee.charCodeAt(ue - 3)) == 117) er = 1, ue++;
        else if (er > 0) Ce === 41 ? er-- : Ce === 40 && er++, ue++;
        else if (Ce === aa && ue + 1 < ne && ee.charCodeAt(ue + 1) === qn) ue > G && re.push(ee.substring(G, ue)), G = ue += 2;
        else if (Ce === qn && ue + 1 < ne && ee.charCodeAt(ue + 1) === qn) {
          for (ue > G && re.push(ee.substring(G, ue)); ue < ne && ee.charCodeAt(ue) !== 10; ) ue++;
          G = ue;
        } else ue++;
        else ue++;
        else ge === 0 ? ge = Ce : ge === Ce && (ge = 0), ue++;
      }
      return G === 0 ? ee : (G < ne && re.push(ee.substring(G)), re.join(""));
    }(K)), Pe = td(Z || be ? "".concat(Z, " ").concat(be, " { ").concat(de, " }") : de);
    return N.namespace && (Pe = Ec(Pe, N.namespace)), O = [], el(Pe, se), O;
  };
  return B.hash = E.length ? E.reduce(function(K, be) {
    return be.name || eo(15), Eo(K, be.name);
  }, 5381).toString() : "", B;
}
var Bd = new rs(), Ud = Cc(), $u = $r.createContext({ shouldForwardProp: void 0, styleSheet: Bd, stylis: Ud });
$u.Consumer;
var Nd = $r.createContext(void 0);
function ol() {
  return $r.useContext($u);
}
function Wd(r) {
  if (!$r.useMemo) return r.children;
  var a = ol().styleSheet, u = $r.useMemo(function() {
    var _ = a;
    return r.sheet ? _ = r.sheet : r.target && (_ = _.reconstructWithOptions({ target: r.target }, !1)), r.disableCSSOMInjection && (_ = _.reconstructWithOptions({ useCSSOMInjection: !1 })), _;
  }, [r.disableCSSOMInjection, r.sheet, r.target, a]), x = $r.useMemo(function() {
    return Cc({ options: { namespace: r.namespace, prefix: r.enableVendorPrefixes }, plugins: r.stylisPlugins });
  }, [r.enableVendorPrefixes, r.namespace, r.stylisPlugins]), d = $r.useMemo(function() {
    return { shouldForwardProp: r.shouldForwardProp, styleSheet: u, stylis: x };
  }, [r.shouldForwardProp, u, x]);
  return $r.createElement($u.Provider, { value: d }, $r.createElement(Nd.Provider, { value: x }, r.children));
}
var _u = $r.createContext(void 0);
_u.Consumer;
var cu = {}, qu = /* @__PURE__ */ new Set();
function Hd(r, a, u) {
  var x = Ru(r), d = r, _ = !lu(r), N = a.attrs, V = N === void 0 ? Tu : N, E = a.componentId, R = E === void 0 ? function(ee, ne) {
    var re = typeof ee != "string" ? "sc" : Wu(ee);
    cu[re] = (cu[re] || 0) + 1;
    var G = "".concat(re, "-").concat(pc(ni + re + cu[re]));
    return ne ? "".concat(ne, "-").concat(G) : G;
  }(a.displayName, a.parentComponentId) : E, te = a.displayName, O = te === void 0 ? function(ee) {
    return lu(ee) ? "styled.".concat(ee) : "Styled(".concat(hc(ee), ")");
  }(r) : te, se = a.displayName && a.componentId ? "".concat(Wu(a.displayName), "-").concat(a.componentId) : a.componentId || R, B = x && d.attrs ? d.attrs.concat(V).filter(Boolean) : V, K = a.shouldForwardProp;
  if (x && d.shouldForwardProp) {
    var be = d.shouldForwardProp;
    if (a.shouldForwardProp) {
      var Z = a.shouldForwardProp;
      K = function(ee, ne) {
        return be(ee, ne) && Z(ee, ne);
      };
    } else K = be;
  }
  var L = new Md(u, se, x ? d.componentStyle : void 0);
  function de(ee, ne) {
    return function(re, G, ue) {
      var ge = re.attrs, er = re.componentStyle, Ce = re.defaultProps, Ue = re.foldedComponentIds, Ne = re.styledComponentId, Ke = re.target, tr = $r.useContext(_u), _r = ol(), fe = re.shouldForwardProp || _r.shouldForwardProp;
      process.env.NODE_ENV !== "production" && $r.useDebugValue && $r.useDebugValue(Ne);
      var fr = dc(G, tr, Ce) || oi, Ge = function(ye, Ie, Ae) {
        for (var we, Fe = mt(mt({}, Ie), { className: void 0, theme: Ae }), gr = 0; gr < ye.length; gr += 1) {
          var Mr = ai(we = ye[gr]) ? we(Fe) : we;
          for (var We in Mr) We === "className" ? Fe.className = ia(Fe.className, Mr[We]) : We === "style" ? Fe.style = mt(mt({}, Fe.style), Mr[We]) : We in Ie && Ie[We] === void 0 || (Fe[We] = Mr[We]);
        }
        return "className" in Ie && typeof Ie.className == "string" && (Fe.className = ia(Fe.className, Ie.className)), Fe;
      }(ge, G, fr), br = Ge.as || Ke, $ = {};
      for (var U in Ge) Ge[U] === void 0 || U[0] === "$" || U === "as" || U === "theme" && Ge.theme === fr || (U === "forwardedAs" ? $.as = Ge.forwardedAs : fe && !fe(U, br) || ($[U] = Ge[U], fe || process.env.NODE_ENV !== "development" || Uc(U) || qu.has(U) || !vu.has(br) || (qu.add(U), console.warn('styled-components: it looks like an unknown prop "'.concat(U, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Te = function(ye, Ie) {
        var Ae = ol(), we = ye.generateAndInjectStyles(Ie, Ae.styleSheet, Ae.stylis);
        return process.env.NODE_ENV !== "production" && $r.useDebugValue && $r.useDebugValue(we.className), we;
      }(er, Ge), ke = Te.className;
      process.env.NODE_ENV !== "production" && re.warnTooManyClasses && re.warnTooManyClasses(ke);
      var me = ia(Ue, Ne);
      return ke && (me += " " + ke), Ge.className && (me += " " + Ge.className), $[lu(br) && !vu.has(br) ? "class" : "className"] = me, ue && ($.ref = ue), Su.createElement(br, $);
    }(Pe, ee, ne);
  }
  de.displayName = O;
  var Pe = $r.forwardRef(de);
  return Pe.attrs = B, Pe.componentStyle = L, Pe.displayName = O, Pe.shouldForwardProp = K, Pe.foldedComponentIds = x ? ia(d.foldedComponentIds, d.styledComponentId) : "", Pe.styledComponentId = se, Pe.target = x ? d.target : r, Object.defineProperty(Pe, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(ee) {
    this._foldedDefaultProps = x ? function(ne) {
      for (var re = [], G = 1; G < arguments.length; G++) re[G - 1] = arguments[G];
      for (var ue = 0, ge = re; ue < ge.length; ue++) yu(ne, ge[ue], !0);
      return ne;
    }({}, d.defaultProps, ee) : ee;
  } }), process.env.NODE_ENV !== "production" && (cc(O, se), Pe.warnTooManyClasses = /* @__PURE__ */ function(ee, ne) {
    var re = {}, G = !1;
    return function(ue) {
      if (!G && (re[ue] = !0, Object.keys(re).length >= 200)) {
        var ge = ne ? ' with the id of "'.concat(ne, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(ee).concat(ge, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), G = !0, re = {};
      }
    };
  }(O, se)), bc(Pe, function() {
    return ".".concat(Pe.styledComponentId);
  }), _ && yc(Pe, r, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), Pe;
}
function ec(r, a) {
  for (var u = [r[0]], x = 0, d = a.length; x < d; x += 1) u.push(a[x], r[x + 1]);
  return u;
}
var rc = function(r) {
  return Object.assign(r, { isCss: !0 });
};
function Tc(r) {
  for (var a = [], u = 1; u < arguments.length; u++) a[u - 1] = arguments[u];
  if (ai(r) || ii(r)) return rc(To(ec(Tu, la([r], a, !0))));
  var x = r;
  return a.length === 0 && x.length === 1 && typeof x[0] == "string" ? To(x) : rc(To(ec(x, a)));
}
function wu(r, a, u) {
  if (u === void 0 && (u = oi), !a) throw eo(1, a);
  var x = function(d) {
    for (var _ = [], N = 1; N < arguments.length; N++) _[N - 1] = arguments[N];
    return r(a, u, Tc.apply(void 0, la([d], _, !1)));
  };
  return x.attrs = function(d) {
    return wu(r, a, mt(mt({}, u), { attrs: Array.prototype.concat(u.attrs, d).filter(Boolean) }));
  }, x.withConfig = function(d) {
    return wu(r, a, mt(mt({}, u), d));
  }, x;
}
var Rc = function(r) {
  return wu(Hd, r);
}, v = Rc;
vu.forEach(function(r) {
  v[r] = Rc(r);
});
var Vd = function() {
  function r(a, u) {
    this.rules = a, this.componentId = u, this.isStatic = kc(a), rs.registerId(this.componentId + 1);
  }
  return r.prototype.createStyles = function(a, u, x, d) {
    var _ = d(nl(To(this.rules, u, x, d)), ""), N = this.componentId + a;
    x.insertRules(N, N, _);
  }, r.prototype.removeStyles = function(a, u) {
    u.clearRules(this.componentId + a);
  }, r.prototype.renderStyles = function(a, u, x, d) {
    a > 2 && rs.registerId(this.componentId + a);
    var _ = this.componentId + a;
    this.isStatic ? x.hasNameForId(_, _) || this.createStyles(a, u, x, d) : (this.removeStyles(a, x), this.createStyles(a, u, x, d));
  }, r;
}();
function Yd(r) {
  for (var a = [], u = 1; u < arguments.length; u++) a[u - 1] = arguments[u];
  var x = Tc.apply(void 0, la([r], a, !1)), d = "sc-global-".concat(pc(JSON.stringify(x))), _ = new Vd(x, d);
  process.env.NODE_ENV !== "production" && cc(d);
  var N = /* @__PURE__ */ new WeakMap(), V = function(E) {
    var R = ol(), te = $r.useContext(_u), O = N.get(R.styleSheet);
    return O === void 0 && (O = R.styleSheet.allocateGSInstance(d), N.set(R.styleSheet, O)), process.env.NODE_ENV !== "production" && $r.Children.count(E.children) && console.warn("The global style component ".concat(d, " was given child JSX. createGlobalStyle does not render children.")), process.env.NODE_ENV !== "production" && x.some(function(se) {
      return typeof se == "string" && se.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), $r.useLayoutEffect(function() {
      return R.styleSheet.server || function(se, B, K, be, Z) {
        if (_.isStatic) _.renderStyles(se, ud, K, Z);
        else {
          var L = mt(mt({}, B), { theme: dc(B, be, V.defaultProps) });
          _.renderStyles(se, L, K, Z);
        }
      }(O, E, R.styleSheet, te, R.stylis), function() {
        _.removeStyles(O, R.styleSheet);
      };
    }, [O, E, R.styleSheet, te, R.stylis]), null;
  };
  return $r.memo(V);
}
var Gd = function() {
  function r() {
    var a = this;
    this._emitSheetCSS = function() {
      var u = a.instance.toString();
      if (!u) return "";
      var x = xu(), d = nl([x && 'nonce="'.concat(x, '"'), "".concat(ro, '="true"'), "".concat(rl, '="').concat(ni, '"')].filter(Boolean), " ");
      return "<style ".concat(d, ">").concat(u, "</style>");
    }, this.getStyleTags = function() {
      if (a.sealed) throw eo(2);
      return a._emitSheetCSS();
    }, this.getStyleElement = function() {
      var u;
      if (a.sealed) throw eo(2);
      var x = a.instance.toString();
      if (!x) return [];
      var d = ((u = {})[ro] = "", u[rl] = ni, u.dangerouslySetInnerHTML = { __html: x }, u), _ = xu();
      return _ && (d.nonce = _), [$r.createElement("style", mt({}, d, { key: "sc-0-0" }))];
    }, this.seal = function() {
      a.sealed = !0;
    }, this.instance = new rs({ isServer: !0 }), this.sealed = !1;
  }
  return r.prototype.collectStyles = function(a) {
    if (this.sealed) throw eo(2);
    return $r.createElement(Wd, { sheet: this.instance }, a);
  }, r.prototype.interleaveWithNodeStream = function(a) {
    throw eo(3);
  }, r;
}();
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Ys = "__sc-".concat(ro, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Ys] || (window[Ys] = 0), window[Ys] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page for more info.`), window[Ys] += 1);
Su.createContext({
  theme: "professional",
  setTheme: () => {
  }
});
Yd`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: var(--resume-font-sans);
    font-size: var(--resume-size-body);
    line-height: var(--resume-line-height-normal);
    color: var(--resume-color-primary);
    background: var(--resume-color-background);
  }
`;
const Xd = v.section`
  margin-bottom: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.spacing) == null ? void 0 : u.section) || "var(--resume-space-section, 2rem)";
}};

  @media print {
    page-break-inside: avoid;
  }
`;
function Fn({ children: r, className: a, id: u, ...x }) {
  return /* @__PURE__ */ oe.jsx(
    Xd,
    {
      id: u,
      className: `resume-section ${a || ""}`.trim(),
      ...x,
      children: r
    }
  );
}
const Zd = v.h2`
  font-size: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.typography) == null ? void 0 : u.heading) || "var(--resume-size-heading, 16pt)";
}};
  font-weight: 600;
  color: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.primary) || "var(--resume-color-primary, #000)";
}};
  margin: 0 0
    ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.spacing) == null ? void 0 : u.item) || "var(--resume-space-item, 1rem)";
}}
    0;
  padding-bottom: 4px;
  border-bottom: 2px solid
    ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.accent) || "var(--resume-color-accent, #0066cc)";
}};

  @media print {
    page-break-after: avoid;
  }
`, Jd = v.span`
  margin-right: 8px;
  font-size: 1.2em;
`;
function jn({
  children: r,
  icon: a,
  level: u = 2,
  className: x,
  ...d
}) {
  return /* @__PURE__ */ oe.jsxs(
    Zd,
    {
      as: `h${u}`,
      className: `resume-section-title ${x || ""}`.trim(),
      ...d,
      children: [
        a && /* @__PURE__ */ oe.jsx(Jd, { "aria-hidden": "true", className: "resume-icon", children: a }),
        r
      ]
    }
  );
}
const Qd = v.div`
  margin-bottom: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.spacing) == null ? void 0 : u.item) || "var(--resume-space-item, 1rem)";
}};

  @media print {
    page-break-inside: avoid;
  }
`, Kd = v.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 4px;
`, qd = v.div`
  font-weight: 600;
  color: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.primary) || "var(--resume-color-primary, #000)";
}};
  font-size: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.typography) == null ? void 0 : u.body) || "var(--resume-size-body, 11pt)";
}};
`, ef = v.div`
  color: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.secondary) || "var(--resume-color-secondary, #333)";
}};
  margin-bottom: 4px;
`, rf = v.div`
  display: flex;
  gap: 12px;
  font-size: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.typography) == null ? void 0 : u.small) || "var(--resume-size-small, 10pt)";
}};
  color: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.tertiary) || "var(--resume-color-tertiary, #666)";
}};
  margin-bottom: 8px;
`, tf = v.p`
  margin: 8px 0;
  line-height: 1.6;
`, nf = v.ul`
  margin: 8px 0;
  padding-left: 20px;
  list-style-type: disc;

  li {
    margin: 4px 0;
    line-height: 1.5;
  }
`;
function Xi({
  title: r,
  subtitle: a,
  dateRange: u,
  location: x,
  description: d,
  highlights: _ = [],
  className: N,
  ...V
}) {
  if (!r) return null;
  const E = [u, x].filter(Boolean);
  return /* @__PURE__ */ oe.jsxs(
    Qd,
    {
      className: `resume-item ${N || ""}`.trim(),
      ...V,
      children: [
        /* @__PURE__ */ oe.jsx(Kd, { className: "resume-item-header", children: /* @__PURE__ */ oe.jsx(qd, { className: "resume-item-title", children: r }) }),
        a && /* @__PURE__ */ oe.jsx(ef, { className: "resume-item-subtitle", children: a }),
        E.length > 0 && /* @__PURE__ */ oe.jsxs(rf, { className: "resume-item-meta", children: [
          u && /* @__PURE__ */ oe.jsx("span", { className: "resume-date", children: u }),
          u && x && /* @__PURE__ */ oe.jsx("span", { children: "•" }),
          x && /* @__PURE__ */ oe.jsx("span", { className: "resume-location", children: x })
        ] }),
        d && /* @__PURE__ */ oe.jsx(tf, { className: "resume-description", children: d }),
        _.length > 0 && /* @__PURE__ */ oe.jsx(nf, { className: "resume-highlights", children: _.map((R, te) => /* @__PURE__ */ oe.jsx("li", { children: R }, te)) })
      ]
    }
  );
}
function of({
  startDate: r,
  endDate: a,
  format: u = "short",
  locale: x = "en-US",
  numberingSystem: d,
  presentLabel: _
}) {
  if (!r) return "";
  const N = () => {
    if (_) return _;
    const te = {
      en: "Present",
      "en-US": "Present",
      "en-GB": "Present",
      fr: "Présent",
      "fr-FR": "Présent",
      es: "Presente",
      "es-ES": "Presente",
      de: "Heute",
      "de-DE": "Heute",
      it: "Presente",
      "it-IT": "Presente",
      pt: "Presente",
      "pt-BR": "Presente",
      ja: "現在",
      "ja-JP": "現在",
      zh: "至今",
      "zh-CN": "至今",
      "zh-TW": "至今",
      ko: "현재",
      "ko-KR": "현재",
      ar: "حاضر",
      "ar-SA": "حاضر"
    };
    return te[x] || te[x.split("-")[0]] || "Present";
  }, V = (te) => {
    if (!te) return N();
    const O = typeof te == "string" ? new Date(te) : te;
    if (isNaN(O.getTime())) return te;
    const B = {
      ...{
        short: { month: "short" },
        long: { month: "long" },
        numeric: { month: "2-digit" }
      }[u],
      year: "numeric"
    };
    return d && (B.numberingSystem = d), new Intl.DateTimeFormat(x, B).format(O);
  }, E = V(r), R = V(a);
  return `${E} - ${R}`;
}
const af = v.span`
  font-size: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.typography) == null ? void 0 : u.small) || "var(--resume-size-small, 10pt)";
}};
  color: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.tertiary) || "var(--resume-color-tertiary, #666)";
}};
  white-space: nowrap;
`;
function Gs({
  startDate: r,
  endDate: a,
  format: u = "short",
  locale: x = "en-US",
  numberingSystem: d,
  presentLabel: _,
  className: N,
  ...V
}) {
  const E = of({
    startDate: r,
    endDate: a,
    format: u,
    locale: x,
    numberingSystem: d,
    presentLabel: _
  });
  return E ? /* @__PURE__ */ oe.jsx(
    af,
    {
      className: `resume-date-range ${N || ""}`.trim(),
      ...V,
      children: E
    }
  ) : null;
}
const sf = v.span`
  display: inline-block;
  padding: ${(r) => r.$size === "sm" ? "2px 8px" : r.$size === "lg" ? "6px 16px" : "4px 12px"};
  border-radius: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.radius) == null ? void 0 : u.sm) || "var(--resume-radius-sm, 4px)";
}};
  font-size: ${(r) => r.$size === "sm" ? "9pt" : r.$size === "lg" ? "11pt" : "10pt"};
  font-weight: 500;
  background: ${(r) => {
  var a, u, x, d, _, N;
  return r.$variant === "accent" ? ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.accentLight) || "var(--resume-color-accent-light, #e6f2ff)" : r.$variant === "secondary" ? ((d = (x = r.theme) == null ? void 0 : x.colors) == null ? void 0 : d.muted) || "var(--resume-color-muted, #f5f5f5)" : ((N = (_ = r.theme) == null ? void 0 : _.colors) == null ? void 0 : N.muted) || "var(--resume-color-muted, #f5f5f5)";
}};
  color: ${(r) => {
  var a, u, x, d;
  return r.$variant === "accent" ? ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.accent) || "var(--resume-color-accent, #0066cc)" : ((d = (x = r.theme) == null ? void 0 : x.colors) == null ? void 0 : d.primary) || "var(--resume-color-primary, #000)";
}};

  @media print {
    background: ${(r) => r.$variant === "accent" ? "#e6f2ff" : "#f5f5f5"};
    color: ${(r) => r.$variant === "accent" ? "#0066cc" : "#000"};
  }
`;
function lf({
  children: r,
  variant: a = "default",
  size: u = "md",
  className: x,
  ...d
}) {
  return /* @__PURE__ */ oe.jsx(
    sf,
    {
      $variant: a,
      $size: u,
      className: `resume-badge resume-badge-${a} ${x || ""}`.trim(),
      ...d,
      children: r
    }
  );
}
const uf = v.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0;
`;
function du({
  children: r,
  items: a,
  variant: u = "default",
  size: x = "md",
  className: d,
  ..._
}) {
  const N = a ? a.map((V, E) => /* @__PURE__ */ oe.jsx(lf, { variant: u, size: x, children: V }, E)) : r;
  return /* @__PURE__ */ oe.jsx(
    uf,
    {
      className: `resume-badge-list ${d || ""}`.trim(),
      ..._,
      children: N
    }
  );
}
function oa(r) {
  if (!r || typeof r != "string")
    return null;
  const a = r.trim();
  return /^(javascript|data|vbscript|file|about):/i.test(a) ? (console.warn(`[Security] Blocked dangerous URL: ${a.slice(0, 50)}`), null) : /^(https?|mailto|tel|sms|ftp):/i.test(a) || a.startsWith("/") || a.startsWith(".") ? a : /^www\./i.test(a) ? `https://${a}` : /^[a-z0-9][a-z0-9.-]+\.[a-z]{2,}$/i.test(a) ? `https://${a}` : (console.warn(`[Security] Uncertain URL safety: ${a.slice(0, 50)}`), a);
}
function Xs(r, a = !1) {
  return !r || typeof r != "string" ? "" : a && /^https?:/i.test(r) ? "noopener noreferrer" : "";
}
v.div`
  display: flex;
  justify-content: center;
  gap: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.spacing) == null ? void 0 : u.small) || "var(--resume-space-small, 12px)";
}};
  flex-wrap: wrap;
  font-size: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.typography) == null ? void 0 : u.small) || "var(--resume-size-small, 10pt)";
}};
  color: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.text) || "var(--resume-color-text, #333)";
}};

  a {
    color: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.link) || "var(--resume-color-link, #0066cc)";
}};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
v.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;
v.span`
  color: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.muted) || "var(--resume-color-muted, #999)";
}};
`;
v.a`
  color: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.link) || "var(--resume-color-link, #0066cc)";
}};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.linkVisited) || "var(--resume-color-link-visited, #551a8b)";
}};
  }

  @media print {
    color: inherit;
    text-decoration: underline;
  }
`;
v.span`
  /* Thin space (U+2009) + pipe + thin space for balanced spacing */
  &::before {
    content: '\u2009|\u2009';
    opacity: 0.5;
    color: ${(r) => r.$color || "currentColor"};
    font-weight: normal;
  }

  /* Ensure consistent spacing across browsers */
  display: inline;
  white-space: pre;

  @media print {
    &::before {
      content: '\u2009|\u2009';
      opacity: 0.6;
    }
  }
`;
v.hr`
  border: none;
  border-top: 0.5pt solid
    ${(r) => {
  var a, u;
  return r.color || ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.border) || "var(--resume-color-border, #e5e7eb)";
}};
  margin-left: ${(r) => r.inset || "0"};
  margin-right: ${(r) => r.inset || "0"};
  margin-top: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.spacing) == null ? void 0 : u.tight) || "var(--resume-space-tight, 0.5rem)";
}};
  margin-bottom: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.spacing) == null ? void 0 : u.tight) || "var(--resume-space-tight, 0.5rem)";
}};

  @media print {
    /* Ensure minimum stroke weight for print visibility */
    border-top-width: 0.3pt;
    /* Prevent page breaks */
    page-break-inside: avoid;
    /* Ensure border renders in all print modes */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
v.hr`
  border: none;
  border-top: ${(r) => r.dotSize || "2px"} dotted
    ${(r) => {
  var a, u;
  return r.color || ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.border) || "var(--resume-color-border, #e5e7eb)";
}};
  margin-top: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.spacing) == null ? void 0 : u.tight) || "var(--resume-space-tight, 0.5rem)";
}};
  margin-bottom: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.spacing) == null ? void 0 : u.tight) || "var(--resume-space-tight, 0.5rem)";
}};

  /* Override default border-top-width to use fixed spacing */
  ${(r) => {
  var a, u;
  return r.spacing && `
    background-image: radial-gradient(
      circle,
      ${r.color || ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.border) || "var(--resume-color-border, #e5e7eb)"} ${r.dotSize || "2px"},
      transparent ${r.dotSize || "2px"}
    );
    background-size: ${r.spacing} 1px;
    background-repeat: repeat-x;
    background-position: center;
    border: none;
    height: 1px;
  `;
}}

  @media print {
    /* Ensure dots render in all print modes */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    /* Prevent page breaks */
    page-break-inside: avoid;
    /* Fixed dot rendering for PDF generation */
    border-top-width: ${(r) => r.dotSize || "2px"};
  }
`;
v.div`
  position: absolute;
  ${(r) => r.position === "right" ? "right: 0;" : "left: 0;"}
  top: ${(r) => r.top || "0"};
  width: ${(r) => r.width || "4mm"};
  max-width: 6mm; /* ATS-safe maximum */
  height: ${(r) => r.height || "100%"};
  background-color: ${(r) => {
  var a, u;
  return r.color || ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.accent) || "var(--resume-color-accent, #2563eb)";
}};
  pointer-events: none; /* Prevent interaction */

  @media print {
    /* Ensure color renders in print */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    /* Prevent page breaks inside stripe */
    page-break-inside: avoid;
  }

  @media screen and (max-width: 768px) {
    /* Reduce width on mobile */
    width: ${(r) => r.width ? `calc(${r.width} * 0.75)` : "3mm"};
  }
`;
v.div`
  width: ${(r) => r.width || "30%"};
  max-width: 40%; /* Design constraint: max 40% */
  min-width: 25%; /* Design constraint: min 25% */
  height: ${(r) => r.thickness || "2.5pt"};
  background-color: ${(r) => {
  var a, u;
  return r.color || ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.accent) || "var(--resume-color-accent, #2563eb)";
}};
  margin-bottom: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.spacing) == null ? void 0 : u.tight) || "var(--resume-space-tight, 0.5rem)";
}};
  margin-left: ${(r) => r.align === "center" || r.align === "right" ? "auto" : "0"};
  margin-right: ${(r) => r.align === "center" ? "auto" : r.align === "right" ? "0" : "auto"};

  @media print {
    /* Ensure color renders in print */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    /* Prevent page breaks */
    page-break-inside: avoid;
    /* Ensure minimum thickness for print visibility */
    min-height: 2pt;
  }

  @media screen and (max-width: 768px) {
    /* Increase width slightly on mobile for better visibility */
    width: ${(r) => r.width ? `calc(${r.width} * 1.2)` : "36%"};
  }
`;
v.div`
  display: flex;
  flex-direction: column;
  margin-top: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.spacing) == null ? void 0 : u.tight) || "var(--resume-space-tight, 0.5rem)";
}};
  margin-bottom: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.spacing) == null ? void 0 : u.tight) || "var(--resume-space-tight, 0.5rem)";
}};

  @media print {
    page-break-inside: avoid;
  }
`;
v.div`
  width: 100%;
  height: ${(r) => r.thickness || "0.4pt"};
  background-color: ${(r) => {
  var a, u;
  return r.color || ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.border) || "var(--resume-color-border, #e5e7eb)";
}};
  margin-bottom: ${(r) => r.gapSize};

  &:last-child {
    margin-bottom: 0;
  }

  @media print {
    /* Ensure minimum stroke weight for print visibility */
    min-height: 0.3pt;
    /* Ensure color renders in print */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
v.div`
  display: grid;
  grid-template-columns: ${(r) => r.$columns === 1 ? "1fr" : `repeat(${r.$columns}, 1fr)`};
  gap: ${(r) => r.$gap || "var(--resume-column-gap)"};
  margin-bottom: ${(r) => r.$spacing || "var(--resume-space-section)"};

  @media print {
    gap: ${(r) => r.$gap || "16px"};
    page-break-inside: avoid;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
v.div`
  display: grid;
  grid-template-columns: ${(r) => r.$sidebarPosition === "right" ? `1fr ${r.$sidebarWidth || "30%"}` : `${r.$sidebarWidth || "30%"} 1fr`};
  gap: ${(r) => r.$gap || "var(--resume-column-gap)"};

  @media print {
    gap: ${(r) => r.$gap || "16px"};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
v.aside`
  grid-area: ${(r) => r.$position === "right" ? "1 / 2" : "1 / 1"};

  @media (max-width: 768px) {
    grid-area: auto;
  }
`;
v.main`
  grid-area: ${(r) => r.$sidebarPosition === "right" ? "1 / 1" : "1 / 2"};

  @media (max-width: 768px) {
    grid-area: auto;
  }
`;
v.div`
  display: flex;
  flex-direction: column;
  gap: ${(r) => r.$spacing || "var(--resume-space-item)"};

  @media print {
    gap: ${(r) => r.$spacing || "12px"};
  }
`;
v.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${(r) => r.$minCardWidth || "250px"}, 1fr)
  );
  gap: ${(r) => r.$gap || "var(--resume-space-item)"};
  margin-bottom: ${(r) => r.$spacing || "var(--resume-space-section)"};

  @media print {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: ${(r) => r.$gap || "12px"};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
v.div`
  display: flex;
  flex-direction: ${(r) => r.$direction || "row"};
  justify-content: ${(r) => r.$justify || "flex-start"};
  align-items: ${(r) => r.$align || "stretch"};
  flex-wrap: ${(r) => r.$wrap ? "wrap" : "nowrap"};
  gap: ${(r) => r.$gap || "var(--resume-space-tight)"};

  @media print {
    gap: ${(r) => r.$gap || "8px"};
  }

  @media (max-width: 768px) {
    flex-direction: ${(r) => r.$responsiveDirection || r.$direction === "row" ? "column" : r.$direction};
  }
`;
v.div`
  /* Use CSS columns for visual two-column layout */
  column-count: 2;
  column-gap: ${(r) => r.$columnGap || "16px"};

  /* Prevent column breaks inside items */
  & > * {
    break-inside: avoid;
    page-break-inside: avoid;
    margin-bottom: ${(r) => r.$gap || "8px"};
    display: block;
  }

  /* Last item in each column shouldn't have bottom margin */
  & > *:last-child {
    margin-bottom: 0;
  }

  @media print {
    column-count: 2;
    column-gap: 12pt;

    & > * {
      margin-bottom: 6pt;
      break-inside: avoid;
      page-break-inside: avoid;
    }
  }

  /* Collapse to single column on small screens */
  @media (max-width: 768px) {
    column-count: 1;
    column-gap: 0;

    & > * {
      margin-bottom: ${(r) => r.$gap || "8px"};
    }
  }
`;
v.div`
  margin-bottom: var(--resume-space-tight);
`;
v.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
`;
v.div`
  width: 100%;
  height: ${(r) => r.$height || "8px"};
  background-color: var(--resume-color-border);
  border-radius: var(--resume-radius-sm);
  overflow: hidden;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
v.div`
  width: ${(r) => r.$level}%;
  height: 100%;
  background-color: ${(r) => r.$color || "var(--resume-color-accent)"};
  transition: width 0.3s ease;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
v.span`
  display: inline-block;
  padding: ${(r) => r.$size === "small" ? "4px 8px" : "6px 12px"};
  margin: 4px;
  background-color: ${(r) => r.$variant === "filled" ? "var(--resume-color-accent)" : "var(--resume-color-background)"};
  color: ${(r) => r.$variant === "filled" ? "#ffffff" : "var(--resume-color-primary)"};
  border: ${(r) => r.$variant === "outlined" ? "1px solid var(--resume-color-border)" : "none"};
  border-radius: ${(r) => r.$rounded ? "999px" : "var(--resume-radius-sm)"};
  font-size: ${(r) => r.$size === "small" ? "var(--resume-size-small)" : "var(--resume-size-body)"};
  font-weight: var(--resume-weight-medium);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    margin: 2px;
  }
`;
v.div`
  display: flex;
  align-items: center;
  gap: var(--resume-space-tight);
  margin-bottom: var(--resume-space-tight);
`;
v.span`
  flex: 1;
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
`;
v.div`
  display: flex;
  gap: 4px;
`;
v.span`
  width: ${(r) => r.$size || "10px"};
  height: ${(r) => r.$size || "10px"};
  border-radius: 50%;
  background-color: ${(r) => r.$filled ? "var(--resume-color-accent)" : "var(--resume-color-border)"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
v.div`
  margin-bottom: var(--resume-space-item);
`;
v.h4`
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-semibold);
  color: var(--resume-color-primary);
  margin-bottom: var(--resume-space-tight);
`;
v.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;
v.span`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);

  &:not(:last-child)::after {
    content: '${(r) => r.$separator || "•"}';
    margin-left: 6px;
    color: var(--resume-color-border);
  }
`;
v.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`;
v.span`
  display: inline-block;
  padding: 4px 12px;
  font-size: ${(r) => r.$weight >= 80 ? "var(--resume-size-subheading)" : r.$weight >= 50 ? "var(--resume-size-body)" : "var(--resume-size-small)"};
  font-weight: ${(r) => r.$weight >= 70 ? "var(--resume-weight-semibold)" : "var(--resume-weight-normal)"};
  color: var(--resume-color-primary);
  background-color: ${(r) => `color-mix(in srgb, var(--resume-color-accent) ${r.$weight}%, transparent)`};
  border-radius: var(--resume-radius-sm);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
v.div`
  margin-bottom: var(--resume-space-item);
`;
v.h4`
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-semibold);
  color: var(--resume-color-primary);
  margin-bottom: var(--resume-space-tight);
  border-bottom: 1px solid var(--resume-color-border);
  padding-bottom: 4px;
`;
v.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
v.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
`;
v.span`
  flex: 1;
`;
v.span`
  font-size: var(--resume-size-small);
  color: var(--resume-color-accent);
  font-weight: var(--resume-weight-medium);
`;
v.div`
  position: relative;
  margin-bottom: var(--resume-space-section);

  @media print {
    page-break-inside: avoid;
  }
`;
v.div`
  position: relative;
  padding-left: ${(r) => r.$showLine ? "32px" : "0"};
  margin-bottom: var(--resume-space-item);

  ${(r) => r.$showLine && `
    &::before {
      content: '';
      position: absolute;
      left: 8px;
      top: 8px;
      bottom: -16px;
      width: 2px;
      background-color: var(--resume-color-border);
    }

    &:last-child::before {
      display: none;
    }
  `}

  @media print {
    break-inside: avoid;
  }
`;
v.div`
  position: absolute;
  left: 0;
  top: 6px;
  width: ${(r) => r.$size || "16px"};
  height: ${(r) => r.$size || "16px"};
  border-radius: 50%;
  background-color: ${(r) => r.$color || "var(--resume-color-accent)"};
  border: 2px solid var(--resume-color-background);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
v.div`
  display: flex;
  flex-direction: column;
`;
v.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 4px;
  flex-wrap: wrap;
`;
v.h3`
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-semibold);
  color: var(--resume-color-primary);
  margin: 0;
`;
v.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
v.div`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;
v.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--resume-space-item, 12pt);

  @media print {
    break-inside: avoid;
  }
`;
v.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: ${(r) => r.$lineColor || "var(--resume-color-border, #ddd)"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
v.div`
  position: relative;
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding-left: 20px;
`;
v.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: ${(r) => r.$width || "8px"};
  height: ${(r) => {
  const a = r.$height || "2pt", u = parseFloat(a), x = a.replace(/[\d.]/g, "");
  return u < 2 && x === "pt" ? "2pt" : a;
}};
  background-color: ${(r) => r.$color || "var(--resume-color-border, #ddd)"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    min-height: 2pt; /* Ensure visibility in print */
  }
`;
v.span`
  font-size: var(--resume-size-small, 10pt);
  color: var(--resume-color-secondary, #666);
  font-weight: var(--resume-weight-normal, 400);
  white-space: nowrap;
  flex-shrink: 0;
`;
v.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`;
v.span`
  font-size: var(--resume-size-body, 11pt);
  color: var(--resume-color-primary, #000);
  font-weight: var(--resume-weight-medium, 500);
`;
v.span`
  font-size: var(--resume-size-small, 10pt);
  color: var(--resume-color-tertiary, #999);
`;
v.span`
  font-size: var(--resume-size-small, 10pt);
  color: var(--resume-color-secondary, #666);
  white-space: nowrap;
  font-variant-numeric: tabular-nums; /* Consistent number width */

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
v.span`
  font-weight: var(--resume-weight-normal, 400);
`;
v.span`
  /* En dash with narrow no-break spaces for proper typography */
  margin: 0;
  padding: 0;
`;
v.img`
  width: ${(r) => r.$size || "80px"};
  height: ${(r) => r.$size || "80px"};
  border-radius: ${(r) => r.$rounded ? "50%" : "var(--resume-radius-md)"};
  object-fit: cover;
  border: ${(r) => r.$border ? "2px solid var(--resume-color-border)" : "none"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
v.div`
  width: ${(r) => r.$size || "80px"};
  height: ${(r) => r.$size || "80px"};
  border-radius: ${(r) => r.$rounded ? "50%" : "var(--resume-radius-md)"};
  background-color: var(--resume-color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(${(r) => r.$size || "80px"} / 2);
  color: var(--resume-color-secondary);
  font-weight: var(--resume-weight-semibold);
`;
v.div`
  display: flex;
  flex-direction: ${(r) => r.$direction || "column"};
  align-items: ${(r) => r.$direction === "row" ? "center" : "flex-start"};
  gap: var(--resume-space-item);
  padding: var(--resume-space-item);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  margin-bottom: var(--resume-space-section);

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
  }
`;
v.div`
  flex: 1;
`;
v.h1`
  font-size: var(--resume-size-name);
  font-weight: var(--resume-weight-bold);
  color: var(--resume-color-primary);
  margin: 0 0 4px 0;
`;
v.h2`
  font-size: var(--resume-size-heading);
  font-weight: var(--resume-weight-normal);
  color: var(--resume-color-secondary);
  margin: 0 0 var(--resume-space-tight) 0;
`;
v.p`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
  margin: 0;
`;
v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--resume-space-tight);
  margin-bottom: var(--resume-space-section);

  @media print {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
`;
v.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
`;
v.span`
  color: var(--resume-color-accent);
`;
v.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: var(--resume-color-accent);
  }

  @media print {
    color: var(--resume-color-secondary);
  }
`;
v.div`
  display: flex;
  gap: var(--resume-space-tight);
  flex-wrap: wrap;
`;
v.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
  text-decoration: none;
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-sm);
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--resume-color-accent);
    color: #ffffff;
    border-color: var(--resume-color-accent);
  }

  @media print {
    border: 1px solid var(--resume-color-border);
    color: var(--resume-color-primary);
  }
`;
v.span`
  display: inline-flex;
`;
v.h1`
  font-size: ${(r) => {
  const a = {
    1: "var(--resume-size-name)",
    2: "var(--resume-size-heading)",
    3: "var(--resume-size-subheading)",
    4: "var(--resume-size-body)"
  };
  return a[r.$level] || a[2];
}};
  font-weight: ${(r) => r.$weight || "var(--resume-weight-semibold)"};
  color: ${(r) => r.$color || "var(--resume-color-primary)"};
  margin: 0 0 ${(r) => r.$spacing || "var(--resume-space-tight)"} 0;
  line-height: var(--resume-line-height-tight);
`;
v.p`
  font-size: ${(r) => r.$size || "var(--resume-size-body)"};
  font-weight: ${(r) => r.$weight || "var(--resume-weight-normal)"};
  color: ${(r) => r.$color || "var(--resume-color-secondary)"};
  line-height: ${(r) => r.$lineHeight || "var(--resume-line-height-normal)"};
  margin: 0 0 ${(r) => r.$spacing || "0"} 0;
`;
v.span`
  display: inline-block;
  font-size: var(--resume-size-small);
  font-weight: ${(r) => r.$weight || "var(--resume-weight-medium)"};
  color: ${(r) => r.$color || "var(--resume-color-secondary)"};
  text-transform: ${(r) => r.$uppercase ? "uppercase" : "none"};
  letter-spacing: ${(r) => r.$uppercase ? "0.05em" : "normal"};
`;
v.p`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-normal);
  color: ${(r) => r.$color || "var(--resume-color-secondary)"};
  line-height: var(--resume-line-height-relaxed);
  margin: 0 0 var(--resume-space-item) 0;
  max-width: ${(r) => r.$maxWidth || "100%"};

  /* Softer appearance for intro text */
  opacity: 0.95;

  /* Print optimization - maintain readability */
  @media print {
    line-height: var(--resume-line-height-normal);
    opacity: 1;
    page-break-inside: avoid;
  }
`;
v.blockquote`
  margin: 0 0 var(--resume-space-item) 0;
  padding: 2px 0 2px ${(r) => r.$paddingLeft || "16px"};
  border-left: ${(r) => r.$borderWidth || "3px"} solid
    ${(r) => r.$accentColor || "var(--resume-color-accent)"};

  font-size: var(--resume-size-body);
  font-style: ${(r) => r.$fontStyle || "italic"};
  font-weight: var(--resume-weight-normal);
  color: var(--resume-color-primary);
  line-height: var(--resume-line-height-normal);

  /* Prevent quote clipping with subtle padding */
  padding-right: 2px;

  /* Single-line constraint */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* Print optimization */
  @media print {
    page-break-inside: avoid;
    color: #000;
    border-left-color: ${(r) => r.$accentColor || "#000"};
  }
`;
v.p`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-normal);
  color: ${(r) => r.$color || "var(--resume-color-secondary)"};
  line-height: var(--resume-line-height-normal);
  text-align: ${(r) => r.$textAlign || "left"};
  margin: 0 0 var(--resume-space-tight) 0;

  /* Enable hyphenation for better text flow */
  hyphens: auto;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;

  /* Prevent orphans and widows */
  orphans: 2;
  widows: 2;

  /* Balanced text wrapping */
  text-wrap: balance;

  /* Optional line clamping */
  ${(r) => r.$maxLines && `
    display: -webkit-box;
    -webkit-line-clamp: ${r.$maxLines};
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `}

  /* Print optimization - disable hyphenation for cleaner output */
  @media print {
    hyphens: none;
    -webkit-hyphens: none;
    page-break-inside: avoid;
    text-wrap: pretty;
  }
`;
v.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;
v.svg`
  transform: rotate(-90deg);
`;
v.span`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  font-weight: var(--resume-weight-medium);
`;
v.div`
  padding: var(--resume-space-item);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  text-align: ${(r) => r.$align || "left"};

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
  }
`;
v.div`
  font-size: ${(r) => r.$size || "var(--resume-size-name)"};
  font-weight: var(--resume-weight-bold);
  color: ${(r) => r.$color || "var(--resume-color-accent)"};
  line-height: 1;
  margin-bottom: 4px;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
v.div`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
`;
v.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  margin-top: 4px;
`;
v.div`
  margin-bottom: var(--resume-space-tight);
`;
v.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 4px;
`;
v.span`
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
  font-weight: var(--resume-weight-medium);
`;
v.span`
  font-size: var(--resume-size-small);
  color: var(--resume-color-accent);
  font-weight: var(--resume-weight-semibold);
`;
v.div`
  width: 100%;
  height: ${(r) => r.$height || "24px"};
  background-color: var(--resume-color-border);
  border-radius: var(--resume-radius-sm);
  overflow: hidden;
  position: relative;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
v.div`
  width: ${(r) => r.$percentage}%;
  height: 100%;
  background-color: ${(r) => r.$color || "var(--resume-color-accent)"};
  display: flex;
  align-items: center;
  padding: 0 8px;
  transition: width 0.3s ease;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
v.span`
  font-size: var(--resume-size-small);
  color: #ffffff;
  font-weight: var(--resume-weight-medium);
  white-space: nowrap;
`;
v.strong`
  font-weight: ${(r) => r.$size === "sm" ? "var(--resume-weight-semibold, 600)" : r.$size === "lg" ? "var(--resume-weight-extrabold, 800)" : "var(--resume-weight-bold, 700)"};
  font-size: ${(r) => r.$size === "sm" ? "0.95em" : r.$size === "lg" ? "1.1em" : "1em"};
  color: inherit;
  white-space: nowrap;

  @media print {
    font-weight: ${(r) => r.$size === "sm" ? "600" : r.$size === "lg" ? "800" : "700"};
    color: inherit;
  }
`;
v.li`
  display: flex;
  align-items: baseline;
  margin-bottom: ${(r) => r.$spacing === "tight" ? "4px" : "8px"};
  line-height: 1.5;
  list-style: none;

  @media print {
    page-break-inside: avoid;
  }
`;
v.span`
  font-weight: var(--resume-weight-bold, 700);
  color: var(--resume-color-primary, #000);
  min-width: ${(r) => r.$align === "right" ? "auto" : "60px"};
  max-width: ${(r) => r.$align === "right" ? "80px" : "auto"};
  margin-right: ${(r) => r.$align === "right" ? "12px" : "0"};
  margin-left: ${(r) => r.$align === "right" ? "0" : "12px"};
  text-align: ${(r) => r.$align === "right" ? "right" : "left"};
  flex-shrink: 0;
  white-space: nowrap;

  ${(r) => r.$align === "right" ? `
    order: -1;
  ` : ""}

  @media print {
    font-weight: 700;
    color: #000;
  }
`;
v.span`
  flex: 1;
  color: var(--resume-color-primary, #000);
`;
v.span`
  margin-right: 8px;
  color: var(--resume-color-accent, #0066cc);
  font-weight: var(--resume-weight-bold, 700);

  @media print {
    color: #333;
  }
`;
v.ul`
  margin: 8px 0;
  padding-left: 0;
  list-style: none;
`;
v.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(r) => r.$gap || "8px"};
  align-items: center;
  margin: ${(r) => r.$margin || "8px 0"};

  @media print {
    gap: 6px;
  }
`;
v.span`
  display: inline-flex;
  align-items: center;
  padding: ${(r) => r.$size === "xs" ? "2px 8px" : r.$size === "md" ? "4px 12px" : "3px 10px"};
  border-radius: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.radius) == null ? void 0 : u.full) || "var(--resume-radius-full, 999px)";
}};
  border: 1px solid
    ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.border) || "var(--resume-color-border, #ddd)";
}};
  background: transparent;
  font-size: ${(r) => r.$size === "xs" ? "8pt" : r.$size === "md" ? "10pt" : "9pt"};
  font-weight: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.typography) == null ? void 0 : u.weightMedium) || "var(--resume-weight-medium, 500)";
}};
  color: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.secondary) || "var(--resume-color-secondary, #333)";
}};
  white-space: nowrap;
  line-height: 1.2;

  @media print {
    border: 1px solid #ccc;
    background: transparent;
    color: #000;
    padding: ${(r) => r.$size === "xs" ? "2px 6px" : r.$size === "md" ? "3px 10px" : "2px 8px"};
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
v.span`
  color: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.border) || "var(--resume-color-border, #ddd)";
}};
  font-size: ${(r) => r.$size === "xs" ? "8pt" : r.$size === "md" ? "10pt" : "9pt"};
  user-select: none;

  @media print {
    color: #ccc;
  }
`;
v.span`
  display: inline;
  font-size: ${(r) => r.$size === "xs" ? "9pt" : r.$size === "md" ? "11pt" : "10pt"};
  color: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.secondary) || "var(--resume-color-secondary, #333)";
}};
  line-height: 1.5;

  @media print {
    color: #333;
  }
`;
v.span`
  display: inline;
  white-space: normal;
`;
v.span`
  font-weight: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.typography) == null ? void 0 : u.weightMedium) || "var(--resume-weight-medium, 500)";
}};
  color: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.primary) || "var(--resume-color-primary, #000)";
}};

  @media print {
    font-weight: 500;
    color: #000;
  }
`;
v.span`
  /* Prevent wrap between key and colon */
  white-space: nowrap;

  &::after {
    content: ':';
    margin-right: 0.25em;
  }
`;
v.span`
  /* Prevent wrap immediately after colon */
  display: inline-block;
  color: inherit;
`;
v.span`
  &::before {
    content: ', ';
    white-space: pre;
  }
`;
v.hr`
  width: 100%;
  height: ${(r) => r.$thickness || "1px"};
  background-color: ${(r) => r.$color || "var(--resume-color-border)"};
  border: none;
  margin: ${(r) => r.$spacing || "var(--resume-space-item)"} 0;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
v.div`
  width: ${(r) => r.$width || "100%"};
  height: ${(r) => r.$height || "var(--resume-space-item)"};
  flex-shrink: 0;
`;
v.div`
  padding: var(--resume-space-item);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  margin-bottom: var(--resume-space-item);

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
  }
`;
v.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: var(--resume-space-tight);
  flex-wrap: wrap;
  gap: 8px;
`;
v.h3`
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-semibold);
  color: var(--resume-color-primary);
  margin: 0;
`;
v.div`
  font-size: var(--resume-size-body);
  color: var(--resume-color-accent);
  font-weight: var(--resume-weight-medium);
`;
v.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  margin-bottom: var(--resume-space-tight);
`;
v.p`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
  margin: 0;
`;
v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--resume-space-item);
  margin-bottom: var(--resume-space-section);

  @media print {
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
v.div`
  padding: var(--resume-space-item);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);

  @media print {
    break-inside: avoid;
  }
`;
v.h4`
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-semibold);
  color: var(--resume-color-primary);
  margin: 0 0 4px 0;
`;
v.div`
  font-size: var(--resume-size-body);
  color: var(--resume-color-accent);
  margin-bottom: 4px;
`;
v.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
v.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
v.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 8px 0;
  border-bottom: 1px solid var(--resume-color-border);
  gap: var(--resume-space-tight);

  &:last-child {
    border-bottom: none;
  }

  @media print {
    break-inside: avoid;
  }
`;
v.div`
  flex: 1;
`;
v.span`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
v.span`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);

  &::before {
    content: ' at ';
  }
`;
v.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  white-space: nowrap;
`;
v.header`
  text-align: center;
  margin-bottom: var(--resume-space-section);

  @media print {
    break-after: avoid;
  }
`;
v.h1`
  font-size: var(--resume-size-name);
  font-weight: var(--resume-weight-bold);
  color: var(--resume-color-primary);
  margin: 0 0 4px 0;
`;
v.h2`
  font-size: var(--resume-size-heading);
  font-weight: var(--resume-weight-normal);
  color: var(--resume-color-secondary);
  margin: 0 0 var(--resume-space-item) 0;
`;
v.div`
  display: flex;
  justify-content: center;
  gap: var(--resume-space-tight);
  flex-wrap: wrap;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
`;
v.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--resume-space-section);
  gap: var(--resume-space-item);

  @media print {
    break-after: avoid;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
v.div`
  flex: 1;
`;
v.h1`
  font-size: var(--resume-size-name);
  font-weight: var(--resume-weight-bold);
  color: var(--resume-color-primary);
  margin: 0 0 4px 0;
`;
v.h2`
  font-size: var(--resume-size-heading);
  font-weight: var(--resume-weight-normal);
  color: var(--resume-color-secondary);
  margin: 0;
`;
v.div`
  text-align: right;

  @media (max-width: 768px) {
    text-align: left;
  }
`;
v.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: var(--resume-space-item);
  border-bottom: 2px solid var(--resume-color-border);
  margin-bottom: var(--resume-space-section);
  gap: var(--resume-space-item);

  @media print {
    border-bottom: 2px solid var(--resume-color-border);
    break-after: avoid;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
v.h1`
  font-size: var(--resume-size-heading);
  font-weight: var(--resume-weight-bold);
  color: var(--resume-color-primary);
  margin: 0;
`;
v.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
v.div`
  position: ${(r) => r.$position === "absolute" ? "absolute" : "relative"};
  ${(r) => r.$corner === "top-left" && "top: 0; left: 0;"}
  ${(r) => r.$corner === "top-right" && "top: 0; right: 0;"}
  ${(r) => r.$corner === "bottom-left" && "bottom: 0; left: 0;"}
  ${(r) => r.$corner === "bottom-right" && "bottom: 0; right: 0;"}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(r) => r.$size || "48px"};
  height: ${(r) => r.$size || "48px"};

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
v.div`
  font-family: ${(r) => r.$serif ? 'Georgia, "Times New Roman", serif' : "inherit"};
  font-size: ${(r) => r.$fontSize || "calc(var(--resume-size-heading) * 0.8)"};
  font-weight: ${(r) => r.$outline ? "var(--resume-weight-normal)" : "var(--resume-weight-bold)"};
  color: ${(r) => r.$color || "var(--resume-color-primary)"};
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: ${(r) => r.$outline ? "1px" : "0"};

  ${(r) => r.$outline && `
    -webkit-text-stroke: 1px ${r.$color || "var(--resume-color-primary)"};
    -webkit-text-fill-color: transparent;
    text-stroke: 1px ${r.$color || "var(--resume-color-primary)"};
    text-fill-color: transparent;
  `}

  ${(r) => r.$bordered && `
    border: 2px solid ${r.$color || "var(--resume-color-primary)"};
    border-radius: ${r.$rounded ? "50%" : "var(--resume-radius-sm)"};
    padding: ${r.$padding || "8px"};
    width: ${r.$size || "48px"};
    height: ${r.$size || "48px"};
    display: flex;
    align-items: center;
    justify-content: center;
  `}

  @media print {
    ${(r) => r.$outline && `
      color: ${r.$color || "var(--resume-color-primary)"};
      -webkit-text-stroke: none;
      -webkit-text-fill-color: ${r.$color || "var(--resume-color-primary)"};
      font-weight: var(--resume-weight-normal);
    `}
  }
`;
v.footer`
  margin-top: var(--resume-space-section);
  padding-top: var(--resume-space-item);
  border-top: 1px solid var(--resume-color-border);
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  text-align: ${(r) => r.$align || "center"};

  @media print {
    border-top: 1px solid var(--resume-color-border);
    position: running(footer);
  }
`;
v.span`
  @media print {
    &::after {
      content: counter(page);
    }
  }
`;
v.div`
  @media print {
    page-break-before: ${(r) => r.$before ? "always" : "auto"};
    page-break-after: ${(r) => r.$after ? "always" : "auto"};
    break-before: ${(r) => r.$before ? "page" : "auto"};
    break-after: ${(r) => r.$after ? "page" : "auto"};
  }

  @media screen {
    display: none;
  }
`;
v.header`
  text-align: center;
  margin-bottom: var(--resume-space-section, 24px);

  @media print {
    break-after: avoid;
  }
`;
v.div`
  font-size: var(--resume-size-small, 10px);
  font-weight: var(--resume-weight-medium, 500);
  color: var(--resume-color-secondary, #4a4a4a);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--resume-space-tight, 8px);

  @media print {
    color: #4a4a4a; /* Ensure print visibility */
  }
`;
v.h1`
  font-size: var(--resume-size-name, 36px);
  font-weight: var(--resume-weight-bold, 700);
  color: var(--resume-color-primary, #1a1a1a);
  letter-spacing: -0.02em; /* Subtle negative tracking, avoid excessive spacing */
  margin: 0 auto;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--resume-color-border, #e5e7eb);
  max-width: fit-content;
  line-height: var(--resume-line-height-tight, 1.2);

  /* Ensure 4.5:1 contrast ratio */
  @media print {
    color: #000000;
    border-bottom-color: #999999;
  }
`;
v.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: var(--resume-size-body, 11px);
  color: var(--resume-color-secondary, #4a4a4a);
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* Prevent wrapping to maintain single-line layout */
  flex-wrap: nowrap;

  @media print {
    color: #333333; /* Ensure 4.5:1 contrast for print */
  }

  /* Handle overflow gracefully on very narrow screens */
  @media (max-width: 480px) {
    font-size: 10px;
    gap: 8px;
  }
`;
v.span`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
`;
v.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: var(--resume-color-accent, #2563eb);
    text-decoration: underline;
  }

  @media print {
    color: #333333;
    text-decoration: none;
  }
`;
v.span`
  color: var(--resume-color-border, #e5e7eb);
  user-select: none;
  font-weight: var(--resume-weight-normal, 400);

  @media print {
    color: #999999;
  }
`;
v.div`
  margin-bottom: var(--resume-space-item, 16px);

  @media print {
    page-break-after: avoid;
  }
`;
v.h2`
  font-size: var(--resume-size-heading, 16px);
  font-weight: var(--resume-weight-semibold, 600);
  color: var(--resume-color-primary, #1a1a1a);
  margin: 0 0 8px 0;
  line-height: var(--resume-line-height-tight, 1.2);

  @media print {
    color: #000000; /* Ensure 4.5:1 contrast */
  }
`;
v.hr`
  width: ${(r) => r.$width || "100%"};
  height: 0;
  border: none;
  border-top: 0.5px solid
    ${(r) => r.$color || "var(--resume-color-border, #e5e7eb)"};
  margin: 0;

  /* Ensure visibility in print */
  @media print {
    border-top-width: 1px;
    border-top-color: ${(r) => r.$color || "#cccccc"};
  }
`;
v.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: var(--resume-space-item, 16px);

  @media print {
    page-break-after: avoid;
  }
`;
v.div`
  width: ${(r) => r.$width || "4px"};
  height: 0.7em; /* Match x-height of text, not full line-height */
  background-color: ${(r) => r.$color || "var(--resume-color-accent, #2563eb)"};
  border-radius: 2px;
  flex-shrink: 0;

  /* Ensure visibility in print */
  @media print {
    background-color: ${(r) => r.$color || "#000000"};
  }
`;
v.h2`
  font-size: var(--resume-size-heading, 16px);
  font-weight: var(--resume-weight-semibold, 600);
  color: var(--resume-color-primary, #1a1a1a);
  margin: 0;
  line-height: var(--resume-line-height-tight, 1.2);

  @media print {
    color: #000000; /* Ensure 4.5:1 contrast */
  }
`;
v.header`
  text-align: ${(r) => r.$align || "center"};
  margin-bottom: var(--resume-space-section, 24px);

  @media print {
    break-after: avoid;
  }
`;
v.h1`
  font-size: var(--resume-size-name, 36px);
  font-weight: var(--resume-weight-bold, 700);
  color: var(--resume-color-primary, #1a1a1a);
  margin: 0 0 4px 0;
  line-height: var(--resume-line-height-tight, 1.2);
  letter-spacing: -0.02em;

  @media print {
    color: #000000; /* Ensure 4.5:1 contrast */
  }
`;
v.div`
  font-size: var(--resume-size-heading, 16px);
  font-weight: var(--resume-weight-medium, 500); /* Avoid thin weights */
  color: var(--resume-color-secondary, #4a4a4a);
  margin: 0 0 8px 0;
  line-height: var(--resume-line-height-normal, 1.5);

  @media print {
    color: #333333; /* Ensure 4.5:1 contrast */
  }
`;
v.div`
  font-size: var(--resume-size-body, 11px);
  font-weight: var(--resume-weight-normal, 400);
  color: var(--resume-color-secondary, #4a4a4a);
  margin: 0;
  line-height: var(--resume-line-height-relaxed, 1.75);
  max-width: 600px;
  margin-left: ${(r) => r.$align === "center" ? "auto" : "0"};
  margin-right: ${(r) => r.$align === "center" ? "auto" : r.$align === "right" ? "0" : "auto"};

  @media print {
    color: #4a4a4a;
  }
`;
v.blockquote`
  margin: var(--resume-space-section) 0;
  padding: var(--resume-space-item);
  border-left: 4px solid var(--resume-color-accent);
  background-color: var(--resume-color-muted);
  break-inside: avoid;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border-left: 4px solid var(--resume-color-accent);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
v.p`
  font-size: var(--resume-size-subheading);
  font-style: italic;
  color: var(--resume-color-primary);
  line-height: var(--resume-line-height-relaxed);
  margin: 0 0 var(--resume-space-tight) 0;
`;
v.footer`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  text-align: right;
`;
v.cite`
  font-style: normal;
  font-weight: var(--resume-weight-medium);
`;
v.span`
  display: block;
  font-size: var(--resume-size-tiny);
  margin-top: 2px;
`;
v.div`
  display: flex;
  flex-direction: column;
  gap: var(--resume-space-tight);
  padding: var(--resume-space-item);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  break-inside: avoid;

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }

  @media (max-width: 768px) {
    padding: var(--resume-space-tight);
  }
`;
v.div`
  display: flex;
  align-items: center;
  gap: var(--resume-space-tight);
`;
v.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;
v.div`
  flex: 1;
`;
v.div`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
v.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
v.blockquote`
  margin: 0;
  font-size: var(--resume-size-body);
  font-style: italic;
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;
v.blockquote`
  margin: var(--resume-space-item) 0;
  padding: var(--resume-space-tight) var(--resume-space-item);
  border-left: 3px solid var(--resume-color-border);
  font-style: italic;
  color: var(--resume-color-secondary);
  background-color: ${(r) => r.$highlight ? "var(--resume-color-muted)" : "transparent"};
  break-inside: avoid;

  @media print {
    border-left: 3px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
v.p`
  margin: 0;
  font-size: var(--resume-size-body);
  line-height: var(--resume-line-height-normal);
`;
v.cite`
  display: block;
  margin-top: var(--resume-space-tight);
  font-size: var(--resume-size-small);
  font-style: normal;
  color: var(--resume-color-tertiary);
`;
v.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: ${(r) => r.$variant === "filled" ? "var(--resume-color-accent)" : "var(--resume-color-background)"};
  color: ${(r) => r.$variant === "filled" ? "white" : "var(--resume-color-primary)"};
  border: 1px solid
    ${(r) => r.$variant === "filled" ? "var(--resume-color-accent)" : "var(--resume-color-border)"};
  border-radius: var(--resume-radius-full);
  font-size: var(--resume-size-small);
  font-weight: var(--resume-weight-medium);
  break-inside: avoid;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid var(--resume-color-border);
    background-color: ${(r) => r.$variant === "filled" ? "var(--resume-color-accent)" : "transparent"};
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-tiny);
    padding: 6px 12px;
  }
`;
v.span`
  display: flex;
  align-items: center;
  font-size: 16px;
`;
v.span`
  white-space: nowrap;
`;
v.span`
  opacity: 0.8;
  font-size: var(--resume-size-tiny);
  font-weight: var(--resume-weight-normal);
`;
v.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5em;
  margin-bottom: 0.5em;
  font-size: var(--resume-size-body);
  line-height: var(--resume-line-height-normal);
  break-inside: avoid;

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-small);
  }
`;
v.span`
  font-weight: var(--resume-weight-semibold);
  color: var(--resume-color-primary);
`;
v.span`
  color: var(--resume-color-primary);
`;
v.span`
  font-family: 'Courier New', Courier, monospace;
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  background-color: var(--resume-color-background);
  padding: 2px 6px;
  border-radius: var(--resume-radius-sm);
  border: 1px solid var(--resume-color-border);

  @media print {
    background-color: transparent;
    border: 1px solid var(--resume-color-border);
    padding: 1px 4px;
  }
`;
v.span`
  font-size: var(--resume-size-small);
  color: var(--resume-color-tertiary);
  font-style: italic;
`;
v.a`
  color: var(--resume-color-accent);
  text-decoration: none;
  font-size: var(--resume-size-small);

  &:hover {
    text-decoration: underline;
  }

  @media print {
    color: var(--resume-color-primary);
    text-decoration: none;

    &::after {
      content: ' [' attr(href) ']';
      font-size: var(--resume-size-tiny);
    }
  }
`;
v.span`
  color: var(--resume-color-tertiary);

  &::before {
    content: '·';
  }
`;
v.div`
  padding: var(--resume-space-item);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  margin-bottom: var(--resume-space-tight);
  break-inside: avoid;

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
v.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--resume-space-tight);
  margin-bottom: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }
`;
v.h3`
  margin: 0;
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
v.time`
  font-size: var(--resume-size-small);
  color: var(--resume-color-tertiary);
  white-space: nowrap;
`;
v.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  margin-bottom: 8px;
`;
v.p`
  margin: 0;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;
v.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
v.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--resume-space-tight);
  padding: 8px 0;
  border-bottom: 1px solid var(--resume-color-border);
  break-inside: avoid;

  &:last-child {
    border-bottom: none;
  }

  @media print {
    border-bottom: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }
`;
v.div`
  flex: 1;
`;
v.div`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  margin-bottom: 2px;
`;
v.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
v.time`
  font-size: var(--resume-size-small);
  color: var(--resume-color-tertiary);
  white-space: nowrap;
`;
v.div`
  margin-bottom: var(--resume-space-tight);
`;
v.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
`;
v.span`
  font-weight: var(--resume-weight-medium);
`;
v.span`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
v.div`
  width: 100%;
  height: 10px;
  background-color: var(--resume-color-border);
  border-radius: var(--resume-radius-sm);
  overflow: hidden;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
v.div`
  width: ${(r) => r.$level}%;
  height: 100%;
  background-color: ${(r) => r.$color || "var(--resume-color-accent)"};
  transition: width 0.3s ease;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
v.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  margin-bottom: 0.5em;
  font-size: var(--resume-size-body);
  line-height: var(--resume-line-height-normal);
  break-inside: avoid;

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-small);
    gap: 0.5em;
  }
`;
v.div`
  display: flex;
  align-items: baseline;
  gap: 0.5em;
  flex: 1;
`;
v.span`
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
v.span`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
v.span`
  font-family: 'Courier New', Courier, monospace;
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
  letter-spacing: 2px;
  white-space: nowrap;

  @media print {
    letter-spacing: 3px;
  }
`;
v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--resume-space-tight);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media print {
    break-inside: avoid;
  }
`;
v.div`
  padding: var(--resume-space-tight);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-sm);
  break-inside: avoid;

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
v.div`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  margin-bottom: 8px;
`;
v.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
v.div`
  display: flex;
  gap: 4px;
  margin-top: 8px;
`;
v.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(r) => r.$filled ? "var(--resume-color-accent)" : "var(--resume-color-border)"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid
      ${(r) => r.$filled ? "var(--resume-color-accent)" : "var(--resume-color-border)"};
  }
`;
v.div`
  display: flex;
  align-items: center;
  gap: var(--resume-space-tight);
  margin-bottom: 8px;
`;
v.span`
  min-width: 120px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);

  @media (max-width: 768px) {
    min-width: 100px;
    font-size: var(--resume-size-small);
  }
`;
v.div`
  display: flex;
  gap: 4px;
  flex: 1;
`;
v.div`
  flex: 1;
  height: ${(r) => r.$size || "12px"};
  background-color: ${(r) => r.$filled ? r.$color || "var(--resume-color-accent)" : "var(--resume-color-border)"};
  border-radius: var(--resume-radius-xs);
  transition: background-color 0.3s ease;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid
      ${(r) => r.$filled ? r.$color || "var(--resume-color-accent)" : "var(--resume-color-border)"};
  }
`;
v.span`
  min-width: 80px;
  text-align: right;
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);

  @media (max-width: 768px) {
    display: none;
  }
`;
v.div`
  padding: var(--resume-space-tight) 0;
  border-bottom: 1px solid var(--resume-color-border);
  break-inside: avoid;

  &:last-child {
    border-bottom: none;
  }

  @media print {
    border-bottom: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
v.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--resume-space-tight);
  margin-bottom: 4px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }
`;
v.h3`
  margin: 0;
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
v.time`
  font-size: var(--resume-size-small);
  color: var(--resume-color-tertiary);
  white-space: nowrap;
`;
v.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  font-style: italic;
  margin-bottom: 8px;
`;
v.p`
  margin: 0;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;
v.a`
  display: inline-block;
  margin-top: 8px;
  font-size: var(--resume-size-small);
  color: var(--resume-color-accent);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media print {
    color: var(--resume-color-primary);
    text-decoration: none;

    &::after {
      content: ' (' attr(href) ')';
      font-size: var(--resume-size-tiny);
    }
  }
`;
v.div`
  margin-bottom: var(--resume-space-tight);
  padding-left: 1.5em;
  text-indent: -1.5em;
  break-inside: avoid;
  line-height: var(--resume-line-height-relaxed);

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
const ul = v.span`
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
`;
v(ul)`
  font-weight: var(--resume-weight-medium);
`;
v(ul)`
  color: var(--resume-color-secondary);
`;
v(ul)`
  font-style: italic;
`;
v(ul)`
  color: var(--resume-color-secondary);
`;
v.span`
  margin: 0 0.5em;
  color: var(--resume-color-tertiary);
`;
v.a`
  color: var(--resume-color-accent);
  text-decoration: none;
  margin-left: 0.5em;

  &:hover {
    text-decoration: underline;
  }

  @media print {
    color: var(--resume-color-primary);
    text-decoration: none;

    &::after {
      content: ' [' attr(href) ']';
      font-size: var(--resume-size-tiny);
    }
  }
`;
v.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--resume-space-item);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media print {
    break-inside: avoid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--resume-space-tight);
  }
`;
v.div`
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  overflow: hidden;
  break-inside: avoid;

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
v.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  display: block;

  @media print {
    height: 100px;
  }
`;
v.div`
  padding: var(--resume-space-tight);
`;
v.h3`
  margin: 0 0 4px 0;
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
v.p`
  margin: 0 0 8px 0;
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;
v.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;
v.span`
  padding: 2px 8px;
  font-size: var(--resume-size-tiny);
  background-color: var(--resume-color-muted);
  color: var(--resume-color-secondary);
  border-radius: var(--resume-radius-sm);

  @media print {
    border: 1px solid var(--resume-color-border);
    background-color: transparent;
  }
`;
v.div`
  padding: var(--resume-space-item);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  margin-bottom: var(--resume-space-tight);
  break-inside: avoid;

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
v.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--resume-space-tight);
  margin-bottom: 8px;
`;
v.h3`
  margin: 0;
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
v.time`
  font-size: var(--resume-size-small);
  color: var(--resume-color-tertiary);
  white-space: nowrap;
`;
v.p`
  margin: 0 0 var(--resume-space-tight) 0;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;
v.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: var(--resume-space-tight);
`;
v.span`
  padding: 4px 10px;
  font-size: var(--resume-size-small);
  background-color: var(--resume-color-muted);
  color: var(--resume-color-secondary);
  border-radius: var(--resume-radius-sm);

  @media print {
    border: 1px solid var(--resume-color-border);
    background-color: transparent;
  }
`;
v.div`
  display: flex;
  gap: var(--resume-space-tight);
`;
v.a`
  font-size: var(--resume-size-small);
  color: var(--resume-color-accent);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media print {
    color: var(--resume-color-primary);
    text-decoration: none;

    &::after {
      content: ' (' attr(href) ')';
      font-size: var(--resume-size-tiny);
    }
  }
`;
v.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--resume-size-body);
  margin: var(--resume-space-item) 0;

  @media print {
    break-inside: avoid;
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-small);
  }
`;
v.thead`
  background-color: var(--resume-color-muted);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
v.th`
  padding: 10px;
  text-align: left;
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  border: 1px solid var(--resume-color-border);

  @media print {
    border: 1px solid var(--resume-color-border);
  }
`;
v.tbody``;
v.tr`
  &:nth-child(even) {
    background-color: var(--resume-color-background);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
v.td`
  padding: 10px;
  border: 1px solid var(--resume-color-border);
  color: var(--resume-color-secondary);

  @media print {
    border: 1px solid var(--resume-color-border);
  }
`;
v.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
v.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(r) => r.$level === "expert" ? "var(--resume-color-accent)" : r.$level === "advanced" ? "var(--resume-color-success)" : r.$level === "intermediate" ? "var(--resume-color-warning)" : "var(--resume-color-border)"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 2px solid
      ${(r) => r.$level === "expert" ? "var(--resume-color-accent)" : r.$level === "advanced" ? "var(--resume-color-success)" : r.$level === "intermediate" ? "var(--resume-color-warning)" : "var(--resume-color-border)"};
  }
`;
v.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--resume-size-body);
  margin: var(--resume-space-item) 0;

  @media print {
    break-inside: avoid;
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-small);
  }
`;
v.thead``;
v.th`
  padding: 12px;
  text-align: ${(r) => r.$align || "left"};
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  background-color: var(--resume-color-muted);
  border: 1px solid var(--resume-color-border);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid var(--resume-color-border);
  }
`;
v.tbody``;
v.tr`
  &:nth-child(even) {
    background-color: var(--resume-color-background);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
v.td`
  padding: 10px 12px;
  border: 1px solid var(--resume-color-border);
  color: var(--resume-color-secondary);
  text-align: ${(r) => r.$align || "left"};
  vertical-align: top;

  @media print {
    border: 1px solid var(--resume-color-border);
  }
`;
v.td`
  padding: 10px 12px;
  border: 1px solid var(--resume-color-border);
  color: var(--resume-color-primary);
  font-weight: var(--resume-weight-medium);
  background-color: var(--resume-color-muted);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid var(--resume-color-border);
  }
`;
v.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--resume-size-body);
  margin: var(--resume-space-item) 0;

  @media print {
    break-inside: avoid;
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-small);
    display: block;
    overflow-x: auto;
  }
`;
v.thead`
  background-color: var(--resume-color-muted);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
v.th`
  padding: 12px;
  text-align: ${(r) => r.$align || "left"};
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  border: 1px solid var(--resume-color-border);
  white-space: nowrap;

  @media print {
    border: 1px solid var(--resume-color-border);
  }
`;
v.tbody``;
v.tr`
  &:nth-child(even) {
    background-color: ${(r) => r.$striped ? "var(--resume-color-background)" : "transparent"};
  }

  &:hover {
    background-color: var(--resume-color-muted);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;

    &:hover {
      background-color: transparent;
    }
  }
`;
v.td`
  padding: 10px 12px;
  border: 1px solid var(--resume-color-border);
  color: var(--resume-color-secondary);
  text-align: ${(r) => r.$align || "left"};
  vertical-align: top;

  @media print {
    border: 1px solid var(--resume-color-border);
  }
`;
v.tfoot`
  background-color: var(--resume-color-muted);
  font-weight: var(--resume-weight-medium);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
v.div`
  padding: var(--resume-space-item);
  margin: var(--resume-space-item) 0;
  background-color: ${(r) => r.$variant === "success" ? "var(--resume-color-success-bg, #d4edda)" : r.$variant === "warning" ? "var(--resume-color-warning-bg, #fff3cd)" : r.$variant === "error" ? "var(--resume-color-error-bg, #f8d7da)" : "var(--resume-color-muted)"};
  border-left: 4px solid
    ${(r) => r.$variant === "success" ? "var(--resume-color-success, #28a745)" : r.$variant === "warning" ? "var(--resume-color-warning, #ffc107)" : r.$variant === "error" ? "var(--resume-color-error, #dc3545)" : "var(--resume-color-accent)"};
  border-radius: var(--resume-radius-sm);
  break-inside: avoid;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border-left: 4px solid
      ${(r) => r.$variant === "success" ? "var(--resume-color-success, #28a745)" : r.$variant === "warning" ? "var(--resume-color-warning, #ffc107)" : r.$variant === "error" ? "var(--resume-color-error, #dc3545)" : "var(--resume-color-accent)"};
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
v.div`
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  margin-bottom: 8px;
`;
v.div`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;
v.div`
  display: flex;
  gap: var(--resume-space-tight);
  padding: var(--resume-space-tight);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  margin: var(--resume-space-tight) 0;
  break-inside: avoid;

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
v.div`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(r) => r.$color || "var(--resume-color-accent)"};
  color: white;
  font-size: 14px;
  font-weight: var(--resume-weight-bold);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 2px solid ${(r) => r.$color || "var(--resume-color-accent)"};
  }
`;
v.div`
  flex: 1;
`;
v.div`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  margin-bottom: 4px;
`;
v.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;
v.div`
  padding: var(--resume-space-item);
  background-color: ${(r) => r.$color || "var(--resume-color-accent)"};
  color: white;
  border-radius: var(--resume-radius-md);
  margin: var(--resume-space-item) 0;
  break-inside: avoid;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 2px solid ${(r) => r.$color || "var(--resume-color-accent)"};
    background-color: transparent;
    color: var(--resume-color-primary);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
v.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--resume-space-tight);
  margin-bottom: var(--resume-space-tight);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;
v.h3`
  margin: 0;
  font-size: var(--resume-size-heading);
  font-weight: var(--resume-weight-bold);
  color: inherit;

  @media print {
    color: var(--resume-color-primary);
  }
`;
v.div`
  padding: 4px 12px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: var(--resume-radius-full);
  font-size: var(--resume-size-small);
  white-space: nowrap;

  @media print {
    background-color: transparent;
    border: 1px solid currentColor;
  }
`;
v.div`
  font-size: var(--resume-size-body);
  line-height: var(--resume-line-height-normal);

  @media print {
    color: var(--resume-color-secondary);
  }
`;
v.div`
  margin-top: var(--resume-space-tight);
  padding-top: var(--resume-space-tight);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  font-size: var(--resume-size-small);

  @media print {
    border-top: 1px solid var(--resume-color-border);
    color: var(--resume-color-tertiary);
  }
`;
v.ul`
  margin: var(--resume-space-tight) 0;
  padding: 0;
  list-style: none;
`;
v.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 6px 0;
  break-inside: avoid;

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
v.span`
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(r) => r.$checked ? "var(--resume-color-accent)" : "var(--resume-color-border)"};
  color: white;
  font-size: 12px;
  margin-top: 2px;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 2px solid
      ${(r) => r.$checked ? "var(--resume-color-accent)" : "var(--resume-color-border)"};
  }
`;
v.span`
  flex: 1;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
  text-decoration: ${(r) => r.$checked && r.$strikethrough ? "line-through" : "none"};
  opacity: ${(r) => r.$checked && r.$strikethrough ? 0.7 : 1};
`;
v.ul`
  margin: var(--resume-space-tight) 0;
  padding: 0;
  list-style: none;
`;
v.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 6px 0;
  break-inside: avoid;

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
v.span`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: ${(r) => r.$color || "var(--resume-color-accent)"};
  margin-top: 2px;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
v.span`
  flex: 1;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;
v.ol`
  margin: var(--resume-space-tight) 0;
  padding-left: 28px;
  counter-reset: list-counter;
  list-style: none;
`;
v.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 6px 0;
  counter-increment: list-counter;
  break-inside: avoid;

  &::before {
    content: counter(list-counter) '.';
    flex-shrink: 0;
    width: 24px;
    font-weight: var(--resume-weight-medium);
    color: ${(r) => r.$color || "var(--resume-color-accent)"};
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;
v.span`
  flex: 1;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;
v.ul`
  margin: var(--resume-space-tight) 0;
  padding-left: 24px;
  list-style: none;
`;
v.li`
  position: relative;
  padding: 4px 0 4px 16px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
  break-inside: avoid;

  &::before {
    content: '${(r) => r.$bullet || "•"}';
    position: absolute;
    left: 0;
    color: ${(r) => r.$color || "var(--resume-color-accent)"};
    font-weight: var(--resume-weight-bold);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;
v.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
v.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 2px 0;
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  break-inside: avoid;

  &:not(:last-child) {
    border-bottom: ${(r) => r.$divider ? "1px solid var(--resume-color-border)" : "none"};
    padding-bottom: ${(r) => r.$divider ? "6px" : "2px"};
    margin-bottom: ${(r) => r.$divider ? "6px" : "0"};
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
    border-bottom: ${(r) => r.$divider ? "1px solid var(--resume-color-border)" : "none"};
  }
`;
v.span`
  flex-shrink: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${(r) => r.$color || "var(--resume-color-accent)"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid ${(r) => r.$color || "var(--resume-color-accent)"};
  }
`;
v.span`
  flex: 1;
  line-height: 1.4;
`;
v.ul`
  margin: var(--resume-space-tight) 0;
  padding-left: 20px;
  list-style: none;
`;
v.li`
  position: relative;
  padding: 2px 0;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: 1.4;
  break-inside: avoid;
  orphans: 2;
  widows: 2;
  max-height: 4.2em; /* Enforce 2-3 line max (1.4 line-height × 3 lines) */
  overflow: hidden;
  text-overflow: ellipsis;

  &::before {
    content: '${(r) => r.$bullet || "•"}';
    position: absolute;
    left: -16px;
    color: ${(r) => r.$color || "var(--resume-color-accent)"};
    font-weight: var(--resume-weight-semibold);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
    orphans: 2;
    widows: 2;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;
v.ul`
  margin: var(--resume-space-comfortable) 0;
  padding-left: 24px;
  list-style: none;
`;
v.li`
  position: relative;
  padding: 6px 0; /* 6pt baseline grid */
  margin-bottom: 8px; /* 8pt baseline grid */
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: 1.6; /* 1.6 × 16px = 25.6px ≈ 26px (multiple of 6pt baseline) */
  break-inside: avoid;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '${(r) => r.$bullet || "•"}';
    position: absolute;
    left: -20px;
    color: ${(r) => r.$color || "var(--resume-color-accent)"};
    font-weight: var(--resume-weight-semibold);
    line-height: inherit;
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
    orphans: 2;
    widows: 2;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;
v.ul`
  margin: var(--resume-space-tight) 0;
  padding-left: 0;
  list-style: none;
`;
v.li`
  position: relative;
  padding: 4px 0 4px 20px; /* Left padding for bullet space */
  text-indent: -20px; /* Negative indent to hang bullet outside */
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
  break-inside: avoid;

  &::before {
    content: '${(r) => r.$bullet || "•"}';
    color: ${(r) => r.$color || "var(--resume-color-accent)"};
    font-weight: var(--resume-weight-semibold);
    display: inline-block;
    width: 20px;
    text-indent: 0; /* Reset indent for bullet */
  }

  /* Reset text-indent for child elements */
  > * {
    text-indent: 0;
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
    orphans: 2;
    widows: 2;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;
v.ul`
  margin: var(--resume-space-tight) 0;
  padding-left: 0;
  list-style: none;
`;
v.li`
  position: relative;
  padding: 2px 0 2px 16px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: 1.5;
  break-inside: avoid;

  &::before {
    content: '–'; /* En-dash (U+2013), not hyphen */
    position: absolute;
    left: 0;
    color: ${(r) => r.$color || "var(--resume-color-text)"};
    font-weight: var(--resume-weight-normal);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
    orphans: 2;
    widows: 2;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;
v.ul`
  margin: var(--resume-space-tight) 0;
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`;
v.li`
  display: inline-flex;
  align-items: center;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);

  &:not(:last-child)::after {
    content: '·'; /* Midline dot (U+00B7) */
    margin-left: 8px;
    color: ${(r) => r.$color || "var(--resume-color-accent)"};
    font-weight: var(--resume-weight-semibold);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;

    &:not(:last-child)::after {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;
v.dl`
  margin: var(--resume-space-tight) 0;
  display: grid;
  grid-template-columns: ${(r) => r.$layout === "inline" ? "auto 1fr" : "1fr"};
  gap: ${(r) => r.$layout === "inline" ? "8px 16px" : "4px"};
`;
v.dt`
  font-size: var(--resume-size-body);
  color: var(--resume-color-text);
  font-weight: var(--resume-weight-semibold);
  line-height: var(--resume-line-height-normal);

  ${(r) => r.$layout === "stacked" && `
    margin-top: 8px;
    &:first-child {
      margin-top: 0;
    }
  `}

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
v.dd`
  margin: 0;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);

  ${(r) => r.$layout === "inline" && `
    display: flex;
    align-items: baseline;
  `}

  ${(r) => r.$layout === "stacked" && `
    margin-left: 16px;
    &::before {
      content: '—'; /* Em-dash (U+2014) */
      margin-right: 8px;
      color: ${r.$color || "var(--resume-color-accent)"};
    }
  `}

  ${(r) => r.$layout === "inline" && `
    &::before {
      content: '—'; /* Em-dash (U+2014) */
      margin: 0 8px;
      color: ${r.$color || "var(--resume-color-accent)"};
      flex-shrink: 0;
    }
  `}

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;
v.time`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  background-color: ${(r) => r.$variant === "filled" ? "var(--resume-color-accent)" : "var(--resume-color-background)"};
  color: ${(r) => r.$variant === "filled" ? "white" : "var(--resume-color-secondary)"};
  border: 1px solid
    ${(r) => r.$variant === "filled" ? "var(--resume-color-accent)" : "var(--resume-color-border)"};
  border-radius: var(--resume-radius-full);
  font-size: var(--resume-size-small);
  white-space: nowrap;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid var(--resume-color-border);
    background-color: ${(r) => r.$variant === "filled" ? "var(--resume-color-accent)" : "transparent"};
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-tiny);
    padding: 3px 10px;
  }
`;
v.span`
  display: flex;
  align-items: center;
  font-size: 14px;
`;
v.time`
  font-size: ${(r) => r.$size || "var(--resume-size-small)"};
  color: ${(r) => r.$color || "var(--resume-color-tertiary)"};
  white-space: nowrap;
`;
v.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  opacity: ${(r) => r.$opacity || 0.05};
  z-index: 0;
  background-image: ${(r) => r.$pattern === "dots" ? "radial-gradient(circle, var(--resume-color-primary) 1px, transparent 1px)" : r.$pattern === "grid" ? `
        linear-gradient(var(--resume-color-border) 1px, transparent 1px),
        linear-gradient(90deg, var(--resume-color-border) 1px, transparent 1px)
      ` : r.$pattern === "diagonal" ? `repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        var(--resume-color-border) 10px,
        var(--resume-color-border) 11px
      )` : "none"};
  background-size: ${(r) => r.$pattern === "dots" || r.$pattern === "grid" ? "20px 20px" : "auto"};

  @media print {
    display: none;
  }
`;
v.div`
  padding: var(--resume-space-section);
  background-color: ${(r) => r.$color || "var(--resume-color-muted)"};
  border-radius: ${(r) => r.$rounded ? "var(--resume-radius-md)" : "0"};
  margin: ${(r) => r.$margin || "var(--resume-space-section) 0"};
  break-inside: avoid;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    break-inside: avoid;
    page-break-inside: avoid;
  }

  @media (max-width: 768px) {
    padding: var(--resume-space-item);
  }
`;
v.div`
  position: relative;
  z-index: 1;
`;
v.hr`
  border: none;
  margin: ${(r) => r.$spacing || "var(--resume-space-item) 0"};
  height: ${(r) => r.$variant === "thick" ? "3px" : r.$variant === "gradient" ? "2px" : "1px"};
  background: ${(r) => r.$variant === "gradient" ? `linear-gradient(
        to right,
        transparent,
        ${r.$color || "var(--resume-color-border)"},
        transparent
      )` : r.$variant === "dotted" ? `repeating-linear-gradient(
        to right,
        ${r.$color || "var(--resume-color-border)"} 0,
        ${r.$color || "var(--resume-color-border)"} 4px,
        transparent 4px,
        transparent 8px
      )` : r.$variant === "dashed" ? `repeating-linear-gradient(
        to right,
        ${r.$color || "var(--resume-color-border)"} 0,
        ${r.$color || "var(--resume-color-border)"} 12px,
        transparent 12px,
        transparent 20px
      )` : r.$color || "var(--resume-color-border)"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    background: ${(r) => r.$color || "var(--resume-color-border)"};
  }
`;
v.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(r) => r.$spacing || "var(--resume-space-item) 0"};
  gap: var(--resume-space-tight);

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: ${(r) => r.$color || "var(--resume-color-border)"};
  }

  @media print {
    &::before,
    &::after {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;
v.span`
  color: ${(r) => r.$color || "var(--resume-color-accent)"};
  font-size: 16px;
`;
v.div`
  position: relative;
  padding: ${(r) => r.$padding || "var(--resume-space-item)"};
  border: ${(r) => {
  const a = r.$color || "var(--resume-color-accent)";
  return r.$position === "all" ? `2px solid ${a}` : "none";
}};
  border-left: ${(r) => r.$position === "left" || r.$position === "all" ? `4px solid ${r.$color || "var(--resume-color-accent)"}` : "none"};
  border-right: ${(r) => r.$position === "right" ? `4px solid ${r.$color || "var(--resume-color-accent)"}` : "none"};
  border-top: ${(r) => r.$position === "top" || r.$position === "all" ? `4px solid ${r.$color || "var(--resume-color-accent)"}` : "none"};
  border-bottom: ${(r) => r.$position === "bottom" || r.$position === "all" ? `4px solid ${r.$color || "var(--resume-color-accent)"}` : "none"};
  border-radius: ${(r) => r.$rounded ? "var(--resume-radius-md)" : "0"};
  break-inside: avoid;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
v.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-color: ${(r) => r.$color || "var(--resume-color-accent)"};
  border-style: solid;
  border-width: 0;

  ${(r) => {
  if (r.$corner === "top-left")
    return `
        top: -2px;
        left: -2px;
        border-top-width: 3px;
        border-left-width: 3px;
      `;
  if (r.$corner === "top-right")
    return `
        top: -2px;
        right: -2px;
        border-top-width: 3px;
        border-right-width: 3px;
      `;
  if (r.$corner === "bottom-left")
    return `
        bottom: -2px;
        left: -2px;
        border-bottom-width: 3px;
        border-left-width: 3px;
      `;
  if (r.$corner === "bottom-right")
    return `
        bottom: -2px;
        right: -2px;
        border-bottom-width: 3px;
        border-right-width: 3px;
      `;
}}

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
v.div`
  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
v.div`
  @media print {
    ${(r) => r.$type === "page" ? `
          page-break-after: always;
          break-after: page;
        ` : r.$type === "column" ? `
          column-break-after: always;
          break-after: column;
        ` : `
        page-break-after: always;
        break-after: page;
      `}
  }

  @media screen {
    display: none;
  }
`;
v.div`
  display: ${(r) => r.$hideScreen ? "none" : "block"};

  @media print {
    display: block !important;
  }

  @media screen {
    display: ${(r) => r.$hideScreen ? "none !important" : "block"};
  }
`;
v.div`
  @media print {
    display: none !important;
  }
`;
v.div`
  display: none;

  @media print {
    display: block;
    position: running(header);
    padding-bottom: var(--resume-space-xs, 0.5rem);
    border-bottom: 1px solid var(--resume-color-border, #e5e7eb);
    font-size: var(--resume-size-small, 0.875rem);
    color: var(--resume-color-secondary, #6b7280);
  }
`;
v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
v.span`
  font-weight: 600;
  color: var(--resume-color-primary, #111827);
`;
v.div`
  display: none;

  @media print {
    display: block;
    position: running(footer);
    padding-top: var(--resume-space-xs, 0.5rem);
    border-top: 1px solid var(--resume-color-border, #e5e7eb);
    font-size: var(--resume-size-xs, 0.75rem);
    color: var(--resume-color-secondary, #6b7280);
  }
`;
v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
v.span`
  @media print {
    &::before {
      content: 'Page ';
    }
    &::after {
      content: ' of ' counter(pages);
    }
  }
`;
v.span`
  @media print {
    &::before {
      content: counter(page);
    }
  }
`;
v.span`
  font-variant-numeric: tabular-nums;
`;
v.div`
  @media print {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: var(--resume-space-xs, 0.5rem) var(--resume-space-base, 1rem);
    background: var(--resume-color-accent, #f3f4f6);
    border-bottom: 2px solid var(--resume-color-primary, #111827);
    z-index: 1000;

    /* Reserve space for unprintable area */
    margin-top: 0.25in;
  }

  @media screen {
    padding: var(--resume-space-xs, 0.5rem) var(--resume-space-base, 1rem);
    background: var(--resume-color-accent, #f3f4f6);
    border-bottom: 2px solid var(--resume-color-primary, #111827);
  }
`;
v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--resume-size-small, 0.875rem);
`;
v.div`
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--resume-color-primary, #111827);
  font-size: var(--resume-size-base, 1rem);
`;
v.div`
  color: var(--resume-color-secondary, #6b7280);
  font-size: var(--resume-size-small, 0.875rem);
`;
v.div`
  @media print {
    height: 0.75in;
  }

  @media screen {
    height: 3rem;
  }
`;
v.div`
  position: relative;
  background: var(--resume-color-background, #ffffff);
`;
v.div`
  position: relative;
  padding: ${(r) => r.$padding || "var(--resume-space-base, 1rem)"};
  background: var(--resume-color-background, #ffffff);

  /* Primary border */
  border: 1px solid var(--resume-color-border, #e5e7eb);

  /* Shadow emulation using pseudo-element */
  &::after {
    content: '';
    position: absolute;
    top: ${(r) => r.$offset || "4px"};
    left: ${(r) => r.$offset || "4px"};
    right: -${(r) => r.$offset || "4px"};
    bottom: -${(r) => r.$offset || "4px"};
    border: 1px solid ${(r) => r.$shadowColor || "rgba(0, 0, 0, 0.08)"};
    border-radius: inherit;
    z-index: -1;

    @media print {
      /* Ensure shadow prints - use solid light gray */
      border-color: ${(r) => r.$printShadowColor || "#f0f0f0"};
    }
  }
`;
v.span`
  display: inline-block;
  font-size: ${(r) => {
  var a, u, x;
  return ((x = (u = (a = r.theme) == null ? void 0 : a.typography) == null ? void 0 : u.sizes) == null ? void 0 : x.small) || "var(--resume-size-small, 10px)";
}};
  font-weight: ${(r) => {
  var a, u, x;
  return ((x = (u = (a = r.theme) == null ? void 0 : a.typography) == null ? void 0 : u.weights) == null ? void 0 : x.semibold) || "var(--resume-weight-semibold, 600)";
}};
  color: ${(r) => {
  var a, u;
  return r.$color || ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.secondary) || "var(--resume-color-secondary, #4a4a4a)";
}};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1.2;

  @media print {
    font-size: 9pt;
    color: ${(r) => r.$color || "#4a4a4a"};
    letter-spacing: 0.08em;
  }
`;
v.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-size: ${(r) => {
  var a, u, x;
  return ((x = (u = (a = r.theme) == null ? void 0 : a.typography) == null ? void 0 : u.sizes) == null ? void 0 : x.small) || "var(--resume-size-small, 10px)";
}};
  color: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.secondary) || "var(--resume-color-secondary, #4a4a4a)";
}};
  line-height: 1.5;

  /* Ensure 4.5:1 contrast ratio minimum */
  @media screen {
    color: #4a4a4a; /* 9.29:1 contrast on white */
  }

  @media print {
    font-size: 9pt;
    color: #4a4a4a;
    gap: 6px;
  }
`;
v.span`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;

  &:not(:last-child)::after {
    content: '${(r) => r.$separator}';
    margin-left: 8px;
    opacity: 0.6;

    @media print {
      margin-left: 6px;
    }
  }
`;
v.div`
  display: block;
  font-size: ${(r) => {
  var a, u, x;
  return ((x = (u = (a = r.theme) == null ? void 0 : a.typography) == null ? void 0 : u.sizes) == null ? void 0 : x.small) || "var(--resume-size-small, 10px)";
}};
  font-weight: ${(r) => {
  var a, u, x;
  return ((x = (u = (a = r.theme) == null ? void 0 : a.typography) == null ? void 0 : u.weights) == null ? void 0 : x.semibold) || "var(--resume-weight-semibold, 600)";
}};
  color: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.secondary) || "var(--resume-color-secondary, #4a4a4a)";
}};
  margin-bottom: 6px;
  line-height: 1.4;

  /* Tracked uppercase variant */
  ${(r) => r.$variant === "tracked" && `
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-variant: normal;
  `}

  /* Small caps variant */
  ${(r) => r.$variant === "caps" && `
    font-variant: small-caps;
    letter-spacing: 0.05em;
    text-transform: lowercase;
  `}

  @media print {
    font-size: 9pt;
    color: #4a4a4a;
    margin-bottom: 4px;

    ${(r) => r.$variant === "tracked" && `
      text-transform: uppercase;
      letter-spacing: 0.1em;
    `}

    ${(r) => r.$variant === "caps" && `
      font-variant: small-caps;
      letter-spacing: 0.05em;
    `}
  }
`;
v.span`
  display: inline-block;
  font-size: ${(r) => r.$size === "xs" ? "8pt" : "9pt"};
  font-weight: ${(r) => {
  var a, u, x;
  return ((x = (u = (a = r.theme) == null ? void 0 : a.typography) == null ? void 0 : u.weights) == null ? void 0 : x.medium) || "var(--resume-weight-medium, 500)";
}};
  /* Ensure 4.5:1 contrast minimum - #767676 provides 4.54:1 on white */
  color: #767676;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1.3;

  @media print {
    font-size: ${(r) => r.$size === "xs" ? "8pt" : "9pt"};
    color: #767676;
    letter-spacing: 0.08em;
  }
`;
v.h2`
  font-size: ${(r) => r.$size === "sm" ? "11pt" : r.$size === "lg" ? "13pt" : "12pt"};
  font-weight: ${(r) => {
  var a, u, x;
  return ((x = (u = (a = r.theme) == null ? void 0 : a.typography) == null ? void 0 : u.weights) == null ? void 0 : x.semibold) || "var(--resume-weight-semibold, 600)";
}};
  color: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.primary) || "var(--resume-color-primary, #1a1a1a)";
}};
  font-variant: small-caps;
  letter-spacing: 0.06em;
  line-height: 1.3;
  margin: 0 0 12px 0;
  text-transform: lowercase; /* Allows font-variant to work properly */

  @media print {
    font-size: ${(r) => r.$size === "sm" ? "11pt" : r.$size === "lg" ? "13pt" : "12pt"};
    color: #1a1a1a;
    letter-spacing: 0.06em;
    margin: 0 0 10px 0;
    font-variant: small-caps;
    page-break-after: avoid;
  }
`;
v.div`
  background: ${(r) => {
  var a, u, x, d;
  return r.$tint === "accent" ? ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.accentMuted) || "var(--resume-color-accent-muted, rgba(0, 102, 204, 0.06))" : r.$tint === "warm" ? "var(--resume-color-warm-muted, rgba(102, 51, 0, 0.05))" : r.$tint === "cool" ? "var(--resume-color-cool-muted, rgba(0, 51, 102, 0.05))" : ((d = (x = r.theme) == null ? void 0 : x.colors) == null ? void 0 : d.muted) || "var(--resume-color-muted, #f5f5f5)";
}};

  color: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.primary) || "var(--resume-color-primary, #000)";
}};

  padding: ${(r) => r.$padding === "sm" ? "12px" : r.$padding === "lg" ? "24px" : "16px"};

  border-radius: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.radius) == null ? void 0 : u.md) || "var(--resume-radius-md, 6px)";
}};

  margin: ${(r) => r.$margin === "sm" ? "8px 0" : r.$margin === "lg" ? "24px 0" : r.$margin === "none" ? "0" : "16px 0"};

  /* High text contrast for readability */
  line-height: 1.6;
  font-size: 10pt;

  /* Ensure content spacing */
  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }

  @media print {
    /* Use subtle backgrounds that print well */
    background: ${(r) => r.$tint === "accent" ? "rgba(0, 102, 204, 0.05)" : r.$tint === "warm" ? "rgba(102, 51, 0, 0.04)" : r.$tint === "cool" ? "rgba(0, 51, 102, 0.04)" : "#f8f8f8"};

    /* Ensure high contrast text for printing */
    color: #000;

    /* Remove border radius for cleaner print appearance */
    border-radius: 0;

    /* Adjust spacing for print density */
    padding: ${(r) => r.$padding === "sm" ? "10px" : r.$padding === "lg" ? "20px" : "14px"};

    /* Prevent orphaned panels */
    page-break-inside: avoid;
  }
`;
v.div`
  border-left: 4px solid
    ${(r) => {
  var a, u;
  return r.$variant === "success" ? "var(--resume-color-success, #22c55e)" : r.$variant === "warning" ? "var(--resume-color-warning, #f59e0b)" : r.$variant === "info" ? "var(--resume-color-info, #3b82f6)" : ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.accent) || "var(--resume-color-accent, #0066cc)";
}};

  background: ${(r) => {
  var a, u;
  return r.$variant === "success" ? "var(--resume-color-success-light, rgba(34, 197, 94, 0.08))" : r.$variant === "warning" ? "var(--resume-color-warning-light, rgba(245, 158, 11, 0.08))" : r.$variant === "info" ? "var(--resume-color-info-light, rgba(59, 130, 246, 0.08))" : ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.accentLight) || "var(--resume-color-accent-light, rgba(0, 102, 204, 0.08))";
}};

  padding: ${(r) => r.$size === "sm" ? "12px 16px" : "16px 20px"}; /* default md */

  margin: 16px 0;
  border-radius: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.radius) == null ? void 0 : u.md) || "var(--resume-radius-md, 6px)";
}};

  /* Ensure high contrast text, no reversed text */
  color: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.primary) || "var(--resume-color-primary, #000)";
}};

  @media print {
    /* Solid border for print clarity */
    border-left: 3pt solid
      ${(r) => r.$variant === "success" ? "#22c55e" : r.$variant === "warning" ? "#f59e0b" : r.$variant === "info" ? "#3b82f6" : "#0066cc"};

    /* Lighter background for print */
    background: ${(r) => r.$variant === "success" ? "rgba(34, 197, 94, 0.05)" : r.$variant === "warning" ? "rgba(245, 158, 11, 0.05)" : r.$variant === "info" ? "rgba(59, 130, 246, 0.05)" : "rgba(0, 102, 204, 0.05)"};

    /* Remove border radius */
    border-radius: 0;

    /* Ensure black text for maximum contrast */
    color: #000;

    /* Prevent splitting across pages */
    page-break-inside: avoid;
  }
`;
v.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;

  /* Icon styling */
  .callout-icon {
    font-size: 16pt;
    line-height: 1;
  }
`;
v.div`
  /* Bold, larger title for emphasis (as per design constraints) */
  font-size: ${(r) => r.$size === "sm" ? "11pt" : "12pt"};
  font-weight: 700;
  color: ${(r) => {
  var a, u;
  return r.$variant === "success" ? "var(--resume-color-success-dark, #16a34a)" : r.$variant === "warning" ? "var(--resume-color-warning-dark, #d97706)" : r.$variant === "info" ? "var(--resume-color-info-dark, #2563eb)" : ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.accent) || "var(--resume-color-accent, #0066cc)";
}};

  @media print {
    /* Maintain weight and bump size slightly for print */
    font-weight: 700;
    font-size: ${(r) => r.$size === "sm" ? "11pt" : "12pt"};
    color: #000;
  }
`;
v.div`
  font-size: 10pt;
  line-height: 1.6;

  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }

  @media print {
    font-size: 10pt;
    line-height: 1.5;
  }
`;
v.div`
  /* 1pt stroke as specified */
  border: 1px solid
    ${(r) => {
  var a, u, x, d, _, N;
  return r.$variant === "accent" ? ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.accentBorder) || "var(--resume-color-accent-border, #cce5ff)" : r.$variant === "muted" ? ((d = (x = r.theme) == null ? void 0 : x.colors) == null ? void 0 : d.border) || "var(--resume-color-border, #e5e5e5)" : ((N = (_ = r.theme) == null ? void 0 : _.colors) == null ? void 0 : N.borderLight) || "var(--resume-color-border-light, #d4d4d4)";
}};

  /* Rounded corners for softness */
  border-radius: ${(r) => {
  var a, u;
  return r.$rounded === "sm" ? "4px" : r.$rounded === "lg" ? "12px" : ((u = (a = r.theme) == null ? void 0 : a.radius) == null ? void 0 : u.md) || "var(--resume-radius-md, 8px)";
}};

  /* No shadows - clean outline only */
  box-shadow: none;

  /* Padding options */
  padding: ${(r) => r.$padding === "sm" ? "12px" : r.$padding === "lg" ? "24px" : "16px"};

  margin: ${(r) => r.$margin === "sm" ? "8px 0" : r.$margin === "lg" ? "24px 0" : r.$margin === "none" ? "0" : "16px 0"};

  /* Optional subtle background */
  background: ${(r) => {
  var a, u;
  return r.$background === "accent" ? ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.accentMuted) || "var(--resume-color-accent-muted, rgba(0, 102, 204, 0.03))" : r.$background === "muted" ? "var(--resume-color-background-muted, rgba(0, 0, 0, 0.02))" : "transparent";
}};

  /* Text styling */
  color: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.primary) || "var(--resume-color-primary, #000)";
}};

  /* Content spacing */
  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }

  @media print {
    /* Ensure border prints clearly */
    border: 1pt solid
      ${(r) => r.$variant === "accent" ? "#b3d9ff" : r.$variant === "muted" ? "#d4d4d4" : "#c0c0c0"};

    /* Remove border radius for print (cleaner appearance) */
    border-radius: 0;

    /* Remove background fills for print */
    background: transparent;

    /* Ensure high contrast text */
    color: #000;

    /* Adjust padding for print density */
    padding: ${(r) => r.$padding === "sm" ? "10px" : r.$padding === "lg" ? "20px" : "14px"};

    /* Prevent splitting card across pages */
    page-break-inside: avoid;

    /* Ensure no page edge collision */
    margin-left: 0;
    margin-right: 0;
  }
`;
v.div`
  /* Light frame - subtle border */
  border: 1px solid
    ${(r) => {
  var a, u, x, d;
  return r.$variant === "accent" ? ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.accentBorder) || "var(--resume-color-accent-border, #e0e0e0)" : r.$variant === "minimal" ? "transparent" : ((d = (x = r.theme) == null ? void 0 : x.colors) == null ? void 0 : d.borderLight) || "var(--resume-color-border-light, #e5e5e5)";
}};

  /* Optional background tint */
  background: ${(r) => {
  var a, u;
  return r.$variant === "accent" ? ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.accentMuted) || "var(--resume-color-accent-muted, rgba(0, 102, 204, 0.02))" : r.$variant === "tinted" ? "var(--resume-color-background-muted, rgba(0, 0, 0, 0.01))" : "transparent";
}};

  /* Consistent padding to prevent edge collision */
  padding: ${(r) => r.$padding === "sm" ? "12px 16px" : r.$padding === "lg" ? "20px 24px" : "16px 20px"};

  /* Spacing between role blocks */
  margin: ${(r) => r.$spacing === "sm" ? "12px 0" : r.$spacing === "lg" ? "24px 0" : r.$spacing === "none" ? "0" : "16px 0"};

  /* Subtle rounding */
  border-radius: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.radius) == null ? void 0 : u.sm) || "var(--resume-radius-sm, 4px)";
}};

  /* Text styling */
  color: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.primary) || "var(--resume-color-primary, #000)";
}};

  /* Content spacing */
  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }

  /* Ensure proper spacing for nested elements */
  h3,
  h4 {
    margin-bottom: 8px;
  }

  p {
    margin: 4px 0;
  }

  ul,
  ol {
    margin: 8px 0;
    padding-left: 20px;
  }

  li {
    margin: 4px 0;
  }

  @media print {
    /* Ensure border prints clearly */
    border: ${(r) => r.$variant === "minimal" ? "none" : r.$variant === "accent" ? "0.5pt solid #d0d0d0" : "0.5pt solid #e0e0e0"};

    /* Remove background for clean print */
    background: transparent;

    /* Remove border radius for print */
    border-radius: 0;

    /* Adjust padding for print density */
    padding: ${(r) => r.$padding === "sm" ? "10px 12px" : r.$padding === "lg" ? "16px 20px" : "12px 16px"};

    /* Prevent page edge collision - ensure margins */
    margin-left: 0;
    margin-right: 0;

    /* Prevent splitting role blocks across pages */
    page-break-inside: avoid;

    /* Add small gap after each block for readability */
    margin-bottom: ${(r) => r.$spacing === "sm" ? "10px" : r.$spacing === "lg" ? "20px" : r.$spacing === "none" ? "0" : "14px"};

    /* Ensure high contrast text */
    color: #000;

    /* Optimize nested element spacing for print */
    h3,
    h4 {
      margin-bottom: 6px;
    }

    ul,
    ol {
      margin: 6px 0;
    }

    li {
      margin: 3px 0;
    }
  }
`;
v.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: ${(r) => r.$size === "small" ? "6px" : "8px"};
  margin: ${(r) => r.$size === "small" ? "4px 0" : "6px 0"};
  line-height: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.typography) == null ? void 0 : u.lineHeight) || "var(--resume-line-height, 1.5)";
}};

  @media print {
    gap: ${(r) => r.$size === "small" ? "4px" : "6px"};
    margin: 3pt 0;
  }
`;
v.span`
  display: inline-block;
  font-size: ${(r) => r.$size === "small" ? "8.5pt" : r.$size === "large" ? "10.5pt" : "9.5pt"};
  font-weight: 500;
  color: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.secondary) || "var(--resume-color-secondary, #444444)";
}};
  white-space: nowrap;

  /* Preserve baseline grid */
  vertical-align: baseline;

  @media print {
    color: #444444;
    font-size: ${(r) => r.$size === "small" ? "8pt" : r.$size === "large" ? "10pt" : "9pt"};
  }
`;
v.span`
  display: inline-block;
  font-size: ${(r) => r.$size === "small" ? "8.5pt" : r.$size === "large" ? "10.5pt" : "9.5pt"};
  color: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.border) || "var(--resume-color-border, #cccccc)";
}};
  user-select: none;
  vertical-align: baseline;

  @media print {
    color: #cccccc;
  }
`;
v.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(r) => r.$size === "small" ? "6px" : "8px"};
  margin: ${(r) => r.$size === "small" ? "6px 0" : "8px 0"};

  @media print {
    gap: ${(r) => r.$size === "small" ? "4px" : "6px"};
    margin: 4pt 0;
  }
`;
v.span`
  display: inline-flex;
  align-items: center;
  padding: ${(r) => r.$size === "small" ? "3px 10px" : r.$size === "large" ? "7px 16px" : "5px 12px"};
  border: ${(r) => r.$strokeWidth || "0.5pt"} solid
    ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.border) || "var(--resume-color-border, #666666)";
}};
  border-radius: ${(r) => {
  var a, u;
  return r.$rounded ? "999px" : ((u = (a = r.theme) == null ? void 0 : a.radius) == null ? void 0 : u.sm) || "var(--resume-radius-sm, 4px)";
}};
  font-size: ${(r) => r.$size === "small" ? "8.5pt" : r.$size === "large" ? "10.5pt" : "9.5pt"};
  font-weight: 500;
  color: ${(r) => {
  var a, u;
  return ((u = (a = r.theme) == null ? void 0 : a.colors) == null ? void 0 : u.primary) || "var(--resume-color-primary, #000000)";
}};
  background: transparent;
  white-space: nowrap;
  line-height: 1.2;

  /* Prevent scalloping on low-DPI displays */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media print {
    /* Ensure minimum stroke width for print clarity */
    border-width: ${(r) => r.$strokeWidth || "0.5pt"};
    border-color: #666666;
    color: #000000;
    padding: ${(r) => r.$size === "small" ? "2pt 8pt" : r.$size === "large" ? "5pt 12pt" : "3pt 10pt"};
    font-size: ${(r) => r.$size === "small" ? "8pt" : r.$size === "large" ? "10pt" : "9pt"};

    /* Force exact colors for print */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
const cf = v.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px 16px;
`, df = v.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`, ff = v.div`
  font-size: var(--resume-size-body, 11px);
  font-weight: 600;
`, pf = v.div`
  font-size: var(--resume-size-small, 10px);
  color: var(--resume-color-secondary, #475569);
`, hf = v.span`
  display: inline-block;
  font-size: 9px;
  font-weight: 700;
  color: var(--resume-color-accent, #0369a1);
  letter-spacing: 0.03em;
`, mf = v.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px 20px;
`, vf = v.div`
  padding: 8px 0;
`, gf = v.div`
  font-weight: 600;
  font-size: var(--resume-size-body, 11pt);
  color: var(--resume-color-primary, #000);
  margin-bottom: 2px;
`, yf = v.div`
  font-size: 0.85em;
  color: var(--resume-color-tertiary, #666);
  margin-bottom: 2px;
`, bf = v.div`
  font-size: 0.9em;
  color: var(--resume-color-secondary, #333);
  line-height: 1.5;
`, xf = v.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 10px 12px;
  margin-bottom: 10px;
  border-left: 3px solid var(--resume-color-accent, #0369a1);
  background: #f0f9ff;
`, wf = v.div`
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--resume-color-accent, #0066cc);
  white-space: nowrap;
  padding-top: 2px;
`, Sf = v.div`
  flex: 1;
`, kf = v.div`
  font-weight: 700;
  font-size: var(--resume-size-body, 11pt);
  color: var(--resume-color-primary, #000);
  margin-bottom: 2px;
`, Ef = v.div`
  font-size: 0.85em;
  color: var(--resume-color-secondary, #555);
  margin-bottom: 4px;
`, Cf = v.div`
  font-size: 0.9em;
  color: var(--resume-color-secondary, #333);
  line-height: 1.5;
`, Tf = {
  native: "Native",
  bilingual: "Native",
  "full professional": "C1",
  "professional working": "B2",
  intermediate: "B1",
  "limited working": "A2",
  elementary: "A2",
  beginner: "A1"
};
function Rf(r = "") {
  return Tf[r.toLowerCase()] ?? null;
}
const $f = v.div`
  max-width: var(--resume-max-width, 660px);
  margin: 0 auto;
  padding: 40px 20px;
  font-family: var(
    --resume-font-sans,
    'Helvetica Neue',
    Helvetica,
    Arial,
    sans-serif
  );
  font-size: var(--resume-size-body, 11px);
  line-height: 1.5;
  color: var(--resume-color-primary, #0f172a);

  .resume-section-title {
    font-size: var(--resume-size-heading, 13px);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .resume-item-title {
    font-size: var(--resume-size-body, 11px);
  }

  .resume-item-subtitle {
    font-size: 0.9em;
  }

  .resume-item-meta {
    font-size: var(--resume-size-small, 10px);
  }

  .resume-highlights li {
    font-size: var(--resume-size-small, 10px);
  }

  a {
    color: var(--resume-color-accent, #0369a1);
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`, _f = v.header`
  text-align: center;
  margin-bottom: var(--resume-space-section, 2rem);
`, Pf = v.h1`
  font-size: var(--resume-size-name, 28px);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 6px 0;
  color: var(--resume-color-primary, #0f172a);
`, If = v.p`
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--resume-color-secondary, #475569);
  margin: 0 0 12px 0;
`, zf = v.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  font-size: var(--resume-size-small, 10px);
  color: var(--resume-color-secondary, #475569);
`, Af = v.p`
  text-align: center;
  margin: 8px 0;
  font-size: 0.9em;
  color: var(--resume-color-secondary, #333);
`, Df = v.div`
  margin-bottom: 12px;

  strong {
    margin-right: 8px;
  }
`;
function Of({ resume: r }) {
  var se;
  const {
    basics: a = {},
    work: u = [],
    education: x = [],
    skills: d = [],
    volunteer: _ = [],
    awards: N = [],
    publications: V = [],
    languages: E = [],
    interests: R = [],
    references: te = [],
    projects: O = []
  } = r;
  return /* @__PURE__ */ oe.jsxs($f, { children: [
    a && /* @__PURE__ */ oe.jsxs(_f, { children: [
      /* @__PURE__ */ oe.jsx(Pf, { children: a.name }),
      a.label && /* @__PURE__ */ oe.jsx(If, { children: a.label }),
      /* @__PURE__ */ oe.jsxs(zf, { children: [
        a.email && /* @__PURE__ */ oe.jsx("a", { href: oa(`mailto:${a.email}`), children: a.email }),
        a.phone && /* @__PURE__ */ oe.jsx("span", { children: a.phone }),
        a.url && /* @__PURE__ */ oe.jsx(
          "a",
          {
            href: oa(a.url),
            target: "_blank",
            rel: Xs(a.url, !0),
            children: a.url
          }
        ),
        a.location && /* @__PURE__ */ oe.jsx("span", { children: [
          a.location.city,
          a.location.region,
          a.location.countryCode
        ].filter(Boolean).join(", ") }),
        (se = a.profiles) == null ? void 0 : se.map((B) => {
          const K = oa(B.url);
          return K && /* @__PURE__ */ oe.jsx(
            "a",
            {
              href: K,
              target: "_blank",
              rel: Xs(K, !0),
              children: B.network
            },
            B.network
          );
        })
      ] }),
      a.summary && /* @__PURE__ */ oe.jsx(Af, { children: a.summary })
    ] }),
    u.length > 0 && /* @__PURE__ */ oe.jsxs(Fn, { id: "work", children: [
      /* @__PURE__ */ oe.jsx(jn, { children: "Work Experience" }),
      u.map((B, K) => /* @__PURE__ */ oe.jsx(
        Xi,
        {
          title: B.position,
          subtitle: B.name,
          dateRange: B.startDate ? /* @__PURE__ */ oe.jsx(Gs, { startDate: B.startDate, endDate: B.endDate }) : null,
          location: B.location,
          description: B.summary,
          highlights: B.highlights
        },
        K
      ))
    ] }),
    x.length > 0 && /* @__PURE__ */ oe.jsxs(Fn, { id: "education", children: [
      /* @__PURE__ */ oe.jsx(jn, { children: "Education" }),
      x.map((B, K) => {
        const be = [B.studyType, B.area].filter(Boolean).join(" in "), Z = [
          B.score ? `GPA: ${B.score}` : "",
          ...B.courses || []
        ].filter(Boolean);
        return /* @__PURE__ */ oe.jsx(
          Xi,
          {
            title: be || B.institution,
            subtitle: be ? B.institution : "",
            dateRange: B.startDate ? /* @__PURE__ */ oe.jsx(
              Gs,
              {
                startDate: B.startDate,
                endDate: B.endDate
              }
            ) : null,
            highlights: Z.length > 0 ? Z : void 0
          },
          K
        );
      })
    ] }),
    d.length > 0 && /* @__PURE__ */ oe.jsxs(Fn, { id: "skills", children: [
      /* @__PURE__ */ oe.jsx(jn, { children: "Skills" }),
      d.map((B, K) => /* @__PURE__ */ oe.jsxs(Df, { children: [
        B.name && /* @__PURE__ */ oe.jsxs("strong", { children: [
          B.name,
          ":"
        ] }),
        /* @__PURE__ */ oe.jsx(du, { items: B.keywords, variant: "default" })
      ] }, K))
    ] }),
    V.length > 0 && /* @__PURE__ */ oe.jsxs(Fn, { id: "publications", children: [
      /* @__PURE__ */ oe.jsx(jn, { children: "Publications" }),
      V.map((B, K) => /* @__PURE__ */ oe.jsxs(xf, { children: [
        /* @__PURE__ */ oe.jsx(wf, { children: "Published" }),
        /* @__PURE__ */ oe.jsxs(Sf, { children: [
          /* @__PURE__ */ oe.jsx(kf, { children: B.url && oa(B.url) ? /* @__PURE__ */ oe.jsx(
            "a",
            {
              href: oa(B.url),
              target: "_blank",
              rel: Xs(B.url, !0),
              style: { color: "inherit", textDecoration: "none" },
              children: B.name
            }
          ) : B.name }),
          /* @__PURE__ */ oe.jsx(Ef, { children: [B.publisher, B.releaseDate].filter(Boolean).join(" · ") }),
          B.summary && /* @__PURE__ */ oe.jsx(Cf, { children: B.summary })
        ] })
      ] }, K))
    ] }),
    O.length > 0 && /* @__PURE__ */ oe.jsxs(Fn, { id: "projects", children: [
      /* @__PURE__ */ oe.jsx(jn, { children: "Projects" }),
      /* @__PURE__ */ oe.jsx(mf, { children: O.map((B, K) => /* @__PURE__ */ oe.jsxs(vf, { children: [
        /* @__PURE__ */ oe.jsx(gf, { children: B.url && oa(B.url) ? /* @__PURE__ */ oe.jsx(
          "a",
          {
            href: oa(B.url),
            target: "_blank",
            rel: Xs(B.url, !0),
            style: { color: "inherit", textDecoration: "none" },
            children: B.name
          }
        ) : B.name }),
        B.startDate && /* @__PURE__ */ oe.jsx(yf, { children: /* @__PURE__ */ oe.jsx(Gs, { startDate: B.startDate, endDate: B.endDate }) }),
        B.description && /* @__PURE__ */ oe.jsx(bf, { children: B.description }),
        B.keywords && B.keywords.length > 0 && /* @__PURE__ */ oe.jsx(du, { items: B.keywords, variant: "accent" })
      ] }, K)) })
    ] }),
    _.length > 0 && /* @__PURE__ */ oe.jsxs(Fn, { id: "volunteer", children: [
      /* @__PURE__ */ oe.jsx(jn, { children: "Volunteer Experience" }),
      _.map((B, K) => /* @__PURE__ */ oe.jsx(
        Xi,
        {
          title: B.position,
          subtitle: B.organization,
          dateRange: B.startDate ? /* @__PURE__ */ oe.jsx(Gs, { startDate: B.startDate, endDate: B.endDate }) : null,
          description: B.summary,
          highlights: B.highlights
        },
        K
      ))
    ] }),
    N.length > 0 && /* @__PURE__ */ oe.jsxs(Fn, { id: "awards", children: [
      /* @__PURE__ */ oe.jsx(jn, { children: "Awards & Honors" }),
      N.map((B, K) => /* @__PURE__ */ oe.jsx(
        Xi,
        {
          title: B.title,
          subtitle: B.awarder,
          dateRange: B.date,
          description: B.summary
        },
        K
      ))
    ] }),
    E.length > 0 && /* @__PURE__ */ oe.jsxs(Fn, { id: "languages", children: [
      /* @__PURE__ */ oe.jsx(jn, { children: "Languages" }),
      /* @__PURE__ */ oe.jsx(cf, { children: E.map((B, K) => {
        const be = Rf(B.fluency);
        return /* @__PURE__ */ oe.jsxs(df, { children: [
          /* @__PURE__ */ oe.jsx(ff, { children: B.language }),
          B.fluency && /* @__PURE__ */ oe.jsxs(pf, { children: [
            B.fluency,
            be && be.toLowerCase() !== B.fluency.toLowerCase() && /* @__PURE__ */ oe.jsxs(hf, { children: [
              " · ",
              be
            ] })
          ] })
        ] }, K);
      }) })
    ] }),
    R.length > 0 && /* @__PURE__ */ oe.jsxs(Fn, { id: "interests", children: [
      /* @__PURE__ */ oe.jsx(jn, { children: "Interests" }),
      /* @__PURE__ */ oe.jsx(
        du,
        {
          items: R.flatMap((B) => B.keywords || []),
          variant: "default"
        }
      )
    ] }),
    te.length > 0 && /* @__PURE__ */ oe.jsxs(Fn, { id: "references", children: [
      /* @__PURE__ */ oe.jsx(jn, { children: "References" }),
      te.map((B, K) => /* @__PURE__ */ oe.jsx(
        Xi,
        {
          title: B.name,
          description: B.reference
        },
        K
      ))
    ] })
  ] });
}
function Ff(r, a = {}) {
  var E;
  const {
    locale: u = "en",
    dir: x = "ltr",
    title: d = ((E = r.basics) == null ? void 0 : E.name) || "Resume",
    theme: _ = "default",
    structured: N = !1
  } = a, V = new Gd();
  try {
    const R = Mc(
      V.collectStyles(/* @__PURE__ */ oe.jsx(Of, { resume: r }))
    ), te = V.getStyleTags(), O = `
    /*
     * Global Styles
     * Base styles that complement @resume/core design tokens
     */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: #fff;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    @media print {
      body {
        background: #fff;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    }

    /* Smaller skill badges */
    .resume-badge {
      font-size: 8px !important;
      padding: 1px 5px !important;
      line-height: 1.4 !important;
    }

    /* Smaller highlights */
    .resume-highlights li {
      font-size: 9.5px !important;
      line-height: 1.4 !important;
      margin: 2px 0 !important;
    }
  `, B = `
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${d}</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- Design Tokens (inlined) -->
  <style>
    
    :root {
      --resume-font-sans: "Inter", "Helvetica Neue", Arial, sans-serif;
      --resume-font-serif: Cambria, Georgia, "Times New Roman", serif;
      --resume-font-mono: "Courier New", Courier, monospace;

      --resume-size-name: 28px;
      --resume-size-heading: 13px;
      --resume-size-subheading: 13px;
      --resume-size-body: 11px;
      --resume-size-small: 10px;

      --resume-weight-normal: 400;
      --resume-weight-medium: 500;
      --resume-weight-semibold: 600;
      --resume-weight-bold: 700;

      --resume-line-height-tight: 1.2;
      --resume-line-height-normal: 1.5;
      --resume-line-height-relaxed: 1.75;

      --resume-color-primary: #0f172a;
      --resume-color-secondary: #475569;
      --resume-color-tertiary: #64748b;
      --resume-color-accent: #0369a1;
      --resume-color-background: #ffffff;
      --resume-color-border: #e2e8f0;

      --resume-space-section: 24px;
      --resume-space-item: 16px;
      --resume-space-tight: 8px;
      --resume-space-margin: 48px;

      --resume-max-width: 660px;
      --resume-column-gap: 24px;

      --resume-radius-sm: 4px;
      --resume-radius-md: 8px;
      --resume-radius-lg: 12px;

      --resume-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      --resume-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    [data-theme="modern"] {
      --resume-color-primary: #0f172a;
      --resume-color-secondary: #475569;
      --resume-color-accent: #8b5cf6;
      --resume-font-sans: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
    }

    [data-theme="classic"] {
      --resume-color-primary: #000000;
      --resume-color-secondary: #333333;
      --resume-color-accent: #0066cc;
      --resume-font-sans: Georgia, "Times New Roman", serif;
    }

    [data-theme="minimal"] {
      --resume-color-primary: #18181b;
      --resume-color-secondary: #71717a;
      --resume-color-accent: #000000;
      --resume-space-section: 32px;
      --resume-space-item: 20px;
    }

    [data-theme="high-contrast"] {
      --resume-color-primary: #000000;
      --resume-color-secondary: #000000;
      --resume-color-accent: #0000ff;
      --resume-color-background: #ffffff;
      --resume-color-border: #000000;
    }

    @media print {
      :root {
        --resume-space-section: 18px;
        --resume-space-item: 12px;
      }

      .resume-section {
        page-break-inside: avoid;
      }

      .resume-item {
        break-inside: avoid;
      }

      p, li {
        widows: 3;
        orphans: 3;
      }

      .resume-description {
        hyphens: auto;
      }

      .no-print {
        display: none !important;
      }
    }

    [dir="rtl"] {
      text-align: right;
    }

    [dir="rtl"] .resume-item {
      padding-left: 0;
      padding-right: var(--resume-space-tight);
    }
  
  </style>

  <!-- Styled Components CSS -->
  ${te}

  <style>
    ${O}
  </style>
`;
    return N ? {
      html: `<!DOCTYPE html>
<html lang="${u}" dir="${x}"${_ !== "default" ? ` data-theme="${_}"` : ""}>
<head>${B}</head>
<body>
  ${R}
</body>
</html>`,
      head: B,
      body: R,
      css: te,
      globalStyles: O,
      locale: u,
      dir: x,
      theme: _
    } : `<!DOCTYPE html>
<html lang="${u}" dir="${x}"${_ !== "default" ? ` data-theme="${_}"` : ""}>
<head>${B}</head>
<body>
  ${R}
</body>
</html>`;
  } finally {
    V.seal();
  }
}
const jf = { render: Ff };
export {
  Of as Resume,
  jf as default,
  Ff as render
};
