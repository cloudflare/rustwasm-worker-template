// build/worker/shim.mjs
import I from "./5aefce4dd64d3eba8f8123eab8426752fb109f32-index.wasm";
var W = Object.defineProperty;
var $ = (e, t) => {
  for (var n in t)
    W(e, n, { get: t[n], enumerable: true });
};
var w = {};
$(w, { IntoUnderlyingByteSource: () => M, IntoUnderlyingSink: () => T, IntoUnderlyingSource: () => S, MinifyConfig: () => C, PipeOptions: () => L, PolishConfig: () => K, QueuingStrategy: () => q, ReadableStreamGetReaderOptions: () => F, RequestRedirect: () => X, __wbg_buffer_3f3d764d4747d564: () => Vt, __wbg_buffer_610b70c8fd30da2d: () => at, __wbg_byobRequest_a3c74c3694777d1b: () => it, __wbg_byteLength_1fef7842ca4200fa: () => pt, __wbg_byteOffset_ede786cfcf88d3dd: () => dt, __wbg_bytesliteral_efe7d360639bf32b: () => lt, __wbg_call_168da88779e35f61: () => Wt, __wbg_cf_39b771fa14f2a306: () => Ot, __wbg_close_045ed342139beb7d: () => ut, __wbg_close_a41954830b65c455: () => ct, __wbg_constructor_20fd216941fe9866: () => Nt, __wbg_enqueue_3a8a8e67e44d2567: () => st, __wbg_error_f7214ae7db04600c: () => tt, __wbg_formData_59462580e5ad0333: () => Et, __wbg_get_765201544a2b6869: () => qt, __wbg_get_964ac3a6e1b332de: () => Ct, __wbg_headers_f532fe1451246dc2: () => kt, __wbg_instanceof_Error_56b496a10a56de66: () => Rt, __wbg_instanceof_File_1180804f88c1496c: () => Lt, __wbg_latitude_31ff2ecb9665eb67: () => yt, __wbg_length_9e1ae1900cb0fbd5: () => Xt, __wbg_log_90b96707fdde4735: () => St, __wbg_longitude_3dde61f94e0ccf98: () => mt, __wbg_method_49c95fd930dbf052: () => jt, __wbg_name_da379f055623f0d3: () => $t, __wbg_new0_a57059d72c5b7aee: () => It, __wbg_new_0b9bfdd97583284e: () => Ft, __wbg_new_8d2af00bc1e329ee: () => vt, __wbg_new_9962f939219f1820: () => Ut, __wbg_new_a99726b0abef495b: () => G, __wbg_new_c0452133ff89f108: () => Mt, __wbg_newwithbyteoffsetandlength_d9aa266703cb98be: () => Bt, __wbg_newwithlength_f5933855e4f48a19: () => Yt, __wbg_newwithoptstrandinit_54154dc29fd0b227: () => wt, __wbg_newwithoptstreamandinit_4d872a5331b03046: () => ht, __wbg_newwithoptu8arrayandinit_dc996cec531611bc: () => gt, __wbg_region_5484949bd23277f1: () => xt, __wbg_resolve_99fe17964f31ffc0: () => Ht, __wbg_respond_f4778bef04e912a6: () => bt, __wbg_set_0ee2e91570c4cd85: () => Tt, __wbg_set_83db9690f9353e79: () => Kt, __wbg_set_bf3f89b92d5a34bf: () => Zt, __wbg_stack_4931b18709aff089: () => Q, __wbg_then_11f7a54d67b4bfad: () => Pt, __wbg_then_cedad20fbbd9418a: () => Jt, __wbg_toString_73c9b562dccf34bd: () => Dt, __wbg_toString_ebbc1ea13498da35: () => zt, __wbg_url_031236c2d2eef60c: () => At, __wbg_view_d1a31268af734e5d: () => ft, __wbindgen_cb_drop: () => rt, __wbindgen_closure_wrapper685: () => ee, __wbindgen_debug_string: () => Gt, __wbindgen_is_undefined: () => _t, __wbindgen_memory: () => te, __wbindgen_number_new: () => et, __wbindgen_object_clone_ref: () => ot, __wbindgen_object_drop_ref: () => Y, __wbindgen_string_get: () => Z, __wbindgen_string_new: () => nt, __wbindgen_throw: () => Qt, fetch: () => R });
function v() {
  return "bytes";
}
var z = new WebAssembly.Instance(I, { "./index_bg.js": w });
var r = z.exports;
var p = new Array(32).fill(void 0);
p.push(void 0, null, true, false);
function o(e) {
  return p[e];
}
var m = p.length;
function N(e) {
  e < 36 || (p[e] = m, m = e);
}
function a(e) {
  let t = o(e);
  return N(e), t;
}
var d = 0;
var k = new Uint8Array();
function j() {
  return k.byteLength === 0 && (k = new Uint8Array(r.memory.buffer)), k;
}
var U = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
var A = new U("utf-8");
var H = typeof A.encodeInto == "function" ? function(e, t) {
  return A.encodeInto(e, t);
} : function(e, t) {
  let n = A.encode(e);
  return t.set(n), { read: e.length, written: n.length };
};
function h(e, t, n) {
  if (n === void 0) {
    let u = A.encode(e), x = t(u.length);
    return j().subarray(x, x + u.length).set(u), d = u.length, x;
  }
  let _ = e.length, c = t(_), b = j(), i = 0;
  for (; i < _; i++) {
    let u = e.charCodeAt(i);
    if (u > 127)
      break;
    b[c + i] = u;
  }
  if (i !== _) {
    i !== 0 && (e = e.slice(i)), c = n(c, _, _ = i + e.length * 3);
    let u = j().subarray(c + i, c + _);
    i += H(e, u).written;
  }
  return d = i, c;
}
function y(e) {
  return e == null;
}
var E = new Int32Array();
function f() {
  return E.byteLength === 0 && (E = new Int32Array(r.memory.buffer)), E;
}
function s(e) {
  m === p.length && p.push(p.length + 1);
  let t = m;
  return m = p[t], p[t] = e, t;
}
var P = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
var D = new P("utf-8", { ignoreBOM: true, fatal: true });
D.decode();
function l(e, t) {
  return D.decode(j().subarray(e, e + t));
}
function O(e) {
  let t = typeof e;
  if (t == "number" || t == "boolean" || e == null)
    return `${e}`;
  if (t == "string")
    return `"${e}"`;
  if (t == "symbol") {
    let c = e.description;
    return c == null ? "Symbol" : `Symbol(${c})`;
  }
  if (t == "function") {
    let c = e.name;
    return typeof c == "string" && c.length > 0 ? `Function(${c})` : "Function";
  }
  if (Array.isArray(e)) {
    let c = e.length, b = "[";
    c > 0 && (b += O(e[0]));
    for (let i = 1; i < c; i++)
      b += ", " + O(e[i]);
    return b += "]", b;
  }
  let n = /\[object ([^\]]+)\]/.exec(toString.call(e)), _;
  if (n.length > 1)
    _ = n[1];
  else
    return toString.call(e);
  if (_ == "Object")
    try {
      return "Object(" + JSON.stringify(e) + ")";
    } catch {
      return "Object";
    }
  return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : _;
}
function J(e, t, n, _) {
  let c = { a: e, b: t, cnt: 1, dtor: n }, b = (...i) => {
    c.cnt++;
    let u = c.a;
    c.a = 0;
    try {
      return _(u, c.b, ...i);
    } finally {
      --c.cnt === 0 ? r.__wbindgen_export_2.get(c.dtor)(u, c.b) : c.a = u;
    }
  };
  return b.original = c, b;
}
function V(e, t, n) {
  r._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h5850f420f0a8778a(e, t, s(n));
}
function R(e, t, n) {
  let _ = r.fetch(s(e), s(t), s(n));
  return a(_);
}
function g(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    r.__wbindgen_exn_store(s(n));
  }
}
function B(e, t, n, _) {
  r.wasm_bindgen__convert__closures__invoke2_mut__h1bd1ef44baaa6b75(e, t, s(n), s(_));
}
var K = Object.freeze({ Off: 0, 0: "Off", Lossy: 1, 1: "Lossy", Lossless: 2, 2: "Lossless" });
var X = Object.freeze({ Error: 0, 0: "Error", Follow: 1, 1: "Follow", Manual: 2, 2: "Manual" });
var M = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_intounderlyingbytesource_free(t);
  }
  get type() {
    let t = r.intounderlyingbytesource_type(this.ptr);
    return a(t);
  }
  get autoAllocateChunkSize() {
    return r.intounderlyingbytesource_autoAllocateChunkSize(this.ptr) >>> 0;
  }
  start(t) {
    r.intounderlyingbytesource_start(this.ptr, s(t));
  }
  pull(t) {
    let n = r.intounderlyingbytesource_pull(this.ptr, s(t));
    return a(n);
  }
  cancel() {
    let t = this.__destroy_into_raw();
    r.intounderlyingbytesource_cancel(t);
  }
};
var T = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_intounderlyingsink_free(t);
  }
  write(t) {
    let n = r.intounderlyingsink_write(this.ptr, s(t));
    return a(n);
  }
  close() {
    let t = this.__destroy_into_raw(), n = r.intounderlyingsink_close(t);
    return a(n);
  }
  abort(t) {
    let n = this.__destroy_into_raw(), _ = r.intounderlyingsink_abort(n, s(t));
    return a(_);
  }
};
var S = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_intounderlyingsource_free(t);
  }
  pull(t) {
    let n = r.intounderlyingsource_pull(this.ptr, s(t));
    return a(n);
  }
  cancel() {
    let t = this.__destroy_into_raw();
    r.__wbg_intounderlyingsource_free(t);
  }
};
var C = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_minifyconfig_free(t);
  }
  get js() {
    return r.__wbg_get_minifyconfig_js(this.ptr) !== 0;
  }
  set js(t) {
    r.__wbg_set_minifyconfig_js(this.ptr, t);
  }
  get html() {
    return r.__wbg_get_minifyconfig_html(this.ptr) !== 0;
  }
  set html(t) {
    r.__wbg_set_minifyconfig_html(this.ptr, t);
  }
  get css() {
    return r.__wbg_get_minifyconfig_css(this.ptr) !== 0;
  }
  set css(t) {
    r.__wbg_set_minifyconfig_css(this.ptr, t);
  }
};
var L = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_pipeoptions_free(t);
  }
  get preventClose() {
    return r.pipeoptions_preventClose(this.ptr) !== 0;
  }
  get preventCancel() {
    return r.pipeoptions_preventCancel(this.ptr) !== 0;
  }
  get preventAbort() {
    return r.pipeoptions_preventAbort(this.ptr) !== 0;
  }
  get signal() {
    let t = r.pipeoptions_signal(this.ptr);
    return a(t);
  }
};
var q = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_queuingstrategy_free(t);
  }
  get highWaterMark() {
    return r.queuingstrategy_highWaterMark(this.ptr);
  }
};
var F = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_readablestreamgetreaderoptions_free(t);
  }
  get mode() {
    let t = r.readablestreamgetreaderoptions_mode(this.ptr);
    return a(t);
  }
};
function Y(e) {
  a(e);
}
function Z(e, t) {
  let n = o(t), _ = typeof n == "string" ? n : void 0;
  var c = y(_) ? 0 : h(_, r.__wbindgen_malloc, r.__wbindgen_realloc), b = d;
  f()[e / 4 + 1] = b, f()[e / 4 + 0] = c;
}
function G() {
  let e = new Error();
  return s(e);
}
function Q(e, t) {
  let n = o(t).stack, _ = h(n, r.__wbindgen_malloc, r.__wbindgen_realloc), c = d;
  f()[e / 4 + 1] = c, f()[e / 4 + 0] = _;
}
function tt(e, t) {
  try {
    console.error(l(e, t));
  } finally {
    r.__wbindgen_free(e, t);
  }
}
function et(e) {
  return s(e);
}
function nt(e, t) {
  let n = l(e, t);
  return s(n);
}
function rt(e) {
  let t = a(e).original;
  return t.cnt-- == 1 ? (t.a = 0, true) : false;
}
function ot(e) {
  let t = o(e);
  return s(t);
}
function _t(e) {
  return o(e) === void 0;
}
function ct(e) {
  o(e).close();
}
function st(e, t) {
  o(e).enqueue(o(t));
}
function it(e) {
  let t = o(e).byobRequest;
  return y(t) ? 0 : s(t);
}
function ut(e) {
  o(e).close();
}
function ft(e) {
  let t = o(e).view;
  return y(t) ? 0 : s(t);
}
function bt(e, t) {
  o(e).respond(t >>> 0);
}
function at(e) {
  let t = o(e).buffer;
  return s(t);
}
function dt(e) {
  return o(e).byteOffset;
}
function pt(e) {
  return o(e).byteLength;
}
function lt() {
  let e = v();
  return s(e);
}
function gt() {
  return g(function(e, t) {
    let n = new Response(a(e), o(t));
    return s(n);
  }, arguments);
}
function wt() {
  return g(function(e, t, n) {
    let _ = new Response(e === 0 ? void 0 : l(e, t), o(n));
    return s(_);
  }, arguments);
}
function ht() {
  return g(function(e, t) {
    let n = new Response(a(e), o(t));
    return s(n);
  }, arguments);
}
function yt(e, t) {
  let n = o(t).latitude;
  var _ = y(n) ? 0 : h(n, r.__wbindgen_malloc, r.__wbindgen_realloc), c = d;
  f()[e / 4 + 1] = c, f()[e / 4 + 0] = _;
}
function mt(e, t) {
  let n = o(t).longitude;
  var _ = y(n) ? 0 : h(n, r.__wbindgen_malloc, r.__wbindgen_realloc), c = d;
  f()[e / 4 + 1] = c, f()[e / 4 + 0] = _;
}
function xt(e, t) {
  let n = o(t).region;
  var _ = y(n) ? 0 : h(n, r.__wbindgen_malloc, r.__wbindgen_realloc), c = d;
  f()[e / 4 + 1] = c, f()[e / 4 + 0] = _;
}
function jt(e, t) {
  let n = o(t).method, _ = h(n, r.__wbindgen_malloc, r.__wbindgen_realloc), c = d;
  f()[e / 4 + 1] = c, f()[e / 4 + 0] = _;
}
function At(e, t) {
  let n = o(t).url, _ = h(n, r.__wbindgen_malloc, r.__wbindgen_realloc), c = d;
  f()[e / 4 + 1] = c, f()[e / 4 + 0] = _;
}
function kt(e) {
  let t = o(e).headers;
  return s(t);
}
function Et() {
  return g(function(e) {
    let t = o(e).formData();
    return s(t);
  }, arguments);
}
function Ot(e) {
  let t = o(e).cf;
  return s(t);
}
function Mt() {
  return g(function() {
    let e = new Headers();
    return s(e);
  }, arguments);
}
function Tt() {
  return g(function(e, t, n, _, c) {
    o(e).set(l(t, n), l(_, c));
  }, arguments);
}
function St(e, t) {
  console.log(l(e, t));
}
function Ct(e, t, n) {
  let _ = o(e).get(l(t, n));
  return s(_);
}
function Lt(e) {
  let t;
  try {
    t = o(e) instanceof File;
  } catch {
    t = false;
  }
  return t;
}
function qt() {
  return g(function(e, t) {
    let n = Reflect.get(o(e), o(t));
    return s(n);
  }, arguments);
}
function Ft() {
  let e = new Object();
  return s(e);
}
function Rt(e) {
  let t;
  try {
    t = o(e) instanceof Error;
  } catch {
    t = false;
  }
  return t;
}
function vt(e, t) {
  let n = new Error(l(e, t));
  return s(n);
}
function Dt(e) {
  let t = o(e).toString();
  return s(t);
}
function Wt() {
  return g(function(e, t, n) {
    let _ = o(e).call(o(t), o(n));
    return s(_);
  }, arguments);
}
function $t(e) {
  let t = o(e).name;
  return s(t);
}
function It() {
  let e = new Date();
  return s(e);
}
function zt(e) {
  let t = o(e).toString();
  return s(t);
}
function Nt(e) {
  let t = o(e).constructor;
  return s(t);
}
function Ut(e, t) {
  try {
    var n = { a: e, b: t }, _ = (b, i) => {
      let u = n.a;
      n.a = 0;
      try {
        return B(u, n.b, b, i);
      } finally {
        n.a = u;
      }
    };
    let c = new Promise(_);
    return s(c);
  } finally {
    n.a = n.b = 0;
  }
}
function Ht(e) {
  let t = Promise.resolve(o(e));
  return s(t);
}
function Pt(e, t) {
  let n = o(e).then(o(t));
  return s(n);
}
function Jt(e, t, n) {
  let _ = o(e).then(o(t), o(n));
  return s(_);
}
function Vt(e) {
  let t = o(e).buffer;
  return s(t);
}
function Bt(e, t, n) {
  let _ = new Uint8Array(o(e), t >>> 0, n >>> 0);
  return s(_);
}
function Kt(e, t, n) {
  o(e).set(o(t), n >>> 0);
}
function Xt(e) {
  return o(e).length;
}
function Yt(e) {
  let t = new Uint8Array(e >>> 0);
  return s(t);
}
function Zt() {
  return g(function(e, t, n) {
    return Reflect.set(o(e), o(t), o(n));
  }, arguments);
}
function Gt(e, t) {
  let n = O(o(t)), _ = h(n, r.__wbindgen_malloc, r.__wbindgen_realloc), c = d;
  f()[e / 4 + 1] = c, f()[e / 4 + 0] = _;
}
function Qt(e, t) {
  throw new Error(l(e, t));
}
function te() {
  let e = r.memory;
  return s(e);
}
function ee(e, t, n) {
  let _ = J(e, t, 99, V);
  return s(_);
}
var ie = { fetch: R, scheduled: void 0 };
export {
  M as IntoUnderlyingByteSource,
  T as IntoUnderlyingSink,
  S as IntoUnderlyingSource,
  C as MinifyConfig,
  L as PipeOptions,
  K as PolishConfig,
  q as QueuingStrategy,
  F as ReadableStreamGetReaderOptions,
  X as RequestRedirect,
  Vt as __wbg_buffer_3f3d764d4747d564,
  at as __wbg_buffer_610b70c8fd30da2d,
  it as __wbg_byobRequest_a3c74c3694777d1b,
  pt as __wbg_byteLength_1fef7842ca4200fa,
  dt as __wbg_byteOffset_ede786cfcf88d3dd,
  lt as __wbg_bytesliteral_efe7d360639bf32b,
  Wt as __wbg_call_168da88779e35f61,
  Ot as __wbg_cf_39b771fa14f2a306,
  ut as __wbg_close_045ed342139beb7d,
  ct as __wbg_close_a41954830b65c455,
  Nt as __wbg_constructor_20fd216941fe9866,
  st as __wbg_enqueue_3a8a8e67e44d2567,
  tt as __wbg_error_f7214ae7db04600c,
  Et as __wbg_formData_59462580e5ad0333,
  qt as __wbg_get_765201544a2b6869,
  Ct as __wbg_get_964ac3a6e1b332de,
  kt as __wbg_headers_f532fe1451246dc2,
  Rt as __wbg_instanceof_Error_56b496a10a56de66,
  Lt as __wbg_instanceof_File_1180804f88c1496c,
  yt as __wbg_latitude_31ff2ecb9665eb67,
  Xt as __wbg_length_9e1ae1900cb0fbd5,
  St as __wbg_log_90b96707fdde4735,
  mt as __wbg_longitude_3dde61f94e0ccf98,
  jt as __wbg_method_49c95fd930dbf052,
  $t as __wbg_name_da379f055623f0d3,
  It as __wbg_new0_a57059d72c5b7aee,
  Ft as __wbg_new_0b9bfdd97583284e,
  vt as __wbg_new_8d2af00bc1e329ee,
  Ut as __wbg_new_9962f939219f1820,
  G as __wbg_new_a99726b0abef495b,
  Mt as __wbg_new_c0452133ff89f108,
  Bt as __wbg_newwithbyteoffsetandlength_d9aa266703cb98be,
  Yt as __wbg_newwithlength_f5933855e4f48a19,
  wt as __wbg_newwithoptstrandinit_54154dc29fd0b227,
  ht as __wbg_newwithoptstreamandinit_4d872a5331b03046,
  gt as __wbg_newwithoptu8arrayandinit_dc996cec531611bc,
  xt as __wbg_region_5484949bd23277f1,
  Ht as __wbg_resolve_99fe17964f31ffc0,
  bt as __wbg_respond_f4778bef04e912a6,
  Tt as __wbg_set_0ee2e91570c4cd85,
  Kt as __wbg_set_83db9690f9353e79,
  Zt as __wbg_set_bf3f89b92d5a34bf,
  Q as __wbg_stack_4931b18709aff089,
  Pt as __wbg_then_11f7a54d67b4bfad,
  Jt as __wbg_then_cedad20fbbd9418a,
  Dt as __wbg_toString_73c9b562dccf34bd,
  zt as __wbg_toString_ebbc1ea13498da35,
  At as __wbg_url_031236c2d2eef60c,
  ft as __wbg_view_d1a31268af734e5d,
  rt as __wbindgen_cb_drop,
  ee as __wbindgen_closure_wrapper685,
  Gt as __wbindgen_debug_string,
  _t as __wbindgen_is_undefined,
  te as __wbindgen_memory,
  et as __wbindgen_number_new,
  ot as __wbindgen_object_clone_ref,
  Y as __wbindgen_object_drop_ref,
  Z as __wbindgen_string_get,
  nt as __wbindgen_string_new,
  Qt as __wbindgen_throw,
  ie as default,
  R as fetch
};
//# sourceMappingURL=shim.js.map
