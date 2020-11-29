import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnsplashSettingsPageRoutingModule } from './unsplash-settings-routing.module';

import { UnsplashSettingsPage } from './unsplash-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnsplashSettingsPageRoutingModule
  ],
  declarations: [UnsplashSettingsPage]
})
export class UnsplashSettingsPageModule {}
