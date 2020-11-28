import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedditSettingsPageRoutingModule } from './reddit-settings-routing.module';

import { RedditSettingsPage } from './reddit-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedditSettingsPageRoutingModule
  ],
  declarations: [RedditSettingsPage]
})
export class RedditSettingsPageModule {}
