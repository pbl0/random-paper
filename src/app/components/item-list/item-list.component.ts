import { Component, Input, OnInit } from '@angular/core';
import { Collection, Term, UnsplashSettings, User } from 'src/app/interfaces/unsplash-settings';
import { UnsplashService } from 'src/app/services/unsplash.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  item: Collection | User | Term;
  @Input() itemList: Collection[] | User[]| Term[];
  constructor(private unsplashService: UnsplashService) { 
    
  }

  ngOnInit() {}

  changeCheck() {
		// console.log(item);
		const pendientes = this.itemList.filter(
			(itemData) => !itemData.on
		).length;
		if (pendientes === 0) {
			this.item.on = true;
		} else {
			this.item.on = false;
		}

		this.unsplashService.saveStorage();
  }
  
  addItem() {
		if (this.item.name.length === 0) {
			return;
		}
		const newCollection = new Collection(this.item.name);
		this.unsplashService.addCollection(newCollection);

		this.item.name = "";
		this.unsplashService.saveStorage();
	}

}
