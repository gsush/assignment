!(function () {
    function o(e) {
        return (o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                }
                : function (o) {
                    return o &&
                        "function" == typeof Symbol &&
                        o.constructor === Symbol &&
                        o !== Symbol.prototype
                        ? "symbol"
                        : typeof o;
                })(e);
    }
    !(function (e) {
        var t = e;
        if (
            ((t.__CWT__ =
                "object" === ("undefined" == typeof __CWT__ ? "undefined" : o(__CWT__))
                    ? __CWT__
                    : {}),
                !t.__CWT__.cookiePolicyInstance)
        ) {
            var n = document.getElementsByTagName("head")[0],
                c = document.createElement("script");
            (c.src = "/assets/cookie-policy.js"), (c.async = !0), n.appendChild(c);
        }
    })(window);
})();
