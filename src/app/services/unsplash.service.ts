import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import {
  Collection,
  Item,
  Term,
  UnsplashSettings,
  User,
} from "../interfaces/unsplash-settings";
import { Wallpaper } from "../interfaces/wallpaper";

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
    console.log(this.settings);
  }

  getPicture() {
    const colectionOrUser = this.collectionOrUser();
    if (colectionOrUser == 'collection') {
      const collection = this.getRandomItem(this.settings.collections);
      return this.getRandomWallpaper(collection.name, colectionOrUser);
    } else if (colectionOrUser == 'user') {
      const user = this.getRandomItem(this.settings.users);
      return this.getRandomWallpaper(user.name, colectionOrUser);
    }
  }

  collectionOrUser(): string {
    let options = [];

    if (this.settings.collectionsOn){
      options.push('collection');
    }
    if (this.settings.usersOn){
      options.push('user');
    }
    const rand = Math.floor(Math.random() * options.length);

    return options[rand];
  }

  getRandomWallpaper(
    itemValue: string,
    itemType: string
  ): Observable<Wallpaper> {
    let url: string;
    if (this.settings.resolutionOn) {
      url = `/${itemType}/${itemValue}/${this.settings.width}x${this.settings.height}`;
    } else {
      url = `/${itemType}/${itemValue}`;
    }
    const wallpaper: Wallpaper = {
      origin: this.baseUrl + url,
      author: "Unsplash Source",
    };
    return of(wallpaper);
  }

/*   getRandomFromCollection(collectionId: string): Observable<Wallpaper> {
    let url: string;
    if (this.settings.resolutionOn) {
      url = `/collection/${collectionId}/${this.settings.width}x${this.settings.height}`;
    } else {
      url = `/collection/${collectionId}`;
    }

    const wallpaper: Wallpaper = {
      origin: this.baseUrl + url,
      author: "Unsplash Source",
    };
    return of(wallpaper);
  } */

  /*   getRandomCollection(){
    const collections = this.settings.collections.filter(item => item.on);
		const rand = Math.floor(Math.random() * collections.length);
		return collections[rand];
  } */

  getRandomItem<T extends Item>(itemList: T[]): T {
    const items = itemList.filter((item) => item.on);
    const rand = Math.floor(Math.random() * items.length);
    return items[rand];
  }

  addItem<T extends Item>(item: T, itemList: T[]) {
    itemList.push(item);
  }

  setOn(isOn: boolean, itemName: string) {
    if (itemName === "collection") {
      this.settings.collectionsOn = isOn;
    } else if (itemName === "user") {
      this.settings.usersOn = isOn;
    } else if (itemName === "term") {
      this.settings.termsOn = isOn;
    }
  }

  getCollections(): Collection[] {
    return this.settings.collections;
  }

  getUsers(): User[] {
    return this.settings.users;
  }

  getTerms(): Term[] {
    return this.settings.terms;
  }

  saveStorage() {
    localStorage.setItem("unsplash-settings", JSON.stringify(this.settings));
  }

  loadStorage() {
    if (localStorage.getItem("unsplash-settings")) {
      this.settings = JSON.parse(localStorage.getItem("unsplash-settings"));
    } else {
      this.settings = {
        collections: [new Collection("1111702")],
        users: [],
        terms: [],
      };
    }
  }
}
