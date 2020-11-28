import { Component, OnInit } from "@angular/core";
import { RedditSettings, Sub } from "../interfaces/reddit-settings";
import { RedditService } from "../services/reddit.service";

@Component({
	selector: "app-reddit-settings",
	templateUrl: "./reddit-settings.page.html",
	styleUrls: ["./reddit-settings.page.scss"],
})
export class RedditSettingsPage implements OnInit {
	// subList: Sub[];
	sub: Sub;
	settings: RedditSettings;
	constructor(private redditService: RedditService) {
		this.settings = redditService.settings;
		console.log(
			"RedditSettingsPage -> constructor -> this.settings",
			this.settings
		);
		this.sub = { name: "", on: true };
	}

	ngOnInit() {}

	addSub() {
		if (this.sub.name.length === 0) {
			return;
		}
		const newSub = new Sub(this.sub.name);
		this.redditService.addSub(newSub);

		this.sub.name = "";
		this.redditService.saveStorage();
	}

	changeCheck(sub: Sub) {
		// console.log(item);
		const pendientes = this.settings.subs.filter((itemData) => !itemData.on)
			.length;
		if (pendientes === 0) {
			this.sub.on = true;
		} else {
			this.sub.on = false;
		}

		this.redditService.saveStorage();
  }
  
  onChange(){
    this.redditService.saveStorage();
  }

	delete(i: number) {
		this.settings.subs.splice(i, 1);
		this.redditService.saveStorage();
	}
}
