(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reddit-settings-reddit-settings-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/reddit-settings/reddit-settings.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reddit-settings/reddit-settings.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRedditSettingsRedditSettingsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaultHref=\"/\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title> Reddit Settings </ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\t<ion-list class=\"animate__animated animate__fadeInLeft animate__faster\">\n\t\t<ion-item>\n\t\t\t<ion-label>Sorting</ion-label>\n\t\t\t<ion-select [(ngModel)]=\"settings.sorting\" placeholder=\"Select One\">\n\t\t\t  <ion-select-option value=\"hot\">Hot</ion-select-option>\n\t\t\t  <ion-select-option value=\"new\">New</ion-select-option>\n\t\t\t  <ion-select-option value=\"controversial\">Controversial</ion-select-option>\n\t\t\t  <ion-select-option value=\"top\">Top</ion-select-option>\n\t\t\t  <ion-select-option value=\"rising\">Rising</ion-select-option>\n\t\t\t  <ion-select-option value=\"random\">Random</ion-select-option>\n\t\t\t</ion-select>\n\t\t  </ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\">Limit</ion-label>\n\t\t\t<ion-input\n\t\t\t\t[(ngModel)]=\"settings.limit\"\n\t\t\t\ttype=\"number\"\n\t\t\t></ion-input>\n\t\t</ion-item>\n\t</ion-list>\n\t\n\t<ion-list class=\"animate__animated animate__fadeInLeft animate__faster\">\n\t\t<ion-item>\n\t\t\t<ion-label position=\"floating\">Add subreddit</ion-label>\n\t\t\t<ion-input\n\t\t\t\t(keyup.enter)=\"addSub()\"\n\t\t\t\t[(ngModel)]=\"sub.name\"\n\t\t\t\ttype=\"text\"\n\t\t\t></ion-input>\n\t\t</ion-item>\n\t</ion-list>\n\t<ion-list *ngIf=\"settings.subs.length\">\n\t\t<ion-list-header *ngIf=\"settings.subs.length\">\n\t\t\t<ion-label class=\"animate__animated animate__fadeInLeft animate__faster\">Subreddits</ion-label>\n\t\t</ion-list-header>\n\t\t<ion-item-sliding\n\t\t\tclass=\"animate__animated animate__fadeInDown\"\n\t\t\t*ngFor=\"let item of settings.subs; let i = index\"\n\t\t>\n\t\t\t<ion-item>\n\t\t\t\t<ion-checkbox\n\t\t\t\t\t(ionChange)=\"changeCheck(item)\"\n\t\t\t\t\t[(ngModel)]=\"item.on\"\n\t\t\t\t\tslot=\"start\"\n\t\t\t\t></ion-checkbox>\n\t\t\t\t<ion-label> {{item.name}} </ion-label>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item-options side=\"end\">\n\t\t\t\t<ion-item-option (click)=\"delete(i)\" color=\"danger\">\n\t\t\t\t\t<ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n\t\t\t\t</ion-item-option>\n\t\t\t</ion-item-options>\n\t\t</ion-item-sliding>\n\t</ion-list>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/reddit-settings/reddit-settings-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/reddit-settings/reddit-settings-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: RedditSettingsPageRoutingModule */

    /***/
    function srcAppRedditSettingsRedditSettingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedditSettingsPageRoutingModule", function () {
        return RedditSettingsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _reddit_settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reddit-settings.page */
      "./src/app/reddit-settings/reddit-settings.page.ts");

      var routes = [{
        path: '',
        component: _reddit_settings_page__WEBPACK_IMPORTED_MODULE_3__["RedditSettingsPage"]
      }];

      var RedditSettingsPageRoutingModule = function RedditSettingsPageRoutingModule() {
        _classCallCheck(this, RedditSettingsPageRoutingModule);
      };

      RedditSettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RedditSettingsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/reddit-settings/reddit-settings.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/reddit-settings/reddit-settings.module.ts ***!
      \***********************************************************/

    /*! exports provided: RedditSettingsPageModule */

    /***/
    function srcAppRedditSettingsRedditSettingsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedditSettingsPageModule", function () {
        return RedditSettingsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _reddit_settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./reddit-settings-routing.module */
      "./src/app/reddit-settings/reddit-settings-routing.module.ts");
      /* harmony import */


      var _reddit_settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./reddit-settings.page */
      "./src/app/reddit-settings/reddit-settings.page.ts");

      var RedditSettingsPageModule = function RedditSettingsPageModule() {
        _classCallCheck(this, RedditSettingsPageModule);
      };

      RedditSettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _reddit_settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["RedditSettingsPageRoutingModule"]],
        declarations: [_reddit_settings_page__WEBPACK_IMPORTED_MODULE_6__["RedditSettingsPage"]]
      })], RedditSettingsPageModule);
      /***/
    },

    /***/
    "./src/app/reddit-settings/reddit-settings.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/reddit-settings/reddit-settings.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppRedditSettingsRedditSettingsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZGRpdC1zZXR0aW5ncy9yZWRkaXQtc2V0dGluZ3MucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/reddit-settings/reddit-settings.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/reddit-settings/reddit-settings.page.ts ***!
      \*********************************************************/

    /*! exports provided: RedditSettingsPage */

    /***/
    function srcAppRedditSettingsRedditSettingsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedditSettingsPage", function () {
        return RedditSettingsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _interfaces_reddit_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../interfaces/reddit-settings */
      "./src/app/interfaces/reddit-settings.ts");
      /* harmony import */


      var _services_reddit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/reddit.service */
      "./src/app/services/reddit.service.ts");

      var RedditSettingsPage = /*#__PURE__*/function () {
        function RedditSettingsPage(redditService) {
          _classCallCheck(this, RedditSettingsPage);

          this.redditService = redditService;
          this.settings = redditService.settings;
          console.log("RedditSettingsPage -> constructor -> this.settings", this.settings);
          this.sub = {
            name: "",
            on: true
          };
        }

        _createClass(RedditSettingsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addSub",
          value: function addSub() {
            if (this.sub.name.length === 0) {
              return;
            }

            var newSub = new _interfaces_reddit_settings__WEBPACK_IMPORTED_MODULE_2__["Sub"](this.sub.name);
            this.redditService.addSub(newSub);
            this.sub.name = "";
            this.redditService.saveStorage();
          }
        }, {
          key: "changeCheck",
          value: function changeCheck(sub) {
            // console.log(item);
            var pendientes = this.settings.subs.filter(function (itemData) {
              return !itemData.on;
            }).length;

            if (pendientes === 0) {
              this.sub.on = true;
            } else {
              this.sub.on = false;
            }

            this.redditService.saveStorage();
          }
        }, {
          key: "onChange",
          value: function onChange() {
            this.redditService.saveStorage();
          }
        }, {
          key: "delete",
          value: function _delete(i) {
            this.settings.subs.splice(i, 1);
            this.redditService.saveStorage();
          }
        }]);

        return RedditSettingsPage;
      }();

      RedditSettingsPage.ctorParameters = function () {
        return [{
          type: _services_reddit_service__WEBPACK_IMPORTED_MODULE_3__["RedditService"]
        }];
      };

      RedditSettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-reddit-settings",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./reddit-settings.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/reddit-settings/reddit-settings.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./reddit-settings.page.scss */
        "./src/app/reddit-settings/reddit-settings.page.scss"))["default"]]
      })], RedditSettingsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=reddit-settings-reddit-settings-module-es5.js.map