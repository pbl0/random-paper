import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  redditIsOn: boolean;
	unsplashIsOn: boolean;
  constructor() {
		this.redditIsOn = JSON.parse(localStorage.getItem('redditIsOn'));
		if (this.redditIsOn === null) {
			this.redditIsOn = true;
			this.setReddit(true);
		}
    
		this.unsplashIsOn = JSON.parse(localStorage.getItem('unsplashIsOn'));
		if (this.unsplashIsOn === null) {
			this.unsplashIsOn = true;
			this.setUnsplash(true);
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
}
