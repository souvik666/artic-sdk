var Qe = Object.defineProperty;
var Ye = (e, t, n) => t in e ? Qe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var b = (e, t, n) => (Ye(e, typeof t != "symbol" ? t + "" : t, n), n);
const Ze = new URL("https://api.artic.edu/api/v1"), ve = new URL(Ze), I = {
  artworks: "/artworks",
  agents: "/agents",
  places: "/places",
  galleries: "/galleries",
  exhibitions: "/exhibitions",
  products: "/products",
  texts: "/texts",
  sounds: "/sounds"
};
function Fe(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: et } = Object.prototype, { getPrototypeOf: me } = Object, X = ((e) => (t) => {
  const n = et.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), A = (e) => (e = e.toLowerCase(), (t) => X(t) === e), Q = (e) => (t) => typeof t === e, { isArray: k } = Array, q = Q("undefined");
function tt(e) {
  return e !== null && !q(e) && e.constructor !== null && !q(e.constructor) && R(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Be = A("ArrayBuffer");
function nt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Be(e.buffer), t;
}
const rt = Q("string"), R = Q("function"), Le = Q("number"), Y = (e) => e !== null && typeof e == "object", st = (e) => e === !0 || e === !1, V = (e) => {
  if (X(e) !== "object")
    return !1;
  const t = me(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, ot = A("Date"), it = A("File"), at = A("Blob"), ct = A("FileList"), ut = (e) => Y(e) && R(e.pipe), lt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || R(e.append) && ((t = X(e)) === "formdata" || // detect form-data instance
  t === "object" && R(e.toString) && e.toString() === "[object FormData]"));
}, ft = A("URLSearchParams"), dt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function _(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), k(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let u;
    for (r = 0; r < i; r++)
      u = o[r], t.call(null, e[u], u, e);
  }
}
function De(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const Ue = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), je = (e) => !q(e) && e !== Ue;
function oe() {
  const { caseless: e } = je(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && De(t, s) || s;
    V(t[o]) && V(r) ? t[o] = oe(t[o], r) : V(r) ? t[o] = oe({}, r) : k(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && _(arguments[r], n);
  return t;
}
const pt = (e, t, n, { allOwnKeys: r } = {}) => (_(t, (s, o) => {
  n && R(s) ? e[o] = Fe(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), ht = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), mt = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, yt = (e, t, n, r) => {
  let s, o, i;
  const u = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !u[i] && (t[i] = e[i], u[i] = !0);
    e = n !== !1 && me(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, wt = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Et = (e) => {
  if (!e)
    return null;
  if (k(e))
    return e;
  let t = e.length;
  if (!Le(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, bt = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && me(Uint8Array)), Rt = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Ot = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, St = A("HTMLFormElement"), At = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Re = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Tt = A("RegExp"), Ie = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  _(n, (s, o) => {
    t(s, o, e) !== !1 && (r[o] = s);
  }), Object.defineProperties(e, r);
}, xt = (e) => {
  Ie(e, (t, n) => {
    if (R(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (R(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, gt = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return k(e) ? r(e) : r(String(e).split(t)), n;
}, Nt = () => {
}, Pt = (e, t) => (e = +e, Number.isFinite(e) ? e : t), te = "abcdefghijklmnopqrstuvwxyz", Oe = "0123456789", ke = {
  DIGIT: Oe,
  ALPHA: te,
  ALPHA_DIGIT: te + te.toUpperCase() + Oe
}, Ct = (e = 16, t = ke.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Ft(e) {
  return !!(e && R(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Bt = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (Y(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = k(r) ? [] : {};
        return _(r, (i, u) => {
          const d = n(i, s + 1);
          !q(d) && (o[u] = d);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Lt = A("AsyncFunction"), Dt = (e) => e && (Y(e) || R(e)) && R(e.then) && R(e.catch), a = {
  isArray: k,
  isArrayBuffer: Be,
  isBuffer: tt,
  isFormData: lt,
  isArrayBufferView: nt,
  isString: rt,
  isNumber: Le,
  isBoolean: st,
  isObject: Y,
  isPlainObject: V,
  isUndefined: q,
  isDate: ot,
  isFile: it,
  isBlob: at,
  isRegExp: Tt,
  isFunction: R,
  isStream: ut,
  isURLSearchParams: ft,
  isTypedArray: bt,
  isFileList: ct,
  forEach: _,
  merge: oe,
  extend: pt,
  trim: dt,
  stripBOM: ht,
  inherits: mt,
  toFlatObject: yt,
  kindOf: X,
  kindOfTest: A,
  endsWith: wt,
  toArray: Et,
  forEachEntry: Rt,
  matchAll: Ot,
  isHTMLForm: St,
  hasOwnProperty: Re,
  hasOwnProp: Re,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ie,
  freezeMethods: xt,
  toObjectSet: gt,
  toCamelCase: At,
  noop: Nt,
  toFiniteNumber: Pt,
  findKey: De,
  global: Ue,
  isContextDefined: je,
  ALPHABET: ke,
  generateString: Ct,
  isSpecCompliantForm: Ft,
  toJSONObject: Bt,
  isAsyncFn: Lt,
  isThenable: Dt
};
function m(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
a.inherits(m, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const He = m.prototype, Me = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Me[e] = { value: e };
});
Object.defineProperties(m, Me);
Object.defineProperty(He, "isAxiosError", { value: !0 });
m.from = (e, t, n, r, s, o) => {
  const i = Object.create(He);
  return a.toFlatObject(e, i, function(d) {
    return d !== Error.prototype;
  }, (u) => u !== "isAxiosError"), m.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Ut = null;
function ie(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function qe(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Se(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = qe(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function jt(e) {
  return a.isArray(e) && !e.some(ie);
}
const It = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Z(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, T) {
    return !a.isUndefined(T[h]);
  });
  const r = n.metaTokens, s = n.visitor || l, o = n.dots, i = n.indexes, d = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function c(f) {
    if (f === null)
      return "";
    if (a.isDate(f))
      return f.toISOString();
    if (!d && a.isBlob(f))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(f) || a.isTypedArray(f) ? d && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function l(f, h, T) {
    let O = f;
    if (f && !T && typeof f == "object") {
      if (a.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), f = JSON.stringify(f);
      else if (a.isArray(f) && jt(f) || (a.isFileList(f) || a.endsWith(h, "[]")) && (O = a.toArray(f)))
        return h = qe(h), O.forEach(function(J, Xe) {
          !(a.isUndefined(J) || J === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Se([h], Xe, o) : i === null ? h : h + "[]",
            c(J)
          );
        }), !1;
    }
    return ie(f) ? !0 : (t.append(Se(T, h, o), c(f)), !1);
  }
  const p = [], E = Object.assign(It, {
    defaultVisitor: l,
    convertValue: c,
    isVisitable: ie
  });
  function y(f, h) {
    if (!a.isUndefined(f)) {
      if (p.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      p.push(f), a.forEach(f, function(O, D) {
        (!(a.isUndefined(O) || O === null) && s.call(
          t,
          O,
          a.isString(D) ? D.trim() : D,
          h,
          E
        )) === !0 && y(O, h ? h.concat(D) : [D]);
      }), p.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function Ae(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function ye(e, t) {
  this._pairs = [], e && Z(e, this, t);
}
const _e = ye.prototype;
_e.append = function(t, n) {
  this._pairs.push([t, n]);
};
_e.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Ae);
  } : Ae;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function kt(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ze(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || kt, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new ye(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Ht {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    a.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Te = Ht, Je = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Mt = typeof URLSearchParams < "u" ? URLSearchParams : ye, qt = typeof FormData < "u" ? FormData : null, _t = typeof Blob < "u" ? Blob : null, zt = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Jt = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), S = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Mt,
    FormData: qt,
    Blob: _t
  },
  isStandardBrowserEnv: zt,
  isStandardBrowserWebWorkerEnv: Jt,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Vt(e, t) {
  return Z(e, new S.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return S.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function $t(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Wt(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Ve(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    const u = Number.isFinite(+i), d = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, d ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !u) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = Wt(s[i])), !u);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t($t(r), s, n, 0);
    }), n;
  }
  return null;
}
const Kt = {
  "Content-Type": void 0
};
function Gt(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const v = {
  transitional: Je,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s && s ? JSON.stringify(Ve(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let u;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Vt(t, this.formSerializer).toString();
      if ((u = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return Z(
          u ? { "files[]": t } : t,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), Gt(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || v.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (u) {
        if (i)
          throw u.name === "SyntaxError" ? m.from(u, m.ERR_BAD_RESPONSE, this, null, this.response) : u;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: S.classes.FormData,
    Blob: S.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
a.forEach(["delete", "get", "head"], function(t) {
  v.headers[t] = {};
});
a.forEach(["post", "put", "patch"], function(t) {
  v.headers[t] = a.merge(Kt);
});
const we = v, Xt = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Qt = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && Xt[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, xe = Symbol("internals");
function M(e) {
  return e && String(e).trim().toLowerCase();
}
function $(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map($) : String(e);
}
function Yt(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Zt = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ne(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function vt(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function en(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
class ee {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(u, d, c) {
      const l = M(d);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const p = a.findKey(s, l);
      (!p || s[p] === void 0 || c === !0 || c === void 0 && s[p] !== !1) && (s[p || d] = $(u));
    }
    const i = (u, d) => a.forEach(u, (c, l) => o(c, l, d));
    return a.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : a.isString(t) && (t = t.trim()) && !Zt(t) ? i(Qt(t), n) : t != null && o(n, t, r), this;
  }
  get(t, n) {
    if (t = M(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Yt(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = M(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ne(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = M(i), i) {
        const u = a.findKey(r, i);
        u && (!n || ne(r, r[u], u, n)) && (delete r[u], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || ne(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(r, o);
      if (i) {
        n[i] = $(s), delete n[o];
        return;
      }
      const u = t ? vt(o) : String(o).trim();
      u !== o && delete n[o], n[u] = $(s), r[u] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[xe] = this[xe] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const u = M(i);
      r[u] || (en(s, i), r[u] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
ee.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.freezeMethods(ee.prototype);
a.freezeMethods(ee);
const x = ee;
function re(e, t) {
  const n = this || we, r = t || n, s = x.from(r.headers);
  let o = r.data;
  return a.forEach(e, function(u) {
    o = u.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function $e(e) {
  return !!(e && e.__CANCEL__);
}
function z(e, t, n) {
  m.call(this, e ?? "canceled", m.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(z, m, {
  __CANCEL__: !0
});
function tn(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new m(
    "Request failed with status code " + n.status,
    [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const nn = S.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, s, o, i, u) {
        const d = [];
        d.push(n + "=" + encodeURIComponent(r)), a.isNumber(s) && d.push("expires=" + new Date(s).toGMTString()), a.isString(o) && d.push("path=" + o), a.isString(i) && d.push("domain=" + i), u === !0 && d.push("secure"), document.cookie = d.join("; ");
      },
      read: function(n) {
        const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
        return r ? decodeURIComponent(r[3]) : null;
      },
      remove: function(n) {
        this.write(n, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function rn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function sn(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function We(e, t) {
  return e && !rn(t) ? sn(e, t) : t;
}
const on = S.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function s(o) {
      let i = o;
      return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = s(window.location.href), function(i) {
      const u = a.isString(i) ? s(i) : i;
      return u.protocol === r.protocol && u.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function an(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function cn(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(d) {
    const c = Date.now(), l = r[o];
    i || (i = c), n[s] = d, r[s] = c;
    let p = o, E = 0;
    for (; p !== s; )
      E += n[p++], p = p % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), c - i < t)
      return;
    const y = l && c - l;
    return y ? Math.round(E * 1e3 / y) : void 0;
  };
}
function ge(e, t) {
  let n = 0;
  const r = cn(50, 250);
  return (s) => {
    const o = s.loaded, i = s.lengthComputable ? s.total : void 0, u = o - n, d = r(u), c = o <= i;
    n = o;
    const l = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: u,
      rate: d || void 0,
      estimated: d && i && c ? (i - o) / d : void 0,
      event: s
    };
    l[t ? "download" : "upload"] = !0, e(l);
  };
}
const un = typeof XMLHttpRequest < "u", ln = un && function(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const o = x.from(e.headers).normalize(), i = e.responseType;
    let u;
    function d() {
      e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener("abort", u);
    }
    a.isFormData(s) && (S.isStandardBrowserEnv || S.isStandardBrowserWebWorkerEnv ? o.setContentType(!1) : o.setContentType("multipart/form-data;", !1));
    let c = new XMLHttpRequest();
    if (e.auth) {
      const y = e.auth.username || "", f = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(y + ":" + f));
    }
    const l = We(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), ze(l, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function p() {
      if (!c)
        return;
      const y = x.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), h = {
        data: !i || i === "text" || i === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: y,
        config: e,
        request: c
      };
      tn(function(O) {
        n(O), d();
      }, function(O) {
        r(O), d();
      }, h), c = null;
    }
    if ("onloadend" in c ? c.onloadend = p : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(p);
    }, c.onabort = function() {
      c && (r(new m("Request aborted", m.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new m("Network Error", m.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let f = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const h = e.transitional || Je;
      e.timeoutErrorMessage && (f = e.timeoutErrorMessage), r(new m(
        f,
        h.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
        e,
        c
      )), c = null;
    }, S.isStandardBrowserEnv) {
      const y = (e.withCredentials || on(l)) && e.xsrfCookieName && nn.read(e.xsrfCookieName);
      y && o.set(e.xsrfHeaderName, y);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in c && a.forEach(o.toJSON(), function(f, h) {
      c.setRequestHeader(h, f);
    }), a.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), i && i !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", ge(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", ge(e.onUploadProgress)), (e.cancelToken || e.signal) && (u = (y) => {
      c && (r(!y || y.type ? new z(null, e, c) : y), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
    const E = an(l);
    if (E && S.protocols.indexOf(E) === -1) {
      r(new m("Unsupported protocol " + E + ":", m.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(s || null);
  });
}, W = {
  http: Ut,
  xhr: ln
};
a.forEach(W, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const fn = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (let s = 0; s < t && (n = e[s], !(r = a.isString(n) ? W[n.toLowerCase()] : n)); s++)
      ;
    if (!r)
      throw r === !1 ? new m(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        a.hasOwnProp(W, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!a.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: W
};
function se(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new z(null, e);
}
function Ne(e) {
  return se(e), e.headers = x.from(e.headers), e.data = re.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), fn.getAdapter(e.adapter || we.adapter)(e).then(function(r) {
    return se(e), r.data = re.call(
      e,
      e.transformResponse,
      r
    ), r.headers = x.from(r.headers), r;
  }, function(r) {
    return $e(r) || (se(e), r && r.response && (r.response.data = re.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = x.from(r.response.headers))), Promise.reject(r);
  });
}
const Pe = (e) => e instanceof x ? e.toJSON() : e;
function j(e, t) {
  t = t || {};
  const n = {};
  function r(c, l, p) {
    return a.isPlainObject(c) && a.isPlainObject(l) ? a.merge.call({ caseless: p }, c, l) : a.isPlainObject(l) ? a.merge({}, l) : a.isArray(l) ? l.slice() : l;
  }
  function s(c, l, p) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(c))
        return r(void 0, c, p);
    } else
      return r(c, l, p);
  }
  function o(c, l) {
    if (!a.isUndefined(l))
      return r(void 0, l);
  }
  function i(c, l) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(c))
        return r(void 0, c);
    } else
      return r(void 0, l);
  }
  function u(c, l, p) {
    if (p in t)
      return r(c, l);
    if (p in e)
      return r(void 0, c);
  }
  const d = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: u,
    headers: (c, l) => s(Pe(c), Pe(l), !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const p = d[l] || s, E = p(e[l], t[l], l);
    a.isUndefined(E) && p !== u || (n[l] = E);
  }), n;
}
const Ke = "1.4.0", Ee = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ee[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ce = {};
Ee.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + Ke + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, u) => {
    if (t === !1)
      throw new m(
        s(i, " has been removed" + (n ? " in " + n : "")),
        m.ERR_DEPRECATED
      );
    return n && !Ce[i] && (Ce[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, u) : !0;
  };
};
function dn(e, t, n) {
  if (typeof e != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const u = e[o], d = u === void 0 || i(u, o, e);
      if (d !== !0)
        throw new m("option " + o + " must be " + d, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new m("Unknown option " + o, m.ERR_BAD_OPTION);
  }
}
const ae = {
  assertOptions: dn,
  validators: Ee
}, g = ae.validators;
class G {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Te(),
      response: new Te()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = j(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && ae.assertOptions(r, {
      silentJSONParsing: g.transitional(g.boolean),
      forcedJSONParsing: g.transitional(g.boolean),
      clarifyTimeoutError: g.transitional(g.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : ae.assertOptions(s, {
      encode: g.function,
      serialize: g.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i;
    i = o && a.merge(
      o.common,
      o[n.method]
    ), i && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete o[f];
      }
    ), n.headers = x.concat(i, o);
    const u = [];
    let d = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(n) === !1 || (d = d && h.synchronous, u.unshift(h.fulfilled, h.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(h) {
      c.push(h.fulfilled, h.rejected);
    });
    let l, p = 0, E;
    if (!d) {
      const f = [Ne.bind(this), void 0];
      for (f.unshift.apply(f, u), f.push.apply(f, c), E = f.length, l = Promise.resolve(n); p < E; )
        l = l.then(f[p++], f[p++]);
      return l;
    }
    E = u.length;
    let y = n;
    for (p = 0; p < E; ) {
      const f = u[p++], h = u[p++];
      try {
        y = f(y);
      } catch (T) {
        h.call(this, T);
        break;
      }
    }
    try {
      l = Ne.call(this, y);
    } catch (f) {
      return Promise.reject(f);
    }
    for (p = 0, E = c.length; p < E; )
      l = l.then(c[p++], c[p++]);
    return l;
  }
  getUri(t) {
    t = j(this.defaults, t);
    const n = We(t.baseURL, t.url);
    return ze(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(t) {
  G.prototype[t] = function(n, r) {
    return this.request(j(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, u) {
      return this.request(j(u || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  G.prototype[t] = n(), G.prototype[t + "Form"] = n(!0);
});
const K = G;
class be {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners)
        return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((u) => {
        r.subscribe(u), o = u;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, u) {
      r.reason || (r.reason = new z(o, i, u), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new be(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const pn = be;
function hn(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function mn(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const ce = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(ce).forEach(([e, t]) => {
  ce[t] = e;
});
const yn = ce;
function Ge(e) {
  const t = new K(e), n = Fe(K.prototype.request, t);
  return a.extend(n, K.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Ge(j(e, s));
  }, n;
}
const w = Ge(we);
w.Axios = K;
w.CanceledError = z;
w.CancelToken = pn;
w.isCancel = $e;
w.VERSION = Ke;
w.toFormData = Z;
w.AxiosError = m;
w.Cancel = w.CanceledError;
w.all = function(t) {
  return Promise.all(t);
};
w.spread = hn;
w.isAxiosError = mn;
w.mergeConfig = j;
w.AxiosHeaders = x;
w.formToJSON = (e) => Ve(a.isHTMLForm(e) ? new FormData(e) : e);
w.HttpStatusCode = yn;
w.default = w;
const wn = w;
class H {
  constructor({ path: t }) {
    b(this, "url", ve);
    b(this, "axios");
    b(this, "path", "");
    this.axios = wn.create({ baseURL: this.url.href }), this.path = t;
  }
  /**
   *
   * @param args {IGet<PT>} request arguments
   * @returns {Promise<AxiosResponse<T[], any>>} get response
   */
  get(t) {
    var n;
    return (n = this.axios) == null ? void 0 : n.get(this.path, {
      ...t == null ? void 0 : t.config,
      params: { ...t == null ? void 0 : t.params }
    });
  }
  /**
   *
   * @param args
   * @param reference - THE TARGET ID
   * @returns
   */
  getOne(t) {
    var n;
    return (n = this.axios) == null ? void 0 : n.get(this.path + "/" + (t == null ? void 0 : t.reference), {
      ...t == null ? void 0 : t.config,
      params: { ...t == null ? void 0 : t.params }
    });
  }
  /**
   * Searches based on the provided parameters.
   * Query Parameters for Artwork Search:
   * @param q: Your search query
   * @param query: For complex queries, you can pass Elasticsearch domain syntax queries here
   * @param sort: Used in conjunction with the query
   * @param from: Starting point of results. Pagination via Elasticsearch conventions
   * @param size: Number of results to return. Pagination via Elasticsearch conventions
   * @param facets: A comma-separated list of 'count' aggregation facets to include in the results.
   * @returns {Promise<AxiosResponse<IArtworkSearchResponse, any>} search results
   *
   */
  search({
    config: t,
    params: n
  }) {
    return this.axios.get(this.path + "/search", {
      ...t,
      params: n
    });
  }
  // public post(
  //   body: Partial<T>,
  //   config?: AxiosRequestConfig
  // ): Promise<AxiosResponse<T, any>> {
  //   return this.axios?.post<T>(this.path, body, config);
  // }
  // public patch(body: Partial<T>, config?: AxiosRequestConfig) {
  //   return this.axios?.patch<T>(this.path, body, config);
  // }
  // public put(body: Partial<T>, config?: AxiosRequestConfig) {
  //   return this.axios?.put<T>(this.path, body, config);
  // }
  // public delete(reference: string | number) {
  //   return this.axios?.delete<T>(this.path + "/" + reference);
  // }
}
const N = class N extends H {
  constructor() {
    super({ path: I.agents });
  }
  /**
   ** AgentService INSTANCE
   */
  static get getInstance() {
    return N.instance || (N.instance = new N()), N.instance;
  }
};
b(N, "instance", null);
let ue = N;
const P = class P extends H {
  constructor() {
    super({ path: I.artworks });
  }
  /**
   ** ARTWORK INSTANCE
   */
  static get getInstance() {
    return P.instance || (P.instance = new P()), P.instance;
  }
};
b(P, "instance", null);
let le = P;
const C = class C extends H {
  constructor() {
    super({ path: I.exhibitions });
  }
  /**
   ** ExhibitionsService INSTANCE
   */
  static get getInstance() {
    return C.instance || (C.instance = new C()), C.instance;
  }
};
b(C, "instance", null);
let fe = C;
const F = class F extends H {
  constructor() {
    super({ path: I.galleries });
  }
  /**
   ** GalleryService INSTANCE
   */
  static get getInstance() {
    return F.instance || (F.instance = new F()), F.instance;
  }
};
b(F, "instance", null);
let de = F;
const B = class B extends H {
  constructor() {
    super({ path: I.places });
  }
  /**
   ** PlaceService INSTANCE
   */
  static get getInstance() {
    return B.instance || (B.instance = new B()), B.instance;
  }
};
b(B, "instance", null);
let pe = B;
const L = class L extends H {
  constructor() {
    super({ path: I.products });
  }
  /**
   ** ProductService INSTANCE
   */
  static get getInstance() {
    return L.instance || (L.instance = new L()), L.instance;
  }
};
b(L, "instance", null);
let he = L;
class U {
}
b(U, "agent", ue.getInstance), b(U, "artwork", le.getInstance), b(U, "exhibition", fe.getInstance), b(U, "product", he.getInstance), b(U, "place", pe.getInstance), b(U, "gallery", de.getInstance);
export {
  U as Default
};
