function init() { wimMap = new ymaps.Map("map", { center: [55.761177, 37.664587], zoom: 16, controls: [] }), myPlacemark = new ymaps.Placemark([55.761177, 37.664587], {}), wimMap.geoObjects.add(myPlacemark), wimMap.behaviors.disable("scrollZoom"), wimMap.behaviors.disable("drag") }

function Validator() {
    function e() {
        r = !0, $(".required").each(function() {
            if ($(this).val().length) switch ($(this).attr("name")) {
                case "phone":
                    var e = $(this).val();
                    (e.length < 11 || e.match(/[^0-9]/)) && n($(this));
                    break;
                case "email":
                    var t = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                    t.test($(this).val()) || n($(this))
            } else n($(this))
        }), r && t()
    }

    function t() { $.ajax({ url: "/service/wim/send.php", type: "POST", data: { company: $("input[name=company]").val(), name: $("input[name=name]").val(), company_url: $("input[name=company_url]").val(), phone: $("input[name=phone]").val(), email: $("input[name=email]").val() }, dataType: "JSON", error: function() { console.error("Ошибка при отправке данных на сервер") } }), $(".overlay-form").show(), $(".thanks-popup").fadeIn(), $(".form")[0].reset(), $(".required:focus").blur() }

    function n(e) { r = !1, e.parent().addClass("error") }
    var r;
    $(".form__btn").on("click", function(t) { t.preventDefault(), e() }), $(".required").on("focus", function() { $(this).parent().hasClass("error") && $(this).parent().removeClass("error") }), $(".thanks-popup").on("click", function(e) {
        ($(e.target).hasClass("thanks-popup") || $(e.target).hasClass("closed")) && $(this).fadeOut(), $(".overlay-form").hide()
    }), $("body").on("keyup", function(e) { 13 === e.keyCode && $(".required:focus").length && $(".form__btn").click(), 27 === e.keyCode && $(".thanks-popup:visible").length && ($(".thanks-popup").fadeOut(), $(".overlay-form").hide()) })
}

if (window.Modernizr = function(e, t, n) {
        function r(e) { b.cssText = e }

        function o(e, t) {
            return r(T.join(e + ";") + (t || ""))
        }

        function i(e, t) {
            return typeof e === t
        }

        function a(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function s(e, t) {
            for (var r in e) {
                var o = e[r];
                if (!a(o, "-") && b[o] !== n) return "pfx" == t ? o : !0
            }
            return !1
        }

        function u(e, t, r) {
            for (var o in e) {
                var a = t[e[o]];
                if (a !== n) return r === !1 ? e[o] : i(a, "function") ? a.bind(r || t) : a
            }
            return !1
        }

        function c(e, t, n) {
            var r = e.charAt(0).toUpperCase() + e.slice(1),
                o = (e + " " + E.join(r + " ") + r).split(" ");
            return i(t, "string") || i(t, "undefined") ? s(o, t) : (o = (e + " " + $.join(r + " ") + r).split(" "), u(o, t, n))
        }

        function l() {
            h.input = function(n) {
                for (var r = 0, o = n.length; o > r; r++) j[n[r]] = !!(n[r] in x);
                return j.list && (j.list = !(!t.createElement("datalist") || !e.HTMLDataListElement)), j
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), h.inputtypes = function(e) {
                for (var r, o, i, a = 0, s = e.length; s > a; a++) x.setAttribute("type", o = e[a]), r = "text" !== x.type, r && (x.value = w, x.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && x.style.WebkitAppearance !== n ? (g.appendChild(x), i = t.defaultView, r = i.getComputedStyle && "textfield" !== i.getComputedStyle(x, null).WebkitAppearance && 0 !== x.offsetHeight, g.removeChild(x)) : /^(search|tel)$/.test(o) || (r = /^(url|email)$/.test(o) ? x.checkValidity && x.checkValidity() === !1 : x.value != w)), D[e[a]] = !!r;
                return D
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var f, d, p = "2.8.3",
            h = {},
            m = !0,
            g = t.documentElement,
            v = "modernizr",
            y = t.createElement(v),
            b = y.style,
            x = t.createElement("input"),
            w = ":)",
            C = {}.toString,
            T = " -webkit- -moz- -o- -ms- ".split(" "),
            k = "Webkit Moz O ms",
            E = k.split(" "),
            $ = k.toLowerCase().split(" "),
            N = { svg: "http://www.w3.org/2000/svg" },
            S = {},
            D = {},
            j = {},
            A = [],
            L = A.slice,
            q = function(e, n, r, o) {
                var i, a, s, u, c = t.createElement("div"),
                    l = t.body,
                    f = l || t.createElement("body");
                if (parseInt(r, 10))
                    for (; r--;) s = t.createElement("div"), s.id = o ? o[r] : v + (r + 1), c.appendChild(s);
                return i = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""), c.id = v, (l ? c : f).innerHTML += i, f.appendChild(c), l || (f.style.background = "", f.style.overflow = "hidden", u = g.style.overflow, g.style.overflow = "hidden", g.appendChild(f)), a = n(c, e), l ? c.parentNode.removeChild(c) : (f.parentNode.removeChild(f), g.style.overflow = u), !!a
            },
            H = function(t) {
                var n = e.matchMedia || e.msMatchMedia;
                if (n) return n(t) && n(t).matches || !1;
                var r;
                return q("@media " + t + " { #" + v + " { position: absolute; } }", function(t) { r = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position }), r
            },
            O = function() {
                function e(e, o) {
                    o = o || t.createElement(r[e] || "div"), e = "on" + e;
                    var a = e in o;
                    return a || (o.setAttribute || (o = t.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(e, ""), a = i(o[e], "function"), i(o[e], "undefined") || (o[e] = n), o.removeAttribute(e))), o = null, a
                }
                var r = { select: "input", change: "input", submit: "form", reset: "form", error: "img", load: "img", abort: "img" };
                return e
            }(),
            F = {}.hasOwnProperty;
        d = i(F, "undefined") || i(F.call, "undefined") ? function(e, t) {
            return t in e && i(e.constructor.prototype[t], "undefined")
        } : function(e, t) {
            return F.call(e, t)
        }, Function.prototype.bind || (Function.prototype.bind = function(e) {
            var t = this;
            if ("function" != typeof t) throw new TypeError;
            var n = L.call(arguments, 1),
                r = function() {
                    if (this instanceof r) {
                        var o = function() {};
                        o.prototype = t.prototype;
                        var i = new o,
                            a = t.apply(i, n.concat(L.call(arguments)));
                        return Object(a) === a ? a : i
                    }
                    return t.apply(e, n.concat(L.call(arguments)))
                };
            return r
        }), S.flexbox = function() {
            return c("flexWrap")
        }, S.flexboxlegacy = function() {
            return c("boxDirection")
        }, S.canvas = function() {
            var e = t.createElement("canvas");
            return !(!e.getContext || !e.getContext("2d"))
        }, S.canvastext = function() {
            return !(!h.canvas || !i(t.createElement("canvas").getContext("2d").fillText, "function"))
        }, S.webgl = function() {
            return !!e.WebGLRenderingContext
        }, S.touch = function() {
            var n;
            return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : q(["@media (", T.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) { n = 9 === e.offsetTop }), n
        }, S.geolocation = function() {
            return "geolocation" in navigator
        }, S.postmessage = function() {
            return !!e.postMessage
        }, S.websqldatabase = function() {
            return !!e.openDatabase
        }, S.indexedDB = function() {
            return !!c("indexedDB", e)
        }, S.hashchange = function() {
            return O("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
        }, S.history = function() {
            return !(!e.history || !history.pushState)
        }, S.draganddrop = function() {
            var e = t.createElement("div");
            return "draggable" in e || "ondragstart" in e && "ondrop" in e
        }, S.websockets = function() {
            return "WebSocket" in e || "MozWebSocket" in e
        }, S.rgba = function() {
            return r("background-color:rgba(150,255,150,.5)"), a(b.backgroundColor, "rgba")
        }, S.hsla = function() {
            return r("background-color:hsla(120,40%,100%,.5)"), a(b.backgroundColor, "rgba") || a(b.backgroundColor, "hsla")
        }, S.multiplebgs = function() {
            return r("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background)
        }, S.backgroundsize = function() {
            return c("backgroundSize")
        }, S.borderimage = function() {
            return c("borderImage")
        }, S.borderradius = function() {
            return c("borderRadius")
        }, S.boxshadow = function() {
            return c("boxShadow")
        }, S.textshadow = function() {
            return "" === t.createElement("div").style.textShadow
        }, S.opacity = function() {
            return o("opacity:.55"), /^0.55$/.test(b.opacity)
        }, S.cssanimations = function() {
            return c("animationName")
        }, S.csscolumns = function() {
            return c("columnCount")
        }, S.cssgradients = function() {
            var e = "background-image:",
                t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                n = "linear-gradient(left top,#9f9, white);";
            return r((e + "-webkit- ".split(" ").join(t + e) + T.join(n + e)).slice(0, -e.length)), a(b.backgroundImage, "gradient")
        }, S.cssreflections = function() {
            return c("boxReflect")
        }, S.csstransforms = function() {
            return !!c("transform")
        }, S.csstransforms3d = function() {
            var e = !!c("perspective");
            return e && "webkitPerspective" in g.style && q("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t, n) { e = 9 === t.offsetLeft && 3 === t.offsetHeight }), e
        }, S.csstransitions = function() {
            return c("transition")
        }, S.fontface = function() {
            var e;
            return q('@font-face {font-family:"font";src:url("https://")}', function(n, r) {
                var o = t.getElementById("smodernizr"),
                    i = o.sheet || o.styleSheet,
                    a = i ? i.cssRules && i.cssRules[0] ? i.cssRules[0].cssText : i.cssText || "" : "";
                e = /src/i.test(a) && 0 === a.indexOf(r.split(" ")[0])
            }), e
        }, S.generatedcontent = function() {
            var e;
            return q(["#", v, "{font:0/0 a}#", v, ':after{content:"', w, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) { e = t.offsetHeight >= 3 }), e
        }, S.video = function() {
            var e = t.createElement("video"),
                n = !1;
            try {
                (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (r) {}
            return n
        }, S.audio = function() {
            var e = t.createElement("audio"),
                n = !1;
            try {
                (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (r) {}
            return n
        }, S.localstorage = function() {
            try {
                return localStorage.setItem(v, v), localStorage.removeItem(v), !0
            } catch (e) {
                return !1
            }
        }, S.sessionstorage = function() {
            try {
                return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
            } catch (e) {
                return !1
            }
        }, S.webworkers = function() {
            return !!e.Worker
        }, S.applicationcache = function() {
            return !!e.applicationCache
        }, S.svg = function() {
            return !!t.createElementNS && !!t.createElementNS(N.svg, "svg").createSVGRect
        }, S.inlinesvg = function() {
            var e = t.createElement("div");
            return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == N.svg
        }, S.smil = function() {
            return !!t.createElementNS && /SVGAnimate/.test(C.call(t.createElementNS(N.svg, "animate")))
        }, S.svgclippaths = function() {
            return !!t.createElementNS && /SVGClipPath/.test(C.call(t.createElementNS(N.svg, "clipPath")))
        };
        for (var P in S) d(S, P) && (f = P.toLowerCase(), h[f] = S[P](), A.push((h[f] ? "" : "no-") + f));
        return h.input || l(), h.addTest = function(e, t) {
                if ("object" == typeof e)
                    for (var r in e) d(e, r) && h.addTest(r, e[r]);
                else {
                    if (e = e.toLowerCase(), h[e] !== n) return h;
                    t = "function" == typeof t ? t() : t, "undefined" != typeof m && m && (g.className += " " + (t ? "" : "no-") + e), h[e] = t
                }
                return h
            }, r(""), y = x = null,
            function(e, t) {
                function n(e, t) {
                    var n = e.createElement("p"),
                        r = e.getElementsByTagName("head")[0] || e.documentElement;
                    return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
                }

                function r() {
                    var e = y.elements;
                    return "string" == typeof e ? e.split(" ") : e
                }

                function o(e) {
                    var t = v[e[m]];
                    return t || (t = {}, g++, e[m] = g, v[g] = t), t
                }

                function i(e, n, r) {
                    if (n || (n = t), l) return n.createElement(e);
                    r || (r = o(n));
                    var i;
                    return i = r.cache[e] ? r.cache[e].cloneNode() : h.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !i.canHaveChildren || p.test(e) || i.tagUrn ? i : r.frag.appendChild(i)
                }

                function a(e, n) {
                    if (e || (e = t), l) return e.createDocumentFragment();
                    n = n || o(e);
                    for (var i = n.frag.cloneNode(), a = 0, s = r(), u = s.length; u > a; a++) i.createElement(s[a]);
                    return i
                }

                function s(e, t) {
                    t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                        return y.shivMethods ? i(n, e, t) : t.createElem(n)
                    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-]+/g, function(e) {
                        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                    }) + ");return n}")(y, t.frag)
                }

                function u(e) {
                    e || (e = t);
                    var r = o(e);
                    return !y.shivCSS || c || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), l || s(e, r), e
                }
                var c, l, f = "3.7.0",
                    d = e.html5 || {},
                    p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    m = "_html5shiv",
                    g = 0,
                    v = {};
                ! function() {
                    try {
                        var e = t.createElement("a");
                        e.innerHTML = "<xyz></xyz>", c = "hidden" in e, l = 1 == e.childNodes.length || function() {
                            t.createElement("a");
                            var e = t.createDocumentFragment();
                            return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                        }()
                    } catch (n) { c = !0, l = !0 }
                }();
                var y = { elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video", version: f, shivCSS: d.shivCSS !== !1, supportsUnknownElements: l, shivMethods: d.shivMethods !== !1, type: "default", shivDocument: u, createElement: i, createDocumentFragment: a };
                e.html5 = y, u(t)
            }(this, t), h._version = p, h._prefixes = T, h._domPrefixes = $, h._cssomPrefixes = E, h.mq = H, h.hasEvent = O, h.testProp = function(e) {
                return s([e])
            }, h.testAllProps = c, h.testStyles = q, h.prefixed = function(e, t, n) {
                return t ? c(e, t, n) : c(e, "pfx")
            }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + A.join(" ") : ""), h
    }(this, this.document), ! function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        function n(e) {
            var t = "length" in e && e.length,
                n = Z.type(e);
            return "function" === n || Z.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }

        function r(e, t, n) {
            if (Z.isFunction(t)) return Z.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
            if (t.nodeType) return Z.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (se.test(t)) return Z.filter(t, e, n);
                t = Z.filter(t, e)
            }
            return Z.grep(e, function(e) {
                return V.call(t, e) >= 0 !== n
            })
        }

        function o(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function i(e) {
            var t = he[e] = {};
            return Z.each(e.match(pe) || [], function(e, n) { t[n] = !0 }), t
        }

        function a() { Q.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1), Z.ready() }

        function s() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }), this.expando = Z.expando + s.uid++
        }

        function u(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
                if (r = "data-" + t.replace(xe, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                    try { n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : be.test(n) ? Z.parseJSON(n) : n } catch (o) {}
                    ye.set(e, t, n)
                } else n = void 0;
            return n
        }

        function c() {
            return !0
        }

        function l() {
            return !1
        }

        function f() {
            try {
                return Q.activeElement
            } catch (e) {}
        }

        function d(e, t) {
            return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function p(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function h(e) {
            var t = Fe.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function m(e, t) {
            for (var n = 0, r = e.length; r > n; n++) ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
        }

        function g(e, t) {
            var n, r, o, i, a, s, u, c;
            if (1 === t.nodeType) {
                if (ve.hasData(e) && (i = ve.access(e), a = ve.set(t, i), c = i.events)) {
                    delete a.handle, a.events = {};
                    for (o in c)
                        for (n = 0, r = c[o].length; r > n; n++) Z.event.add(t, o, c[o][n])
                }
                ye.hasData(e) && (s = ye.access(e), u = Z.extend({}, s), ye.set(t, u))
            }
        }

        function v(e, t) {
            var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
        }

        function y(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && ke.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }

        function b(t, n) {
            var r, o = Z(n.createElement(t)).appendTo(n.body),
                i = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(o[0])) ? r.display : Z.css(o[0], "display");
            return o.detach(), i
        }

        function x(e) {
            var t = Q,
                n = Re[e];
            return n || (n = b(e, t), "none" !== n && n || (_e = (_e || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = _e[0].contentDocument, t.write(), t.close(), n = b(e, t), _e.detach()), Re[e] = n), n
        }

        function w(e, t, n) {
            var r, o, i, a, s = e.style;
            return n = n || Be(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || Z.contains(e.ownerDocument, e) || (a = Z.style(e, t)), Ie.test(a) && We.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a
        }

        function C(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function T(e, t) {
            if (t in e) return t;
            for (var n = t[0].toUpperCase() + t.slice(1), r = t, o = Ye.length; o--;)
                if (t = Ye[o] + n, t in e) return t;
            return r
        }

        function k(e, t, n) {
            var r = Xe.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
        }

        function E(e, t, n, r, o) {
            for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > i; i += 2) "margin" === n && (a += Z.css(e, n + Ce[i], !0, o)), r ? ("content" === n && (a -= Z.css(e, "padding" + Ce[i], !0, o)), "margin" !== n && (a -= Z.css(e, "border" + Ce[i] + "Width", !0, o))) : (a += Z.css(e, "padding" + Ce[i], !0, o), "padding" !== n && (a += Z.css(e, "border" + Ce[i] + "Width", !0, o)));
            return a
        }

        function $(e, t, n) {
            var r = !0,
                o = "width" === t ? e.offsetWidth : e.offsetHeight,
                i = Be(e),
                a = "border-box" === Z.css(e, "boxSizing", !1, i);
            if (0 >= o || null == o) {
                if (o = w(e, t, i), (0 > o || null == o) && (o = e.style[t]), Ie.test(o)) return o;
                r = a && (J.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
            }
            return o + E(e, t, n || (a ? "border" : "content"), r, i) + "px"
        }

        function N(e, t) {
            for (var n, r, o, i = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (i[a] = ve.get(r, "olddisplay"), n = r.style.display, t ? (i[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Te(r) && (i[a] = ve.access(r, "olddisplay", x(r.nodeName)))) : (o = Te(r), "none" === n && o || ve.set(r, "olddisplay", o ? n : Z.css(r, "display"))));
            for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? i[a] || "" : "none"));
            return e
        }

        function S(e, t, n, r, o) {
            return new S.prototype.init(e, t, n, r, o)
        }

        function D() {
            return setTimeout(function() { Je = void 0 }), Je = Z.now()
        }

        function j(e, t) {
            var n, r = 0,
                o = { height: e };
            for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Ce[r], o["margin" + n] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o
        }

        function A(e, t, n) {
            for (var r, o = (nt[t] || []).concat(nt["*"]), i = 0, a = o.length; a > i; i++)
                if (r = o[i].call(n, t, e)) return r
        }

        function L(e, t, n) {
            var r, o, i, a, s, u, c, l, f = this,
                d = {},
                p = e.style,
                h = e.nodeType && Te(e),
                m = ve.get(e, "fxshow");
            n.queue || (s = Z._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() { s.unqueued || u() }), s.unqueued++, f.always(function() { f.always(function() { s.unqueued--, Z.queue(e, "fx").length || s.empty.fire() }) })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = Z.css(e, "display"), l = "none" === c ? ve.get(e, "olddisplay") || x(e.nodeName) : c, "inline" === l && "none" === Z.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function() { p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2] }));
            for (r in t)
                if (o = t[r], Ke.exec(o)) {
                    if (delete t[r], i = i || "toggle" === o, o === (h ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[r]) continue;
                        h = !0
                    }
                    d[r] = m && m[r] || Z.style(e, r)
                } else c = void 0;
            if (Z.isEmptyObject(d)) "inline" === ("none" === c ? x(e.nodeName) : c) && (p.display = c);
            else {
                m ? "hidden" in m && (h = m.hidden) : m = ve.access(e, "fxshow", {}), i && (m.hidden = !h), h ? Z(e).show() : f.done(function() { Z(e).hide() }), f.done(function() {
                    var t;
                    ve.remove(e, "fxshow");
                    for (t in d) Z.style(e, t, d[t])
                });
                for (r in d) a = A(h ? m[r] : 0, r, f), r in m || (m[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
            }
        }

        function q(e, t) {
            var n, r, o, i, a;
            for (n in e)
                if (r = Z.camelCase(n), o = t[r], i = e[n], Z.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), a = Z.cssHooks[r], a && "expand" in a) {
                    i = a.expand(i), delete e[r];
                    for (n in i) n in e || (e[n] = i[n], t[n] = o)
                } else t[r] = o
        }

        function H(e, t, n) {
            var r, o, i = 0,
                a = tt.length,
                s = Z.Deferred().always(function() { delete u.elem }),
                u = function() {
                    if (o) return !1;
                    for (var t = Je || D(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, i = 1 - r, a = 0, u = c.tweens.length; u > a; a++) c.tweens[a].run(i);
                    return s.notifyWith(e, [c, i, n]), 1 > i && u ? n : (s.resolveWith(e, [c]), !1)
                },
                c = s.promise({
                    elem: e,
                    props: Z.extend({}, t),
                    opts: Z.extend(!0, { specialEasing: {} }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Je || D(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = Z.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(r), r
                    },
                    stop: function(t) {
                        var n = 0,
                            r = t ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; r > n; n++) c.tweens[n].run(1);
                        return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
                    }
                }),
                l = c.props;
            for (q(l, c.opts.specialEasing); a > i; i++)
                if (r = tt[i].call(c, e, l, c.opts)) return r;
            return Z.map(l, A, c), Z.isFunction(c.opts.start) && c.opts.start.call(e, c), Z.fx.timer(Z.extend(u, { elem: e, anim: c, queue: c.opts.queue })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function O(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, o = 0,
                    i = t.toLowerCase().match(pe) || [];
                if (Z.isFunction(n))
                    for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function F(e, t, n, r) {
            function o(s) {
                var u;
                return i[s] = !0, Z.each(e[s] || [], function(e, s) {
                    var c = s(t, n, r);
                    return "string" != typeof c || a || i[c] ? a ? !(u = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
                }), u
            }
            var i = {},
                a = e === bt;
            return o(t.dataTypes[0]) || !i["*"] && o("*")
        }

        function P(e, t) {
            var n, r, o = Z.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
            return r && Z.extend(!0, e, r), e
        }

        function M(e, t, n) {
            for (var r, o, i, a, s = e.contents, u = e.dataTypes;
                "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
                for (o in s)
                    if (s[o] && s[o].test(r)) {
                        u.unshift(o);
                        break
                    }
            if (u[0] in n) i = u[0];
            else {
                for (o in n) {
                    if (!u[0] || e.converters[o + " " + u[0]]) {
                        i = o;
                        break
                    }
                    a || (a = o)
                }
                i = i || a
            }
            return i ? (i !== u[0] && u.unshift(i), n[i]) : void 0
        }

        function _(e, t, n, r) {
            var o, i, a, s, u, c = {},
                l = e.dataTypes.slice();
            if (l[1])
                for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
            for (i = l.shift(); i;)
                if (e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = l.shift())
                    if ("*" === i) i = u;
                    else if ("*" !== u && u !== i) {
                if (a = c[u + " " + i] || c["* " + i], !a)
                    for (o in c)
                        if (s = o.split(" "), s[1] === i && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                            a === !0 ? a = c[o] : c[o] !== !0 && (i = s[0], l.unshift(s[1]));
                            break
                        }
                if (a !== !0)
                    if (a && e["throws"]) t = a(t);
                    else try { t = a(t) } catch (f) {
                        return { state: "parsererror", error: a ? f : "No conversion from " + u + " to " + i }
                    }
            }
            return { state: "success", data: t }
        }

        function R(e, t, n, r) {
            var o;
            if (Z.isArray(t)) Z.each(t, function(t, o) { n || kt.test(e) ? r(e, o) : R(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, r) });
            else if (n || "object" !== Z.type(t)) r(e, t);
            else
                for (o in t) R(e + "[" + o + "]", t[o], n, r)
        }

        function W(e) {
            return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }
        var I = [],
            B = I.slice,
            z = I.concat,
            X = I.push,
            V = I.indexOf,
            U = {},
            G = U.toString,
            Y = U.hasOwnProperty,
            J = {},
            Q = e.document,
            K = "2.1.4",
            Z = function(e, t) {
                return new Z.fn.init(e, t)
            },
            ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            te = /^-ms-/,
            ne = /-([\da-z])/gi,
            re = function(e, t) {
                return t.toUpperCase()
            };
        Z.fn = Z.prototype = {
            jquery: K,
            constructor: Z,
            selector: "",
            length: 0,
            toArray: function() {
                return B.call(this)
            },
            get: function(e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : B.call(this)
            },
            pushStack: function(e) {
                var t = Z.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return Z.each(this, e, t)
            },
            map: function(e) {
                return this.pushStack(Z.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(B.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: X,
            sort: I.sort,
            splice: I.splice
        }, Z.extend = Z.fn.extend = function() {
            var e, t, n, r, o, i, a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || Z.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
                if (null != (e = arguments[s]))
                    for (t in e) n = a[t], r = e[t], a !== r && (c && r && (Z.isPlainObject(r) || (o = Z.isArray(r))) ? (o ? (o = !1, i = n && Z.isArray(n) ? n : []) : i = n && Z.isPlainObject(n) ? n : {}, a[t] = Z.extend(c, i, r)) : void 0 !== r && (a[t] = r));
            return a
        }, Z.extend({
            expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === Z.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0
            },
            isPlainObject: function(e) {
                return "object" !== Z.type(e) || e.nodeType || Z.isWindow(e) ? !1 : e.constructor && !Y.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? U[G.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                var t, n = eval;
                e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = Q.createElement("script"), t.text = e, Q.head.appendChild(t).parentNode.removeChild(t)) : n(e))
            },
            camelCase: function(e) {
                return e.replace(te, "ms-").replace(ne, re)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, r) {
                var o, i = 0,
                    a = e.length,
                    s = n(e);
                if (r) {
                    if (s)
                        for (; a > i && (o = t.apply(e[i], r), o !== !1); i++);
                    else
                        for (i in e)
                            if (o = t.apply(e[i], r), o === !1) break
                } else if (s)
                    for (; a > i && (o = t.call(e[i], i, e[i]), o !== !1); i++);
                else
                    for (i in e)
                        if (o = t.call(e[i], i, e[i]), o === !1) break; return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(ee, "")
            },
            makeArray: function(e, t) {
                var r = t || [];
                return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : X.call(r, e)), r
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : V.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, o = e.length; n > r; r++) e[o++] = t[r];
                return e.length = o, e
            },
            grep: function(e, t, n) {
                for (var r, o = [], i = 0, a = e.length, s = !n; a > i; i++) r = !t(e[i], i), r !== s && o.push(e[i]);
                return o
            },
            map: function(e, t, r) {
                var o, i = 0,
                    a = e.length,
                    s = n(e),
                    u = [];
                if (s)
                    for (; a > i; i++) o = t(e[i], i, r), null != o && u.push(o);
                else
                    for (i in e) o = t(e[i], i, r), null != o && u.push(o);
                return z.apply([], u)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, r, o;
                return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (r = B.call(arguments, 2), o = function() {
                    return e.apply(t || this, r.concat(B.call(arguments)))
                }, o.guid = e.guid = e.guid || Z.guid++, o) : void 0
            },
            now: Date.now,
            support: J
        }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) { U["[object " + t + "]"] = t.toLowerCase() });
        var oe = function(e) {
            function t(e, t, n, r) {
                var o, i, a, s, u, c, f, p, h, m;
                if ((t ? t.ownerDocument || t : R) !== L && A(t), t = t || L, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
                if (!r && H) {
                    if (11 !== s && (o = ye.exec(e)))
                        if (a = o[1]) {
                            if (9 === s) {
                                if (i = t.getElementById(a), !i || !i.parentNode) return n;
                                if (i.id === a) return n.push(i), n
                            } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(a)) && M(t, i) && i.id === a) return n.push(i), n
                        } else {
                            if (o[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = o[3]) && w.getElementsByClassName) return K.apply(n, t.getElementsByClassName(a)), n
                        }
                    if (w.qsa && (!O || !O.test(e))) {
                        if (p = f = _, h = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (c = E(e), (f = t.getAttribute("id")) ? p = f.replace(xe, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", u = c.length; u--;) c[u] = p + d(c[u]);
                            h = be.test(e) && l(t.parentNode) || t, m = c.join(",")
                        }
                        if (m) try {
                            return K.apply(n, h.querySelectorAll(m)), n
                        } catch (g) {} finally { f || t.removeAttribute("id") }
                    }
                }
                return N(e.replace(ue, "$1"), t, n, r)
            }

            function n() {
                function e(n, r) {
                    return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = r
                }
                var t = [];
                return e
            }

            function r(e) {
                return e[_] = !0, e
            }

            function o(e) {
                var t = L.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally { t.parentNode && t.parentNode.removeChild(t), t = null }
            }

            function i(e, t) {
                for (var n = e.split("|"), r = e.length; r--;) C.attrHandle[n[r]] = t
            }

            function a(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function u(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function c(e) {
                return r(function(t) {
                    return t = +t, r(function(n, r) {
                        for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                    })
                })
            }

            function l(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function f() {}

            function d(e) {
                for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                return r
            }

            function p(e, t, n) {
                var r = t.dir,
                    o = n && "parentNode" === r,
                    i = I++;
                return t.first ? function(t, n, i) {
                    for (; t = t[r];)
                        if (1 === t.nodeType || o) return e(t, n, i)
                } : function(t, n, a) {
                    var s, u, c = [W, i];
                    if (a) {
                        for (; t = t[r];)
                            if ((1 === t.nodeType || o) && e(t, n, a)) return !0
                    } else
                        for (; t = t[r];)
                            if (1 === t.nodeType || o) {
                                if (u = t[_] || (t[_] = {}), (s = u[r]) && s[0] === W && s[1] === i) return c[2] = s[2];
                                if (u[r] = c, c[2] = e(t, n, a)) return !0
                            }
                }
            }

            function h(e) {
                return e.length > 1 ? function(t, n, r) {
                    for (var o = e.length; o--;)
                        if (!e[o](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function m(e, n, r) {
                for (var o = 0, i = n.length; i > o; o++) t(e, n[o], r);
                return r
            }

            function g(e, t, n, r, o) {
                for (var i, a = [], s = 0, u = e.length, c = null != t; u > s; s++)(i = e[s]) && (!n || n(i, r, o)) && (a.push(i), c && t.push(s));
                return a
            }

            function v(e, t, n, o, i, a) {
                return o && !o[_] && (o = v(o)), i && !i[_] && (i = v(i, a)), r(function(r, a, s, u) {
                    var c, l, f, d = [],
                        p = [],
                        h = a.length,
                        v = r || m(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || !r && t ? v : g(v, d, e, s, u),
                        b = n ? i || (r ? e : h || o) ? [] : a : y;
                    if (n && n(y, b, s, u), o)
                        for (c = g(b, p), o(c, [], s, u), l = c.length; l--;)(f = c[l]) && (b[p[l]] = !(y[p[l]] = f));
                    if (r) {
                        if (i || e) {
                            if (i) {
                                for (c = [], l = b.length; l--;)(f = b[l]) && c.push(y[l] = f);
                                i(null, b = [], c, u)
                            }
                            for (l = b.length; l--;)(f = b[l]) && (c = i ? ee(r, f) : d[l]) > -1 && (r[c] = !(a[c] = f))
                        }
                    } else b = g(b === a ? b.splice(h, b.length) : b), i ? i(null, a, b, u) : K.apply(a, b)
                })
            }

            function y(e) {
                for (var t, n, r, o = e.length, i = C.relative[e[0].type], a = i || C.relative[" "], s = i ? 1 : 0, u = p(function(e) {
                        return e === t
                    }, a, !0), c = p(function(e) {
                        return ee(t, e) > -1
                    }, a, !0), l = [function(e, n, r) {
                        var o = !i && (r || n !== S) || ((t = n).nodeType ? u(e, n, r) : c(e, n, r));
                        return t = null, o
                    }]; o > s; s++)
                    if (n = C.relative[e[s].type]) l = [p(h(l), n)];
                    else {
                        if (n = C.filter[e[s].type].apply(null, e[s].matches), n[_]) {
                            for (r = ++s; o > r && !C.relative[e[r].type]; r++);
                            return v(s > 1 && h(l), s > 1 && d(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(ue, "$1"), n, r > s && y(e.slice(s, r)), o > r && y(e = e.slice(r)), o > r && d(e))
                        }
                        l.push(n)
                    }
                return h(l)
            }

            function b(e, n) {
                var o = n.length > 0,
                    i = e.length > 0,
                    a = function(r, a, s, u, c) {
                        var l, f, d, p = 0,
                            h = "0",
                            m = r && [],
                            v = [],
                            y = S,
                            b = r || i && C.find.TAG("*", c),
                            x = W += null == y ? 1 : Math.random() || .1,
                            w = b.length;
                        for (c && (S = a !== L && a); h !== w && null != (l = b[h]); h++) {
                            if (i && l) {
                                for (f = 0; d = e[f++];)
                                    if (d(l, a, s)) {
                                        u.push(l);
                                        break
                                    }
                                c && (W = x)
                            }
                            o && ((l = !d && l) && p--, r && m.push(l))
                        }
                        if (p += h, o && h !== p) {
                            for (f = 0; d = n[f++];) d(m, v, a, s);
                            if (r) {
                                if (p > 0)
                                    for (; h--;) m[h] || v[h] || (v[h] = J.call(u));
                                v = g(v)
                            }
                            K.apply(u, v), c && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                        }
                        return c && (W = x, S = y), m
                    };
                return o ? r(a) : a
            }
            var x, w, C, T, k, E, $, N, S, D, j, A, L, q, H, O, F, P, M, _ = "sizzle" + 1 * new Date,
                R = e.document,
                W = 0,
                I = 0,
                B = n(),
                z = n(),
                X = n(),
                V = function(e, t) {
                    return e === t && (j = !0), 0
                },
                U = 1 << 31,
                G = {}.hasOwnProperty,
                Y = [],
                J = Y.pop,
                Q = Y.push,
                K = Y.push,
                Z = Y.slice,
                ee = function(e, t) {
                    for (var n = 0, r = e.length; r > n; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                oe = re.replace("w", "w#"),
                ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]",
                ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
                se = new RegExp(ne + "+", "g"),
                ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                ce = new RegExp("^" + ne + "*," + ne + "*"),
                le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                fe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                de = new RegExp(ae),
                pe = new RegExp("^" + oe + "$"),
                he = {
                    ID: new RegExp("^#(" + re + ")"),
                    CLASS: new RegExp("^\\.(" + re + ")"),
                    TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ie),
                    PSEUDO: new RegExp("^" + ae),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                },
                me = /^(?:input|select|textarea|button)$/i,
                ge = /^h\d$/i,
                ve = /^[^{]+\{\s*\[native \w/,
                ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                be = /[+~]/,
                xe = /'|\\/g,
                we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                Ce = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                },
                Te = function() { A() };
            try { K.apply(Y = Z.call(R.childNodes), R.childNodes), Y[R.childNodes.length].nodeType } catch (ke) {
                K = {
                    apply: Y.length ? function(e, t) { Q.apply(e, Z.call(t)) } : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }
            w = t.support = {}, k = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, A = t.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : R;
                return r !== L && 9 === r.nodeType && r.documentElement ? (L = r, q = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), H = !k(r), w.attributes = o(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), w.getElementsByTagName = o(function(e) {
                    return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
                }), w.getElementsByClassName = ve.test(r.getElementsByClassName), w.getById = o(function(e) {
                    return q.appendChild(e).id = _, !r.getElementsByName || !r.getElementsByName(_).length
                }), w.getById ? (C.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && H) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, C.filter.ID = function(e) {
                    var t = e.replace(we, Ce);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete C.find.ID, C.filter.ID = function(e) {
                    var t = e.replace(we, Ce);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), C.find.TAG = w.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        o = 0,
                        i = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return i
                }, C.find.CLASS = w.getElementsByClassName && function(e, t) {
                    return H ? t.getElementsByClassName(e) : void 0
                }, F = [], O = [], (w.qsa = ve.test(r.querySelectorAll)) && (o(function(e) { q.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + _ + "+*").length || O.push(".#.+[+~]") }), o(function(e) {
                    var t = r.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
                })), (w.matchesSelector = ve.test(P = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && o(function(e) { w.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), F.push("!=", ae) }), O = O.length && new RegExp(O.join("|")), F = F.length && new RegExp(F.join("|")), t = ve.test(q.compareDocumentPosition), M = t || ve.test(q.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, V = t ? function(e, t) {
                    if (e === t) return j = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === R && M(R, e) ? -1 : t === r || t.ownerDocument === R && M(R, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return j = !0, 0;
                    var n, o = 0,
                        i = e.parentNode,
                        s = t.parentNode,
                        u = [e],
                        c = [t];
                    if (!i || !s) return e === r ? -1 : t === r ? 1 : i ? -1 : s ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                    if (i === s) return a(e, t);
                    for (n = e; n = n.parentNode;) u.unshift(n);
                    for (n = t; n = n.parentNode;) c.unshift(n);
                    for (; u[o] === c[o];) o++;
                    return o ? a(u[o], c[o]) : u[o] === R ? -1 : c[o] === R ? 1 : 0
                }, r) : L
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== L && A(e), n = n.replace(fe, "='$1']"), !(!w.matchesSelector || !H || F && F.test(n) || O && O.test(n))) try {
                    var r = P.call(e, n);
                    if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (o) {}
                return t(n, L, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== L && A(e), M(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== L && A(e);
                var n = C.attrHandle[t.toLowerCase()],
                    r = n && G.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
                return void 0 !== r ? r : w.attributes || !H ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    o = 0;
                if (j = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(V), j) {
                    for (; t = e[o++];) t === e[o] && (r = n.push(o));
                    for (; r--;) e.splice(n[r], 1)
                }
                return D = null, e
            }, T = t.getText = function(e) {
                var t, n = "",
                    r = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[r++];) n += T(t);
                return n
            }, C = t.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: he,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(we, Ce), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Ce), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(we, Ce).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = B[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && B(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, r) {
                        return function(o) {
                            var i = t.attr(o, e);
                            return null == i ? "!=" === n : n ? (i += "", "=" === n ? i === r : "!=" === n ? i !== r : "^=" === n ? r && 0 === i.indexOf(r) : "*=" === n ? r && i.indexOf(r) > -1 : "$=" === n ? r && i.slice(-r.length) === r : "~=" === n ? (" " + i.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? i === r || i.slice(0, r.length + 1) === r + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r, o) {
                        var i = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === o ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, u) {
                            var c, l, f, d, p, h, m = i !== a ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !u && !s;
                            if (g) {
                                if (i) {
                                    for (; m;) {
                                        for (f = t; f = f[m];)
                                            if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                    for (l = g[_] || (g[_] = {}), c = l[e] || [], p = c[0] === W && c[1], d = c[0] === W && c[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (d = p = 0) || h.pop();)
                                        if (1 === f.nodeType && ++d && f === t) {
                                            l[e] = [W, p, d];
                                            break
                                        }
                                } else if (y && (c = (t[_] || (t[_] = {}))[e]) && c[0] === W) d = c[1];
                                else
                                    for (;
                                        (f = ++p && f && f[m] || (d = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++d || (y && ((f[_] || (f[_] = {}))[e] = [W, d]), f !== t)););
                                return d -= o, d === r || d % r === 0 && d / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var o, i = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return i[_] ? i(n) : i.length > 1 ? (o = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                            for (var r, o = i(e, n), a = o.length; a--;) r = ee(e, o[a]), e[r] = !(t[r] = o[a])
                        }) : function(e) {
                            return i(e, 0, o)
                        }) : i
                    }
                },
                pseudos: {
                    not: r(function(e) {
                        var t = [],
                            n = [],
                            o = $(e.replace(ue, "$1"));
                        return o[_] ? r(function(e, t, n, r) {
                            for (var i, a = o(e, null, r, []), s = e.length; s--;)(i = a[s]) && (e[s] = !(t[s] = i))
                        }) : function(e, r, i) {
                            return t[0] = e, o(t, null, i, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: r(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: r(function(e) {
                        return e = e.replace(we, Ce),
                            function(t) {
                                return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                            }
                    }),
                    lang: r(function(e) {
                        return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Ce).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === q
                    },
                    focus: function(e) {
                        return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !C.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ge.test(e.nodeName)
                    },
                    input: function(e) {
                        return me.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(e, t) {
                        return [t - 1]
                    }),
                    eq: c(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: c(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: c(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: c(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: c(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }, C.pseudos.nth = C.pseudos.eq;
            for (x in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) C.pseudos[x] = s(x);
            for (x in { submit: !0, reset: !0 }) C.pseudos[x] = u(x);
            return f.prototype = C.filters = C.pseudos, C.setFilters = new f, E = t.tokenize = function(e, n) {
                var r, o, i, a, s, u, c, l = z[e + " "];
                if (l) return n ? 0 : l.slice(0);
                for (s = e, u = [], c = C.preFilter; s;) {
                    (!r || (o = ce.exec(s))) && (o && (s = s.slice(o[0].length) || s), u.push(i = [])), r = !1, (o = le.exec(s)) && (r = o.shift(), i.push({ value: r, type: o[0].replace(ue, " ") }), s = s.slice(r.length));
                    for (a in C.filter) !(o = he[a].exec(s)) || c[a] && !(o = c[a](o)) || (r = o.shift(), i.push({ value: r, type: a, matches: o }), s = s.slice(r.length));
                    if (!r) break
                }
                return n ? s.length : s ? t.error(e) : z(e, u).slice(0)
            }, $ = t.compile = function(e, t) {
                var n, r = [],
                    o = [],
                    i = X[e + " "];
                if (!i) {
                    for (t || (t = E(e)), n = t.length; n--;) i = y(t[n]), i[_] ? r.push(i) : o.push(i);
                    i = X(e, b(o, r)), i.selector = e
                }
                return i
            }, N = t.select = function(e, t, n, r) {
                var o, i, a, s, u, c = "function" == typeof e && e,
                    f = !r && E(e = c.selector || e);
                if (n = n || [], 1 === f.length) {
                    if (i = f[0] = f[0].slice(0), i.length > 2 && "ID" === (a = i[0]).type && w.getById && 9 === t.nodeType && H && C.relative[i[1].type]) {
                        if (t = (C.find.ID(a.matches[0].replace(we, Ce), t) || [])[0], !t) return n;
                        c && (t = t.parentNode), e = e.slice(i.shift().value.length)
                    }
                    for (o = he.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !C.relative[s = a.type]);)
                        if ((u = C.find[s]) && (r = u(a.matches[0].replace(we, Ce), be.test(i[0].type) && l(t.parentNode) || t))) {
                            if (i.splice(o, 1), e = r.length && d(i), !e) return K.apply(n, r), n;
                            break
                        }
                }
                return (c || $(e, f))(r, t, !H, n, be.test(e) && l(t.parentNode) || t), n
            }, w.sortStable = _.split("").sort(V).join("") === _, w.detectDuplicates = !!j, A(), w.sortDetached = o(function(e) {
                return 1 & e.compareDocumentPosition(L.createElement("div"))
            }), o(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || i("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), w.attributes && o(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || i("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), o(function(e) {
                return null == e.getAttribute("disabled")
            }) || i(te, function(e, t, n) {
                var r;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }), t
        }(e);
        Z.find = oe, Z.expr = oe.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = oe.uniqueSort, Z.text = oe.getText, Z.isXMLDoc = oe.isXML, Z.contains = oe.contains;
        var ie = Z.expr.match.needsContext,
            ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            se = /^.[^:#\[\.,]*$/;
        Z.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, Z.fn.extend({
            find: function(e) {
                var t, n = this.length,
                    r = [],
                    o = this;
                if ("string" != typeof e) return this.pushStack(Z(e).filter(function() {
                    for (t = 0; n > t; t++)
                        if (Z.contains(o[t], this)) return !0
                }));
                for (t = 0; n > t; t++) Z.find(e, o[t], r);
                return r = this.pushStack(n > 1 ? Z.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
            },
            filter: function(e) {
                return this.pushStack(r(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(r(this, e || [], !0))
            },
            is: function(e) {
                return !!r(this, "string" == typeof e && ie.test(e) ? Z(e) : e || [], !1).length
            }
        });
        var ue, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            le = Z.fn.init = function(e, t) {
                var n, r;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ce.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
                    if (n[1]) {
                        if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Q, !0)), ae.test(n[1]) && Z.isPlainObject(t))
                            for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                        return this
                    }
                    return r = Q.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = Q, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof ue.ready ? ue.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
            };
        le.prototype = Z.fn, ue = Z(Q);
        var fe = /^(?:parents|prev(?:Until|All))/,
            de = { children: !0, contents: !0, next: !0, prev: !0 };
        Z.extend({
            dir: function(e, t, n) {
                for (var r = [], o = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (o && Z(e).is(n)) break;
                        r.push(e)
                    }
                return r
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), Z.fn.extend({
            has: function(e) {
                var t = Z(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; n > e; e++)
                        if (Z.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, r = 0, o = this.length, i = [], a = ie.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; o > r; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                            i.push(n);
                            break
                        }
                return this.pushStack(i.length > 1 ? Z.unique(i) : i)
            },
            index: function(e) {
                return e ? "string" == typeof e ? V.call(Z(e), this[0]) : V.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), Z.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return Z.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return Z.dir(e, "parentNode", n)
            },
            next: function(e) {
                return o(e, "nextSibling")
            },
            prev: function(e) {
                return o(e, "previousSibling")
            },
            nextAll: function(e) {
                return Z.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return Z.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return Z.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return Z.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return Z.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return Z.sibling(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || Z.merge([], e.childNodes)
            }
        }, function(e, t) {
            Z.fn[e] = function(n, r) {
                var o = Z.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = Z.filter(r, o)), this.length > 1 && (de[e] || Z.unique(o), fe.test(e) && o.reverse()), this.pushStack(o)
            }
        });
        var pe = /\S+/g,
            he = {};
        Z.Callbacks = function(e) {
            e = "string" == typeof e ? he[e] || i(e) : Z.extend({}, e);
            var t, n, r, o, a, s, u = [],
                c = !e.once && [],
                l = function(i) {
                    for (t = e.memory && i, n = !0, s = o || 0, o = 0, a = u.length, r = !0; u && a > s; s++)
                        if (u[s].apply(i[0], i[1]) === !1 && e.stopOnFalse) {
                            t = !1;
                            break
                        }
                    r = !1, u && (c ? c.length && l(c.shift()) : t ? u = [] : f.disable())
                },
                f = {
                    add: function() {
                        if (u) {
                            var n = u.length;
                            ! function i(t) {
                                Z.each(t, function(t, n) {
                                    var r = Z.type(n);
                                    "function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
                                })
                            }(arguments), r ? a = u.length : t && (o = n, l(t))
                        }
                        return this
                    },
                    remove: function() {
                        return u && Z.each(arguments, function(e, t) {
                            for (var n;
                                (n = Z.inArray(t, u, n)) > -1;) u.splice(n, 1), r && (a >= n && a--, s >= n && s--)
                        }), this
                    },
                    has: function(e) {
                        return e ? Z.inArray(e, u) > -1 : !(!u || !u.length)
                    },
                    empty: function() {
                        return u = [], a = 0, this
                    },
                    disable: function() {
                        return u = c = t = void 0, this
                    },
                    disabled: function() {
                        return !u
                    },
                    lock: function() {
                        return c = void 0, t || f.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(e, t) {
                        return !u || n && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? c.push(t) : l(t)), this
                    },
                    fire: function() {
                        return f.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return f
        }, Z.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", Z.Callbacks("memory")]
                    ],
                    n = "pending",
                    r = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return Z.Deferred(function(n) {
                                Z.each(t, function(t, i) {
                                    var a = Z.isFunction(e[t]) && e[t];
                                    o[i[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[i[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? Z.extend(e, r) : r
                        }
                    },
                    o = {};
                return r.pipe = r.then, Z.each(t, function(e, i) {
                    var a = i[2],
                        s = i[3];
                    r[i[1]] = a.add, s && a.add(function() { n = s }, t[1 ^ e][2].disable, t[2][2].lock), o[i[0]] = function() {
                        return o[i[0] + "With"](this === o ? r : this, arguments), this
                    }, o[i[0] + "With"] = a.fireWith
                }), r.promise(o), e && e.call(o, o), o
            },
            when: function(e) {
                var t, n, r, o = 0,
                    i = B.call(arguments),
                    a = i.length,
                    s = 1 !== a || e && Z.isFunction(e.promise) ? a : 0,
                    u = 1 === s ? e : Z.Deferred(),
                    c = function(e, n, r) {
                        return function(o) { n[e] = this, r[e] = arguments.length > 1 ? B.call(arguments) : o, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r) }
                    };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), r = new Array(a); a > o; o++) i[o] && Z.isFunction(i[o].promise) ? i[o].promise().done(c(o, r, i)).fail(u.reject).progress(c(o, n, t)) : --s;
                return s || u.resolveWith(r, i), u.promise()
            }
        });
        var me;
        Z.fn.ready = function(e) {
            return Z.ready.promise().done(e), this
        }, Z.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) { e ? Z.readyWait++ : Z.ready(!0) },
            ready: function(e) {
                (e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (me.resolveWith(Q, [Z]), Z.fn.triggerHandler && (Z(Q).triggerHandler("ready"), Z(Q).off("ready"))))
            }
        }), Z.ready.promise = function(t) {
            return me || (me = Z.Deferred(), "complete" === Q.readyState ? setTimeout(Z.ready) : (Q.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))), me.promise(t)
        }, Z.ready.promise();
        var ge = Z.access = function(e, t, n, r, o, i, a) {
            var s = 0,
                u = e.length,
                c = null == n;
            if ("object" === Z.type(n)) {
                o = !0;
                for (s in n) Z.access(e, t, s, n[s], !0, i, a)
            } else if (void 0 !== r && (o = !0, Z.isFunction(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(Z(e), n)
                })), t))
                for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return o ? e : c ? t.call(e) : u ? t(e[0], n) : i
        };
        Z.acceptData = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        }, s.uid = 1, s.accepts = Z.acceptData, s.prototype = {
            key: function(e) {
                if (!s.accepts(e)) return 0;
                var t = {},
                    n = e[this.expando];
                if (!n) {
                    n = s.uid++;
                    try { t[this.expando] = { value: n }, Object.defineProperties(e, t) } catch (r) { t[this.expando] = n, Z.extend(e, t) }
                }
                return this.cache[n] || (this.cache[n] = {}), n
            },
            set: function(e, t, n) {
                var r, o = this.key(e),
                    i = this.cache[o];
                if ("string" == typeof t) i[t] = n;
                else if (Z.isEmptyObject(i)) Z.extend(this.cache[o], t);
                else
                    for (r in t) i[r] = t[r];
                return i
            },
            get: function(e, t) {
                var n = this.cache[this.key(e)];
                return void 0 === t ? n : n[t]
            },
            access: function(e, t, n) {
                var r;
                return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r, o, i = this.key(e),
                    a = this.cache[i];
                if (void 0 === t) this.cache[i] = {};
                else {
                    Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (o = Z.camelCase(t), t in a ? r = [t, o] : (r = o, r = r in a ? [r] : r.match(pe) || [])), n = r.length;
                    for (; n--;) delete a[r[n]]
                }
            },
            hasData: function(e) {
                return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
            },
            discard: function(e) { e[this.expando] && delete this.cache[e[this.expando]] }
        };
        var ve = new s,
            ye = new s,
            be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            xe = /([A-Z])/g;
        Z.extend({
            hasData: function(e) {
                return ye.hasData(e) || ve.hasData(e)
            },
            data: function(e, t, n) {
                return ye.access(e, t, n)
            },
            removeData: function(e, t) { ye.remove(e, t) },
            _data: function(e, t, n) {
                return ve.access(e, t, n)
            },
            _removeData: function(e, t) { ve.remove(e, t) }
        }), Z.fn.extend({
            data: function(e, t) {
                var n, r, o, i = this[0],
                    a = i && i.attributes;
                if (void 0 === e) {
                    if (this.length && (o = ye.get(i), 1 === i.nodeType && !ve.get(i, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), u(i, r, o[r])));
                        ve.set(i, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function() { ye.set(this, e) }) : ge(this, function(t) {
                    var n, r = Z.camelCase(e);
                    if (i && void 0 === t) {
                        if (n = ye.get(i, e), void 0 !== n) return n;
                        if (n = ye.get(i, r), void 0 !== n) return n;
                        if (n = u(i, r, void 0), void 0 !== n) return n
                    } else this.each(function() {
                        var n = ye.get(this, r);
                        ye.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && ye.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() { ye.remove(this, e) })
            }
        }), Z.extend({
            queue: function(e, t, n) {
                var r;
                return e ? (t = (t || "fx") + "queue", r = ve.get(e, t), n && (!r || Z.isArray(n) ? r = ve.access(e, t, Z.makeArray(n)) : r.push(n)), r || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = Z.queue(e, t),
                    r = n.length,
                    o = n.shift(),
                    i = Z._queueHooks(e, t),
                    a = function() { Z.dequeue(e, t) };
                "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, a, i)), !r && i && i.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return ve.get(e, n) || ve.access(e, n, { empty: Z.Callbacks("once memory").add(function() { ve.remove(e, [t + "queue", n]) }) })
            }
        }), Z.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = Z.queue(this, e, t);
                    Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() { Z.dequeue(this, e) })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    o = Z.Deferred(),
                    i = this,
                    a = this.length,
                    s = function() {--r || o.resolveWith(i, [i]) };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ve.get(i[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
                return s(), o.promise(t)
            }
        });
        var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ce = ["Top", "Right", "Bottom", "Left"],
            Te = function(e, t) {
                return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
            },
            ke = /^(?:checkbox|radio)$/i;
        ! function() {
            var e = Q.createDocumentFragment(),
                t = e.appendChild(Q.createElement("div")),
                n = Q.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), J.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", J.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var Ee = "undefined";
        J.focusinBubbles = "onfocusin" in e;
        var $e = /^key/,
            Ne = /^(?:mouse|pointer|contextmenu)|click/,
            Se = /^(?:focusinfocus|focusoutblur)$/,
            De = /^([^.]*)(?:\.(.+)|)$/;
        Z.event = {
            global: {},
            add: function(e, t, n, r, o) {
                var i, a, s, u, c, l, f, d, p, h, m, g = ve.get(e);
                if (g)
                    for (n.handler && (i = n, n = i.handler, o = i.selector), n.guid || (n.guid = Z.guid++), (u = g.events) || (u = g.events = {}), (a = g.handle) || (a = g.handle = function(t) {
                            return typeof Z !== Ee && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
                        }), t = (t || "").match(pe) || [""], c = t.length; c--;) s = De.exec(t[c]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p && (f = Z.event.special[p] || {}, p = (o ? f.delegateType : f.bindType) || p, f = Z.event.special[p] || {}, l = Z.extend({ type: p, origType: m, data: r, handler: n, guid: n.guid, selector: o, needsContext: o && Z.expr.match.needsContext.test(o), namespace: h.join(".") }, i), (d = u[p]) || (d = u[p] = [], d.delegateCount = 0, f.setup && f.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(p, a, !1)), f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, l) : d.push(l), Z.event.global[p] = !0)
            },
            remove: function(e, t, n, r, o) {
                var i, a, s, u, c, l, f, d, p, h, m, g = ve.hasData(e) && ve.get(e);
                if (g && (u = g.events)) {
                    for (t = (t || "").match(pe) || [""], c = t.length; c--;)
                        if (s = De.exec(t[c]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                            for (f = Z.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = d.length; i--;) l = d[i], !o && m !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (d.splice(i, 1), l.selector && d.delegateCount--, f.remove && f.remove.call(e, l));
                            a && !d.length && (f.teardown && f.teardown.call(e, h, g.handle) !== !1 || Z.removeEvent(e, p, g.handle), delete u[p])
                        } else
                            for (p in u) Z.event.remove(e, p + t[c], n, r, !0);
                    Z.isEmptyObject(u) && (delete g.handle, ve.remove(e, "events"))
                }
            },
            trigger: function(t, n, r, o) {
                var i, a, s, u, c, l, f, d = [r || Q],
                    p = Y.call(t, "type") ? t.type : t,
                    h = Y.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = s = r = r || Q, 3 !== r.nodeType && 8 !== r.nodeType && !Se.test(p + Z.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), c = p.indexOf(":") < 0 && "on" + p, t = t[Z.expando] ? t : new Z.Event(p, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Z.makeArray(n, [t]), f = Z.event.special[p] || {}, o || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                    if (!o && !f.noBubble && !Z.isWindow(r)) {
                        for (u = f.delegateType || p, Se.test(u + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), s = a;
                        s === (r.ownerDocument || Q) && d.push(s.defaultView || s.parentWindow || e)
                    }
                    for (i = 0;
                        (a = d[i++]) && !t.isPropagationStopped();) t.type = i > 1 ? u : f.bindType || p, l = (ve.get(a, "events") || {})[t.type] && ve.get(a, "handle"), l && l.apply(a, n), l = c && a[c], l && l.apply && Z.acceptData(a) && (t.result = l.apply(a, n), t.result === !1 && t.preventDefault());
                    return t.type = p, o || t.isDefaultPrevented() || f._default && f._default.apply(d.pop(), n) !== !1 || !Z.acceptData(r) || c && Z.isFunction(r[p]) && !Z.isWindow(r) && (s = r[c], s && (r[c] = null), Z.event.triggered = p, r[p](), Z.event.triggered = void 0, s && (r[c] = s)), t.result
                }
            },
            dispatch: function(e) {
                e = Z.event.fix(e);
                var t, n, r, o, i, a = [],
                    s = B.call(arguments),
                    u = (ve.get(this, "events") || {})[e.type] || [],
                    c = Z.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                    for (a = Z.event.handlers.call(this, e, u), t = 0;
                        (o = a[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = o.elem, n = 0;
                            (i = o.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((Z.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, r, o, i, a = [],
                    s = t.delegateCount,
                    u = e.target;
                if (s && u.nodeType && (!e.button || "click" !== e.type))
                    for (; u !== this; u = u.parentNode || this)
                        if (u.disabled !== !0 || "click" !== e.type) {
                            for (r = [], n = 0; s > n; n++) i = t[n], o = i.selector + " ", void 0 === r[o] && (r[o] = i.needsContext ? Z(o, this).index(u) >= 0 : Z.find(o, this, null, [u]).length), r[o] && r.push(i);
                            r.length && a.push({ elem: u, handlers: r })
                        }
                return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, r, o, i = t.button;
                    return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Q, r = n.documentElement, o = n.body, e.pageX = t.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[Z.expando]) return e;
                var t, n, r, o = e.type,
                    i = e,
                    a = this.fixHooks[o];
                for (a || (this.fixHooks[o] = a = Ne.test(o) ? this.mouseHooks : $e.test(o) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new Z.Event(i), t = r.length; t--;) n = r[t], e[n] = i[n];
                return e.target || (e.target = Q), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, i) : e
            },
            special: {
                load: { noBubble: !0 },
                focus: {
                    trigger: function() {
                        return this !== f() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === f() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return Z.nodeName(e.target, "a")
                    }
                },
                beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } }
            },
            simulate: function(e, t, n, r) {
                var o = Z.extend(new Z.Event, n, { type: e, isSimulated: !0, originalEvent: {} });
                r ? Z.event.trigger(o, null, t) : Z.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
            }
        }, Z.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n, !1) }, Z.Event = function(e, t) {
            return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? c : l) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
        }, Z.Event.prototype = {
            isDefaultPrevented: l,
            isPropagationStopped: l,
            isImmediatePropagationStopped: l,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = c, e && e.preventDefault && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = c, e && e.stopPropagation && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = c, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, Z.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) {
            Z.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        o = e.relatedTarget,
                        i = e.handleObj;
                    return (!o || o !== r && !Z.contains(r, o)) && (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), J.focusinBubbles || Z.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
            var n = function(e) { Z.event.simulate(t, e.target, Z.event.fix(e), !0) };
            Z.event.special[t] = {
                setup: function() {
                    var r = this.ownerDocument || this,
                        o = ve.access(r, t);
                    o || r.addEventListener(e, n, !0), ve.access(r, t, (o || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this,
                        o = ve.access(r, t) - 1;
                    o ? ve.access(r, t, o) : (r.removeEventListener(e, n, !0), ve.remove(r, t))
                }
            }
        }), Z.fn.extend({
            on: function(e, t, n, r, o) {
                var i, a;
                if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t, t = void 0);
                    for (a in e) this.on(a, t, n, e[a], o);
                    return this
                }
                if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = l;
                else if (!r) return this;
                return 1 === o && (i = r, r = function(e) {
                    return Z().off(e), i.apply(this, arguments)
                }, r.guid = i.guid || (i.guid = Z.guid++)), this.each(function() { Z.event.add(this, e, r, n, t) })
            },
            one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, o;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, t, e[o]);
                    return this
                }
                return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = l), this.each(function() { Z.event.remove(this, e, n, t) })
            },
            trigger: function(e, t) {
                return this.each(function() { Z.event.trigger(e, t, this) })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? Z.event.trigger(e, t, n, !0) : void 0
            }
        });
        var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Ae = /<([\w:]+)/,
            Le = /<|&#?\w+;/,
            qe = /<(?:script|style|link)/i,
            He = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Oe = /^$|\/(?:java|ecma)script/i,
            Fe = /^true\/(.*)/,
            Pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Me = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
        Me.optgroup = Me.option, Me.tbody = Me.tfoot = Me.colgroup = Me.caption = Me.thead, Me.th = Me.td, Z.extend({
            clone: function(e, t, n) {
                var r, o, i, a, s = e.cloneNode(!0),
                    u = Z.contains(e.ownerDocument, e);
                if (!(J.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
                    for (a = v(s), i = v(e), r = 0, o = i.length; o > r; r++) y(i[r], a[r]);
                if (t)
                    if (n)
                        for (i = i || v(e), a = a || v(s), r = 0, o = i.length; o > r; r++) g(i[r], a[r]);
                    else g(e, s);
                return a = v(s, "script"), a.length > 0 && m(a, !u && v(e, "script")), s
            },
            buildFragment: function(e, t, n, r) {
                for (var o, i, a, s, u, c, l = t.createDocumentFragment(), f = [], d = 0, p = e.length; p > d; d++)
                    if (o = e[d], o || 0 === o)
                        if ("object" === Z.type(o)) Z.merge(f, o.nodeType ? [o] : o);
                        else if (Le.test(o)) {
                    for (i = i || l.appendChild(t.createElement("div")), a = (Ae.exec(o) || ["", ""])[1].toLowerCase(), s = Me[a] || Me._default, i.innerHTML = s[1] + o.replace(je, "<$1></$2>") + s[2], c = s[0]; c--;) i = i.lastChild;
                    Z.merge(f, i.childNodes), i = l.firstChild, i.textContent = ""
                } else f.push(t.createTextNode(o));
                for (l.textContent = "", d = 0; o = f[d++];)
                    if ((!r || -1 === Z.inArray(o, r)) && (u = Z.contains(o.ownerDocument, o), i = v(l.appendChild(o), "script"), u && m(i), n))
                        for (c = 0; o = i[c++];) Oe.test(o.type || "") && n.push(o);
                return l
            },
            cleanData: function(e) {
                for (var t, n, r, o, i = Z.event.special, a = 0; void 0 !== (n = e[a]); a++) {
                    if (Z.acceptData(n) && (o = n[ve.expando], o && (t = ve.cache[o]))) {
                        if (t.events)
                            for (r in t.events) i[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
                        ve.cache[o] && delete ve.cache[o]
                    }
                    delete ye.cache[n[ye.expando]]
                }
            }
        }), Z.fn.extend({
            text: function(e) {
                return ge(this, function(e) {
                    return void 0 === e ? Z.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = d(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = d(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) })
            },
            after: function() {
                return this.domManip(arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) })
            },
            remove: function(e, t) {
                for (var n, r = e ? Z.filter(e, this) : this, o = 0; null != (n = r[o]); o++) t || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && m(v(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return Z.clone(this, e, t)
                })
            },
            html: function(e) {
                return ge(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !qe.test(e) && !Me[(Ae.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(je, "<$1></$2>");
                        try {
                            for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (o) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = arguments[0];
                return this.domManip(arguments, function(t) { e = this.parentNode, Z.cleanData(v(this)), e && e.replaceChild(t, this) }), e && (e.length || e.nodeType) ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t) {
                e = z.apply([], e);
                var n, r, o, i, a, s, u = 0,
                    c = this.length,
                    l = this,
                    f = c - 1,
                    d = e[0],
                    m = Z.isFunction(d);
                if (m || c > 1 && "string" == typeof d && !J.checkClone && He.test(d)) return this.each(function(n) {
                    var r = l.eq(n);
                    m && (e[0] = d.call(this, n, r.html())), r.domManip(e, t)
                });
                if (c && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                    for (o = Z.map(v(n, "script"), p), i = o.length; c > u; u++) a = n, u !== f && (a = Z.clone(a, !0, !0), i && Z.merge(o, v(a, "script"))), t.call(this[u], a, u);
                    if (i)
                        for (s = o[o.length - 1].ownerDocument, Z.map(o, h), u = 0; i > u; u++) a = o[u], Oe.test(a.type || "") && !ve.access(a, "globalEval") && Z.contains(s, a) && (a.src ? Z._evalUrl && Z._evalUrl(a.src) : Z.globalEval(a.textContent.replace(Pe, "")))
                }
                return this
            }
        }), Z.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) {
            Z.fn[e] = function(e) {
                for (var n, r = [], o = Z(e), i = o.length - 1, a = 0; i >= a; a++) n = a === i ? this : this.clone(!0), Z(o[a])[t](n), X.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var _e, Re = {},
            We = /^margin/,
            Ie = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"),
            Be = function(t) {
                return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
            };
        ! function() {
            function t() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", o.appendChild(i);
                var t = e.getComputedStyle(a, null);
                n = "1%" !== t.top, r = "4px" === t.width, o.removeChild(i)
            }
            var n, r, o = Q.documentElement,
                i = Q.createElement("div"),
                a = Q.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", J.clearCloneStyle = "content-box" === a.style.backgroundClip, i.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", i.appendChild(a), e.getComputedStyle && Z.extend(J, {
                pixelPosition: function() {
                    return t(), n
                },
                boxSizingReliable: function() {
                    return null == r && t(), r
                },
                reliableMarginRight: function() {
                    var t, n = a.appendChild(Q.createElement("div"));
                    return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", o.appendChild(i), t = !parseFloat(e.getComputedStyle(n, null).marginRight), o.removeChild(i), a.removeChild(n), t
                }
            }))
        }(), Z.swap = function(e, t, n, r) {
            var o, i, a = {};
            for (i in t) a[i] = e.style[i], e.style[i] = t[i];
            o = n.apply(e, r || []);
            for (i in t) e.style[i] = a[i];
            return o
        };
        var ze = /^(none|table(?!-c[ea]).+)/,
            Xe = new RegExp("^(" + we + ")(.*)$", "i"),
            Ve = new RegExp("^([+-])=(" + we + ")", "i"),
            Ue = { position: "absolute", visibility: "hidden", display: "block" },
            Ge = { letterSpacing: "0", fontWeight: "400" },
            Ye = ["Webkit", "O", "Moz", "ms"];
        Z.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = w(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
            cssProps: { "float": "cssFloat" },
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, i, a, s = Z.camelCase(t),
                        u = e.style;
                    return t = Z.cssProps[s] || (Z.cssProps[s] = T(u, s)), a = Z.cssHooks[t] || Z.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : u[t] : (i = typeof n, "string" === i && (o = Ve.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(Z.css(e, t)), i = "number"), void(null != n && n === n && ("number" !== i || Z.cssNumber[s] || (n += "px"), J.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u[t] = n))))
                }
            },
            css: function(e, t, n, r) {
                var o, i, a, s = Z.camelCase(t);
                return t = Z.cssProps[s] || (Z.cssProps[s] = T(e.style, s)), a = Z.cssHooks[t] || Z.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = w(e, t, r)), "normal" === o && t in Ge && (o = Ge[t]), "" === n || n ? (i = parseFloat(o), n === !0 || Z.isNumeric(i) ? i || 0 : o) : o
            }
        }), Z.each(["height", "width"], function(e, t) {
            Z.cssHooks[t] = {
                get: function(e, n, r) {
                    return n ? ze.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ue, function() {
                        return $(e, t, r)
                    }) : $(e, t, r) : void 0
                },
                set: function(e, n, r) {
                    var o = r && Be(e);
                    return k(e, n, r ? E(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, o), o) : 0)
                }
            }
        }), Z.cssHooks.marginRight = C(J.reliableMarginRight, function(e, t) {
            return t ? Z.swap(e, { display: "inline-block" }, w, [e, "marginRight"]) : void 0
        }), Z.each({ margin: "", padding: "", border: "Width" }, function(e, t) {
            Z.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) o[e + Ce[r] + t] = i[r] || i[r - 2] || i[0];
                    return o
                }
            }, We.test(e) || (Z.cssHooks[e + t].set = k)
        }), Z.fn.extend({
            css: function(e, t) {
                return ge(this, function(e, t, n) {
                    var r, o, i = {},
                        a = 0;
                    if (Z.isArray(t)) {
                        for (r = Be(e), o = t.length; o > a; a++) i[t[a]] = Z.css(e, t[a], !1, r);
                        return i
                    }
                    return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return N(this, !0)
            },
            hide: function() {
                return N(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { Te(this) ? Z(this).show() : Z(this).hide() })
            }
        }), Z.Tween = S, S.prototype = {
            constructor: S,
            init: function(e, t, n, r, o, i) { this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (Z.cssNumber[n] ? "" : "px") },
            cur: function() {
                var e = S.propHooks[this.prop];
                return e && e.get ? e.get(this) : S.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = S.propHooks[this.prop];
                return this.pos = t = this.options.duration ? Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : S.propHooks._default.set(this), this
            }
        }, S.prototype.init.prototype = S.prototype, S.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) { Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now }
            }
        }, S.propHooks.scrollTop = S.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, Z.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, Z.fx = S.prototype.init, Z.fx.step = {};
        var Je, Qe, Ke = /^(?:toggle|show|hide)$/,
            Ze = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"),
            et = /queueHooks$/,
            tt = [L],
            nt = {
                "*": [function(e, t) {
                    var n = this.createTween(e, t),
                        r = n.cur(),
                        o = Ze.exec(t),
                        i = o && o[3] || (Z.cssNumber[e] ? "" : "px"),
                        a = (Z.cssNumber[e] || "px" !== i && +r) && Ze.exec(Z.css(n.elem, e)),
                        s = 1,
                        u = 20;
                    if (a && a[3] !== i) {
                        i = i || a[3], o = o || [], a = +r || 1;
                        do s = s || ".5", a /= s, Z.style(n.elem, e, a + i); while (s !== (s = n.cur() / r) && 1 !== s && --u)
                    }
                    return o && (a = n.start = +a || +r || 0, n.unit = i, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
                }]
            };
        Z.Animation = Z.extend(H, {
                tweener: function(e, t) {
                    Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var n, r = 0, o = e.length; o > r; r++) n = e[r], nt[n] = nt[n] || [], nt[n].unshift(t)
                },
                prefilter: function(e, t) { t ? tt.unshift(e) : tt.push(e) }
            }), Z.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? Z.extend({}, e) : { complete: n || !n && t || Z.isFunction(e) && e, duration: e, easing: n && t || t && !Z.isFunction(t) && t };
                return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() { Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue) }, r
            }, Z.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(Te).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var o = Z.isEmptyObject(e),
                        i = Z.speed(t, n, r),
                        a = function() {
                            var t = H(this, Z.extend({}, e), i);
                            (o || ve.get(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, o || i.queue === !1 ? this.each(a) : this.queue(i.queue, a)
                },
                stop: function(e, t, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            o = null != e && e + "queueHooks",
                            i = Z.timers,
                            a = ve.get(this);
                        if (o) a[o] && a[o].stop && r(a[o]);
                        else
                            for (o in a) a[o] && a[o].stop && et.test(o) && r(a[o]);
                        for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
                        (t || !n) && Z.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = ve.get(this),
                            r = n[e + "queue"],
                            o = n[e + "queueHooks"],
                            i = Z.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, Z.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                        for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), Z.each(["toggle", "show", "hide"], function(e, t) {
                var n = Z.fn[t];
                Z.fn[t] = function(e, r, o) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(j(t, !0), e, r, o)
                }
            }), Z.each({ slideDown: j("show"), slideUp: j("hide"), slideToggle: j("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) {
                Z.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }), Z.timers = [], Z.fx.tick = function() {
                var e, t = 0,
                    n = Z.timers;
                for (Je = Z.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
                n.length || Z.fx.stop(), Je = void 0
            }, Z.fx.timer = function(e) { Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop() }, Z.fx.interval = 13, Z.fx.start = function() { Qe || (Qe = setInterval(Z.fx.tick, Z.fx.interval)) }, Z.fx.stop = function() { clearInterval(Qe), Qe = null }, Z.fx.speeds = { slow: 600, fast: 200, _default: 400 }, Z.fn.delay = function(e, t) {
                return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function() { clearTimeout(r) }
                })
            },
            function() {
                var e = Q.createElement("input"),
                    t = Q.createElement("select"),
                    n = t.appendChild(Q.createElement("option"));
                e.type = "checkbox", J.checkOn = "" !== e.value, J.optSelected = n.selected, t.disabled = !0, J.optDisabled = !n.disabled, e = Q.createElement("input"), e.value = "t", e.type = "radio", J.radioValue = "t" === e.value
            }();
        var rt, ot, it = Z.expr.attrHandle;
        Z.fn.extend({
            attr: function(e, t) {
                return ge(this, Z.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() { Z.removeAttr(this, e) })
            }
        }), Z.extend({
            attr: function(e, t, n) {
                var r, o, i = e.nodeType;
                return e && 3 !== i && 8 !== i && 2 !== i ? typeof e.getAttribute === Ee ? Z.prop(e, t, n) : (1 === i && Z.isXMLDoc(e) || (t = t.toLowerCase(), r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? ot : rt)), void 0 === n ? r && "get" in r && null !== (o = r.get(e, t)) ? o : (o = Z.find.attr(e, t), null == o ? void 0 : o) : null !== n ? r && "set" in r && void 0 !== (o = r.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t)) : void 0
            },
            removeAttr: function(e, t) {
                var n, r, o = 0,
                    i = t && t.match(pe);
                if (i && 1 === e.nodeType)
                    for (; n = i[o++];) r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!J.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }
        }), ot = {
            set: function(e, t, n) {
                return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = it[t] || Z.find.attr;
            it[t] = function(e, t, r) {
                var o, i;
                return r || (i = it[t], it[t] = o, o = null != n(e, t, r) ? t.toLowerCase() : null, it[t] = i), o
            }
        });
        var at = /^(?:input|select|textarea|button)$/i;
        Z.fn.extend({
            prop: function(e, t) {
                return ge(this, Z.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() { delete this[Z.propFix[e] || e] })
            }
        }), Z.extend({
            propFix: { "for": "htmlFor", "class": "className" },
            prop: function(e, t, n) {
                var r, o, i, a = e.nodeType;
                return e && 3 !== a && 8 !== a && 2 !== a ? (i = 1 !== a || !Z.isXMLDoc(e), i && (t = Z.propFix[t] || t, o = Z.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]) : void 0
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        return e.hasAttribute("tabindex") || at.test(e.nodeName) || e.href ? e.tabIndex : -1
                    }
                }
            }
        }), J.optSelected || (Z.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }
        }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { Z.propFix[this.toLowerCase()] = this });
        var st = /[\t\r\n\f]/g;
        Z.fn.extend({
            addClass: function(e) {
                var t, n, r, o, i, a, s = "string" == typeof e && e,
                    u = 0,
                    c = this.length;
                if (Z.isFunction(e)) return this.each(function(t) { Z(this).addClass(e.call(this, t, this.className)) });
                if (s)
                    for (t = (e || "").match(pe) || []; c > u; u++)
                        if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : " ")) {
                            for (i = 0; o = t[i++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            a = Z.trim(r), n.className !== a && (n.className = a)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, r, o, i, a, s = 0 === arguments.length || "string" == typeof e && e,
                    u = 0,
                    c = this.length;
                if (Z.isFunction(e)) return this.each(function(t) { Z(this).removeClass(e.call(this, t, this.className)) });
                if (s)
                    for (t = (e || "").match(pe) || []; c > u; u++)
                        if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : "")) {
                            for (i = 0; o = t[i++];)
                                for (; r.indexOf(" " + o + " ") >= 0;) r = r.replace(" " + o + " ", " ");
                            a = e ? Z.trim(r) : "", n.className !== a && (n.className = a)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ? function(n) { Z(this).toggleClass(e.call(this, n, this.className, t), t) } : function() {
                    if ("string" === n)
                        for (var t, r = 0, o = Z(this), i = e.match(pe) || []; t = i[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else(n === Ee || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(st, " ").indexOf(t) >= 0) return !0;
                return !1
            }
        });
        var ut = /\r/g;
        Z.fn.extend({
            val: function(e) {
                var t, n, r, o = this[0];
                return arguments.length ? (r = Z.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = r ? e.call(this, n, Z(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : Z.isArray(o) && (o = Z.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                })) : o ? (t = Z.valHooks[o.type] || Z.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(ut, "") : null == n ? "" : n)) : void 0
            }
        }), Z.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = Z.find.attr(e, "value");
                        return null != t ? t : Z.trim(Z.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, r = e.options, o = e.selectedIndex, i = "select-one" === e.type || 0 > o, a = i ? null : [], s = i ? o + 1 : r.length, u = 0 > o ? s : i ? o : 0; s > u; u++)
                            if (n = r[u], !(!n.selected && u !== o || (J.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                                if (t = Z(n).val(), i) return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, r, o = e.options, i = Z.makeArray(t), a = o.length; a--;) r = o[a], (r.selected = Z.inArray(r.value, i) >= 0) && (n = !0);
                        return n || (e.selectedIndex = -1), i
                    }
                }
            }
        }), Z.each(["radio", "checkbox"], function() {
            Z.valHooks[this] = {
                set: function(e, t) {
                    return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
                }
            }, J.checkOn || (Z.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            Z.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), Z.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var ct = Z.now(),
            lt = /\?/;
        Z.parseJSON = function(e) {
            return JSON.parse(e + "")
        }, Z.parseXML = function(e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try { n = new DOMParser, t = n.parseFromString(e, "text/xml") } catch (r) { t = void 0 }
            return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
        };
        var ft = /#.*$/,
            dt = /([?&])_=[^&]*/,
            pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            mt = /^(?:GET|HEAD)$/,
            gt = /^\/\//,
            vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            yt = {},
            bt = {},
            xt = "*/".concat("*"),
            wt = e.location.href,
            Ct = vt.exec(wt.toLowerCase()) || [];
        Z.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: { url: wt, type: "GET", isLocal: ht.test(Ct[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": xt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": Z.parseJSON, "text xml": Z.parseXML }, flatOptions: { url: !0, context: !0 } },
            ajaxSetup: function(e, t) {
                return t ? P(P(e, Z.ajaxSettings), t) : P(Z.ajaxSettings, e)
            },
            ajaxPrefilter: O(yt),
            ajaxTransport: O(bt),
            ajax: function(e, t) {
                function n(e, t, n, a) {
                    var u, l, v, y, x, C = t;
                    2 !== b && (b = 2, s && clearTimeout(s), r = void 0, i = a || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (y = M(f, w, n)), y = _(f, y, w, u), u ? (f.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (Z.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (Z.etag[o] = x)), 204 === e || "HEAD" === f.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = y.state, l = y.data, v = y.error, u = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || C) + "", u ? h.resolveWith(d, [l, C, w]) : h.rejectWith(d, [w, C, v]), w.statusCode(g), g = void 0, c && p.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? l : v]), m.fireWith(d, [w, C]), c && (p.trigger("ajaxComplete", [w, f]), --Z.active || Z.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var r, o, i, a, s, u, c, l, f = Z.ajaxSetup({}, t),
                    d = f.context || f,
                    p = f.context && (d.nodeType || d.jquery) ? Z(d) : Z.event,
                    h = Z.Deferred(),
                    m = Z.Callbacks("once memory"),
                    g = f.statusCode || {},
                    v = {},
                    y = {},
                    b = 0,
                    x = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === b) {
                                if (!a)
                                    for (a = {}; t = pt.exec(i);) a[t[1].toLowerCase()] = t[2];
                                t = a[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? i : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return b || (e = y[n] = y[n] || e, v[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return b || (f.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > b)
                                    for (t in e) g[t] = [g[t], e[t]];
                                else w.always(e[w.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || x;
                            return r && r.abort(t), n(0, t), this
                        }
                    };
                if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || wt) + "").replace(ft, "").replace(gt, Ct[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(pe) || [""], null == f.crossDomain && (u = vt.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === Ct[1] && u[2] === Ct[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (Ct[3] || ("http:" === Ct[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)), F(yt, f, t, w), 2 === b) return w;
                c = Z.event && f.global, c && 0 === Z.active++ && Z.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !mt.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (lt.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = dt.test(o) ? o.replace(dt, "$1_=" + ct++) : o + (lt.test(o) ? "&" : "?") + "_=" + ct++)), f.ifModified && (Z.lastModified[o] && w.setRequestHeader("If-Modified-Since", Z.lastModified[o]), Z.etag[o] && w.setRequestHeader("If-None-Match", Z.etag[o])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + xt + "; q=0.01" : "") : f.accepts["*"]);
                for (l in f.headers) w.setRequestHeader(l, f.headers[l]);
                if (f.beforeSend && (f.beforeSend.call(d, w, f) === !1 || 2 === b)) return w.abort();
                x = "abort";
                for (l in { success: 1, error: 1, complete: 1 }) w[l](f[l]);
                if (r = F(bt, f, t, w)) {
                    w.readyState = 1, c && p.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (s = setTimeout(function() { w.abort("timeout") }, f.timeout));
                    try { b = 1, r.send(v, n) } catch (C) {
                        if (!(2 > b)) throw C;
                        n(-1, C)
                    }
                } else n(-1, "No Transport");
                return w
            },
            getJSON: function(e, t, n) {
                return Z.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return Z.get(e, void 0, t, "script")
            }
        }), Z.each(["get", "post"], function(e, t) {
            Z[t] = function(e, n, r, o) {
                return Z.isFunction(n) && (o = o || r, r = n, n = void 0), Z.ajax({ url: e, type: t, dataType: o, data: n, success: r })
            }
        }), Z._evalUrl = function(e) {
            return Z.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 })
        }, Z.fn.extend({
            wrapAll: function(e) {
                var t;
                return Z.isFunction(e) ? this.each(function(t) { Z(this).wrapAll(e.call(this, t)) }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this)
            },
            wrapInner: function(e) {
                return this.each(Z.isFunction(e) ? function(t) { Z(this).wrapInner(e.call(this, t)) } : function() {
                    var t = Z(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = Z.isFunction(e);
                return this.each(function(n) { Z(this).wrapAll(t ? e.call(this, n) : e) })
            },
            unwrap: function() {
                return this.parent().each(function() { Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes) }).end()
            }
        }), Z.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0
        }, Z.expr.filters.visible = function(e) {
            return !Z.expr.filters.hidden(e)
        };
        var Tt = /%20/g,
            kt = /\[\]$/,
            Et = /\r?\n/g,
            $t = /^(?:submit|button|image|reset|file)$/i,
            Nt = /^(?:input|select|textarea|keygen)/i;
        Z.param = function(e, t) {
            var n, r = [],
                o = function(e, t) { t = Z.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) };
            if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function() { o(this.name, this.value) });
            else
                for (n in e) R(n, e[n], t, o);
            return r.join("&").replace(Tt, "+")
        }, Z.fn.extend({
            serialize: function() {
                return Z.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = Z.prop(this, "elements");
                    return e ? Z.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !Z(this).is(":disabled") && Nt.test(this.nodeName) && !$t.test(e) && (this.checked || !ke.test(e))
                }).map(function(e, t) {
                    var n = Z(this).val();
                    return null == n ? null : Z.isArray(n) ? Z.map(n, function(e) {
                        return { name: t.name, value: e.replace(Et, "\r\n") }
                    }) : { name: t.name, value: n.replace(Et, "\r\n") }
                }).get()
            }
        }), Z.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (e) {}
        };
        var St = 0,
            Dt = {},
            jt = { 0: 200, 1223: 204 },
            At = Z.ajaxSettings.xhr();
        e.attachEvent && e.attachEvent("onunload", function() {
            for (var e in Dt) Dt[e]()
        }), J.cors = !!At && "withCredentials" in At, J.ajax = At = !!At, Z.ajaxTransport(function(e) {
            var t;
            return J.cors || At && !e.crossDomain ? {
                send: function(n, r) {
                    var o, i = e.xhr(),
                        a = ++St;
                    if (i.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (o in e.xhrFields) i[o] = e.xhrFields[o];
                    e.mimeType && i.overrideMimeType && i.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (o in n) i.setRequestHeader(o, n[o]);
                    t = function(e) {
                        return function() { t && (delete Dt[a], t = i.onload = i.onerror = null, "abort" === e ? i.abort() : "error" === e ? r(i.status, i.statusText) : r(jt[i.status] || i.status, i.statusText, "string" == typeof i.responseText ? { text: i.responseText } : void 0, i.getAllResponseHeaders())) }
                    }, i.onload = t(), i.onerror = t("error"), t = Dt[a] = t("abort");
                    try { i.send(e.hasContent && e.data || null) } catch (s) {
                        if (t) throw s
                    }
                },
                abort: function() { t && t() }
            } : void 0
        }), Z.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /(?:java|ecma)script/ },
            converters: {
                "text script": function(e) {
                    return Z.globalEval(e), e
                }
            }
        }), Z.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), Z.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n;
                return { send: function(r, o) { t = Z("<script>").prop({ async: !0, charset: e.scriptCharset, src: e.url }).on("load error", n = function(e) { t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type) }), Q.head.appendChild(t[0]) }, abort: function() { n && n() } }
            }
        });
        var Lt = [],
            qt = /(=)\?(?=&|$)|\?\?/;
        Z.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Lt.pop() || Z.expando + "_" + ct++;
                return this[e] = !0, e
            }
        }), Z.ajaxPrefilter("json jsonp", function(t, n, r) {
            var o, i, a, s = t.jsonp !== !1 && (qt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && qt.test(t.data) && "data");
            return s || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(qt, "$1" + o) : t.jsonp !== !1 && (t.url += (lt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
                return a || Z.error(o + " was not called"), a[0]
            }, t.dataTypes[0] = "json", i = e[o], e[o] = function() { a = arguments }, r.always(function() { e[o] = i, t[o] && (t.jsonpCallback = n.jsonpCallback, Lt.push(o)), a && Z.isFunction(i) && i(a[0]), a = i = void 0 }), "script") : void 0
        }), Z.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || Q;
            var r = ae.exec(e),
                o = !n && [];
            return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, o), o && o.length && Z(o).remove(), Z.merge([], r.childNodes))
        };
        var Ht = Z.fn.load;
        Z.fn.load = function(e, t, n) {
            if ("string" != typeof e && Ht) return Ht.apply(this, arguments);
            var r, o, i, a = this,
                s = e.indexOf(" ");
            return s >= 0 && (r = Z.trim(e.slice(s)), e = e.slice(0, s)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && Z.ajax({ url: e, type: o, dataType: "html", data: t }).done(function(e) { i = arguments, a.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e) }).complete(n && function(e, t) { a.each(n, i || [e.responseText, t, e]) }), this
        }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            Z.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), Z.expr.filters.animated = function(e) {
            return Z.grep(Z.timers, function(t) {
                return e === t.elem
            }).length
        };
        var Ot = e.document.documentElement;
        Z.offset = {
            setOffset: function(e, t, n) {
                var r, o, i, a, s, u, c, l = Z.css(e, "position"),
                    f = Z(e),
                    d = {};
                "static" === l && (e.style.position = "relative"), s = f.offset(), i = Z.css(e, "top"), u = Z.css(e, "left"), c = ("absolute" === l || "fixed" === l) && (i + u).indexOf("auto") > -1, c ? (r = f.position(), a = r.top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(u) || 0), Z.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : f.css(d)
            }
        }, Z.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) { Z.offset.setOffset(this, e, t) });
                var t, n, r = this[0],
                    o = { top: 0, left: 0 },
                    i = r && r.ownerDocument;
                return i ? (t = i.documentElement, Z.contains(t, r) ? (typeof r.getBoundingClientRect !== Ee && (o = r.getBoundingClientRect()), n = W(i), { top: o.top + n.pageYOffset - t.clientTop, left: o.left + n.pageXOffset - t.clientLeft }) : o) : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0],
                        r = { top: 0, left: 0 };
                    return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (r = e.offset()), r.top += Z.css(e[0], "borderTopWidth", !0), r.left += Z.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - r.top - Z.css(n, "marginTop", !0),
                        left: t.left - r.left - Z.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || Ot; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
                    return e || Ot
                })
            }
        }), Z.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, n) {
            var r = "pageYOffset" === n;
            Z.fn[t] = function(o) {
                return ge(this, function(t, o, i) {
                    var a = W(t);
                    return void 0 === i ? a ? a[n] : t[o] : void(a ? a.scrollTo(r ? e.pageXOffset : i, r ? i : e.pageYOffset) : t[o] = i)
                }, t, o, arguments.length, null)
            }
        }), Z.each(["top", "left"], function(e, t) {
            Z.cssHooks[t] = C(J.pixelPosition, function(e, n) {
                return n ? (n = w(e, t), Ie.test(n) ? Z(e).position()[t] + "px" : n) : void 0
            })
        }), Z.each({ Height: "height", Width: "width" }, function(e, t) {
            Z.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, r) {
                Z.fn[r] = function(r, o) {
                    var i = arguments.length && (n || "boolean" != typeof r),
                        a = n || (r === !0 || o === !0 ? "margin" : "border");
                    return ge(this, function(t, n, r) {
                        var o;
                        return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? Z.css(t, n, a) : Z.style(t, n, r, a)
                    }, t, i ? r : void 0, i, null)
                }
            })
        }), Z.fn.size = function() {
            return this.length
        }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return Z
        });
        var Ft = e.jQuery,
            Pt = e.$;
        return Z.noConflict = function(t) {
            return e.$ === Z && (e.$ = Pt), t && e.jQuery === Z && (e.jQuery = Ft), Z
        }, typeof t === Ee && (e.jQuery = e.$ = Z), Z
    }), $(document).ready(function(e) {
        function t(e) {
            var t = $(e).offset().top - ($(window).height() - $(e).height() / 2);
            return t
        }

        function n(e) { $(".nav .header__link").removeClass("active"), $(".nav .header__link:eq(" + e + ")").addClass("active") }

        function r(e, t, n) {
            var r = t ? t : 600,
                n = n ? n : 0;
            $("html,body").animate({ scrollTop: $(e).offset().top - n }, r)
        }
        $(window).scroll(function() { $("section.first")[0] && $(window).scrollTop() > t("section.first") && ($("section.first").find(".onload-hidden").addClass("show-content"), n(0)), $("section.second")[0] && $(window).scrollTop() > t("section.second") && ($("section.second").find(".onload-hidden").addClass("show-content"), n(1)), $("section.fourth")[0] && $(window).scrollTop() > t("section.fourth") && ($("section.third").find(".onload-hidden").addClass("show-content"), $("section.fourth").find(".onload-hidden").addClass("show-content"), n(2)), $("section.seventh")[0] && $(window).scrollTop() > t("section.seventh") && ($("section.seventh").find(".onload-hidden").addClass("show-content"), n(3)) }), $(".calculator .btn").click(function() { $(".calculation").slideDown("slow") }), $("[data-href]").on("click", function(e) {
            var t = $(this).attr("data-href");
            $("html, body").animate({ scrollTop: $(t).offset().top - 120 + "px" }, 1e3), e.preventDefault(), $(".navbar-collapse").removeClass("in")
        }), $("[data-href-cart]").on("click", function(e) {
            var t = $(this).attr("data-href-cart");
            $("html, body").animate({ scrollTop: $(t).offset().top + "px" }, 1e3), e.preventDefault()
        });
        var o = window.location.search.replace("?", ""),
            i = 50;
        o && setTimeout(function() { r("#" + o, 1e3, i) }, 1e3);
        new Validator;
        $(".vacancy__tabs dt").click(function() { $(this).toggleClass("active"), $(this).next("dd").slideToggle("slow") }), $(window).scroll(function() { $("body").scrollTop() > 100 ? $(".phone.xs, .home.xs").hide() : $("body").outerWidth() > 550 ? $(".phone.xs, .home.xs").hide() : $(".phone.xs, .home.xs").show() }), $(".overlay-form").click(function() { $(this).hide(), $(".thanks-popup, .subscribe-popup").fadeOut(1e3) }), $("#phone, .indicator").keydown(function(e) { 46 == e.keyCode || 8 == e.keyCode || 9 == e.keyCode || 27 == e.keyCode || 65 == e.keyCode && e.ctrlKey === !0 || e.keyCode >= 35 && e.keyCode <= 39 || (e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105) && e.preventDefault() }), $(".indicator").on("keyup", function() { $(this).val($(this).val().replace(/\D/, "")) }), "#email-marketing" == location.hash ? window.onload = function() { document.getElementById("email-marketing").click() } : "#web-designer" == location.hash && (window.onload = function() { document.getElementById("web-designer").click() }), $(".vacancy__tabs dt").click(function() {
            var e = "#" + $(this).attr("id");
            e != window.location && window.history.pushState(null, null, e)
        })
    }), $("#map")[0]) {
    var wimMap;
    ymaps.ready(init)
}
function subscribe(e) {
    $.ajax({
        url: "/service/wim/import_email.php",
        type: "POST",
        data: { email: e },
        dataType: "JSON",
        success: function(e) {
            console.log('sucess_subs');
            if (email == e) return alert("Вы успешно подписались на рассылку!"), !1;
            var t = 300;
            return $(".overlay-form").show(), $(".subscribe-popup").fadeIn(), $(".subscribe")[0].reset(), $(".subscribe__input:focus").blur(), $("#form_subscribe_feedback").delay(2 * t).show(), !0
        }
    })
}
$("#subscribe__btn").click(function() {
    $(".error-input").hide(), $("#subscribe__email").css("border-color", "#000000");
    var e = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
        t = $("#subscribe__email").val();
    return !e.test(t) || t.length < 1 ? ($(".error-input").show(), $("#subscribe__email").css("border-color", "#FF6666"), !1) : ($(".subscribe-popup").on("click", function(e) {
        ($(e.target).hasClass("subscribe-popup") || $(e.target).hasClass("closed")) && $(this).fadeOut(), $(".overlay-form").hide()
    }), 27 === event.keyCode && $(".subscribe-popup:visible").length && ($(".subscribe-popup").fadeOut(), $(".overlay-form").hide()), void subscribe(t))
}), $(document).ready(function() { "#pre-sale" == location.hash && $("a[data-href='section.fourth']").click() }), $(document).ready(function() {
    function e(e) {
        return e = e.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$& "), e = e.replace(".00", "")
    }

    function t() {
        for (var t = n(), r = 1; 3 >= r; r++) {
            var o = $("#returned_orders_" + r).text().replace("%", "") / 100,
                i = Math.round(t * o * 365),
                a = Math.round(t * o * 30);
            $("#return_year_" + r).text(e(i)), $("#return_month_" + r).text(e(a))
        }
    }

    function n() {
        var e = $("#orders_per_day"),
            t = e.val() ? e.val() : e.attr("placeholder");
        t = t.replace("шт.", "");
        var n = $("#avg_bill"),
            r = n.val() ? n.val() : n.attr("placeholder");
        r = r.replace("руб.", "");
        var o = $("#ab_cart_percentage"),
            i = o.val() ? o.val() : o.attr("placeholder");
        return i = i.replace("%", ""), t * r * i / 100
    }
    $(".indicator").on("keyup", function() { t() }), t()
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaW5pdCIsIndpbU1hcCIsInltYXBzIiwiTWFwIiwiY2VudGVyIiwiem9vbSIsImNvbnRyb2xzIiwibXlQbGFjZW1hcmsiLCJQbGFjZW1hcmsiLCJnZW9PYmplY3RzIiwiYWRkIiwiYmVoYXZpb3JzIiwiZGlzYWJsZSIsIlZhbGlkYXRvciIsImZvcm1WYWxpZGF0aW9uIiwidmFsaWQiLCIkIiwiZWFjaCIsInRoaXMiLCJ2YWwiLCJsZW5ndGgiLCJhdHRyIiwibWF0Y2giLCJ2YWxpZGF0aW9uRXJyb3IiLCJleHAiLCJ0ZXN0IiwiZm9ybVN1Ym1pdCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiZGF0YSIsImNvbXBhbnkiLCJuYW1lIiwiY29tcGFueV91cmwiLCJwaG9uZSIsImVtYWlsIiwiZGF0YVR5cGUiLCJlcnJvciIsImNvbnNvbGUiLCJzaG93IiwiZmFkZUluIiwicmVzZXQiLCJibHVyIiwiJGVsIiwicGFyZW50IiwiYWRkQ2xhc3MiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwidGFyZ2V0IiwiZmFkZU91dCIsImhpZGUiLCJrZXlDb2RlIiwiY2xpY2siLCJzdWJzY3JpYmUiLCJzdWNjZXNzIiwianNvblN0ciIsImFsZXJ0IiwiaGlkZUR1cmF0aW9uIiwiZGVsYXkiLCJ3aW5kb3ciLCJNb2Rlcm5penIiLCJkb2N1bWVudCIsInVuZGVmaW5lZCIsInNldENzcyIsInN0ciIsIm1TdHlsZSIsImNzc1RleHQiLCJzZXRDc3NBbGwiLCJzdHIxIiwic3RyMiIsInByZWZpeGVzIiwiam9pbiIsImlzIiwib2JqIiwiY29udGFpbnMiLCJzdWJzdHIiLCJpbmRleE9mIiwidGVzdFByb3BzIiwicHJvcHMiLCJwcmVmaXhlZCIsImkiLCJwcm9wIiwidGVzdERPTVByb3BzIiwiZWxlbSIsIml0ZW0iLCJiaW5kIiwidGVzdFByb3BzQWxsIiwidWNQcm9wIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNzc29tUHJlZml4ZXMiLCJzcGxpdCIsIndlYmZvcm1zIiwibGVuIiwiYXR0cnMiLCJpbnB1dEVsZW0iLCJsaXN0IiwiY3JlYXRlRWxlbWVudCIsIkhUTUxEYXRhTGlzdEVsZW1lbnQiLCJib29sIiwiaW5wdXRFbGVtVHlwZSIsImRlZmF1bHRWaWV3Iiwic2V0QXR0cmlidXRlIiwidmFsdWUiLCJzbWlsZSIsInN0eWxlIiwiV2Via2l0QXBwZWFyYW5jZSIsImRvY0VsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImdldENvbXB1dGVkU3R5bGUiLCJvZmZzZXRIZWlnaHQiLCJyZW1vdmVDaGlsZCIsImNoZWNrVmFsaWRpdHkiLCJpbnB1dHMiLCJmZWF0dXJlTmFtZSIsImhhc093blByb3AiLCJ2ZXJzaW9uIiwiZW5hYmxlQ2xhc3NlcyIsImRvY3VtZW50RWxlbWVudCIsIm1vZCIsIm1vZEVsZW0iLCJ0b1N0cmluZyIsIm9tUHJlZml4ZXMiLCJkb21QcmVmaXhlcyIsInRvTG93ZXJDYXNlIiwibnMiLCJzdmciLCJ0ZXN0cyIsImNsYXNzZXMiLCJpbmplY3RFbGVtZW50V2l0aFN0eWxlcyIsInJ1bGUiLCJjYWxsYmFjayIsIm5vZGVzIiwidGVzdG5hbWVzIiwicmV0Iiwibm9kZSIsImRvY092ZXJmbG93IiwiZGl2IiwiYm9keSIsImZha2VCb2R5IiwicGFyc2VJbnQiLCJpZCIsImlubmVySFRNTCIsImJhY2tncm91bmQiLCJvdmVyZmxvdyIsInBhcmVudE5vZGUiLCJ0ZXN0TWVkaWFRdWVyeSIsIm1xIiwibWF0Y2hNZWRpYSIsIm1zTWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJjdXJyZW50U3R5bGUiLCJpc0V2ZW50U3VwcG9ydGVkIiwiZXZlbnROYW1lIiwiZWxlbWVudCIsIlRBR05BTUVTIiwiaXNTdXBwb3J0ZWQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZWxlY3QiLCJjaGFuZ2UiLCJzdWJtaXQiLCJsb2FkIiwiYWJvcnQiLCJfaGFzT3duUHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJvYmplY3QiLCJwcm9wZXJ0eSIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiRnVuY3Rpb24iLCJ0aGF0IiwiVHlwZUVycm9yIiwiYXJncyIsImFyZ3VtZW50cyIsImJvdW5kIiwiRiIsInNlbGYiLCJyZXN1bHQiLCJhcHBseSIsImNvbmNhdCIsIk9iamVjdCIsImdldENvbnRleHQiLCJmaWxsVGV4dCIsIldlYkdMUmVuZGVyaW5nQ29udGV4dCIsIkRvY3VtZW50VG91Y2giLCJvZmZzZXRUb3AiLCJuYXZpZ2F0b3IiLCJwb3N0TWVzc2FnZSIsIm9wZW5EYXRhYmFzZSIsImRvY3VtZW50TW9kZSIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0U2hhZG93Iiwib3BhY2l0eSIsInN0cjMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJvZmZzZXRMZWZ0IiwiZ2V0RWxlbWVudEJ5SWQiLCJzaGVldCIsInN0eWxlU2hlZXQiLCJjc3NSdWxlcyIsImNhblBsYXlUeXBlIiwiQm9vbGVhbiIsIm9nZyIsInJlcGxhY2UiLCJoMjY0Iiwid2VibSIsImUiLCJtcDMiLCJ3YXYiLCJtNGEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsInNlc3Npb25TdG9yYWdlIiwiV29ya2VyIiwiYXBwbGljYXRpb25DYWNoZSIsImNyZWF0ZUVsZW1lbnROUyIsImNyZWF0ZVNWR1JlY3QiLCJmaXJzdENoaWxkIiwibmFtZXNwYWNlVVJJIiwiZmVhdHVyZSIsInB1c2giLCJpbnB1dCIsImFkZFRlc3QiLCJrZXkiLCJjbGFzc05hbWUiLCJhZGRTdHlsZVNoZWV0Iiwib3duZXJEb2N1bWVudCIsInAiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImluc2VydEJlZm9yZSIsImxhc3RDaGlsZCIsImdldEVsZW1lbnRzIiwiZWxlbWVudHMiLCJodG1sNSIsImdldEV4cGFuZG9EYXRhIiwiZXhwYW5kb0RhdGEiLCJleHBhbmRvIiwiZXhwYW5JRCIsIm5vZGVOYW1lIiwic3VwcG9ydHNVbmtub3duRWxlbWVudHMiLCJjYWNoZSIsImNsb25lTm9kZSIsInNhdmVDbG9uZXMiLCJjcmVhdGVFbGVtIiwiY2FuSGF2ZUNoaWxkcmVuIiwicmVTa2lwIiwidGFnVXJuIiwiZnJhZyIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJjbG9uZSIsImVsZW1zIiwibCIsInNoaXZNZXRob2RzIiwiY3JlYXRlRnJhZyIsInNoaXZEb2N1bWVudCIsInNoaXZDU1MiLCJzdXBwb3J0c0h0bWw1U3R5bGVzIiwiaGFzQ1NTIiwib3B0aW9ucyIsImEiLCJjaGlsZE5vZGVzIiwiX3ZlcnNpb24iLCJfcHJlZml4ZXMiLCJfZG9tUHJlZml4ZXMiLCJfY3Nzb21QcmVmaXhlcyIsImhhc0V2ZW50IiwidGVzdFByb3AiLCJ0ZXN0QWxsUHJvcHMiLCJ0ZXN0U3R5bGVzIiwiYiIsIm1vZHVsZSIsImV4cG9ydHMiLCJFcnJvciIsInMiLCJjIiwibiIsImlzV2luZG93Iiwibm9kZVR5cGUiLCJ4IiwiaXNGdW5jdGlvbiIsImdyZXAiLCJkIiwidyIsImZpbHRlciIsImciLCJEIiwiRyIsIkUiLCJJIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlYWR5IiwiSyIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwidWlkIiwiUCIsIk8iLCJnZXRBdHRyaWJ1dGUiLCJOIiwicGFyc2VKU09OIiwiTSIsInNldCIsIloiLCJfIiwiYWN0aXZlRWxlbWVudCIsImphIiwia2EiLCJsYSIsImdhIiwiZXhlYyIsIm1hIiwiTCIsIm5hIiwiZiIsImgiLCJqIiwiaGFzRGF0YSIsImFjY2VzcyIsImV2ZW50cyIsImhhbmRsZSIsImV4dGVuZCIsIm9hIiwicXVlcnlTZWxlY3RvckFsbCIsIm1lcmdlIiwicGEiLCJUIiwiY2hlY2tlZCIsImRlZmF1bHRWYWx1ZSIsInNhIiwiYXBwZW5kVG8iLCJnZXREZWZhdWx0Q29tcHV0ZWRTdHlsZSIsImRpc3BsYXkiLCJjc3MiLCJkZXRhY2giLCJ0YSIsInJhIiwicWEiLCJjb250ZW50RG9jdW1lbnQiLCJ3cml0ZSIsImNsb3NlIiwieGEiLCJ3YSIsImdldFByb3BlcnR5VmFsdWUiLCJ2YSIsInVhIiwid2lkdGgiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwieWEiLCJGYSIsIkVhIiwiR2EiLCJBYSIsIk1hdGgiLCJtYXgiLCJIYSIsIlIiLCJJYSIsIm9mZnNldFdpZHRoIiwiayIsImJveFNpemluZ1JlbGlhYmxlIiwicGFyc2VGbG9hdCIsIkphIiwiUyIsIkthIiwiU2EiLCJzZXRUaW1lb3V0IiwiTGEiLCJub3ciLCJUYSIsImhlaWdodCIsIlVhIiwiUmEiLCJWYSIsIm0iLCJvIiwicSIsInF1ZXVlIiwiX3F1ZXVlSG9va3MiLCJ1bnF1ZXVlZCIsImVtcHR5IiwiZmlyZSIsImFsd2F5cyIsIm92ZXJmbG93WCIsIm92ZXJmbG93WSIsIk5hIiwiaXNFbXB0eU9iamVjdCIsImhpZGRlbiIsImRvbmUiLCJyZW1vdmUiLCJzdGFydCIsImVuZCIsIldhIiwiY2FtZWxDYXNlIiwiaXNBcnJheSIsImNzc0hvb2tzIiwiZXhwYW5kIiwiWGEiLCJRYSIsIkRlZmVycmVkIiwic3RhcnRUaW1lIiwiZHVyYXRpb24iLCJ0d2VlbnMiLCJydW4iLCJub3RpZnlXaXRoIiwicmVzb2x2ZVdpdGgiLCJwcm9taXNlIiwib3B0cyIsInNwZWNpYWxFYXNpbmciLCJvcmlnaW5hbFByb3BlcnRpZXMiLCJvcmlnaW5hbE9wdGlvbnMiLCJjcmVhdGVUd2VlbiIsIlR3ZWVuIiwiZWFzaW5nIiwic3RvcCIsInJlamVjdFdpdGgiLCJtYXAiLCJmeCIsInRpbWVyIiwiYW5pbSIsInByb2dyZXNzIiwiY29tcGxldGUiLCJmYWlsIiwicWIiLCJ1bnNoaWZ0IiwicmIiLCJkYXRhVHlwZXMiLCJtYiIsInNiIiwiYWpheFNldHRpbmdzIiwiZmxhdE9wdGlvbnMiLCJ0YiIsImNvbnRlbnRzIiwic2hpZnQiLCJtaW1lVHlwZSIsImdldFJlc3BvbnNlSGVhZGVyIiwiY29udmVydGVycyIsInViIiwicmVzcG9uc2VGaWVsZHMiLCJkYXRhRmlsdGVyIiwic3RhdGUiLCJBYiIsIndiIiwiSmIiLCJmbiIsInIiLCJqcXVlcnkiLCJzZWxlY3RvciIsInRvQXJyYXkiLCJwdXNoU3RhY2siLCJwcmV2T2JqZWN0IiwiY29udGV4dCIsImZpcnN0IiwiZXEiLCJsYXN0Iiwic29ydCIsInNwbGljZSIsImlzUGxhaW5PYmplY3QiLCJyYW5kb20iLCJpc1JlYWR5Iiwibm9vcCIsIkFycmF5IiwiaXNOdW1lcmljIiwiZ2xvYmFsRXZhbCIsImV2YWwiLCJ0cmltIiwidGV4dCIsImhlYWQiLCJtYWtlQXJyYXkiLCJpbkFycmF5IiwiZ3VpZCIsInByb3h5IiwiRGF0ZSIsInN1cHBvcnQiLCJ0IiwidiIsIkgiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicXNhIiwidSIsImJhIiwiYWEiLCJ5IiwiaGEiLCJjYWNoZUxlbmd0aCIsImlhIiwiYXR0ckhhbmRsZSIsInNvdXJjZUluZGV4IiwiQyIsIm5leHRTaWJsaW5nIiwiZGlyIiwiSiIsInJlbGF0aXZlIiwiZmluZCIsIlRBRyIsInVuaXF1ZVNvcnQiLCJ6IiwiQSIsIkIiLCJwb3AiLCJRIiwiUmVnRXhwIiwiVSIsIlYiLCJXIiwiWCIsIklEIiwiQ0xBU1MiLCJBVFRSIiwiUFNFVURPIiwiQ0hJTEQiLCJuZWVkc0NvbnRleHQiLCJZIiwiY2EiLCJkYSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImVhIiwiZmEiLCJpc1hNTCIsInNldERvY3VtZW50IiwidG9wIiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50IiwiYXR0cmlidXRlcyIsImNyZWF0ZUNvbW1lbnQiLCJnZXRCeUlkIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJnZXRBdHRyaWJ1dGVOb2RlIiwibWF0Y2hlc1NlbGVjdG9yIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwibW96TWF0Y2hlc1NlbGVjdG9yIiwib01hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiZGlzY29ubmVjdGVkTWF0Y2giLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsInNvcnREZXRhY2hlZCIsInNwZWNpZmllZCIsImRldGVjdER1cGxpY2F0ZXMiLCJzb3J0U3RhYmxlIiwiZ2V0VGV4dCIsInRleHRDb250ZW50Iiwibm9kZVZhbHVlIiwic2VsZWN0b3JzIiwiY3JlYXRlUHNldWRvIiwiPiIsIiAiLCIrIiwifiIsInByZUZpbHRlciIsInBzZXVkb3MiLCJzZXRGaWx0ZXJzIiwibm90IiwiaGFzIiwiaW5uZXJUZXh0IiwibGFuZyIsImxvY2F0aW9uIiwiaGFzaCIsInJvb3QiLCJmb2N1cyIsImhhc0ZvY3VzIiwiaHJlZiIsInRhYkluZGV4IiwiZW5hYmxlZCIsImRpc2FibGVkIiwic2VsZWN0ZWQiLCJzZWxlY3RlZEluZGV4IiwiaGVhZGVyIiwiYnV0dG9uIiwiZXZlbiIsIm9kZCIsImx0IiwiZ3QiLCJudGgiLCJyYWRpbyIsImNoZWNrYm94IiwiZmlsZSIsInBhc3N3b3JkIiwiaW1hZ2UiLCJmaWx0ZXJzIiwidG9rZW5pemUiLCJjb21waWxlIiwiZXhwciIsInVuaXF1ZSIsImlzWE1MRG9jIiwicGFyc2VIVE1MIiwiY2hpbGRyZW4iLCJuZXh0IiwicHJldiIsInNpYmxpbmciLCJjbG9zZXN0IiwiaW5kZXgiLCJwcmV2QWxsIiwiYWRkQmFjayIsInBhcmVudHMiLCJwYXJlbnRzVW50aWwiLCJuZXh0QWxsIiwibmV4dFVudGlsIiwicHJldlVudGlsIiwic2libGluZ3MiLCJyZXZlcnNlIiwiQ2FsbGJhY2tzIiwib25jZSIsIm1lbW9yeSIsInN0b3BPbkZhbHNlIiwibG9jayIsImxvY2tlZCIsImZpcmVXaXRoIiwiZmlyZWQiLCJ0aGVuIiwicmVzb2x2ZSIsInJlamVjdCIsIm5vdGlmeSIsInBpcGUiLCJ3aGVuIiwicmVhZHlXYWl0IiwiaG9sZFJlYWR5IiwidHJpZ2dlckhhbmRsZXIiLCJvZmYiLCJyZWFkeVN0YXRlIiwiYWNjZXB0RGF0YSIsImFjY2VwdHMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGlzY2FyZCIsInJlbW92ZURhdGEiLCJfZGF0YSIsIl9yZW1vdmVEYXRhIiwiZGVxdWV1ZSIsImNsZWFyUXVldWUiLCJzb3VyY2UiLCJjaGVja0Nsb25lIiwibm9DbG9uZUNoZWNrZWQiLCJmb2N1c2luQnViYmxlcyIsImdsb2JhbCIsImhhbmRsZXIiLCJ0cmlnZ2VyZWQiLCJkaXNwYXRjaCIsInNwZWNpYWwiLCJkZWxlZ2F0ZVR5cGUiLCJiaW5kVHlwZSIsIm9yaWdUeXBlIiwibmFtZXNwYWNlIiwiZGVsZWdhdGVDb3VudCIsInNldHVwIiwidGVhcmRvd24iLCJyZW1vdmVFdmVudCIsInRyaWdnZXIiLCJFdmVudCIsImlzVHJpZ2dlciIsIm5hbWVzcGFjZV9yZSIsIm5vQnViYmxlIiwicGFyZW50V2luZG93IiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJfZGVmYXVsdCIsImZpeCIsImRlbGVnYXRlVGFyZ2V0IiwicHJlRGlzcGF0Y2giLCJoYW5kbGVycyIsImN1cnJlbnRUYXJnZXQiLCJpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCIsImhhbmRsZU9iaiIsInN0b3BQcm9wYWdhdGlvbiIsInBvc3REaXNwYXRjaCIsImZpeEhvb2tzIiwia2V5SG9va3MiLCJ3aGljaCIsImNoYXJDb2RlIiwibW91c2VIb29rcyIsInBhZ2VYIiwiY2xpZW50WCIsInNjcm9sbExlZnQiLCJjbGllbnRMZWZ0IiwicGFnZVkiLCJjbGllbnRZIiwic2Nyb2xsVG9wIiwiY2xpZW50VG9wIiwiYmVmb3JldW5sb2FkIiwib3JpZ2luYWxFdmVudCIsInJldHVyblZhbHVlIiwic2ltdWxhdGUiLCJpc1NpbXVsYXRlZCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJ0aW1lU3RhbXAiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsInBvaW50ZXJlbnRlciIsInBvaW50ZXJsZWF2ZSIsInJlbGF0ZWRUYXJnZXQiLCJvbmUiLCJvcHRpb24iLCJ0aGVhZCIsImNvbCIsInRyIiwidGQiLCJvcHRncm91cCIsInRib2R5IiwidGZvb3QiLCJjb2xncm91cCIsImNhcHRpb24iLCJ0aCIsImJ1aWxkRnJhZ21lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImNsZWFuRGF0YSIsImFwcGVuZCIsImRvbU1hbmlwIiwicHJlcGVuZCIsImJlZm9yZSIsImFmdGVyIiwiaHRtbCIsInJlcGxhY2VXaXRoIiwicmVwbGFjZUNoaWxkIiwic3JjIiwiX2V2YWxVcmwiLCJwcmVwZW5kVG8iLCJpbnNlcnRBZnRlciIsInJlcGxhY2VBbGwiLCJvcGVuZXIiLCJiYWNrZ3JvdW5kQ2xpcCIsImNsZWFyQ2xvbmVTdHlsZSIsInBpeGVsUG9zaXRpb24iLCJyZWxpYWJsZU1hcmdpblJpZ2h0IiwibWFyZ2luUmlnaHQiLCJzd2FwIiwiemEiLCJCYSIsIkNhIiwicG9zaXRpb24iLCJ2aXNpYmlsaXR5IiwiRGEiLCJsZXR0ZXJTcGFjaW5nIiwiZm9udFdlaWdodCIsImNzc051bWJlciIsImNvbHVtbkNvdW50IiwiZmlsbE9wYWNpdHkiLCJmbGV4R3JvdyIsImZsZXhTaHJpbmsiLCJsaW5lSGVpZ2h0Iiwib3JkZXIiLCJvcnBoYW5zIiwid2lkb3dzIiwiekluZGV4IiwiY3NzUHJvcHMiLCJmbG9hdCIsIm1hcmdpbiIsInBhZGRpbmciLCJib3JkZXIiLCJ0b2dnbGUiLCJjdXIiLCJ1bml0IiwicHJvcEhvb2tzIiwicG9zIiwic3RlcCIsImxpbmVhciIsInN3aW5nIiwiY29zIiwiUEkiLCJNYSIsIk9hIiwiUGEiLCIqIiwiQW5pbWF0aW9uIiwidHdlZW5lciIsInByZWZpbHRlciIsInNwZWVkIiwic3BlZWRzIiwib2xkIiwiZmFkZVRvIiwiYW5pbWF0ZSIsImZpbmlzaCIsInRpbWVycyIsInNsaWRlRG93biIsInNsaWRlVXAiLCJzbGlkZVRvZ2dsZSIsImZhZGVUb2dnbGUiLCJ0aWNrIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzbG93IiwiZmFzdCIsImNsZWFyVGltZW91dCIsImNoZWNrT24iLCJvcHRTZWxlY3RlZCIsIm9wdERpc2FibGVkIiwicmFkaW9WYWx1ZSIsIllhIiwiWmEiLCIkYSIsInJlbW92ZUF0dHIiLCJhdHRySG9va3MiLCJwcm9wRml4IiwiX2EiLCJyZW1vdmVQcm9wIiwiZm9yIiwiY2xhc3MiLCJoYXNBdHRyaWJ1dGUiLCJhYiIsInRvZ2dsZUNsYXNzIiwiYmIiLCJ2YWxIb29rcyIsImhvdmVyIiwidW5iaW5kIiwiZGVsZWdhdGUiLCJ1bmRlbGVnYXRlIiwiY2IiLCJkYiIsIkpTT04iLCJwYXJzZSIsInBhcnNlWE1MIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiZWIiLCJmYiIsImdiIiwiaGIiLCJpYiIsImpiIiwia2IiLCJsYiIsIm5iIiwib2IiLCJwYiIsImFjdGl2ZSIsImxhc3RNb2RpZmllZCIsImV0YWciLCJpc0xvY2FsIiwicHJvY2Vzc0RhdGEiLCJhc3luYyIsImNvbnRlbnRUeXBlIiwieG1sIiwianNvbiIsIiogdGV4dCIsInRleHQgaHRtbCIsInRleHQganNvbiIsInRleHQgeG1sIiwiYWpheFNldHVwIiwiYWpheFByZWZpbHRlciIsImFqYXhUcmFuc3BvcnQiLCJpZk1vZGlmaWVkIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsInN0YXR1c0NvZGUiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJzZXRSZXF1ZXN0SGVhZGVyIiwib3ZlcnJpZGVNaW1lVHlwZSIsIm1ldGhvZCIsImNyb3NzRG9tYWluIiwicGFyYW0iLCJ0cmFkaXRpb25hbCIsImhhc0NvbnRlbnQiLCJoZWFkZXJzIiwiYmVmb3JlU2VuZCIsInRpbWVvdXQiLCJzZW5kIiwiZ2V0SlNPTiIsImdldFNjcmlwdCIsInRocm93cyIsIndyYXBBbGwiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIndyYXBJbm5lciIsIndyYXAiLCJ1bndyYXAiLCJ2aXNpYmxlIiwidmIiLCJ4YiIsInliIiwiemIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzZXJpYWxpemUiLCJzZXJpYWxpemVBcnJheSIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwiQmIiLCJDYiIsIkRiIiwxMjIzLCJFYiIsImNvcnMiLCJvcGVuIiwidXNlcm5hbWUiLCJ4aHJGaWVsZHMiLCJvbmxvYWQiLCJvbmVycm9yIiwicmVzcG9uc2VUZXh0Iiwic2NyaXB0IiwidGV4dCBzY3JpcHQiLCJjaGFyc2V0Iiwic2NyaXB0Q2hhcnNldCIsIkZiIiwiR2IiLCJqc29ucCIsImpzb25wQ2FsbGJhY2siLCJIYiIsImFuaW1hdGVkIiwiSWIiLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJsZWZ0IiwidXNpbmciLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYWdlWU9mZnNldCIsInBhZ2VYT2Zmc2V0Iiwib2Zmc2V0UGFyZW50Iiwic2Nyb2xsVG8iLCJIZWlnaHQiLCJXaWR0aCIsImNvbnRlbnQiLCJzaXplIiwiYW5kU2VsZiIsImRlZmluZSIsImFtZCIsIktiIiwialF1ZXJ5IiwiTGIiLCJub0NvbmZsaWN0IiwiZ2V0VG9wRWxlbWVudCIsInBhZ2VOYXZJdGVtQWN0aXZlIiwic2Nyb2xsVG9FbGVtZW50IiwiZWwiLCJtcyIsInNjcm9sbCIsInRJZCIsInNlYXJjaCIsInNjcm9sbF90b19jYWxjX21hcmdpbiIsIm91dGVyV2lkdGgiLCJrZXlkb3duIiwiY3RybEtleSIsInJlIiwiZm9ybWF0QXNSb3VuZEN1cnJlbmN5IiwibnVtYmVyIiwidG9GaXhlZCIsImNhbGN1bGF0ZVBvc3NpYmxlSW5jb21lIiwicmV0dXJuX2Ftb3VudCIsImNhbGN1bGF0ZUFiYW5kb25lZENhcnRJbmNvbWUiLCJyZXR1cm5lZF9vcmRlcnMiLCJyZXR1cm5feWVhciIsInJvdW5kIiwicmV0dXJuX21vbnRoIiwiJG9yZGVyc19wZXJfZGF5Iiwib3JkZXJzX3Blcl9kYXkiLCIkYXZnX2JpbGwiLCJhdmdfYmlsbCIsIiRhYl9jYXJ0X3BlcmNlbnRhZ2UiLCJhYl9jYXJ0X3BlcmNlbnRhZ2UiXSwibWFwcGluZ3MiOiJBQTRoREksUUFBU0EsUUFDTEMsT0FBUyxHQUFJQyxPQUFNQyxJQUFJLE9BQ25CQyxRQUFTLFlBQWEsYUFDdEJDLEtBQU0sR0FDTkMsY0FF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RSxjQUFjOEIsR0FBRyxRQUFRLFdBQ25CKzNCLE1BUVJBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmNsdWRlIGpxdWVyeVxuLyohXG4gKiBNb2Rlcm5penIgdjIuOC4zXG4gKiB3d3cubW9kZXJuaXpyLmNvbVxuICpcbiAqIENvcHlyaWdodCAoYykgRmFydWsgQXRlcywgUGF1bCBJcmlzaCwgQWxleCBTZXh0b25cbiAqIEF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIGFuZCBNSVQgbGljZW5zZXM6IHd3dy5tb2Rlcm5penIuY29tL2xpY2Vuc2UvXG4gKi9cblxuLypcbiAqIE1vZGVybml6ciB0ZXN0cyB3aGljaCBuYXRpdmUgQ1NTMyBhbmQgSFRNTDUgZmVhdHVyZXMgYXJlIGF2YWlsYWJsZSBpblxuICogdGhlIGN1cnJlbnQgVUEgYW5kIG1ha2VzIHRoZSByZXN1bHRzIGF2YWlsYWJsZSB0byB5b3UgaW4gdHdvIHdheXM6XG4gKiBhcyBwcm9wZXJ0aWVzIG9uIGEgZ2xvYmFsIE1vZGVybml6ciBvYmplY3QsIGFuZCBhcyBjbGFzc2VzIG9uIHRoZVxuICogPGh0bWw+IGVsZW1lbnQuIFRoaXMgaW5mb3JtYXRpb24gYWxsb3dzIHlvdSB0byBwcm9ncmVzc2l2ZWx5IGVuaGFuY2VcbiAqIHlvdXIgcGFnZXMgd2l0aCBhIGdyYW51bGFyIGxldmVsIG9mIGNvbnRyb2wgb3ZlciB0aGUgZXhwZXJpZW5jZS5cbiAqXG4gKiBNb2Rlcm5penIgaGFzIGFuIG9wdGlvbmFsIChub3QgaW5jbHVkZWQpIGNvbmRpdGlvbmFsIHJlc291cmNlIGxvYWRlclxuICogY2FsbGVkIE1vZGVybml6ci5sb2FkKCksIGJhc2VkIG9uIFllcG5vcGUuanMgKHllcG5vcGVqcy5jb20pLlxuICogVG8gZ2V0IGEgYnVpbGQgdGhhdCBpbmNsdWRlcyBNb2Rlcm5penIubG9hZCgpLCBhcyB3ZWxsIGFzIGNob29zaW5nXG4gKiB3aGljaCB0ZXN0cyB0byBpbmNsdWRlLCBnbyB0byB3d3cubW9kZXJuaXpyLmNvbS9kb3dubG9hZC9cbiAqXG4gKiBBdXRob3JzICAgICAgICBGYXJ1ayBBdGVzLCBQYXVsIElyaXNoLCBBbGV4IFNleHRvblxuICogQ29udHJpYnV0b3JzICAgUnlhbiBTZWRkb24sIEJlbiBBbG1hblxuICovXG5cbndpbmRvdy5Nb2Rlcm5penIgPSAoZnVuY3Rpb24oIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCApIHtcblxuICAgIHZhciB2ZXJzaW9uID0gJzIuOC4zJyxcblxuICAgIE1vZGVybml6ciA9IHt9LFxuXG4gICAgLyo+PmNzc2NsYXNzZXMqL1xuICAgIC8vIG9wdGlvbiBmb3IgZW5hYmxpbmcgdGhlIEhUTUwgY2xhc3NlcyB0byBiZSBhZGRlZFxuICAgIGVuYWJsZUNsYXNzZXMgPSB0cnVlLFxuICAgIC8qPj5jc3NjbGFzc2VzKi9cblxuICAgIGRvY0VsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgb3VyIFwibW9kZXJuaXpyXCIgZWxlbWVudCB0aGF0IHdlIGRvIG1vc3QgZmVhdHVyZSB0ZXN0cyBvbi5cbiAgICAgKi9cbiAgICBtb2QgPSAnbW9kZXJuaXpyJyxcbiAgICBtb2RFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChtb2QpLFxuICAgIG1TdHlsZSA9IG1vZEVsZW0uc3R5bGUsXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgdGhlIGlucHV0IGVsZW1lbnQgZm9yIHZhcmlvdXMgV2ViIEZvcm1zIGZlYXR1cmUgdGVzdHMuXG4gICAgICovXG4gICAgaW5wdXRFbGVtIC8qPj5pbnB1dGVsZW0qLyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykgLyo+PmlucHV0ZWxlbSovICxcblxuICAgIC8qPj5zbWlsZSovXG4gICAgc21pbGUgPSAnOiknLFxuICAgIC8qPj5zbWlsZSovXG5cbiAgICB0b1N0cmluZyA9IHt9LnRvU3RyaW5nLFxuXG4gICAgLy8gVE9ETyA6OiBtYWtlIHRoZSBwcmVmaXhlcyBtb3JlIGdyYW51bGFyXG4gICAgLyo+PnByZWZpeGVzKi9cbiAgICAvLyBMaXN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBzZXQgZm9yIGNzcyB0ZXN0cy4gU2VlIHRpY2tldCAjMjFcbiAgICBwcmVmaXhlcyA9ICcgLXdlYmtpdC0gLW1vei0gLW8tIC1tcy0gJy5zcGxpdCgnICcpLFxuICAgIC8qPj5wcmVmaXhlcyovXG5cbiAgICAvKj4+ZG9tcHJlZml4ZXMqL1xuICAgIC8vIEZvbGxvd2luZyBzcGVjIGlzIHRvIGV4cG9zZSB2ZW5kb3Itc3BlY2lmaWMgc3R5bGUgcHJvcGVydGllcyBhczpcbiAgICAvLyAgIGVsZW0uc3R5bGUuV2Via2l0Qm9yZGVyUmFkaXVzXG4gICAgLy8gYW5kIHRoZSBmb2xsb3dpbmcgd291bGQgYmUgaW5jb3JyZWN0OlxuICAgIC8vICAgZWxlbS5zdHlsZS53ZWJraXRCb3JkZXJSYWRpdXNcblxuICAgIC8vIFdlYmtpdCBnaG9zdHMgdGhlaXIgcHJvcGVydGllcyBpbiBsb3dlcmNhc2UgYnV0IE9wZXJhICYgTW96IGRvIG5vdC5cbiAgICAvLyBNaWNyb3NvZnQgdXNlcyBhIGxvd2VyY2FzZSBgbXNgIGluc3RlYWQgb2YgdGhlIGNvcnJlY3QgYE1zYCBpbiBJRTgrXG4gICAgLy8gICBlcmlrLmVhZS5uZXQvYXJjaGl2ZXMvMjAwOC8wMy8xMC8yMS40OC4xMC9cblxuICAgIC8vIE1vcmUgaGVyZTogZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2lzc3Vlcy9pc3N1ZS8yMVxuICAgIG9tUHJlZml4ZXMgPSAnV2Via2l0IE1veiBPIG1zJyxcblxuICAgIGNzc29tUHJlZml4ZXMgPSBvbVByZWZpeGVzLnNwbGl0KCcgJyksXG5cbiAgICBkb21QcmVmaXhlcyA9IG9tUHJlZml4ZXMudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpLFxuICAgIC8qPj5kb21wcmVmaXhlcyovXG5cbiAgICAvKj4+bnMqL1xuICAgIG5zID0geydzdmcnOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnfSxcbiAgICAvKj4+bnMqL1xuXG4gICAgdGVzdHMgPSB7fSxcbiAgICBpbnB1dHMgPSB7fSxcbiAgICBhdHRycyA9IHt9LFxuXG4gICAgY2xhc3NlcyA9IFtdLFxuXG4gICAgc2xpY2UgPSBjbGFzc2VzLnNsaWNlLFxuXG4gICAgZmVhdHVyZU5hbWUsIC8vIHVzZWQgaW4gdGVzdGluZyBsb29wXG5cblxuICAgIC8qPj50ZXN0c3R5bGVzKi9cbiAgICAvLyBJbmplY3QgZWxlbWVudCB3aXRoIHN0eWxlIGVsZW1lbnQgYW5kIHNvbWUgQ1NTIHJ1bGVzXG4gICAgaW5qZWN0RWxlbWVudFdpdGhTdHlsZXMgPSBmdW5jdGlvbiggcnVsZSwgY2FsbGJhY2ssIG5vZGVzLCB0ZXN0bmFtZXMgKSB7XG5cbiAgICAgIHZhciBzdHlsZSwgcmV0LCBub2RlLCBkb2NPdmVyZmxvdyxcbiAgICAgICAgICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgICAvLyBBZnRlciBwYWdlIGxvYWQgaW5qZWN0aW5nIGEgZmFrZSBib2R5IGRvZXNuJ3Qgd29yayBzbyBjaGVjayBpZiBib2R5IGV4aXN0c1xuICAgICAgICAgIGJvZHkgPSBkb2N1bWVudC5ib2R5LFxuICAgICAgICAgIC8vIElFNiBhbmQgNyB3b24ndCByZXR1cm4gb2Zmc2V0V2lkdGggb3Igb2Zmc2V0SGVpZ2h0IHVubGVzcyBpdCdzIGluIHRoZSBib2R5IGVsZW1lbnQsIHNvIHdlIGZha2UgaXQuXG4gICAgICAgICAgZmFrZUJvZHkgPSBib2R5IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JvZHknKTtcblxuICAgICAgaWYgKCBwYXJzZUludChub2RlcywgMTApICkge1xuICAgICAgICAgIC8vIEluIG9yZGVyIG5vdCB0byBnaXZlIGZhbHNlIHBvc2l0aXZlcyB3ZSBjcmVhdGUgYSBub2RlIGZvciBlYWNoIHRlc3RcbiAgICAgICAgICAvLyBUaGlzIGFsc28gYWxsb3dzIHRoZSBtZXRob2QgdG8gc2NhbGUgZm9yIHVuc3BlY2lmaWVkIHVzZXNcbiAgICAgICAgICB3aGlsZSAoIG5vZGVzLS0gKSB7XG4gICAgICAgICAgICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgbm9kZS5pZCA9IHRlc3RuYW1lcyA/IHRlc3RuYW1lc1tub2Rlc10gOiBtb2QgKyAobm9kZXMgKyAxKTtcbiAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gPHN0eWxlPiBlbGVtZW50cyBpbiBJRTYtOSBhcmUgY29uc2lkZXJlZCAnTm9TY29wZScgZWxlbWVudHMgYW5kIHRoZXJlZm9yZSB3aWxsIGJlIHJlbW92ZWRcbiAgICAgIC8vIHdoZW4gaW5qZWN0ZWQgd2l0aCBpbm5lckhUTUwuIFRvIGdldCBhcm91bmQgdGhpcyB5b3UgbmVlZCB0byBwcmVwZW5kIHRoZSAnTm9TY29wZScgZWxlbWVudFxuICAgICAgLy8gd2l0aCBhICdzY29wZWQnIGVsZW1lbnQsIGluIG91ciBjYXNlIHRoZSBzb2Z0LWh5cGhlbiBlbnRpdHkgYXMgaXQgd29uJ3QgbWVzcyB3aXRoIG91ciBtZWFzdXJlbWVudHMuXG4gICAgICAvLyBtc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczUzMzg5NyUyOFZTLjg1JTI5LmFzcHhcbiAgICAgIC8vIERvY3VtZW50cyBzZXJ2ZWQgYXMgeG1sIHdpbGwgdGhyb3cgaWYgdXNpbmcgJnNoeTsgc28gdXNlIHhtbCBmcmllbmRseSBlbmNvZGVkIHZlcnNpb24uIFNlZSBpc3N1ZSAjMjc3XG4gICAgICBzdHlsZSA9IFsnJiMxNzM7JywnPHN0eWxlIGlkPVwicycsIG1vZCwgJ1wiPicsIHJ1bGUsICc8L3N0eWxlPiddLmpvaW4oJycpO1xuICAgICAgZGl2LmlkID0gbW9kO1xuICAgICAgLy8gSUU2IHdpbGwgZmFsc2UgcG9zaXRpdmUgb24gc29tZSB0ZXN0cyBkdWUgdG8gdGhlIHN0eWxlIGVsZW1lbnQgaW5zaWRlIHRoZSB0ZXN0IGRpdiBzb21laG93IGludGVyZmVyaW5nIG9mZnNldEhlaWdodCwgc28gaW5zZXJ0IGl0IGludG8gYm9keSBvciBmYWtlYm9keS5cbiAgICAgIC8vIE9wZXJhIHdpbGwgYWN0IGFsbCBxdWlya3kgd2hlbiBpbmplY3RpbmcgZWxlbWVudHMgaW4gZG9jdW1lbnRFbGVtZW50IHdoZW4gcGFnZSBpcyBzZXJ2ZWQgYXMgeG1sLCBuZWVkcyBmYWtlYm9keSB0b28uICMyNzBcbiAgICAgIChib2R5ID8gZGl2IDogZmFrZUJvZHkpLmlubmVySFRNTCArPSBzdHlsZTtcbiAgICAgIGZha2VCb2R5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICBpZiAoICFib2R5ICkge1xuICAgICAgICAgIC8vYXZvaWQgY3Jhc2hpbmcgSUU4LCBpZiBiYWNrZ3JvdW5kIGltYWdlIGlzIHVzZWRcbiAgICAgICAgICBmYWtlQm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gICAgICAgICAgLy9TYWZhcmkgNS4xMy81LjEuNCBPU1ggc3RvcHMgbG9hZGluZyBpZiA6Oi13ZWJraXQtc2Nyb2xsYmFyIGlzIHVzZWQgYW5kIHNjcm9sbGJhcnMgYXJlIHZpc2libGVcbiAgICAgICAgICBmYWtlQm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgIGRvY092ZXJmbG93ID0gZG9jRWxlbWVudC5zdHlsZS5vdmVyZmxvdztcbiAgICAgICAgICBkb2NFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgZG9jRWxlbWVudC5hcHBlbmRDaGlsZChmYWtlQm9keSk7XG4gICAgICB9XG5cbiAgICAgIHJldCA9IGNhbGxiYWNrKGRpdiwgcnVsZSk7XG4gICAgICAvLyBJZiB0aGlzIGlzIGRvbmUgYWZ0ZXIgcGFnZSBsb2FkIHdlIGRvbid0IHdhbnQgdG8gcmVtb3ZlIHRoZSBib2R5IHNvIGNoZWNrIGlmIGJvZHkgZXhpc3RzXG4gICAgICBpZiAoICFib2R5ICkge1xuICAgICAgICAgIGZha2VCb2R5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZmFrZUJvZHkpO1xuICAgICAgICAgIGRvY0VsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBkb2NPdmVyZmxvdztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICEhcmV0O1xuXG4gICAgfSxcbiAgICAvKj4+dGVzdHN0eWxlcyovXG5cbiAgICAvKj4+bXEqL1xuICAgIC8vIGFkYXB0ZWQgZnJvbSBtYXRjaE1lZGlhIHBvbHlmaWxsXG4gICAgLy8gYnkgU2NvdHQgSmVobCBhbmQgUGF1bCBJcmlzaFxuICAgIC8vIGdpc3QuZ2l0aHViLmNvbS83ODY3NjhcbiAgICB0ZXN0TWVkaWFRdWVyeSA9IGZ1bmN0aW9uKCBtcSApIHtcblxuICAgICAgdmFyIG1hdGNoTWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYSB8fCB3aW5kb3cubXNNYXRjaE1lZGlhO1xuICAgICAgaWYgKCBtYXRjaE1lZGlhICkge1xuICAgICAgICByZXR1cm4gbWF0Y2hNZWRpYShtcSkgJiYgbWF0Y2hNZWRpYShtcSkubWF0Y2hlcyB8fCBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGJvb2w7XG5cbiAgICAgIGluamVjdEVsZW1lbnRXaXRoU3R5bGVzKCdAbWVkaWEgJyArIG1xICsgJyB7ICMnICsgbW9kICsgJyB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgfSB9JywgZnVuY3Rpb24oIG5vZGUgKSB7XG4gICAgICAgIGJvb2wgPSAod2luZG93LmdldENvbXB1dGVkU3R5bGUgP1xuICAgICAgICAgICAgICAgICAgZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKSA6XG4gICAgICAgICAgICAgICAgICBub2RlLmN1cnJlbnRTdHlsZSlbJ3Bvc2l0aW9uJ10gPT0gJ2Fic29sdXRlJztcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gYm9vbDtcblxuICAgICB9LFxuICAgICAvKj4+bXEqL1xuXG5cbiAgICAvKj4+aGFzZXZlbnQqL1xuICAgIC8vXG4gICAgLy8gaXNFdmVudFN1cHBvcnRlZCBkZXRlcm1pbmVzIGlmIGEgZ2l2ZW4gZWxlbWVudCBzdXBwb3J0cyB0aGUgZ2l2ZW4gZXZlbnRcbiAgICAvLyBrYW5nYXguZ2l0aHViLmNvbS9pc2V2ZW50c3VwcG9ydGVkL1xuICAgIC8vXG4gICAgLy8gVGhlIGZvbGxvd2luZyByZXN1bHRzIGFyZSBrbm93biBpbmNvcnJlY3RzOlxuICAgIC8vICAgTW9kZXJuaXpyLmhhc0V2ZW50KFwid2Via2l0VHJhbnNpdGlvbkVuZFwiLCBlbGVtKSAvLyBmYWxzZSBuZWdhdGl2ZVxuICAgIC8vICAgTW9kZXJuaXpyLmhhc0V2ZW50KFwidGV4dElucHV0XCIpIC8vIGluIFdlYmtpdC4gZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2lzc3Vlcy8zMzNcbiAgICAvLyAgIC4uLlxuICAgIGlzRXZlbnRTdXBwb3J0ZWQgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciBUQUdOQU1FUyA9IHtcbiAgICAgICAgJ3NlbGVjdCc6ICdpbnB1dCcsICdjaGFuZ2UnOiAnaW5wdXQnLFxuICAgICAgICAnc3VibWl0JzogJ2Zvcm0nLCAncmVzZXQnOiAnZm9ybScsXG4gICAgICAgICdlcnJvcic6ICdpbWcnLCAnbG9hZCc6ICdpbWcnLCAnYWJvcnQnOiAnaW1nJ1xuICAgICAgfTtcblxuICAgICAgZnVuY3Rpb24gaXNFdmVudFN1cHBvcnRlZCggZXZlbnROYW1lLCBlbGVtZW50ICkge1xuXG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoVEFHTkFNRVNbZXZlbnROYW1lXSB8fCAnZGl2Jyk7XG4gICAgICAgIGV2ZW50TmFtZSA9ICdvbicgKyBldmVudE5hbWU7XG5cbiAgICAgICAgLy8gV2hlbiB1c2luZyBgc2V0QXR0cmlidXRlYCwgSUUgc2tpcHMgXCJ1bmxvYWRcIiwgV2ViS2l0IHNraXBzIFwidW5sb2FkXCIgYW5kIFwicmVzaXplXCIsIHdoZXJlYXMgYGluYCBcImNhdGNoZXNcIiB0aG9zZVxuICAgICAgICB2YXIgaXNTdXBwb3J0ZWQgPSBldmVudE5hbWUgaW4gZWxlbWVudDtcblxuICAgICAgICBpZiAoICFpc1N1cHBvcnRlZCApIHtcbiAgICAgICAgICAvLyBJZiBpdCBoYXMgbm8gYHNldEF0dHJpYnV0ZWAgKGkuZS4gZG9lc24ndCBpbXBsZW1lbnQgTm9kZSBpbnRlcmZhY2UpLCB0cnkgZ2VuZXJpYyBlbGVtZW50XG4gICAgICAgICAgaWYgKCAhZWxlbWVudC5zZXRBdHRyaWJ1dGUgKSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICggZWxlbWVudC5zZXRBdHRyaWJ1dGUgJiYgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUgKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShldmVudE5hbWUsICcnKTtcbiAgICAgICAgICAgIGlzU3VwcG9ydGVkID0gaXMoZWxlbWVudFtldmVudE5hbWVdLCAnZnVuY3Rpb24nKTtcblxuICAgICAgICAgICAgLy8gSWYgcHJvcGVydHkgd2FzIGNyZWF0ZWQsIFwicmVtb3ZlIGl0XCIgKGJ5IHNldHRpbmcgdmFsdWUgdG8gYHVuZGVmaW5lZGApXG4gICAgICAgICAgICBpZiAoICFpcyhlbGVtZW50W2V2ZW50TmFtZV0sICd1bmRlZmluZWQnKSApIHtcbiAgICAgICAgICAgICAgZWxlbWVudFtldmVudE5hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoZXZlbnROYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50ID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGlzU3VwcG9ydGVkO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlzRXZlbnRTdXBwb3J0ZWQ7XG4gICAgfSkoKSxcbiAgICAvKj4+aGFzZXZlbnQqL1xuXG4gICAgLy8gVE9ETyA6OiBBZGQgZmxhZyBmb3IgaGFzb3ducHJvcCA/IGRpZG4ndCBsYXN0IHRpbWVcblxuICAgIC8vIGhhc093blByb3BlcnR5IHNoaW0gYnkga2FuZ2F4IG5lZWRlZCBmb3IgU2FmYXJpIDIuMCBzdXBwb3J0XG4gICAgX2hhc093blByb3BlcnR5ID0gKHt9KS5oYXNPd25Qcm9wZXJ0eSwgaGFzT3duUHJvcDtcblxuICAgIGlmICggIWlzKF9oYXNPd25Qcm9wZXJ0eSwgJ3VuZGVmaW5lZCcpICYmICFpcyhfaGFzT3duUHJvcGVydHkuY2FsbCwgJ3VuZGVmaW5lZCcpICkge1xuICAgICAgaGFzT3duUHJvcCA9IGZ1bmN0aW9uIChvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgICAgIHJldHVybiBfaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaGFzT3duUHJvcCA9IGZ1bmN0aW9uIChvYmplY3QsIHByb3BlcnR5KSB7IC8qIHllcywgdGhpcyBjYW4gZ2l2ZSBmYWxzZSBwb3NpdGl2ZXMvbmVnYXRpdmVzLCBidXQgbW9zdCBvZiB0aGUgdGltZSB3ZSBkb24ndCBjYXJlIGFib3V0IHRob3NlICovXG4gICAgICAgIHJldHVybiAoKHByb3BlcnR5IGluIG9iamVjdCkgJiYgaXMob2JqZWN0LmNvbnN0cnVjdG9yLnByb3RvdHlwZVtwcm9wZXJ0eV0sICd1bmRlZmluZWQnKSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEFkYXB0ZWQgZnJvbSBFUzUtc2hpbSBodHRwczovL2dpdGh1Yi5jb20va3Jpc2tvd2FsL2VzNS1zaGltL2Jsb2IvbWFzdGVyL2VzNS1zaGltLmpzXG4gICAgLy8gZXM1LmdpdGh1Yi5jb20vI3gxNS4zLjQuNVxuXG4gICAgaWYgKCFGdW5jdGlvbi5wcm90b3R5cGUuYmluZCkge1xuICAgICAgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiBiaW5kKHRoYXQpIHtcblxuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcztcblxuICAgICAgICBpZiAodHlwZW9mIHRhcmdldCAhPSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuICAgICAgICAgICAgYm91bmQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgYm91bmQpIHtcblxuICAgICAgICAgICAgICB2YXIgRiA9IGZ1bmN0aW9uKCl7fTtcbiAgICAgICAgICAgICAgRi5wcm90b3R5cGUgPSB0YXJnZXQucHJvdG90eXBlO1xuICAgICAgICAgICAgICB2YXIgc2VsZiA9IG5ldyBGKCk7XG5cbiAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRhcmdldC5hcHBseShcbiAgICAgICAgICAgICAgICAgIHNlbGYsXG4gICAgICAgICAgICAgICAgICBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGlmIChPYmplY3QocmVzdWx0KSA9PT0gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBzZWxmO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgIHJldHVybiB0YXJnZXQuYXBwbHkoXG4gICAgICAgICAgICAgICAgICB0aGF0LFxuICAgICAgICAgICAgICAgICAgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gYm91bmQ7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHNldENzcyBhcHBsaWVzIGdpdmVuIHN0eWxlcyB0byB0aGUgTW9kZXJuaXpyIERPTSBub2RlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNldENzcyggc3RyICkge1xuICAgICAgICBtU3R5bGUuY3NzVGV4dCA9IHN0cjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzZXRDc3NBbGwgZXh0cmFwb2xhdGVzIGFsbCB2ZW5kb3Itc3BlY2lmaWMgY3NzIHN0cmluZ3MuXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0Q3NzQWxsKCBzdHIxLCBzdHIyICkge1xuICAgICAgICByZXR1cm4gc2V0Q3NzKHByZWZpeGVzLmpvaW4oc3RyMSArICc7JykgKyAoIHN0cjIgfHwgJycgKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaXMgcmV0dXJucyBhIGJvb2xlYW4gZm9yIGlmIHR5cGVvZiBvYmogaXMgZXhhY3RseSB0eXBlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzKCBvYmosIHR5cGUgKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSB0eXBlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNvbnRhaW5zIHJldHVybnMgYSBib29sZWFuIGZvciBpZiBzdWJzdHIgaXMgZm91bmQgd2l0aGluIHN0ci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjb250YWlucyggc3RyLCBzdWJzdHIgKSB7XG4gICAgICAgIHJldHVybiAhIX4oJycgKyBzdHIpLmluZGV4T2Yoc3Vic3RyKTtcbiAgICB9XG5cbiAgICAvKj4+dGVzdHByb3AqL1xuXG4gICAgLy8gdGVzdFByb3BzIGlzIGEgZ2VuZXJpYyBDU1MgLyBET00gcHJvcGVydHkgdGVzdC5cblxuICAgIC8vIEluIHRlc3Rpbmcgc3VwcG9ydCBmb3IgYSBnaXZlbiBDU1MgcHJvcGVydHksIGl0J3MgbGVnaXQgdG8gdGVzdDpcbiAgICAvLyAgICBgZWxlbS5zdHlsZVtzdHlsZU5hbWVdICE9PSB1bmRlZmluZWRgXG4gICAgLy8gSWYgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCBpdCB3aWxsIHJldHVybiBhbiBlbXB0eSBzdHJpbmcsXG4gICAgLy8gaWYgdW5zdXBwb3J0ZWQgaXQgd2lsbCByZXR1cm4gdW5kZWZpbmVkLlxuXG4gICAgLy8gV2UnbGwgdGFrZSBhZHZhbnRhZ2Ugb2YgdGhpcyBxdWljayB0ZXN0IGFuZCBza2lwIHNldHRpbmcgYSBzdHlsZVxuICAgIC8vIG9uIG91ciBtb2Rlcm5penIgZWxlbWVudCwgYnV0IGluc3RlYWQganVzdCB0ZXN0aW5nIHVuZGVmaW5lZCB2c1xuICAgIC8vIGVtcHR5IHN0cmluZy5cblxuICAgIC8vIEJlY2F1c2UgdGhlIHRlc3Rpbmcgb2YgdGhlIENTUyBwcm9wZXJ0eSBuYW1lcyAod2l0aCBcIi1cIiwgYXNcbiAgICAvLyBvcHBvc2VkIHRvIHRoZSBjYW1lbENhc2UgRE9NIHByb3BlcnRpZXMpIGlzIG5vbi1wb3J0YWJsZSBhbmRcbiAgICAvLyBub24tc3RhbmRhcmQgYnV0IHdvcmtzIGluIFdlYktpdCBhbmQgSUUgKGJ1dCBub3QgR2Vja28gb3IgT3BlcmEpLFxuICAgIC8vIHdlIGV4cGxpY2l0bHkgcmVqZWN0IHByb3BlcnRpZXMgd2l0aCBkYXNoZXMgc28gdGhhdCBhdXRob3JzXG4gICAgLy8gZGV2ZWxvcGluZyBpbiBXZWJLaXQgb3IgSUUgZmlyc3QgZG9uJ3QgZW5kIHVwIHdpdGhcbiAgICAvLyBicm93c2VyLXNwZWNpZmljIGNvbnRlbnQgYnkgYWNjaWRlbnQuXG5cbiAgICBmdW5jdGlvbiB0ZXN0UHJvcHMoIHByb3BzLCBwcmVmaXhlZCApIHtcbiAgICAgICAgZm9yICggdmFyIGkgaW4gcHJvcHMgKSB7XG4gICAgICAgICAgICB2YXIgcHJvcCA9IHByb3BzW2ldO1xuICAgICAgICAgICAgaWYgKCAhY29udGFpbnMocHJvcCwgXCItXCIpICYmIG1TdHlsZVtwcm9wXSAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmVmaXhlZCA9PSAncGZ4JyA/IHByb3AgOiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLyo+PnRlc3Rwcm9wKi9cblxuICAgIC8vIFRPRE8gOjogYWRkIHRlc3RET01Qcm9wc1xuICAgIC8qKlxuICAgICAqIHRlc3RET01Qcm9wcyBpcyBhIGdlbmVyaWMgRE9NIHByb3BlcnR5IHRlc3Q7IGlmIGEgYnJvd3NlciBzdXBwb3J0c1xuICAgICAqICAgYSBjZXJ0YWluIHByb3BlcnR5LCBpdCB3b24ndCByZXR1cm4gdW5kZWZpbmVkIGZvciBpdC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0ZXN0RE9NUHJvcHMoIHByb3BzLCBvYmosIGVsZW0gKSB7XG4gICAgICAgIGZvciAoIHZhciBpIGluIHByb3BzICkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBvYmpbcHJvcHNbaV1dO1xuICAgICAgICAgICAgaWYgKCBpdGVtICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB0aGUgcHJvcGVydHkgbmFtZSBhcyBhIHN0cmluZ1xuICAgICAgICAgICAgICAgIGlmIChlbGVtID09PSBmYWxzZSkgcmV0dXJuIHByb3BzW2ldO1xuXG4gICAgICAgICAgICAgICAgLy8gbGV0J3MgYmluZCBhIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgaWYgKGlzKGl0ZW0sICdmdW5jdGlvbicpKXtcbiAgICAgICAgICAgICAgICAgIC8vIGRlZmF1bHQgdG8gYXV0b2JpbmQgdW5sZXNzIG92ZXJyaWRlXG4gICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5iaW5kKGVsZW0gfHwgb2JqKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gdGhlIHVuYm91bmQgZnVuY3Rpb24gb3Igb2JqIG9yIHZhbHVlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qPj50ZXN0YWxscHJvcHMqL1xuICAgIC8qKlxuICAgICAqIHRlc3RQcm9wc0FsbCB0ZXN0cyBhIGxpc3Qgb2YgRE9NIHByb3BlcnRpZXMgd2Ugd2FudCB0byBjaGVjayBhZ2FpbnN0LlxuICAgICAqICAgV2Ugc3BlY2lmeSBsaXRlcmFsbHkgQUxMIHBvc3NpYmxlIChrbm93biBhbmQvb3IgbGlrZWx5KSBwcm9wZXJ0aWVzIG9uXG4gICAgICogICB0aGUgZWxlbWVudCBpbmNsdWRpbmcgdGhlIG5vbi12ZW5kb3IgcHJlZml4ZWQgb25lLCBmb3IgZm9yd2FyZC1cbiAgICAgKiAgIGNvbXBhdGliaWxpdHkuXG4gICAgICovXG4gICAgZnVuY3Rpb24gdGVzdFByb3BzQWxsKCBwcm9wLCBwcmVmaXhlZCwgZWxlbSApIHtcblxuICAgICAgICB2YXIgdWNQcm9wICA9IHByb3AuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wLnNsaWNlKDEpLFxuICAgICAgICAgICAgcHJvcHMgICA9IChwcm9wICsgJyAnICsgY3Nzb21QcmVmaXhlcy5qb2luKHVjUHJvcCArICcgJykgKyB1Y1Byb3ApLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgLy8gZGlkIHRoZXkgY2FsbCAucHJlZml4ZWQoJ2JveFNpemluZycpIG9yIGFyZSB3ZSBqdXN0IHRlc3RpbmcgYSBwcm9wP1xuICAgICAgICBpZihpcyhwcmVmaXhlZCwgXCJzdHJpbmdcIikgfHwgaXMocHJlZml4ZWQsIFwidW5kZWZpbmVkXCIpKSB7XG4gICAgICAgICAgcmV0dXJuIHRlc3RQcm9wcyhwcm9wcywgcHJlZml4ZWQpO1xuXG4gICAgICAgIC8vIG90aGVyd2lzZSwgdGhleSBjYWxsZWQgLnByZWZpeGVkKCdyZXF1ZXN0QW5pbWF0aW9uRnJhbWUnLCB3aW5kb3dbLCBlbGVtXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wcyA9IChwcm9wICsgJyAnICsgKGRvbVByZWZpeGVzKS5qb2luKHVjUHJvcCArICcgJykgKyB1Y1Byb3ApLnNwbGl0KCcgJyk7XG4gICAgICAgICAgcmV0dXJuIHRlc3RET01Qcm9wcyhwcm9wcywgcHJlZml4ZWQsIGVsZW0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qPj50ZXN0YWxscHJvcHMqL1xuXG5cbiAgICAvKipcbiAgICAgKiBUZXN0c1xuICAgICAqIC0tLS0tXG4gICAgICovXG5cbiAgICAvLyBUaGUgKm5ldyogZmxleGJveFxuICAgIC8vIGRldi53My5vcmcvY3Nzd2cvY3NzMy1mbGV4Ym94XG5cbiAgICB0ZXN0c1snZmxleGJveCddID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGVzdFByb3BzQWxsKCdmbGV4V3JhcCcpO1xuICAgIH07XG5cbiAgICAvLyBUaGUgKm9sZCogZmxleGJveFxuICAgIC8vIHd3dy53My5vcmcvVFIvMjAwOS9XRC1jc3MzLWZsZXhib3gtMjAwOTA3MjMvXG5cbiAgICB0ZXN0c1snZmxleGJveGxlZ2FjeSddID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0ZXN0UHJvcHNBbGwoJ2JveERpcmVjdGlvbicpO1xuICAgIH07XG5cbiAgICAvLyBPbiB0aGUgUzYwIGFuZCBCQiBTdG9ybSwgZ2V0Q29udGV4dCBleGlzdHMsIGJ1dCBhbHdheXMgcmV0dXJucyB1bmRlZmluZWRcbiAgICAvLyBzbyB3ZSBhY3R1YWxseSBoYXZlIHRvIGNhbGwgZ2V0Q29udGV4dCgpIHRvIHZlcmlmeVxuICAgIC8vIGdpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9pc3N1ZXMvaXNzdWUvOTcvXG5cbiAgICB0ZXN0c1snY2FudmFzJ10gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgcmV0dXJuICEhKGVsZW0uZ2V0Q29udGV4dCAmJiBlbGVtLmdldENvbnRleHQoJzJkJykpO1xuICAgIH07XG5cbiAgICB0ZXN0c1snY2FudmFzdGV4dCddID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAhIShNb2Rlcm5penJbJ2NhbnZhcyddICYmIGlzKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLmdldENvbnRleHQoJzJkJykuZmlsbFRleHQsICdmdW5jdGlvbicpKTtcbiAgICB9O1xuXG4gICAgLy8gd2Viay5pdC83MDExNyBpcyB0cmFja2luZyBhIGxlZ2l0IFdlYkdMIGZlYXR1cmUgZGV0ZWN0IHByb3Bvc2FsXG5cbiAgICAvLyBXZSBkbyBhIHNvZnQgZGV0ZWN0IHdoaWNoIG1heSBmYWxzZSBwb3NpdGl2ZSBpbiBvcmRlciB0byBhdm9pZFxuICAgIC8vIGFuIGV4cGVuc2l2ZSBjb250ZXh0IGNyZWF0aW9uOiBidWd6aWwubGEvNzMyNDQxXG5cbiAgICB0ZXN0c1snd2ViZ2wnXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gISF3aW5kb3cuV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xuICAgIH07XG5cbiAgICAvKlxuICAgICAqIFRoZSBNb2Rlcm5penIudG91Y2ggdGVzdCBvbmx5IGluZGljYXRlcyBpZiB0aGUgYnJvd3NlciBzdXBwb3J0c1xuICAgICAqICAgIHRvdWNoIGV2ZW50cywgd2hpY2ggZG9lcyBub3QgbmVjZXNzYXJpbHkgcmVmbGVjdCBhIHRvdWNoc2NyZWVuXG4gICAgICogICAgZGV2aWNlLCBhcyBldmlkZW5jZWQgYnkgdGFibGV0cyBydW5uaW5nIFdpbmRvd3MgNyBvciwgYWxhcyxcbiAgICAgKiAgICB0aGUgUGFsbSBQcmUgLyBXZWJPUyAodG91Y2gpIHBob25lcy5cbiAgICAgKlxuICAgICAqIEFkZGl0aW9uYWxseSwgQ2hyb21lIChkZXNrdG9wKSB1c2VkIHRvIGxpZSBhYm91dCBpdHMgc3VwcG9ydCBvbiB0aGlzLFxuICAgICAqICAgIGJ1dCB0aGF0IGhhcyBzaW5jZSBiZWVuIHJlY3RpZmllZDogY3JidWcuY29tLzM2NDE1XG4gICAgICpcbiAgICAgKiBXZSBhbHNvIHRlc3QgZm9yIEZpcmVmb3ggNCBNdWx0aXRvdWNoIFN1cHBvcnQuXG4gICAgICpcbiAgICAgKiBGb3IgbW9yZSBpbmZvLCBzZWU6IG1vZGVybml6ci5naXRodWIuY29tL01vZGVybml6ci90b3VjaC5odG1sXG4gICAgICovXG5cbiAgICB0ZXN0c1sndG91Y2gnXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYm9vbDtcblxuICAgICAgICBpZigoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB8fCB3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2gpIHtcbiAgICAgICAgICBib29sID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbmplY3RFbGVtZW50V2l0aFN0eWxlcyhbJ0BtZWRpYSAoJyxwcmVmaXhlcy5qb2luKCd0b3VjaC1lbmFibGVkKSwoJyksbW9kLCcpJywneyNtb2Rlcm5penJ7dG9wOjlweDtwb3NpdGlvbjphYnNvbHV0ZX19J10uam9pbignJyksIGZ1bmN0aW9uKCBub2RlICkge1xuICAgICAgICAgICAgYm9vbCA9IG5vZGUub2Zmc2V0VG9wID09PSA5O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJvb2w7XG4gICAgfTtcblxuXG4gICAgLy8gZ2VvbG9jYXRpb24gaXMgb2Z0ZW4gY29uc2lkZXJlZCBhIHRyaXZpYWwgZmVhdHVyZSBkZXRlY3QuLi5cbiAgICAvLyBUdXJucyBvdXQsIGl0J3MgcXVpdGUgdHJpY2t5IHRvIGdldCByaWdodDpcbiAgICAvL1xuICAgIC8vIFVzaW5nICEhbmF2aWdhdG9yLmdlb2xvY2F0aW9uIGRvZXMgdHdvIHRoaW5ncyB3ZSBkb24ndCB3YW50LiBJdDpcbiAgICAvLyAgIDEuIExlYWtzIG1lbW9yeSBpbiBJRTk6IGdpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9pc3N1ZXMvNTEzXG4gICAgLy8gICAyLiBEaXNhYmxlcyBwYWdlIGNhY2hpbmcgaW4gV2ViS2l0OiB3ZWJrLml0LzQzOTU2XG4gICAgLy9cbiAgICAvLyBNZWFud2hpbGUsIGluIEZpcmVmb3ggPCA4LCBhbiBhYm91dDpjb25maWcgc2V0dGluZyBjb3VsZCBleHBvc2VcbiAgICAvLyBhIGZhbHNlIHBvc2l0aXZlIHRoYXQgd291bGQgdGhyb3cgYW4gZXhjZXB0aW9uOiBidWd6aWwubGEvNjg4MTU4XG5cbiAgICB0ZXN0c1snZ2VvbG9jYXRpb24nXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gJ2dlb2xvY2F0aW9uJyBpbiBuYXZpZ2F0b3I7XG4gICAgfTtcblxuXG4gICAgdGVzdHNbJ3Bvc3RtZXNzYWdlJ10gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAhIXdpbmRvdy5wb3N0TWVzc2FnZTtcbiAgICB9O1xuXG5cbiAgICAvLyBDaHJvbWUgaW5jb2duaXRvIG1vZGUgdXNlZCB0byB0aHJvdyBhbiBleGNlcHRpb24gd2hlbiB1c2luZyBvcGVuRGF0YWJhc2VcbiAgICAvLyBJdCBkb2Vzbid0IGFueW1vcmUuXG4gICAgdGVzdHNbJ3dlYnNxbGRhdGFiYXNlJ10gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAhIXdpbmRvdy5vcGVuRGF0YWJhc2U7XG4gICAgfTtcblxuICAgIC8vIFZlbmRvcnMgaGFkIGluY29uc2lzdGVudCBwcmVmaXhpbmcgd2l0aCB0aGUgZXhwZXJpbWVudGFsIEluZGV4ZWQgREI6XG4gICAgLy8gLSBXZWJraXQncyBpbXBsZW1lbnRhdGlvbiBpcyBhY2Nlc3NpYmxlIHRocm91Z2ggd2Via2l0SW5kZXhlZERCXG4gICAgLy8gLSBGaXJlZm94IHNoaXBwZWQgbW96X2luZGV4ZWREQiBiZWZvcmUgRkY0YjksIGJ1dCBzaW5jZSB0aGVuIGhhcyBiZWVuIG1vekluZGV4ZWREQlxuICAgIC8vIEZvciBzcGVlZCwgd2UgZG9uJ3QgdGVzdCB0aGUgbGVnYWN5IChhbmQgYmV0YS1vbmx5KSBpbmRleGVkREJcbiAgICB0ZXN0c1snaW5kZXhlZERCJ10gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAhIXRlc3RQcm9wc0FsbChcImluZGV4ZWREQlwiLCB3aW5kb3cpO1xuICAgIH07XG5cbiAgICAvLyBkb2N1bWVudE1vZGUgbG9naWMgZnJvbSBZVUkgdG8gZmlsdGVyIG91dCBJRTggQ29tcGF0IE1vZGVcbiAgICAvLyAgIHdoaWNoIGZhbHNlIHBvc2l0aXZlcy5cbiAgICB0ZXN0c1snaGFzaGNoYW5nZSddID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaXNFdmVudFN1cHBvcnRlZCgnaGFzaGNoYW5nZScsIHdpbmRvdykgJiYgKGRvY3VtZW50LmRvY3VtZW50TW9kZSA9PT0gdW5kZWZpbmVkIHx8IGRvY3VtZW50LmRvY3VtZW50TW9kZSA+IDcpO1xuICAgIH07XG5cbiAgICAvLyBQZXIgMS42OlxuICAgIC8vIFRoaXMgdXNlZCB0byBiZSBNb2Rlcm5penIuaGlzdG9yeW1hbmFnZW1lbnQgYnV0IHRoZSBsb25nZXJcbiAgICAvLyBuYW1lIGhhcyBiZWVuIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgYSBzaG9ydGVyIGFuZCBwcm9wZXJ0eS1tYXRjaGluZyBvbmUuXG4gICAgLy8gVGhlIG9sZCBBUEkgaXMgc3RpbGwgYXZhaWxhYmxlIGluIDEuNiwgYnV0IGFzIG9mIDIuMCB3aWxsIHRocm93IGEgd2FybmluZyxcbiAgICAvLyBhbmQgaW4gdGhlIGZpcnN0IHJlbGVhc2UgdGhlcmVhZnRlciBkaXNhcHBlYXIgZW50aXJlbHkuXG4gICAgdGVzdHNbJ2hpc3RvcnknXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICEhKHdpbmRvdy5oaXN0b3J5ICYmIGhpc3RvcnkucHVzaFN0YXRlKTtcbiAgICB9O1xuXG4gICAgdGVzdHNbJ2RyYWdhbmRkcm9wJ10gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByZXR1cm4gKCdkcmFnZ2FibGUnIGluIGRpdikgfHwgKCdvbmRyYWdzdGFydCcgaW4gZGl2ICYmICdvbmRyb3AnIGluIGRpdik7XG4gICAgfTtcblxuICAgIC8vIEZGMy42IHdhcyBFT0wnZWQgb24gNC8yNC8xMiwgYnV0IHRoZSBFU1IgdmVyc2lvbiBvZiBGRjEwXG4gICAgLy8gd2lsbCBiZSBzdXBwb3J0ZWQgdW50aWwgRkYxOSAoMi8xMi8xMyksIGF0IHdoaWNoIHRpbWUsIEVTUiBiZWNvbWVzIEZGMTcuXG4gICAgLy8gRkYxMCBzdGlsbCB1c2VzIHByZWZpeGVzLCBzbyBjaGVjayBmb3IgaXQgdW50aWwgdGhlbi5cbiAgICAvLyBmb3IgbW9yZSBFU1IgaW5mbywgc2VlOiBtb3ppbGxhLm9yZy9lbi1VUy9maXJlZm94L29yZ2FuaXphdGlvbnMvZmFxL1xuICAgIHRlc3RzWyd3ZWJzb2NrZXRzJ10gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICdXZWJTb2NrZXQnIGluIHdpbmRvdyB8fCAnTW96V2ViU29ja2V0JyBpbiB3aW5kb3c7XG4gICAgfTtcblxuXG4gICAgLy8gY3NzLXRyaWNrcy5jb20vcmdiYS1icm93c2VyLXN1cHBvcnQvXG4gICAgdGVzdHNbJ3JnYmEnXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBTZXQgYW4gcmdiYSgpIGNvbG9yIGFuZCBjaGVjayB0aGUgcmV0dXJuZWQgdmFsdWVcblxuICAgICAgICBzZXRDc3MoJ2JhY2tncm91bmQtY29sb3I6cmdiYSgxNTAsMjU1LDE1MCwuNSknKTtcblxuICAgICAgICByZXR1cm4gY29udGFpbnMobVN0eWxlLmJhY2tncm91bmRDb2xvciwgJ3JnYmEnKTtcbiAgICB9O1xuXG4gICAgdGVzdHNbJ2hzbGEnXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBTYW1lIGFzIHJnYmEoKSwgaW4gZmFjdCwgYnJvd3NlcnMgcmUtbWFwIGhzbGEoKSB0byByZ2JhKCkgaW50ZXJuYWxseSxcbiAgICAgICAgLy8gICBleGNlcHQgSUU5IHdobyByZXRhaW5zIGl0IGFzIGhzbGFcblxuICAgICAgICBzZXRDc3MoJ2JhY2tncm91bmQtY29sb3I6aHNsYSgxMjAsNDAlLDEwMCUsLjUpJyk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5zKG1TdHlsZS5iYWNrZ3JvdW5kQ29sb3IsICdyZ2JhJykgfHwgY29udGFpbnMobVN0eWxlLmJhY2tncm91bmRDb2xvciwgJ2hzbGEnKTtcbiAgICB9O1xuXG4gICAgdGVzdHNbJ211bHRpcGxlYmdzJ10gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gU2V0dGluZyBtdWx0aXBsZSBpbWFnZXMgQU5EIGEgY29sb3Igb24gdGhlIGJhY2tncm91bmQgc2hvcnRoYW5kIHByb3BlcnR5XG4gICAgICAgIC8vICBhbmQgdGhlbiBxdWVyeWluZyB0aGUgc3R5bGUuYmFja2dyb3VuZCBwcm9wZXJ0eSB2YWx1ZSBmb3IgdGhlIG51bWJlciBvZlxuICAgICAgICAvLyAgb2NjdXJyZW5jZXMgb2YgXCJ1cmwoXCIgaXMgYSByZWxpYWJsZSBtZXRob2QgZm9yIGRldGVjdGluZyBBQ1RVQUwgc3VwcG9ydCBmb3IgdGhpcyFcblxuICAgICAgICBzZXRDc3MoJ2JhY2tncm91bmQ6dXJsKGh0dHBzOi8vKSx1cmwoaHR0cHM6Ly8pLHJlZCB1cmwoaHR0cHM6Ly8pJyk7XG5cbiAgICAgICAgLy8gSWYgdGhlIFVBIHN1cHBvcnRzIG11bHRpcGxlIGJhY2tncm91bmRzLCB0aGVyZSBzaG91bGQgYmUgdGhyZWUgb2NjdXJyZW5jZXNcbiAgICAgICAgLy8gICBvZiB0aGUgc3RyaW5nIFwidXJsKFwiIGluIHRoZSByZXR1cm4gdmFsdWUgZm9yIGVsZW1TdHlsZS5iYWNrZ3JvdW5kXG5cbiAgICAgICAgcmV0dXJuICgvKHVybFxccypcXCguKj8pezN9LykudGVzdChtU3R5bGUuYmFja2dyb3VuZCk7XG4gICAgfTtcblxuXG5cbiAgICAvLyB0aGlzIHdpbGwgZmFsc2UgcG9zaXRpdmUgaW4gT3BlcmEgTWluaVxuICAgIC8vICAgZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2lzc3Vlcy8zOTZcblxuICAgIHRlc3RzWydiYWNrZ3JvdW5kc2l6ZSddID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0ZXN0UHJvcHNBbGwoJ2JhY2tncm91bmRTaXplJyk7XG4gICAgfTtcblxuICAgIHRlc3RzWydib3JkZXJpbWFnZSddID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0ZXN0UHJvcHNBbGwoJ2JvcmRlckltYWdlJyk7XG4gICAgfTtcblxuXG4gICAgLy8gU3VwZXIgY29tcHJlaGVuc2l2ZSB0YWJsZSBhYm91dCBhbGwgdGhlIHVuaXF1ZSBpbXBsZW1lbnRhdGlvbnMgb2ZcbiAgICAvLyBib3JkZXItcmFkaXVzOiBtdWRkbGVkcmFtYmxpbmdzLmNvbS90YWJsZS1vZi1jc3MzLWJvcmRlci1yYWRpdXMtY29tcGxpYW5jZVxuXG4gICAgdGVzdHNbJ2JvcmRlcnJhZGl1cyddID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0ZXN0UHJvcHNBbGwoJ2JvcmRlclJhZGl1cycpO1xuICAgIH07XG5cbiAgICAvLyBXZWJPUyB1bmZvcnR1bmF0ZWx5IGZhbHNlIHBvc2l0aXZlcyBvbiB0aGlzIHRlc3QuXG4gICAgdGVzdHNbJ2JveHNoYWRvdyddID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0ZXN0UHJvcHNBbGwoJ2JveFNoYWRvdycpO1xuICAgIH07XG5cbiAgICAvLyBGRjMuMCB3aWxsIGZhbHNlIHBvc2l0aXZlIG9uIHRoaXMgdGVzdFxuICAgIHRlc3RzWyd0ZXh0c2hhZG93J10gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLnN0eWxlLnRleHRTaGFkb3cgPT09ICcnO1xuICAgIH07XG5cblxuICAgIHRlc3RzWydvcGFjaXR5J10gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gQnJvd3NlcnMgdGhhdCBhY3R1YWxseSBoYXZlIENTUyBPcGFjaXR5IGltcGxlbWVudGVkIGhhdmUgZG9uZSBzb1xuICAgICAgICAvLyAgYWNjb3JkaW5nIHRvIHNwZWMsIHdoaWNoIG1lYW5zIHRoZWlyIHJldHVybiB2YWx1ZXMgYXJlIHdpdGhpbiB0aGVcbiAgICAgICAgLy8gIHJhbmdlIG9mIFswLjAsMS4wXSAtIGluY2x1ZGluZyB0aGUgbGVhZGluZyB6ZXJvLlxuXG4gICAgICAgIHNldENzc0FsbCgnb3BhY2l0eTouNTUnKTtcblxuICAgICAgICAvLyBUaGUgbm9uLWxpdGVyYWwgLiBpbiB0aGlzIHJlZ2V4IGlzIGludGVudGlvbmFsOlxuICAgICAgICAvLyAgIEdlcm1hbiBDaHJvbWUgcmV0dXJucyB0aGlzIHZhbHVlIGFzIDAsNTVcbiAgICAgICAgLy8gZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2lzc3Vlcy8jaXNzdWUvNTkvY29tbWVudC81MTY2MzJcbiAgICAgICAgcmV0dXJuICgvXjAuNTUkLykudGVzdChtU3R5bGUub3BhY2l0eSk7XG4gICAgfTtcblxuXG4gICAgLy8gTm90ZSwgQW5kcm9pZCA8IDQgd2lsbCBwYXNzIHRoaXMgdGVzdCwgYnV0IGNhbiBvbmx5IGFuaW1hdGVcbiAgICAvLyAgIGEgc2luZ2xlIHByb3BlcnR5IGF0IGEgdGltZVxuICAgIC8vICAgZ29vLmdsL3YzVjRHcFxuICAgIHRlc3RzWydjc3NhbmltYXRpb25zJ10gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRlc3RQcm9wc0FsbCgnYW5pbWF0aW9uTmFtZScpO1xuICAgIH07XG5cblxuICAgIHRlc3RzWydjc3Njb2x1bW5zJ10gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRlc3RQcm9wc0FsbCgnY29sdW1uQ291bnQnKTtcbiAgICB9O1xuXG5cbiAgICB0ZXN0c1snY3NzZ3JhZGllbnRzJ10gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZvciBDU1MgR3JhZGllbnRzIHN5bnRheCwgcGxlYXNlIHNlZTpcbiAgICAgICAgICogd2Via2l0Lm9yZy9ibG9nLzE3NS9pbnRyb2R1Y2luZy1jc3MtZ3JhZGllbnRzL1xuICAgICAgICAgKiBkZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vQ1NTLy1tb3otbGluZWFyLWdyYWRpZW50XG4gICAgICAgICAqIGRldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9DU1MvLW1vei1yYWRpYWwtZ3JhZGllbnRcbiAgICAgICAgICogZGV2LnczLm9yZy9jc3N3Zy9jc3MzLWltYWdlcy8jZ3JhZGllbnRzLVxuICAgICAgICAgKi9cblxuICAgICAgICB2YXIgc3RyMSA9ICdiYWNrZ3JvdW5kLWltYWdlOicsXG4gICAgICAgICAgICBzdHIyID0gJ2dyYWRpZW50KGxpbmVhcixsZWZ0IHRvcCxyaWdodCBib3R0b20sZnJvbSgjOWY5KSx0byh3aGl0ZSkpOycsXG4gICAgICAgICAgICBzdHIzID0gJ2xpbmVhci1ncmFkaWVudChsZWZ0IHRvcCwjOWY5LCB3aGl0ZSk7JztcblxuICAgICAgICBzZXRDc3MoXG4gICAgICAgICAgICAgLy8gbGVnYWN5IHdlYmtpdCBzeW50YXggKEZJWE1FOiByZW1vdmUgd2hlbiBzeW50YXggbm90IGluIHVzZSBhbnltb3JlKVxuICAgICAgICAgICAgICAoc3RyMSArICctd2Via2l0LSAnLnNwbGl0KCcgJykuam9pbihzdHIyICsgc3RyMSkgK1xuICAgICAgICAgICAgIC8vIHN0YW5kYXJkIHN5bnRheCAgICAgICAgICAgICAvLyB0cmFpbGluZyAnYmFja2dyb3VuZC1pbWFnZTonXG4gICAgICAgICAgICAgIHByZWZpeGVzLmpvaW4oc3RyMyArIHN0cjEpKS5zbGljZSgwLCAtc3RyMS5sZW5ndGgpXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5zKG1TdHlsZS5iYWNrZ3JvdW5kSW1hZ2UsICdncmFkaWVudCcpO1xuICAgIH07XG5cblxuICAgIHRlc3RzWydjc3NyZWZsZWN0aW9ucyddID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0ZXN0UHJvcHNBbGwoJ2JveFJlZmxlY3QnKTtcbiAgICB9O1xuXG5cbiAgICB0ZXN0c1snY3NzdHJhbnNmb3JtcyddID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAhIXRlc3RQcm9wc0FsbCgndHJhbnNmb3JtJyk7XG4gICAgfTtcblxuXG4gICAgdGVzdHNbJ2Nzc3RyYW5zZm9ybXMzZCddID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIHJldCA9ICEhdGVzdFByb3BzQWxsKCdwZXJzcGVjdGl2ZScpO1xuXG4gICAgICAgIC8vIFdlYmtpdCdzIDNEIHRyYW5zZm9ybXMgYXJlIHBhc3NlZCBvZmYgdG8gdGhlIGJyb3dzZXIncyBvd24gZ3JhcGhpY3MgcmVuZGVyZXIuXG4gICAgICAgIC8vICAgSXQgd29ya3MgZmluZSBpbiBTYWZhcmkgb24gTGVvcGFyZCBhbmQgU25vdyBMZW9wYXJkLCBidXQgbm90IGluIENocm9tZSBpblxuICAgICAgICAvLyAgIHNvbWUgY29uZGl0aW9ucy4gQXMgYSByZXN1bHQsIFdlYmtpdCB0eXBpY2FsbHkgcmVjb2duaXplcyB0aGUgc3ludGF4IGJ1dFxuICAgICAgICAvLyAgIHdpbGwgc29tZXRpbWVzIHRocm93IGEgZmFsc2UgcG9zaXRpdmUsIHRodXMgd2UgbXVzdCBkbyBhIG1vcmUgdGhvcm91Z2ggY2hlY2s6XG4gICAgICAgIGlmICggcmV0ICYmICd3ZWJraXRQZXJzcGVjdGl2ZScgaW4gZG9jRWxlbWVudC5zdHlsZSApIHtcblxuICAgICAgICAgIC8vIFdlYmtpdCBhbGxvd3MgdGhpcyBtZWRpYSBxdWVyeSB0byBzdWNjZWVkIG9ubHkgaWYgdGhlIGZlYXR1cmUgaXMgZW5hYmxlZC5cbiAgICAgICAgICAvLyBgQG1lZGlhICh0cmFuc2Zvcm0tM2QpLCgtd2Via2l0LXRyYW5zZm9ybS0zZCl7IC4uLiB9YFxuICAgICAgICAgIGluamVjdEVsZW1lbnRXaXRoU3R5bGVzKCdAbWVkaWEgKHRyYW5zZm9ybS0zZCksKC13ZWJraXQtdHJhbnNmb3JtLTNkKXsjbW9kZXJuaXpye2xlZnQ6OXB4O3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDozcHg7fX0nLCBmdW5jdGlvbiggbm9kZSwgcnVsZSApIHtcbiAgICAgICAgICAgIHJldCA9IG5vZGUub2Zmc2V0TGVmdCA9PT0gOSAmJiBub2RlLm9mZnNldEhlaWdodCA9PT0gMztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG5cblxuICAgIHRlc3RzWydjc3N0cmFuc2l0aW9ucyddID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0ZXN0UHJvcHNBbGwoJ3RyYW5zaXRpb24nKTtcbiAgICB9O1xuXG5cbiAgICAvKj4+Zm9udGZhY2UqL1xuICAgIC8vIEBmb250LWZhY2UgZGV0ZWN0aW9uIHJvdXRpbmUgYnkgRGllZ28gUGVyaW5pXG4gICAgLy8gamF2YXNjcmlwdC5ud2JveC5jb20vQ1NTU3VwcG9ydC9cblxuICAgIC8vIGZhbHNlIHBvc2l0aXZlczpcbiAgICAvLyAgIFdlYk9TIGdpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9pc3N1ZXMvMzQyXG4gICAgLy8gICBXUDcgICBnaXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvaXNzdWVzLzUzOFxuICAgIHRlc3RzWydmb250ZmFjZSddID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBib29sO1xuXG4gICAgICAgIGluamVjdEVsZW1lbnRXaXRoU3R5bGVzKCdAZm9udC1mYWNlIHtmb250LWZhbWlseTpcImZvbnRcIjtzcmM6dXJsKFwiaHR0cHM6Ly9cIil9JywgZnVuY3Rpb24oIG5vZGUsIHJ1bGUgKSB7XG4gICAgICAgICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Ntb2Rlcm5penInKSxcbiAgICAgICAgICAgICAgc2hlZXQgPSBzdHlsZS5zaGVldCB8fCBzdHlsZS5zdHlsZVNoZWV0LFxuICAgICAgICAgICAgICBjc3NUZXh0ID0gc2hlZXQgPyAoc2hlZXQuY3NzUnVsZXMgJiYgc2hlZXQuY3NzUnVsZXNbMF0gPyBzaGVldC5jc3NSdWxlc1swXS5jc3NUZXh0IDogc2hlZXQuY3NzVGV4dCB8fCAnJykgOiAnJztcblxuICAgICAgICAgIGJvb2wgPSAvc3JjL2kudGVzdChjc3NUZXh0KSAmJiBjc3NUZXh0LmluZGV4T2YocnVsZS5zcGxpdCgnICcpWzBdKSA9PT0gMDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGJvb2w7XG4gICAgfTtcbiAgICAvKj4+Zm9udGZhY2UqL1xuXG4gICAgLy8gQ1NTIGdlbmVyYXRlZCBjb250ZW50IGRldGVjdGlvblxuICAgIHRlc3RzWydnZW5lcmF0ZWRjb250ZW50J10gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGJvb2w7XG5cbiAgICAgICAgaW5qZWN0RWxlbWVudFdpdGhTdHlsZXMoWycjJyxtb2QsJ3tmb250OjAvMCBhfSMnLG1vZCwnOmFmdGVye2NvbnRlbnQ6XCInLHNtaWxlLCdcIjt2aXNpYmlsaXR5OmhpZGRlbjtmb250OjNweC8xIGF9J10uam9pbignJyksIGZ1bmN0aW9uKCBub2RlICkge1xuICAgICAgICAgIGJvb2wgPSBub2RlLm9mZnNldEhlaWdodCA+PSAzO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYm9vbDtcbiAgICB9O1xuXG5cblxuICAgIC8vIFRoZXNlIHRlc3RzIGV2YWx1YXRlIHN1cHBvcnQgb2YgdGhlIHZpZGVvL2F1ZGlvIGVsZW1lbnRzLCBhcyB3ZWxsIGFzXG4gICAgLy8gdGVzdGluZyB3aGF0IHR5cGVzIG9mIGNvbnRlbnQgdGhleSBzdXBwb3J0LlxuICAgIC8vXG4gICAgLy8gV2UncmUgdXNpbmcgdGhlIEJvb2xlYW4gY29uc3RydWN0b3IgaGVyZSwgc28gdGhhdCB3ZSBjYW4gZXh0ZW5kIHRoZSB2YWx1ZVxuICAgIC8vIGUuZy4gIE1vZGVybml6ci52aWRlbyAgICAgLy8gdHJ1ZVxuICAgIC8vICAgICAgIE1vZGVybml6ci52aWRlby5vZ2cgLy8gJ3Byb2JhYmx5J1xuICAgIC8vXG4gICAgLy8gQ29kZWMgdmFsdWVzIGZyb20gOiBnaXRodWIuY29tL05pZWxzTGVlbmhlZXIvaHRtbDV0ZXN0L2Jsb2IvOTEwNmE4L2luZGV4Lmh0bWwjTDg0NVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGh4IHRvIE5pZWxzTGVlbmhlZXIgYW5kIHpjb3JwYW5cblxuICAgIC8vIE5vdGU6IGluIHNvbWUgb2xkZXIgYnJvd3NlcnMsIFwibm9cIiB3YXMgYSByZXR1cm4gdmFsdWUgaW5zdGVhZCBvZiBlbXB0eSBzdHJpbmcuXG4gICAgLy8gICBJdCB3YXMgbGl2ZSBpbiBGRjMuNS4wIGFuZCAzLjUuMSwgYnV0IGZpeGVkIGluIDMuNS4yXG4gICAgLy8gICBJdCB3YXMgYWxzbyBsaXZlIGluIFNhZmFyaSA0LjAuMCAtIDQuMC40LCBidXQgZml4ZWQgaW4gNC4wLjVcblxuICAgIHRlc3RzWyd2aWRlbyddID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKSxcbiAgICAgICAgICAgIGJvb2wgPSBmYWxzZTtcblxuICAgICAgICAvLyBJRTkgUnVubmluZyBvbiBXaW5kb3dzIFNlcnZlciBTS1UgY2FuIGNhdXNlIGFuIGV4Y2VwdGlvbiB0byBiZSB0aHJvd24sIGJ1ZyAjMjI0XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIGJvb2wgPSAhIWVsZW0uY2FuUGxheVR5cGUgKSB7XG4gICAgICAgICAgICAgICAgYm9vbCAgICAgID0gbmV3IEJvb2xlYW4oYm9vbCk7XG4gICAgICAgICAgICAgICAgYm9vbC5vZ2cgID0gZWxlbS5jYW5QbGF5VHlwZSgndmlkZW8vb2dnOyBjb2RlY3M9XCJ0aGVvcmFcIicpICAgICAgLnJlcGxhY2UoL15ubyQvLCcnKTtcblxuICAgICAgICAgICAgICAgIC8vIFdpdGhvdXQgUXVpY2tUaW1lLCB0aGlzIHZhbHVlIHdpbGwgYmUgYHVuZGVmaW5lZGAuIGdpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9pc3N1ZXMvNTQ2XG4gICAgICAgICAgICAgICAgYm9vbC5oMjY0ID0gZWxlbS5jYW5QbGF5VHlwZSgndmlkZW8vbXA0OyBjb2RlY3M9XCJhdmMxLjQyRTAxRVwiJykgLnJlcGxhY2UoL15ubyQvLCcnKTtcblxuICAgICAgICAgICAgICAgIGJvb2wud2VibSA9IGVsZW0uY2FuUGxheVR5cGUoJ3ZpZGVvL3dlYm07IGNvZGVjcz1cInZwOCwgdm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLywnJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBjYXRjaChlKSB7IH1cblxuICAgICAgICByZXR1cm4gYm9vbDtcbiAgICB9O1xuXG4gICAgdGVzdHNbJ2F1ZGlvJ10gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpLFxuICAgICAgICAgICAgYm9vbCA9IGZhbHNlO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIGJvb2wgPSAhIWVsZW0uY2FuUGxheVR5cGUgKSB7XG4gICAgICAgICAgICAgICAgYm9vbCAgICAgID0gbmV3IEJvb2xlYW4oYm9vbCk7XG4gICAgICAgICAgICAgICAgYm9vbC5vZ2cgID0gZWxlbS5jYW5QbGF5VHlwZSgnYXVkaW8vb2dnOyBjb2RlY3M9XCJ2b3JiaXNcIicpLnJlcGxhY2UoL15ubyQvLCcnKTtcbiAgICAgICAgICAgICAgICBib29sLm1wMyAgPSBlbGVtLmNhblBsYXlUeXBlKCdhdWRpby9tcGVnOycpICAgICAgICAgICAgICAgLnJlcGxhY2UoL15ubyQvLCcnKTtcblxuICAgICAgICAgICAgICAgIC8vIE1pbWV0eXBlcyBhY2NlcHRlZDpcbiAgICAgICAgICAgICAgICAvLyAgIGRldmVsb3Blci5tb3ppbGxhLm9yZy9Fbi9NZWRpYV9mb3JtYXRzX3N1cHBvcnRlZF9ieV90aGVfYXVkaW9fYW5kX3ZpZGVvX2VsZW1lbnRzXG4gICAgICAgICAgICAgICAgLy8gICBiaXQubHkvaXBob25lb3Njb2RlY3NcbiAgICAgICAgICAgICAgICBib29sLndhdiAgPSBlbGVtLmNhblBsYXlUeXBlKCdhdWRpby93YXY7IGNvZGVjcz1cIjFcIicpICAgICAucmVwbGFjZSgvXm5vJC8sJycpO1xuICAgICAgICAgICAgICAgIGJvb2wubTRhICA9ICggZWxlbS5jYW5QbGF5VHlwZSgnYXVkaW8veC1tNGE7JykgICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5jYW5QbGF5VHlwZSgnYXVkaW8vYWFjOycpKSAgICAgICAgICAgICAucmVwbGFjZSgvXm5vJC8sJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoKGUpIHsgfVxuXG4gICAgICAgIHJldHVybiBib29sO1xuICAgIH07XG5cblxuICAgIC8vIEluIEZGNCwgaWYgZGlzYWJsZWQsIHdpbmRvdy5sb2NhbFN0b3JhZ2Ugc2hvdWxkID09PSBudWxsLlxuXG4gICAgLy8gTm9ybWFsbHksIHdlIGNvdWxkIG5vdCB0ZXN0IHRoYXQgZGlyZWN0bHkgYW5kIG5lZWQgdG8gZG8gYVxuICAgIC8vICAgYCgnbG9jYWxTdG9yYWdlJyBpbiB3aW5kb3cpICYmIGAgdGVzdCBmaXJzdCBiZWNhdXNlIG90aGVyd2lzZSBGaXJlZm94IHdpbGxcbiAgICAvLyAgIHRocm93IGJ1Z3ppbC5sYS8zNjU3NzIgaWYgY29va2llcyBhcmUgZGlzYWJsZWRcblxuICAgIC8vIEFsc28gaW4gaU9TNSBQcml2YXRlIEJyb3dzaW5nIG1vZGUsIGF0dGVtcHRpbmcgdG8gdXNlIGxvY2FsU3RvcmFnZS5zZXRJdGVtXG4gICAgLy8gd2lsbCB0aHJvdyB0aGUgZXhjZXB0aW9uOlxuICAgIC8vICAgUVVPVEFfRVhDRUVERURfRVJSUk9SIERPTSBFeGNlcHRpb24gMjIuXG4gICAgLy8gUGVjdWxpYXJseSwgZ2V0SXRlbSBhbmQgcmVtb3ZlSXRlbSBjYWxscyBkbyBub3QgdGhyb3cuXG5cbiAgICAvLyBCZWNhdXNlIHdlIGFyZSBmb3JjZWQgdG8gdHJ5L2NhdGNoIHRoaXMsIHdlJ2xsIGdvIGFnZ3Jlc3NpdmUuXG5cbiAgICAvLyBKdXN0IEZXSVc6IElFOCBDb21wYXQgbW9kZSBzdXBwb3J0cyB0aGVzZSBmZWF0dXJlcyBjb21wbGV0ZWx5OlxuICAgIC8vICAgd3d3LnF1aXJrc21vZGUub3JnL2RvbS9odG1sNS5odG1sXG4gICAgLy8gQnV0IElFOCBkb2Vzbid0IHN1cHBvcnQgZWl0aGVyIHdpdGggbG9jYWwgZmlsZXNcblxuICAgIHRlc3RzWydsb2NhbHN0b3JhZ2UnXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obW9kLCBtb2QpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obW9kKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0ZXN0c1snc2Vzc2lvbnN0b3JhZ2UnXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShtb2QsIG1vZCk7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKG1vZCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICB0ZXN0c1snd2Vid29ya2VycyddID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAhIXdpbmRvdy5Xb3JrZXI7XG4gICAgfTtcblxuXG4gICAgdGVzdHNbJ2FwcGxpY2F0aW9uY2FjaGUnXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gISF3aW5kb3cuYXBwbGljYXRpb25DYWNoZTtcbiAgICB9O1xuXG5cbiAgICAvLyBUaGFua3MgdG8gRXJpayBEYWhsc3Ryb21cbiAgICB0ZXN0c1snc3ZnJ10gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICEhZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TICYmICEhZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLnN2ZywgJ3N2ZycpLmNyZWF0ZVNWR1JlY3Q7XG4gICAgfTtcblxuICAgIC8vIHNwZWNpZmljYWxseSBmb3IgU1ZHIGlubGluZSBpbiBIVE1MLCBub3Qgd2l0aGluIFhIVE1MXG4gICAgLy8gdGVzdCBwYWdlOiBwYXVsaXJpc2guY29tL2RlbW8vaW5saW5lLXN2Z1xuICAgIHRlc3RzWydpbmxpbmVzdmcnXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LmlubmVySFRNTCA9ICc8c3ZnLz4nO1xuICAgICAgcmV0dXJuIChkaXYuZmlyc3RDaGlsZCAmJiBkaXYuZmlyc3RDaGlsZC5uYW1lc3BhY2VVUkkpID09IG5zLnN2ZztcbiAgICB9O1xuXG4gICAgLy8gU1ZHIFNNSUwgYW5pbWF0aW9uXG4gICAgdGVzdHNbJ3NtaWwnXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gISFkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMgJiYgL1NWR0FuaW1hdGUvLnRlc3QodG9TdHJpbmcuY2FsbChkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMuc3ZnLCAnYW5pbWF0ZScpKSk7XG4gICAgfTtcblxuICAgIC8vIFRoaXMgdGVzdCBpcyBvbmx5IGZvciBjbGlwIHBhdGhzIGluIFNWRyBwcm9wZXIsIG5vdCBjbGlwIHBhdGhzIG9uIEhUTUwgY29udGVudFxuICAgIC8vIGRlbW86IHNydWZhY3VsdHkuc3J1LmVkdS9kYXZpZC5kYWlsZXkvc3ZnL25ld3N0dWZmL2NsaXBQYXRoNC5zdmdcblxuICAgIC8vIEhvd2V2ZXIgcmVhZCB0aGUgY29tbWVudHMgdG8gZGlnIGludG8gYXBwbHlpbmcgU1ZHIGNsaXBwYXRocyB0byBIVE1MIGNvbnRlbnQgaGVyZTpcbiAgICAvLyAgIGdpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9pc3N1ZXMvMjEzI2lzc3VlY29tbWVudC0xMTQ5NDkxXG4gICAgdGVzdHNbJ3N2Z2NsaXBwYXRocyddID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAhIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyAmJiAvU1ZHQ2xpcFBhdGgvLnRlc3QodG9TdHJpbmcuY2FsbChkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMuc3ZnLCAnY2xpcFBhdGgnKSkpO1xuICAgIH07XG5cbiAgICAvKj4+d2ViZm9ybXMqL1xuICAgIC8vIGlucHV0IGZlYXR1cmVzIGFuZCBpbnB1dCB0eXBlcyBnbyBkaXJlY3RseSBvbnRvIHRoZSByZXQgb2JqZWN0LCBieXBhc3NpbmcgdGhlIHRlc3RzIGxvb3AuXG4gICAgLy8gSG9sZCB0aGlzIGd1eSB0byBleGVjdXRlIGluIGEgbW9tZW50LlxuICAgIGZ1bmN0aW9uIHdlYmZvcm1zKCkge1xuICAgICAgICAvKj4+aW5wdXQqL1xuICAgICAgICAvLyBSdW4gdGhyb3VnaCBIVE1MNSdzIG5ldyBpbnB1dCBhdHRyaWJ1dGVzIHRvIHNlZSBpZiB0aGUgVUEgdW5kZXJzdGFuZHMgYW55LlxuICAgICAgICAvLyBXZSdyZSB1c2luZyBmIHdoaWNoIGlzIHRoZSA8aW5wdXQ+IGVsZW1lbnQgY3JlYXRlZCBlYXJseSBvblxuICAgICAgICAvLyBNaWtlIFRheWxyIGhhcyBjcmVhdGVkIGEgY29tcHJlaGVuc2l2ZSByZXNvdXJjZSBmb3IgdGVzdGluZyB0aGVzZSBhdHRyaWJ1dGVzXG4gICAgICAgIC8vICAgd2hlbiBhcHBsaWVkIHRvIGFsbCBpbnB1dCB0eXBlczpcbiAgICAgICAgLy8gICBtaWtldGF5bHIuY29tL2NvZGUvaW5wdXQtdHlwZS1hdHRyLmh0bWxcbiAgICAgICAgLy8gc3BlYzogd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS90aGUtaW5wdXQtZWxlbWVudC5odG1sI2lucHV0LXR5cGUtYXR0ci1zdW1tYXJ5XG5cbiAgICAgICAgLy8gT25seSBpbnB1dCBwbGFjZWhvbGRlciBpcyB0ZXN0ZWQgd2hpbGUgdGV4dGFyZWEncyBwbGFjZWhvbGRlciBpcyBub3QuXG4gICAgICAgIC8vIEN1cnJlbnRseSBTYWZhcmkgNCBhbmQgT3BlcmEgMTEgaGF2ZSBzdXBwb3J0IG9ubHkgZm9yIHRoZSBpbnB1dCBwbGFjZWhvbGRlclxuICAgICAgICAvLyBCb3RoIHRlc3RzIGFyZSBhdmFpbGFibGUgaW4gZmVhdHVyZS1kZXRlY3RzL2Zvcm1zLXBsYWNlaG9sZGVyLmpzXG4gICAgICAgIE1vZGVybml6clsnaW5wdXQnXSA9IChmdW5jdGlvbiggcHJvcHMgKSB7XG4gICAgICAgICAgICBmb3IgKCB2YXIgaSA9IDAsIGxlbiA9IHByb3BzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgICAgICAgICAgICAgIGF0dHJzWyBwcm9wc1tpXSBdID0gISEocHJvcHNbaV0gaW4gaW5wdXRFbGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhdHRycy5saXN0KXtcbiAgICAgICAgICAgICAgLy8gc2FmYXJpIGZhbHNlIHBvc2l0aXZlJ3Mgb24gZGF0YWxpc3Q6IHdlYmsuaXQvNzQyNTJcbiAgICAgICAgICAgICAgLy8gc2VlIGFsc28gZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2lzc3Vlcy8xNDZcbiAgICAgICAgICAgICAgYXR0cnMubGlzdCA9ICEhKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RhdGFsaXN0JykgJiYgd2luZG93LkhUTUxEYXRhTGlzdEVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGF0dHJzO1xuICAgICAgICB9KSgnYXV0b2NvbXBsZXRlIGF1dG9mb2N1cyBsaXN0IHBsYWNlaG9sZGVyIG1heCBtaW4gbXVsdGlwbGUgcGF0dGVybiByZXF1aXJlZCBzdGVwJy5zcGxpdCgnICcpKTtcbiAgICAgICAgLyo+PmlucHV0Ki9cblxuICAgICAgICAvKj4+aW5wdXR0eXBlcyovXG4gICAgICAgIC8vIFJ1biB0aHJvdWdoIEhUTUw1J3MgbmV3IGlucHV0IHR5cGVzIHRvIHNlZSBpZiB0aGUgVUEgdW5kZXJzdGFuZHMgYW55LlxuICAgICAgICAvLyAgIFRoaXMgaXMgcHV0IGJlaGluZCB0aGUgdGVzdHMgcnVubG9vcCBiZWNhdXNlIGl0IGRvZXNuJ3QgcmV0dXJuIGFcbiAgICAgICAgLy8gICB0cnVlL2ZhbHNlIGxpa2UgYWxsIHRoZSBvdGhlciB0ZXN0czsgaW5zdGVhZCwgaXQgcmV0dXJucyBhbiBvYmplY3RcbiAgICAgICAgLy8gICBjb250YWluaW5nIGVhY2ggaW5wdXQgdHlwZSB3aXRoIGl0cyBjb3JyZXNwb25kaW5nIHRydWUvZmFsc2UgdmFsdWVcblxuICAgICAgICAvLyBCaWcgdGhhbmtzIHRvIEBtaWtldGF5bHIgZm9yIHRoZSBodG1sNSBmb3JtcyBleHBlcnRpc2UuIG1pa2V0YXlsci5jb20vXG4gICAgICAgIE1vZGVybml6clsnaW5wdXR0eXBlcyddID0gKGZ1bmN0aW9uKHByb3BzKSB7XG5cbiAgICAgICAgICAgIGZvciAoIHZhciBpID0gMCwgYm9vbCwgaW5wdXRFbGVtVHlwZSwgZGVmYXVsdFZpZXcsIGxlbiA9IHByb3BzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuXG4gICAgICAgICAgICAgICAgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZSgndHlwZScsIGlucHV0RWxlbVR5cGUgPSBwcm9wc1tpXSk7XG4gICAgICAgICAgICAgICAgYm9vbCA9IGlucHV0RWxlbS50eXBlICE9PSAndGV4dCc7XG5cbiAgICAgICAgICAgICAgICAvLyBXZSBmaXJzdCBjaGVjayB0byBzZWUgaWYgdGhlIHR5cGUgd2UgZ2l2ZSBpdCBzdGlja3MuLlxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSB0eXBlIGRvZXMsIHdlIGZlZWQgaXQgYSB0ZXh0dWFsIHZhbHVlLCB3aGljaCBzaG91bGRuJ3QgYmUgdmFsaWQuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGRvZXNuJ3Qgc3RpY2ssIHdlIGtub3cgdGhlcmUncyBpbnB1dCBzYW5pdGl6YXRpb24gd2hpY2ggaW5mZXJzIGEgY3VzdG9tIFVJXG4gICAgICAgICAgICAgICAgaWYgKCBib29sICkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlucHV0RWxlbS52YWx1ZSAgICAgICAgID0gc21pbGU7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0RWxlbS5zdHlsZS5jc3NUZXh0ID0gJ3Bvc2l0aW9uOmFic29sdXRlO3Zpc2liaWxpdHk6aGlkZGVuOyc7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCAvXnJhbmdlJC8udGVzdChpbnB1dEVsZW1UeXBlKSAmJiBpbnB1dEVsZW0uc3R5bGUuV2Via2l0QXBwZWFyYW5jZSAhPT0gdW5kZWZpbmVkICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgZG9jRWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dEVsZW0pO1xuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWaWV3ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAvLyBTYWZhcmkgMi00IGFsbG93cyB0aGUgc21pbGV5IGFzIGEgdmFsdWUsIGRlc3BpdGUgbWFraW5nIGEgc2xpZGVyXG4gICAgICAgICAgICAgICAgICAgICAgYm9vbCA9ICBkZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGlucHV0RWxlbSwgbnVsbCkuV2Via2l0QXBwZWFyYW5jZSAhPT0gJ3RleHRmaWVsZCcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vYmlsZSBhbmRyb2lkIHdlYiBicm93c2VyIGhhcyBmYWxzZSBwb3NpdGl2ZSwgc28gbXVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgdGhlIGhlaWdodCB0byBzZWUgaWYgdGhlIHdpZGdldCBpcyBhY3R1YWxseSB0aGVyZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbnB1dEVsZW0ub2Zmc2V0SGVpZ2h0ICE9PSAwKTtcblxuICAgICAgICAgICAgICAgICAgICAgIGRvY0VsZW1lbnQucmVtb3ZlQ2hpbGQoaW5wdXRFbGVtKTtcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCAvXihzZWFyY2h8dGVsKSQvLnRlc3QoaW5wdXRFbGVtVHlwZSkgKXtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBTcGVjIGRvZXNuJ3QgZGVmaW5lIGFueSBzcGVjaWFsIHBhcnNpbmcgb3IgZGV0ZWN0YWJsZSBVSVxuICAgICAgICAgICAgICAgICAgICAgIC8vICAgYmVoYXZpb3JzIHNvIHdlIHBhc3MgdGhlc2UgdGhyb3VnaCBhcyB0cnVlXG5cbiAgICAgICAgICAgICAgICAgICAgICAvLyBJbnRlcmVzdGluZ2x5LCBvcGVyYSBmYWlscyB0aGUgZWFybGllciB0ZXN0LCBzbyBpdCBkb2Vzbid0XG4gICAgICAgICAgICAgICAgICAgICAgLy8gIGV2ZW4gbWFrZSBpdCBoZXJlLlxuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIC9eKHVybHxlbWFpbCkkLy50ZXN0KGlucHV0RWxlbVR5cGUpICkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIFJlYWwgdXJsIGFuZCBlbWFpbCBzdXBwb3J0IGNvbWVzIHdpdGggcHJlYmFrZWQgdmFsaWRhdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICBib29sID0gaW5wdXRFbGVtLmNoZWNrVmFsaWRpdHkgJiYgaW5wdXRFbGVtLmNoZWNrVmFsaWRpdHkoKSA9PT0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdXBncmFkZWQgaW5wdXQgY29tcG9udGVudCByZWplY3RzIHRoZSA6KSB0ZXh0LCB3ZSBnb3QgYSB3aW5uZXJcbiAgICAgICAgICAgICAgICAgICAgICBib29sID0gaW5wdXRFbGVtLnZhbHVlICE9IHNtaWxlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW5wdXRzWyBwcm9wc1tpXSBdID0gISFib29sO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGlucHV0cztcbiAgICAgICAgfSkoJ3NlYXJjaCB0ZWwgdXJsIGVtYWlsIGRhdGV0aW1lIGRhdGUgbW9udGggd2VlayB0aW1lIGRhdGV0aW1lLWxvY2FsIG51bWJlciByYW5nZSBjb2xvcicuc3BsaXQoJyAnKSk7XG4gICAgICAgIC8qPj5pbnB1dHR5cGVzKi9cbiAgICB9XG4gICAgLyo+PndlYmZvcm1zKi9cblxuXG4gICAgLy8gRW5kIG9mIHRlc3QgZGVmaW5pdGlvbnNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuICAgIC8vIFJ1biB0aHJvdWdoIGFsbCB0ZXN0cyBhbmQgZGV0ZWN0IHRoZWlyIHN1cHBvcnQgaW4gdGhlIGN1cnJlbnQgVUEuXG4gICAgLy8gdG9kbzogaHlwb3RoZXRpY2FsbHkgd2UgY291bGQgYmUgZG9pbmcgYW4gYXJyYXkgb2YgdGVzdHMgYW5kIHVzZSBhIGJhc2ljIGxvb3AgaGVyZS5cbiAgICBmb3IgKCB2YXIgZmVhdHVyZSBpbiB0ZXN0cyApIHtcbiAgICAgICAgaWYgKCBoYXNPd25Qcm9wKHRlc3RzLCBmZWF0dXJlKSApIHtcbiAgICAgICAgICAgIC8vIHJ1biB0aGUgdGVzdCwgdGhyb3cgdGhlIHJldHVybiB2YWx1ZSBpbnRvIHRoZSBNb2Rlcm5penIsXG4gICAgICAgICAgICAvLyAgIHRoZW4gYmFzZWQgb24gdGhhdCBib29sZWFuLCBkZWZpbmUgYW4gYXBwcm9wcmlhdGUgY2xhc3NOYW1lXG4gICAgICAgICAgICAvLyAgIGFuZCBwdXNoIGl0IGludG8gYW4gYXJyYXkgb2YgY2xhc3NlcyB3ZSdsbCBqb2luIGxhdGVyLlxuICAgICAgICAgICAgZmVhdHVyZU5hbWUgID0gZmVhdHVyZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgTW9kZXJuaXpyW2ZlYXR1cmVOYW1lXSA9IHRlc3RzW2ZlYXR1cmVdKCk7XG5cbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCgoTW9kZXJuaXpyW2ZlYXR1cmVOYW1lXSA/ICcnIDogJ25vLScpICsgZmVhdHVyZU5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyo+PndlYmZvcm1zKi9cbiAgICAvLyBpbnB1dCB0ZXN0cyBuZWVkIHRvIHJ1bi5cbiAgICBNb2Rlcm5penIuaW5wdXQgfHwgd2ViZm9ybXMoKTtcbiAgICAvKj4+d2ViZm9ybXMqL1xuXG5cbiAgICAvKipcbiAgICAgKiBhZGRUZXN0IGFsbG93cyB0aGUgdXNlciB0byBkZWZpbmUgdGhlaXIgb3duIGZlYXR1cmUgdGVzdHNcbiAgICAgKiB0aGUgcmVzdWx0IHdpbGwgYmUgYWRkZWQgb250byB0aGUgTW9kZXJuaXpyIG9iamVjdCxcbiAgICAgKiBhcyB3ZWxsIGFzIGFuIGFwcHJvcHJpYXRlIGNsYXNzTmFtZSBzZXQgb24gdGhlIGh0bWwgZWxlbWVudFxuICAgICAqXG4gICAgICogQHBhcmFtIGZlYXR1cmUgLSBTdHJpbmcgbmFtaW5nIHRoZSBmZWF0dXJlXG4gICAgICogQHBhcmFtIHRlc3QgLSBGdW5jdGlvbiByZXR1cm5pbmcgdHJ1ZSBpZiBmZWF0dXJlIGlzIHN1cHBvcnRlZCwgZmFsc2UgaWYgbm90XG4gICAgICovXG4gICAgIE1vZGVybml6ci5hZGRUZXN0ID0gZnVuY3Rpb24gKCBmZWF0dXJlLCB0ZXN0ICkge1xuICAgICAgIGlmICggdHlwZW9mIGZlYXR1cmUgPT0gJ29iamVjdCcgKSB7XG4gICAgICAgICBmb3IgKCB2YXIga2V5IGluIGZlYXR1cmUgKSB7XG4gICAgICAgICAgIGlmICggaGFzT3duUHJvcCggZmVhdHVyZSwga2V5ICkgKSB7XG4gICAgICAgICAgICAgTW9kZXJuaXpyLmFkZFRlc3QoIGtleSwgZmVhdHVyZVsga2V5IF0gKTtcbiAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgIGZlYXR1cmUgPSBmZWF0dXJlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgIGlmICggTW9kZXJuaXpyW2ZlYXR1cmVdICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgIC8vIHdlJ3JlIGdvaW5nIHRvIHF1aXQgaWYgeW91J3JlIHRyeWluZyB0byBvdmVyd3JpdGUgYW4gZXhpc3RpbmcgdGVzdFxuICAgICAgICAgICAvLyBpZiB3ZSB3ZXJlIHRvIGFsbG93IGl0LCB3ZSdkIGRvIHRoaXM6XG4gICAgICAgICAgIC8vICAgdmFyIHJlID0gbmV3IFJlZ0V4cChcIlxcXFxiKG5vLSk/XCIgKyBmZWF0dXJlICsgXCJcXFxcYlwiKTtcbiAgICAgICAgICAgLy8gICBkb2NFbGVtZW50LmNsYXNzTmFtZSA9IGRvY0VsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UoIHJlLCAnJyApO1xuICAgICAgICAgICAvLyBidXQsIG5vIHJseSwgc3R1ZmYgJ2VtLlxuICAgICAgICAgICByZXR1cm4gTW9kZXJuaXpyO1xuICAgICAgICAgfVxuXG4gICAgICAgICB0ZXN0ID0gdHlwZW9mIHRlc3QgPT0gJ2Z1bmN0aW9uJyA/IHRlc3QoKSA6IHRlc3Q7XG5cbiAgICAgICAgIGlmICh0eXBlb2YgZW5hYmxlQ2xhc3NlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBlbmFibGVDbGFzc2VzKSB7XG4gICAgICAgICAgIGRvY0VsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArICh0ZXN0ID8gJycgOiAnbm8tJykgKyBmZWF0dXJlO1xuICAgICAgICAgfVxuICAgICAgICAgTW9kZXJuaXpyW2ZlYXR1cmVdID0gdGVzdDtcblxuICAgICAgIH1cblxuICAgICAgIHJldHVybiBNb2Rlcm5penI7IC8vIGFsbG93IGNoYWluaW5nLlxuICAgICB9O1xuXG5cbiAgICAvLyBSZXNldCBtb2RFbGVtLmNzc1RleHQgdG8gbm90aGluZyB0byByZWR1Y2UgbWVtb3J5IGZvb3RwcmludC5cbiAgICBzZXRDc3MoJycpO1xuICAgIG1vZEVsZW0gPSBpbnB1dEVsZW0gPSBudWxsO1xuXG4gICAgLyo+PnNoaXYqL1xuICAgIC8qKlxuICAgICAqIEBwcmVzZXJ2ZSBIVE1MNSBTaGl2IHByZXYzLjcuMSB8IEBhZmFya2FzIEBqZGFsdG9uIEBqb25fbmVhbCBAcmVtIHwgTUlUL0dQTDIgTGljZW5zZWRcbiAgICAgKi9cbiAgICA7KGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQpIHtcbiAgICAgICAgLypqc2hpbnQgZXZpbDp0cnVlICovXG4gICAgICAgIC8qKiB2ZXJzaW9uICovXG4gICAgICAgIHZhciB2ZXJzaW9uID0gJzMuNy4wJztcblxuICAgICAgICAvKiogUHJlc2V0IG9wdGlvbnMgKi9cbiAgICAgICAgdmFyIG9wdGlvbnMgPSB3aW5kb3cuaHRtbDUgfHwge307XG5cbiAgICAgICAgLyoqIFVzZWQgdG8gc2tpcCBwcm9ibGVtIGVsZW1lbnRzICovXG4gICAgICAgIHZhciByZVNraXAgPSAvXjx8Xig/OmJ1dHRvbnxtYXB8c2VsZWN0fHRleHRhcmVhfG9iamVjdHxpZnJhbWV8b3B0aW9ufG9wdGdyb3VwKSQvaTtcblxuICAgICAgICAvKiogTm90IGFsbCBlbGVtZW50cyBjYW4gYmUgY2xvbmVkIGluIElFICoqL1xuICAgICAgICB2YXIgc2F2ZUNsb25lcyA9IC9eKD86YXxifGNvZGV8ZGl2fGZpZWxkc2V0fGgxfGgyfGgzfGg0fGg1fGg2fGl8bGFiZWx8bGl8b2x8cHxxfHNwYW58c3Ryb25nfHN0eWxlfHRhYmxlfHRib2R5fHRkfHRofHRyfHVsKSQvaTtcblxuICAgICAgICAvKiogRGV0ZWN0IHdoZXRoZXIgdGhlIGJyb3dzZXIgc3VwcG9ydHMgZGVmYXVsdCBodG1sNSBzdHlsZXMgKi9cbiAgICAgICAgdmFyIHN1cHBvcnRzSHRtbDVTdHlsZXM7XG5cbiAgICAgICAgLyoqIE5hbWUgb2YgdGhlIGV4cGFuZG8sIHRvIHdvcmsgd2l0aCBtdWx0aXBsZSBkb2N1bWVudHMgb3IgdG8gcmUtc2hpdiBvbmUgZG9jdW1lbnQgKi9cbiAgICAgICAgdmFyIGV4cGFuZG8gPSAnX2h0bWw1c2hpdic7XG5cbiAgICAgICAgLyoqIFRoZSBpZCBmb3IgdGhlIHRoZSBkb2N1bWVudHMgZXhwYW5kbyAqL1xuICAgICAgICB2YXIgZXhwYW5JRCA9IDA7XG5cbiAgICAgICAgLyoqIENhY2hlZCBkYXRhIGZvciBlYWNoIGRvY3VtZW50ICovXG4gICAgICAgIHZhciBleHBhbmRvRGF0YSA9IHt9O1xuXG4gICAgICAgIC8qKiBEZXRlY3Qgd2hldGhlciB0aGUgYnJvd3NlciBzdXBwb3J0cyB1bmtub3duIGVsZW1lbnRzICovXG4gICAgICAgIHZhciBzdXBwb3J0c1Vua25vd25FbGVtZW50cztcblxuICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgYS5pbm5lckhUTUwgPSAnPHh5ej48L3h5ej4nO1xuICAgICAgICAgICAgLy9pZiB0aGUgaGlkZGVuIHByb3BlcnR5IGlzIGltcGxlbWVudGVkIHdlIGNhbiBhc3N1bWUsIHRoYXQgdGhlIGJyb3dzZXIgc3VwcG9ydHMgYmFzaWMgSFRNTDUgU3R5bGVzXG4gICAgICAgICAgICBzdXBwb3J0c0h0bWw1U3R5bGVzID0gKCdoaWRkZW4nIGluIGEpO1xuXG4gICAgICAgICAgICBzdXBwb3J0c1Vua25vd25FbGVtZW50cyA9IGEuY2hpbGROb2Rlcy5sZW5ndGggPT0gMSB8fCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIC8vIGFzc2lnbiBhIGZhbHNlIHBvc2l0aXZlIGlmIHVuYWJsZSB0byBzaGl2XG4gICAgICAgICAgICAgIChkb2N1bWVudC5jcmVhdGVFbGVtZW50KSgnYScpO1xuICAgICAgICAgICAgICB2YXIgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICB0eXBlb2YgZnJhZy5jbG9uZU5vZGUgPT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgICAgICAgICB0eXBlb2YgZnJhZy5jcmVhdGVEb2N1bWVudEZyYWdtZW50ID09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgICAgICAgICAgdHlwZW9mIGZyYWcuY3JlYXRlRWxlbWVudCA9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSgpKTtcbiAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIC8vIGFzc2lnbiBhIGZhbHNlIHBvc2l0aXZlIGlmIGRldGVjdGlvbiBmYWlscyA9PiB1bmFibGUgdG8gc2hpdlxuICAgICAgICAgICAgc3VwcG9ydHNIdG1sNVN0eWxlcyA9IHRydWU7XG4gICAgICAgICAgICBzdXBwb3J0c1Vua25vd25FbGVtZW50cyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0oKSk7XG5cbiAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYSBzdHlsZSBzaGVldCB3aXRoIHRoZSBnaXZlbiBDU1MgdGV4dCBhbmQgYWRkcyBpdCB0byB0aGUgZG9jdW1lbnQuXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSB7RG9jdW1lbnR9IG93bmVyRG9jdW1lbnQgVGhlIGRvY3VtZW50LlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gY3NzVGV4dCBUaGUgQ1NTIHRleHQuXG4gICAgICAgICAqIEByZXR1cm5zIHtTdHlsZVNoZWV0fSBUaGUgc3R5bGUgZWxlbWVudC5cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGFkZFN0eWxlU2hlZXQob3duZXJEb2N1bWVudCwgY3NzVGV4dCkge1xuICAgICAgICAgIHZhciBwID0gb3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksXG4gICAgICAgICAgcGFyZW50ID0gb3duZXJEb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdIHx8IG93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgICAgICAgcC5pbm5lckhUTUwgPSAneDxzdHlsZT4nICsgY3NzVGV4dCArICc8L3N0eWxlPic7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudC5pbnNlcnRCZWZvcmUocC5sYXN0Q2hpbGQsIHBhcmVudC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiBgaHRtbDUuZWxlbWVudHNgIGFzIGFuIGFycmF5LlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcmV0dXJucyB7QXJyYXl9IEFuIGFycmF5IG9mIHNoaXZlZCBlbGVtZW50IG5vZGUgbmFtZXMuXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBnZXRFbGVtZW50cygpIHtcbiAgICAgICAgICB2YXIgZWxlbWVudHMgPSBodG1sNS5lbGVtZW50cztcbiAgICAgICAgICByZXR1cm4gdHlwZW9mIGVsZW1lbnRzID09ICdzdHJpbmcnID8gZWxlbWVudHMuc3BsaXQoJyAnKSA6IGVsZW1lbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGRhdGEgYXNzb2NpYXRlZCB0byB0aGUgZ2l2ZW4gZG9jdW1lbnRcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtIHtEb2N1bWVudH0gb3duZXJEb2N1bWVudCBUaGUgZG9jdW1lbnQuXG4gICAgICAgICAqIEByZXR1cm5zIHtPYmplY3R9IEFuIG9iamVjdCBvZiBkYXRhLlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gZ2V0RXhwYW5kb0RhdGEob3duZXJEb2N1bWVudCkge1xuICAgICAgICAgIHZhciBkYXRhID0gZXhwYW5kb0RhdGFbb3duZXJEb2N1bWVudFtleHBhbmRvXV07XG4gICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICBkYXRhID0ge307XG4gICAgICAgICAgICBleHBhbklEKys7XG4gICAgICAgICAgICBvd25lckRvY3VtZW50W2V4cGFuZG9dID0gZXhwYW5JRDtcbiAgICAgICAgICAgIGV4cGFuZG9EYXRhW2V4cGFuSURdID0gZGF0YTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogcmV0dXJucyBhIHNoaXZlZCBlbGVtZW50IGZvciB0aGUgZ2l2ZW4gbm9kZU5hbWUgYW5kIGRvY3VtZW50XG4gICAgICAgICAqIEBtZW1iZXJPZiBodG1sNVxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gbm9kZU5hbWUgbmFtZSBvZiB0aGUgZWxlbWVudFxuICAgICAgICAgKiBAcGFyYW0ge0RvY3VtZW50fSBvd25lckRvY3VtZW50IFRoZSBjb250ZXh0IGRvY3VtZW50LlxuICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgc2hpdmVkIGVsZW1lbnQuXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KG5vZGVOYW1lLCBvd25lckRvY3VtZW50LCBkYXRhKXtcbiAgICAgICAgICBpZiAoIW93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgICAgIG93bmVyRG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoc3VwcG9ydHNVbmtub3duRWxlbWVudHMpe1xuICAgICAgICAgICAgcmV0dXJuIG93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlTmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgZGF0YSA9IGdldEV4cGFuZG9EYXRhKG93bmVyRG9jdW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgbm9kZTtcblxuICAgICAgICAgIGlmIChkYXRhLmNhY2hlW25vZGVOYW1lXSkge1xuICAgICAgICAgICAgbm9kZSA9IGRhdGEuY2FjaGVbbm9kZU5hbWVdLmNsb25lTm9kZSgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc2F2ZUNsb25lcy50ZXN0KG5vZGVOYW1lKSkge1xuICAgICAgICAgICAgbm9kZSA9IChkYXRhLmNhY2hlW25vZGVOYW1lXSA9IGRhdGEuY3JlYXRlRWxlbShub2RlTmFtZSkpLmNsb25lTm9kZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlID0gZGF0YS5jcmVhdGVFbGVtKG5vZGVOYW1lKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBBdm9pZCBhZGRpbmcgc29tZSBlbGVtZW50cyB0byBmcmFnbWVudHMgaW4gSUUgPCA5IGJlY2F1c2VcbiAgICAgICAgICAvLyAqIEF0dHJpYnV0ZXMgbGlrZSBgbmFtZWAgb3IgYHR5cGVgIGNhbm5vdCBiZSBzZXQvY2hhbmdlZCBvbmNlIGFuIGVsZW1lbnRcbiAgICAgICAgICAvLyAgIGlzIGluc2VydGVkIGludG8gYSBkb2N1bWVudC9mcmFnbWVudFxuICAgICAgICAgIC8vICogTGluayBlbGVtZW50cyB3aXRoIGBzcmNgIGF0dHJpYnV0ZXMgdGhhdCBhcmUgaW5hY2Nlc3NpYmxlLCBhcyB3aXRoXG4gICAgICAgICAgLy8gICBhIDQwMyByZXNwb25zZSwgd2lsbCBjYXVzZSB0aGUgdGFiL3dpbmRvdyB0byBjcmFzaFxuICAgICAgICAgIC8vICogU2NyaXB0IGVsZW1lbnRzIGFwcGVuZGVkIHRvIGZyYWdtZW50cyB3aWxsIGV4ZWN1dGUgd2hlbiB0aGVpciBgc3JjYFxuICAgICAgICAgIC8vICAgb3IgYHRleHRgIHByb3BlcnR5IGlzIHNldFxuICAgICAgICAgIHJldHVybiBub2RlLmNhbkhhdmVDaGlsZHJlbiAmJiAhcmVTa2lwLnRlc3Qobm9kZU5hbWUpICYmICFub2RlLnRhZ1VybiA/IGRhdGEuZnJhZy5hcHBlbmRDaGlsZChub2RlKSA6IG5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogcmV0dXJucyBhIHNoaXZlZCBEb2N1bWVudEZyYWdtZW50IGZvciB0aGUgZ2l2ZW4gZG9jdW1lbnRcbiAgICAgICAgICogQG1lbWJlck9mIGh0bWw1XG4gICAgICAgICAqIEBwYXJhbSB7RG9jdW1lbnR9IG93bmVyRG9jdW1lbnQgVGhlIGNvbnRleHQgZG9jdW1lbnQuXG4gICAgICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBzaGl2ZWQgRG9jdW1lbnRGcmFnbWVudC5cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZURvY3VtZW50RnJhZ21lbnQob3duZXJEb2N1bWVudCwgZGF0YSl7XG4gICAgICAgICAgaWYgKCFvd25lckRvY3VtZW50KSB7XG4gICAgICAgICAgICBvd25lckRvY3VtZW50ID0gZG9jdW1lbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHN1cHBvcnRzVW5rbm93bkVsZW1lbnRzKXtcbiAgICAgICAgICAgIHJldHVybiBvd25lckRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGF0YSA9IGRhdGEgfHwgZ2V0RXhwYW5kb0RhdGEob3duZXJEb2N1bWVudCk7XG4gICAgICAgICAgdmFyIGNsb25lID0gZGF0YS5mcmFnLmNsb25lTm9kZSgpLFxuICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgIGVsZW1zID0gZ2V0RWxlbWVudHMoKSxcbiAgICAgICAgICBsID0gZWxlbXMubGVuZ3RoO1xuICAgICAgICAgIGZvcig7aTxsO2krKyl7XG4gICAgICAgICAgICBjbG9uZS5jcmVhdGVFbGVtZW50KGVsZW1zW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNoaXZzIHRoZSBgY3JlYXRlRWxlbWVudGAgYW5kIGBjcmVhdGVEb2N1bWVudEZyYWdtZW50YCBtZXRob2RzIG9mIHRoZSBkb2N1bWVudC5cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtIHtEb2N1bWVudHxEb2N1bWVudEZyYWdtZW50fSBvd25lckRvY3VtZW50IFRoZSBkb2N1bWVudC5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgb2YgdGhlIGRvY3VtZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gc2hpdk1ldGhvZHMob3duZXJEb2N1bWVudCwgZGF0YSkge1xuICAgICAgICAgIGlmICghZGF0YS5jYWNoZSkge1xuICAgICAgICAgICAgZGF0YS5jYWNoZSA9IHt9O1xuICAgICAgICAgICAgZGF0YS5jcmVhdGVFbGVtID0gb3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50O1xuICAgICAgICAgICAgZGF0YS5jcmVhdGVGcmFnID0gb3duZXJEb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50O1xuICAgICAgICAgICAgZGF0YS5mcmFnID0gZGF0YS5jcmVhdGVGcmFnKCk7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICBvd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbihub2RlTmFtZSkge1xuICAgICAgICAgICAgLy9hYm9ydCBzaGl2XG4gICAgICAgICAgICBpZiAoIWh0bWw1LnNoaXZNZXRob2RzKSB7XG4gICAgICAgICAgICAgIHJldHVybiBkYXRhLmNyZWF0ZUVsZW0obm9kZU5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQobm9kZU5hbWUsIG93bmVyRG9jdW1lbnQsIGRhdGEpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBvd25lckRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQgPSBGdW5jdGlvbignaCxmJywgJ3JldHVybiBmdW5jdGlvbigpeycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YXIgbj1mLmNsb25lTm9kZSgpLGM9bi5jcmVhdGVFbGVtZW50OycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdoLnNoaXZNZXRob2RzJiYoJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdW5yb2xsIHRoZSBgY3JlYXRlRWxlbWVudGAgY2FsbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRFbGVtZW50cygpLmpvaW4oKS5yZXBsYWNlKC9bXFx3XFwtXSsvZywgZnVuY3Rpb24obm9kZU5hbWUpIHtcbiAgICAgICAgICAgIGRhdGEuY3JlYXRlRWxlbShub2RlTmFtZSk7XG4gICAgICAgICAgICBkYXRhLmZyYWcuY3JlYXRlRWxlbWVudChub2RlTmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gJ2MoXCInICsgbm9kZU5hbWUgKyAnXCIpJztcbiAgICAgICAgICB9KSArXG4gICAgICAgICAgICAnKTtyZXR1cm4gbn0nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKGh0bWw1LCBkYXRhLmZyYWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNoaXZzIHRoZSBnaXZlbiBkb2N1bWVudC5cbiAgICAgICAgICogQG1lbWJlck9mIGh0bWw1XG4gICAgICAgICAqIEBwYXJhbSB7RG9jdW1lbnR9IG93bmVyRG9jdW1lbnQgVGhlIGRvY3VtZW50IHRvIHNoaXYuXG4gICAgICAgICAqIEByZXR1cm5zIHtEb2N1bWVudH0gVGhlIHNoaXZlZCBkb2N1bWVudC5cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIHNoaXZEb2N1bWVudChvd25lckRvY3VtZW50KSB7XG4gICAgICAgICAgaWYgKCFvd25lckRvY3VtZW50KSB7XG4gICAgICAgICAgICBvd25lckRvY3VtZW50ID0gZG9jdW1lbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBkYXRhID0gZ2V0RXhwYW5kb0RhdGEob3duZXJEb2N1bWVudCk7XG5cbiAgICAgICAgICBpZiAoaHRtbDUuc2hpdkNTUyAmJiAhc3VwcG9ydHNIdG1sNVN0eWxlcyAmJiAhZGF0YS5oYXNDU1MpIHtcbiAgICAgICAgICAgIGRhdGEuaGFzQ1NTID0gISFhZGRTdHlsZVNoZWV0KG93bmVyRG9jdW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb3JyZWN0cyBibG9jayBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFNi83LzgvOVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FydGljbGUsYXNpZGUsZGlhbG9nLGZpZ2NhcHRpb24sZmlndXJlLGZvb3RlcixoZWFkZXIsaGdyb3VwLG1haW4sbmF2LHNlY3Rpb257ZGlzcGxheTpibG9ja30nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFNi83LzgvOVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWFya3tiYWNrZ3JvdW5kOiNGRjA7Y29sb3I6IzAwMH0nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGlkZXMgbm9uLXJlbmRlcmVkIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZW1wbGF0ZXtkaXNwbGF5Om5vbmV9J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXN1cHBvcnRzVW5rbm93bkVsZW1lbnRzKSB7XG4gICAgICAgICAgICBzaGl2TWV0aG9kcyhvd25lckRvY3VtZW50LCBkYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG93bmVyRG9jdW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGBodG1sNWAgb2JqZWN0IGlzIGV4cG9zZWQgc28gdGhhdCBtb3JlIGVsZW1lbnRzIGNhbiBiZSBzaGl2ZWQgYW5kXG4gICAgICAgICAqIGV4aXN0aW5nIHNoaXZpbmcgY2FuIGJlIGRldGVjdGVkIG9uIGlmcmFtZXMuXG4gICAgICAgICAqIEB0eXBlIE9iamVjdFxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAvLyBvcHRpb25zIGNhbiBiZSBjaGFuZ2VkIGJlZm9yZSB0aGUgc2NyaXB0IGlzIGluY2x1ZGVkXG4gICAgICAgICAqIGh0bWw1ID0geyAnZWxlbWVudHMnOiAnbWFyayBzZWN0aW9uJywgJ3NoaXZDU1MnOiBmYWxzZSwgJ3NoaXZNZXRob2RzJzogZmFsc2UgfTtcbiAgICAgICAgICovXG4gICAgICAgIHZhciBodG1sNSA9IHtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEFuIGFycmF5IG9yIHNwYWNlIHNlcGFyYXRlZCBzdHJpbmcgb2Ygbm9kZSBuYW1lcyBvZiB0aGUgZWxlbWVudHMgdG8gc2hpdi5cbiAgICAgICAgICAgKiBAbWVtYmVyT2YgaHRtbDVcbiAgICAgICAgICAgKiBAdHlwZSBBcnJheXxTdHJpbmdcbiAgICAgICAgICAgKi9cbiAgICAgICAgICAnZWxlbWVudHMnOiBvcHRpb25zLmVsZW1lbnRzIHx8ICdhYmJyIGFydGljbGUgYXNpZGUgYXVkaW8gYmRpIGNhbnZhcyBkYXRhIGRhdGFsaXN0IGRldGFpbHMgZGlhbG9nIGZpZ2NhcHRpb24gZmlndXJlIGZvb3RlciBoZWFkZXIgaGdyb3VwIG1haW4gbWFyayBtZXRlciBuYXYgb3V0cHV0IHByb2dyZXNzIHNlY3Rpb24gc3VtbWFyeSB0ZW1wbGF0ZSB0aW1lIHZpZGVvJyxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIGN1cnJlbnQgdmVyc2lvbiBvZiBodG1sNXNoaXZcbiAgICAgICAgICAgKi9cbiAgICAgICAgICAndmVyc2lvbic6IHZlcnNpb24sXG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBBIGZsYWcgdG8gaW5kaWNhdGUgdGhhdCB0aGUgSFRNTDUgc3R5bGUgc2hlZXQgc2hvdWxkIGJlIGluc2VydGVkLlxuICAgICAgICAgICAqIEBtZW1iZXJPZiBodG1sNVxuICAgICAgICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICAnc2hpdkNTUyc6IChvcHRpb25zLnNoaXZDU1MgIT09IGZhbHNlKSxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIElzIGVxdWFsIHRvIHRydWUgaWYgYSBicm93c2VyIHN1cHBvcnRzIGNyZWF0aW5nIHVua25vd24vSFRNTDUgZWxlbWVudHNcbiAgICAgICAgICAgKiBAbWVtYmVyT2YgaHRtbDVcbiAgICAgICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgICAgICovXG4gICAgICAgICAgJ3N1cHBvcnRzVW5rbm93bkVsZW1lbnRzJzogc3VwcG9ydHNVbmtub3duRWxlbWVudHMsXG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBBIGZsYWcgdG8gaW5kaWNhdGUgdGhhdCB0aGUgZG9jdW1lbnQncyBgY3JlYXRlRWxlbWVudGAgYW5kIGBjcmVhdGVEb2N1bWVudEZyYWdtZW50YFxuICAgICAgICAgICAqIG1ldGhvZHMgc2hvdWxkIGJlIG92ZXJ3cml0dGVuLlxuICAgICAgICAgICAqIEBtZW1iZXJPZiBodG1sNVxuICAgICAgICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICAnc2hpdk1ldGhvZHMnOiAob3B0aW9ucy5zaGl2TWV0aG9kcyAhPT0gZmFsc2UpLFxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQSBzdHJpbmcgdG8gZGVzY3JpYmUgdGhlIHR5cGUgb2YgYGh0bWw1YCBvYmplY3QgKFwiZGVmYXVsdFwiIG9yIFwiZGVmYXVsdCBwcmludFwiKS5cbiAgICAgICAgICAgKiBAbWVtYmVyT2YgaHRtbDVcbiAgICAgICAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgICAgICAgKi9cbiAgICAgICAgICAndHlwZSc6ICdkZWZhdWx0JyxcblxuICAgICAgICAgIC8vIHNoaXZzIHRoZSBkb2N1bWVudCBhY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmllZCBgaHRtbDVgIG9iamVjdCBvcHRpb25zXG4gICAgICAgICAgJ3NoaXZEb2N1bWVudCc6IHNoaXZEb2N1bWVudCxcblxuICAgICAgICAgIC8vY3JlYXRlcyBhIHNoaXZlZCBlbGVtZW50XG4gICAgICAgICAgY3JlYXRlRWxlbWVudDogY3JlYXRlRWxlbWVudCxcblxuICAgICAgICAgIC8vY3JlYXRlcyBhIHNoaXZlZCBkb2N1bWVudEZyYWdtZW50XG4gICAgICAgICAgY3JlYXRlRG9jdW1lbnRGcmFnbWVudDogY3JlYXRlRG9jdW1lbnRGcmFnbWVudFxuICAgICAgICB9O1xuXG4gICAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgICAgIC8vIGV4cG9zZSBodG1sNVxuICAgICAgICB3aW5kb3cuaHRtbDUgPSBodG1sNTtcblxuICAgICAgICAvLyBzaGl2IHRoZSBkb2N1bWVudFxuICAgICAgICBzaGl2RG9jdW1lbnQoZG9jdW1lbnQpO1xuXG4gICAgfSh0aGlzLCBkb2N1bWVudCkpO1xuICAgIC8qPj5zaGl2Ki9cblxuICAgIC8vIEFzc2lnbiBwcml2YXRlIHByb3BlcnRpZXMgdG8gdGhlIHJldHVybiBvYmplY3Qgd2l0aCBwcmVmaXhcbiAgICBNb2Rlcm5penIuX3ZlcnNpb24gICAgICA9IHZlcnNpb247XG5cbiAgICAvLyBleHBvc2UgdGhlc2UgZm9yIHRoZSBwbHVnaW4gQVBJLiBMb29rIGluIHRoZSBzb3VyY2UgZm9yIGhvdyB0byBqb2luKCkgdGhlbSBhZ2FpbnN0IHlvdXIgaW5wdXRcbiAgICAvKj4+cHJlZml4ZXMqL1xuICAgIE1vZGVybml6ci5fcHJlZml4ZXMgICAgID0gcHJlZml4ZXM7XG4gICAgLyo+PnByZWZpeGVzKi9cbiAgICAvKj4+ZG9tcHJlZml4ZXMqL1xuICAgIE1vZGVybml6ci5fZG9tUHJlZml4ZXMgID0gZG9tUHJlZml4ZXM7XG4gICAgTW9kZXJuaXpyLl9jc3NvbVByZWZpeGVzICA9IGNzc29tUHJlZml4ZXM7XG4gICAgLyo+PmRvbXByZWZpeGVzKi9cblxuICAgIC8qPj5tcSovXG4gICAgLy8gTW9kZXJuaXpyLm1xIHRlc3RzIGEgZ2l2ZW4gbWVkaWEgcXVlcnksIGxpdmUgYWdhaW5zdCB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgd2luZG93XG4gICAgLy8gQSBmZXcgaW1wb3J0YW50IG5vdGVzOlxuICAgIC8vICAgKiBJZiBhIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBtZWRpYSBxdWVyaWVzIGF0IGFsbCAoZWcuIG9sZElFKSB0aGUgbXEoKSB3aWxsIGFsd2F5cyByZXR1cm4gZmFsc2VcbiAgICAvLyAgICogQSBtYXgtd2lkdGggb3Igb3JpZW50YXRpb24gcXVlcnkgd2lsbCBiZSBldmFsdWF0ZWQgYWdhaW5zdCB0aGUgY3VycmVudCBzdGF0ZSwgd2hpY2ggbWF5IGNoYW5nZSBsYXRlci5cbiAgICAvLyAgICogWW91IG11c3Qgc3BlY2lmeSB2YWx1ZXMuIEVnLiBJZiB5b3UgYXJlIHRlc3Rpbmcgc3VwcG9ydCBmb3IgdGhlIG1pbi13aWR0aCBtZWRpYSBxdWVyeSB1c2U6XG4gICAgLy8gICAgICAgTW9kZXJuaXpyLm1xKCcobWluLXdpZHRoOjApJylcbiAgICAvLyB1c2FnZTpcbiAgICAvLyBNb2Rlcm5penIubXEoJ29ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OCknKVxuICAgIE1vZGVybml6ci5tcSAgICAgICAgICAgID0gdGVzdE1lZGlhUXVlcnk7XG4gICAgLyo+Pm1xKi9cblxuICAgIC8qPj5oYXNldmVudCovXG4gICAgLy8gTW9kZXJuaXpyLmhhc0V2ZW50KCkgZGV0ZWN0cyBzdXBwb3J0IGZvciBhIGdpdmVuIGV2ZW50LCB3aXRoIGFuIG9wdGlvbmFsIGVsZW1lbnQgdG8gdGVzdCBvblxuICAgIC8vIE1vZGVybml6ci5oYXNFdmVudCgnZ2VzdHVyZXN0YXJ0JywgZWxlbSlcbiAgICBNb2Rlcm5penIuaGFzRXZlbnQgICAgICA9IGlzRXZlbnRTdXBwb3J0ZWQ7XG4gICAgLyo+Pmhhc2V2ZW50Ki9cblxuICAgIC8qPj50ZXN0cHJvcCovXG4gICAgLy8gTW9kZXJuaXpyLnRlc3RQcm9wKCkgaW52ZXN0aWdhdGVzIHdoZXRoZXIgYSBnaXZlbiBzdHlsZSBwcm9wZXJ0eSBpcyByZWNvZ25pemVkXG4gICAgLy8gTm90ZSB0aGF0IHRoZSBwcm9wZXJ0eSBuYW1lcyBtdXN0IGJlIHByb3ZpZGVkIGluIHRoZSBjYW1lbENhc2UgdmFyaWFudC5cbiAgICAvLyBNb2Rlcm5penIudGVzdFByb3AoJ3BvaW50ZXJFdmVudHMnKVxuICAgIE1vZGVybml6ci50ZXN0UHJvcCAgICAgID0gZnVuY3Rpb24ocHJvcCl7XG4gICAgICAgIHJldHVybiB0ZXN0UHJvcHMoW3Byb3BdKTtcbiAgICB9O1xuICAgIC8qPj50ZXN0cHJvcCovXG5cbiAgICAvKj4+dGVzdGFsbHByb3BzKi9cbiAgICAvLyBNb2Rlcm5penIudGVzdEFsbFByb3BzKCkgaW52ZXN0aWdhdGVzIHdoZXRoZXIgYSBnaXZlbiBzdHlsZSBwcm9wZXJ0eSxcbiAgICAvLyAgIG9yIGFueSBvZiBpdHMgdmVuZG9yLXByZWZpeGVkIHZhcmlhbnRzLCBpcyByZWNvZ25pemVkXG4gICAgLy8gTm90ZSB0aGF0IHRoZSBwcm9wZXJ0eSBuYW1lcyBtdXN0IGJlIHByb3ZpZGVkIGluIHRoZSBjYW1lbENhc2UgdmFyaWFudC5cbiAgICAvLyBNb2Rlcm5penIudGVzdEFsbFByb3BzKCdib3hTaXppbmcnKVxuICAgIE1vZGVybml6ci50ZXN0QWxsUHJvcHMgID0gdGVzdFByb3BzQWxsO1xuICAgIC8qPj50ZXN0YWxscHJvcHMqL1xuXG5cbiAgICAvKj4+dGVzdHN0eWxlcyovXG4gICAgLy8gTW9kZXJuaXpyLnRlc3RTdHlsZXMoKSBhbGxvd3MgeW91IHRvIGFkZCBjdXN0b20gc3R5bGVzIHRvIHRoZSBkb2N1bWVudCBhbmQgdGVzdCBhbiBlbGVtZW50IGFmdGVyd2FyZHNcbiAgICAvLyBNb2Rlcm5penIudGVzdFN0eWxlcygnI21vZGVybml6ciB7IHBvc2l0aW9uOmFic29sdXRlIH0nLCBmdW5jdGlvbihlbGVtLCBydWxlKXsgLi4uIH0pXG4gICAgTW9kZXJuaXpyLnRlc3RTdHlsZXMgICAgPSBpbmplY3RFbGVtZW50V2l0aFN0eWxlcztcbiAgICAvKj4+dGVzdHN0eWxlcyovXG5cblxuICAgIC8qPj5wcmVmaXhlZCovXG4gICAgLy8gTW9kZXJuaXpyLnByZWZpeGVkKCkgcmV0dXJucyB0aGUgcHJlZml4ZWQgb3Igbm9ucHJlZml4ZWQgcHJvcGVydHkgbmFtZSB2YXJpYW50IG9mIHlvdXIgaW5wdXRcbiAgICAvLyBNb2Rlcm5penIucHJlZml4ZWQoJ2JveFNpemluZycpIC8vICdNb3pCb3hTaXppbmcnXG5cbiAgICAvLyBQcm9wZXJ0aWVzIG11c3QgYmUgcGFzc2VkIGFzIGRvbS1zdHlsZSBjYW1lbGNhc2UsIHJhdGhlciB0aGFuIGBib3gtc2l6aW5nYCBoeXBlbnRhdGVkIHN0eWxlLlxuICAgIC8vIFJldHVybiB2YWx1ZXMgd2lsbCBhbHNvIGJlIHRoZSBjYW1lbENhc2UgdmFyaWFudCwgaWYgeW91IG5lZWQgdG8gdHJhbnNsYXRlIHRoYXQgdG8gaHlwZW5hdGVkIHN0eWxlIHVzZTpcbiAgICAvL1xuICAgIC8vICAgICBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCBmdW5jdGlvbihzdHIsbTEpeyByZXR1cm4gJy0nICsgbTEudG9Mb3dlckNhc2UoKTsgfSkucmVwbGFjZSgvXm1zLS8sJy1tcy0nKTtcblxuICAgIC8vIElmIHlvdSdyZSB0cnlpbmcgdG8gYXNjZXJ0YWluIHdoaWNoIHRyYW5zaXRpb24gZW5kIGV2ZW50IHRvIGJpbmQgdG8sIHlvdSBtaWdodCBkbyBzb21ldGhpbmcgbGlrZS4uLlxuICAgIC8vXG4gICAgLy8gICAgIHZhciB0cmFuc0VuZEV2ZW50TmFtZXMgPSB7XG4gICAgLy8gICAgICAgJ1dlYmtpdFRyYW5zaXRpb24nIDogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgIC8vICAgICAgICdNb3pUcmFuc2l0aW9uJyAgICA6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAvLyAgICAgICAnT1RyYW5zaXRpb24nICAgICAgOiAnb1RyYW5zaXRpb25FbmQnLFxuICAgIC8vICAgICAgICdtc1RyYW5zaXRpb24nICAgICA6ICdNU1RyYW5zaXRpb25FbmQnLFxuICAgIC8vICAgICAgICd0cmFuc2l0aW9uJyAgICAgICA6ICd0cmFuc2l0aW9uZW5kJ1xuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB0cmFuc0VuZEV2ZW50TmFtZSA9IHRyYW5zRW5kRXZlbnROYW1lc1sgTW9kZXJuaXpyLnByZWZpeGVkKCd0cmFuc2l0aW9uJykgXTtcblxuICAgIE1vZGVybml6ci5wcmVmaXhlZCAgICAgID0gZnVuY3Rpb24ocHJvcCwgb2JqLCBlbGVtKXtcbiAgICAgIGlmKCFvYmopIHtcbiAgICAgICAgcmV0dXJuIHRlc3RQcm9wc0FsbChwcm9wLCAncGZ4Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUZXN0aW5nIERPTSBwcm9wZXJ0eSBlLmcuIE1vZGVybml6ci5wcmVmaXhlZCgncmVxdWVzdEFuaW1hdGlvbkZyYW1lJywgd2luZG93KSAvLyAnbW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lJ1xuICAgICAgICByZXR1cm4gdGVzdFByb3BzQWxsKHByb3AsIG9iaiwgZWxlbSk7XG4gICAgICB9XG4gICAgfTtcbiAgICAvKj4+cHJlZml4ZWQqL1xuXG5cbiAgICAvKj4+Y3NzY2xhc3NlcyovXG4gICAgLy8gUmVtb3ZlIFwibm8tanNcIiBjbGFzcyBmcm9tIDxodG1sPiBlbGVtZW50LCBpZiBpdCBleGlzdHM6XG4gICAgZG9jRWxlbWVudC5jbGFzc05hbWUgPSBkb2NFbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKC8oXnxcXHMpbm8tanMoXFxzfCQpLywgJyQxJDInKSArXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIG5ldyBjbGFzc2VzIHRvIHRoZSA8aHRtbD4gZWxlbWVudC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZW5hYmxlQ2xhc3NlcyA/ICcganMgJyArIGNsYXNzZXMuam9pbignICcpIDogJycpO1xuICAgIC8qPj5jc3NjbGFzc2VzKi9cblxuICAgIHJldHVybiBNb2Rlcm5penI7XG5cbn0pKHRoaXMsIHRoaXMuZG9jdW1lbnQpO1xuLyohIGpRdWVyeSB2Mi4xLjQgfCAoYykgMjAwNSwgMjAxNSBqUXVlcnkgRm91bmRhdGlvbiwgSW5jLiB8IGpxdWVyeS5vcmcvbGljZW5zZSAqL1xuIWZ1bmN0aW9uKGEsYil7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWEuZG9jdW1lbnQ/YihhLCEwKTpmdW5jdGlvbihhKXtpZighYS5kb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO3JldHVybiBiKGEpfTpiKGEpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLGZ1bmN0aW9uKGEsYil7dmFyIGM9W10sZD1jLnNsaWNlLGU9Yy5jb25jYXQsZj1jLnB1c2gsZz1jLmluZGV4T2YsaD17fSxpPWgudG9TdHJpbmcsaj1oLmhhc093blByb3BlcnR5LGs9e30sbD1hLmRvY3VtZW50LG09XCIyLjEuNFwiLG49ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IG4uZm4uaW5pdChhLGIpfSxvPS9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZyxwPS9eLW1zLS8scT0vLShbXFxkYS16XSkvZ2kscj1mdW5jdGlvbihhLGIpe3JldHVybiBiLnRvVXBwZXJDYXNlKCl9O24uZm49bi5wcm90b3R5cGU9e2pxdWVyeTptLGNvbnN0cnVjdG9yOm4sc2VsZWN0b3I6XCJcIixsZW5ndGg6MCx0b0FycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIGQuY2FsbCh0aGlzKX0sZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hPzA+YT90aGlzW2ErdGhpcy5sZW5ndGhdOnRoaXNbYV06ZC5jYWxsKHRoaXMpfSxwdXNoU3RhY2s6ZnVuY3Rpb24oYSl7dmFyIGI9bi5tZXJnZSh0aGlzLmNvbnN0cnVjdG9yKCksYSk7cmV0dXJuIGIucHJldk9iamVjdD10aGlzLGIuY29udGV4dD10aGlzLmNvbnRleHQsYn0sZWFjaDpmdW5jdGlvbihhLGIpe3JldHVybiBuLmVhY2godGhpcyxhLGIpfSxtYXA6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKG4ubWFwKHRoaXMsZnVuY3Rpb24oYixjKXtyZXR1cm4gYS5jYWxsKGIsYyxiKX0pKX0sc2xpY2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZC5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSxmaXJzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKDApfSxsYXN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoLTEpfSxlcTpmdW5jdGlvbihhKXt2YXIgYj10aGlzLmxlbmd0aCxjPSthKygwPmE/YjowKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soYz49MCYmYj5jP1t0aGlzW2NdXTpbXSl9LGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnByZXZPYmplY3R8fHRoaXMuY29uc3RydWN0b3IobnVsbCl9LHB1c2g6Zixzb3J0OmMuc29ydCxzcGxpY2U6Yy5zcGxpY2V9LG4uZXh0ZW5kPW4uZm4uZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZSxmLGc9YXJndW1lbnRzWzBdfHx7fSxoPTEsaT1hcmd1bWVudHMubGVuZ3RoLGo9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgZyYmKGo9ZyxnPWFyZ3VtZW50c1toXXx8e30saCsrKSxcIm9iamVjdFwiPT10eXBlb2YgZ3x8bi5pc0Z1bmN0aW9uKGcpfHwoZz17fSksaD09PWkmJihnPXRoaXMsaC0tKTtpPmg7aCsrKWlmKG51bGwhPShhPWFyZ3VtZW50c1toXSkpZm9yKGIgaW4gYSljPWdbYl0sZD1hW2JdLGchPT1kJiYoaiYmZCYmKG4uaXNQbGFpbk9iamVjdChkKXx8KGU9bi5pc0FycmF5KGQpKSk/KGU/KGU9ITEsZj1jJiZuLmlzQXJyYXkoYyk/YzpbXSk6Zj1jJiZuLmlzUGxhaW5PYmplY3QoYyk/Yzp7fSxnW2JdPW4uZXh0ZW5kKGosZixkKSk6dm9pZCAwIT09ZCYmKGdbYl09ZCkpO3JldHVybiBnfSxuLmV4dGVuZCh7ZXhwYW5kbzpcImpRdWVyeVwiKyhtK01hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLFwiXCIpLGlzUmVhZHk6ITAsZXJyb3I6ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKGEpfSxub29wOmZ1bmN0aW9uKCl7fSxpc0Z1bmN0aW9uOmZ1bmN0aW9uKGEpe3JldHVyblwiZnVuY3Rpb25cIj09PW4udHlwZShhKX0saXNBcnJheTpBcnJheS5pc0FycmF5LGlzV2luZG93OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hJiZhPT09YS53aW5kb3d9LGlzTnVtZXJpYzpmdW5jdGlvbihhKXtyZXR1cm4hbi5pc0FycmF5KGEpJiZhLXBhcnNlRmxvYXQoYSkrMT49MH0saXNQbGFpbk9iamVjdDpmdW5jdGlvbihhKXtyZXR1cm5cIm9iamVjdFwiIT09bi50eXBlKGEpfHxhLm5vZGVUeXBlfHxuLmlzV2luZG93KGEpPyExOmEuY29uc3RydWN0b3ImJiFqLmNhbGwoYS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsXCJpc1Byb3RvdHlwZU9mXCIpPyExOiEwfSxpc0VtcHR5T2JqZWN0OmZ1bmN0aW9uKGEpe3ZhciBiO2ZvcihiIGluIGEpcmV0dXJuITE7cmV0dXJuITB9LHR5cGU6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/YStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2hbaS5jYWxsKGEpXXx8XCJvYmplY3RcIjp0eXBlb2YgYX0sZ2xvYmFsRXZhbDpmdW5jdGlvbihhKXt2YXIgYixjPWV2YWw7YT1uLnRyaW0oYSksYSYmKDE9PT1hLmluZGV4T2YoXCJ1c2Ugc3RyaWN0XCIpPyhiPWwuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSxiLnRleHQ9YSxsLmhlYWQuYXBwZW5kQ2hpbGQoYikucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKSk6YyhhKSl9LGNhbWVsQ2FzZTpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKHAsXCJtcy1cIikucmVwbGFjZShxLHIpfSxub2RlTmFtZTpmdW5jdGlvbihhLGIpe3JldHVybiBhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1iLnRvTG93ZXJDYXNlKCl9LGVhY2g6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU9MCxmPWEubGVuZ3RoLGc9cyhhKTtpZihjKXtpZihnKXtmb3IoO2Y+ZTtlKyspaWYoZD1iLmFwcGx5KGFbZV0sYyksZD09PSExKWJyZWFrfWVsc2UgZm9yKGUgaW4gYSlpZihkPWIuYXBwbHkoYVtlXSxjKSxkPT09ITEpYnJlYWt9ZWxzZSBpZihnKXtmb3IoO2Y+ZTtlKyspaWYoZD1iLmNhbGwoYVtlXSxlLGFbZV0pLGQ9PT0hMSlicmVha31lbHNlIGZvcihlIGluIGEpaWYoZD1iLmNhbGwoYVtlXSxlLGFbZV0pLGQ9PT0hMSlicmVhaztyZXR1cm4gYX0sdHJpbTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9cIlwiOihhK1wiXCIpLnJlcGxhY2UobyxcIlwiKX0sbWFrZUFycmF5OmZ1bmN0aW9uKGEsYil7dmFyIGM9Ynx8W107cmV0dXJuIG51bGwhPWEmJihzKE9iamVjdChhKSk/bi5tZXJnZShjLFwic3RyaW5nXCI9PXR5cGVvZiBhP1thXTphKTpmLmNhbGwoYyxhKSksY30saW5BcnJheTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG51bGw9PWI/LTE6Zy5jYWxsKGIsYSxjKX0sbWVyZ2U6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9K2IubGVuZ3RoLGQ9MCxlPWEubGVuZ3RoO2M+ZDtkKyspYVtlKytdPWJbZF07cmV0dXJuIGEubGVuZ3RoPWUsYX0sZ3JlcDpmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkLGU9W10sZj0wLGc9YS5sZW5ndGgsaD0hYztnPmY7ZisrKWQ9IWIoYVtmXSxmKSxkIT09aCYmZS5wdXNoKGFbZl0pO3JldHVybiBlfSxtYXA6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGY9MCxnPWEubGVuZ3RoLGg9cyhhKSxpPVtdO2lmKGgpZm9yKDtnPmY7ZisrKWQ9YihhW2ZdLGYsYyksbnVsbCE9ZCYmaS5wdXNoKGQpO2Vsc2UgZm9yKGYgaW4gYSlkPWIoYVtmXSxmLGMpLG51bGwhPWQmJmkucHVzaChkKTtyZXR1cm4gZS5hcHBseShbXSxpKX0sZ3VpZDoxLHByb3h5OmZ1bmN0aW9uKGEsYil7dmFyIGMsZSxmO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBiJiYoYz1hW2JdLGI9YSxhPWMpLG4uaXNGdW5jdGlvbihhKT8oZT1kLmNhbGwoYXJndW1lbnRzLDIpLGY9ZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShifHx0aGlzLGUuY29uY2F0KGQuY2FsbChhcmd1bWVudHMpKSl9LGYuZ3VpZD1hLmd1aWQ9YS5ndWlkfHxuLmd1aWQrKyxmKTp2b2lkIDB9LG5vdzpEYXRlLm5vdyxzdXBwb3J0Omt9KSxuLmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEsYil7aFtcIltvYmplY3QgXCIrYitcIl1cIl09Yi50b0xvd2VyQ2FzZSgpfSk7ZnVuY3Rpb24gcyhhKXt2YXIgYj1cImxlbmd0aFwiaW4gYSYmYS5sZW5ndGgsYz1uLnR5cGUoYSk7cmV0dXJuXCJmdW5jdGlvblwiPT09Y3x8bi5pc1dpbmRvdyhhKT8hMToxPT09YS5ub2RlVHlwZSYmYj8hMDpcImFycmF5XCI9PT1jfHwwPT09Ynx8XCJudW1iZXJcIj09dHlwZW9mIGImJmI+MCYmYi0xIGluIGF9dmFyIHQ9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaSxqLGssbCxtLG4sbyxwLHEscixzLHQsdT1cInNpenpsZVwiKzEqbmV3IERhdGUsdj1hLmRvY3VtZW50LHc9MCx4PTAseT1oYSgpLHo9aGEoKSxBPWhhKCksQj1mdW5jdGlvbihhLGIpe3JldHVybiBhPT09YiYmKGw9ITApLDB9LEM9MTw8MzEsRD17fS5oYXNPd25Qcm9wZXJ0eSxFPVtdLEY9RS5wb3AsRz1FLnB1c2gsSD1FLnB1c2gsST1FLnNsaWNlLEo9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2Q+YztjKyspaWYoYVtjXT09PWIpcmV0dXJuIGM7cmV0dXJuLTF9LEs9XCJjaGVja2VkfHNlbGVjdGVkfGFzeW5jfGF1dG9mb2N1c3xhdXRvcGxheXxjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58aXNtYXB8bG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZFwiLEw9XCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLE09XCIoPzpcXFxcXFxcXC58W1xcXFx3LV18W15cXFxceDAwLVxcXFx4YTBdKStcIixOPU0ucmVwbGFjZShcIndcIixcIncjXCIpLE89XCJcXFxcW1wiK0wrXCIqKFwiK00rXCIpKD86XCIrTCtcIiooWypeJHwhfl0/PSlcIitMK1wiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIrTitcIikpfClcIitMK1wiKlxcXFxdXCIsUD1cIjooXCIrTStcIikoPzpcXFxcKCgoJygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwiKXwoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIrTytcIikqKXwuKilcXFxcKXwpXCIsUT1uZXcgUmVnRXhwKEwrXCIrXCIsXCJnXCIpLFI9bmV3IFJlZ0V4cChcIl5cIitMK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIitMK1wiKyRcIixcImdcIiksUz1uZXcgUmVnRXhwKFwiXlwiK0wrXCIqLFwiK0wrXCIqXCIpLFQ9bmV3IFJlZ0V4cChcIl5cIitMK1wiKihbPit+XXxcIitMK1wiKVwiK0wrXCIqXCIpLFU9bmV3IFJlZ0V4cChcIj1cIitMK1wiKihbXlxcXFxdJ1xcXCJdKj8pXCIrTCtcIipcXFxcXVwiLFwiZ1wiKSxWPW5ldyBSZWdFeHAoUCksVz1uZXcgUmVnRXhwKFwiXlwiK04rXCIkXCIpLFg9e0lEOm5ldyBSZWdFeHAoXCJeIyhcIitNK1wiKVwiKSxDTEFTUzpuZXcgUmVnRXhwKFwiXlxcXFwuKFwiK00rXCIpXCIpLFRBRzpuZXcgUmVnRXhwKFwiXihcIitNLnJlcGxhY2UoXCJ3XCIsXCJ3KlwiKStcIilcIiksQVRUUjpuZXcgUmVnRXhwKFwiXlwiK08pLFBTRVVETzpuZXcgUmVnRXhwKFwiXlwiK1ApLENISUxEOm5ldyBSZWdFeHAoXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiK0wrXCIqKGV2ZW58b2RkfCgoWystXXwpKFxcXFxkKilufClcIitMK1wiKig/OihbKy1dfClcIitMK1wiKihcXFxcZCspfCkpXCIrTCtcIipcXFxcKXwpXCIsXCJpXCIpLGJvb2w6bmV3IFJlZ0V4cChcIl4oPzpcIitLK1wiKSRcIixcImlcIiksbmVlZHNDb250ZXh0Om5ldyBSZWdFeHAoXCJeXCIrTCtcIipbPit+XXw6KGV2ZW58b2RkfGVxfGd0fGx0fG50aHxmaXJzdHxsYXN0KSg/OlxcXFwoXCIrTCtcIiooKD86LVxcXFxkKT9cXFxcZCopXCIrTCtcIipcXFxcKXwpKD89W14tXXwkKVwiLFwiaVwiKX0sWT0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFo9L15oXFxkJC9pLCQ9L15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LyxfPS9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLGFhPS9bK35dLyxiYT0vJ3xcXFxcL2csY2E9bmV3IFJlZ0V4cChcIlxcXFxcXFxcKFtcXFxcZGEtZl17MSw2fVwiK0wrXCI/fChcIitMK1wiKXwuKVwiLFwiaWdcIiksZGE9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVwiMHhcIitiLTY1NTM2O3JldHVybiBkIT09ZHx8Yz9iOjA+ZD9TdHJpbmcuZnJvbUNoYXJDb2RlKGQrNjU1MzYpOlN0cmluZy5mcm9tQ2hhckNvZGUoZD4+MTB8NTUyOTYsMTAyMyZkfDU2MzIwKX0sZWE9ZnVuY3Rpb24oKXttKCl9O3RyeXtILmFwcGx5KEU9SS5jYWxsKHYuY2hpbGROb2Rlcyksdi5jaGlsZE5vZGVzKSxFW3YuY2hpbGROb2Rlcy5sZW5ndGhdLm5vZGVUeXBlfWNhdGNoKGZhKXtIPXthcHBseTpFLmxlbmd0aD9mdW5jdGlvbihhLGIpe0cuYXBwbHkoYSxJLmNhbGwoYikpfTpmdW5jdGlvbihhLGIpe3ZhciBjPWEubGVuZ3RoLGQ9MDt3aGlsZShhW2MrK109YltkKytdKTthLmxlbmd0aD1jLTF9fX1mdW5jdGlvbiBnYShhLGIsZCxlKXt2YXIgZixoLGosayxsLG8scixzLHcseDtpZigoYj9iLm93bmVyRG9jdW1lbnR8fGI6dikhPT1uJiZtKGIpLGI9Ynx8bixkPWR8fFtdLGs9Yi5ub2RlVHlwZSxcInN0cmluZ1wiIT10eXBlb2YgYXx8IWF8fDEhPT1rJiY5IT09ayYmMTEhPT1rKXJldHVybiBkO2lmKCFlJiZwKXtpZigxMSE9PWsmJihmPV8uZXhlYyhhKSkpaWYoaj1mWzFdKXtpZig5PT09ayl7aWYoaD1iLmdldEVsZW1lbnRCeUlkKGopLCFofHwhaC5wYXJlbnROb2RlKXJldHVybiBkO2lmKGguaWQ9PT1qKXJldHVybiBkLnB1c2goaCksZH1lbHNlIGlmKGIub3duZXJEb2N1bWVudCYmKGg9Yi5vd25lckRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGopKSYmdChiLGgpJiZoLmlkPT09ailyZXR1cm4gZC5wdXNoKGgpLGR9ZWxzZXtpZihmWzJdKXJldHVybiBILmFwcGx5KGQsYi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKSksZDtpZigoaj1mWzNdKSYmYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXJldHVybiBILmFwcGx5KGQsYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGopKSxkfWlmKGMucXNhJiYoIXF8fCFxLnRlc3QoYSkpKXtpZihzPXI9dSx3PWIseD0xIT09ayYmYSwxPT09ayYmXCJvYmplY3RcIiE9PWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSl7bz1nKGEpLChyPWIuZ2V0QXR0cmlidXRlKFwiaWRcIikpP3M9ci5yZXBsYWNlKGJhLFwiXFxcXCQmXCIpOmIuc2V0QXR0cmlidXRlKFwiaWRcIixzKSxzPVwiW2lkPSdcIitzK1wiJ10gXCIsbD1vLmxlbmd0aDt3aGlsZShsLS0pb1tsXT1zK3JhKG9bbF0pO3c9YWEudGVzdChhKSYmcGEoYi5wYXJlbnROb2RlKXx8Yix4PW8uam9pbihcIixcIil9aWYoeCl0cnl7cmV0dXJuIEguYXBwbHkoZCx3LnF1ZXJ5U2VsZWN0b3JBbGwoeCkpLGR9Y2F0Y2goeSl7fWZpbmFsbHl7cnx8Yi5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKX19fXJldHVybiBpKGEucmVwbGFjZShSLFwiJDFcIiksYixkLGUpfWZ1bmN0aW9uIGhhKCl7dmFyIGE9W107ZnVuY3Rpb24gYihjLGUpe3JldHVybiBhLnB1c2goYytcIiBcIik+ZC5jYWNoZUxlbmd0aCYmZGVsZXRlIGJbYS5zaGlmdCgpXSxiW2MrXCIgXCJdPWV9cmV0dXJuIGJ9ZnVuY3Rpb24gaWEoYSl7cmV0dXJuIGFbdV09ITAsYX1mdW5jdGlvbiBqYShhKXt2YXIgYj1uLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dHJ5e3JldHVybiEhYShiKX1jYXRjaChjKXtyZXR1cm4hMX1maW5hbGx5e2IucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpLGI9bnVsbH19ZnVuY3Rpb24ga2EoYSxiKXt2YXIgYz1hLnNwbGl0KFwifFwiKSxlPWEubGVuZ3RoO3doaWxlKGUtLSlkLmF0dHJIYW5kbGVbY1tlXV09Yn1mdW5jdGlvbiBsYShhLGIpe3ZhciBjPWImJmEsZD1jJiYxPT09YS5ub2RlVHlwZSYmMT09PWIubm9kZVR5cGUmJih+Yi5zb3VyY2VJbmRleHx8QyktKH5hLnNvdXJjZUluZGV4fHxDKTtpZihkKXJldHVybiBkO2lmKGMpd2hpbGUoYz1jLm5leHRTaWJsaW5nKWlmKGM9PT1iKXJldHVybi0xO3JldHVybiBhPzE6LTF9ZnVuY3Rpb24gbWEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1jJiZiLnR5cGU9PT1hfX1mdW5jdGlvbiBuYShhKXtyZXR1cm4gZnVuY3Rpb24oYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybihcImlucHV0XCI9PT1jfHxcImJ1dHRvblwiPT09YykmJmIudHlwZT09PWF9fWZ1bmN0aW9uIG9hKGEpe3JldHVybiBpYShmdW5jdGlvbihiKXtyZXR1cm4gYj0rYixpYShmdW5jdGlvbihjLGQpe3ZhciBlLGY9YShbXSxjLmxlbmd0aCxiKSxnPWYubGVuZ3RoO3doaWxlKGctLSljW2U9ZltnXV0mJihjW2VdPSEoZFtlXT1jW2VdKSl9KX0pfWZ1bmN0aW9uIHBhKGEpe3JldHVybiBhJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRFbGVtZW50c0J5VGFnTmFtZSYmYX1jPWdhLnN1cHBvcnQ9e30sZj1nYS5pc1hNTD1mdW5jdGlvbihhKXt2YXIgYj1hJiYoYS5vd25lckRvY3VtZW50fHxhKS5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuIGI/XCJIVE1MXCIhPT1iLm5vZGVOYW1lOiExfSxtPWdhLnNldERvY3VtZW50PWZ1bmN0aW9uKGEpe3ZhciBiLGUsZz1hP2Eub3duZXJEb2N1bWVudHx8YTp2O3JldHVybiBnIT09biYmOT09PWcubm9kZVR5cGUmJmcuZG9jdW1lbnRFbGVtZW50PyhuPWcsbz1nLmRvY3VtZW50RWxlbWVudCxlPWcuZGVmYXVsdFZpZXcsZSYmZSE9PWUudG9wJiYoZS5hZGRFdmVudExpc3RlbmVyP2UuYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLGVhLCExKTplLmF0dGFjaEV2ZW50JiZlLmF0dGFjaEV2ZW50KFwib251bmxvYWRcIixlYSkpLHA9IWYoZyksYy5hdHRyaWJ1dGVzPWphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmNsYXNzTmFtZT1cImlcIiwhYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIil9KSxjLmdldEVsZW1lbnRzQnlUYWdOYW1lPWphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmFwcGVuZENoaWxkKGcuY3JlYXRlQ29tbWVudChcIlwiKSksIWEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aH0pLGMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZT0kLnRlc3QoZy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSxjLmdldEJ5SWQ9amEoZnVuY3Rpb24oYSl7cmV0dXJuIG8uYXBwZW5kQ2hpbGQoYSkuaWQ9dSwhZy5nZXRFbGVtZW50c0J5TmFtZXx8IWcuZ2V0RWxlbWVudHNCeU5hbWUodSkubGVuZ3RofSksYy5nZXRCeUlkPyhkLmZpbmQuSUQ9ZnVuY3Rpb24oYSxiKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50QnlJZCYmcCl7dmFyIGM9Yi5nZXRFbGVtZW50QnlJZChhKTtyZXR1cm4gYyYmYy5wYXJlbnROb2RlP1tjXTpbXX19LGQuZmlsdGVyLklEPWZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShjYSxkYSk7cmV0dXJuIGZ1bmN0aW9uKGEpe3JldHVybiBhLmdldEF0dHJpYnV0ZShcImlkXCIpPT09Yn19KTooZGVsZXRlIGQuZmluZC5JRCxkLmZpbHRlci5JRD1mdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoY2EsZGEpO3JldHVybiBmdW5jdGlvbihhKXt2YXIgYz1cInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRBdHRyaWJ1dGVOb2RlJiZhLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtyZXR1cm4gYyYmYy52YWx1ZT09PWJ9fSksZC5maW5kLlRBRz1jLmdldEVsZW1lbnRzQnlUYWdOYW1lP2Z1bmN0aW9uKGEsYil7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudHNCeVRhZ05hbWU/Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKTpjLnFzYT9iLnF1ZXJ5U2VsZWN0b3JBbGwoYSk6dm9pZCAwfTpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT0wLGY9Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKTtpZihcIipcIj09PWEpe3doaWxlKGM9ZltlKytdKTE9PT1jLm5vZGVUeXBlJiZkLnB1c2goYyk7cmV0dXJuIGR9cmV0dXJuIGZ9LGQuZmluZC5DTEFTUz1jLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmZ1bmN0aW9uKGEsYil7cmV0dXJuIHA/Yi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGEpOnZvaWQgMH0scj1bXSxxPVtdLChjLnFzYT0kLnRlc3QoZy5xdWVyeVNlbGVjdG9yQWxsKSkmJihqYShmdW5jdGlvbihhKXtvLmFwcGVuZENoaWxkKGEpLmlubmVySFRNTD1cIjxhIGlkPSdcIit1K1wiJz48L2E+PHNlbGVjdCBpZD0nXCIrdStcIi1cXGZdJyBtc2FsbG93Y2FwdHVyZT0nJz48b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiLGEucXVlcnlTZWxlY3RvckFsbChcIlttc2FsbG93Y2FwdHVyZV49JyddXCIpLmxlbmd0aCYmcS5wdXNoKFwiWypeJF09XCIrTCtcIiooPzonJ3xcXFwiXFxcIilcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGh8fHEucHVzaChcIlxcXFxbXCIrTCtcIiooPzp2YWx1ZXxcIitLK1wiKVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWR+PVwiK3UrXCItXVwiKS5sZW5ndGh8fHEucHVzaChcIn49XCIpLGEucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aHx8cS5wdXNoKFwiOmNoZWNrZWRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiYSNcIit1K1wiKypcIikubGVuZ3RofHxxLnB1c2goXCIuIy4rWyt+XVwiKX0pLGphKGZ1bmN0aW9uKGEpe3ZhciBiPWcuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2Iuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiaGlkZGVuXCIpLGEuYXBwZW5kQ2hpbGQoYikuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiRFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kXVwiKS5sZW5ndGgmJnEucHVzaChcIm5hbWVcIitMK1wiKlsqXiR8IX5dPz1cIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RofHxxLnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIiosOnhcIikscS5wdXNoKFwiLC4qOlwiKX0pKSwoYy5tYXRjaGVzU2VsZWN0b3I9JC50ZXN0KHM9by5tYXRjaGVzfHxvLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8by5tb3pNYXRjaGVzU2VsZWN0b3J8fG8ub01hdGNoZXNTZWxlY3Rvcnx8by5tc01hdGNoZXNTZWxlY3RvcikpJiZqYShmdW5jdGlvbihhKXtjLmRpc2Nvbm5lY3RlZE1hdGNoPXMuY2FsbChhLFwiZGl2XCIpLHMuY2FsbChhLFwiW3MhPScnXTp4XCIpLHIucHVzaChcIiE9XCIsUCl9KSxxPXEubGVuZ3RoJiZuZXcgUmVnRXhwKHEuam9pbihcInxcIikpLHI9ci5sZW5ndGgmJm5ldyBSZWdFeHAoci5qb2luKFwifFwiKSksYj0kLnRlc3Qoby5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiksdD1ifHwkLnRlc3Qoby5jb250YWlucyk/ZnVuY3Rpb24oYSxiKXt2YXIgYz05PT09YS5ub2RlVHlwZT9hLmRvY3VtZW50RWxlbWVudDphLGQ9YiYmYi5wYXJlbnROb2RlO3JldHVybiBhPT09ZHx8ISghZHx8MSE9PWQubm9kZVR5cGV8fCEoYy5jb250YWlucz9jLmNvbnRhaW5zKGQpOmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJjE2JmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZCkpKX06ZnVuY3Rpb24oYSxiKXtpZihiKXdoaWxlKGI9Yi5wYXJlbnROb2RlKWlmKGI9PT1hKXJldHVybiEwO3JldHVybiExfSxCPWI/ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4gbD0hMCwwO3ZhciBkPSFhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uLSFiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO3JldHVybiBkP2Q6KGQ9KGEub3duZXJEb2N1bWVudHx8YSk9PT0oYi5vd25lckRvY3VtZW50fHxiKT9hLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpOjEsMSZkfHwhYy5zb3J0RGV0YWNoZWQmJmIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYSk9PT1kP2E9PT1nfHxhLm93bmVyRG9jdW1lbnQ9PT12JiZ0KHYsYSk/LTE6Yj09PWd8fGIub3duZXJEb2N1bWVudD09PXYmJnQodixiKT8xOms/SihrLGEpLUooayxiKTowOjQmZD8tMToxKX06ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4gbD0hMCwwO3ZhciBjLGQ9MCxlPWEucGFyZW50Tm9kZSxmPWIucGFyZW50Tm9kZSxoPVthXSxpPVtiXTtpZighZXx8IWYpcmV0dXJuIGE9PT1nPy0xOmI9PT1nPzE6ZT8tMTpmPzE6az9KKGssYSktSihrLGIpOjA7aWYoZT09PWYpcmV0dXJuIGxhKGEsYik7Yz1hO3doaWxlKGM9Yy5wYXJlbnROb2RlKWgudW5zaGlmdChjKTtjPWI7d2hpbGUoYz1jLnBhcmVudE5vZGUpaS51bnNoaWZ0KGMpO3doaWxlKGhbZF09PT1pW2RdKWQrKztyZXR1cm4gZD9sYShoW2RdLGlbZF0pOmhbZF09PT12Py0xOmlbZF09PT12PzE6MH0sZyk6bn0sZ2EubWF0Y2hlcz1mdW5jdGlvbihhLGIpe3JldHVybiBnYShhLG51bGwsbnVsbCxiKX0sZ2EubWF0Y2hlc1NlbGVjdG9yPWZ1bmN0aW9uKGEsYil7aWYoKGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpLGI9Yi5yZXBsYWNlKFUsXCI9JyQxJ11cIiksISghYy5tYXRjaGVzU2VsZWN0b3J8fCFwfHxyJiZyLnRlc3QoYil8fHEmJnEudGVzdChiKSkpdHJ5e3ZhciBkPXMuY2FsbChhLGIpO2lmKGR8fGMuZGlzY29ubmVjdGVkTWF0Y2h8fGEuZG9jdW1lbnQmJjExIT09YS5kb2N1bWVudC5ub2RlVHlwZSlyZXR1cm4gZH1jYXRjaChlKXt9cmV0dXJuIGdhKGIsbixudWxsLFthXSkubGVuZ3RoPjB9LGdhLmNvbnRhaW5zPWZ1bmN0aW9uKGEsYil7cmV0dXJuKGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpLHQoYSxiKX0sZ2EuYXR0cj1mdW5jdGlvbihhLGIpeyhhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKTt2YXIgZT1kLmF0dHJIYW5kbGVbYi50b0xvd2VyQ2FzZSgpXSxmPWUmJkQuY2FsbChkLmF0dHJIYW5kbGUsYi50b0xvd2VyQ2FzZSgpKT9lKGEsYiwhcCk6dm9pZCAwO3JldHVybiB2b2lkIDAhPT1mP2Y6Yy5hdHRyaWJ1dGVzfHwhcD9hLmdldEF0dHJpYnV0ZShiKTooZj1hLmdldEF0dHJpYnV0ZU5vZGUoYikpJiZmLnNwZWNpZmllZD9mLnZhbHVlOm51bGx9LGdhLmVycm9yPWZ1bmN0aW9uKGEpe3Rocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciwgdW5yZWNvZ25pemVkIGV4cHJlc3Npb246IFwiK2EpfSxnYS51bmlxdWVTb3J0PWZ1bmN0aW9uKGEpe3ZhciBiLGQ9W10sZT0wLGY9MDtpZihsPSFjLmRldGVjdER1cGxpY2F0ZXMsaz0hYy5zb3J0U3RhYmxlJiZhLnNsaWNlKDApLGEuc29ydChCKSxsKXt3aGlsZShiPWFbZisrXSliPT09YVtmXSYmKGU9ZC5wdXNoKGYpKTt3aGlsZShlLS0pYS5zcGxpY2UoZFtlXSwxKX1yZXR1cm4gaz1udWxsLGF9LGU9Z2EuZ2V0VGV4dD1mdW5jdGlvbihhKXt2YXIgYixjPVwiXCIsZD0wLGY9YS5ub2RlVHlwZTtpZihmKXtpZigxPT09Znx8OT09PWZ8fDExPT09Zil7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEudGV4dENvbnRlbnQpcmV0dXJuIGEudGV4dENvbnRlbnQ7Zm9yKGE9YS5maXJzdENoaWxkO2E7YT1hLm5leHRTaWJsaW5nKWMrPWUoYSl9ZWxzZSBpZigzPT09Znx8ND09PWYpcmV0dXJuIGEubm9kZVZhbHVlfWVsc2Ugd2hpbGUoYj1hW2QrK10pYys9ZShiKTtyZXR1cm4gY30sZD1nYS5zZWxlY3RvcnM9e2NhY2hlTGVuZ3RoOjUwLGNyZWF0ZVBzZXVkbzppYSxtYXRjaDpYLGF0dHJIYW5kbGU6e30sZmluZDp7fSxyZWxhdGl2ZTp7XCI+XCI6e2RpcjpcInBhcmVudE5vZGVcIixmaXJzdDohMH0sXCIgXCI6e2RpcjpcInBhcmVudE5vZGVcIn0sXCIrXCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wiLGZpcnN0OiEwfSxcIn5cIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCJ9fSxwcmVGaWx0ZXI6e0FUVFI6ZnVuY3Rpb24oYSl7cmV0dXJuIGFbMV09YVsxXS5yZXBsYWNlKGNhLGRhKSxhWzNdPShhWzNdfHxhWzRdfHxhWzVdfHxcIlwiKS5yZXBsYWNlKGNhLGRhKSxcIn49XCI9PT1hWzJdJiYoYVszXT1cIiBcIithWzNdK1wiIFwiKSxhLnNsaWNlKDAsNCl9LENISUxEOmZ1bmN0aW9uKGEpe3JldHVybiBhWzFdPWFbMV0udG9Mb3dlckNhc2UoKSxcIm50aFwiPT09YVsxXS5zbGljZSgwLDMpPyhhWzNdfHxnYS5lcnJvcihhWzBdKSxhWzRdPSsoYVs0XT9hWzVdKyhhWzZdfHwxKToyKihcImV2ZW5cIj09PWFbM118fFwib2RkXCI9PT1hWzNdKSksYVs1XT0rKGFbN10rYVs4XXx8XCJvZGRcIj09PWFbM10pKTphWzNdJiZnYS5lcnJvcihhWzBdKSxhfSxQU0VVRE86ZnVuY3Rpb24oYSl7dmFyIGIsYz0hYVs2XSYmYVsyXTtyZXR1cm4gWC5DSElMRC50ZXN0KGFbMF0pP251bGw6KGFbM10/YVsyXT1hWzRdfHxhWzVdfHxcIlwiOmMmJlYudGVzdChjKSYmKGI9ZyhjLCEwKSkmJihiPWMuaW5kZXhPZihcIilcIixjLmxlbmd0aC1iKS1jLmxlbmd0aCkmJihhWzBdPWFbMF0uc2xpY2UoMCxiKSxhWzJdPWMuc2xpY2UoMCxiKSksYS5zbGljZSgwLDMpKX19LGZpbHRlcjp7VEFHOmZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShjYSxkYSkudG9Mb3dlckNhc2UoKTtyZXR1cm5cIipcIj09PWE/ZnVuY3Rpb24oKXtyZXR1cm4hMH06ZnVuY3Rpb24oYSl7cmV0dXJuIGEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWJ9fSxDTEFTUzpmdW5jdGlvbihhKXt2YXIgYj15W2ErXCIgXCJdO3JldHVybiBifHwoYj1uZXcgUmVnRXhwKFwiKF58XCIrTCtcIilcIithK1wiKFwiK0wrXCJ8JClcIikpJiZ5KGEsZnVuY3Rpb24oYSl7cmV0dXJuIGIudGVzdChcInN0cmluZ1wiPT10eXBlb2YgYS5jbGFzc05hbWUmJmEuY2xhc3NOYW1lfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRBdHRyaWJ1dGUmJmEuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpfSl9LEFUVFI6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBmdW5jdGlvbihkKXt2YXIgZT1nYS5hdHRyKGQsYSk7cmV0dXJuIG51bGw9PWU/XCIhPVwiPT09YjpiPyhlKz1cIlwiLFwiPVwiPT09Yj9lPT09YzpcIiE9XCI9PT1iP2UhPT1jOlwiXj1cIj09PWI/YyYmMD09PWUuaW5kZXhPZihjKTpcIio9XCI9PT1iP2MmJmUuaW5kZXhPZihjKT4tMTpcIiQ9XCI9PT1iP2MmJmUuc2xpY2UoLWMubGVuZ3RoKT09PWM6XCJ+PVwiPT09Yj8oXCIgXCIrZS5yZXBsYWNlKFEsXCIgXCIpK1wiIFwiKS5pbmRleE9mKGMpPi0xOlwifD1cIj09PWI/ZT09PWN8fGUuc2xpY2UoMCxjLmxlbmd0aCsxKT09PWMrXCItXCI6ITEpOiEwfX0sQ0hJTEQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj1cIm50aFwiIT09YS5zbGljZSgwLDMpLGc9XCJsYXN0XCIhPT1hLnNsaWNlKC00KSxoPVwib2YtdHlwZVwiPT09YjtyZXR1cm4gMT09PWQmJjA9PT1lP2Z1bmN0aW9uKGEpe3JldHVybiEhYS5wYXJlbnROb2RlfTpmdW5jdGlvbihiLGMsaSl7dmFyIGosayxsLG0sbixvLHA9ZiE9PWc/XCJuZXh0U2libGluZ1wiOlwicHJldmlvdXNTaWJsaW5nXCIscT1iLnBhcmVudE5vZGUscj1oJiZiLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkscz0haSYmIWg7aWYocSl7aWYoZil7d2hpbGUocCl7bD1iO3doaWxlKGw9bFtwXSlpZihoP2wubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXI6MT09PWwubm9kZVR5cGUpcmV0dXJuITE7bz1wPVwib25seVwiPT09YSYmIW8mJlwibmV4dFNpYmxpbmdcIn1yZXR1cm4hMH1pZihvPVtnP3EuZmlyc3RDaGlsZDpxLmxhc3RDaGlsZF0sZyYmcyl7az1xW3VdfHwocVt1XT17fSksaj1rW2FdfHxbXSxuPWpbMF09PT13JiZqWzFdLG09alswXT09PXcmJmpbMl0sbD1uJiZxLmNoaWxkTm9kZXNbbl07d2hpbGUobD0rK24mJmwmJmxbcF18fChtPW49MCl8fG8ucG9wKCkpaWYoMT09PWwubm9kZVR5cGUmJisrbSYmbD09PWIpe2tbYV09W3csbixtXTticmVha319ZWxzZSBpZihzJiYoaj0oYlt1XXx8KGJbdV09e30pKVthXSkmJmpbMF09PT13KW09alsxXTtlbHNlIHdoaWxlKGw9KytuJiZsJiZsW3BdfHwobT1uPTApfHxvLnBvcCgpKWlmKChoP2wubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXI6MT09PWwubm9kZVR5cGUpJiYrK20mJihzJiYoKGxbdV18fChsW3VdPXt9KSlbYV09W3csbV0pLGw9PT1iKSlicmVhaztyZXR1cm4gbS09ZSxtPT09ZHx8bSVkPT09MCYmbS9kPj0wfX19LFBTRVVETzpmdW5jdGlvbihhLGIpe3ZhciBjLGU9ZC5wc2V1ZG9zW2FdfHxkLnNldEZpbHRlcnNbYS50b0xvd2VyQ2FzZSgpXXx8Z2EuZXJyb3IoXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiK2EpO3JldHVybiBlW3VdP2UoYik6ZS5sZW5ndGg+MT8oYz1bYSxhLFwiXCIsYl0sZC5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KGEudG9Mb3dlckNhc2UoKSk/aWEoZnVuY3Rpb24oYSxjKXt2YXIgZCxmPWUoYSxiKSxnPWYubGVuZ3RoO3doaWxlKGctLSlkPUooYSxmW2ddKSxhW2RdPSEoY1tkXT1mW2ddKX0pOmZ1bmN0aW9uKGEpe3JldHVybiBlKGEsMCxjKX0pOmV9fSxwc2V1ZG9zOntub3Q6aWEoZnVuY3Rpb24oYSl7dmFyIGI9W10sYz1bXSxkPWgoYS5yZXBsYWNlKFIsXCIkMVwiKSk7cmV0dXJuIGRbdV0/aWEoZnVuY3Rpb24oYSxiLGMsZSl7dmFyIGYsZz1kKGEsbnVsbCxlLFtdKSxoPWEubGVuZ3RoO3doaWxlKGgtLSkoZj1nW2hdKSYmKGFbaF09IShiW2hdPWYpKX0pOmZ1bmN0aW9uKGEsZSxmKXtyZXR1cm4gYlswXT1hLGQoYixudWxsLGYsYyksYlswXT1udWxsLCFjLnBvcCgpfX0pLGhhczppYShmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuIGdhKGEsYikubGVuZ3RoPjB9fSksY29udGFpbnM6aWEoZnVuY3Rpb24oYSl7cmV0dXJuIGE9YS5yZXBsYWNlKGNhLGRhKSxmdW5jdGlvbihiKXtyZXR1cm4oYi50ZXh0Q29udGVudHx8Yi5pbm5lclRleHR8fGUoYikpLmluZGV4T2YoYSk+LTF9fSksbGFuZzppYShmdW5jdGlvbihhKXtyZXR1cm4gVy50ZXN0KGF8fFwiXCIpfHxnYS5lcnJvcihcInVuc3VwcG9ydGVkIGxhbmc6IFwiK2EpLGE9YS5yZXBsYWNlKGNhLGRhKS50b0xvd2VyQ2FzZSgpLGZ1bmN0aW9uKGIpe3ZhciBjO2RvIGlmKGM9cD9iLmxhbmc6Yi5nZXRBdHRyaWJ1dGUoXCJ4bWw6bGFuZ1wiKXx8Yi5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpKXJldHVybiBjPWMudG9Mb3dlckNhc2UoKSxjPT09YXx8MD09PWMuaW5kZXhPZihhK1wiLVwiKTt3aGlsZSgoYj1iLnBhcmVudE5vZGUpJiYxPT09Yi5ub2RlVHlwZSk7cmV0dXJuITF9fSksdGFyZ2V0OmZ1bmN0aW9uKGIpe3ZhciBjPWEubG9jYXRpb24mJmEubG9jYXRpb24uaGFzaDtyZXR1cm4gYyYmYy5zbGljZSgxKT09PWIuaWR9LHJvb3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1vfSxmb2N1czpmdW5jdGlvbihhKXtyZXR1cm4gYT09PW4uYWN0aXZlRWxlbWVudCYmKCFuLmhhc0ZvY3VzfHxuLmhhc0ZvY3VzKCkpJiYhIShhLnR5cGV8fGEuaHJlZnx8fmEudGFiSW5kZXgpfSxlbmFibGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLmRpc2FibGVkPT09ITF9LGRpc2FibGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLmRpc2FibGVkPT09ITB9LGNoZWNrZWQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWImJiEhYS5jaGVja2VkfHxcIm9wdGlvblwiPT09YiYmISFhLnNlbGVjdGVkfSxzZWxlY3RlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5wYXJlbnROb2RlJiZhLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxhLnNlbGVjdGVkPT09ITB9LGVtcHR5OmZ1bmN0aW9uKGEpe2ZvcihhPWEuZmlyc3RDaGlsZDthO2E9YS5uZXh0U2libGluZylpZihhLm5vZGVUeXBlPDYpcmV0dXJuITE7cmV0dXJuITB9LHBhcmVudDpmdW5jdGlvbihhKXtyZXR1cm4hZC5wc2V1ZG9zLmVtcHR5KGEpfSxoZWFkZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIFoudGVzdChhLm5vZGVOYW1lKX0saW5wdXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIFkudGVzdChhLm5vZGVOYW1lKX0sYnV0dG9uOmZ1bmN0aW9uKGEpe3ZhciBiPWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iJiZcImJ1dHRvblwiPT09YS50eXBlfHxcImJ1dHRvblwiPT09Yn0sdGV4dDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm5cImlucHV0XCI9PT1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJlwidGV4dFwiPT09YS50eXBlJiYobnVsbD09KGI9YS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKXx8XCJ0ZXh0XCI9PT1iLnRvTG93ZXJDYXNlKCkpfSxmaXJzdDpvYShmdW5jdGlvbigpe3JldHVyblswXX0pLGxhc3Q6b2EoZnVuY3Rpb24oYSxiKXtyZXR1cm5bYi0xXX0pLGVxOm9hKGZ1bmN0aW9uKGEsYixjKXtyZXR1cm5bMD5jP2MrYjpjXX0pLGV2ZW46b2EoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MDtiPmM7Yys9MilhLnB1c2goYyk7cmV0dXJuIGF9KSxvZGQ6b2EoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MTtiPmM7Yys9MilhLnB1c2goYyk7cmV0dXJuIGF9KSxsdDpvYShmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPTA+Yz9jK2I6YzstLWQ+PTA7KWEucHVzaChkKTtyZXR1cm4gYX0pLGd0Om9hKGZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9MD5jP2MrYjpjOysrZDxiOylhLnB1c2goZCk7cmV0dXJuIGF9KX19LGQucHNldWRvcy5udGg9ZC5wc2V1ZG9zLmVxO2ZvcihiIGlue3JhZGlvOiEwLGNoZWNrYm94OiEwLGZpbGU6ITAscGFzc3dvcmQ6ITAsaW1hZ2U6ITB9KWQucHNldWRvc1tiXT1tYShiKTtmb3IoYiBpbntzdWJtaXQ6ITAscmVzZXQ6ITB9KWQucHNldWRvc1tiXT1uYShiKTtmdW5jdGlvbiBxYSgpe31xYS5wcm90b3R5cGU9ZC5maWx0ZXJzPWQucHNldWRvcyxkLnNldEZpbHRlcnM9bmV3IHFhLGc9Z2EudG9rZW5pemU9ZnVuY3Rpb24oYSxiKXt2YXIgYyxlLGYsZyxoLGksaixrPXpbYStcIiBcIl07aWYoaylyZXR1cm4gYj8wOmsuc2xpY2UoMCk7aD1hLGk9W10saj1kLnByZUZpbHRlcjt3aGlsZShoKXsoIWN8fChlPVMuZXhlYyhoKSkpJiYoZSYmKGg9aC5zbGljZShlWzBdLmxlbmd0aCl8fGgpLGkucHVzaChmPVtdKSksYz0hMSwoZT1ULmV4ZWMoaCkpJiYoYz1lLnNoaWZ0KCksZi5wdXNoKHt2YWx1ZTpjLHR5cGU6ZVswXS5yZXBsYWNlKFIsXCIgXCIpfSksaD1oLnNsaWNlKGMubGVuZ3RoKSk7Zm9yKGcgaW4gZC5maWx0ZXIpIShlPVhbZ10uZXhlYyhoKSl8fGpbZ10mJiEoZT1qW2ddKGUpKXx8KGM9ZS5zaGlmdCgpLGYucHVzaCh7dmFsdWU6Yyx0eXBlOmcsbWF0Y2hlczplfSksaD1oLnNsaWNlKGMubGVuZ3RoKSk7aWYoIWMpYnJlYWt9cmV0dXJuIGI/aC5sZW5ndGg6aD9nYS5lcnJvcihhKTp6KGEsaSkuc2xpY2UoMCl9O2Z1bmN0aW9uIHJhKGEpe2Zvcih2YXIgYj0wLGM9YS5sZW5ndGgsZD1cIlwiO2M+YjtiKyspZCs9YVtiXS52YWx1ZTtyZXR1cm4gZH1mdW5jdGlvbiBzYShhLGIsYyl7dmFyIGQ9Yi5kaXIsZT1jJiZcInBhcmVudE5vZGVcIj09PWQsZj14Kys7cmV0dXJuIGIuZmlyc3Q/ZnVuY3Rpb24oYixjLGYpe3doaWxlKGI9YltkXSlpZigxPT09Yi5ub2RlVHlwZXx8ZSlyZXR1cm4gYShiLGMsZil9OmZ1bmN0aW9uKGIsYyxnKXt2YXIgaCxpLGo9W3csZl07aWYoZyl7d2hpbGUoYj1iW2RdKWlmKCgxPT09Yi5ub2RlVHlwZXx8ZSkmJmEoYixjLGcpKXJldHVybiEwfWVsc2Ugd2hpbGUoYj1iW2RdKWlmKDE9PT1iLm5vZGVUeXBlfHxlKXtpZihpPWJbdV18fChiW3VdPXt9KSwoaD1pW2RdKSYmaFswXT09PXcmJmhbMV09PT1mKXJldHVybiBqWzJdPWhbMl07aWYoaVtkXT1qLGpbMl09YShiLGMsZykpcmV0dXJuITB9fX1mdW5jdGlvbiB0YShhKXtyZXR1cm4gYS5sZW5ndGg+MT9mdW5jdGlvbihiLGMsZCl7dmFyIGU9YS5sZW5ndGg7d2hpbGUoZS0tKWlmKCFhW2VdKGIsYyxkKSlyZXR1cm4hMTtyZXR1cm4hMH06YVswXX1mdW5jdGlvbiB1YShhLGIsYyl7Zm9yKHZhciBkPTAsZT1iLmxlbmd0aDtlPmQ7ZCsrKWdhKGEsYltkXSxjKTtyZXR1cm4gY31mdW5jdGlvbiB2YShhLGIsYyxkLGUpe2Zvcih2YXIgZixnPVtdLGg9MCxpPWEubGVuZ3RoLGo9bnVsbCE9YjtpPmg7aCsrKShmPWFbaF0pJiYoIWN8fGMoZixkLGUpKSYmKGcucHVzaChmKSxqJiZiLnB1c2goaCkpO3JldHVybiBnfWZ1bmN0aW9uIHdhKGEsYixjLGQsZSxmKXtyZXR1cm4gZCYmIWRbdV0mJihkPXdhKGQpKSxlJiYhZVt1XSYmKGU9d2EoZSxmKSksaWEoZnVuY3Rpb24oZixnLGgsaSl7dmFyIGosayxsLG09W10sbj1bXSxvPWcubGVuZ3RoLHA9Znx8dWEoYnx8XCIqXCIsaC5ub2RlVHlwZT9baF06aCxbXSkscT0hYXx8IWYmJmI/cDp2YShwLG0sYSxoLGkpLHI9Yz9lfHwoZj9hOm98fGQpP1tdOmc6cTtpZihjJiZjKHEscixoLGkpLGQpe2o9dmEocixuKSxkKGosW10saCxpKSxrPWoubGVuZ3RoO3doaWxlKGstLSkobD1qW2tdKSYmKHJbbltrXV09IShxW25ba11dPWwpKX1pZihmKXtpZihlfHxhKXtpZihlKXtqPVtdLGs9ci5sZW5ndGg7d2hpbGUoay0tKShsPXJba10pJiZqLnB1c2gocVtrXT1sKTtlKG51bGwscj1bXSxqLGkpfWs9ci5sZW5ndGg7d2hpbGUoay0tKShsPXJba10pJiYoaj1lP0ooZixsKTptW2tdKT4tMSYmKGZbal09IShnW2pdPWwpKX19ZWxzZSByPXZhKHI9PT1nP3Iuc3BsaWNlKG8sci5sZW5ndGgpOnIpLGU/ZShudWxsLGcscixpKTpILmFwcGx5KGcscil9KX1mdW5jdGlvbiB4YShhKXtmb3IodmFyIGIsYyxlLGY9YS5sZW5ndGgsZz1kLnJlbGF0aXZlW2FbMF0udHlwZV0saD1nfHxkLnJlbGF0aXZlW1wiIFwiXSxpPWc/MTowLGs9c2EoZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1ifSxoLCEwKSxsPXNhKGZ1bmN0aW9uKGEpe3JldHVybiBKKGIsYSk+LTF9LGgsITApLG09W2Z1bmN0aW9uKGEsYyxkKXt2YXIgZT0hZyYmKGR8fGMhPT1qKXx8KChiPWMpLm5vZGVUeXBlP2soYSxjLGQpOmwoYSxjLGQpKTtyZXR1cm4gYj1udWxsLGV9XTtmPmk7aSsrKWlmKGM9ZC5yZWxhdGl2ZVthW2ldLnR5cGVdKW09W3NhKHRhKG0pLGMpXTtlbHNle2lmKGM9ZC5maWx0ZXJbYVtpXS50eXBlXS5hcHBseShudWxsLGFbaV0ubWF0Y2hlcyksY1t1XSl7Zm9yKGU9KytpO2Y+ZTtlKyspaWYoZC5yZWxhdGl2ZVthW2VdLnR5cGVdKWJyZWFrO3JldHVybiB3YShpPjEmJnRhKG0pLGk+MSYmcmEoYS5zbGljZSgwLGktMSkuY29uY2F0KHt2YWx1ZTpcIiBcIj09PWFbaS0yXS50eXBlP1wiKlwiOlwiXCJ9KSkucmVwbGFjZShSLFwiJDFcIiksYyxlPmkmJnhhKGEuc2xpY2UoaSxlKSksZj5lJiZ4YShhPWEuc2xpY2UoZSkpLGY+ZSYmcmEoYSkpfW0ucHVzaChjKX1yZXR1cm4gdGEobSl9ZnVuY3Rpb24geWEoYSxiKXt2YXIgYz1iLmxlbmd0aD4wLGU9YS5sZW5ndGg+MCxmPWZ1bmN0aW9uKGYsZyxoLGksayl7dmFyIGwsbSxvLHA9MCxxPVwiMFwiLHI9ZiYmW10scz1bXSx0PWosdT1mfHxlJiZkLmZpbmQuVEFHKFwiKlwiLGspLHY9dys9bnVsbD09dD8xOk1hdGgucmFuZG9tKCl8fC4xLHg9dS5sZW5ndGg7Zm9yKGsmJihqPWchPT1uJiZnKTtxIT09eCYmbnVsbCE9KGw9dVtxXSk7cSsrKXtpZihlJiZsKXttPTA7d2hpbGUobz1hW20rK10paWYobyhsLGcsaCkpe2kucHVzaChsKTticmVha31rJiYodz12KX1jJiYoKGw9IW8mJmwpJiZwLS0sZiYmci5wdXNoKGwpKX1pZihwKz1xLGMmJnEhPT1wKXttPTA7d2hpbGUobz1iW20rK10pbyhyLHMsZyxoKTtpZihmKXtpZihwPjApd2hpbGUocS0tKXJbcV18fHNbcV18fChzW3FdPUYuY2FsbChpKSk7cz12YShzKX1ILmFwcGx5KGkscyksayYmIWYmJnMubGVuZ3RoPjAmJnArYi5sZW5ndGg+MSYmZ2EudW5pcXVlU29ydChpKX1yZXR1cm4gayYmKHc9dixqPXQpLHJ9O3JldHVybiBjP2lhKGYpOmZ9cmV0dXJuIGg9Z2EuY29tcGlsZT1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT1bXSxmPUFbYStcIiBcIl07aWYoIWYpe2J8fChiPWcoYSkpLGM9Yi5sZW5ndGg7d2hpbGUoYy0tKWY9eGEoYltjXSksZlt1XT9kLnB1c2goZik6ZS5wdXNoKGYpO2Y9QShhLHlhKGUsZCkpLGYuc2VsZWN0b3I9YX1yZXR1cm4gZn0saT1nYS5zZWxlY3Q9ZnVuY3Rpb24oYSxiLGUsZil7dmFyIGksaixrLGwsbSxuPVwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJmEsbz0hZiYmZyhhPW4uc2VsZWN0b3J8fGEpO2lmKGU9ZXx8W10sMT09PW8ubGVuZ3RoKXtpZihqPW9bMF09b1swXS5zbGljZSgwKSxqLmxlbmd0aD4yJiZcIklEXCI9PT0oaz1qWzBdKS50eXBlJiZjLmdldEJ5SWQmJjk9PT1iLm5vZGVUeXBlJiZwJiZkLnJlbGF0aXZlW2pbMV0udHlwZV0pe2lmKGI9KGQuZmluZC5JRChrLm1hdGNoZXNbMF0ucmVwbGFjZShjYSxkYSksYil8fFtdKVswXSwhYilyZXR1cm4gZTtuJiYoYj1iLnBhcmVudE5vZGUpLGE9YS5zbGljZShqLnNoaWZ0KCkudmFsdWUubGVuZ3RoKX1pPVgubmVlZHNDb250ZXh0LnRlc3QoYSk/MDpqLmxlbmd0aDt3aGlsZShpLS0pe2lmKGs9altpXSxkLnJlbGF0aXZlW2w9ay50eXBlXSlicmVhaztpZigobT1kLmZpbmRbbF0pJiYoZj1tKGsubWF0Y2hlc1swXS5yZXBsYWNlKGNhLGRhKSxhYS50ZXN0KGpbMF0udHlwZSkmJnBhKGIucGFyZW50Tm9kZSl8fGIpKSl7aWYoai5zcGxpY2UoaSwxKSxhPWYubGVuZ3RoJiZyYShqKSwhYSlyZXR1cm4gSC5hcHBseShlLGYpLGU7YnJlYWt9fX1yZXR1cm4obnx8aChhLG8pKShmLGIsIXAsZSxhYS50ZXN0KGEpJiZwYShiLnBhcmVudE5vZGUpfHxiKSxlfSxjLnNvcnRTdGFibGU9dS5zcGxpdChcIlwiKS5zb3J0KEIpLmpvaW4oXCJcIik9PT11LGMuZGV0ZWN0RHVwbGljYXRlcz0hIWwsbSgpLGMuc29ydERldGFjaGVkPWphKGZ1bmN0aW9uKGEpe3JldHVybiAxJmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24obi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKX0pLGphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmlubmVySFRNTD1cIjxhIGhyZWY9JyMnPjwvYT5cIixcIiNcIj09PWEuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpfSl8fGthKFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLGZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYz92b2lkIDA6YS5nZXRBdHRyaWJ1dGUoYixcInR5cGVcIj09PWIudG9Mb3dlckNhc2UoKT8xOjIpfSksYy5hdHRyaWJ1dGVzJiZqYShmdW5jdGlvbihhKXtyZXR1cm4gYS5pbm5lckhUTUw9XCI8aW5wdXQvPlwiLGEuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIpLFwiXCI9PT1hLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIil9KXx8a2EoXCJ2YWx1ZVwiLGZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gY3x8XCJpbnB1dFwiIT09YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpP3ZvaWQgMDphLmRlZmF1bHRWYWx1ZX0pLGphKGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpfSl8fGthKEssZnVuY3Rpb24oYSxiLGMpe3ZhciBkO3JldHVybiBjP3ZvaWQgMDphW2JdPT09ITA/Yi50b0xvd2VyQ2FzZSgpOihkPWEuZ2V0QXR0cmlidXRlTm9kZShiKSkmJmQuc3BlY2lmaWVkP2QudmFsdWU6bnVsbH0pLGdhfShhKTtuLmZpbmQ9dCxuLmV4cHI9dC5zZWxlY3RvcnMsbi5leHByW1wiOlwiXT1uLmV4cHIucHNldWRvcyxuLnVuaXF1ZT10LnVuaXF1ZVNvcnQsbi50ZXh0PXQuZ2V0VGV4dCxuLmlzWE1MRG9jPXQuaXNYTUwsbi5jb250YWlucz10LmNvbnRhaW5zO3ZhciB1PW4uZXhwci5tYXRjaC5uZWVkc0NvbnRleHQsdj0vXjwoXFx3KylcXHMqXFwvPz4oPzo8XFwvXFwxPnwpJC8sdz0vXi5bXjojXFxbXFwuLF0qJC87ZnVuY3Rpb24geChhLGIsYyl7aWYobi5pc0Z1bmN0aW9uKGIpKXJldHVybiBuLmdyZXAoYSxmdW5jdGlvbihhLGQpe3JldHVybiEhYi5jYWxsKGEsZCxhKSE9PWN9KTtpZihiLm5vZGVUeXBlKXJldHVybiBuLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gYT09PWIhPT1jfSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpe2lmKHcudGVzdChiKSlyZXR1cm4gbi5maWx0ZXIoYixhLGMpO2I9bi5maWx0ZXIoYixhKX1yZXR1cm4gbi5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGcuY2FsbChiLGEpPj0wIT09Y30pfW4uZmlsdGVyPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1iWzBdO3JldHVybiBjJiYoYT1cIjpub3QoXCIrYStcIilcIiksMT09PWIubGVuZ3RoJiYxPT09ZC5ub2RlVHlwZT9uLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGQsYSk/W2RdOltdOm4uZmluZC5tYXRjaGVzKGEsbi5ncmVwKGIsZnVuY3Rpb24oYSl7cmV0dXJuIDE9PT1hLm5vZGVUeXBlfSkpfSxuLmZuLmV4dGVuZCh7ZmluZDpmdW5jdGlvbihhKXt2YXIgYixjPXRoaXMubGVuZ3RoLGQ9W10sZT10aGlzO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybiB0aGlzLnB1c2hTdGFjayhuKGEpLmZpbHRlcihmdW5jdGlvbigpe2ZvcihiPTA7Yz5iO2IrKylpZihuLmNvbnRhaW5zKGVbYl0sdGhpcykpcmV0dXJuITB9KSk7Zm9yKGI9MDtjPmI7YisrKW4uZmluZChhLGVbYl0sZCk7cmV0dXJuIGQ9dGhpcy5wdXNoU3RhY2soYz4xP24udW5pcXVlKGQpOmQpLGQuc2VsZWN0b3I9dGhpcy5zZWxlY3Rvcj90aGlzLnNlbGVjdG9yK1wiIFwiK2E6YSxkfSxmaWx0ZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHgodGhpcyxhfHxbXSwhMSkpfSxub3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHgodGhpcyxhfHxbXSwhMCkpfSxpczpmdW5jdGlvbihhKXtyZXR1cm4hIXgodGhpcyxcInN0cmluZ1wiPT10eXBlb2YgYSYmdS50ZXN0KGEpP24oYSk6YXx8W10sITEpLmxlbmd0aH19KTt2YXIgeSx6PS9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKnwjKFtcXHctXSopKSQvLEE9bi5mbi5pbml0PWZ1bmN0aW9uKGEsYil7dmFyIGMsZDtpZighYSlyZXR1cm4gdGhpcztpZihcInN0cmluZ1wiPT10eXBlb2YgYSl7aWYoYz1cIjxcIj09PWFbMF0mJlwiPlwiPT09YVthLmxlbmd0aC0xXSYmYS5sZW5ndGg+PTM/W251bGwsYSxudWxsXTp6LmV4ZWMoYSksIWN8fCFjWzFdJiZiKXJldHVybiFifHxiLmpxdWVyeT8oYnx8eSkuZmluZChhKTp0aGlzLmNvbnN0cnVjdG9yKGIpLmZpbmQoYSk7aWYoY1sxXSl7aWYoYj1iIGluc3RhbmNlb2Ygbj9iWzBdOmIsbi5tZXJnZSh0aGlzLG4ucGFyc2VIVE1MKGNbMV0sYiYmYi5ub2RlVHlwZT9iLm93bmVyRG9jdW1lbnR8fGI6bCwhMCkpLHYudGVzdChjWzFdKSYmbi5pc1BsYWluT2JqZWN0KGIpKWZvcihjIGluIGIpbi5pc0Z1bmN0aW9uKHRoaXNbY10pP3RoaXNbY10oYltjXSk6dGhpcy5hdHRyKGMsYltjXSk7cmV0dXJuIHRoaXN9cmV0dXJuIGQ9bC5nZXRFbGVtZW50QnlJZChjWzJdKSxkJiZkLnBhcmVudE5vZGUmJih0aGlzLmxlbmd0aD0xLHRoaXNbMF09ZCksdGhpcy5jb250ZXh0PWwsdGhpcy5zZWxlY3Rvcj1hLHRoaXN9cmV0dXJuIGEubm9kZVR5cGU/KHRoaXMuY29udGV4dD10aGlzWzBdPWEsdGhpcy5sZW5ndGg9MSx0aGlzKTpuLmlzRnVuY3Rpb24oYSk/XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHkucmVhZHk/eS5yZWFkeShhKTphKG4pOih2b2lkIDAhPT1hLnNlbGVjdG9yJiYodGhpcy5zZWxlY3Rvcj1hLnNlbGVjdG9yLHRoaXMuY29udGV4dD1hLmNvbnRleHQpLG4ubWFrZUFycmF5KGEsdGhpcykpfTtBLnByb3RvdHlwZT1uLmZuLHk9bihsKTt2YXIgQj0vXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxDPXtjaGlsZHJlbjohMCxjb250ZW50czohMCxuZXh0OiEwLHByZXY6ITB9O24uZXh0ZW5kKHtkaXI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVtdLGU9dm9pZCAwIT09Yzt3aGlsZSgoYT1hW2JdKSYmOSE9PWEubm9kZVR5cGUpaWYoMT09PWEubm9kZVR5cGUpe2lmKGUmJm4oYSkuaXMoYykpYnJlYWs7ZC5wdXNoKGEpfXJldHVybiBkfSxzaWJsaW5nOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPVtdO2E7YT1hLm5leHRTaWJsaW5nKTE9PT1hLm5vZGVUeXBlJiZhIT09YiYmYy5wdXNoKGEpO3JldHVybiBjfX0pLG4uZm4uZXh0ZW5kKHtoYXM6ZnVuY3Rpb24oYSl7dmFyIGI9bihhLHRoaXMpLGM9Yi5sZW5ndGg7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHZhciBhPTA7Yz5hO2ErKylpZihuLmNvbnRhaW5zKHRoaXMsYlthXSkpcmV0dXJuITB9KX0sY2xvc2VzdDpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYyxkPTAsZT10aGlzLmxlbmd0aCxmPVtdLGc9dS50ZXN0KGEpfHxcInN0cmluZ1wiIT10eXBlb2YgYT9uKGEsYnx8dGhpcy5jb250ZXh0KTowO2U+ZDtkKyspZm9yKGM9dGhpc1tkXTtjJiZjIT09YjtjPWMucGFyZW50Tm9kZSlpZihjLm5vZGVUeXBlPDExJiYoZz9nLmluZGV4KGMpPi0xOjE9PT1jLm5vZGVUeXBlJiZuLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGMsYSkpKXtmLnB1c2goYyk7YnJlYWt9cmV0dXJuIHRoaXMucHVzaFN0YWNrKGYubGVuZ3RoPjE/bi51bmlxdWUoZik6Zil9LGluZGV4OmZ1bmN0aW9uKGEpe3JldHVybiBhP1wic3RyaW5nXCI9PXR5cGVvZiBhP2cuY2FsbChuKGEpLHRoaXNbMF0pOmcuY2FsbCh0aGlzLGEuanF1ZXJ5P2FbMF06YSk6dGhpc1swXSYmdGhpc1swXS5wYXJlbnROb2RlP3RoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoOi0xfSxhZGQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobi51bmlxdWUobi5tZXJnZSh0aGlzLmdldCgpLG4oYSxiKSkpKX0sYWRkQmFjazpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5hZGQobnVsbD09YT90aGlzLnByZXZPYmplY3Q6dGhpcy5wcmV2T2JqZWN0LmZpbHRlcihhKSl9fSk7ZnVuY3Rpb24gRChhLGIpe3doaWxlKChhPWFbYl0pJiYxIT09YS5ub2RlVHlwZSk7cmV0dXJuIGF9bi5lYWNoKHtwYXJlbnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO3JldHVybiBiJiYxMSE9PWIubm9kZVR5cGU/YjpudWxsfSxwYXJlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiBuLmRpcihhLFwicGFyZW50Tm9kZVwiKX0scGFyZW50c1VudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbi5kaXIoYSxcInBhcmVudE5vZGVcIixjKX0sbmV4dDpmdW5jdGlvbihhKXtyZXR1cm4gRChhLFwibmV4dFNpYmxpbmdcIil9LHByZXY6ZnVuY3Rpb24oYSl7cmV0dXJuIEQoYSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dEFsbDpmdW5jdGlvbihhKXtyZXR1cm4gbi5kaXIoYSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2QWxsOmZ1bmN0aW9uKGEpe3JldHVybiBuLmRpcihhLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0VW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuLmRpcihhLFwibmV4dFNpYmxpbmdcIixjKX0scHJldlVudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbi5kaXIoYSxcInByZXZpb3VzU2libGluZ1wiLGMpfSxzaWJsaW5nczpmdW5jdGlvbihhKXtyZXR1cm4gbi5zaWJsaW5nKChhLnBhcmVudE5vZGV8fHt9KS5maXJzdENoaWxkLGEpfSxjaGlsZHJlbjpmdW5jdGlvbihhKXtyZXR1cm4gbi5zaWJsaW5nKGEuZmlyc3RDaGlsZCl9LGNvbnRlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiBhLmNvbnRlbnREb2N1bWVudHx8bi5tZXJnZShbXSxhLmNoaWxkTm9kZXMpfX0sZnVuY3Rpb24oYSxiKXtuLmZuW2FdPWZ1bmN0aW9uKGMsZCl7dmFyIGU9bi5tYXAodGhpcyxiLGMpO3JldHVyblwiVW50aWxcIiE9PWEuc2xpY2UoLTUpJiYoZD1jKSxkJiZcInN0cmluZ1wiPT10eXBlb2YgZCYmKGU9bi5maWx0ZXIoZCxlKSksdGhpcy5sZW5ndGg+MSYmKENbYV18fG4udW5pcXVlKGUpLEIudGVzdChhKSYmZS5yZXZlcnNlKCkpLHRoaXMucHVzaFN0YWNrKGUpfX0pO3ZhciBFPS9cXFMrL2csRj17fTtmdW5jdGlvbiBHKGEpe3ZhciBiPUZbYV09e307cmV0dXJuIG4uZWFjaChhLm1hdGNoKEUpfHxbXSxmdW5jdGlvbihhLGMpe2JbY109ITB9KSxifW4uQ2FsbGJhY2tzPWZ1bmN0aW9uKGEpe2E9XCJzdHJpbmdcIj09dHlwZW9mIGE/RlthXXx8RyhhKTpuLmV4dGVuZCh7fSxhKTt2YXIgYixjLGQsZSxmLGcsaD1bXSxpPSFhLm9uY2UmJltdLGo9ZnVuY3Rpb24obCl7Zm9yKGI9YS5tZW1vcnkmJmwsYz0hMCxnPWV8fDAsZT0wLGY9aC5sZW5ndGgsZD0hMDtoJiZmPmc7ZysrKWlmKGhbZ10uYXBwbHkobFswXSxsWzFdKT09PSExJiZhLnN0b3BPbkZhbHNlKXtiPSExO2JyZWFrfWQ9ITEsaCYmKGk/aS5sZW5ndGgmJmooaS5zaGlmdCgpKTpiP2g9W106ay5kaXNhYmxlKCkpfSxrPXthZGQ6ZnVuY3Rpb24oKXtpZihoKXt2YXIgYz1oLmxlbmd0aDshZnVuY3Rpb24gZyhiKXtuLmVhY2goYixmdW5jdGlvbihiLGMpe3ZhciBkPW4udHlwZShjKTtcImZ1bmN0aW9uXCI9PT1kP2EudW5pcXVlJiZrLmhhcyhjKXx8aC5wdXNoKGMpOmMmJmMubGVuZ3RoJiZcInN0cmluZ1wiIT09ZCYmZyhjKX0pfShhcmd1bWVudHMpLGQ/Zj1oLmxlbmd0aDpiJiYoZT1jLGooYikpfXJldHVybiB0aGlzfSxyZW1vdmU6ZnVuY3Rpb24oKXtyZXR1cm4gaCYmbi5lYWNoKGFyZ3VtZW50cyxmdW5jdGlvbihhLGIpe3ZhciBjO3doaWxlKChjPW4uaW5BcnJheShiLGgsYykpPi0xKWguc3BsaWNlKGMsMSksZCYmKGY+PWMmJmYtLSxnPj1jJiZnLS0pfSksdGhpc30saGFzOmZ1bmN0aW9uKGEpe3JldHVybiBhP24uaW5BcnJheShhLGgpPi0xOiEoIWh8fCFoLmxlbmd0aCl9LGVtcHR5OmZ1bmN0aW9uKCl7cmV0dXJuIGg9W10sZj0wLHRoaXN9LGRpc2FibGU6ZnVuY3Rpb24oKXtyZXR1cm4gaD1pPWI9dm9pZCAwLHRoaXN9LGRpc2FibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIWh9LGxvY2s6ZnVuY3Rpb24oKXtyZXR1cm4gaT12b2lkIDAsYnx8ay5kaXNhYmxlKCksdGhpc30sbG9ja2VkOmZ1bmN0aW9uKCl7cmV0dXJuIWl9LGZpcmVXaXRoOmZ1bmN0aW9uKGEsYil7cmV0dXJuIWh8fGMmJiFpfHwoYj1ifHxbXSxiPVthLGIuc2xpY2U/Yi5zbGljZSgpOmJdLGQ/aS5wdXNoKGIpOmooYikpLHRoaXN9LGZpcmU6ZnVuY3Rpb24oKXtyZXR1cm4gay5maXJlV2l0aCh0aGlzLGFyZ3VtZW50cyksdGhpc30sZmlyZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWN9fTtyZXR1cm4ga30sbi5leHRlbmQoe0RlZmVycmVkOmZ1bmN0aW9uKGEpe3ZhciBiPVtbXCJyZXNvbHZlXCIsXCJkb25lXCIsbi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxcInJlc29sdmVkXCJdLFtcInJlamVjdFwiLFwiZmFpbFwiLG4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksXCJyZWplY3RlZFwiXSxbXCJub3RpZnlcIixcInByb2dyZXNzXCIsbi5DYWxsYmFja3MoXCJtZW1vcnlcIildXSxjPVwicGVuZGluZ1wiLGQ9e3N0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIGN9LGFsd2F5czpmdW5jdGlvbigpe3JldHVybiBlLmRvbmUoYXJndW1lbnRzKS5mYWlsKGFyZ3VtZW50cyksdGhpc30sdGhlbjpmdW5jdGlvbigpe3ZhciBhPWFyZ3VtZW50cztyZXR1cm4gbi5EZWZlcnJlZChmdW5jdGlvbihjKXtuLmVhY2goYixmdW5jdGlvbihiLGYpe3ZhciBnPW4uaXNGdW5jdGlvbihhW2JdKSYmYVtiXTtlW2ZbMV1dKGZ1bmN0aW9uKCl7dmFyIGE9ZyYmZy5hcHBseSh0aGlzLGFyZ3VtZW50cyk7YSYmbi5pc0Z1bmN0aW9uKGEucHJvbWlzZSk/YS5wcm9taXNlKCkuZG9uZShjLnJlc29sdmUpLmZhaWwoYy5yZWplY3QpLnByb2dyZXNzKGMubm90aWZ5KTpjW2ZbMF0rXCJXaXRoXCJdKHRoaXM9PT1kP2MucHJvbWlzZSgpOnRoaXMsZz9bYV06YXJndW1lbnRzKX0pfSksYT1udWxsfSkucHJvbWlzZSgpfSxwcm9taXNlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hP24uZXh0ZW5kKGEsZCk6ZH19LGU9e307cmV0dXJuIGQucGlwZT1kLnRoZW4sbi5lYWNoKGIsZnVuY3Rpb24oYSxmKXt2YXIgZz1mWzJdLGg9ZlszXTtkW2ZbMV1dPWcuYWRkLGgmJmcuYWRkKGZ1bmN0aW9uKCl7Yz1ofSxiWzFeYV1bMl0uZGlzYWJsZSxiWzJdWzJdLmxvY2spLGVbZlswXV09ZnVuY3Rpb24oKXtyZXR1cm4gZVtmWzBdK1wiV2l0aFwiXSh0aGlzPT09ZT9kOnRoaXMsYXJndW1lbnRzKSx0aGlzfSxlW2ZbMF0rXCJXaXRoXCJdPWcuZmlyZVdpdGh9KSxkLnByb21pc2UoZSksYSYmYS5jYWxsKGUsZSksZX0sd2hlbjpmdW5jdGlvbihhKXt2YXIgYj0wLGM9ZC5jYWxsKGFyZ3VtZW50cyksZT1jLmxlbmd0aCxmPTEhPT1lfHxhJiZuLmlzRnVuY3Rpb24oYS5wcm9taXNlKT9lOjAsZz0xPT09Zj9hOm4uRGVmZXJyZWQoKSxoPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gZnVuY3Rpb24oZSl7YlthXT10aGlzLGNbYV09YXJndW1lbnRzLmxlbmd0aD4xP2QuY2FsbChhcmd1bWVudHMpOmUsYz09PWk/Zy5ub3RpZnlXaXRoKGIsYyk6LS1mfHxnLnJlc29sdmVXaXRoKGIsYyl9fSxpLGosaztpZihlPjEpZm9yKGk9bmV3IEFycmF5KGUpLGo9bmV3IEFycmF5KGUpLGs9bmV3IEFycmF5KGUpO2U+YjtiKyspY1tiXSYmbi5pc0Z1bmN0aW9uKGNbYl0ucHJvbWlzZSk/Y1tiXS5wcm9taXNlKCkuZG9uZShoKGIsayxjKSkuZmFpbChnLnJlamVjdCkucHJvZ3Jlc3MoaChiLGosaSkpOi0tZjtyZXR1cm4gZnx8Zy5yZXNvbHZlV2l0aChrLGMpLGcucHJvbWlzZSgpfX0pO3ZhciBIO24uZm4ucmVhZHk9ZnVuY3Rpb24oYSl7cmV0dXJuIG4ucmVhZHkucHJvbWlzZSgpLmRvbmUoYSksdGhpc30sbi5leHRlbmQoe2lzUmVhZHk6ITEscmVhZHlXYWl0OjEsaG9sZFJlYWR5OmZ1bmN0aW9uKGEpe2E/bi5yZWFkeVdhaXQrKzpuLnJlYWR5KCEwKX0scmVhZHk6ZnVuY3Rpb24oYSl7KGE9PT0hMD8tLW4ucmVhZHlXYWl0Om4uaXNSZWFkeSl8fChuLmlzUmVhZHk9ITAsYSE9PSEwJiYtLW4ucmVhZHlXYWl0PjB8fChILnJlc29sdmVXaXRoKGwsW25dKSxuLmZuLnRyaWdnZXJIYW5kbGVyJiYobihsKS50cmlnZ2VySGFuZGxlcihcInJlYWR5XCIpLG4obCkub2ZmKFwicmVhZHlcIikpKSl9fSk7ZnVuY3Rpb24gSSgpe2wucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixJLCExKSxhLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsSSwhMSksbi5yZWFkeSgpfW4ucmVhZHkucHJvbWlzZT1mdW5jdGlvbihiKXtyZXR1cm4gSHx8KEg9bi5EZWZlcnJlZCgpLFwiY29tcGxldGVcIj09PWwucmVhZHlTdGF0ZT9zZXRUaW1lb3V0KG4ucmVhZHkpOihsLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsSSwhMSksYS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLEksITEpKSksSC5wcm9taXNlKGIpfSxuLnJlYWR5LnByb21pc2UoKTt2YXIgSj1uLmFjY2Vzcz1mdW5jdGlvbihhLGIsYyxkLGUsZixnKXt2YXIgaD0wLGk9YS5sZW5ndGgsaj1udWxsPT1jO2lmKFwib2JqZWN0XCI9PT1uLnR5cGUoYykpe2U9ITA7Zm9yKGggaW4gYyluLmFjY2VzcyhhLGIsaCxjW2hdLCEwLGYsZyl9ZWxzZSBpZih2b2lkIDAhPT1kJiYoZT0hMCxuLmlzRnVuY3Rpb24oZCl8fChnPSEwKSxqJiYoZz8oYi5jYWxsKGEsZCksYj1udWxsKTooaj1iLGI9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBqLmNhbGwobihhKSxjKX0pKSxiKSlmb3IoO2k+aDtoKyspYihhW2hdLGMsZz9kOmQuY2FsbChhW2hdLGgsYihhW2hdLGMpKSk7cmV0dXJuIGU/YTpqP2IuY2FsbChhKTppP2IoYVswXSxjKTpmfTtuLmFjY2VwdERhdGE9ZnVuY3Rpb24oYSl7cmV0dXJuIDE9PT1hLm5vZGVUeXBlfHw5PT09YS5ub2RlVHlwZXx8ISthLm5vZGVUeXBlfTtmdW5jdGlvbiBLKCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuY2FjaGU9e30sMCx7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJue319fSksdGhpcy5leHBhbmRvPW4uZXhwYW5kbytLLnVpZCsrfUsudWlkPTEsSy5hY2NlcHRzPW4uYWNjZXB0RGF0YSxLLnByb3RvdHlwZT17a2V5OmZ1bmN0aW9uKGEpe2lmKCFLLmFjY2VwdHMoYSkpcmV0dXJuIDA7dmFyIGI9e30sYz1hW3RoaXMuZXhwYW5kb107aWYoIWMpe2M9Sy51aWQrKzt0cnl7Ylt0aGlzLmV4cGFuZG9dPXt2YWx1ZTpjfSxPYmplY3QuZGVmaW5lUHJvcGVydGllcyhhLGIpfWNhdGNoKGQpe2JbdGhpcy5leHBhbmRvXT1jLG4uZXh0ZW5kKGEsYil9fXJldHVybiB0aGlzLmNhY2hlW2NdfHwodGhpcy5jYWNoZVtjXT17fSksY30sc2V0OmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlPXRoaXMua2V5KGEpLGY9dGhpcy5jYWNoZVtlXTtpZihcInN0cmluZ1wiPT10eXBlb2YgYilmW2JdPWM7ZWxzZSBpZihuLmlzRW1wdHlPYmplY3QoZikpbi5leHRlbmQodGhpcy5jYWNoZVtlXSxiKTtlbHNlIGZvcihkIGluIGIpZltkXT1iW2RdO3JldHVybiBmfSxnZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmNhY2hlW3RoaXMua2V5KGEpXTtyZXR1cm4gdm9pZCAwPT09Yj9jOmNbYl19LGFjY2VzczpmdW5jdGlvbihhLGIsYyl7dmFyIGQ7cmV0dXJuIHZvaWQgMD09PWJ8fGImJlwic3RyaW5nXCI9PXR5cGVvZiBiJiZ2b2lkIDA9PT1jPyhkPXRoaXMuZ2V0KGEsYiksdm9pZCAwIT09ZD9kOnRoaXMuZ2V0KGEsbi5jYW1lbENhc2UoYikpKToodGhpcy5zZXQoYSxiLGMpLHZvaWQgMCE9PWM/YzpiKX0scmVtb3ZlOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY9dGhpcy5rZXkoYSksZz10aGlzLmNhY2hlW2ZdO2lmKHZvaWQgMD09PWIpdGhpcy5jYWNoZVtmXT17fTtlbHNle24uaXNBcnJheShiKT9kPWIuY29uY2F0KGIubWFwKG4uY2FtZWxDYXNlKSk6KGU9bi5jYW1lbENhc2UoYiksYiBpbiBnP2Q9W2IsZV06KGQ9ZSxkPWQgaW4gZz9bZF06ZC5tYXRjaChFKXx8W10pKSxjPWQubGVuZ3RoO3doaWxlKGMtLSlkZWxldGUgZ1tkW2NdXX19LGhhc0RhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIW4uaXNFbXB0eU9iamVjdCh0aGlzLmNhY2hlW2FbdGhpcy5leHBhbmRvXV18fHt9KX0sZGlzY2FyZDpmdW5jdGlvbihhKXthW3RoaXMuZXhwYW5kb10mJmRlbGV0ZSB0aGlzLmNhY2hlW2FbdGhpcy5leHBhbmRvXV19fTt2YXIgTD1uZXcgSyxNPW5ldyBLLE49L14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLE89LyhbQS1aXSkvZztmdW5jdGlvbiBQKGEsYixjKXt2YXIgZDtpZih2b2lkIDA9PT1jJiYxPT09YS5ub2RlVHlwZSlpZihkPVwiZGF0YS1cIitiLnJlcGxhY2UoTyxcIi0kMVwiKS50b0xvd2VyQ2FzZSgpLGM9YS5nZXRBdHRyaWJ1dGUoZCksXCJzdHJpbmdcIj09dHlwZW9mIGMpe3RyeXtjPVwidHJ1ZVwiPT09Yz8hMDpcImZhbHNlXCI9PT1jPyExOlwibnVsbFwiPT09Yz9udWxsOitjK1wiXCI9PT1jPytjOk4udGVzdChjKT9uLnBhcnNlSlNPTihjKTpjfWNhdGNoKGUpe31NLnNldChhLGIsYyl9ZWxzZSBjPXZvaWQgMDtyZXR1cm4gY31uLmV4dGVuZCh7aGFzRGF0YTpmdW5jdGlvbihhKXtyZXR1cm4gTS5oYXNEYXRhKGEpfHxMLmhhc0RhdGEoYSl9LGRhdGE6ZnVuY3Rpb24oYSxiLGMpe1xucmV0dXJuIE0uYWNjZXNzKGEsYixjKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe00ucmVtb3ZlKGEsYil9LF9kYXRhOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gTC5hY2Nlc3MoYSxiLGMpfSxfcmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe0wucmVtb3ZlKGEsYil9fSksbi5mbi5leHRlbmQoe2RhdGE6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj10aGlzWzBdLGc9ZiYmZi5hdHRyaWJ1dGVzO2lmKHZvaWQgMD09PWEpe2lmKHRoaXMubGVuZ3RoJiYoZT1NLmdldChmKSwxPT09Zi5ub2RlVHlwZSYmIUwuZ2V0KGYsXCJoYXNEYXRhQXR0cnNcIikpKXtjPWcubGVuZ3RoO3doaWxlKGMtLSlnW2NdJiYoZD1nW2NdLm5hbWUsMD09PWQuaW5kZXhPZihcImRhdGEtXCIpJiYoZD1uLmNhbWVsQ2FzZShkLnNsaWNlKDUpKSxQKGYsZCxlW2RdKSkpO0wuc2V0KGYsXCJoYXNEYXRhQXR0cnNcIiwhMCl9cmV0dXJuIGV9cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGE/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7TS5zZXQodGhpcyxhKX0pOkoodGhpcyxmdW5jdGlvbihiKXt2YXIgYyxkPW4uY2FtZWxDYXNlKGEpO2lmKGYmJnZvaWQgMD09PWIpe2lmKGM9TS5nZXQoZixhKSx2b2lkIDAhPT1jKXJldHVybiBjO2lmKGM9TS5nZXQoZixkKSx2b2lkIDAhPT1jKXJldHVybiBjO2lmKGM9UChmLGQsdm9pZCAwKSx2b2lkIDAhPT1jKXJldHVybiBjfWVsc2UgdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9TS5nZXQodGhpcyxkKTtNLnNldCh0aGlzLGQsYiksLTEhPT1hLmluZGV4T2YoXCItXCIpJiZ2b2lkIDAhPT1jJiZNLnNldCh0aGlzLGEsYil9KX0sbnVsbCxiLGFyZ3VtZW50cy5sZW5ndGg+MSxudWxsLCEwKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7TS5yZW1vdmUodGhpcyxhKX0pfX0pLG4uZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ7cmV0dXJuIGE/KGI9KGJ8fFwiZnhcIikrXCJxdWV1ZVwiLGQ9TC5nZXQoYSxiKSxjJiYoIWR8fG4uaXNBcnJheShjKT9kPUwuYWNjZXNzKGEsYixuLm1ha2VBcnJheShjKSk6ZC5wdXNoKGMpKSxkfHxbXSk6dm9pZCAwfSxkZXF1ZXVlOmZ1bmN0aW9uKGEsYil7Yj1ifHxcImZ4XCI7dmFyIGM9bi5xdWV1ZShhLGIpLGQ9Yy5sZW5ndGgsZT1jLnNoaWZ0KCksZj1uLl9xdWV1ZUhvb2tzKGEsYiksZz1mdW5jdGlvbigpe24uZGVxdWV1ZShhLGIpfTtcImlucHJvZ3Jlc3NcIj09PWUmJihlPWMuc2hpZnQoKSxkLS0pLGUmJihcImZ4XCI9PT1iJiZjLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpLGRlbGV0ZSBmLnN0b3AsZS5jYWxsKGEsZyxmKSksIWQmJmYmJmYuZW1wdHkuZmlyZSgpfSxfcXVldWVIb29rczpmdW5jdGlvbihhLGIpe3ZhciBjPWIrXCJxdWV1ZUhvb2tzXCI7cmV0dXJuIEwuZ2V0KGEsYyl8fEwuYWNjZXNzKGEsYyx7ZW1wdHk6bi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKS5hZGQoZnVuY3Rpb24oKXtMLnJlbW92ZShhLFtiK1wicXVldWVcIixjXSl9KX0pfX0pLG4uZm4uZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihhLGIpe3ZhciBjPTI7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGEmJihiPWEsYT1cImZ4XCIsYy0tKSxhcmd1bWVudHMubGVuZ3RoPGM/bi5xdWV1ZSh0aGlzWzBdLGEpOnZvaWQgMD09PWI/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1uLnF1ZXVlKHRoaXMsYSxiKTtuLl9xdWV1ZUhvb2tzKHRoaXMsYSksXCJmeFwiPT09YSYmXCJpbnByb2dyZXNzXCIhPT1jWzBdJiZuLmRlcXVldWUodGhpcyxhKX0pfSxkZXF1ZXVlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmRlcXVldWUodGhpcyxhKX0pfSxjbGVhclF1ZXVlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnF1ZXVlKGF8fFwiZnhcIixbXSl9LHByb21pc2U6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPTEsZT1uLkRlZmVycmVkKCksZj10aGlzLGc9dGhpcy5sZW5ndGgsaD1mdW5jdGlvbigpey0tZHx8ZS5yZXNvbHZlV2l0aChmLFtmXSl9O1wic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9dm9pZCAwKSxhPWF8fFwiZnhcIjt3aGlsZShnLS0pYz1MLmdldChmW2ddLGErXCJxdWV1ZUhvb2tzXCIpLGMmJmMuZW1wdHkmJihkKyssYy5lbXB0eS5hZGQoaCkpO3JldHVybiBoKCksZS5wcm9taXNlKGIpfX0pO3ZhciBRPS9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvLnNvdXJjZSxSPVtcIlRvcFwiLFwiUmlnaHRcIixcIkJvdHRvbVwiLFwiTGVmdFwiXSxTPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9Ynx8YSxcIm5vbmVcIj09PW4uY3NzKGEsXCJkaXNwbGF5XCIpfHwhbi5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSl9LFQ9L14oPzpjaGVja2JveHxyYWRpbykkL2k7IWZ1bmN0aW9uKCl7dmFyIGE9bC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksYj1hLmFwcGVuZENoaWxkKGwuY3JlYXRlRWxlbWVudChcImRpdlwiKSksYz1sLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtjLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInJhZGlvXCIpLGMuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLFwiY2hlY2tlZFwiKSxjLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcInRcIiksYi5hcHBlbmRDaGlsZChjKSxrLmNoZWNrQ2xvbmU9Yi5jbG9uZU5vZGUoITApLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmNoZWNrZWQsYi5pbm5lckhUTUw9XCI8dGV4dGFyZWE+eDwvdGV4dGFyZWE+XCIsay5ub0Nsb25lQ2hlY2tlZD0hIWIuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuZGVmYXVsdFZhbHVlfSgpO3ZhciBVPVwidW5kZWZpbmVkXCI7ay5mb2N1c2luQnViYmxlcz1cIm9uZm9jdXNpblwiaW4gYTt2YXIgVj0vXmtleS8sVz0vXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnUpfGNsaWNrLyxYPS9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLyxZPS9eKFteLl0qKSg/OlxcLiguKyl8KSQvO2Z1bmN0aW9uIFooKXtyZXR1cm4hMH1mdW5jdGlvbiAkKCl7cmV0dXJuITF9ZnVuY3Rpb24gXygpe3RyeXtyZXR1cm4gbC5hY3RpdmVFbGVtZW50fWNhdGNoKGEpe319bi5ldmVudD17Z2xvYmFsOnt9LGFkZDpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGcsaCxpLGosayxsLG0sbyxwLHEscj1MLmdldChhKTtpZihyKXtjLmhhbmRsZXImJihmPWMsYz1mLmhhbmRsZXIsZT1mLnNlbGVjdG9yKSxjLmd1aWR8fChjLmd1aWQ9bi5ndWlkKyspLChpPXIuZXZlbnRzKXx8KGk9ci5ldmVudHM9e30pLChnPXIuaGFuZGxlKXx8KGc9ci5oYW5kbGU9ZnVuY3Rpb24oYil7cmV0dXJuIHR5cGVvZiBuIT09VSYmbi5ldmVudC50cmlnZ2VyZWQhPT1iLnR5cGU/bi5ldmVudC5kaXNwYXRjaC5hcHBseShhLGFyZ3VtZW50cyk6dm9pZCAwfSksYj0oYnx8XCJcIikubWF0Y2goRSl8fFtcIlwiXSxqPWIubGVuZ3RoO3doaWxlKGotLSloPVkuZXhlYyhiW2pdKXx8W10sbz1xPWhbMV0scD0oaFsyXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxvJiYobD1uLmV2ZW50LnNwZWNpYWxbb118fHt9LG89KGU/bC5kZWxlZ2F0ZVR5cGU6bC5iaW5kVHlwZSl8fG8sbD1uLmV2ZW50LnNwZWNpYWxbb118fHt9LGs9bi5leHRlbmQoe3R5cGU6byxvcmlnVHlwZTpxLGRhdGE6ZCxoYW5kbGVyOmMsZ3VpZDpjLmd1aWQsc2VsZWN0b3I6ZSxuZWVkc0NvbnRleHQ6ZSYmbi5leHByLm1hdGNoLm5lZWRzQ29udGV4dC50ZXN0KGUpLG5hbWVzcGFjZTpwLmpvaW4oXCIuXCIpfSxmKSwobT1pW29dKXx8KG09aVtvXT1bXSxtLmRlbGVnYXRlQ291bnQ9MCxsLnNldHVwJiZsLnNldHVwLmNhbGwoYSxkLHAsZykhPT0hMXx8YS5hZGRFdmVudExpc3RlbmVyJiZhLmFkZEV2ZW50TGlzdGVuZXIobyxnLCExKSksbC5hZGQmJihsLmFkZC5jYWxsKGEsayksay5oYW5kbGVyLmd1aWR8fChrLmhhbmRsZXIuZ3VpZD1jLmd1aWQpKSxlP20uc3BsaWNlKG0uZGVsZWdhdGVDb3VudCsrLDAsayk6bS5wdXNoKGspLG4uZXZlbnQuZ2xvYmFsW29dPSEwKX19LHJlbW92ZTpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGcsaCxpLGosayxsLG0sbyxwLHEscj1MLmhhc0RhdGEoYSkmJkwuZ2V0KGEpO2lmKHImJihpPXIuZXZlbnRzKSl7Yj0oYnx8XCJcIikubWF0Y2goRSl8fFtcIlwiXSxqPWIubGVuZ3RoO3doaWxlKGotLSlpZihoPVkuZXhlYyhiW2pdKXx8W10sbz1xPWhbMV0scD0oaFsyXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxvKXtsPW4uZXZlbnQuc3BlY2lhbFtvXXx8e30sbz0oZD9sLmRlbGVnYXRlVHlwZTpsLmJpbmRUeXBlKXx8byxtPWlbb118fFtdLGg9aFsyXSYmbmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK3Auam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpLGc9Zj1tLmxlbmd0aDt3aGlsZShmLS0paz1tW2ZdLCFlJiZxIT09ay5vcmlnVHlwZXx8YyYmYy5ndWlkIT09ay5ndWlkfHxoJiYhaC50ZXN0KGsubmFtZXNwYWNlKXx8ZCYmZCE9PWsuc2VsZWN0b3ImJihcIioqXCIhPT1kfHwhay5zZWxlY3Rvcil8fChtLnNwbGljZShmLDEpLGsuc2VsZWN0b3ImJm0uZGVsZWdhdGVDb3VudC0tLGwucmVtb3ZlJiZsLnJlbW92ZS5jYWxsKGEsaykpO2cmJiFtLmxlbmd0aCYmKGwudGVhcmRvd24mJmwudGVhcmRvd24uY2FsbChhLHAsci5oYW5kbGUpIT09ITF8fG4ucmVtb3ZlRXZlbnQoYSxvLHIuaGFuZGxlKSxkZWxldGUgaVtvXSl9ZWxzZSBmb3IobyBpbiBpKW4uZXZlbnQucmVtb3ZlKGEsbytiW2pdLGMsZCwhMCk7bi5pc0VtcHR5T2JqZWN0KGkpJiYoZGVsZXRlIHIuaGFuZGxlLEwucmVtb3ZlKGEsXCJldmVudHNcIikpfX0sdHJpZ2dlcjpmdW5jdGlvbihiLGMsZCxlKXt2YXIgZixnLGgsaSxrLG0sbyxwPVtkfHxsXSxxPWouY2FsbChiLFwidHlwZVwiKT9iLnR5cGU6YixyPWouY2FsbChiLFwibmFtZXNwYWNlXCIpP2IubmFtZXNwYWNlLnNwbGl0KFwiLlwiKTpbXTtpZihnPWg9ZD1kfHxsLDMhPT1kLm5vZGVUeXBlJiY4IT09ZC5ub2RlVHlwZSYmIVgudGVzdChxK24uZXZlbnQudHJpZ2dlcmVkKSYmKHEuaW5kZXhPZihcIi5cIik+PTAmJihyPXEuc3BsaXQoXCIuXCIpLHE9ci5zaGlmdCgpLHIuc29ydCgpKSxrPXEuaW5kZXhPZihcIjpcIik8MCYmXCJvblwiK3EsYj1iW24uZXhwYW5kb10/YjpuZXcgbi5FdmVudChxLFwib2JqZWN0XCI9PXR5cGVvZiBiJiZiKSxiLmlzVHJpZ2dlcj1lPzI6MyxiLm5hbWVzcGFjZT1yLmpvaW4oXCIuXCIpLGIubmFtZXNwYWNlX3JlPWIubmFtZXNwYWNlP25ldyBSZWdFeHAoXCIoXnxcXFxcLilcIityLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKTpudWxsLGIucmVzdWx0PXZvaWQgMCxiLnRhcmdldHx8KGIudGFyZ2V0PWQpLGM9bnVsbD09Yz9bYl06bi5tYWtlQXJyYXkoYyxbYl0pLG89bi5ldmVudC5zcGVjaWFsW3FdfHx7fSxlfHwhby50cmlnZ2VyfHxvLnRyaWdnZXIuYXBwbHkoZCxjKSE9PSExKSl7aWYoIWUmJiFvLm5vQnViYmxlJiYhbi5pc1dpbmRvdyhkKSl7Zm9yKGk9by5kZWxlZ2F0ZVR5cGV8fHEsWC50ZXN0KGkrcSl8fChnPWcucGFyZW50Tm9kZSk7ZztnPWcucGFyZW50Tm9kZSlwLnB1c2goZyksaD1nO2g9PT0oZC5vd25lckRvY3VtZW50fHxsKSYmcC5wdXNoKGguZGVmYXVsdFZpZXd8fGgucGFyZW50V2luZG93fHxhKX1mPTA7d2hpbGUoKGc9cFtmKytdKSYmIWIuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSliLnR5cGU9Zj4xP2k6by5iaW5kVHlwZXx8cSxtPShMLmdldChnLFwiZXZlbnRzXCIpfHx7fSlbYi50eXBlXSYmTC5nZXQoZyxcImhhbmRsZVwiKSxtJiZtLmFwcGx5KGcsYyksbT1rJiZnW2tdLG0mJm0uYXBwbHkmJm4uYWNjZXB0RGF0YShnKSYmKGIucmVzdWx0PW0uYXBwbHkoZyxjKSxiLnJlc3VsdD09PSExJiZiLnByZXZlbnREZWZhdWx0KCkpO3JldHVybiBiLnR5cGU9cSxlfHxiLmlzRGVmYXVsdFByZXZlbnRlZCgpfHxvLl9kZWZhdWx0JiZvLl9kZWZhdWx0LmFwcGx5KHAucG9wKCksYykhPT0hMXx8IW4uYWNjZXB0RGF0YShkKXx8ayYmbi5pc0Z1bmN0aW9uKGRbcV0pJiYhbi5pc1dpbmRvdyhkKSYmKGg9ZFtrXSxoJiYoZFtrXT1udWxsKSxuLmV2ZW50LnRyaWdnZXJlZD1xLGRbcV0oKSxuLmV2ZW50LnRyaWdnZXJlZD12b2lkIDAsaCYmKGRba109aCkpLGIucmVzdWx0fX0sZGlzcGF0Y2g6ZnVuY3Rpb24oYSl7YT1uLmV2ZW50LmZpeChhKTt2YXIgYixjLGUsZixnLGg9W10saT1kLmNhbGwoYXJndW1lbnRzKSxqPShMLmdldCh0aGlzLFwiZXZlbnRzXCIpfHx7fSlbYS50eXBlXXx8W10saz1uLmV2ZW50LnNwZWNpYWxbYS50eXBlXXx8e307aWYoaVswXT1hLGEuZGVsZWdhdGVUYXJnZXQ9dGhpcywhay5wcmVEaXNwYXRjaHx8ay5wcmVEaXNwYXRjaC5jYWxsKHRoaXMsYSkhPT0hMSl7aD1uLmV2ZW50LmhhbmRsZXJzLmNhbGwodGhpcyxhLGopLGI9MDt3aGlsZSgoZj1oW2IrK10pJiYhYS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKXthLmN1cnJlbnRUYXJnZXQ9Zi5lbGVtLGM9MDt3aGlsZSgoZz1mLmhhbmRsZXJzW2MrK10pJiYhYS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKSghYS5uYW1lc3BhY2VfcmV8fGEubmFtZXNwYWNlX3JlLnRlc3QoZy5uYW1lc3BhY2UpKSYmKGEuaGFuZGxlT2JqPWcsYS5kYXRhPWcuZGF0YSxlPSgobi5ldmVudC5zcGVjaWFsW2cub3JpZ1R5cGVdfHx7fSkuaGFuZGxlfHxnLmhhbmRsZXIpLmFwcGx5KGYuZWxlbSxpKSx2b2lkIDAhPT1lJiYoYS5yZXN1bHQ9ZSk9PT0hMSYmKGEucHJldmVudERlZmF1bHQoKSxhLnN0b3BQcm9wYWdhdGlvbigpKSl9cmV0dXJuIGsucG9zdERpc3BhdGNoJiZrLnBvc3REaXNwYXRjaC5jYWxsKHRoaXMsYSksYS5yZXN1bHR9fSxoYW5kbGVyczpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmLGc9W10saD1iLmRlbGVnYXRlQ291bnQsaT1hLnRhcmdldDtpZihoJiZpLm5vZGVUeXBlJiYoIWEuYnV0dG9ufHxcImNsaWNrXCIhPT1hLnR5cGUpKWZvcig7aSE9PXRoaXM7aT1pLnBhcmVudE5vZGV8fHRoaXMpaWYoaS5kaXNhYmxlZCE9PSEwfHxcImNsaWNrXCIhPT1hLnR5cGUpe2ZvcihkPVtdLGM9MDtoPmM7YysrKWY9YltjXSxlPWYuc2VsZWN0b3IrXCIgXCIsdm9pZCAwPT09ZFtlXSYmKGRbZV09Zi5uZWVkc0NvbnRleHQ/bihlLHRoaXMpLmluZGV4KGkpPj0wOm4uZmluZChlLHRoaXMsbnVsbCxbaV0pLmxlbmd0aCksZFtlXSYmZC5wdXNoKGYpO2QubGVuZ3RoJiZnLnB1c2goe2VsZW06aSxoYW5kbGVyczpkfSl9cmV0dXJuIGg8Yi5sZW5ndGgmJmcucHVzaCh7ZWxlbTp0aGlzLGhhbmRsZXJzOmIuc2xpY2UoaCl9KSxnfSxwcm9wczpcImFsdEtleSBidWJibGVzIGNhbmNlbGFibGUgY3RybEtleSBjdXJyZW50VGFyZ2V0IGV2ZW50UGhhc2UgbWV0YUtleSByZWxhdGVkVGFyZ2V0IHNoaWZ0S2V5IHRhcmdldCB0aW1lU3RhbXAgdmlldyB3aGljaFwiLnNwbGl0KFwiIFwiKSxmaXhIb29rczp7fSxrZXlIb29rczp7cHJvcHM6XCJjaGFyIGNoYXJDb2RlIGtleSBrZXlDb2RlXCIuc3BsaXQoXCIgXCIpLGZpbHRlcjpmdW5jdGlvbihhLGIpe3JldHVybiBudWxsPT1hLndoaWNoJiYoYS53aGljaD1udWxsIT1iLmNoYXJDb2RlP2IuY2hhckNvZGU6Yi5rZXlDb2RlKSxhfX0sbW91c2VIb29rczp7cHJvcHM6XCJidXR0b24gYnV0dG9ucyBjbGllbnRYIGNsaWVudFkgb2Zmc2V0WCBvZmZzZXRZIHBhZ2VYIHBhZ2VZIHNjcmVlblggc2NyZWVuWSB0b0VsZW1lbnRcIi5zcGxpdChcIiBcIiksZmlsdGVyOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY9Yi5idXR0b247cmV0dXJuIG51bGw9PWEucGFnZVgmJm51bGwhPWIuY2xpZW50WCYmKGM9YS50YXJnZXQub3duZXJEb2N1bWVudHx8bCxkPWMuZG9jdW1lbnRFbGVtZW50LGU9Yy5ib2R5LGEucGFnZVg9Yi5jbGllbnRYKyhkJiZkLnNjcm9sbExlZnR8fGUmJmUuc2Nyb2xsTGVmdHx8MCktKGQmJmQuY2xpZW50TGVmdHx8ZSYmZS5jbGllbnRMZWZ0fHwwKSxhLnBhZ2VZPWIuY2xpZW50WSsoZCYmZC5zY3JvbGxUb3B8fGUmJmUuc2Nyb2xsVG9wfHwwKS0oZCYmZC5jbGllbnRUb3B8fGUmJmUuY2xpZW50VG9wfHwwKSksYS53aGljaHx8dm9pZCAwPT09Znx8KGEud2hpY2g9MSZmPzE6MiZmPzM6NCZmPzI6MCksYX19LGZpeDpmdW5jdGlvbihhKXtpZihhW24uZXhwYW5kb10pcmV0dXJuIGE7dmFyIGIsYyxkLGU9YS50eXBlLGY9YSxnPXRoaXMuZml4SG9va3NbZV07Z3x8KHRoaXMuZml4SG9va3NbZV09Zz1XLnRlc3QoZSk/dGhpcy5tb3VzZUhvb2tzOlYudGVzdChlKT90aGlzLmtleUhvb2tzOnt9KSxkPWcucHJvcHM/dGhpcy5wcm9wcy5jb25jYXQoZy5wcm9wcyk6dGhpcy5wcm9wcyxhPW5ldyBuLkV2ZW50KGYpLGI9ZC5sZW5ndGg7d2hpbGUoYi0tKWM9ZFtiXSxhW2NdPWZbY107cmV0dXJuIGEudGFyZ2V0fHwoYS50YXJnZXQ9bCksMz09PWEudGFyZ2V0Lm5vZGVUeXBlJiYoYS50YXJnZXQ9YS50YXJnZXQucGFyZW50Tm9kZSksZy5maWx0ZXI/Zy5maWx0ZXIoYSxmKTphfSxzcGVjaWFsOntsb2FkOntub0J1YmJsZTohMH0sZm9jdXM6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcyE9PV8oKSYmdGhpcy5mb2N1cz8odGhpcy5mb2N1cygpLCExKTp2b2lkIDB9LGRlbGVnYXRlVHlwZTpcImZvY3VzaW5cIn0sYmx1cjp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzPT09XygpJiZ0aGlzLmJsdXI/KHRoaXMuYmx1cigpLCExKTp2b2lkIDB9LGRlbGVnYXRlVHlwZTpcImZvY3Vzb3V0XCJ9LGNsaWNrOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuXCJjaGVja2JveFwiPT09dGhpcy50eXBlJiZ0aGlzLmNsaWNrJiZuLm5vZGVOYW1lKHRoaXMsXCJpbnB1dFwiKT8odGhpcy5jbGljaygpLCExKTp2b2lkIDB9LF9kZWZhdWx0OmZ1bmN0aW9uKGEpe3JldHVybiBuLm5vZGVOYW1lKGEudGFyZ2V0LFwiYVwiKX19LGJlZm9yZXVubG9hZDp7cG9zdERpc3BhdGNoOmZ1bmN0aW9uKGEpe3ZvaWQgMCE9PWEucmVzdWx0JiZhLm9yaWdpbmFsRXZlbnQmJihhLm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWU9YS5yZXN1bHQpfX19LHNpbXVsYXRlOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPW4uZXh0ZW5kKG5ldyBuLkV2ZW50LGMse3R5cGU6YSxpc1NpbXVsYXRlZDohMCxvcmlnaW5hbEV2ZW50Ont9fSk7ZD9uLmV2ZW50LnRyaWdnZXIoZSxudWxsLGIpOm4uZXZlbnQuZGlzcGF0Y2guY2FsbChiLGUpLGUuaXNEZWZhdWx0UHJldmVudGVkKCkmJmMucHJldmVudERlZmF1bHQoKX19LG4ucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24oYSxiLGMpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lciYmYS5yZW1vdmVFdmVudExpc3RlbmVyKGIsYywhMSl9LG4uRXZlbnQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcyBpbnN0YW5jZW9mIG4uRXZlbnQ/KGEmJmEudHlwZT8odGhpcy5vcmlnaW5hbEV2ZW50PWEsdGhpcy50eXBlPWEudHlwZSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1hLmRlZmF1bHRQcmV2ZW50ZWR8fHZvaWQgMD09PWEuZGVmYXVsdFByZXZlbnRlZCYmYS5yZXR1cm5WYWx1ZT09PSExP1o6JCk6dGhpcy50eXBlPWEsYiYmbi5leHRlbmQodGhpcyxiKSx0aGlzLnRpbWVTdGFtcD1hJiZhLnRpbWVTdGFtcHx8bi5ub3coKSx2b2lkKHRoaXNbbi5leHBhbmRvXT0hMCkpOm5ldyBuLkV2ZW50KGEsYil9LG4uRXZlbnQucHJvdG90eXBlPXtpc0RlZmF1bHRQcmV2ZW50ZWQ6JCxpc1Byb3BhZ2F0aW9uU3RvcHBlZDokLGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOiQscHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9WixhJiZhLnByZXZlbnREZWZhdWx0JiZhLnByZXZlbnREZWZhdWx0KCl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPVosYSYmYS5zdG9wUHJvcGFnYXRpb24mJmEuc3RvcFByb3BhZ2F0aW9uKCl9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkPVosYSYmYS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24mJmEuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksdGhpcy5zdG9wUHJvcGFnYXRpb24oKX19LG4uZWFjaCh7bW91c2VlbnRlcjpcIm1vdXNlb3ZlclwiLG1vdXNlbGVhdmU6XCJtb3VzZW91dFwiLHBvaW50ZXJlbnRlcjpcInBvaW50ZXJvdmVyXCIscG9pbnRlcmxlYXZlOlwicG9pbnRlcm91dFwifSxmdW5jdGlvbihhLGIpe24uZXZlbnQuc3BlY2lhbFthXT17ZGVsZWdhdGVUeXBlOmIsYmluZFR5cGU6YixoYW5kbGU6ZnVuY3Rpb24oYSl7dmFyIGMsZD10aGlzLGU9YS5yZWxhdGVkVGFyZ2V0LGY9YS5oYW5kbGVPYmo7cmV0dXJuKCFlfHxlIT09ZCYmIW4uY29udGFpbnMoZCxlKSkmJihhLnR5cGU9Zi5vcmlnVHlwZSxjPWYuaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyksYS50eXBlPWIpLGN9fX0pLGsuZm9jdXNpbkJ1YmJsZXN8fG4uZWFjaCh7Zm9jdXM6XCJmb2N1c2luXCIsYmx1cjpcImZvY3Vzb3V0XCJ9LGZ1bmN0aW9uKGEsYil7dmFyIGM9ZnVuY3Rpb24oYSl7bi5ldmVudC5zaW11bGF0ZShiLGEudGFyZ2V0LG4uZXZlbnQuZml4KGEpLCEwKX07bi5ldmVudC5zcGVjaWFsW2JdPXtzZXR1cDpmdW5jdGlvbigpe3ZhciBkPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyxlPUwuYWNjZXNzKGQsYik7ZXx8ZC5hZGRFdmVudExpc3RlbmVyKGEsYywhMCksTC5hY2Nlc3MoZCxiLChlfHwwKSsxKX0sdGVhcmRvd246ZnVuY3Rpb24oKXt2YXIgZD10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsZT1MLmFjY2VzcyhkLGIpLTE7ZT9MLmFjY2VzcyhkLGIsZSk6KGQucmVtb3ZlRXZlbnRMaXN0ZW5lcihhLGMsITApLEwucmVtb3ZlKGQsYikpfX19KSxuLmZuLmV4dGVuZCh7b246ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBhKXtcInN0cmluZ1wiIT10eXBlb2YgYiYmKGM9Y3x8YixiPXZvaWQgMCk7Zm9yKGcgaW4gYSl0aGlzLm9uKGcsYixjLGFbZ10sZSk7cmV0dXJuIHRoaXN9aWYobnVsbD09YyYmbnVsbD09ZD8oZD1iLGM9Yj12b2lkIDApOm51bGw9PWQmJihcInN0cmluZ1wiPT10eXBlb2YgYj8oZD1jLGM9dm9pZCAwKTooZD1jLGM9YixiPXZvaWQgMCkpLGQ9PT0hMSlkPSQ7ZWxzZSBpZighZClyZXR1cm4gdGhpcztyZXR1cm4gMT09PWUmJihmPWQsZD1mdW5jdGlvbihhKXtyZXR1cm4gbigpLm9mZihhKSxmLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sZC5ndWlkPWYuZ3VpZHx8KGYuZ3VpZD1uLmd1aWQrKykpLHRoaXMuZWFjaChmdW5jdGlvbigpe24uZXZlbnQuYWRkKHRoaXMsYSxkLGMsYil9KX0sb25lOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLm9uKGEsYixjLGQsMSl9LG9mZjpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZTtpZihhJiZhLnByZXZlbnREZWZhdWx0JiZhLmhhbmRsZU9iailyZXR1cm4gZD1hLmhhbmRsZU9iaixuKGEuZGVsZWdhdGVUYXJnZXQpLm9mZihkLm5hbWVzcGFjZT9kLm9yaWdUeXBlK1wiLlwiK2QubmFtZXNwYWNlOmQub3JpZ1R5cGUsZC5zZWxlY3RvcixkLmhhbmRsZXIpLHRoaXM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGEpe2ZvcihlIGluIGEpdGhpcy5vZmYoZSxiLGFbZV0pO3JldHVybiB0aGlzfXJldHVybihiPT09ITF8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGIpJiYoYz1iLGI9dm9pZCAwKSxjPT09ITEmJihjPSQpLHRoaXMuZWFjaChmdW5jdGlvbigpe24uZXZlbnQucmVtb3ZlKHRoaXMsYSxjLGIpfSl9LHRyaWdnZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5ldmVudC50cmlnZ2VyKGEsYix0aGlzKX0pfSx0cmlnZ2VySGFuZGxlcjpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXNbMF07cmV0dXJuIGM/bi5ldmVudC50cmlnZ2VyKGEsYixjLCEwKTp2b2lkIDB9fSk7dmFyIGFhPS88KD8hYXJlYXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGxpbmt8bWV0YXxwYXJhbSkoKFtcXHc6XSspW14+XSopXFwvPi9naSxiYT0vPChbXFx3Ol0rKS8sY2E9Lzx8JiM/XFx3KzsvLGRhPS88KD86c2NyaXB0fHN0eWxlfGxpbmspL2ksZWE9L2NoZWNrZWRcXHMqKD86W149XXw9XFxzKi5jaGVja2VkLikvaSxmYT0vXiR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pLGdhPS9edHJ1ZVxcLyguKikvLGhhPS9eXFxzKjwhKD86XFxbQ0RBVEFcXFt8LS0pfCg/OlxcXVxcXXwtLSk+XFxzKiQvZyxpYT17b3B0aW9uOlsxLFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLFwiPC9zZWxlY3Q+XCJdLHRoZWFkOlsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl0sY29sOlsyLFwiPHRhYmxlPjxjb2xncm91cD5cIixcIjwvY29sZ3JvdXA+PC90YWJsZT5cIl0sdHI6WzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXSx0ZDpbMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLF9kZWZhdWx0OlswLFwiXCIsXCJcIl19O2lhLm9wdGdyb3VwPWlhLm9wdGlvbixpYS50Ym9keT1pYS50Zm9vdD1pYS5jb2xncm91cD1pYS5jYXB0aW9uPWlhLnRoZWFkLGlhLnRoPWlhLnRkO2Z1bmN0aW9uIGphKGEsYil7cmV0dXJuIG4ubm9kZU5hbWUoYSxcInRhYmxlXCIpJiZuLm5vZGVOYW1lKDExIT09Yi5ub2RlVHlwZT9iOmIuZmlyc3RDaGlsZCxcInRyXCIpP2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0Ym9keVwiKVswXXx8YS5hcHBlbmRDaGlsZChhLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpKTphfWZ1bmN0aW9uIGthKGEpe3JldHVybiBhLnR5cGU9KG51bGwhPT1hLmdldEF0dHJpYnV0ZShcInR5cGVcIikpK1wiL1wiK2EudHlwZSxhfWZ1bmN0aW9uIGxhKGEpe3ZhciBiPWdhLmV4ZWMoYS50eXBlKTtyZXR1cm4gYj9hLnR5cGU9YlsxXTphLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIiksYX1mdW5jdGlvbiBtYShhLGIpe2Zvcih2YXIgYz0wLGQ9YS5sZW5ndGg7ZD5jO2MrKylMLnNldChhW2NdLFwiZ2xvYmFsRXZhbFwiLCFifHxMLmdldChiW2NdLFwiZ2xvYmFsRXZhbFwiKSl9ZnVuY3Rpb24gbmEoYSxiKXt2YXIgYyxkLGUsZixnLGgsaSxqO2lmKDE9PT1iLm5vZGVUeXBlKXtpZihMLmhhc0RhdGEoYSkmJihmPUwuYWNjZXNzKGEpLGc9TC5zZXQoYixmKSxqPWYuZXZlbnRzKSl7ZGVsZXRlIGcuaGFuZGxlLGcuZXZlbnRzPXt9O2ZvcihlIGluIGopZm9yKGM9MCxkPWpbZV0ubGVuZ3RoO2Q+YztjKyspbi5ldmVudC5hZGQoYixlLGpbZV1bY10pfU0uaGFzRGF0YShhKSYmKGg9TS5hY2Nlc3MoYSksaT1uLmV4dGVuZCh7fSxoKSxNLnNldChiLGkpKX19ZnVuY3Rpb24gb2EoYSxiKXt2YXIgYz1hLmdldEVsZW1lbnRzQnlUYWdOYW1lP2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYnx8XCIqXCIpOmEucXVlcnlTZWxlY3RvckFsbD9hLnF1ZXJ5U2VsZWN0b3JBbGwoYnx8XCIqXCIpOltdO3JldHVybiB2b2lkIDA9PT1ifHxiJiZuLm5vZGVOYW1lKGEsYik/bi5tZXJnZShbYV0sYyk6Y31mdW5jdGlvbiBwYShhLGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcImlucHV0XCI9PT1jJiZULnRlc3QoYS50eXBlKT9iLmNoZWNrZWQ9YS5jaGVja2VkOihcImlucHV0XCI9PT1jfHxcInRleHRhcmVhXCI9PT1jKSYmKGIuZGVmYXVsdFZhbHVlPWEuZGVmYXVsdFZhbHVlKX1uLmV4dGVuZCh7Y2xvbmU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5jbG9uZU5vZGUoITApLGk9bi5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSk7aWYoIShrLm5vQ2xvbmVDaGVja2VkfHwxIT09YS5ub2RlVHlwZSYmMTEhPT1hLm5vZGVUeXBlfHxuLmlzWE1MRG9jKGEpKSlmb3IoZz1vYShoKSxmPW9hKGEpLGQ9MCxlPWYubGVuZ3RoO2U+ZDtkKyspcGEoZltkXSxnW2RdKTtpZihiKWlmKGMpZm9yKGY9Znx8b2EoYSksZz1nfHxvYShoKSxkPTAsZT1mLmxlbmd0aDtlPmQ7ZCsrKW5hKGZbZF0sZ1tkXSk7ZWxzZSBuYShhLGgpO3JldHVybiBnPW9hKGgsXCJzY3JpcHRcIiksZy5sZW5ndGg+MCYmbWEoZywhaSYmb2EoYSxcInNjcmlwdFwiKSksaH0sYnVpbGRGcmFnbWVudDpmdW5jdGlvbihhLGIsYyxkKXtmb3IodmFyIGUsZixnLGgsaSxqLGs9Yi5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksbD1bXSxtPTAsbz1hLmxlbmd0aDtvPm07bSsrKWlmKGU9YVttXSxlfHwwPT09ZSlpZihcIm9iamVjdFwiPT09bi50eXBlKGUpKW4ubWVyZ2UobCxlLm5vZGVUeXBlP1tlXTplKTtlbHNlIGlmKGNhLnRlc3QoZSkpe2Y9Znx8ay5hcHBlbmRDaGlsZChiLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGc9KGJhLmV4ZWMoZSl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpLGg9aWFbZ118fGlhLl9kZWZhdWx0LGYuaW5uZXJIVE1MPWhbMV0rZS5yZXBsYWNlKGFhLFwiPCQxPjwvJDI+XCIpK2hbMl0saj1oWzBdO3doaWxlKGotLSlmPWYubGFzdENoaWxkO24ubWVyZ2UobCxmLmNoaWxkTm9kZXMpLGY9ay5maXJzdENoaWxkLGYudGV4dENvbnRlbnQ9XCJcIn1lbHNlIGwucHVzaChiLmNyZWF0ZVRleHROb2RlKGUpKTtrLnRleHRDb250ZW50PVwiXCIsbT0wO3doaWxlKGU9bFttKytdKWlmKCghZHx8LTE9PT1uLmluQXJyYXkoZSxkKSkmJihpPW4uY29udGFpbnMoZS5vd25lckRvY3VtZW50LGUpLGY9b2Eoay5hcHBlbmRDaGlsZChlKSxcInNjcmlwdFwiKSxpJiZtYShmKSxjKSl7aj0wO3doaWxlKGU9ZltqKytdKWZhLnRlc3QoZS50eXBlfHxcIlwiKSYmYy5wdXNoKGUpfXJldHVybiBrfSxjbGVhbkRhdGE6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiLGMsZCxlLGY9bi5ldmVudC5zcGVjaWFsLGc9MDt2b2lkIDAhPT0oYz1hW2ddKTtnKyspe2lmKG4uYWNjZXB0RGF0YShjKSYmKGU9Y1tMLmV4cGFuZG9dLGUmJihiPUwuY2FjaGVbZV0pKSl7aWYoYi5ldmVudHMpZm9yKGQgaW4gYi5ldmVudHMpZltkXT9uLmV2ZW50LnJlbW92ZShjLGQpOm4ucmVtb3ZlRXZlbnQoYyxkLGIuaGFuZGxlKTtMLmNhY2hlW2VdJiZkZWxldGUgTC5jYWNoZVtlXX1kZWxldGUgTS5jYWNoZVtjW00uZXhwYW5kb11dfX19KSxuLmZuLmV4dGVuZCh7dGV4dDpmdW5jdGlvbihhKXtyZXR1cm4gSih0aGlzLGZ1bmN0aW9uKGEpe3JldHVybiB2b2lkIDA9PT1hP24udGV4dCh0aGlzKTp0aGlzLmVtcHR5KCkuZWFjaChmdW5jdGlvbigpeygxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSkmJih0aGlzLnRleHRDb250ZW50PWEpfSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0sYXBwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgYj1qYSh0aGlzLGEpO2IuYXBwZW5kQ2hpbGQoYSl9fSl9LHByZXBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsZnVuY3Rpb24oYSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciBiPWphKHRoaXMsYSk7Yi5pbnNlcnRCZWZvcmUoYSxiLmZpcnN0Q2hpbGQpfX0pfSxiZWZvcmU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcyl9KX0sYWZ0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcy5uZXh0U2libGluZyl9KX0scmVtb3ZlOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjLGQ9YT9uLmZpbHRlcihhLHRoaXMpOnRoaXMsZT0wO251bGwhPShjPWRbZV0pO2UrKylifHwxIT09Yy5ub2RlVHlwZXx8bi5jbGVhbkRhdGEob2EoYykpLGMucGFyZW50Tm9kZSYmKGImJm4uY29udGFpbnMoYy5vd25lckRvY3VtZW50LGMpJiZtYShvYShjLFwic2NyaXB0XCIpKSxjLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYykpO3JldHVybiB0aGlzfSxlbXB0eTpmdW5jdGlvbigpe2Zvcih2YXIgYSxiPTA7bnVsbCE9KGE9dGhpc1tiXSk7YisrKTE9PT1hLm5vZGVUeXBlJiYobi5jbGVhbkRhdGEob2EoYSwhMSkpLGEudGV4dENvbnRlbnQ9XCJcIik7cmV0dXJuIHRoaXN9LGNsb25lOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9bnVsbD09YT8hMTphLGI9bnVsbD09Yj9hOmIsdGhpcy5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gbi5jbG9uZSh0aGlzLGEsYil9KX0saHRtbDpmdW5jdGlvbihhKXtyZXR1cm4gSih0aGlzLGZ1bmN0aW9uKGEpe3ZhciBiPXRoaXNbMF18fHt9LGM9MCxkPXRoaXMubGVuZ3RoO2lmKHZvaWQgMD09PWEmJjE9PT1iLm5vZGVUeXBlKXJldHVybiBiLmlubmVySFRNTDtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmIWRhLnRlc3QoYSkmJiFpYVsoYmEuZXhlYyhhKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCldKXthPWEucmVwbGFjZShhYSxcIjwkMT48LyQyPlwiKTt0cnl7Zm9yKDtkPmM7YysrKWI9dGhpc1tjXXx8e30sMT09PWIubm9kZVR5cGUmJihuLmNsZWFuRGF0YShvYShiLCExKSksYi5pbm5lckhUTUw9YSk7Yj0wfWNhdGNoKGUpe319YiYmdGhpcy5lbXB0eSgpLmFwcGVuZChhKX0sbnVsbCxhLGFyZ3VtZW50cy5sZW5ndGgpfSxyZXBsYWNlV2l0aDpmdW5jdGlvbigpe3ZhciBhPWFyZ3VtZW50c1swXTtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsZnVuY3Rpb24oYil7YT10aGlzLnBhcmVudE5vZGUsbi5jbGVhbkRhdGEob2EodGhpcykpLGEmJmEucmVwbGFjZUNoaWxkKGIsdGhpcyl9KSxhJiYoYS5sZW5ndGh8fGEubm9kZVR5cGUpP3RoaXM6dGhpcy5yZW1vdmUoKX0sZGV0YWNoOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnJlbW92ZShhLCEwKX0sZG9tTWFuaXA6ZnVuY3Rpb24oYSxiKXthPWUuYXBwbHkoW10sYSk7dmFyIGMsZCxmLGcsaCxpLGo9MCxsPXRoaXMubGVuZ3RoLG09dGhpcyxvPWwtMSxwPWFbMF0scT1uLmlzRnVuY3Rpb24ocCk7aWYocXx8bD4xJiZcInN0cmluZ1wiPT10eXBlb2YgcCYmIWsuY2hlY2tDbG9uZSYmZWEudGVzdChwKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3ZhciBkPW0uZXEoYyk7cSYmKGFbMF09cC5jYWxsKHRoaXMsYyxkLmh0bWwoKSkpLGQuZG9tTWFuaXAoYSxiKX0pO2lmKGwmJihjPW4uYnVpbGRGcmFnbWVudChhLHRoaXNbMF0ub3duZXJEb2N1bWVudCwhMSx0aGlzKSxkPWMuZmlyc3RDaGlsZCwxPT09Yy5jaGlsZE5vZGVzLmxlbmd0aCYmKGM9ZCksZCkpe2ZvcihmPW4ubWFwKG9hKGMsXCJzY3JpcHRcIiksa2EpLGc9Zi5sZW5ndGg7bD5qO2orKyloPWMsaiE9PW8mJihoPW4uY2xvbmUoaCwhMCwhMCksZyYmbi5tZXJnZShmLG9hKGgsXCJzY3JpcHRcIikpKSxiLmNhbGwodGhpc1tqXSxoLGopO2lmKGcpZm9yKGk9ZltmLmxlbmd0aC0xXS5vd25lckRvY3VtZW50LG4ubWFwKGYsbGEpLGo9MDtnPmo7aisrKWg9ZltqXSxmYS50ZXN0KGgudHlwZXx8XCJcIikmJiFMLmFjY2VzcyhoLFwiZ2xvYmFsRXZhbFwiKSYmbi5jb250YWlucyhpLGgpJiYoaC5zcmM/bi5fZXZhbFVybCYmbi5fZXZhbFVybChoLnNyYyk6bi5nbG9iYWxFdmFsKGgudGV4dENvbnRlbnQucmVwbGFjZShoYSxcIlwiKSkpfXJldHVybiB0aGlzfX0pLG4uZWFjaCh7YXBwZW5kVG86XCJhcHBlbmRcIixwcmVwZW5kVG86XCJwcmVwZW5kXCIsaW5zZXJ0QmVmb3JlOlwiYmVmb3JlXCIsaW5zZXJ0QWZ0ZXI6XCJhZnRlclwiLHJlcGxhY2VBbGw6XCJyZXBsYWNlV2l0aFwifSxmdW5jdGlvbihhLGIpe24uZm5bYV09ZnVuY3Rpb24oYSl7Zm9yKHZhciBjLGQ9W10sZT1uKGEpLGc9ZS5sZW5ndGgtMSxoPTA7Zz49aDtoKyspYz1oPT09Zz90aGlzOnRoaXMuY2xvbmUoITApLG4oZVtoXSlbYl0oYyksZi5hcHBseShkLGMuZ2V0KCkpO3JldHVybiB0aGlzLnB1c2hTdGFjayhkKX19KTt2YXIgcWEscmE9e307ZnVuY3Rpb24gc2EoYixjKXt2YXIgZCxlPW4oYy5jcmVhdGVFbGVtZW50KGIpKS5hcHBlbmRUbyhjLmJvZHkpLGY9YS5nZXREZWZhdWx0Q29tcHV0ZWRTdHlsZSYmKGQ9YS5nZXREZWZhdWx0Q29tcHV0ZWRTdHlsZShlWzBdKSk/ZC5kaXNwbGF5Om4uY3NzKGVbMF0sXCJkaXNwbGF5XCIpO3JldHVybiBlLmRldGFjaCgpLGZ9ZnVuY3Rpb24gdGEoYSl7dmFyIGI9bCxjPXJhW2FdO3JldHVybiBjfHwoYz1zYShhLGIpLFwibm9uZVwiIT09YyYmY3x8KHFhPShxYXx8bihcIjxpZnJhbWUgZnJhbWVib3JkZXI9JzAnIHdpZHRoPScwJyBoZWlnaHQ9JzAnLz5cIikpLmFwcGVuZFRvKGIuZG9jdW1lbnRFbGVtZW50KSxiPXFhWzBdLmNvbnRlbnREb2N1bWVudCxiLndyaXRlKCksYi5jbG9zZSgpLGM9c2EoYSxiKSxxYS5kZXRhY2goKSkscmFbYV09YyksY312YXIgdWE9L15tYXJnaW4vLHZhPW5ldyBSZWdFeHAoXCJeKFwiK1ErXCIpKD8hcHgpW2EteiVdKyRcIixcImlcIiksd2E9ZnVuY3Rpb24oYil7cmV0dXJuIGIub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5vcGVuZXI/Yi5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoYixudWxsKTphLmdldENvbXB1dGVkU3R5bGUoYixudWxsKX07ZnVuY3Rpb24geGEoYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5zdHlsZTtyZXR1cm4gYz1jfHx3YShhKSxjJiYoZz1jLmdldFByb3BlcnR5VmFsdWUoYil8fGNbYl0pLGMmJihcIlwiIT09Z3x8bi5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSl8fChnPW4uc3R5bGUoYSxiKSksdmEudGVzdChnKSYmdWEudGVzdChiKSYmKGQ9aC53aWR0aCxlPWgubWluV2lkdGgsZj1oLm1heFdpZHRoLGgubWluV2lkdGg9aC5tYXhXaWR0aD1oLndpZHRoPWcsZz1jLndpZHRoLGgud2lkdGg9ZCxoLm1pbldpZHRoPWUsaC5tYXhXaWR0aD1mKSksdm9pZCAwIT09Zz9nK1wiXCI6Z31mdW5jdGlvbiB5YShhLGIpe3JldHVybntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYSgpP3ZvaWQgZGVsZXRlIHRoaXMuZ2V0Oih0aGlzLmdldD1iKS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX0hZnVuY3Rpb24oKXt2YXIgYixjLGQ9bC5kb2N1bWVudEVsZW1lbnQsZT1sLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZj1sLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aWYoZi5zdHlsZSl7Zi5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cImNvbnRlbnQtYm94XCIsZi5jbG9uZU5vZGUoITApLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiXCIsay5jbGVhckNsb25lU3R5bGU9XCJjb250ZW50LWJveFwiPT09Zi5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCxlLnN0eWxlLmNzc1RleHQ9XCJib3JkZXI6MDt3aWR0aDowO2hlaWdodDowO3RvcDowO2xlZnQ6LTk5OTlweDttYXJnaW4tdG9wOjFweDtwb3NpdGlvbjphYnNvbHV0ZVwiLGUuYXBwZW5kQ2hpbGQoZik7ZnVuY3Rpb24gZygpe2Yuc3R5bGUuY3NzVGV4dD1cIi13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmJsb2NrO21hcmdpbi10b3A6MSU7dG9wOjElO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7d2lkdGg6NHB4O3Bvc2l0aW9uOmFic29sdXRlXCIsZi5pbm5lckhUTUw9XCJcIixkLmFwcGVuZENoaWxkKGUpO3ZhciBnPWEuZ2V0Q29tcHV0ZWRTdHlsZShmLG51bGwpO2I9XCIxJVwiIT09Zy50b3AsYz1cIjRweFwiPT09Zy53aWR0aCxkLnJlbW92ZUNoaWxkKGUpfWEuZ2V0Q29tcHV0ZWRTdHlsZSYmbi5leHRlbmQoayx7cGl4ZWxQb3NpdGlvbjpmdW5jdGlvbigpe3JldHVybiBnKCksYn0sYm94U2l6aW5nUmVsaWFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09YyYmZygpLGN9LHJlbGlhYmxlTWFyZ2luUmlnaHQ6ZnVuY3Rpb24oKXt2YXIgYixjPWYuYXBwZW5kQ2hpbGQobC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtyZXR1cm4gYy5zdHlsZS5jc3NUZXh0PWYuc3R5bGUuY3NzVGV4dD1cIi13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveDstbW96LWJveC1zaXppbmc6Y29udGVudC1ib3g7Ym94LXNpemluZzpjb250ZW50LWJveDtkaXNwbGF5OmJsb2NrO21hcmdpbjowO2JvcmRlcjowO3BhZGRpbmc6MFwiLGMuc3R5bGUubWFyZ2luUmlnaHQ9Yy5zdHlsZS53aWR0aD1cIjBcIixmLnN0eWxlLndpZHRoPVwiMXB4XCIsZC5hcHBlbmRDaGlsZChlKSxiPSFwYXJzZUZsb2F0KGEuZ2V0Q29tcHV0ZWRTdHlsZShjLG51bGwpLm1hcmdpblJpZ2h0KSxkLnJlbW92ZUNoaWxkKGUpLGYucmVtb3ZlQ2hpbGQoYyksYn19KX19KCksbi5zd2FwPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlLGYsZz17fTtmb3IoZiBpbiBiKWdbZl09YS5zdHlsZVtmXSxhLnN0eWxlW2ZdPWJbZl07ZT1jLmFwcGx5KGEsZHx8W10pO2ZvcihmIGluIGIpYS5zdHlsZVtmXT1nW2ZdO3JldHVybiBlfTt2YXIgemE9L14obm9uZXx0YWJsZSg/IS1jW2VhXSkuKykvLEFhPW5ldyBSZWdFeHAoXCJeKFwiK1ErXCIpKC4qKSRcIixcImlcIiksQmE9bmV3IFJlZ0V4cChcIl4oWystXSk9KFwiK1ErXCIpXCIsXCJpXCIpLENhPXtwb3NpdGlvbjpcImFic29sdXRlXCIsdmlzaWJpbGl0eTpcImhpZGRlblwiLGRpc3BsYXk6XCJibG9ja1wifSxEYT17bGV0dGVyU3BhY2luZzpcIjBcIixmb250V2VpZ2h0OlwiNDAwXCJ9LEVhPVtcIldlYmtpdFwiLFwiT1wiLFwiTW96XCIsXCJtc1wiXTtmdW5jdGlvbiBGYShhLGIpe2lmKGIgaW4gYSlyZXR1cm4gYjt2YXIgYz1iWzBdLnRvVXBwZXJDYXNlKCkrYi5zbGljZSgxKSxkPWIsZT1FYS5sZW5ndGg7d2hpbGUoZS0tKWlmKGI9RWFbZV0rYyxiIGluIGEpcmV0dXJuIGI7cmV0dXJuIGR9ZnVuY3Rpb24gR2EoYSxiLGMpe3ZhciBkPUFhLmV4ZWMoYik7cmV0dXJuIGQ/TWF0aC5tYXgoMCxkWzFdLShjfHwwKSkrKGRbMl18fFwicHhcIik6Yn1mdW5jdGlvbiBIYShhLGIsYyxkLGUpe2Zvcih2YXIgZj1jPT09KGQ/XCJib3JkZXJcIjpcImNvbnRlbnRcIik/NDpcIndpZHRoXCI9PT1iPzE6MCxnPTA7ND5mO2YrPTIpXCJtYXJnaW5cIj09PWMmJihnKz1uLmNzcyhhLGMrUltmXSwhMCxlKSksZD8oXCJjb250ZW50XCI9PT1jJiYoZy09bi5jc3MoYSxcInBhZGRpbmdcIitSW2ZdLCEwLGUpKSxcIm1hcmdpblwiIT09YyYmKGctPW4uY3NzKGEsXCJib3JkZXJcIitSW2ZdK1wiV2lkdGhcIiwhMCxlKSkpOihnKz1uLmNzcyhhLFwicGFkZGluZ1wiK1JbZl0sITAsZSksXCJwYWRkaW5nXCIhPT1jJiYoZys9bi5jc3MoYSxcImJvcmRlclwiK1JbZl0rXCJXaWR0aFwiLCEwLGUpKSk7cmV0dXJuIGd9ZnVuY3Rpb24gSWEoYSxiLGMpe3ZhciBkPSEwLGU9XCJ3aWR0aFwiPT09Yj9hLm9mZnNldFdpZHRoOmEub2Zmc2V0SGVpZ2h0LGY9d2EoYSksZz1cImJvcmRlci1ib3hcIj09PW4uY3NzKGEsXCJib3hTaXppbmdcIiwhMSxmKTtpZigwPj1lfHxudWxsPT1lKXtpZihlPXhhKGEsYixmKSwoMD5lfHxudWxsPT1lKSYmKGU9YS5zdHlsZVtiXSksdmEudGVzdChlKSlyZXR1cm4gZTtkPWcmJihrLmJveFNpemluZ1JlbGlhYmxlKCl8fGU9PT1hLnN0eWxlW2JdKSxlPXBhcnNlRmxvYXQoZSl8fDB9cmV0dXJuIGUrSGEoYSxiLGN8fChnP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpLGQsZikrXCJweFwifWZ1bmN0aW9uIEphKGEsYil7Zm9yKHZhciBjLGQsZSxmPVtdLGc9MCxoPWEubGVuZ3RoO2g+ZztnKyspZD1hW2ddLGQuc3R5bGUmJihmW2ddPUwuZ2V0KGQsXCJvbGRkaXNwbGF5XCIpLGM9ZC5zdHlsZS5kaXNwbGF5LGI/KGZbZ118fFwibm9uZVwiIT09Y3x8KGQuc3R5bGUuZGlzcGxheT1cIlwiKSxcIlwiPT09ZC5zdHlsZS5kaXNwbGF5JiZTKGQpJiYoZltnXT1MLmFjY2VzcyhkLFwib2xkZGlzcGxheVwiLHRhKGQubm9kZU5hbWUpKSkpOihlPVMoZCksXCJub25lXCI9PT1jJiZlfHxMLnNldChkLFwib2xkZGlzcGxheVwiLGU/YzpuLmNzcyhkLFwiZGlzcGxheVwiKSkpKTtmb3IoZz0wO2g+ZztnKyspZD1hW2ddLGQuc3R5bGUmJihiJiZcIm5vbmVcIiE9PWQuc3R5bGUuZGlzcGxheSYmXCJcIiE9PWQuc3R5bGUuZGlzcGxheXx8KGQuc3R5bGUuZGlzcGxheT1iP2ZbZ118fFwiXCI6XCJub25lXCIpKTtyZXR1cm4gYX1uLmV4dGVuZCh7Y3NzSG9va3M6e29wYWNpdHk6e2dldDpmdW5jdGlvbihhLGIpe2lmKGIpe3ZhciBjPXhhKGEsXCJvcGFjaXR5XCIpO3JldHVyblwiXCI9PT1jP1wiMVwiOmN9fX19LGNzc051bWJlcjp7Y29sdW1uQ291bnQ6ITAsZmlsbE9wYWNpdHk6ITAsZmxleEdyb3c6ITAsZmxleFNocmluazohMCxmb250V2VpZ2h0OiEwLGxpbmVIZWlnaHQ6ITAsb3BhY2l0eTohMCxvcmRlcjohMCxvcnBoYW5zOiEwLHdpZG93czohMCx6SW5kZXg6ITAsem9vbTohMH0sY3NzUHJvcHM6e1wiZmxvYXRcIjpcImNzc0Zsb2F0XCJ9LHN0eWxlOmZ1bmN0aW9uKGEsYixjLGQpe2lmKGEmJjMhPT1hLm5vZGVUeXBlJiY4IT09YS5ub2RlVHlwZSYmYS5zdHlsZSl7dmFyIGUsZixnLGg9bi5jYW1lbENhc2UoYiksaT1hLnN0eWxlO3JldHVybiBiPW4uY3NzUHJvcHNbaF18fChuLmNzc1Byb3BzW2hdPUZhKGksaCkpLGc9bi5jc3NIb29rc1tiXXx8bi5jc3NIb29rc1toXSx2b2lkIDA9PT1jP2cmJlwiZ2V0XCJpbiBnJiZ2b2lkIDAhPT0oZT1nLmdldChhLCExLGQpKT9lOmlbYl06KGY9dHlwZW9mIGMsXCJzdHJpbmdcIj09PWYmJihlPUJhLmV4ZWMoYykpJiYoYz0oZVsxXSsxKSplWzJdK3BhcnNlRmxvYXQobi5jc3MoYSxiKSksZj1cIm51bWJlclwiKSxudWxsIT1jJiZjPT09YyYmKFwibnVtYmVyXCIhPT1mfHxuLmNzc051bWJlcltoXXx8KGMrPVwicHhcIiksay5jbGVhckNsb25lU3R5bGV8fFwiXCIhPT1jfHwwIT09Yi5pbmRleE9mKFwiYmFja2dyb3VuZFwiKXx8KGlbYl09XCJpbmhlcml0XCIpLGcmJlwic2V0XCJpbiBnJiZ2b2lkIDA9PT0oYz1nLnNldChhLGMsZCkpfHwoaVtiXT1jKSksdm9pZCAwKX19LGNzczpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGcsaD1uLmNhbWVsQ2FzZShiKTtyZXR1cm4gYj1uLmNzc1Byb3BzW2hdfHwobi5jc3NQcm9wc1toXT1GYShhLnN0eWxlLGgpKSxnPW4uY3NzSG9va3NbYl18fG4uY3NzSG9va3NbaF0sZyYmXCJnZXRcImluIGcmJihlPWcuZ2V0KGEsITAsYykpLHZvaWQgMD09PWUmJihlPXhhKGEsYixkKSksXCJub3JtYWxcIj09PWUmJmIgaW4gRGEmJihlPURhW2JdKSxcIlwiPT09Y3x8Yz8oZj1wYXJzZUZsb2F0KGUpLGM9PT0hMHx8bi5pc051bWVyaWMoZik/Znx8MDplKTplfX0pLG4uZWFjaChbXCJoZWlnaHRcIixcIndpZHRoXCJdLGZ1bmN0aW9uKGEsYil7bi5jc3NIb29rc1tiXT17Z2V0OmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gYz96YS50ZXN0KG4uY3NzKGEsXCJkaXNwbGF5XCIpKSYmMD09PWEub2Zmc2V0V2lkdGg/bi5zd2FwKGEsQ2EsZnVuY3Rpb24oKXtyZXR1cm4gSWEoYSxiLGQpfSk6SWEoYSxiLGQpOnZvaWQgMH0sc2V0OmZ1bmN0aW9uKGEsYyxkKXt2YXIgZT1kJiZ3YShhKTtyZXR1cm4gR2EoYSxjLGQ/SGEoYSxiLGQsXCJib3JkZXItYm94XCI9PT1uLmNzcyhhLFwiYm94U2l6aW5nXCIsITEsZSksZSk6MCl9fX0pLG4uY3NzSG9va3MubWFyZ2luUmlnaHQ9eWEoay5yZWxpYWJsZU1hcmdpblJpZ2h0LGZ1bmN0aW9uKGEsYil7cmV0dXJuIGI/bi5zd2FwKGEse2Rpc3BsYXk6XCJpbmxpbmUtYmxvY2tcIn0seGEsW2EsXCJtYXJnaW5SaWdodFwiXSk6dm9pZCAwfSksbi5lYWNoKHttYXJnaW46XCJcIixwYWRkaW5nOlwiXCIsYm9yZGVyOlwiV2lkdGhcIn0sZnVuY3Rpb24oYSxiKXtuLmNzc0hvb2tzW2ErYl09e2V4cGFuZDpmdW5jdGlvbihjKXtmb3IodmFyIGQ9MCxlPXt9LGY9XCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5zcGxpdChcIiBcIik6W2NdOzQ+ZDtkKyspZVthK1JbZF0rYl09ZltkXXx8ZltkLTJdfHxmWzBdO3JldHVybiBlfX0sdWEudGVzdChhKXx8KG4uY3NzSG9va3NbYStiXS5zZXQ9R2EpfSksbi5mbi5leHRlbmQoe2NzczpmdW5jdGlvbihhLGIpe3JldHVybiBKKHRoaXMsZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj17fSxnPTA7aWYobi5pc0FycmF5KGIpKXtmb3IoZD13YShhKSxlPWIubGVuZ3RoO2U+ZztnKyspZltiW2ddXT1uLmNzcyhhLGJbZ10sITEsZCk7cmV0dXJuIGZ9cmV0dXJuIHZvaWQgMCE9PWM/bi5zdHlsZShhLGIsYyk6bi5jc3MoYSxiKX0sYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHNob3c6ZnVuY3Rpb24oKXtyZXR1cm4gSmEodGhpcywhMCl9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gSmEodGhpcyl9LHRvZ2dsZTpmdW5jdGlvbihhKXtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGE/YT90aGlzLnNob3coKTp0aGlzLmhpZGUoKTp0aGlzLmVhY2goZnVuY3Rpb24oKXtTKHRoaXMpP24odGhpcykuc2hvdygpOm4odGhpcykuaGlkZSgpfSl9fSk7ZnVuY3Rpb24gS2EoYSxiLGMsZCxlKXtyZXR1cm4gbmV3IEthLnByb3RvdHlwZS5pbml0KGEsYixjLGQsZSl9bi5Ud2Vlbj1LYSxLYS5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOkthLGluaXQ6ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3RoaXMuZWxlbT1hLHRoaXMucHJvcD1jLHRoaXMuZWFzaW5nPWV8fFwic3dpbmdcIix0aGlzLm9wdGlvbnM9Yix0aGlzLnN0YXJ0PXRoaXMubm93PXRoaXMuY3VyKCksdGhpcy5lbmQ9ZCx0aGlzLnVuaXQ9Znx8KG4uY3NzTnVtYmVyW2NdP1wiXCI6XCJweFwiKX0sY3VyOmZ1bmN0aW9uKCl7dmFyIGE9S2EucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIGEmJmEuZ2V0P2EuZ2V0KHRoaXMpOkthLnByb3BIb29rcy5fZGVmYXVsdC5nZXQodGhpcyl9LHJ1bjpmdW5jdGlvbihhKXt2YXIgYixjPUthLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiB0aGlzLm9wdGlvbnMuZHVyYXRpb24/dGhpcy5wb3M9Yj1uLmVhc2luZ1t0aGlzLmVhc2luZ10oYSx0aGlzLm9wdGlvbnMuZHVyYXRpb24qYSwwLDEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKTp0aGlzLnBvcz1iPWEsdGhpcy5ub3c9KHRoaXMuZW5kLXRoaXMuc3RhcnQpKmIrdGhpcy5zdGFydCx0aGlzLm9wdGlvbnMuc3RlcCYmdGhpcy5vcHRpb25zLnN0ZXAuY2FsbCh0aGlzLmVsZW0sdGhpcy5ub3csdGhpcyksYyYmYy5zZXQ/Yy5zZXQodGhpcyk6S2EucHJvcEhvb2tzLl9kZWZhdWx0LnNldCh0aGlzKSx0aGlzfX0sS2EucHJvdG90eXBlLmluaXQucHJvdG90eXBlPUthLnByb3RvdHlwZSxLYS5wcm9wSG9va3M9e19kZWZhdWx0OntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIG51bGw9PWEuZWxlbVthLnByb3BdfHxhLmVsZW0uc3R5bGUmJm51bGwhPWEuZWxlbS5zdHlsZVthLnByb3BdPyhiPW4uY3NzKGEuZWxlbSxhLnByb3AsXCJcIiksYiYmXCJhdXRvXCIhPT1iP2I6MCk6YS5lbGVtW2EucHJvcF19LHNldDpmdW5jdGlvbihhKXtuLmZ4LnN0ZXBbYS5wcm9wXT9uLmZ4LnN0ZXBbYS5wcm9wXShhKTphLmVsZW0uc3R5bGUmJihudWxsIT1hLmVsZW0uc3R5bGVbbi5jc3NQcm9wc1thLnByb3BdXXx8bi5jc3NIb29rc1thLnByb3BdKT9uLnN0eWxlKGEuZWxlbSxhLnByb3AsYS5ub3crYS51bml0KTphLmVsZW1bYS5wcm9wXT1hLm5vd319fSxLYS5wcm9wSG9va3Muc2Nyb2xsVG9wPUthLnByb3BIb29rcy5zY3JvbGxMZWZ0PXtzZXQ6ZnVuY3Rpb24oYSl7YS5lbGVtLm5vZGVUeXBlJiZhLmVsZW0ucGFyZW50Tm9kZSYmKGEuZWxlbVthLnByb3BdPWEubm93KX19LG4uZWFzaW5nPXtsaW5lYXI6ZnVuY3Rpb24oYSl7cmV0dXJuIGF9LHN3aW5nOmZ1bmN0aW9uKGEpe3JldHVybi41LU1hdGguY29zKGEqTWF0aC5QSSkvMn19LG4uZng9S2EucHJvdG90eXBlLmluaXQsbi5meC5zdGVwPXt9O3ZhciBMYSxNYSxOYT0vXig/OnRvZ2dsZXxzaG93fGhpZGUpJC8sT2E9bmV3IFJlZ0V4cChcIl4oPzooWystXSk9fCkoXCIrUStcIikoW2EteiVdKikkXCIsXCJpXCIpLFBhPS9xdWV1ZUhvb2tzJC8sUWE9W1ZhXSxSYT17XCIqXCI6W2Z1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5jcmVhdGVUd2VlbihhLGIpLGQ9Yy5jdXIoKSxlPU9hLmV4ZWMoYiksZj1lJiZlWzNdfHwobi5jc3NOdW1iZXJbYV0/XCJcIjpcInB4XCIpLGc9KG4uY3NzTnVtYmVyW2FdfHxcInB4XCIhPT1mJiYrZCkmJk9hLmV4ZWMobi5jc3MoYy5lbGVtLGEpKSxoPTEsaT0yMDtpZihnJiZnWzNdIT09Zil7Zj1mfHxnWzNdLGU9ZXx8W10sZz0rZHx8MTtkbyBoPWh8fFwiLjVcIixnLz1oLG4uc3R5bGUoYy5lbGVtLGEsZytmKTt3aGlsZShoIT09KGg9Yy5jdXIoKS9kKSYmMSE9PWgmJi0taSl9cmV0dXJuIGUmJihnPWMuc3RhcnQ9K2d8fCtkfHwwLGMudW5pdD1mLGMuZW5kPWVbMV0/ZysoZVsxXSsxKSplWzJdOitlWzJdKSxjfV19O2Z1bmN0aW9uIFNhKCl7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtMYT12b2lkIDB9KSxMYT1uLm5vdygpfWZ1bmN0aW9uIFRhKGEsYil7dmFyIGMsZD0wLGU9e2hlaWdodDphfTtmb3IoYj1iPzE6MDs0PmQ7ZCs9Mi1iKWM9UltkXSxlW1wibWFyZ2luXCIrY109ZVtcInBhZGRpbmdcIitjXT1hO3JldHVybiBiJiYoZS5vcGFjaXR5PWUud2lkdGg9YSksZX1mdW5jdGlvbiBVYShhLGIsYyl7Zm9yKHZhciBkLGU9KFJhW2JdfHxbXSkuY29uY2F0KFJhW1wiKlwiXSksZj0wLGc9ZS5sZW5ndGg7Zz5mO2YrKylpZihkPWVbZl0uY2FsbChjLGIsYSkpcmV0dXJuIGR9ZnVuY3Rpb24gVmEoYSxiLGMpe3ZhciBkLGUsZixnLGgsaSxqLGssbD10aGlzLG09e30sbz1hLnN0eWxlLHA9YS5ub2RlVHlwZSYmUyhhKSxxPUwuZ2V0KGEsXCJmeHNob3dcIik7Yy5xdWV1ZXx8KGg9bi5fcXVldWVIb29rcyhhLFwiZnhcIiksbnVsbD09aC51bnF1ZXVlZCYmKGgudW5xdWV1ZWQ9MCxpPWguZW1wdHkuZmlyZSxoLmVtcHR5LmZpcmU9ZnVuY3Rpb24oKXtoLnVucXVldWVkfHxpKCl9KSxoLnVucXVldWVkKyssbC5hbHdheXMoZnVuY3Rpb24oKXtsLmFsd2F5cyhmdW5jdGlvbigpe2gudW5xdWV1ZWQtLSxuLnF1ZXVlKGEsXCJmeFwiKS5sZW5ndGh8fGguZW1wdHkuZmlyZSgpfSl9KSksMT09PWEubm9kZVR5cGUmJihcImhlaWdodFwiaW4gYnx8XCJ3aWR0aFwiaW4gYikmJihjLm92ZXJmbG93PVtvLm92ZXJmbG93LG8ub3ZlcmZsb3dYLG8ub3ZlcmZsb3dZXSxqPW4uY3NzKGEsXCJkaXNwbGF5XCIpLGs9XCJub25lXCI9PT1qP0wuZ2V0KGEsXCJvbGRkaXNwbGF5XCIpfHx0YShhLm5vZGVOYW1lKTpqLFwiaW5saW5lXCI9PT1rJiZcIm5vbmVcIj09PW4uY3NzKGEsXCJmbG9hdFwiKSYmKG8uZGlzcGxheT1cImlubGluZS1ibG9ja1wiKSksYy5vdmVyZmxvdyYmKG8ub3ZlcmZsb3c9XCJoaWRkZW5cIixsLmFsd2F5cyhmdW5jdGlvbigpe28ub3ZlcmZsb3c9Yy5vdmVyZmxvd1swXSxvLm92ZXJmbG93WD1jLm92ZXJmbG93WzFdLG8ub3ZlcmZsb3dZPWMub3ZlcmZsb3dbMl19KSk7Zm9yKGQgaW4gYilpZihlPWJbZF0sTmEuZXhlYyhlKSl7aWYoZGVsZXRlIGJbZF0sZj1mfHxcInRvZ2dsZVwiPT09ZSxlPT09KHA/XCJoaWRlXCI6XCJzaG93XCIpKXtpZihcInNob3dcIiE9PWV8fCFxfHx2b2lkIDA9PT1xW2RdKWNvbnRpbnVlO3A9ITB9bVtkXT1xJiZxW2RdfHxuLnN0eWxlKGEsZCl9ZWxzZSBqPXZvaWQgMDtpZihuLmlzRW1wdHlPYmplY3QobSkpXCJpbmxpbmVcIj09PShcIm5vbmVcIj09PWo/dGEoYS5ub2RlTmFtZSk6aikmJihvLmRpc3BsYXk9aik7ZWxzZXtxP1wiaGlkZGVuXCJpbiBxJiYocD1xLmhpZGRlbik6cT1MLmFjY2VzcyhhLFwiZnhzaG93XCIse30pLGYmJihxLmhpZGRlbj0hcCkscD9uKGEpLnNob3coKTpsLmRvbmUoZnVuY3Rpb24oKXtuKGEpLmhpZGUoKX0pLGwuZG9uZShmdW5jdGlvbigpe3ZhciBiO0wucmVtb3ZlKGEsXCJmeHNob3dcIik7Zm9yKGIgaW4gbSluLnN0eWxlKGEsYixtW2JdKX0pO2ZvcihkIGluIG0pZz1VYShwP3FbZF06MCxkLGwpLGQgaW4gcXx8KHFbZF09Zy5zdGFydCxwJiYoZy5lbmQ9Zy5zdGFydCxnLnN0YXJ0PVwid2lkdGhcIj09PWR8fFwiaGVpZ2h0XCI9PT1kPzE6MCkpfX1mdW5jdGlvbiBXYShhLGIpe3ZhciBjLGQsZSxmLGc7Zm9yKGMgaW4gYSlpZihkPW4uY2FtZWxDYXNlKGMpLGU9YltkXSxmPWFbY10sbi5pc0FycmF5KGYpJiYoZT1mWzFdLGY9YVtjXT1mWzBdKSxjIT09ZCYmKGFbZF09ZixkZWxldGUgYVtjXSksZz1uLmNzc0hvb2tzW2RdLGcmJlwiZXhwYW5kXCJpbiBnKXtmPWcuZXhwYW5kKGYpLGRlbGV0ZSBhW2RdO2ZvcihjIGluIGYpYyBpbiBhfHwoYVtjXT1mW2NdLGJbY109ZSl9ZWxzZSBiW2RdPWV9ZnVuY3Rpb24gWGEoYSxiLGMpe3ZhciBkLGUsZj0wLGc9UWEubGVuZ3RoLGg9bi5EZWZlcnJlZCgpLmFsd2F5cyhmdW5jdGlvbigpe2RlbGV0ZSBpLmVsZW19KSxpPWZ1bmN0aW9uKCl7aWYoZSlyZXR1cm4hMTtmb3IodmFyIGI9TGF8fFNhKCksYz1NYXRoLm1heCgwLGouc3RhcnRUaW1lK2ouZHVyYXRpb24tYiksZD1jL2ouZHVyYXRpb258fDAsZj0xLWQsZz0wLGk9ai50d2VlbnMubGVuZ3RoO2k+ZztnKyspai50d2VlbnNbZ10ucnVuKGYpO3JldHVybiBoLm5vdGlmeVdpdGgoYSxbaixmLGNdKSwxPmYmJmk/YzooaC5yZXNvbHZlV2l0aChhLFtqXSksITEpfSxqPWgucHJvbWlzZSh7ZWxlbTphLHByb3BzOm4uZXh0ZW5kKHt9LGIpLG9wdHM6bi5leHRlbmQoITAse3NwZWNpYWxFYXNpbmc6e319LGMpLG9yaWdpbmFsUHJvcGVydGllczpiLG9yaWdpbmFsT3B0aW9uczpjLHN0YXJ0VGltZTpMYXx8U2EoKSxkdXJhdGlvbjpjLmR1cmF0aW9uLHR3ZWVuczpbXSxjcmVhdGVUd2VlbjpmdW5jdGlvbihiLGMpe3ZhciBkPW4uVHdlZW4oYSxqLm9wdHMsYixjLGoub3B0cy5zcGVjaWFsRWFzaW5nW2JdfHxqLm9wdHMuZWFzaW5nKTtyZXR1cm4gai50d2VlbnMucHVzaChkKSxkfSxzdG9wOmZ1bmN0aW9uKGIpe3ZhciBjPTAsZD1iP2oudHdlZW5zLmxlbmd0aDowO2lmKGUpcmV0dXJuIHRoaXM7Zm9yKGU9ITA7ZD5jO2MrKylqLnR3ZWVuc1tjXS5ydW4oMSk7cmV0dXJuIGI/aC5yZXNvbHZlV2l0aChhLFtqLGJdKTpoLnJlamVjdFdpdGgoYSxbaixiXSksdGhpc319KSxrPWoucHJvcHM7Zm9yKFdhKGssai5vcHRzLnNwZWNpYWxFYXNpbmcpO2c+ZjtmKyspaWYoZD1RYVtmXS5jYWxsKGosYSxrLGoub3B0cykpcmV0dXJuIGQ7cmV0dXJuIG4ubWFwKGssVWEsaiksbi5pc0Z1bmN0aW9uKGoub3B0cy5zdGFydCkmJmoub3B0cy5zdGFydC5jYWxsKGEsaiksbi5meC50aW1lcihuLmV4dGVuZChpLHtlbGVtOmEsYW5pbTpqLHF1ZXVlOmoub3B0cy5xdWV1ZX0pKSxqLnByb2dyZXNzKGoub3B0cy5wcm9ncmVzcykuZG9uZShqLm9wdHMuZG9uZSxqLm9wdHMuY29tcGxldGUpLmZhaWwoai5vcHRzLmZhaWwpLmFsd2F5cyhqLm9wdHMuYWx3YXlzKX1uLkFuaW1hdGlvbj1uLmV4dGVuZChYYSx7dHdlZW5lcjpmdW5jdGlvbihhLGIpe24uaXNGdW5jdGlvbihhKT8oYj1hLGE9W1wiKlwiXSk6YT1hLnNwbGl0KFwiIFwiKTtmb3IodmFyIGMsZD0wLGU9YS5sZW5ndGg7ZT5kO2QrKyljPWFbZF0sUmFbY109UmFbY118fFtdLFJhW2NdLnVuc2hpZnQoYil9LHByZWZpbHRlcjpmdW5jdGlvbihhLGIpe2I/UWEudW5zaGlmdChhKTpRYS5wdXNoKGEpfX0pLG4uc3BlZWQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWEmJlwib2JqZWN0XCI9PXR5cGVvZiBhP24uZXh0ZW5kKHt9LGEpOntjb21wbGV0ZTpjfHwhYyYmYnx8bi5pc0Z1bmN0aW9uKGEpJiZhLGR1cmF0aW9uOmEsZWFzaW5nOmMmJmJ8fGImJiFuLmlzRnVuY3Rpb24oYikmJmJ9O3JldHVybiBkLmR1cmF0aW9uPW4uZngub2ZmPzA6XCJudW1iZXJcIj09dHlwZW9mIGQuZHVyYXRpb24/ZC5kdXJhdGlvbjpkLmR1cmF0aW9uIGluIG4uZnguc3BlZWRzP24uZnguc3BlZWRzW2QuZHVyYXRpb25dOm4uZnguc3BlZWRzLl9kZWZhdWx0LChudWxsPT1kLnF1ZXVlfHxkLnF1ZXVlPT09ITApJiYoZC5xdWV1ZT1cImZ4XCIpLGQub2xkPWQuY29tcGxldGUsZC5jb21wbGV0ZT1mdW5jdGlvbigpe24uaXNGdW5jdGlvbihkLm9sZCkmJmQub2xkLmNhbGwodGhpcyksZC5xdWV1ZSYmbi5kZXF1ZXVlKHRoaXMsZC5xdWV1ZSl9LGR9LG4uZm4uZXh0ZW5kKHtmYWRlVG86ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMuZmlsdGVyKFMpLmNzcyhcIm9wYWNpdHlcIiwwKS5zaG93KCkuZW5kKCkuYW5pbWF0ZSh7b3BhY2l0eTpifSxhLGMsZCl9LGFuaW1hdGU6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9bi5pc0VtcHR5T2JqZWN0KGEpLGY9bi5zcGVlZChiLGMsZCksZz1mdW5jdGlvbigpe3ZhciBiPVhhKHRoaXMsbi5leHRlbmQoe30sYSksZik7KGV8fEwuZ2V0KHRoaXMsXCJmaW5pc2hcIikpJiZiLnN0b3AoITApfTtyZXR1cm4gZy5maW5pc2g9ZyxlfHxmLnF1ZXVlPT09ITE/dGhpcy5lYWNoKGcpOnRoaXMucXVldWUoZi5xdWV1ZSxnKX0sc3RvcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5zdG9wO2RlbGV0ZSBhLnN0b3AsYihjKX07cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGEmJihjPWIsYj1hLGE9dm9pZCAwKSxiJiZhIT09ITEmJnRoaXMucXVldWUoYXx8XCJmeFwiLFtdKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj0hMCxlPW51bGwhPWEmJmErXCJxdWV1ZUhvb2tzXCIsZj1uLnRpbWVycyxnPUwuZ2V0KHRoaXMpO2lmKGUpZ1tlXSYmZ1tlXS5zdG9wJiZkKGdbZV0pO2Vsc2UgZm9yKGUgaW4gZylnW2VdJiZnW2VdLnN0b3AmJlBhLnRlc3QoZSkmJmQoZ1tlXSk7Zm9yKGU9Zi5sZW5ndGg7ZS0tOylmW2VdLmVsZW0hPT10aGlzfHxudWxsIT1hJiZmW2VdLnF1ZXVlIT09YXx8KGZbZV0uYW5pbS5zdG9wKGMpLGI9ITEsZi5zcGxpY2UoZSwxKSk7KGJ8fCFjKSYmbi5kZXF1ZXVlKHRoaXMsYSl9KX0sZmluaXNoOmZ1bmN0aW9uKGEpe3JldHVybiBhIT09ITEmJihhPWF8fFwiZnhcIiksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGIsYz1MLmdldCh0aGlzKSxkPWNbYStcInF1ZXVlXCJdLGU9Y1thK1wicXVldWVIb29rc1wiXSxmPW4udGltZXJzLGc9ZD9kLmxlbmd0aDowO2ZvcihjLmZpbmlzaD0hMCxuLnF1ZXVlKHRoaXMsYSxbXSksZSYmZS5zdG9wJiZlLnN0b3AuY2FsbCh0aGlzLCEwKSxiPWYubGVuZ3RoO2ItLTspZltiXS5lbGVtPT09dGhpcyYmZltiXS5xdWV1ZT09PWEmJihmW2JdLmFuaW0uc3RvcCghMCksZi5zcGxpY2UoYiwxKSk7Zm9yKGI9MDtnPmI7YisrKWRbYl0mJmRbYl0uZmluaXNoJiZkW2JdLmZpbmlzaC5jYWxsKHRoaXMpO2RlbGV0ZSBjLmZpbmlzaH0pfX0pLG4uZWFjaChbXCJ0b2dnbGVcIixcInNob3dcIixcImhpZGVcIl0sZnVuY3Rpb24oYSxiKXt2YXIgYz1uLmZuW2JdO24uZm5bYl09ZnVuY3Rpb24oYSxkLGUpe3JldHVybiBudWxsPT1hfHxcImJvb2xlYW5cIj09dHlwZW9mIGE/Yy5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dGhpcy5hbmltYXRlKFRhKGIsITApLGEsZCxlKX19KSxuLmVhY2goe3NsaWRlRG93bjpUYShcInNob3dcIiksc2xpZGVVcDpUYShcImhpZGVcIiksc2xpZGVUb2dnbGU6VGEoXCJ0b2dnbGVcIiksZmFkZUluOntvcGFjaXR5Olwic2hvd1wifSxmYWRlT3V0OntvcGFjaXR5OlwiaGlkZVwifSxmYWRlVG9nZ2xlOntvcGFjaXR5OlwidG9nZ2xlXCJ9fSxmdW5jdGlvbihhLGIpe24uZm5bYV09ZnVuY3Rpb24oYSxjLGQpe3JldHVybiB0aGlzLmFuaW1hdGUoYixhLGMsZCl9fSksbi50aW1lcnM9W10sbi5meC50aWNrPWZ1bmN0aW9uKCl7dmFyIGEsYj0wLGM9bi50aW1lcnM7Zm9yKExhPW4ubm93KCk7YjxjLmxlbmd0aDtiKyspYT1jW2JdLGEoKXx8Y1tiXSE9PWF8fGMuc3BsaWNlKGItLSwxKTtjLmxlbmd0aHx8bi5meC5zdG9wKCksTGE9dm9pZCAwfSxuLmZ4LnRpbWVyPWZ1bmN0aW9uKGEpe24udGltZXJzLnB1c2goYSksYSgpP24uZnguc3RhcnQoKTpuLnRpbWVycy5wb3AoKX0sbi5meC5pbnRlcnZhbD0xMyxuLmZ4LnN0YXJ0PWZ1bmN0aW9uKCl7TWF8fChNYT1zZXRJbnRlcnZhbChuLmZ4LnRpY2ssbi5meC5pbnRlcnZhbCkpfSxuLmZ4LnN0b3A9ZnVuY3Rpb24oKXtjbGVhckludGVydmFsKE1hKSxNYT1udWxsfSxuLmZ4LnNwZWVkcz17c2xvdzo2MDAsZmFzdDoyMDAsX2RlZmF1bHQ6NDAwfSxuLmZuLmRlbGF5PWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9bi5meD9uLmZ4LnNwZWVkc1thXXx8YTphLGI9Ynx8XCJmeFwiLHRoaXMucXVldWUoYixmdW5jdGlvbihiLGMpe3ZhciBkPXNldFRpbWVvdXQoYixhKTtjLnN0b3A9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQoZCl9fSl9LGZ1bmN0aW9uKCl7dmFyIGE9bC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYj1sLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksYz1iLmFwcGVuZENoaWxkKGwuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSk7YS50eXBlPVwiY2hlY2tib3hcIixrLmNoZWNrT249XCJcIiE9PWEudmFsdWUsay5vcHRTZWxlY3RlZD1jLnNlbGVjdGVkLGIuZGlzYWJsZWQ9ITAsay5vcHREaXNhYmxlZD0hYy5kaXNhYmxlZCxhPWwuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGEudmFsdWU9XCJ0XCIsYS50eXBlPVwicmFkaW9cIixrLnJhZGlvVmFsdWU9XCJ0XCI9PT1hLnZhbHVlfSgpO3ZhciBZYSxaYSwkYT1uLmV4cHIuYXR0ckhhbmRsZTtuLmZuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihhLGIpe3JldHVybiBKKHRoaXMsbi5hdHRyLGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtuLnJlbW92ZUF0dHIodGhpcyxhKX0pfX0pLG4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9YS5ub2RlVHlwZTtpZihhJiYzIT09ZiYmOCE9PWYmJjIhPT1mKXJldHVybiB0eXBlb2YgYS5nZXRBdHRyaWJ1dGU9PT1VP24ucHJvcChhLGIsYyk6KDE9PT1mJiZuLmlzWE1MRG9jKGEpfHwoYj1iLnRvTG93ZXJDYXNlKCksZD1uLmF0dHJIb29rc1tiXXx8KG4uZXhwci5tYXRjaC5ib29sLnRlc3QoYik/WmE6WWEpKSxcbnZvaWQgMD09PWM/ZCYmXCJnZXRcImluIGQmJm51bGwhPT0oZT1kLmdldChhLGIpKT9lOihlPW4uZmluZC5hdHRyKGEsYiksbnVsbD09ZT92b2lkIDA6ZSk6bnVsbCE9PWM/ZCYmXCJzZXRcImluIGQmJnZvaWQgMCE9PShlPWQuc2V0KGEsYyxiKSk/ZTooYS5zZXRBdHRyaWJ1dGUoYixjK1wiXCIpLGMpOnZvaWQgbi5yZW1vdmVBdHRyKGEsYikpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlPTAsZj1iJiZiLm1hdGNoKEUpO2lmKGYmJjE9PT1hLm5vZGVUeXBlKXdoaWxlKGM9ZltlKytdKWQ9bi5wcm9wRml4W2NdfHxjLG4uZXhwci5tYXRjaC5ib29sLnRlc3QoYykmJihhW2RdPSExKSxhLnJlbW92ZUF0dHJpYnV0ZShjKX0sYXR0ckhvb2tzOnt0eXBlOntzZXQ6ZnVuY3Rpb24oYSxiKXtpZighay5yYWRpb1ZhbHVlJiZcInJhZGlvXCI9PT1iJiZuLm5vZGVOYW1lKGEsXCJpbnB1dFwiKSl7dmFyIGM9YS52YWx1ZTtyZXR1cm4gYS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsYiksYyYmKGEudmFsdWU9YyksYn19fX19KSxaYT17c2V0OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYj09PSExP24ucmVtb3ZlQXR0cihhLGMpOmEuc2V0QXR0cmlidXRlKGMsYyksY319LG4uZWFjaChuLmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goL1xcdysvZyksZnVuY3Rpb24oYSxiKXt2YXIgYz0kYVtiXXx8bi5maW5kLmF0dHI7JGFbYl09ZnVuY3Rpb24oYSxiLGQpe3ZhciBlLGY7cmV0dXJuIGR8fChmPSRhW2JdLCRhW2JdPWUsZT1udWxsIT1jKGEsYixkKT9iLnRvTG93ZXJDYXNlKCk6bnVsbCwkYVtiXT1mKSxlfX0pO3ZhciBfYT0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pO24uZm4uZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGEsYil7cmV0dXJuIEoodGhpcyxuLnByb3AsYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZVByb3A6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2RlbGV0ZSB0aGlzW24ucHJvcEZpeFthXXx8YV19KX19KSxuLmV4dGVuZCh7cHJvcEZpeDp7XCJmb3JcIjpcImh0bWxGb3JcIixcImNsYXNzXCI6XCJjbGFzc05hbWVcIn0scHJvcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGc9YS5ub2RlVHlwZTtpZihhJiYzIT09ZyYmOCE9PWcmJjIhPT1nKXJldHVybiBmPTEhPT1nfHwhbi5pc1hNTERvYyhhKSxmJiYoYj1uLnByb3BGaXhbYl18fGIsZT1uLnByb3BIb29rc1tiXSksdm9pZCAwIT09Yz9lJiZcInNldFwiaW4gZSYmdm9pZCAwIT09KGQ9ZS5zZXQoYSxjLGIpKT9kOmFbYl09YzplJiZcImdldFwiaW4gZSYmbnVsbCE9PShkPWUuZ2V0KGEsYikpP2Q6YVtiXX0scHJvcEhvb2tzOnt0YWJJbmRleDp7Z2V0OmZ1bmN0aW9uKGEpe3JldHVybiBhLmhhc0F0dHJpYnV0ZShcInRhYmluZGV4XCIpfHxfYS50ZXN0KGEubm9kZU5hbWUpfHxhLmhyZWY/YS50YWJJbmRleDotMX19fX0pLGsub3B0U2VsZWN0ZWR8fChuLnByb3BIb29rcy5zZWxlY3RlZD17Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtyZXR1cm4gYiYmYi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxudWxsfX0pLG4uZWFjaChbXCJ0YWJJbmRleFwiLFwicmVhZE9ubHlcIixcIm1heExlbmd0aFwiLFwiY2VsbFNwYWNpbmdcIixcImNlbGxQYWRkaW5nXCIsXCJyb3dTcGFuXCIsXCJjb2xTcGFuXCIsXCJ1c2VNYXBcIixcImZyYW1lQm9yZGVyXCIsXCJjb250ZW50RWRpdGFibGVcIl0sZnVuY3Rpb24oKXtuLnByb3BGaXhbdGhpcy50b0xvd2VyQ2FzZSgpXT10aGlzfSk7dmFyIGFiPS9bXFx0XFxyXFxuXFxmXS9nO24uZm4uZXh0ZW5kKHthZGRDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaD1cInN0cmluZ1wiPT10eXBlb2YgYSYmYSxpPTAsaj10aGlzLmxlbmd0aDtpZihuLmlzRnVuY3Rpb24oYSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihiKXtuKHRoaXMpLmFkZENsYXNzKGEuY2FsbCh0aGlzLGIsdGhpcy5jbGFzc05hbWUpKX0pO2lmKGgpZm9yKGI9KGF8fFwiXCIpLm1hdGNoKEUpfHxbXTtqPmk7aSsrKWlmKGM9dGhpc1tpXSxkPTE9PT1jLm5vZGVUeXBlJiYoYy5jbGFzc05hbWU/KFwiIFwiK2MuY2xhc3NOYW1lK1wiIFwiKS5yZXBsYWNlKGFiLFwiIFwiKTpcIiBcIikpe2Y9MDt3aGlsZShlPWJbZisrXSlkLmluZGV4T2YoXCIgXCIrZStcIiBcIik8MCYmKGQrPWUrXCIgXCIpO2c9bi50cmltKGQpLGMuY2xhc3NOYW1lIT09ZyYmKGMuY2xhc3NOYW1lPWcpfXJldHVybiB0aGlzfSxyZW1vdmVDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaD0wPT09YXJndW1lbnRzLmxlbmd0aHx8XCJzdHJpbmdcIj09dHlwZW9mIGEmJmEsaT0wLGo9dGhpcy5sZW5ndGg7aWYobi5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS5yZW1vdmVDbGFzcyhhLmNhbGwodGhpcyxiLHRoaXMuY2xhc3NOYW1lKSl9KTtpZihoKWZvcihiPShhfHxcIlwiKS5tYXRjaChFKXx8W107aj5pO2krKylpZihjPXRoaXNbaV0sZD0xPT09Yy5ub2RlVHlwZSYmKGMuY2xhc3NOYW1lPyhcIiBcIitjLmNsYXNzTmFtZStcIiBcIikucmVwbGFjZShhYixcIiBcIik6XCJcIikpe2Y9MDt3aGlsZShlPWJbZisrXSl3aGlsZShkLmluZGV4T2YoXCIgXCIrZStcIiBcIik+PTApZD1kLnJlcGxhY2UoXCIgXCIrZStcIiBcIixcIiBcIik7Zz1hP24udHJpbShkKTpcIlwiLGMuY2xhc3NOYW1lIT09ZyYmKGMuY2xhc3NOYW1lPWcpfXJldHVybiB0aGlzfSx0b2dnbGVDbGFzczpmdW5jdGlvbihhLGIpe3ZhciBjPXR5cGVvZiBhO3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgYiYmXCJzdHJpbmdcIj09PWM/Yj90aGlzLmFkZENsYXNzKGEpOnRoaXMucmVtb3ZlQ2xhc3MoYSk6dGhpcy5lYWNoKG4uaXNGdW5jdGlvbihhKT9mdW5jdGlvbihjKXtuKHRoaXMpLnRvZ2dsZUNsYXNzKGEuY2FsbCh0aGlzLGMsdGhpcy5jbGFzc05hbWUsYiksYil9OmZ1bmN0aW9uKCl7aWYoXCJzdHJpbmdcIj09PWMpe3ZhciBiLGQ9MCxlPW4odGhpcyksZj1hLm1hdGNoKEUpfHxbXTt3aGlsZShiPWZbZCsrXSllLmhhc0NsYXNzKGIpP2UucmVtb3ZlQ2xhc3MoYik6ZS5hZGRDbGFzcyhiKX1lbHNlKGM9PT1VfHxcImJvb2xlYW5cIj09PWMpJiYodGhpcy5jbGFzc05hbWUmJkwuc2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIsdGhpcy5jbGFzc05hbWUpLHRoaXMuY2xhc3NOYW1lPXRoaXMuY2xhc3NOYW1lfHxhPT09ITE/XCJcIjpMLmdldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiKXx8XCJcIil9KX0saGFzQ2xhc3M6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPVwiIFwiK2ErXCIgXCIsYz0wLGQ9dGhpcy5sZW5ndGg7ZD5jO2MrKylpZigxPT09dGhpc1tjXS5ub2RlVHlwZSYmKFwiIFwiK3RoaXNbY10uY2xhc3NOYW1lK1wiIFwiKS5yZXBsYWNlKGFiLFwiIFwiKS5pbmRleE9mKGIpPj0wKXJldHVybiEwO3JldHVybiExfX0pO3ZhciBiYj0vXFxyL2c7bi5mbi5leHRlbmQoe3ZhbDpmdW5jdGlvbihhKXt2YXIgYixjLGQsZT10aGlzWzBdO3tpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiBkPW4uaXNGdW5jdGlvbihhKSx0aGlzLmVhY2goZnVuY3Rpb24oYyl7dmFyIGU7MT09PXRoaXMubm9kZVR5cGUmJihlPWQ/YS5jYWxsKHRoaXMsYyxuKHRoaXMpLnZhbCgpKTphLG51bGw9PWU/ZT1cIlwiOlwibnVtYmVyXCI9PXR5cGVvZiBlP2UrPVwiXCI6bi5pc0FycmF5KGUpJiYoZT1uLm1hcChlLGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP1wiXCI6YStcIlwifSkpLGI9bi52YWxIb29rc1t0aGlzLnR5cGVdfHxuLnZhbEhvb2tzW3RoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sYiYmXCJzZXRcImluIGImJnZvaWQgMCE9PWIuc2V0KHRoaXMsZSxcInZhbHVlXCIpfHwodGhpcy52YWx1ZT1lKSl9KTtpZihlKXJldHVybiBiPW4udmFsSG9va3NbZS50eXBlXXx8bi52YWxIb29rc1tlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLGImJlwiZ2V0XCJpbiBiJiZ2b2lkIDAhPT0oYz1iLmdldChlLFwidmFsdWVcIikpP2M6KGM9ZS52YWx1ZSxcInN0cmluZ1wiPT10eXBlb2YgYz9jLnJlcGxhY2UoYmIsXCJcIik6bnVsbD09Yz9cIlwiOmMpfX19KSxuLmV4dGVuZCh7dmFsSG9va3M6e29wdGlvbjp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPW4uZmluZC5hdHRyKGEsXCJ2YWx1ZVwiKTtyZXR1cm4gbnVsbCE9Yj9iOm4udHJpbShuLnRleHQoYSkpfX0sc2VsZWN0OntnZXQ6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiLGMsZD1hLm9wdGlvbnMsZT1hLnNlbGVjdGVkSW5kZXgsZj1cInNlbGVjdC1vbmVcIj09PWEudHlwZXx8MD5lLGc9Zj9udWxsOltdLGg9Zj9lKzE6ZC5sZW5ndGgsaT0wPmU/aDpmP2U6MDtoPmk7aSsrKWlmKGM9ZFtpXSwhKCFjLnNlbGVjdGVkJiZpIT09ZXx8KGsub3B0RGlzYWJsZWQ/Yy5kaXNhYmxlZDpudWxsIT09Yy5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSl8fGMucGFyZW50Tm9kZS5kaXNhYmxlZCYmbi5ub2RlTmFtZShjLnBhcmVudE5vZGUsXCJvcHRncm91cFwiKSkpe2lmKGI9bihjKS52YWwoKSxmKXJldHVybiBiO2cucHVzaChiKX1yZXR1cm4gZ30sc2V0OmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlPWEub3B0aW9ucyxmPW4ubWFrZUFycmF5KGIpLGc9ZS5sZW5ndGg7d2hpbGUoZy0tKWQ9ZVtnXSwoZC5zZWxlY3RlZD1uLmluQXJyYXkoZC52YWx1ZSxmKT49MCkmJihjPSEwKTtyZXR1cm4gY3x8KGEuc2VsZWN0ZWRJbmRleD0tMSksZn19fX0pLG4uZWFjaChbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0sZnVuY3Rpb24oKXtuLnZhbEhvb2tzW3RoaXNdPXtzZXQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbi5pc0FycmF5KGIpP2EuY2hlY2tlZD1uLmluQXJyYXkobihhKS52YWwoKSxiKT49MDp2b2lkIDB9fSxrLmNoZWNrT258fChuLnZhbEhvb2tzW3RoaXNdLmdldD1mdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09PWEuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik/XCJvblwiOmEudmFsdWV9KX0pLG4uZWFjaChcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCBsb2FkIHJlc2l6ZSBzY3JvbGwgdW5sb2FkIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgZXJyb3IgY29udGV4dG1lbnVcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSxiKXtuLmZuW2JdPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MD90aGlzLm9uKGIsbnVsbCxhLGMpOnRoaXMudHJpZ2dlcihiKX19KSxuLmZuLmV4dGVuZCh7aG92ZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5tb3VzZWVudGVyKGEpLm1vdXNlbGVhdmUoYnx8YSl9LGJpbmQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLm9uKGEsbnVsbCxiLGMpfSx1bmJpbmQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5vZmYoYSxudWxsLGIpfSxkZWxlZ2F0ZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5vbihiLGEsYyxkKX0sdW5kZWxlZ2F0ZTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIDE9PT1hcmd1bWVudHMubGVuZ3RoP3RoaXMub2ZmKGEsXCIqKlwiKTp0aGlzLm9mZihiLGF8fFwiKipcIixjKX19KTt2YXIgY2I9bi5ub3coKSxkYj0vXFw/LztuLnBhcnNlSlNPTj1mdW5jdGlvbihhKXtyZXR1cm4gSlNPTi5wYXJzZShhK1wiXCIpfSxuLnBhcnNlWE1MPWZ1bmN0aW9uKGEpe3ZhciBiLGM7aWYoIWF8fFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybiBudWxsO3RyeXtjPW5ldyBET01QYXJzZXIsYj1jLnBhcnNlRnJvbVN0cmluZyhhLFwidGV4dC94bWxcIil9Y2F0Y2goZCl7Yj12b2lkIDB9cmV0dXJuKCFifHxiLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFyc2VyZXJyb3JcIikubGVuZ3RoKSYmbi5lcnJvcihcIkludmFsaWQgWE1MOiBcIithKSxifTt2YXIgZWI9LyMuKiQvLGZiPS8oWz8mXSlfPVteJl0qLyxnYj0vXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKikkL2dtLGhiPS9eKD86YWJvdXR8YXBwfGFwcC1zdG9yYWdlfC4rLWV4dGVuc2lvbnxmaWxlfHJlc3x3aWRnZXQpOiQvLGliPS9eKD86R0VUfEhFQUQpJC8samI9L15cXC9cXC8vLGtiPS9eKFtcXHcuKy1dKzopKD86XFwvXFwvKD86W15cXC8/I10qQHwpKFteXFwvPyM6XSopKD86OihcXGQrKXwpfCkvLGxiPXt9LG1iPXt9LG5iPVwiKi9cIi5jb25jYXQoXCIqXCIpLG9iPWEubG9jYXRpb24uaHJlZixwYj1rYi5leGVjKG9iLnRvTG93ZXJDYXNlKCkpfHxbXTtmdW5jdGlvbiBxYihhKXtyZXR1cm4gZnVuY3Rpb24oYixjKXtcInN0cmluZ1wiIT10eXBlb2YgYiYmKGM9YixiPVwiKlwiKTt2YXIgZCxlPTAsZj1iLnRvTG93ZXJDYXNlKCkubWF0Y2goRSl8fFtdO2lmKG4uaXNGdW5jdGlvbihjKSl3aGlsZShkPWZbZSsrXSlcIitcIj09PWRbMF0/KGQ9ZC5zbGljZSgxKXx8XCIqXCIsKGFbZF09YVtkXXx8W10pLnVuc2hpZnQoYykpOihhW2RdPWFbZF18fFtdKS5wdXNoKGMpfX1mdW5jdGlvbiByYihhLGIsYyxkKXt2YXIgZT17fSxmPWE9PT1tYjtmdW5jdGlvbiBnKGgpe3ZhciBpO3JldHVybiBlW2hdPSEwLG4uZWFjaChhW2hdfHxbXSxmdW5jdGlvbihhLGgpe3ZhciBqPWgoYixjLGQpO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBqfHxmfHxlW2pdP2Y/IShpPWopOnZvaWQgMDooYi5kYXRhVHlwZXMudW5zaGlmdChqKSxnKGopLCExKX0pLGl9cmV0dXJuIGcoYi5kYXRhVHlwZXNbMF0pfHwhZVtcIipcIl0mJmcoXCIqXCIpfWZ1bmN0aW9uIHNiKGEsYil7dmFyIGMsZCxlPW4uYWpheFNldHRpbmdzLmZsYXRPcHRpb25zfHx7fTtmb3IoYyBpbiBiKXZvaWQgMCE9PWJbY10mJigoZVtjXT9hOmR8fChkPXt9KSlbY109YltjXSk7cmV0dXJuIGQmJm4uZXh0ZW5kKCEwLGEsZCksYX1mdW5jdGlvbiB0YihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLmNvbnRlbnRzLGk9YS5kYXRhVHlwZXM7d2hpbGUoXCIqXCI9PT1pWzBdKWkuc2hpZnQoKSx2b2lkIDA9PT1kJiYoZD1hLm1pbWVUeXBlfHxiLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihkKWZvcihlIGluIGgpaWYoaFtlXSYmaFtlXS50ZXN0KGQpKXtpLnVuc2hpZnQoZSk7YnJlYWt9aWYoaVswXWluIGMpZj1pWzBdO2Vsc2V7Zm9yKGUgaW4gYyl7aWYoIWlbMF18fGEuY29udmVydGVyc1tlK1wiIFwiK2lbMF1dKXtmPWU7YnJlYWt9Z3x8KGc9ZSl9Zj1mfHxnfXJldHVybiBmPyhmIT09aVswXSYmaS51bnNoaWZ0KGYpLGNbZl0pOnZvaWQgMH1mdW5jdGlvbiB1YihhLGIsYyxkKXt2YXIgZSxmLGcsaCxpLGo9e30saz1hLmRhdGFUeXBlcy5zbGljZSgpO2lmKGtbMV0pZm9yKGcgaW4gYS5jb252ZXJ0ZXJzKWpbZy50b0xvd2VyQ2FzZSgpXT1hLmNvbnZlcnRlcnNbZ107Zj1rLnNoaWZ0KCk7d2hpbGUoZilpZihhLnJlc3BvbnNlRmllbGRzW2ZdJiYoY1thLnJlc3BvbnNlRmllbGRzW2ZdXT1iKSwhaSYmZCYmYS5kYXRhRmlsdGVyJiYoYj1hLmRhdGFGaWx0ZXIoYixhLmRhdGFUeXBlKSksaT1mLGY9ay5zaGlmdCgpKWlmKFwiKlwiPT09ZilmPWk7ZWxzZSBpZihcIipcIiE9PWkmJmkhPT1mKXtpZihnPWpbaStcIiBcIitmXXx8altcIiogXCIrZl0sIWcpZm9yKGUgaW4gailpZihoPWUuc3BsaXQoXCIgXCIpLGhbMV09PT1mJiYoZz1qW2krXCIgXCIraFswXV18fGpbXCIqIFwiK2hbMF1dKSl7Zz09PSEwP2c9altlXTpqW2VdIT09ITAmJihmPWhbMF0say51bnNoaWZ0KGhbMV0pKTticmVha31pZihnIT09ITApaWYoZyYmYVtcInRocm93c1wiXSliPWcoYik7ZWxzZSB0cnl7Yj1nKGIpfWNhdGNoKGwpe3JldHVybntzdGF0ZTpcInBhcnNlcmVycm9yXCIsZXJyb3I6Zz9sOlwiTm8gY29udmVyc2lvbiBmcm9tIFwiK2krXCIgdG8gXCIrZn19fXJldHVybntzdGF0ZTpcInN1Y2Nlc3NcIixkYXRhOmJ9fW4uZXh0ZW5kKHthY3RpdmU6MCxsYXN0TW9kaWZpZWQ6e30sZXRhZzp7fSxhamF4U2V0dGluZ3M6e3VybDpvYix0eXBlOlwiR0VUXCIsaXNMb2NhbDpoYi50ZXN0KHBiWzFdKSxnbG9iYWw6ITAscHJvY2Vzc0RhdGE6ITAsYXN5bmM6ITAsY29udGVudFR5cGU6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixhY2NlcHRzOntcIipcIjpuYix0ZXh0OlwidGV4dC9wbGFpblwiLGh0bWw6XCJ0ZXh0L2h0bWxcIix4bWw6XCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsanNvbjpcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwifSxjb250ZW50czp7eG1sOi94bWwvLGh0bWw6L2h0bWwvLGpzb246L2pzb24vfSxyZXNwb25zZUZpZWxkczp7eG1sOlwicmVzcG9uc2VYTUxcIix0ZXh0OlwicmVzcG9uc2VUZXh0XCIsanNvbjpcInJlc3BvbnNlSlNPTlwifSxjb252ZXJ0ZXJzOntcIiogdGV4dFwiOlN0cmluZyxcInRleHQgaHRtbFwiOiEwLFwidGV4dCBqc29uXCI6bi5wYXJzZUpTT04sXCJ0ZXh0IHhtbFwiOm4ucGFyc2VYTUx9LGZsYXRPcHRpb25zOnt1cmw6ITAsY29udGV4dDohMH19LGFqYXhTZXR1cDpmdW5jdGlvbihhLGIpe3JldHVybiBiP3NiKHNiKGEsbi5hamF4U2V0dGluZ3MpLGIpOnNiKG4uYWpheFNldHRpbmdzLGEpfSxhamF4UHJlZmlsdGVyOnFiKGxiKSxhamF4VHJhbnNwb3J0OnFiKG1iKSxhamF4OmZ1bmN0aW9uKGEsYil7XCJvYmplY3RcIj09dHlwZW9mIGEmJihiPWEsYT12b2lkIDApLGI9Ynx8e307dmFyIGMsZCxlLGYsZyxoLGksaixrPW4uYWpheFNldHVwKHt9LGIpLGw9ay5jb250ZXh0fHxrLG09ay5jb250ZXh0JiYobC5ub2RlVHlwZXx8bC5qcXVlcnkpP24obCk6bi5ldmVudCxvPW4uRGVmZXJyZWQoKSxwPW4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikscT1rLnN0YXR1c0NvZGV8fHt9LHI9e30scz17fSx0PTAsdT1cImNhbmNlbGVkXCIsdj17cmVhZHlTdGF0ZTowLGdldFJlc3BvbnNlSGVhZGVyOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKDI9PT10KXtpZighZil7Zj17fTt3aGlsZShiPWdiLmV4ZWMoZSkpZltiWzFdLnRvTG93ZXJDYXNlKCldPWJbMl19Yj1mW2EudG9Mb3dlckNhc2UoKV19cmV0dXJuIG51bGw9PWI/bnVsbDpifSxnZXRBbGxSZXNwb25zZUhlYWRlcnM6ZnVuY3Rpb24oKXtyZXR1cm4gMj09PXQ/ZTpudWxsfSxzZXRSZXF1ZXN0SGVhZGVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9YS50b0xvd2VyQ2FzZSgpO3JldHVybiB0fHwoYT1zW2NdPXNbY118fGEsclthXT1iKSx0aGlzfSxvdmVycmlkZU1pbWVUeXBlOmZ1bmN0aW9uKGEpe3JldHVybiB0fHwoay5taW1lVHlwZT1hKSx0aGlzfSxzdGF0dXNDb2RlOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKGEpaWYoMj50KWZvcihiIGluIGEpcVtiXT1bcVtiXSxhW2JdXTtlbHNlIHYuYWx3YXlzKGFbdi5zdGF0dXNdKTtyZXR1cm4gdGhpc30sYWJvcnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YXx8dTtyZXR1cm4gYyYmYy5hYm9ydChiKSx4KDAsYiksdGhpc319O2lmKG8ucHJvbWlzZSh2KS5jb21wbGV0ZT1wLmFkZCx2LnN1Y2Nlc3M9di5kb25lLHYuZXJyb3I9di5mYWlsLGsudXJsPSgoYXx8ay51cmx8fG9iKStcIlwiKS5yZXBsYWNlKGViLFwiXCIpLnJlcGxhY2UoamIscGJbMV0rXCIvL1wiKSxrLnR5cGU9Yi5tZXRob2R8fGIudHlwZXx8ay5tZXRob2R8fGsudHlwZSxrLmRhdGFUeXBlcz1uLnRyaW0oay5kYXRhVHlwZXx8XCIqXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2goRSl8fFtcIlwiXSxudWxsPT1rLmNyb3NzRG9tYWluJiYoaD1rYi5leGVjKGsudXJsLnRvTG93ZXJDYXNlKCkpLGsuY3Jvc3NEb21haW49ISghaHx8aFsxXT09PXBiWzFdJiZoWzJdPT09cGJbMl0mJihoWzNdfHwoXCJodHRwOlwiPT09aFsxXT9cIjgwXCI6XCI0NDNcIikpPT09KHBiWzNdfHwoXCJodHRwOlwiPT09cGJbMV0/XCI4MFwiOlwiNDQzXCIpKSkpLGsuZGF0YSYmay5wcm9jZXNzRGF0YSYmXCJzdHJpbmdcIiE9dHlwZW9mIGsuZGF0YSYmKGsuZGF0YT1uLnBhcmFtKGsuZGF0YSxrLnRyYWRpdGlvbmFsKSkscmIobGIsayxiLHYpLDI9PT10KXJldHVybiB2O2k9bi5ldmVudCYmay5nbG9iYWwsaSYmMD09PW4uYWN0aXZlKysmJm4uZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKSxrLnR5cGU9ay50eXBlLnRvVXBwZXJDYXNlKCksay5oYXNDb250ZW50PSFpYi50ZXN0KGsudHlwZSksZD1rLnVybCxrLmhhc0NvbnRlbnR8fChrLmRhdGEmJihkPWsudXJsKz0oZGIudGVzdChkKT9cIiZcIjpcIj9cIikray5kYXRhLGRlbGV0ZSBrLmRhdGEpLGsuY2FjaGU9PT0hMSYmKGsudXJsPWZiLnRlc3QoZCk/ZC5yZXBsYWNlKGZiLFwiJDFfPVwiK2NiKyspOmQrKGRiLnRlc3QoZCk/XCImXCI6XCI/XCIpK1wiXz1cIitjYisrKSksay5pZk1vZGlmaWVkJiYobi5sYXN0TW9kaWZpZWRbZF0mJnYuc2V0UmVxdWVzdEhlYWRlcihcIklmLU1vZGlmaWVkLVNpbmNlXCIsbi5sYXN0TW9kaWZpZWRbZF0pLG4uZXRhZ1tkXSYmdi5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTm9uZS1NYXRjaFwiLG4uZXRhZ1tkXSkpLChrLmRhdGEmJmsuaGFzQ29udGVudCYmay5jb250ZW50VHlwZSE9PSExfHxiLmNvbnRlbnRUeXBlKSYmdi5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsay5jb250ZW50VHlwZSksdi5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsay5kYXRhVHlwZXNbMF0mJmsuYWNjZXB0c1trLmRhdGFUeXBlc1swXV0/ay5hY2NlcHRzW2suZGF0YVR5cGVzWzBdXSsoXCIqXCIhPT1rLmRhdGFUeXBlc1swXT9cIiwgXCIrbmIrXCI7IHE9MC4wMVwiOlwiXCIpOmsuYWNjZXB0c1tcIipcIl0pO2ZvcihqIGluIGsuaGVhZGVycyl2LnNldFJlcXVlc3RIZWFkZXIoaixrLmhlYWRlcnNbal0pO2lmKGsuYmVmb3JlU2VuZCYmKGsuYmVmb3JlU2VuZC5jYWxsKGwsdixrKT09PSExfHwyPT09dCkpcmV0dXJuIHYuYWJvcnQoKTt1PVwiYWJvcnRcIjtmb3IoaiBpbntzdWNjZXNzOjEsZXJyb3I6MSxjb21wbGV0ZToxfSl2W2pdKGtbal0pO2lmKGM9cmIobWIsayxiLHYpKXt2LnJlYWR5U3RhdGU9MSxpJiZtLnRyaWdnZXIoXCJhamF4U2VuZFwiLFt2LGtdKSxrLmFzeW5jJiZrLnRpbWVvdXQ+MCYmKGc9c2V0VGltZW91dChmdW5jdGlvbigpe3YuYWJvcnQoXCJ0aW1lb3V0XCIpfSxrLnRpbWVvdXQpKTt0cnl7dD0xLGMuc2VuZChyLHgpfWNhdGNoKHcpe2lmKCEoMj50KSl0aHJvdyB3O3goLTEsdyl9fWVsc2UgeCgtMSxcIk5vIFRyYW5zcG9ydFwiKTtmdW5jdGlvbiB4KGEsYixmLGgpe3ZhciBqLHIscyx1LHcseD1iOzIhPT10JiYodD0yLGcmJmNsZWFyVGltZW91dChnKSxjPXZvaWQgMCxlPWh8fFwiXCIsdi5yZWFkeVN0YXRlPWE+MD80OjAsaj1hPj0yMDAmJjMwMD5hfHwzMDQ9PT1hLGYmJih1PXRiKGssdixmKSksdT11YihrLHUsdixqKSxqPyhrLmlmTW9kaWZpZWQmJih3PXYuZ2V0UmVzcG9uc2VIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIpLHcmJihuLmxhc3RNb2RpZmllZFtkXT13KSx3PXYuZ2V0UmVzcG9uc2VIZWFkZXIoXCJldGFnXCIpLHcmJihuLmV0YWdbZF09dykpLDIwND09PWF8fFwiSEVBRFwiPT09ay50eXBlP3g9XCJub2NvbnRlbnRcIjozMDQ9PT1hP3g9XCJub3Rtb2RpZmllZFwiOih4PXUuc3RhdGUscj11LmRhdGEscz11LmVycm9yLGo9IXMpKToocz14LChhfHwheCkmJih4PVwiZXJyb3JcIiwwPmEmJihhPTApKSksdi5zdGF0dXM9YSx2LnN0YXR1c1RleHQ9KGJ8fHgpK1wiXCIsaj9vLnJlc29sdmVXaXRoKGwsW3IseCx2XSk6by5yZWplY3RXaXRoKGwsW3YseCxzXSksdi5zdGF0dXNDb2RlKHEpLHE9dm9pZCAwLGkmJm0udHJpZ2dlcihqP1wiYWpheFN1Y2Nlc3NcIjpcImFqYXhFcnJvclwiLFt2LGssaj9yOnNdKSxwLmZpcmVXaXRoKGwsW3YseF0pLGkmJihtLnRyaWdnZXIoXCJhamF4Q29tcGxldGVcIixbdixrXSksLS1uLmFjdGl2ZXx8bi5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIikpKX1yZXR1cm4gdn0sZ2V0SlNPTjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG4uZ2V0KGEsYixjLFwianNvblwiKX0sZ2V0U2NyaXB0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIG4uZ2V0KGEsdm9pZCAwLGIsXCJzY3JpcHRcIil9fSksbi5lYWNoKFtcImdldFwiLFwicG9zdFwiXSxmdW5jdGlvbihhLGIpe25bYl09ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIG4uaXNGdW5jdGlvbihjKSYmKGU9ZXx8ZCxkPWMsYz12b2lkIDApLG4uYWpheCh7dXJsOmEsdHlwZTpiLGRhdGFUeXBlOmUsZGF0YTpjLHN1Y2Nlc3M6ZH0pfX0pLG4uX2V2YWxVcmw9ZnVuY3Rpb24oYSl7cmV0dXJuIG4uYWpheCh7dXJsOmEsdHlwZTpcIkdFVFwiLGRhdGFUeXBlOlwic2NyaXB0XCIsYXN5bmM6ITEsZ2xvYmFsOiExLFwidGhyb3dzXCI6ITB9KX0sbi5mbi5leHRlbmQoe3dyYXBBbGw6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIG4uaXNGdW5jdGlvbihhKT90aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS53cmFwQWxsKGEuY2FsbCh0aGlzLGIpKX0pOih0aGlzWzBdJiYoYj1uKGEsdGhpc1swXS5vd25lckRvY3VtZW50KS5lcSgwKS5jbG9uZSghMCksdGhpc1swXS5wYXJlbnROb2RlJiZiLmluc2VydEJlZm9yZSh0aGlzWzBdKSxiLm1hcChmdW5jdGlvbigpe3ZhciBhPXRoaXM7d2hpbGUoYS5maXJzdEVsZW1lbnRDaGlsZClhPWEuZmlyc3RFbGVtZW50Q2hpbGQ7cmV0dXJuIGF9KS5hcHBlbmQodGhpcykpLHRoaXMpfSx3cmFwSW5uZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChuLmlzRnVuY3Rpb24oYSk/ZnVuY3Rpb24oYil7bih0aGlzKS53cmFwSW5uZXIoYS5jYWxsKHRoaXMsYikpfTpmdW5jdGlvbigpe3ZhciBiPW4odGhpcyksYz1iLmNvbnRlbnRzKCk7Yy5sZW5ndGg/Yy53cmFwQWxsKGEpOmIuYXBwZW5kKGEpfSl9LHdyYXA6ZnVuY3Rpb24oYSl7dmFyIGI9bi5pc0Z1bmN0aW9uKGEpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYyl7bih0aGlzKS53cmFwQWxsKGI/YS5jYWxsKHRoaXMsYyk6YSl9KX0sdW53cmFwOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucGFyZW50KCkuZWFjaChmdW5jdGlvbigpe24ubm9kZU5hbWUodGhpcyxcImJvZHlcIil8fG4odGhpcykucmVwbGFjZVdpdGgodGhpcy5jaGlsZE5vZGVzKX0pLmVuZCgpfX0pLG4uZXhwci5maWx0ZXJzLmhpZGRlbj1mdW5jdGlvbihhKXtyZXR1cm4gYS5vZmZzZXRXaWR0aDw9MCYmYS5vZmZzZXRIZWlnaHQ8PTB9LG4uZXhwci5maWx0ZXJzLnZpc2libGU9ZnVuY3Rpb24oYSl7cmV0dXJuIW4uZXhwci5maWx0ZXJzLmhpZGRlbihhKX07dmFyIHZiPS8lMjAvZyx3Yj0vXFxbXFxdJC8seGI9L1xccj9cXG4vZyx5Yj0vXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2ksemI9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO2Z1bmN0aW9uIEFiKGEsYixjLGQpe3ZhciBlO2lmKG4uaXNBcnJheShiKSluLmVhY2goYixmdW5jdGlvbihiLGUpe2N8fHdiLnRlc3QoYSk/ZChhLGUpOkFiKGErXCJbXCIrKFwib2JqZWN0XCI9PXR5cGVvZiBlP2I6XCJcIikrXCJdXCIsZSxjLGQpfSk7ZWxzZSBpZihjfHxcIm9iamVjdFwiIT09bi50eXBlKGIpKWQoYSxiKTtlbHNlIGZvcihlIGluIGIpQWIoYStcIltcIitlK1wiXVwiLGJbZV0sYyxkKX1uLnBhcmFtPWZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPWZ1bmN0aW9uKGEsYil7Yj1uLmlzRnVuY3Rpb24oYik/YigpOm51bGw9PWI/XCJcIjpiLGRbZC5sZW5ndGhdPWVuY29kZVVSSUNvbXBvbmVudChhKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQoYil9O2lmKHZvaWQgMD09PWImJihiPW4uYWpheFNldHRpbmdzJiZuLmFqYXhTZXR0aW5ncy50cmFkaXRpb25hbCksbi5pc0FycmF5KGEpfHxhLmpxdWVyeSYmIW4uaXNQbGFpbk9iamVjdChhKSluLmVhY2goYSxmdW5jdGlvbigpe2UodGhpcy5uYW1lLHRoaXMudmFsdWUpfSk7ZWxzZSBmb3IoYyBpbiBhKUFiKGMsYVtjXSxiLGUpO3JldHVybiBkLmpvaW4oXCImXCIpLnJlcGxhY2UodmIsXCIrXCIpfSxuLmZuLmV4dGVuZCh7c2VyaWFsaXplOmZ1bmN0aW9uKCl7cmV0dXJuIG4ucGFyYW0odGhpcy5zZXJpYWxpemVBcnJheSgpKX0sc2VyaWFsaXplQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgYT1uLnByb3AodGhpcyxcImVsZW1lbnRzXCIpO3JldHVybiBhP24ubWFrZUFycmF5KGEpOnRoaXN9KS5maWx0ZXIoZnVuY3Rpb24oKXt2YXIgYT10aGlzLnR5cGU7cmV0dXJuIHRoaXMubmFtZSYmIW4odGhpcykuaXMoXCI6ZGlzYWJsZWRcIikmJnpiLnRlc3QodGhpcy5ub2RlTmFtZSkmJiF5Yi50ZXN0KGEpJiYodGhpcy5jaGVja2VkfHwhVC50ZXN0KGEpKX0pLm1hcChmdW5jdGlvbihhLGIpe3ZhciBjPW4odGhpcykudmFsKCk7cmV0dXJuIG51bGw9PWM/bnVsbDpuLmlzQXJyYXkoYyk/bi5tYXAoYyxmdW5jdGlvbihhKXtyZXR1cm57bmFtZTpiLm5hbWUsdmFsdWU6YS5yZXBsYWNlKHhiLFwiXFxyXFxuXCIpfX0pOntuYW1lOmIubmFtZSx2YWx1ZTpjLnJlcGxhY2UoeGIsXCJcXHJcXG5cIil9fSkuZ2V0KCl9fSksbi5hamF4U2V0dGluZ3MueGhyPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBuZXcgWE1MSHR0cFJlcXVlc3R9Y2F0Y2goYSl7fX07dmFyIEJiPTAsQ2I9e30sRGI9ezA6MjAwLDEyMjM6MjA0fSxFYj1uLmFqYXhTZXR0aW5ncy54aHIoKTthLmF0dGFjaEV2ZW50JiZhLmF0dGFjaEV2ZW50KFwib251bmxvYWRcIixmdW5jdGlvbigpe2Zvcih2YXIgYSBpbiBDYilDYlthXSgpfSksay5jb3JzPSEhRWImJlwid2l0aENyZWRlbnRpYWxzXCJpbiBFYixrLmFqYXg9RWI9ISFFYixuLmFqYXhUcmFuc3BvcnQoZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIGsuY29yc3x8RWImJiFhLmNyb3NzRG9tYWluP3tzZW5kOmZ1bmN0aW9uKGMsZCl7dmFyIGUsZj1hLnhocigpLGc9KytCYjtpZihmLm9wZW4oYS50eXBlLGEudXJsLGEuYXN5bmMsYS51c2VybmFtZSxhLnBhc3N3b3JkKSxhLnhockZpZWxkcylmb3IoZSBpbiBhLnhockZpZWxkcylmW2VdPWEueGhyRmllbGRzW2VdO2EubWltZVR5cGUmJmYub3ZlcnJpZGVNaW1lVHlwZSYmZi5vdmVycmlkZU1pbWVUeXBlKGEubWltZVR5cGUpLGEuY3Jvc3NEb21haW58fGNbXCJYLVJlcXVlc3RlZC1XaXRoXCJdfHwoY1tcIlgtUmVxdWVzdGVkLVdpdGhcIl09XCJYTUxIdHRwUmVxdWVzdFwiKTtmb3IoZSBpbiBjKWYuc2V0UmVxdWVzdEhlYWRlcihlLGNbZV0pO2I9ZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKCl7YiYmKGRlbGV0ZSBDYltnXSxiPWYub25sb2FkPWYub25lcnJvcj1udWxsLFwiYWJvcnRcIj09PWE/Zi5hYm9ydCgpOlwiZXJyb3JcIj09PWE/ZChmLnN0YXR1cyxmLnN0YXR1c1RleHQpOmQoRGJbZi5zdGF0dXNdfHxmLnN0YXR1cyxmLnN0YXR1c1RleHQsXCJzdHJpbmdcIj09dHlwZW9mIGYucmVzcG9uc2VUZXh0P3t0ZXh0OmYucmVzcG9uc2VUZXh0fTp2b2lkIDAsZi5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkpfX0sZi5vbmxvYWQ9YigpLGYub25lcnJvcj1iKFwiZXJyb3JcIiksYj1DYltnXT1iKFwiYWJvcnRcIik7dHJ5e2Yuc2VuZChhLmhhc0NvbnRlbnQmJmEuZGF0YXx8bnVsbCl9Y2F0Y2goaCl7aWYoYil0aHJvdyBofX0sYWJvcnQ6ZnVuY3Rpb24oKXtiJiZiKCl9fTp2b2lkIDB9KSxuLmFqYXhTZXR1cCh7YWNjZXB0czp7c2NyaXB0OlwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIn0sY29udGVudHM6e3NjcmlwdDovKD86amF2YXxlY21hKXNjcmlwdC99LGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbihhKXtyZXR1cm4gbi5nbG9iYWxFdmFsKGEpLGF9fX0pLG4uYWpheFByZWZpbHRlcihcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe3ZvaWQgMD09PWEuY2FjaGUmJihhLmNhY2hlPSExKSxhLmNyb3NzRG9tYWluJiYoYS50eXBlPVwiR0VUXCIpfSksbi5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsZnVuY3Rpb24oYSl7aWYoYS5jcm9zc0RvbWFpbil7dmFyIGIsYztyZXR1cm57c2VuZDpmdW5jdGlvbihkLGUpe2I9bihcIjxzY3JpcHQ+XCIpLnByb3Aoe2FzeW5jOiEwLGNoYXJzZXQ6YS5zY3JpcHRDaGFyc2V0LHNyYzphLnVybH0pLm9uKFwibG9hZCBlcnJvclwiLGM9ZnVuY3Rpb24oYSl7Yi5yZW1vdmUoKSxjPW51bGwsYSYmZShcImVycm9yXCI9PT1hLnR5cGU/NDA0OjIwMCxhLnR5cGUpfSksbC5oZWFkLmFwcGVuZENoaWxkKGJbMF0pfSxhYm9ydDpmdW5jdGlvbigpe2MmJmMoKX19fX0pO3ZhciBGYj1bXSxHYj0vKD0pXFw/KD89JnwkKXxcXD9cXD8vO24uYWpheFNldHVwKHtqc29ucDpcImNhbGxiYWNrXCIsanNvbnBDYWxsYmFjazpmdW5jdGlvbigpe3ZhciBhPUZiLnBvcCgpfHxuLmV4cGFuZG8rXCJfXCIrY2IrKztyZXR1cm4gdGhpc1thXT0hMCxhfX0pLG4uYWpheFByZWZpbHRlcihcImpzb24ganNvbnBcIixmdW5jdGlvbihiLGMsZCl7dmFyIGUsZixnLGg9Yi5qc29ucCE9PSExJiYoR2IudGVzdChiLnVybCk/XCJ1cmxcIjpcInN0cmluZ1wiPT10eXBlb2YgYi5kYXRhJiYhKGIuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJkdiLnRlc3QoYi5kYXRhKSYmXCJkYXRhXCIpO3JldHVybiBofHxcImpzb25wXCI9PT1iLmRhdGFUeXBlc1swXT8oZT1iLmpzb25wQ2FsbGJhY2s9bi5pc0Z1bmN0aW9uKGIuanNvbnBDYWxsYmFjayk/Yi5qc29ucENhbGxiYWNrKCk6Yi5qc29ucENhbGxiYWNrLGg/YltoXT1iW2hdLnJlcGxhY2UoR2IsXCIkMVwiK2UpOmIuanNvbnAhPT0hMSYmKGIudXJsKz0oZGIudGVzdChiLnVybCk/XCImXCI6XCI/XCIpK2IuanNvbnArXCI9XCIrZSksYi5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4gZ3x8bi5lcnJvcihlK1wiIHdhcyBub3QgY2FsbGVkXCIpLGdbMF19LGIuZGF0YVR5cGVzWzBdPVwianNvblwiLGY9YVtlXSxhW2VdPWZ1bmN0aW9uKCl7Zz1hcmd1bWVudHN9LGQuYWx3YXlzKGZ1bmN0aW9uKCl7YVtlXT1mLGJbZV0mJihiLmpzb25wQ2FsbGJhY2s9Yy5qc29ucENhbGxiYWNrLEZiLnB1c2goZSkpLGcmJm4uaXNGdW5jdGlvbihmKSYmZihnWzBdKSxnPWY9dm9pZCAwfSksXCJzY3JpcHRcIik6dm9pZCAwfSksbi5wYXJzZUhUTUw9ZnVuY3Rpb24oYSxiLGMpe2lmKCFhfHxcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gbnVsbDtcImJvb2xlYW5cIj09dHlwZW9mIGImJihjPWIsYj0hMSksYj1ifHxsO3ZhciBkPXYuZXhlYyhhKSxlPSFjJiZbXTtyZXR1cm4gZD9bYi5jcmVhdGVFbGVtZW50KGRbMV0pXTooZD1uLmJ1aWxkRnJhZ21lbnQoW2FdLGIsZSksZSYmZS5sZW5ndGgmJm4oZSkucmVtb3ZlKCksbi5tZXJnZShbXSxkLmNoaWxkTm9kZXMpKX07dmFyIEhiPW4uZm4ubG9hZDtuLmZuLmxvYWQ9ZnVuY3Rpb24oYSxiLGMpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhJiZIYilyZXR1cm4gSGIuYXBwbHkodGhpcyxhcmd1bWVudHMpO3ZhciBkLGUsZixnPXRoaXMsaD1hLmluZGV4T2YoXCIgXCIpO3JldHVybiBoPj0wJiYoZD1uLnRyaW0oYS5zbGljZShoKSksYT1hLnNsaWNlKDAsaCkpLG4uaXNGdW5jdGlvbihiKT8oYz1iLGI9dm9pZCAwKTpiJiZcIm9iamVjdFwiPT10eXBlb2YgYiYmKGU9XCJQT1NUXCIpLGcubGVuZ3RoPjAmJm4uYWpheCh7dXJsOmEsdHlwZTplLGRhdGFUeXBlOlwiaHRtbFwiLGRhdGE6Yn0pLmRvbmUoZnVuY3Rpb24oYSl7Zj1hcmd1bWVudHMsZy5odG1sKGQ/bihcIjxkaXY+XCIpLmFwcGVuZChuLnBhcnNlSFRNTChhKSkuZmluZChkKTphKX0pLmNvbXBsZXRlKGMmJmZ1bmN0aW9uKGEsYil7Zy5lYWNoKGMsZnx8W2EucmVzcG9uc2VUZXh0LGIsYV0pfSksdGhpc30sbi5lYWNoKFtcImFqYXhTdGFydFwiLFwiYWpheFN0b3BcIixcImFqYXhDb21wbGV0ZVwiLFwiYWpheEVycm9yXCIsXCJhamF4U3VjY2Vzc1wiLFwiYWpheFNlbmRcIl0sZnVuY3Rpb24oYSxiKXtuLmZuW2JdPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm9uKGIsYSl9fSksbi5leHByLmZpbHRlcnMuYW5pbWF0ZWQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZ3JlcChuLnRpbWVycyxmdW5jdGlvbihiKXtyZXR1cm4gYT09PWIuZWxlbX0pLmxlbmd0aH07dmFyIEliPWEuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O2Z1bmN0aW9uIEpiKGEpe3JldHVybiBuLmlzV2luZG93KGEpP2E6OT09PWEubm9kZVR5cGUmJmEuZGVmYXVsdFZpZXd9bi5vZmZzZXQ9e3NldE9mZnNldDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGcsaCxpLGosaz1uLmNzcyhhLFwicG9zaXRpb25cIiksbD1uKGEpLG09e307XCJzdGF0aWNcIj09PWsmJihhLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIiksaD1sLm9mZnNldCgpLGY9bi5jc3MoYSxcInRvcFwiKSxpPW4uY3NzKGEsXCJsZWZ0XCIpLGo9KFwiYWJzb2x1dGVcIj09PWt8fFwiZml4ZWRcIj09PWspJiYoZitpKS5pbmRleE9mKFwiYXV0b1wiKT4tMSxqPyhkPWwucG9zaXRpb24oKSxnPWQudG9wLGU9ZC5sZWZ0KTooZz1wYXJzZUZsb2F0KGYpfHwwLGU9cGFyc2VGbG9hdChpKXx8MCksbi5pc0Z1bmN0aW9uKGIpJiYoYj1iLmNhbGwoYSxjLGgpKSxudWxsIT1iLnRvcCYmKG0udG9wPWIudG9wLWgudG9wK2cpLG51bGwhPWIubGVmdCYmKG0ubGVmdD1iLmxlZnQtaC5sZWZ0K2UpLFwidXNpbmdcImluIGI/Yi51c2luZy5jYWxsKGEsbSk6bC5jc3MobSl9fSxuLmZuLmV4dGVuZCh7b2Zmc2V0OmZ1bmN0aW9uKGEpe2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHZvaWQgMD09PWE/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oYil7bi5vZmZzZXQuc2V0T2Zmc2V0KHRoaXMsYSxiKX0pO3ZhciBiLGMsZD10aGlzWzBdLGU9e3RvcDowLGxlZnQ6MH0sZj1kJiZkLm93bmVyRG9jdW1lbnQ7aWYoZilyZXR1cm4gYj1mLmRvY3VtZW50RWxlbWVudCxuLmNvbnRhaW5zKGIsZCk/KHR5cGVvZiBkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCE9PVUmJihlPWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpLGM9SmIoZikse3RvcDplLnRvcCtjLnBhZ2VZT2Zmc2V0LWIuY2xpZW50VG9wLGxlZnQ6ZS5sZWZ0K2MucGFnZVhPZmZzZXQtYi5jbGllbnRMZWZ0fSk6ZX0scG9zaXRpb246ZnVuY3Rpb24oKXtpZih0aGlzWzBdKXt2YXIgYSxiLGM9dGhpc1swXSxkPXt0b3A6MCxsZWZ0OjB9O3JldHVyblwiZml4ZWRcIj09PW4uY3NzKGMsXCJwb3NpdGlvblwiKT9iPWMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6KGE9dGhpcy5vZmZzZXRQYXJlbnQoKSxiPXRoaXMub2Zmc2V0KCksbi5ub2RlTmFtZShhWzBdLFwiaHRtbFwiKXx8KGQ9YS5vZmZzZXQoKSksZC50b3ArPW4uY3NzKGFbMF0sXCJib3JkZXJUb3BXaWR0aFwiLCEwKSxkLmxlZnQrPW4uY3NzKGFbMF0sXCJib3JkZXJMZWZ0V2lkdGhcIiwhMCkpLHt0b3A6Yi50b3AtZC50b3Atbi5jc3MoYyxcIm1hcmdpblRvcFwiLCEwKSxsZWZ0OmIubGVmdC1kLmxlZnQtbi5jc3MoYyxcIm1hcmdpbkxlZnRcIiwhMCl9fX0sb2Zmc2V0UGFyZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vZmZzZXRQYXJlbnR8fEliO3doaWxlKGEmJiFuLm5vZGVOYW1lKGEsXCJodG1sXCIpJiZcInN0YXRpY1wiPT09bi5jc3MoYSxcInBvc2l0aW9uXCIpKWE9YS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGF8fElifSl9fSksbi5lYWNoKHtzY3JvbGxMZWZ0OlwicGFnZVhPZmZzZXRcIixzY3JvbGxUb3A6XCJwYWdlWU9mZnNldFwifSxmdW5jdGlvbihiLGMpe3ZhciBkPVwicGFnZVlPZmZzZXRcIj09PWM7bi5mbltiXT1mdW5jdGlvbihlKXtyZXR1cm4gSih0aGlzLGZ1bmN0aW9uKGIsZSxmKXt2YXIgZz1KYihiKTtyZXR1cm4gdm9pZCAwPT09Zj9nP2dbY106YltlXTp2b2lkKGc/Zy5zY3JvbGxUbyhkP2EucGFnZVhPZmZzZXQ6ZixkP2Y6YS5wYWdlWU9mZnNldCk6YltlXT1mKX0sYixlLGFyZ3VtZW50cy5sZW5ndGgsbnVsbCl9fSksbi5lYWNoKFtcInRvcFwiLFwibGVmdFwiXSxmdW5jdGlvbihhLGIpe24uY3NzSG9va3NbYl09eWEoay5waXhlbFBvc2l0aW9uLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGM/KGM9eGEoYSxiKSx2YS50ZXN0KGMpP24oYSkucG9zaXRpb24oKVtiXStcInB4XCI6Yyk6dm9pZCAwfSl9KSxuLmVhY2goe0hlaWdodDpcImhlaWdodFwiLFdpZHRoOlwid2lkdGhcIn0sZnVuY3Rpb24oYSxiKXtuLmVhY2goe3BhZGRpbmc6XCJpbm5lclwiK2EsY29udGVudDpiLFwiXCI6XCJvdXRlclwiK2F9LGZ1bmN0aW9uKGMsZCl7bi5mbltkXT1mdW5jdGlvbihkLGUpe3ZhciBmPWFyZ3VtZW50cy5sZW5ndGgmJihjfHxcImJvb2xlYW5cIiE9dHlwZW9mIGQpLGc9Y3x8KGQ9PT0hMHx8ZT09PSEwP1wibWFyZ2luXCI6XCJib3JkZXJcIik7cmV0dXJuIEoodGhpcyxmdW5jdGlvbihiLGMsZCl7dmFyIGU7cmV0dXJuIG4uaXNXaW5kb3coYik/Yi5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbXCJjbGllbnRcIithXTo5PT09Yi5ub2RlVHlwZT8oZT1iLmRvY3VtZW50RWxlbWVudCxNYXRoLm1heChiLmJvZHlbXCJzY3JvbGxcIithXSxlW1wic2Nyb2xsXCIrYV0sYi5ib2R5W1wib2Zmc2V0XCIrYV0sZVtcIm9mZnNldFwiK2FdLGVbXCJjbGllbnRcIithXSkpOnZvaWQgMD09PWQ/bi5jc3MoYixjLGcpOm4uc3R5bGUoYixjLGQsZyl9LGIsZj9kOnZvaWQgMCxmLG51bGwpfX0pfSksbi5mbi5zaXplPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubGVuZ3RofSxuLmZuLmFuZFNlbGY9bi5mbi5hZGRCYWNrLFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmZGVmaW5lKFwianF1ZXJ5XCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gbn0pO3ZhciBLYj1hLmpRdWVyeSxMYj1hLiQ7cmV0dXJuIG4ubm9Db25mbGljdD1mdW5jdGlvbihiKXtyZXR1cm4gYS4kPT09biYmKGEuJD1MYiksYiYmYS5qUXVlcnk9PT1uJiYoYS5qUXVlcnk9S2IpLG59LHR5cGVvZiBiPT09VSYmKGEualF1ZXJ5PWEuJD1uKSxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qcXVlcnkubWluLm1hcFxuXG5cblxuXG4vLyBhbm90aGVyIHNjcmlwdHNcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKGV2ZW50KXtcblxuICAgIC8vIHBhZ2UgbmF2XG4gICAgZnVuY3Rpb24gZ2V0VG9wRWxlbWVudChlbGVtKXtcbiAgICAgICAgdmFyIHRvcCA9ICQoZWxlbSkub2Zmc2V0KCkudG9wIC0gKCQod2luZG93KS5oZWlnaHQoKSAtICgkKGVsZW0pLmhlaWdodCgpLzIpKTtcbiAgICAgICAgcmV0dXJuIHRvcDtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcGFnZU5hdkl0ZW1BY3RpdmUoaW5kZXgpe1xuICAgICAgICAkKCcubmF2IC5oZWFkZXJfX2xpbmsnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQoJy5uYXYgLmhlYWRlcl9fbGluazplcSgnK2luZGV4KycpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKCQoJ3NlY3Rpb24uZmlyc3QnKVswXSkge1xuICAgICAgICAgICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IGdldFRvcEVsZW1lbnQoJ3NlY3Rpb24uZmlyc3QnKSl7XG4gICAgICAgICAgICAgICAgICQoJ3NlY3Rpb24uZmlyc3QnKS5maW5kKCcub25sb2FkLWhpZGRlbicpLmFkZENsYXNzKCdzaG93LWNvbnRlbnQnKVxuICAgICAgICAgICAgICAgIHBhZ2VOYXZJdGVtQWN0aXZlKDApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJCgnc2VjdGlvbi5zZWNvbmQnKVswXSkge1xuICAgICAgICAgICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IGdldFRvcEVsZW1lbnQoJ3NlY3Rpb24uc2Vjb25kJykpe1xuICAgICAgICAgICAgICAgICAkKCdzZWN0aW9uLnNlY29uZCcpLmZpbmQoJy5vbmxvYWQtaGlkZGVuJykuYWRkQ2xhc3MoJ3Nob3ctY29udGVudCcpXG4gICAgICAgICAgICAgICAgcGFnZU5hdkl0ZW1BY3RpdmUoMSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICgkKCdzZWN0aW9uLmZvdXJ0aCcpWzBdKSB7XG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gZ2V0VG9wRWxlbWVudCgnc2VjdGlvbi5mb3VydGgnKSl7XG4gICAgICAgICAgICAgICAgICQoJ3NlY3Rpb24udGhpcmQnKS5maW5kKCcub25sb2FkLWhpZGRlbicpLmFkZENsYXNzKCdzaG93LWNvbnRlbnQnKVxuICAgICAgICAgICAgICAgICAkKCdzZWN0aW9uLmZvdXJ0aCcpLmZpbmQoJy5vbmxvYWQtaGlkZGVuJykuYWRkQ2xhc3MoJ3Nob3ctY29udGVudCcpXG4gICAgICAgICAgICAgICAgcGFnZU5hdkl0ZW1BY3RpdmUoMik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICgkKCdzZWN0aW9uLnNldmVudGgnKVswXSkge1xuICAgICAgICAgICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IGdldFRvcEVsZW1lbnQoJ3NlY3Rpb24uc2V2ZW50aCcpKXtcbiAgICAgICAgICAgICAgICAgJCgnc2VjdGlvbi5zZXZlbnRoJykuZmluZCgnLm9ubG9hZC1oaWRkZW4nKS5hZGRDbGFzcygnc2hvdy1jb250ZW50JylcbiAgICAgICAgICAgICAgICBwYWdlTmF2SXRlbUFjdGl2ZSgzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vQ2FydCBjYWxjXG4gICAgJChcIi5jYWxjdWxhdG9yIC5idG5cIikuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnLmNhbGN1bGF0aW9uJykuc2xpZGVEb3duKFwic2xvd1wiKTtcbiAgICB9KTtcblxuICAgICQoJ1tkYXRhLWhyZWZdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICB2YXIgdElkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWhyZWYnKTtcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogJCh0SWQpLm9mZnNldCgpLnRvcCAtIDEyMCArICdweCd9LCAxMDAwKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnLm5hdmJhci1jb2xsYXBzZScpLnJlbW92ZUNsYXNzKCdpbicpO1xuICAgIH0pO1xuXG4gICAgJCgnW2RhdGEtaHJlZi1jYXJ0XScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgdmFyIHRJZCA9ICQodGhpcykuYXR0cignZGF0YS1ocmVmLWNhcnQnKTtcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogJCh0SWQpLm9mZnNldCgpLnRvcCArICdweCd9LCAxMDAwKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTsgICBcblxuICAgIC8vU2Nyb2xsIHRvIGhhc2ggaWRcbiAgICBmdW5jdGlvbiBzY3JvbGxUb0VsZW1lbnQoZWwsIG1zLCBtYXJnaW4pIHtcbiAgICAgICAgdmFyIHNwZWVkID0gKG1zKSA/IG1zIDogNjAwO1xuICAgICAgICB2YXIgbWFyZ2luID0gKG1hcmdpbikgPyBtYXJnaW4gOiAwO1xuICAgICAgICBcbiAgICAgICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6ICQoZWwpLm9mZnNldCgpLnRvcCAtIG1hcmdpblxuICAgICAgICB9LCBzcGVlZCk7XG4gICAgfVxuICAgIHZhciB0eXBlID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCc/JywnJyk7XG4gICAgdmFyIHNjcm9sbF90b19jYWxjX21hcmdpbiA9IDUwO1xuICAgIGlmICh0eXBlKSB7XG4gICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICBzY3JvbGxUb0VsZW1lbnQoJyMnICsgdHlwZSwgMTAwMCwgc2Nyb2xsX3RvX2NhbGNfbWFyZ2luKTtcbiAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICAvL1J1biB2YWxpZGF0b3JcbiAgICB2YXIgdmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigpO1xuXG4gICAgLy9UYWJzXG4gICAgJChcIi52YWNhbmN5X190YWJzIGR0XCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICQodGhpcykubmV4dChcImRkXCIpLnNsaWRlVG9nZ2xlKFwic2xvd1wiKTtcbiAgICB9KTtcbiAgICBcbiAgICAvL0hpZGUgcGhvbmUgc21hcnRwaG9uZVxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKCQoJ2JvZHknKS5zY3JvbGxUb3AoKSA+IDEwMCkge1xuICAgICAgICAgICAgJCgnLnBob25lLnhzLCAuaG9tZS54cycpLmhpZGUoKVxuICAgICAgICB9IGVsc2UgaWYgKCQoJ2JvZHknKS5vdXRlcldpZHRoKCkgPiA1NTApIHtcbiAgICAgICAgICAgICQoJy5waG9uZS54cywgLmhvbWUueHMnKS5oaWRlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy5waG9uZS54cywgLmhvbWUueHMnKS5zaG93KClcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy9Qb3B1cCBjbG9zZVxuICAgICQoJy5vdmVybGF5LWZvcm0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5oaWRlKCk7XG4gICAgICAgICQoJy50aGFua3MtcG9wdXAsIC5zdWJzY3JpYmUtcG9wdXAnKS5mYWRlT3V0KDEwMDApO1xuICAgIH0pXG5cbiAgICAvL1Bob25lIGlucHV0XG4gICAgJChcIiNwaG9uZSwgLmluZGljYXRvclwiKS5rZXlkb3duKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmICggZXZlbnQua2V5Q29kZSA9PSA0NiB8fCBldmVudC5rZXlDb2RlID09IDggfHwgZXZlbnQua2V5Q29kZSA9PSA5IHx8IGV2ZW50LmtleUNvZGUgPT0gMjcgfHwgXG4gICAgICAgICAgICAoZXZlbnQua2V5Q29kZSA9PSA2NSAmJiBldmVudC5jdHJsS2V5ID09PSB0cnVlKSB8fCBcbiAgICAgICAgICAgIChldmVudC5rZXlDb2RlID49IDM1ICYmIGV2ZW50LmtleUNvZGUgPD0gMzkpKSB7XG4gICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICgoZXZlbnQua2V5Q29kZSA8IDQ4IHx8IGV2ZW50LmtleUNvZGUgPiA1NykgJiYgKGV2ZW50LmtleUNvZGUgPCA5NiB8fCBldmVudC5rZXlDb2RlID4gMTA1ICkpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy9JbmRpY2F0b3IgaW5wdXRcbiAgICAkKCcuaW5kaWNhdG9yJykub24oJ2tleXVwJywgZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS52YWwoJCh0aGlzKS52YWwoKS5yZXBsYWNlICgvXFxELywgJycpKTtcbiAgICB9KTtcbiAgXG5cbiAgICAvL1NlbGVjdCB2YWNhbmN5XG4gICAgaWYgKGxvY2F0aW9uLmhhc2ggPT0gJyNlbWFpbC1tYXJrZXRpbmcnICkge1xuICAgICAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gbXlkKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsLW1hcmtldGluZycpLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGxvY2F0aW9uLmhhc2ggPT0gJyN3ZWItZGVzaWduZXInKSB7XG4gICAgICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiBteWQoKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2ViLWRlc2lnbmVyJykuY2xpY2soKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAkKFwiLnZhY2FuY3lfX3RhYnMgZHRcIikuY2xpY2soZnVuY3Rpb24oKXsgIFxuICAgICAgICB2YXIgdXJsID0gJyMnICsgJCh0aGlzKS5hdHRyKCdpZCcpO1xuICAgICAgICBpZih1cmwgIT0gd2luZG93LmxvY2F0aW9uKXtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCB1cmwpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbn0pXG5cblxuLy9ZYW5kZXggbWFwXG5pZiAoJCgnI21hcCcpWzBdKSB7XG4gICAgdmFyIHdpbU1hcDtcbiAgICB5bWFwcy5yZWFkeShpbml0KTtcblxuICAgIGZ1bmN0aW9uIGluaXQgKCkge1xuICAgICAgICB3aW1NYXAgPSBuZXcgeW1hcHMuTWFwKCdtYXAnLCB7XG4gICAgICAgICAgICBjZW50ZXI6IFs1NS43NDYyNzYzOSwgMzcuNjM5NTk0MDFdLFxuICAgICAgICAgICAgem9vbTogMTYsXG4gICAgICAgICAgICBjb250cm9sczogW11cbiAgICAgICAgfSk7XG4gICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNTUuNzQ1NiwgMzcuNjM4NzgyXSwge1xuICAgICAgICAgICAgLy8gYmFsbG9vbkNvbnRlbnRIZWFkZXI6IFwi0JHQsNC70YPQvSDQvNC10YLQutC4XCIsXG4gICAgICAgICAgICAvLyBiYWxsb29uQ29udGVudEJvZHk6IFwi0KHQvtC00LXRgNC20LjQvNC+0LUgPGVtPtCx0LDQu9GD0L3QsDwvZW0+INC80LXRgtC60LhcIixcbiAgICAgICAgICAgIC8vIGJhbGxvb25Db250ZW50Rm9vdGVyOiBcItCf0L7QtNCy0LDQu1wiLFxuICAgICAgICAgICAgLy8gaGludENvbnRlbnQ6IFwi0KXQuNC90YIg0LzQtdGC0LrQuFwiXG4gICAgICAgIH0pO1xuICAgICAgICB3aW1NYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xuICAgICAgICB3aW1NYXAuYmVoYXZpb3JzLmRpc2FibGUoJ3Njcm9sbFpvb20nKTtcbiAgICAgICAgd2ltTWFwLmJlaGF2aW9ycy5kaXNhYmxlKCdkcmFnJyk7XG4gICAgfVxufVxuXG4vL1ZhbGlkIGZvcm1cbmZ1bmN0aW9uIFZhbGlkYXRvcigpIHtcbiAgICB2YXIgdmFsaWQ7XG5cbiAgICBmdW5jdGlvbiBmb3JtVmFsaWRhdGlvbigpIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgJCgnLnJlcXVpcmVkJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKCEkKHRoaXMpLnZhbCgpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcigkKHRoaXMpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoICgkKHRoaXMpLmF0dHIoJ25hbWUnKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdwaG9uZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbC5sZW5ndGggPCAxMSB8fCB2YWwubWF0Y2goL1teMC05XS8pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yKCQodGhpcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW1haWwnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXhwID0gL14oW1xcdy1dKyg/OlxcLltcXHctXSspKilAKCg/OltcXHctXStcXC4pKlxcd1tcXHctXXswLDY2fSlcXC4oW2Etel17Miw2fSg/OlxcLlthLXpdezJ9KT8pJC9pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFleHAudGVzdCgkKHRoaXMpLnZhbCgpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcigkKHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICh2YWxpZCkgZm9ybVN1Ym1pdCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1TdWJtaXQoKSB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly90cmFja2VyLmVhc3lsZWFkLnJ1L3NlcnZpY2Uvd2ltL3NlbmQucGhwXCIsXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGFueTogJCgnaW5wdXRbbmFtZT1jb21wYW55XScpLnZhbCgpLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAkKCdpbnB1dFtuYW1lPW5hbWVdJykudmFsKCksXG4gICAgICAgICAgICAgICAgICAgIGNvbXBhbnlfdXJsOiAkKCdpbnB1dFtuYW1lPWNvbXBhbnlfdXJsXScpLnZhbCgpLFxuICAgICAgICAgICAgICAgICAgICBwaG9uZTogJCgnaW5wdXRbbmFtZT1waG9uZV0nKS52YWwoKSxcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6ICQoJ2lucHV0W25hbWU9ZW1haWxdJykudmFsKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJKU09OXCIsXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign0J7RiNC40LHQutCwINC/0YDQuCDQvtGC0L/RgNCw0LLQutC1INC00LDQvdC90YvRhSDQvdCwINGB0LXRgNCy0LXRgCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcub3ZlcmxheS1mb3JtJykuc2hvdygpO1xuICAgICAgICAkKCcudGhhbmtzLXBvcHVwJykuZmFkZUluKCk7XG4gICAgICAgICQoJy5mb3JtJylbMF0ucmVzZXQoKTtcbiAgICAgICAgJCgnLnJlcXVpcmVkOmZvY3VzJykuYmx1cigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRpb25FcnJvcigkZWwpIHtcbiAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgJGVsLnBhcmVudCgpLmFkZENsYXNzKCdlcnJvcicpO1xuICAgIH1cblxuICAgICQoJy5mb3JtX19idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGZvcm1WYWxpZGF0aW9uKCk7XG4gICAgfSlcblxuICAgICQoJy5yZXF1aXJlZCcpLm9uKCdmb2N1cycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmICgkKHRoaXMpLnBhcmVudCgpLmhhc0NsYXNzKCdlcnJvcicpKSAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgIH0pXG5cbiAgICAkKCcudGhhbmtzLXBvcHVwJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBpZiAoJChldmVudC50YXJnZXQpLmhhc0NsYXNzKCd0aGFua3MtcG9wdXAnKSB8fCAkKGV2ZW50LnRhcmdldCkuaGFzQ2xhc3MoJ2Nsb3NlZCcpKSBcbiAgICAgICAgICAgICQodGhpcykuZmFkZU91dCgpO1xuICAgICAgICAgICAgJCgnLm92ZXJsYXktZm9ybScpLmhpZGUoKTtcbiAgICB9KVxuXG4gICAgJCgnYm9keScpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgaWYgKCQoJy5yZXF1aXJlZDpmb2N1cycpLmxlbmd0aCkgIHtcbiAgICAgICAgICAgICAgICAkKCcuZm9ybV9fYnRuJykuY2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgICAgIGlmICgkKCcudGhhbmtzLXBvcHVwOnZpc2libGUnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkKCcudGhhbmtzLXBvcHVwJykuZmFkZU91dCgpO1xuICAgICAgICAgICAgICAgICQoJy5vdmVybGF5LWZvcm0nKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbiAgICAkKCcjc3Vic2NyaWJlX19idG4nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICQoJy5lcnJvci1pbnB1dCcpLmhpZGUoKTtcbiAgICAgICBcbiAgICAgICAkKCcjc3Vic2NyaWJlX19lbWFpbCcpLmNzcygnYm9yZGVyLWNvbG9yJywgJyMwMDAwMDAnKTtcbiAgICAgICB2YXIgcmUgPSAvXihbXFx3LV0rKD86XFwuW1xcdy1dKykqKUAoKD86W1xcdy1dK1xcLikqXFx3W1xcdy1dezAsNjZ9KVxcLihbYS16XXsyLDZ9KD86XFwuW2Etel17Mn0pPykkL2k7XG4gICAgICAgXG4gICAgICAgdmFyIGVtYWlsID0gJCgnI3N1YnNjcmliZV9fZW1haWwnKS52YWwoKTtcblxuICAgICAgIGlmICghcmUudGVzdChlbWFpbCkgfHwgZW1haWwubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAkKCcuZXJyb3ItaW5wdXQnKS5zaG93KCk7XG4gICAgICAgICAgICQoJyNzdWJzY3JpYmVfX2VtYWlsJykuY3NzKCdib3JkZXItY29sb3InLCAnI0ZGNjY2NicpO1xuICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgfVxuICAgICAgICAkKCcuc3Vic2NyaWJlLXBvcHVwJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5oYXNDbGFzcygnc3Vic2NyaWJlLXBvcHVwJykgfHwgJChldmVudC50YXJnZXQpLmhhc0NsYXNzKCdjbG9zZWQnKSkgXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5mYWRlT3V0KCk7XG4gICAgICAgICAgICAgICAgJCgnLm92ZXJsYXktZm9ybScpLmhpZGUoKTtcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgICAgIGlmICgkKCcuc3Vic2NyaWJlLXBvcHVwOnZpc2libGUnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkKCcuc3Vic2NyaWJlLXBvcHVwJykuZmFkZU91dCgpO1xuICAgICAgICAgICAgICAgICQoJy5vdmVybGF5LWZvcm0nKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICBcblxuICAgICAgIFxuICAgICAgIHN1YnNjcmliZShlbWFpbCk7ICAgICAgXG4gICB9KTtcblxuZnVuY3Rpb24gc3Vic2NyaWJlKGVtYWlsKSB7XG4gICAgICAgIFxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IFwiaHR0cHM6Ly90cmFja2VyLmVhc3lsZWFkLnJ1L3NlcnZpY2Uvd2ltL3N1YnNjcmliZS5waHBcIixcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBlbWFpbDogZW1haWxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YVR5cGU6IFwiSlNPTlwiLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoanNvblN0cikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihqc29uU3RyKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoanNvblN0ciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ9CU0LDQvdC90YvQtSDQvdC1INC80L7Qs9GD0YIg0LHRi9GC0Ywg0L7RgtC/0YDQsNCy0LvQtdC90YsnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXG5cbiAgICAgICAgICAgIHZhciBoaWRlRHVyYXRpb24gPSA4MDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICQoJy5vdmVybGF5LWZvcm0nKS5zaG93KCk7XG4gICAgICAgICAgICAkKCcuc3Vic2NyaWJlLXBvcHVwJykuZmFkZUluKCk7XG4gICAgICAgICAgICAkKCcuc3Vic2NyaWJlJylbMF0ucmVzZXQoKTtcbiAgICAgICAgICAgICQoJy5zdWJzY3JpYmVfX2lucHV0OmZvY3VzJykuYmx1cigpO1xuXG4gICAgICAgICAgICAkKFwiI2Zvcm1fc3Vic2NyaWJlX2ZlZWRiYWNrXCIpLmRlbGF5KDIqaGlkZUR1cmF0aW9uKS5zaG93KCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgYWxlcnQoJ9CU0LDQvdC90YvQtSDQvdC1INC80L7Qs9GD0YIg0LHRi9GC0Ywg0L7RgtC/0YDQsNCy0LvQtdC90YsnKTtcbiAgICAgICAgfVxuXG4gICAgfSk7XG59XG4vKipcbiAqIENyZWF0ZWQgYnkgVmxhZGltaXIgb24gOC8yNy8yMDE1LlxuICovXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgaWYobG9jYXRpb24uaGFzaCA9PSAnI3ByZS1zYWxlJykge1xuICAgICAgICAkKCBcImFbZGF0YS1ocmVmPSdzZWN0aW9uLmZvdXJ0aCddXCIgKS5jbGljaygpXG4gICAgfVxufSk7XG4vKiDQodGH0LjRgtCw0LXQvCDQv9GA0LjQsdGL0LvRjCwg0L/QvtC70YPRh9C10L3QvdGD0Y4g0L7RgiDQsdGA0L7RiNC10L3QvdGL0YUg0LrQvtGA0LfQuNC9ICovXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICBcbiAgICQoJy5pbmRpY2F0b3InKS5vbigna2V5dXAnLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgIGNhbGN1bGF0ZVBvc3NpYmxlSW5jb21lKCk7XG4gICB9KTtcbiAgIGZ1bmN0aW9uIGZvcm1hdEFzUm91bmRDdXJyZW5jeShudW1iZXIpIHtcbiAgICAgIG51bWJlciA9IG51bWJlci50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcZCg/PShcXGR7M30pK1xcLikvZywgJyQmICcpO1xuICAgICAgbnVtYmVyID0gbnVtYmVyLnJlcGxhY2UoJy4wMCcsICcnKSA7XG4gICAgICByZXR1cm4gbnVtYmVyO1xuICB9XG4gICBcbiAgIGNhbGN1bGF0ZVBvc3NpYmxlSW5jb21lKCk7XG4gICBcblxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVBvc3NpYmxlSW5jb21lKCkge1xuICAgICAgICB2YXIgcmV0dXJuX2Ftb3VudCA9IGNhbGN1bGF0ZUFiYW5kb25lZENhcnRJbmNvbWUoKTtcbiAgICAgICAgXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpPD0zOyBpKyspIHtcbiAgICAgICAgICAgIHZhciByZXR1cm5lZF9vcmRlcnMgPSAkKCcjcmV0dXJuZWRfb3JkZXJzXycgKyBpKS50ZXh0KCkucmVwbGFjZSgnJScsICcnKSAvIDEwMDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIHJldHVybl95ZWFyID0gIE1hdGgucm91bmQocmV0dXJuX2Ftb3VudCAqIHJldHVybmVkX29yZGVycyAqIDM2NSk7XG4gICAgICAgICAgICB2YXIgcmV0dXJuX21vbnRoID0gTWF0aC5yb3VuZChyZXR1cm5fYW1vdW50ICogcmV0dXJuZWRfb3JkZXJzICogMzApO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICQoJyNyZXR1cm5feWVhcl8nICsgaSkudGV4dChmb3JtYXRBc1JvdW5kQ3VycmVuY3kocmV0dXJuX3llYXIpKTtcbiAgICAgICAgICAgICQoJyNyZXR1cm5fbW9udGhfJyArIGkpLnRleHQoZm9ybWF0QXNSb3VuZEN1cnJlbmN5KHJldHVybl9tb250aCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQWJhbmRvbmVkQ2FydEluY29tZSgpIHtcbiAgICAgICAgdmFyICRvcmRlcnNfcGVyX2RheSA9ICQoJyNvcmRlcnNfcGVyX2RheScpO1xuICAgICAgICB2YXIgb3JkZXJzX3Blcl9kYXkgPSAkb3JkZXJzX3Blcl9kYXkudmFsKCkgPyAkb3JkZXJzX3Blcl9kYXkudmFsKCkgOiAkb3JkZXJzX3Blcl9kYXkuYXR0cigncGxhY2Vob2xkZXInKTtcbiAgICAgICAgb3JkZXJzX3Blcl9kYXkgPSBvcmRlcnNfcGVyX2RheS5yZXBsYWNlKCfRiNGCLicsICcnKTtcblxuICAgICAgICB2YXIgJGF2Z19iaWxsID0gJCgnI2F2Z19iaWxsJyk7XG4gICAgICAgIHZhciBhdmdfYmlsbCA9ICRhdmdfYmlsbC52YWwoKSA/ICRhdmdfYmlsbC52YWwoKSA6ICRhdmdfYmlsbC5hdHRyKCdwbGFjZWhvbGRlcicpO1xuICAgICAgICBhdmdfYmlsbCA9IGF2Z19iaWxsLnJlcGxhY2UoJ9GA0YPQsS4nLCAnJyk7XG5cbiAgICAgICAgdmFyICRhYl9jYXJ0X3BlcmNlbnRhZ2UgPSAkKCcjYWJfY2FydF9wZXJjZW50YWdlJyk7XG4gICAgICAgIHZhciBhYl9jYXJ0X3BlcmNlbnRhZ2UgPSAkYWJfY2FydF9wZXJjZW50YWdlLnZhbCgpID8gJGFiX2NhcnRfcGVyY2VudGFnZS52YWwoKSA6ICRhYl9jYXJ0X3BlcmNlbnRhZ2UuYXR0cigncGxhY2Vob2xkZXInKTtcbiAgICAgICAgYWJfY2FydF9wZXJjZW50YWdlID0gYWJfY2FydF9wZXJjZW50YWdlLnJlcGxhY2UoJyUnLCAnJyk7XG5cbiAgICAgICAgcmV0dXJuIG9yZGVyc19wZXJfZGF5ICogYXZnX2JpbGwgKiBhYl9jYXJ0X3BlcmNlbnRhZ2UgLyAxMDA7XG4gICAgfVxuICAgIFxufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
