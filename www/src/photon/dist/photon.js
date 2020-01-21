;(function () {
				$.fn.realwidth = function () {
								return this.width() + parseInt(this.css("padding-left")) + parseInt(this.css("padding-right"));
				};$.fn.realheight = function () {
								return this.height() + parseInt(this.css("padding-top")) + parseInt(this.css("padding-bottom"));
				};$.fn.textWidth = function () {
								var o = $(this).html();var g = '<span>' + o + '</span>';$(this).html(g);var width = $(this).find('span:first').width();$(this).html(o);return width;
				};$.fn.retab = function () {
								var i = 0;this.each(function () {
												$(this).attr("tabindex", "0");i++;
								});
				};$.nest = function (nest) {
								var n = nest.split(" ");var s = $(n[0]);n.shift();$.each(n, function (i) {
												s = s.children(n[i]);
								});return s;
				};
})();
!function (t) {
				var e = function () {
								"use strict";
								var e = e || {},
								    n = document.querySelectorAll.bind(document),
								    o = Object.prototype.toString,
								    a = "ontouchstart" in t;function i(t) {
												var e = typeof t;return "function" === e || "object" === e && !!t;
								}function r(t) {
												var e,
												    a = o.call(t);return "[object String]" === a ? n(t) : i(t) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(a) && t.hasOwnProperty("length") ? t : i(e = t) && e.nodeType > 0 ? [t] : [];
								}function s(t) {
												var e,
												    n,
												    o = { top: 0, left: 0 },
												    a = t && t.ownerDocument;return e = a.documentElement, void 0 !== t.getBoundingClientRect && (o = t.getBoundingClientRect()), n = function (t) {
																return null !== (e = t) && e === e.window ? t : 9 === t.nodeType && t.defaultView;var e;
												}(a), { top: o.top + n.pageYOffset - e.clientTop, left: o.left + n.pageXOffset - e.clientLeft };
								}function u(t) {
												var e = "";for (var n in t) t.hasOwnProperty(n) && (e += n + ":" + t[n] + ";");return e;
								}var c = { duration: 5 * $(this).width, delay: 2e3, show: function (t, e, n) {
																if (2 === t.button) return !1;e = e || this;var o = document.createElement("div");o.className = "waves-ripple waves-rippling", e.appendChild(o);var a = s(e),
																    i = 0,
																    r = 0;"touches" in t && t.touches.length ? (i = t.touches[0].pageY - a.top, r = t.touches[0].pageX - a.left) : (i = t.pageY - a.top, r = t.pageX - a.left), r = r >= 0 ? r : 0, i = i >= 0 ? i : 0;var l = "scale(" + Photon.Waves.calc(e, r, i) + ")",
																    d = "translate(0,0)";n && (d = "translate(" + n.x + "px, " + n.y + "px)"), o.setAttribute("data-hold", Date.now()), o.setAttribute("data-x", r), o.setAttribute("data-y", i), o.setAttribute("data-scale", l), o.setAttribute("data-translate", d);var f = { top: i + "px", left: r + "px" };o.classList.add("waves-notransition"), o.setAttribute("style", u(f)), o.classList.remove("waves-notransition"), f["-webkit-transform"] = l + " " + d, f["-moz-transform"] = l + " " + d, f["-ms-transform"] = l + " " + d, f["-o-transform"] = l + " " + d, f.transform = l + " " + d;var v = "mousemove" === t.type ? 750 : c.duration;f["-webkit-transition-duration"] = v + "ms", f["-moz-transition-duration"] = v + "ms", f["-o-transition-duration"] = v + "ms", f["transition-duration"] = v + "ms", o.setAttribute("style", u(f));
												}, hide: function (t, e) {
																for (var n = (e = e || this).getElementsByClassName("waves-rippling"), o = 0, i = n.length; o < i; o++) d(t, e, n[o]);a && (e.removeEventListener("touchend", c.hide), e.removeEventListener("touchcancel", c.hide)), e.removeEventListener("mouseup", c.hide), e.removeEventListener("mouseleave", c.hide);
												} },
								    l = { input: function (e) {
																var n = e.parentNode;if ("i" !== n.tagName.toLowerCase() || !n.classList.contains("waves-effect")) {
																				var o = document.createElement("i");o.className = e.className + " waves-input-wrapper", e.className = "waves-button-input", n.replaceChild(o, e), o.appendChild(e);var a = t.getComputedStyle(e, null),
																				    i = a.color,
																				    r = a.backgroundColor;o.setAttribute("style", "color:" + i + ";background:" + r), e.setAttribute("style", "background-color:rgba(0,0,0,0);");
																}
												}, img: function (t) {
																var e = t.parentNode;if ("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
																				var n = document.createElement("i");e.replaceChild(n, t), n.appendChild(t);
																}
												} };function d(t, e, n) {
												if (n) {
																n.classList.remove("waves-rippling");var o = n.getAttribute("data-x"),
																    a = n.getAttribute("data-y"),
																    i = n.getAttribute("data-scale"),
																    r = n.getAttribute("data-translate"),
																    s = (Date.now(), Number(n.getAttribute("data-hold")), 0);"mousemove" === t.type && (s = 150);var c = "mousemove" === t.type ? 750 : 1250;setTimeout(function () {
																				var t = { top: a + "px", left: o + "px", opacity: "0", "-webkit-transition-duration": c + "ms", "-moz-transition-duration": c + "ms", "-o-transition-duration": c + "ms", "transition-duration": c + "ms", "-webkit-transform": i + " " + r, "-moz-transform": i + " " + r, "-ms-transform": i + " " + r, "-o-transform": i + " " + r, transform: i + " " + r };n.setAttribute("style", u(t)), setTimeout(function () {
																								try {
																												e.removeChild(n);
																								} catch (t) {
																												return !1;
																								}
																				}, c);
																}, s);
												}
								}var f = { touches: 0, allowEvent: function (t) {
																var e = !0;return (/^(mousedown|mousemove)$/.test(t.type) && f.touches && (e = !1), e
																);
												}, registerEvent: function (t) {
																var e = t.type;"touchstart" === e ? f.touches += 1 : /^(touchend|touchcancel)$/.test(e) && setTimeout(function () {
																				f.touches && (f.touches -= 1);
																}, 500);
												} };function v(t) {
												var e = function (t) {
																if (!1 === f.allowEvent(t)) return null;for (var e = null, n = t.target || t.srcElement; n.parentElement;) {
																				if (!(n instanceof SVGElement) && n.classList.contains("waves-effect")) {
																								e = n;break;
																				}n = n.parentElement;
																}return e;
												}(t);if (null !== e) {
																if (e.disabled || e.getAttribute("disabled") || e.classList.contains("disabled")) return;if (f.registerEvent(t), "touchstart" === t.type && c.delay) {
																				var n = !1,
																				    o = setTimeout(function () {
																								o = null, c.show(t, e);
																				}, c.delay),
																				    i = function (a) {
																								o && (clearTimeout(o), o = null, c.show(t, e)), n || (n = !0, c.hide(a, e)), s();
																				},
																				    r = function (t) {
																								o && (clearTimeout(o), o = null), i(t), s();
																				};e.addEventListener("touchmove", r, !1), e.addEventListener("touchend", i, !1), e.addEventListener("touchcancel", i, !1);var s = function () {
																								e.removeEventListener("touchmove", r), e.removeEventListener("touchend", i), e.removeEventListener("touchcancel", i);
																				};
																} else c.show(t, e), a && (e.addEventListener("touchend", c.hide, !1), e.addEventListener("touchcancel", c.hide, !1)), e.addEventListener("mouseup", c.hide, !1), e.addEventListener("mouseleave", c.hide, !1);
												}
								}return e.init = function (t) {
												var e = document.body;"duration" in (t = t || {}) && (c.duration = t.duration), "delay" in t && (c.delay = t.delay), a && (e.addEventListener("touchstart", v, !1), e.addEventListener("touchcancel", f.registerEvent, !1), e.addEventListener("touchend", f.registerEvent, !1)), e.addEventListener("mousedown", v, !1);
								}, e.attach = function (t, e) {
												var n, a;t = r(t), "[object Array]" === o.call(e) && (e = e.join(" ")), e = e ? " " + e : "";for (var i = 0, s = t.length; i < s; i++) a = (n = t[i]).tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(a) && (l[a](n), n = n.parentElement), -1 === n.className.indexOf("waves-effect") && (n.className += " waves-effect" + e);
								}, e.ripple = function (t, e) {
												var n = (t = r(t)).length;if ((e = e || {}).wait = e.wait || 0, e.position = e.position || null, n) for (var o, a, i, u = {}, l = 0, d = { type: "mousedown", button: 1 }, f = function (t, e) {
																return function () {
																				c.hide(t, e);
																};
												}; l < n; l++) if (o = t[l], a = e.position || { x: o.clientWidth / 2, y: o.clientHeight / 2 }, i = s(o), u.x = i.left + a.x, u.y = i.top + a.y, d.pageX = u.x, d.pageY = u.y, c.show(d, o), e.wait >= 0 && null !== e.wait) {
																setTimeout(f({ type: "mouseup", button: 1 }, o), e.wait);
												}
								}, e.calm = function (t) {
												for (var e = { type: "mouseup", button: 1 }, n = 0, o = (t = r(t)).length; n < o; n++) c.hide(e, t[n]);
								}, e.displayEffect = function (t) {
												e.init(t);
								}, e;
				};$(function () {
								$(".waves-effect").on("touchstart", function (t) {
												var e = t.targetTouches[0].pageX - $(this).offset().left,
												    n = t.targetTouches[0].pageY - $(this).offset().top;Waves.ripple(this, { wait: 1e10, position: $(this).hasClass("waves-ink") ? null : { x: e, y: n } });
								}).on("touchend", function (t) {
												Waves.calm(this);
								});
				}), "function" == typeof define && define.amd ? define([], function () {
								return t.Waves = e.call(t), t.Waves;
				}) : "object" == typeof exports ? module.exports = e.call(t) : t.Waves = e.call(t);
}(window);

const Photon = {
				activeDialog: undefined,
				autoready: true,
				events: {},
				speed: 150,

				guid() {
								let s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
								return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
				},
				updateTextFields() {
								$(".input-field").not(".slider-field").each(function () {
												if ($(this).children("input").val().length > 0) {
																$(this).children("input").addClass("containscontent");
												}
								});
				},

				Waves: {
								reload() {
												$(".waves-ink").off("mousedown").bind("mousedown", function (e) {
																$(this).children(".waves-ripple").fadeOut(500);
																e.stopPropagation();
																Waves.ripple(this, {
																				wait: 1e10
																});
												}).on("mouseup mouseleave", function () {
																Waves.calm(this);
												}).bind("touchstart", function (e) {
																e.stopPropagation();
												});

												$(".waves-effect").on("touchstart", function () {
																$(this).children(".waves-ripple").remove();
												}).on("touchend", function () {
																$(this).addClass("waves-touch");
												});
								},
								calc(a, relativeX, relativeY) {
												a = $(a);
												let d = 52;
												let dj = 0.118;
												let dx = 1.019;
												let dy = 0.350;
												let f = 1;
												let h = a.realheight();
												let w = a.realwidth();
												let x = relativeX;
												let y = relativeY;
												if (x > w / 2) {
																x = w - x;
												}
												if (y > h / 2) {
																y = h - y;
												}
												x = w - x;
												y = h / 2 - y;
												f = (x * dx + y * dy + (h + w) / 2 * dj) / d;
												if (h == w) {
																let q = w - (h - (w - x) - (h - y));
																return (w - Math.abs(q - w)) / 50;
												}
												if (a.hasClass("waves-ink")) {
																return 0.475;
												}
												if (a.hasClass("waves-touch")) {
																a.removeClass("waves-touch");
																return f / 1.1;
												}
												return f;
								}
				}

};

Photon.disableArrowKeyScrolling = false;
[window, document].map(v => v.addEventListener("keydown", e => {
				if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
								Photon.disableArrowKeyScrolling && e.preventDefault();
				}
}, false));

;(function () {
				$.fn.checkgroup = function () {
								return this.each(function () {

												const _this = this;
												$(this).children(".checkbox").children("input[type=\"checkbox\"]").change(function () {
																const __this = this;
																setTimeout(() => {
																				$(this).removeClass("indeterminate");
																}, Photon.speed);
																$(_this).children(".children").children(".checkbox").each(function () {
																				$(this).children("input[type=\"checkbox\"]").prop("checked", $(__this).prop("checked"));
																});
												});

												$(this).children(".children").children(".checkbox").children("input[type=\"checkbox\"]").change(function () {
																let vals = [];
																$(this).parents(".children").children(".checkbox").each(function () {
																				vals.push($(this).children("input[type=\"checkbox\"]").prop("checked"));
																});

																const e = vals.every(v => v === vals[0]);

																if (e) {
																				$(_this).children(".checkbox").children("input[type=\"checkbox\"]").prop("checked", vals[0]).removeClass("indeterminate");
																} else {
																				$(_this).children(".checkbox").children("input[type=\"checkbox\"]").prop("checked", true).addClass("indeterminate");
																}
												});
								});
				};
				$.fn.expansionpanel = function (options, methodParam) {
								let defaults = {
												accordion: undefined,
												onOpen: undefined,
												onClose: undefined
								};

								let methodName = options;
								options = $.extend(defaults, options);

								return this.each(function () {

												let $this = $(this);
												let $panel_headers = $(this).find('> li > .expansion-header');
												let expansionpanel_type = $this.data("expansion-panel");

												function accordionOpen(object) {
																$panel_headers = $this.find('> li > .expansion-header');

																if (object.hasClass('active')) {
																				object.parent().addClass('active');
																} else {
																				object.parent().removeClass('active');
																}

																if (object.parent().hasClass('active')) {
																				object.siblings('.expansion-body').stop(true, false).slideDown({
																								duration: Photon.speed,
																								queue: false,
																								complete: function () {
																												$(this).css('height', '');
																								}
																				});
																} else {
																				object.siblings('.expansion-body').stop(true, false).slideUp({
																								duration: Photon.speed,
																								queue: false,
																								complete: function () {
																												$(this).css('height', '');
																								}
																				});
																}

																$panel_headers.not(object).removeClass('active').parent().removeClass('active');

																$panel_headers.not(object).parent().children('.expansion-body').stop(true, false).each(function () {

																				if ($(this).is(':visible')) {
																								$(this).slideUp({
																												duration: Photon.speed,
																												queue: false,
																												complete: function () {
																																$(this).css('height', '');
																																execCallbacks($(this).siblings('.expansion-header'));
																												}
																								});
																				}
																});
												}

												function expandableOpen(object) {
																if (object.hasClass('active')) {
																				object.parent().addClass('active');
																} else {
																				object.parent().removeClass('active');
																}

																if (object.parent().hasClass('active')) {
																				object.siblings('.expansion-body').stop(true, false).slideDown({
																								duration: Photon.speed,
																								easing: "linear",
																								queue: false,
																								complete: function () {
																												$(this).css('height', '');
																								}
																				});
																} else {
																				object.siblings('.expansion-body').stop(true, false).slideUp({
																								duration: Photon.speed,
																								easing: "linear",
																								queue: false,
																								complete: function () {
																												$(this).css('height', '');
																								}
																				});
																}
												}

												function expansionpanelOpen(object, noToggle) {
																if (!noToggle) {
																				object.toggleClass('active');
																}

																if (options.accordion || expansionpanel_type === "accordion" || expansionpanel_type === undefined) {
																				accordionOpen(object);
																} else {
																				expandableOpen(object);
																}

																execCallbacks(object);
												}

												function execCallbacks(object) {
																if (object.hasClass('active')) {
																				if (typeof options.onOpen === "function") {
																								options.onOpen.call(this, object.parent());
																				}
																} else {
																				if (typeof options.onClose === "function") {
																								options.onClose.call(this, object.parent());
																				}
																}
												}

												function isChildrenOfPanelHeader(object) {
																let panelHeader = getPanelHeader(object);
																return panelHeader.length > 0;
												}

												function getPanelHeader(object) {
																return object.closest('li > .expansion-header');
												}

												function removeEventHandlers() {
																$this.off('click.collapse', '> li > .expansion-header');
												}

												if (methodName === 'destroy') {
																removeEventHandlers();
																return;
												} else if (methodParam >= 0 && methodParam < $panel_headers.length) {
																let $curr_header = $panel_headers.eq(methodParam);
																if ($curr_header.length && (methodName === 'open' || methodName === 'close' && $curr_header.hasClass('active'))) {
																				expansionpanelOpen($curr_header);
																}
																return;
												}

												removeEventHandlers();

												$this.on('click.collapse', '> li > .expansion-header', function (e) {
																let element = $(e.target);

																if (isChildrenOfPanelHeader(element)) {
																				element = getPanelHeader(element);
																}

																expansionpanelOpen(element);
												});

												if (options.accordion || expansionpanel_type === "accordion" || expansionpanel_type === undefined) {
																expansionpanelOpen($panel_headers.filter('.active').first(), true);
												} else {
																$panel_headers.filter('.active').each(function () {
																				expansionpanelOpen($(this), true);
																});
												}
								});
				};
				$.fn.scrollnav = function () {
								this.each(function () {
												$(this).children("li").children("a[data-scrollto]").click(function () {
																let stop = $($(this).data("scrollto")).offset().top - parseInt($(this).parent().parent().data("offset") || 0) - 64;
																window.scroll({
																				top: stop,
																				behavior: "smooth"
																});
												});
												$(this).children("li").children("a[href]").click(function () {
																window.location.href = $(this).attr("href");
												});
								});
								return this;
				};
				$.fn.select = function () {
								this.each(function () {

												let input = $(this).children("input");
												let acopt = $(this).children(".options");

												let selopt = -1;

												input.attr("readonly", "true");

												$(this).children("label,input").mouseup(function (e) {
																acopt.addClass("active");
																$(this).keyup();
																e.stopPropagation();
												});
												input.focus(function (e) {
																Photon.disableArrowKeyScrolling = true;
																$(this).keyup();
												}).blur(function () {
																Photon.disableArrowKeyScrolling = false;
												}).click(function (e) {
																e.stopPropagation();
												}).keydown(function (e) {
																if (e.which == 38) {
																				selopt--;
																				if (selopt < 0) selopt = 0;

																				let opt = $(acopt.children(".option")[selopt]);
																				opt.addClass("active").siblings().removeClass("active");
																				input.val(opt.text()).addClass("containscontent");
																} else if (e.which == 40) {
																				selopt++;
																				if (selopt >= acopt.children(".option").length) selopt = acopt.children(".option").length - 1;

																				let opt = $(acopt.children(".option")[selopt]);
																				opt.addClass("active").siblings().removeClass("active");
																				input.val(opt.text()).addClass("containscontent");
																};

																let p = acopt.children(".option.active").index() * 43 - 64;
																acopt.animate({
																				scrollTop: p
																}, {
																				duration: 175,
																				queue: false
																});

																let opt = $(acopt.children(".option")[selopt]);
																input.val(opt.text()).addClass("containscontent").trigger("change");
												});

												$("body").click(function () {
																acopt.removeClass("active");
												});

												acopt.children(".option").click(function (e) {

																selopt = $(this).index();

																let opt = $(acopt.children(".option")[selopt]);
																opt.addClass("active").siblings().removeClass("active");
																input.val(opt.text()).addClass("containscontent").trigger("change");;
												});

												let preset = false;
												acopt.children(".option").each(function () {
																if ($(this).hasClass("active")) {
																				preset = true;
																				$(this).click();
																				let p = acopt.children(".option.active").index() * 44 - 64;
																				acopt.animate({
																								scrollTop: p
																				}, {
																								duration: 0,
																								queue: false
																				});
																}
												});

												if (!preset) {
																acopt.children(".option").first().click();
												}
								});
								return this;
				};
				$.fn.sidenav = function (a) {
								const i = this;
								const guid = Photon.guid();

								i.attr("data-sn", guid);

								let touch = 0;
								let og = 0;

								$(".sidenav--draghandle").remove();
								$("body").append(`<div class="sidenav--draghandle"></div>`);

								if (a) {
												switch (a.toLowerCase()) {
																case "open":
																				i.addClass("active").animate({
																								left: 300
																				}, Photon.speed, "swing");
																				$(".sidenav--draghandle").css({
																								left: 300,
																								width: "100%"
																				});
																				break;
																case "close":
																				i.animate({
																								left: 0
																				}, Photon.speed, "swing", function () {
																								$(this).removeClass("active");
																				});
																				$(".sidenav--draghandle").css({
																								left: 0,
																								width: "10px"
																				});
																				break;
												}
								}

								$(".sidenav--draghandle").on("touchstart", function (e) {
												og = e.changedTouches[0].pageX;
								}).on("touchmove", function (e) {
												e.preventDefault();
												touch = e.changedTouches[0].pageX;
												touch = touch > 300 ? 300 : touch;
												touch = touch < 0 ? 0 : touch;

												$(this).css({
																"left": touch
												});

												i.addClass("active").css({
																"left": touch
												});
								}).on("touchend", function () {
												i.animate({
																"left": touch > 150 ? 300 : 0
												}, Photon.speed, "swing");
												$(this).css({
																"left": touch > 150 ? 300 : 0,
																"width": touch > 150 ? "100%" : 10
												});
												if (touch < 150) {
																i.removeClass("active");
												}
								}).click(function () {
												i.animate({
																left: 0
												}, Photon.speed, "swing", function () {
																$(this).removeClass("active");
												});
												$(this).css({
																"left": 0,
																"width": 10
												});
								});

								return this;
				};
				$.fn.slider = function (s = "", g) {
								this.each(function () {

												let thumb = $(this).children(".thumb");
												let ripple = $(this).children(".thumb").children(".ripple");
												let track = $(this).children(".determinate");
												let slider = $(this);

												let value = parseInt($(this).attr("value") || "50");

												thumb.css("left", value + "%");
												track.width(value + "%");

												thumb.off("mousedown touchstart").on("mousedown touchstart", startDrag);

												function startDrag() {
																Waves.ripple(ripple, { wait: 1e10 });
																$("body").on("mousemove touchmove", function (e) {
																				e.preventDefault();
																				let x = e.pageX || (e.changedTouches[0] || { pageX: 0 }).pageX;
																				let o = (x - slider.offset().left - 3) / slider.width() * 100;
																				o = o < 0 ? 0 : o;
																				o = o > 100 ? 100 : o;
																				thumb.css("left", o + "%");
																				track.width(o + "%");
																				slider.attr("value", o);
																});
												}

												slider.click(function (e) {
																let x = e.pageX;
																let o = (x - slider.offset().left - 3) / slider.width() * 100;
																o = o < 0 ? 0 : o;
																o = o > 100 ? 100 : o;

																thumb.css({ "left": o + "%" });
																track.css({ "width": o + "%" });
																slider.attr("value", o);
												});

												$("body").on("mouseup touchcancel touchend", function () {
																$(this).off("mousemove touchmove");
																Waves.calm(ripple);
												});
								});

								if (s.toLowerCase() == "value") {
												return parseInt(this.attr("value") || "50");
								} else if (s.toLowerCase() == "set") {

												let o = g;

												let thumb = this.children(".thumb");
												let track = this.children(".determinate");
												let slider = this;

												thumb.animate({
																"left": o + "%"
												}, Photon.speed, "swing");
												track.animate({
																"width": o + "%"
												}, Photon.speed, "swing");

												slider.attr("value", o);
								}

								return this;
				};
				$.fn.tabs = function (methodOrOptions) {

								let methods = {
												init: function (options) {
																let defaults = {
																				onShow: null
																};
																options = $.extend(defaults, options);
																let namespace = function (obj) {
																				let tagStr = obj.prop('tagName') || '';
																				let idStr = obj.attr('id') || '';
																				let classStr = obj.attr('class') || '';
																				return (tagStr + idStr + classStr).replace(/\s/g, '');
																}($(this));

																return this.each(function (i) {

																				let uniqueNamespace = namespace + i;
																				let $this = $(this),
																				    window_width = $(window).width();

																				let $active,
																				    $content,
																				    $links = $this.find('li.tab a'),
																				    $tabs_width = $this.width(),
																				    $tabs_content = $(),
																				    $tabs_wrapper,
																				    $tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length,
																				    $indicator,
																				    index = 0,
																				    prev_index = 0,
																				    clicked = false,
																				    clickedTimeout,
																				    transition = Photon.speed;

																				let calcRightPos = function (el) {
																								try {
																												return Math.ceil($tabs_width - el.position().left - el[0].getBoundingClientRect().width - $this.scrollLeft()) + el.realwidth() / 2 - el.textWidth() / 2;
																								} catch (e) {
																												void e;
																								}
																				};

																				let calcLeftPos = function (el) {
																								try {
																												return Math.floor(el.position().left + $this.scrollLeft()) + el.realwidth() / 2 - el.textWidth() / 2;
																								} catch (e) {
																												void e;
																								}
																				};

																				let animateIndicator = function (prev_index) {
																								if (index - prev_index >= 0) {
																												$indicator.css({
																																"right": calcRightPos($active)
																												});
																												setTimeout(() => $indicator.css({
																																"left": calcLeftPos($active)
																												}), $this.hasClass("tabs-new") ? 130 : 60);
																								} else {
																												$indicator.css({
																																"left": calcLeftPos($active)
																												});
																												setTimeout(() => $indicator.css({
																																"right": calcRightPos($active)
																												}), $this.hasClass("tabs-new") ? 130 : 60);
																								}
																				};

																				// If the location.hash matches one of the links, use that as the active tab.
																				$active = $($links.filter('[href="' + location.hash + '"]'));

																				// If no match is found, use the first link or any with class 'active' as the initial active tab.
																				if ($active.length === 0) {
																								$active = $(this).find('li.tab.active a').first();
																				}
																				if ($active.length === 0) {
																								$active = $(this).find('li.tab a').first();
																				}

																				$active.parent().addClass('active');
																				index = $links.index($active);
																				if (index < 0) {
																								index = 0;
																				}

																				if ($active[0] !== undefined) {
																								$content = $($active[0].hash);
																								$content.addClass('active');
																				}

																				// append indicator then set indicator width to tab width
																				if (!$this.find('.indicator').length) {
																								$this.append('<li class="indicator"></li>');
																				}
																				$indicator = $this.find('.indicator');

																				// we make sure that the indicator is at the end of the tabs
																				$this.append($indicator);

																				if ($this.is(":visible")) {
																								// $indicator.css({"right": $tabs_width - ((index + 1) * $tab_width)});
																								// $indicator.css({"left": index * $tab_width});
																								setTimeout(function () {
																												$indicator.css({
																																"right": calcRightPos($active)
																												});
																												$indicator.css({
																																"left": calcLeftPos($active)
																												});
																								}, 0);
																				}
																				$(window).off('resize.tabs-' + uniqueNamespace).on('resize.tabs-' + uniqueNamespace, function () {
																								$tabs_width = $this.width();
																								$tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length;
																								if (index < 0) {
																												index = 0;
																								}
																								if ($tab_width !== 0 && $tabs_width !== 0) {
																												$indicator.css({
																																"right": calcRightPos($active)
																												});
																												$indicator.css({
																																"left": calcLeftPos($active)
																												});
																								}
																				});

																				$this.off('click.tabs').on('click.tabs', 'a', function (e) {
																								if ($(this).parent().hasClass('disabled')) {
																												e.preventDefault();
																												return;
																								}

																								// Act as regular link if target attribute is specified.
																								if (!!$(this).attr("target")) {
																												return;
																								}

																								clicked = true;
																								$tabs_width = $this.width();
																								$tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length;

																								// Make the old tab inactive.
																								$active.parent().removeClass('active');
																								let $oldContent = $content;

																								// Update the variables with the new link and content
																								$active = $(this);
																								$content = $(function (hash) {
																												return hash.replace(/(:|\.|\[|\]|,|=)/g, "\\$1");
																								}(this.hash));
																								$links = $this.find('li.tab a');
																								let activeRect = $active.position();

																								// Make the tab active.
																								$active.addClass('active');
																								prev_index = index;
																								index = $links.index($(this));
																								if (index < 0) {
																												index = 0;
																								}
																								// Change url to current tab
																								// window.location.hash = $active.attr('href');

																								// Swap content
																								if (options.swipeable) {
																												if ($tabs_content.length) {
																																$tabs_content.carousel('set', index, function () {
																																				if (typeof options.onShow === "function") {
																																								options.onShow.call($this[0], $content);
																																				}
																																});
																												}
																								} else {
																												if ($content !== undefined) {
																																$content.show();
																																$content.addClass('active');
																																if (typeof options.onShow === "function") {
																																				options.onShow.call(this, $content);
																																}
																												}

																												if ($oldContent !== undefined && !$oldContent.is($content)) {
																																$oldContent.hide();
																																$oldContent.removeClass('active');
																												}
																								}

																								// Reset clicked state
																								clickedTimeout = setTimeout(function () {
																												clicked = false;
																								}, transition);

																								// Update indicator
																								animateIndicator(prev_index);

																								// Prevent the anchor's default click action
																								e.preventDefault();
																				});
																});
												},
												select_tab: function (id) {
																this.find('a[href="#' + id + '"]').trigger('click');
												}
								};

								requestAnimationFrame(() => {
												if (this.children(".tab.active").length === 0) {
																this.children(".tab").first().children("a").click();
												} else {
																this.children(".tab.active").children("a").click();
												}
								});

								if (methods[methodOrOptions]) {
												return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
								} else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
												return methods.init.apply(this, arguments);
								} else {
												$.error('Method ' + methodOrOptions + ' does not exist on jQuery.tabs');
								}
				};
				$.fn.tooltip = function (options) {

								options = $.extend({
												delay: 0,
												position: "bottom",
												tooltip: "",
												classes: []
								}, options);

								return this.each(function () {

												const descriptor = $(this);

												options["delay"] = parseInt($(this).data("delay")) || options["delay"];
												options["position"] = $(this).data("position") || options["position"];
												options["tooltip"] = $(this).data("tooltip") || options["tooltip"];
												options["classes"] = ($(this).data("tooltipclass") || "").split(" ") || options["classes"];

												const guid = Photon.guid();
												if (options.position.toLowerCase() == "bottom") {
																let center = descriptor.offset().left;
												}

												$(this).mouseenter(function () {
																setTimeout(() => $("#" + guid).addClass("active"), options.delay);
												}).on("mouseleave click contextmenu", function () {
																setTimeout(() => $("#" + guid).removeClass("active"), options.delay);
												});

												$("body").append(`<div class="material-tooltip" id="${guid}">${options.tooltip}</div>`);
												const tooltip = $("#" + guid);

												let proX = pos => {
																if (pos < 4) pos = 4;
																if (pos > window.innerWidth - 4) pos = window.innerWidth - 4;
																return pos;
												};

												let proY = pos => {
																if (pos < 4) pos = 4;
																return pos;
												};

												for (let classes of options.classes) tooltip.addClass(classes);
												if (options.position.toLowerCase() == "top") {
																tooltip.addClass("tt-top");
																(function position() {
																				tooltip.css("top", proY(descriptor.offset().top - tooltip.realheight() - 4));
																				tooltip.css("left", proX(descriptor.offset().left + descriptor.realwidth() / 2 - tooltip.realwidth() / 2));
																				requestAnimationFrame(position);
																})();
												} else if (options.position.toLowerCase() == "left") {
																tooltip.addClass("tt-left");
																(function position() {
																				tooltip.css("top", proY(descriptor.offset().top + descriptor.realheight() / 2 - tooltip.realheight() / 2));
																				tooltip.css("left", proX(descriptor.offset().left - tooltip.realwidth() - 4));
																				requestAnimationFrame(position);
																})();
												} else if (options.position.toLowerCase() == "right") {
																tooltip.addClass("tt-right");
																(function position() {
																				tooltip.css("top", proY(descriptor.offset().top + descriptor.realheight() / 2 - tooltip.realheight() / 2));
																				tooltip.css("left", proX(descriptor.offset().left + descriptor.realwidth() + 4));
																				requestAnimationFrame(position);
																})();
												} else {
																tooltip.addClass("tt-bottom");
																(function position() {
																				tooltip.css("top", proY(descriptor.offset().top + descriptor.realheight() + 4));
																				tooltip.css("left", proX(descriptor.offset().left + descriptor.realwidth() / 2 - tooltip.realwidth() / 2));
																				requestAnimationFrame(position);
																})();
												}
								});
				};

				Photon.toast = function () {
								return new class Toast {
												constructor(args) {
																args = this.args = {
																				content: args[0] || "",
																				delay: args[1] || 2000,
																				classes: (typeof args[2] == "string" ? args[2].split(" ") : args[2]) || [],
																				guid: Photon.guid()
																};

																$(".toasts").length == 0 && $(document.body).append(`<div class="toasts"></div>`);

																$(".toasts").append(`<div class="toast" id="${args.guid}"></div>`);
																let toast = $("#" + args.guid);

																toast.html(args.content);
																toast.addClass(args.classes.join(" "));

																requestAnimationFrame(function () {
																				toast.addClass("active");
																});

																this.toast = toast;

																let todest;
																let requeue = () => {
																				clearTimeout(todest);
																				todest = setTimeout(() => this.destroy(), args.delay);
																};

																requeue();
																toast.on("mousedown", function (e) {
																				toast.attr("data-hold", e.pageX);
																}).click(function (e) {
																				e.stopPropagation();
																				$(this).addClass("has-focus").siblings().removeClass("has-focus");
																});

																let instance = this;
																$(document.body).on("mouseup", function () {
																				toast.removeAttr("data-hold");

																				if (toast.css("opacity") <= 0.3) {
																								instance.destroy();
																				} else {
																								toast.css("transform", "translateX(0)");
																								toast.css("opacity", 1);
																				}
																}).on("mousemove", function (e) {

																				if (toast.attr("data-hold")) {

																								requeue();

																								let hold = e.pageX - parseInt(toast.data("hold"));
																								toast.css("transform", `translateX(${hold}px)`);
																								toast.css("opacity", 1 - Math.abs(hold) / 100);
																				}
																}).click(function () {
																				$(".toasts").children(".toast").removeClass("has-focus");
																}).keydown(function (e) {
																				let aftoast = $(".toasts").children(".toast.has-focus").addClass("ta");
																				if (e.which === 37) {
																								aftoast.css({ "transform": `translateX(-${aftoast.width() / 2}px)` });
																				} else if (e.which === 39) {
																								aftoast.css({ "transform": `translateX(${aftoast.width() / 2}px)` });
																				}
																				aftoast.css({ "opacity": 0 });

																				setTimeout(() => {
																								aftoast.addClass("oeff");
																								setTimeout(() => aftoast.remove(), 200);
																				}, 150);
																});
												}

												destroy() {
																let { toast } = this;
																toast.addClass("oeff");
																toast.next().addClass("has-focus");

																setTimeout(() => toast.remove(), 200);
												}

								}(arguments);
				};
				Photon.dialog = class Dialog {
								constructor(options) {
												this.options = $.extend({
																title: "This page says:",
																size: "auto",
																message: "",
																transition: "fade",
																actions: [],
																inputs: [],
																assets: 1,
																force: false
												}, options);

												this.resolved = false;
												this.guid = Photon.guid();
								}
								destroy(dialog = $("#" + this.guid)) {
												if (!(this.options.type == "progress" || this.options.force) || this.resolved) {
																requestAnimationFrame(() => {
																				dialog.parent().removeClass("active");
																				setTimeout(() => dialog.parent().remove(), 200);
																});
												} else {
																this.focus();
												}
												Photon.activeDialog = undefined;
								}
								focus(dialog = $("#" + this.guid)) {
												dialog.addClass("enlarge");
												setTimeout(() => dialog.removeClass("enlarge"), 150);
								}
								open() {

												const Super = this;

												$(".photon-dialog").remove();
												$("body").append(`<div class="photon-dialog"><div class="dialog" id="${this.guid}"></div></div>`);

												const dialog = $("#" + this.guid);
												dialog.parent().click(function (e) {
																if ($(e.target).hasClass("photon-dialog")) Super.destroy(dialog);
												});

												dialog.addClass("transition-" + this.options.transition);
												requestAnimationFrame(() => dialog.parent().addClass("active"));

												if (this.options.type == "alert") {
																dialog.append(`<div class="title">${this.options.title}</div>`);
																dialog.append(`<div class="body">${this.options.message}</div>`);
												} else if (this.options.type == "form") {
																this.promptguid = Photon.guid();
																dialog.append(`<div class="title">${this.options.title}</div>`);
																dialog.append(`<div class="body">${this.options.message.length > 0 ? "<p>" : ""}${this.options.message}${this.options.message.length > 0 ? "</p>" : ""}</div>`);

																let slug = str => {
																				str = str.toLowerCase();
																				str = str.replace(/\s|\@|\!|\#|\$|\%|\^|\&|\*\|9|\)|\(/g, "-");
																};

																for (let input of this.options.inputs) {
																				dialog.children(".body").append(`<div class="input-field ${input.variant || "default"}"><input type="${input.type || "text"}" id="${input.id || slug(input.label)}" /><label for="${input.id || slug(input.label)}">${input.label}</label></div>`);
																}

																this.value = () => {
																				let resp = {};
																				dialog.children(".body").children(".input-field").each(function () {
																								resp[$(this).children("input").attr("id")] = $(this).children("input").val();
																				});
																				return resp;
																};
																Photon.reload();

																dialog.children(".body").children(".input-field").first().children("input").focus();
																Photon.updateTextFields();
												} else if (this.options.type == "progress") {
																if (this.options.circular) {
																				let progid = Photon.guid();
																				dialog.append(`<div class="body"><svg class="spinner"><circle cx="50" cy="50" r="20"></circle></svg>${this.options.message}</div>`);
																				this.options.size = "spinner";
																} else {
																				let progid = Photon.guid();
																				let aid = Photon.guid();
																				dialog.append(`<div class="body">${this.options.message}<div class="progress"><div class="determinate" id="${progid}"></div></div><div class="assets" id="${aid}">0/0</div></div>`);
																				this.options.size = "progress";

																				this.asset = 0;
																				this.increment = function (value = 1) {
																								this.asset += value;
																								const percent = this.asset / this.options.assets;
																								$("#" + progid).css("width", percent * 100 + "%").css("transition", "none");
																								$("#" + aid).text(`${this.asset}/${this.options.assets}`);
																								if (percent == 1) {
																												this.increment = function () {};
																												this.resolved = true;
																												this.destroy();
																								}
																				};
																}
												} else if (this.options.type == "radio") {

																this.options.size = "choice";
																dialog.append(`<div class="title">${this.options.title}</div>`);

																const group = Photon.guid();
																const ouid = Photon.guid();

																dialog.append(`<div class="body"><div class="options" id="${ouid}"></div></div>`);
																const options = $("#" + ouid);
																for (let option of this.options.options) {
																				let uuid = Photon.guid();
																				options.append(`<div class="radio-btn"><input type="radio" id="${uuid}" name="${group}"${option.default ? " checked" : ""}><label for="${uuid}">${option.name}</label><div class="ripple waves-effect waves-ink"></div></div>`);

																				if (option.select) {
																								$("#" + uuid).change(function () {
																												if ($(this).prop("checked")) option.select();
																								});
																				}
																}

																Photon.reload();

																$("[name='" + group + "']").change(function () {
																				$(this).prop("checked") && Waves.ripple($(this).siblings(".ripple")[0]);
																});

																this.value = () => $("[for='" + $("[name='" + group + "']:checked").attr("id") + "']").text();
												} else if (this.options.type == "checkbox") {

																this.options.size = "choice";
																dialog.append(`<div class="title">${this.options.title}</div>`);

																const group = Photon.guid();
																const ouid = Photon.guid();

																dialog.append(`<div class="body"><div class="options" id="${ouid}"></div></div>`);
																const options = $("#" + ouid);
																for (let option of this.options.options) {
																				let uuid = Photon.guid();
																				options.append(`<div class="checkbox"><input type="checkbox" id="${uuid}" name="${group}"${option.selected ? " checked" : ""}><label for="${uuid}">${option.name}</label><div class="ripple waves-effect waves-ink"></div></div>`);
																}

																Photon.reload();

																$("[name='" + group + "']").change(function () {
																				$(this).prop("checked") && Waves.ripple($(this).siblings(".ripple")[0]);
																});

																this.value = () => {
																				let ops = [];
																				$("[name='" + group + "']:checked").each(function () {
																								ops.push($(this).siblings("label").text());
																				});
																				return ops;
																};
												} else if (this.options.type == "user") {
																this.options.size = "dense";
																dialog.append(`<div class="title">${this.options.title}</div>`);

																dialog.append(`<div class="users"></div>`);

																let img = "data:image/svg+xml;base64," + btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="#1e88e5"><circle fill="#bbdefb" cx="20" cy="20" r="20"/><g transform="translate(5,4) scale(1.25)"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/><path d="M0 0h24v24H0z" fill="none"/></g></svg>`);
																for (let user of this.options.users || []) {
																				let xuid = Photon.guid();
																				dialog.children(".users").append(`<div id="${xuid}" class="user waves-effect"><img src="${user.image || img}" alt="" /><span class="desc">${user.desc}</span></div>`);
																				user.click && $(`#${xuid}`).click(() => user.click(this));
																}

																if (this.options.methods.length > 0 && this.options.users.length > 0) dialog.children(".users").append(`<hr />`);

																let add = "data:image/svg+xml;base64," + btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="#fff"><circle fill="#c1c1c1" cx="20" cy="20" r="20"/><g transform="translate(5,5) scale(1.25)"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"/></g></svg>`);
																for (let method of this.options.methods || []) {
																				let xuid = Photon.guid();
																				dialog.children(".users").append(`<div id="${xuid}" class="user method waves-effect"><img src="${method.image || add}" alt="" /><span class="desc">${method.name}</span></div>`);
																				method.click && $(`#${xuid}`).click(() => method.click(this));
																}
												} else if (this.options.type == "date") {
																this.options.size = "picker";
																if (!this.options.date || !this.options.date instanceof Date) this.options.date = new Date();

																const FULLMONTHS = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
																const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
																const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

																let format = date => `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()}`;
																let format2 = date => `${FULLMONTHS[date.getMonth()]} ${date.getFullYear()}`;

																this.options = $.extend({
																				future: true,
																				past: true,
																				onselect() {}
																}, this.options);

																dialog.addClass("photon-datepicker");

																dialog.append(`<div class="bar"><div class="year">${this.options.date.getFullYear()}</div><div class="date active">${format(this.options.date)}</div></div>`);
																dialog.append(`<div class="body years"></div>`);
																dialog.append(`<div class="body calendar active"></div>`);

																dialog.children(".bar").children(".year").click(function () {
																				$(this).addClass("active").siblings().removeClass("active");
																				dialog.children(".body").removeClass("active");
																				dialog.children(".body.years").addClass("active");
																});
																dialog.children(".bar").children(".date").click(function () {
																				$(this).addClass("active").siblings().removeClass("active");
																				dialog.children(".body").removeClass("active");
																				dialog.children(".body.calendar").addClass("active");
																});

																const years = dialog.children(".body.years");
																const calendar = dialog.children(".body.calendar");

																calendar.append(`<div class="calnav"><i class="material-icons waves-effect waves-ink">chevron_left</i><div class="monthyear alt">ALT</div><div class="monthyear">${format2(this.options.date)}</div><i class="material-icons waves-effect waves-ink right">chevron_right</i></div>`);

																calendar.append(`<div class="cal-slider"></div><div class="cal-slider alt"></div>`);
																calendar.children(".cal-slider").append(`<div class="headers"><div class="header">S</div><div class="header">M</div><div class="header">T</div><div class="header">W</div><div class="header">T</div><div class="header">F</div><div class="header">S</div></div>`);

																let value = this.options.date;

																const pri = calendar.children(".calnav").children(".monthyear").not(".alt");
																const alt = calendar.children(".calnav").children(".monthyear.alt").hide();
																const both = calendar.children(".calnav").children(".monthyear");

																const cmp = calendar.children(".cal-slider").not(".alt");
																const cma = calendar.children(".cal-slider.alt").hide();
																const cmb = calendar.children(".cal-slider");

																cmb.append(`<div class="cal"></div>`);

																let selected = new Date(this.options.date);

																let update = date => {

																				dialog.children(".bar").children(".year").html(date.getFullYear());
																				dialog.children(".bar").children(".date").html(format(date));

																				opts.onselect(date);

																				value = date;
																};

																let opts = this.options;
																let repop = (cal, date) => {

																				value = date;

																				let today = new Date();

																				cal.empty();
																				years.empty();

																				let frange = [date.getFullYear(), date.getFullYear()];
																				if (opts.past) frange[0] -= 100;
																				if (opts.future) frange[1] += 100;

																				for (let i = frange[0]; i <= frange[1]; i++) {
																								let classes = ["yearsel", "waves-effect"];
																								if (i == opts.date.getFullYear()) {
																												classes.push("selected");
																								}

																								years.append(`<div class="${classes.join(" ")}">${i}</div>`);
																				}

																				let scroll = 0;
																				let l = 48;
																				years.children().each(function () {
																								if ($(this).hasClass("selected")) l = 0;
																								scroll += l;
																				}).click(function () {
																								$(this).addClass("selected").siblings().removeClass("selected");
																								value.setYear(parseInt($(this).text()));

																								repop(cmp.children(".cal"), value);
																								pri.text(format2(value));
																				});

																				years.scrollTop(scroll - 144);

																				date.setDate(1);
																				for (let i = 0; i < date.getDay(); i++) {
																								cal.append(`<div class="datecell"></div>`);
																				}

																				date.setMonth(date.getMonth() + 1);
																				date.setDate(-1);

																				for (let i = 0; i < date.getDate() + 1; i++) {
																								let classes = ["date"];

																								if (i + 1 == today.getDate() && date.getMonth() == today.getMonth() && date.getYear() == today.getYear()) {
																												classes.push("today");
																								}
																								if (i + 1 == selected.getDate() && date.getMonth() == selected.getMonth() && date.getYear() == selected.getYear()) {
																												classes.push("selected");
																								}

																								let current = new Date(date);
																								current.setDate(i + 1);

																								let now = new Date();
																								now.setDate(now.getDate() - 1);

																								if (current.getTime() < now.getTime() && !opts.past) classes.push("disabled");
																								if (current.getTime() > now.getTime() + 86400000 && !opts.future) classes.push("disabled");

																								cal.append(`<div class="datecell"><div class="${classes.join(" ")}">${i + 1}</div></div>`);
																				}

																				cal.children(".datecell").children(".date").not(".disabled").click(function () {
																								cal.children(".datecell").children(".date").removeClass("selected");
																								$(this).addClass("selected");

																								selected.setDate(parseInt($(this).text()));
																								selected.setMonth(value.getMonth());
																								selected.setYear(value.getFullYear());

																								update(value);
																								bindTouches();
																				});

																				bindTouches();
																};

																this.value = () => selected;

																calendar.children(".calnav").children("i").click(function () {

																				both.show();
																				cmb.show();

																				cmp.children(".cal").unbind("touchstart touchmove touchend");

																				if ($(this).hasClass("right")) {

																								value.setMonth(value.getMonth() + 1);
																								repop(cma.children(".cal"), value);

																								pri.css("transform", "translateX(0)");
																								alt.css("transform", "translateX(100%)").text(format2(value));
																								requestAnimationFrame(() => {
																												both.addClass("animating");
																												pri.css("transform", "translateX(-100%)");
																												alt.css("transform", "translateX(0)");
																												setTimeout(() => {
																																both.removeClass("animating");
																																requestAnimationFrame(() => {
																																				pri.css("transform", "translateX(0)").text(format2(value));
																																				repop(cmp.children(".cal"), value);

																																				alt.hide();
																																});
																												}, 350);
																								});

																								cmp.css("transform", "translateX(0)");
																								cma.css("transform", "translateX(100%)");
																								requestAnimationFrame(() => {
																												cmb.addClass("animating");
																												cmp.css("transform", "translateX(-100%)");
																												cma.css("transform", "translateX(0)");
																												setTimeout(() => {
																																cmb.removeClass("animating");
																																requestAnimationFrame(() => {
																																				cmp.css("transform", "translateX(0)");
																																				cma.hide();
																																});
																												}, 350);
																								});
																				} else {

																								let dc = value.getMonth();
																								value.setMonth(value.getMonth() - 1);
																								if (value.getMonth() == dc) {
																												value.setMonth(value.getMonth() - 1);
																								}

																								repop(cma.children(".cal"), value);

																								pri.css("transform", "translateX(0)");
																								alt.css("transform", "translateX(-100%)").text(format2(value));
																								requestAnimationFrame(() => {
																												both.addClass("animating");
																												pri.css("transform", "translateX(100%)");
																												alt.css("transform", "translateX(0)");
																												setTimeout(() => {
																																both.removeClass("animating");
																																requestAnimationFrame(() => {
																																				pri.css("transform", "translateX(0)").text(format2(value));
																																				repop(cmp.children(".cal"), value);

																																				alt.hide();
																																});
																												}, 350);
																								});

																								cmp.css("transform", "translateX(0)");
																								cma.css("transform", "translateX(-100%)");
																								requestAnimationFrame(() => {
																												cmb.addClass("animating");
																												cmp.css("transform", "translateX(100%)");
																												cma.css("transform", "translateX(0)");
																												setTimeout(() => {
																																cmb.removeClass("animating");
																																requestAnimationFrame(() => {
																																				cmp.css("transform", "translateX(0)");
																																				cma.hide();
																																});
																												}, 350);
																								});
																				}
																});

																repop(cmp.children(".cal"), value);

																function bindTouches() {

																				let initialTouch;
																				let touch;
																				let touchSign;
																				let swipe;

																				let cache;

																				cmp.children(".cal").bind("touchstart", e => {
																								initialTouch = e.changedTouches[0].clientX;
																								cache = new Date(value);
																				}).bind("touchmove", e => {
																								touch = e.changedTouches[0].clientX;
																								let relative = initialTouch - touch;
																								let touchRelSign;

																								if (relative > 0) {
																												touchRelSign = 1;
																								} else if (relative == 0) {
																												touchRelSign = 0;
																								} else {
																												touchRelSign = -1;
																								}

																								if (touchRelSign !== touchSign) {
																												touchSign = touchRelSign;
																												signFlip();
																								}

																								swipe = Math.abs((initialTouch - touch) / dialog.width()) * 100;
																								if (touchSign === 1) {

																												pri.css("transform", `translateX(${-swipe}%)`);
																												alt.css("transform", `translateX(${-swipe + 100}%)`);

																												cmp.css("transform", `translateX(${-swipe}%)`);
																												cma.css("transform", `translateX(${-swipe + 100}%)`);
																								} else if (touchSign === -1) {

																												pri.css("transform", `translateX(${swipe}%)`);
																												alt.css("transform", `translateX(${swipe - 100}%)`);

																												cmp.css("transform", `translateX(${swipe}%)`);
																												cma.css("transform", `translateX(${swipe - 100}%)`);
																								}
																				}).bind("touchend", e => {

																								swipe = Math.abs((initialTouch - e.changedTouches[0].clientX) / dialog.width()) * 100;
																								cmp.children(".cal").unbind("touchstart touchmove touchend");

																								if (touchSign === 1) {

																												if (swipe > 40) {

																																value = cache;

																																both.addClass("animating");
																																pri.css("transform", "translateX(-100%)");
																																alt.css("transform", "translateX(0)");
																																setTimeout(() => {
																																				both.removeClass("animating");
																																				requestAnimationFrame(() => {
																																								pri.css("transform", "translateX(0)").text(format2(value));
																																								repop(cmp.children(".cal"), value);

																																								alt.hide();
																																				});
																																}, 350);

																																cmb.addClass("animating");
																																cmp.css("transform", "translateX(-100%)");
																																cma.css("transform", "translateX(0)");
																																setTimeout(() => {
																																				cmb.removeClass("animating");
																																				requestAnimationFrame(() => {
																																								cmp.css("transform", "translateX(0)");
																																								cma.hide();
																																				});
																																}, 350);
																												} else {

																																try {
																																				cache.setMonth(cache.getMonth() - 1);

																																				both.addClass("animating");
																																				pri.css("transform", "translateX(0)");
																																				alt.css("transform", "translateX(100%)");

																																				cmb.addClass("animating");
																																				cmp.css("transform", "translateX(0)");
																																				cma.css("transform", "translateX(100%)");

																																				setTimeout(() => {
																																								both.removeClass("animating");
																																								cmb.removeClass("animating");
																																				}, 350);
																																} catch (e) {
																																				void e;
																																}

																																bindTouches();
																												}
																								} else if (touchSign === -1) {

																												if (swipe > 40) {

																																value = cache;

																																both.addClass("animating");
																																pri.css("transform", "translateX(100%)");
																																alt.css("transform", "translateX(0)");
																																setTimeout(() => {
																																				both.removeClass("animating");
																																				requestAnimationFrame(() => {
																																								pri.css("transform", "translateX(0)").text(format2(value));
																																								repop(cmp.children(".cal"), value);

																																								alt.hide();
																																				});
																																}, 350);

																																cmb.addClass("animating");
																																cmp.css("transform", "translateX(100%)");
																																cma.css("transform", "translateX(0)");
																																setTimeout(() => {
																																				cmb.removeClass("animating");
																																				requestAnimationFrame(() => {
																																								cmp.css("transform", "translateX(0)");
																																								cma.hide();
																																				});
																																}, 350);
																												} else {

																																try {
																																				cache.setMonth(cache.getMonth() + 1);

																																				both.addClass("animating");
																																				pri.css("transform", "translateX(0)");
																																				alt.css("transform", "translateX(-100%)");

																																				cmb.addClass("animating");
																																				cmp.css("transform", "translateX(0)");
																																				cma.css("transform", "translateX(-100%)");

																																				setTimeout(() => {
																																								both.removeClass("animating");
																																								cmb.removeClass("animating");
																																				}, 350);
																																} catch (e) {
																																				void e;
																																}

																																bindTouches();
																												}
																								}
																				});

																				function signFlip() {
																								try {
																												if (touchSign === 1) {
																																cache.setMonth(cache.getMonth() + 1);
																												} else if (touchSign === -1) {
																																let precache = cache.getMonth();
																																cache.setMonth(cache.getMonth() - 1);
																																if (precache === cache.getMonth()) cache.setMonth(cache.getMonth() - 1);
																												}

																												alt.text(format2(cache)).show();

																												cma.show();
																												repop(cma.children(".cal"), cache);
																								} catch (e) {
																												void e;
																								}
																				}
																}
												} else if (this.options.type == "time") {
																this.options.size = "picker";

																dialog.addClass("photon-timepicker");
																dialog.append(`<div class="bar accent"></div>`);

																dialog.append(`<div class="clock"></div>`);

																for (let i = 0; i < 12; i++) dialog.children(".clock").append(`<div class="timecell dc-pos-${i}">${i}</div>`);
												}

												dialog.addClass("size-" + this.options.size);
												this.options.actions.length > 0 && dialog.append(`<div class="actions"></div>`);

												this.$ = dialog;
												Photon.activeDialog = this;

												for (let action of this.options.actions) {
																action.acid = Photon.guid();
																dialog.children(".actions").append(`<a id="${action.acid}" class="btn ${action.variant || "flat"} waves-effect waves-accent">${action.name}</a>`);
																action.role == "primary" && $("#" + action.acid).css("left", "4px").css("position", "absolute");
																action.click && $(`#${action.acid}`).click(() => {
																				this.resolved = true;
																				action.click(this);
																});
												}

												$("body").keyup(e => {
																if (e.which == 27) {
																				this.destroy();
																} else if (e.which == 13) {
																				dialog.children(".actions").children().first().click();
																}
												});
								}

				};
})();

Photon.lastReload = -500;
Photon.ready = Photon.reload = () => {
				if (performance.now() - 500 > Photon.lastReload) {
								Photon.lastReload = performance.now();
				} else return false;

				$(".material-tooltip").remove();

				$(".checkbox-group").checkgroup();
				$(".expansion-panel").expansionpanel();
				$(".scrollnav").scrollnav();
				$(".select").select();
				$(".sidenav").not(`[data-sn]`).sidenav();
				$(".slider").slider();
				$(".tabs").tabs();
				$(".tooltipped").tooltip();

				Waves.init();

				$("iframe[src^='https://youtube.com/embed'],iframe[src^='http://youtube.com/embed']").each(function () {
								$(this).attr("height", $(this).width() * (9 / 16));
				});

				$(".input-field, .checkbox, .radio-btn, .switch").each(function () {
								if ($(this).children("input").attr("id") === undefined && $(this).children("label").attr("for") === undefined) {
												let id = Photon.guid();
												$(this).children("label").attr("for", id);
												$(this).children("input").attr("id", id);
								}
				});

				$("label").each(function () {
								let f = $("#" + $(this).attr("for"));
								$(this).addClass("for-" + f.attr("type"));

								$(this).on("mousedown", function () {
												f.siblings(".ripple").children().remove();
												Waves.ripple(f.siblings(".ripple"), {
																wait: 1e10
												});
								}).on("mouseup", function () {
												Waves.calm(f.siblings(".ripple"));
								});
				});

				;(function () {
								$(".input-field input,.input-field.select select").focus(function () {

												if ($(this).parent().children(".bar").length > 0) return;

												$(this).parent().append("<div class=\"bar\"></div>");
												let bar = $(this).siblings(".bar");

												let { X } = window.cursor;
												X = X - $(this).offset().left;
												X = X / $(this).width() * 100;
												X = X > $(this).parent().width() ? $(this).parent().width() : X;

												bar.css({
																left: X + "%"
												});

												if ($(this).parent().hasClass("outlined")) {
																bar.css({
																				left: 0,
																				width: $(this).parent().hasClass("outlined") ? $(this).parent().width() - 4 : "100%",
																				opacity: 0
																}).animate({
																				opacity: 1
																}, Photon.speed, "swing");
												} else {
																bar.animate({
																				left: 0,
																				width: $(this).parent().hasClass("outlined") ? $(this).parent().width() - 4 : "100%"
																}, Photon.speed, "swing");
												}
								}).blur(function () {
												const b = $(this).siblings(".bar");
												b.animate({
																opacity: 0
												}, Photon.speed, function () {
																setTimeout(() => b.remove(), Photon.speed);
												});
								}).change(function () {
												if ($(this).val() != "") {
																$(this).addClass("containscontent");
												} else {
																$(this).removeClass("containscontent");
												}
								}).each(function () {
												if ($(this).val() != "") {
																$(this).addClass("containscontent");
												} else {
																$(this).removeClass("containscontent");
												}
												if ($(this).attr("type").toLowerCase() == "password" && !$(this).is(":disabled")) {
																let id = Photon.guid();
																$("#" + id).click(function () {
																				let i = $(this).siblings("input");
																				if (i.attr("type").toLowerCase() == "password") {
																								i.attr("type", "text");
																								$(this).html("&#xE8F5;");
																				} else {
																								i.attr("type", "password");
																								$(this).html("&#xE8F4;");
																				}
																				$(this).siblings("input").focus();
																});
												} else if ($(this).attr("type").toLowerCase() == "number") {
																$(this).val($(this).val() || "0").addClass("containscontent");
																$(this).off("mousewheel").on("mousewheel", function (e) {
																				let v = parseInt($(this).val());
																				e.preventDefault();

																				function getDelta(g) {
																								if (e.originalEvent.deltaY < 0) {
																												return g * 1;
																								} else {
																												return g * -1;
																								}
																				}

																				if (e.altKey) {
																								v += getDelta(1000);
																				} else if (e.ctrlKey) {
																								v += getDelta(100);
																				} else if (e.shiftKey) {
																								v += getDelta(10);
																				} else {
																								v += getDelta(1);
																				}

																				if (v > parseInt($(this).attr("max"))) v = parseInt($(this).attr("max"));
																				if (v < parseInt($(this).attr("min"))) v = parseInt($(this).attr("min"));

																				$(this).val(v);
																});
												}
								}).siblings("label").click(function () {
												$(this).siblings("input:not(:disabled)").focus();
								}).each(function () {
												$(this).parent().mouseenter();
								});
				})();

				Photon.Waves.reload();

				requestAnimationFrame(() => {
								$(".tabs.auto").each(function () {
												$(this).children(".tab").each(function () {
																$(this).children("a").click();
												}).first().children("a").click();
								});
				});

				$(".checkbox,.radio-btn,.switch").children("input").on("mousedown touchstart", function () {
								Waves.calm($(this).siblings(".ripple"));
								Waves.ripple($(this).siblings(".ripple"), {
												wait: 1e10
								});
				}).on("mouseup", function () {
								Waves.calm($(this).siblings(".ripple"));
				}).on("touchstart", function () {
								$(this).parent().addClass("held");
								Waves.calm($(this).siblings(".ripple"));
								Waves.ripple($(this).siblings(".ripple"), {
												wait: 1e10
								});
				}).on("touchend", function () {
								$(this).parent().removeClass("held");
								Waves.calm($(this).siblings(".ripple"));
				});

				;(function () {
								let track = 0;
								let start = 0;

								$(".tabs-swipeable").on("touchstart", function (e) {

												e.preventDefault();
												start = e.touches[0].clientX;
								}).on("touchmove", function (e) {

												e.preventDefault();
												track = e.changedTouches[0].pageX;
								}).on("touchend", function () {

												let swipeleft = start - track > 100;
												let swiperight = start - track < -100;

												if (swiperight) {
																$("a[href=\"#" + $(this).attr("id") + "\"]").parent().prev().children("a").click();
												}
												if (swipeleft) {
																$("a[href=\"#" + $(this).attr("id") + "\"]").parent().next().children("a").click();
												}

												start = 0;
												track = 0;
								});
				})();

				$(".input-field.box").click(function () {
								$(this).children("input").focus();
				});
};

$(() => {

				Photon.autoready && Photon.ready();
				$(document.body).mousemove(e => {
								window.cursor = {};
								window.cursor.X = e.pageX;
								window.cursor.Y = e.pageY;
				});

				setInterval(() => Waves.ripple($(".waves-pulse"), {
								wait: 750
				}), 1250);

				(function animation() {
								requestAnimationFrame(animation);

								$(".toolbar, .app-bar").each(function () {
												if ($(this).children(".title").children(".subtitle").length == 1) {
																$(this).children(".title").css("margin-top", "-10px");
												}
								});

								if ($(document).scrollTop() > 0) {
												$(".toolbar.paper, .app-bar.paper, .toolbar.floating, .app-bar.floating").addClass("raised");
								} else {
												$(".toolbar.paper, .app-bar.paper, .toolbar.floating, .app-bar.floating").removeClass("raised");
								}

								$(".card-image.parallax").each(function () {
												let t = $(this).children("img");
												let px = ($("html").scrollTop() - t.offset().top * .75) / 20;
												t[0].style.transform = "scale(2) translateY(" + px + "px)";
								});

								$(".expansion-panel").each(function () {
												$(this).children().removeClass("adjact");
												$(this).children(".active").prev("li").addClass("adjact");
								});

								if ($(document).height() === window.innerHeight) {
												$("footer").not(".static").css({
																"position": "fixed",
																"width": "100%",
																"bottom": 24 - parseInt($("footer").not(".static").data("offset") || "0")
												});
								} else {
												$("footer").not(".static").css({
																"position": "static",
																"width": "auto",
																"bottom": "auto"
												});
								}

								$(".toolbar.parallax, .app-bar.parallax").each(function () {
												const st = $("html").scrollTop();

												let padding = 260 - st - 64;
												if (padding < 0) padding = 0;

												let opacity = 1 - st / 260;
												let filter = "none";
												if (opacity > 0.73) opacity = 0.73;
												if (opacity < 0.26) {
																opacity = 0.26;
																filter = "blur(4px)";
																$(this).removeClass("flat");
												} else {
																$(this).addClass("flat");
												}

												$(this).height(260 - st);
												$(this).children("img").css("opacity", opacity).css("filter", filter);
												$(this).children(".toolbar, .app-bar").css("margin-top", padding);
								});
				})();
});

typeof module === "object" && (module.exports = Photon);