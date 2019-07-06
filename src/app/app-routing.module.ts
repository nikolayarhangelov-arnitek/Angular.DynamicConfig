import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// The configuration is available during initialization of the routes.
import { config } from './../environments/configuration';

import { AppLegacyPageComponent } from './app-legacy-page.component';

const routes: Routes = [
  {
    path: `legacy-page-1`, component: AppLegacyPageComponent,
    data: { url: `${config.legacyUrl}/search?q=1` }
  },
  {
    path: `legacy-page-2`, component: AppLegacyPageComponent,
    data: { url: `${config.legacyUrl}/search?q=2` }
  },
  {
    path: `legacy-page-3`, component: AppLegacyPageComponent,
    data: { url: `${config.legacyUrl}/search?q=3` }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
