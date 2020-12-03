import { Component, ViewChild } from "@angular/core";
import { RedditService, Wallpaper } from "../services/reddit.service";

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
import { UnsplashService } from "../services/unsplash.service";

// import { Wallpaper } from 'capacitor-plugin-wallpaper';

const { Wallpaper } = Plugins;
const { Browser } = Plugins;
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
	cachePath: string = this.file.cacheDirectory + 'walls/';
	fabColor = 'primary';


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
			this.fabColor = 'medium';
			this.presentLoading();
			if (this.wallpaper){
				this.wallpaper = null;
			}
			let service = this.pickRandomService();
			
			service.getPicture().subscribe((resp: Wallpaper) => {
				// this.wallpaper.author = resp.author;
				this.download(resp);
				console.log(
					"HomePage -> onClickRandom -> this.wallpaper",
					resp
				);
			});
		} else {
			this.fabColor = 'primary';
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
		this.getBase64(this.wallpaper.path);
		// this.download();
	}

	download(wall: Wallpaper) {
		
		const fileTransfer: FileTransferObject = this.transfer.create();
		// const url = this.wallpaper.url;
		const fileName = (new Date().getTime()).toString() + '.png';
		const path = this.cachePath + fileName;
		fileTransfer.download(wall.url, path).then(
			(entry) => {
				console.log("download complete: " + entry.toURL());

				this.wallpaper = {url: Capacitor.convertFileSrc( path ), author: wall.author, path: path, fileName: fileName};
				// this.myPath = path;
				// this.getBase64(path);
			},
			(error) => {
				// TODO: handle error
				console.log(error);
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
			this.file.moveFile(this.cachePath, this.wallpaper.fileName, this.file.dataDirectory, 'currentWall.png' ).then(entry => {
				this.loadingController.dismiss();
			},
			(error) => {
				// TODO: handle error
				console.log(error);
			})
			
		});
	}

	debug() {
		this.file.listDir(this.file.cacheDirectory,'walls').then((entry) =>{
			console.log(entry);
		})

		
/* 		this.file.listDir(this.file.applicationDirectory,'public').then((entry) =>{
			console.log('applicationDirectory',entry);
		}) */
/* 		this.file.listDir(this.file.applicationStorageDirectory,'..').then((entry) =>{
			console.log(entry);
		}) */
		this.file.listDir(this.file.dataDirectory,'..').then((entry) =>{
			console.log(entry);
		})
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
		this.isLoading = true;
		const loading = await this.loadingController.create({
			message: "Please wait...",
			duration: 10000,
		});
		await loading.present();

		const { role, data } = await loading.onDidDismiss();
		console.log("Loading dismissed !!");
		this.isLoading = false;
	}

	async onClickGithub(){
		await Browser.open({ url: 'https://github.com/pbl0/randomPaper' });
	}



}
