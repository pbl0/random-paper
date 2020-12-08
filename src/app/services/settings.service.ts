import { Injectable } from '@angular/core';
import { RedditService } from './reddit.service';
import { UnsplashService } from './unsplash.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  redditIsOn: boolean;
	unsplashIsOn: boolean;
  constructor(
	private redditService: RedditService,
	private unsplashService: UnsplashService,
  ) {
		this.redditIsOn = JSON.parse(localStorage.getItem('redditIsOn'));
		if (this.redditIsOn === null) {
			this.redditIsOn = false;
			this.setReddit(false);
		}
    
		this.unsplashIsOn = JSON.parse(localStorage.getItem('unsplashIsOn'));
		if (this.unsplashIsOn === null) {
			this.unsplashIsOn = false;
			this.setUnsplash(false);
		}
  }
  
  setStorage() {
		localStorage.setItem("redditIsOn", JSON.stringify(this.redditIsOn));
		localStorage.setItem("unsplashIsOn", JSON.stringify(this.unsplashIsOn));
  }
  
  setReddit(isOn: boolean){
    localStorage.setItem("redditIsOn", JSON.stringify(isOn));
  }

  setUnsplash(isOn: boolean){
    localStorage.setItem("unsplashIsOn", JSON.stringify(isOn));
  }


  pickRandomService() {
	let serviceArr = [];
	if (this.redditIsOn && this.redditService.settings.subs.length > 0) {
		serviceArr.push(this.redditService);
	}

	if (this.unsplashIsOn && this.unsplashService.settings.collections.length > 0) {
		serviceArr.push(this.unsplashService);
	}
	if (serviceArr.length <= 0){
		return null;
	} else {
		const rand = Math.floor(Math.random() * serviceArr.length);
		return serviceArr[rand];
	}


}
}
