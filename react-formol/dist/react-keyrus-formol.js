import oe, { createContext as Ur, useCallback as ft, useContext as ae, useMemo as $r, useState as dt, useEffect as yt } from "react";
import c from "prop-types";
var hr = { exports: {} }, We = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kr;
function gt() {
  if (kr)
    return We;
  kr = 1;
  var e = oe, a = Symbol.for("react.element"), n = Symbol.for("react.fragment"), t = Object.prototype.hasOwnProperty, l = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(m, h, A) {
    var S, E = {}, _ = null, O = null;
    A !== void 0 && (_ = "" + A), h.key !== void 0 && (_ = "" + h.key), h.ref !== void 0 && (O = h.ref);
    for (S in h)
      t.call(h, S) && !i.hasOwnProperty(S) && (E[S] = h[S]);
    if (m && m.defaultProps)
      for (S in h = m.defaultProps, h)
        E[S] === void 0 && (E[S] = h[S]);
    return { $$typeof: a, type: m, key: _, ref: O, props: E, _owner: l.current };
  }
  return We.Fragment = n, We.jsx = d, We.jsxs = d, We;
}
var Ye = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vr;
function vt() {
  return Vr || (Vr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = oe, a = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), m = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), P = Symbol.iterator, re = "@@iterator";
    function Ae(r) {
      if (r === null || typeof r != "object")
        return null;
      var f = P && r[P] || r[re];
      return typeof f == "function" ? f : null;
    }
    var le = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(r) {
      {
        for (var f = arguments.length, v = new Array(f > 1 ? f - 1 : 0), C = 1; C < f; C++)
          v[C - 1] = arguments[C];
        z("error", r, v);
      }
    }
    function z(r, f, v) {
      {
        var C = le.ReactDebugCurrentFrame, D = C.getStackAddendum();
        D !== "" && (f += "%s", v = v.concat([D]));
        var N = v.map(function(k) {
          return String(k);
        });
        N.unshift("Warning: " + f), Function.prototype.apply.call(console[r], console, N);
      }
    }
    var te = !1, U = !1, Re = !1, be = !1, qe = !1, X;
    X = Symbol.for("react.module.reference");
    function fe(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === t || r === i || qe || r === l || r === A || r === S || be || r === O || te || U || Re || typeof r == "object" && r !== null && (r.$$typeof === _ || r.$$typeof === E || r.$$typeof === d || r.$$typeof === m || r.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === X || r.getModuleId !== void 0));
    }
    function se(r, f, v) {
      var C = r.displayName;
      if (C)
        return C;
      var D = f.displayName || f.name || "";
      return D !== "" ? v + "(" + D + ")" : v;
    }
    function V(r) {
      return r.displayName || "Context";
    }
    function w(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case t:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case l:
          return "StrictMode";
        case A:
          return "Suspense";
        case S:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case m:
            var f = r;
            return V(f) + ".Consumer";
          case d:
            var v = r;
            return V(v._context) + ".Provider";
          case h:
            return se(r, r.render, "ForwardRef");
          case E:
            var C = r.displayName || null;
            return C !== null ? C : w(r.type) || "Memo";
          case _: {
            var D = r, N = D._payload, k = D._init;
            try {
              return w(k(N));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, $ = 0, G, Z, ue, pe, me, Le, Ie;
    function Ke() {
    }
    Ke.__reactDisabledLog = !0;
    function ze() {
      {
        if ($ === 0) {
          G = console.log, Z = console.info, ue = console.warn, pe = console.error, me = console.group, Le = console.groupCollapsed, Ie = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Ke,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        $++;
      }
    }
    function ar() {
      {
        if ($--, $ === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, r, {
              value: G
            }),
            info: j({}, r, {
              value: Z
            }),
            warn: j({}, r, {
              value: ue
            }),
            error: j({}, r, {
              value: pe
            }),
            group: j({}, r, {
              value: me
            }),
            groupCollapsed: j({}, r, {
              value: Le
            }),
            groupEnd: j({}, r, {
              value: Ie
            })
          });
        }
        $ < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ee = le.ReactCurrentDispatcher, Fe;
    function _e(r, f, v) {
      {
        if (Fe === void 0)
          try {
            throw Error();
          } catch (D) {
            var C = D.stack.trim().match(/\n( *(at )?)/);
            Fe = C && C[1] || "";
          }
        return `
` + Fe + r;
      }
    }
    var ke = !1, Ce;
    {
      var ir = typeof WeakMap == "function" ? WeakMap : Map;
      Ce = new ir();
    }
    function Me(r, f) {
      if (!r || ke)
        return "";
      {
        var v = Ce.get(r);
        if (v !== void 0)
          return v;
      }
      var C;
      ke = !0;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var N;
      N = Ee.current, Ee.current = null, ze();
      try {
        if (f) {
          var k = function() {
            throw Error();
          };
          if (Object.defineProperty(k.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(k, []);
            } catch (ye) {
              C = ye;
            }
            Reflect.construct(r, [], k);
          } else {
            try {
              k.call();
            } catch (ye) {
              C = ye;
            }
            r.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ye) {
            C = ye;
          }
          r();
        }
      } catch (ye) {
        if (ye && C && typeof ye.stack == "string") {
          for (var F = ye.stack.split(`
`), J = C.stack.split(`
`), M = F.length - 1, B = J.length - 1; M >= 1 && B >= 0 && F[M] !== J[B]; )
            B--;
          for (; M >= 1 && B >= 0; M--, B--)
            if (F[M] !== J[B]) {
              if (M !== 1 || B !== 1)
                do
                  if (M--, B--, B < 0 || F[M] !== J[B]) {
                    var Q = `
` + F[M].replace(" at new ", " at ");
                    return r.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", r.displayName)), typeof r == "function" && Ce.set(r, Q), Q;
                  }
                while (M >= 1 && B >= 0);
              break;
            }
        }
      } finally {
        ke = !1, Ee.current = N, ar(), Error.prepareStackTrace = D;
      }
      var Pe = r ? r.displayName || r.name : "", Fr = Pe ? _e(Pe) : "";
      return typeof r == "function" && Ce.set(r, Fr), Fr;
    }
    function Xe(r, f, v) {
      return Me(r, !1);
    }
    function Rr(r) {
      var f = r.prototype;
      return !!(f && f.isReactComponent);
    }
    function Ue(r, f, v) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Me(r, Rr(r));
      if (typeof r == "string")
        return _e(r);
      switch (r) {
        case A:
          return _e("Suspense");
        case S:
          return _e("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case h:
            return Xe(r.render);
          case E:
            return Ue(r.type, f, v);
          case _: {
            var C = r, D = C._payload, N = C._init;
            try {
              return Ue(N(D), f, v);
            } catch {
            }
          }
        }
      return "";
    }
    var $e = Object.prototype.hasOwnProperty, s = {}, u = le.ReactDebugCurrentFrame;
    function o(r) {
      if (r) {
        var f = r._owner, v = Ue(r.type, r._source, f ? f.type : null);
        u.setExtraStackFrame(v);
      } else
        u.setExtraStackFrame(null);
    }
    function b(r, f, v, C, D) {
      {
        var N = Function.call.bind($e);
        for (var k in r)
          if (N(r, k)) {
            var F = void 0;
            try {
              if (typeof r[k] != "function") {
                var J = Error((C || "React class") + ": " + v + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw J.name = "Invariant Violation", J;
              }
              F = r[k](f, k, C, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (M) {
              F = M;
            }
            F && !(F instanceof Error) && (o(D), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", C || "React class", v, k, typeof F), o(null)), F instanceof Error && !(F.message in s) && (s[F.message] = !0, o(D), R("Failed %s type: %s", v, F.message), o(null));
          }
      }
    }
    var g = Array.isArray;
    function y(r) {
      return g(r);
    }
    function x(r) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, v = f && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return v;
      }
    }
    function q(r) {
      try {
        return L(r), !1;
      } catch {
        return !0;
      }
    }
    function L(r) {
      return "" + r;
    }
    function de(r) {
      if (q(r))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", x(r)), L(r);
    }
    var we = le.ReactCurrentOwner, Be = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ve, Ze, De;
    De = {};
    function lr(r) {
      if ($e.call(r, "ref")) {
        var f = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function Qe(r) {
      if ($e.call(r, "key")) {
        var f = Object.getOwnPropertyDescriptor(r, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function Zr(r, f) {
      if (typeof r.ref == "string" && we.current && f && we.current.stateNode !== f) {
        var v = w(we.current.type);
        De[v] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(we.current.type), r.ref), De[v] = !0);
      }
    }
    function Qr(r, f) {
      {
        var v = function() {
          Ve || (Ve = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        v.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: v,
          configurable: !0
        });
      }
    }
    function et(r, f) {
      {
        var v = function() {
          Ze || (Ze = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        v.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var rt = function(r, f, v, C, D, N, k) {
      var F = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: r,
        key: f,
        ref: v,
        props: k,
        // Record the component responsible for creating this element.
        _owner: N
      };
      return F._store = {}, Object.defineProperty(F._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(F, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.defineProperty(F, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.freeze && (Object.freeze(F.props), Object.freeze(F)), F;
    };
    function tt(r, f, v, C, D) {
      {
        var N, k = {}, F = null, J = null;
        v !== void 0 && (de(v), F = "" + v), Qe(f) && (de(f.key), F = "" + f.key), lr(f) && (J = f.ref, Zr(f, D));
        for (N in f)
          $e.call(f, N) && !Be.hasOwnProperty(N) && (k[N] = f[N]);
        if (r && r.defaultProps) {
          var M = r.defaultProps;
          for (N in M)
            k[N] === void 0 && (k[N] = M[N]);
        }
        if (F || J) {
          var B = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          F && Qr(k, B), J && et(k, B);
        }
        return rt(r, F, J, D, C, we.current, k);
      }
    }
    var ur = le.ReactCurrentOwner, Er = le.ReactDebugCurrentFrame;
    function je(r) {
      if (r) {
        var f = r._owner, v = Ue(r.type, r._source, f ? f.type : null);
        Er.setExtraStackFrame(v);
      } else
        Er.setExtraStackFrame(null);
    }
    var or;
    or = !1;
    function cr(r) {
      return typeof r == "object" && r !== null && r.$$typeof === a;
    }
    function Cr() {
      {
        if (ur.current) {
          var r = w(ur.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function st(r) {
      {
        if (r !== void 0) {
          var f = r.fileName.replace(/^.*[\\\/]/, ""), v = r.lineNumber;
          return `

Check your code at ` + f + ":" + v + ".";
        }
        return "";
      }
    }
    var wr = {};
    function nt(r) {
      {
        var f = Cr();
        if (!f) {
          var v = typeof r == "string" ? r : r.displayName || r.name;
          v && (f = `

Check the top-level render call using <` + v + ">.");
        }
        return f;
      }
    }
    function Tr(r, f) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var v = nt(f);
        if (wr[v])
          return;
        wr[v] = !0;
        var C = "";
        r && r._owner && r._owner !== ur.current && (C = " It was passed a child from " + w(r._owner.type) + "."), je(r), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, C), je(null);
      }
    }
    function Sr(r, f) {
      {
        if (typeof r != "object")
          return;
        if (y(r))
          for (var v = 0; v < r.length; v++) {
            var C = r[v];
            cr(C) && Tr(C, f);
          }
        else if (cr(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var D = Ae(r);
          if (typeof D == "function" && D !== r.entries)
            for (var N = D.call(r), k; !(k = N.next()).done; )
              cr(k.value) && Tr(k.value, f);
        }
      }
    }
    function at(r) {
      {
        var f = r.type;
        if (f == null || typeof f == "string")
          return;
        var v;
        if (typeof f == "function")
          v = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === E))
          v = f.propTypes;
        else
          return;
        if (v) {
          var C = w(f);
          b(v, r.props, "prop", C, r);
        } else if (f.PropTypes !== void 0 && !or) {
          or = !0;
          var D = w(f);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function it(r) {
      {
        for (var f = Object.keys(r.props), v = 0; v < f.length; v++) {
          var C = f[v];
          if (C !== "children" && C !== "key") {
            je(r), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", C), je(null);
            break;
          }
        }
        r.ref !== null && (je(r), R("Invalid attribute `ref` supplied to `React.Fragment`."), je(null));
      }
    }
    function Ar(r, f, v, C, D, N) {
      {
        var k = fe(r);
        if (!k) {
          var F = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (F += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = st(D);
          J ? F += J : F += Cr();
          var M;
          r === null ? M = "null" : y(r) ? M = "array" : r !== void 0 && r.$$typeof === a ? (M = "<" + (w(r.type) || "Unknown") + " />", F = " Did you accidentally export a JSX literal instead of a component?") : M = typeof r, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", M, F);
        }
        var B = tt(r, f, v, D, N);
        if (B == null)
          return B;
        if (k) {
          var Q = f.children;
          if (Q !== void 0)
            if (C)
              if (y(Q)) {
                for (var Pe = 0; Pe < Q.length; Pe++)
                  Sr(Q[Pe], r);
                Object.freeze && Object.freeze(Q);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Sr(Q, r);
        }
        return r === t ? it(B) : at(B), B;
      }
    }
    function lt(r, f, v) {
      return Ar(r, f, v, !0);
    }
    function ut(r, f, v) {
      return Ar(r, f, v, !1);
    }
    var ot = ut, ct = lt;
    Ye.Fragment = t, Ye.jsx = ot, Ye.jsxs = ct;
  }()), Ye;
}
process.env.NODE_ENV === "production" ? hr.exports = gt() : hr.exports = vt();
var T = hr.exports, Ge = (e) => e.type === "checkbox", Oe = (e) => e instanceof Date, K = (e) => e == null;
const Br = (e) => typeof e == "object";
var Y = (e) => !K(e) && !Array.isArray(e) && Br(e) && !Oe(e), ht = (e) => Y(e) && e.target ? Ge(e.target) ? e.target.checked : e.target.value : e, bt = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, pt = (e, a) => e.has(bt(a)), mt = (e) => {
  const a = e.constructor && e.constructor.prototype;
  return Y(a) && a.hasOwnProperty("isPrototypeOf");
}, pr = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function ve(e) {
  let a;
  const n = Array.isArray(e);
  if (e instanceof Date)
    a = new Date(e);
  else if (e instanceof Set)
    a = new Set(e);
  else if (!(pr && (e instanceof Blob || e instanceof FileList)) && (n || Y(e)))
    if (a = n ? [] : {}, !n && !mt(e))
      a = e;
    else
      for (const t in e)
        e.hasOwnProperty(t) && (a[t] = ve(e[t]));
  else
    return e;
  return a;
}
var Je = (e) => Array.isArray(e) ? e.filter(Boolean) : [], W = (e) => e === void 0, p = (e, a, n) => {
  if (!a || !Y(e))
    return n;
  const t = Je(a.split(/[,[\].]+?/)).reduce((l, i) => K(l) ? l : l[i], e);
  return W(t) || t === e ? W(e[a]) ? n : e[a] : t;
};
const Dr = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, ne = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, ge = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
};
oe.createContext(null);
var _t = (e, a, n, t = !0) => {
  const l = {
    defaultValues: a._defaultValues
  };
  for (const i in e)
    Object.defineProperty(l, i, {
      get: () => {
        const d = i;
        return a._proxyFormState[d] !== ne.all && (a._proxyFormState[d] = !t || ne.all), n && (n[d] = !0), e[d];
      }
    });
  return l;
}, ee = (e) => Y(e) && !Object.keys(e).length, xt = (e, a, n, t) => {
  n(e);
  const { name: l, ...i } = e;
  return ee(i) || Object.keys(i).length >= Object.keys(a).length || Object.keys(i).find((d) => a[d] === (!t || ne.all));
}, fr = (e) => Array.isArray(e) ? e : [e];
function Rt(e) {
  const a = oe.useRef(e);
  a.current = e, oe.useEffect(() => {
    const n = !e.disabled && a.current.subject && a.current.subject.subscribe({
      next: a.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
var ce = (e) => typeof e == "string", Et = (e, a, n, t, l) => ce(e) ? (t && a.watch.add(e), p(n, e, l)) : Array.isArray(e) ? e.map((i) => (t && a.watch.add(i), p(n, i))) : (t && (a.watchAll = !0), n), mr = (e) => /^\w*$/.test(e), Wr = (e) => Je(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function I(e, a, n) {
  let t = -1;
  const l = mr(a) ? [a] : Wr(a), i = l.length, d = i - 1;
  for (; ++t < i; ) {
    const m = l[t];
    let h = n;
    if (t !== d) {
      const A = e[m];
      h = Y(A) || Array.isArray(A) ? A : isNaN(+l[t + 1]) ? {} : [];
    }
    e[m] = h, e = e[m];
  }
  return e;
}
var Ct = (e, a, n, t, l) => a ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [t]: l || !0
  }
} : {};
const br = (e, a, n) => {
  for (const t of n || Object.keys(e)) {
    const l = p(e, t);
    if (l) {
      const { _f: i, ...d } = l;
      if (i && a(i.name)) {
        if (i.ref.focus) {
          i.ref.focus();
          break;
        } else if (i.refs && i.refs[0].focus) {
          i.refs[0].focus();
          break;
        }
      } else
        Y(d) && br(d, a);
    }
  }
};
var jr = (e) => ({
  isOnSubmit: !e || e === ne.onSubmit,
  isOnBlur: e === ne.onBlur,
  isOnChange: e === ne.onChange,
  isOnAll: e === ne.all,
  isOnTouch: e === ne.onTouched
}), Pr = (e, a, n) => !n && (a.watchAll || a.watch.has(e) || [...a.watch].some((t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length)))), wt = (e, a, n) => {
  const t = Je(p(e, n));
  return I(t, "root", a[n]), I(e, n, t), e;
}, Te = (e) => typeof e == "boolean", _r = (e) => e.type === "file", xe = (e) => typeof e == "function", rr = (e) => {
  if (!pr)
    return !1;
  const a = e ? e.ownerDocument : 0;
  return e instanceof (a && a.defaultView ? a.defaultView.HTMLElement : HTMLElement);
}, er = (e) => ce(e), xr = (e) => e.type === "radio", tr = (e) => e instanceof RegExp;
const Nr = {
  value: !1,
  isValid: !1
}, Or = { value: !0, isValid: !0 };
var Yr = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const a = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: a, isValid: !!a.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !W(e[0].attributes.value) ? W(e[0].value) || e[0].value === "" ? Or : { value: e[0].value, isValid: !0 } : Or
    ) : Nr;
  }
  return Nr;
};
const qr = {
  isValid: !1,
  value: null
};
var Hr = (e) => Array.isArray(e) ? e.reduce((a, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : a, qr) : qr;
function Lr(e, a, n = "validate") {
  if (er(e) || Array.isArray(e) && e.every(er) || Te(e) && !e)
    return {
      type: n,
      message: er(e) ? e : "",
      ref: a
    };
}
var Ne = (e) => Y(e) && !tr(e) ? e : {
  value: e,
  message: ""
}, Ir = async (e, a, n, t, l) => {
  const { ref: i, refs: d, required: m, maxLength: h, minLength: A, min: S, max: E, pattern: _, validate: O, name: P, valueAsNumber: re, mount: Ae, disabled: le } = e._f, R = p(a, P);
  if (!Ae || le)
    return {};
  const z = d ? d[0] : i, te = (V) => {
    t && z.reportValidity && (z.setCustomValidity(Te(V) ? "" : V || ""), z.reportValidity());
  }, U = {}, Re = xr(i), be = Ge(i), qe = Re || be, X = (re || _r(i)) && W(i.value) && W(R) || rr(i) && i.value === "" || R === "" || Array.isArray(R) && !R.length, fe = Ct.bind(null, P, n, U), se = (V, w, j, $ = ge.maxLength, G = ge.minLength) => {
    const Z = V ? w : j;
    U[P] = {
      type: V ? $ : G,
      message: Z,
      ref: i,
      ...fe(V ? $ : G, Z)
    };
  };
  if (l ? !Array.isArray(R) || !R.length : m && (!qe && (X || K(R)) || Te(R) && !R || be && !Yr(d).isValid || Re && !Hr(d).isValid)) {
    const { value: V, message: w } = er(m) ? { value: !!m, message: m } : Ne(m);
    if (V && (U[P] = {
      type: ge.required,
      message: w,
      ref: z,
      ...fe(ge.required, w)
    }, !n))
      return te(w), U;
  }
  if (!X && (!K(S) || !K(E))) {
    let V, w;
    const j = Ne(E), $ = Ne(S);
    if (!K(R) && !isNaN(R)) {
      const G = i.valueAsNumber || R && +R;
      K(j.value) || (V = G > j.value), K($.value) || (w = G < $.value);
    } else {
      const G = i.valueAsDate || new Date(R), Z = (me) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + me), ue = i.type == "time", pe = i.type == "week";
      ce(j.value) && R && (V = ue ? Z(R) > Z(j.value) : pe ? R > j.value : G > new Date(j.value)), ce($.value) && R && (w = ue ? Z(R) < Z($.value) : pe ? R < $.value : G < new Date($.value));
    }
    if ((V || w) && (se(!!V, j.message, $.message, ge.max, ge.min), !n))
      return te(U[P].message), U;
  }
  if ((h || A) && !X && (ce(R) || l && Array.isArray(R))) {
    const V = Ne(h), w = Ne(A), j = !K(V.value) && R.length > +V.value, $ = !K(w.value) && R.length < +w.value;
    if ((j || $) && (se(j, V.message, w.message), !n))
      return te(U[P].message), U;
  }
  if (_ && !X && ce(R)) {
    const { value: V, message: w } = Ne(_);
    if (tr(V) && !R.match(V) && (U[P] = {
      type: ge.pattern,
      message: w,
      ref: i,
      ...fe(ge.pattern, w)
    }, !n))
      return te(w), U;
  }
  if (O) {
    if (xe(O)) {
      const V = await O(R, a), w = Lr(V, z);
      if (w && (U[P] = {
        ...w,
        ...fe(ge.validate, w.message)
      }, !n))
        return te(w.message), U;
    } else if (Y(O)) {
      let V = {};
      for (const w in O) {
        if (!ee(V) && !n)
          break;
        const j = Lr(await O[w](R, a), z, w);
        j && (V = {
          ...j,
          ...fe(w, j.message)
        }, te(j.message), n && (U[P] = V));
      }
      if (!ee(V) && (U[P] = {
        ref: z,
        ...V
      }, !n))
        return U;
    }
  }
  return te(!0), U;
};
function Tt(e, a) {
  const n = a.slice(0, -1).length;
  let t = 0;
  for (; t < n; )
    e = W(e) ? t++ : e[a[t++]];
  return e;
}
function St(e) {
  for (const a in e)
    if (e.hasOwnProperty(a) && !W(e[a]))
      return !1;
  return !0;
}
function H(e, a) {
  const n = Array.isArray(a) ? a : mr(a) ? [a] : Wr(a), t = n.length === 1 ? e : Tt(e, n), l = n.length - 1, i = n[l];
  return t && delete t[i], l !== 0 && (Y(t) && ee(t) || Array.isArray(t) && St(t)) && H(e, n.slice(0, -1)), e;
}
function dr() {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (l) => {
      for (const i of e)
        i.next && i.next(l);
    },
    subscribe: (l) => (e.push(l), {
      unsubscribe: () => {
        e = e.filter((i) => i !== l);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}
var sr = (e) => K(e) || !Br(e);
function Se(e, a) {
  if (sr(e) || sr(a))
    return e === a;
  if (Oe(e) && Oe(a))
    return e.getTime() === a.getTime();
  const n = Object.keys(e), t = Object.keys(a);
  if (n.length !== t.length)
    return !1;
  for (const l of n) {
    const i = e[l];
    if (!t.includes(l))
      return !1;
    if (l !== "ref") {
      const d = a[l];
      if (Oe(i) && Oe(d) || Y(i) && Y(d) || Array.isArray(i) && Array.isArray(d) ? !Se(i, d) : i !== d)
        return !1;
    }
  }
  return !0;
}
var Gr = (e) => e.type === "select-multiple", At = (e) => xr(e) || Ge(e), yr = (e) => rr(e) && e.isConnected, Jr = (e) => {
  for (const a in e)
    if (xe(e[a]))
      return !0;
  return !1;
};
function nr(e, a = {}) {
  const n = Array.isArray(e);
  if (Y(e) || n)
    for (const t in e)
      Array.isArray(e[t]) || Y(e[t]) && !Jr(e[t]) ? (a[t] = Array.isArray(e[t]) ? [] : {}, nr(e[t], a[t])) : K(e[t]) || (a[t] = !0);
  return a;
}
function Kr(e, a, n) {
  const t = Array.isArray(e);
  if (Y(e) || t)
    for (const l in e)
      Array.isArray(e[l]) || Y(e[l]) && !Jr(e[l]) ? W(a) || sr(n[l]) ? n[l] = Array.isArray(e[l]) ? nr(e[l], []) : { ...nr(e[l]) } : Kr(e[l], K(a) ? {} : a[l], n[l]) : n[l] = !Se(e[l], a[l]);
  return n;
}
var gr = (e, a) => Kr(e, a, nr(a)), zr = (e, { valueAsNumber: a, valueAsDate: n, setValueAs: t }) => W(e) ? e : a ? e === "" ? NaN : e && +e : n && ce(e) ? new Date(e) : t ? t(e) : e;
function vr(e) {
  const a = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : a.disabled))
    return _r(a) ? a.files : xr(a) ? Hr(e.refs).value : Gr(a) ? [...a.selectedOptions].map(({ value: n }) => n) : Ge(a) ? Yr(e.refs).value : zr(W(a.value) ? e.ref.value : a.value, e);
}
var Ft = (e, a, n, t) => {
  const l = {};
  for (const i of e) {
    const d = p(a, i);
    d && I(l, i, d._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: l,
    shouldUseNativeValidation: t
  };
}, He = (e) => W(e) ? e : tr(e) ? e.source : Y(e) ? tr(e.value) ? e.value.source : e.value : e, kt = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Mr(e, a, n) {
  const t = p(e, n);
  if (t || mr(n))
    return {
      error: t,
      name: n
    };
  const l = n.split(".");
  for (; l.length; ) {
    const i = l.join("."), d = p(a, i), m = p(e, i);
    if (d && !Array.isArray(d) && n !== i)
      return { name: n };
    if (m && m.type)
      return {
        name: i,
        error: m
      };
    l.pop();
  }
  return {
    name: n
  };
}
var Vt = (e, a, n, t, l) => l.isOnAll ? !1 : !n && l.isOnTouch ? !(a || e) : (n ? t.isOnBlur : l.isOnBlur) ? !e : (n ? t.isOnChange : l.isOnChange) ? e : !0, Dt = (e, a) => !Je(p(e, a)).length && H(e, a);
const jt = {
  mode: ne.onSubmit,
  reValidateMode: ne.onChange,
  shouldFocusError: !0
};
function Pt(e = {}, a) {
  let n = {
    ...jt,
    ...e
  }, t = {
    submitCount: 0,
    isDirty: !1,
    isLoading: xe(n.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: {}
  }, l = {}, i = Y(n.defaultValues) || Y(n.values) ? ve(n.defaultValues || n.values) || {} : {}, d = n.shouldUnregister ? {} : ve(i), m = {
    action: !1,
    mount: !1,
    watch: !1
  }, h = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, A, S = 0;
  const E = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, _ = {
    values: dr(),
    array: dr(),
    state: dr()
  }, O = e.resetOptions && e.resetOptions.keepDirtyValues, P = jr(n.mode), re = jr(n.reValidateMode), Ae = n.criteriaMode === ne.all, le = (s) => (u) => {
    clearTimeout(S), S = setTimeout(s, u);
  }, R = async (s) => {
    if (E.isValid || s) {
      const u = n.resolver ? ee((await X()).errors) : await se(l, !0);
      u !== t.isValid && _.state.next({
        isValid: u
      });
    }
  }, z = (s) => E.isValidating && _.state.next({
    isValidating: s
  }), te = (s, u = [], o, b, g = !0, y = !0) => {
    if (b && o) {
      if (m.action = !0, y && Array.isArray(p(l, s))) {
        const x = o(p(l, s), b.argA, b.argB);
        g && I(l, s, x);
      }
      if (y && Array.isArray(p(t.errors, s))) {
        const x = o(p(t.errors, s), b.argA, b.argB);
        g && I(t.errors, s, x), Dt(t.errors, s);
      }
      if (E.touchedFields && y && Array.isArray(p(t.touchedFields, s))) {
        const x = o(p(t.touchedFields, s), b.argA, b.argB);
        g && I(t.touchedFields, s, x);
      }
      E.dirtyFields && (t.dirtyFields = gr(i, d)), _.state.next({
        name: s,
        isDirty: w(s, u),
        dirtyFields: t.dirtyFields,
        errors: t.errors,
        isValid: t.isValid
      });
    } else
      I(d, s, u);
  }, U = (s, u) => {
    I(t.errors, s, u), _.state.next({
      errors: t.errors
    });
  }, Re = (s, u, o, b) => {
    const g = p(l, s);
    if (g) {
      const y = p(d, s, W(o) ? p(i, s) : o);
      W(y) || b && b.defaultChecked || u ? I(d, s, u ? y : vr(g._f)) : G(s, y), m.mount && R();
    }
  }, be = (s, u, o, b, g) => {
    let y = !1, x = !1;
    const q = {
      name: s
    };
    if (!o || b) {
      E.isDirty && (x = t.isDirty, t.isDirty = q.isDirty = w(), y = x !== q.isDirty);
      const L = Se(p(i, s), u);
      x = p(t.dirtyFields, s), L ? H(t.dirtyFields, s) : I(t.dirtyFields, s, !0), q.dirtyFields = t.dirtyFields, y = y || E.dirtyFields && x !== !L;
    }
    if (o) {
      const L = p(t.touchedFields, s);
      L || (I(t.touchedFields, s, o), q.touchedFields = t.touchedFields, y = y || E.touchedFields && L !== o);
    }
    return y && g && _.state.next(q), y ? q : {};
  }, qe = (s, u, o, b) => {
    const g = p(t.errors, s), y = E.isValid && Te(u) && t.isValid !== u;
    if (e.delayError && o ? (A = le(() => U(s, o)), A(e.delayError)) : (clearTimeout(S), A = null, o ? I(t.errors, s, o) : H(t.errors, s)), (o ? !Se(g, o) : g) || !ee(b) || y) {
      const x = {
        ...b,
        ...y && Te(u) ? { isValid: u } : {},
        errors: t.errors,
        name: s
      };
      t = {
        ...t,
        ...x
      }, _.state.next(x);
    }
    z(!1);
  }, X = async (s) => n.resolver(d, n.context, Ft(s || h.mount, l, n.criteriaMode, n.shouldUseNativeValidation)), fe = async (s) => {
    const { errors: u } = await X(s);
    if (s)
      for (const o of s) {
        const b = p(u, o);
        b ? I(t.errors, o, b) : H(t.errors, o);
      }
    else
      t.errors = u;
    return u;
  }, se = async (s, u, o = {
    valid: !0
  }) => {
    for (const b in s) {
      const g = s[b];
      if (g) {
        const { _f: y, ...x } = g;
        if (y) {
          const q = h.array.has(y.name), L = await Ir(g, d, Ae, n.shouldUseNativeValidation && !u, q);
          if (L[y.name] && (o.valid = !1, u))
            break;
          !u && (p(L, y.name) ? q ? wt(t.errors, L, y.name) : I(t.errors, y.name, L[y.name]) : H(t.errors, y.name));
        }
        x && await se(x, u, o);
      }
    }
    return o.valid;
  }, V = () => {
    for (const s of h.unMount) {
      const u = p(l, s);
      u && (u._f.refs ? u._f.refs.every((o) => !yr(o)) : !yr(u._f.ref)) && Ee(s);
    }
    h.unMount = /* @__PURE__ */ new Set();
  }, w = (s, u) => (s && u && I(d, s, u), !Se(Le(), i)), j = (s, u, o) => Et(s, h, {
    ...m.mount ? d : W(u) ? i : ce(s) ? { [s]: u } : u
  }, o, u), $ = (s) => Je(p(m.mount ? d : i, s, e.shouldUnregister ? p(i, s, []) : [])), G = (s, u, o = {}) => {
    const b = p(l, s);
    let g = u;
    if (b) {
      const y = b._f;
      y && (!y.disabled && I(d, s, zr(u, y)), g = rr(y.ref) && K(u) ? "" : u, Gr(y.ref) ? [...y.ref.options].forEach((x) => x.selected = g.includes(x.value)) : y.refs ? Ge(y.ref) ? y.refs.length > 1 ? y.refs.forEach((x) => (!x.defaultChecked || !x.disabled) && (x.checked = Array.isArray(g) ? !!g.find((q) => q === x.value) : g === x.value)) : y.refs[0] && (y.refs[0].checked = !!g) : y.refs.forEach((x) => x.checked = x.value === g) : _r(y.ref) ? y.ref.value = "" : (y.ref.value = g, y.ref.type || _.values.next({
        name: s,
        values: { ...d }
      })));
    }
    (o.shouldDirty || o.shouldTouch) && be(s, g, o.shouldTouch, o.shouldDirty, !0), o.shouldValidate && me(s);
  }, Z = (s, u, o) => {
    for (const b in u) {
      const g = u[b], y = `${s}.${b}`, x = p(l, y);
      (h.array.has(s) || !sr(g) || x && !x._f) && !Oe(g) ? Z(y, g, o) : G(y, g, o);
    }
  }, ue = (s, u, o = {}) => {
    const b = p(l, s), g = h.array.has(s), y = ve(u);
    I(d, s, y), g ? (_.array.next({
      name: s,
      values: { ...d }
    }), (E.isDirty || E.dirtyFields) && o.shouldDirty && _.state.next({
      name: s,
      dirtyFields: gr(i, d),
      isDirty: w(s, y)
    })) : b && !b._f && !K(y) ? Z(s, y, o) : G(s, y, o), Pr(s, h) && _.state.next({ ...t }), _.values.next({
      name: s,
      values: { ...d }
    }), !m.mount && a();
  }, pe = async (s) => {
    const u = s.target;
    let o = u.name, b = !0;
    const g = p(l, o), y = () => u.type ? vr(g._f) : ht(s);
    if (g) {
      let x, q;
      const L = y(), de = s.type === Dr.BLUR || s.type === Dr.FOCUS_OUT, we = !kt(g._f) && !n.resolver && !p(t.errors, o) && !g._f.deps || Vt(de, p(t.touchedFields, o), t.isSubmitted, re, P), Be = Pr(o, h, de);
      I(d, o, L), de ? (g._f.onBlur && g._f.onBlur(s), A && A(0)) : g._f.onChange && g._f.onChange(s);
      const Ve = be(o, L, de, !1), Ze = !ee(Ve) || Be;
      if (!de && _.values.next({
        name: o,
        type: s.type,
        values: { ...d }
      }), we)
        return E.isValid && R(), Ze && _.state.next({ name: o, ...Be ? {} : Ve });
      if (!de && Be && _.state.next({ ...t }), z(!0), n.resolver) {
        const { errors: De } = await X([o]), lr = Mr(t.errors, l, o), Qe = Mr(De, l, lr.name || o);
        x = Qe.error, o = Qe.name, q = ee(De);
      } else
        x = (await Ir(g, d, Ae, n.shouldUseNativeValidation))[o], b = isNaN(L) || L === p(d, o, L), b && (x ? q = !1 : E.isValid && (q = await se(l, !0)));
      b && (g._f.deps && me(g._f.deps), qe(o, q, x, Ve));
    }
  }, me = async (s, u = {}) => {
    let o, b;
    const g = fr(s);
    if (z(!0), n.resolver) {
      const y = await fe(W(s) ? s : g);
      o = ee(y), b = s ? !g.some((x) => p(y, x)) : o;
    } else
      s ? (b = (await Promise.all(g.map(async (y) => {
        const x = p(l, y);
        return await se(x && x._f ? { [y]: x } : x);
      }))).every(Boolean), !(!b && !t.isValid) && R()) : b = o = await se(l);
    return _.state.next({
      ...!ce(s) || E.isValid && o !== t.isValid ? {} : { name: s },
      ...n.resolver || !s ? { isValid: o } : {},
      errors: t.errors,
      isValidating: !1
    }), u.shouldFocus && !b && br(l, (y) => y && p(t.errors, y), s ? g : h.mount), b;
  }, Le = (s) => {
    const u = {
      ...i,
      ...m.mount ? d : {}
    };
    return W(s) ? u : ce(s) ? p(u, s) : s.map((o) => p(u, o));
  }, Ie = (s, u) => ({
    invalid: !!p((u || t).errors, s),
    isDirty: !!p((u || t).dirtyFields, s),
    isTouched: !!p((u || t).touchedFields, s),
    error: p((u || t).errors, s)
  }), Ke = (s) => {
    s && fr(s).forEach((u) => H(t.errors, u)), _.state.next({
      errors: s ? t.errors : {}
    });
  }, ze = (s, u, o) => {
    const b = (p(l, s, { _f: {} })._f || {}).ref;
    I(t.errors, s, {
      ...u,
      ref: b
    }), _.state.next({
      name: s,
      errors: t.errors,
      isValid: !1
    }), o && o.shouldFocus && b && b.focus && b.focus();
  }, ar = (s, u) => xe(s) ? _.values.subscribe({
    next: (o) => s(j(void 0, u), o)
  }) : j(s, u, !0), Ee = (s, u = {}) => {
    for (const o of s ? fr(s) : h.mount)
      h.mount.delete(o), h.array.delete(o), u.keepValue || (H(l, o), H(d, o)), !u.keepError && H(t.errors, o), !u.keepDirty && H(t.dirtyFields, o), !u.keepTouched && H(t.touchedFields, o), !n.shouldUnregister && !u.keepDefaultValue && H(i, o);
    _.values.next({
      values: { ...d }
    }), _.state.next({
      ...t,
      ...u.keepDirty ? { isDirty: w() } : {}
    }), !u.keepIsValid && R();
  }, Fe = ({ disabled: s, name: u, field: o, fields: b }) => {
    if (Te(s)) {
      const g = s ? void 0 : p(d, u, vr(o ? o._f : p(b, u)._f));
      I(d, u, g), be(u, g, !1, !1, !0);
    }
  }, _e = (s, u = {}) => {
    let o = p(l, s);
    const b = Te(u.disabled);
    return I(l, s, {
      ...o || {},
      _f: {
        ...o && o._f ? o._f : { ref: { name: s } },
        name: s,
        mount: !0,
        ...u
      }
    }), h.mount.add(s), o ? Fe({
      field: o,
      disabled: u.disabled,
      name: s
    }) : Re(s, !0, u.value), {
      ...b ? { disabled: u.disabled } : {},
      ...n.progressive ? {
        required: !!u.required,
        min: He(u.min),
        max: He(u.max),
        minLength: He(u.minLength),
        maxLength: He(u.maxLength),
        pattern: He(u.pattern)
      } : {},
      name: s,
      onChange: pe,
      onBlur: pe,
      ref: (g) => {
        if (g) {
          _e(s, u), o = p(l, s);
          const y = W(g.value) && g.querySelectorAll && g.querySelectorAll("input,select,textarea")[0] || g, x = At(y), q = o._f.refs || [];
          if (x ? q.find((L) => L === y) : y === o._f.ref)
            return;
          I(l, s, {
            _f: {
              ...o._f,
              ...x ? {
                refs: [
                  ...q.filter(yr),
                  y,
                  ...Array.isArray(p(i, s)) ? [{}] : []
                ],
                ref: { type: y.type, name: s }
              } : { ref: y }
            }
          }), Re(s, !1, void 0, y);
        } else
          o = p(l, s, {}), o._f && (o._f.mount = !1), (n.shouldUnregister || u.shouldUnregister) && !(pt(h.array, s) && m.action) && h.unMount.add(s);
      }
    };
  }, ke = () => n.shouldFocusError && br(l, (s) => s && p(t.errors, s), h.mount), Ce = (s, u) => async (o) => {
    o && (o.preventDefault && o.preventDefault(), o.persist && o.persist());
    let b = ve(d);
    if (_.state.next({
      isSubmitting: !0
    }), n.resolver) {
      const { errors: g, values: y } = await X();
      t.errors = g, b = y;
    } else
      await se(l);
    H(t.errors, "root"), ee(t.errors) ? (_.state.next({
      errors: {}
    }), await s(b, o)) : (u && await u({ ...t.errors }, o), ke(), setTimeout(ke)), _.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: ee(t.errors),
      submitCount: t.submitCount + 1,
      errors: t.errors
    });
  }, ir = (s, u = {}) => {
    p(l, s) && (W(u.defaultValue) ? ue(s, p(i, s)) : (ue(s, u.defaultValue), I(i, s, u.defaultValue)), u.keepTouched || H(t.touchedFields, s), u.keepDirty || (H(t.dirtyFields, s), t.isDirty = u.defaultValue ? w(s, p(i, s)) : w()), u.keepError || (H(t.errors, s), E.isValid && R()), _.state.next({ ...t }));
  }, Me = (s, u = {}) => {
    const o = s ? ve(s) : i, b = ve(o), g = s && !ee(s) ? b : i;
    if (u.keepDefaultValues || (i = o), !u.keepValues) {
      if (u.keepDirtyValues || O)
        for (const y of h.mount)
          p(t.dirtyFields, y) ? I(g, y, p(d, y)) : ue(y, p(g, y));
      else {
        if (pr && W(s))
          for (const y of h.mount) {
            const x = p(l, y);
            if (x && x._f) {
              const q = Array.isArray(x._f.refs) ? x._f.refs[0] : x._f.ref;
              if (rr(q)) {
                const L = q.closest("form");
                if (L) {
                  L.reset();
                  break;
                }
              }
            }
          }
        l = {};
      }
      d = e.shouldUnregister ? u.keepDefaultValues ? ve(i) : {} : ve(g), _.array.next({
        values: { ...g }
      }), _.values.next({
        values: { ...g }
      });
    }
    h = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, !m.mount && a(), m.mount = !E.isValid || !!u.keepIsValid, m.watch = !!e.shouldUnregister, _.state.next({
      submitCount: u.keepSubmitCount ? t.submitCount : 0,
      isDirty: u.keepDirty ? t.isDirty : !!(u.keepDefaultValues && !Se(s, i)),
      isSubmitted: u.keepIsSubmitted ? t.isSubmitted : !1,
      dirtyFields: u.keepDirtyValues ? t.dirtyFields : u.keepDefaultValues && s ? gr(i, s) : {},
      touchedFields: u.keepTouched ? t.touchedFields : {},
      errors: u.keepErrors ? t.errors : {},
      isSubmitting: !1,
      isSubmitSuccessful: !1
    });
  }, Xe = (s, u) => Me(xe(s) ? s(d) : s, u);
  return {
    control: {
      register: _e,
      unregister: Ee,
      getFieldState: Ie,
      handleSubmit: Ce,
      setError: ze,
      _executeSchema: X,
      _getWatch: j,
      _getDirty: w,
      _updateValid: R,
      _removeUnmounted: V,
      _updateFieldArray: te,
      _updateDisabledField: Fe,
      _getFieldArray: $,
      _reset: Me,
      _resetDefaultValues: () => xe(n.defaultValues) && n.defaultValues().then((s) => {
        Xe(s, n.resetOptions), _.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (s) => {
        t = {
          ...t,
          ...s
        };
      },
      _subjects: _,
      _proxyFormState: E,
      get _fields() {
        return l;
      },
      get _formValues() {
        return d;
      },
      get _state() {
        return m;
      },
      set _state(s) {
        m = s;
      },
      get _defaultValues() {
        return i;
      },
      get _names() {
        return h;
      },
      set _names(s) {
        h = s;
      },
      get _formState() {
        return t;
      },
      set _formState(s) {
        t = s;
      },
      get _options() {
        return n;
      },
      set _options(s) {
        n = {
          ...n,
          ...s
        };
      }
    },
    trigger: me,
    register: _e,
    handleSubmit: Ce,
    watch: ar,
    setValue: ue,
    getValues: Le,
    reset: Xe,
    resetField: ir,
    clearErrors: Ke,
    unregister: Ee,
    setError: ze,
    setFocus: (s, u = {}) => {
      const o = p(l, s), b = o && o._f;
      if (b) {
        const g = b.refs ? b.refs[0] : b.ref;
        g.focus && (g.focus(), u.shouldSelect && g.select());
      }
    },
    getFieldState: Ie
  };
}
function Nt(e = {}) {
  const a = oe.useRef(), n = oe.useRef(), [t, l] = oe.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: xe(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: {},
    defaultValues: xe(e.defaultValues) ? void 0 : e.defaultValues
  });
  a.current || (a.current = {
    ...Pt(e, () => l((d) => ({ ...d }))),
    formState: t
  });
  const i = a.current.control;
  return i._options = e, Rt({
    subject: i._subjects.state,
    next: (d) => {
      xt(d, i._proxyFormState, i._updateFormState, !0) && l({ ...i._formState });
    }
  }), oe.useEffect(() => {
    e.values && !Se(e.values, n.current) ? (i._reset(e.values, i._options.resetOptions), n.current = e.values) : i._resetDefaultValues();
  }, [e.values, i]), oe.useEffect(() => {
    i._state.mount || (i._updateValid(), i._state.mount = !0), i._state.watch && (i._state.watch = !1, i._subjects.state.next({ ...i._formState })), i._removeUnmounted();
  }), a.current.formState = _t(t, i), a.current;
}
const Xr = Ur(), ie = Ur();
function Ot({
  defaultValues: e,
  children: a,
  onSubmit: n,
  styleClasses: t,
  defaultErrorStyle: l
}) {
  const i = Nt({ defaultValues: e }), d = ft(
    async (h) => {
      await n(h), i.reset();
    },
    [n, i]
  ), { form: m = "" } = t || {};
  return /* @__PURE__ */ T.jsx(ie.Provider, { value: { ...i }, children: /* @__PURE__ */ T.jsx(Xr.Provider, { value: l, children: /* @__PURE__ */ T.jsx(
    "form",
    {
      onSubmit: i.handleSubmit(d),
      className: `${m}`,
      children: a
    }
  ) }) });
}
Ot.propTypes = {
  defaultValues: c.object,
  children: c.node,
  onSubmit: c.func.isRequired,
  styleClasses: c.shape({
    form: c.string
  }),
  defaultErrorStyle: c.string
};
const he = ({ name: e, styleClasses: a }) => {
  const {
    formState: { errors: n }
  } = ae(ie), t = ae(Xr) || "text-red-500 text-xs italic", l = (a == null ? void 0 : a.error) || t;
  return n[e] ? /* @__PURE__ */ T.jsx(
    "p",
    {
      "aria-live": "polite",
      className: l,
      children: n[e].message
    }
  ) : null;
};
he.propTypes = {
  name: c.string.isRequired,
  styleClasses: c.shape({
    error: c.string
  })
};
const qt = ({ name: e, label: a, id: n, type: t, validationOptions: l, styleClasses: i }) => {
  const { register: d } = ae(ie), m = $r(() => {
    const P = { ...l };
    return t === "number" && (P.valueAsNumber = !0), P;
  }, [t, l]), h = "mb-4", A = "block text-gray-700 font-bold mb-2", S = "shadow appearance-none border rounded py-2 px-3", {
    container: E = h,
    label: _ = A,
    input: O = S
  } = i || {};
  return /* @__PURE__ */ T.jsxs("div", { className: E, children: [
    /* @__PURE__ */ T.jsx(
      "label",
      {
        htmlFor: n,
        className: _,
        children: a
      }
    ),
    /* @__PURE__ */ T.jsx(
      "input",
      {
        ...d(e, m),
        id: n,
        type: t,
        className: O,
        "aria-required": l != null && l.required ? "true" : "false",
        "aria-label": a,
        "aria-invalid": l != null && l.required && !(m != null && m.value) ? "true" : "false"
      }
    ),
    /* @__PURE__ */ T.jsx(he, { name: e })
  ] });
};
qt.propTypes = {
  name: c.string.isRequired,
  label: c.string.isRequired,
  id: c.string.isRequired,
  type: c.string,
  validationOptions: c.object,
  styleClasses: c.shape({
    container: c.string,
    label: c.string,
    input: c.string
  })
};
const Lt = ({ name: e, label: a, options: n, validationOptions: t, styleClasses: l }) => {
  var _;
  const { register: i } = ae(ie), d = "mb-4", m = "block text-gray-700 font-bold mb-2", h = "shadow appearance-none border rounded py-2 px-3", {
    container: A = d,
    label: S = m,
    select: E = h
  } = l || {};
  return /* @__PURE__ */ T.jsxs("div", { className: A, children: [
    /* @__PURE__ */ T.jsx(
      "label",
      {
        htmlFor: e,
        className: S,
        children: a
      }
    ),
    /* @__PURE__ */ T.jsx(
      "select",
      {
        id: e,
        ...i(e, t),
        className: E,
        "aria-required": t != null && t.required ? "true" : "false",
        "aria-label": a,
        "aria-invalid": t != null && t.required && !((_ = i(e, t)) != null && _.value) ? "true" : "false",
        children: n.map((O, P) => /* @__PURE__ */ T.jsx(
          "option",
          {
            value: O.value,
            children: O.label
          },
          P
        ))
      }
    ),
    /* @__PURE__ */ T.jsx(he, { name: e })
  ] });
};
Lt.propTypes = {
  name: c.string.isRequired,
  label: c.string.isRequired,
  options: c.arrayOf(
    c.shape({
      value: c.oneOfType([c.string, c.number]).isRequired,
      label: c.string.isRequired
    })
  ).isRequired,
  validationOptions: c.object,
  styleClasses: c.shape({
    container: c.string,
    label: c.string,
    select: c.string
  })
};
const It = ({ type: e, name: a, onClick: n, onSuccess: t, onError: l, styleClasses: i }) => {
  const [d, m] = dt(!1), {
    formState: { isValid: h }
  } = ae(ie), A = async () => {
    if (h) {
      m(!0);
      try {
        await n(), t && t();
      } catch (_) {
        l && l(_);
      } finally {
        m(!1);
      }
    }
  }, S = "bg-slate-800 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 ml-auto", E = (i == null ? void 0 : i.button) || S;
  return /* @__PURE__ */ T.jsx(
    "button",
    {
      type: e,
      onClick: A,
      "aria-disabled": h ? "false" : "true",
      className: `${E} ${!h || d ? "opacity-50 cursor-not-allowed" : ""}`,
      children: d ? "Chargement..." : a
    }
  );
};
It.propTypes = {
  type: c.string.isRequired,
  name: c.string.isRequired,
  onClick: c.func.isRequired,
  onSuccess: c.func,
  onError: c.func,
  styleClasses: c.shape({
    button: c.string
  })
};
const Mt = ({
  name: e,
  label: a,
  id: n,
  rows: t,
  cols: l,
  validationOptions: i,
  styleClasses: d
}) => {
  const { register: m } = ae(ie), h = $r(() => ({ ...i }), [i]), A = "mb-4", S = "block text-gray-700 font-bold mb-2", E = "shadow appearance-none border rounded py-2 px-3", {
    container: _ = A,
    label: O = S,
    input: P = E
  } = d || {};
  return /* @__PURE__ */ T.jsxs("div", { className: _, children: [
    /* @__PURE__ */ T.jsx(
      "label",
      {
        htmlFor: n,
        className: O,
        children: a
      }
    ),
    /* @__PURE__ */ T.jsx(
      "textarea",
      {
        ...m(e, h),
        id: n,
        rows: t,
        cols: l,
        className: P,
        "aria-required": i != null && i.required ? "true" : "false",
        "aria-label": a,
        "aria-invalid": i != null && i.required && !(h != null && h.value) ? "true" : "false"
      }
    ),
    /* @__PURE__ */ T.jsx(he, { name: e })
  ] });
};
Mt.propTypes = {
  name: c.string.isRequired,
  label: c.string.isRequired,
  id: c.string.isRequired,
  rows: c.number,
  cols: c.number,
  validationOptions: c.object,
  styleClasses: c.shape({
    container: c.string,
    label: c.string,
    input: c.string
  })
};
const Ut = ({ name: e, label: a, id: n, validationOptions: t, styleClasses: l }) => {
  const { register: i } = ae(ie), d = "", m = "ml-2", h = "mb-4", {
    input: A = d,
    label: S = m,
    div: E = h
  } = l || {};
  return /* @__PURE__ */ T.jsxs("div", { className: E, children: [
    /* @__PURE__ */ T.jsx(
      "input",
      {
        type: "checkbox",
        id: n,
        ...i(e, t),
        className: A
      }
    ),
    /* @__PURE__ */ T.jsx(
      "label",
      {
        htmlFor: n,
        className: S,
        children: a
      }
    ),
    /* @__PURE__ */ T.jsx(he, { name: e })
  ] });
};
Ut.propTypes = {
  name: c.string.isRequired,
  label: c.string.isRequired,
  id: c.string.isRequired,
  validationOptions: c.object,
  styleClasses: c.shape({
    input: c.string,
    label: c.string,
    div: c.string
  })
};
const $t = ({ name: e, label: a, id: n, value: t, validationOptions: l, styleClasses: i }) => {
  const { register: d } = ae(ie), m = "mb-4", h = "form-radio text-blue-500 h-5 w-5", A = "ml-2 text-gray-700", {
    div: S = m,
    input: E = h,
    label: _ = A
  } = i || {};
  return /* @__PURE__ */ T.jsxs("div", { className: S, children: [
    /* @__PURE__ */ T.jsx(
      "input",
      {
        type: "radio",
        id: n,
        value: t,
        ...d(e, l),
        className: E
      }
    ),
    /* @__PURE__ */ T.jsx(
      "label",
      {
        htmlFor: n,
        className: _,
        children: a
      }
    ),
    /* @__PURE__ */ T.jsx(he, { name: e })
  ] });
};
$t.propTypes = {
  name: c.string.isRequired,
  label: c.string.isRequired,
  id: c.string.isRequired,
  value: c.oneOfType([
    c.string,
    c.number,
    c.bool
  ]).isRequired,
  validationOptions: c.object,
  styleClasses: c.shape({
    div: c.string,
    input: c.string,
    label: c.string
  })
};
const Bt = ({ name: e, label: a, id: n, validationOptions: t, styleClasses: l }) => {
  const { register: i, unregister: d, setValue: m } = ae(ie);
  yt(() => (i(e, t), () => {
    d(e);
  }), [i, d, e, t]);
  const h = (re) => {
    m(e, re.target.value);
  }, A = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", S = "block text-gray-700 font-bold mb-2", E = "mb-4", {
    input: _ = A,
    label: O = S,
    div: P = E
  } = l || {};
  return /* @__PURE__ */ T.jsxs("div", { className: P, children: [
    /* @__PURE__ */ T.jsx(
      "label",
      {
        htmlFor: n,
        className: O,
        children: a
      }
    ),
    /* @__PURE__ */ T.jsx(
      "input",
      {
        type: "date",
        id: n,
        name: e,
        onChange: h,
        className: _
      }
    ),
    /* @__PURE__ */ T.jsx(he, { name: e })
  ] });
};
Bt.propTypes = {
  name: c.string.isRequired,
  label: c.string.isRequired,
  id: c.string.isRequired,
  validationOptions: c.object,
  styleClasses: c.shape({
    input: c.string,
    label: c.string,
    div: c.string
  })
};
const Wt = ({
  name: e,
  label: a,
  options: n,
  validationOptions: t,
  styleClasses: l
}) => {
  const { register: i } = ae(ie), d = "mb-4", m = "block text-gray-700 font-bold mb-2", h = "form-radio text-blue-500 h-5 w-5", A = "ml-2 text-gray-700", {
    fieldset: S = d,
    legend: E = m,
    input: _ = h,
    label: O = A
  } = l || {};
  return /* @__PURE__ */ T.jsxs("fieldset", { className: S, children: [
    /* @__PURE__ */ T.jsx("legend", { className: E, children: a }),
    n.map((P, re) => /* @__PURE__ */ T.jsxs(
      "div",
      {
        className: "flex items-center space-x-3",
        children: [
          /* @__PURE__ */ T.jsx(
            "input",
            {
              type: "radio",
              value: P.value,
              ...i(e, t),
              id: `${e}_${re}`,
              className: _
            }
          ),
          /* @__PURE__ */ T.jsx(
            "label",
            {
              htmlFor: `${e}_${re}`,
              className: O,
              children: P.label
            }
          )
        ]
      },
      re
    )),
    /* @__PURE__ */ T.jsx(he, { name: e })
  ] });
};
Wt.propTypes = {
  name: c.string.isRequired,
  label: c.string.isRequired,
  options: c.arrayOf(
    c.shape({
      value: c.oneOfType([
        c.string,
        c.number,
        c.bool
      ]).isRequired,
      label: c.string.isRequired
    })
  ).isRequired,
  validationOptions: c.object,
  styleClasses: c.shape({
    fieldset: c.string,
    legend: c.string,
    input: c.string,
    label: c.string
  })
};
const Yt = ({ name: e, label: a, id: n, validationOptions: t, styleClasses: l }) => {
  const { register: i } = ae(ie), d = "mb-4", m = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", h = "block text-gray-700 font-bold mb-2", {
    div: A = d,
    input: S = m,
    label: E = h
  } = l || {};
  return /* @__PURE__ */ T.jsxs("div", { className: A, children: [
    /* @__PURE__ */ T.jsx(
      "label",
      {
        htmlFor: n,
        className: E,
        children: a
      }
    ),
    /* @__PURE__ */ T.jsx(
      "input",
      {
        ...i(e, t),
        type: "file",
        id: n,
        "aria-required": t != null && t.required ? "true" : "false",
        "aria-label": a,
        "aria-invalid": t != null && t.required ? "true" : "false",
        className: S
      }
    ),
    /* @__PURE__ */ T.jsx(he, { name: e })
  ] });
};
Yt.propTypes = {
  name: c.string.isRequired,
  label: c.string.isRequired,
  id: c.string.isRequired,
  validationOptions: c.object,
  styleClasses: c.shape({
    div: c.string,
    input: c.string,
    label: c.string
  })
};
export {
  It as Button,
  Ut as Checkbox,
  Bt as DatePicker,
  he as ErrorMessage,
  Yt as FileUpload,
  Ot as Form,
  qt as Input,
  $t as Radio,
  Wt as RadioGroup,
  Lt as Select,
  Mt as TextArea
};
