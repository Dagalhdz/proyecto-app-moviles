import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambioAutoPage } from './cambio-auto.page';

const routes: Routes = [
  {
    path: '',
    component: CambioAutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambioAutoPageRoutingModule {}
