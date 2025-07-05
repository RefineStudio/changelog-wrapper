var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a17, b7) => {
  for (var prop in b7 || (b7 = {}))
    if (__hasOwnProp.call(b7, prop))
      __defNormalProp(a17, prop, b7[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b7)) {
      if (__propIsEnum.call(b7, prop))
        __defNormalProp(a17, prop, b7[prop]);
    }
  return a17;
};
var __spreadProps = (a17, b7) => __defProps(a17, __getOwnPropDescs(b7));
var __require = /* @__PURE__ */ ((x6) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x6, {
  get: (a17, b7) => (typeof require !== "undefined" ? require : a17)[b7]
}) : x6)(function(x6) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x6 + '" is not supported');
});
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.production.js
var require_use_sync_external_store_with_selector_production = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.production.js"(exports) {
    "use strict";
    var React = __require("react");
    function is(x6, y7) {
      return x6 === y7 && (0 !== x6 || 1 / x6 === 1 / y7) || x6 !== x6 && y7 !== y7;
    }
    var objectIs = "function" === typeof Object.is ? Object.is : is;
    var useSyncExternalStore = React.useSyncExternalStore;
    var useRef = React.useRef;
    var useEffect2 = React.useEffect;
    var useMemo = React.useMemo;
    var useDebugValue = React.useDebugValue;
    exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
      var instRef = useRef(null);
      if (null === instRef.current) {
        var inst = { hasValue: false, value: null };
        instRef.current = inst;
      } else inst = instRef.current;
      instRef = useMemo(
        function() {
          function memoizedSelector(nextSnapshot) {
            if (!hasMemo) {
              hasMemo = true;
              memoizedSnapshot = nextSnapshot;
              nextSnapshot = selector(nextSnapshot);
              if (void 0 !== isEqual && inst.hasValue) {
                var currentSelection = inst.value;
                if (isEqual(currentSelection, nextSnapshot))
                  return memoizedSelection = currentSelection;
              }
              return memoizedSelection = nextSnapshot;
            }
            currentSelection = memoizedSelection;
            if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
            var nextSelection = selector(nextSnapshot);
            if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
              return memoizedSnapshot = nextSnapshot, currentSelection;
            memoizedSnapshot = nextSnapshot;
            return memoizedSelection = nextSelection;
          }
          var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
          return [
            function() {
              return memoizedSelector(getSnapshot());
            },
            null === maybeGetServerSnapshot ? void 0 : function() {
              return memoizedSelector(maybeGetServerSnapshot());
            }
          ];
        },
        [getSnapshot, getServerSnapshot, selector, isEqual]
      );
      var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
      useEffect2(
        function() {
          inst.hasValue = true;
          inst.value = value;
        },
        [value]
      );
      useDebugValue(value);
      return value;
    };
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js
var require_use_sync_external_store_with_selector_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js"(exports) {
    "use strict";
    "production" !== process.env.NODE_ENV && function() {
      function is(x6, y7) {
        return x6 === y7 && (0 !== x6 || 1 / x6 === 1 / y7) || x6 !== x6 && y7 !== y7;
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React = __require("react"), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = React.useSyncExternalStore, useRef = React.useRef, useEffect2 = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
      exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef(null);
        if (null === instRef.current) {
          var inst = { hasValue: false, value: null };
          instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo(
          function() {
            function memoizedSelector(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                nextSnapshot = selector(nextSnapshot);
                if (void 0 !== isEqual && inst.hasValue) {
                  var currentSelection = inst.value;
                  if (isEqual(currentSelection, nextSnapshot))
                    return memoizedSelection = currentSelection;
                }
                return memoizedSelection = nextSnapshot;
              }
              currentSelection = memoizedSelection;
              if (objectIs(memoizedSnapshot, nextSnapshot))
                return currentSelection;
              var nextSelection = selector(nextSnapshot);
              if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
                return memoizedSnapshot = nextSnapshot, currentSelection;
              memoizedSnapshot = nextSnapshot;
              return memoizedSelection = nextSelection;
            }
            var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
              function() {
                return memoizedSelector(getSnapshot());
              },
              null === maybeGetServerSnapshot ? void 0 : function() {
                return memoizedSelector(maybeGetServerSnapshot());
              }
            ];
          },
          [getSnapshot, getServerSnapshot, selector, isEqual]
        );
        var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
        useEffect2(
          function() {
            inst.hasValue = true;
            inst.value = value;
          },
          [value]
        );
        useDebugValue(value);
        return value;
      };
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }
});

// node_modules/use-sync-external-store/with-selector.js
var require_with_selector = __commonJS({
  "node_modules/use-sync-external-store/with-selector.js"(exports, module) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module.exports = require_use_sync_external_store_with_selector_production();
    } else {
      module.exports = require_use_sync_external_store_with_selector_development();
    }
  }
});

// node_modules/clsx/dist/clsx.mjs
function r(e5) {
  var t10, f11, n12 = "";
  if ("string" == typeof e5 || "number" == typeof e5) n12 += e5;
  else if ("object" == typeof e5) if (Array.isArray(e5)) {
    var o12 = e5.length;
    for (t10 = 0; t10 < o12; t10++) e5[t10] && (f11 = r(e5[t10])) && (n12 && (n12 += " "), n12 += f11);
  } else for (f11 in e5) e5[f11] && (n12 && (n12 += " "), n12 += f11);
  return n12;
}
function clsx() {
  for (var e5, t10, f11 = 0, n12 = "", o12 = arguments.length; f11 < o12; f11++) (e5 = arguments[f11]) && (t10 = r(e5)) && (n12 && (n12 += " "), n12 += t10);
  return n12;
}
var clsx_default = clsx;

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t10, e5, n12) => e5 in t10 ? i(t10, e5, { enumerable: true, configurable: true, writable: true, value: n12 }) : t10[e5] = n12;
var r2 = (t10, e5, n12) => (d(t10, typeof e5 != "symbol" ? e5 + "" : e5, n12), n12);
var o = class {
  constructor() {
    r2(this, "current", this.detect());
    r2(this, "handoffState", "pending");
    r2(this, "currentId", 0);
  }
  set(e5) {
    this.current !== e5 && (this.handoffState = "pending", this.currentId = 0, this.current = e5);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o();

// node_modules/@headlessui/react/dist/utils/owner.js
function o2(n12) {
  var e5, r13;
  return s.isServer ? null : n12 ? "ownerDocument" in n12 ? n12.ownerDocument : "current" in n12 ? (r13 = (e5 = n12.current) == null ? void 0 : e5.ownerDocument) != null ? r13 : document : null : document;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
import { useEffect as s2, useState as o4 } from "react";

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t(e5) {
  typeof queueMicrotask == "function" ? queueMicrotask(e5) : Promise.resolve().then(e5).catch((o12) => setTimeout(() => {
    throw o12;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o3() {
  let s11 = [], r13 = { addEventListener(e5, t10, n12, i11) {
    return e5.addEventListener(t10, n12, i11), r13.add(() => e5.removeEventListener(t10, n12, i11));
  }, requestAnimationFrame(...e5) {
    let t10 = requestAnimationFrame(...e5);
    return r13.add(() => cancelAnimationFrame(t10));
  }, nextFrame(...e5) {
    return r13.requestAnimationFrame(() => r13.requestAnimationFrame(...e5));
  }, setTimeout(...e5) {
    let t10 = setTimeout(...e5);
    return r13.add(() => clearTimeout(t10));
  }, microTask(...e5) {
    let t10 = { current: true };
    return t(() => {
      t10.current && e5[0]();
    }), r13.add(() => {
      t10.current = false;
    });
  }, style(e5, t10, n12) {
    let i11 = e5.style.getPropertyValue(t10);
    return Object.assign(e5.style, { [t10]: n12 }), this.add(() => {
      Object.assign(e5.style, { [t10]: i11 });
    });
  }, group(e5) {
    let t10 = o3();
    return e5(t10), this.add(() => t10.dispose());
  }, add(e5) {
    return s11.includes(e5) || s11.push(e5), () => {
      let t10 = s11.indexOf(e5);
      if (t10 >= 0) for (let n12 of s11.splice(t10, 1)) n12();
    };
  }, dispose() {
    for (let e5 of s11.splice(0)) e5();
  } };
  return r13;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p() {
  let [e5] = o4(o3);
  return s2(() => () => e5.dispose(), [e5]), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
import a from "react";

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
import { useRef as t2 } from "react";

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
import { useEffect as f, useLayoutEffect as c } from "react";
var n = (e5, t10) => {
  s.isServer ? f(e5, t10) : c(e5, t10);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
function s3(e5) {
  let r13 = t2(e5);
  return n(() => {
    r13.current = e5;
  }, [e5]), r13;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var o5 = function(t10) {
  let e5 = s3(t10);
  return a.useCallback((...r13) => e5.current(...r13), [e5]);
};

// node_modules/@headlessui/react/dist/internal/disabled.js
import n2, { createContext as r3, useContext as i2 } from "react";
var e = r3(void 0);
function a2() {
  return i2(e);
}

// node_modules/@headlessui/react/dist/utils/render.js
import E, { Fragment as b, cloneElement as j, createElement as v, forwardRef as S, isValidElement as w, useCallback as x, useRef as k } from "react";

// node_modules/@headlessui/react/dist/utils/class-names.js
function t3(...r13) {
  return Array.from(new Set(r13.flatMap((n12) => typeof n12 == "string" ? n12.split(" ") : []))).filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/match.js
function u(r13, n12, ...a17) {
  if (r13 in n12) {
    let e5 = n12[r13];
    return typeof e5 == "function" ? e5(...a17) : e5;
  }
  let t10 = new Error(`Tried to handle "${r13}" but there is no handler defined. Only defined handlers are: ${Object.keys(n12).map((e5) => `"${e5}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t10, u), t10;
}

// node_modules/@headlessui/react/dist/utils/render.js
var O = ((a17) => (a17[a17.None = 0] = "None", a17[a17.RenderStrategy = 1] = "RenderStrategy", a17[a17.Static = 2] = "Static", a17))(O || {});
var A = ((e5) => (e5[e5.Unmount = 0] = "Unmount", e5[e5.Hidden = 1] = "Hidden", e5))(A || {});
function L() {
  let n12 = U();
  return x((r13) => C(__spreadValues({ mergeRefs: n12 }, r13)), [n12]);
}
function C({ ourProps: n12, theirProps: r13, slot: e5, defaultTag: a17, features: s11, visible: t10 = true, name: l9, mergeRefs: i11 }) {
  i11 = i11 != null ? i11 : $;
  let o12 = P(r13, n12);
  if (t10) return F(o12, e5, a17, l9, i11);
  let y7 = s11 != null ? s11 : 0;
  if (y7 & 2) {
    let _a = o12, { static: f11 = false } = _a, u11 = __objRest(_a, ["static"]);
    if (f11) return F(u11, e5, a17, l9, i11);
  }
  if (y7 & 1) {
    let _b = o12, { unmount: f11 = true } = _b, u11 = __objRest(_b, ["unmount"]);
    return u(f11 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return F(__spreadProps(__spreadValues({}, u11), { hidden: true, style: { display: "none" } }), e5, a17, l9, i11);
    } });
  }
  return F(o12, e5, a17, l9, i11);
}
function F(n12, r13 = {}, e5, a17, s11) {
  let _a = h(n12, ["unmount", "static"]), { as: t10 = e5, children: l9, refName: i11 = "ref" } = _a, o12 = __objRest(_a, ["as", "children", "refName"]), y7 = n12.ref !== void 0 ? { [i11]: n12.ref } : {}, f11 = typeof l9 == "function" ? l9(r13) : l9;
  "className" in o12 && o12.className && typeof o12.className == "function" && (o12.className = o12.className(r13)), o12["aria-labelledby"] && o12["aria-labelledby"] === o12.id && (o12["aria-labelledby"] = void 0);
  let u11 = {};
  if (r13) {
    let d7 = false, p6 = [];
    for (let [c12, T7] of Object.entries(r13)) typeof T7 == "boolean" && (d7 = true), T7 === true && p6.push(c12.replace(/([A-Z])/g, (g3) => `-${g3.toLowerCase()}`));
    if (d7) {
      u11["data-headlessui-state"] = p6.join(" ");
      for (let c12 of p6) u11[`data-${c12}`] = "";
    }
  }
  if (t10 === b && (Object.keys(m(o12)).length > 0 || Object.keys(m(u11)).length > 0)) if (!w(f11) || Array.isArray(f11) && f11.length > 1) {
    if (Object.keys(m(o12)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${a17} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(m(o12)).concat(Object.keys(m(u11))).map((d7) => `  - ${d7}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d7) => `  - ${d7}`).join(`
`)].join(`
`));
  } else {
    let d7 = f11.props, p6 = d7 == null ? void 0 : d7.className, c12 = typeof p6 == "function" ? (...R2) => t3(p6(...R2), o12.className) : t3(p6, o12.className), T7 = c12 ? { className: c12 } : {}, g3 = P(f11.props, m(h(o12, ["ref"])));
    for (let R2 in u11) R2 in g3 && delete u11[R2];
    return j(f11, Object.assign({}, g3, u11, y7, { ref: s11(H(f11), y7.ref) }, T7));
  }
  return v(t10, Object.assign({}, h(o12, ["ref"]), t10 !== b && y7, t10 !== b && u11), f11);
}
function U() {
  let n12 = k([]), r13 = x((e5) => {
    for (let a17 of n12.current) a17 != null && (typeof a17 == "function" ? a17(e5) : a17.current = e5);
  }, []);
  return (...e5) => {
    if (!e5.every((a17) => a17 == null)) return n12.current = e5, r13;
  };
}
function $(...n12) {
  return n12.every((r13) => r13 == null) ? void 0 : (r13) => {
    for (let e5 of n12) e5 != null && (typeof e5 == "function" ? e5(r13) : e5.current = r13);
  };
}
function P(...n12) {
  var a17;
  if (n12.length === 0) return {};
  if (n12.length === 1) return n12[0];
  let r13 = {}, e5 = {};
  for (let s11 of n12) for (let t10 in s11) t10.startsWith("on") && typeof s11[t10] == "function" ? ((a17 = e5[t10]) != null || (e5[t10] = []), e5[t10].push(s11[t10])) : r13[t10] = s11[t10];
  if (r13.disabled || r13["aria-disabled"]) for (let s11 in e5) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(s11) && (e5[s11] = [(t10) => {
    var l9;
    return (l9 = t10 == null ? void 0 : t10.preventDefault) == null ? void 0 : l9.call(t10);
  }]);
  for (let s11 in e5) Object.assign(r13, { [s11](t10, ...l9) {
    let i11 = e5[s11];
    for (let o12 of i11) {
      if ((t10 instanceof Event || (t10 == null ? void 0 : t10.nativeEvent) instanceof Event) && t10.defaultPrevented) return;
      o12(t10, ...l9);
    }
  } });
  return r13;
}
function K(n12) {
  var r13;
  return Object.assign(S(n12), { displayName: (r13 = n12.displayName) != null ? r13 : n12.name });
}
function m(n12) {
  let r13 = Object.assign({}, n12);
  for (let e5 in r13) r13[e5] === void 0 && delete r13[e5];
  return r13;
}
function h(n12, r13 = []) {
  let e5 = Object.assign({}, n12);
  for (let a17 of r13) a17 in e5 && delete e5[a17];
  return e5;
}
function H(n12) {
  return E.version.split(".")[0] >= "19" ? n12.props.ref : n12.ref;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
import { useId as r4 } from "react";

// node_modules/@headlessui/react/dist/internal/hidden.js
var a3 = "span";
var s4 = ((e5) => (e5[e5.None = 1] = "None", e5[e5.Focusable = 2] = "Focusable", e5[e5.Hidden = 4] = "Hidden", e5))(s4 || {});
function l(t10, r13) {
  var n12;
  let _a = t10, { features: d7 = 1 } = _a, e5 = __objRest(_a, ["features"]), o12 = { ref: r13, "aria-hidden": (d7 & 2) === 2 ? true : (n12 = e5["aria-hidden"]) != null ? n12 : void 0, hidden: (d7 & 4) === 4 ? true : void 0, style: __spreadValues({ position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" }, (d7 & 4) === 4 && (d7 & 2) !== 2 && { display: "none" }) };
  return L()({ ourProps: o12, theirProps: e5, slot: {}, defaultTag: a3, name: "Hidden" });
}
var f2 = K(l);

// node_modules/@headlessui/react/dist/utils/dom.js
function o6(e5) {
  return typeof e5 != "object" || e5 === null ? false : "nodeType" in e5;
}
function t4(e5) {
  return o6(e5) && "tagName" in e5;
}
function n3(e5) {
  return t4(e5) && "accessKey" in e5;
}
function i3(e5) {
  return t4(e5) && "tabIndex" in e5;
}
function r5(e5) {
  return t4(e5) && "style" in e5;
}
function u2(e5) {
  return n3(e5) && e5.nodeName === "IFRAME";
}
function l2(e5) {
  return n3(e5) && e5.nodeName === "INPUT";
}

// node_modules/@headlessui/react/dist/components/description/description.js
import m2, { createContext as T2, useContext as u4, useMemo as c2, useState as P2 } from "react";

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
import { useEffect as l3, useRef as i4 } from "react";
var u3 = Symbol();
function T(t10, n12 = true) {
  return Object.assign(t10, { [u3]: n12 });
}
function y(...t10) {
  let n12 = i4(t10);
  l3(() => {
    n12.current = t10;
  }, [t10]);
  let c12 = o5((e5) => {
    for (let o12 of n12.current) o12 != null && (typeof o12 == "function" ? o12(e5) : o12.current = e5);
  });
  return t10.every((e5) => e5 == null || (e5 == null ? void 0 : e5[u3])) ? void 0 : c12;
}

// node_modules/@headlessui/react/dist/components/description/description.js
var a4 = T2(null);
a4.displayName = "DescriptionContext";
function f3() {
  let r13 = u4(a4);
  if (r13 === null) {
    let e5 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(e5, f3), e5;
  }
  return r13;
}
function w2() {
  let [r13, e5] = P2([]);
  return [r13.length > 0 ? r13.join(" ") : void 0, c2(() => function(t10) {
    let i11 = o5((n12) => (e5((s11) => [...s11, n12]), () => e5((s11) => {
      let o12 = s11.slice(), p6 = o12.indexOf(n12);
      return p6 !== -1 && o12.splice(p6, 1), o12;
    }))), l9 = c2(() => ({ register: i11, slot: t10.slot, name: t10.name, props: t10.props, value: t10.value }), [i11, t10.slot, t10.name, t10.props, t10.value]);
    return m2.createElement(a4.Provider, { value: l9 }, t10.children);
  }, [e5])];
}
var S2 = "p";
function C2(r13, e5) {
  let d7 = r4(), t10 = a2(), _a = r13, { id: i11 = `headlessui-description-${d7}` } = _a, l9 = __objRest(_a, ["id"]), n12 = f3(), s11 = y(e5);
  n(() => n12.register(i11), [i11, n12.register]);
  let o12 = t10 || false, p6 = c2(() => __spreadProps(__spreadValues({}, n12.slot), { disabled: o12 }), [n12.slot, o12]), D3 = __spreadProps(__spreadValues({ ref: s11 }, n12.props), { id: i11 });
  return L()({ ourProps: D3, theirProps: l9, slot: p6, defaultTag: S2, name: n12.name || "Description" });
}
var _ = K(C2);
var H2 = Object.assign(_, {});

// node_modules/@headlessui/react/dist/components/keyboard.js
var o7 = ((r13) => (r13.Space = " ", r13.Enter = "Enter", r13.Escape = "Escape", r13.Backspace = "Backspace", r13.Delete = "Delete", r13.ArrowLeft = "ArrowLeft", r13.ArrowUp = "ArrowUp", r13.ArrowRight = "ArrowRight", r13.ArrowDown = "ArrowDown", r13.Home = "Home", r13.End = "End", r13.PageUp = "PageUp", r13.PageDown = "PageDown", r13.Tab = "Tab", r13))(o7 || {});

// node_modules/@headlessui/react/dist/internal/close-provider.js
import r6, { createContext as n4, useContext as i5 } from "react";
var e2 = n4(() => {
});
function C3({ value: t10, children: o12 }) {
  return r6.createElement(e2.Provider, { value: t10 }, o12);
}

// node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js
import { useCallback as n6, useId as u6 } from "react";

// node_modules/@headlessui/react/dist/utils/default-map.js
var a5 = class extends Map {
  constructor(t10) {
    super();
    this.factory = t10;
  }
  get(t10) {
    let e5 = super.get(t10);
    return e5 === void 0 && (e5 = this.factory(t10), this.set(t10, e5)), e5;
  }
};

// node_modules/@headlessui/react/dist/machine.js
var p2 = Object.defineProperty;
var h2 = (t10, e5, r13) => e5 in t10 ? p2(t10, e5, { enumerable: true, configurable: true, writable: true, value: r13 }) : t10[e5] = r13;
var f4 = (t10, e5, r13) => (h2(t10, typeof e5 != "symbol" ? e5 + "" : e5, r13), r13);
var b2 = (t10, e5, r13) => {
  if (!e5.has(t10)) throw TypeError("Cannot " + r13);
};
var n5 = (t10, e5, r13) => (b2(t10, e5, "read from private field"), r13 ? r13.call(t10) : e5.get(t10));
var c3 = (t10, e5, r13) => {
  if (e5.has(t10)) throw TypeError("Cannot add the same private member more than once");
  e5 instanceof WeakSet ? e5.add(t10) : e5.set(t10, r13);
};
var u5 = (t10, e5, r13, s11) => (b2(t10, e5, "write to private field"), s11 ? s11.call(t10, r13) : e5.set(t10, r13), r13);
var i6;
var a6;
var o8;
var E2 = class {
  constructor(e5) {
    c3(this, i6, {});
    c3(this, a6, new a5(() => /* @__PURE__ */ new Set()));
    c3(this, o8, /* @__PURE__ */ new Set());
    f4(this, "disposables", o3());
    u5(this, i6, e5);
  }
  dispose() {
    this.disposables.dispose();
  }
  get state() {
    return n5(this, i6);
  }
  subscribe(e5, r13) {
    let s11 = { selector: e5, callback: r13, current: e5(n5(this, i6)) };
    return n5(this, o8).add(s11), this.disposables.add(() => {
      n5(this, o8).delete(s11);
    });
  }
  on(e5, r13) {
    return n5(this, a6).get(e5).add(r13), this.disposables.add(() => {
      n5(this, a6).get(e5).delete(r13);
    });
  }
  send(e5) {
    let r13 = this.reduce(n5(this, i6), e5);
    if (r13 !== n5(this, i6)) {
      u5(this, i6, r13);
      for (let s11 of n5(this, o8)) {
        let l9 = s11.selector(n5(this, i6));
        j2(s11.current, l9) || (s11.current = l9, s11.callback(l9));
      }
      for (let s11 of n5(this, a6).get(e5.type)) s11(n5(this, i6), e5);
    }
  }
};
i6 = /* @__PURE__ */ new WeakMap(), a6 = /* @__PURE__ */ new WeakMap(), o8 = /* @__PURE__ */ new WeakMap();
function j2(t10, e5) {
  return Object.is(t10, e5) ? true : typeof t10 != "object" || t10 === null || typeof e5 != "object" || e5 === null ? false : Array.isArray(t10) && Array.isArray(e5) ? t10.length !== e5.length ? false : d2(t10[Symbol.iterator](), e5[Symbol.iterator]()) : t10 instanceof Map && e5 instanceof Map || t10 instanceof Set && e5 instanceof Set ? t10.size !== e5.size ? false : d2(t10.entries(), e5.entries()) : y2(t10) && y2(e5) ? d2(Object.entries(t10)[Symbol.iterator](), Object.entries(e5)[Symbol.iterator]()) : false;
}
function d2(t10, e5) {
  do {
    let r13 = t10.next(), s11 = e5.next();
    if (r13.done && s11.done) return true;
    if (r13.done || s11.done || !Object.is(r13.value, s11.value)) return false;
  } while (true);
}
function y2(t10) {
  if (Object.prototype.toString.call(t10) !== "[object Object]") return false;
  let e5 = Object.getPrototypeOf(t10);
  return e5 === null || Object.getPrototypeOf(e5) === null;
}

// node_modules/@headlessui/react/dist/machines/stack-machine.js
var a7 = Object.defineProperty;
var r7 = (e5, c12, t10) => c12 in e5 ? a7(e5, c12, { enumerable: true, configurable: true, writable: true, value: t10 }) : e5[c12] = t10;
var p3 = (e5, c12, t10) => (r7(e5, typeof c12 != "symbol" ? c12 + "" : c12, t10), t10);
var k2 = ((t10) => (t10[t10.Push = 0] = "Push", t10[t10.Pop = 1] = "Pop", t10))(k2 || {});
var y3 = { [0](e5, c12) {
  let t10 = c12.id, s11 = e5.stack, i11 = e5.stack.indexOf(t10);
  if (i11 !== -1) {
    let n12 = e5.stack.slice();
    return n12.splice(i11, 1), n12.push(t10), s11 = n12, __spreadProps(__spreadValues({}, e5), { stack: s11 });
  }
  return __spreadProps(__spreadValues({}, e5), { stack: [...e5.stack, t10] });
}, [1](e5, c12) {
  let t10 = c12.id, s11 = e5.stack.indexOf(t10);
  if (s11 === -1) return e5;
  let i11 = e5.stack.slice();
  return i11.splice(s11, 1), __spreadProps(__spreadValues({}, e5), { stack: i11 });
} };
var o9 = class _o extends E2 {
  constructor() {
    super(...arguments);
    p3(this, "actions", { push: (t10) => this.send({ type: 0, id: t10 }), pop: (t10) => this.send({ type: 1, id: t10 }) });
    p3(this, "selectors", { isTop: (t10, s11) => t10.stack[t10.stack.length - 1] === s11, inStack: (t10, s11) => t10.stack.includes(s11) });
  }
  static new() {
    return new _o({ stack: [] });
  }
  reduce(t10, s11) {
    return u(s11.type, y3, t10, s11);
  }
};
var x2 = new a5(() => o9.new());

// node_modules/@headlessui/react/dist/react-glue.js
var import_with_selector = __toESM(require_with_selector(), 1);
function S3(e5, n12, r13 = j2) {
  return (0, import_with_selector.useSyncExternalStoreWithSelector)(o5((i11) => e5.subscribe(s5, i11)), o5(() => e5.state), o5(() => e5.state), o5(n12), r13);
}
function s5(e5) {
  return e5;
}

// node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js
function I(o12, s11) {
  let t10 = u6(), r13 = x2.get(s11), [i11, c12] = S3(r13, n6((e5) => [r13.selectors.isTop(e5, t10), r13.selectors.inStack(e5, t10)], [r13, t10]));
  return n(() => {
    if (o12) return r13.actions.push(t10), () => r13.actions.pop(t10);
  }, [r13, o12, t10]), o12 ? c12 ? i11 : true : false;
}

// node_modules/@headlessui/react/dist/hooks/use-inert-others.js
var f5 = /* @__PURE__ */ new Map();
var u7 = /* @__PURE__ */ new Map();
function h3(t10) {
  var e5;
  let r13 = (e5 = u7.get(t10)) != null ? e5 : 0;
  return u7.set(t10, r13 + 1), r13 !== 0 ? () => m3(t10) : (f5.set(t10, { "aria-hidden": t10.getAttribute("aria-hidden"), inert: t10.inert }), t10.setAttribute("aria-hidden", "true"), t10.inert = true, () => m3(t10));
}
function m3(t10) {
  var i11;
  let r13 = (i11 = u7.get(t10)) != null ? i11 : 1;
  if (r13 === 1 ? u7.delete(t10) : u7.set(t10, r13 - 1), r13 !== 1) return;
  let e5 = f5.get(t10);
  e5 && (e5["aria-hidden"] === null ? t10.removeAttribute("aria-hidden") : t10.setAttribute("aria-hidden", e5["aria-hidden"]), t10.inert = e5.inert, f5.delete(t10));
}
function y4(t10, { allowed: r13, disallowed: e5 } = {}) {
  let i11 = I(t10, "inert-others");
  n(() => {
    var d7, c12;
    if (!i11) return;
    let a17 = o3();
    for (let n12 of (d7 = e5 == null ? void 0 : e5()) != null ? d7 : []) n12 && a17.add(h3(n12));
    let s11 = (c12 = r13 == null ? void 0 : r13()) != null ? c12 : [];
    for (let n12 of s11) {
      if (!n12) continue;
      let l9 = o2(n12);
      if (!l9) continue;
      let o12 = n12.parentElement;
      for (; o12 && o12 !== l9.body; ) {
        for (let p6 of o12.children) s11.some((E7) => p6.contains(E7)) || a17.add(h3(p6));
        o12 = o12.parentElement;
      }
    }
    return a17.dispose;
  }, [i11, r13, e5]);
}

// node_modules/@headlessui/react/dist/hooks/use-on-disappear.js
import { useEffect as l4 } from "react";
function p4(s11, n12, o12) {
  let i11 = s3((t10) => {
    let e5 = t10.getBoundingClientRect();
    e5.x === 0 && e5.y === 0 && e5.width === 0 && e5.height === 0 && o12();
  });
  l4(() => {
    if (!s11) return;
    let t10 = n12 === null ? null : n3(n12) ? n12 : n12.current;
    if (!t10) return;
    let e5 = o3();
    if (typeof ResizeObserver != "undefined") {
      let r13 = new ResizeObserver(() => i11.current(t10));
      r13.observe(t10), e5.add(() => r13.disconnect());
    }
    if (typeof IntersectionObserver != "undefined") {
      let r13 = new IntersectionObserver(() => i11.current(t10));
      r13.observe(t10), e5.add(() => r13.disconnect());
    }
    return () => e5.dispose();
  }, [n12, i11, s11]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
import { useCallback as T4, useRef as E3 } from "react";

// node_modules/@headlessui/react/dist/utils/focus-management.js
var f6 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e5) => `${e5}:not([tabindex='-1'])`).join(",");
var F2 = ["[data-autofocus]"].map((e5) => `${e5}:not([tabindex='-1'])`).join(",");
var T3 = ((n12) => (n12[n12.First = 1] = "First", n12[n12.Previous = 2] = "Previous", n12[n12.Next = 4] = "Next", n12[n12.Last = 8] = "Last", n12[n12.WrapAround = 16] = "WrapAround", n12[n12.NoScroll = 32] = "NoScroll", n12[n12.AutoFocus = 64] = "AutoFocus", n12))(T3 || {});
var y5 = ((o12) => (o12[o12.Error = 0] = "Error", o12[o12.Overflow = 1] = "Overflow", o12[o12.Success = 2] = "Success", o12[o12.Underflow = 3] = "Underflow", o12))(y5 || {});
var S4 = ((t10) => (t10[t10.Previous = -1] = "Previous", t10[t10.Next = 1] = "Next", t10))(S4 || {});
function b3(e5 = document.body) {
  return e5 == null ? [] : Array.from(e5.querySelectorAll(f6)).sort((r13, t10) => Math.sign((r13.tabIndex || Number.MAX_SAFE_INTEGER) - (t10.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function O2(e5 = document.body) {
  return e5 == null ? [] : Array.from(e5.querySelectorAll(F2)).sort((r13, t10) => Math.sign((r13.tabIndex || Number.MAX_SAFE_INTEGER) - (t10.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h4 = ((t10) => (t10[t10.Strict = 0] = "Strict", t10[t10.Loose = 1] = "Loose", t10))(h4 || {});
function A2(e5, r13 = 0) {
  var t10;
  return e5 === ((t10 = o2(e5)) == null ? void 0 : t10.body) ? false : u(r13, { [0]() {
    return e5.matches(f6);
  }, [1]() {
    let l9 = e5;
    for (; l9 !== null; ) {
      if (l9.matches(f6)) return true;
      l9 = l9.parentElement;
    }
    return false;
  } });
}
var H3 = ((t10) => (t10[t10.Keyboard = 0] = "Keyboard", t10[t10.Mouse = 1] = "Mouse", t10))(H3 || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e5) => {
  e5.metaKey || e5.altKey || e5.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e5) => {
  e5.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e5.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function I2(e5) {
  e5 == null || e5.focus({ preventScroll: true });
}
var w3 = ["textarea", "input"].join(",");
function _2(e5) {
  var r13, t10;
  return (t10 = (r13 = e5 == null ? void 0 : e5.matches) == null ? void 0 : r13.call(e5, w3)) != null ? t10 : false;
}
function P3(e5, r13 = (t10) => t10) {
  return e5.slice().sort((t10, l9) => {
    let o12 = r13(t10), c12 = r13(l9);
    if (o12 === null || c12 === null) return 0;
    let u11 = o12.compareDocumentPosition(c12);
    return u11 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : u11 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function g(e5, r13, { sorted: t10 = true, relativeTo: l9 = null, skipElements: o12 = [] } = {}) {
  let c12 = Array.isArray(e5) ? e5.length > 0 ? e5[0].ownerDocument : document : e5.ownerDocument, u11 = Array.isArray(e5) ? t10 ? P3(e5) : e5 : r13 & 64 ? O2(e5) : b3(e5);
  o12.length > 0 && u11.length > 1 && (u11 = u11.filter((s11) => !o12.some((a17) => a17 != null && "current" in a17 ? (a17 == null ? void 0 : a17.current) === s11 : a17 === s11))), l9 = l9 != null ? l9 : c12.activeElement;
  let n12 = (() => {
    if (r13 & 5) return 1;
    if (r13 & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x6 = (() => {
    if (r13 & 1) return 0;
    if (r13 & 2) return Math.max(0, u11.indexOf(l9)) - 1;
    if (r13 & 4) return Math.max(0, u11.indexOf(l9)) + 1;
    if (r13 & 8) return u11.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), M5 = r13 & 32 ? { preventScroll: true } : {}, m6 = 0, d7 = u11.length, i11;
  do {
    if (m6 >= d7 || m6 + d7 <= 0) return 0;
    let s11 = x6 + m6;
    if (r13 & 16) s11 = (s11 + d7) % d7;
    else {
      if (s11 < 0) return 3;
      if (s11 >= d7) return 1;
    }
    i11 = u11[s11], i11 == null || i11.focus(M5), m6 += n12;
  } while (i11 !== c12.activeElement);
  return r13 & 6 && _2(i11) && i11.select(), 2;
}

// node_modules/@headlessui/react/dist/utils/platform.js
function t5() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i7() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n7() {
  return t5() || i7();
}

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
import { useEffect as c4 } from "react";
function i8(t10, e5, o12, n12) {
  let u11 = s3(o12);
  c4(() => {
    if (!t10) return;
    function r13(m6) {
      u11.current(m6);
    }
    return document.addEventListener(e5, r13, n12), () => document.removeEventListener(e5, r13, n12);
  }, [t10, e5, n12]);
}

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
import { useEffect as a9 } from "react";
function s6(t10, e5, o12, n12) {
  let i11 = s3(o12);
  a9(() => {
    if (!t10) return;
    function r13(d7) {
      i11.current(d7);
    }
    return window.addEventListener(e5, r13, n12), () => window.removeEventListener(e5, r13, n12);
  }, [t10, e5, n12]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var C4 = 30;
function k3(o12, f11, h7) {
  let m6 = s3(h7), s11 = T4(function(e5, c12) {
    if (e5.defaultPrevented) return;
    let r13 = c12(e5);
    if (r13 === null || !r13.getRootNode().contains(r13) || !r13.isConnected) return;
    let M5 = function u11(n12) {
      return typeof n12 == "function" ? u11(n12()) : Array.isArray(n12) || n12 instanceof Set ? n12 : [n12];
    }(f11);
    for (let u11 of M5) if (u11 !== null && (u11.contains(r13) || e5.composed && e5.composedPath().includes(u11))) return;
    return !A2(r13, h4.Loose) && r13.tabIndex !== -1 && e5.preventDefault(), m6.current(e5, r13);
  }, [m6, f11]), i11 = E3(null);
  i8(o12, "pointerdown", (t10) => {
    var e5, c12;
    n7() || (i11.current = ((c12 = (e5 = t10.composedPath) == null ? void 0 : e5.call(t10)) == null ? void 0 : c12[0]) || t10.target);
  }, true), i8(o12, "pointerup", (t10) => {
    if (n7() || !i11.current) return;
    let e5 = i11.current;
    return i11.current = null, s11(t10, () => e5);
  }, true);
  let l9 = E3({ x: 0, y: 0 });
  i8(o12, "touchstart", (t10) => {
    l9.current.x = t10.touches[0].clientX, l9.current.y = t10.touches[0].clientY;
  }, true), i8(o12, "touchend", (t10) => {
    let e5 = { x: t10.changedTouches[0].clientX, y: t10.changedTouches[0].clientY };
    if (!(Math.abs(e5.x - l9.current.x) >= C4 || Math.abs(e5.y - l9.current.y) >= C4)) return s11(t10, () => i3(t10.target) ? t10.target : null);
  }, true), s6(o12, "blur", (t10) => s11(t10, () => u2(window.document.activeElement) ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
import { useMemo as t6 } from "react";
function n8(...e5) {
  return t6(() => o2(...e5), [...e5]);
}

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
import { useEffect as d3 } from "react";
function E4(n12, e5, a17, t10) {
  let i11 = s3(a17);
  d3(() => {
    n12 = n12 != null ? n12 : window;
    function r13(o12) {
      i11.current(o12);
    }
    return n12.addEventListener(e5, r13, t10), () => n12.removeEventListener(e5, r13, t10);
  }, [n12, e5, t10]);
}

// node_modules/@headlessui/react/dist/hooks/use-store.js
import { useSyncExternalStore as e3 } from "react";
function o10(t10) {
  return e3(t10.subscribe, t10.getSnapshot, t10.getSnapshot);
}

// node_modules/@headlessui/react/dist/utils/store.js
function a10(o12, r13) {
  let t10 = o12(), n12 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t10;
  }, subscribe(e5) {
    return n12.add(e5), () => n12.delete(e5);
  }, dispatch(e5, ...s11) {
    let i11 = r13[e5].call(t10, ...s11);
    i11 && (t10 = i11, n12.forEach((c12) => c12()));
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function d4() {
  let r13;
  return { before({ doc: e5 }) {
    var l9;
    let o12 = e5.documentElement, t10 = (l9 = e5.defaultView) != null ? l9 : window;
    r13 = Math.max(0, t10.innerWidth - o12.clientWidth);
  }, after({ doc: e5, d: o12 }) {
    let t10 = e5.documentElement, l9 = Math.max(0, t10.clientWidth - t10.offsetWidth), n12 = Math.max(0, r13 - l9);
    o12.style(t10, "paddingRight", `${n12}px`);
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function w4() {
  return t5() ? { before({ doc: n12, d: l9, meta: f11 }) {
    function i11(a17) {
      return f11.containers.flatMap((r13) => r13()).some((r13) => r13.contains(a17));
    }
    l9.microTask(() => {
      var c12;
      if (window.getComputedStyle(n12.documentElement).scrollBehavior !== "auto") {
        let t10 = o3();
        t10.style(n12.documentElement, "scrollBehavior", "auto"), l9.add(() => l9.microTask(() => t10.dispose()));
      }
      let a17 = (c12 = window.scrollY) != null ? c12 : window.pageYOffset, r13 = null;
      l9.addEventListener(n12, "click", (t10) => {
        if (i3(t10.target)) try {
          let e5 = t10.target.closest("a");
          if (!e5) return;
          let { hash: m6 } = new URL(e5.href), s11 = n12.querySelector(m6);
          i3(s11) && !i11(s11) && (r13 = s11);
        } catch (e5) {
        }
      }, true), l9.addEventListener(n12, "touchstart", (t10) => {
        if (i3(t10.target) && r5(t10.target)) if (i11(t10.target)) {
          let e5 = t10.target;
          for (; e5.parentElement && i11(e5.parentElement); ) e5 = e5.parentElement;
          l9.style(e5, "overscrollBehavior", "contain");
        } else l9.style(t10.target, "touchAction", "none");
      }), l9.addEventListener(n12, "touchmove", (t10) => {
        if (i3(t10.target)) {
          if (l2(t10.target)) return;
          if (i11(t10.target)) {
            let e5 = t10.target;
            for (; e5.parentElement && e5.dataset.headlessuiPortal !== "" && !(e5.scrollHeight > e5.clientHeight || e5.scrollWidth > e5.clientWidth); ) e5 = e5.parentElement;
            e5.dataset.headlessuiPortal === "" && t10.preventDefault();
          } else t10.preventDefault();
        }
      }, { passive: false }), l9.add(() => {
        var e5;
        let t10 = (e5 = window.scrollY) != null ? e5 : window.pageYOffset;
        a17 !== t10 && window.scrollTo(0, a17), r13 && r13.isConnected && (r13.scrollIntoView({ block: "nearest" }), r13 = null);
      });
    });
  } } : {};
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function r8() {
  return { before({ doc: e5, d: o12 }) {
    o12.style(e5.documentElement, "overflow", "hidden");
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function m4(e5) {
  let n12 = {};
  for (let t10 of e5) Object.assign(n12, t10(n12));
  return n12;
}
var a11 = a10(() => /* @__PURE__ */ new Map(), { PUSH(e5, n12) {
  var o12;
  let t10 = (o12 = this.get(e5)) != null ? o12 : { doc: e5, count: 0, d: o3(), meta: /* @__PURE__ */ new Set() };
  return t10.count++, t10.meta.add(n12), this.set(e5, t10), this;
}, POP(e5, n12) {
  let t10 = this.get(e5);
  return t10 && (t10.count--, t10.meta.delete(n12)), this;
}, SCROLL_PREVENT({ doc: e5, d: n12, meta: t10 }) {
  let o12 = { doc: e5, d: n12, meta: m4(t10) }, c12 = [w4(), d4(), r8()];
  c12.forEach(({ before: r13 }) => r13 == null ? void 0 : r13(o12)), c12.forEach(({ after: r13 }) => r13 == null ? void 0 : r13(o12));
}, SCROLL_ALLOW({ d: e5 }) {
  e5.dispose();
}, TEARDOWN({ doc: e5 }) {
  this.delete(e5);
} });
a11.subscribe(() => {
  let e5 = a11.getSnapshot(), n12 = /* @__PURE__ */ new Map();
  for (let [t10] of e5) n12.set(t10, t10.documentElement.style.overflow);
  for (let t10 of e5.values()) {
    let o12 = n12.get(t10.doc) === "hidden", c12 = t10.count !== 0;
    (c12 && !o12 || !c12 && o12) && a11.dispatch(t10.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t10), t10.count === 0 && a11.dispatch("TEARDOWN", t10);
  }
});

// node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function a12(r13, e5, n12 = () => ({ containers: [] })) {
  let f11 = o10(a11), o12 = e5 ? f11.get(e5) : void 0, i11 = o12 ? o12.count > 0 : false;
  return n(() => {
    if (!(!e5 || !r13)) return a11.dispatch("PUSH", e5, n12), () => a11.dispatch("POP", e5, n12);
  }, [r13, e5]), i11;
}

// node_modules/@headlessui/react/dist/hooks/use-scroll-lock.js
function f7(e5, c12, n12 = () => [document.body]) {
  let r13 = I(e5, "scroll-lock");
  a12(r13, c12, (t10) => {
    var o12;
    return { containers: [...(o12 = t10.containers) != null ? o12 : [], n12] };
  });
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
import { useRef as c6, useState as S5 } from "react";

// node_modules/@headlessui/react/dist/hooks/use-flags.js
import { useCallback as r9, useState as b4 } from "react";
function c5(u11 = 0) {
  let [t10, l9] = b4(u11), g3 = r9((e5) => l9(e5), [t10]), s11 = r9((e5) => l9((a17) => a17 | e5), [t10]), m6 = r9((e5) => (t10 & e5) === e5, [t10]), n12 = r9((e5) => l9((a17) => a17 & ~e5), [l9]), F4 = r9((e5) => l9((a17) => a17 ^ e5), [l9]);
  return { flags: t10, setFlag: g3, addFlag: s11, hasFlag: m6, removeFlag: n12, toggleFlag: F4 };
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
var T5;
var b5;
typeof process != "undefined" && typeof globalThis != "undefined" && typeof Element != "undefined" && ((T5 = process == null ? void 0 : process.env) == null ? void 0 : T5["NODE_ENV"]) === "test" && typeof ((b5 = Element == null ? void 0 : Element.prototype) == null ? void 0 : b5.getAnimations) == "undefined" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var L2 = ((r13) => (r13[r13.None = 0] = "None", r13[r13.Closed = 1] = "Closed", r13[r13.Enter = 2] = "Enter", r13[r13.Leave = 4] = "Leave", r13))(L2 || {});
function R(t10) {
  let n12 = {};
  for (let e5 in t10) t10[e5] === true && (n12[`data-${e5}`] = "");
  return n12;
}
function x3(t10, n12, e5, i11) {
  let [r13, o12] = S5(e5), { hasFlag: s11, addFlag: a17, removeFlag: l9 } = c5(t10 && r13 ? 3 : 0), u11 = c6(false), f11 = c6(false), E7 = p();
  return n(() => {
    var d7;
    if (t10) {
      if (e5 && o12(true), !n12) {
        e5 && a17(3);
        return;
      }
      return (d7 = i11 == null ? void 0 : i11.start) == null || d7.call(i11, e5), C5(n12, { inFlight: u11, prepare() {
        f11.current ? f11.current = false : f11.current = u11.current, u11.current = true, !f11.current && (e5 ? (a17(3), l9(4)) : (a17(4), l9(2)));
      }, run() {
        f11.current ? e5 ? (l9(3), a17(4)) : (l9(4), a17(3)) : e5 ? l9(1) : a17(1);
      }, done() {
        var p6;
        f11.current && typeof n12.getAnimations == "function" && n12.getAnimations().length > 0 || (u11.current = false, l9(7), e5 || o12(false), (p6 = i11 == null ? void 0 : i11.end) == null || p6.call(i11, e5));
      } });
    }
  }, [t10, e5, n12, E7]), t10 ? [r13, { closed: s11(1), enter: s11(2), leave: s11(4), transition: s11(2) || s11(4) }] : [e5, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function C5(t10, { prepare: n12, run: e5, done: i11, inFlight: r13 }) {
  let o12 = o3();
  return j3(t10, { prepare: n12, inFlight: r13 }), o12.nextFrame(() => {
    e5(), o12.requestAnimationFrame(() => {
      o12.add(M(t10, i11));
    });
  }), o12.dispose;
}
function M(t10, n12) {
  var o12, s11;
  let e5 = o3();
  if (!t10) return e5.dispose;
  let i11 = false;
  e5.add(() => {
    i11 = true;
  });
  let r13 = (s11 = (o12 = t10.getAnimations) == null ? void 0 : o12.call(t10).filter((a17) => a17 instanceof CSSTransition)) != null ? s11 : [];
  return r13.length === 0 ? (n12(), e5.dispose) : (Promise.allSettled(r13.map((a17) => a17.finished)).then(() => {
    i11 || n12();
  }), e5.dispose);
}
function j3(t10, { inFlight: n12, prepare: e5 }) {
  if (n12 != null && n12.current) {
    e5();
    return;
  }
  let i11 = t10.style.transition;
  t10.style.transition = "none", e5(), t10.offsetHeight, t10.style.transition = i11;
}

// node_modules/@headlessui/react/dist/hooks/use-watch.js
import { useEffect as f8, useRef as s7 } from "react";
function m5(u11, t10) {
  let e5 = s7([]), r13 = o5(u11);
  f8(() => {
    let o12 = [...e5.current];
    for (let [a17, l9] of t10.entries()) if (e5.current[a17] !== l9) {
      let n12 = r13(t10, o12);
      return e5.current = t10, n12;
    }
  }, [r13, ...t10]);
}

// node_modules/@headlessui/react/dist/internal/open-closed.js
import r10, { createContext as l5, useContext as d5 } from "react";
var n9 = l5(null);
n9.displayName = "OpenClosedContext";
var i9 = ((e5) => (e5[e5.Open = 1] = "Open", e5[e5.Closed = 2] = "Closed", e5[e5.Closing = 4] = "Closing", e5[e5.Opening = 8] = "Opening", e5))(i9 || {});
function u8() {
  return d5(n9);
}
function c7({ value: o12, children: t10 }) {
  return r10.createElement(n9.Provider, { value: o12 }, t10);
}
function s8({ children: o12 }) {
  return r10.createElement(n9.Provider, { value: null }, o12);
}

// node_modules/@headlessui/react/dist/utils/document-ready.js
function t7(n12) {
  function e5() {
    document.readyState !== "loading" && (n12(), document.removeEventListener("DOMContentLoaded", e5));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e5), e5());
}

// node_modules/@headlessui/react/dist/utils/active-element-history.js
var n10 = [];
t7(() => {
  function e5(t10) {
    if (!i3(t10.target) || t10.target === document.body || n10[0] === t10.target) return;
    let r13 = t10.target;
    r13 = r13.closest(f6), n10.unshift(r13 != null ? r13 : t10.target), n10 = n10.filter((o12) => o12 != null && o12.isConnected), n10.splice(10);
  }
  window.addEventListener("click", e5, { capture: true }), window.addEventListener("mousedown", e5, { capture: true }), window.addEventListener("focus", e5, { capture: true }), document.body.addEventListener("click", e5, { capture: true }), document.body.addEventListener("mousedown", e5, { capture: true }), document.body.addEventListener("focus", e5, { capture: true });
});

// node_modules/@headlessui/react/dist/components/portal/portal.js
import T6, { Fragment as E5, createContext as A3, useContext as d6, useEffect as G, useMemo as x4, useRef as L3, useState as c10 } from "react";
import { createPortal as h5 } from "react-dom";

// node_modules/@headlessui/react/dist/hooks/use-on-unmount.js
import { useEffect as u9, useRef as n11 } from "react";
function c8(t10) {
  let r13 = o5(t10), e5 = n11(false);
  u9(() => (e5.current = false, () => {
    e5.current = true, t(() => {
      e5.current && r13();
    });
  }), [r13]);
}

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
import * as t8 from "react";
function s9() {
  let r13 = typeof document == "undefined";
  return "useSyncExternalStore" in t8 ? ((o12) => o12.useSyncExternalStore)(t8)(() => () => {
  }, () => false, () => !r13) : false;
}
function l6() {
  let r13 = s9(), [e5, n12] = t8.useState(s.isHandoffComplete);
  return e5 && s.isHandoffComplete === false && n12(false), t8.useEffect(() => {
    e5 !== true && n12(true);
  }, [e5]), t8.useEffect(() => s.handoff(), []), r13 ? false : e5;
}

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
import t9, { createContext as r11, useContext as c9 } from "react";
var e4 = r11(false);
function a13() {
  return c9(e4);
}
function l7(o12) {
  return t9.createElement(e4.Provider, { value: o12.force }, o12.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
function I3(e5) {
  let l9 = a13(), o12 = d6(H4), [r13, u11] = c10(() => {
    var i11;
    if (!l9 && o12 !== null) return (i11 = o12.current) != null ? i11 : null;
    if (s.isServer) return null;
    let t10 = e5 == null ? void 0 : e5.getElementById("headlessui-portal-root");
    if (t10) return t10;
    if (e5 === null) return null;
    let a17 = e5.createElement("div");
    return a17.setAttribute("id", "headlessui-portal-root"), e5.body.appendChild(a17);
  });
  return G(() => {
    r13 !== null && (e5 != null && e5.body.contains(r13) || e5 == null || e5.body.appendChild(r13));
  }, [r13, e5]), G(() => {
    l9 || o12 !== null && u11(o12.current);
  }, [o12, u11, l9]), r13;
}
var M2 = E5;
var D = K(function(l9, o12) {
  let _a = l9, { ownerDocument: r13 = null } = _a, u11 = __objRest(_a, ["ownerDocument"]), t10 = L3(null), a17 = y(T((s11) => {
    t10.current = s11;
  }), o12), i11 = n8(t10), f11 = r13 != null ? r13 : i11, p6 = I3(f11), [n12] = c10(() => {
    var s11;
    return s.isServer ? null : (s11 = f11 == null ? void 0 : f11.createElement("div")) != null ? s11 : null;
  }), P5 = d6(g2), O5 = l6();
  n(() => {
    !p6 || !n12 || p6.contains(n12) || (n12.setAttribute("data-headlessui-portal", ""), p6.appendChild(n12));
  }, [p6, n12]), n(() => {
    if (n12 && P5) return P5.register(n12);
  }, [P5, n12]), c8(() => {
    var s11;
    !p6 || !n12 || (o6(n12) && p6.contains(n12) && p6.removeChild(n12), p6.childNodes.length <= 0 && ((s11 = p6.parentElement) == null || s11.removeChild(p6)));
  });
  let b7 = L();
  return O5 ? !p6 || !n12 ? null : h5(b7({ ourProps: { ref: a17 }, theirProps: u11, slot: {}, defaultTag: M2, name: "Portal" }), n12) : null;
});
function J(e5, l9) {
  let o12 = y(l9), _a = e5, { enabled: r13 = true, ownerDocument: u11 } = _a, t10 = __objRest(_a, ["enabled", "ownerDocument"]), a17 = L();
  return r13 ? T6.createElement(D, __spreadProps(__spreadValues({}, t10), { ownerDocument: u11, ref: o12 })) : a17({ ourProps: { ref: o12 }, theirProps: t10, slot: {}, defaultTag: M2, name: "Portal" });
}
var X = E5;
var H4 = A3(null);
function k4(e5, l9) {
  let _a = e5, { target: o12 } = _a, r13 = __objRest(_a, ["target"]), t10 = { ref: y(l9) }, a17 = L();
  return T6.createElement(H4.Provider, { value: o12 }, a17({ ourProps: t10, theirProps: r13, defaultTag: X, name: "Popover.Group" }));
}
var g2 = A3(null);
function oe() {
  let e5 = d6(g2), l9 = L3([]), o12 = o5((t10) => (l9.current.push(t10), e5 && e5.register(t10), () => r13(t10))), r13 = o5((t10) => {
    let a17 = l9.current.indexOf(t10);
    a17 !== -1 && l9.current.splice(a17, 1), e5 && e5.unregister(t10);
  }), u11 = x4(() => ({ register: o12, unregister: r13, portals: l9 }), [o12, r13, l9]);
  return [l9, x4(() => function({ children: a17 }) {
    return T6.createElement(g2.Provider, { value: u11 }, a17);
  }, [u11])];
}
var B = K(J);
var q = K(k4);
var ne = Object.assign(B, { Group: q });

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
import l8, { Fragment as $3, createContext as se, createRef as pe, useCallback as de2, useContext as ue2, useEffect as fe2, useMemo as A4, useReducer as Te2, useRef as j4 } from "react";

// node_modules/@headlessui/react/dist/hooks/use-escape.js
function a14(o12, r13 = typeof document != "undefined" ? document.defaultView : null, t10) {
  let n12 = I(o12, "escape");
  E4(r13, "keydown", (e5) => {
    n12 && (e5.defaultPrevented || e5.key === o7.Escape && t10(e5));
  });
}

// node_modules/@headlessui/react/dist/hooks/use-is-touch-device.js
import { useState as i10 } from "react";
function f9() {
  var t10;
  let [e5] = i10(() => typeof window != "undefined" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [o12, c12] = i10((t10 = e5 == null ? void 0 : e5.matches) != null ? t10 : false);
  return n(() => {
    if (!e5) return;
    function n12(r13) {
      c12(r13.matches);
    }
    return e5.addEventListener("change", n12), () => e5.removeEventListener("change", n12);
  }, [e5]), o12;
}

// node_modules/@headlessui/react/dist/hooks/use-root-containers.js
import s10, { createContext as E6, useContext as h6, useState as p5 } from "react";
function H5({ defaultContainers: r13 = [], portals: n12, mainTreeNode: o12 } = {}) {
  let l9 = n8(o12), u11 = o5(() => {
    var i11, c12;
    let t10 = [];
    for (let e5 of r13) e5 !== null && (t4(e5) ? t10.push(e5) : "current" in e5 && t4(e5.current) && t10.push(e5.current));
    if (n12 != null && n12.current) for (let e5 of n12.current) t10.push(e5);
    for (let e5 of (i11 = l9 == null ? void 0 : l9.querySelectorAll("html > *, body > *")) != null ? i11 : []) e5 !== document.body && e5 !== document.head && t4(e5) && e5.id !== "headlessui-portal-root" && (o12 && (e5.contains(o12) || e5.contains((c12 = o12 == null ? void 0 : o12.getRootNode()) == null ? void 0 : c12.host)) || t10.some((d7) => e5.contains(d7)) || t10.push(e5));
    return t10;
  });
  return { resolveContainers: u11, contains: o5((t10) => u11().some((i11) => i11.contains(t10))) };
}
var a15 = E6(null);
function P4({ children: r13, node: n12 }) {
  let [o12, l9] = p5(null), u11 = y6(n12 != null ? n12 : o12);
  return s10.createElement(a15.Provider, { value: u11 }, r13, u11 === null && s10.createElement(f2, { features: s4.Hidden, ref: (t10) => {
    var i11, c12;
    if (t10) {
      for (let e5 of (c12 = (i11 = o2(t10)) == null ? void 0 : i11.querySelectorAll("html > *, body > *")) != null ? c12 : []) if (e5 !== document.body && e5 !== document.head && t4(e5) && e5 != null && e5.contains(t10)) {
        l9(e5);
        break;
      }
    }
  } }));
}
function y6(r13 = null) {
  var n12;
  return (n12 = h6(a15)) != null ? n12 : r13;
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
import F3, { useRef as M3 } from "react";

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
import { useRef as r12 } from "react";
function f10() {
  let e5 = r12(false);
  return n(() => (e5.current = true, () => {
    e5.current = false;
  }), []), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
import { useRef as o11 } from "react";
var a16 = ((r13) => (r13[r13.Forwards = 0] = "Forwards", r13[r13.Backwards = 1] = "Backwards", r13))(a16 || {});
function u10() {
  let e5 = o11(0);
  return s6(true, "keydown", (r13) => {
    r13.key === "Tab" && (e5.current = r13.shiftKey ? 1 : 0);
  }, true), e5;
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
function x5(s11) {
  if (!s11) return /* @__PURE__ */ new Set();
  if (typeof s11 == "function") return new Set(s11());
  let e5 = /* @__PURE__ */ new Set();
  for (let t10 of s11.current) t4(t10.current) && e5.add(t10.current);
  return e5;
}
var $2 = "div";
var G2 = ((n12) => (n12[n12.None = 0] = "None", n12[n12.InitialFocus = 1] = "InitialFocus", n12[n12.TabLock = 2] = "TabLock", n12[n12.FocusLock = 4] = "FocusLock", n12[n12.RestoreFocus = 8] = "RestoreFocus", n12[n12.AutoFocus = 16] = "AutoFocus", n12))(G2 || {});
function D2(s11, e5) {
  let t10 = M3(null), r13 = y(t10, e5), _a = s11, { initialFocus: o12, initialFocusFallback: a17, containers: n12, features: u11 = 15 } = _a, f11 = __objRest(_a, ["initialFocus", "initialFocusFallback", "containers", "features"]);
  l6() || (u11 = 0);
  let l9 = n8(t10);
  te(u11, { ownerDocument: l9 });
  let m6 = re(u11, { ownerDocument: l9, container: t10, initialFocus: o12, initialFocusFallback: a17 });
  ne2(u11, { ownerDocument: l9, container: t10, containers: n12, previousActiveElement: m6 });
  let g3 = u10(), v2 = o5((c12) => {
    if (!n3(t10.current)) return;
    let E7 = t10.current;
    ((V2) => V2())(() => {
      u(g3.current, { [a16.Forwards]: () => {
        g(E7, T3.First, { skipElements: [c12.relatedTarget, a17] });
      }, [a16.Backwards]: () => {
        g(E7, T3.Last, { skipElements: [c12.relatedTarget, a17] });
      } });
    });
  }), A5 = I(!!(u11 & 2), "focus-trap#tab-lock"), N = p(), b7 = M3(false), k5 = { ref: r13, onKeyDown(c12) {
    c12.key == "Tab" && (b7.current = true, N.requestAnimationFrame(() => {
      b7.current = false;
    }));
  }, onBlur(c12) {
    if (!(u11 & 4)) return;
    let E7 = x5(n12);
    n3(t10.current) && E7.add(t10.current);
    let L4 = c12.relatedTarget;
    i3(L4) && L4.dataset.headlessuiFocusGuard !== "true" && (I4(E7, L4) || (b7.current ? g(t10.current, u(g3.current, { [a16.Forwards]: () => T3.Next, [a16.Backwards]: () => T3.Previous }) | T3.WrapAround, { relativeTo: c12.target }) : i3(c12.target) && I2(c12.target)));
  } }, B2 = L();
  return F3.createElement(F3.Fragment, null, A5 && F3.createElement(f2, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: v2, features: s4.Focusable }), B2({ ourProps: k5, theirProps: f11, defaultTag: $2, name: "FocusTrap" }), A5 && F3.createElement(f2, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: v2, features: s4.Focusable }));
}
var w5 = K(D2);
var Re = Object.assign(w5, { features: G2 });
function ee(s11 = true) {
  let e5 = M3(n10.slice());
  return m5(([t10], [r13]) => {
    r13 === true && t10 === false && t(() => {
      e5.current.splice(0);
    }), r13 === false && t10 === true && (e5.current = n10.slice());
  }, [s11, n10, e5]), o5(() => {
    var t10;
    return (t10 = e5.current.find((r13) => r13 != null && r13.isConnected)) != null ? t10 : null;
  });
}
function te(s11, { ownerDocument: e5 }) {
  let t10 = !!(s11 & 8), r13 = ee(t10);
  m5(() => {
    t10 || (e5 == null ? void 0 : e5.activeElement) === (e5 == null ? void 0 : e5.body) && I2(r13());
  }, [t10]), c8(() => {
    t10 && I2(r13());
  });
}
function re(s11, { ownerDocument: e5, container: t10, initialFocus: r13, initialFocusFallback: o12 }) {
  let a17 = M3(null), n12 = I(!!(s11 & 1), "focus-trap#initial-focus"), u11 = f10();
  return m5(() => {
    if (s11 === 0) return;
    if (!n12) {
      o12 != null && o12.current && I2(o12.current);
      return;
    }
    let f11 = t10.current;
    f11 && t(() => {
      if (!u11.current) return;
      let l9 = e5 == null ? void 0 : e5.activeElement;
      if (r13 != null && r13.current) {
        if ((r13 == null ? void 0 : r13.current) === l9) {
          a17.current = l9;
          return;
        }
      } else if (f11.contains(l9)) {
        a17.current = l9;
        return;
      }
      if (r13 != null && r13.current) I2(r13.current);
      else {
        if (s11 & 16) {
          if (g(f11, T3.First | T3.AutoFocus) !== y5.Error) return;
        } else if (g(f11, T3.First) !== y5.Error) return;
        if (o12 != null && o12.current && (I2(o12.current), (e5 == null ? void 0 : e5.activeElement) === o12.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      a17.current = e5 == null ? void 0 : e5.activeElement;
    });
  }, [o12, n12, s11]), a17;
}
function ne2(s11, { ownerDocument: e5, container: t10, containers: r13, previousActiveElement: o12 }) {
  let a17 = f10(), n12 = !!(s11 & 4);
  E4(e5 == null ? void 0 : e5.defaultView, "focus", (u11) => {
    if (!n12 || !a17.current) return;
    let f11 = x5(r13);
    n3(t10.current) && f11.add(t10.current);
    let l9 = o12.current;
    if (!l9) return;
    let m6 = u11.target;
    n3(m6) ? I4(f11, m6) ? (o12.current = m6, I2(m6)) : (u11.preventDefault(), u11.stopPropagation(), I2(l9)) : I2(o12.current);
  }, true);
}
function I4(s11, e5) {
  for (let t10 of s11) if (t10.contains(e5)) return true;
  return false;
}

// node_modules/@headlessui/react/dist/components/transition/transition.js
import c11, { Fragment as O3, createContext as ne3, useContext as q2, useEffect as ge, useMemo as ie, useRef as b6, useState as V } from "react";
function ue(e5) {
  var t10;
  return !!(e5.enter || e5.enterFrom || e5.enterTo || e5.leave || e5.leaveFrom || e5.leaveTo) || ((t10 = e5.as) != null ? t10 : de) !== O3 || c11.Children.count(e5.children) === 1;
}
var w6 = ne3(null);
w6.displayName = "TransitionContext";
var _e = ((n12) => (n12.Visible = "visible", n12.Hidden = "hidden", n12))(_e || {});
function De() {
  let e5 = q2(w6);
  if (e5 === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e5;
}
function He() {
  let e5 = q2(M4);
  if (e5 === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e5;
}
var M4 = ne3(null);
M4.displayName = "NestingContext";
function U2(e5) {
  return "children" in e5 ? U2(e5.children) : e5.current.filter(({ el: t10 }) => t10.current !== null).filter(({ state: t10 }) => t10 === "visible").length > 0;
}
function Te(e5, t10) {
  let n12 = s3(e5), l9 = b6([]), S6 = f10(), R2 = p(), d7 = o5((o12, i11 = A.Hidden) => {
    let a17 = l9.current.findIndex(({ el: s11 }) => s11 === o12);
    a17 !== -1 && (u(i11, { [A.Unmount]() {
      l9.current.splice(a17, 1);
    }, [A.Hidden]() {
      l9.current[a17].state = "hidden";
    } }), R2.microTask(() => {
      var s11;
      !U2(l9) && S6.current && ((s11 = n12.current) == null || s11.call(n12));
    }));
  }), y7 = o5((o12) => {
    let i11 = l9.current.find(({ el: a17 }) => a17 === o12);
    return i11 ? i11.state !== "visible" && (i11.state = "visible") : l9.current.push({ el: o12, state: "visible" }), () => d7(o12, A.Unmount);
  }), C6 = b6([]), p6 = b6(Promise.resolve()), h7 = b6({ enter: [], leave: [] }), g3 = o5((o12, i11, a17) => {
    C6.current.splice(0), t10 && (t10.chains.current[i11] = t10.chains.current[i11].filter(([s11]) => s11 !== o12)), t10 == null || t10.chains.current[i11].push([o12, new Promise((s11) => {
      C6.current.push(s11);
    })]), t10 == null || t10.chains.current[i11].push([o12, new Promise((s11) => {
      Promise.all(h7.current[i11].map(([r13, f11]) => f11)).then(() => s11());
    })]), i11 === "enter" ? p6.current = p6.current.then(() => t10 == null ? void 0 : t10.wait.current).then(() => a17(i11)) : a17(i11);
  }), v2 = o5((o12, i11, a17) => {
    Promise.all(h7.current[i11].splice(0).map(([s11, r13]) => r13)).then(() => {
      var s11;
      (s11 = C6.current.shift()) == null || s11();
    }).then(() => a17(i11));
  });
  return ie(() => ({ children: l9, register: y7, unregister: d7, onStart: g3, onStop: v2, wait: p6, chains: h7 }), [y7, d7, l9, g3, v2, h7, p6]);
}
var de = O3;
var fe = O.RenderStrategy;
function Ae(e5, t10) {
  var ee2, te2;
  let _a = e5, { transition: n12 = true, beforeEnter: l9, afterEnter: S6, beforeLeave: R2, afterLeave: d7, enter: y7, enterFrom: C6, enterTo: p6, entered: h7, leave: g3, leaveFrom: v2, leaveTo: o12 } = _a, i11 = __objRest(_a, ["transition", "beforeEnter", "afterEnter", "beforeLeave", "afterLeave", "enter", "enterFrom", "enterTo", "entered", "leave", "leaveFrom", "leaveTo"]), [a17, s11] = V(null), r13 = b6(null), f11 = ue(e5), j5 = y(...f11 ? [r13, t10, s11] : t10 === null ? [] : [t10]), H6 = (ee2 = i11.unmount) == null || ee2 ? A.Unmount : A.Hidden, { show: u11, appear: z2, initial: K2 } = De(), [m6, G3] = V(u11 ? "visible" : "hidden"), Q = He(), { register: A5, unregister: I5 } = Q;
  n(() => A5(r13), [A5, r13]), n(() => {
    if (H6 === A.Hidden && r13.current) {
      if (u11 && m6 !== "visible") {
        G3("visible");
        return;
      }
      return u(m6, { ["hidden"]: () => I5(r13), ["visible"]: () => A5(r13) });
    }
  }, [m6, r13, A5, I5, u11, H6]);
  let B2 = l6();
  n(() => {
    if (f11 && B2 && m6 === "visible" && r13.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [r13, m6, B2, f11]);
  let ce = K2 && !z2, Y = z2 && u11 && K2, W = b6(false), L4 = Te(() => {
    W.current || (G3("hidden"), I5(r13));
  }, Q), Z = o5((k5) => {
    W.current = true;
    let F4 = k5 ? "enter" : "leave";
    L4.onStart(r13, F4, (_3) => {
      _3 === "enter" ? l9 == null || l9() : _3 === "leave" && (R2 == null || R2());
    });
  }), $4 = o5((k5) => {
    let F4 = k5 ? "enter" : "leave";
    W.current = false, L4.onStop(r13, F4, (_3) => {
      _3 === "enter" ? S6 == null || S6() : _3 === "leave" && (d7 == null || d7());
    }), F4 === "leave" && !U2(L4) && (G3("hidden"), I5(r13));
  });
  ge(() => {
    f11 && n12 || (Z(u11), $4(u11));
  }, [u11, f11, n12]);
  let pe2 = /* @__PURE__ */ (() => !(!n12 || !f11 || !B2 || ce))(), [, T7] = x3(pe2, a17, u11, { start: Z, end: $4 }), Ce = m(__spreadValues({ ref: j5, className: ((te2 = t3(i11.className, Y && y7, Y && C6, T7.enter && y7, T7.enter && T7.closed && C6, T7.enter && !T7.closed && p6, T7.leave && g3, T7.leave && !T7.closed && v2, T7.leave && T7.closed && o12, !T7.transition && u11 && h7)) == null ? void 0 : te2.trim()) || void 0 }, R(T7))), N = 0;
  m6 === "visible" && (N |= i9.Open), m6 === "hidden" && (N |= i9.Closed), u11 && m6 === "hidden" && (N |= i9.Opening), !u11 && m6 === "visible" && (N |= i9.Closing);
  let he = L();
  return c11.createElement(M4.Provider, { value: L4 }, c11.createElement(c7, { value: N }, he({ ourProps: Ce, theirProps: i11, defaultTag: de, features: fe, visible: m6 === "visible", name: "Transition.Child" })));
}
function Ie(e5, t10) {
  let _a = e5, { show: n12, appear: l9 = false, unmount: S6 = true } = _a, R2 = __objRest(_a, ["show", "appear", "unmount"]), d7 = b6(null), y7 = ue(e5), C6 = y(...y7 ? [d7, t10] : t10 === null ? [] : [t10]);
  l6();
  let p6 = u8();
  if (n12 === void 0 && p6 !== null && (n12 = (p6 & i9.Open) === i9.Open), n12 === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [h7, g3] = V(n12 ? "visible" : "hidden"), v2 = Te(() => {
    n12 || g3("hidden");
  }), [o12, i11] = V(true), a17 = b6([n12]);
  n(() => {
    o12 !== false && a17.current[a17.current.length - 1] !== n12 && (a17.current.push(n12), i11(false));
  }, [a17, n12]);
  let s11 = ie(() => ({ show: n12, appear: l9, initial: o12 }), [n12, l9, o12]);
  n(() => {
    n12 ? g3("visible") : !U2(v2) && d7.current !== null && g3("hidden");
  }, [n12, v2]);
  let r13 = { unmount: S6 }, f11 = o5(() => {
    var u11;
    o12 && i11(false), (u11 = e5.beforeEnter) == null || u11.call(e5);
  }), j5 = o5(() => {
    var u11;
    o12 && i11(false), (u11 = e5.beforeLeave) == null || u11.call(e5);
  }), H6 = L();
  return c11.createElement(M4.Provider, { value: v2 }, c11.createElement(w6.Provider, { value: s11 }, H6({ ourProps: __spreadProps(__spreadValues({}, r13), { as: O3, children: c11.createElement(me, __spreadProps(__spreadValues(__spreadValues({ ref: C6 }, r13), R2), { beforeEnter: f11, beforeLeave: j5 })) }), theirProps: {}, defaultTag: O3, features: fe, visible: h7 === "visible", name: "Transition" })));
}
function Le(e5, t10) {
  let n12 = q2(w6) !== null, l9 = u8() !== null;
  return c11.createElement(c11.Fragment, null, !n12 && l9 ? c11.createElement(X2, __spreadValues({ ref: t10 }, e5)) : c11.createElement(me, __spreadValues({ ref: t10 }, e5)));
}
var X2 = K(Ie);
var me = K(Ae);
var Fe = K(Le);
var ze = Object.assign(X2, { Child: Fe, Root: X2 });

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var Ge = ((o12) => (o12[o12.Open = 0] = "Open", o12[o12.Closed = 1] = "Closed", o12))(Ge || {});
var we = ((t10) => (t10[t10.SetTitleId = 0] = "SetTitleId", t10))(we || {});
var Be = { [0](e5, t10) {
  return e5.titleId === t10.id ? e5 : __spreadProps(__spreadValues({}, e5), { titleId: t10.id });
} };
var w7 = se(null);
w7.displayName = "DialogContext";
function O4(e5) {
  let t10 = ue2(w7);
  if (t10 === null) {
    let o12 = new Error(`<${e5} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o12, O4), o12;
  }
  return t10;
}
function Ue(e5, t10) {
  return u(t10.type, Be, e5, t10);
}
var z = K(function(t10, o12) {
  let a17 = r4(), _a = t10, { id: n12 = `headlessui-dialog-${a17}`, open: i11, onClose: s11, initialFocus: d7, role: p6 = "dialog", autoFocus: T7 = true, __demoMode: u11 = false, unmount: y7 = false } = _a, S6 = __objRest(_a, ["id", "open", "onClose", "initialFocus", "role", "autoFocus", "__demoMode", "unmount"]), F4 = j4(false);
  p6 = function() {
    return p6 === "dialog" || p6 === "alertdialog" ? p6 : (F4.current || (F4.current = true, console.warn(`Invalid role [${p6}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let c12 = u8();
  i11 === void 0 && c12 !== null && (i11 = (c12 & i9.Open) === i9.Open);
  let f11 = j4(null), I5 = y(f11, o12), b7 = n8(f11), g3 = i11 ? 0 : 1, [v2, Q] = Te2(Ue, { titleId: null, descriptionId: null, panelRef: pe() }), m6 = o5(() => s11(false)), B2 = o5((r13) => Q({ type: 0, id: r13 })), D3 = l6() ? g3 === 0 : false, [Z, ee2] = oe(), te2 = { get current() {
    var r13;
    return (r13 = v2.panelRef.current) != null ? r13 : f11.current;
  } }, L4 = y6(), { resolveContainers: M5 } = H5({ mainTreeNode: L4, portals: Z, defaultContainers: [te2] }), U3 = c12 !== null ? (c12 & i9.Closing) === i9.Closing : false;
  y4(u11 || U3 ? false : D3, { allowed: o5(() => {
    var r13, W;
    return [(W = (r13 = f11.current) == null ? void 0 : r13.closest("[data-headlessui-portal]")) != null ? W : null];
  }), disallowed: o5(() => {
    var r13;
    return [(r13 = L4 == null ? void 0 : L4.closest("body > *:not(#headlessui-portal-root)")) != null ? r13 : null];
  }) });
  let P5 = x2.get(null);
  n(() => {
    if (D3) return P5.actions.push(n12), () => P5.actions.pop(n12);
  }, [P5, n12, D3]);
  let H6 = S3(P5, de2((r13) => P5.selectors.isTop(r13, n12), [P5, n12]));
  k3(H6, M5, (r13) => {
    r13.preventDefault(), m6();
  }), a14(H6, b7 == null ? void 0 : b7.defaultView, (r13) => {
    r13.preventDefault(), r13.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), m6();
  }), f7(u11 || U3 ? false : D3, b7, M5), p4(D3, f11, m6);
  let [oe2, ne4] = w2(), re2 = A4(() => [{ dialogState: g3, close: m6, setTitleId: B2, unmount: y7 }, v2], [g3, v2, m6, B2, y7]), N = A4(() => ({ open: g3 === 0 }), [g3]), le = { ref: I5, id: n12, role: p6, tabIndex: -1, "aria-modal": u11 ? void 0 : g3 === 0 ? true : void 0, "aria-labelledby": v2.titleId, "aria-describedby": oe2, unmount: y7 }, ae = !f9(), E7 = G2.None;
  D3 && !u11 && (E7 |= G2.RestoreFocus, E7 |= G2.TabLock, T7 && (E7 |= G2.AutoFocus), ae && (E7 |= G2.InitialFocus));
  let ie2 = L();
  return l8.createElement(s8, null, l8.createElement(l7, { force: true }, l8.createElement(ne, null, l8.createElement(w7.Provider, { value: re2 }, l8.createElement(q, { target: f11 }, l8.createElement(l7, { force: false }, l8.createElement(ne4, { slot: N }, l8.createElement(ee2, null, l8.createElement(Re, { initialFocus: d7, initialFocusFallback: f11, containers: M5, features: E7 }, l8.createElement(C3, { value: m6 }, ie2({ ourProps: le, theirProps: S6, slot: N, defaultTag: He2, features: Ne, visible: g3 === 0, name: "Dialog" })))))))))));
});
var He2 = "div";
var Ne = O.RenderStrategy | O.Static;
function We(e5, t10) {
  let _a = e5, { transition: o12 = false, open: a17 } = _a, n12 = __objRest(_a, ["transition", "open"]), i11 = u8(), s11 = e5.hasOwnProperty("open") || i11 !== null, d7 = e5.hasOwnProperty("onClose");
  if (!s11 && !d7) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!s11) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!d7) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i11 && typeof e5.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e5.open}`);
  if (typeof e5.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e5.onClose}`);
  return (a17 !== void 0 || o12) && !n12.static ? l8.createElement(P4, null, l8.createElement(ze, { show: a17, transition: o12, unmount: n12.unmount }, l8.createElement(z, __spreadValues({ ref: t10 }, n12)))) : l8.createElement(P4, null, l8.createElement(z, __spreadValues({ ref: t10, open: a17 }, n12)));
}
var $e = "div";
function je(e5, t10) {
  let o12 = r4(), _a = e5, { id: a17 = `headlessui-dialog-panel-${o12}`, transition: n12 = false } = _a, i11 = __objRest(_a, ["id", "transition"]), [{ dialogState: s11, unmount: d7 }, p6] = O4("Dialog.Panel"), T7 = y(t10, p6.panelRef), u11 = A4(() => ({ open: s11 === 0 }), [s11]), y7 = o5((I5) => {
    I5.stopPropagation();
  }), S6 = { ref: T7, id: a17, onClick: y7 }, F4 = n12 ? Fe : $3, c12 = n12 ? { unmount: d7 } : {}, f11 = L();
  return l8.createElement(F4, __spreadValues({}, c12), f11({ ourProps: S6, theirProps: i11, slot: u11, defaultTag: $e, name: "Dialog.Panel" }));
}
var Ye = "div";
function Je(e5, t10) {
  let _a = e5, { transition: o12 = false } = _a, a17 = __objRest(_a, ["transition"]), [{ dialogState: n12, unmount: i11 }] = O4("Dialog.Backdrop"), s11 = A4(() => ({ open: n12 === 0 }), [n12]), d7 = { ref: t10, "aria-hidden": true }, p6 = o12 ? Fe : $3, T7 = o12 ? { unmount: i11 } : {}, u11 = L();
  return l8.createElement(p6, __spreadValues({}, T7), u11({ ourProps: d7, theirProps: a17, slot: s11, defaultTag: Ye, name: "Dialog.Backdrop" }));
}
var Ke = "h2";
function Xe(e5, t10) {
  let o12 = r4(), _a = e5, { id: a17 = `headlessui-dialog-title-${o12}` } = _a, n12 = __objRest(_a, ["id"]), [{ dialogState: i11, setTitleId: s11 }] = O4("Dialog.Title"), d7 = y(t10);
  fe2(() => (s11(a17), () => s11(null)), [a17, s11]);
  let p6 = A4(() => ({ open: i11 === 0 }), [i11]), T7 = { ref: d7, id: a17 };
  return L()({ ourProps: T7, theirProps: n12, slot: p6, defaultTag: Ke, name: "Dialog.Title" });
}
var Ve = K(We);
var qe = K(je);
var bt = K(Je);
var ze2 = K(Xe);
var Lt = Object.assign(Ve, { Panel: qe, Title: ze2, Description: H2 });

// src/components/Changelog.tsx
import { useState as useState2 } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var formatDate = (dateString) => {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return dateString;
    }
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  } catch (e5) {
    return dateString;
  }
};
var ChangelogContent = ({ entries }) => /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
  entries.map((entry, index) => /* @__PURE__ */ jsx(
    "article",
    {
      className: clsx_default(
        "relative",
        index !== entries.length - 1 && "border-b border-gray-200 dark:border-gray-700 pb-8"
      ),
      children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-start sm:space-x-4", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 sm:w-32", children: /* @__PURE__ */ jsx("time", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: formatDate(entry.date) }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0 mt-2 sm:mt-0", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-900 dark:text-white mb-3", children: entry.title }),
          /* @__PURE__ */ jsx("div", { className: "prose prose-sm dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed", children: entry.content }),
          entry.tags && entry.tags.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mt-4", children: entry.tags.map((tag) => /* @__PURE__ */ jsx(
            "span",
            {
              className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
              children: tag
            },
            tag
          )) })
        ] })
      ] })
    },
    entry.id
  )),
  entries.length === 0 && /* @__PURE__ */ jsx("div", { className: "text-center py-12", children: /* @__PURE__ */ jsx("p", { className: "text-gray-500 dark:text-gray-400", children: "No changelog entries found." }) })
] });
function Changelog({
  entries,
  theme = "light",
  display = "page",
  isOpen = true,
  onClose,
  className
}) {
  const [internalOpen, setInternalOpen] = useState2(true);
  const open = display === "modal" ? isOpen : internalOpen;
  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      setInternalOpen(false);
    }
  };
  const Wrapper = ({ children }) => /* @__PURE__ */ jsx("div", { className: clsx_default(theme === "dark" && "dark", className), children: /* @__PURE__ */ jsx("div", { className: "bg-white dark:bg-zinc-900 text-black dark:text-white min-h-0", children }) });
  if (display === "modal") {
    return /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs(Lt, { open, onClose: handleClose, className: "relative z-50", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "fixed inset-0 bg-black/30 backdrop-blur-sm",
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "fixed inset-0 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxs(Lt.Panel, { className: "bg-white dark:bg-zinc-900 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700", children: [
          /* @__PURE__ */ jsx(Lt.Title, { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Changelog" }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handleClose,
              className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors",
              children: /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "w-6 h-6",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M6 18L18 6M6 6l12 12"
                    }
                  )
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ jsx(ChangelogContent, { entries }) })
      ] }) })
    ] }) });
  }
  return /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto p-6", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsx("div", { className: "sticky top-0 bg-white dark:bg-zinc-900 pb-4 border-b border-gray-200 dark:border-gray-700 mb-6", children: /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: "Changelog" }) }),
    /* @__PURE__ */ jsx(ChangelogContent, { entries })
  ] }) }) });
}
export {
  Changelog
};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-with-selector.production.js:
  (**
   * @license React
   * use-sync-external-store-with-selector.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js:
  (**
   * @license React
   * use-sync-external-store-with-selector.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
