import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs-pages',
    loadChildren: () => import('./pages/tabs-pages/tabs-pages.module').then( m => m.TabsPagesPageModule)
  },
  {
    path: '',
    redirectTo: 'tabs-pages/autos',
    pathMatch: 'full'
  },
  // {
  //   path: 'header',
  //   loadChildren: () => import('./pages/header/header.module').then( m => m.HeaderPageModule)
  // },

  // {
  //   path: 'autos',
  //   loadChildren: () => import('./pages/autos/autos.module').then( m => m.AutosPageModule)
  // },
  // {
  //   path: 'mapa',
  //   loadChildren: () => import('./pages/mapa/mapa.module').then( m => m.MapaPageModule)
  // },
  // {
  //   path: 'info',
  //   loadChildren: () => import('./pages/info/info.module').then( m => m.InfoPageModule)
  // },
  // {
  //   path: 'cambio-auto',
  //   loadChildren: () => import('./pages/cambio-auto/cambio-auto.module').then( m => m.CambioAutoPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
