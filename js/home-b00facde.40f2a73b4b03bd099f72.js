/*! For license information please see home-b00facde.40f2a73b4b03bd099f72.js.LICENSE.txt */
(self.webpackChunk = self.webpackChunk || []).push([
    [984, 74, 270, 525, 153, 214],
    {
        684: function (t, e) {
            "use strict";
            var n = {
                type: "slider",
                startAt: 0,
                perView: 1,
                focusAt: 0,
                gap: 10,
                autoplay: !1,
                hoverpause: !0,
                keyboard: !0,
                bound: !1,
                swipeThreshold: 80,
                dragThreshold: 120,
                perSwipe: "|",
                touchRatio: 0.5,
                touchAngle: 45,
                animationDuration: 400,
                rewind: !0,
                rewindDuration: 800,
                animationTimingFunc: "cubic-bezier(.165, .840, .440, 1)",
                waitForTransition: !0,
                throttle: 10,
                direction: "ltr",
                peek: 0,
                breakpoints: {},
                classes: {
                    swipeable: "glide--swipeable",
                    dragging: "glide--dragging",
                    direction: { ltr: "glide--ltr", rtl: "glide--rtl" },
                    type: { slider: "glide--slider", carousel: "glide--carousel" },
                    slide: {
                        clone: "glide__slide--clone",
                        active: "glide__slide--active",
                    },
                    arrow: { disabled: "glide__arrow--disabled" },
                    nav: { active: "glide__bullet--active" },
                },
            };
            function i(t) {
                console.error("[Glide warn]: " + t);
            }
            var r =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                        return typeof t;
                    }
                    : function (t) {
                        return t &&
                            "function" == typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : typeof t;
                    },
                s = function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function");
                },
                o = (function () {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            (i.enumerable = i.enumerable || !1),
                                (i.configurable = !0),
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(t, i.key, i);
                        }
                    }
                    return function (e, n, i) {
                        return n && t(e.prototype, n), i && t(e, i), e;
                    };
                })(),
                u =
                    Object.assign ||
                    function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var i in n)
                                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                        }
                        return t;
                    },
                a = function t(e, n, i) {
                    null === e && (e = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === r) {
                        var s = Object.getPrototypeOf(e);
                        return null === s ? void 0 : t(s, n, i);
                    }
                    if ("value" in r) return r.value;
                    var o = r.get;
                    return void 0 !== o ? o.call(i) : void 0;
                },
                c = function (t, e) {
                    if (!t)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
                };
            function l(t) {
                return parseInt(t);
            }
            function f(t) {
                return "string" == typeof t;
            }
            function d(t) {
                var e = void 0 === t ? "undefined" : r(t);
                return "function" === e || ("object" === e && !!t);
            }
            function h(t) {
                return "function" == typeof t;
            }
            function v(t) {
                return void 0 === t;
            }
            function p(t) {
                return t.constructor === Array;
            }
            function m(t, e, n) {
                var r = {};
                for (var s in e)
                    h(e[s]) ? (r[s] = e[s](t, r, n)) : i("Extension must be a function");
                for (var o in r) h(r[o].mount) && r[o].mount();
                return r;
            }
            function g(t, e, n) {
                Object.defineProperty(t, e, n);
            }
            function y(t, e) {
                var n = u({}, t, e);
                return (
                    e.hasOwnProperty("classes") &&
                    ((n.classes = u({}, t.classes, e.classes)),
                        e.classes.hasOwnProperty("direction") &&
                        (n.classes.direction = u(
                            {},
                            t.classes.direction,
                            e.classes.direction
                        )),
                        e.classes.hasOwnProperty("type") &&
                        (n.classes.type = u({}, t.classes.type, e.classes.type)),
                        e.classes.hasOwnProperty("slide") &&
                        (n.classes.slide = u({}, t.classes.slide, e.classes.slide)),
                        e.classes.hasOwnProperty("arrow") &&
                        (n.classes.arrow = u({}, t.classes.arrow, e.classes.arrow)),
                        e.classes.hasOwnProperty("nav") &&
                        (n.classes.nav = u({}, t.classes.nav, e.classes.nav))),
                    e.hasOwnProperty("breakpoints") &&
                    (n.breakpoints = u({}, t.breakpoints, e.breakpoints)),
                    n
                );
            }
            var b = (function () {
                function t() {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                    s(this, t), (this.events = e), (this.hop = e.hasOwnProperty);
                }
                return (
                    o(t, [
                        {
                            key: "on",
                            value: function (t, e) {
                                if (p(t)) for (var n = 0; n < t.length; n++) this.on(t[n], e);
                                this.hop.call(this.events, t) || (this.events[t] = []);
                                var i = this.events[t].push(e) - 1;
                                return {
                                    remove: function () {
                                        delete this.events[t][i];
                                    },
                                };
                            },
                        },
                        {
                            key: "emit",
                            value: function (t, e) {
                                if (p(t))
                                    for (var n = 0; n < t.length; n++) this.emit(t[n], e);
                                this.hop.call(this.events, t) &&
                                    this.events[t].forEach(function (t) {
                                        t(e || {});
                                    });
                            },
                        },
                    ]),
                    t
                );
            })(),
                w = (function () {
                    function t(e) {
                        var i =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {};
                        s(this, t),
                            (this._c = {}),
                            (this._t = []),
                            (this._e = new b()),
                            (this.disabled = !1),
                            (this.selector = e),
                            (this.settings = y(n, i)),
                            (this.index = this.settings.startAt);
                    }
                    return (
                        o(t, [
                            {
                                key: "mount",
                                value: function () {
                                    var t =
                                        arguments.length > 0 && void 0 !== arguments[0]
                                            ? arguments[0]
                                            : {};
                                    return (
                                        this._e.emit("mount.before"),
                                        d(t)
                                            ? (this._c = m(this, t, this._e))
                                            : i("You need to provide a object on `mount()`"),
                                        this._e.emit("mount.after"),
                                        this
                                    );
                                },
                            },
                            {
                                key: "mutate",
                                value: function () {
                                    var t =
                                        arguments.length > 0 && void 0 !== arguments[0]
                                            ? arguments[0]
                                            : [];
                                    return (
                                        p(t)
                                            ? (this._t = t)
                                            : i("You need to provide a array on `mutate()`"),
                                        this
                                    );
                                },
                            },
                            {
                                key: "update",
                                value: function () {
                                    var t =
                                        arguments.length > 0 && void 0 !== arguments[0]
                                            ? arguments[0]
                                            : {};
                                    return (
                                        (this.settings = y(this.settings, t)),
                                        t.hasOwnProperty("startAt") && (this.index = t.startAt),
                                        this._e.emit("update"),
                                        this
                                    );
                                },
                            },
                            {
                                key: "go",
                                value: function (t) {
                                    return this._c.Run.make(t), this;
                                },
                            },
                            {
                                key: "move",
                                value: function (t) {
                                    return (
                                        this._c.Transition.disable(), this._c.Move.make(t), this
                                    );
                                },
                            },
                            {
                                key: "destroy",
                                value: function () {
                                    return this._e.emit("destroy"), this;
                                },
                            },
                            {
                                key: "play",
                                value: function () {
                                    var t =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0] &&
                                        arguments[0];
                                    return (
                                        t && (this.settings.autoplay = t),
                                        this._e.emit("play"),
                                        this
                                    );
                                },
                            },
                            {
                                key: "pause",
                                value: function () {
                                    return this._e.emit("pause"), this;
                                },
                            },
                            {
                                key: "disable",
                                value: function () {
                                    return (this.disabled = !0), this;
                                },
                            },
                            {
                                key: "enable",
                                value: function () {
                                    return (this.disabled = !1), this;
                                },
                            },
                            {
                                key: "on",
                                value: function (t, e) {
                                    return this._e.on(t, e), this;
                                },
                            },
                            {
                                key: "isType",
                                value: function (t) {
                                    return this.settings.type === t;
                                },
                            },
                            {
                                key: "settings",
                                get: function () {
                                    return this._o;
                                },
                                set: function (t) {
                                    d(t)
                                        ? (this._o = t)
                                        : i("Options must be an `object` instance.");
                                },
                            },
                            {
                                key: "index",
                                get: function () {
                                    return this._i;
                                },
                                set: function (t) {
                                    this._i = l(t);
                                },
                            },
                            {
                                key: "type",
                                get: function () {
                                    return this.settings.type;
                                },
                            },
                            {
                                key: "disabled",
                                get: function () {
                                    return this._d;
                                },
                                set: function (t) {
                                    this._d = !!t;
                                },
                            },
                        ]),
                        t
                    );
                })();
            function _() {
                return new Date().getTime();
            }
            function k(t, e, n) {
                var i = void 0,
                    r = void 0,
                    s = void 0,
                    o = void 0,
                    u = 0;
                n || (n = {});
                var a = function () {
                    (u = !1 === n.leading ? 0 : _()),
                        (i = null),
                        (o = t.apply(r, s)),
                        i || (r = s = null);
                },
                    c = function () {
                        var c = _();
                        u || !1 !== n.leading || (u = c);
                        var l = e - (c - u);
                        return (
                            (r = this),
                            (s = arguments),
                            l <= 0 || l > e
                                ? (i && (clearTimeout(i), (i = null)),
                                    (u = c),
                                    (o = t.apply(r, s)),
                                    i || (r = s = null))
                                : i || !1 === n.trailing || (i = setTimeout(a, l)),
                            o
                        );
                    };
                return (
                    (c.cancel = function () {
                        clearTimeout(i), (u = 0), (i = r = s = null);
                    }),
                    c
                );
            }
            var S = {
                ltr: ["marginLeft", "marginRight"],
                rtl: ["marginRight", "marginLeft"],
            };
            function H(t) {
                if (t && t.parentNode) {
                    for (var e = t.parentNode.firstChild, n = []; e; e = e.nextSibling)
                        1 === e.nodeType && e !== t && n.push(e);
                    return n;
                }
                return [];
            }
            function T(t) {
                return !!(t && t instanceof window.HTMLElement);
            }
            var O = '[data-glide-el="track"]';
            var x = (function () {
                function t() {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    s(this, t), (this.listeners = e);
                }
                return (
                    o(t, [
                        {
                            key: "on",
                            value: function (t, e, n) {
                                var i =
                                    arguments.length > 3 &&
                                    void 0 !== arguments[3] &&
                                    arguments[3];
                                f(t) && (t = [t]);
                                for (var r = 0; r < t.length; r++)
                                    (this.listeners[t[r]] = n),
                                        e.addEventListener(t[r], this.listeners[t[r]], i);
                            },
                        },
                        {
                            key: "off",
                            value: function (t, e) {
                                var n =
                                    arguments.length > 2 &&
                                    void 0 !== arguments[2] &&
                                    arguments[2];
                                f(t) && (t = [t]);
                                for (var i = 0; i < t.length; i++)
                                    e.removeEventListener(t[i], this.listeners[t[i]], n);
                            },
                        },
                        {
                            key: "destroy",
                            value: function () {
                                delete this.listeners;
                            },
                        },
                    ]),
                    t
                );
            })();
            var A = ["ltr", "rtl"],
                P = { ">": "<", "<": ">", "=": "=" };
            function C(t, e) {
                return {
                    modify: function (t) {
                        return e.Direction.is("rtl") ? -t : t;
                    },
                };
            }
            function M(t, e) {
                return {
                    modify: function (t) {
                        var n = Math.floor(t / e.Sizes.slideWidth);
                        return t + e.Gaps.value * n;
                    },
                };
            }
            function z(t, e) {
                return {
                    modify: function (t) {
                        return t + e.Clones.grow / 2;
                    },
                };
            }
            function L(t, e) {
                return {
                    modify: function (n) {
                        if (t.settings.focusAt >= 0) {
                            var i = e.Peek.value;
                            return d(i) ? n - i.before : n - i;
                        }
                        return n;
                    },
                };
            }
            function j(t, e) {
                return {
                    modify: function (n) {
                        var i = e.Gaps.value,
                            r = e.Sizes.width,
                            s = t.settings.focusAt,
                            o = e.Sizes.slideWidth;
                        return "center" === s ? n - (r / 2 - o / 2) : n - o * s - i * s;
                    },
                };
            }
            var R = !1;
            try {
                var D = Object.defineProperty({}, "passive", {
                    get: function () {
                        R = !0;
                    },
                });
                window.addEventListener("testPassive", null, D),
                    window.removeEventListener("testPassive", null, D);
            } catch (t) { }
            var E = R,
                W = ["touchstart", "mousedown"],
                B = ["touchmove", "mousemove"],
                I = ["touchend", "touchcancel", "mouseup", "mouseleave"],
                V = ["mousedown", "mousemove", "mouseup", "mouseleave"];
            function q(t) {
                return d(t)
                    ? ((e = t),
                        Object.keys(e)
                            .sort()
                            .reduce(function (t, n) {
                                return (t[n] = e[n]), t[n], t;
                            }, {}))
                    : (i("Breakpoints option must be an object"), {});
                var e;
            }
            var F = {
                Html: function (t, e) {
                    var n = {
                        mount: function () {
                            (this.root = t.selector),
                                (this.track = this.root.querySelector(O)),
                                (this.slides = Array.prototype.slice
                                    .call(this.wrapper.children)
                                    .filter(function (e) {
                                        return !e.classList.contains(
                                            t.settings.classes.slide.clone
                                        );
                                    }));
                        },
                    };
                    return (
                        g(n, "root", {
                            get: function () {
                                return n._r;
                            },
                            set: function (t) {
                                f(t) && (t = document.querySelector(t)),
                                    T(t)
                                        ? (n._r = t)
                                        : i("Root element must be a existing Html node");
                            },
                        }),
                        g(n, "track", {
                            get: function () {
                                return n._t;
                            },
                            set: function (t) {
                                T(t)
                                    ? (n._t = t)
                                    : i(
                                        "Could not find track element. Please use " +
                                        O +
                                        " attribute."
                                    );
                            },
                        }),
                        g(n, "wrapper", {
                            get: function () {
                                return n.track.children[0];
                            },
                        }),
                        n
                    );
                },
                Translate: function (t, e, n) {
                    var r = {
                        set: function (n) {
                            var r = (function (t, e, n) {
                                var r = [M, z, L, j].concat(t._t, [C]);
                                return {
                                    mutate: function (s) {
                                        for (var o = 0; o < r.length; o++) {
                                            var u = r[o];
                                            h(u) && h(u().modify)
                                                ? (s = u(t, e, n).modify(s))
                                                : i(
                                                    "Transformer should be a function that returns an object with `modify()` method"
                                                );
                                        }
                                        return s;
                                    },
                                };
                            })(t, e).mutate(n);
                            e.Html.wrapper.style.transform =
                                "translate3d(" + -1 * r + "px, 0px, 0px)";
                        },
                        remove: function () {
                            e.Html.wrapper.style.transform = "";
                        },
                        getStartIndex: function () {
                            var n = e.Sizes.length,
                                i = t.index,
                                r = t.settings.perView;
                            return e.Run.isOffset(">") || e.Run.isOffset("|>")
                                ? n + (i - r)
                                : (i + r) % n;
                        },
                        getTravelDistance: function () {
                            var n = e.Sizes.slideWidth * t.settings.perView;
                            return e.Run.isOffset(">") || e.Run.isOffset("|>") ? -1 * n : n;
                        },
                    };
                    return (
                        n.on("move", function (i) {
                            if (!t.isType("carousel") || !e.Run.isOffset())
                                return r.set(i.movement);
                            e.Transition.after(function () {
                                n.emit("translate.jump"), r.set(e.Sizes.slideWidth * t.index);
                            });
                            var s = e.Sizes.slideWidth * e.Translate.getStartIndex();
                            return r.set(s - e.Translate.getTravelDistance());
                        }),
                        n.on("destroy", function () {
                            r.remove();
                        }),
                        r
                    );
                },
                Transition: function (t, e, n) {
                    var i = !1,
                        r = {
                            compose: function (e) {
                                var n = t.settings;
                                return i
                                    ? e + " 0ms " + n.animationTimingFunc
                                    : e + " " + this.duration + "ms " + n.animationTimingFunc;
                            },
                            set: function () {
                                var t =
                                    arguments.length > 0 && void 0 !== arguments[0]
                                        ? arguments[0]
                                        : "transform";
                                e.Html.wrapper.style.transition = this.compose(t);
                            },
                            remove: function () {
                                e.Html.wrapper.style.transition = "";
                            },
                            after: function (t) {
                                setTimeout(function () {
                                    t();
                                }, this.duration);
                            },
                            enable: function () {
                                (i = !1), this.set();
                            },
                            disable: function () {
                                (i = !0), this.set();
                            },
                        };
                    return (
                        g(r, "duration", {
                            get: function () {
                                var n = t.settings;
                                return t.isType("slider") && e.Run.offset
                                    ? n.rewindDuration
                                    : n.animationDuration;
                            },
                        }),
                        n.on("move", function () {
                            r.set();
                        }),
                        n.on(["build.before", "resize", "translate.jump"], function () {
                            r.disable();
                        }),
                        n.on("run", function () {
                            r.enable();
                        }),
                        n.on("destroy", function () {
                            r.remove();
                        }),
                        r
                    );
                },
                Direction: function (t, e, n) {
                    var r = {
                        mount: function () {
                            this.value = t.settings.direction;
                        },
                        resolve: function (t) {
                            var e = t.slice(0, 1);
                            return this.is("rtl") ? t.split(e).join(P[e]) : t;
                        },
                        is: function (t) {
                            return this.value === t;
                        },
                        addClass: function () {
                            e.Html.root.classList.add(
                                t.settings.classes.direction[this.value]
                            );
                        },
                        removeClass: function () {
                            e.Html.root.classList.remove(
                                t.settings.classes.direction[this.value]
                            );
                        },
                    };
                    return (
                        g(r, "value", {
                            get: function () {
                                return r._v;
                            },
                            set: function (t) {
                                A.indexOf(t) > -1
                                    ? (r._v = t)
                                    : i("Direction value must be `ltr` or `rtl`");
                            },
                        }),
                        n.on(["destroy", "update"], function () {
                            r.removeClass();
                        }),
                        n.on("update", function () {
                            r.mount();
                        }),
                        n.on(["build.before", "update"], function () {
                            r.addClass();
                        }),
                        r
                    );
                },
                Peek: function (t, e, n) {
                    var i = {
                        mount: function () {
                            this.value = t.settings.peek;
                        },
                    };
                    return (
                        g(i, "value", {
                            get: function () {
                                return i._v;
                            },
                            set: function (t) {
                                d(t)
                                    ? ((t.before = l(t.before)), (t.after = l(t.after)))
                                    : (t = l(t)),
                                    (i._v = t);
                            },
                        }),
                        g(i, "reductor", {
                            get: function () {
                                var e = i.value,
                                    n = t.settings.perView;
                                return d(e) ? e.before / n + e.after / n : (2 * e) / n;
                            },
                        }),
                        n.on(["resize", "update"], function () {
                            i.mount();
                        }),
                        i
                    );
                },
                Sizes: function (t, e, n) {
                    var i = {
                        setupSlides: function () {
                            for (
                                var t = this.slideWidth + "px", n = e.Html.slides, i = 0;
                                i < n.length;
                                i++
                            )
                                n[i].style.width = t;
                        },
                        setupWrapper: function () {
                            e.Html.wrapper.style.width = this.wrapperSize + "px";
                        },
                        remove: function () {
                            for (var t = e.Html.slides, n = 0; n < t.length; n++)
                                t[n].style.width = "";
                            e.Html.wrapper.style.width = "";
                        },
                    };
                    return (
                        g(i, "length", {
                            get: function () {
                                return e.Html.slides.length;
                            },
                        }),
                        g(i, "width", {
                            get: function () {
                                return e.Html.root.offsetWidth;
                            },
                        }),
                        g(i, "wrapperSize", {
                            get: function () {
                                return i.slideWidth * i.length + e.Gaps.grow + e.Clones.grow;
                            },
                        }),
                        g(i, "slideWidth", {
                            get: function () {
                                return (
                                    i.width / t.settings.perView -
                                    e.Peek.reductor -
                                    e.Gaps.reductor
                                );
                            },
                        }),
                        n.on(["build.before", "resize", "update"], function () {
                            i.setupSlides(), i.setupWrapper();
                        }),
                        n.on("destroy", function () {
                            i.remove();
                        }),
                        i
                    );
                },
                Gaps: function (t, e, n) {
                    var i = {
                        apply: function (t) {
                            for (var n = 0, i = t.length; n < i; n++) {
                                var r = t[n].style,
                                    s = e.Direction.value;
                                (r[S[s][0]] = 0 !== n ? this.value / 2 + "px" : ""),
                                    n !== t.length - 1
                                        ? (r[S[s][1]] = this.value / 2 + "px")
                                        : (r[S[s][1]] = "");
                            }
                        },
                        remove: function (t) {
                            for (var e = 0, n = t.length; e < n; e++) {
                                var i = t[e].style;
                                (i.marginLeft = ""), (i.marginRight = "");
                            }
                        },
                    };
                    return (
                        g(i, "value", {
                            get: function () {
                                return l(t.settings.gap);
                            },
                        }),
                        g(i, "grow", {
                            get: function () {
                                return i.value * e.Sizes.length;
                            },
                        }),
                        g(i, "reductor", {
                            get: function () {
                                var e = t.settings.perView;
                                return (i.value * (e - 1)) / e;
                            },
                        }),
                        n.on(
                            ["build.after", "update"],
                            k(function () {
                                i.apply(e.Html.wrapper.children);
                            }, 30)
                        ),
                        n.on("destroy", function () {
                            i.remove(e.Html.wrapper.children);
                        }),
                        i
                    );
                },
                Move: function (t, e, n) {
                    var i = {
                        mount: function () {
                            this._o = 0;
                        },
                        make: function () {
                            var t = this,
                                i =
                                    arguments.length > 0 && void 0 !== arguments[0]
                                        ? arguments[0]
                                        : 0;
                            (this.offset = i),
                                n.emit("move", { movement: this.value }),
                                e.Transition.after(function () {
                                    n.emit("move.after", { movement: t.value });
                                });
                        },
                    };
                    return (
                        g(i, "offset", {
                            get: function () {
                                return i._o;
                            },
                            set: function (t) {
                                i._o = v(t) ? 0 : l(t);
                            },
                        }),
                        g(i, "translate", {
                            get: function () {
                                return e.Sizes.slideWidth * t.index;
                            },
                        }),
                        g(i, "value", {
                            get: function () {
                                var t = this.offset,
                                    n = this.translate;
                                return e.Direction.is("rtl") ? n + t : n - t;
                            },
                        }),
                        n.on(["build.before", "run"], function () {
                            i.make();
                        }),
                        i
                    );
                },
                Clones: function (t, e, n) {
                    var i = {
                        mount: function () {
                            (this.items = []),
                                t.isType("carousel") && (this.items = this.collect());
                        },
                        collect: function () {
                            for (
                                var n =
                                    arguments.length > 0 && void 0 !== arguments[0]
                                        ? arguments[0]
                                        : [],
                                i = e.Html.slides,
                                r = t.settings,
                                s = r.perView,
                                o = r.classes,
                                u = +!!t.settings.peek,
                                a = s + u + Math.round(s / 2),
                                c = i.slice(0, a).reverse(),
                                l = i.slice(-1 * a),
                                f = 0;
                                f < Math.max(1, Math.floor(s / i.length));
                                f++
                            ) {
                                for (var d = 0; d < c.length; d++) {
                                    var h = c[d].cloneNode(!0);
                                    h.classList.add(o.slide.clone), n.push(h);
                                }
                                for (var v = 0; v < l.length; v++) {
                                    var p = l[v].cloneNode(!0);
                                    p.classList.add(o.slide.clone), n.unshift(p);
                                }
                            }
                            return n;
                        },
                        append: function () {
                            for (
                                var t = this.items,
                                n = e.Html,
                                i = n.wrapper,
                                r = n.slides,
                                s = Math.floor(t.length / 2),
                                o = t.slice(0, s).reverse(),
                                u = t.slice(-1 * s).reverse(),
                                a = e.Sizes.slideWidth + "px",
                                c = 0;
                                c < u.length;
                                c++
                            )
                                i.appendChild(u[c]);
                            for (var l = 0; l < o.length; l++) i.insertBefore(o[l], r[0]);
                            for (var f = 0; f < t.length; f++) t[f].style.width = a;
                        },
                        remove: function () {
                            for (var t = this.items, n = 0; n < t.length; n++)
                                e.Html.wrapper.removeChild(t[n]);
                        },
                    };
                    return (
                        g(i, "grow", {
                            get: function () {
                                return (e.Sizes.slideWidth + e.Gaps.value) * i.items.length;
                            },
                        }),
                        n.on("update", function () {
                            i.remove(), i.mount(), i.append();
                        }),
                        n.on("build.before", function () {
                            t.isType("carousel") && i.append();
                        }),
                        n.on("destroy", function () {
                            i.remove();
                        }),
                        i
                    );
                },
                Resize: function (t, e, n) {
                    var i = new x(),
                        r = {
                            mount: function () {
                                this.bind();
                            },
                            bind: function () {
                                i.on(
                                    "resize",
                                    window,
                                    k(function () {
                                        n.emit("resize");
                                    }, t.settings.throttle)
                                );
                            },
                            unbind: function () {
                                i.off("resize", window);
                            },
                        };
                    return (
                        n.on("destroy", function () {
                            r.unbind(), i.destroy();
                        }),
                        r
                    );
                },
                Build: function (t, e, n) {
                    var i = {
                        mount: function () {
                            n.emit("build.before"),
                                this.typeClass(),
                                this.activeClass(),
                                n.emit("build.after");
                        },
                        typeClass: function () {
                            e.Html.root.classList.add(
                                t.settings.classes.type[t.settings.type]
                            );
                        },
                        activeClass: function () {
                            var n = t.settings.classes,
                                i = e.Html.slides[t.index];
                            i &&
                                (i.classList.add(n.slide.active),
                                    H(i).forEach(function (t) {
                                        t.classList.remove(n.slide.active);
                                    }));
                        },
                        removeClasses: function () {
                            var n = t.settings.classes,
                                i = n.type,
                                r = n.slide;
                            e.Html.root.classList.remove(i[t.settings.type]),
                                e.Html.slides.forEach(function (t) {
                                    t.classList.remove(r.active);
                                });
                        },
                    };
                    return (
                        n.on(["destroy", "update"], function () {
                            i.removeClasses();
                        }),
                        n.on(["resize", "update"], function () {
                            i.mount();
                        }),
                        n.on("move.after", function () {
                            i.activeClass();
                        }),
                        i
                    );
                },
                Run: function (t, e, n) {
                    var r = {
                        mount: function () {
                            this._o = !1;
                        },
                        make: function (i) {
                            var r = this;
                            t.disabled ||
                                (!t.settings.waitForTransition || t.disable(),
                                    (this.move = i),
                                    n.emit("run.before", this.move),
                                    this.calculate(),
                                    n.emit("run", this.move),
                                    e.Transition.after(function () {
                                        r.isStart() && n.emit("run.start", r.move),
                                            r.isEnd() && n.emit("run.end", r.move),
                                            r.isOffset() &&
                                            ((r._o = !1), n.emit("run.offset", r.move)),
                                            n.emit("run.after", r.move),
                                            t.enable();
                                    }));
                        },
                        calculate: function () {
                            var e = this.move,
                                n = this.length,
                                s = e.steps,
                                o = e.direction,
                                u = 1;
                            if ("=" !== o)
                                if (">" !== o || ">" !== s)
                                    if ("<" !== o || "<" !== s) {
                                        if (
                                            ("|" === o && (u = t.settings.perView || 1),
                                                ">" === o || ("|" === o && ">" === s))
                                        ) {
                                            var a = (function (e) {
                                                var n = t.index;
                                                if (t.isType("carousel")) return n + e;
                                                return n + (e - (n % e));
                                            })(u);
                                            return (
                                                a > n && (this._o = !0),
                                                void (t.index = (function (e, n) {
                                                    var i = r.length;
                                                    if (e <= i) return e;
                                                    if (t.isType("carousel")) return e - (i + 1);
                                                    if (t.settings.rewind)
                                                        return r.isBound() && !r.isEnd() ? i : 0;
                                                    if (r.isBound()) return i;
                                                    return Math.floor(i / n) * n;
                                                })(a, u))
                                            );
                                        }
                                        if ("<" === o || ("|" === o && "<" === s)) {
                                            var c = (function (e) {
                                                var n = t.index;
                                                if (t.isType("carousel")) return n - e;
                                                return (Math.ceil(n / e) - 1) * e;
                                            })(u);
                                            return (
                                                c < 0 && (this._o = !0),
                                                void (t.index = (function (e, n) {
                                                    var i = r.length;
                                                    if (e >= 0) return e;
                                                    if (t.isType("carousel")) return e + (i + 1);
                                                    if (t.settings.rewind)
                                                        return r.isBound() && r.isStart()
                                                            ? i
                                                            : Math.floor(i / n) * n;
                                                    return 0;
                                                })(c, u))
                                            );
                                        }
                                        i(
                                            "Invalid direction pattern [" +
                                            o +
                                            s +
                                            "] has been used"
                                        );
                                    } else t.index = 0;
                                else t.index = n;
                            else t.index = s;
                        },
                        isStart: function () {
                            return t.index <= 0;
                        },
                        isEnd: function () {
                            return t.index >= this.length;
                        },
                        isOffset: function () {
                            var t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : void 0;
                            return t
                                ? !!this._o &&
                                ("|>" === t
                                    ? "|" === this.move.direction && ">" === this.move.steps
                                    : "|<" === t
                                        ? "|" === this.move.direction && "<" === this.move.steps
                                        : this.move.direction === t)
                                : this._o;
                        },
                        isBound: function () {
                            return (
                                t.isType("slider") &&
                                "center" !== t.settings.focusAt &&
                                t.settings.bound
                            );
                        },
                    };
                    return (
                        g(r, "move", {
                            get: function () {
                                return this._m;
                            },
                            set: function (t) {
                                var e = t.substr(1);
                                this._m = {
                                    direction: t.substr(0, 1),
                                    steps: e ? (l(e) ? l(e) : e) : 0,
                                };
                            },
                        }),
                        g(r, "length", {
                            get: function () {
                                var n = t.settings,
                                    i = e.Html.slides.length;
                                return this.isBound()
                                    ? i - 1 - (l(n.perView) - 1) + l(n.focusAt)
                                    : i - 1;
                            },
                        }),
                        g(r, "offset", {
                            get: function () {
                                return this._o;
                            },
                        }),
                        r
                    );
                },
                Swipe: function (t, e, n) {
                    var i = new x(),
                        r = 0,
                        s = 0,
                        o = 0,
                        u = !1,
                        a = !!E && { passive: !0 },
                        c = {
                            mount: function () {
                                this.bindSwipeStart();
                            },
                            start: function (e) {
                                if (!u && !t.disabled) {
                                    this.disable();
                                    var i = this.touches(e);
                                    (r = null),
                                        (s = l(i.pageX)),
                                        (o = l(i.pageY)),
                                        this.bindSwipeMove(),
                                        this.bindSwipeEnd(),
                                        n.emit("swipe.start");
                                }
                            },
                            move: function (i) {
                                if (!t.disabled) {
                                    var u = t.settings,
                                        a = u.touchAngle,
                                        c = u.touchRatio,
                                        f = u.classes,
                                        d = this.touches(i),
                                        h = l(d.pageX) - s,
                                        v = l(d.pageY) - o,
                                        p = Math.abs(h << 2),
                                        m = Math.abs(v << 2),
                                        g = Math.sqrt(p + m),
                                        y = Math.sqrt(m);
                                    if (!((180 * (r = Math.asin(y / g))) / Math.PI < a))
                                        return !1;
                                    i.stopPropagation(),
                                        e.Move.make(h * parseFloat(c)),
                                        e.Html.root.classList.add(f.dragging),
                                        n.emit("swipe.move");
                                }
                            },
                            end: function (i) {
                                if (!t.disabled) {
                                    var o = t.settings,
                                        u = o.perSwipe,
                                        a = o.touchAngle,
                                        c = o.classes,
                                        l = this.touches(i),
                                        f = this.threshold(i),
                                        d = l.pageX - s,
                                        h = (180 * r) / Math.PI;
                                    this.enable(),
                                        d > f && h < a
                                            ? e.Run.make(e.Direction.resolve(u + "<"))
                                            : d < -f && h < a
                                                ? e.Run.make(e.Direction.resolve(u + ">"))
                                                : e.Move.make(),
                                        e.Html.root.classList.remove(c.dragging),
                                        this.unbindSwipeMove(),
                                        this.unbindSwipeEnd(),
                                        n.emit("swipe.end");
                                }
                            },
                            bindSwipeStart: function () {
                                var n = this,
                                    r = t.settings,
                                    s = r.swipeThreshold,
                                    o = r.dragThreshold;
                                s &&
                                    i.on(
                                        W[0],
                                        e.Html.wrapper,
                                        function (t) {
                                            n.start(t);
                                        },
                                        a
                                    ),
                                    o &&
                                    i.on(
                                        W[1],
                                        e.Html.wrapper,
                                        function (t) {
                                            n.start(t);
                                        },
                                        a
                                    );
                            },
                            unbindSwipeStart: function () {
                                i.off(W[0], e.Html.wrapper, a),
                                    i.off(W[1], e.Html.wrapper, a);
                            },
                            bindSwipeMove: function () {
                                var n = this;
                                i.on(
                                    B,
                                    e.Html.wrapper,
                                    k(function (t) {
                                        n.move(t);
                                    }, t.settings.throttle),
                                    a
                                );
                            },
                            unbindSwipeMove: function () {
                                i.off(B, e.Html.wrapper, a);
                            },
                            bindSwipeEnd: function () {
                                var t = this;
                                i.on(I, e.Html.wrapper, function (e) {
                                    t.end(e);
                                });
                            },
                            unbindSwipeEnd: function () {
                                i.off(I, e.Html.wrapper);
                            },
                            touches: function (t) {
                                return V.indexOf(t.type) > -1
                                    ? t
                                    : t.touches[0] || t.changedTouches[0];
                            },
                            threshold: function (e) {
                                var n = t.settings;
                                return V.indexOf(e.type) > -1
                                    ? n.dragThreshold
                                    : n.swipeThreshold;
                            },
                            enable: function () {
                                return (u = !1), e.Transition.enable(), this;
                            },
                            disable: function () {
                                return (u = !0), e.Transition.disable(), this;
                            },
                        };
                    return (
                        n.on("build.after", function () {
                            e.Html.root.classList.add(t.settings.classes.swipeable);
                        }),
                        n.on("destroy", function () {
                            c.unbindSwipeStart(),
                                c.unbindSwipeMove(),
                                c.unbindSwipeEnd(),
                                i.destroy();
                        }),
                        c
                    );
                },
                Images: function (t, e, n) {
                    var i = new x(),
                        r = {
                            mount: function () {
                                this.bind();
                            },
                            bind: function () {
                                i.on("dragstart", e.Html.wrapper, this.dragstart);
                            },
                            unbind: function () {
                                i.off("dragstart", e.Html.wrapper);
                            },
                            dragstart: function (t) {
                                t.preventDefault();
                            },
                        };
                    return (
                        n.on("destroy", function () {
                            r.unbind(), i.destroy();
                        }),
                        r
                    );
                },
                Anchors: function (t, e, n) {
                    var i = new x(),
                        r = !1,
                        s = !1,
                        o = {
                            mount: function () {
                                (this._a = e.Html.wrapper.querySelectorAll("a")), this.bind();
                            },
                            bind: function () {
                                i.on("click", e.Html.wrapper, this.click);
                            },
                            unbind: function () {
                                i.off("click", e.Html.wrapper);
                            },
                            click: function (t) {
                                s && (t.stopPropagation(), t.preventDefault());
                            },
                            detach: function () {
                                if (((s = !0), !r)) {
                                    for (var t = 0; t < this.items.length; t++)
                                        (this.items[t].draggable = !1),
                                            this.items[t].setAttribute(
                                                "data-href",
                                                this.items[t].getAttribute("href")
                                            ),
                                            this.items[t].removeAttribute("href");
                                    r = !0;
                                }
                                return this;
                            },
                            attach: function () {
                                if (((s = !1), r)) {
                                    for (var t = 0; t < this.items.length; t++)
                                        (this.items[t].draggable = !0),
                                            this.items[t].setAttribute(
                                                "href",
                                                this.items[t].getAttribute("data-href")
                                            );
                                    r = !1;
                                }
                                return this;
                            },
                        };
                    return (
                        g(o, "items", {
                            get: function () {
                                return o._a;
                            },
                        }),
                        n.on("swipe.move", function () {
                            o.detach();
                        }),
                        n.on("swipe.end", function () {
                            e.Transition.after(function () {
                                o.attach();
                            });
                        }),
                        n.on("destroy", function () {
                            o.attach(), o.unbind(), i.destroy();
                        }),
                        o
                    );
                },
                Controls: function (t, e, n) {
                    var i = new x(),
                        r = !!E && { passive: !0 },
                        s = {
                            mount: function () {
                                (this._n = e.Html.root.querySelectorAll(
                                    '[data-glide-el="controls[nav]"]'
                                )),
                                    (this._c = e.Html.root.querySelectorAll(
                                        '[data-glide-el^="controls"]'
                                    )),
                                    this.addBindings();
                            },
                            setActive: function () {
                                for (var t = 0; t < this._n.length; t++)
                                    this.addClass(this._n[t].children);
                            },
                            removeActive: function () {
                                for (var t = 0; t < this._n.length; t++)
                                    this.removeClass(this._n[t].children);
                            },
                            addClass: function (e) {
                                var n = t.settings,
                                    i = e[t.index];
                                i &&
                                    (i.classList.add(n.classes.nav.active),
                                        H(i).forEach(function (t) {
                                            t.classList.remove(n.classes.nav.active);
                                        }));
                            },
                            removeClass: function (e) {
                                var n = e[t.index];
                                n && n.classList.remove(t.settings.classes.nav.active);
                            },
                            addBindings: function () {
                                for (var t = 0; t < this._c.length; t++)
                                    this.bind(this._c[t].children);
                            },
                            removeBindings: function () {
                                for (var t = 0; t < this._c.length; t++)
                                    this.unbind(this._c[t].children);
                            },
                            bind: function (t) {
                                for (var e = 0; e < t.length; e++)
                                    i.on("click", t[e], this.click),
                                        i.on("touchstart", t[e], this.click, r);
                            },
                            unbind: function (t) {
                                for (var e = 0; e < t.length; e++)
                                    i.off(["click", "touchstart"], t[e]);
                            },
                            click: function (t) {
                                t.preventDefault(),
                                    e.Run.make(
                                        e.Direction.resolve(
                                            t.currentTarget.getAttribute("data-glide-dir")
                                        )
                                    );
                            },
                        };
                    return (
                        g(s, "items", {
                            get: function () {
                                return s._c;
                            },
                        }),
                        n.on(["mount.after", "move.after"], function () {
                            s.setActive();
                        }),
                        n.on("destroy", function () {
                            s.removeBindings(), s.removeActive(), i.destroy();
                        }),
                        s
                    );
                },
                Keyboard: function (t, e, n) {
                    var i = new x(),
                        r = {
                            mount: function () {
                                t.settings.keyboard && this.bind();
                            },
                            bind: function () {
                                i.on("keyup", document, this.press);
                            },
                            unbind: function () {
                                i.off("keyup", document);
                            },
                            press: function (t) {
                                39 === t.keyCode && e.Run.make(e.Direction.resolve(">")),
                                    37 === t.keyCode && e.Run.make(e.Direction.resolve("<"));
                            },
                        };
                    return (
                        n.on(["destroy", "update"], function () {
                            r.unbind();
                        }),
                        n.on("update", function () {
                            r.mount();
                        }),
                        n.on("destroy", function () {
                            i.destroy();
                        }),
                        r
                    );
                },
                Autoplay: function (t, e, n) {
                    var i = new x(),
                        r = {
                            mount: function () {
                                this.start(), t.settings.hoverpause && this.bind();
                            },
                            start: function () {
                                var n = this;
                                t.settings.autoplay &&
                                    v(this._i) &&
                                    (this._i = setInterval(function () {
                                        n.stop(), e.Run.make(">"), n.start();
                                    }, this.time));
                            },
                            stop: function () {
                                this._i = clearInterval(this._i);
                            },
                            bind: function () {
                                var t = this;
                                i.on("mouseover", e.Html.root, function () {
                                    t.stop();
                                }),
                                    i.on("mouseout", e.Html.root, function () {
                                        t.start();
                                    });
                            },
                            unbind: function () {
                                i.off(["mouseover", "mouseout"], e.Html.root);
                            },
                        };
                    return (
                        g(r, "time", {
                            get: function () {
                                var n = e.Html.slides[t.index].getAttribute(
                                    "data-glide-autoplay"
                                );
                                return l(n || t.settings.autoplay);
                            },
                        }),
                        n.on(["destroy", "update"], function () {
                            r.unbind();
                        }),
                        n.on(
                            ["run.before", "pause", "destroy", "swipe.start", "update"],
                            function () {
                                r.stop();
                            }
                        ),
                        n.on(["run.after", "play", "swipe.end"], function () {
                            r.start();
                        }),
                        n.on("update", function () {
                            r.mount();
                        }),
                        n.on("destroy", function () {
                            i.destroy();
                        }),
                        r
                    );
                },
                Breakpoints: function (t, e, n) {
                    var i = new x(),
                        r = t.settings,
                        s = q(r.breakpoints),
                        o = u({}, r),
                        a = {
                            match: function (t) {
                                if (void 0 !== window.matchMedia)
                                    for (var e in t)
                                        if (
                                            t.hasOwnProperty(e) &&
                                            window.matchMedia("(max-width: " + e + "px)").matches
                                        )
                                            return t[e];
                                return o;
                            },
                        };
                    return (
                        u(r, a.match(s)),
                        i.on(
                            "resize",
                            window,
                            k(function () {
                                t.settings = y(r, a.match(s));
                            }, t.settings.throttle)
                        ),
                        n.on("update", function () {
                            (s = q(s)), (o = u({}, r));
                        }),
                        n.on("destroy", function () {
                            i.off("resize", window);
                        }),
                        a
                    );
                },
            },
                G = (function (t) {
                    function e() {
                        return (
                            s(this, e),
                            c(
                                this,
                                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
                            )
                        );
                    }
                    return (
                        (function (t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError(
                                    "Super expression must either be null or a function, not " +
                                    typeof e
                                );
                            (t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0,
                                },
                            })),
                                e &&
                                (Object.setPrototypeOf
                                    ? Object.setPrototypeOf(t, e)
                                    : (t.__proto__ = e));
                        })(e, t),
                        o(e, [
                            {
                                key: "mount",
                                value: function () {
                                    var t =
                                        arguments.length > 0 && void 0 !== arguments[0]
                                            ? arguments[0]
                                            : {};
                                    return a(
                                        e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                                        "mount",
                                        this
                                    ).call(this, u({}, F, t));
                                },
                            },
                        ]),
                        e
                    );
                })(w);
            e.Z = G;
        },
    },
]);
