import { Component, Input, OnInit } from '@angular/core';
import { Collection, Item, Term, UnsplashSettings, User } from 'src/app/interfaces/unsplash-settings';
import { UnsplashService } from 'src/app/services/unsplash.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  @Input() itemName: string;
  item: Item;
  @Input() itemList: Item[];
  @Input() isOn: boolean;
  constructor(private unsplashService: UnsplashService) { 
    this.item = { name: "", on: true };
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
		const newItem = new Item(this.item.name);
		this.unsplashService.addItem(newItem, this.itemList);

		this.item.name = "";
		this.unsplashService.saveStorage();
  }

  changeToggle(){
    // console.log(this.isOn);
    this.unsplashService.setOn(this.isOn, this.itemName);
		this.unsplashService.saveStorage();
	}
  
  delete(i: number) {
		this.itemList.splice(i, 1);
		this.unsplashService.saveStorage();
	}

}
