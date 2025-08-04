(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [845],
  {
    30903: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/roadmap",
        function () {
          return r(90329);
        },
      ]);
    },
    90329: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return N;
          },
        });
      var n = r(52322),
        a = (r(2784), r(5924)),
        l = r(55351),
        i = r(16223),
        o = r(3440),
        c = r.n(o),
        d = r(88299),
        s = r(66909),
        u = {
          src: "/_next/static/media/check_circle.3d8ded40.svg",
          height: 12,
          width: 12,
        },
        m = {
          src: "/_next/static/media/check_circle_empty.a1b1f143.svg",
          height: 12,
          width: 12,
        },
        f = function (e) {
          var t = e.title,
            r = void 0 === t ? "CREATE STORYBOOK ITEM" : t,
            a = e.dateCompleted,
            l = e.reverse;
          return (0, n.jsxs)("div", {
            className: "".concat(l ? "md:justify-end md:text-right" : ""),
            children: [
              (0, n.jsx)(s.K9, {
                arrowLeft: l,
                reverse: l,
                className: "text-xl",
                children: r,
              }),
              (0, n.jsx)(s.oT, {
                reverse: l,
                prefix: a
                  ? (0, n.jsx)("img", {
                      style: { margin: "auto" },
                      alt: "check-circle",
                      src: "object" === typeof u ? u.src : u,
                    })
                  : (0, n.jsx)("img", {
                      style: { margin: "auto" },
                      alt: "check-circle-empty",
                      src: "object" === typeof m ? m.src : m,
                    }),
                className: "text-sm",
                contentClassName: "w-auto",
                textColor: "gray-flat",
                prefixColor: a ? "green" : "gray-flat",
                children: a
                  ? "COMPLETED ".concat((0, d.Z)(a, "MMMM yyyy"))
                  : "IN PROGRESS",
              }),
            ],
          });
        };
      function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function h(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable;
              })
            )),
            n.forEach(function (t) {
              h(e, t, r[t]);
            });
        }
        return e;
      }
      function x(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                l = [],
                i = !0,
                o = !1;
              try {
                for (
                  r = r.call(e);
                  !(i = (n = r.next()).done) &&
                  (l.push(n.value), !t || l.length !== t);
                  i = !0
                );
              } catch (c) {
                (o = !0), (a = c);
              } finally {
                try {
                  i || null == r.return || r.return();
                } finally {
                  if (o) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return p(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(r);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return p(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var C = function (e) {
          var t = e.children,
            r = e.padding,
            a = e.reverse;
          return (0, n.jsxs)("div", {
            className:
              "relative text-left flex flex-row-reverse md:flex-row".concat(
                a ? "" : "-reverse",
                " items-stretch w-full flex-1 "
              ),
            children: [
              (0, n.jsx)("div", {
                className: "flex-1 "
                  .concat(r ? "my-4" : "", " flex md:self-")
                  .concat(
                    a ? "start md:justify-end md:rtext-right" : "end",
                    "\n        "
                  ),
                children: t,
              }),
              (0, n.jsx)("div", {
                className:
                  "border-l-2 mx-4 text-green bg-green text-shadow-none",
              }),
              (0, n.jsx)("div", { className: "md:flex-1" }),
            ],
          });
        },
        b = function (e) {
          var t = e.items,
            r = c()(t, function (e) {
              return (0, d.Z)(e.date, "yyyy");
            });
          return (0, n.jsx)("div", {
            className: "flex flex-col items-end",
            children: Object.entries(r)
              .reverse()
              .map(function (e) {
                var t = x(e, 2),
                  r = t[0],
                  a = t[1];
                return (0, n.jsxs)("div", {
                  className: "mb-12 w-full",
                  style: { borderColor: "#00ff8b" },
                  children: [
                    (0, n.jsx)(C, {
                      children: (0, n.jsx)(s.lT, {
                        className: "text-2xl",
                        children: r,
                      }),
                    }),
                    a.map(function (e, t) {
                      return (0,
                      n.jsx)(C, { reverse: t % 2 === 0, padding: !0, children: (0, n.jsx)(f, y({ reverse: t % 2 === 0 }, e)) });
                    }),
                  ],
                });
              }),
          });
        };
      function O(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var v = [
          {
            title: "Launch project website",
            date: "2025-1-13",
          },
          {
            title: "Publish product roadmap and delivery timeline",
            // dateCompleted: "2024-12-13",
            date: "2025-1-13",
          },
          {
            title:
              "Complete high level architecture and publish system schematics",
            // dateCompleted: "2025-01-01",
            date: "2025-02-01",
          },
          {
            title: "Publish project _paper",
            // dateCompleted: "2025-01-01",
            date: "2025-02-01",
          },
          {
            title: "Undertake initial seed round",
            date: "2025-02-01",
          },
          { title: "Complete Public IDO", date: "2025-02-01" },
          { title: "0x_BIOS Airdrops", date: "2025-02-01" },
          { title: "Core platform architecture", date: "2025-06-01" },
          {
            title: "Platform deposits and withdrawals",
            date: "2025-09-01",
          },
          { title: "3Farm strategy framework", date: "2025-10-01" },
          { title: "Security audits", date: "2025-12-01" },
          { title: "Mainnet Launch", date: "2025-10-01" },
          { title: "Launch on POLYGON", date: "2025-12-02" },
          { title: "LAUNCH ON FANTOM", date: "2025-12-02" },
          { title: "LAUNCH ON AVALANCHE", date: "2025-12-02" },
          { title: "LAUNCH ON BSC", date: "2025-12-02" },
          {
            title: "Marketing site redesign and launch",
            date: "2026-02-17",
          },
          {
            title: "App Interface Redesign and Launch",
            date: "2026-02-18",
          },
          {
            title: 'DYNAMIC STRATEGIES ("AUTOPOOLING")',
            date: "2026-02-01",
          },
          { title: "UNIV3 DYNAMIC RANGE ORDER STRATEGIES", date: "2026-04-29" },
          {
            title:
              'TRANSPORT LAYER FOR INTERACTION BETWEEN CHAINS ("INTERCONNECTS")',
            date: "2026-05-01",
          },
          { title: "COMPOUNDING STRATEGIES", date: "2026-05-01" },
        ]
          .reverse()
          .map(function (e) {
            return (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                  n = Object.keys(r);
                "function" === typeof Object.getOwnPropertySymbols &&
                  (n = n.concat(
                    Object.getOwnPropertySymbols(r).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(r, e).enumerable;
                    })
                  )),
                  n.forEach(function (t) {
                    O(e, t, r[t]);
                  });
              }
              return e;
            })({}, e, {
              date: new Date(e.date || e.dateCompleted),
              dateCompleted: e.dateCompleted && new Date(e.dateCompleted),
            });
          }),
        N = function () {
          return (0, n.jsxs)(a.Z, {
            children: [
              (0, n.jsx)(l.PB, { title: "Roadmap" }),
              (0, n.jsx)(i.S0, {
                prefix: "",
                title: (0, n.jsx)(n.Fragment, {
                  children: (0, n.jsxs)("h1", {
                    className: "text-5xl",
                    children: [
                      "0xNODE ",
                      (0, n.jsx)("span", {
                        className: "text-green",
                        children: "ROADMAP",
                      }),
                    ],
                  }),
                }),
                className: "container",
                children: (0, n.jsx)(b, { items: v }),
              }),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [982, 226, 199, 602, 440, 71, 495, 774, 888, 179], function () {
      return (t = 30903), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
