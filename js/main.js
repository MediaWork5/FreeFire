$(document).ready(function (){setInterval(function (){var t=["cr", "ma", "rs"], e=[ "Mohamed", "ahmad", "salma", "pewdiepie", "Marko", "PesaJajar", "وصال مستعد", "xxMine", "anwar", "naroto", "حميد مساند", "عمر الدالى", "fouad", "ClashHacker", "new_kid", "BloodMaster", "lovegaming", "Johnny", "NaneK", "Salma Wisam", "محمد قسول", "fuzzzy", "محمد بن عز", "yearboy1007", "Ministar", "Haxajmo", "Pottato", "soundoss", "Alex", "kakachi", "Hillck23", "Creeper", "zaCk", "محمد المسعودي", "gunshaxer", "علي المعمور",], i=[ "./img/icon/icon.webp", "./img/icon/icon3.webp", "./img/icon/icon2.webp", "./img/icon/icon1.webp", "./img/icon/icon4.webp", "./img/icon/icon6.webp", "./img/icon/icon5.webp", "./img/icon/icon7.webp", "./img/icon/icon8.webp",], n=t[Math.floor(Math.random() * t.length)], o=i[Math.floor(Math.random() * i.length)], s=e[Math.floor(Math.random() * e.length)], a=Math.floor(1e5 * Math.random() + 500), r=Math.floor(5e5 * Math.random() + 500); $(".live-stats").last().remove(), $(".activityContent") .hide() .prepend( '<div class="live-stats"><div class="avatar"><img src="' + o + '" alt="صور اشخاص قاموا الحصول على جواهر فري فاير"/></div><div class="flag"><img src="img/flags/' + n + '.webp" alt="أعلام الدول التي تلعب فري فاير"/></div><div class="info"><ul><li><b>' + s + ',</b> : حصل عليها الأن</li><li><img class="item-gen" src="img/Item1.webp" alt="عدد الذهب free fire الدي المجاني"/>عدد الدهب: <span class="bucks-color">' + a + '</span> </li><li><img class="item-gen" src="img/Item2.webp" alt="عدد جواهر فري فاير المجاني"/>عدد الجواهر: <span class="bucks-color">' + r + "</span> </li></ul></div></div>" ) .fadeIn();}, 2e3); var t=$(".Item1-input"); t.updown({step: 5e3, min: 5e3, max: 1e5}); var e=t.data("updown"); $(".plus-Item1").click(function (t){e.increase(t), e.triggerEvents();}), $(".minus-Item1").click(function (t){e.decrease(t), e.triggerEvents();}); var i=$(".Item2-input"); i.updown({step: 5e3, min: 5e3, max: 1e5}); var n=i.data("updown"); $(".plus-Item2").click(function (t){n.increase(t), n.triggerEvents();}), $(".minus-Item2").click(function (t){n.decrease(t), n.triggerEvents();}), $(".btnGenerator").click(function (){var t=$(".username-input").val(); ""==t || t.replace(/ /g, "").length < 2 ? $(".username-input").css({border: "1px solid #F00"}) : ($(".username-input").css({border: "1px solid #111319"}), $(".generator").slideUp(function (){var t, e; $(".generator-step2").slideDown(), (t=1), (e=setInterval(function (){20==t && $(".load-textJS").html("الاتصال مع الخادم"); 30==t && $(".load-textJS").html("Fetching data"); 40==t && $(".load-textJS").html("GET=Variables"); 50==t && $(".load-textJS").html("GET -> Username"); 60==t && $(".load-textJS").html("GET -> IP Address"); 70==t && $(".load-textJS").html("GET -> Coins"); 80==t && $(".load-textJS").html("GET -> Diamonds"); 90==t && $(".load-textJS").html("POST=> DATA"); 100 <=t ? (clearInterval(e), $(".generator-step2").slideUp(), $(".generator-step3").slideDown(), $(".userJS").html($(".username-input").val()), $(".Item1JS").countTo({from: 10, to: $(".Item1-input").val(), speed: 1e3, refreshInterval: 1, onComplete: function (t){$(".Item1JSthick").css("opacity", "1"), setTimeout(function (){$(".generator-step3").fadeOut(function (){$(".generator-offers").fadeIn();});}, 2e3);},}), $(".Item2JS").countTo({from: 10, to: $(".Item2-input").val(), speed: 1e3, refreshInterval: 1, onComplete: function (t){$(".Item2JSthick").css("opacity", "1"), setTimeout(function (){$(".generator-step3").fadeOut(function (){$(".generator-offers").fadeIn();});}, 2e3);},})) : (t++, $(".progress-bar").css("width", t + "%"), $(".progress-bar").html(+t + "%"));}, 300)), goToByScroll("generatorJS");}));}), $(".btn-GoGenerator").click(function (){goToByScroll("generator");});}), (function (n){"use strict"; function o(t, e){(this.defaultOptions={step: 1, shiftStep: 6, circle: !1, min: null, max: null}), this.init(t, e);}(o.prototype={constructor: o, init: function (t, e){return (this.$element=t), (this.options=n.extend(!0, this.defaultOptions, e)), this.watchKeyboard(), this.watchMouse(), this;}, watchKeyboard: function (){var i=this; return ( this.$element.bind("keydown", function (t){var e=t.keyCode ? t.keyCode : t.which; i.keysMap[e] && !isNaN(i.getInputVal()) && (i.keysMap[e].call(i, t), t.preventDefault());}), this );}, watchMouse: function (){var i=this; return ( this.$element.bind("mousewheel DOMMouseScroll", function (t){var e=window.event || t; Math.max(-1, Math.min(1, e.wheelDelta || -e.detail || -e.originalEvent.detail)) < 0 ? i.keysMap[40].call(i, t) : i.keysMap[38].call(i, t), t.preventDefault();}), this );}, keysMap:{38: function (t){return this.increase(t), this.triggerEvents(), this;}, 40: function (t){return this.decrease(t), this.triggerEvents(), this;},}, getNumberVal: function (t){return t ? Number(t) : 0;}, getInputVal: function (){return this.getNumberVal(this.$element.val());}, setInputVal: function (t){return this.$element.val(t), this;}, increase: function (t){var e=t.shiftKey ? this.options.shiftStep : this.options.step, i=this.getInputVal() + e; return null !==this.options.max && i > this.options.max && (i=this.options.circle ? this.options.min : this.options.max), this.setInputVal(i), this;}, decrease: function (t){var e=t.shiftKey ? this.options.shiftStep : this.options.step, i=this.getInputVal() - e; return null !==this.options.min && i < this.options.min && (i=this.options.circle ? this.options.max : this.options.min), this.setInputVal(i), this;}, triggerEvents: function (){return this.$element.trigger("keyup"), this;},}), (n.fn.updown=function (i){return this.each(function (t){var e=n(this); e.data("updown") || e.data("updown", new o(n(this), i));});});})(window.jQuery), (function (t){"function"==typeof define && define.amd ? define(["jquery"], t) : "object"==typeof exports ? t(require("jquery")) : t(jQuery);})(function (s){var a=function (t, e){(this.$element=s(t)), (this.options=s.extend({}, a.DEFAULTS, this.dataOptions(), e)), this.init();}; (a.DEFAULTS={from: 0, to: 0, speed: 1e3, refreshInterval: 100, decimals: 0, formatter: function (t, e){return t.toFixed(e.decimals);}, onUpdate: null, onComplete: null,}), (a.prototype.init=function (){(this.value=this.options.from), (this.loops=Math.ceil(this.options.speed / this.options.refreshInterval)), (this.loopCount=0), (this.increment=(this.options.to - this.options.from) / this.loops);}), (a.prototype.dataOptions=function (){var t={from: this.$element.data("from"), to: this.$element.data("to"), speed: this.$element.data("speed"), refreshInterval: this.$element.data("refresh-interval"), decimals: this.$element.data("decimals")}, e=Object.keys(t); for (var i in e){var n=e[i]; void 0===t[n] && delete t[n];}return t;}), (a.prototype.update=function (){(this.value +=this.increment), this.loopCount++, this.render(), "function"==typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value), this.loopCount >=this.loops && (clearInterval(this.interval), (this.value=this.options.to), "function"==typeof this.options.onComplete && this.options.onComplete.call(this.$element, this.value));}), (a.prototype.render=function (){var t=this.options.formatter.call(this.$element, this.value, this.options); this.$element.text(t);}), (a.prototype.restart=function (){this.stop(), this.init(), this.start();}), (a.prototype.start=function (){this.stop(), this.render(), (this.interval=setInterval(this.update.bind(this), this.options.refreshInterval));}), (a.prototype.stop=function (){this.interval && clearInterval(this.interval);}), (a.prototype.toggle=function (){this.interval ? this.stop() : this.start();}), (s.fn.countTo=function (o){return this.each(function (){var t=s(this), e=t.data("countTo"), i="object"==typeof o ? o :{}, n="string"==typeof o ? o : "start"; (e && "object" !=typeof o) || (e && e.stop(), t.data("countTo", (e=new a(this, i)))), e[n].call(e);});});});