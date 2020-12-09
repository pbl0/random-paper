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

	addCollection() {
		if (this.collection.name.length === 0) {
			return;
		}
		const newCollection = new Collection(this.collection.name);
		this.unsplashService.addCollection(newCollection);

		this.collection.name = "";
		this.unsplashService.saveStorage();
	}

	changeCheck(collection: Collection) {
		// console.log(item);
		const pendientes = this.settings.collections.filter(
			(itemData) => !itemData.on
		).length;
		if (pendientes === 0) {
			this.collection.on = true;
		} else {
			this.collection.on = false;
		}

		this.unsplashService.saveStorage();
	}

	delete(i: number) {
		this.settings.collections.splice(i, 1);
		this.unsplashService.saveStorage();
	}

	change(){
		
		this.unsplashService.saveStorage();
	}

/* 	detectResolution(){
		this.settings.height = this.platform.height();
		this.settings.width = this.platform.width();
	} */
}
