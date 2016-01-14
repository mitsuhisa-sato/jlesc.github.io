/*!
 * Bootstrap vv4-dev#48e62fd (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(e){var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1==t[0]&&9==t[1]&&t[2]<1||t[0]>=3)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v3.0.0")}(jQuery),+function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),i=function(e){function t(e){return{}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function n(e){return(e[0]||e).nodeType}function i(){return{bindType:o.end,delegateType:o.end,handle:function(t){return e(t.target).is(this)?t.handleObj.handler.apply(this,arguments):void 0}}}function r(){if(window.QUnit)return!1;var e=document.createElement("bootstrap");for(var t in l)if(void 0!==e.style[t])return{end:l[t]};return!1}function a(t){var n=this,i=!1;return e(this).one(u.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||u.triggerTransitionEnd(n)},t),this}function s(){o=r(),e.fn.emulateTransitionEnd=a,u.supportsTransitionEnd()&&(e.event.special[u.TRANSITION_END]=i())}var o=!1,l={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},u={TRANSITION_END:"bsTransitionEnd",getUID:function(e){do e+=~~(1e6*Math.random());while(document.getElementById(e));return e},getSelectorFromElement:function(e){var t=e.getAttribute("data-target");return t||(t=e.getAttribute("href")||"",t=/^#[a-z]/i.test(t)?t:null),t},reflow:function(e){new Function("bs","return bs")(e.offsetHeight)},triggerTransitionEnd:function(t){e(t).trigger(o.end)},supportsTransitionEnd:function(){return Boolean(o)},typeCheckConfig:function(e,i,r){for(var a in r)if(r.hasOwnProperty(a)){var s=r[a],o=i[a],l=void 0;if(l=o&&n(o)?"element":t(o),!new RegExp(s).test(l))throw new Error(e.toUpperCase()+": "+('Option "'+a+'" provided type "'+l+'" ')+('but expected type "'+s+'".'))}}};return s(),u}(jQuery);!function(e){var i="button",r="v4-dev#48e62fd",a="bs.button",s="."+a,o=".data-api",l=e.fn[i],u={ACTIVE:"active",BUTTON:"btn",FOCUS:"focus"},d={DATA_TOGGLE_CARROT:'[data-toggle^="button"]',DATA_TOGGLE:'[data-toggle="buttons"]',INPUT:"input",ACTIVE:".active",BUTTON:".btn"},f={CLICK_DATA_API:"click"+s+o,FOCUS_BLUR_DATA_API:"focus"+s+o+" "+("blur"+s+o)},h=function(){function i(e){t(this,i),this._element=e}return n(i,[{key:"toggle",value:function(){var t=!0,n=e(this._element).closest(d.DATA_TOGGLE)[0];if(n){var i=e(this._element).find(d.INPUT)[0];if(i){if("radio"===i.type)if(i.checked&&e(this._element).hasClass(u.ACTIVE))t=!1;else{var r=e(n).find(d.ACTIVE)[0];r&&e(r).removeClass(u.ACTIVE)}t&&(i.checked=!e(this._element).hasClass(u.ACTIVE),e(this._element).trigger("change"))}}else this._element.setAttribute("aria-pressed",!e(this._element).hasClass(u.ACTIVE));t&&e(this._element).toggleClass(u.ACTIVE)}},{key:"dispose",value:function(){e.removeData(this._element,a),this._element=null}}],[{key:"_jQueryInterface",value:function(t){return this.each(function(){var n=e(this).data(a);n||(n=new i(this),e(this).data(a,n)),"toggle"===t&&n[t]()})}},{key:"VERSION",get:function(){return r}}]),i}();return e(document).on(f.CLICK_DATA_API,d.DATA_TOGGLE_CARROT,function(t){t.preventDefault();var n=t.target;e(n).hasClass(u.BUTTON)||(n=e(n).closest(d.BUTTON)),h._jQueryInterface.call(e(n),"toggle")}).on(f.FOCUS_BLUR_DATA_API,d.DATA_TOGGLE_CARROT,function(t){var n=e(t.target).closest(d.BUTTON)[0];e(n).toggleClass(u.FOCUS,/^focus(in)?$/.test(t.type))}),e.fn[i]=h._jQueryInterface,e.fn[i].Constructor=h,e.fn[i].noConflict=function(){return e.fn[i]=l,h._jQueryInterface},h}(jQuery),function(e){var r="collapse",a="v4-dev#48e62fd",s="bs.collapse",o="."+s,l=".data-api",u=e.fn[r],d=600,f={toggle:!0,parent:""},h={toggle:"boolean",parent:"string"},c={SHOW:"show"+o,SHOWN:"shown"+o,HIDE:"hide"+o,HIDDEN:"hidden"+o,CLICK_DATA_API:"click"+o+l},g={IN:"in",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed"},_={WIDTH:"width",HEIGHT:"height"},A={ACTIVES:".panel > .in, .panel > .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},v=function(){function o(n,i){t(this,o),this._isTransitioning=!1,this._element=n,this._config=this._getConfig(i),this._triggerArray=e.makeArray(e('[data-toggle="collapse"][href="#'+n.id+'"],'+('[data-toggle="collapse"][data-target="#'+n.id+'"]'))),this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}return n(o,[{key:"toggle",value:function(){e(this._element).hasClass(g.IN)?this.hide():this.show()}},{key:"show",value:function(){var t=this;if(!this._isTransitioning&&!e(this._element).hasClass(g.IN)){var n=void 0,r=void 0;if(this._parent&&(n=e.makeArray(e(A.ACTIVES)),n.length||(n=null)),!(n&&(r=e(n).data(s),r&&r._isTransitioning))){var a=e.Event(c.SHOW);if(e(this._element).trigger(a),!a.isDefaultPrevented()){n&&(o._jQueryInterface.call(e(n),"hide"),r||e(n).data(s,null));var l=this._getDimension();e(this._element).removeClass(g.COLLAPSE).addClass(g.COLLAPSING),this._element.style[l]=0,this._element.setAttribute("aria-expanded",!0),this._triggerArray.length&&e(this._triggerArray).removeClass(g.COLLAPSED).attr("aria-expanded",!0),this.setTransitioning(!0);var u=function(){e(t._element).removeClass(g.COLLAPSING).addClass(g.COLLAPSE).addClass(g.IN),t._element.style[l]="",t.setTransitioning(!1),e(t._element).trigger(c.SHOWN)};if(!i.supportsTransitionEnd())return void u();var f=l[0].toUpperCase()+l.slice(1),h="scroll"+f;e(this._element).one(i.TRANSITION_END,u).emulateTransitionEnd(d),this._element.style[l]=this._element[h]+"px"}}}}},{key:"hide",value:function(){var t=this;if(!this._isTransitioning&&e(this._element).hasClass(g.IN)){var n=e.Event(c.HIDE);if(e(this._element).trigger(n),!n.isDefaultPrevented()){var r=this._getDimension(),a=r===_.WIDTH?"offsetWidth":"offsetHeight";this._element.style[r]=this._element[a]+"px",i.reflow(this._element),e(this._element).addClass(g.COLLAPSING).removeClass(g.COLLAPSE).removeClass(g.IN),this._element.setAttribute("aria-expanded",!1),this._triggerArray.length&&e(this._triggerArray).addClass(g.COLLAPSED).attr("aria-expanded",!1),this.setTransitioning(!0);var s=function(){t.setTransitioning(!1),e(t._element).removeClass(g.COLLAPSING).addClass(g.COLLAPSE).trigger(c.HIDDEN)};return this._element.style[r]=0,i.supportsTransitionEnd()?void e(this._element).one(i.TRANSITION_END,s).emulateTransitionEnd(d):void s()}}}},{key:"setTransitioning",value:function(e){this._isTransitioning=e}},{key:"dispose",value:function(){e.removeData(this._element,s),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null}},{key:"_getConfig",value:function(t){return t=e.extend({},f,t),t.toggle=Boolean(t.toggle),i.typeCheckConfig(r,t,h),t}},{key:"_getDimension",value:function(){var t=e(this._element).hasClass(_.WIDTH);return t?_.WIDTH:_.HEIGHT}},{key:"_getParent",value:function(){var t=this,n=e(this._config.parent)[0],i='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return e(n).find(i).each(function(e,n){t._addAriaAndCollapsedClass(o._getTargetFromElement(n),[n])}),n}},{key:"_addAriaAndCollapsedClass",value:function(t,n){if(t){var i=e(t).hasClass(g.IN);t.setAttribute("aria-expanded",i),n.length&&e(n).toggleClass(g.COLLAPSED,!i).attr("aria-expanded",i)}}}],[{key:"_getTargetFromElement",value:function(t){var n=i.getSelectorFromElement(t);return n?e(n)[0]:null}},{key:"_jQueryInterface",value:function(t){return this.each(function(){var n=e(this),i=n.data(s),r=e.extend({},f,n.data(),"object"==typeof t&&t);if(!i&&r.toggle&&/show|hide/.test(t)&&(r.toggle=!1),i||(i=new o(this,r),n.data(s,i)),"string"==typeof t){if(void 0===i[t])throw new Error('No method named "'+t+'"');i[t]()}})}},{key:"VERSION",get:function(){return a}},{key:"Default",get:function(){return f}}]),o}();return e(document).on(c.CLICK_DATA_API,A.DATA_TOGGLE,function(t){t.preventDefault();var n=v._getTargetFromElement(this),i=e(n).data(s),r=i?"toggle":e(this).data();v._jQueryInterface.call(e(n),r)}),e.fn[r]=v._jQueryInterface,e.fn[r].Constructor=v,e.fn[r].noConflict=function(){return e.fn[r]=u,v._jQueryInterface},v}(jQuery),function(e){var r="dropdown",a="v4-dev#48e62fd",s="bs.dropdown",o="."+s,l=".data-api",u=e.fn[r],d={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,CLICK:"click"+o,CLICK_DATA_API:"click"+o+l,KEYDOWN_DATA_API:"keydown"+o+l},f={BACKDROP:"dropdown-backdrop",DISABLED:"disabled",OPEN:"open"},h={BACKDROP:".dropdown-backdrop",DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",ROLE_MENU:'[role="menu"]',ROLE_LISTBOX:'[role="listbox"]',NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:'[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'},c=function(){function r(e){t(this,r),this._element=e,this._addEventListeners()}return n(r,[{key:"toggle",value:function(){if(this.disabled||e(this).hasClass(f.DISABLED))return!1;var t=r._getParentFromElement(this),n=e(t).hasClass(f.OPEN);if(r._clearMenus(),n)return!1;if("ontouchstart"in document.documentElement&&!e(t).closest(h.NAVBAR_NAV).length){var i=document.createElement("div");i.className=f.BACKDROP,e(i).insertBefore(this),e(i).on("click",r._clearMenus)}var a={relatedTarget:this},s=e.Event(d.SHOW,a);return e(t).trigger(s),s.isDefaultPrevented()?!1:(this.focus(),this.setAttribute("aria-expanded","true"),e(t).toggleClass(f.OPEN),e(t).trigger(e.Event(d.SHOWN,a)),!1)}},{key:"dispose",value:function(){e.removeData(this._element,s),e(this._element).off(o),this._element=null}},{key:"_addEventListeners",value:function(){e(this._element).on(d.CLICK,this.toggle)}}],[{key:"_jQueryInterface",value:function(t){return this.each(function(){var n=e(this).data(s);if(n||e(this).data(s,n=new r(this)),"string"==typeof t){if(void 0===n[t])throw new Error('No method named "'+t+'"');n[t].call(this)}})}},{key:"_clearMenus",value:function(t){if(!t||3!==t.which){var n=e(h.BACKDROP)[0];n&&n.parentNode.removeChild(n);for(var i=e.makeArray(e(h.DATA_TOGGLE)),a=0;a<i.length;a++){var s=r._getParentFromElement(i[a]),o={relatedTarget:i[a]};if(e(s).hasClass(f.OPEN)&&!(t&&"click"===t.type&&/input|textarea/i.test(t.target.tagName)&&e.contains(s,t.target))){var l=e.Event(d.HIDE,o);e(s).trigger(l),l.isDefaultPrevented()||(i[a].setAttribute("aria-expanded","false"),e(s).removeClass(f.OPEN).trigger(e.Event(d.HIDDEN,o)))}}}}},{key:"_getParentFromElement",value:function(t){var n=void 0,r=i.getSelectorFromElement(t);return r&&(n=e(r)[0]),n||t.parentNode}},{key:"_dataApiKeydownHandler",value:function(t){if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!e(this).hasClass(f.DISABLED))){var n=r._getParentFromElement(this),i=e(n).hasClass(f.OPEN);if(!i&&27!==t.which||i&&27===t.which){if(27===t.which){var a=e(n).find(h.DATA_TOGGLE)[0];e(a).trigger("focus")}return void e(this).trigger("click")}var s=e.makeArray(e(h.VISIBLE_ITEMS));if(s=s.filter(function(e){return e.offsetWidth||e.offsetHeight}),s.length){var o=s.indexOf(t.target);38===t.which&&o>0&&o--,40===t.which&&o<s.length-1&&o++,0>o&&(o=0),s[o].focus()}}}},{key:"VERSION",get:function(){return a}}]),r}();return e(document).on(d.KEYDOWN_DATA_API,h.DATA_TOGGLE,c._dataApiKeydownHandler).on(d.KEYDOWN_DATA_API,h.ROLE_MENU,c._dataApiKeydownHandler).on(d.KEYDOWN_DATA_API,h.ROLE_LISTBOX,c._dataApiKeydownHandler).on(d.CLICK_DATA_API,c._clearMenus).on(d.CLICK_DATA_API,h.DATA_TOGGLE,c.prototype.toggle).on(d.CLICK_DATA_API,h.FORM_CHILD,function(e){e.stopPropagation()}),e.fn[r]=c._jQueryInterface,e.fn[r].Constructor=c,e.fn[r].noConflict=function(){return e.fn[r]=u,c._jQueryInterface},c}(jQuery)}(jQuery);