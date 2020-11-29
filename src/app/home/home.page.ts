import { Component, ViewChild } from "@angular/core";
import { RedditService, Wallpaper } from "../services/reddit.service";

import {
	FileTransfer,
	FileTransferObject,
} from "@ionic-native/file-transfer/ngx";
import { File } from "@ionic-native/file/ngx";
import { Base64 } from "@ionic-native/base64/ngx";

import { Plugins } from "@capacitor/core";
import "capacitor-plugin-wallpaper";
import { IonFab, LoadingController } from "@ionic/angular";
import { SettingsService } from "../services/settings.service";
import { UnsplashService } from "../services/unsplash.service";

const { Wallpaper } = Plugins;
@Component({
	selector: "app-home",
	templateUrl: "home.page.html",
	styleUrls: ["home.page.scss"],
})
export class HomePage {
	wallpaper: Wallpaper;
	isLoading: boolean = false;
	buttonActive: boolean = false;
	history: Wallpaper[];

	@ViewChild("fab") ionFab: IonFab;
	

	constructor(
		private redditService: RedditService,
		private unsplashService: UnsplashService,
		private settingsService: SettingsService,
		private transfer: FileTransfer,
		public file: File,
		private base64: Base64,
		public loadingController: LoadingController
	) {}

	onClickRandom() {
		if (!this.ionFab.activated) {
			let service = this.pickRandomService();
			
			service.getPicture().subscribe((resp) => {
				this.wallpaper = resp;
				console.log(
					"HomePage -> onClickRandom -> this.wallpaper",
					resp
				);
			});
		}
	}

	pickRandomService() {
		let serviceArr = [];
		if (this.settingsService.redditIsOn) {
			serviceArr.push(this.redditService);
		}

		if (this.settingsService.unsplashIsOn) {
			serviceArr.push(this.unsplashService);
		}

		const rand = Math.floor(Math.random() * serviceArr.length);
		return serviceArr[rand];
	}

	clickChangePaper() {
		this.presentLoading();
		this.download();
	}

	download() {
		const fileTransfer: FileTransferObject = this.transfer.create();
		const url = this.wallpaper.url;
		const path = this.file.externalApplicationStorageDirectory + "wall.png";
		fileTransfer.download(url, path).then(
			(entry) => {
				console.log("download complete: " + entry.toURL());
				this.getBase64(path);
			},
			(error) => {
				// handle error
			}
		);
	}

	getBase64(filePath: string) {
		this.base64.encodeFile(filePath).then(
			(base64File: string) => {
				console.log(base64File);
				if (base64File) {
					this.setPaper(base64File.split(",")[1]);
				}
			},
			(err) => {
				console.log(err);
			}
		);
	}

	setPaper(path: string) {
		Wallpaper.echo({ value: path }).then((ret) => {
			console.log("HomePage -> clickChangePaper -> ret", ret);
			this.loadingController.dismiss();
		});
	}

	debug() {
		console.log("love u");
	}

	async presentLoading() {
		this.isLoading = true;
		const loading = await this.loadingController.create({
			message: "Please wait...",
			duration: 20000,
		});
		await loading.present();

		const { role, data } = await loading.onDidDismiss();
		console.log("Loading dismissed !!");
		this.isLoading = false;
	}
}
