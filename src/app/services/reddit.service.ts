import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, filter, map, tap } from "rxjs/operators";
import { RedditSettings, Sub } from '../interfaces/reddit-settings';

import {
	Child,
	ChildData,
	RedditResponse,
} from "../interfaces/reddit-response";

@Injectable({
	providedIn: "root",
})
export class RedditService {
	public baseUrl: string;
	// public subreddits: Sub[] = [];
	public settings: RedditSettings;
	private wallpapers: Wallpaper[] = [];
	constructor(private http: HttpClient) {
		this.baseUrl = "https://www.reddit.com/r";
		this.loadStorage();
	}

	getPicture(): Observable<Wallpaper> {
		const sub = this.getRandomSub();
        
		const str = `/${sub.name}/${this.settings.sorting}.json?limit=${this.settings.limit}`;
        
		const conditions = [".jpg", ".png", ".jpeg"];
		if(this.wallpapers.length <= 0){
			console.log("RedditService -> str", str);
			return this.http.get<RedditResponse>(this.baseUrl + str).pipe(
				map((items) => {
					let arr = items.data.children.filter((child) =>
						conditions.some((el) => child.data.url.includes(el))
					);
	
					for (let item of arr) {
						const wallpaper: Wallpaper = {
							url: item.data.url,
							author: item.data.author,
						};
						this.wallpapers.push(wallpaper);
					}
	
					console.log("RedditService -> this.wallpapers", this.wallpapers)
					if ( this.wallpapers.length === 0){
						return;
					} else if (this.wallpapers.length === 1){
						return this.wallpapers[0];
					} else {
						return this.getRandomPaper();
					}
					
				})
			);
		} else {
			return of(this.getRandomPaper());
		}
		
	}

	getRandomSub(): Sub{
		const subs = this.settings.subs.filter(item => item.on);
		const rand = Math.floor(Math.random() * subs.length);
		return subs[rand];
	}

	getRandomPaper(): Wallpaper{
		if ( this.wallpapers.length === 0){
			return;
		} else if (this.wallpapers.length === 1){
			return this.wallpapers[0];
		} else {
			return this.wallpapers[Math.floor(Math.random() * this.wallpapers.length)]
		}
		
	}

	addSub(sub: Sub){
		this.settings.subs.push(sub);
		this.saveStorage();
		
	}

	saveStorage() {
		this.resetWallpapers();
		localStorage.setItem("reddit-settings", JSON.stringify(this.settings));
	}

	loadStorage() {
		if (localStorage.getItem("reddit-settings")) {
			this.settings = JSON.parse(localStorage.getItem("reddit-settings"));
		} else {
			this.settings = {subs:[], sorting: 'hot', limit:1};
		}
	}

	resetWallpapers(){
		this.wallpapers = [];
	}
}

export interface Wallpaper {
	url: string;
	author: string;
}
