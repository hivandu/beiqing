/**
 * Created by Hivan Du on 2016/12/8.
 */
!function (win) {
  var module = {
    fromQueryString: function (o, e) {
      var n, r, i, a, s, l, d, c, u, f, m, p, h, g, v = o.replace(/^\?/, "").split("&"), b = {};
      for (s = 0, l = v.length; l > s; s++)if (d = v[s], d.length > 0)if (r = d.split("="), i = decodeURIComponent(r[0]), a = void 0 !== r[1] ? decodeURIComponent(r[1]) : "", e) {
        if (f = i.match(/(\[):?([^\]]*)\]/g), m = i.match(/^([^\[]+)/), !m)throw new Error('[jQuery.util.fromQueryString] Malformed query string given, failed parsing name from "' + d + '"');
        if (i = m[0], p = [], null === f) {
          b[i] = a;
          continue
        }
        for (c = 0, u = f.length; u > c; c++)h = f[c], h = 2 === h.length ? "" : h.substring(1, h.length - 1), p.push(h);
        for (p.unshift(i), n = b, c = 0, u = p.length; u > c; c++)h = p[c], c === u - 1 ? t.isArray(n) && "" === h ? n.push(a) : n[h] = a : ((void 0 === n[h] || "string" == typeof n[h]) && (g = p[c + 1], n[h] = t.isNumeric(g) || "" === g ? [] : {}), n = n[h])
      } else b.hasOwnProperty(i) ? (t.isArray(b[i]) || (b[i] = [b[i]]), b[i].push(a)) : b[i] = a;
      return b
    }
    ,getParameter: function (t) {
      var o = this.fromQueryString(decodeURIComponent(window.location.search))[t];
      return o ? o : null
    }
    ,toFixed: function(fractionDigits) {
      var value = this, precision = fractionDigits;
      precision = precision || 0;
      var pow = Math.pow(10, precision);
      return (Math.round(value * pow) / pow).toFixed(precision);
    }
  }
  win['WebUtil'] = module;
}(window);
