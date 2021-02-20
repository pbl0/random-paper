(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unsplash-settings-unsplash-settings-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/item-list/item-list.component.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/item-list/item-list.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsItemListItemListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-list>\n  <ion-list-header>\n    <ion-label>\n       {{itemName + 's' |titlecase}}\n    </ion-label>\n    <ion-toggle\n        (ionChange)=\"changeToggle()\"\n        [(ngModel)]=\"isOn\"\n    ></ion-toggle>\n   \n  </ion-list-header>\n  <ion-item *ngIf=\"isOn\">\n    <ion-label position=\"floating\">Add {{itemName}}</ion-label>\n    <ion-input\n      (keyup.enter)=\"addItem()\"\n      [(ngModel)]=\"item.name\"\n      type=\"text\"\n    ></ion-input>\n  </ion-item>\n</ion-list>\n<ion-list *ngIf=\"itemList.length && isOn\">\n  <ion-item-sliding\n    class=\"animate__animated animate__fadeInDown animate__fast\"\n    *ngFor=\"let item of itemList; let i = index\"\n  >\n    <ion-item>\n      <ion-checkbox\n        (ionChange)=\"changeCheck(item)\"\n        [(ngModel)]=\"item.on\"\n        slot=\"start\"\n      ></ion-checkbox>\n      <ion-label> {{item.name}} </ion-label>\n    </ion-item>\n\n    <ion-item-options side=\"end\">\n      <ion-item-option (click)=\"delete(i)\" color=\"danger\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/unsplash-settings/unsplash-settings.page.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/unsplash-settings/unsplash-settings.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUnsplashSettingsUnsplashSettingsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title> Unsplash Settings </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"animate__animated animate__fadeInLeft animate__faster\">\n  <ion-list>\n    <ion-list-header>\n      <ion-label>Resolution</ion-label>\n      <ion-toggle\n        (ionChange)=\"change()\"\n        [(ngModel)]=\"settings.resolutionOn\"\n      ></ion-toggle>\n    </ion-list-header>\n\n    <!-- <ion-item (click)=\"detectResolution()\">\n      <ion-label> Auto-detect resolution </ion-label>\n    </ion-item> -->\n    <ion-item-group *ngIf=\"settings.resolutionOn\">\n      <ion-item>\n        <ion-label position=\"floating\">Height</ion-label>\n        <ion-input\n          [(ngModel)]=\"settings.height\"\n          (ionChange)=\"change()\"\n          type=\"number\"\n        ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Width</ion-label>\n        <ion-input\n          [(ngModel)]=\"settings.width\"\n          (ionChange)=\"change()\"\n          type=\"number\"\n        ></ion-input>\n      </ion-item>\n    </ion-item-group>\n\n    <ion-item-divider></ion-item-divider>\n  </ion-list>\n\n  <app-item-list\n    [itemName]=\"'collection'\"\n    [itemList]=\"getCollections()\"\n    [isOn]=\"settings.collectionsOn\"\n  ></app-item-list>\n  <app-item-list\n    [itemName]=\"'user'\"\n    [itemList]=\"getUsers()\"\n    [isOn]=\"settings.usersOn\"\n  ></app-item-list>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/components/item-list/item-list.component.scss":
    /*!***************************************************************!*\
      !*** ./src/app/components/item-list/item-list.component.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsItemListItemListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaXRlbS1saXN0L2l0ZW0tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/components/item-list/item-list.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/components/item-list/item-list.component.ts ***!
      \*************************************************************/

    /*! exports provided: ItemListComponent */

    /***/
    function srcAppComponentsItemListItemListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemListComponent", function () {
        return ItemListComponent;
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


      var src_app_interfaces_unsplash_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/interfaces/unsplash-settings */
      "./src/app/interfaces/unsplash-settings.ts");
      /* harmony import */


      var src_app_services_unsplash_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/unsplash.service */
      "./src/app/services/unsplash.service.ts");

      var ItemListComponent = /*#__PURE__*/function () {
        function ItemListComponent(unsplashService) {
          _classCallCheck(this, ItemListComponent);

          this.unsplashService = unsplashService;
          this.item = {
            name: "",
            on: true
          };
        }

        _createClass(ItemListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "changeCheck",
          value: function changeCheck() {
            // console.log(item);
            var pendientes = this.itemList.filter(function (itemData) {
              return !itemData.on;
            }).length;

            if (pendientes === 0) {
              this.item.on = true;
            } else {
              this.item.on = false;
            }

            this.unsplashService.saveStorage();
          }
        }, {
          key: "addItem",
          value: function addItem() {
            if (this.item.name.length === 0) {
              return;
            }

            var newItem = new src_app_interfaces_unsplash_settings__WEBPACK_IMPORTED_MODULE_2__["Item"](this.item.name);
            this.unsplashService.addItem(newItem, this.itemList);
            this.item.name = "";
            this.unsplashService.saveStorage();
          }
        }, {
          key: "changeToggle",
          value: function changeToggle() {
            // console.log(this.isOn);
            this.unsplashService.setOn(this.isOn, this.itemName);
            this.unsplashService.saveStorage();
          }
        }, {
          key: "delete",
          value: function _delete(i) {
            this.itemList.splice(i, 1);
            this.unsplashService.saveStorage();
          }
        }]);

        return ItemListComponent;
      }();

      ItemListComponent.ctorParameters = function () {
        return [{
          type: src_app_services_unsplash_service__WEBPACK_IMPORTED_MODULE_3__["UnsplashService"]
        }];
      };

      ItemListComponent.propDecorators = {
        itemName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        itemList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        isOn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      ItemListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./item-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/item-list/item-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./item-list.component.scss */
        "./src/app/components/item-list/item-list.component.scss"))["default"]]
      })], ItemListComponent);
      /***/
    },

    /***/
    "./src/app/unsplash-settings/unsplash-settings-routing.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/unsplash-settings/unsplash-settings-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: UnsplashSettingsPageRoutingModule */

    /***/
    function srcAppUnsplashSettingsUnsplashSettingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnsplashSettingsPageRoutingModule", function () {
        return UnsplashSettingsPageRoutingModule;
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


      var _unsplash_settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./unsplash-settings.page */
      "./src/app/unsplash-settings/unsplash-settings.page.ts");

      var routes = [{
        path: '',
        component: _unsplash_settings_page__WEBPACK_IMPORTED_MODULE_3__["UnsplashSettingsPage"]
      }];

      var UnsplashSettingsPageRoutingModule = function UnsplashSettingsPageRoutingModule() {
        _classCallCheck(this, UnsplashSettingsPageRoutingModule);
      };

      UnsplashSettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UnsplashSettingsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/unsplash-settings/unsplash-settings.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/unsplash-settings/unsplash-settings.module.ts ***!
      \***************************************************************/

    /*! exports provided: UnsplashSettingsPageModule */

    /***/
    function srcAppUnsplashSettingsUnsplashSettingsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnsplashSettingsPageModule", function () {
        return UnsplashSettingsPageModule;
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


      var _unsplash_settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./unsplash-settings-routing.module */
      "./src/app/unsplash-settings/unsplash-settings-routing.module.ts");
      /* harmony import */


      var _unsplash_settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./unsplash-settings.page */
      "./src/app/unsplash-settings/unsplash-settings.page.ts");
      /* harmony import */


      var _components_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/item-list/item-list.component */
      "./src/app/components/item-list/item-list.component.ts");

      var UnsplashSettingsPageModule = function UnsplashSettingsPageModule() {
        _classCallCheck(this, UnsplashSettingsPageModule);
      };

      UnsplashSettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _unsplash_settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["UnsplashSettingsPageRoutingModule"]],
        declarations: [_unsplash_settings_page__WEBPACK_IMPORTED_MODULE_6__["UnsplashSettingsPage"], _components_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_7__["ItemListComponent"]]
      })], UnsplashSettingsPageModule);
      /***/
    },

    /***/
    "./src/app/unsplash-settings/unsplash-settings.page.scss":
    /*!***************************************************************!*\
      !*** ./src/app/unsplash-settings/unsplash-settings.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppUnsplashSettingsUnsplashSettingsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Vuc3BsYXNoLXNldHRpbmdzL3Vuc3BsYXNoLXNldHRpbmdzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/unsplash-settings/unsplash-settings.page.ts":
    /*!*************************************************************!*\
      !*** ./src/app/unsplash-settings/unsplash-settings.page.ts ***!
      \*************************************************************/

    /*! exports provided: UnsplashSettingsPage */

    /***/
    function srcAppUnsplashSettingsUnsplashSettingsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnsplashSettingsPage", function () {
        return UnsplashSettingsPage;
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


      var _services_unsplash_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/unsplash.service */
      "./src/app/services/unsplash.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var UnsplashSettingsPage = /*#__PURE__*/function () {
        function UnsplashSettingsPage(unsplashService, platform) {
          _classCallCheck(this, UnsplashSettingsPage);

          this.unsplashService = unsplashService;
          this.platform = platform;
          this.settings = unsplashService.settings;
          this.collection = {
            name: "",
            on: true
          };
        }

        _createClass(UnsplashSettingsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "change",
          value: function change() {
            this.unsplashService.saveStorage();
          }
        }, {
          key: "getCollections",
          value: function getCollections() {
            return this.unsplashService.getCollections();
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            return this.unsplashService.getUsers();
          }
        }, {
          key: "getTerms",
          value: function getTerms() {
            return this.unsplashService.getTerms();
          }
        }]);

        return UnsplashSettingsPage;
      }();

      UnsplashSettingsPage.ctorParameters = function () {
        return [{
          type: _services_unsplash_service__WEBPACK_IMPORTED_MODULE_2__["UnsplashService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }];
      };

      UnsplashSettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-unsplash-settings",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./unsplash-settings.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/unsplash-settings/unsplash-settings.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./unsplash-settings.page.scss */
        "./src/app/unsplash-settings/unsplash-settings.page.scss"))["default"]]
      })], UnsplashSettingsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=unsplash-settings-unsplash-settings-module-es5.js.map