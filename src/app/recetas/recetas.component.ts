import { Component, OnInit } from '@angular/core';

import { recetas } from './recetas.model'

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {
  RecetaSeleccionada: recetas;
  constructor() { }

  ngOnInit(): void {
  }

}
