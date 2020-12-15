import { Component, OnInit, ViewChild } from "@angular/core";

import {
  FileTransfer,
  FileTransferObject,
} from "@ionic-native/file-transfer/ngx";
import { File } from "@ionic-native/file/ngx";
import { Base64 } from "@ionic-native/base64/ngx";

import { Capacitor, Plugins } from "@capacitor/core";
import "capacitor-plugin-wallpaper";
import { IonFab } from "@ionic/angular";
import { SettingsService } from "../services/settings.service";

import { Wallpaper } from "../interfaces/wallpaper";
import { LoadingService } from '../services/loading.service';


const { Wallpaper } = Plugins;
const { Browser } = Plugins;
const { Toast } = Plugins;
const { Share } = Plugins;
const { StatusBar } = Plugins;
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
    private loadingService: LoadingService,
    
  ) {
    
  }
  ionViewWillEnter(){
    StatusBar.setOverlaysWebView({
      overlay: true
    })
  }

  onClickRandom() {
    let service = this.settingsService.pickRandomService();

    if (service) {
      this.loadingService.presentLoading();
      service.getPicture().subscribe((resp: Wallpaper) => {
        // this.wallpaper.author = resp.author;
        this.download(resp);
        console.log("HomePage -> onClickRandom -> this.wallpaper", resp);
      });
    } else {
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
            this.loadingService.dismiss();
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

  async onClickDonate() {
    await Browser.open({ url: "https://www.paypal.com/donate?hosted_button_id=UGXMR9D6PE56W" });
  }



  async onClickGithub() {
    await Browser.open({ url: "https://github.com/pbl0/randomPaper" });
  }

  imgLoad() {
    setTimeout(() => {
      this.isImgLoaded = true;
      this.loadingService.dismiss();
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
