import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedditSettingsPage } from './reddit-settings.page';

const routes: Routes = [
  {
    path: '',
    component: RedditSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedditSettingsPageRoutingModule {}
