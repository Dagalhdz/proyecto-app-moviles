import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPagesPage } from './tabs-pages.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPagesPage,
    children: [
      {
        path: 'autos',
        loadChildren: () => import ('../autos/autos.module').then(m => m.AutosPageModule)
      },

      {
        path: 'mapa',
        loadChildren: () => import ('../mapa/mapa.module').then(m => m.MapaPageModule)
      },

      {
        path: 'info',
        loadChildren: () => import ('../info/info.module').then(m => m.InfoPageModule)
      },

      {
        path: 'cambio-auto',
        loadChildren: () => import ('../cambio-auto/cambio-auto.module').then(m => m.CambioAutoPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPagesPageRoutingModule {}
