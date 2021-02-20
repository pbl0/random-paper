(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "./node_modules/@ionic/core/dist/esm/index-e806d1f6.js");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "./node_modules/@ionic/core/dist/esm/index-f49d994d.js");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  if (el.componentOnReady) {
    await el.componentOnReady();
  }
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "./src/app/interfaces/reddit-settings.ts":
/*!***********************************************!*\
  !*** ./src/app/interfaces/reddit-settings.ts ***!
  \***********************************************/
/*! exports provided: Sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sub", function() { return Sub; });
class Sub {
    constructor(name) {
        this.name = name;
        this.on = true;
    }
}


/***/ }),

/***/ "./src/app/interfaces/unsplash-settings.ts":
/*!*************************************************!*\
  !*** ./src/app/interfaces/unsplash-settings.ts ***!
  \*************************************************/
/*! exports provided: Collection, User, Term, Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collection", function() { return Collection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Term", function() { return Term; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var _reddit_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reddit-settings */ "./src/app/interfaces/reddit-settings.ts");

class Collection extends _reddit_settings__WEBPACK_IMPORTED_MODULE_0__["Sub"] {
}
class User extends _reddit_settings__WEBPACK_IMPORTED_MODULE_0__["Sub"] {
}
class Term extends _reddit_settings__WEBPACK_IMPORTED_MODULE_0__["Sub"] {
}
class Item extends _reddit_settings__WEBPACK_IMPORTED_MODULE_0__["Sub"] {
}


/***/ }),

/***/ "./src/app/services/loading.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/loading.service.ts ***!
  \*********************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let LoadingService = class LoadingService {
    constructor(loadingController) {
        this.loadingController = loadingController;
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: "Please wait...",
                duration: 10000,
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log("Loading dismissed !!");
        });
    }
    dismiss() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadingController.dismiss();
        });
    }
};
LoadingService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
LoadingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ "./src/app/services/reddit.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/reddit.service.ts ***!
  \********************************************/
/*! exports provided: RedditService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedditService", function() { return RedditService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let RedditService = class RedditService {
    constructor(http) {
        this.http = http;
        this.wallpapers = [];
        this.baseUrl = "https://www.reddit.com/r";
        this.loadStorage();
    }
    getPicture() {
        const sub = this.getRandomSub();
        const str = `/${sub.name}/${this.settings.sorting}.json?limit=${this.settings.limit}`;
        const conditions = [".jpg", ".png", ".jpeg"];
        if (this.wallpapers.length <= 0) {
            console.log("RedditService -> str", str);
            return this.http.get(this.baseUrl + str).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((items) => {
                let arr = items.data.children.filter((child) => conditions.some((el) => child.data.url.includes(el)));
                for (let item of arr) {
                    const wallpaper = {
                        origin: item.data.url,
                        author: item.data.author,
                    };
                    this.wallpapers.push(wallpaper);
                }
                console.log("RedditService -> this.wallpapers", this.wallpapers);
                if (this.wallpapers.length === 0) {
                    return;
                }
                else if (this.wallpapers.length === 1) {
                    return this.wallpapers[0];
                }
                else {
                    return this.getRandomPaper();
                }
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.getRandomPaper());
        }
    }
    getRandomSub() {
        const subs = this.settings.subs.filter(item => item.on);
        const rand = Math.floor(Math.random() * subs.length);
        return subs[rand];
    }
    getRandomPaper() {
        if (this.wallpapers.length === 0) {
            return;
        }
        else if (this.wallpapers.length === 1) {
            return this.wallpapers[0];
        }
        else {
            return this.wallpapers[Math.floor(Math.random() * this.wallpapers.length)];
        }
    }
    addSub(sub) {
        this.settings.subs.push(sub);
        this.saveStorage();
    }
    saveStorage() {
        this.resetWallpapers();
        localStorage.setItem("reddit-settings", JSON.stringify(this.settings));
    }
    loadStorage() {
        if (localStorage.getItem("reddit-settings")) {
            this.settings = JSON.parse(localStorage.getItem("reddit-settings"));
        }
        else {
            this.settings = { subs: [], sorting: 'hot', limit: 1 };
        }
    }
    resetWallpapers() {
        this.wallpapers = [];
    }
};
RedditService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
RedditService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    })
], RedditService);



/***/ }),

/***/ "./src/app/services/settings.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/settings.service.ts ***!
  \**********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _reddit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reddit.service */ "./src/app/services/reddit.service.ts");
/* harmony import */ var _unsplash_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unsplash.service */ "./src/app/services/unsplash.service.ts");




let SettingsService = class SettingsService {
    constructor(redditService, unsplashService) {
        this.redditService = redditService;
        this.unsplashService = unsplashService;
        this.redditIsOn = JSON.parse(localStorage.getItem('redditIsOn'));
        if (this.redditIsOn === null) {
            this.redditIsOn = false;
            this.setReddit(false);
        }
        this.unsplashIsOn = JSON.parse(localStorage.getItem('unsplashIsOn'));
        if (this.unsplashIsOn === null) {
            this.unsplashIsOn = false;
            this.setUnsplash(false);
        }
    }
    setStorage() {
        localStorage.setItem("redditIsOn", JSON.stringify(this.redditIsOn));
        localStorage.setItem("unsplashIsOn", JSON.stringify(this.unsplashIsOn));
    }
    setReddit(isOn) {
        localStorage.setItem("redditIsOn", JSON.stringify(isOn));
    }
    setUnsplash(isOn) {
        localStorage.setItem("unsplashIsOn", JSON.stringify(isOn));
    }
    pickRandomService() {
        let serviceArr = [];
        if (this.redditIsOn && this.redditService.settings.subs.length > 0) {
            serviceArr.push(this.redditService);
        }
        if (this.unsplashIsOn && this.unsplashService.settings.collections.length > 0) {
            serviceArr.push(this.unsplashService);
        }
        if (serviceArr.length <= 0) {
            return null;
        }
        else {
            const rand = Math.floor(Math.random() * serviceArr.length);
            return serviceArr[rand];
        }
    }
};
SettingsService.ctorParameters = () => [
    { type: _reddit_service__WEBPACK_IMPORTED_MODULE_2__["RedditService"] },
    { type: _unsplash_service__WEBPACK_IMPORTED_MODULE_3__["UnsplashService"] }
];
SettingsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SettingsService);



/***/ }),

/***/ "./src/app/services/unsplash.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/unsplash.service.ts ***!
  \**********************************************/
/*! exports provided: UnsplashService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsplashService", function() { return UnsplashService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _interfaces_unsplash_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interfaces/unsplash-settings */ "./src/app/interfaces/unsplash-settings.ts");




let UnsplashService = class UnsplashService {
    constructor() {
        // https://source.unsplash.com/collection/190727/1080x2340
        this.baseUrl = "https://source.unsplash.com";
        this.loadStorage();
        console.log(this.settings);
    }
    getPicture() {
        const colectionOrUser = this.collectionOrUser();
        if (colectionOrUser == 'collection') {
            const collection = this.getRandomItem(this.settings.collections);
            return this.getRandomWallpaper(collection.name, colectionOrUser);
        }
        else if (colectionOrUser == 'user') {
            const user = this.getRandomItem(this.settings.users);
            return this.getRandomWallpaper(user.name, colectionOrUser);
        }
    }
    collectionOrUser() {
        let options = [];
        if (this.settings.collectionsOn) {
            options.push('collection');
        }
        if (this.settings.usersOn) {
            options.push('user');
        }
        const rand = Math.floor(Math.random() * options.length);
        return options[rand];
    }
    getRandomWallpaper(itemValue, itemType) {
        let url;
        if (this.settings.resolutionOn) {
            url = `/${itemType}/${itemValue}/${this.settings.width}x${this.settings.height}`;
        }
        else {
            url = `/${itemType}/${itemValue}`;
        }
        const wallpaper = {
            origin: this.baseUrl + url,
            author: "Unsplash Source",
        };
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(wallpaper);
    }
    /*   getRandomFromCollection(collectionId: string): Observable<Wallpaper> {
        let url: string;
        if (this.settings.resolutionOn) {
          url = `/collection/${collectionId}/${this.settings.width}x${this.settings.height}`;
        } else {
          url = `/collection/${collectionId}`;
        }
    
        const wallpaper: Wallpaper = {
          origin: this.baseUrl + url,
          author: "Unsplash Source",
        };
        return of(wallpaper);
      } */
    /*   getRandomCollection(){
      const collections = this.settings.collections.filter(item => item.on);
          const rand = Math.floor(Math.random() * collections.length);
          return collections[rand];
    } */
    getRandomItem(itemList) {
        const items = itemList.filter((item) => item.on);
        const rand = Math.floor(Math.random() * items.length);
        return items[rand];
    }
    addItem(item, itemList) {
        itemList.push(item);
    }
    setOn(isOn, itemName) {
        if (itemName === "collection") {
            this.settings.collectionsOn = isOn;
        }
        else if (itemName === "user") {
            this.settings.usersOn = isOn;
        }
        else if (itemName === "term") {
            this.settings.termsOn = isOn;
        }
    }
    getCollections() {
        return this.settings.collections;
    }
    getUsers() {
        return this.settings.users;
    }
    getTerms() {
        return this.settings.terms;
    }
    saveStorage() {
        localStorage.setItem("unsplash-settings", JSON.stringify(this.settings));
    }
    loadStorage() {
        if (localStorage.getItem("unsplash-settings")) {
            this.settings = JSON.parse(localStorage.getItem("unsplash-settings"));
        }
        else {
            this.settings = {
                collections: [new _interfaces_unsplash_settings__WEBPACK_IMPORTED_MODULE_3__["Collection"]("1111702")],
                users: [],
                terms: [],
            };
        }
    }
};
UnsplashService.ctorParameters = () => [];
UnsplashService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], UnsplashService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map