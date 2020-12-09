import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Collection, Term, UnsplashSettings, User } from '../interfaces/unsplash-settings';
import { Wallpaper } from '../interfaces/wallpaper';


@Injectable({
	providedIn: "root",
})
export class UnsplashService {
  public baseUrl: string;
  public settings: UnsplashSettings;
  

	constructor() {
    // https://source.unsplash.com/collection/190727/1080x2340
    this.baseUrl = "https://source.unsplash.com";
    this.loadStorage();
  }
  
  getPicture(){
    const collection = this.getRandomCollection();
    return this.getRandomFromCollection(collection.name);
  }

	getRandomFromCollection(collectionId: string): Observable<Wallpaper> {
    let url: string;
    if (this.settings.resolutionOn){
      url = `/collection/${ collectionId }/${this.settings.width}x${this.settings.height}`;
    } else {
      url = `/collection/${ collectionId }`;
    }
     
    
		const wallpaper: Wallpaper = {
			origin: this.baseUrl + url,
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

  getCollections(): Collection[]{
    return this.settings.collections;
  }

  getUsers(): User[]{
    return this.settings.users;
  }

  getTerms(): Term[]{
    return this.settings.terms;
  }
  
  loadStorage() {
		if (localStorage.getItem("unsplash-settings")) {
			this.settings = JSON.parse(localStorage.getItem("unsplash-settings"));
		} else {
			// this.settings = {collections:[new Collection('1111702')]};
		}
	}
  

}
