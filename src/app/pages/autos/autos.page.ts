import { AutosService } from './../../services/autos.service';
import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/core';
import { Auto } from 'src/app/interfaces/auto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.page.html',
  styleUrls: ['./autos.page.scss'],
})
export class AutosPage implements OnInit {

  autos: Auto;

  constructor(private autoService: AutosService, private _router: Router) { }

  ngOnInit() {
    this.autos = this.autoService.obtenerAutoTipo('deportivo');
  }

  onFilter( event: CustomEvent<SegmentChangeEventDetail> ){
    // console.log(this.autoService.obtenerAutoTipo(event.detail.value));
    this.autos = this.autoService.obtenerAutoTipo(event.detail.value);
  }

  verAuto(){
    this._router.navigate(['/info-auto', this.autos.id]);
  }
}
