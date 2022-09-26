if (function () {
    function e(e) {
        return document.getElementById(e)
    }

    document.addEventListener("DOMContentLoaded", function () {
        e("loading");
        var n = e("progstat"), t = document.images, o = 0, r = t.length, i = document.querySelectorAll(".hideOnLoad");
        if (disableScroll(), setTimeout(function () {
            for (var e = i.length - 1; e >= 0; e--) i[e].style.display = "block";
            init(), animate(), run(), setTimeout(start, 300)
        }, 100), 0 == r) return c();

        function a() {
            var e = (100 / r * (o += 1) << 0) + "%";
            if (n.innerHTML = "Loading " + e, o === r) return c()
        }

        function c() {
            setTimeout(function () {
                appear(), enableScroll()
            }, 2500)
        }

        for (var l = 0; l < r; l++) {
            var s = new Image;
            s.onload = a, s.onerror = a, s.src = t[l].src
        }
    }, !1)
}(), /Edge/.test(navigator.userAgent) || /Safari/.test(navigator.userAgent)) var isSafari = !0; else isSafari = !1;
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
    isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1, currentYear = (new Date).getFullYear(),
    copyRight = document.getElementById("copyRightYear"), copyRight2 = document.getElementById("copyRightYear2");

function anchorLinkHandler(e) {
    const n = e => Math.floor(e.getBoundingClientRect().top);
    e.preventDefault();
    const t = this.getAttribute("href"), o = document.querySelector(t);
    if (!o) return;
    const r = n(o);
    window.scrollBy({top: r, left: 0, behavior: "smooth"});
    const i = setInterval(function () {
        0 === n(o) && (o.tabIndex = "-1", o.focus(), clearInterval(i))
    }, 100)
}

function navLinkHandler(e) {
    const n = e => Math.floor(e.getBoundingClientRect().top);
    e.preventDefault();
    const t = this.getAttribute("href"), o = document.querySelector(t);
    if (!o) return;
    const r = n(o);
    window.scrollBy({top: r, left: 0});
    const i = setInterval(function () {
        0 === n(o) && (o.tabIndex = "-1", o.focus(), clearInterval(i))
    }, 100)
}

copyRight.innerHTML = currentYear, function () {
    "use strict";
    var e = window;
    const n = document.getElementsByTagName("body")[0];
    n.addEventListener("mousemove", function (n) {
        if (t.style.left = n.clientX + "px", t.style.top = n.clientY + "px", menu.classList.contains("active")) return;
        if (!isFirefox || isFirefox) {
            var l = 1.5 * n.clientX / e.innerWidth * 100 - 100, s = 1.5 * n.clientY / e.innerHeight * 100 - 100;
            TweenMax.to(i, 2, {
                rotationY: .06 * l,
                rotationX: -.06 * s,
                transformPerspective: 500,
                transformOrigin: "center center -100",
                ease: Expo.easeOut
            }), TweenMax.to(o, 2, {
                rotationY: .06 * l,
                rotationX: -.06 * s,
                transformPerspective: 500,
                transformOrigin: "center center -450",
                ease: Expo.easeOut
            }), TweenMax.to(r, 2, {
                rotationY: .06 * l,
                rotationX: -.06 * s,
                transformPerspective: 500,
                transformOrigin: "center center -300",
                ease: Expo.easeOut
            })
        }
        if (isChrome) for (var d = a.length - 1; d >= 0; d--) {
            var u = a[d];
            u.style.display = "block", c(u, n)
        }
    });
    var t = document.getElementById("cursor");
    n.addEventListener("mousedown", function (e) {
        t.classList.add("clicked")
    }), n.addEventListener("mouseup", function (e) {
        setTimeout(function () {
            t.classList.remove("clicked")
        }, 300)
    });
    document.querySelectorAll(".section.active");
    var o = document.querySelectorAll(".section-tagline-wrapper"),
        r = document.querySelectorAll(".section-img-wrapper"), i = document.querySelectorAll(".section-no-wrapper"),
        a = (document.querySelectorAll(".pattern"), document.querySelectorAll(".pattern"));

    function c(e, n) {
        e.style.setProperty("--clip-position", n.clientX + "px " + n.clientY + "px")
    }

    function l(e) {
        t.classList.add("hover")
    }

    function s(e) {
        t.classList.remove("hover")
    }

    for (var d = document.querySelectorAll(".hover-target"), u = d.length - 1; u >= 0; u--) {
        f(d[u])
    }

    function f(e) {
        e.addEventListener("mouseover", l), e.addEventListener("mouseout", s)
    }
}();
const linksToAnchors = document.querySelectorAll(".scroll"), navToAnchors = document.querySelectorAll(".scroll-nav");
linksToAnchors.forEach(e => e.onclick = anchorLinkHandler), navToAnchors.forEach(e => e.onclick = navLinkHandler);
var a = document.getElementById("container");

function start() {
    a.classList.add("start")
}

function appear() {
    a.classList.add("appear")
}

var renderer, scene, camera, composer, circle, skelet, particle, c = document.getElementById("canvas__bg"),
    $ = c.getContext("2d"), col = function (e, n, t, o, r) {
        $.fillStyle = "rgb(" + t + "," + o + "," + r + ")", $.fillRect(e, n, 1, 1)
    }, R = function (e, n, t) {
        return Math.floor(236 + 64 * Math.cos((e * e - n * n) / 300 + t))
    }, G = function (e, n, t) {
        return Math.floor(41 + 64 * Math.sin((e * e * Math.cos(t / 4) + n * n * Math.sin(t / 3)) / 300))
    }, B = function (e, n, t) {
        return Math.floor(46 + 64 * Math.sin(5 * Math.sin(t / 9) + ((e - 100) * (e - 100) + (n - 100) * (n - 100)) / 1100))
    }, t = 0, run = function () {
        for (x = 0; x <= 35; x++) for (y = 0; y <= 35; y++) col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
        t += .03, window.requestAnimationFrame(run)
    };

function openMenu(e, n) {
    e.classList.add("is-active"), n.classList.add("active"), disableScroll()
}

function closeMenu(e, n) {
    e.classList.remove("is-active"), n.classList.remove("active"), enableScroll()
}

function preventDefault(e) {
    (e = e || window.event).preventDefault && e.preventDefault(), e.returnValue = !1
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) return preventDefault(e), !1
}

function disableScroll() {
    window.addEventListener && window.addEventListener("DOMMouseScroll", preventDefault, !1), window.onwheel = preventDefault, window.onmousewheel = document.onmousewheel = preventDefault, window.ontouchmove = preventDefault, document.onkeydown = preventDefaultForScrollKeys
}

function enableScroll() {
    window.removeEventListener && window.removeEventListener("DOMMouseScroll", preventDefault, !1), window.onmousewheel = document.onmousewheel = null, window.onwheel = null, window.ontouchmove = null, document.onkeydown = null
}

function init() {
    (renderer = new THREE.WebGLRenderer({
        antialias: !0,
        alpha: !0
    })).setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1), renderer.setSize(window.innerWidth, window.innerHeight), renderer.autoClear = !1, renderer.setClearColor(0, 0), document.getElementById("canvas__three").appendChild(renderer.domElement), scene = new THREE.Scene, (camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1e3)).position.z = 400, scene.add(camera), circle = new THREE.Object3D, skelet = new THREE.Object3D, particle = new THREE.Object3D, scene.add(circle), scene.add(skelet), scene.add(particle);
    for (var e = new THREE.TetrahedronGeometry(2, 0), n = new THREE.TetrahedronGeometry(7, 0), t = new THREE.IcosahedronGeometry(15, 0), o = new THREE.MeshPhongMaterial({
        color: 16777215,
        shading: THREE.FlatShading
    }), r = 0; r < 20; r++) {
        var i = new THREE.Mesh(e, o);
        i.position.set(Math.random() - .5, Math.random() - .5, Math.random() - .5).normalize(), i.position.multiplyScalar(90 + 700 * Math.random()), particle.add(i)
    }
    var a = new THREE.MeshPhongMaterial({color: 16777000, shading: THREE.FlatShading}),
        c = new THREE.MeshPhongMaterial({color: 16777215, wireframe: !0, side: THREE.DoubleSide}),
        l = new THREE.Mesh(n, a);
    // l.scale.x = l.scale.y = l.scale.z = 16, circle.add(l);
    var s = new THREE.Mesh(t, c);
    // s.scale.x = s.scale.y = s.scale.z = 10, skelet.add(s);
    var d = new THREE.AmbientLight(6710886);
    scene.add(d);
    var u = [];
    u[0] = new THREE.DirectionalLight(16777215, 1), u[0].position.set(1, 0, 0), u[1] = new THREE.DirectionalLight(15728895, 1), u[1].position.set(.75, 1, .5), u[2] = new THREE.DirectionalLight(3961855, 1), u[2].position.set(-.75, -1, .5), scene.add(u[0]), scene.add(u[1]), scene.add(u[2]), window.addEventListener("resize", onWindowResize, !1)
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight, camera.updateProjectionMatrix(), renderer.setSize(window.innerWidth, window.innerHeight)
}

function animate() {
    requestAnimationFrame(animate), particle.rotation.x += 0, particle.rotation.y -= .004, circle.rotation.x -= .002, circle.rotation.y -= .003, skelet.rotation.x -= .001, skelet.rotation.y += .002, renderer.clear(), renderer.render(scene, camera)
}

function activateSection() {
    if (!menu.classList.contains("active")) for (var e = window.scrollY, n = document.querySelectorAll(".section"), t = n.length - 1; t >= 0; t--) {
        o(n[t], e)
    }

    function o(e, n) {
        var t = e.offsetTop - e.clientHeight / 1.5, o = t + e.clientHeight + 200;
        n > t && n < o ? e.classList.add("active") : e.classList.remove("active")
    }
}

!function () {
    "use strict";
    var e = document.querySelectorAll(".c-hamburger");
    const n = document.getElementById("menu");
    for (var t = document.querySelectorAll(".nav-menu"), o = e.length - 1; o >= 0; o--) {
        var r = e[o];
        i(r, n)
    }

    function i(e, n) {
        e.addEventListener("click", function (t) {
            t.preventDefault(), !0 === this.classList.contains("is-active") ? closeMenu(e, n) : openMenu(e, n)
        })
    }

    for (o = t.length - 1; o >= 0; o--) {
        a(r, n, t[o])
    }

    function a(e, n, t) {
        t.addEventListener("click", function (t) {
            closeMenu(e, n)
        })
    }
}(), isSafari && (document.documentElement.className = "scroll-update-fix"), window.onload = function () {
}, window.addEventListener("scroll", function () {
    activateSection()
});