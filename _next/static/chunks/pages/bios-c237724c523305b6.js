(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [755],
  {
    81325: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/bios",
        function () {
          return n(59494);
        },
      ]);
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
        c = "gray";
      var i = function (e) {
          var t = e.onClick,
            n = e.disabled,
            a = (e.active, e.children),
            i = e.className,
            l = e.color;
          return (0, r.jsx)("button", {
            disabled: n,
            onClick: t,
            className: "\n      "
              .concat(i || "", "\n      p-3 rounded-full\n      ")
              .concat(
                l === s
                  ? "bg-transparent text-white border ".concat(
                      n
                        ? "border-green-dark"
                        : "border-green hover:bg-green-darker hover:border-green"
                    )
                  : l === c
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
                    : l === c
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
              .concat(i || "", "\n    "),
            children: a,
          });
        },
        l = n(66909),
        o = "/_next/static/media/logo_background.17594b0f.svg",
        d = n(92455),
        x = function () {
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
      function u(e, t, n) {
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
              u(e, t, n[t]);
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
        f = function (e) {
          var t = e.images,
            n = void 0 === t ? m : t;
          return (0, r.jsx)("div", {
            className: "flex justify-center",
            children: n.map(function (e) {
              return (0,
              r.jsx)("div", { className: "mx-3", children: (0, r.jsx)(i, { disabled: !0, onClick: null, color: "green", children: (0, r.jsx)("img", h({ style: { height: 24, width: 24 } }, e)) }) }, e.src);
            }),
          });
        },
        g = function (e) {
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
        b = function (e) {
          var t = e.prefixContent,
            n = e.title,
            a = void 0 === n ? "Automated Cross-chain yield aggregation <" : n,
            s = e.subtitle,
            c = void 0 === s ? "RECEIVE NATIVE ASSET YIELD" : s,
            i = e.ctaLabel,
            d = void 0 === i ? "ENTER APP" : i,
            u = e.cta,
            h = void 0 === u ? null : u,
            m = e.tvl,
            b = void 0 !== m && m;
          return (0, r.jsxs)(g, {
            imgSrc: o,
            children: [
              (0, r.jsxs)("div", {
                className: "flex flex-col items-center w-full",
                style: { margin: "0px auto", maxWidth: 800 },
                children: [
                  t,
                  (0, r.jsx)(l.lT, { className: "text-4xl my-8", children: a }),
                  c
                    ? (0, r.jsx)(l.oT, {
                        prefix: ">",
                        textColor: "green",
                        className: "w-auto mx-auto text-4xl",
                        children: c,
                      })
                    : null,
                  h ? (0, r.jsx)(v, { label: d }) : null,
                ],
              }),
              b ? (0, r.jsx)(x, {}) : null,
              //   (0, r.jsx)(f, {}),
            ],
          });
        };
      (b.TVL = x), (b.Icons = f);
      var v = function (e) {
        var t = e.label;
        return (0, r.jsx)("div", {
          className: "mx-auto my-20",
          style: { margin: "32px auto" },
          children: (0, r.jsx)("a", {
            href: "https://system11.0xnode.pro",
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
      b.CTA = v;
      var j = b;
    },
    59494: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return A;
          },
        });
      var r = n(52322),
        a = (n(2784), n(5924)),
        s = n(2990),
        c = n(55351),
        i = n(17831),
        l = n(78219),
        o = n(16223),
        d = function () {
          return (0, r.jsx)("div", {
            className: "py-20",
            children: (0, r.jsxs)("div", {
              className: "container max-w-sm relative",
              children: [
                (0, r.jsx)(o.Dx, {
                  prefix: "STAKING",
                  title: (0, r.jsxs)("span", {
                    children: [
                      "Staking your ",
                      (0, r.jsx)("span", {
                        className: "text-green",
                        children: "0xNODE",
                      }),
                      " in the system rewards you with a portion of the yield collected from every strategy harvested on that chain, with rewards delivered in the native token.",
                    ],
                  }),
                  subtitle: "",
                }),
                (0, r.jsx)(o.nv, {
                  children:
                    "The 0xNODE token IDO was undertaken in May 2021, with completion of strategic and private presales, followed by a public offering on Samurai/CFI.  This funding round generated a total of US$4.2M. Vesting schedules for all presales have now completed, with 60% of the token supply remaining in a locked state in the custody of 0xNode AI.",
                }),
              ],
            }),
          });
        },
        x = n(66909),
        u = n(26502),
        h = n(89755),
        m = {
          src: "/_next/static/media/metamask.14e56d21.svg",
          height: 24,
          width: 24,
        },
        f = n(59795),
        g = "etherscan.io",
        b = "polygonscan.com",
        v = "ftmscan.com",
        j = "snowtrace.io",
        y = "bscscan.com",
        p = "kovan.etherscan.io",
        w = "andromeda-explorer.metis.io",
        k = function (e, t) {
          var n = (function (e) {
            switch (e) {
              case f.networks.ethereum:
              case f.networks.localhost:
                return g;
              case f.networks.kovan:
                return p;
              case f.networks.polygon:
              case f.networks.local_polygon:
                return b;
              case f.networks.fantom:
              case f.networks.local_fantom:
                return v;
              case f.networks.avalanche:
              case f.networks.local_avalanche:
                return j;
              case f.networks.bsc:
              case f.networks.bsc_local:
                return y;
              case f.networks.metis:
              case f.networks.local_metis:
                return w;
              default:
                return;
            }
          })(e);
          return n ? "https://".concat(n, "/address/").concat(t) : void 0;
        };
      function N(e, t, n) {
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
      function _(e) {
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
              N(e, t, n[t]);
            });
        }
        return e;
      }
      var O = {
          ethereum: {
            address: "0x144f8fe2a2943105ab8add17b482f80e2f38b06c",
            scanLink: {
              img: {
                src: "/_next/static/media/etherscan.8006d1de.svg",
                height: 24,
                width: 24,
              },
              label: "ETHERSCAN",
              href: "https://etherscan.io/token/0x144f8fe2a2943105ab8add17b482f80e2f38b06c",
            },
          },
        //   polygon: {
        //     address: "0xe20d2df5041f8ed06976846470f727295cdd4d23",
        //     scanLink: {
        //       img: {
        //         src: "/_next/static/media/polygonscan.c5614dac.svg",
        //         height: 24,
        //         width: 24,
        //       },
        //       label: "POLYSCAN",
        //     },
        //   },
        //   bsc: {
        //     address: "0xcf87d3d50a98a7832f5cfdf99ae1b88c7cfba4a7",
        //     scanLink: {
        //       img: {
        //         src: "/_next/static/media/bscscan.548a6d62.svg",
        //         height: 24,
        //         width: 24,
        //       },
        //       label: "BSCSCAN",
        //     },
        //   },
        //   fantom: {
        //     address: "0x75e0eb8e6d92ab832bb11e46c041d06a89ac5f0d",
        //     scanLink: { label: "FTMSCAN" },
        //   },
        //   avalanche: {
        //     address: "0xd7783a275e53fc6746dedfbad4a06059937502a4",
        //     scanLink: { label: "SNOWTRACE" },
        //   },
        },
        S = function () {
          return (0, r.jsx)("div", {
            children: Object.keys(O).map(function (e) {
              var t = O[e],
                n = t.address,
                a = t.scanLink;
              return (0,
              r.jsxs)("div", { className: "mb-8", children: [(0, r.jsxs)(x.lT, { className: "text-xl text-green", contentClassName: "text-green", children: [e, ":"] }), (0, r.jsx)("div", { className: "text-xl", children: n }), a ? (0, r.jsx)("div", { className: "my-4", children: (0, r.jsx)("a", { href: a.href, target: "_blank", alt: e, children: (0, r.jsxs)("button", { secondary: !0, color: "green", className: "flex h-14 align-center justify-center bg-transparent", children: [(0, r.jsx)("img", _({}, a.img, { className: "mr-3 my-auto" })), " VIEW ON", " ", a.label || "PLATFORM"] }) }) }) : null, (0, r.jsx)("div", { className: "my-4 hidden", children: (0, r.jsxs)(u.Z, { secondary: !0, color: "green", className: "flex h-14 align-center justify-center bg-transparent", children: [(0, r.jsx)("img", _({}, m, { className: "mr-3 my-auto" })), " ADD TO METAMASK"] }) })] }, e);
            }),
          });
        },
        C = {
          name: "0XPOINT AI",
          symbol: (0, r.jsx)("span", {
            className: "text-green",
            children: "0xNODE",
          }),
          "Token Type": "ERC-20",
          "Maximum Supply": (1e9).toLocaleString(),
        },
        E = function (e) {
          var t = e.label,
            n = e.value;
          return (0, r.jsxs)("div", {
            className: "flex text-xl md:text-3xl",
            children: [
              (0, r.jsxs)("div", {
                className: "text-gray-flat mr-6",
                children: [t, ": "],
              }),
              (0, r.jsx)("div", { className: "text-white", children: n }),
            ],
          });
        },
        T = function () {
          return (0, r.jsx)("div", {
            className: "my-20 container max-w-sm",
            children: Object.keys(C).map(function (e) {
              return (0, r.jsx)(E, { label: e, value: C[e] }, e);
            }),
          });
        },
        A = function () {
          return (0, r.jsxs)(a.Z, {
            children: [
              (0, r.jsx)(c.PB, { title: "0xNODE" }),
              (0, r.jsx)(i.Z, {
                prefixContent: (0, r.jsx)("div", {
                  className: "flex justify-center text-green",
                  children: (0, r.jsx)(s.Z, {}),
                }),
                title: (0, r.jsxs)("span", {
                  children: [
                    "Earn rewards with staked ",
                    (0, r.jsx)("span", {
                      className: "text-green",
                      children: "0xNODE",
                    }),
                  ],
                }),
                subtitle: "",
              }),
              (0, r.jsx)("div", {
                className:
                  "flex flex-col md:flex-row items-center justify-center",
                children: (0, r.jsx)(l.Z, {
                  buttonProps: { color: "green", secondary: !0 },
                  buttonClassName: "text-green green border-green mx-2",
                }),
              }),
              (0, r.jsx)("div", {
                className: "container max-w-xs",
                children: (0, r.jsx)(d, {}),
              }),
              (0, r.jsx)(T, {}),
              (0, r.jsx)(h.Z, {
                bgColor: "gray-darkest",
                children: (0, r.jsx)(S, {}),
              }),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [982, 226, 199, 602, 71, 495, 774, 888, 179], function () {
      return (t = 81325), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
