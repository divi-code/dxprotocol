import {
  j as t,
  q as e,
  x as r,
  K as i,
  z as n,
  u as a,
  ab as s,
  ac as o,
  N as l,
  k as u,
  Y as d,
  Z as c,
  y as h,
  L as f,
  O as g,
  ae as v,
  r as p,
  g as m,
  J as y,
  d as E,
  w as T,
  C as S,
  D as b,
  I as L,
  F as A,
  a1 as k,
  T as D,
  n as R,
  S as _,
  af as I,
  Q as C,
  H as w,
  a4 as x,
  G as O,
} from "./5bdea638.js";
import { t as P } from "./1e98e625.js";
import {
  _ as F,
  w as M,
  a as N,
  b as B,
  c as U,
  u as G,
  E as j,
  n as K,
  y as V,
  m as H,
  L as W,
  B as Y,
  N as q,
  C as z,
} from "./35bc27a3.js";
import { d as X, e as $, w as Q, h as J } from "./9b9cf7db.js";
import { s as Z } from "./ee7ce8fe.js";
import { h as tt } from "./c229d341.js";
import "./2b425f2d.js";
import "./9737f36b.js";
var et = Object.defineProperty,
  rt = Object.defineProperties,
  it = Object.getOwnPropertyDescriptors,
  nt = Object.getOwnPropertySymbols,
  at = Object.prototype.hasOwnProperty,
  st = Object.prototype.propertyIsEnumerable,
  ot = (t, e, r) =>
    e in t
      ? et(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[e] = r),
  lt = (t, e) => {
    for (var r in e || (e = {})) at.call(e, r) && ot(t, r, e[r]);
    if (nt) for (var r of nt(e)) st.call(e, r) && ot(t, r, e[r]);
    return t;
  },
  ut = (t, e) => rt(t, it(e));
function dt(t, e, r, i) {
  var n,
    a = !1,
    s = 0;
  function o() {
    n && clearTimeout(n);
  }
  function l() {
    for (var l = arguments.length, u = new Array(l), d = 0; d < l; d++)
      u[d] = arguments[d];
    var c = this,
      h = Date.now() - s;
    function f() {
      (s = Date.now()), r.apply(c, u);
    }
    a ||
      (i && !n && f(),
      o(),
      void 0 === i && h > t
        ? f()
        : !0 !== e &&
          (n = setTimeout(
            i
              ? function () {
                  n = void 0;
                }
              : f,
            void 0 === i ? t - h : t
          )));
  }
  return (
    "boolean" != typeof e && ((i = r), (r = e), (e = void 0)),
    (l.cancel = function () {
      o(), (a = !0);
    }),
    l
  );
}
function ct(t, e, r) {
  return void 0 === r ? dt(t, e, !1) : dt(t, r, !1 !== e);
}
var ht = { exports: {} };
"undefined" != typeof window &&
  (ht.exports = (function (t) {
    var e = {};
    function r(i) {
      if (e[i]) return e[i].exports;
      var n = (e[i] = { i: i, l: !1, exports: {} });
      return t[i].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
    }
    return (
      (r.m = t),
      (r.c = e),
      (r.d = function (t, e, i) {
        r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
      }),
      (r.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (r.t = function (t, e) {
        if ((1 & e && (t = r(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (
          (r.r(i),
          Object.defineProperty(i, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var n in t)
            r.d(
              i,
              n,
              function (e) {
                return t[e];
              }.bind(null, n)
            );
        return i;
      }),
      (r.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return r.d(e, "a", e), e;
      }),
      (r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (r.p = "/dist/"),
      r((r.s = "./src/hls.ts"))
    );
  })({
    "./node_modules/eventemitter3/index.js": function (t, e, r) {
      var i = Object.prototype.hasOwnProperty,
        n = "~";
      function a() {}
      function s(t, e, r) {
        (this.fn = t), (this.context = e), (this.once = r || !1);
      }
      function o(t, e, r, i, a) {
        if ("function" != typeof r)
          throw new TypeError("The listener must be a function");
        var o = new s(r, i || t, a),
          l = n ? n + e : e;
        return (
          t._events[l]
            ? t._events[l].fn
              ? (t._events[l] = [t._events[l], o])
              : t._events[l].push(o)
            : ((t._events[l] = o), t._eventsCount++),
          t
        );
      }
      function l(t, e) {
        0 == --t._eventsCount ? (t._events = new a()) : delete t._events[e];
      }
      function u() {
        (this._events = new a()), (this._eventsCount = 0);
      }
      Object.create &&
        ((a.prototype = Object.create(null)), new a().__proto__ || (n = !1)),
        (u.prototype.eventNames = function () {
          var t,
            e,
            r = [];
          if (0 === this._eventsCount) return r;
          for (e in (t = this._events))
            i.call(t, e) && r.push(n ? e.slice(1) : e);
          return Object.getOwnPropertySymbols
            ? r.concat(Object.getOwnPropertySymbols(t))
            : r;
        }),
        (u.prototype.listeners = function (t) {
          var e = n ? n + t : t,
            r = this._events[e];
          if (!r) return [];
          if (r.fn) return [r.fn];
          for (var i = 0, a = r.length, s = new Array(a); i < a; i++)
            s[i] = r[i].fn;
          return s;
        }),
        (u.prototype.listenerCount = function (t) {
          var e = n ? n + t : t,
            r = this._events[e];
          return r ? (r.fn ? 1 : r.length) : 0;
        }),
        (u.prototype.emit = function (t, e, r, i, a, s) {
          var o = n ? n + t : t;
          if (!this._events[o]) return !1;
          var l,
            u,
            d = this._events[o],
            c = arguments.length;
          if (d.fn) {
            switch ((d.once && this.removeListener(t, d.fn, void 0, !0), c)) {
              case 1:
                return d.fn.call(d.context), !0;
              case 2:
                return d.fn.call(d.context, e), !0;
              case 3:
                return d.fn.call(d.context, e, r), !0;
              case 4:
                return d.fn.call(d.context, e, r, i), !0;
              case 5:
                return d.fn.call(d.context, e, r, i, a), !0;
              case 6:
                return d.fn.call(d.context, e, r, i, a, s), !0;
            }
            for (u = 1, l = new Array(c - 1); u < c; u++)
              l[u - 1] = arguments[u];
            d.fn.apply(d.context, l);
          } else {
            var h,
              f = d.length;
            for (u = 0; u < f; u++)
              switch (
                (d[u].once && this.removeListener(t, d[u].fn, void 0, !0), c)
              ) {
                case 1:
                  d[u].fn.call(d[u].context);
                  break;
                case 2:
                  d[u].fn.call(d[u].context, e);
                  break;
                case 3:
                  d[u].fn.call(d[u].context, e, r);
                  break;
                case 4:
                  d[u].fn.call(d[u].context, e, r, i);
                  break;
                default:
                  if (!l)
                    for (h = 1, l = new Array(c - 1); h < c; h++)
                      l[h - 1] = arguments[h];
                  d[u].fn.apply(d[u].context, l);
              }
          }
          return !0;
        }),
        (u.prototype.on = function (t, e, r) {
          return o(this, t, e, r, !1);
        }),
        (u.prototype.once = function (t, e, r) {
          return o(this, t, e, r, !0);
        }),
        (u.prototype.removeListener = function (t, e, r, i) {
          var a = n ? n + t : t;
          if (!this._events[a]) return this;
          if (!e) return l(this, a), this;
          var s = this._events[a];
          if (s.fn)
            s.fn !== e ||
              (i && !s.once) ||
              (r && s.context !== r) ||
              l(this, a);
          else {
            for (var o = 0, u = [], d = s.length; o < d; o++)
              (s[o].fn !== e ||
                (i && !s[o].once) ||
                (r && s[o].context !== r)) &&
                u.push(s[o]);
            u.length
              ? (this._events[a] = 1 === u.length ? u[0] : u)
              : l(this, a);
          }
          return this;
        }),
        (u.prototype.removeAllListeners = function (t) {
          var e;
          return (
            t
              ? ((e = n ? n + t : t), this._events[e] && l(this, e))
              : ((this._events = new a()), (this._eventsCount = 0)),
            this
          );
        }),
        (u.prototype.off = u.prototype.removeListener),
        (u.prototype.addListener = u.prototype.on),
        (u.prefixed = n),
        (u.EventEmitter = u),
        (t.exports = u);
    },
    "./node_modules/url-toolkit/src/url-toolkit.js": function (t, e, r) {
      var i, n, a, s, o;
      (i =
        /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#[^]*)?$/),
        (n = /^([^\/?#]*)([^]*)$/),
        (a = /(?:\/|^)\.(?=\/)/g),
        (s = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g),
        (o = {
          buildAbsoluteURL: function (t, e, r) {
            if (((r = r || {}), (t = t.trim()), !(e = e.trim()))) {
              if (!r.alwaysNormalize) return t;
              var i = o.parseURL(t);
              if (!i) throw new Error("Error trying to parse base URL.");
              return (i.path = o.normalizePath(i.path)), o.buildURLFromParts(i);
            }
            var a = o.parseURL(e);
            if (!a) throw new Error("Error trying to parse relative URL.");
            if (a.scheme)
              return r.alwaysNormalize
                ? ((a.path = o.normalizePath(a.path)), o.buildURLFromParts(a))
                : e;
            var s = o.parseURL(t);
            if (!s) throw new Error("Error trying to parse base URL.");
            if (!s.netLoc && s.path && "/" !== s.path[0]) {
              var l = n.exec(s.path);
              (s.netLoc = l[1]), (s.path = l[2]);
            }
            s.netLoc && !s.path && (s.path = "/");
            var u = {
              scheme: s.scheme,
              netLoc: a.netLoc,
              path: null,
              params: a.params,
              query: a.query,
              fragment: a.fragment,
            };
            if (!a.netLoc && ((u.netLoc = s.netLoc), "/" !== a.path[0]))
              if (a.path) {
                var d = s.path,
                  c = d.substring(0, d.lastIndexOf("/") + 1) + a.path;
                u.path = o.normalizePath(c);
              } else
                (u.path = s.path),
                  a.params ||
                    ((u.params = s.params), a.query || (u.query = s.query));
            return (
              null === u.path &&
                (u.path = r.alwaysNormalize ? o.normalizePath(a.path) : a.path),
              o.buildURLFromParts(u)
            );
          },
          parseURL: function (t) {
            var e = i.exec(t);
            return e
              ? {
                  scheme: e[1] || "",
                  netLoc: e[2] || "",
                  path: e[3] || "",
                  params: e[4] || "",
                  query: e[5] || "",
                  fragment: e[6] || "",
                }
              : null;
          },
          normalizePath: function (t) {
            for (
              t = t.split("").reverse().join("").replace(a, "");
              t.length !== (t = t.replace(s, "")).length;

            );
            return t.split("").reverse().join("");
          },
          buildURLFromParts: function (t) {
            return (
              t.scheme + t.netLoc + t.path + t.params + t.query + t.fragment
            );
          },
        }),
        (t.exports = o);
    },
    "./node_modules/webworkify-webpack/index.js": function (t, e, r) {
      function i(t) {
        var e = {};
        function r(i) {
          if (e[i]) return e[i].exports;
          var n = (e[i] = { i: i, l: !1, exports: {} });
          return t[i].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
        }
        (r.m = t),
          (r.c = e),
          (r.i = function (t) {
            return t;
          }),
          (r.d = function (t, e, i) {
            r.o(t, e) ||
              Object.defineProperty(t, e, {
                configurable: !1,
                enumerable: !0,
                get: i,
              });
          }),
          (r.r = function (t) {
            Object.defineProperty(t, "__esModule", { value: !0 });
          }),
          (r.n = function (t) {
            var e =
              t && t.__esModule
                ? function () {
                    return t.default;
                  }
                : function () {
                    return t;
                  };
            return r.d(e, "a", e), e;
          }),
          (r.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }),
          (r.p = "/"),
          (r.oe = function (t) {
            throw t;
          });
        var i = r((r.s = ENTRY_MODULE));
        return i.default || i;
      }
      var n = "[\\.|\\-|\\+|\\w|/|@]+",
        a = "\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)";
      function s(t) {
        return (t + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
      }
      function o(t, e, i) {
        var o = {};
        o[i] = [];
        var l = e.toString(),
          u = l.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
        if (!u) return o;
        for (
          var d, c = u[1], h = new RegExp("(\\\\n|\\W)" + s(c) + a, "g");
          (d = h.exec(l));

        )
          "dll-reference" !== d[3] && o[i].push(d[3]);
        for (
          h = new RegExp(
            "\\(" + s(c) + '\\("(dll-reference\\s(' + n + '))"\\)\\)' + a,
            "g"
          );
          (d = h.exec(l));

        )
          t[d[2]] || (o[i].push(d[1]), (t[d[2]] = r(d[1]).m)),
            (o[d[2]] = o[d[2]] || []),
            o[d[2]].push(d[4]);
        for (var f, g = Object.keys(o), v = 0; v < g.length; v++)
          for (var p = 0; p < o[g[v]].length; p++)
            (f = o[g[v]][p]), isNaN(1 * f) || (o[g[v]][p] = 1 * o[g[v]][p]);
        return o;
      }
      function l(t) {
        return Object.keys(t).reduce(function (e, r) {
          return e || t[r].length > 0;
        }, !1);
      }
      t.exports = function (t, e) {
        e = e || {};
        var n = { main: r.m },
          a = e.all
            ? { main: Object.keys(n.main) }
            : (function (t, e) {
                for (
                  var r = { main: [e] }, i = { main: [] }, n = { main: {} };
                  l(r);

                )
                  for (var a = Object.keys(r), s = 0; s < a.length; s++) {
                    var u = a[s],
                      d = r[u].pop();
                    if (((n[u] = n[u] || {}), !n[u][d] && t[u][d])) {
                      (n[u][d] = !0), (i[u] = i[u] || []), i[u].push(d);
                      for (
                        var c = o(t, t[u][d], u), h = Object.keys(c), f = 0;
                        f < h.length;
                        f++
                      )
                        (r[h[f]] = r[h[f]] || []),
                          (r[h[f]] = r[h[f]].concat(c[h[f]]));
                    }
                  }
                return i;
              })(n, t),
          s = "";
        Object.keys(a)
          .filter(function (t) {
            return "main" !== t;
          })
          .forEach(function (t) {
            for (var e = 0; a[t][e]; ) e++;
            a[t].push(e),
              (n[t][e] =
                "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })"),
              (s =
                s +
                "var " +
                t +
                " = (" +
                i.toString().replace("ENTRY_MODULE", JSON.stringify(e)) +
                ")({" +
                a[t]
                  .map(function (e) {
                    return JSON.stringify(e) + ": " + n[t][e].toString();
                  })
                  .join(",") +
                "});\n");
          }),
          (s =
            s +
            "new ((" +
            i.toString().replace("ENTRY_MODULE", JSON.stringify(t)) +
            ")({" +
            a.main
              .map(function (t) {
                return JSON.stringify(t) + ": " + n.main[t].toString();
              })
              .join(",") +
            "}))(self);");
        var u = new window.Blob([s], { type: "text/javascript" });
        if (e.bare) return u;
        var d = (
            window.URL ||
            window.webkitURL ||
            window.mozURL ||
            window.msURL
          ).createObjectURL(u),
          c = new window.Worker(d);
        return (c.objectURL = d), c;
      };
    },
    "./src/config.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "hlsDefaultConfig", function () {
          return b;
        }),
        r.d(e, "mergeConfig", function () {
          return L;
        }),
        r.d(e, "enableStreamingMode", function () {
          return A;
        });
      var i = r("./src/controller/abr-controller.ts"),
        n = r("./src/controller/audio-stream-controller.ts"),
        a = r("./src/controller/audio-track-controller.ts"),
        s = r("./src/controller/subtitle-stream-controller.ts"),
        o = r("./src/controller/subtitle-track-controller.ts"),
        l = r("./src/controller/buffer-controller.ts"),
        u = r("./src/controller/timeline-controller.ts"),
        d = r("./src/controller/cap-level-controller.ts"),
        c = r("./src/controller/fps-controller.ts"),
        h = r("./src/controller/eme-controller.ts"),
        f = r("./src/utils/xhr-loader.ts"),
        g = r("./src/utils/fetch-loader.ts"),
        v = r("./src/utils/cues.ts"),
        p = r("./src/utils/mediakeys-helper.ts"),
        m = r("./src/utils/logger.ts");
      function y() {
        return (y =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
            }
            return t;
          }).apply(this, arguments);
      }
      function E(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function T(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? E(Object(r), !0).forEach(function (e) {
                S(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : E(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function S(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var b = T(
        T(
          {
            autoStartLoad: !0,
            startPosition: -1,
            defaultAudioCodec: void 0,
            debug: !1,
            capLevelOnFPSDrop: !1,
            capLevelToPlayerSize: !1,
            initialLiveManifestSize: 1,
            maxBufferLength: 30,
            backBufferLength: 1 / 0,
            maxBufferSize: 6e7,
            maxBufferHole: 0.1,
            highBufferWatchdogPeriod: 2,
            nudgeOffset: 0.1,
            nudgeMaxRetry: 3,
            maxFragLookUpTolerance: 0.25,
            liveSyncDurationCount: 3,
            liveMaxLatencyDurationCount: 1 / 0,
            liveSyncDuration: void 0,
            liveMaxLatencyDuration: void 0,
            maxLiveSyncPlaybackRate: 1,
            liveDurationInfinity: !1,
            liveBackBufferLength: null,
            maxMaxBufferLength: 600,
            enableWorker: !0,
            enableSoftwareAES: !0,
            manifestLoadingTimeOut: 1e4,
            manifestLoadingMaxRetry: 1,
            manifestLoadingRetryDelay: 1e3,
            manifestLoadingMaxRetryTimeout: 64e3,
            startLevel: void 0,
            levelLoadingTimeOut: 1e4,
            levelLoadingMaxRetry: 4,
            levelLoadingRetryDelay: 1e3,
            levelLoadingMaxRetryTimeout: 64e3,
            fragLoadingTimeOut: 2e4,
            fragLoadingMaxRetry: 6,
            fragLoadingRetryDelay: 1e3,
            fragLoadingMaxRetryTimeout: 64e3,
            startFragPrefetch: !1,
            fpsDroppedMonitoringPeriod: 5e3,
            fpsDroppedMonitoringThreshold: 0.2,
            appendErrorMaxRetry: 3,
            loader: f.default,
            fLoader: void 0,
            pLoader: void 0,
            xhrSetup: void 0,
            licenseXhrSetup: void 0,
            licenseResponseCallback: void 0,
            abrController: i.default,
            bufferController: l.default,
            capLevelController: d.default,
            fpsController: c.default,
            stretchShortVideoTrack: !1,
            maxAudioFramesDrift: 1,
            forceKeyFrameOnDiscontinuity: !0,
            abrEwmaFastLive: 3,
            abrEwmaSlowLive: 9,
            abrEwmaFastVoD: 3,
            abrEwmaSlowVoD: 9,
            abrEwmaDefaultEstimate: 5e5,
            abrBandWidthFactor: 0.95,
            abrBandWidthUpFactor: 0.7,
            abrMaxWithRealBitrate: !1,
            maxStarvationDelay: 4,
            maxLoadingDelay: 4,
            minAutoBitrate: 0,
            emeEnabled: !1,
            widevineLicenseUrl: void 0,
            drmSystemOptions: {},
            requestMediaKeySystemAccessFunc: p.requestMediaKeySystemAccess,
            testBandwidth: !0,
            progressive: !1,
            lowLatencyMode: !0,
          },
          {
            cueHandler: v.default,
            enableCEA708Captions: !0,
            enableWebVTT: !0,
            enableIMSC1: !0,
            captionsTextTrack1Label: "English",
            captionsTextTrack1LanguageCode: "en",
            captionsTextTrack2Label: "Spanish",
            captionsTextTrack2LanguageCode: "es",
            captionsTextTrack3Label: "Unknown CC",
            captionsTextTrack3LanguageCode: "",
            captionsTextTrack4Label: "Unknown CC",
            captionsTextTrack4LanguageCode: "",
            renderTextTracksNatively: !0,
          }
        ),
        {},
        {
          subtitleStreamController: s.SubtitleStreamController,
          subtitleTrackController: o.default,
          timelineController: u.TimelineController,
          audioStreamController: n.default,
          audioTrackController: a.default,
          emeController: h.default,
        }
      );
      function L(t, e) {
        if (
          (e.liveSyncDurationCount || e.liveMaxLatencyDurationCount) &&
          (e.liveSyncDuration || e.liveMaxLatencyDuration)
        )
          throw new Error(
            "Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration"
          );
        if (
          void 0 !== e.liveMaxLatencyDurationCount &&
          (void 0 === e.liveSyncDurationCount ||
            e.liveMaxLatencyDurationCount <= e.liveSyncDurationCount)
        )
          throw new Error(
            'Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"'
          );
        if (
          void 0 !== e.liveMaxLatencyDuration &&
          (void 0 === e.liveSyncDuration ||
            e.liveMaxLatencyDuration <= e.liveSyncDuration)
        )
          throw new Error(
            'Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"'
          );
        return y({}, t, e);
      }
      function A(t) {
        var e = t.loader;
        e !== g.default && e !== f.default
          ? (m.logger.log(
              "[config]: Custom loader detected, cannot enable progressive streaming"
            ),
            (t.progressive = !1))
          : Object(g.fetchSupported)() &&
            ((t.loader = g.default),
            (t.progressive = !0),
            (t.enableSoftwareAES = !0),
            m.logger.log(
              "[config]: Progressive streaming enabled, using FetchLoader"
            ));
      }
    },
    "./src/controller/abr-controller.ts": function (t, e, r) {
      r.r(e);
      var i = r("./src/polyfills/number.ts"),
        n = r("./src/utils/ewma-bandwidth-estimator.ts"),
        a = r("./src/events.ts"),
        s = r("./src/utils/buffer-helper.ts"),
        o = r("./src/errors.ts"),
        l = r("./src/types/loader.ts"),
        u = r("./src/utils/logger.ts");
      var d = (function () {
        function t(t) {
          (this.hls = void 0),
            (this.lastLoadedFragLevel = 0),
            (this._nextAutoLevel = -1),
            (this.timer = void 0),
            (this.onCheck = this._abandonRulesCheck.bind(this)),
            (this.fragCurrent = null),
            (this.partCurrent = null),
            (this.bitrateTestDelay = 0),
            (this.bwEstimator = void 0),
            (this.hls = t);
          var e = t.config;
          (this.bwEstimator = new n.default(
            e.abrEwmaSlowVoD,
            e.abrEwmaFastVoD,
            e.abrEwmaDefaultEstimate
          )),
            this.registerListeners();
        }
        var e,
          r = t.prototype;
        return (
          (r.registerListeners = function () {
            var t = this.hls;
            t.on(a.Events.FRAG_LOADING, this.onFragLoading, this),
              t.on(a.Events.FRAG_LOADED, this.onFragLoaded, this),
              t.on(a.Events.FRAG_BUFFERED, this.onFragBuffered, this),
              t.on(a.Events.LEVEL_LOADED, this.onLevelLoaded, this),
              t.on(a.Events.ERROR, this.onError, this);
          }),
          (r.unregisterListeners = function () {
            var t = this.hls;
            t.off(a.Events.FRAG_LOADING, this.onFragLoading, this),
              t.off(a.Events.FRAG_LOADED, this.onFragLoaded, this),
              t.off(a.Events.FRAG_BUFFERED, this.onFragBuffered, this),
              t.off(a.Events.LEVEL_LOADED, this.onLevelLoaded, this),
              t.off(a.Events.ERROR, this.onError, this);
          }),
          (r.destroy = function () {
            this.unregisterListeners(),
              this.clearTimer(),
              (this.hls = this.onCheck = null),
              (this.fragCurrent = this.partCurrent = null);
          }),
          (r.onFragLoading = function (t, e) {
            var r,
              i = e.frag;
            i.type === l.PlaylistLevelType.MAIN &&
              (this.timer ||
                ((this.fragCurrent = i),
                (this.partCurrent = null != (r = e.part) ? r : null),
                (this.timer = self.setInterval(this.onCheck, 100))));
          }),
          (r.onLevelLoaded = function (t, e) {
            var r = this.hls.config;
            e.details.live
              ? this.bwEstimator.update(r.abrEwmaSlowLive, r.abrEwmaFastLive)
              : this.bwEstimator.update(r.abrEwmaSlowVoD, r.abrEwmaFastVoD);
          }),
          (r._abandonRulesCheck = function () {
            var t = this.fragCurrent,
              e = this.partCurrent,
              r = this.hls,
              n = r.autoLevelEnabled,
              o = r.config,
              l = r.media;
            if (t && l) {
              var d = e ? e.stats : t.stats,
                c = e ? e.duration : t.duration;
              if (d.aborted)
                return (
                  u.logger.warn(
                    "frag loader destroy or aborted, disarm abandonRules"
                  ),
                  this.clearTimer(),
                  void (this._nextAutoLevel = -1)
                );
              if (n && !l.paused && l.playbackRate && l.readyState) {
                var h = performance.now() - d.loading.start,
                  f = Math.abs(l.playbackRate);
                if (!(h <= (500 * c) / f)) {
                  var g = r.levels,
                    v = r.minAutoLevel,
                    p = g[t.level],
                    m =
                      d.total ||
                      Math.max(d.loaded, Math.round((c * p.maxBitrate) / 8)),
                    y = Math.max(
                      1,
                      d.bwEstimate ? d.bwEstimate / 8 : (1e3 * d.loaded) / h
                    ),
                    E = (m - d.loaded) / y,
                    T = l.currentTime,
                    S =
                      (s.BufferHelper.bufferInfo(l, T, o.maxBufferHole).end -
                        T) /
                      f;
                  if (!(S >= (2 * c) / f || E <= S)) {
                    var b,
                      L = Number.POSITIVE_INFINITY;
                    for (
                      b = t.level - 1;
                      b > v && !((L = (c * g[b].maxBitrate) / (6.4 * y)) < S);
                      b--
                    );
                    if (!(L >= E)) {
                      var A = this.bwEstimator.getEstimate();
                      u.logger.warn(
                        "Fragment " +
                          t.sn +
                          (e ? " part " + e.index : "") +
                          " of level " +
                          t.level +
                          " is loading too slowly and will cause an underbuffer; aborting and switching to level " +
                          b +
                          "\n      Current BW estimate: " +
                          (Object(i.isFiniteNumber)(A)
                            ? (A / 1024).toFixed(3)
                            : "Unknown") +
                          " Kb/s\n      Estimated load time for current fragment: " +
                          E.toFixed(3) +
                          " s\n      Estimated load time for the next fragment: " +
                          L.toFixed(3) +
                          " s\n      Time to underbuffer: " +
                          S.toFixed(3) +
                          " s"
                      ),
                        (r.nextLoadLevel = b),
                        this.bwEstimator.sample(h, d.loaded),
                        this.clearTimer(),
                        t.loader &&
                          ((this.fragCurrent = this.partCurrent = null),
                          t.loader.abort()),
                        r.trigger(a.Events.FRAG_LOAD_EMERGENCY_ABORTED, {
                          frag: t,
                          part: e,
                          stats: d,
                        });
                    }
                  }
                }
              }
            }
          }),
          (r.onFragLoaded = function (t, e) {
            var r = e.frag,
              n = e.part;
            if (
              r.type === l.PlaylistLevelType.MAIN &&
              Object(i.isFiniteNumber)(r.sn)
            ) {
              var s = n ? n.stats : r.stats,
                o = n ? n.duration : r.duration;
              if (
                (this.clearTimer(),
                (this.lastLoadedFragLevel = r.level),
                (this._nextAutoLevel = -1),
                this.hls.config.abrMaxWithRealBitrate)
              ) {
                var u = this.hls.levels[r.level],
                  d = (u.loaded ? u.loaded.bytes : 0) + s.loaded,
                  c = (u.loaded ? u.loaded.duration : 0) + o;
                (u.loaded = { bytes: d, duration: c }),
                  (u.realBitrate = Math.round((8 * d) / c));
              }
              if (r.bitrateTest) {
                var h = { stats: s, frag: r, part: n, id: r.type };
                this.onFragBuffered(a.Events.FRAG_BUFFERED, h),
                  (r.bitrateTest = !1);
              }
            }
          }),
          (r.onFragBuffered = function (t, e) {
            var r = e.frag,
              i = e.part,
              n = i ? i.stats : r.stats;
            if (
              !n.aborted &&
              r.type === l.PlaylistLevelType.MAIN &&
              "initSegment" !== r.sn
            ) {
              var a = n.parsing.end - n.loading.start;
              this.bwEstimator.sample(a, n.loaded),
                (n.bwEstimate = this.bwEstimator.getEstimate()),
                r.bitrateTest
                  ? (this.bitrateTestDelay = a / 1e3)
                  : (this.bitrateTestDelay = 0);
            }
          }),
          (r.onError = function (t, e) {
            switch (e.details) {
              case o.ErrorDetails.FRAG_LOAD_ERROR:
              case o.ErrorDetails.FRAG_LOAD_TIMEOUT:
                this.clearTimer();
            }
          }),
          (r.clearTimer = function () {
            self.clearInterval(this.timer), (this.timer = void 0);
          }),
          (r.getNextABRAutoLevel = function () {
            var t = this.fragCurrent,
              e = this.partCurrent,
              r = this.hls,
              i = r.maxAutoLevel,
              n = r.config,
              a = r.minAutoLevel,
              o = r.media,
              l = e ? e.duration : t ? t.duration : 0,
              d = o ? o.currentTime : 0,
              c = o && 0 !== o.playbackRate ? Math.abs(o.playbackRate) : 1,
              h = this.bwEstimator
                ? this.bwEstimator.getEstimate()
                : n.abrEwmaDefaultEstimate,
              f =
                (s.BufferHelper.bufferInfo(o, d, n.maxBufferHole).end - d) / c,
              g = this.findBestLevel(
                h,
                a,
                i,
                f,
                n.abrBandWidthFactor,
                n.abrBandWidthUpFactor
              );
            if (g >= 0) return g;
            u.logger.trace(
              (f ? "rebuffering expected" : "buffer is empty") +
                ", finding optimal quality level"
            );
            var v = l
                ? Math.min(l, n.maxStarvationDelay)
                : n.maxStarvationDelay,
              p = n.abrBandWidthFactor,
              m = n.abrBandWidthUpFactor;
            if (!f) {
              var y = this.bitrateTestDelay;
              y &&
                ((v =
                  (l ? Math.min(l, n.maxLoadingDelay) : n.maxLoadingDelay) - y),
                u.logger.trace(
                  "bitrate test took " +
                    Math.round(1e3 * y) +
                    "ms, set first fragment max fetchDuration to " +
                    Math.round(1e3 * v) +
                    " ms"
                ),
                (p = m = 1));
            }
            return (
              (g = this.findBestLevel(h, a, i, f + v, p, m)), Math.max(g, 0)
            );
          }),
          (r.findBestLevel = function (t, e, r, i, n, a) {
            for (
              var s,
                o = this.fragCurrent,
                l = this.partCurrent,
                d = this.lastLoadedFragLevel,
                c = this.hls.levels,
                h = c[d],
                f = !(
                  null == h ||
                  null === (s = h.details) ||
                  void 0 === s ||
                  !s.live
                ),
                g = null == h ? void 0 : h.codecSet,
                v = l ? l.duration : o ? o.duration : 0,
                p = r;
              p >= e;
              p--
            ) {
              var m = c[p];
              if (m && (!g || m.codecSet === g)) {
                var y,
                  E = m.details,
                  T =
                    (l
                      ? null == E
                        ? void 0
                        : E.partTarget
                      : null == E
                      ? void 0
                      : E.averagetargetduration) || v;
                y = p <= d ? n * t : a * t;
                var S = c[p].maxBitrate,
                  b = (S * T) / y;
                if (
                  (u.logger.trace(
                    "level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " +
                      p +
                      "/" +
                      Math.round(y) +
                      "/" +
                      S +
                      "/" +
                      T +
                      "/" +
                      i +
                      "/" +
                      b
                  ),
                  y > S && (!b || (f && !this.bitrateTestDelay) || b < i))
                )
                  return p;
              }
            }
            return -1;
          }),
          (e = [
            {
              key: "nextAutoLevel",
              get: function () {
                var t = this._nextAutoLevel,
                  e = this.bwEstimator;
                if (!(-1 === t || (e && e.canEstimate()))) return t;
                var r = this.getNextABRAutoLevel();
                return -1 !== t && (r = Math.min(t, r)), r;
              },
              set: function (t) {
                this._nextAutoLevel = t;
              },
            },
          ]) &&
            (function (t, e) {
              for (var r = 0; r < e.length; r++) {
                var i = e[r];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(t, i.key, i);
              }
            })(t.prototype, e),
          t
        );
      })();
      e.default = d;
    },
    "./src/controller/audio-stream-controller.ts": function (t, e, r) {
      r.r(e);
      var i = r("./src/polyfills/number.ts"),
        n = r("./src/controller/base-stream-controller.ts"),
        a = r("./src/events.ts"),
        s = r("./src/utils/buffer-helper.ts"),
        o = r("./src/controller/fragment-tracker.ts"),
        l = r("./src/types/level.ts"),
        u = r("./src/types/loader.ts"),
        d = r("./src/loader/fragment.ts"),
        c = r("./src/demux/chunk-cache.ts"),
        h = r("./src/demux/transmuxer-interface.ts"),
        f = r("./src/types/transmuxer.ts"),
        g = r("./src/controller/fragment-finders.ts"),
        v = r("./src/utils/discontinuities.ts"),
        p = r("./src/errors.ts"),
        m = r("./src/utils/logger.ts");
      function y() {
        return (y =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
            }
            return t;
          }).apply(this, arguments);
      }
      function E(t, e) {
        return (E =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var T = (function (t) {
        var e, r;
        function T(e, r) {
          var i;
          return (
            ((i =
              t.call(this, e, r, "[audio-stream-controller]") ||
              this).videoBuffer = null),
            (i.videoTrackCC = -1),
            (i.waitingVideoCC = -1),
            (i.audioSwitch = !1),
            (i.trackId = -1),
            (i.waitingData = null),
            (i.mainDetails = null),
            (i.bufferFlushed = !1),
            i._registerListeners(),
            i
          );
        }
        (r = t),
          ((e = T).prototype = Object.create(r.prototype)),
          (e.prototype.constructor = e),
          E(e, r);
        var S = T.prototype;
        return (
          (S.onHandlerDestroying = function () {
            this._unregisterListeners(), (this.mainDetails = null);
          }),
          (S._registerListeners = function () {
            var t = this.hls;
            t.on(a.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
              t.on(a.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
              t.on(a.Events.MANIFEST_LOADING, this.onManifestLoading, this),
              t.on(a.Events.LEVEL_LOADED, this.onLevelLoaded, this),
              t.on(
                a.Events.AUDIO_TRACKS_UPDATED,
                this.onAudioTracksUpdated,
                this
              ),
              t.on(
                a.Events.AUDIO_TRACK_SWITCHING,
                this.onAudioTrackSwitching,
                this
              ),
              t.on(a.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
              t.on(a.Events.ERROR, this.onError, this),
              t.on(a.Events.BUFFER_RESET, this.onBufferReset, this),
              t.on(a.Events.BUFFER_CREATED, this.onBufferCreated, this),
              t.on(a.Events.BUFFER_FLUSHED, this.onBufferFlushed, this),
              t.on(a.Events.INIT_PTS_FOUND, this.onInitPtsFound, this),
              t.on(a.Events.FRAG_BUFFERED, this.onFragBuffered, this);
          }),
          (S._unregisterListeners = function () {
            var t = this.hls;
            t.off(a.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
              t.off(a.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
              t.off(a.Events.MANIFEST_LOADING, this.onManifestLoading, this),
              t.off(a.Events.LEVEL_LOADED, this.onLevelLoaded, this),
              t.off(
                a.Events.AUDIO_TRACKS_UPDATED,
                this.onAudioTracksUpdated,
                this
              ),
              t.off(
                a.Events.AUDIO_TRACK_SWITCHING,
                this.onAudioTrackSwitching,
                this
              ),
              t.off(a.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
              t.off(a.Events.ERROR, this.onError, this),
              t.off(a.Events.BUFFER_RESET, this.onBufferReset, this),
              t.off(a.Events.BUFFER_CREATED, this.onBufferCreated, this),
              t.off(a.Events.BUFFER_FLUSHED, this.onBufferFlushed, this),
              t.off(a.Events.INIT_PTS_FOUND, this.onInitPtsFound, this),
              t.off(a.Events.FRAG_BUFFERED, this.onFragBuffered, this);
          }),
          (S.onInitPtsFound = function (t, e) {
            var r = e.frag,
              i = e.id,
              a = e.initPTS;
            if ("main" === i) {
              var s = r.cc;
              (this.initPTS[r.cc] = a),
                this.log("InitPTS for cc: " + s + " found from main: " + a),
                (this.videoTrackCC = s),
                this.state === n.State.WAITING_INIT_PTS && this.tick();
            }
          }),
          (S.startLoad = function (t) {
            if (!this.levels)
              return (
                (this.startPosition = t), void (this.state = n.State.STOPPED)
              );
            var e = this.lastCurrentTime;
            this.stopLoad(),
              this.setInterval(100),
              (this.fragLoadError = 0),
              e > 0 && -1 === t
                ? (this.log(
                    "Override startPosition with lastCurrentTime @" +
                      e.toFixed(3)
                  ),
                  (this.state = n.State.IDLE))
                : ((this.loadedmetadata = !1),
                  (this.state = n.State.WAITING_TRACK)),
              (this.nextLoadPosition =
                this.startPosition =
                this.lastCurrentTime =
                  t),
              this.tick();
          }),
          (S.doTick = function () {
            switch (this.state) {
              case n.State.IDLE:
                this.doTickIdle();
                break;
              case n.State.WAITING_TRACK:
                var e,
                  r = this.levels,
                  i = this.trackId,
                  a =
                    null == r || null === (e = r[i]) || void 0 === e
                      ? void 0
                      : e.details;
                if (a) {
                  if (this.waitForCdnTuneIn(a)) break;
                  this.state = n.State.WAITING_INIT_PTS;
                }
                break;
              case n.State.FRAG_LOADING_WAITING_RETRY:
                var o,
                  l = performance.now(),
                  u = this.retryDate;
                (!u ||
                  l >= u ||
                  (null !== (o = this.media) && void 0 !== o && o.seeking)) &&
                  (this.log("RetryDate reached, switch back to IDLE state"),
                  (this.state = n.State.IDLE));
                break;
              case n.State.WAITING_INIT_PTS:
                var d = this.waitingData;
                if (d) {
                  var c = d.frag,
                    h = d.part,
                    f = d.cache,
                    v = d.complete;
                  if (void 0 !== this.initPTS[c.cc]) {
                    (this.waitingData = null),
                      (this.waitingVideoCC = -1),
                      (this.state = n.State.FRAG_LOADING);
                    var p = {
                      frag: c,
                      part: h,
                      payload: f.flush(),
                      networkDetails: null,
                    };
                    this._handleFragmentLoadProgress(p),
                      v &&
                        t.prototype._handleFragmentLoadComplete.call(this, p);
                  } else if (this.videoTrackCC !== this.waitingVideoCC)
                    m.logger.log(
                      "Waiting fragment cc (" +
                        c.cc +
                        ") cancelled because video is at cc " +
                        this.videoTrackCC
                    ),
                      this.clearWaitingFragment();
                  else {
                    var y = this.getLoadPosition(),
                      E = s.BufferHelper.bufferInfo(
                        this.mediaBuffer,
                        y,
                        this.config.maxBufferHole
                      );
                    Object(g.fragmentWithinToleranceTest)(
                      E.end,
                      this.config.maxFragLookUpTolerance,
                      c
                    ) < 0 &&
                      (m.logger.log(
                        "Waiting fragment cc (" +
                          c.cc +
                          ") @ " +
                          c.start +
                          " cancelled because another fragment at " +
                          E.end +
                          " is needed"
                      ),
                      this.clearWaitingFragment());
                  }
                } else this.state = n.State.IDLE;
            }
            this.onTickEnd();
          }),
          (S.clearWaitingFragment = function () {
            var t = this.waitingData;
            t &&
              (this.fragmentTracker.removeFragment(t.frag),
              (this.waitingData = null),
              (this.waitingVideoCC = -1),
              (this.state = n.State.IDLE));
          }),
          (S.onTickEnd = function () {
            var t = this.media;
            if (t && t.readyState) {
              var e = (this.mediaBuffer ? this.mediaBuffer : t).buffered;
              !this.loadedmetadata && e.length && (this.loadedmetadata = !0),
                (this.lastCurrentTime = t.currentTime);
            }
          }),
          (S.doTickIdle = function () {
            var t,
              e,
              r = this.hls,
              i = this.levels,
              s = this.media,
              o = this.trackId,
              l = r.config;
            if (
              i &&
              i[o] &&
              (s || (!this.startFragRequested && l.startFragPrefetch))
            ) {
              var c = i[o].details;
              if (
                !c ||
                (c.live && this.levelLastLoaded !== o) ||
                this.waitForCdnTuneIn(c)
              )
                this.state = n.State.WAITING_TRACK;
              else {
                this.bufferFlushed &&
                  ((this.bufferFlushed = !1),
                  this.afterBufferFlushed(
                    this.mediaBuffer ? this.mediaBuffer : this.media,
                    d.ElementaryStreamTypes.AUDIO,
                    u.PlaylistLevelType.AUDIO
                  ));
                var h = this.getFwdBufferInfo(
                  this.mediaBuffer ? this.mediaBuffer : this.media,
                  u.PlaylistLevelType.AUDIO
                );
                if (null !== h) {
                  var f = h.len,
                    g = this.getMaxBufferLength(),
                    v = this.audioSwitch;
                  if (!(f >= g) || v) {
                    if (!v && this._streamEnded(h, c))
                      return (
                        r.trigger(a.Events.BUFFER_EOS, { type: "audio" }),
                        void (this.state = n.State.ENDED)
                      );
                    var p = c.fragments[0].start,
                      m = h.end;
                    if (v) {
                      var y = this.getLoadPosition();
                      (m = y),
                        c.PTSKnown &&
                          y < p &&
                          (h.end > p || h.nextStart) &&
                          (this.log(
                            "Alt audio track ahead of main track, seek to start of alt audio track"
                          ),
                          (s.currentTime = p + 0.05));
                    }
                    var E = this.getNextFragment(m, c);
                    E
                      ? "identity" !==
                          (null === (t = E.decryptdata) || void 0 === t
                            ? void 0
                            : t.keyFormat) ||
                        (null !== (e = E.decryptdata) && void 0 !== e && e.key)
                        ? this.loadFragment(E, c, m)
                        : this.loadKey(E, c)
                      : (this.bufferFlushed = !0);
                  }
                }
              }
            }
          }),
          (S.getMaxBufferLength = function () {
            var e = t.prototype.getMaxBufferLength.call(this),
              r = this.getFwdBufferInfo(
                this.videoBuffer ? this.videoBuffer : this.media,
                u.PlaylistLevelType.MAIN
              );
            return null === r ? e : Math.max(e, r.len);
          }),
          (S.onMediaDetaching = function () {
            (this.videoBuffer = null), t.prototype.onMediaDetaching.call(this);
          }),
          (S.onAudioTracksUpdated = function (t, e) {
            var r = e.audioTracks;
            this.resetTransmuxer(),
              (this.levels = r.map(function (t) {
                return new l.Level(t);
              }));
          }),
          (S.onAudioTrackSwitching = function (t, e) {
            var r = !!e.url;
            this.trackId = e.id;
            var i = this.fragCurrent;
            null != i && i.loader && i.loader.abort(),
              (this.fragCurrent = null),
              this.clearWaitingFragment(),
              r ? this.setInterval(100) : this.resetTransmuxer(),
              r
                ? ((this.audioSwitch = !0), (this.state = n.State.IDLE))
                : (this.state = n.State.STOPPED),
              this.tick();
          }),
          (S.onManifestLoading = function () {
            (this.mainDetails = null),
              this.fragmentTracker.removeAllFragments(),
              (this.startPosition = this.lastCurrentTime = 0),
              (this.bufferFlushed = !1);
          }),
          (S.onLevelLoaded = function (t, e) {
            this.mainDetails = e.details;
          }),
          (S.onAudioTrackLoaded = function (t, e) {
            var r,
              i = this.levels,
              a = e.details,
              s = e.id;
            if (i) {
              this.log(
                "Track " +
                  s +
                  " loaded [" +
                  a.startSN +
                  "," +
                  a.endSN +
                  "],duration:" +
                  a.totalduration
              );
              var o = i[s],
                l = 0;
              if (
                a.live ||
                (null !== (r = o.details) && void 0 !== r && r.live)
              ) {
                var u = this.mainDetails;
                if (
                  (a.fragments[0] || (a.deltaUpdateFailed = !0),
                  a.deltaUpdateFailed || !u)
                )
                  return;
                !o.details && a.hasProgramDateTime && u.hasProgramDateTime
                  ? (Object(v.alignPDT)(a, u), (l = a.fragments[0].start))
                  : (l = this.alignPlaylists(a, o.details));
              }
              (o.details = a),
                (this.levelLastLoaded = s),
                this.startFragRequested ||
                  (!this.mainDetails && a.live) ||
                  this.setStartPosition(o.details, l),
                this.state !== n.State.WAITING_TRACK ||
                  this.waitForCdnTuneIn(a) ||
                  (this.state = n.State.IDLE),
                this.tick();
            } else
              this.warn("Audio tracks were reset while loading level " + s);
          }),
          (S._handleFragmentLoadProgress = function (t) {
            var e,
              r = t.frag,
              i = t.part,
              a = t.payload,
              s = this.config,
              o = this.trackId,
              l = this.levels;
            if (l) {
              var d = l[o],
                g = d.details,
                v = s.defaultAudioCodec || d.audioCodec || "mp4a.40.2",
                p = this.transmuxer;
              p ||
                (p = this.transmuxer =
                  new h.default(
                    this.hls,
                    u.PlaylistLevelType.AUDIO,
                    this._handleTransmuxComplete.bind(this),
                    this._handleTransmuxerFlush.bind(this)
                  ));
              var y = this.initPTS[r.cc],
                E =
                  null === (e = r.initSegment) || void 0 === e
                    ? void 0
                    : e.data;
              if (void 0 !== y) {
                var T = i ? i.index : -1,
                  S = -1 !== T,
                  b = new f.ChunkMetadata(
                    r.level,
                    r.sn,
                    r.stats.chunkCount,
                    a.byteLength,
                    T,
                    S
                  );
                p.push(a, E, v, "", r, i, g.totalduration, !1, b, y);
              } else
                m.logger.log(
                  "Unknown video PTS for cc " +
                    r.cc +
                    ", waiting for video PTS before demuxing audio frag " +
                    r.sn +
                    " of [" +
                    g.startSN +
                    " ," +
                    g.endSN +
                    "],track " +
                    o
                ),
                  (this.waitingData = this.waitingData || {
                    frag: r,
                    part: i,
                    cache: new c.default(),
                    complete: !1,
                  }).cache.push(new Uint8Array(a)),
                  (this.waitingVideoCC = this.videoTrackCC),
                  (this.state = n.State.WAITING_INIT_PTS);
            } else
              this.warn(
                "Audio tracks were reset while fragment load was in progress. Fragment " +
                  r.sn +
                  " of level " +
                  r.level +
                  " will not be buffered"
              );
          }),
          (S._handleFragmentLoadComplete = function (e) {
            this.waitingData
              ? (this.waitingData.complete = !0)
              : t.prototype._handleFragmentLoadComplete.call(this, e);
          }),
          (S.onBufferReset = function () {
            (this.mediaBuffer = this.videoBuffer = null),
              (this.loadedmetadata = !1);
          }),
          (S.onBufferCreated = function (t, e) {
            var r = e.tracks.audio;
            r && (this.mediaBuffer = r.buffer),
              e.tracks.video && (this.videoBuffer = e.tracks.video.buffer);
          }),
          (S.onFragBuffered = function (t, e) {
            var r = e.frag,
              i = e.part;
            r.type === u.PlaylistLevelType.AUDIO &&
              (this.fragContextChanged(r)
                ? this.warn(
                    "Fragment " +
                      r.sn +
                      (i ? " p: " + i.index : "") +
                      " of level " +
                      r.level +
                      " finished buffering, but was aborted. state: " +
                      this.state +
                      ", audioSwitch: " +
                      this.audioSwitch
                  )
                : ("initSegment" !== r.sn &&
                    ((this.fragPrevious = r),
                    this.audioSwitch &&
                      ((this.audioSwitch = !1),
                      this.hls.trigger(a.Events.AUDIO_TRACK_SWITCHED, {
                        id: this.trackId,
                      }))),
                  this.fragBufferedComplete(r, i)));
          }),
          (S.onError = function (e, r) {
            switch (r.details) {
              case p.ErrorDetails.FRAG_LOAD_ERROR:
              case p.ErrorDetails.FRAG_LOAD_TIMEOUT:
              case p.ErrorDetails.KEY_LOAD_ERROR:
              case p.ErrorDetails.KEY_LOAD_TIMEOUT:
                this.onFragmentOrKeyLoadError(u.PlaylistLevelType.AUDIO, r);
                break;
              case p.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
              case p.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
                this.state !== n.State.ERROR &&
                  this.state !== n.State.STOPPED &&
                  ((this.state = r.fatal ? n.State.ERROR : n.State.IDLE),
                  this.warn(
                    r.details +
                      " while loading frag, switching to " +
                      this.state +
                      " state"
                  ));
                break;
              case p.ErrorDetails.BUFFER_FULL_ERROR:
                if (
                  "audio" === r.parent &&
                  (this.state === n.State.PARSING ||
                    this.state === n.State.PARSED)
                ) {
                  var i = !0,
                    a = this.getFwdBufferInfo(
                      this.mediaBuffer,
                      u.PlaylistLevelType.AUDIO
                    );
                  a && a.len > 0.5 && (i = !this.reduceMaxBufferLength(a.len)),
                    i &&
                      (this.warn(
                        "Buffer full error also media.currentTime is not buffered, flush audio buffer"
                      ),
                      (this.fragCurrent = null),
                      t.prototype.flushMainBuffer.call(
                        this,
                        0,
                        Number.POSITIVE_INFINITY,
                        "audio"
                      )),
                    this.resetLoadingState();
                }
            }
          }),
          (S.onBufferFlushed = function (t, e) {
            e.type === d.ElementaryStreamTypes.AUDIO &&
              (this.bufferFlushed = !0);
          }),
          (S._handleTransmuxComplete = function (t) {
            var e,
              r = "audio",
              i = this.hls,
              s = t.remuxResult,
              o = t.chunkMeta,
              l = this.getCurrentContext(o);
            if (!l)
              return (
                this.warn(
                  "The loading context changed while buffering fragment " +
                    o.sn +
                    " of level " +
                    o.level +
                    ". This chunk will not be buffered."
                ),
                void this.resetLiveStartWhenNotLoaded(o.level)
              );
            var u = l.frag,
              c = l.part,
              h = s.audio,
              f = s.text,
              g = s.id3,
              v = s.initSegment;
            if (!this.fragContextChanged(u)) {
              if (
                ((this.state = n.State.PARSING),
                this.audioSwitch && h && this.completeAudioSwitch(),
                null != v &&
                  v.tracks &&
                  (this._bufferInitSegment(v.tracks, u, o),
                  i.trigger(a.Events.FRAG_PARSING_INIT_SEGMENT, {
                    frag: u,
                    id: r,
                    tracks: v.tracks,
                  })),
                h)
              ) {
                var p = h.startPTS,
                  m = h.endPTS,
                  E = h.startDTS,
                  T = h.endDTS;
                c &&
                  (c.elementaryStreams[d.ElementaryStreamTypes.AUDIO] = {
                    startPTS: p,
                    endPTS: m,
                    startDTS: E,
                    endDTS: T,
                  }),
                  u.setElementaryStreamInfo(
                    d.ElementaryStreamTypes.AUDIO,
                    p,
                    m,
                    E,
                    T
                  ),
                  this.bufferFragmentData(h, u, c, o);
              }
              if (
                null != g &&
                null !== (e = g.samples) &&
                void 0 !== e &&
                e.length
              ) {
                var S = y({ frag: u, id: r }, g);
                i.trigger(a.Events.FRAG_PARSING_METADATA, S);
              }
              if (f) {
                var b = y({ frag: u, id: r }, f);
                i.trigger(a.Events.FRAG_PARSING_USERDATA, b);
              }
            }
          }),
          (S._bufferInitSegment = function (t, e, r) {
            if (this.state === n.State.PARSING) {
              t.video && delete t.video;
              var i = t.audio;
              if (i) {
                (i.levelCodec = i.codec),
                  (i.id = "audio"),
                  this.log(
                    "Init audio buffer, container:" +
                      i.container +
                      ", codecs[parsed]=[" +
                      i.codec +
                      "]"
                  ),
                  this.hls.trigger(a.Events.BUFFER_CODECS, t);
                var s = i.initSegment;
                if (null != s && s.byteLength) {
                  var o = {
                    type: "audio",
                    frag: e,
                    part: null,
                    chunkMeta: r,
                    parent: e.type,
                    data: s,
                  };
                  this.hls.trigger(a.Events.BUFFER_APPENDING, o);
                }
                this.tick();
              }
            }
          }),
          (S.loadFragment = function (e, r, a) {
            var s = this.fragmentTracker.getState(e);
            (this.fragCurrent = e),
              (this.audioSwitch ||
                s === o.FragmentState.NOT_LOADED ||
                s === o.FragmentState.PARTIAL) &&
                ("initSegment" === e.sn
                  ? this._loadInitSegment(e)
                  : r.live && !Object(i.isFiniteNumber)(this.initPTS[e.cc])
                  ? (this.log(
                      "Waiting for video PTS in continuity counter " +
                        e.cc +
                        " of live stream before loading audio fragment " +
                        e.sn +
                        " of level " +
                        this.trackId
                    ),
                    (this.state = n.State.WAITING_INIT_PTS))
                  : ((this.startFragRequested = !0),
                    t.prototype.loadFragment.call(this, e, r, a)));
          }),
          (S.completeAudioSwitch = function () {
            var e = this.hls,
              r = this.media,
              i = this.trackId;
            r &&
              (this.log("Switching audio track : flushing all audio"),
              t.prototype.flushMainBuffer.call(
                this,
                0,
                Number.POSITIVE_INFINITY,
                "audio"
              )),
              (this.audioSwitch = !1),
              e.trigger(a.Events.AUDIO_TRACK_SWITCHED, { id: i });
          }),
          T
        );
      })(n.default);
      e.default = T;
    },
    "./src/controller/audio-track-controller.ts": function (t, e, r) {
      r.r(e);
      var i = r("./src/events.ts"),
        n = r("./src/errors.ts"),
        a = r("./src/controller/base-playlist-controller.ts"),
        s = r("./src/types/loader.ts");
      function o(t, e) {
        return (o =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var l = (function (t) {
        var e, r;
        function a(e) {
          var r;
          return (
            ((r = t.call(this, e, "[audio-track-controller]") || this).tracks =
              []),
            (r.groupId = null),
            (r.tracksInGroup = []),
            (r.trackId = -1),
            (r.trackName = ""),
            (r.selectDefaultTrack = !0),
            r.registerListeners(),
            r
          );
        }
        (r = t),
          ((e = a).prototype = Object.create(r.prototype)),
          (e.prototype.constructor = e),
          o(e, r);
        var l,
          u = a.prototype;
        return (
          (u.registerListeners = function () {
            var t = this.hls;
            t.on(i.Events.MANIFEST_LOADING, this.onManifestLoading, this),
              t.on(i.Events.MANIFEST_PARSED, this.onManifestParsed, this),
              t.on(i.Events.LEVEL_LOADING, this.onLevelLoading, this),
              t.on(i.Events.LEVEL_SWITCHING, this.onLevelSwitching, this),
              t.on(i.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
              t.on(i.Events.ERROR, this.onError, this);
          }),
          (u.unregisterListeners = function () {
            var t = this.hls;
            t.off(i.Events.MANIFEST_LOADING, this.onManifestLoading, this),
              t.off(i.Events.MANIFEST_PARSED, this.onManifestParsed, this),
              t.off(i.Events.LEVEL_LOADING, this.onLevelLoading, this),
              t.off(i.Events.LEVEL_SWITCHING, this.onLevelSwitching, this),
              t.off(i.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
              t.off(i.Events.ERROR, this.onError, this);
          }),
          (u.destroy = function () {
            this.unregisterListeners(),
              (this.tracks.length = 0),
              (this.tracksInGroup.length = 0),
              t.prototype.destroy.call(this);
          }),
          (u.onManifestLoading = function () {
            (this.tracks = []),
              (this.groupId = null),
              (this.tracksInGroup = []),
              (this.trackId = -1),
              (this.trackName = ""),
              (this.selectDefaultTrack = !0);
          }),
          (u.onManifestParsed = function (t, e) {
            this.tracks = e.audioTracks || [];
          }),
          (u.onAudioTrackLoaded = function (t, e) {
            var r = e.id,
              i = e.details,
              n = this.tracksInGroup[r];
            if (n) {
              var a = n.details;
              (n.details = e.details),
                this.log(
                  "audioTrack " +
                    r +
                    " loaded [" +
                    i.startSN +
                    "-" +
                    i.endSN +
                    "]"
                ),
                r === this.trackId &&
                  ((this.retryCount = 0), this.playlistLoaded(r, e, a));
            } else this.warn("Invalid audio track id " + r);
          }),
          (u.onLevelLoading = function (t, e) {
            this.switchLevel(e.level);
          }),
          (u.onLevelSwitching = function (t, e) {
            this.switchLevel(e.level);
          }),
          (u.switchLevel = function (t) {
            var e = this.hls.levels[t];
            if (null != e && e.audioGroupIds) {
              var r = e.audioGroupIds[e.urlId];
              if (this.groupId !== r) {
                this.groupId = r;
                var n = this.tracks.filter(function (t) {
                  return !r || t.groupId === r;
                });
                this.selectDefaultTrack &&
                  !n.some(function (t) {
                    return t.default;
                  }) &&
                  (this.selectDefaultTrack = !1),
                  (this.tracksInGroup = n);
                var a = { audioTracks: n };
                this.log(
                  "Updating audio tracks, " +
                    n.length +
                    ' track(s) found in "' +
                    r +
                    '" group-id'
                ),
                  this.hls.trigger(i.Events.AUDIO_TRACKS_UPDATED, a),
                  this.selectInitialTrack();
              }
            }
          }),
          (u.onError = function (e, r) {
            t.prototype.onError.call(this, e, r),
              !r.fatal &&
                r.context &&
                r.context.type === s.PlaylistContextType.AUDIO_TRACK &&
                r.context.id === this.trackId &&
                r.context.groupId === this.groupId &&
                this.retryLoadingOrFail(r);
          }),
          (u.setAudioTrack = function (t) {
            var e = this.tracksInGroup;
            if (t < 0 || t >= e.length)
              this.warn("Invalid id passed to audio-track controller");
            else {
              this.clearTimer();
              var r = e[this.trackId];
              this.log("Now switching to audio-track index " + t);
              var n = e[t],
                a = n.id,
                s = n.groupId,
                o = void 0 === s ? "" : s,
                l = n.name,
                u = n.type,
                d = n.url;
              if (
                ((this.trackId = t),
                (this.trackName = l),
                (this.selectDefaultTrack = !1),
                this.hls.trigger(i.Events.AUDIO_TRACK_SWITCHING, {
                  id: a,
                  groupId: o,
                  name: l,
                  type: u,
                  url: d,
                }),
                !n.details || n.details.live)
              ) {
                var c = this.switchParams(
                  n.url,
                  null == r ? void 0 : r.details
                );
                this.loadPlaylist(c);
              }
            }
          }),
          (u.selectInitialTrack = function () {
            this.tracksInGroup;
            var t = this.trackName,
              e = this.findTrackId(t) || this.findTrackId();
            -1 !== e
              ? this.setAudioTrack(e)
              : (this.warn(
                  "No track found for running audio group-ID: " + this.groupId
                ),
                this.hls.trigger(i.Events.ERROR, {
                  type: n.ErrorTypes.MEDIA_ERROR,
                  details: n.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,
                  fatal: !0,
                }));
          }),
          (u.findTrackId = function (t) {
            for (var e = this.tracksInGroup, r = 0; r < e.length; r++) {
              var i = e[r];
              if (
                (!this.selectDefaultTrack || i.default) &&
                (!t || t === i.name)
              )
                return i.id;
            }
            return -1;
          }),
          (u.loadPlaylist = function (t) {
            var e = this.tracksInGroup[this.trackId];
            if (this.shouldLoadTrack(e)) {
              var r = e.id,
                n = e.groupId,
                a = e.url;
              if (t)
                try {
                  a = t.addDirectives(a);
                } catch (s) {
                  this.warn(
                    "Could not construct new URL with HLS Delivery Directives: " +
                      s
                  );
                }
              this.log("loading audio-track playlist for id: " + r),
                this.clearTimer(),
                this.hls.trigger(i.Events.AUDIO_TRACK_LOADING, {
                  url: a,
                  id: r,
                  groupId: n,
                  deliveryDirectives: t || null,
                });
            }
          }),
          (l = [
            {
              key: "audioTracks",
              get: function () {
                return this.tracksInGroup;
              },
            },
            {
              key: "audioTrack",
              get: function () {
                return this.trackId;
              },
              set: function (t) {
                (this.selectDefaultTrack = !1), this.setAudioTrack(t);
              },
            },
          ]) &&
            (function (t, e) {
              for (var r = 0; r < e.length; r++) {
                var i = e[r];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(t, i.key, i);
              }
            })(a.prototype, l),
          a
        );
      })(a.default);
      e.default = l;
    },
    "./src/controller/base-playlist-controller.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "default", function () {
          return l;
        });
      var i = r("./src/polyfills/number.ts"),
        n = r("./src/types/level.ts"),
        a = r("./src/controller/level-helper.ts"),
        s = r("./src/utils/logger.ts"),
        o = r("./src/errors.ts"),
        l = (function () {
          function t(t, e) {
            (this.hls = void 0),
              (this.timer = -1),
              (this.canLoad = !1),
              (this.retryCount = 0),
              (this.log = void 0),
              (this.warn = void 0),
              (this.log = s.logger.log.bind(s.logger, e + ":")),
              (this.warn = s.logger.warn.bind(s.logger, e + ":")),
              (this.hls = t);
          }
          var e = t.prototype;
          return (
            (e.destroy = function () {
              this.clearTimer(), (this.hls = this.log = this.warn = null);
            }),
            (e.onError = function (t, e) {
              e.fatal &&
                e.type === o.ErrorTypes.NETWORK_ERROR &&
                this.clearTimer();
            }),
            (e.clearTimer = function () {
              clearTimeout(this.timer), (this.timer = -1);
            }),
            (e.startLoad = function () {
              (this.canLoad = !0), (this.retryCount = 0), this.loadPlaylist();
            }),
            (e.stopLoad = function () {
              (this.canLoad = !1), this.clearTimer();
            }),
            (e.switchParams = function (t, e) {
              var r = null == e ? void 0 : e.renditionReports;
              if (r)
                for (var a = 0; a < r.length; a++) {
                  var s = r[a],
                    o = "" + s.URI;
                  if (o === t.substr(-o.length)) {
                    var l = parseInt(s["LAST-MSN"]),
                      u = parseInt(s["LAST-PART"]);
                    if (e && this.hls.config.lowLatencyMode) {
                      var d = Math.min(e.age - e.partTarget, e.targetduration);
                      void 0 !== u && d > e.partTarget && (u += 1);
                    }
                    if (Object(i.isFiniteNumber)(l))
                      return new n.HlsUrlParameters(
                        l,
                        Object(i.isFiniteNumber)(u) ? u : void 0,
                        n.HlsSkip.No
                      );
                  }
                }
            }),
            (e.loadPlaylist = function (t) {}),
            (e.shouldLoadTrack = function (t) {
              return (
                this.canLoad && t && !!t.url && (!t.details || t.details.live)
              );
            }),
            (e.playlistLoaded = function (t, e, r) {
              var i = this,
                n = e.details,
                s = e.stats,
                o = s.loading.end
                  ? Math.max(0, self.performance.now() - s.loading.end)
                  : 0;
              if (
                ((n.advancedDateTime = Date.now() - o),
                n.live || (null != r && r.live))
              ) {
                if (
                  (n.reloaded(r),
                  r &&
                    this.log(
                      "live playlist " +
                        t +
                        " " +
                        (n.advanced
                          ? "REFRESHED " + n.lastPartSn + "-" + n.lastPartIndex
                          : "MISSED")
                    ),
                  r && n.fragments.length > 0 && Object(a.mergeDetails)(r, n),
                  !this.canLoad || !n.live)
                )
                  return;
                var l,
                  u = void 0,
                  d = void 0;
                if (n.canBlockReload && n.endSN && n.advanced) {
                  var c = this.hls.config.lowLatencyMode,
                    h = n.lastPartSn,
                    f = n.endSN,
                    g = n.lastPartIndex,
                    v = h === f;
                  -1 !== g
                    ? ((u = v ? f + 1 : h), (d = v ? (c ? 0 : g) : g + 1))
                    : (u = f + 1);
                  var p = n.age,
                    m = p + n.ageHeader,
                    y = Math.min(m - n.partTarget, 1.5 * n.targetduration);
                  if (y > 0) {
                    if (r && y > r.tuneInGoal)
                      this.warn(
                        "CDN Tune-in goal increased from: " +
                          r.tuneInGoal +
                          " to: " +
                          y +
                          " with playlist age: " +
                          n.age
                      ),
                        (y = 0);
                    else {
                      var E = Math.floor(y / n.targetduration);
                      (u += E),
                        void 0 !== d &&
                          (d += Math.round(
                            (y % n.targetduration) / n.partTarget
                          )),
                        this.log(
                          "CDN Tune-in age: " +
                            n.ageHeader +
                            "s last advanced " +
                            p.toFixed(2) +
                            "s goal: " +
                            y +
                            " skip sn " +
                            E +
                            " to part " +
                            d
                        );
                    }
                    n.tuneInGoal = y;
                  }
                  if (
                    ((l = this.getDeliveryDirectives(
                      n,
                      e.deliveryDirectives,
                      u,
                      d
                    )),
                    c || !v)
                  )
                    return void this.loadPlaylist(l);
                } else
                  l = this.getDeliveryDirectives(n, e.deliveryDirectives, u, d);
                var T = Object(a.computeReloadInterval)(n, s);
                void 0 !== u && n.canBlockReload && (T -= n.partTarget || 1),
                  this.log(
                    "reload live playlist " + t + " in " + Math.round(T) + " ms"
                  ),
                  (this.timer = self.setTimeout(function () {
                    return i.loadPlaylist(l);
                  }, T));
              } else this.clearTimer();
            }),
            (e.getDeliveryDirectives = function (t, e, r, i) {
              var a = Object(n.getSkipValue)(t, r);
              return (
                null != e &&
                  e.skip &&
                  t.deltaUpdateFailed &&
                  ((r = e.msn), (i = e.part), (a = n.HlsSkip.No)),
                new n.HlsUrlParameters(r, i, a)
              );
            }),
            (e.retryLoadingOrFail = function (t) {
              var e,
                r = this,
                i = this.hls.config,
                n = this.retryCount < i.levelLoadingMaxRetry;
              if (n)
                if (
                  (this.retryCount++,
                  t.details.indexOf("LoadTimeOut") > -1 &&
                    null !== (e = t.context) &&
                    void 0 !== e &&
                    e.deliveryDirectives)
                )
                  this.warn(
                    "retry playlist loading #" +
                      this.retryCount +
                      ' after "' +
                      t.details +
                      '"'
                  ),
                    this.loadPlaylist();
                else {
                  var a = Math.min(
                    Math.pow(2, this.retryCount) * i.levelLoadingRetryDelay,
                    i.levelLoadingMaxRetryTimeout
                  );
                  (this.timer = self.setTimeout(function () {
                    return r.loadPlaylist();
                  }, a)),
                    this.warn(
                      "retry playlist loading #" +
                        this.retryCount +
                        " in " +
                        a +
                        ' ms after "' +
                        t.details +
                        '"'
                    );
                }
              else
                this.warn('cannot recover from error "' + t.details + '"'),
                  this.clearTimer(),
                  (t.fatal = !0);
              return n;
            }),
            t
          );
        })();
    },
    "./src/controller/base-stream-controller.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "State", function () {
          return T;
        }),
        r.d(e, "default", function () {
          return S;
        });
      var i = r("./src/polyfills/number.ts"),
        n = r("./src/task-loop.ts"),
        a = r("./src/controller/fragment-tracker.ts"),
        s = r("./src/utils/buffer-helper.ts"),
        o = r("./src/utils/logger.ts"),
        l = r("./src/events.ts"),
        u = r("./src/errors.ts"),
        d = r("./src/types/transmuxer.ts"),
        c = r("./src/utils/mp4-tools.ts"),
        h = r("./src/utils/discontinuities.ts"),
        f = r("./src/controller/fragment-finders.ts"),
        g = r("./src/controller/level-helper.ts"),
        v = r("./src/loader/fragment-loader.ts"),
        p = r("./src/crypt/decrypter.ts"),
        m = r("./src/utils/time-ranges.ts"),
        y = r("./src/types/loader.ts");
      function E(t, e) {
        return (E =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var T = {
          STOPPED: "STOPPED",
          IDLE: "IDLE",
          KEY_LOADING: "KEY_LOADING",
          FRAG_LOADING: "FRAG_LOADING",
          FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
          WAITING_TRACK: "WAITING_TRACK",
          PARSING: "PARSING",
          PARSED: "PARSED",
          BACKTRACKING: "BACKTRACKING",
          ENDED: "ENDED",
          ERROR: "ERROR",
          WAITING_INIT_PTS: "WAITING_INIT_PTS",
          WAITING_LEVEL: "WAITING_LEVEL",
        },
        S = (function (t) {
          var e, r;
          function n(e, r, i) {
            var n;
            return (
              ((n = t.call(this) || this).hls = void 0),
              (n.fragPrevious = null),
              (n.fragCurrent = null),
              (n.fragmentTracker = void 0),
              (n.transmuxer = null),
              (n._state = T.STOPPED),
              (n.media = void 0),
              (n.mediaBuffer = void 0),
              (n.config = void 0),
              (n.bitrateTest = !1),
              (n.lastCurrentTime = 0),
              (n.nextLoadPosition = 0),
              (n.startPosition = 0),
              (n.loadedmetadata = !1),
              (n.fragLoadError = 0),
              (n.retryDate = 0),
              (n.levels = null),
              (n.fragmentLoader = void 0),
              (n.levelLastLoaded = null),
              (n.startFragRequested = !1),
              (n.decrypter = void 0),
              (n.initPTS = []),
              (n.onvseeking = null),
              (n.onvended = null),
              (n.logPrefix = ""),
              (n.log = void 0),
              (n.warn = void 0),
              (n.logPrefix = i),
              (n.log = o.logger.log.bind(o.logger, i + ":")),
              (n.warn = o.logger.warn.bind(o.logger, i + ":")),
              (n.hls = e),
              (n.fragmentLoader = new v.default(e.config)),
              (n.fragmentTracker = r),
              (n.config = e.config),
              (n.decrypter = new p.default(e, e.config)),
              e.on(
                l.Events.KEY_LOADED,
                n.onKeyLoaded,
                (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return t;
                })(n)
              ),
              n
            );
          }
          (r = t),
            ((e = n).prototype = Object.create(r.prototype)),
            (e.prototype.constructor = e),
            E(e, r);
          var S,
            b = n.prototype;
          return (
            (b.doTick = function () {
              this.onTickEnd();
            }),
            (b.onTickEnd = function () {}),
            (b.startLoad = function (t) {}),
            (b.stopLoad = function () {
              this.fragmentLoader.abort();
              var t = this.fragCurrent;
              t && this.fragmentTracker.removeFragment(t),
                this.resetTransmuxer(),
                (this.fragCurrent = null),
                (this.fragPrevious = null),
                this.clearInterval(),
                this.clearNextTick(),
                (this.state = T.STOPPED);
            }),
            (b._streamEnded = function (t, e) {
              var r = this.fragCurrent,
                i = this.fragmentTracker;
              if (!e.live && r && r.sn === e.endSN && !t.nextStart) {
                var n = i.getState(r);
                return (
                  n === a.FragmentState.PARTIAL || n === a.FragmentState.OK
                );
              }
              return !1;
            }),
            (b.onMediaAttached = function (t, e) {
              var r = (this.media = this.mediaBuffer = e.media);
              (this.onvseeking = this.onMediaSeeking.bind(this)),
                (this.onvended = this.onMediaEnded.bind(this)),
                r.addEventListener("seeking", this.onvseeking),
                r.addEventListener("ended", this.onvended);
              var i = this.config;
              this.levels &&
                i.autoStartLoad &&
                this.state === T.STOPPED &&
                this.startLoad(i.startPosition);
            }),
            (b.onMediaDetaching = function () {
              var t = this.media;
              null != t &&
                t.ended &&
                (this.log("MSE detaching and video ended, reset startPosition"),
                (this.startPosition = this.lastCurrentTime = 0)),
                t &&
                  (t.removeEventListener("seeking", this.onvseeking),
                  t.removeEventListener("ended", this.onvended),
                  (this.onvseeking = this.onvended = null)),
                (this.media = this.mediaBuffer = null),
                (this.loadedmetadata = !1),
                this.fragmentTracker.removeAllFragments(),
                this.stopLoad();
            }),
            (b.onMediaSeeking = function () {
              var t = this.config,
                e = this.fragCurrent,
                r = this.media,
                n = this.mediaBuffer,
                a = this.state,
                o = r ? r.currentTime : 0,
                l = s.BufferHelper.bufferInfo(n || r, o, t.maxBufferHole);
              if (
                (this.log(
                  "media seeking to " +
                    (Object(i.isFiniteNumber)(o) ? o.toFixed(3) : o) +
                    ", state: " +
                    a
                ),
                a === T.ENDED)
              )
                this.resetLoadingState();
              else if (e && !l.len) {
                var u = t.maxFragLookUpTolerance,
                  d = e.start - u,
                  c = o > e.start + e.duration + u;
                (o < d || c) &&
                  (c &&
                    e.loader &&
                    (this.log(
                      "seeking outside of buffer while fragment load in progress, cancel fragment load"
                    ),
                    e.loader.abort()),
                  this.resetLoadingState());
              }
              r && (this.lastCurrentTime = o),
                this.loadedmetadata ||
                  l.len ||
                  (this.nextLoadPosition = this.startPosition = o),
                this.tickImmediate();
            }),
            (b.onMediaEnded = function () {
              this.startPosition = this.lastCurrentTime = 0;
            }),
            (b.onKeyLoaded = function (t, e) {
              if (
                this.state === T.KEY_LOADING &&
                e.frag === this.fragCurrent &&
                this.levels
              ) {
                this.state = T.IDLE;
                var r = this.levels[e.frag.level].details;
                r && this.loadFragment(e.frag, r, e.frag.start);
              }
            }),
            (b.onHandlerDestroying = function () {
              this.stopLoad(), t.prototype.onHandlerDestroying.call(this);
            }),
            (b.onHandlerDestroyed = function () {
              (this.state = T.STOPPED),
                this.hls.off(l.Events.KEY_LOADED, this.onKeyLoaded, this),
                this.fragmentLoader && this.fragmentLoader.destroy(),
                this.decrypter && this.decrypter.destroy(),
                (this.hls =
                  this.log =
                  this.warn =
                  this.decrypter =
                  this.fragmentLoader =
                  this.fragmentTracker =
                    null),
                t.prototype.onHandlerDestroyed.call(this);
            }),
            (b.loadKey = function (t, e) {
              this.log(
                "Loading key for " +
                  t.sn +
                  " of [" +
                  e.startSN +
                  "-" +
                  e.endSN +
                  "], " +
                  ("[stream-controller]" === this.logPrefix
                    ? "level"
                    : "track") +
                  " " +
                  t.level
              ),
                (this.state = T.KEY_LOADING),
                (this.fragCurrent = t),
                this.hls.trigger(l.Events.KEY_LOADING, { frag: t });
            }),
            (b.loadFragment = function (t, e, r) {
              this._loadFragForPlayback(t, e, r);
            }),
            (b._loadFragForPlayback = function (t, e, r) {
              var i = this;
              this._doFragLoad(t, e, r, function (e) {
                if (i.fragContextChanged(t))
                  return (
                    i.warn(
                      "Fragment " +
                        t.sn +
                        (e.part ? " p: " + e.part.index : "") +
                        " of level " +
                        t.level +
                        " was dropped during download."
                    ),
                    void i.fragmentTracker.removeFragment(t)
                  );
                t.stats.chunkCount++, i._handleFragmentLoadProgress(e);
              })
                .then(function (e) {
                  if (e) {
                    i.fragLoadError = 0;
                    var r = i.state;
                    if (!i.fragContextChanged(t))
                      return "payload" in e &&
                        (i.log(
                          "Loaded fragment " + t.sn + " of level " + t.level
                        ),
                        i.hls.trigger(l.Events.FRAG_LOADED, e),
                        i.state === T.BACKTRACKING)
                        ? (i.fragmentTracker.backtrack(t, e),
                          void i.resetFragmentLoading(t))
                        : void i._handleFragmentLoadComplete(e);
                    (r === T.FRAG_LOADING ||
                      r === T.BACKTRACKING ||
                      (!i.fragCurrent && r === T.PARSING)) &&
                      (i.fragmentTracker.removeFragment(t), (i.state = T.IDLE));
                  }
                })
                .catch(function (e) {
                  i.warn(e), i.resetFragmentLoading(t);
                });
            }),
            (b.flushMainBuffer = function (t, e, r) {
              if ((void 0 === r && (r = null), t - e)) {
                var i = { startOffset: t, endOffset: e, type: r };
                (this.fragLoadError = 0),
                  this.hls.trigger(l.Events.BUFFER_FLUSHING, i);
              }
            }),
            (b._loadInitSegment = function (t) {
              var e = this;
              this._doFragLoad(t)
                .then(function (r) {
                  if (!r || e.fragContextChanged(t) || !e.levels)
                    throw new Error("init load aborted");
                  return r;
                })
                .then(function (r) {
                  var i = e.hls,
                    n = r.payload,
                    a = t.decryptdata;
                  if (
                    n &&
                    n.byteLength > 0 &&
                    a &&
                    a.key &&
                    a.iv &&
                    "AES-128" === a.method
                  ) {
                    var s = self.performance.now();
                    return e.decrypter
                      .webCryptoDecrypt(
                        new Uint8Array(n),
                        a.key.buffer,
                        a.iv.buffer
                      )
                      .then(function (e) {
                        var n = self.performance.now();
                        return (
                          i.trigger(l.Events.FRAG_DECRYPTED, {
                            frag: t,
                            payload: e,
                            stats: { tstart: s, tdecrypt: n },
                          }),
                          (r.payload = e),
                          r
                        );
                      });
                  }
                  return r;
                })
                .then(function (r) {
                  var i = e.fragCurrent,
                    n = e.hls,
                    a = e.levels;
                  if (!a) throw new Error("init load aborted, missing levels");
                  a[t.level].details;
                  var s = t.stats;
                  (e.state = T.IDLE),
                    (e.fragLoadError = 0),
                    (t.data = new Uint8Array(r.payload)),
                    (s.parsing.start = s.buffering.start =
                      self.performance.now()),
                    (s.parsing.end = s.buffering.end = self.performance.now()),
                    r.frag === i &&
                      n.trigger(l.Events.FRAG_BUFFERED, {
                        stats: s,
                        frag: i,
                        part: null,
                        id: t.type,
                      }),
                    e.tick();
                })
                .catch(function (r) {
                  e.warn(r), e.resetFragmentLoading(t);
                });
            }),
            (b.fragContextChanged = function (t) {
              var e = this.fragCurrent;
              return (
                !t ||
                !e ||
                t.level !== e.level ||
                t.sn !== e.sn ||
                t.urlId !== e.urlId
              );
            }),
            (b.fragBufferedComplete = function (t, e) {
              var r = this.mediaBuffer ? this.mediaBuffer : this.media;
              this.log(
                "Buffered " +
                  t.type +
                  " sn: " +
                  t.sn +
                  (e ? " part: " + e.index : "") +
                  " of " +
                  ("[stream-controller]" === this.logPrefix
                    ? "level"
                    : "track") +
                  " " +
                  t.level +
                  " " +
                  m.default.toString(s.BufferHelper.getBuffered(r))
              ),
                (this.state = T.IDLE),
                this.tick();
            }),
            (b._handleFragmentLoadComplete = function (t) {
              var e = this.transmuxer;
              if (e) {
                var r = t.frag,
                  i = t.part,
                  n = t.partsLoaded,
                  a =
                    !n ||
                    0 === n.length ||
                    n.some(function (t) {
                      return !t;
                    }),
                  s = new d.ChunkMetadata(
                    r.level,
                    r.sn,
                    r.stats.chunkCount + 1,
                    0,
                    i ? i.index : -1,
                    !a
                  );
                e.flush(s);
              }
            }),
            (b._handleFragmentLoadProgress = function (t) {}),
            (b._doFragLoad = function (t, e, r, n) {
              var a = this;
              if ((void 0 === r && (r = null), !this.levels))
                throw new Error("frag load aborted, missing levels");
              if (
                ((r = Math.max(t.start, r || 0)),
                this.config.lowLatencyMode && e)
              ) {
                var s = e.partList;
                if (s && n) {
                  r > t.end && e.fragmentHint && (t = e.fragmentHint);
                  var o = this.getNextPart(s, t, r);
                  if (o > -1) {
                    var u = s[o];
                    return (
                      this.log(
                        "Loading part sn: " +
                          t.sn +
                          " p: " +
                          u.index +
                          " cc: " +
                          t.cc +
                          " of playlist [" +
                          e.startSN +
                          "-" +
                          e.endSN +
                          "] parts [0-" +
                          o +
                          "-" +
                          (s.length - 1) +
                          "] " +
                          ("[stream-controller]" === this.logPrefix
                            ? "level"
                            : "track") +
                          ": " +
                          t.level +
                          ", target: " +
                          parseFloat(r.toFixed(3))
                      ),
                      (this.nextLoadPosition = u.start + u.duration),
                      (this.state = T.FRAG_LOADING),
                      this.hls.trigger(l.Events.FRAG_LOADING, {
                        frag: t,
                        part: s[o],
                        targetBufferTime: r,
                      }),
                      this.doFragPartsLoad(t, s, o, n).catch(function (t) {
                        return a.handleFragLoadError(t);
                      })
                    );
                  }
                  if (!t.url || this.loadedEndOfParts(s, r))
                    return Promise.resolve(null);
                }
              }
              return (
                this.log(
                  "Loading fragment " +
                    t.sn +
                    " cc: " +
                    t.cc +
                    " " +
                    (e ? "of [" + e.startSN + "-" + e.endSN + "] " : "") +
                    ("[stream-controller]" === this.logPrefix
                      ? "level"
                      : "track") +
                    ": " +
                    t.level +
                    ", target: " +
                    parseFloat(r.toFixed(3))
                ),
                Object(i.isFiniteNumber)(t.sn) &&
                  !this.bitrateTest &&
                  (this.nextLoadPosition = t.start + t.duration),
                (this.state = T.FRAG_LOADING),
                this.hls.trigger(l.Events.FRAG_LOADING, {
                  frag: t,
                  targetBufferTime: r,
                }),
                this.fragmentLoader.load(t, n).catch(function (t) {
                  return a.handleFragLoadError(t);
                })
              );
            }),
            (b.doFragPartsLoad = function (t, e, r, i) {
              var n = this;
              return new Promise(function (a, s) {
                var o = [];
                !(function r(u) {
                  var d = e[u];
                  n.fragmentLoader
                    .loadPart(t, d, i)
                    .then(function (i) {
                      o[d.index] = i;
                      var s = i.part;
                      n.hls.trigger(l.Events.FRAG_LOADED, i);
                      var c = e[u + 1];
                      if (!c || c.fragment !== t)
                        return a({ frag: t, part: s, partsLoaded: o });
                      r(u + 1);
                    })
                    .catch(s);
                })(r);
              });
            }),
            (b.handleFragLoadError = function (t) {
              var e = t.data;
              return (
                e && e.details === u.ErrorDetails.INTERNAL_ABORTED
                  ? this.handleFragLoadAborted(e.frag, e.part)
                  : this.hls.trigger(l.Events.ERROR, e),
                null
              );
            }),
            (b._handleTransmuxerFlush = function (t) {
              var e = this.getCurrentContext(t);
              if (e && this.state === T.PARSING) {
                var r = e.frag,
                  i = e.part,
                  n = e.level,
                  a = self.performance.now();
                (r.stats.parsing.end = a),
                  i && (i.stats.parsing.end = a),
                  this.updateLevelTiming(r, i, n, t.partial);
              } else this.fragCurrent || (this.state = T.IDLE);
            }),
            (b.getCurrentContext = function (t) {
              var e = this.levels,
                r = t.level,
                i = t.sn,
                n = t.part;
              if (!e || !e[r])
                return (
                  this.warn(
                    "Levels object was unset while buffering fragment " +
                      i +
                      " of level " +
                      r +
                      ". The current chunk will not be buffered."
                  ),
                  null
                );
              var a = e[r],
                s = n > -1 ? Object(g.getPartWith)(a, i, n) : null,
                o = s
                  ? s.fragment
                  : Object(g.getFragmentWithSN)(a, i, this.fragCurrent);
              return o ? { frag: o, part: s, level: a } : null;
            }),
            (b.bufferFragmentData = function (t, e, r, i) {
              if (t && this.state === T.PARSING) {
                var n = t.data1,
                  a = t.data2,
                  s = n;
                if (
                  (n && a && (s = Object(c.appendUint8Array)(n, a)),
                  s && s.length)
                ) {
                  var o = {
                    type: t.type,
                    frag: e,
                    part: r,
                    chunkMeta: i,
                    parent: e.type,
                    data: s,
                  };
                  this.hls.trigger(l.Events.BUFFER_APPENDING, o),
                    t.dropped && t.independent && !r && this.flushBufferGap(e);
                }
              }
            }),
            (b.flushBufferGap = function (t) {
              var e = this.media;
              if (e)
                if (s.BufferHelper.isBuffered(e, e.currentTime)) {
                  var r = e.currentTime,
                    i = s.BufferHelper.bufferInfo(e, r, 0),
                    n = t.duration,
                    a = Math.min(
                      2 * this.config.maxFragLookUpTolerance,
                      0.25 * n
                    ),
                    o = Math.max(Math.min(t.start - a, i.end - a), r + a);
                  t.start - o > a && this.flushMainBuffer(o, t.start);
                } else this.flushMainBuffer(0, t.start);
            }),
            (b.getFwdBufferInfo = function (t, e) {
              var r = this.config,
                n = this.getLoadPosition();
              if (!Object(i.isFiniteNumber)(n)) return null;
              var a = s.BufferHelper.bufferInfo(t, n, r.maxBufferHole);
              if (0 === a.len && void 0 !== a.nextStart) {
                var o = this.fragmentTracker.getBufferedFrag(n, e);
                if (o && a.nextStart < o.end)
                  return s.BufferHelper.bufferInfo(
                    t,
                    n,
                    Math.max(a.nextStart, r.maxBufferHole)
                  );
              }
              return a;
            }),
            (b.getMaxBufferLength = function (t) {
              var e,
                r = this.config;
              return (
                (e = t
                  ? Math.max((8 * r.maxBufferSize) / t, r.maxBufferLength)
                  : r.maxBufferLength),
                Math.min(e, r.maxMaxBufferLength)
              );
            }),
            (b.reduceMaxBufferLength = function (t) {
              var e = this.config,
                r = t || e.maxBufferLength;
              return (
                e.maxMaxBufferLength >= r &&
                ((e.maxMaxBufferLength /= 2),
                this.warn(
                  "Reduce max buffer length to " + e.maxMaxBufferLength + "s"
                ),
                !0)
              );
            }),
            (b.getNextFragment = function (t, e) {
              var r,
                i,
                n = e.fragments,
                a = n.length;
              if (!a) return null;
              var s,
                o = this.config,
                l = n[0].start;
              if (e.live) {
                var u = o.initialLiveManifestSize;
                if (a < u)
                  return (
                    this.warn(
                      "Not enough fragments to start playback (have: " +
                        a +
                        ", need: " +
                        u +
                        ")"
                    ),
                    null
                  );
                e.PTSKnown ||
                  this.startFragRequested ||
                  -1 !== this.startPosition ||
                  ((s = this.getInitialLiveFragment(e, n)),
                  (this.startPosition = s
                    ? this.hls.liveSyncPosition || s.start
                    : t));
              } else t <= l && (s = n[0]);
              if (!s) {
                var d = o.lowLatencyMode ? e.partEnd : e.fragmentEnd;
                s = this.getFragmentAtPosition(t, d, e);
              }
              return (
                null === (r = s) ||
                  void 0 === r ||
                  !r.initSegment ||
                  (null !== (i = s) && void 0 !== i && i.initSegment.data) ||
                  this.bitrateTest ||
                  (s = s.initSegment),
                s
              );
            }),
            (b.getNextPart = function (t, e, r) {
              for (
                var i = -1, n = !1, a = !0, s = 0, o = t.length;
                s < o;
                s++
              ) {
                var l = t[s];
                if (((a = a && !l.independent), i > -1 && r < l.start)) break;
                var u = l.loaded;
                !u && (n || l.independent || a) && l.fragment === e && (i = s),
                  (n = u);
              }
              return i;
            }),
            (b.loadedEndOfParts = function (t, e) {
              var r = t[t.length - 1];
              return r && e > r.start && r.loaded;
            }),
            (b.getInitialLiveFragment = function (t, e) {
              var r = this.fragPrevious,
                i = null;
              if (r) {
                if (
                  (t.hasProgramDateTime &&
                    (this.log(
                      "Live playlist, switching playlist, load frag with same PDT: " +
                        r.programDateTime
                    ),
                    (i = Object(f.findFragmentByPDT)(
                      e,
                      r.endProgramDateTime,
                      this.config.maxFragLookUpTolerance
                    ))),
                  !i)
                ) {
                  var n = r.sn + 1;
                  if (n >= t.startSN && n <= t.endSN) {
                    var a = e[n - t.startSN];
                    r.cc === a.cc &&
                      ((i = a),
                      this.log(
                        "Live playlist, switching playlist, load frag with next SN: " +
                          i.sn
                      ));
                  }
                  i ||
                    ((i = Object(f.findFragWithCC)(e, r.cc)) &&
                      this.log(
                        "Live playlist, switching playlist, load frag with same CC: " +
                          i.sn
                      ));
                }
              } else {
                var s = this.hls.liveSyncPosition;
                null !== s &&
                  (i = this.getFragmentAtPosition(
                    s,
                    this.bitrateTest ? t.fragmentEnd : t.edge,
                    t
                  ));
              }
              return i;
            }),
            (b.getFragmentAtPosition = function (t, e, r) {
              var i,
                n = this.config,
                s = this.fragPrevious,
                o = r.fragments,
                l = r.endSN,
                u = r.fragmentHint,
                d = n.maxFragLookUpTolerance,
                c = !!(n.lowLatencyMode && r.partList && u);
              if (
                (c && u && !this.bitrateTest && ((o = o.concat(u)), (l = u.sn)),
                t < e)
              ) {
                var h = t > e - d ? 0 : d;
                i = Object(f.findFragmentByPTS)(s, o, t, h);
              } else i = o[o.length - 1];
              if (i) {
                var g = i.sn - r.startSN,
                  v = s && i.level === s.level,
                  p = o[g + 1];
                if (
                  this.fragmentTracker.getState(i) ===
                  a.FragmentState.BACKTRACKED
                ) {
                  i = null;
                  for (
                    var m = g;
                    o[m] &&
                    this.fragmentTracker.getState(o[m]) ===
                      a.FragmentState.BACKTRACKED;

                  )
                    i = s ? o[m--] : o[--m];
                  i || (i = p);
                } else
                  s &&
                    i.sn === s.sn &&
                    !c &&
                    v &&
                    (i.sn < l &&
                    this.fragmentTracker.getState(p) !== a.FragmentState.OK
                      ? (this.log(
                          "SN " + i.sn + " just loaded, load next one: " + p.sn
                        ),
                        (i = p))
                      : (i = null));
              }
              return i;
            }),
            (b.synchronizeToLiveEdge = function (t) {
              var e = this.config,
                r = this.media;
              if (r) {
                var i = this.hls.liveSyncPosition,
                  n = r.currentTime,
                  a = t.fragments[0].start,
                  s = t.edge,
                  o = n >= a - e.maxFragLookUpTolerance && n <= s;
                if (null !== i && r.duration > i && (n < i || !o)) {
                  var l =
                    void 0 !== e.liveMaxLatencyDuration
                      ? e.liveMaxLatencyDuration
                      : e.liveMaxLatencyDurationCount * t.targetduration;
                  ((!o && r.readyState < 4) || n < s - l) &&
                    (this.loadedmetadata || (this.nextLoadPosition = i),
                    r.readyState &&
                      (this.warn(
                        "Playback: " +
                          n.toFixed(3) +
                          " is located too far from the end of live sliding playlist: " +
                          s +
                          ", reset currentTime to : " +
                          i.toFixed(3)
                      ),
                      (r.currentTime = i)));
                }
              }
            }),
            (b.alignPlaylists = function (t, e) {
              var r = this.levels,
                n = this.levelLastLoaded,
                a = this.fragPrevious,
                s = null !== n ? r[n] : null,
                o = t.fragments.length;
              if (!o) return this.warn("No fragments in live playlist"), 0;
              var l = t.fragments[0].start,
                u = !e,
                d = t.alignedSliding && Object(i.isFiniteNumber)(l);
              if (u || (!d && !l)) {
                Object(h.alignStream)(a, s, t);
                var c = t.fragments[0].start;
                return (
                  this.log(
                    "Live playlist sliding: " +
                      c.toFixed(2) +
                      " start-sn: " +
                      (e ? e.startSN : "na") +
                      "->" +
                      t.startSN +
                      " prev-sn: " +
                      (a ? a.sn : "na") +
                      " fragments: " +
                      o
                  ),
                  c
                );
              }
              return l;
            }),
            (b.waitForCdnTuneIn = function (t) {
              return (
                t.live &&
                t.canBlockReload &&
                t.tuneInGoal > Math.max(t.partHoldBack, 3 * t.partTarget)
              );
            }),
            (b.setStartPosition = function (t, e) {
              var r = this.startPosition;
              if (
                (r < e && (r = -1), -1 === r || -1 === this.lastCurrentTime)
              ) {
                var n = t.startTimeOffset;
                Object(i.isFiniteNumber)(n)
                  ? ((r = e + n),
                    n < 0 && (r += t.totalduration),
                    (r = Math.min(Math.max(e, r), e + t.totalduration)),
                    this.log(
                      "Start time offset " +
                        n +
                        " found in playlist, adjust startPosition to " +
                        r
                    ),
                    (this.startPosition = r))
                  : t.live
                  ? (r = this.hls.liveSyncPosition || e)
                  : (this.startPosition = r = 0),
                  (this.lastCurrentTime = r);
              }
              this.nextLoadPosition = r;
            }),
            (b.getLoadPosition = function () {
              var t = this.media,
                e = 0;
              return (
                this.loadedmetadata && t
                  ? (e = t.currentTime)
                  : this.nextLoadPosition && (e = this.nextLoadPosition),
                e
              );
            }),
            (b.handleFragLoadAborted = function (t, e) {
              this.transmuxer &&
                "initSegment" !== t.sn &&
                t.stats.aborted &&
                (this.warn(
                  "Fragment " +
                    t.sn +
                    (e ? " part" + e.index : "") +
                    " of level " +
                    t.level +
                    " was aborted"
                ),
                this.resetFragmentLoading(t));
            }),
            (b.resetFragmentLoading = function (t) {
              (this.fragCurrent && this.fragContextChanged(t)) ||
                (this.state = T.IDLE);
            }),
            (b.onFragmentOrKeyLoadError = function (t, e) {
              if (!e.fatal) {
                var r = e.frag;
                if (r && r.type === t) {
                  this.fragCurrent;
                  var i = this.config;
                  if (this.fragLoadError + 1 <= i.fragLoadingMaxRetry) {
                    if (this.resetLiveStartWhenNotLoaded(r.level)) return;
                    var n = Math.min(
                      Math.pow(2, this.fragLoadError) * i.fragLoadingRetryDelay,
                      i.fragLoadingMaxRetryTimeout
                    );
                    this.warn(
                      "Fragment " +
                        r.sn +
                        " of " +
                        t +
                        " " +
                        r.level +
                        " failed to load, retrying in " +
                        n +
                        "ms"
                    ),
                      (this.retryDate = self.performance.now() + n),
                      this.fragLoadError++,
                      (this.state = T.FRAG_LOADING_WAITING_RETRY);
                  } else
                    e.levelRetry
                      ? (t === y.PlaylistLevelType.AUDIO &&
                          (this.fragCurrent = null),
                        (this.fragLoadError = 0),
                        (this.state = T.IDLE))
                      : (o.logger.error(
                          e.details +
                            " reaches max retry, redispatch as fatal ..."
                        ),
                        (e.fatal = !0),
                        this.hls.stopLoad(),
                        (this.state = T.ERROR));
                }
              }
            }),
            (b.afterBufferFlushed = function (t, e, r) {
              if (t) {
                var i = s.BufferHelper.getBuffered(t);
                this.fragmentTracker.detectEvictedFragments(e, i, r),
                  this.state === T.ENDED && this.resetLoadingState();
              }
            }),
            (b.resetLoadingState = function () {
              (this.fragCurrent = null),
                (this.fragPrevious = null),
                (this.state = T.IDLE);
            }),
            (b.resetLiveStartWhenNotLoaded = function (t) {
              if (!this.loadedmetadata) {
                this.startFragRequested = !1;
                var e = this.levels ? this.levels[t].details : null;
                if (null != e && e.live)
                  return (
                    (this.startPosition = -1),
                    this.setStartPosition(e, 0),
                    this.resetLoadingState(),
                    !0
                  );
                this.nextLoadPosition = this.startPosition;
              }
              return !1;
            }),
            (b.updateLevelTiming = function (t, e, r, i) {
              var n = this,
                a = r.details;
              Object.keys(t.elementaryStreams).reduce(function (e, s) {
                var o = t.elementaryStreams[s];
                if (o) {
                  var u = o.endPTS - o.startPTS;
                  if (u <= 0)
                    return (
                      n.warn(
                        "Could not parse fragment " +
                          t.sn +
                          " " +
                          s +
                          " duration reliably (" +
                          u +
                          ") resetting transmuxer to fallback to playlist timing"
                      ),
                      n.resetTransmuxer(),
                      e || !1
                    );
                  var d = i
                    ? 0
                    : Object(g.updateFragPTSDTS)(
                        a,
                        t,
                        o.startPTS,
                        o.endPTS,
                        o.startDTS,
                        o.endDTS
                      );
                  return (
                    n.hls.trigger(l.Events.LEVEL_PTS_UPDATED, {
                      details: a,
                      level: r,
                      drift: d,
                      type: s,
                      frag: t,
                      start: o.startPTS,
                      end: o.endPTS,
                    }),
                    !0
                  );
                }
                return e;
              }, !1)
                ? ((this.state = T.PARSED),
                  this.hls.trigger(l.Events.FRAG_PARSED, { frag: t, part: e }))
                : this.resetLoadingState();
            }),
            (b.resetTransmuxer = function () {
              this.transmuxer &&
                (this.transmuxer.destroy(), (this.transmuxer = null));
            }),
            (S = [
              {
                key: "state",
                get: function () {
                  return this._state;
                },
                set: function (t) {
                  var e = this._state;
                  e !== t && ((this._state = t), this.log(e + "->" + t));
                },
              },
            ]) &&
              (function (t, e) {
                for (var r = 0; r < e.length; r++) {
                  var i = e[r];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i);
                }
              })(n.prototype, S),
            n
          );
        })(n.default);
    },
    "./src/controller/buffer-controller.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "default", function () {
          return f;
        });
      var i = r("./src/polyfills/number.ts"),
        n = r("./src/events.ts"),
        a = r("./src/utils/logger.ts"),
        s = r("./src/errors.ts"),
        o = r("./src/utils/buffer-helper.ts"),
        l = r("./src/utils/mediasource-helper.ts"),
        u = r("./src/loader/fragment.ts"),
        d = r("./src/controller/buffer-operation-queue.ts"),
        c = Object(l.getMediaSource)(),
        h = /([ha]vc.)(?:\.[^.,]+)+/,
        f = (function () {
          function t(t) {
            var e = this;
            (this.details = null),
              (this._objectUrl = null),
              (this.operationQueue = void 0),
              (this.listeners = void 0),
              (this.hls = void 0),
              (this.bufferCodecEventsExpected = 0),
              (this._bufferCodecEventsTotal = 0),
              (this.media = null),
              (this.mediaSource = null),
              (this.appendError = 0),
              (this.tracks = {}),
              (this.pendingTracks = {}),
              (this.sourceBuffer = void 0),
              (this._onMediaSourceOpen = function () {
                var t = e.hls,
                  r = e.media,
                  i = e.mediaSource;
                a.logger.log("[buffer-controller]: Media source opened"),
                  r &&
                    (e.updateMediaElementDuration(),
                    t.trigger(n.Events.MEDIA_ATTACHED, { media: r })),
                  i &&
                    i.removeEventListener("sourceopen", e._onMediaSourceOpen),
                  e.checkPendingTracks();
              }),
              (this._onMediaSourceClose = function () {
                a.logger.log("[buffer-controller]: Media source closed");
              }),
              (this._onMediaSourceEnded = function () {
                a.logger.log("[buffer-controller]: Media source ended");
              }),
              (this.hls = t),
              this._initSourceBuffer(),
              this.registerListeners();
          }
          var e = t.prototype;
          return (
            (e.hasSourceTypes = function () {
              return (
                this.getSourceBufferTypes().length > 0 ||
                Object.keys(this.pendingTracks).length > 0
              );
            }),
            (e.destroy = function () {
              this.unregisterListeners(), (this.details = null);
            }),
            (e.registerListeners = function () {
              var t = this.hls;
              t.on(n.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
                t.on(n.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                t.on(n.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                t.on(n.Events.BUFFER_RESET, this.onBufferReset, this),
                t.on(n.Events.BUFFER_APPENDING, this.onBufferAppending, this),
                t.on(n.Events.BUFFER_CODECS, this.onBufferCodecs, this),
                t.on(n.Events.BUFFER_EOS, this.onBufferEos, this),
                t.on(n.Events.BUFFER_FLUSHING, this.onBufferFlushing, this),
                t.on(n.Events.LEVEL_UPDATED, this.onLevelUpdated, this),
                t.on(n.Events.FRAG_PARSED, this.onFragParsed, this),
                t.on(n.Events.FRAG_CHANGED, this.onFragChanged, this);
            }),
            (e.unregisterListeners = function () {
              var t = this.hls;
              t.off(n.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
                t.off(n.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                t.off(n.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                t.off(n.Events.BUFFER_RESET, this.onBufferReset, this),
                t.off(n.Events.BUFFER_APPENDING, this.onBufferAppending, this),
                t.off(n.Events.BUFFER_CODECS, this.onBufferCodecs, this),
                t.off(n.Events.BUFFER_EOS, this.onBufferEos, this),
                t.off(n.Events.BUFFER_FLUSHING, this.onBufferFlushing, this),
                t.off(n.Events.LEVEL_UPDATED, this.onLevelUpdated, this),
                t.off(n.Events.FRAG_PARSED, this.onFragParsed, this),
                t.off(n.Events.FRAG_CHANGED, this.onFragChanged, this);
            }),
            (e._initSourceBuffer = function () {
              (this.sourceBuffer = {}),
                (this.operationQueue = new d.default(this.sourceBuffer)),
                (this.listeners = { audio: [], video: [], audiovideo: [] });
            }),
            (e.onManifestParsed = function (t, e) {
              var r = 2;
              ((e.audio && !e.video) || !e.altAudio) && (r = 1),
                (this.bufferCodecEventsExpected = this._bufferCodecEventsTotal =
                  r),
                (this.details = null),
                a.logger.log(
                  this.bufferCodecEventsExpected +
                    " bufferCodec event(s) expected"
                );
            }),
            (e.onMediaAttaching = function (t, e) {
              var r = (this.media = e.media);
              if (r && c) {
                var i = (this.mediaSource = new c());
                i.addEventListener("sourceopen", this._onMediaSourceOpen),
                  i.addEventListener("sourceended", this._onMediaSourceEnded),
                  i.addEventListener("sourceclose", this._onMediaSourceClose),
                  (r.src = self.URL.createObjectURL(i)),
                  (this._objectUrl = r.src);
              }
            }),
            (e.onMediaDetaching = function () {
              var t = this.media,
                e = this.mediaSource,
                r = this._objectUrl;
              if (e) {
                if (
                  (a.logger.log("[buffer-controller]: media source detaching"),
                  "open" === e.readyState)
                )
                  try {
                    e.endOfStream();
                  } catch (i) {
                    a.logger.warn(
                      "[buffer-controller]: onMediaDetaching: " +
                        i.message +
                        " while calling endOfStream"
                    );
                  }
                this.onBufferReset(),
                  e.removeEventListener("sourceopen", this._onMediaSourceOpen),
                  e.removeEventListener(
                    "sourceended",
                    this._onMediaSourceEnded
                  ),
                  e.removeEventListener(
                    "sourceclose",
                    this._onMediaSourceClose
                  ),
                  t &&
                    (r && self.URL.revokeObjectURL(r),
                    t.src === r
                      ? (t.removeAttribute("src"), t.load())
                      : a.logger.warn(
                          "[buffer-controller]: media.src was changed by a third party - skip cleanup"
                        )),
                  (this.mediaSource = null),
                  (this.media = null),
                  (this._objectUrl = null),
                  (this.bufferCodecEventsExpected =
                    this._bufferCodecEventsTotal),
                  (this.pendingTracks = {}),
                  (this.tracks = {});
              }
              this.hls.trigger(n.Events.MEDIA_DETACHED, void 0);
            }),
            (e.onBufferReset = function () {
              var t = this;
              this.getSourceBufferTypes().forEach(function (e) {
                var r = t.sourceBuffer[e];
                try {
                  r &&
                    (t.removeBufferListeners(e),
                    t.mediaSource && t.mediaSource.removeSourceBuffer(r),
                    (t.sourceBuffer[e] = void 0));
                } catch (i) {
                  a.logger.warn(
                    "[buffer-controller]: Failed to reset the " + e + " buffer",
                    i
                  );
                }
              }),
                this._initSourceBuffer();
            }),
            (e.onBufferCodecs = function (t, e) {
              var r = this,
                i = this.getSourceBufferTypes().length;
              Object.keys(e).forEach(function (t) {
                if (i) {
                  var n = r.tracks[t];
                  if (n && "function" == typeof n.buffer.changeType) {
                    var a = e[t],
                      s = a.codec,
                      o = a.levelCodec,
                      l = a.container;
                    if (
                      (n.levelCodec || n.codec).replace(h, "$1") !==
                      (o || s).replace(h, "$1")
                    ) {
                      var u = l + ";codecs=" + (o || s);
                      r.appendChangeType(t, u);
                    }
                  }
                } else r.pendingTracks[t] = e[t];
              }),
                i ||
                  ((this.bufferCodecEventsExpected = Math.max(
                    this.bufferCodecEventsExpected - 1,
                    0
                  )),
                  this.mediaSource &&
                    "open" === this.mediaSource.readyState &&
                    this.checkPendingTracks());
            }),
            (e.appendChangeType = function (t, e) {
              var r = this,
                i = this.operationQueue,
                n = {
                  execute: function () {
                    var n = r.sourceBuffer[t];
                    n &&
                      (a.logger.log(
                        "[buffer-controller]: changing " +
                          t +
                          " sourceBuffer type to " +
                          e
                      ),
                      n.changeType(e)),
                      i.shiftAndExecuteNext(t);
                  },
                  onStart: function () {},
                  onComplete: function () {},
                  onError: function (e) {
                    a.logger.warn(
                      "[buffer-controller]: Failed to change " +
                        t +
                        " SourceBuffer type",
                      e
                    );
                  },
                };
              i.append(n, t);
            }),
            (e.onBufferAppending = function (t, e) {
              var r = this,
                i = this.hls,
                l = this.operationQueue,
                u = this.tracks,
                d = e.data,
                c = e.type,
                h = e.frag,
                f = e.part,
                g = e.chunkMeta,
                v = g.buffering[c],
                p = self.performance.now();
              v.start = p;
              var m = h.stats.buffering,
                y = f ? f.stats.buffering : null;
              0 === m.start && (m.start = p),
                y && 0 === y.start && (y.start = p);
              var E = u.audio,
                T =
                  "audio" === c &&
                  1 === g.id &&
                  "audio/mpeg" === (null == E ? void 0 : E.container),
                S = {
                  execute: function () {
                    if (((v.executeStart = self.performance.now()), T)) {
                      var t = r.sourceBuffer[c];
                      if (t) {
                        var e = h.start - t.timestampOffset;
                        Math.abs(e) >= 0.1 &&
                          (a.logger.log(
                            "[buffer-controller]: Updating audio SourceBuffer timestampOffset to " +
                              h.start +
                              " (delta: " +
                              e +
                              ") sn: " +
                              h.sn +
                              ")"
                          ),
                          (t.timestampOffset = h.start));
                      }
                    }
                    r.appendExecutor(d, c);
                  },
                  onStart: function () {},
                  onComplete: function () {
                    var t = self.performance.now();
                    (v.executeEnd = v.end = t),
                      0 === m.first && (m.first = t),
                      y && 0 === y.first && (y.first = t);
                    var e = r.sourceBuffer,
                      i = {};
                    for (var a in e) i[a] = o.BufferHelper.getBuffered(e[a]);
                    (r.appendError = 0),
                      r.hls.trigger(n.Events.BUFFER_APPENDED, {
                        type: c,
                        frag: h,
                        part: f,
                        chunkMeta: g,
                        parent: h.type,
                        timeRanges: i,
                      });
                  },
                  onError: function (t) {
                    a.logger.error(
                      "[buffer-controller]: Error encountered while trying to append to the " +
                        c +
                        " SourceBuffer",
                      t
                    );
                    var e = {
                      type: s.ErrorTypes.MEDIA_ERROR,
                      parent: h.type,
                      details: s.ErrorDetails.BUFFER_APPEND_ERROR,
                      err: t,
                      fatal: !1,
                    };
                    t.code === DOMException.QUOTA_EXCEEDED_ERR
                      ? (e.details = s.ErrorDetails.BUFFER_FULL_ERROR)
                      : (r.appendError++,
                        (e.details = s.ErrorDetails.BUFFER_APPEND_ERROR),
                        r.appendError > i.config.appendErrorMaxRetry &&
                          (a.logger.error(
                            "[buffer-controller]: Failed " +
                              i.config.appendErrorMaxRetry +
                              " times to append segment in sourceBuffer"
                          ),
                          (e.fatal = !0))),
                      i.trigger(n.Events.ERROR, e);
                  },
                };
              l.append(S, c);
            }),
            (e.onBufferFlushing = function (t, e) {
              var r = this,
                i = this.operationQueue,
                s = function (t) {
                  return {
                    execute: r.removeExecutor.bind(
                      r,
                      t,
                      e.startOffset,
                      e.endOffset
                    ),
                    onStart: function () {},
                    onComplete: function () {
                      r.hls.trigger(n.Events.BUFFER_FLUSHED, { type: t });
                    },
                    onError: function (e) {
                      a.logger.warn(
                        "[buffer-controller]: Failed to remove from " +
                          t +
                          " SourceBuffer",
                        e
                      );
                    },
                  };
                };
              e.type
                ? i.append(s(e.type), e.type)
                : this.getSourceBufferTypes().forEach(function (t) {
                    i.append(s(t), t);
                  });
            }),
            (e.onFragParsed = function (t, e) {
              var r = this,
                i = e.frag,
                s = e.part,
                o = [],
                l = s ? s.elementaryStreams : i.elementaryStreams;
              l[u.ElementaryStreamTypes.AUDIOVIDEO]
                ? o.push("audiovideo")
                : (l[u.ElementaryStreamTypes.AUDIO] && o.push("audio"),
                  l[u.ElementaryStreamTypes.VIDEO] && o.push("video")),
                0 === o.length &&
                  a.logger.warn(
                    "Fragments must have at least one ElementaryStreamType set. type: " +
                      i.type +
                      " level: " +
                      i.level +
                      " sn: " +
                      i.sn
                  ),
                this.blockBuffers(function () {
                  var t = self.performance.now();
                  (i.stats.buffering.end = t), s && (s.stats.buffering.end = t);
                  var e = s ? s.stats : i.stats;
                  r.hls.trigger(n.Events.FRAG_BUFFERED, {
                    frag: i,
                    part: s,
                    stats: e,
                    id: i.type,
                  });
                }, o);
            }),
            (e.onFragChanged = function (t, e) {
              this.flushBackBuffer();
            }),
            (e.onBufferEos = function (t, e) {
              var r = this;
              this.getSourceBufferTypes().reduce(function (t, i) {
                var n = r.sourceBuffer[i];
                return (
                  (e.type && e.type !== i) ||
                    (n &&
                      !n.ended &&
                      ((n.ended = !0),
                      a.logger.log(
                        "[buffer-controller]: " + i + " sourceBuffer now EOS"
                      ))),
                  t && !(n && !n.ended)
                );
              }, !0) &&
                this.blockBuffers(function () {
                  var t = r.mediaSource;
                  t && "open" === t.readyState && t.endOfStream();
                });
            }),
            (e.onLevelUpdated = function (t, e) {
              var r = e.details;
              r.fragments.length &&
                ((this.details = r),
                this.getSourceBufferTypes().length
                  ? this.blockBuffers(
                      this.updateMediaElementDuration.bind(this)
                    )
                  : this.updateMediaElementDuration());
            }),
            (e.flushBackBuffer = function () {
              var t = this.hls,
                e = this.details,
                r = this.media,
                a = this.sourceBuffer;
              if (r && null !== e) {
                var s = this.getSourceBufferTypes();
                if (s.length) {
                  var l =
                    e.live && null !== t.config.liveBackBufferLength
                      ? t.config.liveBackBufferLength
                      : t.config.backBufferLength;
                  if (Object(i.isFiniteNumber)(l) && !(l < 0)) {
                    var u = r.currentTime,
                      d = e.levelTargetDuration,
                      c = Math.max(l, d),
                      h = Math.floor(u / d) * d - c;
                    s.forEach(function (r) {
                      var i = a[r];
                      if (i) {
                        var s = o.BufferHelper.getBuffered(i);
                        s.length > 0 &&
                          h > s.start(0) &&
                          (t.trigger(n.Events.BACK_BUFFER_REACHED, {
                            bufferEnd: h,
                          }),
                          e.live &&
                            t.trigger(n.Events.LIVE_BACK_BUFFER_REACHED, {
                              bufferEnd: h,
                            }),
                          t.trigger(n.Events.BUFFER_FLUSHING, {
                            startOffset: 0,
                            endOffset: h,
                            type: r,
                          }));
                      }
                    });
                  }
                }
              }
            }),
            (e.updateMediaElementDuration = function () {
              if (
                this.details &&
                this.media &&
                this.mediaSource &&
                "open" === this.mediaSource.readyState
              ) {
                var t = this.details,
                  e = this.hls,
                  r = this.media,
                  n = this.mediaSource,
                  s = t.fragments[0].start + t.totalduration,
                  o = r.duration,
                  l = Object(i.isFiniteNumber)(n.duration) ? n.duration : 0;
                t.live && e.config.liveDurationInfinity
                  ? (a.logger.log(
                      "[buffer-controller]: Media Source duration is set to Infinity"
                    ),
                    (n.duration = 1 / 0),
                    this.updateSeekableRange(t))
                  : ((s > l && s > o) || !Object(i.isFiniteNumber)(o)) &&
                    (a.logger.log(
                      "[buffer-controller]: Updating Media Source duration to " +
                        s.toFixed(3)
                    ),
                    (n.duration = s));
              }
            }),
            (e.updateSeekableRange = function (t) {
              var e = this.mediaSource,
                r = t.fragments;
              if (r.length && t.live && null != e && e.setLiveSeekableRange) {
                var i = Math.max(0, r[0].start),
                  n = Math.max(i, i + t.totalduration);
                e.setLiveSeekableRange(i, n);
              }
            }),
            (e.checkPendingTracks = function () {
              var t = this.bufferCodecEventsExpected,
                e = this.operationQueue,
                r = this.pendingTracks,
                i = Object.keys(r).length;
              if ((i && !t) || 2 === i) {
                this.createSourceBuffers(r), (this.pendingTracks = {});
                var a = this.getSourceBufferTypes();
                if (0 === a.length)
                  return void this.hls.trigger(n.Events.ERROR, {
                    type: s.ErrorTypes.MEDIA_ERROR,
                    details: s.ErrorDetails.BUFFER_INCOMPATIBLE_CODECS_ERROR,
                    fatal: !0,
                    reason: "could not create source buffer for media codec(s)",
                  });
                a.forEach(function (t) {
                  e.executeNext(t);
                });
              }
            }),
            (e.createSourceBuffers = function (t) {
              var e = this.sourceBuffer,
                r = this.mediaSource;
              if (!r)
                throw Error(
                  "createSourceBuffers called when mediaSource was null"
                );
              var i = 0;
              for (var o in t)
                if (!e[o]) {
                  var l = t[o];
                  if (!l)
                    throw Error(
                      "source buffer exists for track " +
                        o +
                        ", however track does not"
                    );
                  var u = l.levelCodec || l.codec,
                    d = l.container + ";codecs=" + u;
                  a.logger.log(
                    "[buffer-controller]: creating sourceBuffer(" + d + ")"
                  );
                  try {
                    var c = (e[o] = r.addSourceBuffer(d)),
                      h = o;
                    this.addBufferListener(
                      h,
                      "updatestart",
                      this._onSBUpdateStart
                    ),
                      this.addBufferListener(
                        h,
                        "updateend",
                        this._onSBUpdateEnd
                      ),
                      this.addBufferListener(h, "error", this._onSBUpdateError),
                      (this.tracks[o] = {
                        buffer: c,
                        codec: u,
                        container: l.container,
                        levelCodec: l.levelCodec,
                        id: l.id,
                      }),
                      i++;
                  } catch (f) {
                    a.logger.error(
                      "[buffer-controller]: error while trying to add sourceBuffer: " +
                        f.message
                    ),
                      this.hls.trigger(n.Events.ERROR, {
                        type: s.ErrorTypes.MEDIA_ERROR,
                        details: s.ErrorDetails.BUFFER_ADD_CODEC_ERROR,
                        fatal: !1,
                        error: f,
                        mimeType: d,
                      });
                  }
                }
              i &&
                this.hls.trigger(n.Events.BUFFER_CREATED, {
                  tracks: this.tracks,
                });
            }),
            (e._onSBUpdateStart = function (t) {
              this.operationQueue.current(t).onStart();
            }),
            (e._onSBUpdateEnd = function (t) {
              var e = this.operationQueue;
              e.current(t).onComplete(), e.shiftAndExecuteNext(t);
            }),
            (e._onSBUpdateError = function (t, e) {
              a.logger.error(
                "[buffer-controller]: " + t + " SourceBuffer error",
                e
              ),
                this.hls.trigger(n.Events.ERROR, {
                  type: s.ErrorTypes.MEDIA_ERROR,
                  details: s.ErrorDetails.BUFFER_APPENDING_ERROR,
                  fatal: !1,
                });
              var r = this.operationQueue.current(t);
              r && r.onError(e);
            }),
            (e.removeExecutor = function (t, e, r) {
              var n = this.media,
                s = this.mediaSource,
                o = this.operationQueue,
                l = this.sourceBuffer[t];
              if (!n || !s || !l)
                return (
                  a.logger.warn(
                    "[buffer-controller]: Attempting to remove from the " +
                      t +
                      " SourceBuffer, but it does not exist"
                  ),
                  void o.shiftAndExecuteNext(t)
                );
              var u = Object(i.isFiniteNumber)(n.duration) ? n.duration : 1 / 0,
                d = Object(i.isFiniteNumber)(s.duration) ? s.duration : 1 / 0,
                c = Math.max(0, e),
                h = Math.min(r, u, d);
              h > c
                ? (a.logger.log(
                    "[buffer-controller]: Removing [" +
                      c +
                      "," +
                      h +
                      "] from the " +
                      t +
                      " SourceBuffer"
                  ),
                  l.remove(c, h))
                : o.shiftAndExecuteNext(t);
            }),
            (e.appendExecutor = function (t, e) {
              var r = this.operationQueue,
                i = this.sourceBuffer[e];
              if (!i)
                return (
                  a.logger.warn(
                    "[buffer-controller]: Attempting to append to the " +
                      e +
                      " SourceBuffer, but it does not exist"
                  ),
                  void r.shiftAndExecuteNext(e)
                );
              (i.ended = !1), i.appendBuffer(t);
            }),
            (e.blockBuffers = function (t, e) {
              var r = this;
              if (
                (void 0 === e && (e = this.getSourceBufferTypes()), !e.length)
              )
                return (
                  a.logger.log(
                    "[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"
                  ),
                  void Promise.resolve(t)
                );
              var i = this.operationQueue,
                n = e.map(function (t) {
                  return i.appendBlocker(t);
                });
              Promise.all(n).then(function () {
                t(),
                  e.forEach(function (t) {
                    var e = r.sourceBuffer[t];
                    (e && e.updating) || i.shiftAndExecuteNext(t);
                  });
              });
            }),
            (e.getSourceBufferTypes = function () {
              return Object.keys(this.sourceBuffer);
            }),
            (e.addBufferListener = function (t, e, r) {
              var i = this.sourceBuffer[t];
              if (i) {
                var n = r.bind(this, t);
                this.listeners[t].push({ event: e, listener: n }),
                  i.addEventListener(e, n);
              }
            }),
            (e.removeBufferListeners = function (t) {
              var e = this.sourceBuffer[t];
              e &&
                this.listeners[t].forEach(function (t) {
                  e.removeEventListener(t.event, t.listener);
                });
            }),
            t
          );
        })();
    },
    "./src/controller/buffer-operation-queue.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "default", function () {
          return n;
        });
      var i = r("./src/utils/logger.ts"),
        n = (function () {
          function t(t) {
            (this.buffers = void 0),
              (this.queues = { video: [], audio: [], audiovideo: [] }),
              (this.buffers = t);
          }
          var e = t.prototype;
          return (
            (e.append = function (t, e) {
              var r = this.queues[e];
              r.push(t),
                1 === r.length && this.buffers[e] && this.executeNext(e);
            }),
            (e.insertAbort = function (t, e) {
              this.queues[e].unshift(t), this.executeNext(e);
            }),
            (e.appendBlocker = function (t) {
              var e,
                r = new Promise(function (t) {
                  e = t;
                }),
                i = {
                  execute: e,
                  onStart: function () {},
                  onComplete: function () {},
                  onError: function () {},
                };
              return this.append(i, t), r;
            }),
            (e.executeNext = function (t) {
              var e = this.buffers,
                r = this.queues,
                n = e[t],
                a = r[t];
              if (a.length) {
                var s = a[0];
                try {
                  s.execute();
                } catch (o) {
                  i.logger.warn(
                    "[buffer-operation-queue]: Unhandled exception executing the current operation"
                  ),
                    s.onError(o),
                    (n && n.updating) || (a.shift(), this.executeNext(t));
                }
              }
            }),
            (e.shiftAndExecuteNext = function (t) {
              this.queues[t].shift(), this.executeNext(t);
            }),
            (e.current = function (t) {
              return this.queues[t][0];
            }),
            t
          );
        })();
    },
    "./src/controller/cap-level-controller.ts": function (t, e, r) {
      r.r(e);
      var i = r("./src/events.ts");
      function n(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      var a = (function () {
        function t(t) {
          (this.autoLevelCapping = void 0),
            (this.firstLevel = void 0),
            (this.media = void 0),
            (this.restrictedLevels = void 0),
            (this.timer = void 0),
            (this.hls = void 0),
            (this.streamController = void 0),
            (this.clientRect = void 0),
            (this.hls = t),
            (this.autoLevelCapping = Number.POSITIVE_INFINITY),
            (this.firstLevel = -1),
            (this.media = null),
            (this.restrictedLevels = []),
            (this.timer = void 0),
            (this.clientRect = null),
            this.registerListeners();
        }
        var e,
          r,
          a,
          s = t.prototype;
        return (
          (s.setStreamController = function (t) {
            this.streamController = t;
          }),
          (s.destroy = function () {
            this.unregisterListener(),
              this.hls.config.capLevelToPlayerSize && this.stopCapping(),
              (this.media = null),
              (this.clientRect = null),
              (this.hls = this.streamController = null);
          }),
          (s.registerListeners = function () {
            var t = this.hls;
            t.on(
              i.Events.FPS_DROP_LEVEL_CAPPING,
              this.onFpsDropLevelCapping,
              this
            ),
              t.on(i.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
              t.on(i.Events.MANIFEST_PARSED, this.onManifestParsed, this),
              t.on(i.Events.BUFFER_CODECS, this.onBufferCodecs, this),
              t.on(i.Events.MEDIA_DETACHING, this.onMediaDetaching, this);
          }),
          (s.unregisterListener = function () {
            var t = this.hls;
            t.off(
              i.Events.FPS_DROP_LEVEL_CAPPING,
              this.onFpsDropLevelCapping,
              this
            ),
              t.off(i.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
              t.off(i.Events.MANIFEST_PARSED, this.onManifestParsed, this),
              t.off(i.Events.BUFFER_CODECS, this.onBufferCodecs, this),
              t.off(i.Events.MEDIA_DETACHING, this.onMediaDetaching, this);
          }),
          (s.onFpsDropLevelCapping = function (e, r) {
            t.isLevelAllowed(r.droppedLevel, this.restrictedLevels) &&
              this.restrictedLevels.push(r.droppedLevel);
          }),
          (s.onMediaAttaching = function (t, e) {
            this.media = e.media instanceof HTMLVideoElement ? e.media : null;
          }),
          (s.onManifestParsed = function (t, e) {
            var r = this.hls;
            (this.restrictedLevels = []),
              (this.firstLevel = e.firstLevel),
              r.config.capLevelToPlayerSize && e.video && this.startCapping();
          }),
          (s.onBufferCodecs = function (t, e) {
            this.hls.config.capLevelToPlayerSize &&
              e.video &&
              this.startCapping();
          }),
          (s.onMediaDetaching = function () {
            this.stopCapping();
          }),
          (s.detectPlayerSize = function () {
            if (this.media && this.mediaHeight > 0 && this.mediaWidth > 0) {
              var t = this.hls.levels;
              if (t.length) {
                var e = this.hls;
                (e.autoLevelCapping = this.getMaxLevel(t.length - 1)),
                  e.autoLevelCapping > this.autoLevelCapping &&
                    this.streamController &&
                    this.streamController.nextLevelSwitch(),
                  (this.autoLevelCapping = e.autoLevelCapping);
              }
            }
          }),
          (s.getMaxLevel = function (e) {
            var r = this,
              i = this.hls.levels;
            if (!i.length) return -1;
            var n = i.filter(function (i, n) {
              return t.isLevelAllowed(n, r.restrictedLevels) && n <= e;
            });
            return (
              (this.clientRect = null),
              t.getMaxLevelByMediaSize(n, this.mediaWidth, this.mediaHeight)
            );
          }),
          (s.startCapping = function () {
            this.timer ||
              ((this.autoLevelCapping = Number.POSITIVE_INFINITY),
              (this.hls.firstLevel = this.getMaxLevel(this.firstLevel)),
              self.clearInterval(this.timer),
              (this.timer = self.setInterval(
                this.detectPlayerSize.bind(this),
                1e3
              )),
              this.detectPlayerSize());
          }),
          (s.stopCapping = function () {
            (this.restrictedLevels = []),
              (this.firstLevel = -1),
              (this.autoLevelCapping = Number.POSITIVE_INFINITY),
              this.timer &&
                (self.clearInterval(this.timer), (this.timer = void 0));
          }),
          (s.getDimensions = function () {
            if (this.clientRect) return this.clientRect;
            var t = this.media,
              e = { width: 0, height: 0 };
            if (t) {
              var r = t.getBoundingClientRect();
              (e.width = r.width),
                (e.height = r.height),
                e.width ||
                  e.height ||
                  ((e.width = r.right - r.left || t.width || 0),
                  (e.height = r.bottom - r.top || t.height || 0));
            }
            return (this.clientRect = e), e;
          }),
          (t.isLevelAllowed = function (t, e) {
            return void 0 === e && (e = []), -1 === e.indexOf(t);
          }),
          (t.getMaxLevelByMediaSize = function (t, e, r) {
            if (!t || !t.length) return -1;
            for (var i, n, a = t.length - 1, s = 0; s < t.length; s += 1) {
              var o = t[s];
              if (
                (o.width >= e || o.height >= r) &&
                ((i = o),
                !(n = t[s + 1]) || i.width !== n.width || i.height !== n.height)
              ) {
                a = s;
                break;
              }
            }
            return a;
          }),
          (e = t),
          (a = [
            {
              key: "contentScaleFactor",
              get: function () {
                var t = 1;
                try {
                  t = self.devicePixelRatio;
                } catch (e) {}
                return t;
              },
            },
          ]),
          (r = [
            {
              key: "mediaWidth",
              get: function () {
                return this.getDimensions().width * t.contentScaleFactor;
              },
            },
            {
              key: "mediaHeight",
              get: function () {
                return this.getDimensions().height * t.contentScaleFactor;
              },
            },
          ]) && n(e.prototype, r),
          a && n(e, a),
          t
        );
      })();
      e.default = a;
    },
    "./src/controller/eme-controller.ts": function (t, e, r) {
      r.r(e);
      var i = r("./src/events.ts"),
        n = r("./src/errors.ts"),
        a = r("./src/utils/logger.ts"),
        s = r("./src/utils/mediakeys-helper.ts");
      var o = (function () {
        function t(t) {
          (this.hls = void 0),
            (this._widevineLicenseUrl = void 0),
            (this._licenseXhrSetup = void 0),
            (this._licenseResponseCallback = void 0),
            (this._emeEnabled = void 0),
            (this._requestMediaKeySystemAccess = void 0),
            (this._drmSystemOptions = void 0),
            (this._config = void 0),
            (this._mediaKeysList = []),
            (this._media = null),
            (this._hasSetMediaKeys = !1),
            (this._requestLicenseFailureCount = 0),
            (this.mediaKeysPromise = null),
            (this._onMediaEncrypted = this.onMediaEncrypted.bind(this)),
            (this.hls = t),
            (this._config = t.config),
            (this._widevineLicenseUrl = this._config.widevineLicenseUrl),
            (this._licenseXhrSetup = this._config.licenseXhrSetup),
            (this._licenseResponseCallback =
              this._config.licenseResponseCallback),
            (this._emeEnabled = this._config.emeEnabled),
            (this._requestMediaKeySystemAccess =
              this._config.requestMediaKeySystemAccessFunc),
            (this._drmSystemOptions = this._config.drmSystemOptions),
            this._registerListeners();
        }
        var e,
          r = t.prototype;
        return (
          (r.destroy = function () {
            this._unregisterListeners(),
              (this.hls = this._onMediaEncrypted = null),
              (this._requestMediaKeySystemAccess = null);
          }),
          (r._registerListeners = function () {
            this.hls.on(i.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
              this.hls.on(i.Events.MEDIA_DETACHED, this.onMediaDetached, this),
              this.hls.on(
                i.Events.MANIFEST_PARSED,
                this.onManifestParsed,
                this
              );
          }),
          (r._unregisterListeners = function () {
            this.hls.off(i.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
              this.hls.off(i.Events.MEDIA_DETACHED, this.onMediaDetached, this),
              this.hls.off(
                i.Events.MANIFEST_PARSED,
                this.onManifestParsed,
                this
              );
          }),
          (r.getLicenseServerUrl = function (t) {
            switch (t) {
              case s.KeySystems.WIDEVINE:
                if (!this._widevineLicenseUrl) break;
                return this._widevineLicenseUrl;
            }
            throw new Error(
              'no license server URL configured for key-system "' + t + '"'
            );
          }),
          (r._attemptKeySystemAccess = function (t, e, r) {
            var i = this,
              n = (function (t, e, r, i) {
                if (t === s.KeySystems.WIDEVINE)
                  return (
                    (n = r),
                    (a = i),
                    (o = { audioCapabilities: [], videoCapabilities: [] }),
                    e.forEach(function (t) {
                      o.audioCapabilities.push({
                        contentType: 'audio/mp4; codecs="' + t + '"',
                        robustness: a.audioRobustness || "",
                      });
                    }),
                    n.forEach(function (t) {
                      o.videoCapabilities.push({
                        contentType: 'video/mp4; codecs="' + t + '"',
                        robustness: a.videoRobustness || "",
                      });
                    }),
                    [o]
                  );
                throw new Error("Unknown key-system: " + t);
                var n, a, o;
              })(t, e, r, this._drmSystemOptions);
            a.logger.log("Requesting encrypted media key-system access");
            var o = this.requestMediaKeySystemAccess(t, n);
            (this.mediaKeysPromise = o.then(function (e) {
              return i._onMediaKeySystemAccessObtained(t, e);
            })),
              o.catch(function (e) {
                a.logger.error(
                  'Failed to obtain key-system "' + t + '" access:',
                  e
                );
              });
          }),
          (r._onMediaKeySystemAccessObtained = function (t, e) {
            var r = this;
            a.logger.log('Access for key-system "' + t + '" obtained');
            var i = {
              mediaKeysSessionInitialized: !1,
              mediaKeySystemAccess: e,
              mediaKeySystemDomain: t,
            };
            this._mediaKeysList.push(i);
            var n = Promise.resolve()
              .then(function () {
                return e.createMediaKeys();
              })
              .then(function (e) {
                return (
                  (i.mediaKeys = e),
                  a.logger.log('Media-keys created for key-system "' + t + '"'),
                  r._onMediaKeysCreated(),
                  e
                );
              });
            return (
              n.catch(function (t) {
                a.logger.error("Failed to create media-keys:", t);
              }),
              n
            );
          }),
          (r._onMediaKeysCreated = function () {
            var t = this;
            this._mediaKeysList.forEach(function (e) {
              e.mediaKeysSession ||
                ((e.mediaKeysSession = e.mediaKeys.createSession()),
                t._onNewMediaKeySession(e.mediaKeysSession));
            });
          }),
          (r._onNewMediaKeySession = function (t) {
            var e = this;
            a.logger.log("New key-system session " + t.sessionId),
              t.addEventListener(
                "message",
                function (r) {
                  e._onKeySessionMessage(t, r.message);
                },
                !1
              );
          }),
          (r._onKeySessionMessage = function (t, e) {
            a.logger.log("Got EME message event, creating license request"),
              this._requestLicense(e, function (e) {
                a.logger.log(
                  "Received license data (length: " +
                    (e ? e.byteLength : e) +
                    "), updating key-session"
                ),
                  t.update(e);
              });
          }),
          (r.onMediaEncrypted = function (t) {
            var e = this;
            if (
              (a.logger.log(
                'Media is encrypted using "' +
                  t.initDataType +
                  '" init data type'
              ),
              !this.mediaKeysPromise)
            )
              return (
                a.logger.error(
                  "Fatal: Media is encrypted but no CDM access or no keys have been requested"
                ),
                void this.hls.trigger(i.Events.ERROR, {
                  type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                  details: n.ErrorDetails.KEY_SYSTEM_NO_KEYS,
                  fatal: !0,
                })
              );
            var r = function (r) {
              e._media &&
                (e._attemptSetMediaKeys(r),
                e._generateRequestWithPreferredKeySession(
                  t.initDataType,
                  t.initData
                ));
            };
            this.mediaKeysPromise.then(r).catch(r);
          }),
          (r._attemptSetMediaKeys = function (t) {
            if (!this._media)
              throw new Error(
                "Attempted to set mediaKeys without first attaching a media element"
              );
            if (!this._hasSetMediaKeys) {
              var e = this._mediaKeysList[0];
              if (!e || !e.mediaKeys)
                return (
                  a.logger.error(
                    "Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"
                  ),
                  void this.hls.trigger(i.Events.ERROR, {
                    type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                    details: n.ErrorDetails.KEY_SYSTEM_NO_KEYS,
                    fatal: !0,
                  })
                );
              a.logger.log("Setting keys for encrypted media"),
                this._media.setMediaKeys(e.mediaKeys),
                (this._hasSetMediaKeys = !0);
            }
          }),
          (r._generateRequestWithPreferredKeySession = function (t, e) {
            var r = this,
              s = this._mediaKeysList[0];
            if (!s)
              return (
                a.logger.error(
                  "Fatal: Media is encrypted but not any key-system access has been obtained yet"
                ),
                void this.hls.trigger(i.Events.ERROR, {
                  type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                  details: n.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                  fatal: !0,
                })
              );
            if (s.mediaKeysSessionInitialized)
              a.logger.warn(
                "Key-Session already initialized but requested again"
              );
            else {
              var o = s.mediaKeysSession;
              if (!o)
                return (
                  a.logger.error(
                    "Fatal: Media is encrypted but no key-session existing"
                  ),
                  void this.hls.trigger(i.Events.ERROR, {
                    type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                    details: n.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                    fatal: !0,
                  })
                );
              if (!e)
                return (
                  a.logger.warn(
                    "Fatal: initData required for generating a key session is null"
                  ),
                  void this.hls.trigger(i.Events.ERROR, {
                    type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                    details: n.ErrorDetails.KEY_SYSTEM_NO_INIT_DATA,
                    fatal: !0,
                  })
                );
              a.logger.log(
                'Generating key-session request for "' + t + '" init data type'
              ),
                (s.mediaKeysSessionInitialized = !0),
                o
                  .generateRequest(t, e)
                  .then(function () {
                    a.logger.debug("Key-session generation succeeded");
                  })
                  .catch(function (t) {
                    a.logger.error("Error generating key-session request:", t),
                      r.hls.trigger(i.Events.ERROR, {
                        type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                        details: n.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                        fatal: !1,
                      });
                  });
            }
          }),
          (r._createLicenseXhr = function (t, e, r) {
            var i = new XMLHttpRequest();
            (i.responseType = "arraybuffer"),
              (i.onreadystatechange =
                this._onLicenseRequestReadyStageChange.bind(this, i, t, e, r));
            var n = this._licenseXhrSetup;
            if (n)
              try {
                n.call(this.hls, i, t), (n = void 0);
              } catch (s) {
                a.logger.error(s);
              }
            try {
              i.readyState || i.open("POST", t, !0),
                n && n.call(this.hls, i, t);
            } catch (s) {
              throw new Error("issue setting up KeySystem license XHR " + s);
            }
            return i;
          }),
          (r._onLicenseRequestReadyStageChange = function (t, e, r, s) {
            if (4 === t.readyState)
              if (200 === t.status) {
                (this._requestLicenseFailureCount = 0),
                  a.logger.log("License request succeeded");
                var o = t.response,
                  l = this._licenseResponseCallback;
                if (l)
                  try {
                    o = l.call(this.hls, t, e);
                  } catch (d) {
                    a.logger.error(d);
                  }
                s(o);
              } else {
                if (
                  (a.logger.error(
                    "License Request XHR failed (" +
                      e +
                      "). Status: " +
                      t.status +
                      " (" +
                      t.statusText +
                      ")"
                  ),
                  this._requestLicenseFailureCount++,
                  this._requestLicenseFailureCount > 3)
                )
                  return void this.hls.trigger(i.Events.ERROR, {
                    type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                    details: n.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                    fatal: !0,
                  });
                var u = 3 - this._requestLicenseFailureCount + 1;
                a.logger.warn(
                  "Retrying license request, " + u + " attempts left"
                ),
                  this._requestLicense(r, s);
              }
          }),
          (r._generateLicenseRequestChallenge = function (t, e) {
            if (t.mediaKeySystemDomain === s.KeySystems.WIDEVINE) return e;
            throw new Error(
              "unsupported key-system: " + t.mediaKeySystemDomain
            );
          }),
          (r._requestLicense = function (t, e) {
            a.logger.log("Requesting content license for key-system");
            var r = this._mediaKeysList[0];
            if (!r)
              return (
                a.logger.error(
                  "Fatal error: Media is encrypted but no key-system access has been obtained yet"
                ),
                void this.hls.trigger(i.Events.ERROR, {
                  type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                  details: n.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                  fatal: !0,
                })
              );
            try {
              var s = this.getLicenseServerUrl(r.mediaKeySystemDomain),
                o = this._createLicenseXhr(s, t, e);
              a.logger.log("Sending license request to URL: " + s);
              var l = this._generateLicenseRequestChallenge(r, t);
              o.send(l);
            } catch (u) {
              a.logger.error("Failure requesting DRM license: " + u),
                this.hls.trigger(i.Events.ERROR, {
                  type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                  details: n.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                  fatal: !0,
                });
            }
          }),
          (r.onMediaAttached = function (t, e) {
            if (this._emeEnabled) {
              var r = e.media;
              (this._media = r),
                r.addEventListener("encrypted", this._onMediaEncrypted);
            }
          }),
          (r.onMediaDetached = function () {
            var t = this._media,
              e = this._mediaKeysList;
            t &&
              (t.removeEventListener("encrypted", this._onMediaEncrypted),
              (this._media = null),
              (this._mediaKeysList = []),
              Promise.all(
                e.map(function (t) {
                  if (t.mediaKeysSession)
                    return t.mediaKeysSession.close().catch(function () {});
                })
              )
                .then(function () {
                  return t.setMediaKeys(null);
                })
                .catch(function () {}));
          }),
          (r.onManifestParsed = function (t, e) {
            if (this._emeEnabled) {
              var r = e.levels
                  .map(function (t) {
                    return t.audioCodec;
                  })
                  .filter(function (t) {
                    return !!t;
                  }),
                i = e.levels
                  .map(function (t) {
                    return t.videoCodec;
                  })
                  .filter(function (t) {
                    return !!t;
                  });
              this._attemptKeySystemAccess(s.KeySystems.WIDEVINE, r, i);
            }
          }),
          (e = [
            {
              key: "requestMediaKeySystemAccess",
              get: function () {
                if (!this._requestMediaKeySystemAccess)
                  throw new Error(
                    "No requestMediaKeySystemAccess function configured"
                  );
                return this._requestMediaKeySystemAccess;
              },
            },
          ]) &&
            (function (t, e) {
              for (var r = 0; r < e.length; r++) {
                var i = e[r];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(t, i.key, i);
              }
            })(t.prototype, e),
          t
        );
      })();
      e.default = o;
    },
    "./src/controller/fps-controller.ts": function (t, e, r) {
      r.r(e);
      var i = r("./src/events.ts"),
        n = r("./src/utils/logger.ts"),
        a = (function () {
          function t(t) {
            (this.hls = void 0),
              (this.isVideoPlaybackQualityAvailable = !1),
              (this.timer = void 0),
              (this.media = null),
              (this.lastTime = void 0),
              (this.lastDroppedFrames = 0),
              (this.lastDecodedFrames = 0),
              (this.streamController = void 0),
              (this.hls = t),
              this.registerListeners();
          }
          var e = t.prototype;
          return (
            (e.setStreamController = function (t) {
              this.streamController = t;
            }),
            (e.registerListeners = function () {
              this.hls.on(
                i.Events.MEDIA_ATTACHING,
                this.onMediaAttaching,
                this
              );
            }),
            (e.unregisterListeners = function () {
              this.hls.off(i.Events.MEDIA_ATTACHING, this.onMediaAttaching);
            }),
            (e.destroy = function () {
              this.timer && clearInterval(this.timer),
                this.unregisterListeners(),
                (this.isVideoPlaybackQualityAvailable = !1),
                (this.media = null);
            }),
            (e.onMediaAttaching = function (t, e) {
              var r = this.hls.config;
              if (r.capLevelOnFPSDrop) {
                var i =
                  e.media instanceof self.HTMLVideoElement ? e.media : null;
                (this.media = i),
                  i &&
                    "function" == typeof i.getVideoPlaybackQuality &&
                    (this.isVideoPlaybackQualityAvailable = !0),
                  self.clearInterval(this.timer),
                  (this.timer = self.setInterval(
                    this.checkFPSInterval.bind(this),
                    r.fpsDroppedMonitoringPeriod
                  ));
              }
            }),
            (e.checkFPS = function (t, e, r) {
              var a = performance.now();
              if (e) {
                if (this.lastTime) {
                  var s = a - this.lastTime,
                    o = r - this.lastDroppedFrames,
                    l = e - this.lastDecodedFrames,
                    u = (1e3 * o) / s,
                    d = this.hls;
                  if (
                    (d.trigger(i.Events.FPS_DROP, {
                      currentDropped: o,
                      currentDecoded: l,
                      totalDroppedFrames: r,
                    }),
                    u > 0 && o > d.config.fpsDroppedMonitoringThreshold * l)
                  ) {
                    var c = d.currentLevel;
                    n.logger.warn(
                      "drop FPS ratio greater than max allowed value for currentLevel: " +
                        c
                    ),
                      c > 0 &&
                        (-1 === d.autoLevelCapping ||
                          d.autoLevelCapping >= c) &&
                        ((c -= 1),
                        d.trigger(i.Events.FPS_DROP_LEVEL_CAPPING, {
                          level: c,
                          droppedLevel: d.currentLevel,
                        }),
                        (d.autoLevelCapping = c),
                        this.streamController.nextLevelSwitch());
                  }
                }
                (this.lastTime = a),
                  (this.lastDroppedFrames = r),
                  (this.lastDecodedFrames = e);
              }
            }),
            (e.checkFPSInterval = function () {
              var t = this.media;
              if (t)
                if (this.isVideoPlaybackQualityAvailable) {
                  var e = t.getVideoPlaybackQuality();
                  this.checkFPS(t, e.totalVideoFrames, e.droppedVideoFrames);
                } else
                  this.checkFPS(
                    t,
                    t.webkitDecodedFrameCount,
                    t.webkitDroppedFrameCount
                  );
            }),
            t
          );
        })();
      e.default = a;
    },
    "./src/controller/fragment-finders.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "findFragmentByPDT", function () {
          return a;
        }),
        r.d(e, "findFragmentByPTS", function () {
          return s;
        }),
        r.d(e, "fragmentWithinToleranceTest", function () {
          return o;
        }),
        r.d(e, "pdtWithinToleranceTest", function () {
          return l;
        }),
        r.d(e, "findFragWithCC", function () {
          return u;
        });
      var i = r("./src/polyfills/number.ts"),
        n = r("./src/utils/binary-search.ts");
      function a(t, e, r) {
        if (
          null === e ||
          !Array.isArray(t) ||
          !t.length ||
          !Object(i.isFiniteNumber)(e)
        )
          return null;
        if (e < (t[0].programDateTime || 0)) return null;
        if (e >= (t[t.length - 1].endProgramDateTime || 0)) return null;
        r = r || 0;
        for (var n = 0; n < t.length; ++n) {
          var a = t[n];
          if (l(e, r, a)) return a;
        }
        return null;
      }
      function s(t, e, r, i) {
        void 0 === r && (r = 0), void 0 === i && (i = 0);
        var a = null;
        return (
          t
            ? (a = e[t.sn - e[0].sn + 1] || null)
            : 0 === r && 0 === e[0].start && (a = e[0]),
          a && 0 === o(r, i, a)
            ? a
            : n.default.search(e, o.bind(null, r, i)) || a
        );
      }
      function o(t, e, r) {
        void 0 === t && (t = 0), void 0 === e && (e = 0);
        var i = Math.min(e, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
        return r.start + r.duration - i <= t
          ? 1
          : r.start - i > t && r.start
          ? -1
          : 0;
      }
      function l(t, e, r) {
        var i = 1e3 * Math.min(e, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
        return (r.endProgramDateTime || 0) - i > t;
      }
      function u(t, e) {
        return n.default.search(t, function (t) {
          return t.cc < e ? 1 : t.cc > e ? -1 : 0;
        });
      }
    },
    "./src/controller/fragment-tracker.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "FragmentState", function () {
          return i;
        }),
        r.d(e, "FragmentTracker", function () {
          return o;
        });
      var i,
        n,
        a = r("./src/events.ts"),
        s = r("./src/types/loader.ts");
      ((n = i || (i = {})).NOT_LOADED = "NOT_LOADED"),
        (n.BACKTRACKED = "BACKTRACKED"),
        (n.APPENDING = "APPENDING"),
        (n.PARTIAL = "PARTIAL"),
        (n.OK = "OK");
      var o = (function () {
        function t(t) {
          (this.activeFragment = null),
            (this.activeParts = null),
            (this.fragments = Object.create(null)),
            (this.timeRanges = Object.create(null)),
            (this.bufferPadding = 0.2),
            (this.hls = void 0),
            (this.hls = t),
            this._registerListeners();
        }
        var e = t.prototype;
        return (
          (e._registerListeners = function () {
            var t = this.hls;
            t.on(a.Events.BUFFER_APPENDED, this.onBufferAppended, this),
              t.on(a.Events.FRAG_BUFFERED, this.onFragBuffered, this),
              t.on(a.Events.FRAG_LOADED, this.onFragLoaded, this);
          }),
          (e._unregisterListeners = function () {
            var t = this.hls;
            t.off(a.Events.BUFFER_APPENDED, this.onBufferAppended, this),
              t.off(a.Events.FRAG_BUFFERED, this.onFragBuffered, this),
              t.off(a.Events.FRAG_LOADED, this.onFragLoaded, this);
          }),
          (e.destroy = function () {
            this._unregisterListeners(),
              (this.fragments = this.timeRanges = null);
          }),
          (e.getAppendedFrag = function (t, e) {
            if (e === s.PlaylistLevelType.MAIN) {
              var r = this.activeFragment,
                i = this.activeParts;
              if (!r) return null;
              if (i)
                for (var n = i.length; n--; ) {
                  var a = i[n],
                    o = a ? a.end : r.appendedPTS;
                  if (a.start <= t && void 0 !== o && t <= o)
                    return n > 9 && (this.activeParts = i.slice(n - 9)), a;
                }
              else if (
                r.start <= t &&
                void 0 !== r.appendedPTS &&
                t <= r.appendedPTS
              )
                return r;
            }
            return this.getBufferedFrag(t, e);
          }),
          (e.getBufferedFrag = function (t, e) {
            for (
              var r = this.fragments, i = Object.keys(r), n = i.length;
              n--;

            ) {
              var a = r[i[n]];
              if ((null == a ? void 0 : a.body.type) === e && a.buffered) {
                var s = a.body;
                if (s.start <= t && t <= s.end) return s;
              }
            }
            return null;
          }),
          (e.detectEvictedFragments = function (t, e, r) {
            var i = this;
            Object.keys(this.fragments).forEach(function (n) {
              var a = i.fragments[n];
              if (a)
                if (a.buffered) {
                  var s = a.range[t];
                  s &&
                    s.time.some(function (t) {
                      var r = !i.isTimeBuffered(t.startPTS, t.endPTS, e);
                      return r && i.removeFragment(a.body), r;
                    });
                } else a.body.type === r && i.removeFragment(a.body);
            });
          }),
          (e.detectPartialFragments = function (t) {
            var e = this,
              r = this.timeRanges,
              i = t.frag,
              n = t.part;
            if (r && "initSegment" !== i.sn) {
              var a = u(i),
                s = this.fragments[a];
              s &&
                (Object.keys(r).forEach(function (t) {
                  var a = i.elementaryStreams[t];
                  if (a) {
                    var o = r[t],
                      l = null !== n || !0 === a.partial;
                    s.range[t] = e.getBufferedTimes(i, n, l, o);
                  }
                }),
                (s.backtrack = s.loaded = null),
                Object.keys(s.range).length
                  ? (s.buffered = !0)
                  : this.removeFragment(s.body));
            }
          }),
          (e.fragBuffered = function (t) {
            var e = u(t),
              r = this.fragments[e];
            r && ((r.backtrack = r.loaded = null), (r.buffered = !0));
          }),
          (e.getBufferedTimes = function (t, e, r, i) {
            for (
              var n = { time: [], partial: r },
                a = e ? e.start : t.start,
                s = e ? e.end : t.end,
                o = t.minEndPTS || s,
                l = t.maxStartPTS || a,
                u = 0;
              u < i.length;
              u++
            ) {
              var d = i.start(u) - this.bufferPadding,
                c = i.end(u) + this.bufferPadding;
              if (l >= d && o <= c) {
                n.time.push({
                  startPTS: Math.max(a, i.start(u)),
                  endPTS: Math.min(s, i.end(u)),
                });
                break;
              }
              if (a < c && s > d)
                (n.partial = !0),
                  n.time.push({
                    startPTS: Math.max(a, i.start(u)),
                    endPTS: Math.min(s, i.end(u)),
                  });
              else if (s <= d) break;
            }
            return n;
          }),
          (e.getPartialFragment = function (t) {
            var e,
              r,
              i,
              n = null,
              a = 0,
              s = this.bufferPadding,
              o = this.fragments;
            return (
              Object.keys(o).forEach(function (u) {
                var d = o[u];
                d &&
                  l(d) &&
                  ((r = d.body.start - s),
                  (i = d.body.end + s),
                  t >= r &&
                    t <= i &&
                    ((e = Math.min(t - r, i - t)),
                    a <= e && ((n = d.body), (a = e))));
              }),
              n
            );
          }),
          (e.getState = function (t) {
            var e = u(t),
              r = this.fragments[e];
            return r
              ? r.buffered
                ? l(r)
                  ? i.PARTIAL
                  : i.OK
                : r.backtrack
                ? i.BACKTRACKED
                : i.APPENDING
              : i.NOT_LOADED;
          }),
          (e.backtrack = function (t, e) {
            var r = u(t),
              i = this.fragments[r];
            if (!i || i.backtrack) return null;
            var n = (i.backtrack = e || i.loaded);
            return (i.loaded = null), n;
          }),
          (e.getBacktrackData = function (t) {
            var e = u(t),
              r = this.fragments[e];
            if (r) {
              var i,
                n = r.backtrack;
              if (
                null != n &&
                null !== (i = n.payload) &&
                void 0 !== i &&
                i.byteLength
              )
                return n;
              this.removeFragment(t);
            }
            return null;
          }),
          (e.isTimeBuffered = function (t, e, r) {
            for (var i, n, a = 0; a < r.length; a++) {
              if (
                ((i = r.start(a) - this.bufferPadding),
                (n = r.end(a) + this.bufferPadding),
                t >= i && e <= n)
              )
                return !0;
              if (e <= i) return !1;
            }
            return !1;
          }),
          (e.onFragLoaded = function (t, e) {
            var r = e.frag,
              i = e.part;
            if ("initSegment" !== r.sn && !r.bitrateTest && !i) {
              var n = u(r);
              this.fragments[n] = {
                body: r,
                loaded: e,
                backtrack: null,
                buffered: !1,
                range: Object.create(null),
              };
            }
          }),
          (e.onBufferAppended = function (t, e) {
            var r = this,
              i = e.frag,
              n = e.part,
              a = e.timeRanges;
            if (i.type === s.PlaylistLevelType.MAIN)
              if (((this.activeFragment = i), n)) {
                var o = this.activeParts;
                o || (this.activeParts = o = []), o.push(n);
              } else this.activeParts = null;
            (this.timeRanges = a),
              Object.keys(a).forEach(function (t) {
                var e = a[t];
                if ((r.detectEvictedFragments(t, e), !n))
                  for (var s = 0; s < e.length; s++)
                    i.appendedPTS = Math.max(e.end(s), i.appendedPTS || 0);
              });
          }),
          (e.onFragBuffered = function (t, e) {
            this.detectPartialFragments(e);
          }),
          (e.hasFragment = function (t) {
            var e = u(t);
            return !!this.fragments[e];
          }),
          (e.removeFragmentsInRange = function (t, e, r) {
            var i = this;
            Object.keys(this.fragments).forEach(function (n) {
              var a = i.fragments[n];
              if (a && a.buffered) {
                var s = a.body;
                s.type === r && s.start < e && s.end > t && i.removeFragment(s);
              }
            });
          }),
          (e.removeFragment = function (t) {
            var e = u(t);
            (t.stats.loaded = 0),
              t.clearElementaryStreamInfo(),
              delete this.fragments[e];
          }),
          (e.removeAllFragments = function () {
            (this.fragments = Object.create(null)),
              (this.activeFragment = null),
              (this.activeParts = null);
          }),
          t
        );
      })();
      function l(t) {
        var e, r;
        return (
          t.buffered &&
          ((null === (e = t.range.video) || void 0 === e
            ? void 0
            : e.partial) ||
            (null === (r = t.range.audio) || void 0 === r ? void 0 : r.partial))
        );
      }
      function u(t) {
        return t.type + "_" + t.level + "_" + t.urlId + "_" + t.sn;
      }
    },
    "./src/controller/gap-controller.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "STALL_MINIMUM_DURATION_MS", function () {
          return o;
        }),
        r.d(e, "MAX_START_GAP_JUMP", function () {
          return l;
        }),
        r.d(e, "SKIP_BUFFER_HOLE_STEP_SECONDS", function () {
          return u;
        }),
        r.d(e, "SKIP_BUFFER_RANGE_START", function () {
          return d;
        }),
        r.d(e, "default", function () {
          return c;
        });
      var i = r("./src/utils/buffer-helper.ts"),
        n = r("./src/errors.ts"),
        a = r("./src/events.ts"),
        s = r("./src/utils/logger.ts"),
        o = 250,
        l = 2,
        u = 0.1,
        d = 0.05,
        c = (function () {
          function t(t, e, r, i) {
            (this.config = void 0),
              (this.media = void 0),
              (this.fragmentTracker = void 0),
              (this.hls = void 0),
              (this.nudgeRetry = 0),
              (this.stallReported = !1),
              (this.stalled = null),
              (this.moved = !1),
              (this.seeking = !1),
              (this.config = t),
              (this.media = e),
              (this.fragmentTracker = r),
              (this.hls = i);
          }
          var e = t.prototype;
          return (
            (e.destroy = function () {
              this.hls = this.fragmentTracker = this.media = null;
            }),
            (e.poll = function (t) {
              var e = this.config,
                r = this.media,
                n = this.stalled,
                a = r.currentTime,
                u = r.seeking,
                d = this.seeking && !u,
                c = !this.seeking && u;
              if (((this.seeking = u), a === t)) {
                if (
                  ((c || d) && (this.stalled = null),
                  !r.paused &&
                    !r.ended &&
                    0 !== r.playbackRate &&
                    i.BufferHelper.getBuffered(r).length)
                ) {
                  var h = i.BufferHelper.bufferInfo(r, a, 0),
                    f = h.len > 0,
                    g = h.nextStart || 0;
                  if (f || g) {
                    if (u) {
                      var v = h.len > l,
                        p =
                          !g ||
                          (g - a > l &&
                            !this.fragmentTracker.getPartialFragment(a));
                      if (v || p) return;
                      this.moved = !1;
                    }
                    if (!this.moved && null !== this.stalled) {
                      var m,
                        y = Math.max(g, h.start || 0) - a,
                        E = this.hls.levels
                          ? this.hls.levels[this.hls.currentLevel]
                          : null,
                        T = (
                          null == E || null === (m = E.details) || void 0 === m
                            ? void 0
                            : m.live
                        )
                          ? 2 * E.details.targetduration
                          : l;
                      if (y > 0 && y <= T)
                        return void this._trySkipBufferHole(null);
                    }
                    var S = self.performance.now();
                    if (null !== n) {
                      var b = S - n;
                      !u && b >= o && this._reportStall(h.len);
                      var L = i.BufferHelper.bufferInfo(r, a, e.maxBufferHole);
                      this._tryFixBufferStall(L, b);
                    } else this.stalled = S;
                  }
                }
              } else if (((this.moved = !0), null !== n)) {
                if (this.stallReported) {
                  var A = self.performance.now() - n;
                  s.logger.warn(
                    "playback not stuck anymore @" +
                      a +
                      ", after " +
                      Math.round(A) +
                      "ms"
                  ),
                    (this.stallReported = !1);
                }
                (this.stalled = null), (this.nudgeRetry = 0);
              }
            }),
            (e._tryFixBufferStall = function (t, e) {
              var r = this.config,
                i = this.fragmentTracker,
                n = this.media.currentTime,
                a = i.getPartialFragment(n);
              (a && this._trySkipBufferHole(a)) ||
                (t.len > r.maxBufferHole &&
                  e > 1e3 * r.highBufferWatchdogPeriod &&
                  (s.logger.warn("Trying to nudge playhead over buffer-hole"),
                  (this.stalled = null),
                  this._tryNudgeBuffer()));
            }),
            (e._reportStall = function (t) {
              var e = this.hls,
                r = this.media;
              this.stallReported ||
                ((this.stallReported = !0),
                s.logger.warn(
                  "Playback stalling at @" +
                    r.currentTime +
                    " due to low buffer (buffer=" +
                    t +
                    ")"
                ),
                e.trigger(a.Events.ERROR, {
                  type: n.ErrorTypes.MEDIA_ERROR,
                  details: n.ErrorDetails.BUFFER_STALLED_ERROR,
                  fatal: !1,
                  buffer: t,
                }));
            }),
            (e._trySkipBufferHole = function (t) {
              for (
                var e = this.config,
                  r = this.hls,
                  o = this.media,
                  l = o.currentTime,
                  c = 0,
                  h = i.BufferHelper.getBuffered(o),
                  f = 0;
                f < h.length;
                f++
              ) {
                var g = h.start(f);
                if (l + e.maxBufferHole >= c && l < g) {
                  var v = Math.max(g + d, o.currentTime + u);
                  return (
                    s.logger.warn(
                      "skipping hole, adjusting currentTime from " +
                        l +
                        " to " +
                        v
                    ),
                    (this.moved = !0),
                    (this.stalled = null),
                    (o.currentTime = v),
                    t &&
                      r.trigger(a.Events.ERROR, {
                        type: n.ErrorTypes.MEDIA_ERROR,
                        details: n.ErrorDetails.BUFFER_SEEK_OVER_HOLE,
                        fatal: !1,
                        reason:
                          "fragment loaded with buffer holes, seeking from " +
                          l +
                          " to " +
                          v,
                        frag: t,
                      }),
                    v
                  );
                }
                c = h.end(f);
              }
              return 0;
            }),
            (e._tryNudgeBuffer = function () {
              var t = this.config,
                e = this.hls,
                r = this.media,
                i = r.currentTime,
                o = (this.nudgeRetry || 0) + 1;
              if (((this.nudgeRetry = o), o < t.nudgeMaxRetry)) {
                var l = i + o * t.nudgeOffset;
                s.logger.warn("Nudging 'currentTime' from " + i + " to " + l),
                  (r.currentTime = l),
                  e.trigger(a.Events.ERROR, {
                    type: n.ErrorTypes.MEDIA_ERROR,
                    details: n.ErrorDetails.BUFFER_NUDGE_ON_STALL,
                    fatal: !1,
                  });
              } else
                s.logger.error(
                  "Playhead still not moving while enough data buffered @" +
                    i +
                    " after " +
                    t.nudgeMaxRetry +
                    " nudges"
                ),
                  e.trigger(a.Events.ERROR, {
                    type: n.ErrorTypes.MEDIA_ERROR,
                    details: n.ErrorDetails.BUFFER_STALLED_ERROR,
                    fatal: !0,
                  });
            }),
            t
          );
        })();
    },
    "./src/controller/id3-track-controller.ts": function (t, e, r) {
      r.r(e);
      var i = r("./src/events.ts"),
        n = r("./src/utils/texttrack-utils.ts"),
        a = r("./src/demux/id3.ts"),
        s = (function () {
          function t(t) {
            (this.hls = void 0),
              (this.id3Track = null),
              (this.media = null),
              (this.hls = t),
              this._registerListeners();
          }
          var e = t.prototype;
          return (
            (e.destroy = function () {
              this._unregisterListeners();
            }),
            (e._registerListeners = function () {
              var t = this.hls;
              t.on(i.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                t.on(i.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                t.on(
                  i.Events.FRAG_PARSING_METADATA,
                  this.onFragParsingMetadata,
                  this
                ),
                t.on(i.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
            }),
            (e._unregisterListeners = function () {
              var t = this.hls;
              t.off(i.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                t.off(i.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                t.off(
                  i.Events.FRAG_PARSING_METADATA,
                  this.onFragParsingMetadata,
                  this
                ),
                t.off(i.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
            }),
            (e.onMediaAttached = function (t, e) {
              this.media = e.media;
            }),
            (e.onMediaDetaching = function () {
              this.id3Track &&
                (Object(n.clearCurrentCues)(this.id3Track),
                (this.id3Track = null),
                (this.media = null));
            }),
            (e.getID3Track = function (t) {
              if (this.media) {
                for (var e = 0; e < t.length; e++) {
                  var r = t[e];
                  if ("metadata" === r.kind && "id3" === r.label)
                    return Object(n.sendAddTrackEvent)(r, this.media), r;
                }
                return this.media.addTextTrack("metadata", "id3");
              }
            }),
            (e.onFragParsingMetadata = function (t, e) {
              if (this.media) {
                var r = e.frag,
                  i = e.samples;
                this.id3Track ||
                  ((this.id3Track = this.getID3Track(this.media.textTracks)),
                  (this.id3Track.mode = "hidden"));
                for (
                  var n =
                      self.WebKitDataCue || self.VTTCue || self.TextTrackCue,
                    s = 0;
                  s < i.length;
                  s++
                ) {
                  var o = a.getID3Frames(i[s].data);
                  if (o) {
                    var l = i[s].pts,
                      u = s < i.length - 1 ? i[s + 1].pts : r.end;
                    u - l <= 0 && (u = l + 0.25);
                    for (var d = 0; d < o.length; d++) {
                      var c = o[d];
                      if (!a.isTimeStampFrame(c)) {
                        var h = new n(l, u, "");
                        (h.value = c), this.id3Track.addCue(h);
                      }
                    }
                  }
                }
              }
            }),
            (e.onBufferFlushing = function (t, e) {
              var r = e.startOffset,
                i = e.endOffset,
                a = e.type;
              if (!a || "audio" === a) {
                var s = this.id3Track;
                s && Object(n.removeCuesInRange)(s, r, i);
              }
            }),
            t
          );
        })();
      e.default = s;
    },
    "./src/controller/latency-controller.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "default", function () {
          return s;
        });
      var i = r("./src/errors.ts"),
        n = r("./src/events.ts"),
        a = r("./src/utils/logger.ts");
      var s = (function () {
        function t(t) {
          var e = this;
          (this.hls = void 0),
            (this.config = void 0),
            (this.media = null),
            (this.levelDetails = null),
            (this.currentTime = 0),
            (this.stallCount = 0),
            (this._latency = null),
            (this.timeupdateHandler = function () {
              return e.timeupdate();
            }),
            (this.hls = t),
            (this.config = t.config),
            this.registerListeners();
        }
        var e,
          r = t.prototype;
        return (
          (r.destroy = function () {
            this.unregisterListeners(),
              this.onMediaDetaching(),
              (this.levelDetails = null),
              (this.hls = this.timeupdateHandler = null);
          }),
          (r.registerListeners = function () {
            this.hls.on(n.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
              this.hls.on(
                n.Events.MEDIA_DETACHING,
                this.onMediaDetaching,
                this
              ),
              this.hls.on(
                n.Events.MANIFEST_LOADING,
                this.onManifestLoading,
                this
              ),
              this.hls.on(n.Events.LEVEL_UPDATED, this.onLevelUpdated, this),
              this.hls.on(n.Events.ERROR, this.onError, this);
          }),
          (r.unregisterListeners = function () {
            this.hls.off(n.Events.MEDIA_ATTACHED, this.onMediaAttached),
              this.hls.off(n.Events.MEDIA_DETACHING, this.onMediaDetaching),
              this.hls.off(n.Events.MANIFEST_LOADING, this.onManifestLoading),
              this.hls.off(n.Events.LEVEL_UPDATED, this.onLevelUpdated),
              this.hls.off(n.Events.ERROR, this.onError);
          }),
          (r.onMediaAttached = function (t, e) {
            (this.media = e.media),
              this.media.addEventListener("timeupdate", this.timeupdateHandler);
          }),
          (r.onMediaDetaching = function () {
            this.media &&
              (this.media.removeEventListener(
                "timeupdate",
                this.timeupdateHandler
              ),
              (this.media = null));
          }),
          (r.onManifestLoading = function () {
            (this.levelDetails = null),
              (this._latency = null),
              (this.stallCount = 0);
          }),
          (r.onLevelUpdated = function (t, e) {
            var r = e.details;
            (this.levelDetails = r),
              r.advanced && this.timeupdate(),
              !r.live &&
                this.media &&
                this.media.removeEventListener(
                  "timeupdate",
                  this.timeupdateHandler
                );
          }),
          (r.onError = function (t, e) {
            e.details === i.ErrorDetails.BUFFER_STALLED_ERROR &&
              (this.stallCount++,
              a.logger.warn(
                "[playback-rate-controller]: Stall detected, adjusting target latency"
              ));
          }),
          (r.timeupdate = function () {
            var t = this.media,
              e = this.levelDetails;
            if (t && e) {
              this.currentTime = t.currentTime;
              var r = this.computeLatency();
              if (null !== r) {
                this._latency = r;
                var i = this.config,
                  n = i.lowLatencyMode,
                  a = i.maxLiveSyncPlaybackRate;
                if (n && 1 !== a) {
                  var s = this.targetLatency;
                  if (null !== s) {
                    var o = r - s,
                      l = o < Math.min(this.maxLatency, s + e.targetduration);
                    if (
                      e.live &&
                      l &&
                      o > 0.05 &&
                      this.forwardBufferLength > 1
                    ) {
                      var u = Math.min(2, Math.max(1, a)),
                        d =
                          Math.round(
                            (2 / (1 + Math.exp(-0.75 * o - this.edgeStalled))) *
                              20
                          ) / 20;
                      t.playbackRate = Math.min(u, Math.max(1, d));
                    } else
                      1 !== t.playbackRate &&
                        0 !== t.playbackRate &&
                        (t.playbackRate = 1);
                  }
                }
              }
            }
          }),
          (r.estimateLiveEdge = function () {
            var t = this.levelDetails;
            return null === t ? null : t.edge + t.age;
          }),
          (r.computeLatency = function () {
            var t = this.estimateLiveEdge();
            return null === t ? null : t - this.currentTime;
          }),
          (e = [
            {
              key: "latency",
              get: function () {
                return this._latency || 0;
              },
            },
            {
              key: "maxLatency",
              get: function () {
                var t = this.config,
                  e = this.levelDetails;
                return void 0 !== t.liveMaxLatencyDuration
                  ? t.liveMaxLatencyDuration
                  : e
                  ? t.liveMaxLatencyDurationCount * e.targetduration
                  : 0;
              },
            },
            {
              key: "targetLatency",
              get: function () {
                var t = this.levelDetails;
                if (null === t) return null;
                var e = t.holdBack,
                  r = t.partHoldBack,
                  i = t.targetduration,
                  n = this.config,
                  a = n.liveSyncDuration,
                  s = n.liveSyncDurationCount,
                  o = n.lowLatencyMode,
                  l = this.hls.userConfig,
                  u = (o && r) || e;
                (l.liveSyncDuration || l.liveSyncDurationCount || 0 === u) &&
                  (u = void 0 !== a ? a : s * i);
                var d = i;
                return u + Math.min(1 * this.stallCount, d);
              },
            },
            {
              key: "liveSyncPosition",
              get: function () {
                var t = this.estimateLiveEdge(),
                  e = this.targetLatency,
                  r = this.levelDetails;
                if (null === t || null === e || null === r) return null;
                var i = r.edge,
                  n = t - e - this.edgeStalled,
                  a = i - r.totalduration,
                  s =
                    i -
                    ((this.config.lowLatencyMode && r.partTarget) ||
                      r.targetduration);
                return Math.min(Math.max(a, n), s);
              },
            },
            {
              key: "drift",
              get: function () {
                var t = this.levelDetails;
                return null === t ? 1 : t.drift;
              },
            },
            {
              key: "edgeStalled",
              get: function () {
                var t = this.levelDetails;
                if (null === t) return 0;
                var e =
                  3 *
                  ((this.config.lowLatencyMode && t.partTarget) ||
                    t.targetduration);
                return Math.max(t.age - e, 0);
              },
            },
            {
              key: "forwardBufferLength",
              get: function () {
                var t = this.media,
                  e = this.levelDetails;
                if (!t || !e) return 0;
                var r = t.buffered.length;
                return r ? t.buffered.end(r - 1) : e.edge - this.currentTime;
              },
            },
          ]) &&
            (function (t, e) {
              for (var r = 0; r < e.length; r++) {
                var i = e[r];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(t, i.key, i);
              }
            })(t.prototype, e),
          t
        );
      })();
    },
    "./src/controller/level-controller.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "default", function () {
          return f;
        });
      var i = r("./src/types/level.ts"),
        n = r("./src/events.ts"),
        a = r("./src/errors.ts"),
        s = r("./src/utils/codecs.ts"),
        o = r("./src/controller/level-helper.ts"),
        l = r("./src/controller/base-playlist-controller.ts"),
        u = r("./src/types/loader.ts");
      function d() {
        return (d =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
            }
            return t;
          }).apply(this, arguments);
      }
      function c(t, e) {
        return (c =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var h = /chrome|firefox/.test(navigator.userAgent.toLowerCase()),
        f = (function (t) {
          var e, r;
          function l(e) {
            var r;
            return (
              ((r = t.call(this, e, "[level-controller]") || this)._levels =
                []),
              (r._firstLevel = -1),
              (r._startLevel = void 0),
              (r.currentLevelIndex = -1),
              (r.manualLevelIndex = -1),
              (r.onParsedComplete = void 0),
              r._registerListeners(),
              r
            );
          }
          (r = t),
            ((e = l).prototype = Object.create(r.prototype)),
            (e.prototype.constructor = e),
            c(e, r);
          var f,
            g = l.prototype;
          return (
            (g._registerListeners = function () {
              var t = this.hls;
              t.on(n.Events.MANIFEST_LOADED, this.onManifestLoaded, this),
                t.on(n.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                t.on(
                  n.Events.AUDIO_TRACK_SWITCHED,
                  this.onAudioTrackSwitched,
                  this
                ),
                t.on(n.Events.FRAG_LOADED, this.onFragLoaded, this),
                t.on(n.Events.ERROR, this.onError, this);
            }),
            (g._unregisterListeners = function () {
              var t = this.hls;
              t.off(n.Events.MANIFEST_LOADED, this.onManifestLoaded, this),
                t.off(n.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                t.off(
                  n.Events.AUDIO_TRACK_SWITCHED,
                  this.onAudioTrackSwitched,
                  this
                ),
                t.off(n.Events.FRAG_LOADED, this.onFragLoaded, this),
                t.off(n.Events.ERROR, this.onError, this);
            }),
            (g.destroy = function () {
              this._unregisterListeners(),
                (this.manualLevelIndex = -1),
                (this._levels.length = 0),
                t.prototype.destroy.call(this);
            }),
            (g.startLoad = function () {
              this._levels.forEach(function (t) {
                t.loadError = 0;
              }),
                t.prototype.startLoad.call(this);
            }),
            (g.onManifestLoaded = function (t, e) {
              var r,
                l,
                u = [],
                d = [],
                c = [],
                f = {},
                g = !1,
                v = !1,
                p = !1;
              if (
                (e.levels.forEach(function (t) {
                  var e = t.attrs;
                  (g = g || !(!t.width || !t.height)),
                    (v = v || !!t.videoCodec),
                    (p = p || !!t.audioCodec),
                    h &&
                      t.audioCodec &&
                      -1 !== t.audioCodec.indexOf("mp4a.40.34") &&
                      (t.audioCodec = void 0);
                  var r =
                    t.bitrate + "-" + t.attrs.RESOLUTION + "-" + t.attrs.CODECS;
                  (l = f[r])
                    ? l.url.push(t.url)
                    : ((l = new i.Level(t)), (f[r] = l), u.push(l)),
                    e &&
                      (e.AUDIO && Object(o.addGroupId)(l, "audio", e.AUDIO),
                      e.SUBTITLES &&
                        Object(o.addGroupId)(l, "text", e.SUBTITLES));
                }),
                (g || v) &&
                  p &&
                  (u = u.filter(function (t) {
                    var e = t.videoCodec,
                      r = t.width,
                      i = t.height;
                    return !!e || !(!r || !i);
                  })),
                (u = u.filter(function (t) {
                  var e = t.audioCodec,
                    r = t.videoCodec;
                  return (
                    (!e || Object(s.isCodecSupportedInMp4)(e, "audio")) &&
                    (!r || Object(s.isCodecSupportedInMp4)(r, "video"))
                  );
                })),
                e.audioTracks &&
                  ((d = e.audioTracks.filter(function (t) {
                    return (
                      !t.audioCodec ||
                      Object(s.isCodecSupportedInMp4)(t.audioCodec, "audio")
                    );
                  })),
                  Object(o.assignTrackIdsByGroup)(d)),
                e.subtitles &&
                  ((c = e.subtitles), Object(o.assignTrackIdsByGroup)(c)),
                u.length > 0)
              ) {
                (r = u[0].bitrate),
                  u.sort(function (t, e) {
                    return t.bitrate - e.bitrate;
                  }),
                  (this._levels = u);
                for (var m = 0; m < u.length; m++)
                  if (u[m].bitrate === r) {
                    (this._firstLevel = m),
                      this.log(
                        "manifest loaded, " +
                          u.length +
                          " level(s) found, first bitrate: " +
                          r
                      );
                    break;
                  }
                var y = p && !v,
                  E = {
                    levels: u,
                    audioTracks: d,
                    subtitleTracks: c,
                    firstLevel: this._firstLevel,
                    stats: e.stats,
                    audio: p,
                    video: v,
                    altAudio:
                      !y &&
                      d.some(function (t) {
                        return !!t.url;
                      }),
                  };
                this.hls.trigger(n.Events.MANIFEST_PARSED, E),
                  (this.hls.config.autoStartLoad || this.hls.forceStartLoad) &&
                    this.hls.startLoad(this.hls.config.startPosition);
              } else
                this.hls.trigger(n.Events.ERROR, {
                  type: a.ErrorTypes.MEDIA_ERROR,
                  details: a.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                  fatal: !0,
                  url: e.url,
                  reason: "no level with compatible codecs found in manifest",
                });
            }),
            (g.onError = function (e, r) {
              if ((t.prototype.onError.call(this, e, r), !r.fatal)) {
                var i = r.context,
                  n = this._levels[this.currentLevelIndex];
                if (
                  i &&
                  ((i.type === u.PlaylistContextType.AUDIO_TRACK &&
                    n.audioGroupIds &&
                    i.groupId === n.audioGroupIds[n.urlId]) ||
                    (i.type === u.PlaylistContextType.SUBTITLE_TRACK &&
                      n.textGroupIds &&
                      i.groupId === n.textGroupIds[n.urlId]))
                )
                  this.redundantFailover(this.currentLevelIndex);
                else {
                  var s,
                    o = !1,
                    l = !0;
                  switch (r.details) {
                    case a.ErrorDetails.FRAG_LOAD_ERROR:
                    case a.ErrorDetails.FRAG_LOAD_TIMEOUT:
                    case a.ErrorDetails.KEY_LOAD_ERROR:
                    case a.ErrorDetails.KEY_LOAD_TIMEOUT:
                      if (r.frag) {
                        var d = this._levels[r.frag.level];
                        d
                          ? (d.fragmentError++,
                            d.fragmentError >
                              this.hls.config.fragLoadingMaxRetry &&
                              (s = r.frag.level))
                          : (s = r.frag.level);
                      }
                      break;
                    case a.ErrorDetails.LEVEL_LOAD_ERROR:
                    case a.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                      i && (i.deliveryDirectives && (l = !1), (s = i.level)),
                        (o = !0);
                      break;
                    case a.ErrorDetails.REMUX_ALLOC_ERROR:
                      (s = r.level), (o = !0);
                  }
                  void 0 !== s && this.recoverLevel(r, s, o, l);
                }
              }
            }),
            (g.recoverLevel = function (t, e, r, i) {
              var n = t.details,
                a = this._levels[e];
              if ((a.loadError++, r)) {
                if (!this.retryLoadingOrFail(t))
                  return void (this.currentLevelIndex = -1);
                t.levelRetry = !0;
              }
              if (i) {
                var s = a.url.length;
                if (s > 1 && a.loadError < s)
                  (t.levelRetry = !0), this.redundantFailover(e);
                else if (-1 === this.manualLevelIndex) {
                  var o = 0 === e ? this._levels.length - 1 : e - 1;
                  this.currentLevelIndex !== o &&
                    0 === this._levels[o].loadError &&
                    (this.warn(n + ": switch to " + o),
                    (t.levelRetry = !0),
                    (this.hls.nextAutoLevel = o));
                }
              }
            }),
            (g.redundantFailover = function (t) {
              var e = this._levels[t],
                r = e.url.length;
              if (r > 1) {
                var i = (e.urlId + 1) % r;
                this.warn("Switching to redundant URL-id " + i),
                  this._levels.forEach(function (t) {
                    t.urlId = i;
                  }),
                  (this.level = t);
              }
            }),
            (g.onFragLoaded = function (t, e) {
              var r = e.frag;
              if (void 0 !== r && r.type === u.PlaylistLevelType.MAIN) {
                var i = this._levels[r.level];
                void 0 !== i && ((i.fragmentError = 0), (i.loadError = 0));
              }
            }),
            (g.onLevelLoaded = function (t, e) {
              var r,
                i,
                n = e.level,
                a = e.details,
                s = this._levels[n];
              if (!s)
                return (
                  this.warn("Invalid level index " + n),
                  void (
                    null !== (i = e.deliveryDirectives) &&
                    void 0 !== i &&
                    i.skip &&
                    (a.deltaUpdateFailed = !0)
                  )
                );
              n === this.currentLevelIndex
                ? (0 === s.fragmentError &&
                    ((s.loadError = 0), (this.retryCount = 0)),
                  this.playlistLoaded(n, e, s.details))
                : null !== (r = e.deliveryDirectives) &&
                  void 0 !== r &&
                  r.skip &&
                  (a.deltaUpdateFailed = !0);
            }),
            (g.onAudioTrackSwitched = function (t, e) {
              var r = this.hls.levels[this.currentLevelIndex];
              if (r && r.audioGroupIds) {
                for (
                  var i = -1, n = this.hls.audioTracks[e.id].groupId, a = 0;
                  a < r.audioGroupIds.length;
                  a++
                )
                  if (r.audioGroupIds[a] === n) {
                    i = a;
                    break;
                  }
                i !== r.urlId && ((r.urlId = i), this.startLoad());
              }
            }),
            (g.loadPlaylist = function (t) {
              var e = this.currentLevelIndex,
                r = this._levels[e];
              if (this.canLoad && r && r.url.length > 0) {
                var i = r.urlId,
                  a = r.url[i];
                if (t)
                  try {
                    a = t.addDirectives(a);
                  } catch (s) {
                    this.warn(
                      "Could not construct new URL with HLS Delivery Directives: " +
                        s
                    );
                  }
                this.log(
                  "Attempt loading level index " +
                    e +
                    (t ? " at sn " + t.msn + " part " + t.part : "") +
                    " with URL-id " +
                    i +
                    " " +
                    a
                ),
                  this.clearTimer(),
                  this.hls.trigger(n.Events.LEVEL_LOADING, {
                    url: a,
                    level: e,
                    id: i,
                    deliveryDirectives: t || null,
                  });
              }
            }),
            (g.removeLevel = function (t, e) {
              var r = function (t, r) {
                  return r !== e;
                },
                i = this._levels
                  .filter(function (i, n) {
                    return (
                      n !== t ||
                      (i.url.length > 1 &&
                        void 0 !== e &&
                        ((i.url = i.url.filter(r)),
                        i.audioGroupIds &&
                          (i.audioGroupIds = i.audioGroupIds.filter(r)),
                        i.textGroupIds &&
                          (i.textGroupIds = i.textGroupIds.filter(r)),
                        (i.urlId = 0),
                        !0))
                    );
                  })
                  .map(function (t, e) {
                    var r = t.details;
                    return (
                      null != r &&
                        r.fragments &&
                        r.fragments.forEach(function (t) {
                          t.level = e;
                        }),
                      t
                    );
                  });
              (this._levels = i),
                this.hls.trigger(n.Events.LEVELS_UPDATED, { levels: i });
            }),
            (f = [
              {
                key: "levels",
                get: function () {
                  return 0 === this._levels.length ? null : this._levels;
                },
              },
              {
                key: "level",
                get: function () {
                  return this.currentLevelIndex;
                },
                set: function (t) {
                  var e,
                    r = this._levels;
                  if (
                    0 !== r.length &&
                    (this.currentLevelIndex !== t ||
                      null === (e = r[t]) ||
                      void 0 === e ||
                      !e.details)
                  ) {
                    if (t < 0 || t >= r.length) {
                      var i = t < 0;
                      if (
                        (this.hls.trigger(n.Events.ERROR, {
                          type: a.ErrorTypes.OTHER_ERROR,
                          details: a.ErrorDetails.LEVEL_SWITCH_ERROR,
                          level: t,
                          fatal: i,
                          reason: "invalid level idx",
                        }),
                        i)
                      )
                        return;
                      t = Math.min(t, r.length - 1);
                    }
                    this.clearTimer();
                    var s = this.currentLevelIndex,
                      o = r[s],
                      l = r[t];
                    this.log("switching to level " + t + " from " + s),
                      (this.currentLevelIndex = t);
                    var u = d({}, l, {
                      level: t,
                      maxBitrate: l.maxBitrate,
                      uri: l.uri,
                      urlId: l.urlId,
                    });
                    delete u._urlId,
                      this.hls.trigger(n.Events.LEVEL_SWITCHING, u);
                    var c = l.details;
                    if (!c || c.live) {
                      var h = this.switchParams(
                        l.uri,
                        null == o ? void 0 : o.details
                      );
                      this.loadPlaylist(h);
                    }
                  }
                },
              },
              {
                key: "manualLevel",
                get: function () {
                  return this.manualLevelIndex;
                },
                set: function (t) {
                  (this.manualLevelIndex = t),
                    void 0 === this._startLevel && (this._startLevel = t),
                    -1 !== t && (this.level = t);
                },
              },
              {
                key: "firstLevel",
                get: function () {
                  return this._firstLevel;
                },
                set: function (t) {
                  this._firstLevel = t;
                },
              },
              {
                key: "startLevel",
                get: function () {
                  if (void 0 === this._startLevel) {
                    var t = this.hls.config.startLevel;
                    return void 0 !== t ? t : this._firstLevel;
                  }
                  return this._startLevel;
                },
                set: function (t) {
                  this._startLevel = t;
                },
              },
              {
                key: "nextLoadLevel",
                get: function () {
                  return -1 !== this.manualLevelIndex
                    ? this.manualLevelIndex
                    : this.hls.nextAutoLevel;
                },
                set: function (t) {
                  (this.level = t),
                    -1 === this.manualLevelIndex &&
                      (this.hls.nextAutoLevel = t);
                },
              },
            ]) &&
              (function (t, e) {
                for (var r = 0; r < e.length; r++) {
                  var i = e[r];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i);
                }
              })(l.prototype, f),
            l
          );
        })(l.default);
    },
    "./src/controller/level-helper.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "addGroupId", function () {
          return a;
        }),
        r.d(e, "assignTrackIdsByGroup", function () {
          return s;
        }),
        r.d(e, "updatePTS", function () {
          return o;
        }),
        r.d(e, "updateFragPTSDTS", function () {
          return u;
        }),
        r.d(e, "mergeDetails", function () {
          return d;
        }),
        r.d(e, "mapPartIntersection", function () {
          return c;
        }),
        r.d(e, "mapFragmentIntersection", function () {
          return h;
        }),
        r.d(e, "adjustSliding", function () {
          return f;
        }),
        r.d(e, "addSliding", function () {
          return g;
        }),
        r.d(e, "computeReloadInterval", function () {
          return v;
        }),
        r.d(e, "getFragmentWithSN", function () {
          return p;
        }),
        r.d(e, "getPartWith", function () {
          return m;
        });
      var i = r("./src/polyfills/number.ts"),
        n = r("./src/utils/logger.ts");
      function a(t, e, r) {
        switch (e) {
          case "audio":
            t.audioGroupIds || (t.audioGroupIds = []), t.audioGroupIds.push(r);
            break;
          case "text":
            t.textGroupIds || (t.textGroupIds = []), t.textGroupIds.push(r);
        }
      }
      function s(t) {
        var e = {};
        t.forEach(function (t) {
          var r = t.groupId || "";
          (t.id = e[r] = e[r] || 0), e[r]++;
        });
      }
      function o(t, e, r) {
        l(t[e], t[r]);
      }
      function l(t, e) {
        var r = e.startPTS;
        if (Object(i.isFiniteNumber)(r)) {
          var n,
            a = 0;
          e.sn > t.sn
            ? ((a = r - t.start), (n = t))
            : ((a = t.start - r), (n = e)),
            n.duration !== a && (n.duration = a);
        } else
          e.sn > t.sn
            ? t.cc === e.cc && t.minEndPTS
              ? (e.start = t.start + (t.minEndPTS - t.start))
              : (e.start = t.start + t.duration)
            : (e.start = Math.max(t.start - e.duration, 0));
      }
      function u(t, e, r, a, s, o) {
        a - r <= 0 &&
          (n.logger.warn("Fragment should have a positive duration", e),
          (a = r + e.duration),
          (o = s + e.duration));
        var u = r,
          d = a,
          c = e.startPTS,
          h = e.endPTS;
        if (Object(i.isFiniteNumber)(c)) {
          var f = Math.abs(c - r);
          Object(i.isFiniteNumber)(e.deltaPTS)
            ? (e.deltaPTS = Math.max(f, e.deltaPTS))
            : (e.deltaPTS = f),
            (u = Math.max(r, c)),
            (r = Math.min(r, c)),
            (s = Math.min(s, e.startDTS)),
            (d = Math.min(a, h)),
            (a = Math.max(a, h)),
            (o = Math.max(o, e.endDTS));
        }
        e.duration = a - r;
        var g = r - e.start;
        (e.appendedPTS = a),
          (e.start = e.startPTS = r),
          (e.maxStartPTS = u),
          (e.startDTS = s),
          (e.endPTS = a),
          (e.minEndPTS = d),
          (e.endDTS = o);
        var v,
          p = e.sn;
        if (!t || p < t.startSN || p > t.endSN) return 0;
        var m = p - t.startSN,
          y = t.fragments;
        for (y[m] = e, v = m; v > 0; v--) l(y[v], y[v - 1]);
        for (v = m; v < y.length - 1; v++) l(y[v], y[v + 1]);
        return (
          t.fragmentHint && l(y[y.length - 1], t.fragmentHint),
          (t.PTSKnown = t.alignedSliding = !0),
          g
        );
      }
      function d(t, e) {
        for (var r = null, a = t.fragments, s = a.length - 1; s >= 0; s--) {
          var o = a[s].initSegment;
          if (o) {
            r = o;
            break;
          }
        }
        t.fragmentHint && delete t.fragmentHint.endPTS;
        var l,
          d = 0;
        if (
          (h(t, e, function (t, n) {
            var a;
            t.relurl && (d = t.cc - n.cc),
              Object(i.isFiniteNumber)(t.startPTS) &&
                Object(i.isFiniteNumber)(t.endPTS) &&
                ((n.start = n.startPTS = t.startPTS),
                (n.startDTS = t.startDTS),
                (n.appendedPTS = t.appendedPTS),
                (n.maxStartPTS = t.maxStartPTS),
                (n.endPTS = t.endPTS),
                (n.endDTS = t.endDTS),
                (n.minEndPTS = t.minEndPTS),
                (n.duration = t.endPTS - t.startPTS),
                n.duration && (l = n),
                (e.PTSKnown = e.alignedSliding = !0)),
              (n.elementaryStreams = t.elementaryStreams),
              (n.loader = t.loader),
              (n.stats = t.stats),
              (n.urlId = t.urlId),
              t.initSegment
                ? ((n.initSegment = t.initSegment), (r = t.initSegment))
                : (n.initSegment &&
                    n.initSegment.relurl !=
                      (null === (a = r) || void 0 === a ? void 0 : a.relurl)) ||
                  (n.initSegment = r);
          }),
          e.skippedSegments &&
            ((e.deltaUpdateFailed = e.fragments.some(function (t) {
              return !t;
            })),
            e.deltaUpdateFailed))
        ) {
          n.logger.warn(
            "[level-helper] Previous playlist missing segments skipped in delta playlist"
          );
          for (var g = e.skippedSegments; g--; ) e.fragments.shift();
          (e.startSN = e.fragments[0].sn), (e.startCC = e.fragments[0].cc);
        }
        var v = e.fragments;
        if (d) {
          n.logger.warn(
            "discontinuity sliding from playlist, take drift into account"
          );
          for (var p = 0; p < v.length; p++) v[p].cc += d;
        }
        e.skippedSegments && (e.startCC = e.fragments[0].cc),
          c(t.partList, e.partList, function (t, e) {
            (e.elementaryStreams = t.elementaryStreams), (e.stats = t.stats);
          }),
          l ? u(e, l, l.startPTS, l.endPTS, l.startDTS, l.endDTS) : f(t, e),
          v.length && (e.totalduration = e.edge - v[0].start),
          (e.driftStartTime = t.driftStartTime),
          (e.driftStart = t.driftStart);
        var m = e.advancedDateTime;
        if (e.advanced && m) {
          var y = e.edge;
          e.driftStart || ((e.driftStartTime = m), (e.driftStart = y)),
            (e.driftEndTime = m),
            (e.driftEnd = y);
        } else
          (e.driftEndTime = t.driftEndTime),
            (e.driftEnd = t.driftEnd),
            (e.advancedDateTime = t.advancedDateTime);
      }
      function c(t, e, r) {
        if (t && e)
          for (var i = 0, n = 0, a = t.length; n <= a; n++) {
            var s = t[n],
              o = e[n + i];
            s && o && s.index === o.index && s.fragment.sn === o.fragment.sn
              ? r(s, o)
              : i--;
          }
      }
      function h(t, e, r) {
        for (
          var i = e.skippedSegments,
            n = Math.max(t.startSN, e.startSN) - e.startSN,
            a =
              (t.fragmentHint ? 1 : 0) +
              (i ? e.endSN : Math.min(t.endSN, e.endSN)) -
              e.startSN,
            s = e.startSN - t.startSN,
            o = e.fragmentHint
              ? e.fragments.concat(e.fragmentHint)
              : e.fragments,
            l = t.fragmentHint
              ? t.fragments.concat(t.fragmentHint)
              : t.fragments,
            u = n;
          u <= a;
          u++
        ) {
          var d = l[s + u],
            c = o[u];
          i && !c && u < i && (c = e.fragments[u] = d), d && c && r(d, c);
        }
      }
      function f(t, e) {
        var r = e.startSN + e.skippedSegments - t.startSN,
          i = t.fragments;
        r < 0 || r >= i.length || g(e, i[r].start);
      }
      function g(t, e) {
        if (e) {
          for (var r = t.fragments, i = t.skippedSegments; i < r.length; i++)
            r[i].start += e;
          t.fragmentHint && (t.fragmentHint.start += e);
        }
      }
      function v(t, e) {
        var r,
          i = 1e3 * t.levelTargetDuration,
          n = i / 2,
          a = t.age,
          s = a > 0 && a < 3 * i,
          o = e.loading.end - e.loading.start,
          l = t.availabilityDelay;
        if (!1 === t.updated)
          if (s) {
            var u = 333 * t.misses;
            (r = Math.max(Math.min(n, 2 * o), u)),
              (t.availabilityDelay = (t.availabilityDelay || 0) + r);
          } else r = n;
        else
          s
            ? ((l = Math.min(l || i / 2, a)),
              (t.availabilityDelay = l),
              (r = l + i - a))
            : (r = i - o);
        return Math.round(r);
      }
      function p(t, e, r) {
        if (!t || !t.details) return null;
        var i = t.details,
          n = i.fragments[e - i.startSN];
        return (
          n ||
          ((n = i.fragmentHint) && n.sn === e
            ? n
            : e < i.startSN && r && r.sn === e
            ? r
            : null)
        );
      }
      function m(t, e, r) {
        if (!t || !t.details) return null;
        var i = t.details.partList;
        if (i)
          for (var n = i.length; n--; ) {
            var a = i[n];
            if (a.index === r && a.fragment.sn === e) return a;
          }
        return null;
      }
    },
    "./src/controller/stream-controller.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "default", function () {
          return m;
        });
      var i = r("./src/polyfills/number.ts"),
        n = r("./src/controller/base-stream-controller.ts"),
        a = r("./src/is-supported.ts"),
        s = r("./src/events.ts"),
        o = r("./src/utils/buffer-helper.ts"),
        l = r("./src/controller/fragment-tracker.ts"),
        u = r("./src/types/loader.ts"),
        d = r("./src/loader/fragment.ts"),
        c = r("./src/demux/transmuxer-interface.ts"),
        h = r("./src/types/transmuxer.ts"),
        f = r("./src/controller/gap-controller.ts"),
        g = r("./src/errors.ts"),
        v = r("./src/utils/logger.ts");
      function p(t, e) {
        return (p =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var m = (function (t) {
        var e, r;
        function m(e, r) {
          var i;
          return (
            ((i =
              t.call(this, e, r, "[stream-controller]") ||
              this).audioCodecSwap = !1),
            (i.gapController = null),
            (i.level = -1),
            (i._forceStartLoad = !1),
            (i.altAudio = !1),
            (i.audioOnly = !1),
            (i.fragPlaying = null),
            (i.onvplaying = null),
            (i.onvseeked = null),
            (i.fragLastKbps = 0),
            (i.stalled = !1),
            (i.couldBacktrack = !1),
            (i.audioCodecSwitch = !1),
            (i.videoBuffer = null),
            i._registerListeners(),
            i
          );
        }
        (r = t),
          ((e = m).prototype = Object.create(r.prototype)),
          (e.prototype.constructor = e),
          p(e, r);
        var y,
          E = m.prototype;
        return (
          (E._registerListeners = function () {
            var t = this.hls;
            t.on(s.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
              t.on(s.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
              t.on(s.Events.MANIFEST_LOADING, this.onManifestLoading, this),
              t.on(s.Events.MANIFEST_PARSED, this.onManifestParsed, this),
              t.on(s.Events.LEVEL_LOADING, this.onLevelLoading, this),
              t.on(s.Events.LEVEL_LOADED, this.onLevelLoaded, this),
              t.on(
                s.Events.FRAG_LOAD_EMERGENCY_ABORTED,
                this.onFragLoadEmergencyAborted,
                this
              ),
              t.on(s.Events.ERROR, this.onError, this),
              t.on(
                s.Events.AUDIO_TRACK_SWITCHING,
                this.onAudioTrackSwitching,
                this
              ),
              t.on(
                s.Events.AUDIO_TRACK_SWITCHED,
                this.onAudioTrackSwitched,
                this
              ),
              t.on(s.Events.BUFFER_CREATED, this.onBufferCreated, this),
              t.on(s.Events.BUFFER_FLUSHED, this.onBufferFlushed, this),
              t.on(s.Events.LEVELS_UPDATED, this.onLevelsUpdated, this),
              t.on(s.Events.FRAG_BUFFERED, this.onFragBuffered, this);
          }),
          (E._unregisterListeners = function () {
            var t = this.hls;
            t.off(s.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
              t.off(s.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
              t.off(s.Events.MANIFEST_LOADING, this.onManifestLoading, this),
              t.off(s.Events.MANIFEST_PARSED, this.onManifestParsed, this),
              t.off(s.Events.LEVEL_LOADED, this.onLevelLoaded, this),
              t.off(
                s.Events.FRAG_LOAD_EMERGENCY_ABORTED,
                this.onFragLoadEmergencyAborted,
                this
              ),
              t.off(s.Events.ERROR, this.onError, this),
              t.off(
                s.Events.AUDIO_TRACK_SWITCHING,
                this.onAudioTrackSwitching,
                this
              ),
              t.off(
                s.Events.AUDIO_TRACK_SWITCHED,
                this.onAudioTrackSwitched,
                this
              ),
              t.off(s.Events.BUFFER_CREATED, this.onBufferCreated, this),
              t.off(s.Events.BUFFER_FLUSHED, this.onBufferFlushed, this),
              t.off(s.Events.LEVELS_UPDATED, this.onLevelsUpdated, this),
              t.off(s.Events.FRAG_BUFFERED, this.onFragBuffered, this);
          }),
          (E.onHandlerDestroying = function () {
            this._unregisterListeners(), this.onMediaDetaching();
          }),
          (E.startLoad = function (t) {
            if (this.levels) {
              var e = this.lastCurrentTime,
                r = this.hls;
              if (
                (this.stopLoad(),
                this.setInterval(100),
                (this.level = -1),
                (this.fragLoadError = 0),
                !this.startFragRequested)
              ) {
                var i = r.startLevel;
                -1 === i &&
                  (r.config.testBandwidth
                    ? ((i = 0), (this.bitrateTest = !0))
                    : (i = r.nextAutoLevel)),
                  (this.level = r.nextLoadLevel = i),
                  (this.loadedmetadata = !1);
              }
              e > 0 &&
                -1 === t &&
                (this.log(
                  "Override startPosition with lastCurrentTime @" + e.toFixed(3)
                ),
                (t = e)),
                (this.state = n.State.IDLE),
                (this.nextLoadPosition =
                  this.startPosition =
                  this.lastCurrentTime =
                    t),
                this.tick();
            } else (this._forceStartLoad = !0), (this.state = n.State.STOPPED);
          }),
          (E.stopLoad = function () {
            (this._forceStartLoad = !1), t.prototype.stopLoad.call(this);
          }),
          (E.doTick = function () {
            switch (this.state) {
              case n.State.IDLE:
                this.doTickIdle();
                break;
              case n.State.WAITING_LEVEL:
                var t,
                  e = this.levels,
                  r = this.level,
                  i =
                    null == e || null === (t = e[r]) || void 0 === t
                      ? void 0
                      : t.details;
                if (i && (!i.live || this.levelLastLoaded === this.level)) {
                  if (this.waitForCdnTuneIn(i)) break;
                  this.state = n.State.IDLE;
                  break;
                }
                break;
              case n.State.FRAG_LOADING_WAITING_RETRY:
                var a,
                  s = self.performance.now(),
                  o = this.retryDate;
                (!o ||
                  s >= o ||
                  (null !== (a = this.media) && void 0 !== a && a.seeking)) &&
                  (this.log("retryDate reached, switch back to IDLE state"),
                  (this.state = n.State.IDLE));
            }
            this.onTickEnd();
          }),
          (E.onTickEnd = function () {
            t.prototype.onTickEnd.call(this),
              this.checkBuffer(),
              this.checkFragmentChanged();
          }),
          (E.doTickIdle = function () {
            var t,
              e,
              r = this.hls,
              i = this.levelLastLoaded,
              a = this.levels,
              o = this.media,
              c = r.config,
              h = r.nextLoadLevel;
            if (
              null !== i &&
              (o || (!this.startFragRequested && c.startFragPrefetch)) &&
              (!this.altAudio || !this.audioOnly) &&
              a &&
              a[h]
            ) {
              var f = a[h];
              this.level = r.nextLoadLevel = h;
              var g = f.details;
              if (
                !g ||
                this.state === n.State.WAITING_LEVEL ||
                (g.live && this.levelLastLoaded !== h)
              )
                this.state = n.State.WAITING_LEVEL;
              else {
                var v = this.getFwdBufferInfo(
                  this.mediaBuffer ? this.mediaBuffer : o,
                  u.PlaylistLevelType.MAIN
                );
                if (
                  null !== v &&
                  !(v.len >= this.getMaxBufferLength(f.maxBitrate))
                ) {
                  if (this._streamEnded(v, g)) {
                    var p = {};
                    return (
                      this.altAudio && (p.type = "video"),
                      this.hls.trigger(s.Events.BUFFER_EOS, p),
                      void (this.state = n.State.ENDED)
                    );
                  }
                  var m = v.end,
                    y = this.getNextFragment(m, g);
                  if (
                    this.couldBacktrack &&
                    !this.fragPrevious &&
                    y &&
                    "initSegment" !== y.sn
                  ) {
                    var E = y.sn - g.startSN;
                    E > 1 &&
                      ((y = g.fragments[E - 1]),
                      this.fragmentTracker.removeFragment(y));
                  }
                  if (
                    y &&
                    this.fragmentTracker.getState(y) === l.FragmentState.OK &&
                    this.nextLoadPosition > m
                  ) {
                    var T =
                      this.audioOnly && !this.altAudio
                        ? d.ElementaryStreamTypes.AUDIO
                        : d.ElementaryStreamTypes.VIDEO;
                    this.afterBufferFlushed(o, T, u.PlaylistLevelType.MAIN),
                      (y = this.getNextFragment(this.nextLoadPosition, g));
                  }
                  y &&
                    (!y.initSegment ||
                      y.initSegment.data ||
                      this.bitrateTest ||
                      (y = y.initSegment),
                    "identity" !==
                      (null === (t = y.decryptdata) || void 0 === t
                        ? void 0
                        : t.keyFormat) ||
                    (null !== (e = y.decryptdata) && void 0 !== e && e.key)
                      ? this.loadFragment(y, g, m)
                      : this.loadKey(y, g));
                }
              }
            }
          }),
          (E.loadFragment = function (e, r, i) {
            var n,
              a = this.fragmentTracker.getState(e);
            if (((this.fragCurrent = e), a === l.FragmentState.BACKTRACKED)) {
              var s = this.fragmentTracker.getBacktrackData(e);
              if (s)
                return (
                  this._handleFragmentLoadProgress(s),
                  void this._handleFragmentLoadComplete(s)
                );
              a = l.FragmentState.NOT_LOADED;
            }
            a === l.FragmentState.NOT_LOADED || a === l.FragmentState.PARTIAL
              ? "initSegment" === e.sn
                ? this._loadInitSegment(e)
                : this.bitrateTest
                ? ((e.bitrateTest = !0),
                  this.log(
                    "Fragment " +
                      e.sn +
                      " of level " +
                      e.level +
                      " is being downloaded to test bitrate and will not be buffered"
                  ),
                  this._loadBitrateTestFrag(e))
                : ((this.startFragRequested = !0),
                  t.prototype.loadFragment.call(this, e, r, i))
              : a === l.FragmentState.APPENDING
              ? this.reduceMaxBufferLength(e.duration) &&
                this.fragmentTracker.removeFragment(e)
              : 0 ===
                  (null === (n = this.media) || void 0 === n
                    ? void 0
                    : n.buffered.length) &&
                this.fragmentTracker.removeAllFragments();
          }),
          (E.getAppendedFrag = function (t) {
            var e = this.fragmentTracker.getAppendedFrag(
              t,
              u.PlaylistLevelType.MAIN
            );
            return e && "fragment" in e ? e.fragment : e;
          }),
          (E.getBufferedFrag = function (t) {
            return this.fragmentTracker.getBufferedFrag(
              t,
              u.PlaylistLevelType.MAIN
            );
          }),
          (E.followingBufferedFrag = function (t) {
            return t ? this.getBufferedFrag(t.end + 0.5) : null;
          }),
          (E.immediateLevelSwitch = function () {
            this.abortCurrentFrag(),
              this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
          }),
          (E.nextLevelSwitch = function () {
            var t = this.levels,
              e = this.media;
            if (null != e && e.readyState) {
              var r,
                i = this.getAppendedFrag(e.currentTime);
              if (
                (i && i.start > 1 && this.flushMainBuffer(0, i.start - 1),
                !e.paused && t)
              ) {
                var n = t[this.hls.nextLoadLevel],
                  a = this.fragLastKbps;
                r =
                  a && this.fragCurrent
                    ? (this.fragCurrent.duration * n.maxBitrate) / (1e3 * a) + 1
                    : 0;
              } else r = 0;
              var s = this.getBufferedFrag(e.currentTime + r);
              if (s) {
                var o = this.followingBufferedFrag(s);
                if (o) {
                  this.abortCurrentFrag();
                  var l = o.maxStartPTS ? o.maxStartPTS : o.start,
                    u = o.duration,
                    d = Math.max(
                      s.end,
                      l +
                        Math.min(
                          Math.max(
                            u - this.config.maxFragLookUpTolerance,
                            0.5 * u
                          ),
                          0.75 * u
                        )
                    );
                  this.flushMainBuffer(d, Number.POSITIVE_INFINITY);
                }
              }
            }
          }),
          (E.abortCurrentFrag = function () {
            var t = this.fragCurrent;
            (this.fragCurrent = null),
              null != t && t.loader && t.loader.abort(),
              this.state === n.State.KEY_LOADING && (this.state = n.State.IDLE),
              (this.nextLoadPosition = this.getLoadPosition());
          }),
          (E.flushMainBuffer = function (e, r) {
            t.prototype.flushMainBuffer.call(
              this,
              e,
              r,
              this.altAudio ? "video" : null
            );
          }),
          (E.onMediaAttached = function (e, r) {
            t.prototype.onMediaAttached.call(this, e, r);
            var i = r.media;
            (this.onvplaying = this.onMediaPlaying.bind(this)),
              (this.onvseeked = this.onMediaSeeked.bind(this)),
              i.addEventListener("playing", this.onvplaying),
              i.addEventListener("seeked", this.onvseeked),
              (this.gapController = new f.default(
                this.config,
                i,
                this.fragmentTracker,
                this.hls
              ));
          }),
          (E.onMediaDetaching = function () {
            var e = this.media;
            e &&
              (e.removeEventListener("playing", this.onvplaying),
              e.removeEventListener("seeked", this.onvseeked),
              (this.onvplaying = this.onvseeked = null),
              (this.videoBuffer = null)),
              (this.fragPlaying = null),
              this.gapController &&
                (this.gapController.destroy(), (this.gapController = null)),
              t.prototype.onMediaDetaching.call(this);
          }),
          (E.onMediaPlaying = function () {
            this.tick();
          }),
          (E.onMediaSeeked = function () {
            var t = this.media,
              e = t ? t.currentTime : null;
            Object(i.isFiniteNumber)(e) &&
              this.log("Media seeked to " + e.toFixed(3)),
              this.tick();
          }),
          (E.onManifestLoading = function () {
            this.log("Trigger BUFFER_RESET"),
              this.hls.trigger(s.Events.BUFFER_RESET, void 0),
              this.fragmentTracker.removeAllFragments(),
              (this.couldBacktrack = this.stalled = !1),
              (this.startPosition = this.lastCurrentTime = 0),
              (this.fragPlaying = null);
          }),
          (E.onManifestParsed = function (t, e) {
            var r,
              i = !1,
              n = !1;
            e.levels.forEach(function (t) {
              (r = t.audioCodec) &&
                (-1 !== r.indexOf("mp4a.40.2") && (i = !0),
                -1 !== r.indexOf("mp4a.40.5") && (n = !0));
            }),
              (this.audioCodecSwitch =
                i && n && !Object(a.changeTypeSupported)()),
              this.audioCodecSwitch &&
                this.log(
                  "Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"
                ),
              (this.levels = e.levels),
              (this.startFragRequested = !1);
          }),
          (E.onLevelLoading = function (t, e) {
            var r = this.levels;
            if (r && this.state === n.State.IDLE) {
              var i = r[e.level];
              (!i.details ||
                (i.details.live && this.levelLastLoaded !== e.level) ||
                this.waitForCdnTuneIn(i.details)) &&
                (this.state = n.State.WAITING_LEVEL);
            }
          }),
          (E.onLevelLoaded = function (t, e) {
            var r,
              i = this.levels,
              a = e.level,
              o = e.details,
              l = o.totalduration;
            if (i) {
              this.log(
                "Level " +
                  a +
                  " loaded [" +
                  o.startSN +
                  "," +
                  o.endSN +
                  "], cc [" +
                  o.startCC +
                  ", " +
                  o.endCC +
                  "] duration:" +
                  l
              );
              var u = this.fragCurrent;
              !u ||
                (this.state !== n.State.FRAG_LOADING &&
                  this.state !== n.State.FRAG_LOADING_WAITING_RETRY) ||
                (u.level !== e.level &&
                  u.loader &&
                  ((this.state = n.State.IDLE), u.loader.abort()));
              var d = i[a],
                c = 0;
              if (
                o.live ||
                (null !== (r = d.details) && void 0 !== r && r.live)
              ) {
                if (
                  (o.fragments[0] || (o.deltaUpdateFailed = !0),
                  o.deltaUpdateFailed)
                )
                  return;
                c = this.alignPlaylists(o, d.details);
              }
              if (
                ((d.details = o),
                (this.levelLastLoaded = a),
                this.hls.trigger(s.Events.LEVEL_UPDATED, {
                  details: o,
                  level: a,
                }),
                this.state === n.State.WAITING_LEVEL)
              ) {
                if (this.waitForCdnTuneIn(o)) return;
                this.state = n.State.IDLE;
              }
              this.startFragRequested
                ? o.live && this.synchronizeToLiveEdge(o)
                : this.setStartPosition(o, c),
                this.tick();
            } else this.warn("Levels were reset while loading level " + a);
          }),
          (E._handleFragmentLoadProgress = function (t) {
            var e,
              r = t.frag,
              i = t.part,
              n = t.payload,
              a = this.levels;
            if (a) {
              var s = a[r.level],
                o = s.details;
              if (o) {
                var l = s.videoCodec,
                  d = o.PTSKnown || !o.live,
                  f =
                    null === (e = r.initSegment) || void 0 === e
                      ? void 0
                      : e.data,
                  g = this._getAudioCodec(s),
                  v = (this.transmuxer =
                    this.transmuxer ||
                    new c.default(
                      this.hls,
                      u.PlaylistLevelType.MAIN,
                      this._handleTransmuxComplete.bind(this),
                      this._handleTransmuxerFlush.bind(this)
                    )),
                  p = i ? i.index : -1,
                  m = -1 !== p,
                  y = new h.ChunkMetadata(
                    r.level,
                    r.sn,
                    r.stats.chunkCount,
                    n.byteLength,
                    p,
                    m
                  ),
                  E = this.initPTS[r.cc];
                v.push(n, f, g, l, r, i, o.totalduration, d, y, E);
              } else
                this.warn(
                  "Dropping fragment " +
                    r.sn +
                    " of level " +
                    r.level +
                    " after level details were reset"
                );
            } else
              this.warn(
                "Levels were reset while fragment load was in progress. Fragment " +
                  r.sn +
                  " of level " +
                  r.level +
                  " will not be buffered"
              );
          }),
          (E.onAudioTrackSwitching = function (t, e) {
            var r = this.altAudio,
              i = !!e.url,
              n = e.id;
            if (!i) {
              if (this.mediaBuffer !== this.media) {
                this.log(
                  "Switching on main audio, use media.buffered to schedule main fragment loading"
                ),
                  (this.mediaBuffer = this.media);
                var a = this.fragCurrent;
                null != a &&
                  a.loader &&
                  (this.log(
                    "Switching to main audio track, cancel main fragment load"
                  ),
                  a.loader.abort()),
                  this.resetTransmuxer(),
                  this.resetLoadingState();
              } else this.audioOnly && this.resetTransmuxer();
              var o = this.hls;
              r &&
                o.trigger(s.Events.BUFFER_FLUSHING, {
                  startOffset: 0,
                  endOffset: Number.POSITIVE_INFINITY,
                  type: "audio",
                }),
                o.trigger(s.Events.AUDIO_TRACK_SWITCHED, { id: n });
            }
          }),
          (E.onAudioTrackSwitched = function (t, e) {
            var r = e.id,
              i = !!this.hls.audioTracks[r].url;
            if (i) {
              var n = this.videoBuffer;
              n &&
                this.mediaBuffer !== n &&
                (this.log(
                  "Switching on alternate audio, use video.buffered to schedule main fragment loading"
                ),
                (this.mediaBuffer = n));
            }
            (this.altAudio = i), this.tick();
          }),
          (E.onBufferCreated = function (t, e) {
            var r,
              i,
              n = e.tracks,
              a = !1;
            for (var s in n) {
              var o = n[s];
              if ("main" === o.id) {
                if (((i = s), (r = o), "video" === s)) {
                  var l = n[s];
                  l && (this.videoBuffer = l.buffer);
                }
              } else a = !0;
            }
            a && r
              ? (this.log(
                  "Alternate track found, use " +
                    i +
                    ".buffered to schedule main fragment loading"
                ),
                (this.mediaBuffer = r.buffer))
              : (this.mediaBuffer = this.media);
          }),
          (E.onFragBuffered = function (t, e) {
            var r = e.frag,
              i = e.part;
            if (!r || r.type === u.PlaylistLevelType.MAIN) {
              if (this.fragContextChanged(r))
                return (
                  this.warn(
                    "Fragment " +
                      r.sn +
                      (i ? " p: " + i.index : "") +
                      " of level " +
                      r.level +
                      " finished buffering, but was aborted. state: " +
                      this.state
                  ),
                  void (
                    this.state === n.State.PARSED && (this.state = n.State.IDLE)
                  )
                );
              var a = i ? i.stats : r.stats;
              (this.fragLastKbps = Math.round(
                (8 * a.total) / (a.buffering.end - a.loading.first)
              )),
                "initSegment" !== r.sn && (this.fragPrevious = r),
                this.fragBufferedComplete(r, i);
            }
          }),
          (E.onError = function (t, e) {
            switch (e.details) {
              case g.ErrorDetails.FRAG_LOAD_ERROR:
              case g.ErrorDetails.FRAG_LOAD_TIMEOUT:
              case g.ErrorDetails.KEY_LOAD_ERROR:
              case g.ErrorDetails.KEY_LOAD_TIMEOUT:
                this.onFragmentOrKeyLoadError(u.PlaylistLevelType.MAIN, e);
                break;
              case g.ErrorDetails.LEVEL_LOAD_ERROR:
              case g.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                this.state !== n.State.ERROR &&
                  (e.fatal
                    ? (this.warn("" + e.details), (this.state = n.State.ERROR))
                    : e.levelRetry ||
                      this.state !== n.State.WAITING_LEVEL ||
                      (this.state = n.State.IDLE));
                break;
              case g.ErrorDetails.BUFFER_FULL_ERROR:
                if (
                  "main" === e.parent &&
                  (this.state === n.State.PARSING ||
                    this.state === n.State.PARSED)
                ) {
                  var r = !0,
                    i = this.getFwdBufferInfo(
                      this.media,
                      u.PlaylistLevelType.MAIN
                    );
                  i && i.len > 0.5 && (r = !this.reduceMaxBufferLength(i.len)),
                    r &&
                      (this.warn(
                        "buffer full error also media.currentTime is not buffered, flush main"
                      ),
                      this.immediateLevelSwitch()),
                    this.resetLoadingState();
                }
            }
          }),
          (E.checkBuffer = function () {
            var t = this.media,
              e = this.gapController;
            if (t && e && t.readyState) {
              var r = o.BufferHelper.getBuffered(t);
              !this.loadedmetadata && r.length
                ? ((this.loadedmetadata = !0), this.seekToStartPos())
                : e.poll(this.lastCurrentTime),
                (this.lastCurrentTime = t.currentTime);
            }
          }),
          (E.onFragLoadEmergencyAborted = function () {
            (this.state = n.State.IDLE),
              this.loadedmetadata ||
                ((this.startFragRequested = !1),
                (this.nextLoadPosition = this.startPosition)),
              this.tickImmediate();
          }),
          (E.onBufferFlushed = function (t, e) {
            var r = e.type;
            if (
              r !== d.ElementaryStreamTypes.AUDIO ||
              (this.audioOnly && !this.altAudio)
            ) {
              var i =
                (r === d.ElementaryStreamTypes.VIDEO
                  ? this.videoBuffer
                  : this.mediaBuffer) || this.media;
              this.afterBufferFlushed(i, r, u.PlaylistLevelType.MAIN);
            }
          }),
          (E.onLevelsUpdated = function (t, e) {
            this.levels = e.levels;
          }),
          (E.swapAudioCodec = function () {
            this.audioCodecSwap = !this.audioCodecSwap;
          }),
          (E.seekToStartPos = function () {
            var t = this.media,
              e = t.currentTime,
              r = this.startPosition;
            if (r >= 0 && e < r) {
              if (t.seeking)
                return void v.logger.log(
                  "could not seek to " + r + ", already seeking at " + e
                );
              var i = o.BufferHelper.getBuffered(t),
                n = (i.length ? i.start(0) : 0) - r;
              n > 0 &&
                n < this.config.maxBufferHole &&
                (v.logger.log(
                  "adjusting start position by " + n + " to match buffer start"
                ),
                (r += n),
                (this.startPosition = r)),
                this.log(
                  "seek to target start position " +
                    r +
                    " from current time " +
                    e
                ),
                (t.currentTime = r);
            }
          }),
          (E._getAudioCodec = function (t) {
            var e = this.config.defaultAudioCodec || t.audioCodec;
            return (
              this.audioCodecSwap &&
                e &&
                (this.log("Swapping audio codec"),
                (e =
                  -1 !== e.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5")),
              e
            );
          }),
          (E._loadBitrateTestFrag = function (t) {
            var e = this;
            this._doFragLoad(t).then(function (r) {
              var i = e.hls;
              if (r && !i.nextLoadLevel && !e.fragContextChanged(t)) {
                (e.fragLoadError = 0),
                  (e.state = n.State.IDLE),
                  (e.startFragRequested = !1),
                  (e.bitrateTest = !1);
                var a = t.stats;
                (a.parsing.start =
                  a.parsing.end =
                  a.buffering.start =
                  a.buffering.end =
                    self.performance.now()),
                  i.trigger(s.Events.FRAG_LOADED, r);
              }
            });
          }),
          (E._handleTransmuxComplete = function (t) {
            var e,
              r = "main",
              a = this.hls,
              o = t.remuxResult,
              l = t.chunkMeta,
              u = this.getCurrentContext(l);
            if (!u)
              return (
                this.warn(
                  "The loading context changed while buffering fragment " +
                    l.sn +
                    " of level " +
                    l.level +
                    ". This chunk will not be buffered."
                ),
                void this.resetLiveStartWhenNotLoaded(l.level)
              );
            var c = u.frag,
              h = u.part,
              f = u.level,
              g = o.video,
              v = o.text,
              p = o.id3,
              m = o.initSegment,
              y = this.altAudio ? void 0 : o.audio;
            if (!this.fragContextChanged(c)) {
              if (((this.state = n.State.PARSING), m)) {
                m.tracks &&
                  (this._bufferInitSegment(f, m.tracks, c, l),
                  a.trigger(s.Events.FRAG_PARSING_INIT_SEGMENT, {
                    frag: c,
                    id: r,
                    tracks: m.tracks,
                  }));
                var E = m.initPTS,
                  T = m.timescale;
                Object(i.isFiniteNumber)(E) &&
                  ((this.initPTS[c.cc] = E),
                  a.trigger(s.Events.INIT_PTS_FOUND, {
                    frag: c,
                    id: r,
                    initPTS: E,
                    timescale: T,
                  }));
              }
              if (g && !1 !== o.independent) {
                if (f.details) {
                  var S = g.startPTS,
                    b = g.endPTS,
                    L = g.startDTS,
                    A = g.endDTS;
                  if (h)
                    h.elementaryStreams[g.type] = {
                      startPTS: S,
                      endPTS: b,
                      startDTS: L,
                      endDTS: A,
                    };
                  else if (
                    (g.firstKeyFrame &&
                      g.independent &&
                      (this.couldBacktrack = !0),
                    g.dropped && g.independent)
                  ) {
                    if (this.getLoadPosition() + this.config.maxBufferHole < S)
                      return void this.backtrack(c);
                    c.setElementaryStreamInfo(
                      g.type,
                      c.start,
                      b,
                      c.start,
                      A,
                      !0
                    );
                  }
                  c.setElementaryStreamInfo(g.type, S, b, L, A),
                    this.bufferFragmentData(g, c, h, l);
                }
              } else if (!1 === o.independent) return void this.backtrack(c);
              if (y) {
                var k = y.startPTS,
                  D = y.endPTS,
                  R = y.startDTS,
                  _ = y.endDTS;
                h &&
                  (h.elementaryStreams[d.ElementaryStreamTypes.AUDIO] = {
                    startPTS: k,
                    endPTS: D,
                    startDTS: R,
                    endDTS: _,
                  }),
                  c.setElementaryStreamInfo(
                    d.ElementaryStreamTypes.AUDIO,
                    k,
                    D,
                    R,
                    _
                  ),
                  this.bufferFragmentData(y, c, h, l);
              }
              if (
                null != p &&
                null !== (e = p.samples) &&
                void 0 !== e &&
                e.length
              ) {
                var I = { frag: c, id: r, samples: p.samples };
                a.trigger(s.Events.FRAG_PARSING_METADATA, I);
              }
              if (v) {
                var C = { frag: c, id: r, samples: v.samples };
                a.trigger(s.Events.FRAG_PARSING_USERDATA, C);
              }
            }
          }),
          (E._bufferInitSegment = function (t, e, r, i) {
            var a = this;
            if (this.state === n.State.PARSING) {
              (this.audioOnly = !!e.audio && !e.video),
                this.altAudio && !this.audioOnly && delete e.audio;
              var o = e.audio,
                l = e.video,
                u = e.audiovideo;
              if (o) {
                var d = t.audioCodec,
                  c = navigator.userAgent.toLowerCase();
                this.audioCodecSwitch &&
                  (d &&
                    (d =
                      -1 !== d.indexOf("mp4a.40.5")
                        ? "mp4a.40.2"
                        : "mp4a.40.5"),
                  1 !== o.metadata.channelCount &&
                    -1 === c.indexOf("firefox") &&
                    (d = "mp4a.40.5")),
                  -1 !== c.indexOf("android") &&
                    "audio/mpeg" !== o.container &&
                    ((d = "mp4a.40.2"),
                    this.log("Android: force audio codec to " + d)),
                  t.audioCodec &&
                    t.audioCodec !== d &&
                    this.log(
                      'Swapping manifest audio codec "' +
                        t.audioCodec +
                        '" for "' +
                        d +
                        '"'
                    ),
                  (o.levelCodec = d),
                  (o.id = "main"),
                  this.log(
                    "Init audio buffer, container:" +
                      o.container +
                      ", codecs[selected/level/parsed]=[" +
                      (d || "") +
                      "/" +
                      (t.audioCodec || "") +
                      "/" +
                      o.codec +
                      "]"
                  );
              }
              l &&
                ((l.levelCodec = t.videoCodec),
                (l.id = "main"),
                this.log(
                  "Init video buffer, container:" +
                    l.container +
                    ", codecs[level/parsed]=[" +
                    (t.videoCodec || "") +
                    "/" +
                    l.codec +
                    "]"
                )),
                u &&
                  this.log(
                    "Init audiovideo buffer, container:" +
                      u.container +
                      ", codecs[level/parsed]=[" +
                      (t.attrs.CODECS || "") +
                      "/" +
                      u.codec +
                      "]"
                  ),
                this.hls.trigger(s.Events.BUFFER_CODECS, e),
                Object.keys(e).forEach(function (t) {
                  var n = e[t].initSegment;
                  null != n &&
                    n.byteLength &&
                    a.hls.trigger(s.Events.BUFFER_APPENDING, {
                      type: t,
                      data: n,
                      frag: r,
                      part: null,
                      chunkMeta: i,
                      parent: r.type,
                    });
                }),
                this.tick();
            }
          }),
          (E.backtrack = function (t) {
            (this.couldBacktrack = !0),
              this.resetTransmuxer(),
              this.flushBufferGap(t);
            var e = this.fragmentTracker.backtrack(t);
            (this.fragPrevious = null),
              (this.nextLoadPosition = t.start),
              e
                ? this.resetFragmentLoading(t)
                : (this.state = n.State.BACKTRACKING);
          }),
          (E.checkFragmentChanged = function () {
            var t = this.media,
              e = null;
            if (t && t.readyState > 1 && !1 === t.seeking) {
              var r = t.currentTime;
              if (
                (o.BufferHelper.isBuffered(t, r)
                  ? (e = this.getAppendedFrag(r))
                  : o.BufferHelper.isBuffered(t, r + 0.1) &&
                    (e = this.getAppendedFrag(r + 0.1)),
                e)
              ) {
                var i = this.fragPlaying,
                  n = e.level;
                (i && e.sn === i.sn && i.level === n && e.urlId === i.urlId) ||
                  (this.hls.trigger(s.Events.FRAG_CHANGED, { frag: e }),
                  (i && i.level === n) ||
                    this.hls.trigger(s.Events.LEVEL_SWITCHED, { level: n }),
                  (this.fragPlaying = e));
              }
            }
          }),
          (y = [
            {
              key: "nextLevel",
              get: function () {
                var t = this.nextBufferedFrag;
                return t ? t.level : -1;
              },
            },
            {
              key: "currentLevel",
              get: function () {
                var t = this.media;
                if (t) {
                  var e = this.getAppendedFrag(t.currentTime);
                  if (e) return e.level;
                }
                return -1;
              },
            },
            {
              key: "nextBufferedFrag",
              get: function () {
                var t = this.media;
                if (t) {
                  var e = this.getAppendedFrag(t.currentTime);
                  return this.followingBufferedFrag(e);
                }
                return null;
              },
            },
            {
              key: "forceStartLoad",
              get: function () {
                return this._forceStartLoad;
              },
            },
          ]) &&
            (function (t, e) {
              for (var r = 0; r < e.length; r++) {
                var i = e[r];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(t, i.key, i);
              }
            })(m.prototype, y),
          m
        );
      })(n.default);
    },
    "./src/controller/subtitle-stream-controller.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "SubtitleStreamController", function () {
          return g;
        });
      var i = r("./src/events.ts"),
        n = r("./src/utils/logger.ts"),
        a = r("./src/utils/buffer-helper.ts"),
        s = r("./src/controller/fragment-finders.ts"),
        o = r("./src/utils/discontinuities.ts"),
        l = r("./src/controller/level-helper.ts"),
        u = r("./src/controller/fragment-tracker.ts"),
        d = r("./src/controller/base-stream-controller.ts"),
        c = r("./src/types/loader.ts"),
        h = r("./src/types/level.ts");
      function f(t, e) {
        return (f =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var g = (function (t) {
        var e, r;
        function g(e, r) {
          var i;
          return (
            ((i =
              t.call(this, e, r, "[subtitle-stream-controller]") ||
              this).levels = []),
            (i.currentTrackId = -1),
            (i.tracksBuffered = []),
            (i.mainDetails = null),
            i._registerListeners(),
            i
          );
        }
        (r = t),
          ((e = g).prototype = Object.create(r.prototype)),
          (e.prototype.constructor = e),
          f(e, r);
        var v,
          p = g.prototype;
        return (
          (p.onHandlerDestroying = function () {
            this._unregisterListeners(), (this.mainDetails = null);
          }),
          (p._registerListeners = function () {
            var t = this.hls;
            t.on(i.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
              t.on(i.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
              t.on(i.Events.MANIFEST_LOADING, this.onManifestLoading, this),
              t.on(i.Events.LEVEL_LOADED, this.onLevelLoaded, this),
              t.on(i.Events.ERROR, this.onError, this),
              t.on(
                i.Events.SUBTITLE_TRACKS_UPDATED,
                this.onSubtitleTracksUpdated,
                this
              ),
              t.on(
                i.Events.SUBTITLE_TRACK_SWITCH,
                this.onSubtitleTrackSwitch,
                this
              ),
              t.on(
                i.Events.SUBTITLE_TRACK_LOADED,
                this.onSubtitleTrackLoaded,
                this
              ),
              t.on(
                i.Events.SUBTITLE_FRAG_PROCESSED,
                this.onSubtitleFragProcessed,
                this
              ),
              t.on(i.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
          }),
          (p._unregisterListeners = function () {
            var t = this.hls;
            t.off(i.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
              t.off(i.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
              t.off(i.Events.MANIFEST_LOADING, this.onManifestLoading, this),
              t.off(i.Events.LEVEL_LOADED, this.onLevelLoaded, this),
              t.off(i.Events.ERROR, this.onError, this),
              t.off(
                i.Events.SUBTITLE_TRACKS_UPDATED,
                this.onSubtitleTracksUpdated,
                this
              ),
              t.off(
                i.Events.SUBTITLE_TRACK_SWITCH,
                this.onSubtitleTrackSwitch,
                this
              ),
              t.off(
                i.Events.SUBTITLE_TRACK_LOADED,
                this.onSubtitleTrackLoaded,
                this
              ),
              t.off(
                i.Events.SUBTITLE_FRAG_PROCESSED,
                this.onSubtitleFragProcessed,
                this
              ),
              t.off(i.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
          }),
          (p.startLoad = function () {
            this.stopLoad(),
              (this.state = d.State.IDLE),
              this.setInterval(500),
              this.tick();
          }),
          (p.onManifestLoading = function () {
            (this.mainDetails = null),
              this.fragmentTracker.removeAllFragments();
          }),
          (p.onLevelLoaded = function (t, e) {
            this.mainDetails = e.details;
          }),
          (p.onSubtitleFragProcessed = function (t, e) {
            var r = e.frag,
              i = e.success;
            if (((this.fragPrevious = r), (this.state = d.State.IDLE), i)) {
              var n = this.tracksBuffered[this.currentTrackId];
              if (n) {
                for (var a, s = r.start, o = 0; o < n.length; o++)
                  if (s >= n[o].start && s <= n[o].end) {
                    a = n[o];
                    break;
                  }
                var l = r.start + r.duration;
                a ? (a.end = l) : ((a = { start: s, end: l }), n.push(a)),
                  this.fragmentTracker.fragBuffered(r);
              }
            }
          }),
          (p.onBufferFlushing = function (t, e) {
            var r = e.startOffset,
              i = e.endOffset;
            if (0 === r && i !== Number.POSITIVE_INFINITY) {
              var n = this.currentTrackId,
                a = this.levels;
              if (!a.length || !a[n] || !a[n].details) return;
              var s = i - a[n].details.targetduration;
              if (s <= 0) return;
              (e.endOffsetSubtitles = Math.max(0, s)),
                this.tracksBuffered.forEach(function (t) {
                  for (var e = 0; e < t.length; )
                    if (t[e].end <= s) t.shift();
                    else {
                      if (!(t[e].start < s)) break;
                      (t[e].start = s), e++;
                    }
                }),
                this.fragmentTracker.removeFragmentsInRange(
                  r,
                  s,
                  c.PlaylistLevelType.SUBTITLE
                );
            }
          }),
          (p.onError = function (t, e) {
            var r,
              i = e.frag;
            i &&
              i.type === c.PlaylistLevelType.SUBTITLE &&
              (null !== (r = this.fragCurrent) &&
                void 0 !== r &&
                r.loader &&
                this.fragCurrent.loader.abort(),
              (this.state = d.State.IDLE));
          }),
          (p.onSubtitleTracksUpdated = function (t, e) {
            var r = this,
              i = e.subtitleTracks;
            (this.tracksBuffered = []),
              (this.levels = i.map(function (t) {
                return new h.Level(t);
              })),
              this.fragmentTracker.removeAllFragments(),
              (this.fragPrevious = null),
              this.levels.forEach(function (t) {
                r.tracksBuffered[t.id] = [];
              }),
              (this.mediaBuffer = null);
          }),
          (p.onSubtitleTrackSwitch = function (t, e) {
            if (
              ((this.currentTrackId = e.id),
              this.levels.length && -1 !== this.currentTrackId)
            ) {
              var r = this.levels[this.currentTrackId];
              null != r && r.details
                ? ((this.mediaBuffer = this.mediaBufferTimeRanges),
                  this.setInterval(500))
                : (this.mediaBuffer = null);
            } else this.clearInterval();
          }),
          (p.onSubtitleTrackLoaded = function (t, e) {
            var r,
              i = e.details,
              n = e.id,
              a = this.currentTrackId,
              u = this.levels;
            if (u.length) {
              var c = u[a];
              if (!(n >= u.length || n !== a) && c) {
                if (
                  ((this.mediaBuffer = this.mediaBufferTimeRanges),
                  i.live ||
                    (null !== (r = c.details) && void 0 !== r && r.live))
                ) {
                  var h = this.mainDetails;
                  if (i.deltaUpdateFailed || !h) return;
                  var f = h.fragments[0];
                  c.details
                    ? 0 === this.alignPlaylists(i, c.details) &&
                      f &&
                      Object(l.addSliding)(i, f.start)
                    : i.hasProgramDateTime && h.hasProgramDateTime
                    ? Object(o.alignPDT)(i, h)
                    : f && Object(l.addSliding)(i, f.start);
                }
                (c.details = i),
                  (this.levelLastLoaded = n),
                  this.tick(),
                  i.live &&
                    !this.fragCurrent &&
                    this.media &&
                    this.state === d.State.IDLE &&
                    (Object(s.findFragmentByPTS)(
                      null,
                      i.fragments,
                      this.media.currentTime,
                      0
                    ) ||
                      (this.warn("Subtitle playlist not aligned with playback"),
                      (c.details = void 0)));
              }
            }
          }),
          (p._handleFragmentLoadComplete = function (t) {
            var e = t.frag,
              r = t.payload,
              n = e.decryptdata,
              a = this.hls;
            if (
              !this.fragContextChanged(e) &&
              r &&
              r.byteLength > 0 &&
              n &&
              n.key &&
              n.iv &&
              "AES-128" === n.method
            ) {
              var s = performance.now();
              this.decrypter
                .webCryptoDecrypt(new Uint8Array(r), n.key.buffer, n.iv.buffer)
                .then(function (t) {
                  var r = performance.now();
                  a.trigger(i.Events.FRAG_DECRYPTED, {
                    frag: e,
                    payload: t,
                    stats: { tstart: s, tdecrypt: r },
                  });
                });
            }
          }),
          (p.doTick = function () {
            if (this.media) {
              if (this.state === d.State.IDLE) {
                var t,
                  e = this.currentTrackId,
                  r = this.levels;
                if (!r.length || !r[e] || !r[e].details) return;
                var o = r[e].details,
                  l = o.targetduration,
                  c = this.config,
                  h = this.media,
                  f = a.BufferHelper.bufferedInfo(
                    this.mediaBufferTimeRanges,
                    h.currentTime - l,
                    c.maxBufferHole
                  ),
                  g = f.end;
                if (f.len > this.getMaxBufferLength() + l) return;
                var v,
                  p = o.fragments,
                  m = p.length,
                  y = o.edge,
                  E = this.fragPrevious;
                if (g < y) {
                  var T = c.maxFragLookUpTolerance;
                  E &&
                    o.hasProgramDateTime &&
                    (v = Object(s.findFragmentByPDT)(
                      p,
                      E.endProgramDateTime,
                      T
                    )),
                    v ||
                      (!(v = Object(s.findFragmentByPTS)(E, p, g, T)) &&
                        E &&
                        E.start < p[0].start &&
                        (v = p[0]));
                } else v = p[m - 1];
                null !== (t = v) && void 0 !== t && t.encrypted
                  ? (n.logger.log("Loading key for " + v.sn),
                    (this.state = d.State.KEY_LOADING),
                    this.hls.trigger(i.Events.KEY_LOADING, { frag: v }))
                  : v &&
                    this.fragmentTracker.getState(v) ===
                      u.FragmentState.NOT_LOADED &&
                    this.loadFragment(v, o, g);
              }
            } else this.state = d.State.IDLE;
          }),
          (p.loadFragment = function (e, r, i) {
            (this.fragCurrent = e),
              t.prototype.loadFragment.call(this, e, r, i);
          }),
          (v = [
            {
              key: "mediaBufferTimeRanges",
              get: function () {
                return this.tracksBuffered[this.currentTrackId] || [];
              },
            },
          ]) &&
            (function (t, e) {
              for (var r = 0; r < e.length; r++) {
                var i = e[r];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(t, i.key, i);
              }
            })(g.prototype, v),
          g
        );
      })(d.default);
    },
    "./src/controller/subtitle-track-controller.ts": function (t, e, r) {
      r.r(e);
      var i = r("./src/events.ts"),
        n = r("./src/utils/texttrack-utils.ts"),
        a = r("./src/controller/base-playlist-controller.ts"),
        s = r("./src/types/loader.ts");
      function o(t, e) {
        return (o =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var l = (function (t) {
        var e, r;
        function a(e) {
          var r;
          return (
            ((r =
              t.call(this, e, "[subtitle-track-controller]") || this).media =
              null),
            (r.tracks = []),
            (r.groupId = null),
            (r.tracksInGroup = []),
            (r.trackId = -1),
            (r.selectDefaultTrack = !0),
            (r.queuedDefaultTrack = -1),
            (r.trackChangeListener = function () {
              return r.onTextTracksChanged();
            }),
            (r.asyncPollTrackChange = function () {
              return r.pollTrackChange(0);
            }),
            (r.useTextTrackPolling = !1),
            (r.subtitlePollingInterval = -1),
            (r.subtitleDisplay = !0),
            r.registerListeners(),
            r
          );
        }
        (r = t),
          ((e = a).prototype = Object.create(r.prototype)),
          (e.prototype.constructor = e),
          o(e, r);
        var l,
          d = a.prototype;
        return (
          (d.destroy = function () {
            this.unregisterListeners(),
              (this.tracks.length = 0),
              (this.tracksInGroup.length = 0),
              (this.trackChangeListener = this.asyncPollTrackChange = null),
              t.prototype.destroy.call(this);
          }),
          (d.registerListeners = function () {
            var t = this.hls;
            t.on(i.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
              t.on(i.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
              t.on(i.Events.MANIFEST_LOADING, this.onManifestLoading, this),
              t.on(i.Events.MANIFEST_PARSED, this.onManifestParsed, this),
              t.on(i.Events.LEVEL_LOADING, this.onLevelLoading, this),
              t.on(i.Events.LEVEL_SWITCHING, this.onLevelSwitching, this),
              t.on(
                i.Events.SUBTITLE_TRACK_LOADED,
                this.onSubtitleTrackLoaded,
                this
              ),
              t.on(i.Events.ERROR, this.onError, this);
          }),
          (d.unregisterListeners = function () {
            var t = this.hls;
            t.off(i.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
              t.off(i.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
              t.off(i.Events.MANIFEST_LOADING, this.onManifestLoading, this),
              t.off(i.Events.MANIFEST_PARSED, this.onManifestParsed, this),
              t.off(i.Events.LEVEL_LOADING, this.onLevelLoading, this),
              t.off(i.Events.LEVEL_SWITCHING, this.onLevelSwitching, this),
              t.off(
                i.Events.SUBTITLE_TRACK_LOADED,
                this.onSubtitleTrackLoaded,
                this
              ),
              t.off(i.Events.ERROR, this.onError, this);
          }),
          (d.onMediaAttached = function (t, e) {
            (this.media = e.media),
              this.media &&
                (this.queuedDefaultTrack > -1 &&
                  ((this.subtitleTrack = this.queuedDefaultTrack),
                  (this.queuedDefaultTrack = -1)),
                (this.useTextTrackPolling = !(
                  this.media.textTracks && "onchange" in this.media.textTracks
                )),
                this.useTextTrackPolling
                  ? this.pollTrackChange(500)
                  : this.media.textTracks.addEventListener(
                      "change",
                      this.asyncPollTrackChange
                    ));
          }),
          (d.pollTrackChange = function (t) {
            self.clearInterval(this.subtitlePollingInterval),
              (this.subtitlePollingInterval = self.setInterval(
                this.trackChangeListener,
                t
              ));
          }),
          (d.onMediaDetaching = function () {
            this.media &&
              (self.clearInterval(this.subtitlePollingInterval),
              this.useTextTrackPolling ||
                this.media.textTracks.removeEventListener(
                  "change",
                  this.asyncPollTrackChange
                ),
              this.trackId > -1 && (this.queuedDefaultTrack = this.trackId),
              u(this.media.textTracks).forEach(function (t) {
                Object(n.clearCurrentCues)(t);
              }),
              (this.subtitleTrack = -1),
              (this.media = null));
          }),
          (d.onManifestLoading = function () {
            (this.tracks = []),
              (this.groupId = null),
              (this.tracksInGroup = []),
              (this.trackId = -1),
              (this.selectDefaultTrack = !0);
          }),
          (d.onManifestParsed = function (t, e) {
            this.tracks = e.subtitleTracks;
          }),
          (d.onSubtitleTrackLoaded = function (t, e) {
            var r = e.id,
              i = e.details,
              n = this.trackId,
              a = this.tracksInGroup[n];
            if (a) {
              var s = a.details;
              (a.details = e.details),
                this.log(
                  "subtitle track " +
                    r +
                    " loaded [" +
                    i.startSN +
                    "-" +
                    i.endSN +
                    "]"
                ),
                r === this.trackId &&
                  ((this.retryCount = 0), this.playlistLoaded(r, e, s));
            } else this.warn("Invalid subtitle track id " + r);
          }),
          (d.onLevelLoading = function (t, e) {
            this.switchLevel(e.level);
          }),
          (d.onLevelSwitching = function (t, e) {
            this.switchLevel(e.level);
          }),
          (d.switchLevel = function (t) {
            var e = this.hls.levels[t];
            if (null != e && e.textGroupIds) {
              var r = e.textGroupIds[e.urlId];
              if (this.groupId !== r) {
                var n = this.tracksInGroup
                    ? this.tracksInGroup[this.trackId]
                    : void 0,
                  a = this.tracks.filter(function (t) {
                    return !r || t.groupId === r;
                  });
                this.tracksInGroup = a;
                var s =
                  this.findTrackId(null == n ? void 0 : n.name) ||
                  this.findTrackId();
                this.groupId = r;
                var o = { subtitleTracks: a };
                this.log(
                  "Updating subtitle tracks, " +
                    a.length +
                    ' track(s) found in "' +
                    r +
                    '" group-id'
                ),
                  this.hls.trigger(i.Events.SUBTITLE_TRACKS_UPDATED, o),
                  -1 !== s && this.setSubtitleTrack(s, n);
              }
            }
          }),
          (d.findTrackId = function (t) {
            for (var e = this.tracksInGroup, r = 0; r < e.length; r++) {
              var i = e[r];
              if (
                (!this.selectDefaultTrack || i.default) &&
                (!t || t === i.name)
              )
                return i.id;
            }
            return -1;
          }),
          (d.onError = function (e, r) {
            t.prototype.onError.call(this, e, r),
              !r.fatal &&
                r.context &&
                r.context.type === s.PlaylistContextType.SUBTITLE_TRACK &&
                r.context.id === this.trackId &&
                r.context.groupId === this.groupId &&
                this.retryLoadingOrFail(r);
          }),
          (d.loadPlaylist = function (t) {
            var e = this.tracksInGroup[this.trackId];
            if (this.shouldLoadTrack(e)) {
              var r = e.id,
                n = e.groupId,
                a = e.url;
              if (t)
                try {
                  a = t.addDirectives(a);
                } catch (s) {
                  this.warn(
                    "Could not construct new URL with HLS Delivery Directives: " +
                      s
                  );
                }
              this.log("Loading subtitle playlist for id " + r),
                this.hls.trigger(i.Events.SUBTITLE_TRACK_LOADING, {
                  url: a,
                  id: r,
                  groupId: n,
                  deliveryDirectives: t || null,
                });
            }
          }),
          (d.toggleTrackModes = function (t) {
            var e = this,
              r = this.media,
              i = this.subtitleDisplay,
              n = this.trackId;
            if (r) {
              var a = u(r.textTracks),
                s = a.filter(function (t) {
                  return t.groupId === e.groupId;
                });
              if (-1 === t)
                [].slice.call(a).forEach(function (t) {
                  t.mode = "disabled";
                });
              else {
                var o = s[n];
                o && (o.mode = "disabled");
              }
              var l = s[t];
              l && (l.mode = i ? "showing" : "hidden");
            }
          }),
          (d.setSubtitleTrack = function (t, e) {
            var r,
              n = this.tracksInGroup;
            if (this.media) {
              if (
                (this.trackId !== t && this.toggleTrackModes(t),
                !(
                  (this.trackId === t &&
                    (-1 === t ||
                      (null !== (r = n[t]) && void 0 !== r && r.details))) ||
                  t < -1 ||
                  t >= n.length
                ))
              ) {
                this.clearTimer();
                var a = n[t];
                if (
                  (this.log("Switching to subtitle track " + t),
                  (this.trackId = t),
                  a)
                ) {
                  var s = a.id,
                    o = a.groupId,
                    l = void 0 === o ? "" : o,
                    u = a.name,
                    d = a.type,
                    c = a.url;
                  this.hls.trigger(i.Events.SUBTITLE_TRACK_SWITCH, {
                    id: s,
                    groupId: l,
                    name: u,
                    type: d,
                    url: c,
                  });
                  var h = this.switchParams(
                    a.url,
                    null == e ? void 0 : e.details
                  );
                  this.loadPlaylist(h);
                } else
                  this.hls.trigger(i.Events.SUBTITLE_TRACK_SWITCH, { id: t });
              }
            } else this.queuedDefaultTrack = t;
          }),
          (d.onTextTracksChanged = function () {
            if (
              (this.useTextTrackPolling ||
                self.clearInterval(this.subtitlePollingInterval),
              this.media && this.hls.config.renderTextTracksNatively)
            ) {
              for (
                var t = -1, e = u(this.media.textTracks), r = 0;
                r < e.length;
                r++
              )
                if ("hidden" === e[r].mode) t = r;
                else if ("showing" === e[r].mode) {
                  t = r;
                  break;
                }
              this.subtitleTrack !== t && (this.subtitleTrack = t);
            }
          }),
          (l = [
            {
              key: "subtitleTracks",
              get: function () {
                return this.tracksInGroup;
              },
            },
            {
              key: "subtitleTrack",
              get: function () {
                return this.trackId;
              },
              set: function (t) {
                this.selectDefaultTrack = !1;
                var e = this.tracksInGroup
                  ? this.tracksInGroup[this.trackId]
                  : void 0;
                this.setSubtitleTrack(t, e);
              },
            },
          ]) &&
            (function (t, e) {
              for (var r = 0; r < e.length; r++) {
                var i = e[r];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(t, i.key, i);
              }
            })(a.prototype, l),
          a
        );
      })(a.default);
      function u(t) {
        for (var e = [], r = 0; r < t.length; r++) {
          var i = t[r];
          "subtitles" === i.kind && i.label && e.push(t[r]);
        }
        return e;
      }
      e.default = l;
    },
    "./src/controller/timeline-controller.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "TimelineController", function () {
          return h;
        });
      var i = r("./src/polyfills/number.ts"),
        n = r("./src/events.ts"),
        a = r("./src/utils/cea-608-parser.ts"),
        s = r("./src/utils/output-filter.ts"),
        o = r("./src/utils/webvtt-parser.ts"),
        l = r("./src/utils/texttrack-utils.ts"),
        u = r("./src/utils/imsc1-ttml-parser.ts"),
        d = r("./src/types/loader.ts"),
        c = r("./src/utils/logger.ts"),
        h = (function () {
          function t(t) {
            if (
              ((this.hls = void 0),
              (this.media = null),
              (this.config = void 0),
              (this.enabled = !0),
              (this.Cues = void 0),
              (this.textTracks = []),
              (this.tracks = []),
              (this.initPTS = []),
              (this.timescale = []),
              (this.unparsedVttFrags = []),
              (this.captionsTracks = {}),
              (this.nonNativeCaptionsTracks = {}),
              (this.cea608Parser1 = void 0),
              (this.cea608Parser2 = void 0),
              (this.lastSn = -1),
              (this.prevCC = -1),
              (this.vttCCs = {
                ccOffset: 0,
                presentationOffset: 0,
                0: { start: 0, prevCC: -1, new: !1 },
              }),
              (this.captionsProperties = void 0),
              (this.hls = t),
              (this.config = t.config),
              (this.Cues = t.config.cueHandler),
              (this.captionsProperties = {
                textTrack1: {
                  label: this.config.captionsTextTrack1Label,
                  languageCode: this.config.captionsTextTrack1LanguageCode,
                },
                textTrack2: {
                  label: this.config.captionsTextTrack2Label,
                  languageCode: this.config.captionsTextTrack2LanguageCode,
                },
                textTrack3: {
                  label: this.config.captionsTextTrack3Label,
                  languageCode: this.config.captionsTextTrack3LanguageCode,
                },
                textTrack4: {
                  label: this.config.captionsTextTrack4Label,
                  languageCode: this.config.captionsTextTrack4LanguageCode,
                },
              }),
              this.config.enableCEA708Captions)
            ) {
              var e = new s.default(this, "textTrack1"),
                r = new s.default(this, "textTrack2"),
                i = new s.default(this, "textTrack3"),
                o = new s.default(this, "textTrack4");
              (this.cea608Parser1 = new a.default(1, e, r)),
                (this.cea608Parser2 = new a.default(3, i, o));
            }
            t.on(n.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
              t.on(n.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
              t.on(n.Events.MANIFEST_LOADING, this.onManifestLoading, this),
              t.on(n.Events.MANIFEST_LOADED, this.onManifestLoaded, this),
              t.on(
                n.Events.SUBTITLE_TRACKS_UPDATED,
                this.onSubtitleTracksUpdated,
                this
              ),
              t.on(n.Events.FRAG_LOADING, this.onFragLoading, this),
              t.on(n.Events.FRAG_LOADED, this.onFragLoaded, this),
              t.on(
                n.Events.FRAG_PARSING_USERDATA,
                this.onFragParsingUserdata,
                this
              ),
              t.on(n.Events.FRAG_DECRYPTED, this.onFragDecrypted, this),
              t.on(n.Events.INIT_PTS_FOUND, this.onInitPtsFound, this),
              t.on(
                n.Events.SUBTITLE_TRACKS_CLEARED,
                this.onSubtitleTracksCleared,
                this
              ),
              t.on(n.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
          }
          var e = t.prototype;
          return (
            (e.destroy = function () {
              var t = this.hls;
              t.off(n.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
                t.off(n.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                t.off(n.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                t.off(n.Events.MANIFEST_LOADED, this.onManifestLoaded, this),
                t.off(
                  n.Events.SUBTITLE_TRACKS_UPDATED,
                  this.onSubtitleTracksUpdated,
                  this
                ),
                t.off(n.Events.FRAG_LOADING, this.onFragLoading, this),
                t.off(n.Events.FRAG_LOADED, this.onFragLoaded, this),
                t.off(
                  n.Events.FRAG_PARSING_USERDATA,
                  this.onFragParsingUserdata,
                  this
                ),
                t.off(n.Events.FRAG_DECRYPTED, this.onFragDecrypted, this),
                t.off(n.Events.INIT_PTS_FOUND, this.onInitPtsFound, this),
                t.off(
                  n.Events.SUBTITLE_TRACKS_CLEARED,
                  this.onSubtitleTracksCleared,
                  this
                ),
                t.off(n.Events.BUFFER_FLUSHING, this.onBufferFlushing, this),
                (this.hls =
                  this.config =
                  this.cea608Parser1 =
                  this.cea608Parser2 =
                    null);
            }),
            (e.addCues = function (t, e, r, i, a) {
              for (var s, o, l, u, d = !1, c = a.length; c--; ) {
                var h = a[c],
                  f =
                    ((s = h[0]),
                    (o = h[1]),
                    (l = e),
                    (u = r),
                    Math.min(o, u) - Math.max(s, l));
                if (
                  f >= 0 &&
                  ((h[0] = Math.min(h[0], e)),
                  (h[1] = Math.max(h[1], r)),
                  (d = !0),
                  f / (r - e) > 0.5)
                )
                  return;
              }
              if ((d || a.push([e, r]), this.config.renderTextTracksNatively)) {
                var g = this.captionsTracks[t];
                this.Cues.newCue(g, e, r, i);
              } else {
                var v = this.Cues.newCue(null, e, r, i);
                this.hls.trigger(n.Events.CUES_PARSED, {
                  type: "captions",
                  cues: v,
                  track: t,
                });
              }
            }),
            (e.onInitPtsFound = function (t, e) {
              var r = this,
                i = e.frag,
                a = e.id,
                s = e.initPTS,
                o = e.timescale,
                l = this.unparsedVttFrags;
              "main" === a &&
                ((this.initPTS[i.cc] = s), (this.timescale[i.cc] = o)),
                l.length &&
                  ((this.unparsedVttFrags = []),
                  l.forEach(function (t) {
                    r.onFragLoaded(n.Events.FRAG_LOADED, t);
                  }));
            }),
            (e.getExistingTrack = function (t) {
              var e = this.media;
              if (e)
                for (var r = 0; r < e.textTracks.length; r++) {
                  var i = e.textTracks[r];
                  if (i[t]) return i;
                }
              return null;
            }),
            (e.createCaptionsTrack = function (t) {
              this.config.renderTextTracksNatively
                ? this.createNativeTrack(t)
                : this.createNonNativeTrack(t);
            }),
            (e.createNativeTrack = function (t) {
              if (!this.captionsTracks[t]) {
                var e = this.captionsProperties,
                  r = this.captionsTracks,
                  i = this.media,
                  n = e[t],
                  a = n.label,
                  s = n.languageCode,
                  o = this.getExistingTrack(t);
                if (o)
                  (r[t] = o),
                    Object(l.clearCurrentCues)(r[t]),
                    Object(l.sendAddTrackEvent)(r[t], i);
                else {
                  var u = this.createTextTrack("captions", a, s);
                  u && ((u[t] = !0), (r[t] = u));
                }
              }
            }),
            (e.createNonNativeTrack = function (t) {
              if (!this.nonNativeCaptionsTracks[t]) {
                var e = this.captionsProperties[t];
                if (e) {
                  var r = {
                    _id: t,
                    label: e.label,
                    kind: "captions",
                    default: !!e.media && !!e.media.default,
                    closedCaptions: e.media,
                  };
                  (this.nonNativeCaptionsTracks[t] = r),
                    this.hls.trigger(n.Events.NON_NATIVE_TEXT_TRACKS_FOUND, {
                      tracks: [r],
                    });
                }
              }
            }),
            (e.createTextTrack = function (t, e, r) {
              var i = this.media;
              if (i) return i.addTextTrack(t, e, r);
            }),
            (e.onMediaAttaching = function (t, e) {
              (this.media = e.media), this._cleanTracks();
            }),
            (e.onMediaDetaching = function () {
              var t = this.captionsTracks;
              Object.keys(t).forEach(function (e) {
                Object(l.clearCurrentCues)(t[e]), delete t[e];
              }),
                (this.nonNativeCaptionsTracks = {});
            }),
            (e.onManifestLoading = function () {
              (this.lastSn = -1),
                (this.prevCC = -1),
                (this.vttCCs = {
                  ccOffset: 0,
                  presentationOffset: 0,
                  0: { start: 0, prevCC: -1, new: !1 },
                }),
                this._cleanTracks(),
                (this.tracks = []),
                (this.captionsTracks = {}),
                (this.nonNativeCaptionsTracks = {}),
                (this.textTracks = []),
                (this.unparsedVttFrags = this.unparsedVttFrags || []),
                (this.initPTS = []),
                (this.timescale = []),
                this.cea608Parser1 &&
                  this.cea608Parser2 &&
                  (this.cea608Parser1.reset(), this.cea608Parser2.reset());
            }),
            (e._cleanTracks = function () {
              var t = this.media;
              if (t) {
                var e = t.textTracks;
                if (e)
                  for (var r = 0; r < e.length; r++)
                    Object(l.clearCurrentCues)(e[r]);
              }
            }),
            (e.onSubtitleTracksUpdated = function (t, e) {
              var r = this;
              this.textTracks = [];
              var i = e.subtitleTracks || [],
                a = i.some(function (t) {
                  return t.textCodec === u.IMSC1_CODEC;
                });
              if (this.config.enableWebVTT || (a && this.config.enableIMSC1)) {
                var s = this.tracks && i && this.tracks.length === i.length;
                if (
                  ((this.tracks = i || []),
                  this.config.renderTextTracksNatively)
                ) {
                  var o = this.media ? this.media.textTracks : [];
                  this.tracks.forEach(function (t, e) {
                    var i;
                    if (e < o.length) {
                      for (var n = null, a = 0; a < o.length; a++)
                        if (f(o[a], t)) {
                          n = o[a];
                          break;
                        }
                      n && (i = n);
                    }
                    i
                      ? Object(l.clearCurrentCues)(i)
                      : (i = r.createTextTrack("subtitles", t.name, t.lang)) &&
                        (i.mode = "disabled"),
                      i && ((i.groupId = t.groupId), r.textTracks.push(i));
                  });
                } else if (!s && this.tracks && this.tracks.length) {
                  var d = this.tracks.map(function (t) {
                    return {
                      label: t.name,
                      kind: t.type.toLowerCase(),
                      default: t.default,
                      subtitleTrack: t,
                    };
                  });
                  this.hls.trigger(n.Events.NON_NATIVE_TEXT_TRACKS_FOUND, {
                    tracks: d,
                  });
                }
              }
            }),
            (e.onManifestLoaded = function (t, e) {
              var r = this;
              this.config.enableCEA708Captions &&
                e.captions &&
                e.captions.forEach(function (t) {
                  var e = /(?:CC|SERVICE)([1-4])/.exec(t.instreamId);
                  if (e) {
                    var i = "textTrack" + e[1],
                      n = r.captionsProperties[i];
                    n &&
                      ((n.label = t.name),
                      t.lang && (n.languageCode = t.lang),
                      (n.media = t));
                  }
                });
            }),
            (e.onFragLoading = function (t, e) {
              var r = this.cea608Parser1,
                i = this.cea608Parser2,
                n = this.lastSn;
              if (
                this.enabled &&
                r &&
                i &&
                e.frag.type === d.PlaylistLevelType.MAIN
              ) {
                var a = e.frag.sn;
                a !== n + 1 && (r.reset(), i.reset()), (this.lastSn = a);
              }
            }),
            (e.onFragLoaded = function (t, e) {
              var r = e.frag,
                a = e.payload,
                s = this.initPTS,
                o = this.unparsedVttFrags;
              if (r.type === d.PlaylistLevelType.SUBTITLE)
                if (a.byteLength) {
                  if (!Object(i.isFiniteNumber)(s[r.cc]))
                    return (
                      o.push(e),
                      void (
                        s.length &&
                        this.hls.trigger(n.Events.SUBTITLE_FRAG_PROCESSED, {
                          success: !1,
                          frag: r,
                          error: new Error("Missing initial subtitle PTS"),
                        })
                      )
                    );
                  var l = r.decryptdata;
                  if (null == l || null == l.key || "AES-128" !== l.method) {
                    var c = this.tracks[r.level],
                      h = this.vttCCs;
                    h[r.cc] ||
                      ((h[r.cc] = {
                        start: r.start,
                        prevCC: this.prevCC,
                        new: !0,
                      }),
                      (this.prevCC = r.cc)),
                      c && c.textCodec === u.IMSC1_CODEC
                        ? this._parseIMSC1(r, a)
                        : this._parseVTTs(r, a, h);
                  }
                } else
                  this.hls.trigger(n.Events.SUBTITLE_FRAG_PROCESSED, {
                    success: !1,
                    frag: r,
                    error: new Error("Empty subtitle payload"),
                  });
            }),
            (e._parseIMSC1 = function (t, e) {
              var r = this,
                i = this.hls;
              Object(u.parseIMSC1)(
                e,
                this.initPTS[t.cc],
                this.timescale[t.cc],
                function (e) {
                  r._appendCues(e, t.level),
                    i.trigger(n.Events.SUBTITLE_FRAG_PROCESSED, {
                      success: !0,
                      frag: t,
                    });
                },
                function (e) {
                  c.logger.log("Failed to parse IMSC1: " + e),
                    i.trigger(n.Events.SUBTITLE_FRAG_PROCESSED, {
                      success: !1,
                      frag: t,
                      error: e,
                    });
                }
              );
            }),
            (e._parseVTTs = function (t, e, r) {
              var i = this,
                a = this.hls;
              Object(o.parseWebVTT)(
                e,
                this.initPTS[t.cc],
                this.timescale[t.cc],
                r,
                t.cc,
                t.start,
                function (e) {
                  i._appendCues(e, t.level),
                    a.trigger(n.Events.SUBTITLE_FRAG_PROCESSED, {
                      success: !0,
                      frag: t,
                    });
                },
                function (r) {
                  i._fallbackToIMSC1(t, e),
                    c.logger.log("Failed to parse VTT cue: " + r),
                    a.trigger(n.Events.SUBTITLE_FRAG_PROCESSED, {
                      success: !1,
                      frag: t,
                      error: r,
                    });
                }
              );
            }),
            (e._fallbackToIMSC1 = function (t, e) {
              var r = this,
                i = this.tracks[t.level];
              i.textCodec ||
                Object(u.parseIMSC1)(
                  e,
                  this.initPTS[t.cc],
                  this.timescale[t.cc],
                  function () {
                    (i.textCodec = u.IMSC1_CODEC), r._parseIMSC1(t, e);
                  },
                  function () {
                    i.textCodec = "wvtt";
                  }
                );
            }),
            (e._appendCues = function (t, e) {
              var r = this.hls;
              if (this.config.renderTextTracksNatively) {
                var i = this.textTracks[e];
                if ("disabled" === i.mode) return;
                t.forEach(function (t) {
                  return Object(l.addCueToTrack)(i, t);
                });
              } else {
                var a = this.tracks[e].default ? "default" : "subtitles" + e;
                r.trigger(n.Events.CUES_PARSED, {
                  type: "subtitles",
                  cues: t,
                  track: a,
                });
              }
            }),
            (e.onFragDecrypted = function (t, e) {
              var r = e.frag;
              if (r.type === d.PlaylistLevelType.SUBTITLE) {
                if (!Object(i.isFiniteNumber)(this.initPTS[r.cc]))
                  return void this.unparsedVttFrags.push(e);
                this.onFragLoaded(n.Events.FRAG_LOADED, e);
              }
            }),
            (e.onSubtitleTracksCleared = function () {
              (this.tracks = []), (this.captionsTracks = {});
            }),
            (e.onFragParsingUserdata = function (t, e) {
              var r = this.cea608Parser1,
                i = this.cea608Parser2;
              if (this.enabled && r && i)
                for (var n = 0; n < e.samples.length; n++) {
                  var a = e.samples[n].bytes;
                  if (a) {
                    var s = this.extractCea608Data(a);
                    r.addData(e.samples[n].pts, s[0]),
                      i.addData(e.samples[n].pts, s[1]);
                  }
                }
            }),
            (e.onBufferFlushing = function (t, e) {
              var r = e.startOffset,
                i = e.endOffset,
                n = e.endOffsetSubtitles,
                a = e.type,
                s = this.media;
              if (s && !(s.currentTime < i)) {
                if (!a || "video" === a) {
                  var o = this.captionsTracks;
                  Object.keys(o).forEach(function (t) {
                    return Object(l.removeCuesInRange)(o[t], r, i);
                  });
                }
                if (
                  this.config.renderTextTracksNatively &&
                  0 === r &&
                  void 0 !== n
                ) {
                  var u = this.textTracks;
                  Object.keys(u).forEach(function (t) {
                    return Object(l.removeCuesInRange)(u[t], r, n);
                  });
                }
              }
            }),
            (e.extractCea608Data = function (t) {
              for (var e = 31 & t[0], r = 2, i = [[], []], n = 0; n < e; n++) {
                var a = t[r++],
                  s = 127 & t[r++],
                  o = 127 & t[r++],
                  l = 3 & a;
                (0 === s && 0 === o) ||
                  (0 != (4 & a) &&
                    ((0 !== l && 1 !== l) || (i[l].push(s), i[l].push(o))));
              }
              return i;
            }),
            t
          );
        })();
      function f(t, e) {
        return t && t.label === e.name && !(t.textTrack1 || t.textTrack2);
      }
    },
    "./src/crypt/aes-crypto.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "default", function () {
          return i;
        });
      var i = (function () {
        function t(t, e) {
          (this.subtle = void 0),
            (this.aesIV = void 0),
            (this.subtle = t),
            (this.aesIV = e);
        }
        return (
          (t.prototype.decrypt = function (t, e) {
            return this.subtle.decrypt(
              { name: "AES-CBC", iv: this.aesIV },
              e,
              t
            );
          }),
          t
        );
      })();
    },
    "./src/crypt/aes-decryptor.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "removePadding", function () {
          return n;
        }),
        r.d(e, "default", function () {
          return a;
        });
      var i = r("./src/utils/typed-array.ts");
      function n(t) {
        var e = t.byteLength,
          r = e && new DataView(t.buffer).getUint8(e - 1);
        return r ? Object(i.sliceUint8)(t, 0, e - r) : t;
      }
      var a = (function () {
        function t() {
          (this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]),
            (this.subMix = [
              new Uint32Array(256),
              new Uint32Array(256),
              new Uint32Array(256),
              new Uint32Array(256),
            ]),
            (this.invSubMix = [
              new Uint32Array(256),
              new Uint32Array(256),
              new Uint32Array(256),
              new Uint32Array(256),
            ]),
            (this.sBox = new Uint32Array(256)),
            (this.invSBox = new Uint32Array(256)),
            (this.key = new Uint32Array(0)),
            (this.ksRows = 0),
            (this.keySize = 0),
            (this.keySchedule = void 0),
            (this.invKeySchedule = void 0),
            this.initTable();
        }
        var e = t.prototype;
        return (
          (e.uint8ArrayToUint32Array_ = function (t) {
            for (
              var e = new DataView(t), r = new Uint32Array(4), i = 0;
              i < 4;
              i++
            )
              r[i] = e.getUint32(4 * i);
            return r;
          }),
          (e.initTable = function () {
            var t = this.sBox,
              e = this.invSBox,
              r = this.subMix,
              i = r[0],
              n = r[1],
              a = r[2],
              s = r[3],
              o = this.invSubMix,
              l = o[0],
              u = o[1],
              d = o[2],
              c = o[3],
              h = new Uint32Array(256),
              f = 0,
              g = 0,
              v = 0;
            for (v = 0; v < 256; v++) h[v] = v < 128 ? v << 1 : (v << 1) ^ 283;
            for (v = 0; v < 256; v++) {
              var p = g ^ (g << 1) ^ (g << 2) ^ (g << 3) ^ (g << 4);
              (p = (p >>> 8) ^ (255 & p) ^ 99), (t[f] = p), (e[p] = f);
              var m = h[f],
                y = h[m],
                E = h[y],
                T = (257 * h[p]) ^ (16843008 * p);
              (i[f] = (T << 24) | (T >>> 8)),
                (n[f] = (T << 16) | (T >>> 16)),
                (a[f] = (T << 8) | (T >>> 24)),
                (s[f] = T),
                (T = (16843009 * E) ^ (65537 * y) ^ (257 * m) ^ (16843008 * f)),
                (l[p] = (T << 24) | (T >>> 8)),
                (u[p] = (T << 16) | (T >>> 16)),
                (d[p] = (T << 8) | (T >>> 24)),
                (c[p] = T),
                f ? ((f = m ^ h[h[h[E ^ m]]]), (g ^= h[h[g]])) : (f = g = 1);
            }
          }),
          (e.expandKey = function (t) {
            for (
              var e = this.uint8ArrayToUint32Array_(t), r = !0, i = 0;
              i < e.length && r;

            )
              (r = e[i] === this.key[i]), i++;
            if (!r) {
              this.key = e;
              var n = (this.keySize = e.length);
              if (4 !== n && 6 !== n && 8 !== n)
                throw new Error("Invalid aes key size=" + n);
              var a,
                s,
                o,
                l,
                u = (this.ksRows = 4 * (n + 6 + 1)),
                d = (this.keySchedule = new Uint32Array(u)),
                c = (this.invKeySchedule = new Uint32Array(u)),
                h = this.sBox,
                f = this.rcon,
                g = this.invSubMix,
                v = g[0],
                p = g[1],
                m = g[2],
                y = g[3];
              for (a = 0; a < u; a++)
                a < n
                  ? (o = d[a] = e[a])
                  : ((l = o),
                    a % n == 0
                      ? ((l =
                          (h[(l = (l << 8) | (l >>> 24)) >>> 24] << 24) |
                          (h[(l >>> 16) & 255] << 16) |
                          (h[(l >>> 8) & 255] << 8) |
                          h[255 & l]),
                        (l ^= f[(a / n) | 0] << 24))
                      : n > 6 &&
                        a % n == 4 &&
                        (l =
                          (h[l >>> 24] << 24) |
                          (h[(l >>> 16) & 255] << 16) |
                          (h[(l >>> 8) & 255] << 8) |
                          h[255 & l]),
                    (d[a] = o = (d[a - n] ^ l) >>> 0));
              for (s = 0; s < u; s++)
                (a = u - s),
                  (l = 3 & s ? d[a] : d[a - 4]),
                  (c[s] =
                    s < 4 || a <= 4
                      ? l
                      : v[h[l >>> 24]] ^
                        p[h[(l >>> 16) & 255]] ^
                        m[h[(l >>> 8) & 255]] ^
                        y[h[255 & l]]),
                  (c[s] = c[s] >>> 0);
            }
          }),
          (e.networkToHostOrderSwap = function (t) {
            return (
              (t << 24) |
              ((65280 & t) << 8) |
              ((16711680 & t) >> 8) |
              (t >>> 24)
            );
          }),
          (e.decrypt = function (t, e, r) {
            for (
              var i,
                n,
                a,
                s,
                o,
                l,
                u,
                d,
                c,
                h,
                f,
                g,
                v,
                p,
                m = this.keySize + 6,
                y = this.invKeySchedule,
                E = this.invSBox,
                T = this.invSubMix,
                S = T[0],
                b = T[1],
                L = T[2],
                A = T[3],
                k = this.uint8ArrayToUint32Array_(r),
                D = k[0],
                R = k[1],
                _ = k[2],
                I = k[3],
                C = new Int32Array(t),
                w = new Int32Array(C.length),
                x = this.networkToHostOrderSwap;
              e < C.length;

            ) {
              for (
                c = x(C[e]),
                  h = x(C[e + 1]),
                  f = x(C[e + 2]),
                  g = x(C[e + 3]),
                  o = c ^ y[0],
                  l = g ^ y[1],
                  u = f ^ y[2],
                  d = h ^ y[3],
                  v = 4,
                  p = 1;
                p < m;
                p++
              )
                (i =
                  S[o >>> 24] ^
                  b[(l >> 16) & 255] ^
                  L[(u >> 8) & 255] ^
                  A[255 & d] ^
                  y[v]),
                  (n =
                    S[l >>> 24] ^
                    b[(u >> 16) & 255] ^
                    L[(d >> 8) & 255] ^
                    A[255 & o] ^
                    y[v + 1]),
                  (a =
                    S[u >>> 24] ^
                    b[(d >> 16) & 255] ^
                    L[(o >> 8) & 255] ^
                    A[255 & l] ^
                    y[v + 2]),
                  (s =
                    S[d >>> 24] ^
                    b[(o >> 16) & 255] ^
                    L[(l >> 8) & 255] ^
                    A[255 & u] ^
                    y[v + 3]),
                  (o = i),
                  (l = n),
                  (u = a),
                  (d = s),
                  (v += 4);
              (i =
                (E[o >>> 24] << 24) ^
                (E[(l >> 16) & 255] << 16) ^
                (E[(u >> 8) & 255] << 8) ^
                E[255 & d] ^
                y[v]),
                (n =
                  (E[l >>> 24] << 24) ^
                  (E[(u >> 16) & 255] << 16) ^
                  (E[(d >> 8) & 255] << 8) ^
                  E[255 & o] ^
                  y[v + 1]),
                (a =
                  (E[u >>> 24] << 24) ^
                  (E[(d >> 16) & 255] << 16) ^
                  (E[(o >> 8) & 255] << 8) ^
                  E[255 & l] ^
                  y[v + 2]),
                (s =
                  (E[d >>> 24] << 24) ^
                  (E[(o >> 16) & 255] << 16) ^
                  (E[(l >> 8) & 255] << 8) ^
                  E[255 & u] ^
                  y[v + 3]),
                (w[e] = x(i ^ D)),
                (w[e + 1] = x(s ^ R)),
                (w[e + 2] = x(a ^ _)),
                (w[e + 3] = x(n ^ I)),
                (D = c),
                (R = h),
                (_ = f),
                (I = g),
                (e += 4);
            }
            return w.buffer;
          }),
          t
        );
      })();
    },
    "./src/crypt/decrypter.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "default", function () {
          return u;
        });
      var i = r("./src/crypt/aes-crypto.ts"),
        n = r("./src/crypt/fast-aes-key.ts"),
        a = r("./src/crypt/aes-decryptor.ts"),
        s = r("./src/utils/logger.ts"),
        o = r("./src/utils/mp4-tools.ts"),
        l = r("./src/utils/typed-array.ts"),
        u = (function () {
          function t(t, e, r) {
            var i = (void 0 === r ? {} : r).removePKCS7Padding,
              n = void 0 === i || i;
            if (
              ((this.logEnabled = !0),
              (this.observer = void 0),
              (this.config = void 0),
              (this.removePKCS7Padding = void 0),
              (this.subtle = null),
              (this.softwareDecrypter = null),
              (this.key = null),
              (this.fastAesKey = null),
              (this.remainderData = null),
              (this.currentIV = null),
              (this.currentResult = null),
              (this.observer = t),
              (this.config = e),
              (this.removePKCS7Padding = n),
              n)
            )
              try {
                var a = self.crypto;
                a && (this.subtle = a.subtle || a.webkitSubtle);
              } catch (s) {}
            null === this.subtle && (this.config.enableSoftwareAES = !0);
          }
          var e = t.prototype;
          return (
            (e.destroy = function () {
              this.observer = null;
            }),
            (e.isSync = function () {
              return this.config.enableSoftwareAES;
            }),
            (e.flush = function () {
              var t = this.currentResult;
              if (t) {
                var e = new Uint8Array(t);
                return (
                  this.reset(),
                  this.removePKCS7Padding ? Object(a.removePadding)(e) : e
                );
              }
              this.reset();
            }),
            (e.reset = function () {
              (this.currentResult = null),
                (this.currentIV = null),
                (this.remainderData = null),
                this.softwareDecrypter && (this.softwareDecrypter = null);
            }),
            (e.decrypt = function (t, e, r, i) {
              if (this.config.enableSoftwareAES) {
                this.softwareDecrypt(new Uint8Array(t), e, r);
                var n = this.flush();
                n && i(n.buffer);
              } else this.webCryptoDecrypt(new Uint8Array(t), e, r).then(i);
            }),
            (e.softwareDecrypt = function (t, e, r) {
              var i = this.currentIV,
                n = this.currentResult,
                s = this.remainderData;
              this.logOnce("JS AES decrypt"),
                s &&
                  ((t = Object(o.appendUint8Array)(s, t)),
                  (this.remainderData = null));
              var u = this.getValidChunk(t);
              if (!u.length) return null;
              i && (r = i);
              var d = this.softwareDecrypter;
              d || (d = this.softwareDecrypter = new a.default()),
                d.expandKey(e);
              var c = n;
              return (
                (this.currentResult = d.decrypt(u.buffer, 0, r)),
                (this.currentIV = Object(l.sliceUint8)(u, -16).buffer),
                c || null
              );
            }),
            (e.webCryptoDecrypt = function (t, e, r) {
              var a = this,
                s = this.subtle;
              return (
                (this.key === e && this.fastAesKey) ||
                  ((this.key = e), (this.fastAesKey = new n.default(s, e))),
                this.fastAesKey
                  .expandKey()
                  .then(function (e) {
                    return s
                      ? new i.default(s, r).decrypt(t.buffer, e)
                      : Promise.reject(new Error("web crypto not initialized"));
                  })
                  .catch(function (i) {
                    return a.onWebCryptoError(i, t, e, r);
                  })
              );
            }),
            (e.onWebCryptoError = function (t, e, r, i) {
              return (
                s.logger.warn(
                  "[decrypter.ts]: WebCrypto Error, disable WebCrypto API:",
                  t
                ),
                (this.config.enableSoftwareAES = !0),
                (this.logEnabled = !0),
                this.softwareDecrypt(e, r, i)
              );
            }),
            (e.getValidChunk = function (t) {
              var e = t,
                r = t.length - (t.length % 16);
              return (
                r !== t.length &&
                  ((e = Object(l.sliceUint8)(t, 0, r)),
                  (this.remainderData = Object(l.sliceUint8)(t, r))),
                e
              );
            }),
            (e.logOnce = function (t) {
              this.logEnabled &&
                (s.logger.log("[decrypter.ts]: " + t), (this.logEnabled = !1));
            }),
            t
          );
        })();
    },
    "./src/crypt/fast-aes-key.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "default", function () {
          return i;
        });
      var i = (function () {
        function t(t, e) {
          (this.subtle = void 0),
            (this.key = void 0),
            (this.subtle = t),
            (this.key = e);
        }
        return (
          (t.prototype.expandKey = function () {
            return this.subtle.importKey(
              "raw",
              this.key,
              { name: "AES-CBC" },
              !1,
              ["encrypt", "decrypt"]
            );
          }),
          t
        );
      })();
    },
    "./src/demux/aacdemuxer.ts": function (t, e, r) {
      r.r(e);
      var i = r("./src/demux/base-audio-demuxer.ts"),
        n = r("./src/demux/adts.ts"),
        a = r("./src/utils/logger.ts"),
        s = r("./src/demux/id3.ts");
      function o(t, e) {
        return (o =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var l = (function (t) {
        var e, r;
        function i(e, r) {
          var i;
          return (
            ((i = t.call(this) || this).observer = void 0),
            (i.config = void 0),
            (i.observer = e),
            (i.config = r),
            i
          );
        }
        (r = t),
          ((e = i).prototype = Object.create(r.prototype)),
          (e.prototype.constructor = e),
          o(e, r);
        var l = i.prototype;
        return (
          (l.resetInitSegment = function (e, r, i) {
            t.prototype.resetInitSegment.call(this, e, r, i),
              (this._audioTrack = {
                container: "audio/adts",
                type: "audio",
                id: 0,
                pid: -1,
                sequenceNumber: 0,
                isAAC: !0,
                samples: [],
                manifestCodec: e,
                duration: i,
                inputTimeScale: 9e4,
                dropped: 0,
              });
          }),
          (i.probe = function (t) {
            if (!t) return !1;
            for (
              var e = (s.getID3Data(t, 0) || []).length, r = t.length;
              e < r;
              e++
            )
              if (n.probe(t, e))
                return a.logger.log("ADTS sync word found !"), !0;
            return !1;
          }),
          (l.canParse = function (t, e) {
            return n.canParse(t, e);
          }),
          (l.appendFrame = function (t, e, r) {
            n.initTrackConfig(t, this.observer, e, r, t.manifestCodec);
            var i = n.appendFrame(t, e, r, this.initPTS, this.frameIndex);
            if (i && 0 === i.missing) return i;
          }),
          i
        );
      })(i.default);
      (l.minProbeByteLength = 9), (e.default = l);
    },
    "./src/demux/adts.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "getAudioConfig", function () {
          return s;
        }),
        r.d(e, "isHeaderPattern", function () {
          return o;
        }),
        r.d(e, "getHeaderLength", function () {
          return l;
        }),
        r.d(e, "getFullFrameLength", function () {
          return u;
        }),
        r.d(e, "canGetFrameLength", function () {
          return d;
        }),
        r.d(e, "isHeader", function () {
          return c;
        }),
        r.d(e, "canParse", function () {
          return h;
        }),
        r.d(e, "probe", function () {
          return f;
        }),
        r.d(e, "initTrackConfig", function () {
          return g;
        }),
        r.d(e, "getFrameDuration", function () {
          return v;
        }),
        r.d(e, "parseFrameHeader", function () {
          return p;
        }),
        r.d(e, "appendFrame", function () {
          return m;
        });
      var i = r("./src/utils/logger.ts"),
        n = r("./src/errors.ts"),
        a = r("./src/events.ts");
      function s(t, e, r, s) {
        var o,
          l,
          u,
          d,
          c = navigator.userAgent.toLowerCase(),
          h = s,
          f = [
            96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3,
            11025, 8e3, 7350,
          ];
        o = 1 + ((192 & e[r + 2]) >>> 6);
        var g = (60 & e[r + 2]) >>> 2;
        if (!(g > f.length - 1))
          return (
            (u = (1 & e[r + 2]) << 2),
            (u |= (192 & e[r + 3]) >>> 6),
            i.logger.log(
              "manifest codec:" +
                s +
                ", ADTS type:" +
                o +
                ", samplingIndex:" +
                g
            ),
            /firefox/i.test(c)
              ? g >= 6
                ? ((o = 5), (d = new Array(4)), (l = g - 3))
                : ((o = 2), (d = new Array(2)), (l = g))
              : -1 !== c.indexOf("android")
              ? ((o = 2), (d = new Array(2)), (l = g))
              : ((o = 5),
                (d = new Array(4)),
                (s &&
                  (-1 !== s.indexOf("mp4a.40.29") ||
                    -1 !== s.indexOf("mp4a.40.5"))) ||
                (!s && g >= 6)
                  ? (l = g - 3)
                  : (((s &&
                      -1 !== s.indexOf("mp4a.40.2") &&
                      ((g >= 6 && 1 === u) || /vivaldi/i.test(c))) ||
                      (!s && 1 === u)) &&
                      ((o = 2), (d = new Array(2))),
                    (l = g))),
            (d[0] = o << 3),
            (d[0] |= (14 & g) >> 1),
            (d[1] |= (1 & g) << 7),
            (d[1] |= u << 3),
            5 === o &&
              ((d[1] |= (14 & l) >> 1),
              (d[2] = (1 & l) << 7),
              (d[2] |= 8),
              (d[3] = 0)),
            {
              config: d,
              samplerate: f[g],
              channelCount: u,
              codec: "mp4a.40." + o,
              manifestCodec: h,
            }
          );
        t.trigger(a.Events.ERROR, {
          type: n.ErrorTypes.MEDIA_ERROR,
          details: n.ErrorDetails.FRAG_PARSING_ERROR,
          fatal: !0,
          reason: "invalid ADTS sampling index:" + g,
        });
      }
      function o(t, e) {
        return 255 === t[e] && 240 == (246 & t[e + 1]);
      }
      function l(t, e) {
        return 1 & t[e + 1] ? 7 : 9;
      }
      function u(t, e) {
        return (
          ((3 & t[e + 3]) << 11) | (t[e + 4] << 3) | ((224 & t[e + 5]) >>> 5)
        );
      }
      function d(t, e) {
        return e + 5 < t.length;
      }
      function c(t, e) {
        return e + 1 < t.length && o(t, e);
      }
      function h(t, e) {
        return d(t, e) && o(t, e) && u(t, e) <= t.length - e;
      }
      function f(t, e) {
        if (c(t, e)) {
          var r = l(t, e);
          if (e + r >= t.length) return !1;
          var i = u(t, e);
          if (i <= r) return !1;
          var n = e + i;
          return n === t.length || c(t, n);
        }
        return !1;
      }
      function g(t, e, r, n, a) {
        if (!t.samplerate) {
          var o = s(e, r, n, a);
          if (!o) return;
          (t.config = o.config),
            (t.samplerate = o.samplerate),
            (t.channelCount = o.channelCount),
            (t.codec = o.codec),
            (t.manifestCodec = o.manifestCodec),
            i.logger.log(
              "parsed codec:" +
                t.codec +
                ", rate:" +
                o.samplerate +
                ", channels:" +
                o.channelCount
            );
        }
      }
      function v(t) {
        return 9216e4 / t;
      }
      function p(t, e, r, i, n) {
        var a = l(t, e),
          s = u(t, e);
        if ((s -= a) > 0)
          return { headerLength: a, frameLength: s, stamp: r + i * n };
      }
      function m(t, e, r, i, n) {
        var a = p(e, r, i, n, v(t.samplerate));
        if (a) {
          var s,
            o = a.frameLength,
            l = a.headerLength,
            u = a.stamp,
            d = l + o,
            c = Math.max(0, r + d - e.length);
          c
            ? (s = new Uint8Array(d - l)).set(e.subarray(r + l, e.length), 0)
            : (s = e.subarray(r + l, r + d));
          var h = { unit: s, pts: u };
          return c || t.samples.push(h), { sample: h, length: d, missing: c };
        }
      }
    },
    "./src/demux/base-audio-demuxer.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "initPTSFn", function () {
          return u;
        });
      var i = r("./src/polyfills/number.ts"),
        n = r("./src/demux/id3.ts"),
        a = r("./src/demux/dummy-demuxed-track.ts"),
        s = r("./src/utils/mp4-tools.ts"),
        o = r("./src/utils/typed-array.ts"),
        l = (function () {
          function t() {
            (this._audioTrack = void 0),
              (this._id3Track = void 0),
              (this.frameIndex = 0),
              (this.cachedData = null),
              (this.initPTS = null);
          }
          var e = t.prototype;
          return (
            (e.resetInitSegment = function (t, e, r) {
              this._id3Track = {
                type: "id3",
                id: 0,
                pid: -1,
                inputTimeScale: 9e4,
                sequenceNumber: 0,
                samples: [],
                dropped: 0,
              };
            }),
            (e.resetTimeStamp = function () {}),
            (e.resetContiguity = function () {}),
            (e.canParse = function (t, e) {
              return !1;
            }),
            (e.appendFrame = function (t, e, r) {}),
            (e.demux = function (t, e) {
              this.cachedData &&
                ((t = Object(s.appendUint8Array)(this.cachedData, t)),
                (this.cachedData = null));
              var r,
                i,
                l = n.getID3Data(t, 0),
                d = l ? l.length : 0,
                c = this._audioTrack,
                h = this._id3Track,
                f = l ? n.getTimeStamp(l) : void 0,
                g = t.length;
              for (
                (0 !== this.frameIndex && null !== this.initPTS) ||
                  (this.initPTS = u(f, e)),
                  l &&
                    l.length > 0 &&
                    h.samples.push({
                      pts: this.initPTS,
                      dts: this.initPTS,
                      data: l,
                    }),
                  i = this.initPTS;
                d < g;

              ) {
                if (this.canParse(t, d)) {
                  var v = this.appendFrame(c, t, d);
                  v
                    ? (this.frameIndex++,
                      (i = v.sample.pts),
                      (r = d += v.length))
                    : (d = g);
                } else
                  n.canParse(t, d)
                    ? ((l = n.getID3Data(t, d)),
                      h.samples.push({ pts: i, dts: i, data: l }),
                      (r = d += l.length))
                    : d++;
                if (d === g && r !== g) {
                  var p = Object(o.sliceUint8)(t, r);
                  this.cachedData
                    ? (this.cachedData = Object(s.appendUint8Array)(
                        this.cachedData,
                        p
                      ))
                    : (this.cachedData = p);
                }
              }
              return {
                audioTrack: c,
                avcTrack: Object(a.dummyTrack)(),
                id3Track: h,
                textTrack: Object(a.dummyTrack)(),
              };
            }),
            (e.demuxSampleAes = function (t, e, r) {
              return Promise.reject(
                new Error(
                  "[" +
                    this +
                    "] This demuxer does not support Sample-AES decryption"
                )
              );
            }),
            (e.flush = function (t) {
              var e = this.cachedData;
              return (
                e && ((this.cachedData = null), this.demux(e, 0)),
                (this.frameIndex = 0),
                {
                  audioTrack: this._audioTrack,
                  avcTrack: Object(a.dummyTrack)(),
                  id3Track: this._id3Track,
                  textTrack: Object(a.dummyTrack)(),
                }
              );
            }),
            (e.destroy = function () {}),
            t
          );
        })(),
        u = function (t, e) {
          return Object(i.isFiniteNumber)(t) ? 90 * t : 9e4 * e;
        };
      e.default = l;
    },
    "./src/demux/chunk-cache.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "default", function () {
          return i;
        });
      var i = (function () {
        function t() {
          (this.chunks = []), (this.dataLength = 0);
        }
        var e = t.prototype;
        return (
          (e.push = function (t) {
            this.chunks.push(t), (this.dataLength += t.length);
          }),
          (e.flush = function () {
            var t,
              e = this.chunks,
              r = this.dataLength;
            return e.length
              ? ((t =
                  1 === e.length
                    ? e[0]
                    : (function (t, e) {
                        for (
                          var r = new Uint8Array(e), i = 0, n = 0;
                          n < t.length;
                          n++
                        ) {
                          var a = t[n];
                          r.set(a, i), (i += a.length);
                        }
                        return r;
                      })(e, r)),
                this.reset(),
                t)
              : new Uint8Array(0);
          }),
          (e.reset = function () {
            (this.chunks.length = 0), (this.dataLength = 0);
          }),
          t
        );
      })();
    },
    "./src/demux/dummy-demuxed-track.ts": function (t, e, r) {
      function i() {
        return {
          type: "",
          id: -1,
          pid: -1,
          inputTimeScale: 9e4,
          sequenceNumber: -1,
          samples: [],
          dropped: 0,
        };
      }
      r.r(e),
        r.d(e, "dummyTrack", function () {
          return i;
        });
    },
    "./src/demux/exp-golomb.ts": function (t, e, r) {
      r.r(e);
      var i = r("./src/utils/logger.ts"),
        n = (function () {
          function t(t) {
            (this.data = void 0),
              (this.bytesAvailable = void 0),
              (this.word = void 0),
              (this.bitsAvailable = void 0),
              (this.data = t),
              (this.bytesAvailable = t.byteLength),
              (this.word = 0),
              (this.bitsAvailable = 0);
          }
          var e = t.prototype;
          return (
            (e.loadWord = function () {
              var t = this.data,
                e = this.bytesAvailable,
                r = t.byteLength - e,
                i = new Uint8Array(4),
                n = Math.min(4, e);
              if (0 === n) throw new Error("no bytes available");
              i.set(t.subarray(r, r + n)),
                (this.word = new DataView(i.buffer).getUint32(0)),
                (this.bitsAvailable = 8 * n),
                (this.bytesAvailable -= n);
            }),
            (e.skipBits = function (t) {
              var e;
              this.bitsAvailable > t
                ? ((this.word <<= t), (this.bitsAvailable -= t))
                : ((t -= this.bitsAvailable),
                  (t -= (e = t >> 3) >> 3),
                  (this.bytesAvailable -= e),
                  this.loadWord(),
                  (this.word <<= t),
                  (this.bitsAvailable -= t));
            }),
            (e.readBits = function (t) {
              var e = Math.min(this.bitsAvailable, t),
                r = this.word >>> (32 - e);
              return (
                t > 32 &&
                  i.logger.error("Cannot read more than 32 bits at a time"),
                (this.bitsAvailable -= e),
                this.bitsAvailable > 0
                  ? (this.word <<= e)
                  : this.bytesAvailable > 0 && this.loadWord(),
                (e = t - e) > 0 && this.bitsAvailable
                  ? (r << e) | this.readBits(e)
                  : r
              );
            }),
            (e.skipLZ = function () {
              var t;
              for (t = 0; t < this.bitsAvailable; ++t)
                if (0 != (this.word & (2147483648 >>> t)))
                  return (this.word <<= t), (this.bitsAvailable -= t), t;
              return this.loadWord(), t + this.skipLZ();
            }),
            (e.skipUEG = function () {
              this.skipBits(1 + this.skipLZ());
            }),
            (e.skipEG = function () {
              this.skipBits(1 + this.skipLZ());
            }),
            (e.readUEG = function () {
              var t = this.skipLZ();
              return this.readBits(t + 1) - 1;
            }),
            (e.readEG = function () {
              var t = this.readUEG();
              return 1 & t ? (1 + t) >>> 1 : -1 * (t >>> 1);
            }),
            (e.readBoolean = function () {
              return 1 === this.readBits(1);
            }),
            (e.readUByte = function () {
              return this.readBits(8);
            }),
            (e.readUShort = function () {
              return this.readBits(16);
            }),
            (e.readUInt = function () {
              return this.readBits(32);
            }),
            (e.skipScalingList = function (t) {
              for (var e = 8, r = 8, i = 0; i < t; i++)
                0 !== r && (r = (e + this.readEG() + 256) % 256),
                  (e = 0 === r ? e : r);
            }),
            (e.readSPS = function () {
              var t,
                e,
                r,
                i = 0,
                n = 0,
                a = 0,
                s = 0,
                o = this.readUByte.bind(this),
                l = this.readBits.bind(this),
                u = this.readUEG.bind(this),
                d = this.readBoolean.bind(this),
                c = this.skipBits.bind(this),
                h = this.skipEG.bind(this),
                f = this.skipUEG.bind(this),
                g = this.skipScalingList.bind(this);
              o();
              var v = o();
              if (
                (l(5),
                c(3),
                o(),
                f(),
                100 === v ||
                  110 === v ||
                  122 === v ||
                  244 === v ||
                  44 === v ||
                  83 === v ||
                  86 === v ||
                  118 === v ||
                  128 === v)
              ) {
                var p = u();
                if ((3 === p && c(1), f(), f(), c(1), d()))
                  for (e = 3 !== p ? 8 : 12, r = 0; r < e; r++)
                    d() && g(r < 6 ? 16 : 64);
              }
              f();
              var m = u();
              if (0 === m) u();
              else if (1 === m)
                for (c(1), h(), h(), t = u(), r = 0; r < t; r++) h();
              f(), c(1);
              var y = u(),
                E = u(),
                T = l(1);
              0 === T && c(1),
                c(1),
                d() && ((i = u()), (n = u()), (a = u()), (s = u()));
              var S = [1, 1];
              if (d() && d())
                switch (o()) {
                  case 1:
                    S = [1, 1];
                    break;
                  case 2:
                    S = [12, 11];
                    break;
                  case 3:
                    S = [10, 11];
                    break;
                  case 4:
                    S = [16, 11];
                    break;
                  case 5:
                    S = [40, 33];
                    break;
                  case 6:
                    S = [24, 11];
                    break;
                  case 7:
                    S = [20, 11];
                    break;
                  case 8:
                    S = [32, 11];
                    break;
                  case 9:
                    S = [80, 33];
                    break;
                  case 10:
                    S = [18, 11];
                    break;
                  case 11:
                    S = [15, 11];
                    break;
                  case 12:
                    S = [64, 33];
                    break;
                  case 13:
                    S = [160, 99];
                    break;
                  case 14:
                    S = [4, 3];
                    break;
                  case 15:
                    S = [3, 2];
                    break;
                  case 16:
                    S = [2, 1];
                    break;
                  case 255:
                    S = [(o() << 8) | o(), (o() << 8) | o()];
                }
              return {
                width: Math.ceil(16 * (y + 1) - 2 * i - 2 * n),
                height: (2 - T) * (E + 1) * 16 - (T ? 2 : 4) * (a + s),
                pixelRatio: S,
              };
            }),
            (e.readSliceType = function () {
              return this.readUByte(), this.readUEG(), this.readUEG();
            }),
            t
          );
        })();
      e.default = n;
    },
    "./src/demux/id3.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "isHeader", function () {
          return n;
        }),
        r.d(e, "isFooter", function () {
          return a;
        }),
        r.d(e, "getID3Data", function () {
          return s;
        }),
        r.d(e, "canParse", function () {
          return l;
        }),
        r.d(e, "getTimeStamp", function () {
          return u;
        }),
        r.d(e, "isTimeStampFrame", function () {
          return d;
        }),
        r.d(e, "getID3Frames", function () {
          return h;
        }),
        r.d(e, "decodeFrame", function () {
          return f;
        }),
        r.d(e, "utf8ArrayToStr", function () {
          return y;
        }),
        r.d(e, "testables", function () {
          return E;
        });
      var i,
        n = function (t, e) {
          return (
            e + 10 <= t.length &&
            73 === t[e] &&
            68 === t[e + 1] &&
            51 === t[e + 2] &&
            t[e + 3] < 255 &&
            t[e + 4] < 255 &&
            t[e + 6] < 128 &&
            t[e + 7] < 128 &&
            t[e + 8] < 128 &&
            t[e + 9] < 128
          );
        },
        a = function (t, e) {
          return (
            e + 10 <= t.length &&
            51 === t[e] &&
            68 === t[e + 1] &&
            73 === t[e + 2] &&
            t[e + 3] < 255 &&
            t[e + 4] < 255 &&
            t[e + 6] < 128 &&
            t[e + 7] < 128 &&
            t[e + 8] < 128 &&
            t[e + 9] < 128
          );
        },
        s = function (t, e) {
          for (var r = e, i = 0; n(t, e); )
            (i += 10), (i += o(t, e + 6)), a(t, e + 10) && (i += 10), (e += i);
          if (i > 0) return t.subarray(r, r + i);
        },
        o = function (t, e) {
          var r = 0;
          return (
            (r = (127 & t[e]) << 21),
            (r |= (127 & t[e + 1]) << 14),
            (r |= (127 & t[e + 2]) << 7) | (127 & t[e + 3])
          );
        },
        l = function (t, e) {
          return n(t, e) && o(t, e + 6) + 10 <= t.length - e;
        },
        u = function (t) {
          for (var e = h(t), r = 0; r < e.length; r++) {
            var i = e[r];
            if (d(i)) return m(i);
          }
        },
        d = function (t) {
          return (
            t &&
            "PRIV" === t.key &&
            "com.apple.streaming.transportStreamTimestamp" === t.info
          );
        },
        c = function (t) {
          var e = String.fromCharCode(t[0], t[1], t[2], t[3]),
            r = o(t, 4);
          return { type: e, size: r, data: t.subarray(10, 10 + r) };
        },
        h = function (t) {
          for (var e = 0, r = []; n(t, e); ) {
            for (var i = o(t, e + 6), s = (e += 10) + i; e + 8 < s; ) {
              var l = c(t.subarray(e)),
                u = f(l);
              u && r.push(u), (e += l.size + 10);
            }
            a(t, e) && (e += 10);
          }
          return r;
        },
        f = function (t) {
          return "PRIV" === t.type ? g(t) : "W" === t.type[0] ? p(t) : v(t);
        },
        g = function (t) {
          if (!(t.size < 2)) {
            var e = y(t.data, !0),
              r = new Uint8Array(t.data.subarray(e.length + 1));
            return { key: t.type, info: e, data: r.buffer };
          }
        },
        v = function (t) {
          if (!(t.size < 2)) {
            if ("TXXX" === t.type) {
              var e = 1,
                r = y(t.data.subarray(e), !0);
              e += r.length + 1;
              var i = y(t.data.subarray(e));
              return { key: t.type, info: r, data: i };
            }
            var n = y(t.data.subarray(1));
            return { key: t.type, data: n };
          }
        },
        p = function (t) {
          if ("WXXX" === t.type) {
            if (t.size < 2) return;
            var e = 1,
              r = y(t.data.subarray(e), !0);
            e += r.length + 1;
            var i = y(t.data.subarray(e));
            return { key: t.type, info: r, data: i };
          }
          var n = y(t.data);
          return { key: t.type, data: n };
        },
        m = function (t) {
          if (8 === t.data.byteLength) {
            var e = new Uint8Array(t.data),
              r = 1 & e[3],
              i = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
            return (i /= 45), r && (i += 47721858.84), Math.round(i);
          }
        },
        y = function (t, e) {
          void 0 === e && (e = !1);
          var r =
            (i ||
              void 0 === self.TextDecoder ||
              (i = new self.TextDecoder("utf-8")),
            i);
          if (r) {
            var n = r.decode(t);
            if (e) {
              var a = n.indexOf("\0");
              return -1 !== a ? n.substring(0, a) : n;
            }
            return n.replace(/\0/g, "");
          }
          for (var s, o, l, u = t.length, d = "", c = 0; c < u; ) {
            if (0 === (s = t[c++]) && e) return d;
            if (0 !== s && 3 !== s)
              switch (s >> 4) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                  d += String.fromCharCode(s);
                  break;
                case 12:
                case 13:
                  (o = t[c++]),
                    (d += String.fromCharCode(((31 & s) << 6) | (63 & o)));
                  break;
                case 14:
                  (o = t[c++]),
                    (l = t[c++]),
                    (d += String.fromCharCode(
                      ((15 & s) << 12) | ((63 & o) << 6) | ((63 & l) << 0)
                    ));
              }
          }
          return d;
        },
        E = { decodeTextFrame: v };
    },
    "./src/demux/mp3demuxer.ts": function (t, e, r) {
      r.r(e);
      var i = r("./src/demux/base-audio-demuxer.ts"),
        n = r("./src/demux/id3.ts"),
        a = r("./src/utils/logger.ts"),
        s = r("./src/demux/mpegaudio.ts");
      function o(t, e) {
        return (o =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var l = (function (t) {
        var e, r;
        function i() {
          return t.apply(this, arguments) || this;
        }
        (r = t),
          ((e = i).prototype = Object.create(r.prototype)),
          (e.prototype.constructor = e),
          o(e, r);
        var l = i.prototype;
        return (
          (l.resetInitSegment = function (e, r, i) {
            t.prototype.resetInitSegment.call(this, e, r, i),
              (this._audioTrack = {
                container: "audio/mpeg",
                type: "audio",
                id: 0,
                pid: -1,
                sequenceNumber: 0,
                isAAC: !1,
                samples: [],
                manifestCodec: e,
                duration: i,
                inputTimeScale: 9e4,
                dropped: 0,
              });
          }),
          (i.probe = function (t) {
            if (!t) return !1;
            for (
              var e = (n.getID3Data(t, 0) || []).length, r = t.length;
              e < r;
              e++
            )
              if (s.probe(t, e))
                return a.logger.log("MPEG Audio sync word found !"), !0;
            return !1;
          }),
          (l.canParse = function (t, e) {
            return s.canParse(t, e);
          }),
          (l.appendFrame = function (t, e, r) {
            if (null !== this.initPTS)
              return s.appendFrame(t, e, r, this.initPTS, this.frameIndex);
          }),
          i
        );
      })(i.default);
      (l.minProbeByteLength = 4), (e.default = l);
    },
    "./src/demux/mp4demuxer.ts": function (t, e, r) {
      r.r(e);
      var i = r("./src/utils/mp4-tools.ts"),
        n = r("./src/demux/dummy-demuxed-track.ts"),
        a = (function () {
          function t(t, e) {
            (this.remainderData = null),
              (this.config = void 0),
              (this.config = e);
          }
          var e = t.prototype;
          return (
            (e.resetTimeStamp = function () {}),
            (e.resetInitSegment = function () {}),
            (e.resetContiguity = function () {}),
            (t.probe = function (t) {
              return (
                Object(i.findBox)(
                  { data: t, start: 0, end: Math.min(t.length, 16384) },
                  ["moof"]
                ).length > 0
              );
            }),
            (e.demux = function (t) {
              var e = t,
                r = Object(n.dummyTrack)();
              if (this.config.progressive) {
                this.remainderData &&
                  (e = Object(i.appendUint8Array)(this.remainderData, t));
                var a = Object(i.segmentValidRange)(e);
                (this.remainderData = a.remainder),
                  (r.samples = a.valid || new Uint8Array());
              } else r.samples = e;
              return {
                audioTrack: Object(n.dummyTrack)(),
                avcTrack: r,
                id3Track: Object(n.dummyTrack)(),
                textTrack: Object(n.dummyTrack)(),
              };
            }),
            (e.flush = function () {
              var t = Object(n.dummyTrack)();
              return (
                (t.samples = this.remainderData || new Uint8Array()),
                (this.remainderData = null),
                {
                  audioTrack: Object(n.dummyTrack)(),
                  avcTrack: t,
                  id3Track: Object(n.dummyTrack)(),
                  textTrack: Object(n.dummyTrack)(),
                }
              );
            }),
            (e.demuxSampleAes = function (t, e, r) {
              return Promise.reject(
                new Error(
                  "The MP4 demuxer does not support SAMPLE-AES decryption"
                )
              );
            }),
            (e.destroy = function () {}),
            t
          );
        })();
      (a.minProbeByteLength = 1024), (e.default = a);
    },
    "./src/demux/mpegaudio.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "appendFrame", function () {
          return l;
        }),
        r.d(e, "parseHeader", function () {
          return u;
        }),
        r.d(e, "isHeaderPattern", function () {
          return d;
        }),
        r.d(e, "isHeader", function () {
          return c;
        }),
        r.d(e, "canParse", function () {
          return h;
        }),
        r.d(e, "probe", function () {
          return f;
        });
      var i = null,
        n = [
          32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32,
          48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40,
          48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64,
          80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48,
          56, 64, 80, 96, 112, 128, 144, 160,
        ],
        a = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
        s = [
          [0, 72, 144, 12],
          [0, 0, 0, 0],
          [0, 72, 144, 12],
          [0, 144, 144, 12],
        ],
        o = [0, 1, 1, 4];
      function l(t, e, r, i, n) {
        if (!(r + 24 > e.length)) {
          var a = u(e, r);
          if (a && r + a.frameLength <= e.length) {
            var s = i + n * ((9e4 * a.samplesPerFrame) / a.sampleRate),
              o = { unit: e.subarray(r, r + a.frameLength), pts: s, dts: s };
            return (
              (t.config = []),
              (t.channelCount = a.channelCount),
              (t.samplerate = a.sampleRate),
              t.samples.push(o),
              { sample: o, length: a.frameLength, missing: 0 }
            );
          }
        }
      }
      function u(t, e) {
        var r = (t[e + 1] >> 3) & 3,
          l = (t[e + 1] >> 1) & 3,
          u = (t[e + 2] >> 4) & 15,
          d = (t[e + 2] >> 2) & 3;
        if (1 !== r && 0 !== u && 15 !== u && 3 !== d) {
          var c = (t[e + 2] >> 1) & 1,
            h = t[e + 3] >> 6,
            f = 1e3 * n[14 * (3 === r ? 3 - l : 3 === l ? 3 : 4) + u - 1],
            g = a[3 * (3 === r ? 0 : 2 === r ? 1 : 2) + d],
            v = 3 === h ? 1 : 2,
            p = s[r][l],
            m = o[l],
            y = 8 * p * m,
            E = Math.floor((p * f) / g + c) * m;
          if (null === i) {
            var T = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
            i = T ? parseInt(T[1]) : 0;
          }
          return (
            !!i &&
              i <= 87 &&
              2 === l &&
              f >= 224e3 &&
              0 === h &&
              (t[e + 3] = 128 | t[e + 3]),
            {
              sampleRate: g,
              channelCount: v,
              frameLength: E,
              samplesPerFrame: y,
            }
          );
        }
      }
      function d(t, e) {
        return 255 === t[e] && 224 == (224 & t[e + 1]) && 0 != (6 & t[e + 1]);
      }
      function c(t, e) {
        return e + 1 < t.length && d(t, e);
      }
      function h(t, e) {
        return d(t, e) && 4 <= t.length - e;
      }
      function f(t, e) {
        if (e + 1 < t.length && d(t, e)) {
          var r = u(t, e),
            i = 4;
          null != r && r.frameLength && (i = r.frameLength);
          var n = e + i;
          return n === t.length || c(t, n);
        }
        return !1;
      }
    },
    "./src/demux/sample-aes.ts": function (t, e, r) {
      r.r(e);
      var i = r("./src/crypt/decrypter.ts"),
        n = r("./src/demux/tsdemuxer.ts"),
        a = (function () {
          function t(t, e, r) {
            (this.keyData = void 0),
              (this.decrypter = void 0),
              (this.keyData = r),
              (this.decrypter = new i.default(t, e, {
                removePKCS7Padding: !1,
              }));
          }
          var e = t.prototype;
          return (
            (e.decryptBuffer = function (t, e) {
              this.decrypter.decrypt(
                t,
                this.keyData.key.buffer,
                this.keyData.iv.buffer,
                e
              );
            }),
            (e.decryptAacSample = function (t, e, r, i) {
              var n = t[e].unit,
                a = n.subarray(16, n.length - (n.length % 16)),
                s = a.buffer.slice(a.byteOffset, a.byteOffset + a.length),
                o = this;
              this.decryptBuffer(s, function (a) {
                var s = new Uint8Array(a);
                n.set(s, 16), i || o.decryptAacSamples(t, e + 1, r);
              });
            }),
            (e.decryptAacSamples = function (t, e, r) {
              for (; ; e++) {
                if (e >= t.length) return void r();
                if (!(t[e].unit.length < 32)) {
                  var i = this.decrypter.isSync();
                  if ((this.decryptAacSample(t, e, r, i), !i)) return;
                }
              }
            }),
            (e.getAvcEncryptedData = function (t) {
              for (
                var e = 16 * Math.floor((t.length - 48) / 160) + 16,
                  r = new Int8Array(e),
                  i = 0,
                  n = 32;
                n <= t.length - 16;
                n += 160, i += 16
              )
                r.set(t.subarray(n, n + 16), i);
              return r;
            }),
            (e.getAvcDecryptedUnit = function (t, e) {
              for (
                var r = new Uint8Array(e), i = 0, n = 32;
                n <= t.length - 16;
                n += 160, i += 16
              )
                t.set(r.subarray(i, i + 16), n);
              return t;
            }),
            (e.decryptAvcSample = function (t, e, r, i, a, s) {
              var o = Object(n.discardEPB)(a.data),
                l = this.getAvcEncryptedData(o),
                u = this;
              this.decryptBuffer(l.buffer, function (n) {
                (a.data = u.getAvcDecryptedUnit(o, n)),
                  s || u.decryptAvcSamples(t, e, r + 1, i);
              });
            }),
            (e.decryptAvcSamples = function (t, e, r, i) {
              if (t instanceof Uint8Array)
                throw new Error("Cannot decrypt samples of type Uint8Array");
              for (; ; e++, r = 0) {
                if (e >= t.length) return void i();
                for (var n = t[e].units; !(r >= n.length); r++) {
                  var a = n[r];
                  if (
                    !(a.data.length <= 48 || (1 !== a.type && 5 !== a.type))
                  ) {
                    var s = this.decrypter.isSync();
                    if ((this.decryptAvcSample(t, e, r, i, a, s), !s)) return;
                  }
                }
              }
            }),
            t
          );
        })();
      e.default = a;
    },
    "./src/demux/transmuxer-interface.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "default", function () {
          return c;
        });
      var i = r("./node_modules/webworkify-webpack/index.js"),
        n = r("./src/events.ts"),
        a = r("./src/demux/transmuxer.ts"),
        s = r("./src/utils/logger.ts"),
        o = r("./src/errors.ts"),
        l = r("./src/utils/mediasource-helper.ts"),
        u = r("./node_modules/eventemitter3/index.js"),
        d = Object(l.getMediaSource)() || {
          isTypeSupported: function () {
            return !1;
          },
        },
        c = (function () {
          function t(t, e, r, l) {
            var c = this;
            (this.hls = void 0),
              (this.id = void 0),
              (this.observer = void 0),
              (this.frag = null),
              (this.part = null),
              (this.worker = void 0),
              (this.onwmsg = void 0),
              (this.transmuxer = null),
              (this.onTransmuxComplete = void 0),
              (this.onFlush = void 0),
              (this.hls = t),
              (this.id = e),
              (this.onTransmuxComplete = r),
              (this.onFlush = l);
            var h = t.config,
              f = function (e, r) {
                ((r = r || {}).frag = c.frag), (r.id = c.id), t.trigger(e, r);
              };
            (this.observer = new u.EventEmitter()),
              this.observer.on(n.Events.FRAG_DECRYPTED, f),
              this.observer.on(n.Events.ERROR, f);
            var g = {
                mp4: d.isTypeSupported("video/mp4"),
                mpeg: d.isTypeSupported("audio/mpeg"),
                mp3: d.isTypeSupported('audio/mp4; codecs="mp3"'),
              },
              v = navigator.vendor;
            if (h.enableWorker && "undefined" != typeof Worker) {
              var p;
              s.logger.log("demuxing in webworker");
              try {
                (p = this.worker = i("./src/demux/transmuxer-worker.ts")),
                  (this.onwmsg = this.onWorkerMessage.bind(this)),
                  p.addEventListener("message", this.onwmsg),
                  (p.onerror = function (e) {
                    t.trigger(n.Events.ERROR, {
                      type: o.ErrorTypes.OTHER_ERROR,
                      details: o.ErrorDetails.INTERNAL_EXCEPTION,
                      fatal: !0,
                      event: "demuxerWorker",
                      error: new Error(
                        e.message + "  (" + e.filename + ":" + e.lineno + ")"
                      ),
                    });
                  }),
                  p.postMessage({
                    cmd: "init",
                    typeSupported: g,
                    vendor: v,
                    id: e,
                    config: JSON.stringify(h),
                  });
              } catch (m) {
                s.logger.warn("Error in worker:", m),
                  s.logger.error(
                    "Error while initializing DemuxerWorker, fallback to inline"
                  ),
                  p && self.URL.revokeObjectURL(p.objectURL),
                  (this.transmuxer = new a.default(this.observer, g, h, v, e)),
                  (this.worker = null);
              }
            } else this.transmuxer = new a.default(this.observer, g, h, v, e);
          }
          var e = t.prototype;
          return (
            (e.destroy = function () {
              var t = this.worker;
              if (t)
                t.removeEventListener("message", this.onwmsg),
                  t.terminate(),
                  (this.worker = null);
              else {
                var e = this.transmuxer;
                e && (e.destroy(), (this.transmuxer = null));
              }
              var r = this.observer;
              r && r.removeAllListeners(), (this.observer = null);
            }),
            (e.push = function (t, e, r, i, n, o, l, u, d, c) {
              var h = this;
              d.transmuxing.start = self.performance.now();
              var f = this.transmuxer,
                g = this.worker,
                v = o ? o.start : n.start,
                p = n.decryptdata,
                m = this.frag,
                y = !(m && n.cc === m.cc),
                E = !(m && d.level === m.level),
                T = m ? d.sn - m.sn : -1,
                S = this.part ? d.part - this.part.index : 1,
                b = !E && (1 === T || (0 === T && 1 === S)),
                L = self.performance.now();
              (E || T || 0 === n.stats.parsing.start) &&
                (n.stats.parsing.start = L),
                !o || (!S && b) || (o.stats.parsing.start = L);
              var A = new a.TransmuxState(y, b, u, E, v);
              if (!b || y) {
                s.logger.log(
                  "[transmuxer-interface, " +
                    n.type +
                    "]: Starting new transmux session for sn: " +
                    d.sn +
                    " p: " +
                    d.part +
                    " level: " +
                    d.level +
                    " id: " +
                    d.id +
                    "\n        discontinuity: " +
                    y +
                    "\n        trackSwitch: " +
                    E +
                    "\n        contiguous: " +
                    b +
                    "\n        accurateTimeOffset: " +
                    u +
                    "\n        timeOffset: " +
                    v
                );
                var k = new a.TransmuxConfig(r, i, e, l, c);
                this.configureTransmuxer(k);
              }
              if (((this.frag = n), (this.part = o), g))
                g.postMessage(
                  {
                    cmd: "demux",
                    data: t,
                    decryptdata: p,
                    chunkMeta: d,
                    state: A,
                  },
                  t instanceof ArrayBuffer ? [t] : []
                );
              else if (f) {
                var D = f.push(t, p, d, A);
                Object(a.isPromise)(D)
                  ? D.then(function (t) {
                      h.handleTransmuxComplete(t);
                    })
                  : this.handleTransmuxComplete(D);
              }
            }),
            (e.flush = function (t) {
              var e = this;
              t.transmuxing.start = self.performance.now();
              var r = this.transmuxer,
                i = this.worker;
              if (i) i.postMessage({ cmd: "flush", chunkMeta: t });
              else if (r) {
                var n = r.flush(t);
                Object(a.isPromise)(n)
                  ? n.then(function (r) {
                      e.handleFlushResult(r, t);
                    })
                  : this.handleFlushResult(n, t);
              }
            }),
            (e.handleFlushResult = function (t, e) {
              var r = this;
              t.forEach(function (t) {
                r.handleTransmuxComplete(t);
              }),
                this.onFlush(e);
            }),
            (e.onWorkerMessage = function (t) {
              var e = t.data,
                r = this.hls;
              switch (e.event) {
                case "init":
                  self.URL.revokeObjectURL(this.worker.objectURL);
                  break;
                case "transmuxComplete":
                  this.handleTransmuxComplete(e.data);
                  break;
                case "flush":
                  this.onFlush(e.data);
                  break;
                default:
                  (e.data = e.data || {}),
                    (e.data.frag = this.frag),
                    (e.data.id = this.id),
                    r.trigger(e.event, e.data);
              }
            }),
            (e.configureTransmuxer = function (t) {
              var e = this.worker,
                r = this.transmuxer;
              e
                ? e.postMessage({ cmd: "configure", config: t })
                : r && r.configure(t);
            }),
            (e.handleTransmuxComplete = function (t) {
              (t.chunkMeta.transmuxing.end = self.performance.now()),
                this.onTransmuxComplete(t);
            }),
            t
          );
        })();
    },
    "./src/demux/transmuxer-worker.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "default", function () {
          return o;
        });
      var i = r("./src/demux/transmuxer.ts"),
        n = r("./src/events.ts"),
        a = r("./src/utils/logger.ts"),
        s = r("./node_modules/eventemitter3/index.js");
      function o(t) {
        var e = new s.EventEmitter(),
          r = function (e, r) {
            t.postMessage({ event: e, data: r });
          };
        e.on(n.Events.FRAG_DECRYPTED, r),
          e.on(n.Events.ERROR, r),
          t.addEventListener("message", function (n) {
            var s = n.data;
            switch (s.cmd) {
              case "init":
                var o = JSON.parse(s.config);
                (t.transmuxer = new i.default(
                  e,
                  s.typeSupported,
                  o,
                  s.vendor,
                  s.id
                )),
                  Object(a.enableLogs)(o.debug),
                  r("init", null);
                break;
              case "configure":
                t.transmuxer.configure(s.config);
                break;
              case "demux":
                var u = t.transmuxer.push(
                  s.data,
                  s.decryptdata,
                  s.chunkMeta,
                  s.state
                );
                Object(i.isPromise)(u)
                  ? u.then(function (e) {
                      l(t, e);
                    })
                  : l(t, u);
                break;
              case "flush":
                var c = s.chunkMeta,
                  h = t.transmuxer.flush(c);
                Object(i.isPromise)(h)
                  ? h.then(function (e) {
                      d(t, e, c);
                    })
                  : d(t, h, c);
            }
          });
      }
      function l(t, e) {
        if (
          (r = e.remuxResult).audio ||
          r.video ||
          r.text ||
          r.id3 ||
          r.initSegment
        ) {
          var r,
            i = [],
            n = e.remuxResult,
            a = n.audio,
            s = n.video;
          a && u(i, a),
            s && u(i, s),
            t.postMessage({ event: "transmuxComplete", data: e }, i);
        }
      }
      function u(t, e) {
        e.data1 && t.push(e.data1.buffer), e.data2 && t.push(e.data2.buffer);
      }
      function d(t, e, r) {
        e.forEach(function (e) {
          l(t, e);
        }),
          t.postMessage({ event: "flush", data: r });
      }
    },
    "./src/demux/transmuxer.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "default", function () {
          return y;
        }),
        r.d(e, "isPromise", function () {
          return T;
        }),
        r.d(e, "TransmuxConfig", function () {
          return S;
        }),
        r.d(e, "TransmuxState", function () {
          return b;
        });
      var i,
        n = r("./src/events.ts"),
        a = r("./src/errors.ts"),
        s = r("./src/crypt/decrypter.ts"),
        o = r("./src/demux/aacdemuxer.ts"),
        l = r("./src/demux/mp4demuxer.ts"),
        u = r("./src/demux/tsdemuxer.ts"),
        d = r("./src/demux/mp3demuxer.ts"),
        c = r("./src/remux/mp4-remuxer.ts"),
        h = r("./src/remux/passthrough-remuxer.ts"),
        f = r("./src/demux/chunk-cache.ts"),
        g = r("./src/utils/mp4-tools.ts"),
        v = r("./src/utils/logger.ts");
      try {
        i = self.performance.now.bind(self.performance);
      } catch (L) {
        v.logger.debug("Unable to use Performance API on this environment"),
          (i = self.Date.now);
      }
      var p = [
          { demux: u.default, remux: c.default },
          { demux: l.default, remux: h.default },
          { demux: o.default, remux: c.default },
          { demux: d.default, remux: c.default },
        ],
        m = 1024;
      p.forEach(function (t) {
        var e = t.demux;
        m = Math.max(m, e.minProbeByteLength);
      });
      var y = (function () {
          function t(t, e, r, i, n) {
            (this.observer = void 0),
              (this.typeSupported = void 0),
              (this.config = void 0),
              (this.vendor = void 0),
              (this.id = void 0),
              (this.demuxer = void 0),
              (this.remuxer = void 0),
              (this.decrypter = void 0),
              (this.probe = void 0),
              (this.decryptionPromise = null),
              (this.transmuxConfig = void 0),
              (this.currentTransmuxState = void 0),
              (this.cache = new f.default()),
              (this.observer = t),
              (this.typeSupported = e),
              (this.config = r),
              (this.vendor = i),
              (this.id = n);
          }
          var e = t.prototype;
          return (
            (e.configure = function (t) {
              (this.transmuxConfig = t),
                this.decrypter && this.decrypter.reset();
            }),
            (e.push = function (t, e, r, n) {
              var a = this,
                s = r.transmuxing;
              s.executeStart = i();
              var o = new Uint8Array(t),
                l = this.cache,
                u = this.config,
                d = this.currentTransmuxState,
                c = this.transmuxConfig;
              n && (this.currentTransmuxState = n);
              var h,
                f,
                v =
                  ((h = e),
                  (f = null),
                  o.byteLength > 0 &&
                    null != h &&
                    null != h.key &&
                    null !== h.iv &&
                    null != h.method &&
                    (f = h),
                  f);
              if (v && "AES-128" === v.method) {
                var p = this.getDecrypter();
                if (!u.enableSoftwareAES)
                  return (
                    (this.decryptionPromise = p
                      .webCryptoDecrypt(o, v.key.buffer, v.iv.buffer)
                      .then(function (t) {
                        var e = a.push(t, null, r);
                        return (a.decryptionPromise = null), e;
                      })),
                    this.decryptionPromise
                  );
                var m = p.softwareDecrypt(o, v.key.buffer, v.iv.buffer);
                if (!m) return (s.executeEnd = i()), E(r);
                o = new Uint8Array(m);
              }
              var y = n || d,
                T = y.contiguous,
                S = y.discontinuity,
                b = y.trackSwitch,
                L = y.accurateTimeOffset,
                A = y.timeOffset,
                k = c.audioCodec,
                D = c.videoCodec,
                R = c.defaultInitPts,
                _ = c.duration,
                I = c.initSegmentData;
              if (
                ((S || b) && this.resetInitSegment(I, k, D, _),
                S && this.resetInitialTimestamp(R),
                T || this.resetContiguity(),
                this.needsProbing(o, S, b))
              ) {
                if (l.dataLength) {
                  var C = l.flush();
                  o = Object(g.appendUint8Array)(C, o);
                }
                this.configureTransmuxer(o, c);
              }
              var w = this.transmux(o, v, A, L, r),
                x = this.currentTransmuxState;
              return (
                (x.contiguous = !0),
                (x.discontinuity = !1),
                (x.trackSwitch = !1),
                (s.executeEnd = i()),
                w
              );
            }),
            (e.flush = function (t) {
              var e = this,
                r = t.transmuxing;
              r.executeStart = i();
              var s = this.decrypter,
                o = this.cache,
                l = this.currentTransmuxState,
                u = this.decryptionPromise;
              if (u)
                return u.then(function () {
                  return e.flush(t);
                });
              var d = [],
                c = l.timeOffset;
              if (s) {
                var h = s.flush();
                h && d.push(this.push(h, null, t));
              }
              var f = o.dataLength;
              o.reset();
              var g = this.demuxer,
                v = this.remuxer;
              if (!g || !v)
                return (
                  f >= m &&
                    this.observer.emit(n.Events.ERROR, n.Events.ERROR, {
                      type: a.ErrorTypes.MEDIA_ERROR,
                      details: a.ErrorDetails.FRAG_PARSING_ERROR,
                      fatal: !0,
                      reason: "no demux matching with content found",
                    }),
                  (r.executeEnd = i()),
                  [E(t)]
                );
              var p = g.flush(c);
              return T(p)
                ? p.then(function (r) {
                    return e.flushRemux(d, r, t), d;
                  })
                : (this.flushRemux(d, p, t), d);
            }),
            (e.flushRemux = function (t, e, r) {
              var n = e.audioTrack,
                a = e.avcTrack,
                s = e.id3Track,
                o = e.textTrack,
                l = this.currentTransmuxState,
                u = l.accurateTimeOffset,
                d = l.timeOffset;
              v.logger.log(
                "[transmuxer.ts]: Flushed fragment " +
                  r.sn +
                  (r.part > -1 ? " p: " + r.part : "") +
                  " of level " +
                  r.level
              );
              var c = this.remuxer.remux(n, a, s, o, d, u, !0, this.id);
              t.push({ remuxResult: c, chunkMeta: r }),
                (r.transmuxing.executeEnd = i());
            }),
            (e.resetInitialTimestamp = function (t) {
              var e = this.demuxer,
                r = this.remuxer;
              e && r && (e.resetTimeStamp(t), r.resetTimeStamp(t));
            }),
            (e.resetContiguity = function () {
              var t = this.demuxer,
                e = this.remuxer;
              t && e && (t.resetContiguity(), e.resetNextTimestamp());
            }),
            (e.resetInitSegment = function (t, e, r, i) {
              var n = this.demuxer,
                a = this.remuxer;
              n &&
                a &&
                (n.resetInitSegment(e, r, i), a.resetInitSegment(t, e, r));
            }),
            (e.destroy = function () {
              this.demuxer && (this.demuxer.destroy(), (this.demuxer = void 0)),
                this.remuxer &&
                  (this.remuxer.destroy(), (this.remuxer = void 0));
            }),
            (e.transmux = function (t, e, r, i, n) {
              return e && "SAMPLE-AES" === e.method
                ? this.transmuxSampleAes(t, e, r, i, n)
                : this.transmuxUnencrypted(t, r, i, n);
            }),
            (e.transmuxUnencrypted = function (t, e, r, i) {
              var n = this.demuxer.demux(t, e, !1, !this.config.progressive),
                a = n.audioTrack,
                s = n.avcTrack,
                o = n.id3Track,
                l = n.textTrack;
              return {
                remuxResult: this.remuxer.remux(a, s, o, l, e, r, !1, this.id),
                chunkMeta: i,
              };
            }),
            (e.transmuxSampleAes = function (t, e, r, i, n) {
              var a = this;
              return this.demuxer.demuxSampleAes(t, e, r).then(function (t) {
                return {
                  remuxResult: a.remuxer.remux(
                    t.audioTrack,
                    t.avcTrack,
                    t.id3Track,
                    t.textTrack,
                    r,
                    i,
                    !1,
                    a.id
                  ),
                  chunkMeta: n,
                };
              });
            }),
            (e.configureTransmuxer = function (t, e) {
              for (
                var r,
                  i = this.config,
                  n = this.observer,
                  a = this.typeSupported,
                  s = this.vendor,
                  o = e.audioCodec,
                  u = e.defaultInitPts,
                  d = e.duration,
                  c = e.initSegmentData,
                  f = e.videoCodec,
                  g = 0,
                  m = p.length;
                g < m;
                g++
              )
                if (p[g].demux.probe(t)) {
                  r = p[g];
                  break;
                }
              r ||
                (v.logger.warn(
                  "Failed to find demuxer by probing frag, treating as mp4 passthrough"
                ),
                (r = { demux: l.default, remux: h.default }));
              var y = this.demuxer,
                E = this.remuxer,
                T = r.remux,
                S = r.demux;
              (E && E instanceof T) || (this.remuxer = new T(n, i, a, s)),
                (y && y instanceof S) ||
                  ((this.demuxer = new S(n, i, a)), (this.probe = S.probe)),
                this.resetInitSegment(c, o, f, d),
                this.resetInitialTimestamp(u);
            }),
            (e.needsProbing = function (t, e, r) {
              return !this.demuxer || !this.remuxer || e || r;
            }),
            (e.getDecrypter = function () {
              var t = this.decrypter;
              return (
                t ||
                  (t = this.decrypter =
                    new s.default(this.observer, this.config)),
                t
              );
            }),
            t
          );
        })(),
        E = function (t) {
          return { remuxResult: {}, chunkMeta: t };
        };
      function T(t) {
        return "then" in t && t.then instanceof Function;
      }
      var S = function (t, e, r, i, n) {
          (this.audioCodec = void 0),
            (this.videoCodec = void 0),
            (this.initSegmentData = void 0),
            (this.duration = void 0),
            (this.defaultInitPts = void 0),
            (this.audioCodec = t),
            (this.videoCodec = e),
            (this.initSegmentData = r),
            (this.duration = i),
            (this.defaultInitPts = n);
        },
        b = function (t, e, r, i, n) {
          (this.discontinuity = void 0),
            (this.contiguous = void 0),
            (this.accurateTimeOffset = void 0),
            (this.trackSwitch = void 0),
            (this.timeOffset = void 0),
            (this.discontinuity = t),
            (this.contiguous = e),
            (this.accurateTimeOffset = r),
            (this.trackSwitch = i),
            (this.timeOffset = n);
        };
    },
    "./src/demux/tsdemuxer.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "discardEPB", function () {
          return T;
        });
      var i = r("./src/demux/adts.ts"),
        n = r("./src/demux/mpegaudio.ts"),
        a = r("./src/demux/exp-golomb.ts"),
        s = r("./src/demux/id3.ts"),
        o = r("./src/demux/sample-aes.ts"),
        l = r("./src/events.ts"),
        u = r("./src/utils/mp4-tools.ts"),
        d = r("./src/utils/logger.ts"),
        c = r("./src/errors.ts"),
        h = { video: 1, audio: 2, id3: 3, text: 4 },
        f = (function () {
          function t(t, e, r) {
            (this.observer = void 0),
              (this.config = void 0),
              (this.typeSupported = void 0),
              (this.sampleAes = null),
              (this.pmtParsed = !1),
              (this.audioCodec = void 0),
              (this.videoCodec = void 0),
              (this._duration = 0),
              (this.aacLastPTS = null),
              (this._initPTS = null),
              (this._initDTS = null),
              (this._pmtId = -1),
              (this._avcTrack = void 0),
              (this._audioTrack = void 0),
              (this._id3Track = void 0),
              (this._txtTrack = void 0),
              (this.aacOverFlow = null),
              (this.avcSample = null),
              (this.remainderData = null),
              (this.observer = t),
              (this.config = e),
              (this.typeSupported = r);
          }
          (t.probe = function (e) {
            var r = t.syncOffset(e);
            return !(
              r < 0 ||
              (r &&
                d.logger.warn(
                  "MPEG2-TS detected but first sync word found @ offset " +
                    r +
                    ", junk ahead ?"
                ),
              0)
            );
          }),
            (t.syncOffset = function (t) {
              for (var e = Math.min(1e3, t.length - 564), r = 0; r < e; ) {
                if (71 === t[r] && 71 === t[r + 188] && 71 === t[r + 376])
                  return r;
                r++;
              }
              return -1;
            }),
            (t.createTrack = function (t, e) {
              return {
                container:
                  "video" === t || "audio" === t ? "video/mp2t" : void 0,
                type: t,
                id: h[t],
                pid: -1,
                inputTimeScale: 9e4,
                sequenceNumber: 0,
                samples: [],
                dropped: 0,
                duration: "audio" === t ? e : void 0,
              };
            });
          var e = t.prototype;
          return (
            (e.resetInitSegment = function (e, r, i) {
              (this.pmtParsed = !1),
                (this._pmtId = -1),
                (this._avcTrack = t.createTrack("video", i)),
                (this._audioTrack = t.createTrack("audio", i)),
                (this._id3Track = t.createTrack("id3", i)),
                (this._txtTrack = t.createTrack("text", i)),
                (this._audioTrack.isAAC = !0),
                (this.aacOverFlow = null),
                (this.aacLastPTS = null),
                (this.avcSample = null),
                (this.audioCodec = e),
                (this.videoCodec = r),
                (this._duration = i);
            }),
            (e.resetTimeStamp = function () {}),
            (e.resetContiguity = function () {
              var t = this._audioTrack,
                e = this._avcTrack,
                r = this._id3Track;
              t && (t.pesData = null),
                e && (e.pesData = null),
                r && (r.pesData = null),
                (this.aacOverFlow = null),
                (this.aacLastPTS = null);
            }),
            (e.demux = function (e, r, i, n) {
              var a;
              void 0 === i && (i = !1),
                void 0 === n && (n = !1),
                i || (this.sampleAes = null);
              var s = this._avcTrack,
                o = this._audioTrack,
                h = this._id3Track,
                f = s.pid,
                g = s.pesData,
                y = o.pid,
                E = h.pid,
                T = o.pesData,
                S = h.pesData,
                b = !1,
                L = this.pmtParsed,
                A = this._pmtId,
                k = e.length;
              if (
                (this.remainderData &&
                  ((k = (e = Object(u.appendUint8Array)(this.remainderData, e))
                    .length),
                  (this.remainderData = null)),
                k < 188 && !n)
              )
                return (
                  (this.remainderData = e),
                  {
                    audioTrack: o,
                    avcTrack: s,
                    id3Track: h,
                    textTrack: this._txtTrack,
                  }
                );
              var D = Math.max(0, t.syncOffset(e));
              (k -= (k + D) % 188) < e.byteLength &&
                !n &&
                (this.remainderData = new Uint8Array(
                  e.buffer,
                  k,
                  e.buffer.byteLength - k
                ));
              for (var R = D; R < k; R += 188)
                if (71 === e[R]) {
                  var _ = !!(64 & e[R + 1]),
                    I = ((31 & e[R + 1]) << 8) + e[R + 2],
                    C = void 0;
                  if ((48 & e[R + 3]) >> 4 > 1) {
                    if ((C = R + 5 + e[R + 4]) === R + 188) continue;
                  } else C = R + 4;
                  switch (I) {
                    case f:
                      _ &&
                        (g && (a = m(g)) && this.parseAVCPES(a, !1),
                        (g = { data: [], size: 0 })),
                        g &&
                          (g.data.push(e.subarray(C, R + 188)),
                          (g.size += R + 188 - C));
                      break;
                    case y:
                      _ &&
                        (T &&
                          (a = m(T)) &&
                          (o.isAAC
                            ? this.parseAACPES(a)
                            : this.parseMPEGPES(a)),
                        (T = { data: [], size: 0 })),
                        T &&
                          (T.data.push(e.subarray(C, R + 188)),
                          (T.size += R + 188 - C));
                      break;
                    case E:
                      _ &&
                        (S && (a = m(S)) && this.parseID3PES(a),
                        (S = { data: [], size: 0 })),
                        S &&
                          (S.data.push(e.subarray(C, R + 188)),
                          (S.size += R + 188 - C));
                      break;
                    case 0:
                      _ && (C += e[C] + 1), (A = this._pmtId = v(e, C));
                      break;
                    case A:
                      _ && (C += e[C] + 1);
                      var w = p(
                        e,
                        C,
                        !0 === this.typeSupported.mpeg ||
                          !0 === this.typeSupported.mp3,
                        i
                      );
                      (f = w.avc) > 0 && (s.pid = f),
                        (y = w.audio) > 0 && ((o.pid = y), (o.isAAC = w.isAAC)),
                        (E = w.id3) > 0 && (h.pid = E),
                        b &&
                          !L &&
                          (d.logger.log("reparse from beginning"),
                          (b = !1),
                          (R = D - 188)),
                        (L = this.pmtParsed = !0);
                      break;
                    case 17:
                    case 8191:
                      break;
                    default:
                      b = !0;
                  }
                } else
                  this.observer.emit(l.Events.ERROR, l.Events.ERROR, {
                    type: c.ErrorTypes.MEDIA_ERROR,
                    details: c.ErrorDetails.FRAG_PARSING_ERROR,
                    fatal: !1,
                    reason: "TS packet did not start with 0x47",
                  });
              (s.pesData = g), (o.pesData = T), (h.pesData = S);
              var x = {
                audioTrack: o,
                avcTrack: s,
                id3Track: h,
                textTrack: this._txtTrack,
              };
              return n && this.extractRemainingSamples(x), x;
            }),
            (e.flush = function () {
              var t,
                e = this.remainderData;
              return (
                (this.remainderData = null),
                (t = e
                  ? this.demux(e, -1, !1, !0)
                  : {
                      audioTrack: this._audioTrack,
                      avcTrack: this._avcTrack,
                      textTrack: this._txtTrack,
                      id3Track: this._id3Track,
                    }),
                this.extractRemainingSamples(t),
                this.sampleAes ? this.decrypt(t, this.sampleAes) : t
              );
            }),
            (e.extractRemainingSamples = function (t) {
              var e,
                r = t.audioTrack,
                i = t.avcTrack,
                n = t.id3Track,
                a = i.pesData,
                s = r.pesData,
                o = n.pesData;
              a && (e = m(a))
                ? (this.parseAVCPES(e, !0), (i.pesData = null))
                : (i.pesData = a),
                s && (e = m(s))
                  ? (r.isAAC ? this.parseAACPES(e) : this.parseMPEGPES(e),
                    (r.pesData = null))
                  : (null != s &&
                      s.size &&
                      d.logger.log(
                        "last AAC PES packet truncated,might overlap between fragments"
                      ),
                    (r.pesData = s)),
                o && (e = m(o))
                  ? (this.parseID3PES(e), (n.pesData = null))
                  : (n.pesData = o);
            }),
            (e.demuxSampleAes = function (t, e, r) {
              var i = this.demux(t, r, !0, !this.config.progressive),
                n = (this.sampleAes = new o.default(
                  this.observer,
                  this.config,
                  e
                ));
              return this.decrypt(i, n);
            }),
            (e.decrypt = function (t, e) {
              return new Promise(function (r) {
                var i = t.audioTrack,
                  n = t.avcTrack;
                i.samples && i.isAAC
                  ? e.decryptAacSamples(i.samples, 0, function () {
                      n.samples
                        ? e.decryptAvcSamples(n.samples, 0, 0, function () {
                            r(t);
                          })
                        : r(t);
                    })
                  : n.samples &&
                    e.decryptAvcSamples(n.samples, 0, 0, function () {
                      r(t);
                    });
              });
            }),
            (e.destroy = function () {
              (this._initPTS = this._initDTS = null), (this._duration = 0);
            }),
            (e.parseAVCPES = function (t, e) {
              var r,
                i = this,
                n = this._avcTrack,
                o = this.parseAVCNALu(t.data),
                l = this.avcSample,
                u = !1;
              (t.data = null),
                l &&
                  o.length &&
                  !n.audFound &&
                  (y(l, n), (l = this.avcSample = g(!1, t.pts, t.dts, ""))),
                o.forEach(function (e) {
                  switch (e.type) {
                    case 1:
                      (r = !0),
                        l || (l = i.avcSample = g(!0, t.pts, t.dts, "")),
                        (l.frame = !0);
                      var o = e.data;
                      if (u && o.length > 4) {
                        var d = new a.default(o).readSliceType();
                        (2 !== d && 4 !== d && 7 !== d && 9 !== d) ||
                          (l.key = !0);
                      }
                      break;
                    case 5:
                      (r = !0),
                        l || (l = i.avcSample = g(!0, t.pts, t.dts, "")),
                        (l.key = !0),
                        (l.frame = !0);
                      break;
                    case 6:
                      r = !0;
                      var c = new a.default(T(e.data));
                      c.readUByte();
                      for (
                        var h = 0, f = 0, v = !1, p = 0;
                        !v && c.bytesAvailable > 1;

                      ) {
                        h = 0;
                        do {
                          h += p = c.readUByte();
                        } while (255 === p);
                        f = 0;
                        do {
                          f += p = c.readUByte();
                        } while (255 === p);
                        if (4 === h && 0 !== c.bytesAvailable) {
                          if (
                            ((v = !0),
                            181 === c.readUByte() &&
                              49 === c.readUShort() &&
                              1195456820 === c.readUInt() &&
                              3 === c.readUByte())
                          ) {
                            for (
                              var m = c.readUByte(),
                                S = 31 & m,
                                b = [m, c.readUByte()],
                                L = 0;
                              L < S;
                              L++
                            )
                              b.push(c.readUByte()),
                                b.push(c.readUByte()),
                                b.push(c.readUByte());
                            E(i._txtTrack.samples, {
                              type: 3,
                              pts: t.pts,
                              bytes: b,
                            });
                          }
                        } else if (5 === h && 0 !== c.bytesAvailable) {
                          if (((v = !0), f > 16)) {
                            for (var A = [], k = 0; k < 16; k++)
                              A.push(c.readUByte().toString(16)),
                                (3 !== k && 5 !== k && 7 !== k && 9 !== k) ||
                                  A.push("-");
                            for (
                              var D = f - 16, R = new Uint8Array(D), _ = 0;
                              _ < D;
                              _++
                            )
                              R[_] = c.readUByte();
                            E(i._txtTrack.samples, {
                              pts: t.pts,
                              payloadType: h,
                              uuid: A.join(""),
                              userData: Object(s.utf8ArrayToStr)(R),
                              userDataBytes: R,
                            });
                          }
                        } else if (f < c.bytesAvailable)
                          for (var I = 0; I < f; I++) c.readUByte();
                      }
                      break;
                    case 7:
                      if (((r = !0), (u = !0), !n.sps)) {
                        var C = new a.default(e.data).readSPS();
                        (n.width = C.width),
                          (n.height = C.height),
                          (n.pixelRatio = C.pixelRatio),
                          (n.sps = [e.data]),
                          (n.duration = i._duration);
                        for (
                          var w = e.data.subarray(1, 4), x = "avc1.", O = 0;
                          O < 3;
                          O++
                        ) {
                          var P = w[O].toString(16);
                          P.length < 2 && (P = "0" + P), (x += P);
                        }
                        n.codec = x;
                      }
                      break;
                    case 8:
                      (r = !0), n.pps || (n.pps = [e.data]);
                      break;
                    case 9:
                      (r = !1),
                        (n.audFound = !0),
                        l && y(l, n),
                        (l = i.avcSample = g(!1, t.pts, t.dts, ""));
                      break;
                    case 12:
                      r = !1;
                      break;
                    default:
                      (r = !1), l && (l.debug += "unknown NAL " + e.type + " ");
                  }
                  l && r && l.units.push(e);
                }),
                e && l && (y(l, n), (this.avcSample = null));
            }),
            (e.getLastNalUnit = function () {
              var t,
                e,
                r = this.avcSample;
              if (!r || 0 === r.units.length) {
                var i = this._avcTrack.samples;
                r = i[i.length - 1];
              }
              if (null !== (t = r) && void 0 !== t && t.units) {
                var n = r.units;
                e = n[n.length - 1];
              }
              return e;
            }),
            (e.parseAVCNALu = function (t) {
              var e,
                r,
                i = t.byteLength,
                n = this._avcTrack,
                a = n.naluState || 0,
                s = a,
                o = [],
                l = 0,
                u = -1,
                d = 0;
              for (
                -1 === a && ((u = 0), (d = 31 & t[0]), (a = 0), (l = 1));
                l < i;

              )
                if (((e = t[l++]), a))
                  if (1 !== a)
                    if (e)
                      if (1 === e) {
                        if (u >= 0) {
                          var c = { data: t.subarray(u, l - a - 1), type: d };
                          o.push(c);
                        } else {
                          var h = this.getLastNalUnit();
                          if (
                            h &&
                            (s &&
                              l <= 4 - s &&
                              h.state &&
                              (h.data = h.data.subarray(
                                0,
                                h.data.byteLength - s
                              )),
                            (r = l - a - 1) > 0)
                          ) {
                            var f = new Uint8Array(h.data.byteLength + r);
                            f.set(h.data, 0),
                              f.set(t.subarray(0, r), h.data.byteLength),
                              (h.data = f);
                          }
                        }
                        l < i ? ((u = l), (d = 31 & t[l]), (a = 0)) : (a = -1);
                      } else a = 0;
                    else a = 3;
                  else a = e ? 0 : 2;
                else a = e ? 0 : 1;
              if (u >= 0 && a >= 0) {
                var g = { data: t.subarray(u, i), type: d, state: a };
                o.push(g);
              }
              if (0 === o.length) {
                var v = this.getLastNalUnit();
                if (v) {
                  var p = new Uint8Array(v.data.byteLength + t.byteLength);
                  p.set(v.data, 0), p.set(t, v.data.byteLength), (v.data = p);
                }
              }
              return (n.naluState = a), o;
            }),
            (e.parseAACPES = function (t) {
              var e,
                r,
                n,
                a,
                s,
                o = 0,
                u = this._audioTrack,
                h = this.aacOverFlow,
                f = t.data;
              if (h) {
                this.aacOverFlow = null;
                var g = h.sample.unit.byteLength,
                  v = Math.min(h.missing, g),
                  p = g - v;
                h.sample.unit.set(f.subarray(0, v), p),
                  u.samples.push(h.sample),
                  (o = h.missing);
              }
              for (e = o, r = f.length; e < r - 1 && !i.isHeader(f, e); e++);
              if (
                e === o ||
                (e < r - 1
                  ? ((n = "AAC PES did not start with ADTS header,offset:" + e),
                    (a = !1))
                  : ((n = "no ADTS header found in AAC PES"), (a = !0)),
                d.logger.warn("parsing error:" + n),
                this.observer.emit(l.Events.ERROR, l.Events.ERROR, {
                  type: c.ErrorTypes.MEDIA_ERROR,
                  details: c.ErrorDetails.FRAG_PARSING_ERROR,
                  fatal: a,
                  reason: n,
                }),
                !a)
              ) {
                if (
                  (i.initTrackConfig(u, this.observer, f, e, this.audioCodec),
                  void 0 !== t.pts)
                )
                  s = t.pts;
                else {
                  if (!h)
                    return void d.logger.warn(
                      "[tsdemuxer]: AAC PES unknown PTS"
                    );
                  var m = i.getFrameDuration(u.samplerate);
                  s = h.sample.pts + m;
                }
                for (var y = 0; e < r; ) {
                  if (i.isHeader(f, e)) {
                    if (e + 5 < r) {
                      var E = i.appendFrame(u, f, e, s, y);
                      if (E) {
                        if (!E.missing) {
                          (e += E.length), y++;
                          continue;
                        }
                        this.aacOverFlow = E;
                      }
                    }
                    break;
                  }
                  e++;
                }
              }
            }),
            (e.parseMPEGPES = function (t) {
              var e = t.data,
                r = e.length,
                i = 0,
                a = 0,
                s = t.pts;
              if (void 0 !== s)
                for (; a < r; )
                  if (n.isHeader(e, a)) {
                    var o = n.appendFrame(this._audioTrack, e, a, s, i);
                    if (!o) break;
                    (a += o.length), i++;
                  } else a++;
              else d.logger.warn("[tsdemuxer]: MPEG PES unknown PTS");
            }),
            (e.parseID3PES = function (t) {
              void 0 !== t.pts
                ? this._id3Track.samples.push(t)
                : d.logger.warn("[tsdemuxer]: ID3 PES unknown PTS");
            }),
            t
          );
        })();
      function g(t, e, r, i) {
        return {
          key: t,
          frame: !1,
          pts: e,
          dts: r,
          units: [],
          debug: i,
          length: 0,
        };
      }
      function v(t, e) {
        return ((31 & t[e + 10]) << 8) | t[e + 11];
      }
      function p(t, e, r, i) {
        var n = { audio: -1, avc: -1, id3: -1, isAAC: !0 },
          a = e + 3 + (((15 & t[e + 1]) << 8) | t[e + 2]) - 4;
        for (e += 12 + (((15 & t[e + 10]) << 8) | t[e + 11]); e < a; ) {
          var s = ((31 & t[e + 1]) << 8) | t[e + 2];
          switch (t[e]) {
            case 207:
              if (!i) {
                d.logger.log(
                  "ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream"
                );
                break;
              }
            case 15:
              -1 === n.audio && (n.audio = s);
              break;
            case 21:
              -1 === n.id3 && (n.id3 = s);
              break;
            case 219:
              if (!i) {
                d.logger.log(
                  "H.264 with AES-128-CBC slice encryption found in unencrypted stream"
                );
                break;
              }
            case 27:
              -1 === n.avc && (n.avc = s);
              break;
            case 3:
            case 4:
              r
                ? -1 === n.audio && ((n.audio = s), (n.isAAC = !1))
                : d.logger.log(
                    "MPEG audio found, not supported in this browser"
                  );
              break;
            case 36:
              d.logger.warn("Unsupported HEVC stream type found");
          }
          e += 5 + (((15 & t[e + 3]) << 8) | t[e + 4]);
        }
        return n;
      }
      function m(t) {
        var e,
          r,
          i,
          n,
          a,
          s = 0,
          o = t.data;
        if (!t || 0 === t.size) return null;
        for (; o[0].length < 19 && o.length > 1; ) {
          var l = new Uint8Array(o[0].length + o[1].length);
          l.set(o[0]), l.set(o[1], o[0].length), (o[0] = l), o.splice(1, 1);
        }
        if (1 === ((e = o[0])[0] << 16) + (e[1] << 8) + e[2]) {
          if ((r = (e[4] << 8) + e[5]) && r > t.size - 6) return null;
          var u = e[7];
          192 & u &&
            ((n =
              536870912 * (14 & e[9]) +
              4194304 * (255 & e[10]) +
              16384 * (254 & e[11]) +
              128 * (255 & e[12]) +
              (254 & e[13]) / 2),
            64 & u
              ? n -
                  (a =
                    536870912 * (14 & e[14]) +
                    4194304 * (255 & e[15]) +
                    16384 * (254 & e[16]) +
                    128 * (255 & e[17]) +
                    (254 & e[18]) / 2) >
                  54e5 &&
                (d.logger.warn(
                  Math.round((n - a) / 9e4) +
                    "s delta between PTS and DTS, align them"
                ),
                (n = a))
              : (a = n));
          var c = (i = e[8]) + 9;
          if (t.size <= c) return null;
          t.size -= c;
          for (
            var h = new Uint8Array(t.size), f = 0, g = o.length;
            f < g;
            f++
          ) {
            var v = (e = o[f]).byteLength;
            if (c) {
              if (c > v) {
                c -= v;
                continue;
              }
              (e = e.subarray(c)), (v -= c), (c = 0);
            }
            h.set(e, s), (s += v);
          }
          return r && (r -= i + 3), { data: h, pts: n, dts: a, len: r };
        }
        return null;
      }
      function y(t, e) {
        if (t.units.length && t.frame) {
          if (void 0 === t.pts) {
            var r = e.samples,
              i = r.length;
            if (!i) return void e.dropped++;
            var n = r[i - 1];
            (t.pts = n.pts), (t.dts = n.dts);
          }
          e.samples.push(t);
        }
        t.debug.length && d.logger.log(t.pts + "/" + t.dts + ":" + t.debug);
      }
      function E(t, e) {
        var r = t.length;
        if (r > 0) {
          if (e.pts >= t[r - 1].pts) t.push(e);
          else
            for (var i = r - 1; i >= 0; i--)
              if (e.pts < t[i].pts) {
                t.splice(i, 0, e);
                break;
              }
        } else t.push(e);
      }
      function T(t) {
        for (var e = t.byteLength, r = [], i = 1; i < e - 2; )
          0 === t[i] && 0 === t[i + 1] && 3 === t[i + 2]
            ? (r.push(i + 2), (i += 2))
            : i++;
        if (0 === r.length) return t;
        var n = e - r.length,
          a = new Uint8Array(n),
          s = 0;
        for (i = 0; i < n; s++, i++)
          s === r[0] && (s++, r.shift()), (a[i] = t[s]);
        return a;
      }
      (f.minProbeByteLength = 188), (e.default = f);
    },
    "./src/errors.ts": function (t, e, r) {
      var i, n, a, s;
      r.r(e),
        r.d(e, "ErrorTypes", function () {
          return i;
        }),
        r.d(e, "ErrorDetails", function () {
          return a;
        }),
        ((n = i || (i = {})).NETWORK_ERROR = "networkError"),
        (n.MEDIA_ERROR = "mediaError"),
        (n.KEY_SYSTEM_ERROR = "keySystemError"),
        (n.MUX_ERROR = "muxError"),
        (n.OTHER_ERROR = "otherError"),
        ((s = a || (a = {})).KEY_SYSTEM_NO_KEYS = "keySystemNoKeys"),
        (s.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess"),
        (s.KEY_SYSTEM_NO_SESSION = "keySystemNoSession"),
        (s.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed"),
        (s.KEY_SYSTEM_NO_INIT_DATA = "keySystemNoInitData"),
        (s.MANIFEST_LOAD_ERROR = "manifestLoadError"),
        (s.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut"),
        (s.MANIFEST_PARSING_ERROR = "manifestParsingError"),
        (s.MANIFEST_INCOMPATIBLE_CODECS_ERROR =
          "manifestIncompatibleCodecsError"),
        (s.LEVEL_EMPTY_ERROR = "levelEmptyError"),
        (s.LEVEL_LOAD_ERROR = "levelLoadError"),
        (s.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut"),
        (s.LEVEL_SWITCH_ERROR = "levelSwitchError"),
        (s.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError"),
        (s.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut"),
        (s.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError"),
        (s.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut"),
        (s.FRAG_LOAD_ERROR = "fragLoadError"),
        (s.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut"),
        (s.FRAG_DECRYPT_ERROR = "fragDecryptError"),
        (s.FRAG_PARSING_ERROR = "fragParsingError"),
        (s.REMUX_ALLOC_ERROR = "remuxAllocError"),
        (s.KEY_LOAD_ERROR = "keyLoadError"),
        (s.KEY_LOAD_TIMEOUT = "keyLoadTimeOut"),
        (s.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError"),
        (s.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError"),
        (s.BUFFER_APPEND_ERROR = "bufferAppendError"),
        (s.BUFFER_APPENDING_ERROR = "bufferAppendingError"),
        (s.BUFFER_STALLED_ERROR = "bufferStalledError"),
        (s.BUFFER_FULL_ERROR = "bufferFullError"),
        (s.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole"),
        (s.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall"),
        (s.INTERNAL_EXCEPTION = "internalException"),
        (s.INTERNAL_ABORTED = "aborted"),
        (s.UNKNOWN = "unknown");
    },
    "./src/events.ts": function (t, e, r) {
      var i, n;
      r.r(e),
        r.d(e, "Events", function () {
          return i;
        }),
        ((n = i || (i = {})).MEDIA_ATTACHING = "hlsMediaAttaching"),
        (n.MEDIA_ATTACHED = "hlsMediaAttached"),
        (n.MEDIA_DETACHING = "hlsMediaDetaching"),
        (n.MEDIA_DETACHED = "hlsMediaDetached"),
        (n.BUFFER_RESET = "hlsBufferReset"),
        (n.BUFFER_CODECS = "hlsBufferCodecs"),
        (n.BUFFER_CREATED = "hlsBufferCreated"),
        (n.BUFFER_APPENDING = "hlsBufferAppending"),
        (n.BUFFER_APPENDED = "hlsBufferAppended"),
        (n.BUFFER_EOS = "hlsBufferEos"),
        (n.BUFFER_FLUSHING = "hlsBufferFlushing"),
        (n.BUFFER_FLUSHED = "hlsBufferFlushed"),
        (n.MANIFEST_LOADING = "hlsManifestLoading"),
        (n.MANIFEST_LOADED = "hlsManifestLoaded"),
        (n.MANIFEST_PARSED = "hlsManifestParsed"),
        (n.LEVEL_SWITCHING = "hlsLevelSwitching"),
        (n.LEVEL_SWITCHED = "hlsLevelSwitched"),
        (n.LEVEL_LOADING = "hlsLevelLoading"),
        (n.LEVEL_LOADED = "hlsLevelLoaded"),
        (n.LEVEL_UPDATED = "hlsLevelUpdated"),
        (n.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated"),
        (n.LEVELS_UPDATED = "hlsLevelsUpdated"),
        (n.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated"),
        (n.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching"),
        (n.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched"),
        (n.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading"),
        (n.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded"),
        (n.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated"),
        (n.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared"),
        (n.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch"),
        (n.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading"),
        (n.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded"),
        (n.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed"),
        (n.CUES_PARSED = "hlsCuesParsed"),
        (n.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound"),
        (n.INIT_PTS_FOUND = "hlsInitPtsFound"),
        (n.FRAG_LOADING = "hlsFragLoading"),
        (n.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted"),
        (n.FRAG_LOADED = "hlsFragLoaded"),
        (n.FRAG_DECRYPTED = "hlsFragDecrypted"),
        (n.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment"),
        (n.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata"),
        (n.FRAG_PARSING_METADATA = "hlsFragParsingMetadata"),
        (n.FRAG_PARSED = "hlsFragParsed"),
        (n.FRAG_BUFFERED = "hlsFragBuffered"),
        (n.FRAG_CHANGED = "hlsFragChanged"),
        (n.FPS_DROP = "hlsFpsDrop"),
        (n.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping"),
        (n.ERROR = "hlsError"),
        (n.DESTROYING = "hlsDestroying"),
        (n.KEY_LOADING = "hlsKeyLoading"),
        (n.KEY_LOADED = "hlsKeyLoaded"),
        (n.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached"),
        (n.BACK_BUFFER_REACHED = "hlsBackBufferReached");
    },
    "./src/hls.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "default", function () {
          return y;
        });
      var i = r("./node_modules/url-toolkit/src/url-toolkit.js"),
        n = r("./src/loader/playlist-loader.ts"),
        a = r("./src/loader/key-loader.ts"),
        s = r("./src/controller/id3-track-controller.ts"),
        o = r("./src/controller/latency-controller.ts"),
        l = r("./src/controller/level-controller.ts"),
        u = r("./src/controller/fragment-tracker.ts"),
        d = r("./src/controller/stream-controller.ts"),
        c = r("./src/is-supported.ts"),
        h = r("./src/utils/logger.ts"),
        f = r("./src/config.ts"),
        g = r("./node_modules/eventemitter3/index.js"),
        v = r("./src/events.ts"),
        p = r("./src/errors.ts");
      function m(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      var y = (function () {
        function t(e) {
          void 0 === e && (e = {}),
            (this.config = void 0),
            (this.userConfig = void 0),
            (this.coreComponents = void 0),
            (this.networkControllers = void 0),
            (this._emitter = new g.EventEmitter()),
            (this._autoLevelCapping = void 0),
            (this.abrController = void 0),
            (this.bufferController = void 0),
            (this.capLevelController = void 0),
            (this.latencyController = void 0),
            (this.levelController = void 0),
            (this.streamController = void 0),
            (this.audioTrackController = void 0),
            (this.subtitleTrackController = void 0),
            (this.emeController = void 0),
            (this._media = null),
            (this.url = null);
          var r = (this.config = Object(f.mergeConfig)(t.DefaultConfig, e));
          (this.userConfig = e),
            Object(h.enableLogs)(r.debug),
            (this._autoLevelCapping = -1),
            r.progressive && Object(f.enableStreamingMode)(r);
          var i = r.abrController,
            c = r.bufferController,
            v = r.capLevelController,
            p = r.fpsController,
            m = (this.abrController = new i(this)),
            y = (this.bufferController = new c(this)),
            E = (this.capLevelController = new v(this)),
            T = new p(this),
            S = new n.default(this),
            b = new a.default(this),
            L = new s.default(this),
            A = (this.levelController = new l.default(this)),
            k = new u.FragmentTracker(this),
            D = (this.streamController = new d.default(this, k));
          E.setStreamController(D), T.setStreamController(D);
          var R = [A, D];
          this.networkControllers = R;
          var _ = [S, b, m, y, E, T, L, k];
          (this.audioTrackController = this.createController(
            r.audioTrackController,
            null,
            R
          )),
            this.createController(r.audioStreamController, k, R),
            (this.subtitleTrackController = this.createController(
              r.subtitleTrackController,
              null,
              R
            )),
            this.createController(r.subtitleStreamController, k, R),
            this.createController(r.timelineController, null, _),
            (this.emeController = this.createController(
              r.emeController,
              null,
              _
            )),
            (this.latencyController = this.createController(
              o.default,
              null,
              _
            )),
            (this.coreComponents = _);
        }
        t.isSupported = function () {
          return Object(c.isSupported)();
        };
        var e,
          r,
          y,
          E = t.prototype;
        return (
          (E.createController = function (t, e, r) {
            if (t) {
              var i = e ? new t(this, e) : new t(this);
              return r && r.push(i), i;
            }
            return null;
          }),
          (E.on = function (t, e, r) {
            void 0 === r && (r = this), this._emitter.on(t, e, r);
          }),
          (E.once = function (t, e, r) {
            void 0 === r && (r = this), this._emitter.once(t, e, r);
          }),
          (E.removeAllListeners = function (t) {
            this._emitter.removeAllListeners(t);
          }),
          (E.off = function (t, e, r, i) {
            void 0 === r && (r = this), this._emitter.off(t, e, r, i);
          }),
          (E.listeners = function (t) {
            return this._emitter.listeners(t);
          }),
          (E.emit = function (t, e, r) {
            return this._emitter.emit(t, e, r);
          }),
          (E.trigger = function (t, e) {
            if (this.config.debug) return this.emit(t, t, e);
            try {
              return this.emit(t, t, e);
            } catch (r) {
              h.logger.error(
                "An internal error happened while handling event " +
                  t +
                  '. Error message: "' +
                  r.message +
                  '". Here is a stacktrace:',
                r
              ),
                this.trigger(v.Events.ERROR, {
                  type: p.ErrorTypes.OTHER_ERROR,
                  details: p.ErrorDetails.INTERNAL_EXCEPTION,
                  fatal: !1,
                  event: t,
                  error: r,
                });
            }
            return !1;
          }),
          (E.listenerCount = function (t) {
            return this._emitter.listenerCount(t);
          }),
          (E.destroy = function () {
            h.logger.log("destroy"),
              this.trigger(v.Events.DESTROYING, void 0),
              this.detachMedia(),
              this.removeAllListeners(),
              (this._autoLevelCapping = -1),
              (this.url = null),
              this.networkControllers.forEach(function (t) {
                return t.destroy();
              }),
              (this.networkControllers.length = 0),
              this.coreComponents.forEach(function (t) {
                return t.destroy();
              }),
              (this.coreComponents.length = 0);
          }),
          (E.attachMedia = function (t) {
            h.logger.log("attachMedia"),
              (this._media = t),
              this.trigger(v.Events.MEDIA_ATTACHING, { media: t });
          }),
          (E.detachMedia = function () {
            h.logger.log("detachMedia"),
              this.trigger(v.Events.MEDIA_DETACHING, void 0),
              (this._media = null);
          }),
          (E.loadSource = function (t) {
            this.stopLoad();
            var e = this.media,
              r = this.url,
              n = (this.url = i.buildAbsoluteURL(self.location.href, t, {
                alwaysNormalize: !0,
              }));
            h.logger.log("loadSource:" + n),
              e &&
                r &&
                r !== n &&
                this.bufferController.hasSourceTypes() &&
                (this.detachMedia(), this.attachMedia(e)),
              this.trigger(v.Events.MANIFEST_LOADING, { url: t });
          }),
          (E.startLoad = function (t) {
            void 0 === t && (t = -1),
              h.logger.log("startLoad(" + t + ")"),
              this.networkControllers.forEach(function (e) {
                e.startLoad(t);
              });
          }),
          (E.stopLoad = function () {
            h.logger.log("stopLoad"),
              this.networkControllers.forEach(function (t) {
                t.stopLoad();
              });
          }),
          (E.swapAudioCodec = function () {
            h.logger.log("swapAudioCodec"),
              this.streamController.swapAudioCodec();
          }),
          (E.recoverMediaError = function () {
            h.logger.log("recoverMediaError");
            var t = this._media;
            this.detachMedia(), t && this.attachMedia(t);
          }),
          (E.removeLevel = function (t, e) {
            void 0 === e && (e = 0), this.levelController.removeLevel(t, e);
          }),
          (e = t),
          (y = [
            {
              key: "version",
              get: function () {
                return "1.0.10";
              },
            },
            {
              key: "Events",
              get: function () {
                return v.Events;
              },
            },
            {
              key: "ErrorTypes",
              get: function () {
                return p.ErrorTypes;
              },
            },
            {
              key: "ErrorDetails",
              get: function () {
                return p.ErrorDetails;
              },
            },
            {
              key: "DefaultConfig",
              get: function () {
                return t.defaultConfig ? t.defaultConfig : f.hlsDefaultConfig;
              },
              set: function (e) {
                t.defaultConfig = e;
              },
            },
          ]),
          (r = [
            {
              key: "levels",
              get: function () {
                return this.levelController.levels || [];
              },
            },
            {
              key: "currentLevel",
              get: function () {
                return this.streamController.currentLevel;
              },
              set: function (t) {
                h.logger.log("set currentLevel:" + t),
                  (this.loadLevel = t),
                  this.abrController.clearTimer(),
                  this.streamController.immediateLevelSwitch();
              },
            },
            {
              key: "nextLevel",
              get: function () {
                return this.streamController.nextLevel;
              },
              set: function (t) {
                h.logger.log("set nextLevel:" + t),
                  (this.levelController.manualLevel = t),
                  this.streamController.nextLevelSwitch();
              },
            },
            {
              key: "loadLevel",
              get: function () {
                return this.levelController.level;
              },
              set: function (t) {
                h.logger.log("set loadLevel:" + t),
                  (this.levelController.manualLevel = t);
              },
            },
            {
              key: "nextLoadLevel",
              get: function () {
                return this.levelController.nextLoadLevel;
              },
              set: function (t) {
                this.levelController.nextLoadLevel = t;
              },
            },
            {
              key: "firstLevel",
              get: function () {
                return Math.max(
                  this.levelController.firstLevel,
                  this.minAutoLevel
                );
              },
              set: function (t) {
                h.logger.log("set firstLevel:" + t),
                  (this.levelController.firstLevel = t);
              },
            },
            {
              key: "startLevel",
              get: function () {
                return this.levelController.startLevel;
              },
              set: function (t) {
                h.logger.log("set startLevel:" + t),
                  -1 !== t && (t = Math.max(t, this.minAutoLevel)),
                  (this.levelController.startLevel = t);
              },
            },
            {
              key: "capLevelToPlayerSize",
              get: function () {
                return this.config.capLevelToPlayerSize;
              },
              set: function (t) {
                var e = !!t;
                e !== this.config.capLevelToPlayerSize &&
                  (e
                    ? this.capLevelController.startCapping()
                    : (this.capLevelController.stopCapping(),
                      (this.autoLevelCapping = -1),
                      this.streamController.nextLevelSwitch()),
                  (this.config.capLevelToPlayerSize = e));
              },
            },
            {
              key: "autoLevelCapping",
              get: function () {
                return this._autoLevelCapping;
              },
              set: function (t) {
                this._autoLevelCapping !== t &&
                  (h.logger.log("set autoLevelCapping:" + t),
                  (this._autoLevelCapping = t));
              },
            },
            {
              key: "bandwidthEstimate",
              get: function () {
                var t = this.abrController.bwEstimator;
                return t ? t.getEstimate() : NaN;
              },
            },
            {
              key: "autoLevelEnabled",
              get: function () {
                return -1 === this.levelController.manualLevel;
              },
            },
            {
              key: "manualLevel",
              get: function () {
                return this.levelController.manualLevel;
              },
            },
            {
              key: "minAutoLevel",
              get: function () {
                var t = this.levels,
                  e = this.config.minAutoBitrate;
                if (!t) return 0;
                for (var r = t.length, i = 0; i < r; i++)
                  if (t[i].maxBitrate > e) return i;
                return 0;
              },
            },
            {
              key: "maxAutoLevel",
              get: function () {
                var t = this.levels,
                  e = this.autoLevelCapping;
                return -1 === e && t && t.length ? t.length - 1 : e;
              },
            },
            {
              key: "nextAutoLevel",
              get: function () {
                return Math.min(
                  Math.max(this.abrController.nextAutoLevel, this.minAutoLevel),
                  this.maxAutoLevel
                );
              },
              set: function (t) {
                this.abrController.nextAutoLevel = Math.max(
                  this.minAutoLevel,
                  t
                );
              },
            },
            {
              key: "audioTracks",
              get: function () {
                var t = this.audioTrackController;
                return t ? t.audioTracks : [];
              },
            },
            {
              key: "audioTrack",
              get: function () {
                var t = this.audioTrackController;
                return t ? t.audioTrack : -1;
              },
              set: function (t) {
                var e = this.audioTrackController;
                e && (e.audioTrack = t);
              },
            },
            {
              key: "subtitleTracks",
              get: function () {
                var t = this.subtitleTrackController;
                return t ? t.subtitleTracks : [];
              },
            },
            {
              key: "subtitleTrack",
              get: function () {
                var t = this.subtitleTrackController;
                return t ? t.subtitleTrack : -1;
              },
              set: function (t) {
                var e = this.subtitleTrackController;
                e && (e.subtitleTrack = t);
              },
            },
            {
              key: "media",
              get: function () {
                return this._media;
              },
            },
            {
              key: "subtitleDisplay",
              get: function () {
                var t = this.subtitleTrackController;
                return !!t && t.subtitleDisplay;
              },
              set: function (t) {
                var e = this.subtitleTrackController;
                e && (e.subtitleDisplay = t);
              },
            },
            {
              key: "lowLatencyMode",
              get: function () {
                return this.config.lowLatencyMode;
              },
              set: function (t) {
                this.config.lowLatencyMode = t;
              },
            },
            {
              key: "liveSyncPosition",
              get: function () {
                return this.latencyController.liveSyncPosition;
              },
            },
            {
              key: "latency",
              get: function () {
                return this.latencyController.latency;
              },
            },
            {
              key: "maxLatency",
              get: function () {
                return this.latencyController.maxLatency;
              },
            },
            {
              key: "targetLatency",
              get: function () {
                return this.latencyController.targetLatency;
              },
            },
            {
              key: "drift",
              get: function () {
                return this.latencyController.drift;
              },
            },
            {
              key: "forceStartLoad",
              get: function () {
                return this.streamController.forceStartLoad;
              },
            },
          ]) && m(e.prototype, r),
          y && m(e, y),
          t
        );
      })();
      y.defaultConfig = void 0;
    },
    "./src/is-supported.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "isSupported", function () {
          return a;
        }),
        r.d(e, "changeTypeSupported", function () {
          return s;
        });
      var i = r("./src/utils/mediasource-helper.ts");
      function n() {
        return self.SourceBuffer || self.WebKitSourceBuffer;
      }
      function a() {
        var t = Object(i.getMediaSource)();
        if (!t) return !1;
        var e = n(),
          r =
            t &&
            "function" == typeof t.isTypeSupported &&
            t.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
          a =
            !e ||
            (e.prototype &&
              "function" == typeof e.prototype.appendBuffer &&
              "function" == typeof e.prototype.remove);
        return !!r && !!a;
      }
      function s() {
        var t,
          e = n();
        return (
          "function" ==
          typeof (null == e || null === (t = e.prototype) || void 0 === t
            ? void 0
            : t.changeType)
        );
      }
    },
    "./src/loader/fragment-loader.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "default", function () {
          return d;
        }),
        r.d(e, "LoadError", function () {
          return h;
        });
      var i = r("./src/polyfills/number.ts"),
        n = r("./src/errors.ts");
      function a(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (a = function (t) {
          if (
            null === t ||
            ((r = t), -1 === Function.toString.call(r).indexOf("[native code]"))
          )
            return t;
          var r;
          if ("function" != typeof t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if (void 0 !== e) {
            if (e.has(t)) return e.get(t);
            e.set(t, i);
          }
          function i() {
            return s(t, arguments, l(this).constructor);
          }
          return (
            (i.prototype = Object.create(t.prototype, {
              constructor: {
                value: i,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            o(i, t)
          );
        })(t);
      }
      function s(t, e, r) {
        return (s = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })()
          ? Reflect.construct
          : function (t, e, r) {
              var i = [null];
              i.push.apply(i, e);
              var n = new (Function.bind.apply(t, i))();
              return r && o(n, r.prototype), n;
            }).apply(null, arguments);
      }
      function o(t, e) {
        return (o =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function l(t) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var u = Math.pow(2, 17),
        d = (function () {
          function t(t) {
            (this.config = void 0),
              (this.loader = null),
              (this.partLoadTimeout = -1),
              (this.config = t);
          }
          var e = t.prototype;
          return (
            (e.destroy = function () {
              this.loader && (this.loader.destroy(), (this.loader = null));
            }),
            (e.abort = function () {
              this.loader && this.loader.abort();
            }),
            (e.load = function (t, e) {
              var r = this,
                i = t.url;
              if (!i)
                return Promise.reject(
                  new h(
                    {
                      type: n.ErrorTypes.NETWORK_ERROR,
                      details: n.ErrorDetails.FRAG_LOAD_ERROR,
                      fatal: !1,
                      frag: t,
                      networkDetails: null,
                    },
                    "Fragment does not have a " + (i ? "part list" : "url")
                  )
                );
              this.abort();
              var a = this.config,
                s = a.fLoader,
                o = a.loader;
              return new Promise(function (i, l) {
                r.loader && r.loader.destroy();
                var d = (r.loader = t.loader = s ? new s(a) : new o(a)),
                  f = c(t),
                  g = {
                    timeout: a.fragLoadingTimeOut,
                    maxRetry: 0,
                    retryDelay: 0,
                    maxRetryDelay: a.fragLoadingMaxRetryTimeout,
                    highWaterMark: u,
                  };
                (t.stats = d.stats),
                  d.load(f, g, {
                    onSuccess: function (e, n, a, s) {
                      r.resetLoader(t, d),
                        i({
                          frag: t,
                          part: null,
                          payload: e.data,
                          networkDetails: s,
                        });
                    },
                    onError: function (e, i, a) {
                      r.resetLoader(t, d),
                        l(
                          new h({
                            type: n.ErrorTypes.NETWORK_ERROR,
                            details: n.ErrorDetails.FRAG_LOAD_ERROR,
                            fatal: !1,
                            frag: t,
                            response: e,
                            networkDetails: a,
                          })
                        );
                    },
                    onAbort: function (e, i, a) {
                      r.resetLoader(t, d),
                        l(
                          new h({
                            type: n.ErrorTypes.NETWORK_ERROR,
                            details: n.ErrorDetails.INTERNAL_ABORTED,
                            fatal: !1,
                            frag: t,
                            networkDetails: a,
                          })
                        );
                    },
                    onTimeout: function (e, i, a) {
                      r.resetLoader(t, d),
                        l(
                          new h({
                            type: n.ErrorTypes.NETWORK_ERROR,
                            details: n.ErrorDetails.FRAG_LOAD_TIMEOUT,
                            fatal: !1,
                            frag: t,
                            networkDetails: a,
                          })
                        );
                    },
                    onProgress: function (r, i, n, a) {
                      e &&
                        e({
                          frag: t,
                          part: null,
                          payload: n,
                          networkDetails: a,
                        });
                    },
                  });
              });
            }),
            (e.loadPart = function (t, e, r) {
              var i = this;
              this.abort();
              var a = this.config,
                s = a.fLoader,
                o = a.loader;
              return new Promise(function (l, d) {
                i.loader && i.loader.destroy();
                var f = (i.loader = t.loader = s ? new s(a) : new o(a)),
                  g = c(t, e),
                  v = {
                    timeout: a.fragLoadingTimeOut,
                    maxRetry: 0,
                    retryDelay: 0,
                    maxRetryDelay: a.fragLoadingMaxRetryTimeout,
                    highWaterMark: u,
                  };
                (e.stats = f.stats),
                  f.load(g, v, {
                    onSuccess: function (n, a, s, o) {
                      i.resetLoader(t, f), i.updateStatsFromPart(t, e);
                      var u = {
                        frag: t,
                        part: e,
                        payload: n.data,
                        networkDetails: o,
                      };
                      r(u), l(u);
                    },
                    onError: function (r, a, s) {
                      i.resetLoader(t, f),
                        d(
                          new h({
                            type: n.ErrorTypes.NETWORK_ERROR,
                            details: n.ErrorDetails.FRAG_LOAD_ERROR,
                            fatal: !1,
                            frag: t,
                            part: e,
                            response: r,
                            networkDetails: s,
                          })
                        );
                    },
                    onAbort: function (r, a, s) {
                      (t.stats.aborted = e.stats.aborted),
                        i.resetLoader(t, f),
                        d(
                          new h({
                            type: n.ErrorTypes.NETWORK_ERROR,
                            details: n.ErrorDetails.INTERNAL_ABORTED,
                            fatal: !1,
                            frag: t,
                            part: e,
                            networkDetails: s,
                          })
                        );
                    },
                    onTimeout: function (r, a, s) {
                      i.resetLoader(t, f),
                        d(
                          new h({
                            type: n.ErrorTypes.NETWORK_ERROR,
                            details: n.ErrorDetails.FRAG_LOAD_TIMEOUT,
                            fatal: !1,
                            frag: t,
                            part: e,
                            networkDetails: s,
                          })
                        );
                    },
                  });
              });
            }),
            (e.updateStatsFromPart = function (t, e) {
              var r = t.stats,
                i = e.stats,
                n = i.total;
              if (((r.loaded += i.loaded), n)) {
                var a = Math.round(t.duration / e.duration),
                  s = Math.min(Math.round(r.loaded / n), a),
                  o = (a - s) * Math.round(r.loaded / s);
                r.total = r.loaded + o;
              } else r.total = Math.max(r.loaded, r.total);
              var l = r.loading,
                u = i.loading;
              l.start
                ? (l.first += u.first - u.start)
                : ((l.start = u.start), (l.first = u.first)),
                (l.end = u.end);
            }),
            (e.resetLoader = function (t, e) {
              (t.loader = null),
                this.loader === e &&
                  (self.clearTimeout(this.partLoadTimeout),
                  (this.loader = null)),
                e.destroy();
            }),
            t
          );
        })();
      function c(t, e) {
        void 0 === e && (e = null);
        var r = e || t,
          n = {
            frag: t,
            part: e,
            responseType: "arraybuffer",
            url: r.url,
            rangeStart: 0,
            rangeEnd: 0,
          },
          a = r.byteRangeStartOffset,
          s = r.byteRangeEndOffset;
        return (
          Object(i.isFiniteNumber)(a) &&
            Object(i.isFiniteNumber)(s) &&
            ((n.rangeStart = a), (n.rangeEnd = s)),
          n
        );
      }
      var h = (function (t) {
        var e, r;
        function i(e) {
          for (
            var r,
              i = arguments.length,
              n = new Array(i > 1 ? i - 1 : 0),
              a = 1;
            a < i;
            a++
          )
            n[a - 1] = arguments[a];
          return (
            ((r = t.call.apply(t, [this].concat(n)) || this).data = void 0),
            (r.data = e),
            r
          );
        }
        return (
          (r = t),
          ((e = i).prototype = Object.create(r.prototype)),
          (e.prototype.constructor = e),
          o(e, r),
          i
        );
      })(a(Error));
    },
    "./src/loader/fragment.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "ElementaryStreamTypes", function () {
          return i;
        }),
        r.d(e, "BaseSegment", function () {
          return g;
        }),
        r.d(e, "Fragment", function () {
          return v;
        }),
        r.d(e, "Part", function () {
          return p;
        });
      var i,
        n,
        a = r("./src/polyfills/number.ts"),
        s = r("./node_modules/url-toolkit/src/url-toolkit.js"),
        o = r("./src/utils/logger.ts"),
        l = r("./src/loader/level-key.ts"),
        u = r("./src/loader/load-stats.ts");
      function d(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          c(t, e);
      }
      function c(t, e) {
        return (c =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function h(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      function f(t, e, r) {
        return e && h(t.prototype, e), r && h(t, r), t;
      }
      ((n = i || (i = {})).AUDIO = "audio"),
        (n.VIDEO = "video"),
        (n.AUDIOVIDEO = "audiovideo");
      var g = (function () {
          function t(t) {
            var e;
            (this._byteRange = null),
              (this._url = null),
              (this.baseurl = void 0),
              (this.relurl = void 0),
              (this.elementaryStreams =
                (((e = {})[i.AUDIO] = null),
                (e[i.VIDEO] = null),
                (e[i.AUDIOVIDEO] = null),
                e)),
              (this.baseurl = t);
          }
          return (
            (t.prototype.setByteRange = function (t, e) {
              var r = t.split("@", 2),
                i = [];
              1 === r.length
                ? (i[0] = e ? e.byteRangeEndOffset : 0)
                : (i[0] = parseInt(r[1])),
                (i[1] = parseInt(r[0]) + i[0]),
                (this._byteRange = i);
            }),
            f(t, [
              {
                key: "byteRange",
                get: function () {
                  return this._byteRange ? this._byteRange : [];
                },
              },
              {
                key: "byteRangeStartOffset",
                get: function () {
                  return this.byteRange[0];
                },
              },
              {
                key: "byteRangeEndOffset",
                get: function () {
                  return this.byteRange[1];
                },
              },
              {
                key: "url",
                get: function () {
                  return (
                    !this._url &&
                      this.baseurl &&
                      this.relurl &&
                      (this._url = Object(s.buildAbsoluteURL)(
                        this.baseurl,
                        this.relurl,
                        { alwaysNormalize: !0 }
                      )),
                    this._url || ""
                  );
                },
                set: function (t) {
                  this._url = t;
                },
              },
            ]),
            t
          );
        })(),
        v = (function (t) {
          function e(e, r) {
            var i;
            return (
              ((i = t.call(this, r) || this)._decryptdata = null),
              (i.rawProgramDateTime = null),
              (i.programDateTime = null),
              (i.tagList = []),
              (i.duration = 0),
              (i.sn = 0),
              (i.levelkey = void 0),
              (i.type = void 0),
              (i.loader = null),
              (i.level = -1),
              (i.cc = 0),
              (i.startPTS = void 0),
              (i.endPTS = void 0),
              (i.appendedPTS = void 0),
              (i.startDTS = void 0),
              (i.endDTS = void 0),
              (i.start = 0),
              (i.deltaPTS = void 0),
              (i.maxStartPTS = void 0),
              (i.minEndPTS = void 0),
              (i.stats = new u.LoadStats()),
              (i.urlId = 0),
              (i.data = void 0),
              (i.bitrateTest = !1),
              (i.title = null),
              (i.initSegment = null),
              (i.type = e),
              i
            );
          }
          d(e, t);
          var r = e.prototype;
          return (
            (r.createInitializationVector = function (t) {
              for (var e = new Uint8Array(16), r = 12; r < 16; r++)
                e[r] = (t >> (8 * (15 - r))) & 255;
              return e;
            }),
            (r.setDecryptDataFromLevelKey = function (t, e) {
              var r = t;
              return (
                "AES-128" === (null == t ? void 0 : t.method) &&
                  t.uri &&
                  !t.iv &&
                  (((r = l.LevelKey.fromURI(t.uri)).method = t.method),
                  (r.iv = this.createInitializationVector(e)),
                  (r.keyFormat = "identity")),
                r
              );
            }),
            (r.setElementaryStreamInfo = function (t, e, r, i, n, a) {
              void 0 === a && (a = !1);
              var s = this.elementaryStreams,
                o = s[t];
              o
                ? ((o.startPTS = Math.min(o.startPTS, e)),
                  (o.endPTS = Math.max(o.endPTS, r)),
                  (o.startDTS = Math.min(o.startDTS, i)),
                  (o.endDTS = Math.max(o.endDTS, n)))
                : (s[t] = {
                    startPTS: e,
                    endPTS: r,
                    startDTS: i,
                    endDTS: n,
                    partial: a,
                  });
            }),
            (r.clearElementaryStreamInfo = function () {
              var t = this.elementaryStreams;
              (t[i.AUDIO] = null),
                (t[i.VIDEO] = null),
                (t[i.AUDIOVIDEO] = null);
            }),
            f(e, [
              {
                key: "decryptdata",
                get: function () {
                  if (!this.levelkey && !this._decryptdata) return null;
                  if (!this._decryptdata && this.levelkey) {
                    var t = this.sn;
                    "number" != typeof t &&
                      (this.levelkey &&
                        "AES-128" === this.levelkey.method &&
                        !this.levelkey.iv &&
                        o.logger.warn(
                          'missing IV for initialization segment with method="' +
                            this.levelkey.method +
                            '" - compliance issue'
                        ),
                      (t = 0)),
                      (this._decryptdata = this.setDecryptDataFromLevelKey(
                        this.levelkey,
                        t
                      ));
                  }
                  return this._decryptdata;
                },
              },
              {
                key: "end",
                get: function () {
                  return this.start + this.duration;
                },
              },
              {
                key: "endProgramDateTime",
                get: function () {
                  if (null === this.programDateTime) return null;
                  if (!Object(a.isFiniteNumber)(this.programDateTime))
                    return null;
                  var t = Object(a.isFiniteNumber)(this.duration)
                    ? this.duration
                    : 0;
                  return this.programDateTime + 1e3 * t;
                },
              },
              {
                key: "encrypted",
                get: function () {
                  var t;
                  return !(
                    null === (t = this.decryptdata) ||
                    void 0 === t ||
                    !t.keyFormat ||
                    !this.decryptdata.uri
                  );
                },
              },
            ]),
            e
          );
        })(g),
        p = (function (t) {
          function e(e, r, i, n, a) {
            var s;
            ((s = t.call(this, i) || this).fragOffset = 0),
              (s.duration = 0),
              (s.gap = !1),
              (s.independent = !1),
              (s.relurl = void 0),
              (s.fragment = void 0),
              (s.index = void 0),
              (s.stats = new u.LoadStats()),
              (s.duration = e.decimalFloatingPoint("DURATION")),
              (s.gap = e.bool("GAP")),
              (s.independent = e.bool("INDEPENDENT")),
              (s.relurl = e.enumeratedString("URI")),
              (s.fragment = r),
              (s.index = n);
            var o = e.enumeratedString("BYTERANGE");
            return (
              o && s.setByteRange(o, a),
              a && (s.fragOffset = a.fragOffset + a.duration),
              s
            );
          }
          return (
            d(e, t),
            f(e, [
              {
                key: "start",
                get: function () {
                  return this.fragment.start + this.fragOffset;
                },
              },
              {
                key: "end",
                get: function () {
                  return this.start + this.duration;
                },
              },
              {
                key: "loaded",
                get: function () {
                  var t = this.elementaryStreams;
                  return !!(t.audio || t.video || t.audiovideo);
                },
              },
            ]),
            e
          );
        })(g);
    },
    "./src/loader/key-loader.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "default", function () {
          return s;
        });
      var i = r("./src/events.ts"),
        n = r("./src/errors.ts"),
        a = r("./src/utils/logger.ts"),
        s = (function () {
          function t(t) {
            (this.hls = void 0),
              (this.loaders = {}),
              (this.decryptkey = null),
              (this.decrypturl = null),
              (this.hls = t),
              this._registerListeners();
          }
          var e = t.prototype;
          return (
            (e._registerListeners = function () {
              this.hls.on(i.Events.KEY_LOADING, this.onKeyLoading, this);
            }),
            (e._unregisterListeners = function () {
              this.hls.off(i.Events.KEY_LOADING, this.onKeyLoading);
            }),
            (e.destroy = function () {
              for (var t in (this._unregisterListeners(), this.loaders)) {
                var e = this.loaders[t];
                e && e.destroy();
              }
              this.loaders = {};
            }),
            (e.onKeyLoading = function (t, e) {
              var r = e.frag,
                n = r.type,
                s = this.loaders[n];
              if (r.decryptdata) {
                var o = r.decryptdata.uri;
                if (o !== this.decrypturl || null === this.decryptkey) {
                  var l = this.hls.config;
                  if (
                    (s &&
                      (a.logger.warn("abort previous key loader for type:" + n),
                      s.abort()),
                    !o)
                  )
                    return void a.logger.warn("key uri is falsy");
                  var u = l.loader,
                    d = (r.loader = this.loaders[n] = new u(l));
                  (this.decrypturl = o), (this.decryptkey = null);
                  var c = { url: o, frag: r, responseType: "arraybuffer" },
                    h = {
                      timeout: l.fragLoadingTimeOut,
                      maxRetry: 0,
                      retryDelay: l.fragLoadingRetryDelay,
                      maxRetryDelay: l.fragLoadingMaxRetryTimeout,
                      highWaterMark: 0,
                    },
                    f = {
                      onSuccess: this.loadsuccess.bind(this),
                      onError: this.loaderror.bind(this),
                      onTimeout: this.loadtimeout.bind(this),
                    };
                  d.load(c, h, f);
                } else
                  this.decryptkey &&
                    ((r.decryptdata.key = this.decryptkey),
                    this.hls.trigger(i.Events.KEY_LOADED, { frag: r }));
              } else
                a.logger.warn(
                  "Missing decryption data on fragment in onKeyLoading"
                );
            }),
            (e.loadsuccess = function (t, e, r) {
              var n = r.frag;
              n.decryptdata
                ? ((this.decryptkey = n.decryptdata.key =
                    new Uint8Array(t.data)),
                  (n.loader = null),
                  delete this.loaders[n.type],
                  this.hls.trigger(i.Events.KEY_LOADED, { frag: n }))
                : a.logger.error("after key load, decryptdata unset");
            }),
            (e.loaderror = function (t, e) {
              var r = e.frag,
                a = r.loader;
              a && a.abort(),
                delete this.loaders[r.type],
                this.hls.trigger(i.Events.ERROR, {
                  type: n.ErrorTypes.NETWORK_ERROR,
                  details: n.ErrorDetails.KEY_LOAD_ERROR,
                  fatal: !1,
                  frag: r,
                  response: t,
                });
            }),
            (e.loadtimeout = function (t, e) {
              var r = e.frag,
                a = r.loader;
              a && a.abort(),
                delete this.loaders[r.type],
                this.hls.trigger(i.Events.ERROR, {
                  type: n.ErrorTypes.NETWORK_ERROR,
                  details: n.ErrorDetails.KEY_LOAD_TIMEOUT,
                  fatal: !1,
                  frag: r,
                });
            }),
            t
          );
        })();
    },
    "./src/loader/level-details.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "LevelDetails", function () {
          return n;
        });
      var i = r("./src/polyfills/number.ts");
      var n = (function () {
        function t(t) {
          (this.PTSKnown = !1),
            (this.alignedSliding = !1),
            (this.averagetargetduration = void 0),
            (this.endCC = 0),
            (this.endSN = 0),
            (this.fragments = void 0),
            (this.fragmentHint = void 0),
            (this.partList = null),
            (this.live = !0),
            (this.ageHeader = 0),
            (this.advancedDateTime = void 0),
            (this.updated = !0),
            (this.advanced = !0),
            (this.availabilityDelay = void 0),
            (this.misses = 0),
            (this.needSidxRanges = !1),
            (this.startCC = 0),
            (this.startSN = 0),
            (this.startTimeOffset = null),
            (this.targetduration = 0),
            (this.totalduration = 0),
            (this.type = null),
            (this.url = void 0),
            (this.m3u8 = ""),
            (this.version = null),
            (this.canBlockReload = !1),
            (this.canSkipUntil = 0),
            (this.canSkipDateRanges = !1),
            (this.skippedSegments = 0),
            (this.recentlyRemovedDateranges = void 0),
            (this.partHoldBack = 0),
            (this.holdBack = 0),
            (this.partTarget = 0),
            (this.preloadHint = void 0),
            (this.renditionReports = void 0),
            (this.tuneInGoal = 0),
            (this.deltaUpdateFailed = void 0),
            (this.driftStartTime = 0),
            (this.driftEndTime = 0),
            (this.driftStart = 0),
            (this.driftEnd = 0),
            (this.fragments = []),
            (this.url = t);
        }
        var e;
        return (
          (t.prototype.reloaded = function (t) {
            if (!t) return (this.advanced = !0), void (this.updated = !0);
            var e = this.lastPartSn - t.lastPartSn,
              r = this.lastPartIndex - t.lastPartIndex;
            (this.updated = this.endSN !== t.endSN || !!r || !!e),
              (this.advanced =
                this.endSN > t.endSN || e > 0 || (0 === e && r > 0)),
              this.updated || this.advanced
                ? (this.misses = Math.floor(0.6 * t.misses))
                : (this.misses = t.misses + 1),
              (this.availabilityDelay = t.availabilityDelay);
          }),
          (e = [
            {
              key: "hasProgramDateTime",
              get: function () {
                return (
                  !!this.fragments.length &&
                  Object(i.isFiniteNumber)(
                    this.fragments[this.fragments.length - 1].programDateTime
                  )
                );
              },
            },
            {
              key: "levelTargetDuration",
              get: function () {
                return this.averagetargetduration || this.targetduration || 10;
              },
            },
            {
              key: "drift",
              get: function () {
                var t = this.driftEndTime - this.driftStartTime;
                return t > 0
                  ? (1e3 * (this.driftEnd - this.driftStart)) / t
                  : 1;
              },
            },
            {
              key: "edge",
              get: function () {
                return this.partEnd || this.fragmentEnd;
              },
            },
            {
              key: "partEnd",
              get: function () {
                var t;
                return null !== (t = this.partList) && void 0 !== t && t.length
                  ? this.partList[this.partList.length - 1].end
                  : this.fragmentEnd;
              },
            },
            {
              key: "fragmentEnd",
              get: function () {
                var t;
                return null !== (t = this.fragments) && void 0 !== t && t.length
                  ? this.fragments[this.fragments.length - 1].end
                  : 0;
              },
            },
            {
              key: "age",
              get: function () {
                return this.advancedDateTime
                  ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3
                  : 0;
              },
            },
            {
              key: "lastPartIndex",
              get: function () {
                var t;
                return null !== (t = this.partList) && void 0 !== t && t.length
                  ? this.partList[this.partList.length - 1].index
                  : -1;
              },
            },
            {
              key: "lastPartSn",
              get: function () {
                var t;
                return null !== (t = this.partList) && void 0 !== t && t.length
                  ? this.partList[this.partList.length - 1].fragment.sn
                  : this.endSN;
              },
            },
          ]) &&
            (function (t, e) {
              for (var r = 0; r < e.length; r++) {
                var i = e[r];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(t, i.key, i);
              }
            })(t.prototype, e),
          t
        );
      })();
    },
    "./src/loader/level-key.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "LevelKey", function () {
          return n;
        });
      var i = r("./node_modules/url-toolkit/src/url-toolkit.js");
      var n = (function () {
        function t(t, e) {
          (this._uri = null),
            (this.method = null),
            (this.keyFormat = null),
            (this.keyFormatVersions = null),
            (this.keyID = null),
            (this.key = null),
            (this.iv = null),
            (this._uri = e
              ? Object(i.buildAbsoluteURL)(t, e, { alwaysNormalize: !0 })
              : t);
        }
        var e;
        return (
          (t.fromURL = function (e, r) {
            return new t(e, r);
          }),
          (t.fromURI = function (e) {
            return new t(e);
          }),
          (e = [
            {
              key: "uri",
              get: function () {
                return this._uri;
              },
            },
          ]) &&
            (function (t, e) {
              for (var r = 0; r < e.length; r++) {
                var i = e[r];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(t, i.key, i);
              }
            })(t.prototype, e),
          t
        );
      })();
    },
    "./src/loader/load-stats.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "LoadStats", function () {
          return i;
        });
      var i = function () {
        (this.aborted = !1),
          (this.loaded = 0),
          (this.retry = 0),
          (this.total = 0),
          (this.chunkCount = 0),
          (this.bwEstimate = 0),
          (this.loading = { start: 0, first: 0, end: 0 }),
          (this.parsing = { start: 0, end: 0 }),
          (this.buffering = { start: 0, first: 0, end: 0 });
      };
    },
    "./src/loader/m3u8-parser.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "default", function () {
          return p;
        });
      var i = r("./src/polyfills/number.ts"),
        n = r("./node_modules/url-toolkit/src/url-toolkit.js"),
        a = r("./src/loader/fragment.ts"),
        s = r("./src/loader/level-details.ts"),
        o = r("./src/loader/level-key.ts"),
        l = r("./src/utils/attr-list.ts"),
        u = r("./src/utils/logger.ts"),
        d = r("./src/utils/codecs.ts"),
        c =
          /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-SESSION-DATA:([^\r\n]*)[\r\n]+/g,
        h = /#EXT-X-MEDIA:(.*)/g,
        f = new RegExp(
          [
            /#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,
            /(?!#) *(\S[\S ]*)/.source,
            /#EXT-X-BYTERANGE:*(.+)/.source,
            /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,
            /#.*/.source,
          ].join("|"),
          "g"
        ),
        g = new RegExp(
          [
            /#(EXTM3U)/.source,
            /#EXT-X-(PLAYLIST-TYPE):(.+)/.source,
            /#EXT-X-(MEDIA-SEQUENCE): *(\d+)/.source,
            /#EXT-X-(SKIP):(.+)/.source,
            /#EXT-X-(TARGETDURATION): *(\d+)/.source,
            /#EXT-X-(KEY):(.+)/.source,
            /#EXT-X-(START):(.+)/.source,
            /#EXT-X-(ENDLIST)/.source,
            /#EXT-X-(DISCONTINUITY-SEQ)UENCE: *(\d+)/.source,
            /#EXT-X-(DIS)CONTINUITY/.source,
            /#EXT-X-(VERSION):(\d+)/.source,
            /#EXT-X-(MAP):(.+)/.source,
            /#EXT-X-(SERVER-CONTROL):(.+)/.source,
            /#EXT-X-(PART-INF):(.+)/.source,
            /#EXT-X-(GAP)/.source,
            /#EXT-X-(BITRATE):\s*(\d+)/.source,
            /#EXT-X-(PART):(.+)/.source,
            /#EXT-X-(PRELOAD-HINT):(.+)/.source,
            /#EXT-X-(RENDITION-REPORT):(.+)/.source,
            /(#)([^:]*):(.*)/.source,
            /(#)(.*)(?:.*)\r?\n?/.source,
          ].join("|")
        ),
        v = /\.(mp4|m4s|m4v|m4a)$/i,
        p = (function () {
          function t() {}
          return (
            (t.findGroup = function (t, e) {
              for (var r = 0; r < t.length; r++) {
                var i = t[r];
                if (i.id === e) return i;
              }
            }),
            (t.convertAVC1ToAVCOTI = function (t) {
              var e = t.split(".");
              if (e.length > 2) {
                var r = e.shift() + ".";
                return (
                  (r += parseInt(e.shift()).toString(16)) +
                  ("000" + parseInt(e.shift()).toString(16)).substr(-4)
                );
              }
              return t;
            }),
            (t.resolve = function (t, e) {
              return n.buildAbsoluteURL(e, t, { alwaysNormalize: !0 });
            }),
            (t.parseMasterPlaylist = function (e, r) {
              var i,
                n = [],
                a = {},
                s = !1;
              for (c.lastIndex = 0; null != (i = c.exec(e)); )
                if (i[1]) {
                  var o = new l.AttrList(i[1]),
                    u = {
                      attrs: o,
                      bitrate:
                        o.decimalInteger("AVERAGE-BANDWIDTH") ||
                        o.decimalInteger("BANDWIDTH"),
                      name: o.NAME,
                      url: t.resolve(i[2], r),
                    },
                    d = o.decimalResolution("RESOLUTION");
                  d && ((u.width = d.width), (u.height = d.height)),
                    m(
                      (o.CODECS || "").split(/[ ,]+/).filter(function (t) {
                        return t;
                      }),
                      u
                    ),
                    u.videoCodec &&
                      -1 !== u.videoCodec.indexOf("avc1") &&
                      (u.videoCodec = t.convertAVC1ToAVCOTI(u.videoCodec)),
                    n.push(u);
                } else if (i[3]) {
                  var h = new l.AttrList(i[3]);
                  h["DATA-ID"] && ((s = !0), (a[h["DATA-ID"]] = h));
                }
              return { levels: n, sessionData: s ? a : null };
            }),
            (t.parseMasterPlaylistMedia = function (e, r, i, n) {
              var a;
              void 0 === n && (n = []);
              var s = [],
                o = 0;
              for (h.lastIndex = 0; null !== (a = h.exec(e)); ) {
                var u = new l.AttrList(a[1]);
                if (u.TYPE === i) {
                  var d = {
                    attrs: u,
                    bitrate: 0,
                    id: o++,
                    groupId: u["GROUP-ID"],
                    instreamId: u["INSTREAM-ID"],
                    name: u.NAME || u.LANGUAGE || "",
                    type: i,
                    default: u.bool("DEFAULT"),
                    autoselect: u.bool("AUTOSELECT"),
                    forced: u.bool("FORCED"),
                    lang: u.LANGUAGE,
                    url: u.URI ? t.resolve(u.URI, r) : "",
                  };
                  if (n.length) {
                    var c = t.findGroup(n, d.groupId) || n[0];
                    y(d, c, "audioCodec"), y(d, c, "textCodec");
                  }
                  s.push(d);
                }
              }
              return s;
            }),
            (t.parseLevelPlaylist = function (t, e, r, d, c) {
              var h,
                p,
                m,
                y = new s.LevelDetails(e),
                T = y.fragments,
                S = null,
                b = 0,
                L = 0,
                A = 0,
                k = 0,
                D = null,
                R = new a.Fragment(d, e),
                _ = -1,
                I = !1;
              for (f.lastIndex = 0, y.m3u8 = t; null !== (h = f.exec(t)); ) {
                I &&
                  ((I = !1),
                  ((R = new a.Fragment(d, e)).start = A),
                  (R.sn = b),
                  (R.cc = k),
                  (R.level = r),
                  S &&
                    ((R.initSegment = S),
                    (R.rawProgramDateTime = S.rawProgramDateTime)));
                var C = h[1];
                if (C) {
                  R.duration = parseFloat(C);
                  var w = (" " + h[2]).slice(1);
                  (R.title = w || null),
                    R.tagList.push(w ? ["INF", C, w] : ["INF", C]);
                } else if (h[3])
                  Object(i.isFiniteNumber)(R.duration) &&
                    ((R.start = A),
                    m && (R.levelkey = m),
                    (R.sn = b),
                    (R.level = r),
                    (R.cc = k),
                    (R.urlId = c),
                    T.push(R),
                    (R.relurl = (" " + h[3]).slice(1)),
                    E(R, D),
                    (D = R),
                    (A += R.duration),
                    b++,
                    (L = 0),
                    (I = !0));
                else if (h[4]) {
                  var x = (" " + h[4]).slice(1);
                  D ? R.setByteRange(x, D) : R.setByteRange(x);
                } else if (h[5])
                  (R.rawProgramDateTime = (" " + h[5]).slice(1)),
                    R.tagList.push(["PROGRAM-DATE-TIME", R.rawProgramDateTime]),
                    -1 === _ && (_ = T.length);
                else {
                  if (!(h = h[0].match(g))) {
                    u.logger.warn(
                      "No matches on slow regex match for level playlist!"
                    );
                    continue;
                  }
                  for (p = 1; p < h.length && void 0 === h[p]; p++);
                  var O = (" " + h[p]).slice(1),
                    P = (" " + h[p + 1]).slice(1),
                    F = h[p + 2] ? (" " + h[p + 2]).slice(1) : "";
                  switch (O) {
                    case "PLAYLIST-TYPE":
                      y.type = P.toUpperCase();
                      break;
                    case "MEDIA-SEQUENCE":
                      b = y.startSN = parseInt(P);
                      break;
                    case "SKIP":
                      var M = new l.AttrList(P),
                        N = M.decimalInteger("SKIPPED-SEGMENTS");
                      if (Object(i.isFiniteNumber)(N)) {
                        y.skippedSegments = N;
                        for (var B = N; B--; ) T.unshift(null);
                        b += N;
                      }
                      var U = M.enumeratedString("RECENTLY-REMOVED-DATERANGES");
                      U && (y.recentlyRemovedDateranges = U.split("\t"));
                      break;
                    case "TARGETDURATION":
                      y.targetduration = parseFloat(P);
                      break;
                    case "VERSION":
                      y.version = parseInt(P);
                      break;
                    case "EXTM3U":
                      break;
                    case "ENDLIST":
                      y.live = !1;
                      break;
                    case "#":
                      (P || F) && R.tagList.push(F ? [P, F] : [P]);
                      break;
                    case "DIS":
                      k++;
                    case "GAP":
                      R.tagList.push([O]);
                      break;
                    case "BITRATE":
                      R.tagList.push([O, P]);
                      break;
                    case "DISCONTINUITY-SEQ":
                      k = parseInt(P);
                      break;
                    case "KEY":
                      var G,
                        j = new l.AttrList(P),
                        K = j.enumeratedString("METHOD"),
                        V = j.URI,
                        H = j.hexadecimalInteger("IV"),
                        W = j.enumeratedString("KEYFORMATVERSIONS"),
                        Y = j.enumeratedString("KEYID"),
                        q =
                          null != (G = j.enumeratedString("KEYFORMAT"))
                            ? G
                            : "identity";
                      if (
                        [
                          "com.apple.streamingkeydelivery",
                          "com.microsoft.playready",
                          "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed",
                          "com.widevine",
                        ].indexOf(q) > -1
                      ) {
                        u.logger.warn(
                          "Keyformat " +
                            q +
                            " is not supported from the manifest"
                        );
                        continue;
                      }
                      if ("identity" !== q) continue;
                      K &&
                        ((m = o.LevelKey.fromURL(e, V)),
                        V &&
                          ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(
                            K
                          ) >= 0 &&
                          ((m.method = K),
                          (m.keyFormat = q),
                          Y && (m.keyID = Y),
                          W && (m.keyFormatVersions = W),
                          (m.iv = H)));
                      break;
                    case "START":
                      var z = new l.AttrList(P).decimalFloatingPoint(
                        "TIME-OFFSET"
                      );
                      Object(i.isFiniteNumber)(z) && (y.startTimeOffset = z);
                      break;
                    case "MAP":
                      var X = new l.AttrList(P);
                      (R.relurl = X.URI),
                        X.BYTERANGE && R.setByteRange(X.BYTERANGE),
                        (R.level = r),
                        (R.sn = "initSegment"),
                        m && (R.levelkey = m),
                        (R.initSegment = null),
                        (S = R),
                        (I = !0);
                      break;
                    case "SERVER-CONTROL":
                      var $ = new l.AttrList(P);
                      (y.canBlockReload = $.bool("CAN-BLOCK-RELOAD")),
                        (y.canSkipUntil = $.optionalFloat("CAN-SKIP-UNTIL", 0)),
                        (y.canSkipDateRanges =
                          y.canSkipUntil > 0 && $.bool("CAN-SKIP-DATERANGES")),
                        (y.partHoldBack = $.optionalFloat("PART-HOLD-BACK", 0)),
                        (y.holdBack = $.optionalFloat("HOLD-BACK", 0));
                      break;
                    case "PART-INF":
                      var Q = new l.AttrList(P);
                      y.partTarget = Q.decimalFloatingPoint("PART-TARGET");
                      break;
                    case "PART":
                      var J = y.partList;
                      J || (J = y.partList = []);
                      var Z = L > 0 ? J[J.length - 1] : void 0,
                        tt = L++,
                        et = new a.Part(new l.AttrList(P), R, e, tt, Z);
                      J.push(et), (R.duration += et.duration);
                      break;
                    case "PRELOAD-HINT":
                      var rt = new l.AttrList(P);
                      y.preloadHint = rt;
                      break;
                    case "RENDITION-REPORT":
                      var it = new l.AttrList(P);
                      (y.renditionReports = y.renditionReports || []),
                        y.renditionReports.push(it);
                      break;
                    default:
                      u.logger.warn("line parsed but not handled: " + h);
                  }
                }
              }
              D && !D.relurl
                ? (T.pop(),
                  (A -= D.duration),
                  y.partList && (y.fragmentHint = D))
                : y.partList && (E(R, D), (R.cc = k), (y.fragmentHint = R));
              var nt = T.length,
                at = T[0],
                st = T[nt - 1];
              if ((A += y.skippedSegments * y.targetduration) > 0 && nt && st) {
                y.averagetargetduration = A / nt;
                var ot = st.sn;
                (y.endSN = "initSegment" !== ot ? ot : 0),
                  at &&
                    ((y.startCC = at.cc),
                    at.initSegment ||
                      (y.fragments.every(function (t) {
                        return (
                          t.relurl &&
                          ((e = t.relurl),
                          v.test(
                            null !=
                              (r =
                                null === (i = n.parseURL(e)) || void 0 === i
                                  ? void 0
                                  : i.path)
                              ? r
                              : ""
                          ))
                        );
                        var e, r, i;
                      }) &&
                        (u.logger.warn(
                          "MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"
                        ),
                        ((R = new a.Fragment(d, e)).relurl = st.relurl),
                        (R.level = r),
                        (R.sn = "initSegment"),
                        (at.initSegment = R),
                        (y.needSidxRanges = !0))));
              } else (y.endSN = 0), (y.startCC = 0);
              return (
                y.fragmentHint && (A += y.fragmentHint.duration),
                (y.totalduration = A),
                (y.endCC = k),
                _ > 0 &&
                  (function (t, e) {
                    for (var r = t[e], i = e; i--; ) {
                      var n = t[i];
                      if (!n) return;
                      (n.programDateTime =
                        r.programDateTime - 1e3 * n.duration),
                        (r = n);
                    }
                  })(T, _),
                y
              );
            }),
            t
          );
        })();
      function m(t, e) {
        ["video", "audio", "text"].forEach(function (r) {
          var i = t.filter(function (t) {
            return Object(d.isCodecType)(t, r);
          });
          if (i.length) {
            var n = i.filter(function (t) {
              return (
                0 === t.lastIndexOf("avc1", 0) || 0 === t.lastIndexOf("mp4a", 0)
              );
            });
            (e[r + "Codec"] = n.length > 0 ? n[0] : i[0]),
              (t = t.filter(function (t) {
                return -1 === i.indexOf(t);
              }));
          }
        }),
          (e.unknownCodecs = t);
      }
      function y(t, e, r) {
        var i = e[r];
        i && (t[r] = i);
      }
      function E(t, e) {
        t.rawProgramDateTime
          ? (t.programDateTime = Date.parse(t.rawProgramDateTime))
          : null != e &&
            e.programDateTime &&
            (t.programDateTime = e.endProgramDateTime),
          Object(i.isFiniteNumber)(t.programDateTime) ||
            ((t.programDateTime = null), (t.rawProgramDateTime = null));
      }
    },
    "./src/loader/playlist-loader.ts": function (t, e, r) {
      r.r(e);
      var i = r("./src/polyfills/number.ts"),
        n = r("./src/events.ts"),
        a = r("./src/errors.ts"),
        s = r("./src/utils/logger.ts"),
        o = r("./src/utils/mp4-tools.ts"),
        l = r("./src/loader/m3u8-parser.ts"),
        u = r("./src/types/loader.ts"),
        d = r("./src/utils/attr-list.ts");
      function c(t, e) {
        var r = t.url;
        return (void 0 !== r && 0 !== r.indexOf("data:")) || (r = e.url), r;
      }
      var h = (function () {
        function t(t) {
          (this.hls = void 0),
            (this.loaders = Object.create(null)),
            (this.hls = t),
            this.registerListeners();
        }
        var e = t.prototype;
        return (
          (e.registerListeners = function () {
            var t = this.hls;
            t.on(n.Events.MANIFEST_LOADING, this.onManifestLoading, this),
              t.on(n.Events.LEVEL_LOADING, this.onLevelLoading, this),
              t.on(
                n.Events.AUDIO_TRACK_LOADING,
                this.onAudioTrackLoading,
                this
              ),
              t.on(
                n.Events.SUBTITLE_TRACK_LOADING,
                this.onSubtitleTrackLoading,
                this
              );
          }),
          (e.unregisterListeners = function () {
            var t = this.hls;
            t.off(n.Events.MANIFEST_LOADING, this.onManifestLoading, this),
              t.off(n.Events.LEVEL_LOADING, this.onLevelLoading, this),
              t.off(
                n.Events.AUDIO_TRACK_LOADING,
                this.onAudioTrackLoading,
                this
              ),
              t.off(
                n.Events.SUBTITLE_TRACK_LOADING,
                this.onSubtitleTrackLoading,
                this
              );
          }),
          (e.createInternalLoader = function (t) {
            var e = this.hls.config,
              r = e.pLoader,
              i = e.loader,
              n = new (r || i)(e);
            return (t.loader = n), (this.loaders[t.type] = n), n;
          }),
          (e.getInternalLoader = function (t) {
            return this.loaders[t.type];
          }),
          (e.resetInternalLoader = function (t) {
            this.loaders[t] && delete this.loaders[t];
          }),
          (e.destroyInternalLoaders = function () {
            for (var t in this.loaders) {
              var e = this.loaders[t];
              e && e.destroy(), this.resetInternalLoader(t);
            }
          }),
          (e.destroy = function () {
            this.unregisterListeners(), this.destroyInternalLoaders();
          }),
          (e.onManifestLoading = function (t, e) {
            var r = e.url;
            this.load({
              id: null,
              groupId: null,
              level: 0,
              responseType: "text",
              type: u.PlaylistContextType.MANIFEST,
              url: r,
              deliveryDirectives: null,
            });
          }),
          (e.onLevelLoading = function (t, e) {
            var r = e.id,
              i = e.level,
              n = e.url,
              a = e.deliveryDirectives;
            this.load({
              id: r,
              groupId: null,
              level: i,
              responseType: "text",
              type: u.PlaylistContextType.LEVEL,
              url: n,
              deliveryDirectives: a,
            });
          }),
          (e.onAudioTrackLoading = function (t, e) {
            var r = e.id,
              i = e.groupId,
              n = e.url,
              a = e.deliveryDirectives;
            this.load({
              id: r,
              groupId: i,
              level: null,
              responseType: "text",
              type: u.PlaylistContextType.AUDIO_TRACK,
              url: n,
              deliveryDirectives: a,
            });
          }),
          (e.onSubtitleTrackLoading = function (t, e) {
            var r = e.id,
              i = e.groupId,
              n = e.url,
              a = e.deliveryDirectives;
            this.load({
              id: r,
              groupId: i,
              level: null,
              responseType: "text",
              type: u.PlaylistContextType.SUBTITLE_TRACK,
              url: n,
              deliveryDirectives: a,
            });
          }),
          (e.load = function (t) {
            var e,
              r,
              i,
              n,
              a,
              o,
              l = this.hls.config,
              d = this.getInternalLoader(t);
            if (d) {
              var c = d.context;
              if (c && c.url === t.url)
                return void s.logger.trace(
                  "[playlist-loader]: playlist request ongoing"
                );
              s.logger.log(
                "[playlist-loader]: aborting previous loader for type: " +
                  t.type
              ),
                d.abort();
            }
            switch (t.type) {
              case u.PlaylistContextType.MANIFEST:
                (r = l.manifestLoadingMaxRetry),
                  (i = l.manifestLoadingTimeOut),
                  (n = l.manifestLoadingRetryDelay),
                  (a = l.manifestLoadingMaxRetryTimeout);
                break;
              case u.PlaylistContextType.LEVEL:
              case u.PlaylistContextType.AUDIO_TRACK:
              case u.PlaylistContextType.SUBTITLE_TRACK:
                (r = 0), (i = l.levelLoadingTimeOut);
                break;
              default:
                (r = l.levelLoadingMaxRetry),
                  (i = l.levelLoadingTimeOut),
                  (n = l.levelLoadingRetryDelay),
                  (a = l.levelLoadingMaxRetryTimeout);
            }
            if (
              ((d = this.createInternalLoader(t)),
              null !== (e = t.deliveryDirectives) &&
                void 0 !== e &&
                e.part &&
                (t.type === u.PlaylistContextType.LEVEL && null !== t.level
                  ? (o = this.hls.levels[t.level].details)
                  : t.type === u.PlaylistContextType.AUDIO_TRACK &&
                    null !== t.id
                  ? (o = this.hls.audioTracks[t.id].details)
                  : t.type === u.PlaylistContextType.SUBTITLE_TRACK &&
                    null !== t.id &&
                    (o = this.hls.subtitleTracks[t.id].details),
                o))
            ) {
              var h = o.partTarget,
                f = o.targetduration;
              h && f && (i = Math.min(1e3 * Math.max(3 * h, 0.8 * f), i));
            }
            var g = {
                timeout: i,
                maxRetry: r,
                retryDelay: n,
                maxRetryDelay: a,
                highWaterMark: 0,
              },
              v = {
                onSuccess: this.loadsuccess.bind(this),
                onError: this.loaderror.bind(this),
                onTimeout: this.loadtimeout.bind(this),
              };
            d.load(t, g, v);
          }),
          (e.loadsuccess = function (t, e, r, i) {
            if ((void 0 === i && (i = null), r.isSidxRequest))
              return (
                this.handleSidxRequest(t, r),
                void this.handlePlaylistLoaded(t, e, r, i)
              );
            this.resetInternalLoader(r.type);
            var n = t.data;
            0 === n.indexOf("#EXTM3U")
              ? ((e.parsing.start = performance.now()),
                n.indexOf("#EXTINF:") > 0 ||
                n.indexOf("#EXT-X-TARGETDURATION:") > 0
                  ? this.handleTrackOrLevelPlaylist(t, e, r, i)
                  : this.handleMasterPlaylist(t, e, r, i))
              : this.handleManifestParsingError(t, r, "no EXTM3U delimiter", i);
          }),
          (e.loaderror = function (t, e, r) {
            void 0 === r && (r = null), this.handleNetworkError(e, r, !1, t);
          }),
          (e.loadtimeout = function (t, e, r) {
            void 0 === r && (r = null), this.handleNetworkError(e, r, !0);
          }),
          (e.handleMasterPlaylist = function (t, e, r, i) {
            var a = this.hls,
              o = t.data,
              u = c(t, r),
              h = l.default.parseMasterPlaylist(o, u),
              f = h.levels,
              g = h.sessionData;
            if (f.length) {
              var v = f.map(function (t) {
                  return { id: t.attrs.AUDIO, audioCodec: t.audioCodec };
                }),
                p = f.map(function (t) {
                  return { id: t.attrs.SUBTITLES, textCodec: t.textCodec };
                }),
                m = l.default.parseMasterPlaylistMedia(o, u, "AUDIO", v),
                y = l.default.parseMasterPlaylistMedia(o, u, "SUBTITLES", p),
                E = l.default.parseMasterPlaylistMedia(o, u, "CLOSED-CAPTIONS");
              m.length &&
                (m.some(function (t) {
                  return !t.url;
                }) ||
                  !f[0].audioCodec ||
                  f[0].attrs.AUDIO ||
                  (s.logger.log(
                    "[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"
                  ),
                  m.unshift({
                    type: "main",
                    name: "main",
                    default: !1,
                    autoselect: !1,
                    forced: !1,
                    id: -1,
                    attrs: new d.AttrList({}),
                    bitrate: 0,
                    url: "",
                  }))),
                a.trigger(n.Events.MANIFEST_LOADED, {
                  levels: f,
                  audioTracks: m,
                  subtitles: y,
                  captions: E,
                  url: u,
                  stats: e,
                  networkDetails: i,
                  sessionData: g,
                });
            } else
              this.handleManifestParsingError(
                t,
                r,
                "no level found in manifest",
                i
              );
          }),
          (e.handleTrackOrLevelPlaylist = function (t, e, r, s) {
            var o = this.hls,
              h = r.id,
              f = r.level,
              g = r.type,
              v = c(t, r),
              p = Object(i.isFiniteNumber)(h) ? h : 0,
              m = Object(i.isFiniteNumber)(f) ? f : p,
              y = (function (t) {
                switch (t.type) {
                  case u.PlaylistContextType.AUDIO_TRACK:
                    return u.PlaylistLevelType.AUDIO;
                  case u.PlaylistContextType.SUBTITLE_TRACK:
                    return u.PlaylistLevelType.SUBTITLE;
                  default:
                    return u.PlaylistLevelType.MAIN;
                }
              })(r),
              E = l.default.parseLevelPlaylist(t.data, v, m, y, p);
            if (E.fragments.length) {
              if (g === u.PlaylistContextType.MANIFEST) {
                var T = {
                  attrs: new d.AttrList({}),
                  bitrate: 0,
                  details: E,
                  name: "",
                  url: v,
                };
                o.trigger(n.Events.MANIFEST_LOADED, {
                  levels: [T],
                  audioTracks: [],
                  url: v,
                  stats: e,
                  networkDetails: s,
                  sessionData: null,
                });
              }
              if (((e.parsing.end = performance.now()), E.needSidxRanges)) {
                var S,
                  b =
                    null === (S = E.fragments[0].initSegment) || void 0 === S
                      ? void 0
                      : S.url;
                this.load({
                  url: b,
                  isSidxRequest: !0,
                  type: g,
                  level: f,
                  levelDetails: E,
                  id: h,
                  groupId: null,
                  rangeStart: 0,
                  rangeEnd: 2048,
                  responseType: "arraybuffer",
                  deliveryDirectives: null,
                });
              } else
                (r.levelDetails = E), this.handlePlaylistLoaded(t, e, r, s);
            } else
              o.trigger(n.Events.ERROR, {
                type: a.ErrorTypes.NETWORK_ERROR,
                details: a.ErrorDetails.LEVEL_EMPTY_ERROR,
                fatal: !1,
                url: v,
                reason: "no fragments found in level",
                level: "number" == typeof r.level ? r.level : void 0,
              });
          }),
          (e.handleSidxRequest = function (t, e) {
            var r = Object(o.parseSegmentIndex)(new Uint8Array(t.data));
            if (r) {
              var i = r.references,
                n = e.levelDetails;
              i.forEach(function (t, e) {
                var i = t.info,
                  a = n.fragments[e];
                0 === a.byteRange.length &&
                  a.setByteRange(
                    String(1 + i.end - i.start) + "@" + String(i.start)
                  ),
                  a.initSegment &&
                    a.initSegment.setByteRange(String(r.moovEndOffset) + "@0");
              });
            }
          }),
          (e.handleManifestParsingError = function (t, e, r, i) {
            this.hls.trigger(n.Events.ERROR, {
              type: a.ErrorTypes.NETWORK_ERROR,
              details: a.ErrorDetails.MANIFEST_PARSING_ERROR,
              fatal: e.type === u.PlaylistContextType.MANIFEST,
              url: t.url,
              reason: r,
              response: t,
              context: e,
              networkDetails: i,
            });
          }),
          (e.handleNetworkError = function (t, e, r, i) {
            void 0 === r && (r = !1),
              s.logger.warn(
                "[playlist-loader]: A network " +
                  (r ? "timeout" : "error") +
                  " occurred while loading " +
                  t.type +
                  " level: " +
                  t.level +
                  " id: " +
                  t.id +
                  ' group-id: "' +
                  t.groupId +
                  '"'
              );
            var o = a.ErrorDetails.UNKNOWN,
              l = !1,
              d = this.getInternalLoader(t);
            switch (t.type) {
              case u.PlaylistContextType.MANIFEST:
                (o = r
                  ? a.ErrorDetails.MANIFEST_LOAD_TIMEOUT
                  : a.ErrorDetails.MANIFEST_LOAD_ERROR),
                  (l = !0);
                break;
              case u.PlaylistContextType.LEVEL:
                (o = r
                  ? a.ErrorDetails.LEVEL_LOAD_TIMEOUT
                  : a.ErrorDetails.LEVEL_LOAD_ERROR),
                  (l = !1);
                break;
              case u.PlaylistContextType.AUDIO_TRACK:
                (o = r
                  ? a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT
                  : a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR),
                  (l = !1);
                break;
              case u.PlaylistContextType.SUBTITLE_TRACK:
                (o = r
                  ? a.ErrorDetails.SUBTITLE_TRACK_LOAD_TIMEOUT
                  : a.ErrorDetails.SUBTITLE_LOAD_ERROR),
                  (l = !1);
            }
            d && this.resetInternalLoader(t.type);
            var c = {
              type: a.ErrorTypes.NETWORK_ERROR,
              details: o,
              fatal: l,
              url: t.url,
              loader: d,
              context: t,
              networkDetails: e,
            };
            i && (c.response = i), this.hls.trigger(n.Events.ERROR, c);
          }),
          (e.handlePlaylistLoaded = function (t, e, r, i) {
            var a = r.type,
              s = r.level,
              o = r.id,
              l = r.groupId,
              d = r.loader,
              c = r.levelDetails,
              h = r.deliveryDirectives;
            if (null != c && c.targetduration) {
              if (d)
                switch (
                  (c.live &&
                    (d.getCacheAge && (c.ageHeader = d.getCacheAge() || 0),
                    (d.getCacheAge && !isNaN(c.ageHeader)) ||
                      (c.ageHeader = 0)),
                  a)
                ) {
                  case u.PlaylistContextType.MANIFEST:
                  case u.PlaylistContextType.LEVEL:
                    this.hls.trigger(n.Events.LEVEL_LOADED, {
                      details: c,
                      level: s || 0,
                      id: o || 0,
                      stats: e,
                      networkDetails: i,
                      deliveryDirectives: h,
                    });
                    break;
                  case u.PlaylistContextType.AUDIO_TRACK:
                    this.hls.trigger(n.Events.AUDIO_TRACK_LOADED, {
                      details: c,
                      id: o || 0,
                      groupId: l || "",
                      stats: e,
                      networkDetails: i,
                      deliveryDirectives: h,
                    });
                    break;
                  case u.PlaylistContextType.SUBTITLE_TRACK:
                    this.hls.trigger(n.Events.SUBTITLE_TRACK_LOADED, {
                      details: c,
                      id: o || 0,
                      groupId: l || "",
                      stats: e,
                      networkDetails: i,
                      deliveryDirectives: h,
                    });
                }
            } else
              this.handleManifestParsingError(
                t,
                r,
                "invalid target duration",
                i
              );
          }),
          t
        );
      })();
      e.default = h;
    },
    "./src/polyfills/number.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "isFiniteNumber", function () {
          return i;
        }),
        r.d(e, "MAX_SAFE_INTEGER", function () {
          return n;
        });
      var i =
          Number.isFinite ||
          function (t) {
            return "number" == typeof t && isFinite(t);
          },
        n = Number.MAX_SAFE_INTEGER || 9007199254740991;
    },
    "./src/remux/aac-helper.ts": function (t, e, r) {
      r.r(e);
      var i = (function () {
        function t() {}
        return (
          (t.getSilentFrame = function (t, e) {
            if ("mp4a.40.2" === t) {
              if (1 === e) return new Uint8Array([0, 200, 0, 128, 35, 128]);
              if (2 === e)
                return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
              if (3 === e)
                return new Uint8Array([
                  0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142,
                ]);
              if (4 === e)
                return new Uint8Array([
                  0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128,
                  8, 2, 56,
                ]);
              if (5 === e)
                return new Uint8Array([
                  0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4,
                  153, 0, 33, 144, 2, 56,
                ]);
              if (6 === e)
                return new Uint8Array([
                  0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4,
                  153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224,
                ]);
            } else {
              if (1 === e)
                return new Uint8Array([
                  1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6,
                  241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                  90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                  90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94,
                ]);
              if (2 === e)
                return new Uint8Array([
                  1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0,
                  6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                  90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                  90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94,
                ]);
              if (3 === e)
                return new Uint8Array([
                  1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0,
                  6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                  90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                  90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94,
                ]);
            }
          }),
          t
        );
      })();
      e.default = i;
    },
    "./src/remux/mp4-generator.ts": function (t, e, r) {
      r.r(e);
      var i = Math.pow(2, 32) - 1,
        n = (function () {
          function t() {}
          return (
            (t.init = function () {
              var e;
              for (e in ((t.types = {
                avc1: [],
                avcC: [],
                btrt: [],
                dinf: [],
                dref: [],
                esds: [],
                ftyp: [],
                hdlr: [],
                mdat: [],
                mdhd: [],
                mdia: [],
                mfhd: [],
                minf: [],
                moof: [],
                moov: [],
                mp4a: [],
                ".mp3": [],
                mvex: [],
                mvhd: [],
                pasp: [],
                sdtp: [],
                stbl: [],
                stco: [],
                stsc: [],
                stsd: [],
                stsz: [],
                stts: [],
                tfdt: [],
                tfhd: [],
                traf: [],
                trak: [],
                trun: [],
                trex: [],
                tkhd: [],
                vmhd: [],
                smhd: [],
              }),
              t.types))
                t.types.hasOwnProperty(e) &&
                  (t.types[e] = [
                    e.charCodeAt(0),
                    e.charCodeAt(1),
                    e.charCodeAt(2),
                    e.charCodeAt(3),
                  ]);
              var r = new Uint8Array([
                  0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100,
                  108, 101, 114, 0,
                ]),
                i = new Uint8Array([
                  0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100,
                  108, 101, 114, 0,
                ]);
              t.HDLR_TYPES = { video: r, audio: i };
              var n = new Uint8Array([
                  0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0,
                  0, 1,
                ]),
                a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
              (t.STTS = t.STSC = t.STCO = a),
                (t.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
                (t.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])),
                (t.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
                (t.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]));
              var s = new Uint8Array([105, 115, 111, 109]),
                o = new Uint8Array([97, 118, 99, 49]),
                l = new Uint8Array([0, 0, 0, 1]);
              (t.FTYP = t.box(t.types.ftyp, s, l, s, o)),
                (t.DINF = t.box(t.types.dinf, t.box(t.types.dref, n)));
            }),
            (t.box = function (t) {
              for (
                var e = 8,
                  r = arguments.length,
                  i = new Array(r > 1 ? r - 1 : 0),
                  n = 1;
                n < r;
                n++
              )
                i[n - 1] = arguments[n];
              for (var a = i.length, s = a; a--; ) e += i[a].byteLength;
              var o = new Uint8Array(e);
              for (
                o[0] = (e >> 24) & 255,
                  o[1] = (e >> 16) & 255,
                  o[2] = (e >> 8) & 255,
                  o[3] = 255 & e,
                  o.set(t, 4),
                  a = 0,
                  e = 8;
                a < s;
                a++
              )
                o.set(i[a], e), (e += i[a].byteLength);
              return o;
            }),
            (t.hdlr = function (e) {
              return t.box(t.types.hdlr, t.HDLR_TYPES[e]);
            }),
            (t.mdat = function (e) {
              return t.box(t.types.mdat, e);
            }),
            (t.mdhd = function (e, r) {
              r *= e;
              var n = Math.floor(r / (i + 1)),
                a = Math.floor(r % (i + 1));
              return t.box(
                t.types.mdhd,
                new Uint8Array([
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  2,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  3,
                  (e >> 24) & 255,
                  (e >> 16) & 255,
                  (e >> 8) & 255,
                  255 & e,
                  n >> 24,
                  (n >> 16) & 255,
                  (n >> 8) & 255,
                  255 & n,
                  a >> 24,
                  (a >> 16) & 255,
                  (a >> 8) & 255,
                  255 & a,
                  85,
                  196,
                  0,
                  0,
                ])
              );
            }),
            (t.mdia = function (e) {
              return t.box(
                t.types.mdia,
                t.mdhd(e.timescale, e.duration),
                t.hdlr(e.type),
                t.minf(e)
              );
            }),
            (t.mfhd = function (e) {
              return t.box(
                t.types.mfhd,
                new Uint8Array([
                  0,
                  0,
                  0,
                  0,
                  e >> 24,
                  (e >> 16) & 255,
                  (e >> 8) & 255,
                  255 & e,
                ])
              );
            }),
            (t.minf = function (e) {
              return "audio" === e.type
                ? t.box(
                    t.types.minf,
                    t.box(t.types.smhd, t.SMHD),
                    t.DINF,
                    t.stbl(e)
                  )
                : t.box(
                    t.types.minf,
                    t.box(t.types.vmhd, t.VMHD),
                    t.DINF,
                    t.stbl(e)
                  );
            }),
            (t.moof = function (e, r, i) {
              return t.box(t.types.moof, t.mfhd(e), t.traf(i, r));
            }),
            (t.moov = function (e) {
              for (var r = e.length, i = []; r--; ) i[r] = t.trak(e[r]);
              return t.box.apply(
                null,
                [t.types.moov, t.mvhd(e[0].timescale, e[0].duration)]
                  .concat(i)
                  .concat(t.mvex(e))
              );
            }),
            (t.mvex = function (e) {
              for (var r = e.length, i = []; r--; ) i[r] = t.trex(e[r]);
              return t.box.apply(null, [t.types.mvex].concat(i));
            }),
            (t.mvhd = function (e, r) {
              r *= e;
              var n = Math.floor(r / (i + 1)),
                a = Math.floor(r % (i + 1)),
                s = new Uint8Array([
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  2,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  3,
                  (e >> 24) & 255,
                  (e >> 16) & 255,
                  (e >> 8) & 255,
                  255 & e,
                  n >> 24,
                  (n >> 16) & 255,
                  (n >> 8) & 255,
                  255 & n,
                  a >> 24,
                  (a >> 16) & 255,
                  (a >> 8) & 255,
                  255 & a,
                  0,
                  1,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  64,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  255,
                  255,
                  255,
                  255,
                ]);
              return t.box(t.types.mvhd, s);
            }),
            (t.sdtp = function (e) {
              var r,
                i,
                n = e.samples || [],
                a = new Uint8Array(4 + n.length);
              for (r = 0; r < n.length; r++)
                (i = n[r].flags),
                  (a[r + 4] =
                    (i.dependsOn << 4) |
                    (i.isDependedOn << 2) |
                    i.hasRedundancy);
              return t.box(t.types.sdtp, a);
            }),
            (t.stbl = function (e) {
              return t.box(
                t.types.stbl,
                t.stsd(e),
                t.box(t.types.stts, t.STTS),
                t.box(t.types.stsc, t.STSC),
                t.box(t.types.stsz, t.STSZ),
                t.box(t.types.stco, t.STCO)
              );
            }),
            (t.avc1 = function (e) {
              var r,
                i,
                n,
                a = [],
                s = [];
              for (r = 0; r < e.sps.length; r++)
                (n = (i = e.sps[r]).byteLength),
                  a.push((n >>> 8) & 255),
                  a.push(255 & n),
                  (a = a.concat(Array.prototype.slice.call(i)));
              for (r = 0; r < e.pps.length; r++)
                (n = (i = e.pps[r]).byteLength),
                  s.push((n >>> 8) & 255),
                  s.push(255 & n),
                  (s = s.concat(Array.prototype.slice.call(i)));
              var o = t.box(
                  t.types.avcC,
                  new Uint8Array(
                    [1, a[3], a[4], a[5], 255, 224 | e.sps.length]
                      .concat(a)
                      .concat([e.pps.length])
                      .concat(s)
                  )
                ),
                l = e.width,
                u = e.height,
                d = e.pixelRatio[0],
                c = e.pixelRatio[1];
              return t.box(
                t.types.avc1,
                new Uint8Array([
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  (l >> 8) & 255,
                  255 & l,
                  (u >> 8) & 255,
                  255 & u,
                  0,
                  72,
                  0,
                  0,
                  0,
                  72,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  18,
                  100,
                  97,
                  105,
                  108,
                  121,
                  109,
                  111,
                  116,
                  105,
                  111,
                  110,
                  47,
                  104,
                  108,
                  115,
                  46,
                  106,
                  115,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  24,
                  17,
                  17,
                ]),
                o,
                t.box(
                  t.types.btrt,
                  new Uint8Array([
                    0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192,
                  ])
                ),
                t.box(
                  t.types.pasp,
                  new Uint8Array([
                    d >> 24,
                    (d >> 16) & 255,
                    (d >> 8) & 255,
                    255 & d,
                    c >> 24,
                    (c >> 16) & 255,
                    (c >> 8) & 255,
                    255 & c,
                  ])
                )
              );
            }),
            (t.esds = function (t) {
              var e = t.config.length;
              return new Uint8Array(
                [
                  0,
                  0,
                  0,
                  0,
                  3,
                  23 + e,
                  0,
                  1,
                  0,
                  4,
                  15 + e,
                  64,
                  21,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  5,
                ]
                  .concat([e])
                  .concat(t.config)
                  .concat([6, 1, 2])
              );
            }),
            (t.mp4a = function (e) {
              var r = e.samplerate;
              return t.box(
                t.types.mp4a,
                new Uint8Array([
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  e.channelCount,
                  0,
                  16,
                  0,
                  0,
                  0,
                  0,
                  (r >> 8) & 255,
                  255 & r,
                  0,
                  0,
                ]),
                t.box(t.types.esds, t.esds(e))
              );
            }),
            (t.mp3 = function (e) {
              var r = e.samplerate;
              return t.box(
                t.types[".mp3"],
                new Uint8Array([
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  e.channelCount,
                  0,
                  16,
                  0,
                  0,
                  0,
                  0,
                  (r >> 8) & 255,
                  255 & r,
                  0,
                  0,
                ])
              );
            }),
            (t.stsd = function (e) {
              return "audio" === e.type
                ? e.isAAC || "mp3" !== e.codec
                  ? t.box(t.types.stsd, t.STSD, t.mp4a(e))
                  : t.box(t.types.stsd, t.STSD, t.mp3(e))
                : t.box(t.types.stsd, t.STSD, t.avc1(e));
            }),
            (t.tkhd = function (e) {
              var r = e.id,
                n = e.duration * e.timescale,
                a = e.width,
                s = e.height,
                o = Math.floor(n / (i + 1)),
                l = Math.floor(n % (i + 1));
              return t.box(
                t.types.tkhd,
                new Uint8Array([
                  1,
                  0,
                  0,
                  7,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  2,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  3,
                  (r >> 24) & 255,
                  (r >> 16) & 255,
                  (r >> 8) & 255,
                  255 & r,
                  0,
                  0,
                  0,
                  0,
                  o >> 24,
                  (o >> 16) & 255,
                  (o >> 8) & 255,
                  255 & o,
                  l >> 24,
                  (l >> 16) & 255,
                  (l >> 8) & 255,
                  255 & l,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  64,
                  0,
                  0,
                  0,
                  (a >> 8) & 255,
                  255 & a,
                  0,
                  0,
                  (s >> 8) & 255,
                  255 & s,
                  0,
                  0,
                ])
              );
            }),
            (t.traf = function (e, r) {
              var n = t.sdtp(e),
                a = e.id,
                s = Math.floor(r / (i + 1)),
                o = Math.floor(r % (i + 1));
              return t.box(
                t.types.traf,
                t.box(
                  t.types.tfhd,
                  new Uint8Array([
                    0,
                    0,
                    0,
                    0,
                    a >> 24,
                    (a >> 16) & 255,
                    (a >> 8) & 255,
                    255 & a,
                  ])
                ),
                t.box(
                  t.types.tfdt,
                  new Uint8Array([
                    1,
                    0,
                    0,
                    0,
                    s >> 24,
                    (s >> 16) & 255,
                    (s >> 8) & 255,
                    255 & s,
                    o >> 24,
                    (o >> 16) & 255,
                    (o >> 8) & 255,
                    255 & o,
                  ])
                ),
                t.trun(e, n.length + 16 + 20 + 8 + 16 + 8 + 8),
                n
              );
            }),
            (t.trak = function (e) {
              return (
                (e.duration = e.duration || 4294967295),
                t.box(t.types.trak, t.tkhd(e), t.mdia(e))
              );
            }),
            (t.trex = function (e) {
              var r = e.id;
              return t.box(
                t.types.trex,
                new Uint8Array([
                  0,
                  0,
                  0,
                  0,
                  r >> 24,
                  (r >> 16) & 255,
                  (r >> 8) & 255,
                  255 & r,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  1,
                ])
              );
            }),
            (t.trun = function (e, r) {
              var i,
                n,
                a,
                s,
                o,
                l,
                u = e.samples || [],
                d = u.length,
                c = 12 + 16 * d,
                h = new Uint8Array(c);
              for (
                r += 8 + c,
                  h.set(
                    [
                      0,
                      0,
                      15,
                      1,
                      (d >>> 24) & 255,
                      (d >>> 16) & 255,
                      (d >>> 8) & 255,
                      255 & d,
                      (r >>> 24) & 255,
                      (r >>> 16) & 255,
                      (r >>> 8) & 255,
                      255 & r,
                    ],
                    0
                  ),
                  i = 0;
                i < d;
                i++
              )
                (a = (n = u[i]).duration),
                  (s = n.size),
                  (o = n.flags),
                  (l = n.cts),
                  h.set(
                    [
                      (a >>> 24) & 255,
                      (a >>> 16) & 255,
                      (a >>> 8) & 255,
                      255 & a,
                      (s >>> 24) & 255,
                      (s >>> 16) & 255,
                      (s >>> 8) & 255,
                      255 & s,
                      (o.isLeading << 2) | o.dependsOn,
                      (o.isDependedOn << 6) |
                        (o.hasRedundancy << 4) |
                        (o.paddingValue << 1) |
                        o.isNonSync,
                      61440 & o.degradPrio,
                      15 & o.degradPrio,
                      (l >>> 24) & 255,
                      (l >>> 16) & 255,
                      (l >>> 8) & 255,
                      255 & l,
                    ],
                    12 + 16 * i
                  );
              return t.box(t.types.trun, h);
            }),
            (t.initSegment = function (e) {
              t.types || t.init();
              var r = t.moov(e),
                i = new Uint8Array(t.FTYP.byteLength + r.byteLength);
              return i.set(t.FTYP), i.set(r, t.FTYP.byteLength), i;
            }),
            t
          );
        })();
      (n.types = void 0),
        (n.HDLR_TYPES = void 0),
        (n.STTS = void 0),
        (n.STSC = void 0),
        (n.STCO = void 0),
        (n.STSZ = void 0),
        (n.VMHD = void 0),
        (n.SMHD = void 0),
        (n.STSD = void 0),
        (n.FTYP = void 0),
        (n.DINF = void 0),
        (e.default = n);
    },
    "./src/remux/mp4-remuxer.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "default", function () {
          return v;
        }),
        r.d(e, "normalizePts", function () {
          return p;
        });
      var i = r("./src/polyfills/number.ts"),
        n = r("./src/remux/aac-helper.ts"),
        a = r("./src/remux/mp4-generator.ts"),
        s = r("./src/events.ts"),
        o = r("./src/errors.ts"),
        l = r("./src/utils/logger.ts"),
        u = r("./src/types/loader.ts"),
        d = r("./src/utils/timescale-conversion.ts");
      function c() {
        return (c =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
            }
            return t;
          }).apply(this, arguments);
      }
      var h = null,
        f = null,
        g = !1,
        v = (function () {
          function t(t, e, r, i) {
            if (
              ((this.observer = void 0),
              (this.config = void 0),
              (this.typeSupported = void 0),
              (this.ISGenerated = !1),
              (this._initPTS = void 0),
              (this._initDTS = void 0),
              (this.nextAvcDts = null),
              (this.nextAudioPts = null),
              (this.isAudioContiguous = !1),
              (this.isVideoContiguous = !1),
              (this.observer = t),
              (this.config = e),
              (this.typeSupported = r),
              (this.ISGenerated = !1),
              null === h)
            ) {
              var n = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
              h = n ? parseInt(n[1]) : 0;
            }
            if (null === f) {
              var a = navigator.userAgent.match(/Safari\/(\d+)/i);
              f = a ? parseInt(a[1]) : 0;
            }
            g = (!!h && h < 75) || (!!f && f < 600);
          }
          var e = t.prototype;
          return (
            (e.destroy = function () {}),
            (e.resetTimeStamp = function (t) {
              l.logger.log("[mp4-remuxer]: initPTS & initDTS reset"),
                (this._initPTS = this._initDTS = t);
            }),
            (e.resetNextTimestamp = function () {
              l.logger.log("[mp4-remuxer]: reset next timestamp"),
                (this.isVideoContiguous = !1),
                (this.isAudioContiguous = !1);
            }),
            (e.resetInitSegment = function () {
              l.logger.log("[mp4-remuxer]: ISGenerated flag reset"),
                (this.ISGenerated = !1);
            }),
            (e.getVideoStartPts = function (t) {
              var e = !1,
                r = t.reduce(function (t, r) {
                  var i = r.pts - t;
                  return i < -4294967296
                    ? ((e = !0), p(t, r.pts))
                    : i > 0
                    ? t
                    : r.pts;
                }, t[0].pts);
              return e && l.logger.debug("PTS rollover detected"), r;
            }),
            (e.remux = function (t, e, r, i, n, a, s, o) {
              var d,
                c,
                h,
                f,
                g,
                v,
                m = n,
                y = n,
                E = t.pid > -1,
                T = e.pid > -1,
                S = e.samples.length,
                b = t.samples.length > 0,
                L = S > 1;
              if (((!E || b) && (!T || L)) || this.ISGenerated || s) {
                this.ISGenerated || (h = this.generateIS(t, e, n));
                var A = this.isVideoContiguous,
                  k = -1;
                if (
                  L &&
                  ((k = (function (t) {
                    for (var e = 0; e < t.length; e++) if (t[e].key) return e;
                    return -1;
                  })(e.samples)),
                  !A && this.config.forceKeyFrameOnDiscontinuity)
                )
                  if (((v = !0), k > 0)) {
                    l.logger.warn(
                      "[mp4-remuxer]: Dropped " +
                        k +
                        " out of " +
                        S +
                        " video samples due to a missing keyframe"
                    );
                    var D = this.getVideoStartPts(e.samples);
                    (e.samples = e.samples.slice(k)),
                      (e.dropped += k),
                      (y += (e.samples[0].pts - D) / (e.timescale || 9e4));
                  } else
                    -1 === k &&
                      (l.logger.warn(
                        "[mp4-remuxer]: No keyframe found out of " +
                          S +
                          " video samples"
                      ),
                      (v = !1));
                if (this.ISGenerated) {
                  if (b && L) {
                    var R = this.getVideoStartPts(e.samples),
                      _ = (p(t.samples[0].pts, R) - R) / e.inputTimeScale;
                    (m += Math.max(0, _)), (y += Math.max(0, -_));
                  }
                  if (b) {
                    if (
                      (t.samplerate ||
                        (l.logger.warn(
                          "[mp4-remuxer]: regenerate InitSegment as audio detected"
                        ),
                        (h = this.generateIS(t, e, n))),
                      (c = this.remuxAudio(
                        t,
                        m,
                        this.isAudioContiguous,
                        a,
                        T || L || o === u.PlaylistLevelType.AUDIO ? y : void 0
                      )),
                      L)
                    ) {
                      var I = c ? c.endPTS - c.startPTS : 0;
                      e.inputTimeScale ||
                        (l.logger.warn(
                          "[mp4-remuxer]: regenerate InitSegment as video detected"
                        ),
                        (h = this.generateIS(t, e, n))),
                        (d = this.remuxVideo(e, y, A, I));
                    }
                  } else L && (d = this.remuxVideo(e, y, A, 0));
                  d && ((d.firstKeyFrame = k), (d.independent = -1 !== k));
                }
              }
              return (
                this.ISGenerated &&
                  (r.samples.length && (g = this.remuxID3(r, n)),
                  i.samples.length && (f = this.remuxText(i, n))),
                {
                  audio: c,
                  video: d,
                  initSegment: h,
                  independent: v,
                  text: f,
                  id3: g,
                }
              );
            }),
            (e.generateIS = function (t, e, r) {
              var n,
                s,
                o,
                l = t.samples,
                u = e.samples,
                d = this.typeSupported,
                c = {},
                h = !Object(i.isFiniteNumber)(this._initPTS),
                f = "audio/mp4";
              if (
                (h && (n = s = 1 / 0),
                t.config &&
                  l.length &&
                  ((t.timescale = t.samplerate),
                  t.isAAC ||
                    (d.mpeg
                      ? ((f = "audio/mpeg"), (t.codec = ""))
                      : d.mp3 && (t.codec = "mp3")),
                  (c.audio = {
                    id: "audio",
                    container: f,
                    codec: t.codec,
                    initSegment:
                      !t.isAAC && d.mpeg
                        ? new Uint8Array(0)
                        : a.default.initSegment([t]),
                    metadata: { channelCount: t.channelCount },
                  }),
                  h &&
                    ((o = t.inputTimeScale),
                    (n = s = l[0].pts - Math.round(o * r)))),
                e.sps &&
                  e.pps &&
                  u.length &&
                  ((e.timescale = e.inputTimeScale),
                  (c.video = {
                    id: "main",
                    container: "video/mp4",
                    codec: e.codec,
                    initSegment: a.default.initSegment([e]),
                    metadata: { width: e.width, height: e.height },
                  }),
                  h))
              ) {
                o = e.inputTimeScale;
                var g = this.getVideoStartPts(u),
                  v = Math.round(o * r);
                (s = Math.min(s, p(u[0].dts, g) - v)), (n = Math.min(n, g - v));
              }
              if (Object.keys(c).length)
                return (
                  (this.ISGenerated = !0),
                  h && ((this._initPTS = n), (this._initDTS = s)),
                  { tracks: c, initPTS: n, timescale: o }
                );
            }),
            (e.remuxVideo = function (t, e, r, i) {
              var n,
                u,
                f,
                v = t.inputTimeScale,
                y = t.samples,
                E = [],
                T = y.length,
                S = this._initPTS,
                b = this.nextAvcDts,
                L = 8,
                A = Number.POSITIVE_INFINITY,
                k = Number.NEGATIVE_INFINITY,
                D = 0,
                R = !1;
              (r && null !== b) ||
                (b = e * v - (y[0].pts - p(y[0].dts, y[0].pts)));
              for (var _ = 0; _ < T; _++) {
                var I = y[_];
                (I.pts = p(I.pts - S, b)),
                  (I.dts = p(I.dts - S, b)),
                  I.dts > I.pts &&
                    (D = Math.max(Math.min(D, I.pts - I.dts), -18e3)),
                  I.dts < y[_ > 0 ? _ - 1 : _].dts && (R = !0);
              }
              R &&
                y.sort(function (t, e) {
                  var r = t.dts - e.dts,
                    i = t.pts - e.pts;
                  return r || i;
                }),
                (u = y[0].dts),
                (f = y[y.length - 1].dts);
              var C = Math.round((f - u) / (T - 1));
              if (D < 0) {
                if (D < -2 * C) {
                  l.logger.warn(
                    "PTS < DTS detected in video samples, offsetting DTS from PTS by " +
                      Object(d.toMsFromMpegTsClock)(-C, !0) +
                      " ms"
                  );
                  for (var w = D, x = 0; x < T; x++)
                    (y[x].dts = w = Math.max(w, y[x].pts - C)),
                      (y[x].pts = Math.max(w, y[x].pts));
                } else {
                  l.logger.warn(
                    "PTS < DTS detected in video samples, shifting DTS by " +
                      Object(d.toMsFromMpegTsClock)(D, !0) +
                      " ms to overcome this issue"
                  );
                  for (var O = 0; O < T; O++) y[O].dts = y[O].dts + D;
                }
                u = y[0].dts;
              }
              if (r) {
                var P = u - b,
                  F = P > C;
                if (F || P < -1) {
                  F
                    ? l.logger.warn(
                        "AVC: " +
                          Object(d.toMsFromMpegTsClock)(P, !0) +
                          " ms (" +
                          P +
                          "dts) hole between fragments detected, filling it"
                      )
                    : l.logger.warn(
                        "AVC: " +
                          Object(d.toMsFromMpegTsClock)(-P, !0) +
                          " ms (" +
                          P +
                          "dts) overlapping between fragments detected"
                      ),
                    (u = b);
                  var M = y[0].pts - P;
                  (y[0].dts = u),
                    (y[0].pts = M),
                    l.logger.log(
                      "Video: First PTS/DTS adjusted: " +
                        Object(d.toMsFromMpegTsClock)(M, !0) +
                        "/" +
                        Object(d.toMsFromMpegTsClock)(u, !0) +
                        ", delta: " +
                        Object(d.toMsFromMpegTsClock)(P, !0) +
                        " ms"
                    );
                }
              }
              g && (u = Math.max(0, u));
              for (var N = 0, B = 0, U = 0; U < T; U++) {
                for (
                  var G = y[U], j = G.units, K = j.length, V = 0, H = 0;
                  H < K;
                  H++
                )
                  V += j[H].data.length;
                (B += V),
                  (N += K),
                  (G.length = V),
                  (G.dts = Math.max(G.dts, u)),
                  (G.pts = Math.max(G.pts, G.dts, 0)),
                  (A = Math.min(G.pts, A)),
                  (k = Math.max(G.pts, k));
              }
              f = y[T - 1].dts;
              var W,
                Y = B + 4 * N + 8;
              try {
                W = new Uint8Array(Y);
              } catch (dt) {
                return void this.observer.emit(s.Events.ERROR, s.Events.ERROR, {
                  type: o.ErrorTypes.MUX_ERROR,
                  details: o.ErrorDetails.REMUX_ALLOC_ERROR,
                  fatal: !1,
                  bytes: Y,
                  reason: "fail allocating video mdat " + Y,
                });
              }
              var q = new DataView(W.buffer);
              q.setUint32(0, Y), W.set(a.default.types.mdat, 4);
              for (var z = 0; z < T; z++) {
                for (
                  var X = y[z], $ = X.units, Q = 0, J = 0, Z = $.length;
                  J < Z;
                  J++
                ) {
                  var tt = $[J],
                    et = tt.data,
                    rt = tt.data.byteLength;
                  q.setUint32(L, rt),
                    (L += 4),
                    W.set(et, L),
                    (L += rt),
                    (Q += 4 + rt);
                }
                if (z < T - 1) n = y[z + 1].dts - X.dts;
                else {
                  var it = this.config,
                    nt = X.dts - y[z > 0 ? z - 1 : z].dts;
                  if (it.stretchShortVideoTrack && null !== this.nextAudioPts) {
                    var at = Math.floor(it.maxBufferHole * v),
                      st = (i ? A + i * v : this.nextAudioPts) - X.pts;
                    st > at
                      ? ((n = st - nt) < 0 && (n = nt),
                        l.logger.log(
                          "[mp4-remuxer]: It is approximately " +
                            st / 90 +
                            " ms to the next segment; using duration " +
                            n / 90 +
                            " ms for the last video frame."
                        ))
                      : (n = nt);
                  } else n = nt;
                }
                var ot = Math.round(X.pts - X.dts);
                E.push(new m(X.key, n, Q, ot));
              }
              if (E.length && h && h < 70) {
                var lt = E[0].flags;
                (lt.dependsOn = 2), (lt.isNonSync = 0);
              }
              (this.nextAvcDts = b = f + n), (this.isVideoContiguous = !0);
              var ut = {
                data1: a.default.moof(
                  t.sequenceNumber++,
                  u,
                  c({}, t, { samples: E })
                ),
                data2: W,
                startPTS: A / v,
                endPTS: (k + n) / v,
                startDTS: u / v,
                endDTS: b / v,
                type: "video",
                hasAudio: !1,
                hasVideo: !0,
                nb: E.length,
                dropped: t.dropped,
              };
              return (t.samples = []), (t.dropped = 0), ut;
            }),
            (e.remuxAudio = function (t, e, r, i, u) {
              var d = t.inputTimeScale,
                h = d / (t.samplerate ? t.samplerate : d),
                f = t.isAAC ? 1024 : 1152,
                g = f * h,
                v = this._initPTS,
                y = !t.isAAC && this.typeSupported.mpeg,
                E = [],
                T = t.samples,
                S = y ? 0 : 8,
                b = this.nextAudioPts || -1,
                L = e * d;
              if (
                ((this.isAudioContiguous = r =
                  r ||
                  (T.length &&
                    b > 0 &&
                    ((i && Math.abs(L - b) < 9e3) ||
                      Math.abs(p(T[0].pts - v, L) - b) < 20 * g))),
                T.forEach(function (t) {
                  t.pts = p(t.pts - v, L);
                }),
                !r || b < 0)
              ) {
                if (
                  !(T = T.filter(function (t) {
                    return t.pts >= 0;
                  })).length
                )
                  return;
                b = 0 === u ? 0 : i ? Math.max(0, L) : T[0].pts;
              }
              if (t.isAAC)
                for (
                  var A = void 0 !== u,
                    k = this.config.maxAudioFramesDrift,
                    D = 0,
                    R = b;
                  D < T.length;
                  D++
                ) {
                  var _ = T[D],
                    I = _.pts,
                    C = I - R,
                    w = Math.abs((1e3 * C) / d);
                  if (C <= -k * g && A)
                    0 === D &&
                      (l.logger.warn(
                        "Audio frame @ " +
                          (I / d).toFixed(3) +
                          "s overlaps nextAudioPts by " +
                          Math.round((1e3 * C) / d) +
                          " ms."
                      ),
                      (this.nextAudioPts = b = R = I));
                  else if (C >= k * g && w < 1e4 && A) {
                    var x = Math.round(C / g);
                    (R = I - x * g) < 0 && (x--, (R += g)),
                      0 === D && (this.nextAudioPts = b = R),
                      l.logger.warn(
                        "[mp4-remuxer]: Injecting " +
                          x +
                          " audio frame @ " +
                          (R / d).toFixed(3) +
                          "s due to " +
                          Math.round((1e3 * C) / d) +
                          " ms gap."
                      );
                    for (var O = 0; O < x; O++) {
                      var P = Math.max(R, 0),
                        F = n.default.getSilentFrame(
                          t.manifestCodec || t.codec,
                          t.channelCount
                        );
                      F ||
                        (l.logger.log(
                          "[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."
                        ),
                        (F = _.unit.subarray())),
                        T.splice(D, 0, { unit: F, pts: P }),
                        (R += g),
                        D++;
                    }
                  }
                  (_.pts = R), (R += g);
                }
              for (var M, N = null, B = null, U = 0, G = T.length; G--; )
                U += T[G].unit.byteLength;
              for (var j = 0, K = T.length; j < K; j++) {
                var V = T[j],
                  H = V.unit,
                  W = V.pts;
                if (null !== B) E[j - 1].duration = Math.round((W - B) / h);
                else {
                  if ((r && t.isAAC && (W = b), (N = W), !(U > 0))) return;
                  U += S;
                  try {
                    M = new Uint8Array(U);
                  } catch (Z) {
                    return void this.observer.emit(
                      s.Events.ERROR,
                      s.Events.ERROR,
                      {
                        type: o.ErrorTypes.MUX_ERROR,
                        details: o.ErrorDetails.REMUX_ALLOC_ERROR,
                        fatal: !1,
                        bytes: U,
                        reason: "fail allocating audio mdat " + U,
                      }
                    );
                  }
                  y ||
                    (new DataView(M.buffer).setUint32(0, U),
                    M.set(a.default.types.mdat, 4));
                }
                M.set(H, S);
                var Y = H.byteLength;
                (S += Y), E.push(new m(!0, f, Y, 0)), (B = W);
              }
              var q = E.length;
              if (q) {
                var z = E[E.length - 1];
                this.nextAudioPts = b = B + h * z.duration;
                var X = y
                  ? new Uint8Array(0)
                  : a.default.moof(
                      t.sequenceNumber++,
                      N / h,
                      c({}, t, { samples: E })
                    );
                t.samples = [];
                var $ = N / d,
                  Q = b / d,
                  J = {
                    data1: X,
                    data2: M,
                    startPTS: $,
                    endPTS: Q,
                    startDTS: $,
                    endDTS: Q,
                    type: "audio",
                    hasAudio: !0,
                    hasVideo: !1,
                    nb: q,
                  };
                return (this.isAudioContiguous = !0), J;
              }
            }),
            (e.remuxEmptyAudio = function (t, e, r, i) {
              var a = t.inputTimeScale,
                s = a / (t.samplerate ? t.samplerate : a),
                o = this.nextAudioPts,
                u = (null !== o ? o : i.startDTS * a) + this._initDTS,
                d = i.endDTS * a + this._initDTS,
                c = 1024 * s,
                h = Math.ceil((d - u) / c),
                f = n.default.getSilentFrame(
                  t.manifestCodec || t.codec,
                  t.channelCount
                );
              if ((l.logger.warn("[mp4-remuxer]: remux empty Audio"), f)) {
                for (var g = [], v = 0; v < h; v++) {
                  var p = u + v * c;
                  g.push({ unit: f, pts: p, dts: p });
                }
                return (t.samples = g), this.remuxAudio(t, e, r, !1);
              }
              l.logger.trace(
                "[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec"
              );
            }),
            (e.remuxID3 = function (t, e) {
              var r = t.samples.length;
              if (r) {
                for (
                  var i = t.inputTimeScale,
                    n = this._initPTS,
                    a = this._initDTS,
                    s = 0;
                  s < r;
                  s++
                ) {
                  var o = t.samples[s];
                  (o.pts = p(o.pts - n, e * i) / i),
                    (o.dts = p(o.dts - a, e * i) / i);
                }
                var l = t.samples;
                return (t.samples = []), { samples: l };
              }
            }),
            (e.remuxText = function (t, e) {
              var r = t.samples.length;
              if (r) {
                for (
                  var i = t.inputTimeScale, n = this._initPTS, a = 0;
                  a < r;
                  a++
                ) {
                  var s = t.samples[a];
                  s.pts = p(s.pts - n, e * i) / i;
                }
                t.samples.sort(function (t, e) {
                  return t.pts - e.pts;
                });
                var o = t.samples;
                return (t.samples = []), { samples: o };
              }
            }),
            t
          );
        })();
      function p(t, e) {
        var r;
        if (null === e) return t;
        for (
          r = e < t ? -8589934592 : 8589934592;
          Math.abs(t - e) > 4294967296;

        )
          t += r;
        return t;
      }
      var m = function (t, e, r, i) {
          (this.size = void 0),
            (this.duration = void 0),
            (this.cts = void 0),
            (this.flags = void 0),
            (this.duration = e),
            (this.size = r),
            (this.cts = i),
            (this.flags = new y(t));
        },
        y = function (t) {
          (this.isLeading = 0),
            (this.isDependedOn = 0),
            (this.hasRedundancy = 0),
            (this.degradPrio = 0),
            (this.dependsOn = 1),
            (this.isNonSync = 1),
            (this.dependsOn = t ? 2 : 1),
            (this.isNonSync = t ? 0 : 1);
        };
    },
    "./src/remux/passthrough-remuxer.ts": function (t, e, r) {
      r.r(e);
      var i = r("./src/polyfills/number.ts"),
        n = r("./src/utils/mp4-tools.ts"),
        a = r("./src/loader/fragment.ts"),
        s = r("./src/utils/logger.ts"),
        o = (function () {
          function t() {
            (this.emitInitSegment = !1),
              (this.audioCodec = void 0),
              (this.videoCodec = void 0),
              (this.initData = void 0),
              (this.initPTS = void 0),
              (this.initTracks = void 0),
              (this.lastEndDTS = null);
          }
          var e = t.prototype;
          return (
            (e.destroy = function () {}),
            (e.resetTimeStamp = function (t) {
              (this.initPTS = t), (this.lastEndDTS = null);
            }),
            (e.resetNextTimestamp = function () {
              this.lastEndDTS = null;
            }),
            (e.resetInitSegment = function (t, e, r) {
              (this.audioCodec = e),
                (this.videoCodec = r),
                this.generateInitSegment(t),
                (this.emitInitSegment = !0);
            }),
            (e.generateInitSegment = function (t) {
              var e = this.audioCodec,
                r = this.videoCodec;
              if (!t || !t.byteLength)
                return (
                  (this.initTracks = void 0), void (this.initData = void 0)
                );
              var i = (this.initData = Object(n.parseInitSegment)(t));
              e || (e = u(i.audio, a.ElementaryStreamTypes.AUDIO)),
                r || (r = u(i.video, a.ElementaryStreamTypes.VIDEO));
              var o = {};
              i.audio && i.video
                ? (o.audiovideo = {
                    container: "video/mp4",
                    codec: e + "," + r,
                    initSegment: t,
                    id: "main",
                  })
                : i.audio
                ? (o.audio = {
                    container: "audio/mp4",
                    codec: e,
                    initSegment: t,
                    id: "audio",
                  })
                : i.video
                ? (o.video = {
                    container: "video/mp4",
                    codec: r,
                    initSegment: t,
                    id: "main",
                  })
                : s.logger.warn(
                    "[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."
                  ),
                (this.initTracks = o);
            }),
            (e.remux = function (t, e, r, a, o) {
              var u = this.initPTS,
                d = this.lastEndDTS,
                c = {
                  audio: void 0,
                  video: void 0,
                  text: a,
                  id3: r,
                  initSegment: void 0,
                };
              Object(i.isFiniteNumber)(d) || (d = this.lastEndDTS = o || 0);
              var h = e.samples;
              if (!h || !h.length) return c;
              var f = { initPTS: void 0, timescale: 1 },
                g = this.initData;
              if (
                ((g && g.length) ||
                  (this.generateInitSegment(h), (g = this.initData)),
                !g || !g.length)
              )
                return (
                  s.logger.warn(
                    "[passthrough-remuxer.ts]: Failed to generate initSegment."
                  ),
                  c
                );
              this.emitInitSegment &&
                ((f.tracks = this.initTracks), (this.emitInitSegment = !1)),
                Object(i.isFiniteNumber)(u) ||
                  (this.initPTS = f.initPTS = u = l(g, h, d));
              var v = Object(n.getDuration)(h, g),
                p = d,
                m = v + p;
              Object(n.offsetStartDTS)(g, h, u),
                v > 0
                  ? (this.lastEndDTS = m)
                  : (s.logger.warn(
                      "Duration parsed from mp4 should be greater than zero"
                    ),
                    this.resetNextTimestamp());
              var y = !!g.audio,
                E = !!g.video,
                T = "";
              y && (T += "audio"), E && (T += "video");
              var S = {
                data1: h,
                startPTS: p,
                startDTS: p,
                endPTS: m,
                endDTS: m,
                type: T,
                hasAudio: y,
                hasVideo: E,
                nb: 1,
                dropped: 0,
              };
              return (
                (c.audio = "audio" === S.type ? S : void 0),
                (c.video = "audio" !== S.type ? S : void 0),
                (c.text = a),
                (c.id3 = r),
                (c.initSegment = f),
                c
              );
            }),
            t
          );
        })(),
        l = function (t, e, r) {
          return Object(n.getStartDTS)(t, e) - r;
        };
      function u(t, e) {
        var r = null == t ? void 0 : t.codec;
        return r && r.length > 4
          ? r
          : "hvc1" === r
          ? "hvc1.1.c.L120.90"
          : "av01" === r
          ? "av01.0.04M.08"
          : "avc1" === r || e === a.ElementaryStreamTypes.VIDEO
          ? "avc1.42e01e"
          : "mp4a.40.5";
      }
      e.default = o;
    },
    "./src/task-loop.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "default", function () {
          return i;
        });
      var i = (function () {
        function t() {
          (this._boundTick = void 0),
            (this._tickTimer = null),
            (this._tickInterval = null),
            (this._tickCallCount = 0),
            (this._boundTick = this.tick.bind(this));
        }
        var e = t.prototype;
        return (
          (e.destroy = function () {
            this.onHandlerDestroying(), this.onHandlerDestroyed();
          }),
          (e.onHandlerDestroying = function () {
            this.clearNextTick(), this.clearInterval();
          }),
          (e.onHandlerDestroyed = function () {}),
          (e.hasInterval = function () {
            return !!this._tickInterval;
          }),
          (e.hasNextTick = function () {
            return !!this._tickTimer;
          }),
          (e.setInterval = function (t) {
            return (
              !this._tickInterval &&
              ((this._tickInterval = self.setInterval(this._boundTick, t)), !0)
            );
          }),
          (e.clearInterval = function () {
            return (
              !!this._tickInterval &&
              (self.clearInterval(this._tickInterval),
              (this._tickInterval = null),
              !0)
            );
          }),
          (e.clearNextTick = function () {
            return (
              !!this._tickTimer &&
              (self.clearTimeout(this._tickTimer), (this._tickTimer = null), !0)
            );
          }),
          (e.tick = function () {
            this._tickCallCount++,
              1 === this._tickCallCount &&
                (this.doTick(),
                this._tickCallCount > 1 && this.tickImmediate(),
                (this._tickCallCount = 0));
          }),
          (e.tickImmediate = function () {
            this.clearNextTick(),
              (this._tickTimer = self.setTimeout(this._boundTick, 0));
          }),
          (e.doTick = function () {}),
          t
        );
      })();
    },
    "./src/types/level.ts": function (t, e, r) {
      var i, n;
      function a(t, e) {
        var r = t.canSkipUntil,
          n = t.canSkipDateRanges,
          a = t.endSN;
        return r && (void 0 !== e ? e - a : 0) < r ? (n ? i.v2 : i.Yes) : i.No;
      }
      r.r(e),
        r.d(e, "HlsSkip", function () {
          return i;
        }),
        r.d(e, "getSkipValue", function () {
          return a;
        }),
        r.d(e, "HlsUrlParameters", function () {
          return s;
        }),
        r.d(e, "Level", function () {
          return o;
        }),
        ((n = i || (i = {})).No = ""),
        (n.Yes = "YES"),
        (n.v2 = "v2");
      var s = (function () {
          function t(t, e, r) {
            (this.msn = void 0),
              (this.part = void 0),
              (this.skip = void 0),
              (this.msn = t),
              (this.part = e),
              (this.skip = r);
          }
          return (
            (t.prototype.addDirectives = function (t) {
              var e = new self.URL(t);
              return (
                void 0 !== this.msn &&
                  e.searchParams.set("_HLS_msn", this.msn.toString()),
                void 0 !== this.part &&
                  e.searchParams.set("_HLS_part", this.part.toString()),
                this.skip && e.searchParams.set("_HLS_skip", this.skip),
                e.toString()
              );
            }),
            t
          );
        })(),
        o = (function () {
          function t(t) {
            (this.attrs = void 0),
              (this.audioCodec = void 0),
              (this.bitrate = void 0),
              (this.codecSet = void 0),
              (this.height = void 0),
              (this.id = void 0),
              (this.name = void 0),
              (this.videoCodec = void 0),
              (this.width = void 0),
              (this.unknownCodecs = void 0),
              (this.audioGroupIds = void 0),
              (this.details = void 0),
              (this.fragmentError = 0),
              (this.loadError = 0),
              (this.loaded = void 0),
              (this.realBitrate = 0),
              (this.textGroupIds = void 0),
              (this.url = void 0),
              (this._urlId = 0),
              (this.url = [t.url]),
              (this.attrs = t.attrs),
              (this.bitrate = t.bitrate),
              t.details && (this.details = t.details),
              (this.id = t.id || 0),
              (this.name = t.name),
              (this.width = t.width || 0),
              (this.height = t.height || 0),
              (this.audioCodec = t.audioCodec),
              (this.videoCodec = t.videoCodec),
              (this.unknownCodecs = t.unknownCodecs),
              (this.codecSet = [t.videoCodec, t.audioCodec]
                .filter(function (t) {
                  return t;
                })
                .join(",")
                .replace(/\.[^.,]+/g, ""));
          }
          var e;
          return (
            (e = [
              {
                key: "maxBitrate",
                get: function () {
                  return Math.max(this.realBitrate, this.bitrate);
                },
              },
              {
                key: "uri",
                get: function () {
                  return this.url[this._urlId] || "";
                },
              },
              {
                key: "urlId",
                get: function () {
                  return this._urlId;
                },
                set: function (t) {
                  var e = t % this.url.length;
                  this._urlId !== e &&
                    ((this.details = void 0), (this._urlId = e));
                },
              },
            ]) &&
              (function (t, e) {
                for (var r = 0; r < e.length; r++) {
                  var i = e[r];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i);
                }
              })(t.prototype, e),
            t
          );
        })();
    },
    "./src/types/loader.ts": function (t, e, r) {
      var i, n, a, s;
      r.r(e),
        r.d(e, "PlaylistContextType", function () {
          return i;
        }),
        r.d(e, "PlaylistLevelType", function () {
          return a;
        }),
        ((n = i || (i = {})).MANIFEST = "manifest"),
        (n.LEVEL = "level"),
        (n.AUDIO_TRACK = "audioTrack"),
        (n.SUBTITLE_TRACK = "subtitleTrack"),
        ((s = a || (a = {})).MAIN = "main"),
        (s.AUDIO = "audio"),
        (s.SUBTITLE = "subtitle");
    },
    "./src/types/transmuxer.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "ChunkMetadata", function () {
          return i;
        });
      var i = function (t, e, r, i, n, a) {
        void 0 === i && (i = 0),
          void 0 === n && (n = -1),
          void 0 === a && (a = !1),
          (this.level = void 0),
          (this.sn = void 0),
          (this.part = void 0),
          (this.id = void 0),
          (this.size = void 0),
          (this.partial = void 0),
          (this.transmuxing = {
            start: 0,
            executeStart: 0,
            executeEnd: 0,
            end: 0,
          }),
          (this.buffering = {
            audio: { start: 0, executeStart: 0, executeEnd: 0, end: 0 },
            video: { start: 0, executeStart: 0, executeEnd: 0, end: 0 },
            audiovideo: { start: 0, executeStart: 0, executeEnd: 0, end: 0 },
          }),
          (this.level = t),
          (this.sn = e),
          (this.id = r),
          (this.size = i),
          (this.part = n),
          (this.partial = a);
      };
    },
    "./src/utils/attr-list.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "AttrList", function () {
          return a;
        });
      var i = /^(\d+)x(\d+)$/,
        n = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
        a = (function () {
          function t(e) {
            for (var r in ("string" == typeof e && (e = t.parseAttrList(e)), e))
              e.hasOwnProperty(r) && (this[r] = e[r]);
          }
          var e = t.prototype;
          return (
            (e.decimalInteger = function (t) {
              var e = parseInt(this[t], 10);
              return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e;
            }),
            (e.hexadecimalInteger = function (t) {
              if (this[t]) {
                var e = (this[t] || "0x").slice(2);
                e = (1 & e.length ? "0" : "") + e;
                for (
                  var r = new Uint8Array(e.length / 2), i = 0;
                  i < e.length / 2;
                  i++
                )
                  r[i] = parseInt(e.slice(2 * i, 2 * i + 2), 16);
                return r;
              }
              return null;
            }),
            (e.hexadecimalIntegerAsNumber = function (t) {
              var e = parseInt(this[t], 16);
              return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e;
            }),
            (e.decimalFloatingPoint = function (t) {
              return parseFloat(this[t]);
            }),
            (e.optionalFloat = function (t, e) {
              var r = this[t];
              return r ? parseFloat(r) : e;
            }),
            (e.enumeratedString = function (t) {
              return this[t];
            }),
            (e.bool = function (t) {
              return "YES" === this[t];
            }),
            (e.decimalResolution = function (t) {
              var e = i.exec(this[t]);
              if (null !== e)
                return {
                  width: parseInt(e[1], 10),
                  height: parseInt(e[2], 10),
                };
            }),
            (t.parseAttrList = function (t) {
              var e,
                r = {};
              for (n.lastIndex = 0; null !== (e = n.exec(t)); ) {
                var i = e[2];
                0 === i.indexOf('"') &&
                  i.lastIndexOf('"') === i.length - 1 &&
                  (i = i.slice(1, -1)),
                  (r[e[1]] = i);
              }
              return r;
            }),
            t
          );
        })();
    },
    "./src/utils/binary-search.ts": function (t, e, r) {
      r.r(e),
        (e.default = {
          search: function (t, e) {
            for (var r = 0, i = t.length - 1, n = null, a = null; r <= i; ) {
              var s = e((a = t[(n = ((r + i) / 2) | 0)]));
              if (s > 0) r = n + 1;
              else {
                if (!(s < 0)) return a;
                i = n - 1;
              }
            }
            return null;
          },
        });
    },
    "./src/utils/buffer-helper.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "BufferHelper", function () {
          return a;
        });
      var i = r("./src/utils/logger.ts"),
        n = {
          length: 0,
          start: function () {
            return 0;
          },
          end: function () {
            return 0;
          },
        },
        a = (function () {
          function t() {}
          return (
            (t.isBuffered = function (e, r) {
              try {
                if (e)
                  for (var i = t.getBuffered(e), n = 0; n < i.length; n++)
                    if (r >= i.start(n) && r <= i.end(n)) return !0;
              } catch (a) {}
              return !1;
            }),
            (t.bufferInfo = function (e, r, i) {
              try {
                if (e) {
                  var n,
                    a = t.getBuffered(e),
                    s = [];
                  for (n = 0; n < a.length; n++)
                    s.push({ start: a.start(n), end: a.end(n) });
                  return this.bufferedInfo(s, r, i);
                }
              } catch (o) {}
              return { len: 0, start: r, end: r, nextStart: void 0 };
            }),
            (t.bufferedInfo = function (t, e, r) {
              (e = Math.max(0, e)),
                t.sort(function (t, e) {
                  return t.start - e.start || e.end - t.end;
                });
              var i = [];
              if (r)
                for (var n = 0; n < t.length; n++) {
                  var a = i.length;
                  if (a) {
                    var s = i[a - 1].end;
                    t[n].start - s < r
                      ? t[n].end > s && (i[a - 1].end = t[n].end)
                      : i.push(t[n]);
                  } else i.push(t[n]);
                }
              else i = t;
              for (var o, l = 0, u = e, d = e, c = 0; c < i.length; c++) {
                var h = i[c].start,
                  f = i[c].end;
                if (e + r >= h && e < f) (u = h), (l = (d = f) - e);
                else if (e + r < h) {
                  o = h;
                  break;
                }
              }
              return { len: l, start: u || 0, end: d || 0, nextStart: o };
            }),
            (t.getBuffered = function (t) {
              try {
                return t.buffered;
              } catch (e) {
                return i.logger.log("failed to get media.buffered", e), n;
              }
            }),
            t
          );
        })();
    },
    "./src/utils/cea-608-parser.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "Row", function () {
          return E;
        }),
        r.d(e, "CaptionScreen", function () {
          return T;
        });
      var i,
        n,
        a = r("./src/utils/logger.ts"),
        s = {
          42: 225,
          92: 233,
          94: 237,
          95: 243,
          96: 250,
          123: 231,
          124: 247,
          125: 209,
          126: 241,
          127: 9608,
          128: 174,
          129: 176,
          130: 189,
          131: 191,
          132: 8482,
          133: 162,
          134: 163,
          135: 9834,
          136: 224,
          137: 32,
          138: 232,
          139: 226,
          140: 234,
          141: 238,
          142: 244,
          143: 251,
          144: 193,
          145: 201,
          146: 211,
          147: 218,
          148: 220,
          149: 252,
          150: 8216,
          151: 161,
          152: 42,
          153: 8217,
          154: 9473,
          155: 169,
          156: 8480,
          157: 8226,
          158: 8220,
          159: 8221,
          160: 192,
          161: 194,
          162: 199,
          163: 200,
          164: 202,
          165: 203,
          166: 235,
          167: 206,
          168: 207,
          169: 239,
          170: 212,
          171: 217,
          172: 249,
          173: 219,
          174: 171,
          175: 187,
          176: 195,
          177: 227,
          178: 205,
          179: 204,
          180: 236,
          181: 210,
          182: 242,
          183: 213,
          184: 245,
          185: 123,
          186: 125,
          187: 92,
          188: 94,
          189: 95,
          190: 124,
          191: 8764,
          192: 196,
          193: 228,
          194: 214,
          195: 246,
          196: 223,
          197: 165,
          198: 164,
          199: 9475,
          200: 197,
          201: 229,
          202: 216,
          203: 248,
          204: 9487,
          205: 9491,
          206: 9495,
          207: 9499,
        },
        o = function (t) {
          var e = t;
          return s.hasOwnProperty(t) && (e = s[t]), String.fromCharCode(e);
        },
        l = 15,
        u = 100,
        d = { 17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14 },
        c = { 17: 2, 18: 4, 21: 6, 22: 8, 23: 10, 19: 13, 20: 15 },
        h = { 25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14 },
        f = { 25: 2, 26: 4, 29: 6, 30: 8, 31: 10, 27: 13, 28: 15 },
        g = [
          "white",
          "green",
          "blue",
          "cyan",
          "red",
          "yellow",
          "magenta",
          "black",
          "transparent",
        ];
      ((n = i || (i = {}))[(n.ERROR = 0)] = "ERROR"),
        (n[(n.TEXT = 1)] = "TEXT"),
        (n[(n.WARNING = 2)] = "WARNING"),
        (n[(n.INFO = 2)] = "INFO"),
        (n[(n.DEBUG = 3)] = "DEBUG"),
        (n[(n.DATA = 3)] = "DATA");
      var v = (function () {
          function t() {
            (this.time = null), (this.verboseLevel = i.ERROR);
          }
          return (
            (t.prototype.log = function (t, e) {
              this.verboseLevel >= t &&
                a.logger.log(this.time + " [" + t + "] " + e);
            }),
            t
          );
        })(),
        p = function (t) {
          for (var e = [], r = 0; r < t.length; r++) e.push(t[r].toString(16));
          return e;
        },
        m = (function () {
          function t(t, e, r, i, n) {
            (this.foreground = void 0),
              (this.underline = void 0),
              (this.italics = void 0),
              (this.background = void 0),
              (this.flash = void 0),
              (this.foreground = t || "white"),
              (this.underline = e || !1),
              (this.italics = r || !1),
              (this.background = i || "black"),
              (this.flash = n || !1);
          }
          var e = t.prototype;
          return (
            (e.reset = function () {
              (this.foreground = "white"),
                (this.underline = !1),
                (this.italics = !1),
                (this.background = "black"),
                (this.flash = !1);
            }),
            (e.setStyles = function (t) {
              for (
                var e = [
                    "foreground",
                    "underline",
                    "italics",
                    "background",
                    "flash",
                  ],
                  r = 0;
                r < e.length;
                r++
              ) {
                var i = e[r];
                t.hasOwnProperty(i) && (this[i] = t[i]);
              }
            }),
            (e.isDefault = function () {
              return (
                "white" === this.foreground &&
                !this.underline &&
                !this.italics &&
                "black" === this.background &&
                !this.flash
              );
            }),
            (e.equals = function (t) {
              return (
                this.foreground === t.foreground &&
                this.underline === t.underline &&
                this.italics === t.italics &&
                this.background === t.background &&
                this.flash === t.flash
              );
            }),
            (e.copy = function (t) {
              (this.foreground = t.foreground),
                (this.underline = t.underline),
                (this.italics = t.italics),
                (this.background = t.background),
                (this.flash = t.flash);
            }),
            (e.toString = function () {
              return (
                "color=" +
                this.foreground +
                ", underline=" +
                this.underline +
                ", italics=" +
                this.italics +
                ", background=" +
                this.background +
                ", flash=" +
                this.flash
              );
            }),
            t
          );
        })(),
        y = (function () {
          function t(t, e, r, i, n, a) {
            (this.uchar = void 0),
              (this.penState = void 0),
              (this.uchar = t || " "),
              (this.penState = new m(e, r, i, n, a));
          }
          var e = t.prototype;
          return (
            (e.reset = function () {
              (this.uchar = " "), this.penState.reset();
            }),
            (e.setChar = function (t, e) {
              (this.uchar = t), this.penState.copy(e);
            }),
            (e.setPenState = function (t) {
              this.penState.copy(t);
            }),
            (e.equals = function (t) {
              return this.uchar === t.uchar && this.penState.equals(t.penState);
            }),
            (e.copy = function (t) {
              (this.uchar = t.uchar), this.penState.copy(t.penState);
            }),
            (e.isEmpty = function () {
              return " " === this.uchar && this.penState.isDefault();
            }),
            t
          );
        })(),
        E = (function () {
          function t(t) {
            (this.chars = void 0),
              (this.pos = void 0),
              (this.currPenState = void 0),
              (this.cueStartTime = void 0),
              (this.logger = void 0),
              (this.chars = []);
            for (var e = 0; e < u; e++) this.chars.push(new y());
            (this.logger = t), (this.pos = 0), (this.currPenState = new m());
          }
          var e = t.prototype;
          return (
            (e.equals = function (t) {
              for (var e = !0, r = 0; r < u; r++)
                if (!this.chars[r].equals(t.chars[r])) {
                  e = !1;
                  break;
                }
              return e;
            }),
            (e.copy = function (t) {
              for (var e = 0; e < u; e++) this.chars[e].copy(t.chars[e]);
            }),
            (e.isEmpty = function () {
              for (var t = !0, e = 0; e < u; e++)
                if (!this.chars[e].isEmpty()) {
                  t = !1;
                  break;
                }
              return t;
            }),
            (e.setCursor = function (t) {
              this.pos !== t && (this.pos = t),
                this.pos < 0
                  ? (this.logger.log(
                      i.DEBUG,
                      "Negative cursor position " + this.pos
                    ),
                    (this.pos = 0))
                  : this.pos > u &&
                    (this.logger.log(
                      i.DEBUG,
                      "Too large cursor position " + this.pos
                    ),
                    (this.pos = u));
            }),
            (e.moveCursor = function (t) {
              var e = this.pos + t;
              if (t > 1)
                for (var r = this.pos + 1; r < e + 1; r++)
                  this.chars[r].setPenState(this.currPenState);
              this.setCursor(e);
            }),
            (e.backSpace = function () {
              this.moveCursor(-1),
                this.chars[this.pos].setChar(" ", this.currPenState);
            }),
            (e.insertChar = function (t) {
              t >= 144 && this.backSpace();
              var e = o(t);
              this.pos >= u
                ? this.logger.log(
                    i.ERROR,
                    "Cannot insert " +
                      t.toString(16) +
                      " (" +
                      e +
                      ") at position " +
                      this.pos +
                      ". Skipping it!"
                  )
                : (this.chars[this.pos].setChar(e, this.currPenState),
                  this.moveCursor(1));
            }),
            (e.clearFromPos = function (t) {
              var e;
              for (e = t; e < u; e++) this.chars[e].reset();
            }),
            (e.clear = function () {
              this.clearFromPos(0), (this.pos = 0), this.currPenState.reset();
            }),
            (e.clearToEndOfRow = function () {
              this.clearFromPos(this.pos);
            }),
            (e.getTextString = function () {
              for (var t = [], e = !0, r = 0; r < u; r++) {
                var i = this.chars[r].uchar;
                " " !== i && (e = !1), t.push(i);
              }
              return e ? "" : t.join("");
            }),
            (e.setPenStyles = function (t) {
              this.currPenState.setStyles(t),
                this.chars[this.pos].setPenState(this.currPenState);
            }),
            t
          );
        })(),
        T = (function () {
          function t(t) {
            (this.rows = void 0),
              (this.currRow = void 0),
              (this.nrRollUpRows = void 0),
              (this.lastOutputScreen = void 0),
              (this.logger = void 0),
              (this.rows = []);
            for (var e = 0; e < l; e++) this.rows.push(new E(t));
            (this.logger = t),
              (this.currRow = 14),
              (this.nrRollUpRows = null),
              (this.lastOutputScreen = null),
              this.reset();
          }
          var e = t.prototype;
          return (
            (e.reset = function () {
              for (var t = 0; t < l; t++) this.rows[t].clear();
              this.currRow = 14;
            }),
            (e.equals = function (t) {
              for (var e = !0, r = 0; r < l; r++)
                if (!this.rows[r].equals(t.rows[r])) {
                  e = !1;
                  break;
                }
              return e;
            }),
            (e.copy = function (t) {
              for (var e = 0; e < l; e++) this.rows[e].copy(t.rows[e]);
            }),
            (e.isEmpty = function () {
              for (var t = !0, e = 0; e < l; e++)
                if (!this.rows[e].isEmpty()) {
                  t = !1;
                  break;
                }
              return t;
            }),
            (e.backSpace = function () {
              this.rows[this.currRow].backSpace();
            }),
            (e.clearToEndOfRow = function () {
              this.rows[this.currRow].clearToEndOfRow();
            }),
            (e.insertChar = function (t) {
              this.rows[this.currRow].insertChar(t);
            }),
            (e.setPen = function (t) {
              this.rows[this.currRow].setPenStyles(t);
            }),
            (e.moveCursor = function (t) {
              this.rows[this.currRow].moveCursor(t);
            }),
            (e.setCursor = function (t) {
              this.logger.log(i.INFO, "setCursor: " + t),
                this.rows[this.currRow].setCursor(t);
            }),
            (e.setPAC = function (t) {
              this.logger.log(i.INFO, "pacData = " + JSON.stringify(t));
              var e = t.row - 1;
              if (
                (this.nrRollUpRows &&
                  e < this.nrRollUpRows - 1 &&
                  (e = this.nrRollUpRows - 1),
                this.nrRollUpRows && this.currRow !== e)
              ) {
                for (var r = 0; r < l; r++) this.rows[r].clear();
                var n = this.currRow + 1 - this.nrRollUpRows,
                  a = this.lastOutputScreen;
                if (a) {
                  var s = a.rows[n].cueStartTime,
                    o = this.logger.time;
                  if (s && null !== o && s < o)
                    for (var u = 0; u < this.nrRollUpRows; u++)
                      this.rows[e - this.nrRollUpRows + u + 1].copy(
                        a.rows[n + u]
                      );
                }
              }
              this.currRow = e;
              var d = this.rows[this.currRow];
              if (null !== t.indent) {
                var c = t.indent,
                  h = Math.max(c - 1, 0);
                d.setCursor(t.indent),
                  (t.color = d.chars[h].penState.foreground);
              }
              var f = {
                foreground: t.color,
                underline: t.underline,
                italics: t.italics,
                background: "black",
                flash: !1,
              };
              this.setPen(f);
            }),
            (e.setBkgData = function (t) {
              this.logger.log(i.INFO, "bkgData = " + JSON.stringify(t)),
                this.backSpace(),
                this.setPen(t),
                this.insertChar(32);
            }),
            (e.setRollUpRows = function (t) {
              this.nrRollUpRows = t;
            }),
            (e.rollUp = function () {
              if (null !== this.nrRollUpRows) {
                this.logger.log(i.TEXT, this.getDisplayText());
                var t = this.currRow + 1 - this.nrRollUpRows,
                  e = this.rows.splice(t, 1)[0];
                e.clear(),
                  this.rows.splice(this.currRow, 0, e),
                  this.logger.log(i.INFO, "Rolling up");
              } else
                this.logger.log(
                  i.DEBUG,
                  "roll_up but nrRollUpRows not set yet"
                );
            }),
            (e.getDisplayText = function (t) {
              t = t || !1;
              for (var e = [], r = "", i = -1, n = 0; n < l; n++) {
                var a = this.rows[n].getTextString();
                a &&
                  ((i = n + 1),
                  t ? e.push("Row " + i + ": '" + a + "'") : e.push(a.trim()));
              }
              return (
                e.length > 0 &&
                  (r = t ? "[" + e.join(" | ") + "]" : e.join("\n")),
                r
              );
            }),
            (e.getTextAndFormat = function () {
              return this.rows;
            }),
            t
          );
        })(),
        S = (function () {
          function t(t, e, r) {
            (this.chNr = void 0),
              (this.outputFilter = void 0),
              (this.mode = void 0),
              (this.verbose = void 0),
              (this.displayedMemory = void 0),
              (this.nonDisplayedMemory = void 0),
              (this.lastOutputScreen = void 0),
              (this.currRollUpRow = void 0),
              (this.writeScreen = void 0),
              (this.cueStartTime = void 0),
              (this.logger = void 0),
              (this.chNr = t),
              (this.outputFilter = e),
              (this.mode = null),
              (this.verbose = 0),
              (this.displayedMemory = new T(r)),
              (this.nonDisplayedMemory = new T(r)),
              (this.lastOutputScreen = new T(r)),
              (this.currRollUpRow = this.displayedMemory.rows[14]),
              (this.writeScreen = this.displayedMemory),
              (this.mode = null),
              (this.cueStartTime = null),
              (this.logger = r);
          }
          var e = t.prototype;
          return (
            (e.reset = function () {
              (this.mode = null),
                this.displayedMemory.reset(),
                this.nonDisplayedMemory.reset(),
                this.lastOutputScreen.reset(),
                this.outputFilter.reset(),
                (this.currRollUpRow = this.displayedMemory.rows[14]),
                (this.writeScreen = this.displayedMemory),
                (this.mode = null),
                (this.cueStartTime = null);
            }),
            (e.getHandler = function () {
              return this.outputFilter;
            }),
            (e.setHandler = function (t) {
              this.outputFilter = t;
            }),
            (e.setPAC = function (t) {
              this.writeScreen.setPAC(t);
            }),
            (e.setBkgData = function (t) {
              this.writeScreen.setBkgData(t);
            }),
            (e.setMode = function (t) {
              t !== this.mode &&
                ((this.mode = t),
                this.logger.log(i.INFO, "MODE=" + t),
                "MODE_POP-ON" === this.mode
                  ? (this.writeScreen = this.nonDisplayedMemory)
                  : ((this.writeScreen = this.displayedMemory),
                    this.writeScreen.reset()),
                "MODE_ROLL-UP" !== this.mode &&
                  ((this.displayedMemory.nrRollUpRows = null),
                  (this.nonDisplayedMemory.nrRollUpRows = null)),
                (this.mode = t));
            }),
            (e.insertChars = function (t) {
              for (var e = 0; e < t.length; e++)
                this.writeScreen.insertChar(t[e]);
              var r =
                this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
              this.logger.log(
                i.INFO,
                r + ": " + this.writeScreen.getDisplayText(!0)
              ),
                ("MODE_PAINT-ON" !== this.mode &&
                  "MODE_ROLL-UP" !== this.mode) ||
                  (this.logger.log(
                    i.TEXT,
                    "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)
                  ),
                  this.outputDataUpdate());
            }),
            (e.ccRCL = function () {
              this.logger.log(i.INFO, "RCL - Resume Caption Loading"),
                this.setMode("MODE_POP-ON");
            }),
            (e.ccBS = function () {
              this.logger.log(i.INFO, "BS - BackSpace"),
                "MODE_TEXT" !== this.mode &&
                  (this.writeScreen.backSpace(),
                  this.writeScreen === this.displayedMemory &&
                    this.outputDataUpdate());
            }),
            (e.ccAOF = function () {}),
            (e.ccAON = function () {}),
            (e.ccDER = function () {
              this.logger.log(i.INFO, "DER- Delete to End of Row"),
                this.writeScreen.clearToEndOfRow(),
                this.outputDataUpdate();
            }),
            (e.ccRU = function (t) {
              this.logger.log(i.INFO, "RU(" + t + ") - Roll Up"),
                (this.writeScreen = this.displayedMemory),
                this.setMode("MODE_ROLL-UP"),
                this.writeScreen.setRollUpRows(t);
            }),
            (e.ccFON = function () {
              this.logger.log(i.INFO, "FON - Flash On"),
                this.writeScreen.setPen({ flash: !0 });
            }),
            (e.ccRDC = function () {
              this.logger.log(i.INFO, "RDC - Resume Direct Captioning"),
                this.setMode("MODE_PAINT-ON");
            }),
            (e.ccTR = function () {
              this.logger.log(i.INFO, "TR"), this.setMode("MODE_TEXT");
            }),
            (e.ccRTD = function () {
              this.logger.log(i.INFO, "RTD"), this.setMode("MODE_TEXT");
            }),
            (e.ccEDM = function () {
              this.logger.log(i.INFO, "EDM - Erase Displayed Memory"),
                this.displayedMemory.reset(),
                this.outputDataUpdate(!0);
            }),
            (e.ccCR = function () {
              this.logger.log(i.INFO, "CR - Carriage Return"),
                this.writeScreen.rollUp(),
                this.outputDataUpdate(!0);
            }),
            (e.ccENM = function () {
              this.logger.log(i.INFO, "ENM - Erase Non-displayed Memory"),
                this.nonDisplayedMemory.reset();
            }),
            (e.ccEOC = function () {
              if (
                (this.logger.log(i.INFO, "EOC - End Of Caption"),
                "MODE_POP-ON" === this.mode)
              ) {
                var t = this.displayedMemory;
                (this.displayedMemory = this.nonDisplayedMemory),
                  (this.nonDisplayedMemory = t),
                  (this.writeScreen = this.nonDisplayedMemory),
                  this.logger.log(
                    i.TEXT,
                    "DISP: " + this.displayedMemory.getDisplayText()
                  );
              }
              this.outputDataUpdate(!0);
            }),
            (e.ccTO = function (t) {
              this.logger.log(i.INFO, "TO(" + t + ") - Tab Offset"),
                this.writeScreen.moveCursor(t);
            }),
            (e.ccMIDROW = function (t) {
              var e = { flash: !1 };
              if (
                ((e.underline = t % 2 == 1), (e.italics = t >= 46), e.italics)
              )
                e.foreground = "white";
              else {
                var r = Math.floor(t / 2) - 16;
                e.foreground = [
                  "white",
                  "green",
                  "blue",
                  "cyan",
                  "red",
                  "yellow",
                  "magenta",
                ][r];
              }
              this.logger.log(i.INFO, "MIDROW: " + JSON.stringify(e)),
                this.writeScreen.setPen(e);
            }),
            (e.outputDataUpdate = function (t) {
              void 0 === t && (t = !1);
              var e = this.logger.time;
              null !== e &&
                this.outputFilter &&
                (null !== this.cueStartTime || this.displayedMemory.isEmpty()
                  ? this.displayedMemory.equals(this.lastOutputScreen) ||
                    (this.outputFilter.newCue(
                      this.cueStartTime,
                      e,
                      this.lastOutputScreen
                    ),
                    t &&
                      this.outputFilter.dispatchCue &&
                      this.outputFilter.dispatchCue(),
                    (this.cueStartTime = this.displayedMemory.isEmpty()
                      ? null
                      : e))
                  : (this.cueStartTime = e),
                this.lastOutputScreen.copy(this.displayedMemory));
            }),
            (e.cueSplitAtTime = function (t) {
              this.outputFilter &&
                (this.displayedMemory.isEmpty() ||
                  (this.outputFilter.newCue &&
                    this.outputFilter.newCue(
                      this.cueStartTime,
                      t,
                      this.displayedMemory
                    ),
                  (this.cueStartTime = t)));
            }),
            t
          );
        })(),
        b = (function () {
          function t(t, e, r) {
            (this.channels = void 0),
              (this.currentChannel = 0),
              (this.cmdHistory = void 0),
              (this.logger = void 0);
            var i = new v();
            (this.channels = [null, new S(t, e, i), new S(t + 1, r, i)]),
              (this.cmdHistory = { a: null, b: null }),
              (this.logger = i);
          }
          var e = t.prototype;
          return (
            (e.getHandler = function (t) {
              return this.channels[t].getHandler();
            }),
            (e.setHandler = function (t, e) {
              this.channels[t].setHandler(e);
            }),
            (e.addData = function (t, e) {
              var r,
                n,
                a,
                s = !1;
              this.logger.time = t;
              for (var o = 0; o < e.length; o += 2)
                if (
                  ((n = 127 & e[o]), (a = 127 & e[o + 1]), 0 !== n || 0 !== a)
                ) {
                  if (
                    (this.logger.log(
                      i.DATA,
                      "[" + p([e[o], e[o + 1]]) + "] -> (" + p([n, a]) + ")"
                    ),
                    (r = this.parseCmd(n, a)) || (r = this.parseMidrow(n, a)),
                    r || (r = this.parsePAC(n, a)),
                    r || (r = this.parseBackgroundAttributes(n, a)),
                    !r && (s = this.parseChars(n, a)))
                  ) {
                    var l = this.currentChannel;
                    l && l > 0
                      ? this.channels[l].insertChars(s)
                      : this.logger.log(
                          i.WARNING,
                          "No channel found yet. TEXT-MODE?"
                        );
                  }
                  r ||
                    s ||
                    this.logger.log(
                      i.WARNING,
                      "Couldn't parse cleaned data " +
                        p([n, a]) +
                        " orig: " +
                        p([e[o], e[o + 1]])
                    );
                }
            }),
            (e.parseCmd = function (t, e) {
              var r = this.cmdHistory;
              if (
                !(
                  ((20 === t || 28 === t || 21 === t || 29 === t) &&
                    e >= 32 &&
                    e <= 47) ||
                  ((23 === t || 31 === t) && e >= 33 && e <= 35)
                )
              )
                return !1;
              if (A(t, e, r))
                return (
                  L(null, null, r),
                  this.logger.log(
                    i.DEBUG,
                    "Repeated command (" + p([t, e]) + ") is dropped"
                  ),
                  !0
                );
              var n = 20 === t || 21 === t || 23 === t ? 1 : 2,
                a = this.channels[n];
              return (
                20 === t || 21 === t || 28 === t || 29 === t
                  ? 32 === e
                    ? a.ccRCL()
                    : 33 === e
                    ? a.ccBS()
                    : 34 === e
                    ? a.ccAOF()
                    : 35 === e
                    ? a.ccAON()
                    : 36 === e
                    ? a.ccDER()
                    : 37 === e
                    ? a.ccRU(2)
                    : 38 === e
                    ? a.ccRU(3)
                    : 39 === e
                    ? a.ccRU(4)
                    : 40 === e
                    ? a.ccFON()
                    : 41 === e
                    ? a.ccRDC()
                    : 42 === e
                    ? a.ccTR()
                    : 43 === e
                    ? a.ccRTD()
                    : 44 === e
                    ? a.ccEDM()
                    : 45 === e
                    ? a.ccCR()
                    : 46 === e
                    ? a.ccENM()
                    : 47 === e && a.ccEOC()
                  : a.ccTO(e - 32),
                L(t, e, r),
                (this.currentChannel = n),
                !0
              );
            }),
            (e.parseMidrow = function (t, e) {
              var r = 0;
              if ((17 === t || 25 === t) && e >= 32 && e <= 47) {
                if ((r = 17 === t ? 1 : 2) !== this.currentChannel)
                  return (
                    this.logger.log(
                      i.ERROR,
                      "Mismatch channel in midrow parsing"
                    ),
                    !1
                  );
                var n = this.channels[r];
                return (
                  !!n &&
                  (n.ccMIDROW(e),
                  this.logger.log(i.DEBUG, "MIDROW (" + p([t, e]) + ")"),
                  !0)
                );
              }
              return !1;
            }),
            (e.parsePAC = function (t, e) {
              var r,
                i = this.cmdHistory;
              if (
                !(
                  (((t >= 17 && t <= 23) || (t >= 25 && t <= 31)) &&
                    e >= 64 &&
                    e <= 127) ||
                  ((16 === t || 24 === t) && e >= 64 && e <= 95)
                )
              )
                return !1;
              if (A(t, e, i)) return L(null, null, i), !0;
              var n = t <= 23 ? 1 : 2;
              r =
                e >= 64 && e <= 95
                  ? 1 === n
                    ? d[t]
                    : h[t]
                  : 1 === n
                  ? c[t]
                  : f[t];
              var a = this.channels[n];
              return (
                !!a &&
                (a.setPAC(this.interpretPAC(r, e)),
                L(t, e, i),
                (this.currentChannel = n),
                !0)
              );
            }),
            (e.interpretPAC = function (t, e) {
              var r,
                i = {
                  color: null,
                  italics: !1,
                  indent: null,
                  underline: !1,
                  row: t,
                };
              return (
                (r = e > 95 ? e - 96 : e - 64),
                (i.underline = 1 == (1 & r)),
                r <= 13
                  ? (i.color = [
                      "white",
                      "green",
                      "blue",
                      "cyan",
                      "red",
                      "yellow",
                      "magenta",
                      "white",
                    ][Math.floor(r / 2)])
                  : r <= 15
                  ? ((i.italics = !0), (i.color = "white"))
                  : (i.indent = 4 * Math.floor((r - 16) / 2)),
                i
              );
            }),
            (e.parseChars = function (t, e) {
              var r,
                n,
                a = null,
                s = null;
              if (
                (t >= 25 ? ((r = 2), (s = t - 8)) : ((r = 1), (s = t)),
                s >= 17 && s <= 19
                  ? ((n = 17 === s ? e + 80 : 18 === s ? e + 112 : e + 144),
                    this.logger.log(
                      i.INFO,
                      "Special char '" + o(n) + "' in channel " + r
                    ),
                    (a = [n]))
                  : t >= 32 && t <= 127 && (a = 0 === e ? [t] : [t, e]),
                a)
              ) {
                var l = p(a);
                this.logger.log(i.DEBUG, "Char codes =  " + l.join(",")),
                  L(t, e, this.cmdHistory);
              }
              return a;
            }),
            (e.parseBackgroundAttributes = function (t, e) {
              var r;
              if (
                !(
                  ((16 === t || 24 === t) && e >= 32 && e <= 47) ||
                  ((23 === t || 31 === t) && e >= 45 && e <= 47)
                )
              )
                return !1;
              var i = {};
              16 === t || 24 === t
                ? ((r = Math.floor((e - 32) / 2)),
                  (i.background = g[r]),
                  e % 2 == 1 && (i.background = i.background + "_semi"))
                : 45 === e
                ? (i.background = "transparent")
                : ((i.foreground = "black"), 47 === e && (i.underline = !0));
              var n = t <= 23 ? 1 : 2;
              return (
                this.channels[n].setBkgData(i), L(t, e, this.cmdHistory), !0
              );
            }),
            (e.reset = function () {
              for (var t = 0; t < Object.keys(this.channels).length; t++) {
                var e = this.channels[t];
                e && e.reset();
              }
              this.cmdHistory = { a: null, b: null };
            }),
            (e.cueSplitAtTime = function (t) {
              for (var e = 0; e < this.channels.length; e++) {
                var r = this.channels[e];
                r && r.cueSplitAtTime(t);
              }
            }),
            t
          );
        })();
      function L(t, e, r) {
        (r.a = t), (r.b = e);
      }
      function A(t, e, r) {
        return r.a === t && r.b === e;
      }
      e.default = b;
    },
    "./src/utils/codecs.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "isCodecType", function () {
          return n;
        }),
        r.d(e, "isCodecSupportedInMp4", function () {
          return a;
        });
      var i = {
        audio: {
          a3ds: !0,
          "ac-3": !0,
          "ac-4": !0,
          alac: !0,
          alaw: !0,
          dra1: !0,
          "dts+": !0,
          "dts-": !0,
          dtsc: !0,
          dtse: !0,
          dtsh: !0,
          "ec-3": !0,
          enca: !0,
          g719: !0,
          g726: !0,
          m4ae: !0,
          mha1: !0,
          mha2: !0,
          mhm1: !0,
          mhm2: !0,
          mlpa: !0,
          mp4a: !0,
          "raw ": !0,
          Opus: !0,
          samr: !0,
          sawb: !0,
          sawp: !0,
          sevc: !0,
          sqcp: !0,
          ssmv: !0,
          twos: !0,
          ulaw: !0,
        },
        video: {
          avc1: !0,
          avc2: !0,
          avc3: !0,
          avc4: !0,
          avcp: !0,
          av01: !0,
          drac: !0,
          dvav: !0,
          dvhe: !0,
          encv: !0,
          hev1: !0,
          hvc1: !0,
          mjp2: !0,
          mp4v: !0,
          mvc1: !0,
          mvc2: !0,
          mvc3: !0,
          mvc4: !0,
          resv: !0,
          rv60: !0,
          s263: !0,
          svc1: !0,
          svc2: !0,
          "vc-1": !0,
          vp08: !0,
          vp09: !0,
        },
        text: { stpp: !0, wvtt: !0 },
      };
      function n(t, e) {
        var r = i[e];
        return !!r && !0 === r[t.slice(0, 4)];
      }
      function a(t, e) {
        return MediaSource.isTypeSupported(
          (e || "video") + '/mp4;codecs="' + t + '"'
        );
      }
    },
    "./src/utils/cues.ts": function (t, e, r) {
      r.r(e);
      var i = r("./src/utils/vttparser.ts"),
        n = r("./src/utils/webvtt-parser.ts"),
        a = r("./src/utils/texttrack-utils.ts"),
        s = /\s/,
        o = {
          newCue: function (t, e, r, o) {
            for (
              var l,
                u,
                d,
                c,
                h,
                f = [],
                g = self.VTTCue || self.TextTrackCue,
                v = 0;
              v < o.rows.length;
              v++
            )
              if (((d = !0), (c = 0), (h = ""), !(l = o.rows[v]).isEmpty())) {
                for (var p = 0; p < l.chars.length; p++)
                  s.test(l.chars[p].uchar) && d
                    ? c++
                    : ((h += l.chars[p].uchar), (d = !1));
                (l.cueStartTime = e),
                  e === r && (r += 1e-4),
                  c >= 16 ? c-- : c++;
                var m = Object(i.fixLineBreaks)(h.trim()),
                  y = Object(n.generateCueId)(e, r, m);
                (t && t.cues && t.cues.getCueById(y)) ||
                  (((u = new g(e, r, m)).id = y),
                  (u.line = v + 1),
                  (u.align = "left"),
                  (u.position =
                    10 + Math.min(80, 10 * Math.floor((8 * c) / 32))),
                  f.push(u));
              }
            return (
              t &&
                f.length &&
                (f.sort(function (t, e) {
                  return "auto" === t.line || "auto" === e.line
                    ? 0
                    : t.line > 8 && e.line > 8
                    ? e.line - t.line
                    : t.line - e.line;
                }),
                f.forEach(function (e) {
                  return Object(a.addCueToTrack)(t, e);
                })),
              f
            );
          },
        };
      e.default = o;
    },
    "./src/utils/discontinuities.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "findFirstFragWithCC", function () {
          return s;
        }),
        r.d(e, "shouldAlignOnDiscontinuities", function () {
          return o;
        }),
        r.d(e, "findDiscontinuousReferenceFrag", function () {
          return l;
        }),
        r.d(e, "adjustSlidingStart", function () {
          return d;
        }),
        r.d(e, "alignStream", function () {
          return c;
        }),
        r.d(e, "alignPDT", function () {
          return h;
        });
      var i = r("./src/polyfills/number.ts"),
        n = r("./src/utils/logger.ts"),
        a = r("./src/controller/level-helper.ts");
      function s(t, e) {
        for (var r = null, i = 0, n = t.length; i < n; i++) {
          var a = t[i];
          if (a && a.cc === e) {
            r = a;
            break;
          }
        }
        return r;
      }
      function o(t, e, r) {
        return !(
          !e.details || !(r.endCC > r.startCC || (t && t.cc < r.startCC))
        );
      }
      function l(t, e) {
        var r = t.fragments,
          i = e.fragments;
        if (i.length && r.length) {
          var a = s(r, i[0].cc);
          if (a && (!a || a.startPTS)) return a;
          n.logger.log("No frag in previous level to align on");
        } else n.logger.log("No fragments to align");
      }
      function u(t, e) {
        if (t) {
          var r = t.start + e;
          (t.start = t.startPTS = r), (t.endPTS = r + t.duration);
        }
      }
      function d(t, e) {
        for (var r = e.fragments, i = 0, n = r.length; i < n; i++) u(r[i], t);
        e.fragmentHint && u(e.fragmentHint, t), (e.alignedSliding = !0);
      }
      function c(t, e, r) {
        e &&
          ((function (t, e, r) {
            if (o(t, r, e)) {
              var a = l(r.details, e);
              a &&
                Object(i.isFiniteNumber)(a.start) &&
                (n.logger.log(
                  "Adjusting PTS using last level due to CC increase within current level " +
                    e.url
                ),
                d(a.start, e));
            }
          })(t, r, e),
          !r.alignedSliding && e.details && h(r, e.details),
          r.alignedSliding ||
            !e.details ||
            r.skippedSegments ||
            Object(a.adjustSliding)(e.details, r));
      }
      function h(t, e) {
        if (
          e.fragments.length &&
          t.hasProgramDateTime &&
          e.hasProgramDateTime
        ) {
          var r = e.fragments[0].programDateTime,
            a = t.fragments[0].programDateTime,
            s = (a - r) / 1e3 + e.fragments[0].start;
          s &&
            Object(i.isFiniteNumber)(s) &&
            (n.logger.log(
              "Adjusting PTS using programDateTime delta " +
                (a - r) +
                "ms, sliding:" +
                s.toFixed(3) +
                " " +
                t.url +
                " "
            ),
            d(s, t));
        }
      }
    },
    "./src/utils/ewma-bandwidth-estimator.ts": function (t, e, r) {
      r.r(e);
      var i = r("./src/utils/ewma.ts"),
        n = (function () {
          function t(t, e, r) {
            (this.defaultEstimate_ = void 0),
              (this.minWeight_ = void 0),
              (this.minDelayMs_ = void 0),
              (this.slow_ = void 0),
              (this.fast_ = void 0),
              (this.defaultEstimate_ = r),
              (this.minWeight_ = 0.001),
              (this.minDelayMs_ = 50),
              (this.slow_ = new i.default(t)),
              (this.fast_ = new i.default(e));
          }
          var e = t.prototype;
          return (
            (e.update = function (t, e) {
              var r = this.slow_,
                n = this.fast_;
              this.slow_.halfLife !== t &&
                (this.slow_ = new i.default(
                  t,
                  r.getEstimate(),
                  r.getTotalWeight()
                )),
                this.fast_.halfLife !== e &&
                  (this.fast_ = new i.default(
                    e,
                    n.getEstimate(),
                    n.getTotalWeight()
                  ));
            }),
            (e.sample = function (t, e) {
              var r = (t = Math.max(t, this.minDelayMs_)) / 1e3,
                i = (8 * e) / r;
              this.fast_.sample(r, i), this.slow_.sample(r, i);
            }),
            (e.canEstimate = function () {
              var t = this.fast_;
              return t && t.getTotalWeight() >= this.minWeight_;
            }),
            (e.getEstimate = function () {
              return this.canEstimate()
                ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate())
                : this.defaultEstimate_;
            }),
            (e.destroy = function () {}),
            t
          );
        })();
      e.default = n;
    },
    "./src/utils/ewma.ts": function (t, e, r) {
      r.r(e);
      var i = (function () {
        function t(t, e, r) {
          void 0 === e && (e = 0),
            void 0 === r && (r = 0),
            (this.halfLife = void 0),
            (this.alpha_ = void 0),
            (this.estimate_ = void 0),
            (this.totalWeight_ = void 0),
            (this.halfLife = t),
            (this.alpha_ = t ? Math.exp(Math.log(0.5) / t) : 0),
            (this.estimate_ = e),
            (this.totalWeight_ = r);
        }
        var e = t.prototype;
        return (
          (e.sample = function (t, e) {
            var r = Math.pow(this.alpha_, t);
            (this.estimate_ = e * (1 - r) + r * this.estimate_),
              (this.totalWeight_ += t);
          }),
          (e.getTotalWeight = function () {
            return this.totalWeight_;
          }),
          (e.getEstimate = function () {
            if (this.alpha_) {
              var t = 1 - Math.pow(this.alpha_, this.totalWeight_);
              if (t) return this.estimate_ / t;
            }
            return this.estimate_;
          }),
          t
        );
      })();
      e.default = i;
    },
    "./src/utils/fetch-loader.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "fetchSupported", function () {
          return d;
        });
      var i = r("./src/polyfills/number.ts"),
        n = r("./src/loader/load-stats.ts"),
        a = r("./src/demux/chunk-cache.ts");
      function s(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (s = function (t) {
          if (
            null === t ||
            ((r = t), -1 === Function.toString.call(r).indexOf("[native code]"))
          )
            return t;
          var r;
          if ("function" != typeof t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if (void 0 !== e) {
            if (e.has(t)) return e.get(t);
            e.set(t, i);
          }
          function i() {
            return o(t, arguments, u(this).constructor);
          }
          return (
            (i.prototype = Object.create(t.prototype, {
              constructor: {
                value: i,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            l(i, t)
          );
        })(t);
      }
      function o(t, e, r) {
        return (o = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })()
          ? Reflect.construct
          : function (t, e, r) {
              var i = [null];
              i.push.apply(i, e);
              var n = new (Function.bind.apply(t, i))();
              return r && l(n, r.prototype), n;
            }).apply(null, arguments);
      }
      function l(t, e) {
        return (l =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function u(t) {
        return (u = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function d() {
        if (
          self.fetch &&
          self.AbortController &&
          self.ReadableStream &&
          self.Request
        )
          try {
            return new self.ReadableStream({}), !0;
          } catch (t) {}
        return !1;
      }
      var c = (function () {
        function t(t) {
          (this.fetchSetup = void 0),
            (this.requestTimeout = void 0),
            (this.request = void 0),
            (this.response = void 0),
            (this.controller = void 0),
            (this.context = void 0),
            (this.config = null),
            (this.callbacks = null),
            (this.stats = void 0),
            (this.loader = null),
            (this.fetchSetup = t.fetchSetup || h),
            (this.controller = new self.AbortController()),
            (this.stats = new n.LoadStats());
        }
        var e = t.prototype;
        return (
          (e.destroy = function () {
            (this.loader = this.callbacks = null), this.abortInternal();
          }),
          (e.abortInternal = function () {
            var t = this.response;
            (t && t.ok) || ((this.stats.aborted = !0), this.controller.abort());
          }),
          (e.abort = function () {
            var t;
            this.abortInternal(),
              null !== (t = this.callbacks) &&
                void 0 !== t &&
                t.onAbort &&
                this.callbacks.onAbort(this.stats, this.context, this.response);
          }),
          (e.load = function (t, e, r) {
            var n = this,
              a = this.stats;
            if (a.loading.start)
              throw new Error("Loader can only be used once.");
            a.loading.start = self.performance.now();
            var s,
              o,
              l,
              u =
                ((s = t),
                (o = this.controller.signal),
                (l = {
                  method: "GET",
                  mode: "cors",
                  credentials: "same-origin",
                  signal: o,
                }),
                s.rangeEnd &&
                  (l.headers = new self.Headers({
                    Range:
                      "bytes=" + s.rangeStart + "-" + String(s.rangeEnd - 1),
                  })),
                l),
              d = r.onProgress,
              c = "arraybuffer" === t.responseType,
              h = c ? "byteLength" : "length";
            (this.context = t),
              (this.config = e),
              (this.callbacks = r),
              (this.request = this.fetchSetup(t, u)),
              self.clearTimeout(this.requestTimeout),
              (this.requestTimeout = self.setTimeout(function () {
                n.abortInternal(), r.onTimeout(a, t, n.response);
              }, e.timeout)),
              self
                .fetch(this.request)
                .then(function (r) {
                  if (((n.response = n.loader = r), !r.ok)) {
                    var s = r.status,
                      o = r.statusText;
                    throw new f(o || "fetch, bad network response", s, r);
                  }
                  return (
                    (a.loading.first = Math.max(
                      self.performance.now(),
                      a.loading.start
                    )),
                    (a.total = parseInt(
                      r.headers.get("Content-Length") || "0"
                    )),
                    d && Object(i.isFiniteNumber)(e.highWaterMark)
                      ? n.loadProgressively(r, a, t, e.highWaterMark, d)
                      : c
                      ? r.arrayBuffer()
                      : r.text()
                  );
                })
                .then(function (s) {
                  var o = n.response;
                  self.clearTimeout(n.requestTimeout),
                    (a.loading.end = Math.max(
                      self.performance.now(),
                      a.loading.first
                    )),
                    (a.loaded = a.total = s[h]);
                  var l = { url: o.url, data: s };
                  d &&
                    !Object(i.isFiniteNumber)(e.highWaterMark) &&
                    d(a, t, s, o),
                    r.onSuccess(l, a, t, o);
                })
                .catch(function (e) {
                  if ((self.clearTimeout(n.requestTimeout), !a.aborted)) {
                    var i = e.code || 0;
                    r.onError({ code: i, text: e.message }, t, e.details);
                  }
                });
          }),
          (e.getCacheAge = function () {
            var t = null;
            if (this.response) {
              var e = this.response.headers.get("age");
              t = e ? parseFloat(e) : null;
            }
            return t;
          }),
          (e.loadProgressively = function (t, e, r, i, n) {
            void 0 === i && (i = 0);
            var s = new a.default(),
              o = t.body.getReader();
            return (function a() {
              return o
                .read()
                .then(function (o) {
                  if (o.done)
                    return (
                      s.dataLength && n(e, r, s.flush(), t),
                      Promise.resolve(new ArrayBuffer(0))
                    );
                  var l = o.value,
                    u = l.length;
                  return (
                    (e.loaded += u),
                    u < i || s.dataLength
                      ? (s.push(l), s.dataLength >= i && n(e, r, s.flush(), t))
                      : n(e, r, l, t),
                    a()
                  );
                })
                .catch(function () {
                  return Promise.reject();
                });
            })();
          }),
          t
        );
      })();
      function h(t, e) {
        return new self.Request(t.url, e);
      }
      var f = (function (t) {
        var e, r;
        function i(e, r, i) {
          var n;
          return (
            ((n = t.call(this, e) || this).code = void 0),
            (n.details = void 0),
            (n.code = r),
            (n.details = i),
            n
          );
        }
        return (
          (r = t),
          ((e = i).prototype = Object.create(r.prototype)),
          (e.prototype.constructor = e),
          l(e, r),
          i
        );
      })(s(Error));
      e.default = c;
    },
    "./src/utils/imsc1-ttml-parser.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "IMSC1_CODEC", function () {
          return d;
        }),
        r.d(e, "parseIMSC1", function () {
          return g;
        });
      var i = r("./src/utils/mp4-tools.ts"),
        n = r("./src/utils/vttparser.ts"),
        a = r("./src/utils/vttcue.ts"),
        s = r("./src/demux/id3.ts"),
        o = r("./src/utils/timescale-conversion.ts"),
        l = r("./src/utils/webvtt-parser.ts");
      function u() {
        return (u =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
            }
            return t;
          }).apply(this, arguments);
      }
      var d = "stpp.ttml.im1t",
        c = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
        h = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,
        f = {
          left: "start",
          center: "center",
          right: "end",
          start: "start",
          end: "end",
        };
      function g(t, e, r, n, d) {
        var c = Object(i.findBox)(new Uint8Array(t), ["mdat"]);
        if (0 !== c.length) {
          var h = c[0],
            g = Object(s.utf8ArrayToStr)(
              new Uint8Array(t, h.start, h.end - h.start)
            ),
            S = Object(o.toTimescaleFromScale)(e, 1, r);
          try {
            n(
              (function (t, e) {
                var r = new DOMParser()
                  .parseFromString(t, "text/xml")
                  .getElementsByTagName("tt")[0];
                if (!r) throw new Error("Invalid ttml");
                var i = {
                    frameRate: 30,
                    subFrameRate: 1,
                    frameRateMultiplier: 0,
                    tickRate: 0,
                  },
                  n = Object.keys(i).reduce(function (t, e) {
                    return (t[e] = r.getAttribute("ttp:" + e) || i[e]), t;
                  }, {}),
                  s = "preserve" !== r.getAttribute("xml:space"),
                  o = p(v(r, "styling", "style")),
                  d = p(v(r, "layout", "region")),
                  c = v(r, "body", "[begin]");
                return [].map
                  .call(c, function (t) {
                    var r = m(t, s);
                    if (!r || !t.hasAttribute("begin")) return null;
                    var i = T(t.getAttribute("begin"), n),
                      c = T(t.getAttribute("dur"), n),
                      h = T(t.getAttribute("end"), n);
                    if (null === i) throw E(t);
                    if (null === h) {
                      if (null === c) throw E(t);
                      h = i + c;
                    }
                    var g = new a.default(i - e, h - e, r);
                    g.id = Object(l.generateCueId)(
                      g.startTime,
                      g.endTime,
                      g.text
                    );
                    var v = d[t.getAttribute("region")],
                      p = o[t.getAttribute("style")];
                    (g.position = 10), (g.size = 80);
                    var S,
                      b,
                      L,
                      A =
                        ((S = v),
                        (b = p),
                        (L = "http://www.w3.org/ns/ttml#styling"),
                        [
                          "displayAlign",
                          "textAlign",
                          "color",
                          "backgroundColor",
                          "fontSize",
                          "fontFamily",
                        ].reduce(function (t, e) {
                          var r = y(b, L, e) || y(S, L, e);
                          return r && (t[e] = r), t;
                        }, {})),
                      k = A.textAlign;
                    if (k) {
                      var D = f[k];
                      D && (g.lineAlign = D), (g.align = k);
                    }
                    return u(g, A), g;
                  })
                  .filter(function (t) {
                    return null !== t;
                  });
              })(g, S)
            );
          } catch (b) {
            d(b);
          }
        } else d(new Error("Could not parse IMSC1 mdat"));
      }
      function v(t, e, r) {
        var i = t.getElementsByTagName(e)[0];
        return i ? [].slice.call(i.querySelectorAll(r)) : [];
      }
      function p(t) {
        return t.reduce(function (t, e) {
          var r = e.getAttribute("xml:id");
          return r && (t[r] = e), t;
        }, {});
      }
      function m(t, e) {
        return [].slice.call(t.childNodes).reduce(function (t, r, i) {
          var n;
          return "br" === r.nodeName && i
            ? t + "\n"
            : null !== (n = r.childNodes) && void 0 !== n && n.length
            ? m(r, e)
            : e
            ? t + r.textContent.trim().replace(/\s+/g, " ")
            : t + r.textContent;
        }, "");
      }
      function y(t, e, r) {
        return t.hasAttributeNS(e, r) ? t.getAttributeNS(e, r) : null;
      }
      function E(t) {
        return new Error("Could not parse ttml timestamp " + t);
      }
      function T(t, e) {
        if (!t) return null;
        var r,
          i,
          a,
          s,
          o = Object(n.parseTimeStamp)(t);
        return (
          null === o &&
            (c.test(t)
              ? ((r = t),
                (i = e),
                (a = c.exec(r)),
                (s = (0 | a[4]) + (0 | a[5]) / i.subFrameRate),
                (o =
                  3600 * (0 | a[1]) +
                  60 * (0 | a[2]) +
                  (0 | a[3]) +
                  s / i.frameRate))
              : h.test(t) &&
                (o = (function (t, e) {
                  var r = h.exec(t),
                    i = Number(r[1]);
                  switch (r[2]) {
                    case "h":
                      return 3600 * i;
                    case "m":
                      return 60 * i;
                    case "ms":
                      return 1e3 * i;
                    case "f":
                      return i / e.frameRate;
                    case "t":
                      return i / e.tickRate;
                  }
                  return i;
                })(t, e))),
          o
        );
      }
    },
    "./src/utils/logger.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "enableLogs", function () {
          return s;
        }),
        r.d(e, "logger", function () {
          return o;
        });
      var i = function () {},
        n = { trace: i, debug: i, log: i, warn: i, info: i, error: i },
        a = n;
      function s(t) {
        if ((self.console && !0 === t) || "object" == typeof t) {
          !(function (t) {
            for (
              var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1;
              n < e;
              n++
            )
              r[n - 1] = arguments[n];
            r.forEach(function (e) {
              a[e] = t[e]
                ? t[e].bind(t)
                : (function (t) {
                    var e = self.console[t];
                    return e ? e.bind(self.console, "[" + t + "] >") : i;
                  })(e);
            });
          })(t, "debug", "log", "info", "warn", "error");
          try {
            a.log();
          } catch (e) {
            a = n;
          }
        } else a = n;
      }
      var o = n;
    },
    "./src/utils/mediakeys-helper.ts": function (t, e, r) {
      var i, n;
      r.r(e),
        r.d(e, "KeySystems", function () {
          return i;
        }),
        r.d(e, "requestMediaKeySystemAccess", function () {
          return a;
        }),
        ((n = i || (i = {})).WIDEVINE = "com.widevine.alpha"),
        (n.PLAYREADY = "com.microsoft.playready");
      var a =
        "undefined" != typeof self &&
        self.navigator &&
        self.navigator.requestMediaKeySystemAccess
          ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator)
          : null;
    },
    "./src/utils/mediasource-helper.ts": function (t, e, r) {
      function i() {
        return self.MediaSource || self.WebKitMediaSource;
      }
      r.r(e),
        r.d(e, "getMediaSource", function () {
          return i;
        });
    },
    "./src/utils/mp4-tools.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "bin2str", function () {
          return o;
        }),
        r.d(e, "readUint16", function () {
          return l;
        }),
        r.d(e, "readUint32", function () {
          return u;
        }),
        r.d(e, "writeUint32", function () {
          return d;
        }),
        r.d(e, "findBox", function () {
          return c;
        }),
        r.d(e, "parseSegmentIndex", function () {
          return h;
        }),
        r.d(e, "parseInitSegment", function () {
          return f;
        }),
        r.d(e, "getStartDTS", function () {
          return g;
        }),
        r.d(e, "getDuration", function () {
          return v;
        }),
        r.d(e, "computeRawDurationFromSamples", function () {
          return p;
        }),
        r.d(e, "offsetStartDTS", function () {
          return m;
        }),
        r.d(e, "segmentValidRange", function () {
          return y;
        }),
        r.d(e, "appendUint8Array", function () {
          return E;
        });
      var i = r("./src/utils/typed-array.ts"),
        n = r("./src/loader/fragment.ts"),
        a = Math.pow(2, 32) - 1,
        s = [].push;
      function o(t) {
        return String.fromCharCode.apply(null, t);
      }
      function l(t, e) {
        "data" in t && ((e += t.start), (t = t.data));
        var r = (t[e] << 8) | t[e + 1];
        return r < 0 ? 65536 + r : r;
      }
      function u(t, e) {
        "data" in t && ((e += t.start), (t = t.data));
        var r = (t[e] << 24) | (t[e + 1] << 16) | (t[e + 2] << 8) | t[e + 3];
        return r < 0 ? 4294967296 + r : r;
      }
      function d(t, e, r) {
        "data" in t && ((e += t.start), (t = t.data)),
          (t[e] = r >> 24),
          (t[e + 1] = (r >> 16) & 255),
          (t[e + 2] = (r >> 8) & 255),
          (t[e + 3] = 255 & r);
      }
      function c(t, e) {
        var r,
          i,
          n,
          a = [];
        if (!e.length) return a;
        "data" in t
          ? ((r = t.data), (i = t.start), (n = t.end))
          : ((i = 0), (n = (r = t).byteLength));
        for (var l = i; l < n; ) {
          var d = u(r, l),
            h = d > 1 ? l + d : n;
          if (o(r.subarray(l + 4, l + 8)) === e[0])
            if (1 === e.length) a.push({ data: r, start: l + 8, end: h });
            else {
              var f = c({ data: r, start: l + 8, end: h }, e.slice(1));
              f.length && s.apply(a, f);
            }
          l = h;
        }
        return a;
      }
      function h(t) {
        var e = c(t, ["moov"])[0],
          r = e ? e.end : null,
          i = c(t, ["sidx"]);
        if (!i || !i[0]) return null;
        var n = [],
          a = i[0],
          s = a.data[0],
          o = 0 === s ? 8 : 16,
          d = u(a, o);
        (o += 4), (o += 0 === s ? 8 : 16), (o += 2);
        var h = a.end + 0,
          f = l(a, o);
        o += 2;
        for (var g = 0; g < f; g++) {
          var v = o,
            p = u(a, v),
            m = 2147483647 & p;
          if (1 == (2147483648 & p) >>> 31) return null;
          var y = u(a, (v += 4));
          (v += 4),
            n.push({
              referenceSize: m,
              subsegmentDuration: y,
              info: { duration: y / d, start: h, end: h + m - 1 },
            }),
            (h += m),
            (o = v += 4);
        }
        return {
          earliestPresentationTime: 0,
          timescale: d,
          version: s,
          referencesCount: f,
          references: n,
          moovEndOffset: r,
        };
      }
      function f(t) {
        for (var e = [], r = c(t, ["moov", "trak"]), i = 0; i < r.length; i++) {
          var a = r[i],
            s = c(a, ["tkhd"])[0];
          if (s) {
            var l = s.data[s.start],
              d = 0 === l ? 12 : 20,
              h = u(s, d),
              f = c(a, ["mdia", "mdhd"])[0];
            if (f) {
              var g = u(f, (d = 0 === (l = f.data[f.start]) ? 12 : 20)),
                v = c(a, ["mdia", "hdlr"])[0];
              if (v) {
                var p = o(v.data.subarray(v.start + 8, v.start + 12)),
                  m = {
                    soun: n.ElementaryStreamTypes.AUDIO,
                    vide: n.ElementaryStreamTypes.VIDEO,
                  }[p];
                if (m) {
                  var y = c(a, ["mdia", "minf", "stbl", "stsd"])[0],
                    E = void 0;
                  y && (E = o(y.data.subarray(y.start + 12, y.start + 16))),
                    (e[h] = { timescale: g, type: m }),
                    (e[m] = { timescale: g, id: h, codec: E });
                }
              }
            }
          }
        }
        return (
          c(t, ["moov", "mvex", "trex"]).forEach(function (t) {
            var r = u(t, 4),
              i = e[r];
            i && (i.default = { duration: u(t, 12), flags: u(t, 20) });
          }),
          e
        );
      }
      function g(t, e) {
        return (
          c(e, ["moof", "traf"]).reduce(function (e, r) {
            var i = c(r, ["tfdt"])[0],
              n = i.data[i.start],
              a = c(r, ["tfhd"]).reduce(function (e, r) {
                var a = u(r, 4),
                  s = t[a];
                if (s) {
                  var o = u(i, 4);
                  1 === n && ((o *= Math.pow(2, 32)), (o += u(i, 8)));
                  var l = o / (s.timescale || 9e4);
                  if (isFinite(l) && (null === e || l < e)) return l;
                }
                return e;
              }, null);
            return null !== a && isFinite(a) && (null === e || a < e) ? a : e;
          }, null) || 0
        );
      }
      function v(t, e) {
        for (
          var r = 0, i = 0, a = 0, s = c(t, ["moof", "traf"]), o = 0;
          o < s.length;
          o++
        ) {
          var l = s[o],
            d = c(l, ["tfhd"])[0],
            f = e[u(d, 4)];
          if (f) {
            var g = f.default,
              v = u(d, 0) | (null == g ? void 0 : g.flags),
              m = null == g ? void 0 : g.duration;
            8 & v && (m = u(d, 2 & v ? 12 : 8));
            for (
              var y = f.timescale || 9e4, E = c(l, ["trun"]), T = 0;
              T < E.length;
              T++
            )
              (r = m ? m * u(E[T], 4) : p(E[T])),
                f.type === n.ElementaryStreamTypes.VIDEO
                  ? (i += r / y)
                  : f.type === n.ElementaryStreamTypes.AUDIO && (a += r / y);
          }
        }
        if (0 === i && 0 === a) {
          var S = h(t);
          if (null != S && S.references)
            return S.references.reduce(function (t, e) {
              return t + e.info.duration || 0;
            }, 0);
        }
        return i || a;
      }
      function p(t) {
        var e = u(t, 0),
          r = 8;
        1 & e && (r += 4), 4 & e && (r += 4);
        for (var i = 0, n = u(t, 4), a = 0; a < n; a++)
          256 & e && ((i += u(t, r)), (r += 4)),
            512 & e && (r += 4),
            1024 & e && (r += 4),
            2048 & e && (r += 4);
        return i;
      }
      function m(t, e, r) {
        c(e, ["moof", "traf"]).forEach(function (e) {
          c(e, ["tfhd"]).forEach(function (i) {
            var n = u(i, 4),
              s = t[n];
            if (s) {
              var o = s.timescale || 9e4;
              c(e, ["tfdt"]).forEach(function (t) {
                var e = t.data[t.start],
                  i = u(t, 4);
                if (0 === e) d(t, 4, i - r * o);
                else {
                  (i *= Math.pow(2, 32)),
                    (i += u(t, 8)),
                    (i -= r * o),
                    (i = Math.max(i, 0));
                  var n = Math.floor(i / (a + 1)),
                    s = Math.floor(i % (a + 1));
                  d(t, 4, n), d(t, 8, s);
                }
              });
            }
          });
        });
      }
      function y(t) {
        var e = { valid: null, remainder: null },
          r = c(t, ["moof"]);
        if (!r) return e;
        if (r.length < 2) return (e.remainder = t), e;
        var n = r[r.length - 1];
        return (
          (e.valid = Object(i.sliceUint8)(t, 0, n.start - 8)),
          (e.remainder = Object(i.sliceUint8)(t, n.start - 8)),
          e
        );
      }
      function E(t, e) {
        var r = new Uint8Array(t.length + e.length);
        return r.set(t), r.set(e, t.length), r;
      }
    },
    "./src/utils/output-filter.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "default", function () {
          return i;
        });
      var i = (function () {
        function t(t, e) {
          (this.timelineController = void 0),
            (this.cueRanges = []),
            (this.trackName = void 0),
            (this.startTime = null),
            (this.endTime = null),
            (this.screen = null),
            (this.timelineController = t),
            (this.trackName = e);
        }
        var e = t.prototype;
        return (
          (e.dispatchCue = function () {
            null !== this.startTime &&
              (this.timelineController.addCues(
                this.trackName,
                this.startTime,
                this.endTime,
                this.screen,
                this.cueRanges
              ),
              (this.startTime = null));
          }),
          (e.newCue = function (t, e, r) {
            (null === this.startTime || this.startTime > t) &&
              (this.startTime = t),
              (this.endTime = e),
              (this.screen = r),
              this.timelineController.createCaptionsTrack(this.trackName);
          }),
          (e.reset = function () {
            this.cueRanges = [];
          }),
          t
        );
      })();
    },
    "./src/utils/texttrack-utils.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "sendAddTrackEvent", function () {
          return n;
        }),
        r.d(e, "addCueToTrack", function () {
          return a;
        }),
        r.d(e, "clearCurrentCues", function () {
          return s;
        }),
        r.d(e, "removeCuesInRange", function () {
          return o;
        }),
        r.d(e, "getCuesInRange", function () {
          return l;
        });
      var i = r("./src/utils/logger.ts");
      function n(t, e) {
        var r;
        try {
          r = new Event("addtrack");
        } catch (i) {
          (r = document.createEvent("Event")).initEvent("addtrack", !1, !1);
        }
        (r.track = t), e.dispatchEvent(r);
      }
      function a(t, e) {
        var r = t.mode;
        if (
          ("disabled" === r && (t.mode = "hidden"),
          t.cues && !t.cues.getCueById(e.id))
        )
          try {
            if ((t.addCue(e), !t.cues.getCueById(e.id)))
              throw new Error("addCue is failed for: " + e);
          } catch (a) {
            i.logger.debug("[texttrack-utils]: " + a);
            var n = new self.TextTrackCue(e.startTime, e.endTime, e.text);
            (n.id = e.id), t.addCue(n);
          }
        "disabled" === r && (t.mode = r);
      }
      function s(t) {
        var e = t.mode;
        if (("disabled" === e && (t.mode = "hidden"), t.cues))
          for (var r = t.cues.length; r--; ) t.removeCue(t.cues[r]);
        "disabled" === e && (t.mode = e);
      }
      function o(t, e, r) {
        var i = t.mode;
        if (
          ("disabled" === i && (t.mode = "hidden"), t.cues && t.cues.length > 0)
        )
          for (var n = l(t.cues, e, r), a = 0; a < n.length; a++)
            t.removeCue(n[a]);
        "disabled" === i && (t.mode = i);
      }
      function l(t, e, r) {
        var i = [],
          n = (function (t, e) {
            if (e < t[0].startTime) return 0;
            var r = t.length - 1;
            if (e > t[r].endTime) return -1;
            for (var i = 0, n = r; i <= n; ) {
              var a = Math.floor((n + i) / 2);
              if (e < t[a].startTime) n = a - 1;
              else {
                if (!(e > t[a].startTime && i < r)) return a;
                i = a + 1;
              }
            }
            return t[i].startTime - e < e - t[n].startTime ? i : n;
          })(t, e);
        if (n > -1)
          for (var a = n, s = t.length; a < s; a++) {
            var o = t[a];
            if (o.startTime >= e && o.endTime <= r) i.push(o);
            else if (o.startTime > r) return i;
          }
        return i;
      }
    },
    "./src/utils/time-ranges.ts": function (t, e, r) {
      r.r(e),
        (e.default = {
          toString: function (t) {
            for (var e = "", r = t.length, i = 0; i < r; i++)
              e +=
                "[" + t.start(i).toFixed(3) + "," + t.end(i).toFixed(3) + "]";
            return e;
          },
        });
    },
    "./src/utils/timescale-conversion.ts": function (t, e, r) {
      function i(t, e, r, i) {
        void 0 === r && (r = 1), void 0 === i && (i = !1);
        var n = t * e * r;
        return i ? Math.round(n) : n;
      }
      function n(t, e, r, n) {
        return (
          void 0 === r && (r = 1), void 0 === n && (n = !1), i(t, e, 1 / r, n)
        );
      }
      function a(t, e) {
        return void 0 === e && (e = !1), i(t, 1e3, 1 / 9e4, e);
      }
      function s(t, e) {
        return void 0 === e && (e = 1), i(t, 9e4, 1 / e);
      }
      r.r(e),
        r.d(e, "toTimescaleFromBase", function () {
          return i;
        }),
        r.d(e, "toTimescaleFromScale", function () {
          return n;
        }),
        r.d(e, "toMsFromMpegTsClock", function () {
          return a;
        }),
        r.d(e, "toMpegTsClockFromTimescale", function () {
          return s;
        });
    },
    "./src/utils/typed-array.ts": function (t, e, r) {
      function i(t, e, r) {
        return Uint8Array.prototype.slice
          ? t.slice(e, r)
          : new Uint8Array(Array.prototype.slice.call(t, e, r));
      }
      r.r(e),
        r.d(e, "sliceUint8", function () {
          return i;
        });
    },
    "./src/utils/vttcue.ts": function (t, e, r) {
      r.r(e),
        (e.default = (function () {
          if ("undefined" != typeof self && self.VTTCue) return self.VTTCue;
          var t = ["", "lr", "rl"],
            e = ["start", "middle", "end", "left", "right"];
          function r(t, e) {
            if ("string" != typeof e) return !1;
            if (!Array.isArray(t)) return !1;
            var r = e.toLowerCase();
            return !!~t.indexOf(r) && r;
          }
          function i(t) {
            return r(e, t);
          }
          function n(t) {
            for (
              var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1;
              i < e;
              i++
            )
              r[i - 1] = arguments[i];
            for (var n = 1; n < arguments.length; n++) {
              var a = arguments[n];
              for (var s in a) t[s] = a[s];
            }
            return t;
          }
          function a(e, a, s) {
            var o = this,
              l = { enumerable: !0 };
            o.hasBeenReset = !1;
            var u = "",
              d = !1,
              c = e,
              h = a,
              f = s,
              g = null,
              v = "",
              p = !0,
              m = "auto",
              y = "start",
              E = 50,
              T = "middle",
              S = 50,
              b = "middle";
            Object.defineProperty(
              o,
              "id",
              n({}, l, {
                get: function () {
                  return u;
                },
                set: function (t) {
                  u = "" + t;
                },
              })
            ),
              Object.defineProperty(
                o,
                "pauseOnExit",
                n({}, l, {
                  get: function () {
                    return d;
                  },
                  set: function (t) {
                    d = !!t;
                  },
                })
              ),
              Object.defineProperty(
                o,
                "startTime",
                n({}, l, {
                  get: function () {
                    return c;
                  },
                  set: function (t) {
                    if ("number" != typeof t)
                      throw new TypeError(
                        "Start time must be set to a number."
                      );
                    (c = t), (this.hasBeenReset = !0);
                  },
                })
              ),
              Object.defineProperty(
                o,
                "endTime",
                n({}, l, {
                  get: function () {
                    return h;
                  },
                  set: function (t) {
                    if ("number" != typeof t)
                      throw new TypeError("End time must be set to a number.");
                    (h = t), (this.hasBeenReset = !0);
                  },
                })
              ),
              Object.defineProperty(
                o,
                "text",
                n({}, l, {
                  get: function () {
                    return f;
                  },
                  set: function (t) {
                    (f = "" + t), (this.hasBeenReset = !0);
                  },
                })
              ),
              Object.defineProperty(
                o,
                "region",
                n({}, l, {
                  get: function () {
                    return g;
                  },
                  set: function (t) {
                    (g = t), (this.hasBeenReset = !0);
                  },
                })
              ),
              Object.defineProperty(
                o,
                "vertical",
                n({}, l, {
                  get: function () {
                    return v;
                  },
                  set: function (e) {
                    var i = r(t, e);
                    if (!1 === i)
                      throw new SyntaxError(
                        "An invalid or illegal string was specified."
                      );
                    (v = i), (this.hasBeenReset = !0);
                  },
                })
              ),
              Object.defineProperty(
                o,
                "snapToLines",
                n({}, l, {
                  get: function () {
                    return p;
                  },
                  set: function (t) {
                    (p = !!t), (this.hasBeenReset = !0);
                  },
                })
              ),
              Object.defineProperty(
                o,
                "line",
                n({}, l, {
                  get: function () {
                    return m;
                  },
                  set: function (t) {
                    if ("number" != typeof t && "auto" !== t)
                      throw new SyntaxError(
                        "An invalid number or illegal string was specified."
                      );
                    (m = t), (this.hasBeenReset = !0);
                  },
                })
              ),
              Object.defineProperty(
                o,
                "lineAlign",
                n({}, l, {
                  get: function () {
                    return y;
                  },
                  set: function (t) {
                    var e = i(t);
                    if (!e)
                      throw new SyntaxError(
                        "An invalid or illegal string was specified."
                      );
                    (y = e), (this.hasBeenReset = !0);
                  },
                })
              ),
              Object.defineProperty(
                o,
                "position",
                n({}, l, {
                  get: function () {
                    return E;
                  },
                  set: function (t) {
                    if (t < 0 || t > 100)
                      throw new Error("Position must be between 0 and 100.");
                    (E = t), (this.hasBeenReset = !0);
                  },
                })
              ),
              Object.defineProperty(
                o,
                "positionAlign",
                n({}, l, {
                  get: function () {
                    return T;
                  },
                  set: function (t) {
                    var e = i(t);
                    if (!e)
                      throw new SyntaxError(
                        "An invalid or illegal string was specified."
                      );
                    (T = e), (this.hasBeenReset = !0);
                  },
                })
              ),
              Object.defineProperty(
                o,
                "size",
                n({}, l, {
                  get: function () {
                    return S;
                  },
                  set: function (t) {
                    if (t < 0 || t > 100)
                      throw new Error("Size must be between 0 and 100.");
                    (S = t), (this.hasBeenReset = !0);
                  },
                })
              ),
              Object.defineProperty(
                o,
                "align",
                n({}, l, {
                  get: function () {
                    return b;
                  },
                  set: function (t) {
                    var e = i(t);
                    if (!e)
                      throw new SyntaxError(
                        "An invalid or illegal string was specified."
                      );
                    (b = e), (this.hasBeenReset = !0);
                  },
                })
              ),
              (o.displayState = void 0);
          }
          return (
            (a.prototype.getCueAsHTML = function () {
              return self.WebVTT.convertCueToDOMTree(self, this.text);
            }),
            a
          );
        })());
    },
    "./src/utils/vttparser.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "parseTimeStamp", function () {
          return a;
        }),
        r.d(e, "fixLineBreaks", function () {
          return c;
        }),
        r.d(e, "VTTParser", function () {
          return h;
        });
      var i = r("./src/utils/vttcue.ts"),
        n = (function () {
          function t() {}
          return (
            (t.prototype.decode = function (t, e) {
              if (!t) return "";
              if ("string" != typeof t)
                throw new Error("Error - expected string data.");
              return decodeURIComponent(encodeURIComponent(t));
            }),
            t
          );
        })();
      function a(t) {
        function e(t, e, r, i) {
          return 3600 * (0 | t) + 60 * (0 | e) + (0 | r) + parseFloat(i || 0);
        }
        var r = t.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
        return r
          ? parseFloat(r[2]) > 59
            ? e(r[2], r[3], 0, r[4])
            : e(r[1], r[2], r[3], r[4])
          : null;
      }
      var s = (function () {
        function t() {
          this.values = Object.create(null);
        }
        var e = t.prototype;
        return (
          (e.set = function (t, e) {
            this.get(t) || "" === e || (this.values[t] = e);
          }),
          (e.get = function (t, e, r) {
            return r
              ? this.has(t)
                ? this.values[t]
                : e[r]
              : this.has(t)
              ? this.values[t]
              : e;
          }),
          (e.has = function (t) {
            return t in this.values;
          }),
          (e.alt = function (t, e, r) {
            for (var i = 0; i < r.length; ++i)
              if (e === r[i]) {
                this.set(t, e);
                break;
              }
          }),
          (e.integer = function (t, e) {
            /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10));
          }),
          (e.percent = function (t, e) {
            if (/^([\d]{1,3})(\.[\d]*)?%$/.test(e)) {
              var r = parseFloat(e);
              if (r >= 0 && r <= 100) return this.set(t, r), !0;
            }
            return !1;
          }),
          t
        );
      })();
      function o(t, e, r, i) {
        var n = i ? t.split(i) : [t];
        for (var a in n)
          if ("string" == typeof n[a]) {
            var s = n[a].split(r);
            2 === s.length && e(s[0], s[1]);
          }
      }
      var l = new i.default(0, 0, ""),
        u = "middle" === l.align ? "middle" : "center";
      function d(t, e, r) {
        var i = t;
        function n() {
          var e = a(t);
          if (null === e) throw new Error("Malformed timestamp: " + i);
          return (t = t.replace(/^[^\sa-zA-Z-]+/, "")), e;
        }
        function d() {
          t = t.replace(/^\s+/, "");
        }
        if ((d(), (e.startTime = n()), d(), "--\x3e" !== t.substr(0, 3)))
          throw new Error(
            "Malformed time stamp (time stamps must be separated by '--\x3e'): " +
              i
          );
        (t = t.substr(3)),
          d(),
          (e.endTime = n()),
          d(),
          (function (t, e) {
            var i = new s();
            o(
              t,
              function (t, e) {
                var n;
                switch (t) {
                  case "region":
                    for (var a = r.length - 1; a >= 0; a--)
                      if (r[a].id === e) {
                        i.set(t, r[a].region);
                        break;
                      }
                    break;
                  case "vertical":
                    i.alt(t, e, ["rl", "lr"]);
                    break;
                  case "line":
                    (n = e.split(",")),
                      i.integer(t, n[0]),
                      i.percent(t, n[0]) && i.set("snapToLines", !1),
                      i.alt(t, n[0], ["auto"]),
                      2 === n.length &&
                        i.alt("lineAlign", n[1], ["start", u, "end"]);
                    break;
                  case "position":
                    (n = e.split(",")),
                      i.percent(t, n[0]),
                      2 === n.length &&
                        i.alt("positionAlign", n[1], [
                          "start",
                          u,
                          "end",
                          "line-left",
                          "line-right",
                          "auto",
                        ]);
                    break;
                  case "size":
                    i.percent(t, e);
                    break;
                  case "align":
                    i.alt(t, e, ["start", u, "end", "left", "right"]);
                }
              },
              /:/,
              /\s/
            ),
              (e.region = i.get("region", null)),
              (e.vertical = i.get("vertical", ""));
            var n = i.get("line", "auto");
            "auto" === n && -1 === l.line && (n = -1),
              (e.line = n),
              (e.lineAlign = i.get("lineAlign", "start")),
              (e.snapToLines = i.get("snapToLines", !0)),
              (e.size = i.get("size", 100)),
              (e.align = i.get("align", u));
            var a = i.get("position", "auto");
            "auto" === a &&
              50 === l.position &&
              (a =
                "start" === e.align || "left" === e.align
                  ? 0
                  : "end" === e.align || "right" === e.align
                  ? 100
                  : 50),
              (e.position = a);
          })(t, e);
      }
      function c(t) {
        return t.replace(/<br(?: \/)?>/gi, "\n");
      }
      var h = (function () {
        function t() {
          (this.state = "INITIAL"),
            (this.buffer = ""),
            (this.decoder = new n()),
            (this.regionList = []),
            (this.cue = null),
            (this.oncue = void 0),
            (this.onparsingerror = void 0),
            (this.onflush = void 0);
        }
        var e = t.prototype;
        return (
          (e.parse = function (t) {
            var e = this;
            function r() {
              var t = e.buffer,
                r = 0;
              for (t = c(t); r < t.length && "\r" !== t[r] && "\n" !== t[r]; )
                ++r;
              var i = t.substr(0, r);
              return (
                "\r" === t[r] && ++r,
                "\n" === t[r] && ++r,
                (e.buffer = t.substr(r)),
                i
              );
            }
            t && (e.buffer += e.decoder.decode(t, { stream: !0 }));
            try {
              var n = "";
              if ("INITIAL" === e.state) {
                if (!/\r\n|\n/.test(e.buffer)) return this;
                var a = (n = r()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                if (!a || !a[0]) throw new Error("Malformed WebVTT signature.");
                e.state = "HEADER";
              }
              for (var s = !1; e.buffer; ) {
                if (!/\r\n|\n/.test(e.buffer)) return this;
                switch ((s ? (s = !1) : (n = r()), e.state)) {
                  case "HEADER":
                    /:/.test(n)
                      ? o(n, function (t, e) {}, /:/)
                      : n || (e.state = "ID");
                    continue;
                  case "NOTE":
                    n || (e.state = "ID");
                    continue;
                  case "ID":
                    if (/^NOTE($|[ \t])/.test(n)) {
                      e.state = "NOTE";
                      break;
                    }
                    if (!n) continue;
                    if (
                      ((e.cue = new i.default(0, 0, "")),
                      (e.state = "CUE"),
                      -1 === n.indexOf("--\x3e"))
                    ) {
                      e.cue.id = n;
                      continue;
                    }
                  case "CUE":
                    if (!e.cue) {
                      e.state = "BADCUE";
                      continue;
                    }
                    try {
                      d(n, e.cue, e.regionList);
                    } catch (u) {
                      (e.cue = null), (e.state = "BADCUE");
                      continue;
                    }
                    e.state = "CUETEXT";
                    continue;
                  case "CUETEXT":
                    var l = -1 !== n.indexOf("--\x3e");
                    if (!n || (l && (s = !0))) {
                      e.oncue && e.cue && e.oncue(e.cue),
                        (e.cue = null),
                        (e.state = "ID");
                      continue;
                    }
                    if (null === e.cue) continue;
                    e.cue.text && (e.cue.text += "\n"), (e.cue.text += n);
                    continue;
                  case "BADCUE":
                    n || (e.state = "ID");
                }
              }
            } catch (u) {
              "CUETEXT" === e.state && e.cue && e.oncue && e.oncue(e.cue),
                (e.cue = null),
                (e.state = "INITIAL" === e.state ? "BADWEBVTT" : "BADCUE");
            }
            return this;
          }),
          (e.flush = function () {
            var t = this;
            try {
              if (
                ((t.cue || "HEADER" === t.state) &&
                  ((t.buffer += "\n\n"), t.parse()),
                "INITIAL" === t.state || "BADWEBVTT" === t.state)
              )
                throw new Error("Malformed WebVTT signature.");
            } catch (e) {
              t.onparsingerror && t.onparsingerror(e);
            }
            return t.onflush && t.onflush(), this;
          }),
          t
        );
      })();
    },
    "./src/utils/webvtt-parser.ts": function (t, e, r) {
      r.r(e),
        r.d(e, "generateCueId", function () {
          return c;
        }),
        r.d(e, "parseWebVTT", function () {
          return h;
        });
      var i = r("./src/polyfills/number.ts"),
        n = r("./src/utils/vttparser.ts"),
        a = r("./src/demux/id3.ts"),
        s = r("./src/utils/timescale-conversion.ts"),
        o = r("./src/remux/mp4-remuxer.ts"),
        l = /\r\n|\n\r|\n|\r/g,
        u = function (t, e, r) {
          return void 0 === r && (r = 0), t.substr(r, e.length) === e;
        },
        d = function (t) {
          for (var e = 5381, r = t.length; r; )
            e = (33 * e) ^ t.charCodeAt(--r);
          return (e >>> 0).toString();
        };
      function c(t, e, r) {
        return d(t.toString()) + d(e.toString()) + d(r);
      }
      function h(t, e, r, d, h, f, g, v) {
        var p,
          m = new n.VTTParser(),
          y = Object(a.utf8ArrayToStr)(new Uint8Array(t))
            .trim()
            .replace(l, "\n")
            .split("\n"),
          E = [],
          T = Object(s.toMpegTsClockFromTimescale)(e, r),
          S = "00:00.000",
          b = 0,
          L = 0,
          A = !0,
          k = !1;
        (m.oncue = function (t) {
          var e = d[h],
            r = d.ccOffset,
            i = (b - T) / 9e4;
          if (
            (null != e &&
              e.new &&
              (void 0 !== L
                ? (r = d.ccOffset = e.start)
                : (function (t, e, r) {
                    var i = t[e],
                      n = t[i.prevCC];
                    if (!n || (!n.new && i.new))
                      return (
                        (t.ccOffset = t.presentationOffset = i.start),
                        void (i.new = !1)
                      );
                    for (; null !== (a = n) && void 0 !== a && a.new; ) {
                      var a;
                      (t.ccOffset += i.start - n.start),
                        (i.new = !1),
                        (n = t[(i = n).prevCC]);
                    }
                    t.presentationOffset = r;
                  })(d, h, i)),
            i && (r = i - d.presentationOffset),
            k)
          ) {
            var n = t.endTime - t.startTime,
              a =
                Object(o.normalizePts)(9e4 * (t.startTime + r - L), 9e4 * f) /
                9e4;
            (t.startTime = a), (t.endTime = a + n);
          }
          var s = t.text.trim();
          (t.text = decodeURIComponent(encodeURIComponent(s))),
            t.id || (t.id = c(t.startTime, t.endTime, s)),
            t.endTime > 0 && E.push(t);
        }),
          (m.onparsingerror = function (t) {
            p = t;
          }),
          (m.onflush = function () {
            p ? v(p) : g(E);
          }),
          y.forEach(function (t) {
            if (A) {
              if (u(t, "X-TIMESTAMP-MAP=")) {
                (A = !1),
                  (k = !0),
                  t
                    .substr(16)
                    .split(",")
                    .forEach(function (t) {
                      u(t, "LOCAL:")
                        ? (S = t.substr(6))
                        : u(t, "MPEGTS:") && (b = parseInt(t.substr(7)));
                    });
                try {
                  L =
                    (function (t) {
                      var e = parseInt(t.substr(-3)),
                        r = parseInt(t.substr(-6, 2)),
                        n = parseInt(t.substr(-9, 2)),
                        a =
                          t.length > 9
                            ? parseInt(t.substr(0, t.indexOf(":")))
                            : 0;
                      if (
                        !(
                          Object(i.isFiniteNumber)(e) &&
                          Object(i.isFiniteNumber)(r) &&
                          Object(i.isFiniteNumber)(n) &&
                          Object(i.isFiniteNumber)(a)
                        )
                      )
                        throw Error("Malformed X-TIMESTAMP-MAP: Local:" + t);
                      return (e += 1e3 * r), (e += 6e4 * n) + 36e5 * a;
                    })(S) / 1e3;
                } catch (e) {
                  (k = !1), (p = e);
                }
                return;
              }
              "" === t && (A = !1);
            }
            m.parse(t + "\n");
          }),
          m.flush();
      }
    },
    "./src/utils/xhr-loader.ts": function (t, e, r) {
      r.r(e);
      var i = r("./src/utils/logger.ts"),
        n = r("./src/loader/load-stats.ts"),
        a = /^age:\s*[\d.]+\s*$/m,
        s = (function () {
          function t(t) {
            (this.xhrSetup = void 0),
              (this.requestTimeout = void 0),
              (this.retryTimeout = void 0),
              (this.retryDelay = void 0),
              (this.config = null),
              (this.callbacks = null),
              (this.context = void 0),
              (this.loader = null),
              (this.stats = void 0),
              (this.xhrSetup = t ? t.xhrSetup : null),
              (this.stats = new n.LoadStats()),
              (this.retryDelay = 0);
          }
          var e = t.prototype;
          return (
            (e.destroy = function () {
              (this.callbacks = null),
                this.abortInternal(),
                (this.loader = null),
                (this.config = null);
            }),
            (e.abortInternal = function () {
              var t = this.loader;
              self.clearTimeout(this.requestTimeout),
                self.clearTimeout(this.retryTimeout),
                t &&
                  ((t.onreadystatechange = null),
                  (t.onprogress = null),
                  4 !== t.readyState && ((this.stats.aborted = !0), t.abort()));
            }),
            (e.abort = function () {
              var t;
              this.abortInternal(),
                null !== (t = this.callbacks) &&
                  void 0 !== t &&
                  t.onAbort &&
                  this.callbacks.onAbort(this.stats, this.context, this.loader);
            }),
            (e.load = function (t, e, r) {
              if (this.stats.loading.start)
                throw new Error("Loader can only be used once.");
              (this.stats.loading.start = self.performance.now()),
                (this.context = t),
                (this.config = e),
                (this.callbacks = r),
                (this.retryDelay = e.retryDelay),
                this.loadInternal();
            }),
            (e.loadInternal = function () {
              var t = this.config,
                e = this.context;
              if (t) {
                var r = (this.loader = new self.XMLHttpRequest()),
                  i = this.stats;
                (i.loading.first = 0), (i.loaded = 0);
                var n = this.xhrSetup;
                try {
                  if (n)
                    try {
                      n(r, e.url);
                    } catch (a) {
                      r.open("GET", e.url, !0), n(r, e.url);
                    }
                  r.readyState || r.open("GET", e.url, !0);
                } catch (a) {
                  return void this.callbacks.onError(
                    { code: r.status, text: a.message },
                    e,
                    r
                  );
                }
                e.rangeEnd &&
                  r.setRequestHeader(
                    "Range",
                    "bytes=" + e.rangeStart + "-" + (e.rangeEnd - 1)
                  ),
                  (r.onreadystatechange = this.readystatechange.bind(this)),
                  (r.onprogress = this.loadprogress.bind(this)),
                  (r.responseType = e.responseType),
                  self.clearTimeout(this.requestTimeout),
                  (this.requestTimeout = self.setTimeout(
                    this.loadtimeout.bind(this),
                    t.timeout
                  )),
                  r.send();
              }
            }),
            (e.readystatechange = function () {
              var t = this.context,
                e = this.loader,
                r = this.stats;
              if (t && e) {
                var n = e.readyState,
                  a = this.config;
                if (!r.aborted && n >= 2)
                  if (
                    (self.clearTimeout(this.requestTimeout),
                    0 === r.loading.first &&
                      (r.loading.first = Math.max(
                        self.performance.now(),
                        r.loading.start
                      )),
                    4 === n)
                  ) {
                    (e.onreadystatechange = null), (e.onprogress = null);
                    var s = e.status;
                    if (s >= 200 && s < 300) {
                      var o, l;
                      if (
                        ((r.loading.end = Math.max(
                          self.performance.now(),
                          r.loading.first
                        )),
                        (l =
                          "arraybuffer" === t.responseType
                            ? (o = e.response).byteLength
                            : (o = e.responseText).length),
                        (r.loaded = r.total = l),
                        !this.callbacks)
                      )
                        return;
                      var u = this.callbacks.onProgress;
                      if ((u && u(r, t, o, e), !this.callbacks)) return;
                      var d = { url: e.responseURL, data: o };
                      this.callbacks.onSuccess(d, r, t, e);
                    } else
                      r.retry >= a.maxRetry || (s >= 400 && s < 499)
                        ? (i.logger.error(s + " while loading " + t.url),
                          this.callbacks.onError(
                            { code: s, text: e.statusText },
                            t,
                            e
                          ))
                        : (i.logger.warn(
                            s +
                              " while loading " +
                              t.url +
                              ", retrying in " +
                              this.retryDelay +
                              "..."
                          ),
                          this.abortInternal(),
                          (this.loader = null),
                          self.clearTimeout(this.retryTimeout),
                          (this.retryTimeout = self.setTimeout(
                            this.loadInternal.bind(this),
                            this.retryDelay
                          )),
                          (this.retryDelay = Math.min(
                            2 * this.retryDelay,
                            a.maxRetryDelay
                          )),
                          r.retry++);
                  } else
                    self.clearTimeout(this.requestTimeout),
                      (this.requestTimeout = self.setTimeout(
                        this.loadtimeout.bind(this),
                        a.timeout
                      ));
              }
            }),
            (e.loadtimeout = function () {
              i.logger.warn("timeout while loading " + this.context.url);
              var t = this.callbacks;
              t &&
                (this.abortInternal(),
                t.onTimeout(this.stats, this.context, this.loader));
            }),
            (e.loadprogress = function (t) {
              var e = this.stats;
              (e.loaded = t.loaded), t.lengthComputable && (e.total = t.total);
            }),
            (e.getCacheAge = function () {
              var t = null;
              if (this.loader && a.test(this.loader.getAllResponseHeaders())) {
                var e = this.loader.getResponseHeader("age");
                t = e ? parseFloat(e) : null;
              }
              return t;
            }),
            t
          );
        })();
      e.default = s;
    },
  }).default);
var ft,
  gt =
    (ft = ht.exports) &&
    ft.__esModule &&
    Object.prototype.hasOwnProperty.call(ft, "default")
      ? ft.default
      : ft;
const vt = Object.assign(
  { name: "d-icon" },
  {
    props: { icon: String, size: [Number, String] },
    setup: function (s) {
      const o = s,
        l = t(() => ({
          fontSize: /^\d+$/.test(o.size) ? o.size + "px" : o.size,
        }));
      return (t, o) => (
        e(),
        r(
          "i",
          { class: i(["d-icon iconfont", s.icon]), style: n(a(l)) },
          null,
          6
        )
      );
    },
  }
);
(vt.__scopeId = "data-v-0c690e66"), s("data-v-4cb76d59");
const pt = { class: "d-player-top" },
  mt = { class: "top-title" },
  yt = { class: "top-title" };
o();
const Et = {
  props: { title: { default: "" } },
  setup(t) {
    Date.prototype.format = function (t) {
      let e = {
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
      };
      for (var r in e)
        new RegExp("(" + r + ")").test(t) &&
          (t = t.replace(
            RegExp.$1,
            1 == RegExp.$1.length
              ? e[r]
              : ("00" + e[r]).substr(("" + e[r]).length)
          ));
      return t;
    };
    let i = p("00:00:00");
    i.value = new Date().format("hh:mm:ss");
    let n = null;
    return (
      (n = setInterval(() => {
        i.value = new Date().format("hh:mm:ss");
      }, 1e3)),
      b(() => {
        clearInterval(n);
      }),
      (n, s) => (
        e(),
        r("div", pt, [h("p", mt, g(t.title || ""), 1), h("p", yt, g(a(i)), 1)])
      )
    );
  },
  __scopeId: "data-v-4cb76d59",
};
s("data-v-ac2469ec");
const Tt = { class: "d-status" },
  St = { class: "d-flex-center" },
  bt = { class: "d-flex-center" },
  Lt = l("5X速播放中 ");
o();
var At = u({
  props: ["state"],
  setup: (t) => (i, n) =>
    d(
      (e(),
      r(
        "div",
        Tt,
        [
          d(
            h(
              "li",
              St,
              [
                f(
                  vt,
                  {
                    size: "18",
                    class: "d-status-icon",
                    icon:
                      "icon-volume-" +
                      (0 == t.state.volume
                        ? "mute"
                        : t.state.volume > 0.5
                        ? "up"
                        : "down"),
                  },
                  null,
                  8,
                  ["icon"]
                ),
                l(" " + g(~~(100 * t.state.volume)) + "% ", 1),
              ],
              512
            ),
            [[c, "volume" == t.state.handleType]]
          ),
          d(
            h(
              "li",
              bt,
              [
                f(vt, { size: "12", icon: "icon-play" }),
                f(vt, {
                  size: "12",
                  icon: "icon-play",
                  style: { "margin-right": "5px" },
                }),
                Lt,
              ],
              512
            ),
            [
              [
                c,
                "playbackRate" == t.state.handleType || t.state.isMultiplesPlay,
              ],
            ]
          ),
        ],
        512
      )),
      [[c, t.state.handleType || t.state.isMultiplesPlay]]
    ),
});
(At.__scopeId = "data-v-ac2469ec"), s("data-v-385f7870");
const kt = ["checked", "true-value", "false-value"],
  Dt = h("span", { class: "d-switch_action" }, null, -1);
o();
var Rt = u({
  props: {
    modelValue: { type: [Number, String, Boolean] },
    width: { type: String, default: "40px" },
    trueValue: { type: [Number, String, Boolean], default: !0 },
    falseValue: { type: [Number, String, Boolean], default: !0 },
    activeColor: { type: [String], default: "#409EFF" },
  },
  emits: ["update:modelValue", "change"],
  setup(n, { emit: s }) {
    const o = n;
    v((t) => ({ "014e5dc0": n.width, e4e32852: n.activeColor }));
    const l = p(null),
      u = t(() => o.modelValue === o.trueValue),
      d = () => {
        R(() => {
          const t = l.value.checked;
          s("update:modelValue", t), s("change", t);
        });
      };
    return (t, s) => (
      e(),
      r(
        "div",
        { class: i(["d-switch", { "is-checked": a(u) }]) },
        [
          h(
            "input",
            {
              class: "d-switch__input",
              ref: l,
              type: "checkbox",
              checked: a(u),
              onChange: d,
              "true-value": n.trueValue,
              "false-value": n.falseValue,
            },
            null,
            40,
            kt
          ),
          Dt,
        ],
        2
      )
    );
  },
});
(Rt.__scopeId = "data-v-385f7870"), s("data-v-b2384226");
const _t = { key: 0 },
  It = h("i", { class: "rotating iconfont icon-loading f50" }, null, -1),
  Ct = [
    h("i", { class: "rotating iconfont icon-loading f50" }, null, -1),
    h("p", null, "正在缓冲...", -1),
  ],
  wt = [
    h("i", { class: "iconfont icon-replay f24 mr5" }, null, -1),
    l("重新播放 "),
  ],
  xt = [
    h("i", { class: "iconfont icon-replay f24 mr5" }, null, -1),
    l("请求错误 "),
  ];
o();
var Ot = u({
  props: { loadType: String, text: { type: String, default: "" } },
  setup(i) {
    const s = i,
      { proxy: o } = m(),
      l = ["loadstart", "waiting", "ended", "error", "stalled"],
      u = () => {
        o.$parent.play();
      },
      f = t(() => {
        let t = "background: rgba(0, 0, 0, .1);z-index:1";
        return (
          "loadstart" == s.loadType &&
            (t = "background: rgba(0, 0, 0, 1);;z-index:3"),
          t
        );
      });
    return (t, s) =>
      d(
        (e(),
        r(
          "div",
          { class: "d-loading", style: n(a(f)) },
          [
            h("div", null, [
              "loadstart" == i.loadType
                ? (e(), r("span", _t, [It, h("p", null, g(i.text), 1)]))
                : y("", !0),
              d(h("span", null, Ct, 512), [[c, "waiting" == i.loadType]]),
              d(
                h(
                  "span",
                  null,
                  [h("p", { onClick: u, class: "d-flex-x d-pointer" }, wt)],
                  512
                ),
                [[c, "ended" == i.loadType]]
              ),
              d(
                h(
                  "span",
                  null,
                  [h("p", { onClick: u, class: "d-flex-x d-pointer" }, xt)],
                  512
                ),
                [[c, "error" == i.loadType || "stalled" == i.loadType]]
              ),
            ]),
          ],
          4
        )),
        [[c, l.includes(i.loadType)]]
      );
  },
});
Ot.__scopeId = "data-v-b2384226";
const Pt = function (t, e, r, i = !1) {
    t && e && r && t.addEventListener(e, r, i);
  },
  Ft = function (t, e, r, i = !1) {
    t && e && r && t.removeEventListener(e, r, i);
  };
s("data-v-5a794390");
const Mt = ["onMousedown"];
o();
var Nt = u(
  ut(lt({}, { name: "DSlider" }), {
    props: {
      modelValue: { required: !0, type: Number, default: 0 },
      disabled: { type: Boolean, default: !1 },
      vertical: { type: Boolean, default: !1 },
      hover: { type: Boolean, default: !0 },
      hoverText: { type: String, default: "" },
      preload: { type: Number, default: 0 },
      size: { type: String, default: "10px" },
    },
    emits: ["update:modelValue", "change", "onMousemove"],
    setup: function (s, { emit: o }) {
      const l = s;
      v((t) => ({ "5242b67b": s.size }));
      const u = p(null),
        f = p(null),
        m = E({ dragging: !1, hoverPosition: 0, hoverTipsLeft: "50%" }),
        y = t(() => {
          let t = l.modelValue < 0 ? 0 : l.modelValue > 1 ? 1 : l.modelValue;
          return l.vertical ? `height:${100 * t}%` : `width:${100 * t}%`;
        }),
        T = t(() => {
          let t = l.preload < 0 ? 0 : l.preload > 1 ? 1 : l.preload;
          return l.vertical ? `height:${100 * t}%` : `width:${100 * t}%`;
        }),
        S = t(() => {
          let t =
            m.hoverPosition < 0 ? 0 : m.hoverPosition > 1 ? 1 : m.hoverPosition;
          return l.vertical ? `bottom:${100 * t}%` : `left:${100 * t}%`;
        }),
        b = (t) => {
          t.preventDefault();
        },
        L = (t) => {
          l.disabled ||
            (t.preventDefault(),
            (m.dragging = !0),
            k(t),
            Pt(window, "mousemove", R),
            Pt(window, "touchmove", R),
            Pt(window, "mouseup", I),
            Pt(window, "touchend", I));
        },
        A = (t) => {
          if (!l.hover) return;
          let e = D(t);
          if ((o("onMousemove", t, e), (m.hoverPosition = e), l.vertical))
            return;
          let r = u.value,
            i = f.value.clientWidth / 2,
            n = t.clientX - r.getBoundingClientRect().left;
          n < i
            ? (m.hoverTipsLeft = i - n + "px")
            : r.clientWidth - n < i
            ? (m.hoverTipsLeft = r.clientWidth - n - i + "px")
            : (m.hoverTipsLeft = "50%");
        },
        k = (t) => {
          let e = D(t);
          o("update:modelValue", e), o("change", t, e);
        },
        D = (t) => {
          let e = u.value,
            r = 0;
          if (l.vertical) {
            let i = e.clientHeight;
            r = (e.getBoundingClientRect().bottom - t.clientY) / i;
          } else
            r = (t.clientX - e.getBoundingClientRect().left) / e.clientWidth;
          return r < 0 ? 0 : r > 1 ? 1 : r;
        },
        R = (t) => {
          k(t);
        },
        I = (t) => {
          m.dragging &&
            (Ft(window, "mousemove", R),
            Ft(window, "touchmove", R),
            Ft(window, "mouseup", I),
            Ft(window, "touchend", I),
            Ft(window, "contextmenu", I),
            setTimeout(() => {
              m.dragging = !1;
            }, 0));
        };
      return (t, s) => (
        e(),
        r(
          "div",
          {
            ref: u,
            class: i(["d-slider", { "is-vertical": l.vertical }]),
            onMousedown: _(L, ["stop"]),
            onContextmenu: b,
          },
          [
            h(
              "div",
              { class: "d-slider__runway", onMousemove: A },
              [
                d(
                  h(
                    "div",
                    { class: "d-slider__cursor", style: n(a(S)) },
                    [
                      d(
                        h(
                          "div",
                          {
                            class: "d-slider__tips",
                            ref: f,
                            style: n({ left: a(m).hoverTipsLeft }),
                          },
                          g(l.hoverText),
                          5
                        ),
                        [[c, l.hoverText]]
                      ),
                    ],
                    4
                  ),
                  [[c, l.hover]]
                ),
                h(
                  "div",
                  { class: "d-slider__preload", style: n(a(T)) },
                  null,
                  4
                ),
                h("div", { class: "d-slider__bar", style: n(a(y)) }, null, 4),
              ],
              32
            ),
          ],
          42,
          Mt
        )
      );
    },
  })
);
(Nt.__scopeId = "data-v-5a794390"), s("data-v-570fa0d1");
const Bt = { key: 0, class: "d-player-dialog" },
  Ut = { class: "d-player-dialog-body" },
  Gt = { class: "d-player-dialog-title" },
  jt = { class: "d-player-hotkey-panel" },
  Kt = { class: "d-player-filter-panel" },
  Vt = { class: "d-player-filter-panel-item" },
  Ht = h("span", null, "饱和度", -1),
  Wt = { class: "d-player-filter-panel-item" },
  Yt = h("span", null, "亮度", -1),
  qt = { class: "d-player-filter-panel-item" },
  zt = h("span", null, "对比度", -1),
  Xt = { key: 0, class: "d-player-contextmenu" },
  $t = ["dplayerKeyCode"],
  Qt = h("input", { class: "d-player-copyText" }, null, -1);
o();
var Jt = u({
  setup(i) {
    const s = E({
        show: !1,
        dialogType: "",
        dialogTitle: "",
        version: "1.3.1-beta.6",
        mouseX: 0,
        mouseY: 0,
      }),
      o = [
        { label: "视频色彩调整", key: "filter" },
        { label: "快捷键说明", key: "hotkey" },
        { label: "复制视频网址", key: "copy" },
        { label: "版本：1.3.1-beta.6", key: "version" },
      ],
      u = [
        { key: "Space", label: "播放/暂停" },
        { key: "→", label: "单次快进10s，长按5倍速播放" },
        { key: "←", label: "快退5s" },
        { key: "↑", label: "音量增加10%" },
        { key: "↓", label: "音量增加降低10%" },
        { key: "Esc", label: "退出全屏/退出网页全屏" },
        { key: "F", label: "全屏/退出全屏" },
      ],
      v = E({ saturate: 0.392, brightness: 0.392, contrast: 0.392 }),
      p = t(() => ({ left: s.mouseX + "px", top: s.mouseY + "px" }));
    T(v, (t) => {
      let e = document.querySelector("#dPlayerVideo"),
        r = (2.55 * t.saturate).toFixed(2),
        i = (2.55 * t.brightness).toFixed(2),
        n = (2.55 * t.contrast).toFixed(2);
      e.style.filter = `saturate(${r}) brightness(${i}) contrast(${n})`;
    });
    const m = () => {
        (v.saturate = 0.392), (v.brightness = 0.392), (v.contrast = 0.392);
      },
      R = (t) => {
        "Escape" == t.key && I(0);
      },
      _ = (t) => {
        t.preventDefault(), Pt(window, "keydown", R), Pt(window, "click", I);
        let e = document.querySelector("#refPlayerWrap"),
          r = e.clientWidth;
        e.clientHeight,
          (s.mouseX = t.clientX - e.getBoundingClientRect().left),
          r - s.mouseX < 130 && (s.mouseX = s.mouseX + (r - s.mouseX - 130)),
          (s.mouseY = t.clientY - e.getBoundingClientRect().top),
          (s.show = !0);
      },
      I = (t) => {
        let e = "LI" == t.path[0].tagName,
          r =
            t.path[0].attributes.dplayerKeyCode &&
            t.path[0].attributes.dplayerKeyCode.value,
          i = o.map((t) => t.key);
        if (e && i.includes(r))
          if (
            ((s.dialogTitle = t.path[0].innerText),
            (s.dialogType = r),
            "copy" == r)
          ) {
            let t = document.querySelector(".d-player-copyText");
            (t.value = window.location.href),
              t.select(),
              document.execCommand("copy"),
              (s.dialogType = "");
          } else "version" == r && (s.dialogType = "");
        (s.show = !1), Ft(window, "keydown", R), Ft(window, "click", I);
      };
    return (
      S(() => {
        let t = document.querySelector("#refPlayerWrap");
        Ft(window, "keydown", R),
          Ft(window, "click", I),
          Ft(t, "contextmenu", _),
          Pt(t, "contextmenu", _);
      }),
      b(() => {
        let t = document.querySelector("#refPlayerWrap");
        Ft(window, "keydown", R),
          Ft(window, "click", I),
          Ft(t, "contextmenu", _);
      }),
      (t, i) => (
        e(),
        r("div", null, [
          f(
            D,
            { name: "d-fade-in" },
            {
              default: L(() => [
                a(s).dialogType
                  ? (e(),
                    r("div", Bt, [
                      h("div", Ut, [
                        h("h5", Gt, [
                          l(g(a(s).dialogTitle) + " ", 1),
                          h(
                            "i",
                            {
                              onClick:
                                i[0] || (i[0] = (t) => (a(s).dialogType = !1)),
                              class: "icon icon-close",
                            },
                            "X"
                          ),
                        ]),
                        d(
                          h(
                            "ul",
                            jt,
                            [
                              (e(),
                              r(
                                A,
                                null,
                                k(u, (t) =>
                                  h(
                                    "li",
                                    {
                                      class: "d-player-hotkey-panel-item",
                                      key: t.key,
                                    },
                                    [
                                      h("span", null, g(t.key), 1),
                                      h("span", null, g(t.label), 1),
                                    ]
                                  )
                                ),
                                64
                              )),
                            ],
                            512
                          ),
                          [[c, "hotkey" == a(s).dialogType]]
                        ),
                        d(
                          h(
                            "ul",
                            Kt,
                            [
                              h("li", Vt, [
                                Ht,
                                f(
                                  Nt,
                                  {
                                    class: "filter-panel-slider",
                                    size: "5px",
                                    modelValue: a(v).saturate,
                                    "onUpdate:modelValue":
                                      i[1] ||
                                      (i[1] = (t) => (a(v).saturate = t)),
                                  },
                                  null,
                                  8,
                                  ["modelValue"]
                                ),
                                h(
                                  "span",
                                  null,
                                  g(Math.round(255 * a(v).saturate)),
                                  1
                                ),
                              ]),
                              h("li", Wt, [
                                Yt,
                                f(
                                  Nt,
                                  {
                                    class: "filter-panel-slider",
                                    size: "5px",
                                    modelValue: a(v).brightness,
                                    "onUpdate:modelValue":
                                      i[2] ||
                                      (i[2] = (t) => (a(v).brightness = t)),
                                  },
                                  null,
                                  8,
                                  ["modelValue"]
                                ),
                                h(
                                  "span",
                                  null,
                                  g(Math.round(255 * a(v).brightness)),
                                  1
                                ),
                              ]),
                              h("li", qt, [
                                zt,
                                f(
                                  Nt,
                                  {
                                    class: "filter-panel-slider",
                                    size: "5px",
                                    modelValue: a(v).contrast,
                                    "onUpdate:modelValue":
                                      i[3] ||
                                      (i[3] = (t) => (a(v).contrast = t)),
                                  },
                                  null,
                                  8,
                                  ["modelValue"]
                                ),
                                h(
                                  "span",
                                  null,
                                  g(Math.round(255 * a(v).contrast)),
                                  1
                                ),
                              ]),
                              h(
                                "span",
                                {
                                  onClick: m,
                                  title: "重置",
                                  "aria-label": "重置",
                                  class: "d-player-filter-reset",
                                },
                                "重置"
                              ),
                            ],
                            512
                          ),
                          [[c, "filter" == a(s).dialogType]]
                        ),
                      ]),
                    ]))
                  : y("", !0),
              ]),
              _: 1,
            }
          ),
          a(s).show
            ? (e(),
              r("div", Xt, [
                h(
                  "ul",
                  { class: "d-player-contextmenu-body", style: n(a(p)) },
                  [
                    (e(),
                    r(
                      A,
                      null,
                      k(o, (t) =>
                        h(
                          "li",
                          { dplayerKeyCode: t.key, key: t.key },
                          g(t.label),
                          9,
                          $t
                        )
                      ),
                      64
                    )),
                  ],
                  4
                ),
                Qt,
              ]))
            : y("", !0),
        ])
      )
    );
  },
});
Jt.__scopeId = "data-v-570fa0d1";
const Zt = (t) => {
    let e = ~~(t / 3600),
      r = ~~((t % 3600) / 60),
      i = ~~(t % 60);
    return (
      (e = e < 10 ? "0" + e : e),
      (r = r < 10 ? "0" + r : r),
      (i = i < 10 ? "0" + i : i),
      `${e}:${r}:${i}`
    );
  },
  te = !!("ontouchstart" in window),
  ee = [
    "loadstart",
    "play",
    "pause",
    "playing",
    "seeking",
    "seeked",
    "waiting",
    "durationchange",
    "progress",
    "canplay",
    "timeupdate",
    "ended",
    "error",
    "stalled",
  ],
  re = {
    width: { type: String, default: "800px" },
    height: { type: String, default: "450px" },
    color: { type: String, default: "#409eff" },
    src: { required: !0, type: String, default: "" },
    title: { type: String, default: "" },
    type: { type: String, default: "video/mp4" },
    poster: { type: String, default: "" },
    webFullScreen: { type: Boolean, default: !1 },
    speed: { type: Boolean, default: !0 },
    currentTime: { type: Number, default: 0 },
    playsinline: { type: Boolean, default: !1 },
    muted: { type: Boolean, default: !1 },
    speedRate: {
      type: Array,
      default: () => ["2.0", "1.5", "1.25", "1.0", "0.75", "0.5"],
    },
    autoPlay: { type: Boolean, default: !1 },
    loop: { type: Boolean, default: !1 },
    mirror: { type: Boolean, default: !1 },
    ligthOff: { type: Boolean, default: !1 },
    volume: { type: [String, Number], default: 0.3 },
    control: { type: Boolean, default: !0 },
    controlBtns: {
      type: Array,
      default: [
        "audioTrack",
        "quality",
        "speedRate",
        "volume",
        "setting",
        "pip",
        "pageFullScreen",
        "fullScreen",
      ],
    },
    preload: { type: String, default: "auto" },
  };
s("data-v-01791e9e");
const ie = { class: "d-player-video", id: "dPlayerVideo" },
  ne = [
    "controls",
    "webkit-playsinline",
    "playsinline",
    "volume",
    "muted",
    "loop",
    "preload",
    "src",
    "poster",
  ],
  ae = { class: "d-player-lightoff" },
  se = { key: 1, class: "d-player-state" },
  oe = { class: "d-play-btn" },
  le = ["onKeyup", "onKeydown"],
  ue = { class: "d-control-progress" },
  de = { class: "d-tool-bar" },
  ce = { key: 0, class: "d-tool-item d-tool-time audioTrack-btn" },
  he = h("span", { style: { margin: "0 3px" } }, "/", -1),
  fe = { class: "total-time" },
  ge = { class: "d-tool-bar" },
  ve = { key: 0, class: "d-tool-item quality-btn" },
  pe = { class: "d-tool-item-main" },
  me = { class: "speed-main", style: { "text-align": "center" } },
  ye = ["onClick"],
  Ee = { key: 1, class: "d-tool-item speedRate-btn" },
  Te = { class: "d-tool-item-main" },
  Se = { class: "speed-main" },
  be = ["onClick"],
  Le = { key: 2, class: "d-tool-item volume-btn" },
  Ae = { class: "d-tool-item-main volume-box", style: { width: "52px" } },
  ke = { class: "volume-text-size" },
  De = { key: 3, class: "d-tool-item setting-btn" },
  Re = { class: "d-tool-item-main" },
  _e = { class: "speed-main" },
  Ie = l(" 镜像画面 "),
  Ce = l(" 循环播放 "),
  we = l(" 关灯模式 "),
  xe = h("div", { class: "d-tool-item-main" }, "画中画", -1),
  Oe = h("div", { class: "d-tool-item-main" }, "网页全屏", -1),
  Pe = h("div", { class: "d-tool-item-main" }, "全屏", -1);
o();
var Fe = u(
  ut(lt({}, { name: "vue3VideoPlay", inheritAttrs: !1 }), {
    props: re,
    emits: [...ee, "mirrorChange", "loopChange", "lightOffChange"],
    setup: function (t, { expose: n, emit: s }) {
      const o = t;
      v((t) => ({ "51d4439c": a(B), "77e758a6": t.width, b8a1afc0: t.height }));
      const u = new gt({ fragLoadingTimeOut: 2e3 }),
        m = p(null),
        b = p(null),
        _ = p(null),
        O = p(null),
        P = E(
          ut(lt({ dVideo: null }, o), {
            muted: o.muted,
            playBtnState: o.autoPlay ? "pause" : "play",
            loadStateType: "loadstart",
            fullScreen: !1,
            handleType: "",
            currentTime: "00:00:00",
            preloadBar: 0,
            totalTime: "00:00:00",
            isVideoHovering: !0,
            speedActive: "1.0",
            playProgress: 0,
            isMultiplesPlay: !1,
            longPressTimeout: null,
            progressCursorTime: "00:00:00",
            qualityLevels: [],
            currentLevel: 0,
          })
        ),
        F =
          (...t) =>
          (e) =>
            t.reverse().reduce((t, e) => e(t), e),
        M = ee.reduce((t, e) => {
          var r;
          return (
            (t[`on${((r = e), r.charAt(0).toUpperCase() + r.slice(1))}`] = (
              t
            ) => {
              (P.loadStateType = e), s(e, t);
            }),
            t
          );
        }, {});
      (M.onCanplay = F(M.onCanplay, () => {
        "play" != P.playBtnState && P.dVideo.play(),
          P.autoPlay && (P.dVideo.play(), (P.playBtnState = "pause"));
      })),
        (M.onEnded = F(M.onEnded, () => {
          P.playBtnState = "replay";
        })),
        (M.onDurationchange = (t) => {
          s("durationchange", t),
            0 != o.currentTime && (P.dVideo.currentTime = o.currentTime),
            M.onTimeupdate(t);
        }),
        (M.onProgress = (t) => {
          s("progress", t);
          let e = t.target.duration,
            r = t.target.buffered,
            i = t.target.buffered.length && t.target.buffered.end(r - 1);
          P.preloadBar = i / e;
        }),
        (M.onTimeupdate = (t) => {
          s("timeupdate", t);
          let e = t.duration || t.target.duration || 0,
            r = t.currentTime || t.target.currentTime;
          (P.playProgress = r / e),
            (P.currentTime = Zt(r)),
            (P.totalTime = Zt(e));
        }),
        (M.onError = F(M.onError, () => {
          P.playBtnState = "replay";
        }));
      let N = I();
      for (let e in N) M[e] = N[e];
      const B =
        ((U = P.color),
        `${parseInt("0x" + U.slice(1, 3))},${parseInt(
          "0x" + U.slice(3, 5)
        )},${parseInt("0x" + U.slice(5, 7))}`);
      var U;
      const G = ct(500, () => {
          P.handleType = "";
        }),
        j = (t) => {
          t.preventDefault(),
            "ArrowUp" == t.code
              ? (P.volume = P.volume + 0.1 > 1 ? 1 : P.volume + 0.1)
              : (P.volume = P.volume - 0.1 < 0 ? 0 : P.volume - 0.1),
            (P.muted = !1),
            (P.handleType = "volume"),
            G();
        },
        K = (t) => {
          o.speed &&
            ((P.dVideo.currentTime =
              P.dVideo.currentTime < 10 ? 0.1 : P.dVideo.currentTime - 10),
            M.onTimeupdate(P.dVideo),
            W());
        },
        V = (t) => {
          t.preventDefault();
          let e = t.type;
          if ("ArrowRight" == t.key)
            if ((W(), "keyup" == e)) {
              if (
                (clearTimeout(P.longPressTimeout),
                !o.speed && !P.longPressTimeout)
              )
                return;
              P.isMultiplesPlay
                ? ((P.dVideo.playbackRate = P.speedActive),
                  (P.isMultiplesPlay = !1))
                : ((P.dVideo.currentTime = P.dVideo.currentTime + 10),
                  M.onTimeupdate(P.dVideo));
            } else if ("keydown" == e) {
              if (!o.speed) return;
              P.isMultiplesPlay && clearTimeout(P.longPressTimeout),
                (P.longPressTimeout = setTimeout(() => {
                  (P.isMultiplesPlay = !0),
                    (P.dVideo.playbackRate = 5),
                    (P.handleType = "playbackRate"),
                    G();
                }, 500));
            }
        },
        H = () => {
          te || O.value.focus();
        },
        W = () => {
          (P.loadStateType = "play"),
            P.dVideo.play().catch(() => {
              setTimeout(() => {
                (P.playBtnState = "replay"), (P.loadStateType = "error");
              }, 500);
            }),
            (P.playBtnState = "pause");
        },
        Y = () => {
          P.dVideo.pause(), (P.playBtnState = "play");
        },
        q = (t) => {
          t && t.preventDefault(),
            "play" == P.playBtnState || "replay" == P.playBtnState
              ? W()
              : "pause" == P.playBtnState && Y();
        },
        z = () => {
          (P.muted = !P.muted), 0 == P.volume && (P.volume = 0.05);
        },
        X = (t, e) => {
          let r = P.dVideo.duration || P.dVideo.target.duration;
          (P.dVideo.currentTime = r * e),
            "play" == P.playBtnState &&
              (P.dVideo.play(), (P.playBtnState = "pause"));
        },
        $ = (t, e) => {
          P.progressCursorTime = Zt(P.dVideo.duration * e);
        },
        Q = ct(2500, () => {
          P.isVideoHovering = !1;
        }),
        J = (t) => {
          (P.isVideoHovering = !0), Q();
        },
        Z = (t) => {
          s("mirrorChange", t, P.dVideo);
        },
        tt = (t) => {
          s("loopChange", t, P.dVideo);
        },
        et = (t) => {
          s("lightOffChange", t, P.dVideo);
        },
        rt = () => {
          var t;
          (t = P.dVideo),
            document.pictureInPictureElement
              ? document.exitPictureInPicture().catch((t) => {})
              : t.requestPictureInPicture().catch((t) => {});
        },
        it = () => {
          P.fullScreen = ((t) => {
            let e = document,
              r = e.webkitIsFullScreen || e.fullscreen;
            return (
              r
                ? (document.exitFullscreen || e.webkitExitFullScreen).call(e)
                : (t.requestFullscreen || t.webkitRequestFullScreen).call(t),
              !r
            );
          })(m.value);
        };
      return (
        T(
          () => o.src,
          () => {
            R(() => {
              P.dVideo.canPlayType(o.type) ||
              P.dVideo.canPlayType("application/vnd.apple.mpegurl")
                ? (P.muted = o.autoPlay)
                : gt.isSupported() &&
                  (u.detachMedia(),
                  u.attachMedia(P.dVideo),
                  u.on(gt.Events.MEDIA_ATTACHED, () => {
                    u.loadSource(o.src),
                      u.on("hlsManifestParsed", (t, e) => {
                        (P.currentLevel = e.level),
                          (P.qualityLevels = e.levels || []);
                      });
                  }),
                  u.on("hlsLevelSwitching", (t, e) => {}),
                  u.on("hlsLevelSwitched", (t, e) => {
                    P.currentLevel = e.level;
                  }));
            });
          },
          { immediate: !0 }
        ),
        S(() => {
          (P.dVideo = b), H();
        }),
        n({ play: W, pause: Y, togglePlay: q }),
        (t, n) => (
          e(),
          r(
            "div",
            {
              ref: m,
              id: "refPlayerWrap",
              class: i([
                "d-player-wrap",
                {
                  "web-full-screen": a(P).webFullScreen,
                  "is-lightoff": a(P).lightOff,
                  "d-player-wrap-hover":
                    "play" == a(P).playBtnState || a(P).isVideoHovering,
                },
              ]),
              onMousemove: J,
            },
            [
              h("div", ie, [
                h(
                  "video",
                  C(
                    {
                      ref: b,
                      class: [
                        "d-player-video-main",
                        { "video-mirror": a(P).mirror },
                      ],
                      id: "dPlayerVideoMain",
                      controls: !(!a(te) || !a(P).speed),
                      "webkit-playsinline": o.playsinline,
                      playsinline: o.playsinline,
                    },
                    a(M),
                    {
                      volume: a(P).volume,
                      muted: a(P).muted,
                      loop: a(P).loop,
                      preload: t.preload,
                      width: "100%",
                      height: "100%",
                      src: o.src,
                      poster: o.poster,
                    }
                  ),
                  "您的浏览器不支持Video标签。",
                  16,
                  ne
                ),
              ]),
              f(
                D,
                { name: "d-fade-in" },
                {
                  default: L(() => [
                    d(h("div", ae, null, 512), [[c, a(P).lightOff]]),
                  ]),
                  _: 1,
                }
              ),
              a(P).fullScreen
                ? (e(), w(Et, { key: 0, title: o.title }, null, 8, ["title"]))
                : y("", !0),
              a(te)
                ? y("", !0)
                : (e(),
                  r("div", se, [
                    f(
                      D,
                      { name: "d-scale-out" },
                      {
                        default: L(() => [
                          d(
                            h(
                              "div",
                              oe,
                              [f(vt, { icon: "icon-play", size: 40 })],
                              512
                            ),
                            [[c, "play" == a(P).playBtnState]]
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                    f(At, { state: a(P) }, null, 8, ["state"]),
                  ])),
              a(te)
                ? y("", !0)
                : (e(),
                  r(
                    "input",
                    {
                      key: 2,
                      type: "input",
                      readonly: "readonly",
                      ref: O,
                      onDblclick: it,
                      onKeyup: [
                        x(it, ["f"]),
                        n[0] ||
                          (n[0] = x((t) => (a(P).webFullScreen = !1), ["esc"])),
                        V,
                      ],
                      onClick: q,
                      onKeydown: [
                        x(q, ["space"]),
                        x(K, ["arrow-left"]),
                        x(j, ["arrow-up", "arrow-down"]),
                        V,
                      ],
                      class: "d-player-input",
                      maxlength: "0",
                    },
                    null,
                    40,
                    le
                  )),
              f(Ot, { loadType: a(P).loadStateType }, null, 8, ["loadType"]),
              f(Jt),
              !a(te) && a(P).control
                ? (e(),
                  r(
                    "div",
                    { key: 3, class: "d-player-control", ref: _ },
                    [
                      h("div", ue, [
                        f(
                          Nt,
                          {
                            class: "d-progress-bar",
                            onOnMousemove: $,
                            onChange: X,
                            disabled: !a(P).speed,
                            hoverText: a(P).progressCursorTime,
                            modelValue: a(P).playProgress,
                            "onUpdate:modelValue":
                              n[1] || (n[1] = (t) => (a(P).playProgress = t)),
                            preload: a(P).preloadBar,
                          },
                          null,
                          8,
                          ["disabled", "hoverText", "modelValue", "preload"]
                        ),
                      ]),
                      h("div", { class: "d-control-tool", onClick: H }, [
                        h("div", de, [
                          h("div", { class: "d-tool-item", onClick: q }, [
                            f(
                              vt,
                              { size: "24", icon: `icon-${a(P).playBtnState}` },
                              null,
                              8,
                              ["icon"]
                            ),
                          ]),
                          o.controlBtns.includes("audioTrack")
                            ? (e(),
                              r("div", ce, [
                                h("span", null, g(a(P).currentTime), 1),
                                he,
                                h("span", fe, g(a(P).totalTime), 1),
                              ]))
                            : y("", !0),
                        ]),
                        h("div", ge, [
                          a(P).qualityLevels.length &&
                          o.controlBtns.includes("quality")
                            ? (e(),
                              r("div", ve, [
                                l(
                                  g(
                                    a(P).qualityLevels.length &&
                                      (
                                        a(P).qualityLevels[a(P).currentLevel] ||
                                        {}
                                      ).height
                                  ) + "P ",
                                  1
                                ),
                                h("div", pe, [
                                  h("ul", me, [
                                    (e(!0),
                                    r(
                                      A,
                                      null,
                                      k(
                                        a(P).qualityLevels,
                                        (t, n) => (
                                          e(),
                                          r(
                                            "li",
                                            {
                                              class: i({
                                                "speed-active":
                                                  a(P).currentLevel == n,
                                              }),
                                              onClick: (t) => {
                                                return (
                                                  (e = n),
                                                  (u.currentLevel = e),
                                                  void (P.currentLevel = e)
                                                );
                                                var e;
                                              },
                                              key: t,
                                            },
                                            g(t.height) + "P",
                                            11,
                                            ye
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ]),
                                ]),
                              ]))
                            : y("", !0),
                          o.controlBtns.includes("speedRate")
                            ? (e(),
                              r("div", Ee, [
                                l(
                                  g(
                                    "1.0" == a(P).speedActive
                                      ? "倍速"
                                      : a(P).speedActive + "x"
                                  ) + " ",
                                  1
                                ),
                                h("div", Te, [
                                  h("ul", Se, [
                                    (e(!0),
                                    r(
                                      A,
                                      null,
                                      k(
                                        a(P).speedRate,
                                        (t) => (
                                          e(),
                                          r(
                                            "li",
                                            {
                                              class: i({
                                                "speed-active":
                                                  a(P).speedActive == t,
                                              }),
                                              onClick: (e) => {
                                                return (
                                                  (r = t),
                                                  (P.speedActive = r),
                                                  void (P.dVideo.playbackRate =
                                                    r)
                                                );
                                                var r;
                                              },
                                              key: t,
                                            },
                                            g(t) + "x",
                                            11,
                                            be
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ]),
                                ]),
                              ]))
                            : y("", !0),
                          o.controlBtns.includes("volume")
                            ? (e(),
                              r("div", Le, [
                                h("div", Ae, [
                                  h(
                                    "div",
                                    {
                                      class: i([
                                        "volume-main",
                                        { "is-muted": a(P).muted },
                                      ]),
                                    },
                                    [
                                      h(
                                        "span",
                                        ke,
                                        g(
                                          a(P).muted ? 0 : ~~(100 * a(P).volume)
                                        ) + "%",
                                        1
                                      ),
                                      f(
                                        Nt,
                                        {
                                          onChange:
                                            n[2] ||
                                            (n[2] = (t) => (a(P).muted = !1)),
                                          hover: !1,
                                          size: "5px",
                                          vertical: !0,
                                          modelValue: a(P).volume,
                                          "onUpdate:modelValue":
                                            n[3] ||
                                            (n[3] = (t) => (a(P).volume = t)),
                                        },
                                        null,
                                        8,
                                        ["modelValue"]
                                      ),
                                    ],
                                    2
                                  ),
                                ]),
                                h(
                                  "span",
                                  { onClick: z, style: { display: "flex" } },
                                  [
                                    f(
                                      vt,
                                      {
                                        size: "20",
                                        icon:
                                          "icon-volume-" +
                                          (0 == a(P).volume || a(P).muted
                                            ? "mute"
                                            : a(P).volume > 0.5
                                            ? "up"
                                            : "down"),
                                      },
                                      null,
                                      8,
                                      ["icon"]
                                    ),
                                  ]
                                ),
                              ]))
                            : y("", !0),
                          o.controlBtns.includes("setting")
                            ? (e(),
                              r("div", De, [
                                f(vt, {
                                  size: "20",
                                  class: "rotateHover",
                                  icon: "icon-settings",
                                }),
                                h("div", Re, [
                                  h("ul", _e, [
                                    h("li", null, [
                                      Ie,
                                      f(
                                        Rt,
                                        {
                                          onChange: Z,
                                          modelValue: a(P).mirror,
                                          "onUpdate:modelValue":
                                            n[4] ||
                                            (n[4] = (t) => (a(P).mirror = t)),
                                        },
                                        null,
                                        8,
                                        ["modelValue"]
                                      ),
                                    ]),
                                    h("li", null, [
                                      Ce,
                                      f(
                                        Rt,
                                        {
                                          onChange: tt,
                                          modelValue: a(P).loop,
                                          "onUpdate:modelValue":
                                            n[5] ||
                                            (n[5] = (t) => (a(P).loop = t)),
                                        },
                                        null,
                                        8,
                                        ["modelValue"]
                                      ),
                                    ]),
                                    h("li", null, [
                                      we,
                                      f(
                                        Rt,
                                        {
                                          onChange: et,
                                          modelValue: a(P).lightOff,
                                          "onUpdate:modelValue":
                                            n[6] ||
                                            (n[6] = (t) => (a(P).lightOff = t)),
                                        },
                                        null,
                                        8,
                                        ["modelValue"]
                                      ),
                                    ]),
                                  ]),
                                ]),
                              ]))
                            : y("", !0),
                          o.controlBtns.includes("pip")
                            ? (e(),
                              r(
                                "div",
                                {
                                  key: 4,
                                  class: "d-tool-item pip-btn",
                                  onClick: rt,
                                },
                                [f(vt, { size: "20", icon: "icon-pip" }), xe]
                              ))
                            : y("", !0),
                          o.controlBtns.includes("pageFullScreen")
                            ? (e(),
                              r(
                                "div",
                                {
                                  key: 5,
                                  class: "d-tool-item pip-btn",
                                  onClick:
                                    n[7] ||
                                    (n[7] = (t) =>
                                      (a(P).webFullScreen =
                                        !a(P).webFullScreen)),
                                },
                                [
                                  f(vt, {
                                    size: "20",
                                    icon: "icon-web-screen",
                                  }),
                                  Oe,
                                ]
                              ))
                            : y("", !0),
                          o.controlBtns.includes("fullScreen")
                            ? (e(),
                              r(
                                "div",
                                {
                                  key: 6,
                                  class: "d-tool-item fullScreen-btn",
                                  onClick: it,
                                },
                                [Pe, f(vt, { size: "20", icon: "icon-screen" })]
                              ))
                            : y("", !0),
                        ]),
                      ]),
                    ],
                    512
                  ))
                : y("", !0),
            ],
            34
          )
        )
      );
    },
  })
);
(Fe.__scopeId = "data-v-01791e9e"),
  (Fe.install = function (t) {
    t.component(Fe.name, Fe);
  });
const Me = {
    abi: [
      { inputs: [], stateMutability: "nonpayable", type: "constructor" },
      {
        anonymous: !1,
        inputs: [
          {
            indexed: !0,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: !0,
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            indexed: !1,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: !1,
        inputs: [
          {
            indexed: !0,
            internalType: "address",
            name: "from",
            type: "address",
          },
          { indexed: !0, internalType: "address", name: "to", type: "address" },
          {
            indexed: !1,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        inputs: [
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "address", name: "spender", type: "address" },
        ],
        name: "allowance",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "spender", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "balanceOf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "spender", type: "address" },
          { internalType: "uint256", name: "subtractedValue", type: "uint256" },
        ],
        name: "decreaseAllowance",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "spender", type: "address" },
          { internalType: "uint256", name: "addedValue", type: "uint256" },
        ],
        name: "increaseAllowance",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "mintTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "transfer",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "from", type: "address" },
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "transferFrom",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
  },
  Ne = function (t, e, r, i = !1) {
    t && e && r && t.addEventListener(e, r, i);
  },
  Be = new Map();
let Ue;
function Ge(t, e) {
  let r = [];
  return (
    Array.isArray(e.arg) ? (r = e.arg) : r.push(e.arg),
    function (i, n) {
      const a = e.instance.popperRef,
        s = i.target,
        o = n.target,
        l = !e || !e.instance,
        u = !s || !o,
        d = t.contains(s) || t.contains(o),
        c = t === s,
        h =
          (r.length && r.some((t) => (null == t ? void 0 : t.contains(s)))) ||
          (r.length && r.includes(o)),
        f = a && (a.contains(s) || a.contains(o));
      l || u || d || c || h || f || e.value();
    }
  );
}
Ne(document, "mousedown", (t) => (Ue = t)),
  Ne(document, "mouseup", (t) => {
    for (const { documentHandler: e } of Be.values()) e(t, Ue);
  });
const je = {
    beforeMount(t, e) {
      Be.set(t, { documentHandler: Ge(t, e), bindingFn: e.value });
    },
    updated(t, e) {
      Be.set(t, { documentHandler: Ge(t, e), bindingFn: e.value });
    },
    unmounted(t) {
      Be.delete(t);
    },
  },
  Ke = "/static/svg/2b22cc0a.svg",
  Ve = "/static/svg/1c206ec8.svg",
  He = { id: "kilo-header" },
  We = { class: "web" },
  Ye = { class: "public-header" },
  qe = { class: "left" },
  ze = { href: "/#/trade", class: "logo" },
  Xe = ["src"],
  $e = ["src"],
  Qe = ["src"],
  Je = ["src"],
  Ze = { class: "kilo-menu-list" },
  tr = {
    target: "_blank",
    href: "https://discord.com/",
    class: "klioex-menu kiloex-menu-community",
  },
  er = { class: "menu-second" },
  rr = {
    href: "#",
    target: "_blank",
    class: "kiloex-menu kiloex-menu-documentation",
  },
  ir = {
    href: "#",
    target: "_blank",
    class: "item kiloex-menu kiloex-menu-feedback",
  },
  nr = { class: "right" },
  ar = { class: "mobile" },
  sr = { class: "public-header" },
  or = { class: "left" },
  lr = { href: "/#/trade", class: "logo" },
  ur = ["src"],
  dr = ["src"],
  cr = { class: "right" },
  hr = { key: 0, class: "mobile-menu" },
  fr = { class: "header" },
  gr = { class: "menu-content" },
  vr = {
    target: "_blank",
    href: "https://discord.com",
    class: "klioex-menu kiloex-menu-community",
  },
  pr = { disabled: "" },
  mr = {
    href: "#",
    target: "_blank",
    class: "kiloex-menu kiloex-menu-documentation",
  },
  yr = {
    href: "#",
    target: "_blank",
    class: "item kiloex-menu kiloex-menu-feedback",
  },
  Er = ["onKeyup"],
  Tr = { class: "video", ref: "videoRefDiv" },
  Sr = {
    __name: "PublicHeader",
    emits: ["isLoaded"],
    setup(i, { emit: n }) {
      const s = M(),
        { guideSteps: o, maxSteps: u } = Z(s),
        v = N(),
        m = B(),
        E = p(!1),
        b = p(!1),
        { t: k } = U(),
        D = G(),
        _ = j(),
        I = K(),
        { userInfo: C } = Z(I),
        {
          walletInfo: F,
          chainId: et,
          currentQuote: rt,
          clientWidth: it,
          chainAlready: nt,
          mintTestUsdt: at,
        } = Z(D),
        { theme: st } = Z(_),
        ot = t(() => V[et.value]),
        lt = p(!1);
      H();
      const ut = t(() => W[et.value]);
      p(), p();
      const dt = p(!1),
        ct = (t) => {
          var e;
          s.$patch({
            guideSteps:
              t ||
              (1 == o.value
                ? (null == (e = V[et.value]) ? void 0 : e.mainnet) &&
                  "/contest" != v.path
                  ? 2
                  : 3
                : o.value + 1),
          });
        },
        ht = () => {
          (E.value = !0), s.$patch({ guideSteps: 0 });
        },
        ft = () => {
          m.push({ path: "/contest" });
        },
        gt = () => {
          E.value = !0;
        },
        vt = () => {
          var t;
          (E.value = !1),
            0 == o.value &&
              s.$patch({
                guideSteps:
                  (null == (t = V[et.value]) ? void 0 : t.mainnet) &&
                  "/contest" != v.path
                    ? 2
                    : 3,
              });
        },
        pt = () => {
          E.value && vt();
        };
      T(
        () => it.value,
        (t) => {
          t && (b.value = !1);
        }
      ),
        T(
          [() => v, () => dt.value],
          () => {
            "/contest" == v.path &&
              (dt.value ||
                (document.title = k("menu.leaderboard") + " | KiloEx"));
          },
          { deep: !0, immediate: !0 }
        );
      const mt = () => {
          b.value = !1;
        },
        yt = p(!1),
        Et = async () => {
          var t, e, r, i;
          if (!yt.value && (null == (t = F.value) ? void 0 : t.account))
            if (1 * (null == (e = F.value) ? void 0 : e.balance) >= 2e3)
              q.warning(k("public.enoughBalance"));
            else {
              if (((yt.value = !0), !nt.value))
                try {
                  await X({ chainId: et.value });
                } catch (n) {
                  return void (yt.value = !1);
                }
              try {
                const t = await $({
                    address: ot.value.kusdAddr,
                    abi: Me.abi,
                    functionName: "mintTo",
                    chainId: et.value,
                    args: [
                      null == (r = F.value) ? void 0 : r.account,
                      z(2e3, null == (i = ot.value) ? void 0 : i.decimal),
                    ],
                    overrides: { gasLimit: P.from(21e4) },
                  }),
                  { hash: e } = await Q(t);
                "success" == (await J({ hash: e })).status &&
                  q.success({ title: k("public.mintSuccess") });
              } catch (n) {
                q.error({ content: n.shortMessage || n.details });
              }
              (yt.value = !1), D.$patch({ mintTestUsdt: !1 });
            }
        },
        Tt = () => {
          const t = tt().unix();
          ut.value.length
            ? ut.value.forEach((e) => {
                (tt(e[0]).unix() <= t && t <= tt(e[1]).unix()) ||
                t < tt(e[0]).unix()
                  ? (dt.value = !0)
                  : (dt.value = !1);
              })
            : (dt.value = !1);
        },
        St = p(!1),
        bt = () => {
          (St.value = !0), n("isLoaded", !0);
        };
      S(() => {
        Tt(),
          R(() => {
            (St.value = !0), n("isLoaded", !0);
          });
      }),
        T(
          () => {
            var t;
            return null == (t = F.value) ? void 0 : t.account;
          },
          (t) => {
            t &&
              ((lt.value = !1),
              setTimeout(() => {
                lt.value = !0;
              }, 1e3));
          },
          { immediate: !0 }
        ),
        T(
          () => et.value,
          (t) => {
            t && Tt();
          }
        ),
        T(
          () => at.value,
          (t) => {
            t && Et();
          }
        );
      const Lt = p(!0);
      return (
        T(
          () => v,
          () => {
            Lt.value && (Lt.value = !1),
              Y() ||
                Lt.value ||
                "/trade" == v.path ||
                (0 != o.value
                  ? s.$patch({
                      guideSteps: o.value <= u.value ? o.value + 1 : o.value,
                    })
                  : s.$patch({ guideSteps: 2 }));
          },
          { deep: !0 }
        ),
        (t, i) => {
          var n, s, u, p, m;
          const T = O("RouterLink"),
            S = O("IconFont"),
            k = O("KiloGuide"),
            D = O("icon-down"),
            R = O("a-trigger"),
            _ = O("SwitchTheme"),
            I = O("a-button"),
            P = O("KiloLanguage"),
            M = O("KiloSwitchChain"),
            N = O("ConnectWallet"),
            B = O("a-space"),
            U = O("icon-close"),
            G = O("icon-right"),
            j = O("a-menu-item"),
            K = O("a-sub-menu"),
            V = O("a-menu"),
            H = O("KiloFadeback"),
            W = O("KiloTestnetTopTip");
          return (
            e(),
            r(
              A,
              null,
              [
                h("div", He, [
                  h("div", We, [
                    h("div", Ye, [
                      h("div", qe, [
                        h("a", ze, [
                          d(
                            h(
                              "img",
                              { src: a(Ke), alt: "", srcset: "" },
                              null,
                              8,
                              Xe
                            ),
                            [[c, "dark" == a(st)]]
                          ),
                          d(
                            h(
                              "img",
                              { src: a(Ve), alt: "", srcset: "" },
                              null,
                              8,
                              $e
                            ),
                            [[c, "light" == a(st)]]
                          ),
                          d(
                            h(
                              "img",
                              {
                                class: "beta",
                                src: a("/static/svg/8b0f645d.svg"),
                                alt: "",
                                srcset: "",
                              },
                              null,
                              8,
                              Qe
                            ),
                            [[c, "dark" == a(st)]]
                          ),
                          d(
                            h(
                              "img",
                              {
                                class: "beta",
                                src: a("/static/svg/5c0ee2b4.svg"),
                                alt: "",
                                srcset: "",
                              },
                              null,
                              8,
                              Je
                            ),
                            [[c, "light" == a(st)]]
                          ),
                        ]),
                        h("div", Ze, [
                          f(
                            T,
                            {
                              to: "/trade",
                              class: "kiloex-menu kiloex-menu-trade",
                            },
                            {
                              default: L(() => [l(g(t.$t("menu.trade")), 1)]),
                              _: 1,
                            }
                          ),
                          dt.value
                            ? (e(),
                              w(
                                k,
                                {
                                  key: 0,
                                  text: t.$t("guide.contest"),
                                  position: "bottom",
                                  visible:
                                    !(null == (n = a(C))
                                      ? void 0
                                      : n.backup1) &&
                                    a(it) > 800 &&
                                    St.value &&
                                    (null == (s = a(F)) ? void 0 : s.account) &&
                                    2 == a(o) &&
                                    "/contest" != a(v).path,
                                },
                                {
                                  container: L(() => [
                                    f(
                                      T,
                                      {
                                        to: "/contest",
                                        class:
                                          "kiloex-menu kiloex-menu-contest",
                                      },
                                      {
                                        default: L(() => [
                                          f(S, {
                                            type: "icon-HOT",
                                            size: 20,
                                            class: "icon hot",
                                          }),
                                          l(" " + g(t.$t("menu.contest")), 1),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                  ]),
                                  footer: L(() => [
                                    h(
                                      "div",
                                      {
                                        onClick: i[0] || (i[0] = (t) => ct(3)),
                                      },
                                      g(t.$t("guide.ok")),
                                      1
                                    ),
                                    h(
                                      "div",
                                      { onClick: ft },
                                      g(t.$t("guide.to")),
                                      1
                                    ),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["text", "visible"]
                              ))
                            : (e(),
                              w(
                                T,
                                {
                                  key: 1,
                                  to: "/contest",
                                  class: "kiloex-menu kiloex-menu-leaderboard",
                                },
                                {
                                  default: L(() => [
                                    l(g(t.$t("menu.leaderboard")), 1),
                                  ]),
                                  _: 1,
                                }
                              )),
                          f(
                            T,
                            {
                              to: "/trade/vault",
                              class: "kiloex-menu kiloex-menu-vault",
                            },
                            {
                              default: L(() => [l(g(t.$t("menu.earn")), 1)]),
                              _: 1,
                            }
                          ),
                          f(
                            T,
                            {
                              to: "/referrals",
                              class: "kiloex-menu kiloex-menu-referral",
                            },
                            {
                              default: L(() => [
                                l(g(t.$t("menu.referrals")), 1),
                              ]),
                              _: 1,
                            }
                          ),
                          f(
                            T,
                            {
                              to: "/bridge",
                              class: "kiloex-menu kiloex-menu-bridge",
                            },
                            {
                              default: L(() => [l(g(t.$t("menu.bridge")), 1)]),
                              _: 1,
                            }
                          ),
                          f(
                            k,
                            {
                              text: t.$t("guide.newUser"),
                              position: "bottom",
                              visible:
                                lt.value &&
                                !(null == (u = a(C)) ? void 0 : u.backup1) &&
                                a(it) > 800 &&
                                St.value &&
                                (null == (p = a(F)) ? void 0 : p.account) &&
                                1 == a(o),
                            },
                       /*     {
                              container: L(() => [
                                h(
                                  "a",
                                  {
                                    onClick: gt,
                                    class: "klioex-menu kiloex-menu-tutorial",
                                  },
                                  g(t.$t("menu.Tutorial")),
                                  1
                                ),
                              ]),
                              footer: L(() => [
                                h(
                                  "div",
                                  { onClick: i[1] || (i[1] = (t) => ct()) },
                                  g(t.$t("guide.ok")),
                                  1
                                ),
                                h(
                                  "div",
                                  { onClick: ht },
                                  g(t.$t("guide.view")),
                                  1
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ["text", "visible"]*/
                          ),
                          h("a", tr, g(t.$t("menu.Community")), 1),
                          f(
                            R,
                            {
                              trigger: "hover",
                              "unmount-on-close": !1,
                              position: "bl",
                            },
                            {
                              content: L(() => [
                                h("div", er, [
                                  f(
                                    T,
                                    {
                                      to: "/stats",
                                      class: "kiloex-menu kiloex-menu-stats",
                                    },
                                    {
                                      default: L(() => [
                                        f(S, {
                                          type: "icon-stats",
                                          size: 20,
                                          class: "icon",
                                        }),
                                        l(" " + g(t.$t("menu.stats")), 1),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                  h("a", rr, [
                                    f(S, {
                                      type: "icon-documentation",
                                      size: 20,
                                      class: "icon",
                                    }),
                                    l(" " + g(t.$t("menu.documentation")), 1),
                                  ]),
                                  h("a", ir, [
                                    f(S, {
                                      type: "icon-feedback",
                                      size: 20,
                                      class: "icon",
                                    }),
                                    l(" " + g(t.$t("menu.feedback")), 1),
                                  ]),
                                ]),
                              ]),
                              default: L(() => [
                                h("a", null, [
                                  l(g(t.$t("menu.more")) + " ", 1),
                                  f(D, { style: { "margin-left": "4px" } }),
                                ]),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                      ]),
                      h("div", nr, [
                        f(
                          B,
                          { size: [12, 0] },
                          {
                            default: L(() => {
                              var t;
                              return [
                                f(_),
                                (null == (t = a(ot)) ? void 0 : t.mainnet)
                                  ? y("", !0)
                                  : (e(),
                                    w(
                                      I,
                                      {
                                        key: 0,
                                        class:
                                          "kilo-language-btn font-weight-normal",
                                        onClick: Et,
                                        loading: yt.value,
                                      },
                                      {
                                        default: L(() => [
                                          l(g("Mint") + " " + g(a(rt)), 1),
                                        ]),
                                        _: 1,
                                      },
                                      8,
                                      ["loading"]
                                    )),
                                f(P),
                                f(M),
                                f(N),
                              ];
                            }),
                            _: 1,
                          }
                        ),
                      ]),
                    ]),
                  ]),
                  h("div", ar, [
                    h("div", sr, [
                      h("div", or, [
                        h("a", lr, [
                          d(
                            h(
                              "img",
                              { src: a(Ke), alt: "", srcset: "" },
                              null,
                              8,
                              ur
                            ),
                            [[c, "dark" == a(st)]]
                          ),
                          d(
                            h(
                              "img",
                              { src: a(Ve), alt: "", srcset: "" },
                              null,
                              8,
                              dr
                            ),
                            [[c, "light" == a(st)]]
                          ),
                        ]),
                      ]),
                      h("div", cr, [
                        f(P),
                        f(M),
                        f(N, { from: "header" }),
                        b.value
                          ? y("", !0)
                          : (e(),
                            w(S, {
                              key: 0,
                              type: "icon-caidan",
                              size: 20,
                              class: "icon",
                              onClick: i[2] || (i[2] = (t) => (b.value = !0)),
                            })),
                        b.value
                          ? (e(),
                            w(U, {
                              key: 1,
                              size: "20",
                              onClick: i[3] || (i[3] = (t) => (b.value = !1)),
                            }))
                          : y("", !0),
                      ]),
                    ]),
                    b.value
                      ? (e(),
                        r("div", hr, [
                          h("div", fr, [
                            f(N, { callback: mt }),
                            (null == (m = a(ot)) ? void 0 : m.mainnet)
                              ? (e(),
                                w(
                                  I,
                                  {
                                    key: 0,
                                    class:
                                      "kilo-language-btn font-weight-normal",
                                    onClick: Et,
                                    loading: yt.value,
                                  },
                                  {
                                    default: L(() => [
                                      l(g("Mint") + " " + g(a(rt)), 1),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ["loading"]
                                ))
                              : y("", !0),
                          ]),
                          h("div", gr, [
                            f(
                              V,
                              {
                                style: { width: "100%", padding: 0 },
                                theme: "dark",
                                accordion: "",
                                onMenuItemClick: mt,
                              },
                              {
                                default: L(() => [
                                  f(j, null, {
                                    default: L(() => [
                                      f(
                                        T,
                                        {
                                          to: "/trade",
                                          class:
                                            "kiloex-menu kiloex-menu-trade",
                                        },
                                        {
                                          default: L(() => [
                                            l(g(t.$t("menu.trade")), 1),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                      f(G, {
                                        class: "menu-item-custom-icon",
                                        size: "16",
                                      }),
                                    ]),
                                    _: 1,
                                  }),
                                  f(j, null, {
                                    default: L(() => [
                                      dt.value
                                        ? (e(),
                                          w(
                                            T,
                                            {
                                              key: 0,
                                              to: "/contest",
                                              class:
                                                "kiloex-menu kiloex-menu-contest",
                                            },
                                            {
                                              default: L(() => [
                                                l(
                                                  g(t.$t("menu.contest")) + " ",
                                                  1
                                                ),
                                                f(S, {
                                                  type: "icon-HOT",
                                                  size: 20,
                                                  class: "icon hot",
                                                }),
                                              ]),
                                              _: 1,
                                            }
                                          ))
                                        : (e(),
                                          w(
                                            T,
                                            {
                                              key: 1,
                                              to: "/contest",
                                              class:
                                                "kiloex-menu kiloex-menu-leaderboard",
                                            },
                                            {
                                              default: L(() => [
                                                l(
                                                  g(t.$t("menu.leaderboard")),
                                                  1
                                                ),
                                              ]),
                                              _: 1,
                                            }
                                          )),
                                      f(G, {
                                        class: "menu-item-custom-icon",
                                        size: "16",
                                      }),
                                    ]),
                                    _: 1,
                                  }),
                                  f(j, null, {
                                    default: L(() => [
                                      f(
                                        T,
                                        {
                                          to: "/trade/vault",
                                          class:
                                            "kiloex-menu kiloex-menu-vault",
                                        },
                                        {
                                          default: L(() => [
                                            l(g(t.$t("menu.earn")), 1),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                      f(G, {
                                        class: "menu-item-custom-icon",
                                        size: "16",
                                      }),
                                    ]),
                                    _: 1,
                                  }),
                                  f(j, null, {
                                    default: L(() => [
                                      f(
                                        T,
                                        {
                                          to: "/referrals",
                                          class:
                                            "kiloex-menu kiloex-menu-referral",
                                        },
                                        {
                                          default: L(() => [
                                            l(g(t.$t("menu.referrals")), 1),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                      f(G, {
                                        class: "menu-item-custom-icon",
                                        size: "16",
                                      }),
                                    ]),
                                    _: 1,
                                  }),
                                  f(j, null, {
                                    default: L(() => [
                                      f(
                                        T,
                                        {
                                          to: "/bridge",
                                          class:
                                            "kiloex-menu kiloex-menu-bridge",
                                        },
                                        {
                                          default: L(() => [
                                            l(g(t.$t("menu.bridge")), 1),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                      f(G, {
                                        class: "menu-item-custom-icon",
                                        size: "16",
                                      }),
                                    ]),
                                    _: 1,
                                  }),
                                  f(j, null, {
                                    default: L(() => [
                                      h(
                                        "a",
                                        {
                                          onClick: gt,
                                          class:
                                            "klioex-menu kiloex-menu-tutorial",
                                        },
                                        g(t.$t("menu.Tutorial")),
                                        1
                                      ),
                                      f(G, {
                                        class: "menu-item-custom-icon",
                                        size: "16",
                                      }),
                                    ]),
                                    _: 1,
                                  }),
                                  f(j, null, {
                                    default: L(() => [
                                      h("a", vr, g(t.$t("menu.Community")), 1),
                                      f(G, {
                                        class: "menu-item-custom-icon",
                                        size: "16",
                                      }),
                                    ]),
                                    _: 1,
                                  }),
                                  f(K, null, {
                                    title: L(() => [
                                      h("a", pr, g(t.$t("menu.more")), 1),
                                    ]),
                                    "expand-icon-down": L(() => [
                                      f(D, { size: "16" }),
                                    ]),
                                    default: L(() => [
                                      f(j, null, {
                                        default: L(() => [
                                          f(
                                            T,
                                            {
                                              to: "/stats",
                                              class:
                                                "kiloex-menu kiloex-menu-stats",
                                            },
                                            {
                                              default: L(() => [
                                                l(g(t.$t("menu.stats")), 1),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          f(G, {
                                            class: "menu-item-custom-icon",
                                            size: "16",
                                          }),
                                        ]),
                                        _: 1,
                                      }),
                                      f(j, null, {
                                        default: L(() => [
                                          h(
                                            "a",
                                            mr,
                                            g(t.$t("menu.documentation")),
                                            1
                                          ),
                                          f(G, {
                                            class: "menu-item-custom-icon",
                                            size: "16",
                                          }),
                                        ]),
                                        _: 1,
                                      }),
                                      f(j, null, {
                                        default: L(() => [
                                          h(
                                            "a",
                                            yr,
                                            g(t.$t("menu.feedback")),
                                            1
                                          ),
                                          f(G, {
                                            class: "menu-item-custom-icon",
                                            size: "16",
                                          }),
                                        ]),
                                        _: 1,
                                      }),
                                    ]),
                                    _: 1,
                                  }),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          h("footer", null, [
                            f(_),
                            f(
                              B,
                              { size: [16, 0] },
                              {
                                default: L(() => [
                                  f(H, { class: "mobile-fadeback" }),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                        ]))
                      : y("", !0),
                  ]),
                  f(W, { onIsLoaded: bt }),
                ]),
                E.value
                  ? (e(),
                    r(
                      "div",
                      { key: 0, class: "video-modal", onKeyup: x(pt, ["esc"]) },
                      [
                        d(
                          (e(),
                          r("div", Tr, [
                            h("div", { class: "close", onClick: vt }, [
                              f(U, { size: "25" }),
                            ]),
                            f(a(Fe), {
                              poster:
                                "#",
                              control: !0,
                              autoPlay: !0,
                              width: "100%",
                              height: "auto",
                              loop: !0,
                              src: "#",
                              controlBtns:
                                "['audioTrack', 'quality', 'speedRate', 'volume', 'setting', 'pageFullScreen', 'fullScreen']",
                              id: "VideoRef",
                            }),
                          ])),
                          [[a(je), pt]]
                        ),
                      ],
                      40,
                      Er
                    ))
                  : y("", !0),
              ],
              64
            )
          );
        }
      );
    },
  },
  br = F(Sr, [["__scopeId", "data-v-737d1398"]]);
export { br as default };
