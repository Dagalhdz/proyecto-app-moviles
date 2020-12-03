import { AutosService } from './../../services/autos.service';
import { Component, OnInit } from '@angular/core';
import { Auto } from '../../interfaces/auto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {

  autos: Auto[] = [];
  control: boolean = false;

  constructor(private autoService: AutosService, private router: Router) { }

  ngOnInit() {
  }

  buscarAuto(cadena:string){
    this.autos = this.autoService.buscarAuto(cadena);
    this.control = true;
  }

  verAuto(index: number){
    console.log(index)
    this.router.navigate(['/info-auto', index]);
  }

}
