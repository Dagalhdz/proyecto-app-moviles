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
  {
    path: 'info-auto/:id',
    loadChildren: () => import('./pages/info-autos/info-autos.module').then( m => m.InfoAutosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
