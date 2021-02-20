(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donate-donate-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/donate/donate.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donate/donate.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDonateDonatePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>donate</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/donate/donate-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/donate/donate-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: DonatePageRoutingModule */

    /***/
    function srcAppDonateDonateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonatePageRoutingModule", function () {
        return DonatePageRoutingModule;
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


      var _donate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./donate.page */
      "./src/app/donate/donate.page.ts");

      var routes = [{
        path: '',
        component: _donate_page__WEBPACK_IMPORTED_MODULE_3__["DonatePage"]
      }];

      var DonatePageRoutingModule = function DonatePageRoutingModule() {
        _classCallCheck(this, DonatePageRoutingModule);
      };

      DonatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DonatePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/donate/donate.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/donate/donate.module.ts ***!
      \*****************************************/

    /*! exports provided: DonatePageModule */

    /***/
    function srcAppDonateDonateModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonatePageModule", function () {
        return DonatePageModule;
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


      var _donate_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./donate-routing.module */
      "./src/app/donate/donate-routing.module.ts");
      /* harmony import */


      var _donate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./donate.page */
      "./src/app/donate/donate.page.ts");

      var DonatePageModule = function DonatePageModule() {
        _classCallCheck(this, DonatePageModule);
      };

      DonatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _donate_routing_module__WEBPACK_IMPORTED_MODULE_5__["DonatePageRoutingModule"]],
        declarations: [_donate_page__WEBPACK_IMPORTED_MODULE_6__["DonatePage"]]
      })], DonatePageModule);
      /***/
    },

    /***/
    "./src/app/donate/donate.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/donate/donate.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppDonateDonatePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvbmF0ZS9kb25hdGUucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/donate/donate.page.ts":
    /*!***************************************!*\
      !*** ./src/app/donate/donate.page.ts ***!
      \***************************************/

    /*! exports provided: DonatePage */

    /***/
    function srcAppDonateDonatePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonatePage", function () {
        return DonatePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DonatePage = /*#__PURE__*/function () {
        function DonatePage() {
          _classCallCheck(this, DonatePage);
        }

        _createClass(DonatePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DonatePage;
      }();

      DonatePage.ctorParameters = function () {
        return [];
      };

      DonatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-donate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./donate.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/donate/donate.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./donate.page.scss */
        "./src/app/donate/donate.page.scss"))["default"]]
      })], DonatePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=donate-donate-module-es5.js.map