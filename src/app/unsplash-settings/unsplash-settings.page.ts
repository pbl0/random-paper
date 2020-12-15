import { Component, OnInit } from "@angular/core";
import { Collection, UnsplashSettings } from "../interfaces/unsplash-settings";
import { UnsplashService } from "../services/unsplash.service";


import { Platform } from '@ionic/angular';

@Component({
	selector: "app-unsplash-settings",
	templateUrl: "./unsplash-settings.page.html",
	styleUrls: ["./unsplash-settings.page.scss"],
})
export class UnsplashSettingsPage implements OnInit {
	collection: Collection;
	settings: UnsplashSettings;
	constructor(private unsplashService: UnsplashService,
		private platform: Platform) {
		this.settings = unsplashService.settings;
		this.collection = { name: "", on: true };
	}

	ngOnInit() {}

	change(){
		
		this.unsplashService.saveStorage();
	}

	getCollections(){
		return this.unsplashService.getCollections();
	}
	getUsers(){
		return this.unsplashService.getUsers();
	}
	getTerms(){
		return this.unsplashService.getTerms();
	}


/* 	detectResolution(){
		this.settings.height = this.platform.height();
		this.settings.width = this.platform.width();
	} */
}
