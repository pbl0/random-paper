import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnsplashSettingsPage } from './unsplash-settings.page';

const routes: Routes = [
  {
    path: '',
    component: UnsplashSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnsplashSettingsPageRoutingModule {}
