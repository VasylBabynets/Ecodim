(() => {
    var __webpack_modules__ = {
        2: function(module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
 /*! smooth-scroll v16.1.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */            window.Element && !Element.prototype.closest && (Element.prototype.closest = function(e) {
                var t, n = (this.document || this.ownerDocument).querySelectorAll(e), o = this;
                do {
                    for (t = n.length; 0 <= --t && n.item(t) !== o; ) ;
                } while (t < 0 && (o = o.parentElement));
                return o;
            }), function() {
                if ("function" == typeof window.CustomEvent) return;
                function e(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var n = document.createEvent("CustomEvent");
                    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
                }
                e.prototype = window.Event.prototype, window.CustomEvent = e;
            }(), function() {
                for (var r = 0, e = [ "ms", "moz", "webkit", "o" ], t = 0; t < e.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"], 
                window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
                    var n = (new Date).getTime(), o = Math.max(0, 16 - (n - r)), a = window.setTimeout((function() {
                        e(n + o);
                    }), o);
                    return r = n + o, a;
                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                    clearTimeout(e);
                });
            }(), function(e, t) {
                true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return t(e);
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
            }("undefined" != typeof __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof window ? window : this, (function(M) {
                "use strict";
                var q = {
                    ignore: "[data-scroll-ignore]",
                    header: null,
                    topOnEmptyHash: !0,
                    speed: 500,
                    speedAsDuration: !1,
                    durationMax: null,
                    durationMin: null,
                    clip: !0,
                    offset: 0,
                    easing: "easeInOutCubic",
                    customEasing: null,
                    updateURL: !0,
                    popstate: !0,
                    emitEvents: !0
                }, I = function() {
                    var n = {};
                    return Array.prototype.forEach.call(arguments, (function(e) {
                        for (var t in e) {
                            if (!e.hasOwnProperty(t)) return;
                            n[t] = e[t];
                        }
                    })), n;
                }, r = function(e) {
                    "#" === e.charAt(0) && (e = e.substr(1));
                    for (var t, n = String(e), o = n.length, a = -1, r = "", i = n.charCodeAt(0); ++a < o; ) {
                        if (0 === (t = n.charCodeAt(a))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                        1 <= t && t <= 31 || 127 == t || 0 === a && 48 <= t && t <= 57 || 1 === a && 48 <= t && t <= 57 && 45 === i ? r += "\\" + t.toString(16) + " " : r += 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? n.charAt(a) : "\\" + n.charAt(a);
                    }
                    return "#" + r;
                }, F = function() {
                    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
                }, L = function(e) {
                    return e ? (t = e, parseInt(M.getComputedStyle(t).height, 10) + e.offsetTop) : 0;
                    var t;
                }, x = function(e, t, n) {
                    0 === e && document.body.focus(), n || (e.focus(), document.activeElement !== e && (e.setAttribute("tabindex", "-1"), 
                    e.focus(), e.style.outline = "none"), M.scrollTo(0, t));
                }, H = function(e, t, n, o) {
                    if (t.emitEvents && "function" == typeof M.CustomEvent) {
                        var a = new CustomEvent(e, {
                            bubbles: !0,
                            detail: {
                                anchor: n,
                                toggle: o
                            }
                        });
                        document.dispatchEvent(a);
                    }
                };
                return function(o, e) {
                    var b, a, A, O, C = {};
                    C.cancelScroll = function(e) {
                        cancelAnimationFrame(O), O = null, e || H("scrollCancel", b);
                    }, C.animateScroll = function(a, r, e) {
                        C.cancelScroll();
                        var i = I(b || q, e || {}), c = "[object Number]" === Object.prototype.toString.call(a), t = c || !a.tagName ? null : a;
                        if (c || t) {
                            var s = M.pageYOffset;
                            i.header && !A && (A = document.querySelector(i.header));
                            var n, o, u, l, m, d, f, h, p = L(A), g = c ? a : function(e, t, n, o) {
                                var a = 0;
                                if (e.offsetParent) for (;a += e.offsetTop, e = e.offsetParent; ) ;
                                return a = Math.max(a - t - n, 0), o && (a = Math.min(a, F() - M.innerHeight)), 
                                a;
                            }(t, p, parseInt("function" == typeof i.offset ? i.offset(a, r) : i.offset, 10), i.clip), y = g - s, v = F(), w = 0, S = (n = y, 
                            u = (o = i).speedAsDuration ? o.speed : Math.abs(n / 1e3 * o.speed), o.durationMax && u > o.durationMax ? o.durationMax : o.durationMin && u < o.durationMin ? o.durationMin : parseInt(u, 10)), E = function(e) {
                                var t, n, o;
                                l || (l = e), w += e - l, d = s + y * (n = m = 1 < (m = 0 === S ? 0 : w / S) ? 1 : m, 
                                "easeInQuad" === (t = i).easing && (o = n * n), "easeOutQuad" === t.easing && (o = n * (2 - n)), 
                                "easeInOutQuad" === t.easing && (o = n < .5 ? 2 * n * n : (4 - 2 * n) * n - 1), 
                                "easeInCubic" === t.easing && (o = n * n * n), "easeOutCubic" === t.easing && (o = --n * n * n + 1), 
                                "easeInOutCubic" === t.easing && (o = n < .5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1), 
                                "easeInQuart" === t.easing && (o = n * n * n * n), "easeOutQuart" === t.easing && (o = 1 - --n * n * n * n), 
                                "easeInOutQuart" === t.easing && (o = n < .5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n), 
                                "easeInQuint" === t.easing && (o = n * n * n * n * n), "easeOutQuint" === t.easing && (o = 1 + --n * n * n * n * n), 
                                "easeInOutQuint" === t.easing && (o = n < .5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n), 
                                t.customEasing && (o = t.customEasing(n)), o || n), M.scrollTo(0, Math.floor(d)), 
                                function(e, t) {
                                    var n = M.pageYOffset;
                                    if (e == t || n == t || (s < t && M.innerHeight + n) >= v) return C.cancelScroll(!0), 
                                    x(a, t, c), H("scrollStop", i, a, r), !(O = l = null);
                                }(d, g) || (O = M.requestAnimationFrame(E), l = e);
                            };
                            0 === M.pageYOffset && M.scrollTo(0, 0), f = a, h = i, c || history.pushState && h.updateURL && history.pushState({
                                smoothScroll: JSON.stringify(h),
                                anchor: f.id
                            }, document.title, f === document.documentElement ? "#top" : "#" + f.id), "matchMedia" in M && M.matchMedia("(prefers-reduced-motion)").matches ? x(a, Math.floor(g), !1) : (H("scrollStart", i, a, r), 
                            C.cancelScroll(!0), M.requestAnimationFrame(E));
                        }
                    };
                    var t = function(e) {
                        if (!e.defaultPrevented && !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) && "closest" in e.target && (a = e.target.closest(o)) && "a" === a.tagName.toLowerCase() && !e.target.closest(b.ignore) && a.hostname === M.location.hostname && a.pathname === M.location.pathname && /#/.test(a.href)) {
                            var t, n;
                            try {
                                t = r(decodeURIComponent(a.hash));
                            } catch (e) {
                                t = r(a.hash);
                            }
                            if ("#" === t) {
                                if (!b.topOnEmptyHash) return;
                                n = document.documentElement;
                            } else n = document.querySelector(t);
                            (n = n || "#top" !== t ? n : document.documentElement) && (e.preventDefault(), function(e) {
                                if (history.replaceState && e.updateURL && !history.state) {
                                    var t = M.location.hash;
                                    t = t || "", history.replaceState({
                                        smoothScroll: JSON.stringify(e),
                                        anchor: t || M.pageYOffset
                                    }, document.title, t || M.location.href);
                                }
                            }(b), C.animateScroll(n, a));
                        }
                    }, n = function(e) {
                        if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(b)) {
                            var t = history.state.anchor;
                            "string" == typeof t && t && !(t = document.querySelector(r(history.state.anchor))) || C.animateScroll(t, null, {
                                updateURL: !1
                            });
                        }
                    };
                    C.destroy = function() {
                        b && (document.removeEventListener("click", t, !1), M.removeEventListener("popstate", n, !1), 
                        C.cancelScroll(), O = A = a = b = null);
                    };
                    return function() {
                        if (!("querySelector" in document && "addEventListener" in M && "requestAnimationFrame" in M && "closest" in M.Element.prototype)) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                        C.destroy(), b = I(q, e || {}), A = b.header ? document.querySelector(b.header) : null, 
                        document.addEventListener("click", t, !1), b.updateURL && b.popstate && M.addEventListener("popstate", n, !1);
                    }(), C;
                };
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        __webpack_require__.g = function() {
            if (typeof globalThis === "object") return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if (typeof window === "object") return window;
            }
        }();
    })();
    (() => {
        "use strict";
        const flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        function getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        function menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        function FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        class Popup {
            constructor(options) {
                let config = {
                    logging: true,
                    init: true,
                    attributeOpenButton: "data-popup",
                    attributeCloseButton: "data-close",
                    fixElementSelector: "[data-lp]",
                    youtubeAttribute: "data-popup-youtube",
                    youtubePlaceAttribute: "data-popup-youtube-place",
                    setAutoplayYoutube: true,
                    classes: {
                        popup: "popup",
                        popupContent: "popup__content",
                        popupActive: "popup_show",
                        bodyActive: "popup-show"
                    },
                    focusCatch: true,
                    closeEsc: true,
                    bodyLock: true,
                    hashSettings: {
                        location: true,
                        goHash: true
                    },
                    on: {
                        beforeOpen: function() {},
                        afterOpen: function() {},
                        beforeClose: function() {},
                        afterClose: function() {}
                    }
                };
                this.youTubeCode;
                this.isOpen = false;
                this.targetOpen = {
                    selector: false,
                    element: false
                };
                this.previousOpen = {
                    selector: false,
                    element: false
                };
                this.lastClosed = {
                    selector: false,
                    element: false
                };
                this._dataValue = false;
                this.hash = false;
                this._reopen = false;
                this._selectorOpen = false;
                this.lastFocusEl = false;
                this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
                this.options = {
                    ...config,
                    ...options,
                    classes: {
                        ...config.classes,
                        ...options?.classes
                    },
                    hashSettings: {
                        ...config.hashSettings,
                        ...options?.hashSettings
                    },
                    on: {
                        ...config.on,
                        ...options?.on
                    }
                };
                this.bodyLock = false;
                this.options.init ? this.initPopups() : null;
            }
            initPopups() {
                this.popupLogging(`Проснулся`);
                this.eventsPopup();
            }
            eventsPopup() {
                document.addEventListener("click", function(e) {
                    const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
                    if (buttonOpen) {
                        e.preventDefault();
                        this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                        this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ? buttonOpen.getAttribute(this.options.youtubeAttribute) : null;
                        if (this._dataValue !== "error") {
                            if (!this.isOpen) this.lastFocusEl = buttonOpen;
                            this.targetOpen.selector = `${this._dataValue}`;
                            this._selectorOpen = true;
                            this.open();
                            return;
                        } else this.popupLogging(`Ой ой, не заполнен атрибут у ${buttonOpen.classList}`);
                        return;
                    }
                    const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
                    if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    if (this.options.closeEsc && e.which == 27 && e.code === "Escape" && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                    if (this.options.focusCatch && e.which == 9 && this.isOpen) {
                        this._focusCatch(e);
                        return;
                    }
                }.bind(this));
                if (this.options.hashSettings.goHash) {
                    window.addEventListener("hashchange", function() {
                        if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
                    }.bind(this));
                    window.addEventListener("load", function() {
                        if (window.location.hash) this._openToHash();
                    }.bind(this));
                }
            }
            open(selectorValue) {
                if (bodyLockStatus) {
                    this.bodyLock = document.documentElement.classList.contains("lock") && !this.isOpen ? true : false;
                    if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") {
                        this.targetOpen.selector = selectorValue;
                        this._selectorOpen = true;
                    }
                    if (this.isOpen) {
                        this._reopen = true;
                        this.close();
                    }
                    if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                    if (!this._reopen) this.previousActiveElement = document.activeElement;
                    this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                    if (this.targetOpen.element) {
                        if (this.youTubeCode) {
                            const codeVideo = this.youTubeCode;
                            const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
                            const iframe = document.createElement("iframe");
                            iframe.setAttribute("allowfullscreen", "");
                            const autoplay = this.options.setAutoplayYoutube ? "autoplay;" : "";
                            iframe.setAttribute("allow", `${autoplay}; encrypted-media`);
                            iframe.setAttribute("src", urlVideo);
                            if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
                                this.targetOpen.element.querySelector(".popup__text").setAttribute(`${this.options.youtubePlaceAttribute}`, "");
                            }
                            this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
                        }
                        if (this.options.hashSettings.location) {
                            this._getHash();
                            this._setHash();
                        }
                        this.options.on.beforeOpen(this);
                        document.dispatchEvent(new CustomEvent("beforePopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.targetOpen.element.classList.add(this.options.classes.popupActive);
                        document.documentElement.classList.add(this.options.classes.bodyActive);
                        if (!this._reopen) !this.bodyLock ? bodyLock() : null; else this._reopen = false;
                        this.targetOpen.element.setAttribute("aria-hidden", "false");
                        this.previousOpen.selector = this.targetOpen.selector;
                        this.previousOpen.element = this.targetOpen.element;
                        this._selectorOpen = false;
                        this.isOpen = true;
                        setTimeout((() => {
                            this._focusTrap();
                        }), 50);
                        this.options.on.afterOpen(this);
                        document.dispatchEvent(new CustomEvent("afterPopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.popupLogging(`Открыл попап`);
                    } else this.popupLogging(`Ой ой, такого попапа нет.Проверьте корректность ввода. `);
                }
            }
            close(selectorValue) {
                if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") this.previousOpen.selector = selectorValue;
                if (!this.isOpen || !bodyLockStatus) return;
                this.options.on.beforeClose(this);
                document.dispatchEvent(new CustomEvent("beforePopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                if (this.youTubeCode) if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = "";
                this.previousOpen.element.classList.remove(this.options.classes.popupActive);
                this.previousOpen.element.setAttribute("aria-hidden", "true");
                if (!this._reopen) {
                    document.documentElement.classList.remove(this.options.classes.bodyActive);
                    !this.bodyLock ? bodyUnlock() : null;
                    this.isOpen = false;
                }
                this._removeHash();
                if (this._selectorOpen) {
                    this.lastClosed.selector = this.previousOpen.selector;
                    this.lastClosed.element = this.previousOpen.element;
                }
                this.options.on.afterClose(this);
                document.dispatchEvent(new CustomEvent("afterPopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                setTimeout((() => {
                    this._focusTrap();
                }), 50);
                this.popupLogging(`Закрыл попап`);
            }
            _getHash() {
                if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
            }
            _openToHash() {
                let classInHash = document.querySelector(`.${window.location.hash.replace("#", "")}`) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
                const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace(".", "#")}"]`);
                if (buttons && classInHash) this.open(classInHash);
            }
            _setHash() {
                history.pushState("", "", this.hash);
            }
            _removeHash() {
                history.pushState("", "", window.location.href.split("#")[0]);
            }
            _focusCatch(e) {
                const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
                const focusArray = Array.prototype.slice.call(focusable);
                const focusedIndex = focusArray.indexOf(document.activeElement);
                if (e.shiftKey && focusedIndex === 0) {
                    focusArray[focusArray.length - 1].focus();
                    e.preventDefault();
                }
                if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                    focusArray[0].focus();
                    e.preventDefault();
                }
            }
            _focusTrap() {
                const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
                if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
            }
            popupLogging(message) {
                this.options.logging ? FLS(`[Попапос]: ${message}`) : null;
            }
        }
        flsModules.popup = new Popup({});
        var smooth_scroll_polyfills_min = __webpack_require__(2);
        let gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                if (noHeader) {
                    headerItem = "header.header";
                    const headerElement = document.querySelector(headerItem);
                    if (!headerElement.classList.contains("_header-scroll")) {
                        headerElement.style.cssText = `transition-duration: 0s;`;
                        headerElement.classList.add("_header-scroll");
                        headerItemHeight = headerElement.offsetHeight;
                        headerElement.classList.remove("_header-scroll");
                        setTimeout((() => {
                            headerElement.style.cssText = ``;
                        }), 0);
                    } else headerItemHeight = headerElement.offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                if (typeof smooth_scroll_polyfills_min !== "undefined") (new smooth_scroll_polyfills_min).animateScroll(targetBlockElement, "", options); else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
                FLS(`[gotoBlock]: Юхуу...едем к ${targetBlock}`);
            } else FLS(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${targetBlock}`);
        };
        let formValidate = {
            getErrors(form) {
                let error = 0;
                let formRequiredItems = form.querySelectorAll("*[data-required]");
                if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem => {
                    if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === "SELECT") && !formRequiredItem.disabled) error += this.validateInput(formRequiredItem);
                }));
                return error;
            },
            validateInput(formRequiredItem) {
                let error = 0;
                if (formRequiredItem.dataset.required === "email") {
                    formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                    if (this.emailTest(formRequiredItem)) {
                        this.addError(formRequiredItem);
                        error++;
                    } else this.removeError(formRequiredItem);
                } else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
                    this.addError(formRequiredItem);
                    error++;
                } else if (!formRequiredItem.value.trim()) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem);
                return error;
            },
            addError(formRequiredItem) {
                formRequiredItem.classList.add("_form-error");
                formRequiredItem.parentElement.classList.add("_form-error");
                let inputError = formRequiredItem.parentElement.querySelector(".form__error");
                if (inputError) formRequiredItem.parentElement.removeChild(inputError);
                if (formRequiredItem.dataset.error) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
            },
            removeError(formRequiredItem) {
                formRequiredItem.classList.remove("_form-error");
                formRequiredItem.parentElement.classList.remove("_form-error");
                if (formRequiredItem.parentElement.querySelector(".form__error")) formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
            },
            formClean(form) {
                form.reset();
                setTimeout((() => {
                    let inputs = form.querySelectorAll("input,textarea");
                    for (let index = 0; index < inputs.length; index++) {
                        const el = inputs[index];
                        el.parentElement.classList.remove("_form-focus");
                        el.classList.remove("_form-focus");
                        formValidate.removeError(el);
                    }
                    let checkboxes = form.querySelectorAll(".checkbox__input");
                    if (checkboxes.length > 0) for (let index = 0; index < checkboxes.length; index++) {
                        const checkbox = checkboxes[index];
                        checkbox.checked = false;
                    }
                    if (flsModules.select) {
                        let selects = form.querySelectorAll(".select");
                        if (selects.length) for (let index = 0; index < selects.length; index++) {
                            const select = selects[index].querySelector("select");
                            flsModules.select.selectBuild(select);
                        }
                    }
                }), 0);
            },
            emailTest(formRequiredItem) {
                return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
            }
        };
        function formSubmit() {
            const forms = document.forms;
            if (forms.length) for (const form of forms) {
                form.addEventListener("submit", (function(e) {
                    const form = e.target;
                    formSubmitAction(form, e);
                }));
                form.addEventListener("reset", (function(e) {
                    const form = e.target;
                    formValidate.formClean(form);
                }));
            }
            async function formSubmitAction(form, e) {
                const error = !form.hasAttribute("data-no-validate") ? formValidate.getErrors(form) : 0;
                if (error === 0) {
                    const ajax = form.hasAttribute("data-ajax");
                    if (ajax) {
                        e.preventDefault();
                        const formAction = form.getAttribute("action") ? form.getAttribute("action").trim() : "#";
                        const formMethod = form.getAttribute("method") ? form.getAttribute("method").trim() : "GET";
                        const formData = new FormData(form);
                        form.classList.add("_sending");
                        const response = await fetch(formAction, {
                            method: formMethod,
                            body: formData
                        });
                        if (response.ok) {
                            let responseResult = await response.json();
                            form.classList.remove("_sending");
                            formSent(form, responseResult);
                        } else {
                            alert("Ошибка");
                            form.classList.remove("_sending");
                        }
                    } else if (form.hasAttribute("data-dev")) {
                        e.preventDefault();
                        formSent(form);
                    }
                } else {
                    e.preventDefault();
                    if (form.querySelector("._form-error") && form.hasAttribute("data-goto-error")) {
                        const formGoToErrorClass = form.dataset.gotoError ? form.dataset.gotoError : "._form-error";
                        gotoBlock(formGoToErrorClass, true, 1e3);
                    }
                }
            }
            function formSent(form, responseResult = ``) {
                document.dispatchEvent(new CustomEvent("formSent", {
                    detail: {
                        form
                    }
                }));
                setTimeout((() => {
                    if (flsModules.popup) {
                        const popup = form.dataset.popupMessage;
                        popup ? flsModules.popup.open(popup) : null;
                    }
                }), 0);
                formValidate.formClean(form);
                formLogging(`Форма отправлена!`);
            }
            function formLogging(message) {
                FLS(`[Формы]: ${message}`);
            }
        }
        class ScrollWatcher {
            constructor(props) {
                let defaultConfig = {
                    logging: true
                };
                this.config = Object.assign(defaultConfig, props);
                this.observer;
                !document.documentElement.classList.contains("watcher") ? this.scrollWatcherRun() : null;
            }
            scrollWatcherUpdate() {
                this.scrollWatcherRun();
            }
            scrollWatcherRun() {
                document.documentElement.classList.add("watcher");
                this.scrollWatcherConstructor(document.querySelectorAll("[data-watch]"));
            }
            scrollWatcherConstructor(items) {
                if (items.length) {
                    this.scrollWatcherLogging(`Проснулся, слежу за объектами (${items.length})...`);
                    let uniqParams = uniqArray(Array.from(items).map((function(item) {
                        return `${item.dataset.watchRoot ? item.dataset.watchRoot : null}|${item.dataset.watchMargin ? item.dataset.watchMargin : "0px"}|${item.dataset.watchThreshold ? item.dataset.watchThreshold : 0}`;
                    })));
                    uniqParams.forEach((uniqParam => {
                        let uniqParamArray = uniqParam.split("|");
                        let paramsWatch = {
                            root: uniqParamArray[0],
                            margin: uniqParamArray[1],
                            threshold: uniqParamArray[2]
                        };
                        let groupItems = Array.from(items).filter((function(item) {
                            let watchRoot = item.dataset.watchRoot ? item.dataset.watchRoot : null;
                            let watchMargin = item.dataset.watchMargin ? item.dataset.watchMargin : "0px";
                            let watchThreshold = item.dataset.watchThreshold ? item.dataset.watchThreshold : 0;
                            if (String(watchRoot) === paramsWatch.root && String(watchMargin) === paramsWatch.margin && String(watchThreshold) === paramsWatch.threshold) return item;
                        }));
                        let configWatcher = this.getScrollWatcherConfig(paramsWatch);
                        this.scrollWatcherInit(groupItems, configWatcher);
                    }));
                } else this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
            }
            getScrollWatcherConfig(paramsWatch) {
                let configWatcher = {};
                if (document.querySelector(paramsWatch.root)) configWatcher.root = document.querySelector(paramsWatch.root); else if (paramsWatch.root !== "null") this.scrollWatcherLogging(`Эмм... родительского объекта ${paramsWatch.root} нет на странице`);
                configWatcher.rootMargin = paramsWatch.margin;
                if (paramsWatch.margin.indexOf("px") < 0 && paramsWatch.margin.indexOf("%") < 0) {
                    this.scrollWatcherLogging(`Ой ой, настройку data-watch-margin нужно задавать в PX или %`);
                    return;
                }
                if (paramsWatch.threshold === "prx") {
                    paramsWatch.threshold = [];
                    for (let i = 0; i <= 1; i += .005) paramsWatch.threshold.push(i);
                } else paramsWatch.threshold = paramsWatch.threshold.split(",");
                configWatcher.threshold = paramsWatch.threshold;
                return configWatcher;
            }
            scrollWatcherCreate(configWatcher) {
                this.observer = new IntersectionObserver(((entries, observer) => {
                    entries.forEach((entry => {
                        this.scrollWatcherCallback(entry, observer);
                    }));
                }), configWatcher);
            }
            scrollWatcherInit(items, configWatcher) {
                this.scrollWatcherCreate(configWatcher);
                items.forEach((item => this.observer.observe(item)));
            }
            scrollWatcherIntersecting(entry, targetElement) {
                if (entry.isIntersecting) {
                    !targetElement.classList.contains("_watcher-view") ? targetElement.classList.add("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я вижу ${targetElement.classList}, добавил класс _watcher-view`);
                } else {
                    targetElement.classList.contains("_watcher-view") ? targetElement.classList.remove("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я не вижу ${targetElement.classList}, убрал класс _watcher-view`);
                }
            }
            scrollWatcherOff(targetElement, observer) {
                observer.unobserve(targetElement);
                this.scrollWatcherLogging(`Я перестал следить за ${targetElement.classList}`);
            }
            scrollWatcherLogging(message) {
                this.config.logging ? FLS(`[Наблюдатель]: ${message}`) : null;
            }
            scrollWatcherCallback(entry, observer) {
                const targetElement = entry.target;
                this.scrollWatcherIntersecting(entry, targetElement);
                targetElement.hasAttribute("data-watch-once") && entry.isIntersecting ? this.scrollWatcherOff(targetElement, observer) : null;
                document.dispatchEvent(new CustomEvent("watcherCallback", {
                    detail: {
                        entry
                    }
                }));
            }
        }
        flsModules.watcher = new ScrollWatcher({});
        let addWindowScrollEvent = false;
        function pageNavigation() {
            document.addEventListener("click", pageNavigationAction);
            document.addEventListener("watcherCallback", pageNavigationAction);
            function pageNavigationAction(e) {
                if (e.type === "click") {
                    const targetElement = e.target;
                    if (targetElement.closest("[data-goto]")) {
                        const gotoLink = targetElement.closest("[data-goto]");
                        const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
                        const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                        const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
                        const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                        gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
                        e.preventDefault();
                    }
                } else if (e.type === "watcherCallback" && e.detail) {
                    const entry = e.detail.entry;
                    const targetElement = entry.target;
                    if (targetElement.dataset.watch === "navigator") {
                        document.querySelector(`[data-goto]._navigator-active`);
                        let navigatorCurrentItem;
                        if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`); else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
                            const element = targetElement.classList[index];
                            if (document.querySelector(`[data-goto=".${element}"]`)) {
                                navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
                                break;
                            }
                        }
                        if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
                    }
                }
            }
            if (getHash()) {
                let goToHash;
                if (document.querySelector(`#${getHash()}`)) goToHash = `#${getHash()}`; else if (document.querySelector(`.${getHash()}`)) goToHash = `.${getHash()}`;
                goToHash ? gotoBlock(goToHash, true, 500, 20) : null;
            }
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        function bind(fn, thisArg) {
            return function wrap() {
                return fn.apply(thisArg, arguments);
            };
        }
        const {toString: utils_toString} = Object.prototype;
        const {getPrototypeOf} = Object;
        const kindOf = (cache => thing => {
            const str = utils_toString.call(thing);
            return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
        })(Object.create(null));
        const kindOfTest = type => {
            type = type.toLowerCase();
            return thing => kindOf(thing) === type;
        };
        const typeOfTest = type => thing => typeof thing === type;
        const {isArray} = Array;
        const isUndefined = typeOfTest("undefined");
        function isBuffer(val) {
            return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
        }
        const isArrayBuffer = kindOfTest("ArrayBuffer");
        function isArrayBufferView(val) {
            let result;
            if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) result = ArrayBuffer.isView(val); else result = val && val.buffer && isArrayBuffer(val.buffer);
            return result;
        }
        const isString = typeOfTest("string");
        const isFunction = typeOfTest("function");
        const isNumber = typeOfTest("number");
        const isObject = thing => thing !== null && typeof thing === "object";
        const isBoolean = thing => thing === true || thing === false;
        const isPlainObject = val => {
            if (kindOf(val) !== "object") return false;
            const prototype = getPrototypeOf(val);
            return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
        };
        const isDate = kindOfTest("Date");
        const isFile = kindOfTest("File");
        const isBlob = kindOfTest("Blob");
        const isFileList = kindOfTest("FileList");
        const isStream = val => isObject(val) && isFunction(val.pipe);
        const isFormData = thing => {
            const pattern = "[object FormData]";
            return thing && (typeof FormData === "function" && thing instanceof FormData || utils_toString.call(thing) === pattern || isFunction(thing.toString) && thing.toString() === pattern);
        };
        const isURLSearchParams = kindOfTest("URLSearchParams");
        const trim = str => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        function forEach(obj, fn, {allOwnKeys = false} = {}) {
            if (obj === null || typeof obj === "undefined") return;
            let i;
            let l;
            if (typeof obj !== "object") obj = [ obj ];
            if (isArray(obj)) for (i = 0, l = obj.length; i < l; i++) fn.call(null, obj[i], i, obj); else {
                const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
                const len = keys.length;
                let key;
                for (i = 0; i < len; i++) {
                    key = keys[i];
                    fn.call(null, obj[key], key, obj);
                }
            }
        }
        function findKey(obj, key) {
            key = key.toLowerCase();
            const keys = Object.keys(obj);
            let i = keys.length;
            let _key;
            while (i-- > 0) {
                _key = keys[i];
                if (key === _key.toLowerCase()) return _key;
            }
            return null;
        }
        const _global = (() => {
            if (typeof globalThis !== "undefined") return globalThis;
            return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
        })();
        const isContextDefined = context => !isUndefined(context) && context !== _global;
        function merge() {
            const {caseless} = isContextDefined(this) && this || {};
            const result = {};
            const assignValue = (val, key) => {
                const targetKey = caseless && findKey(result, key) || key;
                if (isPlainObject(result[targetKey]) && isPlainObject(val)) result[targetKey] = merge(result[targetKey], val); else if (isPlainObject(val)) result[targetKey] = merge({}, val); else if (isArray(val)) result[targetKey] = val.slice(); else result[targetKey] = val;
            };
            for (let i = 0, l = arguments.length; i < l; i++) arguments[i] && forEach(arguments[i], assignValue);
            return result;
        }
        const extend = (a, b, thisArg, {allOwnKeys} = {}) => {
            forEach(b, ((val, key) => {
                if (thisArg && isFunction(val)) a[key] = bind(val, thisArg); else a[key] = val;
            }), {
                allOwnKeys
            });
            return a;
        };
        const stripBOM = content => {
            if (content.charCodeAt(0) === 65279) content = content.slice(1);
            return content;
        };
        const inherits = (constructor, superConstructor, props, descriptors) => {
            constructor.prototype = Object.create(superConstructor.prototype, descriptors);
            constructor.prototype.constructor = constructor;
            Object.defineProperty(constructor, "super", {
                value: superConstructor.prototype
            });
            props && Object.assign(constructor.prototype, props);
        };
        const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
            let props;
            let i;
            let prop;
            const merged = {};
            destObj = destObj || {};
            if (sourceObj == null) return destObj;
            do {
                props = Object.getOwnPropertyNames(sourceObj);
                i = props.length;
                while (i-- > 0) {
                    prop = props[i];
                    if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
                        destObj[prop] = sourceObj[prop];
                        merged[prop] = true;
                    }
                }
                sourceObj = filter !== false && getPrototypeOf(sourceObj);
            } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
            return destObj;
        };
        const endsWith = (str, searchString, position) => {
            str = String(str);
            if (position === void 0 || position > str.length) position = str.length;
            position -= searchString.length;
            const lastIndex = str.indexOf(searchString, position);
            return lastIndex !== -1 && lastIndex === position;
        };
        const toArray = thing => {
            if (!thing) return null;
            if (isArray(thing)) return thing;
            let i = thing.length;
            if (!isNumber(i)) return null;
            const arr = new Array(i);
            while (i-- > 0) arr[i] = thing[i];
            return arr;
        };
        const isTypedArray = (TypedArray => thing => TypedArray && thing instanceof TypedArray)(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
        const forEachEntry = (obj, fn) => {
            const generator = obj && obj[Symbol.iterator];
            const iterator = generator.call(obj);
            let result;
            while ((result = iterator.next()) && !result.done) {
                const pair = result.value;
                fn.call(obj, pair[0], pair[1]);
            }
        };
        const matchAll = (regExp, str) => {
            let matches;
            const arr = [];
            while ((matches = regExp.exec(str)) !== null) arr.push(matches);
            return arr;
        };
        const isHTMLForm = kindOfTest("HTMLFormElement");
        const toCamelCase = str => str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, (function replacer(m, p1, p2) {
            return p1.toUpperCase() + p2;
        }));
        const utils_hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);
        const isRegExp = kindOfTest("RegExp");
        const reduceDescriptors = (obj, reducer) => {
            const descriptors = Object.getOwnPropertyDescriptors(obj);
            const reducedDescriptors = {};
            forEach(descriptors, ((descriptor, name) => {
                if (reducer(descriptor, name, obj) !== false) reducedDescriptors[name] = descriptor;
            }));
            Object.defineProperties(obj, reducedDescriptors);
        };
        const freezeMethods = obj => {
            reduceDescriptors(obj, ((descriptor, name) => {
                if (isFunction(obj) && [ "arguments", "caller", "callee" ].indexOf(name) !== -1) return false;
                const value = obj[name];
                if (!isFunction(value)) return;
                descriptor.enumerable = false;
                if ("writable" in descriptor) {
                    descriptor.writable = false;
                    return;
                }
                if (!descriptor.set) descriptor.set = () => {
                    throw Error("Can not rewrite read-only method '" + name + "'");
                };
            }));
        };
        const toObjectSet = (arrayOrString, delimiter) => {
            const obj = {};
            const define = arr => {
                arr.forEach((value => {
                    obj[value] = true;
                }));
            };
            isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
            return obj;
        };
        const noop = () => {};
        const toFiniteNumber = (value, defaultValue) => {
            value = +value;
            return Number.isFinite(value) ? value : defaultValue;
        };
        const ALPHA = "abcdefghijklmnopqrstuvwxyz";
        const DIGIT = "0123456789";
        const ALPHABET = {
            DIGIT,
            ALPHA,
            ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
        };
        const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
            let str = "";
            const {length} = alphabet;
            while (size--) str += alphabet[Math.random() * length | 0];
            return str;
        };
        function isSpecCompliantForm(thing) {
            return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
        }
        const toJSONObject = obj => {
            const stack = new Array(10);
            const visit = (source, i) => {
                if (isObject(source)) {
                    if (stack.indexOf(source) >= 0) return;
                    if (!("toJSON" in source)) {
                        stack[i] = source;
                        const target = isArray(source) ? [] : {};
                        forEach(source, ((value, key) => {
                            const reducedValue = visit(value, i + 1);
                            !isUndefined(reducedValue) && (target[key] = reducedValue);
                        }));
                        stack[i] = void 0;
                        return target;
                    }
                }
                return source;
            };
            return visit(obj, 0);
        };
        const utils = {
            isArray,
            isArrayBuffer,
            isBuffer,
            isFormData,
            isArrayBufferView,
            isString,
            isNumber,
            isBoolean,
            isObject,
            isPlainObject,
            isUndefined,
            isDate,
            isFile,
            isBlob,
            isRegExp,
            isFunction,
            isStream,
            isURLSearchParams,
            isTypedArray,
            isFileList,
            forEach,
            merge,
            extend,
            trim,
            stripBOM,
            inherits,
            toFlatObject,
            kindOf,
            kindOfTest,
            endsWith,
            toArray,
            forEachEntry,
            matchAll,
            isHTMLForm,
            hasOwnProperty: utils_hasOwnProperty,
            hasOwnProp: utils_hasOwnProperty,
            reduceDescriptors,
            freezeMethods,
            toObjectSet,
            toCamelCase,
            noop,
            toFiniteNumber,
            findKey,
            global: _global,
            isContextDefined,
            ALPHABET,
            generateString,
            isSpecCompliantForm,
            toJSONObject
        };
        function AxiosError(message, code, config, request, response) {
            Error.call(this);
            if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor); else this.stack = (new Error).stack;
            this.message = message;
            this.name = "AxiosError";
            code && (this.code = code);
            config && (this.config = config);
            request && (this.request = request);
            response && (this.response = response);
        }
        utils.inherits(AxiosError, Error, {
            toJSON: function toJSON() {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: utils.toJSONObject(this.config),
                    code: this.code,
                    status: this.response && this.response.status ? this.response.status : null
                };
            }
        });
        const AxiosError_prototype = AxiosError.prototype;
        const descriptors = {};
        [ "ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL" ].forEach((code => {
            descriptors[code] = {
                value: code
            };
        }));
        Object.defineProperties(AxiosError, descriptors);
        Object.defineProperty(AxiosError_prototype, "isAxiosError", {
            value: true
        });
        AxiosError.from = (error, code, config, request, response, customProps) => {
            const axiosError = Object.create(AxiosError_prototype);
            utils.toFlatObject(error, axiosError, (function filter(obj) {
                return obj !== Error.prototype;
            }), (prop => prop !== "isAxiosError"));
            AxiosError.call(axiosError, error.message, code, config, request, response);
            axiosError.cause = error;
            axiosError.name = error.name;
            customProps && Object.assign(axiosError, customProps);
            return axiosError;
        };
        const core_AxiosError = AxiosError;
        const helpers_null = null;
        function isVisitable(thing) {
            return utils.isPlainObject(thing) || utils.isArray(thing);
        }
        function removeBrackets(key) {
            return utils.endsWith(key, "[]") ? key.slice(0, -2) : key;
        }
        function renderKey(path, key, dots) {
            if (!path) return key;
            return path.concat(key).map((function each(token, i) {
                token = removeBrackets(token);
                return !dots && i ? "[" + token + "]" : token;
            })).join(dots ? "." : "");
        }
        function isFlatArray(arr) {
            return utils.isArray(arr) && !arr.some(isVisitable);
        }
        const predicates = utils.toFlatObject(utils, {}, null, (function filter(prop) {
            return /^is[A-Z]/.test(prop);
        }));
        function toFormData(obj, formData, options) {
            if (!utils.isObject(obj)) throw new TypeError("target must be an object");
            formData = formData || new (helpers_null || FormData);
            options = utils.toFlatObject(options, {
                metaTokens: true,
                dots: false,
                indexes: false
            }, false, (function defined(option, source) {
                return !utils.isUndefined(source[option]);
            }));
            const metaTokens = options.metaTokens;
            const visitor = options.visitor || defaultVisitor;
            const dots = options.dots;
            const indexes = options.indexes;
            const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
            const useBlob = _Blob && utils.isSpecCompliantForm(formData);
            if (!utils.isFunction(visitor)) throw new TypeError("visitor must be a function");
            function convertValue(value) {
                if (value === null) return "";
                if (utils.isDate(value)) return value.toISOString();
                if (!useBlob && utils.isBlob(value)) throw new core_AxiosError("Blob is not supported. Use a Buffer instead.");
                if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) return useBlob && typeof Blob === "function" ? new Blob([ value ]) : Buffer.from(value);
                return value;
            }
            function defaultVisitor(value, key, path) {
                let arr = value;
                if (value && !path && typeof value === "object") if (utils.endsWith(key, "{}")) {
                    key = metaTokens ? key : key.slice(0, -2);
                    value = JSON.stringify(value);
                } else if (utils.isArray(value) && isFlatArray(value) || (utils.isFileList(value) || utils.endsWith(key, "[]")) && (arr = utils.toArray(value))) {
                    key = removeBrackets(key);
                    arr.forEach((function each(el, index) {
                        !(utils.isUndefined(el) || el === null) && formData.append(indexes === true ? renderKey([ key ], index, dots) : indexes === null ? key : key + "[]", convertValue(el));
                    }));
                    return false;
                }
                if (isVisitable(value)) return true;
                formData.append(renderKey(path, key, dots), convertValue(value));
                return false;
            }
            const stack = [];
            const exposedHelpers = Object.assign(predicates, {
                defaultVisitor,
                convertValue,
                isVisitable
            });
            function build(value, path) {
                if (utils.isUndefined(value)) return;
                if (stack.indexOf(value) !== -1) throw Error("Circular reference detected in " + path.join("."));
                stack.push(value);
                utils.forEach(value, (function each(el, key) {
                    const result = !(utils.isUndefined(el) || el === null) && visitor.call(formData, el, utils.isString(key) ? key.trim() : key, path, exposedHelpers);
                    if (result === true) build(el, path ? path.concat(key) : [ key ]);
                }));
                stack.pop();
            }
            if (!utils.isObject(obj)) throw new TypeError("data must be an object");
            build(obj);
            return formData;
        }
        const helpers_toFormData = toFormData;
        function encode(str) {
            const charMap = {
                "!": "%21",
                "'": "%27",
                "(": "%28",
                ")": "%29",
                "~": "%7E",
                "%20": "+",
                "%00": "\0"
            };
            return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, (function replacer(match) {
                return charMap[match];
            }));
        }
        function AxiosURLSearchParams(params, options) {
            this._pairs = [];
            params && helpers_toFormData(params, this, options);
        }
        const AxiosURLSearchParams_prototype = AxiosURLSearchParams.prototype;
        AxiosURLSearchParams_prototype.append = function append(name, value) {
            this._pairs.push([ name, value ]);
        };
        AxiosURLSearchParams_prototype.toString = function toString(encoder) {
            const _encode = encoder ? function(value) {
                return encoder.call(this, value, encode);
            } : encode;
            return this._pairs.map((function each(pair) {
                return _encode(pair[0]) + "=" + _encode(pair[1]);
            }), "").join("&");
        };
        const helpers_AxiosURLSearchParams = AxiosURLSearchParams;
        function buildURL_encode(val) {
            return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        }
        function buildURL(url, params, options) {
            if (!params) return url;
            const _encode = options && options.encode || buildURL_encode;
            const serializeFn = options && options.serialize;
            let serializedParams;
            if (serializeFn) serializedParams = serializeFn(params, options); else serializedParams = utils.isURLSearchParams(params) ? params.toString() : new helpers_AxiosURLSearchParams(params, options).toString(_encode);
            if (serializedParams) {
                const hashmarkIndex = url.indexOf("#");
                if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
                url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
            }
            return url;
        }
        class InterceptorManager {
            constructor() {
                this.handlers = [];
            }
            use(fulfilled, rejected, options) {
                this.handlers.push({
                    fulfilled,
                    rejected,
                    synchronous: options ? options.synchronous : false,
                    runWhen: options ? options.runWhen : null
                });
                return this.handlers.length - 1;
            }
            eject(id) {
                if (this.handlers[id]) this.handlers[id] = null;
            }
            clear() {
                if (this.handlers) this.handlers = [];
            }
            forEach(fn) {
                utils.forEach(this.handlers, (function forEachHandler(h) {
                    if (h !== null) fn(h);
                }));
            }
        }
        const core_InterceptorManager = InterceptorManager;
        const defaults_transitional = {
            silentJSONParsing: true,
            forcedJSONParsing: true,
            clarifyTimeoutError: false
        };
        const classes_URLSearchParams = typeof URLSearchParams !== "undefined" ? URLSearchParams : helpers_AxiosURLSearchParams;
        const classes_FormData = typeof FormData !== "undefined" ? FormData : null;
        const classes_Blob = typeof Blob !== "undefined" ? Blob : null;
        const isStandardBrowserEnv = (() => {
            let product;
            if (typeof navigator !== "undefined" && ((product = navigator.product) === "ReactNative" || product === "NativeScript" || product === "NS")) return false;
            return typeof window !== "undefined" && typeof document !== "undefined";
        })();
        const isStandardBrowserWebWorkerEnv = (() => typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope && typeof self.importScripts === "function")();
        const browser = {
            isBrowser: true,
            classes: {
                URLSearchParams: classes_URLSearchParams,
                FormData: classes_FormData,
                Blob: classes_Blob
            },
            isStandardBrowserEnv,
            isStandardBrowserWebWorkerEnv,
            protocols: [ "http", "https", "file", "blob", "url", "data" ]
        };
        function toURLEncodedForm(data, options) {
            return helpers_toFormData(data, new browser.classes.URLSearchParams, Object.assign({
                visitor: function(value, key, path, helpers) {
                    if (browser.isNode && utils.isBuffer(value)) {
                        this.append(key, value.toString("base64"));
                        return false;
                    }
                    return helpers.defaultVisitor.apply(this, arguments);
                }
            }, options));
        }
        function parsePropPath(name) {
            return utils.matchAll(/\w+|\[(\w*)]/g, name).map((match => match[0] === "[]" ? "" : match[1] || match[0]));
        }
        function arrayToObject(arr) {
            const obj = {};
            const keys = Object.keys(arr);
            let i;
            const len = keys.length;
            let key;
            for (i = 0; i < len; i++) {
                key = keys[i];
                obj[key] = arr[key];
            }
            return obj;
        }
        function formDataToJSON(formData) {
            function buildPath(path, value, target, index) {
                let name = path[index++];
                const isNumericKey = Number.isFinite(+name);
                const isLast = index >= path.length;
                name = !name && utils.isArray(target) ? target.length : name;
                if (isLast) {
                    if (utils.hasOwnProp(target, name)) target[name] = [ target[name], value ]; else target[name] = value;
                    return !isNumericKey;
                }
                if (!target[name] || !utils.isObject(target[name])) target[name] = [];
                const result = buildPath(path, value, target[name], index);
                if (result && utils.isArray(target[name])) target[name] = arrayToObject(target[name]);
                return !isNumericKey;
            }
            if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
                const obj = {};
                utils.forEachEntry(formData, ((name, value) => {
                    buildPath(parsePropPath(name), value, obj, 0);
                }));
                return obj;
            }
            return null;
        }
        const helpers_formDataToJSON = formDataToJSON;
        const DEFAULT_CONTENT_TYPE = {
            "Content-Type": void 0
        };
        function stringifySafely(rawValue, parser, encoder) {
            if (utils.isString(rawValue)) try {
                (parser || JSON.parse)(rawValue);
                return utils.trim(rawValue);
            } catch (e) {
                if (e.name !== "SyntaxError") throw e;
            }
            return (encoder || JSON.stringify)(rawValue);
        }
        const defaults = {
            transitional: defaults_transitional,
            adapter: [ "xhr", "http" ],
            transformRequest: [ function transformRequest(data, headers) {
                const contentType = headers.getContentType() || "";
                const hasJSONContentType = contentType.indexOf("application/json") > -1;
                const isObjectPayload = utils.isObject(data);
                if (isObjectPayload && utils.isHTMLForm(data)) data = new FormData(data);
                const isFormData = utils.isFormData(data);
                if (isFormData) {
                    if (!hasJSONContentType) return data;
                    return hasJSONContentType ? JSON.stringify(helpers_formDataToJSON(data)) : data;
                }
                if (utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) return data;
                if (utils.isArrayBufferView(data)) return data.buffer;
                if (utils.isURLSearchParams(data)) {
                    headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
                    return data.toString();
                }
                let isFileList;
                if (isObjectPayload) {
                    if (contentType.indexOf("application/x-www-form-urlencoded") > -1) return toURLEncodedForm(data, this.formSerializer).toString();
                    if ((isFileList = utils.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
                        const _FormData = this.env && this.env.FormData;
                        return helpers_toFormData(isFileList ? {
                            "files[]": data
                        } : data, _FormData && new _FormData, this.formSerializer);
                    }
                }
                if (isObjectPayload || hasJSONContentType) {
                    headers.setContentType("application/json", false);
                    return stringifySafely(data);
                }
                return data;
            } ],
            transformResponse: [ function transformResponse(data) {
                const transitional = this.transitional || defaults.transitional;
                const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
                const JSONRequested = this.responseType === "json";
                if (data && utils.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
                    const silentJSONParsing = transitional && transitional.silentJSONParsing;
                    const strictJSONParsing = !silentJSONParsing && JSONRequested;
                    try {
                        return JSON.parse(data);
                    } catch (e) {
                        if (strictJSONParsing) {
                            if (e.name === "SyntaxError") throw core_AxiosError.from(e, core_AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
                            throw e;
                        }
                    }
                }
                return data;
            } ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            env: {
                FormData: browser.classes.FormData,
                Blob: browser.classes.Blob
            },
            validateStatus: function validateStatus(status) {
                return status >= 200 && status < 300;
            },
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                }
            }
        };
        utils.forEach([ "delete", "get", "head" ], (function forEachMethodNoData(method) {
            defaults.headers[method] = {};
        }));
        utils.forEach([ "post", "put", "patch" ], (function forEachMethodWithData(method) {
            defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
        }));
        const lib_defaults = defaults;
        const ignoreDuplicateOf = utils.toObjectSet([ "age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent" ]);
        const parseHeaders = rawHeaders => {
            const parsed = {};
            let key;
            let val;
            let i;
            rawHeaders && rawHeaders.split("\n").forEach((function parser(line) {
                i = line.indexOf(":");
                key = line.substring(0, i).trim().toLowerCase();
                val = line.substring(i + 1).trim();
                if (!key || parsed[key] && ignoreDuplicateOf[key]) return;
                if (key === "set-cookie") if (parsed[key]) parsed[key].push(val); else parsed[key] = [ val ]; else parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
            }));
            return parsed;
        };
        const $internals = Symbol("internals");
        function normalizeHeader(header) {
            return header && String(header).trim().toLowerCase();
        }
        function normalizeValue(value) {
            if (value === false || value == null) return value;
            return utils.isArray(value) ? value.map(normalizeValue) : String(value);
        }
        function parseTokens(str) {
            const tokens = Object.create(null);
            const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
            let match;
            while (match = tokensRE.exec(str)) tokens[match[1]] = match[2];
            return tokens;
        }
        const isValidHeaderName = str => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
        function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
            if (utils.isFunction(filter)) return filter.call(this, value, header);
            if (isHeaderNameFilter) value = header;
            if (!utils.isString(value)) return;
            if (utils.isString(filter)) return value.indexOf(filter) !== -1;
            if (utils.isRegExp(filter)) return filter.test(value);
        }
        function formatHeader(header) {
            return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, ((w, char, str) => char.toUpperCase() + str));
        }
        function buildAccessors(obj, header) {
            const accessorName = utils.toCamelCase(" " + header);
            [ "get", "set", "has" ].forEach((methodName => {
                Object.defineProperty(obj, methodName + accessorName, {
                    value: function(arg1, arg2, arg3) {
                        return this[methodName].call(this, header, arg1, arg2, arg3);
                    },
                    configurable: true
                });
            }));
        }
        class AxiosHeaders {
            constructor(headers) {
                headers && this.set(headers);
            }
            set(header, valueOrRewrite, rewrite) {
                const self = this;
                function setHeader(_value, _header, _rewrite) {
                    const lHeader = normalizeHeader(_header);
                    if (!lHeader) throw new Error("header name must be a non-empty string");
                    const key = utils.findKey(self, lHeader);
                    if (!key || self[key] === void 0 || _rewrite === true || _rewrite === void 0 && self[key] !== false) self[key || _header] = normalizeValue(_value);
                }
                const setHeaders = (headers, _rewrite) => utils.forEach(headers, ((_value, _header) => setHeader(_value, _header, _rewrite)));
                if (utils.isPlainObject(header) || header instanceof this.constructor) setHeaders(header, valueOrRewrite); else if (utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) setHeaders(parseHeaders(header), valueOrRewrite); else header != null && setHeader(valueOrRewrite, header, rewrite);
                return this;
            }
            get(header, parser) {
                header = normalizeHeader(header);
                if (header) {
                    const key = utils.findKey(this, header);
                    if (key) {
                        const value = this[key];
                        if (!parser) return value;
                        if (parser === true) return parseTokens(value);
                        if (utils.isFunction(parser)) return parser.call(this, value, key);
                        if (utils.isRegExp(parser)) return parser.exec(value);
                        throw new TypeError("parser must be boolean|regexp|function");
                    }
                }
            }
            has(header, matcher) {
                header = normalizeHeader(header);
                if (header) {
                    const key = utils.findKey(this, header);
                    return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
                }
                return false;
            }
            delete(header, matcher) {
                const self = this;
                let deleted = false;
                function deleteHeader(_header) {
                    _header = normalizeHeader(_header);
                    if (_header) {
                        const key = utils.findKey(self, _header);
                        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
                            delete self[key];
                            deleted = true;
                        }
                    }
                }
                if (utils.isArray(header)) header.forEach(deleteHeader); else deleteHeader(header);
                return deleted;
            }
            clear(matcher) {
                const keys = Object.keys(this);
                let i = keys.length;
                let deleted = false;
                while (i--) {
                    const key = keys[i];
                    if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
                        delete this[key];
                        deleted = true;
                    }
                }
                return deleted;
            }
            normalize(format) {
                const self = this;
                const headers = {};
                utils.forEach(this, ((value, header) => {
                    const key = utils.findKey(headers, header);
                    if (key) {
                        self[key] = normalizeValue(value);
                        delete self[header];
                        return;
                    }
                    const normalized = format ? formatHeader(header) : String(header).trim();
                    if (normalized !== header) delete self[header];
                    self[normalized] = normalizeValue(value);
                    headers[normalized] = true;
                }));
                return this;
            }
            concat(...targets) {
                return this.constructor.concat(this, ...targets);
            }
            toJSON(asStrings) {
                const obj = Object.create(null);
                utils.forEach(this, ((value, header) => {
                    value != null && value !== false && (obj[header] = asStrings && utils.isArray(value) ? value.join(", ") : value);
                }));
                return obj;
            }
            [Symbol.iterator]() {
                return Object.entries(this.toJSON())[Symbol.iterator]();
            }
            toString() {
                return Object.entries(this.toJSON()).map((([header, value]) => header + ": " + value)).join("\n");
            }
            get [Symbol.toStringTag]() {
                return "AxiosHeaders";
            }
            static from(thing) {
                return thing instanceof this ? thing : new this(thing);
            }
            static concat(first, ...targets) {
                const computed = new this(first);
                targets.forEach((target => computed.set(target)));
                return computed;
            }
            static accessor(header) {
                const internals = this[$internals] = this[$internals] = {
                    accessors: {}
                };
                const accessors = internals.accessors;
                const prototype = this.prototype;
                function defineAccessor(_header) {
                    const lHeader = normalizeHeader(_header);
                    if (!accessors[lHeader]) {
                        buildAccessors(prototype, _header);
                        accessors[lHeader] = true;
                    }
                }
                utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
                return this;
            }
        }
        AxiosHeaders.accessor([ "Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization" ]);
        utils.freezeMethods(AxiosHeaders.prototype);
        utils.freezeMethods(AxiosHeaders);
        const core_AxiosHeaders = AxiosHeaders;
        function transformData(fns, response) {
            const config = this || lib_defaults;
            const context = response || config;
            const headers = core_AxiosHeaders.from(context.headers);
            let data = context.data;
            utils.forEach(fns, (function transform(fn) {
                data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
            }));
            headers.normalize();
            return data;
        }
        function isCancel(value) {
            return !!(value && value.__CANCEL__);
        }
        function CanceledError(message, config, request) {
            core_AxiosError.call(this, message == null ? "canceled" : message, core_AxiosError.ERR_CANCELED, config, request);
            this.name = "CanceledError";
        }
        utils.inherits(CanceledError, core_AxiosError, {
            __CANCEL__: true
        });
        const cancel_CanceledError = CanceledError;
        function settle(resolve, reject, response) {
            const validateStatus = response.config.validateStatus;
            if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response); else reject(new core_AxiosError("Request failed with status code " + response.status, [ core_AxiosError.ERR_BAD_REQUEST, core_AxiosError.ERR_BAD_RESPONSE ][Math.floor(response.status / 100) - 4], response.config, response.request, response));
        }
        const cookies = browser.isStandardBrowserEnv ? function standardBrowserEnv() {
            return {
                write: function write(name, value, expires, path, domain, secure) {
                    const cookie = [];
                    cookie.push(name + "=" + encodeURIComponent(value));
                    if (utils.isNumber(expires)) cookie.push("expires=" + new Date(expires).toGMTString());
                    if (utils.isString(path)) cookie.push("path=" + path);
                    if (utils.isString(domain)) cookie.push("domain=" + domain);
                    if (secure === true) cookie.push("secure");
                    document.cookie = cookie.join("; ");
                },
                read: function read(name) {
                    const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
                    return match ? decodeURIComponent(match[3]) : null;
                },
                remove: function remove(name) {
                    this.write(name, "", Date.now() - 864e5);
                }
            };
        }() : function nonStandardBrowserEnv() {
            return {
                write: function write() {},
                read: function read() {
                    return null;
                },
                remove: function remove() {}
            };
        }();
        function isAbsoluteURL(url) {
            return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
        }
        function combineURLs(baseURL, relativeURL) {
            return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
        }
        function buildFullPath(baseURL, requestedURL) {
            if (baseURL && !isAbsoluteURL(requestedURL)) return combineURLs(baseURL, requestedURL);
            return requestedURL;
        }
        const isURLSameOrigin = browser.isStandardBrowserEnv ? function standardBrowserEnv() {
            const msie = /(msie|trident)/i.test(navigator.userAgent);
            const urlParsingNode = document.createElement("a");
            let originURL;
            function resolveURL(url) {
                let href = url;
                if (msie) {
                    urlParsingNode.setAttribute("href", href);
                    href = urlParsingNode.href;
                }
                urlParsingNode.setAttribute("href", href);
                return {
                    href: urlParsingNode.href,
                    protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
                    host: urlParsingNode.host,
                    search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
                    hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
                    hostname: urlParsingNode.hostname,
                    port: urlParsingNode.port,
                    pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
                };
            }
            originURL = resolveURL(window.location.href);
            return function isURLSameOrigin(requestURL) {
                const parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
                return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
            };
        }() : function nonStandardBrowserEnv() {
            return function isURLSameOrigin() {
                return true;
            };
        }();
        function parseProtocol(url) {
            const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
            return match && match[1] || "";
        }
        function speedometer(samplesCount, min) {
            samplesCount = samplesCount || 10;
            const bytes = new Array(samplesCount);
            const timestamps = new Array(samplesCount);
            let head = 0;
            let tail = 0;
            let firstSampleTS;
            min = min !== void 0 ? min : 1e3;
            return function push(chunkLength) {
                const now = Date.now();
                const startedAt = timestamps[tail];
                if (!firstSampleTS) firstSampleTS = now;
                bytes[head] = chunkLength;
                timestamps[head] = now;
                let i = tail;
                let bytesCount = 0;
                while (i !== head) {
                    bytesCount += bytes[i++];
                    i %= samplesCount;
                }
                head = (head + 1) % samplesCount;
                if (head === tail) tail = (tail + 1) % samplesCount;
                if (now - firstSampleTS < min) return;
                const passed = startedAt && now - startedAt;
                return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
            };
        }
        const helpers_speedometer = speedometer;
        function progressEventReducer(listener, isDownloadStream) {
            let bytesNotified = 0;
            const _speedometer = helpers_speedometer(50, 250);
            return e => {
                const loaded = e.loaded;
                const total = e.lengthComputable ? e.total : void 0;
                const progressBytes = loaded - bytesNotified;
                const rate = _speedometer(progressBytes);
                const inRange = loaded <= total;
                bytesNotified = loaded;
                const data = {
                    loaded,
                    total,
                    progress: total ? loaded / total : void 0,
                    bytes: progressBytes,
                    rate: rate ? rate : void 0,
                    estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
                    event: e
                };
                data[isDownloadStream ? "download" : "upload"] = true;
                listener(data);
            };
        }
        const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
        const xhr = isXHRAdapterSupported && function(config) {
            return new Promise((function dispatchXhrRequest(resolve, reject) {
                let requestData = config.data;
                const requestHeaders = core_AxiosHeaders.from(config.headers).normalize();
                const responseType = config.responseType;
                let onCanceled;
                function done() {
                    if (config.cancelToken) config.cancelToken.unsubscribe(onCanceled);
                    if (config.signal) config.signal.removeEventListener("abort", onCanceled);
                }
                if (utils.isFormData(requestData) && (browser.isStandardBrowserEnv || browser.isStandardBrowserWebWorkerEnv)) requestHeaders.setContentType(false);
                let request = new XMLHttpRequest;
                if (config.auth) {
                    const username = config.auth.username || "";
                    const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
                    requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
                }
                const fullPath = buildFullPath(config.baseURL, config.url);
                request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
                request.timeout = config.timeout;
                function onloadend() {
                    if (!request) return;
                    const responseHeaders = core_AxiosHeaders.from("getAllResponseHeaders" in request && request.getAllResponseHeaders());
                    const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
                    const response = {
                        data: responseData,
                        status: request.status,
                        statusText: request.statusText,
                        headers: responseHeaders,
                        config,
                        request
                    };
                    settle((function _resolve(value) {
                        resolve(value);
                        done();
                    }), (function _reject(err) {
                        reject(err);
                        done();
                    }), response);
                    request = null;
                }
                if ("onloadend" in request) request.onloadend = onloadend; else request.onreadystatechange = function handleLoad() {
                    if (!request || request.readyState !== 4) return;
                    if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) return;
                    setTimeout(onloadend);
                };
                request.onabort = function handleAbort() {
                    if (!request) return;
                    reject(new core_AxiosError("Request aborted", core_AxiosError.ECONNABORTED, config, request));
                    request = null;
                };
                request.onerror = function handleError() {
                    reject(new core_AxiosError("Network Error", core_AxiosError.ERR_NETWORK, config, request));
                    request = null;
                };
                request.ontimeout = function handleTimeout() {
                    let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
                    const transitional = config.transitional || defaults_transitional;
                    if (config.timeoutErrorMessage) timeoutErrorMessage = config.timeoutErrorMessage;
                    reject(new core_AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? core_AxiosError.ETIMEDOUT : core_AxiosError.ECONNABORTED, config, request));
                    request = null;
                };
                if (browser.isStandardBrowserEnv) {
                    const xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName && cookies.read(config.xsrfCookieName);
                    if (xsrfValue) requestHeaders.set(config.xsrfHeaderName, xsrfValue);
                }
                requestData === void 0 && requestHeaders.setContentType(null);
                if ("setRequestHeader" in request) utils.forEach(requestHeaders.toJSON(), (function setRequestHeader(val, key) {
                    request.setRequestHeader(key, val);
                }));
                if (!utils.isUndefined(config.withCredentials)) request.withCredentials = !!config.withCredentials;
                if (responseType && responseType !== "json") request.responseType = config.responseType;
                if (typeof config.onDownloadProgress === "function") request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
                if (typeof config.onUploadProgress === "function" && request.upload) request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
                if (config.cancelToken || config.signal) {
                    onCanceled = cancel => {
                        if (!request) return;
                        reject(!cancel || cancel.type ? new cancel_CanceledError(null, config, request) : cancel);
                        request.abort();
                        request = null;
                    };
                    config.cancelToken && config.cancelToken.subscribe(onCanceled);
                    if (config.signal) config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
                }
                const protocol = parseProtocol(fullPath);
                if (protocol && browser.protocols.indexOf(protocol) === -1) {
                    reject(new core_AxiosError("Unsupported protocol " + protocol + ":", core_AxiosError.ERR_BAD_REQUEST, config));
                    return;
                }
                request.send(requestData || null);
            }));
        };
        const knownAdapters = {
            http: helpers_null,
            xhr
        };
        utils.forEach(knownAdapters, ((fn, value) => {
            if (fn) {
                try {
                    Object.defineProperty(fn, "name", {
                        value
                    });
                } catch (e) {}
                Object.defineProperty(fn, "adapterName", {
                    value
                });
            }
        }));
        const adapters = {
            getAdapter: adapters => {
                adapters = utils.isArray(adapters) ? adapters : [ adapters ];
                const {length} = adapters;
                let nameOrAdapter;
                let adapter;
                for (let i = 0; i < length; i++) {
                    nameOrAdapter = adapters[i];
                    if (adapter = utils.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) break;
                }
                if (!adapter) {
                    if (adapter === false) throw new core_AxiosError(`Adapter ${nameOrAdapter} is not supported by the environment`, "ERR_NOT_SUPPORT");
                    throw new Error(utils.hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`);
                }
                if (!utils.isFunction(adapter)) throw new TypeError("adapter is not a function");
                return adapter;
            },
            adapters: knownAdapters
        };
        function throwIfCancellationRequested(config) {
            if (config.cancelToken) config.cancelToken.throwIfRequested();
            if (config.signal && config.signal.aborted) throw new cancel_CanceledError(null, config);
        }
        function dispatchRequest(config) {
            throwIfCancellationRequested(config);
            config.headers = core_AxiosHeaders.from(config.headers);
            config.data = transformData.call(config, config.transformRequest);
            if ([ "post", "put", "patch" ].indexOf(config.method) !== -1) config.headers.setContentType("application/x-www-form-urlencoded", false);
            const adapter = adapters.getAdapter(config.adapter || lib_defaults.adapter);
            return adapter(config).then((function onAdapterResolution(response) {
                throwIfCancellationRequested(config);
                response.data = transformData.call(config, config.transformResponse, response);
                response.headers = core_AxiosHeaders.from(response.headers);
                return response;
            }), (function onAdapterRejection(reason) {
                if (!isCancel(reason)) {
                    throwIfCancellationRequested(config);
                    if (reason && reason.response) {
                        reason.response.data = transformData.call(config, config.transformResponse, reason.response);
                        reason.response.headers = core_AxiosHeaders.from(reason.response.headers);
                    }
                }
                return Promise.reject(reason);
            }));
        }
        const headersToObject = thing => thing instanceof core_AxiosHeaders ? thing.toJSON() : thing;
        function mergeConfig(config1, config2) {
            config2 = config2 || {};
            const config = {};
            function getMergedValue(target, source, caseless) {
                if (utils.isPlainObject(target) && utils.isPlainObject(source)) return utils.merge.call({
                    caseless
                }, target, source); else if (utils.isPlainObject(source)) return utils.merge({}, source); else if (utils.isArray(source)) return source.slice();
                return source;
            }
            function mergeDeepProperties(a, b, caseless) {
                if (!utils.isUndefined(b)) return getMergedValue(a, b, caseless); else if (!utils.isUndefined(a)) return getMergedValue(void 0, a, caseless);
            }
            function valueFromConfig2(a, b) {
                if (!utils.isUndefined(b)) return getMergedValue(void 0, b);
            }
            function defaultToConfig2(a, b) {
                if (!utils.isUndefined(b)) return getMergedValue(void 0, b); else if (!utils.isUndefined(a)) return getMergedValue(void 0, a);
            }
            function mergeDirectKeys(a, b, prop) {
                if (prop in config2) return getMergedValue(a, b); else if (prop in config1) return getMergedValue(void 0, a);
            }
            const mergeMap = {
                url: valueFromConfig2,
                method: valueFromConfig2,
                data: valueFromConfig2,
                baseURL: defaultToConfig2,
                transformRequest: defaultToConfig2,
                transformResponse: defaultToConfig2,
                paramsSerializer: defaultToConfig2,
                timeout: defaultToConfig2,
                timeoutMessage: defaultToConfig2,
                withCredentials: defaultToConfig2,
                adapter: defaultToConfig2,
                responseType: defaultToConfig2,
                xsrfCookieName: defaultToConfig2,
                xsrfHeaderName: defaultToConfig2,
                onUploadProgress: defaultToConfig2,
                onDownloadProgress: defaultToConfig2,
                decompress: defaultToConfig2,
                maxContentLength: defaultToConfig2,
                maxBodyLength: defaultToConfig2,
                beforeRedirect: defaultToConfig2,
                transport: defaultToConfig2,
                httpAgent: defaultToConfig2,
                httpsAgent: defaultToConfig2,
                cancelToken: defaultToConfig2,
                socketPath: defaultToConfig2,
                responseEncoding: defaultToConfig2,
                validateStatus: mergeDirectKeys,
                headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
            };
            utils.forEach(Object.keys(config1).concat(Object.keys(config2)), (function computeConfigValue(prop) {
                const merge = mergeMap[prop] || mergeDeepProperties;
                const configValue = merge(config1[prop], config2[prop], prop);
                utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
            }));
            return config;
        }
        const VERSION = "1.3.5";
        const validators = {};
        [ "object", "boolean", "number", "function", "string", "symbol" ].forEach(((type, i) => {
            validators[type] = function validator(thing) {
                return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
            };
        }));
        const deprecatedWarnings = {};
        validators.transitional = function transitional(validator, version, message) {
            function formatMessage(opt, desc) {
                return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
            }
            return (value, opt, opts) => {
                if (validator === false) throw new core_AxiosError(formatMessage(opt, " has been removed" + (version ? " in " + version : "")), core_AxiosError.ERR_DEPRECATED);
                if (version && !deprecatedWarnings[opt]) {
                    deprecatedWarnings[opt] = true;
                    console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
                }
                return validator ? validator(value, opt, opts) : true;
            };
        };
        function assertOptions(options, schema, allowUnknown) {
            if (typeof options !== "object") throw new core_AxiosError("options must be an object", core_AxiosError.ERR_BAD_OPTION_VALUE);
            const keys = Object.keys(options);
            let i = keys.length;
            while (i-- > 0) {
                const opt = keys[i];
                const validator = schema[opt];
                if (validator) {
                    const value = options[opt];
                    const result = value === void 0 || validator(value, opt, options);
                    if (result !== true) throw new core_AxiosError("option " + opt + " must be " + result, core_AxiosError.ERR_BAD_OPTION_VALUE);
                    continue;
                }
                if (allowUnknown !== true) throw new core_AxiosError("Unknown option " + opt, core_AxiosError.ERR_BAD_OPTION);
            }
        }
        const validator = {
            assertOptions,
            validators
        };
        const Axios_validators = validator.validators;
        class Axios {
            constructor(instanceConfig) {
                this.defaults = instanceConfig;
                this.interceptors = {
                    request: new core_InterceptorManager,
                    response: new core_InterceptorManager
                };
            }
            request(configOrUrl, config) {
                if (typeof configOrUrl === "string") {
                    config = config || {};
                    config.url = configOrUrl;
                } else config = configOrUrl || {};
                config = mergeConfig(this.defaults, config);
                const {transitional, paramsSerializer, headers} = config;
                if (transitional !== void 0) validator.assertOptions(transitional, {
                    silentJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
                    forcedJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
                    clarifyTimeoutError: Axios_validators.transitional(Axios_validators.boolean)
                }, false);
                if (paramsSerializer != null) if (utils.isFunction(paramsSerializer)) config.paramsSerializer = {
                    serialize: paramsSerializer
                }; else validator.assertOptions(paramsSerializer, {
                    encode: Axios_validators.function,
                    serialize: Axios_validators.function
                }, true);
                config.method = (config.method || this.defaults.method || "get").toLowerCase();
                let contextHeaders;
                contextHeaders = headers && utils.merge(headers.common, headers[config.method]);
                contextHeaders && utils.forEach([ "delete", "get", "head", "post", "put", "patch", "common" ], (method => {
                    delete headers[method];
                }));
                config.headers = core_AxiosHeaders.concat(contextHeaders, headers);
                const requestInterceptorChain = [];
                let synchronousRequestInterceptors = true;
                this.interceptors.request.forEach((function unshiftRequestInterceptors(interceptor) {
                    if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) return;
                    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
                    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
                }));
                const responseInterceptorChain = [];
                this.interceptors.response.forEach((function pushResponseInterceptors(interceptor) {
                    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
                }));
                let promise;
                let i = 0;
                let len;
                if (!synchronousRequestInterceptors) {
                    const chain = [ dispatchRequest.bind(this), void 0 ];
                    chain.unshift.apply(chain, requestInterceptorChain);
                    chain.push.apply(chain, responseInterceptorChain);
                    len = chain.length;
                    promise = Promise.resolve(config);
                    while (i < len) promise = promise.then(chain[i++], chain[i++]);
                    return promise;
                }
                len = requestInterceptorChain.length;
                let newConfig = config;
                i = 0;
                while (i < len) {
                    const onFulfilled = requestInterceptorChain[i++];
                    const onRejected = requestInterceptorChain[i++];
                    try {
                        newConfig = onFulfilled(newConfig);
                    } catch (error) {
                        onRejected.call(this, error);
                        break;
                    }
                }
                try {
                    promise = dispatchRequest.call(this, newConfig);
                } catch (error) {
                    return Promise.reject(error);
                }
                i = 0;
                len = responseInterceptorChain.length;
                while (i < len) promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
                return promise;
            }
            getUri(config) {
                config = mergeConfig(this.defaults, config);
                const fullPath = buildFullPath(config.baseURL, config.url);
                return buildURL(fullPath, config.params, config.paramsSerializer);
            }
        }
        utils.forEach([ "delete", "get", "head", "options" ], (function forEachMethodNoData(method) {
            Axios.prototype[method] = function(url, config) {
                return this.request(mergeConfig(config || {}, {
                    method,
                    url,
                    data: (config || {}).data
                }));
            };
        }));
        utils.forEach([ "post", "put", "patch" ], (function forEachMethodWithData(method) {
            function generateHTTPMethod(isForm) {
                return function httpMethod(url, data, config) {
                    return this.request(mergeConfig(config || {}, {
                        method,
                        headers: isForm ? {
                            "Content-Type": "multipart/form-data"
                        } : {},
                        url,
                        data
                    }));
                };
            }
            Axios.prototype[method] = generateHTTPMethod();
            Axios.prototype[method + "Form"] = generateHTTPMethod(true);
        }));
        const core_Axios = Axios;
        class CancelToken {
            constructor(executor) {
                if (typeof executor !== "function") throw new TypeError("executor must be a function.");
                let resolvePromise;
                this.promise = new Promise((function promiseExecutor(resolve) {
                    resolvePromise = resolve;
                }));
                const token = this;
                this.promise.then((cancel => {
                    if (!token._listeners) return;
                    let i = token._listeners.length;
                    while (i-- > 0) token._listeners[i](cancel);
                    token._listeners = null;
                }));
                this.promise.then = onfulfilled => {
                    let _resolve;
                    const promise = new Promise((resolve => {
                        token.subscribe(resolve);
                        _resolve = resolve;
                    })).then(onfulfilled);
                    promise.cancel = function reject() {
                        token.unsubscribe(_resolve);
                    };
                    return promise;
                };
                executor((function cancel(message, config, request) {
                    if (token.reason) return;
                    token.reason = new cancel_CanceledError(message, config, request);
                    resolvePromise(token.reason);
                }));
            }
            throwIfRequested() {
                if (this.reason) throw this.reason;
            }
            subscribe(listener) {
                if (this.reason) {
                    listener(this.reason);
                    return;
                }
                if (this._listeners) this._listeners.push(listener); else this._listeners = [ listener ];
            }
            unsubscribe(listener) {
                if (!this._listeners) return;
                const index = this._listeners.indexOf(listener);
                if (index !== -1) this._listeners.splice(index, 1);
            }
            static source() {
                let cancel;
                const token = new CancelToken((function executor(c) {
                    cancel = c;
                }));
                return {
                    token,
                    cancel
                };
            }
        }
        const cancel_CancelToken = CancelToken;
        function spread(callback) {
            return function wrap(arr) {
                return callback.apply(null, arr);
            };
        }
        function isAxiosError(payload) {
            return utils.isObject(payload) && payload.isAxiosError === true;
        }
        const HttpStatusCode = {
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
        Object.entries(HttpStatusCode).forEach((([key, value]) => {
            HttpStatusCode[value] = key;
        }));
        const helpers_HttpStatusCode = HttpStatusCode;
        function createInstance(defaultConfig) {
            const context = new core_Axios(defaultConfig);
            const instance = bind(core_Axios.prototype.request, context);
            utils.extend(instance, core_Axios.prototype, context, {
                allOwnKeys: true
            });
            utils.extend(instance, context, null, {
                allOwnKeys: true
            });
            instance.create = function create(instanceConfig) {
                return createInstance(mergeConfig(defaultConfig, instanceConfig));
            };
            return instance;
        }
        const axios = createInstance(lib_defaults);
        axios.Axios = core_Axios;
        axios.CanceledError = cancel_CanceledError;
        axios.CancelToken = cancel_CancelToken;
        axios.isCancel = isCancel;
        axios.VERSION = VERSION;
        axios.toFormData = helpers_toFormData;
        axios.AxiosError = core_AxiosError;
        axios.Cancel = axios.CanceledError;
        axios.all = function all(promises) {
            return Promise.all(promises);
        };
        axios.spread = spread;
        axios.isAxiosError = isAxiosError;
        axios.mergeConfig = mergeConfig;
        axios.AxiosHeaders = core_AxiosHeaders;
        axios.formToJSON = thing => helpers_formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);
        axios.HttpStatusCode = helpers_HttpStatusCode;
        axios.default = axios;
        const lib_axios = axios;
        AOS.init({
            disable: false,
            startEvent: "DOMContentLoaded",
            initClassName: "aos-init",
            animatedClassName: "aos-animate",
            useClassNames: false,
            disableMutationObserver: false,
            debounceDelay: 50,
            throttleDelay: 99,
            offset: 300,
            delay: 0,
            duration: 1e3,
            easing: "ease",
            once: false,
            mirror: false,
            anchorPlacement: "top-bottom"
        });
        let scrollpos = window.scrollY;
        const header = document.querySelector(".header");
        const scrollChange = 1;
        const add_class_on_scroll = () => header.classList.add("bg-white");
        const remove_class_on_scroll = () => header.classList.remove("bg-white");
        window.addEventListener("scroll", (function() {
            scrollpos = window.scrollY;
            if (scrollpos >= scrollChange) add_class_on_scroll(); else remove_class_on_scroll();
        }));
        const li_1 = document.querySelector("#li-1");
        const li_1_black_add = () => li_1.classList.add("li-scroll");
        const li_1_black_remove = () => li_1.classList.remove("li-scroll");
        window.addEventListener("scroll", (function() {
            scrollpos = window.scrollY;
            if (scrollpos >= scrollChange) li_1_black_add(); else li_1_black_remove();
        }));
        const li_2 = document.querySelector("#li-2");
        const li_2_black_add = () => li_2.classList.add("li-scroll");
        const li_2_black_remove = () => li_2.classList.remove("li-scroll");
        window.addEventListener("scroll", (function() {
            scrollpos = window.scrollY;
            if (scrollpos >= scrollChange) li_2_black_add(); else li_2_black_remove();
        }));
        const li_3 = document.querySelector("#li-3");
        const li_3_black_add = () => li_3.classList.add("li-scroll");
        const li_3_black_remove = () => li_3.classList.remove("li-scroll");
        window.addEventListener("scroll", (function() {
            scrollpos = window.scrollY;
            if (scrollpos >= scrollChange) li_3_black_add(); else li_3_black_remove();
        }));
        const li_4 = document.querySelector("#li-4");
        const li_4_black_add = () => li_4.classList.add("li-scroll");
        const li_4_black_remove = () => li_4.classList.remove("li-scroll");
        window.addEventListener("scroll", (function() {
            scrollpos = window.scrollY;
            if (scrollpos >= scrollChange) li_4_black_add(); else li_4_black_remove();
        }));
        const btn_desc = document.querySelector(".header__btn");
        const btn_desc_black_add = () => btn_desc.classList.add("btn-scroll");
        const btn_desc__remove = () => btn_desc.classList.remove("btn-scroll");
        window.addEventListener("scroll", (function() {
            scrollpos = window.scrollY;
            if (scrollpos >= scrollChange) btn_desc_black_add(); else btn_desc__remove();
        }));
        const btn_tabl = document.querySelector(".header__btn-tablet");
        const btn_tabl_black_add = () => btn_tabl.classList.add("btn-tablet-scroll");
        const btn_tabl__remove = () => btn_tabl.classList.remove("btn-tablet-scroll");
        window.addEventListener("scroll", (function() {
            scrollpos = window.scrollY;
            if (scrollpos >= scrollChange) btn_tabl_black_add(); else btn_tabl__remove();
        }));
        const burgerSpan = document.querySelector(".header__icon-menu");
        const burgerSpan_black_add = () => burgerSpan.classList.add("header__icon-menu-scroll");
        const burgerSpan__remove = () => burgerSpan.classList.remove("header__icon-menu-scroll");
        window.addEventListener("scroll", (function() {
            scrollpos = window.scrollY;
            if (scrollpos >= scrollChange) burgerSpan_black_add(); else burgerSpan__remove();
        }));
        const burgerTitle = document.querySelector(".header__burger-title");
        const burgerTitle_black_add = () => burgerTitle.classList.add("header__burger-title-scroll");
        const burgerTitle__remove = () => burgerTitle.classList.remove("header__burger-title-scroll");
        window.addEventListener("scroll", (function() {
            scrollpos = window.scrollY;
            if (scrollpos >= scrollChange) burgerTitle_black_add(); else burgerTitle__remove();
        }));
        const value = document.querySelector("#outputKPH");
        const input = document.querySelector("#myRange");
        const outputGenerate = document.querySelector("#outputGenerate");
        const outputProfit = document.querySelector("#outputProfit");
        value.textContent = input.value;
        input.addEventListener("input", (event => {
            let final = event.target.value;
            value.textContent = final;
            outputGenerate.textContent = final * 1070;
            outputProfit.textContent = final * 174.5;
        }));
        const TOKEN = "6194485794:AAG6DoZ_uOdjLI5MTPo9Pjy93CNtPr9L3kY";
        const Chat_ID = "-912643434";
        const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
        document.getElementById("popup");
        document.getElementById("cta-telegram").addEventListener("submit", (function(e) {
            e.preventDefault();
            let message = `<b>Заявка з сайту!</b>\n`;
            message += `<b>Номер телефону клієнта: </b> ${this.phone.value}\n`;
            lib_axios.post(URI_API, {
                chat_id: Chat_ID,
                parse_mode: "html",
                text: message
            }).then((res => {
                this.phone.value = "";
                flsModules.popup.open("#popup");
            })).catch((err => {
                console.warn(err);
            })).finally((() => {
                console.log("Succes!");
            }));
        }));
        document.getElementById("calc-cta").addEventListener("submit", (function(e) {
            e.preventDefault();
            let mess = `<b>Заявка з сайту!</b>\n`;
            mess += `<b>Номер телефону клієнта: </b> ${this.phone2.value}\n`;
            lib_axios.post(URI_API, {
                chat_id: Chat_ID,
                parse_mode: "html",
                text: mess
            }).then((res => {
                this.phone2.value = "";
                flsModules.popup.open("#popup");
            })).catch((err => {
                console.warn(err);
            })).finally((() => {
                console.log("Succes!");
            }));
        }));
        window["FLS"] = true;
        isWebp();
        menuInit();
        formSubmit();
        pageNavigation();
    })();
})();