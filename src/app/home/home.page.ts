import { Component, ElementRef, ViewChild } from "@angular/core";
import { RedditService, Wallpaper } from "../services/reddit.service";

import {
	FileTransfer,
	FileUploadOptions,
	FileTransferObject,
} from "@ionic-native/file-transfer/ngx";
import { File } from "@ionic-native/file/ngx";

import { Capacitor, Plugins } from "@capacitor/core";
import "capacitor-plugin-wallpaper";
import { FilePath } from "@ionic-native/file-path/ngx";
import { Base64 } from "@ionic-native/base64/ngx";

const { Wallpaper } = Plugins;
@Component({
	selector: "app-home",
	templateUrl: "home.page.html",
	styleUrls: ["home.page.scss"],
})
export class HomePage {
	wallpaper: Wallpaper;
	buttonActive: boolean = false;

	constructor(
		private redditService: RedditService,
		private transfer: FileTransfer,
		public file: File,
		private base64: Base64
	) {}

	onClickRandom() {
		if (!this.buttonActive) {
			this.redditService.getPicture().subscribe((resp) => {
				this.wallpaper = resp;
				console.log(
					"HomePage -> onClickRandom -> this.wallpaper",
					resp
				);
			});
		}
		this.buttonActive = !this.buttonActive;
	}

	clickChangePaper() {
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
		});
	}

	debug() {
		console.log("love u");
	}
}
