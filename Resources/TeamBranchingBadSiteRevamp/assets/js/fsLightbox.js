function FSLightbox(a) {
   this.config = a, this.ie = document.all, this.ns6 = document.getElementById && !document.all, this.closeHandle = document.getElementById("fsLightboxClose" + a.form);
   var b = this,
       c = document.getElementsByTagName("div")[0];
   null != a.handle && document.getElementById(a.handle) ? (this.handle = document.getElementById(a.handle), this.handle.onclick = function () {
       return b.show(b.config.form), !1
   }) : (this.handle = document.createElement("div"), this.handle.style.background = "#000", this.handle.style.border = "#FFF solid 2px", this.handle.style.zIndex = "1", this.handle.className = "fsLightboxHandle", "right" == a.handlePosition ? (this.handle.style.right = "0px", this.handle.style.top = "200px", this.handleAngle = "-90", this.handle.style.borderRight = "0px", this.handle.style.position = "absolute", this.handle.onmouseover = function () {
       b.handle.style.paddingRight = "10px"
   }, this.handle.onmouseout = function () {
       b.handle.style.paddingRight = "0px"
   }) : "bottomLeft" == a.handlePosition ? (this.handle.style.left = "100px", this.handle.style.bottom = "0px", this.handleAngle = "0", this.handle.style.borderBottom = "0px", this.handle.style.position = "fixed", this.handle.onmouseover = function () {
       b.handle.style.paddingBottom = "10px"
   }, this.handle.onmouseout = function () {
       b.handle.style.paddingBottom = "0px"
   }) : "bottomRight" == a.handlePosition ? (this.handle.style.right = "100px", this.handle.style.bottom = "0px", this.handleAngle = "0", this.handle.style.borderBottom = "0px", this.handle.style.position = "fixed", this.handle.onmouseover = function () {
       b.handle.style.paddingBottom = "10px"
   }, this.handle.onmouseout = function () {
       b.handle.style.paddingBottom = "0px"
   }) : "topLeft" == a.handlePosition ? (this.handle.style.left = "100px", this.handle.style.top = "0px", this.handleAngle = "0", this.handle.style.borderTop = "0px", this.handle.style.position = "absolute", this.handle.onmouseover = function () {
       b.handle.style.paddingTop = "10px"
   }, this.handle.onmouseout = function () {
       b.handle.style.paddingTop = "0px"
   }) : "topRight" == a.handlePosition ? (this.handle.style.right = "100px", this.handle.style.top = "0px", this.handleAngle = "0", this.handle.style.borderTop = "0px", this.handle.style.position = "absolute", this.handle.onmouseover = function () {
       b.handle.style.paddingTop = "10px"
   }, this.handle.onmouseout = function () {
       b.handle.style.paddingTop = "0px"
   }) : (this.handle.style.left = "0px", this.handle.style.top = "200px", this.handleAngle = "-90", this.handle.style.borderLeft = "0px", this.handle.style.position = "absolute", this.handle.onmouseover = function () {
       b.handle.style.paddingLeft = "10px"
   }, this.handle.onmouseout = function () {
       b.handle.style.paddingLeft = "0px"
   }), this.handleImage = a.handleImage + "&angle=" + this.handleAngle, this.handleLink = '<img src="' + this.handleImage + '" border="0" alt="' + this.config.handleText + '" />', this.handle.innerHTML = '<a href="#" style="color:#FFF; text-decoration:none;">' + this.handleLink + "</a>", this.handle.onclick = function () {
       return b.show(b.config.form), !1
   }, c.parentNode.insertBefore(this.handle, c)), this.closeHandle.onclick = function () {
       return b.hide(b.config.form), !1
   }, this.fadeOverlay = document.createElement("div"), this.fadeOverlay.style.display = "none", this.fadeOverlay.style.zIndex = "1", this.fadeOverlay.style.position = "absolute", this.fadeOverlay.style.background = "#000", this.fadeOverlay.style.overflow = "hidden", this.fadeOverlay.innerHTML = "&nbsp", this.fadeOverlay.onclick = function () {
       b.fade("out"), b.hide()
   }, c.parentNode.insertBefore(this.fadeOverlay, c);
   var d = document.getElementById("fsLightbox" + a.form);
   d.style.position = "absolute", d.style.background = "#ebecee", d.style.border = "#006496 solid 15px", d.style.zIndex = "10000", d.style.padding = "5px", d.style.scroll = "auto", d.style.display = "none", this.show = function () {
       this.fade("in");
       var a = document.getElementById("fsLightbox" + this.config.form);
       a.style.display = "block" != a.style.display ? "block" : "none";
       var b = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop,
           c = document.body.clientWidth / 2 - a.offsetWidth / 2,
           d = this.iecompattest().clientHeight / 2 + b - a.offsetHeight / 2;
       a.style.left = Math.round(c) + "px", a.style.top = Math.round(d > b ? d : b) + "px"
   }, this.hide = function () {
       this.fade("out"), document.getElementById("fsLightbox" + this.config.form).style.display = "none"
   }, this.fade = function (a) {
       var b = this.ie && !window.opera ? this.iecompattest().scrollLeft + this.iecompattest().clientWidth : window.pageXOffset + window.innerWidth;
       if (D = window.document, height = Math.max(Math.max(D.body.scrollHeight, D.documentElement.scrollHeight), Math.max(D.body.offsetHeight, D.documentElement.offsetHeight), Math.max(D.body.clientHeight, D.documentElement.clientHeight)), this.fadeOverlay.style.left = "0px", this.fadeOverlay.style.top = "0px", this.fadeOverlay.style.width = b + "px", this.fadeOverlay.style.height = height + "px", !("in" == a && this.getOpacity() > .6 || "out" == a && this.getOpacity() < .1)) {
           var c = "in" == a ? 0 : .7;
           this.fadeOverlay.style.display = "block", this._fader(a, c)
       }
   }, this._fader = function (a, b) {
       if ("in" == a ? b += .05 : b -= .05, null != this.fadeOverlay.style.filter ? (this.fadeOverlay.style.filter = "alpha(opacity=" + 100 * b + ")", this.fadeOverlay.style.opacity = b) : this.fadeOverlay.filters && this.fadeOverlay.filters[0] ? "number" == typeof this.fadeOverlay.filters[0].opacity ? this.fadeOverlay.filters[0].opacity = 100 * b : this.fadeOverlay.style.filter = "alpha(opacity=" + 100 * b + ")" : "undefined" != typeof this.fadeOverlay.style.MozOpacity && "" != b ? this.fadeOverlay.style.MozOpacity = b : this.fadeOverlay.style.opacity = b, !("in" == a && b >= .7)) {
           if ("out" == a && 0 >= b) return void(this.fadeOverlay.style.display = "none");
           var c = this;
           setTimeout(function () {
               c._fader(a, b)
           }, 10)
       }
   }, this.getOpacity = function () {
       var a = -1;
       if (a = this.fadeOverlay.style.opacity, 0 > a)
           if (null != this.fadeOverlay.style.filter) {
               var b = this.fadeOverlay.style.filter.replace("alpha(opacity=", "");
               a = parseInt(b.replace(")", ""))
           } else a = 0;
       return a
   }, this.iecompattest = function () {
       return document.compatMode && "BackCompat" != document.compatMode ? document.documentElement : document.body
   }, this.getposOffset = function (a, b) {
       for (var c = "left" == b ? a.offsetLeft : a.offsetTop, d = a.offsetParent; null != d;) c = "left" == b ? c + d.offsetLeft : c + d.offsetTop, d = d.offsetParent;
       return c
   }
}