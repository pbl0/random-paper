(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "../capacitor-wallpaper-plugin/dist/esm/index.js":
    /*!*******************************************************!*\
      !*** ../capacitor-wallpaper-plugin/dist/esm/index.js ***!
      \*******************************************************/

    /*! exports provided: WallpaperWeb, Wallpaper */

    /***/
    function capacitorWallpaperPluginDistEsmIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./web */
      "../capacitor-wallpaper-plugin/dist/esm/web.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WallpaperWeb", function () {
        return _web__WEBPACK_IMPORTED_MODULE_0__["WallpaperWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Wallpaper", function () {
        return _web__WEBPACK_IMPORTED_MODULE_0__["Wallpaper"];
      }); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "../capacitor-wallpaper-plugin/dist/esm/web.js":
    /*!*****************************************************!*\
      !*** ../capacitor-wallpaper-plugin/dist/esm/web.js ***!
      \*****************************************************/

    /*! exports provided: WallpaperWeb, Wallpaper */

    /***/
    function capacitorWallpaperPluginDistEsmWebJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WallpaperWeb", function () {
        return WallpaperWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Wallpaper", function () {
        return Wallpaper;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var WallpaperWeb = /*#__PURE__*/function (_capacitor_core__WEBP) {
        _inherits(WallpaperWeb, _capacitor_core__WEBP);

        var _super = _createSuper(WallpaperWeb);

        function WallpaperWeb() {
          _classCallCheck(this, WallpaperWeb);

          return _super.call(this, {
            name: 'Wallpaper',
            platforms: ['web']
          });
        }

        _createClass(WallpaperWeb, [{
          key: "echo",
          value: function echo(options) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log('ECHO', options);
                      return _context.abrupt("return", options);

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }]);

        return WallpaperWeb;
      }(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"]);

      var Wallpaper = new WallpaperWeb();
      Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerWebPlugin"])(Wallpaper); //# sourceMappingURL=web.js.map

      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Blank</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <div class=\"imgbox\" *ngIf=\"wallpaper\">\n    <ion-img\n\n      [ngClass]=\"{ \n        'animate__fadeInDownBig': isImgLoaded,\n        'animate__fadeOutDownBig': !isImgLoaded\n      }\"\n      class=\"center-fit animate__animated animate__fast\"\n      (ionImgDidLoad)=\"imgLoad()\"\n      (ionImgWillLoad)=\"isImgLoaded = false\"\n      [src]=\"wallpaper.url\"\n    ></ion-img>\n  </div>\n\n  <!-- <ion-img *ngIf=\"file.dataDirectory  + 'wall.png'\" [src]=\"getPath(file.externalApplicationStorageDirectory + 'wall.png')\"></ion-img> -->\n\n  <ion-fab\n    vertical=\"bottom\"\n    horizontal=\"center\"\n    slot=\"fixed\"\n  >\n    <ion-fab-button\n    class=\"animate__animated animate__pulse animate__infinite animate__slow\"\n    #fab (click)=\"onClickRandom()\">\n      <ion-icon name=\"shuffle-outline\"></ion-icon>\n    </ion-fab-button>\n    \n  </ion-fab>\n\n  <ion-fab *ngIf=\"isImgLoaded\"\n    vertical=\"bottom\"\n    horizontal=\"end\"\n    slot=\"fixed\"\n    class=\"animate__animated animate__fadeInDown\">\n    <ion-fab-button size=\"small\" (click)=\"clickChangePaper()\" color=\"light\">\n      <ion-icon name=\"image-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button size=\"small\" (click)=\"clickChangeLock()\" color=\"light\">\n      <ion-icon name=\"lock-closed-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button size=\"small\" (click)=\"clickShare()\" color=\"light\">\n      <ion-icon name=\"share-social-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab\n    class=\"animate__animated animate__fadeInUp\"\n    horizontal=\"start\"\n    vertical=\"bottom\"\n    slot=\"fixed\"\n  >\n    <ion-fab-button color=\"light\">\n      <ion-icon md=\"caret-up\" ios=\"chevron-up-circle-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button (click)=\"onClickDonate()\" color=\"light\">\n        <ion-icon name=\"heart\"></ion-icon>\n      </ion-fab-button>\n\n      <ion-fab-button color=\"light\" (click)=\"onClickGithub()\">\n        <ion-icon name=\"logo-github\"></ion-icon>\n      </ion-fab-button>\n\n      <ion-fab-button [routerLink]=\"['/settings']\" color=\"light\">\n        <ion-icon name=\"settings\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/home/home-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/home.module.ts":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/home/home-routing.module.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/home/home.page.scss":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".imgbox {\n  display: grid;\n  height: 100%;\n}\n\n.center-fit {\n  max-height: 100vh;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFFRSxpQkFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nYm94IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNlbnRlci1maXQge1xuICBcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogYXV0bztcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/home/home.page.ts":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
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


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/base64/ngx */
      "./node_modules/@ionic-native/base64/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var capacitor_wallpaper_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! capacitor-wallpaper-plugin */
      "../capacitor-wallpaper-plugin/dist/esm/index.js");
      /* harmony import */


      var _services_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/settings.service */
      "./src/app/services/settings.service.ts");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/loading.service */
      "./src/app/services/loading.service.ts");

      var Wallpaper = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Wallpaper;
      var Browser = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Browser;
      var Toast = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Toast;
      var Share = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Share;
      var StatusBar = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].StatusBar;

      var HomePage = /*#__PURE__*/function () {
        function HomePage(settingsService, transfer, file, base64, loadingService) {
          _classCallCheck(this, HomePage);

          this.settingsService = settingsService;
          this.transfer = transfer;
          this.file = file;
          this.base64 = base64;
          this.loadingService = loadingService;
          this.cachePath = this.file.cacheDirectory + "walls/";
          this.isImgLoaded = false;
        }

        _createClass(HomePage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            StatusBar.setOverlaysWebView({
              overlay: true
            });
          }
        }, {
          key: "onClickRandom",
          value: function onClickRandom() {
            var _this = this;

            var service = this.settingsService.pickRandomService();

            if (service) {
              this.loadingService.presentLoading();
              service.getPicture().subscribe(function (resp) {
                // this.wallpaper.author = resp.author;
                _this.download(resp);

                console.log("HomePage -> onClickRandom -> this.wallpaper", resp);
              });
            } else {
              console.log("No service active");
              this.showToast("There are no available sources");
            }
          }
        }, {
          key: "clickChangePaper",
          value: function clickChangePaper() {
            this.loadingService.presentLoading();
            this.getBase64(this.wallpaper.path, "wall"); // this.download();
          }
        }, {
          key: "clickChangeLock",
          value: function clickChangeLock() {
            // TODO: test on non-MIUI system
            this.loadingService.presentLoading();
            this.getBase64(this.wallpaper.path, "lock"); // this.download();
          }
        }, {
          key: "download",
          value: function download(wall) {
            var _this2 = this;

            var fileTransfer = this.transfer.create(); // const url = this.wallpaper.url;

            var fileName = new Date().getTime().toString() + ".png";
            var path = this.cachePath + fileName;
            fileTransfer.download(wall.origin, path).then(function (entry) {
              console.log("download complete: " + entry.toURL());
              _this2.wallpaper = {
                url: _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Capacitor"].convertFileSrc(path),
                author: wall.author,
                path: path,
                fileName: fileName,
                origin: wall.origin
              }; // this.myPath = path;
              // this.getBase64(path);
            }, function (error) {
              // TODO: handle error
              console.log(error);
            });
          }
        }, {
          key: "getBase64",
          value: function getBase64(filePath, type) {
            var _this3 = this;

            this.base64.encodeFile(filePath).then(function (base64File) {
              console.log(base64File);

              if (base64File) {
                _this3.setPaper(base64File.split(",")[1], type);
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "setPaper",
          value: function setPaper(path, type) {
            var _this4 = this;

            Wallpaper.echo({
              value: path,
              type: type
            }).then(function (ret) {
              console.log("HomePage -> clickChangePaper -> ret", ret);

              _this4.file.moveFile(_this4.cachePath, _this4.wallpaper.fileName, _this4.file.dataDirectory, "currentWall.png").then(function (entry) {
                _this4.loadingService.dismiss();

                if (type == 'wall') {
                  _this4.showToast("Wallpaper has been set");
                } else if ('lock') {
                  _this4.showToast("Lockscreen wallpaper has been set");
                }
              }, function (error) {
                // TODO: handle error
                console.log(error);

                _this4.showToast("Error");
              });
            });
          }
        }, {
          key: "onClickDonate",
          value: function onClickDonate() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return Browser.open({
                        url: "https://www.paypal.com/donate?hosted_button_id=UGXMR9D6PE56W"
                      });

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }, {
          key: "onClickGithub",
          value: function onClickGithub() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return Browser.open({
                        url: "https://github.com/pbl0/randomPaper"
                      });

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));
          }
        }, {
          key: "imgLoad",
          value: function imgLoad() {
            var _this5 = this;

            setTimeout(function () {
              _this5.isImgLoaded = true;

              _this5.loadingService.dismiss();
            }, 200);
          }
        }, {
          key: "showToast",
          value: function showToast(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return Toast.show({
                        text: msg
                      });

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));
          }
        }, {
          key: "clickShare",
          value: function clickShare() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var shareRet;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return Share.share({
                        title: "Share with buddies",
                        text: "Check this amazing wallpaper I found in randomPaper app: https://github.com/pbl0/randomPaper",
                        url: this.wallpaper.path,
                        dialogTitle: "Share with buddies"
                      });

                    case 2:
                      shareRet = _context5.sent;

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _services_settings_service__WEBPACK_IMPORTED_MODULE_7__["SettingsService"]
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__["FileTransfer"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"]
        }, {
          type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_4__["Base64"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]
        }];
      };

      HomePage.propDecorators = {
        ionFab: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ["fab"]
        }]
      };
      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map