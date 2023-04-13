/*! For license information please see bundle.js.LICENSE.txt */
!(function (e, r) {
  if ('object' == typeof exports && 'object' == typeof module)
    module.exports = r(require('react'), require('react-dom'));
  else if ('function' == typeof define && define.amd) define(['react', 'react-dom'], r);
  else {
    var o = 'object' == typeof exports ? r(require('react'), require('react-dom')) : r(e[void 0], e[void 0]);
    for (var t in o) ('object' == typeof exports ? exports : e)[t] = o[t];
  }
})(self, (e, r) =>
  (() => {
    var o = {
        4184: (e, r) => {
          var o;
          !(function () {
            'use strict';
            var t = {}.hasOwnProperty;
            function n() {
              for (var e = [], r = 0; r < arguments.length; r++) {
                var o = arguments[r];
                if (o) {
                  var a = typeof o;
                  if ('string' === a || 'number' === a) e.push(o);
                  else if (Array.isArray(o)) {
                    if (o.length) {
                      var i = n.apply(null, o);
                      i && e.push(i);
                    }
                  } else if ('object' === a) {
                    if (o.toString !== Object.prototype.toString && !o.toString.toString().includes('[native code]')) {
                      e.push(o.toString());
                      continue;
                    }
                    for (var l in o) t.call(o, l) && o[l] && e.push(l);
                  }
                }
              }
              return e.join(' ');
            }
            e.exports
              ? ((n.default = n), (e.exports = n))
              : void 0 ===
                  (o = function () {
                    return n;
                  }.apply(r, [])) || (e.exports = o);
          })();
        },
        6882: (e, r) => {
          'use strict';
          function o(e) {
            return (
              (o =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                        ? 'symbol'
                        : typeof e;
                    }),
              o(e)
            );
          }
          function t(e) {
            return (
              (function (e) {
                if (Array.isArray(e)) return n(e);
              })(e) ||
              (function (e) {
                if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
              })(e) ||
              (function (e, r) {
                if (e) {
                  if ('string' == typeof e) return n(e, r);
                  var o = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    'Object' === o && e.constructor && (o = e.constructor.name),
                    'Map' === o || 'Set' === o
                      ? Array.from(o)
                      : 'Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                      ? n(e, r)
                      : void 0
                  );
                }
              })(e) ||
              (function () {
                throw new TypeError(
                  'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                );
              })()
            );
          }
          function n(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var o = 0, t = new Array(r); o < r; o++) t[o] = e[o];
            return t;
          }
          function a(e) {
            return e.filter(function (r, o) {
              return e.lastIndexOf(r) === o;
            });
          }
          r.Z = function e(r) {
            for (var n = 0, i = arguments.length <= 1 ? 0 : arguments.length - 1; n < i; ++n) {
              var l = n + 1 < 1 || arguments.length <= n + 1 ? void 0 : arguments[n + 1];
              for (var s in l) {
                var c = l[s],
                  d = r[s];
                if (d && c) {
                  if (Array.isArray(d)) {
                    r[s] = a(d.concat(c));
                    continue;
                  }
                  if (Array.isArray(c)) {
                    r[s] = a([d].concat(t(c)));
                    continue;
                  }
                  if ('object' === o(c)) {
                    r[s] = e({}, d, c);
                    continue;
                  }
                }
                r[s] = c;
              }
            }
            return r;
          };
        },
        7591: (e, r) => {
          'use strict';
          r.Z = function (e) {
            if (n.hasOwnProperty(e)) return n[e];
            var r = e.replace(o, a).replace(t, 'ms');
            return (n[e] = r), r;
          };
          var o = /-([a-z])/g,
            t = /^Ms/g,
            n = {};
          function a(e) {
            return e[1].toUpperCase();
          }
        },
        1554: (e, r, o) => {
          'use strict';
          Object.defineProperty(r, '__esModule', { value: !0 }),
            (r.default = function (e, r) {
              return (0, n.default)(e) + ':' + r;
            });
          var t,
            n = (t = o(6238)) && t.__esModule ? t : { default: t };
        },
        2614: (e, r, o) => {
          'use strict';
          r.Z = function (e) {
            var r = '';
            for (var o in e) {
              var t = e[o];
              ('string' != typeof t && 'number' != typeof t) || (r && (r += ';'), (r += (0, n.default)(o, t)));
            }
            return r;
          };
          var t,
            n = (t = o(1554)) && t.__esModule ? t : { default: t };
        },
        6238: (e, r, o) => {
          'use strict';
          Object.defineProperty(r, '__esModule', { value: !0 }),
            (r.default = function (e) {
              return (0, n.default)(e);
            });
          var t,
            n = (t = o(5477)) && t.__esModule ? t : { default: t };
        },
        5816: (e, r, o) => {
          'use strict';
          r.Z = function (e, r) {
            return r.join(';' + (0, n.default)(e) + ':');
          };
          var t,
            n = (t = o(6238)) && t.__esModule ? t : { default: t };
        },
        3297: (e, r) => {
          'use strict';
          r.Z = function (e, r) {
            for (var o = 0, t = e.length; o < t; ++o) r(e[o], o, t, e);
          };
        },
        4340: (e, r) => {
          'use strict';
          r.Z = function (e, r, o) {
            for (var t = 0, n = e.length; t < n; ++t) o = r(o, e[t], t, n, e);
            return o;
          };
        },
        4460: (e, r) => {
          'use strict';
          r.Z = function (e, r) {
            for (var o in e) r(e[o], o, e);
          };
        },
        9721: (e, r) => {
          'use strict';
          r.Z = function (e, r, o) {
            for (var t in e) o = r(o, e[t], t, e);
            return o;
          };
        },
        5477: (e, r, o) => {
          'use strict';
          o.r(r), o.d(r, { default: () => l });
          var t = /[A-Z]/g,
            n = /^ms-/,
            a = {};
          function i(e) {
            return '-' + e.toLowerCase();
          }
          const l = function (e) {
            if (a.hasOwnProperty(e)) return a[e];
            var r = e.replace(t, i);
            return (a[e] = n.test(r) ? '-' + r : r);
          };
        },
        7798: (e) => {
          'use strict';
          e.exports = function (e) {
            return null != e && 'object' == typeof e && !1 === Array.isArray(e);
          };
        },
        8552: (e, r, o) => {
          var t = o(852)(o(5639), 'DataView');
          e.exports = t;
        },
        1989: (e, r, o) => {
          var t = o(1789),
            n = o(401),
            a = o(7667),
            i = o(1327),
            l = o(1866);
          function s(e) {
            var r = -1,
              o = null == e ? 0 : e.length;
            for (this.clear(); ++r < o; ) {
              var t = e[r];
              this.set(t[0], t[1]);
            }
          }
          (s.prototype.clear = t),
            (s.prototype.delete = n),
            (s.prototype.get = a),
            (s.prototype.has = i),
            (s.prototype.set = l),
            (e.exports = s);
        },
        8407: (e, r, o) => {
          var t = o(7040),
            n = o(4125),
            a = o(2117),
            i = o(7518),
            l = o(4705);
          function s(e) {
            var r = -1,
              o = null == e ? 0 : e.length;
            for (this.clear(); ++r < o; ) {
              var t = e[r];
              this.set(t[0], t[1]);
            }
          }
          (s.prototype.clear = t),
            (s.prototype.delete = n),
            (s.prototype.get = a),
            (s.prototype.has = i),
            (s.prototype.set = l),
            (e.exports = s);
        },
        7071: (e, r, o) => {
          var t = o(852)(o(5639), 'Map');
          e.exports = t;
        },
        3369: (e, r, o) => {
          var t = o(4785),
            n = o(1285),
            a = o(6e3),
            i = o(9916),
            l = o(5265);
          function s(e) {
            var r = -1,
              o = null == e ? 0 : e.length;
            for (this.clear(); ++r < o; ) {
              var t = e[r];
              this.set(t[0], t[1]);
            }
          }
          (s.prototype.clear = t),
            (s.prototype.delete = n),
            (s.prototype.get = a),
            (s.prototype.has = i),
            (s.prototype.set = l),
            (e.exports = s);
        },
        3818: (e, r, o) => {
          var t = o(852)(o(5639), 'Promise');
          e.exports = t;
        },
        8525: (e, r, o) => {
          var t = o(852)(o(5639), 'Set');
          e.exports = t;
        },
        8668: (e, r, o) => {
          var t = o(3369),
            n = o(619),
            a = o(2385);
          function i(e) {
            var r = -1,
              o = null == e ? 0 : e.length;
            for (this.__data__ = new t(); ++r < o; ) this.add(e[r]);
          }
          (i.prototype.add = i.prototype.push = n), (i.prototype.has = a), (e.exports = i);
        },
        6384: (e, r, o) => {
          var t = o(8407),
            n = o(7465),
            a = o(3779),
            i = o(7599),
            l = o(4758),
            s = o(4309);
          function c(e) {
            var r = (this.__data__ = new t(e));
            this.size = r.size;
          }
          (c.prototype.clear = n),
            (c.prototype.delete = a),
            (c.prototype.get = i),
            (c.prototype.has = l),
            (c.prototype.set = s),
            (e.exports = c);
        },
        2705: (e, r, o) => {
          var t = o(5639).Symbol;
          e.exports = t;
        },
        1149: (e, r, o) => {
          var t = o(5639).Uint8Array;
          e.exports = t;
        },
        577: (e, r, o) => {
          var t = o(852)(o(5639), 'WeakMap');
          e.exports = t;
        },
        6874: (e) => {
          e.exports = function (e, r, o) {
            switch (o.length) {
              case 0:
                return e.call(r);
              case 1:
                return e.call(r, o[0]);
              case 2:
                return e.call(r, o[0], o[1]);
              case 3:
                return e.call(r, o[0], o[1], o[2]);
            }
            return e.apply(r, o);
          };
        },
        7412: (e) => {
          e.exports = function (e, r) {
            for (var o = -1, t = null == e ? 0 : e.length; ++o < t && !1 !== r(e[o], o, e); );
            return e;
          };
        },
        4963: (e) => {
          e.exports = function (e, r) {
            for (var o = -1, t = null == e ? 0 : e.length, n = 0, a = []; ++o < t; ) {
              var i = e[o];
              r(i, o, e) && (a[n++] = i);
            }
            return a;
          };
        },
        7443: (e, r, o) => {
          var t = o(2118);
          e.exports = function (e, r) {
            return !(null == e || !e.length) && t(e, r, 0) > -1;
          };
        },
        1196: (e) => {
          e.exports = function (e, r, o) {
            for (var t = -1, n = null == e ? 0 : e.length; ++t < n; ) if (o(r, e[t])) return !0;
            return !1;
          };
        },
        4636: (e, r, o) => {
          var t = o(2545),
            n = o(5694),
            a = o(1469),
            i = o(4144),
            l = o(5776),
            s = o(6719),
            c = Object.prototype.hasOwnProperty;
          e.exports = function (e, r) {
            var o = a(e),
              d = !o && n(e),
              u = !o && !d && i(e),
              f = !o && !d && !u && s(e),
              g = o || d || u || f,
              p = g ? t(e.length, String) : [],
              b = p.length;
            for (var m in e)
              (!r && !c.call(e, m)) ||
                (g &&
                  ('length' == m ||
                    (u && ('offset' == m || 'parent' == m)) ||
                    (f && ('buffer' == m || 'byteLength' == m || 'byteOffset' == m)) ||
                    l(m, b))) ||
                p.push(m);
            return p;
          };
        },
        9932: (e) => {
          e.exports = function (e, r) {
            for (var o = -1, t = null == e ? 0 : e.length, n = Array(t); ++o < t; ) n[o] = r(e[o], o, e);
            return n;
          };
        },
        2488: (e) => {
          e.exports = function (e, r) {
            for (var o = -1, t = r.length, n = e.length; ++o < t; ) e[n + o] = r[o];
            return e;
          };
        },
        2908: (e) => {
          e.exports = function (e, r) {
            for (var o = -1, t = null == e ? 0 : e.length; ++o < t; ) if (r(e[o], o, e)) return !0;
            return !1;
          };
        },
        4286: (e) => {
          e.exports = function (e) {
            return e.split('');
          };
        },
        6556: (e, r, o) => {
          var t = o(9465),
            n = o(7813);
          e.exports = function (e, r, o) {
            ((void 0 !== o && !n(e[r], o)) || (void 0 === o && !(r in e))) && t(e, r, o);
          };
        },
        4865: (e, r, o) => {
          var t = o(9465),
            n = o(7813),
            a = Object.prototype.hasOwnProperty;
          e.exports = function (e, r, o) {
            var i = e[r];
            (a.call(e, r) && n(i, o) && (void 0 !== o || r in e)) || t(e, r, o);
          };
        },
        8470: (e, r, o) => {
          var t = o(7813);
          e.exports = function (e, r) {
            for (var o = e.length; o--; ) if (t(e[o][0], r)) return o;
            return -1;
          };
        },
        9465: (e, r, o) => {
          var t = o(8777);
          e.exports = function (e, r, o) {
            '__proto__' == r && t ? t(e, r, { configurable: !0, enumerable: !0, value: o, writable: !0 }) : (e[r] = o);
          };
        },
        3118: (e, r, o) => {
          var t = o(3218),
            n = Object.create,
            a = (function () {
              function e() {}
              return function (r) {
                if (!t(r)) return {};
                if (n) return n(r);
                e.prototype = r;
                var o = new e();
                return (e.prototype = void 0), o;
              };
            })();
          e.exports = a;
        },
        731: (e, r, o) => {
          var t = o(8668),
            n = o(7443),
            a = o(1196),
            i = o(9932),
            l = o(1717),
            s = o(4757);
          e.exports = function (e, r, o, c) {
            var d = -1,
              u = n,
              f = !0,
              g = e.length,
              p = [],
              b = r.length;
            if (!g) return p;
            o && (r = i(r, l(o))), c ? ((u = a), (f = !1)) : r.length >= 200 && ((u = s), (f = !1), (r = new t(r)));
            e: for (; ++d < g; ) {
              var m = e[d],
                h = null == o ? m : o(m);
              if (((m = c || 0 !== m ? m : 0), f && h == h)) {
                for (var v = b; v--; ) if (r[v] === h) continue e;
                p.push(m);
              } else u(r, h, c) || p.push(m);
            }
            return p;
          };
        },
        9881: (e, r, o) => {
          var t = o(7816),
            n = o(9291)(t);
          e.exports = n;
        },
        6029: (e, r, o) => {
          var t = o(3448);
          e.exports = function (e, r, o) {
            for (var n = -1, a = e.length; ++n < a; ) {
              var i = e[n],
                l = r(i);
              if (null != l && (void 0 === s ? l == l && !t(l) : o(l, s)))
                var s = l,
                  c = i;
            }
            return c;
          };
        },
        760: (e, r, o) => {
          var t = o(9881);
          e.exports = function (e, r) {
            var o = [];
            return (
              t(e, function (e, t, n) {
                r(e, t, n) && o.push(e);
              }),
              o
            );
          };
        },
        1848: (e) => {
          e.exports = function (e, r, o, t) {
            for (var n = e.length, a = o + (t ? 1 : -1); t ? a-- : ++a < n; ) if (r(e[a], a, e)) return a;
            return -1;
          };
        },
        1078: (e, r, o) => {
          var t = o(2488),
            n = o(7285);
          e.exports = function e(r, o, a, i, l) {
            var s = -1,
              c = r.length;
            for (a || (a = n), l || (l = []); ++s < c; ) {
              var d = r[s];
              o > 0 && a(d) ? (o > 1 ? e(d, o - 1, a, i, l) : t(l, d)) : i || (l[l.length] = d);
            }
            return l;
          };
        },
        8483: (e, r, o) => {
          var t = o(5063)();
          e.exports = t;
        },
        7816: (e, r, o) => {
          var t = o(8483),
            n = o(3674);
          e.exports = function (e, r) {
            return e && t(e, r, n);
          };
        },
        7786: (e, r, o) => {
          var t = o(1811),
            n = o(327);
          e.exports = function (e, r) {
            for (var o = 0, a = (r = t(r, e)).length; null != e && o < a; ) e = e[n(r[o++])];
            return o && o == a ? e : void 0;
          };
        },
        8866: (e, r, o) => {
          var t = o(2488),
            n = o(1469);
          e.exports = function (e, r, o) {
            var a = r(e);
            return n(e) ? a : t(a, o(e));
          };
        },
        4239: (e, r, o) => {
          var t = o(2705),
            n = o(9607),
            a = o(2333),
            i = t ? t.toStringTag : void 0;
          e.exports = function (e) {
            return null == e
              ? void 0 === e
                ? '[object Undefined]'
                : '[object Null]'
              : i && i in Object(e)
              ? n(e)
              : a(e);
          };
        },
        8565: (e) => {
          var r = Object.prototype.hasOwnProperty;
          e.exports = function (e, o) {
            return null != e && r.call(e, o);
          };
        },
        13: (e) => {
          e.exports = function (e, r) {
            return null != e && r in Object(e);
          };
        },
        5600: (e) => {
          var r = Math.max,
            o = Math.min;
          e.exports = function (e, t, n) {
            return e >= o(t, n) && e < r(t, n);
          };
        },
        2118: (e, r, o) => {
          var t = o(1848),
            n = o(2722),
            a = o(2351);
          e.exports = function (e, r, o) {
            return r == r ? a(e, r, o) : t(e, n, o);
          };
        },
        3783: (e, r, o) => {
          var t = o(6874),
            n = o(1811),
            a = o(928),
            i = o(292),
            l = o(327);
          e.exports = function (e, r, o) {
            r = n(r, e);
            var s = null == (e = i(e, r)) ? e : e[l(a(r))];
            return null == s ? void 0 : t(s, e, o);
          };
        },
        9454: (e, r, o) => {
          var t = o(4239),
            n = o(7005);
          e.exports = function (e) {
            return n(e) && '[object Arguments]' == t(e);
          };
        },
        939: (e, r, o) => {
          var t = o(2492),
            n = o(7005);
          e.exports = function e(r, o, a, i, l) {
            return r === o || (null == r || null == o || (!n(r) && !n(o)) ? r != r && o != o : t(r, o, a, i, e, l));
          };
        },
        2492: (e, r, o) => {
          var t = o(6384),
            n = o(7114),
            a = o(8351),
            i = o(6096),
            l = o(4160),
            s = o(1469),
            c = o(4144),
            d = o(6719),
            u = '[object Arguments]',
            f = '[object Array]',
            g = '[object Object]',
            p = Object.prototype.hasOwnProperty;
          e.exports = function (e, r, o, b, m, h) {
            var v = s(e),
              y = s(r),
              C = v ? f : l(e),
              k = y ? f : l(r),
              w = (C = C == u ? g : C) == g,
              x = (k = k == u ? g : k) == g,
              S = C == k;
            if (S && c(e)) {
              if (!c(r)) return !1;
              (v = !0), (w = !1);
            }
            if (S && !w) return h || (h = new t()), v || d(e) ? n(e, r, o, b, m, h) : a(e, r, C, o, b, m, h);
            if (!(1 & o)) {
              var B = w && p.call(e, '__wrapped__'),
                E = x && p.call(r, '__wrapped__');
              if (B || E) {
                var O = B ? e.value() : e,
                  F = E ? r.value() : r;
                return h || (h = new t()), m(O, F, o, b, h);
              }
            }
            return !!S && (h || (h = new t()), i(e, r, o, b, m, h));
          };
        },
        2958: (e, r, o) => {
          var t = o(6384),
            n = o(939);
          e.exports = function (e, r, o, a) {
            var i = o.length,
              l = i,
              s = !a;
            if (null == e) return !l;
            for (e = Object(e); i--; ) {
              var c = o[i];
              if (s && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1;
            }
            for (; ++i < l; ) {
              var d = (c = o[i])[0],
                u = e[d],
                f = c[1];
              if (s && c[2]) {
                if (void 0 === u && !(d in e)) return !1;
              } else {
                var g = new t();
                if (a) var p = a(u, f, d, e, r, g);
                if (!(void 0 === p ? n(f, u, 3, a, g) : p)) return !1;
              }
            }
            return !0;
          };
        },
        2722: (e) => {
          e.exports = function (e) {
            return e != e;
          };
        },
        8458: (e, r, o) => {
          var t = o(3560),
            n = o(5346),
            a = o(3218),
            i = o(346),
            l = /^\[object .+?Constructor\]$/,
            s = Function.prototype,
            c = Object.prototype,
            d = s.toString,
            u = c.hasOwnProperty,
            f = RegExp(
              '^' +
                d
                  .call(u)
                  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
                '$'
            );
          e.exports = function (e) {
            return !(!a(e) || n(e)) && (t(e) ? f : l).test(i(e));
          };
        },
        8749: (e, r, o) => {
          var t = o(4239),
            n = o(1780),
            a = o(7005),
            i = {};
          (i['[object Float32Array]'] =
            i['[object Float64Array]'] =
            i['[object Int8Array]'] =
            i['[object Int16Array]'] =
            i['[object Int32Array]'] =
            i['[object Uint8Array]'] =
            i['[object Uint8ClampedArray]'] =
            i['[object Uint16Array]'] =
            i['[object Uint32Array]'] =
              !0),
            (i['[object Arguments]'] =
              i['[object Array]'] =
              i['[object ArrayBuffer]'] =
              i['[object Boolean]'] =
              i['[object DataView]'] =
              i['[object Date]'] =
              i['[object Error]'] =
              i['[object Function]'] =
              i['[object Map]'] =
              i['[object Number]'] =
              i['[object Object]'] =
              i['[object RegExp]'] =
              i['[object Set]'] =
              i['[object String]'] =
              i['[object WeakMap]'] =
                !1),
            (e.exports = function (e) {
              return a(e) && n(e.length) && !!i[t(e)];
            });
        },
        7206: (e, r, o) => {
          var t = o(1573),
            n = o(6432),
            a = o(6557),
            i = o(1469),
            l = o(9601);
          e.exports = function (e) {
            return 'function' == typeof e
              ? e
              : null == e
              ? a
              : 'object' == typeof e
              ? i(e)
                ? n(e[0], e[1])
                : t(e)
              : l(e);
          };
        },
        280: (e, r, o) => {
          var t = o(5726),
            n = o(6916),
            a = Object.prototype.hasOwnProperty;
          e.exports = function (e) {
            if (!t(e)) return n(e);
            var r = [];
            for (var o in Object(e)) a.call(e, o) && 'constructor' != o && r.push(o);
            return r;
          };
        },
        313: (e, r, o) => {
          var t = o(3218),
            n = o(5726),
            a = o(3498),
            i = Object.prototype.hasOwnProperty;
          e.exports = function (e) {
            if (!t(e)) return a(e);
            var r = n(e),
              o = [];
            for (var l in e) ('constructor' != l || (!r && i.call(e, l))) && o.push(l);
            return o;
          };
        },
        433: (e) => {
          e.exports = function (e, r) {
            return e < r;
          };
        },
        9199: (e, r, o) => {
          var t = o(9881),
            n = o(8612);
          e.exports = function (e, r) {
            var o = -1,
              a = n(e) ? Array(e.length) : [];
            return (
              t(e, function (e, t, n) {
                a[++o] = r(e, t, n);
              }),
              a
            );
          };
        },
        1573: (e, r, o) => {
          var t = o(2958),
            n = o(1499),
            a = o(2634);
          e.exports = function (e) {
            var r = n(e);
            return 1 == r.length && r[0][2]
              ? a(r[0][0], r[0][1])
              : function (o) {
                  return o === e || t(o, e, r);
                };
          };
        },
        6432: (e, r, o) => {
          var t = o(939),
            n = o(7361),
            a = o(9095),
            i = o(5403),
            l = o(9162),
            s = o(2634),
            c = o(327);
          e.exports = function (e, r) {
            return i(e) && l(r)
              ? s(c(e), r)
              : function (o) {
                  var i = n(o, e);
                  return void 0 === i && i === r ? a(o, e) : t(r, i, 3);
                };
          };
        },
        2980: (e, r, o) => {
          var t = o(6384),
            n = o(6556),
            a = o(8483),
            i = o(9783),
            l = o(3218),
            s = o(1704),
            c = o(6390);
          e.exports = function e(r, o, d, u, f) {
            r !== o &&
              a(
                o,
                function (a, s) {
                  if ((f || (f = new t()), l(a))) i(r, o, s, d, e, u, f);
                  else {
                    var g = u ? u(c(r, s), a, s + '', r, o, f) : void 0;
                    void 0 === g && (g = a), n(r, s, g);
                  }
                },
                s
              );
          };
        },
        9783: (e, r, o) => {
          var t = o(6556),
            n = o(4626),
            a = o(7133),
            i = o(278),
            l = o(8517),
            s = o(5694),
            c = o(1469),
            d = o(9246),
            u = o(4144),
            f = o(3560),
            g = o(3218),
            p = o(8630),
            b = o(6719),
            m = o(6390),
            h = o(3678);
          e.exports = function (e, r, o, v, y, C, k) {
            var w = m(e, o),
              x = m(r, o),
              S = k.get(x);
            if (S) t(e, o, S);
            else {
              var B = C ? C(w, x, o + '', e, r, k) : void 0,
                E = void 0 === B;
              if (E) {
                var O = c(x),
                  F = !O && u(x),
                  A = !O && !F && b(x);
                (B = x),
                  O || F || A
                    ? c(w)
                      ? (B = w)
                      : d(w)
                      ? (B = i(w))
                      : F
                      ? ((E = !1), (B = n(x, !0)))
                      : A
                      ? ((E = !1), (B = a(x, !0)))
                      : (B = [])
                    : p(x) || s(x)
                    ? ((B = w), s(w) ? (B = h(w)) : (g(w) && !f(w)) || (B = l(x)))
                    : (E = !1);
              }
              E && (k.set(x, B), y(B, x, v, C, k), k.delete(x)), t(e, o, B);
            }
          };
        },
        9556: (e, r, o) => {
          var t = o(9932),
            n = o(7786),
            a = o(7206),
            i = o(9199),
            l = o(1131),
            s = o(1717),
            c = o(5022),
            d = o(6557),
            u = o(1469);
          e.exports = function (e, r, o) {
            r = r.length
              ? t(r, function (e) {
                  return u(e)
                    ? function (r) {
                        return n(r, 1 === e.length ? e[0] : e);
                      }
                    : e;
                })
              : [d];
            var f = -1;
            r = t(r, s(a));
            var g = i(e, function (e, o, n) {
              return {
                criteria: t(r, function (r) {
                  return r(e);
                }),
                index: ++f,
                value: e
              };
            });
            return l(g, function (e, r) {
              return c(e, r, o);
            });
          };
        },
        5970: (e, r, o) => {
          var t = o(3012),
            n = o(9095);
          e.exports = function (e, r) {
            return t(e, r, function (r, o) {
              return n(e, o);
            });
          };
        },
        3012: (e, r, o) => {
          var t = o(7786),
            n = o(611),
            a = o(1811);
          e.exports = function (e, r, o) {
            for (var i = -1, l = r.length, s = {}; ++i < l; ) {
              var c = r[i],
                d = t(e, c);
              o(d, c) && n(s, a(c, e), d);
            }
            return s;
          };
        },
        371: (e) => {
          e.exports = function (e) {
            return function (r) {
              return null == r ? void 0 : r[e];
            };
          };
        },
        9152: (e, r, o) => {
          var t = o(7786);
          e.exports = function (e) {
            return function (r) {
              return t(r, e);
            };
          };
        },
        5976: (e, r, o) => {
          var t = o(6557),
            n = o(5357),
            a = o(61);
          e.exports = function (e, r) {
            return a(n(e, r, t), e + '');
          };
        },
        611: (e, r, o) => {
          var t = o(4865),
            n = o(1811),
            a = o(5776),
            i = o(3218),
            l = o(327);
          e.exports = function (e, r, o, s) {
            if (!i(e)) return e;
            for (var c = -1, d = (r = n(r, e)).length, u = d - 1, f = e; null != f && ++c < d; ) {
              var g = l(r[c]),
                p = o;
              if ('__proto__' === g || 'constructor' === g || 'prototype' === g) return e;
              if (c != u) {
                var b = f[g];
                void 0 === (p = s ? s(b, g, f) : void 0) && (p = i(b) ? b : a(r[c + 1]) ? [] : {});
              }
              t(f, g, p), (f = f[g]);
            }
            return e;
          };
        },
        6560: (e, r, o) => {
          var t = o(5703),
            n = o(8777),
            a = o(6557),
            i = n
              ? function (e, r) {
                  return n(e, 'toString', { configurable: !0, enumerable: !1, value: t(r), writable: !0 });
                }
              : a;
          e.exports = i;
        },
        4259: (e) => {
          e.exports = function (e, r, o) {
            var t = -1,
              n = e.length;
            r < 0 && (r = -r > n ? 0 : n + r),
              (o = o > n ? n : o) < 0 && (o += n),
              (n = r > o ? 0 : (o - r) >>> 0),
              (r >>>= 0);
            for (var a = Array(n); ++t < n; ) a[t] = e[t + r];
            return a;
          };
        },
        5076: (e, r, o) => {
          var t = o(9881);
          e.exports = function (e, r) {
            var o;
            return (
              t(e, function (e, t, n) {
                return !(o = r(e, t, n));
              }),
              !!o
            );
          };
        },
        1131: (e) => {
          e.exports = function (e, r) {
            var o = e.length;
            for (e.sort(r); o--; ) e[o] = e[o].value;
            return e;
          };
        },
        7762: (e) => {
          e.exports = function (e, r) {
            for (var o, t = -1, n = e.length; ++t < n; ) {
              var a = r(e[t]);
              void 0 !== a && (o = void 0 === o ? a : o + a);
            }
            return o;
          };
        },
        2545: (e) => {
          e.exports = function (e, r) {
            for (var o = -1, t = Array(e); ++o < e; ) t[o] = r(o);
            return t;
          };
        },
        531: (e, r, o) => {
          var t = o(2705),
            n = o(9932),
            a = o(1469),
            i = o(3448),
            l = t ? t.prototype : void 0,
            s = l ? l.toString : void 0;
          e.exports = function e(r) {
            if ('string' == typeof r) return r;
            if (a(r)) return n(r, e) + '';
            if (i(r)) return s ? s.call(r) : '';
            var o = r + '';
            return '0' == o && 1 / r == -1 / 0 ? '-0' : o;
          };
        },
        7561: (e, r, o) => {
          var t = o(7990),
            n = /^\s+/;
          e.exports = function (e) {
            return e ? e.slice(0, t(e) + 1).replace(n, '') : e;
          };
        },
        1717: (e) => {
          e.exports = function (e) {
            return function (r) {
              return e(r);
            };
          };
        },
        5652: (e, r, o) => {
          var t = o(8668),
            n = o(7443),
            a = o(1196),
            i = o(4757),
            l = o(3593),
            s = o(1814);
          e.exports = function (e, r, o) {
            var c = -1,
              d = n,
              u = e.length,
              f = !0,
              g = [],
              p = g;
            if (o) (f = !1), (d = a);
            else if (u >= 200) {
              var b = r ? null : l(e);
              if (b) return s(b);
              (f = !1), (d = i), (p = new t());
            } else p = r ? [] : g;
            e: for (; ++c < u; ) {
              var m = e[c],
                h = r ? r(m) : m;
              if (((m = o || 0 !== m ? m : 0), f && h == h)) {
                for (var v = p.length; v--; ) if (p[v] === h) continue e;
                r && p.push(h), g.push(m);
              } else d(p, h, o) || (p !== g && p.push(h), g.push(m));
            }
            return g;
          };
        },
        7415: (e, r, o) => {
          var t = o(9932);
          e.exports = function (e, r) {
            return t(r, function (r) {
              return e[r];
            });
          };
        },
        4757: (e) => {
          e.exports = function (e, r) {
            return e.has(r);
          };
        },
        4290: (e, r, o) => {
          var t = o(6557);
          e.exports = function (e) {
            return 'function' == typeof e ? e : t;
          };
        },
        1811: (e, r, o) => {
          var t = o(1469),
            n = o(5403),
            a = o(5514),
            i = o(9833);
          e.exports = function (e, r) {
            return t(e) ? e : n(e, r) ? [e] : a(i(e));
          };
        },
        180: (e, r, o) => {
          var t = o(4259);
          e.exports = function (e, r, o) {
            var n = e.length;
            return (o = void 0 === o ? n : o), !r && o >= n ? e : t(e, r, o);
          };
        },
        5512: (e, r, o) => {
          var t = o(2118);
          e.exports = function (e, r) {
            for (var o = e.length; o-- && t(r, e[o], 0) > -1; );
            return o;
          };
        },
        9817: (e, r, o) => {
          var t = o(2118);
          e.exports = function (e, r) {
            for (var o = -1, n = e.length; ++o < n && t(r, e[o], 0) > -1; );
            return o;
          };
        },
        4318: (e, r, o) => {
          var t = o(1149);
          e.exports = function (e) {
            var r = new e.constructor(e.byteLength);
            return new t(r).set(new t(e)), r;
          };
        },
        4626: (e, r, o) => {
          e = o.nmd(e);
          var t = o(5639),
            n = r && !r.nodeType && r,
            a = n && e && !e.nodeType && e,
            i = a && a.exports === n ? t.Buffer : void 0,
            l = i ? i.allocUnsafe : void 0;
          e.exports = function (e, r) {
            if (r) return e.slice();
            var o = e.length,
              t = l ? l(o) : new e.constructor(o);
            return e.copy(t), t;
          };
        },
        7133: (e, r, o) => {
          var t = o(4318);
          e.exports = function (e, r) {
            var o = r ? t(e.buffer) : e.buffer;
            return new e.constructor(o, e.byteOffset, e.length);
          };
        },
        6393: (e, r, o) => {
          var t = o(3448);
          e.exports = function (e, r) {
            if (e !== r) {
              var o = void 0 !== e,
                n = null === e,
                a = e == e,
                i = t(e),
                l = void 0 !== r,
                s = null === r,
                c = r == r,
                d = t(r);
              if ((!s && !d && !i && e > r) || (i && l && c && !s && !d) || (n && l && c) || (!o && c) || !a) return 1;
              if ((!n && !i && !d && e < r) || (d && o && a && !n && !i) || (s && o && a) || (!l && a) || !c) return -1;
            }
            return 0;
          };
        },
        5022: (e, r, o) => {
          var t = o(6393);
          e.exports = function (e, r, o) {
            for (var n = -1, a = e.criteria, i = r.criteria, l = a.length, s = o.length; ++n < l; ) {
              var c = t(a[n], i[n]);
              if (c) return n >= s ? c : c * ('desc' == o[n] ? -1 : 1);
            }
            return e.index - r.index;
          };
        },
        278: (e) => {
          e.exports = function (e, r) {
            var o = -1,
              t = e.length;
            for (r || (r = Array(t)); ++o < t; ) r[o] = e[o];
            return r;
          };
        },
        8363: (e, r, o) => {
          var t = o(4865),
            n = o(9465);
          e.exports = function (e, r, o, a) {
            var i = !o;
            o || (o = {});
            for (var l = -1, s = r.length; ++l < s; ) {
              var c = r[l],
                d = a ? a(o[c], e[c], c, o, e) : void 0;
              void 0 === d && (d = e[c]), i ? n(o, c, d) : t(o, c, d);
            }
            return o;
          };
        },
        4429: (e, r, o) => {
          var t = o(5639)['__core-js_shared__'];
          e.exports = t;
        },
        1463: (e, r, o) => {
          var t = o(5976),
            n = o(6612);
          e.exports = function (e) {
            return t(function (r, o) {
              var t = -1,
                a = o.length,
                i = a > 1 ? o[a - 1] : void 0,
                l = a > 2 ? o[2] : void 0;
              for (
                i = e.length > 3 && 'function' == typeof i ? (a--, i) : void 0,
                  l && n(o[0], o[1], l) && ((i = a < 3 ? void 0 : i), (a = 1)),
                  r = Object(r);
                ++t < a;

              ) {
                var s = o[t];
                s && e(r, s, t, i);
              }
              return r;
            });
          };
        },
        9291: (e, r, o) => {
          var t = o(8612);
          e.exports = function (e, r) {
            return function (o, n) {
              if (null == o) return o;
              if (!t(o)) return e(o, n);
              for (var a = o.length, i = r ? a : -1, l = Object(o); (r ? i-- : ++i < a) && !1 !== n(l[i], i, l); );
              return o;
            };
          };
        },
        5063: (e) => {
          e.exports = function (e) {
            return function (r, o, t) {
              for (var n = -1, a = Object(r), i = t(r), l = i.length; l--; ) {
                var s = i[e ? l : ++n];
                if (!1 === o(a[s], s, a)) break;
              }
              return r;
            };
          };
        },
        3593: (e, r, o) => {
          var t = o(8525),
            n = o(308),
            a = o(1814),
            i =
              t && 1 / a(new t([, -0]))[1] == 1 / 0
                ? function (e) {
                    return new t(e);
                  }
                : n;
          e.exports = i;
        },
        8777: (e, r, o) => {
          var t = o(852),
            n = (function () {
              try {
                var e = t(Object, 'defineProperty');
                return e({}, '', {}), e;
              } catch (e) {}
            })();
          e.exports = n;
        },
        7114: (e, r, o) => {
          var t = o(8668),
            n = o(2908),
            a = o(4757);
          e.exports = function (e, r, o, i, l, s) {
            var c = 1 & o,
              d = e.length,
              u = r.length;
            if (d != u && !(c && u > d)) return !1;
            var f = s.get(e),
              g = s.get(r);
            if (f && g) return f == r && g == e;
            var p = -1,
              b = !0,
              m = 2 & o ? new t() : void 0;
            for (s.set(e, r), s.set(r, e); ++p < d; ) {
              var h = e[p],
                v = r[p];
              if (i) var y = c ? i(v, h, p, r, e, s) : i(h, v, p, e, r, s);
              if (void 0 !== y) {
                if (y) continue;
                b = !1;
                break;
              }
              if (m) {
                if (
                  !n(r, function (e, r) {
                    if (!a(m, r) && (h === e || l(h, e, o, i, s))) return m.push(r);
                  })
                ) {
                  b = !1;
                  break;
                }
              } else if (h !== v && !l(h, v, o, i, s)) {
                b = !1;
                break;
              }
            }
            return s.delete(e), s.delete(r), b;
          };
        },
        8351: (e, r, o) => {
          var t = o(2705),
            n = o(1149),
            a = o(7813),
            i = o(7114),
            l = o(8776),
            s = o(1814),
            c = t ? t.prototype : void 0,
            d = c ? c.valueOf : void 0;
          e.exports = function (e, r, o, t, c, u, f) {
            switch (o) {
              case '[object DataView]':
                if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset) return !1;
                (e = e.buffer), (r = r.buffer);
              case '[object ArrayBuffer]':
                return !(e.byteLength != r.byteLength || !u(new n(e), new n(r)));
              case '[object Boolean]':
              case '[object Date]':
              case '[object Number]':
                return a(+e, +r);
              case '[object Error]':
                return e.name == r.name && e.message == r.message;
              case '[object RegExp]':
              case '[object String]':
                return e == r + '';
              case '[object Map]':
                var g = l;
              case '[object Set]':
                var p = 1 & t;
                if ((g || (g = s), e.size != r.size && !p)) return !1;
                var b = f.get(e);
                if (b) return b == r;
                (t |= 2), f.set(e, r);
                var m = i(g(e), g(r), t, c, u, f);
                return f.delete(e), m;
              case '[object Symbol]':
                if (d) return d.call(e) == d.call(r);
            }
            return !1;
          };
        },
        6096: (e, r, o) => {
          var t = o(8234),
            n = Object.prototype.hasOwnProperty;
          e.exports = function (e, r, o, a, i, l) {
            var s = 1 & o,
              c = t(e),
              d = c.length;
            if (d != t(r).length && !s) return !1;
            for (var u = d; u--; ) {
              var f = c[u];
              if (!(s ? f in r : n.call(r, f))) return !1;
            }
            var g = l.get(e),
              p = l.get(r);
            if (g && p) return g == r && p == e;
            var b = !0;
            l.set(e, r), l.set(r, e);
            for (var m = s; ++u < d; ) {
              var h = e[(f = c[u])],
                v = r[f];
              if (a) var y = s ? a(v, h, f, r, e, l) : a(h, v, f, e, r, l);
              if (!(void 0 === y ? h === v || i(h, v, o, a, l) : y)) {
                b = !1;
                break;
              }
              m || (m = 'constructor' == f);
            }
            if (b && !m) {
              var C = e.constructor,
                k = r.constructor;
              C == k ||
                !('constructor' in e) ||
                !('constructor' in r) ||
                ('function' == typeof C && C instanceof C && 'function' == typeof k && k instanceof k) ||
                (b = !1);
            }
            return l.delete(e), l.delete(r), b;
          };
        },
        9021: (e, r, o) => {
          var t = o(5564),
            n = o(5357),
            a = o(61);
          e.exports = function (e) {
            return a(n(e, void 0, t), e + '');
          };
        },
        1957: (e, r, o) => {
          var t = 'object' == typeof o.g && o.g && o.g.Object === Object && o.g;
          e.exports = t;
        },
        8234: (e, r, o) => {
          var t = o(8866),
            n = o(9551),
            a = o(3674);
          e.exports = function (e) {
            return t(e, a, n);
          };
        },
        5050: (e, r, o) => {
          var t = o(7019);
          e.exports = function (e, r) {
            var o = e.__data__;
            return t(r) ? o['string' == typeof r ? 'string' : 'hash'] : o.map;
          };
        },
        1499: (e, r, o) => {
          var t = o(9162),
            n = o(3674);
          e.exports = function (e) {
            for (var r = n(e), o = r.length; o--; ) {
              var a = r[o],
                i = e[a];
              r[o] = [a, i, t(i)];
            }
            return r;
          };
        },
        852: (e, r, o) => {
          var t = o(8458),
            n = o(7801);
          e.exports = function (e, r) {
            var o = n(e, r);
            return t(o) ? o : void 0;
          };
        },
        5924: (e, r, o) => {
          var t = o(5569)(Object.getPrototypeOf, Object);
          e.exports = t;
        },
        9607: (e, r, o) => {
          var t = o(2705),
            n = Object.prototype,
            a = n.hasOwnProperty,
            i = n.toString,
            l = t ? t.toStringTag : void 0;
          e.exports = function (e) {
            var r = a.call(e, l),
              o = e[l];
            try {
              e[l] = void 0;
              var t = !0;
            } catch (e) {}
            var n = i.call(e);
            return t && (r ? (e[l] = o) : delete e[l]), n;
          };
        },
        9551: (e, r, o) => {
          var t = o(4963),
            n = o(479),
            a = Object.prototype.propertyIsEnumerable,
            i = Object.getOwnPropertySymbols,
            l = i
              ? function (e) {
                  return null == e
                    ? []
                    : ((e = Object(e)),
                      t(i(e), function (r) {
                        return a.call(e, r);
                      }));
                }
              : n;
          e.exports = l;
        },
        4160: (e, r, o) => {
          var t = o(8552),
            n = o(7071),
            a = o(3818),
            i = o(8525),
            l = o(577),
            s = o(4239),
            c = o(346),
            d = '[object Map]',
            u = '[object Promise]',
            f = '[object Set]',
            g = '[object WeakMap]',
            p = '[object DataView]',
            b = c(t),
            m = c(n),
            h = c(a),
            v = c(i),
            y = c(l),
            C = s;
          ((t && C(new t(new ArrayBuffer(1))) != p) ||
            (n && C(new n()) != d) ||
            (a && C(a.resolve()) != u) ||
            (i && C(new i()) != f) ||
            (l && C(new l()) != g)) &&
            (C = function (e) {
              var r = s(e),
                o = '[object Object]' == r ? e.constructor : void 0,
                t = o ? c(o) : '';
              if (t)
                switch (t) {
                  case b:
                    return p;
                  case m:
                    return d;
                  case h:
                    return u;
                  case v:
                    return f;
                  case y:
                    return g;
                }
              return r;
            }),
            (e.exports = C);
        },
        7801: (e) => {
          e.exports = function (e, r) {
            return null == e ? void 0 : e[r];
          };
        },
        222: (e, r, o) => {
          var t = o(1811),
            n = o(5694),
            a = o(1469),
            i = o(5776),
            l = o(1780),
            s = o(327);
          e.exports = function (e, r, o) {
            for (var c = -1, d = (r = t(r, e)).length, u = !1; ++c < d; ) {
              var f = s(r[c]);
              if (!(u = null != e && o(e, f))) break;
              e = e[f];
            }
            return u || ++c != d ? u : !!(d = null == e ? 0 : e.length) && l(d) && i(f, d) && (a(e) || n(e));
          };
        },
        2689: (e) => {
          var r = RegExp('[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]');
          e.exports = function (e) {
            return r.test(e);
          };
        },
        1789: (e, r, o) => {
          var t = o(4536);
          e.exports = function () {
            (this.__data__ = t ? t(null) : {}), (this.size = 0);
          };
        },
        401: (e) => {
          e.exports = function (e) {
            var r = this.has(e) && delete this.__data__[e];
            return (this.size -= r ? 1 : 0), r;
          };
        },
        7667: (e, r, o) => {
          var t = o(4536),
            n = Object.prototype.hasOwnProperty;
          e.exports = function (e) {
            var r = this.__data__;
            if (t) {
              var o = r[e];
              return '__lodash_hash_undefined__' === o ? void 0 : o;
            }
            return n.call(r, e) ? r[e] : void 0;
          };
        },
        1327: (e, r, o) => {
          var t = o(4536),
            n = Object.prototype.hasOwnProperty;
          e.exports = function (e) {
            var r = this.__data__;
            return t ? void 0 !== r[e] : n.call(r, e);
          };
        },
        1866: (e, r, o) => {
          var t = o(4536);
          e.exports = function (e, r) {
            var o = this.__data__;
            return (
              (this.size += this.has(e) ? 0 : 1), (o[e] = t && void 0 === r ? '__lodash_hash_undefined__' : r), this
            );
          };
        },
        8517: (e, r, o) => {
          var t = o(3118),
            n = o(5924),
            a = o(5726);
          e.exports = function (e) {
            return 'function' != typeof e.constructor || a(e) ? {} : t(n(e));
          };
        },
        7285: (e, r, o) => {
          var t = o(2705),
            n = o(5694),
            a = o(1469),
            i = t ? t.isConcatSpreadable : void 0;
          e.exports = function (e) {
            return a(e) || n(e) || !!(i && e && e[i]);
          };
        },
        5776: (e) => {
          var r = /^(?:0|[1-9]\d*)$/;
          e.exports = function (e, o) {
            var t = typeof e;
            return (
              !!(o = null == o ? 9007199254740991 : o) &&
              ('number' == t || ('symbol' != t && r.test(e))) &&
              e > -1 &&
              e % 1 == 0 &&
              e < o
            );
          };
        },
        6612: (e, r, o) => {
          var t = o(7813),
            n = o(8612),
            a = o(5776),
            i = o(3218);
          e.exports = function (e, r, o) {
            if (!i(o)) return !1;
            var l = typeof r;
            return !!('number' == l ? n(o) && a(r, o.length) : 'string' == l && r in o) && t(o[r], e);
          };
        },
        5403: (e, r, o) => {
          var t = o(1469),
            n = o(3448),
            a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            i = /^\w*$/;
          e.exports = function (e, r) {
            if (t(e)) return !1;
            var o = typeof e;
            return (
              !('number' != o && 'symbol' != o && 'boolean' != o && null != e && !n(e)) ||
              i.test(e) ||
              !a.test(e) ||
              (null != r && e in Object(r))
            );
          };
        },
        7019: (e) => {
          e.exports = function (e) {
            var r = typeof e;
            return 'string' == r || 'number' == r || 'symbol' == r || 'boolean' == r ? '__proto__' !== e : null === e;
          };
        },
        5346: (e, r, o) => {
          var t,
            n = o(4429),
            a = (t = /[^.]+$/.exec((n && n.keys && n.keys.IE_PROTO) || '')) ? 'Symbol(src)_1.' + t : '';
          e.exports = function (e) {
            return !!a && a in e;
          };
        },
        5726: (e) => {
          var r = Object.prototype;
          e.exports = function (e) {
            var o = e && e.constructor;
            return e === (('function' == typeof o && o.prototype) || r);
          };
        },
        9162: (e, r, o) => {
          var t = o(3218);
          e.exports = function (e) {
            return e == e && !t(e);
          };
        },
        7040: (e) => {
          e.exports = function () {
            (this.__data__ = []), (this.size = 0);
          };
        },
        4125: (e, r, o) => {
          var t = o(8470),
            n = Array.prototype.splice;
          e.exports = function (e) {
            var r = this.__data__,
              o = t(r, e);
            return !(o < 0 || (o == r.length - 1 ? r.pop() : n.call(r, o, 1), --this.size, 0));
          };
        },
        2117: (e, r, o) => {
          var t = o(8470);
          e.exports = function (e) {
            var r = this.__data__,
              o = t(r, e);
            return o < 0 ? void 0 : r[o][1];
          };
        },
        7518: (e, r, o) => {
          var t = o(8470);
          e.exports = function (e) {
            return t(this.__data__, e) > -1;
          };
        },
        4705: (e, r, o) => {
          var t = o(8470);
          e.exports = function (e, r) {
            var o = this.__data__,
              n = t(o, e);
            return n < 0 ? (++this.size, o.push([e, r])) : (o[n][1] = r), this;
          };
        },
        4785: (e, r, o) => {
          var t = o(1989),
            n = o(8407),
            a = o(7071);
          e.exports = function () {
            (this.size = 0), (this.__data__ = { hash: new t(), map: new (a || n)(), string: new t() });
          };
        },
        1285: (e, r, o) => {
          var t = o(5050);
          e.exports = function (e) {
            var r = t(this, e).delete(e);
            return (this.size -= r ? 1 : 0), r;
          };
        },
        6e3: (e, r, o) => {
          var t = o(5050);
          e.exports = function (e) {
            return t(this, e).get(e);
          };
        },
        9916: (e, r, o) => {
          var t = o(5050);
          e.exports = function (e) {
            return t(this, e).has(e);
          };
        },
        5265: (e, r, o) => {
          var t = o(5050);
          e.exports = function (e, r) {
            var o = t(this, e),
              n = o.size;
            return o.set(e, r), (this.size += o.size == n ? 0 : 1), this;
          };
        },
        8776: (e) => {
          e.exports = function (e) {
            var r = -1,
              o = Array(e.size);
            return (
              e.forEach(function (e, t) {
                o[++r] = [t, e];
              }),
              o
            );
          };
        },
        2634: (e) => {
          e.exports = function (e, r) {
            return function (o) {
              return null != o && o[e] === r && (void 0 !== r || e in Object(o));
            };
          };
        },
        4523: (e, r, o) => {
          var t = o(8306);
          e.exports = function (e) {
            var r = t(e, function (e) {
                return 500 === o.size && o.clear(), e;
              }),
              o = r.cache;
            return r;
          };
        },
        4536: (e, r, o) => {
          var t = o(852)(Object, 'create');
          e.exports = t;
        },
        6916: (e, r, o) => {
          var t = o(5569)(Object.keys, Object);
          e.exports = t;
        },
        3498: (e) => {
          e.exports = function (e) {
            var r = [];
            if (null != e) for (var o in Object(e)) r.push(o);
            return r;
          };
        },
        1167: (e, r, o) => {
          e = o.nmd(e);
          var t = o(1957),
            n = r && !r.nodeType && r,
            a = n && e && !e.nodeType && e,
            i = a && a.exports === n && t.process,
            l = (function () {
              try {
                return (a && a.require && a.require('util').types) || (i && i.binding && i.binding('util'));
              } catch (e) {}
            })();
          e.exports = l;
        },
        2333: (e) => {
          var r = Object.prototype.toString;
          e.exports = function (e) {
            return r.call(e);
          };
        },
        5569: (e) => {
          e.exports = function (e, r) {
            return function (o) {
              return e(r(o));
            };
          };
        },
        5357: (e, r, o) => {
          var t = o(6874),
            n = Math.max;
          e.exports = function (e, r, o) {
            return (
              (r = n(void 0 === r ? e.length - 1 : r, 0)),
              function () {
                for (var a = arguments, i = -1, l = n(a.length - r, 0), s = Array(l); ++i < l; ) s[i] = a[r + i];
                i = -1;
                for (var c = Array(r + 1); ++i < r; ) c[i] = a[i];
                return (c[r] = o(s)), t(e, this, c);
              }
            );
          };
        },
        292: (e, r, o) => {
          var t = o(7786),
            n = o(4259);
          e.exports = function (e, r) {
            return r.length < 2 ? e : t(e, n(r, 0, -1));
          };
        },
        5639: (e, r, o) => {
          var t = o(1957),
            n = 'object' == typeof self && self && self.Object === Object && self,
            a = t || n || Function('return this')();
          e.exports = a;
        },
        6390: (e) => {
          e.exports = function (e, r) {
            if (('constructor' !== r || 'function' != typeof e[r]) && '__proto__' != r) return e[r];
          };
        },
        619: (e) => {
          e.exports = function (e) {
            return this.__data__.set(e, '__lodash_hash_undefined__'), this;
          };
        },
        2385: (e) => {
          e.exports = function (e) {
            return this.__data__.has(e);
          };
        },
        1814: (e) => {
          e.exports = function (e) {
            var r = -1,
              o = Array(e.size);
            return (
              e.forEach(function (e) {
                o[++r] = e;
              }),
              o
            );
          };
        },
        61: (e, r, o) => {
          var t = o(6560),
            n = o(1275)(t);
          e.exports = n;
        },
        1275: (e) => {
          var r = Date.now;
          e.exports = function (e) {
            var o = 0,
              t = 0;
            return function () {
              var n = r(),
                a = 16 - (n - t);
              if (((t = n), a > 0)) {
                if (++o >= 800) return arguments[0];
              } else o = 0;
              return e.apply(void 0, arguments);
            };
          };
        },
        7465: (e, r, o) => {
          var t = o(8407);
          e.exports = function () {
            (this.__data__ = new t()), (this.size = 0);
          };
        },
        3779: (e) => {
          e.exports = function (e) {
            var r = this.__data__,
              o = r.delete(e);
            return (this.size = r.size), o;
          };
        },
        7599: (e) => {
          e.exports = function (e) {
            return this.__data__.get(e);
          };
        },
        4758: (e) => {
          e.exports = function (e) {
            return this.__data__.has(e);
          };
        },
        4309: (e, r, o) => {
          var t = o(8407),
            n = o(7071),
            a = o(3369);
          e.exports = function (e, r) {
            var o = this.__data__;
            if (o instanceof t) {
              var i = o.__data__;
              if (!n || i.length < 199) return i.push([e, r]), (this.size = ++o.size), this;
              o = this.__data__ = new a(i);
            }
            return o.set(e, r), (this.size = o.size), this;
          };
        },
        2351: (e) => {
          e.exports = function (e, r, o) {
            for (var t = o - 1, n = e.length; ++t < n; ) if (e[t] === r) return t;
            return -1;
          };
        },
        3140: (e, r, o) => {
          var t = o(4286),
            n = o(2689),
            a = o(676);
          e.exports = function (e) {
            return n(e) ? a(e) : t(e);
          };
        },
        5514: (e, r, o) => {
          var t = o(4523),
            n = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            a = /\\(\\)?/g,
            i = t(function (e) {
              var r = [];
              return (
                46 === e.charCodeAt(0) && r.push(''),
                e.replace(n, function (e, o, t, n) {
                  r.push(t ? n.replace(a, '$1') : o || e);
                }),
                r
              );
            });
          e.exports = i;
        },
        327: (e, r, o) => {
          var t = o(3448);
          e.exports = function (e) {
            if ('string' == typeof e || t(e)) return e;
            var r = e + '';
            return '0' == r && 1 / e == -1 / 0 ? '-0' : r;
          };
        },
        346: (e) => {
          var r = Function.prototype.toString;
          e.exports = function (e) {
            if (null != e) {
              try {
                return r.call(e);
              } catch (e) {}
              try {
                return e + '';
              } catch (e) {}
            }
            return '';
          };
        },
        7990: (e) => {
          var r = /\s/;
          e.exports = function (e) {
            for (var o = e.length; o-- && r.test(e.charAt(o)); );
            return o;
          };
        },
        676: (e) => {
          var r = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
            o = '\\ud83c[\\udffb-\\udfff]',
            t = '[^\\ud800-\\udfff]',
            n = '(?:\\ud83c[\\udde6-\\uddff]){2}',
            a = '[\\ud800-\\udbff][\\udc00-\\udfff]',
            i = '(?:' + r + '|' + o + ')?',
            l = '[\\ufe0e\\ufe0f]?',
            s = l + i + '(?:\\u200d(?:' + [t, n, a].join('|') + ')' + l + i + ')*',
            c = '(?:' + [t + r + '?', r, n, a, '[\\ud800-\\udfff]'].join('|') + ')',
            d = RegExp(o + '(?=' + o + ')|' + c + s, 'g');
          e.exports = function (e) {
            return e.match(d) || [];
          };
        },
        9693: (e) => {
          e.exports = function (e) {
            for (var r = -1, o = null == e ? 0 : e.length, t = 0, n = []; ++r < o; ) {
              var a = e[r];
              a && (n[t++] = a);
            }
            return n;
          };
        },
        5703: (e) => {
          e.exports = function (e) {
            return function () {
              return e;
            };
          };
        },
        3279: (e, r, o) => {
          var t = o(3218),
            n = o(7771),
            a = o(4841),
            i = Math.max,
            l = Math.min;
          e.exports = function (e, r, o) {
            var s,
              c,
              d,
              u,
              f,
              g,
              p = 0,
              b = !1,
              m = !1,
              h = !0;
            if ('function' != typeof e) throw new TypeError('Expected a function');
            function v(r) {
              var o = s,
                t = c;
              return (s = c = void 0), (p = r), (u = e.apply(t, o));
            }
            function y(e) {
              return (p = e), (f = setTimeout(k, r)), b ? v(e) : u;
            }
            function C(e) {
              var o = e - g;
              return void 0 === g || o >= r || o < 0 || (m && e - p >= d);
            }
            function k() {
              var e = n();
              if (C(e)) return w(e);
              f = setTimeout(
                k,
                (function (e) {
                  var o = r - (e - g);
                  return m ? l(o, d - (e - p)) : o;
                })(e)
              );
            }
            function w(e) {
              return (f = void 0), h && s ? v(e) : ((s = c = void 0), u);
            }
            function x() {
              var e = n(),
                o = C(e);
              if (((s = arguments), (c = this), (g = e), o)) {
                if (void 0 === f) return y(g);
                if (m) return clearTimeout(f), (f = setTimeout(k, r)), v(g);
              }
              return void 0 === f && (f = setTimeout(k, r)), u;
            }
            return (
              (r = a(r) || 0),
              t(o) &&
                ((b = !!o.leading),
                (d = (m = 'maxWait' in o) ? i(a(o.maxWait) || 0, r) : d),
                (h = 'trailing' in o ? !!o.trailing : h)),
              (x.cancel = function () {
                void 0 !== f && clearTimeout(f), (p = 0), (s = g = c = f = void 0);
              }),
              (x.flush = function () {
                return void 0 === f ? u : w(n());
              }),
              x
            );
          };
        },
        1966: (e, r, o) => {
          var t = o(731),
            n = o(1078),
            a = o(5976),
            i = o(9246),
            l = a(function (e, r) {
              return i(e) ? t(e, n(r, 1, i, !0)) : [];
            });
          e.exports = l;
        },
        735: (e, r, o) => {
          var t = o(731),
            n = o(1078),
            a = o(7206),
            i = o(5976),
            l = o(9246),
            s = o(928),
            c = i(function (e, r) {
              var o = s(r);
              return l(o) && (o = void 0), l(e) ? t(e, n(r, 1, l, !0), a(o, 2)) : [];
            });
          e.exports = c;
        },
        7813: (e) => {
          e.exports = function (e, r) {
            return e === r || (e != e && r != r);
          };
        },
        3105: (e, r, o) => {
          var t = o(4963),
            n = o(760),
            a = o(7206),
            i = o(1469);
          e.exports = function (e, r) {
            return (i(e) ? t : n)(e, a(r, 3));
          };
        },
        998: (e, r, o) => {
          var t = o(1848),
            n = o(7206),
            a = o(554),
            i = Math.max;
          e.exports = function (e, r, o) {
            var l = null == e ? 0 : e.length;
            if (!l) return -1;
            var s = null == o ? 0 : a(o);
            return s < 0 && (s = i(l + s, 0)), t(e, n(r, 3), s);
          };
        },
        8804: (e, r, o) => {
          e.exports = o(1175);
        },
        5564: (e, r, o) => {
          var t = o(1078);
          e.exports = function (e) {
            return null != e && e.length ? t(e, 1) : [];
          };
        },
        4486: (e, r, o) => {
          var t = o(7412),
            n = o(9881),
            a = o(4290),
            i = o(1469);
          e.exports = function (e, r) {
            return (i(e) ? t : n)(e, a(r));
          };
        },
        7361: (e, r, o) => {
          var t = o(7786);
          e.exports = function (e, r, o) {
            var n = null == e ? void 0 : t(e, r);
            return void 0 === n ? o : n;
          };
        },
        8721: (e, r, o) => {
          var t = o(8565),
            n = o(222);
          e.exports = function (e, r) {
            return null != e && n(e, r, t);
          };
        },
        9095: (e, r, o) => {
          var t = o(13),
            n = o(222);
          e.exports = function (e, r) {
            return null != e && n(e, r, t);
          };
        },
        1175: (e) => {
          e.exports = function (e) {
            return e && e.length ? e[0] : void 0;
          };
        },
        6557: (e) => {
          e.exports = function (e) {
            return e;
          };
        },
        4174: (e, r, o) => {
          var t = o(5600),
            n = o(8601),
            a = o(4841);
          e.exports = function (e, r, o) {
            return (r = n(r)), void 0 === o ? ((o = r), (r = 0)) : (o = n(o)), (e = a(e)), t(e, r, o);
          };
        },
        5907: (e, r, o) => {
          var t = o(3783),
            n = o(5976)(t);
          e.exports = n;
        },
        5694: (e, r, o) => {
          var t = o(9454),
            n = o(7005),
            a = Object.prototype,
            i = a.hasOwnProperty,
            l = a.propertyIsEnumerable,
            s = t(
              (function () {
                return arguments;
              })()
            )
              ? t
              : function (e) {
                  return n(e) && i.call(e, 'callee') && !l.call(e, 'callee');
                };
          e.exports = s;
        },
        1469: (e) => {
          var r = Array.isArray;
          e.exports = r;
        },
        8612: (e, r, o) => {
          var t = o(3560),
            n = o(1780);
          e.exports = function (e) {
            return null != e && n(e.length) && !t(e);
          };
        },
        9246: (e, r, o) => {
          var t = o(8612),
            n = o(7005);
          e.exports = function (e) {
            return n(e) && t(e);
          };
        },
        1584: (e, r, o) => {
          var t = o(4239),
            n = o(7005);
          e.exports = function (e) {
            return !0 === e || !1 === e || (n(e) && '[object Boolean]' == t(e));
          };
        },
        4144: (e, r, o) => {
          e = o.nmd(e);
          var t = o(5639),
            n = o(5062),
            a = r && !r.nodeType && r,
            i = a && e && !e.nodeType && e,
            l = i && i.exports === a ? t.Buffer : void 0,
            s = (l ? l.isBuffer : void 0) || n;
          e.exports = s;
        },
        1609: (e, r, o) => {
          var t = o(280),
            n = o(4160),
            a = o(5694),
            i = o(1469),
            l = o(8612),
            s = o(4144),
            c = o(5726),
            d = o(6719),
            u = Object.prototype.hasOwnProperty;
          e.exports = function (e) {
            if (null == e) return !0;
            if (l(e) && (i(e) || 'string' == typeof e || 'function' == typeof e.splice || s(e) || d(e) || a(e)))
              return !e.length;
            var r = n(e);
            if ('[object Map]' == r || '[object Set]' == r) return !e.size;
            if (c(e)) return !t(e).length;
            for (var o in e) if (u.call(e, o)) return !1;
            return !0;
          };
        },
        8446: (e, r, o) => {
          var t = o(939);
          e.exports = function (e, r) {
            return t(e, r);
          };
        },
        3560: (e, r, o) => {
          var t = o(4239),
            n = o(3218);
          e.exports = function (e) {
            if (!n(e)) return !1;
            var r = t(e);
            return (
              '[object Function]' == r ||
              '[object GeneratorFunction]' == r ||
              '[object AsyncFunction]' == r ||
              '[object Proxy]' == r
            );
          };
        },
        1780: (e) => {
          e.exports = function (e) {
            return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
          };
        },
        4293: (e) => {
          e.exports = function (e) {
            return null == e;
          };
        },
        1763: (e, r, o) => {
          var t = o(4239),
            n = o(7005);
          e.exports = function (e) {
            return 'number' == typeof e || (n(e) && '[object Number]' == t(e));
          };
        },
        3218: (e) => {
          e.exports = function (e) {
            var r = typeof e;
            return null != e && ('object' == r || 'function' == r);
          };
        },
        7005: (e) => {
          e.exports = function (e) {
            return null != e && 'object' == typeof e;
          };
        },
        8630: (e, r, o) => {
          var t = o(4239),
            n = o(5924),
            a = o(7005),
            i = Function.prototype,
            l = Object.prototype,
            s = i.toString,
            c = l.hasOwnProperty,
            d = s.call(Object);
          e.exports = function (e) {
            if (!a(e) || '[object Object]' != t(e)) return !1;
            var r = n(e);
            if (null === r) return !0;
            var o = c.call(r, 'constructor') && r.constructor;
            return 'function' == typeof o && o instanceof o && s.call(o) == d;
          };
        },
        3448: (e, r, o) => {
          var t = o(4239),
            n = o(7005);
          e.exports = function (e) {
            return 'symbol' == typeof e || (n(e) && '[object Symbol]' == t(e));
          };
        },
        6719: (e, r, o) => {
          var t = o(8749),
            n = o(1717),
            a = o(1167),
            i = a && a.isTypedArray,
            l = i ? n(i) : t;
          e.exports = l;
        },
        3674: (e, r, o) => {
          var t = o(4636),
            n = o(280),
            a = o(8612);
          e.exports = function (e) {
            return a(e) ? t(e) : n(e);
          };
        },
        1704: (e, r, o) => {
          var t = o(4636),
            n = o(313),
            a = o(8612);
          e.exports = function (e) {
            return a(e) ? t(e, !0) : n(e);
          };
        },
        928: (e) => {
          e.exports = function (e) {
            var r = null == e ? 0 : e.length;
            return r ? e[r - 1] : void 0;
          };
        },
        5161: (e, r, o) => {
          var t = o(9932),
            n = o(7206),
            a = o(9199),
            i = o(1469);
          e.exports = function (e, r) {
            return (i(e) ? t : a)(e, n(r, 3));
          };
        },
        8306: (e, r, o) => {
          var t = o(3369);
          function n(e, r) {
            if ('function' != typeof e || (null != r && 'function' != typeof r))
              throw new TypeError('Expected a function');
            var o = function () {
              var t = arguments,
                n = r ? r.apply(this, t) : t[0],
                a = o.cache;
              if (a.has(n)) return a.get(n);
              var i = e.apply(this, t);
              return (o.cache = a.set(n, i) || a), i;
            };
            return (o.cache = new (n.Cache || t)()), o;
          }
          (n.Cache = t), (e.exports = n);
        },
        3857: (e, r, o) => {
          var t = o(2980),
            n = o(1463)(function (e, r, o) {
              t(e, r, o);
            });
          e.exports = n;
        },
        3632: (e, r, o) => {
          var t = o(6029),
            n = o(433),
            a = o(6557);
          e.exports = function (e) {
            return e && e.length ? t(e, a, n) : void 0;
          };
        },
        308: (e) => {
          e.exports = function () {};
        },
        7771: (e, r, o) => {
          var t = o(5639);
          e.exports = function () {
            return t.Date.now();
          };
        },
        8718: (e, r, o) => {
          var t = o(5970),
            n = o(9021)(function (e, r) {
              return null == e ? {} : t(e, r);
            });
          e.exports = n;
        },
        9601: (e, r, o) => {
          var t = o(371),
            n = o(9152),
            a = o(5403),
            i = o(327);
          e.exports = function (e) {
            return a(e) ? t(i(e)) : n(e);
          };
        },
        9704: (e, r, o) => {
          var t = o(2908),
            n = o(7206),
            a = o(5076),
            i = o(1469),
            l = o(6612);
          e.exports = function (e, r, o) {
            var s = i(e) ? t : a;
            return o && l(e, r, o) && (r = void 0), s(e, n(r, 3));
          };
        },
        9734: (e, r, o) => {
          var t = o(1078),
            n = o(9556),
            a = o(5976),
            i = o(6612),
            l = a(function (e, r) {
              if (null == e) return [];
              var o = r.length;
              return (
                o > 1 && i(e, r[0], r[1]) ? (r = []) : o > 2 && i(r[0], r[1], r[2]) && (r = [r[0]]), n(e, t(r, 1), [])
              );
            });
          e.exports = l;
        },
        479: (e) => {
          e.exports = function () {
            return [];
          };
        },
        5062: (e) => {
          e.exports = function () {
            return !1;
          };
        },
        2297: (e, r, o) => {
          var t = o(7762),
            n = o(6557);
          e.exports = function (e) {
            return e && e.length ? t(e, n) : 0;
          };
        },
        9572: (e, r, o) => {
          var t = o(4259),
            n = o(554);
          e.exports = function (e, r, o) {
            return e && e.length ? ((r = o || void 0 === r ? 1 : n(r)), t(e, 0, r < 0 ? 0 : r)) : [];
          };
        },
        8601: (e, r, o) => {
          var t = o(4841);
          e.exports = function (e) {
            return e
              ? Infinity === (e = t(e)) || e === -1 / 0
                ? 17976931348623157e292 * (e < 0 ? -1 : 1)
                : e == e
                ? e
                : 0
              : 0 === e
              ? e
              : 0;
          };
        },
        554: (e, r, o) => {
          var t = o(8601);
          e.exports = function (e) {
            var r = t(e),
              o = r % 1;
            return r == r ? (o ? r - o : r) : 0;
          };
        },
        4841: (e, r, o) => {
          var t = o(7561),
            n = o(3218),
            a = o(3448),
            i = /^[-+]0x[0-9a-f]+$/i,
            l = /^0b[01]+$/i,
            s = /^0o[0-7]+$/i,
            c = parseInt;
          e.exports = function (e) {
            if ('number' == typeof e) return e;
            if (a(e)) return NaN;
            if (n(e)) {
              var r = 'function' == typeof e.valueOf ? e.valueOf() : e;
              e = n(r) ? r + '' : r;
            }
            if ('string' != typeof e) return 0 === e ? e : +e;
            e = t(e);
            var o = l.test(e);
            return o || s.test(e) ? c(e.slice(2), o ? 2 : 8) : i.test(e) ? NaN : +e;
          };
        },
        3678: (e, r, o) => {
          var t = o(8363),
            n = o(1704);
          e.exports = function (e) {
            return t(e, n(e));
          };
        },
        9833: (e, r, o) => {
          var t = o(531);
          e.exports = function (e) {
            return null == e ? '' : t(e);
          };
        },
        2742: (e, r, o) => {
          var t = o(531),
            n = o(7561),
            a = o(180),
            i = o(5512),
            l = o(9817),
            s = o(3140),
            c = o(9833);
          e.exports = function (e, r, o) {
            if ((e = c(e)) && (o || void 0 === r)) return n(e);
            if (!e || !(r = t(r))) return e;
            var d = s(e),
              u = s(r),
              f = l(d, u),
              g = i(d, u) + 1;
            return a(d, f, g).join('');
          };
        },
        3386: (e, r, o) => {
          var t = o(1078),
            n = o(5976),
            a = o(5652),
            i = o(9246),
            l = n(function (e) {
              return a(t(e, 1, i, !0));
            });
          e.exports = l;
        },
        4908: (e, r, o) => {
          var t = o(5652);
          e.exports = function (e) {
            return e && e.length ? t(e) : [];
          };
        },
        3955: (e, r, o) => {
          var t = o(9833),
            n = 0;
          e.exports = function (e) {
            var r = ++n;
            return t(e) + r;
          };
        },
        2628: (e, r, o) => {
          var t = o(7415),
            n = o(3674);
          e.exports = function (e) {
            return null == e ? [] : t(e, n(e));
          };
        },
        2703: (e, r, o) => {
          'use strict';
          var t = o(414);
          function n() {}
          function a() {}
          (a.resetWarningCache = n),
            (e.exports = function () {
              function e(e, r, o, n, a, i) {
                if (i !== t) {
                  var l = new Error(
                    'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                  );
                  throw ((l.name = 'Invariant Violation'), l);
                }
              }
              function r() {
                return e;
              }
              e.isRequired = e;
              var o = {
                array: e,
                bigint: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: r,
                element: e,
                elementType: e,
                instanceOf: r,
                node: e,
                objectOf: r,
                oneOf: r,
                oneOfType: r,
                shape: r,
                exact: r,
                checkPropTypes: a,
                resetWarningCache: n
              };
              return (o.PropTypes = o), o;
            });
        },
        5697: (e, r, o) => {
          e.exports = o(2703)();
        },
        414: (e) => {
          'use strict';
          e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
        },
        9921: (e, r) => {
          'use strict';
          var o = 'function' == typeof Symbol && Symbol.for,
            t = o ? Symbol.for('react.element') : 60103,
            n = o ? Symbol.for('react.portal') : 60106,
            a = o ? Symbol.for('react.fragment') : 60107,
            i = o ? Symbol.for('react.strict_mode') : 60108,
            l = o ? Symbol.for('react.profiler') : 60114,
            s = o ? Symbol.for('react.provider') : 60109,
            c = o ? Symbol.for('react.context') : 60110,
            d = o ? Symbol.for('react.async_mode') : 60111,
            u = o ? Symbol.for('react.concurrent_mode') : 60111,
            f = o ? Symbol.for('react.forward_ref') : 60112,
            g = o ? Symbol.for('react.suspense') : 60113,
            p = o ? Symbol.for('react.suspense_list') : 60120,
            b = o ? Symbol.for('react.memo') : 60115,
            m = o ? Symbol.for('react.lazy') : 60116,
            h = o ? Symbol.for('react.block') : 60121,
            v = o ? Symbol.for('react.fundamental') : 60117,
            y = o ? Symbol.for('react.responder') : 60118,
            C = o ? Symbol.for('react.scope') : 60119;
          function k(e) {
            if ('object' == typeof e && null !== e) {
              var r = e.$$typeof;
              switch (r) {
                case t:
                  switch ((e = e.type)) {
                    case d:
                    case u:
                    case a:
                    case l:
                    case i:
                    case g:
                      return e;
                    default:
                      switch ((e = e && e.$$typeof)) {
                        case c:
                        case f:
                        case m:
                        case b:
                        case s:
                          return e;
                        default:
                          return r;
                      }
                  }
                case n:
                  return r;
              }
            }
          }
          (r.isForwardRef = function (e) {
            return k(e) === f;
          }),
            (r.isValidElementType = function (e) {
              return (
                'string' == typeof e ||
                'function' == typeof e ||
                e === a ||
                e === u ||
                e === l ||
                e === i ||
                e === g ||
                e === p ||
                ('object' == typeof e &&
                  null !== e &&
                  (e.$$typeof === m ||
                    e.$$typeof === b ||
                    e.$$typeof === s ||
                    e.$$typeof === c ||
                    e.$$typeof === f ||
                    e.$$typeof === v ||
                    e.$$typeof === y ||
                    e.$$typeof === C ||
                    e.$$typeof === h))
              );
            });
        },
        9864: (e, r, o) => {
          'use strict';
          e.exports = o(9921);
        },
        53: (e, r) => {
          'use strict';
          var o, t, n, a;
          if ('object' == typeof performance && 'function' == typeof performance.now) {
            var i = performance;
            r.unstable_now = function () {
              return i.now();
            };
          } else {
            var l = Date,
              s = l.now();
            r.unstable_now = function () {
              return l.now() - s;
            };
          }
          if ('undefined' == typeof window || 'function' != typeof MessageChannel) {
            var c = null,
              d = null,
              u = function () {
                if (null !== c)
                  try {
                    var e = r.unstable_now();
                    c(!0, e), (c = null);
                  } catch (e) {
                    throw (setTimeout(u, 0), e);
                  }
              };
            (o = function (e) {
              null !== c ? setTimeout(o, 0, e) : ((c = e), setTimeout(u, 0));
            }),
              (t = function (e, r) {
                d = setTimeout(e, r);
              }),
              (n = function () {
                clearTimeout(d);
              }),
              (r.unstable_shouldYield = function () {
                return !1;
              }),
              (a = r.unstable_forceFrameRate = function () {});
          } else {
            var f = window.setTimeout,
              g = window.clearTimeout;
            if ('undefined' != typeof console) {
              var p = window.cancelAnimationFrame;
              'function' != typeof window.requestAnimationFrame &&
                console.error(
                  "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
                ),
                'function' != typeof p &&
                  console.error(
                    "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
                  );
            }
            var b = !1,
              m = null,
              h = -1,
              v = 5,
              y = 0;
            (r.unstable_shouldYield = function () {
              return r.unstable_now() >= y;
            }),
              (a = function () {}),
              (r.unstable_forceFrameRate = function (e) {
                0 > e || 125 < e
                  ? console.error(
                      'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                    )
                  : (v = 0 < e ? Math.floor(1e3 / e) : 5);
              });
            var C = new MessageChannel(),
              k = C.port2;
            (C.port1.onmessage = function () {
              if (null !== m) {
                var e = r.unstable_now();
                y = e + v;
                try {
                  m(!0, e) ? k.postMessage(null) : ((b = !1), (m = null));
                } catch (e) {
                  throw (k.postMessage(null), e);
                }
              } else b = !1;
            }),
              (o = function (e) {
                (m = e), b || ((b = !0), k.postMessage(null));
              }),
              (t = function (e, o) {
                h = f(function () {
                  e(r.unstable_now());
                }, o);
              }),
              (n = function () {
                g(h), (h = -1);
              });
          }
          function w(e, r) {
            var o = e.length;
            e.push(r);
            e: for (;;) {
              var t = (o - 1) >>> 1,
                n = e[t];
              if (!(void 0 !== n && 0 < B(n, r))) break e;
              (e[t] = r), (e[o] = n), (o = t);
            }
          }
          function x(e) {
            return void 0 === (e = e[0]) ? null : e;
          }
          function S(e) {
            var r = e[0];
            if (void 0 !== r) {
              var o = e.pop();
              if (o !== r) {
                e[0] = o;
                e: for (var t = 0, n = e.length; t < n; ) {
                  var a = 2 * (t + 1) - 1,
                    i = e[a],
                    l = a + 1,
                    s = e[l];
                  if (void 0 !== i && 0 > B(i, o))
                    void 0 !== s && 0 > B(s, i) ? ((e[t] = s), (e[l] = o), (t = l)) : ((e[t] = i), (e[a] = o), (t = a));
                  else {
                    if (!(void 0 !== s && 0 > B(s, o))) break e;
                    (e[t] = s), (e[l] = o), (t = l);
                  }
                }
              }
              return r;
            }
            return null;
          }
          function B(e, r) {
            var o = e.sortIndex - r.sortIndex;
            return 0 !== o ? o : e.id - r.id;
          }
          var E = [],
            O = [],
            F = 1,
            A = null,
            P = 3,
            j = !1,
            I = !1,
            R = !1;
          function M(e) {
            for (var r = x(O); null !== r; ) {
              if (null === r.callback) S(O);
              else {
                if (!(r.startTime <= e)) break;
                S(O), (r.sortIndex = r.expirationTime), w(E, r);
              }
              r = x(O);
            }
          }
          function D(e) {
            if (((R = !1), M(e), !I))
              if (null !== x(E)) (I = !0), o(z);
              else {
                var r = x(O);
                null !== r && t(D, r.startTime - e);
              }
          }
          function z(e, o) {
            (I = !1), R && ((R = !1), n()), (j = !0);
            var a = P;
            try {
              for (M(o), A = x(E); null !== A && (!(A.expirationTime > o) || (e && !r.unstable_shouldYield())); ) {
                var i = A.callback;
                if ('function' == typeof i) {
                  (A.callback = null), (P = A.priorityLevel);
                  var l = i(A.expirationTime <= o);
                  (o = r.unstable_now()), 'function' == typeof l ? (A.callback = l) : A === x(E) && S(E), M(o);
                } else S(E);
                A = x(E);
              }
              if (null !== A) var s = !0;
              else {
                var c = x(O);
                null !== c && t(D, c.startTime - o), (s = !1);
              }
              return s;
            } finally {
              (A = null), (P = a), (j = !1);
            }
          }
          var _ = a;
          (r.unstable_IdlePriority = 5),
            (r.unstable_ImmediatePriority = 1),
            (r.unstable_LowPriority = 4),
            (r.unstable_NormalPriority = 3),
            (r.unstable_Profiling = null),
            (r.unstable_UserBlockingPriority = 2),
            (r.unstable_cancelCallback = function (e) {
              e.callback = null;
            }),
            (r.unstable_continueExecution = function () {
              I || j || ((I = !0), o(z));
            }),
            (r.unstable_getCurrentPriorityLevel = function () {
              return P;
            }),
            (r.unstable_getFirstCallbackNode = function () {
              return x(E);
            }),
            (r.unstable_next = function (e) {
              switch (P) {
                case 1:
                case 2:
                case 3:
                  var r = 3;
                  break;
                default:
                  r = P;
              }
              var o = P;
              P = r;
              try {
                return e();
              } finally {
                P = o;
              }
            }),
            (r.unstable_pauseExecution = function () {}),
            (r.unstable_requestPaint = _),
            (r.unstable_runWithPriority = function (e, r) {
              switch (e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                  break;
                default:
                  e = 3;
              }
              var o = P;
              P = e;
              try {
                return r();
              } finally {
                P = o;
              }
            }),
            (r.unstable_scheduleCallback = function (e, a, i) {
              var l = r.unstable_now();
              switch (
                ((i = 'object' == typeof i && null !== i && 'number' == typeof (i = i.delay) && 0 < i ? l + i : l), e)
              ) {
                case 1:
                  var s = -1;
                  break;
                case 2:
                  s = 250;
                  break;
                case 5:
                  s = 1073741823;
                  break;
                case 4:
                  s = 1e4;
                  break;
                default:
                  s = 5e3;
              }
              return (
                (e = {
                  id: F++,
                  callback: a,
                  priorityLevel: e,
                  startTime: i,
                  expirationTime: (s = i + s),
                  sortIndex: -1
                }),
                i > l
                  ? ((e.sortIndex = i), w(O, e), null === x(E) && e === x(O) && (R ? n() : (R = !0), t(D, i - l)))
                  : ((e.sortIndex = s), w(E, e), I || j || ((I = !0), o(z))),
                e
              );
            }),
            (r.unstable_wrapCallback = function (e) {
              var r = P;
              return function () {
                var o = P;
                P = r;
                try {
                  return e.apply(this, arguments);
                } finally {
                  P = o;
                }
              };
            });
        },
        3840: (e, r, o) => {
          'use strict';
          e.exports = o(53);
        },
        673: (e) => {
          e.exports = (function e(r) {
            'use strict';
            var o = /^\0+/g,
              t = /[\0\r\f]/g,
              n = /: */g,
              a = /zoo|gra/,
              i = /([,: ])(transform)/g,
              l = /,+\s*(?![^(]*[)])/g,
              s = / +\s*(?![^(]*[)])/g,
              c = / *[\0] */g,
              d = /,\r+?/g,
              u = /([\t\r\n ])*\f?&/g,
              f = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,
              g = /\W+/g,
              p = /@(k\w+)\s*(\S*)\s*/,
              b = /::(place)/g,
              m = /:(read-only)/g,
              h = /\s+(?=[{\];=:>])/g,
              v = /([[}=:>])\s+/g,
              y = /(\{[^{]+?);(?=\})/g,
              C = /\s{2,}/g,
              k = /([^\(])(:+) */g,
              w = /[svh]\w+-[tblr]{2}/,
              x = /\(\s*(.*)\s*\)/g,
              S = /([\s\S]*?);/g,
              B = /-self|flex-/g,
              E = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
              O = /stretch|:\s*\w+\-(?:conte|avail)/,
              F = /([^-])(image-set\()/,
              A = '-webkit-',
              P = '-moz-',
              j = '-ms-',
              I = 59,
              R = 125,
              M = 123,
              D = 40,
              z = 41,
              _ = 10,
              H = 13,
              T = 64,
              W = 32,
              L = 45,
              N = 42,
              V = 44,
              Z = 58,
              U = 47,
              G = 62,
              X = 43,
              Y = 126,
              K = 107,
              $ = 1,
              q = 1,
              J = 0,
              Q = 1,
              ee = 1,
              re = 1,
              oe = 0,
              te = 0,
              ne = 0,
              ae = [],
              ie = [],
              le = 0,
              se = null,
              ce = 0,
              de = 1,
              ue = '',
              fe = '',
              ge = '';
            function pe(e, r, n, a, i) {
              for (
                var l,
                  s,
                  d = 0,
                  u = 0,
                  f = 0,
                  g = 0,
                  h = 0,
                  v = 0,
                  y = 0,
                  C = 0,
                  w = 0,
                  S = 0,
                  B = 0,
                  E = 0,
                  O = 0,
                  F = 0,
                  P = 0,
                  j = 0,
                  T = 0,
                  oe = 0,
                  ie = 0,
                  se = n.length,
                  me = se - 1,
                  we = '',
                  xe = '',
                  Se = '',
                  Be = '',
                  Ee = '',
                  Oe = '';
                P < se;

              ) {
                if (
                  ((y = n.charCodeAt(P)),
                  P === me && u + g + f + d !== 0 && (0 !== u && (y = u === U ? _ : U), (g = f = d = 0), se++, me++),
                  u + g + f + d === 0)
                ) {
                  if (P === me && (j > 0 && (xe = xe.replace(t, '')), xe.trim().length > 0)) {
                    switch (y) {
                      case W:
                      case 9:
                      case I:
                      case H:
                      case _:
                        break;
                      default:
                        xe += n.charAt(P);
                    }
                    y = I;
                  }
                  if (1 === T)
                    switch (y) {
                      case M:
                      case R:
                      case I:
                      case 34:
                      case 39:
                      case D:
                      case z:
                      case V:
                        T = 0;
                      case 9:
                      case H:
                      case _:
                      case W:
                        break;
                      default:
                        for (T = 0, ie = P, h = y, P--, y = I; ie < se; )
                          switch (n.charCodeAt(ie++)) {
                            case _:
                            case H:
                            case I:
                              ++P, (y = h), (ie = se);
                              break;
                            case Z:
                              j > 0 && (++P, (y = h));
                            case M:
                              ie = se;
                          }
                    }
                  switch (y) {
                    case M:
                      for (h = (xe = xe.trim()).charCodeAt(0), B = 1, ie = ++P; P < se; ) {
                        switch ((y = n.charCodeAt(P))) {
                          case M:
                            B++;
                            break;
                          case R:
                            B--;
                            break;
                          case U:
                            switch ((v = n.charCodeAt(P + 1))) {
                              case N:
                              case U:
                                P = ke(v, P, me, n);
                            }
                            break;
                          case 91:
                            y++;
                          case D:
                            y++;
                          case 34:
                          case 39:
                            for (; P++ < me && n.charCodeAt(P) !== y; );
                        }
                        if (0 === B) break;
                        P++;
                      }
                      if (
                        ((Se = n.substring(ie, P)),
                        0 === h && (h = (xe = xe.replace(o, '').trim()).charCodeAt(0)),
                        64 === h)
                      ) {
                        switch ((j > 0 && (xe = xe.replace(t, '')), (v = xe.charCodeAt(1)))) {
                          case 100:
                          case 109:
                          case 115:
                          case L:
                            l = r;
                            break;
                          default:
                            l = ae;
                        }
                        if (
                          ((ie = (Se = pe(r, l, Se, v, i + 1)).length),
                          ne > 0 && 0 === ie && (ie = xe.length),
                          le > 0 &&
                            ((s = Ce(3, Se, (l = be(ae, xe, oe)), r, q, $, ie, v, i, a)),
                            (xe = l.join('')),
                            void 0 !== s && 0 === (ie = (Se = s.trim()).length) && ((v = 0), (Se = ''))),
                          ie > 0)
                        )
                          switch (v) {
                            case 115:
                              xe = xe.replace(x, ye);
                            case 100:
                            case 109:
                            case L:
                              Se = xe + '{' + Se + '}';
                              break;
                            case K:
                              (Se = (xe = xe.replace(p, '$1 $2' + (de > 0 ? ue : ''))) + '{' + Se + '}'),
                                (Se = 1 === ee || (2 === ee && ve('@' + Se, 3)) ? '@' + A + Se + '@' + Se : '@' + Se);
                              break;
                            default:
                              (Se = xe + Se), 112 === a && ((Be += Se), (Se = ''));
                          }
                        else Se = '';
                      } else Se = pe(r, be(r, xe, oe), Se, a, i + 1);
                      (Ee += Se),
                        (E = 0),
                        (T = 0),
                        (F = 0),
                        (j = 0),
                        (oe = 0),
                        (O = 0),
                        (xe = ''),
                        (Se = ''),
                        (y = n.charCodeAt(++P));
                      break;
                    case R:
                    case I:
                      if ((ie = (xe = (j > 0 ? xe.replace(t, '') : xe).trim()).length) > 1)
                        switch (
                          (0 === F &&
                            ((h = xe.charCodeAt(0)) === L || (h > 96 && h < 123)) &&
                            (ie = (xe = xe.replace(' ', ':')).length),
                          le > 0 &&
                            void 0 !== (s = Ce(1, xe, r, e, q, $, Be.length, a, i, a)) &&
                            0 === (ie = (xe = s.trim()).length) &&
                            (xe = '\0\0'),
                          (h = xe.charCodeAt(0)),
                          (v = xe.charCodeAt(1)),
                          h)
                        ) {
                          case 0:
                            break;
                          case 64:
                            if (105 === v || 99 === v) {
                              Oe += xe + n.charAt(P);
                              break;
                            }
                          default:
                            if (xe.charCodeAt(ie - 1) === Z) break;
                            Be += he(xe, h, v, xe.charCodeAt(2));
                        }
                      (E = 0), (T = 0), (F = 0), (j = 0), (oe = 0), (xe = ''), (y = n.charCodeAt(++P));
                  }
                }
                switch (y) {
                  case H:
                  case _:
                    if (u + g + f + d + te === 0)
                      switch (S) {
                        case z:
                        case 39:
                        case 34:
                        case 64:
                        case Y:
                        case 62:
                        case N:
                        case 43:
                        case U:
                        case L:
                        case Z:
                        case V:
                        case I:
                        case M:
                        case R:
                          break;
                        default:
                          F > 0 && (T = 1);
                      }
                    u === U ? (u = 0) : Q + E === 0 && a !== K && xe.length > 0 && ((j = 1), (xe += '\0')),
                      le * ce > 0 && Ce(0, xe, r, e, q, $, Be.length, a, i, a),
                      ($ = 1),
                      q++;
                    break;
                  case I:
                  case R:
                    if (u + g + f + d === 0) {
                      $++;
                      break;
                    }
                  default:
                    switch (($++, (we = n.charAt(P)), y)) {
                      case 9:
                      case W:
                        if (g + d + u === 0)
                          switch (C) {
                            case V:
                            case Z:
                            case 9:
                            case W:
                              we = '';
                              break;
                            default:
                              y !== W && (we = ' ');
                          }
                        break;
                      case 0:
                        we = '\\0';
                        break;
                      case 12:
                        we = '\\f';
                        break;
                      case 11:
                        we = '\\v';
                        break;
                      case 38:
                        g + u + d === 0 && Q > 0 && ((oe = 1), (j = 1), (we = '\f' + we));
                        break;
                      case 108:
                        if (g + u + d + J === 0 && F > 0)
                          switch (P - F) {
                            case 2:
                              112 === C && n.charCodeAt(P - 3) === Z && (J = C);
                            case 8:
                              111 === w && (J = w);
                          }
                        break;
                      case Z:
                        g + u + d === 0 && (F = P);
                        break;
                      case V:
                        u + f + g + d === 0 && ((j = 1), (we += '\r'));
                        break;
                      case 34:
                      case 39:
                        0 === u && (g = g === y ? 0 : 0 === g ? y : g);
                        break;
                      case 91:
                        g + u + f === 0 && d++;
                        break;
                      case 93:
                        g + u + f === 0 && d--;
                        break;
                      case z:
                        g + u + d === 0 && f--;
                        break;
                      case D:
                        g + u + d === 0 && (0 === E && (2 * C + 3 * w == 533 || ((B = 0), (E = 1))), f++);
                        break;
                      case 64:
                        u + f + g + d + F + O === 0 && (O = 1);
                        break;
                      case N:
                      case U:
                        if (g + d + f > 0) break;
                        switch (u) {
                          case 0:
                            switch (2 * y + 3 * n.charCodeAt(P + 1)) {
                              case 235:
                                u = U;
                                break;
                              case 220:
                                (ie = P), (u = N);
                            }
                            break;
                          case N:
                            y === U &&
                              C === N &&
                              ie + 2 !== P &&
                              (33 === n.charCodeAt(ie + 2) && (Be += n.substring(ie, P + 1)), (we = ''), (u = 0));
                        }
                    }
                    if (0 === u) {
                      if (Q + g + d + O === 0 && a !== K && y !== I)
                        switch (y) {
                          case V:
                          case Y:
                          case 62:
                          case 43:
                          case z:
                          case D:
                            if (0 === E) {
                              switch (C) {
                                case 9:
                                case W:
                                case _:
                                case H:
                                  we += '\0';
                                  break;
                                default:
                                  we = '\0' + we + (y === V ? '' : '\0');
                              }
                              j = 1;
                            } else
                              switch (y) {
                                case D:
                                  F + 7 === P && 108 === C && (F = 0), (E = ++B);
                                  break;
                                case z:
                                  0 == (E = --B) && ((j = 1), (we += '\0'));
                              }
                            break;
                          case 9:
                          case W:
                            switch (C) {
                              case 0:
                              case M:
                              case R:
                              case I:
                              case V:
                              case 12:
                              case 9:
                              case W:
                              case _:
                              case H:
                                break;
                              default:
                                0 === E && ((j = 1), (we += '\0'));
                            }
                        }
                      (xe += we), y !== W && 9 !== y && (S = y);
                    }
                }
                (w = C), (C = y), P++;
              }
              if (
                ((ie = Be.length),
                ne > 0 &&
                  0 === ie &&
                  0 === Ee.length &&
                  (0 === r[0].length) == 0 &&
                  (109 !== a || (1 === r.length && (Q > 0 ? fe : ge) === r[0])) &&
                  (ie = r.join(',').length + 2),
                ie > 0)
              ) {
                if (
                  ((l =
                    0 === Q && a !== K
                      ? (function (e) {
                          for (var r, o, n = 0, a = e.length, i = Array(a); n < a; ++n) {
                            for (var l = e[n].split(c), s = '', d = 0, u = 0, f = 0, g = 0, p = l.length; d < p; ++d)
                              if (!(0 === (u = (o = l[d]).length) && p > 1)) {
                                if (((f = s.charCodeAt(s.length - 1)), (g = o.charCodeAt(0)), (r = ''), 0 !== d))
                                  switch (f) {
                                    case N:
                                    case Y:
                                    case G:
                                    case X:
                                    case W:
                                    case D:
                                      break;
                                    default:
                                      r = ' ';
                                  }
                                switch (g) {
                                  case 38:
                                    o = r + fe;
                                  case Y:
                                  case G:
                                  case X:
                                  case W:
                                  case z:
                                  case D:
                                    break;
                                  case 91:
                                    o = r + o + fe;
                                    break;
                                  case Z:
                                    switch (2 * o.charCodeAt(1) + 3 * o.charCodeAt(2)) {
                                      case 530:
                                        if (re > 0) {
                                          o = r + o.substring(8, u - 1);
                                          break;
                                        }
                                      default:
                                        (d < 1 || l[d - 1].length < 1) && (o = r + fe + o);
                                    }
                                    break;
                                  case V:
                                    r = '';
                                  default:
                                    o = u > 1 && o.indexOf(':') > 0 ? r + o.replace(k, '$1' + fe + '$2') : r + o + fe;
                                }
                                s += o;
                              }
                            i[n] = s.replace(t, '').trim();
                          }
                          return i;
                        })(r)
                      : r),
                  le > 0 && void 0 !== (s = Ce(2, Be, l, e, q, $, ie, a, i, a)) && 0 === (Be = s).length)
                )
                  return Oe + Be + Ee;
                if (((Be = l.join(',') + '{' + Be + '}'), ee * J != 0)) {
                  switch ((2 !== ee || ve(Be, 2) || (J = 0), J)) {
                    case 111:
                      Be = Be.replace(m, ':-moz-$1') + Be;
                      break;
                    case 112:
                      Be =
                        Be.replace(b, '::-webkit-input-$1') +
                        Be.replace(b, '::-moz-$1') +
                        Be.replace(b, ':-ms-input-$1') +
                        Be;
                  }
                  J = 0;
                }
              }
              return Oe + Be + Ee;
            }
            function be(e, r, o) {
              var t = r.trim().split(d),
                n = t,
                a = t.length,
                i = e.length;
              switch (i) {
                case 0:
                case 1:
                  for (var l = 0, s = 0 === i ? '' : e[0] + ' '; l < a; ++l) n[l] = me(s, n[l], o, i).trim();
                  break;
                default:
                  l = 0;
                  var c = 0;
                  for (n = []; l < a; ++l) for (var u = 0; u < i; ++u) n[c++] = me(e[u] + ' ', t[l], o, i).trim();
              }
              return n;
            }
            function me(e, r, o, t) {
              var n = r,
                a = n.charCodeAt(0);
              switch ((a < 33 && (a = (n = n.trim()).charCodeAt(0)), a)) {
                case 38:
                  switch (Q + t) {
                    case 0:
                    case 1:
                      if (0 === e.trim().length) break;
                    default:
                      return n.replace(u, '$1' + e.trim());
                  }
                  break;
                case Z:
                  if (103 !== n.charCodeAt(1)) return e.trim() + n.replace(u, '$1' + e.trim());
                  if (re > 0 && Q > 0) return n.replace(f, '$1').replace(u, '$1' + ge);
                default:
                  if (o * Q > 0 && n.indexOf('\f') > 0)
                    return n.replace(u, (e.charCodeAt(0) === Z ? '' : '$1') + e.trim());
              }
              return e + n;
            }
            function he(e, r, o, t) {
              var c,
                d = 0,
                u = e + ';',
                f = 2 * r + 3 * o + 4 * t;
              if (944 === f)
                return (function (e) {
                  var r = e.length,
                    o = e.indexOf(':', 9) + 1,
                    t = e.substring(0, o).trim(),
                    n = e.substring(o, r - 1).trim();
                  switch (e.charCodeAt(9) * de) {
                    case 0:
                      break;
                    case L:
                      if (110 !== e.charCodeAt(10)) break;
                    default:
                      var a = n.split(((n = ''), l)),
                        i = 0;
                      for (o = 0, r = a.length; i < r; o = 0, ++i) {
                        for (var c = a[i], d = c.split(s); (c = d[o]); ) {
                          var u = c.charCodeAt(0);
                          if (
                            1 === de &&
                            ((u > T && u < 90) ||
                              (u > 96 && u < 123) ||
                              95 === u ||
                              (u === L && c.charCodeAt(1) !== L)) &&
                            isNaN(parseFloat(c)) + (-1 !== c.indexOf('(')) === 1
                          )
                            switch (c) {
                              case 'infinite':
                              case 'alternate':
                              case 'backwards':
                              case 'running':
                              case 'normal':
                              case 'forwards':
                              case 'both':
                              case 'none':
                              case 'linear':
                              case 'ease':
                              case 'ease-in':
                              case 'ease-out':
                              case 'ease-in-out':
                              case 'paused':
                              case 'reverse':
                              case 'alternate-reverse':
                              case 'inherit':
                              case 'initial':
                              case 'unset':
                              case 'step-start':
                              case 'step-end':
                                break;
                              default:
                                c += ue;
                            }
                          d[o++] = c;
                        }
                        n += (0 === i ? '' : ',') + d.join(' ');
                      }
                  }
                  return (n = t + n + ';'), 1 === ee || (2 === ee && ve(n, 1)) ? A + n + n : n;
                })(u);
              if (0 === ee || (2 === ee && !ve(u, 1))) return u;
              switch (f) {
                case 1015:
                  return 97 === u.charCodeAt(10) ? A + u + u : u;
                case 951:
                  return 116 === u.charCodeAt(3) ? A + u + u : u;
                case 963:
                  return 110 === u.charCodeAt(5) ? A + u + u : u;
                case 1009:
                  if (100 !== u.charCodeAt(4)) break;
                case 969:
                case 942:
                  return A + u + u;
                case 978:
                  return A + u + P + u + u;
                case 1019:
                case 983:
                  return A + u + P + u + j + u + u;
                case 883:
                  return u.charCodeAt(8) === L
                    ? A + u + u
                    : u.indexOf('image-set(', 11) > 0
                    ? u.replace(F, '$1-webkit-$2') + u
                    : u;
                case 932:
                  if (u.charCodeAt(4) === L)
                    switch (u.charCodeAt(5)) {
                      case 103:
                        return A + 'box-' + u.replace('-grow', '') + A + u + j + u.replace('grow', 'positive') + u;
                      case 115:
                        return A + u + j + u.replace('shrink', 'negative') + u;
                      case 98:
                        return A + u + j + u.replace('basis', 'preferred-size') + u;
                    }
                  return A + u + j + u + u;
                case 964:
                  return A + u + j + 'flex-' + u + u;
                case 1023:
                  if (99 !== u.charCodeAt(8)) break;
                  return (
                    (c = u.substring(u.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify')),
                    A + 'box-pack' + c + A + u + j + 'flex-pack' + c + u
                  );
                case 1005:
                  return a.test(u) ? u.replace(n, ':' + A) + u.replace(n, ':' + P) + u : u;
                case 1e3:
                  switch (((d = (c = u.substring(13).trim()).indexOf('-') + 1), c.charCodeAt(0) + c.charCodeAt(d))) {
                    case 226:
                      c = u.replace(w, 'tb');
                      break;
                    case 232:
                      c = u.replace(w, 'tb-rl');
                      break;
                    case 220:
                      c = u.replace(w, 'lr');
                      break;
                    default:
                      return u;
                  }
                  return A + u + j + c + u;
                case 1017:
                  if (-1 === u.indexOf('sticky', 9)) return u;
                case 975:
                  switch (
                    ((d = (u = e).length - 10),
                    (f =
                      (c = (33 === u.charCodeAt(d) ? u.substring(0, d) : u)
                        .substring(e.indexOf(':', 7) + 1)
                        .trim()).charCodeAt(0) +
                      (0 | c.charCodeAt(7))))
                  ) {
                    case 203:
                      if (c.charCodeAt(8) < 111) break;
                    case 115:
                      u = u.replace(c, A + c) + ';' + u;
                      break;
                    case 207:
                    case 102:
                      u =
                        u.replace(c, A + (f > 102 ? 'inline-' : '') + 'box') +
                        ';' +
                        u.replace(c, A + c) +
                        ';' +
                        u.replace(c, j + c + 'box') +
                        ';' +
                        u;
                  }
                  return u + ';';
                case 938:
                  if (u.charCodeAt(5) === L)
                    switch (u.charCodeAt(6)) {
                      case 105:
                        return (c = u.replace('-items', '')), A + u + A + 'box-' + c + j + 'flex-' + c + u;
                      case 115:
                        return A + u + j + 'flex-item-' + u.replace(B, '') + u;
                      default:
                        return A + u + j + 'flex-line-pack' + u.replace('align-content', '').replace(B, '') + u;
                    }
                  break;
                case 973:
                case 989:
                  if (u.charCodeAt(3) !== L || 122 === u.charCodeAt(4)) break;
                case 931:
                case 953:
                  if (!0 === O.test(e))
                    return 115 === (c = e.substring(e.indexOf(':') + 1)).charCodeAt(0)
                      ? he(e.replace('stretch', 'fill-available'), r, o, t).replace(':fill-available', ':stretch')
                      : u.replace(c, A + c) + u.replace(c, P + c.replace('fill-', '')) + u;
                  break;
                case 962:
                  if (
                    ((u = A + u + (102 === u.charCodeAt(5) ? j + u : '') + u),
                    o + t === 211 && 105 === u.charCodeAt(13) && u.indexOf('transform', 10) > 0)
                  )
                    return u.substring(0, u.indexOf(';', 27) + 1).replace(i, '$1-webkit-$2') + u;
              }
              return u;
            }
            function ve(e, r) {
              var o = e.indexOf(1 === r ? ':' : '{'),
                t = e.substring(0, 3 !== r ? o : 10),
                n = e.substring(o + 1, e.length - 1);
              return se(2 !== r ? t : t.replace(E, '$1'), n, r);
            }
            function ye(e, r) {
              var o = he(r, r.charCodeAt(0), r.charCodeAt(1), r.charCodeAt(2));
              return o !== r + ';' ? o.replace(S, ' or ($1)').substring(4) : '(' + r + ')';
            }
            function Ce(e, r, o, t, n, a, i, l, s, c) {
              for (var d, u = 0, f = r; u < le; ++u)
                switch ((d = ie[u].call(xe, e, f, o, t, n, a, i, l, s, c))) {
                  case void 0:
                  case !1:
                  case !0:
                  case null:
                    break;
                  default:
                    f = d;
                }
              if (f !== r) return f;
            }
            function ke(e, r, o, t) {
              for (var n = r + 1; n < o; ++n)
                switch (t.charCodeAt(n)) {
                  case U:
                    if (e === N && t.charCodeAt(n - 1) === N && r + 2 !== n) return n + 1;
                    break;
                  case _:
                    if (e === U) return n + 1;
                }
              return n;
            }
            function we(e) {
              for (var r in e) {
                var o = e[r];
                switch (r) {
                  case 'keyframe':
                    de = 0 | o;
                    break;
                  case 'global':
                    re = 0 | o;
                    break;
                  case 'cascade':
                    Q = 0 | o;
                    break;
                  case 'compress':
                    oe = 0 | o;
                    break;
                  case 'semicolon':
                    te = 0 | o;
                    break;
                  case 'preserve':
                    ne = 0 | o;
                    break;
                  case 'prefix':
                    (se = null), o ? ('function' != typeof o ? (ee = 1) : ((ee = 2), (se = o))) : (ee = 0);
                }
              }
              return we;
            }
            function xe(r, o) {
              if (void 0 !== this && this.constructor === xe) return e(r);
              var n = r,
                a = n.charCodeAt(0);
              a < 33 && (a = (n = n.trim()).charCodeAt(0)),
                de > 0 && (ue = n.replace(g, 91 === a ? '' : '-')),
                (a = 1),
                1 === Q ? (ge = n) : (fe = n);
              var i,
                l = [ge];
              le > 0 && void 0 !== (i = Ce(-1, o, l, l, q, $, 0, 0, 0, 0)) && 'string' == typeof i && (o = i);
              var s = pe(ae, l, o, 0, 0);
              return (
                le > 0 &&
                  void 0 !== (i = Ce(-2, s, l, l, q, $, s.length, 0, 0, 0)) &&
                  'string' != typeof (s = i) &&
                  (a = 0),
                (ue = ''),
                (ge = ''),
                (fe = ''),
                (J = 0),
                (q = 1),
                ($ = 1),
                oe * a == 0
                  ? s
                  : (function (e) {
                      return e.replace(t, '').replace(h, '').replace(v, '$1').replace(y, '$1').replace(C, ' ');
                    })(s)
              );
            }
            return (
              (xe.use = function e(r) {
                switch (r) {
                  case void 0:
                  case null:
                    le = ie.length = 0;
                    break;
                  default:
                    if ('function' == typeof r) ie[le++] = r;
                    else if ('object' == typeof r) for (var o = 0, t = r.length; o < t; ++o) e(r[o]);
                    else ce = 0 | !!r;
                }
                return e;
              }),
              (xe.set = we),
              void 0 !== r && we(r),
              xe
            );
          })(null);
        },
        5840: (r) => {
          'use strict';
          r.exports = e;
        },
        8768: (e) => {
          'use strict';
          e.exports = r;
        }
      },
      t = {};
    function n(e) {
      var r = t[e];
      if (void 0 !== r) return r.exports;
      var a = (t[e] = { id: e, loaded: !1, exports: {} });
      return o[e](a, a.exports, n), (a.loaded = !0), a.exports;
    }
    (n.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return n.d(r, { a: r }), r;
    }),
      (n.d = (e, r) => {
        for (var o in r) n.o(r, o) && !n.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: r[o] });
      }),
      (n.g = (function () {
        if ('object' == typeof globalThis) return globalThis;
        try {
          return this || new Function('return this')();
        } catch (e) {
          if ('object' == typeof window) return window;
        }
      })()),
      (n.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
      (n.r = (e) => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e));
    var a = {};
    return (
      (() => {
        'use strict';
        n.r(a),
          n.d(a, {
            Chat: () => ca,
            Flex: () => Tt,
            Provider: () => Wl,
            Ref: () => fo,
            mergeStyles: () => Z,
            mergeThemes: () => U,
            teamsTheme: () => Fp
          });
        var e = {};
        n.r(e),
          n.d(e, {
            bodyBackground: () => Js,
            bodyColor: () => Qs,
            bodyFontFamily: () => $s,
            bodyFontSize: () => qs,
            bodyLineHeight: () => ec,
            bodyMargin: () => Ks,
            bodyPadding: () => Ys,
            borderRadiusMedium: () => ys,
            borderRadiusSmall: () => vs,
            borderRadiusXLarge: () => Cs,
            borderWidth: () => hs,
            categoryColorScheme: () => ms,
            categoryColors: () => ps,
            colorScheme: () => ds,
            colors: () => ss,
            contextualColors: () => ts,
            focusInnerBorderColor: () => ks,
            focusOuterBorderColor: () => ws,
            fontSizes: () => Ms,
            fontWeightBold: () => Ts,
            fontWeightLight: () => Ds,
            fontWeightRegular: () => _s,
            fontWeightSemibold: () => Hs,
            fontWeightSemilight: () => zs,
            lineHeightDefault: () => Ws,
            lineHeightLarge: () => Zs,
            lineHeightLarger: () => Us,
            lineHeightLargest: () => Gs,
            lineHeightMedium: () => Vs,
            lineHeightSmall: () => Ns,
            lineHeightSmaller: () => Ls,
            naturalColors: () => ns,
            primitiveColors: () => is,
            shadow16: () => js,
            shadow2: () => Fs,
            shadow28: () => Is,
            shadow4: () => As,
            shadow64: () => Rs,
            shadow8: () => Ps,
            shadowLevel1: () => xs,
            shadowLevel1Dark: () => Os,
            shadowLevel2: () => Ss,
            shadowLevel3: () => Bs,
            shadowLevel4: () => Es,
            transparentColors: () => ls,
            zIndexes: () => Xs
          });
        var r = {};
        n.r(r),
          n.d(r, {
            Accordion: () => rc,
            AccordionTitle: () => rc,
            Alert: () => tc,
            AlertDismissAction: () => tc,
            Attachment: () => oc,
            AttachmentAction: () => oc,
            AttachmentBody: () => oc,
            AttachmentDescription: () => oc,
            AttachmentHeader: () => oc,
            AttachmentIcon: () => oc,
            Avatar: () => ac,
            AvatarIcon: () => ac,
            AvatarImage: () => ac,
            AvatarLabel: () => ac,
            AvatarStatus: () => ac,
            AvatarStatusIcon: () => ac,
            AvatarStatusImage: () => ac,
            Breadcrumb: () => lc,
            BreadcrumbDivider: () => lc,
            BreadcrumbItem: () => lc,
            BreadcrumbLink: () => lc,
            Button: () => ic,
            ButtonContent: () => ic,
            ButtonGroup: () => ic,
            Card: () => xd,
            CardBody: () => xd,
            CardExpandableBox: () => xd,
            CardFooter: () => xd,
            CardHeader: () => xd,
            CardPreview: () => xd,
            CardTopControls: () => xd,
            Carousel: () => yd,
            CarouselItem: () => yd,
            CarouselNavigation: () => kd,
            CarouselNavigationItem: () => kd,
            CarouselPaddle: () => yd,
            CarouselPaddlesContainer: () => yd,
            Chat: () => sc,
            ChatItem: () => cc,
            ChatMessage: () => dc,
            ChatMessageDetails: () => uc,
            ChatMessageReadStatus: () => fc,
            Checkbox: () => mc,
            Datepicker: () => Sd,
            DatepickerCalendar: () => Sd,
            DatepickerCalendarCell: () => Sd,
            DatepickerCalendarCellButton: () => Sd,
            DatepickerCalendarGrid: () => Sd,
            DatepickerCalendarGridRow: () => Sd,
            DatepickerCalendarHeader: () => Sd,
            DatepickerCalendarHeaderCell: () => Sd,
            Dialog: () => hc,
            Divider: () => Bc,
            Dropdown: () => Ec,
            DropdownItem: () => Ec,
            DropdownSearchInput: () => Ec,
            DropdownSelectedItem: () => Ec,
            Embed: () => Oc,
            Flex: () => Fc,
            FlexItem: () => Ac,
            Form: () => Pc,
            FormField: () => Ic,
            FormFieldCustom: () => Ic,
            FormLabel: () => Dc,
            FormMessage: () => Mc,
            Grid: () => zc,
            Header: () => Hc,
            HeaderDescription: () => Wc,
            Image: () => Vc,
            Input: () => Zc,
            InputLabel: () => Uc,
            ItemLayout: () => Kc,
            Label: () => Gc,
            Layout: () => Xc,
            ListItem: () => $c,
            ListItemContent: () => $c,
            ListItemContentMedia: () => $c,
            ListItemHeader: () => $c,
            ListItemHeaderMedia: () => $c,
            ListItemMedia: () => $c,
            Loader: () => Yc,
            Menu: () => Jc,
            MenuDivider: () => Jc,
            MenuItem: () => Jc,
            MenuItemContent: () => Jc,
            MenuItemIcon: () => Jc,
            MenuItemIndicator: () => Jc,
            MenuItemWrapper: () => Jc,
            Pill: () => Qc,
            PillAction: () => Qc,
            PillContent: () => Qc,
            PillIcon: () => Qc,
            PillImage: () => Qc,
            PopupContent: () => ed,
            Provider: () => rd,
            RadioGroupItem: () => od,
            Reaction: () => td,
            ReactionGroup: () => nd,
            Segment: () => id,
            Skeleton: () => ld,
            SkeletonAvatar: () => ld,
            SkeletonButton: () => ld,
            SkeletonInput: () => ld,
            SkeletonLine: () => ld,
            SkeletonShape: () => ld,
            SkeletonText: () => ld,
            Slider: () => sd,
            SplitButton: () => vd,
            SplitButtonDivider: () => vd,
            SplitButtonToggle: () => vd,
            Status: () => cd,
            SvgIcon: () => Nc,
            Table: () => wd,
            TableCell: () => wd,
            TableRow: () => wd,
            Text: () => ud,
            TextArea: () => fd,
            Toolbar: () => pd,
            ToolbarCustomItem: () => pd,
            ToolbarDivider: () => pd,
            ToolbarItem: () => pd,
            ToolbarMenu: () => pd,
            ToolbarMenuDivider: () => pd,
            ToolbarMenuItem: () => pd,
            ToolbarMenuItemActiveIndicator: () => pd,
            ToolbarMenuItemIcon: () => pd,
            ToolbarMenuItemSubmenuIndicator: () => pd,
            ToolbarMenuRadioGroup: () => pd,
            ToolbarMenuRadioGroupWrapper: () => pd,
            TooltipContent: () => hd,
            TreeTitle: () => bd,
            Video: () => md
          });
        var o = {};
        n.r(o),
          n.d(o, {
            Accordion: () => Bd,
            AccordionContent: () => Ed,
            AccordionTitle: () => Od,
            Alert: () => Ad,
            AlertDismissAction: () => zd,
            Attachment: () => _d,
            AttachmentAction: () => Wd,
            AttachmentBody: () => Ld,
            AttachmentDescription: () => Nd,
            AttachmentHeader: () => Vd,
            AttachmentIcon: () => Zd,
            Avatar: () => $d,
            AvatarIcon: () => ru,
            AvatarImage: () => eu,
            AvatarLabel: () => ou,
            AvatarStatus: () => qd,
            AvatarStatusIcon: () => Jd,
            AvatarStatusImage: () => Qd,
            Breadcrumb: () => du,
            BreadcrumbDivider: () => su,
            BreadcrumbItem: () => lu,
            BreadcrumbLink: () => cu,
            Button: () => tu,
            ButtonContent: () => iu,
            ButtonGroup: () => au,
            Card: () => fp,
            CardBody: () => pp,
            CardExpandableBox: () => vp,
            CardFooter: () => bp,
            CardHeader: () => gp,
            CardPreview: () => mp,
            CardTopControls: () => hp,
            Carousel: () => Qg,
            CarouselItem: () => ep,
            CarouselNavigation: () => rp,
            CarouselNavigationItem: () => tp,
            CarouselPaddle: () => lp,
            CarouselPaddlesContainer: () => sp,
            Chat: () => uu,
            ChatItem: () => pu,
            ChatMessage: () => yu,
            ChatMessageDetails: () => Cu,
            ChatMessageReadStatus: () => ku,
            Checkbox: () => Eu,
            Datepicker: () => Cp,
            DatepickerCalendar: () => kp,
            DatepickerCalendarCell: () => Sp,
            DatepickerCalendarCellButton: () => Bp,
            DatepickerCalendarGrid: () => Ep,
            DatepickerCalendarGridRow: () => Op,
            DatepickerCalendarHeader: () => wp,
            DatepickerCalendarHeaderCell: () => xp,
            Dialog: () => Ou,
            DialogFooter: () => Fu,
            Divider: () => Pu,
            DividerContent: () => ju,
            Dropdown: () => zu,
            DropdownItem: () => Vu,
            DropdownSearchInput: () => _u,
            DropdownSelectedItem: () => Tu,
            Embed: () => Gu,
            Flex: () => Ju,
            FlexItem: () => Qu,
            Form: () => Xu,
            FormField: () => Yu,
            FormFieldCustom: () => Yu,
            FormLabel: () => Ku,
            FormMessage: () => $u,
            Grid: () => rf,
            Header: () => tf,
            HeaderDescription: () => nf,
            Image: () => sf,
            Input: () => cf,
            InputLabel: () => df,
            ItemLayout: () => yf,
            Label: () => uf,
            Layout: () => mf,
            List: () => Cf,
            ListItem: () => kf,
            ListItemContent: () => wf,
            ListItemContentMedia: () => xf,
            ListItemEndMedia: () => Sf,
            ListItemHeader: () => Bf,
            ListItemHeaderMedia: () => Ef,
            ListItemMedia: () => Of,
            Loader: () => vf,
            Menu: () => Ff,
            MenuButton: () => Lf,
            MenuDivider: () => Tf,
            MenuItem: () => Rf,
            MenuItemContent: () => Df,
            MenuItemIcon: () => Mf,
            MenuItemIndicator: () => _f,
            MenuItemWrapper: () => Hf,
            Pill: () => Nf,
            PillAction: () => Zf,
            PillContent: () => Vf,
            PillGroup: () => Xf,
            PillIcon: () => Gf,
            PillImage: () => Uf,
            PopupContent: () => $f,
            Provider: () => qf,
            RadioGroup: () => Jf,
            RadioGroupItem: () => rg,
            Reaction: () => yg,
            ReactionGroup: () => Cg,
            Segment: () => og,
            Skeleton: () => ig,
            SkeletonAvatar: () => fg,
            SkeletonButton: () => cg,
            SkeletonInput: () => ug,
            SkeletonLine: () => lg,
            SkeletonShape: () => sg,
            SkeletonText: () => dg,
            Slider: () => hg,
            SplitButton: () => Eg,
            SplitButtonDivider: () => Pg,
            SplitButtonToggle: () => Ag,
            Status: () => Bg,
            SvgIcon: () => lf,
            Table: () => cp,
            TableCell: () => up,
            TableRow: () => dp,
            Text: () => jg,
            TextArea: () => Ig,
            Toolbar: () => Rg,
            ToolbarCustomItem: () => Dg,
            ToolbarDivider: () => zg,
            ToolbarItem: () => _g,
            ToolbarMenu: () => Hg,
            ToolbarMenuDivider: () => Tg,
            ToolbarMenuItem: () => Lg,
            ToolbarMenuItemActiveIndicator: () => Zg,
            ToolbarMenuItemIcon: () => Ng,
            ToolbarMenuItemSubmenuIndicator: () => Vg,
            ToolbarMenuRadioGroup: () => Ug,
            ToolbarMenuRadioGroupWrapper: () => Gg,
            ToolbarRadioGroup: () => Mg,
            TooltipContent: () => Jg,
            Tree: () => Xg,
            TreeItem: () => Kg,
            TreeTitle: () => $g,
            Video: () => qg
          });
        var t = n(5161),
          i = n.n(t),
          l = {
            3: 'Cancel',
            6: 'Help',
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            28: 'Convert',
            29: 'NonConvert',
            30: 'Accept',
            31: 'ModeChange',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            41: 'Select',
            42: 'Print',
            43: 'Execute',
            44: 'PrintScreen',
            45: 'Insert',
            46: 'Delete',
            48: ['0', ')'],
            49: ['1', '!'],
            50: ['2', '@'],
            51: ['3', '#'],
            52: ['4', '$'],
            53: ['5', '%'],
            54: ['6', '^'],
            55: ['7', '&'],
            56: ['8', '*'],
            57: ['9', '('],
            65: ['a', 'A'],
            66: ['b', 'B'],
            67: ['c', 'C'],
            68: ['d', 'D'],
            69: ['e', 'E'],
            70: ['f', 'F'],
            71: ['g', 'G'],
            72: ['h', 'H'],
            73: ['i', 'I'],
            74: ['j', 'J'],
            75: ['k', 'K'],
            76: ['l', 'L'],
            77: ['m', 'M'],
            78: ['n', 'N'],
            79: ['o', 'O'],
            80: ['p', 'P'],
            81: ['q', 'Q'],
            82: ['r', 'R'],
            83: ['s', 'S'],
            84: ['t', 'T'],
            85: ['u', 'U'],
            86: ['v', 'V'],
            87: ['w', 'W'],
            88: ['x', 'X'],
            89: ['y', 'Y'],
            90: ['z', 'Z'],
            91: 'OS',
            93: 'ContextMenu',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            124: 'F13',
            125: 'F14',
            126: 'F15',
            127: 'F16',
            128: 'F17',
            129: 'F18',
            130: 'F19',
            131: 'F20',
            132: 'F21',
            133: 'F22',
            134: 'F23',
            135: 'F24',
            144: 'NumLock',
            145: 'ScrollLock',
            181: 'VolumeMute',
            182: 'VolumeDown',
            183: 'VolumeUp',
            186: [';', ':'],
            187: ['=', '+'],
            188: [',', '<'],
            189: ['-', '_'],
            190: ['.', '>'],
            191: ['/', '?'],
            192: ['`', '~'],
            219: ['[', '{'],
            220: ['\\', '|'],
            221: [']', '}'],
            222: ["'", '"'],
            224: 'Meta',
            225: 'AltGraph',
            246: 'Attn',
            247: 'CrSel',
            248: 'ExSel',
            249: 'EraseEof',
            250: 'Play',
            251: 'ZoomOut'
          };
        function s(e) {
          return null === (r = e) || Array.isArray(r) || 'object' != typeof r ? c[e] : e.keyCode || e.which || c[e.key];
          var r;
        }
        var c = {};
        for (var d in l)
          if (l.hasOwnProperty(d)) {
            var u = l[d];
            if ('string' == typeof u) c[u] = Number(d);
            else for (var f = 0; f < u.length; f++) c[u[f]] = Number(d);
          }
        var g,
          p,
          b = c[' '],
          m =
            (c[0],
            c[1],
            c[2],
            c[3],
            c[4],
            c[5],
            c[6],
            c[7],
            c[8],
            c[9],
            c['~'],
            c['`'],
            c['!'],
            c['@'],
            c['#'],
            c['%'],
            c['^'],
            c['&'],
            c['+'],
            c['-'],
            c['='],
            c['/'],
            c['*'],
            c[','],
            c['.'],
            c[':'],
            c[';'],
            c['|'],
            c['\\'],
            c['?'],
            c["'"],
            c['"'],
            c['{'],
            c['}'],
            c['('],
            c[')'],
            c['<'],
            c['>'],
            c['['],
            c[']'],
            c.ArrowDown,
            c.ArrowLeft,
            c.ArrowRight,
            c.ArrowUp,
            c.End,
            c.Enter,
            c.Home,
            c.PageDown,
            c.PageUp,
            c.Tab,
            'data-is-focusable');
        !(function (e) {
          (e[(e.none = 0)] = 'none'), (e[(e.all = 1)] = 'all'), (e[(e.inputOnly = 2)] = 'inputOnly');
        })(g || (g = {})),
          (function (e) {
            (e[(e.vertical = 0)] = 'vertical'),
              (e[(e.horizontal = 1)] = 'horizontal'),
              (e[(e.bidirectional = 2)] = 'bidirectional'),
              (e[(e.bidirectionalDomOrder = 3)] = 'bidirectionalDomOrder');
          })(p || (p = {}));
        var h = function (e) {
            var r;
            return {
              attributes: {
                root: Object.assign(
                  ((r = {}), (r['data-is-focusable'] = !0), (r.tabIndex = -1), r),
                  e.hasActionMenu && !e.inlineActionMenu && { 'aria-owns': e.actionMenuId }
                )
              },
              focusZone: {
                props: {
                  handleTabKey: g.all,
                  isCircularNavigation: !0,
                  direction: p.vertical,
                  pagingSupportDisabled: !0
                }
              },
              keyActions: {
                root: {
                  preventDefault: { keyCombinations: [{ keyCode: c.ArrowUp }, { keyCode: c.ArrowDown }] },
                  focus: { keyCombinations: [{ keyCode: c.Escape }] }
                }
              }
            };
          },
          v = function () {
            var e;
            return {
              attributes: { root: {} },
              focusZone: {
                props:
                  ((e = {
                    shouldEnterInnerZone: function (e) {
                      return s(e) === c.Enter;
                    },
                    direction: p.vertical,
                    shouldResetActiveElementWhenTabFromZone: !0,
                    defaultTabbableElement: y
                  }),
                  (e['chat-focuszone'] = ''),
                  (e.pagingSupportDisabled = !0),
                  e)
              },
              childBehaviors: { item: void 0, message: h }
            };
          },
          y = function (e) {
            var r = e.querySelector('[data-last-visible="true"]');
            if (r) return r;
            var o = e.querySelectorAll('[chat-focuszone] .ui-chat__message[data-is-focusable="true"]');
            return o.length > 0 ? o[o.length - 1] : null;
          },
          C = n(5840),
          k = {
            registerUsage: function () {},
            unregisterUsage: function () {},
            renderFont: function () {},
            renderGlobal: function () {},
            renderRule: function () {
              return '';
            },
            Provider: function (e) {
              return C.createElement(C.Fragment, null, e.children);
            }
          },
          w = n(4486),
          x = n.n(w),
          S = n(3674),
          B = n.n(S),
          E = n(3386),
          O = n.n(E),
          F = n(3857),
          A = n.n(F),
          P = function (e) {
            return function () {
              return 'function' == typeof e ? e.apply(void 0, arguments) : e;
            };
          },
          j = function (e) {
            return null !== e && 'object' == typeof e && !Array.isArray(e);
          },
          I = function (e) {
            return '__proto__' !== e && 'prototype' !== e && 'constructor' !== e;
          },
          R = function () {
            for (
              var e = function e(r, o) {
                  return (
                    Object.keys(o).forEach(function (t) {
                      I(t) && (j(o[t]) ? (j(r[t]) || (r[t] = {}), e(r[t], o[t])) : (r[t] = o[t]));
                    }),
                    r
                  );
                },
                r = arguments.length,
                o = new Array(r),
                t = 0;
              t < r;
              t++
            )
              o[t] = arguments[t];
            return o.filter(Boolean).reduce(function (r, o) {
              return e(r, o);
            }, {});
          },
          M = function (e, r) {
            return e;
          },
          D = {
            siteVariables: { fontSizes: {} },
            componentVariables: {},
            componentStyles: {},
            fontFaces: [],
            staticStyles: [],
            animations: {}
          },
          z = function (e, r) {
            var o = {};
            return (
              e &&
                Object.keys(e).forEach(function (t) {
                  var n = e[t],
                    a = null == r ? void 0 : r[t];
                  null != n &&
                    (null != a
                      ? n === a &&
                        (o[t] =
                          'function' == typeof n
                            ? n
                            : function () {
                                return n;
                              })
                      : (o[t] =
                          'function' == typeof n
                            ? n
                            : function () {
                                return n;
                              }));
                }),
              r &&
                Object.keys(r).forEach(function (t) {
                  var n = null == e ? void 0 : e[t],
                    a = r[t];
                  null != a &&
                    (null != n
                      ? n !== a &&
                        (o[t] = function (e) {
                          return A()('function' == typeof n ? n(e) : n, 'function' == typeof a ? a(e) : a);
                        })
                      : (o[t] =
                          'function' == typeof a
                            ? a
                            : function () {
                                return a;
                              }));
                }),
              o
            );
          },
          _ = function (e, r) {
            return e && r
              ? function (o) {
                  var t = 'function' == typeof e ? e(o) : e || {},
                    n = 'function' == typeof r ? r(o) : r || {};
                  return R(t, n);
                }
              : e
              ? 'function' == typeof e
                ? e
                : function () {
                    return e || {};
                  }
              : r
              ? 'function' == typeof r
                ? r
                : function () {
                    return r || {};
                  }
              : function () {
                  return {};
                };
          },
          H = function (e, r) {
            var o = { fontSizes: {} };
            return e && r ? R(o, e, r) : e ? Object.assign({}, o, e) : Object.assign({}, o, r);
          },
          T = function (e, r) {
            return e && r
              ? O()
                  .apply(void 0, i()([e, r], B()))
                  .reduce(function (o, t) {
                    return (o[t] = _(e[t], r[t])), o;
                  }, {})
              : e
              ? Object.fromEntries(
                  Object.entries(e).map(function (e) {
                    var r = e[0],
                      o = e[1];
                    return [r, _(void 0, o)];
                  })
                )
              : r
              ? Object.fromEntries(
                  Object.entries(r).map(function (e) {
                    var r = e[0],
                      o = e[1];
                    return [r, _(void 0, o)];
                  })
                )
              : {};
          },
          W = function (e, r) {
            return e && r
              ? O()
                  .apply(void 0, i()([e, r], B()))
                  .reduce(function (o, t) {
                    return (o[t] = z(e[t], r[t])), o;
                  }, {})
              : e
              ? Object.fromEntries(
                  Object.entries(e).map(function (e) {
                    var r = e[0],
                      o = e[1];
                    return [r, z(void 0, o)];
                  })
                )
              : r
              ? Object.fromEntries(
                  Object.entries(r).map(function (e) {
                    var r = e[0],
                      o = e[1];
                    return [r, z(void 0, o)];
                  })
                )
              : {};
          },
          L = function (e, r) {
            return [].concat(e || [], r || []);
          },
          N = function (e, r) {
            return [].concat(e || [], r || []);
          },
          V = function (e, r) {
            return Object.assign({}, e, r);
          },
          Z = function () {
            for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++) r[o] = arguments[o];
            return function () {
              for (var e = arguments.length, o = new Array(e), t = 0; t < e; t++) o[t] = arguments[t];
              return r.reduce(function (e, r) {
                return A()(e, P(r).apply(void 0, o));
              }, {});
            };
          },
          U = function (e, r) {
            null == e || e._debugId, null == r || r._debugId;
            return e && r
              ? {
                  animations: V(e.animations, r.animations),
                  componentVariables: T(M(e.componentVariables), M(r.componentVariables)),
                  componentStyles: W(M(e.componentStyles), M(r.componentStyles)),
                  fontFaces: L(e.fontFaces, r.fontFaces),
                  siteVariables: H(M(e.siteVariables), M(r.siteVariables)),
                  staticStyles: N(e.staticStyles, r.staticStyles)
                }
              : e
              ? {
                  animations: V(void 0, e.animations),
                  componentVariables: T(void 0, M(e.componentVariables)),
                  componentStyles: W(void 0, M(e.componentStyles)),
                  fontFaces: L(void 0, e.fontFaces),
                  siteVariables: H(void 0, M(e.siteVariables)),
                  staticStyles: N(void 0, e.staticStyles)
                }
              : r
              ? {
                  animations: V(void 0, r.animations),
                  componentVariables: T(void 0, M(r.componentVariables)),
                  componentStyles: W(void 0, M(r.componentStyles)),
                  fontFaces: L(void 0, r.fontFaces),
                  siteVariables: H(void 0, M(r.siteVariables)),
                  staticStyles: N(void 0, r.staticStyles)
                }
              : Object.assign({}, D);
          },
          G = {
            rtl: void 0,
            disableAnimations: !1,
            performance: {
              enableSanitizeCssPlugin: !1,
              enableStylesCaching: !0,
              enableVariablesCaching: !0,
              enableBooleanVariablesCaching: !1
            },
            renderer: k,
            theme: D,
            telemetry: void 0,
            target: void 0
          },
          X = C.createContext(G);
        function Y() {
          return C.useContext(X);
        }
        var K,
          $ = X.Provider,
          q = function (e, r) {
            return (function (e, r, o) {
              var t = -1;
              return {
                setStart: function () {
                  null != r &&
                    r.enabled &&
                    ((t = performance.now()),
                    r.performance[e] ||
                      (r.performance[e] = {
                        instances: 0,
                        renders: 0,
                        msTotal: 0,
                        msMin: Number.MAX_SAFE_INTEGER,
                        msMax: 0,
                        msResolveVariablesTotal: 0,
                        msResolveStylesTotal: 0,
                        msRenderStylesTotal: 0,
                        stylesRootCacheHits: 0,
                        stylesSlotsCacheHits: 0
                      }));
                },
                setEnd: function () {
                  if (null != r && r.enabled && -1 !== t) {
                    var n = performance.now() - t;
                    (r.performance[e].instances += Number(o.current)),
                      r.performance[e].renders++,
                      (r.performance[e].msTotal += n),
                      (r.performance[e].msMin = Math.min(n, r.performance[e].msMin)),
                      (r.performance[e].msMax = Math.max(n, r.performance[e].msMax)),
                      (o.current = !1);
                  }
                }
              };
            })(e, r, C.useRef(!0));
          },
          J = function (e, r) {
            return void 0 === r || e === r;
          },
          Q = (((K = {})[c.ArrowRight] = c.ArrowLeft), (K[c.ArrowLeft] = c.ArrowRight), K),
          ee = { attributes: {}, keyHandlers: {} };
        function re() {
          return (
            (re = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var r = 1; r < arguments.length; r++) {
                    var o = arguments[r];
                    for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
                  }
                  return e;
                }),
            re.apply(this, arguments)
          );
        }
        function oe(e, r) {
          return (
            (oe = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, r) {
                  return (e.__proto__ = r), e;
                }),
            oe(e, r)
          );
        }
        function te(e, r) {
          (e.prototype = Object.create(r.prototype)), (e.prototype.constructor = e), oe(e, r);
        }
        var ne = n(5907),
          ae = n.n(ne),
          ie = n(3955),
          le = n.n(ie),
          se = n(4184),
          ce = n.n(se),
          de = n(5697),
          ue = n.n(de);
        function fe(e) {
          if ('undefined' != typeof document) {
            var r = e;
            return r && r.ownerDocument ? r.ownerDocument : document;
          }
        }
        var ge = void 0;
        try {
          ge = window;
        } catch (e) {}
        function pe(e) {
          if (void 0 !== ge) {
            var r = e;
            return r && r.ownerDocument && r.ownerDocument.defaultView ? r.ownerDocument.defaultView : ge;
          }
        }
        var be = 'data-is-scrollable';
        function me(e, r) {
          return (
            void 0 === r && (r = !0),
            e &&
              ((r &&
                (function (e) {
                  var r, o;
                  return e && (o = e) && o._virtual && (r = e._virtual.parent), r;
                })(e)) ||
                (e.parentNode && e.parentNode))
          );
        }
        function he(e, r) {
          return e && e !== document.body ? (r(e) ? e : he(me(e), r)) : null;
        }
        function ve(e, r) {
          var o = he(e, function (e) {
            return e.hasAttribute(r);
          });
          return o && o.getAttribute(r);
        }
        function ye(e, r, o) {
          void 0 === o && (o = !0);
          var t = !1;
          if (e && r)
            if (o)
              if (e === r) t = !0;
              else
                for (t = !1; r; ) {
                  var n = me(r);
                  if (n === e) {
                    t = !0;
                    break;
                  }
                  r = n;
                }
            else e.contains && (t = e.contains(r));
          return t;
        }
        function Ce(e) {
          return e.as || 'div';
        }
        function ke(e, r) {
          return Object.keys(r).reduce(function (o, t) {
            return -1 === e.indexOf(t) && (o[t] = r[t]), o;
          }, {});
        }
        function we(e, r) {
          (null == r || r > e.length) && (r = e.length);
          for (var o = 0, t = new Array(r); o < r; o++) t[o] = e[o];
          return t;
        }
        var xe = 'data-focuszone-id';
        function Se(e, r, o, t, n, a, i) {
          if (!r || r === e) return null;
          var l = Ee(r);
          if (n && l && (a || (!Fe(r) && !Ae(r)))) {
            var s = Se(e, r.lastElementChild, !0, !0, !0, a, i);
            if (s) {
              if ((i && Oe(s, !0)) || !i) return s;
              var c = Se(e, s.previousElementSibling, !0, !0, !0, a, i);
              if (c) return c;
              for (var d = s.parentElement; d && d !== r; ) {
                var u = Se(e, d.previousElementSibling, !0, !0, !0, a, i);
                if (u) return u;
                d = d.parentElement;
              }
            }
          }
          return o && l && Oe(r, i)
            ? r
            : Se(e, r.previousElementSibling, !0, !0, !0, a, i) ||
                (t ? null : Se(e, r.parentElement, !0, !1, !1, a, i));
        }
        function Be(e, r, o, t, n, a, i) {
          if (!r || (r === e && n)) return null;
          var l = Ee(r);
          if (o && l && Oe(r, i)) return r;
          if (!n && l && (a || (!Fe(r) && !Ae(r)))) {
            var s = Be(e, r.firstElementChild, !0, !0, !1, a, i);
            if (s) return s;
          }
          return r === e
            ? null
            : Be(e, r.nextElementSibling, !0, !0, !1, a, i) || (t ? null : Be(e, r.parentElement, !1, !1, !0, a, i));
        }
        function Ee(e) {
          if (!e || !e.getAttribute) return !1;
          var r = e.getAttribute('data-is-visible');
          return null != r ? 'true' === r : 0 !== e.offsetHeight || null !== e.offsetParent || !0 === e.isVisible;
        }
        function Oe(e, r) {
          if (!e || e.disabled) return !1;
          var o = 0,
            t = null;
          e && e.getAttribute && (t = e.getAttribute('tabIndex')) && (o = parseInt(t, 10));
          var n = e.getAttribute ? e.getAttribute(m) : null,
            a = null !== t && o >= 0,
            i =
              !!e &&
              'false' !== n &&
              ('A' === e.tagName ||
                'BUTTON' === e.tagName ||
                'INPUT' === e.tagName ||
                'TEXTAREA' === e.tagName ||
                'true' === n ||
                a ||
                (e.getAttribute && 'button' === e.getAttribute('role')));
          return r ? -1 !== o && i : i;
        }
        function Fe(e) {
          return !!(e && e.getAttribute && e.getAttribute(xe));
        }
        function Ae(e) {
          return !(!e || !e.getAttribute || 'true' !== e.getAttribute('data-is-sub-focuszone'));
        }
        var Pe = void 0;
        function je(e) {
          if (e) {
            if (Pe) return void (Pe = e);
            Pe = e;
            var r = pe(e);
            r &&
              r.requestAnimationFrame(function () {
                Pe && Pe.focus(), (Pe = void 0);
              });
          }
        }
        var Ie = function (e, r) {
            'function' != typeof e ? null !== e && 'object' == typeof e && (e.current = r) : e(r);
          },
          Re = 'tabindex',
          Me = 'data-no-vertical-wrap',
          De = 'data-no-horizontal-wrap',
          ze = 999999999,
          _e = -999999999,
          He = {},
          Te = {
            _windowToOuterZoneMap: new Map(),
            register: function (e, r) {
              var o, t;
              return (
                this._windowToOuterZoneMap.get(e)
                  ? null == (t = this._windowToOuterZoneMap.get(e)) || t.add(r)
                  : this._windowToOuterZoneMap.set(e, new Set([r])),
                null == (o = this._windowToOuterZoneMap.get(e)) ? void 0 : o.size
              );
            },
            unregister: function (e, r) {
              var o, t;
              null == (o = this._windowToOuterZoneMap.get(e)) || o.delete(r),
                0 === (null == (t = this._windowToOuterZoneMap.get(e)) ? void 0 : t.size) &&
                  this._windowToOuterZoneMap.delete(e);
            },
            getOutZone: function (e) {
              return this._windowToOuterZoneMap.get(e);
            }
          },
          We = ['text', 'number', 'password', 'email', 'tel', 'url', 'search'],
          Le = !1;
        function Ne(e, r) {
          var o = new MouseEvent('click', {
            ctrlKey: null == r ? void 0 : r.ctrlKey,
            metaKey: null == r ? void 0 : r.metaKey,
            shiftKey: null == r ? void 0 : r.shiftKey,
            altKey: null == r ? void 0 : r.altKey,
            bubbles: null == r ? void 0 : r.bubbles,
            cancelable: null == r ? void 0 : r.cancelable
          });
          e.dispatchEvent(o);
        }
        function Ve(e) {
          var r;
          s(e) === c.Tab &&
            (null == (r = Te.getOutZone(pe(e.target))) ||
              r.forEach(function (e) {
                return e.updateTabIndexes();
              }));
        }
        var Ze = (function (e) {
          function r(r) {
            var o;
            return (
              ((o = e.call(this, r) || this)._root = { current: null }),
              (o._id = void 0),
              (o._activeElement = void 0),
              (o._lastIndexPath = void 0),
              (o._isParked = !1),
              (o._parkedTabIndex = void 0),
              (o._defaultFocusElement = void 0),
              (o._focusAlignment = void 0),
              (o._isInnerZone = void 0),
              (o._processingTabKey = void 0),
              (o.windowElement = void 0),
              (o.setRef = function (e) {
                (o._root.current = e), Ie(o.props.innerRef, e);
              }),
              (o._onBlur = function () {
                o.setParkedFocus(!1);
              }),
              (o._onFocus = function (e) {
                var r,
                  t = o.props,
                  n = t.onActiveElementChanged,
                  a = t.stopFocusPropagation,
                  i = t.shouldFocusInnerElementWhenReceivedFocus,
                  l = t.defaultTabbableElement;
                if (
                  !t.shouldIgnoreNotFocusable ||
                  'false' !== (null == (r = e.target) ? void 0 : r.dataset.isFocusable)
                ) {
                  var s,
                    c = o.isImmediateDescendantOfZone(e.target);
                  if (c) s = e.target;
                  else
                    for (var d = e.target; d && d !== o._root.current; ) {
                      if (Oe(d) && o.isImmediateDescendantOfZone(d)) {
                        s = d;
                        break;
                      }
                      d = me(d, Le);
                    }
                  if (i && e.target === o._root.current) {
                    var u = l && 'function' == typeof l && o._root.current && l(o._root.current);
                    u && Oe(u) ? ((s = u), u.focus()) : (o.focus(!0), o._activeElement && (s = null));
                  }
                  s &&
                    s !== o._activeElement &&
                    ((o._activeElement = s), c && (o.setFocusAlignment(o._activeElement), o.updateTabIndexes())),
                    n && n(o._activeElement, e),
                    a && e.stopPropagation(),
                    ae()(o.props, 'onFocus', e);
                }
              }),
              (o._onMouseDown = function (e) {
                if (!o.props.disabled) {
                  for (var r = e.target, t = []; r && r !== o._root.current; ) t.push(r), (r = me(r, Le));
                  for (; t.length && ((r = t.pop()) && Oe(r) && o.setActiveElement(r, !0), !Fe(r)); );
                }
              }),
              (o._onKeyDown = function (e) {
                var r = o.props,
                  t = r.direction,
                  n = r.disabled,
                  a = r.shouldEnterInnerZone,
                  i = r.pagingSupportDisabled;
                if (!n) {
                  var l = fe(o._root.current);
                  if (
                    (o.props.onKeyDown && o.props.onKeyDown(e),
                    !((l.activeElement === o._root.current && o._isInnerZone) || e.isDefaultPrevented()))
                  ) {
                    if (a && a(e) && o.isImmediateDescendantOfZone(e.target)) {
                      var d = o.getFirstInnerZone();
                      if (d) {
                        if (!d.focus(!0)) return;
                      } else {
                        if (!Ae(e.target)) return;
                        if (!o.focusElement(Be(e.target, e.target.firstChild, !0))) return;
                      }
                    } else {
                      if (e.altKey) return;
                      switch (s(e)) {
                        case b:
                          if (o.tryInvokeClickForFocusable(e.target, e)) break;
                          return;
                        case c.ArrowLeft:
                          if (t !== p.vertical && (o.preventDefaultWhenHandled(e), o.moveFocusLeft())) break;
                          return;
                        case c.ArrowRight:
                          if (t !== p.vertical && (o.preventDefaultWhenHandled(e), o.moveFocusRight())) break;
                          return;
                        case c.ArrowUp:
                          if (t !== p.horizontal && (o.preventDefaultWhenHandled(e), o.moveFocusUp())) break;
                          return;
                        case c.ArrowDown:
                          if (t !== p.horizontal && (o.preventDefaultWhenHandled(e), o.moveFocusDown())) break;
                          return;
                        case c.PageDown:
                          if (!i && o.moveFocusPaging(!0)) break;
                          return;
                        case c.PageUp:
                          if (!i && o.moveFocusPaging(!1)) break;
                          return;
                        case c.Tab:
                          if (
                            o.props.handleTabKey === g.all ||
                            (o.props.handleTabKey === g.inputOnly && o.isElementInput(e.target))
                          ) {
                            var u = !1;
                            if (
                              ((o._processingTabKey = !0),
                              (u =
                                t !== p.vertical && o.shouldWrapFocus(o._activeElement, De)
                                  ? (o.props.isRtl ? !e.shiftKey : e.shiftKey)
                                    ? o.moveFocusLeft()
                                    : o.moveFocusRight()
                                  : e.shiftKey
                                  ? o.moveFocusUp()
                                  : o.moveFocusDown()),
                              (o._processingTabKey = !1),
                              u)
                            )
                              break;
                          } else o.props.shouldResetActiveElementWhenTabFromZone && (o._activeElement = null);
                          return;
                        case c.Home:
                          if (
                            o.isContentEditableElement(e.target) ||
                            (o.isElementInput(e.target) && !o.shouldInputLoseFocus(e.target, !1))
                          )
                            return !1;
                          var f = o._root.current && o._root.current.firstChild;
                          if (o._root.current && f && o.focusElement(Be(o._root.current, f, !0))) break;
                          return;
                        case c.End:
                          if (
                            o.isContentEditableElement(e.target) ||
                            (o.isElementInput(e.target) && !o.shouldInputLoseFocus(e.target, !1))
                          )
                            return !1;
                          var m = o._root.current && o._root.current.lastChild;
                          if (o._root.current && o.focusElement(Se(o._root.current, m, !0, !0, !0))) break;
                          return;
                        case c.Enter:
                          if (o.tryInvokeClickForFocusable(e.target, e)) break;
                          return;
                        default:
                          return;
                      }
                    }
                    e.preventDefault(), e.stopPropagation();
                  }
                }
              }),
              (o.getHorizontalDistanceFromCenter = function (e, r, t) {
                var n = o._focusAlignment.left,
                  a = Math.floor(t.top),
                  i = Math.floor(r.bottom),
                  l = Math.floor(t.bottom),
                  s = Math.floor(r.top);
                return (e && a > i) || (!e && l < s)
                  ? n >= t.left && n <= t.left + t.width
                    ? 0
                    : Math.abs(t.left + t.width / 2 - n)
                  : o.shouldWrapFocus(o._activeElement, Me)
                  ? ze
                  : _e;
              }),
              (o._id = le()('FocusZone')),
              (o._focusAlignment = { left: 0, top: 0 }),
              (o._processingTabKey = !1),
              o
            );
          }
          te(r, e);
          var o = r.prototype;
          return (
            (o.componentDidMount = function () {
              if (((He[this._id] = this), this._root.current)) {
                this.windowElement = pe(this._root.current);
                for (
                  var e, r = me(this._root.current, Le), o = fe(this._root.current);
                  r && r !== o.body && 1 === r.nodeType;

                ) {
                  if (Fe(r)) {
                    this._isInnerZone = !0;
                    break;
                  }
                  r = me(r, Le);
                }
                !this._isInnerZone &&
                  this.windowElement &&
                  (Te.register(this.windowElement, this),
                  1 === (null == (e = Te.getOutZone(this.windowElement)) ? void 0 : e.size) &&
                    this.windowElement.addEventListener('keydown', Ve, !0)),
                  this._root.current.addEventListener('blur', this._onBlur, !0),
                  this.updateTabIndexes(),
                  this.props.defaultTabbableElement &&
                    'string' == typeof this.props.defaultTabbableElement &&
                    (this._activeElement = this.getDocument().querySelector(this.props.defaultTabbableElement)),
                  this.props.shouldFocusOnMount && this.focus();
              }
            }),
            (o.componentDidUpdate = function () {
              if (this._root.current) {
                var e = fe(this._root.current);
                if (
                  !this.props.preventFocusRestoration &&
                  e &&
                  this._lastIndexPath &&
                  (e.activeElement === e.body || null === e.activeElement || e.activeElement === this._root.current)
                ) {
                  var r = (function (e, r) {
                    for (
                      var o,
                        t = e,
                        n = (function (e, r) {
                          var o = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                          if (o) return (o = o.call(e)).next.bind(o);
                          if (
                            Array.isArray(e) ||
                            (o = (function (e, r) {
                              if (e) {
                                if ('string' == typeof e) return we(e, r);
                                var o = Object.prototype.toString.call(e).slice(8, -1);
                                return (
                                  'Object' === o && e.constructor && (o = e.constructor.name),
                                  'Map' === o || 'Set' === o
                                    ? Array.from(e)
                                    : 'Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                                    ? we(e, r)
                                    : void 0
                                );
                              }
                            })(e)) ||
                            (r && e && 'number' == typeof e.length)
                          ) {
                            o && (e = o);
                            var t = 0;
                            return function () {
                              return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
                            };
                          }
                          throw new TypeError(
                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                          );
                        })(r);
                      !(o = n()).done;

                    ) {
                      var a = o.value,
                        i = t.children[Math.min(a, t.children.length - 1)];
                      if (!i) break;
                      t = i;
                    }
                    return Oe(t) && Ee(t) ? t : Be(e, t, !0) || Se(e, t);
                  })(this._root.current, this._lastIndexPath);
                  r ? (this.setActiveElement(r, !0), r.focus(), this.setParkedFocus(!1)) : this.setParkedFocus(!0);
                }
              }
            }),
            (o.componentWillUnmount = function () {
              delete He[this._id],
                Te.unregister(this.windowElement, this),
                this._isInnerZone ||
                  (this.windowElement &&
                    !Te.getOutZone(this.windowElement) &&
                    this.windowElement.removeEventListener('keydown', Ve, !0)),
                this._root.current && this._root.current.removeEventListener('blur', this._onBlur, !0),
                (this._activeElement = null),
                (this._defaultFocusElement = null);
            }),
            (o.render = function () {
              var e = this.props.className,
                o = Ce(this.props),
                t = ke(B()(r.propTypes), this.props);
              return (
                this.evaluateFocusBeforeRender(),
                C.createElement(
                  o,
                  re({}, t, {
                    ref: this.setRef,
                    className: ce()(r.className, e),
                    'data-focuszone-id': this._id,
                    onKeyDown: this._onKeyDown,
                    onFocus: this._onFocus,
                    onMouseDownCapture: this._onMouseDown
                  }),
                  this.props.children
                )
              );
            }),
            (o.focus = function (e) {
              if ((void 0 === e && (e = !1), this._root.current)) {
                if (!e && 'true' === this._root.current.getAttribute(m) && this._isInnerZone) {
                  var r = this.getOwnerZone(this._root.current);
                  if (r !== this._root.current) {
                    var o = He[r.getAttribute(xe)];
                    return !!o && o.focusElement(this._root.current);
                  }
                  return !1;
                }
                if (
                  !e &&
                  this._activeElement &&
                  ye(this._root.current, this._activeElement, Le) &&
                  Oe(this._activeElement)
                )
                  return this._activeElement.focus(), !0;
                var t = this._root.current.firstChild;
                return this.focusElement(Be(this._root.current, t, !0));
              }
              return !1;
            }),
            (o.focusLast = function () {
              if (this._root.current) {
                var e = this._root.current && this._root.current.lastChild;
                return this.focusElement(Se(this._root.current, e, !0, !0, !0));
              }
              return !1;
            }),
            (o.focusElement = function (e, r) {
              var o = this.props.shouldReceiveFocus;
              return !(
                (o && !o(e)) ||
                !e ||
                (this.setActiveElement(e, r), this._activeElement && this._activeElement.focus(), 0)
              );
            }),
            (o.evaluateFocusBeforeRender = function () {
              if (this._root.current) {
                var e = fe(this._root.current);
                if (e) {
                  var r = e.activeElement;
                  if (r !== this._root.current) {
                    var o = ye(this._root.current, r, Le);
                    this._lastIndexPath = o
                      ? (function (e, r) {
                          for (var o = [], t = r; t && e && t !== e; ) {
                            var n = me(t, !1);
                            if (null === n) return [];
                            o.unshift(Array.prototype.indexOf.call(n.children, t)), (t = n);
                          }
                          return o;
                        })(this._root.current, e.activeElement)
                      : void 0;
                  }
                }
              }
            }),
            (o.setParkedFocus = function (e) {
              this._root.current &&
                this._isParked !== e &&
                ((this._isParked = e),
                e
                  ? (this.props.allowFocusRoot ||
                      ((this._parkedTabIndex = this._root.current.getAttribute('tabindex')),
                      this._root.current.setAttribute('tabindex', '-1')),
                    this._root.current.focus())
                  : this.props.allowFocusRoot ||
                    (this._parkedTabIndex
                      ? (this._root.current.setAttribute('tabindex', this._parkedTabIndex),
                        (this._parkedTabIndex = void 0))
                      : this._root.current.removeAttribute('tabindex')));
            }),
            (o.setActiveElement = function (e, r) {
              var o = this._activeElement;
              (this._activeElement = e),
                o && (Fe(o) && this.updateTabIndexes(o), (o.tabIndex = -1)),
                this._activeElement &&
                  ((this._focusAlignment && !r) || this.setFocusAlignment(e, !0, !0),
                  (this._activeElement.tabIndex = 0));
            }),
            (o.preventDefaultWhenHandled = function (e) {
              this.props.preventDefaultWhenHandled && e.preventDefault();
            }),
            (o.tryInvokeClickForFocusable = function (e, r) {
              var o = e;
              if (o === this._root.current || !this.props.shouldRaiseClicks) return !1;
              do {
                if ('BUTTON' === o.tagName || 'A' === o.tagName || 'INPUT' === o.tagName || 'TEXTAREA' === o.tagName)
                  return !1;
                if (
                  this.isImmediateDescendantOfZone(o) &&
                  'true' === o.getAttribute(m) &&
                  'true' !== o.getAttribute('data-disable-click-on-enter')
                )
                  return Ne(o, r), !0;
                o = me(o, Le);
              } while (o !== this._root.current);
              return !1;
            }),
            (o.getFirstInnerZone = function (e) {
              var r = e || this._activeElement || this._root.current;
              if (!r) return null;
              if (Fe(r)) return He[r.getAttribute(xe)];
              for (var o = r.firstElementChild; o; ) {
                if (Fe(o)) return He[o.getAttribute(xe)];
                var t = this.getFirstInnerZone(o);
                if (t) return t;
                o = o.nextElementSibling;
              }
              return null;
            }),
            (o.moveFocus = function (e, r, o, t) {
              void 0 === t && (t = !0);
              var n = this._activeElement,
                a = -1,
                i = void 0,
                l = !1,
                s = this.props.direction === p.bidirectional;
              if (!n || !this._root.current) return !1;
              if (this.isElementInput(n) && !this.shouldInputLoseFocus(n, e)) return !1;
              var c = s ? n.getBoundingClientRect() : null;
              do {
                if (((n = e ? Be(this._root.current, n) : Se(this._root.current, n)), !s)) {
                  i = n;
                  break;
                }
                if (n) {
                  var d = r(c, n.getBoundingClientRect());
                  if (-1 === d && -1 === a) {
                    i = n;
                    break;
                  }
                  if ((d > -1 && (-1 === a || d < a) && ((a = d), (i = n)), a >= 0 && d < 0)) break;
                }
              } while (n);
              if (i && i !== this._activeElement) (l = !0), this.focusElement(i);
              else if (this.props.isCircularNavigation && t)
                return e
                  ? this.focusElement(Be(this._root.current, this._root.current.firstElementChild, !0))
                  : this.focusElement(Se(this._root.current, this._root.current.lastElementChild, !0, !0, !0));
              return l;
            }),
            (o.moveFocusDown = function () {
              var e = this,
                r = -1,
                o = this._focusAlignment.left;
              return (
                !!this.moveFocus(!0, function (t, n) {
                  var a = -1,
                    i = Math.floor(n.top),
                    l = Math.floor(t.bottom);
                  return i < l
                    ? e.shouldWrapFocus(e._activeElement, Me)
                      ? ze
                      : _e
                    : (((-1 === r && i >= l) || i === r) &&
                        ((r = i), (a = o >= n.left && o <= n.left + n.width ? 0 : Math.abs(n.left + n.width / 2 - o))),
                      a);
                }) && (this.setFocusAlignment(this._activeElement, !0, !0), !0)
              );
            }),
            (o.moveFocusUp = function () {
              var e = this,
                r = -1,
                o = this._focusAlignment.left;
              return (
                !!this.moveFocus(!1, function (t, n) {
                  var a = -1,
                    i = Math.floor(n.bottom),
                    l = Math.floor(n.top),
                    s = Math.floor(t.top);
                  return i > s
                    ? e.shouldWrapFocus(e._activeElement, Me)
                      ? ze
                      : _e
                    : (((-1 === r && i <= s) || l === r) &&
                        ((r = l), (a = o >= n.left && o <= n.left + n.width ? 0 : Math.abs(n.left + n.width / 2 - o))),
                      a);
                }) && (this.setFocusAlignment(this._activeElement, !0, !0), !0)
              );
            }),
            (o.moveFocusLeft = function () {
              var e = this,
                r = this.shouldWrapFocus(this._activeElement, De);
              return (
                !!this.moveFocus(
                  this.props.isRtl,
                  function (o, t) {
                    var n = -1;
                    return (
                      (e.props.isRtl
                        ? parseFloat(t.top.toFixed(3)) < parseFloat(o.bottom.toFixed(3))
                        : parseFloat(t.bottom.toFixed(3)) > parseFloat(o.top.toFixed(3))) &&
                      t.right <= o.right &&
                      e.props.direction !== p.vertical
                        ? (n = o.right - t.right)
                        : r || (n = _e),
                      n
                    );
                  },
                  void 0,
                  r
                ) && (this.setFocusAlignment(this._activeElement, !0, !1), !0)
              );
            }),
            (o.moveFocusRight = function () {
              var e = this,
                r = this.shouldWrapFocus(this._activeElement, De);
              return (
                !!this.moveFocus(
                  !this.props.isRtl,
                  function (o, t) {
                    var n = -1;
                    return (
                      (e.props.isRtl
                        ? parseFloat(t.bottom.toFixed(3)) > parseFloat(o.top.toFixed(3))
                        : parseFloat(t.top.toFixed(3)) < parseFloat(o.bottom.toFixed(3))) &&
                      t.left >= o.left &&
                      e.props.direction !== p.vertical
                        ? (n = t.left - o.left)
                        : r || (n = _e),
                      n
                    );
                  },
                  void 0,
                  r
                ) && (this.setFocusAlignment(this._activeElement, !0, !1), !0)
              );
            }),
            (o.moveFocusPaging = function (e, r) {
              void 0 === r && (r = !0);
              var o = this._activeElement;
              if (!o || !this._root.current) return !1;
              if (this.isElementInput(o) && !this.shouldInputLoseFocus(o, e)) return !1;
              var t = (function (e) {
                for (var r = e, o = fe(e); r && r !== o.body; ) {
                  if ('true' === r.getAttribute(be)) return r;
                  r = r.parentElement;
                }
                for (r = e; r && r !== o.body; ) {
                  if ('false' !== r.getAttribute(be)) {
                    var t = getComputedStyle(r),
                      n = t ? t.getPropertyValue('overflow-y') : '';
                    if (n && ('scroll' === n || 'auto' === n)) return r;
                  }
                  r = r.parentElement;
                }
                return (r && r !== o.body) || (r = pe(e)), r;
              })(o);
              if (!t) return !1;
              var n = -1,
                a = void 0,
                i = -1,
                l = -1,
                s = t.clientHeight,
                c = o.getBoundingClientRect();
              do {
                if ((o = e ? Be(this._root.current, o) : Se(this._root.current, o))) {
                  var d = o.getBoundingClientRect(),
                    u = Math.floor(d.top),
                    f = Math.floor(c.bottom),
                    g = Math.floor(d.bottom),
                    p = Math.floor(c.top),
                    b = this.getHorizontalDistanceFromCenter(e, c, d);
                  if ((e && u > f + s) || (!e && g < p - s)) break;
                  b > -1 &&
                    (e && u > i
                      ? ((i = u), (n = b), (a = o))
                      : !e && g < l
                      ? ((l = g), (n = b), (a = o))
                      : (-1 === n || b <= n) && ((n = b), (a = o)));
                }
              } while (o);
              var m = !1;
              if (a && a !== this._activeElement) (m = !0), this.focusElement(a), this.setFocusAlignment(a, !1, !0);
              else if (this.props.isCircularNavigation && r)
                return e
                  ? this.focusElement(Be(this._root.current, this._root.current.firstElementChild, !0))
                  : this.focusElement(Se(this._root.current, this._root.current.lastElementChild, !0, !0, !0));
              return m;
            }),
            (o.setFocusAlignment = function (e, r, o) {
              if (this.props.direction === p.bidirectional && (!this._focusAlignment || r || o)) {
                var t = e.getBoundingClientRect(),
                  n = t.left + t.width / 2,
                  a = t.top + t.height / 2;
                this._focusAlignment || (this._focusAlignment = { left: n, top: a }),
                  r && (this._focusAlignment.left = n),
                  o && (this._focusAlignment.top = a);
              }
            }),
            (o.isImmediateDescendantOfZone = function (e) {
              return this.getOwnerZone(e) === this._root.current;
            }),
            (o.getOwnerZone = function (e) {
              for (var r = fe(this._root.current), o = me(e, Le); o && o !== this._root.current && o !== r.body; ) {
                if (Fe(o)) return o;
                o = me(o, Le);
              }
              return this._root.current;
            }),
            (o.updateTabIndexes = function (e) {
              var r = e;
              !this._activeElement &&
                this.props.defaultTabbableElement &&
                'function' == typeof this.props.defaultTabbableElement &&
                (this._activeElement = this.props.defaultTabbableElement(this._root.current)),
                !r &&
                  this._root.current &&
                  ((this._defaultFocusElement = null),
                  (r = this._root.current),
                  this._activeElement && !ye(r, this._activeElement, Le) && (this._activeElement = null)),
                this._activeElement && !Oe(this._activeElement) && (this._activeElement = null);
              for (var o = r && r.children, t = 0; o && t < o.length; t++) {
                var n = o[t];
                Fe(n)
                  ? 'true' === n.getAttribute(m) &&
                    (this._isInnerZone ||
                    ((this._activeElement || this._defaultFocusElement) && this._activeElement !== n)
                      ? '-1' !== n.getAttribute(Re) && n.setAttribute(Re, '-1')
                      : ((this._defaultFocusElement = n), '0' !== n.getAttribute(Re) && n.setAttribute(Re, '0')))
                  : (n.getAttribute && 'false' === n.getAttribute(m) && n.setAttribute(Re, '-1'),
                    Oe(n)
                      ? this.props.disabled
                        ? n.setAttribute(Re, '-1')
                        : this._isInnerZone ||
                          ((this._activeElement || this._defaultFocusElement) && this._activeElement !== n)
                        ? '-1' !== n.getAttribute(Re) && n.setAttribute(Re, '-1')
                        : ((this._defaultFocusElement = n), '0' !== n.getAttribute(Re) && n.setAttribute(Re, '0'))
                      : 'svg' === n.tagName &&
                        'false' !== n.getAttribute('focusable') &&
                        n.setAttribute('focusable', 'false')),
                  this.updateTabIndexes(n);
              }
            }),
            (o.isContentEditableElement = function (e) {
              return e && 'true' === e.getAttribute('contenteditable');
            }),
            (o.isElementInput = function (e) {
              return !(
                !e ||
                !e.tagName ||
                ('input' !== e.tagName.toLowerCase() && 'textarea' !== e.tagName.toLowerCase())
              );
            }),
            (o.shouldInputLoseFocus = function (e, r) {
              if (!this._processingTabKey && e && e.type && We.indexOf(e.type.toLowerCase()) > -1) {
                var o = e.selectionStart,
                  t = o !== e.selectionEnd,
                  n = e.value,
                  a = e.readOnly;
                if (
                  t ||
                  (o > 0 && !r && !a) ||
                  (o !== n.length && r && !a) ||
                  (this.props.handleTabKey &&
                    (!this.props.shouldInputLoseFocusOnArrowKey || !this.props.shouldInputLoseFocusOnArrowKey(e)))
                )
                  return !1;
              }
              return !0;
            }),
            (o.shouldWrapFocus = function (e, r) {
              return (
                !this.props.checkForNoWrap ||
                (function (e, r) {
                  return 'true' !== ve(e, r);
                })(e, r)
              );
            }),
            (o.getDocument = function () {
              return fe(this._root.current);
            }),
            r
          );
        })(C.Component);
        (Ze.propTypes = {
          className: de.string,
          direction: de.number,
          defaultTabbableElement: de.func,
          shouldFocusOnMount: de.bool,
          shouldResetActiveElementWhenTabFromZone: de.bool,
          shouldRaiseClicks: de.bool,
          shouldFocusInnerElementWhenReceivedFocus: de.bool,
          disabled: de.bool,
          as: de.elementType,
          isCircularNavigation: de.bool,
          shouldEnterInnerZone: de.func,
          onActiveElementChanged: de.func,
          shouldReceiveFocus: de.func,
          handleTabKey: de.number,
          shouldInputLoseFocusOnArrowKey: de.func,
          stopFocusPropagation: de.bool,
          onFocus: de.func,
          preventDefaultWhenHandled: de.bool,
          isRtl: de.bool,
          preventFocusRestoration: de.bool,
          pagingSupportDisabled: de.bool,
          shouldIgnoreNotFocusable: de.bool,
          innerRef: de.any
        }),
          (Ze.defaultProps = {
            isCircularNavigation: !1,
            direction: p.bidirectional,
            as: 'div',
            preventDefaultWhenHandled: !0,
            shouldRaiseClicks: !1
          }),
          (Ze.displayName = 'FocusZone'),
          (Ze.className = 'ms-FocusZone'),
          (Ze.outerZones = Te);
        var Ue = 'undefined' != typeof window ? C.useLayoutEffect : C.useEffect,
          Ge = function (e, r) {
            void 0 === r && (r = {});
            var o = r,
              t = o.actionHandlers,
              n = (o.debugName, o.mapPropsToBehavior),
              a =
                void 0 === n
                  ? function () {
                      return {};
                    }
                  : n,
              i = o.rtl,
              l = void 0 !== i && i,
              c = (function (e, r, o, t, n) {
                if (null == r) return ee;
                var a = r(o),
                  i =
                    n && a.keyActions
                      ? (function (e, r, o) {
                          var t = {};
                          if (!e || !r) return t;
                          var n = Object.keys(e);
                          return (
                            Object.keys(r).forEach(function (a) {
                              var i = r[a],
                                l = Object.keys(i).filter(function (e) {
                                  var r = i[e],
                                    o = Array.isArray(r.keyCombinations) && r.keyCombinations.length > 0,
                                    t = -1 !== n.indexOf(e);
                                  return o && t;
                                });
                              l.length > 0 &&
                                (t[a] = {
                                  onKeyDown: function (r) {
                                    l.forEach(function (t) {
                                      var n = i[t].keyCombinations;
                                      n &&
                                        (o &&
                                          (n = n.map(function (e) {
                                            var r = Q[e.keyCode];
                                            return r && (e.keyCode = r), e;
                                          })),
                                        (function (e, r) {
                                          return r.some(function (r) {
                                            return (
                                              r.keyCode === s(e) &&
                                              J(e.altKey, r.altKey) &&
                                              J(e.shiftKey, r.shiftKey) &&
                                              J(e.metaKey, r.metaKey) &&
                                              J(e.ctrlKey, r.ctrlKey)
                                            );
                                          });
                                        })(r, n) && e[t](r));
                                    });
                                  }
                                });
                            }),
                            t
                          );
                        })(n, a.keyActions, t)
                      : {};
                return (
                  a.focusZone &&
                    (a.focusZone.props = Object.assign({ preventFocusRestoration: !0 }, a.focusZone.props)),
                  Object.assign({}, ee, a, { keyHandlers: i })
                );
              })(0, e, a(), l, t),
              d = C.useRef(),
              u = C.useRef({}),
              f = C.useRef({});
            Ue(function () {
              d.current = c;
            });
            var g = function (e, r) {
              var o = Boolean(c.keyHandlers[e] || r.onKeyDown),
                t = c.childBehaviors ? c.childBehaviors[e] : void 0;
              return (
                (f.current[e] = r),
                o
                  ? u.current[e] ||
                    (u.current[e] = function (r) {
                      var o,
                        t,
                        n = null == (o = d.current) || null == (t = o.keyHandlers[e]) ? void 0 : t.onKeyDown,
                        a = f.current[e].onKeyDown;
                      n && n(r);
                      for (var i = arguments.length, l = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++)
                        l[s - 1] = arguments[s];
                      a && a.apply(void 0, [r].concat(l));
                    })
                  : delete u.current[e],
                Object.assign({}, t && { accessibility: t }, c.attributes[e], r, { onKeyDown: u.current[e] })
              );
            };
            return (
              (g.unstable_wrapWithFocusZone = function (e) {
                if (c.focusZone) {
                  var r = e;
                  return C.createElement(
                    Ze,
                    Object.assign({}, c.focusZone.props, r.props, { innerRef: r.ref, as: r.type, isRtl: l })
                  );
                }
                return e;
              }),
              (g.unstable_behaviorDefinition = function () {
                return c;
              }),
              g
            );
          },
          Xe = (n(1609), n(3105)),
          Ye = n.n(Xe),
          Ke = new WeakMap(),
          $e = n(4293),
          qe = n.n($e),
          Je = n(8630),
          Qe = n.n(Je),
          er = new WeakMap(),
          rr = new WeakMap(),
          or = function (e) {
            var r = e.primaryDisplayName,
              o = e.telemetry,
              t = null != o && o.enabled ? performance.now() : 0,
              n = (function (e, r, o, t) {
                var n,
                  a = e.filter(function (e) {
                    return !!r.componentVariables[e];
                  });
                if (t) {
                  Ke.has(r) || Ke.set(r, {});
                  var i = Ke.get(r) || {},
                    l = a[a.length - 1];
                  i[l] ||
                    (1 === a.length
                      ? (i[l] = P(r.componentVariables[l])(r.siteVariables))
                      : (i[l] = a.reduce(
                          function (e, o) {
                            return _(e, r.componentVariables[o]);
                          },
                          function () {
                            return {};
                          }
                        )(r.siteVariables)),
                    Ke.set(r, i)),
                    (n = i[l]);
                } else
                  n =
                    1 === a.length
                      ? P(r.componentVariables[a[0]])(r.siteVariables) || {}
                      : a.reduce(
                          function (e, o) {
                            return _(e, r.componentVariables[o]);
                          },
                          function () {
                            return {};
                          }
                        )(r.siteVariables);
                return void 0 === o ? n : _(n, M(o))(r.siteVariables);
              })(e.allDisplayNames, e.theme, e.inlineStylesProps.variables, e.performance.enableVariablesCaching);
            null != o &&
              o.enabled &&
              o.performance[r] &&
              (o.performance[r].msResolveVariablesTotal += performance.now() - t);
            var a = (function (e, r) {
                var o = e.allDisplayNames,
                  t = e.className,
                  n = e.theme,
                  a = e.primaryDisplayName,
                  i = e.componentProps,
                  l = e.inlineStylesProps,
                  s = e.rtl,
                  c = e.disableAnimations,
                  d = e.renderer,
                  u = e.performance,
                  f = e.telemetry,
                  g = l.className,
                  p = l.design,
                  b = l.styles,
                  m = l.variables,
                  h = !(p || b),
                  v = u.enableBooleanVariablesCaching || !m;
                u.enableBooleanVariablesCaching &&
                  (Qe()(m)
                    ? Object.keys(m).every(function (e) {
                        return null === m[e] || void 0 === m[e] || 'boolean' == typeof m[e];
                      }) || (v = !1)
                    : qe()(m) || (v = !1));
                var y,
                  C = u.enableStylesCaching && h && v;
                if (1 === o.length)
                  y = n.componentStyles[o[0]] || {
                    root: function () {
                      return {};
                    }
                  };
                else {
                  var k = o
                    .map(function (e) {
                      return n.componentStyles[e];
                    })
                    .filter(Boolean);
                  y =
                    k.length > 0
                      ? k.reduce(function (e, r) {
                          return z(e, r);
                        }, {})
                      : {
                          root: function () {
                            return {};
                          }
                        };
                }
                h || (y = z(y, z(p && M({ root: p }), b && M({ root: b }))));
                var w = { props: i, variables: r, theme: n, rtl: s, disableAnimations: c },
                  x = {
                    direction: s ? 'rtl' : 'ltr',
                    disableAnimations: c,
                    displayName: o.join(':'),
                    sanitizeCss: u.enableSanitizeCssPlugin
                  },
                  S = {};
                C && n && (rr.has(n) || rr.set(n, {}), er.has(n) || er.set(n, {}));
                var B = C ? JSON.stringify(i) : '',
                  E = C && u.enableBooleanVariablesCaching ? JSON.stringify(m) : '',
                  O = C ? o.join(':') + ':' + B + ':' + E + ':' + w.rtl + w.disableAnimations : '';
                if ('undefined' == typeof Proxy) {
                  var F = {},
                    A = {};
                  return (
                    Object.keys(y).forEach(function (e) {
                      var r = e + '__return',
                        o = O + e;
                      Object.defineProperty(F, e, {
                        enumerable: !1,
                        configurable: !1,
                        set: function (e) {
                          var t;
                          C && n && rr.set(n, Object.assign({}, rr.get(n), (((t = {})[o] = e), t))), (F[r] = e);
                        },
                        get: function () {
                          if (C && n) {
                            var t = rr.get(n) || {};
                            if (t[o]) return t[o];
                          }
                          if (F[r]) return F[r];
                          var i,
                            l = null != f && f.enabled ? performance.now() : 0;
                          return (
                            (F[r] = y[e](w)),
                            C && n && rr.set(n, Object.assign({}, rr.get(n), (((i = {})[o] = F[r]), i))),
                            null != f &&
                              f.enabled &&
                              f.performance[a] &&
                              (f.performance[a].msResolveStylesTotal += performance.now() - l),
                            F[r]
                          );
                        }
                      }),
                        Object.defineProperty(A, e, {
                          enumerable: !1,
                          configurable: !1,
                          set: function (e) {
                            var t;
                            C && n && er.set(n, Object.assign({}, er.get(n), (((t = {})[o] = e), t))), (A[r] = e);
                          },
                          get: function () {
                            if (C && n) {
                              var i = er.get(n) || {};
                              if (i[o] || '' === i[o])
                                return (
                                  null != f &&
                                    f.performance[a] &&
                                    ('root' === e
                                      ? f.performance[a].stylesRootCacheHits++
                                      : f.performance[a].stylesSlotsCacheHits++),
                                  'root' === e ? ce()(t, i[o], g) : i[o]
                                );
                            }
                            if (A[r]) return 'root' === e ? ce()(t, A[r], g) : A[r];
                            var l,
                              s = F[e],
                              c = null != f && f.enabled ? performance.now() : 0;
                            s &&
                              ((A[r] = d.renderRule(s, x)),
                              C && n && er.set(n, Object.assign({}, er.get(n), (((l = {})[o] = A[r]), l))));
                            var u = 'root' === e ? ce()(t, A[r], g) : A[r];
                            return (
                              null != f &&
                                f.enabled &&
                                f.performance[a] &&
                                (f.performance[a].msRenderStylesTotal += performance.now() - c),
                              u
                            );
                          }
                        });
                    }),
                    { resolvedStyles: F, resolvedStylesDebug: S, classes: A }
                  );
                }
                var P = new Proxy(
                    {},
                    {
                      get: function (e, r) {
                        var o,
                          t,
                          i = O + r;
                        if (C && n) {
                          var l = rr.get(n) || {};
                          if (l[i]) return l[i];
                        }
                        if (e[r]) return e[r];
                        var s,
                          c = null != f && f.enabled ? performance.now() : 0;
                        return (
                          (e[r] = null == (o = (t = y)[r]) ? void 0 : o.call(t, w)),
                          C && n && rr.set(n, Object.assign({}, rr.get(n), (((s = {})[i] = e[r]), s))),
                          null != f &&
                            f.enabled &&
                            f.performance[a] &&
                            (f.performance[a].msResolveStylesTotal += performance.now() - c),
                          e[r]
                        );
                      }
                    }
                  ),
                  j = new Proxy(
                    {},
                    {
                      get: function (e, r) {
                        var o = O + r;
                        if (C && n) {
                          var i = er.get(n) || {};
                          if (i[o] || '' === i[o])
                            return (
                              null != f &&
                                f.performance[a] &&
                                ('root' === r
                                  ? f.performance[a].stylesRootCacheHits++
                                  : f.performance[a].stylesSlotsCacheHits++),
                              'root' === r ? ce()(t, i[o], g) : i[o]
                            );
                        }
                        if (e[r]) return 'root' === r ? ce()(t, e[r], g) : e[r];
                        var l,
                          s = P[r],
                          c = null != f && f.enabled ? performance.now() : 0;
                        s &&
                          ((e[r] = d.renderRule(s, x)),
                          C && n && er.set(n, Object.assign({}, er.get(n), (((l = {})[o] = e[r]), l))));
                        var u = 'root' === r ? ce()(t, e[r], g) : e[r];
                        return (
                          null != f &&
                            f.enabled &&
                            f.performance[a] &&
                            (f.performance[a].msRenderStylesTotal += performance.now() - c),
                          u
                        );
                      }
                    }
                  );
                return { resolvedStyles: P, resolvedStylesDebug: S, classes: j };
              })(e, n),
              i = a.classes,
              l = a.resolvedStyles;
            return a.resolvedStylesDebug, { classes: i, variables: n, styles: l, theme: e.theme };
          },
          tr = function (e, r) {
            var o,
              t = Y(),
              n = r.className,
              a = void 0 === n ? '' : n,
              i = r.composeOptions,
              l = r.mapPropsToStyles,
              s =
                void 0 === l
                  ? function () {
                      return {};
                    }
                  : l,
              c = r.mapPropsToInlineStyles,
              d =
                void 0 === c
                  ? function () {
                      return {};
                    }
                  : c,
              u = r.unstable_props,
              f = void 0 === u ? {} : u,
              g = r.rtl,
              p = void 0 !== g && g,
              b = s(),
              m = Object.assign({}, f, b),
              h =
                null == i || null == (o = i.mapPropsToStylesPropsChain)
                  ? void 0
                  : o.reduce(function (e, r) {
                      return Object.assign({}, e, r(m));
                    }, {}),
              v = C.useRef({ fluentUIDebug: null }),
              y = or({
                allDisplayNames: (null == i ? void 0 : i.displayNames) || [e],
                className: (null == i ? void 0 : i.className) || a,
                primaryDisplayName: (null == i ? void 0 : i.displayName) || e,
                componentProps: Object.assign({}, b, h),
                inlineStylesProps: d(),
                disableAnimations: t.disableAnimations,
                renderer: t.renderer,
                rtl: p,
                saveDebug: function (e) {
                  return (v.current = { fluentUIDebug: e });
                },
                theme: t.theme,
                performance: t.performance,
                telemetry: t.telemetry
              });
            return { classes: y.classes, styles: y.styles };
          };
        function nr(e, r) {
          return ke(e, r);
        }
        n(1966), n(2742), n(3218), n(8718);
        var ar = n(3560),
          ir = n.n(ar),
          lr = n(9693),
          sr = n.n(lr),
          cr = n(8804),
          dr = n.n(cr),
          ur =
            (n(3632),
            n(2297),
            n(9734),
            n(9572),
            n(8306),
            function (e) {
              return Object.prototype.toString.call(e);
            }),
          fr = function (e, r) {
            if (void 0 !== e[r]) {
              if (null === e[r]) return null;
              if (!(e[r] instanceof Element))
                return new Error('Invalid prop "' + r + '" supplied, expected a DOM node.');
            }
          },
          gr = function (e) {
            return function (r, o, t) {
              if (!Array.isArray(e))
                throw new Error(
                  [
                    'Invalid argument supplied to disallow, expected an instance of array.',
                    ' See `' + o + '` prop in `' + t + '`.'
                  ].join('')
                );
              if (!qe()(r[o]) && !1 !== r[o]) {
                var n = e.reduce(function (e, o) {
                  return qe()(r[o]) || !1 === r[o] ? e : [].concat(e, [o]);
                }, []);
                return n.length > 0
                  ? new Error(
                      [
                        'Prop `' + o + '` in `' + t + '` conflicts with props: `' + n.join('`, `') + '`.',
                        'They cannot be defined together, choose one or the other.'
                      ].join(' ')
                    )
                  : void 0;
              }
            };
          },
          pr = function (e) {
            return function (r, o, t) {
              for (var n = arguments.length, a = new Array(n > 3 ? n - 3 : 0), l = 3; l < n; l++)
                a[l - 3] = arguments[l];
              if (!Array.isArray(e))
                throw new Error(
                  [
                    'Invalid argument supplied to every, expected an instance of array.',
                    'See `' + o + '` prop in `' + t + '`.'
                  ].join(' ')
                );
              return dr()(
                sr()(
                  i()(e, function (e) {
                    if ('function' != typeof e)
                      throw new Error('every() argument "validators" should contain functions, found: ' + ur(e) + '.');
                    return e.apply(void 0, [r, o, t].concat(a));
                  })
                )
              );
            };
          },
          br = pr([gr(['children']), de.node]),
          mr =
            (de.oneOfType([de.node, de.object, de.arrayOf(de.oneOfType([de.node, de.object]))]),
            de.oneOfType([de.node, de.object, de.func])),
          hr = (de.oneOfType([de.object, de.func]), pr([gr(['children']), mr])),
          vr = pr([gr(['children']), mr]),
          yr = function (e) {
            return pr([gr(['children']), de.oneOfType([de.node, de.shape({ kind: de.oneOf(e) }), de.func])]);
          },
          Cr = pr([gr(['children']), de.oneOfType([de.func, de.number, de.object, de.string, de.oneOf([!1])])]),
          kr = (pr([gr(['children']), de.arrayOf(hr)]), pr([gr(['children']), de.arrayOf(vr)])),
          wr = de.func,
          xr = de.oneOf(['smallest', 'smaller', 'small', 'medium', 'large', 'larger', 'largest']),
          Sr = de.oneOf(['start', 'end', 'center', 'justify']),
          Br =
            (de.oneOfType([
              de.shape({
                name: de.string.isRequired,
                delay: de.string,
                direction: de.string,
                duration: de.string,
                fillMode: de.string,
                iterationCount: de.string,
                playState: de.string,
                timingFunction: de.string
              }),
              de.string
            ]),
            de.shape({
              position: de.string,
              display: de.string,
              top: de.string,
              right: de.string,
              bottom: de.string,
              left: de.string,
              padding: de.string,
              paddingTop: de.string,
              paddingRight: de.string,
              paddingBottom: de.string,
              paddingLeft: de.string,
              margin: de.string,
              marginTop: de.string,
              marginRight: de.string,
              marginBottom: de.string,
              marginLeft: de.string,
              width: de.string,
              height: de.string,
              minWidth: de.string,
              maxWidth: de.string,
              minHeight: de.string,
              maxHeight: de.string
            })),
          Er =
            (de.oneOfType([de.func, de.object]),
            function (e) {
              var r = e.condition,
                o = void 0 === r || r,
                t = e.forElements;
              return o &&
                (void 0 === t ? [] : t).some(function (e) {
                  return e && 'string' == typeof e;
                })
                ? { dir: 'auto' }
                : {};
            }),
          Or = function (e) {
            return null != e && ('number' == typeof e ? !isNaN(e) : Array.isArray(e) ? e.length > 0 : !!e);
          },
          Fr = function (e) {
            void 0 === e && (e = {});
            var r = e,
              o = r.accessibility,
              t = void 0 === o || o,
              n = r.as,
              a = void 0 === n || n,
              i = r.children,
              l = void 0 === i ? 'node' : i,
              s = r.className,
              c = void 0 === s || s,
              d = r.color,
              u = void 0 !== d && d,
              f = r.content,
              g = void 0 === f ? 'node' : f,
              p = r.styled,
              b = void 0 === p || p;
            return Object.assign(
              {},
              t && { accessibility: wr },
              a && { as: de.elementType },
              l && { children: 'element' === l ? de.element : de.node },
              c && { className: de.string },
              u && { color: de.string },
              g && { content: 'shorthand' === g ? vr : br },
              b && {
                styles: de.oneOfType([de.object, de.func]),
                variables: de.oneOfType([de.object, de.func]),
                design: Br
              }
            );
          },
          Ar = n(4908),
          Pr = n.n(Ar),
          jr = n(1469),
          Ir = n.n(jr),
          Rr = n(9864),
          Mr = { iframe: 'src', img: 'src', input: 'type' };
        function Dr(e) {
          var r = e.Component,
            o = e.mappedProp,
            t = e.mappedArrayProp,
            n = e.allowsJSX;
          if (!Rr.isValidElementType(r))
            throw new Error('createShorthandFactory() Component must be a string or function.');
          return function (e, a) {
            return zr({ allowsJSX: n, Component: r, mappedProp: o, mappedArrayProp: t, value: e, options: a });
          };
        }
        function zr(e) {
          var r = e.Component,
            o = e.mappedProp,
            t = e.mappedArrayProp,
            n = e.value,
            a = e.options,
            i = void 0 === a ? {} : a,
            l = e.allowsJSX,
            s = void 0 === l || l;
          if (!Rr.isValidElementType(r)) throw new Error('createShorthand() Component must be a string or function.');
          if ((qe()(n) || 'boolean' == typeof n) && !i.render) return null;
          var c = 'string' == typeof n || 'number' == typeof n,
            d = Qe()(n),
            u = Ir()(n),
            f = C.isValidElement(n),
            g = (i.defaultProps && i.defaultProps()) || {},
            p = (f && {}) || (d && n) || {},
            b = 'function' == typeof i.overrideProps ? i.overrideProps(Object.assign({}, g, p)) : i.overrideProps || {},
            m = Object.assign({}, g, p, b),
            h = Mr[b.as || g.as];
          if (
            ((c || f) && (m[h || o || 'children'] = n),
            u && (m[h || t || 'children'] = n),
            g.className || b.className || p.className)
          ) {
            var v = ce()(g.className, b.className, p.className);
            m.className = Pr()(v.split(' ')).join(' ');
          }
          (g.style || b.style || p.style) && (m.style = Object.assign({}, g.style, p.style, b.style)),
            (g.styles || b.styles || p.styles) && (m.styles = Z(g.styles, p.styles, b.styles));
          var y = i.generateKey;
          if ((void 0 === y || y) && qe()(m.key) && (c && (m.key = n), f)) {
            var k = n.key;
            null === k || (m.key = k);
          }
          delete m.kind;
          var w = i.render;
          return w
            ? w(r, m)
            : 'function' == typeof m.children
            ? m.children(r, Object.assign({}, m, { children: void 0 }))
            : !s && f
            ? null
            : c || d || u || f
            ? C.createElement(r, m)
            : null;
        }
        function _r(e, r, o) {
          var t,
            n = e.shorthandConfig || (null == (t = e.fluentComposeConfig) ? void 0 : t.shorthandConfig) || {},
            a = n.mappedProp,
            i = void 0 === a ? 'children' : a,
            l = n.allowsJSX;
          return zr({
            Component: e,
            mappedProp: i,
            allowsJSX: void 0 === l || l,
            mappedArrayProp: n.mappedArrayProp,
            value: r,
            options: o || {}
          });
        }
        var Hr = n(3840),
          Tr =
            'undefined' == typeof window || /ServerSideRendering/.test(window.navigator && window.navigator.userAgent)
              ? C.useEffect
              : C.useLayoutEffect,
          Wr = function (e) {
            var r,
              o = C.createContext({ value: { current: e }, version: { current: -1 }, listeners: [] });
            return (
              (o.Provider =
                ((r = o.Provider),
                function (e) {
                  var o = C.useRef(e.value),
                    t = C.useRef(0),
                    n = C.useRef();
                  return (
                    n.current || (n.current = { value: o, version: t, listeners: [] }),
                    Tr(
                      function () {
                        var r;
                        (o.current = e.value),
                          (t.current += 1),
                          (r = function () {
                            n.current.listeners.forEach(function (r) {
                              r([t.current, e.value]);
                            });
                          }),
                          (0, Hr.unstable_runWithPriority)(Hr.unstable_NormalPriority, r);
                      },
                      [e.value]
                    ),
                    C.createElement(r, { value: n.current }, e.children)
                  );
                })),
              delete o.Consumer,
              o
            );
          },
          Lr = function (e, r) {
            var o = C.useContext(e),
              t = o.value.current,
              n = o.version.current,
              a = o.listeners,
              i = {};
            Object.keys(r).forEach(function (e) {
              i[e] = r[e](t);
            });
            var l = C.useReducer(
                function (e, o) {
                  if (!o) return [t, i];
                  if (o[0] <= n)
                    return Object.keys(r).every(function (r) {
                      return Object.is(e[1][r], i[r]);
                    })
                      ? e
                      : [t, i];
                  try {
                    if (
                      !Object.keys(e[0]).some(function (r) {
                        return !Object.is(e[0][r], o[1][r]);
                      })
                    )
                      return e;
                    var a = {};
                    return (
                      Object.keys(r).forEach(function (e) {
                        a[e] = r[e](o[1]);
                      }),
                      Object.keys(r).every(function (r) {
                        return Object.is(e[1][r], a[r]);
                      })
                        ? e
                        : [o[1], a]
                    );
                  } catch (e) {}
                  return [].concat(e);
                },
                [t, i]
              ),
              s = l[0],
              c = l[1];
            return (
              void 0 !==
                Object.keys(r).find(function (e) {
                  return !Object.is(s[1][e], i[e]);
                }) && c(void 0),
              Tr(
                function () {
                  return (
                    a.push(c),
                    function () {
                      var e = a.indexOf(c);
                      a.splice(e, 1);
                    }
                  );
                },
                [a]
              ),
              s[1]
            );
          },
          Nr = 'comfy',
          Vr = Wr({ density: Nr, behaviors: { item: void 0, message: void 0 } }),
          Zr = Vr.Provider,
          Ur = function (e) {
            return Lr(Vr, e);
          },
          Gr = {
            className: '',
            classes: [],
            displayName: '',
            displayNames: [],
            mapPropsToStylesPropsChain: [],
            render: function () {
              return null;
            },
            handledProps: [],
            overrideStyles: !1,
            slots: {
              __self: function () {
                return null;
              }
            },
            slotProps: [],
            state: function (e) {
              return e;
            },
            resolveSlotProps: function () {
              return {};
            },
            shorthandConfig: {}
          };
        function Xr(e, r) {
          return e.overrideStyles
            ? [e.displayName].filter(Boolean)
            : e.displayName
            ? r.displayNames.concat(e.displayName)
            : r.displayNames;
        }
        const Yr = function (e, r) {
          void 0 === r && (r = {});
          var o = (function (e, r, o) {
              void 0 === o && (o = Gr);
              var t = r.slotProps ? [].concat(o.slotProps, [r.slotProps]) : o.slotProps,
                n = Array.isArray(r.classes) ? r.classes : [r.classes];
              return {
                className: r.className || o.className,
                classes: [].concat(o.classes, n),
                displayName: r.displayName || o.displayName,
                displayNames: Xr(r, o),
                mapPropsToStylesPropsChain: r.mapPropsToStylesProps
                  ? [].concat(o.mapPropsToStylesPropsChain, [r.mapPropsToStylesProps])
                  : o.mapPropsToStylesPropsChain,
                render: 'function' == typeof e ? e : o.render,
                handledProps: [].concat(o.handledProps, r.handledProps || []),
                overrideStyles: r.overrideStyles || !1,
                slots: Object.assign({}, o.slots, r.slots),
                slotProps: t,
                state: function (e, t, n) {
                  return r.state ? r.state(o.state(e, t, n), t, n) : o.state(e, t, n);
                },
                resolveSlotProps: function (e) {
                  return t.reduce(function (r, o) {
                    var t = Object.assign({}, o(e)),
                      n = [].concat(Object.keys(r), Object.keys(t)),
                      a = {};
                    return (
                      n.forEach(function (e) {
                        a[e] || (a[e] = Object.assign({}, r[e], t[e]));
                      }),
                      a
                    );
                  }, {});
                },
                shorthandConfig: Object.assign({}, o.shorthandConfig, r.shorthandConfig)
              };
            })(
              e,
              r,
              (function (e) {
                return !!e.fluentComposeConfig;
              })(e)
                ? e.fluentComposeConfig
                : void 0
            ),
            t = C.forwardRef(function (e, r) {
              return o.render(
                e,
                r,
                Object.assign({}, o, { state: o.state(e, r, o), slots: Object.assign({}, o.slots, { __self: t }) })
              );
            });
          return (
            (t.displayName = o.displayName),
            e.defaultProps && (t.defaultProps = e.defaultProps),
            (t.fluentComposeConfig = o),
            t
          );
        };
        var Kr = (function () {
            var e = Yr(
              function (e, r, o) {
                var t = Y(),
                  n = q(o.displayName, t.telemetry),
                  a = n.setStart,
                  i = n.setEnd;
                a();
                var l = e.accessibility,
                  s = e.className,
                  c = e.design,
                  d = e.styles,
                  u = e.variables,
                  f = e.children,
                  g = e.content,
                  p = Ge(l, { debugName: o.displayName, rtl: t.rtl }),
                  b = tr(o.displayName, {
                    className: o.className,
                    composeOptions: o,
                    mapPropsToInlineStyles: function () {
                      return { className: s, design: c, styles: d, variables: u };
                    },
                    rtl: t.rtl,
                    unstable_props: e
                  }).classes,
                  m = nr(o.handledProps, e),
                  h = Ce(e),
                  v = p.unstable_wrapWithFocusZone(
                    C.createElement(
                      h,
                      p('root', Object.assign({}, Er({ forElements: [f, g] }), { className: b.root, ref: r }, m)),
                      Or(f) ? f : g
                    )
                  );
                return i(), v;
              },
              {
                className: 'ui-box',
                displayName: 'Box',
                handledProps: [
                  'accessibility',
                  'as',
                  'className',
                  'children',
                  'content',
                  'design',
                  'styles',
                  'variables'
                ]
              }
            );
            return (e.propTypes = Fr()), (e.create = Dr({ Component: e })), e;
          })(),
          $r = Wr({ attached: !1 }),
          qr = $r.Provider,
          Jr = 'ui-chat__item__message',
          Qr = 'ui-chat__item__gutter',
          eo = (function () {
            var e = C.forwardRef(function (r, o) {
              var t = Y(),
                n = q(e.displayName, t.telemetry),
                a = n.setStart,
                i = n.setEnd;
              a();
              var l,
                s,
                c = Ur({
                  density: function (e) {
                    return e.density;
                  },
                  accessibility: function (e) {
                    return e.behaviors.item;
                  }
                }),
                d = Object.assign({}, c, r),
                u = d.accessibility,
                f = d.attached,
                g = d.children,
                p = d.className,
                b = d.contentPosition,
                m = d.density,
                h = d.design,
                v = d.gutter,
                y = d.message,
                k = d.styles,
                w = d.variables,
                x = Ge(u, { debugName: e.displayName, rtl: t.rtl }),
                S = tr(e.displayName, {
                  className: 'ui-chat__item',
                  mapPropsToStyles: function () {
                    return { attached: f, contentPosition: b, density: m };
                  },
                  mapPropsToInlineStyles: function () {
                    return { className: p, design: h, styles: k, variables: w };
                  },
                  rtl: t.rtl
                }),
                B = S.classes,
                E = S.styles,
                O = Ce(d),
                F = nr(e.handledProps, d),
                A = C.createElement(
                  O,
                  x('root', Object.assign({ className: B.root, ref: o }, Er({ forElements: [g] }), F)),
                  Or(g)
                    ? g
                    : ((l = Kr.create(v, {
                        defaultProps: function () {
                          return x('gutter', { className: Qr, styles: E.gutter });
                        }
                      })),
                      (s = Kr.create(y, {
                        defaultProps: function () {
                          return x('message', { className: Jr, styles: E.message });
                        }
                      })),
                      C.createElement(
                        qr,
                        { value: { attached: f } },
                        ('start' === b || 'compact' === m) && l,
                        s,
                        'end' === b && 'comfy' === m && l
                      ))
                );
              return i(), A;
            });
            return (
              (e.displayName = 'ChatItem'),
              (e.defaultProps = { as: 'li', contentPosition: 'start', attached: !1 }),
              (e.propTypes = Object.assign({}, Fr({ content: !1 }), {
                attached: de.oneOfType([de.bool, de.oneOf(['top', 'bottom'])]),
                contentPosition: de.oneOf(['start', 'end']),
                density: de.oneOf(['comfy', 'compact']),
                gutter: vr,
                message: vr
              })),
              (e.handledProps = Object.keys(e.propTypes)),
              (e.create = Dr({ Component: e, mappedProp: 'message' })),
              e
            );
          })();
        function ro(e, r) {
          if (null == e) return {};
          var o,
            t,
            n = {},
            a = Object.keys(e);
          for (t = 0; t < a.length; t++) (o = a[t]), r.indexOf(o) >= 0 || (n[o] = e[o]);
          return n;
        }
        var oo = function (e) {
            var r;
            return {
              attributes: {
                wrapper: { role: 'presentation' },
                root:
                  ((r = {
                    role: 'button',
                    tabIndex: 0,
                    'aria-haspopup': e.hasMenu ? 'true' : void 0,
                    'aria-disabled': e.disabled,
                    'aria-label': e['aria-label'],
                    'aria-labelledby': e['aria-labelledby'],
                    'aria-describedby': e['aria-describedby']
                  }),
                  (r['data-is-focusable'] = !0),
                  r)
              },
              keyActions: {
                wrapper: {
                  performClick: { keyCombinations: [{ keyCode: c.Enter }, { keyCode: b }] },
                  closeMenuAndFocusTrigger: { keyCombinations: [{ keyCode: c.Escape }] },
                  openMenu: !e.vertical && { keyCombinations: [{ keyCode: c.ArrowDown }] },
                  doNotNavigateNextParentItem: {
                    keyCombinations:
                      e.hasMenu && e.menuOpen ? [{ keyCode: c.ArrowLeft }, { keyCode: c.ArrowRight }] : null
                  }
                }
              }
            };
          },
          to = function () {
            return {
              attributes: { root: { role: 'toolbar' } },
              focusZone: {
                props: { shouldFocusInnerElementWhenReceivedFocus: !0, direction: p.bidirectionalDomOrder }
              },
              childBehaviors: { item: oo }
            };
          },
          no = function (e) {
            return void 0 === e;
          },
          ao = function (e) {
            var r = C.useState(no(e.defaultValue) ? e.initialValue : e.defaultValue),
              o = r[0],
              t = r[1],
              n = no(e.value) ? o : e.value,
              a = C.useRef(n);
            C.useEffect(
              function () {
                a.current = n;
              },
              [n]
            );
            var i = C.useCallback(function (e) {
              (a.current = 'function' == typeof e ? e(a.current) : e), t(a.current);
            }, []);
            return [n, i];
          };
        function io(e, r) {
          var o = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
          if (o) return (o = o.call(e)).next.bind(o);
          if (
            Array.isArray(e) ||
            (o = (function (e, r) {
              if (e) {
                if ('string' == typeof e) return lo(e, r);
                var o = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  'Object' === o && e.constructor && (o = e.constructor.name),
                  'Map' === o || 'Set' === o
                    ? Array.from(e)
                    : 'Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                    ? lo(e, r)
                    : void 0
                );
              }
            })(e)) ||
            (r && e && 'number' == typeof e.length)
          ) {
            o && (e = o);
            var t = 0;
            return function () {
              return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        function lo(e, r) {
          (null == r || r > e.length) && (r = e.length);
          for (var o = 0, t = new Array(r); o < r; o++) t[o] = e[o];
          return t;
        }
        function so() {
          for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++) r[o] = arguments[o];
          var t = C.useCallback(function (e) {
            t.current = e;
            for (var o, n = io(r); !(o = n()).done; ) {
              var a = o.value;
              'function' == typeof a ? a(e) : a && (a.current = e);
            }
          }, [].concat(r));
          return t;
        }
        var co = n(8768),
          uo = ['children', 'innerRef'],
          fo = (function (e) {
            function r() {
              for (var r, o = arguments.length, t = new Array(o), n = 0; n < o; n++) t[n] = arguments[n];
              return (
                ((r = e.call.apply(e, [this].concat(t)) || this).prevNode = void 0),
                (r.currentNode = void 0),
                (r.state = { kind: null }),
                (r.handleForwardRefOverride = function (e) {
                  var o = r.props,
                    t = o.children,
                    n = o.innerRef;
                  Ie(t.ref, e), Ie(n, e), (r.currentNode = e);
                }),
                (r.handleSelfOverride = function (e) {
                  var o = r.props,
                    t = o.children,
                    n = o.innerRef;
                  Ie(t.props.innerRef, e), Ie(n, e);
                }),
                r
              );
            }
            te(r, e),
              (r.getDerivedStateFromProps = function (e) {
                var o = C.Children.only(e.children);
                return o.type === r ? { kind: 'self' } : Rr.isForwardRef(o) ? { kind: 'forward' } : { kind: 'find' };
              });
            var o = r.prototype;
            return (
              (o.componentDidMount = function () {
                if ('find' === this.state.kind) {
                  var e = co.findDOMNode(this);
                  (this.prevNode = e), Ie(this.props.innerRef, e);
                }
              }),
              (o.componentDidUpdate = function (e) {
                if ('forward' === this.state.kind)
                  e.innerRef !== this.props.innerRef && Ie(this.props.innerRef, this.currentNode);
                else if ('find' === this.state.kind) {
                  var r = co.findDOMNode(this),
                    o = this.prevNode !== r,
                    t = e.innerRef !== this.props.innerRef;
                  o && (this.prevNode = r), (o || t) && Ie(this.props.innerRef, r);
                }
              }),
              (o.componentWillUnmount = function () {
                'forward' === this.state.kind
                  ? delete this.currentNode
                  : 'find' === this.state.kind && (Ie(this.props.innerRef, null), delete this.prevNode);
              }),
              (o.render = function () {
                var e = this.props,
                  r = e.children,
                  o = (e.innerRef, ro(e, uo)),
                  t = o && Object.keys(o).length > 0 ? C.cloneElement(r, o) : r;
                return 'find' === this.state.kind
                  ? t
                  : 'forward' === this.state.kind
                  ? C.cloneElement(t, { ref: this.handleForwardRefOverride })
                  : 'self' === this.state.kind
                  ? C.cloneElement(t, { innerRef: this.handleSelfOverride })
                  : null;
              }),
              r
            );
          })(C.Component),
          go = ['popper'];
        function po(e) {
          if ('object' == typeof e && null !== e && !Array.isArray(e)) {
            var r = e,
              o = r.popper;
            return [ro(r, go), o];
          }
          return [e, {}];
        }
        var bo = function e(r) {
            var o =
              r &&
              (function (e) {
                return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
              })(r);
            if (!o) return document.body;
            switch (o.nodeName) {
              case 'HTML':
              case 'BODY':
                return o.ownerDocument.body;
              case '#document':
                return o.body;
            }
            var t = (function (e) {
                return 1 !== e.nodeType ? {} : e.ownerDocument.defaultView.getComputedStyle(e, null);
              })(o),
              n = t.overflow,
              a = t.overflowX,
              i = t.overflowY;
            return /(auto|scroll|overlay)/.test(n + i + a) ? o : e(o);
          },
          mo = function (e) {
            var r = C.useRef(function () {
              throw new Error('Cannot call an event handler while rendering');
            });
            return (
              Ue(
                function () {
                  r.current = e;
                },
                [e]
              ),
              C.useCallback(
                function () {
                  var e = r.current;
                  return e.apply(void 0, arguments);
                },
                [r]
              )
            );
          },
          ho = n(8446),
          vo = n.n(ho);
        function yo(e, r, o) {
          var t = C.useRef(!0),
            n = C.useState(function () {
              return {
                value: e,
                callback: r,
                facade: {
                  get current() {
                    return a.value;
                  },
                  set current(e) {
                    var r = a.value;
                    if (r !== e) {
                      if (((a.value = e), o && t.current)) return;
                      a.callback(e, r);
                    }
                  }
                }
              };
            }),
            a = n[0];
          return (
            Ue(function () {
              t.current = !1;
            }, []),
            (a.callback = r),
            a.facade
          );
        }
        function Co(e) {
          var r = e.getBoundingClientRect();
          return {
            width: r.width,
            height: r.height,
            top: r.top,
            right: r.right,
            bottom: r.bottom,
            left: r.left,
            x: r.left,
            y: r.top
          };
        }
        var ko = 'top',
          wo = 'bottom',
          xo = 'right',
          So = 'left',
          Bo = 'auto',
          Eo = [ko, wo, xo, So],
          Oo = 'start',
          Fo = 'end',
          Ao = 'viewport',
          Po = 'popper',
          jo = Eo.reduce(function (e, r) {
            return e.concat([r + '-' + Oo, r + '-' + Fo]);
          }, []),
          Io = [].concat(Eo, [Bo]).reduce(function (e, r) {
            return e.concat([r, r + '-' + Oo, r + '-' + Fo]);
          }, []),
          Ro = [
            'beforeRead',
            'read',
            'afterRead',
            'beforeMain',
            'main',
            'afterMain',
            'beforeWrite',
            'write',
            'afterWrite'
          ];
        function Mo(e) {
          if ('[object Window]' !== e.toString()) {
            var r = e.ownerDocument;
            return r ? r.defaultView : window;
          }
          return e;
        }
        function Do(e) {
          return e instanceof Mo(e).Element || e instanceof Element;
        }
        function zo(e) {
          return e instanceof Mo(e).HTMLElement || e instanceof HTMLElement;
        }
        function _o(e) {
          return (Do(e) ? e.ownerDocument : e.document).documentElement;
        }
        function Ho(e) {
          var r = Mo(e);
          return { scrollLeft: r.pageXOffset, scrollTop: r.pageYOffset };
        }
        function To(e) {
          return Co(_o(e)).left + Ho(e).scrollLeft;
        }
        function Wo(e) {
          return Mo(e).getComputedStyle(e);
        }
        function Lo(e) {
          return e ? (e.nodeName || '').toLowerCase() : null;
        }
        function No(e) {
          return 'html' === Lo(e) ? e : e.assignedSlot || e.parentNode || e.host || _o(e);
        }
        function Vo(e) {
          var r = Wo(e),
            o = r.overflow,
            t = r.overflowX,
            n = r.overflowY;
          return /auto|scroll|overlay|hidden/.test(o + n + t);
        }
        function Zo(e) {
          return ['html', 'body', '#document'].indexOf(Lo(e)) >= 0
            ? e.ownerDocument.body
            : zo(e) && Vo(e)
            ? e
            : Zo(No(e));
        }
        function Uo(e, r) {
          void 0 === r && (r = []);
          var o = Zo(e),
            t = 'body' === Lo(o),
            n = Mo(o),
            a = t ? [n].concat(n.visualViewport || [], Vo(o) ? o : []) : o,
            i = r.concat(a);
          return t ? i : i.concat(Uo(No(a)));
        }
        function Go(e) {
          return ['table', 'td', 'th'].indexOf(Lo(e)) >= 0;
        }
        function Xo(e) {
          if (!zo(e) || 'fixed' === Wo(e).position) return null;
          var r = e.offsetParent;
          if (r) {
            var o = _o(r);
            if ('body' === Lo(r) && 'static' === Wo(r).position && 'static' !== Wo(o).position) return o;
          }
          return r;
        }
        function Yo(e) {
          for (var r = Mo(e), o = Xo(e); o && Go(o) && 'static' === Wo(o).position; ) o = Xo(o);
          return o && 'body' === Lo(o) && 'static' === Wo(o).position
            ? r
            : o ||
                (function (e) {
                  for (var r = No(e); zo(r) && ['html', 'body'].indexOf(Lo(r)) < 0; ) {
                    var o = Wo(r);
                    if ('none' !== o.transform || 'none' !== o.perspective || (o.willChange && 'auto' !== o.willChange))
                      return r;
                    r = r.parentNode;
                  }
                  return null;
                })(e) ||
                r;
        }
        function Ko(e, r) {
          var o = Boolean(r.getRootNode && r.getRootNode().host);
          if (e.contains(r)) return !0;
          if (o) {
            var t = r;
            do {
              if (t && e.isSameNode(t)) return !0;
              t = t.parentNode || t.host;
            } while (t);
          }
          return !1;
        }
        function $o(e) {
          return Object.assign(
            Object.assign({}, e),
            {},
            { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height }
          );
        }
        function qo(e, r) {
          return r === Ao
            ? $o(
                (function (e) {
                  var r = Mo(e),
                    o = _o(e),
                    t = r.visualViewport,
                    n = o.clientWidth,
                    a = o.clientHeight,
                    i = 0,
                    l = 0;
                  return (
                    t &&
                      ((n = t.width),
                      (a = t.height),
                      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                        ((i = t.offsetLeft), (l = t.offsetTop))),
                    { width: n, height: a, x: i + To(e), y: l }
                  );
                })(e)
              )
            : zo(r)
            ? (function (e) {
                var r = Co(e);
                return (
                  (r.top = r.top + e.clientTop),
                  (r.left = r.left + e.clientLeft),
                  (r.bottom = r.top + e.clientHeight),
                  (r.right = r.left + e.clientWidth),
                  (r.width = e.clientWidth),
                  (r.height = e.clientHeight),
                  (r.x = r.left),
                  (r.y = r.top),
                  r
                );
              })(r)
            : $o(
                (function (e) {
                  var r = _o(e),
                    o = Ho(e),
                    t = e.ownerDocument.body,
                    n = Math.max(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0),
                    a = Math.max(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0),
                    i = -o.scrollLeft + To(e),
                    l = -o.scrollTop;
                  return (
                    'rtl' === Wo(t || r).direction && (i += Math.max(r.clientWidth, t ? t.clientWidth : 0) - n),
                    { width: n, height: a, x: i, y: l }
                  );
                })(_o(e))
              );
        }
        function Jo(e) {
          return e.split('-')[0];
        }
        function Qo(e) {
          return e.split('-')[1];
        }
        function et(e) {
          return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
        }
        function rt(e) {
          var r,
            o = e.reference,
            t = e.element,
            n = e.placement,
            a = n ? Jo(n) : null,
            i = n ? Qo(n) : null,
            l = o.x + o.width / 2 - t.width / 2,
            s = o.y + o.height / 2 - t.height / 2;
          switch (a) {
            case ko:
              r = { x: l, y: o.y - t.height };
              break;
            case wo:
              r = { x: l, y: o.y + o.height };
              break;
            case xo:
              r = { x: o.x + o.width, y: s };
              break;
            case So:
              r = { x: o.x - t.width, y: s };
              break;
            default:
              r = { x: o.x, y: o.y };
          }
          var c = a ? et(a) : null;
          if (null != c) {
            var d = 'y' === c ? 'height' : 'width';
            switch (i) {
              case Oo:
                r[c] = Math.floor(r[c]) - Math.floor(o[d] / 2 - t[d] / 2);
                break;
              case Fo:
                r[c] = Math.floor(r[c]) + Math.ceil(o[d] / 2 - t[d] / 2);
            }
          }
          return r;
        }
        function ot(e) {
          return Object.assign(Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }), e);
        }
        function tt(e, r) {
          return r.reduce(function (r, o) {
            return (r[o] = e), r;
          }, {});
        }
        function nt(e, r) {
          void 0 === r && (r = {});
          var o = r,
            t = o.placement,
            n = void 0 === t ? e.placement : t,
            a = o.boundary,
            i = void 0 === a ? 'clippingParents' : a,
            l = o.rootBoundary,
            s = void 0 === l ? Ao : l,
            c = o.elementContext,
            d = void 0 === c ? Po : c,
            u = o.altBoundary,
            f = void 0 !== u && u,
            g = o.padding,
            p = void 0 === g ? 0 : g,
            b = ot('number' != typeof p ? p : tt(p, Eo)),
            m = d === Po ? 'reference' : Po,
            h = e.elements.reference,
            v = e.rects.popper,
            y = e.elements[f ? m : d],
            C = (function (e, r, o) {
              var t =
                  'clippingParents' === r
                    ? (function (e) {
                        var r = Uo(No(e)),
                          o = ['absolute', 'fixed'].indexOf(Wo(e).position) >= 0 && zo(e) ? Yo(e) : e;
                        return Do(o)
                          ? r.filter(function (e) {
                              return Do(e) && Ko(e, o) && 'body' !== Lo(e);
                            })
                          : [];
                      })(e)
                    : [].concat(r),
                n = [].concat(t, [o]),
                a = n[0],
                i = n.reduce(function (r, o) {
                  var t = qo(e, o);
                  return (
                    (r.top = Math.max(t.top, r.top)),
                    (r.right = Math.min(t.right, r.right)),
                    (r.bottom = Math.min(t.bottom, r.bottom)),
                    (r.left = Math.max(t.left, r.left)),
                    r
                  );
                }, qo(e, a));
              return (i.width = i.right - i.left), (i.height = i.bottom - i.top), (i.x = i.left), (i.y = i.top), i;
            })(Do(y) ? y : y.contextElement || _o(e.elements.popper), i, s),
            k = Co(h),
            w = rt({ reference: k, element: v, strategy: 'absolute', placement: n }),
            x = $o(Object.assign(Object.assign({}, v), w)),
            S = d === Po ? x : k,
            B = {
              top: C.top - S.top + b.top,
              bottom: S.bottom - C.bottom + b.bottom,
              left: C.left - S.left + b.left,
              right: S.right - C.right + b.right
            },
            E = e.modifiersData.offset;
          if (d === Po && E) {
            var O = E[n];
            Object.keys(B).forEach(function (e) {
              var r = [xo, wo].indexOf(e) >= 0 ? 1 : -1,
                o = [ko, wo].indexOf(e) >= 0 ? 'y' : 'x';
              B[e] += O[o] * r;
            });
          }
          return B;
        }
        function at(e, r, o) {
          void 0 === o && (o = !1);
          var t,
            n,
            a = _o(r),
            i = Co(e),
            l = zo(r),
            s = { scrollLeft: 0, scrollTop: 0 },
            c = { x: 0, y: 0 };
          return (
            (l || (!l && !o)) &&
              (('body' !== Lo(r) || Vo(a)) &&
                (s = (t = r) !== Mo(t) && zo(t) ? { scrollLeft: (n = t).scrollLeft, scrollTop: n.scrollTop } : Ho(t)),
              zo(r) ? (((c = Co(r)).x += r.clientLeft), (c.y += r.clientTop)) : a && (c.x = To(a))),
            { x: i.left + s.scrollLeft - c.x, y: i.top + s.scrollTop - c.y, width: i.width, height: i.height }
          );
        }
        function it(e) {
          return { x: e.offsetLeft, y: e.offsetTop, width: e.offsetWidth, height: e.offsetHeight };
        }
        function lt(e) {
          var r = new Map(),
            o = new Set(),
            t = [];
          function n(e) {
            o.add(e.name),
              [].concat(e.requires || [], e.requiresIfExists || []).forEach(function (e) {
                if (!o.has(e)) {
                  var t = r.get(e);
                  t && n(t);
                }
              }),
              t.push(e);
          }
          return (
            e.forEach(function (e) {
              r.set(e.name, e);
            }),
            e.forEach(function (e) {
              o.has(e.name) || n(e);
            }),
            t
          );
        }
        var st = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
        function ct() {
          for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++) r[o] = arguments[o];
          return !r.some(function (e) {
            return !(e && 'function' == typeof e.getBoundingClientRect);
          });
        }
        function dt(e) {
          void 0 === e && (e = {});
          var r = e,
            o = r.defaultModifiers,
            t = void 0 === o ? [] : o,
            n = r.defaultOptions,
            a = void 0 === n ? st : n;
          return function (e, r, o) {
            void 0 === o && (o = a);
            var n,
              i,
              l = {
                placement: 'bottom',
                orderedModifiers: [],
                options: Object.assign(Object.assign({}, st), a),
                modifiersData: {},
                elements: { reference: e, popper: r },
                attributes: {},
                styles: {}
              },
              s = [],
              c = !1,
              d = {
                state: l,
                setOptions: function (o) {
                  u(),
                    (l.options = Object.assign(Object.assign(Object.assign({}, a), l.options), o)),
                    (l.scrollParents = {
                      reference: Do(e) ? Uo(e) : e.contextElement ? Uo(e.contextElement) : [],
                      popper: Uo(r)
                    });
                  var n,
                    i,
                    c = (function (e) {
                      var r = lt(e);
                      return Ro.reduce(function (e, o) {
                        return e.concat(
                          r.filter(function (e) {
                            return e.phase === o;
                          })
                        );
                      }, []);
                    })(
                      ((n = [].concat(t, l.options.modifiers)),
                      (i = n.reduce(function (e, r) {
                        var o = e[r.name];
                        return (
                          (e[r.name] = o
                            ? Object.assign(
                                Object.assign(Object.assign({}, o), r),
                                {},
                                {
                                  options: Object.assign(Object.assign({}, o.options), r.options),
                                  data: Object.assign(Object.assign({}, o.data), r.data)
                                }
                              )
                            : r),
                          e
                        );
                      }, {})),
                      Object.keys(i).map(function (e) {
                        return i[e];
                      }))
                    );
                  return (
                    (l.orderedModifiers = c.filter(function (e) {
                      return e.enabled;
                    })),
                    l.orderedModifiers.forEach(function (e) {
                      var r = e.name,
                        o = e.options,
                        t = void 0 === o ? {} : o,
                        n = e.effect;
                      if ('function' == typeof n) {
                        var a = n({ state: l, name: r, instance: d, options: t });
                        s.push(a || function () {});
                      }
                    }),
                    d.update()
                  );
                },
                forceUpdate: function () {
                  if (!c) {
                    var e = l.elements,
                      r = e.reference,
                      o = e.popper;
                    if (ct(r, o)) {
                      (l.rects = { reference: at(r, Yo(o), 'fixed' === l.options.strategy), popper: it(o) }),
                        (l.reset = !1),
                        (l.placement = l.options.placement),
                        l.orderedModifiers.forEach(function (e) {
                          return (l.modifiersData[e.name] = Object.assign({}, e.data));
                        });
                      for (var t = 0; t < l.orderedModifiers.length; t++)
                        if (!0 !== l.reset) {
                          var n = l.orderedModifiers[t],
                            a = n.fn,
                            i = n.options,
                            s = void 0 === i ? {} : i,
                            u = n.name;
                          'function' == typeof a && (l = a({ state: l, options: s, name: u, instance: d }) || l);
                        } else (l.reset = !1), (t = -1);
                    }
                  }
                },
                update:
                  ((n = function () {
                    return new Promise(function (e) {
                      d.forceUpdate(), e(l);
                    });
                  }),
                  function () {
                    return (
                      i ||
                        (i = new Promise(function (e) {
                          Promise.resolve().then(function () {
                            (i = void 0), e(n());
                          });
                        })),
                      i
                    );
                  }),
                destroy: function () {
                  u(), (c = !0);
                }
              };
            if (!ct(e, r)) return d;
            function u() {
              s.forEach(function (e) {
                return e();
              }),
                (s = []);
            }
            return (
              d.setOptions(o).then(function (e) {
                !c && o.onFirstUpdate && o.onFirstUpdate(e);
              }),
              d
            );
          };
        }
        var ut = { passive: !0 },
          ft = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
        function gt(e) {
          var r,
            o = e.popper,
            t = e.popperRect,
            n = e.placement,
            a = e.offsets,
            i = e.position,
            l = e.gpuAcceleration,
            s = e.adaptive,
            c = (function (e) {
              var r = e.x,
                o = e.y,
                t = window.devicePixelRatio || 1;
              return { x: Math.round(r * t) / t || 0, y: Math.round(o * t) / t || 0 };
            })(a),
            d = c.x,
            u = c.y,
            f = a.hasOwnProperty('x'),
            g = a.hasOwnProperty('y'),
            p = So,
            b = ko,
            m = window;
          if (s) {
            var h = Yo(o);
            h === Mo(o) && (h = _o(o)),
              n === ko && ((b = wo), (u -= h.clientHeight - t.height), (u *= l ? 1 : -1)),
              n === So && ((p = xo), (d -= h.clientWidth - t.width), (d *= l ? 1 : -1));
          }
          var v,
            y = Object.assign({ position: i }, s && ft);
          return l
            ? Object.assign(
                Object.assign({}, y),
                {},
                (((v = {})[b] = g ? '0' : ''),
                (v[p] = f ? '0' : ''),
                (v.transform =
                  (m.devicePixelRatio || 1) < 2
                    ? 'translate(' + d + 'px, ' + u + 'px)'
                    : 'translate3d(' + d + 'px, ' + u + 'px, 0)'),
                v)
              )
            : Object.assign(
                Object.assign({}, y),
                {},
                (((r = {})[b] = g ? u + 'px' : ''), (r[p] = f ? d + 'px' : ''), (r.transform = ''), r)
              );
        }
        const pt = {
          name: 'applyStyles',
          enabled: !0,
          phase: 'write',
          fn: function (e) {
            var r = e.state;
            Object.keys(r.elements).forEach(function (e) {
              var o = r.styles[e] || {},
                t = r.attributes[e] || {},
                n = r.elements[e];
              zo(n) &&
                Lo(n) &&
                (Object.assign(n.style, o),
                Object.keys(t).forEach(function (e) {
                  var r = t[e];
                  !1 === r ? n.removeAttribute(e) : n.setAttribute(e, !0 === r ? '' : r);
                }));
            });
          },
          effect: function (e) {
            var r = e.state,
              o = {
                popper: { position: r.options.strategy, left: '0', top: '0', margin: '0' },
                arrow: { position: 'absolute' },
                reference: {}
              };
            return (
              Object.assign(r.elements.popper.style, o.popper),
              r.elements.arrow && Object.assign(r.elements.arrow.style, o.arrow),
              function () {
                Object.keys(r.elements).forEach(function (e) {
                  var t = r.elements[e],
                    n = r.attributes[e] || {},
                    a = Object.keys(r.styles.hasOwnProperty(e) ? r.styles[e] : o[e]).reduce(function (e, r) {
                      return (e[r] = ''), e;
                    }, {});
                  zo(t) &&
                    Lo(t) &&
                    (Object.assign(t.style, a),
                    Object.keys(n).forEach(function (e) {
                      t.removeAttribute(e);
                    }));
                });
              }
            );
          },
          requires: ['computeStyles']
        };
        var bt = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
        function mt(e) {
          return e.replace(/left|right|bottom|top/g, function (e) {
            return bt[e];
          });
        }
        var ht = { start: 'end', end: 'start' };
        function vt(e) {
          return e.replace(/start|end/g, function (e) {
            return ht[e];
          });
        }
        const yt = {
          name: 'flip',
          enabled: !0,
          phase: 'main',
          fn: function (e) {
            var r = e.state,
              o = e.options,
              t = e.name;
            if (!r.modifiersData[t]._skip) {
              for (
                var n = o.mainAxis,
                  a = void 0 === n || n,
                  i = o.altAxis,
                  l = void 0 === i || i,
                  s = o.fallbackPlacements,
                  c = o.padding,
                  d = o.boundary,
                  u = o.rootBoundary,
                  f = o.altBoundary,
                  g = o.flipVariations,
                  p = void 0 === g || g,
                  b = o.allowedAutoPlacements,
                  m = r.options.placement,
                  h = Jo(m),
                  v =
                    s ||
                    (h !== m && p
                      ? (function (e) {
                          if (Jo(e) === Bo) return [];
                          var r = mt(e);
                          return [vt(e), r, vt(r)];
                        })(m)
                      : [mt(m)]),
                  y = [m].concat(v).reduce(function (e, o) {
                    return e.concat(
                      Jo(o) === Bo
                        ? (function (e, r) {
                            void 0 === r && (r = {});
                            var o = r,
                              t = o.placement,
                              n = o.boundary,
                              a = o.rootBoundary,
                              i = o.padding,
                              l = o.flipVariations,
                              s = o.allowedAutoPlacements,
                              c = void 0 === s ? Io : s,
                              d = Qo(t),
                              u = d
                                ? l
                                  ? jo
                                  : jo.filter(function (e) {
                                      return Qo(e) === d;
                                    })
                                : Eo,
                              f = u.filter(function (e) {
                                return c.indexOf(e) >= 0;
                              });
                            0 === f.length && (f = u);
                            var g = f.reduce(function (r, o) {
                              return (
                                (r[o] = nt(e, { placement: o, boundary: n, rootBoundary: a, padding: i })[Jo(o)]), r
                              );
                            }, {});
                            return Object.keys(g).sort(function (e, r) {
                              return g[e] - g[r];
                            });
                          })(r, {
                            placement: o,
                            boundary: d,
                            rootBoundary: u,
                            padding: c,
                            flipVariations: p,
                            allowedAutoPlacements: b
                          })
                        : o
                    );
                  }, []),
                  C = r.rects.reference,
                  k = r.rects.popper,
                  w = new Map(),
                  x = !0,
                  S = y[0],
                  B = 0;
                B < y.length;
                B++
              ) {
                var E = y[B],
                  O = Jo(E),
                  F = Qo(E) === Oo,
                  A = [ko, wo].indexOf(O) >= 0,
                  P = A ? 'width' : 'height',
                  j = nt(r, { placement: E, boundary: d, rootBoundary: u, altBoundary: f, padding: c }),
                  I = A ? (F ? xo : So) : F ? wo : ko;
                C[P] > k[P] && (I = mt(I));
                var R = mt(I),
                  M = [];
                if (
                  (a && M.push(j[O] <= 0),
                  l && M.push(j[I] <= 0, j[R] <= 0),
                  M.every(function (e) {
                    return e;
                  }))
                ) {
                  (S = E), (x = !1);
                  break;
                }
                w.set(E, M);
              }
              if (x)
                for (
                  var D = function (e) {
                      var r = y.find(function (r) {
                        var o = w.get(r);
                        if (o)
                          return o.slice(0, e).every(function (e) {
                            return e;
                          });
                      });
                      if (r) return (S = r), 'break';
                    },
                    z = p ? 3 : 1;
                  z > 0 && 'break' !== D(z);
                  z--
                );
              r.placement !== S && ((r.modifiersData[t]._skip = !0), (r.placement = S), (r.reset = !0));
            }
          },
          requiresIfExists: ['offset'],
          data: { _skip: !1 }
        };
        function Ct(e, r, o) {
          return Math.max(e, Math.min(r, o));
        }
        const kt = {
            name: 'preventOverflow',
            enabled: !0,
            phase: 'main',
            fn: function (e) {
              var r = e.state,
                o = e.options,
                t = e.name,
                n = o.mainAxis,
                a = void 0 === n || n,
                i = o.altAxis,
                l = void 0 !== i && i,
                s = o.boundary,
                c = o.rootBoundary,
                d = o.altBoundary,
                u = o.padding,
                f = o.tether,
                g = void 0 === f || f,
                p = o.tetherOffset,
                b = void 0 === p ? 0 : p,
                m = nt(r, { boundary: s, rootBoundary: c, padding: u, altBoundary: d }),
                h = Jo(r.placement),
                v = Qo(r.placement),
                y = !v,
                C = et(h),
                k = 'x' === C ? 'y' : 'x',
                w = r.modifiersData.popperOffsets,
                x = r.rects.reference,
                S = r.rects.popper,
                B =
                  'function' == typeof b
                    ? b(Object.assign(Object.assign({}, r.rects), {}, { placement: r.placement }))
                    : b,
                E = { x: 0, y: 0 };
              if (w) {
                if (a) {
                  var O = 'y' === C ? ko : So,
                    F = 'y' === C ? wo : xo,
                    A = 'y' === C ? 'height' : 'width',
                    P = w[C],
                    j = w[C] + m[O],
                    I = w[C] - m[F],
                    R = g ? -S[A] / 2 : 0,
                    M = v === Oo ? x[A] : S[A],
                    D = v === Oo ? -S[A] : -x[A],
                    z = r.elements.arrow,
                    _ = g && z ? it(z) : { width: 0, height: 0 },
                    H = r.modifiersData['arrow#persistent']
                      ? r.modifiersData['arrow#persistent'].padding
                      : { top: 0, right: 0, bottom: 0, left: 0 },
                    T = H[O],
                    W = H[F],
                    L = Ct(0, x[A], _[A]),
                    N = y ? x[A] / 2 - R - L - T - B : M - L - T - B,
                    V = y ? -x[A] / 2 + R + L + W + B : D + L + W + B,
                    Z = r.elements.arrow && Yo(r.elements.arrow),
                    U = Z ? ('y' === C ? Z.clientTop || 0 : Z.clientLeft || 0) : 0,
                    G = r.modifiersData.offset ? r.modifiersData.offset[r.placement][C] : 0,
                    X = w[C] + N - G - U,
                    Y = w[C] + V - G,
                    K = Ct(g ? Math.min(j, X) : j, P, g ? Math.max(I, Y) : I);
                  (w[C] = K), (E[C] = K - P);
                }
                if (l) {
                  var $ = 'x' === C ? ko : So,
                    q = 'x' === C ? wo : xo,
                    J = w[k],
                    Q = Ct(J + m[$], J, J - m[q]);
                  (w[k] = Q), (E[k] = Q - J);
                }
                r.modifiersData[t] = E;
              }
            },
            requiresIfExists: ['offset']
          },
          wt = {
            name: 'arrow',
            enabled: !0,
            phase: 'main',
            fn: function (e) {
              var r,
                o = e.state,
                t = e.name,
                n = o.elements.arrow,
                a = o.modifiersData.popperOffsets,
                i = Jo(o.placement),
                l = et(i),
                s = [So, xo].indexOf(i) >= 0 ? 'height' : 'width';
              if (n && a) {
                var c = o.modifiersData[t + '#persistent'].padding,
                  d = it(n),
                  u = 'y' === l ? ko : So,
                  f = 'y' === l ? wo : xo,
                  g = o.rects.reference[s] + o.rects.reference[l] - a[l] - o.rects.popper[s],
                  p = a[l] - o.rects.reference[l],
                  b = Yo(n),
                  m = b ? ('y' === l ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
                  h = g / 2 - p / 2,
                  v = c[u],
                  y = m - d[s] - c[f],
                  C = m / 2 - d[s] / 2 + h,
                  k = Ct(v, C, y),
                  w = l;
                o.modifiersData[t] = (((r = {})[w] = k), (r.centerOffset = k - C), r);
              }
            },
            effect: function (e) {
              var r = e.state,
                o = e.options,
                t = e.name,
                n = o.element,
                a = void 0 === n ? '[data-popper-arrow]' : n,
                i = o.padding,
                l = void 0 === i ? 0 : i;
              null != a &&
                ('string' != typeof a || (a = r.elements.popper.querySelector(a))) &&
                Ko(r.elements.popper, a) &&
                ((r.elements.arrow = a),
                (r.modifiersData[t + '#persistent'] = { padding: ot('number' != typeof l ? l : tt(l, Eo)) }));
            },
            requires: ['popperOffsets'],
            requiresIfExists: ['preventOverflow']
          };
        function xt(e, r, o) {
          return (
            void 0 === o && (o = { x: 0, y: 0 }),
            {
              top: e.top - r.height - o.y,
              right: e.right - r.width + o.x,
              bottom: e.bottom - r.height + o.y,
              left: e.left - r.width - o.x
            }
          );
        }
        function St(e) {
          return [ko, xo, wo, So].some(function (r) {
            return e[r] >= 0;
          });
        }
        var Bt = dt({
            defaultModifiers: [
              {
                name: 'eventListeners',
                enabled: !0,
                phase: 'write',
                fn: function () {},
                effect: function (e) {
                  var r = e.state,
                    o = e.instance,
                    t = e.options,
                    n = t.scroll,
                    a = void 0 === n || n,
                    i = t.resize,
                    l = void 0 === i || i,
                    s = Mo(r.elements.popper),
                    c = [].concat(r.scrollParents.reference, r.scrollParents.popper);
                  return (
                    a &&
                      c.forEach(function (e) {
                        e.addEventListener('scroll', o.update, ut);
                      }),
                    l && s.addEventListener('resize', o.update, ut),
                    function () {
                      a &&
                        c.forEach(function (e) {
                          e.removeEventListener('scroll', o.update, ut);
                        }),
                        l && s.removeEventListener('resize', o.update, ut);
                    }
                  );
                },
                data: {}
              },
              {
                name: 'popperOffsets',
                enabled: !0,
                phase: 'read',
                fn: function (e) {
                  var r = e.state,
                    o = e.name;
                  r.modifiersData[o] = rt({
                    reference: r.rects.reference,
                    element: r.rects.popper,
                    strategy: 'absolute',
                    placement: r.placement
                  });
                },
                data: {}
              },
              {
                name: 'computeStyles',
                enabled: !0,
                phase: 'beforeWrite',
                fn: function (e) {
                  var r = e.state,
                    o = e.options,
                    t = o.gpuAcceleration,
                    n = void 0 === t || t,
                    a = o.adaptive,
                    i = void 0 === a || a,
                    l = {
                      placement: Jo(r.placement),
                      popper: r.elements.popper,
                      popperRect: r.rects.popper,
                      gpuAcceleration: n
                    };
                  null != r.modifiersData.popperOffsets &&
                    (r.styles.popper = Object.assign(
                      Object.assign({}, r.styles.popper),
                      gt(
                        Object.assign(
                          Object.assign({}, l),
                          {},
                          { offsets: r.modifiersData.popperOffsets, position: r.options.strategy, adaptive: i }
                        )
                      )
                    )),
                    null != r.modifiersData.arrow &&
                      (r.styles.arrow = Object.assign(
                        Object.assign({}, r.styles.arrow),
                        gt(
                          Object.assign(
                            Object.assign({}, l),
                            {},
                            { offsets: r.modifiersData.arrow, position: 'absolute', adaptive: !1 }
                          )
                        )
                      )),
                    (r.attributes.popper = Object.assign(
                      Object.assign({}, r.attributes.popper),
                      {},
                      { 'data-popper-placement': r.placement }
                    ));
                },
                data: {}
              },
              pt,
              {
                name: 'offset',
                enabled: !0,
                phase: 'main',
                requires: ['popperOffsets'],
                fn: function (e) {
                  var r = e.state,
                    o = e.options,
                    t = e.name,
                    n = o.offset,
                    a = void 0 === n ? [0, 0] : n,
                    i = Io.reduce(function (e, o) {
                      return (
                        (e[o] = (function (e, r, o) {
                          var t = Jo(e),
                            n = [So, ko].indexOf(t) >= 0 ? -1 : 1,
                            a =
                              'function' == typeof o ? o(Object.assign(Object.assign({}, r), {}, { placement: e })) : o,
                            i = a[0],
                            l = a[1];
                          return (
                            (i = i || 0), (l = (l || 0) * n), [So, xo].indexOf(t) >= 0 ? { x: l, y: i } : { x: i, y: l }
                          );
                        })(o, r.rects, a)),
                        e
                      );
                    }, {}),
                    l = i[r.placement],
                    s = l.x,
                    c = l.y;
                  null != r.modifiersData.popperOffsets &&
                    ((r.modifiersData.popperOffsets.x += s), (r.modifiersData.popperOffsets.y += c)),
                    (r.modifiersData[t] = i);
                }
              },
              yt,
              kt,
              wt,
              {
                name: 'hide',
                enabled: !0,
                phase: 'main',
                requiresIfExists: ['preventOverflow'],
                fn: function (e) {
                  var r = e.state,
                    o = e.name,
                    t = r.rects.reference,
                    n = r.rects.popper,
                    a = r.modifiersData.preventOverflow,
                    i = nt(r, { elementContext: 'reference' }),
                    l = nt(r, { altBoundary: !0 }),
                    s = xt(i, t),
                    c = xt(l, n, a),
                    d = St(s),
                    u = St(c);
                  (r.modifiersData[o] = {
                    referenceClippingOffsets: s,
                    popperEscapeOffsets: c,
                    isReferenceHidden: d,
                    hasPopperEscaped: u
                  }),
                    (r.attributes.popper = Object.assign(
                      Object.assign({}, r.attributes.popper),
                      {},
                      { 'data-popper-reference-hidden': d, 'data-popper-escaped': u }
                    ));
                }
              }
            ]
          }),
          Et = 'object' == typeof document && null !== document,
          Ot = 'object' == typeof window && null !== window && window.self === window,
          Ft = function () {
            return Et && Ot;
          };
        function At(e, r) {
          if ('window' === r) return e.ownerDocument.documentElement;
          if ('scrollParent' === r) {
            var o = bo(e);
            return 'BODY' === o.nodeName && (o = e.ownerDocument.documentElement), o;
          }
          return r;
        }
        var Pt,
          jt = {
            name: 'is-intersecting-modifier',
            enabled: !0,
            phase: 'main',
            requires: ['preventOverflow'],
            fn: function (e) {
              var r = e.state,
                o = e.name,
                t = r.rects.popper,
                n = nt(r, { altBoundary: !0 }),
                a = n.top < t.height && n.top > 0,
                i = n.bottom < t.height && n.bottom > 0,
                l = a || i;
              (r.modifiersData[o] = { isIntersecting: l }),
                (r.attributes.popper = Object.assign({}, r.attributes.popper, { 'data-popper-is-intersecting': l }));
            }
          };
        !(function (e) {
          (e.top = 'top'),
            (e.bottom = 'bottom'),
            (e.start = 'start'),
            (e.end = 'end'),
            (e.left = 'left'),
            (e.right = 'right'),
            (e.center = '');
        })(Pt || (Pt = {}));
        var It = function (e, r, o) {
            var t,
              n,
              a,
              i,
              l =
                ((i = 'top' === (n = e) || 'bottom' === n),
                ((a = 'above' === (t = r) || 'below' === t) && i) || (!a && !i) ? 'center' : e),
              s = (function (e) {
                return {
                  above: Pt.top,
                  below: Pt.bottom,
                  before: e ? Pt.right : Pt.left,
                  after: e ? Pt.left : Pt.right
                };
              })(o)[r],
              c = (function (e) {
                return {
                  start: e ? Pt.end : Pt.start,
                  end: e ? Pt.start : Pt.end,
                  top: Pt.start,
                  bottom: Pt.end,
                  center: Pt.center
                };
              })(o)[l];
            return '' + s + (c && '-' + c);
          },
          Rt = function e(r) {
            if (void 0 !== r)
              return Array.isArray(r)
                ? ((r[0] = -1 * r[0]), r)
                : function (o) {
                    return e(r(o));
                  };
          };
        function Mt(e, r) {
          var o,
            t,
            n = e.autoSize,
            a = e.flipBoundary,
            i = e.offset,
            l = e.onStateUpdate,
            s = e.overflowBoundary,
            c = e.rtl,
            d = e.unstable_disableTether,
            u = e.unstable_pinned,
            f = It(e.align, e.position, e.rtl),
            g = e.positionFixed ? 'fixed' : 'absolute',
            p = mo(function (e) {
              var r = e.state;
              l && l(r);
            }),
            b = C.useMemo(
              function () {
                return i ? { name: 'offset', options: { offset: c ? Rt(i) : i } } : null;
              },
              [i, c]
            ),
            m =
              ((o = e.modifiers),
              ((t = C.useRef()).current && vo()(o, t.current.key)) || (t.current = { key: o, value: e.modifiers }),
              t.current.value);
          return C.useCallback(
            function (e, o, t) {
              var i = bo(o),
                l = !!i && i !== i.ownerDocument.body;
              return {
                modifiers: [
                  jt,
                  {
                    name: 'positionStyleFix',
                    enabled: !0,
                    phase: 'afterWrite',
                    effect: function (e) {
                      var o = e.state;
                      return (
                        !1 !== e.instance.isFirstRun &&
                          ((r.current = o.elements.popper.style.position),
                          (o.elements.popper.style.position = 'fixed')),
                        function () {}
                      );
                    },
                    requires: []
                  },
                  { name: 'flip', options: { flipVariations: !0 } },
                  u && { name: 'flip', enabled: !1 },
                  l && { name: 'flip', options: { boundary: 'clippingParents' } },
                  l && { name: 'preventOverflow', options: { boundary: 'clippingParents' } },
                  b
                ]
                  .concat('function' == typeof m ? m(e, o, t) : m, [
                    d && { name: 'preventOverflow', options: { altAxis: 'all' === d, tether: !1 } },
                    a && { name: 'flip', options: { altBoundary: !0, boundary: At(o, a) } },
                    s && { name: 'preventOverflow', options: { altBoundary: !0, boundary: At(o, s) } },
                    { name: 'onUpdate', enabled: !0, phase: 'afterWrite', fn: p },
                    n && {
                      name: 'applyMaxSize',
                      enabled: !0,
                      phase: 'beforeWrite',
                      requiresIfExists: ['offset', 'preventOverflow', 'flip'],
                      options: { altBoundary: !0, boundary: At(o, s) },
                      fn: function (e) {
                        var r = e.state,
                          o = nt(r, e.options),
                          t = r.modifiersData.preventOverflow || { x: 0, y: 0 },
                          a = t.x,
                          i = t.y,
                          l = r.rects.popper,
                          s = l.width,
                          c = l.height,
                          d = r.placement.split('-')[0],
                          u = 'left' === d ? 'left' : 'right',
                          f = 'top' === d ? 'top' : 'bottom',
                          g = 'always' === n || 'width-always' === n || (o[u] > 0 && (!0 === n || 'width' === n)),
                          p = 'always' === n || 'height-always' === n || (o[f] > 0 && (!0 === n || 'height' === n));
                        g && (r.styles.popper.maxWidth = s - o[u] - a + 'px'),
                          p && (r.styles.popper.maxHeight = c - o[f] - i + 'px');
                      }
                    },
                    { name: 'arrow', enabled: !!t, options: { element: t } }
                  ])
                  .filter(Boolean),
                placement: f,
                strategy: g,
                onFirstUpdate: function (e) {
                  return p({ state: e });
                }
              };
            },
            [n, a, b, s, f, g, d, u, m, p, r]
          );
        }
        function Dt(e) {
          void 0 === e && (e = {});
          var r,
            o = e.enabled,
            t = void 0 === o || o,
            n = (r = C.useRef(!0)).current ? ((r.current = !1), !0) : r.current,
            a = C.useRef('absolute'),
            i = Mt(e, a),
            l = C.useRef(null),
            s = mo(function () {
              var e;
              null == (e = l.current) || e.destroy(), (l.current = null);
              var r = null;
              if (
                (Ft() &&
                  t &&
                  c.current &&
                  d.current &&
                  (r = Bt(c.current, d.current, i(c.current, d.current, u.current))),
                r)
              ) {
                var o = r.forceUpdate;
                (r.isFirstRun = !0),
                  (r.forceUpdate = function () {
                    r.isFirstRun && ((r.state.elements.popper.style.position = a.current), (r.isFirstRun = !1)), o();
                  });
              }
              l.current = r;
            }),
            c = yo(null, s, !0),
            d = yo(null, s, !0),
            u = yo(null, s, !0);
          return (
            C.useImperativeHandle(
              e.popperRef,
              function () {
                return {
                  updatePosition: function () {
                    var e;
                    null == (e = l.current) || e.update();
                  }
                };
              },
              []
            ),
            Ue(
              function () {
                return (
                  s(),
                  function () {
                    var e;
                    null == (e = l.current) || e.destroy(), (l.current = null);
                  }
                );
              },
              [e.enabled]
            ),
            Ue(
              function () {
                var e;
                n || null == (e = l.current) || e.setOptions(i(c.current, d.current, u.current));
              },
              [i]
            ),
            { targetRef: c, containerRef: d, arrowRef: u }
          );
        }
        var zt = n(7361),
          _t = n.n(zt),
          Ht = (function () {
            var e = function e(r) {
              var o = Y(),
                t = q(e.displayName, o.telemetry),
                n = t.setStart,
                a = t.setEnd;
              n();
              var i,
                l = r.align,
                s = r.children,
                c = r.className,
                d = r.design,
                u = r.grow,
                f = r.flexDirection,
                g = r.push,
                p = r.shrink,
                b = r.size,
                m = r.styles,
                h = r.variables,
                v = tr(e.displayName, {
                  className: 'ui-flex__item',
                  mapPropsToStyles: function () {
                    return { align: l, grow: u, flexDirection: f, push: g, shrink: p, size: b };
                  },
                  mapPropsToInlineStyles: function () {
                    return { className: c, design: d, styles: m, variables: h };
                  },
                  rtl: o.rtl
                }),
                y = v.classes,
                k = v.styles;
              return (
                (i =
                  'function' == typeof s
                    ? s({ styles: k.root, classes: y.root })
                    : qe()(s)
                    ? null
                    : (function (e, r, o) {
                        return r
                          ? 'string' == typeof e.type
                            ? C.cloneElement(e, { className: ce()(e.props.className, o.root) })
                            : C.cloneElement(e, { styles: Z(r.root || {}, e.props.styles) })
                          : e;
                      })(C.Children.only(s), k, y)),
                a(),
                i
              );
            };
            return (
              (e.displayName = 'FlexItem'),
              (e.propTypes = Object.assign({}, Fr({ children: !1, accessibility: !1, content: !1 }), {
                children: de.oneOfType([de.element, de.func]),
                align: de.oneOf(['auto', 'start', 'end', 'center', 'baseline', 'stretch']),
                size: de.oneOfType([
                  de.oneOf(['size.half', 'size.quarter', 'size.small', 'size.medium', 'size.large']),
                  de.string
                ]),
                shrink: de.oneOfType([de.bool, de.number]),
                push: de.bool,
                flexDirection: de.oneOf(['row', 'column'])
              })),
              (e.__isFlexItem = !0),
              e
            );
          })(),
          Tt = (function () {
            var e = C.forwardRef(function (r, o) {
              var t = Y(),
                n = q(e.displayName, t.telemetry),
                a = n.setStart,
                i = n.setEnd;
              a();
              var l = r.children,
                s = r.className,
                c = r.column,
                d = r.debug,
                u = r.design,
                f = r.fill,
                g = r.gap,
                p = r.hAlign,
                b = r.inline,
                m = r.padding,
                h = r.space,
                v = r.styles,
                y = r.variables,
                k = r.vAlign,
                w = r.wrap,
                x = tr(e.displayName, {
                  className: 'ui-flex',
                  mapPropsToStyles: function () {
                    return {
                      column: c,
                      debug: d,
                      fill: f,
                      gap: g,
                      hAlign: p,
                      inline: b,
                      padding: m,
                      space: h,
                      vAlign: k,
                      wrap: w
                    };
                  },
                  mapPropsToInlineStyles: function () {
                    return { className: s, design: u, styles: v, variables: y };
                  },
                  rtl: t.rtl
                }).classes,
                S = Ce(r),
                B = nr(e.handledProps, r),
                E = C.Children.map(l, function (e) {
                  return _t()(e, 'type.__isFlexItem') ? C.cloneElement(e, { flexDirection: c ? 'column' : 'row' }) : e;
                }),
                O = C.createElement(S, re({ className: x.root }, B, { ref: o }), E);
              return i(), O;
            });
            return (
              (e.displayName = 'Flex'),
              (e.propTypes = Object.assign({}, Fr({ accessibility: !1, content: !1 }), {
                inline: de.bool,
                column: de.bool,
                wrap: de.bool,
                hAlign: de.oneOf(['start', 'center', 'end', 'stretch']),
                vAlign: de.oneOf(['start', 'center', 'end', 'stretch']),
                space: de.oneOf(['around', 'between', 'evenly']),
                gap: de.oneOf(['gap.smaller', 'gap.small', 'gap.medium', 'gap.large']),
                padding: de.oneOf(['padding.medium']),
                fill: de.bool,
                debug: de.bool
              })),
              (e.handledProps = Object.keys(e.propTypes)),
              (e.Item = Ht),
              e
            );
          })(),
          Wt = n(8721),
          Lt = n.n(Wt),
          Nt = function (e) {
            return { attributes: { root: { 'aria-hidden': e.alt || e['aria-label'] ? void 0 : 'true' } } };
          },
          Vt = (function () {
            var e = C.forwardRef(function (r, o) {
              var t = Y(),
                n = q(e.displayName, t.telemetry),
                a = n.setStart,
                i = n.setEnd;
              a();
              var l = r.accessibility,
                s = r.alt,
                c = r['aria-label'],
                d = r.avatar,
                u = r.circular,
                f = r.className,
                g = r.design,
                p = r.fluid,
                b = r.styles,
                m = r.variables,
                h = Ge(l, {
                  debugName: e.displayName,
                  mapPropsToBehavior: function () {
                    return { alt: s, 'aria-label': c };
                  },
                  rtl: t.rtl
                }),
                v = tr(e.displayName, {
                  className: 'ui-image',
                  mapPropsToStyles: function () {
                    return { avatar: d, circular: u, fluid: p };
                  },
                  mapPropsToInlineStyles: function () {
                    return { className: f, design: g, styles: b, variables: m };
                  },
                  rtl: t.rtl
                }).classes,
                y = Ce(r),
                k = nr(e.handledProps, r),
                w = C.createElement(y, h('root', Object.assign({ className: v.root, ref: o }, k)));
              return i(), w;
            });
            return (
              (e.displayName = 'Image'),
              (e.defaultProps = { as: 'img', accessibility: Nt }),
              (e.propTypes = Object.assign({}, Fr({ children: !1, content: !1 }), {
                avatar: de.bool,
                circular: de.bool,
                fluid: de.bool
              })),
              (e.handledProps = Object.keys(e.propTypes)),
              (e.create = Dr({ Component: e, mappedProp: 'src', allowsJSX: !1 })),
              e
            );
          })(),
          Zt = (function () {
            var e = C.forwardRef(function (r, o) {
              var t = Y(),
                n = q(e.displayName, t.telemetry),
                a = n.setStart,
                i = n.setEnd;
              a();
              var l = r.accessibility,
                s = r.children,
                c = r.className,
                d = r.circular,
                u = r.color,
                f = r.content,
                g = r.icon,
                p = r.iconPosition,
                b = r.design,
                m = r.styles,
                h = r.variables,
                v = r.image,
                y = r.imagePosition,
                k = Ge(l, { debugName: e.displayName, rtl: t.rtl }),
                w = tr(e.displayName, {
                  className: 'ui-label',
                  mapPropsToStyles: function () {
                    return {
                      hasActionableIcon: Lt()(g, 'onClick'),
                      hasImage: !!v,
                      hasIcon: !!g,
                      circular: d,
                      color: u,
                      imagePosition: y,
                      iconPosition: p
                    };
                  },
                  mapPropsToInlineStyles: function () {
                    return { className: c, design: b, styles: m, variables: h };
                  },
                  rtl: t.rtl
                }),
                x = w.classes,
                S = w.styles,
                B = Ce(r),
                E = nr(e.handledProps, r);
              if (Or(s)) {
                var O = C.createElement(
                  B,
                  k('root', Object.assign({ className: x.root, ref: o }, Er({ forElements: [s] }), E)),
                  s
                );
                return i(), O;
              }
              var F = Vt.create(v, {
                  defaultProps: function () {
                    return { styles: S.image };
                  }
                }),
                A = Kr.create(g, {
                  defaultProps: function () {
                    return { styles: S.icon };
                  }
                }),
                P = Kr.create(f, {
                  defaultProps: function () {
                    return { styles: S.content };
                  }
                }),
                j = 'start' === y && F,
                I = 'start' === p && A,
                R = 'end' === p && A,
                M = 'end' === y && F,
                D = C.createElement(B, k('root', Object.assign({ className: x.root, ref: o }, E)), j, I, P, R, M);
              return i(), D;
            });
            return (
              (e.displayName = 'Label'),
              (e.propTypes = Object.assign({}, Fr({ color: !0, content: 'shorthand' }), {
                circular: de.bool,
                icon: mr,
                iconPosition: de.oneOf(['start', 'end']),
                image: Cr,
                imagePosition: de.oneOf(['start', 'end']),
                fluid: de.bool
              })),
              (e.handledProps = Object.keys(e.propTypes)),
              (e.defaultProps = { as: 'span', imagePosition: 'start', iconPosition: 'end' }),
              (e.create = Dr({ Component: e, mappedProp: 'content' })),
              e
            );
          })(),
          Ut = n(2628),
          Gt = n.n(Ut),
          Xt = function (e) {
            var r;
            return {
              attributes: {
                wrapper: { role: 'presentation' },
                root:
                  ((r = {
                    role: 'menuitem',
                    tabIndex: 0,
                    'aria-expanded': e.hasMenu ? e.menuOpen || !1 : void 0,
                    'aria-haspopup': e.hasMenu ? 'true' : void 0,
                    'aria-label': e['aria-label'],
                    'aria-labelledby': e['aria-labelledby'],
                    'aria-describedby': e['aria-describedby'],
                    'aria-disabled': e.disabled
                  }),
                  (r['data-is-focusable'] = !0),
                  r)
              },
              keyActions: {
                root: { performClick: { keyCombinations: [{ keyCode: c.Enter }, { keyCode: b }] } },
                wrapper: {
                  closeAllMenus: { keyCombinations: [{ keyCode: c.Enter }, { keyCode: b }] },
                  closeAllMenusAndFocusNextParentItem: { keyCombinations: [{ keyCode: c.ArrowRight }] },
                  closeMenuAndFocusTrigger: { keyCombinations: [{ keyCode: c.Escape }] },
                  closeMenu: { keyCombinations: [{ keyCode: c.ArrowLeft }] },
                  openMenu: { keyCombinations: [{ keyCode: e.vertical ? c.ArrowRight : c.ArrowDown }] }
                }
              }
            };
          },
          Yt = function () {
            return { attributes: { root: { role: 'presentation' } } };
          },
          Kt = function (e) {
            return {
              attributes: { root: { role: 'menu' } },
              focusZone: {
                props: {
                  isCircularNavigation: !0,
                  shouldFocusInnerElementWhenReceivedFocus: !0,
                  direction: e.vertical ? p.vertical : p.horizontal
                }
              },
              childBehaviors: { item: Xt, divider: Yt }
            };
          };
        function $t(e, r) {
          return e && r ? (Qe()(e) && Qe()(r) ? R(e, r) : _(e, r)) : e || r;
        }
        var qt = function (e, r) {
            return 'object' == typeof e && e.kind ? e.kind : r;
          },
          Jt = function () {
            return {
              attributes: { root: { role: 'menu' } },
              focusZone: { props: { isCircularNavigation: !0, shouldFocusOnMount: !0, direction: p.vertical } },
              childBehaviors: { item: Xt }
            };
          },
          Qt = function (e, r) {
            return !!e && !!e[r];
          },
          en = (function () {
            function e(e) {
              return (
                (function (e) {
                  var r = e.capture,
                    o = e.listener,
                    t = e.type,
                    n = e.target,
                    a = e.targetRef,
                    i = C.useRef(o);
                  i.current = o;
                  var l = C.useCallback(function (e) {
                      return i.current(e);
                    }, []),
                    s = C.useRef(void 0);
                  C.useEffect(
                    function () {
                      var e = void 0 === a ? n : a.current,
                        o = (function (e) {
                          var r, o, t;
                          if (e)
                            return 'object' == typeof e.window && e.window === e
                              ? e.event
                              : null !=
                                (r = null == (o = e.ownerDocument) || null == (t = o.defaultView) ? void 0 : t.event)
                              ? r
                              : void 0;
                        })(window),
                        i = function (e) {
                          e !== o ? l(e) : (o = void 0);
                        };
                      return (
                        Qt(e, 'addEventListener') && e.addEventListener(t, i, r),
                        (s.current = setTimeout(function () {
                          o = void 0;
                        }, 1)),
                        function () {
                          clearTimeout(s.current),
                            (o = void 0),
                            Qt(e, 'removeEventListener') && e.removeEventListener(t, i, r);
                        }
                      );
                    },
                    [r, l, n, a, t]
                  );
                })(e),
                null
              );
            }
            return (e.defaultProps = { capture: !1 }), e;
          })(),
          rn = 'fuiframefocus',
          on = n(4174),
          tn = n.n(on),
          nn = n(9704),
          an = n.n(nn),
          ln = function (e, r, o, t) {
            if ((void 0 === o && (o = document), void 0 === t && (t = !0), an()([r, e], qe()))) return !1;
            if (
              r.target &&
              (ae()(r.target, 'setAttribute', 'data-suir-click-target', !0),
              o.querySelector('[data-suir-click-target=true]'))
            )
              return ae()(r.target, 'removeAttribute', 'data-suir-click-target'), ye(e, r.target, t);
            var n = r.clientX,
              a = r.clientY;
            if (an()([n, a], qe())) return !1;
            var i = e.getClientRects();
            if (!(e.offsetWidth && e.offsetHeight && i && i.length)) return !1;
            var l = dr()(i),
              s = l.top,
              c = l.bottom,
              d = l.left,
              u = l.right;
            return !an()([s, c, d, u], qe()) && tn()(a, s, c + 0.001) && tn()(n, d, u + 0.001);
          },
          sn = 'initial',
          cn = null,
          dn = [16, 17, 18, 91, 93],
          un = {
            keydown: 'keyboard',
            keyup: 'keyboard',
            mousedown: 'mouse',
            mousemove: 'mouse',
            MSPointerDown: 'pointer',
            MSPointerMove: 'pointer',
            pointerdown: 'pointer',
            pointermove: 'pointer',
            touchstart: 'touch'
          },
          fn = !1,
          gn = { 2: 'touch', 3: 'touch', 4: 'mouse' },
          pn = !1;
        try {
          var bn = Object.defineProperty({}, 'passive', {
            get: function () {
              pn = !0;
            }
          });
          window.addEventListener('test', null, bn);
        } catch (e) {}
        var mn = function (e) {
            var r = !pn || { passive: !0, capture: !0 };
            e.PointerEvent
              ? e.addEventListener('pointerdown', hn)
              : window.MSPointerEvent
              ? e.addEventListener('MSPointerDown', hn)
              : (e.addEventListener('mousedown', hn, !0),
                'ontouchstart' in e &&
                  (e.addEventListener('touchstart', yn, r), e.addEventListener('touchend', hn, !0))),
              e.addEventListener('keydown', yn, !0),
              e.addEventListener('keyup', yn, !0);
          },
          hn = function (e) {
            if (!fn) {
              var r = e.which,
                o = un[e.type];
              'pointer' === o && (o = Cn(e));
              var t = -1 === dn.indexOf(r);
              sn !== o &&
                (('keyboard' === o && r && t) || 'mouse' === o || 'touch' === o) &&
                ((sn = o), vn(e.view.document));
            }
          },
          vn = function (e) {
            e.documentElement.setAttribute('data-whatinput', sn);
          },
          yn = function (e) {
            hn(e),
              window.clearTimeout(cn),
              (fn = !0),
              (cn = window.setTimeout(function () {
                fn = !1;
              }, 100));
          },
          Cn = function (e) {
            return 'number' == typeof e.pointerType
              ? gn[e.pointerType]
              : 'pen' === e.pointerType
              ? 'touch'
              : e.pointerType;
          };
        Ft() &&
          'addEventListener' in window &&
          Array.prototype.indexOf &&
          ((un[
            'onwheel' in document.createElement('div')
              ? 'wheel'
              : void 0 !== document.onmousewheel
              ? 'mousewheel'
              : 'DOMMouseScroll'
          ] = 'mouse'),
          mn(window),
          vn(window.document));
        var kn = function (e, r) {
            (sn = r), vn(e);
          },
          wn = (function () {
            var e = C.forwardRef(function (r, o) {
              var t = Y(),
                n = q(e.displayName, t.telemetry),
                a = n.setStart,
                i = n.setEnd;
              a();
              var l = r.className,
                s = r.children,
                c = r.design,
                d = r.styles,
                u = r.variables,
                f = r.content,
                g = r.hasContent,
                p = r.iconOnly,
                b = tr(e.displayName, {
                  className: 'ui-menu__itemicon',
                  mapPropsToStyles: function () {
                    return { hasContent: g, iconOnly: p };
                  },
                  mapPropsToInlineStyles: function () {
                    return { className: l, design: c, styles: d, variables: u };
                  },
                  rtl: t.rtl
                }).classes,
                m = Ge(r.accessibility, { debugName: e.displayName, rtl: t.rtl }),
                h = Ce(r),
                v = nr(e.handledProps, r),
                y = C.createElement(h, m('root', Object.assign({ className: b.root, ref: o }, v)), Or(s) ? s : f);
              return i(), y;
            });
            return (
              (e.displayName = 'MenuItemIcon'),
              (e.defaultProps = { as: 'span' }),
              (e.propTypes = Object.assign({}, Fr(), { hasContent: de.bool, iconOnly: de.bool })),
              (e.handledProps = Object.keys(e.propTypes)),
              (e.shorthandConfig = { mappedProp: 'content' }),
              e
            );
          })(),
          xn = Wr({
            activeIndex: -1,
            vertical: !1,
            variables: {},
            onItemClick: null,
            onItemSelect: null,
            slotProps: { item: {}, divider: {} },
            behaviors: { item: void 0, divider: void 0 }
          }),
          Sn = xn.Provider,
          Bn = (function () {
            var e = C.forwardRef(function (r, o) {
              var t = Y(),
                n = q(e.displayName, t.telemetry),
                a = n.setStart,
                i = n.setEnd;
              a();
              var l = Lr(xn, {
                  vertical: function (e) {
                    return e.vertical;
                  }
                }),
                s = r.className,
                c = r.children,
                d = r.design,
                u = r.styles,
                f = r.variables,
                g = r.content,
                p = r.hasMenu,
                b = r.hasIcon,
                m = r.vertical,
                h = r.inSubmenu,
                v = tr(e.displayName, {
                  className: 'ui-menu__itemcontent',
                  mapPropsToStyles: function () {
                    return { hasMenu: p, hasIcon: b, vertical: m || l.vertical, inSubmenu: h };
                  },
                  mapPropsToInlineStyles: function () {
                    return { className: s, design: d, styles: u, variables: f };
                  },
                  rtl: t.rtl
                }).classes,
                y = Ge(r.accessibility, { debugName: e.displayName, rtl: t.rtl }),
                k = Ce(r),
                w = nr(e.handledProps, r),
                x = C.createElement(
                  k,
                  y('root', Object.assign({ className: v.root }, Er({ forElements: [c, g] }), { ref: o }, w)),
                  Or(c) ? c : g
                );
              return i(), x;
            });
            return (
              (e.displayName = 'MenuItemContent'),
              (e.defaultProps = { as: 'span' }),
              (e.propTypes = Object.assign({}, Fr(), {
                hasIcon: de.bool,
                hasMenu: de.bool,
                vertical: de.bool,
                inSubmenu: de.bool
              })),
              (e.shorthandConfig = { mappedProp: 'content' }),
              (e.handledProps = Object.keys(e.propTypes)),
              e
            );
          })(),
          En = function () {
            return { attributes: { root: { role: 'img', 'aria-hidden': 'true' } } };
          },
          On = (function () {
            var e = C.forwardRef(function (r, o) {
              var t = Y(),
                n = q(e.displayName, t.telemetry),
                a = n.setStart,
                i = n.setEnd;
              a();
              var l = r.className,
                s = r.children,
                c = r.design,
                d = r.styles,
                u = r.variables,
                f = r.content,
                g = r.iconOnly,
                p = r.vertical,
                b = r.inSubmenu,
                m = r.active,
                h = r.primary,
                v = r.underlined,
                y = tr(e.displayName, {
                  className: 'ui-menu__itemindicator',
                  mapPropsToStyles: function () {
                    return { iconOnly: g, vertical: p, inSubmenu: b, active: m, primary: h, underlined: v };
                  },
                  mapPropsToInlineStyles: function () {
                    return { className: l, design: c, styles: d, variables: u };
                  },
                  rtl: t.rtl
                }).classes,
                k = Ge(r.accessibility, { debugName: e.displayName, rtl: t.rtl }),
                w = Ce(r),
                x = nr(e.handledProps, r),
                S = C.createElement(w, k('root', Object.assign({ className: y.root, ref: o }, x)), Or(s) ? s : f);
              return i(), S;
            });
            return (
              (e.displayName = 'MenuItemIndicator'),
              (e.defaultProps = { as: 'span', accessibility: En }),
              (e.propTypes = Object.assign({}, Fr(), {
                iconOnly: de.bool,
                vertical: de.bool,
                inSubmenu: de.bool,
                active: de.bool,
                primary: de.bool,
                underlined: de.bool
              })),
              (e.handledProps = Object.keys(e.propTypes)),
              (e.shorthandConfig = { mappedProp: 'content' }),
              e
            );
          })(),
          Fn = (function () {
            var e = C.forwardRef(function (r, o) {
              var t = Y(),
                n = q(e.displayName, t.telemetry),
                a = n.setStart,
                i = n.setEnd;
              a();
              var l = r.className,
                s = r.children,
                c = r.design,
                d = r.styles,
                u = r.variables,
                f = r.content,
                g = r.active,
                p = r.disabled,
                b = r.iconOnly,
                m = r.isFromKeyboard,
                h = r.pills,
                v = r.pointing,
                y = r.secondary,
                k = r.underlined,
                w = r.vertical,
                x = r.primary,
                S = r.on,
                B = tr(e.displayName, {
                  className: 'ui-menu__itemwrapper',
                  mapPropsToStyles: function () {
                    return {
                      active: g,
                      disabled: p,
                      iconOnly: b,
                      isFromKeyboard: m,
                      pills: h,
                      pointing: v,
                      secondary: y,
                      underlined: k,
                      vertical: w,
                      primary: x,
                      on: S
                    };
                  },
                  mapPropsToInlineStyles: function () {
                    return { className: l, design: c, styles: d, variables: u };
                  },
                  rtl: t.rtl
                }).classes,
                E = Ge(r.accessibility, { debugName: e.displayName, rtl: t.rtl }),
                O = Ce(r),
                F = nr(e.handledProps, r),
                A = C.createElement(O, E('root', Object.assign({ className: B.root, ref: o }, F)), Or(s) ? s : f);
              return i(), A;
            });
            return (
              (e.displayName = 'MenuItemWrapper'),
              (e.defaultProps = { as: 'li' }),
              (e.propTypes = Object.assign({}, Fr(), {
                active: de.bool,
                disabled: de.bool,
                iconOnly: de.bool,
                isFromKeyboard: de.bool,
                pills: de.bool,
                pointing: de.oneOf(['start', 'end', !0, !1]),
                primary: pr([gr(['secondary']), de.bool]),
                secondary: pr([gr(['primary']), de.bool]),
                underlined: de.bool,
                vertical: de.bool,
                on: de.oneOf(['hover'])
              })),
              (e.handledProps = Object.keys(e.propTypes)),
              (e.shorthandConfig = { mappedProp: 'content' }),
              e
            );
          })(),
          An = (function () {
            var e = function (e) {
              var r = 'function' == typeof e.children,
                o = It(e.align, e.position, e.rtl),
                t = C.useRef(o),
                n = C.useState(o),
                a = n[0],
                i = n[1],
                l = C.useRef(null),
                s = Dt(
                  Object.assign({}, e, {
                    popperRef: so(e.popperRef, l),
                    onStateUpdate: function (e) {
                      e.placement !== t.current && ((t.current = e.placement), r && i(e.placement));
                    }
                  })
                ),
                c = s.targetRef,
                d = s.containerRef,
                u = s.arrowRef;
              Ue(function () {
                var r, o;
                (c.current =
                  null !== (o = e.targetRef) && 'object' == typeof o && o.hasOwnProperty('current')
                    ? e.targetRef.current
                    : e.targetRef),
                  (u.current = null == (r = e.pointerTargetRef) ? void 0 : r.current);
              });
              var f = C.useCallback(function () {
                  var e;
                  null == (e = l.current) || e.updatePosition();
                }, []),
                g = r ? e.children({ placement: a, scheduleUpdate: f }) : e.children;
              return g ? C.createElement(fo, { innerRef: d }, C.Children.only(g)) : null;
            };
            return (e.defaultProps = { enabled: !0, modifiers: [], positionFixed: !1, positioningDependencies: [] }), e;
          })(),
          Pn = [
            'bordered',
            'className',
            'circular',
            'design',
            'disabled',
            'outline',
            'size',
            'rotate',
            'styles',
            'variables',
            'xSpacing'
          ],
          jn = function (e) {
            var r = e.svg,
              o = e.displayName,
              t = e.handledProps,
              n = void 0 === t ? [] : t,
              a = function (e) {
                var o = Y(),
                  t = e.alt,
                  a = e['aria-label'],
                  i = e.bordered,
                  l = e.circular,
                  s = e.className,
                  c = e.design,
                  d = e.disabled,
                  u = e.outline,
                  f = e.rotate,
                  g = void 0 === f ? 0 : f,
                  p = e.size,
                  b = void 0 === p ? 'medium' : p,
                  m = e.styles,
                  h = e.variables,
                  v = e.xSpacing,
                  y = tr('SvgIcon', {
                    className: 'ui-icon',
                    mapPropsToStyles: function () {
                      return { bordered: i, circular: l, disabled: d, outline: u, rotate: g, size: b, xSpacing: v };
                    },
                    mapPropsToInlineStyles: function () {
                      return { className: s, design: c, styles: m, variables: h };
                    },
                    rtl: o.rtl
                  }).classes,
                  k = ke([].concat(Pn, n), e);
                return C.createElement(
                  'span',
                  Object.assign(
                    { role: 'img', 'aria-hidden': t || a ? void 0 : 'true', 'aria-label': a, className: y.root },
                    k
                  ),
                  r({ classes: y, rtl: o.rtl, props: e })
                );
              };
            return (a.displayName = o), (a.handledProps = [].concat(Pn, n)), a;
          },
          In = 'ui-icon__filled',
          Rn = 'ui-icon__outline',
          Mn = jn({
            svg: function (e) {
              var r = e.classes;
              return C.createElement(
                'svg',
                { role: 'presentation', focusable: 'false', viewBox: '2 2 16 16', className: r.svgFlippingInRtl },
                C.createElement('path', {
                  className: ce()(Rn, r.outlinePart),
                  d: 'M7.64582 4.14708C7.84073 3.95147 8.15731 3.9509 8.35292 4.14582L13.8374 9.6108C14.0531 9.82574 14.0531 10.1751 13.8374 10.39L8.35292 15.855C8.15731 16.0499 7.84073 16.0493 7.64582 15.8537C7.4509 15.6581 7.45147 15.3415 7.64708 15.1466L12.8117 10.0004L7.64708 4.85418C7.45147 4.65927 7.4509 4.34269 7.64582 4.14708Z'
                }),
                C.createElement('path', {
                  className: ce()(In, r.filledPart),
                  d: 'M7.73271 4.20694C8.03263 3.92125 8.50737 3.93279 8.79306 4.23271L13.7944 9.48318C14.0703 9.77285 14.0703 10.2281 13.7944 10.5178L8.79306 15.7682C8.50737 16.0681 8.03263 16.0797 7.73271 15.794C7.43279 15.5083 7.42125 15.0336 7.70694 14.7336L12.2155 10.0005L7.70694 5.26729C7.42125 4.96737 7.43279 4.49264 7.73271 4.20694Z'
                })
              );
            },
            displayName: 'ChevronEndIcon'
          }),
          Dn = 'ui-menu__item__submenu',
          zn = (function () {
            var e = C.forwardRef(function (r, o) {
              var t = Y(),
                n = q(e.displayName, t.telemetry),
                a = n.setStart,
                i = n.setEnd;
              a();
              var l,
                s,
                c,
                d = Lr(xn, {
                  active: function (e) {
                    return e.activeIndex === r.index;
                  },
                  onItemClick: function (e) {
                    return e.onItemClick;
                  },
                  onItemSelect: function (e) {
                    return e.onItemSelect;
                  },
                  variables: function (e) {
                    return e.variables;
                  },
                  slotProps: function (e) {
                    return e.slotProps.item;
                  },
                  accessibility: function (e) {
                    return e.behaviors.item;
                  }
                }),
                u = Object.assign(
                  {},
                  d.slotProps,
                  { active: d.active, variables: d.variables, accessibility: d.accessibility },
                  r
                ),
                f = u.accessibility,
                g = void 0 === f ? Xt : f,
                p = u.children,
                b = u.content,
                m = u.icon,
                h = u.wrapper,
                v = u.primary,
                y = u.secondary,
                k = u.active,
                w = u.vertical,
                x = u.indicator,
                S = u.disabled,
                B = u.underlined,
                E = u.iconOnly,
                O = u.inSubmenu,
                F = u.pills,
                A = u.pointing,
                P = u.className,
                j = u.design,
                I = u.styles,
                R = u.variables,
                M = u.on,
                D = u.index,
                z = po(u.menu),
                _ = z[0],
                H = z[1],
                T = ao({ defaultValue: u.defaultMenuOpen, value: u.menuOpen, initialValue: !1 }),
                W = T[0],
                L = T[1];
              (l = W),
                (s = t.target),
                (c = function (e) {
                  L(function (r) {
                    return ae()(u, 'onMenuOpenChange', e, Object.assign({}, u, { menuOpen: !1 })), !1;
                  });
                }),
                (function (e, r, o) {
                  void 0 === o && (o = 1e3);
                  var t = C.useRef();
                  C.useEffect(
                    function () {
                      var n;
                      return (
                        e &&
                          (t.current =
                            null == r || null == (n = r.defaultView)
                              ? void 0
                              : n.setInterval(function () {
                                  var e = null == r ? void 0 : r.activeElement;
                                  if (
                                    'IFRAME' === (null == e ? void 0 : e.tagName) ||
                                    'WEBVIEW' === (null == e ? void 0 : e.tagName)
                                  ) {
                                    var o = new CustomEvent(rn, { bubbles: !0 });
                                    e.dispatchEvent(o);
                                  }
                                }, o)),
                        function () {
                          var e;
                          null == r || null == (e = r.defaultView) || e.clearTimeout(t.current);
                        }
                      );
                    },
                    [r, e, o]
                  );
                })(l, s),
                (function (e, r, o) {
                  var t = C.useCallback(
                    function (e) {
                      r && r(e);
                    },
                    [r]
                  );
                  C.useEffect(
                    function () {
                      return (
                        e && (null == o || o.addEventListener(rn, t)),
                        function () {
                          null == o || o.removeEventListener(rn, t);
                        }
                      );
                    },
                    [o, e, t]
                  );
                })(l, c, s);
              var N = C.useState(!1),
                V = N[0],
                Z = N[1],
                U = Ce(u),
                G = nr(e.handledProps, u),
                X = Ge(g, {
                  debugName: Tn.displayName,
                  actionHandlers: {
                    performClick: function (e) {
                      return !e.defaultPrevented && te(e);
                    },
                    openMenu: (function (e) {
                      function r(r) {
                        return e.apply(this, arguments);
                      }
                      return (
                        (r.toString = function () {
                          return e.toString();
                        }),
                        r
                      );
                    })(function (e) {
                      return se(e);
                    }),
                    closeAllMenusAndFocusNextParentItem: function (e) {
                      return ie(e);
                    },
                    closeMenu: (function (e) {
                      function r(r) {
                        return e.apply(this, arguments);
                      }
                      return (
                        (r.toString = function () {
                          return e.toString();
                        }),
                        r
                      );
                    })(function (e) {
                      return le(e);
                    }),
                    closeMenuAndFocusTrigger: function (e) {
                      return le(e, !0);
                    },
                    doNotNavigateNextParentItem: function (e) {
                      e.stopPropagation();
                    },
                    closeAllMenus: (function (e) {
                      function r(r) {
                        return e.apply(this, arguments);
                      }
                      return (
                        (r.toString = function () {
                          return e.toString();
                        }),
                        r
                      );
                    })(function (e) {
                      return ie(e);
                    })
                  },
                  mapPropsToBehavior: function () {
                    return { menuOpen: W, hasMenu: !!_, disabled: S, vertical: w, active: k };
                  },
                  rtl: t.rtl
                }),
                K = tr(e.displayName, {
                  className: 'ui-menu__item',
                  mapPropsToStyles: function () {
                    return {
                      primary: v,
                      underlined: B,
                      active: k,
                      vertical: w,
                      pointing: A,
                      secondary: y,
                      disabled: S,
                      iconOnly: E,
                      pills: F,
                      inSubmenu: O,
                      isFromKeyboard: V
                    };
                  },
                  mapPropsToInlineStyles: function () {
                    return { className: P, design: j, styles: I, variables: $t(d.variables, R) };
                  },
                  rtl: t.rtl
                }),
                $ = K.classes,
                J = K.styles,
                Q = C.useRef(),
                ee = C.useRef(),
                oe = function (e) {
                  ne() && (Q.current.contains(e.target) || de(!1, e));
                },
                te = function (e) {
                  S
                    ? e.preventDefault()
                    : ((function (e) {
                        _ &&
                          (ln(Q.current, e, t.target)
                            ? de(!1, e, function () {
                                return je(ee.current);
                              })
                            : (de(!k || 'hover' === M || !W, e), e.stopPropagation(), e.preventDefault()));
                      })(e),
                      ae()(u, 'onClick', e, u),
                      ae()(d, 'onItemClick', e, u));
                },
                ne = function () {
                  return !(!_ || !W);
                },
                ie = function (e) {
                  ne() &&
                    (de(!1, e, function () {
                      O || je(ee.current);
                    }),
                    O || e.preventDefault());
                },
                le = function (e, r) {
                  if (ne()) {
                    var o = O || u.vertical;
                    de(!1, e, function () {
                      (r || o) && je(ee.current);
                    }),
                      (r || o) && e.stopPropagation();
                  }
                },
                se = function (e) {
                  _ &&
                    !W &&
                    (de(!0, e),
                    ae()(d, 'onItemSelect', e, D),
                    ae()(u, 'onActiveChanged', e, Object.assign({}, u, { active: !0 })),
                    e.stopPropagation(),
                    e.preventDefault());
                },
                ce = Object.assign(
                  {},
                  !h &&
                    Object.assign(
                      { onClick: te },
                      'hover' === M && {
                        onMouseEnter: function (e) {
                          kn(t.target, 'mouse'),
                            de(!0, e),
                            ae()(u, 'onMouseEnter', e, u),
                            ae()(d, 'onItemSelect', e, D);
                        },
                        onMouseLeave: function (e) {
                          de(!1, e), ae()(u, 'onMouseLeave', e, u);
                        }
                      }
                    )
                ),
                de = function (e, r, o) {
                  L(e), o && o(), ae()(u, 'onMenuOpenChange', r, Object.assign({}, u, { menuOpen: e }));
                },
                ue = C.createElement(
                  fo,
                  {
                    innerRef: function (e) {
                      (ee.current = e), Ie(o, e);
                    }
                  },
                  C.createElement(
                    U,
                    re(
                      {},
                      X(
                        'root',
                        Object.assign(
                          {
                            className: $.root,
                            disabled: S,
                            onBlur: function (e) {
                              Z(!1), ae()(u, 'onBlur', e, u);
                            },
                            onFocus: function (e) {
                              Z('keyboard' === sn), ae()(u, 'onFocus', e, u);
                            },
                            onClick: te
                          },
                          G
                        )
                      ),
                      ce
                    ),
                    Or(p)
                      ? p
                      : C.createElement(
                          C.Fragment,
                          null,
                          _r(wn, m, {
                            defaultProps: function () {
                              return X('icon', { hasContent: !!b, iconOnly: E });
                            }
                          }),
                          _r(Bn, b, {
                            defaultProps: function () {
                              return X('content', { hasIcon: !!m, hasMenu: !!_, inSubmenu: O, vertical: w });
                            }
                          }),
                          _ &&
                            _r(On, x, {
                              defaultProps: function () {
                                return X('indicator', {
                                  iconOnly: E,
                                  vertical: w,
                                  inSubmenu: O,
                                  active: k,
                                  primary: v,
                                  underlined: B
                                });
                              }
                            })
                        )
                  )
                ),
                fe =
                  _ && W
                    ? C.createElement(
                        C.Fragment,
                        null,
                        C.createElement(
                          fo,
                          { innerRef: Q },
                          C.createElement(
                            An,
                            re(
                              {
                                align: w ? 'top' : t.rtl ? 'end' : 'start',
                                position: w ? (t.rtl ? 'before' : 'after') : 'below',
                                targetRef: ee
                              },
                              H
                            ),
                            _r(Tn, _, {
                              defaultProps: function () {
                                return {
                                  accessibility: Jt,
                                  className: Dn,
                                  vertical: !0,
                                  primary: u.primary,
                                  secondary: u.secondary,
                                  submenu: !0,
                                  styles: J.menu,
                                  indicator: u.indicator
                                };
                              },
                              overrideProps: function (e) {
                                return {
                                  onClick: function (r) {
                                    te(r), ae()(e, 'onClick', r, u);
                                  }
                                };
                              }
                            })
                          )
                        ),
                        C.createElement(en, {
                          listener: function (e) {
                            ne() && (ln(ee.current, e, t.target) || ln(Q.current, e, t.target) || de(!1, e));
                          },
                          target: t.target,
                          type: 'click'
                        }),
                        C.createElement(en, { listener: oe, target: t.target, type: 'wheel', capture: !0 }),
                        C.createElement(en, { listener: oe, target: t.target, type: 'touchmove', capture: !0 })
                      )
                    : null;
              if (h) {
                var ge = _r(Fn, h, {
                  defaultProps: function () {
                    return X('wrapper', {
                      active: k,
                      disabled: S,
                      iconOnly: E,
                      isFromKeyboard: V,
                      pills: F,
                      pointing: A,
                      secondary: y,
                      underlined: B,
                      vertical: w,
                      primary: v,
                      on: M,
                      variables: R
                    });
                  },
                  overrideProps: function (e) {
                    return Object.assign(
                      { children: C.createElement(C.Fragment, null, ue, fe) },
                      (function (e) {
                        return Object.assign(
                          {
                            onBlur: function (r) {
                              !(function (e) {
                                u.inSubmenu || e.currentTarget.contains(e.relatedTarget) || de(!1, e);
                              })(r),
                                ae()(e, 'onBlur', r, u);
                            }
                          },
                          'hover' === M && {
                            onMouseEnter: function (r) {
                              kn(t.target, 'mouse'),
                                de(!0, r),
                                ae()(e, 'onMouseEnter', r, u),
                                ae()(d, 'onItemSelect', r, D);
                            },
                            onMouseLeave: function (r) {
                              de(!1, r), ae()(e, 'onMouseLeave', r, u);
                            }
                          }
                        );
                      })(e)
                    );
                  }
                });
                return i(), ge;
              }
              return i(), ue;
            });
            return (
              (e.displayName = 'MenuItem'),
              (e.propTypes = Object.assign({}, Fr({ content: 'shorthand' }), {
                active: de.bool,
                disabled: de.bool,
                icon: mr,
                on: de.oneOf(['hover']),
                iconOnly: de.bool,
                index: de.number,
                itemPosition: de.number,
                itemsCount: de.number,
                onClick: de.func,
                onFocus: de.func,
                onBlur: de.func,
                pills: de.bool,
                pointing: de.oneOf(['start', 'end', !0, !1]),
                primary: pr([gr(['secondary']), de.bool]),
                secondary: pr([gr(['primary']), de.bool]),
                underlined: de.bool,
                vertical: de.bool,
                wrapper: de.oneOfType([de.node, de.object]),
                menu: de.oneOfType([vr, kr]),
                menuOpen: de.bool,
                defaultMenuOpen: de.bool,
                onActiveChanged: de.func,
                inSubmenu: de.bool,
                indicator: mr,
                onMenuOpenChange: de.func
              })),
              (e.handledProps = Object.keys(e.propTypes)),
              (e.shorthandConfig = { mappedProp: 'content' }),
              (e.defaultProps = { as: 'a', wrapper: {}, indicator: C.createElement(Mn, { outline: !0 }) }),
              e
            );
          })(),
          _n = (function () {
            var e = C.forwardRef(function (r, o) {
              var t = Y(),
                n = q(e.displayName, t.telemetry),
                a = n.setStart,
                i = n.setEnd;
              a();
              var l = Lr(xn, {
                  variables: function (e) {
                    return e.variables;
                  },
                  slotProps: function (e) {
                    return e.slotProps.divider;
                  },
                  accessibility: function (e) {
                    return e.behaviors.divider;
                  }
                }),
                s = Object.assign({}, l.slotProps, { accessibility: l.accessibility, variables: l.variables }, r),
                c = s.accessibility,
                d = void 0 === c ? Yt : c,
                u = s.children,
                f = s.content,
                g = s.vertical,
                p = s.inSubmenu,
                b = s.pills,
                m = s.pointing,
                h = s.primary,
                v = s.className,
                y = s.design,
                k = s.styles,
                w = s.secondary,
                x = s.variables,
                S = Ge(d, { debugName: e.displayName, rtl: t.rtl }),
                B = tr(e.displayName, {
                  className: 'ui-menu__divider',
                  mapPropsToStyles: function () {
                    return {
                      hasContent: !!f || !!u,
                      pills: b,
                      pointing: m,
                      vertical: g,
                      inSubmenu: p,
                      primary: h,
                      secondary: w
                    };
                  },
                  mapPropsToInlineStyles: function () {
                    return { className: v, design: y, styles: k, variables: $t(x, l.variables) };
                  },
                  rtl: t.rtl,
                  unstable_props: s
                }).classes,
                E = Ce(s),
                O = nr(e.handledProps, s),
                F = C.createElement(
                  E,
                  S('root', Object.assign({ className: B.root }, Er({ forElements: [u, f] }), O, { ref: o })),
                  Or(u) ? u : f
                );
              return i(), F;
            });
            return (
              (e.defaultProps = { as: 'li' }),
              (e.displayName = 'MenuDivider'),
              (e.propTypes = Object.assign({}, Fr(), {
                primary: de.bool,
                secondary: de.bool,
                vertical: de.bool,
                inSubmenu: de.bool,
                pointing: de.oneOf(['start', 'end', !0, !1])
              })),
              (e.handledProps = Object.keys(e.propTypes)),
              (e.shorthandConfig = { mappedProp: 'content' }),
              (e.create = Dr({ Component: e, mappedProp: 'content' })),
              e
            );
          })();
        function Hn(e, r) {
          var o = r[e];
          return C.useMemo(function () {
            return o;
          }, Gt()(o));
        }
        var Tn = (function () {
            var e,
              r = C.forwardRef(function (e, o) {
                var t = Y(),
                  n = q(r.displayName, t.telemetry),
                  a = n.setStart,
                  l = n.setEnd;
                a();
                var s,
                  c,
                  d = e.iconOnly,
                  u = e.items,
                  f = e.pills,
                  g = e.pointing,
                  p = e.primary,
                  b = e.underlined,
                  m = e.vertical,
                  h = e.submenu,
                  v = e.children,
                  y = e.variables,
                  k = e.styles,
                  w = e.fluid,
                  x = e.className,
                  S = e.design,
                  B = e.secondary,
                  E = e.accessibility,
                  O = Ce(e),
                  F = {
                    divider: {
                      inSubmenu: e.submenu,
                      pills: e.pills,
                      pointing: e.pointing,
                      primary: e.primary,
                      secondary: e.secondary,
                      vertical: e.vertical
                    },
                    item: {
                      iconOnly: e.iconOnly,
                      indicator: e.indicator,
                      inSubmenu: e.submenu,
                      pills: e.pills,
                      pointing: e.pointing,
                      primary: e.primary,
                      secondary: e.secondary,
                      vertical: e.vertical,
                      underlined: e.underlined
                    }
                  },
                  A = Hn('item', F),
                  P = Hn('divider', F),
                  j = nr(r.handledProps, e),
                  I = Ge(e.accessibility, {
                    debugName: r.displayName,
                    mapPropsToBehavior: function () {
                      return { vertical: m };
                    },
                    rtl: t.rtl
                  }),
                  R = (function (e) {
                    var r = C.useRef(e);
                    return (
                      C.useEffect(function () {
                        r.current = e;
                      }),
                      r
                    );
                  })(e),
                  M = tr(r.displayName, {
                    className: 'ui-menu',
                    mapPropsToStyles: function () {
                      return {
                        iconOnly: d,
                        fluid: w,
                        pointing: g,
                        pills: f,
                        primary: p,
                        underlined: b,
                        vertical: m,
                        secondary: B,
                        submenu: h
                      };
                    },
                    mapPropsToInlineStyles: function () {
                      return { className: x, design: S, styles: k, variables: y };
                    },
                    rtl: t.rtl,
                    unstable_props: e
                  }).classes,
                  D = ao({ defaultValue: e.defaultActiveIndex, value: e.activeIndex, initialValue: void 0 }),
                  z = D[0],
                  _ = D[1],
                  H = C.useCallback(
                    function (e, r) {
                      ae()(R.current, 'onActiveIndexChange', e, Object.assign({}, R.current, { activeIndex: r })), _(r);
                    },
                    [R, _]
                  ),
                  T = C.useCallback(
                    function (e, r) {
                      var o = r.index;
                      H(e, o), ae()(R.current, 'onItemClick', e, r);
                    },
                    [R, H]
                  ),
                  W = C.useCallback(
                    function (e, r) {
                      H(e, r);
                    },
                    [H]
                  ),
                  L = function (e) {
                    return {
                      onActiveChanged: function (r, o) {
                        var t = o.index;
                        o.active ? H(r, t) : z === t && H(r, null), ae()(e, 'onActiveChanged', r, o);
                      },
                      variables: $t(y, e.variables)
                    };
                  },
                  N = function (e) {
                    return { variables: $t(y, e.variables) };
                  },
                  V = E && E(e).childBehaviors,
                  Z = {
                    activeIndex: +z,
                    onItemClick: T,
                    onItemSelect: W,
                    vertical: m,
                    variables: y,
                    slotProps: { item: A, divider: P },
                    behaviors: { item: null == V ? void 0 : V.item, divider: null == V ? void 0 : V.divider }
                  },
                  U = I.unstable_wrapWithFocusZone(
                    C.createElement(
                      O,
                      I('root', Object.assign({ className: M.root }, Er({ forElements: [v] }), j)),
                      C.createElement(
                        Sn,
                        { value: Z },
                        Or(v)
                          ? v
                          : ((s = Ye()(u, function (e) {
                              return 'divider' !== qt(e, 'item');
                            }).length),
                            (c = 0),
                            i()(u, function (e, r) {
                              return 'divider' === qt(e, 'item')
                                ? _r(_n, e, {
                                    defaultProps: function () {
                                      return I('divider', {});
                                    },
                                    overrideProps: N
                                  })
                                : (c++,
                                  _r(zn, e, {
                                    defaultProps: function () {
                                      return I('item', { index: r, itemPosition: c, itemsCount: s });
                                    },
                                    overrideProps: L
                                  }));
                            }))
                      )
                    )
                  ),
                  G = o ? C.createElement(fo, { innerRef: o }, U) : U;
                return l(), G;
              });
            return (
              (r.displayName = 'Menu'),
              (r.propTypes = Object.assign({}, Fr({ content: !1 }), {
                activeIndex: de.oneOfType([de.number, de.string]),
                defaultActiveIndex: de.oneOfType([de.number, de.string]),
                fluid: de.bool,
                iconOnly: de.bool,
                items: ((e = ['divider', 'item']), pr([gr(['children']), de.arrayOf(yr(e))])),
                onItemClick: de.func,
                onActiveIndexChange: de.func,
                pills: de.bool,
                pointing: de.oneOfType([de.bool, de.oneOf(['start', 'end'])]),
                primary: pr([gr(['secondary']), de.bool]),
                secondary: pr([gr(['primary']), de.bool]),
                underlined: de.bool,
                vertical: de.bool,
                submenu: de.bool,
                indicator: mr
              })),
              (r.handledProps = Object.keys(r.propTypes)),
              (r.defaultProps = { as: 'ul', accessibility: Kt }),
              (r.Item = zn),
              (r.ItemIcon = wn),
              (r.ItemContent = Bn),
              (r.ItemWrapper = Fn),
              (r.ItemIndicator = On),
              (r.Divider = _n),
              (r.create = Dr({ Component: r, mappedArrayProp: 'items' })),
              (r.shorthandConfig = { mappedArrayProp: 'items' }),
              r
            );
          })(),
          Wn = C.createContext(void 0),
          Ln = function () {
            return function () {};
          };
        Wn.Provider;
        var Nn = C.createContext({ className: '' }),
          Vn = (function () {
            var e = function (e) {
              var r,
                o = e.children,
                t = e.mountNode,
                n = C.useContext(Nn).className,
                a = Y(),
                i = a.target,
                l = a.rtl,
                s = null !== (r = C.useContext(Wn)) && void 0 !== r ? r : Ln,
                c = (function (e) {
                  var r = e.className,
                    o = e.rtl,
                    t = e.target,
                    n = C.useMemo(
                      function () {
                        var e = Ft() && t ? t.createElement('div') : null;
                        return e && t.body.appendChild(e), e;
                      },
                      [t]
                    );
                  return (
                    Ue(
                      function () {
                        var e,
                          t = r.split(' ').filter(Boolean);
                        return (
                          n &&
                            ((e = n.classList).add.apply(e, t),
                            o ? n.setAttribute('dir', 'rtl') : n.removeAttribute('dir')),
                          function () {
                            var e;
                            n && ((e = n.classList).remove.apply(e, t), n.removeAttribute('dir'));
                          }
                        );
                      },
                      [r, n, o]
                    ),
                    C.useEffect(
                      function () {
                        return function () {
                          n && t.body.removeChild(n);
                        };
                      },
                      [n, t]
                    ),
                    n
                  );
                })({ className: n, target: i, rtl: l }),
                d = Ft() ? t || c || document.body : null;
              return (
                Ue(
                  function () {
                    return s(c);
                  },
                  [c, s]
                ),
                Ue(function () {
                  return (
                    ae()(e, 'onMount', e),
                    function () {
                      return ae()(e, 'onUnmount', e);
                    }
                  );
                }, []),
                d && co.createPortal(o, d)
              );
            };
            return (
              (e.propTypes = Object.assign(
                {},
                Fr({ accessibility: !1, as: !1, className: !1, content: !1, styled: !1 }),
                { mountNode: fr, onMount: de.func, onUnmount: de.func }
              )),
              e
            );
          })(),
          Zn = (function () {
            var e = C.forwardRef(function (r, o) {
              var t = Y(),
                n = q(e.displayName, t.telemetry),
                a = n.setStart,
                l = n.setEnd;
              a();
              var s = r.children,
                c = r.items,
                d = r.content,
                u = r.className,
                f = r.design,
                g = r.styles,
                p = r.variables,
                b = Ce(r),
                m = nr(e.handledProps, r),
                h = Ge(r.accessibility, { debugName: e.displayName, rtl: t.rtl }),
                v = tr(e.displayName, {
                  className: 'ui-reactions',
                  mapPropsToInlineStyles: function () {
                    return { className: u, design: f, styles: g, variables: p };
                  },
                  rtl: t.rtl
                }),
                y = v.classes,
                k = v.styles,
                w = qe()(c)
                  ? C.createElement(
                      b,
                      re({}, h('root', Object.assign({ className: y.root, ref: o }, m)), Er({ forElements: [s, d] })),
                      Or(s) ? s : d
                    )
                  : C.createElement(
                      b,
                      re({}, m, { className: y.root }),
                      i()(c, function (e) {
                        return Xn.create(e, {
                          defaultProps: function () {
                            return { styles: k.reaction };
                          }
                        });
                      })
                    );
              return l(), w;
            });
            return (
              (e.displayName = 'ReactionGroup'),
              (e.propTypes = Object.assign({}, Fr(), { items: kr })),
              (e.handledProps = Object.keys(e.propTypes)),
              (e.create = Dr({ Component: e, mappedProp: 'content', mappedArrayProp: 'items' })),
              e
            );
          })(),
          Un = 'ui-reaction__icon',
          Gn = 'ui-reaction__content',
          Xn = (function () {
            var e = C.forwardRef(function (r, o) {
              var t = Y(),
                n = q(e.displayName, t.telemetry),
                a = n.setStart,
                i = n.setEnd;
              a();
              var l = r.children,
                s = r.icon,
                c = r.content,
                d = r.className,
                u = r.design,
                f = r.styles,
                g = r.variables,
                p = Ce(r),
                b = nr(e.handledProps, r),
                m = Ge(r.accessibility, { debugName: e.displayName, rtl: t.rtl }),
                h = tr(e.displayName, {
                  className: 'ui-reaction',
                  mapPropsToStyles: function () {
                    return { hasContent: !!c };
                  },
                  mapPropsToInlineStyles: function () {
                    return { className: d, design: u, styles: f, variables: g };
                  },
                  rtl: t.rtl
                }),
                v = h.classes,
                y = h.styles,
                k = C.createElement(
                  p,
                  re({}, m('root', Object.assign({ className: v.root, ref: o }, b)), Er({ forElements: [l] })),
                  Or(l)
                    ? l
                    : C.createElement(
                        C.Fragment,
                        null,
                        Kr.create(s, {
                          defaultProps: function () {
                            return m('icon', { className: Un, styles: y.icon });
                          }
                        }),
                        Kr.create(c, {
                          defaultProps: function () {
                            return m('content', { className: Gn, styles: y.content });
                          }
                        })
                      )
                );
              return i(), k;
            });
            return (
              (e.displayName = 'Reaction'),
              (e.propTypes = Object.assign({}, Fr({ content: 'shorthand' }), { icon: mr })),
              (e.defaultProps = { as: 'span' }),
              (e.handledProps = Object.keys(e.propTypes)),
              (e.Group = Zn),
              (e.create = Dr({ Component: e, mappedProp: 'content' })),
              e
            );
          })(),
          Yn = (function () {
            var e = C.forwardRef(function (r, o) {
              var t = Y(),
                n = q(e.displayName, t.telemetry),
                a = n.setStart,
                i = n.setEnd;
              a();
              var l = r.accessibility,
                s = r.align,
                c = r.atMention,
                d = r.children,
                u = r.className,
                f = r.color,
                g = r.content,
                p = r.design,
                b = r.disabled,
                m = r.error,
                h = r.important,
                v = r.size,
                y = r.styles,
                k = r.success,
                w = r.timestamp,
                x = r.truncated,
                S = r.temporary,
                B = r.variables,
                E = r.weight,
                O = Ge(l, { debugName: e.displayName, rtl: t.rtl }),
                F = tr(e.displayName, {
                  className: 'ui-text',
                  mapPropsToStyles: function () {
                    return {
                      atMention: c,
                      color: f,
                      important: h,
                      timestamp: w,
                      truncated: x,
                      disabled: b,
                      error: m,
                      success: k,
                      temporary: S,
                      align: s,
                      weight: E,
                      size: v
                    };
                  },
                  mapPropsToInlineStyles: function () {
                    return { className: u, design: p, styles: y, variables: B };
                  },
                  rtl: t.rtl
                }).classes,
                A = nr(e.handledProps, r),
                P = Ce(r),
                j = C.createElement(
                  P,
                  O('root', Object.assign({ className: F.root, ref: o }, Er({ forElements: [d, g] }), A)),
                  Or(d) ? d : g
                );
              return i(), j;
            });
            return (
              (e.displayName = 'Text'),
              (e.defaultProps = { as: 'span' }),
              (e.propTypes = Object.assign({}, Fr({ color: !0 }), {
                atMention: de.oneOfType([de.bool, de.oneOf(['me'])]),
                disabled: de.bool,
                error: de.bool,
                important: de.bool,
                size: xr,
                weight: de.oneOf(['light', 'semilight', 'regular', 'semibold', 'bold']),
                success: de.bool,
                temporary: de.bool,
                align: Sr,
                timestamp: de.bool,
                truncated: de.bool
              })),
              (e.handledProps = Object.keys(e.propTypes)),
              (e.create = Dr({ Component: e, mappedProp: 'content' })),
              e
            );
          })(),
          Kn = (function () {
            var e = Yr(Kr, {
              className: 'ui-chat__messagedetails',
              displayName: 'ChatMessageDetails',
              handledProps: ['attached', 'density', 'hasHeaderReactionGroup', 'mine'],
              mapPropsToStylesProps: function (e) {
                return {
                  attached: e.attached,
                  density: e.density,
                  hasHeaderReactionGroup: e.hasHeaderReactionGroup,
                  mine: e.mine
                };
              },
              overrideStyles: !0,
              shorthandConfig: { mappedProp: 'content' }
            });
            return (
              (e.propTypes = Object.assign({}, Fr(), {
                attached: de.oneOfType([de.bool, de.oneOf(['top', 'bottom'])]),
                density: de.oneOf(['comfy', 'compact']),
                hasHeaderReactionGroup: de.bool,
                mine: de.bool
              })),
              e
            );
          })(),
          $n = (function () {
            var e = Yr(Kr, {
              className: 'ui-chat__messageheader',
              displayName: 'ChatMessageHeader',
              shorthandConfig: { mappedProp: 'content' },
              overrideStyles: !0
            });
            return (e.propTypes = Fr()), e;
          })(),
          qn = (function () {
            var e = Yr(Kr, {
              className: 'ui-chat__messagereadstatus',
              displayName: 'ChatMessageReadStatus',
              handledProps: ['density'],
              mapPropsToStylesProps: function (e) {
                return { density: e.density, title: e.title };
              },
              overrideStyles: !0,
              shorthandConfig: { mappedProp: 'content' }
            });
            return (e.propTypes = Object.assign({}, Fr(), { density: de.oneOf(['comfy', 'compact']) })), e;
          })(),
          Jn = ['inline', 'showActionMenu'],
          Qn = 'ui-chat__message__actions',
          ea = 'ui-chat__message__author',
          ra = 'ui-chat__message__badge',
          oa = 'ui-chat__message__bar',
          ta = 'ui-chat__message__compact-body',
          na = 'ui-chat__message__content',
          aa = 'ui-chat__message__reactions',
          ia = 'ui-chat__message__timestamp',
          la = (function () {
            var e = C.forwardRef(function (r, o) {
              var t = Y(),
                n = q(e.displayName, t.telemetry),
                a = n.setStart,
                i = n.setEnd;
              a();
              var l = (function (e, r) {
                  var o = C.useContext(e),
                    t = o.value.current,
                    n = o.version.current,
                    a = o.listeners,
                    i = r(t),
                    l = C.useReducer(
                      function (e, o) {
                        if (!o) return [t, i];
                        if (o[0] <= n) return Object.is(e[1], i) ? e : [t, i];
                        try {
                          if (Object.is(e[0], o[1])) return e;
                          var a = r(o[1]);
                          return Object.is(e[1], a) ? e : [o[1], a];
                        } catch (e) {}
                        return [].concat(e);
                      },
                      [t, i]
                    ),
                    s = l[0],
                    c = l[1];
                  return (
                    Object.is(s[1], i) || c(void 0),
                    Tr(
                      function () {
                        return (
                          a.push(c),
                          function () {
                            var e = a.indexOf(c);
                            a.splice(e, 1);
                          }
                        );
                      },
                      [a]
                    ),
                    s[1]
                  );
                })($r, function (e) {
                  return e.attached;
                }),
                s = Ur({
                  density: function (e) {
                    return e.density;
                  },
                  accessibility: function (e) {
                    return e.behaviors.message;
                  }
                }),
                d = Object.assign({}, r, {
                  density: void 0 === r.density ? s.density : r.density,
                  accessibility: void 0 === r.accessibility ? s.accessibility || h : r.accessibility
                }),
                u = d.accessibility,
                f = d.attached,
                g = void 0 === f ? l : f,
                p = d.author,
                b = d.badge,
                m = d.badgePosition,
                v = d.children,
                y = d.className,
                k = d.compactBody,
                w = d.content,
                x = d.density,
                S = d.design,
                B = d.details,
                E = d.header,
                O = d.mine,
                F = d.positionActionMenu,
                A = d.reactionGroup,
                P = d.reactionGroupPosition,
                j = d.readStatus,
                I = d.styles,
                R = d.timestamp,
                M = d.unstable_overflow,
                D = d.variables,
                z = po(d.actionMenu),
                _ = z[0],
                H = z[1],
                T = (function (e) {
                  if ('object' == typeof e && null !== e && !Array.isArray(e)) {
                    var r = e,
                      o = r.inline,
                      t = r.showActionMenu;
                    return [ro(r, Jn), null == o || o, t];
                  }
                  return [e, !0, !1];
                })(_),
                W = T[0],
                L = T[1],
                N = T[2],
                V = ao({ defaultValue: !1, value: N }),
                Z = V[0],
                U = V[1],
                G = !qe()(W),
                X = !!A && 'start' === P,
                K = C.useRef();
              K.current = (function (e, r, o) {
                var t;
                if (!qe()(r))
                  return (
                    C.isValidElement(r) ? (t = r.props.id) : Qe()(r) && (t = r.id), t || o || le()('ui-chat__message-')
                  );
              })(0, W, K.current);
              var $ = C.useCallback(
                  function (e, r) {
                    return (
                      F && [
                        { name: 'flip', options: { fallbackPlacements: ['top'] } },
                        M && { name: 'preventOverflow', options: { boundary: bo(r) } }
                      ]
                    );
                  },
                  [F, M]
                ),
                J = C.useRef(),
                Q = Dt(
                  Object.assign(
                    { align: 'end', position: 'above', positionFixed: M, enabled: G && F, modifiers: $ },
                    H,
                    { popperRef: so(null == H ? void 0 : H.popperRef, J) }
                  )
                ),
                ee = Q.targetRef,
                re = Q.containerRef,
                oe = C.useState(!1),
                te = oe[0],
                ne = oe[1],
                ie = Ge(u, {
                  actionHandlers: {
                    preventDefault: function (e) {
                      e.currentTarget !== e.target && e.preventDefault();
                    },
                    focus: function (e) {
                      ee.current && (ee.current.focus(), e.stopPropagation());
                    }
                  },
                  debugName: e.displayName,
                  mapPropsToBehavior: function () {
                    return { hasActionMenu: G, inlineActionMenu: L, actionMenuId: K.current };
                  },
                  rtl: t.rtl
                }),
                se = tr(e.displayName, {
                  className: 'ui-chat__message',
                  mapPropsToStyles: function () {
                    return {
                      attached: g,
                      badgePosition: m,
                      density: x,
                      focused: te,
                      hasActionMenu: G,
                      hasBadge: !!b,
                      hasHeaderReactionGroup: X,
                      mine: O,
                      showActionMenu: Z
                    };
                  },
                  mapPropsToInlineStyles: function () {
                    return { className: y, design: S, styles: I, variables: D };
                  },
                  rtl: t.rtl
                }),
                de = se.classes,
                ue = se.styles,
                fe = Or(v),
                ge = fe ? ce()(de.root, de.content) : de.root,
                pe = Ce(d),
                be = nr(e.handledProps, d),
                me = Zt.create(b, {
                  defaultProps: function () {
                    return { className: ra, styles: ue.badge };
                  }
                }),
                he = Xn.Group.create(A, {
                  defaultProps: function () {
                    return { className: aa, styles: ue.reactionGroup };
                  }
                }),
                ve = (function () {
                  var e = Tn.create(W, {
                      defaultProps: function () {
                        var e;
                        return (
                          ((e = {})['data-is-focusable'] = !0),
                          (e.accessibility = to),
                          (e.className = Qn),
                          (e.styles = ue.actionMenu),
                          e
                        );
                      },
                      overrideProps: { id: K.current }
                    }),
                    r = e ? C.createElement(fo, { innerRef: re }, e) : e;
                  return L || !r ? r : C.createElement(Vn, null, r);
                })(),
                ye = Yn.create(p, {
                  defaultProps: function () {
                    return { size: 'comfy' === x ? 'small' : void 0, styles: ue.author, className: ea };
                  }
                }),
                ke = Yn.create(R, {
                  defaultProps: function () {
                    return { size: 'small', styles: ue.timestamp, timestamp: !0, className: ia };
                  }
                }),
                we = Kr.create(w, {
                  defaultProps: function () {
                    return { className: na, styles: ue.content };
                  }
                }),
                xe = _r(Kn, B, {
                  defaultProps: function () {
                    return { attached: g, density: x, hasHeaderReactionGroup: X, mine: O };
                  }
                }),
                Se = _r(qn, j, {
                  defaultProps: function () {
                    return { density: x };
                  }
                }),
                Be = C.createElement(C.Fragment, null);
              if ('compact' === x) {
                var Ee = _r($n, E),
                  Oe = Kr.create(k || {}, {
                    defaultProps: function () {
                      return ie('compactBody', { className: ta, styles: ue.compactBody });
                    },
                    overrideProps: function () {
                      return {
                        content: C.createElement(
                          C.Fragment,
                          null,
                          C.createElement(Tt.Item, { grow: 1 }, C.createElement('div', null, ye, we)),
                          ke,
                          xe,
                          me
                        )
                      };
                    }
                  });
                Be = C.createElement(C.Fragment, null, ve, C.createElement('div', { className: oa }), Ee, Oe, he, Se);
              } else {
                var Fe = _r($n, E || {}, {
                  overrideProps: function () {
                    return { content: C.createElement(C.Fragment, null, ye, ke, xe, 'start' === P && he) };
                  }
                });
                Be = C.createElement(
                  C.Fragment,
                  null,
                  ve,
                  C.createElement('div', { className: oa }),
                  'start' === m && me,
                  Fe,
                  we,
                  'end' === P && he,
                  'end' === m && me,
                  Se
                );
              }
              var Ae = C.createElement(
                fo,
                { innerRef: ee },
                ie.unstable_wrapWithFocusZone(
                  C.createElement(
                    pe,
                    ie(
                      'root',
                      Object.assign(
                        {
                          className: ge,
                          onBlur: function (e) {
                            var r = ae()(e, 'currentTarget.contains', e.relatedTarget);
                            ne(r), U(!1), ae()(d, 'onBlur', e, d);
                          },
                          onFocus: function (e) {
                            var r;
                            null == (r = J.current) || r.updatePosition(), ne(!0), ae()(d, 'onFocus', e, d);
                          },
                          onMouseEnter: function (e) {
                            var r;
                            null == (r = J.current) || r.updatePosition(),
                              G && !L && U(!0),
                              ae()(d, 'onMouseEnter', e, d);
                          },
                          onMouseLeave: function (e) {
                            te || !G || L || U(!1), ae()(d, 'onMouseLeave', e, d);
                          },
                          onKeyDown: function (e) {
                            if (G && !L) {
                              var r,
                                o,
                                t,
                                n =
                                  null != (r = null == (o = re.current) ? void 0 : o.querySelector('[tabindex="0"]'))
                                    ? r
                                    : null == (t = re.current)
                                    ? void 0
                                    : t.querySelectorAll('[tabindex="-1"]:not([data-is-focusable="false"])')[0];
                              if (
                                (e.keyCode === c.Enter &&
                                  (null == n || n.focus(), e.stopPropagation(), e.preventDefault()),
                                e.keyCode === c.Tab)
                              ) {
                                var a = !!e.shiftKey,
                                  i = e.currentTarget.querySelectorAll(
                                    '[tabindex="-1"]:not([data-is-focusable="false"])'
                                  ),
                                  l = i[0],
                                  s = i[i.length - 1];
                                if (e.target === n)
                                  a ? null == s || s.focus() : null == l || l.focus(),
                                    e.stopPropagation(),
                                    e.preventDefault();
                                else {
                                  var u = a ? l : s;
                                  e.target === u && (n.focus(), e.stopPropagation(), e.preventDefault());
                                }
                              }
                            }
                            ae()(d, 'onKeyDown', e, d);
                          },
                          ref: o
                        },
                        Er({ forElements: [v] }),
                        be
                      )
                    ),
                    fe ? v : Be
                  )
                )
              );
              return i(), Ae;
            });
            return (
              (e.displayName = 'ChatMessage'),
              (e.defaultProps = { badgePosition: 'end', positionActionMenu: !0, reactionGroupPosition: 'start' }),
              (e.propTypes = Object.assign({}, Fr({ content: 'shorthand' }), {
                actionMenu: de.oneOfType([vr, kr]),
                attached: de.oneOfType([de.bool, de.oneOf(['top', 'bottom'])]),
                author: vr,
                badge: vr,
                badgePosition: de.oneOf(['start', 'end']),
                compactBody: vr,
                density: de.oneOf(['comfy', 'compact']),
                details: vr,
                header: vr,
                mine: de.bool,
                onBlur: de.func,
                onFocus: de.func,
                onKeyDown: de.func,
                onMouseEnter: de.func,
                onMouseLeave: de.func,
                positionActionMenu: de.bool,
                reactionGroup: de.oneOfType([kr, vr]),
                reactionGroupPosition: de.oneOf(['start', 'end']),
                readStatus: vr,
                timestamp: vr,
                unstable_overflow: de.bool
              })),
              (e.handledProps = Object.keys(e.propTypes)),
              (e.create = Dr({ Component: e, mappedProp: 'content' })),
              e
            );
          })(),
          sa = 'ui-chat__item',
          ca = (function () {
            var e = C.forwardRef(function (r, o) {
              var t = Y(),
                n = q(e.displayName, t.telemetry),
                a = n.setStart,
                l = n.setEnd;
              a();
              var s = r.accessibility,
                c = r.children,
                d = r.className,
                u = r.density,
                f = r.design,
                g = r.items,
                p = r.styles,
                b = r.variables,
                m = Ge(s, { debugName: e.displayName, rtl: t.rtl }),
                h = tr(e.displayName, {
                  className: 'ui-chat',
                  mapPropsToStyles: function () {
                    return { density: u };
                  },
                  mapPropsToInlineStyles: function () {
                    return { className: d, design: f, styles: p, variables: b };
                  },
                  rtl: t.rtl
                }).classes,
                v = Ce(r),
                y = nr(e.handledProps, r),
                k = s && s(r).childBehaviors,
                w = {
                  density: u,
                  behaviors: { item: null == k ? void 0 : k.item, message: null == k ? void 0 : k.message }
                },
                x = m.unstable_wrapWithFocusZone(
                  C.createElement(
                    v,
                    m('root', Object.assign({ className: h.root, ref: o }, Er({ forElements: [c] }), y)),
                    C.createElement(
                      Zr,
                      { value: w },
                      Or(c)
                        ? c
                        : i()(g, function (e) {
                            return eo.create(e, {
                              defaultProps: function () {
                                return { className: sa };
                              }
                            });
                          })
                    )
                  )
                );
              return l(), x;
            });
            return (
              (e.displayName = 'Chat'),
              (e.defaultProps = { accessibility: v, as: 'ul', density: Nr }),
              (e.propTypes = Object.assign({}, Fr({ content: !1 }), {
                items: de.arrayOf(vr),
                density: de.oneOf(['comfy', 'compact'])
              })),
              (e.handledProps = Object.keys(e.propTypes)),
              (e.Item = eo),
              (e.Message = la),
              (e.MessageHeader = $n),
              (e.MessageDetails = Kn),
              (e.MessageReadStatus = qn),
              (e.create = Dr({ Component: e })),
              e
            );
          })(),
          da = n(308),
          ua = n.n(da),
          fa = n(1584),
          ga = n.n(fa),
          pa = (function () {
            function e() {
              (this.performance = void 0), (this.enabled = void 0), (this.performance = {}), (this.enabled = !0);
            }
            return (
              (e.prototype.reset = function () {
                this.performance = {};
              }),
              e
            );
          })(),
          ba = n(1554),
          ma = n(3297),
          ha = n(7798),
          va = n.n(ha),
          ya = n(4340);
        function Ca(e, r, o) {
          var t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return e.plugins.length > 0
            ? (0, ya.Z)(
                e.plugins,
                function (r, n) {
                  return n(r, o, e, t);
                },
                r
              )
            : r;
        }
        var ka = 'RULE',
          wa = 'KEYFRAME',
          xa = 'FONT',
          Sa = 'STATIC',
          Ba = 'CLEAR',
          Ea = /^(:|\[|>|&)/;
        function Oa(e) {
          return Ea.test(e);
        }
        function Fa(e) {
          return '&' === e.charAt(0) ? e.slice(1) : e;
        }
        function Aa(e) {
          return '@media' === e.substr(0, 6);
        }
        function Pa(e, r) {
          return 0 === e.length ? r : e + ' and ' + r;
        }
        function ja(e) {
          return '@supports' === e.substr(0, 9);
        }
        var Ia = n(7591);
        function Ra(e, r) {
          var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
            t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : '',
            n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : '';
          return n + t + o + (0, Ia.Z)(e) + r;
        }
        function Ma(e) {
          return null == e || ('string' == typeof e && null !== e.match(/(undefined|null)/));
        }
        function Da(e) {
          var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
          return '.' + e + r;
        }
        var za = n(2614);
        function _a(e) {
          return '@font-face{' + (0, za.Z)(e) + '}';
        }
        var Ha = n(9721);
        function Ta(e, r) {
          var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [''],
            t = (0, Ha.Z)(
              e,
              function (e, r, o) {
                return '' + e + o + '{' + (0, za.Z)(r) + '}';
              },
              ''
            );
          return (0, ya.Z)(
            o,
            function (e, o) {
              return e + '@' + o + 'keyframes ' + r + '{' + t + '}';
            },
            ''
          );
        }
        function Wa(e, r) {
          if ('string' == typeof e) return e.replace(/\s{2,}/g, '');
          var o = Ca(r, e, Sa);
          return (0, za.Z)(o);
        }
        function La(e) {
          return 'k' + e;
        }
        var Na = 'abcdefghijklmnopqrstuvwxyz',
          Va = Na.length;
        function Za(e) {
          var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
          return e <= Va ? Na[e - 1] + r : Za((e / Va) | 0, Na[e % Va] + r);
        }
        function Ua(e) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : function () {
                    return !0;
                  },
            o = e(),
            t = Za(o);
          return r(t) ? t : Ua(e, r);
        }
        function Ga(e) {
          return 'data:' === e.substr(0, 5);
        }
        function Xa(e) {
          return Ga(e) ? e : "'" + e + "'";
        }
        var Ya = {
            '.woff': 'woff',
            '.woff2': 'woff2',
            '.eot': 'embedded-opentype',
            '.ttf': 'truetype',
            '.otf': 'opentype',
            '.svg': 'svg',
            '.svgz': 'svg'
          },
          Ka = {
            'image/svg+xml': 'svg',
            'application/x-font-woff': 'woff',
            'application/font-woff': 'woff',
            'application/x-font-woff2': 'woff2',
            'application/font-woff2': 'woff2',
            'font/woff2': 'woff2',
            'application/octet-stream': 'truetype',
            'application/x-font-ttf': 'truetype',
            'application/x-font-truetype': 'truetype',
            'application/x-font-opentype': 'opentype',
            'application/vnd.ms-fontobject': 'embedded-opentype',
            'application/font-sfnt': 'sfnt'
          };
        function $a(e) {
          if (Ga(e)) {
            for (var r = '', o = 5; ; o++) {
              var t = e.charAt(o);
              if (';' === t || ',' === t) break;
              r += t;
            }
            var n = Ka[r];
            if (n) return n;
            console.warn(
              'A invalid base64 font was used. Please use one of the following mime type: ' +
                Object.keys(Ka).join(', ') +
                '.'
            );
          } else {
            for (var a = '', i = e.length - 1; ; i--) {
              var l = e.charAt(i);
              if ('.' === l) {
                a = l + a;
                break;
              }
              a = l + a;
            }
            var s = Ya[a];
            if (s) return s;
            console.warn(
              'A invalid font-format was used in "' + e + '". Use one of these: ' + Object.keys(Ya).join(', ') + '.'
            );
          }
          return '';
        }
        function qa() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            o = (0, ya.Z)(
              r,
              function (e, r, o) {
                return e + (o > 0 ? ',' : '') + 'local(' + Xa(r) + ')';
              },
              ''
            ),
            t = (0, ya.Z)(
              e,
              function (e, r, o) {
                var t = o > 0 ? ',' : '',
                  n = $a(r);
                return '' + e + t + 'url(' + Xa(r) + ") format('" + n + "')";
              },
              ''
            ),
            n = o.length > 0 && t.length > 0 ? ',' : '';
          return '' + o + n + t;
        }
        function Ja(e, r) {
          return 'string' == typeof e ? e : r ? r + JSON.stringify(e) : '';
        }
        function Qa(e) {
          return 'string' == typeof e ? [e] : Array.isArray(e) ? e.slice() : [];
        }
        function ei(e) {
          return -1 === e.indexOf('ad');
        }
        function ri(e) {
          return '"' === e.charAt(0) ? e : '"' + e + '"';
        }
        var oi = /^[a-z_][a-z0-9-_]*$/gi;
        function ti() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
          return (
            e.length > 0 &&
              null === e.match(oi) &&
              console.error(
                'An invalid selectorPrefix (' +
                  e +
                  ') has been used to create a new Fela renderer.\nIt must only contain a-Z, 0-9, - and _ while it must start with either _ or a-Z.\nSee http://fela.js.org/docs/advanced/RendererConfiguration.html'
              ),
            e
          );
        }
        var ni =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var o = arguments[r];
              for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
            }
            return e;
          };
        function ai(e, r) {
          var o = {};
          for (var t in e) r.indexOf(t) >= 0 || (Object.prototype.hasOwnProperty.call(e, t) && (o[t] = e[t]));
          return o;
        }
        var ii =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              };
        function li(e, r) {
          var o = e.fontFamily,
            t = e.src,
            n = (function (e, r) {
              var o = {};
              for (var t in e) r.indexOf(t) >= 0 || (Object.prototype.hasOwnProperty.call(e, t) && (o[t] = e[t]));
              return o;
            })(e, ['fontFamily', 'src']);
          if ('string' == typeof o && Array.isArray(t)) return r.renderFont(o, t, n);
        }
        var si = n(5816);
        var ci = n(6882);
        function di(e, r) {
          for (var o in e) {
            var t = e[o];
            if (r.hasOwnProperty(o)) {
              var n = r[o](t);
              (0, ci.Z)(e, n), n.hasOwnProperty(o) || delete e[o];
            }
            e.hasOwnProperty(o) && va()(t) && (e[o] = di(t, r));
          }
          return e;
        }
        var ui = [
          '::-webkit-input-placeholder',
          '::-moz-placeholder',
          ':-ms-input-placeholder',
          ':-moz-placeholder',
          '::placeholder'
        ];
        function fi(e) {
          return e.reduce(function (e, r) {
            var o = r[0],
              t = r[1];
            return (e[o] = t), (e[t] = o), e;
          }, {});
        }
        function gi(e) {
          return 'number' == typeof e;
        }
        function pi(e, r) {
          return -1 !== e.indexOf(r);
        }
        function bi(e, r, o, t) {
          return (
            r +
            (function (e) {
              return 0 === parseFloat(e) ? e : '-' === e[0] ? e.slice(1) : '-' + e;
            })(o) +
            t
          );
        }
        function mi(e) {
          return e
            .replace(/ +/g, ' ')
            .split(' ')
            .map(function (e) {
              return e.trim();
            })
            .filter(Boolean)
            .reduce(
              function (e, r) {
                var o = e.list,
                  t = e.state,
                  n = (r.match(/\(/g) || []).length,
                  a = (r.match(/\)/g) || []).length;
                return (
                  t.parensDepth > 0 ? (o[o.length - 1] = o[o.length - 1] + ' ' + r) : o.push(r),
                  (t.parensDepth += n - a),
                  { list: o, state: t }
                );
              },
              { list: [], state: { parensDepth: 0 } }
            ).list;
        }
        function hi(e) {
          var r = mi(e);
          if (r.length <= 3 || r.length > 4) return e;
          var o = r[0],
            t = r[1],
            n = r[2];
          return [o, r[3], n, t].join(' ');
        }
        var vi = {
          padding: function (e) {
            var r = e.value;
            return gi(r) ? r : hi(r);
          },
          textShadow: function (e) {
            var r = (function (e) {
              for (var r = [], o = 0, t = 0, n = !1; t < e.length; )
                n || ',' !== e[t]
                  ? '(' === e[t]
                    ? ((n = !0), t++)
                    : ')' === e[t]
                    ? ((n = !1), t++)
                    : t++
                  : (r.push(e.substring(o, t).trim()), (o = ++t));
              return o != t && r.push(e.substring(o, t + 1)), r;
            })(e.value).map(function (e) {
              return e.replace(/(^|\s)(-*)([.|\d]+)/, function (e, r, o, t) {
                return '0' === t ? e : r + ('' === o ? '-' : '') + t;
              });
            });
            return r.join(',');
          },
          borderColor: function (e) {
            return hi(e.value);
          },
          borderRadius: function (e) {
            var r = e.value;
            if (gi(r)) return r;
            if (pi(r, '/')) {
              var o = r.split('/'),
                t = o[0],
                n = o[1];
              return vi.borderRadius({ value: t.trim() }) + ' / ' + vi.borderRadius({ value: n.trim() });
            }
            var a = mi(r);
            switch (a.length) {
              case 2:
                return a.reverse().join(' ');
              case 4:
                var i = a[0],
                  l = a[1],
                  s = a[2];
                return [l, i, a[3], s].join(' ');
              default:
                return r;
            }
          },
          background: function (e) {
            var r = e.value,
              o = e.valuesToConvert,
              t = e.isRtl,
              n = e.bgImgDirectionRegex,
              a = e.bgPosDirectionRegex;
            if (gi(r)) return r;
            var i = r.replace(/(url\(.*?\))|(rgba?\(.*?\))|(hsl\(.*?\))|(#[a-fA-F0-9]+)|((^| )(\D)+( |$))/g, '').trim();
            return (
              (r = r.replace(
                i,
                vi.backgroundPosition({ value: i, valuesToConvert: o, isRtl: t, bgPosDirectionRegex: a })
              )),
              vi.backgroundImage({ value: r, valuesToConvert: o, bgImgDirectionRegex: n })
            );
          },
          backgroundImage: function (e) {
            var r = e.value,
              o = e.valuesToConvert,
              t = e.bgImgDirectionRegex;
            return pi(r, 'url(') || pi(r, 'linear-gradient(')
              ? r.replace(t, function (e, r, t) {
                  return e.replace(t, o[t]);
                })
              : r;
          },
          backgroundPosition: function (e) {
            var r = e.value,
              o = e.valuesToConvert,
              t = e.isRtl,
              n = e.bgPosDirectionRegex;
            return r
              .replace(t ? /^((-|\d|\.)+%)/ : null, function (e, r) {
                return (function (e) {
                  var r = e.indexOf('.');
                  if (-1 === r) e = 100 - parseFloat(e) + '%';
                  else {
                    var o = e.length - r - 2;
                    e = (e = 100 - parseFloat(e)).toFixed(o) + '%';
                  }
                  return e;
                })(r);
              })
              .replace(n, function (e) {
                return o[e];
              });
          },
          backgroundPositionX: function (e) {
            var r = e.value,
              o = e.valuesToConvert,
              t = e.isRtl,
              n = e.bgPosDirectionRegex;
            return gi(r)
              ? r
              : vi.backgroundPosition({ value: r, valuesToConvert: o, isRtl: t, bgPosDirectionRegex: n });
          },
          transition: function (e) {
            var r = e.value,
              o = e.propertiesToConvert;
            return r
              .split(/,\s*/g)
              .map(function (e) {
                var r = e.split(' ');
                return (r[0] = o[r[0]] || r[0]), r.join(' ');
              })
              .join(', ');
          },
          transitionProperty: function (e) {
            var r = e.value,
              o = e.propertiesToConvert;
            return r
              .split(/,\s*/g)
              .map(function (e) {
                return o[e] || e;
              })
              .join(', ');
          },
          transform: function (e) {
            var r = e.value,
              o = '(?:(?:(?:\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f])',
              t =
                '((?:-?(?:[0-9]*\\.[0-9]+|[0-9]+)(?:\\s*(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)|-?(?:[_a-z]|[^\\u0020-\\u007e]|' +
                o +
                ')(?:[_a-z0-9-]|[^\\u0020-\\u007e]|' +
                o +
                ')*)?)|(?:inherit|auto))',
              n = new RegExp('(translateX\\s*\\(\\s*)' + t + '(\\s*\\))', 'gi'),
              a = new RegExp('(translate\\s*\\(\\s*)' + t + '((?:\\s*,\\s*' + t + '){0,1}\\s*\\))', 'gi'),
              i = new RegExp('(translate3d\\s*\\(\\s*)' + t + '((?:\\s*,\\s*' + t + '){0,2}\\s*\\))', 'gi'),
              l = new RegExp('(rotate[ZY]?\\s*\\(\\s*)' + t + '(\\s*\\))', 'gi');
            return r.replace(n, bi).replace(a, bi).replace(i, bi).replace(l, bi);
          }
        };
        (vi.objectPosition = vi.backgroundPosition),
          (vi.margin = vi.padding),
          (vi.borderWidth = vi.padding),
          (vi.boxShadow = vi.textShadow),
          (vi.webkitBoxShadow = vi.boxShadow),
          (vi.mozBoxShadow = vi.boxShadow),
          (vi.WebkitBoxShadow = vi.boxShadow),
          (vi.MozBoxShadow = vi.boxShadow),
          (vi.borderStyle = vi.borderColor),
          (vi.webkitTransform = vi.transform),
          (vi.mozTransform = vi.transform),
          (vi.WebkitTransform = vi.transform),
          (vi.MozTransform = vi.transform),
          (vi.transformOrigin = vi.backgroundPosition),
          (vi.webkitTransformOrigin = vi.transformOrigin),
          (vi.mozTransformOrigin = vi.transformOrigin),
          (vi.WebkitTransformOrigin = vi.transformOrigin),
          (vi.MozTransformOrigin = vi.transformOrigin),
          (vi.webkitTransition = vi.transition),
          (vi.mozTransition = vi.transition),
          (vi.WebkitTransition = vi.transition),
          (vi.MozTransition = vi.transition),
          (vi.webkitTransitionProperty = vi.transitionProperty),
          (vi.mozTransitionProperty = vi.transitionProperty),
          (vi.WebkitTransitionProperty = vi.transitionProperty),
          (vi.MozTransitionProperty = vi.transitionProperty),
          (vi['text-shadow'] = vi.textShadow),
          (vi['border-color'] = vi.borderColor),
          (vi['border-radius'] = vi.borderRadius),
          (vi['background-image'] = vi.backgroundImage),
          (vi['background-position'] = vi.backgroundPosition),
          (vi['background-position-x'] = vi.backgroundPositionX),
          (vi['object-position'] = vi.objectPosition),
          (vi['border-width'] = vi.padding),
          (vi['box-shadow'] = vi.textShadow),
          (vi['-webkit-box-shadow'] = vi.textShadow),
          (vi['-moz-box-shadow'] = vi.textShadow),
          (vi['border-style'] = vi.borderColor),
          (vi['-webkit-transform'] = vi.transform),
          (vi['-moz-transform'] = vi.transform),
          (vi['transform-origin'] = vi.transformOrigin),
          (vi['-webkit-transform-origin'] = vi.transformOrigin),
          (vi['-moz-transform-origin'] = vi.transformOrigin),
          (vi['-webkit-transition'] = vi.transition),
          (vi['-moz-transition'] = vi.transition),
          (vi['transition-property'] = vi.transitionProperty),
          (vi['-webkit-transition-property'] = vi.transitionProperty),
          (vi['-moz-transition-property'] = vi.transitionProperty);
        var yi = fi([
            ['paddingLeft', 'paddingRight'],
            ['marginLeft', 'marginRight'],
            ['left', 'right'],
            ['borderLeft', 'borderRight'],
            ['borderLeftColor', 'borderRightColor'],
            ['borderLeftStyle', 'borderRightStyle'],
            ['borderLeftWidth', 'borderRightWidth'],
            ['borderTopLeftRadius', 'borderTopRightRadius'],
            ['borderBottomLeftRadius', 'borderBottomRightRadius'],
            ['padding-left', 'padding-right'],
            ['margin-left', 'margin-right'],
            ['border-left', 'border-right'],
            ['border-left-color', 'border-right-color'],
            ['border-left-style', 'border-right-style'],
            ['border-left-width', 'border-right-width'],
            ['border-top-left-radius', 'border-top-right-radius'],
            ['border-bottom-left-radius', 'border-bottom-right-radius']
          ]),
          Ci = ['content'],
          ki = fi([
            ['ltr', 'rtl'],
            ['left', 'right'],
            ['w-resize', 'e-resize'],
            ['sw-resize', 'se-resize'],
            ['nw-resize', 'ne-resize']
          ]),
          wi = new RegExp('(^|\\W|_)((ltr)|(rtl)|(left)|(right))(\\W|_|$)', 'g'),
          xi = new RegExp('(left)|(right)');
        const Si = function e(r) {
          return Object.keys(r).reduce(
            function (o, t) {
              var n = r[t];
              if (('string' == typeof n && (n = n.trim()), pi(Ci, t))) return (o[t] = n), o;
              var a = (function (r, o) {
                  var t,
                    n = /\/\*\s?@noflip\s?\*\//.test(o),
                    a = n ? r : yi[(t = r)] || t,
                    i = n
                      ? o
                      : (function (r, o) {
                          if (
                            !(function (e) {
                              return !(
                                'boolean' == typeof e ||
                                (function (e) {
                                  return null == e;
                                })(e)
                              );
                            })(o)
                          )
                            return o;
                          if ((t = o) && 'object' == typeof t) return e(o);
                          var t,
                            n,
                            a = gi(o),
                            i = (function (e) {
                              return 'function' == typeof e;
                            })(o),
                            l = a || i ? o : o.replace(/ !important.*?$/, ''),
                            s = !a && l.length !== o.length,
                            c = vi[r];
                          return (
                            (n = c
                              ? c({
                                  value: l,
                                  valuesToConvert: ki,
                                  propertiesToConvert: yi,
                                  isRtl: !0,
                                  bgImgDirectionRegex: wi,
                                  bgPosDirectionRegex: xi
                                })
                              : ki[l] || l),
                            s ? n + ' !important' : n
                          );
                        })(a, o);
                  return { key: a, value: i };
                })(t, n),
                i = a.key,
                l = a.value;
              return (o[i] = l), o;
            },
            Array.isArray(r) ? [] : {}
          );
        };
        function Bi() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
          return 0 === e.length || 0 === r.length
            ? 0
            : e.indexOf(
                e.find(function (e) {
                  return null !== r.match(e);
                })
              ) + 1;
        }
        function Ei(e) {
          return e.split('{')[0].slice(9).trim();
        }
        function Oi(e, r, o, t) {
          var n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : '',
            a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : '',
            i = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : '';
          return {
            type: e,
            className: r,
            selector: Da(r, n),
            declaration: o + ':' + t,
            pseudo: n,
            media: a,
            support: i
          };
        }
        var Fi = function (e, r) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e))
              return (function (e, r) {
                var o = [],
                  t = !0,
                  n = !1,
                  a = void 0;
                try {
                  for (
                    var i, l = e[Symbol.iterator]();
                    !(t = (i = l.next()).done) && (o.push(i.value), !r || o.length !== r);
                    t = !0
                  );
                } catch (e) {
                  (n = !0), (a = e);
                } finally {
                  try {
                    !t && l.return && l.return();
                  } finally {
                    if (n) throw a;
                  }
                }
                return o;
              })(e, r);
            throw new TypeError('Invalid attempt to destructure non-iterable instance');
          },
          Ai = /[.]([0-9a-z_-]+)([^{]+)?{([^:]+):([^}]+)}/gi;
        function Pi(e) {
          for (
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
              o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
              t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
              n = void 0;
            (n = Ai.exec(e));

          ) {
            var a = n,
              i = Fi(a, 5),
              l = (i[0], i[1]),
              s = i[2],
              c = i[3],
              d = i[4],
              u = Ra(c, d, s, r, o);
            t[u] = Oi(ka, l, c, d, s, r, o);
          }
          return t;
        }
        var ji = function (e, r) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e))
              return (function (e, r) {
                var o = [],
                  t = !0,
                  n = !1,
                  a = void 0;
                try {
                  for (
                    var i, l = e[Symbol.iterator]();
                    !(t = (i = l.next()).done) && (o.push(i.value), !r || o.length !== r);
                    t = !0
                  );
                } catch (e) {
                  (n = !0), (a = e);
                } finally {
                  try {
                    !t && l.return && l.return();
                  } finally {
                    if (n) throw a;
                  }
                }
                return o;
              })(e, r);
            throw new TypeError('Invalid attempt to destructure non-iterable instance');
          },
          Ii = /@supports[^{]+\{([\s\S]+?})\s*}/gi;
        function Ri(e) {
          for (
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
              o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              t = void 0;
            (t = Ii.exec(e));

          ) {
            var n = t,
              a = ji(n, 2),
              i = a[0],
              l = a[1],
              s = Ei(i);
            Pi(l, r, s, o);
          }
          return o;
        }
        function Mi(e, r) {
          var o = e.type,
            t = e.support,
            n = e.media;
          switch (o) {
            case xa:
              return 0;
            case Sa:
              return 1;
            case wa:
              return 2;
            case ka:
              return (function (e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
                  o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                if (0 === r.length) return e;
                var t = o.indexOf(r) + 1;
                return t ? e + 2 * t : 9999;
              })(t ? 4 : 3, n, r);
            default:
              return 9999;
          }
        }
        var Di,
          zi = n(4460);
        function _i(e, r) {
          return e + '{' + r + '}';
        }
        function Hi(e) {
          var r = e.type,
            o = e.media,
            t = e.support,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document,
            a = o ? '[media="' + o + '"]' : ':not([media])',
            i = t ? '[data-fela-support="true"]' : ':not([data-fela-support="true"])';
          return n.querySelector('[data-fela-type="' + r + '"]' + i + a);
        }
        function Ti(e, r, o) {
          var t = o.type,
            n = o.media,
            a = o.support,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : document,
            l = i.head || {},
            s = i.createElement('style');
          s.setAttribute('data-fela-type', t),
            (s.type = 'text/css'),
            a && s.setAttribute('data-fela-support', 'true'),
            n && (s.media = n);
          var c = (0, Ha.Z)(
            e,
            function (o, t, n) {
              return t.score > r && (!o || e[o].score > t.score) ? n : o;
            },
            void 0
          );
          return c ? l.insertBefore(s, e[c].node) : l.appendChild(s), s;
        }
        function Wi(e) {
          var r = e.type,
            o = e.media,
            t = void 0 === o ? '' : o,
            n = e.support;
          return r + t + (void 0 === n ? '' : n);
        }
        function Li(e, r) {
          var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document,
            t = Wi(e);
          if (!r.nodes[t]) {
            var n = Mi(e, r.mediaQueryOrder),
              a = Hi(e, o) || Ti(r.nodes, n, e, o);
            r.nodes[t] = { node: a, score: n };
          }
          return r.nodes[t].node;
        }
        function Ni(e, r) {
          return '@supports ' + e + '{' + r + '}';
        }
        function Vi(e) {
          var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
          return (0, ya.Z)(
            e,
            function (e, o) {
              return (e[o] = r), e;
            },
            {}
          );
        }
        function Zi(e) {
          if (Array.isArray(e)) {
            for (var r = 0, o = Array(e.length); r < e.length; r++) o[r] = e[r];
            return o;
          }
          return Array.from(e);
        }
        function Ui(e, r) {
          var o = (0, Ha.Z)(
            e,
            function (o, t, n) {
              var a = o.findIndex(function (o) {
                return r(e[o], o) > r(t, n);
              });
              return -1 !== a
                ? (function (e, r, o) {
                    return [].concat(Zi(e.slice(0, o)), [r], Zi(e.slice(o, e.length)));
                  })(o, n, a)
                : [].concat(
                    (function (e) {
                      if (Array.isArray(e)) {
                        for (var r = 0, o = Array(e.length); r < e.length; r++) o[r] = e[r];
                        return o;
                      }
                      return Array.from(e);
                    })(o),
                    [n]
                  );
            },
            []
          );
          return (0, ya.Z)(
            o,
            function (r, o) {
              return (r[o] = e[o]), r;
            },
            {}
          );
        }
        function Gi(e, r, o) {
          return (
            r in e
              ? Object.defineProperty(e, r, { value: o, enumerable: !0, configurable: !0, writable: !0 })
              : (e[r] = o),
            e
          );
        }
        var Xi =
          (Gi((Di = {}), ka, function (e, r) {
            var o = r.selector,
              t = r.declaration,
              n = r.support,
              a = r.media,
              i = _i(o, t);
            n
              ? a
                ? (e.supportMediaRules[a] || (e.supportMediaRules[a] = {}),
                  e.supportMediaRules[a][n] || (e.supportMediaRules[a][n] = ''),
                  (e.supportMediaRules[a][n] += i))
                : (e.supportRules[n] || (e.supportRules[n] = ''), (e.supportRules[n] += i))
              : a
              ? (e.mediaRules[a] || (e.mediaRules[a] = ''), (e.mediaRules[a] += i))
              : (e.rules += i);
          }),
          Gi(Di, xa, function (e, r) {
            var o = r.fontFace;
            e.fontFaces += o;
          }),
          Gi(Di, wa, function (e, r) {
            var o = r.keyframe;
            e.keyframes += o;
          }),
          Gi(Di, Sa, function (e, r) {
            var o = r.css,
              t = r.selector;
            e.statics += t ? _i(t, o) : o;
          }),
          Di);
        const Yi = { fontFaces: xa, statics: Sa, keyframes: wa, rules: ka };
        function Ki(e) {
          return (0, Ha.Z)(
            e,
            function (e, r, o) {
              return r.length > 0 && (e += Ni(o, r)), e;
            },
            ''
          );
        }
        var $i = /^[a-z0-9_-]*$/gi,
          qi =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var o = arguments[r];
                for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
              }
              return e;
            };
        function Ji(e, r, o) {
          var t = e.selector,
            n = e.declaration,
            a = e.support,
            i = e.media,
            l = e.pseudo,
            s = i + a;
          if (r.devMode)
            !(function (e, r) {
              var o = (function (e) {
                  var r = (function (e) {
                      var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                        t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
                        n = Ui(e, function (e) {
                          return Bi(t, e.pseudo);
                        }),
                        a = Vi(r),
                        i = Vi(o),
                        l = (0, ya.Z)(
                          r,
                          function (e, r) {
                            return (e[r] = Vi(o)), e;
                          },
                          Vi(r, {})
                        );
                      return (0, Ha.Z)(
                        n,
                        function (e, r) {
                          var o = Xi[r.type];
                          return o && o(e, r), e;
                        },
                        {
                          mediaRules: a,
                          supportRules: i,
                          supportMediaRules: l,
                          fontFaces: '',
                          statics: '',
                          keyframes: '',
                          rules: ''
                        }
                      );
                    })(e.cache, e.mediaQueryOrder, e.supportQueryOrder, e.ruleOrder),
                    o = (function (e) {
                      return 0 === e.selectorPrefix.length || null !== e.selectorPrefix.match($i)
                        ? e.uniqueRuleIdentifier
                        : -1;
                    })(e),
                    t = (0, Ha.Z)(
                      Yi,
                      function (e, t, n) {
                        return r[n].length > 0 && e.push({ css: r[n], rehydration: o, type: t }), e;
                      },
                      []
                    ),
                    n = Ki(r.supportRules);
                  n && t.push({ css: n, type: ka, rehydration: o, support: !0 });
                  var a = Object.keys(qi({}, r.supportMediaRules, r.mediaRules));
                  return (0, ya.Z)(
                    a,
                    function (e, t) {
                      if (
                        (r.mediaRules[t] &&
                          r.mediaRules[t].length > 0 &&
                          e.push({ css: r.mediaRules[t], type: ka, rehydration: o, media: t }),
                        r.supportMediaRules[t])
                      ) {
                        var n = Ki(r.supportMediaRules[t]);
                        n.length > 0 && e.push({ css: n, type: ka, rehydration: o, support: !0, media: t });
                      }
                      return e;
                    },
                    t
                  );
                })(e),
                t = r.getAttribute('media') || void 0,
                n = r.getAttribute('data-fela-support') || void 0,
                a = o.find(function (e) {
                  return e.type === ka && e.media === t && e.support === n;
                });
              a && (r.textContent = a.css);
            })(r, o);
          else
            try {
              var c = Bi(r.ruleOrder, l),
                d = o.sheet.cssRules,
                u = d.length;
              if (0 === c) u = void 0 === r.scoreIndex[s] ? 0 : r.scoreIndex[s] + 1;
              else
                for (var f = r.scoreIndex[s] || 0, g = d.length; f < g; ++f)
                  if (d[f].score > c) {
                    u = f;
                    break;
                  }
              var p = _i(t, n);
              if (a.length > 0) {
                var b = Ni(a, p);
                o.sheet.insertRule(b, u);
              } else o.sheet.insertRule(p, u);
              0 === c && (r.scoreIndex[s] = u), (d[u].score = c);
            } catch (e) {}
        }
        function Qi(e, r) {
          e.updateSubscription ||
            ((e.scoreIndex = {}),
            (e.nodes = {}),
            (e.updateSubscription = (function (e) {
              var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
              return function (o) {
                if (o.type === Ba)
                  return (
                    (0, zi.Z)(e.nodes, function (e) {
                      var r = e.node;
                      return r.parentNode.removeChild(r);
                    }),
                    (e.nodes = {}),
                    void (e.scoreIndex = {})
                  );
                var t = Li(o, e, r);
                switch (o.type) {
                  case wa:
                    t.textContent += o.keyframe;
                    break;
                  case xa:
                    t.textContent += o.fontFace;
                    break;
                  case Sa:
                    t.textContent += o.selector ? _i(o.selector, o.css) : o.css;
                    break;
                  case ka:
                    Ji(o, e, t);
                }
              };
            })(e, r)),
            e.subscribe(e.updateSubscription),
            (0, zi.Z)(e.cache, e._emitChange));
        }
        var el = /[.][a-z0-9_-]*/gi,
          rl = (function () {
            function e(e, r) {
              for (var o = 0; o < r.length; o++) {
                var t = r[o];
                (t.enumerable = t.enumerable || !1),
                  (t.configurable = !0),
                  'value' in t && (t.writable = !0),
                  Object.defineProperty(e, t.key, t);
              }
            }
            return function (r, o, t) {
              return o && e(r.prototype, o), t && e(r, t), r;
            };
          })(),
          ol = (0, C.createContext)();
        (0, C.createContext)();
        const tl = (function (e, r, o, t, n) {
          var a = (function (e) {
            function t(e, r) {
              !(function (e, r) {
                if (!(e instanceof r)) throw new TypeError('Cannot call a class as a function');
              })(this, t);
              var o = (function (e, r) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !r || ('object' != typeof r && 'function' != typeof r) ? e : r;
              })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r));
              return o._renderStyle(), o;
            }
            return (
              (function (e, r) {
                if ('function' != typeof r && null !== r)
                  throw new TypeError('Super expression must either be null or a function, not ' + typeof r);
                (e.prototype = Object.create(r && r.prototype, {
                  constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
                })),
                  r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : (e.__proto__ = r));
              })(t, e),
              rl(t, [
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    this._renderStyle();
                  }
                },
                {
                  key: '_renderStyle',
                  value: function () {
                    var e = this.props,
                      r = e.renderer,
                      o = e.rehydrate,
                      t = e.targetDocument;
                    (function (e, r) {
                      if ('undefined' == typeof document) return !1;
                      var o = r || document;
                      return e && !e.isNativeRenderer && o && o.createElement;
                    })(r, t) &&
                      (o &&
                      (function () {
                        return (
                          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document).querySelectorAll(
                            '[data-fela-type]'
                          ).length > 0
                        );
                      })(t)
                        ? (function (e) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
                            Qi(e, r),
                              (0, ma.Z)(r.querySelectorAll('[data-fela-type]'), function (r) {
                                var o = r.getAttribute('data-fela-rehydration') || -1,
                                  t = e.uniqueRuleIdentifier || parseInt(o, 10);
                                if (-1 !== t) {
                                  var n = r.getAttribute('data-fela-type') || '',
                                    a = r.getAttribute('media') || '',
                                    i = r.getAttribute('data-fela-support') || '',
                                    l = r.textContent;
                                  e.uniqueRuleIdentifier = t;
                                  var s = n + a + i;
                                  if (
                                    ((e.nodes[s] = {
                                      score: Mi({ type: n, media: a, support: i }, e.mediaQueryOrder),
                                      node: r
                                    }),
                                    n === ka &&
                                      (i ? Ri(l, a, e.cache) : Pi(l, a, '', e.cache), r.sheet && r.sheet.cssRules))
                                  ) {
                                    var c = a + i;
                                    (0, ma.Z)(r.sheet.cssRules, function (r, o) {
                                      var t = r.conditionText ? r.cssRules[0].selectorText : r.selectorText,
                                        n = Bi(e.ruleOrder, t.split(el)[1]);
                                      0 === n && (e.scoreIndex[c] = o), (r.score = n);
                                    });
                                  }
                                }
                              });
                          })(r, t)
                        : Qi(r, t));
                  }
                },
                {
                  key: 'render',
                  value: function () {
                    return o(
                      r.Provider,
                      { value: this.props.renderer },
                      ((e = this.props.children), C.Children.only(e))
                    );
                    var e;
                  }
                }
              ]),
              t
            );
          })(e);
          return (
            n &&
              (0, zi.Z)(n, function (e, r) {
                a[r] = e;
              }),
            a
          );
        })(C.Component, ol, C.createElement, 0, {
          propTypes: { renderer: ue().object.isRequired, rehydrate: ue().bool.isRequired },
          defaultProps: { rehydrate: !0 }
        });
        var nl = [
          'animation',
          'animationName',
          'animationDuration',
          'animationTimingFunction',
          'animationDelay',
          'animationIterationCount',
          'animationDirection',
          'animationFillMode',
          'animationPlayState'
        ];
        function al(e, r, o) {
          return (
            r in e
              ? Object.defineProperty(e, r, { value: o, enumerable: !0, configurable: !0, writable: !0 })
              : (e[r] = o),
            e
          );
        }
        function il(e, r) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, r) {
              var o = [],
                t = !0,
                n = !1,
                a = void 0;
              try {
                for (
                  var i, l = e[Symbol.iterator]();
                  !(t = (i = l.next()).done) && (o.push(i.value), !r || o.length !== r);
                  t = !0
                );
              } catch (e) {
                (n = !0), (a = e);
              } finally {
                try {
                  t || null == l.return || l.return();
                } finally {
                  if (n) throw a;
                }
              }
              return o;
            })(e, r) ||
            (function () {
              throw new TypeError('Invalid attempt to destructure non-iterable instance');
            })()
          );
        }
        var ll = /(em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|q|in|pt|pc|px|dpi|dpcm|dppx|%|auto)$/i,
          sl = /^(calc\()/i,
          cl = /^(dashed|dotted|double|groove|hidden|inset|none|outset|ridge|solid)$/i,
          dl = /^(thick|medium|think)$/i,
          ul = /^\d+$/;
        function fl(e) {
          for (var r = [''], o = 0, t = e.trim(), n = 0; n < t.length; n += 1)
            ' ' === t.charAt(n) && 0 === o ? r.push('') : (r[r.length - 1] = r[r.length - 1] + t.charAt(n)),
              '(' === t.charAt(n) ? o++ : ')' === t.charAt(n) && o--;
          return r;
        }
        function gl(e, r) {
          var o = fl(e),
            t = {};
          return (
            o.forEach(function (e) {
              null !== e.match(cl)
                ? (t[r('Style')] = e)
                : null !== e.match(dl) || null !== e.match(ll) || null !== e.match(sl) || '0' === e
                ? (t[r('Width')] = e)
                : (t[r('Color')] = e);
            }),
            t
          );
        }
        var pl = {
            borderWidth: function (e) {
              return 'border' + e + 'Width';
            },
            borderColor: function (e) {
              return 'border' + e + 'Color';
            },
            borderStyle: function (e) {
              return 'border' + e + 'Style';
            },
            padding: function (e) {
              return 'padding' + e;
            },
            margin: function (e) {
              return 'margin' + e;
            }
          },
          bl = {
            borderLeft: function (e) {
              return 'borderLeft' + e;
            },
            borderTop: function (e) {
              return 'borderTop' + e;
            },
            borderRight: function (e) {
              return 'borderRight' + e;
            },
            borderBottom: function (e) {
              return 'borderBottom' + e;
            },
            outline: function (e) {
              return 'outline' + e;
            }
          };
        function ml(e, r) {
          if ('border' === e) {
            var o = gl(r.toString(), function (e) {
                return 'border' + e;
              }),
              t = {};
            for (var n in o) Object.assign(t, ml(n, o[n]));
            return t;
          }
          return 'flex' === e
            ? (function (e) {
                var r = [''];
                switch (e.trim()) {
                  case 'initial':
                    r = fl('0 1 auto');
                    break;
                  case 'auto':
                    r = fl('1 1 auto');
                    break;
                  case 'none':
                    r = fl('0 0 auto');
                    break;
                  default:
                    r = fl(e);
                }
                if (1 === r.length) {
                  var o = r[0];
                  r = null !== o.match(ul) ? fl(o + ' 1 0') : fl('1 1 ' + o);
                }
                var t = {};
                return (
                  2 === r.length
                    ? ((t.flexGrow = r[0]), null !== r[1].match(ul) ? (t.flexShrink = r[1]) : (t.flexBasis = r[1]))
                    : ((t.flexGrow = r[0]), (t.flexShrink = r[1]), (t.flexBasis = r[2])),
                  void 0 === t.flexGrow && (t.flexGrow = '0'),
                  void 0 === t.flexShrink && (t.flexShrink = '1'),
                  void 0 === t.flexBasis && (t.flexBasis = 'auto'),
                  t
                );
              })(r.toString())
            : 'borderRadius' === e
            ? (function (e) {
                var r = (function (e, r) {
                    var o = [[]];
                    return (
                      e.forEach(function (e) {
                        '/' === e ? o.push([]) : o[o.length - 1].push(e);
                      }),
                      o
                    );
                  })(fl(e)),
                  o = il(r, 2),
                  t = o[0],
                  n = void 0 === t ? [] : t,
                  a = o[1],
                  i = void 0 === a ? [] : a,
                  l = il(n, 4),
                  s = l[0],
                  c = l[1],
                  d = void 0 === c ? s : c,
                  u = l[2],
                  f = void 0 === u ? s : u,
                  g = l[3],
                  p = void 0 === g ? d : g,
                  b = il(i, 4),
                  m = b[0],
                  h = b[1],
                  v = void 0 === h ? m : h,
                  y = b[2],
                  C = void 0 === y ? m : y,
                  k = b[3],
                  w = void 0 === k ? v : k;
                return {
                  borderTopLeftRadius: [s, m].filter(Boolean).join(' '),
                  borderTopRightRadius: [d, v].filter(Boolean).join(' '),
                  borderBottomRightRadius: [f, C].filter(Boolean).join(' '),
                  borderBottomLeftRadius: [p, w].filter(Boolean).join(' ')
                };
              })(r.toString())
            : 'textDecoration' === e
            ? (function (e) {
                var r = fl(e);
                if (1 === r.length)
                  return 'initial' === r[0] ? { textDecorationLine: 'none' } : { textDecorationLine: r[0] };
                var o = {};
                return (
                  (o.textDecorationLine = r[0]),
                  (o.textDecorationStyle = r[1] || 'solid'),
                  (o.textDecorationColor = r[2] || 'currentColor'),
                  o
                );
              })(r.toString())
            : 'overflow' === e
            ? (function (e) {
                var r = fl(e);
                return 1 === r.length ? { overflowX: r[0], overflowY: r[0] } : { overflowX: r[0], overflowY: r[1] };
              })(r.toString())
            : pl[e]
            ? (function (e, r) {
                var o,
                  t = il(fl(e), 4),
                  n = t[0],
                  a = t[1],
                  i = void 0 === a ? n : a,
                  l = t[2],
                  s = void 0 === l ? n : l,
                  c = t[3],
                  d = void 0 === c ? i : c;
                return al((o = {}), r('Top'), n), al(o, r('Right'), i), al(o, r('Bottom'), s), al(o, r('Left'), d), o;
              })(r.toString(), pl[e])
            : bl[e]
            ? gl(r.toString(), bl[e])
            : void 0;
        }
        var hl = {
            padding: !0,
            margin: !0,
            border: !0,
            borderWidth: !0,
            borderStyle: !0,
            borderColor: !0,
            borderTop: !0,
            borderRight: !0,
            borderBottom: !0,
            borderLeft: !0,
            borderRadius: !0,
            background: !0,
            outline: !0
          },
          vl = ['_className'],
          yl = 'abcdefghijklmnopqrstuvwxyz',
          Cl = yl.length;
        function kl(e, r) {
          return void 0 === r && (r = ''), e <= Cl ? yl[e - 1] + r : kl((e / Cl) | 0, yl[e % Cl] + r);
        }
        function wl(e, r) {
          void 0 === r &&
            (r = function () {
              return !0;
            });
          var o = kl(e());
          return r(o) ? o : wl(e, r);
        }
        function xl(e, r, o, t, n) {
          return void 0 === o && (o = ''), void 0 === t && (t = ''), void 0 === n && (n = ''), n + t + o + e + r;
        }
        var Sl = ['content', 'keyframe'],
          Bl = n(673),
          El = n.n(Bl),
          Ol = new (El().default || El())({
            cascade: !1,
            compress: !1,
            global: !1,
            keyframe: !1,
            preserve: !1,
            semicolon: !1
          }),
          Fl = !1;
        try {
          Fl = !!window.localStorage.felaDevMode;
        } catch (e) {}
        var Al,
          Pl = ['fa', 'fas', 'far', 'fal', 'fab', 'fc', 'ck', 'cke'],
          jl = {
            devMode: Fl,
            filterClassName: function (e) {
              return -1 === e.indexOf('ad') && -1 === Pl.indexOf(e);
            },
            enhancers: [
              function (e) {
                return (
                  (e._renderStyleToClassNames = function (r, o, t, n) {
                    void 0 === o && (o = ''), void 0 === t && (t = ''), void 0 === n && (n = '');
                    var a,
                      i = r._className,
                      l = ro(r, vl),
                      s = i ? ' ' + i : '';
                    for (var c in l) {
                      var d = l[c];
                      if (null != (a = d) && 'object' == typeof a && !1 === Array.isArray(a))
                        if (Oa(c)) s += e._renderStyleToClassNames(d, o + Fa(c), t, n);
                        else if (Aa(c)) {
                          var u = Pa(t, c.slice(6).trim());
                          s += e._renderStyleToClassNames(d, o, u, n);
                        } else if (ja(c)) {
                          var f = Pa(n, c.slice(9).trim());
                          s += e._renderStyleToClassNames(d, o, t, f);
                        } else
                          console.warn(
                            'The object key "' +
                              c +
                              '" is not a valid nested key in Fela.\nMaybe you forgot to add a plugin to resolve it?\nCheck http://fela.js.org/docs/basics/Rules.html#styleobject for more information.'
                          );
                      else {
                        var g = xl(c, d, o, t, n);
                        if (!e.cache.hasOwnProperty(g)) {
                          if (Ma(d)) {
                            e.cache[g] = { className: '' };
                            continue;
                          }
                          var p = e.selectorPrefix + wl(e.getNextRuleIdentifier, e.filterClassName),
                            b = (0, ba.default)(c, d),
                            m = Da(p, o),
                            h = {
                              type: ka,
                              className: p,
                              selector: m,
                              declaration: b,
                              pseudo: o,
                              media: t,
                              support: n
                            };
                          (e.cache[g] = h), e._emitChange(h);
                        }
                        var v = e.cache[g].className;
                        v && (s += ' ' + v);
                      }
                    }
                    return s;
                  }),
                  e
                );
              },
              function (e) {
                var r = e._emitChange.bind(e);
                return (
                  (e._emitChange = function (e) {
                    e.type === ka &&
                      -1 !== e.selector.indexOf(':focus-visible') &&
                      ((e.pseudo = e.pseudo ? e.pseudo.replace(':focus-visible', ':focus') : ''),
                      (e.selector =
                        'html[data-whatinput="keyboard"] ' + e.selector.replace(':focus-visible', ':focus'))),
                      r(e);
                  }),
                  e
                );
              },
              function (e) {
                var r = e._emitChange.bind(e);
                return (
                  (e._emitChange = function (e) {
                    if (e.type === ka) {
                      var o = Ol('', e.declaration);
                      e.declaration = o.slice(1, -1);
                    }
                    r(e);
                  }),
                  e
                );
              }
            ],
            plugins: [
              function e(r, o, t, n) {
                return n && n.disableAnimations && 'RULE' === o
                  ? Object.keys(r).reduce(function (a, i) {
                      var l,
                        s,
                        c,
                        d = r[i];
                      return -1 !== nl.indexOf(i)
                        ? a
                        : null != (c = d) && 'object' == typeof c && !1 === Array.isArray(c)
                        ? Object.assign({}, a, (((s = {})[i] = e(d, o, t, n)), s))
                        : Object.assign({}, a, (((l = {})[i] = r[i]), l));
                    }, {})
                  : r;
              },
              function e(r, o, t, n) {
                if (!n.sanitizeCss) return r;
                var a = Array.isArray(r) ? [] : {};
                return (
                  Object.keys(r).forEach(function (i) {
                    var l = r[i];
                    'object' != typeof l
                      ? (Sl.some(function (e) {
                          return e === i;
                        }) ||
                          (function (e) {
                            if ('string' != typeof e) return !0;
                            for (var r = [], o = 0; o < e.length; ++o) {
                              var t = e[o];
                              if ('({['.includes(t)) r.push(t);
                              else if (')}]'.includes(t)) {
                                var n = r.pop();
                                if (n && '({['.indexOf(n) !== ')}]'.indexOf(t)) return !1;
                              }
                            }
                            return 0 === r.length;
                          })(l)) &&
                        (a[i] = l)
                      : (a[i] = e(l, o, t, n));
                  }),
                  a
                );
              },
              ((Al = {
                '::placeholder': function (e) {
                  return (0, ya.Z)(
                    ui,
                    function (r, o) {
                      return (r[o] = e), r;
                    },
                    {}
                  );
                }
              }),
              function (e) {
                return di(e, Al);
              }),
              function e(r) {
                return Object.keys(r).reduce(function (o, t) {
                  var n = r[t];
                  if (Qe()(n)) {
                    if ('animationName' === t) {
                      var a = n;
                      return a.keyframe && (r[t] = P(a.keyframe)(a.params || {})), (o[t] = r[t]), o;
                    }
                    return (o[t] = e(n)), o;
                  }
                  return (o[t] = r[t]), o;
                }, {});
              },
              function e(r, o, t, n) {
                var a = function (a) {
                  var i = r[a];
                  'fontFace' === a && 'object' === (void 0 === i ? 'undefined' : ii(i))
                    ? (Array.isArray(i)
                        ? (r.fontFamily = (0, ya.Z)(
                            i,
                            function (e, r) {
                              var o = li(r, t);
                              return o && -1 === e.indexOf(o) && e.push(o), e;
                            },
                            []
                          ).join(','))
                        : (r.fontFamily = li(i, t)),
                      delete r.fontFace)
                    : 'animationName' === a && 'object' === (void 0 === i ? 'undefined' : ii(i))
                    ? Array.isArray(i)
                      ? (r[a] = i
                          .map(function (e) {
                            return t.renderKeyframe(function () {
                              return e;
                            });
                          }, n)
                          .join(','))
                      : (r[a] = t.renderKeyframe(function () {
                          return i;
                        }, n))
                    : va()(i) && e(i, o, t, n);
                };
                for (var i in r) a(i);
                return r;
              },
              function e(r) {
                return Object.keys(r).reduce(function (o, t) {
                  var n,
                    a,
                    i,
                    l,
                    s = r[t];
                  if (null == s) return Object.assign({}, o, (((a = {})[t] = s), a));
                  if (hl[t]) {
                    var c = (function (e, r) {
                      if (Array.isArray(r)) {
                        var o = {};
                        return (
                          r.forEach(function (r) {
                            var t = ml(e, r);
                            t &&
                              Object.keys(t).forEach(function (e) {
                                (o[e] = o[e] || []), o[e].push(t[e]);
                              });
                          }),
                          Object.keys(o).length ? o : null
                        );
                      }
                      return ml(e, r);
                    })(t, s);
                    if (c) return Object.assign({}, o, c);
                  }
                  return Array.isArray(s)
                    ? Object.assign({}, o, (((i = {})[t] = s), i))
                    : 'object' == typeof s
                    ? Object.assign({}, o, (((l = {})[t] = e(s)), l))
                    : Object.assign({}, o, (((n = {})[t] = s), n));
                }, {});
              },
              function e(r) {
                for (var o in r) {
                  var t = r[o];
                  Array.isArray(t) ? (r[o] = (0, si.Z)(o, t)) : va()(t) && 'fontFace' !== o && (r[o] = e(t));
                }
                return r;
              },
              (function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'rtl';
                return function (r, o, t, n) {
                  return 'rtl' === ((n && n.theme && n.theme.direction) || e) ? Si(r) : r;
                };
              })()
            ]
          },
          Il = function () {
            var e = (function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  r = {
                    listeners: [],
                    keyframePrefixes: e.keyframePrefixes || ['-webkit-', '-moz-'],
                    plugins: e.plugins || [],
                    mediaQueryOrder: e.mediaQueryOrder || [],
                    supportQueryOrder: e.supportQueryOrder || [],
                    ruleOrder: [/^:link/, /^:visited/, /^:hover/, /^:focus-within/, /^:focus/, /^:active/],
                    selectorPrefix: ti(e.selectorPrefix),
                    filterClassName: e.filterClassName || ei,
                    devMode: e.devMode || !1,
                    uniqueRuleIdentifier: 0,
                    uniqueKeyframeIdentifier: 0,
                    nodes: {},
                    scoreIndex: {},
                    cache: {},
                    getNextRuleIdentifier: function () {
                      return ++r.uniqueRuleIdentifier;
                    },
                    renderRule: function (e) {
                      var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                      return r._renderStyle(e(o, r), o);
                    },
                    renderKeyframe: function (e) {
                      var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = e(o, r),
                        n = Ca(r, t, wa, o),
                        a = JSON.stringify(n);
                      if (!r.cache.hasOwnProperty(a)) {
                        var i = r.selectorPrefix + La(++r.uniqueKeyframeIdentifier),
                          l = Ta(n, i, r.keyframePrefixes),
                          s = { type: wa, keyframe: l, name: i };
                        (r.cache[a] = s), r._emitChange(s);
                      }
                      return r.cache[a].name;
                    },
                    renderFont: function (e, o) {
                      var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        n = t.localAlias,
                        a = ai(t, ['localAlias']),
                        i = e + JSON.stringify(t),
                        l = Qa(n);
                      if (!r.cache.hasOwnProperty(i)) {
                        var s = ri(e),
                          c = _a(ni({}, a, { src: qa(o, l), fontFamily: s })),
                          d = { type: xa, fontFace: c, fontFamily: s };
                        (r.cache[i] = d), r._emitChange(d);
                      }
                      return r.cache[i].fontFamily;
                    },
                    renderStatic: function (e, o) {
                      var t = Ja(e, o);
                      if (!r.cache.hasOwnProperty(t)) {
                        var n = Wa(e, r),
                          a = { type: Sa, css: n, selector: o };
                        (r.cache[t] = a), r._emitChange(a);
                      }
                    },
                    subscribe: function (e) {
                      return (
                        r.listeners.push(e),
                        {
                          unsubscribe: function () {
                            return r.listeners.splice(r.listeners.indexOf(e), 1);
                          }
                        }
                      );
                    },
                    clear: function () {
                      (r.uniqueRuleIdentifier = 0),
                        (r.uniqueKeyframeIdentifier = 0),
                        (r.cache = {}),
                        r._emitChange({ type: Ba });
                    },
                    _renderStyle: function () {
                      var e = Ca(
                        r,
                        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        ka,
                        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      );
                      return r._renderStyleToClassNames(e).slice(1);
                    },
                    _renderStyleToClassNames: function (e) {
                      var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : '',
                        a = e._className,
                        i = ai(e, ['_className']),
                        l = a ? ' ' + a : '';
                      for (var s in i) {
                        var c = i[s];
                        if (va()(c))
                          if (Oa(s)) l += r._renderStyleToClassNames(c, o + Fa(s), t, n);
                          else if (Aa(s)) {
                            var d = Pa(t, s.slice(6).trim());
                            l += r._renderStyleToClassNames(c, o, d, n);
                          } else if (ja(s)) {
                            var u = Pa(n, s.slice(9).trim());
                            l += r._renderStyleToClassNames(c, o, t, u);
                          } else
                            console.warn(
                              'The object key "' +
                                s +
                                '" is not a valid nested key in Fela.\nMaybe you forgot to add a plugin to resolve it?\nCheck http://fela.js.org/docs/basics/Rules.html#styleobject for more information.'
                            );
                        else {
                          var f = Ra(s, c, o, t, n);
                          if (!r.cache.hasOwnProperty(f)) {
                            if (Ma(c)) {
                              r.cache[f] = { className: '' };
                              continue;
                            }
                            var g = r.selectorPrefix + Ua(r.getNextRuleIdentifier, r.filterClassName),
                              p = (0, ba.default)(s, c),
                              b = Da(g, o),
                              m = {
                                type: ka,
                                className: g,
                                selector: b,
                                declaration: p,
                                pseudo: o,
                                media: t,
                                support: n
                              };
                            (r.cache[f] = m), r._emitChange(m);
                          }
                          var h = r.cache[f].className;
                          h && (l += ' ' + h);
                        }
                      }
                      return l;
                    },
                    _emitChange: function (e) {
                      (0, ma.Z)(r.listeners, function (r) {
                        return r(e);
                      });
                    }
                  };
                return (
                  r.keyframePrefixes.push(''),
                  e.enhancers &&
                    (0, ma.Z)(e.enhancers, function (e) {
                      r = e(r);
                    }),
                  r
                );
              })(jl),
              r = 0;
            return {
              registerUsage: function () {
                r += 1;
              },
              unregisterUsage: function () {
                0 == (r -= 1) && ((e.listeners = []), (e.nodes = {}), (e.updateSubscription = void 0));
              },
              renderFont: function (r) {
                e.renderFont(r.name, r.paths, r.props);
              },
              renderGlobal: e.renderStatic,
              renderRule: function (r, o) {
                var t = Object.assign({}, o, { theme: { direction: o.direction } });
                return e.renderRule(function () {
                  return r;
                }, t);
              },
              getOriginalRenderer: function () {
                throw new Error('This method implements private API and can be used only in tests');
              },
              Provider: function (r) {
                return C.createElement(tl, { renderer: e, rehydrate: !1, targetDocument: r.target }, r.children);
              }
            };
          },
          Rl = C.createContext(Il),
          Ml = { document: 'document' },
          Dl = new WeakMap(),
          zl = function (e, r) {
            var o = r || Ml;
            if (((Ft() && void 0 !== r) || (o = Ml), Ft() && r === document && (o = Ml), Dl.has(o))) return Dl.get(o);
            var t = e(o === Ml ? void 0 : o);
            return Dl.set(o, t), t;
          },
          _l = function (e) {
            for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++) o[t - 1] = arguments[t];
            return Object.assign.apply(Object, [e].concat(o));
          },
          Hl = function (e) {
            for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++) o[t - 1] = arguments[t];
            return o.reduce(function (e, r) {
              return 'boolean' == typeof r ? r : e;
            }, e);
          },
          Tl = (function () {
            var e = function (e) {
              var r = e.render,
                o = Y();
              return C.createElement(C.Fragment, null, r(o.theme));
            };
            return (e.displayName = 'ProviderConsumer'), (e.propTypes = { render: de.func.isRequired }), e;
          })(),
          Wl = (function () {
            var e = function e(r) {
              var o = r.children,
                t = r.className,
                n = r.design,
                a = r.overwrite,
                i = r.styles,
                l = r.variables,
                s = r.telemetryRef,
                c = Ce(r),
                d = nr(e.handledProps, r),
                u = c === C.Fragment,
                f = C.useMemo(
                  function () {
                    if (s) return s.current || (s.current = new pa()), s.current;
                  },
                  [s]
                ),
                g = Y(),
                p = a ? G : g,
                b = C.useContext(Rl),
                m = C.useMemo(
                  function () {
                    return {
                      disableAnimations: r.disableAnimations,
                      performance: r.performance,
                      rtl: r.rtl,
                      target: r.target,
                      telemetry: f,
                      theme: r.theme
                    };
                  },
                  [r.disableAnimations, r.performance, r.rtl, r.target, f, r.theme]
                ),
                h = C.useMemo(
                  function () {
                    return (function (e) {
                      for (
                        var r = {
                            theme: {
                              siteVariables: { fontSizes: {} },
                              componentVariables: {},
                              componentStyles: {},
                              fontFaces: [],
                              staticStyles: [],
                              animations: {}
                            },
                            rtl: !1,
                            disableAnimations: !1,
                            target: Ft() ? document : void 0,
                            performance: {
                              enableSanitizeCssPlugin: !1,
                              enableStylesCaching: !0,
                              enableVariablesCaching: !0,
                              enableBooleanVariablesCaching: !1
                            },
                            telemetry: void 0,
                            renderer: void 0
                          },
                          o = arguments.length,
                          t = new Array(o > 1 ? o - 1 : 0),
                          n = 1;
                        n < o;
                        n++
                      )
                        t[n - 1] = arguments[n];
                      return t.reduce(function (r, o) {
                        if (!o) return r;
                        r.theme = U(r.theme, o.theme);
                        var t = Hl(r.rtl, o.rtl);
                        'boolean' == typeof t && (r.rtl = t),
                          (r.target = o.target || r.target),
                          (r.renderer = zl(e, r.target));
                        var n = Hl(r.disableAnimations, o.disableAnimations);
                        return (
                          'boolean' == typeof n && (r.disableAnimations = n),
                          (r.performance = _l(r.performance, o.performance || {})),
                          (r.telemetry = o.telemetry || r.telemetry),
                          r
                        );
                      }, r);
                    })(b, p, m);
                  },
                  [b, p, m]
                ),
                v = {};
              g.rtl !== h.rtl && ga()(h.rtl) && (v.dir = h.rtl ? 'rtl' : 'ltr');
              var y = (
                  u
                    ? { classes: { root: '' } }
                    : or({
                        allDisplayNames: [e.displayName],
                        className: 'ui-provider',
                        primaryDisplayName: e.displayName,
                        componentProps: {},
                        inlineStylesProps: { className: t, design: n, styles: i, variables: l },
                        disableAnimations: h.disableAnimations,
                        performance: h.performance,
                        renderer: h.renderer,
                        rtl: h.rtl,
                        theme: h.theme,
                        saveDebug: ua(),
                        telemetry: void 0
                      })
                ).classes,
                k = C.useMemo(
                  function () {
                    return { className: y.root };
                  },
                  [y.root]
                ),
                w = h.renderer.Provider;
              return (
                Ue(function () {
                  return (
                    (e = h.renderer),
                    (o = r.theme).fontFaces &&
                      o.fontFaces.forEach(function (r) {
                        !(function (r) {
                          if (!Qe()(r)) throw new Error('fontFaces must be objects, got: ' + typeof r);
                          e.renderFont(r);
                        })(r);
                      }),
                    (function (e, r, o) {
                      if (r.staticStyles) {
                        var t = function (r) {
                          x()(r, function (r, o) {
                            e.renderGlobal(r, o);
                          });
                        };
                        r.staticStyles.forEach(function (r) {
                          if ('string' == typeof r) e.renderGlobal(r);
                          else if (Qe()(r)) t(r);
                          else {
                            if (!ir()(r))
                              throw new Error(
                                'staticStyles array must contain CSS strings, style objects, or style functions, got: ' +
                                  typeof r
                              );
                            var n = H(void 0, o);
                            t(r(n));
                          }
                        });
                      }
                    })(h.renderer, r.theme, h.theme.siteVariables),
                    r.target &&
                      (function (e) {
                        var r = e.defaultView;
                        if (Ft() && r && 'addEventListener' in r && Array.prototype.indexOf) {
                          var o = e.whatInputInitialized;
                          if ('number' == typeof o && o > 0) return void (e.whatInputInitialized = o + 1);
                          (e.whatInputInitialized = 1), mn(r), vn(e);
                        }
                      })(r.target),
                    h.renderer.registerUsage(),
                    function () {
                      var e, o, t, n;
                      r.target &&
                        ((e = r.target),
                        (n = e.defaultView),
                        Ft() &&
                          n &&
                          'removeEventListener' in n &&
                          (1 === e.whatInputInitialized
                            ? (delete e.whatInputInitialized,
                              (t = !pn || { capture: !0 }),
                              (o = n).PointerEvent
                                ? o.removeEventListener('pointerdown', hn)
                                : window.MSPointerEvent
                                ? o.removeEventListener('MSPointerDown', hn)
                                : (o.removeEventListener('mousedown', hn, !0),
                                  'ontouchstart' in o &&
                                    (o.removeEventListener('touchstart', yn, t),
                                    o.removeEventListener('touchend', hn, !0))),
                              o.removeEventListener('keydown', yn, !0),
                              o.removeEventListener('keyup', yn, !0))
                            : (e.whatInputInitialized = e.whatInputInitialized - 1))),
                        h.renderer.unregisterUsage();
                    }
                  );
                  var e, o;
                }, []),
                u
                  ? C.createElement(
                      w,
                      { target: h.target },
                      C.createElement($, { value: h }, C.createElement(C.Fragment, null, o))
                    )
                  : C.createElement(
                      w,
                      { target: h.target },
                      C.createElement(
                        $,
                        { value: h },
                        C.createElement(
                          Nn.Provider,
                          { value: k },
                          C.createElement(c, re({ className: y.root }, v, d), o)
                        )
                      )
                    )
              );
            };
            return (
              (e.displayName = 'Provider'),
              (e.defaultProps = { theme: {} }),
              (e.propTypes = {
                as: de.elementType,
                design: de.object,
                variables: de.oneOfType([de.object, de.func]),
                styles: de.oneOfType([de.object, de.func]),
                theme: de.shape({
                  siteVariables: de.object,
                  componentVariables: de.object,
                  componentStyles: de.objectOf(de.any),
                  fontFaces: de.arrayOf(
                    de.exact({
                      name: de.string.isRequired,
                      paths: de.arrayOf(de.string),
                      props: de.shape({
                        fontStretch: de.string,
                        fontStyle: de.string,
                        fontVariant: de.string,
                        fontWeight: de.number,
                        localAlias: de.oneOfType([de.string, de.arrayOf(de.string)]),
                        unicodeRange: de.string
                      })
                    })
                  ),
                  staticStyles: de.array,
                  animations: de.objectOf(de.any)
                }),
                rtl: de.bool,
                disableAnimations: de.bool,
                performance: de.shape({
                  enableSanitizeCssPlugin: de.bool,
                  enableStylesCaching: de.bool,
                  enableVariablesCaching: de.bool
                }),
                children: de.node.isRequired,
                overwrite: de.bool,
                target: de.object,
                telemetryRef: de.object
              }),
              (e.handledProps = Object.keys(e.propTypes)),
              (e.Consumer = Tl),
              e
            );
          })(),
          Ll = 'cubic-bezier(1,0,1,1)',
          Nl = 'cubic-bezier(0,0,0,1)',
          Vl = 'cubic-bezier(0,0,1,1)',
          Zl = '50ms',
          Ul = '100ms',
          Gl = '150ms',
          Xl = '200ms',
          Yl = '300ms',
          Kl = '400ms',
          $l = '500ms',
          ql = {
            scaleEnterUltraFast: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'scale(' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'scale(1)', opacity: 1 }
                };
              },
              keyframeParams: { delta: 0.88 },
              duration: Zl,
              timingFunction: Nl,
              fillMode: 'forwards'
            },
            scaleEnterFaster: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'scale(' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'scale(1)', opacity: 1 }
                };
              },
              keyframeParams: { delta: 0.88 },
              duration: Ul,
              timingFunction: Nl,
              fillMode: 'forwards'
            },
            scaleEnterFast: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'scale(' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'scale(1)', opacity: 1 }
                };
              },
              keyframeParams: { delta: 0.88 },
              duration: Gl,
              timingFunction: Nl,
              fillMode: 'forwards'
            },
            scaleEnterNormal: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'scale(' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'scale(1)', opacity: 1 }
                };
              },
              keyframeParams: { delta: 0.88 },
              duration: Xl,
              timingFunction: Nl,
              fillMode: 'forwards'
            },
            scaleEnterSlow: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'scale(' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'scale(1)', opacity: 1 }
                };
              },
              keyframeParams: { delta: 0.88 },
              duration: Yl,
              timingFunction: Nl,
              fillMode: 'forwards'
            },
            scaleEnterSlower: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'scale(' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'scale(1)', opacity: 1 }
                };
              },
              keyframeParams: { delta: 0.88 },
              duration: Kl,
              timingFunction: Nl,
              fillMode: 'forwards'
            },
            scaleEnterUltraSlow: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'scale(' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'scale(1)', opacity: 1 }
                };
              },
              keyframeParams: { delta: 0.88 },
              duration: $l,
              timingFunction: Nl,
              fillMode: 'forwards'
            },
            scaleExitUltraFast: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'scale(1)', opacity: 1 },
                  '100%': { transform: 'scale(' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: 0.9 },
              duration: Zl,
              timingFunction: Ll,
              fillMode: 'forwards'
            },
            scaleExitFaster: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'scale(1)', opacity: 1 },
                  '100%': { transform: 'scale(' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: 0.9 },
              duration: Ul,
              timingFunction: Ll,
              fillMode: 'forwards'
            },
            scaleExitFast: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'scale(1)', opacity: 1 },
                  '100%': { transform: 'scale(' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: 0.9 },
              duration: Gl,
              timingFunction: Ll,
              fillMode: 'forwards'
            },
            scaleExitNormal: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'scale(1)', opacity: 1 },
                  '100%': { transform: 'scale(' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: 0.9 },
              duration: Xl,
              timingFunction: Ll,
              fillMode: 'forwards'
            },
            scaleExitSlow: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'scale(1)', opacity: 1 },
                  '100%': { transform: 'scale(' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: 0.9 },
              duration: Yl,
              timingFunction: Ll,
              fillMode: 'forwards'
            },
            scaleExitSlower: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'scale(1)', opacity: 1 },
                  '100%': { transform: 'scale(' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: 0.9 },
              duration: Kl,
              timingFunction: Ll,
              fillMode: 'forwards'
            },
            scaleExitUltraSlow: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'scale(1)', opacity: 1 },
                  '100%': { transform: 'scale(' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: 0.9 },
              duration: $l,
              timingFunction: Ll,
              fillMode: 'forwards'
            },
            scaleDownSoft: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'scale(1)', opacity: 1 },
                  '100%': { transform: 'scale(' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: 0.9 },
              duration: '100ms',
              timingFunction: 'cubic-bezier(.78, 0, .22, 1)',
              fillMode: 'both'
            }
          },
          Jl = {
            fadeEnterUltraFast: {
              keyframe: function (e) {
                return { '0%': { opacity: e.delta }, '100%': { opacity: 1 } };
              },
              keyframeParams: { delta: 0 },
              duration: Zl,
              timingFunction: Vl,
              fillMode: 'forwards'
            },
            fadeEnterFaster: {
              keyframe: function (e) {
                return { '0%': { opacity: e.delta }, '100%': { opacity: 1 } };
              },
              keyframeParams: { delta: 0 },
              duration: Ul,
              timingFunction: Vl,
              fillMode: 'forwards'
            },
            fadeEnterFast: {
              keyframe: function (e) {
                return { '0%': { opacity: e.delta }, '100%': { opacity: 1 } };
              },
              keyframeParams: { delta: 0 },
              duration: Gl,
              timingFunction: Vl,
              fillMode: 'forwards'
            },
            fadeEnterNormal: {
              keyframe: function (e) {
                return { '0%': { opacity: e.delta }, '100%': { opacity: 1 } };
              },
              keyframeParams: { delta: 0 },
              duration: Xl,
              timingFunction: Vl,
              fillMode: 'forwards'
            },
            fadeEnterSlow: {
              keyframe: function (e) {
                return { '0%': { opacity: e.delta }, '100%': { opacity: 1 } };
              },
              keyframeParams: { delta: 0 },
              duration: Yl,
              timingFunction: Vl,
              fillMode: 'forwards'
            },
            fadeEnterSlower: {
              keyframe: function (e) {
                return { '0%': { opacity: e.delta }, '100%': { opacity: 1 } };
              },
              keyframeParams: { delta: 0 },
              duration: Kl,
              timingFunction: Vl,
              fillMode: 'forwards'
            },
            fadeEnterUltraSlow: {
              keyframe: function (e) {
                return { '0%': { opacity: e.delta }, '100%': { opacity: 1 } };
              },
              keyframeParams: { delta: 0 },
              duration: $l,
              timingFunction: Vl,
              fillMode: 'forwards'
            },
            fadeExitUltraFast: {
              keyframe: function (e) {
                return { '0%': { opacity: 1 }, '100%': { opacity: e.delta } };
              },
              keyframeParams: { delta: 0 },
              duration: Zl,
              timingFunction: Vl,
              fillMode: 'forwards'
            },
            fadeExitFaster: {
              keyframe: function (e) {
                return { '0%': { opacity: 1 }, '100%': { opacity: e.delta } };
              },
              keyframeParams: { delta: 0 },
              duration: Ul,
              timingFunction: Vl,
              fillMode: 'forwards'
            },
            fadeExitFast: {
              keyframe: function (e) {
                return { '0%': { opacity: 1 }, '100%': { opacity: e.delta } };
              },
              keyframeParams: { delta: 0 },
              duration: Gl,
              timingFunction: Vl,
              fillMode: 'forwards'
            },
            fadeExitNormal: {
              keyframe: function (e) {
                return { '0%': { opacity: 1 }, '100%': { opacity: e.delta } };
              },
              keyframeParams: { delta: 0 },
              duration: Xl,
              timingFunction: Vl,
              fillMode: 'forwards'
            },
            fadeExitSlow: {
              keyframe: function (e) {
                return { '0%': { opacity: 1 }, '100%': { opacity: e.delta } };
              },
              keyframeParams: { delta: 0 },
              duration: Yl,
              timingFunction: Vl,
              fillMode: 'forwards'
            },
            fadeExitSlower: {
              keyframe: function (e) {
                return { '0%': { opacity: 1 }, '100%': { opacity: e.delta } };
              },
              keyframeParams: { delta: 0 },
              duration: Kl,
              timingFunction: Vl,
              fillMode: 'forwards'
            },
            fadeExitUltraSlow: {
              keyframe: function (e) {
                return { '0%': { opacity: 1 }, '100%': { opacity: e.delta } };
              },
              keyframeParams: { delta: 0 },
              duration: $l,
              timingFunction: Vl,
              fillMode: 'forwards'
            }
          },
          Ql = {
            slideDownEnterUltraFast: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateY(-' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'translateY(0px)', opacity: 1 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Zl,
              timingFunction: Nl,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideDownEnterFaster: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateY(-' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'translateY(0px)', opacity: 1 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Ul,
              timingFunction: Nl,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideDownEnterFast: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateY(-' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'translateY(0px)', opacity: 1 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Gl,
              timingFunction: Nl,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideDownEnterNormal: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateY(-' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'translateY(0px)', opacity: 1 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Xl,
              timingFunction: Nl,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideDownEnterSlow: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateY(-' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'translateY(0px)', opacity: 1 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Yl,
              timingFunction: Nl,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideDownEnterSlower: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateY(-' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'translateY(0px)', opacity: 1 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Kl,
              timingFunction: Nl,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideDownEnterUltraSlow: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateY(-' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'translateY(0px)', opacity: 1 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: $l,
              timingFunction: Nl,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideUpEnterUltraFast: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateY(' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'translateY(0px)', opacity: 1 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Zl,
              timingFunction: Nl,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideUpEnterFaster: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateY(' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'translateY(0px)', opacity: 1 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Ul,
              timingFunction: Nl,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideUpEnterFast: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateY(' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'translateY(0px)', opacity: 1 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Gl,
              timingFunction: Nl,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideUpEnterNormal: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateY(' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'translateY(0px)', opacity: 1 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Xl,
              timingFunction: Nl,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideUpEnterSlow: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateY(' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'translateY(0px)', opacity: 1 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Yl,
              timingFunction: Nl,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideUpEnterSlower: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateY(' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'translateY(0px)', opacity: 1 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Kl,
              timingFunction: Nl,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideUpEnterUltraSlow: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateY(' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'translateY(0px)', opacity: 1 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: $l,
              timingFunction: Nl,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideLeftEnterUltraFast: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateX(' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'translateX(0px)', opacity: 1 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Zl,
              timingFunction: Nl,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideLeftEnterFaster: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateX(' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'translateX(0px)', opacity: 1 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Ul,
              timingFunction: Nl,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideLeftEnterFast: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateX(' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'translateX(0px)', opacity: 1 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Gl,
              timingFunction: Nl,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideLeftEnterNormal: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateX(' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'translateX(0px)', opacity: 1 }
                };
              },
              keyframeParams: { delta: '200px' },
              duration: Xl,
              timingFunction: Nl,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideLeftEnterSlow: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateX(' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'translateX(0px)', opacity: 1 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Yl,
              timingFunction: Nl,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideLeftEnterSlower: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateX(' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'translateX(0px)', opacity: 1 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Kl,
              timingFunction: Nl,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideLeftEnterUltraSlow: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateX(' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'translateX(0px)', opacity: 1 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: $l,
              timingFunction: Nl,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideRightEnterUltraFast: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateX(-' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'translateX(0px)', opacity: 1 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Zl,
              timingFunction: Nl,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideRightEnterFaster: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateX(-' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'translateX(0px)', opacity: 1 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Ul,
              timingFunction: Nl,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideRightEnterFast: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateX(-' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'translateX(0px)', opacity: 1 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Gl,
              timingFunction: Nl,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideRightEnterNormal: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateX(-' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'translateX(0px)', opacity: 1 }
                };
              },
              keyframeParams: { delta: '200px' },
              duration: Xl,
              timingFunction: Nl,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideRightEnterSlow: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateX(-' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'translateX(0px)', opacity: 1 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Yl,
              timingFunction: Nl,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideRightEnterSlower: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateX(-' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'translateX(0px)', opacity: 1 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Kl,
              timingFunction: Nl,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideRightEnterUltraSlow: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateX(-' + e.delta + ')', opacity: 0 },
                  '100%': { transform: 'translateX(0px)', opacity: 1 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: $l,
              timingFunction: Nl,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideDownExitUltraFast: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateY(0px)', opacity: 1 },
                  '100%': { transform: 'translateY(' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Zl,
              timingFunction: Ll,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideDownExitFaster: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateY(0px)', opacity: 1 },
                  '100%': { transform: 'translateY(' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Ul,
              timingFunction: Ll,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideDownExitFast: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateY(0px)', opacity: 1 },
                  '100%': { transform: 'translateY(' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Gl,
              timingFunction: Ll,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideDownExitNormal: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateY(0px)', opacity: 1 },
                  '100%': { transform: 'translateY(' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Xl,
              timingFunction: Ll,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideDownExitSlow: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateY(0px)', opacity: 1 },
                  '100%': { transform: 'translateY(' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Yl,
              timingFunction: Ll,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideDownExitSlower: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateY(0px)', opacity: 1 },
                  '100%': { transform: 'translateY(' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Kl,
              timingFunction: Ll,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideDownExitUltraSlow: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateY(0px)', opacity: 1 },
                  '100%': { transform: 'translateY(' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: $l,
              timingFunction: Ll,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideUpExitUltraFast: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateY(0px)', opacity: 1 },
                  '100%': { transform: 'translateY(-' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Zl,
              timingFunction: Ll,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideUpExitFaster: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateY(0px)', opacity: 1 },
                  '100%': { transform: 'translateY(-' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Ul,
              timingFunction: Ll,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideUpExitFast: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateY(0px)', opacity: 1 },
                  '100%': { transform: 'translateY(-' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Gl,
              timingFunction: Ll,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideUpExitNormal: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateY(0px)', opacity: 1 },
                  '100%': { transform: 'translateY(-' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Xl,
              timingFunction: Ll,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideUpExitSlow: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateY(0px)', opacity: 1 },
                  '100%': { transform: 'translateY(-' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Yl,
              timingFunction: Ll,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideUpExitSlower: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateY(0px)', opacity: 1 },
                  '100%': { transform: 'translateY(-' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Kl,
              timingFunction: Ll,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideUpExitUltraSlow: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateY(0px)', opacity: 1 },
                  '100%': { transform: 'translateY(-' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: $l,
              timingFunction: Ll,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideRightExitUltraFast: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateX(0px)', opacity: 1 },
                  '100%': { transform: 'translateX(' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Zl,
              timingFunction: Ll,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideRightExitFaster: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateX(0px)', opacity: 1 },
                  '100%': { transform: 'translateX(' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Ul,
              timingFunction: Ll,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideRightExitFast: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateX(0px)', opacity: 1 },
                  '100%': { transform: 'translateX(' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Gl,
              timingFunction: Ll,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideRightExitNormal: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateX(0px)', opacity: 1 },
                  '100%': { transform: 'translateX(' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Xl,
              timingFunction: Ll,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideRightExitSlow: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateX(0px)', opacity: 1 },
                  '100%': { transform: 'translateX(' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Yl,
              timingFunction: Ll,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideRightExitSlower: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateX(0px)', opacity: 1 },
                  '100%': { transform: 'translateX(' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Kl,
              timingFunction: Ll,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideRightExitUltraSlow: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateX(0px)', opacity: 1 },
                  '100%': { transform: 'translateX(' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: $l,
              timingFunction: Ll,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideLeftExitUltraFast: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateX(0px)', opacity: 1 },
                  '100%': { transform: 'translateX(-' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Zl,
              timingFunction: Ll,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideLeftExitFaster: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateX(0px)', opacity: 1 },
                  '100%': { transform: 'translateX(-' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Ul,
              timingFunction: Ll,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideLeftExitFast: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateX(0px)', opacity: 1 },
                  '100%': { transform: 'translateX(-' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Gl,
              timingFunction: Ll,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideLeftExitNormal: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateX(0px)', opacity: 1 },
                  '100%': { transform: 'translateX(-' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Xl,
              timingFunction: Ll,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideLeftExitSlow: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateX(0px)', opacity: 1 },
                  '100%': { transform: 'translateX(-' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Yl,
              timingFunction: Ll,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideLeftExitSlower: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateX(0px)', opacity: 1 },
                  '100%': { transform: 'translateX(-' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: Kl,
              timingFunction: Ll,
              direction: 'forward',
              fillMode: 'forwards'
            },
            slideLeftExitUltraSlow: {
              keyframe: function (e) {
                return {
                  '0%': { transform: 'translateX(0px)', opacity: 1 },
                  '100%': { transform: 'translateX(-' + e.delta + ')', opacity: 0 }
                };
              },
              keyframeParams: { delta: '20px' },
              duration: $l,
              timingFunction: Ll,
              direction: 'forward',
              fillMode: 'forwards'
            }
          },
          es = Object.assign({}, Jl, ql, Ql, {
            'carousel-slide-to-next-enter': Ql.slideLeftEnterNormal,
            'carousel-slide-to-previous-enter': Ql.slideRightEnterNormal,
            'popup-show': Jl.fadeEnterUltraFast,
            'popup-hide': Jl.fadeExitUltraFast
          }),
          rs = null,
          os = function (e, r) {
            var o;
            return (
              r ||
                rs ||
                (rs = (function () {
                  if (Ft())
                    try {
                      return (
                        (function (e) {
                          return (e && parseFloat(e)) || null;
                        })(getComputedStyle(document.documentElement).fontSize) || 16
                      );
                    } catch (e) {
                      return 16;
                    }
                  return 16;
                })()),
              ((1e4 * (o = e / (r || rs || 16)) + (o > 0 ? 0.5 : -0.5)) << 0) / 1e4 + 'rem'
            );
          },
          ts = {
            brand: {
              50: '#e8ebfa',
              100: '#dcdffa',
              200: '#c5cbfa',
              300: '#acb3fa',
              400: '#9399f5',
              450: '#9499f5',
              500: '#7a80eb',
              600: '#5b5fc7',
              700: '#444691',
              800: '#3d3e78',
              900: '#383966',
              1e3: '#2f2f4a'
            }
          },
          ns = {
            grey: {
              0: '#FFFFFF',
              25: '#FCFCFB',
              50: '#FAF9F8',
              100: '#F3F2F1',
              150: '#EDEBE9',
              200: '#E1DFDD',
              250: '#C8C6C4',
              300: '#B3B0AD',
              340: '#999',
              350: '#979593',
              400: '#8A8886',
              430: '#707070',
              440: '#666666',
              450: '#605E5C',
              500: '#484644',
              550: '#3B3A39',
              600: '#323131',
              650: '#2D2C2C',
              700: '#292828',
              750: '#252423',
              800: '#201F1F',
              850: '#1B1A1A',
              900: '#11100F',
              1e3: '#000000'
            },
            orange: {
              50: '#F9ECEA',
              100: '#EFDBD3',
              200: '#EDC2A7',
              300: '#E97548',
              400: '#CC4A31',
              500: '#BD432C',
              600: '#A33D2A',
              700: '#833122',
              800: '#664134',
              900: '#51332C'
            },
            pink: {
              50: '#FDF5FC',
              100: '#F5D9F2',
              150: '#EDBAE7',
              200: '#DA7DCF',
              300: '#D060C3',
              400: '#C94BBA',
              500: '#C239B3',
              600: '#AE33A0',
              650: '#932B87',
              700: '#6D1F64',
              800: '#3A1135',
              900: '#1F091C'
            },
            red: {
              50: '#FCF4F6',
              100: '#F3D6D8',
              200: '#F75E75',
              300: '#E73550',
              400: '#C4314B',
              500: '#A72037',
              600: '#8E192E',
              700: '#4F222B',
              800: '#3E1F25',
              900: '#1E040A'
            },
            green: {
              50: '#E7F2DA',
              100: '#BDDA9B',
              200: '#92C353',
              300: '#6BB700',
              400: '#13A40E',
              500: void 0,
              600: '#237B4B',
              700: void 0,
              800: '#0D2E0D',
              900: '#032003'
            },
            yellow: {
              50: void 0,
              100: '#FBF6D9',
              200: '#F2E384',
              300: '#F9EC02',
              400: '#F8D22A',
              500: '#FFB900',
              600: '#FFAA44',
              700: '#835C00',
              800: '#463100',
              900: '#261A00'
            }
          },
          as = Object.assign({}, ts, ns),
          is = { black: '#000', white: '#fff' },
          ls = {
            silver: {
              100: 'rgba(255,255,255,0.85)',
              200: 'rgba(255,255,255,0.75)',
              300: 'rgba(255,255,255,0.65)',
              400: 'rgba(255,255,255,0.5)',
              500: 'rgba(255,255,255,0.4)',
              600: 'rgba(255,255,255,0.3)',
              700: 'rgba(255,255,255,0.2)',
              800: 'rgba(255,255,255,0.1)',
              900: 'rgba(255,255,255,0.05)'
            },
            ruby: {
              100: void 0,
              200: void 0,
              300: void 0,
              400: void 0,
              500: 'rgba(196,49,75,0.9)',
              600: 'rgba(167,32,55,0.9)',
              700: 'rgba(142,25,46,0.9)',
              800: void 0,
              900: void 0
            },
            onyx: {
              100: 'rgba(59,58,57,0.9)',
              200: 'rgba(45,44,44,0.4)',
              300: 'rgba(37,36,35,0.2)',
              400: 'rgba(37,36,35,0.65)',
              500: 'rgba(41,40,40,0.9)',
              600: 'rgba(0,0,0,0.05)',
              700: 'rgba(0,0,0,0.5)',
              800: 'rgba(27,26,26,0.9)',
              900: 'rgba(0,0,0,0.8)'
            },
            amethyst: {
              100: void 0,
              200: void 0,
              300: void 0,
              400: 'rgba(98,100,167,0.75)',
              500: 'rgba(51,52,74,0.5)',
              600: 'rgba(70,71,117,0.4)',
              700: 'rgba(98,100,167,0.15)',
              800: void 0,
              900: void 0
            }
          },
          ss = Object.assign({}, as, is, ls),
          cs = function (e) {
            return (
              void 0 === e && (e = {}),
              Object.assign(
                {
                  foreground: void 0,
                  background: void 0,
                  border: void 0,
                  shadow: void 0,
                  foregroundHover: void 0,
                  backgroundHover: void 0,
                  borderHover: void 0,
                  shadowHover: void 0,
                  foregroundActive: void 0,
                  backgroundActive: void 0,
                  borderActive: void 0,
                  shadowActive: void 0,
                  foregroundFocus: void 0,
                  backgroundFocus: void 0,
                  borderFocus: void 0,
                  shadowFocus: void 0,
                  foregroundPressed: void 0,
                  backgroundPressed: void 0,
                  borderPressed: void 0,
                  shadowPressed: void 0,
                  foregroundDisabled: void 0,
                  backgroundDisabled: void 0,
                  borderDisabled: void 0,
                  shadowDisabled: void 0
                },
                e
              )
            );
          },
          ds = (function () {
            var e = {
              default: cs({
                foreground: ss.grey[750],
                foreground1: ss.grey[500],
                foreground2: ss.grey[450],
                foreground3: ss.white,
                foreground4: ss.white,
                foreground5: ss.grey[100],
                foreground6: ss.grey[200],
                foreground7: ss.grey[750],
                foreground8: ss.grey[750],
                foreground9: ss.grey[430],
                background: ss.white,
                background1: ss.grey[50],
                background2: ss.grey[100],
                background3: ss.grey[150],
                background4: ss.grey[100],
                background5: ss.grey[350],
                background6: ss.grey[550],
                border: ss.grey[200],
                border1: ss.grey[150],
                border2: ss.grey[200],
                border3: ss.grey[150],
                borderTransparent: 'transparent',
                borderTransparentActive: 'transparent',
                shadow: ss.black,
                shadowHover: ss.black,
                foregroundHover: ss.grey[750],
                foregroundHover1: ss.white,
                foregroundHover2: ss.white,
                backgroundHover: ss.grey[100],
                backgroundHover1: ss.grey[150],
                backgroundHover2: 'transparent',
                backgroundHover3: ss.grey[150],
                backgroundHover4: ss.grey[50],
                borderHover: ss.grey[250],
                foregroundPressed: ss.grey[750],
                backgroundPressed: ss.grey[200],
                backgroundPressed3: ss.grey[150],
                borderPressed: ss.grey[250],
                foregroundActive: ss.grey[750],
                foregroundActive1: ss.white,
                backgroundActive: ss.grey[100],
                backgroundActive1: ss.grey[150],
                backgroundActive2: ss.grey[150],
                borderActive: ss.grey[200],
                borderActive1: ss.grey[150],
                borderActive2: ss.grey[200],
                borderActive3: ss.grey[150],
                borderActive4: ss.grey[400],
                foregroundFocus: ss.grey[750],
                foregroundFocus1: ss.grey[500],
                foregroundFocus2: ss.grey[450],
                foregroundFocus3: ss.white,
                backgroundFocus: ss.white,
                backgroundFocus1: ss.grey[50],
                backgroundFocus2: ss.grey[100],
                backgroundFocus3: ss.grey[150],
                borderFocusWithin: ss.white,
                borderFocus: ss.black,
                foregroundDisabled1: ss.grey[250],
                foregroundDisabled: ss.grey[250],
                backgroundDisabled: ss.grey[150],
                backgroundDisabled1: ss.grey[150],
                backgroundDisabled2: ss.grey[50],
                backgroundDisabled3: ss.grey[50],
                borderDisabled: ss.grey[150]
              }),
              brand: cs({
                foreground: ss.brand[600],
                foreground1: ss.brand[600],
                foreground2: ss.brand[700],
                foreground3: ss.brand[200],
                foreground4: ss.white,
                foreground5: ss.white,
                background: ss.brand[600],
                background1: ss.brand[100],
                background2: ss.brand[900],
                background3: ss.brand[1e3],
                background4: ss.brand[800],
                background5: ss.brand[100],
                background6: ss.brand[600],
                border: ss.grey[200],
                border1: ss.brand[200],
                border2: ss.brand[300],
                shadow: ss.black,
                shadowHover: ss.black,
                foregroundHover: ss.brand[600],
                foregroundHover1: ss.white,
                foregroundHover2: ss.brand[200],
                borderHover: ss.brand[300],
                backgroundHover: ss.brand[700],
                backgroundHover1: ss.brand[50],
                backgroundHover2: ss.brand[100],
                backgroundHover3: ss.brand[100],
                foregroundPressed: ss.brand[800],
                foregroundPressed1: ss.white,
                backgroundPressed: ss.brand[800],
                backgroundPressed1: ss.brand[100],
                backgroundPressed2: ss.brand[100],
                borderPressed: ss.brand[300],
                foregroundActive: ss.brand[600],
                foregroundActive1: ss.brand[600],
                foregroundActive2: ss.brand[200],
                backgroundActive: ss.brand[600],
                backgroundActive1: ss.brand[600],
                borderActive: ss.grey[200],
                borderActive1: ss.brand[200],
                borderActive2: ss.brand[300],
                foregroundFocus: ss.brand[600],
                foregroundFocus1: ss.brand[600],
                foregroundFocus2: ss.brand[700],
                foregroundFocus3: ss.brand[200],
                foregroundFocus4: ss.white,
                backgroundFocus: ss.brand[600],
                backgroundFocus1: ss.brand[100],
                backgroundFocus2: ss.brand[900],
                backgroundFocus3: ss.brand[1e3],
                borderFocus: ss.black,
                borderFocusWithin: ss.white,
                borderFocus1: ss.brand[600],
                foregroundDisabled: ss.grey[250],
                foregroundDisabled1: ss.grey[250],
                backgroundDisabled: ss.grey[150],
                backgroundDisabled1: ss.grey[150],
                borderDisabled: ss.grey[150]
              }),
              black: {
                foreground: ss.black,
                foreground1: ss.white,
                background: ss.white,
                background1: ss.grey[750],
                border: ss.black,
                shadow: ss.black,
                foregroundHover: ss.white,
                backgroundHover: ss.black,
                borderHover: ss.black,
                shadowHover: ss.black,
                foregroundActive: ss.white,
                backgroundActive: ss.black,
                borderActive: ss.black,
                shadowActive: ss.black,
                foregroundFocus: ss.white,
                backgroundFocus: ss.black,
                borderFocus: ss.black,
                shadowFocus: ss.black,
                foregroundPressed: ss.white,
                backgroundPressed: ss.black,
                borderPressed: ss.black,
                shadowPressed: ss.black,
                foregroundDisabled: ss.white,
                backgroundDisabled: ss.black,
                borderDisabled: ss.black,
                shadowDisabled: ss.black
              },
              white: {
                foreground: ss.white,
                foreground1: ss.grey[750],
                background: ss.black,
                background1: ss.white,
                border: ss.white,
                shadow: ss.white,
                foregroundHover: ss.black,
                backgroundHover: ss.white,
                borderHover: ss.white,
                shadowHover: ss.white,
                foregroundActive: ss.black,
                backgroundActive: ss.white,
                borderActive: ss.white,
                shadowActive: ss.white,
                foregroundFocus: ss.black,
                backgroundFocus: ss.white,
                borderFocus: ss.white,
                shadowFocus: ss.white,
                foregroundPressed: ss.black,
                backgroundPressed: ss.white,
                borderPressed: ss.white,
                shadowPressed: ss.white,
                foregroundDisabled: ss.black,
                backgroundDisabled: ss.white,
                borderDisabled: ss.white,
                shadowDisabled: ss.white
              },
              green: cs({
                foreground: ss.green[600],
                foreground1: ss.white,
                foreground2: ss.green[400],
                foreground3: ss.white,
                background: ss.green[300],
                background1: ss.green[600],
                background2: ss.green[50],
                border: ss.green[100],
                border1: ss.green[600]
              }),
              orange: cs({
                foreground: ss.orange[400],
                foreground1: ss.orange[300],
                foreground2: ss.white,
                background: ss.orange[400],
                background1: ss.orange[400],
                border: ss.orange[200]
              }),
              pink: cs({
                foreground: ss.pink[600],
                foreground1: ss.pink[500],
                background: ss.pink[50],
                border: ss.pink[100]
              }),
              red: cs({
                foreground: ss.red[400],
                foreground1: ss.white,
                foreground2: ss.white,
                background: ss.red[400],
                background1: ss.red[50],
                background2: ss.ruby[500],
                background3: ss.red[400],
                border: ss.red[100],
                border1: ss.red[300],
                foregroundHover: ss.white,
                backgroundHover: ss.ruby[600],
                backgroundHover1: ss.red[400],
                foregroundPressed: ss.white,
                backgroundPressed: ss.ruby[700]
              }),
              yellow: cs({
                foreground: ss.yellow[300],
                foreground1: ss.grey[800],
                foreground2: ss.white,
                foreground3: ss.grey[750],
                foreground4: ss.yellow[700],
                background: ss.yellow[600],
                background1: ss.yellow[100],
                background2: ss.yellow[500],
                background3: ss.yellow[100],
                border: ss.yellow[200],
                border1: ss.yellow[700]
              }),
              silver: cs({
                foreground: ss.white,
                foreground1: ss.silver[200],
                foregroundHover: ss.white,
                foregroundPressed: ss.white,
                border: ss.silver[600],
                background: 'transparent',
                backgroundHover: ss.silver[800],
                borderHover: ss.silver[600],
                backgroundPressed: ss.silver[700],
                borderPressed: ss.silver[600],
                foregroundDisabled: ss.silver[600],
                backgroundDisabled: ss.silver[900]
              }),
              onyx: cs({
                background: ss.onyx[500],
                background1: ss.onyx[100],
                background2: ss.onyx[500],
                background3: ss.onyx[400],
                backgroundHover: ss.onyx[500],
                backgroundPressed: ss.onyx[800],
                border: ss.onyx[800],
                border1: 'transparent',
                border2: ss.onyx[300]
              }),
              amethyst: cs({
                background: ss.amethyst[600],
                backgroundHover: ss.amethyst[700],
                backgroundHover1: ss.amethyst[500],
                backgroundActive: ss.amethyst[700]
              })
            };
            return (e.grey = e.default), e;
          })(),
          us = ['default', 'black', 'white', 'brand', 'grey', 'red', 'yellow', 'green', 'pink', 'orange'],
          fs = function (e, r) {
            return e &&
              (function (e) {
                return e && us.indexOf(e) >= 0;
              })(e)
              ? e
              : r
              ? 'brand'
              : 'default';
          },
          gs = function (e, r, o) {
            return e[fs(r, o)];
          },
          ps = {
            redDark: {
              100: '#FAF6F6',
              150: '#F2E4E5',
              200: '#E7CED1',
              250: '#CF9BA1',
              300: '#C07B82',
              350: '#C98289',
              400: '#A23D48',
              450: '#A03843',
              500: '#96232F',
              550: '#88232E',
              600: '#861F2A',
              650: '#721A23',
              700: '#69232A',
              750: '#521319',
              800: '#4D2327',
              850: '#3D2326',
              900: '#292424'
            },
            red: {
              100: '#FCF7F8',
              150: '#F8E8EA',
              200: '#F3D7D9',
              250: '#E7ADB2',
              300: '#DF9299',
              350: '#DC8990',
              400: '#D06069',
              450: '#CF5B65',
              500: '#CA4A55',
              550: '#B6454F',
              600: '#B6424C',
              650: '#993840',
              700: '#883B42',
              750: '#6E282E',
              800: '#603135',
              850: '#492C2E',
              900: '#2A2425'
            },
            orangeDark: {
              100: '#FCF7F6',
              150: '#F8E8E4',
              200: '#F2D5CD',
              250: '#E5AA99',
              300: '#DD8E77',
              350: '#DA846B',
              400: '#CD5937',
              450: '#CC5634',
              500: '#C7431D',
              550: '#B33F1E',
              600: '#B23C1A',
              650: '#973216',
              700: '#85361F',
              750: '#6D240F',
              800: '#5E2F21',
              850: '#482A22',
              900: '#2B2423'
            },
            orange: {
              100: '#FEF9F7',
              150: '#FCECE9',
              200: '#FBDED7',
              250: '#F7BBAD',
              300: '#F4A593',
              350: '#F39D89',
              400: '#F07A60',
              450: '#EF785D',
              500: '#EE694B',
              550: '#D66046',
              600: '#D65E43',
              650: '#B24932',
              700: '#9C4D3B',
              750: '#823929',
              800: '#6D3C32',
              850: '#51332C',
              900: '#2D2725'
            },
            orangeLight: {
              100: '#FEFBF7',
              150: '#FEF3E8',
              200: '#FDEAD4',
              250: '#FCD4A8',
              300: '#FCC68B',
              350: '#FBC181',
              400: '#FAAB54',
              450: '#FAA950',
              500: '#FAA03E',
              550: '#E0903A',
              600: '#E08F37',
              650: '#A45D11',
              700: '#A56F34',
              750: '#895722',
              800: '#72502D',
              850: '#533F29',
              900: '#2D2925'
            },
            yellowDark: {
              100: '#FDFBF6',
              150: '#FBF3E4',
              200: '#F8EACD',
              250: '#F1D499',
              300: '#EDC678',
              350: '#ECC26E',
              400: '#E5AC39',
              450: '#E4AA35',
              500: '#E2A11F',
              550: '#CA911F',
              600: '#CA901B',
              650: '#92660D',
              700: '#966E20',
              750: '#7C5811',
              800: '#685022',
              850: '#4E3F22',
              900: '#2C2924'
            },
            yellow: {
              100: '#FEFCF5',
              150: '#FEF6E2',
              200: '#FEEFCB',
              250: '#FEDF95',
              300: '#FDD472',
              350: '#FDD066',
              400: '#FDC030',
              450: '#FDBF2B',
              500: '#FDB814',
              550: '#E3A615',
              600: '#E4A512',
              650: '#8F680D',
              700: '#A67D1B',
              750: '#805E0B',
              800: '#72581E',
              850: '#544420',
              900: '#2D2922'
            },
            brown: {
              100: '#FBF9F8',
              150: '#F3EDEA',
              200: '#E9DDD8',
              250: '#D3BBAF',
              300: '#C4A494',
              350: '#BF9D8C',
              400: '#A87A63',
              450: '#A67760',
              500: '#9D684E',
              550: '#8E6049',
              600: '#8C5D46',
              650: '#764E3B',
              700: '#6D4C3C',
              750: '#56392B',
              800: '#503C33',
              850: '#3F322D',
              900: '#292625'
            },
            oliveDark: {
              100: '#F8F9F7',
              150: '#EBEEE7',
              200: '#DBE1D5',
              250: '#B7C2AA',
              300: '#9EAD8D',
              350: '#96A683',
              400: '#708757',
              450: '#6D8453',
              500: '#5E7741',
              550: '#566C3D',
              600: '#546B3A',
              650: '#475A31',
              700: '#465535',
              750: '#334123',
              800: '#38412E',
              850: '#31362A',
              900: '#272724'
            },
            olive: {
              100: '#FAFBF8',
              150: '#F1F5EC',
              200: '#E6EDDC',
              250: '#CCDBB8',
              300: '#BBD0A1',
              350: '#B5CC99',
              400: '#9BBA75',
              450: '#99B872',
              500: '#8EB163',
              550: '#809F5A',
              600: '#7F9E58',
              650: '#56742F',
              700: '#637849',
              750: '#4E6136',
              800: '#4B563A',
              850: '#3C4231',
              900: '#292926'
            },
            greenDark: {
              100: '#F5F9F7',
              150: '#E5EFE9',
              200: '#CFE1D7',
              250: '#9EC3AE',
              300: '#7DAE93',
              350: '#72A78A',
              400: '#408861',
              450: '#3C865D',
              500: '#27794C',
              550: '#266E46',
              600: '#236D44',
              650: '#1D5C39',
              700: '#26563B',
              750: '#154229',
              800: '#254232',
              850: '#25362C',
              900: '#252725'
            },
            green: {
              100: '#F6FBF9',
              150: '#E5F5ED',
              200: '#D1ECDF',
              250: '#A1DABD',
              300: '#82CDA8',
              350: '#78C9A0',
              400: '#48B67F',
              450: '#45B57C',
              500: '#30AD6E',
              550: '#2F9B64',
              600: '#2B9B62',
              650: '#248353',
              700: '#2B7550',
              750: '#1A5E3C',
              800: '#29553E',
              850: '#274134',
              900: '#242826'
            },
            tealDark: {
              100: '#F6F8F9',
              150: '#E5EBED',
              200: '#CEDADD',
              250: '#9BB4BA',
              300: '#7B9CA3',
              350: '#7FA3AB',
              400: '#3D6E79',
              450: '#386A75',
              500: '#235A67',
              550: '#23535E',
              600: '#1F515C',
              650: '#1A444E',
              700: '#24454C',
              750: '#133138',
              800: '#23373C',
              850: '#243033',
              900: '#252627'
            },
            teal: {
              100: '#F6F9FA',
              150: '#E9F0F2',
              200: '#D6E3E7',
              250: '#ABC6CE',
              300: '#8FB3BE',
              350: '#85ACB8',
              400: '#5A8F9F',
              450: '#578D9E',
              500: '#458193',
              550: '#417686',
              600: '#3E7484',
              650: '#34626F',
              700: '#375B66',
              750: '#254650',
              800: '#2F454C',
              850: '#2C383C',
              900: '#262828'
            },
            tealLight: {
              100: '#F8FCFC',
              150: '#EBF7F7',
              200: '#DBF1F1',
              250: '#B5E3E3',
              300: '#9DD9DB',
              350: '#96D6D8',
              400: '#70C8CA',
              450: '#6DC7C9',
              500: '#5DC1C3',
              550: '#55ADAF',
              600: '#53AEAF',
              650: '#37797B',
              700: '#468183',
              750: '#33696B',
              800: '#395B5C',
              850: '#314646',
              900: '#272A2A'
            },
            blueDark: {
              100: '#F5F7FA',
              150: '#E0E7F2',
              200: '#C7D4E8',
              250: '#8CA7D0',
              300: '#668AC0',
              350: '#6991CC',
              400: '#1E53A3',
              450: '#1A50A1',
              500: '#003D97',
              550: '#053988',
              600: '#003788',
              650: '#002E72',
              700: '#0F3268',
              750: '#002152',
              800: '#182D4D',
              850: '#1D293D',
              900: '#242528'
            },
            blue: {
              100: '#F6F8FB',
              150: '#E3EAF3',
              200: '#CDDAEA',
              250: '#99B3D4',
              300: '#779AC6',
              350: '#7FA3D0',
              400: '#376BAB',
              450: '#3469A9',
              500: '#1D58A0',
              550: '#1D5190',
              600: '#1A4F90',
              650: '#164279',
              700: '#20426E',
              750: '#0F3057',
              800: '#213650',
              850: '#232F3F',
              900: '#252629'
            },
            purpleDark: {
              100: '#F7F6FA',
              150: '#E8E7F2',
              200: '#D6D4E8',
              250: '#ADA8D1',
              300: '#918AC2',
              350: '#928BC5',
              400: '#5D53A5',
              450: '#5A50A4',
              500: '#483D9A',
              550: '#443A8C',
              600: '#40368A',
              650: '#362E75',
              700: '#3A336B',
              750: '#272154',
              800: '#312D4E',
              850: '#2C293D',
              900: '#262529'
            },
            purple: {
              100: '#F9F9FB',
              150: '#EFEDF5',
              200: '#E2DEED',
              250: '#C3BDDC',
              300: '#AFA6D0',
              350: '#A99FCC',
              400: '#8B7DBA',
              450: '#877AB8',
              500: '#7B6CB1',
              550: '#70629F',
              600: '#6E609E',
              650: '#5D5286',
              700: '#584E78',
              750: '#443B61',
              800: '#443D56',
              850: '#383342',
              900: '#282729'
            },
            maroon: {
              100: '#FBF7F9',
              150: '#F4E6EE',
              200: '#EBD3E1',
              250: '#D6A5C3',
              300: '#C988AF',
              350: '#CC87B1',
              400: '#AF5089',
              450: '#AD4C87',
              500: '#A5397A',
              550: '#953770',
              600: '#94336D',
              650: '#7D2B5C',
              700: '#723057',
              750: '#5A1F42',
              800: '#522B42',
              850: '#412836',
              900: '#2A2527'
            },
            pink: {
              100: '#FDF7F9',
              150: '#FAE7EE',
              200: '#F5D3DF',
              250: '#ECA4BE',
              300: '#E687A8',
              350: '#E47CA1',
              400: '#DA4E7F',
              450: '#DA4A7D',
              500: '#D6376F',
              550: '#C03465',
              600: '#C13164',
              650: '#A22954',
              700: '#8F2F50',
              750: '#751E3C',
              800: '#642A3E',
              850: '#4B2834',
              900: '#2B2426'
            },
            smokeDark: {
              100: '#F6F6F6',
              150: '#E8E8E8',
              200: '#D5D5D5',
              250: '#AAAAAA',
              300: '#8E8E8E',
              350: '#939393',
              400: '#5A5A5A',
              450: '#565656',
              500: '#444444',
              550: '#404040',
              600: '#3D3D3D',
              650: '#333333',
              700: '#373737',
              750: '#252525',
              800: '#2B2A2A',
              850: '#282828',
              900: '#262525'
            },
            smokeLight: {
              100: '#F9F9F9',
              150: '#EDEDED',
              200: '#DFDFDF',
              250: '#BEBEBE',
              300: '#A9A9A9',
              350: '#A1A1A1',
              400: '#818181',
              450: '#7E7E7E',
              500: '#707070',
              550: '#676767',
              600: '#646464',
              650: '#555555',
              700: '#525151',
              750: '#3D3D3D',
              800: '#353434',
              850: '#2E2D2D',
              900: '#272626'
            },
            steelDark: {
              100: '#F8F9F9',
              150: '#ECEEEF',
              200: '#DDE1E2',
              250: '#BBC2C4',
              300: '#A5AEB1',
              350: '#9DA7AB',
              400: '#7B898D',
              450: '#78868B',
              500: '#69797E',
              550: '#606E73',
              600: '#5E6D71',
              650: '#4F5B5F',
              700: '#4E5659',
              750: '#394245',
              800: '#3D4244',
              850: '#343637',
              900: '#272727'
            },
            steelLight: {
              100: '#FBFBFB',
              150: '#F3F3F5',
              200: '#EAEDEE',
              250: '#D4DADC',
              300: '#C7C6D0',
              350: '#C1CACC',
              400: '#ACABBB',
              450: '#A9B5B9',
              500: '#A0AEB2',
              550: '#919DA1',
              600: '#8F9C9F',
              650: '#637074',
              700: '#6F7678',
              750: '#585761',
              800: '#515556',
              850: '#404243',
              900: '#292828'
            },
            neon: {
              100: '#FAFEDF',
              150: '#F4FBC4',
              200: '#E9F1AC',
              250: '#E5F18F',
              300: '#D9E388',
              350: '#C8D464',
              400: '#BDCB4C',
              450: '#B7C640',
              500: '#A8B63A',
              550: '#99A43B',
              600: '#909A45',
              650: '#899338',
              700: '#7A8337',
              750: '#656C2B',
              800: '#50571E',
              850: '#3C4212',
              900: '#272B0E'
            }
          },
          bs = function (e, r) {
            return (
              void 0 === r && (r = {}),
              Object.assign(
                { foreground: ps[e][750], foreground1: ps[e][400], background: ps[e][200], borderActive: ps[e][650] },
                r
              )
            );
          },
          ms = {
            redDark: bs('redDark'),
            red: bs('red'),
            orangeDark: bs('orangeDark'),
            orange: bs('orange'),
            orangeLight: bs('orangeLight'),
            yellowDark: bs('yellowDark'),
            yellow: bs('yellow'),
            brown: bs('brown'),
            oliveDark: bs('oliveDark'),
            olive: bs('olive'),
            greenDark: bs('greenDark'),
            green: bs('green'),
            tealDark: bs('tealDark'),
            teal: bs('teal'),
            tealLight: bs('tealLight'),
            blueDark: bs('blueDark'),
            blue: bs('blue'),
            purpleDark: bs('purpleDark'),
            purple: bs('purple'),
            maroon: bs('maroon'),
            pink: bs('pink'),
            smokeDark: bs('smokeDark'),
            smokeLight: bs('smokeLight'),
            steelDark: bs('steelDark'),
            steelLight: bs('steelLight'),
            neon: bs('neon'),
            formatting: {
              foreground1: ps.red[600],
              background1: ps.red[300],
              foreground2: ps.orangeDark[400],
              background2: ps.orange[300],
              foreground3: ps.yellow[400],
              background3: ps.yellow[300],
              foreground4: ps.neon[450],
              background4: ps.neon[200],
              foreground5: ps.green[600],
              background5: ps.green[300],
              foreground6: ps.tealLight[650],
              background6: ps.tealLight[300],
              foreground7: ps.blueDark[400],
              background7: ps.blueDark[200],
              foreground8: ps.maroon[500],
              background8: ps.maroon[200]
            }
          },
          hs = '1px',
          vs = '2px',
          ys = '4px',
          Cs = '8px',
          ks = ss.white,
          ws = ss.black,
          xs = '0 .2rem .4rem -.075rem rgba(0, 0, 0, .1)',
          Ss = '0 .4rem .7rem -.1rem rgba(0, 0, 0, .1)',
          Bs = '0 .8rem 1rem -.2rem rgba(0, 0, 0, .1)',
          Es = '0 1.6rem 1.8rem -.4rem rgba(0, 0, 0, .1)',
          Os = '0 .2rem .4rem -.075rem rgba(0, 0, 0, .25)',
          Fs = '0 0 2px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .14)',
          As = '0 0 2px rgba(0, 0, 0, .12), 0 2px 4px rgba(0, 0, 0, .14)',
          Ps = '0 0 2px rgba(0, 0, 0, .12), 0 4px 8px rgba(0, 0, 0, .14)',
          js = '0 0 2px rgba(0, 0, 0, .12), 0 8px 16px rgba(0, 0, 0, .14)',
          Is = '0 0 8px rgba(0, 0, 0, .20), 0 14px 28px rgba(0, 0, 0, .24)',
          Rs = '0 0 8px rgba(0, 0, 0, .20), 0 32px 64px rgba(0, 0, 0, .24)',
          Ms = { smaller: os(10), small: os(12), medium: os(14), large: os(18), larger: os(24), largest: os(28) },
          Ds = 200,
          zs = 300,
          _s = 400,
          Hs = 600,
          Ts = 700,
          Ws = 1,
          Ls = 1.2,
          Ns = 1.3333,
          Vs = 1.4286,
          Zs = 1.3333,
          Us = 1.3333,
          Gs = 1.3333,
          Xs = { background: 0, foreground: 1, menuItem: 2, overlay: 1e3, overlayPriority: 1001, debug: 999999999 },
          Ys = 0,
          Ks = 0,
          $s = '"Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
          qs = Ms.medium,
          Js = ss.white,
          Qs = ss.grey[750],
          ec = Vs,
          rc = function (e) {
            return {
              color: e.bodyColor,
              focusBorderColor: e.focusOuterBorderColor,
              focusBorderRadius: e.borderRadiusMedium,
              focusBorderWidth: e.borderWidth
            };
          },
          oc = function (e) {
            return {
              padding: os(7) + ' ' + os(3) + ' ' + os(7) + ' ' + os(11),
              iconSpace: os(12),
              iconSize: os(32),
              borderColor: e.colorScheme.default.border3,
              borderRadius: e.borderRadiusMedium,
              backgroundColor: e.colorScheme.default.background4,
              backgroundColorHover: e.colorScheme.default.backgroundHover1,
              textColor: e.colorScheme.default.foreground,
              textColorHover: e.colorScheme.default.foregroundHover,
              boxShadow: e.shadowLevel1,
              focusBackgroundColor: void 0,
              focusColor: void 0,
              progressColor: e.colorScheme.green.background,
              progressHeight: os(4),
              headerFontSize: e.fontSizes.medium,
              headerFontWeight: e.fontWeightSemibold,
              headerLineHeight: e.lineHeightMedium,
              descriptionFontSize: e.fontSizes.small,
              descriptionFontWeight: e.fontWeightRegular,
              descriptionLineHeight: e.lineHeightDefault,
              actionHeight: os(32),
              actionMaxWidth: os(280),
              actionColor: e.colorScheme.default.foreground,
              actionPrimaryColor: e.colorScheme.brand.foreground,
              actionColorDisabled: e.colorScheme.brand.foregroundDisabled1,
              actionIconSize: os(16),
              actionLoaderBorderSize: os(2),
              actionLoaderSize: os(20),
              actionLoaderSvgHeight: os(1220),
              actionLoaderSvgAnimationHeight: os(-1200),
              actionFocusBorderRadius: e.borderRadiusMedium
            };
          },
          tc = function (e) {
            var r = os(28);
            return {
              borderStyle: 'solid',
              borderWidth: '1px',
              borderRadius: e.borderRadiusMedium,
              backgroundColor: e.colorScheme.default.background4,
              borderColor: e.colorScheme.default.border2,
              color: e.colorScheme.default.foreground1,
              fontWeight: e.fontWeightRegular,
              minHeight: r,
              padding: '0 ' + os(16),
              actionsMargin: os(5),
              hoverBorderColor: void 0,
              hoverBackgroundColor: void 0,
              focusBackgroundColor: void 0,
              dismissActionHoverBorderRadius: void 0,
              dismissActionHoverBorderWidth: void 0,
              dismissActionHoverInnerBorderColor: void 0,
              dismissActionHoverOuterBorderColor: void 0,
              dismissActionHoverZIndex: void 0,
              dismissActionSize: r,
              dismissActionColor: void 0,
              dismissiblePadding: '0 0 0 ' + os(16),
              dangerColor: e.colorScheme.red.foreground,
              dangerBackgroundColor: e.colorScheme.red.background1,
              dangerBorderColor: e.colorScheme.red.border,
              oof: !1,
              oofColor: e.colorScheme.pink.foreground,
              oofBackgroundColor: e.colorScheme.pink.background,
              oofBorderColor: e.colorScheme.pink.border,
              successColor: e.colorScheme.green.foreground,
              successBackgroundColor: e.colorScheme.green.background2,
              successBorderColor: e.colorScheme.green.border,
              urgent: !1,
              urgentColor: e.colorScheme.red.foreground1,
              urgentBackgroundColor: e.colorScheme.red.background3,
              urgentBorderColor: e.colorScheme.red.background3,
              warningColor: e.colorScheme.yellow.foreground4,
              warningBackgroundColor: e.colorScheme.yellow.background3,
              warningBorderColor: e.colorScheme.yellow.border,
              headerFontWeight: e.fontWeightSemibold,
              headerMargin: '0 ' + os(10) + ' 0 0',
              iconMargin: '0 ' + os(10) + ' 0 0',
              iconSize: os(16),
              dismissActionBackgroundColor: 'transparent',
              dismissActionBorderRadius: e.borderRadiusMedium,
              dismissActionBorderColor: 'transparent',
              dismissActionColorHover: e.colorScheme.brand.foregroundHover,
              dismissActionBackgroundColorHover: e.colorScheme.default.backgroundHover2,
              dismissActionBorderColorHover: e.colorScheme.default.borderHover,
              dismissActionContentFontWeight: e.fontWeightSemibold,
              dismissActionBackgroundColorFocus: void 0,
              dismissActionBorderColorFocus: void 0,
              dismissActionColorFocus: void 0,
              dismissActionColorDisabled: e.colorScheme.brand.foregroundDisabled,
              dismissActionBackgroundColorDisabled: e.colorScheme.default.backgroundDisabled,
              dismissActionBorderColorDisabled: 'transparent',
              dismissActionIndicatorSize: os(16),
              focusBorderRadius: e.borderRadiusMedium,
              focusBorderWidth: e.borderWidth,
              focusInnerBorderColor: e.focusInnerBorderColor,
              focusOuterBorderColor: e.focusOuterBorderColor,
              focusBorderZIndex: e.zIndexes.foreground
            };
          },
          nc = function () {
            var e = function () {
              for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++) r[o] = arguments[o];
              return r;
            };
            return e.apply(void 0, arguments);
          },
          ac =
            (nc('foreground', 'background'),
            function (e) {
              return {
                avatarBorderColor: '',
                avatarBorderWidth: '0',
                initialsFontWeight: e.fontWeightSemibold,
                squareAvatarBorderRadius: e.borderRadiusMedium,
                iconColor: e.colors.white,
                iconBackgroundColor: e.colors.brand[600],
                statusBorderWidth: '2px',
                statusBorderColor: e.bodyBackground,
                statusSuccessBackgroundColor: e.colorScheme.green.background,
                statusSuccessColor: e.colorScheme.green.foreground1,
                statusInfoBackgroundColor: e.colorScheme.brand.background,
                statusInfoColor: e.colorScheme.default.foreground2,
                statusWarningBackgroundColor: e.colorScheme.yellow.background,
                statusWarningColor: e.colorScheme.yellow.foreground2,
                statusErrorBackgroundColor: e.colorScheme.red.background,
                statusErrorColor: e.colorScheme.red.foreground2,
                statusBackgroundColor: e.colorScheme.default.background5,
                statusColor: e.colorScheme.default.foreground4,
                imageWidth: void 0,
                imageHeight: void 0,
                imageAvatarRadius: os(9999),
                imageAvatarSize: os(32),
                imageCircularRadius: os(9999),
                labelCircularRadius: os(9999),
                labelColor: 'rgba(0, 0, 0, 0.6)',
                labelBackground: 'rgb(232, 232, 232)'
              };
            }),
          ic = function (e) {
            return {
              padding: '0 ' + os(20),
              height: os(32),
              minWidth: os(96),
              loadingMinWidth: os(118),
              maxWidth: os(280),
              borderRadius: e.borderRadiusMedium,
              contentFontSize: e.fontSizes.medium,
              contentFontWeight: e.fontWeightSemibold,
              contentLineHeight: e.lineHeightMedium,
              color: e.colorScheme.default.foreground,
              colorHover: e.colorScheme.default.foregroundHover,
              colorActive: e.colorScheme.default.foregroundPressed,
              colorDisabled: e.colorScheme.brand.foregroundDisabled,
              colorFocus: void 0,
              iconSize: os(16),
              backgroundColor: e.colorScheme.default.background,
              backgroundColorActive: e.colorScheme.default.backgroundPressed,
              backgroundColorHover: e.colorScheme.default.backgroundHover1,
              backgroundColorFocus: void 0,
              backgroundColorDisabled: e.colorScheme.default.backgroundDisabled,
              borderColor: e.colorScheme.default.border,
              borderColorHover: e.colorScheme.default.borderHover,
              borderColorFocus: void 0,
              borderColorActive: e.colorScheme.default.borderPressed,
              borderColorDisabled: 'transparent',
              backgroundColorIconOnlyHover: e.colorScheme.default.backgroundHover2,
              primaryColor: e.colorScheme.brand.foreground4,
              primaryColorHover: e.colorScheme.brand.foreground4,
              primaryBackgroundColor: e.colorScheme.brand.background,
              primaryBackgroundColorActive: e.colorScheme.brand.backgroundPressed,
              primaryBackgroundColorHover: e.colorScheme.brand.backgroundHover,
              primaryBackgroundColorDisabled: e.colorScheme.default.backgroundDisabled,
              primaryBackgroundColorFocus: void 0,
              primaryBorderColor: 'transparent',
              tintedColor: e.colorScheme.brand.foreground,
              tintedColorHover: e.colorScheme.brand.foregroundHover,
              tintedBackgroundColor: e.colorScheme.default.background,
              tintedBackgroundColorActive: e.colorScheme.brand.backgroundHover1,
              tintedBackgroundColorHover: e.colorScheme.brand.backgroundHover1,
              tintedBorderColor: e.colorScheme.brand.border1,
              tintedBorderColorHover: e.colorScheme.brand.borderHover,
              circularBorderRadius: os(999),
              textColor: e.colorScheme.default.foreground1,
              textColorHover: e.colorScheme.brand.foreground1,
              textPrimaryColor: e.colorScheme.brand.foreground,
              textPrimaryColorHover: e.colorScheme.brand.foreground1,
              textColorDisabled: e.colorScheme.brand.foregroundDisabled1,
              textColorIconOnlyHover: e.colorScheme.brand.foregroundHover,
              primaryBoxShadow: e.shadowLevel1Dark,
              boxShadow: e.shadowLevel1,
              loaderBorderSize: os(2),
              loaderSize: os(20),
              loaderSvgHeight: os(1220),
              loaderSvgAnimationHeight: os(-1200),
              sizeSmallContentFontSize: e.fontSizes.small,
              sizeSmallContentLineHeight: e.lineHeightSmall,
              sizeSmallHeight: os(24),
              sizeSmallMinWidth: os(72),
              sizeSmallPadding: '0 ' + os(8),
              sizeSmallLoaderBorderSize: os(2),
              sizeSmallLoaderSize: os(15),
              sizeSmallLoaderSvgHeight: os(895),
              sizeSmallLoaderSvgAnimationHeight: os(-880)
            };
          },
          lc = function (e) {
            return {
              dividerMargin: '0 ' + os(8),
              fontSizeSmaller: os(12),
              fontSizeSmall: os(12),
              fontSizeMedium: os(14),
              fontSizeLarge: os(18),
              itemCurrentFontWeight: e.fontWeightBold,
              linkPaddingTop: os(6),
              linkPaddingBottom: os(6),
              linkPaddingLeftSmaller: os(4),
              linkPaddingRightSmaller: os(4),
              linkPaddingLeftSmall: os(8),
              linkPaddingRightSmall: os(8),
              linkPaddingLeftMedium: os(12),
              linkPaddingRightMedium: os(12),
              linkPaddingLeftLarge: os(12),
              linkPaddingRightLarge: os(12),
              linkSmallerGap: os(2),
              linkSmallGap: os(8),
              linkMediumGap: os(8),
              linkLargeGap: os(8),
              disabledColor: e.colorScheme.default.foregroundDisabled
            };
          },
          sc = function (e) {
            return { backgroundColor: e.colorScheme.default.background2 };
          },
          cc = function () {
            return {
              gutterMargin: os(10),
              gutterMarginCompact: os(2),
              margin: os(8),
              messageMargin: os(40),
              messageMarginCompact: os(56),
              messageMarginEndCompact: os(16)
            };
          },
          dc = function (e) {
            return {
              actionMenuBoxShadow: e.shadow8,
              actionMenuPositionRight: os(5),
              actionMenuPositionTop: os(-30),
              authorColor: e.colorScheme.default.foreground,
              authorColorMineCompact: e.colorScheme.brand.foreground,
              authorFontWeight: e.fontWeightSemibold,
              authorFontWeightCompact: e.fontWeightSemibold,
              authorMarginRight: os(12),
              authorMarginRightCompact: os(8),
              backgroundColor: e.colorScheme.default.background,
              backgroundColorMine: e.colorScheme.brand.background1,
              badgeShadow: e.shadowLevel1Dark,
              badgeTextColor: e.colorScheme.brand.foreground4,
              border: 'none',
              borderRadius: e.borderRadiusMedium,
              compactBorder: 'solid ' + e.borderWidth + ' transparent',
              compactHoverBackground: e.colorScheme.default.backgroundHover3,
              compactHoverBorder: 'solid ' + e.borderWidth + ' ' + e.colorScheme.default.backgroundHover3,
              compactSpacing: os(12),
              contentColor: e.colorScheme.default.foreground,
              hasMention: !1,
              hasMentionColor: e.colors.orange[300],
              hasMentionNubbinColor: e.colorScheme.orange.background,
              headerMarginBottom: os(2),
              isImportant: !1,
              isImportantColor: e.colorScheme.red.background,
              linkColor: e.colorScheme.brand.foreground1,
              linkColorMine: e.colorScheme.brand.foreground2,
              offset: os(100),
              overlayZIndex: e.zIndexes.overlay,
              padding: os(16),
              paddingCompact: os(3),
              reactionGroupBorderColor: 'transparent',
              reactionGroupMarginLeft: os(12),
              showActionMenu: void 0,
              zIndex: e.zIndexes.foreground
            };
          },
          uc = function (e) {
            return {
              detailsColor: e.colorScheme.default.foreground1,
              detailsFontSize: e.fontSizes.small,
              detailsMargin: os(12)
            };
          },
          fc = function (e) {
            return {
              bottomPosition: '0',
              bottomPositionCompact: os(-1),
              color: e.colorScheme.brand.foreground1,
              rightPosition: os(-17)
            };
          },
          gc = os(20),
          pc = os(2),
          bc = 'red',
          mc = function (e) {
            return {
              checkboxColor: 'transparent',
              toggleBackground: 'transparent',
              toggleBorderColor: e.colors.grey[300],
              toggleBorderStyle: 'solid',
              toggleBorderWidth: os(1),
              toggleIndicatorColor: 'inherit',
              checkboxCheckedColor: e.colors.grey[500],
              checkboxToggleCheckedBackground: 'transparent',
              checkboxToggleCheckedBorderColor: e.colors.grey[500],
              checkboxToggleCheckedColor: 'inherit',
              disabledColor: e.colors.grey[300],
              disabledCheckboxColor: e.colors.grey[300],
              disabledToggleBackground: 'transparent',
              disabledToggleBorderColor: e.colors.grey[200],
              textColor: _t()(e, 'colorScheme.default.foreground1', bc),
              background: 'transparent',
              borderColor: _t()(e, 'colorScheme.default.foreground1', bc),
              borderStyle: 'solid',
              borderRadius: e.borderRadiusSmall,
              borderWidth: os(1),
              indicatorColor: 'transparent',
              gap: os(12),
              margin: os(2.8) + ' 0 0 0',
              padding: pc,
              rootPadding: '3px 5px',
              textColorHover: _t()(e, 'colorScheme.default.foreground', bc),
              borderColorHover: _t()(e, 'colorScheme.default.foreground', bc),
              checkedBackgroundHover: _t()(e, 'colorScheme.brand.backgroundHover', bc),
              toggleBorderRadius: os(999),
              toggleIndicatorSize: os(14),
              toggleMargin: '0',
              togglePadding: pc + ' ' + gc + ' ' + pc + ' ' + pc,
              toggleWidth: os(38),
              toggleHeight: os(20),
              checkedTextColor: _t()(e, 'colorScheme.default.foreground', bc),
              checkedBackground: _t()(e, 'colorScheme.brand.backgroundActive1', bc),
              checkedBorderColor: _t()(e, 'colorScheme.brand.backgroundActive1', bc),
              checkedIndicatorColor: _t()(e, 'colorScheme.default.background', bc),
              toggleCheckedPadding: pc + ' ' + pc + ' ' + pc + ' ' + gc,
              disabledBackground: _t()(e, 'colorScheme.default.background', bc),
              disabledBackgroundChecked: _t()(e, 'colorScheme.default.backgroundDisabled', bc),
              disabledBorderColor: _t()(e, 'colorScheme.default.foregroundDisabled1', bc),
              disabledCheckedIndicatorColor: _t()(e, 'colorScheme.default.foregroundDisabled', bc),
              disabledToggleIndicatorColor: _t()(e, 'colorScheme.default.foregroundDisabled', bc)
            };
          },
          hc = function (e) {
            return {
              border: 'none',
              rootBackground: e.colors.white,
              rootBorderRadius: e.borderRadiusXLarge,
              rootWidth: '600px',
              rootPadding: os(27) + ' ' + os(32) + ' ' + os(32) + ' ' + os(32),
              rootPaddingZoom: '' + os(12),
              contentMargin: '0 0 ' + os(20) + ' 0',
              boxShadow: e.shadowLevel4,
              foregroundColor: e.colors.grey[900],
              headerFontSize: e.fontSizes.large,
              headerFontWeight: e.fontWeightBold,
              headerMargin: '0 0 ' + os(8) + ' 0',
              overlayBackground: 'rgba(37, 36, 36, .75)',
              overlayZIndex: e.zIndexes.overlay,
              headerActionMargin: os(-3) + ' ' + os(-8) + ' 0 0',
              footerActionsBreakpoint: '400px'
            };
          },
          vc = function (e, r) {
            var o = e;
            return (
              Object.keys(r).forEach(function (t) {
                var n;
                o = Object.assign({}, o, (((n = {})[t] = Object.assign({}, e[t], r[t])), n));
              }),
              o
            );
          };
        function yc(e, r) {
          var o = {};
          return (
            Object.keys(e).forEach(function (t) {
              var n,
                a = r.reduce(function (r, o) {
                  var n;
                  return Object.assign({}, r, (((n = {})[o] = e[t][o]), n));
                }, {});
              o = Object.assign({}, o, (((n = {})[t] = a), n));
            }),
            o
          );
        }
        var Cc,
          kc,
          wc,
          xc,
          Sc = nc('foreground'),
          Bc = function (e) {
            return {
              colorScheme: yc(e.colorScheme, Sc),
              dividerColor: e.colorScheme.brand.border,
              textColor: e.colors.grey[450],
              textFontSize: e.fontSizeSmall,
              textLineHeight: e.lineHeightSmall,
              importantFontWeight: e.fontWeightBold,
              dividerPadding: os(4)
            };
          },
          Ec = function (e) {
            return {
              backgroundColor: e.colorScheme.default.background2,
              backgroundColorHover: e.colorScheme.default.backgroundHover3,
              invertedBackgroundColor: e.colorScheme.default.background,
              invertedBackgroundColorHover: e.colorScheme.default.backgroundHover4,
              borderColor: 'transparent',
              borderColorHover: 'transparent',
              borderColorFocus: e.colorScheme.brand.borderFocus1,
              borderError: e.colorScheme.red.background,
              borderWidth: '0px',
              openBorderColorHover: void 0,
              containerBorderRadius: e.borderRadiusMedium,
              disabledColor: e.colorScheme.default.foregroundDisabled,
              openAboveContainerBorderRadius: '0 0 ' + e.borderRadiusMedium + ' ' + e.borderRadiusMedium,
              openBelowContainerBorderRadius: e.borderRadiusMedium + ' ' + e.borderRadiusMedium + ' 0 0',
              searchBorderBottomWidth: os(2),
              color: e.colorScheme.default.foreground1,
              comboboxPaddingButton: '0 ' + os(12),
              comboboxFlexBasis: os(50),
              aboveListBorderRadius: e.borderRadiusMedium + ' ' + e.borderRadiusMedium + ' 0 0',
              belowListBorderRadius: '0 0 ' + e.borderRadiusMedium + ' ' + e.borderRadiusMedium,
              listBackgroundColor: e.colorScheme.default.background,
              listBorderColor: 'transparent',
              listBorderWidth: os(1),
              listPadding: os(8) + ' 0 ' + os(6),
              listBoxShadow: e.shadow16,
              listMaxHeight: os(296),
              listItemFocusBorderWidth: os(1),
              listItemBackgroundColor: 'transparent',
              listItemBackgroundColorActive: e.colorScheme.default.backgroundActive,
              listItemBackgroundColorHover: e.colorScheme.default.backgroundHover,
              listItemColorActive: e.colorScheme.default.backgroundFocus3,
              listItemColorHover: e.colorScheme.default.foregroundHover,
              listItemSelectedColor: e.colorScheme.default.foreground,
              listItemSelectedFontWeight: e.fontWeightSemibold,
              listItemHeaderLineHeight: e.lineHeightSmall,
              listItemContentLineHeight: e.lineHeightSmall,
              selectedItemBackgroundColor: e.colorScheme.default.background,
              selectedItemBackgroundColorHover: e.colorScheme.brand.backgroundHover2,
              selectedItemBorder: 'none',
              selectedItemColor: e.colorScheme.default.foreground,
              selectedItemColorHover: e.colorScheme.default.foregroundHover,
              selectedItemIconColor: e.colorScheme.default.foreground1,
              selectedItemIconColorHover: e.colorScheme.brand.foregroundHover,
              selectedItemsMaxWidth: os(140),
              selectedItemColorFocus: e.bodyColor,
              selectedItemsMaxHeight: os(82),
              toggleIndicatorSize: os(32),
              triggerButtonColorFocusActive: void 0,
              triggerButtonColorHover: e.bodyColor,
              width: os(356),
              overlayZIndex: e.zIndexes.overlay,
              disabledBorderColorHover: 'transparent',
              disabledTriggerColorHover: e.colorScheme.brand.foregroundDisabled,
              disabledBackgroundColorHover: e.colorScheme.brand.backgroundDisabled,
              listItemHeaderFontSize: e.fontSizes.medium,
              listItemHeaderColor: e.colorScheme.default.foreground1,
              listItemContentFontSize: e.fontSizes.small,
              listItemContentColor: e.colorScheme.default.foreground2
            };
          },
          Oc = function (e) {
            return {
              controlColor: e.colors.white,
              controlBackgroundColor: e.colors.onyx[900],
              controlBackgroundSize: os(24) + ' ' + os(24),
              width: void 0,
              height: void 0,
              focusBorderColor: e.colors.brand[500],
              zIndex: e.zIndexes.foreground
            };
          },
          Fc = function () {
            return {
              'gap.smaller': os(8),
              'gap.small': os(10),
              'gap.medium': os(15),
              'gap.large': os(30),
              'padding.medium': os(10)
            };
          },
          Ac = function () {
            return {
              'size.half': '50%',
              'size.quarter': '25%',
              'size.small': os(150),
              'size.medium': os(200),
              'size.large': os(300)
            };
          },
          Pc = function (e) {
            return { lastChildMarginTop: os(12), fieldsMarginBottom: os(20) };
          },
          jc = nc('foreground', 'background'),
          Ic = function (e) {
            return { colorScheme: yc(e.colorScheme, jc), messagePaddingLeft: os(12) };
          },
          Rc = nc('foreground'),
          Mc = function (e) {
            return { colorScheme: yc(e.colorScheme, Rc), paddingLeft: os(12) };
          },
          Dc = function (e) {
            return { lineHeight: os(16), marginBottom: os(4) };
          },
          zc = function () {
            return { defaultColumnCount: 5, gridGap: void 0, padding: void 0 };
          },
          _c = nc('foreground'),
          Hc = function (e) {
            return { colorScheme: yc(e.colorScheme, _c), color: e.colors.grey[750], descriptionColor: void 0 };
          },
          Tc = nc('foreground'),
          Wc = function (e) {
            return { colorScheme: yc(e.colorScheme, Tc), color: e.colors.grey[350] };
          },
          Lc = nc('foreground'),
          Nc = function (e) {
            return {
              colorScheme: yc(e.colorScheme, Lc),
              color: void 0,
              borderColor: void 0,
              backgroundColor: void 0,
              brandColor: e.brandColor,
              secondaryColor: e.colors.white,
              redColor: e.colors.red[400],
              disabledColor: e.colors.grey[250],
              smallestSize: os(7),
              smallerSize: os(10),
              smallSize: os(12),
              mediumSize: os(16),
              largeSize: os(20),
              largerSize: os(32),
              largestSize: os(40),
              horizontalSpace: os(10)
            };
          },
          Vc = function () {
            return {
              width: void 0,
              height: void 0,
              avatarRadius: os(9999),
              avatarSize: os(32),
              circularRadius: os(9999)
            };
          },
          Zc = function (e) {
            return {
              colorDisabled: e.colorScheme.brand.foregroundDisabled,
              colorError: e.colorScheme.red.foreground,
              borderColorError: e.colorScheme.red.background,
              iconPosition: 'absolute',
              iconRight: os(10),
              iconLeft: os(9),
              inputPaddingWithIconAtStart: os(5) + ' ' + os(12) + ' ' + os(5) + ' ' + os(34),
              inputPaddingWithIconAtEnd: os(5) + ' ' + os(35) + ' ' + os(5) + ' ' + os(12),
              inputPadding: os(5) + ' ' + os(12),
              inputInsideLabelPaddingTop: os(14),
              borderColor: 'transparent',
              borderRadius: e.borderRadiusMedium,
              borderWidth: '0 0 ' + os(2) + ' 0',
              backgroundColor: e.colorScheme.default.background2,
              backgroundColorInverted: e.colorScheme.default.background,
              fontColor: e.colorScheme.default.foreground,
              fontSize: e.fontSizes.medium,
              iconColor: e.colorScheme.default.foreground,
              successfulColor: e.colorScheme.green.foreground,
              inputFocusBorderColor: 'transparent transparent ' + e.colorScheme.brand.borderFocus1 + ' transparent',
              inputFocusBorderRadius:
                e.borderRadiusMedium +
                ' ' +
                e.borderRadiusMedium +
                ' ' +
                e.borderRadiusSmall +
                ' ' +
                e.borderRadiusSmall,
              placeholderColor: e.colorScheme.default.foreground1
            };
          },
          Uc = function (e) {
            return {
              insideLabelBottom: os(-8),
              insideLabelPaddingLeft: os(12),
              insideLabelActiveFontSize: os(12),
              inlineLabelPaddingRight: os(10),
              lineHeight: os(16),
              marginBottom: os(4)
            };
          },
          Gc = function (e) {
            return {
              circularRadius: os(9999),
              iconSize: os(16),
              padding: '0 ' + os(4) + ' 0 ' + os(4),
              startPaddingLeft: '0px',
              endPaddingRight: '0px',
              height: os(20),
              foreground: 'rgba(0, 0, 0, 0.6)',
              background: 'rgb(232, 232, 232)',
              blackForeground: e.colorScheme.black.foreground1,
              blackBackground: e.colorScheme.black.background1,
              whiteForeground: e.colorScheme.white.foreground1,
              whiteBackground: e.colorScheme.white.background1,
              brandForeground: e.colorScheme.brand.foreground5,
              brandBackground: e.colorScheme.brand.background6,
              greyForeground: e.colorScheme.grey.foreground2,
              greyBackground: e.colorScheme.grey.background3,
              orangeForeground: e.colorScheme.orange.foreground2,
              orangeBackground: e.colorScheme.orange.background1,
              redForeground: e.colorScheme.red.foreground1,
              redBackground: e.colorScheme.red.background,
              greenForeground: e.colorScheme.green.foreground3,
              greenBackground: e.colorScheme.green.background1,
              yellowForeground: e.colorScheme.yellow.foreground3,
              yellowBackground: e.colorScheme.yellow.background
            };
          },
          Xc = function () {
            return {};
          },
          Yc = function () {
            return {
              containerHeights: {
                smallest: os(24),
                smaller: os(24),
                small: os(24),
                medium: os(36),
                large: os(72),
                larger: os(72),
                largest: os(72)
              },
              containerWidths: {
                smallest: os(24),
                smaller: os(24),
                small: os(24),
                medium: os(36),
                large: os(72),
                larger: os(72),
                largest: os(72)
              },
              svgContent:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 4880'%3E%3Cg role='presentation'%3E%3Cpath fill='%236264a7' d='M67.4 26.4c5.8-2 12.4 3.3 11.4 9.4-.4 6.5-8.8 10-13.8 6-5.6-3.6-4.2-13.5 2.4-15.3zM66.5 113.7c5.7-3.3 13.6 1.8 12.7 8.4 0 6.4-8 10.4-13.2 7-5.6-3.2-5.4-12.5.5-15.3z'%3E%3C/path%3E%3Cpath fill='%235659b0' d='M65.5 200.4c5.7-3.4 13.6 2 12.6 8.5 0 6-7 10.7-12.7 7.7-6.4-3-6-13.2.2-16.3z'%3E%3C/path%3E%3Cpath fill='%23575ab1' d='M64.3 286.2c5-2 11.3 2.3 11.2 7.8 0 5.4-4.5 11.7-10.5 11-5.4-.3-9.2-6.3-7.3-11.2 1.2-3.2 3.2-6.5 6.6-7.6z'%3E%3C/path%3E%3Cpath fill='%23585bb2' d='M59.4 372.5c5-2.6 11.6 1 12 6.5.8 5-3.4 8.6-7 11.3-4.5 3.2-11.7.2-12.6-5.3-1.4-5.5 3.6-9.7 7.6-12.5z'%3E%3C/path%3E%3Cpath fill='%235a5db4' d='M54.3 457.4c4-2.2 9.6 0 11.2 4.2 1.7 3.7 0 8.4-3.5 10.5-3.7 2.5-8.2 5.6-12.8 4-4.3-1.6-6.5-6.8-4.8-11 1.5-4.2 6.4-5.4 10-7.6z'%3E%3C/path%3E%3Cpath fill='%235b5fb6' d='M48.6 540.7c4.4-2 10 1 11 5.7 1 4-1.4 8.4-5.4 9.7-4 1.6-8.5 3-13 2.5-5.6-.8-8.6-8-5.3-12.6 2.7-4.4 8.4-3.5 12.6-5.3z'%3E%3C/path%3E%3Cpath fill='%235d60b8' d='M29.4 622.4c3-1.5 6.4 0 9.6 0 3.4.3 7.3-1 10.3 1.3 4.6 3 4.4 10.4-.2 13.3-3.7 2-8.2 1.7-12.4 1.5-3.6-.5-7.8-.7-10.2-4-3.2-3.7-1.6-10.2 3-12z'%3E%3C/path%3E%3Cpath fill='%235f63ba' d='M20.3 698.3c4-2 7.8 1.3 11.4 2.8 4 2 9.6 1 12.2 5 3.3 4.7-.2 12-6 12.3-7 0-14-2.6-19.7-6.6-4.7-3.4-3.5-11.6 2-13.4z'%3E%3C/path%3E%3Cpath fill='%236165bc' d='M12.3 771.3c3-1.5 7-.6 9 2 3 3.8 6.7 6.7 11 8.3 3.3 1 5.7 4 5.5 7.4.2 4.8-4.8 8.7-9.3 7.4-7.7-2.2-14.5-7.2-19.3-13.6-2.8-3.7-1.2-9.8 3-11.5z'%3E%3C/path%3E%3Cpath fill='%236467bf' d='M7.5 841.7c4-2 9.2.3 10.3 4.6 1.7 5.4 5 10 9.7 13 4 2.5 4.6 8.4 1.4 11.6-2.5 2.6-7 3-10 1-7.4-5-13-12.6-15.5-21-1.2-3.6.5-8 4-9.3z'%3E%3C/path%3E%3Cpath fill='%23666ac1' d='M6.5 910.8c3-1.6 7.3-.4 9 2.6 1.7 2.2 1 5 1.4 7.6 0 5.6 2.5 11 6 15 2.5 2.5 2.7 6.7.5 9.5-2.4 3.3-7.8 3.8-10.7 1-7.6-7.8-11.5-19-10.6-29.6.2-2.7 1.8-5.2 4.3-6.2z'%3E%3C/path%3E%3Cpath fill='%23696cc4' d='M9.3 980c3.7-2 9 .3 10 4.4 1 2.4-.2 4.8-1 7-2.4 5.7-2.3 12.4.3 18 1 2.3 2.4 5 1.5 7.6-1 4-5.7 6.2-9.5 4.5-2.6-1-3.8-3.7-5-6-4.4-10-4.3-21.8.4-31.6.6-1.7 1.7-3 3.3-4z'%3E%3C/path%3E%3Cpath fill='%236b6fc7' d='M16.3 1051.2c4-2.6 10 1 10 5.8.5 3-2 5.3-4 7.4-5.3 5.7-7 14-5.2 21.6 1 3.5-1 7.4-4.4 8.5-3.4 1.2-7.6-.8-8.7-4.3-4.2-13.8.7-30.2 12.3-39z'%3E%3C/path%3E%3Cpath fill='%236e72ca' d='M26.4 1125.3c4.5-2.6 10.7 1.5 10 6.7-.4 3.3-3.3 5.2-6 6.3-8.2 3.4-14 11.8-14.2 20.6 0 2.6-.6 5.6-3.2 7-4 2.8-10 0-10.2-5-.8-15.3 9.2-30.3 23.6-35.7z'%3E%3C/path%3E%3Cpath fill='%237175cd' d='M35.3 1203.2c3.7-.3 8.6-1.2 11.2 2.3 2.7 3.2 1 8.8-3 10-3.7.8-7.7.3-11.3 1.7-8 2.6-13.8 9.5-15.8 17.5-1 4.7-7.6 6.2-10.8 2.7-2.8-2.7-1.7-7-.4-10 4.5-13 16.6-22.6 30-24.2z'%3E%3C/path%3E%3Cpath fill='%237478d0' d='M36.4 1283.3c7-.6 14.2.5 20.3 4 3.8 2.4 3.3 8.7-.8 10.6-3 1.5-6-.2-8.6-1-9.8-3.5-21.6.5-27.3 9-1.5 2.4-3 5.6-6 6-4.6 1-9-4.4-6.8-8.7 5.4-11 17-18.8 29.2-20z'%3E%3C/path%3E%3Cpath fill='%23777bd3' d='M36.5 1363.5c11.6-1 23.8 3.6 31.3 12.7 2.7 3.6-.3 9.5-4.8 9.4-3.2.3-5-2.6-7.3-4.4-8.4-7.4-22.2-7.6-31-.4-2.3 1.8-4.3 5-7.7 4.7-4.7 0-7.5-6.3-4.4-9.8 6-7 14.8-11.3 24-12.2z'%3E%3C/path%3E%3Cpath fill='%237a7ed6' d='M31.4 1444.6c18-4.8 38.3 6.6 43.3 24.6 1 4-3.5 8-7.4 6.6-3.5-1-4-4.8-5.5-7.5-5.5-10.8-19.6-16-30.8-11.4-3.2 1-6.2 4.3-10 3-3.8-1.4-5-7.2-1.7-9.8 3.5-2.8 7.8-4.4 12-5.6z'%3E%3C/path%3E%3Cpath fill='%237d81da' d='M32.4 1524.6c15-3.4 31.8 4 39.2 17.8 3.5 6.5 5.3 14 4.3 21.5-1 4-6.7 5.5-9.5 2.4-2-2-1.4-5-1.6-7.4-.2-11.6-9.6-22-21-23.7-4.4-.8-8.8 0-13 1-4 1.2-7.7-3.5-6-7.2 1-3 4.6-3.7 7.4-4.4z'%3E%3C/path%3E%3Cpath fill='%238084dd' d='M36.3 1604.4c14-2 28.5 6 35 18.2 6 10.6 6 24.3 0 34.8-2 3.5-7.6 3-9-.6-1.8-3.5 1.4-6.8 2-10.2 3.8-12.4-4-26.7-16.3-30.5-4-1.6-8.3-.8-12.4-1.6-4.6-1.7-4-9 .7-10z'%3E%3C/path%3E%3Cpath fill='%238387e0' d='M43.3 1685.3c4-1.2 8.2 1 12 2.5 14.7 6.6 23.3 24.2 19.5 40-1.8 8-6.5 15.7-13.4 20.6-3 2.2-8-.6-7.7-4.4 0-2.3 1.8-3.7 3.3-5 7-6 10-16 7.8-24.7-1.8-8-7.6-15-15.3-18-2.2-.8-4.6-1-6.8-2-3.4-2-3-7.5.6-9z'%3E%3C/path%3E%3Cpath fill='%23868be4' d='M50.2 1768c1.4-.8 3.2-.8 4.7 0 13.2 5.7 21.7 20.5 20.3 35-1 15-12.6 28.5-27.3 31.4-3.4.6-6.4-3-5-6.3.6-2.6 3.7-3 6-4 8.2-2.8 14.5-10.4 16.2-19 2-9-1.5-18.8-8.6-24.6-2.2-2-5-3-7.2-4.8-2.2-2-1.7-6 .8-7.5z'%3E%3C/path%3E%3Cpath fill='%238a8ee7' d='M57.4 1852.2c3.7-1.8 6.6 2 9 4.5 11 12 11.7 31.6 1.7 44.5-6.8 9.3-18.5 14.6-30 14-2.4-.3-5.3-.2-7-2.2-1.6-2-1-5.4 1.3-6.8 1.7-1 3.8-.3 5.6-.4 9.8 1 20-4.5 24.7-13.2 4.6-8 4.3-18.7-.8-26.5-1.8-3-4.5-5-6.6-7.4-1.4-2.2-.4-5.4 2-6.4z'%3E%3C/path%3E%3Cpath fill='%238d91ea' d='M62.3 1938.3c1.7-1 4.3-1 5.6.8 9 11.5 9.2 28.8.8 40.8-7 10.4-20 16.4-32.6 15-5.7-.7-11.3-2.7-16-6-2.6-1.8-2-6.4 1-7.5 2.2-1 4.2.6 6 1.5 8.6 5 20 4.4 28-1.5 7.7-5.4 12-15 10.8-24.3-.3-4.5-2.3-8.6-4.7-12.4-1.6-2-1-5 1-6.3z'%3E%3C/path%3E%3Cpath fill='%239095ee' d='M66.3 2025.2c2-1.2 4.8-.5 5.7 1.6 5.6 12.8 2.2 28.7-8 38.2-9.4 9.2-24.2 12.2-36.5 7.4-7-2.8-13.5-8-17.3-14.7-1.2-2.6 1-5.8 3.8-5.7 2.5 0 3.7 2.4 5 4 7 9.5 20.5 13 31.2 8.4 12-4.7 19-18.8 15.3-31-.8-2.7-2.3-6.5.8-8.2z'%3E%3C/path%3E%3Cpath fill='%239398f1' d='M68.6 2112.7c2-1 5 0 5.4 2.4 2.4 14.5-5.8 30-19.2 36-12.5 6.2-28.7 3.6-38.7-6.2-5.6-5.5-9.4-13-10-21-.4-4 6-5 7.2-1.2 1 5.5 3 11 7 15.3 7 7.8 19 11 28.8 7 10.7-3.6 18.4-14.7 17.7-26-.2-2.2-.6-5.3 2-6.3z'%3E%3C/path%3E%3Cpath fill='%23969bf5' d='M8.4 2188.4c2-2 6-.3 6 2.6-.4 2-1 4-1.2 5.8-1 8.8 2.5 18 9.3 23.7 7 6 17.2 8 26 5 10-3 17-12.3 18.4-22.5.3-4 6.7-3.6 7 .3-1 15-13.3 28-28 30.3-13 2.5-27.4-3.6-34.6-15-5.2-7.8-6.8-17.8-4.6-27 .4-1 .6-2.4 1.6-3.2z'%3E%3C/path%3E%3Cpath fill='%23999ef8' d='M15.3 2257c2-1 4.4 0 5 2.2.3 2-1.3 3.3-2.3 4.8-5.7 7.6-6.8 18.2-3 27 4.3 10 15 16.7 26 16.2 10-.3 19.4-6.6 23.7-15.6 1.2-3.4 6.7-2.2 6.4 1.4-.7 3.4-3 6.3-5 9-9.3 11-26 15-39.3 9.2C13.8 2306 5 2292 6 2278c.7-7.8 3.7-15.7 9.3-21z'%3E%3C/path%3E%3Cpath fill='%239ca1fb' d='M25.6 2329.6c1.8-1.2 4.5.2 4.6 2.5.2 2.7-2.8 3.4-4.6 4.7-12 7-16.6 23.5-10 35.7 5.8 12.2 21.6 18.4 34.2 13.2 3.6-1.2 6.4-3.6 9.5-5.7 2.8-2 6 2.5 3.6 4.7-11.4 11-30.5 12-43 2.4-12.8-9-17.4-27.3-10.5-41.3 3.3-7 9-13 16-16z'%3E%3C/path%3E%3Cpath fill='%236264a7' d='M33.2 2407.2c2.3-.4 4.6-.8 7-.6 2.4.5 3 4.2.6 5.4-4 .7-8.3 1-12 2.8-12.6 5.3-19.5 20.5-15.2 33.4 4 13.3 18.8 22 32.3 18.8 2-.6 6-2 6.7 1.3.7 3.7-4 4-6.6 4.6-15.4 3-32.3-6.4-37.4-21.4-5.3-13.8 0-30.6 12-39 3.8-2.6 8-4.4 12.6-5.4z'%3E%3C/path%3E%3Cpath fill='%239ca1fb' d='M37.4 2486.4c5.5-.4 11.3.4 16.3 3 2 1.6.8 5.3-2 5.4-3.5-.8-7-2.3-10.8-2.2-13-.7-25.2 9-27.8 21.4-3 12 3.4 25 14.4 30.5 3.4 2 7.3 2.3 11 3 2.7 1 2.3 5.6-.6 6-17.3-.3-32-16.3-31.7-33.5-.4-17 14-32.7 31-33.6z'%3E%3C/path%3E%3Cpath fill='%23999ef8' d='M33.5 2566.7c10.8-2.2 22.7 1.3 30.5 9.3 1.8 1.6 1 5-1.3 5.6-2.3 1-4-1.5-5.6-2.7-9.6-8.4-25-8-34.6.3-8.6 7-12 19.7-8 30 2.3 6.4 7 11.4 12.7 14.8 3.2 2 .6 7.3-2.8 6-13.8-6.8-21.2-24-17-38.7 3-12.3 13.8-22.3 26.3-24.6z'%3E%3C/path%3E%3Cpath fill='%23969bf5' d='M32.4 2646.7c15-3.7 32 4.3 38.3 18.5.8 2.3-1.4 4.8-3.8 4.5-2.2 0-3-2.2-4-3.7-5.6-9.7-17.8-14.8-28.6-12.4-9.8 2-18 10-20.5 19.6-2 7.2-.8 15.2 3.4 21.4 1 1.5 2.4 3.3 1.4 5.2-1 2.4-4.7 2.8-6 .7-9.2-11.7-9.2-29.2-.2-41 4.8-6.4 12-11 19.8-12.8z'%3E%3C/path%3E%3Cpath fill='%239398f1' d='M31.4 2726.7c14.6-4 31.3 3 38.5 16.3 1.7 3.3 3.4 7 3.7 10.8-.3 2.8-4 4.3-6 2.6-1.6-1-1.7-3-2.3-4.6-2.5-8.4-9.6-15-18-17.5-8.6-2.6-18.6-.3-25.2 5.8-6.5 6-10 15-8.6 23.5 0 1.8 1 4-.5 5.6-1.5 2.2-5.2 1.8-6.3-.7-5.2-17.5 7-37.5 24.7-41.6z'%3E%3C/path%3E%3Cpath fill='%239095ee' d='M36.4 2805.5c14.7-1.7 29.7 7 35.4 20.6 2 5 3.2 10.4 2.8 15.7-.5 4-6.7 4.5-7.8.7-.6-3.3-.3-6.8-1.5-10-3-10.4-12.7-18.2-23.4-18.8-11.8-1-23.7 6.8-27 18-1 2.2-1 5-3.4 6-2.7 1.2-6-1.4-5.6-4.3 2.6-14.6 15.7-26.5 30.4-27.8z'%3E%3C/path%3E%3Cpath fill='%238d91ea' d='M33.5 2885.7c14-2.8 29.3 4 36.5 16.3 5 8.4 6.4 19 3.3 28.2-1 3-5.7 3.6-7.5 1-1.5-2.2 0-4.8 0-7 2.3-12-5-24.4-16.3-28.6-9.8-4-22-1.2-29 7-1.5 1.5-2.8 4-5.4 3.8-3.2 0-5.3-4-3.3-6.8 5-7.2 13-12.3 21.8-14z'%3E%3C/path%3E%3Cpath fill='%238a8ee7' d='M32.4 2965.7c15-3.5 31.4 4 38.5 17.4 5.8 10.8 5.6 24.7-1 35.2-1.6 3-6.4 2.6-7.8-.5-1.4-2.3.4-4.7 1.3-7 4.2-8.3 3-19-2.8-26.4-6-8-17-12-27-9.5-3 .6-5.7 2.6-8.8 3.3-4 .4-6.4-5-3.6-7.6 3.2-2.5 7.2-3.8 11-4.8z'%3E%3C/path%3E%3Cpath fill='%23868be4' d='M34.4 3045.4c14.2-3.4 29.8 4.8 36.7 17.5 7.7 13.5 5 32-6.5 42.5-2.5 2.2-7 .7-7.6-2.5-1-3.2 2-5.3 3.5-7.6 6-7.6 7-18.6 2.4-27-4.4-8.5-13.5-14.3-23-14-2-.2-4.6.4-6.3-1.2-2.5-2-2-6.3.7-7.8z'%3E%3C/path%3E%3Cpath fill='%238387e0' d='M48.2 3126c4.2-.4 8 2.2 11.5 4.2 13 8.3 19 25.5 14.5 40-2.6 8.7-8.6 16.4-16.5 20.7-3.2 2-7.7-1-7.4-4.8 0-2.7 2.5-4 4.5-5.5 7.5-5 11.6-14.7 10.5-23.6-1-9-7.2-17.2-15.7-20.5-1.8-1-4-1.5-4.8-3.6-1.3-2.8.5-6.3 3.4-7z'%3E%3C/path%3E%3Cpath fill='%238084dd' d='M58.3 3212.3c3.8-1.7 6.8 1.8 9 4.4 9.5 10.8 11.3 27.5 4.5 40-4.6 8.7-12.8 15.4-22.2 18-3.7 1-7.6-2.8-6.5-6.5 1-3.7 5-4 7.8-5.4 11.3-5 17.4-19.2 13-30.8-1.3-4.5-4.2-8.2-7.5-11.4-2.4-2.5-1.2-7 2-8.3z'%3E%3C/path%3E%3Cpath fill='%237d81da' d='M65.2 3302.3c2.8-1.5 6.5-.2 7.7 2.7 2.6 6 3.6 12.6 3 19-1.7 17.8-18.2 32.7-36 32-4.5 0-6.6-6.3-3.4-9.3 2.6-2.5 6.6-1.5 9.7-2.5 10.8-2.6 19-13 18.7-24.2 0-4-1.2-7.6-2.5-11.3-1-2.4.5-5.3 2.7-6.4z'%3E%3C/path%3E%3Cpath fill='%237a7ed6' d='M67.4 3394.4c3-2.2 8-.2 8.8 3.6 1.3 15-8.5 30.3-22.6 35.8-7.2 2.8-15.4 3.5-23 1.3-3.8-1.3-4.7-7.2-1.3-9.7 2.8-2.4 6.5-.6 9.7-.6 12 .8 23.8-8.7 25.4-20.7.6-3.3-.3-7.6 3-9.5z'%3E%3C/path%3E%3Cpath fill='%23777bd3' d='M66.5 3485.7c4.3-1.7 9.2 2.8 7.7 7.2-5 14.3-20 24.2-35.2 23.6-6-.2-12-1.6-17-4.8-3.5-2.5-2.8-8.7 1.3-10.2 3-1.5 6 .6 8.7 1.5 10.6 4.2 23.8-.8 29.2-10.8 1.4-2.4 2.3-5.7 5.3-6.5z'%3E%3C/path%3E%3Cpath fill='%237478d0' d='M59.5 3575.7c3.7-1.5 8.3 1.4 8.4 5.4.3 4.4-4 7-6.8 9.2-13.7 10-34.2 8.6-46.3-3.2-3.4-3.2-1.5-9.6 3-10.4 3-1 5.4 1.3 7.6 3 7.4 5.7 18.3 6.3 26.4 1.5 2.8-1.3 4.8-4 7.5-5.3z'%3E%3C/path%3E%3Cpath fill='%237175cd' d='M11.4 3651.2c2.5-1.4 6-1 8 1.4 2 2.5 4 5.3 6.8 7 6.6 5 15.5 5.6 23 2.7 4.7-2.3 10.3 2.6 8.8 7.6-1 4-5.6 5-9 6-15 4-32-2.8-40-16-2-3-.7-7.2 2.4-8.8z'%3E%3C/path%3E%3Cpath fill='%236e72ca' d='M9.5 3723.6c3.4-1 7 1.2 8 4.6 3 8.3 11 14.7 19.8 15.4 2.4.4 5.3 0 7.2 2 3 2.4 3 7.4 0 10-2.5 2.4-6.4 1.7-9.6 1.3C21 3755 9 3745 4.6 3732c-1.2-3.5 1-7.6 4.8-8.4z'%3E%3C/path%3E%3Cpath fill='%236b6fc7' d='M6.4 3796.4c3.3-1.6 7.6-.2 9.3 3 1 2.7 1 5.5 2 8.2 2 6 6.3 11 12 13.6 2.5 1.2 5.2 2.8 5.6 5.8 1.2 4.7-3.6 9.4-8.3 8-13.5-4.5-23.5-17.8-24.4-32-.2-2.8 1.5-5.4 3.8-6.6z'%3E%3C/path%3E%3Cpath fill='%23696cc4' d='M7.3 3868.4c3.3-1.3 7.3.3 9 3.5 1 1.8.4 4 .4 6-.7 7 2 13.7 6.7 18.6 2.4 2 3.4 5.8 1.8 8.7-1.8 4-7.5 5.2-10.8 2.3C5 3899.4.7 3886 2.8 3874c.4-2.6 2.2-4.7 4.5-5.6z'%3E%3C/path%3E%3Cpath fill='%23666ac1' d='M8.5 3941.4c4.6-2.7 11 1.3 10.7 6.7-.7 4-2.7 7.8-2.4 12-.2 4 1.3 7.5 2.5 11 1.2 4-1.6 8.3-5.5 9-3.4.8-7-1-8.3-4.4-4.3-9.3-4.5-20.3-.7-29.8.7-1.8 2-3.5 3.7-4.4z'%3E%3C/path%3E%3Cpath fill='%236467bf' d='M12.5 4014.7c4.2-2.2 9.8.6 10.5 5.3 1 5-4 8.3-5 13-2 4.6.7 10.7-3.4 14.6-3.8 4-11.3 1.7-12.4-3.7-1.2-8.7 1.2-17.6 6-25 1-1.6 2.3-3.5 4.3-4.3z'%3E%3C/path%3E%3Cpath fill='%236165bc' d='M17.4 4089.3c4.7-2.6 11.3 1.2 11 6.7.5 5-5 7.3-7.3 11-2.7 3.7-2.6 9.7-7.5 11.4-5.3 2.3-11.6-2.8-10.4-8.4 2.2-8.2 7.3-16 14.4-20.7z'%3E%3C/path%3E%3Cpath fill='%235f63ba' d='M25.4 4164.6c5.4-1.4 11 4 9.3 9.5-.7 4.2-5 5.6-8 7.7-4 2.3-5.7 7.7-10.7 7.8-6 .8-10.6-6.7-7.3-11.8 4-6 10-10.7 16.7-13z'%3E%3C/path%3E%3Cpath fill='%235d60b8' d='M30.3 4242.6c4.3-1.7 10 0 11.3 4.8 1.8 4.7-1.7 10-6.6 10.6-5 .8-9 6-14.3 4.2-5.6-1.3-7.6-9-3.6-13 3.8-3.4 8.6-5.2 13.3-6.6z'%3E%3C/path%3E%3Cpath fill='%235b5fb6' d='M35.4 4321.5c4.2-.4 9.4-1 12.3 2.8 3.6 4.3 1.3 12-4.3 13l-11.4 1.2c-6 .3-10-6.8-7-11.8 1.7-4 6.5-4.7 10.4-5.2z'%3E%3C/path%3E%3Cpath fill='%235a5db4' d='M39.3 4401.5c4.3-.8 8.7.2 12.7 1.6 5.2 2.3 6.2 10.2 2 13.8-4.4 3.8-10.4 1.2-15.3.4-7.2-2.4-6.6-14 .6-15.7z'%3E%3C/path%3E%3Cpath fill='%23585bb2' d='M49.3 4483c4-.5 7.7 1.7 11 3.8 4.5 3.5 3.7 11.5-1.6 14-4.6 2.4-9.5-.6-13.4-3-5.3-4.2-2.7-13.8 4-14.7z'%3E%3C/path%3E%3Cpath fill='%23575ab1' d='M56.3 4567.4c7-1.7 15 6.2 12 13.2-1.6 4.6-7.8 6.7-12 4-2.8-1.6-5.7-4-6.2-7.7-.6-4.2 2.2-8.6 6.3-9.6z'%3E%3C/path%3E%3Cpath fill='%235659b0' d='M61.4 4653.5c7-3 14.7 5.6 11.5 12.3-2.3 6-11 7-14.8 2-4.2-4.3-2.7-12.4 3-14.3z'%3E%3C/path%3E%3Cpath fill='%236264a7' d='M64.5 4740.3c5.7-3 13.2 2.2 12.4 8.6-.3 6.3-8.4 10.2-13.6 6.5-5.5-3.4-5-12.7 1-15.2zM67.3 4826.3c6.2-2.4 13 4 11.3 10.3-1 6-9.3 9-14 4.8-5.2-4-3.7-13.4 2.7-15z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\")",
              secondarySvgContent:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 4880'%3E%3Cg role='presentation'%3E%3Cpath fill='rgba(255,255,255,1)' d='M67.4 26.4c5.8-2 12.4 3.3 11.4 9.4-.4 6.5-8.8 10-13.8 6-5.6-3.6-4.2-13.5 2.4-15.3zM66.5 113.7c5.7-3.3 13.6 1.8 12.7 8.4 0 6.4-8 10.4-13.2 7-5.6-3.2-5.4-12.5.5-15.3z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M65.5 200.4c5.7-3.4 13.6 2 12.6 8.5 0 6-7 10.7-12.7 7.7-6.4-3-6-13.2.2-16.3z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M64.3 286.2c5-2 11.3 2.3 11.2 7.8 0 5.4-4.5 11.7-10.5 11-5.4-.3-9.2-6.3-7.3-11.2 1.2-3.2 3.2-6.5 6.6-7.6z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M59.4 372.5c5-2.6 11.6 1 12 6.5.8 5-3.4 8.6-7 11.3-4.5 3.2-11.7.2-12.6-5.3-1.4-5.5 3.6-9.7 7.6-12.5z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M54.3 457.4c4-2.2 9.6 0 11.2 4.2 1.7 3.7 0 8.4-3.5 10.5-3.7 2.5-8.2 5.6-12.8 4-4.3-1.6-6.5-6.8-4.8-11 1.5-4.2 6.4-5.4 10-7.6z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M48.6 540.7c4.4-2 10 1 11 5.7 1 4-1.4 8.4-5.4 9.7-4 1.6-8.5 3-13 2.5-5.6-.8-8.6-8-5.3-12.6 2.7-4.4 8.4-3.5 12.6-5.3z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M29.4 622.4c3-1.5 6.4 0 9.6 0 3.4.3 7.3-1 10.3 1.3 4.6 3 4.4 10.4-.2 13.3-3.7 2-8.2 1.7-12.4 1.5-3.6-.5-7.8-.7-10.2-4-3.2-3.7-1.6-10.2 3-12z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M20.3 698.3c4-2 7.8 1.3 11.4 2.8 4 2 9.6 1 12.2 5 3.3 4.7-.2 12-6 12.3-7 0-14-2.6-19.7-6.6-4.7-3.4-3.5-11.6 2-13.4z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M12.3 771.3c3-1.5 7-.6 9 2 3 3.8 6.7 6.7 11 8.3 3.3 1 5.7 4 5.5 7.4.2 4.8-4.8 8.7-9.3 7.4-7.7-2.2-14.5-7.2-19.3-13.6-2.8-3.7-1.2-9.8 3-11.5z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M7.5 841.7c4-2 9.2.3 10.3 4.6 1.7 5.4 5 10 9.7 13 4 2.5 4.6 8.4 1.4 11.6-2.5 2.6-7 3-10 1-7.4-5-13-12.6-15.5-21-1.2-3.6.5-8 4-9.3z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M6.5 910.8c3-1.6 7.3-.4 9 2.6 1.7 2.2 1 5 1.4 7.6 0 5.6 2.5 11 6 15 2.5 2.5 2.7 6.7.5 9.5-2.4 3.3-7.8 3.8-10.7 1-7.6-7.8-11.5-19-10.6-29.6.2-2.7 1.8-5.2 4.3-6.2z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M9.3 980c3.7-2 9 .3 10 4.4 1 2.4-.2 4.8-1 7-2.4 5.7-2.3 12.4.3 18 1 2.3 2.4 5 1.5 7.6-1 4-5.7 6.2-9.5 4.5-2.6-1-3.8-3.7-5-6-4.4-10-4.3-21.8.4-31.6.6-1.7 1.7-3 3.3-4z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M16.3 1051.2c4-2.6 10 1 10 5.8.5 3-2 5.3-4 7.4-5.3 5.7-7 14-5.2 21.6 1 3.5-1 7.4-4.4 8.5-3.4 1.2-7.6-.8-8.7-4.3-4.2-13.8.7-30.2 12.3-39z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M26.4 1125.3c4.5-2.6 10.7 1.5 10 6.7-.4 3.3-3.3 5.2-6 6.3-8.2 3.4-14 11.8-14.2 20.6 0 2.6-.6 5.6-3.2 7-4 2.8-10 0-10.2-5-.8-15.3 9.2-30.3 23.6-35.7z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M35.3 1203.2c3.7-.3 8.6-1.2 11.2 2.3 2.7 3.2 1 8.8-3 10-3.7.8-7.7.3-11.3 1.7-8 2.6-13.8 9.5-15.8 17.5-1 4.7-7.6 6.2-10.8 2.7-2.8-2.7-1.7-7-.4-10 4.5-13 16.6-22.6 30-24.2z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M36.4 1283.3c7-.6 14.2.5 20.3 4 3.8 2.4 3.3 8.7-.8 10.6-3 1.5-6-.2-8.6-1-9.8-3.5-21.6.5-27.3 9-1.5 2.4-3 5.6-6 6-4.6 1-9-4.4-6.8-8.7 5.4-11 17-18.8 29.2-20z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M36.5 1363.5c11.6-1 23.8 3.6 31.3 12.7 2.7 3.6-.3 9.5-4.8 9.4-3.2.3-5-2.6-7.3-4.4-8.4-7.4-22.2-7.6-31-.4-2.3 1.8-4.3 5-7.7 4.7-4.7 0-7.5-6.3-4.4-9.8 6-7 14.8-11.3 24-12.2z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M31.4 1444.6c18-4.8 38.3 6.6 43.3 24.6 1 4-3.5 8-7.4 6.6-3.5-1-4-4.8-5.5-7.5-5.5-10.8-19.6-16-30.8-11.4-3.2 1-6.2 4.3-10 3-3.8-1.4-5-7.2-1.7-9.8 3.5-2.8 7.8-4.4 12-5.6z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M32.4 1524.6c15-3.4 31.8 4 39.2 17.8 3.5 6.5 5.3 14 4.3 21.5-1 4-6.7 5.5-9.5 2.4-2-2-1.4-5-1.6-7.4-.2-11.6-9.6-22-21-23.7-4.4-.8-8.8 0-13 1-4 1.2-7.7-3.5-6-7.2 1-3 4.6-3.7 7.4-4.4z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M36.3 1604.4c14-2 28.5 6 35 18.2 6 10.6 6 24.3 0 34.8-2 3.5-7.6 3-9-.6-1.8-3.5 1.4-6.8 2-10.2 3.8-12.4-4-26.7-16.3-30.5-4-1.6-8.3-.8-12.4-1.6-4.6-1.7-4-9 .7-10z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M43.3 1685.3c4-1.2 8.2 1 12 2.5 14.7 6.6 23.3 24.2 19.5 40-1.8 8-6.5 15.7-13.4 20.6-3 2.2-8-.6-7.7-4.4 0-2.3 1.8-3.7 3.3-5 7-6 10-16 7.8-24.7-1.8-8-7.6-15-15.3-18-2.2-.8-4.6-1-6.8-2-3.4-2-3-7.5.6-9z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M50.2 1768c1.4-.8 3.2-.8 4.7 0 13.2 5.7 21.7 20.5 20.3 35-1 15-12.6 28.5-27.3 31.4-3.4.6-6.4-3-5-6.3.6-2.6 3.7-3 6-4 8.2-2.8 14.5-10.4 16.2-19 2-9-1.5-18.8-8.6-24.6-2.2-2-5-3-7.2-4.8-2.2-2-1.7-6 .8-7.5z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M57.4 1852.2c3.7-1.8 6.6 2 9 4.5 11 12 11.7 31.6 1.7 44.5-6.8 9.3-18.5 14.6-30 14-2.4-.3-5.3-.2-7-2.2-1.6-2-1-5.4 1.3-6.8 1.7-1 3.8-.3 5.6-.4 9.8 1 20-4.5 24.7-13.2 4.6-8 4.3-18.7-.8-26.5-1.8-3-4.5-5-6.6-7.4-1.4-2.2-.4-5.4 2-6.4z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M62.3 1938.3c1.7-1 4.3-1 5.6.8 9 11.5 9.2 28.8.8 40.8-7 10.4-20 16.4-32.6 15-5.7-.7-11.3-2.7-16-6-2.6-1.8-2-6.4 1-7.5 2.2-1 4.2.6 6 1.5 8.6 5 20 4.4 28-1.5 7.7-5.4 12-15 10.8-24.3-.3-4.5-2.3-8.6-4.7-12.4-1.6-2-1-5 1-6.3z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M66.3 2025.2c2-1.2 4.8-.5 5.7 1.6 5.6 12.8 2.2 28.7-8 38.2-9.4 9.2-24.2 12.2-36.5 7.4-7-2.8-13.5-8-17.3-14.7-1.2-2.6 1-5.8 3.8-5.7 2.5 0 3.7 2.4 5 4 7 9.5 20.5 13 31.2 8.4 12-4.7 19-18.8 15.3-31-.8-2.7-2.3-6.5.8-8.2z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M68.6 2112.7c2-1 5 0 5.4 2.4 2.4 14.5-5.8 30-19.2 36-12.5 6.2-28.7 3.6-38.7-6.2-5.6-5.5-9.4-13-10-21-.4-4 6-5 7.2-1.2 1 5.5 3 11 7 15.3 7 7.8 19 11 28.8 7 10.7-3.6 18.4-14.7 17.7-26-.2-2.2-.6-5.3 2-6.3z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M8.4 2188.4c2-2 6-.3 6 2.6-.4 2-1 4-1.2 5.8-1 8.8 2.5 18 9.3 23.7 7 6 17.2 8 26 5 10-3 17-12.3 18.4-22.5.3-4 6.7-3.6 7 .3-1 15-13.3 28-28 30.3-13 2.5-27.4-3.6-34.6-15-5.2-7.8-6.8-17.8-4.6-27 .4-1 .6-2.4 1.6-3.2z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M15.3 2257c2-1 4.4 0 5 2.2.3 2-1.3 3.3-2.3 4.8-5.7 7.6-6.8 18.2-3 27 4.3 10 15 16.7 26 16.2 10-.3 19.4-6.6 23.7-15.6 1.2-3.4 6.7-2.2 6.4 1.4-.7 3.4-3 6.3-5 9-9.3 11-26 15-39.3 9.2C13.8 2306 5 2292 6 2278c.7-7.8 3.7-15.7 9.3-21z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M25.6 2329.6c1.8-1.2 4.5.2 4.6 2.5.2 2.7-2.8 3.4-4.6 4.7-12 7-16.6 23.5-10 35.7 5.8 12.2 21.6 18.4 34.2 13.2 3.6-1.2 6.4-3.6 9.5-5.7 2.8-2 6 2.5 3.6 4.7-11.4 11-30.5 12-43 2.4-12.8-9-17.4-27.3-10.5-41.3 3.3-7 9-13 16-16z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M33.2 2407.2c2.3-.4 4.6-.8 7-.6 2.4.5 3 4.2.6 5.4-4 .7-8.3 1-12 2.8-12.6 5.3-19.5 20.5-15.2 33.4 4 13.3 18.8 22 32.3 18.8 2-.6 6-2 6.7 1.3.7 3.7-4 4-6.6 4.6-15.4 3-32.3-6.4-37.4-21.4-5.3-13.8 0-30.6 12-39 3.8-2.6 8-4.4 12.6-5.4z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M37.4 2486.4c5.5-.4 11.3.4 16.3 3 2 1.6.8 5.3-2 5.4-3.5-.8-7-2.3-10.8-2.2-13-.7-25.2 9-27.8 21.4-3 12 3.4 25 14.4 30.5 3.4 2 7.3 2.3 11 3 2.7 1 2.3 5.6-.6 6-17.3-.3-32-16.3-31.7-33.5-.4-17 14-32.7 31-33.6z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M33.5 2566.7c10.8-2.2 22.7 1.3 30.5 9.3 1.8 1.6 1 5-1.3 5.6-2.3 1-4-1.5-5.6-2.7-9.6-8.4-25-8-34.6.3-8.6 7-12 19.7-8 30 2.3 6.4 7 11.4 12.7 14.8 3.2 2 .6 7.3-2.8 6-13.8-6.8-21.2-24-17-38.7 3-12.3 13.8-22.3 26.3-24.6z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M32.4 2646.7c15-3.7 32 4.3 38.3 18.5.8 2.3-1.4 4.8-3.8 4.5-2.2 0-3-2.2-4-3.7-5.6-9.7-17.8-14.8-28.6-12.4-9.8 2-18 10-20.5 19.6-2 7.2-.8 15.2 3.4 21.4 1 1.5 2.4 3.3 1.4 5.2-1 2.4-4.7 2.8-6 .7-9.2-11.7-9.2-29.2-.2-41 4.8-6.4 12-11 19.8-12.8z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M31.4 2726.7c14.6-4 31.3 3 38.5 16.3 1.7 3.3 3.4 7 3.7 10.8-.3 2.8-4 4.3-6 2.6-1.6-1-1.7-3-2.3-4.6-2.5-8.4-9.6-15-18-17.5-8.6-2.6-18.6-.3-25.2 5.8-6.5 6-10 15-8.6 23.5 0 1.8 1 4-.5 5.6-1.5 2.2-5.2 1.8-6.3-.7-5.2-17.5 7-37.5 24.7-41.6z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M36.4 2805.5c14.7-1.7 29.7 7 35.4 20.6 2 5 3.2 10.4 2.8 15.7-.5 4-6.7 4.5-7.8.7-.6-3.3-.3-6.8-1.5-10-3-10.4-12.7-18.2-23.4-18.8-11.8-1-23.7 6.8-27 18-1 2.2-1 5-3.4 6-2.7 1.2-6-1.4-5.6-4.3 2.6-14.6 15.7-26.5 30.4-27.8z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M33.5 2885.7c14-2.8 29.3 4 36.5 16.3 5 8.4 6.4 19 3.3 28.2-1 3-5.7 3.6-7.5 1-1.5-2.2 0-4.8 0-7 2.3-12-5-24.4-16.3-28.6-9.8-4-22-1.2-29 7-1.5 1.5-2.8 4-5.4 3.8-3.2 0-5.3-4-3.3-6.8 5-7.2 13-12.3 21.8-14z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M32.4 2965.7c15-3.5 31.4 4 38.5 17.4 5.8 10.8 5.6 24.7-1 35.2-1.6 3-6.4 2.6-7.8-.5-1.4-2.3.4-4.7 1.3-7 4.2-8.3 3-19-2.8-26.4-6-8-17-12-27-9.5-3 .6-5.7 2.6-8.8 3.3-4 .4-6.4-5-3.6-7.6 3.2-2.5 7.2-3.8 11-4.8z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M34.4 3045.4c14.2-3.4 29.8 4.8 36.7 17.5 7.7 13.5 5 32-6.5 42.5-2.5 2.2-7 .7-7.6-2.5-1-3.2 2-5.3 3.5-7.6 6-7.6 7-18.6 2.4-27-4.4-8.5-13.5-14.3-23-14-2-.2-4.6.4-6.3-1.2-2.5-2-2-6.3.7-7.8z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M48.2 3126c4.2-.4 8 2.2 11.5 4.2 13 8.3 19 25.5 14.5 40-2.6 8.7-8.6 16.4-16.5 20.7-3.2 2-7.7-1-7.4-4.8 0-2.7 2.5-4 4.5-5.5 7.5-5 11.6-14.7 10.5-23.6-1-9-7.2-17.2-15.7-20.5-1.8-1-4-1.5-4.8-3.6-1.3-2.8.5-6.3 3.4-7z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M58.3 3212.3c3.8-1.7 6.8 1.8 9 4.4 9.5 10.8 11.3 27.5 4.5 40-4.6 8.7-12.8 15.4-22.2 18-3.7 1-7.6-2.8-6.5-6.5 1-3.7 5-4 7.8-5.4 11.3-5 17.4-19.2 13-30.8-1.3-4.5-4.2-8.2-7.5-11.4-2.4-2.5-1.2-7 2-8.3z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M65.2 3302.3c2.8-1.5 6.5-.2 7.7 2.7 2.6 6 3.6 12.6 3 19-1.7 17.8-18.2 32.7-36 32-4.5 0-6.6-6.3-3.4-9.3 2.6-2.5 6.6-1.5 9.7-2.5 10.8-2.6 19-13 18.7-24.2 0-4-1.2-7.6-2.5-11.3-1-2.4.5-5.3 2.7-6.4z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M67.4 3394.4c3-2.2 8-.2 8.8 3.6 1.3 15-8.5 30.3-22.6 35.8-7.2 2.8-15.4 3.5-23 1.3-3.8-1.3-4.7-7.2-1.3-9.7 2.8-2.4 6.5-.6 9.7-.6 12 .8 23.8-8.7 25.4-20.7.6-3.3-.3-7.6 3-9.5z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M66.5 3485.7c4.3-1.7 9.2 2.8 7.7 7.2-5 14.3-20 24.2-35.2 23.6-6-.2-12-1.6-17-4.8-3.5-2.5-2.8-8.7 1.3-10.2 3-1.5 6 .6 8.7 1.5 10.6 4.2 23.8-.8 29.2-10.8 1.4-2.4 2.3-5.7 5.3-6.5z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M59.5 3575.7c3.7-1.5 8.3 1.4 8.4 5.4.3 4.4-4 7-6.8 9.2-13.7 10-34.2 8.6-46.3-3.2-3.4-3.2-1.5-9.6 3-10.4 3-1 5.4 1.3 7.6 3 7.4 5.7 18.3 6.3 26.4 1.5 2.8-1.3 4.8-4 7.5-5.3z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M11.4 3651.2c2.5-1.4 6-1 8 1.4 2 2.5 4 5.3 6.8 7 6.6 5 15.5 5.6 23 2.7 4.7-2.3 10.3 2.6 8.8 7.6-1 4-5.6 5-9 6-15 4-32-2.8-40-16-2-3-.7-7.2 2.4-8.8z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M9.5 3723.6c3.4-1 7 1.2 8 4.6 3 8.3 11 14.7 19.8 15.4 2.4.4 5.3 0 7.2 2 3 2.4 3 7.4 0 10-2.5 2.4-6.4 1.7-9.6 1.3C21 3755 9 3745 4.6 3732c-1.2-3.5 1-7.6 4.8-8.4z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M6.4 3796.4c3.3-1.6 7.6-.2 9.3 3 1 2.7 1 5.5 2 8.2 2 6 6.3 11 12 13.6 2.5 1.2 5.2 2.8 5.6 5.8 1.2 4.7-3.6 9.4-8.3 8-13.5-4.5-23.5-17.8-24.4-32-.2-2.8 1.5-5.4 3.8-6.6z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M7.3 3868.4c3.3-1.3 7.3.3 9 3.5 1 1.8.4 4 .4 6-.7 7 2 13.7 6.7 18.6 2.4 2 3.4 5.8 1.8 8.7-1.8 4-7.5 5.2-10.8 2.3C5 3899.4.7 3886 2.8 3874c.4-2.6 2.2-4.7 4.5-5.6z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M8.5 3941.4c4.6-2.7 11 1.3 10.7 6.7-.7 4-2.7 7.8-2.4 12-.2 4 1.3 7.5 2.5 11 1.2 4-1.6 8.3-5.5 9-3.4.8-7-1-8.3-4.4-4.3-9.3-4.5-20.3-.7-29.8.7-1.8 2-3.5 3.7-4.4z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M12.5 4014.7c4.2-2.2 9.8.6 10.5 5.3 1 5-4 8.3-5 13-2 4.6.7 10.7-3.4 14.6-3.8 4-11.3 1.7-12.4-3.7-1.2-8.7 1.2-17.6 6-25 1-1.6 2.3-3.5 4.3-4.3z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M17.4 4089.3c4.7-2.6 11.3 1.2 11 6.7.5 5-5 7.3-7.3 11-2.7 3.7-2.6 9.7-7.5 11.4-5.3 2.3-11.6-2.8-10.4-8.4 2.2-8.2 7.3-16 14.4-20.7z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M25.4 4164.6c5.4-1.4 11 4 9.3 9.5-.7 4.2-5 5.6-8 7.7-4 2.3-5.7 7.7-10.7 7.8-6 .8-10.6-6.7-7.3-11.8 4-6 10-10.7 16.7-13z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M30.3 4242.6c4.3-1.7 10 0 11.3 4.8 1.8 4.7-1.7 10-6.6 10.6-5 .8-9 6-14.3 4.2-5.6-1.3-7.6-9-3.6-13 3.8-3.4 8.6-5.2 13.3-6.6z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M35.4 4321.5c4.2-.4 9.4-1 12.3 2.8 3.6 4.3 1.3 12-4.3 13l-11.4 1.2c-6 .3-10-6.8-7-11.8 1.7-4 6.5-4.7 10.4-5.2z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M39.3 4401.5c4.3-.8 8.7.2 12.7 1.6 5.2 2.3 6.2 10.2 2 13.8-4.4 3.8-10.4 1.2-15.3.4-7.2-2.4-6.6-14 .6-15.7z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M49.3 4483c4-.5 7.7 1.7 11 3.8 4.5 3.5 3.7 11.5-1.6 14-4.6 2.4-9.5-.6-13.4-3-5.3-4.2-2.7-13.8 4-14.7z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M56.3 4567.4c7-1.7 15 6.2 12 13.2-1.6 4.6-7.8 6.7-12 4-2.8-1.6-5.7-4-6.2-7.7-.6-4.2 2.2-8.6 6.3-9.6z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M61.4 4653.5c7-3 14.7 5.6 11.5 12.3-2.3 6-11 7-14.8 2-4.2-4.3-2.7-12.4 3-14.3z'/%3E%3Cpath fill='rgba(255,255,255,1)' d='M64.5 4740.3c5.7-3 13.2 2.2 12.4 8.6-.3 6.3-8.4 10.2-13.6 6.5-5.5-3.4-5-12.7 1-15.2zM67.3 4826.3c6.2-2.4 13 4 11.3 10.3-1 6-9.3 9-14 4.8-5.2-4-3.7-13.4 2.7-15z'/%3E%3C/g%3E%3C/svg%3E\")",
              svgHeights: {
                smaller: os(1464),
                smallest: os(1464),
                small: os(1464),
                medium: os(2196),
                large: os(4392),
                larger: os(4392),
                largest: os(4392)
              },
              svgTranslatePosition: {
                smallest: os(-1440),
                smaller: os(-1440),
                small: os(-1440),
                medium: os(-2160),
                large: os(-4320),
                larger: os(-4320),
                largest: os(-4320)
              },
              svgWidths: {
                smallest: os(24),
                smaller: os(24),
                small: os(24),
                medium: os(36),
                large: os(72),
                larger: os(72),
                largest: os(72)
              }
            };
          },
          Kc = function () {
            return { paddingLeft: os(20), paddingRight: os(18), columnGap: os(8), height: os(48) };
          },
          $c = function (e) {
            return {
              minHeight: os(48),
              rootPadding: '0 ' + os(18) + ' 0 ' + os(20),
              gap: os(8),
              zIndex: e.zIndexes.foreground,
              headerLineHeight: e.lineHeightSmall,
              headerFontSize: e.fontSizes.medium,
              headerMediaFontSize: e.fontSizes.small,
              headerMediaLineHeight: e.lineHeightSmall,
              importantFontWeight: e.fontWeightBold,
              contentFontSize: e.fontSizes.small,
              contentLineHeight: e.lineHeightSmall,
              contentMediaFontSize: e.fontSizes.small,
              contentMediaLineHeight: e.lineHeightSmall,
              selectableFocusHoverColor: e.colorScheme.default.foregroundHover,
              selectableFocusHoverBackgroundColor: e.colorScheme.default.backgroundHover,
              selectedColor: e.colorScheme.default.foregroundPressed,
              selectedBackgroundColor: e.colorScheme.default.backgroundActive1
            };
          },
          qc = nc(
            'border',
            'borderActive',
            'foregroundActive',
            'foregroundFocus',
            'foregroundHover',
            'backgroundHover',
            'backgroundActive',
            'backgroundFocus',
            'foregroundDisabled'
          ),
          Jc = function (e) {
            return {
              colorScheme: yc(
                vc(e.colorScheme, {
                  default: {
                    borderActive: e.colorScheme.default.border2,
                    backgroundActive: e.colorScheme.default.backgroundActive2,
                    backgroundFocus: e.colorScheme.default.backgroundFocus1,
                    foregroundDisabled: e.colorScheme.default.foregroundDisabled1
                  },
                  brand: {
                    foregroundHover: e.colors.white,
                    backgroundHover: e.colors.brand[300],
                    foregroundActive: e.colors.white,
                    borderActive: e.colors.brand[600],
                    backgroundActive: e.colors.brand[500],
                    foregroundFocus: e.colors.white,
                    backgroundFocus: e.colors.brand[300],
                    foregroundDisabled: e.colorScheme.brand.foregroundDisabled1
                  }
                }),
                qc
              ),
              color: e.colors.grey[500],
              colorActive: e.colors.black,
              colorFocus: void 0,
              colorHover: 'inherit',
              colorDisabled: void 0,
              borderColor: void 0,
              borderColorHover: void 0,
              borderColorActive: void 0,
              borderColorFocus: e.colors.white,
              outlineColorFocus: e.colors.black,
              backgroundColor: void 0,
              backgroundColorFocus: void 0,
              backgroundColorHover: void 0,
              backgroundColorActive: void 0,
              iconSize: os(16),
              iconOnlyBorderRadius: e.borderRadiusMedium,
              iconOnlyColorActive: e.colors.brand[600],
              iconOnlyColorFocus: e.colors.brand[600],
              iconOnlyWrapperBackgroundColorFocus: void 0,
              activeIconOnlyWrapperBackgroundColor: void 0,
              iconOnlyBackgroundColorHover: void 0,
              iconOnlyColorHover: e.colors.brand[600],
              underlinedBorderColor: e.colors.grey[200],
              lineHeightBase: e.lineHeightMedium,
              horizontalPadding: os(14) + ' ' + os(18),
              verticalBackgroundColor: e.colorScheme.default.background,
              verticalItemPadding: os(7) + ' ' + os(12),
              verticalBoxShadow: e.shadow16,
              verticalDividerMargin: os(8) + ' 0',
              verticalItemBorderWidth: os(2),
              verticalItemBorderColor: 'transparent',
              verticalPointingBorderColor: e.colorScheme.brand.borderActive,
              verticalBorderColor: e.colorScheme.default.borderTransparent,
              activeUnderlinedColor: void 0,
              activeUnderlinedPrimaryColor: e.colors.brand[600],
              activeUnderlinedBorderBottomColor: e.colors.black,
              activeUnderlinedWrapperColor: void 0,
              pointingIndicatorBackgroundColor: e.colors.brand[600],
              underlinedBottomBorderWidth: os(2),
              underlinedColorHover: 'inherit',
              primaryBorderColor: e.colorScheme.default.border2,
              primaryWrapperColorFocus: e.colors.black,
              primaryWrapperColor: e.colors.black,
              primaryWrapperBackgroundColorFocus: e.colors.brand[500],
              underlinedWrapperColorHover: e.colors.black,
              underlinedWrapperBackgroundHover: 'transparent',
              dividerHeight: os(1),
              borderWidth: os(1),
              menuZIndex: e.zIndexes.overlay,
              beakZIndex: e.zIndexes.menuItem,
              wrapperColorActive: e.colors.grey[500],
              wrapperColorFocus: e.colors.grey[500],
              wrapperColorHover: void 0,
              primaryWrapperColorHover: e.colors.black,
              wrapperBackgroundColorFocus: e.colors.grey[150],
              activeWrapperBackgroundColorHover: void 0,
              indicatorColor: e.colors.grey[500],
              activeIndicatorColor: e.colors.grey[750],
              activePrimaryIndicatorColor: e.colors.grey[750],
              activePrimaryVerticalIndicatorColor: e.colors.black,
              primaryIndicatorColorHover: e.colors.black,
              indicatorColorHover: e.colors.grey[500],
              subMenuBorderColor: e.colorScheme.default.borderTransparent
            };
          },
          Qc = function (e) {
            return {
              background: e.colorScheme.default.background3,
              backgroundHover: e.colorScheme.default.background1,
              borderRadius: '9999px',
              smallerRoundedBorderRadius: os(2),
              disabledBackground: e.colorScheme.default.backgroundDisabled,
              disabledColor: e.colorScheme.default.foregroundDisabled,
              invertedBackground: e.colorScheme.default.background,
              outlineBackground: 'transparent',
              outlineBorderColor: e.colorScheme.default.borderActive4,
              outlineDisabledborder: e.colorScheme.default.borderDisabled,
              smallerHeight: os(20),
              smallerMinWidth: os(80),
              smallerMargin: os(6) + ' ' + os(2),
              smallHeight: os(24),
              smallMinWidth: os(80),
              smallMargin: os(4),
              height: os(32),
              minWidth: os(90),
              margin: os(6) + ' ' + os(4),
              roundedBorderRadius: e.borderRadiusMedium,
              contentPaddingSmaller: os(2) + ' ' + os(8),
              contentFontSizeSmaller: os(12),
              contentFontSizeSmall: os(12),
              contentPaddingSmall: os(4) + ' ' + os(8),
              contentFontSize: os(14),
              contentPadding: os(6) + ' ' + os(8),
              actionMargin: '0 ' + os(8),
              actionWidth: os(16),
              smallOrSmallerActionWidth: os(12),
              iconMargin: '0 0 0 ' + os(8),
              iconWidth: os(20),
              smallOrSmallerIconWidth: os(16),
              selectedIconColor: e.colorScheme.default.border,
              selectedIconCheckColor: e.colorScheme.brand.background2,
              selectedImageIconWidth: os(32),
              smallSelectedImageIconWidth: os(24),
              smallerSelectedImageIconWidth: os(20),
              imageWidth: os(32),
              imageHeight: os(32),
              smallImageWidth: os(24),
              smallImageHeight: os(24),
              smallerImageWidth: os(20),
              smallerImageHeight: os(20)
            };
          },
          ed = function (e) {
            return {
              borderColor: e.colorScheme.default.borderTransparent,
              borderRadius: e.borderRadiusMedium,
              borderSize: '1px',
              backgroundColor: e.colorScheme.default.background,
              color: e.colorScheme.default.foreground,
              boxShadow: e.shadow16,
              padding: '' + os(16),
              pointerGap: os(5),
              pointerMargin: os(10),
              pointerHeight: os(7),
              pointerWidth: os(14),
              zIndex: e.zIndexes.overlay
            };
          },
          rd = function (e) {
            return {
              background: e.bodyBackground,
              color: e.bodyColor,
              scrollbarHeight: os(16),
              scrollbarWidth: os(16),
              scrollbarThumbBackgroundColor: e.colors.onyx[700],
              scrollbarThumbBorderRadius: os(9),
              scrollbarThumbBorderSize: os(4),
              scrollbarThumbHoverBackgroundColor: e.colors.onyx[700],
              scrollbarThumbHoverBorderSize: os(2)
            };
          },
          od = function (e) {
            return {
              colorDisabled: e.colors.grey[250],
              textFontSize: e.fontSizes.medium,
              textColorDefault: e.colors.grey[500],
              textColorDefaultHoverFocus: e.colors.grey[750],
              textColorChecked: e.colors.grey[750],
              indicatorColorDefault: e.colors.grey[500],
              indicatorBorderColorDefaultHover: e.colors.grey[750],
              indicatorBorderColorChecked: e.colors.brand[600],
              indicatorBackgroundColorChecked: e.colors.brand[600],
              padding: '0 ' + os(2),
              margin: os(5) + ' ' + os(8) + ' ' + os(5) + ' ' + os(2)
            };
          },
          td = function (e) {
            return {
              meReactingColor: e.colors.brand[600],
              meReactingColorHover: e.colors.brand[800],
              otherReactingColor: e.colors.grey[450],
              otherReactingColorHover: e.colors.grey[750],
              contentFontSize: e.fontSizes.small,
              fontWeightHover: e.fontWeightBold,
              outlineColorFocus: e.colors.brand[600],
              outlineWidthFocus: os(2),
              outlineOffsetFocus: os(-2),
              meReacting: !1,
              boxShadowColor: e.colors.white,
              borderColorFocus: e.colors.grey[750]
            };
          },
          nd = function () {
            return { reactionSpacing: os(8) };
          },
          ad = nc('foreground'),
          id = function (e) {
            return {
              colorScheme: yc(e.colorScheme, ad),
              color: e.bodyColor,
              disabledColor: e.colors.grey[250],
              backgroundColor: e.bodyBackground,
              disabledBackgroundColor: e.colors.grey[150],
              disabledBorderColor: 'transparent',
              borderRadius: 0,
              borderStyle: 'solid',
              borderWidth: '2px 0 0 0',
              boxShadow: '0 1px 1px 1px rgba(34,36,38,.15)',
              padding: '1em'
            };
          },
          ld = function (e) {
            return {
              lineBackground: e.colorScheme.default.foreground6,
              shapeBackground: e.colorScheme.default.foreground6,
              animationBackground: e.colorScheme.default.foreground6,
              animationBackgroundSecondary: e.colorScheme.default.foreground6,
              lineMargin: '0 0 ' + os(2) + ' 0',
              shapeMargin: '0 0 ' + os(2) + ' 0',
              buttonHeight: os(32),
              buttonWidth: os(96),
              buttonSmallHeight: os(24),
              buttonSmallWidth: os(72),
              buttonBackground: e.colorScheme.default.foreground6,
              buttonCircularBorderRadius: os(999),
              textBackground: e.colorScheme.default.foreground6,
              textWidth: '100%',
              textSmallerHeight: os(14),
              textSmallHeight: os(16),
              textMediumHeight: os(19),
              textLargeHeight: os(24),
              textLargerHeight: os(32),
              inputHeight: os(32),
              inputWidth: os(154),
              inputBackground: e.colorScheme.default.foreground6,
              avatarBackground: e.colorScheme.default.foreground6,
              avatarSmallest: os(20),
              avatarSmaller: os(24),
              avatarSmall: os(28),
              avatarMedium: os(32),
              avatarLarge: os(44),
              avatarLarger: os(64),
              avatarLargest: os(96)
            };
          },
          sd = function (e) {
            var r = e.colorScheme;
            return {
              height: os(16),
              length: os(320),
              railColor: r.default.border,
              disabledRailColor: r.default.backgroundDisabled1,
              railHeight: os(2),
              thumbColor: r.default.foreground2,
              activeThumbColor: r.default.foreground1,
              disabledThumbColor: r.default.foregroundDisabled1,
              thumbHeight: os(10),
              activeThumbHeight: os(14),
              thumbBorderPadding: os(4),
              thumbWidth: os(10),
              activeThumbWidth: os(14),
              trackColor: r.brand.foregroundActive,
              disabledTrackColor: r.default.foregroundDisabled1
            };
          },
          cd = function (e) {
            return {
              borderColor: void 0,
              borderWidth: 2,
              successBackgroundColor: e.colorScheme.green.background,
              successTextColor: e.colorScheme.green.foreground1,
              infoBackgroundColor: e.colorScheme.brand.background,
              infoTextColor: e.colorScheme.default.foreground2,
              warningBackgroundColor: e.colorScheme.yellow.background,
              warningTextColor: e.colorScheme.yellow.foreground2,
              errorBackgroundColor: e.colorScheme.red.background,
              errorTextColor: e.colorScheme.red.foreground2,
              defaultBackgroundColor: e.colorScheme.default.background5,
              defaultTextColor: e.colorScheme.default.foreground4
            };
          },
          dd = nc('foreground'),
          ud = function (e) {
            return {
              colorScheme: yc(e.colorScheme, dd),
              fontSizeSmallest: e.fontSizes.smallest,
              fontLineHeightSmallest: e.lineHeightSmallest,
              fontSizeSmaller: e.fontSizes.smaller,
              fontLineHeightSmaller: e.lineHeightSmaller,
              fontSizeSmall: e.fontSizes.small,
              fontLineHeightSmall: e.lineHeightSmall,
              fontSizeMedium: e.fontSizes.medium,
              fontLineHeightMedium: e.lineHeightMedium,
              fontSizeLarge: e.fontSizes.large,
              fontLineHeightLarge: e.lineHeightLarge,
              fontSizeLarger: e.fontSizes.larger,
              fontLineHeightLarger: e.lineHeightLarger,
              fontSizeLargest: e.fontSizes.largest,
              fontLineHeightLargest: e.lineHeightLargest,
              fontWeightLight: e.fontWeightLight,
              fontWeightSemilight: e.fontWeightSemilight,
              fontWeightRegular: e.fontWeightRegular,
              fontWeightSemibold: e.fontWeightSemibold,
              fontWeightBold: e.fontWeightBold,
              atMentionOtherColor: e.colors.brand[600],
              atMentionMeColor: e.colors.orange[400],
              atMentionMeFontWeight: e.fontWeightBold,
              disabledColor: e.colors.grey[250],
              errorColor: e.colorScheme.red.foreground,
              importantWeight: e.fontWeightBold,
              importantColor: e.colors.red[400],
              successColor: e.colors.green[600],
              timestampColor: e.colorScheme.default.foreground1
            };
          },
          fd = function (e) {
            return {
              margin: '0',
              padding: os(7) + ' ' + os(12),
              borderColor: 'transparent',
              borderRadius:
                e.borderRadiusMedium +
                ' ' +
                e.borderRadiusMedium +
                ' ' +
                e.borderRadiusSmall +
                ' ' +
                e.borderRadiusSmall,
              borderWidth: '0 0 ' + os(2) + ' 0',
              backgroundColor: e.colorScheme.default.background2,
              invertedBackgroundColor: e.colorScheme.default.background,
              placeholderColor: e.colorScheme.default.foreground1,
              disabledColor: e.colorScheme.brand.foregroundDisabled,
              fontColor: e.colorScheme.default.foreground,
              fontSize: e.fontSizes.medium,
              borderColorFocus: 'transparent transparent ' + e.colorScheme.brand.borderFocus1 + ' transparent',
              height: 'auto',
              borderColorError: e.colorScheme.red.background
            };
          },
          gd = nc(
            'foreground1',
            'background',
            'border',
            'foregroundActive',
            'foregroundHover',
            'backgroundHover',
            'foregroundDisabled1',
            'menuItemForegroundHover',
            'menuItemBackgroundHover'
          ),
          pd = function (e) {
            return {
              colorScheme: yc(
                vc(e.colorScheme, {
                  default: {
                    foregroundHover: e.colorScheme.brand.foregroundHover,
                    backgroundHover: 'transparent',
                    foregroundActive: e.colorScheme.brand.foregroundActive,
                    menuItemForegroundHover: e.colorScheme.default.foregroundHover,
                    menuItemBackgroundHover: e.colorScheme.default.backgroundHover
                  }
                }),
                gd
              ),
              foreground: void 0,
              background: 'transparent',
              dividerBorder: void 0,
              foregroundHover: void 0,
              backgroundHover: void 0,
              foregroundActive: void 0,
              backgroundActive: 'transparent',
              foregroundDisabled: void 0,
              backgroundDisabled: 'transparent',
              itemHeight: os(32),
              itemPadding: '0',
              borderWidth: '2px',
              borderRadius: e.borderRadiusMedium,
              dividerMargin: os(10) + ' ' + os(4),
              menuMaxWidth: os(312),
              menuPadding: os(8) + ' 0',
              menuBackground: void 0,
              menuBorder: void 0,
              menuBorderWidth: '1px',
              menuBorderRadius: e.borderRadiusMedium,
              menuBoxShadow: e.shadowLevel3,
              menuItemForeground: void 0,
              menuItemForegroundHover: void 0,
              menuItemBackgroundHover: void 0,
              menuItemForegroundDisabled: void 0,
              menuItemBackgroundDisabled: 'transparent',
              menuItemPadding: os(5) + ' ' + os(15),
              menuDividerBorder: void 0,
              menuDividerMargin: os(8) + ' 0',
              customItemHorizontalPadding: os(16),
              customItemVerticalPadding: os(4),
              overlayZIndex: e.zIndexes.overlay,
              lineHeightBase: e.lineHeightMedium
            };
          },
          bd = function (e) {
            return {
              color: e.colorScheme.default.foreground,
              padding: os(1) + ' 0',
              paddingRight: os(20),
              paddingLeft: os(20),
              borderColor: e.colorScheme.default.foreground1,
              borderStyle: 'solid',
              borderRadius: e.borderRadiusMedium,
              borderWidth: os(1),
              indicatorColor: 'transparent',
              selectionIndicatorMargin: '0 0 0 0',
              background: 'transparent',
              hoverBackground: e.colorScheme.default.background1,
              checkedBackground: e.colorScheme.brand.backgroundActive1,
              checkedBorderColor: e.colorScheme.brand.backgroundActive1,
              checkedIndicatorColor: e.colorScheme.default.background,
              disabledBackground: e.colorScheme.default.background,
              disabledBackgroundChecked: e.colorScheme.default.backgroundDisabled,
              disabledBorderColor: e.colorScheme.default.foregroundDisabled1,
              disabledCheckedIndicatorColor: e.colorScheme.default.foregroundDisabled
            };
          },
          md = function () {
            return { width: void 0, height: void 0 };
          },
          hd = function (e) {
            return {
              boxShadow: e.shadow8,
              borderRadius: e.borderRadiusMedium,
              borderColor: 'transparent',
              borderSize: '1px',
              borderStyle: 'none',
              padding: os(5) + ' ' + os(12) + ' ' + os(7) + ' ' + os(12),
              maxWidth: os(246),
              svgPointer: !0,
              pointerMargin: os(6),
              pointerGap: os(5),
              pointerWidth: os(16),
              pointerHeight: os(6),
              color: e.colorScheme.default.foreground3,
              backgroundColor: e.colors.grey[500],
              subtleBackgroundColor: e.colorScheme.default.background,
              subtleForegroundColor: e.colorScheme.default.foreground,
              subtleBorderColor: e.colorScheme.onyx.border1,
              zIndex: e.zIndexes.overlayPriority
            };
          },
          vd = function (e) {
            return {
              borderRadius: e.borderRadiusMedium,
              borderColor: e.colorScheme.default.border,
              borderColorPrimary: e.colors.brand[500],
              borderColorDisabled: e.colorScheme.brand.foregroundDisabled,
              smallDimension: os(24),
              smallPadding: '0 ' + os(8),
              smallMinWidth: '0',
              smallBoxShadow: 'none',
              padding: '0 ' + os(12),
              minWidth: '0',
              boxShadow: e.shadowLevel1,
              toggleButtonHeight: os(32),
              dividerColor: e.colorScheme.default.border,
              dividerPrimaryColor: e.colors.white,
              toggleButtonColor: e.colorScheme.default.foreground,
              toggleButtonBackgroundColor: e.colorScheme.default.background,
              toggleButtonBorderRadius: e.borderRadiusMedium,
              toggleButtonBorderColor: e.colorScheme.default.border,
              toggleButtonBoxShadow: e.shadowLevel1,
              toggleButtonColorHover: e.colorScheme.default.foregroundHover,
              toggleButtonBackgroundColorHover: e.colorScheme.default.backgroundHover1,
              toggleButtonBorderColorHover: e.colorScheme.default.borderHover,
              toggleButtonColorActive: e.colorScheme.default.foregroundPressed,
              toggleButtonBackgroundColorActive: e.colorScheme.default.backgroundPressed,
              toggleButtonBorderColorActive: e.colorScheme.default.borderPressed,
              toggleButtonBackgroundColorFocus: void 0,
              toggleButtonBorderColorFocus: void 0,
              toggleButtonColorFocus: void 0,
              toggleButtonPrimaryHoverBackgroundColor: e.colorScheme.brand.backgroundHover,
              toggleButtonPrimaryHoverColor: e.colorScheme.brand.foregroundHover1,
              toggleButtonPrimaryColor: e.colorScheme.brand.foreground4,
              toggleButtonPrimaryBackgroundColor: e.colorScheme.brand.background,
              toggleButtonPrimaryBorderColor: 'transparent',
              toggleButtonPrimaryBoxShadow: e.shadowLevel1Dark,
              toggleButtonPrimaryBackgroundColorActive: e.colorScheme.brand.backgroundPressed,
              toggleButtonPrimaryBackgroundColorFocus: void 0,
              toggleButtonColorDisabled: e.colorScheme.brand.foregroundDisabled,
              toggleButtonBackgroundColorDisabled: e.colorScheme.default.backgroundDisabled,
              toggleButtonIndicatorSize: os(16),
              focusBorderRadius: e.borderRadiusMedium,
              focusBorderWidth: e.borderWidth,
              focusInnerBorderColor: e.focusInnerBorderColor,
              focusOuterBorderColor: e.focusOuterBorderColor,
              focusBorderZIndex: e.zIndexes.foreground
            };
          },
          yd = function (e) {
            return {
              width: 300,
              height: 300,
              focusOuterBorderColor: e.focusOuterBorderColor,
              focusOuterBorderRadius: e.borderRadiusMedium,
              paddleColor: e.colorScheme.default.foreground4,
              paddleColorDisabled: e.colorScheme.brand.foregroundDisabled,
              paddleBackgroundColor: e.colorScheme.onyx.background3,
              paddleBackgroundColorActive: e.colorScheme.onyx.backgroundPressed,
              paddleBackgroundColorHover: e.colorScheme.onyx.backgroundHover,
              paddleBackgroundColorDisabled: e.colorScheme.default.backgroundDisabled,
              paddleBorderColor: 'transparent',
              paddleBorderRadius: e.borderRadiusMedium,
              paddleHeight: os(32),
              paddleIndicatorSize: os(16),
              focusBorderRadius: e.borderRadiusMedium,
              focusBorderWidth: e.borderWidth,
              focusInnerBorderColor: e.focusInnerBorderColor,
              focusBorderZIndex: e.zIndexes.foreground
            };
          },
          Cd = nc(
            'border',
            'borderActive',
            'foregroundActive',
            'foregroundFocus',
            'foregroundHover',
            'backgroundHover',
            'backgroundActive',
            'backgroundFocus',
            'foregroundDisabled'
          ),
          kd = function (e) {
            return {
              width: 300,
              colorScheme: yc(
                vc(e.colorScheme, {
                  default: {
                    borderActive: e.colorScheme.default.border2,
                    backgroundActive: e.colorScheme.default.backgroundActive1,
                    backgroundFocus: e.colorScheme.default.backgroundFocus1,
                    foregroundDisabled: e.colorScheme.default.foregroundDisabled1
                  },
                  brand: {
                    foregroundHover: e.colors.white,
                    backgroundHover: e.colors.brand[300],
                    foregroundActive: e.colors.white,
                    borderActive: e.colors.brand[600],
                    backgroundActive: e.colors.brand[500],
                    foregroundFocus: e.colors.white,
                    backgroundFocus: e.colors.brand[300],
                    foregroundDisabled: e.colorScheme.brand.foregroundDisabled1
                  }
                }),
                Cd
              ),
              color: e.colors.grey[500],
              colorActive: e.colors.black,
              borderColor: void 0,
              borderColorActive: void 0,
              borderColorFocus: e.colors.white,
              outlineColorFocus: e.colors.black,
              backgroundColor: void 0,
              backgroundColorFocus: void 0,
              backgroundColorHover: void 0,
              backgroundColorActive: void 0,
              iconOnlyColorActive: e.colors.brand[600],
              lineHeightBase: e.lineHeightMedium,
              horizontalPadding: os(14) + ' ' + os(18),
              verticalBackgroundColor: e.colors.white,
              verticalItemPadding: os(7) + ' ' + os(14),
              verticalItemBorderWidth: os(2),
              verticalItemBorderColor: 'transparent',
              verticalBackgroundColorFocus: e.colors.grey[150],
              primaryBorderColor: e.colorScheme.default.border2,
              indicatorBackgroundColor: e.colors.grey[500],
              indicatorActiveBackgroundColor: e.colors.brand[600],
              borderWidth: os(1),
              thumbnailWidth: 75
            };
          },
          wd = function (e) {
            return {
              color: e.colorScheme.default.foreground,
              hoverColor: e.colorScheme.default.foregroundHover,
              backgroundColor: e.colorScheme.default.background,
              backgroundHoverColor: e.colorScheme.default.backgroundHover1,
              defaultRowHeight: os(48),
              compactRowHeight: os(36),
              minCellWidth: '0',
              cellPadding: '0 ' + os(8),
              rowPadding: '0',
              headerFontSize: os(12),
              bodyFontSize: os(13),
              borderWidth: os(1),
              headerBorderColor: e.colorScheme.default.backgroundHover1,
              headerBorderHoverColor: 'transparent',
              headerBorderFocusColor: 'transparent',
              rowBorderColor: e.colorScheme.default.backgroundHover1,
              rowBorderHoverColor: e.colorScheme.default.backgroundHover1,
              rowBorderFocusColor: e.colorScheme.default.borderFocus,
              cellBorderColor: 'transparent',
              cellBorderHoverColor: 'transparent',
              cellBorderFocusColor: e.colorScheme.default.borderFocus
            };
          },
          xd = function (e) {
            return {
              backgroundColor: e.colorScheme.default.background1,
              backgroundColorDisabled: e.colorScheme.default.backgroundDisabled1,
              backgroundColorFocus: e.colorScheme.default.backgroundFocus1,
              backgroundColorHover: e.colorScheme.default.backgroundHover1,
              backgroundColorPressed: e.colorScheme.default.backgroundPressed,
              ghostBackgroundColor: 'none',
              ghostBackgroundColorDisabled: e.colorScheme.default.backgroundDisabled,
              ghostBackgroundColorFocus: 'none',
              ghostBackgroundColorHover: e.colorScheme.default.backgroundHover,
              ghostBackgroundColorPressed: e.colorScheme.default.backgroundPressed,
              invertedBackgroundColor: e.colorScheme.default.background2,
              invertedBackgroundColorDisabled: e.colorScheme.default.backgroundDisabled2,
              invertedBackgroundColorFocus: e.colorScheme.default.background2,
              invertedBackgroundColorHover: e.colorScheme.default.backgroundHover2,
              invertedBackgroundColorPressed: e.colorScheme.default.backgroundPressed,
              borderStyle: 'solid',
              borderColor: 'transparent',
              borderColorDisabled: 'transparent',
              borderColorHover: 'transparent',
              borderColorPressed: 'transparent',
              borderWidth: e.borderWidth,
              borderRadius: e.borderRadiusMedium,
              boxShadow: 'none',
              boxShadowDisabled: 'none',
              boxShadowHover: 'none',
              boxShadowFocus: 'none',
              boxShadowPressed: 'none',
              elevatedBoxShadow: e.shadowLevel1,
              elevatedBoxShadowDisabled: e.shadowLevel1,
              elevatedBoxShadowHover: e.shadowLevel3,
              elevatedBoxShadowFocus: e.shadowLevel1,
              elevatedBoxShadowPressed: e.shadowLevel1,
              padding: os(16),
              margin: os(0),
              colorDisabled: e.colorScheme.default.foregroundDisabled,
              compactPadding: os(0),
              previewMargin: '0 0 ' + os(10) + ' 0',
              headerMargin: '0 0 ' + os(10) + ' 0',
              bodyMargin: '0 0 ' + os(10) + ' 0',
              footerMargin: '0 0 ' + os(10) + ' 0',
              fittedPreviewMargin: os(0),
              fittedHeaderMargin: os(0),
              fittedBodyMargin: os(0),
              fittedFooterMargin: os(0),
              previewMarginHorizontal: '0 ' + os(10) + ' 0 0',
              topControlsTop: os(10),
              topControlsRight: os(0),
              width: os(300),
              height: '100%',
              sizeSmallWidth: os(200),
              sizeSmallHeight: '100%',
              sizeSmallPadding: os(0),
              sizeLargeWidth: os(500),
              sizeLargeHeight: '100%',
              sizeLargePadding: os(16),
              fluidWidth: '100%',
              fluidHeight: '100%',
              expandableBoxStartMaxHeight: os(20),
              expandableBoxEndMaxHeight: os(500),
              expandableBoxShrinkTransition: 'max-height 0.5s ease-in',
              expandableBoxExpandTransition: 'max-height 1s ease-in',
              selectedBackgroundColor: e.colorScheme.default.backgroundFocus3,
              selectedBorderColor: e.colorScheme.default.borderActive,
              selectedBoxShadow: e.shadowLevel4,
              selectedBackgroundColorDisabled: e.colorScheme.default.backgroundDisabled3,
              selectedBackgroundColorFocus: e.colorScheme.default.backgroundFocus3,
              selectedBackgroundColorHover: e.colorScheme.default.backgroundHover3,
              selectedBackgroundColorPressed: e.colorScheme.default.backgroundPressed3
            };
          };
        !(function (e) {
          (e[(e.Sunday = 0)] = 'Sunday'),
            (e[(e.Monday = 1)] = 'Monday'),
            (e[(e.Tuesday = 2)] = 'Tuesday'),
            (e[(e.Wednesday = 3)] = 'Wednesday'),
            (e[(e.Thursday = 4)] = 'Thursday'),
            (e[(e.Friday = 5)] = 'Friday'),
            (e[(e.Saturday = 6)] = 'Saturday');
        })(Cc || (Cc = {})),
          (function (e) {
            (e[(e.January = 0)] = 'January'),
              (e[(e.February = 1)] = 'February'),
              (e[(e.March = 2)] = 'March'),
              (e[(e.April = 3)] = 'April'),
              (e[(e.May = 4)] = 'May'),
              (e[(e.June = 5)] = 'June'),
              (e[(e.July = 6)] = 'July'),
              (e[(e.August = 7)] = 'August'),
              (e[(e.September = 8)] = 'September'),
              (e[(e.October = 9)] = 'October'),
              (e[(e.November = 10)] = 'November'),
              (e[(e.December = 11)] = 'December');
          })(kc || (kc = {})),
          (function (e) {
            (e[(e.FirstDay = 0)] = 'FirstDay'),
              (e[(e.FirstFullWeek = 1)] = 'FirstFullWeek'),
              (e[(e.FirstFourDayWeek = 2)] = 'FirstFourDayWeek');
          })(wc || (wc = {})),
          (function (e) {
            (e[(e.Day = 0)] = 'Day'),
              (e[(e.Week = 1)] = 'Week'),
              (e[(e.Month = 2)] = 'Month'),
              (e[(e.WorkWeek = 3)] = 'WorkWeek');
          })(xc || (xc = {}));
        var Sd = function (e) {
            return {
              calendarCellBorder: 'none',
              calendarCellHeight: os(34),
              calendarCellWidth: os(34),
              calendarCellPadding: os(0),
              calendarCellMargin: os(0),
              calendarCellBackgroundColor: e.colorScheme.default.background,
              calendarCellColor: 'inherit',
              calendarCellQuietColor: e.colorScheme.default.foreground2,
              calendarCellSelectedColor: e.colorScheme.brand.background4,
              calendarCellSelectedBackgroundColor: e.colorScheme.brand.borderActive1,
              calendarCellTodayBackgroundColor: e.colorScheme.brand.backgroundFocus,
              calendarCellTodayColor: e.colorScheme.white.foreground,
              calendarCellTodayBorderRadius: '50%',
              calendarCellHoverBackgroundColor: e.colorScheme.brand.backgroundHover2,
              calendarCellHoverColor: 'inherit',
              calendarCellDisabledColor: e.colorScheme.brand.foregroundDisabled,
              calendarCellDisabledBackgroundColor: e.colorScheme.default.background,
              calendarHeaderCellFontWeight: e.fontWeightRegular,
              calendarHeaderCellHeight: os(32),
              calendarHeaderCellPadding: os(2) + ' ' + os(0) + ' ' + os(2) + ' ' + os(0),
              calendarHeaderCellWidth: 'calc(100%/7)',
              calendarHeaderPaddingTop: os(5),
              calendarHeaderPaddingBottom: os(5),
              calendarHeaderLabelPaddingLeft: os(10),
              calendarHeaderLabelFontWeight: e.fontWeightBold,
              calendarMinHeight: os(282)
            };
          },
          Bd = {
            root: function () {
              return {
                verticalAlign: 'middle',
                display: 'flex',
                flexDirection: 'column',
                marginBlockEnd: 0,
                marginBlockStart: 0
              };
            }
          },
          Ed = {
            root: function (e) {
              var r = e.props;
              return Object.assign({ display: 'none', verticalAlign: 'middle' }, r.active && { display: 'block' }, {
                marginInlineStart: '' + os(20)
              });
            }
          },
          Od = {
            root: function (e) {
              return {
                display: 'inline-block',
                verticalAlign: 'middle',
                padding: '.5rem 0',
                cursor: e.props.disabled ? 'default' : 'pointer'
              };
            },
            contentWrapper: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                { display: 'grid', gridTemplateColumns: 'auto', msGridColumns: 'auto', userSelect: 'none' },
                r.content && { gridTemplateColumns: 'auto 1fr', msGridColumns: 'auto 1fr' },
                {
                  ':focus-visible': {
                    borderRadius: o.focusBorderRadius,
                    outline: o.focusBorderWidth + ' solid ' + o.focusBorderColor
                  }
                }
              );
            },
            indicator: function (e) {
              var r,
                o,
                t = e.props,
                n = e.variables,
                a = e.rtl;
              return Object.assign(
                {
                  alignItems: 'center',
                  display: 'inline-flex',
                  backgroundImage:
                    ((r = n.color),
                    (o = t.active),
                    o
                      ? "url(\"data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' role='presentation' focusable='false' fill='" +
                        encodeURIComponent(r) +
                        "' viewBox='8 8 16 16'%3E%3Cpath d='M16 19l3.5-4h-7z' /%3E%3C/svg%3E\")"
                      : "url(\"data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' role='presentation' focusable='false' fill='" +
                        encodeURIComponent(r) +
                        "' viewBox='8 8 16 16'%3E%3Cpath d='M19 16l-4-3.5v7z' /%3E%3C/svg%3E\")"),
                  backgroundPosition: 'center'
                },
                a && { transform: 'scaleX(-1)' },
                {
                  content: '" "',
                  overflow: 'hidden',
                  height: '100%',
                  width: os(16),
                  msGridColumn: '1',
                  marginRight: '' + os(4)
                }
              );
            },
            content: function () {
              return { alignItems: 'center', display: 'grid', msGridColumn: '2' };
            }
          },
          Fd = function (e, r) {
            return e.danger
              ? { color: r.dangerColor, backgroundColor: r.dangerBackgroundColor, borderColor: r.dangerBorderColor }
              : e.info
              ? { color: r.color, backgroundColor: r.backgroundColor, borderColor: r.borderColor }
              : r.oof
              ? { color: r.oofColor, backgroundColor: r.oofBackgroundColor, borderColor: r.oofBorderColor }
              : r.urgent
              ? { color: r.urgentColor, backgroundColor: r.urgentBackgroundColor, borderColor: r.urgentBorderColor }
              : e.success
              ? { color: r.successColor, backgroundColor: r.successBackgroundColor, borderColor: r.successBorderColor }
              : e.warning
              ? { color: r.warningColor, backgroundColor: r.warningBackgroundColor, borderColor: r.warningBorderColor }
              : { color: r.color, backgroundColor: r.backgroundColor, borderColor: r.borderColor };
          },
          Ad = {
            root: function (e) {
              var r = e.props,
                o = e.variables;
              return (
                e.theme.siteVariables,
                Object.assign(
                  {
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    borderStyle: o.borderStyle,
                    borderWidth: o.borderWidth,
                    borderRadius: o.borderRadius,
                    minHeight: o.minHeight,
                    padding: o.padding,
                    fontWeight: o.fontWeight,
                    visibility: 'visible',
                    boxSizing: 'border-box'
                  },
                  Fd(r, o),
                  ('top' === r.attached || !0 === r.attached) && {
                    borderRadius: o.borderRadius + ' ' + o.borderRadius + ' 0 0'
                  },
                  'bottom' === r.attached && { borderRadius: '0 0 ' + o.borderRadius + ' ' + o.borderRadius },
                  r.fitted && { display: 'inline-flex' },
                  r.dismissible && { padding: o.dismissiblePadding },
                  !r.visible && { visibility: 'hidden' }
                )
              );
            },
            actions: function (e) {
              return { margin: e.variables.actionsMargin };
            },
            header: function (e) {
              var r = e.variables;
              return { fontWeight: r.headerFontWeight, margin: r.headerMargin };
            },
            body: function () {
              return { display: 'flex', flexGrow: 1 };
            },
            content: function () {
              return { flexGrow: 1 };
            },
            icon: function (e) {
              var r = e.variables;
              return {
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: r.iconSize,
                height: r.iconSize,
                '& > :first-child': { height: '100%', width: '100%', '& svg': { height: '100%', width: '100%' } },
                margin: r.iconMargin
              };
            }
          },
          Pd = 'ui-alert__dismissaction__content',
          jd = 'transparent',
          Id = function (e) {
            var r = e.variables,
              o = e.borderRadius,
              t = void 0 === o ? r.focusBorderRadius || r.borderRadius : o,
              n = e.focusInnerBorderColor,
              a = void 0 === n ? r.focusInnerBorderColor || jd : n,
              i = e.focusOuterBorderColor,
              l = void 0 === i ? r.focusOuterBorderColor || jd : i,
              s = e.borderPadding,
              c = e.focusInnerBorderWidth,
              d = void 0 === c ? r.focusInnerBorderWidth || r.borderWidth : c,
              u = e.focusOuterBorderWidth,
              f = void 0 === u ? r.focusOuterBorderWidth || r.borderWidth : u,
              g = { content: '""', position: 'absolute', borderStyle: 'solid', pointerEvents: 'none', borderRadius: t },
              p = (null == s ? void 0 : s.top) || s,
              b = (null == s ? void 0 : s.bottom) || s,
              m = (null == s ? void 0 : s.left) || s,
              h = (null == s ? void 0 : s.right) || s;
            return {
              ':focus': { outline: 'none' },
              ':focus-visible': {
                borderColor: 'transparent',
                ':before': Object.assign({}, g, {
                  borderWidth: d,
                  zIndex: r.zIndexes.foreground,
                  borderColor: a,
                  top: null == s ? '0' : '-' + p,
                  bottom: null == s ? '0' : '-' + b,
                  left: null == s ? '0' : '-' + m,
                  right: null == s ? '0' : '-' + h
                }),
                ':after': Object.assign({}, g, {
                  borderWidth: f,
                  zIndex: r.zIndexes.foreground,
                  borderColor: l,
                  top: null == s ? '-' + d : 'calc(0px - ' + p + ' - ' + d + ')',
                  bottom: null == s ? '-' + d : 'calc(0px - ' + b + ' - ' + d + ')',
                  left: null == s ? '-' + d : 'calc(0px - ' + m + ' - ' + d + ')',
                  right: null == s ? '-' + d : 'calc(0px - ' + h + ' - ' + d + ')'
                })
              }
            };
          },
          Rd = function (e) {
            var r,
              o = e.outline;
            return (
              ((r = {})['& .ui-icon__filled'] = { display: o ? 'none' : 'block' }),
              (r['& .ui-icon__outline'] = { display: o ? 'block' : 'none' }),
              r
            );
          },
          Md = function (e, r) {
            return r
              ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' role='presentation' focusable='false' viewBox='8 8 16 16'%3E%3Cg%3E%3Cpath fill='" +
                  encodeURIComponent(e) +
                  "' d='M16.707 16l4.243-4.243a.5.5 0 1 0-.707-.707L16 15.293l-4.243-4.243a.5.5 0 1 0-.707.707L15.293 16l-4.243 4.243a.5.5 0 1 0 .707.707L16 16.707l4.243 4.243a.498.498 0 0 0 .707 0 .5.5 0 0 0 0-.707L16.707 16z' /%3E%3C/g%3E%3C/svg%3E\")"
              : "url(\"data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' role='presentation' focusable='false' viewBox='8 8 16 16'%3E%3Cg%3E%3Cpath fill='" +
                  encodeURIComponent(e) +
                  "' d='M17.414 16l3.89-3.89a1 1 0 1 0-1.415-1.413L16 14.586l-3.89-3.89a1 1 0 1 0-1.413 1.415L14.586 16l-3.89 3.89a1 1 0 1 0 1.415 1.413L16 17.414l3.89 3.89a.997.997 0 0 0 1.413 0 1 1 0 0 0 0-1.415L17.414 16z' /%3E%3C/g%3E%3C/svg%3E\")";
          },
          Dd = function (e, r, o) {
            return { width: o, height: o, backgroundImage: Md(e, r), backgroundRepeat: 'no-repeat' };
          },
          zd = {
            root: function (e) {
              var r,
                o,
                t,
                n = e.props,
                a = e.variables,
                i = e.theme.siteVariables.borderWidth,
                l = Fd(n, a).color,
                s = Id({
                  variables: {
                    borderRadius: a.focusBorderRadius,
                    borderWidth: a.focusBorderWidth,
                    focusInnerBorderColor: a.focusInnerBorderColor,
                    focusOuterBorderColor: a.focusOuterBorderColor,
                    zIndexes: { foreground: a.focusBorderZIndex }
                  },
                  borderPadding: i
                });
              return Object.assign(
                {
                  height: a.dismissActionSize,
                  minWidth: a.dismissActionSize,
                  color: a.dismissActionColor || 'currentColor',
                  outline: 0,
                  padding: 0,
                  borderWidth: 0,
                  backgroundColor: a.dismissActionBackgroundColor,
                  borderRadius: a.borderRadius,
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  verticalAlign: 'middle',
                  cursor: 'pointer',
                  transition: Ul
                },
                Rd({ outline: !0 }),
                !n.hasContent &&
                  (((r = {})['& .' + Pd] = Object.assign({}, Dd(l, !0, a.dismissActionIndicatorSize))), r),
                {
                  ':hover': Object.assign(
                    { backgroundColor: a.hoverBackgroundColor, color: 'currentColor' },
                    Rd({ outline: !1 }),
                    !n.hasContent &&
                      ((o = {}), (o['& .' + Pd] = Object.assign({}, Dd(l, !1, a.dismissActionIndicatorSize))), o),
                    Id({
                      variables: {
                        borderRadius: a.dismissActionHoverBorderRadius,
                        borderWidth: a.dismissActionHoverBorderWidth,
                        focusInnerBorderColor: a.dismissActionHoverInnerBorderColor,
                        focusOuterBorderColor: a.dismissActionHoverOuterBorderColor,
                        zIndexes: { foreground: a.dismissActionHoverZIndex }
                      }
                    })[':focus-visible']
                  ),
                  ':focus': s[':focus'],
                  ':focus-visible': Object.assign(
                    {
                      backgroundColor: a.focusBackgroundColor,
                      borderColor: a.dismissActionBorderColorFocus,
                      color: a.dismissActionColorFocus,
                      borderWidth: i
                    },
                    s[':focus-visible'],
                    Rd({ outline: !1 }),
                    !n.hasContent &&
                      ((t = {}), (t['& .' + Pd] = Object.assign({}, Dd(l, !1, a.dismissActionIndicatorSize))), t),
                    { ':hover': { borderColor: a.dismissActionBorderColorHover } }
                  )
                },
                n.disabled && {
                  cursor: 'default',
                  color: a.dismissActionColorDisabled,
                  boxShadow: 'none',
                  pointerEvents: 'none',
                  ':hover': { color: a.dismissActionColorDisabled },
                  backgroundColor: a.dismissActionBackgroundColorDisabled,
                  borderColor: a.dismissActionBorderColorDisabled
                }
              );
            },
            content: function (e) {
              var r = e.props,
                o = e.variables,
                t = Fd(r, o).color;
              return Object.assign(
                { fontWeight: o.dismissActionContentFontWeight },
                !r.hasContent && Object.assign({}, Dd(t, !1, o.dismissActionIndicatorSize))
              );
            }
          },
          _d = {
            root: function (e) {
              var r,
                o,
                t,
                n,
                a = e.props,
                i = e.variables,
                l = e.theme.siteVariables,
                s = Id({ variables: l, borderRadius: i.borderRadius });
              return Object.assign(
                {
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  width: '100%',
                  maxWidth: os(440),
                  minHeight: os(48),
                  padding: i.padding,
                  marginBottom: os(2),
                  marginRight: os(2),
                  background: i.backgroundColor,
                  color: i.textColor,
                  boxShadow: i.boxShadow,
                  border: l.borderWidth + ' solid ' + i.borderColor,
                  borderRadius: i.borderRadius
                },
                s,
                (((o = {})['& .ui-attachment__progress-container'] =
                  (((r = {
                    borderBottomLeftRadius: i.borderRadius,
                    borderBottomRightRadius: i.borderRadius,
                    bottom: 0,
                    height: i.progressHeight,
                    left: 0,
                    overflow: 'hidden',
                    position: 'absolute',
                    right: 0
                  })['& .ui-attachment__progress'] = {
                    background: i.progressColor,
                    height: '100%',
                    maxWidth: '100%',
                    transition: 'width 0.2s'
                  }),
                  r)),
                o),
                a.actionable && {
                  cursor: 'pointer',
                  ':focus-visible': Object.assign(
                    {},
                    s[':focus-visible'],
                    ((t = { backgroundColor: i.focusBackgroundColor, color: i.focusColor }),
                    (t['& .ui-attachment__action'] = { color: i.focusColor }),
                    (t['& .ui-icon'] = { color: i.focusColor }),
                    t)
                  ),
                  ':hover':
                    ((n = { backgroundColor: i.backgroundColorHover, color: i.textColorHover }),
                    (n['& .ui-attachment__action'] = { color: i.textColorHover }),
                    (n['& .ui-icon'] = { color: i.textColorHover }),
                    n)
                }
              );
            }
          },
          Hd = 'ui-loader__indicator',
          Td = 'ui-loader__svg',
          Wd = {
            root: function (e) {
              var r = e.props,
                o = e.variables,
                t = e.theme.siteVariables,
                n = Rd({ outline: !1 }),
                a = Id({ variables: t, borderRadius: o.actionFocusBorderRadius });
              return Object.assign(
                {
                  height: o.actionHeight,
                  maxWidth: o.actionMaxWidth,
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  verticalAlign: 'middle',
                  cursor: 'pointer',
                  color: o.actionColor,
                  backgroundColor: 'transparent',
                  borderColor: 'transparent',
                  padding: 0
                },
                Rd({ outline: !0 }),
                {
                  ':focus': Object.assign({ boxShadow: 'none' }, a[':focus']),
                  ':focus-visible': Object.assign({}, n, a[':focus-visible'])
                },
                r.primary && { color: o.actionPrimaryColor },
                r.disabled && {
                  cursor: 'default',
                  boxShadow: 'none',
                  pointerEvents: 'none',
                  color: o.actionColorDisabled,
                  backgroundColor: 'transparent',
                  ':hover': { color: o.actionColorDisabled }
                },
                { minWidth: o.actionHeight, ':hover': Object.assign({}, Rd({ outline: !1 })) }
              );
            },
            icon: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                {
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: o.actionIconSize,
                  height: o.actionIconSize
                },
                r.loading && { margin: 0, opacity: 0, width: 0 },
                r.hasContent &&
                  Object.assign(
                    { margin: '0 ' + os(10) + ' 0 0' },
                    'after' === r.iconPosition && { margin: '0 0 0 ' + os(10) }
                  )
              );
            },
            loader: function (e) {
              var r,
                o = e.props,
                t = e.variables;
              return Object.assign(
                (((r = {})['& .' + Hd] = { width: t.actionLoaderSize, height: t.actionLoaderSize }),
                (r['& .' + Td] = {
                  ':before': {
                    animationName: { to: { transform: 'translate3d(0, ' + t.actionLoaderSvgAnimationHeight + ', 0)' } },
                    borderWidth: t.actionLoaderBorderSize,
                    width: t.actionLoaderSize,
                    height: t.actionLoaderSvgHeight
                  }
                }),
                r),
                o.hasContent && { marginRight: os(4) }
              );
            }
          },
          Ld = {
            root: function () {
              return { flex: 1 };
            }
          },
          Nd = {
            root: function (e) {
              var r = e.variables;
              return {
                display: 'block',
                fontSize: r.descriptionFontSize,
                fontWeight: r.descriptionFontWeight,
                lineHeight: r.descriptionLineHeight
              };
            }
          },
          Vd = {
            root: function (e) {
              var r = e.variables;
              return {
                display: 'block',
                fontSize: r.headerFontSize,
                fontWeight: r.headerFontWeight,
                lineHeight: r.headerLineHeight
              };
            }
          },
          Zd = {
            root: function (e) {
              var r,
                o = e.variables;
              return (
                ((r = { height: o.iconSize, width: o.iconSize, marginRight: o.iconSpace })['& .ui-icon'] = {
                  height: '100%',
                  width: '100%',
                  '& svg': { height: '100%', width: '100%' }
                }),
                r
              );
            }
          },
          Ud = {
            smallest: 20,
            smaller: 24,
            small: 28,
            medium: 32,
            'medium-large': 36,
            large: 44,
            larger: 64,
            largest: 96
          },
          Gd = {
            smallest: 10,
            smaller: 12,
            small: 16,
            medium: 16,
            'medium-large': 20,
            large: 20,
            larger: 32,
            largest: 40
          },
          Xd = {
            smallest: 6,
            smaller: 10,
            small: 10,
            medium: 10,
            'medium-large': 10,
            large: 10,
            larger: 16,
            largest: 0
          },
          Yd = { smallest: 4, smaller: 6, small: 6, medium: 6, 'medium-large': 6, large: 6, larger: 10, largest: 0 },
          Kd = function (e) {
            var r = os(e);
            return { height: r, width: r };
          },
          $d = {
            root: function (e) {
              var r = e.props.size,
                o = e.variables.initialsFontWeight;
              return Object.assign(
                {
                  position: 'relative',
                  backgroundColor: 'inherit',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  fontWeight: o
                },
                Kd(Ud[r])
              );
            }
          },
          qd = {
            root: function (e) {
              var r = e.props,
                o = r.color,
                t = r.size,
                n = r.state,
                a = e.variables;
              return Object.assign(
                { display: 'inline-flex', alignItems: 'center', justifyContent: 'center' },
                Kd(Xd[t]),
                {
                  verticalAlign: 'middle',
                  borderRadius: '9999px',
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  boxShadow: '0 0 0 ' + a.statusBorderWidth + ' ' + a.statusBorderColor
                },
                'success' === n && { backgroundColor: a.statusSuccessBackgroundColor },
                'info' === n && { backgroundColor: a.statusInfoBackgroundColor },
                'warning' === n && { backgroundColor: a.statusWarningBackgroundColor },
                'error' === n && { backgroundColor: a.statusErrorBackgroundColor },
                'unknown' === n && { backgroundColor: a.statusBackgroundColor },
                !!o && { backgroundColor: o }
              );
            }
          },
          Jd = {
            root: function (e) {
              var r = e.props,
                o = r.size,
                t = r.state,
                n = e.variables;
              return Object.assign(
                { display: 'inline-flex', alignItems: 'center', justifyContent: 'center' },
                Kd(Yd[o]),
                { color: n.statusColor },
                'success' === t && { color: n.statusSuccessColor },
                'info' === t && { color: n.statusInfoColor },
                'error' === t && { color: n.statusErrorColor },
                'warning' === t && { color: n.statusWarningColor },
                { '& > :first-child': { height: '100%', width: '100%', '& svg': { height: '100%', width: '100%' } } }
              );
            }
          },
          Qd = {
            root: function (e) {
              var r = e.props.size,
                o = e.variables;
              return Object.assign({ borderRadius: o.imageCircularRadius, objectFit: 'cover' }, Kd(Xd[r]));
            }
          },
          eu = {
            root: function (e) {
              var r = e.variables,
                o = e.props;
              return Object.assign(
                { boxSizing: 'border-box', display: 'inline-block' },
                o.circular && { borderRadius: r.imageCircularRadius },
                o.avatar && { width: o.fluid ? '100%' : r.imageAvatarSize, borderRadius: r.imageAvatarRadius },
                {
                  borderColor: r.avatarBorderColor,
                  borderStyle: 'solid',
                  borderWidth: r.avatarBorderWidth,
                  height: '100%',
                  objectFit: 'cover',
                  verticalAlign: 'top',
                  width: '100%'
                },
                !o.avatar && { borderRadius: r.squareAvatarBorderRadius }
              );
            }
          },
          ru = {
            root: function (e) {
              var r = e.props,
                o = r.size,
                t = r.square,
                n = e.variables;
              return Object.assign(
                { color: n.iconColor, background: n.iconBackgroundColor },
                Kd(Ud[o]),
                { borderRadius: '50%', display: 'inline-flex', alignItems: 'center' },
                t && { borderRadius: n.squareAvatarBorderRadius },
                {
                  '& > :first-child': Object.assign({ margin: '0 auto' }, Kd(Gd[o]), {
                    '& svg': { width: '100%', height: '100%' }
                  })
                }
              );
            }
          },
          ou = {
            root: function (e) {
              var r = e.props,
                o = r.circular,
                t = r.size,
                n = r.square,
                a = e.variables,
                i = os(Ud[t]);
              return Object.assign(
                {
                  alignItems: 'center',
                  overflow: 'hidden',
                  color: a.labelColor,
                  backgroundColor: a.labelBackground,
                  borderRadius: '50%',
                  display: 'inline-block',
                  width: i,
                  height: i,
                  lineHeight: i,
                  fontSize: os(Ud[t] / 2.333),
                  verticalAlign: 'top',
                  textAlign: 'center',
                  padding: '0'
                },
                n && { borderRadius: a.squareAvatarBorderRadius },
                o && { borderRadius: a.labelCircularRadius }
              );
            }
          },
          tu = {
            root: function (e) {
              var r = e.props,
                o = e.variables,
                t = e.theme.siteVariables,
                n = t.borderWidth,
                a = Id(
                  Object.assign(
                    { variables: t, borderRadius: t.borderRadiusMedium, borderPadding: n },
                    r.circular && { borderPadding: os(4) }
                  )
                );
              return Object.assign(
                {
                  height: o.height,
                  minWidth: qe()(r.loading) ? o.minWidth : o.loadingMinWidth,
                  maxWidth: o.maxWidth,
                  color: o.color,
                  backgroundColor: o.backgroundColor,
                  borderRadius: o.borderRadius,
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  padding: o.padding,
                  verticalAlign: 'middle',
                  cursor: 'pointer',
                  transition: Ul,
                  userSelect: 'none'
                },
                !(r.text || r.flat || 'small' === r.size) &&
                  Object.assign(
                    {},
                    r.primary && { boxShadow: o.primaryBoxShadow },
                    !r.primary && { boxShadow: o.boxShadow }
                  ),
                'small' === r.size && {
                  padding: o.sizeSmallPadding,
                  height: o.sizeSmallHeight,
                  minWidth: o.sizeSmallMinWidth
                },
                !r.text &&
                  Object.assign(
                    {
                      outline: 0,
                      borderWidth: n,
                      borderStyle: 'solid',
                      borderColor: o.borderColor,
                      ':hover': {
                        color: o.colorHover,
                        backgroundColor: o.backgroundColorHover,
                        borderColor: o.borderColorHover
                      }
                    },
                    !r.disabledFocusable && {
                      ':active': {
                        transition: Zl,
                        color: o.colorActive,
                        backgroundColor: o.backgroundColorActive,
                        borderColor: o.borderColorActive,
                        boxShadow: 'none'
                      }
                    },
                    {
                      ':focus': a[':focus'],
                      ':focus-visible': Object.assign({}, a[':focus-visible'], {
                        backgroundColor: o.backgroundColorFocus,
                        borderColor: o.borderColorFocus,
                        color: o.colorFocus,
                        borderWidth: n,
                        ':hover': { borderColor: o.borderColorHover }
                      })
                    }
                  ),
                r.circular &&
                  !r.text &&
                  Object.assign(
                    { minWidth: o.height, padding: 0, borderRadius: o.circularBorderRadius },
                    'small' === r.size && { minWidth: o.sizeSmallHeight }
                  ),
                r.text &&
                  Object.assign(
                    {
                      color: o.textColor,
                      backgroundColor: 'transparent',
                      borderColor: 'transparent',
                      padding: '0 ' + os(8)
                    },
                    Rd({ outline: !0 }),
                    {
                      ':hover': Object.assign({ color: o.textColorHover }, Rd({ outline: !1 })),
                      ':active': { color: t.colorScheme.brand.backgroundPressed },
                      ':focus': Object.assign({ boxShadow: 'none' }, a[':focus']),
                      ':focus-visible': a[':focus-visible']
                    },
                    r.primary && { color: o.textPrimaryColor }
                  ),
                r.primary &&
                  !r.text &&
                  Object.assign(
                    {
                      color: o.primaryColor,
                      backgroundColor: o.primaryBackgroundColor,
                      borderColor: o.primaryBorderColor
                    },
                    !r.disabledFocusable && {
                      ':active': { transition: Zl, backgroundColor: o.primaryBackgroundColorActive, boxShadow: 'none' }
                    },
                    {
                      ':focus': a[':focus'],
                      ':focus-visible': Object.assign({}, a[':focus-visible'], {
                        backgroundColor: o.primaryBackgroundColorFocus
                      }),
                      ':hover': { color: o.primaryColorHover, backgroundColor: o.primaryBackgroundColorHover }
                    }
                  ),
                r.inverted &&
                  Object.assign(
                    {
                      backgroundColor: t.colorScheme.silver.background,
                      borderColor: t.colorScheme.silver.border,
                      color: t.colorScheme.silver.foreground
                    },
                    !r.disabledFocusable && {
                      ':active': {
                        transition: Zl,
                        backgroundColor: t.colorScheme.silver.backgroundPressed,
                        color: t.colorScheme.silver.foregroundHover
                      }
                    },
                    {
                      ':hover': {
                        backgroundColor: t.colorScheme.silver.backgroundHover,
                        color: t.colorScheme.silver.foregroundHover
                      },
                      ':focus': Object.assign({}, a[':focus'], { boxShadow: 'none' }),
                      ':focus-visible': Object.assign(
                        {},
                        a[':focus-visible'],
                        !r.disabledFocusable && {
                          backgroundColor: t.colorScheme.silver.backgroundPressed,
                          color: t.colorScheme.silver.foregroundHover
                        }
                      )
                    }
                  ),
                r.tinted &&
                  Object.assign(
                    {
                      backgroundColor: o.tintedBackgroundColor,
                      borderColor: o.tintedBorderColor,
                      color: o.tintedColor
                    },
                    !r.disabledFocusable && {
                      ':active': { transition: Zl, backgroundColor: o.tintedBackgroundColorActive }
                    },
                    {
                      ':hover': {
                        color: o.tintedColorHover,
                        backgroundColor: o.tintedBackgroundColorHover,
                        borderColor: o.tintedBorderColorHover
                      },
                      ':focus': { boxShadow: 'none' }
                    }
                  ),
                r.disabled && { pointerEvents: 'none' },
                (r.disabled || r.disabledFocusable) &&
                  Object.assign(
                    {
                      cursor: 'default',
                      color: o.colorDisabled,
                      boxShadow: 'none',
                      ':hover': { color: o.colorDisabled }
                    },
                    r.text && {
                      color: o.textColorDisabled,
                      backgroundColor: 'transparent',
                      ':hover': { color: o.textColorDisabled }
                    },
                    !r.text && { backgroundColor: o.backgroundColorDisabled, borderColor: o.borderColorDisabled }
                  ),
                r.fluid && { width: '100%', maxWidth: '100%' },
                r.iconOnly &&
                  Object.assign(
                    { minWidth: o.height, padding: 0 },
                    !r.inverted &&
                      !r.disabledFocusable && {
                        ':hover': Object.assign({}, Rd({ outline: !1 }), {
                          color: o.textColorIconOnlyHover,
                          background: o.backgroundColorIconOnlyHover
                        })
                      },
                    'small' === r.size && { minWidth: o.sizeSmallHeight }
                  )
              );
            },
            icon: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                {
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: o.iconSize,
                  height: o.iconSize
                },
                r.loading && { margin: 0, opacity: 0, width: 0 },
                r.hasContent &&
                  Object.assign(
                    { margin: '0 ' + os(10) + ' 0 0' },
                    'after' === r.iconPosition && { margin: '0 0 0 ' + os(10) }
                  )
              );
            },
            loader: function (e) {
              var r,
                o = e.props,
                t = e.variables;
              return Object.assign(
                (((r = {})['& .' + Hd] = {
                  width: 'small' === o.size ? t.sizeSmallLoaderSize : t.loaderSize,
                  height: 'small' === o.size ? t.sizeSmallLoaderSize : t.loaderSize
                }),
                (r['& .' + Td] = {
                  ':before': {
                    animationName: {
                      to: {
                        transform:
                          'translate3d(0, ' +
                          ('small' === o.size ? t.sizeSmallLoaderSvgAnimationHeight : t.loaderSvgAnimationHeight) +
                          ', 0)'
                      }
                    },
                    borderWidth: 'small' === o.size ? t.sizeSmallLoaderBorderSize : t.loaderBorderSize,
                    width: 'small' === o.size ? t.sizeSmallLoaderSize : t.loaderSize,
                    height: 'small' === o.size ? t.sizeSmallLoaderSvgHeight : t.loaderSvgHeight
                  }
                }),
                r),
                o.hasContent && { marginRight: os(4) }
              );
            }
          },
          nu = function (e) {
            return e ? { marginRight: os(8) } : { borderRadius: 0 };
          },
          au = {
            root: function () {
              return {};
            },
            middleButton: function (e) {
              var r = e.props;
              return Object.assign({}, nu(r.circular));
            },
            firstButton: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                {},
                nu(r.circular),
                !r.circular && { borderTopLeftRadius: o.borderRadius, borderBottomLeftRadius: o.borderRadius }
              );
            },
            lastButton: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                {},
                nu(r.circular),
                !r.circular && { borderTopRightRadius: o.borderRadius, borderBottomRightRadius: o.borderRadius }
              );
            }
          },
          iu = {
            root: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                {
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  fontSize: o.contentFontSize,
                  fontWeight: o.contentFontWeight,
                  lineHeight: o.contentLineHeight
                },
                'small' === r.size && { fontSize: o.sizeSmallContentFontSize, lineHeight: o.sizeSmallContentLineHeight }
              );
            }
          },
          lu = {
            root: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                { display: 'inline-flex', alignItems: 'center', verticalAlign: 'middle' },
                r.active && { fontWeight: o.itemCurrentFontWeight },
                r.disabled && { color: o.disabledColor },
                'smaller' === r.size && {
                  paddingLeft: o.linkPaddingLeftSmaller,
                  paddingRight: o.linkPaddingRightSmaller,
                  gap: o.linkSmallerGap
                },
                'small' === r.size && {
                  paddingLeft: o.linkPaddingLeftSmall,
                  paddingRight: o.linkPaddingRightSmall,
                  gap: o.linkSmallGap
                },
                'medium' === r.size && {
                  paddingLeft: o.linkPaddingLeftMedium,
                  paddingRight: o.linkPaddingRightMedium,
                  gap: o.linkMediumGap
                },
                'large' === r.size && {
                  paddingLeft: o.linkPaddingLeftLarge,
                  paddingRight: o.linkPaddingRightLarge,
                  gap: o.linkLargeGap
                }
              );
            }
          },
          su = {
            root: function (e) {
              return e.props, e.variables, { verticalAlign: 'middle' };
            }
          },
          cu = {
            root: function (e) {
              var r = e.props,
                o = e.variables,
                t = e.theme.siteVariables,
                n = Id(
                  Object.assign(
                    { variables: t },
                    'smaller' === r.size && {
                      borderPadding: {
                        top: o.linkPaddingTop,
                        right: o.linkPaddingRightSmaller,
                        bottom: o.linkPaddingBottom,
                        left: o.linkPaddingLeftSmaller
                      }
                    },
                    'small' === r.size && {
                      borderPadding: {
                        top: o.linkPaddingTop,
                        right: o.linkPaddingRightSmall,
                        bottom: o.linkPaddingBottom,
                        left: o.linkPaddingLeftSmall
                      }
                    },
                    'medium' === r.size && {
                      borderPadding: {
                        top: o.linkPaddingTop,
                        right: o.linkPaddingRightMedium,
                        bottom: o.linkPaddingBottom,
                        left: o.linkPaddingLeftMedium
                      }
                    },
                    'large' === r.size && {
                      borderPadding: {
                        top: o.linkPaddingTop,
                        right: o.linkPaddingRightLarge,
                        bottom: o.linkPaddingBottom,
                        left: o.linkPaddingLeftLarge
                      }
                    }
                  )
                );
              return Object.assign(
                {
                  userSelect: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  ':visited': { color: 'inherit' }
                },
                n
              );
            }
          },
          du = {
            root: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                { display: 'inline-flex', alignItems: 'center' },
                'smaller' === r.size && { fontSize: o.fontSizeSmaller },
                'small' === r.size && { fontSize: o.fontSizeSmall },
                'medium' === r.size && { fontSize: o.fontSizeMedium },
                'large' === r.size && { fontSize: o.fontSizeLarge }
              );
            }
          },
          uu = {
            root: function (e) {
              var r = e.props,
                o = e.variables,
                t = e.theme.siteVariables;
              return {
                backgroundColor: o.backgroundColor,
                border: t.borderWidth + ' solid ' + o.backgroundColor,
                display: 'flex',
                flexDirection: 'column',
                listStyle: 'none',
                margin: 0,
                padding: 'compact' === r.density ? '0 ' + os(4) + ' ' + os(2) : '0 ' + os(10) + ' 0 ' + os(10)
              };
            }
          },
          fu = {
            comfy: {
              root: function (e) {
                var r = e.props;
                return Object.assign(
                  {},
                  (!r.attached || 'top' === r.attached) && { paddingTop: os(16) },
                  ('bottom' === r.attached || !0 === r.attached) && { paddingTop: os(2) }
                );
              },
              gutter: function (e) {
                var r,
                  o = e.props;
                return (
                  ((r = { marginTop: e.variables.gutterMargin })['end' === o.contentPosition ? 'right' : 'left'] = 0), r
                );
              },
              message: function (e) {
                var r = e.variables;
                return { marginLeft: r.messageMargin, marginRight: r.messageMargin };
              }
            },
            compact: {
              root: function (e) {
                var r = e.props;
                return Object.assign({}, (!r.attached || 'top' === r.attached) && { paddingTop: os(8) }, {
                  marginTop: os(-2),
                  marginBottom: os(-2)
                });
              },
              gutter: function (e) {
                return { marginTop: e.variables.gutterMarginCompact, left: os(28) };
              },
              message: function (e) {
                var r = e.variables;
                return {
                  marginLeft: r.messageMarginCompact,
                  marginRight: r.messageMarginEndCompact,
                  width: 'calc(100% - ' + r.messageMarginCompact + ' - ' + r.messageMarginEndCompact + ')'
                };
              }
            }
          },
          gu = function (e) {
            return void 0 === e && (e = Nr), fu[e];
          },
          pu = {
            root: function (e) {
              var r = e.props;
              return Object.assign({ paddingBottom: 0, position: 'relative' }, gu(r.density).root(e));
            },
            gutter: function (e) {
              var r = e.props;
              return Object.assign(
                { position: 'absolute' },
                ('bottom' === r.attached || !0 === r.attached) && { display: 'none' },
                gu(r.density).gutter(e)
              );
            },
            message: function (e) {
              var r = e.props;
              return Object.assign(
                { float: 'end' === r.contentPosition ? 'right' : 'left', position: 'relative' },
                gu(r.density).message(e)
              );
            }
          },
          bu = {
            border: '0',
            clip: 'rect(0 0 0 0)',
            height: '1px',
            margin: '-1px',
            overflow: 'hidden',
            padding: '0',
            position: 'absolute',
            width: '1px'
          },
          mu = function (e) {
            return { zIndex: e, overflow: 'visible', opacity: 1, width: 'auto' };
          },
          hu = {
            comfy: {
              root: function (e) {
                var r,
                  o,
                  t,
                  n,
                  a = e.props,
                  i = e.variables;
                return Object.assign(
                  {
                    marginLeft: a.mine ? i.offset : 0,
                    marginRight: a.mine ? 0 : i.offset,
                    maxWidth: 'calc(100% - ' + i.offset + ')',
                    minWidth: i.offset,
                    paddingLeft: i.padding,
                    paddingRight: i.padding,
                    paddingTop: os(8),
                    paddingBottom: os(10),
                    backgroundColor: a.mine ? i.backgroundColorMine : i.backgroundColor,
                    border: i.border
                  },
                  (i.hasMention || i.isImportant) &&
                    (((r = {})['& .' + oa] = {
                      backgroundColor: i.hasMention ? i.hasMentionColor : i.isImportantColor,
                      position: 'absolute',
                      borderBottomLeftRadius: 'inherit',
                      borderTopLeftRadius: 'inherit',
                      height: '100%',
                      left: '0',
                      top: '0',
                      width: os(3)
                    }),
                    r),
                  !0 === a.attached &&
                    (((o = {})[a.mine ? 'borderTopRightRadius' : 'borderTopLeftRadius'] = 0),
                    (o[a.mine ? 'borderBottomRightRadius' : 'borderBottomLeftRadius'] = 0),
                    (o.paddingTop = os(5)),
                    (o.paddingBottom = os(7)),
                    o),
                  'top' === a.attached &&
                    (((t = {})[a.mine ? 'borderBottomRightRadius' : 'borderBottomLeftRadius'] = 0), t),
                  'bottom' === a.attached &&
                    (((n = {})[a.mine ? 'borderTopRightRadius' : 'borderTopLeftRadius'] = 0),
                    (n.paddingTop = os(5)),
                    (n.paddingBottom = os(7)),
                    n)
                );
              },
              author: function (e) {
                var r = e.props,
                  o = e.variables;
                return Object.assign({}, (r.mine || 'bottom' === r.attached || !0 === r.attached) && bu, {
                  color: o.authorColor,
                  fontWeight: o.authorFontWeight,
                  marginRight: o.authorMarginRight,
                  marginBottom: o.headerMarginBottom
                });
              },
              badge: function (e) {
                var r,
                  o = e.props;
                return (
                  ((r = {})['start' === o.badgePosition ? 'left' : 'right'] = 0),
                  (r.transform = 'start' === o.badgePosition ? 'translateX(-50%)' : 'translateX(50%)'),
                  (r.top = os(4)),
                  (r.position = 'absolute'),
                  r
                );
              },
              content: function (e) {
                var r = e.props;
                return Object.assign({}, r.hasBadge && 'end' === r.badgePosition && { marginRight: os(4) });
              },
              reactionGroup: function (e) {
                var r = e.props,
                  o = e.variables;
                return Object.assign(
                  { marginLeft: o.reactionGroupMarginLeft },
                  r.hasBadge && 'end' === r.badgePosition && { marginRight: os(2) },
                  { float: 'right' }
                );
              },
              timestamp: function (e) {
                var r = e.props,
                  o = e.variables;
                return Object.assign(
                  { marginBottom: o.headerMarginBottom },
                  ('bottom' === r.attached || !0 === r.attached) && !r.hasHeaderReactionGroup && bu
                );
              }
            },
            compact: {
              root: function (e) {
                var r,
                  o,
                  t = e.theme.siteVariables,
                  n = e.variables,
                  a = Id({ borderRadius: 'inherit', variables: t }),
                  i =
                    (((r = { backgroundColor: n.compactHoverBackground, border: n.compactHoverBorder })['& .' + ia] = {
                      opacity: 1
                    }),
                    r);
                return Object.assign(
                  { border: n.compactBorder, padding: n.paddingCompact, width: '100%' },
                  (n.hasMention || n.isImportant) &&
                    (((o = {})['& .' + oa] = {
                      backgroundColor: n.hasMention ? n.hasMentionColor : n.isImportantColor,
                      position: 'absolute',
                      borderRadius: os(2),
                      height: os(20),
                      left: os(-56),
                      top: n.paddingCompact,
                      width: os(2)
                    }),
                    o),
                  { ':focus-visible': Object.assign({}, a[':focus-visible'], i), '&:hover': i }
                );
              },
              author: function (e) {
                var r = e.props,
                  o = e.variables;
                return Object.assign({}, ('bottom' === r.attached || !0 === r.attached) && bu, {
                  color: r.mine ? o.authorColorMineCompact : o.contentColor,
                  float: 'left',
                  fontWeight: o.authorFontWeightCompact,
                  marginRight: o.authorMarginRightCompact
                });
              },
              badge: function (e) {
                var r = e.variables;
                return {
                  alignSelf: 'flex-start',
                  flexShrink: 0,
                  margin: os(-2) + ' ' + os(-2) + ' ' + os(-2) + ' ' + r.compactSpacing
                };
              },
              compactBody: function () {
                return { display: 'flex', justifyContent: 'space-between', '& > div': { minWidth: 0 } };
              },
              reactionGroup: function () {
                return { display: 'flex', marginTop: os(4) };
              },
              timestamp: function (e) {
                return {
                  alignSelf: 'flex-start',
                  flexShrink: 0,
                  marginLeft: e.variables.compactSpacing,
                  marginTop: os(2),
                  opacity: 0
                };
              }
            }
          },
          vu = function (e) {
            return void 0 === e && (e = Nr), hu[e];
          },
          yu = {
            root: function (e) {
              var r,
                o,
                t,
                n,
                a = e.props,
                i = e.variables,
                l = e.theme.siteVariables;
              return Object.assign(
                {
                  borderRadius: i.borderRadius,
                  display: 'inline-block',
                  outline: 0,
                  position: 'relative',
                  wordBreak: 'break-word',
                  wordWrap: 'break-word'
                },
                Id({ borderRadius: 'inherit', variables: l }),
                qe()(i.showActionMenu) &&
                  a.hasActionMenu &&
                  Object.assign(
                    { ':hover': ((r = {}), (r['> .' + Qn] = mu(i.overlayZIndex)), r) },
                    a.showActionMenu && (((o = {})['> .' + Qn] = mu(i.overlayZIndex)), o)
                  ),
                null == (t = (n = vu(a.density)).root) ? void 0 : t.call(n, e)
              );
            },
            actionMenu: function (e) {
              var r = e.props,
                o = e.variables,
                t = r.hasActionMenu && (r.focused || r.showActionMenu),
                n = qe()(o.showActionMenu) ? t : o.showActionMenu;
              return Object.assign(
                {
                  backgroundColor: o.backgroundColor,
                  border: '1px solid',
                  borderColor: o.reactionGroupBorderColor,
                  borderRadius: o.borderRadius,
                  boxShadow: o.actionMenuBoxShadow,
                  '[data-popper-escaped]': { opacity: 0 },
                  zIndex: -1,
                  overflow: 'hidden',
                  opacity: 0,
                  width: 0
                },
                n && mu(o.overlayZIndex)
              );
            },
            author: function (e) {
              var r,
                o,
                t = e.props;
              return null == (r = (o = vu(t.density)).author) ? void 0 : r.call(o, e);
            },
            compactBody: function (e) {
              var r,
                o,
                t = e.props;
              return null == (r = (o = vu(t.density)).compactBody) ? void 0 : r.call(o, e);
            },
            timestamp: function (e) {
              var r,
                o,
                t = e.props;
              return Object.assign(
                { display: 'inline-block' },
                null == (r = (o = vu(t.density)).timestamp) ? void 0 : r.call(o, e)
              );
            },
            content: function (e) {
              var r,
                o,
                t = e.props,
                n = e.variables;
              return Object.assign(
                {
                  color: n.contentColor,
                  display: 'block',
                  '& a': {
                    outline: 'none',
                    color: t.mine ? n.linkColorMine : n.linkColor,
                    ':focus': { textDecoration: 'underline' }
                  }
                },
                null == (r = (o = vu(t.density)).content) ? void 0 : r.call(o, e)
              );
            },
            badge: function (e) {
              var r,
                o,
                t = e.props,
                n = e.variables;
              return Object.assign(
                {
                  backgroundColor: n.hasMention ? n.hasMentionNubbinColor : n.isImportantColor,
                  borderRadius: '50%',
                  boxShadow: n.badgeShadow,
                  color: n.badgeTextColor,
                  height: 'auto',
                  padding: os(4),
                  width: 'auto',
                  zIndex: n.zIndex,
                  '& > :first-child': { display: 'inline-flex' }
                },
                null == (r = (o = vu(t.density)).badge) ? void 0 : r.call(o, e)
              );
            },
            reactionGroup: function (e) {
              var r,
                o,
                t = e.props;
              return null == (r = (o = vu(t.density)).reactionGroup) ? void 0 : r.call(o, e);
            }
          },
          Cu = {
            root: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                { color: o.detailsColor, display: 'inline-block', fontSize: o.detailsFontSize },
                'comfy' === r.density &&
                  Object.assign(
                    {},
                    ('top' === r.attached || !r.attached || r.hasHeaderReactionGroup) && { marginLeft: o.detailsMargin }
                  ),
                'compact' === r.density && { alignSelf: 'flex-start', flexShrink: 0, marginLeft: o.detailsMargin }
              );
            }
          },
          ku = {
            root: function (e) {
              var r = e.props,
                o = e.variables;
              return {
                color: o.color,
                display: 'flex',
                position: 'absolute',
                right: o.rightPosition,
                bottom: 'compact' === r.density ? o.bottomPositionCompact : o.bottomPosition,
                ':after': Object.assign({ content: '"' + r.title + '"' }, bu)
              };
            }
          },
          wu = 'ui-checkbox__indicator',
          xu = function (e, r) {
            return (
              "url(\"data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' role='presentation' style='background-color: " +
              encodeURIComponent(r) +
              "; padding: 2px;' focusable='false' viewBox='8 8 22.5 22.5'%3E%3Cg%3E%3Cpath fill='" +
              encodeURIComponent(e) +
              "' d='M23.5 11.875a.968.968 0 0 1-.289.711l-8.25 8.25c-.192.193-.43.289-.711.289s-.519-.096-.711-.289l-4.75-4.75a.965.965 0 0 1-.289-.711c0-.125.027-.25.082-.375s.129-.234.223-.328a.953.953 0 0 1 .695-.297c.135 0 .266.025.391.074.125.05.231.121.32.215l4.039 4.047 7.539-7.547a.886.886 0 0 1 .32-.215c.125-.049.255-.074.391-.074a1.004 1.004 0 0 1 .922.625.97.97 0 0 1 .078.375z' /%3E%3C/g%3E%3C/svg%3E\")"
            );
          },
          Su = function (e, r) {
            return (
              "url(\"data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' role='presentation' style='background-color: " +
              escape(r) +
              "; padding: 2px;' focusable='false' viewBox='8 8 22.5 22.5'%3E%3Cg%3E%3Cpath fill='" +
              escape(e) +
              "' d='M10 16v-1h12v1H10z 11.875a.968.968 0 0 1-.289.711l-8.25 8.25c-.192.193-.43.289-.711.289s-.519-.096-.711-.289l-4.75-4.75a.965.965 0 0 1-.289-.711c0-.125.027-.25.082-.375s.129-.234.223-.328a.953.953 0 0 1 .695-.297c.135 0 .266.025.391.074.125.05.231.121.32.215l4.039 4.047 7.539-7.547a.886.886 0 0 1 .32-.215c.125-.049.255-.074.391-.074a1.004 1.004 0 0 1 .922.625.97.97 0 0 1 .078.375z' /%3E%3C/g%3E%3C/svg%3E\")"
            );
          },
          Bu = function (e) {
            return {
              content: "' '",
              display: 'block',
              borderRadius: '50%',
              width: e.toggleIndicatorSize,
              height: e.toggleIndicatorSize,
              transition: 'margin .3s ease'
            };
          },
          Eu = {
            root: function (e) {
              var r,
                o = e.props,
                t = e.variables,
                n = e.theme;
              return Object.assign(
                {
                  position: 'relative',
                  display: 'inline-grid',
                  gridTemplateColumns: 'auto ' + t.gap + ' 1fr',
                  msGridColumns: 'auto ' + t.gap + ' 1fr'
                },
                'start' === o.labelPosition && {
                  gridTemplateColumns: '1fr ' + t.gap + ' auto',
                  msGridColumns: '1fr ' + t.gap + ' auto'
                },
                {
                  cursor: 'pointer',
                  outline: 0,
                  color: t.textColor,
                  padding: t.rootPadding,
                  verticalAlign: 'middle',
                  alignItems: 'start'
                },
                Id({ variables: n.siteVariables, borderRadius: '3px' }),
                {
                  ':hover':
                    ((r = { color: t.textColorHover }),
                    (r['& .' + wu] = Object.assign(
                      {},
                      !o.toggle &&
                        Object.assign(
                          {},
                          o.checked &&
                            'mixed' !== o.checked && {
                              borderColor: t.checkedBackgroundHover,
                              backgroundImage: xu(t.checkedIndicatorColor, t.checkedBackgroundHover)
                            },
                          !o.checked && { borderColor: t.borderColorHover }
                        ),
                      o.toggle &&
                        !o.disabled &&
                        Object.assign(
                          {
                            borderColor: t.borderColorHover,
                            ':before': Object.assign({}, Bu(t), {
                              borderColor: t.borderColorHover,
                              borderStyle: t.borderStyle,
                              borderWidth: t.borderWidth,
                              margin: t.togglePadding,
                              background: 'transparent'
                            })
                          },
                          o.checked && {
                            borderColor: t.checkedBorderColor,
                            background: t.checkedBackgroundHover,
                            ':before': Object.assign({}, Bu(t), {
                              margin: t.toggleCheckedPadding,
                              background: t.checkedIndicatorColor
                            })
                          }
                        )
                    )),
                    r)
                },
                o.checked && { color: t.checkedTextColor },
                o.disabled && { cursor: 'default', pointerEvents: 'none', color: t.disabledColor }
              );
            },
            checkbox: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                { msGridRowAlign: 'center', gridColumn: 1, msGridColumn: 1 },
                'start' === r.labelPosition && { gridColumn: 3, msGridColumn: 3 },
                {
                  boxShadow: 'unset',
                  width: os(16),
                  height: os(16),
                  borderColor: o.borderColor,
                  borderStyle: o.borderStyle,
                  borderRadius: o.borderRadius,
                  borderWidth: o.borderWidth,
                  color: o.indicatorColor,
                  margin: o.margin,
                  padding: o.padding,
                  userSelect: 'none',
                  backgroundImage: xu(o.indicatorColor, o.background),
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                },
                r.checked && {
                  borderColor: o.checkedBorderColor,
                  backgroundColor: o.checkedBackground,
                  backgroundImage: xu(o.checkedIndicatorColor, o.checkedBackground)
                },
                'mixed' === r.checked && { backgroundImage: Su(o.checkedIndicatorColor, o.checkedBackground) },
                r.disabled && { backgroundColor: o.disabledBackground, borderColor: o.disabledBorderColor },
                r.disabled &&
                  r.checked && {
                    color: o.disabledCheckedIndicatorColor,
                    borderColor: o.disabledBackgroundChecked,
                    backgroundColor: o.disabledBackgroundChecked,
                    backgroundImage: xu(o.disabledCheckedIndicatorColor, o.disabledBackgroundChecked)
                  },
                r.disabled &&
                  'mixed' === r.checked && {
                    color: o.disabledCheckedIndicatorColor,
                    borderColor: o.disabledBackgroundChecked,
                    backgroundColor: o.disabledBackgroundChecked,
                    backgroundImage: Su(o.disabledCheckedIndicatorColor, o.disabledBackgroundChecked)
                  }
              );
            },
            toggle: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                { msGridRowAlign: 'center', gridColumn: 1, msGridColumn: 1 },
                'start' === r.labelPosition && { gridColumn: 3, msGridColumn: 3 },
                {
                  boxShadow: 'unset',
                  boxSizing: 'border-box',
                  background: o.background,
                  borderColor: o.borderColor,
                  borderStyle: o.borderStyle,
                  borderRadius: o.toggleBorderRadius,
                  borderWidth: o.borderWidth,
                  margin: o.toggleMargin,
                  userSelect: 'none',
                  width: o.toggleWidth,
                  height: o.toggleHeight,
                  ':before': Object.assign({}, Bu(o), {
                    borderColor: r.disabled ? o.disabledToggleIndicatorColor : o.borderColor,
                    borderStyle: o.borderStyle,
                    borderWidth: o.borderWidth,
                    margin: o.togglePadding
                  })
                },
                r.checked && {
                  borderColor: o.checkedBorderColor,
                  background: o.checkedBackground,
                  ':before': Object.assign({}, Bu(o), {
                    margin: o.toggleCheckedPadding,
                    background: o.checkedIndicatorColor
                  })
                },
                r.disabled &&
                  Object.assign(
                    { background: o.disabledBackground, borderColor: o.disabledBorderColor },
                    r.checked && {
                      background: o.disabledBackgroundChecked,
                      borderColor: 'transparent',
                      ':before': Object.assign({}, Bu(o), {
                        margin: o.toggleCheckedPadding,
                        background: o.disabledCheckedIndicatorColor
                      })
                    }
                  )
              );
            },
            label: function (e) {
              var r = e.props;
              return Object.assign(
                { display: 'block', userSelect: 'none', gridColumn: 3, msGridColumn: 3 },
                'start' === r.labelPosition && { gridColumn: 1, msGridColumn: 1 }
              );
            }
          },
          Ou = {
            root: function (e) {
              var r,
                o = e.variables;
              return (
                ((r = {
                  background: o.rootBackground,
                  border: o.border,
                  borderRadius: o.rootBorderRadius,
                  outline: 'none',
                  padding: o.rootPadding,
                  position: 'relative',
                  width: o.rootWidth,
                  maxWidth: '100vw',
                  maxHeight: '100vh',
                  overflowX: 'hidden',
                  overflowY: 'auto',
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  msGridColumns: '1fr auto',
                  boxShadow: o.boxShadow,
                  color: o.foregroundColor
                })['@media screen and (max-width: ' + o.rootWidth + ')'] = { padding: o.rootPaddingZoom }),
                r
              );
            },
            footer: function () {
              return { gridColumn: '1 / -1', gridRow: 3, msGridRow: 3 };
            },
            actions: function (e) {
              var r,
                o,
                t = e.variables;
              return (
                ((o = { display: 'flex', width: '100%' })['& .ui-flex'] = { flexWrap: 'wrap', width: '100%' }),
                (o['@media screen and (max-width: ' + t.footerActionsBreakpoint + ')'] =
                  (((r = {})['& .ui-button'] = { width: '100%', maxWidth: '100%', margin: 0 }),
                  (r['& .ui-flex > :not(:last-child)'] = { marginBottom: '0.5rem' }),
                  r)),
                o
              );
            },
            content: function (e) {
              var r,
                o = e.variables;
              return (
                ((r = {
                  margin: o.contentMargin,
                  gridColumn: '1 / span 2',
                  gridRow: 2,
                  msGridColumn: 1,
                  msGridColumnSpan: 2,
                  msGridRow: 2,
                  justifySelf: 'left',
                  width: '100%'
                })['@media screen and (max-width: ' + o.rootWidth + '), screen and (max-height: 400px)'] = {
                  maxHeight: '100%',
                  overflow: 'unset'
                }),
                r
              );
            },
            header: function (e) {
              var r = e.variables;
              return {
                margin: r.headerMargin,
                gridRow: 1,
                msGridRow: 1,
                gridColumn: 1,
                msGridColumn: 1,
                justifySelf: 'left',
                fontSize: r.headerFontSize,
                fontWeight: r.headerFontWeight
              };
            },
            headerAction: function (e) {
              var r = e.variables;
              return {
                gridRow: 1,
                msGridRow: 1,
                gridColumn: 2,
                msGridColumn: 2,
                color: r.foregroundColor,
                margin: r.headerActionMargin
              };
            },
            overlay: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                {
                  alignItems: 'center',
                  background: 'transparent',
                  bottom: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  left: 0,
                  overflow: 'auto',
                  position: 'fixed',
                  right: 0,
                  top: 0,
                  zIndex: o.overlayZIndex
                },
                r.backdrop && { background: o.overlayBackground }
              );
            }
          },
          Fu = {
            root: function () {
              return { textAlign: 'right' };
            }
          },
          Au = function (e, r, o, t) {
            return Object.assign(
              { content: '""', flex: 1 },
              t.vertical ? { width: e + 1 + 'px', height: '100%' } : { height: e + 1 + 'px' },
              { background: _t()(o, 'foreground', r.dividerColor) }
            );
          },
          Pu = {
            root: function (e) {
              var r = e.props,
                o = e.variables,
                t = r.color,
                n = r.fitted,
                a = r.size,
                i = r.important,
                l = r.hasContent,
                s = r.vertical,
                c = o.colorScheme[t];
              return Object.assign(
                { color: _t()(c, 'foreground', o.textColor), display: 'flex', alignItems: 'center' },
                !n && { padding: s ? '0 ' + o.dividerPadding : o.dividerPadding + ' 0' },
                i && { fontWeight: o.importantFontWeight },
                s && { height: '100%' },
                l
                  ? {
                      textAlign: 'center',
                      fontSize: os(12 + a),
                      lineHeight: o.textLineHeight,
                      '::before': Object.assign({}, Au(a, o, c, r)),
                      '::after': Object.assign({}, Au(a, o, c, r))
                    }
                  : { '::before': Object.assign({}, Au(a, o, c, r)) }
              );
            }
          },
          ju = {
            root: function () {
              return { marginLeft: os(20), marginRight: os(20) };
            }
          },
          Iu =
            (n(998),
            n(1763),
            n(3279),
            n(735),
            {
              clearIndicator: 'ui-dropdown__clear-indicator',
              container: 'ui-dropdown__container',
              toggleIndicator: 'ui-dropdown__toggle-indicator',
              item: 'ui-dropdown__item',
              itemsCount: 'ui-dropdown__items-count',
              itemsList: 'ui-dropdown__items-list',
              searchInput: 'ui-dropdown__searchinput',
              selectedItem: 'ui-dropdown__selecteditem',
              selectedItems: 'ui-dropdown__selected-items',
              triggerButton: 'ui-dropdown__trigger-button'
            }),
          Ru = { backgroundColor: 'transparent', borderColor: 'transparent', borderBottomColor: 'transparent' },
          Mu = Object.assign({}, Ru, {
            ':hover': Ru,
            ':active': Ru,
            ':focus': Object.assign({}, Ru, { ':active': Ru })
          }),
          Du = function (e, r) {
            return e.fluid ? '100%' : e.inline ? 'initial' : r.width;
          },
          zu = {
            root: function (e) {
              var r = e.props;
              return Object.assign({}, r.inline && { display: 'inline-flex' });
            },
            clearIndicator: function (e) {
              var r = e.variables,
                o = e.theme.siteVariables;
              return Object.assign(
                {
                  alignItems: 'center',
                  alignSelf: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  userSelect: 'none',
                  margin: 0,
                  position: 'absolute',
                  right: os(6),
                  padding: os(2),
                  color: r.color
                },
                Id({ variables: o })
              );
            },
            container: function (e) {
              var r,
                o = e.props,
                t = e.variables,
                n = e.theme.siteVariables;
              return Object.assign(
                {
                  display: 'flex',
                  flexWrap: 'wrap',
                  position: 'relative',
                  borderStyle: 'solid',
                  borderColor: t.borderColor,
                  outline: 0,
                  width: Du(o, t),
                  borderWidth: o.search ? '0 0 ' + t.searchBorderBottomWidth + ' 0' : t.borderWidth,
                  color: t.color,
                  backgroundColor: t.backgroundColor,
                  borderRadius: t.containerBorderRadius
                },
                o.open && 'above' === o.position && { borderRadius: t.openAboveContainerBorderRadius },
                o.open && 'below' === o.position && { borderRadius: t.openBelowContainerBorderRadius },
                {
                  ':hover': Object.assign(
                    { backgroundColor: t.backgroundColorHover, borderColor: t.borderColorHover },
                    o.open && { borderColor: t.openBorderColorHover }
                  )
                },
                o.error && {
                  border: os(1) + ' solid ' + t.borderError,
                  ':hover': { border: os(1) + ' solid ' + t.borderError }
                },
                {
                  ':active': { backgroundColor: t.backgroundColor },
                  ':focus-within': { borderBottomColor: t.borderColorFocus }
                },
                o.focused &&
                  Object.assign(
                    { backgroundColor: t.backgroundColor },
                    o.search && { borderBottomColor: t.borderColorFocus },
                    !o.search && !o.open && o.isFromKeyboard && Id({ variables: n })[':focus-visible']
                  ),
                o.inline && Object.assign({}, Mu, { alignItems: 'center' }),
                o.inverted && {
                  backgroundColor: t.invertedBackgroundColor,
                  ':hover': { backgroundColor: t.invertedBackgroundColorHover },
                  ':active': { backgroundColor: t.invertedBackgroundColorHover },
                  ':focus': { backgroundColor: t.invertedBackgroundColorHover }
                },
                o.disabled && {
                  backgroundColor: n.colorScheme.default.backgroundDisabled,
                  borderColor: n.colorScheme.default.borderDisabled,
                  userSelect: 'none',
                  ':hover': { backgroundColor: n.colorScheme.default.backgroundDisabled },
                  ':active': { backgroundColor: n.colorScheme.default.backgroundDisabled }
                },
                (((r = {})['& .' + Iu.triggerButton] = Object.assign(
                  {},
                  o.disabled && { color: n.colorScheme.default.foregroundDisabled }
                )),
                r)
              );
            },
            selectedItems: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                {
                  display: 'flex',
                  flexWrap: 'wrap',
                  overflowY: 'auto',
                  overflowX: 'hidden',
                  maxHeight: o.selectedItemsMaxHeight,
                  width: '100%'
                },
                r.hasToggleIndicator && { paddingRight: o.toggleIndicatorSize },
                r.multiple && r.hasItemsSelected && { paddingTop: os(1), paddingBottom: os(4) }
              );
            },
            triggerButton: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                { overflow: 'hidden', boxShadow: 'none', minHeight: os(32) },
                Mu,
                { margin: '0', justifyContent: 'left', padding: o.comboboxPaddingButton },
                r.multiple &&
                  Object.assign(
                    { minWidth: 0, flex: 1 },
                    r.hasItemsSelected && { position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, height: '100%' }
                  ),
                Mu,
                {
                  ':focus': Object.assign({ color: o.color }, Mu),
                  ':focus-visible': Object.assign({ color: o.color }, Ru, {
                    ':after': { borderColor: 'transparent', borderRightWidth: 0 },
                    ':before': { borderColor: 'transparent', borderRightWidth: 0 }
                  }),
                  ':active': Object.assign({ color: o.color }, Ru, {
                    animationName: 'unset',
                    animationDuration: 'unset'
                  }),
                  ':hover': Object.assign({}, Ru, { color: o.color })
                },
                r.inline && { paddingLeft: 0, paddingRight: 0, width: 'initial' }
              );
            },
            list: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                {
                  outline: 0,
                  borderStyle: 'solid',
                  borderWidth: r.open ? o.listBorderWidth : '0px',
                  borderColor: o.listBorderColor,
                  zIndex: o.overlayZIndex,
                  maxHeight: o.listMaxHeight,
                  overflowY: 'auto',
                  width: Du(r, o),
                  background: o.listBackgroundColor
                },
                'above' === r.position && { borderRadius: o.aboveListBorderRadius },
                'below' === r.position && { borderRadius: o.belowListBorderRadius },
                r.open && { boxShadow: o.listBoxShadow, padding: o.listPadding }
              );
            },
            toggleIndicator: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                {
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  cursor: 'pointer'
                },
                r.disabled && { cursor: 'default' },
                { userSelect: 'none', margin: 0, position: 'absolute', right: os(8) },
                r.multiple && r.hasItemsSelected && { top: os(8) },
                { color: o.color },
                r.disabled && { color: o.disabledColor }
              );
            }
          },
          _u = {
            root: function (e) {
              return { flexBasis: e.variables.comboboxFlexBasis, flexGrow: 1 };
            },
            input: function (e) {
              var r = e.props;
              return Object.assign(
                { width: '100%', backgroundColor: 'transparent', borderWidth: 0 },
                r.inline && { padding: 0, lineHeight: 'initial' }
              );
            }
          },
          Hu = 'ui-dropdown__selecteditem__icon',
          Tu = {
            root: function (e) {
              var r,
                o = e.props,
                t = e.variables,
                n = e.theme.siteVariables,
                a = Id({ variables: n });
              return Object.assign(
                {
                  maxWidth: t.selectedItemsMaxWidth,
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0 ' + os(8),
                  startPaddingLeft: '0px',
                  lineHeight: os(20),
                  borderRadius: os(9999),
                  fontSize: os(14)
                },
                o.hasImage && { paddingLeft: '0px' },
                {
                  cursor: 'pointer',
                  margin: '.25rem 0 0 .4rem',
                  color: t.selectedItemColor,
                  position: 'relative',
                  border: t.selectedItemBorder,
                  height: os(24),
                  overflow: 'visible',
                  outline: 0,
                  fontWeight: n.fontWeightSemibold
                },
                t.selectedItemBackgroundColor && { backgroundColor: t.selectedItemBackgroundColor },
                {
                  ':focus': { color: t.selectedItemColorFocus },
                  ':hover':
                    ((r = { color: t.selectedItemColorHover, backgroundColor: t.selectedItemBackgroundColorHover }),
                    (r['& .' + Hu] = { color: t.selectedItemIconColorHover }),
                    r),
                  ':focus-visible': { ':after': a[':focus-visible'][':after'] }
                }
              );
            },
            image: function () {
              return { height: os(20), width: os(20) };
            },
            header: function (e) {
              var r = e.props;
              return (
                e.variables,
                Object.assign({}, r.hasImage && { marginLeft: os(3) }, {
                  marginRight: os(3),
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                })
              );
            },
            icon: function (e) {
              var r = e.variables;
              return Object.assign(
                {
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: os(16),
                  minWidth: os(16),
                  height: os(16),
                  '& > :first-child': { width: os(16), height: os(16), '& svg': { width: os(16), height: os(16) } },
                  cursor: 'pointer',
                  color: r.selectedItemIconColor
                },
                Rd({ outline: !0 }),
                { ':hover': Object.assign({ color: r.selectedItemIconColorHover }, Rd({ outline: !1 })) }
              );
            }
          },
          Wu = 'ui-dropdown__item__content',
          Lu = 'ui-dropdown__item__header',
          Nu = function (e) {
            return (
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' role='presentation' fill='" +
              encodeURIComponent(e) +
              "' focusable='false' view-box='8 8 16 16'%3E%3Cg%3E%3Cpath d='M23.5 11.875a.968.968 0 0 1-.289.711l-8.25 8.25c-.192.193-.43.289-.711.289s-.519-.096-.711-.289l-4.75-4.75a.965.965 0 0 1-.289-.711c0-.125.027-.25.082-.375s.129-.234.223-.328a.953.953 0 0 1 .695-.297c.135 0 .266.025.391.074.125.05.231.121.32.215l4.039 4.047 7.539-7.547a.886.886 0 0 1 .32-.215c.125-.049.255-.074.391-.074a1.004 1.004 0 0 1 .922.625.97.97 0 0 1 .078.375z' /%3E%3C/g%3E%3C/svg%3E\")"
            );
          },
          Vu = {
            root: function (e) {
              var r,
                o,
                t = e.props,
                n = e.variables,
                a = e.theme.siteVariables;
              return Object.assign(
                {
                  display: 'flex',
                  alignItems: 'center',
                  minHeight: 0,
                  padding: os(4) + ' ' + os(11),
                  whiteSpace: 'nowrap',
                  border: n.listItemFocusBorderWidth + ' solid transparent',
                  backgroundColor: n.listItemBackgroundColor
                },
                t.selected && { fontWeight: n.listItemSelectedFontWeight, color: n.listItemSelectedColor },
                { position: 'relative' },
                t.active &&
                  Object.assign(
                    {},
                    t.isFromKeyboard && Id({ variables: a, borderRadius: 0 })[':focus-visible'],
                    !t.isFromKeyboard &&
                      Object.assign(
                        { color: n.listItemColorHover, backgroundColor: n.listItemBackgroundColorHover },
                        t.hasHeader && (((r = {})['& .' + Lu] = { color: n.listItemColorHover }), r),
                        t.hasContent && (((o = {})['& .' + Wu] = { color: n.listItemColorHover }), o)
                      )
                  )
              );
            },
            image: function () {
              return { margin: os(3) + ' ' + os(12) + ' ' + os(3) + ' ' + os(4) };
            },
            header: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                {
                  flexGrow: 1,
                  lineHeight: o.listItemHeaderLineHeight,
                  fontSize: o.listItemHeaderFontSize,
                  color: o.listItemContentColor
                },
                r.hasContent && { marginBottom: os(-1), color: o.listItemHeaderColor },
                r.selected && { fontWeight: o.listItemSelectedFontWeight, color: o.listItemSelectedColor },
                { whiteSpace: 'normal' }
              );
            },
            content: function (e) {
              var r = e.variables;
              return {
                flexGrow: 1,
                lineHeight: r.listItemContentLineHeight,
                fontSize: r.listItemContentFontSize,
                color: r.listItemContentColor
              };
            },
            checkableIndicator: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                { backgroundImage: Nu(o.listItemSelectedColor) },
                r.active && !r.isFromKeyboard && { backgroundImage: Nu(o.listItemColorHover) },
                {
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  position: 'absolute',
                  width: os(24),
                  height: os(24),
                  right: os(7),
                  top: os(-3)
                }
              );
            },
            endMedia: function () {
              return { flexShrink: 0, lineHeight: os(16) };
            },
            main: function () {
              return { display: 'flex', flexDirection: 'column', flexGrow: 1, minWidth: 0 };
            }
          },
          Zu = 'ui-embed__control',
          Uu = function (e) {
            return (
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' role='presentation' focusable='false' viewBox='0 0 24 24'%3E%3Cg%3E%3Cpath fill='" +
              encodeURIComponent(e) +
              "' d='M5.74609 3C4.7796 3 3.99609 3.7835 3.99609 4.75V19.25C3.99609 20.2165 4.7796 21 5.74609 21H9.24609C10.2126 21 10.9961 20.2165 10.9961 19.25V4.75C10.9961 3.7835 10.2126 3 9.24609 3H5.74609Z' /%3E%3Cpath fill='" +
              encodeURIComponent(e) +
              "' d='M14.7461 3C13.7796 3 12.9961 3.7835 12.9961 4.75V19.25C12.9961 20.2165 13.7796 21 14.7461 21H18.2461C19.2126 21 19.9961 20.2165 19.9961 19.25V4.75C19.9961 3.7835 19.2126 3 18.2461 3H14.7461Z' /%3E%3C/g%3E%3C/svg%3E\")"
            );
          },
          Gu = {
            root: function (e) {
              var r,
                o,
                t = e.variables,
                n = e.theme.siteVariables,
                a = Id({ variables: n });
              return Object.assign(
                {
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  position: 'relative',
                  cursor: 'pointer',
                  width: t.width,
                  height: t.height || 'auto',
                  outline: 0
                },
                a[':focus'],
                {
                  ':focus-visible':
                    ((r = {}),
                    (r['& .' + Zu] = Object.assign(
                      { borderColor: t.focusBorderColor, opacity: 1 },
                      a[':focus-visible']
                    )),
                    r),
                  ':hover': ((o = {}), (o['& .' + Zu] = { opacity: 1, zIndex: t.zIndex }), o)
                }
              );
            },
            control: function (e) {
              var r,
                o = e.props,
                t = e.variables;
              return Object.assign(
                {
                  width: os(48),
                  height: os(48),
                  color: t.controlColor,
                  padding: os(4),
                  borderRadius: '50%',
                  backgroundColor: t.controlBackgroundColor,
                  backgroundImage:
                    ((r = t.controlColor),
                    "url(\"data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' role='presentation' focusable='false' viewBox='0 0 24 24'%3E%3Cg%3E%3Cpath fill='" +
                      encodeURIComponent(r) +
                      "' d='M5 5.27368C5 3.56682 6.82609 2.48151 8.32538 3.2973L20.687 10.0235C22.2531 10.8756 22.2531 13.124 20.687 13.9762L8.32538 20.7024C6.82609 21.5181 5 20.4328 5 18.726V5.27368Z' /%3E%3C/g%3E%3C/svg%3E\")"),
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: t.controlBackgroundSize,
                  backgroundPositionX: os(12)
                },
                o.active && { backgroundImage: Uu(t.controlColor) },
                {
                  opacity: o.active ? 0 : 1,
                  pointerEvents: 'none',
                  transition: 'opacity .22s ease-in-out',
                  left: '50%',
                  position: 'absolute',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }
              );
            },
            iframe: function (e) {
              var r = e.props;
              return Object.assign({ display: 'block' }, !r.iframeLoaded && { display: 'none' });
            }
          },
          Xu = {
            root: function (e) {
              e.props;
              var r = e.variables;
              return {
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                justifyItems: 'start',
                '> *:not(:last-child)': { marginBottom: r.fieldsMarginBottom },
                '> :last-child': { marginTop: r.lastChildMarginTop }
              };
            }
          },
          Yu = {
            root: function (e) {
              return e.props, e.variables, {};
            },
            label: function (e) {
              var r = e.props,
                o = r.type,
                t = r.inline,
                n = r.required;
              return Object.assign(
                {},
                (!o || ('radio' !== o && 'checkbox' !== o)) && { display: 'block', marginBottom: os(4) },
                t && { marginRight: os(10), display: 'inline' },
                n && { '::after': { content: '"*"' } }
              );
            },
            control: function (e) {
              var r = e.props,
                o = (e.variables, r.type);
              return Object.assign({}, o && ('radio' === o || 'checkbox' === o) && { marginRight: os(10) });
            },
            message: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign({}, r.hasErrorMessage && { color: o.colorScheme.red.foreground }, {
                display: 'block',
                paddingLeft: o.messagePaddingLeft
              });
            },
            icon: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign({}, r.hasErrorMessage && { color: o.colorScheme.red.foreground });
            }
          },
          Ku = {
            root: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                { display: 'block', lineHeight: o.lineHeight, marginBottom: o.marginBottom },
                r.inline && { marginRight: os(10), display: 'inline' },
                r.required && { '::after': { content: '"*"' } }
              );
            }
          },
          $u = {
            root: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                { display: 'block', paddingLeft: o.paddingLeft },
                r.error && { color: o.colorScheme.red.foreground }
              );
            }
          },
          qu = function (e) {
            var r = e.trim();
            return 'start' === r || 'end' === r ? 'flex-' + r : r;
          },
          Ju = {
            root: function (e) {
              var r,
                o = e.props,
                t = e.variables;
              return Object.assign(
                { display: 'flex' },
                o.debug && { border: '1px dotted grey', background: 'lightgrey' },
                o.inline && { display: 'inline-flex' },
                o.column && { flexDirection: 'column' },
                o.hAlign && (o.column ? { alignItems: qu(o.hAlign) } : { justifyContent: qu(o.hAlign) }),
                o.vAlign && (o.column ? { justifyContent: qu(o.vAlign) } : { alignItems: qu(o.vAlign) }),
                o.space && { justifyContent: 'space-' + o.space },
                o.wrap && { flexWrap: 'wrap' },
                o.fill && { width: '100%', height: '100%' },
                o.padding && { padding: t[o.padding] },
                o.gap && {
                  '> *:not(:last-child)': ((r = {}), (r[o.column ? 'marginBottom' : 'marginRight'] = t[o.gap]), r)
                }
              );
            }
          },
          Qu = {
            root: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                {},
                r.align && { alignSelf: qu(r.align) },
                r.size && { flexBasis: o.hasOwnProperty(r.size) ? o[r.size] : r.size },
                'number' == typeof r.shrink && { flexShrink: r.shrink },
                !1 === r.shrink && { flexShrink: 0 },
                r.grow && { flexGrow: r.grow },
                !0 === r.grow && { flexGrow: 1 },
                r.push && ('column' === r.flexDirection ? { marginTop: 'auto' } : { marginLeft: 'auto' })
              );
            }
          },
          ef = function (e) {
            var r = Number(e);
            return !isNaN(r) && r > 0 ? 'repeat(' + e + ', 1fr)' : String(e);
          },
          rf = {
            root: function (e) {
              var r = e.props,
                o = e.variables,
                t = o.height,
                n = o.width,
                a = o.defaultColumnCount,
                i = o.gridGap,
                l = o.padding,
                s = r.rows,
                c = r.columns,
                d = void 0 === c ? !r.rows && a : c;
              return Object.assign(
                { height: t, width: n, padding: l, gridGap: i, display: 'grid', justifyContent: 'space-evenly' },
                s && !d && { gridAutoFlow: 'column' },
                s && { gridTemplateRows: ef(s), msGridRows: ef(s) },
                d && { gridTemplateColumns: ef(d), msGridColumns: ef(d) },
                { '& > *': { outlineOffset: '-3px' } }
              );
            }
          },
          of = function (e) {
            switch (e) {
              case 'start':
                return 'left';
              case 'end':
                return 'right';
              default:
                return e;
            }
          },
          tf = {
            root: function (e) {
              var r = e.props,
                o = e.variables,
                t = o.colorScheme[r.color];
              return Object.assign(
                { display: 'block', color: _t()(t, 'foreground', o.color), textAlign: of(r.align) },
                r.hasDescription && { marginBottom: 0 }
              );
            }
          },
          nf = {
            root: function (e) {
              var r = e.props,
                o = e.variables,
                t = o.colorScheme[r.color];
              return { display: 'block', color: _t()(t, 'foreground', o.color), fontSize: os(22), fontWeight: 400 };
            }
          },
          af = function () {
            return { padding: os(4) };
          },
          lf = {
            root: function (e) {
              var r,
                o = e.props,
                t = e.variables;
              return Object.assign(
                { speak: 'none', verticalAlign: 'middle' },
                (function (e, r) {
                  switch (e) {
                    case 'none':
                      return { marginLeft: 0, marginRight: 0 };
                    case 'before':
                      return { marginLeft: r, marginRight: 0 };
                    case 'after':
                      return { marginLeft: 0, marginRight: r };
                    case 'both':
                      return { marginLeft: r, marginRight: r };
                  }
                })(o.xSpacing, t.horizontalSpace),
                o.circular && Object.assign({}, af(), { borderRadius: '50%' }),
                o.disabled && { color: t.disabledColor },
                { display: 'inline-block' },
                (o.bordered || t.borderColor) &&
                  ((r = t.borderColor || t.color || 'currentColor'),
                  Object.assign({}, af(), { boxShadow: '0 0 0 .05rem ' + r + ' inset' })),
                { backgroundColor: t.backgroundColor }
              );
            },
            outlinePart: function (e) {
              var r = e.props;
              return Object.assign({ display: 'none' }, r.outline && { display: 'block' });
            },
            filledPart: function (e) {
              var r = e.props;
              return Object.assign({}, r.outline && { display: 'none' });
            },
            svg: function (e) {
              var r = e.props,
                o = r.size,
                t = r.disabled,
                n = r.rotate,
                a = e.variables,
                i = e.rtl,
                l = (function (e, r) {
                  var o = { large: { x: 24, xx: 28 } };
                  return r.sizeModifier && o[e] && o[e][r.sizeModifier] ? os(o[e][r.sizeModifier]) : r[e + 'Size'];
                })(o, a);
              return Object.assign(
                { display: 'block', width: l, height: l, fill: a.color || 'currentColor' },
                t && { fill: a.disabledColor },
                { transform: 'rotate(' + n + 'deg) /* @noflip */' },
                i && { transform: 'rotate(' + -1 * n + 'deg) /* @noflip */' }
              );
            },
            svgFlippingInRtl: function (e) {
              var r = e.props,
                o = e.rtl;
              return Object.assign(
                {},
                P(lf.svg)(e),
                o && { transform: 'scaleX(-1) rotate(' + r.rotate + 'deg) /* @noflip */' }
              );
            },
            redPath: function (e) {
              return { fill: e.variables.redColor };
            }
          },
          sf = {
            root: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                {
                  boxSizing: 'border-box',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  width: r.fluid ? '100%' : o.width,
                  height: o.height || 'auto'
                },
                r.circular && { borderRadius: o.circularRadius },
                r.avatar && { width: r.fluid ? '100%' : o.avatarSize, borderRadius: o.avatarRadius }
              );
            }
          },
          cf = {
            root: function (e) {
              var r = e.props;
              return (
                e.variables,
                Object.assign(
                  {
                    flexDirection: 'column',
                    justifyContent: 'center',
                    display: 'inline-flex',
                    position: 'relative',
                    outline: 0,
                    verticalAlign: 'middle'
                  },
                  r.fluid && { width: '100%' },
                  'inline' === r.labelPosition && { flexDirection: 'row', alignItems: 'center' }
                )
              );
            },
            input: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                { backgroundColor: o.backgroundColor },
                r.inverted && { backgroundColor: o.backgroundColorInverted },
                {
                  lineHeight: 'unset',
                  color: o.fontColor,
                  borderColor: o.borderColor,
                  borderRadius: o.borderRadius,
                  borderStyle: 'solid',
                  borderWidth: o.borderWidth,
                  outline: 'none',
                  padding: o.inputPadding,
                  position: 'relative'
                },
                r.fluid && { width: '100%' },
                r.inline && { float: 'left' },
                r.disabled && { color: o.colorDisabled, boxShadow: 'none' },
                {
                  '::placeholder': Object.assign(
                    { color: o.placeholderColor, opacity: 1 },
                    r.disabled && { color: o.colorDisabled }
                  ),
                  ':focus': Object.assign(
                    {},
                    !r.error && { borderColor: o.inputFocusBorderColor, borderRadius: o.inputFocusBorderRadius }
                  )
                },
                !r.hasValue && { ':-webkit-autofill:focus': { '-webkit-text-fill-color': 'transparent' } },
                r.clearable && { padding: o.inputPaddingWithIconAtEnd },
                r.hasIcon && {
                  padding: 'start' === r.iconPosition ? o.inputPaddingWithIconAtStart : o.inputPaddingWithIconAtEnd
                },
                'inside' === r.labelPosition && { paddingTop: o.inputInsideLabelPaddingTop },
                r.error && { border: os(1) + ' solid ' + o.borderColorError },
                { '::-ms-clear': { display: 'none' } }
              );
            },
            icon: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                {
                  color: o.iconColor,
                  outline: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: o.iconPosition,
                  top: 0,
                  bottom: 0
                },
                r.error && { color: o.colorError },
                r.requiredAndSuccessful && { color: o.successfulColor },
                r.disabled && { color: o.colorDisabled },
                'start' === r.iconPosition && { left: o.iconLeft },
                'end' === r.iconPosition && { right: o.iconRight },
                r.clearable &&
                  r.hasValue &&
                  Object.assign(
                    { height: '100%', width: os(16), color: o.iconColor },
                    r.disabled && { color: o.colorDisabled }
                  )
              );
            },
            inputContainer: function () {
              return { position: 'relative' };
            }
          },
          df = {
            root: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                { display: 'block', transition: 'all .2s', lineHeight: o.lineHeight, marginBottom: o.marginBottom },
                'inside' === r.labelPosition &&
                  Object.assign(
                    {
                      bottom: o.insideLabelBottom,
                      top: 0,
                      left: 0,
                      margin: 0,
                      position: 'absolute',
                      display: 'flex',
                      alignItems: 'center',
                      zIndex: 100,
                      paddingLeft: o.insideLabelPaddingLeft
                    },
                    r.hasValue && { transform: 'translateY(-16px)', fontSize: o.insideLabelActiveFontSize }
                  ),
                'inline' === r.labelPosition && { paddingRight: o.inlineLabelPaddingRight },
                r.required && { '::after': { content: '"*"' } }
              );
            }
          },
          uf = {
            root: function (e) {
              var r = e.props,
                o = e.variables,
                t = e.theme.siteVariables;
              return Object.assign(
                {
                  display: 'inline-flex',
                  alignItems: 'center',
                  overflow: 'hidden',
                  height: o.height,
                  lineHeight: o.height,
                  color: o.foreground,
                  backgroundColor: o.background,
                  fontSize: os(14),
                  borderRadius: t.borderRadiusMedium,
                  padding: o.padding
                },
                r.hasImage &&
                  ('start' === r.imagePosition
                    ? { paddingLeft: o.startPaddingLeft }
                    : { paddingRight: o.endPaddingRight }),
                r.circular && { borderRadius: o.circularRadius },
                'black' === r.color && { color: o.blackForeground, backgroundColor: o.blackBackground },
                'white' === r.color && { color: o.whiteForeground, backgroundColor: o.whiteBackground },
                'brand' === r.color && { color: o.brandForeground, backgroundColor: o.brandBackground },
                'grey' === r.color && { color: o.greyForeground, backgroundColor: o.greyBackground },
                'orange' === r.color && { color: o.orangeForeground, backgroundColor: o.orangeBackground },
                'red' === r.color && { color: o.redForeground, backgroundColor: o.redBackground },
                'green' === r.color && { color: o.greenForeground, backgroundColor: o.greenBackground },
                'yellow' === r.color && { color: o.yellowForeground, backgroundColor: o.yellowBackground }
              );
            },
            content: function (e) {
              var r = e.props,
                o =
                  (e.variables,
                  (r.hasImage && 'start' === r.imagePosition) || (r.hasIcon && 'start' === r.iconPosition)),
                t = (r.hasImage && 'end' === r.imagePosition) || (r.hasIcon && 'end' === r.iconPosition);
              return Object.assign(
                {},
                o && { marginLeft: os(3) },
                !o && r.circular && { marginLeft: os(4) },
                t && { marginRight: os(3) },
                !t && r.circular && { marginRight: os(4) }
              );
            },
            image: function (e) {
              var r = e.variables;
              return { height: r.height, width: r.height };
            },
            icon: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                {
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: o.iconSize,
                  height: o.iconSize,
                  '& > :first-child': { height: '100%', width: '100%', '& svg': { height: '100%', width: '100%' } }
                },
                r.hasActionableIcon && { cursor: 'pointer' }
              );
            }
          },
          ff = function (e) {
            var r = e.name,
              o = e.color;
            return {
              position: 'relative',
              border: '2px ' + e.style + ' ' + o,
              '::before': {
                content: "'" + r + "'",
                position: 'absolute',
                padding: '1px 4px 1px',
                top: '-2px',
                left: '-2px',
                fontSize: '8px',
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: '1px',
                color: '#fff',
                background: o
              }
            };
          },
          gf = function () {
            return Object.assign({}, ff({ name: 'LAYOUT', color: 'cornflowerblue', style: 'solid' }), {
              padding: '8px',
              margin: '2px'
            });
          },
          pf = function () {
            return Object.assign({}, ff({ name: 'AREA', color: 'lightsalmon', style: 'dashed' }), {
              padding: '8px',
              margin: '2px'
            });
          },
          bf = function (e) {
            return e.filter(Boolean).length;
          },
          mf = {
            root: function (e) {
              var r,
                o = e.props,
                t = o.alignItems,
                n = o.debug,
                a = o.gap,
                i = o.justifyItems,
                l = o.hasMain,
                s = o.mainSize,
                c = o.hasEnd,
                d = o.endSize,
                u = o.hasStart,
                f = o.startSize,
                g = o.vertical;
              return Object.assign(
                {},
                n && gf(),
                (((r = { justifyItems: i, alignItems: t, display: 'grid' })[
                  g ? 'gridTemplateRows' : 'gridTemplateColumns'
                ] = [u && f, a && u && l && a, l && s, a && (u || l) && c && a, c && d].filter(Boolean).join(' ')),
                r),
                g && { gridAutoFlow: 'row', msGridColumns: '1fr' }
              );
            },
            gap: function (e) {
              var r = e.props;
              return Object.assign(
                {},
                r.debug &&
                  (function (e) {
                    var r = e.vertical;
                    return {
                      display: 'grid',
                      background: '#ccc',
                      '::before': Object.assign(
                        { content: '"GAP"' },
                        r ? { letterSpacing: '1px' } : { textOrientation: 'upright', writingMode: 'vertical-rl' },
                        {
                          alignSelf: 'center',
                          justifySelf: 'center',
                          fontSize: '8px',
                          fontWeight: 900,
                          lineHeight: 0,
                          color: '#fff'
                        }
                      )
                    };
                  })({ vertical: r.vertical })
              );
            },
            start: function (e) {
              var r,
                o = e.props;
              return Object.assign(
                {},
                o.debug && pf(),
                (((r = { alignItems: 'center', display: 'inline-flex' })[o.vertical ? 'msGridRow' : 'msGridColumn'] =
                  '1'),
                r)
              );
            },
            main: function (e) {
              var r,
                o = e.props;
              return Object.assign(
                {},
                o.debug && pf(),
                (((r = { alignItems: 'center', display: 'grid' })[o.vertical ? 'msGridRow' : 'msGridColumn'] = bf([
                  o.hasStart,
                  o.hasStart && o.gap,
                  o.hasMain
                ])),
                r)
              );
            },
            end: function (e) {
              var r,
                o = e.props;
              return Object.assign(
                {},
                o.debug && pf(),
                (((r = { alignItems: 'center', display: 'inline-flex' })[o.vertical ? 'msGridRow' : 'msGridColumn'] =
                  bf([o.hasStart, o.hasStart && o.gap, o.hasMain && o.gap])),
                r)
              );
            }
          },
          hf = { above: 'column-reverse', below: 'column', start: 'row-reverse', end: 'row' },
          vf = {
            root: function (e) {
              var r = e.props;
              return {
                alignItems: 'center',
                display: r.inline ? 'inline-flex' : 'flex',
                justifyContent: 'center',
                flexDirection: hf[r.labelPosition]
              };
            },
            indicator: function (e) {
              var r = e.props,
                o = e.variables;
              return { height: o.containerHeights[r.size], width: o.containerWidths[r.size], overflow: 'hidden' };
            },
            svg: function (e) {
              var r = e.props,
                o = (e.theme, e.variables),
                t = {
                  animationName: { to: { transform: 'translate3d(0, ' + o.svgTranslatePosition[r.size] + ', 0)' } },
                  animationDelay: '0s',
                  animationDirection: 'normal',
                  animationDuration: '2s',
                  animationFillMode: 'both',
                  animationPlayState: 'running',
                  animationTimingFunction: 'steps(60, end)',
                  animationIterationCount: 'infinite'
                };
              return Object.assign(
                {},
                {
                  animationName: { to: { opacity: 1 } },
                  animationDelay: '1.5s',
                  animationDirection: 'normal',
                  animationDuration: '.3s',
                  animationFillMode: 'both',
                  animationIterationCount: '1',
                  animationPlayState: 'running',
                  animationTimingFunction: 'ease-out',
                  display: 'block',
                  overflow: 'hidden',
                  position: 'relative'
                },
                {
                  ':before': Object.assign({}, t, {
                    backgroundImage: r.secondary ? o.secondarySvgContent : o.svgContent,
                    content: '" "',
                    display: 'block',
                    overflow: 'hidden',
                    height: o.svgHeights[r.size],
                    width: o.svgWidths[r.size]
                  })
                }
              );
            },
            label: function () {
              return { margin: os(10) };
            }
          },
          yf = {
            root: function (e) {
              var r = e.variables;
              return {
                gridTemplateRows: 'minmax(' + r.height + ', max-content)',
                paddingLeft: r.paddingLeft,
                paddingRight: r.paddingRight
              };
            }
          },
          Cf = {
            root: function (e) {
              var r = e.props;
              return Object.assign(
                {},
                r.debug && gf(),
                { display: r.horizontal ? 'inline-flex' : 'block' },
                r.isListTag && { listStyle: 'none', padding: 0, margin: 0 }
              );
            }
          },
          kf = {
            root: function (e) {
              var r,
                o,
                t = e.props,
                n = e.variables,
                a = e.theme.siteVariables,
                i = Id({ variables: a });
              return Object.assign(
                { display: 'flex', alignItems: 'center', minHeight: n.minHeight, padding: n.rootPadding },
                (t.selectable || t.navigable) &&
                  Object.assign(
                    (((r = { position: 'relative', userSelect: 'none' })['& .ui-list__itemendmedia'] = {
                      display: 'none'
                    }),
                    (r['&:hover'] = (function (e, r) {
                      var o;
                      return (
                        ((o = {
                          background: r.selectableFocusHoverBackgroundColor,
                          color: r.selectableFocusHoverColor,
                          cursor: 'pointer'
                        })['& .ui-list__itemheader'] = { color: 'inherit' }),
                        (o['& .ui-list__itemcontent'] = { color: 'inherit' }),
                        (o['& .ui-list__itemheadermedia'] = Object.assign({}, bu, { color: 'inherit' })),
                        (o['& .ui-list__itemcontentmedia'] = { display: 'none', color: 'inherit' }),
                        (o['& .ui-list__itemendmedia'] = { display: 'block', color: 'inherit' }),
                        o
                      );
                    })(0, n)),
                    (r[':focus'] = i[':focus']),
                    (r[':focus-visible'] = Object.assign({}, i[':focus-visible'], { zIndex: n.zIndex })),
                    r),
                    t.selected && { background: (o = n).selectedBackgroundColor, color: o.selectedColor }
                  ),
                t.important && { fontWeight: n.importantFontWeight }
              );
            },
            headerWrapper: function () {
              return { display: 'flex' };
            },
            contentWrapper: function () {
              return { display: 'flex' };
            },
            main: function () {
              return { display: 'flex', flexDirection: 'column', flexGrow: 1, minWidth: 0 };
            }
          },
          wf = {
            root: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                { flexGrow: 1, fontSize: o.contentFontSize, lineHeight: o.contentLineHeight },
                r.truncate && { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
                (!r.hasHeader || r.hasContentMedia) && { marginRight: o.gap }
              );
            }
          },
          xf = {
            root: function (e) {
              var r = e.variables;
              return { fontSize: r.contentMediaFontSize, lineHeight: r.contentMediaLineHeight };
            }
          },
          Sf = {
            root: function (e) {
              var r = e.props;
              return Object.assign({ flexShrink: 0 }, (r.selectable || r.navigable) && { display: 'none' });
            }
          },
          Bf = {
            root: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                { flexGrow: 1, fontSize: o.headerFontSize, lineHeight: o.headerLineHeight },
                r.truncate && { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
                (!r.hasContent || r.hasHeaderMedia) && { marginRight: o.gap }
              );
            }
          },
          Ef = {
            root: function (e) {
              var r = e.variables;
              return {
                alignSelf: 'flex-end',
                flexShrink: 0,
                fontSize: r.headerMediaFontSize,
                lineHeight: r.headerMediaLineHeight
              };
            }
          },
          Of = {
            root: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                {},
                r.important && {
                  '::before': {
                    content: '""',
                    position: 'absolute',
                    left: os(8),
                    width: os(2),
                    height: os(2),
                    background: '#000'
                  }
                },
                (r.hasHeader || r.hasContent) && { marginRight: o.gap }
              );
            }
          },
          Ff = {
            root: function (e) {
              var r = e.props,
                o = e.variables,
                t = e.theme,
                n = r.iconOnly,
                a = r.fluid,
                i = r.pointing,
                l = r.pills,
                s = r.primary,
                c = r.underlined,
                d = r.vertical,
                u = r.submenu,
                f = gs(o.colorScheme, null, s),
                g = t.siteVariables;
              return Object.assign(
                {
                  display: 'flex',
                  minHeight: os(24),
                  margin: 0,
                  padding: 0,
                  color: o.color,
                  backgroundColor: o.backgroundColor || 'inherit',
                  listStyleType: 'none'
                },
                n && { alignItems: 'center' },
                d &&
                  Object.assign(
                    { flexDirection: 'column', backgroundColor: o.verticalBackgroundColor, padding: os(8) + ' 0' },
                    u && { boxShadow: o.verticalBoxShadow },
                    !a && !u && { width: 'fit-content' },
                    n && { display: 'inline-block', width: 'auto' }
                  ),
                !l &&
                  !n &&
                  !(i && d) &&
                  !c &&
                  Object.assign(
                    {
                      border: o.borderWidth + ' solid ' + (s ? o.primaryBorderColor : o.borderColor || f.border),
                      borderRadius: g.borderRadiusMedium
                    },
                    u && { borderColor: o.subMenuBorderColor }
                  ),
                c && { borderBottom: o.underlinedBottomBorderWidth + ' solid ' + o.underlinedBorderColor }
              );
            }
          },
          Af = os(5),
          Pf = os(8),
          jf = os(12),
          If = function (e) {
            return { paddingBottom: 0, borderBottom: 'solid ' + os(4) + ' ' + e, transition: 'color .1s ease' };
          },
          Rf = {
            root: function (e) {
              var r = e.props,
                o = e.variables,
                t = e.theme.siteVariables,
                n = r.active,
                a = r.iconOnly,
                i = r.isFromKeyboard,
                l = r.pointing,
                s = r.primary,
                c = r.underlined,
                d = r.vertical,
                u = r.disabled,
                f = gs(o.colorScheme, null, s);
              return Object.assign(
                { color: 'inherit', display: 'block', cursor: 'pointer', whiteSpace: 'nowrap', overflow: 'hidden' },
                l && d && { border: '1px solid transparent' },
                a && { border: os(2) + ' solid transparent' },
                { padding: o.horizontalPadding },
                d && { padding: o.verticalItemPadding },
                l && d && { padding: os(8) + ' ' + os(18) },
                c && { padding: os(4) + ' 0' },
                a && {
                  margin: os(1),
                  padding: os(5),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'visible'
                },
                n &&
                  Object.assign(
                    {},
                    a && Object.assign({ color: o.iconOnlyColorActive }, Rd({ outline: !1 })),
                    c &&
                      Object.assign(
                        { color: o.activeUnderlinedColor },
                        If(o.activeUnderlinedBorderBottomColor),
                        s &&
                          Object.assign(
                            { color: o.activeUnderlinedPrimaryColor },
                            If(o.borderColorActive || f.borderActive)
                          ),
                        !s && { fontWeight: 700 }
                      )
                  ),
                i &&
                  Object.assign(
                    { color: 'inherit' },
                    a && Object.assign({}, Id({ variables: t }), Rd({ outline: !1 })),
                    s
                      ? Object.assign({}, a && { borderColor: o.borderColorActive || f.borderActive })
                      : Object.assign({}, c && { fontWeight: 700 }, c && n && If(o.colorActive)),
                    (c || d) &&
                      Object.assign({}, Id({ variables: t }), {
                        ':focus-visible': Object.assign({}, Id({ variables: t })[':focus-visible'], {
                          borderColor: o.borderColorActive
                        })
                      })
                  ),
                {
                  ':focus': { outline: 0 },
                  ':hover': Object.assign(
                    { color: o.colorHover },
                    c && { color: o.underlinedColorHover },
                    !u &&
                      Object.assign(
                        {},
                        a && Rd({ outline: !1 }),
                        s
                          ? Object.assign(
                              {},
                              a && { color: 'inherit' },
                              !n && c && If(o.underlinedBorderColor || f.backgroundActive)
                            )
                          : !n && c && If(o.backgroundColorActive || f.backgroundActive)
                      )
                  )
                },
                u && { cursor: 'default' }
              );
            },
            menu: function (e) {
              return { zIndex: e.variables.menuZIndex };
            }
          },
          Mf = {
            root: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                {
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: o.iconSize,
                  height: o.iconSize,
                  '& > :first-child': { height: '100%', width: '100%' }
                },
                r.hasContent && { marginRight: os(10) },
                !r.iconOnly && { marginTop: 0, marginBottom: os(-8), verticalAlign: 'top' }
              );
            }
          },
          Df = {
            root: function (e) {
              var r = e.props,
                o = (r.hasIcon ? 26 : 0) + (r.hasMenu ? 16 : 0);
              return Object.assign(
                {
                  whiteSpace: 'normal',
                  lineHeight: 1.5,
                  marginTop: os(-4),
                  marginBottom: os(-4),
                  display: 'inline-block',
                  userSelect: 'none'
                },
                (r.inSubmenu || r.vertical) && {
                  width: 'max-content',
                  minWidth: os(46 - o),
                  maxWidth: os(262 - o),
                  marginRight: os(16)
                }
              );
            }
          },
          zf = function (e) {
            return e ? {} : { transform: 'rotate(90deg)' };
          },
          _f = {
            root: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                { position: 'relative', float: 'right', left: os(12), userSelect: 'none', marginRight: os(4) },
                r.inSubmenu && { position: 'absolute', top: os(6), right: os(2), left: 'unset' },
                {
                  content: '" "',
                  display: 'block',
                  overflow: 'hidden',
                  height: os(16),
                  width: os(16),
                  backgroundSize: os(16),
                  color: o.indicatorColor
                },
                r.active &&
                  Object.assign(
                    { color: o.activeIndicatorColor },
                    r.primary &&
                      Object.assign(
                        { color: o.activePrimaryIndicatorColor },
                        r.vertical && { color: o.activePrimaryVerticalIndicatorColor }
                      )
                  ),
                r.underlined && { color: o.indicatorColor },
                r.iconOnly && { color: o.indicatorColor },
                zf(r.vertical)
              );
            }
          },
          Hf = {
            root: function (e) {
              var r,
                o = e.props,
                t = e.variables,
                n = o.active,
                a = o.disabled,
                i = o.iconOnly,
                l = o.isFromKeyboard,
                s = o.pills,
                c = o.pointing,
                d = o.secondary,
                u = o.underlined,
                f = o.vertical,
                g = o.primary,
                p = o.on,
                b = gs(t.colorScheme, null, g);
              return Object.assign(
                { color: 'inherit', lineHeight: 1, position: 'relative', verticalAlign: 'middle', display: 'block' },
                d && { background: 'salmon' },
                f && { border: 'solid ' + t.verticalItemBorderWidth + ' ' + t.verticalItemBorderColor },
                s &&
                  Object.assign({}, f ? { margin: '0 0 ' + Af + ' 0' } : { margin: '0 ' + Pf + ' 0 0' }, {
                    borderRadius: os(5)
                  }),
                u && {
                  display: 'flex',
                  alignItems: 'center',
                  height: os(29),
                  lineHeight: t.lineHeightBase,
                  padding: '0 ' + os(4),
                  margin: '0 ' + os(4) + ' 0 0',
                  ':nth-child(n+2)': { marginLeft: '' + os(4) },
                  boxShadow: 'none'
                },
                !f &&
                  !s &&
                  !u &&
                  !i && {
                    boxShadow: '-1px 0 0 0 ' + (g ? t.primaryBorderColor : t.borderColor || b.border) + ' inset'
                  },
                g && !f && !u && { color: t.primaryWrapperColor },
                n &&
                  !f &&
                  Object.assign(
                    { color: t.wrapperColorActive },
                    !u && { background: t.backgroundColorActive },
                    g && !f && !u && { color: t.primaryWrapperColor },
                    !u &&
                      'hover' !== p &&
                      Object.assign(
                        { background: t.backgroundColorActive || b.backgroundActive },
                        i && { background: t.activeIconOnlyWrapperBackgroundColor },
                        !i && g && { color: b.foregroundActive }
                      ),
                    u && { color: t.activeUnderlinedWrapperColor },
                    c &&
                      !f &&
                      Object.assign(
                        {},
                        (function (e) {
                          var r,
                            o,
                            t = e.props,
                            n = e.variables,
                            a = e.colors,
                            i = t.pointing,
                            l = t.primary,
                            s = n.backgroundColorActive || a.backgroundActive,
                            c = n.borderColor || l ? n.primaryBorderColor : a.border;
                          return (
                            'start' === i
                              ? ((o = { borderTop: '1px solid ' + c, borderLeft: '1px solid ' + c }), (r = '-1px'))
                              : ((o = { borderBottom: '1px solid ' + c, borderRight: '1px solid ' + c }), (r = '100%')),
                            {
                              '::after': Object.assign(
                                {
                                  visibility: 'visible',
                                  background: s,
                                  position: 'absolute',
                                  content: '""',
                                  top: r,
                                  left: '50%',
                                  transform: 'translateX(-50%) translateY(-50%) rotate(45deg)',
                                  margin: '.5px 0 0',
                                  width: os(10),
                                  height: os(10),
                                  border: 'none'
                                },
                                o,
                                { zIndex: n.beakZIndex, transition: 'background .1s ease' }
                              )
                            }
                          );
                        })({ props: o, variables: t, colors: b })
                      )
                  ),
                l &&
                  Object.assign(
                    { color: t.wrapperColorFocus },
                    !u &&
                      Object.assign(
                        { background: t.wrapperBackgroundColorFocus },
                        g && { background: t.primaryWrapperBackgroundColorFocus, color: t.primaryWrapperColorFocus }
                      ),
                    !i &&
                      !u &&
                      (function (e) {
                        var r = e.props,
                          o = e.variables,
                          t = e.colors,
                          n = r.primary,
                          a = r.underlined,
                          i = r.active,
                          l = r.vertical;
                        return !i || a || l
                          ? Object.assign(
                              {
                                color: o.colorActive || t.foregroundActive,
                                background: o.backgroundColorFocus || t.backgroundFocus
                              },
                              n && { color: t.foregroundFocus, background: t.backgroundFocus },
                              n && !l && !a && { color: o.primaryWrapperColorFocus },
                              l &&
                                Object.assign(
                                  {
                                    background: 'inherit',
                                    color: o.colorFocus || t.foregroundFocus,
                                    border: os(1) + ' solid transparent',
                                    padding: os(1)
                                  },
                                  n && { color: o.color }
                                )
                            )
                          : {};
                      })({ props: o, variables: t, colors: b }),
                    i && { background: t.iconOnlyWrapperBackgroundColorFocus, color: t.iconOnlyColorActive }
                  ),
                n && {
                  '[data-tabs="true"]': Object.assign(
                    {},
                    !u &&
                      Object.assign(
                        { background: t.backgroundColorActive || b.backgroundActive },
                        i && { background: t.activeIconOnlyWrapperBackgroundColor },
                        !i && g && { color: b.foregroundActive }
                      ),
                    c &&
                      f && {
                        '::before': Object.assign(
                          {
                            content: "''",
                            position: 'absolute',
                            width: os(3),
                            height: 'calc(100% + ' + os(4) + ')',
                            top: os(-2),
                            backgroundColor: t.pointingIndicatorBackgroundColor
                          },
                          l && { display: 'none' },
                          'end' === c ? { right: os(-2) } : { left: os(-2) }
                        )
                      }
                  )
                },
                {
                  ':hover': Object.assign(
                    { color: t.wrapperColorHover, background: t.backgroundColorHover || b.backgroundHover },
                    n && { background: t.activeWrapperBackgroundColorHover },
                    f && { color: t.wrapperColorHover, background: t.backgroundColorHover || b.backgroundHover },
                    g && { color: t.primaryWrapperColorHover },
                    u && { color: t.underlinedWrapperColorHover, background: t.underlinedWrapperBackgroundHover },
                    i && { background: t.iconOnlyBackgroundColorHover, color: t.iconOnlyColorHover },
                    ((r = {}),
                    (r['&>.ui-menu__item>.ui-menu__itemindicator'] = Object.assign(
                      { color: t.indicatorColorHover },
                      g && { color: t.primaryIndicatorColorHover },
                      zf(f)
                    )),
                    r)
                  )
                },
                i && { borderRadius: t.iconOnlyBorderRadius, display: 'flex' },
                {
                  ':first-child': Object.assign(
                    {},
                    !s &&
                      !i &&
                      !(c && f) &&
                      !u &&
                      Object.assign(
                        {},
                        f && { '::before': { display: 'none' } },
                        !f && { borderBottomLeftRadius: os(3), borderTopLeftRadius: os(3) }
                      )
                  )
                },
                a && { color: t.colorDisabled || b.foregroundDisabled, cursor: 'default', ':hover': {} }
              );
            }
          },
          Tf = {
            root: function (e) {
              var r,
                o = e.props,
                t = e.variables,
                n = gs(t.colorScheme, null, o.primary),
                a = o.primary ? t.primaryBorderColor : t.borderColor || n.border,
                i = o.vertical ? 'borderTop' : 'borderLeft';
              return Object.assign(
                {},
                o.pointing && o.vertical && { marginBottom: jf },
                o.pills &&
                  Object.assign({}, o.vertical ? { margin: '0 0 ' + Af + ' 0' } : { margin: '0 ' + Pf + ' 0 0' }),
                o.hasContent
                  ? { display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center' }
                  : Object.assign(
                      (((r = {})[i] = '1px solid ' + a), r),
                      !o.vertical && { alignSelf: 'stretch' },
                      o.vertical && o.inSubmenu && { margin: '8px 0' }
                    )
              );
            }
          },
          Wf = 'ui-popup__content__content',
          Lf = {
            root: function () {
              return { boxSizing: 'border-box', display: 'inline-block' };
            },
            popupContent: function () {
              var e;
              return ((e = {})['& .' + Wf] = { borderWidth: '0px', padding: '0px' }), e;
            }
          },
          Nf = {
            root: function (e) {
              var r = e.props,
                o = e.variables,
                t = e.theme.siteVariables;
              return Object.assign(
                {
                  display: 'inline-flex',
                  width: 'fit-content',
                  position: 'relative',
                  height: o.height,
                  maxHeight: o.height,
                  borderRadius: o.borderRadius,
                  background: o.background,
                  margin: o.margin,
                  minWidth: o.minWidth,
                  ':hover': { background: o.backgroundHover }
                },
                r.rectangular &&
                  Object.assign(
                    { borderRadius: o.roundedBorderRadius },
                    ('small' === r.size || 'smaller' === r.size) && { borderRadius: o.smallerRoundedBorderRadius }
                  ),
                'smaller' === r.size && {
                  minWidth: o.smallerMinWidth,
                  margin: o.smallerMargin,
                  height: o.smallerHeight,
                  maxHeight: o.smallerHeight
                },
                'small' === r.size && {
                  minWidth: o.smallMinWidth,
                  margin: o.smallMargin,
                  height: o.smallHeight,
                  maxHeight: o.smallHeight
                },
                r.disabled && {
                  pointerEvents: 'none',
                  cursor: 'not-allowed',
                  background: o.disabledBackground,
                  color: o.disabledColor,
                  ':hover': { background: o.disabledBackground }
                },
                'outline' === r.appearance &&
                  Object.assign(
                    {
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      background: o.outlineBackground,
                      borderColor: o.outlineBorderColor,
                      ':hover': { background: o.outlineBackground }
                    },
                    r.disabled && { borderColor: o.outlineDisabledborder }
                  ),
                'inverted' === r.appearance &&
                  Object.assign(
                    { background: o.invertedBackground, ':hover': { background: o.invertedBackground } },
                    r.disabled && { background: o.disabledBackground }
                  ),
                r.selectable &&
                  Object.assign(
                    { cursor: 'pointer' },
                    r.selected && {
                      background: 'transparent',
                      boxShadow: 'inset ' + o.selectedIconColor + ' 0px 0px 0px 1px'
                    }
                  ),
                r.actionable && { cursor: 'pointer' },
                Id({ variables: t })
              );
            }
          },
          Vf = {
            root: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                { fontSize: o.contentFontSize, padding: o.contentPadding, alignSelf: 'center' },
                'small' === r.size && { fontSize: o.contentFontSizeSmall, padding: o.contentPaddingSmall },
                'smaller' === r.size && { fontSize: o.contentFontSizeSmaller, padding: o.contentPaddingSmaller },
                r.actionable && { paddingRight: 0 }
              );
            }
          },
          Zf = {
            root: function (e) {
              var r,
                o = e.props,
                t = e.variables;
              return Object.assign(
                {
                  border: 'none',
                  background: 'transparent',
                  margin: t.actionMargin,
                  width: t.actionWidth,
                  cursor: 'pointer',
                  outline: 'none'
                },
                ('small' === o.size || 'smaller' === o.size) && { width: t.smallOrSmallerActionWidth },
                (((r = {})['& .ui-icon'] = {
                  height: '100%',
                  width: '100%',
                  '& svg': { height: '100%', width: '100%' }
                }),
                r)
              );
            }
          },
          Uf = {
            root: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                { width: o.imageWidth, height: o.imageHeight, borderRadius: '50%' },
                'small' === r.size && { width: o.smallImageWidth, height: o.smallImageHeight },
                'smaller' === r.size && { width: o.smallerImageWidth, height: o.smallerImageHeight }
              );
            }
          },
          Gf = {
            root: function (e) {
              var r,
                o = e.props,
                t = e.variables;
              return Object.assign(
                {
                  border: 'none',
                  background: 'transparent',
                  margin: t.iconMargin,
                  width: t.iconWidth,
                  cursor: 'pointer',
                  outline: 'none'
                },
                ('small' === o.size || 'smaller' === o.size) && { width: t.smallOrSmallerIconWidth },
                o.selectable &&
                  o.hasImage &&
                  Object.assign(
                    {
                      width: t.selectedImageIconWidth,
                      height: t.selectedImageIconWidth,
                      marginLeft: 0,
                      color: t.selectedIconColor
                    },
                    'small' === o.size && {
                      width: t.smallSelectedImageIconWidth,
                      height: t.smallSelectedImageIconWidth
                    },
                    'smaller' === o.size && {
                      width: t.smallerSelectedImageIconWidth,
                      height: t.smallerSelectedImageIconWidth
                    }
                  ),
                (((r = {})['& .ui-icon'] = Object.assign(
                  { height: '100%', width: '100%' },
                  o.selectable &&
                    o.hasImage && {
                      position: 'relative',
                      '::after': {
                        content: '""',
                        position: 'absolute',
                        background: t.selectedIconCheckColor,
                        left: '10%',
                        top: '10%',
                        borderRadius: '50%',
                        width: '80%',
                        height: '80%'
                      }
                    },
                  {
                    '& svg': Object.assign({}, o.selectable && o.hasImage && { position: 'absolute' }, {
                      zIndex: 100,
                      height: '100%',
                      width: '100%'
                    })
                  }
                )),
                r)
              );
            }
          },
          Xf = {
            root: function () {
              return { display: 'flex' };
            }
          },
          Yf = function (e) {
            var r = e.padding,
              o = e.placement;
            return Object.assign(
              {},
              'bottom' === o && { paddingTop: r },
              'top' === o && { paddingBottom: r },
              'left' === o && { paddingRight: r },
              'right' === o && { paddingLeft: r }
            );
          },
          Kf = function (e) {
            var r = e.backgroundColor,
              o = e.borderColor,
              t = e.rtl,
              n = e.borderSize,
              a = e.gap,
              i = e.height,
              l = e.padding,
              s = e.placement,
              c = e.svg,
              d = e.width;
            return Object.assign(
              { display: 'block', position: 'absolute', zIndex: 1 },
              ('bottom' === s || 'top' === s) && {
                paddingLeft: a,
                paddingRight: a,
                height: i,
                width: 'calc(' + d + ' + (' + a + ' * 2))'
              },
              ('left' === s || 'right' === s) && {
                paddingBottom: a,
                paddingTop: a,
                height: 'calc(' + d + ' + (' + a + ' * 2))',
                width: i
              },
              'bottom' === s && { top: 'calc(' + l + ' - ' + i + ' + (' + n + ' * 2))' },
              'top' === s && { bottom: 'calc(' + l + ' - ' + i + ' + ' + n + ')' },
              'left' === s && { right: 'calc(' + l + ' - ' + i + ' + ' + n + ')' },
              'right' === s && { left: 'calc(' + l + ' - ' + i + ' + ' + n + ')' },
              {
                '::before': Object.assign(
                  {
                    content: '" "',
                    display: 'block',
                    height: i,
                    position: 'relative',
                    transformOrigin: 'center top',
                    borderBottomColor: 'transparent',
                    borderLeftColor: 'transparent',
                    borderRightColor: 'transparent',
                    borderTopColor: 'transparent',
                    borderStyle: 'solid',
                    left: 0,
                    top: 0
                  },
                  'bottom' === s && { borderBottomColor: r, borderWidth: '0 ' + i + ' ' + i },
                  'top' === s && { borderTopColor: r, borderWidth: i + ' ' + i + ' 0', top: 'calc(' + n + ' * -1)' },
                  'left' === s && { borderLeftColor: r, borderWidth: i + ' 0 ' + i + ' ' + i },
                  'right' === s && { borderRightColor: r, borderWidth: i + ' ' + i + ' ' + i + ' 0' }
                ),
                '::after': Object.assign(
                  {
                    content: '" "',
                    display: 'block',
                    height: i,
                    position: 'relative',
                    transformOrigin: 'center top',
                    zIndex: -1,
                    borderBottomColor: 'transparent',
                    borderLeftColor: 'transparent',
                    borderRightColor: 'transparent',
                    borderTopColor: 'transparent',
                    borderStyle: 'solid'
                  },
                  'bottom' === s && {
                    borderBottomColor: o,
                    borderWidth: '0 ' + i + ' ' + i,
                    left: 0,
                    bottom: 'calc(' + i + ' + 1px)'
                  },
                  'top' === s && { borderTopColor: o, borderWidth: i + ' ' + i + ' 0', left: 0, bottom: i },
                  'left' === s && { borderLeftColor: o, borderWidth: i + ' 0 ' + i + ' ' + i, left: n, bottom: d },
                  'right' === s && {
                    borderRightColor: o,
                    borderWidth: i + ' ' + i + ' ' + i + ' 0',
                    right: n,
                    bottom: d
                  }
                )
              },
              c && {
                '::before': Object.assign(
                  {
                    content: '" "',
                    backgroundImage: c,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    display: 'block',
                    position: 'relative'
                  },
                  'bottom' === s && {
                    height: 'calc(' + d + ' + (' + a + ' * 2))',
                    width: i,
                    left: a,
                    bottom: 'calc(' + d + ' - ' + i + ' + ' + n + ')',
                    transform: 'rotate(90deg) /* @noflip */'
                  },
                  'top' === s && {
                    height: 'calc(' + d + ' + (' + a + ' * 2))',
                    width: i,
                    left: a,
                    bottom: 'calc(' + a + ' + ' + i + ' - ' + n + ')',
                    transform: 'rotate(-90deg) /* @noflip */'
                  },
                  'left' === s && {
                    height: d,
                    width: i,
                    left: 0,
                    transform: t ? 'rotate(0) /* @noflip */' : 'rotate(180deg) /* @noflip */'
                  },
                  'right' === s && {
                    height: d,
                    width: i,
                    right: 0,
                    transform: t ? 'rotate(180deg) /* @noflip */' : 'rotate(0) /* @noflip */'
                  }
                ),
                '::after': void 0
              }
            );
          },
          $f = {
            root: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                { display: 'block', zIndex: o.zIndex },
                r.pointing &&
                  Object.assign(
                    { pointerEvents: 'none' },
                    Yf({ placement: r.basePlacement, padding: o.pointerMargin })
                  ),
                r.autoSize && { display: 'flex' }
              );
            },
            pointer: function (e) {
              var r = e.props,
                o = e.variables,
                t = e.rtl;
              return Kf({
                backgroundColor: o.backgroundColor,
                borderColor: o.borderColor,
                borderSize: o.borderSize,
                gap: o.pointerGap,
                padding: o.pointerMargin,
                height: o.pointerHeight,
                width: o.pointerWidth,
                placement: r.basePlacement,
                rtl: t
              });
            },
            content: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                {
                  display: 'block',
                  background: o.backgroundColor,
                  color: o.color,
                  boxShadow: o.boxShadow,
                  border: o.borderSize + ' solid ' + o.borderColor,
                  borderRadius: o.borderRadius,
                  padding: o.padding,
                  transform: 'rotate(360deg)'
                },
                r.pointing && { pointerEvents: 'all' },
                r.autoSize && { overflow: 'auto' }
              );
            }
          },
          qf = {
            root: function (e) {
              var r = e.variables;
              return {
                background: r.background,
                color: r.color,
                textAlign: 'left',
                '& ::-webkit-scrollbar': {
                  height: r.scrollbarHeight,
                  width: r.scrollbarWidth,
                  ':disabled': { display: 'none' }
                },
                '& ::-webkit-scrollbar-thumb': {
                  borderRadius: r.scrollbarThumbBorderRadius,
                  border: 'solid ' + r.scrollbarThumbBorderSize + ' transparent',
                  backgroundClip: 'content-box',
                  backgroundColor: r.scrollbarThumbBackgroundColor,
                  ':hover': {
                    backgroundColor: r.scrollbarThumbHoverBackgroundColor,
                    border: 'solid ' + r.scrollbarThumbHoverBorderSize + ' transparent'
                  }
                },
                '& ::-webkit-scrollbar-track': { background: 'transparent' }
              };
            }
          },
          Jf = {
            root: function (e) {
              return { display: 'flex', flexDirection: e.props.vertical ? 'column' : 'row' };
            }
          },
          Qf = 'ui-radiogroup__item__indicator',
          eg = function (e) {
            return { color: e, ':hover': { color: e }, ':focus': { color: e } };
          },
          rg = {
            root: function (e) {
              var r,
                o = e.props,
                t = e.variables,
                n = e.theme.siteVariables;
              return Object.assign(
                {
                  position: 'relative',
                  alignItems: 'center',
                  borderStyle: 'solid',
                  borderWidth: '' + os(1),
                  borderColor: 'transparent',
                  borderRadius: n.borderRadiusMedium,
                  color: t.textColorDefault,
                  cursor: 'pointer',
                  display: o.vertical ? 'flex' : 'inline-flex',
                  fontSize: t.textFontSize,
                  padding: t.padding,
                  margin: t.margin,
                  ':hover':
                    ((r = { color: t.textColorDefaultHoverFocus }),
                    (r['& .' + Qf] = Object.assign(
                      { borderColor: t.textColorDefaultHoverFocus },
                      !o.disabled && !o.checked && { borderColor: t.indicatorBorderColorDefaultHover }
                    )),
                    r),
                  ':focus': { color: t.textColorDefaultHoverFocus }
                },
                o.checked && Object.assign({}, eg(t.textColorChecked)),
                o.disabled && Object.assign({}, eg(t.colorDisabled)),
                Id({ variables: n })
              );
            },
            indicator: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                {
                  margin: os(2) + ' 0',
                  outline: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: os(16),
                  height: os(16),
                  verticalAlign: 'midddle',
                  color: o.indicatorColorDefault
                },
                r.checked && { color: o.indicatorBackgroundColorChecked },
                r.disabled && { color: o.colorDisabled }
              );
            },
            label: function () {
              return { margin: '0 0 0 ' + os(12), userSelect: 'none' };
            }
          },
          og = {
            root: function (e) {
              var r = e.props,
                o = e.variables,
                t = gs(o.colorScheme, r.color);
              return Object.assign(
                {
                  borderColor: 'transparent',
                  borderRadius: o.borderRadius,
                  borderStyle: o.borderStyle,
                  borderWidth: o.borderWidth,
                  boxShadow: o.boxShadow,
                  padding: o.padding,
                  color: o.color,
                  backgroundColor: o.backgroundColor
                },
                r.color && { borderColor: t.foreground },
                r.inverted && { color: o.backgroundColor, backgroundColor: r.color ? t.foreground : o.color },
                r.disabled &&
                  Object.assign(
                    {
                      boxShadow: 'none',
                      borderColor: o.disabledBorderColor,
                      color: o.disabledColor,
                      backgroundColor: o.disabledBackgroundColor
                    },
                    r.inverted && { color: o.disabledBackgroundColor, backgroundColor: o.disabledColor }
                  )
              );
            }
          },
          tg = { '0%': { backgroundPosition: '-1200px 0' }, '100%': { backgroundPosition: '1200px 0' } },
          ng = function (e, r) {
            return {
              position: 'static',
              overflow: 'hidden',
              animationDuration: '4.5s',
              animationName: tg,
              animationIterationCount: 'infinite',
              backgroundColor: '#FFFFFF',
              animationTimingFunction: 'linear',
              backgroundImage: 'linear-gradient(to right, ' + r + ' 0%, ' + e + ' 20%, ' + r + ' 40%)',
              backgroundSize: '1200px 100%'
            };
          },
          ag = {
            animationName: { from: { opacity: 1 }, '50%': { opacity: 0.5 }, to: { opacity: 1 } },
            animationDuration: '1.5s',
            animationIterationCount: 'infinite'
          },
          ig = {
            root: function (e) {
              var r,
                o,
                t,
                n,
                a = e.props,
                i = e.variables,
                l =
                  ((r = i.animationBackground),
                  (o = i.animationBackgroundSecondary),
                  {
                    pulse:
                      ((t = {}),
                      (t['& .ui-skeleton__line'] = ag),
                      (t['& .ui-skeleton__shape'] = ag),
                      (t['& .ui-skeleton__button'] = ag),
                      (t['& .ui-skeleton__avatar'] = ag),
                      (t['& .ui-skeleton__input'] = ag),
                      (t['& .ui-skeleton__text'] = ag),
                      t),
                    wave:
                      ((n = {}),
                      (n['& .ui-skeleton__line'] = ng(r, o)),
                      (n['& .ui-skeleton__shape'] = ng(r, o)),
                      (n['& .ui-skeleton__button'] = ng(r, o)),
                      (n['& .ui-skeleton__avatar'] = ng(r, o)),
                      (n['& .ui-skeleton__input'] = ng(r, o)),
                      (n['& .ui-skeleton__text'] = ng(r, o)),
                      n)
                  });
              return Object.assign({ width: '100%' }, a.animation && l[a.animation]);
            }
          },
          lg = {
            root: function (e) {
              var r = e.props,
                o = e.variables;
              return {
                display: 'block',
                width: r.width,
                height: r.height,
                backgroundColor: o.lineBackground,
                margin: o.lineMargin
              };
            }
          },
          sg = {
            root: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                {
                  display: 'block',
                  width: r.width,
                  height: r.height,
                  backgroundColor: o.shapeBackground,
                  margin: o.shapeMargin
                },
                r.round && { borderRadius: '50%' }
              );
            }
          },
          cg = {
            root: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                {
                  display: 'inline-block',
                  background: o.buttonBackground,
                  height: o.buttonHeight,
                  width: o.buttonWidth
                },
                'small' === r.size && { height: o.buttonSmallHeight, width: o.buttonSmallWidth },
                r.circular &&
                  Object.assign(
                    { width: o.buttonHeight, borderRadius: o.buttonCircularBorderRadius },
                    'small' === r.size && { width: o.buttonSmallHeight }
                  ),
                r.iconOnly &&
                  Object.assign({ width: o.buttonHeight }, 'small' === r.size && { width: o.buttonSmallHeight }),
                r.fluid && { width: '100%', maxWidth: '100%' }
              );
            }
          },
          dg = {
            root: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                { display: 'block', background: o.textBackground, height: o.textMediumHeight, width: o.textWidth },
                'smaller' === r.size && { height: o.textSmallerHeight },
                'small' === r.size && { height: o.textSmallHeight },
                'large' === r.size && { height: o.textLargeHeight },
                'larger' === r.size && { height: o.textLargerHeight }
              );
            }
          },
          ug = {
            root: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                {
                  flexDirection: 'column',
                  justifyContent: 'center',
                  display: 'inline-flex',
                  position: 'relative',
                  height: o.inputHeight,
                  width: o.inputWidth,
                  background: o.inputBackground
                },
                r.fluid && { width: '100%' }
              );
            }
          },
          fg = {
            root: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                {
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  borderRadius: '50%',
                  background: o.buttonBackground,
                  height: o.avatarMedium,
                  width: o.avatarMedium
                },
                'smallest' === r.size && { height: o.avatarSmallest, width: o.avatarSmallest },
                'smaller' === r.size && { height: o.avatarSmaller, width: o.avatarSmaller },
                'small' === r.size && { height: o.avatarSmall, width: o.avatarSmall },
                'large' === r.size && { height: o.avatarLarge, width: o.avatarLarge },
                'larger' === r.size && { height: o.avatarLarger, width: o.avatarLarger },
                'largest' === r.size && { height: o.avatarLargest, width: o.avatarLargest }
              );
            }
          },
          gg =
            (n(4841),
            {
              input: 'ui-slider__input',
              inputWrapper: 'ui-slider__input-wrapper',
              rail: 'ui-slider__rail',
              thumb: 'ui-slider__thumb',
              track: 'ui-slider__track'
            }),
          pg = function (e, r) {
            return {
              cursor: 'pointer',
              pointerEvents: 'none',
              position: 'absolute',
              border: 0,
              height: r.railHeight,
              marginTop: 'calc(' + r.height + ' / 2 - ' + r.railHeight + ' / 2)'
            };
          },
          bg = '&+ .' + gg.thumb,
          mg = function (e) {
            return e.fluid && !e.vertical && { width: '100%' };
          },
          hg = {
            root: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                { height: o.height },
                r.disabled && { pointerEvents: 'none' },
                r.vertical && { height: o.length, width: o.height },
                mg(r)
              );
            },
            input: function (e) {
              var r,
                o,
                t,
                n,
                a = e.props,
                i = e.variables,
                l = e.theme.siteVariables,
                s = {
                  height: i.activeThumbHeight,
                  width: i.activeThumbWidth,
                  background: i.activeThumbColor,
                  marginTop: 'calc(' + i.height + ' / 2  - ' + i.activeThumbHeight + ' / 2)',
                  marginLeft: 'calc(-' + i.activeThumbWidth + ' / 2)'
                },
                c = Id({ variables: l, borderPadding: i.thumbBorderPadding }),
                d = { border: 0, width: '1px' };
              return Object.assign(
                (((r = {
                  WebkitAppearance: 'none',
                  cursor: 'pointer',
                  height: '100%',
                  width: '100%',
                  margin: 0,
                  padding: 0,
                  opacity: 0
                })['::-webkit-slider-thumb'] = Object.assign({}, d, { '-webkit-appearance': 'none' })),
                (r['::-moz-range-thumb'] = d),
                (r['::-ms-thumb'] = Object.assign({}, d, { marginTop: 'calc(-' + i.thumbHeight + ' / 2)' })),
                (r['::-ms-fill-lower'] = { display: 'none' }),
                (r['::-ms-fill-upper'] = { display: 'none' }),
                r),
                mg(a),
                {
                  ':active': ((o = {}), (o[bg] = s), o),
                  ':focus': ((t = { outline: 0 }), (t[bg] = c[':focus']), t),
                  ':focus-visible': ((n = {}), (n[bg] = Object.assign({}, c[':focus-visible'], s)), n)
                }
              );
            },
            inputWrapper: function (e) {
              var r = e.props,
                o = e.variables,
                t = 'calc(' + o.length + ' / 2)';
              return Object.assign(
                { position: 'relative', display: 'inline-block', height: o.height, width: o.length },
                r.vertical && { transform: 'rotate(-90deg)', transformOrigin: t + ' ' + t },
                mg(r)
              );
            },
            rail: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                { width: '100%', background: o.railColor },
                pg(0, o),
                r.disabled && { background: o.disabledRailColor }
              );
            },
            track: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                { background: o.trackColor },
                pg(0, o),
                r.disabled && { background: o.disabledTrackColor }
              );
            },
            thumb: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                {
                  border: 0,
                  borderRadius: '100%',
                  cursor: 'pointer',
                  pointerEvents: 'none',
                  position: 'absolute',
                  background: o.thumbColor,
                  height: o.thumbHeight,
                  width: o.thumbWidth,
                  marginTop: 'calc(' + o.height + ' / 2  - ' + o.thumbHeight + ' / 2)',
                  marginLeft: 'calc(-' + o.thumbWidth + ' / 2)'
                },
                r.disabled && { background: o.disabledThumbColor }
              );
            }
          },
          vg = '& .' + Gn,
          yg = {
            root: function (e) {
              e.props;
              var r,
                o = e.variables,
                t = e.theme.siteVariables;
              return {
                cursor: 'pointer',
                background: 'transparent',
                border: os(0),
                padding: os(0),
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: o.meReacting ? o.meReactingColor : o.otherReactingColor,
                ':hover':
                  ((r = { color: o.meReacting ? o.meReactingColorHover : o.otherReactingColorHover }),
                  (r[vg] = { fontWeight: o.fontWeightHover }),
                  r),
                position: 'relative',
                ':focus': { outline: 'none' },
                ':focus-visible': {
                  ':after': {
                    content: '""',
                    position: 'absolute',
                    top: '-' + os(2),
                    right: '-' + os(2),
                    bottom: '-' + os(2),
                    left: '-' + os(2),
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: o.borderColorFocus,
                    borderRadius: t.borderRadiusMedium,
                    boxShadow: '0px 0px 0px 1px ' + o.boxShadowColor + ' inset'
                  }
                }
              };
            },
            icon: function (e) {
              return {
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: e.props.hasContent ? os(4) : os(0)
              };
            },
            content: function (e) {
              return { fontSize: e.variables.contentFontSize };
            }
          },
          Cg = {
            root: function () {
              return {};
            },
            reaction: function (e) {
              return { ':not(:last-child)': { marginRight: e.variables.reactionSpacing } };
            }
          },
          kg = function (e, r) {
            switch (e) {
              case 'success':
                return r.successBackgroundColor;
              case 'info':
                return r.infoBackgroundColor;
              case 'warning':
                return r.warningBackgroundColor;
              case 'error':
                return r.errorBackgroundColor;
              default:
                return r.defaultBackgroundColor;
            }
          },
          wg = function (e, r) {
            switch (e) {
              case 'success':
                return r.successTextColor;
              case 'info':
                return r.infoTextColor;
              case 'warning':
                return r.warningTextColor;
              case 'error':
                return r.errorTextColor;
              default:
                return r.defaultTextColor;
            }
          },
          xg = { smallest: 6, smaller: 10, small: 10, medium: 10, large: 10, larger: 16, largest: 0 },
          Sg = { smallest: 4, smaller: 6, small: 6, medium: 6, large: 6, larger: 10, largest: 0 },
          Bg = {
            root: function (e) {
              var r = e.props,
                o = r.color,
                t = r.size,
                n = r.state,
                a = e.variables;
              return Object.assign(
                { display: 'inline-flex', alignItems: 'center', justifyContent: 'center' },
                (function (e, r) {
                  var o = (r.borderColor && r.borderWidth) || 0,
                    t = os(e + 2 * o);
                  return { height: t, width: t };
                })(xg[t], a),
                { verticalAlign: 'middle', borderRadius: '9999px' },
                a.borderColor && { borderColor: a.borderColor, borderWidth: os(a.borderWidth), borderStyle: 'solid' },
                { backgroundColor: o || kg(n, a) }
              );
            },
            icon: function (e) {
              var r = e.props,
                o = r.size,
                t = r.state,
                n = e.variables;
              return {
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: os(Sg[o]),
                height: os(Sg[o]),
                color: wg(t, n),
                '& > :first-child': { height: '100%', width: '100%', '& svg': { height: '100%', width: '100%' } }
              };
            }
          },
          Eg = {
            menuButton: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                {
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  borderRightWidth: 0,
                  padding: o.padding,
                  minWidth: o.minWidth
                },
                'small' === r.size && { height: o.smallDimension, padding: o.smallPadding, minWidth: o.smallMinWidth },
                (r.flat || 'small' === r.size) && { boxShadow: 'none' },
                {
                  ':focus-visible': {
                    borderRightWidth: 0,
                    ':before': { borderRightWidth: 0 },
                    ':after': { borderRightWidth: 0 }
                  },
                  ':active': { animationName: 'unset', animationDuration: 'unset' }
                }
              );
            },
            root: function (e) {
              var r = e.props,
                o = e.variables,
                t =
                  (e.theme.siteVariables,
                  Id({
                    variables: {
                      borderRadius: o.focusBorderRadius,
                      borderWidth: o.focusBorderWidth,
                      focusInnerBorderColor: o.focusInnerBorderColor,
                      focusOuterBorderColor: o.focusOuterBorderColor,
                      zIndexes: { foreground: o.focusBorderZIndex }
                    }
                  }));
              return {
                borderRadius: o.borderRadius,
                position: 'relative',
                whiteSpace: 'nowrap',
                display: 'inline-block',
                width: 'fit-content',
                ':focus-within': Object.assign(
                  { boxShadow: 'none' },
                  r.isFromKeyboard && Object.assign({}, t[':focus-visible'])
                )
              };
            }
          },
          Og = function (e, r) {
            return r
              ? "url(\"data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' role='presentation' focusable='false' viewBox='8 8 16 16'%3E%3Cpath fill='" +
                  encodeURIComponent(e) +
                  "' d='M21.5,13.5c0,0.1,0,0.3-0.1,0.4l-5,5C16.3,19,16.1,19,16,19c-0.1,0-0.3-0.1-0.4-0.1l-5-5c-0.1-0.1-0.2-0.2-0.1-0.4 c0-0.3,0.2-0.5,0.5-0.5c0.1,0,0.3,0.1,0.4,0.1l4.6,4.6l4.7-4.6c0.1-0.1,0.2-0.1,0.4-0.1C21.3,13,21.5,13.2,21.5,13.5z' /%3E%3C/svg%3E\")"
              : "url(\"data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' role='presentation' focusable='false' viewBox='8 8 16 16'%3E%3Cpath fill='" +
                  encodeURIComponent(e) +
                  "' d='M16,19.5c-0.3,0-0.5-0.1-0.7-0.3l-5-5C10.1,14,10,13.8,10,13.5c0-0.6,0.4-1,1-1c0.3,0,0.5,0.1,0.7,0.3l4.3,4.3l4.3-4.3 c0.2-0.2,0.4-0.3,0.7-0.3c0.6,0,1,0.4,1,1c0,0.3-0.1,0.5-0.3,0.7l-5,5C16.5,19.4,16.3,19.5,16,19.5z' /%3E%3C/svg%3E\")";
          },
          Fg = function (e, r, o) {
            return { content: '""', width: o, height: o, backgroundImage: Og(e, r), backgroundRepeat: 'no-repeat' };
          },
          Ag = {
            root: function (e) {
              var r = e.props,
                o = e.variables,
                t = e.theme.siteVariables,
                n = t.borderWidth,
                a = Id({
                  variables: {
                    borderRadius: o.focusBorderRadius,
                    borderWidth: o.focusBorderWidth,
                    focusInnerBorderColor: o.focusInnerBorderColor,
                    focusOuterBorderColor: o.focusOuterBorderColor,
                    zIndexes: { foreground: o.focusBorderZIndex }
                  },
                  borderPadding: n
                }),
                i = function () {
                  return r.primary ? o.toggleButtonPrimaryHoverColor : o.toggleButtonColorHover;
                };
              return Object.assign(
                {
                  height: o.toggleButtonHeight,
                  minWidth: o.toggleButtonHeight,
                  color: o.toggleButtonColor,
                  backgroundColor: o.toggleButtonBackgroundColor,
                  borderRadius: o.toggleButtonBorderRadius,
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  verticalAlign: 'middle',
                  cursor: 'pointer',
                  outline: 0,
                  padding: 0,
                  borderWidth: n,
                  borderStyle: 'solid',
                  borderColor: o.toggleButtonBorderColor,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  borderLeftColor: 'transparent',
                  boxShadow: r.primary ? o.toggleButtonPrimaryBoxShadow : o.toggleButtonBoxShadow
                },
                (r.flat || 'small' === r.size || r.disabled) && { boxShadow: 'none' },
                Rd({ outline: !0 }),
                {
                  ':before': Object.assign(
                    {},
                    Fg(
                      r.disabled
                        ? o.toggleButtonColorDisabled
                        : r.primary
                        ? o.toggleButtonPrimaryColor
                        : o.toggleButtonColor,
                      !0,
                      o.toggleButtonIndicatorSize
                    )
                  ),
                  ':hover': Object.assign({}, Rd({ outline: !0 }), {
                    color: i(),
                    backgroundColor: o.toggleButtonBackgroundColorHover,
                    borderTopColor: o.toggleButtonBorderColorHover,
                    borderRightColor: o.toggleButtonBorderColorHover,
                    borderBottomColor: o.toggleButtonBorderColorHover,
                    ':before': Object.assign({}, Fg(i(), !0, o.toggleButtonIndicatorSize))
                  }),
                  ':active': {
                    color: o.toggleButtonColorActive,
                    backgroundColor: o.toggleButtonBackgroundColorActive,
                    borderColor: o.toggleButtonBorderColorActive,
                    boxShadow: 'none'
                  },
                  ':focus': a[':focus'],
                  ':focus-visible': {
                    backgroundColor: o.toggleButtonBackgroundColorFocus,
                    borderColor: o.toggleButtonBorderColorFocus,
                    color: o.toggleButtonColorFocus,
                    borderWidth: n,
                    ':hover': { borderColor: o.toggleButtonBorderColorHover }
                  }
                },
                r.primary && {
                  color: o.toggleButtonPrimaryColor,
                  backgroundColor: o.toggleButtonPrimaryBackgroundColor,
                  borderWidth: '0 0 0 ' + t.borderWidth,
                  borderColor: o.toggleButtonPrimaryBorderColor,
                  ':active': { backgroundColor: o.toggleButtonPrimaryBackgroundColorActive, boxShadow: 'none' },
                  ':focus': a[':focus'],
                  ':focus-visible': { backgroundColor: o.toggleButtonPrimaryBackgroundColorFocus },
                  ':hover': {
                    color: o.toggleButtonPrimaryHoverColor,
                    backgroundColor: o.toggleButtonPrimaryHoverBackgroundColor
                  }
                },
                r.disabled && {
                  cursor: 'default',
                  color: o.toggleButtonColorDisabled,
                  boxShadow: 'none',
                  pointerEvents: 'none',
                  ':hover': { color: o.toggleButtonColorDisabled },
                  backgroundColor: o.toggleButtonBackgroundColorDisabled,
                  borderWidth: '0 0 0 ' + t.borderWidth,
                  borderColor: o.borderColorDisabled
                },
                'small' === r.size && { height: o.smallDimension, width: o.smallDimension, minWidth: o.smallMinWidth }
              );
            }
          },
          Pg = {
            root: function (e) {
              var r = e.props,
                o = e.variables;
              return {
                height: 'auto',
                alignItems: 'center',
                display: 'inline-block',
                '::before': Object.assign(
                  {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    width: '1px',
                    height: '100%',
                    zIndex: 1,
                    background: o.dividerColor
                  },
                  r.primary && { background: o.dividerPrimaryColor }
                )
              };
            }
          },
          jg = {
            root: function (e) {
              var r = e.props,
                o = e.variables,
                t = o.colorScheme[fs(r.color)];
              return Object.assign(
                {},
                r.color && { color: t.foreground },
                !0 === r.atMention && { color: o.atMentionOtherColor },
                r.truncated && { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
                r.disabled && { color: o.disabledColor },
                r.error && { color: o.errorColor },
                r.success && { color: o.successColor },
                r.temporary && { fontStyle: 'italic' },
                r.align && { display: 'block', textAlign: of(r.align) },
                'light' === r.weight && { fontWeight: o.fontWeightLight },
                'semilight' === r.weight && { fontWeight: o.fontWeightSemilight },
                'regular' === r.weight && { fontWeight: o.fontWeightRegular },
                'semibold' === r.weight && { fontWeight: o.fontWeightSemibold },
                'bold' === r.weight && { fontWeight: o.fontWeightBold },
                'smallest' === r.size && { fontSize: o.fontSizeSmallest, lineHeight: o.fontLineHeightSmallest },
                'smaller' === r.size && { fontSize: o.fontSizeSmaller, lineHeight: o.fontLineHeightSmaller },
                'small' === r.size && { fontSize: o.fontSizeSmall, lineHeight: o.fontLineHeightSmall },
                'medium' === r.size && { fontSize: o.fontSizeMedium, lineHeight: o.fontLineHeightMedium },
                'large' === r.size && { fontSize: o.fontSizeLarge, lineHeight: o.fontLineHeightLarge },
                'larger' === r.size && { fontSize: o.fontSizeLarger, lineHeight: o.fontLineHeightLarger },
                'largest' === r.size && { fontSize: o.fontSizeLargest, lineHeight: o.fontLineHeightLargest },
                'me' === r.atMention && { color: o.atMentionMeColor, fontWeight: o.atMentionMeFontWeight },
                r.timestamp && { color: o.timestampColor },
                r.important && { color: o.importantColor, fontWeight: o.importantWeight }
              );
            }
          },
          Ig = {
            root: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                { margin: o.margin, height: o.height, backgroundColor: o.backgroundColor },
                r.inverted && { backgroundColor: o.invertedBackgroundColor },
                {
                  color: o.fontColor,
                  borderColor: o.borderColor,
                  borderRadius: o.borderRadius,
                  borderStyle: 'solid',
                  borderWidth: o.borderWidth,
                  outline: 0,
                  padding: o.padding,
                  resize: r.resize || 'none'
                },
                r.fluid && { width: '100%' },
                r.disabled && { pointerEvents: 'none', color: o.disabledColor, boxShadow: 'none' },
                r.error && { border: os(1) + ' solid ' + o.borderColorError },
                {
                  '::placeholder': Object.assign(
                    { color: o.placeholderColor, opacity: 1 },
                    r.disabled && { color: o.disabledColor }
                  ),
                  ':focus': { borderColor: o.borderColorFocus }
                }
              );
            }
          },
          Rg = {
            root: function () {
              return { display: 'flex', alignItems: 'center', position: 'relative' };
            },
            offsetMeasure: function () {
              return { position: 'absolute', visibility: 'hidden', left: 0, top: 0 };
            },
            overflowContainer: function () {
              return { display: 'flex', overflow: 'hidden', flexGrow: 1 };
            },
            overflowSentinel: function (e) {
              var r = e.props;
              return { width: os(100), display: r.overflowOpen ? 'block' : 'none', visibility: 'hidden' };
            }
          },
          Mg = {
            root: function () {
              return { display: 'flex', whiteSpace: 'nowrap' };
            }
          },
          Dg = {
            root: function (e) {
              var r = e.props,
                o = e.variables,
                t = e.theme.siteVariables,
                n = gs(o.colorScheme),
                a = t.borderWidth,
                i = Id({ variables: t });
              return Object.assign(
                {
                  position: 'relative',
                  backgroundColor: o.background,
                  borderColor: 'transparent',
                  borderWidth: a,
                  borderStyle: 'solid',
                  height: o.itemHeight,
                  color: o.foreground || n.foreground1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  userSelect: 'none'
                },
                !0 !== r.fitted &&
                  'horizontally' !== r.fitted && {
                    paddingLeft: o.customItemHorizontalPadding,
                    paddingRight: o.customItemHorizontalPadding
                  },
                !0 !== r.fitted &&
                  'vertically' !== r.fitted && {
                    paddingTop: o.customItemVerticalPadding,
                    paddingBottom: o.customItemVerticalPadding
                  },
                { ':focus': i[':focus'], ':focus-visible': i[':focus-visible'] }
              );
            }
          },
          zg = {
            root: function (e) {
              var r = e.variables,
                o = gs(r.colorScheme);
              return {
                borderLeft: '1px solid ' + (r.dividerBorder || o.border),
                margin: r.dividerMargin,
                alignSelf: 'stretch'
              };
            }
          },
          _g = {
            root: function (e) {
              var r = e.props,
                o = e.variables,
                t = e.theme.siteVariables,
                n = gs(o.colorScheme),
                a = t.borderWidth,
                i = Id({ variables: t });
              return Object.assign(
                {
                  position: 'relative',
                  backgroundColor: o.background,
                  borderWidth: a,
                  borderStyle: 'solid',
                  borderColor: 'transparent',
                  borderRadius: o.borderRadius,
                  height: o.itemHeight,
                  minWidth: o.itemHeight,
                  padding: o.itemPadding,
                  color: o.foreground || n.foreground1,
                  cursor: 'pointer',
                  userSelect: 'none',
                  ':focus': i[':focus']
                },
                r.active &&
                  Object.assign(
                    { color: o.foregroundActive || n.foregroundActive, backgroundColor: o.backgroundActive },
                    Rd({ outline: !1 })
                  ),
                {
                  ':hover': Object.assign(
                    {
                      color: o.foregroundHover || n.foregroundHover,
                      backgroundColor: o.backgroundHover || n.backgroundHover
                    },
                    Rd({ outline: !1 })
                  ),
                  ':focus-visible': i[':focus-visible']
                },
                (r.disabled || r.disabledFocusable) && {
                  color: o.foregroundDisabled || n.foregroundDisabled1,
                  backgroundColor: o.backgroundDisabled,
                  cursor: 'default',
                  ':hover': {}
                },
                r.disabled && { pointerEvents: 'none' }
              );
            }
          },
          Hg = {
            root: function (e) {
              var r = e.variables,
                o = gs(r.colorScheme);
              return {
                display: 'flex',
                flexDirection: 'column',
                listStyleType: 'none',
                margin: 0,
                padding: r.menuPadding,
                backgroundColor: r.menuBackground || o.background,
                boxShadow: r.menuBoxShadow,
                borderStyle: 'solid',
                borderColor: r.menuBorder || o.border,
                borderWidth: r.menuBorderWidth,
                borderRadius: r.menuBorderRadius,
                maxWidth: r.menuMaxWidth,
                zIndex: r.overlayZIndex
              };
            }
          },
          Tg = {
            root: function (e) {
              var r = e.variables,
                o = gs(r.colorScheme);
              return {
                borderTop: '1px solid ' + (r.menuDividerBorder || o.border),
                margin: r.menuDividerMargin,
                alignSelf: 'stretch'
              };
            }
          },
          Wg = function (e) {
            return (
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' role='presentation' fill='" +
              encodeURIComponent(e) +
              "' focusable='false' view-box='8 8 16 16'%3E%3Cg%3E%3Cpath d='M23.5 11.875a.968.968 0 0 1-.289.711l-8.25 8.25c-.192.193-.43.289-.711.289s-.519-.096-.711-.289l-4.75-4.75a.965.965 0 0 1-.289-.711c0-.125.027-.25.082-.375s.129-.234.223-.328a.953.953 0 0 1 .695-.297c.135 0 .266.025.391.074.125.05.231.121.32.215l4.039 4.047 7.539-7.547a.886.886 0 0 1 .32-.215c.125-.049.255-.074.391-.074a1.004 1.004 0 0 1 .922.625.97.97 0 0 1 .078.375z' /%3E%3C/g%3E%3C/svg%3E\")"
            );
          },
          Lg = {
            root: function (e) {
              var r,
                o,
                t = e.props,
                n = e.variables,
                a = e.theme.siteVariables,
                i = gs(n.colorScheme),
                l = Id({ variables: a, borderRadius: 0 });
              return Object.assign(
                {
                  position: 'relative',
                  color: n.menuItemForeground || i.foreground1,
                  borderWidth: n.menuBorderWidth,
                  backgroundColor: 'transparent',
                  borderColor: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  textAlign: 'left',
                  width: '100%',
                  maxWidth: '100%',
                  padding: n.menuItemPadding,
                  cursor: 'pointer',
                  minHeight: n.itemHeight,
                  lineHeight: n.lineHeightBase,
                  userSelect: 'none',
                  ':focus': { outline: 0 },
                  ':hover':
                    ((r = {
                      color: n.menuItemForegroundHover || i.menuItemForegroundHover,
                      backgroundColor: n.menuItemBackgroundHover || i.menuItemBackgroundHover
                    }),
                    (r['& .ui-toolbar__menuitemsubmenuindicator'] = {
                      color: n.menuItemForegroundHover || i.menuItemForegroundHover
                    }),
                    (r['& .ui-toolbar__menuitemactiveindicator'] = {
                      backgroundImage: Wg(n.menuItemForegroundHover || i.menuItemForegroundHover)
                    }),
                    r),
                  ':focus-visible': l[':focus-visible']
                },
                (t.disabled || t.disabledFocusable) &&
                  (((o = {
                    cursor: 'default',
                    color: n.menuItemForegroundDisabled || i.foregroundDisabled1,
                    backgroundColor: n.menuItemBackgroundDisabled
                  })['& .ui-toolbar__menuitemsubmenuindicator'] = {
                    color: n.menuItemForegroundDisabled || i.foregroundDisabled1
                  }),
                  (o['& .ui-toolbar__menuitemactiveindicator'] = {
                    backgroundImage: Wg(n.menuItemForegroundDisabled || i.foregroundDisabled1)
                  }),
                  (o[':hover'] = {}),
                  o),
                t.disabled && { pointerEvents: 'none' }
              );
            },
            wrapper: function () {
              return { display: 'block' };
            }
          },
          Ng = {
            root: function (e) {
              var r = e.props;
              return Object.assign(
                {},
                r.hasContent && { marginRight: os(10), marginTop: os(3), display: 'flex', alignSelf: 'start' }
              );
            }
          },
          Vg = {
            root: function (e) {
              var r = e.variables,
                o = gs(r.colorScheme);
              return {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: r.menuItemForeground || o.foreground1,
                width: os(16),
                height: '100%',
                position: 'absolute',
                right: os(7),
                top: 0
              };
            }
          },
          Zg = {
            root: function (e) {
              var r = e.variables,
                o = gs(r.colorScheme);
              return {
                backgroundImage: Wg(r.menuItemForeground || o.foreground1),
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: os(24),
                height: '100%',
                position: 'absolute',
                right: os(7)
              };
            }
          },
          Ug = {
            root: function () {
              return { padding: 0 };
            }
          },
          Gg = {
            root: function () {
              return {};
            }
          },
          Xg = {
            root: function () {
              return { display: 'block', paddingLeft: '' + os(10) };
            }
          },
          Yg = 'ui-tree__title__selection-indicator',
          Kg = {
            root: function (e) {
              var r,
                o,
                t,
                n = e.theme.siteVariables,
                a = e.props,
                i = Id({ variables: n });
              return {
                listStyleType: 'none',
                ':focus': Object.assign(
                  {},
                  a.selectable && ((r = {}), (r['& .' + Yg] = { display: 'inline-block' }), r),
                  i[':focus']
                ),
                ':focus-visible': Object.assign(
                  { outline: 0 },
                  a.selectable && ((o = {}), (o['& .' + Yg] = { display: 'inline-block' }), o),
                  ((t = {}), (t['> .ui-tree__title'] = Object.assign({ position: 'relative' }, i[':focus-visible'])), t)
                )
              };
            }
          },
          $g = {
            root: function (e) {
              var r,
                o,
                t,
                n = e.props,
                a = e.variables,
                i = e.theme.siteVariables,
                l = Id({ variables: i });
              return Object.assign(
                {
                  padding: a.padding,
                  cursor: 'pointer',
                  color: a.color,
                  position: 'relative',
                  marginLeft: os(1 + 10 * (n.level - 1)),
                  paddingRight: a.paddingRight,
                  paddingLeft: a.paddingLeft,
                  userSelect: 'none'
                },
                n.selectable && { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
                {
                  ':focus': Object.assign(
                    {},
                    n.selectable && ((r = {}), (r['> .' + Yg] = { display: 'inline-block' }), r),
                    l[':focus']
                  ),
                  ':focus-visible': l[':focus-visible'],
                  ':hover': Object.assign(
                    {},
                    n.selectable &&
                      ((o = { background: a.hoverBackground }), (o['> .' + Yg] = { display: 'inline-block' }), o)
                  )
                },
                n.showIndicator && (((t = {})['> .' + Yg] = { display: 'inline-block' }), t)
              );
            },
            selectionIndicator: function (e) {
              var r,
                o,
                t = e.props,
                n = e.variables;
              return Object.assign(
                {
                  display: 'none',
                  float: 'right',
                  verticalAlign: 'middle',
                  boxShadow: 'unset',
                  width: os(16),
                  height: os(16),
                  borderColor: n.borderColor,
                  borderStyle: n.borderStyle,
                  borderRadius: n.borderRadius,
                  borderWidth: n.borderWidth,
                  color: n.indicatorColor,
                  margin: n.selectionIndicatorMargin,
                  padding: n.padding,
                  userSelect: 'none',
                  backgroundImage: xu(n.indicatorColor, n.background),
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                },
                t.selected && {
                  borderColor: n.checkedBorderColor,
                  backgroundImage: xu(n.checkedIndicatorColor, n.checkedBackground)
                },
                t.indeterminate && {
                  borderColor: n.checkedBorderColor,
                  backgroundImage:
                    ((r = n.checkedIndicatorColor),
                    (o = n.checkedBackground),
                    "url(\"data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' role='presentation' style='background-color: " +
                      escape(o) +
                      "; padding: 2px;' focusable='false' viewBox='8 8 22.5 22.5'%3E%3Cg%3E%3Cpath fill='" +
                      escape(r) +
                      "' d='M10 16v-1h12v1H10z 11.875a.968.968 0 0 1-.289.711l-8.25 8.25c-.192.193-.43.289-.711.289s-.519-.096-.711-.289l-4.75-4.75a.965.965 0 0 1-.289-.711c0-.125.027-.25.082-.375s.129-.234.223-.328a.953.953 0 0 1 .695-.297c.135 0 .266.025.391.074.125.05.231.121.32.215l4.039 4.047 7.539-7.547a.886.886 0 0 1 .32-.215c.125-.049.255-.074.391-.074a1.004 1.004 0 0 1 .922.625.97.97 0 0 1 .078.375z' /%3E%3C/g%3E%3C/svg%3E\")")
                },
                t.disabled && { background: n.disabledBackground, borderColor: n.disabledBorderColor },
                t.disabled &&
                  t.selected && {
                    color: n.disabledCheckedIndicatorColor,
                    borderColor: n.disabledBackgroundChecked,
                    backgroundImage: xu(n.disabledCheckedIndicatorColor, n.disabledBackgroundChecked)
                  }
              );
            }
          },
          qg = {
            root: function (e) {
              var r = e.variables;
              return { display: 'inline-block', verticalAlign: 'middle', width: r.width, height: r.height || 'auto' };
            }
          },
          Jg = {
            root: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                { display: 'none', position: 'absolute', maxWidth: o.maxWidth, zIndex: o.zIndex },
                r.pointing &&
                  Object.assign({ pointerEvents: 'all' }, Yf({ placement: r.basePlacement, padding: o.pointerMargin })),
                r.open && { display: 'block' }
              );
            },
            pointer: function (e) {
              var r,
                o = e.props,
                t = e.variables,
                n = e.rtl;
              return Object.assign(
                { display: 'block', position: 'absolute', width: t.pointerWidth, height: t.pointerHeight },
                Kf({
                  backgroundColor: o.subtle ? t.subtleBackgroundColor : t.backgroundColor,
                  borderSize: t.borderSize,
                  borderColor: o.subtle ? t.subtleBorderColor : t.borderColor,
                  gap: t.pointerGap,
                  padding: t.pointerMargin,
                  height: t.pointerHeight,
                  width: t.pointerWidth,
                  placement: o.basePlacement,
                  rtl: n,
                  svg: t.svgPointer
                    ? ((r = o.subtle ? t.subtleBackgroundColor : t.backgroundColor),
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='" +
                        encodeURIComponent(r) +
                        "' viewBox='0 0 6 16'%3E%3Cpath d='M.708 9.527a2.002 2.002 0 0 1 0-3.055l3.284-2.78C5.324 2.562 5.991 1.332 5.991 0c0 1.002.02 15.013 0 16 0-1.333-.665-2.562-1.995-3.689L.708 9.527z' fill-rule='evenodd' clip-rule='evenodd'/%3E%3C/svg%3E%0A\");")
                    : void 0
                })
              );
            },
            content: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                {
                  display: 'block',
                  fontSize: os(12),
                  padding: o.padding,
                  textAlign: 'left',
                  color: o.color,
                  background: o.backgroundColor,
                  borderRadius: o.borderRadius,
                  borderStyle: o.borderStyle,
                  borderColor: o.borderColor,
                  boxShadow: o.boxShadow
                },
                r.subtle && {
                  background: o.subtleBackgroundColor,
                  color: o.subtleForegroundColor,
                  borderStyle: 'solid',
                  borderWidth: o.borderSize,
                  borderColor: o.subtleBorderColor
                },
                r.pointing && { pointerEvents: 'all' }
              );
            }
          },
          Qg = {
            root: function () {
              return { display: 'inline-block', position: 'relative' };
            },
            itemsContainerWrapper: function (e) {
              var r = e.variables,
                o = e.props;
              return Object.assign(
                { display: 'flex', width: os(r.width), overflowX: 'hidden' },
                o.shouldFocusContainer &&
                  o.isFromKeyboard && {
                    border: '1px solid ' + r.focusOuterBorderColor,
                    borderRadius: r.focusOuterBorderRadius
                  }
              );
            },
            itemsContainer: function () {
              return { padding: 0, margin: 0, display: 'flex', listStyle: 'none', willChange: 'transform' };
            }
          },
          ep = {
            root: function (e) {
              var r = e.variables;
              return { width: os(r.width), marginBottom: os(16), ':focus': { outline: 'none' } };
            }
          },
          rp = {
            root: function (e) {
              var r = e.props,
                o = e.variables,
                t = e.theme,
                n = r.iconOnly,
                a = r.primary,
                i = r.vertical,
                l = r.thumbnails,
                s = gs(o.colorScheme, null, a),
                c = t.siteVariables;
              return Object.assign(
                {
                  display: 'flex',
                  minHeight: os(24),
                  margin: 0,
                  padding: 0,
                  color: o.color,
                  backgroundColor: o.backgroundColor || 'inherit',
                  listStyleType: 'none',
                  justifyContent: 'center',
                  position: 'relative',
                  zIndex: 2
                },
                !i &&
                  l && {
                    justifyContent: 'start',
                    transform:
                      'translateX(' + os(o.width / 2 - o.thumbnailWidth / 2 - +r.activeIndex * o.thumbnailWidth) + ')',
                    transition: 'transform .5s ease'
                  },
                n && { alignItems: 'center' },
                i &&
                  Object.assign(
                    {
                      flexDirection: 'column',
                      backgroundColor: o.verticalBackgroundColor,
                      width: 'fit-content',
                      padding: os(8) + ' 0'
                    },
                    n && { display: 'inline-block', width: 'auto' }
                  ),
                !n &&
                  !i && {
                    border: o.borderWidth + ' solid ' + (a ? o.primaryBorderColor : o.borderColor || s.border),
                    borderRadius: c.borderRadiusMedium
                  }
              );
            }
          },
          op = 'ui-carousel__navigationitem__indicator',
          tp = {
            root: function (e) {
              var r,
                o = e.props,
                t = e.variables,
                n = o.active,
                a = o.iconOnly,
                i = o.primary,
                l = o.vertical,
                s = o.thumbnails,
                c = o.disableClickableNav,
                d = gs(t.colorScheme, null, i);
              return Object.assign(
                { color: 'inherit', display: 'block', cursor: 'pointer', whiteSpace: 'nowrap' },
                a && { border: os(2) + ' solid transparent' },
                l ? { padding: t.verticalItemPadding } : { padding: t.horizontalPadding },
                a && { margin: os(1), padding: os(5), display: 'flex', alignItems: 'center', justifyContent: 'center' },
                n && a && Object.assign({ color: t.iconOnlyColorActive }, Rd({ outline: !1 })),
                {
                  ':focus-visible': Object.assign(
                    {},
                    a &&
                      Object.assign(
                        { borderRadius: '50%' },
                        s && { borderRadius: '0' },
                        { borderColor: t.iconOnlyColorActive },
                        Rd({ outline: !1 })
                      )
                  )
                },
                a && i && { color: 'inherit', borderColor: t.borderColorActive || d.borderActive },
                c && { cursor: 'default' },
                {
                  ':focus': { outline: 0 },
                  ':hover': Object.assign(
                    ((r = { color: 'inherit' }), (r['& .' + op] = { background: t.indicatorBackgroundColor }), r),
                    a && Rd({ outline: !1 }),
                    i && a && { color: 'inherit' }
                  )
                }
              );
            },
            content: function (e) {
              var r = e.props,
                o = r.hasIndicator ? 26 : 0;
              return Object.assign(
                {
                  whiteSpace: 'normal',
                  lineHeight: 1.5,
                  marginTop: os(-4),
                  marginBottom: os(-4),
                  display: 'inline-block'
                },
                r.thumbnails && Object.assign({ width: os(60) }, !r.active && { opacity: 0.4 }),
                r.vertical && { width: 'max-content', minWidth: os(46 - o), maxWidth: os(262 - o), marginRight: os(16) }
              );
            },
            indicator: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                { borderRadius: '50%', width: os(7), height: os(7), background: o.indicatorBackgroundColor },
                r.active && { background: o.indicatorActiveBackgroundColor },
                r.hasContent && { marginRight: os(10) },
                !r.iconOnly && { marginTop: 0, marginBottom: os(-8), verticalAlign: 'top' }
              );
            }
          },
          np = 'ui-carousel__paddle__content',
          ap = function (e, r) {
            return r
              ? "url(\"data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' role='presentation' focusable='false' viewBox='8 8 16 16'%3E%3Cg%3E%3Cpath fill='" +
                  encodeURIComponent(e) +
                  "' d='M21.5 15.97c0 .28-.1.52-.29.71l-7 7c-.19.19-.43.29-.71.29-.14 0-.26-.03-.38-.08s-.23-.13-.32-.22-.16-.2-.22-.32a1.036 1.036 0 0 1-.01-.77c.05-.12.12-.23.21-.32l6.3-6.29-6.3-6.29a.85.85 0 0 1-.21-.32c-.05-.13-.07-.26-.07-.39a.995.995 0 0 1 .3-.7c.09-.09.2-.16.32-.22.12-.05.24-.08.38-.08.28 0 .52.1.71.29l7 7c.19.19.29.43.29.71z' /%3E%3C/g%3E%3C/svg%3E\")"
              : "url(\"data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' role='presentation' focusable='false' viewBox='8 8 16 16'%3E%3Cg%3E%3Cpath fill='" +
                  encodeURIComponent(e) +
                  "' d='M19.5 8.97c0 .14-.03.27-.07.39-.05.12-.12.23-.21.32l-6.3 6.29 6.3 6.29c.09.09.17.2.21.32a1.036 1.036 0 0 1-.01.77c-.05.12-.13.23-.22.32s-.2.16-.32.22a.995.995 0 0 1-1.09-.21l-7-7c-.19-.19-.29-.43-.29-.71s.1-.52.29-.71l7-7a.995.995 0 0 1 1.09-.21c.12.06.23.13.32.22s.16.2.22.32c.05.12.08.25.08.38z' /%3E%3C/g%3E%3C/svg%3E\")";
          },
          ip = function (e, r, o) {
            return { width: o, height: o, backgroundImage: ap(e, r), backgroundRepeat: 'no-repeat' };
          },
          lp = {
            root: function (e) {
              var r,
                o = e.props,
                t = e.variables,
                n = e.theme.siteVariables.borderWidth,
                a = Id({
                  variables: {
                    borderRadius: t.focusBorderRadius,
                    borderWidth: t.focusBorderWidth,
                    focusInnerBorderColor: t.focusInnerBorderColor,
                    focusOuterBorderColor: t.focusOuterBorderColor,
                    zIndexes: { foreground: t.focusBorderZIndex }
                  },
                  borderPadding: n
                });
              return Object.assign(
                {
                  height: t.paddleHeight,
                  minWidth: t.paddleHeight,
                  color: t.paddleColor,
                  backgroundColor: t.paddleBackgroundColor,
                  borderRadius: t.paddleBorderRadius,
                  border: 0,
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  verticalAlign: 'middle',
                  cursor: 'pointer',
                  marginBottom: os(40),
                  outline: 0,
                  padding: 0,
                  transition: Ul,
                  zIndex: 1
                },
                o.hidden && { visibility: 'hidden' },
                o.disableClickableNav && { cursor: 'default' },
                {
                  ':hover': Object.assign(
                    {},
                    Rd({ outline: !1 }),
                    ((r = {}),
                    (r['& .' + np] = Object.assign({}, ip(t.paddleColor, o.next, t.paddleIndicatorSize))),
                    (r.background = t.paddleBackgroundColorHover),
                    r)
                  ),
                  ':active': { transition: Zl, backgroundColor: t.paddleBackgroundColorActive },
                  ':focus': a[':focus'],
                  ':focus-visible': Object.assign({}, a[':focus-visible'])
                },
                o.disabled && {
                  cursor: 'default',
                  color: t.paddleColorDisabled,
                  pointerEvents: 'none',
                  ':hover': { color: t.paddleColorDisabled },
                  backgroundColor: t.paddleBackgroundColorDisabled
                }
              );
            },
            content: function (e) {
              var r = e.props,
                o = e.variables,
                t = e.rtl;
              return Object.assign(
                {},
                ip(r.disabled ? o.paddleColorDisabled : o.paddleColor, r.next, o.paddleIndicatorSize),
                t && { transform: 'scaleX(-1)' }
              );
            }
          },
          sp = {
            root: function (e) {
              var r = e.variables;
              return {
                display: 'flex',
                width: os(r.width),
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'absolute',
                top: 0,
                right: 0,
                left: 0,
                bottom: 0
              };
            }
          },
          cp = {
            root: function (e) {
              return { display: 'flex', flexDirection: 'column', background: e.variables.backgroundColor };
            }
          },
          dp = {
            root: function (e) {
              var r = e.props,
                o = e.variables,
                t = e.theme.siteVariables,
                n = Id({ variables: t });
              return Object.assign(
                {
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  fontSize: o.bodyFontSize,
                  height: o.defaultRowHeight,
                  color: o.color,
                  backgroundColor: o.backgroundColor,
                  borderWidth: o.borderWidth,
                  borderStyle: 'solid',
                  borderColor: 'transparent',
                  borderBottomColor: o.rowBorderColor,
                  padding: o.rowPadding,
                  position: 'relative',
                  width: '100%',
                  ':hover': {
                    color: o.hoverColor,
                    backgroundColor: o.backgroundHoverColor,
                    borderColor: o.rowBorderHoverColor
                  }
                },
                n,
                r.header && {
                  fontSize: o.headerFontSize,
                  ':hover': { color: o.color, backgroundColor: o.backgroundColor }
                },
                r.compact && { height: o.compactRowHeight }
              );
            }
          },
          up = {
            root: function (e) {
              var r = e.variables,
                o = e.theme.siteVariables,
                t = Id({ variables: o });
              return Object.assign(
                {
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  flexGrow: 1,
                  flexBasis: 0,
                  minWidth: r.minCellWidth,
                  outline: 0,
                  borderWidth: r.borderWidth,
                  borderStyle: 'solid',
                  borderColor: 'transparent'
                },
                t,
                { padding: r.cellPadding, position: 'relative', height: '100%' }
              );
            },
            content: function (e) {
              var r = e.props;
              return Object.assign(
                { alignSelf: 'center' },
                r.truncateContent && {
                  display: 'block',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }
              );
            }
          },
          fp = {
            root: function (e) {
              var r,
                o = e.props,
                t = e.variables,
                n = e.theme.siteVariables,
                a = Id({ variables: n, borderRadius: t.borderRadius });
              return Object.assign(
                {
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  padding: t.padding,
                  margin: t.margin,
                  width: t.width,
                  height: t.height,
                  borderWidth: t.borderWidth,
                  borderStyle: t.borderStyle,
                  borderColor: t.borderColor,
                  borderRadius: t.borderRadius,
                  backgroundColor: t.backgroundColor
                },
                o.ghost && { backgroundColor: t.ghostBackgroundColor },
                o.inverted && { backgroundColor: t.invertedBackgroundColor },
                o.selected && { backgroundColor: t.selectedBackgroundColor },
                { boxShadow: t.boxShadow },
                o.elevated && { boxShadow: t.elevatedBoxShadow },
                {
                  ':hover': Object.assign(
                    { backgroundColor: t.backgroundColorHover },
                    o.ghost && { backgroundColor: t.ghostBackgroundColorHover },
                    o.inverted && { backgroundColor: t.invertedBackgroundColorHover },
                    o.selected && { backgroundColor: t.selectedBackgroundColorHover },
                    { borderColor: t.borderColorHover, boxShadow: t.boxShadowHover },
                    o.elevated && { boxShadow: t.elevatedBoxShadowHover }
                  )
                },
                a,
                o.actionable && {
                  cursor: 'pointer',
                  ':focus-visible': Object.assign(
                    { backgroundColor: t.backgroundColorFocus },
                    o.ghost && { backgroundColor: t.ghostBackgroundColorFocus },
                    o.inverted && { backgroundColor: t.invertedBackgroundColorFocus },
                    o.selected && { backgroundColor: t.selectedBackgroundColorFocus },
                    { boxShadow: t.boxShadowFocus },
                    o.elevated && { boxShadow: t.elevatedBoxShadowFocus },
                    a[':focus-visible']
                  ),
                  ':active': Object.assign(
                    { backgroundColor: t.backgroundColorPressed },
                    o.ghost && { backgroundColor: t.ghostBackgroundColorPressed },
                    o.inverted && { backgroundColor: t.invertedBackgroundColorPressed },
                    o.selected && { backgroundColor: t.selectedBackgroundColorPressed },
                    { borderColor: t.borderColorPressed, boxShadow: t.boxShadowPressed },
                    o.elevated && { boxShadow: t.elevatedBoxShadowPressed }
                  )
                },
                'small' === o.size && {
                  width: t.sizeSmallWidth,
                  height: t.sizeSmallHeight,
                  padding: t.sizeSmallPadding
                },
                'large' === o.size && {
                  width: t.sizeLargeWidth,
                  height: t.sizeLargeHeight,
                  padding: t.sizeLargePadding
                },
                o.fluid && { width: t.fluidWidth, height: t.fluidHeight },
                o.horizontal && { flexDirection: 'row' },
                o.compact && { padding: t.compactPadding },
                o.centered && { alignItems: 'center' },
                o.disabled &&
                  Object.assign(
                    {
                      cursor: 'not-allowed',
                      color: t.colorDisabled,
                      backgroundColor: t.backgroundColorDisabled,
                      borderColor: t.borderColorDisabled,
                      boxShadow: t.boxShadowDisabled
                    },
                    o.inverted && { backgroundColor: t.invertedBackgroundColorDisabled },
                    o.ghost && { backgroundColor: t.ghostBackgroundColorDisabled },
                    o.selected && { backgroundColor: t.selectedBackgroundColorDisabled },
                    {
                      ':hover': { boxShadow: t.boxShadowDisabled },
                      ':focus-visible': Object.assign({ boxShadow: t.boxShadowDisabled }, a[':focus-visible']),
                      ':active': { boxShadow: t.boxShadowDisabled }
                    }
                  ),
                o.expandable &&
                  (((r = {})['& .ui-card__expandablebox'] = {
                    maxHeight: t.expandableBoxStartMaxHeight,
                    transition: t.expandableBoxExpandTransition,
                    overflow: 'hidden'
                  }),
                  (r['&:hover .ui-card__expandablebox'] = {
                    maxHeight: t.expandableBoxEndMaxHeight,
                    transition: t.expandableBoxExpandTransition
                  }),
                  (r['&:focus .ui-card__expandablebox'] = {
                    maxHeight: t.expandableBoxEndMaxHeight,
                    transition: t.expandableBoxExpandTransition
                  }),
                  r)
              );
            }
          },
          gp = {
            root: function (e) {
              var r = e.variables,
                o = e.props;
              return Object.assign(
                { display: 'flex', flexDirection: 'column', margin: r.headerMargin },
                o.fitted && { margin: r.fittedHeaderMargin }
              );
            }
          },
          pp = {
            root: function (e) {
              var r = e.variables,
                o = e.props;
              return Object.assign(
                { display: 'flex', flexDirection: 'column', margin: r.bodyMargin },
                o.fitted && { margin: r.fittedBodyMargin }
              );
            }
          },
          bp = {
            root: function (e) {
              var r = e.variables,
                o = e.props;
              return Object.assign(
                { display: 'flex', flexDirection: 'column', margin: r.footerMargin },
                o.fitted && { margin: r.fittedFooterMargin }
              );
            }
          },
          mp = {
            root: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                { margin: o.previewMargin },
                r.horizontal && { margin: o.previewMarginHorizontal },
                r.fitted && { margin: o.fittedPreviewMargin }
              );
            }
          },
          hp = {
            root: function (e) {
              var r = e.variables;
              return { position: 'absolute', top: r.topControlsTop, right: r.topControlsRight };
            }
          },
          vp = {
            root: function () {
              return { display: 'flex' };
            }
          },
          yp = 'ui-input__input',
          Cp = {
            root: function (e) {
              var r,
                o = e.props;
              return Object.assign({}, !o.allowManualInput && (((r = {})['& .' + yp] = { cursor: 'pointer' }), r));
            }
          },
          kp = {
            root: function (e) {
              return { minHeight: e.variables.calendarMinHeight };
            }
          },
          wp = {
            root: function (e) {
              var r = e.variables;
              return {
                display: 'flex',
                alignItems: 'center',
                paddingTop: r.calendarHeaderPaddingTop,
                paddingBottom: r.calendarHeaderPaddingBottom
              };
            },
            label: function (e) {
              var r = e.variables;
              return {
                fontWeight: r.calendarHeaderLabelFontWeight,
                flexGrow: 1,
                paddingLeft: r.calendarHeaderLabelPaddingLeft
              };
            }
          },
          xp = {
            root: function (e) {
              var r = e.variables;
              return {
                textAlign: 'center',
                verticalAlign: 'middle',
                fontWeight: r.calendarHeaderCellFontWeight,
                height: r.calendarHeaderCellHeight,
                width: r.calendarHeaderCellWidth,
                padding: r.calendarHeaderCellPadding,
                display: 'table-cell'
              };
            }
          },
          Sp = {
            root: function (e) {
              var r = e.props,
                o = e.variables;
              return Object.assign(
                {
                  height: o.calendarCellHeight,
                  width: o.calendarCellWidth,
                  padding: o.calendarCellPadding,
                  ':hover': { backgroundColor: o.calendarCellHoverBackgroundColor, color: o.calendarCellHoverColor }
                },
                r.quiet && { color: o.calendarCellQuietColor },
                r.selected && {
                  color: o.calendarCellSelectedColor,
                  backgroundColor: o.calendarCellSelectedBackgroundColor
                },
                r.disabled && {
                  color: o.calendarCellDisabledColor,
                  cursor: 'default',
                  backgroundColor: o.calendarCellDisabledBackgroundColor,
                  ':hover': {}
                }
              );
            }
          },
          Bp = {
            root: function (e) {
              var r = e.props,
                o = e.variables,
                t = e.theme.siteVariables,
                n = t.borderWidth,
                a = Id({ variables: t, borderPadding: n });
              return Object.assign(
                {
                  textAlign: 'center',
                  height: '100%',
                  width: '100%',
                  cursor: 'pointer',
                  border: o.calendarCellBorder,
                  padding: o.calendarCellPadding,
                  margin: o.calendarCellMargin,
                  display: 'table-cell',
                  position: 'relative'
                },
                a,
                {
                  backgroundColor: o.calendarCellBackgroundColor,
                  color: o.calendarCellColor,
                  ':hover': { backgroundColor: o.calendarCellHoverBackgroundColor, color: o.calendarCellHoverColor }
                },
                r.quiet && { color: o.calendarCellQuietColor },
                r.selected && {
                  color: o.calendarCellSelectedColor,
                  backgroundColor: o.calendarCellSelectedBackgroundColor
                },
                r.disabled && {
                  color: o.calendarCellDisabledColor,
                  cursor: 'default',
                  backgroundColor: o.calendarCellDisabledBackgroundColor,
                  ':hover': {}
                },
                r.today && {
                  backgroundColor: o.calendarCellTodayBackgroundColor,
                  color: o.calendarCellTodayColor,
                  borderRadius: o.calendarCellTodayBorderRadius
                }
              );
            }
          },
          Ep = {
            root: function () {
              return { 'border-spacing': '0rem', tableLayout: 'fixed' };
            }
          },
          Op = {
            root: function (e) {
              var r,
                o = e.props,
                t = e.variables;
              return Object.assign(
                {},
                o.isRowSelectionActive &&
                  (((r = {})[':hover .ui-datepicker__calendarcellbutton'] = {
                    backgroundColor: t.calendarCellHoverBackgroundColor,
                    color: t.calendarCellHoverColor
                  }),
                  r)
              );
            }
          },
          Fp = M({
            siteVariables: e,
            componentVariables: r,
            componentStyles: o,
            fontFaces: [
              {
                name: 'Segoe UI',
                paths: [
                  'https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-regular.woff2'
                ],
                props: { fontWeight: 400 }
              },
              {
                name: 'Segoe UI',
                paths: [
                  'https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semibold.woff2'
                ],
                props: { fontWeight: 600 }
              },
              {
                name: 'Segoe UI',
                paths: [
                  'https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-bold.woff2'
                ],
                props: { fontWeight: 700 }
              }
            ],
            staticStyles: [
              '/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}',
              function (e) {
                return {
                  body: {
                    padding: e.bodyPadding,
                    margin: e.bodyMargin,
                    fontFamily: e.bodyFontFamily,
                    fontSize: e.bodyFontSize,
                    lineHeight: e.bodyLineHeight
                  },
                  '*': { boxSizing: 'border-box' },
                  '*:before': { boxSizing: 'border-box' },
                  '*:after': { boxSizing: 'border-box' },
                  '[hidden]': { display: 'none!important' }
                };
              }
            ],
            animations: es
          });
      })(),
      a
    );
  })()
);
