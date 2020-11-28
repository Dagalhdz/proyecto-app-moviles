import { HeaderPage } from './../header/header.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambioAutoPageRoutingModule } from './cambio-auto-routing.module';

import { CambioAutoPage } from './cambio-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambioAutoPageRoutingModule
  ],
  declarations: [CambioAutoPage, HeaderPage]
})
export class CambioAutoPageModule {}
