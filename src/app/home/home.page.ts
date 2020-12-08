import { Component, ViewChild } from "@angular/core";

import {
  FileTransfer,
  FileTransferObject,
} from "@ionic-native/file-transfer/ngx";
import { File } from "@ionic-native/file/ngx";
import { Base64 } from "@ionic-native/base64/ngx";

import { Capacitor, Plugins } from "@capacitor/core";
import "capacitor-plugin-wallpaper";
import { IonFab, LoadingController } from "@ionic/angular";
import { SettingsService } from "../services/settings.service";

import { Wallpaper } from "../interfaces/wallpaper";

// import { Wallpaper } from 'capacitor-plugin-wallpaper';

const { Wallpaper } = Plugins;
const { Browser } = Plugins;
const { Toast } = Plugins;
const { Share } = Plugins;
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  wallpaper: Wallpaper;
  history: Wallpaper[];
  cachePath: string = this.file.cacheDirectory + "walls/";

  isImgLoaded = false;

  @ViewChild("fab") ionFab: IonFab;

  constructor(
    private settingsService: SettingsService,
    private transfer: FileTransfer,
    public file: File,
    private base64: Base64,
    public loadingController: LoadingController
  ) {}

  onClickRandom() {
    let service = this.settingsService.pickRandomService();

    if (service) {
      this.presentLoading();
      service.getPicture().subscribe((resp: Wallpaper) => {
        // this.wallpaper.author = resp.author;
        this.download(resp);
        console.log("HomePage -> onClickRandom -> this.wallpaper", resp);
      });
    } else {
      console.log("No service active");
      this.loadingController.dismiss();
      this.showToast("There are no available sources");
    }
  }

  clickChangePaper() {
    this.presentLoading();
    this.getBase64(this.wallpaper.path, "wall");
    // this.download();
  }

  clickChangeLock() {
    // TODO: test on non-MIUI system
    this.presentLoading();
    this.getBase64(this.wallpaper.path, "lock");
    // this.download();
  }

  download(wall: Wallpaper) {
    const fileTransfer: FileTransferObject = this.transfer.create();
    // const url = this.wallpaper.url;
    const fileName = new Date().getTime().toString() + ".png";
    const path = this.cachePath + fileName;
    fileTransfer.download(wall.origin, path).then(
      (entry) => {
        console.log("download complete: " + entry.toURL());

        this.wallpaper = {
          url: Capacitor.convertFileSrc(path),
          author: wall.author,
          path: path,
          fileName: fileName,
          origin: wall.origin,
        };

        // this.myPath = path;
        // this.getBase64(path);
      },
      (error) => {
        // TODO: handle error
        console.log(error);
      }
    );
  }

  getBase64(filePath: string, type: string) {
    this.base64.encodeFile(filePath).then(
      (base64File: string) => {
        console.log(base64File);
        if (base64File) {
          this.setPaper(base64File.split(",")[1], type);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  setPaper(path: string, type: string) {
    Wallpaper.echo({ value: path, type: type }).then((ret) => {
      console.log("HomePage -> clickChangePaper -> ret", ret);
      this.file
        .moveFile(
          this.cachePath,
          this.wallpaper.fileName,
          this.file.dataDirectory,
          "currentWall.png"
        )
        .then(
          (entry) => {
            this.loadingController.dismiss();
            if (type == 'wall'){
              this.showToast("Wallpaper has been set");
            } else if ('lock') {
              this.showToast("Lockscreen wallpaper has been set");
            }
            
          },
          (error) => {
            // TODO: handle error
            console.log(error);
            this.showToast("Error");
          }
        );
    });
  }

  debug() {
    this.file.listDir(this.file.cacheDirectory, "walls").then((entry) => {
      console.log(entry);
    });

    /* 		this.file.listDir(this.file.applicationDirectory,'public').then((entry) =>{
			console.log('applicationDirectory',entry);
		}) */
    /* 		this.file.listDir(this.file.applicationStorageDirectory,'..').then((entry) =>{
			console.log(entry);
		}) */
    this.file.listDir(this.file.dataDirectory, "..").then((entry) => {
      console.log(entry);
    });
    /* 		this.file.listDir(this.file.documentsDirectory,'..').then((entry) =>{
			console.log(entry);
		}) */
    /* 		this.file.listDir(this.file.externalApplicationStorageDirectory,'..').then((entry) =>{
			console.log(entry);
		}) */
    /* 		this.file.listDir(this.file.externalCacheDirectory,'..').then((entry) =>{
			console.log(entry);
		}) */
    /* 		this.file.listDir(this.file.externalDataDirectory,'..').then((entry) =>{
			console.log(entry);
		}) */
    /* 		this.file.listDir(this.file.externalRootDirectory,'..').then((entry) =>{
			console.log(entry);
		}) */
    /* 		this.file.listDir(this.file.sharedDirectory,'..').then((entry) =>{
			console.log(entry);
		})
		this.file.listDir(this.file.syncedDataDirectory,'..').then((entry) =>{
			console.log(entry);
		})
		this.file.listDir(this.file.tempDirectory,'..').then((entry) =>{
			console.log(entry);
		}) */

    console.log("love u");
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "Please wait...",
      duration: 10000,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log("Loading dismissed !!");
  }

  async onClickGithub() {
    await Browser.open({ url: "https://github.com/pbl0/randomPaper" });
  }

  imgLoad() {
    setTimeout(() => {
      this.isImgLoaded = true;
      this.loadingController.dismiss();
    }, 200);
  }

  async showToast(msg: string) {
    await Toast.show({
      text: msg,
    });
  }
  async clickShare() {
    let shareRet = await Share.share({
      title: "Share with buddies",
      text: "Check this amazing wallpaper I found in randomPaper app: https://github.com/pbl0/randomPaper",
      url: this.wallpaper.path,
      dialogTitle: "Share with buddies",
    });
  }
}
