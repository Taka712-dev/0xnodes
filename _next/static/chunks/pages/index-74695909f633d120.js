(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8738: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(84053);
        },
      ]);
    },
    85615: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(52322),
        a = (n(2784), n(16223)),
        s = {
          src: "/_next/static/media/diagram_desktop.0ab2aabe.svg",
          height: 758,
          width: 1382,
        },
        i = {
          src: "/_next/static/media/diagram_mobile.e9045176.svg",
          height: 673,
          width: 367,
        };
      function c(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              c(e, t, n[t]);
            });
        }
        return e;
      }
      var o = function () {
        return (0, r.jsxs)(a.S0, {
          title: (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)("span", {
                className: "text-green",
                children: "SYSTEMS.11",
              }),
              " (_KERNEL)",
            ],
          }),
          children: [
            (0, r.jsx)("img", l({}, s, { className: "hidden md:block" })),
            (0, r.jsx)(
              "img",
              l({}, i, { className: "block md:hidden mx-auto" })
            ),
          ],
        });
      };
    },
    17831: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return j;
        },
      });
      var r = n(52322),
        a = (n(2784), n(29558), n(26502)),
        s = "green",
        i = "gray";
      var c = function (e) {
          var t = e.onClick,
            n = e.disabled,
            a = (e.active, e.children),
            c = e.className,
            l = e.color;
          return (0, r.jsx)("button", {
            disabled: n,
            onClick: t,
            className: "\n      "
              .concat(c || "", "\n      p-3 rounded-full\n      ")
              .concat(
                l === s
                  ? "bg-transparent text-white border ".concat(
                      n
                        ? "border-green-dark"
                        : "border-green hover:bg-green-darker hover:border-green"
                    )
                  : l === i
                  ? "bg-transparent hover:bg-gray-darker border border-gray-lighter"
                  : "bg-orange-darkest border ".concat(
                      n
                        ? "border-orange-darker"
                        : "border-orange hover:bg-orange-darker hover:border-orange"
                    ),
                "\n      "
              )
              .concat(
                "".concat(
                  l === s
                    ? n
                      ? "text-green-darker"
                      : "text-green"
                    : l === i
                    ? n
                      ? "text-gray"
                      : "text-gray-lighter"
                    : "white" === l
                    ? n
                      ? "text-gray"
                      : "text-white"
                    : n
                    ? "text-orange-dark"
                    : "text-orange"
                ),
                "\n      "
              )
              .concat(n ? "cursor-default" : "", "\n      // ")
              .concat(c || "", "\n    "),
            children: a,
          });
        },
        l = n(66909),
        o = "/_next/static/media/logo_background.17594b0f.svg",
        d = n(92455),
        u = function () {
          return (0, r.jsxs)("div", {
            className: "flex flex-col justify-center text-center mb-16",
            children: [
              (0, r.jsx)("div", {
                className: "mx-auto text-xl",
                style: {
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                },
                children: (0, r.jsx)(l.lT, {
                  className: "",
                  children: "System TVL",
                }),
              }),
              (0, r.jsx)("div", {
                className: "text-4xl",
                children: "$4,760,214.55",
              }),
            ],
          });
        };
      function x(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              x(e, t, n[t]);
            });
        }
        return e;
      }
      var m = [
          {
            src: "/_next/static/media/token_eth.68bf18e6.svg",
            height: 24,
            width: 24,
          },
          {
            src: "/_next/static/media/token_ftm.9d5a76ee.svg",
            height: 24,
            width: 24,
          },
          {
            src: "/_next/static/media/token_polygon.02c611a7.svg",
            height: 24,
            width: 24,
          },
          {
            src: "/_next/static/media/token_avax.e042323d.svg",
            height: 24,
            width: 24,
          },
          {
            src: "/_next/static/media/token_bsc.fa8f5bcf.svg",
            height: 24,
            width: 24,
          },
          d.Z,
        ],
        g = function (e) {
          var t = e.images,
            n = void 0 === t ? m : t;
          return (0, r.jsx)("div", {
            className: "flex justify-center",
            children: n.map(function (e) {
              return (0,
              r.jsx)("div", { className: "mx-3", children: (0, r.jsx)(c, { disabled: !0, onClick: null, color: "green", children: (0, r.jsx)("img", h({ style: { height: 24, width: 24 } }, e)) }) }, e.src);
            }),
          });
        },
        f = function (e) {
          var t = e.children,
            n = e.imgSrc;
          return (0, r.jsx)("div", {
            className: "vw-100 py-12 h-50vh relative",
            children: (0, r.jsxs)("div", {
              className: "flex flex-col align-center justify-center p-20",
              children: [
                (0, r.jsx)("div", {
                  className:
                    "flex justify-center align-center absolute top-0 right-0 bottom-0 left-0 p-8",
                  children: (0, r.jsx)("img", {
                    className: "m-auto",
                    src: n,
                    style: { opacity: 0.7 },
                  }),
                }),
                (0, r.jsx)("div", { className: "relative", children: t }),
              ],
            }),
          });
        },
        v = function (e) {
          var t = e.prefixContent,
            n = e.title,
            a = void 0 === n ? "Automated Cross-chain yield aggregation <" : n,
            s = e.subtitle,
            i = void 0 === s ? "RECEIVE NATIVE ASSET YIELD" : s,
            c = e.ctaLabel,
            d = void 0 === c ? "ENTER APP" : c,
            x = e.cta,
            h = void 0 === x ? null : x,
            m = e.tvl,
            v = void 0 !== m && m;
          return (0, r.jsxs)(f, {
            imgSrc: o,
            children: [
              (0, r.jsxs)("div", {
                className: "flex flex-col items-center w-full",
                style: { margin: "0px auto", maxWidth: 800 },
                children: [
                  t,
                  (0, r.jsx)(l.lT, { className: "text-4xl my-8", children: a }),
                  i
                    ? (0, r.jsx)(l.oT, {
                        prefix: ">",
                        textColor: "green",
                        className: "w-auto mx-auto text-4xl",
                        children: i,
                      })
                    : null,
                  h ? (0, r.jsx)(b, { label: d }) : null,
                ],
              }),
              v ? (0, r.jsx)(u, {}) : null,
              (0, r.jsxs)("div", {
                className: "flex flex-col items-center w-full",
                style: { margin: "0px auto", maxWidth: 800 },
                children: [
                    (0, r.jsx)(l.lT, { className: "text-4xl my-8", children: "0xcomingsoon" })
                ]
              })
            ],
          });
        };
      (v.TVL = u), (v.Icons = g);
      var b = function (e) {
        var t = e.label;
        return (0, r.jsx)("div", {
          className: "mx-auto my-20",
          style: { margin: "32px auto" },
          children: (0, r.jsx)("a", {
            href: "https://system11.0xnode-ai.pro",
            target: "_blank",
            children: (0, r.jsx)(a.Z, {
              onClick: function () {
                return null;
              },
              className: "text-xl h-16 px-12",
              secondary: !0,
              children: t,
            }),
          }),
        });
      };
      v.CTA = b;
      var j = v;
    },
    84053: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return j;
          },
        });
      var r = n(52322),
        a = (n(2784), n(5924)),
        s = n(85615),
        i = n(17831),
        c = n(26502),
        l = n(66909),
        o = n(42241),
        d = [
          "Listed on Uniswap V2",
          "Twitter Published",
          "Telegram Community",
        ],
        u = function () {
          return (0, r.jsx)("div", {
            className: "my-20 py-20",
            children: (0, r.jsxs)("div", {
              className: "container max-w-1/2 mx-auto",
              children: [
                (0, r.jsx)(l.lT, {
                  className: "text-lg -ml-5",
                  children: "THE ROADMAP",
                }),
                (0, r.jsxs)(l.lT, {
                  prefix: "",
                  className: "text-4xl",
                  children: [
                    "Launch project website ",
                    (0, r.jsx)("span", {
                      className: "text-green ml-6",
                      children: "Q1 2025",
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "my-8",
                  children: d.map(function (e) {
                    return (0,
                    r.jsx)("div", { className: "my-2 pl-2 text-xl", children: (0, r.jsx)(l.lT, { prefix: ">", children: e }) }, e);
                  }),
                }),
                (0, r.jsx)(o.Z, {
                  href: "/roadmap",
                  children: (0, r.jsx)(c.Z, {
                    color: "green",
                    className: "my-8 h-20 px-12",
                    children: "SEE THE FULL ROADMAP",
                  }),
                }),
              ],
            }),
          });
        },
        x = function () {
          return (0, r.jsxs)("div", {
            className: "container my-24",
            children: [
              (0, r.jsx)(l.lT, {
                className: "text-lg",
                children: "THE PROPOSITION",
              }),
              (0, r.jsxs)("div", {
                className: "text-4xl",
                children: [
                  (0, r.jsxs)("span", {
                    className: "text-green",
                    children: ["0xNode AI", " "],
                  }),
                  "was founded to allow anyone to easily generate high APY returns, across any chain (even one they do not own any assets on), with minimal to no gas fees.",
                ],
              }),
              (0, r.jsx)("div", {
                className: "text-lg text-gray-flat",
                children:
                  "You choose how involved you want to be in your investments. Actively manage your funds, making use of our seamless, cross-chain bridging to maximise your options, or set and forget by choosing a strategy curated by our team and we take care of the rest. We hunt down the high APYs, you harvest the yield.",
              }),
            ],
          });
        },
        h = n(89755);
      function m(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              m(e, t, n[t]);
            });
        }
        return e;
      }
      var f = [
          {
            src: "/_next/static/media/investor_launch.1bc182eb.svg",
            height: 64,
            width: 236,
          },
          {
            src: "/_next/static/media/investor_magnus.7caf788b.svg",
            height: 80,
            width: 156,
          },
          {
            src: "/_next/static/media/investor_mw.bf88d217.svg",
            height: 26,
            width: 222,
          },
          {
            src: "/_next/static/media/investor_rarestone.b7020c06.svg",
            height: 32,
            width: 218,
          },
        ],
        v = function (e) {
          var t = e.images,
            n = void 0 === t ? f : t;
          return (0, r.jsx)(r.Fragment, {
            children: n.map(function (e) {
              return (0,
              r.jsx)("div", { className: "mx-auto lg:mx-4 my-12 lg:my-auto w-100 lg:w-1/5", children: (0, r.jsx)("img", g({}, e)) }, e.src);
            }),
          });
        },
        b = function () {
          return (0, r.jsxs)(h.Z, {
            children: [
              (0, r.jsx)(l.lT, {
                className: "text-4xl",
                children: "KEY INVESTORS",
              }),
              (0, r.jsx)("div", {
                className: "flex flex-wrap justify-between align-center my-14",
                children: (0, r.jsx)(v, {}),
              }),
            ],
          });
        },
        j = function () {
          return (0, r.jsxs)(a.Z, {
            children: [
              (0, r.jsx)(i.Z, { cta: { label: "ENTER APP" } }),
              (0, r.jsxs)("div", {
                className: "p-8",
                children: [
                  (0, r.jsx)(x, {}),
                  (0, r.jsx)(s.Z, {}),
                  (0, r.jsx)(u, {}),
                ],
              }),
              (0, r.jsx)(b, {}),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [982, 226, 199, 602, 71, 495, 774, 888, 179], function () {
      return (t = 8738), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
