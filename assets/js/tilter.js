(window.webpackJsonp = window.webpackJsonp || []).push([
    [4], {
        L6id: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n("CcnG"),
                r = function() {
                    return function() {}
                }(),
                s = n("pMnS"),
                a = n("ZYCi"),
                o = n("Ip0R"),
                l = n("lPHp"),
                h = function() {
                    function t(t) {
                        this.platformId = t, this.animCreated = new i.m
                    }
                    return t.prototype.ngOnInit = function() {
                        if (!Object(o.s)(this.platformId)) {
                            this._options = {
                                container: this.lavContainer.nativeElement,
                                renderer: this.options.renderer || "svg",
                                loop: !1 !== this.options.loop,
                                autoplay: !1 !== this.options.autoplay,
                                autoloadSegments: !1 !== this.options.autoloadSegments,
                                animationData: this.options.animationData,
                                path: this.options.path || "",
                                rendererSettings: this.options.rendererSettings || {}
                            }, this.viewWidth = this.width + "px" || "100%", this.viewHeight = this.height + "px" || "100%";
                            var t = l.loadAnimation(this._options);
                            this.animCreated.emit(t)
                        }
                    }, t
                }(),
                p = i.mb({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function c(t) {
                return i.Ib(0, [i.Eb(402653184, 1, {
                    lavContainer: 0
                }), (t()(), i.ob(1, 0, [
                    [1, 0],
                    ["lavContainer", 1]
                ], null, 2, "div", [], null, null, null, null, null)), i.nb(2, 278528, null, 0, o.n, [i.t, i.k, i.D], {
                    ngStyle: [0, "ngStyle"]
                }, null), i.Bb(3, {
                    width: 0,
                    height: 1,
                    overflow: 2,
                    margin: 3
                })], function(t, e) {
                    var n = e.component,
                        i = t(e, 3, 0, n.viewWidth, n.viewHeight, "hidden", "0 auto");
                    t(e, 2, 0, i)
                }, null)
            }
            var u = n("maxO"),
                m = n("ZYjt"),
                f = n("mrSG"),
                d = n("EVdn"),
                g = n("agoJ"),
                y = function(t) {
                    function e(e, n, i, r, s) {
                        var a = t.call(this, i) || this;
                        return a.sanitizer = e, a.route = n, a.injector = i, a.platform = r, a.meta = s, a.slug = "", a.showClass = !1, a.clickedUnderstand = !1, a.now = new Date, a.animationSpeed = 1.5, a.pagedata = [], a.style1 = a.sanitizer.bypassSecurityTrustResourceUrl("../../assets/css/style.css"), a.lottieConfig = {
                            path: "/assets/images/lottie/home_lotti.json",
                            renderer: "canvas",
                            autoplay: !0,
                            loop: !0
                        }, a
                    }
                    return Object(f.c)(e, t), e.prototype.handleAnimation = function(t) {
                        this.anim = t, this.animationSpeed = this.animationSpeed, this.anim.setSpeed(this.animationSpeed)
                    }, e.prototype.setSpeed = function(t) {
                        this.animationSpeed = t, this.anim.setSpeed(t)
                    }, e.prototype.ngOnInit = function() {
                        var t = this;
                        this.route.params && this.route.paramMap.subscribe(function(e) {
                            t.slug = t.route.snapshot.params.slug, t.slug || (t.slug = "home"), t.commonService.callApi("wp/v2/pages/?slug=" + t.slug, {}, "get", !1, !0).then(function(e) {
                                e && e.length ? t.meta.updateMeta(e[0].yoast_meta) : t.router.navigate(["/not_found"]), t.pagedata = e[0].acf.site_content, t.isBrowser() && t.commonService.AddMyPageData(document.URL, t.pagedata[0].slug), t.pagedata.find(function(t) {
                                    return "home_page_client_module" === t.acf_fc_layout && t.show_clients_on_home_page
                                }) && t.commonService.callApi("wp/v2/brandlogo-settings", {}, "get", !1, !0).then(function(e) {
                                    t.brandlogo = e
                                }), Object(o.r)(t.platform) && d.getScript("assets/js/how_we_work.js"), Object(o.r)(t.platform) && setTimeout(function() {
                                    function t(t, e) {
                                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                                        return t
                                    }

                                    function e(e, n) {
                                        this.DOM = {}, this.DOM.el = e, this.options = t({}, this.options), t(this.options, n), this._init()
                                    } imagesLoaded(document.querySelector(".block"), function() {
                                        var t;
                                        alert("enter");
                                        document.body.classList.remove("loading"), t = 0, [].slice.call(document.querySelectorAll("div#intro")).forEach(function(i, r) {
                                            new e(i, n[(t = r % 2 == 0 ? t + 1 : t) - 1])
                                        })
                                    }), e.prototype.options = {
                                        movement: {
                                            imgWrapper: {
                                                translation: {
                                                    x: 0,
                                                    y: 0,
                                                    z: 0
                                                },
                                                rotation: {
                                                    x: -5,
                                                    y: 5,
                                                    z: 0
                                                },
                                                reverseAnimation: {
                                                    duration: 1200,
                                                    easing: "easeOutElastic",
                                                    elasticity: 600
                                                }
                                            },
                                            lines: {
                                                translation: {
                                                    x: 10,
                                                    y: 10,
                                                    z: [0, 10]
                                                },
                                                reverseAnimation: {
                                                    duration: 1e3,
                                                    easing: "easeOutExpo",
                                                    elasticity: 600
                                                }
                                            },
                                            caption: {
                                                translation: {
                                                    x: 20,
                                                    y: 20,
                                                    z: 0
                                                },
                                                rotation: {
                                                    x: 0,
                                                    y: 0,
                                                    z: 0
                                                },
                                                reverseAnimation: {
                                                    duration: 1500,
                                                    easing: "easeOutElastic",
                                                    elasticity: 600
                                                }
                                            },
                                            overlay: {
                                                translation: {
                                                    x: 10,
                                                    y: 10,
                                                    z: [0, 50]
                                                },
                                                reverseAnimation: {
                                                    duration: 500,
                                                    easing: "easeOutExpo"
                                                }
                                            },
                                            shine: {
                                                translation: {
                                                    x: 50,
                                                    y: 50,
                                                    z: 0
                                                },
                                                reverseAnimation: {
                                                    duration: 1200,
                                                    easing: "easeOutElastic",
                                                    elasticity: 600
                                                }
                                            }
                                        }
                                    }, e.prototype._init = function() {
                                        this.DOM.animatable = {}, this.DOM.animatable.imgWrapper = this.DOM.el.querySelector(".tilter__figure"), this.DOM.animatable.lines = this.DOM.el.querySelector(".tilter__deco--lines"), this.DOM.animatable.caption = this.DOM.el.querySelector(".tilter__caption"), this.DOM.animatable.overlay = this.DOM.el.querySelector(".tilter__deco--overlay"), this.DOM.animatable.shine = this.DOM.el.querySelector(".tilter__deco--shine > div"), this._initEvents()
                                    }, e.prototype._initEvents = function() {
                                        var t = this;
                                        this.mouseenterFn = function() {
                                            for (var e in t.DOM.animatable);
                                        }, this.mousemoveFn = function(e) {
                                            requestAnimationFrame(function() {
                                                t._layout(e)
                                            })
                                        }, this.mouseleaveFn = function(e) {
                                            requestAnimationFrame(function() {
                                                for (var e in t.DOM.animatable);
                                            })
                                        }, this.DOM.el.addEventListener("mousemove", this.mousemoveFn), this.DOM.el.addEventListener("mouseleave", this.mouseleaveFn), this.DOM.el.addEventListener("mouseenter", this.mouseenterFn)
                                    }, e.prototype._layout = function(t) {
                                        var e, n, i, r = (n = 0, i = 0, (e = t) || (e = window.event), e.pageX || e.pageY ? (n = e.pageX, i = e.pageY) : (e.clientX || e.clientY) && (n = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, i = e.clientY + document.body.scrollTop + document.documentElement.scrollTop), {
                                                x: n,
                                                y: i
                                            }),
                                            s = document.body.scrollLeft + document.documentElement.scrollLeft,
                                            a = document.body.scrollTop + document.documentElement.scrollTop,
                                            o = this.DOM.el.getBoundingClientRect(),
                                            l = r.x - o.left - s,
                                            h = r.y - o.top - a;
                                        for (var p in this.DOM.animatable)
                                            if (null != this.DOM.animatable[p] && null != this.options.movement[p]) {
                                                var c = null != this.options.movement[p] && this.options.movement[p].translation || {
                                                        x: 0,
                                                        y: 0,
                                                        z: 0
                                                    },
                                                    u = null != this.options.movement[p] && this.options.movement[p].rotation || {
                                                        x: 0,
                                                        y: 0,
                                                        z: 0
                                                    },
                                                    m = function(t) {
                                                        for (var e in t) null == t[e] ? t[e] = [0, 0] : "number" == typeof t[e] && (t[e] = [-1 * t[e], t[e]])
                                                    };
                                                m(c), m(u);
                                                var f = {
                                                    translation: {
                                                        x: (c.x[1] - c.x[0]) / o.width * l + c.x[0],
                                                        y: (c.y[1] - c.y[0]) / o.height * h + c.y[0],
                                                        z: (c.z[1] - c.z[0]) / o.height * h + c.z[0]
                                                    },
                                                    rotation: {
                                                        x: (u.x[1] - u.x[0]) / o.height * h + u.x[0],
                                                        y: (u.y[1] - u.y[0]) / o.width * l + u.y[0],
                                                        z: (u.z[1] - u.z[0]) / o.width * l + u.z[0]
                                                    }
                                                };
                                                this.DOM.animatable[p].style.WebkitTransform = this.DOM.animatable[p].style.transform = "translateX(" + f.translation.x + "px) translateY(" + f.translation.y + "px) translateZ(" + f.translation.z + "px) rotateX(" + f.rotation.x + "deg) rotateY(" + f.rotation.y + "deg) rotateZ(" + f.rotation.z + "deg)"
                                            }
                                    }, window.TiltFx = e
                                }, 2e3), t.isBrowser() && setTimeout(function() {
                                    d(".preloader").hide()
                                }, 500)
                            })
                        }), this.showModal = !1
                    }, e.prototype.ngAfterViewInit = function() {
                        var t = this;
                        this.now = new Date, setTimeout(function() {
                            t.getPopup()
                        })
                    }, e.prototype.getPopup = function() {
                        var t = this;
                        this.commonService.callApi("wp/v2/current_country", {}, "get", !1, !0).then(function(e) {
                            e && t.commonService.callApi("wp/v2/popup", {}, "get", !1, !0).then(function(e) {
                                t.popUpData = e.popup_content, 1 == e.status && Object(o.r)(t.platform) && (t.clickedUnderstand = JSON.parse(t.commonService.getToken("understand")), t.user_current_timestamp = t.commonService.getToken("user_current_time"), t.user_current_timestamp_30days_validate = t.now.getTime() + 2592e6, t.user_current_timestamp ? t.user_current_timestamp > t.user_current_timestamp_30days_validate && setTimeout(function() {
                                    t.commonService.setToken("popup", "true"), t.commonService.setToken("user_current_time", t.now.getTime()), t.showModal = JSON.parse(t.commonService.getToken("popup")), t.showClass = !0, d("body").addClass("modal-open")
                                }, 1e3) : setTimeout(function() {
                                    t.commonService.setToken("popup", "true"), t.commonService.setToken("user_current_time", t.now.getTime()), t.showModal = JSON.parse(t.commonService.getToken("popup")), t.showClass = !0, d("body").addClass("modal-open")
                                }, 1e3))
                            })
                        })
                    }, e.prototype.toggleVideo = function(t) {
                        this.videoplayer.nativeElement.paused ? this.videoplayer.nativeElement.play() : this.videoplayer.nativeElement.pause(), ga("send", {
                            hitType: "event",
                            eventCategory: "Homepage Video",
                            eventAction: "Play",
                            eventLabel: "Jugaad"
                        })
                    }, e.prototype.setBackgroundGradient = function(t, e) {
                        return "linear-gradient(225deg, " + t + " 0%, " + e + " 100%)"
                    }, e.prototype.understand = function(t) {
                        Object(o.r)(this.platform) && d("body").removeClass("modal-open"), this.commonService.setToken("understand", "true"), this.clickedUnderstand = JSON.parse(this.commonService.getToken("understand")), this.showClass = !1
                    }, e.prototype.FilterurlforJugadvideo = function(t) {
                        return this.sanitizer.bypassSecurityTrustResourceUrl(t)
                    }, e.prototype.onplay = function() {
                        ga("send", {
                            hitType: "event",
                            eventCategory: "Homepage Video",
                            eventAction: "Play"
                        })
                    }, e.prototype.getredirectUrl = function(t) {
                        if (t) {
                            var e = t.split("/");
                            return "/" + e[e.length - 2]
                        }
                    }, e.prototype.removeCss = function() {
                        Object(o.r)(this.platform) && d("body").removeClass("modal-open")
                    }, e
                }(n("QSRU").a),
                v = i.mb({
                    encapsulation: 0,
                    styles: [
                        ["svg#work-anim[_ngcontent-%COMP%]{width:100%}svg#work-anim[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{opacity:.15;stroke-width:1;fill:none}svg#work-anim[_ngcontent-%COMP%]   marker[_ngcontent-%COMP%]{opacity:.15}svg#work-anim[_ngcontent-%COMP%]   marker.lit[_ngcontent-%COMP%]{opacity:1}svg#work-anim[_ngcontent-%COMP%]   #vertical[_ngcontent-%COMP%]{opacity:.5;stroke-width:1;fill:none;stroke:#d0021b}svg#work-anim[_ngcontent-%COMP%]   #first[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], svg#work-anim[_ngcontent-%COMP%]   #path1[_ngcontent-%COMP%]{stroke:url(#grad_1)}svg#work-anim[_ngcontent-%COMP%]   #path2[_ngcontent-%COMP%], svg#work-anim[_ngcontent-%COMP%]   #second[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{stroke:url(#grad_2)}svg#work-anim[_ngcontent-%COMP%]   #path3[_ngcontent-%COMP%], svg#work-anim[_ngcontent-%COMP%]   #third[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{stroke:url(#grad_3)}svg#work-anim[_ngcontent-%COMP%]   #path1[_ngcontent-%COMP%], svg#work-anim[_ngcontent-%COMP%]   #path2[_ngcontent-%COMP%], svg#work-anim[_ngcontent-%COMP%]   #path3[_ngcontent-%COMP%]{opacity:1;fill:none;stroke-width:1}svg#work-anim[_ngcontent-%COMP%]   #path3[_ngcontent-%COMP%]{marker-end:url(#Triangle)}.high-costs[_ngcontent-%COMP%], .low-costs[_ngcontent-%COMP%]{font-size:.875em;line-height:1.5;text-align:center;font-weight:500;color:#121c25;position:absolute}.high-costs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1), .low-costs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){font-weight:700}.low-costs[_ngcontent-%COMP%]{top:1.875em;left:28.4%}.high-costs[_ngcontent-%COMP%]{top:1.875em;left:78%}.napster-container[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{background:#2ca6de;opacity:0;width:1000px;height:1000px;border-radius:100%;position:absolute;top:-12em;left:23em;transform-origin:center center;-webkit-animation:12s linear -12s infinite pulse-me;animation:12s linear -12s infinite pulse-me}.napster-container[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-9s;animation-delay:-9s}.napster-container[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-6s;animation-delay:-6s}.napster-container[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-3s;animation-delay:-3s}@-webkit-keyframes pulse-me{0%{transform:scale(0);opacity:.09}50%{opacity:.09}70%{opacity:.04}90%{transform:scale(1);opacity:0}100%{opacity:0;transform:scale(0)}}@keyframes pulse-me{0%{transform:scale(0);opacity:.09}50%{opacity:.09}70%{opacity:.04}90%{transform:scale(1);opacity:0}100%{opacity:0;transform:scale(0)}}.napster-container[_ngcontent-%COMP%]{position:absolute;width:100%;left:0;top:0;height:100%}@media (max-width:1170px){.napster-container[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{width:130vw;height:130vw;left:70px;top:-470px}}@media (max-width:991px){.napster-container[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{top:-200px}.high-costs[_ngcontent-%COMP%], .low-costs[_ngcontent-%COMP%]{top:-1em}}@media (max-width:767px){.napster-container[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{width:600px;height:600px;right:0;top:-300px;left:calc(-300px + 50vw)}.high-costs[_ngcontent-%COMP%], .low-costs[_ngcontent-%COMP%]{font-size:.75em}.high-costs[_ngcontent-%COMP%]{left:70%}svg#work-anim[_ngcontent-%COMP%]{padding-top:20px}}"]
                    ],
                    data: {
                        animation: [{
                            type: 7,
                            name: "myInsertRemoveTrigger",
                            definitions: [{
                                type: 1,
                                expr: ":enter",
                                animation: [{
                                    type: 6,
                                    styles: {
                                        opacity: 0
                                    },
                                    offset: null
                                }, {
                                    type: 4,
                                    styles: {
                                        type: 6,
                                        styles: {
                                            opacity: 1
                                        },
                                        offset: null
                                    },
                                    timings: "4s"
                                }],
                                options: null
                            }, {
                                type: 1,
                                expr: ":leave",
                                animation: [{
                                    type: 4,
                                    styles: {
                                        type: 6,
                                        styles: {
                                            opacity: 0
                                        },
                                        offset: null
                                    },
                                    timings: "4s"
                                }],
                                options: null
                            }],
                            options: {}
                        }]
                    }
                });

            function b(t) {
                return i.Ib(0, [(t()(), i.ob(0, 0, null, null, 2, "a", [
                    ["class", "blue-bg-button"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== i.yb(t, 1).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r
                }, null, null)), i.nb(1, 671744, null, 0, a.n, [a.m, a.a, o.h], {
                    routerLink: [0, "routerLink"]
                }, null), (t()(), i.Gb(2, null, ["", ""]))], function(t, e) {
                    t(e, 1, 0, "/" + e.component.commonService.replaceRootURLToBlank(null == e.parent.parent.context.$implicit ? null : e.parent.parent.context.$implicit.home_banner_button_link))
                }, function(t, e) {
                    t(e, 0, 0, i.yb(e, 1).target, i.yb(e, 1).href), t(e, 2, 0, null == e.parent.parent.context.$implicit ? null : e.parent.parent.context.$implicit.home_banner_button_text)
                })
            }

            function _(t) {
                return i.Ib(0, [(t()(), i.ob(0, 0, null, null, 13, "section", [
                    ["class", "hero-banner"]
                ], null, null, null, null, null)), (t()(), i.ob(1, 0, null, null, 6, "div", [
                    ["class", "container"]
                ], null, null, null, null, null)), (t()(), i.ob(2, 0, null, null, 5, "div", [
                    ["class", "hero-title"]
                ], null, null, null, null, null)), (t()(), i.ob(3, 0, null, null, 0, "h1", [], [
                    [8, "innerHTML", 1]
                ], null, null, null, null)), (t()(), i.ob(4, 0, null, null, 3, "div", [
                    ["class", "approch-sec"]
                ], null, null, null, null, null)), (t()(), i.ob(5, 0, null, null, 0, "p", [
                    ["class", "grey-cmn"]
                ], [
                    [8, "innerHTML", 1]
                ], null, null, null, null)), (t()(), i.gb(16777216, null, null, 1, null, b)), i.nb(7, 16384, null, 0, o.k, [i.O, i.L], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), i.ob(8, 0, null, null, 2, "div", [
                    ["class", "hero-video"]
                ], null, null, null, null, null)), (t()(), i.ob(9, 0, null, null, 1, "video", [
                    ["autoplay", ""],
                    ["class", "video-footer"],
                    ["loop", ""],
                    ["onloadedmetadata", "this.muted=true"],
                    ["playsinline", ""],
                    ["preload", "auto"],
                    ["webkit-playsinline", ""]
                ], [
                    [8, "poster", 4]
                ], [
                    [null, "play"]
                ], function(t, e, n) {
                    var i = !0;
                    return "play" === e && (i = !1 !== t.component.onplay() && i), i
                }, null, null)), (t()(), i.ob(10, 0, null, null, 0, "source", [
                    ["type", "video/mp4"]
                ], [
                    [8, "src", 4]
                ], null, null, null, null)), (t()(), i.ob(11, 0, null, null, 2, "div", [
                    ["class", "scroll-btm"]
                ], null, null, null, null, null)), (t()(), i.ob(12, 0, null, null, 1, "a", [
                    ["class", "btn_scroll"],
                    ["href", "#more"]
                ], null, null, null, null, null)), (t()(), i.Gb(-1, null, ["Scroll down"]))], function(t, e) {
                    t(e, 7, 0, null == e.parent.context.$implicit ? null : e.parent.context.$implicit.home_banner_button_text)
                }, function(t, e) {
                    t(e, 3, 0, null == e.parent.context.$implicit ? null : e.parent.context.$implicit.home_banner_text), t(e, 5, 0, null == e.parent.context.$implicit ? null : e.parent.context.$implicit.home_banner_description), t(e, 9, 0, null == e.parent.context.$implicit ? null : e.parent.context.$implicit.home_banner_video_poster_image), t(e, 10, 0, null == e.parent.context.$implicit ? null : e.parent.context.$implicit.home_banner_video_url)
                })
            }

            function x(t) {
                return i.Ib(0, [(t()(), i.ob(0, 0, null, null, 11, "section", [
                    ["class", "organization"],
                    ["id", "more"]
                ], null, null, null, null, null)), (t()(), i.ob(1, 0, null, null, 3, "div", [
                    ["class", "container"]
                ], null, null, null, null, null)), (t()(), i.ob(2, 0, null, null, 2, "div", [
                    ["class", "how-we-work"]
                ], null, null, null, null, null)), (t()(), i.ob(3, 0, null, null, 1, "h2", [], null, null, null, null, null)), (t()(), i.Gb(4, null, ["", ""])), (t()(), i.ob(5, 0, null, null, 3, "div", [
                    ["class", "container-fluid"]
                ], null, null, null, null, null)), (t()(), i.ob(6, 0, null, null, 2, "div", [
                    ["class", "work-animation-sec"]
                ], null, null, null, null, null)), (t()(), i.ob(7, 0, null, null, 1, "lottie-animation-view", [], null, null, null, c, p)), i.nb(8, 114688, null, 0, h, [i.B], {
                    options: [0, "options"],
                    width: [1, "width"],
                    height: [2, "height"]
                }, null), (t()(), i.ob(9, 0, null, null, 2, "div", [
                    ["class", "container"]
                ], null, null, null, null, null)), (t()(), i.ob(10, 0, null, null, 1, "div", [
                    ["class", "work-more-sec"]
                ], null, null, null, null, null)), (t()(), i.ob(11, 0, null, null, 0, "div", [
                    ["class", "desc"]
                ], [
                    [8, "innerHTML", 1]
                ], null, null, null, null))], function(t, e) {
                    var n = e.component;
                    t(e, 8, 0, n.lottieConfig, n.auto, n.auto)
                }, function(t, e) {
                    t(e, 4, 0, null == e.parent.context.$implicit ? null : e.parent.context.$implicit.organized_solution_section_title), t(e, 11, 0, null == e.parent.context.$implicit ? null : e.parent.context.$implicit.organized_solution_quotes)
                })
            }

            function E(t) {
                return i.Ib(0, [(t()(), i.ob(0, 0, null, null, 24, "div", [
                    ["class", "our-services"]
                ], null, null, null, null, null)), (t()(), i.ob(1, 0, null, null, 23, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (t()(), i.ob(2, 0, null, null, 8, "div", [
                    ["class", "col-md-6 col-lg-7"]
                ], null, null, null, null, null)), (t()(), i.ob(3, 0, null, null, 7, "div", [
                    ["class", "service-detail pad-right-80"]
                ], null, null, null, null, null)), (t()(), i.ob(4, 0, null, null, 1, "h2", [
                    ["class", "service-title"]
                ], null, null, null, null, null)), (t()(), i.Gb(5, null, [" ", ""])), (t()(), i.ob(6, 0, null, null, 0, "div", [
                    ["class", "grey-cmn collapse"],
                    ["id", "collapseSummary"]
                ], [
                    [8, "innerHTML", 1]
                ], null, null, null, null)), (t()(), i.ob(7, 0, null, null, 0, "a", [
                    ["aria-controls", "collapseSummary"],
                    ["aria-expanded", "false"],
                    ["class", "collapsed read-more-para"],
                    ["data-toggle", "collapse"]
                ], [
                    [8, "href", 4]
                ], null, null, null, null)), (t()(), i.ob(8, 0, null, null, 2, "div", [
                    ["class", "read-more-button desktop"]
                ], null, null, null, null, null)), (t()(), i.ob(9, 0, null, null, 1, "a", [
                    ["class", "blue-button"]
                ], [
                    [8, "href", 4]
                ], null, null, null, null)), (t()(), i.Gb(10, null, ["", ""])), (t()(), i.ob(11, 0, null, null, 13, "div", [
                    ["class", "col-md-6 col-lg-5"]
                ], null, null, null, null, null)), (t()(), i.ob(12, 0, null, null, 9, "div", [
                    ["class", "service-image parallax-gallery"]
                ], null, null, null, null, null)), (t()(), i.ob(13, 0, null, null, 5, "div", [
                    ["class", "imageContainer"]
                ], null, null, null, null, null)), (t()(), i.ob(14, 0, null, null, 4, "div", [
                    ["class", "mover parallax"]
                ], null, null, null, null, null)), (t()(), i.ob(15, 0, null, null, 3, "picture", [], null, null, null, null, null)), (t()(), i.ob(16, 0, null, null, 0, "source", [
                    ["class", "img-fluid"],
                    ["media", "(min-width: 650px)"]
                ], [
                    [8, "srcset", 4]
                ], null, null, null, null)), (t()(), i.ob(17, 0, null, null, 0, "source", [
                    ["class", "img-fluid"],
                    ["media", "(min-width: 465px)"]
                ], [
                    [8, "srcset", 4]
                ], null, null, null, null)), (t()(), i.ob(18, 0, null, null, 0, "img", [
                    ["alt", "Flowers"]
                ], [
                    [8, "src", 4]
                ], null, null, null, null)), (t()(), i.ob(19, 0, null, null, 2, "div", [
                    ["class", "services-background"]
                ], null, null, null, null, null)), i.nb(20, 278528, null, 0, o.n, [i.t, i.k, i.D], {
                    ngStyle: [0, "ngStyle"]
                }, null), i.Bb(21, {
                    "background-color": 0
                }), (t()(), i.ob(22, 0, null, null, 2, "div", [
                    ["class", "read-more-button d-none"]
                ], null, null, null, null, null)), (t()(), i.ob(23, 0, null, null, 1, "a", [
                    ["class", "blue-button"]
                ], [
                    [8, "href", 4]
                ], null, null, null, null)), (t()(), i.Gb(24, null, ["", ""]))], function(t, e) {
                    var n = t(e, 21, 0, null == e.parent.parent.context.$implicit ? null : e.parent.parent.context.$implicit.content_with_image_section_image_background_color);
                    t(e, 20, 0, n)
                }, function(t, e) {
                    var n = e.component;
                    t(e, 5, 0, null == e.parent.parent.context.$implicit ? null : e.parent.parent.context.$implicit.content_with_image_section_title), t(e, 6, 0, null == e.parent.parent.context.$implicit ? null : e.parent.parent.context.$implicit.content_with_image_section_description), t(e, 7, 0, n.commonService.replaceRootURLToBlank(null == e.parent.parent.context.$implicit ? null : e.parent.parent.context.$implicit.content_with_image_section_button_link)), t(e, 9, 0, n.commonService.replaceRootURLToBlank(null == e.parent.parent.context.$implicit ? null : e.parent.parent.context.$implicit.content_with_image_section_button_link)), t(e, 10, 0, null == e.parent.parent.context.$implicit ? null : e.parent.parent.context.$implicit.content_with_image_section_button_name), t(e, 16, 0, i.qb(1, "", null == e.parent.parent.context.$implicit ? null : null == e.parent.parent.context.$implicit.content_with_image_section_image ? null : e.parent.parent.context.$implicit.content_with_image_section_image.url, "")), t(e, 17, 0, i.qb(1, "", null == e.parent.parent.context.$implicit ? null : null == e.parent.parent.context.$implicit.content_with_image_section_image ? null : e.parent.parent.context.$implicit.content_with_image_section_image.url, "")), t(e, 18, 0, i.qb(1, "", null == e.parent.parent.context.$implicit ? null : null == e.parent.parent.context.$implicit.content_with_image_section_image ? null : e.parent.parent.context.$implicit.content_with_image_section_image.url, "")), t(e, 23, 0, n.commonService.replaceRootURLToBlank(null == e.parent.parent.context.$implicit ? null : e.parent.parent.context.$implicit.content_with_image_section_button_link)), t(e, 24, 0, null == e.parent.parent.context.$implicit ? null : e.parent.parent.context.$implicit.content_with_image_section_button_name)
                })
            }

            function P(t) {
                return i.Ib(0, [(t()(), i.ob(0, 0, null, null, 24, "div", [
                    ["class", "our-services flex-column-reverse"]
                ], null, null, null, null, null)), (t()(), i.ob(1, 0, null, null, 23, "div", [
                    ["class", "row flex-row-reverse"]
                ], null, null, null, null, null)), (t()(), i.ob(2, 0, null, null, 8, "div", [
                    ["class", "col-md-6 col-lg-7"]
                ], null, null, null, null, null)), (t()(), i.ob(3, 0, null, null, 7, "div", [
                    ["class", "service-detail pad-left-80"]
                ], null, null, null, null, null)), (t()(), i.ob(4, 0, null, null, 1, "h2", [
                    ["class", "service-title"]
                ], null, null, null, null, null)), (t()(), i.Gb(5, null, [" ", ""])), (t()(), i.ob(6, 0, null, null, 0, "div", [
                    ["class", "grey-cmn collapse"],
                    ["id", "collapseSummary"]
                ], [
                    [8, "innerHTML", 1]
                ], null, null, null, null)), (t()(), i.ob(7, 0, null, null, 0, "a", [
                    ["aria-controls", "collapseSummary1"],
                    ["aria-expanded", "false"],
                    ["class", "collapsed read-more-para"],
                    ["data-toggle", "collapse"]
                ], [
                    [8, "href", 4]
                ], null, null, null, null)), (t()(), i.ob(8, 0, null, null, 2, "div", [
                    ["class", "read-more-button desktop"]
                ], null, null, null, null, null)), (t()(), i.ob(9, 0, null, null, 1, "a", [
                    ["class", "blue-button"]
                ], [
                    [8, "href", 4]
                ], null, null, null, null)), (t()(), i.Gb(10, null, ["", ""])), (t()(), i.ob(11, 0, null, null, 13, "div", [
                    ["class", "col-md-6 col-lg-5"]
                ], null, null, null, null, null)), (t()(), i.ob(12, 0, null, null, 9, "div", [
                    ["class", "service-image parallax-gallery"]
                ], null, null, null, null, null)), (t()(), i.ob(13, 0, null, null, 5, "div", [
                    ["class", "imageContainer"]
                ], null, null, null, null, null)), (t()(), i.ob(14, 0, null, null, 4, "div", [
                    ["class", "mover parallax"]
                ], null, null, null, null, null)), (t()(), i.ob(15, 0, null, null, 3, "picture", [], null, null, null, null, null)), (t()(), i.ob(16, 0, null, null, 0, "source", [
                    ["class", "img-fluid"],
                    ["media", "(min-width: 650px)"]
                ], [
                    [8, "srcset", 4]
                ], null, null, null, null)), (t()(), i.ob(17, 0, null, null, 0, "source", [
                    ["class", "img-fluid"],
                    ["media", "(min-width: 465px)"]
                ], [
                    [8, "srcset", 4]
                ], null, null, null, null)), (t()(), i.ob(18, 0, null, null, 0, "img", [
                    ["alt", "Flowers"]
                ], [
                    [8, "src", 4]
                ], null, null, null, null)), (t()(), i.ob(19, 0, null, null, 2, "div", [
                    ["class", "services-background"]
                ], null, null, null, null, null)), i.nb(20, 278528, null, 0, o.n, [i.t, i.k, i.D], {
                    ngStyle: [0, "ngStyle"]
                }, null), i.Bb(21, {
                    "background-color": 0
                }), (t()(), i.ob(22, 0, null, null, 2, "div", [
                    ["class", "read-more-button d-none"]
                ], null, null, null, null, null)), (t()(), i.ob(23, 0, null, null, 1, "a", [
                    ["class", "blue-button"]
                ], [
                    [8, "href", 4]
                ], null, null, null, null)), (t()(), i.Gb(24, null, ["", ""]))], function(t, e) {
                    var n = t(e, 21, 0, null == e.parent.parent.context.$implicit ? null : e.parent.parent.context.$implicit.content_with_image_section_image_background_color);
                    t(e, 20, 0, n)
                }, function(t, e) {
                    var n = e.component;
                    t(e, 5, 0, null == e.parent.parent.context.$implicit ? null : e.parent.parent.context.$implicit.content_with_image_section_title), t(e, 6, 0, null == e.parent.parent.context.$implicit ? null : e.parent.parent.context.$implicit.content_with_image_section_description), t(e, 7, 0, n.commonService.replaceRootURLToBlank(null == e.parent.parent.context.$implicit ? null : e.parent.parent.context.$implicit.content_with_image_section_button_link)), t(e, 9, 0, n.commonService.replaceRootURLToBlank(null == e.parent.parent.context.$implicit ? null : e.parent.parent.context.$implicit.content_with_image_section_button_link)), t(e, 10, 0, null == e.parent.parent.context.$implicit ? null : e.parent.parent.context.$implicit.content_with_image_section_button_name), t(e, 16, 0, i.qb(1, "", null == e.parent.parent.context.$implicit ? null : null == e.parent.parent.context.$implicit.content_with_image_section_image ? null : e.parent.parent.context.$implicit.content_with_image_section_image.url, "")), t(e, 17, 0, i.qb(1, "", null == e.parent.parent.context.$implicit ? null : null == e.parent.parent.context.$implicit.content_with_image_section_image ? null : e.parent.parent.context.$implicit.content_with_image_section_image.url, "")), t(e, 18, 0, i.qb(1, "", null == e.parent.parent.context.$implicit ? null : null == e.parent.parent.context.$implicit.content_with_image_section_image ? null : e.parent.parent.context.$implicit.content_with_image_section_image.url, "")), t(e, 23, 0, n.commonService.replaceRootURLToBlank(null == e.parent.parent.context.$implicit ? null : e.parent.parent.context.$implicit.content_with_image_section_button_link)), t(e, 24, 0, null == e.parent.parent.context.$implicit ? null : e.parent.parent.context.$implicit.content_with_image_section_button_name)
                })
            }

            function S(t) {
                return i.Ib(0, [(t()(), i.ob(0, 0, null, null, 5, "section", [
                    ["class", "services-sec"]
                ], null, null, null, null, null)), (t()(), i.ob(1, 0, null, null, 4, "div", [
                    ["class", "container"]
                ], null, null, null, null, null)), (t()(), i.gb(16777216, null, null, 1, null, E)), i.nb(3, 16384, null, 0, o.k, [i.O, i.L], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), i.gb(16777216, null, null, 1, null, P)), i.nb(5, 16384, null, 0, o.k, [i.O, i.L], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    t(e, 3, 0, "right" == (null == e.parent.context.$implicit ? null : e.parent.context.$implicit.content_with_image_section_image_position)), t(e, 5, 0, "left" == (null == e.parent.context.$implicit ? null : e.parent.context.$implicit.content_with_image_section_image_position))
                }, null)
            }

            function C(t) {
                return i.Ib(0, [(t()(), i.ob(0, 0, null, null, 0, "img", [], [
                    [8, "src", 4]
                ], null, null, null, null))], null, function(t, e) {
                    t(e, 0, 0, null == e.parent.parent.context.$implicit ? null : null == e.parent.parent.context.$implicit.trusted_brands_logo ? null : e.parent.parent.context.$implicit.trusted_brands_logo.url)
                })
            }

            function k(t) {
                return i.Ib(0, [(t()(), i.ob(0, 0, null, null, 3, "a", [], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== i.yb(t, 1).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r
                }, null, null)), i.nb(1, 671744, null, 0, a.n, [a.m, a.a, o.h], {
                    routerLink: [0, "routerLink"]
                }, null), (t()(), i.gb(16777216, null, null, 1, null, C)), i.nb(3, 16384, null, 0, o.k, [i.O, i.L], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    t(e, 1, 0, "/" + e.component.commonService.replaceRootURLToBlank(null == e.parent.context.$implicit ? null : e.parent.context.$implicit.trusted_brands_logo_page_link)), t(e, 3, 0, null == e.parent.context.$implicit ? null : null == e.parent.context.$implicit.trusted_brands_logo ? null : e.parent.context.$implicit.trusted_brands_logo.url)
                }, function(t, e) {
                    t(e, 0, 0, i.yb(e, 1).target, i.yb(e, 1).href)
                })
            }

            function T(t) {
                return i.Ib(0, [(t()(), i.ob(0, 0, null, null, 0, "img", [], [
                    [8, "src", 4]
                ], null, null, null, null))], null, function(t, e) {
                    t(e, 0, 0, null == e.parent.context.$implicit ? null : null == e.parent.context.$implicit.trusted_brands_logo ? null : e.parent.context.$implicit.trusted_brands_logo.url)
                })
            }

            function A(t) {
                return i.Ib(0, [(t()(), i.ob(0, 0, null, null, 4, "li", [], null, null, null, null, null)), (t()(), i.gb(16777216, null, null, 1, null, k)), i.nb(2, 16384, null, 0, o.k, [i.O, i.L], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), i.gb(16777216, null, null, 1, null, T)), i.nb(4, 16384, null, 0, o.k, [i.O, i.L], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    t(e, 2, 0, "" != (null == e.context.$implicit ? null : e.context.$implicit.trusted_brands_logo_page_link)), t(e, 4, 0, "" != (null == e.context.$implicit ? null : null == e.context.$implicit.trusted_brands_logo ? null : e.context.$implicit.trusted_brands_logo.url) && "" == (null == e.context.$implicit ? null : e.context.$implicit.trusted_brands_logo_page_link))
                }, null)
            }

            function M(t) {
                return i.Ib(0, [(t()(), i.ob(0, 0, null, null, 10, "section", [
                    ["class", "clients-block"]
                ], null, null, null, null, null)), (t()(), i.ob(1, 0, null, null, 9, "div", [
                    ["class", "container"]
                ], null, null, null, null, null)), (t()(), i.ob(2, 0, null, null, 4, "div", [
                    ["class", "center-title"]
                ], null, null, null, null, null)), (t()(), i.ob(3, 0, null, null, 1, "h2", [], null, null, null, null, null)), (t()(), i.Gb(4, null, ["", ""])), (t()(), i.ob(5, 0, null, null, 1, "p", [
                    ["class", "grey-cmn"]
                ], null, null, null, null, null)), (t()(), i.Gb(6, null, ["", ""])), (t()(), i.ob(7, 0, null, null, 3, "div", [
                    ["class", "client-logo-sec"]
                ], null, null, null, null, null)), (t()(), i.ob(8, 0, null, null, 2, "ul", [
                    ["class", "brand-logos"]
                ], null, null, null, null, null)), (t()(), i.gb(16777216, null, null, 1, null, A)), i.nb(10, 278528, null, 0, o.j, [i.O, i.L, i.s], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(t, e) {
                    var n = e.component;
                    t(e, 10, 0, null == n.brandlogo ? null : null == n.brandlogo.data ? null : n.brandlogo.data.trusted_brands_details)
                }, function(t, e) {
                    var n = e.component;
                    t(e, 4, 0, null == n.brandlogo ? null : null == n.brandlogo.data ? null : n.brandlogo.data.trusted_brands_title), t(e, 6, 0, null == n.brandlogo ? null : null == n.brandlogo.data ? null : n.brandlogo.data.trusted_brands_heading)
                })
            }

            function w(t) {
                return i.Ib(0, [(t()(), i.ob(0, 0, null, null, 10, "div", [
                    ["class", "client-says"]
                ], null, null, null, null, null)), (t()(), i.ob(1, 0, null, null, 1, "h5", [], null, null, null, null, null)), (t()(), i.Gb(2, null, ["", ""])), (t()(), i.ob(3, 0, null, null, 7, "div", [
                    ["class", "d-inline-flex mar-top-30"]
                ], null, null, null, null, null)), (t()(), i.ob(4, 0, null, null, 1, "div", [
                    ["class", "client-thumb"]
                ], null, null, null, null, null)), (t()(), i.ob(5, 0, null, null, 0, "img", [
                    ["class", "img-fluid"]
                ], [
                    [8, "src", 4]
                ], null, null, null, null)), (t()(), i.ob(6, 0, null, null, 4, "div", [
                    ["class", "client-des"]
                ], null, null, null, null, null)), (t()(), i.ob(7, 0, null, null, 1, "h6", [], null, null, null, null, null)), (t()(), i.Gb(8, null, ["", ""])), (t()(), i.ob(9, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), i.Gb(10, null, ["", ""]))], null, function(t, e) {
                    t(e, 2, 0, null == e.parent.context.$implicit ? null : e.parent.context.$implicit.portfolio_project_client_comment), t(e, 5, 0, null == e.parent.context.$implicit ? null : null == e.parent.context.$implicit.portfolio_project_client_picture ? null : e.parent.context.$implicit.portfolio_project_client_picture.url), t(e, 8, 0, null == e.parent.context.$implicit ? null : e.parent.context.$implicit.portfolio_project_client_name), t(e, 10, 0, null == e.parent.context.$implicit ? null : e.parent.context.$implicit.portfolio_project_client_designation)
                })
            }

            function D(t) {
                return i.Ib(0, [(t()(), i.ob(0, 0, null, null, 2, "div", [
                    ["class", "client-says"]
                ], null, null, null, null, null)), (t()(), i.ob(1, 0, null, null, 1, "p", [
                    ["class", "client-sec-para"]
                ], null, null, null, null, null)), (t()(), i.Gb(2, null, [" ", " "]))], null, function(t, e) {
                    t(e, 2, 0, null == e.parent.context.$implicit ? null : e.parent.context.$implicit.portfolio_project_description_content)
                })
            }

            function F(t) {
                return i.Ib(0, [(t()(), i.ob(0, 0, null, null, 20, null, null, null, null, null, null, null)), (t()(), i.ob(1, 0, null, null, 19, "a", [
                    ["class", "cs-main mar-top-70"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== i.yb(t, 2).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r
                }, null, null)), i.nb(2, 671744, null, 0, a.n, [a.m, a.a, o.h], {
                    routerLink: [0, "routerLink"]
                }, null), (t()(), i.ob(3, 0, null, null, 17, "div", [
                    ["class", "cs-info"]
                ], null, null, null, null, null)), i.nb(4, 278528, null, 0, o.n, [i.t, i.k, i.D], {
                    ngStyle: [0, "ngStyle"]
                }, null), i.Bb(5, {
                    "background-image": 0
                }), (t()(), i.ob(6, 0, null, null, 14, "div", [
                    ["class", "case-study-block"]
                ], null, null, null, null, null)), (t()(), i.ob(7, 0, null, null, 8, "div", [
                    ["class", "cs-detail"]
                ], null, null, null, null, null)), (t()(), i.ob(8, 0, null, null, 1, "p", [
                    ["class", "cs-title"]
                ], null, null, null, null, null)), (t()(), i.Gb(9, null, [" ", " "])), (t()(), i.ob(10, 0, null, null, 1, "h2", [
                    ["class", "cs-description"]
                ], null, null, null, null, null)), (t()(), i.Gb(11, null, [" ", ""])), (t()(), i.gb(16777216, null, null, 1, null, w)), i.nb(13, 16384, null, 0, o.k, [i.O, i.L], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), i.gb(16777216, null, null, 1, null, D)), i.nb(15, 16384, null, 0, o.k, [i.O, i.L], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), i.ob(16, 0, null, null, 4, "div", [
                    ["class", "cs-thumb-img"]
                ], null, null, null, null, null)), (t()(), i.ob(17, 0, null, null, 3, "picture", [], null, null, null, null, null)), (t()(), i.ob(18, 0, null, null, 0, "source", [
                    ["class", "img-fluid"],
                    ["media", "(min-width: 650px)"]
                ], [
                    [8, "srcset", 4]
                ], null, null, null, null)), (t()(), i.ob(19, 0, null, null, 0, "source", [
                    ["class", "img-fluid"],
                    ["media", "(min-width: 465px)"]
                ], [
                    [8, "srcset", 4]
                ], null, null, null, null)), (t()(), i.ob(20, 0, null, null, 0, "img", [
                    ["alt", "Sparker"],
                    ["class", "img-fluid"]
                ], [
                    [8, "src", 4]
                ], null, null, null, null))], function(t, e) {
                    var n = e.component;
                    t(e, 2, 0, "/" + n.commonService.replaceRootURLToBlank(null == e.context.$implicit ? null : e.context.$implicit.portfolio_project_details_page_link));
                    var i = t(e, 5, 0, n.setBackgroundGradient(null == e.context.$implicit ? null : e.context.$implicit.portfolio_section_background_color, null == e.context.$implicit ? null : e.context.$implicit.portfolio_section_background_color2_for_gradient));
                    t(e, 4, 0, i), t(e, 13, 0, "yes" == (null == e.context.$implicit ? null : e.context.$implicit.have_client_comment)), t(e, 15, 0, "yes" != (null == e.context.$implicit ? null : e.context.$implicit.have_client_comment))
                }, function(t, e) {
                    t(e, 1, 0, i.yb(e, 2).target, i.yb(e, 2).href), t(e, 9, 0, null == e.context.$implicit ? null : e.context.$implicit.portfolio_project_name), t(e, 11, 0, null == e.context.$implicit ? null : e.context.$implicit.portfolio_project_title), t(e, 18, 0, i.qb(1, "", null == e.context.$implicit ? null : null == e.context.$implicit.portfolio_project_image ? null : e.context.$implicit.portfolio_project_image.url, "")), t(e, 19, 0, i.qb(1, "", null == e.context.$implicit ? null : null == e.context.$implicit.portfolio_project_image ? null : e.context.$implicit.portfolio_project_image.url, "")), t(e, 20, 0, i.qb(1, "", null == e.context.$implicit ? null : null == e.context.$implicit.portfolio_project_image ? null : e.context.$implicit.portfolio_project_image.url, ""))
                })
            }

            function I(t) {
                return i.Ib(0, [(t()(), i.ob(0, 0, null, null, 13, "section", [
                    ["class", "case-study-sec"]
                ], null, null, null, null, null)), (t()(), i.ob(1, 0, null, null, 5, "div", [
                    ["class", "container"]
                ], null, null, null, null, null)), (t()(), i.ob(2, 0, null, null, 4, "div", [
                    ["class", "center-title"]
                ], null, null, null, null, null)), (t()(), i.ob(3, 0, null, null, 1, "h2", [], null, null, null, null, null)), (t()(), i.Gb(4, null, ["", ""])), (t()(), i.ob(5, 0, null, null, 1, "p", [
                    ["class", "grey-cmn"]
                ], null, null, null, null, null)), (t()(), i.Gb(6, null, ["", ""])), (t()(), i.ob(7, 0, null, null, 6, "div", [
                    ["class", "container"]
                ], null, null, null, null, null)), (t()(), i.gb(16777216, null, null, 1, null, F)), i.nb(9, 278528, null, 0, o.j, [i.O, i.L, i.s], {
                    ngForOf: [0, "ngForOf"]
                }, null), (t()(), i.ob(10, 0, null, null, 3, "div", [
                    ["class", "view-all-project mar-top-70"]
                ], null, null, null, null, null)), (t()(), i.ob(11, 0, null, null, 2, "div", [
                    ["class", "text-center"]
                ], null, null, null, null, null)), (t()(), i.ob(12, 0, null, null, 1, "a", [
                    ["class", "blue-bg-button"]
                ], [
                    [8, "href", 4]
                ], null, null, null, null)), (t()(), i.Gb(13, null, ["", ""]))], function(t, e) {
                    t(e, 9, 0, null == e.parent.context.$implicit ? null : e.parent.context.$implicit.home_portfolio_details)
                }, function(t, e) {
                    var n = e.component;
                    t(e, 4, 0, null == e.parent.context.$implicit ? null : e.parent.context.$implicit.home_portfolio_section_title), t(e, 6, 0, null == e.parent.context.$implicit ? null : e.parent.context.$implicit.home_portfolio_section_description), t(e, 12, 0, n.commonService.replaceRootURLToBlank(null == e.parent.context.$implicit ? null : e.parent.context.$implicit.home_portfolio_button_link)), t(e, 13, 0, null == e.parent.context.$implicit ? null : e.parent.context.$implicit.home_portfolio_button_name)
                })
            }

            function V(t) {
                return i.Ib(0, [(t()(), i.ob(0, 0, null, null, 19, "section", [
                    ["class", "jugaad-block pad-100 "]
                ], null, null, null, null, null)), (t()(), i.ob(1, 0, null, null, 18, "div", [
                    ["class", "container"]
                ], null, null, null, null, null)), (t()(), i.ob(2, 0, null, null, 11, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (t()(), i.ob(3, 0, null, null, 7, "div", [
                    ["class", "col-md-6"]
                ], null, null, null, null, null)), (t()(), i.ob(4, 0, null, null, 6, "div", [
                    ["class", "how-jugaad"]
                ], null, null, null, null, null)), (t()(), i.ob(5, 0, null, null, 1, "span", [
                    ["class", "small-title"]
                ], null, null, null, null, null)), (t()(), i.Gb(6, null, ["", " "])), (t()(), i.ob(7, 0, null, null, 1, "h2", [], null, null, null, null, null)), (t()(), i.Gb(8, null, ["", ""])), (t()(), i.ob(9, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), i.Gb(10, null, ["", ""])), (t()(), i.ob(11, 0, null, null, 2, "div", [
                    ["class", "col-md-6"]
                ], null, null, null, null, null)), (t()(), i.ob(12, 0, null, null, 1, "div", [
                    ["class", "jugaad-info"]
                ], null, null, null, null, null)), (t()(), i.ob(13, 0, null, null, 0, "p", [
                    ["class", "grey-cmn"]
                ], [
                    [8, "innerHTML", 1]
                ], null, null, null, null)), (t()(), i.ob(14, 0, null, null, 5, "div", [
                    ["class", "jugaad-video"],
                    ["id", "video-home-jugaad"]
                ], null, null, null, null, null)), (t()(), i.ob(15, 0, null, null, 4, "div", [
                    ["class", "jugaad-video-sec embed-responsive embed-responsive-16by9"]
                ], null, null, null, null, null)), (t()(), i.ob(16, 0, null, null, 0, "div", [
                    ["class", "jugaad-video-btn-play"]
                ], null, null, null, null, null)), (t()(), i.ob(17, 0, null, null, 0, "img", [
                    ["class", "jugaad-video-img-play"]
                ], [
                    [8, "src", 4]
                ], null, null, null, null)), (t()(), i.ob(18, 0, null, null, 1, "iframe", [
                    ["allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"],
                    ["allowfullscreen", ""],
                    ["frameborder", "0"],
                    ["height", "100%"],
                    ["id", "ytplayer"],
                    ["width", "100%"]
                ], [
                    [8, "src", 5]
                ], null, null, null, null)), i.Cb(19, 1)], null, function(t, e) {
                    t(e, 6, 0, null == e.parent.context.$implicit ? null : e.parent.context.$implicit.home_page_jugad_section_name), t(e, 8, 0, null == e.parent.context.$implicit ? null : e.parent.context.$implicit.home_page_jugad_section_title), t(e, 10, 0, null == e.parent.context.$implicit ? null : e.parent.context.$implicit.home_page_jugad_section_heading), t(e, 13, 0, null == e.parent.context.$implicit ? null : e.parent.context.$implicit.home_page_jugad_section_description), t(e, 17, 0, null == e.parent.context.$implicit ? null : null == e.parent.context.$implicit.home_page_jugad_section_image ? null : e.parent.context.$implicit.home_page_jugad_section_image.url);
                    var n = i.Hb(e, 18, 0, t(e, 19, 0, i.yb(e.parent.parent.parent, 0), null == e.parent.context.$implicit ? null : e.parent.context.$implicit.home_jugad_test));
                    t(e, 18, 0, n)
                })
            }

            function R(t) {
                return i.Ib(0, [(t()(), i.ob(0, 0, null, null, 16, "section", [
                    ["class", "contactus-sec"],
                    ["id", "contact"]
                ], null, null, null, null, null)), (t()(), i.ob(1, 0, null, null, 15, "div", [
                    ["class", "container"]
                ], null, null, null, null, null)), (t()(), i.ob(2, 0, null, null, 14, "div", [
                    ["class", "what-idea-banner text-center"]
                ], null, null, null, null, null)), (t()(), i.ob(3, 0, null, null, 1, "span", [
                    ["class", "small-title"]
                ], null, null, null, null, null)), (t()(), i.Gb(-1, null, ["Let's Work Together "])), (t()(), i.ob(5, 0, null, null, 9, "a", [
                    ["class", "tilter tilter--1"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== i.yb(t, 6).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), r
                }, null, null)), i.nb(6, 671744, null, 0, a.n, [a.m, a.a, o.h], {
                    routerLink: [0, "routerLink"]
                }, null), (t()(), i.ob(7, 0, null, null, 7, "figure", [
                    ["class", "tilter__figure"]
                ], null, null, null, null, null)), (t()(), i.ob(8, 0, null, null, 0, "img", [
                    ["alt", "img02"],
                    ["class", "tilter__image "],
                    ["src", "assets/images/part1.png"]
                ], null, null, null, null, null)), (t()(), i.ob(9, 0, null, null, 1, "div", [
                    ["class", "tilter__deco tilter__deco--shine"]
                ], null, null, null, null, null)), (t()(), i.ob(10, 0, null, null, 0, "div", [], null, null, null, null, null)), (t()(), i.ob(11, 0, null, null, 0, "img", [
                    ["alt", "img12"],
                    ["class", "tilter__deco tilter__deco--lines absolute_img"],
                    ["src", "assets/images/part4.png"]
                ], null, null, null, null, null)), (t()(), i.ob(12, 0, null, null, 0, "div", [
                    ["class", "tilter__deco tilter__deco--overlay"]
                ], null, null, null, null, null)), (t()(), i.ob(13, 0, null, null, 0, "div", [
                    ["class", "tilter__caption"]
                ], null, null, null, null, null)), (t()(), i.ob(14, 0, null, null, 0, "img", [
                    ["alt", "img02"],
                    ["class", "absolute_img"],
                    ["src", "assets/images/part5.png"]
                ], null, null, null, null, null)), (t()(), i.ob(15, 0, null, null, 1, "a", [
                    ["class", "blue-bg-button mar-top-30"]
                ], [
                    [8, "href", 4]
                ], null, null, null, null)), (t()(), i.Gb(-1, null, ["Contact Us"]))], function(t, e) {
                    t(e, 6, 0, "/")
                }, function(t, e) {
                    var n = e.component;
                    t(e, 5, 0, i.yb(e, 6).target, i.yb(e, 6).href), t(e, 15, 0, n.commonService.replaceRootURLToBlank(null == e.parent.context.$implicit ? null : e.parent.context.$implicit.lets_work_together_section_contact_button_link))
                })
            }

            function B(t) {
                return i.Ib(0, [(t()(), i.ob(0, 0, null, null, 15, null, null, null, null, null, null, null)), (t()(), i.gb(16777216, null, null, 1, null, _)), i.nb(2, 16384, null, 0, o.k, [i.O, i.L], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), i.gb(16777216, null, null, 1, null, x)), i.nb(4, 16384, null, 0, o.k, [i.O, i.L], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), i.gb(16777216, null, null, 1, null, S)), i.nb(6, 16384, null, 0, o.k, [i.O, i.L], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), i.gb(16777216, null, null, 1, null, M)), i.nb(8, 16384, null, 0, o.k, [i.O, i.L], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), i.gb(16777216, null, null, 1, null, I)), i.nb(10, 16384, null, 0, o.k, [i.O, i.L], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), i.gb(16777216, null, null, 1, null, V)), i.nb(12, 16384, null, 0, o.k, [i.O, i.L], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), i.gb(16777216, null, null, 1, null, R)), i.nb(14, 16384, null, 0, o.k, [i.O, i.L], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), i.ob(15, 0, null, null, 0, "div", [
                    ["class", "space-border"]
                ], null, null, null, null, null))], function(t, e) {
                    var n = e.component;
                    t(e, 2, 0, "home_page_banner_module" == (null == e.context.$implicit ? null : e.context.$implicit.acf_fc_layout)), t(e, 4, 0, "home_page_organised_solution_module" == (null == e.context.$implicit ? null : e.context.$implicit.acf_fc_layout)), t(e, 6, 0, "content_with_image_section_module" == (null == e.context.$implicit ? null : e.context.$implicit.acf_fc_layout)), t(e, 8, 0, "home_page_client_module" == (null == e.context.$implicit ? null : e.context.$implicit.acf_fc_layout) && 1 == (null == e.context.$implicit ? null : e.context.$implicit.show_clients_on_home_page) && n.brandlogo), t(e, 10, 0, "home_portfolio_module" == (null == e.context.$implicit ? null : e.context.$implicit.acf_fc_layout)), t(e, 12, 0, "home_page_jugad_module" == (null == e.context.$implicit ? null : e.context.$implicit.acf_fc_layout)), t(e, 14, 0, "lets_work_together_module" == (null == e.context.$implicit ? null : e.context.$implicit.acf_fc_layout))
                }, null)
            }

            function L(t) {
                return i.Ib(0, [(t()(), i.ob(0, 0, null, null, 34, null, null, null, null, null, null, null)), (t()(), i.ob(1, 0, null, null, 0, "link", [
                    ["rel", "stylesheet"]
                ], [
                    [8, "href", 5]
                ], null, null, null, null)), (t()(), i.ob(2, 0, null, null, 2, "div", [
                    ["class", "insert-remove-container"]
                ], [
                    [24, "@myInsertRemoveTrigger", 0]
                ], null, null, null, null)), (t()(), i.gb(16777216, null, null, 1, null, B)), i.nb(4, 278528, null, 0, o.j, [i.O, i.L, i.s], {
                    ngForOf: [0, "ngForOf"]
                }, null), (t()(), i.ob(5, 0, null, null, 29, "div", [
                    ["class", "modal fade fullscreen-popup"],
                    ["id", "myModal"],
                    ["role", "dialog"]
                ], null, null, null, null, null)), i.nb(6, 278528, null, 0, o.i, [i.s, i.t, i.k, i.D], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), i.Bb(7, {
                    show: 0
                }), (t()(), i.ob(8, 0, null, null, 26, "div", [
                    ["class", "modal-dialog"]
                ], null, null, null, null, null)), (t()(), i.ob(9, 0, null, null, 25, "div", [
                    ["class", "modal-content"]
                ], null, null, null, null, null)), (t()(), i.ob(10, 0, null, null, 24, "div", [
                    ["class", "container"]
                ], null, null, null, null, null)), (t()(), i.ob(11, 0, null, null, 3, "div", [
                    ["class", "modal-header"]
                ], null, null, null, null, null)), (t()(), i.ob(12, 0, null, null, 2, "h4", [
                    ["class", "modal-title"]
                ], null, null, null, null, null)), (t()(), i.ob(13, 0, null, null, 1, "a", [
                    ["href", "/"]
                ], null, null, null, null, null)), (t()(), i.Gb(14, null, ["", ""])), (t()(), i.ob(15, 0, null, null, 10, "div", [
                    ["class", "modal-body"]
                ], null, null, null, null, null)), (t()(), i.ob(16, 0, null, null, 1, "h2", [], null, null, null, null, null)), (t()(), i.Gb(17, null, ["", ""])), (t()(), i.ob(18, 0, null, null, 7, "div", [
                    ["class", "popup-text"]
                ], null, null, null, null, null)), (t()(), i.ob(19, 0, null, null, 6, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (t()(), i.ob(20, 0, null, null, 0, "div", [
                    ["class", "col-sm-6 col-md-6 popup-left"]
                ], [
                    [8, "innerHTML", 1]
                ], null, null, null, null)), (t()(), i.ob(21, 0, null, null, 3, "div", [
                    ["class", "col-sm-6 col-md-6 popup-right"]
                ], null, null, null, null, null)), (t()(), i.ob(22, 0, null, null, 1, "h3", [], null, null, null, null, null)), (t()(), i.Gb(23, null, ["", ""])), (t()(), i.ob(24, 0, null, null, 0, "span", [], [
                    [8, "innerHTML", 1]
                ], null, null, null, null)), (t()(), i.ob(25, 0, null, null, 0, "div", [
                    ["class", "clearfix"]
                ], null, null, null, null, null)), (t()(), i.ob(26, 0, null, null, 8, "div", [
                    ["class", "modal-footer"]
                ], null, null, null, null, null)), (t()(), i.ob(27, 0, null, null, 2, "a", [
                    ["class", "btn btn-default proceed-btn"],
                    ["data-dismiss", "modal"]
                ], null, [
                    [null, "click"]
                ], function(t, e, n) {
                    var i = !0;
                    return "click" === e && (i = !1 !== t.component.understand() && i), i
                }, null, null)), (t()(), i.Gb(28, null, [" ", " "])), (t()(), i.ob(29, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-long-arrow-right"]
                ], null, null, null, null, null)), (t()(), i.ob(30, 0, null, null, 2, "a", [
                    ["class", "btn btn-default"],
                    ["target", "_blank"]
                ], [
                    [1, "target", 0],
                    [8, "href", 4]
                ], [
                    [null, "click"]
                ], function(t, e, n) {
                    var r = !0,
                        s = t.component;
                    return "click" === e && (r = !1 !== i.yb(t, 31).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), "click" === e && (r = !1 !== s.removeCss() && r), r
                }, null, null)), i.nb(31, 671744, null, 0, a.n, [a.m, a.a, o.h], {
                    target: [0, "target"],
                    routerLink: [1, "routerLink"]
                }, null), (t()(), i.Gb(32, null, ["", ""])), (t()(), i.ob(33, 0, null, null, 1, "a", [
                    ["class", "btn btn-default"]
                ], [
                    [8, "href", 4]
                ], null, null, null, null)), (t()(), i.Gb(34, null, ["", ""]))], function(t, e) {
                    var n = e.component;
                    t(e, 4, 0, n.pagedata);
                    var i = t(e, 7, 0, n.showClass);
                    t(e, 6, 0, "modal fade fullscreen-popup", i), t(e, 31, 0, "_blank", n.getredirectUrl(null == n.popUpData ? null : n.popUpData.join_indianic_button_link))
                }, function(t, e) {
                    var n = e.component;
                    t(e, 1, 0, n.style1), t(e, 2, 0, void 0), t(e, 14, 0, null == n.popUpData ? null : n.popUpData.popup_site_link), t(e, 17, 0, null == n.popUpData ? null : n.popUpData.popup_title), t(e, 20, 0, null == n.popUpData ? null : n.popUpData.popup_content_left), t(e, 23, 0, null == n.popUpData ? null : n.popUpData.popup_content_right_title), t(e, 24, 0, null == n.popUpData ? null : n.popUpData.popup_content_right), t(e, 28, 0, null == n.popUpData ? null : n.popUpData.popup_understand_button_title), t(e, 30, 0, i.yb(e, 31).target, i.yb(e, 31).href), t(e, 32, 0, null == n.popUpData ? null : n.popUpData.join_indianic_button_title), t(e, 33, 0, i.qb(1, "mailto:", null == n.popUpData ? null : n.popUpData.vendor_inquiry_email, "")), t(e, 34, 0, null == n.popUpData ? null : n.popUpData.vendor_inquiry_title)
                })
            }

            function O(t) {
                return i.Ib(0, [i.Ab(0, u.c, [m.c]), i.Eb(402653184, 1, {
                    videoplayer: 0
                }), (t()(), i.gb(16777216, null, null, 1, null, L)), i.nb(3, 16384, null, 0, o.k, [i.O, i.L], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    t(e, 3, 0, e.component.pagedata)
                }, null)
            }

            function G(t) {
                return i.Ib(0, [(t()(), i.ob(0, 0, null, null, 1, "app-home", [], null, [
                    [null, "click"],
                    ["window", "scroll"]
                ], function(t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== i.yb(t, 1).onClick(n) && r), "window:scroll" === e && (r = !1 !== i.yb(t, 1).checkScroll() && r), r
                }, O, v)), i.nb(1, 4308992, null, 0, y, [m.c, a.a, i.q, i.B, g.a], null, null)], function(t, e) {
                    t(e, 1, 0)
                }, null)
            }
            var z = i.kb("app-home", y, G, {}, {}, []),
                N = n("gIcY"),
                H = n("z0F3"),
                j = function() {
                    return function() {}
                }(),
                $ = function() {
                    function t() {}
                    return t.forRoot = function() {
                        return {
                            ngModule: t
                        }
                    }, t
                }();
            n.d(e, "HomeModuleNgFactory", function() {
                return q
            });
            var q = i.lb(r, [], function(t) {
                return i.vb([i.wb(512, i.j, i.bb, [
                    [8, [s.a, z]],
                    [3, i.j], i.x
                ]), i.wb(4608, o.m, o.l, [i.u, [2, o.u]]), i.wb(4608, N.t, N.t, []), i.wb(4608, H.i, H.i, [i.B, [2, H.b],
                    [2, H.a],
                    [2, H.c]
                ]), i.wb(1073742336, o.b, o.b, []), i.wb(1073742336, N.r, N.r, []), i.wb(1073742336, N.d, N.d, []), i.wb(1073742336, H.l, H.l, []), i.wb(1073742336, H.j, H.j, []), i.wb(1073742336, a.o, a.o, [
                    [2, a.u],
                    [2, a.m]
                ]), i.wb(1073742336, u.a, u.a, []), i.wb(1073742336, j, j, []), i.wb(1073742336, $, $, []), i.wb(1073742336, r, r, []), i.wb(1024, a.k, function() {
                    return [
                        [{
                            path: "",
                            component: y
                        }]
                    ]
                }, [])])
            })
        },
        agoJ: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return h
            });
            var i = n("ZYCi"),
                r = n("VnD/"),
                s = n("67Y/"),
                a = n("psW0"),
                o = n("CcnG"),
                l = n("ZYjt"),
                h = function() {
                    function t(t, e, n, i) {
                        this.titleService = t, this.meta = e, this.router = n, this.activatedRoute = i
                    }
                    return t.prototype.updateMeta = function(t) {
                        null != t && (this.updateTitle(t.yoast_wpseo_title), this.meta.updateTag({
                            name: "keywords",
                            content: this.checkNullPointer(t.yoast_wpseo_metakeywords)
                        }), this.meta.updateTag({
                            name: "description",
                            content: this.checkNullPointer(t.yoast_wpseo_metadesc)
                        }), this.meta.updateTag({
                            name: "focuskw",
                            content: this.checkNullPointer(t.yoast_wpseo_focuskw)
                        }), this.meta.updateTag({
                            name: "linkdex",
                            content: this.checkNullPointer(t.yoast_wpseo_linkdex)
                        }), this.meta.updateTag({
                            name: "robots",
                            content: "index,follow"
                        }), this.meta.updateTag({
                            name: "redirect",
                            content: this.checkNullPointer(t.yoast_wpseo_redirect)
                        }), this.meta.updateTag({
                            name: "twitter:title",
                            content: this.checkNullPointer(t.yoast_wpseo_twitter_title)
                        }), this.meta.updateTag({
                            name: "twitter:description",
                            content: this.checkNullPointer(t.yoast_wpseo_twitter_description)
                        }), this.meta.updateTag({
                            name: "twitter:image",
                            content: this.checkNullPointer(t.yoast_wpseo_twitter_image)
                        }), this.meta.updateTag({
                            name: "twitter:card",
                            content: "summary"
                        }), this.meta.updateTag({
                            name: "twitter:site",
                            content: "@indianic"
                        }), this.meta.updateTag({
                            name: "twitter:creator",
                            content: "@indianic"
                        }), this.meta.updateTag({
                            name: "language",
                            content: "english"
                        }))
                    }, t.prototype.updateBlogMeta = function(t) {
                        null != t && (this.updateTitle(t._aioseop_title), this.meta.updateTag({
                            name: "description",
                            content: this.checkNullPointer(t._aioseop_description)
                        }), this.meta.updateTag({
                            name: "language",
                            content: "english"
                        }))
                    }, t.prototype.checkNullPointer = function(t) {
                        return null != t ? t : ""
                    }, t.prototype.updateTitle = function(t) {
                        var e = this;
                        t ? this.titleService.setTitle(t) : this.router.events.pipe(Object(r.a)(function(t) {
                            return t instanceof i.d
                        }), Object(s.a)(function() {
                            return e.activatedRoute
                        }), Object(s.a)(function(t) {
                            for (; t.firstChild;) t = t.firstChild;
                            return t
                        }), Object(r.a)(function(t) {
                            return "primary" === t.outlet
                        }), Object(a.a)(function(t) {
                            return t.data
                        })).subscribe(function(t) {
                            e.titleService.setTitle(t.title)
                        })
                    }, t.ngInjectableDef = o.S({
                        factory: function() {
                            return new t(o.W(l.j), o.W(l.i), o.W(i.m), o.W(i.a))
                        },
                        token: t,
                        providedIn: "root"
                    }), t
                }()
        },
        lPHp: function(module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_RESULT__, root, factory;
            "undefined" != typeof navigator && (root = window || {}, factory = function(window) {
                "use strict";
                var svgNS = "http://www.w3.org/2000/svg",
                    locationHref = "",
                    initialDefaultFrame = -999999,
                    subframeEnabled = !0,
                    expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                    cachedColors = {},
                    bm_rounder = Math.round,
                    bm_rnd, bm_pow = Math.pow,
                    bm_sqrt = Math.sqrt,
                    bm_abs = Math.abs,
                    bm_floor = Math.floor,
                    bm_max = Math.max,
                    bm_min = Math.min,
                    blitter = 10,
                    BMMath = {};

                function ProjectInterface() {
                    return {}
                }! function() {
                    var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                        n = e.length;
                    for (t = 0; t < n; t += 1) BMMath[e[t]] = Math[e[t]]
                }(), BMMath.random = Math.random, BMMath.abs = function(t) {
                    if ("object" == typeof t && t.length) {
                        var e, n = createSizedArray(t.length),
                            i = t.length;
                        for (e = 0; e < i; e += 1) n[e] = Math.abs(t[e]);
                        return n
                    }
                    return Math.abs(t)
                };
                var defaultCurveSegments = 150,
                    degToRads = Math.PI / 180,
                    roundCorner = .5519;

                function roundValues(t) {
                    bm_rnd = t ? Math.round : function(t) {
                        return t
                    }
                }

                function styleDiv(t) {
                    t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = t.style.webkitTransformStyle = t.style.mozTransformStyle = "preserve-3d"
                }

                function BMEnterFrameEvent(t, e, n, i) {
                    this.type = t, this.currentTime = e, this.totalTime = n, this.direction = i < 0 ? -1 : 1
                }

                function BMCompleteEvent(t, e) {
                    this.type = t, this.direction = e < 0 ? -1 : 1
                }

                function BMCompleteLoopEvent(t, e, n, i) {
                    this.type = t, this.currentLoop = n, this.totalLoops = e, this.direction = i < 0 ? -1 : 1
                }

                function BMSegmentStartEvent(t, e, n) {
                    this.type = t, this.firstFrame = e, this.totalFrames = n
                }

                function BMDestroyEvent(t, e) {
                    this.type = t, this.target = e
                }

                function BMRenderFrameErrorEvent(t, e) {
                    this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
                }

                function BMConfigErrorEvent(t) {
                    this.type = "configError", this.nativeError = t
                }

                function BMAnimationConfigErrorEvent(t, e) {
                    this.type = t, this.nativeError = e, this.currentTime = currentTime
                }
                roundValues(!1);
                var createElementID = (_count = 0, function() {
                        return "__lottie_element_" + ++_count
                    }),
                    _count;

                function HSVtoRGB(t, e, n) {
                    var i, r, s, a, o, l, h, p;
                    switch (l = n * (1 - e), h = n * (1 - (o = 6 * t - (a = Math.floor(6 * t))) * e), p = n * (1 - (1 - o) * e), a % 6) {
                        case 0:
                            i = n, r = p, s = l;
                            break;
                        case 1:
                            i = h, r = n, s = l;
                            break;
                        case 2:
                            i = l, r = n, s = p;
                            break;
                        case 3:
                            i = l, r = h, s = n;
                            break;
                        case 4:
                            i = p, r = l, s = n;
                            break;
                        case 5:
                            i = n, r = l, s = h
                    }
                    return [i, r, s]
                }

                function RGBtoHSV(t, e, n) {
                    var i, r = Math.max(t, e, n),
                        s = Math.min(t, e, n),
                        a = r - s,
                        o = 0 === r ? 0 : a / r,
                        l = r / 255;
                    switch (r) {
                        case s:
                            i = 0;
                            break;
                        case t:
                            i = e - n + a * (e < n ? 6 : 0), i /= 6 * a;
                            break;
                        case e:
                            i = n - t + 2 * a, i /= 6 * a;
                            break;
                        case n:
                            i = t - e + 4 * a, i /= 6 * a
                    }
                    return [i, o, l]
                }

                function addSaturationToRGB(t, e) {
                    var n = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                    return n[1] += e, n[1] > 1 ? n[1] = 1 : n[1] <= 0 && (n[1] = 0), HSVtoRGB(n[0], n[1], n[2])
                }

                function addBrightnessToRGB(t, e) {
                    var n = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                    return n[2] += e, n[2] > 1 ? n[2] = 1 : n[2] < 0 && (n[2] = 0), HSVtoRGB(n[0], n[1], n[2])
                }

                function addHueToRGB(t, e) {
                    var n = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                    return n[0] += e / 360, n[0] > 1 ? n[0] -= 1 : n[0] < 0 && (n[0] += 1), HSVtoRGB(n[0], n[1], n[2])
                }
                var rgbToHex = function() {
                    var t, e, n = [];
                    for (t = 0; t < 256; t += 1) e = t.toString(16), n[t] = 1 == e.length ? "0" + e : e;
                    return function(t, e, i) {
                        return t < 0 && (t = 0), e < 0 && (e = 0), i < 0 && (i = 0), "#" + n[t] + n[e] + n[i]
                    }
                }();

                function BaseEvent() {}
                BaseEvent.prototype = {
                    triggerEvent: function(t, e) {
                        if (this._cbs[t])
                            for (var n = this._cbs[t].length, i = 0; i < n; i++) this._cbs[t][i](e)
                    },
                    addEventListener: function(t, e) {
                        return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e), (function() {
                            this.removeEventListener(t, e)
                        }).bind(this)
                    },
                    removeEventListener: function(t, e) {
                        if (e) {
                            if (this._cbs[t]) {
                                for (var n = 0, i = this._cbs[t].length; n < i;) this._cbs[t][n] === e && (this._cbs[t].splice(n, 1), n -= 1, i -= 1), n += 1;
                                this._cbs[t].length || (this._cbs[t] = null)
                            }
                        } else this._cbs[t] = null
                    }
                };
                var createTypedArray = "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(t, e) {
                    return "float32" === t ? new Float32Array(e) : "int16" === t ? new Int16Array(e) : "uint8c" === t ? new Uint8ClampedArray(e) : void 0
                } : function(t, e) {
                    var n, i = 0,
                        r = [];
                    switch (t) {
                        case "int16":
                        case "uint8c":
                            n = 1;
                            break;
                        default:
                            n = 1.1
                    }
                    for (i = 0; i < e; i += 1) r.push(n);
                    return r
                };

                function createSizedArray(t) {
                    return Array.apply(null, {
                        length: t
                    })
                }

                function createNS(t) {
                    return document.createElementNS(svgNS, t)
                }

                function createTag(t) {
                    return document.createElement(t)
                }

                function DynamicPropertyContainer() {}
                DynamicPropertyContainer.prototype = {
                    addDynamicProperty: function(t) {
                        -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
                    },
                    iterateDynamicProperties: function() {
                        this._mdf = !1;
                        var t, e = this.dynamicProperties.length;
                        for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
                    },
                    initDynamicPropertyContainer: function(t) {
                        this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
                    }
                };
                var getBlendMode = (blendModeEnums = {
                        0: "source-over",
                        1: "multiply",
                        2: "screen",
                        3: "overlay",
                        4: "darken",
                        5: "lighten",
                        6: "color-dodge",
                        7: "color-burn",
                        8: "hard-light",
                        9: "soft-light",
                        10: "difference",
                        11: "exclusion",
                        12: "hue",
                        13: "saturation",
                        14: "color",
                        15: "luminosity"
                    }, function(t) {
                        return blendModeEnums[t] || ""
                    }),
                    blendModeEnums, Matrix = function() {
                        var t = Math.cos,
                            e = Math.sin,
                            n = Math.tan,
                            i = Math.round;

                        function r() {
                            return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                        }

                        function s(n) {
                            if (0 === n) return this;
                            var i = t(n),
                                r = e(n);
                            return this._t(i, -r, 0, 0, r, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function a(n) {
                            if (0 === n) return this;
                            var i = t(n),
                                r = e(n);
                            return this._t(1, 0, 0, 0, 0, i, -r, 0, 0, r, i, 0, 0, 0, 0, 1)
                        }

                        function o(n) {
                            if (0 === n) return this;
                            var i = t(n),
                                r = e(n);
                            return this._t(i, 0, r, 0, 0, 1, 0, 0, -r, 0, i, 0, 0, 0, 0, 1)
                        }

                        function l(n) {
                            if (0 === n) return this;
                            var i = t(n),
                                r = e(n);
                            return this._t(i, -r, 0, 0, r, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function h(t, e) {
                            return this._t(1, e, t, 1, 0, 0)
                        }

                        function p(t, e) {
                            return this.shear(n(t), n(e))
                        }

                        function c(i, r) {
                            var s = t(r),
                                a = e(r);
                            return this._t(s, a, 0, 0, -a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, n(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(s, -a, 0, 0, a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function u(t, e, n) {
                            return n || 0 === n || (n = 1), 1 === t && 1 === e && 1 === n ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1)
                        }

                        function m(t, e, n, i, r, s, a, o, l, h, p, c, u, m, f, d) {
                            return this.props[0] = t, this.props[1] = e, this.props[2] = n, this.props[3] = i, this.props[4] = r, this.props[5] = s, this.props[6] = a, this.props[7] = o, this.props[8] = l, this.props[9] = h, this.props[10] = p, this.props[11] = c, this.props[12] = u, this.props[13] = m, this.props[14] = f, this.props[15] = d, this
                        }

                        function f(t, e, n) {
                            return n = n || 0, 0 !== t || 0 !== e || 0 !== n ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, n, 1) : this
                        }

                        function d(t, e, n, i, r, s, a, o, l, h, p, c, u, m, f, d) {
                            var g = this.props;
                            if (1 === t && 0 === e && 0 === n && 0 === i && 0 === r && 1 === s && 0 === a && 0 === o && 0 === l && 0 === h && 1 === p && 0 === c) return g[12] = g[12] * t + g[15] * u, g[13] = g[13] * s + g[15] * m, g[14] = g[14] * p + g[15] * f, g[15] = g[15] * d, this._identityCalculated = !1, this;
                            var y = g[0],
                                v = g[1],
                                b = g[2],
                                _ = g[3],
                                x = g[4],
                                E = g[5],
                                P = g[6],
                                S = g[7],
                                C = g[8],
                                k = g[9],
                                T = g[10],
                                A = g[11],
                                M = g[12],
                                w = g[13],
                                D = g[14],
                                F = g[15];
                            return g[0] = y * t + v * r + b * l + _ * u, g[1] = y * e + v * s + b * h + _ * m, g[2] = y * n + v * a + b * p + _ * f, g[3] = y * i + v * o + b * c + _ * d, g[4] = x * t + E * r + P * l + S * u, g[5] = x * e + E * s + P * h + S * m, g[6] = x * n + E * a + P * p + S * f, g[7] = x * i + E * o + P * c + S * d, g[8] = C * t + k * r + T * l + A * u, g[9] = C * e + k * s + T * h + A * m, g[10] = C * n + k * a + T * p + A * f, g[11] = C * i + k * o + T * c + A * d, g[12] = M * t + w * r + D * l + F * u, g[13] = M * e + w * s + D * h + F * m, g[14] = M * n + w * a + D * p + F * f, g[15] = M * i + w * o + D * c + F * d, this._identityCalculated = !1, this
                        }

                        function g() {
                            return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
                        }

                        function y(t) {
                            for (var e = 0; e < 16;) {
                                if (t.props[e] !== this.props[e]) return !1;
                                e += 1
                            }
                            return !0
                        }

                        function v(t) {
                            var e;
                            for (e = 0; e < 16; e += 1) t.props[e] = this.props[e]
                        }

                        function b(t) {
                            var e;
                            for (e = 0; e < 16; e += 1) this.props[e] = t[e]
                        }

                        function _(t, e, n) {
                            return {
                                x: t * this.props[0] + e * this.props[4] + n * this.props[8] + this.props[12],
                                y: t * this.props[1] + e * this.props[5] + n * this.props[9] + this.props[13],
                                z: t * this.props[2] + e * this.props[6] + n * this.props[10] + this.props[14]
                            }
                        }

                        function x(t, e, n) {
                            return t * this.props[0] + e * this.props[4] + n * this.props[8] + this.props[12]
                        }

                        function E(t, e, n) {
                            return t * this.props[1] + e * this.props[5] + n * this.props[9] + this.props[13]
                        }

                        function P(t, e, n) {
                            return t * this.props[2] + e * this.props[6] + n * this.props[10] + this.props[14]
                        }

                        function S(t) {
                            var e = this.props[0] * this.props[5] - this.props[1] * this.props[4];
                            return [t[0] * (this.props[5] / e) + t[1] * (-this.props[4] / e) + (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / e, t[0] * (-this.props[1] / e) + t[1] * (this.props[0] / e) + -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / e, 0]
                        }

                        function C(t) {
                            var e, n = t.length,
                                i = [];
                            for (e = 0; e < n; e += 1) i[e] = S(t[e]);
                            return i
                        }

                        function k(t, e, n) {
                            var i = createTypedArray("float32", 6);
                            if (this.isIdentity()) i[0] = t[0], i[1] = t[1], i[2] = e[0], i[3] = e[1], i[4] = n[0], i[5] = n[1];
                            else {
                                var r = this.props[0],
                                    s = this.props[1],
                                    a = this.props[4],
                                    o = this.props[5],
                                    l = this.props[12],
                                    h = this.props[13];
                                i[0] = t[0] * r + t[1] * a + l, i[1] = t[0] * s + t[1] * o + h, i[2] = e[0] * r + e[1] * a + l, i[3] = e[0] * s + e[1] * o + h, i[4] = n[0] * r + n[1] * a + l, i[5] = n[0] * s + n[1] * o + h
                            }
                            return i
                        }

                        function T(t, e, n) {
                            return this.isIdentity() ? [t, e, n] : [t * this.props[0] + e * this.props[4] + n * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + n * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + n * this.props[10] + this.props[14]]
                        }

                        function A(t, e) {
                            if (this.isIdentity()) return t + "," + e;
                            var n = this.props;
                            return Math.round(100 * (t * n[0] + e * n[4] + n[12])) / 100 + "," + Math.round(100 * (t * n[1] + e * n[5] + n[13])) / 100
                        }

                        function M() {
                            for (var t = 0, e = this.props, n = "matrix3d("; t < 16;) n += i(1e4 * e[t]) / 1e4, n += 15 === t ? ")" : ",", t += 1;
                            return n
                        }

                        function w(t) {
                            return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? i(1e4 * t) / 1e4 : t
                        }

                        function D() {
                            var t = this.props;
                            return "matrix(" + w(t[0]) + "," + w(t[1]) + "," + w(t[4]) + "," + w(t[5]) + "," + w(t[12]) + "," + w(t[13]) + ")"
                        }
                        return function() {
                            this.reset = r, this.rotate = s, this.rotateX = a, this.rotateY = o, this.rotateZ = l, this.skew = p, this.skewFromAxis = c, this.shear = h, this.scale = u, this.setTransform = m, this.translate = f, this.transform = d, this.applyToPoint = _, this.applyToX = x, this.applyToY = E, this.applyToZ = P, this.applyToPointArray = T, this.applyToTriplePoints = k, this.applyToPointStringified = A, this.toCSS = M, this.to2dCSS = D, this.clone = v, this.cloneFromProps = b, this.equals = y, this.inversePoints = C, this.inversePoint = S, this._t = this.transform, this.isIdentity = g, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
                        }
                    }();
                ! function(t, e) {
                    var n = this,
                        i = 256,
                        r = e.pow(i, 6),
                        s = e.pow(2, 52),
                        a = 2 * s,
                        o = i - 1;

                    function l(t) {
                        var e, n = t.length,
                            r = this,
                            s = 0,
                            a = r.i = r.j = 0,
                            l = r.S = [];
                        for (n || (t = [n++]); s < i;) l[s] = s++;
                        for (s = 0; s < i; s++) l[s] = l[a = o & a + t[s % n] + (e = l[s])], l[a] = e;
                        r.g = function(t) {
                            for (var e, n = 0, s = r.i, a = r.j, l = r.S; t--;) e = l[s = o & s + 1], n = n * i + l[o & (l[s] = l[a = o & a + e]) + (l[a] = e)];
                            return r.i = s, r.j = a, n
                        }
                    }

                    function h(t, e) {
                        return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
                    }

                    function p(t, e) {
                        for (var n, i = t + "", r = 0; r < i.length;) e[o & r] = o & (n ^= 19 * e[o & r]) + i.charCodeAt(r++);
                        return c(e)
                    }

                    function c(t) {
                        return String.fromCharCode.apply(0, t)
                    }
                    e.seedrandom = function(o, u, m) {
                        var f = [],
                            d = p(function t(e, n) {
                                var i, r = [],
                                    s = typeof e;
                                if (n && "object" == s)
                                    for (i in e) try {
                                        r.push(t(e[i], n - 1))
                                    } catch (a) {}
                                return r.length ? r : "string" == s ? e : e + "\0"
                            }((u = !0 === u ? {
                                entropy: !0
                            } : u || {}).entropy ? [o, c(t)] : null === o ? function() {
                                try {
                                    var e = new Uint8Array(i);
                                    return (n.crypto || n.msCrypto).getRandomValues(e), c(e)
                                } catch (a) {
                                    var r = n.navigator,
                                        s = r && r.plugins;
                                    return [+new Date, n, s, n.screen, c(t)]
                                }
                            }() : o, 3), f),
                            g = new l(f),
                            y = function() {
                                for (var t = g.g(6), e = r, n = 0; t < s;) t = (t + n) * i, e *= i, n = g.g(1);
                                for (; t >= a;) t /= 2, e /= 2, n >>>= 1;
                                return (t + n) / e
                            };
                        return y.int32 = function() {
                            return 0 | g.g(4)
                        }, y.quick = function() {
                            return g.g(4) / 4294967296
                        }, y.double = y, p(c(g.S), t), (u.pass || m || function(t, n, i, r) {
                            return r && (r.S && h(r, g), t.state = function() {
                                return h(g, {})
                            }), i ? (e.random = t, n) : t
                        })(y, d, "global" in u ? u.global : this == e, u.state)
                    }, p(e.random(), t)
                }([], BMMath);
                var BezierFactory = function() {
                    var t = {
                            getBezierEasing: function(t, n, i, r, s) {
                                var a = s || ("bez_" + t + "_" + n + "_" + i + "_" + r).replace(/\./g, "p");
                                if (e[a]) return e[a];
                                var o = new p([t, n, i, r]);
                                return e[a] = o, o
                            }
                        },
                        e = {},
                        n = 11,
                        i = 1 / (n - 1),
                        r = "function" == typeof Float32Array;

                    function s(t, e) {
                        return 1 - 3 * e + 3 * t
                    }

                    function a(t, e) {
                        return 3 * e - 6 * t
                    }

                    function o(t) {
                        return 3 * t
                    }

                    function l(t, e, n) {
                        return ((s(e, n) * t + a(e, n)) * t + o(e)) * t
                    }

                    function h(t, e, n) {
                        return 3 * s(e, n) * t * t + 2 * a(e, n) * t + o(e)
                    }

                    function p(t) {
                        this._p = t, this._mSampleValues = r ? new Float32Array(n) : new Array(n), this._precomputed = !1, this.get = this.get.bind(this)
                    }
                    return p.prototype = {
                        get: function(t) {
                            var e = this._p[0],
                                n = this._p[1],
                                i = this._p[2],
                                r = this._p[3];
                            return this._precomputed || this._precompute(), e === n && i === r ? t : 0 === t ? 0 : 1 === t ? 1 : l(this._getTForX(t), n, r)
                        },
                        _precompute: function() {
                            var t = this._p[0],
                                e = this._p[1],
                                n = this._p[2],
                                i = this._p[3];
                            this._precomputed = !0, t === e && n === i || this._calcSampleValues()
                        },
                        _calcSampleValues: function() {
                            for (var t = this._p[0], e = this._p[2], r = 0; r < n; ++r) this._mSampleValues[r] = l(r * i, t, e)
                        },
                        _getTForX: function(t) {
                            for (var e = this._p[0], r = this._p[2], s = this._mSampleValues, a = 0, o = 1, p = n - 1; o !== p && s[o] <= t; ++o) a += i;
                            var c = a + (t - s[--o]) / (s[o + 1] - s[o]) * i,
                                u = h(c, e, r);
                            return u >= .001 ? function(t, e, n, i) {
                                for (var r = 0; r < 4; ++r) {
                                    var s = h(e, n, i);
                                    if (0 === s) return e;
                                    e -= (l(e, n, i) - t) / s
                                }
                                return e
                            }(t, c, e, r) : 0 === u ? c : function(t, e, n, i, r) {
                                var s, a, o = 0;
                                do {
                                    (s = l(a = e + (n - e) / 2, i, r) - t) > 0 ? n = a : e = a
                                } while (Math.abs(s) > 1e-7 && ++o < 10);
                                return a
                            }(t, a, a + i, e, r)
                        }
                    }, t
                }();

                function extendPrototype(t, e) {
                    var n, i, r = t.length;
                    for (n = 0; n < r; n += 1)
                        for (var s in i = t[n].prototype) i.hasOwnProperty(s) && (e.prototype[s] = i[s])
                }

                function getDescriptor(t, e) {
                    return Object.getOwnPropertyDescriptor(t, e)
                }

                function createProxyFunction(t) {
                    function e() {}
                    return e.prototype = t, e
                }

                function bezFunction() {
                    function t(t, e, n, i, r, s) {
                        var a = t * i + e * r + n * s - r * i - s * t - n * e;
                        return a > -.001 && a < .001
                    }
                    Math;
                    var e = function(t, e, n, i) {
                        var r, s, a, o, l, h, p = defaultCurveSegments,
                            c = 0,
                            u = [],
                            m = [],
                            f = bezier_length_pool.newElement();
                        for (a = n.length, r = 0; r < p; r += 1) {
                            for (l = r / (p - 1), h = 0, s = 0; s < a; s += 1) o = bm_pow(1 - l, 3) * t[s] + 3 * bm_pow(1 - l, 2) * l * n[s] + 3 * (1 - l) * bm_pow(l, 2) * i[s] + bm_pow(l, 3) * e[s], u[s] = o, null !== m[s] && (h += bm_pow(u[s] - m[s], 2)), m[s] = u[s];
                            h && (c += h = bm_sqrt(h)), f.percents[r] = l, f.lengths[r] = c
                        }
                        return f.addedLength = c, f
                    };

                    function n(t) {
                        this.segmentLength = 0, this.points = new Array(t)
                    }

                    function i(t, e) {
                        this.partialLength = t, this.point = e
                    }
                    var r, s = (r = {}, function(e, s, a, o) {
                        var l = (e[0] + "_" + e[1] + "_" + s[0] + "_" + s[1] + "_" + a[0] + "_" + a[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
                        if (!r[l]) {
                            var h, p, c, u, m, f, d, g = defaultCurveSegments,
                                y = 0,
                                v = null;
                            2 === e.length && (e[0] != s[0] || e[1] != s[1]) && t(e[0], e[1], s[0], s[1], e[0] + a[0], e[1] + a[1]) && t(e[0], e[1], s[0], s[1], s[0] + o[0], s[1] + o[1]) && (g = 2);
                            var b = new n(g);
                            for (c = a.length, h = 0; h < g; h += 1) {
                                for (d = createSizedArray(c), m = h / (g - 1), f = 0, p = 0; p < c; p += 1) u = bm_pow(1 - m, 3) * e[p] + 3 * bm_pow(1 - m, 2) * m * (e[p] + a[p]) + 3 * (1 - m) * bm_pow(m, 2) * (s[p] + o[p]) + bm_pow(m, 3) * s[p], d[p] = u, null !== v && (f += bm_pow(d[p] - v[p], 2));
                                y += f = bm_sqrt(f), b.points[h] = new i(f, d), v = d
                            }
                            b.segmentLength = y, r[l] = b
                        }
                        return r[l]
                    });

                    function a(t, e) {
                        var n = e.percents,
                            i = e.lengths,
                            r = n.length,
                            s = bm_floor((r - 1) * t),
                            a = t * e.addedLength,
                            o = 0;
                        if (s === r - 1 || 0 === s || a === i[s]) return n[s];
                        for (var l = i[s] > a ? -1 : 1, h = !0; h;)
                            if (i[s] <= a && i[s + 1] > a ? (o = (a - i[s]) / (i[s + 1] - i[s]), h = !1) : s += l, s < 0 || s >= r - 1) {
                                if (s === r - 1) return n[s];
                                h = !1
                            }
                        return n[s] + (n[s + 1] - n[s]) * o
                    }
                    var o = createTypedArray("float32", 8);
                    return {
                        getSegmentsLength: function(t) {
                            var n, i = segments_length_pool.newElement(),
                                r = t.c,
                                s = t.v,
                                a = t.o,
                                o = t.i,
                                l = t._length,
                                h = i.lengths,
                                p = 0;
                            for (n = 0; n < l - 1; n += 1) h[n] = e(s[n], s[n + 1], a[n], o[n + 1]), p += h[n].addedLength;
                            return r && l && (h[n] = e(s[n], s[0], a[n], o[0]), p += h[n].addedLength), i.totalLength = p, i
                        },
                        getNewSegment: function(t, e, n, i, r, s, l) {
                            var h, p = a(r = r < 0 ? 0 : r > 1 ? 1 : r, l),
                                c = a(s = s > 1 ? 1 : s, l),
                                u = t.length,
                                m = 1 - p,
                                f = 1 - c,
                                d = m * m * m,
                                g = p * m * m * 3,
                                y = p * p * m * 3,
                                v = p * p * p,
                                b = m * m * f,
                                _ = p * m * f + m * p * f + m * m * c,
                                x = p * p * f + m * p * c + p * m * c,
                                E = p * p * c,
                                P = m * f * f,
                                S = p * f * f + m * c * f + m * f * c,
                                C = p * c * f + m * c * c + p * f * c,
                                k = p * c * c,
                                T = f * f * f,
                                A = c * f * f + f * c * f + f * f * c,
                                M = c * c * f + f * c * c + c * f * c,
                                w = c * c * c;
                            for (h = 0; h < u; h += 1) o[4 * h] = Math.round(1e3 * (d * t[h] + g * n[h] + y * i[h] + v * e[h])) / 1e3, o[4 * h + 1] = Math.round(1e3 * (b * t[h] + _ * n[h] + x * i[h] + E * e[h])) / 1e3, o[4 * h + 2] = Math.round(1e3 * (P * t[h] + S * n[h] + C * i[h] + k * e[h])) / 1e3, o[4 * h + 3] = Math.round(1e3 * (T * t[h] + A * n[h] + M * i[h] + w * e[h])) / 1e3;
                            return o
                        },
                        getPointInSegment: function(t, e, n, i, r, s) {
                            var o = a(r, s),
                                l = 1 - o;
                            return [Math.round(1e3 * (l * l * l * t[0] + (o * l * l + l * o * l + l * l * o) * n[0] + (o * o * l + l * o * o + o * l * o) * i[0] + o * o * o * e[0])) / 1e3, Math.round(1e3 * (l * l * l * t[1] + (o * l * l + l * o * l + l * l * o) * n[1] + (o * o * l + l * o * o + o * l * o) * i[1] + o * o * o * e[1])) / 1e3]
                        },
                        buildBezierData: s,
                        pointOnLine2D: t,
                        pointOnLine3D: function(e, n, i, r, s, a, o, l, h) {
                            if (0 === i && 0 === a && 0 === h) return t(e, n, r, s, o, l);
                            var p, c = Math.sqrt(Math.pow(r - e, 2) + Math.pow(s - n, 2) + Math.pow(a - i, 2)),
                                u = Math.sqrt(Math.pow(o - e, 2) + Math.pow(l - n, 2) + Math.pow(h - i, 2)),
                                m = Math.sqrt(Math.pow(o - r, 2) + Math.pow(l - s, 2) + Math.pow(h - a, 2));
                            return (p = c > u ? c > m ? c - u - m : m - u - c : m > u ? m - u - c : u - c - m) > -1e-4 && p < 1e-4
                        }
                    }
                }! function() {
                    for (var t = 0, e = ["ms", "moz", "webkit", "o"], n = 0; n < e.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[e[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[n] + "CancelAnimationFrame"] || window[e[n] + "CancelRequestAnimationFrame"];
                    window.requestAnimationFrame || (window.requestAnimationFrame = function(e, n) {
                        var i = (new Date).getTime(),
                            r = Math.max(0, 16 - (i - t)),
                            s = setTimeout(function() {
                                e(i + r)
                            }, r);
                        return t = i + r, s
                    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                        clearTimeout(t)
                    })
                }();
                var bez = bezFunction();

                function dataFunctionManager() {
                    function t(t, e) {
                        for (var n = 0, i = e.length; n < i;) {
                            if (e[n].id === t) return e[n].layers.__used ? JSON.parse(JSON.stringify(e[n].layers)) : (e[n].layers.__used = !0, e[n].layers);
                            n += 1
                        }
                    }

                    function e(t) {
                        var i, r, s;
                        for (i = t.length - 1; i >= 0; i -= 1)
                            if ("sh" == t[i].ty)
                                if (t[i].ks.k.i) n(t[i].ks.k);
                                else
                                    for (s = t[i].ks.k.length, r = 0; r < s; r += 1) t[i].ks.k[r].s && n(t[i].ks.k[r].s[0]), t[i].ks.k[r].e && n(t[i].ks.k[r].e[0]);
                        else "gr" == t[i].ty && e(t[i].it)
                    }

                    function n(t) {
                        var e, n = t.i.length;
                        for (e = 0; e < n; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
                    }

                    function i(t, e) {
                        var n = e ? e.split(".") : [100, 100, 100];
                        return t[0] > n[0] || !(n[0] > t[0]) && (t[1] > n[1] || !(n[1] > t[1]) && (t[2] > n[2] || !(n[2] > t[2]) && void 0))
                    }
                    var r, s = function() {
                            var t = [4, 4, 14];

                            function e(t) {
                                var e, n, i = t.length;
                                for (e = 0; e < i; e += 1) 5 === t[e].ty && ((n = t[e]).t.d = {
                                    k: [{
                                        s: n.t.d,
                                        t: 0
                                    }]
                                })
                            }
                            return function(n) {
                                if (i(t, n.v) && (e(n.layers), n.assets)) {
                                    var r, s = n.assets.length;
                                    for (r = 0; r < s; r += 1) n.assets[r].layers && e(n.assets[r].layers)
                                }
                            }
                        }(),
                        a = (r = [4, 7, 99], function(t) {
                            if (t.chars && !i(r, t.v)) {
                                var e, s, a, o, l, h = t.chars.length;
                                for (e = 0; e < h; e += 1)
                                    if (t.chars[e].data && t.chars[e].data.shapes)
                                        for (a = (l = t.chars[e].data.shapes[0].it).length, s = 0; s < a; s += 1)(o = l[s].ks.k).__converted || (n(l[s].ks.k), o.__converted = !0)
                            }
                        }),
                        o = function() {
                            var t = [4, 1, 9];

                            function e(t) {
                                var n, i, r, s = t.length;
                                for (n = 0; n < s; n += 1)
                                    if ("gr" === t[n].ty) e(t[n].it);
                                    else if ("fl" === t[n].ty || "st" === t[n].ty)
                                    if (t[n].c.k && t[n].c.k[0].i)
                                        for (r = t[n].c.k.length, i = 0; i < r; i += 1) t[n].c.k[i].s && (t[n].c.k[i].s[0] /= 255, t[n].c.k[i].s[1] /= 255, t[n].c.k[i].s[2] /= 255, t[n].c.k[i].s[3] /= 255), t[n].c.k[i].e && (t[n].c.k[i].e[0] /= 255, t[n].c.k[i].e[1] /= 255, t[n].c.k[i].e[2] /= 255, t[n].c.k[i].e[3] /= 255);
                                    else t[n].c.k[0] /= 255, t[n].c.k[1] /= 255, t[n].c.k[2] /= 255, t[n].c.k[3] /= 255
                            }

                            function n(t) {
                                var n, i = t.length;
                                for (n = 0; n < i; n += 1) 4 === t[n].ty && e(t[n].shapes)
                            }
                            return function(e) {
                                if (i(t, e.v) && (n(e.layers), e.assets)) {
                                    var r, s = e.assets.length;
                                    for (r = 0; r < s; r += 1) e.assets[r].layers && n(e.assets[r].layers)
                                }
                            }
                        }(),
                        l = function() {
                            var t = [4, 4, 18];

                            function e(t) {
                                var n, i, r;
                                for (n = t.length - 1; n >= 0; n -= 1)
                                    if ("sh" == t[n].ty)
                                        if (t[n].ks.k.i) t[n].ks.k.c = t[n].closed;
                                        else
                                            for (r = t[n].ks.k.length, i = 0; i < r; i += 1) t[n].ks.k[i].s && (t[n].ks.k[i].s[0].c = t[n].closed), t[n].ks.k[i].e && (t[n].ks.k[i].e[0].c = t[n].closed);
                                else "gr" == t[n].ty && e(t[n].it)
                            }

                            function n(t) {
                                var n, i, r, s, a, o, l = t.length;
                                for (i = 0; i < l; i += 1) {
                                    if ((n = t[i]).hasMask) {
                                        var h = n.masksProperties;
                                        for (s = h.length, r = 0; r < s; r += 1)
                                            if (h[r].pt.k.i) h[r].pt.k.c = h[r].cl;
                                            else
                                                for (o = h[r].pt.k.length, a = 0; a < o; a += 1) h[r].pt.k[a].s && (h[r].pt.k[a].s[0].c = h[r].cl), h[r].pt.k[a].e && (h[r].pt.k[a].e[0].c = h[r].cl)
                                    }
                                    4 === n.ty && e(n.shapes)
                                }
                            }
                            return function(e) {
                                if (i(t, e.v) && (n(e.layers), e.assets)) {
                                    var r, s = e.assets.length;
                                    for (r = 0; r < s; r += 1) e.assets[r].layers && n(e.assets[r].layers)
                                }
                            }
                        }();
                    return {
                        completeData: function(i, r) {
                            i.__complete || (o(i), s(i), a(i), l(i), function i(r, s, a) {
                                var o, l, h, p, c, u, m, f = r.length;
                                for (l = 0; l < f; l += 1)
                                    if ("ks" in (o = r[l]) && !o.completed) {
                                        if (o.completed = !0, o.tt && (r[l - 1].td = o.tt), o.hasMask) {
                                            var d = o.masksProperties;
                                            for (p = d.length, h = 0; h < p; h += 1)
                                                if (d[h].pt.k.i) n(d[h].pt.k);
                                                else
                                                    for (u = d[h].pt.k.length, c = 0; c < u; c += 1) d[h].pt.k[c].s && n(d[h].pt.k[c].s[0]), d[h].pt.k[c].e && n(d[h].pt.k[c].e[0])
                                        }
                                        0 === o.ty ? (o.layers = t(o.refId, s), i(o.layers, s, a)) : 4 === o.ty ? e(o.shapes) : 5 == o.ty && (0 !== (m = o).t.a.length || "m" in m.t.p || (m.singleShape = !0))
                                    }
                            }(i.layers, i.assets, r), i.__complete = !0)
                        }
                    }
                }
                var dataManager = dataFunctionManager(),
                    FontManager = function() {
                        var t = {
                                w: 0,
                                size: 0,
                                shapes: []
                            },
                            e = [];

                        function n(t, e) {
                            var n = createTag("span");
                            n.style.fontFamily = e;
                            var i = createTag("span");
                            i.innerHTML = "giItT1WQy@!-/#", n.style.position = "absolute", n.style.left = "-10000px", n.style.top = "-10000px", n.style.fontSize = "300px", n.style.fontVariant = "normal", n.style.fontStyle = "normal", n.style.fontWeight = "normal", n.style.letterSpacing = "0", n.appendChild(i), document.body.appendChild(n);
                            var r = i.offsetWidth;
                            return i.style.fontFamily = t + ", " + e, {
                                node: i,
                                w: r,
                                parent: n
                            }
                        }

                        function i(t, e) {
                            var n = createNS("text");
                            return n.style.fontSize = "100px", n.setAttribute("font-family", e.fFamily), n.setAttribute("font-style", e.fStyle), n.setAttribute("font-weight", e.fWeight), n.textContent = "1", e.fClass ? (n.style.fontFamily = "inherit", n.setAttribute("class", e.fClass)) : n.style.fontFamily = e.fFamily, t.appendChild(n), createTag("canvas").getContext("2d").font = e.fWeight + " " + e.fStyle + " 100px " + e.fFamily, n
                        }
                        e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                        var r = function() {
                            this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this.initTime = Date.now()
                        };
                        return r.getCombinedCharacterCodes = function() {
                            return e
                        }, r.prototype.addChars = function(t) {
                            if (t) {
                                this.chars || (this.chars = []);
                                var e, n, i, r = t.length,
                                    s = this.chars.length;
                                for (e = 0; e < r; e += 1) {
                                    for (n = 0, i = !1; n < s;) this.chars[n].style === t[e].style && this.chars[n].fFamily === t[e].fFamily && this.chars[n].ch === t[e].ch && (i = !0), n += 1;
                                    i || (this.chars.push(t[e]), s += 1)
                                }
                            }
                        }, r.prototype.addFonts = function(t, e) {
                            if (t) {
                                if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
                                var r, s = t.list,
                                    a = s.length,
                                    o = a;
                                for (r = 0; r < a; r += 1) {
                                    var l, h, p = !0;
                                    if (s[r].loaded = !1, s[r].monoCase = n(s[r].fFamily, "monospace"), s[r].sansCase = n(s[r].fFamily, "sans-serif"), s[r].fPath) {
                                        if ("p" === s[r].fOrigin || 3 === s[r].origin) {
                                            if ((l = document.querySelectorAll('style[f-forigin="p"][f-family="' + s[r].fFamily + '"], style[f-origin="3"][f-family="' + s[r].fFamily + '"]')).length > 0 && (p = !1), p) {
                                                var c = createTag("style");
                                                c.setAttribute("f-forigin", s[r].fOrigin), c.setAttribute("f-origin", s[r].origin), c.setAttribute("f-family", s[r].fFamily), c.type = "text/css", c.innerHTML = "@font-face {font-family: " + s[r].fFamily + "; font-style: normal; src: url('" + s[r].fPath + "');}", e.appendChild(c)
                                            }
                                        } else if ("g" === s[r].fOrigin || 1 === s[r].origin) {
                                            for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), h = 0; h < l.length; h++) - 1 !== l[h].href.indexOf(s[r].fPath) && (p = !1);
                                            if (p) {
                                                var u = createTag("link");
                                                u.setAttribute("f-forigin", s[r].fOrigin), u.setAttribute("f-origin", s[r].origin), u.type = "text/css", u.rel = "stylesheet", u.href = s[r].fPath, document.body.appendChild(u)
                                            }
                                        } else if ("t" === s[r].fOrigin || 2 === s[r].origin) {
                                            for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), h = 0; h < l.length; h++) s[r].fPath === l[h].src && (p = !1);
                                            if (p) {
                                                var m = createTag("link");
                                                m.setAttribute("f-forigin", s[r].fOrigin), m.setAttribute("f-origin", s[r].origin), m.setAttribute("rel", "stylesheet"), m.setAttribute("href", s[r].fPath), e.appendChild(m)
                                            }
                                        }
                                    } else s[r].loaded = !0, o -= 1;
                                    s[r].helper = i(e, s[r]), s[r].cache = {}, this.fonts.push(s[r])
                                }
                                0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                            } else this.isLoaded = !0
                        }, r.prototype.getCharData = function(e, n, i) {
                            for (var r = 0, s = this.chars.length; r < s;) {
                                if (this.chars[r].ch === e && this.chars[r].style === n && this.chars[r].fFamily === i) return this.chars[r];
                                r += 1
                            }
                            return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && console.warn("Missing character from exported characters list: ", e, n, i), t
                        }, r.prototype.getFontByName = function(t) {
                            for (var e = 0, n = this.fonts.length; e < n;) {
                                if (this.fonts[e].fName === t) return this.fonts[e];
                                e += 1
                            }
                            return this.fonts[0]
                        }, r.prototype.measureText = function(t, e, n) {
                            var i = this.getFontByName(e),
                                r = t.charCodeAt(0);
                            if (!i.cache[r + 1]) {
                                var s = i.helper;
                                if (" " === t) {
                                    s.textContent = "|" + t + "|";
                                    var a = s.getComputedTextLength();
                                    s.textContent = "||";
                                    var o = s.getComputedTextLength();
                                    i.cache[r + 1] = (a - o) / 100
                                } else s.textContent = t, i.cache[r + 1] = s.getComputedTextLength() / 100
                            }
                            return i.cache[r + 1] * n
                        }, r.prototype.checkLoadedFonts = function() {
                            var t, e = this.fonts.length,
                                n = e;
                            for (t = 0; t < e; t += 1) this.fonts[t].loaded ? n -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (this.fonts[t].monoCase.node.offsetWidth !== this.fonts[t].monoCase.w ? (n -= 1, this.fonts[t].loaded = !0) : this.fonts[t].sansCase.node.offsetWidth !== this.fonts[t].sansCase.w && (n -= 1, this.fonts[t].loaded = !0), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                            0 !== n && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFonts.bind(this), 20) : setTimeout((function() {
                                this.isLoaded = !0
                            }).bind(this), 0)
                        }, r.prototype.loaded = function() {
                            return this.isLoaded
                        }, r
                    }(),
                    PropertyFactory = function() {
                        var t = initialDefaultFrame,
                            e = Math.abs;

                        function n(t, e) {
                            var n, r = this.offsetTime;
                            "multidimensional" === this.propType && (n = createTypedArray("float32", this.pv.length));
                            for (var s, a, o, l, h, p, c, u, m = e.lastIndex, f = m, d = this.keyframes.length - 1, g = !0; g;) {
                                if (s = this.keyframes[f], a = this.keyframes[f + 1], f === d - 1 && t >= a.t - r) {
                                    s.h && (s = a), m = 0;
                                    break
                                }
                                if (a.t - r > t) {
                                    m = f;
                                    break
                                }
                                f < d - 1 ? f += 1 : (m = 0, g = !1)
                            }
                            var y, v, b, _, x, E, P, S, C, k, T = a.t - r,
                                A = s.t - r;
                            if (s.to) {
                                s.bezierData || (s.bezierData = bez.buildBezierData(s.s, a.s || s.e, s.to, s.ti));
                                var M = s.bezierData;
                                if (t >= T || t < A) {
                                    var w = t >= T ? M.points.length - 1 : 0;
                                    for (l = M.points[w].point.length, o = 0; o < l; o += 1) n[o] = M.points[w].point[o]
                                } else {
                                    s.__fnct ? u = s.__fnct : (u = BezierFactory.getBezierEasing(s.o.x, s.o.y, s.i.x, s.i.y, s.n).get, s.__fnct = u), h = u((t - A) / (T - A));
                                    var D, F = M.segmentLength * h,
                                        I = e.lastFrame < t && e._lastKeyframeIndex === f ? e._lastAddedLength : 0;
                                    for (c = e.lastFrame < t && e._lastKeyframeIndex === f ? e._lastPoint : 0, g = !0, p = M.points.length; g;) {
                                        if (I += M.points[c].partialLength, 0 === F || 0 === h || c === M.points.length - 1) {
                                            for (l = M.points[c].point.length, o = 0; o < l; o += 1) n[o] = M.points[c].point[o];
                                            break
                                        }
                                        if (F >= I && F < I + M.points[c + 1].partialLength) {
                                            for (D = (F - I) / M.points[c + 1].partialLength, l = M.points[c].point.length, o = 0; o < l; o += 1) n[o] = M.points[c].point[o] + (M.points[c + 1].point[o] - M.points[c].point[o]) * D;
                                            break
                                        }
                                        c < p - 1 ? c += 1 : g = !1
                                    }
                                    e._lastPoint = c, e._lastAddedLength = I - M.points[c].partialLength, e._lastKeyframeIndex = f
                                }
                            } else {
                                var V;
                                if (d = s.s.length, y = a.s || s.e, this.sh && 1 !== s.h)
                                    if (t >= T) n[0] = y[0], n[1] = y[1], n[2] = y[2];
                                    else if (t <= A) n[0] = s.s[0], n[1] = s.s[1], n[2] = s.s[2];
                                else {
                                    var R = i(s.s),
                                        B = i(y);
                                    v = n, _ = (b = function(t, e, n) {
                                        var i, r, s, a, o, l = [],
                                            h = R[0],
                                            p = R[1],
                                            c = R[2],
                                            u = R[3],
                                            m = B[0],
                                            f = B[1],
                                            d = B[2],
                                            g = B[3];
                                        return (r = h * m + p * f + c * d + u * g) < 0 && (r = -r, m = -m, f = -f, d = -d, g = -g), 1 - r > 1e-6 ? (i = Math.acos(r), s = Math.sin(i), a = Math.sin((1 - n) * i) / s, o = Math.sin(n * i) / s) : (a = 1 - n, o = n), l[0] = a * h + o * m, l[1] = a * p + o * f, l[2] = a * c + o * d, l[3] = a * u + o * g, l
                                    }(0, 0, (t - A) / (T - A)))[0], x = b[1], E = b[2], P = b[3], S = Math.atan2(2 * x * P - 2 * _ * E, 1 - 2 * x * x - 2 * E * E), C = Math.asin(2 * _ * x + 2 * E * P), k = Math.atan2(2 * _ * P - 2 * x * E, 1 - 2 * _ * _ - 2 * E * E), v[0] = S / degToRads, v[1] = C / degToRads, v[2] = k / degToRads
                                } else
                                    for (f = 0; f < d; f += 1) 1 !== s.h && (t >= T ? h = 1 : t < A ? h = 0 : (s.o.x.constructor === Array ? (s.__fnct || (s.__fnct = []), s.__fnct[f] ? u = s.__fnct[f] : (u = BezierFactory.getBezierEasing(void 0 === s.o.x[f] ? s.o.x[0] : s.o.x[f], void 0 === s.o.y[f] ? s.o.y[0] : s.o.y[f], void 0 === s.i.x[f] ? s.i.x[0] : s.i.x[f], void 0 === s.i.y[f] ? s.i.y[0] : s.i.y[f]).get, s.__fnct[f] = u)) : s.__fnct ? u = s.__fnct : (u = BezierFactory.getBezierEasing(s.o.x, s.o.y, s.i.x, s.i.y).get, s.__fnct = u), h = u((t - A) / (T - A)))), y = a.s || s.e, V = 1 === s.h ? s.s[f] : s.s[f] + (y[f] - s.s[f]) * h, "multidimensional" === this.propType ? n[f] = V : n = V
                            }
                            return e.lastIndex = m, n
                        }

                        function i(t) {
                            var e = t[0] * degToRads,
                                n = t[1] * degToRads,
                                i = t[2] * degToRads,
                                r = Math.cos(e / 2),
                                s = Math.cos(n / 2),
                                a = Math.cos(i / 2),
                                o = Math.sin(e / 2),
                                l = Math.sin(n / 2),
                                h = Math.sin(i / 2);
                            return [o * l * a + r * s * h, o * s * a + r * l * h, r * l * a - o * s * h, r * s * a - o * l * h]
                        }

                        function r() {
                            var e = this.comp.renderedFrame - this.offsetTime,
                                n = this.keyframes[0].t - this.offsetTime,
                                i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                            if (!(e === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= i && e >= i || this._caching.lastFrame < n && e < n))) {
                                this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                                var r = this.interpolateValue(e, this._caching);
                                this.pv = r
                            }
                            return this._caching.lastFrame = e, this.pv
                        }

                        function s(t) {
                            var n;
                            if ("unidimensional" === this.propType) e(this.v - (n = t * this.mult)) > 1e-5 && (this.v = n, this._mdf = !0);
                            else
                                for (var i = 0, r = this.v.length; i < r;) e(this.v[i] - (n = t[i] * this.mult)) > 1e-5 && (this.v[i] = n, this._mdf = !0), i += 1
                        }

                        function a() {
                            if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                                if (this.lock) this.setVValue(this.pv);
                                else {
                                    this.lock = !0, this._mdf = this._isFirstFrame;
                                    var t, e = this.effectsSequence.length,
                                        n = this.kf ? this.pv : this.data.k;
                                    for (t = 0; t < e; t += 1) n = this.effectsSequence[t](n);
                                    this.setVValue(n), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                                }
                        }

                        function o(t) {
                            this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                        }

                        function l(t, e, n, i) {
                            this.propType = "unidimensional", this.mult = n || 1, this.data = e, this.v = n ? e.k * n : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = a, this.setVValue = s, this.addEffect = o
                        }

                        function h(t, e, n, i) {
                            this.propType = "multidimensional", this.mult = n || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                            var r, l = e.k.length;
                            for (this.v = createTypedArray("float32", l), this.pv = createTypedArray("float32", l), createTypedArray("float32", l), this.vel = createTypedArray("float32", l), r = 0; r < l; r += 1) this.v[r] = e.k[r] * this.mult, this.pv[r] = e.k[r];
                            this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = a, this.setVValue = s, this.addEffect = o
                        }

                        function p(e, i, l, h) {
                            this.propType = "unidimensional", this.keyframes = i.k, this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
                                lastFrame: t,
                                lastIndex: 0,
                                value: 0,
                                _lastKeyframeIndex: -1
                            }, this.k = !0, this.kf = !0, this.data = i, this.mult = l || 1, this.elem = e, this.container = h, this.comp = e.comp, this.v = t, this.pv = t, this._isFirstFrame = !0, this.getValue = a, this.setVValue = s, this.interpolateValue = n, this.effectsSequence = [r.bind(this)], this.addEffect = o
                        }

                        function c(e, i, l, h) {
                            this.propType = "multidimensional";
                            var p, c, u, m, f, d = i.k.length;
                            for (p = 0; p < d - 1; p += 1) i.k[p].to && i.k[p].s && i.k[p].e && (u = i.k[p].e, m = i.k[p].to, f = i.k[p].ti, (2 === (c = i.k[p].s).length && (c[0] !== u[0] || c[1] !== u[1]) && bez.pointOnLine2D(c[0], c[1], u[0], u[1], c[0] + m[0], c[1] + m[1]) && bez.pointOnLine2D(c[0], c[1], u[0], u[1], u[0] + f[0], u[1] + f[1]) || 3 === c.length && (c[0] !== u[0] || c[1] !== u[1] || c[2] !== u[2]) && bez.pointOnLine3D(c[0], c[1], c[2], u[0], u[1], u[2], c[0] + m[0], c[1] + m[1], c[2] + m[2]) && bez.pointOnLine3D(c[0], c[1], c[2], u[0], u[1], u[2], u[0] + f[0], u[1] + f[1], u[2] + f[2])) && (i.k[p].to = null, i.k[p].ti = null), c[0] === u[0] && c[1] === u[1] && 0 === m[0] && 0 === m[1] && 0 === f[0] && 0 === f[1] && (2 === c.length || c[2] === u[2] && 0 === m[2] && 0 === f[2]) && (i.k[p].to = null, i.k[p].ti = null));
                            this.effectsSequence = [r.bind(this)], this.keyframes = i.k, this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = l || 1, this.elem = e, this.container = h, this.comp = e.comp, this.getValue = a, this.setVValue = s, this.interpolateValue = n, this.frameId = -1;
                            var g = i.k[0].s.length;
                            for (this.v = createTypedArray("float32", g), this.pv = createTypedArray("float32", g), p = 0; p < g; p += 1) this.v[p] = t, this.pv[p] = t;
                            this._caching = {
                                lastFrame: t,
                                lastIndex: 0,
                                value: createTypedArray("float32", g)
                            }, this.addEffect = o
                        }
                        return {
                            getProp: function(t, e, n, i, r) {
                                var s;
                                if (e.k.length)
                                    if ("number" == typeof e.k[0]) s = new h(t, e, i, r);
                                    else switch (n) {
                                        case 0:
                                            s = new p(t, e, i, r);
                                            break;
                                        case 1:
                                            s = new c(t, e, i, r)
                                    } else s = new l(t, e, i, r);
                                return s.effectsSequence.length && r.addDynamicProperty(s), s
                            }
                        }
                    }(),
                    TransformPropertyFactory = function() {
                        function t(t, e, n) {
                            if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(n || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                                    k: [0, 0, 0]
                                }, 1, 0, this), e.rx) {
                                if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
                                    var i, r = e.or.k.length;
                                    for (i = 0; i < r; i += 1) e.or.k[i].to = e.or.k[i].ti = null
                                }
                                this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0
                            } else this.r = PropertyFactory.getProp(t, e.r || {
                                k: 0
                            }, 0, degToRads, this);
                            e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || {
                                k: [0, 0, 0]
                            }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || {
                                k: [100, 100, 100]
                            }, 1, .01, this), this.o = e.o ? PropertyFactory.getProp(t, e.o, 0, .01, t) : {
                                _mdf: !1,
                                v: 1
                            }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                        }
                        return t.prototype = {
                            applyToMatrix: function(t) {
                                var e = this._mdf;
                                this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? t.translate(this.px.v, this.py.v, this.data.p.z ? -this.pz.v : 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                            },
                            getValue: function(t) {
                                if (this.elem.globalData.frameId !== this.frameId) {
                                    if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || t) {
                                        if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                            var e, n, i = this.elem.globalData.frameRate;
                                            if (this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (e = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0), n = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (e = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), n = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (e = this.p.pv, n = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));
                                            else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                                e = [], n = [];
                                                var r = this.px,
                                                    s = this.py;
                                                r._caching.lastFrame + r.offsetTime <= r.keyframes[0].t ? (e[0] = r.getValueAtTime((r.keyframes[0].t + .01) / i, 0), e[1] = s.getValueAtTime((s.keyframes[0].t + .01) / i, 0), n[0] = r.getValueAtTime(r.keyframes[0].t / i, 0), n[1] = s.getValueAtTime(s.keyframes[0].t / i, 0)) : r._caching.lastFrame + r.offsetTime >= r.keyframes[r.keyframes.length - 1].t ? (e[0] = r.getValueAtTime(r.keyframes[r.keyframes.length - 1].t / i, 0), e[1] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / i, 0), n[0] = r.getValueAtTime((r.keyframes[r.keyframes.length - 1].t - .01) / i, 0), n[1] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / i, 0)) : (e = [r.pv, s.pv], n[0] = r.getValueAtTime((r._caching.lastFrame + r.offsetTime - .01) / i, r.offsetTime), n[1] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / i, s.offsetTime))
                                            }
                                            this.v.rotate(-Math.atan2(e[1] - n[1], e[0] - n[0]))
                                        }
                                        this.data.p && this.data.p.s ? this.v.translate(this.px.v, this.py.v, this.data.p.z ? -this.pz.v : 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                                    }
                                    this.frameId = this.elem.globalData.frameId
                                }
                            },
                            precalculateMatrix: function() {
                                if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                                    if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                        if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                        this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                                    }
                                    if (this.r) {
                                        if (this.r.effectsSequence.length) return;
                                        this.pre.rotate(-this.r.v), this.appliedTransformations = 4
                                    } else this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                                }
                            },
                            autoOrient: function() {}
                        }, extendPrototype([DynamicPropertyContainer], t), t.prototype.addDynamicProperty = function(t) {
                            this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
                        }, t.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
                            getTransformProperty: function(e, n, i) {
                                return new t(e, n, i)
                            }
                        }
                    }();

                function ShapePath() {
                    this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
                }
                ShapePath.prototype.setPathData = function(t, e) {
                    this.c = t, this.setLength(e);
                    for (var n = 0; n < e;) this.v[n] = point_pool.newElement(), this.o[n] = point_pool.newElement(), this.i[n] = point_pool.newElement(), n += 1
                }, ShapePath.prototype.setLength = function(t) {
                    for (; this._maxLength < t;) this.doubleArrayLength();
                    this._length = t
                }, ShapePath.prototype.doubleArrayLength = function() {
                    this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
                }, ShapePath.prototype.setXYAt = function(t, e, n, i, r) {
                    var s;
                    switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), n) {
                        case "v":
                            s = this.v;
                            break;
                        case "i":
                            s = this.i;
                            break;
                        case "o":
                            s = this.o
                    }(!s[i] || s[i] && !r) && (s[i] = point_pool.newElement()), s[i][0] = t, s[i][1] = e
                }, ShapePath.prototype.setTripleAt = function(t, e, n, i, r, s, a, o) {
                    this.setXYAt(t, e, "v", a, o), this.setXYAt(n, i, "o", a, o), this.setXYAt(r, s, "i", a, o)
                }, ShapePath.prototype.reverse = function() {
                    var t = new ShapePath;
                    t.setPathData(this.c, this._length);
                    var e = this.v,
                        n = this.o,
                        i = this.i,
                        r = 0;
                    this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], n[0][0], n[0][1], 0, !1), r = 1);
                    var s, a = this._length - 1,
                        o = this._length;
                    for (s = r; s < o; s += 1) t.setTripleAt(e[a][0], e[a][1], i[a][0], i[a][1], n[a][0], n[a][1], s, !1), a -= 1;
                    return t
                };
                var ShapePropertyFactory = function() {
                        var t = -999999;

                        function e(t, e, n) {
                            var i, r, s, a, o, l, h, p, c = n.lastIndex,
                                u = this.keyframes;
                            if (t < u[0].t - this.offsetTime) i = u[0].s[0], s = !0, c = 0;
                            else if (t >= u[u.length - 1].t - this.offsetTime) i = u[u.length - 1].s ? u[u.length - 1].s[0] : u[u.length - 2].e[0], s = !0;
                            else {
                                for (var m, f, d = c, g = u.length - 1, y = !0; y && (m = u[d], !((f = u[d + 1]).t - this.offsetTime > t));) d < g - 1 ? d += 1 : y = !1;
                                if (c = d, !(s = 1 === m.h)) {
                                    if (t >= f.t - this.offsetTime) p = 1;
                                    else if (t < m.t - this.offsetTime) p = 0;
                                    else {
                                        var v;
                                        m.__fnct ? v = m.__fnct : (v = BezierFactory.getBezierEasing(m.o.x, m.o.y, m.i.x, m.i.y).get, m.__fnct = v), p = v((t - (m.t - this.offsetTime)) / (f.t - this.offsetTime - (m.t - this.offsetTime)))
                                    }
                                    r = f.s ? f.s[0] : m.e[0]
                                }
                                i = m.s[0]
                            }
                            for (l = e._length, h = i.i[0].length, n.lastIndex = c, a = 0; a < l; a += 1)
                                for (o = 0; o < h; o += 1) e.i[a][o] = s ? i.i[a][o] : i.i[a][o] + (r.i[a][o] - i.i[a][o]) * p, e.o[a][o] = s ? i.o[a][o] : i.o[a][o] + (r.o[a][o] - i.o[a][o]) * p, e.v[a][o] = s ? i.v[a][o] : i.v[a][o] + (r.v[a][o] - i.v[a][o]) * p
                        }

                        function n() {
                            var e = this.comp.renderedFrame - this.offsetTime,
                                n = this.keyframes[0].t - this.offsetTime,
                                i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                                r = this._caching.lastFrame;
                            return r !== t && (r < n && e < n || r > i && e > i) || (this._caching.lastIndex = r < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
                        }

                        function i() {
                            this.paths = this.localShapeCollection
                        }

                        function r(t) {
                            (function(t, e) {
                                if (t._length !== e._length || t.c !== e.c) return !1;
                                var n, i = t._length;
                                for (n = 0; n < i; n += 1)
                                    if (t.v[n][0] !== e.v[n][0] || t.v[n][1] !== e.v[n][1] || t.o[n][0] !== e.o[n][0] || t.o[n][1] !== e.o[n][1] || t.i[n][0] !== e.i[n][0] || t.i[n][1] !== e.i[n][1]) return !1;
                                return !0
                            })(this.v, t) || (this.v = shape_pool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                        }

                        function s() {
                            if (this.elem.globalData.frameId !== this.frameId)
                                if (this.effectsSequence.length)
                                    if (this.lock) this.setVValue(this.pv);
                                    else {
                                        this.lock = !0, this._mdf = !1;
                                        var t, e = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k,
                                            n = this.effectsSequence.length;
                                        for (t = 0; t < n; t += 1) e = this.effectsSequence[t](e);
                                        this.setVValue(e), this.lock = !1, this.frameId = this.elem.globalData.frameId
                                    } else this._mdf = !1
                        }

                        function a(t, e, n) {
                            this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1, this.v = shape_pool.clone(3 === n ? e.pt.k : e.ks.k), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = []
                        }

                        function o(t) {
                            this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                        }

                        function l(e, r, s) {
                            this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === s ? r.pt.k : r.ks.k, this.k = !0, this.kf = !0;
                            var a = this.keyframes[0].s[0].i.length;
                            this.v = shape_pool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, a), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = i, this._caching = {
                                lastFrame: t,
                                lastIndex: 0
                            }, this.effectsSequence = [n.bind(this)]
                        }
                        a.prototype.interpolateShape = e, a.prototype.getValue = s, a.prototype.setVValue = r, a.prototype.addEffect = o, l.prototype.getValue = s, l.prototype.interpolateShape = e, l.prototype.setVValue = r, l.prototype.addEffect = o;
                        var h = function() {
                                var t = roundCorner;

                                function e(t, e) {
                                    this.v = shape_pool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                                }
                                return e.prototype = {
                                    reset: i,
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                                    },
                                    convertEllToPath: function() {
                                        var e = this.p.v[0],
                                            n = this.p.v[1],
                                            i = this.s.v[0] / 2,
                                            r = this.s.v[1] / 2,
                                            s = 3 !== this.d,
                                            a = this.v;
                                        a.v[0][0] = e, a.v[0][1] = n - r, a.v[1][0] = s ? e + i : e - i, a.v[1][1] = n, a.v[2][0] = e, a.v[2][1] = n + r, a.v[3][0] = s ? e - i : e + i, a.v[3][1] = n, a.i[0][0] = s ? e - i * t : e + i * t, a.i[0][1] = n - r, a.i[1][0] = s ? e + i : e - i, a.i[1][1] = n - r * t, a.i[2][0] = s ? e + i * t : e - i * t, a.i[2][1] = n + r, a.i[3][0] = s ? e - i : e + i, a.i[3][1] = n + r * t, a.o[0][0] = s ? e + i * t : e - i * t, a.o[0][1] = n - r, a.o[1][0] = s ? e + i : e - i, a.o[1][1] = n + r * t, a.o[2][0] = s ? e - i * t : e + i * t, a.o[2][1] = n + r, a.o[3][0] = s ? e - i : e + i, a.o[3][1] = n - r * t
                                    }
                                }, extendPrototype([DynamicPropertyContainer], e), e
                            }(),
                            p = function() {
                                function t(t, e) {
                                    this.v = shape_pool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                                }
                                return t.prototype = {
                                    reset: i,
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                                    },
                                    convertStarToPath: function() {
                                        var t, e, n, i, r = 2 * Math.floor(this.pt.v),
                                            s = 2 * Math.PI / r,
                                            a = !0,
                                            o = this.or.v,
                                            l = this.ir.v,
                                            h = this.os.v,
                                            p = this.is.v,
                                            c = 2 * Math.PI * o / (2 * r),
                                            u = 2 * Math.PI * l / (2 * r),
                                            m = -Math.PI / 2;
                                        m += this.r.v;
                                        var f = 3 === this.data.d ? -1 : 1;
                                        for (this.v._length = 0, t = 0; t < r; t += 1) {
                                            n = a ? h : p, i = a ? c : u;
                                            var d = (e = a ? o : l) * Math.cos(m),
                                                g = e * Math.sin(m),
                                                y = 0 === d && 0 === g ? 0 : g / Math.sqrt(d * d + g * g),
                                                v = 0 === d && 0 === g ? 0 : -d / Math.sqrt(d * d + g * g);
                                            this.v.setTripleAt(d += +this.p.v[0], g += +this.p.v[1], d - y * i * n * f, g - v * i * n * f, d + y * i * n * f, g + v * i * n * f, t, !0), a = !a, m += s * f
                                        }
                                    },
                                    convertPolygonToPath: function() {
                                        var t, e = Math.floor(this.pt.v),
                                            n = 2 * Math.PI / e,
                                            i = this.or.v,
                                            r = this.os.v,
                                            s = 2 * Math.PI * i / (4 * e),
                                            a = -Math.PI / 2,
                                            o = 3 === this.data.d ? -1 : 1;
                                        for (a += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                                            var l = i * Math.cos(a),
                                                h = i * Math.sin(a),
                                                p = 0 === l && 0 === h ? 0 : h / Math.sqrt(l * l + h * h),
                                                c = 0 === l && 0 === h ? 0 : -l / Math.sqrt(l * l + h * h);
                                            this.v.setTripleAt(l += +this.p.v[0], h += +this.p.v[1], l - p * s * r * o, h - c * s * r * o, l + p * s * r * o, h + c * s * r * o, t, !0), a += n * o
                                        }
                                        this.paths.length = 0, this.paths[0] = this.v
                                    }
                                }, extendPrototype([DynamicPropertyContainer], t), t
                            }(),
                            c = function() {
                                function t(t, e) {
                                    this.v = shape_pool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                                }
                                return t.prototype = {
                                    convertRectToPath: function() {
                                        var t = this.p.v[0],
                                            e = this.p.v[1],
                                            n = this.s.v[0] / 2,
                                            i = this.s.v[1] / 2,
                                            r = bm_min(n, i, this.r.v),
                                            s = r * (1 - roundCorner);
                                        this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + n, e - i + r, t + n, e - i + r, t + n, e - i + s, 0, !0), this.v.setTripleAt(t + n, e + i - r, t + n, e + i - s, t + n, e + i - r, 1, !0), 0 !== r ? (this.v.setTripleAt(t + n - r, e + i, t + n - r, e + i, t + n - s, e + i, 2, !0), this.v.setTripleAt(t - n + r, e + i, t - n + s, e + i, t - n + r, e + i, 3, !0), this.v.setTripleAt(t - n, e + i - r, t - n, e + i - r, t - n, e + i - s, 4, !0), this.v.setTripleAt(t - n, e - i + r, t - n, e - i + s, t - n, e - i + r, 5, !0), this.v.setTripleAt(t - n + r, e - i, t - n + r, e - i, t - n + s, e - i, 6, !0), this.v.setTripleAt(t + n - r, e - i, t + n - s, e - i, t + n - r, e - i, 7, !0)) : (this.v.setTripleAt(t - n, e + i, t - n + s, e + i, t - n, e + i, 2), this.v.setTripleAt(t - n, e - i, t - n, e - i + s, t - n, e - i, 3))) : (this.v.setTripleAt(t + n, e - i + r, t + n, e - i + s, t + n, e - i + r, 0, !0), 0 !== r ? (this.v.setTripleAt(t + n - r, e - i, t + n - r, e - i, t + n - s, e - i, 1, !0), this.v.setTripleAt(t - n + r, e - i, t - n + s, e - i, t - n + r, e - i, 2, !0), this.v.setTripleAt(t - n, e - i + r, t - n, e - i + r, t - n, e - i + s, 3, !0), this.v.setTripleAt(t - n, e + i - r, t - n, e + i - s, t - n, e + i - r, 4, !0), this.v.setTripleAt(t - n + r, e + i, t - n + r, e + i, t - n + s, e + i, 5, !0), this.v.setTripleAt(t + n - r, e + i, t + n - s, e + i, t + n - r, e + i, 6, !0), this.v.setTripleAt(t + n, e + i - r, t + n, e + i - r, t + n, e + i - s, 7, !0)) : (this.v.setTripleAt(t - n, e - i, t - n + s, e - i, t - n, e - i, 1, !0), this.v.setTripleAt(t - n, e + i, t - n, e + i - s, t - n, e + i, 2, !0), this.v.setTripleAt(t + n, e + i, t + n - s, e + i, t + n, e + i, 3, !0)))
                                    },
                                    getValue: function(t) {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                                    },
                                    reset: i
                                }, extendPrototype([DynamicPropertyContainer], t), t
                            }();
                        return {
                            getShapeProp: function(t, e, n) {
                                var i;
                                return 3 === n || 4 === n ? i = (3 === n ? e.pt : e.ks).k.length ? new l(t, e, n) : new a(t, e, n) : 5 === n ? i = new c(t, e) : 6 === n ? i = new h(t, e) : 7 === n && (i = new p(t, e)), i.k && t.addDynamicProperty(i), i
                            },
                            getConstructorFunction: function() {
                                return a
                            },
                            getKeyframedConstructorFunction: function() {
                                return l
                            }
                        }
                    }(),
                    ShapeModifiers = function() {
                        var t = {},
                            e = {};
                        return t.registerModifier = function(t, n) {
                            e[t] || (e[t] = n)
                        }, t.getModifier = function(t, n, i) {
                            return new e[t](n, i)
                        }, t
                    }();

                function ShapeModifier() {}

                function TrimModifier() {}

                function RoundCornersModifier() {}

                function RepeaterModifier() {}

                function ShapeCollection() {
                    this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
                }

                function DashProperty(t, e, n, i) {
                    this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = n, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
                    var r, s, a = e.length || 0;
                    for (r = 0; r < a; r += 1) s = PropertyFactory.getProp(t, e[r].v, 0, 0, this), this.k = s.k || this.k, this.dataProps[r] = {
                        n: e[r].n,
                        p: s
                    };
                    this.k || this.getValue(!0), this._isAnimated = this.k
                }

                function GradientProperty(t, e, n) {
                    this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
                    var i = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
                    this.o = createTypedArray("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(n), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
                }
                ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
                    if (!this.closed) {
                        t.sh.container.addDynamicProperty(t.sh);
                        var e = {
                            shape: t.sh,
                            data: t,
                            localShapeCollection: shapeCollection_pool.newShapeCollection()
                        };
                        this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
                    }
                }, ShapeModifier.prototype.init = function(t, e) {
                    this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                }, ShapeModifier.prototype.processKeys = function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
                }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
                    this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
                }, TrimModifier.prototype.addShapeToModifier = function(t) {
                    t.pathsData = []
                }, TrimModifier.prototype.calculateShapeEdges = function(t, e, n, i, r) {
                    var s = [];
                    e <= 1 ? s.push({
                        s: t,
                        e: e
                    }) : t >= 1 ? s.push({
                        s: t - 1,
                        e: e - 1
                    }) : (s.push({
                        s: t,
                        e: 1
                    }), s.push({
                        s: 0,
                        e: e - 1
                    }));
                    var a, o, l = [],
                        h = s.length;
                    for (a = 0; a < h; a += 1)(o = s[a]).e * r < i || o.s * r > i + n || l.push([o.s * r <= i ? 0 : (o.s * r - i) / n, o.e * r >= i + n ? 1 : (o.e * r - i) / n]);
                    return l.length || l.push([0, 0]), l
                }, TrimModifier.prototype.releasePathsData = function(t) {
                    var e, n = t.length;
                    for (e = 0; e < n; e += 1) segments_length_pool.release(t[e]);
                    return t.length = 0, t
                }, TrimModifier.prototype.processShapes = function(t) {
                    var e, n, i;
                    if (this._mdf || t) {
                        var r = this.o.v % 360 / 360;
                        if (r < 0 && (r += 1), (e = (this.s.v > 1 ? 1 : this.s.v < 0 ? 0 : this.s.v) + r) > (n = (this.e.v > 1 ? 1 : this.e.v < 0 ? 0 : this.e.v) + r)) {
                            var s = e;
                            e = n, n = s
                        }
                        e = 1e-4 * Math.round(1e4 * e), n = 1e-4 * Math.round(1e4 * n), this.sValue = e, this.eValue = n
                    } else e = this.sValue, n = this.eValue;
                    var a, o, l, h, p, c, u = this.shapes.length,
                        m = 0;
                    if (n === e)
                        for (a = 0; a < u; a += 1) this.shapes[a].localShapeCollection.releaseShapes(), this.shapes[a].shape._mdf = !0, this.shapes[a].shape.paths = this.shapes[a].localShapeCollection;
                    else if (1 === n && 0 === e || 0 === n && 1 === e) {
                        if (this._mdf)
                            for (a = 0; a < u; a += 1) this.shapes[a].pathsData.length = 0, this.shapes[a].shape._mdf = !0
                    } else {
                        var f, d, g = [];
                        for (a = 0; a < u; a += 1)
                            if ((f = this.shapes[a]).shape._mdf || this._mdf || t || 2 === this.m) {
                                if (l = (i = f.shape.paths)._length, c = 0, !f.shape._mdf && f.pathsData.length) c = f.totalShapeLength;
                                else {
                                    for (h = this.releasePathsData(f.pathsData), o = 0; o < l; o += 1) p = bez.getSegmentsLength(i.shapes[o]), h.push(p), c += p.totalLength;
                                    f.totalShapeLength = c, f.pathsData = h
                                }
                                m += c, f.shape._mdf = !0
                            } else f.shape.paths = f.localShapeCollection;
                        var y, v = e,
                            b = n,
                            _ = 0;
                        for (a = u - 1; a >= 0; a -= 1)
                            if ((f = this.shapes[a]).shape._mdf) {
                                for ((d = f.localShapeCollection).releaseShapes(), 2 === this.m && u > 1 ? (y = this.calculateShapeEdges(e, n, f.totalShapeLength, _, m), _ += f.totalShapeLength) : y = [
                                        [v, b]
                                    ], l = y.length, o = 0; o < l; o += 1) {
                                    v = y[o][0], b = y[o][1], g.length = 0, b <= 1 ? g.push({
                                        s: f.totalShapeLength * v,
                                        e: f.totalShapeLength * b
                                    }) : v >= 1 ? g.push({
                                        s: f.totalShapeLength * (v - 1),
                                        e: f.totalShapeLength * (b - 1)
                                    }) : (g.push({
                                        s: f.totalShapeLength * v,
                                        e: f.totalShapeLength
                                    }), g.push({
                                        s: 0,
                                        e: f.totalShapeLength * (b - 1)
                                    }));
                                    var x = this.addShapes(f, g[0]);
                                    if (g[0].s !== g[0].e) {
                                        if (g.length > 1)
                                            if (f.shape.paths.shapes[f.shape.paths._length - 1].c) {
                                                var E = x.pop();
                                                this.addPaths(x, d), x = this.addShapes(f, g[1], E)
                                            } else this.addPaths(x, d), x = this.addShapes(f, g[1]);
                                        this.addPaths(x, d)
                                    }
                                }
                                f.shape.paths = d
                            }
                    }
                }, TrimModifier.prototype.addPaths = function(t, e) {
                    var n, i = t.length;
                    for (n = 0; n < i; n += 1) e.addShape(t[n])
                }, TrimModifier.prototype.addSegment = function(t, e, n, i, r, s, a) {
                    r.setXYAt(e[0], e[1], "o", s), r.setXYAt(n[0], n[1], "i", s + 1), a && r.setXYAt(t[0], t[1], "v", s), r.setXYAt(i[0], i[1], "v", s + 1)
                }, TrimModifier.prototype.addSegmentFromArray = function(t, e, n, i) {
                    e.setXYAt(t[1], t[5], "o", n), e.setXYAt(t[2], t[6], "i", n + 1), i && e.setXYAt(t[0], t[4], "v", n), e.setXYAt(t[3], t[7], "v", n + 1)
                }, TrimModifier.prototype.addShapes = function(t, e, n) {
                    var i, r, s, a, o, l, h, p, c = t.pathsData,
                        u = t.shape.paths.shapes,
                        m = t.shape.paths._length,
                        f = 0,
                        d = [],
                        g = !0;
                    for (n ? (o = n._length, p = n._length) : (n = shape_pool.newElement(), o = 0, p = 0), d.push(n), i = 0; i < m; i += 1) {
                        for (l = c[i].lengths, n.c = u[i].c, s = u[i].c ? l.length : l.length + 1, r = 1; r < s; r += 1)
                            if (f + (a = l[r - 1]).addedLength < e.s) f += a.addedLength, n.c = !1;
                            else {
                                if (f > e.e) {
                                    n.c = !1;
                                    break
                                }
                                e.s <= f && e.e >= f + a.addedLength ? (this.addSegment(u[i].v[r - 1], u[i].o[r - 1], u[i].i[r], u[i].v[r], n, o, g), g = !1) : (h = bez.getNewSegment(u[i].v[r - 1], u[i].v[r], u[i].o[r - 1], u[i].i[r], (e.s - f) / a.addedLength, (e.e - f) / a.addedLength, l[r - 1]), this.addSegmentFromArray(h, n, o, g), g = !1, n.c = !1), f += a.addedLength, o += 1
                            }
                        if (u[i].c && l.length) {
                            if (a = l[r - 1], f <= e.e) {
                                var y = l[r - 1].addedLength;
                                e.s <= f && e.e >= f + y ? (this.addSegment(u[i].v[r - 1], u[i].o[r - 1], u[i].i[0], u[i].v[0], n, o, g), g = !1) : (h = bez.getNewSegment(u[i].v[r - 1], u[i].v[0], u[i].o[r - 1], u[i].i[0], (e.s - f) / y, (e.e - f) / y, l[r - 1]), this.addSegmentFromArray(h, n, o, g), g = !1, n.c = !1)
                            } else n.c = !1;
                            f += a.addedLength, o += 1
                        }
                        if (n._length && (n.setXYAt(n.v[p][0], n.v[p][1], "i", p), n.setXYAt(n.v[n._length - 1][0], n.v[n._length - 1][1], "o", n._length - 1)), f > e.e) break;
                        i < m - 1 && (n = shape_pool.newElement(), g = !0, d.push(n), o = 0)
                    }
                    return d
                }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
                }, RoundCornersModifier.prototype.processPath = function(t, e) {
                    var n = shape_pool.newElement();
                    n.c = t.c;
                    var i, r, s, a, o, l, h, p, c, u, m, f, d, g = t._length,
                        y = 0;
                    for (i = 0; i < g; i += 1) s = t.i[i], (r = t.v[i])[0] === (a = t.o[i])[0] && r[1] === a[1] && r[0] === s[0] && r[1] === s[1] ? 0 !== i && i !== g - 1 || t.c ? (o = 0 === i ? t.v[g - 1] : t.v[i - 1], h = (l = Math.sqrt(Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, p = f = r[0] + (o[0] - r[0]) * h, c = d = r[1] - (r[1] - o[1]) * h, n.setTripleAt(p, c, p - (p - r[0]) * roundCorner, c - (c - r[1]) * roundCorner, f, d, y), y += 1, o = i === g - 1 ? t.v[0] : t.v[i + 1], h = (l = Math.sqrt(Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, p = u = r[0] + (o[0] - r[0]) * h, c = m = r[1] + (o[1] - r[1]) * h, n.setTripleAt(p, c, u, m, f = p - (p - r[0]) * roundCorner, d = c - (c - r[1]) * roundCorner, y), y += 1) : (n.setTripleAt(r[0], r[1], a[0], a[1], s[0], s[1], y), y += 1) : (n.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], y), y += 1);
                    return n
                }, RoundCornersModifier.prototype.processShapes = function(t) {
                    var e, n, i, r, s, a, o = this.shapes.length,
                        l = this.rd.v;
                    if (0 !== l)
                        for (n = 0; n < o; n += 1) {
                            if (a = (s = this.shapes[n]).localShapeCollection, s.shape._mdf || this._mdf || t)
                                for (a.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, r = s.shape.paths._length, i = 0; i < r; i += 1) a.addShape(this.processPath(e[i], l));
                            s.shape.paths = s.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
                }, RepeaterModifier.prototype.applyTransforms = function(t, e, n, i, r, s) {
                    var a = s ? -1 : 1,
                        o = i.s.v[0] + (1 - i.s.v[0]) * (1 - r),
                        l = i.s.v[1] + (1 - i.s.v[1]) * (1 - r);
                    t.translate(i.p.v[0] * a * r, i.p.v[1] * a * r, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * a * r), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), n.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), n.scale(s ? 1 / o : o, s ? 1 / l : l), n.translate(i.a.v[0], i.a.v[1], i.a.v[2])
                }, RepeaterModifier.prototype.init = function(t, e, n, i) {
                    for (this.elem = t, this.arr = e, this.pos = n, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[n]); n > 0;) this._elements.unshift(e[n -= 1]);
                    this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                }, RepeaterModifier.prototype.resetElements = function(t) {
                    var e, n = t.length;
                    for (e = 0; e < n; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
                }, RepeaterModifier.prototype.cloneElements = function(t) {
                    var e = JSON.parse(JSON.stringify(t));
                    return this.resetElements(e), e
                }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
                    var n, i = t.length;
                    for (n = 0; n < i; n += 1) t[n]._render = e, "gr" === t[n].ty && this.changeGroupRender(t[n].it, e)
                }, RepeaterModifier.prototype.processShapes = function(t) {
                    var e, n, i, r, s;
                    if (this._mdf || t) {
                        var a, o = Math.ceil(this.c.v);
                        if (this._groups.length < o) {
                            for (; this._groups.length < o;) {
                                var l = {
                                    it: this.cloneElements(this._elements),
                                    ty: "gr"
                                };
                                l.it.push({
                                    a: {
                                        a: 0,
                                        ix: 1,
                                        k: [0, 0]
                                    },
                                    nm: "Transform",
                                    o: {
                                        a: 0,
                                        ix: 7,
                                        k: 100
                                    },
                                    p: {
                                        a: 0,
                                        ix: 2,
                                        k: [0, 0]
                                    },
                                    r: {
                                        a: 1,
                                        ix: 6,
                                        k: [{
                                            s: 0,
                                            e: 0,
                                            t: 0
                                        }, {
                                            s: 0,
                                            e: 0,
                                            t: 1
                                        }]
                                    },
                                    s: {
                                        a: 0,
                                        ix: 3,
                                        k: [100, 100]
                                    },
                                    sa: {
                                        a: 0,
                                        ix: 5,
                                        k: 0
                                    },
                                    sk: {
                                        a: 0,
                                        ix: 4,
                                        k: 0
                                    },
                                    ty: "tr"
                                }), this.arr.splice(0, 0, l), this._groups.splice(0, 0, l), this._currentCopies += 1
                            }
                            this.elem.reloadShapes()
                        }
                        for (s = 0, i = 0; i <= this._groups.length - 1; i += 1) this._groups[i]._render = a = s < o, this.changeGroupRender(this._groups[i].it, a), s += 1;
                        this._currentCopies = o;
                        var h = this.o.v,
                            p = h % 1,
                            c = h > 0 ? Math.floor(h) : Math.ceil(h),
                            u = this.pMatrix.props,
                            m = this.rMatrix.props,
                            f = this.sMatrix.props;
                        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                        var d, g, y = 0;
                        if (h > 0) {
                            for (; y < c;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), y += 1;
                            p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, p, !1), y += p)
                        } else if (h < 0) {
                            for (; y > c;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), y -= 1;
                            p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -p, !0), y -= p)
                        }
                        for (i = 1 === this.data.m ? 0 : this._currentCopies - 1, r = 1 === this.data.m ? 1 : -1, s = this._currentCopies; s;) {
                            if (g = (n = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this.so.v + i / (this._currentCopies - 1) * (this.eo.v - this.so.v), 0 !== y) {
                                for ((0 !== i && 1 === r || i !== this._currentCopies - 1 && -1 === r) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), this.matrix.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]), this.matrix.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]), d = 0; d < g; d += 1) n[d] = this.matrix.props[d];
                                this.matrix.reset()
                            } else
                                for (this.matrix.reset(), d = 0; d < g; d += 1) n[d] = this.matrix.props[d];
                            y += 1, s -= 1, i += r
                        }
                    } else
                        for (s = this._currentCopies, i = 0, r = 1; s;) n = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, s -= 1, i += r
                }, RepeaterModifier.prototype.addShape = function() {}, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function(t) {
                    this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
                }, ShapeCollection.prototype.releaseShapes = function() {
                    var t;
                    for (t = 0; t < this._length; t += 1) shape_pool.release(this.shapes[t]);
                    this._length = 0
                }, DashProperty.prototype.getValue = function(t) {
                    if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                        var e = 0,
                            n = this.dataProps.length;
                        for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < n; e += 1) "o" != this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
                    }
                }, extendPrototype([DynamicPropertyContainer], DashProperty), GradientProperty.prototype.comparePoints = function(t, e) {
                    for (var n = 0, i = this.o.length / 2; n < i;) {
                        if (Math.abs(t[4 * n] - t[4 * e + 2 * n]) > .01) return !1;
                        n += 1
                    }
                    return !0
                }, GradientProperty.prototype.checkCollapsable = function() {
                    if (this.o.length / 2 != this.c.length / 4) return !1;
                    if (this.data.k.k[0].s)
                        for (var t = 0, e = this.data.k.k.length; t < e;) {
                            if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                            t += 1
                        } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                    return !0
                }, GradientProperty.prototype.getValue = function(t) {
                    if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                        var e, n, i, r = 4 * this.data.p;
                        for (e = 0; e < r; e += 1) n = e % 4 == 0 ? 100 : 255, i = Math.round(this.prop.v[e] * n), this.c[e] !== i && (this.c[e] = i, this._cmdf = !t);
                        if (this.o.length)
                            for (r = this.prop.v.length, e = 4 * this.data.p; e < r; e += 1) n = e % 2 == 0 ? 100 : 1, i = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== i && (this.o[e - 4 * this.data.p] = i, this._omdf = !t);
                        this._mdf = !t
                    }
                }, extendPrototype([DynamicPropertyContainer], GradientProperty);
                var buildShapeString = function(t, e, n, i) {
                        if (0 === e) return "";
                        var r, s = t.o,
                            a = t.i,
                            o = t.v,
                            l = " M" + i.applyToPointStringified(o[0][0], o[0][1]);
                        for (r = 1; r < e; r += 1) l += " C" + i.applyToPointStringified(s[r - 1][0], s[r - 1][1]) + " " + i.applyToPointStringified(a[r][0], a[r][1]) + " " + i.applyToPointStringified(o[r][0], o[r][1]);
                        return n && e && (l += " C" + i.applyToPointStringified(s[r - 1][0], s[r - 1][1]) + " " + i.applyToPointStringified(a[0][0], a[0][1]) + " " + i.applyToPointStringified(o[0][0], o[0][1]), l += "z"), l
                    },
                    ImagePreloader = function() {
                        var t = function() {
                            var t = createTag("canvas");
                            t.width = 1, t.height = 1;
                            var e = t.getContext("2d");
                            return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
                        }();

                        function e() {
                            this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                        }

                        function n(e) {
                            var n = function(t, e, n) {
                                    var i = "";
                                    if (t.e) i = t.p;
                                    else if (e) {
                                        var r = t.p; - 1 !== r.indexOf("images/") && (r = r.split("/")[1]), i = e + r
                                    } else i = n, i += t.u ? t.u : "", i += t.p;
                                    return i
                                }(e, this.assetsPath, this.path),
                                i = createTag("img");
                            i.crossOrigin = "anonymous", i.addEventListener("load", this._imageLoaded.bind(this), !1), i.addEventListener("error", (function() {
                                r.img = t, this._imageLoaded()
                            }).bind(this), !1), i.src = n;
                            var r = {
                                img: i,
                                assetData: e
                            };
                            return r
                        }

                        function i(t, e) {
                            this.imagesLoadedCb = e;
                            var n, i = t.length;
                            for (n = 0; n < i; n += 1) t[n].layers || (this.totalImages += 1, this.images.push(this._createImageData(t[n])))
                        }

                        function r(t) {
                            this.path = t || ""
                        }

                        function s(t) {
                            this.assetsPath = t || ""
                        }

                        function a(t) {
                            for (var e = 0, n = this.images.length; e < n;) {
                                if (this.images[e].assetData === t) return this.images[e].img;
                                e += 1
                            }
                        }

                        function o() {
                            this.imagesLoadedCb = null, this.images.length = 0
                        }

                        function l() {
                            return this.totalImages === this.loadedAssets
                        }
                        return function() {
                            this.loadAssets = i, this.setAssetsPath = s, this.setPath = r, this.loaded = l, this.destroy = o, this.getImage = a, this._createImageData = n, this._imageLoaded = e, this.assetsPath = "", this.path = "", this.totalImages = 0, this.loadedAssets = 0, this.imagesLoadedCb = null, this.images = []
                        }
                    }(),
                    featureSupport = function() {
                        var t = {
                            maskType: !0
                        };
                        return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), t
                    }(),
                    filtersFactory = {
                        createFilter: function(t) {
                            var e = createNS("filter");
                            return e.setAttribute("id", t), e.setAttribute("filterUnits", "objectBoundingBox"), e.setAttribute("x", "0%"), e.setAttribute("y", "0%"), e.setAttribute("width", "100%"), e.setAttribute("height", "100%"), e
                        },
                        createAlphaToLuminanceFilter: function() {
                            var t = createNS("feColorMatrix");
                            return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
                        }
                    },
                    assetLoader = function() {
                        function t(t) {
                            return t.response && "object" == typeof t.response ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : void 0
                        }
                        return {
                            load: function(e, n, i) {
                                var r, s = new XMLHttpRequest;
                                s.open("GET", e, !0);
                                try {
                                    s.responseType = "json"
                                } catch (a) {}
                                s.send(), s.onreadystatechange = function() {
                                    if (4 == s.readyState)
                                        if (200 == s.status) r = t(s), n(r);
                                        else try {
                                            r = t(s), n(r)
                                        } catch (a) {
                                            i && i(a)
                                        }
                                }
                            }
                        }
                    }();

                function TextAnimatorProperty(t, e, n) {
                    this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = n, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                        alignment: {}
                    }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(n)
                }

                function TextAnimatorDataProperty(t, e, n) {
                    var i = {
                            propType: !1
                        },
                        r = PropertyFactory.getProp,
                        s = e.a;
                    this.a = {
                        r: s.r ? r(t, s.r, 0, degToRads, n) : i,
                        rx: s.rx ? r(t, s.rx, 0, degToRads, n) : i,
                        ry: s.ry ? r(t, s.ry, 0, degToRads, n) : i,
                        sk: s.sk ? r(t, s.sk, 0, degToRads, n) : i,
                        sa: s.sa ? r(t, s.sa, 0, degToRads, n) : i,
                        s: s.s ? r(t, s.s, 1, .01, n) : i,
                        a: s.a ? r(t, s.a, 1, 0, n) : i,
                        o: s.o ? r(t, s.o, 0, .01, n) : i,
                        p: s.p ? r(t, s.p, 1, 0, n) : i,
                        sw: s.sw ? r(t, s.sw, 0, 0, n) : i,
                        sc: s.sc ? r(t, s.sc, 1, 0, n) : i,
                        fc: s.fc ? r(t, s.fc, 1, 0, n) : i,
                        fh: s.fh ? r(t, s.fh, 0, 0, n) : i,
                        fs: s.fs ? r(t, s.fs, 0, .01, n) : i,
                        fb: s.fb ? r(t, s.fb, 0, .01, n) : i,
                        t: s.t ? r(t, s.t, 0, 0, n) : i
                    }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, n), this.s.t = e.s.t
                }

                function LetterProps(t, e, n, i, r, s) {
                    this.o = t, this.sw = e, this.sc = n, this.fc = i, this.m = r, this.p = s, this._mdf = {
                        o: !0,
                        sw: !!e,
                        sc: !!n,
                        fc: !!i,
                        m: !0,
                        p: !0
                    }
                }

                function TextProperty(t, e) {
                    this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                        ascent: 0,
                        boxWidth: this.defaultBoxWidth,
                        f: "",
                        fStyle: "",
                        fWeight: "",
                        fc: "",
                        j: "",
                        justifyOffset: "",
                        l: [],
                        lh: 0,
                        lineWidths: [],
                        ls: "",
                        of: "",
                        s: "",
                        sc: "",
                        sw: 0,
                        t: 0,
                        tr: 0,
                        sz: 0,
                        ps: null,
                        fillColorAnim: !1,
                        strokeColorAnim: !1,
                        strokeWidthAnim: !1,
                        yOffset: 0,
                        finalSize: 0,
                        finalText: [],
                        finalLineHeight: 0,
                        __complete: !1
                    }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
                }
                TextAnimatorProperty.prototype.searchProperties = function() {
                    var t, e = this._textData.a.length,
                        n = PropertyFactory.getProp;
                    for (t = 0; t < e; t += 1) this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, this._textData.a[t], this);
                    this._textData.p && "m" in this._textData.p ? (this._pathData = {
                        f: n(this._elem, this._textData.p.f, 0, 0, this),
                        l: n(this._elem, this._textData.p.l, 0, 0, this),
                        r: this._textData.p.r,
                        m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                    }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = n(this._elem, this._textData.m.a, 1, 0, this)
                }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
                    if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                        this._isFirstFrame = !1;
                        var n, i, r, s, a, o, l, h, p, c, u, m, f, d, g, y, v, b, _ = this._moreOptions.alignment.v,
                            x = this._animatorsData,
                            E = this._textData,
                            P = this.mHelper,
                            S = this._renderType,
                            C = this.renderedLetters.length,
                            k = t.l;
                        if (this._hasMaskedPath) {
                            if (b = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                                var T, A = b.v;
                                for (this._pathData.r && (A = A.reverse()), a = {
                                        tLength: 0,
                                        segments: []
                                    }, s = A._length - 1, y = 0, r = 0; r < s; r += 1) T = bez.buildBezierData(A.v[r], A.v[r + 1], [A.o[r][0] - A.v[r][0], A.o[r][1] - A.v[r][1]], [A.i[r + 1][0] - A.v[r + 1][0], A.i[r + 1][1] - A.v[r + 1][1]]), a.tLength += T.segmentLength, a.segments.push(T), y += T.segmentLength;
                                r = s, b.v.c && (T = bez.buildBezierData(A.v[r], A.v[0], [A.o[r][0] - A.v[r][0], A.o[r][1] - A.v[r][1]], [A.i[0][0] - A.v[0][0], A.i[0][1] - A.v[0][1]]), a.tLength += T.segmentLength, a.segments.push(T), y += T.segmentLength), this._pathData.pi = a
                            }
                            if (u = 0, c = 1, h = 0, p = !0, d = (a = this._pathData.pi).segments, (o = this._pathData.f.v) < 0 && b.v.c)
                                for (a.tLength < Math.abs(o) && (o = -Math.abs(o) % a.tLength), c = (f = d[u = d.length - 1].points).length - 1; o < 0;) o += f[c].partialLength, (c -= 1) < 0 && (c = (f = d[u -= 1].points).length - 1);
                            m = (f = d[u].points)[c - 1], g = (l = f[c]).partialLength
                        }
                        s = k.length, n = 0, i = 0;
                        var M, w, D, F, I = 1.2 * t.finalSize * .714,
                            V = !0;
                        D = x.length;
                        var R, B, L, O, G, z, N, H, j, $, q, W, U, Y = -1,
                            X = o,
                            K = u,
                            J = c,
                            Z = -1,
                            Q = "",
                            tt = this.defaultPropsArray;
                        if (2 === t.j || 1 === t.j) {
                            var et = 0,
                                nt = 0,
                                it = 2 === t.j ? -.5 : -1,
                                rt = 0,
                                st = !0;
                            for (r = 0; r < s; r += 1)
                                if (k[r].n) {
                                    for (et && (et += nt); rt < r;) k[rt].animatorJustifyOffset = et, rt += 1;
                                    et = 0, st = !0
                                } else {
                                    for (w = 0; w < D; w += 1)(M = x[w].a).t.propType && (st && 2 === t.j && (nt += M.t.v * it), et += (R = x[w].s.getMult(k[r].anIndexes[w], E.a[w].s.totalChars)).length ? M.t.v * R[0] * it : M.t.v * R * it);
                                    st = !1
                                }
                            for (et && (et += nt); rt < r;) k[rt].animatorJustifyOffset = et, rt += 1
                        }
                        for (r = 0; r < s; r += 1) {
                            if (P.reset(), G = 1, k[r].n) n = 0, i += t.yOffset, i += V ? 1 : 0, o = X, V = !1, this._hasMaskedPath && (m = (f = d[u = K].points)[(c = J) - 1], g = (l = f[c]).partialLength, h = 0), U = $ = W = Q = "", tt = this.defaultPropsArray;
                            else {
                                if (this._hasMaskedPath) {
                                    if (Z !== k[r].line) {
                                        switch (t.j) {
                                            case 1:
                                                o += y - t.lineWidths[k[r].line];
                                                break;
                                            case 2:
                                                o += (y - t.lineWidths[k[r].line]) / 2
                                        }
                                        Z = k[r].line
                                    }
                                    Y !== k[r].ind && (k[Y] && (o += k[Y].extra), o += k[r].an / 2, Y = k[r].ind), o += _[0] * k[r].an / 200;
                                    var at = 0;
                                    for (w = 0; w < D; w += 1)(M = x[w].a).p.propType && (at += (R = x[w].s.getMult(k[r].anIndexes[w], E.a[w].s.totalChars)).length ? M.p.v[0] * R[0] : M.p.v[0] * R), M.a.propType && (at += (R = x[w].s.getMult(k[r].anIndexes[w], E.a[w].s.totalChars)).length ? M.a.v[0] * R[0] : M.a.v[0] * R);
                                    for (p = !0; p;) h + g >= o + at || !f ? (L = m.point[0] + (l.point[0] - m.point[0]) * (v = (o + at - h) / l.partialLength), O = m.point[1] + (l.point[1] - m.point[1]) * v, P.translate(-_[0] * k[r].an / 200, -_[1] * I / 100), p = !1) : f && (h += l.partialLength, (c += 1) >= f.length && (c = 0, d[u += 1] ? f = d[u].points : b.v.c ? (c = 0, f = d[u = 0].points) : (h -= l.partialLength, f = null)), f && (m = l, g = (l = f[c]).partialLength));
                                    P.translate(-(B = k[r].an / 2 - k[r].add), 0, 0)
                                } else P.translate(-(B = k[r].an / 2 - k[r].add), 0, 0), P.translate(-_[0] * k[r].an / 200, -_[1] * I / 100, 0);
                                for (w = 0; w < D; w += 1)(M = x[w].a).t.propType && (R = x[w].s.getMult(k[r].anIndexes[w], E.a[w].s.totalChars), 0 === n && 0 === t.j || (this._hasMaskedPath ? o += R.length ? M.t.v * R[0] : M.t.v * R : n += R.length ? M.t.v * R[0] : M.t.v * R));
                                for (t.strokeWidthAnim && (N = t.sw || 0), t.strokeColorAnim && (z = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (H = [t.fc[0], t.fc[1], t.fc[2]]), w = 0; w < D; w += 1)(M = x[w].a).a.propType && ((R = x[w].s.getMult(k[r].anIndexes[w], E.a[w].s.totalChars)).length ? P.translate(-M.a.v[0] * R[0], -M.a.v[1] * R[1], M.a.v[2] * R[2]) : P.translate(-M.a.v[0] * R, -M.a.v[1] * R, M.a.v[2] * R));
                                for (w = 0; w < D; w += 1)(M = x[w].a).s.propType && ((R = x[w].s.getMult(k[r].anIndexes[w], E.a[w].s.totalChars)).length ? P.scale(1 + (M.s.v[0] - 1) * R[0], 1 + (M.s.v[1] - 1) * R[1], 1) : P.scale(1 + (M.s.v[0] - 1) * R, 1 + (M.s.v[1] - 1) * R, 1));
                                for (w = 0; w < D; w += 1) {
                                    if (M = x[w].a, R = x[w].s.getMult(k[r].anIndexes[w], E.a[w].s.totalChars), M.sk.propType && (R.length ? P.skewFromAxis(-M.sk.v * R[0], M.sa.v * R[1]) : P.skewFromAxis(-M.sk.v * R, M.sa.v * R)), M.r.propType && P.rotateZ(R.length ? -M.r.v * R[2] : -M.r.v * R), M.ry.propType && P.rotateY(R.length ? M.ry.v * R[1] : M.ry.v * R), M.rx.propType && P.rotateX(R.length ? M.rx.v * R[0] : M.rx.v * R), M.o.propType && (G += R.length ? (M.o.v * R[0] - G) * R[0] : (M.o.v * R - G) * R), t.strokeWidthAnim && M.sw.propType && (N += R.length ? M.sw.v * R[0] : M.sw.v * R), t.strokeColorAnim && M.sc.propType)
                                        for (j = 0; j < 3; j += 1) z[j] = R.length ? z[j] + (M.sc.v[j] - z[j]) * R[0] : z[j] + (M.sc.v[j] - z[j]) * R;
                                    if (t.fillColorAnim && t.fc) {
                                        if (M.fc.propType)
                                            for (j = 0; j < 3; j += 1) H[j] = R.length ? H[j] + (M.fc.v[j] - H[j]) * R[0] : H[j] + (M.fc.v[j] - H[j]) * R;
                                        M.fh.propType && (H = addHueToRGB(H, R.length ? M.fh.v * R[0] : M.fh.v * R)), M.fs.propType && (H = addSaturationToRGB(H, R.length ? M.fs.v * R[0] : M.fs.v * R)), M.fb.propType && (H = addBrightnessToRGB(H, R.length ? M.fb.v * R[0] : M.fb.v * R))
                                    }
                                }
                                for (w = 0; w < D; w += 1)(M = x[w].a).p.propType && (R = x[w].s.getMult(k[r].anIndexes[w], E.a[w].s.totalChars), this._hasMaskedPath ? R.length ? P.translate(0, M.p.v[1] * R[0], -M.p.v[2] * R[1]) : P.translate(0, M.p.v[1] * R, -M.p.v[2] * R) : R.length ? P.translate(M.p.v[0] * R[0], M.p.v[1] * R[1], -M.p.v[2] * R[2]) : P.translate(M.p.v[0] * R, M.p.v[1] * R, -M.p.v[2] * R));
                                if (t.strokeWidthAnim && ($ = N < 0 ? 0 : N), t.strokeColorAnim && (q = "rgb(" + Math.round(255 * z[0]) + "," + Math.round(255 * z[1]) + "," + Math.round(255 * z[2]) + ")"), t.fillColorAnim && t.fc && (W = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), this._hasMaskedPath) {
                                    if (P.translate(0, -t.ls), P.translate(0, _[1] * I / 100 + i, 0), E.p.p) {
                                        var ot = 180 * Math.atan((l.point[1] - m.point[1]) / (l.point[0] - m.point[0])) / Math.PI;
                                        l.point[0] < m.point[0] && (ot += 180), P.rotate(-ot * Math.PI / 180)
                                    }
                                    P.translate(L, O, 0), o -= _[0] * k[r].an / 200, k[r + 1] && Y !== k[r + 1].ind && (o += k[r].an / 2, o += t.tr / 1e3 * t.finalSize)
                                } else {
                                    switch (P.translate(n, i, 0), t.ps && P.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                        case 1:
                                            P.translate(k[r].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[k[r].line]), 0, 0);
                                            break;
                                        case 2:
                                            P.translate(k[r].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[k[r].line]) / 2, 0, 0)
                                    }
                                    P.translate(0, -t.ls), P.translate(B, 0, 0), P.translate(_[0] * k[r].an / 200, _[1] * I / 100, 0), n += k[r].l + t.tr / 1e3 * t.finalSize
                                }
                                "html" === S ? Q = P.toCSS() : "svg" === S ? Q = P.to2dCSS() : tt = [P.props[0], P.props[1], P.props[2], P.props[3], P.props[4], P.props[5], P.props[6], P.props[7], P.props[8], P.props[9], P.props[10], P.props[11], P.props[12], P.props[13], P.props[14], P.props[15]], U = G
                            }
                            C <= r ? (F = new LetterProps(U, $, q, W, Q, tt), this.renderedLetters.push(F), C += 1, this.lettersChangedFlag = !0) : this.lettersChangedFlag = (F = this.renderedLetters[r]).update(U, $, q, W, Q, tt) || this.lettersChangedFlag
                        }
                    }
                }, TextAnimatorProperty.prototype.getValue = function() {
                    this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
                }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), LetterProps.prototype.update = function(t, e, n, i, r, s) {
                    this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                    var a = !1;
                    return this.o !== t && (this.o = t, this._mdf.o = !0, a = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, a = !0), this.sc !== n && (this.sc = n, this._mdf.sc = !0, a = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, a = !0), this.m !== r && (this.m = r, this._mdf.m = !0, a = !0), !s.length || this.p[0] === s[0] && this.p[1] === s[1] && this.p[4] === s[4] && this.p[5] === s[5] && this.p[12] === s[12] && this.p[13] === s[13] || (this.p = s, this._mdf.p = !0, a = !0), a
                }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                    return t
                }, TextProperty.prototype.setCurrentData = function(t) {
                    t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
                }, TextProperty.prototype.searchProperty = function() {
                    return this.searchKeyframes()
                }, TextProperty.prototype.searchKeyframes = function() {
                    return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
                }, TextProperty.prototype.addEffect = function(t) {
                    this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
                }, TextProperty.prototype.getValue = function(t) {
                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                        var e = this.currentData,
                            n = this.keysIndex;
                        if (this.lock) this.setCurrentData(this.currentData);
                        else {
                            this.lock = !0, this._mdf = !1;
                            var i, r = this.effectsSequence.length,
                                s = t || this.data.d.k[this.keysIndex].s;
                            for (i = 0; i < r; i += 1) s = this.effectsSequence[i](n !== this.keysIndex ? s : this.currentData, s.t);
                            e !== s && this.setCurrentData(s), this.pv = this.v = this.currentData, this.lock = !1, this.frameId = this.elem.globalData.frameId
                        }
                    }
                }, TextProperty.prototype.getKeyframeValue = function() {
                    for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, n = 0, i = t.length; n <= i - 1 && !(n === i - 1 || t[n + 1].t > e);) n += 1;
                    return this.keysIndex !== n && (this.keysIndex = n), this.data.d.k[this.keysIndex].s
                }, TextProperty.prototype.buildFinalText = function(t) {
                    for (var e, n = FontManager.getCombinedCharacterCodes(), i = [], r = 0, s = t.length; r < s;) e = t.charCodeAt(r), -1 !== n.indexOf(e) ? i[i.length - 1] += t.charAt(r) : e >= 55296 && e <= 56319 && (e = t.charCodeAt(r + 1)) >= 56320 && e <= 57343 ? (i.push(t.substr(r, 2)), ++r) : i.push(t.charAt(r)), r += 1;
                    return i
                }, TextProperty.prototype.completeTextData = function(t) {
                    t.__complete = !0;
                    var e, n, i, r, s, a, o, l = this.elem.globalData.fontManager,
                        h = this.data,
                        p = [],
                        c = 0,
                        u = h.m.g,
                        m = 0,
                        f = 0,
                        d = 0,
                        g = [],
                        y = 0,
                        v = 0,
                        b = l.getFontByName(t.f),
                        _ = 0,
                        x = b.fStyle ? b.fStyle.split(" ") : [],
                        E = "normal",
                        P = "normal";
                    for (n = x.length, e = 0; e < n; e += 1) switch (x[e].toLowerCase()) {
                        case "italic":
                            P = "italic";
                            break;
                        case "bold":
                            E = "700";
                            break;
                        case "black":
                            E = "900";
                            break;
                        case "medium":
                            E = "500";
                            break;
                        case "regular":
                        case "normal":
                            E = "400";
                            break;
                        case "light":
                        case "thin":
                            E = "200"
                    }
                    t.fWeight = b.fWeight || E, t.fStyle = P, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), n = t.finalText.length, t.finalLineHeight = t.lh;
                    var S, C = t.tr / 1e3 * t.finalSize;
                    if (t.sz)
                        for (var k, T, A = !0, M = t.sz[0], w = t.sz[1]; A;) {
                            k = 0, y = 0, n = (T = this.buildFinalText(t.t)).length, C = t.tr / 1e3 * t.finalSize;
                            var D = -1;
                            for (e = 0; e < n; e += 1) S = T[e].charCodeAt(0), i = !1, " " === T[e] ? D = e : 13 !== S && 3 !== S || (y = 0, i = !0, k += t.finalLineHeight || 1.2 * t.finalSize), l.chars ? (o = l.getCharData(T[e], b.fStyle, b.fFamily), _ = i ? 0 : o.w * t.finalSize / 100) : _ = l.measureText(T[e], t.f, t.finalSize), y + _ > M && " " !== T[e] ? (-1 === D ? n += 1 : e = D, k += t.finalLineHeight || 1.2 * t.finalSize, T.splice(e, D === e ? 1 : 0, "\r"), D = -1, y = 0) : (y += _, y += C);
                            k += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && w < k ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = T, n = t.finalText.length, A = !1)
                        }
                    y = -C, _ = 0;
                    var F, I = 0;
                    for (e = 0; e < n; e += 1)
                        if (i = !1, S = (F = t.finalText[e]).charCodeAt(0), " " === F ? r = "\xa0" : 13 === S || 3 === S ? (I = 0, g.push(y), v = y > v ? y : v, y = -2 * C, r = "", i = !0, d += 1) : r = t.finalText[e], l.chars ? (o = l.getCharData(F, b.fStyle, l.getFontByName(t.f).fFamily), _ = i ? 0 : o.w * t.finalSize / 100) : _ = l.measureText(r, t.f, t.finalSize), " " === F ? I += _ + C : (y += _ + C + I, I = 0), p.push({
                                l: _,
                                an: _,
                                add: m,
                                n: i,
                                anIndexes: [],
                                val: r,
                                line: d,
                                animatorJustifyOffset: 0
                            }), 2 == u) {
                            if (m += _, "" === r || "\xa0" === r || e === n - 1) {
                                for ("" !== r && "\xa0" !== r || (m -= _); f <= e;) p[f].an = m, p[f].ind = c, p[f].extra = _, f += 1;
                                c += 1, m = 0
                            }
                        } else if (3 == u) {
                        if (m += _, "" === r || e === n - 1) {
                            for ("" === r && (m -= _); f <= e;) p[f].an = m, p[f].ind = c, p[f].extra = _, f += 1;
                            m = 0, c += 1
                        }
                    } else p[c].ind = c, p[c].extra = 0, c += 1;
                    if (t.l = p, v = y > v ? y : v, g.push(y), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
                    else switch (t.boxWidth = v, t.j) {
                        case 1:
                            t.justifyOffset = -t.boxWidth;
                            break;
                        case 2:
                            t.justifyOffset = -t.boxWidth / 2;
                            break;
                        default:
                            t.justifyOffset = 0
                    }
                    t.lineWidths = g;
                    var V, R, B = h.a;
                    a = B.length;
                    var L, O, G = [];
                    for (s = 0; s < a; s += 1) {
                        for ((V = B[s]).a.sc && (t.strokeColorAnim = !0), V.a.sw && (t.strokeWidthAnim = !0), (V.a.fc || V.a.fh || V.a.fs || V.a.fb) && (t.fillColorAnim = !0), O = 0, L = V.s.b, e = 0; e < n; e += 1)(R = p[e]).anIndexes[s] = O, (1 == L && "" !== R.val || 2 == L && "" !== R.val && "\xa0" !== R.val || 3 == L && (R.n || "\xa0" == R.val || e == n - 1) || 4 == L && (R.n || e == n - 1)) && (1 === V.s.rn && G.push(O), O += 1);
                        h.a[s].s.totalChars = O;
                        var z, N = -1;
                        if (1 === V.s.rn)
                            for (e = 0; e < n; e += 1) N != (R = p[e]).anIndexes[s] && (N = R.anIndexes[s], z = G.splice(Math.floor(Math.random() * G.length), 1)[0]), R.anIndexes[s] = z
                    }
                    t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100
                }, TextProperty.prototype.updateDocumentData = function(t, e) {
                    var n = this.copyData({}, this.data.d.k[e = void 0 === e ? this.keysIndex : e].s);
                    n = this.copyData(n, t), this.data.d.k[e].s = n, this.recalculate(e), this.elem.addDynamicProperty(this)
                }, TextProperty.prototype.recalculate = function(t) {
                    var e = this.data.d.k[t].s;
                    e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
                }, TextProperty.prototype.canResizeFont = function(t) {
                    this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                }, TextProperty.prototype.setMinimumFontSize = function(t) {
                    this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                };
                var TextSelectorProp = function() {
                        var t = Math.max,
                            e = Math.min,
                            n = Math.floor;

                        function i(t, e) {
                            this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || {
                                k: 0
                            }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
                                v: 100
                            }, this.o = PropertyFactory.getProp(t, e.o || {
                                k: 0
                            }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || {
                                k: 0
                            }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || {
                                k: 0
                            }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                        }
                        return i.prototype = {
                            getMult: function(i) {
                                this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                                var r = BezierFactory.getBezierEasing(this.ne.v / 100, 0, 1 - this.xe.v / 100, 1).get,
                                    s = 0,
                                    a = this.finalS,
                                    o = this.finalE,
                                    l = this.data.sh;
                                if (2 == l) s = r(s = o === a ? i >= o ? 1 : 0 : t(0, e(.5 / (o - a) + (i - a) / (o - a), 1)));
                                else if (3 == l) s = r(s = o === a ? i >= o ? 0 : 1 : 1 - t(0, e(.5 / (o - a) + (i - a) / (o - a), 1)));
                                else if (4 == l) o === a ? s = 0 : (s = t(0, e(.5 / (o - a) + (i - a) / (o - a), 1))) < .5 ? s *= 2 : s = 1 - 2 * (s - .5), s = r(s);
                                else if (5 == l) {
                                    if (o === a) s = 0;
                                    else {
                                        var h = o - a,
                                            p = -h / 2 + (i = e(t(0, i + .5 - a), o - a)),
                                            c = h / 2;
                                        s = Math.sqrt(1 - p * p / (c * c))
                                    }
                                    s = r(s)
                                } else 6 == l ? (o === a ? s = 0 : (i = e(t(0, i + .5 - a), o - a), s = (1 + Math.cos(Math.PI + 2 * Math.PI * i / (o - a))) / 2), s = r(s)) : (i >= n(a) && (s = i - a < 0 ? 1 - (a - i) : t(0, e(o - i, 1))), s = r(s));
                                return s * this.a.v
                            },
                            getValue: function(t) {
                                this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                                var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                                    n = this.o.v / e,
                                    i = this.s.v / e + n,
                                    r = this.e.v / e + n;
                                if (i > r) {
                                    var s = i;
                                    i = r, r = s
                                }
                                this.finalS = i, this.finalE = r
                            }
                        }, extendPrototype([DynamicPropertyContainer], i), {
                            getTextSelectorProp: function(t, e, n) {
                                return new i(t, e, n)
                            }
                        }
                    }(),
                    pool_factory = function(t, e, n, i) {
                        var r = 0,
                            s = t,
                            a = createSizedArray(s);
                        return {
                            newElement: function() {
                                return r ? a[r -= 1] : e()
                            },
                            release: function(t) {
                                r === s && (a = pooling.double(a), s *= 2), n && n(t), a[r] = t, r += 1
                            }
                        }
                    },
                    pooling = {
                        double: function(t) {
                            return t.concat(createSizedArray(t.length))
                        }
                    },
                    point_pool = pool_factory(8, function() {
                        return createTypedArray("float32", 2)
                    }),
                    shape_pool = (factory = pool_factory(4, function() {
                        return new ShapePath
                    }, function(t) {
                        var e, n = t._length;
                        for (e = 0; e < n; e += 1) point_pool.release(t.v[e]), point_pool.release(t.i[e]), point_pool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
                        t._length = 0, t.c = !1
                    }), factory.clone = function(t) {
                        var e, n = factory.newElement(),
                            i = void 0 === t._length ? t.v.length : t._length;
                        for (n.setLength(i), n.c = t.c, e = 0; e < i; e += 1) n.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
                        return n
                    }, factory),
                    shapeCollection_pool = function() {
                        var t = {
                                newShapeCollection: function() {
                                    return e ? i[e -= 1] : new ShapeCollection
                                },
                                release: function(t) {
                                    var r, s = t._length;
                                    for (r = 0; r < s; r += 1) shape_pool.release(t.shapes[r]);
                                    t._length = 0, e === n && (i = pooling.double(i), n *= 2), i[e] = t, e += 1
                                }
                            },
                            e = 0,
                            n = 4,
                            i = createSizedArray(n);
                        return t
                    }(),
                    segments_length_pool = pool_factory(8, function() {
                        return {
                            lengths: [],
                            totalLength: 0
                        }
                    }, function(t) {
                        var e, n = t.lengths.length;
                        for (e = 0; e < n; e += 1) bezier_length_pool.release(t.lengths[e]);
                        t.lengths.length = 0
                    }),
                    bezier_length_pool = pool_factory(8, function() {
                        return {
                            addedLength: 0,
                            percents: createTypedArray("float32", defaultCurveSegments),
                            lengths: createTypedArray("float32", defaultCurveSegments)
                        }
                    }),
                    factory;

                function BaseRenderer() {}

                function SVGRenderer(t, e) {
                    this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
                    var n = "";
                    if (e && e.title) {
                        var i = createNS("title"),
                            r = createElementID();
                        i.setAttribute("id", r), i.textContent = e.title, this.svgElement.appendChild(i), n += r
                    }
                    if (e && e.description) {
                        var s = createNS("desc"),
                            a = createElementID();
                        s.setAttribute("id", a), s.textContent = e.description, this.svgElement.appendChild(s), n += " " + a
                    }
                    n && this.svgElement.setAttribute("aria-labelledby", n);
                    var o = createNS("defs");
                    this.svgElement.appendChild(o);
                    var l = createNS("g");
                    this.svgElement.appendChild(l), this.layerElement = l, this.renderConfig = {
                        preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                        progressiveLoad: e && e.progressiveLoad || !1,
                        hideOnTransparent: !e || !1 !== e.hideOnTransparent,
                        viewBoxOnly: e && e.viewBoxOnly || !1,
                        viewBoxSize: e && e.viewBoxSize || !1,
                        className: e && e.className || "",
                        focusable: e && e.focusable
                    }, this.globalData = {
                        _mdf: !1,
                        frameNum: -1,
                        defs: o,
                        renderConfig: this.renderConfig
                    }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
                }

                function CanvasRenderer(t, e) {
                    this.animationItem = t, this.renderConfig = {
                        clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                        context: e && e.context || null,
                        progressiveLoad: e && e.progressiveLoad || !1,
                        preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                        className: e && e.className || ""
                    }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                        frameNum: -1,
                        _mdf: !1,
                        renderConfig: this.renderConfig,
                        currentGlobalAlpha: -1
                    }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
                }

                function HybridRenderer(t, e) {
                    this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                        className: e && e.className || "",
                        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                        hideOnTransparent: !e || !1 !== e.hideOnTransparent
                    }, this.globalData = {
                        _mdf: !1,
                        frameNum: -1,
                        renderConfig: this.renderConfig
                    }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
                }

                function MaskElement(t, e, n) {
                    this.data = t, this.element = e, this.globalData = n, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                    var i, r = this.globalData.defs,
                        s = this.masksProperties ? this.masksProperties.length : 0;
                    this.viewData = createSizedArray(s), this.solidPath = "";
                    var a, o, l, h, p, c, u, m = this.masksProperties,
                        f = 0,
                        d = [],
                        g = createElementID(),
                        y = "clipPath",
                        v = "clip-path";
                    for (i = 0; i < s; i++)
                        if (("a" !== m[i].mode && "n" !== m[i].mode || m[i].inv || 100 !== m[i].o.k || m[i].o.x) && (y = "mask", v = "mask"), "s" != m[i].mode && "i" != m[i].mode || 0 !== f ? h = null : ((h = createNS("rect")).setAttribute("fill", "#ffffff"), h.setAttribute("width", this.element.comp.data.w || 0), h.setAttribute("height", this.element.comp.data.h || 0), d.push(h)), a = createNS("path"), "n" != m[i].mode) {
                            var b;
                            if (f += 1, a.setAttribute("fill", "s" === m[i].mode ? "#000000" : "#ffffff"), a.setAttribute("clip-rule", "nonzero"), 0 !== m[i].x.k ? (y = "mask", v = "mask", u = PropertyFactory.getProp(this.element, m[i].x, 0, null, this.element), b = createElementID(), (p = createNS("filter")).setAttribute("id", b), (c = createNS("feMorphology")).setAttribute("operator", "erode"), c.setAttribute("in", "SourceGraphic"), c.setAttribute("radius", "0"), p.appendChild(c), r.appendChild(p), a.setAttribute("stroke", "s" === m[i].mode ? "#000000" : "#ffffff")) : (c = null, u = null), this.storedData[i] = {
                                    elem: a,
                                    x: u,
                                    expan: c,
                                    lastPath: "",
                                    lastOperator: "",
                                    filterId: b,
                                    lastRadius: 0
                                }, "i" == m[i].mode) {
                                l = d.length;
                                var _ = createNS("g");
                                for (o = 0; o < l; o += 1) _.appendChild(d[o]);
                                var x = createNS("mask");
                                x.setAttribute("mask-type", "alpha"), x.setAttribute("id", g + "_" + f), x.appendChild(a), r.appendChild(x), _.setAttribute("mask", "url(" + locationHref + "#" + g + "_" + f + ")"), d.length = 0, d.push(_)
                            } else d.push(a);
                            m[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[i] = {
                                elem: a,
                                lastPath: "",
                                op: PropertyFactory.getProp(this.element, m[i].o, 0, .01, this.element),
                                prop: ShapePropertyFactory.getShapeProp(this.element, m[i], 3),
                                invRect: h
                            }, this.viewData[i].prop.k || this.drawPath(m[i], this.viewData[i].prop.v, this.viewData[i])
                        } else this.viewData[i] = {
                            op: PropertyFactory.getProp(this.element, m[i].o, 0, .01, this.element),
                            prop: ShapePropertyFactory.getShapeProp(this.element, m[i], 3),
                            elem: a,
                            lastPath: ""
                        }, r.appendChild(a);
                    for (this.maskElement = createNS(y), s = d.length, i = 0; i < s; i += 1) this.maskElement.appendChild(d[i]);
                    f > 0 && (this.maskElement.setAttribute("id", g), this.element.maskedElement.setAttribute(v, "url(" + locationHref + "#" + g + ")"), r.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
                }

                function HierarchyElement() {}

                function FrameElement() {}

                function TransformElement() {}

                function RenderableElement() {}

                function RenderableDOMElement() {}

                function ProcessedElement(t, e) {
                    this.elem = t, this.pos = e
                }

                function SVGStyleData(t, e) {
                    this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null
                }

                function SVGShapeData(t, e, n) {
                    this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = n, this.lvl = e, this._isAnimated = !!n.k;
                    for (var i = 0, r = t.length; i < r;) {
                        if (t[i].mProps.dynamicProperties.length) {
                            this._isAnimated = !0;
                            break
                        }
                        i += 1
                    }
                }

                function SVGTransformData(t, e, n) {
                    this.transform = {
                        mProps: t,
                        op: e,
                        container: n
                    }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
                }

                function SVGStrokeStyleData(t, e, n) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = n, this._isAnimated = !!this._isAnimated
                }

                function SVGFillStyleData(t, e, n) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = n
                }

                function SVGGradientFillStyleData(t, e, n) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, n)
                }

                function SVGGradientStrokeStyleData(t, e, n) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, n), this._isAnimated = !!this._isAnimated
                }

                function ShapeGroupData() {
                    this.it = [], this.prevViewData = [], this.gr = createNS("g")
                }
                BaseRenderer.prototype.checkLayers = function(t) {
                    var e, n, i = this.layers.length;
                    for (this.completeLayers = !0, e = i - 1; e >= 0; e--) this.elements[e] || (n = this.layers[e]).ip - n.st <= t - this.layers[e].st && n.op - n.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
                    this.checkPendingElements()
                }, BaseRenderer.prototype.createItem = function(t) {
                    switch (t.ty) {
                        case 2:
                            return this.createImage(t);
                        case 0:
                            return this.createComp(t);
                        case 1:
                            return this.createSolid(t);
                        case 3:
                            return this.createNull(t);
                        case 4:
                            return this.createShape(t);
                        case 5:
                            return this.createText(t);
                        case 13:
                            return this.createCamera(t)
                    }
                    return this.createNull(t)
                }, BaseRenderer.prototype.createCamera = function() {
                    throw new Error("You're using a 3d camera. Try the html renderer.")
                }, BaseRenderer.prototype.buildAllItems = function() {
                    var t, e = this.layers.length;
                    for (t = 0; t < e; t += 1) this.buildItem(t);
                    this.checkPendingElements()
                }, BaseRenderer.prototype.includeLayers = function(t) {
                    this.completeLayers = !1;
                    var e, n, i = t.length,
                        r = this.layers.length;
                    for (e = 0; e < i; e += 1)
                        for (n = 0; n < r;) {
                            if (this.layers[n].id == t[e].id) {
                                this.layers[n] = t[e];
                                break
                            }
                            n += 1
                        }
                }, BaseRenderer.prototype.setProjectInterface = function(t) {
                    this.globalData.projectInterface = t
                }, BaseRenderer.prototype.initItems = function() {
                    this.globalData.progressiveLoad || this.buildAllItems()
                }, BaseRenderer.prototype.buildElementParenting = function(t, e, n) {
                    for (var i = this.elements, r = this.layers, s = 0, a = r.length; s < a;) r[s].ind == e && (i[s] && !0 !== i[s] ? (n.push(i[s]), i[s].setAsParent(), void 0 !== r[s].parent ? this.buildElementParenting(t, r[s].parent, n) : t.setHierarchy(n)) : (this.buildItem(s), this.addPendingElement(t))), s += 1
                }, BaseRenderer.prototype.addPendingElement = function(t) {
                    this.pendingElements.push(t)
                }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
                    var e, n = t.length;
                    for (e = 0; e < n; e += 1)
                        if (t[e].xt) {
                            var i = this.createComp(t[e]);
                            i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
                        }
                }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
                    this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                        w: t.w,
                        h: t.h
                    }
                }, extendPrototype([BaseRenderer], SVGRenderer), SVGRenderer.prototype.createNull = function(t) {
                    return new NullElement(t, this.globalData, this)
                }, SVGRenderer.prototype.createShape = function(t) {
                    return new SVGShapeElement(t, this.globalData, this)
                }, SVGRenderer.prototype.createText = function(t) {
                    return new SVGTextElement(t, this.globalData, this)
                }, SVGRenderer.prototype.createImage = function(t) {
                    return new IImageElement(t, this.globalData, this)
                }, SVGRenderer.prototype.createComp = function(t) {
                    return new SVGCompElement(t, this.globalData, this)
                }, SVGRenderer.prototype.createSolid = function(t) {
                    return new ISolidElement(t, this.globalData, this)
                }, SVGRenderer.prototype.configAnimation = function(t) {
                    this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize ? this.renderConfig.viewBoxSize : "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)"), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                    var e = this.globalData.defs;
                    this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
                    var n = createNS("clipPath"),
                        i = createNS("rect");
                    i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
                    var r = createElementID();
                    n.setAttribute("id", r), n.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + r + ")"), e.appendChild(n), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
                }, SVGRenderer.prototype.destroy = function() {
                    this.animationItem.wrapper.innerHTML = "", this.layerElement = null, this.globalData.defs = null;
                    var t, e = this.layers ? this.layers.length : 0;
                    for (t = 0; t < e; t++) this.elements[t] && this.elements[t].destroy();
                    this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                }, SVGRenderer.prototype.updateContainerSize = function() {}, SVGRenderer.prototype.buildItem = function(t) {
                    var e = this.elements;
                    if (!e[t] && 99 != this.layers[t].ty) {
                        e[t] = !0;
                        var n = this.createItem(this.layers[t]);
                        e[t] = n, expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(n), n.initExpressions()), this.appendElementInPos(n, t), this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? n.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(n)))
                    }
                }, SVGRenderer.prototype.checkPendingElements = function() {
                    for (; this.pendingElements.length;) {
                        var t = this.pendingElements.pop();
                        if (t.checkParenting(), t.data.tt)
                            for (var e = 0, n = this.elements.length; e < n;) {
                                if (this.elements[e] === t) {
                                    t.setMatte(this.elements[e - 1].layerId);
                                    break
                                }
                                e += 1
                            }
                    }
                }, SVGRenderer.prototype.renderFrame = function(t) {
                    if (this.renderedFrame !== t && !this.destroyed) {
                        null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                        var e, n = this.layers.length;
                        for (this.completeLayers || this.checkLayers(t), e = n - 1; e >= 0; e--)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                        if (this.globalData._mdf)
                            for (e = 0; e < n; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
                    }
                }, SVGRenderer.prototype.appendElementInPos = function(t, e) {
                    var n = t.getBaseElement();
                    if (n) {
                        for (var i, r = 0; r < e;) this.elements[r] && !0 !== this.elements[r] && this.elements[r].getBaseElement() && (i = this.elements[r].getBaseElement()), r += 1;
                        i ? this.layerElement.insertBefore(n, i) : this.layerElement.appendChild(n)
                    }
                }, SVGRenderer.prototype.hide = function() {
                    this.layerElement.style.display = "none"
                }, SVGRenderer.prototype.show = function() {
                    this.layerElement.style.display = "block"
                }, extendPrototype([BaseRenderer], CanvasRenderer), CanvasRenderer.prototype.createShape = function(t) {
                    return new CVShapeElement(t, this.globalData, this)
                }, CanvasRenderer.prototype.createText = function(t) {
                    return new CVTextElement(t, this.globalData, this)
                }, CanvasRenderer.prototype.createImage = function(t) {
                    return new CVImageElement(t, this.globalData, this)
                }, CanvasRenderer.prototype.createComp = function(t) {
                    return new CVCompElement(t, this.globalData, this)
                }, CanvasRenderer.prototype.createSolid = function(t) {
                    return new CVSolidElement(t, this.globalData, this)
                }, CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRenderer.prototype.ctxTransform = function(t) {
                    if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13])
                        if (this.renderConfig.clearCanvas) {
                            this.transformMat.cloneFromProps(t);
                            var e = this.contextData.cTr.props;
                            this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
                            var n = this.contextData.cTr.props;
                            this.canvasContext.setTransform(n[0], n[1], n[4], n[5], n[12], n[13])
                        } else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
                }, CanvasRenderer.prototype.ctxOpacity = function(t) {
                    if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void(this.globalData.currentGlobalAlpha = this.contextData.cO);
                    this.contextData.cO *= t < 0 ? 0 : t, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO)
                }, CanvasRenderer.prototype.reset = function() {
                    this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
                }, CanvasRenderer.prototype.save = function(t) {
                    if (this.renderConfig.clearCanvas) {
                        t && this.canvasContext.save();
                        var e = this.contextData.cTr.props;
                        this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
                        var n, i = this.contextData.saved[this.contextData.cArrPos];
                        for (n = 0; n < 16; n += 1) i[n] = e[n];
                        this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1
                    } else this.canvasContext.save()
                }, CanvasRenderer.prototype.restore = function(t) {
                    if (this.renderConfig.clearCanvas) {
                        t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), this.contextData.cArrPos -= 1;
                        var e, n = this.contextData.saved[this.contextData.cArrPos],
                            i = this.contextData.cTr.props;
                        for (e = 0; e < 16; e += 1) i[e] = n[e];
                        this.canvasContext.setTransform(n[0], n[1], n[4], n[5], n[12], n[13]), this.contextData.cO = n = this.contextData.savedOp[this.contextData.cArrPos], this.globalData.currentGlobalAlpha !== n && (this.canvasContext.globalAlpha = n, this.globalData.currentGlobalAlpha = n)
                    } else this.canvasContext.restore()
                }, CanvasRenderer.prototype.configAnimation = function(t) {
                    this.animationItem.wrapper ? (this.animationItem.container = createTag("canvas"), this.animationItem.container.style.width = "100%", this.animationItem.container.style.height = "100%", this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style["-webkit-transform"] = "0px 0px 0px", this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className)) : this.canvasContext = this.renderConfig.context, this.data = t, this.layers = t.layers, this.transformCanvas = {
                        w: t.w,
                        h: t.h,
                        sx: 0,
                        sy: 0,
                        tx: 0,
                        ty: 0
                    }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
                }, CanvasRenderer.prototype.updateContainerSize = function() {
                    var t, e, n, i;
                    if (this.reset(), this.animationItem.wrapper && this.animationItem.container ? (e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", (t = this.animationItem.wrapper.offsetWidth) * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                        var r = this.renderConfig.preserveAspectRatio.split(" "),
                            s = r[1] || "meet",
                            a = r[0] || "xMidYMid",
                            o = a.substr(0, 4),
                            l = a.substr(4);
                        (i = this.transformCanvas.w / this.transformCanvas.h) > (n = t / e) && "meet" === s || i < n && "slice" === s ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o && (i < n && "meet" === s || i > n && "slice" === s) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (i < n && "meet" === s || i > n && "slice" === s) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === l && (i > n && "meet" === s || i < n && "slice" === s) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === l && (i > n && "meet" === s || i < n && "slice" === s) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0
                    } else "none" == this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
                    this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
                }, CanvasRenderer.prototype.destroy = function() {
                    var t;
                    for (this.renderConfig.clearCanvas && (this.animationItem.wrapper.innerHTML = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
                    this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
                }, CanvasRenderer.prototype.renderFrame = function(t, e) {
                    if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
                        this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
                        var n, i = this.layers.length;
                        for (this.completeLayers || this.checkLayers(t), n = 0; n < i; n++)(this.completeLayers || this.elements[n]) && this.elements[n].prepareFrame(t - this.layers[n].st);
                        if (this.globalData._mdf) {
                            for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), n = i - 1; n >= 0; n -= 1)(this.completeLayers || this.elements[n]) && this.elements[n].renderFrame();
                            !0 !== this.renderConfig.clearCanvas && this.restore()
                        }
                    }
                }, CanvasRenderer.prototype.buildItem = function(t) {
                    var e = this.elements;
                    if (!e[t] && 99 != this.layers[t].ty) {
                        var n = this.createItem(this.layers[t], this, this.globalData);
                        e[t] = n, n.initExpressions()
                    }
                }, CanvasRenderer.prototype.checkPendingElements = function() {
                    for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
                }, CanvasRenderer.prototype.hide = function() {
                    this.animationItem.container.style.display = "none"
                }, CanvasRenderer.prototype.show = function() {
                    this.animationItem.container.style.display = "block"
                }, extendPrototype([BaseRenderer], HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function() {
                    for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
                }, HybridRenderer.prototype.appendElementInPos = function(t, e) {
                    var n = t.getBaseElement();
                    if (n) {
                        var i = this.layers[e];
                        if (i.ddd && this.supports3d) this.addTo3dContainer(n, e);
                        else if (this.threeDElements) this.addTo3dContainer(n, e);
                        else {
                            for (var r, s, a = 0; a < e;) this.elements[a] && !0 !== this.elements[a] && this.elements[a].getBaseElement && (s = this.elements[a], r = (this.layers[a].ddd ? this.getThreeDContainerByPos(a) : s.getBaseElement()) || r), a += 1;
                            r ? i.ddd && this.supports3d || this.layerElement.insertBefore(n, r) : i.ddd && this.supports3d || this.layerElement.appendChild(n)
                        }
                    }
                }, HybridRenderer.prototype.createShape = function(t) {
                    return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
                }, HybridRenderer.prototype.createText = function(t) {
                    return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextElement(t, this.globalData, this)
                }, HybridRenderer.prototype.createCamera = function(t) {
                    return this.camera = new HCameraElement(t, this.globalData, this), this.camera
                }, HybridRenderer.prototype.createImage = function(t) {
                    return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
                }, HybridRenderer.prototype.createComp = function(t) {
                    return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
                }, HybridRenderer.prototype.createSolid = function(t) {
                    return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
                }, HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull, HybridRenderer.prototype.getThreeDContainerByPos = function(t) {
                    for (var e = 0, n = this.threeDElements.length; e < n;) {
                        if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
                        e += 1
                    }
                }, HybridRenderer.prototype.createThreeDContainer = function(t, e) {
                    var n = createTag("div");
                    styleDiv(n);
                    var i = createTag("div");
                    styleDiv(i), "3d" === e && (n.style.width = this.globalData.compSize.w + "px", n.style.height = this.globalData.compSize.h + "px", n.style.transformOrigin = n.style.mozTransformOrigin = n.style.webkitTransformOrigin = "50% 50%", i.style.transform = i.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"), n.appendChild(i);
                    var r = {
                        container: i,
                        perspectiveElem: n,
                        startPos: t,
                        endPos: t,
                        type: e
                    };
                    return this.threeDElements.push(r), r
                }, HybridRenderer.prototype.build3dContainers = function() {
                    var t, e, n = this.layers.length,
                        i = "";
                    for (t = 0; t < n; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== i && (i = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== i && (i = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
                    for (t = (n = this.threeDElements.length) - 1; t >= 0; t--) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
                }, HybridRenderer.prototype.addTo3dContainer = function(t, e) {
                    for (var n = 0, i = this.threeDElements.length; n < i;) {
                        if (e <= this.threeDElements[n].endPos) {
                            for (var r, s = this.threeDElements[n].startPos; s < e;) this.elements[s] && this.elements[s].getBaseElement && (r = this.elements[s].getBaseElement()), s += 1;
                            r ? this.threeDElements[n].container.insertBefore(t, r) : this.threeDElements[n].container.appendChild(t);
                            break
                        }
                        n += 1
                    }
                }, HybridRenderer.prototype.configAnimation = function(t) {
                    var e = createTag("div"),
                        n = this.animationItem.wrapper;
                    e.style.width = t.w + "px", e.style.height = t.h + "px", this.resizerElem = e, styleDiv(e), e.style.transformStyle = e.style.webkitTransformStyle = e.style.mozTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), n.appendChild(e), e.style.overflow = "hidden";
                    var i = createNS("svg");
                    i.setAttribute("width", "1"), i.setAttribute("height", "1"), styleDiv(i), this.resizerElem.appendChild(i);
                    var r = createNS("defs");
                    i.appendChild(r), this.data = t, this.setupGlobalData(t, i), this.globalData.defs = r, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
                }, HybridRenderer.prototype.destroy = function() {
                    this.animationItem.wrapper.innerHTML = "", this.animationItem.container = null, this.globalData.defs = null;
                    var t, e = this.layers ? this.layers.length : 0;
                    for (t = 0; t < e; t++) this.elements[t].destroy();
                    this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                }, HybridRenderer.prototype.updateContainerSize = function() {
                    var t, e, n, i, r = this.animationItem.wrapper.offsetWidth,
                        s = this.animationItem.wrapper.offsetHeight;
                    this.globalData.compSize.w / this.globalData.compSize.h > r / s ? (t = r / this.globalData.compSize.w, e = r / this.globalData.compSize.w, n = 0, i = (s - this.globalData.compSize.h * (r / this.globalData.compSize.w)) / 2) : (t = s / this.globalData.compSize.h, e = s / this.globalData.compSize.h, n = (r - this.globalData.compSize.w * (s / this.globalData.compSize.h)) / 2, i = 0), this.resizerElem.style.transform = this.resizerElem.style.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + n + "," + i + ",0,1)"
                }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function() {
                    this.resizerElem.style.display = "none"
                }, HybridRenderer.prototype.show = function() {
                    this.resizerElem.style.display = "block"
                }, HybridRenderer.prototype.initItems = function() {
                    if (this.buildAllItems(), this.camera) this.camera.setup();
                    else {
                        var t, e = this.globalData.compSize.w,
                            n = this.globalData.compSize.h,
                            i = this.threeDElements.length;
                        for (t = 0; t < i; t += 1) this.threeDElements[t].perspectiveElem.style.perspective = this.threeDElements[t].perspectiveElem.style.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(n, 2)) + "px"
                    }
                }, HybridRenderer.prototype.searchExtraCompositions = function(t) {
                    var e, n = t.length,
                        i = createTag("div");
                    for (e = 0; e < n; e += 1)
                        if (t[e].xt) {
                            var r = this.createComp(t[e], i, this.globalData.comp, null);
                            r.initExpressions(), this.globalData.projectInterface.registerComposition(r)
                        }
                }, MaskElement.prototype.getMaskProperty = function(t) {
                    return this.viewData[t].prop
                }, MaskElement.prototype.renderFrame = function(t) {
                    var e, n = this.element.finalTransform.mat,
                        i = this.masksProperties.length;
                    for (e = 0; e < i; e++)
                        if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && (this.viewData[e].invRect.setAttribute("x", -n.props[12]), this.viewData[e].invRect.setAttribute("y", -n.props[13])), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                            var r = this.storedData[e].expan;
                            this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[e].filterId + ")")), r.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
                        }
                }, MaskElement.prototype.getMaskelement = function() {
                    return this.maskElement
                }, MaskElement.prototype.createLayerSolidPath = function() {
                    var t = "M0,0 ";
                    return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, (t += " h-" + this.globalData.compSize.w) + " v-" + this.globalData.compSize.h + " "
                }, MaskElement.prototype.drawPath = function(t, e, n) {
                    var i, r, s = " M" + e.v[0][0] + "," + e.v[0][1];
                    for (r = e._length, i = 1; i < r; i += 1) s += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[i][0] + "," + e.i[i][1] + " " + e.v[i][0] + "," + e.v[i][1];
                    if (e.c && r > 1 && (s += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), n.lastPath !== s) {
                        var a = "";
                        n.elem && (e.c && (a = t.inv ? this.solidPath + s : s), n.elem.setAttribute("d", a)), n.lastPath = s
                    }
                }, MaskElement.prototype.destroy = function() {
                    this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
                }, HierarchyElement.prototype = {
                    initHierarchy: function() {
                        this.hierarchy = [], this._isParent = !1, this.checkParenting()
                    },
                    setHierarchy: function(t) {
                        this.hierarchy = t
                    },
                    setAsParent: function() {
                        this._isParent = !0
                    },
                    checkParenting: function() {
                        void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
                    }
                }, FrameElement.prototype = {
                    initFrame: function() {
                        this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
                    },
                    prepareProperties: function(t, e) {
                        var n, i = this.dynamicProperties.length;
                        for (n = 0; n < i; n += 1)(e || this._isParent && "transform" === this.dynamicProperties[n].propType) && (this.dynamicProperties[n].getValue(), this.dynamicProperties[n]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
                    },
                    addDynamicProperty: function(t) {
                        -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
                    }
                }, TransformElement.prototype = {
                    initTransform: function() {
                        this.finalTransform = {
                            mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                                o: 0
                            },
                            _matMdf: !1,
                            _opMdf: !1,
                            mat: new Matrix
                        }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0)
                    },
                    renderTransform: function() {
                        if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                            var t, e = this.finalTransform.mat,
                                n = 0,
                                i = this.hierarchy.length;
                            if (!this.finalTransform._matMdf)
                                for (; n < i;) {
                                    if (this.hierarchy[n].finalTransform.mProp._mdf) {
                                        this.finalTransform._matMdf = !0;
                                        break
                                    }
                                    n += 1
                                }
                            if (this.finalTransform._matMdf)
                                for (e.cloneFromProps(t = this.finalTransform.mProp.v.props), n = 0; n < i; n += 1) e.transform((t = this.hierarchy[n].finalTransform.mProp.v.props)[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
                        }
                    },
                    globalToLocal: function(t) {
                        var e = [];
                        e.push(this.finalTransform);
                        for (var n = !0, i = this.comp; n;) i.finalTransform ? (i.data.hasMask && e.splice(0, 0, i.finalTransform), i = i.comp) : n = !1;
                        var r, s, a = e.length;
                        for (r = 0; r < a; r += 1) s = e[r].mat.applyToPointArray(0, 0, 0), t = [t[0] - s[0], t[1] - s[1], 0];
                        return t
                    },
                    mHelper: new Matrix
                }, RenderableElement.prototype = {
                    initRenderable: function() {
                        this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
                    },
                    addRenderableComponent: function(t) {
                        -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
                    },
                    removeRenderableComponent: function(t) {
                        -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
                    },
                    prepareRenderableFrame: function(t) {
                        this.checkLayerLimits(t)
                    },
                    checkTransparency: function() {
                        this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
                    },
                    checkLayerLimits: function(t) {
                        this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
                    },
                    renderRenderable: function() {
                        var t, e = this.renderableComponents.length;
                        for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
                    },
                    sourceRectAtTime: function() {
                        return {
                            top: 0,
                            left: 0,
                            width: 100,
                            height: 100
                        }
                    },
                    getLayerSize: function() {
                        return 5 === this.data.ty ? {
                            w: this.data.textData.width,
                            h: this.data.textData.height
                        } : {
                            w: this.data.width,
                            h: this.data.height
                        }
                    }
                }, extendPrototype([RenderableElement, createProxyFunction({
                    initElement: function(t, e, n) {
                        this.initFrame(), this.initBaseData(t, e, n), this.initTransform(t, e, n), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
                    },
                    hide: function() {
                        this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
                    },
                    show: function() {
                        this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
                    },
                    renderFrame: function() {
                        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                    },
                    renderInnerContent: function() {},
                    prepareFrame: function(t) {
                        this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
                    },
                    destroy: function() {
                        this.innerElem = null, this.destroyBaseElement()
                    }
                })], RenderableDOMElement), SVGStyleData.prototype.reset = function() {
                    this.d = "", this._mdf = !1
                }, SVGShapeData.prototype.setAsAnimated = function() {
                    this._isAnimated = !0
                }, extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, n) {
                    this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
                        k: 0
                    }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
                        k: 0
                    }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = n, this.stops = [], this.setGradientData(n.pElem, e), this.setGradientOpacity(e, n), this._isAnimated = !!this._isAnimated
                }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
                    var n = createElementID(),
                        i = createNS(1 === e.t ? "linearGradient" : "radialGradient");
                    i.setAttribute("id", n), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
                    var r, s, a, o = [];
                    for (a = 4 * e.g.p, s = 0; s < a; s += 4) r = createNS("stop"), i.appendChild(r), o.push(r);
                    t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + locationHref + "#" + n + ")"), this.gf = i, this.cst = o
                }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
                    if (this.g._hasOpacity && !this.g._collapsable) {
                        var n, i, r, s = createNS("mask"),
                            a = createNS("path");
                        s.appendChild(a);
                        var o = createElementID(),
                            l = createElementID();
                        s.setAttribute("id", l);
                        var h = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                        h.setAttribute("id", o), h.setAttribute("spreadMethod", "pad"), h.setAttribute("gradientUnits", "userSpaceOnUse"), r = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                        var p = this.stops;
                        for (i = 4 * t.g.p; i < r; i += 2)(n = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), h.appendChild(n), p.push(n);
                        a.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + locationHref + "#" + o + ")"), this.of = h, this.ms = s, this.ost = p, this.maskId = l, e.msElem = a
                    }
                }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
                var SVGElementsRenderer = function() {
                    var t = new Matrix,
                        e = new Matrix;

                    function n(t, e, n) {
                        (n || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (n || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
                    }

                    function i(n, i, r) {
                        var s, a, o, l, h, p, c, u, m, f, d, g = i.styles.length,
                            y = i.lvl;
                        for (p = 0; p < g; p += 1) {
                            if (l = i.sh._mdf || r, i.styles[p].lvl < y) {
                                for (u = e.reset(), f = y - i.styles[p].lvl, d = i.transformers.length - 1; !l && f > 0;) l = i.transformers[d].mProps._mdf || l, f--, d--;
                                if (l)
                                    for (f = y - i.styles[p].lvl, d = i.transformers.length - 1; f > 0;) u.transform((m = i.transformers[d].mProps.v.props)[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), f--, d--
                            } else u = t;
                            if (a = (c = i.sh.paths)._length, l) {
                                for (o = "", s = 0; s < a; s += 1)(h = c.shapes[s]) && h._length && (o += buildShapeString(h, h._length, h.c, u));
                                i.caches[p] = o
                            } else o = i.caches[p];
                            i.styles[p].d += !0 === n.hd ? "" : o, i.styles[p]._mdf = l || i.styles[p]._mdf
                        }
                    }

                    function r(t, e, n) {
                        var i = e.style;
                        (e.c._mdf || n) && i.pElem.setAttribute("fill", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || n) && i.pElem.setAttribute("fill-opacity", e.o.v)
                    }

                    function s(t, e, n) {
                        a(t, e, n), o(0, e, n)
                    }

                    function a(t, e, n) {
                        var i, r, s, a, o, l = e.gf,
                            h = e.g._hasOpacity,
                            p = e.s.v,
                            c = e.e.v;
                        if ((e.o._mdf || n) && e.style.pElem.setAttribute("gf" === t.ty ? "fill-opacity" : "stroke-opacity", e.o.v), e.s._mdf || n) {
                            var u = 1 === t.t ? "x1" : "cx",
                                m = "x1" === u ? "y1" : "cy";
                            l.setAttribute(u, p[0]), l.setAttribute(m, p[1]), h && !e.g._collapsable && (e.of.setAttribute(u, p[0]), e.of.setAttribute(m, p[1]))
                        }
                        if (e.g._cmdf || n) {
                            var f = e.g.c;
                            for (s = (i = e.cst).length, r = 0; r < s; r += 1)(a = i[r]).setAttribute("offset", f[4 * r] + "%"), a.setAttribute("stop-color", "rgb(" + f[4 * r + 1] + "," + f[4 * r + 2] + "," + f[4 * r + 3] + ")")
                        }
                        if (h && (e.g._omdf || n)) {
                            var d = e.g.o;
                            for (s = (i = e.g._collapsable ? e.cst : e.ost).length, r = 0; r < s; r += 1) a = i[r], e.g._collapsable || a.setAttribute("offset", d[2 * r] + "%"), a.setAttribute("stop-opacity", d[2 * r + 1])
                        }
                        if (1 === t.t)(e.e._mdf || n) && (l.setAttribute("x2", c[0]), l.setAttribute("y2", c[1]), h && !e.g._collapsable && (e.of.setAttribute("x2", c[0]), e.of.setAttribute("y2", c[1])));
                        else if ((e.s._mdf || e.e._mdf || n) && (o = Math.sqrt(Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2)), l.setAttribute("r", o), h && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || n) {
                            o || (o = Math.sqrt(Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2)));
                            var g = Math.atan2(c[1] - p[1], c[0] - p[0]),
                                y = o * (e.h.v >= 1 ? .99 : e.h.v <= -1 ? -.99 : e.h.v),
                                v = Math.cos(g + e.a.v) * y + p[0],
                                b = Math.sin(g + e.a.v) * y + p[1];
                            l.setAttribute("fx", v), l.setAttribute("fy", b), h && !e.g._collapsable && (e.of.setAttribute("fx", v), e.of.setAttribute("fy", b))
                        }
                    }

                    function o(t, e, n) {
                        var i = e.style,
                            r = e.d;
                        r && (r._mdf || n) && r.dashStr && (i.pElem.setAttribute("stroke-dasharray", r.dashStr), i.pElem.setAttribute("stroke-dashoffset", r.dashoffset[0])), e.c && (e.c._mdf || n) && i.pElem.setAttribute("stroke", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || n) && i.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || n) && (i.pElem.setAttribute("stroke-width", e.w.v), i.msElem && i.msElem.setAttribute("stroke-width", e.w.v))
                    }
                    return {
                        createRenderFunction: function(t) {
                            switch (t.ty) {
                                case "fl":
                                    return r;
                                case "gf":
                                    return a;
                                case "gs":
                                    return s;
                                case "st":
                                    return o;
                                case "sh":
                                case "el":
                                case "rc":
                                case "sr":
                                    return i;
                                case "tr":
                                    return n
                            }
                        }
                    }
                }();

                function ShapeTransformManager() {
                    this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
                }

                function CVShapeData(t, e, n, i) {
                    this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
                    var r = 4;
                    "rc" == e.ty ? r = 5 : "el" == e.ty ? r = 6 : "sr" == e.ty && (r = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, r, t);
                    var s, a, o = n.length;
                    for (s = 0; s < o; s += 1) n[s].closed || (a = {
                        transforms: i.addTransformSequence(n[s].transforms),
                        trNodes: []
                    }, this.styledShapes.push(a), n[s].elements.push(a))
                }

                function BaseElement() {}

                function NullElement(t, e, n) {
                    this.initFrame(), this.initBaseData(t, e, n), this.initFrame(), this.initTransform(t, e, n), this.initHierarchy()
                }

                function SVGBaseElement() {}

                function IShapeElement() {}

                function ITextElement() {}

                function ICompElement() {}

                function IImageElement(t, e, n) {
                    this.assetData = e.getAssetData(t.refId), this.initElement(t, e, n), this.sourceRect = {
                        top: 0,
                        left: 0,
                        width: this.assetData.w,
                        height: this.assetData.h
                    }
                }

                function ISolidElement(t, e, n) {
                    this.initElement(t, e, n)
                }

                function SVGCompElement(t, e, n) {
                    this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, n), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                        _placeholder: !0
                    }
                }

                function SVGTextElement(t, e, n) {
                    this.textSpans = [], this.renderType = "svg", this.initElement(t, e, n)
                }

                function SVGShapeElement(t, e, n) {
                    this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, n), this.prevViewData = []
                }

                function SVGTintFilter(t, e) {
                    this.filterManager = e;
                    var n = createNS("feColorMatrix");
                    if (n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "linearRGB"), n.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), n.setAttribute("result", "f1"), t.appendChild(n), (n = createNS("feColorMatrix")).setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), n.setAttribute("result", "f2"), t.appendChild(n), this.matrixFilter = n, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
                        var i, r = createNS("feMerge");
                        t.appendChild(r), (i = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), r.appendChild(i), (i = createNS("feMergeNode")).setAttribute("in", "f2"), r.appendChild(i)
                    }
                }

                function SVGFillFilter(t, e) {
                    this.filterManager = e;
                    var n = createNS("feColorMatrix");
                    n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(n), this.matrixFilter = n
                }

                function SVGGaussianBlurEffect(t, e) {
                    t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
                    var n = createNS("feGaussianBlur");
                    t.appendChild(n), this.feGaussianBlur = n
                }

                function SVGStrokeEffect(t, e) {
                    this.initialized = !1, this.filterManager = e, this.elem = t, this.paths = []
                }

                function SVGTritoneFilter(t, e) {
                    this.filterManager = e;
                    var n = createNS("feColorMatrix");
                    n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "linearRGB"), n.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), n.setAttribute("result", "f1"), t.appendChild(n);
                    var i = createNS("feComponentTransfer");
                    i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), this.matrixFilter = i;
                    var r = createNS("feFuncR");
                    r.setAttribute("type", "table"), i.appendChild(r), this.feFuncR = r;
                    var s = createNS("feFuncG");
                    s.setAttribute("type", "table"), i.appendChild(s), this.feFuncG = s;
                    var a = createNS("feFuncB");
                    a.setAttribute("type", "table"), i.appendChild(a), this.feFuncB = a
                }

                function SVGProLevelsFilter(t, e) {
                    this.filterManager = e;
                    var n = this.filterManager.effectElements,
                        i = createNS("feComponentTransfer");
                    (n[10].p.k || 0 !== n[10].p.v || n[11].p.k || 1 !== n[11].p.v || n[12].p.k || 1 !== n[12].p.v || n[13].p.k || 0 !== n[13].p.v || n[14].p.k || 1 !== n[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", i)), (n[17].p.k || 0 !== n[17].p.v || n[18].p.k || 1 !== n[18].p.v || n[19].p.k || 1 !== n[19].p.v || n[20].p.k || 0 !== n[20].p.v || n[21].p.k || 1 !== n[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", i)), (n[24].p.k || 0 !== n[24].p.v || n[25].p.k || 1 !== n[25].p.v || n[26].p.k || 1 !== n[26].p.v || n[27].p.k || 0 !== n[27].p.v || n[28].p.k || 1 !== n[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", i)), (n[31].p.k || 0 !== n[31].p.v || n[32].p.k || 1 !== n[32].p.v || n[33].p.k || 1 !== n[33].p.v || n[34].p.k || 0 !== n[34].p.v || n[35].p.k || 1 !== n[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", i)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), i = createNS("feComponentTransfer")), (n[3].p.k || 0 !== n[3].p.v || n[4].p.k || 1 !== n[4].p.v || n[5].p.k || 1 !== n[5].p.v || n[6].p.k || 0 !== n[6].p.v || n[7].p.k || 1 !== n[7].p.v) && (i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), this.feFuncRComposed = this.createFeFunc("feFuncR", i), this.feFuncGComposed = this.createFeFunc("feFuncG", i), this.feFuncBComposed = this.createFeFunc("feFuncB", i))
                }

                function SVGDropShadowEffect(t, e) {
                    t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "400%"), t.setAttribute("height", "400%"), this.filterManager = e;
                    var n = createNS("feGaussianBlur");
                    n.setAttribute("in", "SourceAlpha"), n.setAttribute("result", "drop_shadow_1"), n.setAttribute("stdDeviation", "0"), this.feGaussianBlur = n, t.appendChild(n);
                    var i = createNS("feOffset");
                    i.setAttribute("dx", "25"), i.setAttribute("dy", "0"), i.setAttribute("in", "drop_shadow_1"), i.setAttribute("result", "drop_shadow_2"), this.feOffset = i, t.appendChild(i);
                    var r = createNS("feFlood");
                    r.setAttribute("flood-color", "#00ff00"), r.setAttribute("flood-opacity", "1"), r.setAttribute("result", "drop_shadow_3"), this.feFlood = r, t.appendChild(r);
                    var s = createNS("feComposite");
                    s.setAttribute("in", "drop_shadow_3"), s.setAttribute("in2", "drop_shadow_2"), s.setAttribute("operator", "in"), s.setAttribute("result", "drop_shadow_4"), t.appendChild(s);
                    var a, o = createNS("feMerge");
                    t.appendChild(o), a = createNS("feMergeNode"), o.appendChild(a), (a = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), this.feMergeNode = a, this.feMerge = o, this.originalNodeAdded = !1, o.appendChild(a)
                }
                ShapeTransformManager.prototype = {
                    addTransformSequence: function(t) {
                        var e, n = t.length,
                            i = "_";
                        for (e = 0; e < n; e += 1) i += t[e].transform.key + "_";
                        var r = this.sequences[i];
                        return r || (r = {
                            transforms: [].concat(t),
                            finalTransform: new Matrix,
                            _mdf: !1
                        }, this.sequences[i] = r, this.sequenceList.push(r)), r
                    },
                    processSequence: function(t, e) {
                        for (var n, i = 0, r = t.transforms.length, s = e; i < r && !e;) {
                            if (t.transforms[i].transform.mProps._mdf) {
                                s = !0;
                                break
                            }
                            i += 1
                        }
                        if (s)
                            for (t.finalTransform.reset(), i = r - 1; i >= 0; i -= 1) t.finalTransform.transform((n = t.transforms[i].transform.mProps.v.props)[0], n[1], n[2], n[3], n[4], n[5], n[6], n[7], n[8], n[9], n[10], n[11], n[12], n[13], n[14], n[15]);
                        t._mdf = s
                    },
                    processSequences: function(t) {
                        var e, n = this.sequenceList.length;
                        for (e = 0; e < n; e += 1) this.processSequence(this.sequenceList[e], t)
                    },
                    getNewKey: function() {
                        return "_" + this.transform_key_count++
                    }
                }, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, BaseElement.prototype = {
                    checkMasks: function() {
                        if (!this.data.hasMask) return !1;
                        for (var t = 0, e = this.data.masksProperties.length; t < e;) {
                            if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                            t += 1
                        }
                        return !1
                    },
                    initExpressions: function() {
                        this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                        var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
                        this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface)
                    },
                    setBlendMode: function() {
                        var t = getBlendMode(this.data.bm);
                        (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
                    },
                    initBaseData: function(t, e, n) {
                        this.globalData = e, this.comp = n, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
                    },
                    getType: function() {
                        return this.type
                    },
                    sourceRectAtTime: function() {}
                }, NullElement.prototype.prepareFrame = function(t) {
                    this.prepareProperties(t, !0)
                }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
                    return null
                }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), SVGBaseElement.prototype = {
                    initRendererElement: function() {
                        this.layerElement = createNS("g")
                    },
                    createContainerElements: function() {
                        this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                        var t, e, n, i = null;
                        if (this.data.td) {
                            if (3 == this.data.td || 1 == this.data.td) {
                                var r = createNS("mask");
                                r.setAttribute("id", this.layerId), r.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), r.appendChild(this.layerElement), i = r, this.globalData.defs.appendChild(r), featureSupport.maskType || 1 != this.data.td || (r.setAttribute("mask-type", "luminance"), t = createElementID(), e = filtersFactory.createFilter(t), this.globalData.defs.appendChild(e), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (n = createNS("g")).appendChild(this.layerElement), i = n, r.appendChild(n), n.setAttribute("filter", "url(" + locationHref + "#" + t + ")"))
                            } else if (2 == this.data.td) {
                                var s = createNS("mask");
                                s.setAttribute("id", this.layerId), s.setAttribute("mask-type", "alpha");
                                var a = createNS("g");
                                s.appendChild(a), t = createElementID(), e = filtersFactory.createFilter(t);
                                var o = createNS("feComponentTransfer");
                                o.setAttribute("in", "SourceGraphic"), e.appendChild(o);
                                var l = createNS("feFuncA");
                                l.setAttribute("type", "table"), l.setAttribute("tableValues", "1.0 0.0"), o.appendChild(l), this.globalData.defs.appendChild(e);
                                var h = createNS("rect");
                                h.setAttribute("width", this.comp.data.w), h.setAttribute("height", this.comp.data.h), h.setAttribute("x", "0"), h.setAttribute("y", "0"), h.setAttribute("fill", "#ffffff"), h.setAttribute("opacity", "0"), a.setAttribute("filter", "url(" + locationHref + "#" + t + ")"), a.appendChild(h), a.appendChild(this.layerElement), i = a, featureSupport.maskType || (s.setAttribute("mask-type", "luminance"), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), n = createNS("g"), a.appendChild(h), n.appendChild(this.layerElement), i = n, a.appendChild(n)), this.globalData.defs.appendChild(s)
                            }
                        } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), i = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                        if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                            var p = createNS("clipPath"),
                                c = createNS("path");
                            c.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                            var u = createElementID();
                            if (p.setAttribute("id", u), p.appendChild(c), this.globalData.defs.appendChild(p), this.checkMasks()) {
                                var m = createNS("g");
                                m.setAttribute("clip-path", "url(" + locationHref + "#" + u + ")"), m.appendChild(this.layerElement), this.transformedElement = m, i ? i.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                            } else this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + u + ")")
                        }
                        0 !== this.data.bm && this.setBlendMode()
                    },
                    renderElement: function() {
                        this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
                    },
                    destroyBaseElement: function() {
                        this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
                    },
                    getBaseElement: function() {
                        return this.data.hd ? null : this.baseElement
                    },
                    createRenderableComponents: function() {
                        this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this)
                    },
                    setMatte: function(t) {
                        this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")")
                    }
                }, IShapeElement.prototype = {
                    addShapeToModifiers: function(t) {
                        var e, n = this.shapeModifiers.length;
                        for (e = 0; e < n; e += 1) this.shapeModifiers[e].addShape(t)
                    },
                    isShapeInAnimatedModifiers: function(t) {
                        for (var e = this.shapeModifiers.length; 0 < e;)
                            if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
                        return !1
                    },
                    renderModifiers: function() {
                        if (this.shapeModifiers.length) {
                            var t, e = this.shapes.length;
                            for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                            for (t = (e = this.shapeModifiers.length) - 1; t >= 0; t -= 1) this.shapeModifiers[t].processShapes(this._isFirstFrame)
                        }
                    },
                    lcEnum: {
                        1: "butt",
                        2: "round",
                        3: "square"
                    },
                    ljEnum: {
                        1: "miter",
                        2: "round",
                        3: "bevel"
                    },
                    searchProcessedElement: function(t) {
                        for (var e = this.processedElements, n = 0, i = e.length; n < i;) {
                            if (e[n].elem === t) return e[n].pos;
                            n += 1
                        }
                        return 0
                    },
                    addProcessedElement: function(t, e) {
                        for (var n = this.processedElements, i = n.length; i;)
                            if (n[i -= 1].elem === t) return void(n[i].pos = e);
                        n.push(new ProcessedElement(t, e))
                    },
                    prepareFrame: function(t) {
                        this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
                    }
                }, ITextElement.prototype.initElement = function(t, e, n) {
                    this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, n), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, n), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
                }, ITextElement.prototype.prepareFrame = function(t) {
                    this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
                }, ITextElement.prototype.createPathShape = function(t, e) {
                    var n, i, r = e.length,
                        s = "";
                    for (n = 0; n < r; n += 1) s += buildShapeString(i = e[n].ks.k, i.i.length, !0, t);
                    return s
                }, ITextElement.prototype.updateDocumentData = function(t, e) {
                    this.textProperty.updateDocumentData(t, e)
                }, ITextElement.prototype.canResizeFont = function(t) {
                    this.textProperty.canResizeFont(t)
                }, ITextElement.prototype.setMinimumFontSize = function(t) {
                    this.textProperty.setMinimumFontSize(t)
                }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, n, i, r) {
                    switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                        case 1:
                            e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[n]), 0, 0);
                            break;
                        case 2:
                            e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[n]) / 2, 0, 0)
                    }
                    e.translate(i, r, 0)
                }, ITextElement.prototype.buildColor = function(t) {
                    return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
                }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, n) {
                    this.initFrame(), this.initBaseData(t, e, n), this.initTransform(t, e, n), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
                }, ICompElement.prototype.prepareFrame = function(t) {
                    if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
                        if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                        else {
                            var e = this.tm.v;
                            e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
                        }
                        var n, i = this.elements.length;
                        for (this.completeLayers || this.checkLayers(this.renderedFrame), n = i - 1; n >= 0; n -= 1)(this.completeLayers || this.elements[n]) && (this.elements[n].prepareFrame(this.renderedFrame - this.layers[n].st), this.elements[n]._mdf && (this._mdf = !0))
                    }
                }, ICompElement.prototype.renderInnerContent = function() {
                    var t, e = this.layers.length;
                    for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
                }, ICompElement.prototype.setElements = function(t) {
                    this.elements = t
                }, ICompElement.prototype.getElements = function() {
                    return this.elements
                }, ICompElement.prototype.destroyElements = function() {
                    var t, e = this.layers.length;
                    for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
                }, ICompElement.prototype.destroy = function() {
                    this.destroyElements(), this.destroyBaseElement()
                }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
                    var t = this.globalData.getAssetsPath(this.assetData);
                    this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
                }, IImageElement.prototype.sourceRectAtTime = function() {
                    return this.sourceRect
                }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
                    var t = createNS("rect");
                    t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
                }, extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextElement), SVGTextElement.prototype.createContent = function() {
                    this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
                }, SVGTextElement.prototype.buildTextContents = function(t) {
                    for (var e = 0, n = t.length, i = [], r = ""; e < n;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(r), r = "") : r += t[e], e += 1;
                    return i.push(r), i
                }, SVGTextElement.prototype.buildNewText = function() {
                    var t, e, n = this.textProperty.currentData;
                    this.renderedLetters = createSizedArray(n ? n.l.length : 0), this.layerElement.setAttribute("fill", n.fc ? this.buildColor(n.fc) : "rgba(0,0,0,0)"), n.sc && (this.layerElement.setAttribute("stroke", this.buildColor(n.sc)), this.layerElement.setAttribute("stroke-width", n.sw)), this.layerElement.setAttribute("font-size", n.finalSize);
                    var i = this.globalData.fontManager.getFontByName(n.f);
                    if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
                    else {
                        this.layerElement.setAttribute("font-family", i.fFamily);
                        var r = n.fWeight;
                        this.layerElement.setAttribute("font-style", n.fStyle), this.layerElement.setAttribute("font-weight", r)
                    }
                    this.layerElement.setAttribute("aria-label", n.t);
                    var s, a = n.l || [],
                        o = !!this.globalData.fontManager.chars;
                    e = a.length;
                    var l, h = this.mHelper,
                        p = "",
                        c = this.data.singleShape,
                        u = 0,
                        m = 0,
                        f = !0,
                        d = n.tr / 1e3 * n.finalSize;
                    if (!c || o || n.sz) {
                        var g, y, v = this.textSpans.length;
                        for (t = 0; t < e; t += 1) o && c && 0 !== t || (s = v > t ? this.textSpans[t] : createNS(o ? "path" : "text"), v <= t && (s.setAttribute("stroke-linecap", "butt"), s.setAttribute("stroke-linejoin", "round"), s.setAttribute("stroke-miterlimit", "4"), this.textSpans[t] = s, this.layerElement.appendChild(s)), s.style.display = "inherit"), h.reset(), h.scale(n.finalSize / 100, n.finalSize / 100), c && (a[t].n && (u = -d, m += n.yOffset, m += f ? 1 : 0, f = !1), this.applyTextPropertiesToMatrix(n, h, a[t].line, u, m), u += a[t].l || 0, u += d), o ? (l = (g = (y = this.globalData.fontManager.getCharData(n.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(n.f).fFamily)) && y.data || {}).shapes ? g.shapes[0].it : [], c ? p += this.createPathShape(h, l) : s.setAttribute("d", this.createPathShape(h, l))) : (c && s.setAttribute("transform", "translate(" + h.props[12] + "," + h.props[13] + ")"), s.textContent = a[t].val, s.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
                        c && s && s.setAttribute("d", p)
                    } else {
                        var b = this.textContainer,
                            _ = "start";
                        switch (n.j) {
                            case 1:
                                _ = "end";
                                break;
                            case 2:
                                _ = "middle"
                        }
                        b.setAttribute("text-anchor", _), b.setAttribute("letter-spacing", d);
                        var x = this.buildTextContents(n.finalText);
                        for (e = x.length, m = n.ps ? n.ps[1] + n.ascent : 0, t = 0; t < e; t += 1)(s = this.textSpans[t] || createNS("tspan")).textContent = x[t], s.setAttribute("x", 0), s.setAttribute("y", m), s.style.display = "inherit", b.appendChild(s), this.textSpans[t] = s, m += n.finalLineHeight;
                        this.layerElement.appendChild(b)
                    }
                    for (; t < this.textSpans.length;) this.textSpans[t].style.display = "none", t += 1;
                    this._sizeChanged = !0
                }, SVGTextElement.prototype.sourceRectAtTime = function(t) {
                    if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                        this._sizeChanged = !1;
                        var e = this.layerElement.getBBox();
                        this.bbox = {
                            top: e.y,
                            left: e.x,
                            width: e.width,
                            height: e.height
                        }
                    }
                    return this.bbox
                }, SVGTextElement.prototype.renderInnerContent = function() {
                    if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                        var t, e;
                        this._sizeChanged = !0;
                        var n, i, r = this.textAnimator.renderedLetters,
                            s = this.textProperty.currentData.l;
                        for (e = s.length, t = 0; t < e; t += 1) s[t].n || (i = this.textSpans[t], (n = r[t])._mdf.m && i.setAttribute("transform", n.m), n._mdf.o && i.setAttribute("opacity", n.o), n._mdf.sw && i.setAttribute("stroke-width", n.sw), n._mdf.sc && i.setAttribute("stroke", n.sc), n._mdf.fc && i.setAttribute("fill", n.fc))
                    }
                }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
                }, SVGShapeElement.prototype.filterUniqueShapes = function() {
                    var t, e, n, i, r = this.shapes.length,
                        s = this.stylesList.length,
                        a = [],
                        o = !1;
                    for (n = 0; n < s; n += 1) {
                        for (i = this.stylesList[n], o = !1, a.length = 0, t = 0; t < r; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(i) && (a.push(e), o = e._isAnimated || o);
                        a.length > 1 && o && this.setShapesAsAnimated(a)
                    }
                }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
                    var e, n = t.length;
                    for (e = 0; e < n; e += 1) t[e].setAsAnimated()
                }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
                    var n, i = new SVGStyleData(t, e),
                        r = i.pElem;
                    return "st" === t.ty ? n = new SVGStrokeStyleData(this, t, i) : "fl" === t.ty ? n = new SVGFillStyleData(this, t, i) : "gf" !== t.ty && "gs" !== t.ty || (n = new("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, i), this.globalData.defs.appendChild(n.gf), n.maskId && (this.globalData.defs.appendChild(n.ms), this.globalData.defs.appendChild(n.of), r.setAttribute("mask", "url(" + locationHref + "#" + n.maskId + ")"))), "st" !== t.ty && "gs" !== t.ty || (r.setAttribute("stroke-linecap", this.lcEnum[t.lc] || "round"), r.setAttribute("stroke-linejoin", this.ljEnum[t.lj] || "round"), r.setAttribute("fill-opacity", "0"), 1 === t.lj && r.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && r.setAttribute("fill-rule", "evenodd"), t.ln && r.setAttribute("id", t.ln), t.cl && r.setAttribute("class", t.cl), t.bm && (r.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, n), n
                }, SVGShapeElement.prototype.createGroupElement = function(t) {
                    var e = new ShapeGroupData;
                    return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
                }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
                    var n = TransformPropertyFactory.getTransformProperty(this, t, this),
                        i = new SVGTransformData(n, n.o, e);
                    return this.addToAnimatedContents(t, i), i
                }, SVGShapeElement.prototype.createShapeElement = function(t, e, n) {
                    var i = 4;
                    "rc" === t.ty ? i = 5 : "el" === t.ty ? i = 6 : "sr" === t.ty && (i = 7);
                    var r = new SVGShapeData(e, n, ShapePropertyFactory.getShapeProp(this, t, i, this));
                    return this.shapes.push(r), this.addShapeToModifiers(r), this.addToAnimatedContents(t, r), r
                }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
                    for (var n = 0, i = this.animatedContents.length; n < i;) {
                        if (this.animatedContents[n].element === e) return;
                        n += 1
                    }
                    this.animatedContents.push({
                        fn: SVGElementsRenderer.createRenderFunction(t),
                        element: e,
                        data: t
                    })
                }, SVGShapeElement.prototype.setElementStyles = function(t) {
                    var e, n = t.styles,
                        i = this.stylesList.length;
                    for (e = 0; e < i; e += 1) this.stylesList[e].closed || n.push(this.stylesList[e])
                }, SVGShapeElement.prototype.reloadShapes = function() {
                    this._isFirstFrame = !0;
                    var t, e = this.itemsData.length;
                    for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                    for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                    this.renderModifiers()
                }, SVGShapeElement.prototype.searchShapes = function(t, e, n, i, r, s, a) {
                    var o, l, h, p, c, u = [].concat(s),
                        m = t.length - 1,
                        f = [],
                        d = [];
                    for (o = m; o >= 0; o -= 1) {
                        if ((c = this.searchProcessedElement(t[o])) ? e[o] = n[c - 1] : t[o]._render = a, "fl" == t[o].ty || "st" == t[o].ty || "gf" == t[o].ty || "gs" == t[o].ty) c ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], r), t[o]._render && i.appendChild(e[o].style.pElem), f.push(e[o].style);
                        else if ("gr" == t[o].ty) {
                            if (c)
                                for (h = e[o].it.length, l = 0; l < h; l += 1) e[o].prevViewData[l] = e[o].it[l];
                            else e[o] = this.createGroupElement(t[o]);
                            this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, r + 1, u, a), t[o]._render && i.appendChild(e[o].gr)
                        } else "tr" == t[o].ty ? (c || (e[o] = this.createTransformElement(t[o], i)), u.push(e[o].transform)) : "sh" == t[o].ty || "rc" == t[o].ty || "el" == t[o].ty || "sr" == t[o].ty ? (c || (e[o] = this.createShapeElement(t[o], u, r)), this.setElementStyles(e[o])) : "tm" == t[o].ty || "rd" == t[o].ty || "ms" == t[o].ty ? (c ? (p = e[o]).closed = !1 : ((p = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = p, this.shapeModifiers.push(p)), d.push(p)) : "rp" == t[o].ty && (c ? (p = e[o]).closed = !0 : (p = ShapeModifiers.getModifier(t[o].ty), e[o] = p, p.init(this, t, o, e), this.shapeModifiers.push(p), a = !1), d.push(p));
                        this.addProcessedElement(t[o], o + 1)
                    }
                    for (m = f.length, o = 0; o < m; o += 1) f[o].closed = !0;
                    for (m = d.length, o = 0; o < m; o += 1) d[o].closed = !0
                }, SVGShapeElement.prototype.renderInnerContent = function() {
                    this.renderModifiers();
                    var t, e = this.stylesList.length;
                    for (t = 0; t < e; t += 1) this.stylesList[t].reset();
                    for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
                }, SVGShapeElement.prototype.renderShape = function() {
                    var t, e, n = this.animatedContents.length;
                    for (t = 0; t < n; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
                }, SVGShapeElement.prototype.destroy = function() {
                    this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
                }, SVGTintFilter.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        var e = this.filterManager.effectElements[0].p.v,
                            n = this.filterManager.effectElements[1].p.v;
                        this.matrixFilter.setAttribute("values", n[0] - e[0] + " 0 0 0 " + e[0] + " " + (n[1] - e[1]) + " 0 0 0 " + e[1] + " " + (n[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + this.filterManager.effectElements[2].p.v / 100 + " 0")
                    }
                }, SVGFillFilter.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        var e = this.filterManager.effectElements[2].p.v;
                        this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + this.filterManager.effectElements[6].p.v + " 0")
                    }
                }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        var e = .3 * this.filterManager.effectElements[0].p.v,
                            n = this.filterManager.effectElements[1].p.v;
                        this.feGaussianBlur.setAttribute("stdDeviation", (3 == n ? 0 : e) + " " + (2 == n ? 0 : e)), this.feGaussianBlur.setAttribute("edgeMode", 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate")
                    }
                }, SVGStrokeEffect.prototype.initialize = function() {
                    var t, e, n, i, r = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                    for (1 === this.filterManager.effectElements[1].p.v ? (i = this.elem.maskManager.masksProperties.length, n = 0) : i = 1 + (n = this.filterManager.effectElements[0].p.v - 1), (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); n < i; n += 1) t = createNS("path"), e.appendChild(t), this.paths.push({
                        p: t,
                        m: n
                    });
                    if (3 === this.filterManager.effectElements[10].p.v) {
                        var s = createNS("mask"),
                            a = createElementID();
                        s.setAttribute("id", a), s.setAttribute("mask-type", "alpha"), s.appendChild(e), this.elem.globalData.defs.appendChild(s);
                        var o = createNS("g");
                        for (o.setAttribute("mask", "url(" + locationHref + "#" + a + ")"); r[0];) o.appendChild(r[0]);
                        this.elem.layerElement.appendChild(o), this.masker = s, e.setAttribute("stroke", "#fff")
                    } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                        if (2 === this.filterManager.effectElements[10].p.v)
                            for (r = this.elem.layerElement.children || this.elem.layerElement.childNodes; r.length;) this.elem.layerElement.removeChild(r[0]);
                        this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
                    }
                    this.initialized = !0, this.pathMasker = e
                }, SVGStrokeEffect.prototype.renderFrame = function(t) {
                    this.initialized || this.initialize();
                    var e, n, i, r = this.paths.length;
                    for (e = 0; e < r; e += 1)
                        if (-1 !== this.paths[e].m && (n = this.elem.maskManager.viewData[this.paths[e].m], i = this.paths[e].p, (t || this.filterManager._mdf || n.prop._mdf) && i.setAttribute("d", n.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || n.prop._mdf)) {
                            var s;
                            if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                                var a = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
                                    o = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
                                    l = i.getTotalLength();
                                s = "0 0 0 " + l * a + " ";
                                var h, p = Math.floor(l * (o - a) / (1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100));
                                for (h = 0; h < p; h += 1) s += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100 + " ";
                                s += "0 " + 10 * l + " 0 0"
                            } else s = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100;
                            i.setAttribute("stroke-dasharray", s)
                        }
                    if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
                        var c = this.filterManager.effectElements[3].p.v;
                        this.pathMasker.setAttribute("stroke", "rgb(" + bm_floor(255 * c[0]) + "," + bm_floor(255 * c[1]) + "," + bm_floor(255 * c[2]) + ")")
                    }
                }, SVGTritoneFilter.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        var e = this.filterManager.effectElements[0].p.v,
                            n = this.filterManager.effectElements[1].p.v,
                            i = this.filterManager.effectElements[2].p.v,
                            r = i[1] + " " + n[1] + " " + e[1],
                            s = i[2] + " " + n[2] + " " + e[2];
                        this.feFuncR.setAttribute("tableValues", i[0] + " " + n[0] + " " + e[0]), this.feFuncG.setAttribute("tableValues", r), this.feFuncB.setAttribute("tableValues", s)
                    }
                }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
                    var n = createNS(t);
                    return n.setAttribute("type", "table"), e.appendChild(n), n
                }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, n, i, r) {
                    for (var s, a, o = 0, l = Math.min(t, e), h = Math.max(t, e), p = Array.call(null, {
                            length: 256
                        }), c = 0, u = r - i, m = e - t; o <= 256;) a = (s = o / 256) <= l ? m < 0 ? r : i : s >= h ? m < 0 ? i : r : i + u * Math.pow((s - t) / m, 1 / n), p[c++] = a, o += 256 / 255;
                    return p.join(" ")
                }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        var e, n = this.filterManager.effectElements;
                        this.feFuncRComposed && (t || n[3].p._mdf || n[4].p._mdf || n[5].p._mdf || n[6].p._mdf || n[7].p._mdf) && (e = this.getTableValue(n[3].p.v, n[4].p.v, n[5].p.v, n[6].p.v, n[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || n[10].p._mdf || n[11].p._mdf || n[12].p._mdf || n[13].p._mdf || n[14].p._mdf) && (e = this.getTableValue(n[10].p.v, n[11].p.v, n[12].p.v, n[13].p.v, n[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || n[17].p._mdf || n[18].p._mdf || n[19].p._mdf || n[20].p._mdf || n[21].p._mdf) && (e = this.getTableValue(n[17].p.v, n[18].p.v, n[19].p.v, n[20].p.v, n[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || n[24].p._mdf || n[25].p._mdf || n[26].p._mdf || n[27].p._mdf || n[28].p._mdf) && (e = this.getTableValue(n[24].p.v, n[25].p.v, n[26].p.v, n[27].p.v, n[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || n[31].p._mdf || n[32].p._mdf || n[33].p._mdf || n[34].p._mdf || n[35].p._mdf) && (e = this.getTableValue(n[31].p.v, n[32].p.v, n[33].p.v, n[34].p.v, n[35].p.v), this.feFuncA.setAttribute("tableValues", e))
                    }
                }, SVGDropShadowEffect.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
                            var e = this.filterManager.effectElements[0].p.v;
                            this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
                        }
                        if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                            var n = this.filterManager.effectElements[3].p.v,
                                i = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                                r = n * Math.cos(i),
                                s = n * Math.sin(i);
                            this.feOffset.setAttribute("dx", r), this.feOffset.setAttribute("dy", s)
                        }
                    }
                };
                var _svgMatteSymbols = [];

                function SVGMatte3Effect(t, e, n) {
                    this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = n, n.matteElement = createNS("g"), n.matteElement.appendChild(n.layerElement), n.matteElement.appendChild(n.transformedElement), n.baseElement = n.matteElement
                }

                function SVGEffects(t) {
                    var e, n, i = t.data.ef ? t.data.ef.length : 0,
                        r = createElementID(),
                        s = filtersFactory.createFilter(r),
                        a = 0;
                    for (this.filters = [], e = 0; e < i; e += 1) n = null, 20 === t.data.ef[e].ty ? (a += 1, n = new SVGTintFilter(s, t.effectsManager.effectElements[e])) : 21 === t.data.ef[e].ty ? (a += 1, n = new SVGFillFilter(s, t.effectsManager.effectElements[e])) : 22 === t.data.ef[e].ty ? n = new SVGStrokeEffect(t, t.effectsManager.effectElements[e]) : 23 === t.data.ef[e].ty ? (a += 1, n = new SVGTritoneFilter(s, t.effectsManager.effectElements[e])) : 24 === t.data.ef[e].ty ? (a += 1, n = new SVGProLevelsFilter(s, t.effectsManager.effectElements[e])) : 25 === t.data.ef[e].ty ? (a += 1, n = new SVGDropShadowEffect(s, t.effectsManager.effectElements[e])) : 28 === t.data.ef[e].ty ? n = new SVGMatte3Effect(s, t.effectsManager.effectElements[e], t) : 29 === t.data.ef[e].ty && (a += 1, n = new SVGGaussianBlurEffect(s, t.effectsManager.effectElements[e])), n && this.filters.push(n);
                    a && (t.globalData.defs.appendChild(s), t.layerElement.setAttribute("filter", "url(" + locationHref + "#" + r + ")")), this.filters.length && t.addRenderableComponent(this)
                }

                function CVContextData() {
                    var t;
                    for (this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1, this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1) this.saved[t] = createTypedArray("float32", 16);
                    this._length = 15
                }

                function CVBaseElement() {}

                function CVImageElement(t, e, n) {
                    this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getImage(this.assetData), this.initElement(t, e, n)
                }

                function CVCompElement(t, e, n) {
                    this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, n), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                        _placeholder: !0
                    }
                }

                function CVMaskElement(t, e) {
                    this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
                    var n, i = this.masksProperties.length,
                        r = !1;
                    for (n = 0; n < i; n++) "n" !== this.masksProperties[n].mode && (r = !0), this.viewData[n] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[n], 3);
                    this.hasMasks = r, r && this.element.addRenderableComponent(this)
                }

                function CVShapeElement(t, e, n) {
                    this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, n)
                }

                function CVSolidElement(t, e, n) {
                    this.initElement(t, e, n)
                }

                function CVTextElement(t, e, n) {
                    this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                        fill: "rgba(0,0,0,0)",
                        stroke: "rgba(0,0,0,0)",
                        sWidth: 0,
                        fValue: ""
                    }, this.initElement(t, e, n)
                }

                function CVEffects() {}

                function HBaseElement(t, e, n) {}

                function HSolidElement(t, e, n) {
                    this.initElement(t, e, n)
                }

                function HCompElement(t, e, n) {
                    this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, n), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                        _placeholder: !0
                    }
                }

                function HShapeElement(t, e, n) {
                    this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, n), this.prevViewData = [], this.currentBBox = {
                        x: 999999,
                        y: -999999,
                        h: 0,
                        w: 0
                    }
                }

                function HTextElement(t, e, n) {
                    this.textSpans = [], this.textPaths = [], this.currentBBox = {
                        x: 999999,
                        y: -999999,
                        h: 0,
                        w: 0
                    }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, n)
                }

                function HImageElement(t, e, n) {
                    this.assetData = e.getAssetData(t.refId), this.initElement(t, e, n)
                }

                function HCameraElement(t, e, n) {
                    this.initFrame(), this.initBaseData(t, e, n), this.initHierarchy();
                    var i = PropertyFactory.getProp;
                    if (this.pe = i(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = i(this, t.ks.p.x, 1, 0, this), this.py = i(this, t.ks.p.y, 1, 0, this), this.pz = i(this, t.ks.p.z, 1, 0, this)) : this.p = i(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
                        var r, s = t.ks.or.k.length;
                        for (r = 0; r < s; r += 1) t.ks.or.k[r].to = null, t.ks.or.k[r].ti = null
                    }
                    this.or = i(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = i(this, t.ks.rx, 0, degToRads, this), this.ry = i(this, t.ks.ry, 0, degToRads, this), this.rz = i(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
                        mProp: this
                    }
                }

                function HEffects() {}
                SVGMatte3Effect.prototype.findSymbol = function(t) {
                    for (var e = 0, n = _svgMatteSymbols.length; e < n;) {
                        if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
                        e += 1
                    }
                    return null
                }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
                    var n = t.layerElement.parentNode;
                    if (n) {
                        for (var i, r = n.children, s = 0, a = r.length; s < a && r[s] !== t.layerElement;) s += 1;
                        s <= a - 2 && (i = r[s + 1]);
                        var o = createNS("use");
                        o.setAttribute("href", "#" + e), i ? n.insertBefore(o, i) : n.appendChild(o)
                    }
                }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
                    if (!this.findSymbol(e)) {
                        var n = createElementID(),
                            i = createNS("mask");
                        i.setAttribute("id", e.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
                        var r = t.globalData.defs;
                        r.appendChild(i);
                        var s = createNS("symbol");
                        s.setAttribute("id", n), this.replaceInParent(e, n), s.appendChild(e.layerElement), r.appendChild(s);
                        var a = createNS("use");
                        a.setAttribute("href", "#" + n), i.appendChild(a), e.data.hd = !1, e.show()
                    }
                    t.setMatte(e.layerId)
                }, SVGMatte3Effect.prototype.initialize = function() {
                    for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, n = 0, i = e.length; n < i;) e[n] && e[n].data.ind === t && this.setElementAsMask(this.elem, e[n]), n += 1;
                    this.initialized = !0
                }, SVGMatte3Effect.prototype.renderFrame = function() {
                    this.initialized || this.initialize()
                }, SVGEffects.prototype.renderFrame = function(t) {
                    var e, n = this.filters.length;
                    for (e = 0; e < n; e += 1) this.filters[e].renderFrame(t)
                }, CVContextData.prototype.duplicate = function() {
                    var t = 2 * this._length,
                        e = this.savedOp;
                    this.savedOp = createTypedArray("float32", t), this.savedOp.set(e);
                    var n = 0;
                    for (n = this._length; n < t; n += 1) this.saved[n] = createTypedArray("float32", 16);
                    this._length = t
                }, CVContextData.prototype.reset = function() {
                    this.cArrPos = 0, this.cTr.reset(), this.cO = 1
                }, CVBaseElement.prototype = {
                    createElements: function() {},
                    initRendererElement: function() {},
                    createContainerElements: function() {
                        this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this)
                    },
                    createContent: function() {},
                    setBlendMode: function() {
                        var t = this.globalData;
                        if (t.blendMode !== this.data.bm) {
                            t.blendMode = this.data.bm;
                            var e = getBlendMode(this.data.bm);
                            t.canvasContext.globalCompositeOperation = e
                        }
                    },
                    createRenderableComponents: function() {
                        this.maskManager = new CVMaskElement(this.data, this)
                    },
                    hideElement: function() {
                        this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
                    },
                    showElement: function() {
                        this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
                    },
                    renderFrame: function() {
                        if (!this.hidden && !this.data.hd) {
                            this.renderTransform(), this.renderRenderable(), this.setBlendMode();
                            var t = 0 === this.data.ty;
                            this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(t), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
                        }
                    },
                    destroy: function() {
                        this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
                    },
                    mHelper: new Matrix
                }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
                    if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                        var t = createTag("canvas");
                        t.width = this.assetData.w, t.height = this.assetData.h;
                        var e, n, i = t.getContext("2d"),
                            r = this.img.width,
                            s = this.img.height,
                            a = r / s,
                            o = this.assetData.w / this.assetData.h,
                            l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                        a > o && "xMidYMid slice" === l || a < o && "xMidYMid slice" !== l ? e = (n = s) * o : n = (e = r) / o, i.drawImage(this.img, (r - e) / 2, (s - n) / 2, e, n, 0, 0, this.assetData.w, this.assetData.h), this.img = t
                    }
                }, CVImageElement.prototype.renderInnerContent = function(t) {
                    this.canvasContext.drawImage(this.img, 0, 0)
                }, CVImageElement.prototype.destroy = function() {
                    this.img = null
                }, extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
                    var t, e = this.canvasContext;
                    for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
                }, CVCompElement.prototype.destroy = function() {
                    var t;
                    for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
                    this.layers = null, this.elements = null
                }, CVMaskElement.prototype.renderFrame = function() {
                    if (this.hasMasks) {
                        var t, e, n, i, r = this.element.finalTransform.mat,
                            s = this.element.canvasContext,
                            a = this.masksProperties.length;
                        for (s.beginPath(), t = 0; t < a; t++)
                            if ("n" !== this.masksProperties[t].mode) {
                                this.masksProperties[t].inv && (s.moveTo(0, 0), s.lineTo(this.element.globalData.compSize.w, 0), s.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), s.lineTo(0, this.element.globalData.compSize.h), s.lineTo(0, 0)), e = r.applyToPointArray((i = this.viewData[t].v).v[0][0], i.v[0][1], 0), s.moveTo(e[0], e[1]);
                                var o, l = i._length;
                                for (o = 1; o < l; o++) n = r.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o]), s.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
                                n = r.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0]), s.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5])
                            }
                        this.element.globalData.renderer.save(!0), s.clip()
                    }
                }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
                    this.element = null
                }, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
                    opacity: 1,
                    _opMdf: !1
                }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
                }, CVShapeElement.prototype.createStyleElement = function(t, e) {
                    var n = {
                            data: t,
                            type: t.ty,
                            preTransforms: this.transformsManager.addTransformSequence(e),
                            transforms: [],
                            elements: [],
                            closed: !0 === t.hd
                        },
                        i = {};
                    if ("fl" == t.ty || "st" == t.ty ? (i.c = PropertyFactory.getProp(this, t.c, 1, 255, this), i.c.k || (n.co = "rgb(" + bm_floor(i.c.v[0]) + "," + bm_floor(i.c.v[1]) + "," + bm_floor(i.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (i.s = PropertyFactory.getProp(this, t.s, 1, null, this), i.e = PropertyFactory.getProp(this, t.e, 1, null, this), i.h = PropertyFactory.getProp(this, t.h || {
                            k: 0
                        }, 0, .01, this), i.a = PropertyFactory.getProp(this, t.a || {
                            k: 0
                        }, 0, degToRads, this), i.g = new GradientProperty(this, t.g, this)), i.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" == t.ty || "gs" == t.ty) {
                        if (n.lc = this.lcEnum[t.lc] || "round", n.lj = this.ljEnum[t.lj] || "round", 1 == t.lj && (n.ml = t.ml), i.w = PropertyFactory.getProp(this, t.w, 0, null, this), i.w.k || (n.wi = i.w.v), t.d) {
                            var r = new DashProperty(this, t.d, "canvas", this);
                            i.d = r, i.d.k || (n.da = i.d.dashArray, n.do = i.d.dashoffset[0])
                        }
                    } else n.r = 2 === t.r ? "evenodd" : "nonzero";
                    return this.stylesList.push(n), i.style = n, i
                }, CVShapeElement.prototype.createGroupElement = function(t) {
                    return {
                        it: [],
                        prevViewData: []
                    }
                }, CVShapeElement.prototype.createTransformElement = function(t) {
                    return {
                        transform: {
                            opacity: 1,
                            _opMdf: !1,
                            key: this.transformsManager.getNewKey(),
                            op: PropertyFactory.getProp(this, t.o, 0, .01, this),
                            mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                        }
                    }
                }, CVShapeElement.prototype.createShapeElement = function(t) {
                    var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
                    return this.shapes.push(e), this.addShapeToModifiers(e), e
                }, CVShapeElement.prototype.reloadShapes = function() {
                    this._isFirstFrame = !0;
                    var t, e = this.itemsData.length;
                    for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                    for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                    this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
                }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
                    var e, n = this.stylesList.length;
                    for (e = 0; e < n; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
                }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
                    var t, e = this.stylesList.length;
                    for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
                }, CVShapeElement.prototype.closeStyles = function(t) {
                    var e, n = t.length;
                    for (e = 0; e < n; e += 1) t[e].closed = !0
                }, CVShapeElement.prototype.searchShapes = function(t, e, n, i, r) {
                    var s, a, o, l, h, p, c = t.length - 1,
                        u = [],
                        m = [],
                        f = [].concat(r);
                    for (s = c; s >= 0; s -= 1) {
                        if ((l = this.searchProcessedElement(t[s])) ? e[s] = n[l - 1] : t[s]._shouldRender = i, "fl" == t[s].ty || "st" == t[s].ty || "gf" == t[s].ty || "gs" == t[s].ty) l ? e[s].style.closed = !1 : e[s] = this.createStyleElement(t[s], f), u.push(e[s].style);
                        else if ("gr" == t[s].ty) {
                            if (l)
                                for (o = e[s].it.length, a = 0; a < o; a += 1) e[s].prevViewData[a] = e[s].it[a];
                            else e[s] = this.createGroupElement(t[s]);
                            this.searchShapes(t[s].it, e[s].it, e[s].prevViewData, i, f)
                        } else "tr" == t[s].ty ? (l || (p = this.createTransformElement(t[s]), e[s] = p), f.push(e[s]), this.addTransformToStyleList(e[s])) : "sh" == t[s].ty || "rc" == t[s].ty || "el" == t[s].ty || "sr" == t[s].ty ? l || (e[s] = this.createShapeElement(t[s])) : "tm" == t[s].ty || "rd" == t[s].ty ? (l ? (h = e[s]).closed = !1 : ((h = ShapeModifiers.getModifier(t[s].ty)).init(this, t[s]), e[s] = h, this.shapeModifiers.push(h)), m.push(h)) : "rp" == t[s].ty && (l ? (h = e[s]).closed = !0 : (h = ShapeModifiers.getModifier(t[s].ty), e[s] = h, h.init(this, t, s, e), this.shapeModifiers.push(h), i = !1), m.push(h));
                        this.addProcessedElement(t[s], s + 1)
                    }
                    for (this.removeTransformFromStyleList(), this.closeStyles(u), c = m.length, s = 0; s < c; s += 1) m[s].closed = !0
                }, CVShapeElement.prototype.renderInnerContent = function() {
                    this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
                }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
                    (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
                }, CVShapeElement.prototype.drawLayer = function() {
                    var t, e, n, i, r, s, a, o, l, h = this.stylesList.length,
                        p = this.globalData.renderer,
                        c = this.globalData.canvasContext;
                    for (t = 0; t < h; t += 1)
                        if (("st" !== (o = (l = this.stylesList[t]).type) && "gs" !== o || 0 !== l.wi) && l.data._shouldRender && 0 !== l.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                            for (p.save(), s = l.elements, "st" === o || "gs" === o ? (c.strokeStyle = "st" === o ? l.co : l.grd, c.lineWidth = l.wi, c.lineCap = l.lc, c.lineJoin = l.lj, c.miterLimit = l.ml || 0) : c.fillStyle = "fl" === o ? l.co : l.grd, p.ctxOpacity(l.coOp), "st" !== o && "gs" !== o && c.beginPath(), p.ctxTransform(l.preTransforms.finalTransform.props), n = s.length, e = 0; e < n; e += 1) {
                                for ("st" !== o && "gs" !== o || (c.beginPath(), l.da && (c.setLineDash(l.da), c.lineDashOffset = l.do)), r = (a = s[e].trNodes).length, i = 0; i < r; i += 1) "m" == a[i].t ? c.moveTo(a[i].p[0], a[i].p[1]) : "c" == a[i].t ? c.bezierCurveTo(a[i].pts[0], a[i].pts[1], a[i].pts[2], a[i].pts[3], a[i].pts[4], a[i].pts[5]) : c.closePath();
                                "st" !== o && "gs" !== o || (c.stroke(), l.da && c.setLineDash(this.dashResetter))
                            }
                            "st" !== o && "gs" !== o && c.fill(l.r), p.restore()
                        }
                }, CVShapeElement.prototype.renderShape = function(t, e, n, i) {
                    var r, s;
                    for (s = t, r = e.length - 1; r >= 0; r -= 1) "tr" == e[r].ty ? this.renderShapeTransform(t, s = n[r].transform) : "sh" == e[r].ty || "el" == e[r].ty || "rc" == e[r].ty || "sr" == e[r].ty ? this.renderPath(e[r], n[r]) : "fl" == e[r].ty ? this.renderFill(e[r], n[r], s) : "st" == e[r].ty ? this.renderStroke(e[r], n[r], s) : "gf" == e[r].ty || "gs" == e[r].ty ? this.renderGradientFill(e[r], n[r], s) : "gr" == e[r].ty && this.renderShape(s, e[r].it, n[r].it);
                    i && this.drawLayer()
                }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
                    if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                        var n, i, r, s = t.trNodes,
                            a = e.paths,
                            o = a._length;
                        s.length = 0;
                        var l = t.transforms.finalTransform;
                        for (r = 0; r < o; r += 1) {
                            var h = a.shapes[r];
                            if (h && h.v) {
                                for (i = h._length, n = 1; n < i; n += 1) 1 === n && s.push({
                                    t: "m",
                                    p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                                }), s.push({
                                    t: "c",
                                    pts: l.applyToTriplePoints(h.o[n - 1], h.i[n], h.v[n])
                                });
                                1 === i && s.push({
                                    t: "m",
                                    p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                                }), h.c && i && (s.push({
                                    t: "c",
                                    pts: l.applyToTriplePoints(h.o[n - 1], h.i[0], h.v[0])
                                }), s.push({
                                    t: "z"
                                }))
                            }
                        }
                        t.trNodes = s
                    }
                }, CVShapeElement.prototype.renderPath = function(t, e) {
                    if (!0 !== t.hd && t._shouldRender) {
                        var n, i = e.styledShapes.length;
                        for (n = 0; n < i; n += 1) this.renderStyledShape(e.styledShapes[n], e.sh)
                    }
                }, CVShapeElement.prototype.renderFill = function(t, e, n) {
                    var i = e.style;
                    (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || n._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * n.opacity)
                }, CVShapeElement.prototype.renderGradientFill = function(t, e, n) {
                    var i = e.style;
                    if (!i.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
                        var r = this.globalData.canvasContext,
                            s = e.s.v,
                            a = e.e.v;
                        if (1 === t.t) u = r.createLinearGradient(s[0], s[1], a[0], a[1]);
                        else var o = Math.sqrt(Math.pow(s[0] - a[0], 2) + Math.pow(s[1] - a[1], 2)),
                            l = Math.atan2(a[1] - s[1], a[0] - s[0]),
                            h = o * (e.h.v >= 1 ? .99 : e.h.v <= -1 ? -.99 : e.h.v),
                            p = Math.cos(l + e.a.v) * h + s[0],
                            c = Math.sin(l + e.a.v) * h + s[1],
                            u = r.createRadialGradient(p, c, 0, s[0], s[1], o);
                        var m, f = t.g.p,
                            d = e.g.c,
                            g = 1;
                        for (m = 0; m < f; m += 1) e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * m + 1]), u.addColorStop(d[4 * m] / 100, "rgba(" + d[4 * m + 1] + "," + d[4 * m + 2] + "," + d[4 * m + 3] + "," + g + ")");
                        i.grd = u
                    }
                    i.coOp = e.o.v * n.opacity
                }, CVShapeElement.prototype.renderStroke = function(t, e, n) {
                    var i = e.style,
                        r = e.d;
                    r && (r._mdf || this._isFirstFrame) && (i.da = r.dashArray, i.do = r.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || n._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * n.opacity), (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v)
                }, CVShapeElement.prototype.destroy = function() {
                    this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
                }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
                    var t = this.canvasContext;
                    t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh)
                }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
                    var t = this.textProperty.currentData;
                    this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                    var e = !1;
                    t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
                    var n = !1;
                    t.sc && (n = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
                    var i, r, s = this.globalData.fontManager.getFontByName(t.f),
                        a = t.l,
                        o = this.mHelper;
                    this.stroke = n, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, r = t.finalText.length;
                    var l, h, p, c, u, m, f, d, g, y, v = this.data.singleShape,
                        b = t.tr / 1e3 * t.finalSize,
                        _ = 0,
                        x = 0,
                        E = !0,
                        P = 0;
                    for (i = 0; i < r; i += 1) {
                        for (h = (l = this.globalData.fontManager.getCharData(t.finalText[i], s.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && l.data || {}, o.reset(), v && a[i].n && (_ = -b, x += t.yOffset, x += E ? 1 : 0, E = !1), f = (u = h.shapes ? h.shapes[0].it : []).length, o.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, o, a[i].line, _, x), g = createSizedArray(f), m = 0; m < f; m += 1) {
                            for (c = u[m].ks.k.i.length, d = u[m].ks.k, y = [], p = 1; p < c; p += 1) 1 == p && y.push(o.applyToX(d.v[0][0], d.v[0][1], 0), o.applyToY(d.v[0][0], d.v[0][1], 0)), y.push(o.applyToX(d.o[p - 1][0], d.o[p - 1][1], 0), o.applyToY(d.o[p - 1][0], d.o[p - 1][1], 0), o.applyToX(d.i[p][0], d.i[p][1], 0), o.applyToY(d.i[p][0], d.i[p][1], 0), o.applyToX(d.v[p][0], d.v[p][1], 0), o.applyToY(d.v[p][0], d.v[p][1], 0));
                            y.push(o.applyToX(d.o[p - 1][0], d.o[p - 1][1], 0), o.applyToY(d.o[p - 1][0], d.o[p - 1][1], 0), o.applyToX(d.i[0][0], d.i[0][1], 0), o.applyToY(d.i[0][0], d.i[0][1], 0), o.applyToX(d.v[0][0], d.v[0][1], 0), o.applyToY(d.v[0][0], d.v[0][1], 0)), g[m] = y
                        }
                        v && (_ += a[i].l, _ += b), this.textSpans[P] ? this.textSpans[P].elem = g : this.textSpans[P] = {
                            elem: g
                        }, P += 1
                    }
                }, CVTextElement.prototype.renderInnerContent = function() {
                    var t, e, n, i, r, s, a = this.canvasContext;
                    a.font = this.values.fValue, a.lineCap = "butt", a.lineJoin = "miter", a.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                    var o, l = this.textAnimator.renderedLetters,
                        h = this.textProperty.currentData.l;
                    e = h.length;
                    var p, c, u = null,
                        m = null,
                        f = null;
                    for (t = 0; t < e; t += 1)
                        if (!h[t].n) {
                            if ((o = l[t]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) {
                                for (o && o.fc ? u !== o.fc && (u = o.fc, a.fillStyle = o.fc) : u !== this.values.fill && (u = this.values.fill, a.fillStyle = this.values.fill), i = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), n = 0; n < i; n += 1)
                                    for (s = (c = p[n]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), r = 2; r < s; r += 6) this.globalData.canvasContext.bezierCurveTo(c[r], c[r + 1], c[r + 2], c[r + 3], c[r + 4], c[r + 5]);
                                this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
                            }
                            if (this.stroke) {
                                for (o && o.sw ? f !== o.sw && (f = o.sw, a.lineWidth = o.sw) : f !== this.values.sWidth && (f = this.values.sWidth, a.lineWidth = this.values.sWidth), o && o.sc ? m !== o.sc && (m = o.sc, a.strokeStyle = o.sc) : m !== this.values.stroke && (m = this.values.stroke, a.strokeStyle = this.values.stroke), i = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), n = 0; n < i; n += 1)
                                    for (s = (c = p[n]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), r = 2; r < s; r += 6) this.globalData.canvasContext.bezierCurveTo(c[r], c[r + 1], c[r + 2], c[r + 3], c[r + 4], c[r + 5]);
                                this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
                            }
                            o && this.globalData.renderer.restore()
                        }
                }, CVEffects.prototype.renderFrame = function() {}, HBaseElement.prototype = {
                    checkBlendMode: function() {},
                    initRendererElement: function() {
                        this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
                    },
                    createContainerElements: function() {
                        this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
                    },
                    renderElement: function() {
                        this.finalTransform._matMdf && (this.transformedElement.style.transform = this.transformedElement.style.webkitTransform = this.finalTransform.mat.toCSS()), this.finalTransform._opMdf && (this.transformedElement.style.opacity = this.finalTransform.mProp.o.v)
                    },
                    renderFrame: function() {
                        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                    },
                    destroy: function() {
                        this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
                    },
                    createRenderableComponents: function() {
                        this.maskManager = new MaskElement(this.data, this, this.globalData)
                    },
                    addEffects: function() {},
                    setMatte: function() {}
                }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
                    var t;
                    this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
                }, extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
                    this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
                }, HCompElement.prototype.addTo3dContainer = function(t, e) {
                    for (var n, i = 0; i < e;) this.elements[i] && this.elements[i].getBaseElement && (n = this.elements[i].getBaseElement()), i += 1;
                    n ? this.layerElement.insertBefore(t, n) : this.layerElement.appendChild(t)
                }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
                    var t;
                    if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
                    else {
                        t = createNS("svg");
                        var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                        t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
                    }
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
                }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
                    var n, i = t.length;
                    for (n = 0; n < i; n += 1) e = t[n].mProps.v.applyToPointArray(e[0], e[1], 0);
                    return e
                }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
                    var n, i, r, s, a, o = t.sh.v,
                        l = t.transformers,
                        h = o._length;
                    if (!(h <= 1)) {
                        for (n = 0; n < h - 1; n += 1) i = this.getTransformedPoint(l, o.v[n]), r = this.getTransformedPoint(l, o.o[n]), s = this.getTransformedPoint(l, o.i[n + 1]), a = this.getTransformedPoint(l, o.v[n + 1]), this.checkBounds(i, r, s, a, e);
                        o.c && (i = this.getTransformedPoint(l, o.v[n]), r = this.getTransformedPoint(l, o.o[n]), s = this.getTransformedPoint(l, o.i[0]), a = this.getTransformedPoint(l, o.v[0]), this.checkBounds(i, r, s, a, e))
                    }
                }, HShapeElement.prototype.checkBounds = function(t, e, n, i, r) {
                    this.getBoundsOfCurve(t, e, n, i);
                    var s = this.shapeBoundingBox;
                    r.x = bm_min(s.left, r.x), r.xMax = bm_max(s.right, r.xMax), r.y = bm_min(s.top, r.y), r.yMax = bm_max(s.bottom, r.yMax)
                }, HShapeElement.prototype.shapeBoundingBox = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }, HShapeElement.prototype.tempBoundingBox = {
                    x: 0,
                    xMax: 0,
                    y: 0,
                    yMax: 0,
                    width: 0,
                    height: 0
                }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, n, i) {
                    for (var r, s, a, o, l, h, p, c = [
                            [t[0], i[0]],
                            [t[1], i[1]]
                        ], u = 0; u < 2; ++u)
                        if (s = 6 * t[u] - 12 * e[u] + 6 * n[u], r = -3 * t[u] + 9 * e[u] - 9 * n[u] + 3 * i[u], a = 3 * e[u] - 3 * t[u], s |= 0, a |= 0, 0 != (r |= 0))(l = s * s - 4 * a * r) < 0 || (0 < (h = (-s + bm_sqrt(l)) / (2 * r)) && h < 1 && c[u].push(this.calculateF(h, t, e, n, i, u)), 0 < (p = (-s - bm_sqrt(l)) / (2 * r)) && p < 1 && c[u].push(this.calculateF(p, t, e, n, i, u)));
                        else {
                            if (0 === s) continue;
                            0 < (o = -a / s) && o < 1 && c[u].push(this.calculateF(o, t, e, n, i, u))
                        }
                    this.shapeBoundingBox.left = bm_min.apply(null, c[0]), this.shapeBoundingBox.top = bm_min.apply(null, c[1]), this.shapeBoundingBox.right = bm_max.apply(null, c[0]), this.shapeBoundingBox.bottom = bm_max.apply(null, c[1])
                }, HShapeElement.prototype.calculateF = function(t, e, n, i, r, s) {
                    return bm_pow(1 - t, 3) * e[s] + 3 * bm_pow(1 - t, 2) * t * n[s] + 3 * (1 - t) * bm_pow(t, 2) * i[s] + bm_pow(t, 3) * r[s]
                }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
                    var n, i = t.length;
                    for (n = 0; n < i; n += 1) t[n] && t[n].sh ? this.calculateShapeBoundingBox(t[n], e) : t[n] && t[n].it && this.calculateBoundingBox(t[n].it, e)
                }, HShapeElement.prototype.currentBoxContains = function(t) {
                    return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
                }, HShapeElement.prototype.renderInnerContent = function() {
                    if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                        var t = this.tempBoundingBox,
                            e = 999999;
                        if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
                        var n = !1;
                        this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), n = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), n = !0), (n || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) && (this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.shapeCont.style.transform = this.shapeCont.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)")
                    }
                }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
                    if (this.isMasked = this.checkMasks(), this.isMasked) {
                        this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                        var t = createNS("g");
                        this.maskedElement.appendChild(t), this.innerElem = t
                    } else this.renderType = "html", this.innerElem = this.layerElement;
                    this.checkParenting()
                }, HTextElement.prototype.buildNewText = function() {
                    var t = this.textProperty.currentData;
                    this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                    var e = this.innerElem.style;
                    e.color = e.fill = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)", t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
                    var n, i, r = this.globalData.fontManager.getFontByName(t.f);
                    if (!this.globalData.fontManager.chars)
                        if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", r.fClass) this.innerElem.className = r.fClass;
                        else {
                            e.fontFamily = r.fFamily;
                            var s = t.fWeight;
                            e.fontStyle = t.fStyle, e.fontWeight = s
                        }
                    var a, o, l, h = t.l;
                    i = h.length;
                    var p, c = this.mHelper,
                        u = "",
                        m = 0;
                    for (n = 0; n < i; n += 1) {
                        if (this.globalData.fontManager.chars ? (this.textPaths[m] ? a = this.textPaths[m] : ((a = createNS("path")).setAttribute("stroke-linecap", "butt"), a.setAttribute("stroke-linejoin", "round"), a.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? l = (o = this.textSpans[m]).children[0] : ((o = createTag("div")).style.lineHeight = 0, (l = createNS("svg")).appendChild(a), styleDiv(o)))) : this.isMasked ? a = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (o = this.textSpans[m], a = this.textPaths[m]) : (styleDiv(o = createTag("span")), styleDiv(a = createTag("span")), o.appendChild(a)), this.globalData.fontManager.chars) {
                            var f, d = this.globalData.fontManager.getCharData(t.finalText[n], r.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                            if (f = d ? d.data : null, c.reset(), f && f.shapes && (p = f.shapes[0].it, c.scale(t.finalSize / 100, t.finalSize / 100), u = this.createPathShape(c, p), a.setAttribute("d", u)), this.isMasked) this.innerElem.appendChild(a);
                            else {
                                if (this.innerElem.appendChild(o), f && f.shapes) {
                                    document.body.appendChild(l);
                                    var g = l.getBBox();
                                    l.setAttribute("width", g.width + 2), l.setAttribute("height", g.height + 2), l.setAttribute("viewBox", g.x - 1 + " " + (g.y - 1) + " " + (g.width + 2) + " " + (g.height + 2)), l.style.transform = l.style.webkitTransform = "translate(" + (g.x - 1) + "px," + (g.y - 1) + "px)", h[n].yOffset = g.y - 1
                                } else l.setAttribute("width", 1), l.setAttribute("height", 1);
                                o.appendChild(l)
                            }
                        } else a.textContent = h[n].val, a.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked ? this.innerElem.appendChild(a) : (this.innerElem.appendChild(o), a.style.transform = a.style.webkitTransform = "translate3d(0," + -t.finalSize / 1.2 + "px,0)");
                        this.textSpans[m] = this.isMasked ? a : o, this.textSpans[m].style.display = "block", this.textPaths[m] = a, m += 1
                    }
                    for (; m < this.textSpans.length;) this.textSpans[m].style.display = "none", m += 1
                }, HTextElement.prototype.renderInnerContent = function() {
                    if (this.data.singleShape) {
                        if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                        this.isMasked && this.finalTransform._matMdf && (this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), this.svgElement.style.transform = this.svgElement.style.webkitTransform = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)")
                    }
                    if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                        var t, e, n, i, r, s = 0,
                            a = this.textAnimator.renderedLetters,
                            o = this.textProperty.currentData.l;
                        for (e = o.length, t = 0; t < e; t += 1) o[t].n ? s += 1 : (i = this.textSpans[t], r = this.textPaths[t], n = a[s], s += 1, n._mdf.m && (this.isMasked ? i.setAttribute("transform", n.m) : i.style.transform = i.style.webkitTransform = n.m), i.style.opacity = n.o, n.sw && n._mdf.sw && r.setAttribute("stroke-width", n.sw), n.sc && n._mdf.sc && r.setAttribute("stroke", n.sc), n.fc && n._mdf.fc && (r.setAttribute("fill", n.fc), r.style.color = n.fc));
                        if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                            var l = this.innerElem.getBBox();
                            this.currentBBox.w !== l.width && (this.currentBBox.w = l.width, this.svgElement.setAttribute("width", l.width)), this.currentBBox.h !== l.height && (this.currentBBox.h = l.height, this.svgElement.setAttribute("height", l.height)), this.currentBBox.w === l.width + 2 && this.currentBBox.h === l.height + 2 && this.currentBBox.x === l.x - 1 && this.currentBBox.y === l.y - 1 || (this.currentBBox.w = l.width + 2, this.currentBBox.h = l.height + 2, this.currentBBox.x = l.x - 1, this.currentBBox.y = l.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.svgElement.style.transform = this.svgElement.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)")
                        }
                    }
                }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
                    var t = this.globalData.getAssetsPath(this.assetData),
                        e = new Image;
                    this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
                }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
                    var t, e, n = this.comp.threeDElements.length;
                    for (t = 0; t < n; t += 1) "3d" === (e = this.comp.threeDElements[t]).type && (e.perspectiveElem.style.perspective = e.perspectiveElem.style.webkitPerspective = this.pe.v + "px", e.container.style.transformOrigin = e.container.style.mozTransformOrigin = e.container.style.webkitTransformOrigin = "0px 0px 0px", e.perspectiveElem.style.transform = e.perspectiveElem.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)")
                }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
                    var t, e, n = this._isFirstFrame;
                    if (this.hierarchy)
                        for (e = this.hierarchy.length, t = 0; t < e; t += 1) n = this.hierarchy[t].finalTransform.mProp._mdf || n;
                    if (n || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                        if (this.mat.reset(), this.hierarchy)
                            for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                                var i = this.hierarchy[t].finalTransform.mProp;
                                this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2])
                            }
                        if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                            var r;
                            r = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                            var s = Math.sqrt(Math.pow(r[0], 2) + Math.pow(r[1], 2) + Math.pow(r[2], 2)),
                                a = [r[0] / s, r[1] / s, r[2] / s],
                                o = Math.sqrt(a[2] * a[2] + a[0] * a[0]),
                                l = Math.atan2(a[1], o),
                                h = Math.atan2(a[0], -a[2]);
                            this.mat.rotateY(h).rotateX(-l)
                        }
                        this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                        var p = !this._prevMat.equals(this.mat);
                        if ((p || this.pe._mdf) && this.comp.threeDElements) {
                            var c;
                            for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1) "3d" === (c = this.comp.threeDElements[t]).type && (p && (c.container.style.transform = c.container.style.webkitTransform = this.mat.toCSS()), this.pe._mdf && (c.perspectiveElem.style.perspective = c.perspectiveElem.style.webkitPerspective = this.pe.v + "px"));
                            this.mat.clone(this._prevMat)
                        }
                    }
                    this._isFirstFrame = !1
                }, HCameraElement.prototype.prepareFrame = function(t) {
                    this.prepareProperties(t, !0)
                }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
                    return null
                }, HEffects.prototype.renderFrame = function() {};
                var animationManager = function() {
                        var t = {},
                            e = [],
                            n = 0,
                            i = 0,
                            r = 0,
                            s = !0,
                            a = !1;

                        function o(t) {
                            for (var n = 0, r = t.target; n < i;) e[n].animation === r && (e.splice(n, 1), n -= 1, i -= 1, r.isPaused || p()), n += 1
                        }

                        function l(t, n) {
                            if (!t) return null;
                            for (var r = 0; r < i;) {
                                if (e[r].elem == t && null !== e[r].elem) return e[r].animation;
                                r += 1
                            }
                            var s = new AnimationItem;
                            return c(s, t), s.setData(t, n), s
                        }

                        function h() {
                            r += 1, f()
                        }

                        function p() {
                            r -= 1
                        }

                        function c(t, n) {
                            t.addEventListener("destroy", o), t.addEventListener("_active", h), t.addEventListener("_idle", p), e.push({
                                elem: n,
                                animation: t
                            }), i += 1
                        }

                        function u(t) {
                            var o, l = t - n;
                            for (o = 0; o < i; o += 1) e[o].animation.advanceTime(l);
                            n = t, r && !a ? window.requestAnimationFrame(u) : s = !0
                        }

                        function m(t) {
                            n = t, window.requestAnimationFrame(u)
                        }

                        function f() {
                            !a && r && s && (window.requestAnimationFrame(m), s = !1)
                        }
                        return t.registerAnimation = l, t.loadAnimation = function(t) {
                            var e = new AnimationItem;
                            return c(e, null), e.setParams(t), e
                        }, t.setSpeed = function(t, n) {
                            var r;
                            for (r = 0; r < i; r += 1) e[r].animation.setSpeed(t, n)
                        }, t.setDirection = function(t, n) {
                            var r;
                            for (r = 0; r < i; r += 1) e[r].animation.setDirection(t, n)
                        }, t.play = function(t) {
                            var n;
                            for (n = 0; n < i; n += 1) e[n].animation.play(t)
                        }, t.pause = function(t) {
                            var n;
                            for (n = 0; n < i; n += 1) e[n].animation.pause(t)
                        }, t.stop = function(t) {
                            var n;
                            for (n = 0; n < i; n += 1) e[n].animation.stop(t)
                        }, t.togglePause = function(t) {
                            var n;
                            for (n = 0; n < i; n += 1) e[n].animation.togglePause(t)
                        }, t.searchAnimations = function(t, e, n) {
                            var i, r = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                                s = r.length;
                            for (i = 0; i < s; i += 1) n && r[i].setAttribute("data-bm-type", n), l(r[i], t);
                            if (e && 0 === s) {
                                n || (n = "svg");
                                var a = document.getElementsByTagName("body")[0];
                                a.innerHTML = "";
                                var o = createTag("div");
                                o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", n), a.appendChild(o), l(o, t)
                            }
                        }, t.resize = function() {
                            var t;
                            for (t = 0; t < i; t += 1) e[t].animation.resize()
                        }, t.goToAndStop = function(t, n, r) {
                            var s;
                            for (s = 0; s < i; s += 1) e[s].animation.goToAndStop(t, n, r)
                        }, t.destroy = function(t) {
                            var n;
                            for (n = i - 1; n >= 0; n -= 1) e[n].animation.destroy(t)
                        }, t.freeze = function() {
                            a = !0
                        }, t.unfreeze = function() {
                            a = !1, f()
                        }, t.getRegisteredAnimations = function() {
                            var t, n = e.length,
                                i = [];
                            for (t = 0; t < n; t += 1) i.push(e[t].animation);
                            return i
                        }, t
                    }(),
                    AnimationItem = function() {
                        this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.subframeEnabled = subframeEnabled, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader
                    };
                extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
                    t.context && (this.context = t.context), (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
                    var e = t.animType ? t.animType : t.renderer ? t.renderer : "svg";
                    switch (e) {
                        case "canvas":
                            this.renderer = new CanvasRenderer(this, t.rendererSettings);
                            break;
                        case "svg":
                            this.renderer = new SVGRenderer(this, t.rendererSettings);
                            break;
                        default:
                            this.renderer = new HybridRenderer(this, t.rendererSettings)
                    }
                    this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || (this.loop = !1 !== t.loop && (!0 === t.loop || parseInt(t.loop))), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !t.hasOwnProperty("autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, t.animationData ? this.configAnimation(t.animationData) : t.path && (this.path = -1 !== t.path.lastIndexOf("\\") ? t.path.substr(0, t.path.lastIndexOf("\\") + 1) : t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), assetLoader.load(t.path, this.configAnimation.bind(this), (function() {
                        this.trigger("data_failed")
                    }).bind(this)))
                }, AnimationItem.prototype.setData = function(t, e) {
                    var n = {
                            wrapper: t,
                            animationData: e ? "object" == typeof e ? e : JSON.parse(e) : null
                        },
                        i = t.attributes;
                    n.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", n.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : "canvas";
                    var r = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
                    "" === r || (n.loop = "false" !== r && ("true" === r || parseInt(r)));
                    var s = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value;
                    n.autoplay = "false" !== s, n.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "", "false" === (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") && (n.prerender = !1), this.setParams(n)
                }, AnimationItem.prototype.includeLayers = function(t) {
                    t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
                    var e, n, i = this.animationData.layers,
                        r = i.length,
                        s = t.layers,
                        a = s.length;
                    for (n = 0; n < a; n += 1)
                        for (e = 0; e < r;) {
                            if (i[e].id == s[n].id) {
                                i[e] = s[n];
                                break
                            }
                            e += 1
                        }
                    if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                        for (r = t.assets.length, e = 0; e < r; e += 1) this.animationData.assets.push(t.assets[e]);
                    this.animationData.__complete = !1, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.loadNextSegment()
                }, AnimationItem.prototype.loadNextSegment = function() {
                    var t = this.animationData.segments;
                    if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
                    var e = t.shift();
                    this.timeCompleted = e.time * this.frameRate;
                    var n = this.path + this.fileName + "_" + this.segmentPos + ".json";
                    this.segmentPos += 1, assetLoader.load(n, this.includeLayers.bind(this), (function() {
                        this.trigger("data_failed")
                    }).bind(this))
                }, AnimationItem.prototype.loadSegments = function() {
                    this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
                }, AnimationItem.prototype.imagesLoaded = function() {
                    this.trigger("loaded_images"), this.checkLoaded()
                }, AnimationItem.prototype.preloadImages = function() {
                    this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
                }, AnimationItem.prototype.configAnimation = function(t) {
                    if (this.renderer) try {
                        this.animationData = t, this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.firstFrame = Math.round(this.animationData.ip), this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded()
                    } catch (e) {
                        this.triggerConfigError(e)
                    }
                }, AnimationItem.prototype.waitForFontsLoaded = function() {
                    this.renderer && (this.renderer.globalData.fontManager.loaded() ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
                }, AnimationItem.prototype.checkLoaded = function() {
                    this.isLoaded || !this.renderer.globalData.fontManager.loaded() || !this.imagePreloader.loaded() && "canvas" === this.renderer.rendererType || (this.isLoaded = !0, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout((function() {
                        this.trigger("DOMLoaded")
                    }).bind(this), 0), this.gotoFrame(), this.autoplay && this.play())
                }, AnimationItem.prototype.resize = function() {
                    this.renderer.updateContainerSize()
                }, AnimationItem.prototype.setSubframe = function(t) {
                    this.subframeEnabled = !!t
                }, AnimationItem.prototype.gotoFrame = function() {
                    this.currentFrame = this.subframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame()
                }, AnimationItem.prototype.renderFrame = function() {
                    if (!1 !== this.isLoaded) try {
                        this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                    } catch (t) {
                        this.triggerRenderFrameError(t)
                    }
                }, AnimationItem.prototype.play = function(t) {
                    t && this.name != t || !0 === this.isPaused && (this.isPaused = !1, this._idle && (this._idle = !1, this.trigger("_active")))
                }, AnimationItem.prototype.pause = function(t) {
                    t && this.name != t || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle"))
                }, AnimationItem.prototype.togglePause = function(t) {
                    t && this.name != t || (!0 === this.isPaused ? this.play() : this.pause())
                }, AnimationItem.prototype.stop = function(t) {
                    t && this.name != t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
                }, AnimationItem.prototype.goToAndStop = function(t, e, n) {
                    n && this.name != n || (this.setCurrentRawFrameValue(e ? t : t * this.frameModifier), this.pause())
                }, AnimationItem.prototype.goToAndPlay = function(t, e, n) {
                    this.goToAndStop(t, e, n), this.play()
                }, AnimationItem.prototype.advanceTime = function(t) {
                    if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                        var e = this.currentRawFrame + t * this.frameModifier,
                            n = !1;
                        e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (n = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (n = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), n && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
                    }
                }, AnimationItem.prototype.adjustSegment = function(t, e) {
                    this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.timeCompleted = this.totalFrames = t[0] - t[1], this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.timeCompleted = this.totalFrames = t[1] - t[0], this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
                }, AnimationItem.prototype.setSegment = function(t, e) {
                    var n = -1;
                    this.isPaused && (this.currentRawFrame + this.firstFrame < t ? n = t : this.currentRawFrame + this.firstFrame > e && (n = e - t)), this.firstFrame = t, this.timeCompleted = this.totalFrames = e - t, -1 !== n && this.goToAndStop(n, !0)
                }, AnimationItem.prototype.playSegments = function(t, e) {
                    if (e && (this.segments.length = 0), "object" == typeof t[0]) {
                        var n, i = t.length;
                        for (n = 0; n < i; n += 1) this.segments.push(t[n])
                    } else this.segments.push(t);
                    this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
                }, AnimationItem.prototype.resetSegments = function(t) {
                    this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
                }, AnimationItem.prototype.checkSegments = function(t) {
                    return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
                }, AnimationItem.prototype.destroy = function(t) {
                    t && this.name != t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null, this.renderer = null)
                }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
                    this.currentRawFrame = t, this.gotoFrame()
                }, AnimationItem.prototype.setSpeed = function(t) {
                    this.playSpeed = t, this.updaFrameModifier()
                }, AnimationItem.prototype.setDirection = function(t) {
                    this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
                }, AnimationItem.prototype.updaFrameModifier = function() {
                    this.frameModifier = this.frameMult * this.playSpeed * this.playDirection
                }, AnimationItem.prototype.getPath = function() {
                    return this.path
                }, AnimationItem.prototype.getAssetsPath = function(t) {
                    var e = "";
                    if (t.e) e = t.p;
                    else if (this.assetsPath) {
                        var n = t.p; - 1 !== n.indexOf("images/") && (n = n.split("/")[1]), e = this.assetsPath + n
                    } else e = this.path, e += t.u ? t.u : "", e += t.p;
                    return e
                }, AnimationItem.prototype.getAssetData = function(t) {
                    for (var e = 0, n = this.assets.length; e < n;) {
                        if (t == this.assets[e].id) return this.assets[e];
                        e += 1
                    }
                }, AnimationItem.prototype.hide = function() {
                    this.renderer.hide()
                }, AnimationItem.prototype.show = function() {
                    this.renderer.show()
                }, AnimationItem.prototype.getDuration = function(t) {
                    return t ? this.totalFrames : this.totalFrames / this.frameRate
                }, AnimationItem.prototype.trigger = function(t) {
                    if (this._cbs && this._cbs[t]) switch (t) {
                        case "enterFrame":
                            this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
                            break;
                        case "loopComplete":
                            this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                            break;
                        case "complete":
                            this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                            break;
                        case "segmentStart":
                            this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                            break;
                        case "destroy":
                            this.triggerEvent(t, new BMDestroyEvent(t, this));
                            break;
                        default:
                            this.triggerEvent(t)
                    }
                    "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
                }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
                    var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
                    this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
                }, AnimationItem.prototype.triggerConfigError = function(t) {
                    var e = new BMConfigErrorEvent(t, this.currentFrame);
                    this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
                };
                var Expressions = {
                    initExpressions: function(t) {
                        var e = 0,
                            n = [];
                        t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() {
                            e += 1
                        }, t.renderer.globalData.popExpression = function() {
                            0 == (e -= 1) && function() {
                                var t, e = n.length;
                                for (t = 0; t < e; t += 1) n[t].release();
                                n.length = 0
                            }()
                        }, t.renderer.globalData.registerExpressionProperty = function(t) {
                            -1 === n.indexOf(t) && n.push(t)
                        }
                    }
                };
                expressionsPlugin = Expressions;
                var ExpressionManager = function() {
                        var ob = {},
                            Math = BMMath,
                            window = null,
                            document = null;

                        function $bm_isInstanceOfArray(t) {
                            return t.constructor === Array || t.constructor === Float32Array
                        }

                        function isNumerable(t, e) {
                            return "number" === t || "boolean" === t || "string" === t || e instanceof Number
                        }

                        function $bm_neg(t) {
                            var e = typeof t;
                            if ("number" === e || "boolean" === e || t instanceof Number) return -t;
                            if ($bm_isInstanceOfArray(t)) {
                                var n, i = t.length,
                                    r = [];
                                for (n = 0; n < i; n += 1) r[n] = -t[n];
                                return r
                            }
                            return t.propType ? t.v : void 0
                        }
                        var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                            easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                            easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                        function sum(t, e) {
                            var n = typeof t,
                                i = typeof e;
                            if ("string" === n || "string" === i) return t + e;
                            if (isNumerable(n, t) && isNumerable(i, e)) return t + e;
                            if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] = t[0] + e, t;
                            if (isNumerable(n, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
                            if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                                for (var r = 0, s = t.length, a = e.length, o = []; r < s || r < a;) o[r] = ("number" == typeof t[r] || t[r] instanceof Number) && ("number" == typeof e[r] || e[r] instanceof Number) ? t[r] + e[r] : void 0 === e[r] ? t[r] : t[r] || e[r], r += 1;
                                return o
                            }
                            return 0
                        }
                        var add = sum;

                        function sub(t, e) {
                            var n = typeof t,
                                i = typeof e;
                            if (isNumerable(n, t) && isNumerable(i, e)) return "string" === n && (t = parseInt(t)), "string" === i && (e = parseInt(e)), t - e;
                            if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] = t[0] - e, t;
                            if (isNumerable(n, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
                            if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                                for (var r = 0, s = t.length, a = e.length, o = []; r < s || r < a;) o[r] = ("number" == typeof t[r] || t[r] instanceof Number) && ("number" == typeof e[r] || e[r] instanceof Number) ? t[r] - e[r] : void 0 === e[r] ? t[r] : t[r] || e[r], r += 1;
                                return o
                            }
                            return 0
                        }

                        function mul(t, e) {
                            var n, i, r, s = typeof t,
                                a = typeof e;
                            if (isNumerable(s, t) && isNumerable(a, e)) return t * e;
                            if ($bm_isInstanceOfArray(t) && isNumerable(a, e)) {
                                for (n = createTypedArray("float32", r = t.length), i = 0; i < r; i += 1) n[i] = t[i] * e;
                                return n
                            }
                            if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                                for (n = createTypedArray("float32", r = e.length), i = 0; i < r; i += 1) n[i] = t * e[i];
                                return n
                            }
                            return 0
                        }

                        function div(t, e) {
                            var n, i, r, s = typeof t,
                                a = typeof e;
                            if (isNumerable(s, t) && isNumerable(a, e)) return t / e;
                            if ($bm_isInstanceOfArray(t) && isNumerable(a, e)) {
                                for (n = createTypedArray("float32", r = t.length), i = 0; i < r; i += 1) n[i] = t[i] / e;
                                return n
                            }
                            if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                                for (n = createTypedArray("float32", r = e.length), i = 0; i < r; i += 1) n[i] = t / e[i];
                                return n
                            }
                            return 0
                        }

                        function mod(t, e) {
                            return "string" == typeof t && (t = parseInt(t)), "string" == typeof e && (e = parseInt(e)), t % e
                        }
                        var $bm_sum = sum,
                            $bm_sub = sub,
                            $bm_mul = mul,
                            $bm_div = div,
                            $bm_mod = mod;

                        function clamp(t, e, n) {
                            if (e > n) {
                                var i = n;
                                n = e, e = i
                            }
                            return Math.min(Math.max(t, e), n)
                        }

                        function radiansToDegrees(t) {
                            return t / degToRads
                        }
                        var radians_to_degrees = radiansToDegrees;

                        function degreesToRadians(t) {
                            return t * degToRads
                        }
                        var degrees_to_radians = radiansToDegrees,
                            helperLengthArray = [0, 0, 0, 0, 0, 0];

                        function length(t, e) {
                            if ("number" == typeof t || t instanceof Number) return Math.abs(t - (e = e || 0));
                            e || (e = helperLengthArray);
                            var n, i = Math.min(t.length, e.length),
                                r = 0;
                            for (n = 0; n < i; n += 1) r += Math.pow(e[n] - t[n], 2);
                            return Math.sqrt(r)
                        }

                        function normalize(t) {
                            return div(t, length(t))
                        }

                        function rgbToHsl(t) {
                            var e, n, i = t[0],
                                r = t[1],
                                s = t[2],
                                a = Math.max(i, r, s),
                                o = Math.min(i, r, s),
                                l = (a + o) / 2;
                            if (a == o) e = n = 0;
                            else {
                                var h = a - o;
                                switch (n = l > .5 ? h / (2 - a - o) : h / (a + o), a) {
                                    case i:
                                        e = (r - s) / h + (r < s ? 6 : 0);
                                        break;
                                    case r:
                                        e = (s - i) / h + 2;
                                        break;
                                    case s:
                                        e = (i - r) / h + 4
                                }
                                e /= 6
                            }
                            return [e, n, l, t[3]]
                        }

                        function hue2rgb(t, e, n) {
                            return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
                        }

                        function hslToRgb(t) {
                            var e, n, i, r = t[0],
                                s = t[1],
                                a = t[2];
                            if (0 === s) e = n = i = a;
                            else {
                                var o = a < .5 ? a * (1 + s) : a + s - a * s,
                                    l = 2 * a - o;
                                e = hue2rgb(l, o, r + 1 / 3), n = hue2rgb(l, o, r), i = hue2rgb(l, o, r - 1 / 3)
                            }
                            return [e, n, i, t[3]]
                        }

                        function linear(t, e, n, i, r) {
                            if (void 0 !== i && void 0 !== r || (i = e, r = n, e = 0, n = 1), n < e) {
                                var s = n;
                                n = e, e = s
                            }
                            if (t <= e) return i;
                            if (t >= n) return r;
                            var a = n === e ? 0 : (t - e) / (n - e);
                            if (!i.length) return i + (r - i) * a;
                            var o, l = i.length,
                                h = createTypedArray("float32", l);
                            for (o = 0; o < l; o += 1) h[o] = i[o] + (r[o] - i[o]) * a;
                            return h
                        }

                        function random(t, e) {
                            if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                                var n, i = e.length;
                                t || (t = createTypedArray("float32", i));
                                var r = createTypedArray("float32", i),
                                    s = BMMath.random();
                                for (n = 0; n < i; n += 1) r[n] = t[n] + s * (e[n] - t[n]);
                                return r
                            }
                            return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
                        }

                        function createPath(t, e, n, i) {
                            var r, s = t.length,
                                a = shape_pool.newElement();
                            a.setPathData(!!i, s);
                            var o, l, h = [0, 0];
                            for (r = 0; r < s; r += 1) a.setTripleAt(t[r][0], t[r][1], (l = n && n[r] ? n[r] : h)[0] + t[r][0], l[1] + t[r][1], (o = e && e[r] ? e[r] : h)[0] + t[r][0], o[1] + t[r][1], r, !0);
                            return a
                        }

                        function initiateExpression(elem, data, property) {
                            var val = data.x,
                                needsVelocity = /velocity(?![\w\d])/.test(val),
                                _needsRandom = -1 !== val.indexOf("random"),
                                elemType = elem.data.ty,
                                transform, $bm_transform, content, effect, thisProperty = property;
                            thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                                get: function() {
                                    return thisProperty.v
                                }
                            }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                            var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                                outPoint = elem.data.op / elem.comp.globalData.frameRate,
                                width = elem.data.sw ? elem.data.sw : 0,
                                height = elem.data.sh ? elem.data.sh : 0,
                                name = elem.data.nm,
                                loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, __expression_functions = [],
                                scoped_bm_rt;
                            if (data.xf) {
                                var i, len = data.xf.length;
                                for (i = 0; i < len; i += 1) __expression_functions[i] = eval("(function(){ return " + data.xf[i] + "}())")
                            }
                            var expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                                numKeys = property.kf ? data.k.length : 0,
                                active = !this.data || !0 !== this.data.hd,
                                wiggle = (function(t, e) {
                                    var n, i, r = this.pv.length ? this.pv.length : 1,
                                        s = createTypedArray("float32", r),
                                        a = Math.floor(5 * time);
                                    for (n = 0, i = 0; n < a;) {
                                        for (i = 0; i < r; i += 1) s[i] += -e + 2 * e * BMMath.random();
                                        n += 1
                                    }
                                    var o = 5 * time,
                                        l = o - Math.floor(o),
                                        h = createTypedArray("float32", r);
                                    if (r > 1) {
                                        for (i = 0; i < r; i += 1) h[i] = this.pv[i] + s[i] + (-e + 2 * e * BMMath.random()) * l;
                                        return h
                                    }
                                    return this.pv + s[0] + (-e + 2 * e * BMMath.random()) * l
                                }).bind(this);

                            function loopInDuration(t, e) {
                                return loopIn(t, e, !0)
                            }

                            function loopOutDuration(t, e) {
                                return loopOut(t, e, !0)
                            }
                            thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                            var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                                time, velocity, value, text, textIndex, textTotal, selectorValue;

                            function lookAt(t, e) {
                                var n = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                                    i = Math.atan2(n[0], Math.sqrt(n[1] * n[1] + n[2] * n[2])) / degToRads;
                                return [-Math.atan2(n[1], n[2]) / degToRads, i, 0]
                            }

                            function easeOut(t, e, n, i, r) {
                                return applyEase(easeOutBez, t, e, n, i, r)
                            }

                            function easeIn(t, e, n, i, r) {
                                return applyEase(easeInBez, t, e, n, i, r)
                            }

                            function ease(t, e, n, i, r) {
                                return applyEase(easeInOutBez, t, e, n, i, r)
                            }

                            function applyEase(t, e, n, i, r, s) {
                                void 0 === r ? (r = n, s = i) : e = (e - n) / (i - n);
                                var a = t(e = e > 1 ? 1 : e < 0 ? 0 : e);
                                if ($bm_isInstanceOfArray(r)) {
                                    var o, l = r.length,
                                        h = createTypedArray("float32", l);
                                    for (o = 0; o < l; o += 1) h[o] = (s[o] - r[o]) * a + r[o];
                                    return h
                                }
                                return (s - r) * a + r
                            }

                            function nearestKey(t) {
                                var e, n, i, r = data.k.length;
                                if (data.k.length && "number" != typeof data.k[0])
                                    if (n = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) n = 1, i = data.k[0].t;
                                    else {
                                        for (e = 0; e < r - 1; e += 1) {
                                            if (t === data.k[e].t) {
                                                n = e + 1, i = data.k[e].t;
                                                break
                                            }
                                            if (t > data.k[e].t && t < data.k[e + 1].t) {
                                                t - data.k[e].t > data.k[e + 1].t - t ? (n = e + 2, i = data.k[e + 1].t) : (n = e + 1, i = data.k[e].t);
                                                break
                                            }
                                        } - 1 === n && (n = e + 1, i = data.k[e].t)
                                    } else n = 0, i = 0;
                                var s = {};
                                return s.index = n, s.time = i / elem.comp.globalData.frameRate, s
                            }

                            function key(t) {
                                var e, n, i;
                                if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                                e = {
                                    time: data.k[t -= 1].t / elem.comp.globalData.frameRate,
                                    value: []
                                };
                                var r = data.k[t].hasOwnProperty("s") ? data.k[t].s : data.k[t - 1].e;
                                for (i = r.length, n = 0; n < i; n += 1) e[n] = r[n], e.value[n] = r[n];
                                return e
                            }

                            function framesToTime(t, e) {
                                return e || (e = elem.comp.globalData.frameRate), t / e
                            }

                            function timeToFrames(t, e) {
                                return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
                            }

                            function seedRandom(t) {
                                BMMath.seedrandom(randSeed + t)
                            }

                            function sourceRectAtTime() {
                                return elem.sourceRectAtTime()
                            }

                            function substring(t, e) {
                                return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
                            }

                            function substr(t, e) {
                                return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
                            }
                            var index = elem.data.ind,
                                hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                                parent, randSeed = Math.floor(1e6 * Math.random()),
                                globalData = elem.globalData;

                            function executeExpression(t) {
                                return value = t, _needsRandom && seedRandom(randSeed), this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisComp = elem.comp.compInterface, toWorld = (thisLayer = elem.layerInterface).toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v), scoped_bm_rt)
                            }
                            return executeExpression
                        }
                        return ob.initiateExpression = initiateExpression, ob
                    }(),
                    expressionHelpers = {
                        searchExpressions: function(t, e, n) {
                            e.x && (n.k = !0, n.x = !0, n.initiateExpression = ExpressionManager.initiateExpression, n.effectsSequence.push(n.initiateExpression(t, e, n).bind(n)))
                        },
                        getSpeedAtTime: function(t) {
                            var e = this.getValueAtTime(t),
                                n = this.getValueAtTime(t + -.01),
                                i = 0;
                            if (e.length) {
                                var r;
                                for (r = 0; r < e.length; r += 1) i += Math.pow(n[r] - e[r], 2);
                                i = 100 * Math.sqrt(i)
                            } else i = 0;
                            return i
                        },
                        getVelocityAtTime: function(t) {
                            if (void 0 !== this.vel) return this.vel;
                            var e, n, i = this.getValueAtTime(t),
                                r = this.getValueAtTime(t + -.001);
                            if (i.length)
                                for (e = createTypedArray("float32", i.length), n = 0; n < i.length; n += 1) e[n] = (r[n] - i[n]) / -.001;
                            else e = (r - i) / -.001;
                            return e
                        },
                        getValueAtTime: function(t) {
                            return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value
                        },
                        getStaticValueAtTime: function() {
                            return this.pv
                        },
                        setGroupProperty: function(t) {
                            this.propertyGroup = t
                        }
                    };
                ! function() {
                    function t(t, e, n) {
                        if (!this.k || !this.keyframes) return this.pv;
                        t = t ? t.toLowerCase() : "";
                        var i, r, s, a, o, l = this.comp.renderedFrame,
                            h = this.keyframes,
                            p = h[h.length - 1].t;
                        if (l <= p) return this.pv;
                        if (n ? r = p - (i = e ? Math.abs(p - elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip)) : ((!e || e > h.length - 1) && (e = h.length - 1), i = p - (r = h[h.length - 1 - e].t)), "pingpong" === t) {
                            if (Math.floor((l - r) / i) % 2 != 0) return this.getValueAtTime((i - (l - r) % i + r) / this.comp.globalData.frameRate, 0)
                        } else {
                            if ("offset" === t) {
                                var c = this.getValueAtTime(r / this.comp.globalData.frameRate, 0),
                                    u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                    m = this.getValueAtTime(((l - r) % i + r) / this.comp.globalData.frameRate, 0),
                                    f = Math.floor((l - r) / i);
                                if (this.pv.length) {
                                    for (a = (o = new Array(c.length)).length, s = 0; s < a; s += 1) o[s] = (u[s] - c[s]) * f + m[s];
                                    return o
                                }
                                return (u - c) * f + m
                            }
                            if ("continue" === t) {
                                var d = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                    g = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
                                if (this.pv.length) {
                                    for (a = (o = new Array(d.length)).length, s = 0; s < a; s += 1) o[s] = d[s] + (l - p) / this.comp.globalData.frameRate * (d[s] - g[s]) / 5e-4;
                                    return o
                                }
                                return d + (l - p) / .001 * (d - g)
                            }
                        }
                        return this.getValueAtTime(((l - r) % i + r) / this.comp.globalData.frameRate, 0)
                    }

                    function e(t, e, n) {
                        if (!this.k) return this.pv;
                        t = t ? t.toLowerCase() : "";
                        var i, r, s, a, o, l = this.comp.renderedFrame,
                            h = this.keyframes,
                            p = h[0].t;
                        if (l >= p) return this.pv;
                        if (n ? r = p + (i = e ? Math.abs(elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p)) : ((!e || e > h.length - 1) && (e = h.length - 1), i = (r = h[e].t) - p), "pingpong" === t) {
                            if (Math.floor((p - l) / i) % 2 == 0) return this.getValueAtTime(((p - l) % i + p) / this.comp.globalData.frameRate, 0)
                        } else {
                            if ("offset" === t) {
                                var c = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                    u = this.getValueAtTime(r / this.comp.globalData.frameRate, 0),
                                    m = this.getValueAtTime((i - (p - l) % i + p) / this.comp.globalData.frameRate, 0),
                                    f = Math.floor((p - l) / i) + 1;
                                if (this.pv.length) {
                                    for (a = (o = new Array(c.length)).length, s = 0; s < a; s += 1) o[s] = m[s] - (u[s] - c[s]) * f;
                                    return o
                                }
                                return m - (u - c) * f
                            }
                            if ("continue" === t) {
                                var d = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                    g = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
                                if (this.pv.length) {
                                    for (a = (o = new Array(d.length)).length, s = 0; s < a; s += 1) o[s] = d[s] + (d[s] - g[s]) * (p - l) / .001;
                                    return o
                                }
                                return d + (d - g) * (p - l) / .001
                            }
                        }
                        return this.getValueAtTime((i - (p - l) % i + p) / this.comp.globalData.frameRate, 0)
                    }

                    function n(t, e) {
                        if (!this.k) return this.pv;
                        if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
                        var n, i, r = this.comp.renderedFrame / this.comp.globalData.frameRate,
                            s = r - t,
                            a = e > 1 ? (r + t - s) / (e - 1) : 1,
                            o = 0,
                            l = 0;
                        for (n = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;) {
                            if (i = this.getValueAtTime(s + o * a), this.pv.length)
                                for (l = 0; l < this.pv.length; l += 1) n[l] += i[l];
                            else n += i;
                            o += 1
                        }
                        if (this.pv.length)
                            for (l = 0; l < this.pv.length; l += 1) n[l] /= e;
                        else n /= e;
                        return n
                    }
                    var i = TransformPropertyFactory.getTransformProperty;
                    TransformPropertyFactory.getTransformProperty = function(t, e, n) {
                        var r = i(t, e, n);
                        return r.getValueAtTime = r.dynamicProperties.length ? (function(t) {
                            console.warn("Transform at time not supported")
                        }).bind(r) : (function(t) {}).bind(r), r.setGroupProperty = expressionHelpers.setGroupProperty, r
                    };
                    var r = PropertyFactory.getProp;
                    PropertyFactory.getProp = function(i, s, a, o, l) {
                        var h = r(i, s, a, o, l);
                        h.getValueAtTime = h.kf ? expressionHelpers.getValueAtTime.bind(h) : expressionHelpers.getStaticValueAtTime.bind(h), h.setGroupProperty = expressionHelpers.setGroupProperty, h.loopOut = t, h.loopIn = e, h.smooth = n, h.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(h), h.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(h), h.numKeys = 1 === s.a ? s.k.length : 0, h.propertyIndex = s.ix;
                        var p = 0;
                        return 0 !== a && (p = createTypedArray("float32", 1 === s.a ? s.k[0].s.length : s.k.length)), h._cachingAtTime = {
                            lastFrame: initialDefaultFrame,
                            lastIndex: 0,
                            value: p
                        }, expressionHelpers.searchExpressions(i, s, h), h.k && l.addDynamicProperty(h), h
                    };
                    var s = ShapePropertyFactory.getConstructorFunction(),
                        a = ShapePropertyFactory.getKeyframedConstructorFunction();

                    function o() {}
                    o.prototype = {
                        vertices: function(t, e) {
                            this.k && this.getValue();
                            var n = this.v;
                            void 0 !== e && (n = this.getValueAtTime(e, 0));
                            var i, r = n._length,
                                s = n[t],
                                a = n.v,
                                o = createSizedArray(r);
                            for (i = 0; i < r; i += 1) o[i] = "i" === t || "o" === t ? [s[i][0] - a[i][0], s[i][1] - a[i][1]] : [s[i][0], s[i][1]];
                            return o
                        },
                        points: function(t) {
                            return this.vertices("v", t)
                        },
                        inTangents: function(t) {
                            return this.vertices("i", t)
                        },
                        outTangents: function(t) {
                            return this.vertices("o", t)
                        },
                        isClosed: function() {
                            return this.v.c
                        },
                        pointOnPath: function(t, e) {
                            var n = this.v;
                            void 0 !== e && (n = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(n));
                            for (var i, r = this._segmentsLength, s = r.lengths, a = r.totalLength * t, o = 0, l = s.length, h = 0; o < l;) {
                                if (h + s[o].addedLength > a) {
                                    var p = n.c && o === l - 1 ? 0 : o + 1;
                                    i = bez.getPointInSegment(n.v[o], n.v[p], n.o[o], n.i[p], (a - h) / s[o].addedLength, s[o]);
                                    break
                                }
                                h += s[o].addedLength, o += 1
                            }
                            return i || (i = n.c ? [n.v[0][0], n.v[0][1]] : [n.v[n._length - 1][0], n.v[n._length - 1][1]]), i
                        },
                        vectorOnPath: function(t, e, n) {
                            var i = this.pointOnPath(t = 1 == t ? this.v.c ? 0 : .999 : t, e),
                                r = this.pointOnPath(t + .001, e),
                                s = r[0] - i[0],
                                a = r[1] - i[1],
                                o = Math.sqrt(Math.pow(s, 2) + Math.pow(a, 2));
                            return 0 === o ? [0, 0] : "tangent" === n ? [s / o, a / o] : [-a / o, s / o]
                        },
                        tangentOnPath: function(t, e) {
                            return this.vectorOnPath(t, e, "tangent")
                        },
                        normalOnPath: function(t, e) {
                            return this.vectorOnPath(t, e, "normal")
                        },
                        setGroupProperty: expressionHelpers.setGroupProperty,
                        getValueAtTime: expressionHelpers.getStaticValueAtTime
                    }, extendPrototype([o], s), extendPrototype([o], a), a.prototype.getValueAtTime = function(t) {
                        return this._cachingAtTime || (this._cachingAtTime = {
                            shapeValue: shape_pool.clone(this.pv),
                            lastIndex: 0,
                            lastTime: initialDefaultFrame
                        }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
                    }, a.prototype.initiateExpression = ExpressionManager.initiateExpression;
                    var l = ShapePropertyFactory.getShapeProp;
                    ShapePropertyFactory.getShapeProp = function(t, e, n, i, r) {
                        var s = l(t, e, n, i, r);
                        return s.propertyIndex = e.ix, s.lock = !1, 3 === n ? expressionHelpers.searchExpressions(t, e.pt, s) : 4 === n && expressionHelpers.searchExpressions(t, e.ks, s), s.k && t.addDynamicProperty(s), s
                    }
                }(), TextProperty.prototype.getExpressionValue = function(t, e) {
                    var n = this.calculateExpression(e);
                    if (t.t !== n) {
                        var i = {};
                        return this.copyData(i, t), i.t = n.toString(), i.__complete = !1, i
                    }
                    return t
                }, TextProperty.prototype.searchProperty = function() {
                    var t = this.searchKeyframes(),
                        e = this.searchExpressions();
                    return this.kf = t || e, this.kf
                }, TextProperty.prototype.searchExpressions = function() {
                    if (this.data.d.x) return this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0
                };
                var ShapeExpressionInterface = function() {
                        function t(t, c, u) {
                            var m, f = [],
                                d = t ? t.length : 0;
                            for (m = 0; m < d; m += 1) "gr" == t[m].ty ? f.push(e(t[m], c[m], u)) : "fl" == t[m].ty ? f.push(n(t[m], c[m], u)) : "st" == t[m].ty ? f.push(i(t[m], c[m], u)) : "tm" == t[m].ty ? f.push(r(t[m], c[m], u)) : "tr" == t[m].ty || ("el" == t[m].ty ? f.push(s(t[m], c[m], u)) : "sr" == t[m].ty ? f.push(a(t[m], c[m], u)) : "sh" == t[m].ty ? f.push(p(t[m], c[m], u)) : "rc" == t[m].ty ? f.push(o(t[m], c[m], u)) : "rd" == t[m].ty ? f.push(l(t[m], c[m], u)) : "rp" == t[m].ty && f.push(h(t[m], c[m], u)));
                            return f
                        }

                        function e(e, n, i) {
                            var r = function(t) {
                                switch (t) {
                                    case "ADBE Vectors Group":
                                    case "Contents":
                                    case 2:
                                        return r.content;
                                    default:
                                        return r.transform
                                }
                            };
                            r.propertyGroup = function(t) {
                                return 1 === t ? r : i(t - 1)
                            };
                            var s = function(e, n, i) {
                                    var r, s = function(t) {
                                        for (var e = 0, n = r.length; e < n;) {
                                            if (r[e]._name === t || r[e].mn === t || r[e].propertyIndex === t || r[e].ix === t || r[e].ind === t) return r[e];
                                            e += 1
                                        }
                                        if ("number" == typeof t) return r[t - 1]
                                    };
                                    return r = t(e.it, n.it, s.propertyGroup = function(t) {
                                        return 1 === t ? s : i(t - 1)
                                    }), s.numProperties = r.length, s.propertyIndex = e.cix, s._name = e.nm, s
                                }(e, n, r.propertyGroup),
                                a = function(t, e, n) {
                                    function i(t) {
                                        return 1 == t ? r : n(--t)
                                    }

                                    function r(e) {
                                        return t.a.ix === e || "Anchor Point" === e ? r.anchorPoint : t.o.ix === e || "Opacity" === e ? r.opacity : t.p.ix === e || "Position" === e ? r.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? r.rotation : t.s.ix === e || "Scale" === e ? r.scale : t.sk && t.sk.ix === e || "Skew" === e ? r.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? r.skewAxis : void 0
                                    }
                                    return e.transform.mProps.o.setGroupProperty(i), e.transform.mProps.p.setGroupProperty(i), e.transform.mProps.a.setGroupProperty(i), e.transform.mProps.s.setGroupProperty(i), e.transform.mProps.r.setGroupProperty(i), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(i), e.transform.mProps.sa.setGroupProperty(i)), e.transform.op.setGroupProperty(i), Object.defineProperties(r, {
                                        opacity: {
                                            get: ExpressionPropertyInterface(e.transform.mProps.o)
                                        },
                                        position: {
                                            get: ExpressionPropertyInterface(e.transform.mProps.p)
                                        },
                                        anchorPoint: {
                                            get: ExpressionPropertyInterface(e.transform.mProps.a)
                                        },
                                        scale: {
                                            get: ExpressionPropertyInterface(e.transform.mProps.s)
                                        },
                                        rotation: {
                                            get: ExpressionPropertyInterface(e.transform.mProps.r)
                                        },
                                        skew: {
                                            get: ExpressionPropertyInterface(e.transform.mProps.sk)
                                        },
                                        skewAxis: {
                                            get: ExpressionPropertyInterface(e.transform.mProps.sa)
                                        },
                                        _name: {
                                            value: t.nm
                                        }
                                    }), r.ty = "tr", r.mn = t.mn, r.propertyGroup = n, r
                                }(e.it[e.it.length - 1], n.it[n.it.length - 1], r.propertyGroup);
                            return r.content = s, r.transform = a, Object.defineProperty(r, "_name", {
                                get: function() {
                                    return e.nm
                                }
                            }), r.numProperties = e.np, r.propertyIndex = e.ix, r.nm = e.nm, r.mn = e.mn, r
                        }

                        function n(t, e, n) {
                            function i(t) {
                                return "Color" === t || "color" === t ? i.color : "Opacity" === t || "opacity" === t ? i.opacity : void 0
                            }
                            return Object.defineProperties(i, {
                                color: {
                                    get: ExpressionPropertyInterface(e.c)
                                },
                                opacity: {
                                    get: ExpressionPropertyInterface(e.o)
                                },
                                _name: {
                                    value: t.nm
                                },
                                mn: {
                                    value: t.mn
                                }
                            }), e.c.setGroupProperty(n), e.o.setGroupProperty(n), i
                        }

                        function i(t, e, n) {
                            function i(t) {
                                return 1 === t ? ob : n(t - 1)
                            }

                            function r(t) {
                                return 1 === t ? l : i(t - 1)
                            }

                            function s(n) {
                                Object.defineProperty(l, t.d[n].nm, {
                                    get: ExpressionPropertyInterface(e.d.dataProps[n].p)
                                })
                            }
                            var a, o = t.d ? t.d.length : 0,
                                l = {};
                            for (a = 0; a < o; a += 1) s(a), e.d.dataProps[a].p.setGroupProperty(r);

                            function h(t) {
                                return "Color" === t || "color" === t ? h.color : "Opacity" === t || "opacity" === t ? h.opacity : "Stroke Width" === t || "stroke width" === t ? h.strokeWidth : void 0
                            }
                            return Object.defineProperties(h, {
                                color: {
                                    get: ExpressionPropertyInterface(e.c)
                                },
                                opacity: {
                                    get: ExpressionPropertyInterface(e.o)
                                },
                                strokeWidth: {
                                    get: ExpressionPropertyInterface(e.w)
                                },
                                dash: {
                                    get: function() {
                                        return l
                                    }
                                },
                                _name: {
                                    value: t.nm
                                },
                                mn: {
                                    value: t.mn
                                }
                            }), e.c.setGroupProperty(i), e.o.setGroupProperty(i), e.w.setGroupProperty(i), h
                        }

                        function r(t, e, n) {
                            function i(t) {
                                return 1 == t ? r : n(--t)
                            }

                            function r(e) {
                                return e === t.e.ix || "End" === e || "end" === e ? r.end : e === t.s.ix ? r.start : e === t.o.ix ? r.offset : void 0
                            }
                            return r.propertyIndex = t.ix, e.s.setGroupProperty(i), e.e.setGroupProperty(i), e.o.setGroupProperty(i), r.propertyIndex = t.ix, r.propertyGroup = n, Object.defineProperties(r, {
                                start: {
                                    get: ExpressionPropertyInterface(e.s)
                                },
                                end: {
                                    get: ExpressionPropertyInterface(e.e)
                                },
                                offset: {
                                    get: ExpressionPropertyInterface(e.o)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), r.mn = t.mn, r
                        }

                        function s(t, e, n) {
                            function i(t) {
                                return 1 == t ? s : n(--t)
                            }
                            s.propertyIndex = t.ix;
                            var r = "tm" === e.sh.ty ? e.sh.prop : e.sh;

                            function s(e) {
                                return t.p.ix === e ? s.position : t.s.ix === e ? s.size : void 0
                            }
                            return r.s.setGroupProperty(i), r.p.setGroupProperty(i), Object.defineProperties(s, {
                                size: {
                                    get: ExpressionPropertyInterface(r.s)
                                },
                                position: {
                                    get: ExpressionPropertyInterface(r.p)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), s.mn = t.mn, s
                        }

                        function a(t, e, n) {
                            function i(t) {
                                return 1 == t ? s : n(--t)
                            }
                            var r = "tm" === e.sh.ty ? e.sh.prop : e.sh;

                            function s(e) {
                                return t.p.ix === e ? s.position : t.r.ix === e ? s.rotation : t.pt.ix === e ? s.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? s.outerRadius : t.os.ix === e ? s.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? s.innerRoundness : void 0 : s.innerRadius
                            }
                            return s.propertyIndex = t.ix, r.or.setGroupProperty(i), r.os.setGroupProperty(i), r.pt.setGroupProperty(i), r.p.setGroupProperty(i), r.r.setGroupProperty(i), t.ir && (r.ir.setGroupProperty(i), r.is.setGroupProperty(i)), Object.defineProperties(s, {
                                position: {
                                    get: ExpressionPropertyInterface(r.p)
                                },
                                rotation: {
                                    get: ExpressionPropertyInterface(r.r)
                                },
                                points: {
                                    get: ExpressionPropertyInterface(r.pt)
                                },
                                outerRadius: {
                                    get: ExpressionPropertyInterface(r.or)
                                },
                                outerRoundness: {
                                    get: ExpressionPropertyInterface(r.os)
                                },
                                innerRadius: {
                                    get: ExpressionPropertyInterface(r.ir)
                                },
                                innerRoundness: {
                                    get: ExpressionPropertyInterface(r.is)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), s.mn = t.mn, s
                        }

                        function o(t, e, n) {
                            function i(t) {
                                return 1 == t ? s : n(--t)
                            }
                            var r = "tm" === e.sh.ty ? e.sh.prop : e.sh;

                            function s(e) {
                                return t.p.ix === e ? s.position : t.r.ix === e ? s.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? s.size : void 0
                            }
                            return s.propertyIndex = t.ix, r.p.setGroupProperty(i), r.s.setGroupProperty(i), r.r.setGroupProperty(i), Object.defineProperties(s, {
                                position: {
                                    get: ExpressionPropertyInterface(r.p)
                                },
                                roundness: {
                                    get: ExpressionPropertyInterface(r.r)
                                },
                                size: {
                                    get: ExpressionPropertyInterface(r.s)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), s.mn = t.mn, s
                        }

                        function l(t, e, n) {
                            var i = e;

                            function r(e) {
                                if (t.r.ix === e || "Round Corners 1" === e) return r.radius
                            }
                            return r.propertyIndex = t.ix, i.rd.setGroupProperty(function(t) {
                                return 1 == t ? r : n(--t)
                            }), Object.defineProperties(r, {
                                radius: {
                                    get: ExpressionPropertyInterface(i.rd)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), r.mn = t.mn, r
                        }

                        function h(t, e, n) {
                            function i(t) {
                                return 1 == t ? s : n(--t)
                            }
                            var r = e;

                            function s(e) {
                                return t.c.ix === e || "Copies" === e ? s.copies : t.o.ix === e || "Offset" === e ? s.offset : void 0
                            }
                            return s.propertyIndex = t.ix, r.c.setGroupProperty(i), r.o.setGroupProperty(i), Object.defineProperties(s, {
                                copies: {
                                    get: ExpressionPropertyInterface(r.c)
                                },
                                offset: {
                                    get: ExpressionPropertyInterface(r.o)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), s.mn = t.mn, s
                        }

                        function p(t, e, n) {
                            var i = e.sh;

                            function r(t) {
                                if ("Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t) return r.path
                            }
                            return i.setGroupProperty(function(t) {
                                return 1 == t ? r : n(--t)
                            }), Object.defineProperties(r, {
                                path: {
                                    get: function() {
                                        return i.k && i.getValue(), i
                                    }
                                },
                                shape: {
                                    get: function() {
                                        return i.k && i.getValue(), i
                                    }
                                },
                                _name: {
                                    value: t.nm
                                },
                                ix: {
                                    value: t.ix
                                },
                                propertyIndex: {
                                    value: t.ix
                                },
                                mn: {
                                    value: t.mn
                                }
                            }), r
                        }
                        return function(e, n, i) {
                            var r;

                            function s(t) {
                                if ("number" == typeof t) return r[t - 1];
                                for (var e = 0, n = r.length; e < n;) {
                                    if (r[e]._name === t) return r[e];
                                    e += 1
                                }
                            }
                            return s.propertyGroup = i, r = t(e, n, s), s.numProperties = r.length, s
                        }
                    }(),
                    TextExpressionInterface = function(t) {
                        var e;

                        function n() {}
                        return Object.defineProperty(n, "sourceText", {
                            get: function() {
                                t.textProperty.getValue();
                                var n = t.textProperty.currentData.t;
                                return void 0 !== n && (t.textProperty.currentData.t = void 0, (e = new String(n)).value = n || new String(n)), e
                            }
                        }), n
                    },
                    LayerExpressionInterface = function() {
                        function t(t, e) {
                            var n = new Matrix;
                            if (n.reset(), this._elem.finalTransform.mProp.applyToMatrix(n), this._elem.hierarchy && this._elem.hierarchy.length) {
                                var i, r = this._elem.hierarchy.length;
                                for (i = 0; i < r; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(n);
                                return n.applyToPointArray(t[0], t[1], t[2] || 0)
                            }
                            return n.applyToPointArray(t[0], t[1], t[2] || 0)
                        }

                        function e(t, e) {
                            var n = new Matrix;
                            if (n.reset(), this._elem.finalTransform.mProp.applyToMatrix(n), this._elem.hierarchy && this._elem.hierarchy.length) {
                                var i, r = this._elem.hierarchy.length;
                                for (i = 0; i < r; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(n);
                                return n.inversePoint(t)
                            }
                            return n.inversePoint(t)
                        }

                        function n(t) {
                            var e = new Matrix;
                            if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                                var n, i = this._elem.hierarchy.length;
                                for (n = 0; n < i; n += 1) this._elem.hierarchy[n].finalTransform.mProp.applyToMatrix(e);
                                return e.inversePoint(t)
                            }
                            return e.inversePoint(t)
                        }

                        function i() {
                            return [1, 1, 1, 1]
                        }
                        return function(r) {
                            var s;

                            function a(t) {
                                switch (t) {
                                    case "ADBE Root Vectors Group":
                                    case "Contents":
                                    case 2:
                                        return a.shapeInterface;
                                    case 1:
                                    case 6:
                                    case "Transform":
                                    case "transform":
                                    case "ADBE Transform Group":
                                        return s;
                                    case 4:
                                    case "ADBE Effect Parade":
                                    case "effects":
                                    case "Effects":
                                        return a.effect
                                }
                            }
                            a.toWorld = t, a.fromWorld = e, a.toComp = t, a.fromComp = n, a.sampleImage = i, a.sourceRectAtTime = r.sourceRectAtTime.bind(r), a._elem = r;
                            var o = getDescriptor(s = TransformExpressionInterface(r.finalTransform.mProp), "anchorPoint");
                            return Object.defineProperties(a, {
                                hasParent: {
                                    get: function() {
                                        return r.hierarchy.length
                                    }
                                },
                                parent: {
                                    get: function() {
                                        return r.hierarchy[0].layerInterface
                                    }
                                },
                                rotation: getDescriptor(s, "rotation"),
                                scale: getDescriptor(s, "scale"),
                                position: getDescriptor(s, "position"),
                                opacity: getDescriptor(s, "opacity"),
                                anchorPoint: o,
                                anchor_point: o,
                                transform: {
                                    get: function() {
                                        return s
                                    }
                                },
                                active: {
                                    get: function() {
                                        return r.isInRange
                                    }
                                }
                            }), a.startTime = r.data.st, a.index = r.data.ind, a.source = r.data.refId, a.height = 0 === r.data.ty ? r.data.h : 100, a.width = 0 === r.data.ty ? r.data.w : 100, a.inPoint = r.data.ip / r.comp.globalData.frameRate, a.outPoint = r.data.op / r.comp.globalData.frameRate, a._name = r.data.nm, a.registerMaskInterface = function(t) {
                                a.mask = new MaskManagerInterface(t, r)
                            }, a.registerEffectsInterface = function(t) {
                                a.effect = t
                            }, a
                        }
                    }(),
                    CompExpressionInterface = function(t) {
                        function e(e) {
                            for (var n = 0, i = t.layers.length; n < i;) {
                                if (t.layers[n].nm === e || t.layers[n].ind === e) return t.elements[n].layerInterface;
                                n += 1
                            }
                            return null
                        }
                        return Object.defineProperty(e, "_name", {
                            value: t.data.nm
                        }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
                    },
                    TransformExpressionInterface = function(t) {
                        function e(t) {
                            switch (t) {
                                case "scale":
                                case "Scale":
                                case "ADBE Scale":
                                case 6:
                                    return e.scale;
                                case "rotation":
                                case "Rotation":
                                case "ADBE Rotation":
                                case "ADBE Rotate Z":
                                case 10:
                                    return e.rotation;
                                case "ADBE Rotate X":
                                    return e.xRotation;
                                case "ADBE Rotate Y":
                                    return e.yRotation;
                                case "position":
                                case "Position":
                                case "ADBE Position":
                                case 2:
                                    return e.position;
                                case "ADBE Position_0":
                                    return e.xPosition;
                                case "ADBE Position_1":
                                    return e.yPosition;
                                case "ADBE Position_2":
                                    return e.zPosition;
                                case "anchorPoint":
                                case "AnchorPoint":
                                case "Anchor Point":
                                case "ADBE AnchorPoint":
                                case 1:
                                    return e.anchorPoint;
                                case "opacity":
                                case "Opacity":
                                case 11:
                                    return e.opacity
                            }
                        }
                        if (Object.defineProperty(e, "rotation", {
                                get: ExpressionPropertyInterface(t.r || t.rz)
                            }), Object.defineProperty(e, "zRotation", {
                                get: ExpressionPropertyInterface(t.rz || t.r)
                            }), Object.defineProperty(e, "xRotation", {
                                get: ExpressionPropertyInterface(t.rx)
                            }), Object.defineProperty(e, "yRotation", {
                                get: ExpressionPropertyInterface(t.ry)
                            }), Object.defineProperty(e, "scale", {
                                get: ExpressionPropertyInterface(t.s)
                            }), t.p) var n = ExpressionPropertyInterface(t.p);
                        return Object.defineProperty(e, "position", {
                            get: function() {
                                return t.p ? n() : [t.px.v, t.py.v, t.pz ? t.pz.v : 0]
                            }
                        }), Object.defineProperty(e, "xPosition", {
                            get: ExpressionPropertyInterface(t.px)
                        }), Object.defineProperty(e, "yPosition", {
                            get: ExpressionPropertyInterface(t.py)
                        }), Object.defineProperty(e, "zPosition", {
                            get: ExpressionPropertyInterface(t.pz)
                        }), Object.defineProperty(e, "anchorPoint", {
                            get: ExpressionPropertyInterface(t.a)
                        }), Object.defineProperty(e, "opacity", {
                            get: ExpressionPropertyInterface(t.o)
                        }), Object.defineProperty(e, "skew", {
                            get: ExpressionPropertyInterface(t.sk)
                        }), Object.defineProperty(e, "skewAxis", {
                            get: ExpressionPropertyInterface(t.sa)
                        }), Object.defineProperty(e, "orientation", {
                            get: ExpressionPropertyInterface(t.or)
                        }), e
                    },
                    ProjectInterface = function() {
                        function t(t) {
                            this.compositions.push(t)
                        }
                        return function() {
                            function e(t) {
                                for (var e = 0, n = this.compositions.length; e < n;) {
                                    if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                                    e += 1
                                }
                            }
                            return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
                        }
                    }(),
                    EffectsExpressionInterface = function() {
                        function t(n, i, r, s) {
                            var a, o = [],
                                l = n.ef.length;
                            for (a = 0; a < l; a += 1) o.push(5 === n.ef[a].ty ? t(n.ef[a], i.effectElements[a], i.effectElements[a].propertyGroup, s) : e(i.effectElements[a], n.ef[a].ty, s, h));

                            function h(t) {
                                return 1 === t ? p : r(t - 1)
                            }
                            var p = function(t) {
                                for (var e = n.ef, i = 0, r = e.length; i < r;) {
                                    if (t === e[i].nm || t === e[i].mn || t === e[i].ix) return 5 === e[i].ty ? o[i] : o[i]();
                                    i += 1
                                }
                                return o[0]()
                            };
                            return p.propertyGroup = h, "ADBE Color Control" === n.mn && Object.defineProperty(p, "color", {
                                get: function() {
                                    return o[0]()
                                }
                            }), Object.defineProperty(p, "numProperties", {
                                get: function() {
                                    return n.np
                                }
                            }), p.active = p.enabled = 0 !== n.en, p
                        }

                        function e(t, e, n, i) {
                            var r = ExpressionPropertyInterface(t.p);
                            return t.p.setGroupProperty && t.p.setGroupProperty(i),
                                function() {
                                    return 10 === e ? n.comp.compInterface(t.p.v) : r()
                                }
                        }
                        return {
                            createEffectsInterface: function(e, n) {
                                if (e.effectsManager) {
                                    var i, r = [],
                                        s = e.data.ef,
                                        a = e.effectsManager.effectElements.length;
                                    for (i = 0; i < a; i += 1) r.push(t(s[i], e.effectsManager.effectElements[i], n, e));
                                    return function(t) {
                                        for (var n = e.data.ef || [], i = 0, s = n.length; i < s;) {
                                            if (t === n[i].nm || t === n[i].mn || t === n[i].ix) return r[i];
                                            i += 1
                                        }
                                    }
                                }
                            }
                        }
                    }(),
                    MaskManagerInterface = function() {
                        function t(t, e) {
                            this._mask = t, this._data = e
                        }
                        return Object.defineProperty(t.prototype, "maskPath", {
                                get: function() {
                                    return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                                }
                            }), Object.defineProperty(t.prototype, "maskOpacity", {
                                get: function() {
                                    return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                                }
                            }),
                            function(e, n) {
                                var i, r = createSizedArray(e.viewData.length),
                                    s = e.viewData.length;
                                for (i = 0; i < s; i += 1) r[i] = new t(e.viewData[i], e.masksProperties[i]);
                                return function(t) {
                                    for (i = 0; i < s;) {
                                        if (e.masksProperties[i].nm === t) return r[i];
                                        i += 1
                                    }
                                }
                            }
                    }(),
                    ExpressionPropertyInterface = function() {
                        var t = {
                                pv: 0,
                                v: 0,
                                mult: 1
                            },
                            e = {
                                pv: [0, 0, 0],
                                v: [0, 0, 0],
                                mult: 1
                            };

                        function n(t, e, n) {
                            Object.defineProperty(t, "velocity", {
                                get: function() {
                                    return e.getVelocityAtTime(e.comp.currentFrame)
                                }
                            }), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function(i) {
                                if (t.numKeys) {
                                    var r;
                                    r = "s" in e.keyframes[i - 1] ? e.keyframes[i - 1].s : "e" in e.keyframes[i - 2] ? e.keyframes[i - 2].e : e.keyframes[i - 2].s;
                                    var s = "unidimensional" === n ? new Number(r) : Object.assign({}, r);
                                    return s.time = e.keyframes[i - 1].t / e.elem.comp.globalData.frameRate, s
                                }
                                return 0
                            }, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup
                        }

                        function i() {
                            return t
                        }
                        return function(r) {
                            return r ? "unidimensional" === r.propType ? function(e) {
                                e && "pv" in e || (e = t);
                                var i = 1 / e.mult,
                                    r = e.pv * i,
                                    s = new Number(r);
                                return s.value = r, n(s, e, "unidimensional"),
                                    function() {
                                        return e.k && e.getValue(), s.value !== (r = e.v * i) && ((s = new Number(r)).value = r, n(s, e, "unidimensional")), s
                                    }
                            }(r) : function(t) {
                                t && "pv" in t || (t = e);
                                var i = 1 / t.mult,
                                    r = t.pv.length,
                                    s = createTypedArray("float32", r),
                                    a = createTypedArray("float32", r);
                                return s.value = a, n(s, t, "multidimensional"),
                                    function() {
                                        t.k && t.getValue();
                                        for (var e = 0; e < r; e += 1) s[e] = a[e] = t.v[e] * i;
                                        return s
                                    }
                            }(r) : i
                        }
                    }(),
                    TextExpressionSelectorProp, propertyGetTextProp;

                function SliderEffect(t, e, n) {
                    this.p = PropertyFactory.getProp(e, t.v, 0, 0, n)
                }

                function AngleEffect(t, e, n) {
                    this.p = PropertyFactory.getProp(e, t.v, 0, 0, n)
                }

                function ColorEffect(t, e, n) {
                    this.p = PropertyFactory.getProp(e, t.v, 1, 0, n)
                }

                function PointEffect(t, e, n) {
                    this.p = PropertyFactory.getProp(e, t.v, 1, 0, n)
                }

                function LayerIndexEffect(t, e, n) {
                    this.p = PropertyFactory.getProp(e, t.v, 0, 0, n)
                }

                function MaskIndexEffect(t, e, n) {
                    this.p = PropertyFactory.getProp(e, t.v, 0, 0, n)
                }

                function CheckboxEffect(t, e, n) {
                    this.p = PropertyFactory.getProp(e, t.v, 0, 0, n)
                }

                function NoValueEffect() {
                    this.p = {}
                }

                function EffectsManager() {}

                function EffectsManager(t, e) {
                    var n = t.ef || [];
                    this.effectElements = [];
                    var i, r, s = n.length;
                    for (i = 0; i < s; i++) r = new GroupEffect(n[i], e), this.effectElements.push(r)
                }

                function GroupEffect(t, e) {
                    this.init(t, e)
                }
                TextExpressionSelectorProp = function() {
                    function t(t, e) {
                        return this.textIndex = t + 1, this.textTotal = e, this.v = this.getValue() * this.mult, this.v
                    }
                    return function(e, n) {
                        this.pv = 1, this.comp = e.comp, this.elem = e, this.mult = .01, this.propType = "textSelector", this.textTotal = n.totalChars, this.selectorValue = 100, this.lastValue = [1, 1, 1], this.k = !0, this.x = !0, this.getValue = ExpressionManager.initiateExpression.bind(this)(e, n, this), this.getMult = t, this.getVelocityAtTime = expressionHelpers.getVelocityAtTime, this.getValueAtTime = this.kf ? expressionHelpers.getValueAtTime.bind(this) : expressionHelpers.getStaticValueAtTime.bind(this), this.setGroupProperty = expressionHelpers.setGroupProperty
                    }
                }(), propertyGetTextProp = TextSelectorProp.getTextSelectorProp, TextSelectorProp.getTextSelectorProp = function(t, e, n) {
                    return 1 === e.t ? new TextExpressionSelectorProp(t, e, n) : propertyGetTextProp(t, e, n)
                }, extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
                    this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
                    var n, i, r = this.data.ef.length,
                        s = this.data.ef;
                    for (n = 0; n < r; n += 1) {
                        switch (i = null, s[n].ty) {
                            case 0:
                                i = new SliderEffect(s[n], e, this);
                                break;
                            case 1:
                                i = new AngleEffect(s[n], e, this);
                                break;
                            case 2:
                                i = new ColorEffect(s[n], e, this);
                                break;
                            case 3:
                                i = new PointEffect(s[n], e, this);
                                break;
                            case 4:
                            case 7:
                                i = new CheckboxEffect(s[n], e, this);
                                break;
                            case 10:
                                i = new LayerIndexEffect(s[n], e, this);
                                break;
                            case 11:
                                i = new MaskIndexEffect(s[n], e, this);
                                break;
                            case 5:
                                i = new EffectsManager(s[n], e, this);
                                break;
                            default:
                                i = new NoValueEffect(s[n], e, this)
                        }
                        i && this.effectElements.push(i)
                    }
                };
                var lottiejs = {},
                    _isFrozen = !1;

                function setLocationHref(t) {
                    locationHref = t
                }

                function searchAnimations() {
                    !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
                }

                function setSubframeRendering(t) {
                    subframeEnabled = t
                }

                function loadAnimation(t) {
                    return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
                }

                function setQuality(t) {
                    if ("string" == typeof t) switch (t) {
                        case "high":
                            defaultCurveSegments = 200;
                            break;
                        case "medium":
                            defaultCurveSegments = 50;
                            break;
                        case "low":
                            defaultCurveSegments = 10
                    } else !isNaN(t) && t > 1 && (defaultCurveSegments = t);
                    roundValues(!(defaultCurveSegments >= 50))
                }

                function inBrowser() {
                    return "undefined" != typeof navigator
                }

                function installPlugin(t, e) {
                    "expressions" === t && (expressionsPlugin = e)
                }

                function getFactory(t) {
                    switch (t) {
                        case "propertyFactory":
                            return PropertyFactory;
                        case "shapePropertyFactory":
                            return ShapePropertyFactory;
                        case "matrix":
                            return Matrix
                    }
                }

                function checkReady() {
                    "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
                }

                function getQueryVariable(t) {
                    for (var e = queryString.split("&"), n = 0; n < e.length; n++) {
                        var i = e[n].split("=");
                        if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1])
                    }
                }
                lottiejs.play = animationManager.play, lottiejs.pause = animationManager.pause, lottiejs.setLocationHref = setLocationHref, lottiejs.togglePause = animationManager.togglePause, lottiejs.setSpeed = animationManager.setSpeed, lottiejs.setDirection = animationManager.setDirection, lottiejs.stop = animationManager.stop, lottiejs.searchAnimations = searchAnimations, lottiejs.registerAnimation = animationManager.registerAnimation, lottiejs.loadAnimation = loadAnimation, lottiejs.setSubframeRendering = setSubframeRendering, lottiejs.resize = animationManager.resize, lottiejs.goToAndStop = animationManager.goToAndStop, lottiejs.destroy = animationManager.destroy, lottiejs.setQuality = setQuality, lottiejs.inBrowser = inBrowser, lottiejs.installPlugin = installPlugin, lottiejs.freeze = animationManager.freeze, lottiejs.unfreeze = animationManager.unfreeze, lottiejs.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottiejs.__getFactory = getFactory, lottiejs.version = "5.5.9";
                var standalone = "__[STANDALONE]__",
                    animationData = "__[ANIMATIONDATA]__",
                    renderer = "";
                if (standalone) {
                    var scripts = document.getElementsByTagName("script"),
                        index = scripts.length - 1,
                        myScript = scripts[index] || {
                            src: ""
                        },
                        queryString = myScript.src.replace(/^[^\?]+\??/, "");
                    renderer = getQueryVariable("renderer")
                }
                var readyStateCheckInterval = setInterval(checkReady, 100);
                return lottiejs
            }, void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                return factory(root)
            }).call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
        },
        maxO: function(t, e, n) {
            "use strict";
            n.d(e, "b", function() {
                return i
            }), n.d(e, "c", function() {
                return r
            }), n.d(e, "a", function() {
                return s
            });
            var i = function() {
                    function t(t) {
                        this.sanitized = t
                    }
                    return t.prototype.transform = function(t, e) {
                        return this.sanitized.bypassSecurityTrustHtml(t)
                    }, t
                }(),
                r = function() {
                    function t(t) {
                        this.sanitizer = t
                    }
                    return t.prototype.transform = function(t) {
                        return this.sanitizer.bypassSecurityTrustResourceUrl(t)
                    }, t
                }(),
                s = function() {
                    return function() {}
                }()
        }
    }
]);