(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "../capacitor-wallpaper-plugin/dist/esm/index.js":
/*!*******************************************************!*\
  !*** ../capacitor-wallpaper-plugin/dist/esm/index.js ***!
  \*******************************************************/
/*! exports provided: WallpaperWeb, Wallpaper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web */ "../capacitor-wallpaper-plugin/dist/esm/web.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WallpaperWeb", function() { return _web__WEBPACK_IMPORTED_MODULE_0__["WallpaperWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Wallpaper", function() { return _web__WEBPACK_IMPORTED_MODULE_0__["Wallpaper"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../capacitor-wallpaper-plugin/dist/esm/web.js":
/*!*****************************************************!*\
  !*** ../capacitor-wallpaper-plugin/dist/esm/web.js ***!
  \*****************************************************/
/*! exports provided: WallpaperWeb, Wallpaper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WallpaperWeb", function() { return WallpaperWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wallpaper", function() { return Wallpaper; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class WallpaperWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    constructor() {
        super({
            name: 'Wallpaper',
            platforms: ['web'],
        });
    }
    echo(options) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ECHO', options);
            return options;
        });
    }
}
const Wallpaper = new WallpaperWeb();


Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerWebPlugin"])(Wallpaper);
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Blank</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <div class=\"imgbox\" *ngIf=\"wallpaper\">\n    <ion-img\n\n      [ngClass]=\"{ \n        'animate__fadeInDownBig': isImgLoaded,\n        'animate__fadeOutDownBig': !isImgLoaded\n      }\"\n      class=\"center-fit animate__animated animate__fast\"\n      (ionImgDidLoad)=\"imgLoad()\"\n      (ionImgWillLoad)=\"isImgLoaded = false\"\n      [src]=\"wallpaper.url\"\n    ></ion-img>\n  </div>\n\n  <!-- <ion-img *ngIf=\"file.dataDirectory  + 'wall.png'\" [src]=\"getPath(file.externalApplicationStorageDirectory + 'wall.png')\"></ion-img> -->\n\n  <ion-fab\n    vertical=\"bottom\"\n    horizontal=\"center\"\n    slot=\"fixed\"\n  >\n    <ion-fab-button\n    class=\"animate__animated animate__pulse animate__infinite animate__slow\"\n    #fab (click)=\"onClickRandom()\">\n      <ion-icon name=\"shuffle-outline\"></ion-icon>\n    </ion-fab-button>\n    \n  </ion-fab>\n\n  <ion-fab *ngIf=\"isImgLoaded\"\n    vertical=\"bottom\"\n    horizontal=\"end\"\n    slot=\"fixed\"\n    class=\"animate__animated animate__fadeInDown\">\n    <ion-fab-button size=\"small\" (click)=\"clickChangePaper()\" color=\"light\">\n      <ion-icon name=\"image-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button size=\"small\" (click)=\"clickChangeLock()\" color=\"light\">\n      <ion-icon name=\"lock-closed-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button size=\"small\" (click)=\"clickShare()\" color=\"light\">\n      <ion-icon name=\"share-social-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab\n    class=\"animate__animated animate__fadeInUp\"\n    horizontal=\"start\"\n    vertical=\"bottom\"\n    slot=\"fixed\"\n  >\n    <ion-fab-button color=\"light\">\n      <ion-icon md=\"caret-up\" ios=\"chevron-up-circle-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button (click)=\"onClickDonate()\" color=\"light\">\n        <ion-icon name=\"heart\"></ion-icon>\n      </ion-fab-button>\n\n      <ion-fab-button color=\"light\" (click)=\"onClickGithub()\">\n        <ion-icon name=\"logo-github\"></ion-icon>\n      </ion-fab-button>\n\n      <ion-fab-button [routerLink]=\"['/settings']\" color=\"light\">\n        <ion-icon name=\"settings\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imgbox {\n  display: grid;\n  height: 100%;\n}\n\n.center-fit {\n  max-height: 100vh;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFFRSxpQkFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nYm94IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNlbnRlci1maXQge1xuICBcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogYXV0bztcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var capacitor_wallpaper_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! capacitor-wallpaper-plugin */ "../capacitor-wallpaper-plugin/dist/esm/index.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");









const { Wallpaper } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
const { Browser } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
const { Toast } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
const { Share } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
const { StatusBar } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
let HomePage = class HomePage {
    constructor(settingsService, transfer, file, base64, loadingService) {
        this.settingsService = settingsService;
        this.transfer = transfer;
        this.file = file;
        this.base64 = base64;
        this.loadingService = loadingService;
        this.cachePath = this.file.cacheDirectory + "walls/";
        this.isImgLoaded = false;
    }
    ionViewWillEnter() {
        StatusBar.setOverlaysWebView({
            overlay: true
        });
    }
    onClickRandom() {
        let service = this.settingsService.pickRandomService();
        if (service) {
            this.loadingService.presentLoading();
            service.getPicture().subscribe((resp) => {
                // this.wallpaper.author = resp.author;
                this.download(resp);
                console.log("HomePage -> onClickRandom -> this.wallpaper", resp);
            });
        }
        else {
            console.log("No service active");
            this.showToast("There are no available sources");
        }
    }
    clickChangePaper() {
        this.loadingService.presentLoading();
        this.getBase64(this.wallpaper.path, "wall");
        // this.download();
    }
    clickChangeLock() {
        // TODO: test on non-MIUI system
        this.loadingService.presentLoading();
        this.getBase64(this.wallpaper.path, "lock");
        // this.download();
    }
    download(wall) {
        const fileTransfer = this.transfer.create();
        // const url = this.wallpaper.url;
        const fileName = new Date().getTime().toString() + ".png";
        const path = this.cachePath + fileName;
        fileTransfer.download(wall.origin, path).then((entry) => {
            console.log("download complete: " + entry.toURL());
            this.wallpaper = {
                url: _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Capacitor"].convertFileSrc(path),
                author: wall.author,
                path: path,
                fileName: fileName,
                origin: wall.origin,
            };
            // this.myPath = path;
            // this.getBase64(path);
        }, (error) => {
            // TODO: handle error
            console.log(error);
        });
    }
    getBase64(filePath, type) {
        this.base64.encodeFile(filePath).then((base64File) => {
            console.log(base64File);
            if (base64File) {
                this.setPaper(base64File.split(",")[1], type);
            }
        }, (err) => {
            console.log(err);
        });
    }
    setPaper(path, type) {
        Wallpaper.echo({ value: path, type: type }).then((ret) => {
            console.log("HomePage -> clickChangePaper -> ret", ret);
            this.file
                .moveFile(this.cachePath, this.wallpaper.fileName, this.file.dataDirectory, "currentWall.png")
                .then((entry) => {
                this.loadingService.dismiss();
                if (type == 'wall') {
                    this.showToast("Wallpaper has been set");
                }
                else if ('lock') {
                    this.showToast("Lockscreen wallpaper has been set");
                }
            }, (error) => {
                // TODO: handle error
                console.log(error);
                this.showToast("Error");
            });
        });
    }
    onClickDonate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Browser.open({ url: "https://www.paypal.com/donate?hosted_button_id=UGXMR9D6PE56W" });
        });
    }
    onClickGithub() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Browser.open({ url: "https://github.com/pbl0/randomPaper" });
        });
    }
    imgLoad() {
        setTimeout(() => {
            this.isImgLoaded = true;
            this.loadingService.dismiss();
        }, 200);
    }
    showToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Toast.show({
                text: msg,
            });
        });
    }
    clickShare() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let shareRet = yield Share.share({
                title: "Share with buddies",
                text: "Check this amazing wallpaper I found in randomPaper app: https://github.com/pbl0/randomPaper",
                url: this.wallpaper.path,
                dialogTitle: "Share with buddies",
            });
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_7__["SettingsService"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__["FileTransfer"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"] },
    { type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_4__["Base64"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"] }
];
HomePage.propDecorators = {
    ionFab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["fab",] }]
};
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map