import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnsplashSettingsPageRoutingModule } from './unsplash-settings-routing.module';

import { UnsplashSettingsPage } from './unsplash-settings.page';
import { ItemListComponent } from '../components/item-list/item-list.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnsplashSettingsPageRoutingModule
  ],
  declarations: [UnsplashSettingsPage, ItemListComponent]
})
export class UnsplashSettingsPageModule {}
