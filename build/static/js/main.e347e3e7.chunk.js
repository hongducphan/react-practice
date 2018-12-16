(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    16: function(e, t, n) {
      e.exports = n(25);
    },
    21: function(e, t, n) {},
    25: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(1),
        r = n.n(a),
        c = n(3),
        u = n.n(c),
        o = (n(21), n(4)),
        i = n(5),
        l = n(7),
        s = n(6),
        p = n(8),
        m = (function(e) {
          function t() {
            return (
              Object(o.a)(this, t),
              Object(l.a)(this, Object(s.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(p.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  return r.a.createElement("input", {
                    type: "text",
                    value: this.props.nameValue
                  });
                }
              }
            ]),
            t
          );
        })(a.Component),
        b = n(15),
        h = (function(e) {
          function t(e) {
            var n;
            return (
              Object(o.a)(this, t),
              ((n = Object(l.a)(this, Object(s.a)(t).call(this, e))).state = {
                nameValue: "Duc Phan"
              }),
              n
            );
          }
          return (
            Object(p.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function() {
                  return r.a.createElement(
                    "div",
                    null,
                    r.a.createElement(m, { nameValue: this.state.nameValue }),
                    r.a.createElement(b.a, { color: "primary" }, "Show Modal"),
                    " "
                  );
                }
              }
            ]),
            t
          );
        })(a.Component);
      u.a.render(r.a.createElement(h, null), document.getElementById("root"));
    }
  },
  [[16, 2, 1]]
]);
//# sourceMappingURL=main.e347e3e7.chunk.js.map
