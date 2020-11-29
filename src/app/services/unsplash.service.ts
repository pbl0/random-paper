import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Collection, UnsplashSettings } from '../interfaces/unsplash-settings';
import { Wallpaper } from "./reddit.service";

@Injectable({
	providedIn: "root",
})
export class UnsplashService {
  public baseUrl: string;
  public settings: UnsplashSettings;
  private indexDummy = 0;
	constructor() {
    this.baseUrl = "https://source.unsplash.com";
    this.loadStorage();
  }
  
  getPicture(){
    const collection = this.getRandomCollection();
    return this.getRandomFromCollection(collection.name);
  }

	getRandomFromCollection(collectionId: string): Observable<Wallpaper> {
    const url = `/collection/${ collectionId }?${this.indexDummy}`;
    this.indexDummy++;
		const wallpaper: Wallpaper = {
			url: this.baseUrl + url,
			author: "Unsplash Source",
		};
		return of(wallpaper);
  }

  getRandomCollection(){
    const collections = this.settings.collections.filter(item => item.on);
		const rand = Math.floor(Math.random() * collections.length);
		return collections[rand];
  }

  addCollection(collection: Collection){
    this.settings.collections.push(collection);
    this.saveStorage();
  }

  saveStorage() {
		localStorage.setItem("unsplash-settings", JSON.stringify(this.settings));
  }
  
  loadStorage() {
		if (localStorage.getItem("unsplash-settings")) {
			this.settings = JSON.parse(localStorage.getItem("unsplash-settings"));
		} else {
			this.settings = {collections:[]};
		}
	}
  

}
