import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoAutosPageRoutingModule } from './info-autos-routing.module';

import { InfoAutosPage } from './info-autos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoAutosPageRoutingModule
  ],
  declarations: [InfoAutosPage]
})
export class InfoAutosPageModule {}
