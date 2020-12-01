import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoAutosPage } from './info-autos.page';

const routes: Routes = [
  {
    path: '',
    component: InfoAutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoAutosPageRoutingModule {}
