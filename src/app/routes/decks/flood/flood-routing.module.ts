import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { environment as env } from '../../../../environments/environment';
import { FloodComponent } from './flood.component';

const routes: Routes = [
  {
    path: '',
    component: FloodComponent,
    children: env['supportedCards']['flood'],
  },
  // Optional, redirectTo first card in prep  
  {
    path: '**',
    redirectTo: 'location',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FloodRoutingModule {}
